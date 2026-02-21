/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import { definePluginSettings, migratePluginSettings } from "@api/Settings";
import { Divider } from "@components/Divider";
import { Heading } from "@components/Heading";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";
import { ColorPicker } from "@webpack/common";

import fathorse from "./fathorse";
import oneko from "./oneko";

const ONEKO_IMAGE = "https://raw.githubusercontent.com/adryd325/oneko.js/5281d057c4ea9bd4f6f997ee96ba30491aed16c0/oneko.gif";
const FATASS_HORSE_IMAGE = "https://raw.githubusercontent.com/nexpid/fatass-horse/08bc4042750d5f995c55327f7b6c6710158f5263/sheet.png";
const cl = classNameFactory("pc-cursor-buddy-");

function OnekoColorSettings() {
    const { furColor, outlineColor } = settings.use(["furColor", "outlineColor"]);

    const parseHexToNumber = (hex: string): number | null => {
        if (!hex || typeof hex !== "string") return null;
        const cleanHex = hex.replace(/^#/, "");
        if (cleanHex.length !== 6) return null;
        const num = parseInt(cleanHex, 16);
        return isNaN(num) ? null : num;
    };

    const formatNumberToHex = (num: number | null): string => {
        if (num === null) return "#FFFFFF";
        return "#" + num.toString(16).padStart(6, "0").toUpperCase();
    };

    const handleFurColorChange = (value: number | null) => {
        const hex = formatNumberToHex(value);
        settings.store.furColor = hex;
        load();
    };

    const handleOutlineColorChange = (value: number | null) => {
        const hex = formatNumberToHex(value);
        settings.store.outlineColor = hex;
        load();
    };

    return (
        <div>
            <div className={cl("color-modal")}>
                <div>
                    <Heading className="form-subtitle">{t(plugin.cursorBuddy.modal.furColor)}</Heading>
                    <div className={cl("color")}>
                        <ColorPicker
                            color={parseHexToNumber(furColor) ?? 16777215}
                            onChange={handleFurColorChange}
                            showEyeDropper={true}
                        />
                    </div>
                </div>

                <div>
                    <Heading className="form-subtitle">{t(plugin.cursorBuddy.modal.outlineColor)}</Heading>
                    <div className={cl("color")}>
                        <ColorPicker
                            color={parseHexToNumber(outlineColor) ?? 0}
                            onChange={handleOutlineColorChange}
                            showEyeDropper={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const settings = definePluginSettings({
    buddy: {
        label: () => t(plugin.cursorBuddy.option.buddy.label),
        description: () => t(plugin.cursorBuddy.option.buddy.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.cursorBuddy.option.buddy.oneko),
                value: "oneko",
                default: true
            },
            {
                label: () => t(plugin.cursorBuddy.option.buddy.fathorse),
                value: "fathorse"
            }
        ],
        onChange: load,
    },
    speed: {
        label: () => t(plugin.cursorBuddy.option.speed.label),
        description: () => t(plugin.cursorBuddy.option.speed.description),
        type: OptionType.NUMBER,
        default: 10,
        isValid: (value: number) => value >= 0 || t(plugin.cursorBuddy.option.speed.invalid),
        onChange: load,
    },
    fps: {
        label: () => t(plugin.cursorBuddy.option.fps.label),
        description: () => t(plugin.cursorBuddy.option.fps.description),
        type: OptionType.NUMBER,
        default: 24,
        isValid: (value: number) => value > 0 || t(plugin.cursorBuddy.option.fps.invalid),
        onChange: load
    },
    // Oneko Specific
    onekoSection: {
        type: OptionType.COMPONENT,
        component: () => (
            <div>
                <Heading style={{ fontSize: "1.6em", marginTop: "10px" }}>{t(plugin.cursorBuddy.option.onekoSection.label)}</Heading>
                <Divider style={{ marginBottom: "-10px" }}></Divider>
            </div>
        ),
    },
    onekoColorSettings: {
        type: OptionType.COMPONENT,
        component: OnekoColorSettings,
    },
    furColor: {
        label: () => t(plugin.cursorBuddy.option.furColor.label),
        description: () => t(plugin.cursorBuddy.option.furColor.description),
        type: OptionType.STRING,
        default: "#FFFFFF",
        onChange: load,
        hidden: true,
    },
    outlineColor: {
        label: () => t(plugin.cursorBuddy.option.outlineColor.label),
        description: () => t(plugin.cursorBuddy.option.outlineColor.description),
        type: OptionType.STRING,
        default: "#000000",
        onChange: load,
        hidden: true,
    },
    // Fatass Horse Specific
    fathorseSection: {
        type: OptionType.COMPONENT,
        component: () => (
            <div>
                <Heading style={{ fontSize: "1.6em", marginTop: "10px" }}>{t(plugin.cursorBuddy.option.fathorseSection.label)}</Heading>
                <Divider style={{ marginBottom: "-10px" }}></Divider>
            </div>
        ),
    },
    size: {
        label: () => t(plugin.cursorBuddy.option.size.label),
        description: () => t(plugin.cursorBuddy.option.size.description),
        type: OptionType.NUMBER,
        default: 120,
        isValid: (value: number) => value > 0 || t(plugin.cursorBuddy.option.size.invalid),
        onChange: load
    },
    fade: {
        label: () => t(plugin.cursorBuddy.option.fade.label),
        description: () => t(plugin.cursorBuddy.option.fade.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: load
    },
    freeroam: {
        label: () => t(plugin.cursorBuddy.option.freeroam.label),
        description: () => t(plugin.cursorBuddy.option.freeroam.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: load
    },
    shake: {
        label: () => t(plugin.cursorBuddy.option.shake.label),
        description: () => t(plugin.cursorBuddy.option.shake.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange: load,
    },
}, {
    // Oneko Specific
    furColor: {
        disabled() { return this.store.buddy !== "oneko"; }
    },
    outlineColor: {
        disabled() { return this.store.buddy !== "oneko"; }
    },
    // Fatass Horse Specific
    size: {
        disabled() { return this.store.buddy !== "fathorse"; },
    },
    fade: {
        disabled() { return this.store.buddy !== "fathorse"; },
    },
    freeroam: {
        disabled() { return this.store.buddy !== "fathorse"; },
    },
    shake: {
        disabled() { return this.store.buddy !== "fathorse"; },
    }
});

function unload() {
    document.getElementById("oneko")?.remove();
    document.getElementById("fathorse")?.remove();
}

function load() {
    if (!isPluginEnabled("CursorBuddy")) return;
    unload();

    switch (settings.store.buddy) {
        case "oneko": {
            oneko({
                speed: settings.store.speed,
                fps: settings.store.fps,
                image: ONEKO_IMAGE,
                persistPosition: false,
                furColor: settings.store.furColor,
                outlineColor: settings.store.outlineColor
            });
            break;
        }
        case "fathorse": {
            fathorse({
                speed: settings.store.speed,
                fps: settings.store.fps,
                size: settings.store.size,
                fade: settings.store.fade,
                freeroam: settings.store.freeroam,
                shake: settings.store.shake,
                image: FATASS_HORSE_IMAGE
            });
        }
    }
}

migratePluginSettings("CursorBuddy", "Oneko", "oneko");
export default definePlugin({
    name: "CursorBuddy",
    description: () => t(plugin.cursorBuddy.description),
    authors: [Devs.Ven, Devs.adryd, PcDevs.nexpid, PcDevs.ZcraftElite],
    settings,

    start: load,
    stop: unload,
});
