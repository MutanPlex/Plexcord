/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { Heading } from "@components/Heading";
import { ModalAction, RenderModalProps } from "@plexcord/discord-types";
import { Margins } from "@utils/margins";
import { Modal, SearchableSelect, useEffect, useMemo, useState } from "@webpack/common";

import { DATASTORE_KEY, getSystemTimezone, resolveUserTimezone, settings, timezones } from ".";
import { setTimezone, setUserDatabaseTimezone } from "./database";

export async function setUserTimezone(userId: string, timezone: string | null) {
    timezones[userId] = timezone;
    await DataStore.set(DATASTORE_KEY, timezones);
}

export function SetTimezoneModal({ userId, modalProps, database }: { userId: string, modalProps: RenderModalProps; database?: boolean; }) {
    const [currentValue, setCurrentValue] = useState<string | null>(null);

    useEffect(() => {
        const resolvedTimezone = resolveUserTimezone(userId);
        setCurrentValue(resolvedTimezone ?? getSystemTimezone());
    }, [userId, settings.store.useDatabase, settings.store.preferDatabaseOverLocal]);

    const options = useMemo(() => {
        return Intl.supportedValuesOf("timeZone").map(timezone => {
            const offset = new Intl.DateTimeFormat(undefined, { timeZone: timezone, timeZoneName: "short" })
                .formatToParts(new Date())
                .find(part => part.type === "timeZoneName")!.value;

            return { label: `${timezone} (${offset})`, value: timezone };
        });
    }, []);

    const actions: ModalAction[] = [
        {
            text: t(plugin.timezones.modal.save),
            variant: "primary",
            disabled: currentValue === null,
            onClick: async () => {
                if (database) {
                    const success = await setTimezone(currentValue!);
                    if (success) {
                        await setUserDatabaseTimezone(userId, currentValue);
                    }
                } else {
                    await setUserTimezone(userId, currentValue);
                }

                modalProps.onClose();
            }
        }
    ];

    if (!database) {
        actions.unshift({
            text: t(plugin.timezones.modal.delete),
            variant: "critical-primary",
            disabled: false,
            onClick: async () => {
                await setUserTimezone(userId, null);
                modalProps.onClose();
            }
        });
    }

    return (
        <Modal
            {...modalProps}
            size="sm"
            title={t(plugin.timezones.modal.title)}
            actions={actions}
        >
            <section className={Margins.bottom16}>
                <Heading>
                    {t(plugin.timezones.modal.select)}
                </Heading>

                <SearchableSelect
                    options={options}
                    value={options.find(o => o.value === currentValue)?.value}
                    placeholder={t(plugin.timezones.modal.selectPlaceholder)}
                    maxVisibleItems={5}
                    closeOnSelect={true}
                    onChange={v => setCurrentValue(v)}
                />
            </section>
        </Modal>
    );
}
