/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
// Useless Info Plugin

// Types
interface InfoItem { text: string; link?: string; }
interface StoredData { items: InfoItem[]; ts: number; etag?: string; raw?: any[]; }
interface Config { intervalMinutes: number; randomShortcut: string; historyShortcut: string; noRepeatEnabled?: boolean; noRepeatWindow?: number; }

// Constants
// Use the correct raw GitHub path: /:owner/:repo/:branch/:path
const GITHUB_RAW_URL = "https://raw.githubusercontent.com/tab2can/uselessInfo/main/data.json";
const CDN_FALLBACK_URL = "https://cdn.jsdelivr.net/gh/tab2can/uselessInfo@main/data.json";
const GITHUB_API_CONTENT_URL = "https://api.github.com/repos/tab2can/uselessInfo/contents/data.json?ref=main";
const STORAGE_DATA_KEY = "uselessInfo:data"; // StoredData
const STORAGE_HISTORY_KEY = "uselessInfo:history"; // InfoItem[] (last 10)
const STORAGE_RECENT_KEY = "uselessInfo:recent"; // string[] of last shown texts (queue)
const STORAGE_SHOWN_KEY = "uselessInfo:shown"; // string[] of all-time shown texts (set persisted)
const STORAGE_CONFIG_KEY = "uselessInfo:config"; // Config
const DEFAULT_CONFIG: Config = { intervalMinutes: 30, randomShortcut: "Alt+I", historyShortcut: "Alt+U", noRepeatEnabled: false, noRepeatWindow: 5 };
const DATA_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

// Runtime state
let keyListener: ((e: KeyboardEvent) => void) | null = null;
let intervalId: number | null = null;
let panelEl: HTMLElement | null = null;
let toastContainer: HTMLElement | null = null;
let isRecordingShortcut = false;

// i18n for UI strings
type UILang = Record<string, string>;
const uiLangs: Record<string, UILang> = {};
let currentUiLang: UILang | null = null;
async function loadUILang(code: string): Promise<UILang> {
    const key = code.toLowerCase().split("-")[0];
    if (uiLangs[key]) return uiLangs[key];
    try {
        const base = "/src/plugins/uselessInfo/langs/";
        // Try inline requires if available; else fallback to dynamic fetch
        let data: any = null;
        if (key === "tr") data = { "title": "UselessInfo", "settings": "Ayarlar", "intervalLabel": "Otomatik gösterim aralığı (dakika, 0=kapalı)", "randomShortcut": "Rastgele bilgi kısayolu", "historyShortcut": "Son 10 panel kısayolu", "noRepeatTitle": "Aynı içerikleri gösterme", "noRepeatWindow": "Son kaç içerik ile aynı olmasın (0 = hiçbiriyle)", "save": "Kaydet", "reset": "Sıfırla", "noneYet": "Henüz bir bilgi yok. Kısayolu kullan veya bekle.", "source": "Kaynak", "saved": "Ayarlar kaydedildi.", "resetDone": "Ayarlar varsayılanlara sıfırlandı.", "waiting": "Bekleniyor", "showRandom": "Rastgele Göster", "close": "Kapat", "fetchFail": "Veri alınamadı. Ağ bağlantısını veya engellemeleri kontrol edin.", "noNew": "Şu anlık yeni bilgi yok." };
        else if (key === "de") data = { "title": "UselessInfo", "settings": "Einstellungen", "intervalLabel": "Automatisches Anzeigen Intervall (Minuten, 0=aus)", "randomShortcut": "Zufallsfakt-Kurzbefehl", "historyShortcut": "Verlaufspanel-Kurzbefehl", "noRepeatTitle": "Keine gleichen Inhalte zeigen", "noRepeatWindow": "Mit wie vielen letzten Einträgen nicht übereinstimmen (0 = mit keinem)", "save": "Speichern", "reset": "Zurücksetzen", "noneYet": "Noch keine Fakten. Verwende die Tastenkombination oder warte.", "source": "Quelle", "saved": "Einstellungen gespeichert.", "resetDone": "Einstellungen auf Standard zurückgesetzt.", "waiting": "Wird erwartet", "showRandom": "Zufällig anzeigen", "close": "Schließen", "fetchFail": "Daten konnten nicht abgerufen werden. Netzwerk/Blockierungen prüfen.", "noNew": "Zurzeit keine neuen Infos." };
        else data = { "title": "UselessInfo", "settings": "Settings", "intervalLabel": "Auto show interval (minutes, 0=off)", "randomShortcut": "Random fact shortcut", "historyShortcut": "History panel shortcut", "noRepeatTitle": "Avoid showing same items", "noRepeatWindow": "How many recents to avoid (0 = avoid any shown)", "save": "Save", "reset": "Reset", "noneYet": "No facts yet. Use the shortcut or wait.", "source": "Source", "saved": "Settings saved.", "resetDone": "Settings reset to defaults.", "waiting": "Waiting", "showRandom": "Show Random", "close": "Close", "fetchFail": "Couldn’t fetch data. Check network or blockers.", "noNew": "No new info for now." };
        uiLangs[key] = data as UILang;
        currentUiLang = uiLangs[key];
        return uiLangs[key];
    } catch {
        return uiLangs.en || { "title": "UselessInfo", "settings": "Settings", "intervalLabel": "Auto show interval (minutes, 0=off)", "randomShortcut": "Random fact shortcut", "historyShortcut": "History panel shortcut", "save": "Save", "reset": "Reset", "noneYet": "No facts yet. Use the shortcut or wait.", "source": "Source", "saved": "Settings saved.", "resetDone": "Settings reset to defaults.", "waiting": "Waiting", "showRandom": "Show Random", "close": "Close" };
    }
}
function getDiscordLocale(): string {
    const normalize = (val: string | null | undefined) => {
        if (!val) return "";
        const s = String(val).trim();
        if (!s) return "";
        const base = s.toLowerCase();
        // prefer base language (e.g., en-US -> en)
        return base.split(/[-_]/)[0] || base;
    };
    try {
        // 1) HTML lang attribute
        const htmlLang = normalize(document.documentElement.getAttribute("lang") || (document.documentElement as any).lang);
        if (htmlLang) return htmlLang;
        // 2) Meta tags
        const meta = document.querySelector('meta[http-equiv="content-language"], meta[name="locale"], meta[property="og:locale"]') as HTMLMetaElement | null;
        const metaLang = normalize(meta?.content);
        if (metaLang) return metaLang;
        // 3) LocalStorage heuristics
        try {
            const directLocale = normalize(localStorage.getItem("locale") || localStorage.getItem("i18n_locale"));
            if (directLocale) return directLocale;
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (!k) continue;
                const v = localStorage.getItem(k);
                if (!v || v.length > 5000) continue; // skip huge entries for perf
                try {
                    const obj = JSON.parse(v);
                    const found = normalize(obj?.locale || obj?.language || obj?.lang);
                    if (found) return found;
                } catch { /* ignore non-JSON */ }
            }
        } catch { /* localStorage not accessible */ }
        // 4) Navigator fallback
        const navLang = normalize((navigator as any).language || (navigator as any).userLanguage);
        if (navLang) return navLang;
    } catch { }
    return "en";
}
function t(key: string, lang: UILang): string { return lang[key] || key; }
function getUILangSync(): UILang {
    return currentUiLang || uiLangs.en || { "title": "UselessInfo", "settings": "Settings", "intervalLabel": "Auto show interval (minutes, 0=off)", "randomShortcut": "Random fact shortcut", "historyShortcut": "History panel shortcut", "noRepeatTitle": "Avoid showing same items", "noRepeatWindow": "How many recents to avoid (0 = avoid any shown)", "save": "Save", "reset": "Reset", "noneYet": "No facts yet. Use the shortcut or wait.", "source": "Source", "saved": "Settings saved.", "resetDone": "Settings reset to defaults.", "waiting": "Waiting", "showRandom": "Show Random", "close": "Close", "fetchFail": "Couldn’t fetch data. Check network or blockers.", "noNew": "No new info for now." };
}

