/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { HeadingSecondary, HeadingTertiary } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { debounce } from "@shared/debounce";
import { PcDevs } from "@utils/constants";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { Card, React, TextInput } from "@webpack/common";

interface GoogleFontMetadata {
    family: string;
    displayName: string;
    authors: string[];
    category?: number;
    popularity?: number;
    variants: Array<{
        axes: Array<{
            tag: string;
            min: number;
            max: number;
        }>;
    }>;
}

const createGoogleFontUrl = (family: string, options = "") =>
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}${options}&display=swap`;

const loadFontStyle = (url: string) => {
    document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${url}">`);
    return document.createElement("style");
};

async function searchGoogleFonts(query: string) {
    try {
        const response = await fetch("https://fonts.google.com/$rpc/fonts.fe.catalog.actions.metadata.MetadataService/FontSearch", {
            method: "POST",
            headers: {
                "content-type": "application/json+protobuf",
                "x-user-agent": "grpc-web-javascript/0.1"
            },
            body: JSON.stringify([[query, null, null, null, null, null, 1], [5], null, 16])
        });

        const data = await response.json();
        if (!data?.[1]) return [];
        return data[1].map(([_, fontData]: [string, any[]]) => ({
            family: fontData[0],
            displayName: fontData[1],
            authors: fontData[2],
            category: fontData[3],
            variants: fontData[6].map((variant: any[]) => ({
                axes: variant[0].map(([tag, min, max]: [string, number, number]) => ({
                    tag, min, max
                }))
            }))
        }));
    } catch (err) {
        console.error("Failed to fetch fonts:", err);
        return [];
    }
}

const preloadFont = (family: string) =>
    loadFontStyle(createGoogleFontUrl(family, "&text=The quick brown fox jumps over the lazy dog"));

let styleElement: HTMLStyleElement | null = null;

const applyFont = async (fontFamily: string) => {
    if (!fontFamily) {
        styleElement?.remove();
        styleElement = null;
        return;
    }

    try {
        if (!styleElement) {
            styleElement = document.createElement("style");
            document.head.appendChild(styleElement);
        }

        loadFontStyle(createGoogleFontUrl(fontFamily, ":wght@300;400;500;600;700"));
        styleElement.textContent = `
            * {
                --font-primary: '${fontFamily}', sans-serif !important;
                --font-display: '${fontFamily}', sans-serif !important;
                --font-headline: '${fontFamily}', sans-serif !important;
                ${settings.store.applyOnCodeBlocks ? "--font-code: '${fontFamily}', monospace !important;" : ""}
            }
        `;
    } catch (err) {
        console.error("Failed to load font:", err);
    }
};

function GoogleFontSearch({ onSelect }: { onSelect: (font: GoogleFontMetadata) => void; }) {
    const [query, setQuery] = React.useState("");
    const [results, setResults] = React.useState<GoogleFontMetadata[]>([]);
    const [loading, setLoading] = React.useState(false);
    const previewStyles = React.useRef<HTMLStyleElement[]>([]);

    React.useEffect(() => () => {
        previewStyles.current.forEach(style => style.remove());
    }, []);

    const debouncedSearch = debounce(async (value: string) => {
        setLoading(true);
        if (!value) {
            setResults([]);
            setLoading(false);
            return;
        }

        const fonts = await searchGoogleFonts(value);
        previewStyles.current.forEach(style => style.remove());
        previewStyles.current = await Promise.all(fonts.map(f => preloadFont(f.family)));
        setResults(fonts);
        setLoading(false);
    }, 300);

    const handleSearch = (e: string) => {
        setQuery(e);
        debouncedSearch(e);
    };

    return (
        <section>
            <HeadingSecondary>{t("plugin.fontLoader.modal.settings.title")}</HeadingSecondary>
            <Paragraph>{t("plugin.fontLoader.modal.settings.description")}</Paragraph>

            <TextInput
                value={query}
                onChange={e => handleSearch(e)}
                placeholder={t("plugin.fontLoader.modal.settings.placeholder")}
                disabled={loading}
                className={Margins.bottom16}
            />

            {results.length > 0 && (
                <div className={classes(Margins.top8, "pc-googlefonts-results")}>
                    {results.map(font => (
                        <Card
                            key={font.family}
                            className={classes("pc-googlefonts-card", Margins.bottom8)}
                            onClick={() => onSelect(font)}
                        >
                            <div className="pc-googlefonts-preview" style={{ fontFamily: font.family }}>
                                <HeadingTertiary>{font.displayName}</HeadingTertiary>
                                <Paragraph>{t("plugin.fontLoader.modal.settings.previewText")}</Paragraph>
                            </div>
                            {font.authors?.length && (
                                <Paragraph className={Margins.top8} style={{ opacity: 0.7 }}>
                                    {t("plugin.fontLoader.modal.settings.authors", { authors: font.authors.join(", ") })}
                                </Paragraph>
                            )}
                        </Card>
                    ))}
                </div>
            )}
        </section>
    );
}

const settings = definePluginSettings({
    selectedFont: {
        get label() {
            return t("plugin.fontLoader.option.selectedFont.label");
        },
        get description() {
            return t("plugin.fontLoader.option.selectedFont.description");
        },
        type: OptionType.STRING,
        default: "",
        hidden: true
    },
    fontSearch: {
        get label() {
            return t("plugin.fontLoader.option.fontSearch.label");
        },
        get description() {
            return t("plugin.fontLoader.option.fontSearch.description");
        },
        type: OptionType.COMPONENT,
        component: () => (
            <GoogleFontSearch
                onSelect={font => {
                    settings.store.selectedFont = font.family;
                    applyFont(font.family);
                }}
            />
        )
    },
    applyOnCodeBlocks: {
        get label() {
            return t("plugin.fontLoader.option.applyOnCodeBlocks.label");
        },
        get description() {
            return t("plugin.fontLoader.option.applyOnCodeBlocks.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    }
});

export default definePlugin({
    name: "FontLoader",
    description: "Loads any font from Google Fonts",
    authors: [PcDevs.vmohammad, PcDevs.MutanPlex],
    settings,

    get displayDescription() {
        return t("plugin.fontLoader.description");
    },

    async start() {
        const savedFont = settings.store.selectedFont;
        if (savedFont) {
            await applyFont(savedFont);
        }
    },

    stop() {
        if (styleElement) {
            styleElement.remove();
            styleElement = null;
        }
    }
});