// In-memory fallback store when localStorage is not available
const memStore = new Map<string, any>();

// Utils: storage
function loadConfig(): Config {
    try {
        const raw = localStorage.getItem(STORAGE_CONFIG_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            return { ...DEFAULT_CONFIG, ...parsed } as Config;
        }
    } catch { }
    try {
        const v = memStore.get(STORAGE_CONFIG_KEY);
        if (v) return { ...DEFAULT_CONFIG, ...v } as Config;
    } catch { }
    return { ...DEFAULT_CONFIG };
}
function saveConfig(cfg: Config) {
    let ok = false;
    try { localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(cfg)); ok = true; } catch { }
    if (!ok) memStore.set(STORAGE_CONFIG_KEY, cfg);
}
function loadData(): StoredData | null {
    try {
        const raw = localStorage.getItem(STORAGE_DATA_KEY);
        if (raw) return JSON.parse(raw) as StoredData;
    } catch { /* ignore */ }
    try {
        const v = memStore.get(STORAGE_DATA_KEY);
        return v ? (v as StoredData) : null;
    } catch { return null; }
}
function saveData(data: StoredData) {
    let ok = false;
    try { localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(data)); ok = true; } catch { }
    if (!ok) memStore.set(STORAGE_DATA_KEY, data);
}
function loadHistory(): InfoItem[] {
    try {
        const raw = localStorage.getItem(STORAGE_HISTORY_KEY);
        if (!raw) throw new Error("no ls");
        return JSON.parse(raw) as InfoItem[];
    } catch {
        try {
            const v = memStore.get(STORAGE_HISTORY_KEY);
            return Array.isArray(v) ? (v as InfoItem[]) : [];
        } catch { return []; }
    }
}
function saveHistory(list: InfoItem[]) {
    const trimmed = list.slice(-10);
    let ok = false;
    try { localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(trimmed)); ok = true; } catch { }
    if (!ok) memStore.set(STORAGE_HISTORY_KEY, trimmed);
}

// Recent helpers (queue)
function loadRecent(): string[] {
    try {
        const raw = localStorage.getItem(STORAGE_RECENT_KEY);
        if (raw) return JSON.parse(raw) as string[];
    } catch { }
    try { return (memStore.get(STORAGE_RECENT_KEY) as string[]) || []; } catch { return []; }
}
function saveRecent(list: string[]) {
    let ok = false;
    try { localStorage.setItem(STORAGE_RECENT_KEY, JSON.stringify(list)); ok = true; } catch { }
    if (!ok) memStore.set(STORAGE_RECENT_KEY, list);
}

// Shown-ever helpers (set)
function loadShown(): Set<string> {
    try {
        const raw = localStorage.getItem(STORAGE_SHOWN_KEY);
        if (raw) return new Set<string>(JSON.parse(raw) as string[]);
    } catch { }
    try {
        const v = memStore.get(STORAGE_SHOWN_KEY) as string[] | undefined;
        return new Set<string>(Array.isArray(v) ? v : []);
    } catch { return new Set<string>(); }
}
function saveShown(set: Set<string>) {
    const arr = Array.from(set);
    let ok = false;
    try { localStorage.setItem(STORAGE_SHOWN_KEY, JSON.stringify(arr)); ok = true; } catch { }
    if (!ok) memStore.set(STORAGE_SHOWN_KEY, arr);
}

// Utils: text decode (UTF-8)
function decodeText(data: string | ArrayBuffer): string {
    try {
        if (typeof data === "string") return data;
        if (typeof TextDecoder !== "undefined") return new TextDecoder("utf-8").decode(new Uint8Array(data));
        // fallback
        return String.fromCharCode(...Array.from(new Uint8Array(data)));
    } catch { return ""; }
}

// Fetch and normalize
type FetchResult = { items?: InfoItem[]; raw?: any[]; etag?: string; notModified?: boolean; } | null;
async function fetchInfoList(prevEtag?: string): Promise<FetchResult> {
    const tryParse = (txt: string): { items: InfoItem[]; raw: any[]; } | null => {
        try {
            const parsed = JSON.parse(txt);
            const rawList: any[] = Array.isArray(parsed?.info) ? parsed.info : [];
            const items: InfoItem[] = rawList
                .map(x => {
                    if (!x || typeof x !== "object") return null;
                    const translations = (x as any).translations || {};
                    const en = translations.en || translations.tr || Object.values(translations)[0] || null;
                    if (en && typeof en.text === "string") return { text: en.text, link: typeof en.link === "string" ? en.link : undefined } as InfoItem;
                    return null;
                })
                .filter(Boolean) as InfoItem[];
            if (items.length) return { items, raw: rawList };
            return null;
        } catch { return null; }
    };

    // 1) Primary: raw.githubusercontent.com with ETag
    try {
        const headers: Record<string, string> = { "Cache-Control": "no-cache", "Pragma": "no-cache" };
        if (prevEtag) headers["If-None-Match"] = prevEtag;
        const resp = await fetch(GITHUB_RAW_URL, { headers });
        if (resp.status === 304) return { notModified: true };
        if (resp.ok) {
            const etag = resp.headers.get("ETag") || undefined;
            const txt = await resp.text();
            const parsed = tryParse(txt);
            if (parsed) return { items: parsed.items, raw: parsed.raw, etag };
        }
    } catch { }

    // 2) Fallback: jsDelivr CDN
    try {
        const resp = await fetch(CDN_FALLBACK_URL, { headers: { "Cache-Control": "no-cache", "Pragma": "no-cache" } });
        if (resp.ok) {
            const txt = await resp.text();
            const parsed = tryParse(txt);
            if (parsed) return { items: parsed.items, raw: parsed.raw };
        }
    } catch { }

    // 3) Fallback: GitHub API contents (raw preference, then base64 JSON)
    try {
        const respRaw = await fetch(GITHUB_API_CONTENT_URL, { headers: { Accept: "application/vnd.github.v3.raw" } });
        if (respRaw.ok) {
            const txt = await respRaw.text();
            const parsed = tryParse(txt);
            if (parsed) return { items: parsed.items, raw: parsed.raw };
        }
        const resp = await fetch(GITHUB_API_CONTENT_URL);
        if (resp.ok) {
            const j = await resp.json();
            if (j && typeof j === "object" && typeof j.content === "string") {
                try {
                    const b64 = (j.content as string).replace(/\n/g, "");
                    const txt = atob(b64);
                    const parsed = tryParse(txt);
                    if (parsed) return { items: parsed.items, raw: parsed.raw };
                } catch { }
            } else if (j && typeof j === "object" && typeof j.download_url === "string") {
                const r2 = await fetch(j.download_url);
                if (r2.ok) {
                    const txt2 = await r2.text();
                    const parsed2 = tryParse(txt2);
                    if (parsed2) return { items: parsed2.items, raw: parsed2.raw };
                }
            }
        }
    } catch { }

    // All failed
    try { showNotice("UselessInfo: Veri kaynağına ulaşılamıyor."); } catch { }
    return null;
}

async function ensureData(): Promise<InfoItem[]> {
    const now = Date.now();
    const existing = loadData();
    // Always revalidate using ETag when possible
    const res = await fetchInfoList(existing?.etag);
    if (res && res.items && res.items.length) {
        saveData({ items: res.items, raw: res.raw, ts: now, etag: res.etag });
        return res.items;
    }
    if (res && res.notModified && existing?.items?.length) {
        // Update timestamp to avoid repeated revalidation loops, keep items
        saveData({ items: existing.items, raw: existing.raw, ts: now, etag: existing.etag });
        return existing.items;
    }
    // Network error or invalid response: fallback to cached or built-in minimal list
    if (existing?.items?.length) return existing.items;
    return [
        { text: "Muzlar radyoaktiftir.", link: "https://www.mcgill.ca/oss/article/you-asked/it-true-banana-radioactive" }
    ];
}

// Hotkey helpers
type HotKey = { ctrl: boolean; shift: boolean; alt: boolean; meta: boolean; key: string; };
function parseShortcut(s: string): HotKey {
    const parts = s.split("+").map(p => p.trim().toLowerCase()).filter(Boolean);
    const hk: HotKey = { ctrl: false, shift: false, alt: false, meta: false, key: "" };
    for (const p of parts) {
        if (p === "ctrl" || p === "control") hk.ctrl = true;
        else if (p === "shift") hk.shift = true;
        else if (p === "alt" || p === "option") hk.alt = true;
        else if (p === "meta" || p === "cmd" || p === "command" || p === "win") hk.meta = true;
        else hk.key = p;
    }
    return hk;
}
function matchShortcut(e: KeyboardEvent, combo: string): boolean {
    const hk = parseShortcut(combo);
    if (!hk.key) return false;
    const target = (e.target as HTMLElement | null);
    // Ignore typing in inputs/textareas unless a modifier is present
    const isEditable = target && (target.closest("input, textarea, [contenteditable=true]") != null);
    if (isEditable && !(e.altKey || e.ctrlKey || e.metaKey)) return false;

    // Normalize Turkish-specific chars and make layout-robust using e.code
    const normalizeKey = (k: string) => k
        .replace(/ı/g, "i")
        .replace(/İ/g, "i")
        .toLowerCase();

    const keyWanted = normalizeKey(hk.key);
    const keyPressed = normalizeKey(e.key || "");

    // Compute desired code for common keys: KeyA-Z, Digit0-9, Numpad0-9, F1-F24, and specials
    let codeWanted = "";
    const mKey = keyWanted.match(/^key([a-z])$/);
    const mDigit = keyWanted.match(/^digit([0-9])$/);
    const mNumpad = keyWanted.match(/^numpad([0-9])$/);
    const mFn = keyWanted.match(/^f([0-9]{1,2})$/);
    if (mKey) codeWanted = `Key${mKey[1].toUpperCase()}`;
    else if (mDigit) codeWanted = `Digit${mDigit[1]}`;
    else if (mNumpad) codeWanted = `Numpad${mNumpad[1]}`;
    else if (mFn) codeWanted = `F${mFn[1]}`;
    else if (keyWanted === "space") codeWanted = "Space";
    else if (keyWanted === "enter") codeWanted = "Enter";
    else if (keyWanted === "escape" || keyWanted === "esc") codeWanted = "Escape";
    else if (keyWanted === "tab") codeWanted = "Tab";
    else if (keyWanted === "backspace") codeWanted = "Backspace";
    else if (keyWanted === "delete") codeWanted = "Delete";
    else if (keyWanted === "home") codeWanted = "Home";
    else if (keyWanted === "end") codeWanted = "End";
    else if (keyWanted === "pageup") codeWanted = "PageUp";
    else if (keyWanted === "pagedown") codeWanted = "PageDown";
    else if (keyWanted === "arrowup") codeWanted = "ArrowUp";
    else if (keyWanted === "arrowdown") codeWanted = "ArrowDown";
    else if (keyWanted === "arrowleft") codeWanted = "ArrowLeft";
    else if (keyWanted === "arrowright") codeWanted = "ArrowRight";
    else if (/^[a-z]$/.test(keyWanted)) codeWanted = `Key${keyWanted.toUpperCase()}`;

    const codeOk = !!codeWanted && e.code === codeWanted;
    const keyOk = keyPressed === keyWanted;

    return (codeOk || keyOk) && e.altKey === hk.alt && e.ctrlKey === hk.ctrl && e.shiftKey === hk.shift && e.metaKey === hk.meta;
}
// Produce a canonical, parseable combo from an event: e.g., Ctrl+Alt+KeyI
function canonicalKeyFromEvent(e: KeyboardEvent): string {
    const parts: string[] = [];
    if (e.ctrlKey) parts.push("Ctrl");
    if (e.shiftKey) parts.push("Shift");
    if (e.altKey) parts.push("Alt");
    if (e.metaKey) parts.push("Win");
    const code = e.code || "";
    const key = (e.key || "").toLowerCase();
    const isModifier = key === "control" || key === "shift" || key === "alt" || key === "meta";
    if (!isModifier) {
        if (/^Key[A-Z]$/.test(code) || /^Digit[0-9]$/.test(code) || /^Numpad[0-9]$/.test(code) || /^F[0-9]{1,2}$/.test(code) || /^(Enter|Escape|Space|Tab|Backspace|Delete|Home|End|PageUp|PageDown|Arrow(Up|Down|Left|Right))$/.test(code)) {
            parts.push(code);
        } else {
            const map: Record<string, string> = { " ": "Space", enter: "Enter", escape: "Escape", esc: "Escape", tab: "Tab", backspace: "Backspace", delete: "Delete" };
            const name = map[key] || (key.length === 1 ? (/[a-z]/.test(key) ? `Key${key.toUpperCase()}` : key.toUpperCase()) : key.charAt(0).toUpperCase() + key.slice(1));
            parts.push(name);
        }
    }
    return parts.join("+");
}
// Make an input capture keyboard and build a combo string on focus
function setupShortcutRecorder(input: HTMLInputElement) {
    input.readOnly = true;
    let listening = false;
    let handler: ((e: KeyboardEvent) => void) | null = null;
    let prevValue = "";
    let labelEl: HTMLElement | null = null;
    const findLabel = () => input.parentElement?.querySelector("span");
    const start = () => {
        if (listening) return;
        listening = true;
        isRecordingShortcut = true;
        prevValue = input.value;
        input.value = prevValue || "";
        input.placeholder = "Tuşlara basın...";
        labelEl = findLabel() as HTMLElement | null;
        try {
            const lang = getUILangSync();
            if (labelEl) { (labelEl as any).dataset._origText = labelEl.textContent || ""; labelEl.textContent = (labelEl.textContent || "") + " (" + t("waiting", lang) + ")"; }
        } catch { }
        handler = (e: KeyboardEvent) => {
            e.preventDefault();
            e.stopPropagation();
            const combo = canonicalKeyFromEvent(e);
            if (combo) input.value = combo;
            const key = (e.key || "").toLowerCase();
            const isModifier = key === "control" || key === "shift" || key === "alt" || key === "meta";
            if (!isModifier && combo) {
                setTimeout(() => input.blur(), 0);
            }
        };
        window.addEventListener("keydown", handler, true);
    };
    const stop = (cancel = false) => {
        if (!listening) return;
        listening = false;
        isRecordingShortcut = false;
        if (handler) window.removeEventListener("keydown", handler, true);
        handler = null;
        input.placeholder = "";
        if (cancel) input.value = prevValue; // revert visual if canceled
        if (labelEl) { const orig = (labelEl as any).dataset?._origText || labelEl.textContent || ""; labelEl.textContent = orig; }
        labelEl = null;
    };
    input.addEventListener("focus", start);
    // blur can be due to clicking elsewhere -> treat as cancel unless blur came from auto-confirm
    input.addEventListener("blur", () => stop(false));
    // If user clicks outside without pressing non-modifier, revert
    input.addEventListener("keydown", e => { /* prevent bubbling inside input */ e.stopPropagation(); });
}

// Toast UI
function getToastContainer(): HTMLElement {
    if (toastContainer && document.body.contains(toastContainer)) return toastContainer;
    const c = document.createElement("div");
    c.id = "uselessInfo-toast-container";
    Object.assign(c.style as any, {
        position: "fixed",
        right: "16px",
        bottom: "16px",
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        pointerEvents: "none"
    } as any);
    document.body.appendChild(c);
    toastContainer = c;
    return c;
}
function showToast(item: InfoItem) {
    const c = getToastContainer();
    const toast = document.createElement("div");
    Object.assign(toast.style as any, {
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        color: "var(--text-normal, #fff)",
        borderRadius: "10px",
        padding: "12px 14px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
        maxWidth: "420px",
        width: "max-content",
        pointerEvents: "auto",
        opacity: "0",
        transform: "translateY(10px)",
        transition: "opacity .18s ease, transform .18s ease"
    } as any);

    const text = document.createElement("div");
    text.textContent = item.text;
    Object.assign(text.style, { fontSize: "14px", lineHeight: "1.4", marginBottom: item.link ? "6px" : "0" } as CSSStyleDeclaration);

    toast.appendChild(text);

    if (item.link) {
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.rel = "noreferrer noopener";
        // Use UI lang for label
        try {
            loadUILang(getDiscordLocale()).then(lang => { a.textContent = t("source", lang); });
        } catch { a.textContent = "Source"; }
        Object.assign(a.style, { color: "#00b0f4", textDecoration: "none", fontSize: "12px" } as CSSStyleDeclaration);
        a.addEventListener("mouseenter", () => a.style.textDecoration = "underline");
        a.addEventListener("mouseleave", () => a.style.textDecoration = "none");
        toast.appendChild(a);
    }

    c.appendChild(toast);
    requestAnimationFrame(() => { toast.style.opacity = "1"; toast.style.transform = "translateY(0)"; });

    const remove = () => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(8px)";
        setTimeout(() => { toast.remove(); }, 200);
    };

    let hideTimer: number | null = null;
    const startHide = () => { hideTimer = window.setTimeout(remove, 6000); };
    const stopHide = () => { if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; } };

    startHide();
    toast.addEventListener("mouseenter", stopHide);
    toast.addEventListener("mouseleave", startHide);
}

// Simple notice toast (does not record history)
function showNotice(message: string) {
    const c = getToastContainer();
    const toast = document.createElement("div");
    Object.assign(toast.style as any, {
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "var(--text-normal, #fff)",
        borderRadius: "10px",
        padding: "10px 12px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
        maxWidth: "360px",
        width: "max-content",
        pointerEvents: "auto",
        opacity: "0",
        transform: "translateY(10px)",
        transition: "opacity .18s ease, transform .18s ease"
    } as any);
    const text = document.createElement("div");
    text.textContent = message;
    Object.assign(text.style, { fontSize: "13px", lineHeight: "1.4" } as CSSStyleDeclaration);
    toast.appendChild(text);
    c.appendChild(toast);
    requestAnimationFrame(() => { toast.style.opacity = "1"; toast.style.transform = "translateY(0)"; });
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(8px)";
        setTimeout(() => toast.remove(), 200);
    }, 2200);
}

// History handling
function pushHistory(item: InfoItem) {
    const hist = loadHistory();
    // avoid duplicates back-to-back
    if (hist.length === 0 || hist[hist.length - 1].text !== item.text) {
        hist.push(item);
        saveHistory(hist.slice(-10));
    }
    // Track recent/shown for no-repeat logic
    try {
        const cfg = loadConfig();
        const text = item.text || "";
        if (text) {
            // recent queue
            const recent = loadRecent();
            recent.push(text);
            const win = Math.max(0, Math.floor(cfg.noRepeatWindow ?? 5));
            const maxKeep = win > 0 ? Math.max(win, 10) : 50; // keep some tail; 0 means we'll use shown-ever instead
            saveRecent(recent.slice(-maxKeep));

            // shown-ever set when 0 means avoid any shown before
            if (cfg.noRepeatEnabled && (cfg.noRepeatWindow ?? 5) === 0) {
                const shown = loadShown();
                shown.add(text);
                saveShown(shown);
            }
        }
    } catch { }
}

async function getRandomItem(): Promise<InfoItem | null> {
    // Always fetch latest from remote, fall back to cache if needed
    const existingCache = loadData();
    const res = await fetchInfoList(existingCache?.etag);
    let list: InfoItem[] | null = null;
    let rawList: any[] | null = null;
    if (res && res.items && res.items.length) {
        saveData({ items: res.items, raw: (res as any).raw, ts: Date.now(), etag: res.etag });
        list = res.items;
        rawList = (res as any).raw || null;
    } else if (res && res.notModified && existingCache?.items?.length) {
        list = existingCache.items;
        rawList = existingCache.raw || null;
    } else {
        list = existingCache?.items || [];
        rawList = existingCache?.raw || null;
    }

    // If we have no raw translations (older cache), refetch without ETag to populate
    if (list && list.length && (!rawList || !Array.isArray(rawList))) {
        const res2 = await fetchInfoList(undefined);
        if (res2 && res2.items && res2.items.length) {
            saveData({ items: res2.items, raw: (res2 as any).raw, ts: Date.now(), etag: res2.etag });
            list = res2.items;
            rawList = (res2 as any).raw || null;
        }
    }

    if (!list || !list.length) return null;

    // Build candidate pool honoring no-repeat rules
    const cfg = loadConfig();
    const langCode = getDiscordLocale();
    const deriveText = (i: number): InfoItem | null => {
        if (rawList && Array.isArray(rawList)) {
            const src = rawList[i];
            const translations = src?.translations || {};
            const tr = translations[langCode] || translations.en || Object.values(translations)[0] || null;
            if (tr && typeof tr.text === "string") return { text: tr.text, link: typeof tr.link === "string" ? tr.link : undefined } as InfoItem;
        }
        return list[i] ?? null;
    };

    let indices = list.map((_, i) => i);
    if (cfg.noRepeatEnabled) {
        const win = Math.max(0, Math.floor(cfg.noRepeatWindow ?? 5));
        if (win === 0) {
            // Avoid any that have ever been shown
            const shown = loadShown();
            indices = indices.filter(i => {
                const it = deriveText(i);
                return it && !shown.has(it.text);
            });
        } else {
            // Avoid only against last N
            const recent = loadRecent();
            const lastN = recent.slice(-win);
            const lastSet = new Set(lastN);
            indices = indices.filter(i => {
                const it = deriveText(i);
                return it && !lastSet.has(it.text);
            });
        }
    }

    if (!indices.length) {
        // No new candidates in current rules
        const lang = getUILangSync();
        showNotice(t("noNew", lang));
        return null;
    }

    const idx = indices[Math.floor(Math.random() * indices.length)];
    return deriveText(idx);
}

async function showRandom() {
    try {
        const item = await getRandomItem();
        if (!item) {
            // Don’t fake content; inform user once
            try { const lang = getUILangSync(); showNotice(t("fetchFail", lang)); } catch { }
            return;
        }
        showToast(item);
        pushHistory(item);
        renderPanel(); // update if open
    } catch {
        // Swallow any unexpected runtime errors to avoid breaking UI
    }
}

// Panel UI
async function buildPanel(): Promise<HTMLElement> {
    const overlay = document.createElement("div");
    overlay.id = "uselessInfo-panel";
    Object.assign(overlay.style as any, {
        position: "fixed",
        inset: "0",
        background: "rgba(0,0,0,0.35)",
        zIndex: 999998,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // subtle blur to Discord content behind
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)"
    } as any);

    const panel = document.createElement("div");
    Object.assign(panel.style as any, {
        width: "min(680px, 92vw)",
        height: "70vh",
        background: "rgba(0,0,0,0.7)",
        color: "var(--text-normal, #fff)",
        borderRadius: "12px",
        boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column"
    } as any);

    // Scoped style for modern scrollbars
    const scopeClass = `uselessinfo-scope-${Math.random().toString(36).slice(2, 8)}`;
    panel.classList.add(scopeClass);
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-uselessinfo-style", "1");
    styleEl.textContent = `.${scopeClass} .ui-scrollable::-webkit-scrollbar{width:10px;height:10px}
.${scopeClass} .ui-scrollable::-webkit-scrollbar-track{background:transparent}
.${scopeClass} .ui-scrollable::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.18);border-radius:8px}
.${scopeClass} .ui-scrollable:hover::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.28)}
.${scopeClass} .ui-scrollable{scrollbar-color:rgba(255,255,255,0.18) transparent;scrollbar-width:thin;overscroll-behavior:contain}
/* Remove number input spinners */
.${scopeClass} input[type="number"]{appearance:textfield;-moz-appearance:textfield}
.${scopeClass} input[type="number"]::-webkit-outer-spin-button, .${scopeClass} input[type="number"]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
/* Switch styling */
.${scopeClass} .ui-switch{appearance:none;outline:none;width:44px;height:24px;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.2);border-radius:999px;position:relative;cursor:pointer;transition:background .2s ease,border-color .2s ease}
.${scopeClass} .ui-switch::after{content:"";position:absolute;top:2px;left:2px;width:20px;height:20px;background:#fff;border-radius:50%;transition:transform .2s ease}
.${scopeClass} .ui-switch:checked{background:#3ba55d;border-color:#3ba55d}
.${scopeClass} .ui-switch:checked::after{transform:translateX(20px)}`;
    panel.appendChild(styleEl);

    const header = document.createElement("div");
    const uiLang = await loadUILang(getDiscordLocale());
    header.textContent = t("title", uiLang);
    Object.assign(header.style as any, { padding: "12px 16px", fontWeight: "700", borderBottom: "1px solid rgba(255,255,255,0.06)", flex: "0 0 auto" } as any);

    const content = document.createElement("div");
    Object.assign(content.style as any, {
        display: "grid",
        gridTemplateColumns: "1fr 280px",
        gap: "0",
        minHeight: 0,
        // prevent panel growth; let this area flex and scroll inside
        flex: 1,
        height: "100%",
        overflow: "hidden",
        minInlineSize: 0,
        minBlockSize: 0
    } as any);

    const listWrap = document.createElement("div");
    Object.assign(listWrap.style as any, {
        padding: "12px 16px",
        overflowY: "auto",
        height: "100%",
        minHeight: 0
    } as any);
    listWrap.classList.add("ui-scrollable");

    const sidebar = document.createElement("div");
    Object.assign(sidebar.style as any, {
        padding: "12px 14px",
        borderLeft: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        // Match toast background & blur
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        overflowY: "auto",
        minHeight: 0
    } as any);
    sidebar.classList.add("ui-scrollable");

    const footer = document.createElement("div");
    Object.assign(footer.style as any, { padding: "10px 16px", display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.06)", flex: "0 0 auto" } as any);

    const btnClose = document.createElement("button");
    btnClose.textContent = t("close", uiLang) || "Close";
    styleButton(btnClose);
    btnClose.addEventListener("click", () => hidePanel());

    const btnRandom = document.createElement("button");
    btnRandom.textContent = (uiLang.showRandom) || "Show Random";
    styleButton(btnRandom);
    btnRandom.addEventListener("click", () => { showRandom(); });

    footer.appendChild(btnRandom);
    footer.appendChild(btnClose);

    panel.appendChild(header);
    content.appendChild(listWrap);
    content.appendChild(sidebar);
    panel.appendChild(content);
    panel.appendChild(footer);

    overlay.appendChild(panel);

    // Sidebar: settings
    const cfg = loadConfig();

    const mkField = (label: string, input: HTMLElement) => {
        const row = document.createElement("label");
        Object.assign(row.style, { display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px" } as CSSStyleDeclaration);
        const span = document.createElement("span"); span.textContent = label; span.style.opacity = "0.8";
        row.appendChild(span); row.appendChild(input);
        sidebar.appendChild(row);
    };

    const intervalInput = document.createElement("input");
    intervalInput.type = "number"; intervalInput.min = "0"; intervalInput.max = "1440"; intervalInput.step = "1";
    intervalInput.valueAsNumber = cfg.intervalMinutes;
    styleInput(intervalInput);
    mkField(t("intervalLabel", uiLang), intervalInput);

    const randomInput = document.createElement("input");
    randomInput.type = "text"; randomInput.value = cfg.randomShortcut; styleInput(randomInput);
    randomInput.placeholder = "Alt+I";
    mkField(t("randomShortcut", uiLang), randomInput);

    const historyInput = document.createElement("input");
    historyInput.type = "text"; historyInput.value = cfg.historyShortcut; styleInput(historyInput);
    historyInput.placeholder = "Alt+U";
    mkField(t("historyShortcut", uiLang), historyInput);
    // enable press-to-set behavior
    setupShortcutRecorder(randomInput as HTMLInputElement);
    setupShortcutRecorder(historyInput as HTMLInputElement);

    // No-repeat toggle and window size (labels above controls)
    const noRepeatToggle = document.createElement("input");
    noRepeatToggle.type = "checkbox"; noRepeatToggle.checked = !!cfg.noRepeatEnabled; noRepeatToggle.classList.add("ui-switch");
    mkField(t("noRepeatTitle", uiLang), noRepeatToggle);
    const noRepeatWindow = document.createElement("input");
    noRepeatWindow.type = "number"; noRepeatWindow.min = "0"; noRepeatWindow.max = "9999"; noRepeatWindow.step = "1"; noRepeatWindow.value = String(Math.max(0, Math.floor(cfg.noRepeatWindow ?? 5)));
    styleInput(noRepeatWindow as HTMLInputElement);
    mkField(t("noRepeatWindow", uiLang), noRepeatWindow);

    const btnSave = document.createElement("button");
    btnSave.textContent = t("save", uiLang); styleButton(btnSave);
    btnSave.addEventListener("click", () => {
        const newCfg: Config = {
            intervalMinutes: Number.isFinite(intervalInput.valueAsNumber) ? Math.max(0, Math.floor(intervalInput.valueAsNumber)) : 0,
            randomShortcut: randomInput.value.trim() || DEFAULT_CONFIG.randomShortcut,
            historyShortcut: historyInput.value.trim() || DEFAULT_CONFIG.historyShortcut,
            noRepeatEnabled: !!noRepeatToggle.checked,
            noRepeatWindow: Math.max(0, Math.floor(Number(noRepeatWindow.value) || 0)),
        };
        saveConfig(newCfg);
        applyConfig(newCfg);
        loadUILang(getDiscordLocale()).then(lang => showNotice(t("saved", lang)));
    });

    const btnReset = document.createElement("button");
    btnReset.textContent = t("reset", uiLang); styleButton(btnReset);
    btnReset.addEventListener("click", () => {
        saveConfig({ ...DEFAULT_CONFIG });
        applyConfig({ ...DEFAULT_CONFIG });
        // Reflect defaults visually too
        intervalInput.valueAsNumber = DEFAULT_CONFIG.intervalMinutes;
        randomInput.value = DEFAULT_CONFIG.randomShortcut;
        historyInput.value = DEFAULT_CONFIG.historyShortcut;
        noRepeatToggle.checked = !!DEFAULT_CONFIG.noRepeatEnabled;
        noRepeatWindow.value = String(Math.max(0, Math.floor(DEFAULT_CONFIG.noRepeatWindow ?? 5)));
        renderPanel();
        loadUILang(getDiscordLocale()).then(lang => showNotice(t("resetDone", lang)));
    });

    const settingsBtns = document.createElement("div");
    Object.assign(settingsBtns.style, { display: "flex", gap: "8px", marginTop: "8px" } as CSSStyleDeclaration);
    settingsBtns.appendChild(btnSave);
    settingsBtns.appendChild(btnReset);
    sidebar.appendChild(settingsBtns);

    // List rendering
    const renderList = () => {
        listWrap.innerHTML = "";
        const hist = loadHistory();
        if (!hist.length) {
            const empty = document.createElement("div");
            empty.textContent = t("noneYet", uiLang);
            Object.assign(empty.style, { opacity: "0.7", fontSize: "14px" } as CSSStyleDeclaration);
            listWrap.appendChild(empty);
            return;
        }
        const ul = document.createElement("div");
        Object.assign(ul.style, { display: "flex", flexDirection: "column", gap: "10px" } as CSSStyleDeclaration);
        for (let i = hist.length - 1; i >= 0; i--) {
            const it = hist[i];
            const card = document.createElement("div");
            Object.assign(card.style, {
                padding: "10px 12px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
            } as CSSStyleDeclaration);
            const text = document.createElement("div"); text.textContent = it.text; Object.assign(text.style, { marginBottom: it.link ? "6px" : "0", lineHeight: "1.4" } as CSSStyleDeclaration);
            card.appendChild(text);
            if (it.link) {
                const a = document.createElement("a"); a.href = it.link; a.target = "_blank"; a.rel = "noreferrer noopener"; a.textContent = it.link;
                Object.assign(a.style, { color: "#00b0f4", fontSize: "12px", textDecoration: "none" } as CSSStyleDeclaration);
                a.addEventListener("mouseenter", () => a.style.textDecoration = "underline");
                a.addEventListener("mouseleave", () => a.style.textDecoration = "none");
                card.appendChild(a);
            }
            ul.appendChild(card);
        }
        listWrap.appendChild(ul);
    };

    (overlay as any)._renderList = renderList;

    return overlay;
}

function styleButton(btn: HTMLButtonElement) {
    Object.assign(btn.style, {
        padding: "8px 12px",
        borderRadius: "8px",
        background: "rgba(255,255,255,0.08)",
        color: "var(--interactive-normal, #ddd)",
        border: "1px solid rgba(255,255,255,0.12)",
        cursor: "pointer",
        fontSize: "13px"
    } as CSSStyleDeclaration);
    btn.addEventListener("mouseenter", () => btn.style.background = "rgba(255,255,255,0.14)");
    btn.addEventListener("mouseleave", () => btn.style.background = "rgba(255,255,255,0.08)");
}
function styleInput(inp: HTMLInputElement) {
    Object.assign(inp.style, {
        padding: "8px 10px",
        borderRadius: "8px",
        background: "rgba(255,255,255,0.06)",
        color: "var(--text-normal, #fff)",
        border: "1px solid rgba(255,255,255,0.12)",
        outline: "none",
        fontSize: "13px"
    } as CSSStyleDeclaration);
}

function renderPanel() {
    if (!panelEl || !document.body.contains(panelEl)) return;
    const renderList = (panelEl as any)._renderList as (() => void) | undefined;
    if (renderList) renderList();
}

function showPanel() {
    if (panelEl && document.body.contains(panelEl)) { renderPanel(); return; }
    (async () => {
        const el = await buildPanel();
        panelEl = el;
        document.body.appendChild(panelEl);
        // click outside to close
        panelEl.addEventListener("click", e => { if (e.target === panelEl) hidePanel(); });
        renderPanel();
    })();
}
function hidePanel() {
    if (panelEl) { panelEl.remove(); panelEl = null; }
}

// Apply config: timers & listeners
function applyConfig(cfg: Config) {
    // interval
    if (intervalId) { clearInterval(intervalId); intervalId = null; }
    if (cfg.intervalMinutes > 0) {
        intervalId = window.setInterval(() => { showRandom(); }, cfg.intervalMinutes * 60 * 1000);
    }
    // key listener
    if (keyListener) { window.removeEventListener("keydown", keyListener, true); keyListener = null; }
    keyListener = (e: KeyboardEvent) => {
        try {
            if (isRecordingShortcut) return; // Don't trigger while recording a new shortcut
            if (matchShortcut(e, cfg.randomShortcut)) { e.preventDefault(); e.stopPropagation(); showRandom(); return; }
            if (matchShortcut(e, cfg.historyShortcut)) { e.preventDefault(); e.stopPropagation(); if (panelEl) hidePanel(); else showPanel(); return; }
        } catch { }
    };
    window.addEventListener("keydown", keyListener, true);
}

export default definePlugin({
    name: "UselessInfo",
    description: "Shows random useless information within Discord; shortcuts and spacing are adjustable.",
    authors: [PcDevs.He4vuc],
    async start() {
        const cfg = loadConfig();
        // Preload UI language based on current locale
        try { await loadUILang(getDiscordLocale()); } catch { }
        applyConfig(cfg);
        // Warm up data cache
        ensureData().then(() => { /* noop */ });
    },
    stop() {
        if (intervalId) { clearInterval(intervalId); intervalId = null; }
        if (keyListener) { window.removeEventListener("keydown", keyListener, true); keyListener = null; }
        if (panelEl) { panelEl.remove(); panelEl = null; }
        if (toastContainer) { toastContainer.remove(); toastContainer = null; }
    }
});
