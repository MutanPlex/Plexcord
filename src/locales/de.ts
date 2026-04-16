/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import type enTranslations from "./en-US";
import type { MatchStructure } from "./types";

const translations: MatchStructure<typeof enTranslations> = {
    settings: {
        title: "Einstellungen",
        language: {
            selector: {
                label: "Sprache",
                description: "Wähle deine bevorzugte Sprache für Plexcord.",
                placeholder: "Sprache auswählen"
            }
        },
        location: {
            label: "Position der Einstellungen",
            description: "Wo der Plexcord-Einstellungsbereich platziert werden soll",
            top: "Ganz oben",
            nitro: {
                above: "Über dem Nitro-Bereich",
                below: "Unter dem Nitro-Bereich"
            },
            activity: {
                above: "Über den Aktivitätseinstellungen",
                below: "Unter den Aktivitätseinstellungen"
            },
            bottom: "Ganz unten"
        },
        switches: {
            useQuickCss: {
                label: "Benutzerdefiniertes CSS aktivieren",
                description: "Lädt benutzerdefiniertes CSS aus dem QuickCSS-Editor. Dies ermöglicht es dir, das Aussehen von Discord mit eigenen Stilen anzupassen."
            },
            enableReactDevtools: {
                label: "React Developer Tools aktivieren",
                description: "Aktiviert die React Developer Tools-Erweiterung zum Debuggen von Discords React-Komponenten. Nützlich für die Plugin-Entwicklung."
            },
            mainWindowFrameless: {
                label: "Hauptfensterrahmen deaktivieren",
                description: "Entfernt den nativen Fensterrahmen für ein saubereres Aussehen. Du kannst das Fenster weiterhin verschieben, indem du den Bereich der Titelleiste ziehst."
            },
            frameless: {
                label: "Fensterrahmen deaktivieren",
                description: "Entfernt den nativen Fensterrahmen für ein saubereres Aussehen. Du kannst das Fenster weiterhin verschieben, indem du den Bereich der Titelleiste ziehst."
            },
            winNativeTitleBar: {
                label: "Native Windows-Titelleiste anstelle der benutzerdefinierten von Discord verwenden",
                description: "Ersetzt die benutzerdefinierte Titelleiste von Discord durch die Standard-Windows-Titelleiste. Dies kann die Kompatibilität mit einigen Fensterverwaltungstools verbessern."
            },
            transparent: {
                label: "Fenstertransparenz aktivieren",
                description: "Macht das Discord-Fenster transparent. Ein Theme, das Transparenz unterstützt, ist erforderlich, andernfalls hat dies keine Auswirkungen.",
                isWindows: "Dies verhindert, dass das Fenster in der Größe verändert werden kann, und verhindert das Andocken an Bildschirmrändern.",
                notWindows: "Dies verhindert, dass das Fenster in der Größe verändert werden kann."
            },
            winCtrlQ: {
                label: "Strg+Q als Tastenkürzel zum Schließen von Discord registrieren (Alternative zu Alt+F4)",
                description: "Fügt Strg+Q als Tastenkombination zum Schließen von Discord hinzu. Dies bietet eine Alternative zu Alt+F4, um die Anwendung schnell zu beenden."
            },
            disableMinSize: {
                label: "Mindestfenstergröße deaktivieren",
                description: "Ermöglicht es, das Discord-Fenster kleiner als seine Standard-Mindestgröße zu machen. Nützlich für Tiling-Window-Manager oder kleine Bildschirme."
            }
        },
        quickActions: {
            title: "Schnellaktionen",
            description: "Häufige Aktionen, die du eventuell ausführen möchtest. Diese Verknüpfungen bieten schnellen Zugriff auf oft genutzte Funktionen, ohne durch Menüs navigieren zu müssen.",
            notificationLog: "Benachrichtigungsprotokoll",
            editQuickCSS: "QuickCSS bearbeiten",
            relaunchDiscord: "Discord neu starten",
            openSettingsFolder: "Einstellungsordner öffnen",
            viewSourceCode: "Quellcode anzeigen"
        },
        specialCards: {
            donations: {
                title: "Spenden",
                subtitle: "Vielen Dank für deine Spende!",
                description: "Du kannst deine Vorteile jederzeit verwalten, indem du @mutanplex eine Nachricht sendest.",
                button: "Spenden",
                invite: "Tritt unserem Discord bei",
                invalid: "Ungültiger oder abgelaufener Einladungslink."
            },
            supportProject: {
                title: "Projekt unterstützen",
                description: "Bitte ziehe es in Erwägung, die Entwicklung von Plexcord durch eine Spende zu unterstützen!"
            },
            contributions: {
                title: "Beiträge",
                subtitle: "Vielen Dank für deinen Beitrag!",
                description: "Da du zu Plexcord beigetragen hast, besitzt du nun ein cooles neues Abzeichen!",
                buttonTitle: "Sieh dir an, wozu du beigetragen hast"
            }
        },
        settingsSection: {
            title: "Einstellungen",
            description: "Konfiguriere, wie Plexcord sich verhält und in Discord integriert wird. Diese Einstellungen beeinflussen das Aussehen und Verhalten des Discord-Clients.",
            hintParts: {
                prefix: "Du kannst anpassen, wo dieser Einstellungsbereich im Discord-Menü erscheint, indem du das {{pluginLink}} konfigurierst.",
                linkText: "Einstellungen-Plugin"
            }
        },
        notifications: {
            title: "Benachrichtigungen",
            description: "Konfiguriere, wie Plexcord mit Benachrichtigungen umgeht. Du kannst anpassen, wann und wie du Warnungen erhältst, oder einen Verlauf vergangener Benachrichtigungen anzeigen.",
            settings: "Benachrichtigungseinstellungen",
            viewLog: "Benachrichtigungsprotokoll anzeigen",
            permissions: {
                denied: {
                    title: "Berechtigung für Desktop-Benachrichtigungen verweigert",
                    label: "Du hast die Berechtigungen für Benachrichtigungen verweigert. Desktop-Benachrichtigungen werden nicht funktionieren!"
                }
            },
            style: {
                label: "Benachrichtigungsstil",
                description: "Einige Plugins zeigen dir eventuell Benachrichtigungen an. Diese gibt es in zwei Stilen:",
                plexcord: "Plexcord-Benachrichtigungen",
                plexcordDesc: "Dies sind In-App-Benachrichtigungen",
                desktop: "Desktop-Benachrichtigungen",
                desktopDesc: "Native Desktop-Benachrichtigungen (wie bei einer Erwähnung)",
                onlyWhenNotFocused: "Desktop-Benachrichtigungen nur verwenden, wenn Discord nicht fokussiert ist",
                always: {
                    desktop: "Immer Desktop-Benachrichtigungen verwenden",
                    plexcord: "Immer Plexcord-Benachrichtigungen verwenden"
                }
            },
            positions: {
                label: "Position der Benachrichtigung",
                right: {
                    bottom: "Unten rechts",
                    top: "Oben rechts",
                },
                left: {
                    bottom: "Unten links",
                    top: "Oben links",
                }
            },
            missed: {
                label: "Anzahl verpasster Benachrichtigungen",
                description: "Beim erneuten Fokussieren von Discord erscheint eine Benachrichtigung mit der Anzahl der verpassten Meldungen",
                whileYou: "Während du weg warst",
                count: "{{count}} Benachrichtigung{{s}} empfangen",
                s: "en"
            },
            timeout: {
                label: "Benachrichtigungs-Timeout",
                description: "Die Zeitspanne (in Sekunden), die Benachrichtigungen auf dem Bildschirm bleiben, bevor sie automatisch verschwinden"
            },
            logLimit: {
                label: "Limit für Benachrichtigungsprotokoll",
                description: "Die maximale Anzahl an Benachrichtigungen, die im Protokoll gespeichert werden, bevor alte Einträge entfernt werden. Setze es auf {{disable}}, um das Protokoll zu deaktivieren, und auf {{unlimited}}, um alte Benachrichtigungen nie automatisch zu entfernen."
            },
            opacity: {
                label: "Deckkraft der Benachrichtigung",
                description: "Die Deckkraft der In-App-Benachrichtigungen"
            },
            maxNotifications: {
                label: "Maximale Benachrichtigungen",
                description: "Maximale Anzahl der gleichzeitig angezeigten Benachrichtigungen"
            },
            behavior: {
                label: "Benachrichtigungsverhalten",
            },
            disableInStreamerMode: {
                label: "Im Streamer-Modus deaktivieren",
                description: "Deaktiviert Benachrichtigungen, während der Streamer-Modus aktiv ist"
            },
            renderImages: {
                label: "Bilder rendern",
                description: "Bilder in Benachrichtigungen anzeigen"
            },
            streamingTreatment: {
                label: "Behandlung beim Streaming",
                description: "Wie Benachrichtigungen behandelt werden sollen, während du deinen Bildschirm teilst",
                normal: "Normal - Benachrichtigung normal anzeigen",
                noContent: "Kein Inhalt - Den Text der Benachrichtigung ausblenden",
                ignore: "Ignorieren - Die Benachrichtigung gar nicht erst anzeigen"
            },
        },
        macVibrancy: {
            title: "Fenster-Vibrancy-Stil (erfordert Neustart)",
            description: "Passe den macOS-Fenster-Vibrancy-Effekt an. Dies steuert den Unschärfe- und Transparenzstil des Discord-Fensters. Änderungen erfordern einen Neustart.",
            placeholder: "Fenster-Vibrancy-Stil",
            style: {
                no: "Keine Vibrancy",
                underPage: "Unter Seite (Fenstertönung)",
                content: "Inhalt",
                window: "Fenster",
                selection: "Auswahl",
                titlebar: "Titelleiste",
                header: "Header",
                sidebar: "Seitenleiste",
                tooltip: "Tooltip",
                menu: "Menü",
                popover: "Popover",
                fullscreenUI: "Vollbild-UI (Transparent, aber leicht verschwommen)",
                hud: "HUD (Am transparentesten)"
            }
        }
    },

    plugins: {
        title: "Plugins",
        new: "NEU",
        unknown: "Unbekannt",
        noDescription: "Keine Beschreibung verfügbar.",
        restart: {
            apply: "Neustarten, um Änderungen zu übernehmen!",
            required: "Neustart erforderlich!",
            description: "Starte jetzt neu, um neue Plugins und deren Einstellungen anzuwenden",
            following: "Die folgenden Plugins erfordern einen Neustart:",
            remainingCount: "und {{count}} weitere",
            fully: "Einige Plugins erfordern einen Neustart, um sie vollständig zu deaktivieren",
            would: "Möchtest du jetzt neu starten?",
            resetDefault: "Auf Standardeinstellungen zurücksetzen",
            failed: "Abhängigkeiten konnten nicht gestartet werden:",
            button: {
                restart: "Neustarten",
                later: "Später!",
                now: "Jetzt neustarten",
                cancel: "Abbrechen",
                disableWarning: "Warnung für immer deaktivieren",
                disableAll: "Alle deaktivieren",
                reset: "Zurücksetzen",
                close: "Schließen"
            }
        },
        contributor: {
            contributed: "beigetragen",
            modal: {
                contributionsInfo: "{{userName}} hat zu {{contributionCount}} Plugin{{s}} {{continuedLink}}.",
                noContributions: "{{userName}} hat keine Plugins erstellt. Wahrscheinlich hat die Person auf andere Weise {{contributedLink}}!"
            }
        },
        infoModal: {
            description: "Klicke auf das Zahnrad oder das Info-Symbol, um mehr Details zu einem Plugin zu erhalten",
            settingsInfo: "Plugins mit einem Zahnrad haben Einstellungen, die du anpassen kannst!",
            disableAll: "Alle Plugins deaktivieren"
        },
        error: {
            invalidInput: "Ungültige Eingabe",
            stopping: "Fehler beim Stoppen des Plugins {{plugin}}",
            starting: "Fehler beim Starten des Plugins {{plugin}}",
            startDependency: "Fehler beim Starten der Abhängigkeiten: {{failures}}",
            infoRender: "Beim Laden der benutzerdefinierten Info-Komponente dieses Plugins ist ein Fehler aufgetreten"
        },
        placeholder: {
            number: "Zahl eingeben",
            select: "Option wählen",
            text: "Wert eingeben"
        },
        excluded: {
            desktop: "Discord Desktop-App oder Plextron",
            discordDesktop: "Discord Desktop-App",
            plextron: "Plextron-App",
            web: "Plextron-App und die Web-Version von Discord",
            dev: "Entwickler-Version von Plexcord"
        },
        search: {
            looking: "Suchst du nach",
            onlyAvailable: "Nur verfügbar auf",
            noCriteria: "Keine Plugins entsprechen den Suchkriterien."
        },
        required: {
            title: "Erforderliche Plugins",
            this: "Dieses Plugin ist für die Funktion von Plexcord erforderlich.",
            by: "Dieses Plugin wird benötigt von:"
        },
        dangerModal: {
            title: "GEFÄHRLICHE AKTION",
            disablePlugins: "Plugins deaktivieren",
            disableText: "Alle deaktivieren",
            irreversible: "DIESE AKTION IST UNWIDERRUFLICH!",
            enableBack: "Bist du dir absolut sicher, dass du fortfahren möchtest? Du kannst sie später jederzeit wieder aktivieren.",
            undone: "Diese Aktion kann nicht rückgängig gemacht werden. Bist du sicher?",
            resetDescription: "Du bist dabei, alle Einstellungen für {{pluginName}} auf die Standardwerte zurückzusetzen.",
            disable: "Du bist dabei, {{enabledPlugins}} Plugins zu deaktivieren!",
            confirmReset: "Zurücksetzen bestätigen",
            cancel: "Abbrechen",
            resetSettings: "Einstellungen zurücksetzen",
            resetText: "Zurücksetzen"
        },
        filters: {
            label: "Filter",
            placeholder: "Nach einem Plugin suchen...",
            option: {
                all: "Alle anzeigen",
                enabled: "Aktivierte anzeigen",
                disabled: "Deaktivierte anzeigen",
                new: "Neue anzeigen",
                userplugins: "Benutzer-Plugins anzeigen",
                api: "API-Plugins anzeigen",
                type: "Nach Typ filtern",
                tags: "Nach Tags filtern"
            }
        },
        pluginModal: {
            noSettings: "Für dieses Plugin gibt es keine Einstellungen.",
            authors: "Autoren",
            settings: "Einstellungen",
            successfulReset: "Die Einstellungen für {{plugin}} wurden zurückgesetzt.",
            enabledStock: "Aktivierte Standard-Plugins",
            totalStock: "Standard-Plugins insgesamt",
            enabledUser: "Aktivierte Benutzer-Plugins",
            totalUser: "Benutzer-Plugins insgesamt",
            info: "Mehr Infos ansehen",
            source: "Quellcode ansehen"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API zum Hinzufügen von Dekorationen zur Mitgliederliste (Server und DMs)",
                    messageAccessories: "API zum Hinzufügen von Zubehör zu Nachrichten",
                    messageDecorations: "API zum Hinzufügen von Dekorationen zu Nachrichten",
                    chatInputButtons: "API zum Hinzufügen von Schaltflächen zum Chat-Eingabefeld",
                    commands: "API, die für alles erforderlich ist, was Befehle verwendet",
                    contextMenu: "API zum Hinzufügen/Entfernen von Elementen in Kontextmenüs.",
                    dynamicImageModal: "Ermöglicht das Weglassen von Breite oder Höhe beim Öffnen eines Bild-Modals",
                    menuItemDemangler: "Entwirrt das Menu Item-Modul von Discord",
                    messageEvents: "API, die für alles erforderlich ist, was Nachrichten-Events verwendet",
                    messagePopover: "API zum Hinzufügen von Schaltflächen zu Nachrichten-Popovern",
                    messageUpdater: "API zum Aktualisieren und erneuten Rendern von Nachrichten",
                    nicknameIcons: "API zum Hinzufügen von Icons zu Spitznamen in Profilen",
                    notices: "Behebt das automatische Ausblenden von Hinweisen",
                    serverList: "API, die für Plugins erforderlich ist, die die Serverliste ändern",
                    userSettings: "Patcht die UserSettings von Discord, um deren Gruppe und Namen anzuzeigen.",
                    audioPlayer: "API zum Abspielen interner Discord-Audiodateien oder externer Audio-Links.",
                    userArea: "API zum Hinzufügen von Schaltflächen zum Benutzerbereich-Panel.",
                    profileCollections: "API zum Hinzufügen von Sammlungen zum Benutzerprofilbereich, ähnlich der Spielesammlung von Discord."
                },
                chatButtons: {
                    context: {
                        buttons: "Schaltflächen"
                    }
                }
            },
            badges: {
                description: "API zum Hinzufügen von Abzeichen (Badges) zu Benutzern",
                contributor: {
                    plexcord: "Plexcord-Mitwirkender",
                    vencord: "Vencord-Mitwirkender",
                    userPlugin: "Benutzer-Plugin-Mitwirkender"
                },
                context: {
                    title: "Abzeichen-Optionen",
                    copy: {
                        name: "Abzeichen-Name kopieren",
                        link: "Abzeichen-Bildlink kopieren"
                    },
                    refetch: {
                        button: "Abzeichen neu laden",
                        success: "Abzeichen erfolgreich neu geladen!"
                    }
                },
                modal: {
                    title: "Plexcord-Spender",
                    special: "Dieses Abzeichen ist ein besonderes Extra für Plexcord-Spender",
                    description: "Bitte ziehe es in Erwägung, die Entwicklung von Plexcord als Spender zu unterstützen. Es würde uns viel bedeuten!"
                }
            },
        },
        uiElements: {
            manage: "UI-Elemente verwalten",
            allows: "Ermöglicht das Ausblenden von Schaltflächen, die dir nicht gefallen",
            section: {
                chatbar: {
                    title: "Chatleisten-Schaltflächen",
                    description: "Dies sind die Schaltflächen auf der rechten Seite des Chat-Eingabefeldes"
                },
                messagePopover: {
                    title: "Nachrichten-Popover-Schaltflächen",
                    description: "Dies sind die schwebenden Schaltflächen, die erscheinen, wenn du mit der Maus über eine Nachricht fährst"
                }
            },
            button: "Schaltflächen von aktivierten Plugins werden hier angezeigt."
        }
    },

    patchHelper: {
        title: "Patch-Helper",
        description: "Ein Entwickler-Tool, das dir hilft, Patches für Plexcord-Plugins zu erstellen.",
        fullPatch: {
            label: "Vollständiger Patch",
            description: "Füge hier deinen vollständigen JSON-Patch ein, um die Felder auszufüllen"
        },
        find: "Suchen",
        match: "Treffer",
        replacement: "Ersetzung",
        preview: "Vorschau",
        generatedCode: "Generierter Code",
        group: "Gruppe",
        diff: "Diff",
        module: "Modul",
        compile: "Kompilieren",
        compiled: "Kompilierung erfolgreich",
        copy: {
            clipboard: "In Zwischenablage kopieren",
            codeblock: "Als Code-Block kopieren"
        },
        error: {
            noMatch: "Keine Übereinstimmung gefunden. Wird dieses Modul eventuell verzögert geladen (lazy loaded)?",
            multipleMatch: "Mehrere Übereinstimmungen gefunden. Bitte verwende ein spezifischeres Suchmuster.",
            noFind: "Feld 'Suchen' fehlt.",
            noReplacement: "Feld 'Ersetzung' fehlt.",
            invalidReplacement: "Feld 'Ersetzung' ist ungültig",
            replacementMatch: "Feld 'replacement.match' fehlt",
            replacementReplace: "Feld 'replacement.replace' fehlt",
            replacementMustFunction: "'Ersetzung' muss eine Funktion sein"
        },
        cheatSheet: {
            title: "Spickzettel",
            identifiers: "Spezielle Regex-Escape-Sequenz, die Bezeichner (Variablennamen, Klassennamen, etc.) erkennt",
            dollar: "Ein $ einfügen",
            entireMatch: "Die gesamte Übereinstimmung einfügen",
            beforeMatch: "Den Teilstring vor der Übereinstimmung einfügen",
            afterMatch: "Den Teilstring nach der Übereinstimmung einfügen",
            nthGroup: "Die n-te Erfassungsgruppe einfügen ($1, $2...)",
            pluginInstance: "Die Plugin-Instanz einfügen"
        },
        replacementEval: {
            label: "Ersetzung als Funktion behandeln",
            description: "'Ersetzung' wird als Funktion ausgewertet, wenn dies aktiviert ist"
        }
    },

    sync: {
        title: "Sichern & Wiederherstellen",
        warning: "Warnung",
        warningText: "Das Importieren einer Einstellungsdatei überschreibt deine aktuellen Einstellungen. Erstelle zuerst ein Backup (Export), wenn du deine aktuelle Konfiguration behalten möchtest.",
        description: "Du kannst deine Plexcord-Einstellungen als JSON-Datei importieren und exportieren. Dies ermöglicht es dir, deine Einstellungen einfach auf ein anderes Gerät zu übertragen oder sie nach einer Neuinstallation von Plexcord oder Discord wiederherzustellen.",
        successful: "Einstellungen erfolgreich importiert. Starte neu, um die Änderungen zu übernehmen!",
        error: {
            failure: "Fehler beim Importieren der Einstellungen: {{error}}",
            failedExport: "Export der Einstellungen fehlgeschlagen, überprüfe die Konsole",
            invalid: "Ungültige Einstellungen. Handelt es sich hierbei überhaupt um eine Plexcord-Einstellungsdatei?",
            tooLarge: "DataStore zu groß - vom Backup ausgeschlossen. Verwende bei Bedarf 'DataStores exportieren'.",
            clearSomeDate: "DataStore zu groß. Bitte lösche einige Plugin-Daten und versuche es erneut."
        },
        settings: {
            text: "Was ist in einem Backup enthalten?",
            quickcss: "Benutzerdefiniertes QuickCSS",
            theme: "Theme-Links",
            plugins: "Plugin-Einstellungen",
            datastores: "Plugin-DataStores (z. B. Zeitzonen oder IRememberYou)"
        },
        import: {
            title: "Einstellungen importieren",
            description: "Wähle eine zuvor exportierte Einstellungsdatei aus, um deine Konfiguration wiederherzustellen. Dies ersetzt alle deine aktuellen Einstellungen durch die aus dem Backup.",
            all: "Alle Einstellungen importieren",
            plugins: "Plugins importieren",
            css: "QuickCSS importieren",
            datastore: "DataStores importieren"
        },
        export: {
            title: "Einstellungen exportieren",
            description: "Du kannst deine aktuellen Plexcord-Einstellungen in eine Datei exportieren, um sie zu sichern oder auf ein anderes Gerät zu übertragen.",
            all: "Alle Einstellungen exportieren",
            plugins: "Plugins exportieren",
            css: "QuickCSS exportieren",
            datastore: "DataStores exportieren"
        }
    },

    cloud: {
        text: "Cloud",
        title: "Einstellungen-Synchronisierung",
        override: "Cloud-Synchronisierung",
        description: "Synchronisiere deine Plexcord-Einstellungen mit der Cloud. Dies erleichtert es, deine Konfiguration über mehrere Geräte hinweg konsistent zu halten, ohne manuellen Import/Export.",
        switchDescription: "Wenn aktiviert, können deine Einstellungen mit der Cloud synchronisiert werden. Nutze die untenstehenden Aktionen für eine manuelle Synchronisierung.",
        settings: "Cloud-Einstellungen",
        successful: "Einstellungen erfolgreich mit der Cloud synchronisiert!",
        updated: "Deine Einstellungen wurden aktualisiert! Klicke hier, um neu zu starten und die Änderungen vollständig zu übernehmen!",
        deleted: "Einstellungen aus der Cloud gelöscht!",
        integration: {
            title: "Cloud-Integration",
            description: "Die Cloud-Integration von Plexcord ermöglicht es dir, deine Einstellungen über mehrere Geräte und Discord-Installationen hinweg zu synchronisieren. Deine Daten werden sicher gespeichert und können jederzeit wiederhergestellt werden.",
        },
        reauth: "Wir haben festgestellt, dass du Cloud-Integrationen in einem anderen Client aktiviert hast! Aufgrund technischer Einschränkungen musst du dich erneut autorisieren, um sie weiterhin zu nutzen. Klicke hier, um zu den Einstellungen zu gelangen!",
        error: {
            setup: "Einrichtung fehlgeschlagen (OAuth-Konfiguration konnte nicht abgerufen werden).",
            secret: "Einrichtung fehlgeschlagen (kein Secret zurückgegeben).",
            string: "Einrichtung fehlgeschlagen ({{error}}).",
            connect: "Cloud-Sync wurde deaktiviert, da dieses Konto nicht mit der Plexcord Cloud-App verbunden ist. Du kannst es in den Cloud-Einstellungen wieder aktivieren. (Hinweis: Deine Präferenzen werden separat gespeichert)",
            noSettings: "Es befinden sich keine Einstellungen in der Cloud.",
            uptodate: "Deine Einstellungen sind auf dem neuesten Stand.",
            localNewer: "Deine lokalen Einstellungen sind neuer als die in der Cloud.",
            delete: "Einstellungen konnten nicht gelöscht werden ({{error}}).",
            api: {
                returned: {
                    delete: "Einstellungen konnten nicht gelöscht werden (API gab {{status}} zurück).",
                    to: "Einstellungen konnten nicht mit der Cloud synchronisiert werden (API gab {{status}} zurück).",
                    from: "Einstellungen konnten nicht aus der Cloud geladen werden (API gab {{status}} zurück).",
                    manifest: "Manifest zum Löschen konnte nicht abgerufen werden (API gab {{status}} zurück)."
                }
            },
            synchronize: {
                to: "Synchronisierung mit der Cloud fehlgeschlagen ({{error}}).",
                from: "Synchronisierung aus der Cloud fehlgeschlagen ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Aktiviere oben die Cloud-Integration, um die Synchronisierungsfunktionen zu nutzen."
        },
        danger: {
            title: "Gefahrenzone",
            description: "Lösche permanent alle deine Daten aus der Cloud. Diese Aktion kann nicht rückgängig gemacht werden und entfernt alle synchronisierten Einstellungen sowie alle anderen auf dem Cloud-Backend gespeicherten Daten.",
            delete: {
                account: {
                    title: "Cloud-Konto löschen",
                    description: "Bist du sicher, dass du dein Cloud-Konto und alle zugehörigen Daten dauerhaft löschen möchtest? Dieser Schritt kann nicht rückgängig gemacht werden.",
                    confirm: "Konto löschen",
                    cancel: "Abbrechen"
                }
            }
        },
        notification: {
            title: "Cloud-Integration",
            enabled: "Cloud-Integration aktiviert",
            host: "{{host}} wurde zur Whitelist hinzugefügt. Bitte starte die App neu, damit die Änderungen wirksam werden.",
            erase: {
                successful: "Cloud-Daten erfolgreich gelöscht",
                failed: "Löschen der Daten fehlgeschlagen (API {{status}} zurückgegeben), bitte kontaktiere den Support."
            }
        },
        button: {
            to: "In Cloud hochladen",
            from: "Aus Cloud laden",
            fromDescription: "Dies wird deine lokalen Einstellungen mit denen aus der Cloud überschreiben. Mit Vorsicht genießen!",
            delete: "Cloud-Daten löschen",
            enable: "Cloud-Integrationen aktivieren",
            reauthorize: "Neu autorisieren",
            confirm: "Jetzt neu starten",
            later: "Später!"
        },
        privacy: "respektiert deine Privatsphäre",
        source: "Quellcode",
        overview: "Plexcord bietet eine Cloud-Integration, die praktische Extras wie die Synchronisierung von Einstellungen über Geräte hinweg ermöglicht. Sie {{privacy}}, und der {{source}} ist unter der AGPL 3.0 lizenziert, sodass du ihn auch selbst hosten kannst.",
        authorization: "Verbinde dich mit dem Cloud-Backend für die Synchronisierung der Einstellungen. Dies erfordert eine Autorisierung, falls du die Cloud-Integration noch nicht eingerichtet hast.",
        backend: {
            title: "Cloud-Backend",
            description: "Wähle aus, wie deine Einstellungen in der Cloud gespeichert werden. Standardmäßig wird die Plexcord Cloud verwendet, du kannst aber auch deinen eigenen selbstgehosteten Cloud-Dienst verbinden.",
            invalid: "Ungültige URL"
        },
        sync: {
            title: "Synchronisierungsregeln für dieses Gerät",
            description: "Diese Einstellung steuert, wie Daten zwischen diesem Gerät und der Cloud bewegt werden. Du kannst Änderungen in beide Richtungen zulassen oder einen Ort als Hauptquelle festlegen.",
            direction: {
                both: "Zwei-Wege-Sync (Änderungen in beide Richtungen)",
                push: "Dieses Gerät ist die Quelle (nur Upload)",
                pull: "Die Cloud ist die Quelle (nur Download)",
                manual: "Nicht automatisch synchronisieren (nur manuell über die Buttons unten)"
            }
        }
    },

    changelog: {
        text: "Änderungsprotokoll",
        title: "Änderungsprotokoll",
        description: "Hier findest du die neuesten Änderungen und Updates für Plexcord.",
        by: "von",
        check: "Repository-Prüfung",
        uptodate: "aktuell",
        update: "Update",
        noMessage: "Keine Nachricht",
        unknown: "Unbekannt",
        updatedPlugins: "Aktualisierte Plugins",
        newSettings: "Neue Einstellungen",
        newSettingTooltip: "Neue Einstellung in {{plugin}}",
        loading: "Wird geladen...",
        repoUptodate: "Repository ist auf dem neuesten Stand",
        fetch: "Vom Repository abrufen",
        clear: "Alle Protokolle löschen",
        internet: "Stelle sicher, dass du eine Internetverbindung hast, und versuche es erneut.",
        recent: "Kürzliche Änderungen",
        codeChanges: "Code-Änderungen: {{count}} neue{{s}} Commit{{s}}",
        updateLogs: "Update-Protokolle ({{count}})",
        noCommit: "Keine neuen Commits gegenüber deiner aktuellen Version verfügbar. Klicke auf 'Vom Repository abrufen', um nach Änderungen zu suchen.",
        previous: "Vorherige Update-Sitzungen mit deren Commit-Historie und Plugin-Änderungen.",
        modal: {
            description: "Sieh dir die neuesten Änderungen an Plexcord an. Dies ruft Commits direkt aus dem Repository ab, um dir zu zeigen, was neu ist.",
            repository: "Repository",
            failed: "Abruf fehlgeschlagen – Konsole prüfen",
            current: "Aktuell:",
            hide: "Protokolle ausblenden",
            show: "Protokolle anzeigen",
            fetch: {
                title: "Änderungen abrufen",
                description: "Prüfe das Repository auf neue Commits, Plugin-Updates und Code-Änderungen. Dies vergleicht deine aktuelle Version mit der neuesten verfügbaren.",
                newCommit: "Dies sind die neuen Commits und Plugin-Updates seit deiner letzten Version. Hier siehst du neue Funktionen, Fehlerbehebungen und aktualisierte Plugins.",
                confirm: "Abrufen",
            }
        },
        commit: {
            available: "Commits verfügbar",
            no: "Keine neuen Commits",
            new: "neue Plugins",
            updated: "aktualisierte Plugins",
            settings: "neue Einstellungen"
        },
        toast: {
            already: "Bereits auf dem neuesten Stand mit dem Repository",
            found: "{{count}} neue{{s}} Commit{{s}} im Repository gefunden",
            local: "Repository ist auf dem gleichen Stand wie deine lokale Kopie",
            failed: "Abruf vom Repository fehlgeschlagen :(",
            cleared: "Alle Protokolle wurden gelöscht",
            logCleared: "Protokoll wurde gelöscht",
            yourLatest: "Commits deines letzten Updates wurden protokolliert"
        },
        alert: {
            clear: {
                title: "Alle Protokolle löschen",
                body: "Bist du sicher, dass du alle Protokolle löschen möchtest? Dies kann nicht rückgängig gemacht werden.",
                confirm: "Alle löschen",
                confirmColor: "danger",
                cancel: "Abbrechen"
            },
            log: {
                title: "Protokoll löschen",
                body: "Bist du sicher, dass du dieses Protokoll löschen möchtest? Dies kann nicht rückgängig gemacht werden.",
                confirm: "Protokoll löschen",
                confirmColor: "danger",
                cancel: "Abbrechen"
            }
        },
        newPlugins: "{{count}} neue{{s}} Plugin{{s}}",
        following: "Die folgenden Plugins wurden in kürzlichen Updates hinzugefügt:",
        more: "+{{count}} weitere Plugins"
    },

    csp: {
        restart: "Ein Neustart ist erforderlich, um diese Änderung zu übernehmen",
        blocked: {
            resources: "Blockierte Ressourcen",
            disallowed: "Einige Bilder, Stile oder Schriftarten wurden blockiert, da sie von nicht erlaubten Domains stammen.",
            recommended: "Es wird dringend empfohlen, diese zu GitHub oder Imgur zu verschieben. Du kannst Domains jedoch auch erlauben, wenn du ihnen voll vertraust.",
            afterAllow: "Nachdem du eine Domain erlaubt hast, musst du {{platform}} vollständig schließen (über das Tray / den Task-Manager) und neu starten, um die Änderungen zu übernehmen.",
            allow: "Erlauben",
            url: "Blockierte URLs"
        },
        imgur: {
            direct: "Imgur-Links sollten Direktlinks im Format {{etc}} sein",
            copy: "Um einen Direktlink zu erhalten, klicke mit der rechten Maustaste auf das Bild und wähle 'Bildadresse kopieren'."
        },
        wants: {
            caller: "{{callerName}} möchte Verbindungen zu {{domain}} zulassen",
            detail: "Sofern du {{domain}} nicht kennst und ihr voll vertraust, solltest du diese Anfrage abbrechen!",
            restart: "Du musst {{appName}} vollständig schließen und neu starten, damit die Änderungen wirksam werden.",
            type: {
                images: "Bilder",
                styles: "CSS & Themes",
                fonts: "Schriftarten"
            },
            content: "Die folgenden Inhaltstypen dürfen von {{domain}} geladen werden:",
            understand: "Ich vertraue {{domain}} voll und ganz und verstehe die Risiken, wenn ich Verbindungen dorthin erlaube.",
            button: {
                cancel: "Abbrechen",
                allow: "Erlauben"
            },
            title: "Host-Berechtigungen"
        }
    },

    themes: {
        title: "Themes",
        management: "Theme-Verwaltung",
        description: "Passe das Aussehen von Discord mit Themes an. Füge lokale .css-Dateien hinzu oder lade Themes direkt von URLs. Themes mit einem Zahnrad-Symbol haben anpassbare Einstellungen.",
        local: "Lokale Themes",
        new: "NEU",
        pinned: "Angepinnt",
        stylus: "Stylus-Erweiterung",
        bd: "BetterDiscord Themes",
        github: "GitHub",
        download: "Suchst du nach Themes? Schau bei {{bd}} vorbei oder suche auf {{github}}. Wenn du von BetterDiscord herunterlädst, klicke auf 'Download' und verschiebe die .theme.css-Datei in deinen Themes-Ordner.",
        add: "Hinzufügen",
        reset: "Einstellungen auf Standard zurücksetzen",
        notCSS: "Keine CSS-Datei. Denke daran, den Raw-Link zu verwenden!",
        okay: "Okay!",
        checking: "Wird geprüft...",
        valid: "Gültig!",
        upload: "Theme hochladen",
        openFolder: "Themes-Ordner öffnen",
        loadMissing: "Fehlende Themes laden",
        editQuickCSS: "QuickCSS bearbeiten",
        editClient: "ClientTheme bearbeiten",
        website: "Website öffnen",
        discord: "Discord-Server",
        downloadTheme: "Herunterladen",
        refresh: "Aktualisieren",
        delete: "Löschen",
        activation: {
            title: "Themenaktivierung",
            always: "Immer aktiv",
            lightOnly: "Nur helles Design",
            darkOnly: "Nur dunkles Design"
        },
        actions: {
            pin: "Anheften",
            unpin: "Lösen",
            editSettings: "Einstellungen bearbeiten"
        },
        unknown: {
            title: "Unbekannt",
            author: "Unbekannter Autor",
            theme: "Ein Discord-Theme"
        },
        required: "Die folgenden Plugins werden benötigt, sind aber nicht aktiviert: ",
        homepage: "Homepage",
        support: "Support",
        online: {
            title: "Online-Themes",
            description: "Lade Themes direkt von URLs statt aus lokalen Dateien. Online-Themes aktualisieren sich automatisch, wenn sich die Quelle ändert, sodass du immer die neueste Version hast.",
            enable: "Online-Themes aktivieren",
            enableDescription: "Schalte das Laden von Online-Themes um. Wenn deaktiviert, werden alle Online-Themes abgeschaltet und du kannst keine neuen hinzufügen.",
            placeholder: "https://beispiel.de/thema.css"
        },
        quickActions: {
            title: "Schnellaktionen",
            description: "Verknüpfungen zur Verwaltung deiner Themes. Öffne deinen Themes-Ordner, nutze QuickCSS für schnelle Stil-Anpassungen oder lade Themes nach Änderungen neu."
        },
        error: {
            userscript: "Themes werden im Userscript nicht unterstützt!",
            stylus: "Du kannst stattdessen Themes mit {{stylus}} installieren!",
            expired: "Ungültiger oder abgelaufener Link",
            text: "Fehler:"
        },
        copy: {
            url: "URL kopieren",
            copied: "Theme-URL kopiert!",
            settings: "Theme-Einstellungen kopieren",
            copiedSettings: "Theme-Einstellungen in die Zwischenablage kopiert."
        },
        paste: {
            settings: "Theme-Einstellungen einfügen",
            empty: "Deine Zwischenablage ist leer.",
            invalid: "Deine Zwischenablage enthält keine gültigen Einstellungsdaten.",
            pasted: "Theme-Einstellungen aus der Zwischenablage eingefügt."
        },
        settings: {
            for: "Einstellungen für {{themeName}}",
        },
        installed: {
            title: "Installierte Themes",
            description: "Verwalte hier deine Themes. Lokale Themes werden aus deinem Ordner geladen, Online-Themes von URLs.",
            count: "{{count}} Theme{{s}} installiert ({{localCount}} lokal, {{onlineCount}} online) · {{enabledCount}} aktiviert",
            search: "Nach einem Theme suchen...",
            loading: "Themes werden geladen...",
            none: "Noch keine Themes installiert. Füge Dateien zu deinem Themes-Ordner hinzu oder füge oben ein Online-Theme hinzu.",
            noCriteria: "Keine Themes entsprechen deinen Such- oder Filterkriterien."
        },
        filter: {
            all: "Alle anzeigen",
            online: "Online-Themes",
            local: "Lokale Themes",
            enabled: "Aktiviert",
            disabled: "Deaktiviert"
        },
        notification: {
            refresh: {
                title: "Theme aktualisiert",
                error: "Aktualisieren des Themes fehlgeschlagen"
            },
            failed: {
                download: "Download des Themes fehlgeschlagen"
            }
        }
    },

    updater: {
        title: "Updater",
        settings: "Updater-Einstellungen",
        updates: "Updates",
        updated: "wurde aktualisiert!",
        restart: "Hier klicken zum Neustarten",
        repaired: "Plexcord wurde repariert!",
        ok: "OK",
        preferences: {
            title: "Update-Einstellungen",
            description: "Steuere, wie Plexcord sich aktuell hält. Du kannst Updates automatisch im Hintergrund installieren lassen oder dich benachrichtigen lassen.",
        },
        github: {
            local: "Deine lokale Kopie hat neuere Commits als das Remote-Repository. Das passiert meist durch eigene Änderungen. Bitte sichere (stash) oder resette diese vor dem Update."
        },
        error: {
            check: "Update-Prüfung fehlgeschlagen. Prüfe die Konsole für mehr Infos",
            occurred: "Ein unbekannter Fehler ist aufgetreten",
            retrieve: "Abruf fehlgeschlagen – Konsole prüfen",
            title: "Hoppla!",
            tryAgain: "Ein unbekannter Fehler ist aufgetreten. Bitte versuche es erneut oder schau in die Konsole.",
            command: "Befehl {{path}} nicht gefunden. Bitte installiere ihn und versuche es erneut.",
            code: "Code {{code}}. Siehe Konsole für Details.",
            running: "Fehler beim Ausführen von {{cmd}}: {{error}}",
            failed: "Das hat auch nicht geklappt :( Versuche das Update oder eine Neuinstallation über den Installer!"
        },
        available: "Es ist 1 Update verfügbar",
        updateAvailable: "Ein Plexcord-Update ist verfügbar!",
        click: "Hier klicken, um das Update anzuzeigen",
        available_plural: "Es sind {{count}} Updates verfügbar",
        current: "Auf dem neuesten Stand!",
        successful: {
            title: "Update erfolgreich!",
            body: "Erfolgreich aktualisiert. Jetzt neu starten, um die Änderungen zu übernehmen?",
            button: {
                confirm: "Neustarten",
                cancel: "Nicht jetzt!",
                update: "Jetzt aktualisieren",
                check: "Auf Updates prüfen"
            },
            noFound: "Keine Updates gefunden"
        },
        automatically: {
            label: "Automatisch aktualisieren",
            description: "Plexcord ohne Bestätigungsaufforderung automatisch aktualisieren"
        },
        notify: {
            label: "Bei Abschluss eines automatischen Updates benachrichtigen",
            description: "Zeigt eine Benachrichtigung an, wenn Plexcord automatisch aktualisiert wurde"
        },
        repo: "Repo",
        repoDescription: "Dies ist das GitHub-Repository, von dem Plexcord Updates bezieht.",
        loading: "Wird geladen...",
    },

    components: {
        error: {
            title: "Oje!",
            render: "Beim Rendern dieser Komponente ist ein Fehler aufgetreten. Weitere Infos findest du unten und in der Konsole."
        },
        componentFailed: {
            message: "Hoppla! Diese Seite konnte nicht gerendert werden. Es ist jedoch ein Update verfügbar, das dies beheben könnte. Möchtest du jetzt aktualisieren und neu starten?"
        },
        quickCSS: {
            title: "QuickCSS-Editor offen",
            message: "Der QuickCSS-Editor ist im Hintergrund noch geöffnet.",
            detail: "Möchtest du Discord trotzdem schließen? Dies wird auch den QuickCSS-Editor beenden.",
            cancel: "Abbrechen",
            close: "Trotzdem schließen"
        }
    },

    commands: {
        error: {
            execute: "Beim Ausführen des Befehls '{{command}}' ist ein Fehler aufgetreten"
        }
    },

    notifications: {
        dismiss: "Benachrichtigung verwerfen",
        noYet: "Noch keine Benachrichtigungen",
        settings: "Benachrichtigungseinstellungen",
        log: {
            title: "Benachrichtigungsprotokoll",
            clear: "Protokoll löschen",
            sure: "Bist du sicher?",
            permamently: "Dies wird {{count}} Benachrichtigung{{s}} dauerhaft entfernen. Dieser Schritt kann nicht rückgängig gemacht werden.",
            button: {
                confirm: "Ja, löschen!",
                cancel: "Abbrechen"
            }
        }
    },

    memberlist: {
        error: {
            render: "Mitgliederlisten-Dekorateur {{key}} konnte nicht gerendert werden"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Nachrichtenzubehör {{key}} konnte nicht gerendert werden"
            }
        },
        decoration: {
            error: {
                render: "Nachrichtendekoration {{key}} konnte nicht gerendert werden"
            }
        }
    },

    utils: {
        toast: {
            copied: "In Zwischenablage kopiert!"
        }
    },

    common: {
        unit: {
            year: "Jahr",
            years: "Jahre",
            month: "Monat",
            months: "Monate",
            week: "Woche",
            weeks: "Wochen",
            day: "Tag",
            days: "Tage",
            hour: "Stunde",
            hours: "Stunden",
            minute: "Minute",
            minutes: "Minuten",
            second: "Sekunde",
            seconds: "Sekunden",
            ago: "vor",
            s: "s"
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Deaktiviert Discords Tracking (Analytics/'Science'), Metriken und Sentry-Fehlerberichte.",
            option: {
                disableAnalytics: {
                    label: "Analytics deaktivieren",
                    description: "Deaktiviert Discords Tracking (Analytics/'Science'), Metriken und Sentry-Fehlerberichte."
                }
            }
        },
        settings: {
            name: "Einstellungen",
            description: "Fügt die Einstellungs-Benutzeroberfläche und Debug-Informationen hinzu.",
            option: {
                language: {
                    label: "Sprache",
                    description: "Wähle deine bevorzugte Sprache für Plexcord."
                },
                settingsLocation: {
                    label: "Ort der Einstellungen",
                    description: "Bestimmt, wo der Plexcord-Einstellungsbereich platziert wird."
                }
            }
        },
        supportHelper: {
            name: "Support-Helfer",
            description: "Hilft uns dabei, dir Support zu bieten.",
            commands: {
                description: {
                    debug: "Plexcord Debug-Infos senden",
                    plugins: "Plexcord Plugin-Liste senden"
                }
            },
            modals: {
                outdated: {
                    title: "Halt mal kurz!",
                    body: "Du verwendest eine veraltete Version von Plexcord! Wahrscheinlich wurde dein Problem bereits behoben.",
                    footer: "Bitte aktualisiere zuerst, bevor du um Support bittest!",
                    button: {
                        cancel: "Updates ansehen",
                        confirm: "Jetzt aktualisieren & Neustarten",
                        secondaryConfirm: "Ich weiß, was ich tue / Ich kann nicht aktualisieren"
                    }
                },
                updater: {
                    title: "Halt mal kurz!",
                    body: "Du verwendest eine extern aktualisierte Plexcord-Version, für die wir keinen Support anbieten!",
                    footer: "Bitte wechsle entweder zu einer {{officially}} oder kontaktiere stattdessen deinen Paket-Maintainer für Support.",
                    officially: "offiziell unterstützten Version von Plexcord",
                    button: {
                        cancel: "Abbrechen",
                        confirm: "Download-Seite aufrufen",
                        now: "Jetzt aktualisieren"
                    },
                    toast: {
                        success: "Erfolg! Neustart...",
                        already: "Bereits auf dem neuesten Stand!",
                        failed: "Update fehlgeschlagen :("
                    }
                },
                custom: {
                    title: "Halt mal kurz!",
                    header: "Du verwendest einen Custom-Build von Plexcord, für den wir keinen Support anbieten!",
                    body: "Wir bieten nur Support für {{officialBuild}}. Bitte {{switch}} oder löse dein Problem selbst.",
                    footer: "Wenn du diese Regel ignorierst, wirst du vom Support ausgeschlossen.",
                    official: "offizielle Builds",
                    switch: "wechsle zu einem offiziellen Build",
                    button: {
                        confirm: "Verstanden",
                        secondaryConfirm: "Nicht mehr anzeigen"
                    }
                }
            },
            button: {
                debug: "/plexcord-debug ausführen",
                plugins: "/plexcord-plugins ausführen",
                snippet: "Snippet ausführen"
            },
            toast: {
                success: "Erfolg!",
                failed: "Snippet konnte nicht ausgeführt werden :(",
                failedOpenInvite: "Einladung konnte nicht geöffnet werden, bitte Konsole prüfen :(",
                upload: "Plugin-Liste erfolgreich hochgeladen!",
                failedUpload: "Fehler beim Hochladen der Plugin-Liste. Bitte versuche es erneut.",
                unableGenerate: "Plugin-Liste konnte nicht erstellt werden."
            },
            dm: {
                warning: "Bitte sende keine privaten Nachrichten an Plexcord-Entwickler für Support!{{br}}Tritt stattdessen dem {{support}}-Server bei und nutze den Plexcord-Support-Kanal: {{channel}}"
            },
            alert: {
                title: "Warnung: Hohe Plugin-Anzahl",
                paragraph1: "Du hast mehr als 100 Plugins aktiviert.",
                paragraph2: "Aufgrund der schieren Menge an Plugins erhältst du möglicherweise keinen Support.",
                paragraph3: "Dein Problem wird wahrscheinlich durch Plugin-Konflikte verursacht.",
                paragraph4: "Bitte deaktiviere einige Plugins zur Fehlerbehebung.",
                paragraph5: "Deine Plugin-Liste wird als Textdatei gesendet.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Rechtsklicke auf dein Benutzer-Panel unten links, um dein Profil im aktuellen Server anzuzeigen.",
            option: {
                prioritizeServerProfile: {
                    label: "Server-Profil priorisieren",
                    description: "Priorisiert das Server-Profil beim Linksklick auf dein Benutzer-Panel."
                }
            },
            context: {
                account: "Account-Profil anzeigen",
                server: "Server-Profil anzeigen",
                prioritize: "Server-Profil priorisieren"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Lässt das Rauschunterdrückungs-Menü zwischen 'Aus' und 'Krisp' umschalten anstatt zwischen 'Krisp' und 'Standard'."
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Animiert alles, was animiert werden kann.",
            option: {
                icons: {
                    label: "Icons",
                    description: "Server-Icons, Avatare, Deko und mehr immer animieren."
                },
                statusEmojis: {
                    label: "Status-Emojis",
                    description: "Status-Emojis immer animieren."
                },
                serverBanners: {
                    label: "Server-Banner",
                    description: "Server-Banner immer animieren."
                },
                nameplates: {
                    label: "Namensschilder",
                    description: "Namensschilder (Nameplates) immer animieren."
                },
                roleGradients: {
                    label: "Rollen-Farbverläufe",
                    description: "Rollen-Farbverläufe immer animieren."
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Erweitert Profil-Popouts immer zur vollständigen Modal-Ansicht."
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Erweitert Rollenlisten in Profil-Popouts immer vollständig.",
            option: {
                hideArrow: {
                    label: "Pfeil ausblenden",
                    description: "Pfeil-Symbol ausblenden."
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Spielt für jede gesendete Nachricht 'Animalese' aus Animal Crossing ab (die quasseln viel).",
            option: {
                volume: {
                    label: "Lautstärke",
                    description: "Lautstärke des Animalese-Sounds."
                },
                speed: {
                    label: "Geschwindigkeit",
                    description: "Geschwindigkeit des Animalese-Sounds."
                },
                pitch: {
                    label: "Tonhöhe",
                    description: "Multiplikator für die Tonhöhe."
                },
                messageLengthLimit: {
                    label: "Nachrichtenlängen-Limit",
                    description: "Maximale Länge der zu verarbeitenden Nachricht."
                },
                processOwnMessages: {
                    label: "Eigene Nachrichten verarbeiten",
                    description: "Aktivieren, um auch deine eigenen Nachrichten vertonen zu lassen."
                },
                soundQuality: {
                    label: "Soundqualität",
                    description: "Qualität des verwendeten Sounds.",
                    high: "Hoch",
                    med: "Mittel",
                    low: "Niedrig",
                    lowest: "Niedrigste"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Entfernt die nervigen Popups für nicht vertrauenswürdige Domains und verdächtige Dateien.",
            option: {
                domain: {
                    label: "Domain",
                    description: "Entfernt das Popup für nicht vertrauenswürdige Domains beim Öffnen von Links."
                },
                file: {
                    label: "Datei",
                    description: "Entfernt das Popup 'Potenziell gefährlicher Download' beim Öffnen von Dateien."
                },
                noDeleteSafety: {
                    label: "Keine Löschsicherung",
                    description: "Entfernt die Anforderung, den Servernamen beim Löschen eines Servers einzugeben."
                },
                confirmModal: {
                    label: "Bestätigungs-Modal",
                    description: "Soll ein 'Bist du sicher?'-Fenster beim Löschen angezeigt werden?"
                }
            },
            alert: {
                title: "Server löschen?",
                body: "Das ist permanent, falls das nicht offensichtlich war.",
                confirm: "Löschen",
                cancel: "Abbrechen"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonymisiert die Namen hochgeladener Dateien.",
            option: {
                anonymiseByDefault: {
                    label: "Standardmäßig anonymisieren",
                    description: "Dateinamen standardmäßig anonymisieren. Du kannst dies bei Bedarf im Upload-Popup deaktivieren."
                },
                spoilerMessages: {
                    label: "Spoiler-Nachrichten",
                    description: "Dateinamen anonymisieren, die als Spoiler markiert sind."
                },
                method: {
                    label: "Methode",
                    description: "Anonymisierungs-Methode",
                    random: "Zufällige Zeichen",
                    consistent: "Konsistent",
                    timestamp: "Zeitstempel"
                },
                randomisedLength: {
                    label: "Zufällige Länge",
                    description: "Länge der zufälligen Zeichenfolge."
                },
                consistent: {
                    label: "Konsistent",
                    description: "Konsistentes Anonymisierungs-Geheimnis (Secret)."
                }
            },
            using: {
                anonymous: "Anonymer Dateiname wird verwendet",
                spoiler: "Normaler Dateiname wird verwendet"
            },
            spoiler: {
                description: "Spoiler für deine Dateien umschalten",
                toggle: "Spoiler für deine Dateien umschalten (standardmäßig an)",
                enabled: "Spoiler aktiviert!",
                disabled: "Spoiler deaktiviert!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Discord Rich Presence für dein Apple Music!",
            about: "Für die anpassbaren Aktivitäts-Formatstrings kannst du spezielle Platzhalter verwenden! {{name}} wird durch den Songtitel ersetzt; {{artist}} durch den Namen der Künstler; und {{album}} durch den Albumnamen.",
            button: {
                listen: "Auf Apple Music hören",
                songLink: "Auf SongLink ansehen"
            },
            option: {
                activityType: {
                    label: "Aktivitätstyp",
                    description: "Welche Art von Aktivität angezeigt werden soll",
                    listening: "Hört gerade",
                    playing: "Spielt"
                },
                statusDisplayType: {
                    label: "Status-Anzeigetyp",
                    description: "Zeigt den Song/Künstler in der Mitgliederliste an",
                    off: "Nicht anzeigen (zeigt generische Nachricht)",
                    artist: "Künstlernamen anzeigen",
                    track: "Songtitel anzeigen"
                },
                refreshInterval: {
                    label: "Aktualisierungsintervall",
                    description: "Intervall zwischen den Aktualisierungen (Sekunden)."
                },
                enableTimestamps: {
                    label: "Zeitstempel aktivieren",
                    description: "Ob Zeitstempel aktiviert werden sollen oder nicht."
                },
                enableButtons: {
                    label: "Buttons aktivieren",
                    description: "Ob Buttons (Interaktions-Schaltflächen) aktiviert werden sollen."
                },
                nameString: {
                    label: "Namens-String",
                    description: "Formatstring für den Namen der Aktivität."
                },
                detailsString: {
                    label: "Details-String",
                    description: "Formatstring für die Details der Aktivität."
                },
                stateString: {
                    label: "Status-String (State)",
                    description: "Formatstring für den Status der Aktivität."
                },
                largeImageType: {
                    label: "Großes Bild - Typ",
                    description: "Typ des großen Bildes in der Aktivität",
                    album: "Album-Cover",
                    artist: "Künstler-Bild",
                    disabled: "Deaktiviert"
                },
                largeTextString: {
                    label: "Großer Bildtext - String",
                    description: "Formatstring für den Text des großen Bildes."
                },
                smallImageType: {
                    label: "Kleines Bild - Typ",
                    description: "Typ des kleinen Bildes in der Aktivität",
                    album: "Apple Music Logo",
                    artist: "Künstler-Bild",
                    disabled: "Deaktiviert"
                },
                smallTextString: {
                    label: "Kleiner Bildtext - String",
                    description: "Formatstring für den Text des kleinen Bildes."
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Client-Plugin für arRPC, um RPC in Discord Web zu ermöglichen (experimentell).",
            use: {
                title: "So nutzt du arRPC",
                enable: "{{link}}, um den Server zu starten, und aktiviere dann das Plugin.",
                link: "Folge den Anweisungen im GitHub-Repo"
            },
            toast: {
                connected: "Mit arRPC verbunden",
                failed: "Verbindung zu arRPC fehlgeschlagen. Läuft der Server?",
                retry: "Wiederholen"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Mit @someone kannst du eine zufällige Person erwähnen."
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Aktualisiert automatisch deinen Online-Status (Online, Abwesend, Bitte nicht stören), wenn du Spiele startest.",
            option: {
                statusToSet: {
                    label: "Zu setzender Status",
                    description: "Status, der beim Starten eines Spiels gesetzt wird",
                    online: "Online",
                    dnd: "Bitte nicht stören",
                    idle: "Abwesend",
                    invisible: "Unsichtbar"
                },
                excludeInvisible: {
                    label: "Unsichtbar ausschließen",
                    description: "Verhindert automatische Statusänderungen, wenn dein Status manuell auf 'Unsichtbar' gesetzt ist."
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Zippt automatisch festgelegte Dateitypen und Ordner vor dem Hochladen in Discord.",
            option: {
                extensions: {
                    label: "Dateiendungen",
                    description: "Kommagetrennte Liste von Endungen zum Auto-Zippen (z. B. .psd,.blend,.exe,.dmg)."
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Zeigt Banner in der Mitgliederliste an.",
            option: {
                animate: {
                    label: "Animieren",
                    description: "Banner animieren"
                },
                preferNameplate: {
                    label: "Namensschild bevorzugen",
                    description: "Namensschild (Nameplate) gegenüber dem Banner bevorzugen"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Zeigt Aktivitäts-Icons in der Mitgliederliste an und ermöglicht es, alle Aktivitäten zu sehen.",
            option: {
                memberList: {
                    label: "Mitgliederliste",
                    description: "Aktivitäts-Icons in der Mitgliederliste anzeigen"
                },
                iconSize: {
                    label: "Icon-Größe",
                    description: "Größe der Aktivitäts-Icons"
                },
                specialFirst: {
                    label: "Spezielle zuerst",
                    description: "Spezielle Aktivitäten zuerst anzeigen (derzeit Spotify und Twitch)"
                },
                renderGifs: {
                    label: "GIFs rendern",
                    description: "Das Rendern von GIFs erlauben"
                },
                removeGameActivityStatus: {
                    label: "Status 'Spielaktivität' entfernen",
                    description: "Icon und Status der Spielaktivität entfernen"
                },
                userPopout: {
                    label: "Benutzer-Popout",
                    description: "Alle Aktivitäten im Profil-Popout/Seitenleiste anzeigen"
                },
                hideTooltip: {
                    label: "Tooltip ausblenden",
                    description: "Blendet Aktivitäten an verschiedenen Stellen aus"
                },
                allActivitiesStyle: {
                    label: "Stil für alle Aktivitäten",
                    description: "Stil für die Anzeige aller Aktivitäten",
                    list: "Liste",
                    carousel: "Karussell",
                    left: "Links",
                    right: "Rechts"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Fügt den Audio-Playern für Anhänge einen Spektrographen und Oszilloskop-Visualisierer hinzu.",
            option: {
                oscilloscope: {
                    label: "Oszilloskop",
                    description: "Oszilloskop-Visualisierer aktivieren"
                },
                spectrograph: {
                    label: "Spektrograph",
                    description: "Spektrograph-Visualisierer aktivieren"
                },
                oscilloscopeSolidColor: {
                    label: "Oszilloskop - Einzele Farbe",
                    description: "Verwendet eine einzelne Farbe für das Oszilloskop anstelle eines Farbverlaufs"
                },
                oscilloscopeColor: {
                    label: "Oszilloskop-Farbe",
                    description: "Farbe des Oszilloskops, wenn Einzelfarbe aktiviert ist"
                },
                spectrographSolidColor: {
                    label: "Spektrograph - Einzelne Farbe",
                    description: "Verwendet eine einzelne Farbe für den Spektrographen anstelle eines Farbverlaufs"
                },
                spectrographColor: {
                    label: "Spektrograph-Farbe",
                    description: "Farbe des Spektrographen, wenn Einzelfarbe aktiviert ist"
                }
            },
            toast: {
                invalidColorFormat: "Ungültiges Farbformat für {{settingKey}}. Stelle sicher, dass es im Format 'R, G, B' oder '#RRGGBB' vorliegt."
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Erstelle eigene Sperrgründe für das Discord-Bann-Fenster und/oder zeige standardmäßig ein Texteingabefeld anstelle der Optionen.",
            option: {
                reasons: {
                    label: "Gründe",
                    description: "Deine benutzerdefinierten Gründe"
                },
                isTextInputDefault: {
                    label: "Texteingabe als Standard",
                    description: "Zeigt standardmäßig ein Texteingabefeld anstelle eines Auswahlmenüs (entspricht dem Klick auf die Option 'Andere')."
                }
            },
            title: "Gründe",
            placeholder: "Grund",
            add: "Weiteren Grund hinzufügen"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Ermöglicht das Suchen in der Liste blockierter Benutzer und macht Namen in den Einstellungen auswählbar.",
            placeholder: "Benutzer suchen..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Erweitert das Befehlssystem um verschiedene Verbesserungen.",
            option: {
                autoFillArguments: {
                    label: "Argumente automatisch ausfüllen",
                    description: "Füllt Befehle automatisch mit allen Argumenten aus, nicht nur mit den erforderlichen."
                },
                allowNewlinesInCommands: {
                    label: "Zeilenumbrüche in Befehlen erlauben",
                    description: "Erlaubt Zeilenumbrüche in Befehlseingaben (STRG + Umschalt + Enter)."
                }
            },
            command: {
                refresh: {
                    description: "Aktualisiert die Discord-Anwendungsbefehle lokal",
                    user: "Bestimmter Benutzer für die Aktualisierung",
                    refreshing: "Anwendungsbefehle werden aktualisiert...",
                    refreshed: "Befehle erfolgreich aktualisiert!",
                    failed: "Aktualisieren der Befehle fehlgeschlagen. Details findest du in der Konsole."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Zeigt Serverordner in einer speziellen Seitenleiste an und fügt Verbesserungen für Ordner hinzu.",
            option: {
                sidebar: {
                    label: "Seitenleiste",
                    description: "Server aus Ordnern in einer speziellen Seitenleiste anzeigen"
                },
                sidebarAnim: {
                    label: "Seitenleisten-Animation",
                    description: "Animation beim Öffnen der Ordner-Seitenleiste"
                },
                closeAllFolders: {
                    label: "Alle Ordner schließen",
                    description: "Schließt alle Ordner, wenn ein Server ausgewählt wird, der sich in keinem Ordner befindet"
                },
                closeAllHomeButton: {
                    label: "Alle über Home-Button schließen",
                    description: "Schließt alle Ordner beim Klick auf den Home-Button"
                },
                closeOthers: {
                    label: "Andere schließen",
                    description: "Schließt andere Ordner, wenn ein Ordner geöffnet wird"
                },
                closeServerFolder: {
                    label: "Server-Ordner schließen",
                    description: "Schließt den Ordner, wenn ein Server innerhalb dieses Ordners ausgewählt wird"
                },
                forceOpen: {
                    label: "Öffnen erzwingen",
                    description: "Erzwingt das Öffnen eines Ordners beim Wechsel zu einem Server in diesem Ordner"
                },
                keepIcons: {
                    label: "Icons behalten",
                    description: "Gilden-Icons in der Hauptleiste weiterhin anzeigen, wenn der Ordner in der BetterFolders-Seitenleiste offen ist"
                },
                showFolderIcon: {
                    label: "Ordner-Icon anzeigen",
                    description: "Zeigt das Ordner-Icon über den Gilden in der BetterFolders-Seitenleiste an",
                    never: "Nie",
                    always: "Immer",
                    moreThanOne: "Wenn mehr als ein Ordner erweitert ist"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Ändert den GIF-Alternativtext von einfachem 'GIF' zu den tatsächlichen GIF-Tags oder dem Dateinamen."
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Lässt die GIF-Auswahl standardmäßig die Favoriten-Kategorie öffnen.",
            option: {
                keepOpen: {
                    label: "Offen halten",
                    description: "Hält die GIF-Auswahl nach Auswahl eines GIFs geöffnet"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Zeige das Ablaufdatum von Einladungen, das Profil des Einladenden und eine Server-Vorschau vor dem Beitritt durch Klick auf den Namen.",
            render: {
                tip: "Diese Einladung läuft ab am: {{time}}",
                header: "{{name}} hat dich zu {{server}} eingeladen",
                never: "nie ablaufen"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Notizen ausblenden oder Rechtschreibprüfung deaktivieren (In den Einstellungen konfigurieren!!)",
            option: {
                hide: {
                    label: "Notizen ausblenden",
                    description: "Blendet das Notizfeld in Benutzer-Popouts aus"
                },
                noSpellCheck: {
                    label: "Keine Rechtschreibprüfung",
                    description: "Deaktiviert die Rechtschreibprüfung in Notizen"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Die Anzahl der Pluszeichen vor einem :emoji: bestimmt die Nachricht, zu der es hinzugefügt wird."
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Fügt Optionen zum Kopieren der Rollenfarbe, zum Bearbeiten der Rolle oder zum Anzeigen des Rollen-Icons beim Rechtsklick auf Rollen im Benutzerprofil hinzu.",
            option: {
                roleIconFileFormat: {
                    label: "Dateiformat für Rollen-Icons",
                    description: "Zu verwendendes Dateiformat beim Betrachten von Rollen-Icons"
                }
            },
            context: {
                copyColor: "Rollenfarbe kopieren",
                editRole: "Rolle bearbeiten",
                viewIcon: "Rollen-Icon anzeigen"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Kopiert die Rollenfarbe bei Klick auf den Rollen-Punkt (Barrierefreiheits-Einstellung). Ermöglicht zudem die gleichzeitige Nutzung von Rollen-Punkt und farbigen Namen.",
            option: {
                bothStyles: {
                    label: "Beide Stile",
                    description: "Sowohl Rollen-Punkt als auch farbige Namen anzeigen"
                },
                copyRoleColorInProfilePopout: {
                    label: "Rollenfarbe im Profil-Popout kopieren",
                    description: "Klick auf den Rollen-Punkt im Profil-Popout erlaubt das Kopieren der Rollenfarbe"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Verbessert das Sitzungs-Menü (Geräte). Ermöglicht die Anzeige exakter Zeitstempel, die Vergabe eigener Namen für jede Sitzung und Benachrichtigungen über neue Sitzungen.",
            new: "NEU",
            newSessions: "Neue Sitzungen:",
            rename: "Umbenennen",
            newDevice: "Neuer Gerätename",
            resetName: "Name zurücksetzen",
            save: "Speichern",
            cancel: "Abbrechen",
            option: {
                backgroundCheck: {
                    label: "Hintergrundprüfung",
                    description: "Prüft im Hintergrund auf neue Sitzungen und zeigt Benachrichtigungen an, wenn welche erkannt werden"
                },
                checkInterval: {
                    label: "Prüfintervall",
                    description: "Wie oft im Hintergrund nach neuen Sitzungen gesucht werden soll (falls aktiviert), in Minuten"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Verbessert das Erlebnis beim Öffnen des Einstellungsmenüs.",
            option: {
                disableFade: {
                    label: "Überblenden deaktivieren",
                    description: "Deaktiviert die Crossfade-Animation"
                },
                organizeMenu: {
                    label: "Menü organisieren",
                    description: "Organisiert das Kontextmenü des Einstellungs-Zahnrads in Kategorien"
                },
                eagerLoad: {
                    label: "Sofortiges Laden (Eager Load)",
                    description: "Entfernt die Ladeverzögerung beim ersten Öffnen des Menüs"
                }
            },
            alert: {
                title: "Neustart erforderlich",
                restart: "Du hast Einstellungen geändert, die einen Neustart erfordern.",
                confirm: "Jetzt neu starten",
                cancel: "Später!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Hochladen mit einem Linksklick, Menü öffnen mit Rechtsklick."
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Dieses Plugin ermöglicht es dir, Stream-Vorschauen zu vergrößern.",
            context: {
                viewPreview: "Stream-Vorschau anzeigen"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Blockiert Nachrichten, die bestimmte benutzerdefinierte Schlüsselwörter enthalten, als wäre der Absender blockiert.",
            option: {
                blockedWords: {
                    label: "Blockierte Wörter",
                    description: "Kommagetrennte Liste der zu blockierenden Wörter"
                },
                useRegex: {
                    label: "Regex verwenden",
                    description: "Behandelt jeden Wert als regulären Ausdruck beim Prüfen des Nachrichteninhalts (fortgeschritten)"
                },
                caseSensitive: {
                    label: "Groß-/Kleinschreibung",
                    description: "Ob die Suche die Groß- und Kleinschreibung berücksichtigen soll"
                },
                ignoreBlockedMessages: {
                    label: "Blockierte Nachrichten ignorieren",
                    description: "Ignoriert die Leiste für neue (kürzliche) Nachrichten vollständig"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Verhindert das Laden von Krisp."
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Anhänge in NSFW-Kanälen weichzeichnen, bis man mit der Maus darüber fährt.",
            option: {
                blurAmount: {
                    label: "Stärke des Weichzeichners",
                    description: "Stärke des Weichzeichners (in Pixeln)"
                },
                blurAllChannels: {
                    label: "Alle Kanäle weichzeichnen",
                    description: "Anhänge in allen Kanälen weichzeichnen (nicht nur NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Umgeht die Bestätigungsaufforderung beim Verwenden der Pin-Funktionen."
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Erhalte weiterhin Benachrichtigungen von bestimmten Quellen, auch wenn du im Modus 'Bitte nicht stören' bist. Rechtsklicke auf Benutzer/Kanäle/Server, um sie für diesen Modus freizuschalten.",
            context: {
                remove: "Status-Bypass entfernen",
                add: "Status-Bypass hinzufügen"
            },
            option: {
                guilds: {
                    label: "Server",
                    description: "Server für Bypass (Benachrichtigung bei Erwähnung überall auf dem Server)",
                    placeholder: "Mit Kommas trennen"
                },
                channels: {
                    label: "Kanäle",
                    description: "Kanäle für Bypass (Benachrichtigung bei Erwähnung in diesem Kanal)",
                    placeholder: "Mit Kommas trennen"
                },
                users: {
                    label: "Benutzer",
                    description: "Benutzer für Bypass (Benachrichtigung bei allen Direktnachrichten)",
                    placeholder: "Mit Kommas trennen"
                },
                allowOutsideOfDms: {
                    label: "Außerhalb von DMs erlauben",
                    description: "Erlaubt ausgewählten Benutzern den Bypass auch außerhalb von DMs (wirkt wie ein Kanal/Server-Bypass, aber für alle Nachrichten dieser Benutzer)"
                },
                notificationSound: {
                    label: "Benachrichtigungston",
                    description: "Ob der Benachrichtigungston abgespielt werden soll"
                },
                respectSilentPings: {
                    label: "Stille Erwähnungen beachten",
                    description: "Beachtet stille Erwähnungen (@silent / Benachrichtigungen unterdrücken)"
                },
                statusToUse: {
                    label: "Zu verwendender Status",
                    description: "Status, für den die Whitelist gelten soll",
                    online: "Online",
                    idle: "Abwesend",
                    dnd: "Bitte nicht stören",
                    invisible: "Unsichtbar"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Verfolge und zeige Benutzergeburtstage mit Kuchen-Icons an.",
            context: {
                label: "Geburtstag",
                setBirthday: "Geburtstag festlegen",
                clearBirthday: "Geburtstag löschen",
                current: "Aktuell:"
            },
            option: {
                chat: {
                    label: "Chat",
                    description: "Kuchen-Icons neben Benutzernamen im Chat anzeigen"
                },
                memberList: {
                    label: "Mitgliederliste",
                    description: "Kuchen-Icons in der Mitgliederliste anzeigen"
                },
                profileBadge: {
                    label: "Profil-Abzeichen",
                    description: "Kuchen-Abzeichen im Benutzerprofil anzeigen"
                },
                notificationSound: {
                    label: "Benachrichtigungston",
                    description: "Ton abspielen, wenn eine Geburtstagsbenachrichtigung gesendet wird"
                },
                userList: {
                    label: "Gespeicherte Geburtstage",
                    description: "Gespeicherte Geburtstage verwalten"
                }
            },
            locations: {
                chat: {
                    label: "Chat",
                    description: "neben Benutzernamen im Chat"
                },
                memberList: {
                    label: "Mitgliederliste",
                    description: "in der Mitgliederliste"
                }
            },
            toast: {
                success: "Geburtstag erfolgreich festgelegt!",
                invalid: "Ungültiges Datumsformat! Nur TT/MM wird akzeptiert.",
                cleared: "Geburtstag erfolgreich gelöscht!"
            },
            notification: {
                title: "🎂 Heute ist ein Geburtstag!",
                body: "Heute ist der Geburtstag von {{username}}!"
            },
            modal: {
                title: "Geburtstag für {{username}} festlegen",
                description: "Gib den Geburtstag im Format TT/MM ein (z. B. 25/12)",
                placeholder: "z. B. 25/12",
                current: "Aktueller Geburtstag:",
                set: "Geburtstag festlegen",
                cancel: "Abbrechen",
                birthday: "Ich habe heute Geburtstag! 🎂",
                saved: "Gespeicherte Geburtstage",
                savedDesc: "Noch keine Geburtstage gespeichert. Rechtsklicke auf Benutzer, um deren Geburtstage hinzuzufügen!",
                today: "Heute",
                remove: "Entfernen",
                loading: "Wird geladen...",
                save: "Speichern",
                edit: "Bearbeiten"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Zeigt Anrufdauer-Timer in allen Sprachanrufen an.",
            option: {
                format: {
                    label: "Format",
                    description: "Kompaktes oder menschenlesbares Format",
                    human: "30t 23h 00m 42s"
                },
                allCallTimers: {
                    label: "Alle Anruf-Timer",
                    description: "Anruf-Timer für alle Benutzer auf Servern anzeigen"
                },
                showWithoutHover: {
                    label: "Ohne Hover anzeigen",
                    description: "Timer immer anzeigen, ohne mit der Maus darüberfahren zu müssen"
                },
                showRoleColor: {
                    label: "Rollenfarbe anzeigen",
                    description: "Anzeige in der Rollenfarbe des Benutzers (falls das ShowRoleColor-Plugin aktiviert ist)"
                },
                trackSelf: {
                    label: "Sich selbst verfolgen",
                    description: "Auch den eigenen Timer anzeigen"
                },
                showSeconds: {
                    label: "Sekunden anzeigen",
                    description: "Sekunden im Timer anzeigen"
                },
                watchLargeGuilds: {
                    label: "Große Server überwachen",
                    description: "Benutzer auf großen Servern verfolgen. Dies kann zu Verzögerungen führen, wenn du auf vielen großen Servern mit aktiven Sprachnutzern bist. Getestet mit bis zu 2000 aktiven Sprachnutzern ohne Probleme."
                },
                fixUI: {
                    label: "UI-Fix",
                    description: "In einigen Fällen kann der Timer die Benutzeroberfläche stören. Aktiviere diese Option, um dies zu beheben."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Fügt Kanälen Abzeichen basierend auf ihrem Typ hinzu.",
            badge: {
                private: "Dieser Kanal ist gesperrt.",
                nsfw: "Dieser Kanal ist als NSFW markiert.",
                rules: "Dies ist der Regel-Kanal des Servers."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Ein Abzeichen pro Kanal",
                    description: "Nur ein Abzeichen pro Kanal anzeigen"
                },
                showTextBadge: {
                    label: "Text-Abzeichen anzeigen",
                    description: "Abzeichen für Textkanäle anzeigen"
                },
                showVoiceBadge: {
                    label: "Voice-Abzeichen anzeigen",
                    description: "Abzeichen für Sprachkanäle anzeigen"
                },
                showCategoryBadge: {
                    label: "Kategorie-Abzeichen anzeigen",
                    description: "Abzeichen für Kategorien anzeigen"
                },
                showDirectoryBadge: {
                    label: "Verzeichnis-Abzeichen anzeigen",
                    description: "Abzeichen für Verzeichnisse anzeigen"
                },
                showAnnouncementThreadBadge: {
                    label: "Ankündigungs-Thread-Abzeichen anzeigen",
                    description: "Abzeichen für Ankündigungs-Threads anzeigen"
                },
                showPublicThreadBadge: {
                    label: "Öffentlicher-Thread-Abzeichen anzeigen",
                    description: "Abzeichen für öffentliche Threads anzeigen"
                },
                showPrivateThreadBadge: {
                    label: "Privater-Thread-Abzeichen anzeigen",
                    description: "Abzeichen für private Threads anzeigen"
                },
                showStageBadge: {
                    label: "Stage-Abzeichen anzeigen",
                    description: "Abzeichen für Stage-Kanäle anzeigen"
                },
                showAnnouncementBadge: {
                    label: "Ankündigungs-Abzeichen anzeigen",
                    description: "Abzeichen für Ankündigungen anzeigen"
                },
                showForumBadge: {
                    label: "Forum-Abzeichen anzeigen",
                    description: "Abzeichen für Foren anzeigen"
                },
                showMediaBadge: {
                    label: "Medien-Abzeichen anzeigen",
                    description: "Abzeichen für Medienkanäle anzeigen"
                },
                showNSFWBadge: {
                    label: "NSFW-Abzeichen anzeigen",
                    description: "Abzeichen für NSFW-Kanäle anzeigen"
                },
                showLockedBadge: {
                    label: "Gesperrt-Abzeichen anzeigen",
                    description: "Abzeichen für gesperrte Kanäle anzeigen"
                },
                showRulesBadge: {
                    label: "Regel-Abzeichen anzeigen",
                    description: "Abzeichen für Regel-Kanäle anzeigen"
                },
                showUnknownBadge: {
                    label: "Unbekannt-Abzeichen anzeigen",
                    description: "Abzeichen für unbekannte Kanaltypen anzeigen"
                },
                textBadgeLabel: {
                    label: "Text-Abzeichen Beschriftung",
                    description: "Beschriftung für das Text-Abzeichen",
                    default: "Text"
                },
                voiceBadgeLabel: {
                    label: "Voice-Abzeichen Beschriftung",
                    description: "Beschriftung für das Sprach-Abzeichen",
                    default: "Sprache"
                },
                categoryBadgeLabel: {
                    label: "Kategorie-Abzeichen Beschriftung",
                    description: "Beschriftung für das Kategorie-Abzeichen",
                    default: "Kategorie"
                },
                announcementBadgeLabel: {
                    label: "Ankündigungs-Abzeichen Beschriftung",
                    description: "Beschriftung für das Ankündigungs-Abzeichen",
                    default: "Neuigkeiten"
                },
                announcementThreadBadgeLabel: {
                    label: "Ankündigungs-Thread-Abzeichen Beschriftung",
                    description: "Beschriftung für das Ankündigungs-Thread-Abzeichen",
                    default: "News-Thread"
                },
                publicThreadBadgeLabel: {
                    label: "Öffentlicher-Thread-Abzeichen Beschriftung",
                    description: "Beschriftung für das Thread-Abzeichen",
                    default: "Thread"
                },
                privateThreadBadgeLabel: {
                    label: "Privater-Thread-Abzeichen Beschriftung",
                    description: "Beschriftung für das private Thread-Abzeichen",
                    default: "Privater Thread"
                },
                stageBadgeLabel: {
                    label: "Stage-Abzeichen Beschriftung",
                    description: "Beschriftung für das Stage-Abzeichen",
                    default: "Stage"
                },
                directoryBadgeLabel: {
                    label: "Verzeichnis-Abzeichen Beschriftung",
                    description: "Beschriftung für das Verzeichnis-Abzeichen",
                    default: "Verzeichnis"
                },
                forumBadgeLabel: {
                    label: "Forum-Abzeichen Beschriftung",
                    description: "Beschriftung für das Forum-Abzeichen",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Medien-Abzeichen Beschriftung",
                    description: "Beschriftung für das Medien-Abzeichen",
                    default: "Medien"
                },
                nsfwBadgeLabel: {
                    label: "NSFW-Abzeichen Beschriftung",
                    description: "Beschriftung für das NSFW-Abzeichen",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Gesperrt-Abzeichen Beschriftung",
                    description: "Beschriftung für das Gesperrt-Abzeichen",
                    default: "Gesperrt"
                },
                rulesBadgeLabel: {
                    label: "Regel-Abzeichen Beschriftung",
                    description: "Beschriftung für das Regel-Abzeichen",
                    default: "Regeln"
                },
                unknownBadgeLabel: {
                    label: "Unbekannt-Abzeichen Beschriftung",
                    description: "Beschriftung für das Unbekannt-Abzeichen",
                    default: "Unbekannt"
                },
                textBadgeColor: {
                    label: "Text-Abzeichen Farbe",
                    description: "Farbe des Text-Abzeichens"
                },
                voiceBadgeColor: {
                    label: "Voice-Abzeichen Farbe",
                    description: "Farbe des Sprach-Abzeichens"
                },
                categoryBadgeColor: {
                    label: "Kategorie-Abzeichen Farbe",
                    description: "Farbe des Kategorie-Abzeichens"
                },
                announcementBadgeColor: {
                    label: "Ankündigungs-Abzeichen Farbe",
                    description: "Farbe des Ankündigungs-Abzeichens"
                },
                announcementThreadBadgeColor: {
                    label: "Ankündigungs-Thread-Abzeichen Farbe",
                    description: "Farbe des Ankündigungs-Thread-Abzeichens"
                },
                publicThreadBadgeColor: {
                    label: "Öffentlicher-Thread-Abzeichen Farbe",
                    description: "Farbe des Thread-Abzeichens"
                },
                privateThreadBadgeColor: {
                    label: "Privater-Thread-Abzeichen Farbe",
                    description: "Farbe des privaten Thread-Abzeichens"
                },
                stageBadgeColor: {
                    label: "Stage-Abzeichen Farbe",
                    description: "Farbe des Stage-Abzeichens"
                },
                directoryBadgeColor: {
                    label: "Verzeichnis-Abzeichen Farbe",
                    description: "Farbe des Verzeichnis-Abzeichens"
                },
                forumBadgeColor: {
                    label: "Forum-Abzeichen Farbe",
                    description: "Farbe des Forum-Abzeichens"
                },
                mediaBadgeColor: {
                    label: "Medien-Abzeichen Farbe",
                    description: "Farbe des Medien-Abzeichens"
                },
                nsfwBadgeColor: {
                    label: "NSFW-Abzeichen Farbe",
                    description: "Farbe des NSFW-Abzeichens"
                },
                lockedBadgeColor: {
                    label: "Gesperrt-Abzeichen Farbe",
                    description: "Farbe des Gesperrt-Abzeichens"
                },
                rulesBadgeColor: {
                    label: "Regel-Abzeichen Farbe",
                    description: "Farbe des Regel-Abzeichens"
                },
                unknownBadgeColor: {
                    label: "Unbekannt-Abzeichen Farbe",
                    description: "Farbe des Unbekannt-Abzeichens"
                }
            },
            badges: {
                text: "Text",
                voice: "Sprache",
                category: "Kategorie",
                announcement: "News",
                announcementThread: "News-Thread",
                publicThread: "Thread",
                privateThread: "Privater Thread",
                stage: "Stage",
                directory: "Verzeichnis",
                forum: "Forum",
                media: "Medien",
                nsfw: "NSFW",
                locked: "Gesperrt",
                rules: "Regeln",
                unknown: "Unbekannt"
            },
            tooltip: {
                locked: "Dieser Kanal ist gesperrt.",
                nsfw: "Dieser Kanal ist als NSFW markiert."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Gruppiere deine häufig besuchten Kanäle in Tabs, ähnlich wie in einem Browser.",
            open: "In neuem Tab öffnen",
            animation: {
                title: "Animationssteuerung",
                description: "Aktiviere oder deaktiviere spezifische Animationen für Channel-Tabs. Jede Option kann unabhängig geschaltet werden.",
                placeholder: "Wähle aus, welche Animationen aktiviert werden sollen...",
                tabHover: "Tab-Hover-Effekte (Anheben + Skalieren)",
                tabSelection: "Animation beim Auswählen eines Tabs",
                tabDragDrop: "Tab Drag & Drop (Vorschau + Neuanordnung)",
                tabEnterExit: "Tab Ein-/Ausblenden (Erstellen + Schließen)",
                tabIconPop: "Icon-Pop bei Auswahl (Icon-Vergrößerung)",
                closeRotation: "Rotation des Schließen-Buttons",
                plusPulse: "Pulsieren des Plus-Buttons",
                mentionGlow: "Leuchten des Erwähnungs-Abzeichens",
                compactExpand: "Erweiterung im Kompaktmodus",
                selectedBorder: "Blauer Rand des ausgewählten Tabs",
                selectedBackground: "Hintergrundfarbe des ausgewählten Tabs",
                tabShadows: "Tab-Schatteneffekte",
                tabRepositioning: "Tab-Umpositionierung (weiche Übergänge)",
                resizeHandle: "Einblenden des Ziehgriffs",
                questActivate: "Verlauf bei aktiven Quests"
            },
            bookmark: {
                label: "Lesezeichen",
                unknown: "Unbekannter Benutzer",
                folder: "Ordner",
                add: "Zu Lesezeichen hinzufügen",
                edit: "Lesezeichen bearbeiten",
                delete: "Lesezeichen löschen",
                remove: "Aus Lesezeichen entfernen",
                removeFolder: "Lesezeichen aus Ordner entfernen",
                loading: "Lesezeichen werden geladen...",
                noBookmarks: "Du hast keine Lesezeichen. Du kannst einen offenen Tab hinzufügen oder dies durch Rechtsklick ausblenden.",
                quests: "Quests",
                messageRequests: "Nachrichtenanfragen",
                friends: "Freunde",
                shop: "Shop",
                library: "Bibliothek",
                discovery: "Entdecken",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Aktivität",
                specialPage: "Spezialseite",
                searchPlaceholder: "Lesezeichen durchsuchen"
            },
            button: {
                save: "Speichern",
                delete: "Löschen",
                cancel: "Abbrechen",
                reset: "Zurücksetzen",
                close: "Schließen"
            },
            context: {
                label: "ChannelTabs Kontextmenü",
                bookmark: "ChannelTabs Lesezeichen Kontextmenü",
                tab: "ChannelTabs Tab Kontextmenü",
                folderMenu: "Lesezeichenordner Menü",
                compact: "Kompakt",
                bookmarkBar: "Lesezeichenleiste",
                openAll: "Alle Lesezeichen öffnen",
                openNew: "In neuem Tab öffnen",
                close: {
                    tab: "Tab schließen",
                    otherTabs: "Andere Tabs schließen",
                    tabsToRight: "Tabs rechts schließen",
                    tabsToLeft: "Tabs links schließen",
                    reopen: "Geschlossenen Tab wieder öffnen",
                    allTabs: "Alle Tabs schließen"
                }
            },
            error: {
                noLogin: "Kein angemeldeter Account gefunden?"
            },
            modal: {
                add: {
                    title: "Lesezeichen zu Ordner hinzufügen",
                    select: "Wähle einen Ordner",
                    create: "Einen erstellen"
                },
                edit: {
                    title: "Lesezeichen bearbeiten",
                    name: "Lesezeichen-Name",
                    folder: "Ordnerfarbe"
                },
                delete: {
                    title: "Bist du sicher?",
                    description: "Das Löschen eines Lesezeichenordners löscht auch alle darin enthaltenen Lesezeichen."
                },
                folderIcon: {
                    title: "Ordnersymbol wählen",
                    preview: "Vorschau",
                    iconColor: "Symbolfarbe",
                    search: "Suchen",
                    searchPlaceholder: "{{count}} Symbole durchsuchen...",
                    folderName: "Ordnername",
                    folderColor: "Ordnerfarbe",
                    folderIcon: "Ordnersymbol",
                    chooseIcon: "Symbol wählen",
                    useDefaultIcon: "Standardsymbol verwenden"
                }
            },
            option: {
                onStartup: {
                    label: "Beim Start",
                    description: "Was beim Start mit den Tabs passieren soll",
                    nothing: "Nichts tun (Tab 'Freunde' öffnen)",
                    remember: "Tabs der letzten Sitzung wiederherstellen",
                    open: "Einen spezifischen Satz Tabs öffnen"
                },
                tabSet: {
                    label: "Tab-Satz"
                },
                noPomeloNames: {
                    label: "Keine Pomelo-Namen",
                    description: "Anzeigenamen statt Benutzernamen für DMs verwenden"
                },
                showStatusIndicators: {
                    label: "Statusanzeigen anzeigen",
                    description: "Statusanzeigen für DMs einblenden"
                },
                showBookmarkBar: {
                    label: "Lesezeichenleiste anzeigen"
                },
                persistUnreadCountFallback: {
                    label: "Fallback für ungelesene Anzahl beibehalten",
                    description: "Fallbacks für ungelesene Abzeichen über Neuladungen hinweg für Tabs und Lesezeichen beibehalten"
                },
                bookmarkNotificationDot: {
                    label: "Lesezeichen Benachrichtigungspunkt",
                    description: "Benachrichtigungspunkt für Lesezeichen anzeigen"
                },
                widerTabsAndBookmarks: {
                    label: "Breitere Tabs und Lesezeichen",
                    description: "Verlängert Tabs und Lesezeichen für größere Monitore"
                },
                tabWidthScale: {
                    label: "Tab-Breite Skalierung",
                    description: "Skalierung der Tab-Breite (Prozent) - anpassbar durch Ziehen der Tab-Ränder"
                },
                renderAllTabs: {
                    label: "Alle Tabs rendern",
                    description: "Alle Tabs im Speicher behalten für schnelleres Wechseln (speichert Scrollposition und Zustand)"
                },
                switchToExistingTab: {
                    label: "Zu existierendem Tab wechseln",
                    description: "Zum Tab wechseln, falls er für den Zielkanal bereits existiert"
                },
                createNewTabIfNotExists: {
                    label: "Neuen Tab erstellen falls nicht vorhanden",
                    description: "Erstellt einen neuen Tab, falls für den Zielkanal noch keiner existiert"
                },
                enableRapidNavigation: {
                    label: "Schnelle Navigation aktivieren",
                    description: "Aktiviert schnelles Navigieren - schnelles Wechseln zwischen Kanälen ersetzt den aktuellen Tab statt neue zu erstellen"
                },
                rapidNavigationThreshold: {
                    label: "Zeitfenster für schnelle Navigation",
                    description: "Zeitfenster (in Millisekunden). Innerhalb dieser Zeit ersetzen neue Kanäle den aktuellen Tab."
                },
                tabBarPosition: {
                    label: "Tab-Leisten Position",
                    description: "Position der Tab-Leiste",
                    top: "Oben",
                    bottom: "Unten"
                },
                enableNumberKeySwitching: {
                    label: "Wechseln per Nummerntasten",
                    description: "Nummerntasten (1-9) zum Tab-Wechseln aktivieren"
                },
                numberKeySwitchCount: {
                    label: "Anzahl der Nummerntasten",
                    description: "Anzahl der über Nummerntasten (1-9) erreichbaren Tabs"
                },
                enableCloseTabShortcut: {
                    label: "Shortcut zum Schließen aktivieren",
                    description: "Tastenkombination zum Schließen von Tabs aktivieren"
                },
                enableNewTabShortcut: {
                    label: "Shortcut für neuen Tab aktivieren",
                    description: "Tastenkombination für neue Tabs aktivieren"
                },
                enableTabCycleShortcut: {
                    label: "Tab-Wechsel Shortcut aktivieren",
                    description: "Tastenkombination zum Durchwechseln der Tabs aktivieren"
                },
                keybindsSection: {
                    label: "Tastenkombinationen",
                    description: "Klicke auf einen Button und drücke die gewünschte Tastenkombination. Modifikatoren wie STRG, UMSCHALT und ALT werden unterstützt.",
                    title: "Tastatur-Shortcuts",
                    reset: "Alle auf Standard zurücksetzen",
                    shortcutDisabled: "Diese Verknüpfung ist derzeit deaktiviert",
                    pressKey: "Beliebige Taste drücken...",
                    conflictError: "Diese Tastenkombination wird bereits verwendet von: {{key}}",
                    closeTab: {
                        label: "Tab schließen",
                        description: "Schließt den aktuell aktiven Tab"
                    },
                    newTab: {
                        label: "Neuer Tab",
                        description: "Öffnet einen neuen Tab mit dem aktuellen Kanal"
                    },
                    cycleTabsForward: {
                        label: "Vorwärts durch Tabs wechseln",
                        description: "Zum nächsten Tab wechseln (springt am Ende zum ersten)"
                    },
                    cycleTabsBackward: {
                        label: "Rückwärts durch Tabs wechseln",
                        description: "Zum vorherigen Tab wechseln (springt am Anfang zum letzten)"
                    }
                },
                closeTabKeybind: {
                    label: "Keybind Tab schließen",
                    description: "Shortcut zum Schließen des aktuellen Tabs"
                },
                newTabKeybind: {
                    label: "Keybind Neuer Tab",
                    description: "Shortcut zum Erstellen eines neuen Tabs"
                },
                cycleTabForwardKeybind: {
                    label: "Keybind Tab vorwärts",
                    description: "Shortcut zum Wechseln zum nächsten Tab"
                },
                cycleTabBackwardKeybind: {
                    label: "Keybind Tab rückwärts",
                    description: "Shortcut zum Wechseln zum vorherigen Tab"
                },
                showTabNumbers: {
                    label: "Tab-Nummern anzeigen",
                    description: "Nummerierte Abzeichen auf Tabs anzeigen, um Shortcuts zu kennzeichnen"
                },
                tabNumberPosition: {
                    label: "Position der Tab-Nummern",
                    description: "Wo die Nummer auf dem Tab angezeigt werden soll",
                    left: "Links (vor dem Icon)",
                    right: "Rechts (nach dem Inhalt)"
                },
                animations: {
                    label: "Animationen"
                },
                animationHover: {
                    label: "Hover-Animation",
                    description: "Effekte beim Überfahren mit der Maus aktivieren"
                },
                animationSelection: {
                    label: "Auswahl-Animation",
                    description: "Animationen bei Auswahl (Leuchten, Anheben)"
                },
                animationDragDrop: {
                    label: "Drag & Drop Animation",
                    description: "Effekte beim Verschieben von Tabs"
                },
                animationEnterExit: {
                    label: "Ein-/Ausgang-Animation",
                    description: "Animationen beim Erstellen/Schließen von Tabs"
                },
                animationIconPop: {
                    label: "Icon-Pop Animation",
                    description: "Icon-Vergrößerung bei Auswahl aktivieren"
                },
                animationCloseRotation: {
                    label: "Schließen-Rotation Animation",
                    description: "Drehung des Schließen-Buttons aktivieren"
                },
                animationPlusPulse: {
                    label: "Plus-Button Pulsieren",
                    description: "Pulsieren des Plus-Buttons aktivieren"
                },
                animationMentionGlow: {
                    label: "Erwähnungs-Leuchten Animation",
                    description: "Pulsierendes rotes Leuchten bei Erwähnungen aktivieren"
                },
                animationCompactExpand: {
                    label: "Animation Kompakt/Erweitern",
                    description: "Sanfte Erweiterung kompakter Tabs aktivieren"
                },
                animationSelectedBorder: {
                    label: "Rahmen-Animation bei Auswahl",
                    description: "Rahmen- und Leuchteffekte für ausgewählte Tabs"
                },
                animationSelectedBackground: {
                    label: "Hintergrund-Animation bei Auswahl",
                    description: "Hintergrundfarbwechsel bei Auswahl aktivieren"
                },
                animationTabShadows: {
                    label: "Tab-Schatten Animation",
                    description: "Schatteneffekte auf Tabs aktivieren"
                },
                animationTabPositioning: {
                    label: "Tab-Positionierung Animation",
                    description: "Weiche Übergänge bei Positionswechseln der Tabs"
                },
                animationResizeHandle: {
                    label: "Ziehgriff Animation",
                    description: "Fade-Animation für den Ziehgriff aktivieren"
                },
                animationQuestsActive: {
                    label: "Quest-Animation",
                    description: "Verlauf-Animationen auf dem Quests-Tab bei aktiven Quests"
                },
                compactAutoExpandSelected: {
                    label: "Kompakt-Tabs bei Auswahl erweitern",
                    description: "Kompakt-Tabs automatisch erweitern, wenn sie ausgewählt sind"
                },
                compactAutoExpandOnHover: {
                    label: "Kompakt-Tabs bei Hover erweitern",
                    description: "Kompakt-Tabs automatisch erweitern, wenn man mit der Maus darüberfährt"
                },
                openInNewTabAutoSwitch: {
                    label: "Auto-Wechsel bei neuem Tab",
                    description: "Automatisch zu Tabs wechseln, die über das Kontextmenü geöffnet wurden"
                },
                bookmarksIndependentFromTabs: {
                    label: "Lesezeichen unabhängig von Tabs",
                    description: "Lesezeichen navigieren unabhängig, ohne die aktive Tab-Leiste zu beeinflussen"
                },
                showResizeHandle: {
                    label: "Ziehgriff anzeigen",
                    description: "Ziehgriff beim Hovern über Tabs anzeigen, um die Breite anzupassen"
                },
                openNewTabsInCompactMode: {
                    label: "Neue Tabs im Kompaktmodus öffnen",
                    description: "Alle neu erstellten Tabs standardmäßig kompakt öffnen"
                },
                newTabButtonBehavior: {
                    label: "Verhalten des Plus-Buttons",
                    description: "Der Plus-Button (+) folgt den Tabs statt rechts fixiert zu bleiben"
                },
                oneTabPerServer: {
                    label: "Ein Tab pro Server",
                    description: "Limitiert auf einen Tab pro Server; neue Kanäle auf demselben Server nutzen den existierenden Tab."
                },
                maxOpenTabs: {
                    label: "Max. offene Tabs",
                    description: "Maximale Anzahl offener Tabs (0 = unbegrenzt)"
                }
            },
            tabs: {
                startup: "Start-Tabs",
                currently: "Aktuell offene Tabs übernehmen"
            },
            toast: {
                notRestoring: "Tabs werden nicht wiederhergestellt, da 'KeepCurrentChannel' aktiviert ist",
                failed: {
                    restore: "Wiederherstellen der Tabs fehlgeschlagen",
                    saved: "Laden der gespeicherten Tabs fehlgeschlagen"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Zeigt einen Zeichenzähler im Nachrichtenfeld an.",
            option: {
                colorEffects: {
                    label: "Farbeffekte",
                    description: "Farbeffekte aktivieren/deaktivieren, wenn man sich dem Limit nähert"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Blendet alle Kanäle in eingeklappten Kategorien aus, selbst wenn sie ungelesene Nachrichten enthalten."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Entfernt alle Emojis und Dekorationen aus Kanalnamen."
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Entfernt automatisch Tracking-Elemente aus URLs, die du sendest."
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Klicke auf Rollen in Benutzerprofilen und der Mitgliederliste, um zu sehen, welche Mitglieder diese Rolle haben.",
            modal: {
                loading: "Mitglieder werden geladen...",
                noMembers: "Keine Mitglieder gefunden.",
                unknown: "Unbekannte Rolle"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Ermöglicht es dir, fast alle Inhalte von beliebigen Benutzern lokal auszublenden.",
            replying: "Antwort auf blockierte Nachricht",
            option: {
                hideVc: {
                    label: "Sprachkanäle ausblenden",
                    description: "Blendet Sprachkanäle aus, in denen sich blockierte Benutzer befinden."
                },
                usersToBlock: {
                    label: "Zu blockierende Benutzer",
                    description: "Benutzer-IDs, getrennt durch Komma und Leerzeichen"
                },
                hideBlockedUsers: {
                    label: "Blockierte Benutzer ausblenden",
                    description: "Sollen blockierte Benutzer überall ausgeblendet werden"
                },
                hideBlockedMessages: {
                    label: "Blockierte Nachrichten ausblenden",
                    description: "Sollen Nachrichten blockierter Benutzer vollständig ausgeblendet werden"
                },
                hideEmptyRoles: {
                    label: "Leere Rollen ausblenden",
                    description: "Sollen Rollen-Überschriften ausgeblendet werden, wenn alle Mitglieder blockiert sind"
                },
                blockedReplyDisplay: {
                    label: "Anzeige blockierter Antworten",
                    description: "Was angezeigt werden soll, wenn jemand auf einen blockierten Nutzer antwortet",
                    displayText: "Text anzeigen, dass auf eine versteckte Nachricht geantwortet wurde",
                    hideReply: "Buchstäblich nichts"
                },
                guildBlackList: {
                    label: "Server-Blacklist",
                    description: "Server-IDs, auf denen die Funktion deaktiviert sein soll"
                },
                guildWhiteList: {
                    label: "Server-Whitelist",
                    description: "Server-IDs, auf denen die Funktion aktiviert sein soll"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Nachbildung des alten Client-Theme-Experiments. Füge deinem Discord-Theme eine Farbe hinzu.",
            title: "Theme-Farbe",
            add: "Füge deinem Discord-Client-Theme eine Farbe hinzu",
            option: {
                color: {
                    label: "Farbe"
                },
                resetColor: {
                    label: "Farbe zurücksetzen"
                }
            },
            error: {
                modal: {
                    title: "Dein Theme wird nicht gut aussehen!",
                    contrast: "Die gewählte Farbe bietet keinen guten Kontrast zum Text",
                    nitro: "Nitro-Themes werden nicht unterstützt",
                    switch: "Zu {{oppositeTheme}}-Modus wechseln",
                    disable: "Nitro-Theme deaktivieren",
                    reset: "Theme-Farbe zurücksetzen"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Fügt mehr FPS- und Dauereinstellungen für Clips sowie RPC-Tagging hinzu!",
            minutes: "Minuten",
            option: {
                richPresenceTagging: {
                    label: "Rich Presence Tagging",
                    description: "Wann sollen Clips mit der aktuellen Rich Presence getaggt werden?",
                    always: "Immer",
                    only: "Nur wenn Start oder Ende des Aktivitätsnamens übereinstimmen",
                    never: "Nie"
                },
                enableScreenshotKeybind: {
                    label: "Screenshot-Keybind aktivieren",
                    description: "Aktiviert die Tastenkombination für Screenshots"
                },
                enableVoiceOnlyClips: {
                    label: "Nur-Audio-Clips aktivieren",
                    description: "Ermöglicht Clips ohne Video (nur Ton)"
                },
                enableAdvancedSignals: {
                    label: "Fortgeschrittene Signale aktivieren",
                    description: "Ermöglicht automatisierte Clip-Trigger"
                },
                ignorePlatformRestriction: {
                    label: "Plattformbeschränkung ignorieren",
                    description: "Erlaubt Clipping auf eigentlich gesperrten Plattformen (kann Speicherfehler verursachen)"
                },
                clipsLink: {
                    label: "Clip-Einstellungen",
                    link: "Ändere FPS- und Dauereinstellungen in den Clip-Optionen!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Entfernt die Symbole für Farbenblinde aus den Statusanzeigen, genau wie in Discord 2015-2017."
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Ermöglicht das Navigieren in der UI per Tastatur.",
            action: {
                command: {
                    label: "Befehl ausführen",
                    description: "Einen anderen Paletten-Befehl per ID spiegeln. Nutze die Auswahl, wenn du die ID nicht kennst."
                },
                settings: {
                    label: "Einstellungsseite öffnen",
                    description: "Direkt zu einer Discord-Einstellungsseite springen."
                },
                url: {
                    label: "URL öffnen",
                    description: "Einen Link öffnen. Nutze https:// für beste Kompatibilität."
                },
                macro: {
                    label: "Makro ausführen",
                    description: "Eine Sequenz von Befehlen nacheinander ausführen."
                }
            },
            category: {
                auto: "Auto (Standardplatzierung)",
                default: {
                    label: "Schnellaktionen",
                    description: "Häufige Plexcord-Shortcuts"
                },
                plugins: {
                    label: "Plugins",
                    description: "Plugins aktivieren, deaktivieren und konfigurieren",
                    enable: {
                        label: "Plugins aktivieren"
                    },
                    disable: {
                        label: "Plugins deaktivieren"
                    },
                    settings: {
                        label: "Plugin-Einstellungen"
                    },
                    toolbox: {
                        label: "Plugin-Aktionen"
                    },
                    chatbar: {
                        label: "Chatleisten-Buttons"
                    },
                    changes: {
                        label: "Plugin-Änderungen"
                    }
                },
                context: {
                    label: "Aktueller Kontext",
                    description: "Aktionen für den gewählten Kanal und Server"
                },
                updates: {
                    label: "Updates",
                    description: "Mit Plexcord auf dem Laufenden bleiben"
                },
                discordSettings: {
                    label: "Discord-Einstellungen",
                    description: "Zu Discord-Konfigurationsseiten springen"
                },
                custom: {
                    label: "Eigene Befehle",
                    description: "Benutzerdefinierte Paletten-Einträge"
                },
                sessions: {
                    label: "Sitzungs-Tools",
                    description: "Hilfsmittel zur Verwaltung deiner Discord-Sitzung"
                },
                guilds: {
                    label: "Server",
                    description: "Schnell zu deinen Servern navigieren"
                },
                friends: {
                    label: "Freunde",
                    description: "Schnell zu deinen Freunden navigieren"
                },
                action: {
                    label: "Aktion"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Plexcord-Einstellungen öffnen",
                        plugin: "Plugin-Einstellungen öffnen"
                    }
                },
                reload: {
                    label: "Discord neu laden",
                    description: "Lädt das aktuelle Discord-Fenster neu"
                }
            },
            command: {
                enable: "{{pluginName}} aktivieren",
                enabled: "{{pluginName}} aktiviert",
                disable: "{{pluginName}} deaktivieren",
                disabled: "{{pluginName}} deaktiviert",
                failed: "Befehl fehlgeschlagen:",
                toggleFailed: "Umschalten von {{pluginName}} fehlgeschlagen.",
                pluginSettings: "{{pluginName}} Einstellungen",
                untitled: "Unbenannter Befehl",
                new: "Neuer Befehl",
                error: {
                    enter: "Gib eine Befehls-ID ein oder wähle unten eine aus.",
                    noCommand: "Kein Befehl entspricht dieser ID."
                },
                discord: {
                    account: "Mein Account öffnen",
                    privacy: "Privatsphäre & Sicherheit öffnen",
                    notifications: "Benachrichtigungen öffnen",
                    voice: "Sprach- & Videoeinstellungen öffnen",
                    text: "Text & Bilder öffnen",
                    appearance: "Erscheinungsbild öffnen",
                    accessibility: "Barrierefreiheit öffnen",
                    keybinds: "Tastenkombinationen öffnen",
                    advanced: "Erweitert öffnen",
                },
                updates: {
                    check: {
                        label: "Auf Updates prüfen",
                        description: "Prüft auf Plexcord-Updates",
                        one: "Ein Update verfügbar",
                        multiple: "{{count}} Updates verfügbar",
                        none: "Keine Updates verfügbar",
                        failed: "Update-Prüfung fehlgeschlagen."
                    },
                    changelog: {
                        label: "Änderungsprotokoll ansehen",
                        description: "Öffnet das Plexcord-Änderungsprotokoll"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} als gelesen markieren"
                    }
                },
                pin: {
                    open: {
                        label: "Pins für {{channelLabel}} öffnen"
                    },
                    toggle: {
                        label: "Pin für letzten Befehl umschalten"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} stummschalten",
                        oneHour: "{{channelLabel}} für 1 Stunde stummschalten",
                        untilTomorrow: "{{channelLabel}} bis morgen stummschalten",
                    },
                    unmute: {
                        label: "{{channelLabel}} entstummen"
                    },
                    reopen: {
                        label: "Letzte geschlossene DM wieder öffnen"
                    },
                    dm: {
                        open: {
                            label: "DM mit {{userLabel}} öffnen"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Einstellungen für {{guildLabel}} öffnen"
                    },
                    navigate: {
                        label: "Zu {{guildLabel}} navigieren"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Bitte nicht stören für 30 Min. aktivieren",
                    oneHourDnd: "Bitte nicht stören für 1 Std. aktivieren",
                    cancelStatusReset: "Status-Timer abbrechen"
                },
                status: {
                    set: {
                        online: "Status setzen: Online",
                        idle: "Status setzen: Abwesend",
                        dnd: "Status setzen: Bitte nicht stören",
                        invisible: "Status setzen: Unsichtbar"
                    }
                },
                toggle: {
                    streamer: "Streamer-Modus umschalten",
                    mute: "Stummschalten umschalten",
                    deafen: "Umschalten: Kopfhörer aus",
                },
                notification: {
                    clear: {
                        label: "Desktop-Benachrichtigungen leeren"
                    }
                },
                palette: {
                    settings: {
                        label: "Command-Palette-Einstellungen öffnen",
                        description: "Konfiguriere das Command-Palette-Plugin"
                    }
                },
                recent: {
                    label: "Letzte Befehle anzeigen",
                    description: "Zeigt die zuletzt ausgeführten Befehle",
                    rerun: "Letzten Befehl erneut ausführen"
                },
                plugin: {
                    reload: {
                        label: "Alle Plugins neu laden",
                        description: "Versucht einen Hot-Reload für alle aktivierten Plugins"
                    },
                    enable: {
                        label: "Alle Plugins aktivieren"
                    },
                    disable: {
                        label: "Alle nicht-erforderlichen Plugins deaktivieren"
                    },
                    restart: {
                        label: "Plexcord neu starten",
                        description: "Lädt den Discord-Client neu"
                    }
                },
                quickCSS: {
                    label: "Quick CSS umschalten"
                },
                transparentity: {
                    label: "Fenster-Transparenz umschalten"
                },
                theme: {
                    open: {
                        label: "Client-Theme-Einstellungen öffnen"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Befehle suchen",
                noCommand: "Keine Befehle gefunden",
                add: {
                    title: "Befehl hinzufügen"
                },
                choose: {
                    title: "Befehl wählen"
                },
                command: {
                    palette: {
                        label: "Command Palette",
                        placeholder: "Befehl eingeben",
                        filtering: "Filter nach {{tags}}",
                        noCommand: "Keine Befehle gefunden",
                        pin: "Befehl anpinnen",
                        unpin: "Befehl lösen"
                    },
                    target: {
                        label: "Ziel-Befehls-ID",
                        placeholder: "Befehls-ID eingeben",
                        choose: "Befehl wählen"
                    },
                    custom: {
                        label: "Eigene Befehle",
                        description: "1) Befehl benennen · 2) Optional Beschreibung/Keywords hinzufügen · 3) Aktion wählen und Details ausfüllen (IDs sollten existierenden Paletten-Befehlen entsprechen).",
                        auto: "Auto (Standard)",
                        expand: "Erweitern",
                        collapse: "Einklappen",
                        collapsed: {
                            label: "Bezeichnung",
                            description: "Anzeigename",
                            advanced: {
                                hide: "Erweiterte Optionen ausblenden",
                                show: "Erweiterte Optionen anzeigen"
                            },
                            subtitle: {
                                label: "Beschreibung",
                                placeholder: "Optionaler Untertitel"
                            },
                            keywords: {
                                label: "Keywords",
                                placeholder: "Mit Komma getrennte Keywords"
                            },
                            tags: {
                                label: "Tags",
                                placeholder: "Mit Komma getrennte Tags"
                            },
                            suggestion: {
                                label: "Vorschlag"
                            },
                            chooseCommand: {
                                label: "Wähle, wo dieser Befehl in der Palette erscheinen soll."
                            },
                            danger: {
                                label: "Als gefährlich markieren"
                            }
                        },
                        remove: "Befehl entfernen",
                        add: "Befehl hinzufügen"
                    }
                },
                settings: {
                    noSelected: "Keine Seite gewählt",
                    current: "Aktuelle Seite",
                    choose: "Seite wählen..."
                },
                url: {
                    url: "URL",
                    error: "Nutze http:// oder https:// Links.",
                    valid: "Gib eine gültige URL ein.",
                    open: {
                        external: "Extern öffnen"
                    }
                },
                macro: {
                    sequence: {
                        label: "Befehlssequenz",
                        placeholder: "befehl-a, befehl-b"
                    },
                    addStep: "Schritt hinzufügen",
                    unknownId: "Unbekannte Befehls-IDs"
                }
            },
            status: {
                online: "Online",
                idle: "Abwesend",
                dnd: "Bitte nicht stören",
                invisible: "Unsichtbar"
            },
            tag: {
                core: "Kern",
                navigation: "Navigation",
                utility: "Hilfsmittel",
                developer: "Entwickler",
                customization: "Anpassung",
                plugins: "Plugins",
                session: "Sitzung",
                context: "Kontext",
                custom: "Eigene",
                guilds: "Server",
                friends: "Freunde",
                other: "Andere"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Chat-Button '{{label}}' nicht gefunden.",
                        failedToTrigger: "Auslösen von {{label}} fehlgeschlagen.",
                        activated: "{{label}} aktiviert."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Kanal-Stummschaltung nicht verfügbar",
                        muted: "Kanal stummgeschaltet.",
                        unmuted: "Kanal entstummt.",
                        failed: "Status der Stummschaltung konnte nicht geändert werden."
                    },
                    dm: {
                        no: "Keine geschlossenen DMs in dieser Sitzung aufgezeichnet.",
                        reOpened: "Letzte geschlossene DM wieder geöffnet.",
                        noAvailable: "Die DM ist nicht mehr verfügbar."
                    }
                },
                command: {
                    loop: "Befehlsschleife in Makro-Ausführung erkannt.",
                    notFound: "Befehl {{commandId}} nicht gefunden.",
                    unsupported: "Nicht unterstützte Aktion für eigenen Befehl.",
                    failedToRun: "Ausführen von {{label}} fehlgeschlagen.",
                    notMetadata: "Metadaten für Command Palette nicht verfügbar."
                },
                guild: {
                    mute: {
                        unavailable: "Server-Stummschaltung nicht verfügbar",
                        muted: "Server stummgeschaltet.",
                        unmuted: "Server entstummt.",
                        failed: "Status der Server-Stummschaltung konnte nicht geändert werden."
                    },
                    settings: {
                        unable: "Server-Einstellungen konnten nicht geöffnet werden."
                    }
                },
                panel: {
                    pin: {
                        unable: "Pin-Leiste konnte nicht geöffnet werden."
                    }
                },
                status: {
                    reset: {
                        canceled: "Geplanter Status-Reset abgebrochen.",
                        unableToChange: "Status kann gerade nicht geändert werden.",
                        reverted: "Status auf {{status}} zurückgesetzt.",
                        dnd: "Bitte nicht stören für {{duration}} Minuten aktiviert."
                    },
                    change: {
                        unableToChange: "Status kann gerade nicht geändert werden.",
                        changed: "Status auf {{status}} geändert."
                    }
                },
                read: {
                    marked: "{{channelLabel}} als gelesen markiert.",
                    failed: "Kanal konnte nicht als gelesen markiert werden."
                },
                route: {
                    unable: "{{destination}} konnte nicht geöffnet werden."
                },
                notification: {
                    cleared: "Alle Benachrichtigungen geleert.",
                    failed: "Leeren der Benachrichtigungen fehlgeschlagen.",
                    notSupported: "Leeren der Benachrichtigungen nicht unterstützt."
                },
                streamerMode: {
                    enabled: "Streamer-Modus aktiviert.",
                    disabled: "Streamer-Modus deaktiviert."
                },
                voice: {
                    micToggle: {
                        muted: "Mikrofon stummgeschaltet.",
                        unmuted: "Mikrofon eingeschaltet."
                    },
                    deafenToggle: {
                        deafened: "Du hörst nun nichts mehr (Deafened).",
                        undeafened: "Du hörst nun wieder alles."
                    }
                },
                quickCSS: {
                    enabled: "Quick CSS aktiviert.",
                    disabled: "Quick CSS deaktiviert."
                },
                transparentity: {
                    enabled: "Fenster-Transparenz aktiviert.",
                    disabled: "Fenster-Transparenz deaktiviert."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} ist deaktiviert.",
                        disable: "{{pluginName}} ist deaktiviert. Aktiviere das Plugin, um diese Aktion zu nutzen."
                    },
                    required: {
                        label: "{{pluginName}} erfordert einen Neustart."
                    },
                    stop: {
                        failed: "Anhalten von {{pluginName}} fehlgeschlagen."
                    },
                    restart: {
                        failed: "Neustart von {{pluginName}} fehlgeschlagen."
                    },
                    reload: {
                        label: "{{pluginName}} neu geladen.",
                        noPlugin: "Keine Plugins neu geladen.",
                        reloaded: "{{count}} Plugin{{s}} neu geladen."
                    },
                    toggle: {
                        enabled: "{{changed}} Plugin{{s}} aktiviert.",
                        disabled: "{{changed}} Plugin{{s}} deaktiviert.",
                        noChanged: "Keine Plugins geändert."
                    },
                    run: {
                        failed: {
                            label: "Fehler beim Ausführen von {{pluginName}}: {{actionLabel}}."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "Aktueller Kanal",
                    group: "Gruppen-DM",
                    direct: "Direktnachricht"
                },
                guild: {
                    current: "Aktueller Server",
                }
            },
            option: {
                hotkey: {
                    label: "Hotkey",
                    description: "Hotkey zum Öffnen der Befehlspalette",
                    recording: "Beliebige Taste drücken...",
                    reset: "Zurücksetzen"
                },
                visualStyle: {
                    label: "Visueller Stil",
                    description: "Aussehen der Palette",
                    classic: "Klassisch",
                    polished: "Poliert"
                },
                showTags: {
                    label: "Tags anzeigen",
                    description: "Tag-Chips für Befehle anzeigen"
                },
                enableTagFilter: {
                    label: "Tag-Filter aktivieren",
                    description: "Die Tag-Filterleiste anzeigen"
                },
                customCommands: {
                    label: "Eigene Befehle",
                    description: "Benutzerdefinierte Einträge der Befehlspalette verwalten"
                }
            },
            template: {
                alias: {
                    label: "Alias-Befehl",
                    description: "Einen existierenden Befehl spiegeln"
                },
                settings: {
                    label: "Einstellungen",
                    description: "Discord-Einstellungen öffnen"
                },
                url: {
                    label: "Link",
                    description: "Eine externe URL öffnen"
                },
                macro: {
                    label: "Makro",
                    description: "Eine Sequenz von Befehlen ausführen"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Deaktiviert nervige Konsolen-Nachrichten/Fehler.",
            option: {
                disableLoggers: {
                    label: "Logger deaktivieren",
                    description: "Deaktiviert Discords interne Logger"
                },
                disableSpotifyLogger: {
                    label: "Spotify-Logger deaktivieren",
                    description: "Deaktiviert den Spotify-Logger, der Account-Infos und Token preisgibt"
                },
                whitelistedLoggers: {
                    label: "Whitelist für Logger",
                    description: "Mit Semikolon (;) getrennte Liste von Loggern, die erlaubt bleiben sollen"
                },
                allowLevel: {
                    label: "Level erlauben",
                    description: "Logger dieser Typen immer erlauben",
                    filter: "Filter-Liste"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Fügt kürzere Aliase für viele Dinge im Fenster hinzu. Nutze `shortcutList` für eine Liste."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Ermöglicht es dir, bestimmte Triggerwörter festzulegen, die standardmäßig weichgezeichnet werden. Ein Klick enthüllt den Inhalt.",
            option: {
                flagged: {
                    label: "Markiert",
                    flagged: "Markierte Wörter",
                    placeholder: "Wort"
                },
                onClick: {
                    label: "Bei Klick",
                    description: "Trigger-Inhalt nur bei Klick statt bei Hover zeigen"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Ermöglicht das Kopieren von Emojis als formatierter String (<a:blob:1234...>).",
            option: {
                copyUnicode: {
                    label: "Unicode kopieren",
                    description: "Kopiert das rohe Unicode-Zeichen statt :name: für Standard-Emojis (👽)"
                }
            },
            context: {
                copy: "Emoji Markdown kopieren"
            },
            toast: {
                success: "Erfolg! Emoji Markdown kopiert."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Fügt Textdatei-Anhängen einen Button zum Kopieren des Inhalts hinzu.",
            copied: "Kopiert!",
            large: "Datei zu groß zum Kopieren.",
            copyFileContents: "Dateiinhalt kopieren"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Ein Plugin, um die Profil-Verlaufsfarben in die Zwischenablage zu kopieren.",
            copy: "Profilfarben kopieren",
            toast: {
                noColor: "Keine Profilfarben gefunden!",
                copied: "Profilfarben kopiert!",
                error: "Fehler beim Kopieren der Profilfarben!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Kopiere die Status-URL eines Nutzers per Rechtsklick.",
            toast: {
                copied: "URL kopiert",
                error: "Fehler beim Kopieren der URL, siehe Konsole"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Ermöglicht das Kopieren und Öffnen von Sticker-Links.",
            context: {
                copy: "Link kopieren",
                open: "Link öffnen"
            },
            toast: {
                success: "Link kopiert!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Fügt dem Benutzer-Kontextmenü einen Button zum Kopieren der Erwähnung hinzu.",
            context: {
                copy: "Benutzer-Erwähnung kopieren"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Fügt dem Benutzer-Kontextmenü die Option 'Benutzer-URL kopieren' hinzu.",
            context: {
                copy: "Benutzer-URL kopieren"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Hilfsmittel zur Behandlung und Wiederherstellung nach Abstürzen ohne Neustart.",
            option: {
                attemptToPreventCrashes: {
                    label: "Abstürze verhindern versuchen",
                    description: "Ob versucht werden soll, Discord-Abstürze zu unterbinden."
                },
                attemptToNavigateToHome: {
                    label: "Zum Startbildschirm navigieren",
                    description: "Ob bei einer Wiederherstellung zum Home-Tab gewechselt werden soll."
                }
            },
            toast: {
                crashed: {
                    title: "Discord ist abgestürzt!",
                    body: "Oje :( Discord ist zweimal kurz hintereinander abgestürzt.",
                    update: "Hoppla, Discord ist abgestürzt... aber es gibt ein Plexcord-Update, das dies beheben könnte! Jetzt aktualisieren?",
                    recover: "Versuche Wiederherstellung...",
                    invalid: "Ungültiger oder abgelaufener Einladungslink."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Nutze Strg+Enter zum Senden von Nachrichten (anpassbar).",
            option: {
                submitRule: {
                    label: "Senderegel",
                    description: "Art und Weise, wie Nachrichten gesendet werden",
                    ctrlEnter: "Strg+Enter (Enter oder Umschalt+Enter für neue Zeile)",
                    shiftEnter: "Umschalt+Enter (Enter für neue Zeile)",
                    enter: "Enter (Umschalt+Enter für neue Zeile; Discord Standard)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Inmitten eines Code-Blocks senden",
                    description: "Ob eine Nachricht auch innerhalb eines Code-Blocks gesendet werden soll"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Fügt einen Sprite hinzu, der deinem Cursor folgt.",
            modal: {
                furColor: "Fellfarbe",
                outlineColor: "Umrissfarbe"
            },
            option: {
                buddy: {
                    label: "Begleiter",
                    description: "Wähle einen Cursor-Begleiter",
                    oneko: "Oneko (Katze)",
                    fathorse: "Dicke Pferd"
                },
                speed: {
                    label: "Geschwindigkeit",
                    description: "Wie schnell dein Begleiter ist",
                    invalid: "Geschwindigkeit muss größer als 0 sein"
                },
                fps: {
                    label: "Bildrate",
                    description: "Bildrate (Animation) deines Begleiters",
                    invalid: "Bildrate muss größer als 0 sein"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Fellfarbe",
                    description: "Hex-Code der Fellfarbe für Oneko"
                },
                outlineColor: {
                    label: "Umrissfarbe",
                    description: "Hex-Code der Umrissfarbe für Oneko"
                },
                fathorseSection: {
                    label: "Fatass Horse"
                },
                size: {
                    label: "Größe",
                    description: "Größe des Pferdes",
                    invalid: "Größe muss größer als 0 sein"
                },
                fade: {
                    label: "Ausblenden",
                    description: "Ob das Pferd verblassen soll, wenn der Cursor nah ist"
                },
                freeroam: {
                    label: "Freilauf",
                    description: "Ob das Pferd frei herumlaufen soll, wenn nichts passiert"
                },
                shake: {
                    label: "Schütteln",
                    description: "Ob das Pferd das Fenster schütteln soll, wenn es läuft"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Passe Ordner-Icons mit beliebigen PNG-Bildern an.",
            option: {
                solidIcon: {
                    label: "Massives Icon",
                    description: "Verwendet einen massiven Hintergrund hinter dem Bild"
                },
                folderIcons: {
                    label: "Ordner-Icons",
                    description: "Einstellungen für Ordner-Icons"
                }
            },
            modal: {
                change: "Ändere die Größe des Ordner-Icons",
                save: "Speichern",
                unset: "Zurücksetzen",
                set: "Neues Icon festlegen",
                hover: "Du musst eventuell mit der Maus über den Ordner fahren, damit er sich aktualisiert."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Ermöglicht das Festlegen der Zeit, bis Discord auf 'Abwesend' geht (oder Deaktivieren von Auto-Idle).",
            backOnline: "Willkommen zurück! Klicke auf den Button, um online zu gehen. Klicke auf das X, um bis zum Neuladen abwesend zu bleiben.",
            exit: "Abwesend-Modus beenden",
            option: {
                idleTimeout: {
                    label: "Idle-Timeout",
                    description: "Minuten, bis Discord auf abwesend schaltet (0 zum Deaktivieren)"
                },
                remainInIdle: {
                    label: "Abwesend bleiben",
                    description: "Bleibe nach der Rückkehr abwesend, bis du den Online-Status bestätigst"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Füge deinem Profil eine voll anpassbare Rich Presence (Spielstatus) hinzu.",
            goTo: "Gehe zum {{portal}}, um eine Anwendung zu erstellen und die Anwendungs-ID zu erhalten.",
            upload: "Lade Bilder im Rich Presence Tab hoch, um Bild-Keys zu erhalten.",
            image: "Für Bild-Links lade dein Bild herunter, lade es bei {{imgur}} hoch und kopiere die Bildadresse per Rechtsklick.",
            button: "Du siehst deine eigenen Buttons nicht in deinem Profil, aber alle anderen können sie sehen.",
            font: "Einige Unicode-Schriftarten (𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) können verhindern, dass der Status angezeigt wird. Nutze normale Buchstaben.",
            placeholder: "Wert eingeben",
            select: "Option wählen",
            error: {
                appIdInvalid: "Die App-ID muss eine gültige Nummer sein.",
                notice: "Hinweis",
                sharing: "Aktivitäts-Sharing ist deaktiviert, niemand kann deine Rich Presence sehen!",
                enable: "Aktivieren",
                validStream: "Der Streaming-Link muss eine gültige URL sein.",
                mustBeURL: "Muss eine gültige URL sein.",
                streamCharacters: "Streaming-Link darf max. 512 Zeichen lang sein.",
                dontUse: "Nutze keinen Discord-Link. Verwende stattdessen einen Imgur-Bild-Link.",
                imgur: "Imgur-Link muss ein Direktlink zum Bild sein (https://i.imgur.com/...).",
                tenor: "Tenor-Link muss ein Direktlink zum GIF sein (https://media.tenor.com/...).",
                required: "Dieses Feld ist erforderlich.",
                tooLong: "Darf nicht länger als {{maxLength}} Zeichen sein.",
                mustBeNumber: "Muss eine Nummer sein.",
                mustBePositive: "Muss eine positive Nummer sein.",
                startTimeInvalid: "Start-Zeitstempel muss größer als 0 sein.",
                endTimeInvalid: "End-Zeitstempel muss größer als 0 sein."
            },
            option: {
                appId: {
                    label: "App ID",
                    description: "Anwendungs-ID (erforderlich)"
                },
                appName: {
                    label: "App Name",
                    description: "Anwendungsname (erforderlich)"
                },
                details: {
                    label: "Details",
                    description: "Details (Zeile 1)"
                },
                detailsURL: {
                    label: "Details URL",
                    description: "Klickbare URL für Details"
                },
                state: {
                    label: "Status (State)",
                    description: "Status (Zeile 2)"
                },
                stateURL: {
                    label: "Status URL",
                    description: "Klickbare URL für Status"
                },
                partySize: {
                    label: "Gruppengröße",
                    description: "Aktuelle Gruppengröße (nur mit Max. Größe)"
                },
                partyMax: {
                    label: "Max. Gruppengröße",
                    description: "Maximale Gruppengröße"
                },
                type: {
                    label: "Aktivitätstyp",
                    description: "Typ der Aktivität",
                    playing: "Spielt",
                    streaming: "Streamt",
                    listening: "Hört gerade",
                    watching: "Schaut",
                    competing: "Tritt an in"
                },
                streamLink: {
                    label: "Stream-Link",
                    description: "Twitch/YouTube Link (nur für Streaming)"
                },
                timestampMode: {
                    label: "Zeitstempel-Modus",
                    description: "Was der Zeitstempel anzeigen soll",
                    none: "Keiner",
                    sinceDiscordOpen: "Seit Discord geöffnet wurde",
                    sameAsCurrentTime: "Entspricht deiner aktuellen Zeit",
                    custom: "Eigene Zeit"
                },
                startTime: {
                    label: "Startzeit (in ms)",
                    description: "Start-Zeitstempel in Millisekunden"
                },
                endTime: {
                    label: "Endzeit (in ms)",
                    description: "End-Zeitstempel in Millisekunden"
                },
                imageBig: {
                    label: "Großer Bild-Key",
                    description: "Key für großes Bild"
                },
                imageBigTooltip: {
                    label: "Tooltip für großes Bild",
                    description: "Text beim Drüberfahren"
                },
                imageBigURL: {
                    label: "Große Bild-URL",
                    description: "Klickbare URL für großes Bild"
                },
                imageSmall: {
                    label: "Kleiner Bild-Key",
                    description: "Key für kleines Bild"
                },
                imageSmallTooltip: {
                    label: "Tooltip für kleines Bild",
                    description: "Text beim Drüberfahren"
                },
                imageSmallURL: {
                    label: "Kleine Bild-URL",
                    description: "Klickbare URL für kleines Bild"
                },
                buttonOneText: {
                    label: "Button 1 Text",
                    description: "Text für ersten Button"
                },
                buttonOneURL: {
                    label: "Button 1 URL",
                    description: "Link für ersten Button"
                },
                buttonTwoText: {
                    label: "Button 2 Text",
                    description: "Text für zweiten Button"
                },
                buttonTwoURL: {
                    label: "Button 2 URL",
                    description: "Link für zweiten Button"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Passe Discords Töne an.",
            search: "Töne suchen",
            placeholder: "Nach Name oder ID suchen",
            import: "Importieren",
            export: "Exportieren",
            reset: "Alle zurücksetzen",
            debug: "Debug",
            toast: {
                error: "Fehler beim Laden der Sounddatei",
                exported: "{{count}} Einstellungen exportiert (Audiodateien nicht enthalten)",
                imported: "Einstellungen erfolgreich importiert",
                importError: "Fehler beim Importieren. Siehe Konsole.",
                reset: "Alle Überschreibungen zurückgesetzt!",
                overrideDescription: "Überschreibung für {{soundName}}",
                previewSound: "Fehler beim Abspielen der Vorschau.",
                playing: "Fehler beim Abspielen. Datei evtl. beschädigt.",
                invalidFile: "Keine eigene Sounddatei für Vorschau vorhanden",
                uploaded: "Datei erfolgreich hochgeladen: {{fileName}}",
                uploadedError: "Fehler beim Hochladen: {{error}}",
                invalidExtension: "Ungültiger Dateityp. Bitte lade eine Audiodatei hoch.",
                uploading: "Datei wird hochgeladen...",
                deleted: "Datei erfolgreich gelöscht",
                deleteError: "Fehler beim Löschen der Datei.",
                loadingError: "Fehler beim Laden der Sounddatei"
            },
            button: {
                preview: "Vorschau",
                stop: "Stopp",
                volume: "Lautstärke",
                soundSource: "Soundquelle",
                customFile: "Eigene Datei",
                uploadNew: "Neu hochladen",
                delete: "Gewählte Datei löschen"
            },
            option: {
                default: "Standard",
                custom: "Eigene",
                select: "Datei wählen..."
            },
            type: {
                activityEnd: "Aktivität beendet",
                activityLaunch: "Aktivitätsstart",
                activityUserJoin: "Nutzer tritt Aktivität bei",
                activityUserLeft: "Nutzer verlässt Aktivität",
                asmrMessage: "ASMR Nachricht",
                bitMessage: "Bit Nachricht",
                bopMessage: "Bop Nachricht",
                callCalling: "Anruf ausgehend",
                callRinging: "Anruf eingehend",
                clipError: "Clip Fehler",
                clipSave: "Clip gespeichert",
                ddrDown: "DDR Unten",
                ddrLeft: "DDR Links",
                ddrRight: "DDR Rechts",
                ddrUp: "DDR Oben",
                deafen: "Taub stellen",
                discodo: "Discodo",
                disconnect: "Verbindung trennen",
                duckyMessage: "Ducky Nachricht",
                hangStatusSelect: "Hang-Status Wahl",
                highfiveClap: "Highfive Klatschen",
                highfiveWhistle: "Highfive Pfeifen",
                humanMan: "Menschlicher Mann",
                lofiMessage: "LoFi Nachricht",
                mention1: "Erwähnung 1 (@rolle)",
                mention2: "Erwähnung 2 (@everyone)",
                mention3: "Erwähnung 3 (@here)",
                message1: "Nachricht 1 (Standard)",
                message2: "Nachricht 2 (Antwort auf Server)",
                message3: "Nachricht 3 (DMs & Gruppen)",
                mute: "Stummschalten",
                overlayUnlock: "Overlay entsperren",
                poggermodeAchievement: "Poggermode Erfolg",
                poggermodeApplause: "Poggermode Applaus",
                poggermodeEnabled: "Poggermode Aktiviert",
                poggermodeMessage: "Poggermode Nachricht",
                pttStart: "PTT Start",
                pttStop: "PTT Stopp",
                reconnect: "Neu verbinden",
                robotMan: "Roboter-Mann",
                stageWaiting: "Stage Wartend",
                streamEnded: "Stream beendet",
                streamStarted: "Stream gestartet",
                streamUserJoined: "Nutzer tritt Stream bei",
                streamUserLeft: "Nutzer verlässt Stream",
                success: "Erfolg",
                undeafen: "Enttauben",
                unmute: "Entstummen",
                userJoin: "Nutzer tritt bei",
                userLeave: "Nutzer verlässt",
                userMoved: "Nutzer verschoben",
                vibingWumpus: "Vibing Wumpus"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Eigene Zeitstempel für Nachrichten und Tooltips.",
            demo: {
                cozy: "Klicke mich, um zum Cozy-Format zu wechseln",
                compact: "Klicke mich, um zum Compact-Format zu wechseln",
                lastWeek: "Diese Nachricht wurde letzte Woche gesendet",
                hover: "Fahre über Zeitstempel, um Tooltip-Formate zu sehen",
                edit: "Bearbeite die Formate unten, um die Live-Vorschau hier zu sehen"
            },
            modal: {
                title: "Anleitung:",
                moment: "Moment.js Formatierungs-Dokumentation",
                hint: "Zusätzlich kannst du diese Platzhalter nutzen:",
                calendar: "aktiviert dynamische Datumsformate wie",
                today: "Heute",
                yesterday: "Gestern",
                relative: "erzeugt Zeitangaben wie",
                relativeTime: "vor 4 Stunden",
                preview: "Vorschau",
                format: "Kalenderformate",
                howTo: "Wie der [calendar] Wert formatiert wird, falls er oben genutzt wird."
            },
            option: {
                formats: {
                    label: "Formate",
                    description: "Passe die Zeitstempel-Formate an",
                },
                cozyFormat: {
                    label: "Cozy Modus",
                    description: "Zeitformat für Nachrichten im Cozy-Modus"
                },
                compactFormat: {
                    label: "Kompaktmodus",
                    description: "Zeitformat im Kompaktmodus und beim Hovern"
                },
                tooltipFormat: {
                    label: "Tooltip",
                    description: "Zeitformat für Tooltips"
                },
                ariaLabelFormat: {
                    label: "Aria-Label",
                    description: "Zeitformat für Aria-Labels (Barrierefreiheit)"
                },
                sameDayFormat: {
                    label: "Gleicher Tag",
                    description: "[calendar] Format für heute",
                    default: "[Heute um] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Letzter Tag",
                    description: "[calendar] Format für gestern",
                    default: "[Gestern um] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Letzte Woche",
                    description: "[calendar] Format für letzte Woche"
                },
                sameElseFormat: {
                    label: "Ältere Daten",
                    description: "[calendar] Format für ältere Daten"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Füge jedem Benutzer eine eigene Farbe hinzu! Empfohlen in Kombination mit 'typingTweaks' und 'roleColorEverywhere'.",
            option: {
                dmList: {
                    label: "DM Liste",
                    description: "Benutzer mit eigenen Farben werden in der DM-Liste farbig angezeigt"
                },
                colorInServers: {
                    label: "Farbe auf Servern",
                    description: "Ob Namensfarben auch innerhalb von Servern geändert werden sollen"
                }
            },
            context: {
                setColor: "Farbe festlegen"
            },
            modal: {
                custom: "Eigene Farbe",
                pick: "Wähle eine Farbe",
                delete: "Eintrag löschen",
                save: "Speichern"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Macht YouTube-Embed-Titel und Thumbnails weniger reißerisch (Clickbait), unterstützt durch DeArrow.",
            option: {
                hideButton: {
                    label: "Button ausblenden",
                    description: "Blendet den DeArrow-Button in YouTube-Embeds aus."
                },
                replaceElements: {
                    label: "Elemente ersetzen",
                    description: "Wähle aus, welche Elemente des Embeds ersetzt werden sollen.",
                    everything: "Alles (Titel & Thumbnails)",
                    title: "Titel",
                    thumbnail: "Thumbnails"
                },
                dearrowByDefault: {
                    label: "Standardmäßig DeArrow nutzen",
                    description: "YouTube-Videos automatisch per DeArrow anpassen."
                }
            },
            tooltip: {
                dearrowed: "Dieses Embed wurde durch DeArrow angepasst; Klicken zum Wiederherstellen",
                dearrow: "Klicken für DeArrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Räumt Discord auf, indem unwichtige UI-Elemente wie Profileffekte, Shop-Tabs, Boosts und mehr entfernt werden.",
            option: {
                userProfileHeader: {
                    label: "Benutzerprofil"
                },
                removeNameplate: {
                    label: "Namensschild entfernen",
                    description: "Entfernt Namensschilder (Nameplates)."
                },
                removeProfileEffect: {
                    label: "Profileffekt entfernen",
                    description: "Entfernt Profil-Animations-Effekte beim Öffnen."
                },
                removeClanTag: {
                    label: "Clan-Tag entfernen",
                    description: "Entfernt Clan-Tags."
                },
                alwaysShowUsername: {
                    label: "Benutzernamen immer anzeigen",
                    description: "Zeigt immer den Benutzernamen anstelle des Status an."
                },
                accessibilityNotice: {
                    label: "Barrierefreiheits-Hinweis",
                    description: "Discord hat bereits eine integrierte Option für den Benutzernamen-Stil in den Barrierefreiheit-Einstellungen."
                },
                friendsListHeader: {
                    label: "Über Freunde/DM-Liste"
                },
                removeShopAboveDM: {
                    label: "Shop über DMs entfernen",
                    description: "Entfernt den Shop-Button über der DM-Liste."
                },
                removeQuestsAboveDM: {
                    label: "Quests über DMs entfernen",
                    description: "Entfernt Quests über der DM-Liste."
                },
                miscHeader: {
                    label: "Verschiedenes"
                },
                removeServerBoostInfo: {
                    label: "Server-Boost-Info entfernen",
                    description: "Entfernt die Server-Boost-Informationen über der Kanalliste."
                },
                removeBillingSettings: {
                    label: "Abrechnungs-Einstellungen entfernen",
                    description: "Entfernt die Zahlungs- und Abrechnungs-Einstellungen."
                },
                removeGiftButton: {
                    label: "Geschenk-Button entfernen",
                    description: "Entfernt den Geschenk-Button."
                },
                removeUnavailableEmojiPicker: {
                    label: "Nicht verfügbare Emojis entfernen",
                    description: "Entfernt nicht verfügbare Kategorien aus der Emoji-Auswahl."
                },
                removeAudioMenus: {
                    label: "Audio-Menüs entfernen",
                    description: "Entfernt die Menüs neben den Stummschalt- und Kopfhörer-Buttons."
                },
                removeButtonTooltips: {
                    label: "Button-Tooltips entfernen",
                    description: "Entfernt Tooltips von Buttons."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Dekodiere Base64-Inhalte beliebiger Nachrichten und kopiere das Ergebnis.",
            right: {
                decode: "Dekodiertes kopieren (Linksklick) / Base64 dekodieren (Rechtsklick)",
                copy: "Base64 dekodieren (Linksklick) / Dekodiertes kopieren (Rechtsklick)"
            },
            option: {
                clickMethod: {
                    label: "Klick-Methode",
                    description: "Ändere das Verhalten des Buttons zum Dekodieren von Base64-Inhalten.",
                    left: "Linksklick zum Dekodieren des Base64-Inhalts.",
                    right: "Rechtsklick zum Dekodieren des Base64-Inhalts."
                }
            },
            modal: {
                title: "Dekodierter Base64-Inhalt",
                content: "Dekodierter Inhalt",
                copy: "Dekodierten Inhalt {{index}} kopieren",
                copied: "Dekodierter Inhalt in die Zwischenablage kopiert!"
            }
        },
        decor: {
            name: "Decor",
            description: "Erstelle und verwende eigene Avatar-Dekorationen oder wähle Favoriten aus den Vorlagen.",
            presetPart: "Teil der {{name}} Vorlage",
            createdBy: "Erstellt von {{author}}",
            copy: "Vorlagen-ID kopieren",
            file: "Datei",
            your: {
                title: "Deine Dekorationen",
                subtitle: "Du kannst deine eigenen Dekorationen durch Rechtsklick darauf löschen."
            },
            option: {
                changeDecoration: {
                    label: "Dekoration ändern",
                    description: "Aktiviere Decor und starte deinen Client neu, um deine Avatar-Dekoration zu ändern.",
                    also: "Du kannst auch über die {{profiles}}-Seite auf Decor-Dekorationen zugreifen.",
                    profiles: "Profile"
                },
                baseUrl: {
                    label: "Base URL",
                    description: "Decor API URL"
                },
                agreedToGuidelines: {
                    label: "Richtlinien akzeptiert",
                    description: "Zustimmung zu den Richtlinien"
                }
            },
            context: {
                decorationOptions: "Dekorations-Optionen",
                copyHash: "Dekorations-Hash kopieren",
                deleteDecoration: "Dekoration löschen"
            },
            alert: {
                delete: {
                    title: "Dekoration löschen",
                    body: "Bist du sicher, dass du {{decoration}} löschen möchtest?",
                    confirm: "Löschen",
                    cancel: "Abbrechen"
                },
                logout: {
                    title: "Abmelden",
                    body: "Bist du sicher, dass du dich von Decor abmelden möchtest?",
                    confirm: "Abmelden",
                    cancel: "Abbrechen"
                }
            },
            button: {
                change: "Dekoration ändern",
                remove: "Dekoration entfernen",
                apply: "Anwenden",
                cancel: "Abbrechen",
                browse: "Durchsuchen",
                submit: "Zur Überprüfung einreichen",
                continue: "Weiter",
                back: "Zurück"
            },
            tooltip: {
                pendingReview: "Du hast bereits eine Dekoration in der Warteschlange zur Überprüfung.",
                pending: "Wartet auf Überprüfung"
            },
            join: {
                tooltip: "Tritt dem Discord-Server von Decor bei, um Benachrichtigungen über deine Überprüfung und neue Vorlagen zu erhalten.",
                button: "Discord-Server"
            },
            create: {
                title: "Dekoration erstellen",
                notViolate: "Stelle sicher, dass deine Dekoration nicht gegen die {{guidelines}} verstößt, bevor du sie einreichst.",
                guidelines: "Richtlinien",
                file: "Datei sollte APNG oder PNG sein.",
                fileHolder: "Datei wählen",
                name: "Dieser Name wird verwendet, wenn auf diese Dekoration Bezug genommen wird.",
                nameHolder: "Begleiter-Kubus",
                nameTitle: "Name"
            },
            help: {
                update: "Um Updates zur Überprüfung deiner Dekoration zu erhalten, tritt dem {{server}} bei und erlaube Direktnachrichten.",
                server: "Decor Discord-Server"
            },
            guidelines: {
                hold: "Halt mal kurz",
                suspended: "Mit dem Einreichen einer Dekoration stimmst du den {{guidelines}} zu. Das Ignorieren dieser Richtlinien kann dazu führen, dass dein Account für die Erstellung weiterer Dekorationen gesperrt wird.",
                guidelines: "Richtlinien"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin zum Aufnehmen von Theme-Screenshots – zensiert identifizierbare Bilder und Texte.",
            toolbox: {
                toggle: "Demonstration umschalten"
            },
            keycode: "Um deinen Keycode zu ändern, schau dir {{keycode}} an!",
            this: "dieses Tool",
            okay: "Okay!",
            option: {
                keyBind: {
                    label: "Tastenkombination",
                    description: "Die Taste, um das Theme bei Tastendruck umzuschalten."
                },
                soundVolume: {
                    label: "Lautstärke",
                    description: "Wie laut der Umschalt-Ton ist (0 zum Deaktivieren)."
                },
                showConfirmationModal: {
                    label: "Bestätigungs-Modal anzeigen",
                    description: "Zeigt ein Fenster an, um dich an den Shortcut zu erinnern."
                }
            },
            switch: {
                note: "Du kannst diese Einstellung später wieder aktivieren.",
                disable: "Modal deaktivieren?"
            },
            shortcut: "Dies wird alle Texte zensieren! Um dies zu deaktivieren, merke dir den Shortcut:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Entwickler-Begleit-Plugin. Bitte melde alles, was nicht funktioniert oder sich merkwürdig verhält (wahrscheinlich ein Bug), an MutanPlex, entweder per Ping oder DM. Danke!",
            reconnect: "Neu verbinden",
            option: {
                notifyOnAutoConnect: {
                    label: "Benachrichtigung bei Auto-Connect",
                    description: "Ob benachrichtigt werden soll, wenn DevCompanion automatisch verbunden wurde."
                },
                usePatchedModule: {
                    label: "Gepatchtes Modul verwenden",
                    description: "Bei Extraktions-Anfragen mit dem aktuell gepatchten Modul antworten (falls vorhanden) statt mit dem Original."
                },
                reloadAfterToggle: {
                    label: "Neuladen nach Umschalten",
                    description: "Automatisch neu laden, nachdem ein Befehl zum Deaktivieren/Aktivieren eines Plugins empfangen wurde."
                }
            },
            toast: {
                title: "Dev Companion Verbunden",
                connected: "Mit WebSocket verbunden",
                disconnected: "Dev Companion getrennt",
                error: "Dev Companion Fehler",
                reload: "Neustart erforderlich",
                failed: "Abhängigkeiten konnten nicht gestartet werden: {{failures}}",
                close: "Schließen",
                stopping: "Fehler beim Stoppen des Plugins {{plugin}}",
                starting: "Fehler beim Starten des Plugins {{plugin}}",
                noMessage: "Keine Fehlermeldung",
                noReason: "Kein Grund angegeben"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Verhindert, dass man automatisch nach 3 Minuten aus einem DM-Sprachanruf geworfen oder in einen AFK-Kanal verschoben wird."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Deaktiviert Kameras in einem Anruf standardmäßig."
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Aktiviert das Discord-Entwickler-Banner, das die Build-ID anzeigt.",
            about: "Das Format für das Discord Dev Banner. Du kannst folgende Variablen verwenden:",
            preview: "Vorschau:",
            empty: "Format darf nicht leer sein.",
            variables: {
                discord: {
                    title: "Discord Variablen",
                    icon: "Discord Icon",
                    banner: "Dev-Banner Icon",
                    channel: "Discord Build-Kanal (z. B. Stable)",
                    build: "Discord Build-Nummer (z. B. 123456)",
                    hash: "Discord Build-Hash (z. B. 123456)"
                },
                plexcord: {
                    title: "Plexcord Variablen",
                    icon: "Plexcord Icon",
                    name: "Name von Plexcord",
                    version: "Plexcord-Version (z. B. 1.0.0)",
                    hash: "Plexcord Build-Hash (z. B. 123456)",
                    platform: "Plattform, auf der Plexcord läuft (z. B. Dev Build)"
                },
                plextron: {
                    title: "Plextron-spezifische Variablen",
                    hashShort: "Plextron Build-Hash (z. B. 123456789)",
                    platformType: "Plattform, auf der Plextron läuft (z. B. Dev Build)"
                },
                client: {
                    title: "Client Variablen",
                    icon: "Desktop Icon",
                    name: "Der Name des Clients (z. B. Discord Canary)",
                    version: "Die Version des Clients (z. B. 1.0.0)",
                },
                electron: {
                    title: "Electron Variablen",
                    icon: "Electron Icon",
                    version: "Electron Version (z. B. 25.0.0)"
                },
                chromium: {
                    title: "Chromium Variablen",
                    icon: "Chromium Icon",
                    version: "Chromium Engine Version (z. B. 125.0.0.0)"
                },
                misc: {
                    title: "Verschiedene Variablen",
                    newline: "Zeilenumbruch"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Warnt dich, wenn deine Nachricht einen Begriff aus der AutoMod-Liste enthält.",
            alert: {
                title: "Halt mal kurz!",
                content: "Deine Nachricht enthält einen Begriff auf der AutoMod-Liste (Begriff: '{{trigger}}').",
                content2: "Es besteht eine hohe Wahrscheinlichkeit, dass deine Nachricht blockiert und du potenziell von einem Moderator verwarnt wirst.",
                confirm: "Trotzdem senden",
                cancel: "Abbrechen"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Rundet relative Zeitstempel immer ab, sodass z. B. 7,6 Jahre zu 7 Jahren werden statt zu 8 Jahren."
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Fügt Drag-and-Drop-Funktionalität für favorisierte Emojis hinzu."
        },
        dragify: {
            name: "Dragify",
            description: "Ziehe Benutzer, Kanäle oder Server in den Chat, um Erwähnungen oder Einladungen einzufügen.",
            option: {
                userOutput: {
                    label: "Benutzer-Ausgabe",
                    description: "Ausgabe beim Ziehen von Benutzern.",
                    mention: "Erwähnung",
                    id: "Benutzer-ID"
                },
                channelOutput: {
                    label: "Kanal-Ausgabe",
                    description: "Ausgabe beim Ziehen von Kanälen.",
                    mention: "#kanal Erwähnung",
                    link: "Kanal-Link",
                },
                inviteExpireAfter: {
                    label: "Einladung läuft ab nach",
                    description: "Ablaufzeit der Einladung",
                    never: "Nie",
                    thirtyMinutes: "30 Minuten",
                    oneHour: "1 Stunde",
                    sixHours: "6 Stunden",
                    twelveHours: "12 Stunden",
                    oneDay: "1 Tag",
                    sevenDays: "7 Tage"
                },
                inviteMaxUses: {
                    label: "Maximale Nutzungen",
                    description: "Maximale Verwendungen für die Einladung",
                    noLimit: "Unbegrenzt",
                    one: "1 Nutzung",
                    five: "5 Nutzungen",
                    ten: "10 Nutzungen",
                    twentyFive: "25 Nutzungen",
                    fifty: "50 Nutzungen",
                    hundred: "100 Nutzungen"
                },
                inviteTemporaryMembership: {
                    label: "Temporäre Mitgliedschaft",
                    description: "Gewährt temporäre Mitgliedschaft.",
                },
                reuseExistingInvites: {
                    label: "Bestehende Einladung wiederverwenden",
                    description: "Verwendet eine bestehende Einladung wieder, statt eine neue zu erstellen."
                },
                allowChatBodyDrop: {
                    label: "Drop in Chat-Fenster erlauben",
                    description: "Erlaubt das Fallenlassen in das Haupt-Chatfenster, um Text einzufügen."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify konnte den Drop-Vorgang nicht verarbeiten.",
                },
                invite: {
                    created: "Einladung erstellt.",
                    unable: "Einladung konnte nicht erstellt werden.",
                    noChannel: "Kein Kanal für Einladungen verfügbar.",
                }
            },
            ghost: {
                user: "Benutzer",
                server: "Server",
                dm: "Direktnachrichten",
                badge: {
                    channel: "Kanal",
                    thread: "Thread",
                    voice: "Sprachkanal",
                    forum: "Forum",
                    media: "Medien",
                    announcement: "Ankündigung",
                    dm: "dm",
                    user: "Benutzer",
                    server: "Server"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Elemente einfach hervorheben und untersuchen.",
            modal: {
                recording: "Aufnahme...",
                reset: "Zurücksetzen"
            },
            option: {
                keybind: {
                    label: "Tastenkombination",
                    description: "Highlighter umschalten"
                },
                showClasses: {
                    label: "Klassen anzeigen",
                    description: "Zeigt die CSS-Klassennamen des Elements im Tooltip an"
                },
                showId: {
                    label: "ID anzeigen",
                    description: "Zeigt das ID-Attribut des Elements im Tooltip an"
                },
                showFont: {
                    label: "Schriftart anzeigen",
                    description: "Zeigt die berechnete Schriftfamilie und Schriftgröße an"
                },
                showPadding: {
                    label: "Padding anzeigen",
                    description: "Zeigt die Padding-Werte (Innenabstand) des Elements an"
                },
                showMargin: {
                    label: "Margin anzeigen",
                    description: "Zeigt die Margin-Werte (Außenabstand) des Elements an"
                },
                showBorderRadius: {
                    label: "Rahmenradius anzeigen",
                    description: "Zeigt die Werte für den abgerundeten Rahmen (Border Radius) an"
                },
                showPosition: {
                    label: "Position anzeigen",
                    description: "Zeigt den CSS-Positionstyp und den z-index des Elements an"
                },
                showDisplay: {
                    label: "Display anzeigen",
                    description: "Zeigt den Display-Typ des Elements zusammen mit Flex- oder Grid-Eigenschaften an"
                }
            },
            toast: {
                copied: {
                    color: "Farbe in die Zwischenablage kopiert!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Spielt Soundboard-Sounds ab, wenn du die Sprachverbindung trennst.",
            button: "Als globalen Exit-Sound festlegen",
            toast: {
                failedToPlay: "Hoppla! Da ist etwas schiefgelaufen."
            },
            option: {
                soundGuildId: {
                    label: "Sound-Server-ID",
                    description: "Wähle den Server aus, der den Sound enthält.",
                    placeholder: "Server auswählen..."
                },
                soundId: {
                    label: "Sound-ID",
                    description: "Gib die ID des Sounds ein, den du abspielen möchtest.",
                    placeholder: "Sound-ID eingeben..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Schalte den Zugriff auf Experimente und andere Entwickler-Features in Discord frei!",
            modal: {
                about: {
                    title: "Weitere Informationen",
                    body: "Du kannst die Discord DevTools über {{key}} öffnen"
                },
                warning: {
                    title: "Halt mal kurz!!",
                    body: "Experimente sind unveröffentlichte Discord-Features. Sie funktionieren möglicherweise nicht, könnten deinen Client beschädigen oder sogar zur Deaktivierung deines Accounts führen.",
                    notReponsible: "Nutze Experimente nur, wenn du weißt, was du tust. Plexcord ist nicht verantwortlich für Schäden, die durch das Aktivieren von Experimenten entstehen.",
                    useAtOwnRisk: "Wenn du nicht weißt, was ein Experiment bewirkt, ignoriere es. Frage uns bitte auch nicht danach; wir wissen es wahrscheinlich selbst nicht.",
                    serverSideFeatures: "Nein, du kannst keine serverseitigen Features nutzen, wie z.B. das Feld 'Send to Client' anzukreuzen."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Toolbar Dev-Menü",
                    description: "Ändert den Hilfe-Button (?) in der Toolbar (oben rechts im Chat) zum Discord-Entwickler-Menü"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Ermöglicht den Export von Nachrichten in Dateien – einzelne Nachricht, alle Nachrichten eines Nutzers oder alle Kanalnachrichten",
            option: {
                maxMessages: {
                    label: "Max. Nachrichten",
                    description: "Maximale Anzahl der zu exportierenden Nachrichten (0 = unbegrenzt)"
                },
                includeAttachments: {
                    label: "Anhänge einschließen",
                    description: "Informationen über Anhänge in den Export einbeziehen"
                },
                includeEmbeds: {
                    label: "Embeds einschließen",
                    description: "Informationen über Embeds in den Export einbeziehen"
                },
                includeReactions: {
                    label: "Reaktionen einschließen",
                    description: "Informationen über Reaktionen in den Export einbeziehen"
                },
                includeComponents: {
                    label: "Komponenten einschließen",
                    description: "Informationen über Komponenten in den Export einbeziehen"
                }
            },
            message: {
                invalid: "Ungültige Nachricht – kein Autor",
                unknownUser: "Unbekannter Benutzer",
                botEmbed: "Bot-Embed-Nachricht",
                attachments: "Anhänge",
                unknown: "Unbekannt",
                noUrl: "Keine URL",
                embeds: "Embeds",
                title: "Titel",
                description: "Beschreibung",
                url: "URL",
                footer: "Fußzeile",
                author: "Autor",
                fields: "Felder",
                components: "Komponenten",
                component: "Komponente",
                interactiveElement: "Interaktives Element",
                reactions: "Reaktionen",
                errorFormatting: "Fehler beim Formatieren der Nachricht",
                unknownError: "Unbekannter Fehler",
                header: "{{titlePrefix}} {{displayName}} in {{channelName}}",
                from: "Nachrichten von",
                direct: "Direktnachrichten",
                exported: "Exportiert am",
                total: "Nachrichten insgesamt"
            },
            toast: {
                export: {
                    title: "Nachrichten exportieren",
                    body: "Export der Nachricht fehlgeschlagen"
                },
                noMessages: {
                    title: "Nachrichten exportieren",
                    notFoundUser: "Keine Nachrichten von diesem Benutzer in diesem Kanal gefunden",
                    notFoundChannel: "Keine Nachrichten in diesem Kanal gefunden"
                },
                failed: {
                    title: "Nachrichten exportieren",
                    body: "Export der Nachrichten fehlgeschlagen"
                },
                userNotFound: {
                    title: "Nachrichten exportieren",
                    body: "Benutzer nicht gefunden"
                },
                complete: {
                    title: "Export abgeschlossen",
                    saved: "Datei gespeichert",
                    downloaded: "Datei heruntergeladen",
                    messages: "Nachrichten"
                }
            },
            context: {
                exportMessage: "Diese Nachricht exportieren",
                exportAll: "Alle Nachrichten von {{user}} exportieren",
                user: "Benutzer",
                exportAllChannel: "Alle Kanalnachrichten exportieren"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Ermöglicht das Klonen von Emojis & Stickern auf deinen eigenen Server (Rechtsklick auf sie)",
            modal: {
                title: "Benutzerdefinierter Name",
                invalidName: "Der Name muss zwischen 2 und 32 Zeichen lang sein und darf nur alphanumerische Zeichen enthalten"
            },
            toast: {
                success: "{{name}} wurde erfolgreich auf {{guild}} geklont!",
                yourServer: "deinen Server",
                failed: "Klonen fehlgeschlagen: ",
                console: "Etwas ist schiefgelaufen (überprüfe die Konsole!)"
            },
            context: {
                clone: "{{type}} klonen",
                cloneName: "{{data}} klonen"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Pausing des Clients, wenn du F8 drückst und die DevTools (+ Breakpoints) geöffnet sind."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Ermöglicht das Senden von Fake-Emojis/Stickern, die Nutzung von Nitro-Themes und Streaming in Nitro-Qualität",
            option: {
                enableEmojiBypass: {
                    label: "Emoji-Bypass aktivieren",
                    description: "Ermöglicht das Senden von Fake-Emojis (umgeht auch fehlende Berechtigungen für benutzerdefinierte Emojis)"
                },
                emojiSize: {
                    label: "Emoji-Größe",
                    description: "Größe der Emojis beim Senden"
                },
                transformEmojis: {
                    label: "Emojis umwandeln",
                    description: "Gibt an, ob Fake-Emojis in echte umgewandelt werden sollen"
                },
                enableStickerBypass: {
                    label: "Sticker-Bypass aktivieren",
                    description: "Ermöglicht das Senden von Fake-Stickern (umgeht auch fehlende Berechtigungen für Sticker)"
                },
                stickerSize: {
                    label: "Sticker-Größe",
                    description: "Größe der Sticker beim Senden"
                },
                transformStickers: {
                    label: "Sticker umwandeln",
                    description: "Gibt an, ob Fake-Sticker in echte umgewandelt werden sollen"
                },
                transformCompoundSentence: {
                    label: "Zusammengesetzte Sätze umwandeln",
                    description: "Gibt an, ob Fake-Sticker und Emojis in Sätzen mit mehr Inhalt als nur dem Link umgewandelt werden sollen"
                },
                enableStreamQualityBypass: {
                    label: "Stream-Qualitäts-Bypass aktivieren",
                    description: "Ermöglicht das Streamen in Nitro-Qualität"
                },
                useStickerHyperLinks: {
                    label: "Sticker-Hyperlinks verwenden",
                    description: "Gibt an, ob Hyperlinks beim Senden von Fake-Stickern verwendet werden sollen"
                },
                useEmojiHyperLinks: {
                    label: "Emoji-Hyperlinks verwenden",
                    description: "Gibt an, ob Hyperlinks beim Senden von Fake-Emojis verwendet werden sollen"
                },
                hyperLinkText: {
                    label: "Hyperlink-Text",
                    description: "Welcher Text für den Hyperlink verwendet werden soll. {{NAME}} wird durch den Namen des Emojis/Stickers ersetzt."
                },
                disableEmbedPermissionCheck: {
                    label: "Embed-Berechtigungsprüfung deaktivieren",
                    description: "Deaktiviert die Prüfung auf Einbettungs-Berechtigungen beim Senden von Fake-Elementen"
                }
            },
            modal: {
                sticker: "Dies ist ein FakeNitro-Sticker. Er wird nur für dich wie ein echter Sticker gerrendered. Für Nutzer ohne dieses Plugin erscheint er als Link.",
                emoji: "Dies ist ein FakeNitro-Emoji. Er wird nur für dich wie ein echtes Emoji gerrendered. Für Nutzer ohne dieses Plugin erscheint er als Link."
            },
            alert: {
                notice: {
                    title: "Halt mal kurz!",
                    body: "Du versuchst eine Nachricht zu senden/bearbeiten, die ein FakeNitro-Emoji oder einen Sticker enthält; allerdings hast du im aktuellen Kanal keine Berechtigung, Links einzubetten. Möchtest du die Nachricht trotzdem senden? Deine FakeNitro-Items erscheinen dann nur als Link.",
                    footer: "Du kannst diese Warnung in den FakeNitro-Einstellungen deaktivieren",
                    confirm: "Trotzdem senden",
                    cancel: "Abbrechen",
                    secondaryConfirm: "Nicht mehr anzeigen"
                },
                apngSticker: {
                    title: "Halt mal kurz!",
                    body: "Du kannst diese Nachricht nicht senden, da sie einen animierten FakeNitro-Sticker enthält und du keine Berechtigung zum Anhängen von Dateien im aktuellen Kanal hast. Bitte entferne den Sticker, um fortzufahren."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Ermöglicht Profil-Themes durch Verstecken der Farben in deiner Bio dank unsichtbarer 3y3-Kodierung",
            button: {
                copy: "3y3 kopieren"
            },
            modal: {
                usage: "Verwendung",
                preview: "Vorschau",
                intro: "Nach der Aktivierung dieses Plugins siehst du benutzerdefinierte Farben in den Profilen anderer Personen, die kompatible Plugins nutzen.",
                setColor: "Um deine eigenen Farben festzulegen:",
                step1: "• Nutze die Farbauswahl unten, um deine Farben zu wählen",
                step2: "• Klicke auf den Button {{copy}}",
                step3: "• Füge den unsichtbaren Text irgendwo in deine Bio ein",
                pickers: "Farbauswahl",
                primary: "Primärfarbe",
                accent: "Akzentfarbe"
            },
            option: {
                nitroFirst: {
                    label: "Nitro bevorzugen",
                    description: "Standard-Farbquelle, wenn beide vorhanden sind",
                    nitro: "Nitro-Farben",
                    fake: "Fake-Farben"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Ermöglicht Profil-Themes und Profileffekte durch Verstecken der Farben und Effekte in deiner Bio dank unsichtbarer 3y3-Kodierung",
            option: {
                prioritizeNitro: {
                    label: "Nitro priorisieren",
                    description: "Welche Quelle priorisiert werden soll",
                    nitro: "Nitro",
                    aboutMe: "Über mich (Bio)"
                },
                hideBuilder: {
                    label: "Builder ausblenden",
                    description: "Blendet den FPTE-Builder in den Einstellungen für Benutzerprofile und Serverprofile aus"
                }
            },
            modal: {
                primary: "Primärfarbe",
                accent: "Akzentfarbe",
                effect: "Effekt",
                usage: {
                    title: "Verwendung",
                    intro: "Nach der Aktivierung dieses Plugins siehst du benutzerdefinierte Theme-Farben und Effekte in den Profilen anderer Nutzer dieses Plugins.",
                    setColor: "Um deine eigenen Farben und Effekte festzulegen:",
                    step1: "Gehe in deine Profileinstellungen",
                    step2: "Nutze den FPTE-Builder, um deine Farben und deinen Effekt zu wählen",
                    step3: "Klicke auf den Button {{copy}}",
                    step4: "Füge den unsichtbaren Text irgendwo in deine Bio ein"
                }
            },
            toast: {
                copied: "FPTE in die Zwischenablage kopiert!",
                empty: "FPTE-Builder ist leer; nichts zum Kopieren!"
            },
            button: {
                copyFPTE: "FPTE kopieren",
                reset: "Zurücksetzen",
                preview: "FPTE-Builder Vorschau",
                buildBackwards: "Abwärtskompatibles FPTE erstellen",
                moreCharacters: "Verbraucht mehr Zeichen"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Fügt ein Mülleimer-Icon hinzu, um Kanäle schnell zu löschen",
            option: {
                keyBind: {
                    label: "Tastenkombination",
                    description: "Die Taste, um den Mülleimer bei Tastendruck umzuschalten."
                },
                reqCtrl: {
                    label: "Strg erforderlich",
                    description: "Erfordert, dass die Strg-Taste gedrückt gehalten wird."
                },
                reqShift: {
                    label: "Umschalt erforderlich",
                    description: "Erfordert, dass die Umschalt-Taste gedrückt gehalten wird."
                },
                reqAlt: {
                    label: "Alt erforderlich",
                    description: "Erfordert, dass die Alt-Taste gedrückt gehalten wird."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Setzt deine Lieblings-Emojis in der Emoji-Autovervollständigung an die erste Stelle und bietet Emoji-Aliase an.",
            option: {
                aliases: {
                    label: "Aliase",
                    description: "Verwalte deine Emoji-Aliase."
                },
                clearAll: {
                    label: "Alle löschen",
                    description: "Löscht alle Aliase."
                }
            },
            modal: {
                clear: {
                    title: "Alle Aliase löschen",
                    description: "Dies wird jeden gespeicherten Emoji-Alias entfernen.",
                    confirm: "Alle Aliase löschen"
                },
                set: {
                    title: "Alias festlegen",
                    description: "Lege einen Alias für {{emoji}} fest",
                    placeholder: "Alias, z.B. 'froh'",
                    save: "Speichern",
                    error: "Doppelter Alias"
                }
            },
            toast: {
                set: "Alias für {{emoji}} festgelegt",
                clearAll: "Alle Emoji-Aliase gelöscht",
                failedDeleted: "Löschen der Aliase fehlgeschlagen",
                removed: "Alias entfernt: {{alias}}",
                failedRemove: "Entfernen des Alias fehlgeschlagen",
                duplicate: "Doppelter Alias",
                failedSave: "Speichern des Alias fehlgeschlagen."
            },
            button: {
                edit: "Alias bearbeiten",
                set: "Alias festlegen"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "Fügt eine Suchleiste für Lieblings-GIFs hinzu.",
            placeholder: "Lieblings-GIFs durchsuchen",
            option: {
                searchOption: {
                    label: "Suchoption",
                    description: "Der Teil der URL, der durchsucht werden soll",
                    url: "Ganze URL",
                    path: "Nur Pfad (/ein-gif.gif)",
                    hostandpath: "Host & Pfad (tenor.com ein-gif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "Beliebiges Bild favorisieren",
            noFiles: "Keine Dateien entsprechen Ihrer Suche.",
            searchPlaceholder: "Dateien suchen",
            media: "Medien",
            demoText: "Klicke auf den Stern, um eine Datei zu favorisieren.\nFavorisierte Dateien werden hier angezeigt!",
            fetchError: "{filename} konnte nicht abgerufen werden",
            uploadError: "{filename} konnte nicht hochgeladen werden"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Fügt einen Download-Button in der oberen rechten Ecke von Dateien hinzu"
        },
        findReply: {
            name: "FindReply",
            description: "Springt zur frühesten Antwort auf eine Nachricht in einem Kanal (erleichtert das Verfolgen vergangener Unterhaltungen).",
            context: {
                jump: "Zur Antwort springen"
            },
            toast: {
                navigate: "Nutze das untere Panel, um zwischen Antworten zu navigieren.",
                container: "Container-Element konnte nicht gefunden werden.",
                couldntFind: "Antwort-Nachricht konnte nicht gefunden werden."
            },
            option: {
                includePings: {
                    label: "Pings einschließen",
                    description: "Sucht auch nach Nachrichten, die den Autor direkt erwähnen (@)"
                },
                includeAuthor: {
                    label: "Autor einschließen",
                    description: "Sucht allgemein nach Nachrichten, die dem Autor antworten, nicht nur auf diese exakte Nachricht"
                },
                hideButtonIfNoReply: {
                    label: "Button ausblenden wenn keine Antwort",
                    description: "Blendet den Button aus, wenn es keine Antworten auf die Nachricht gibt"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Entfernt die Lücke zwischen Codeblöcken und dem darunter stehenden Text"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Korrigiert Dateiendungen, indem sie wenn möglich in ein kompatibles, unterstütztes Format umbenannt werden"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Verbessert die Bildqualität, indem die Nutzung der Originalquelle erzwungen wird",
            option: {
                originalImagesInChat: {
                    label: "Originalbilder im Chat",
                    description: "Lädt auch im Chat die Originalbilder. WARNUNG: Lies die obigen Vorbehalte"
                }
            },
            modal: {
                about: {
                    title: "Das Standardverhalten ist wie folgt:",
                    body: "&mdash; Im Chat werden optimierte Bilder in voller Auflösung geladen.",
                    body2: "&mdash; Im Bild-Modal wird das Originalbild geladen.",
                    body3: "Du kannst auch Originalbilder im Chat aktivieren, beachte aber folgende Einschränkungen:",
                    warning: "&mdash; Animierte Bilder (GIF, WebP, etc.) im Chat werden immer animiert, unabhängig davon, ob die App fokussiert ist.",
                    warning2: "&mdash; Kann zu Verzögerungen (Lag) führen.",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Behebt das Problem, dass Spotify-Embeds extrem laut sind, indem du die Lautstärke anpassen kannst",
            option: {
                volume: {
                    label: "Lautstärke",
                    description: "Die Lautstärke in % für Spotify-Embeds. Alles über 10% ist seeeehr laut"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Umgeht die Blockierung von YouTube-Videos in Discord-Embeds (z. B. durch UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Fügt eine Follow-Option im Benutzer-Kontextmenü hinzu, um immer im selben Sprachkanal (VC) wie der Nutzer zu sein",
            indicatorTooltip: "Folge {{user}} (Klicken für manuellen Trigger, Rechtsklick zum Entfolgen)",
            unknownUser: "Unbekannter Benutzer",
            option: {
                executeOnFollow: {
                    label: "Bei Follow ausführen",
                    description: "Stellt sicher, dass man sich beim Folgen direkt in denselben Sprachkanal begibt"
                },
                onlyManualTrigger: {
                    label: "Nur manueller Trigger",
                    description: "Trigger nur beim Klicken auf die Anzeige"
                },
                followLeave: {
                    label: "Verlassen folgen",
                    description: "Verlässt den Kanal ebenfalls, wenn der gefolgte Benutzer ihn verlässt"
                },
                autoMoveBack: {
                    label: "Auto-Zurückbewegen",
                    description: "Bewegt dich automatisch zurück in den Sprachkanal des gefolgten Benutzers, wenn du verschoben wurdest"
                },
                followUserId: {
                    label: "Gefolgte Benutzer-ID",
                    description: "ID des gefolgten Benutzers"
                },
                channelFull: {
                    label: "Kanal voll",
                    description: "Versucht dich in den Kanal zu bewegen, sobald er nicht mehr voll ist"
                }
            },
            toast: {
                channelFull: "Kanal ist voll",
                newVc: "Dem Benutzer in einen neuen Sprachkanal gefolgt",
                insufficientPermissions: "Unzureichende Berechtigungen zum Betreten des Sprachkanals",
                sameVc: "Du bist bereits im selben Kanal",
                disconnect: "Gefolgter Benutzer hat den Kanal verlassen; Verbindung getrennt",
                notFollowing: "Gefolgter Benutzer hat den Kanal verlassen, aber 'Verlassen folgen' ist deaktiviert",
                notVc: "Gefolgter Benutzer befindet sich in keinem Sprachkanal"
            },
            context: {
                follow: "Benutzer folgen",
                unfollow: "Benutzer entfolgen"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Lädt jede beliebige Schriftart von Google Fonts",
            option: {
                selectedFont: {
                    label: "Gewählte Schriftart",
                    description: "Aktuell ausgewählte Schriftart"
                },
                fontSearch: {
                    label: "Schriftartensuche",
                    description: "Google Fonts suchen und auswählen"
                },
                applyOnCodeBlocks: {
                    label: "Auf Codeblöcke anwenden",
                    description: "Wendet die Schriftart auch auf Codeblöcke an"
                }
            },
            toast: {
                failedLoad: "Laden der Schriftart fehlgeschlagen"
            },
            modal: {
                settings: {
                    title: "Google Fonts durchsuchen",
                    description: "Wähle eine Schriftart aus, um sie anzuwenden",
                    placeholder: "Schriftarten suchen...",
                    previewText: "Franz jagt im komplett verwahrlosten Taxi quer durch Bayern",
                    authors: "Von {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Erzwingt die Krone für Serverbesitzer neben dem Benutzernamen, auch wenn der Server groß ist."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Wenn ein Weiterleiten fehlschlägt, wird es als normale Nachricht gesendet; erlaubt auch NSFW-Weiterleitungen",
            option: {
                forwardPreface: {
                    label: "Weiterleitungs-Präfix",
                    description: "Was vor den weitergeleiteten Inhalt gesetzt werden soll"
                }
            },
            context: {
                attachments: "Anhänge",
                forwarded: "Weitergeleitet von"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Ermöglicht das Senden von Nachrichten in einer verrückten Schriftart mit dem /freaky Befehl.",
            command: {
                freaky: "Es ist freaky.",
                message: "Mach deine Nachricht freaky"
            },
            option: {
                addFreakyEnding: {
                    label: "Freaky-Endung hinzufügen",
                    description: "Fügt 👅 oder ❤️ am Ende hinzu"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Schreibt die Ergebnisse des Quick Switchers um und filtert sie nach deinen am häufigsten genutzten Kanälen."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Fügt einen /friendcloud Befehl hinzu, um die Nutzer zu visualisieren, mit denen du am meisten interagierst",
            command: {
                friendcloud: {
                    description: "Visualisiere deine Friend Cloud",
                    count: "Anzahl der anzuzeigenden Nutzer",
                    mustHigher: "Die Anzahl muss 1 oder höher sein!",
                    noAffinities: "Keine Affinitäten gefunden. Überprüfe deine [Privatsphäre-Einstellungen](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Keine gültigen Nutzer in den Affinitäten gefunden. Überprüfe deine [Privatsphäre-Einstellungen](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Das Bild konnte nicht generiert werden :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Generiere Freundschaftscodes, um Freunde einfach hinzuzufügen",
            card: {
                expires: "Läuft ab <t:{{expiration}}:R> • {{uses}}/{{maxUses}} Nutzungen",
                copy: "Kopieren",
                copied: "Kopiert!",
                codes: "Deine Freundschaftscodes",
                count: "Freundschaftscodes - {{invites}}",
                create: "Freundschaftscode erstellen",
                revoke: "Alle Codes widerrufen",
                loading: "Laden...",
                dontHave: "Du hast keine Freundschaftscodes."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Erstelle und verwalte Freundschafts-Einladungslinks über Slash-Commands (/create friend invite, /view friend invites, /revoke friend invites).",
            command: {
                create: {
                    description: "Generiert einen Freundschafts-Einladungslink.",
                    message: "discord.gg/{{code}}`\n· Läuft ab <t:{{expiration}}:R>\n· Max. Nutzungen: {{uses}}"
                },
                view: {
                    description: "Zeigt eine Liste aller generierten Freundschafts-Einladungen.",
                    message: "_discord.gg/{{code}}_ \n· Läuft ab: <t:{{expiration}}:R> \n· Nutzungen: {{uses}}/{{maxUses}}",
                    noInvites: "Du hast keine aktiven Freundschafts-Einladungen."
                },
                revoke: {
                    description: "Widerruft alle generierten Freundschafts-Einladungen.",
                    message: "Alle Freundschafts-Einladungen wurden widerrufen."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Fügt Abzeichen hinzu, die zeigen, wie lange du schon mit einem Nutzer befreundet bist",
            badge: {
                sprout: {
                    name: "Keimling",
                    description: "Eure Freundschaft beginnt gerade erst"
                },
                blooming: {
                    name: "Blühend",
                    description: "Eure Freundschaft entwickelt sich! (1 Monat)"
                },
                burning: {
                    name: "Brennend",
                    description: "Eure Freundschaft hat Höchstgeschwindigkeit erreicht (3 Monate)"
                },
                fighter: {
                    name: "Kämpfer",
                    description: "Eure Freundschaft ist stark (6 Monate)"
                },
                star: {
                    name: "Stern",
                    description: "Eure Freundschaft besteht schon eine WEILE (1 Jahr)"
                },
                royal: {
                    name: "Königlich",
                    description: "Eure Freundschaft ist durch dick und dünn gegangen – ganze 2 Jahre!"
                },
                besties: {
                    name: "Besties",
                    description: "Wie schafft man das überhaupt??? (5 Jahre)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Zeigt im Benutzer-Popout an, seit wann du mit jemandem befreundet bist",
            section: "Befreundet seit"
        },
        friendTags: {
            name: "FriendTags",
            description: "Ermöglicht das Filtern nach benutzerdefinierten Tags im Quick Switcher, indem die Suche mit & gestartet wird",
            modal: {
                name: "Name",
                users: "Nutzer (mit Komma getrennt)",
                userlist: "Nutzerliste (Klicken zum Entfernen)",
                remove: "Entfernen",
                add: "Hinzufügen",
                tag: "Tag",
                removeFrom: "Entfernen von",
                addTo: "Hinzufügen zu"
            },
            option: {
                tagConfiguration: {
                    label: "Tag-Konfiguration",
                    description: "Die Komponente zur Tag-Konfiguration"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Ergänzt das Kontextmenü in Suchergebnissen um alle erwarteten Optionen"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Verleiht Benutzer-Erwähnungen im Chatfeld mehr Funktionen, wie Links-/Rechtsklick"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Lässt Avatare die gesamte Kachel im Sprachkanal (VC) ausfüllen"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Fügt dem Benutzer-Popout einen Umschalter hinzu, um deine Spielaktivität anzuzeigen oder auszublenden.",
            tooltip: "Spielaktivität umschalten",
            gameActivity: {
                enabled: "Spielaktivität aktiviert",
                disabled: "Spielaktivität deaktiviert"
            },
            option: {
                oldIcon: {
                    label: "Altes Icon",
                    description: "Verwendet den alten Icon-Stil von vor dem Discord-Design-Redesign."
                },
                location: {
                    label: "Position",
                    description: "Wo der Umschalt-Button für die Spielaktivität angezeigt werden soll.",
                    panel: "Neben Stummschalten/Taubstellen",
                    toolbox: "Plexcord Toolbox"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Ein süßer Geist erscheint, wenn du nicht auf DMs antwortest.",
            modal: {
                title: "Geghostete Benutzer",
                no: "Keine geghosteten Benutzer",
                unghost: "Entghosten",
                unknown: "Unbekannt",
                unnamedGroup: "Unbenannte Gruppe",
                unknownUser: "Unbekannter Benutzer",
                clearAll: "Alle löschen",
                noGhost: "Keine Geister hier!",
                clear: "Löschen"
            },
            option: {
                showIndicator: {
                    label: "Anzeige einblenden",
                    description: "Zeigt den Geister-Zähler oben in der Serverliste an."
                },
                showDmIcons: {
                    label: "DM-Icons anzeigen",
                    description: "Zeigt Geister-Icons neben den einzelnen DMs an."
                },
                ignoreGroupDms: {
                    label: "Gruppen-DMs ignorieren",
                    description: "Schließt alle Gruppen-DMs vom Ghosting aus."
                },
                exemptedChannels: {
                    label: "Ausgenommene Kanäle",
                    description: "Kommagetrennte Liste von Kanal-IDs, die vom Ghosting ausgenommen sind (Rechtsklick auf einen DM-Kanal, um die ID zu kopieren)."
                },
                ignoreBots: {
                    label: "Bots ignorieren",
                    description: "Ignoriert DMs von Bots."
                },
                maxInactiveTimeMs: {
                    label: "Maximale Inaktivitätszeit",
                    description: "Nur Ghost-DMs anzeigen, die innerhalb dieses Zeitraums aktiv sind",
                    no: "Keine Begrenzung",
                    oneHour: "1 Stunde",
                    oneDay: "1 Tag",
                    oneWeek: "1 Woche",
                    oneMonth: "1 Monat"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Ermöglicht es dir, Sammlungen von GIFs zu erstellen.",
            context: {
                copyImageLink: "Bildlink kopieren",
                copyUrl: "URL kopieren",
                collection: {
                    add: "Zur Sammlung hinzufügen",
                    gif: "GIF-Sammlungen",
                    delete: "Sammlung löschen",
                    create: "Sammlung erstellen",
                    remove: "Entfernen",
                    information: "Sammlungsinformationen",
                    name: "Name",
                    gifs: "GIFs",
                    created: "Erstellt am",
                    updated: "Zuletzt aktualisiert",
                    close: "Schließen",
                    rename: "Umbenennen",
                    move: "In Sammlung verschieben",
                    select: "Wähle eine Sammlung aus, in die das Element verschoben werden soll"
                },
                gif: {
                    information: "Informationen",
                    added: "Hinzugefügt am",
                    width: "Breite",
                    height: "Höhe",
                    close: "Schließen"
                }
            },
            option: {
                itemPrefix: {
                    label: "Element-Präfix",
                    description: "Das Präfix für GIF-Elemente"
                },
                collectionPrefix: {
                    label: "Sammlungs-Präfix",
                    description: "Das Präfix für Sammlungen"
                },
                onlyShowCollections: {
                    label: "Nur Sammlungen anzeigen",
                    description: "Zeigt ausschließlich die Sammlungen an"
                },
                stopWarnings: {
                    label: "Warnungen stoppen",
                    description: "Deaktiviert Löschwarnungen"
                },
                showCopyImageLink: {
                    label: "Bildlink kopieren anzeigen",
                    description: "Zeigt die Option '{{copyImageLink}}' im Kontextmenü an"
                },
                preventDuplicates: {
                    label: "Duplikate verhindern",
                    description: "Verhindert, dass dasselbe GIF mehrmals zu einer Sammlung hinzugefügt wird"
                },
                defaultEmptyCollectionImage: {
                    label: "Standardbild für leere Sammlungen",
                    description: "Das Bild/GIF, das angezeigt wird, wenn eine Sammlung keine Inhalte hat"
                },
                collectionsSortType: {
                    label: "Sammlungs-Sortiertyp",
                    description: "Die Art der Sortierung für Sammlungen"
                },
                collectionsSortOrder: {
                    label: "Sammlungs-Sortierreihenfolge",
                    description: "Die Reihenfolge der Sortierung für Sammlungen"
                },
                collectionsSort: {
                    label: "Sammlungen sortieren",
                    description: "Entscheide, wie Sammlungen sortiert werden sollen",
                    title: "Sammlungen sortieren",
                    sortDescription: "Wähle ein Sortierkriterium für deine Sammlungen",
                    sortBy: "Sortieren nach",
                    name: "Name",
                    creationDate: "Erstellungsdatum",
                    modifiedDate: "Änderungsdatum",
                    ascending: "Aufsteigend",
                    descending: "Absteigend"
                },
                importGifs: {
                    label: "GIFs importieren",
                    description: "Sammlungen importieren",
                    button: "Sammlungen importieren"
                },
                exportGifs: {
                    label: "GIFs exportieren",
                    description: "Sammlungen exportieren",
                    button: "Sammlungen exportieren"
                },
                resetCollections: {
                    label: "Sammlungen zurücksetzen",
                    description: "Setzt Sammlungen auf Standard zurück (löscht alle deine Sammlungen)",
                    button: "Sammlungen zurücksetzen"
                }
            },
            toast: {
                copied: "Bildlink in die Zwischenablage kopiert!",
                urlCopied: "URL in die Zwischenablage kopiert!",
                already: "Diese Sammlung existiert bereits",
                alreadyCollection: "Dieses GIF befindet sich bereits in dieser Sammlung"
            },
            modal: {
                create: {
                    title: "Sammlung erstellen",
                    name: "Sammlungsname",
                    create: "Erstellen"
                },
                rename: {
                    title: "Sammlung umbenennen",
                    name: "Neuer Sammlungsname",
                    warning: "Der Name darf nicht länger als 24 Zeichen sein",
                    rename: "Umbenennen"
                }
            },
            alert: {
                import: {
                    title: "Bist du sicher?",
                    body: "Das Importieren von Sammlungen wird deine aktuellen Sammlungen überschreiben.",
                    confirm: "Importieren",
                    cancel: "Abbrechen"
                },
                reset: {
                    title: "Bist du sicher?",
                    body: "Das Zurücksetzen der Sammlungen wird alle deine Sammlungen entfernen.",
                    confirm: "Zurücksetzen",
                    cancel: "Abbrechen"
                },
                delete: {
                    title: "Bist du sicher?",
                    deleteBody: "Möchtest du diese Sammlung wirklich löschen?",
                    removeBody: "Möchtest du dieses Element wirklich entfernen?",
                    confirm: "Löschen",
                    remove: "Entfernen",
                    cancel: "Abbrechen"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Ermöglicht es dir, GIFs direkt in das Chat-Eingabefeld einzufügen."
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Fügt einen Befehl hinzu, um ein zufälliges GIF aus deinen Favoriten zu senden, mit einer Chance von eins zu zehn, den Serverbesitzer zu pingen.",
            command: {
                gifRoulette: {
                    description: "Fordere das Schicksal heraus und sende ein GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Chance auf Besitzer-Ping",
                    description: "Gibt an, ob eine Chance von 1 zu 10 bestehen soll, den Besitzer des Servers zu pingen (oh weh)."
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Zeigt die öffentlichen GitHub-Repositories eines Benutzers in seinem Profil an.",
            loading: "Repositories werden geladen...",
            option: {
                showStars: {
                    label: "Sterne anzeigen",
                    description: "Zeigt die Sterne der Repositories an"
                },
                showLanguage: {
                    label: "Sprache anzeigen",
                    description: "Zeigt die Hauptsprache des Repositories an"
                }
            },
            error: {
                error: "Fehler",
                render: "Fehler: GitHubRepos konnten nicht gerendert werden"
            },
            button: {
                show: "GitHub Repositories anzeigen",
                repositories: "GitHub Repositories",
                more: "Mehr anzeigen",
                only: "Es werden nur die Top {{length}}/{{total}} angezeigt"
            },
            modal: {
                title: "GitHub Repositories von {{user}}",
                repository: "Repository",
                description: "Beschreibung",
                language: "Sprache",
                stars: "Sterne",
                viewOnGitHub: "Auf GitHub ansehen",
                close: "Schließen"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Fügt einen Befehl hinzu, um einen Internet-Suchlink zu senden.",
            command: {
                googleThat: {
                    description: "Einen Suchmaschinen-Link senden",
                    query: "Die Suchanfrage"
                }
            },
            option: {
                hyperlink: {
                    label: "Hyperlink",
                    description: "Gibt an, ob der gesendete Link als Hyperlink mit der Suchanfrage als Label formatiert werden soll"
                },
                embed: {
                    label: "Embed",
                    description: "Gibt an, ob der gesendete Link ein Embed generieren soll"
                },
                defaultEngine: {
                    label: "Standard-Suchmaschine",
                    description: "Die zu verwendende Suchmaschine"
                },
                customEngineURL: {
                    label: "Benutzerdefinierte Suchmaschinen-URL",
                    description: "Die URL der Suchmaschine, die du verwenden möchtest"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Ermöglicht es dir, einen beliebigen Begrüßungs-Sticker zu verwenden, anstatt nur den zufälligen, indem du mit der rechten Maustaste auf den 'Winke, um Hallo zu sagen!'-Button klickst.",
            mode: {
                greet: "Begrüßen",
                message: "Nachricht"
            },
            option: {
                greetMode: {
                    label: "Begrüßungs-Modus",
                    description: "Wähle den Begrüßungs-Modus",
                    greet: "Begrüßen (du kannst nur 3-mal begrüßen)",
                    message: "Nachricht (du kannst Spam-Begrüßungen senden)"
                }
            },
            context: {
                label: "Greet Sticker Picker",
                mode: "Begrüßungs-Modus",
                stickers: "Begrüßungs-Sticker",
                multi: "Unholy Multi-Greet",
                send: "Begrüßungen senden"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Kontextmenü zum Exportieren und Herunterladen der Emojis und Sticker eines Servers.",
            context: {
                download: {
                    emoji: "Emojis herunterladen",
                    sticker: "Sticker herunterladen"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Fügt Einstellungen für Server-Tags hinzu, wie z. B. das Ausblenden dieser oder das Deaktivieren der Aufforderung, sie zu übernehmen.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Aufforderung zum Übernehmen deaktivieren",
                    description: "Deaktiviert die Aufforderung, Tags zu übernehmen"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Ermöglicht das Ausblenden der Chat-Buttons.",
            tooltip: {
                close: "Schließen",
                open: "Öffnen"
            },
            option: {
                color: {
                    label: "Farbe",
                    description: "Färbt den Button beim Öffnen rot"
                },
                open: {
                    label: "Offen",
                    description: "Standardmäßig geöffnet"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Blendet Anhänge und Embeds für einzelne Nachrichten über einen Hover-Button aus.",
            show: "Medien anzeigen",
            hide: "Medien ausblenden",
            hidden: "Medien ausgeblendet"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Ein Plugin, um Nachrichten vorübergehend auszublenden, bis du den Client neu startest.",
            button: {
                hide: "Ausblenden"
            },
            option: {
                hidePopoverButton: {
                    label: "Popover-Button ausblenden",
                    description: "Blendet den Ausblenden-Button im Nachrichten-Popover aus."
                }
            }
        },
        hideServers: {
            name: "HideServers",
            description: "Blendet Server aus der Serverliste aus.",
            context: {
                hide: "Server ausblenden",
                unhide: "Server einblenden",
                folder: {
                    hide: "Ordner ausblenden",
                    unhide: "Ordner einblenden"
                }
            },
            option: {
                showIndicator: {
                    label: "Anzeige einblenden",
                    description: "Zeigt ein Menü zum Einblenden von Servern am Ende der Liste an"
                },
                guildsList: {
                    label: "Serverliste",
                    description: "Entfernt ausgeblendete Server"
                },
                resetHidden: {
                    label: "Ausgeblendete zurücksetzen",
                    description: "Entfernt alle ausgeblendeten Server von der Liste",
                    button: "Ausgeblendete Server zurücksetzen"
                }
            },
            button: {
                hidden: "Ausgeblendet",
                hiddenServers: "Ausgeblendete Server",
                remove: "Entfernen",
                folder: "Ordner",
                removeAll: "Alle entfernen",
                guilds: "Server",
                noHiddenServers: "Keine ausgeblendeten Server"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes ermöglicht es dir, Nachrichten zu speichern.",
            main: "Hauptmenü",
            button: {
                tooltip: "Holy Notes",
                save: "Notiz speichern",
                cancel: "Abbrechen",
                noteMessage: "Nachricht notieren",
                refresh: "Avatare aktualisieren",
                import: "Notizen importieren",
                export: "Notizen exportieren",
                deleteAll: "Alle Notizen löschen",
                delete: "Notizbuch löschen",
                create: "Notizbuch erstellen",
                copyText: "Text kopieren",
                copyAttachment: "Anhang-URL kopieren",
                deleteNote: "Notiz löschen",
                moveNote: "Notiz verschieben",
                moveTo: "Verschieben nach {{key}}",
                copyId: "ID kopieren"
            },
            modal: {
                error: {
                    generic: "Beim Parsen deiner Notizen ist ein Fehler aufgetreten. Überprüfe die Konsole für Details.",
                    easter: "Keine Notizen gefunden. Empathy Banana ist für dich da.",
                    empty: "In diesem Notizbuch wurden keine Notizen gefunden."
                },
                help: {
                    title: "Hilfe",
                    description: "Erfahre, wie du Holy Notes verwendest",
                    addingNotes: "Notizen hinzufügen",
                    addingNotesText: "Um eine Notiz hinzuzufügen, klicke mit der rechten Maustaste auf eine Nachricht, fahre über den Punkt 'Nachricht notieren' und klicke auf den Namen des Notizbuchs, in dem du die Nachricht speichern möchtest.",
                    prototype: "Prototyp",
                    noteMessage: "Das Klicken auf 'Nachricht notieren' allein speichert die Notiz standardmäßig im Hauptbuch!",
                    deletingNotes: "Notizen löschen",
                    deletingNotesText: "Hinweis: Du kannst entweder mit der rechten Maustaste auf die Notiz klicken und 'Notiz löschen' wählen, oder die 'ENTF'-Taste auf deiner Tastatur gedrückt halten und auf eine Notiz klicken; das ist wie Magie!",
                    movingNotes: "Notizen verschieben",
                    movingNotesText: "Um eine Notiz zu verschieben, klicke mit der rechten Maustaste auf eine Notiz, fahre über den Punkt 'Notiz verschieben' und klicke auf das gewünschte Notizbuch.",
                    jumpToMessage: "Zur Nachricht springen",
                    jumpToMessageText: "Um zur ursprünglichen Position der Nachricht zu springen, klicke einfach mit der rechten Maustaste auf die Notiz und wähle 'Zur Nachricht springen'."
                },
                notebook: {
                    title: "NOTIZBUCH",
                    search: "Nachricht suchen...",
                    options: "Sortieroptionen",
                    label: "Sortiermenü",
                    filteredOf: "{{filteredCount}} von {{noteCount}} Notiz(en)",
                    note: "{{noteCount}} Notiz(en)",
                    ada: "Aufsteigend / Hinzugefügt am",
                    amd: "Aufsteigend / Nachrichtendatum",
                    dda: "Absteigend / Hinzugefügt am",
                    dmd: "Absteigend / Nachrichtendatum",
                    change: "Sortierung ändern",
                    ascending: "Aufsteigend",
                    descending: "Absteigend",
                    dateAdded: "Hinzugefügt am",
                    messageDate: "Nachrichtendatum"
                },
                create: {
                    title: "Notizbuch erstellen",
                    description: "Gib einen Namen für dein neues Notizbuch ein",
                    placeholder: "Notizbuchname"
                },
                delete: {
                    title: "{{notebookName}} löschen?",
                    description: "{{noteCount}} Notiz(en) werden dauerhaft gelöscht",
                    button: "Löschen"
                },
                tabs: {
                    label: "Notizbuch-Tabs"
                }
            },
            toast: {
                saved: "Nachricht erfolgreich zu {{notebook}} hinzugefügt",
                deleted: "Notiz erfolgreich aus {{notebook}} gelöscht",
                moved: "Notiz erfolgreich von {{from}} nach {{to}} verschoben.",
                exists: "Notizbuch {{notebookName}} existiert bereits.",
                created: "{{notebookName}} erfolgreich erstellt.",
                deletedNotebook: "{{notebookName}} erfolgreich gelöscht.",
                refreshed: "Avatare erfolgreich aktualisiert.",
                deletedAll: "Alle Notizen erfolgreich gelöscht.",
                imported: "Notizen erfolgreich importiert.",
                invalid: "Import der Notizen fehlgeschlagen."
            },
            toolbox: {
                action: "Notizen öffnen"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Ändert den Home-Button in eine Tippanzeige, wenn jemand in deinen DMs schreibt."
        },
        iconViewer: {
            name: "IconViewer",
            description: "Fügt den Einstellungen einen neuen Tab hinzu, um alle Icons in der Vorschau anzuzeigen.",
            toolbox: "Icon-Tab öffnen",
            iconFinder: "Icon-Finder",
            about: {
                title: "Funktionen",
                preview: "Icon-Vorschau",
                list: {
                    copy: "Icon-Namen und CSS-Variablen kopieren",
                    download: "Icons in verschiedenen Formaten herunterladen (SVG, PNG, GIF, etc.)",
                    premade: "Vorgefertigte Icon-Fundstücke für deine Plugins kopieren",
                    find: "Icons nach Funktionskontext finden",
                    search: "Nach Farben suchen, indem du mit der rechten Maustaste auf den Farbnamen klickst",
                    special: "Besonderer Dank"
                }
            },
            context: {
                icon: {
                    options: "Icon-Optionen",
                    log: "In Konsole ausgeben (Log)",
                    save: "Speichern unter...",
                    rightClick: "Rechtsklick auf Icon zum Ändern",
                    usage: "Verwendung",
                    click: "Klicken zum Kopieren",
                    copied: "Kopiert!",
                    actions: "Aktionen"
                }
            },
            modal: {
                label: "Suche nach Funktionskontext",
                search: "{{count}} Icons durchsuchen...",
                function: "Funktion",
                iconViewer: {
                    colors: "IconViewer Farben",
                    unknown: "unbekannt",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Startet den Client automatisch neu, nachdem er eine konfigurierbare Zeit lang inaktiv war, vermeidet jedoch einen Neustart, während du dich in einem Sprachkanal (VC) befindest.",
            option: {
                isEnabled: {
                    label: "Aktiviert",
                    description: "Automatischen Neustart nach Inaktivität aktivieren"
                },
                idleMinutes: {
                    label: "Inaktive Minuten",
                    description: "Minuten der Inaktivität vor dem Neustart (wenn nicht im VC)"
                }
            },
            toolbox: {
                disable: "Idle Auto Restart deaktivieren",
                enable: "Idle Auto Restart aktivieren"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignoriert Aktivitäten, sodass diese NUR in deinem Status nicht angezeigt werden. Du kannst in den Tabs 'Registrierte Spiele' und 'Aktivitäten' konfigurieren, welche genau ignoriert werden, oder die allgemeinen Einstellungen unten verwenden.",
            modal: {
                import: {
                    title: "Importiere die App-ID des CustomRPC-Plugins in die Filterliste"
                },
                filter: {
                    title: "Filterliste",
                    description: "Kommagetrennte Liste von Aktivitäts-IDs, die gefiltert werden sollen (nützlich für spezifische RPC-Aktivitäten und CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "CustomRPC App-ID ist nicht gesetzt.",
                    alreadyAdded: "CustomRPC App-ID wurde bereits hinzugefügt."
                }
            },
            button: {
                import: "CustomRPC ID importieren"
            },
            option: {
                importCustomRPC: {
                    label: "CustomRPC importieren"
                },
                listMode: {
                    label: "Listen-Modus",
                    description: "Wähle, wie die Filterliste angewendet wird",
                    blacklist: "Blacklist (nur ignorieren, was auf der Liste steht)",
                    whitelist: "Whitelist (alles ignorieren, außer was auf der Liste steht)"
                },
                idList: {
                    label: "ID-Liste"
                },
                ignorePlaying: {
                    label: "Spielen ignorieren",
                    description: "Alle 'Spielt gerade'-Aktivitäten ignorieren (normalerweise Spiele und RPC-Aktivitäten)"
                },
                ignoreStreaming: {
                    label: "Streamen ignorieren",
                    description: "Alle Streaming-Aktivitäten ignorieren"
                },
                ignoreListening: {
                    label: "Hören ignorieren",
                    description: "Alle Hör-Aktivitäten ignorieren (normalerweise Spotify)"
                },
                ignoreWatching: {
                    label: "Zuschauen ignorieren",
                    description: "Alle 'Schaut gerade'-Aktivitäten ignorieren"
                },
                ignoreCompeting: {
                    label: "Wettkampf ignorieren",
                    description: "Alle Wettkampf-Aktivitäten ignorieren (normalerweise spezielle Spiele-Aktivitäten)"
                },
                ignoredActivities: {
                    label: "Ignorierte Aktivitäten"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Ermöglicht es dir, Anrufe von bestimmten Benutzern oder DM-Gruppen zu ignorieren.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Dauerhaft ignorierte Benutzer",
                    description: "Benutzer-IDs (Komma + Leerzeichen), die dauerhaft ignoriert werden sollen"
                }
            },
            button: {
                ignore: "Ignorieren",
                temporarilyIgnore: "Anrufe vorübergehend ignorieren",
                permanentlyIgnore: "Anrufe dauerhaft ignorieren"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Nachrichten von 'wahrscheinlichen Spammern' nicht ausblenden"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Zeigt den Dateinamen von Bildern & GIFs als Tooltip an, wenn man mit der Maus darüberfährt.",
            option: {
                showFullUrl: {
                    label: "Vollständige URL anzeigen",
                    description: "Zeigt die komplette URL des Bildes anstatt nur den Dateinamen an. Bei GIFs immer aktiviert, da diese oft keine aussagekräftigen Dateinamen haben."
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Bild-Links in Nachrichten niemals ausblenden, selbst wenn sie der einzige Inhalt sind"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Ermöglicht das Heranzoomen von Bildern und GIFs sowie das Anzeigen von Bild-Metadaten. Nutze das Mausrad zum Zoomen und Umschalt + Mausrad, um den Linsenradius zu vergrößern.",
            option: {
                saveZoomValues: {
                    label: "Zoom-Werte speichern",
                    description: "Gibt an, ob Zoom- und Linsengrößen-Werte gespeichert werden sollen"
                },
                invertScroll: {
                    label: "Scrollen invertieren",
                    description: "Invertiert die Scroll-Richtung"
                },
                nearestNeighbour: {
                    label: "Nearest Neighbour",
                    description: "Nutzt 'Nearest Neighbour'-Interpolation beim Skalieren von Bildern"
                },
                square: {
                    label: "Quadratisch",
                    description: "Macht die Linse quadratisch"
                },
                zoom: {
                    label: "Zoom",
                    description: "Zoomfaktor der Linse"
                },
                size: {
                    label: "Größe",
                    description: "Radius / Größe der Linse"
                },
                zoomSpeed: {
                    label: "Zoom-Geschwindigkeit",
                    description: "Wie schnell sich der Zoom / die Linsengröße ändert"
                },
                showMetadata: {
                    label: "Metadaten anzeigen",
                    description: "Zeigt Bild-Metadaten bei Doppelklick auf das ausgewählte Bild an"
                }
            },
            context: {
                square: "Quadratische Linse",
                nearest: "Nearest Neighbour",
                zoom: "Zoom",
                size: "Linsengröße",
                zoomSpeed: "Zoom-Geschwindigkeit",
                showImageMetadata: "Bild-Metadaten anzeigen",
                view: "Metadaten ansehen",
                loading: "Lädt...",
                unknown: "Unbekannt",
                sizeHTML: "Größe",
                dimensions: "Maße",
                filename: "Dateiname"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Fügt einen /imgtogif Slash-Befehl hinzu, um aus einem beliebigen Bild ein GIF zu erstellen.",
            command: {
                imgToGif: {
                    description: "Ermöglicht es, ein Bild in ein GIF zu verwandeln",
                    image: "Bildanhang, der verwendet werden soll",
                    width: "Breite des GIFs",
                    height: "Höhe des GIFs"
                }
            },
            error: {
                noImage: "Kein Bild angegeben!",
                notImage: "Der Upload ist kein Bild"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Zeigt deine impliziten Beziehungen (z.B. durch Interaktion) im Freunde-Tab an.",
            option: {
                sortByAffinity: {
                    label: "Nach Affinität sortieren",
                    description: "Ob implizite Beziehungen nach ihrer Affinität zu dir sortiert werden sollen."
                }
            },
            implicit: "Implizit"
        },
        inRole: {
            name: "InRole",
            description: "Erfahre über das Rollen-Kontextmenü oder den /inrole Befehl, wer eine bestimmte Rolle hat (bitte Plugin-Info lesen!)",
            command: {
                inrole: {
                    description: "Erfahren, wer eine Rolle hat",
                    role: "Die Rolle",
                    noGuild: "Stelle sicher, dass du dich auf einem Server befindest."
                }
            },
            context: {
                view: "Mitglieder mit Rolle anzeigen"
            },
            modal: {
                about: {
                    title: "Einschränkungen",
                    description: "Wenn du keine Moderator-Berechtigungen auf dem Server hast und der Server groß ist (über 100 Mitglieder), kann das Plugin wie folgt eingeschränkt sein:",
                    list: {
                        one: "Offline-Mitglieder werden nicht aufgelistet",
                        two: "Standardmäßig werden bis zu 100 Mitglieder aufgelistet. Um mehr zu laden, scrolle in der Mitgliederliste des Servers nach unten.",
                        three: "Freunde werden jedoch immer angezeigt, unabhängig von ihrem Status."
                    }
                },
                member: {
                    title: "Rollenmitglieder",
                    noMembers: "Es wurden scheinbar keine online-gecachten Mitglieder mit dieser Rolle gefunden. Versuche, in deiner Mitgliederliste nach unten zu scrollen, um mehr Benutzer zu cachen!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Starte sofort eine Bildschirmübertragung, wenn du einem Sprachkanal beitrittst. Unterstützt Desktop-Quellen, Fenster und Video-Eingabegeräte (Kameras, Capture-Cards).",
            modal: {
                linux: {
                    title: "Für Linux",
                    body: "Unter Wayland öffnet sich lediglich die Auswahl der Bildschirmübertragung",
                    bodyTwo: "Unter X11 funktioniert es vielleicht – oder auch nicht. :shrug:"
                },
                videoDevices: {
                    title: "Video-Eingabegeräte",
                    body: "Unterstützt Kameras und Capture-Cards (wie Elgato HD60X), wenn in den Einstellungen aktiviert"
                },
                regardingSound: {
                    title: "Betreffend Sound & Vorschau-Einstellungen",
                    body: "Wir verwenden die von Discord gesetzten Einstellungen, um zu entscheiden, ob die Stream-Vorschau und der Ton aktiviert werden sollen"
                }
            },
            option: {
                streamMedia: {
                    label: "Zu streamende Medienquelle",
                    description: "Wird auf den Hauptbildschirm zurückgesetzt, falls nicht gefunden",
                    loading: "Medienquellen werden geladen...",
                    none: "Keine Medienquellen gefunden",
                    placeholder: "Wähle eine Medienquelle zum Streamen"
                },
                includeVideoDevices: {
                    label: "Video-Geräte einschließen",
                    description: "Video-Eingabegeräte (Kameras, Capture-Cards) in die Quellenliste aufnehmen"
                },
                autoMute: {
                    label: "Auto-Stummschalten",
                    description: "Mikrofon beim Beitreten eines Sprachkanals automatisch stummschalten"
                },
                autoDeafen: {
                    label: "Auto-Taubstellen",
                    description: "Kopfhörer beim Beitreten eines Sprachkanals automatisch taubstellen (schaltet dich auch stumm)"
                },
                instantScreenshare: {
                    label: "Instant Screenshare",
                    description: "Aktiviert die automatische Bildschirmübertragung"
                },
                keybindScreenshare: {
                    label: "Tastenkombination für Screenshare",
                    description: "Bildschirmfreigabe per Tastenkombination (einzustellen in den Discord-Tastenkombinationen)"
                },
                focusDiscord: {
                    label: "Discord fokussieren",
                    description: "Bildschirmfreigabe per Keybind nur starten, wenn Discord im Vordergrund ist"
                },
                toolboxManagement: {
                    label: "Toolbox-Verwaltung",
                    description: "Instant Screenshare aktivieren/deaktivieren"
                }
            },
            toolbox: {
                label: "Instant Screenshare",
                toast: "Instant Screenshare {{state}}",
                enabled: "Aktiviert",
                disabled: "Deaktiviert"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Verschlüssele deine Nachrichten auf eine unauffällige Weise!",
            option: {
                savedPasswords: {
                    label: "Gespeicherte Passwörter",
                    description: "Gespeicherte Passwörter (getrennt durch ein Komma)"
                }
            },
            button: {
                encrypt: "Nachricht verschlüsseln",
                decrypt: "Nachricht entschlüsseln",
                hidden: "Indikator für versteckte Nachricht (InvisibleChat)"
            },
            tooltip: {
                hidden: "Diese Nachricht enthält eine versteckte Nachricht! (InvisibleChat)"
            },
            embed: {
                title: "Entschlüsselte Nachricht",
                footer: "Gesendet mit InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Nachricht verschlüsseln",
                    secret: "Geheimnis",
                    cover: "Tarntext (2 oder mehr Wörter!!)",
                    password: "Passwort",
                    dontUseCover: "Keinen Tarntext verwenden",
                    send: "Senden",
                    cancel: "Abbrechen"
                },
                decrypt: {
                    title: "Nachricht entschlüsseln",
                    with: "Verschlüsselte Nachricht",
                    password: "Passwort",
                    decrypt: "Entschlüsseln",
                    cancel: "Abbrechen"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Ermöglicht das Bearbeiten der Standardwerte beim Erstellen von Server-Einladungen.",
            option: {
                inviteDuration: {
                    label: "Einladungsdauer",
                    description: "Standarddauer für Server-Einladungen",
                    thirtyMinutes: "30 Minuten",
                    oneHour: "1 Stunde",
                    sixHours: "6 Stunden",
                    twelveHours: "12 Stunden",
                    oneDay: "1 Tag",
                    sevenDays: "7 Tage",
                    forever: "Unbegrenzt"
                },
                maxUses: {
                    label: "Max. Nutzungen",
                    description: "Standardmäßige maximale Anzahl an Nutzungen",
                    unlimited: "Unbegrenzt",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Temporäre Mitgliedschaft",
                    description: "Standardmäßige temporäre Mitgliedschaft für Einladungen"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Macht Benutzernamen-Farben im Chat einzigartig, wie in IRC-Clients.",
            option: {
                lightness: {
                    label: "Helligkeit",
                    description: "Helligkeit in %. Ändere dies, falls die Farben zu hell oder zu dunkel sind."
                },
                memberListColors: {
                    label: "Mitgliederlisten-Farben",
                    description: "Ersetzt die Rollenfarben in der Mitgliederliste"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Farbe nur bei Benutzern ohne Farbe anwenden",
                    description: "Wendet Farben nur auf Benutzer an, die keine vordefinierte Farbe haben"
                },
                applyColorOnlyInDms: {
                    label: "Farbe nur in DMs anwenden",
                    description: "Wendet Farben nur in Direktnachrichten an; wendet keine Farben auf Servern an."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Speichert lokal alle Personen, mit denen du kommuniziert hast (einschließlich Server), für den Fall eines Verlusts.",
            section: {
                description: "Bietet eine Liste von Benutzern, die du erwähnt hast, denen du geantwortet hast, die Besitzer von Servern sind, denen du angehörst (Server-Besitzer*), oder Mitglieder deines Servers sind.",
                empty: "Die Liste ist momentan leer.",
                tooltip: "{{user}}, aktualisiert am {{updatedAtContent}}",
                owner: "Server-Besitzer",
                iRememberYou: "I Remember You"
            },
            context: {
                user: "Benutzeroptionen",
                copy: "Benutzer-ID kopieren",
                copyToast: "Benutzer-ID in die Zwischenablage kopiert",
                view: "Profil anzeigen"
            },
            modal: {
                title: "Editor",
                filter: "Filtern nach Tag, Benutzername, ID",
                button: {
                    validate: "Bestätigen und Speichern",
                    cancel: "Abbrechen",
                    openEditor: "Editor öffnen",
                    resetData: "Speicher zurücksetzen",
                    sure: "Bist du sicher?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Fügt Kontextmenü-Optionen hinzu, um zum Anfang oder Ende eines Kanals/DMs zu springen.",
            context: {
                top: "Zur ersten Nachricht springen",
                bottom: "Zur neuesten Nachricht springen",
                noMessages: "Keine Nachrichten von diesem Benutzer in diesem Kanal gefunden.",
                searchFailed: "Suche nach Nachrichten fehlgeschlagen."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Versucht, den Kanal beizubehalten, in dem du dich vor dem Kontowechsel oder dem Laden von Discord befunden hast."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Fügt OperaGX- oder osu!-Soundeffekte beim Tippen auf der Tastatur hinzu.",
            option: {
                volume: {
                    label: "Lautstärke",
                    description: "Lautstärke der Tastaturgeräusche"
                },
                soundPack: {
                    label: "Sound-Paket",
                    description: "Zu verwendendes Sound-Paket für die Tastaturgeräusche",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Sendet eine Benachrichtigung, wenn eine Nachricht bestimmten Schlüsselwörtern oder Regex-Ausdrücken entspricht.",
            idHolder: "ID",
            keywordEntry: "Schlüsselwort-Eintrag",
            regexHolder: "beispiel|regex",
            ignoreCase: "Groß-/Kleinschreibung ignorieren",
            whiteblackLabel: "Whitelist/Blacklist",
            tab: {
                title: "Schlüsselwörter",
                clearAll: "Alle löschen"
            },
            button: {
                addId: "ID hinzufügen",
                addKeyword: "Schlüsselwort-Eintrag hinzufügen"
            },
            listTypeSelector: {
                blacklist: "Blacklist",
                whitelist: "Whitelist",
                placeholder: "Listen-Typ auswählen"
            },
            option: {
                ignoreBots: {
                    label: "Bots ignorieren",
                    description: "Nachrichten von Bots ignorieren"
                },
                amountToKeep: {
                    label: "Anzahl zum Behalten",
                    description: "Anzahl der Nachrichten, die im Protokoll behalten werden sollen"
                },
                keywords: {
                    label: "Schlüsselwörter",
                    description: "Schlüsselwörter verwalten"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Fügt eine Anzeige für 'Zuletzt online' unter Benutzernamen in deiner DM-Liste sowie in Server- und Gruppen-Mitgliederlisten hinzu.",
            unit: {
                d: "Tag",
                h: "Stunde",
                m: "Minute"
            },
            online: "Online vor {{formattedTime}}"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Kleines Plugin für ListenBrainz Rich Presence (Statusanzeige).",
            about: {
                title: "Über MusicBrainz API",
                description: "Die MusicBrainz-API benötigt keinen API-Schlüssel, erfordert jedoch einen {{link}}. Für die meisten sollte eine E-Mail-Adresse ausreichen.",
                userAgent: "aussagekräftigen User-Agent-String"
            },
            option: {
                username: {
                    label: "Benutzername",
                    description: "ListenBrainz-Benutzername"
                },
                mbContact: {
                    label: "MB-Kontakt",
                    description: "ListenBrainz-Kontakt"
                },
                shareUsername: {
                    label: "Benutzername teilen",
                    description: "Link zum ListenBrainz-Profil anzeigen (möglicherweise nur für andere Benutzer sichtbar)"
                },
                shareSong: {
                    label: "Song teilen",
                    description: "Link zum aktuellen Song auf ListenBrainz anzeigen (möglicherweise nur für andere Benutzer sichtbar)"
                },
                hideWithSpotify: {
                    label: "Mit Spotify ausblenden",
                    description: "ListenBrainz-Präsenz ausblenden, wenn Spotify läuft"
                },
                hideWithActivity: {
                    label: "Mit Aktivität ausblenden",
                    description: "ListenBrainz-Präsenz ausblenden, wenn eine andere Aktivität vorhanden ist"
                },
                useTimeBar: {
                    label: "Zeitleiste verwenden",
                    description: "Track-Dauer verwenden, um eine Zeitleiste anzuzeigen (erfordert 'Hört gerade'-Status)"
                },
                statusName: {
                    label: "Status-Name",
                    description: "Benutzerdefinierter Statustext"
                },
                nameFormat: {
                    label: "Namensformat",
                    description: "Name des Songs und Künstlers im Status anzeigen",
                    custom: "Benutzerdefinierten Statusnamen verwenden",
                    artistSong: "Format 'Künstler - Song' verwenden",
                    songArtist: "Format 'Song - Künstler' verwenden",
                    artistOnly: "Nur Künstlernamen verwenden",
                    songOnly: "Nur Songnamen verwenden",
                    albumName: "Albumnamen verwenden (fällt auf benutzerdefinierten Text zurück, falls kein Album vorhanden)"
                },
                useListeningStatus: {
                    label: "Hört-gerade-Status verwenden",
                    description: "Zeige 'Hört gerade' anstelle von 'Spielt gerade'"
                },
                missingArt: {
                    label: "Fehlendes Cover",
                    description: "Wenn Album oder Cover fehlen",
                    listenbrainzLogo: "Großes ListenBrainz-Logo verwenden",
                    generic: "Generischen Platzhalter verwenden"
                },
                useLogo: {
                    label: "Logo verwenden",
                    description: "ListenBrainz-Logo auf dem Album-Cover anzeigen"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Ersetze Discords Lade-Zitate.",
            option: {
                replaceEvents: {
                    label: "Event-Zitate ersetzen",
                    description: "Soll dieses Plugin auch während Events mit speziellen Themen-Zitaten angewendet werden? (z.B. Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Plugin-Preset-Zitate aktivieren",
                    description: "Die von diesem Plugin vordefinierten Zitate aktivieren"
                },
                enableDiscordPresetQuotes: {
                    label: "Discord-Preset-Zitate aktivieren",
                    description: "Discords Standard-Zitate aktivieren (einschließlich Event-Zitate während Events)"
                },
                additionalQuotes: {
                    label: "Zusätzliche Zitate",
                    description: "Zusätzliche benutzerdefinierte Zitate, getrennt durch das unten stehende Trennzeichen"
                },
                additionalQuotesDelimiter: {
                    label: "Trennzeichen für zusätzliche Zitate",
                    description: "Trennzeichen für die Liste der zusätzlichen Zitate"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Ermöglicht das Anmelden auf einem anderen Gerät durch Scannen eines QR-Codes, genau wie in der mobilen App!",
            option: {
                scanQr: {
                    label: "QR-Code scannen",
                    description: "Einen QR-Code scannen",
                    notEnabled: "Aktiviere das Plugin und starte deinen Client neu, um einen Login-QR-Code zu scannen"
                }
            },
            neverScan: "Scanne niemals einen Login-QR-Code von einem anderen Benutzer oder einer Anwendung.",
            hold: "Gedrückt halten, um Login zu bestätigen",
            scanning: "Scanne...",
            stopScanning: "Scan stoppen",
            usingWebcam: "Mit Webcam scannen",
            dragDrop: "Bild hierher ziehen oder klicken, um ein Bild auszuwählen",
            orPaste: "Oder füge ein Bild aus deiner Zwischenablage ein!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Ermöglicht das Ändern der (Standard-)Wiedergabegeschwindigkeit von Medien-Einbettungen.",
            playbackSpeed: "Wiedergabegeschwindigkeit",
            context: {
                label: "Wiedergabesteuerung"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Standard-Geschwindigkeit für Sprachnachrichten",
                    description: "Sprachnachrichten"
                },
                defaultVideoSpeed: {
                    label: "Standard-Geschwindigkeit für Videos",
                    description: "Videos"
                },
                defaultAudioSpeed: {
                    label: "Standard-Geschwindigkeit für Audio",
                    description: "Audiodateien"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Zeigt die Anzahl der Online-Mitglieder, Gesamtmitglieder und Benutzer in Sprachkanälen an – in der Mitgliederliste und im Tooltip.",
            option: {
                toolTip: {
                    label: "Tooltip",
                    description: "Mitgliederanzahl im Server-Tooltip anzeigen"
                },
                memberList: {
                    label: "Mitgliederliste",
                    description: "Mitgliederanzahl in der Kopfzeile der Mitgliederliste anzeigen"
                },
                voiceActivity: {
                    label: "Sprachaktivität",
                    description: "Anzahl der Benutzer in Sprachkanälen anzeigen"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} online in diesem Kanal",
            totalMembers: "{{formattedTotalCount}} Servermitglieder insgesamt",
            totalVoice: "{{formattedVoiceCount}} Mitglieder im Sprachkanal"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Zeigt Benutzer-Avatare und Rollen-Icons innerhalb von Erwähnungen (@) an.",
            option: {
                showAtSymbol: {
                    label: "@-Symbol anzeigen",
                    description: "Gibt an, ob das @-Symbol bei Benutzererwähnungen angezeigt werden soll"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Fügt der Chatleiste einen Button hinzu, um 'Miauu' im Chat zu schreiben.",
            button: {
                meow: "Miau"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Fasst Nachrichten, die innerhalb eines kurzen Zeitraums gesendet werden, mit deiner vorherigen Nachricht zusammen, falls niemand dazwischen schreibt.",
            option: {
                timePeriod: {
                    label: "Zeitraum",
                    description: "Dauer der Zusammenfassung (in Sekunden)."
                },
                shouldMergeWithAttachment: {
                    label: "Mit Anhängen zusammenfügen",
                    description: "Soll die Nachricht zusammengefügt werden, wenn die letzte Nachricht einen Anhang enthält?"
                },
                useSpace: {
                    label: "Leerzeichen verwenden",
                    description: "Ob beim Zusammenfügen ein Leerzeichen anstelle eines Zeilenumbruchs verwendet werden soll."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Backspace halten und klicken zum Löschen, Doppelklick zum Bearbeiten/Antworten.",
            option: {
                singleClickAction: {
                    label: "Einzelklick-Aktion",
                    description: "Aktion bei Einzelklick (eigene Nachrichten)"
                },
                singleClickModifier: {
                    label: "Einzelklick-Modifikator",
                    description: "Erforderliche Taste für Einzelklick-Aktion (eigene Nachrichten)"
                },
                singleClickOthersAction: {
                    label: "Einzelklick-Aktion (Andere)",
                    description: "Aktion bei Einzelklick (Nachrichten anderer)"
                },
                singleClickOthersModifier: {
                    label: "Einzelklick-Modifikator (Andere)",
                    description: "Erforderliche Taste für Einzelklick-Aktion (Nachrichten anderer)"
                },
                doubleClickAction: {
                    label: "Doppelklick-Aktion",
                    description: "Aktion bei Doppelklick (eigene Nachrichten)"
                },
                doubleClickOthersAction: {
                    label: "Doppelklick-Aktion (Andere)",
                    description: "Aktion bei Doppelklick (Nachrichten anderer)"
                },
                doubleClickModifier: {
                    label: "Doppelklick-Modifikator",
                    description: "Erforderliche Taste für Doppelklick-Aktion"
                },
                tripleClickAction: {
                    label: "Dreifachklick-Aktion",
                    description: "Aktion bei Dreifachklick"
                },
                tripleClickModifier: {
                    label: "Dreifachklick-Modifikator",
                    description: "Erforderliche Taste für Dreifachklick-Aktion"
                },
                reactEmoji: {
                    label: "Reaktions-Emoji",
                    description: "Emoji, das für Reaktions-Aktionen verwendet werden soll"
                },
                addAdditionalReacts: {
                    label: "Zusätzliche Reaktionen hinzufügen",
                    description: "Fügt zusätzlich konfigurierte Reaktions-Emojis hinzu"
                },
                additionalReactEmojis: {
                    label: "Zusätzliche Reaktions-Emojis",
                    description: "Zusätzliche Emojis für die Reaktions-Aktion (getrennt durch Komma/Zeilenumbruch, max. {{count}})"
                },
                disableInDms: {
                    label: "In DMs deaktivieren",
                    description: "Deaktiviert alle Klick-Aktionen in Direktnachrichten"
                },
                disableInSystemDms: {
                    label: "In System-DMs deaktivieren",
                    description: "Deaktiviert alle Klick-Aktionen in System-DMs"
                },
                clickTimeout: {
                    label: "Klick-Zeitlimit",
                    description: "Zeitspanne zur Unterscheidung von Doppel-/Dreifachklicks (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Halteschwelle für Doppelklick",
                    description: "Maximale Haltedauer für Doppelklick-Aktionen (ms). Längeres Halten ermöglicht Textauswahl."
                },
                deferDoubleClickForTriple: {
                    label: "Doppelklick für Dreifachklick verzögern",
                    description: "Verzögert Doppelklick, um Dreifachklick-Aktionen zu ermöglichen (deaktiviert Dreifachklick, wenn aus)"
                },
                selectionHoldTimeout: {
                    label: "Timeout für Auswahl-Halt",
                    description: "Zeitspanne, um Textauswahl zu ermöglichen (ms)"
                },
                quoteWithReply: {
                    label: "Zitieren mit Antwort",
                    description: "Beim Zitieren auch auf die Nachricht antworten"
                },
                useSelectionForQuote: {
                    label: "Auswahl für Zitat verwenden",
                    description: "Verwendet beim Zitieren den markierten Text, falls vorhanden"
                }
            },
            actions: {
                none: "Keine",
                delete: "Löschen",
                copyLink: "Link kopieren",
                copyID: "ID kopieren",
                copyContent: "Inhalt kopieren",
                copyUserID: "Benutzer-ID kopieren",
                edit: "Bearbeiten",
                reply: "Antworten",
                react: "Reagieren",
                openThread: "Thread öffnen",
                openTab: "Tab öffnen",
                quote: "Zitieren",
                pin: "Anpinnen"
            },
            missingPermissions: {
                react: "Reaktion nicht möglich: Fehlende Berechtigungen",
                pin: "Anpinnen nicht möglich: Fehlende Berechtigungen",
            },
            cannotQuote: "Dieser Nachrichtentyp kann nicht zitiert werden",
            copy: {
                messageId: "Nachrichten-ID kopiert!",
                messageContent: "Nachrichteninhalt kopiert!",
                userId: "Benutzer-ID kopiert!"
            },
            linkCopied: "Link kopiert!"
        },
        messageColors: {
            name: "MessageColors",
            description: "Zeigt Farbcodes wie #FF0042 innerhalb von Nachrichten direkt als Farbe an.",
            option: {
                renderType: {
                    label: "Darstellungstyp",
                    description: "Wie Farben dargestellt werden sollen",
                    textColor: "Textfarbe",
                    block: "Block daneben",
                    backgroundColor: "Hintergrundfarbe"
                },
                enableShortHexCodes: {
                    label: "Kurze Hex-Codes aktivieren",
                    description: "Aktiviert 3-stellige Hex-Codes wie #39f"
                },
                blockView: {
                    label: "Block-Ansichtstyp",
                    description: "Wo der Farbblock angezeigt werden soll",
                    right: "Rechte Seite",
                    left: "Linke Seite",
                    both: "Beide Seiten"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Zeigt an, wie lange das Laden der Nachrichten für den aktuellen Kanal gedauert hat.",
            option: {
                showIcon: {
                    label: "Icon anzeigen",
                    description: "Icon für Ladezeit in der Nachrichtenleiste anzeigen"
                },
                showMs: {
                    label: "Millisekunden anzeigen",
                    description: "Millisekunden in der Zeitangabe anzeigen"
                },
                iconColor: {
                    label: "Icon-Farbe",
                    description: "Farbe des Icons (CSS-Farbwert)"
                }
            },
            loaded: "Nachrichten geladen in {{time}}ms ({{timeAgo}})",
            day: "vor {{s}} Tag(en)",
            hour: "vor {{s}} Stunde(n)",
            minute: "vor {{s}} Minute(n)",
            justNow: "gerade eben"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Zeigt einen Indikator für Nachrichten an, deren Senden ≥n Sekunden gedauert hat.",
            day: "Tag",
            days: "Tage",
            hour: "Stunde",
            hours: "Stunden",
            minute: "Minute",
            minutes: "Minuten",
            second: "Sekunde",
            seconds: "Sekunden",
            millisecond: "Millisekunde",
            milliseconds: "Millisekunden",
            and: "und",
            oldKotlinDetected: "Benutzer verwendet vermutlich einen alten Discord Android-Client.",
            ahead: "Die Uhr dieses Benutzers geht {{delta}} vor.",
            delay: "Diese Nachricht wurde mit einer Verzögerung von {{delta}} gesendet.",
            delayedMessage: "Verzögerte Nachricht",
            oldAndroidClient: "Alter Discord Android-Client",
            option: {
                latency: {
                    label: "Latenz",
                    description: "Schwellenwert in Sekunden für den Latenz-Indikator"
                },
                detectDiscordKotlin: {
                    label: "Discord Kotlin erkennen",
                    description: "Alte Discord Android-Clients erkennen"
                },
                showMillis: {
                    label: "Millisekunden anzeigen",
                    description: "Millisekunden anzeigen"
                },
                ignoreSelf: {
                    label: "Selbst ignorieren",
                    description: "Keinen Indikator bei eigenen Nachrichten anzeigen"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Fügt eine Vorschau zu Nachrichten hinzu, die eine andere Nachricht verlinken.",
            option: {
                messageBackgroundColor: {
                    label: "Nachrichten-Hintergrundfarbe",
                    description: "Hintergrundfarbe für Nachrichten in Rich-Embeds"
                },
                automodEmbeds: {
                    label: "AutoMod-Embeds",
                    description: "Verwende AutoMod-Embeds anstelle von Rich-Embeds (kleiner, aber weniger Infos)",
                    always: "Immer AutoMod-Embeds verwenden",
                    prefer: "AutoMod-Embeds bevorzugen, aber Rich-Embeds nutzen, wenn Inhalte fehlen",
                    never: "Niemals AutoMod-Embeds verwenden"
                },
                listMode: {
                    label: "Listen-Modus",
                    description: "ID-Liste als Blacklist oder Whitelist verwenden",
                    blacklist: "Blacklist",
                    whitelist: "Whitelist"
                },
                idList: {
                    label: "ID-Liste",
                    description: "Server/Kanal/Benutzer-IDs für Black-/Whitelist (mit Komma getrennt)"
                },
                clearMessageCache: {
                    label: "Nachrichten-Cache leeren",
                    description: "Cache der verlinkten Nachrichten leeren"
                }
            },
            noContent: {
                noAttachments: "Kein Inhalt, {{count}} Embed(s)",
                noEmbeds: "Kein Inhalt, {{count}} Anhang/Anhänge",
                both: "Kein Inhalt, {{attachments}} Anhang/Anhänge und {{embeds}} Embed(s)"
            },
            dm: "Direktnachricht",
            groupDm: "Gruppen-DM",
            server: "Server"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Fügt einen Tooltip mit Nachrichtenvorschau beim Hovern über Nachrichten-Links, Antworten und weitergeleitete Nachrichten hinzu.",
            loading: "Lädt...",
            option: {
                onLink: {
                    label: "Bei Links",
                    description: "Tooltip beim Hovern über Nachrichten-Links anzeigen"
                },
                onReply: {
                    label: "Bei Antworten",
                    description: "Tooltip beim Hovern über Antworten anzeigen"
                },
                onForward: {
                    label: "Bei Weiterleitungen",
                    description: "Tooltip beim Hovern über weitergeleitete Nachrichten anzeigen"
                },
                display: {
                    label: "Darstellung",
                    description: "Darstellungsstil",
                    auto: "Wie die Nachricht",
                    compact: "Kompakt",
                    cozy: "Gemütlich"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Protokolliert vorübergehend gelöschte und bearbeitete Nachrichten.",
            removeMessage: "Nachrichtenverlauf entfernen",
            removeMessageTemporary: "Nachricht entfernen (Temporär)",
            clearMessageLog: "Protokoll leeren",
            showDiff: "Unterschied anzeigen",
            modal: {
                edit: {
                    title: "Nachrichten-Verlauf",
                    tooltip: "Dieser Bearbeitungszustand wurde nicht protokolliert und kann nicht angezeigt werden."
                }
            },
            option: {
                deleteStyle: {
                    label: "Lösch-Stil",
                    description: "Stil der gelöschten Nachrichten",
                    text: "Roter Text",
                    overlay: "Rote Überlagerung"
                },
                logDeletes: {
                    label: "Löschungen protokollieren",
                    description: "Ob gelöschte Nachrichten protokolliert werden sollen"
                },
                collapseDeleted: {
                    label: "Gelöschte einklappen",
                    description: "Gelöschte Nachrichten einklappen (ähnlich wie blockierte Nachrichten)"
                },
                logEdits: {
                    label: "Bearbeitungen protokollieren",
                    description: "Ob bearbeitete Nachrichten protokolliert werden sollen"
                },
                inlineEdits: {
                    label: "Inline-Bearbeitungen",
                    description: "Bearbeitungsverlauf als Teil des Nachrichteninhalts anzeigen"
                },
                ignoreBots: {
                    label: "Bots ignorieren",
                    description: "Nachrichten von Bots ignorieren"
                },
                ignoreSelf: {
                    label: "Selbst ignorieren",
                    description: "Eigene Nachrichten ignorieren"
                },
                ignoreSelfEdits: {
                    label: "Eigene Bearbeitungen ignorieren",
                    description: "Ob eigene Bearbeitungen ignoriert werden sollen"
                },
                ignoreUsers: {
                    label: "Benutzer ignorieren",
                    description: "Liste der zu ignorierenden Benutzer-IDs (mit Komma getrennt)"
                },
                ignoreChannels: {
                    label: "Kanäle ignorieren",
                    description: "Liste der zu ignorierenden Kanal-IDs (mit Komma getrennt)"
                },
                ignoreGuilds: {
                    label: "Server ignorieren",
                    description: "Liste der zu ignorierenden Server-IDs (mit Komma getrennt)"
                },
                showEditDiffs: {
                    label: "Bearbeitungs-Unterschiede anzeigen",
                    description: "Visuelle Unterschiede zwischen bearbeiteten Versionen anzeigen"
                },
                separatedDiffs: {
                    label: "Getrennte Unterschiede",
                    description: "Hinzufügungen und Entfernungen für bessere Lesbarkeit getrennt anzeigen"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Erweitert das MessageLogger-Plugin um zusätzliche Funktionen.",
            updateImageCacheDir: "Bild-Cache-Verzeichnis erfolgreich aktualisiert.",
            updateLogsDir: "Protokoll-Verzeichnis erfolgreich aktualisiert.",
            failedUpdate: "Verzeichnisaktualisierung fehlgeschlagen.",
            blacklist: "Blacklist",
            whitelist: "Whitelist",
            failedToRemove: "Nachricht konnte nicht entfernt werden",
            successfullyImported: "Protokolle erfolgreich importiert",
            errorImportingLogs: "Fehler beim Importieren der Protokolle. Prüfe die Konsole für mehr Infos",
            importing: "Importiere...",
            importLogs: "Protokolle importieren",
            exporting: "Exportiere...",
            exportLogs: "Protokolle exportieren",
            alert: {
                clearLogs: {
                    title: "Protokolle leeren",
                    body: "Bist du sicher, dass du alle Protokolle löschen möchtest?",
                    confirmText: "Leeren",
                    cancel: "Abbrechen"
                },
                clearVisibleLogs: {
                    title: "Sichtbare Protokolle leeren",
                    body: "Bist du sicher, dass du {{messages}} Protokolle löschen möchtest?",
                    confirmText: "Leeren",
                    cancel: "Abbrechen"
                },
                cleared: "Nachrichtenprotokoll-Datenbank und Cache geleert."
            },
            context: {
                title: "Message Logger",
                jumpToMessage: "Zur Nachricht springen",
                openUserProfile: "Benutzerprofil öffnen",
                copyContent: "Inhalt kopieren",
                copyUserId: "Benutzer-ID kopieren",
                copyMessageId: "Nachrichten-ID kopieren",
                copyChannelId: "Kanal-ID kopieren",
                copyServerId: "Server-ID kopieren",
                deleteLog: "Eintrag löschen",
                fromUsernameDm: "Aus DMs von {{username}}",
                fromGroupDm: "Aus Gruppen-DM {{channelName}}",
                fromServerChannel: "Aus #{{channelName}} auf {{serverName}}",
                moveTypeTo: "{{type}} nach {{destination}} verschieben",
                removeTypeFrom: "{{type}} aus {{list}} entfernen",
                openLogsFor: "Protokolle für {{name}} öffnen",
                openLogs: "Protokolle öffnen",
                removeMessage: "Nachricht entfernen (Permanent)",
                removeMessageHistory: "Verlauf entfernen (Permanent)",
                deleteMessageHide: "Nachricht löschen (vor Loggern verstecken)",
                addServerToBlacklist: "Server zur Blacklist hinzufügen",
                addServerToWhitelist: "Server zur Whitelist hinzufügen",
                removeServerFromBlacklist: "Server von Blacklist entfernen",
                removeServerFromWhitelist: "Server von Whitelist entfernen",
                moveServerToBlacklist: "Server zur Blacklist verschieben",
                moveServerToWhitelist: "Server zur Whitelist verschieben",
                addUserToBlacklist: "Benutzer zur Blacklist hinzufügen",
                addUserToWhitelist: "Benutzer zur Whitelist hinzufügen",
                removeUserFromBlacklist: "Benutzer von Blacklist entfernen",
                removeUserFromWhitelist: "Benutzer von Whitelist entfernen",
                moveUserToBlacklist: "Benutzer zur Blacklist verschieben",
                moveUserToWhitelist: "Benutzer zur Whitelist verschieben",
                addChannelToBlacklist: "Kanal zur Blacklist hinzufügen",
                addChannelToWhitelist: "Kanal zur Whitelist hinzufügen",
                removeChannelFromBlacklist: "Kanal von Blacklist entfernen",
                removeChannelFromWhitelist: "Kanal von Whitelist entfernen",
                moveChannelToBlacklist: "Kanal zur Blacklist verschieben",
                moveChannelToWhitelist: "Kanal zur Whitelist verschieben"
            },
            type: {
                server: "Server",
                user: "Benutzer",
                channel: "Kanal"
            },
            button: {
                chooseFolder: "Ordner wählen",
                browse: "Durchsuchen",
                clearLogs: "Alle Protokolle leeren",
                clearVisibleLogs: "Sichtbare Protokolle leeren",
                sortOldest: "Älteste zuerst",
                sortNewest: "Neueste zuerst",
                loadMore: "Mehr laden",
                noResults: "Keine Ergebnisse in {{tab}}",
                tryOtherTabs: "Versuche {{nextTab}} oder {{lastTab}}",
                importLogs: "Protokolle importieren"
            },
            modal: {
                title: "Nachrichten filtern",
                deleted: "Gelöscht",
                edited: "Bearbeitet",
                ghostPing: "Ghost-Pings",
                empty: "Alles leer",
                importLogs: "ML Enhanced nutzt jetzt IndexedDB. Du musst deine alten Protokolle aus dem Protokollverzeichnis importieren. Bestehende Logs werden nicht überschrieben."
            },
            clear: {
                title: "Protokolle leeren",
                description: "Bist du sicher, dass du alle Protokolle löschen möchtest?",
                confirm: "Leeren",
                cancel: "Abbrechen"
            },
            option: {
                saveMessages: {
                    label: "Nachrichten speichern",
                    description: "Ob gelöschte und bearbeitete Nachrichten gespeichert werden sollen."
                },
                saveImages: {
                    label: "Bilder speichern",
                    description: "Gelöschte Anhänge speichern."
                },
                sortNewest: {
                    label: "Neueste zuerst sortieren",
                    description: "Protokolle nach Aktualität sortieren."
                },
                cacheMessagesFromServers: {
                    label: "Nachrichten von Servern cachen",
                    description: "Normalerweise werden nur Whitelist-IDs und DMs protokolliert. Dies aktiviert das Logging für alle Server. Achtung: Große Datenmengen möglich!"
                },
                ignoreBots: {
                    label: "Bots ignorieren",
                    description: "Nachrichten von Bots ignorieren"
                },
                ignoreWebhooks: {
                    label: "Webhooks ignorieren",
                    description: "Nachrichten von Webhooks ignorieren"
                },
                ignoreSelf: {
                    label: "Selbst ignorieren",
                    description: "Eigene Nachrichten ignorieren"
                },
                ignoreMutedGuilds: {
                    label: "Stummgeschaltete Server ignorieren",
                    description: "Nachrichten auf stummgeschalteten Servern werden nicht protokolliert (außer Whitelist)."
                },
                ignoreMutedCategories: {
                    label: "Stummgeschaltete Kategorien ignorieren",
                    description: "Nachrichten in stummgeschalteten Kategorien ignorieren."
                },
                ignoreMutedChannels: {
                    label: "Stummgeschaltete Kanäle ignorieren",
                    description: "Nachrichten in stummgeschalteten Kanälen ignorieren."
                },
                alwaysLogDirectMessages: {
                    label: "Direktnachrichten immer protokollieren",
                    description: "DMs immer aufzeichnen."
                },
                alwaysLogCurrentChannel: {
                    label: "Aktuellen Kanal immer protokollieren",
                    description: "Den aktuell ausgewählten Kanal immer aufzeichnen."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Logs standardmäßig permanent löschen",
                    description: "Der Lösch-Button entfernt Einträge dauerhaft aus der Datenbank."
                },
                hideMessageFromMessageLoggers: {
                    label: "Nachricht vor Loggern verstecken",
                    description: "Fügt einen Kontextmenü-Button hinzu, um Nachrichten 'spurlos' zu löschen. Nutzung auf eigene Gefahr."
                },
                showLogsButton: {
                    label: "Protokoll-Button anzeigen",
                    description: "Den Button in der Toolbox anzeigen oder nicht."
                },
                showWhereMessageIsFrom: {
                    label: "Herkunft der Nachricht anzeigen",
                    description: "Kanal-/Autorenname und Servername anzeigen."
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Nachrichten pro Seite im Protokoll",
                    description: "Anzahl der gleichzeitig angezeigten Nachrichten."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Platzhalter für versteckte Löschung",
                    description: "Inhalt, der angezeigt wird, wenn eine Nachricht vor Loggern versteckt wurde."
                },
                messageLimit: {
                    label: "Nachrichten-Limit",
                    description: "Maximale Anzahl gespeicherter Nachrichten (0 = unbegrenzt)."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Anhang-Größenlimit (MB)",
                    description: "Maximale Größe von zu speichernden Anhängen."
                },
                attachmentFileExtensions: {
                    label: "Anhang-Dateiendungen",
                    description: "Kommagetrennte Liste der zu speichernden Endungen (leer = alle)."
                },
                cacheLimit: {
                    label: "Cache-Limit",
                    description: "Maximale Anzahl Nachrichten im Cache."
                },
                timeBasedCleanupMinutes: {
                    label: "Intervall für automatische Reinigung (Minuten)",
                    description: "Wie oft alte Nachrichten über dem Limit gelöscht werden."
                },
                preserveCurrentChannel: {
                    label: "Aktuellen Kanal bewahren",
                    description: "Nachrichten im aktuellen Kanal werden nicht automatisch gereinigt."
                },
                whitelistedIds: {
                    label: "Whitelist-IDs",
                    description: "IDs von Servern, Kanälen oder Benutzern auf der Whitelist."
                },
                blacklistedIds: {
                    label: "Blacklist-IDs",
                    description: "IDs von Servern, Kanälen oder Benutzern auf der Blacklist."
                },
                imageCacheDir: {
                    label: "Bild-Cache-Verzeichnis",
                    description: "Ordner für gespeicherte Bilder wählen."
                },
                logsDir: {
                    label: "Protokoll-Verzeichnis",
                    description: "Ordner für Protokolle wählen."
                },
                importLogs: {
                    label: "Protokolle importieren",
                    description: "Protokolle aus einer Datei importieren."
                },
                exportLogs: {
                    label: "Protokolle exportieren",
                    description: "Protokolle aus der Datenbank exportieren."
                },
                clearLogsOnRestart: {
                    label: "Logs beim Neustart löschen",
                    description: "Löscht Logs beim Neustart von Discord."
                },
                openLogs: {
                    label: "Protokolle öffnen",
                    description: "Das Protokoll-Fenster öffnen."
                },
                openImageCacheFolder: {
                    label: "Bild-Cache-Ordner öffnen",
                    description: "Öffnet das Verzeichnis der gespeicherten Bilder."
                },
                clearLogs: {
                    label: "Protokolle leeren",
                    description: "Alle Protokolle löschen.",
                    title: "Protokolle leeren",
                    body: "Bist du sicher, dass du alle Protokolle löschen möchtest?",
                    confirmText: "Leeren",
                    cancel: "Abbrechen"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Erhalte Popups (Toasts), wenn ausgewählte Benutzer eine Nachricht senden.",
            dm: "deren DMs",
            option: {
                users: {
                    label: "Benutzer",
                    description: "Kommagetrennte Liste von Benutzer-IDs für Benachrichtigungen",
                    invalidId: "{{id}} ist keine gültige Benutzer-ID"
                }
            },
            notification: {
                title: "{{username}} hat eine Nachricht gesendet",
                body: "Klicken, um zu {{locationName}} zu springen"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Ermöglicht das Speichern von Nachrichten als Tags, um sie per Befehl schnell wiederzuverwenden.",
            notExist: "Der Tag **{{tagname}}** existiert nicht mehr! Bitte lade Discord neu.",
            alreadyExist: "Ein Tag mit dem Namen **{{tagname}}** existiert bereits!",
            sentTag: "Der Tag **{{tagname}}** wurde gesendet!",
            successCreate: "Der Tag **{{tagname}}** wurde erstellt!",
            allTags: "Alle deine Tags:",
            noTags: "Hoppla! Es gibt noch keine Tags. Nutze /tag create, um einen zu erstellen!",
            noDeleteTag: "Ein Tag namens **{{tagname}}** existiert nicht und kann nicht gelöscht werden!",
            successDelete: "Tag **{{name}}** erfolgreich gelöscht!",
            tagPreview: "Ein Tag namens **{{name}}** existiert nicht!",
            option: {
                clyde: {
                    label: "Clyde-Nachricht beim Senden",
                    description: "Clyde sendet dir eine private Nachricht, wenn ein Tag verwendet wurde."
                },
                tagsList: {
                    label: "Tag-Liste",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Verwalte deine eigenen Tags",
                    option: {
                        create: {
                            description: "Einen neuen Tag erstellen",
                            name: "Name des Tags zum Auslösen",
                            message: "Nachricht, die gesendet werden soll"
                        },
                        list: {
                            description: "Alle deine Tags auflisten"
                        },
                        delete: {
                            description: "Einen Tag entfernen",
                            name: "Name des zu löschenden Tags"
                        },
                        preview: {
                            description: "Vorschau eines Tags (nur für dich sichtbar)",
                            name: "Name des Tags für die Vorschau"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Fügt ein Icon für einen Mikrofon-Test (Loopback) zum Benutzer-Panel hinzu.",
            button: "Mikrofon-Test"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Verschiedene Optimierungen für den Mittelklick, z. B. beim Einfügen oder Öffnen von Links.",
            option: {
                openScope: {
                    label: "Öffnungs-Bereich",
                    description: "Verhindert, dass Mittelklick diese Inhalte öffnet.",
                    links: "Links",
                    media: "Medien",
                    linksAndMedia: "Links und Medien",
                    none: "Keine"
                },
                pasteScope: {
                    label: "Einfüge-Bereich",
                    description: "Verhindert das Einfügen per Mittelklick in diesen Situationen.",
                    always: "Einfügen per Mittelklick immer verhindern",
                    focus: "Nur verhindern, wenn Textfeld nicht fokussiert ist",
                },
                pasteThreshold: {
                    label: "Einfüge-Schwelle",
                    description: "Millisekunden, bis das Einfügen nach einem Mittelklick wieder erlaubt ist."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock und mehr.",
            command: {
                echo: {
                    description: "Sendet eine Nachricht als Clyde (lokal)"
                },
                lenny: {
                    description: "Sendet ein Lenny-Gesicht ( ͡° ͜ʖ ͡°)"
                },
                mock: {
                    description: "mOcK pEoPlE (Texte verspotten)"
                },
                wordcount: {
                    description: "Zählt die Wörter in einer Nachricht",
                    response: "Die Nachricht enthält {{count}} Wörter."
                },
                flipcoin: {
                    description: "Wirft eine Münze (Kopf oder Zahl)",
                    heads: "Kopf",
                    tails: "Zahl",
                    response: "Die Münze ist auf {{result}} gelandet."
                },
                ask: {
                    description: "Stelle eine Ja/Nein-Frage und erhalte eine Antwort",
                    yes: "Ja",
                    no: "Nein",
                    maybe: "Vielleicht",
                    askAgain: "Frag später noch mal",
                    definitelyNot: "Definitiv nicht",
                    itIsCertain: "Es ist sicher"
                },
                randomanimal: {
                    description: "Zeigt ein zufälliges Tierbild",
                    animal: "Wähle dein Tier",
                    cat: "Katze",
                    dog: "Hund",
                    response: "Bild konnte leider nicht geladen werden."
                },
                randomnumber: {
                    description: "Generiert eine Zufallszahl zwischen zwei Werten",
                    min: "Minimum",
                    max: "Maximum",
                    response: "Zufallszahl zwischen {{min}} und {{max}}: {{number}}"
                },
                choose: {
                    description: "Wählt zufällig aus den angegebenen Optionen",
                    option: "Kommagetrennte Liste von Auswahlmöglichkeiten",
                    response: "Ich wähle: {{choice}}"
                },
                systeminfo: {
                    description: "Zeigt Systeminformationen an",
                    platform: "Plattform",
                    deviceType: "Gerätetyp",
                    mobile: "Mobil",
                    desktop: "Desktop",
                    browser: "Browser",
                    cpuCores: "CPU-Kerne",
                    memory: "Arbeitsspeicher",
                    screen: "Bildschirm",
                    languages: "Sprachen",
                    network: "Netzwerk",
                    online: "Online",
                    offline: "Offline",
                    failedToFetch: "Systeminfos konnten nicht geladen werden",
                    unknown: "Unbekannt"
                },
                getuptime: {
                    description: "Zeigt die Laufzeit des Clients an",
                    response: "**Client-Laufzeit**: {{uptime}} Minuten"
                },
                gettime: {
                    description: "Zeigt die aktuelle Zeit an",
                    response: "Aktuelle Zeit: {{time}}"
                },
                transform: {
                    description: "Transformiert deinen Text mit der gewählten Option",
                    transformation: {
                        description: "Art der Transformation",
                        lowercase: "In Kleinbuchstaben umwandeln",
                        uppercase: "In Großbuchstaben umwandeln",
                        localeLowercase: "In lokale Kleinbuchstaben umwandeln",
                        localeUppercase: "In lokale Großbuchstaben umwandeln",
                        same: "Gleich bleiben"
                    },
                    repeat: "Wie oft wiederholen",
                    reverse: "Text umdrehen",
                    normalize: {
                        description: "Text-Normalisierung",
                        nfc: "NFC",
                        nfd: "NFD",
                        nfkc: "NFKC",
                        nfkd: "NFKD"
                    },
                    text: "Diesen Text transformieren"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Fügt Discord mehr Kaomojis hinzu. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Verbessert die Schnell-Reaktions-Buttons im Nachrichten-Kontextmenü.",
            option: {
                reactionCount: {
                    label: "Anzahl der Reaktionen",
                    description: "Anzahl der Reaktionen (0-42)"
                },
                frequentEmojis: {
                    label: "Häufige Emojis",
                    description: "Häufig verwendete Emojis anstelle von Favoriten verwenden"
                },
                rows: {
                    label: "Zeilen",
                    description: "Anzahl der anzuzeigenden Zeilen"
                },
                columns: {
                    label: "Spalten",
                    description: "Anzahl der anzuzeigenden Spalten"
                },
                compactMode: {
                    label: "Kompakt-Modus",
                    description: "Skaliert Buttons auf 75% und Emojis auf 125%. Empfohlen bei mindestens 5 Spalten."
                },
                scroll: {
                    label: "Scrollen",
                    description: "Scrollen in der Emoji-Liste aktivieren"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Fügt Tags für Webhooks und Moderator-Rollen hinzu (Besitzer, Admin, etc.).",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Dieser Benutzer ist ein Webhook"
                },
                owner: {
                    name: "Besitzer",
                    description: "Besitzt diesen Server"
                },
                admin: {
                    name: "Admin",
                    description: "Hat Administrator-Berechtigungen"
                },
                staff: {
                    name: "Personal",
                    description: "Kann Server, Kanäle oder Rollen verwalten"
                },
                mod: {
                    name: "Mod",
                    description: "Kann Nachrichten verwalten oder Mitglieder kicken/bannen"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "Kann Sprachkanäle verwalten"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "Kann Nachrichten verwalten"
                }
            },
            modal: {
                example: "Beispiel",
                tag: "Tag",
                customTextPlaceholder: "Text auf dem Tag (Standard: {{displayName}})",
                messages: "In Nachrichten anzeigen",
                memberList: "In Mitgliederliste und Profilen anzeigen"
            },
            option: {
                dontShowForBots: {
                    label: "Nicht bei Bots anzeigen",
                    description: "Keine extra Tags bei Bots anzeigen (außer Webhooks)"
                },
                dontShowBotTag: {
                    label: "Bot-Tag ausblenden",
                    description: "Nur extra Tags bei Bots anzeigen / [APP]-Text verstecken"
                },
                showWebhookTagFully: {
                    label: "Webhook-Tag vollständig anzeigen",
                    description: "Webhook-Tag in gefolgten Kanälen (z.B. Ankündigungen) anzeigen"
                },
                tagSettings: {
                    label: "Tag-Einstellungen",
                    description: "Einstellungen für die Tags"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Ein Slash-Befehl zum Übersetzen von/in Morsecode.",
            command: {
                morse: {
                    description: "In oder aus Morsecode übersetzen",
                    message: "Zu konvertierender Text"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Lautstärke",
                    description: "Lautstärke der 🗿🗿🗿"
                },
                quality: {
                    label: "Qualität",
                    description: "Qualität der 🗿🗿🗿",
                    normal: "Normal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Im Hintergrund auslösen",
                    description: "Das 🗿 auch auslösen, wenn das Fenster nicht fokussiert ist"
                },
                ignoreBots: {
                    label: "Bots ignorieren",
                    description: "Nachrichten von Bots ignorieren"
                },
                ignoreBlocked: {
                    label: "Blockierte Benutzer ignorieren",
                    description: "Nachrichten von blockierten Benutzern ignorieren"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Musiksteuerung und Songtexte für mehrere Dienste.",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Spotify-Steuerung anzeigen",
                    description: "Musiksteuerung für Spotify anzeigen"
                },
                showSpotifyLyrics: {
                    label: "Spotify-Songtexte anzeigen",
                    description: "Songtexte für Spotify anzeigen"
                },
                useSpotifyUris: {
                    label: "Spotify-URIs verwenden",
                    description: "Spotify-URIs anstelle von URLs öffnen (erfordert installierte Spotify-App)"
                },
                previousButtonRestartsTrack: {
                    label: "Zurück-Button startet Track neu",
                    description: "Startet den aktuellen Track neu, wenn er länger als 3s läuft"
                },
                tidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Tidal-Steuerung anzeigen",
                    description: "Musiksteuerung für Tidal anzeigen"
                },
                showTidalLyrics: {
                    label: "Tidal-Songtexte anzeigen",
                    description: "Songtexte für Tidal anzeigen"
                },
                websocketURL: {
                    label: "Websocket-URL",
                    description: "Standardwert ist ws://localhost:24123"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "{{app}} ist für diese Einstellungen erforderlich"
                },
                showYoutubeMusicControls: {
                    label: "YouTube Music-Steuerung anzeigen",
                    description: "Musiksteuerung für YouTube Music anzeigen"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube Music API URL",
                    description: "Die URL für den YouTube Music API Server"
                },
                hoverControls: {
                    label: "Hover-Steuerung",
                    description: "Steuerung nur beim Drüberfahren anzeigen"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Musiknote bei fehlenden Lyrics",
                    description: "Icon anzeigen, wenn keine Songtexte gefunden wurden"
                },
                lyricsPosition: {
                    label: "Position der Lyrics",
                    description: "Position des Songtext-Panels",
                    above: "Über dem Player",
                    below: "Unter dem Player"
                },
                lyricsProvider: {
                    label: "Songtext-Anbieter",
                    description: "Woher die Songtexte geladen werden",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "Spotify Lyrics API-URL",
                    description: "Spotify Lyrics API Basis-URL."
                },
                translateTo: {
                    label: "Übersetzen in",
                    description: "Songtexte übersetzen in - Ändern löscht bestehende Übersetzungen",
                    cleared: "Übersetzung gelöscht"
                },
                lyricsConversion: {
                    label: "Songtext-Konvertierung",
                    description: "Songtexte automatisch übersetzen oder romanisieren (Umschrift)",
                    none: "Keine",
                    translate: "Übersetzen",
                    romanize: "Romanisieren"
                },
                fallbackProvider: {
                    label: "Ausweich-Anbieter",
                    description: "Andere Anbieter versuchen, wenn einer fehlschlägt"
                },
                showFailedToasts: {
                    label: "Fehlermeldungen anzeigen",
                    description: "Benachrichtigung zeigen, wenn Lyrics nicht geladen werden konnten"
                },
                purgeLyricsCache: {
                    label: "Songtext-Cache leeren",
                    description: "Alle zwischengespeicherten Lyrics und Übersetzungen löschen",
                    button: "Cache leeren",
                    cacheLyricsPurged: "Songtext-Cache geleert"
                }
            },
            context: {
                spotify: {
                    label: "Spotify Songtext-Menü",
                    type: "Spotify {{type}}-Menü",
                    copy: "{{type}}-Namen kopieren",
                    link: "{{type}}-Link kopieren",
                    open: "{{type}} in Spotify öffnen",
                    album: "Spotify Album-Menü"
                },
                tidal: {
                    label: "Tidal Songtext-Menü",
                    lyrics: "Tidal Songtexte",
                    type: "Tidal {{name}}-Menü",
                    copy: "{{name}}-Namen kopieren",
                    open: "{{name}} in Tidal öffnen",
                    album: "Tidal Album-Menü"
                },
                ytm: {
                    type: "YouTube Music {{name}}-Menü",
                    copy: "{{name}}-Namen kopieren",
                    open: "{{name}} in YouTube Music öffnen",
                    album: "YouTube Music Album-Menü",
                    muted: "Stummgeschaltet"
                },
                lyrics: {
                    provider: "Anbieter",
                    saved: "gespeichert",
                    notFound: "Keine synchronisierten Lyrics gefunden"
                },
                copy: {
                    currentLyrics: "Aktuelle Lyrics kopieren"
                }
            },
            alert: {
                lyricCopied: "Songtext in Zwischenablage kopiert!",
                noLyrics: "Keine Lyrics",
                noLyricsTo: "Keine Lyrics zum {{translated}} vorhanden",
                translate: "Übersetzen",
                romanize: "Romanisieren",
                lyricsFetchFailed: "Laden der Lyrics fehlgeschlagen",
                failedToFetchLyrics: "Laden von {{translated}} fehlgeschlagen",
                translation: "Übersetzung",
                romanization: "Romanisierung",
                failedToFetchTranslation: "Laden der {{translated}}-Lyrics fehlgeschlagen"
            },
            modal: {
                install: {
                    title: "Installation",
                    install: "Installiere {{link}} hier, dann in den TidalLuna-Einstellungen → Plugin Stores → @vmohammad/api installieren",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Kein Titel wird abgespielt",
                    artist: "Künstler:",
                    album: "Album:",
                    noLyrics: "Keine Lyrics verfügbar :(",
                    progress: "Fortschritt",
                    totalDuration: "Gesamtdauer"
                },
                type: {
                    song: "Song",
                    artist: "Künstler",
                    album: "Album"
                },
                album: {
                    open: "Album öffnen",
                    viewCover: "Album-Cover anzeigen",
                    volume: "Lautstärke",
                    image: "Album-Bild"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Übersetzt",
                romanized: "Romanisiert",
                none: "Keine"
            },
            error: {
                failed: "Modal konnte nicht gerendert werden :(",
                checkConsole: "Prüfe die Konsole auf Fehler",
                invalidUrlCustomApi: "Ungültiges URL-Format für Custom API Server"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Zeigt gemeinsame Gruppen-DMs in Profilen an.",
            no: "Keine gemeinsamen Gruppen",
            mutualGroup: "{{count}} gemeinsame Gruppe(n)",
            members: "Mitglieder",
            noGroup: "Keine gemeinsamen Gruppen-DMs",
            header: "Gemeinsame Gruppen"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Verhindert, dass Vorschauen in Anrufen oder PiP (Bildschirmfreigaben, Streams usw.) pausiert werden, selbst wenn der Client den Fokus verliert.",
            about: "Dieses Plugin führt dazu, dass Discord mehr Ressourcen als gewöhnlich verbraucht."
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Schaltet neue Server automatisch stumm und passt verschiedene andere Einstellungen sofort beim Beitritt an.",
            context: {
                apply: "NewGuildSettings anwenden"
            },
            option: {
                guild: {
                    label: "Server stummschalten",
                    description: "Server automatisch stummschalten"
                },
                messages: {
                    label: "Server-Benachrichtigungseinstellungen",
                    description: "Server-Benachrichtigungseinstellungen",
                    all: "Alle Nachrichten",
                    mentions: "Nur @Erwähnungen",
                    nothing: "Nichts",
                    default: "Server-Standard"
                },
                everyone: {
                    label: "@everyone und @here unterdrücken",
                    description: "@everyone und @here unterdrücken"
                },
                role: {
                    label: "Alle Rollen-@Erwähnungen unterdrücken",
                    description: "Alle Rollen-@Erwähnungen unterdrücken"
                },
                highlights: {
                    label: "Highlights unterdrücken",
                    description: "Highlights automatisch unterdrücken"
                },
                events: {
                    label: "Neue Events stummschalten",
                    description: "Neue Events automatisch stummschalten"
                },
                showAllChannels: {
                    label: "Alle Kanäle anzeigen",
                    description: "Alle Kanäle automatisch anzeigen"
                },
                mobilePush: {
                    label: "Mobile Push-Benachrichtigungen stummschalten",
                    description: "Mobile Push-Benachrichtigungen automatisch stummschalten"
                },
                voiceChannels: {
                    label: "Sprachkanäle",
                    description: "Namen in Sprachkanälen automatisch ausblenden"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Hilfsprogramm, das dich benachrichtigt, wenn Plexcord neue Plugins hinzugefügt werden.",
            modal: {
                title: "Neue Plugins und Einstellungen",
                description: "Seit deinem letzten Besuch wurden neue Plugins und Einstellungen hinzugefügt. Bitte überprüfe die Neuerungen unten.",
                tooltip: "Für diese Sitzung schließen",
                dontShowAgain: "Nicht erneut anzeigen",
                restartRequired: "Neustart erforderlich, um Änderungen zu übernehmen",
                restart: "Neustart",
                continue: "Fortfahren"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Setzt das Bot-Tag wieder in seine ursprüngliche Form zurück."
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Blendet alle blockierten/ignorierten Nachrichten vollständig aus dem Chat aus.",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Auch ignorierte Benutzer ausblenden",
                    description: "Blendet auch Nachrichten von ignorierten Benutzern aus."
                },
                disableNotifications: {
                    label: "Benachrichtigungen deaktivieren",
                    description: "Blendet Benachrichtigungen für neue Nachrichten von blockierten Benutzern aus. Immer aktiv, wenn 'Benutzer standardmäßig ausblenden' aktiviert ist und der Benutzer nicht in der Ausnahmeliste steht."
                },
                allowAutoModMessages: {
                    label: "AutoMod-Nachrichten zulassen",
                    description: "Erlaubt Nachrichten von AutoMod, die Filterung zu umgehen."
                },
                hideBlockedUserReplies: {
                    label: "Antworten blockierter Benutzer ausblenden",
                    description: "Blendet Nachrichten von blockierten Benutzern in Threads aus, wenn du an dem Thread teilgenommen hast."
                },
                defaultHideUsers: {
                    label: "Benutzer standardmäßig ausblenden",
                    description: "Wenn aktiviert, werden Nachrichten von blockierten Benutzern komplett versteckt und IDs in der Ausnahmeliste nur eingeklappt (Discord-Standard). Wenn deaktiviert, ist es umgekehrt."
                },
                overrideUsers: {
                    label: "Ausnahmeliste (Benutzer)",
                    description: "Kommagetrennte Liste von Benutzer-IDs, die entgegen dem oben gewählten Standardverhalten behandelt werden."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Verhindert, dass du Markdown-Aufzählungspunkte tippst (nervig)."
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Deaktiviert Discords redundante Deep-Linking-Funktion, die versucht, dich zur Nutzung der Desktop-App zu zwingen."
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Entfernt die Pflicht, den Servernamen einzugeben, wenn man einen Server löscht.",
            option: {
                confirmModal: {
                    label: "Bestätigungsfenster",
                    description: "Soll dennoch ein 'Bist du sicher?'-Fenster angezeigt werden?"
                }
            },
            modal: {
                title: "Server löschen?",
                body: "Das ist permanent – falls das nicht offensichtlich war.",
                confirm: "Löschen",
                cancel: "Abbrechen"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Deaktiviert das 'HALT STOP'-Banner in der Konsole. Verhindert als Nebeneffekt auch, dass Discord dein Token versteckt, was zufällige Logouts verhindert."
        },
        noF1: {
            name: "NoF1",
            description: "Deaktiviert die Hilfe-Funktion auf der F1-Taste."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Das Einfügen eines Links bei markiertem Text erstellt keine maskierte URL (Markdown-Link)."
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Verhindert, dass die Kamera auf deinem eigenen Bildschirm gespiegelt wird."
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Entfernt die 300ms lange Animation beim Öffnen oder Schließen von Fenstern (Modals)."
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Entfernt das Discord-Bildermosaik bei mehreren Bildern.",
            option: {
                inlineVideo: {
                    label: "Inline-Video",
                    description: "Videos ohne das Karussell-Fenster abspielen"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Entfernt ALLE Nitro-Werbeeinblendungen, indem dem Client vorgekaukelt wird, du hättest Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Umgeht Discords Onboarding-Prozess für schnelleren Server-Beitritt."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Überspringt die langsame und nervige Onboarding-Verzögerung."
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Entfernt die Anzeige ausstehender Freundesanfragen, Nachrichtenanfragen und Nitro-Angebote.",
            option: {
                hideFriendRequestsCount: {
                    label: "Zähler für Freundesanfragen ausblenden",
                    description: "Blendet die Anzahl eingehender Freundesanfragen aus"
                },
                hideMessageRequestsCount: {
                    label: "Zähler für Nachrichtenanfragen ausblenden",
                    description: "Blendet die Anzahl der Nachrichtenanfragen aus"
                },
                hidePremiumOffersCount: {
                    label: "Zähler für Premium-Angebote ausblenden",
                    description: "Blendet die Anzahl der Nitro-Angebote aus"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Entfernt Nitro-Profil-Designs bei allen Benutzern außer dir selbst vollständig."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Umgeht die Push-to-Talk-Pflicht in Kanälen, die diese erzwingen."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Deaktiviert Antwort-Pings standardmäßig.",
            option: {
                userList: {
                    label: "Benutzerliste",
                    description: "Liste von Benutzern, für die Pings erlaubt oder ausgenommen sind (getrennt durch Komma oder Leerzeichen)"
                },
                roleList: {
                    label: "Rollenliste",
                    description: "Liste von Rollen, für die Pings erlaubt oder ausgenommen sind (getrennt durch Komma oder Leerzeichen)"
                },
                shouldPingListed: {
                    label: "Verhalten für Liste",
                    description: "Verhalten",
                    dontPing: "Die gelisteten Benutzer / Rollen nicht pingen",
                    onlyPing: "Nur die gelisteten Benutzer / Rollen pingen"
                },
                inverseShiftReply: {
                    label: "Inverses Shift-Antworten",
                    description: "Invertiert Discords Shift-Antwort-Verhalten (aktivieren, damit Shift + Antwort den Benutzer erwähnt)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Entfernt 'canary' oder 'ptb' aus Nachrichten-Links."
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Wir sind alle gleich! Entfernt die Rollen-Überschriften in der Mitgliederliste."
        },
        noRPC: {
            name: "NoRPC",
            description: "Deaktiviert Discord Rich Presence vollständig."
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Zeigt keine Server-Emojis im Autovervollständigungs-Menü an.",
            option: {
                shownEmojis: {
                    label: "Angezeigte Emojis",
                    description: "Wähle, welche Emojis im Autovervollständigungs-Menü erscheinen sollen",
                    onlyUnicode: "Nur Unicode-Emojis",
                    currentServer: "Unicode-Emojis und Emojis vom aktuellen Server",
                    all: "Unicode-Emojis und alle Server-Emojis (Discord-Standard)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Deaktiviert den Zähler für ungelesene Nachrichten in der Taskleiste und im System-Tray."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Macht Desktop-Benachrichtigungen informativer."
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Legt eine benutzerdefinierte Lautstärke für Discord-Benachrichtigungen fest.",
            option: {
                notificationVolume: {
                    label: "Benachrichtigungslautstärke",
                    description: "Lautstärke der Benachrichtigungen"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Deaktiviert die Tipp-Animation im Chat."
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Ermöglicht es, zu Nachrichten von blockierten, ignorierten Benutzern oder mutmaßlichen Spammern zu springen, ohne diese entblocken zu müssen."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Wenn ein Benutzer mehrere ungelesene Nachrichten in DMs sendet, erhältst du nur einen einzigen akustischen Ping.",
            option: {
                channelToAffect: {
                    label: "Betroffene Kanäle",
                    description: "Wähle den DM-Typ aus, auf den sich das Plugin auswirken soll",
                    both: "Beide",
                    user: "Benutzer-DMs",
                    group: "Gruppen-DMs"
                },
                allowMentions: {
                    label: "Erwähnungen zulassen",
                    description: "Akustische Pings für @mentions erhalten"
                },
                allowEveryone: {
                    label: "@everyone zulassen",
                    description: "Akustische Pings für @everyone und @here in Gruppen-DMs erhalten"
                },
                ignoreUsers: {
                    label: "Benutzer ignorieren",
                    description: "Benutzer-IDs (Komma + Leerzeichen), deren Pings NIEMALS gedrosselt werden sollten"
                },
                alwaysPlaySound: {
                    label: "Ton immer abspielen",
                    description: "Den Benachrichtigungston auch dann abspielen, wenn er deaktiviert ist"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Öffnet Links in ihren jeweiligen Apps anstatt im Browser",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Spotify-Links in der Spotify-App öffnen"
                },
                steam: {
                    label: "Steam",
                    description: "Steam-Links in der Steam-App öffnen"
                },
                epic: {
                    label: "Epic Games",
                    description: "Epic-Games-Links im Epic Games Launcher öffnen"
                },
                tidal: {
                    label: "Tidal",
                    description: "Tidal-Links in der Tidal-App öffnen"
                },
                itunes: {
                    label: "iTunes",
                    description: "Apple Music-Links in iTunes öffnen"
                },
                vrcx: {
                    label: "VRChat",
                    description: "VRChat-Links in der VRCX-App öffnen"
                }
            },
            notification: {
                open: "Link in nativer App geöffnet"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Ermöglicht das Überschreiben des Standard-Layouts/Sortierung in Foren. Kann weiterhin pro Kanal geändert werden.",
            option: {
                defaultLayout: {
                    label: "Standard-Layout",
                    description: "Welches Layout standardmäßig verwendet werden soll",
                    list: "Liste",
                    gallery: "Galerie"
                },
                defaultSortOrder: {
                    label: "Standard-Sortierung",
                    description: "Welche Sortierreihenfolge standardmäßig verwendet werden soll",
                    recentlyActive: "Kürzlich aktiv",
                    datePosted: "Erstellungsdatum"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Ermöglicht die Nutzung des Party-Modus, denn die Party endet nie ✨",
            option: {
                superIntensePartyMode: {
                    label: "Super-Intensiv Party-Modus",
                    description: "Party-Intensität",
                    normal: "Normal",
                    better: "Besser",
                    projectX: "Project X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Bringt die Option zurück, Einladungen dauerhaft zu pausieren, die von Discord entfernt wurde.",
            pauseIndefinitely: "Dauerhaft pausieren"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Deaktiviert die clientseitigen Einschränkungen bei der Verwaltung von Kanalberechtigungen.",
            option: {
                lockout: {
                    label: "Aussperrschutz umgehen",
                    description: "Umgeht die Sperre für Berechtigungen, die dich selbst aussperren könnten ('Bist du sicher, dass du das tun willst?')"
                },
                onboarding: {
                    label: "Onboarding umgehen",
                    description: "Umgeht Onboarding-Anforderungen ('Diese Änderung macht deinen Server inkompatibel [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Zeigt die Berechtigungen eines Benutzers oder Kanals sowie die Rollen eines Servers an",
            view: "Berechtigungen anzeigen",
            option: {
                permissionsSortOrder: {
                    label: "Sortierung der Berechtigungen",
                    description: "Sortiermethode, um zu definieren, welche Rolle einem Benutzer eine bestimmte Berechtigung gewährt",
                    highest: "Höchste Rolle",
                    lowest: "Niedrigste Rolle"
                }
            },
            icon: {
                denied: "Verweigert",
                allowed: "Erlaubt",
                notOverwritten: "Nicht überschrieben"
            },
            context: {
                permissions: "Berechtigungen"
            },
            modal: {
                title: "Berechtigungen",
                noPermissions: "Keine Berechtigungen zum Anzeigen vorhanden!",
                owner: "Besitzer",
                grantedBy: "Gewährt durch",
                serverOwner: "Serverbesitzer",
                ownerRole: "Besitzer",
                sortingBy: "Sortiert nach {{method}}",
                highest: "Höchste Rolle",
                lowest: "Niedrigste Rolle",
                details: "Rollendetails"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Fügt den /petpet Befehl hinzu, um 'Headpet' GIFs aus einem beliebigen Bild zu erstellen",
            command: {
                petpet: {
                    description: "Erstellt ein Petpet-GIF. Wähle nur eine der Bild-Optionen aus.",
                    delay: "Verzögerung zwischen den Frames. Standard ist 20.",
                    resolution: "Auflösung des GIFs. Standard ist 120. Wenn Discord einfriert, weil du eine zu hohe Zahl wählst, ist das deine Schuld.",
                    image: "Bildanhang verwenden",
                    url: "URL des Bildes",
                    user: "Avatar eines Benutzers verwenden",
                    noServerPfp: "Normalen Avatar anstatt des server-spezifischen verwenden (bei der 'user' Option)",
                    error: {
                        noImage: "Kein Bild angegeben!",
                        delayTooLow: "Die Verzögerung muss mindestens 20 betragen.",
                    }
                }
            },
            error: {
                uploadNotImage: "Der Upload ist kein Bild",
                fetchUserFailed: "Benutzer konnte nicht geladen werden. Prüfe die Konsole für Infos.",
                fetchImageFailed: "Fehler beim Laden von {{url}}. Prüfe die Konsole für Infos."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Fügt Videos eine Bild-im-Bild-Funktion hinzu (neben dem Download-Button)",
            tooltip: "Bild-im-Bild umschalten",
            option: {
                loop: {
                    label: "Dauerschleife",
                    description: "Gibt an, ob das PiP-Video in Dauerschleife laufen soll"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Ermöglicht das Anheften von DMs an den Anfang der Liste. Rechtsklick auf DMs zum Anheften oder Sortieren.",
            context: {
                category: {
                    label: "Pin-DMs Kategorien-Menü",
                    edit: "Kategorie bearbeiten",
                    up: "Nach oben verschieben",
                    down: "Nach unten verschieben",
                    delete: "Kategorie löschen",
                    unnamed: "unbenannt"
                },
                pin: {
                    label: "DM anheften",
                    addCategory: "Kategorie hinzufügen"
                },
                unPin: {
                    label: "DM lösen",
                    move: "In Kategorie verschieben"
                }
            },
            option: {
                pinOrder: {
                    label: "Reihenfolge",
                    description: "In welcher Reihenfolge sollen angeheftete DMs angezeigt werden?",
                    lastMessage: "Neueste Nachricht",
                    custom: "Benutzerdefiniert (Kanäle per Rechtsklick sortieren)"
                },
                canCollapseDmSection: {
                    label: "Einklappbarer Pin-Bereich",
                    description: "Erlaubt das Einklappen des Bereichs für nicht kategorisierte DMs"
                },
                dmSectionCollapsed: {
                    label: "DM-Bereich eingeklappt",
                    description: "DM-Bereich einklappen"
                },
                userBasedCategoryList: {
                    label: "Benutzerbasierte Kategorieliste",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Kategorie anheften",
                    edit: "Kategorie bearbeiten",
                    new: "Neue Kategorie",
                    name: "Name",
                    color: "Farbe",
                    save: "Speichern",
                    create: "Erstellen"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Anpassbare Benachrichtigungen mit verbesserter Formatierung für Erwähnungen",
            option: {
                friends: {
                    label: "Freunde",
                    description: "Benachrichtigen, wenn Freunde Nachrichten auf Servern senden"
                },
                mentions: {
                    label: "Erwähnungen",
                    description: "Benachrichtigen, wenn dich jemand direkt @erwähnt"
                },
                dms: {
                    label: "DMs",
                    description: "Benachrichtigungen für Direktnachrichten (DMs)"
                },
                showInActive: {
                    label: "Im aktiven Kanal anzeigen",
                    description: "Benachrichtigungen auch für den aktuell aktiven Kanal anzeigen"
                },
                ignoreMuted: {
                    label: "Stummgeschaltete ignorieren",
                    description: "Benachrichtigungen von stummgeschalteten Servern, Kanälen oder Benutzern überspringen"
                }
            },
            unknown: "Unbekannt",
            dm: "DM",
            groupDM: "Gruppen-DM",
            title: "{{username}} in {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Fügt angehefteten Nachrichten ein Pin-Symbol hinzu"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Zeigt keine kleinen Server-Icons in den Ordnern an"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Fügt Plattform-Indikatoren (Desktop, Mobil, Web...) bei Benutzern hinzu",
            embeddedTooltip: "Konsole",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Liste",
                    description: "Indikatoren in der Mitgliederliste anzeigen"
                },
                badges: {
                    label: "Badges",
                    description: "Indikatoren in Benutzerprofilen als Badges anzeigen"
                },
                messages: {
                    label: "Nachrichten",
                    description: "Indikatoren innerhalb von Nachrichten anzeigen"
                },
                colorMobileIndicator: {
                    label: "Mobilen Indikator einfärben",
                    description: "Gibt an, ob der mobile Indikator der Farbe des Benutzerstatus entsprechen soll"
                },
                showBots: {
                    label: "Bots anzeigen",
                    description: "Gibt an, ob Plattform-Indikatoren auch bei Bots angezeigt werden sollen"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Täusche vor, auf welcher Plattform oder welchem Gerät du dich befindest",
            about: "Wir können nicht garantieren, dass dieses Plugin nicht zu einer Warnung oder Sperre führt.",
            platform: {
                desktop: "Discord Client",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord Embedded",
                playstation: "Discord Embedded",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Plattform",
                    description: "Als welche Plattform du angezeigt werden möchtest",
                    desktop: "Desktop",
                    web: "Web",
                    android: "Android",
                    ios: "iOS",
                    xbox: "Xbox",
                    playstation: "PlayStation",
                    vr: "VR"
                }
            }
        },
        plexcordToolbox: {
            name: "PlexcordToolbox",
            description: "Fügt der AppBar einen Button für Plexcord-Schnellaktionen hinzu",
            tooltip: "Plexcord Toolbox",
            context: {
                openLog: "Benachrichtigungsprotokoll öffnen",
                enableQuickCSS: "QuickCSS aktivieren",
                openQuickCSS: "QuickCSS bearbeiten",
                openSettings: "Einstellungen öffnen",
                manageThemes: "Themes verwalten"
            },
            option: {
                showPluginMenu: {
                    label: "Plugin-Menü anzeigen",
                    description: "Zeigt das Plugin-Menü in der Plexcord Toolbox an"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Optimiert deine Nachrichten für eine schönere Optik und bessere Grammatik. Siehe Einstellungen.",
            option: {
                quickDisable: {
                    label: "Schnell-Deaktivierung",
                    description: "Deaktiviert die Nachrichtenmodifizierung ohne Client-Neustart."
                },
                blockedWords: {
                    label: "Blockierte Wörter",
                    description: "Wörter, die nicht großgeschrieben werden (mit Komma getrennt)."
                },
                fixApostrophes: {
                    label: "Apostrophe korrigieren",
                    description: "Stellt sicher, dass Kurzformen Apostrophe enthalten."
                },
                expandContractions: {
                    label: "Kurzformen ausschreiben",
                    description: "Erweitert Kurzformen (z.B. 'don't' zu 'do not')"
                },
                fixCapitalization: {
                    label: "Großschreibung korrigieren",
                    description: "Satzanfänge großschreiben."
                },
                fixPunctuation: {
                    label: "Interpunktion korrigieren",
                    description: "Abstände um Satzzeichen korrigieren."
                },
                fixPunctuationFrequency: {
                    label: "Häufigkeit der Interpunktion",
                    description: "Prozentuale Häufigkeit für Punkte am Satzende (nervt manche Leute extrem)."
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Ermöglicht eine Vorschau der Nachricht vor dem Absenden.",
            tooltip: "Nachrichtenvorschau"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Ermöglicht das Speichern und Laden verschiedener Profil-Presets über den Profil-Bereich in den Einstellungen.",
            toast: {
                importFailed: "Profil-Sets konnten nicht importiert werden. Die Datei ist möglicherweise ungültig.",
            },
            option: {
                avatarSize: {
                    label: "Avatar-Größe",
                    description: "Größe des Avatars in der Preset-Liste"
                }
            },
            modal: {
                override: "Überschreiben",
                merge: "Zusammenführen",
                cancel: "Abbrechen",
                timestamp: "{{formattedDate}} um {{formattedTime}}",
                rename: "Umbenennen",
                update: "Aktualisieren",
                moveUp: "Nach oben",
                moveDown: "Nach unten",
                moveTo: "Auf Seite 1 verschieben",
                delete: "Löschen",
                importProfiles: "Profile importieren",
                importText: "Du hast {{existingCount}} bestehende Profile. Möchtest du diese überschreiben oder mit den importierten Profilen zusammenführen?",
                heading: "Gespeicherte Profile",
                searchProfiles: "Profile suchen...",
                profileName: "Profilname",
                saving: "Speichert...",
                save: "Profil speichern",
                cancelSearch: "Suche abbrechen",
                search: "Suche",
                random: "Zufällig",
                import: "Importieren",
                exportAll: "Alle exportieren"
            }
        },
        questify: {
            name: "Questify",
            description: "Verbessere dein Quest-Erlebnis mit einer Reihe von Funktionen oder deaktiviere sie vollständig, wenn sie nicht dein Ding sind.",
            quests: "Quests",
            context: {
                quest: {
                    label: "Quest-Button-Menü",
                    ignore: "Alle als ignoriert markieren",
                    reset: "Ignorierliste zurücksetzen",
                    fetch: "Quests abrufen",
                    markAsIgnored: "Als ignoriert markieren",
                    unmarkAsIgnored: "Ignorierung aufheben",
                    stopAuto: "Auto-Vervollständigung stoppen",
                    copyQuestID: "Quest-ID kopieren",
                    startAuto: "Auto-Vervollständigung starten"
                }
            },
            settings: {
                questButton: {
                    title: "Quest-Button",
                    description: "Zeigt einen Quest-Button in der Serverliste mit einem optionalen Indikator für nicht beanspruchte Quests.",
                    leftClick: "Aktion bei Linksklick",
                    middleClick: "Aktion bei Mittelklick",
                    rightClick: "Aktion bei Rechtsklick",
                    visibility: "Sichtbarkeit des Buttons",
                    unclaimedIndicator: "Indikator für nicht Beanspruchtes",
                    badgeColor: "Badge-Farbe",
                    rewardDisplay: "Belohnungsanzeige",
                    includedRewardTypes: "Enthaltene Belohnungstypen",
                    includedRewardTypesDesc: "Nur Quests mit diesen Belohnungstypen als nicht beansprucht zählen, wenn die Button-Sichtbarkeit, die Badge-Anzahl und der Benachrichtigungston bestimmt werden.",
                    selectRewardTypes: "Wähle aus, welche Belohnungstypen in die Zählung einfließen sollen...",
                    noRewardType: "Es gibt keine unterstützte Quest-Funktion mit diesem Namen.",
                    default: "Standard",
                    disable: "Deaktivieren"
                },
                questFeatures: {
                    title: "Quest-Funktionen",
                    description: "Spezifische Quest-Funktionen ändern.",
                    popupWarning: "Die Option {{disablePopup}} wird für abgeschlossene Quests und die Quest-Fortschrittsverfolgung ignoriert.",
                    videoQuestInfo: "Die Option {{completeVideo}} wartet die Dauer der Video-Quest ab und markiert sie automatisch als abgeschlossen.",
                    gameQuestInfo: "Ebenso wartet die Option {{completeGame}} die Dauer der Spiel-Quest ab und markiert sie automatisch als abgeschlossen. Diese Option wird nur im offiziellen Desktop-Client unterstützt.",
                    manualStartWarning: "Du musst die Quests weiterhin manuell starten. Der erste Klick startet die Quest im Hintergrund. Bei Video-Quests öffnen nachfolgende Klicks das Video-Fenster wie gewohnt. Um die Quests abzubrechen, kannst du das Kontextmenü auf der Quest-Kachel öffnen und {{stopAuto}} wählen.",
                    tosWarning: "Die Verwendung dieser Optionen verstößt gegen die Nutzungsbedingungen von Discord. Verwendung auf eigene Gefahr.",
                    selectFeatures: "Wähle aus, welche Quest-Funktionen geändert werden sollen.",
                    disablePopup: "Quest-Popup über dem Account-Panel deaktivieren",
                    completeVideo: "Video-Quests im Hintergrund abschließen",
                    completeGame: "Spiel-Quests im Hintergrund abschließen",
                    stopAuto: "Auto-Vervollständigung stoppen"
                },
                restyleQuests: {
                    title: "Quests umgestalten",
                    description: "Quests zur besseren Sichtbarkeit mit optionalen Themenfarben hervorheben.",
                    precedenceNote: "Stile für beanspruchte und abgelaufene Quests haben Vorrang, selbst wenn eine Quest ignoriert wird.",
                    gradientStyle: "Verlaufsstil",
                    assetPreload: "Vorladen von Inhalten (Assets)",
                    unclaimed: "Nicht beansprucht",
                    claimed: "Beansprucht",
                    ignored: "Ignoriert",
                    expired: "Abgelaufen",
                    intenseGradient: "Intensiver Umgestaltungs-Verlauf",
                    defaultGradient: "Standard Umgestaltungs-Verlauf",
                    blackGradient: "Dezenter schwarzer Verlauf",
                    noGradient: "Kein Verlauf",
                    loadAllAssets: "Alle Quest-Assets beim Seitenladen laden",
                    loadDuringScroll: "Quest-Assets während des Scrollens laden"
                },
                reorderQuests: {
                    title: "Quests neu ordnen",
                    description: "Sortiert Quests nach ihrem Status. Wird angewendet, wenn die Sortieroption \"Questify\" auf der Quest-Seite ausgewählt ist.",
                    formatNote: "Die kommagetrennte Liste muss alle enthalten: {{items}}.",
                    placeholder: "Du musst UNCLAIMED, CLAIMED, IGNORED, EXPIRED einschließen",
                    invalidFormat: "Ungültiges Format.",
                    unclaimedSubsort: "Unter-Sortierung: Nicht beansprucht",
                    claimedSubsort: "Unter-Sortierung: Beansprucht",
                    ignoredSubsort: "Unter-Sortierung: Ignoriert",
                    expiredSubsort: "Unter-Sortierung: Abgelaufen",
                    addedNewest: "Hinzugefügt (Neueste)",
                    addedOldest: "Hinzugefügt (Älteste)",
                    expiredRecent: "Abgelaufen (Kürzlich)",
                    expiredLeast: "Abgelaufen (Am längsten her)",
                    expiringSoon: "Läuft aus (Bald)",
                    expiringLate: "Läuft aus (Zuletzt)",
                    claimedRecent: "Beansprucht (Kürzlich)",
                    claimedLeast: "Beansprucht (Am längsten her)",
                    ignoredQuestProfile: "Profil für ignorierte Quests",
                    sharedProfile: "Gemeinsam: Alle Accounts auf diesem Client teilen sich die Ignorierungen.",
                    privateProfile: "Privat: Alle Accounts auf diesem Client haben separate Ignorierungen.",
                    rememberSort: "Sortierung merken",
                    rememberFilter: "Filterung merken",
                    yes: "Ja",
                    no: "Nein",
                    rememberNote: "Diese Sortier- und Filterwahl bezieht sich auf die eingebauten Optionen auf der Quest-Seite. Die oben stehende benutzerdefinierte Sortierung wird nur angewendet, wenn \"Questify\" als Sortieroption gewählt wurde. Wenn das Merken deaktiviert ist, werden die Optionen bei jedem Öffnen der Seite zurückgesetzt."
                },
                fetchingQuests: {
                    title: "Quests abrufen",
                    description: "Konfiguriere, wie oft Quests von Discord abgerufen werden sollen, und richte Benachrichtigungen für neue Quests ein.",
                    defaultBehavior: "Standardmäßig ruft Discord Quests nur beim Laden und beim Besuch der Quest-Seite ab. Das bedeutet, dass dieses Plugin ohne ein unten definiertes Abruf-Intervall neue Quests, die über den Tag hinzugefügt werden, nicht bemerkt.",
                    requirement: "Dies setzt voraus, dass der Quest-Button aktiviert ist und entweder auf {{unclaimed}} oder auf {{always}} mit aktivierten {{pill}}, {{badge}} oder {{both}} Indikatoren eingestellt ist. Andernfalls gibt es keinen Grund, Quests periodisch abzurufen.",
                    blockWarning: "Wenn zudem {{fetchingQuests}} in den {{questFeatures}}-Einstellungen blockiert ist, wird dies nicht funktionieren.",
                    fetchInterval: "Abruf-Intervall",
                    alertSound: "Benachrichtigungston",
                    intervalPlaceholder: "Wähle oder tippe ein Intervall zwischen 30 Minuten und 12 Stunden.",
                    intervalFeedback: "Intervalle müssen zwischen 30 Minuten und 12 Stunden liegen.",
                    soundPlaceholder: "Wähle einen Ton aus oder gib eine benutzerdefinierte Sound-URL an.",
                    soundFeedback: "Ton nicht gefunden oder die URL stammt nicht von einer unterstützten Domain.",
                    disabled: "Deaktiviert",
                    minutes: "Minuten",
                    minute: "Minute",
                    hours: "Stunden",
                    hour: "Stunde",
                    thirtyMinutes: "30 Minuten",
                    oneHour: "1 Stunde",
                    threeHours: "3 Stunden",
                    sixHours: "6 Stunden",
                    twelveHours: "12 Stunden",
                    customSound: "BENUTZERDEFINIERTER TON"
                },
                disableOptions: {
                    everything: "Alles deaktivieren",
                    discovery: "Entdecken-Tab deaktivieren",
                    dms: "Quests-Tab in DMs deaktivieren",
                    fetching: "Abrufen von Quests deaktivieren",
                    popup: "Popup über Account-Panel deaktivieren",
                    sponsored: "Gesponsertes Banner auf Quest-Seite deaktivieren",
                    badge: "Badge auf Benutzerprofilen deaktivieren",
                    inventory: "Hinweis zum Umzug des Geschenkinventars deaktivieren",
                    friendsList: "Promotion in der Freundesliste (Gerade aktiv)",
                    membersList: "Icons in Mitgliederliste (Gerade am Spielen)",
                    gameQuests: "Spiel-/Aktivitäts-Quests im Hintergrund abschließen",
                    videoQuests: "Video-Quests im Hintergrund abschließen",
                    achievementQuests: "Aufgaben in Aktivitäts-Quests im Hintergrund abschließen",
                    mobileDesktop: "Mobile Quests Desktop-kompatibel machen",
                    notifyOnComplete: "Bei Quest-Abschluss benachrichtigen"
                },
                options: {
                    always: "Immer",
                    unclaimed: "Nicht beansprucht",
                    never: "Nie",
                    pill: "Pille (Pill)",
                    badge: "Badge",
                    both: "Beide",
                    none: "Keine",
                    openQuests: "Quests öffnen",
                    contextMenu: "Kontextmenü",
                    pluginSettings: "Plugin-Einstellungen",
                    nothing: "Nichts",
                    orbs: "Orbs",
                    nitroCodes: "Nitro-Codes",
                    rewardCodes: "Belohnungs-Codes",
                    inGameItems: "In-Game Gegenstände",
                    profileCollectibles: "Profil-Sammlerstücke"
                }
            },
            option: {
                disableQuests: {
                    label: "Quests deaktivieren",
                    description: "Wähle aus, welche Quest-Funktionen deaktiviert werden sollen."
                },
                disableQuestsEverything: {
                    label: "Alles deaktivieren",
                    description: "Alle Quest-Funktionen deaktivieren."
                },
                disableQuestsFetchingQuests: {
                    label: "Abrufen von Quests deaktivieren",
                    description: "Deaktiviert das Abrufen von Quests von Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Quests-Tab in DMs deaktivieren",
                    description: "Deaktiviert den Quest-Tab auf der Direktnachrichten-Seite."
                },
                disableQuestsDiscoveryTab: {
                    label: "Entdecken-Tab deaktivieren",
                    description: "Deaktiviert den Quest-Tab auf der Entdecken-Seite."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Gesponsertes Banner auf Quest-Seite deaktivieren",
                    description: "Deaktiviert das gesponserte Banner auf der Quest-Seite."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Popup über Account-Panel deaktivieren",
                    description: "Deaktiviert das Quest-Popup über deinem Account-Panel."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Badge auf Benutzerprofilen deaktivieren",
                    description: "Deaktiviert das Quest-Badge auf Benutzerprofilen."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Hinweis zum Umzug des Geschenkinventars deaktivieren",
                    description: "Deaktiviert den Hinweis zum Umzug des Geschenkinventars für Quests."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Promotion in der Freundesliste deaktivieren",
                    description: "Deaktiviert die Anzeige von Quests für Spiele, die Freunde gerade spielen."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Icons in Mitgliederliste deaktivieren",
                    description: "Deaktiviert die 'Gerade am Spielen'-Icons in der Mitgliederliste."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Mobile Quests Desktop-kompatibel machen",
                    description: "Macht mobile-exklusive Quests mit dem Desktop kompatibel."
                },
                completeVideoQuestsInBackground: {
                    label: "Video-Quests im Hintergrund abschließen",
                    description: "Schließt Video-Quests im Hintergrund ab, nachdem die Videodauer abgelaufen ist."
                },
                completeGameQuestsInBackground: {
                    label: "Spiel-Quests im Hintergrund abschließen",
                    description: "Schließt Spiel-Quests im Hintergrund ab, nachdem die Spieldauer abgelaufen ist."
                },
                completeAchievementQuestsInBackground: {
                    label: "Aufgaben in Aktivitäts-Quests im Hintergrund abschließen",
                    description: "Schließt Aufgaben (Achievements) in Aktivitäts-Quests im Hintergrund ab."
                },
                notifyOnQuestComplete: {
                    label: "Bei Quest-Abschluss benachrichtigen",
                    description: "Zeigt eine Benachrichtigung an, wenn eine Quest automatisch abgeschlossen wurde."
                },
                questButton: {
                    label: "Quest-Button",
                    description: "Zeigt einen Quest-Button in der Serverliste."
                },
                questButtonDisplay: {
                    label: "Anzeige des Quest-Buttons",
                    description: "Welcher Anzeigetyp für den Quest-Button in der Serverliste verwendet werden soll."
                },
                questRewardIncludeRewardCode: {
                    label: "Belohnungs-Codes einschließen",
                    description: "Schließt Quests mit Belohnungs-Codes bei der Anzeige der Quest-Anzahl ein."
                },
                questRewardIncludeNitroCode: {
                    label: "Nitro-Codes einschließen",
                    description: "Schließt Quests mit Nitro-Codes bei der Anzeige der Quest-Anzahl ein."
                },
                questRewardIncludeInGame: {
                    label: "In-Game Belohnungen einschließen",
                    description: "Schließt Quests mit In-Game Belohnungen bei der Anzeige der Quest-Anzahl ein."
                },
                questRewardIncludeCollectibles: {
                    label: "Sammlerstücke einschließen",
                    description: "Schließt Quests mit Profil-Sammlerstücken bei der Anzeige der Quest-Anzahl ein."
                },
                questRewardIncludeOrbs: {
                    label: "Orbs einschließen",
                    description: "Schließt Quests mit Orbs bei der Anzeige der Quest-Anzahl ein."
                },
                questButtonUnclaimed: {
                    label: "Indikator für nicht beanspruchte Quests",
                    description: "Welcher Anzeigetyp für den Indikator für nicht beanspruchte Quests verwendet werden soll."
                },
                questButtonBadgeColor: {
                    label: "Badge-Farbe des Quest-Buttons",
                    description: "Die Farbe des Badges auf dem Quest-Button in der Serverliste."
                },
                questButtonLeftClickAction: {
                    label: "Aktion bei Linksklick",
                    description: "Aktion beim Linksklick auf den Quest-Button."
                },
                questButtonMiddleClickAction: {
                    label: "Aktion bei Mittelklick",
                    description: "Aktion beim Mittelklick auf den Quest-Button."
                },
                questButtonRightClickAction: {
                    label: "Aktion bei Rechtsklick",
                    description: "Aktion beim Rechtsklick auf den Quest-Button."
                },
                fetchingQuests: {
                    label: "Quests abrufen",
                    description: "Quests von Discord abrufen."
                },
                fetchingQuestsInterval: {
                    label: "Abruf-Intervall",
                    description: "Das Intervall in Sekunden zum Abrufen von Quests."
                },
                fetchingQuestsAlert: {
                    label: "Abruf-Benachrichtigungston",
                    description: "Der Ton, der abgespielt wird, wenn neue Quests erkannt werden."
                },
                fetchingQuestsAlertVolume: {
                    label: "Lautstärke des Benachrichtigungstons",
                    description: "Die Lautstärke des Tons bei neuen Quests."
                },
                restyleQuests: {
                    label: "Quests umgestalten",
                    description: "Passe das Erscheinungsbild der Quest-Kacheln auf der Quest-Seite an."
                },
                restyleQuestsUnclaimed: {
                    label: "Farbe: Nicht beansprucht",
                    description: "Farbe für nicht beanspruchte Quest-Kacheln."
                },
                restyleQuestsClaimed: {
                    label: "Farbe: Beansprucht",
                    description: "Farbe für beanspruchte Quest-Kacheln."
                },
                restyleQuestsIgnored: {
                    label: "Farbe: Ignoriert",
                    description: "Farbe für ignorierte Quest-Kacheln."
                },
                restyleQuestsExpired: {
                    label: "Farbe: Abgelaufen",
                    description: "Farbe für abgelaufene Quest-Kacheln."
                },
                restyleQuestsGradient: {
                    label: "Verlauf der Umgestaltung",
                    description: "Stil des Verlaufs auf den Quest-Kacheln."
                },
                restyleQuestsPreload: {
                    label: "Inhalte vorladen",
                    description: "Versucht, die Assets für die Quest-Kacheln vorab zu laden."
                },
                reorderQuests: {
                    label: "Quests neu ordnen",
                    description: "Sortiert Quests nach Status. Leer lassen für Standardsortierung. Die Liste muss enthalten: UNCLAIMED, CLAIMED, IGNORED, EXPIRED."
                },
                unclaimedSubsort: {
                    label: "Unter-Sortierung: Nicht beansprucht",
                    description: "Sortiermethode innerhalb der nicht beanspruchten Quests."
                },
                claimedSubsort: {
                    label: "Unter-Sortierung: Beansprucht",
                    description: "Sortiermethode innerhalb der beanspruchten Quests."
                },
                ignoredSubsort: {
                    label: "Unter-Sortierung: Ignoriert",
                    description: "Sortiermethode innerhalb der ignorierten Quests."
                },
                expiredSubsort: {
                    label: "Unter-Sortierung: Abgelaufen",
                    description: "Sortiermethode innerhalb der abgelaufenen Quests."
                },
                unclaimedUnignoredQuests: {
                    label: "Nicht beanspruchte/ignorierte Quests",
                    description: "Verfolgt die Anzahl der nicht beanspruchten und nicht ignorierten Quests."
                },
                onQuestsPage: {
                    label: "Auf der Quest-Seite",
                    description: "Gibt an, ob sich der Benutzer gerade auf der Quest-Seite befindet."
                },
                triggerQuestsRerender: {
                    label: "Neu-Rendern der Quests erzwingen",
                    description: "Erzwingt ein Neu-Rendern der Quest-Seite durch Umschalten dieser Einstellung."
                },
                ignoredQuestProfile: {
                    label: "Profil für ignorierte Quests",
                    description: "Das für ignorierte Quests verwendete Profil."
                },
                rememberQuestPageSort: {
                    label: "Quest-Seitensortierung merken",
                    description: "Merkt sich die zuletzt verwendete Sortierung auf der Quest-Seite."
                },
                rememberQuestPageFilters: {
                    label: "Quest-Seitenfilter merken",
                    description: "Merkt sich die zuletzt verwendeten Filter auf der Quest-Seite."
                },
                lastQuestPageSort: {
                    label: "Letzte Quest-Seitensortierung",
                    description: "Speichert die zuletzt genutzte Sortierung."
                },
                lastQuestPageFilters: {
                    label: "Letzte Quest-Seitenfilter",
                    description: "Speichert die zuletzt genutzten Filter."
                },
                ignoredQuestIDs: {
                    label: "Ignorierte Quest-IDs",
                    description: "Ein Array mit den IDs der ignorierten Quests."
                },
                resumeQuestIDs: {
                    label: "Quest-IDs fortsetzen",
                    description: "Ein Array mit Quest-IDs, deren Auto-Vervollständigung im Hintergrund läuft."
                }
            },
            button: {
                questInProgressWithTime: "Wird abgeschlossen ({{remainTime}})",
                completing: "Wird abgeschlossen",
                resume: "Fortsetzen (~{{remainTime}})",
                complete: "Abschließen {{remainTime}}",
                completeImmediate: "Abschließen (Sofort)",
                completed: "Abgeschlossen"
            },
            reward: {
                orbs: "{{completingText}} für {{orbQuantity}} Orbs.",
                article: "{{completingText}} für {{itemName}}.",
                unrecognized: "{{completingText}} für einen nicht erkannten Belohnungstyp."
            },
            notification: {
                completed: {
                    title: "Quest abgeschlossen",
                    body: "Die Quest {{questName}} wurde erfolgreich abgeschlossen."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Ersetzt alle Fragezeichen durch eine gewählte Zeichenfolge, wenn die Nachricht nur aus Fragezeichen besteht.",
            option: {
                replace: {
                    label: "Ersetzen",
                    description: "Ersetzen durch"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Fügt der Nachrichten-Aktionsleiste einen Button für schnelle Erwähnungen hinzu.",
            tooltip: "Schnelle Erwähnung"
        },
        quickReply: {
            name: "QuickReply",
            description: "Antworten (Strg+Auf/Ab) und Bearbeiten (Strg+Umschalt+Auf/Ab) von Nachrichten über Tastenkombinationen.",
            option: {
                shouldMention: {
                    label: "Erwähnen (Ping)",
                    description: "Ping bei Antwort standardmäßig aktivieren.",
                    noReplyMentionPlugin: "Folge dem NoReplyMention-Plugin (falls aktiviert)",
                    enabled: "Aktiviert",
                    disabled: "Deaktiviert"
                },
                ignoreBlockedAndIgnored: {
                    label: "Blockierte und Ignorierte ignorieren",
                    description: "Ignoriert Nachrichten von blockierten/ignorierten Benutzern beim Navigieren."
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Schneller Wechsel zwischen Themes mittels Tastenkombinationen.",
            about: {
                title: "Tastenbelegungen",
                description: "Nutze Strg/Cmd+Umschalt+Pfeiltasten zum Navigieren (Links/Rechts: Themes durchlaufen, Auf: Aktivieren, Ab: Deaktivieren).",
                reload: "Drücke Strg/Cmd+Umschalt+Alt, um die Theme-Liste neu zu laden."
            },
            modal: {
                added: "{{count}} Theme(s) hinzugefügt",
                removed: "{{count}} Theme(s) entfernt",
                reloaded: "{{themeCount}} Themes neu geladen",
                addedLocal: "{{count}} lokale(s) Theme(s) hinzugefügt",
                removedLocal: "{{count}} lokale(s) Theme(s) entfernt",
            },
            option: {
                includeLocal: {
                    label: "Lokale einbeziehen",
                    description: "Lokale Themes einbeziehen."
                },
                includeOnline: {
                    label: "Online einbeziehen",
                    description: "Online-Themes einbeziehen."
                },
                sortOrder: {
                    label: "Sortierreihenfolge",
                    description: "Sortiermethode",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Kürzlich"
                },
                autoRefresh: {
                    label: "Autom. Aktualisierung",
                    description: "Theme-Liste automatisch aktualisieren, wenn Änderungen erkannt werden."
                },
                showNotifications: {
                    label: "Benachrichtigungen anzeigen",
                    description: "Benachrichtigungen anzeigen, wenn Themes hinzugefügt oder entfernt werden."
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Ermöglicht es, ein inspirierendes Zitat-Bild aus einer Nachricht zu erstellen.",
            context: {
                quote: "Zitieren"
            },
            modal: {
                title: "In 4k erwischt",
                grayscale: "Graustufen",
                export: "Exportieren",
                send: "Senden",
                saveAsGIF: "Als GIF speichern",
                saveDescription: "Speichert/Sendet das Bild als GIF anstelle einer PNG-Datei.",
                showWatermark: "Wasserzeichen anzeigen",
                watermarkText: "Wasserzeichen-Text (max. 32 Zeichen)"
            },
            option: {
                quoteFont: {
                    label: "Zitat-Schriftart",
                    description: "Schriftart für den Zitat-Text (Autor/Benutzername verwenden immer M PLUS Rounded 1c).",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Wasserzeichen",
                    description: "Benutzerdefinierter Wasserzeichen-Text (max. 32 Zeichen)."
                },
                grayscale: {
                    label: "Graustufen",
                    description: "Graustufen standardmäßig aktivieren."
                },
                showWatermark: {
                    label: "Wasserzeichen anzeigen",
                    description: "Wasserzeichen standardmäßig anzeigen."
                },
                saveAsGif: {
                    label: "Als GIF speichern",
                    description: "Standardmäßig als GIF speichern."
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Fügt einen Button neben dem Stummschalt-Button hinzu, um einem zufälligen Sprachanruf beizutreten.",
            tooltip: "Zufälliger Voice-Chat",
            context: {
                label: "Sprachstatus-Modifikator",
                amountLabel: "BENUTZER-ANZAHL",
                spacesLabel: "FREIE PLÄTZE",
                voiceLabel: "SPRACH-LIMIT",
                selfLabel: "EIGENE EINSTELLUNGEN",
                select: {
                    servers: "Server auswählen",
                    list: "Liste auswählen",
                    filters: "Filter auswählen",
                    amount: "Benutzeranzahl",
                    userAmount: "{{amount}} Benutzer",
                    parameters: "Parameter",
                    selectAll: "Alle auswählen",
                    reset: "Zurücksetzen",
                    stateFilters: "Zustandsfilter",
                    moreThan: "Mehr als",
                    lessThan: "Weniger als",
                    equalTo: "Gleich",
                    spaces: "Freie Plätze",
                    voice: "Sprach-Limit"
                },
                filter: {
                    muted: "Stummgeschaltet",
                    deafened: "Taub",
                    camera: "Kamera",
                    stream: "Stream",
                    includeFilters: "Filter einschließen",
                    avoidFilters: "Filter vermeiden"
                },
                reset: {
                    list: "Liste zurücksetzen"
                },
                voice: {
                    label: "Sprachoptionen",
                    joinSettings: "Beitrittseinstellungen",
                    auto: {
                        mute: "Auto-Stumm",
                        deafen: "Auto-Taub",
                        camera: "Auto-Kamera",
                        stream: "Auto-Stream",
                        leaveWhenEmpty: "Verlassen wenn leer",
                        navigate: "Auto-Navigation",
                        stage: "Stage vermeiden",
                        afk: "AFK vermeiden"
                    }
                },
                invalid: {
                    server: "Ungültiger Server"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Operation: Benutzeranzahl",
                    description: "Wähle eine Operation für die Anzahl der Benutzer."
                },
                userAmount: {
                    label: "Benutzeranzahl",
                    description: "Wähle die Anzahl der Benutzer."
                },
                spacesLeftOperation: {
                    label: "Operation: Freie Plätze",
                    description: "Wähle eine Operation für die maximale Anzahl der Benutzer."
                },
                spacesLeft: {
                    label: "Freie Plätze",
                    description: "Wähle die Anzahl der maximalen Benutzer."
                },
                vcLimitOperation: {
                    label: "Operation: Sprachkanal-Limit",
                    description: "Wähle eine Operation für den Sprachkanal."
                },
                vcLimit: {
                    label: "Sprachkanal-Limit",
                    description: "Wähle ein Sprachkanal-Limit."
                },
                servers: {
                    label: "Server",
                    description: "Server, die einbezogen werden."
                },
                autoNavigate: {
                    label: "Auto-Navigation",
                    description: "Navigiert automatisch zum Sprachkanal."
                },
                autoCamera: {
                    label: "Auto-Kamera",
                    description: "Schaltet die Kamera automatisch ein."
                },
                autoStream: {
                    label: "Auto-Stream",
                    description: "Schaltet den Stream automatisch ein."
                },
                selfMute: {
                    label: "Auto-Stumm",
                    description: "Schaltet dein Mikrofon beim Beitreten automatisch stumm."
                },
                selfDeafen: {
                    label: "Auto-Taub",
                    description: "Schaltet dein Audio beim Beitreten automatisch taub."
                },
                leaveEmpty: {
                    label: "Verlassen wenn leer",
                    description: "Sucht einen zufälligen Anruf, wenn der Voice-Chat leer ist."
                },
                prioritizeFriends: {
                    label: "Freunde priorisieren",
                    description: "Bevorzugt nach Möglichkeit Kanäle, in denen sich deine Freunde befinden."
                },
                avoidStages: {
                    label: "Stage vermeiden",
                    description: "Vermeidet das Beitreten von Stage-Kanälen."
                },
                avoidAfk: {
                    label: "AFK vermeiden",
                    description: "Vermeidet das Beitreten von AFK-Sprachkanälen."
                },
                video: {
                    label: "Video",
                    description: "Sucht nach Benutzern mit eingeschalteter Kamera."
                },
                stream: {
                    label: "Stream",
                    description: "Sucht nach Benutzern, die streamen."
                },
                mute: {
                    label: "Stumm",
                    description: "Sucht nach Benutzern, die stummgeschaltet sind."
                },
                deafen: {
                    label: "Taub",
                    description: "Sucht nach Benutzern, die taubgeschaltet sind."
                },
                includeStates: {
                    label: "Filter einschließen",
                    description: "Option zum Einschließen von Status."
                },
                avoidStates: {
                    label: "Filter vermeiden",
                    description: "Option zum Vermeiden von Status."
                }
            },
            alert: {
                failed: "Kein Sprachkanal gefunden!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Dekodiert React-Fehlercodes in menschenlesbare Nachrichten."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Lies alle Server-Benachrichtigungen mit einem einzigen Klick!",
            button: "Alle lesen"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Mit Strg+Tab zwischen den zuletzt genutzten DMs wechseln (Strg+Umschalt+Tab rückwärts).",
            option: {
                visualStyle: {
                    label: "Visueller Stil",
                    description: "Stil der visuellen Anzeige beim Wechseln.",
                    overlay: "Overlay (Alt+Tab Stil)",
                    toast: "Toast (Statusmeldung)",
                    off: "Aus"
                },
                overlayMode: {
                    label: "Overlay-Modus",
                    description: "Inhalt des Overlays.",
                    row: "Reihe der Letzten",
                    current: "Nur Aktueller",
                },
                amountOfUsers: {
                    label: "Benutzeranzahl",
                    description: "Anzahl der im Overlay angezeigten Benutzer."
                },
                overlayRowLength: {
                    label: "Reihenlänge im Overlay",
                    description: "Anzahl der letzten DMs in einer Reihe."
                },
                overlayShowAvatars: {
                    label: "Avatare im Overlay",
                    description: "Benutzeravatare im Overlay anzeigen."
                },
                toastDurationMs: {
                    label: "Toast-Dauer (ms)",
                    description: "Dauer der Statusmeldung."
                },
                clearRdms: {
                    label: "RDMS-Liste leeren",
                    description: "Test-Funktion: RDMS-Liste leeren.",
                    toast: "RDMS-Verlauf geleert",
                    button: "RDMS-Verlauf leeren"
                }
            },
            modal: {
                unknown: "Unbekannt",
                dm: "DM",
                group: "Gruppen-DM",
                channel: "Kanal",
                switchingTo: "Wechsle zu: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Benachrichtigt dich, wenn ein Freund, ein Gruppenchat oder ein Server dich entfernt.",
            option: {
                notices: {
                    label: "Hinweise",
                    description: "Zeigt auch einen Hinweis am oberen Bildschirmrand an, wenn du entfernt wirst (nutze dies, um keine Meldung zu verpassen)."
                },
                offlineRemovals: {
                    label: "Offline-Entfernungen",
                    description: "Benachrichtigt dich beim Starten von Discord, wenn du während deiner Abwesenheit entfernt wurdest."
                },
                friends: {
                    label: "Freunde",
                    description: "Benachrichtigen, wenn ein Freund dich entfernt."
                },
                friendRequestCancels: {
                    label: "Freundesanfrage-Abbrüche",
                    description: "Benachrichtigen, wenn eine Freundesanfrage abgebrochen wird."
                },
                servers: {
                    label: "Server",
                    description: "Benachrichtigen, wenn du von einem Server entfernt wirst."
                },
                groups: {
                    label: "Gruppen",
                    description: "Benachrichtigen, wenn du aus einer Gruppe entfernt wirst."
                }
            },
            notification: {
                removedFriend: "{{user}} hat dich als Freund entfernt.",
                cancelledFriendRequest: "Eine Freundesanfrage von {{user}} wurde entfernt.",
                removedFromServer: "Du wurdest vom Server {{server}} entfernt.",
                removedFromGroup: "Du wurdest aus der Gruppe {{group}} entfernt.",
                noLongerGroup: "Du bist nicht mehr in der Gruppe {{group}}.",
                noLongerServer: "Du bist nicht mehr auf dem Server {{server}}.",
                noLongerFriend: "Du bist nicht mehr mit {{user}} befreundet.",
                friendRequestRevoked: "Freundesanfrage von {{user}} wurde zurückgezogen.",
                ok: "OK"
            }
        },
        remix: {
            name: "Remix",
            description: "Fügt dem Rechtsklick-Menü des Upload-Buttons eine 'Remix'-Option hinzu. Diese öffnet ein Bild in einem einfachen Editor und erlaubt das direkte Senden.",
            label: "Remix",
            button: {
                send: "Senden",
                close: "Schließen",
                brush: "Pinsel",
                erase: "Radiergummi",
                crop: "Zuschneiden",
                shape: "Form",
                reset: "Zurücksetzen",
                clear: "Leeren"
            },
            editor: {
                choose: "Bild auswählen",
                browse: "Durchsuchen",
                rectangle: "Rechteck",
                ellipse: "Ellipse",
                line: "Linie",
                arrow: "Pfeil",
                fill: "Füllen"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Ermöglicht das schnelle Wiederholen von Nachrichten. Halte Umschalt gedrückt, während du auf 'Wiederholen' klickst, um auf die Nachricht zu antworten.",
            button: "Wiederholen (Klick) / Wiederholen & Antworten (Umschalt + Klick)",
            context: {
                repeat: "Wiederholen",
                repeatAndReply: "Wiederholen und Antworten"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Ersetzt die Google-Suche durch andere Suchmaschinen.",
            option: {
                customEngineName: {
                    label: "Name der Suchmaschine",
                    description: "Name der benutzerdefinierten Suchmaschine."
                },
                customEngineURL: {
                    label: "URL der Suchmaschine",
                    description: "Die URL deiner Suchmaschine."
                },
                replacementEngine: {
                    label: "Ersatz-Suchmaschine",
                    description: "Ersetzt Google direkt durch eine spezifische Engine, anstatt ein Auswahlmenü hinzuzufügen.",
                    off: "Aus",
                    custom: "Eigene Suchmaschine",
                }
            },
            context: {
                label: "Text suchen",
                searchWith: "Suchen mit {{name}}"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Steuere, ob du bei Antworten immer oder nie gepingt wirst, inklusive einer Whitelist-Funktion.",
            option: {
                alwaysPingOnReply: {
                    label: "Immer pingen bei Antwort",
                    description: "Dich immer pingen lassen, wenn jemand auf deine Nachrichten antwortet."
                },
                replyPingWhitelist: {
                    label: "Antwort-Ping Whitelist",
                    description: "Kommagetrennte Liste von Benutzer-IDs, von denen du immer Antwort-Pings erhalten möchtest."
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Zeigt einen Zeitstempel in der Vorschau von beantworteten Nachrichten an."
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Enthülle alle Spoiler in einer Nachricht mittels Strg-Klick auf einen Spoiler, oder im ganzen Chat mit Strg+Umschalt-Klick."
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Fügt eine Bildersuche (Reverse Search) zu Bild-Kontextmenüs hinzu.",
            context: {
                label: "Bild suchen",
                all: "Alle durchsuchen"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Bewerte andere Benutzer (fügt Profilen einen neuen Abschnitt hinzu).",
            notification: {
                newReview: "Du hast neue Bewertungen auf deinem Profil!",
                auth: {
                    error: "Ein Fehler ist bei der Autorisierung aufgetreten.",
                    successfully: "Erfolgreich eingeloggt!",
                    failed: "Autorisierung fehlgeschlagen.",
                    review: "Bitte autorisieren, um eine Bewertung abzugeben.",
                    opening: "Autorisierungsfenster wird geöffnet...",
                    need: "Du musst dich autorisieren, um Benutzer zu bewerten!"
                },
                error: {
                    fast: "Du sendest Anfragen zu schnell. Warte ein paar Sekunden.",
                    fetching: "Fehler beim Abrufen der Bewertungen.",
                    action: {
                        failed: "Aktion {{action}} für Benutzer fehlgeschlagen.",
                        success: "Benutzer erfolgreich {{action}}."
                    }
                }
            },
            modal: {
                delete: {
                    title: "Bist du sicher?",
                    description: "Möchtest du diese Bewertung wirklich löschen?",
                    confirm: "Löschen",
                    cancel: "Abbrechen",
                    error: "Du musst eingeloggt sein, um Bewertungen zu löschen.",
                },
                report: {
                    title: "Bist du sicher?",
                    description: "Möchtest du diese Bewertung wirklich melden?",
                    confirm: "Melden",
                    cancel: "Abbrechen",
                    error: "Du musst eingeloggt sein, um Bewertungen zu melden.",
                },
                block: {
                    title: "Bist du sicher?",
                    description: "Möchtest du diesen Benutzer wirklich blockieren? Du wirst seine Bewertungen nicht mehr sehen.",
                    confirm: "Blockieren",
                    cancel: "Abbrechen",
                    error: "Du musst eingeloggt sein, um Benutzer zu blockieren.",
                },
                blocked: {
                    title: "Blockierte Benutzer",
                    auth: "Du bist nicht bei ReviewDB eingeloggt!",
                    noBlocked: "Keine Benutzer blockiert.",
                    fetch: "Fehler beim Abrufen der blockierten Benutzer."
                },
                reviews: {
                    title: "s Bewertungen",
                    noUser: "Es sieht so aus, als hätte noch niemand diesen Benutzer bewertet. Du könntest der Erste sein!",
                    noServer: "Es sieht so aus, als hätte noch niemand diesen Server bewertet. Du könntest der Erste sein!"
                }
            },
            button: {
                appeal: "Einspruch",
                ok: "OK",
                more: "Mehr lesen",
                reply: "Antworten an @{{user}}",
                update: "Bewertung für @{{user}} aktualisieren",
                review: "@{{user}} bewerten"
            },
            context: {
                view: "Bewertungen ansehen",
                blocked: "Du hast diesen Benutzer blockiert",
                delete: "Bewertung löschen",
                report: "Bewertung melden",
                block: "Benutzer blockieren",
                unblock: "Benutzer entblocken",
                reply: "Auf Bewertung antworten"
            },
            option: {
                authorize: {
                    label: "Autorisieren",
                    button: "Mit ReviewDB autorisieren"
                },
                notifyReviews: {
                    label: "Bewertungs-Benachrichtigung",
                    description: "Über neue Bewertungen beim Start benachrichtigen."
                },
                showWarning: {
                    label: "Warnung anzeigen",
                    description: "Zeigt oben in der Liste einen Hinweis an, respektvoll zu bleiben."
                },
                hideTimestamps: {
                    label: "Zeitstempel ausblenden",
                    description: "Zeitstempel bei Bewertungen ausblenden."
                },
                hideBlockedUsers: {
                    label: "Blockierte ausblenden",
                    description: "Bewertungen von blockierten Benutzern ausblenden."
                },
                buttons: {
                    label: "Buttons",
                    manageBlocked: "Blockierte Benutzer verwalten",
                    support: "ReviewDB-Entwicklung unterstützen",
                    website: "ReviewDB-Webseite",
                    server: "ReviewDB-Supportserver"
                }
            },
            profile: {
                optedOut: "Benutzer hat sich abgemeldet",
                noReviews: "Noch keine Bewertungen"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Stellt Magnet-Links wie Nachrichten-Links dar.",
            unknown: "unbekannter Dateiname"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Fügt die Farbe der höchsten Rolle überall dort hinzu, wo es möglich ist.",
            option: {
                chatMentions: {
                    label: "Chat-Erwähnungen",
                    description: "Rollenfarben in Chat-Erwähnungen anzeigen (auch im Eingabefeld)."
                },
                memberList: {
                    label: "Mitgliederliste",
                    description: "Rollenfarben in den Rollen-Überschriften der Mitgliederliste anzeigen."
                },
                voiceUsers: {
                    label: "Sprachbenutzer",
                    description: "Rollenfarben in der Benutzerliste des Voice-Chats anzeigen."
                },
                reactorsList: {
                    label: "Reaktions-Liste",
                    description: "Rollenfarben in der Liste der Reagierenden anzeigen."
                },
                pollResults: {
                    label: "Umfrageergebnisse",
                    description: "Rollenfarben in den Umfrageergebnissen anzeigen."
                },
                colorChatMessages: {
                    label: "Chat-Nachrichten einfärben",
                    description: "Färbt Chat-Nachrichten basierend auf der Rollenfarbe des Autors ein."
                },
                messageSaturation: {
                    label: "Nachrichtensättigung",
                    description: "Intensität der Nachrichteneinfärbung."
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Bearbeite den Typ und den Inhalt jeder Rich Presence.",
            option: {
                replacedAppIds: {
                    label: "Ersetzte App-IDs",
                }
            },
            modal: {
                tutorial: {
                    title: "IDs aktuell laufender Aktivitäten",
                    noRunning: "Keine laufenden Aktivitäten",
                    available: "Verfügbare Variablen",
                    variableText: "In allen Feldern (außer Stream-URL) kannst du Variablen einfügen, die automatisch durch den Originalinhalt ersetzt werden:",
                    more: "Mehr Details",
                    details: {
                        leave: "Lasse ein Feld leer, um es unverändert zu lassen.",
                        set: "Setze ein Feld auf 'null', um es in der Presence zu verstecken.",
                        reload: "Eventuell musst du Discord neu laden, damit die Änderungen übernommen werden."
                    }
                },
                settings: {
                    applyEdits: "Änderungen an App übernehmen",
                    addNewApp: "Neue Anwendung hinzufügen",
                    appId: "Anwendungs-ID",
                    invalidAppId: "Ungültige Anwendungs-ID",
                    newActivityType: "Neuer Aktivitätstyp",
                    activityTypes: {
                        playing: "Spielt",
                        watching: "Schaut",
                        listening: "Hört",
                        competing: "Tritt an in",
                        streaming: "Streamt"
                    },
                    streamUrl: "Stream-URL (muss YouTube oder Twitch sein)",
                    invalidStreamUrl: "Ungültige Stream-URL",
                    newName: "Neuer Name",
                    newDetails: "Neue Details",
                    newState: "Neuer Status",
                    largeImage: "Großes Bild",
                    smallImage: "Kleines Bild",
                    text: "Text",
                    url: "URL",
                    firstLine: "(erste Zeile)",
                    secondLine: "(zweite Zeile)",
                    thirdLine: "(dritte Zeile)",
                    alsoThirdLine: "(auch dritte Zeile)",
                    hideAssets: "Assets verstecken (große & kleine Bilder)",
                    hideTimestamps: "Zeitstempel verstecken"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Zeigt Statistiken über deine Aktivität als Rich Presence an.",
            option: {
                assetURL: {
                    label: "Asset-URL",
                    description: "Das Bild für deine RPC. Wenn leer, wird dein Profilbild verwendet."
                },
                rpcTitle: {
                    label: "RPC-Titel",
                    description: "Der Titel deiner RPC."
                },
                statDisplay: {
                    label: "Statistik-Anzeige",
                    description: "Was soll die RPC anzeigen? (Nur eine Zeile möglich)",
                    today: "Anzahl der heute gesendeten Nachrichten",
                    alltime: "Anzahl aller bisher gesendeten Nachrichten",
                    listened: "Dein meistgehörtes Album der Woche"
                },
                lastFMApiKey: {
                    label: "Last.fm API-Key",
                    description: "Dein Last.fm API-Schlüssel."
                },
                lastFMUsername: {
                    label: "Last.fm Benutzername",
                    description: "Dein Last.fm Benutzername."
                },
                albumCoverImage: {
                    label: "Album-Cover-Bild",
                    description: "Soll das Album-Cover als RPC-Bild verwendet werden? (Falls Last.fm gewählt ist)"
                },
                lastFMStatFormat: {
                    label: "Last.fm Statistik-Format",
                    description: "Wie soll die Statistik formatiert werden? $album wird durch das Album und $artist durch den Künstler ersetzt."
                }
            },
            noInfo: "Derzeit keine Informationen verfügbar :(",
            messagesToday: "Heute gesendete Nachrichten: {{count}}",
            messagesAllTime: "Insgesamt gesendete Nachrichten: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Exportiert favorisierte GIF-URLs",
            toolbox: "Favorisierte GIFs speichern",
            title: "Favorisierte GIFs speichern",
            command: {
                savegifs: {
                    description: "Speichert alle favorisierten GIF-URLs in einer Textdatei"
                },
                saveworkinggifs: {
                    description: "Testet alle favorisierten GIFs und speichert nur diejenigen, die noch funktionieren"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Toolbox-Button anzeigen",
                    description: "Zeigt den Button 'Favorisierte GIFs speichern' in der Plexcord Toolbox (erfordert Neustart)"
                }
            },
            toast: {
                save: "GIFs erfolgreich als {{filename}} gespeichert",
                failed: "Speichern der GIFs fehlgeschlagen",
                no: "Keine favorisierten GIFs gefunden!",
                testing: "Teste {{count}} GIFs, das kann einen Moment dauern...",
                noneWorking: "Keines deiner gespeicherten GIFs scheint zu funktionieren.",
                saved: "{{broken}} potenziell defekte GIFs gefiltert. {{saved}} funktionierende GIFs gespeichert."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Plane Nachrichten, die zu einer bestimmten Zeit oder nach einer Verzögerung gesendet werden sollen.",
            toolbox: {
                toggle: "Geplante Nachrichten anzeigen"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Max. Nachrichten pro Minute",
                    description: "Maximale Anzahl geplanter Nachrichten pro Kanal, die in derselben Minute gesendet werden können."
                },
                checkIntervalSeconds: {
                    label: "Prüfintervall (Sekunden)",
                    description: "Wie oft das Plugin nach zu sendenden Nachrichten sucht."
                },
                showNotifications: {
                    label: "Benachrichtigungen anzeigen",
                    description: "Zeigt Toast-Benachrichtigungen an, wenn Nachrichten gesendet werden."
                },
                showPhantomMessages: {
                    label: "Phantom-Nachrichten anzeigen",
                    description: "Zeigt geplante Nachrichten als Phantom-Nachrichten im Chat an."
                }
            },
            channelType: {
                unknown: "Unbekannt",
                dm: "DM",
                groupDm: "Gruppen-DM",
                channel: "Kanal"
            },
            toast: {
                messageSent: "Geplante Nachricht an {{channel}} gesendet",
                messageFailed: "Senden der geplanten Nachricht fehlgeschlagen",
                maxMessagesReached: "Maximum von {{max}} Nachrichten pro Kanal und Minute erreicht",
                messageScheduled: "Nachricht geplant!",
                messageRemoved: "Geplante Nachricht entfernt",
                allCleared: "Alle geplanten Nachrichten gelöscht"
            },
            button: {
                tooltipOn: "Planungsmodus AN (Klicken zum Deaktivieren, Rechtsklick für Liste)",
                tooltipOff: "Planungsmodus AUS (Klicken zum Aktivieren, Rechtsklick für Liste)"
            },
            accessory: {
                scheduledFor: "Geplant für {date}{timeLeft}",
                remaining: {
                    days: "Noch {{days}}t {{hours}}std",
                    hours: "Noch {{hours}}std {{minutes}}m",
                    minutes: "Noch {{minutes}}m"
                }
            },
            scheduleModal: {
                title: "Nachricht planen",
                schedulingFor: "Planung für: {{channel}}",
                scheduleType: "Planungstyp",
                delay: "Verzögerung",
                specificTime: "Bestimmte Zeit",
                delayMinutes: "Verzögerung (Minuten)",
                dateTime: "Datum & Uhrzeit",
                error: {
                    invalidDelay: "Bitte gib eine gültige Verzögerung ein (mindestens 1 Minute)",
                    invalidDateTime: "Bitte wähle ein Datum und eine Uhrzeit in der Zukunft aus"
                },
                schedule: "Planen",
                cancel: "Abbrechen"
            },
            viewModal: {
                title: "Geplante Nachrichten",
                clearAll: "Alle löschen",
                noMessages: "Keine geplanten Nachrichten",
                delete: "Löschen",
                close: "Schließen"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Behebt den nervigen 'Wir haben die Lupe fallen lassen!'-Fehler.",
            notPerfect: "Dieser Fix ist nicht perfekt, daher musst du die Suchleiste eventuell neu laden, um Probleme zu beheben.",
            paragraph1: "Discord erlaubt nur einen maximalen Offset von 5000 (dies verursacht den Lupen-Fehler).",
            paragraph2: "Das bedeutet, dass du exakt 5000 Nachrichten in die Vergangenheit und 5000 Nachrichten in die Zukunft sehen kannst (bei Sortierung nach 'Alt').",
            paragraph3: "Dieses Plugin springt einfach zur entgegengesetzten Sortiermethode, um die Einschränkung von Discord zu umgehen,",
            paragraph4: "aber bei sehr großen Suchergebnissen, wenn eine Nachricht mit beiden Methoden nicht erreichbar ist,",
            paragraph5: "zeigt das Plugin einfach den Offset 0 an (entweder die neueste oder älteste Nachricht, je nach Sortierung)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Spielt immer die geheime Version des Discord-Klingeltons ab (außer während spezieller Klingelton-Events).",
            option: {
                onlySnow: {
                    label: "Nur während des Schnee-Klingelton-Events",
                    description: "Spielt nur das 'Snow Halation'-Theme ab."
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Aktiviert Discords experimentelle Zusammenfassungs-Funktion auf jedem Server; zeigt KI-generierte Zusammenfassungen von Unterhaltungen an.",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Ablauffrist für Zusammenfassungen (Tage)",
                    description: "Zeit in Tagen, bevor eine Zusammenfassung entfernt wird. Beachte, dass nur bis zu 50 Zusammenfassungen pro Kanal gespeichert werden."
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Fügt den aktuellen Kanal zum Auswahlfenster für das Weiterleiten hinzu."
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Sende Zeitstempel einfach über einen Button im Chatfeld oder Text-Shortcuts. Lies die erweiterte Beschreibung!",
            sample: {
                paragraph1: "Um schnell reine Zeitstempel zu senden, schreibe die Zeit im Format `HH:MM` (inklusive der Backticks!) in deine Nachricht.",
                paragraph2: "Siehe unten für Beispiele.\nWenn du etwas Spezifischeres benötigst, nutze den Datum-Button in der Chatleiste!",
                examples: "Beispiele:"
            },
            modal: {
                title: "Zeitstempel-Auswahl",
                light: "Hell",
                dark: "Dunkel",
                format: "Zeitstempel-Format",
                preview: "Vorschau",
                insert: "Einfügen",
                insertTimestamp: "Zeitstempel einfügen"
            },
            option: {
                replaceMessageContents: {
                    label: "Nachrichteninhalt ersetzen",
                    description: "Ersetzt Zeitstempel direkt im Nachrichteninhalt."
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Ermöglicht es, Informationen über einen Server anzuzeigen.",
            context: {
                serverInfo: "Server-Info"
            },
            option: {
                sorting: {
                    label: "Sortierung",
                    description: "Benutzername oder, falls vorhanden, Anzeigename.",
                    username: "Benutzername",
                    displayname: "Anzeigename",
                    none: "Nicht sortieren"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Server-Info",
                    friends: "Freunde",
                    mutualUsers: "Gemeinsame Benutzer",
                    blockedUsers: "Blockierte Benutzer",
                    ignoredUsers: "Ignorierte Benutzer"
                },
                owner: "Serverbesitzer",
                loading: "Lädt...",
                createdAt: "Erstellt am",
                joinedAt: "Beigetreten am",
                vanityLink: "Benutzerdefinierter Link",
                preferredLocale: "Bevorzugte Sprache",
                verification: {
                    level: "Verifizierungsstufe",
                    none: "Keine",
                    low: "Niedrig",
                    medium: "Mittel",
                    high: "Hoch",
                    highest: "Höchste"
                },
                serverBoosts: "Server-Boosts",
                channels: "Kanäle",
                roles: "Rollen"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Fügt die Anzahl der Online-Freunde oder die Serveranzahl in der Serverliste hinzu.",
            friends: "Freunde",
            servers: "Server",
            option: {
                mode: {
                    label: "Modus",
                    description: "Anzeigemodus in der Serverliste.",
                    friend: "Nur Online-Freunde",
                    server: "Nur Serveranzahl",
                    both: "Sowohl Serveranzahl als auch Online-Freunde"
                },
                useCompact: {
                    label: "Kompakten Modus verwenden",
                    description: "Zeigt den Indikator nur als Text an."
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Navigiere besser durch deine Server mit einem Schnellsuche-Button.",
            tooltip: "Suchen"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Bringt Codeblöcke im VS-Code-Stil zu Discord, betrieben durch Shiki.",
            option: {
                theme: {
                    label: "Theme",
                    description: "Standard-Themes"
                },
                customTheme: {
                    label: "Benutzerdefiniertes Theme",
                    description: "Ein Link zu einem benutzerdefinierten VS-Code-Theme.",
                    mustURL: "Muss eine gültige URL sein",
                    mustJSON: "Muss eine JSON-Datei sein"
                },
                tryHljs: {
                    label: "Fallback auf Hljs",
                    description: "Nutzt den leichteren Standard-Highlighter von Discord.",
                    never: "Nie",
                    secondary: "Shiki gegenüber Highlight.js bevorzugen",
                    primary: "Highlight.js gegenüber Shiki bevorzugen",
                    always: "Immer"
                },
                useDevIcon: {
                    label: "Devicon für Sprach-Icons nutzen",
                    description: "Wie Sprach-Icons auf Codeblöcken angezeigt werden sollen.",
                    disabled: "Deaktiviert",
                    colorless: "Farblos",
                    colored: "Farbig"
                },
                bgOpacity: {
                    label: "Hintergrund-Deckkraft",
                    description: "Deckkraft des Hintergrunds."
                }
            },
            button: {
                copy: "Kopieren",
                copied: "Kopiert!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Zeigt immer alle Nachrichten-Buttons an, unabhängig davon, ob die Umschalttaste (Shift) gedrückt wird oder nicht.",
            option: {
                noShiftDelete: {
                    label: "Löschen ohne Shift",
                    description: "Entfernt die Voraussetzung, Shift gedrückt zu halten, um eine Nachricht zu löschen."
                },
                noShiftPin: {
                    label: "Anheften ohne Shift",
                    description: "Entfernt die Voraussetzung, Shift gedrückt zu halten, um eine Nachricht anzuheften."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Zeigt die Badges des Autors neben seinem Namen im Chat an.",
            option: {
                showPlexcordDonor: {
                    label: "Plexcord Donor Badge anzeigen",
                    description: "Aktivieren, um Plexcord Donor Badges im Chat anzuzeigen."
                },
                plexcordDonorPosition: {
                    label: "Position des Plexcord Donor Badges",
                    description: "Die Position der Plexcord Donor Badges."
                },
                showPlexcordContributor: {
                    label: "Plexcord Contributor Badge anzeigen",
                    description: "Aktivieren, um Plexcord Contributor Badges im Chat anzuzeigen."
                },
                plexcordContributorPosition: {
                    label: "Position des Plexcord Contributor Badges",
                    description: "Die Position der Plexcord Contributor Badges."
                },
                showDiscordProfile: {
                    label: "Discord Profil Badges anzeigen",
                    description: "Aktivieren, um Discord Profil Badges im Chat anzuzeigen."
                },
                discordProfilePosition: {
                    label: "Position der Discord Profil Badges",
                    description: "Die Position der Discord Profil Badges."
                },
                showDiscordNitro: {
                    label: "Discord Nitro Badge anzeigen",
                    description: "Aktivieren, um Discord Nitro Badges im Chat anzuzeigen."
                },
                discordNitroPosition: {
                    label: "Position des Discord Nitro Badges",
                    description: "Die Position der Discord Nitro Badges."
                },
                badgeSettings: {
                    label: "Badge-Einstellungen",
                    description: "Konfiguriere die Position anderer Badges im Chat.",
                    modal: "Ziehe die Badges, um sie neu anzuordnen; du kannst klicken, um einen bestimmten Badge-Typ zu aktivieren/deaktivieren."
                }
            },
            badge: {
                plexcord: "Plexcord Donor Badge",
                contributor: "Plexcord Contributor Badge",
                discordProfile: "Discord Profil Badges (HypeSquad, Discord Staff, Aktiver Entwickler, etc.)",
                nitro: "Nitro Badge",
                staff: "Discord Staff",
                partner: "Partner-Serverbesitzer",
                events: "HypeSquad Events",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Discord Bug Hunter",
                earlyVerifiedBotDeveloper: "Früher verifizierter Bot-Entwickler",
                earlySupporter: "Früher Unterstützer",
                moderatorProgram: "Moderator Program Alumni"
            },
            modal: {
                plexcordContributor: "Plexcord Contributor",
                discordNitro: "Discord Nitro",
                basic: "Basis",
                classic: "Classic"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Zeigt verknüpfte Konten in Benutzer-Popouts an.",
            option: {
                iconSize: {
                    label: "Icon-Größe",
                    description: "Icon-Größe (px)"
                },
                iconSpacing: {
                    label: "Icon-Abstand",
                    description: "Icon-Abstand",
                    compact: "Kompakt",
                    cozy: "Gemütlich",
                    roomy: "Viel Platz"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Zeigt Kanäle an, für die du eigentlich keine Berechtigung zum Ansehen hast.",
            tooltip: "Versteckter Kanal",
            option: {
                channelStyle: {
                    label: "Kanal-Stil",
                    description: "Der Stil, in dem versteckte Kanäle angezeigt werden.",
                    classic: "Klassisch",
                    muted: "Stummgeschaltet",
                    showUnreads: "Ungelesene anzeigen",
                    mutedWithUnreads: "Stummgeschaltet und Ungelesene anzeigen"
                },
                showMode: {
                    label: "Anzeigemodus",
                    description: "Der Modus, der für versteckte Kanäle verwendet wird.",
                    lock: "Normaler Stil mit Schloss-Icon",
                    hidden: "Stummgeschalteter Stil mit verstecktem Augen-Icon rechts",
                    lockIconRight: "Schloss-Icon auf der rechten Seite"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Standard-Status für Erlaubte Benutzer/Rollen Dropdown",
                    description: "Ob das Dropdown-Menü für erlaubte Benutzer und Rollen in versteckten Kanälen standardmäßig offen sein soll."
                }
            },
            channelType: {
                text: "Text",
                announcement: "Ankündigung",
                forum: "Forum",
                voice: "Sprachkanal",
                stage: "Stage"
            },
            sortOrder: {
                latestActivity: "Letzte Aktivität",
                creationDate: "Erstellungsdatum"
            },
            forumLayout: {
                default: "Nicht festgelegt",
                list: "Listenansicht",
                grid: "Galerieansicht"
            },
            videoQuality: {
                auto: "Automatisch",
                full: "720p"
            },
            modal: {
                hidden: "versteckt",
                locked: "gesperrt",
                threads: "Threads",
                posts: "Posts",
                messages: "Nachrichten",
                post: "Post",
                message: "Nachricht",
                unknown: "unbekannt",
                permissionDetails: "Berechtigungsdetails",
                thisIsA: "Dies ist ein {{status}}er {{channelType}}-Kanal",
                canNotSee: "Du kannst die {{type}} dieses Kanals nicht sehen.",
                guidelines: "Du kannst jedoch die Richtlinien einsehen:",
                lastCreated: "Zuletzt erstellte(r) {{type}}:",
                lastPin: "Letzte angeheftete Nachricht:",
                threadSlowmode: "Standard-Slowmode für Threads:",
                slowmode: "Slowmode:",
                bitrate: "Bitrate:",
                region: "Region:",
                automatic: "Automatisch",
                videoQuality: "Videoqualitäts-Modus:",
                inactiveArchiveDuration: "Standard-Dauer vor Archivierung bei Inaktivität für {{type}}",
                defaultLayout: "Standard-Layout:",
                defaultSort: "Standard-Sortierung:",
                defaultReaction: "Standard-Reaktions-Emoji:",
                requireTag: "Posts in diesem Forum erfordern ein Tag.",
                availableTags: "Verfügbare Tags:",
                allowedUsersAndRoles: "Erlaubte Benutzer und Rollen:",
                hideAllowedUsersAndRoles: "Erlaubte Benutzer und Rollen ausblenden",
                viewAllowedUsersAndRoles: "Erlaubte Benutzer und Rollen anzeigen"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Zeigt verschiedene versteckte Dinge und Moderator-Funktionen an, unabhängig von Berechtigungen.",
            option: {
                showTimeouts: {
                    label: "Mitglieder-Timeouts im Chat anzeigen",
                    description: "Zeigt Timeout-Icons bei Mitgliedern im Chat an."
                },
                showInvitesPaused: {
                    label: "Pausierte Einladungen anzeigen",
                    description: "Zeigt den Tooltip für pausierte Einladungen in der Serverliste an."
                },
                showModView: {
                    label: "Moderations-Ansicht anzeigen",
                    description: "Zeigt den Kontextmenü-Punkt 'Mitglieder-Moderationsansicht' auf allen Servern an."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Fügt eine Kontextmenü-Option hinzu, um Embeds für Links anzuzeigen, die normalerweise keine haben.",
            context: {
                embed: {
                    show: "Embed anzeigen",
                    hide: "Embed entfernen"
                }
            },
            error: {
                failed: "Embed konnte nicht geladen werden",
                noEmbed: "Keine Embeds gefunden"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Zeigt jede beliebige Kombination aus benutzerdefinierten Spitznamen, Freundes-Spitznamen, Server-Spitznamen, Anzeigenamen und Benutzernamen im Chat an.",
            option: {
                messages: {
                    label: "Nachrichten",
                    description: "Zeigt das benutzerdefinierte Namensformat in Nachrichten an."
                },
                replies: {
                    label: "Antworten",
                    description: "Zeigt das benutzerdefinierte Namensformat in Antworten an."
                },
                mentions: {
                    label: "Erwähnungen",
                    description: "Zeigt das benutzerdefinierte Namensformat in Erwähnungen an."
                },
                typingIndicator: {
                    label: "Tipp-Indikator",
                    description: "Zeigt den ersten verfügbaren Namen aus dem benutzerdefinierten Format im Tipp-Indikator an."
                },
                memberList: {
                    label: "Mitgliederliste",
                    description: "Zeigt den ersten verfügbaren Namen aus dem benutzerdefinierten Format in der Mitgliederliste an."
                },
                profilePopout: {
                    label: "Profil-Popout",
                    description: "Zeigt den ersten verfügbaren Namen aus dem benutzerdefinierten Format in Profil-Popouts an."
                },
                voiceChannels: {
                    label: "Sprachkanäle",
                    description: "Zeigt den ersten verfügbaren Namen aus dem benutzerdefinierten Format in Sprachkanälen an."
                },
                reactions: {
                    label: "Reaktionen",
                    description: "Zeigt den ersten verfügbaren Namen in Reaktions-Tooltips und den vollen Namen in Reaktions-Popouts an."
                },
                discriminators: {
                    label: "Diskriminatoren (Hashtags)",
                    description: "Hängt Diskriminatoren an Benutzernamen von Bots an. Bei Bots sind diese noch wichtig, um sie unterscheidbar zu machen."
                },
                hideDefaultAtSign: {
                    label: "Standard-@-Zeichen ausblenden",
                    description: "Blendet das '@'-Symbol vor dem Namen in Erwähnungen und Antworten aus."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Alle Namen im Streamer-Modus kürzen",
                    description: "Kürzt alle Namen, nicht nur Benutzernamen, während der Streamer-Modus aktiv ist."
                },
                removeDuplicates: {
                    label: "Duplikate entfernen",
                    description: "Falls Namen identisch sind, werden sie entfernt, sodass nur eindeutige Namen übrig bleiben."
                },
                ignoreFonts: {
                    label: "Schriftarten ignorieren",
                    description: "Nutzt für den zweiten, dritten und vierten Namen die Standardschrift 'gg sans', ungeachtet benutzerdefinierter Schriftarten."
                },
                ignoreGradients: {
                    label: "Farbverläufe ignorieren",
                    description: "Nutzt bei nicht-primären Namen nur die Hauptfarbe anstatt des ganzen Verlaufs."
                },
                animateGradients: {
                    label: "Farbverläufe animieren",
                    description: "Animiert Farbverläufe bei zusätzlichen Namen, falls die Rolle einen Verlauf hat."
                },
                nameSeparator: {
                    label: "Namens-Trenner",
                    description: "Das Zeichen zwischen den Namen. Standard ist ein Leerzeichen."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Freundesnamen nur in DMs",
                    description: "Zeigt Freundes-Spitznamen nur in DMs an, nicht auf Servern."
                },
                customNameOnlyInDirectMessages: {
                    label: "Eigene Namen nur in DMs",
                    description: "Zeigt benutzerdefinierte SMYN-Namen nur in DMs an."
                },
                includedNames: {
                    label: "Enthaltene Namen",
                    description: "Reihenfolge von Benutzernamen, Anzeigenamen, Spitznamen und Freundesnamen. Platzhalter: {user}, {display}, {nick}, {friend}."
                },
                customNameColor: {
                    label: "Farbe: Eigener Name",
                    description: "Farbe für den benutzerdefinierten Namen. 'Role' folgt der Rollenfarbe, 'Role+-#' passt die Helligkeit an."
                },
                friendNameColor: {
                    label: "Farbe: Freundesname",
                    description: "Farbe für den Spitznamen eines Freundes."
                },
                nicknameColor: {
                    label: "Farbe: Spitzname",
                    description: "Farbe für den Server-Spitznamen."
                },
                displayNameColor: {
                    label: "Farbe: Anzeigename",
                    description: "Farbe für den Anzeigenamen."
                },
                usernameColor: {
                    label: "Farbe: Benutzername",
                    description: "Farbe für den Benutzernamen."
                },
                triggerNameRerender: {
                    label: "Neu-Rendern der Namen erzwingen",
                    description: "Erzwingt ein Neu-Rendern der Namen durch Umschalten dieser Einstellung."
                }
            },
            modal: {
                change: {
                    title: "SMYN-Spitznamen ändern"
                },
                add: {
                    title: "SMYN-Spitznamen hinzufügen"
                },
                setCustom: "Setze einen eigenen SMYN-Spitznamen für diesen Benutzer. Nutze {custom} in den Vorlagen-Einstellungen.",
                nickname: "SMYN-Spitzname",
                reset: "Zurücksetzen",
                cancel: "Abbrechen"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Zeigt an, wie lange das Timeout eines Benutzers noch dauert, entweder im Tooltip des Icons oder direkt daneben.",
            option: {
                displayStyle: {
                    label: "Anzeigestil",
                    description: "Wie die Timeout-Dauer angezeigt werden soll.",
                    tooltip: "Im Tooltip",
                    inline: "Neben dem Icon"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Zeigt Kanäle an, die in der Kanalliste hinter den 'Server-Ressourcen' versteckt sind."
        },
        showSongName: {
            name: "ShowSongName",
            description: "Zeigt den Songnamen anstelle des Künstlers bei Spotify-Aktivitäten an."
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Öffnet einen anderen Kanal oder eine DM als Seitenleiste oder Popout.",
            toolbox: {
                label: "Vorherigen Chat öffnen"
            },
            context: {
                label: "In Seitenleiste öffnen"
            },
            modal: {
                switch: "Kanäle wechseln",
                popout: "Chat auslagern (Popout)",
                close: "Seitenleisten-Chat schließen"
            },
            option: {
                persistSidebar: {
                    label: "Seitenleiste beibehalten",
                    description: "Hält den Seitenleisten-Chat auch nach einem Discord-Neustart offen."
                },
                patchCommunity: {
                    label: "Community-Patch",
                    description: "Patcht Funktionen wie den Kanal-Browser oder Mitglieder-Tab auf Community-Servern."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Automatisierter Text am Ende jeder Nachricht (Signatur).",
            option: {
                name: {
                    label: "Name/Text",
                    description: "Die Signatur, die an deine Nachrichten angehängt wird."
                },
                textHeader: {
                    label: "Text-Header",
                    description: "Welcher Header vor dem Signaturtext stehen soll."
                },
                showIcon: {
                    label: "Icon anzeigen",
                    description: "Zeigt ein Icon zum Umschalten in der Chatleiste an."
                },
                contextMenu: {
                    label: "Kontextmenü",
                    description: "Option zum Umschalten im Kontextmenü des Chatfelds hinzufügen."
                },
                isEnabled: {
                    label: "Aktiviert",
                    description: "Funktion ein-/ausschalten."
                }
            },
            tooltip: {
                enable: "Signatur aktivieren",
                disable: "Signatur deaktivieren"
            },
            context: {
                enable: "Signatur aktivieren"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Schalte deine Signatur um.",
                    toogle: "Signatur umschalten (Standard ist Umschalten)",
                    enabled: "Signatur aktiviert",
                    disabled: "Signatur deaktiviert"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Fügt einen Button zur Chatleiste hinzu, um das Senden einer 'stillen Nachricht' (@silent) umzuschalten.",
            option: {
                persistState: {
                    label: "Status beibehalten",
                    description: "Wie der Status des Buttons gespeichert werden soll.",
                    none: "Nicht speichern (beim Kanalwechsel zurücksetzen)",
                    channels: "Zwischen Kanälen beibehalten",
                    restarts: "Über Neustarts hinweg beibehalten"
                },
                autoDisable: {
                    label: "Auto-Deaktivierung",
                    description: "Deaktiviert den Modus für stille Nachrichten automatisch nach dem Senden einer Nachricht wieder."
                }
            },
            tooltip: {
                enable: "Stille Nachricht aktivieren",
                disable: "Stille Nachricht deaktivieren"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Versteckt deine Tipp-Anzeige im Chat.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Versteckt deine Tipp-Anzeige im Chat.",
                    toggle: {
                        name: "toggle",
                        description: "Schaltet die Funktion global, für den Kanal oder für den Server um.",
                        global: "Global",
                        channel: "Kanal",
                        guild: "Server"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Tipp-Anzeigen anderer Benutzer über der Chatleiste ausblenden."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Tipp-Anzeigen anderer Benutzer in der Mitgliederliste ausblenden."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Zeigt ein Icon in der Chatleiste zum schnellen Umschalten."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Zeigt ein Menü im Kontextmenü des Chats zum schnellen Ändern der Einstellungen."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Gibt an, ob das Tippen standardmäßig versteckt sein soll oder nicht."
                    }
                }
            },
            content: {
                updated: "Silent Typing Einstellungen aktualisiert.",
                noChanges: "Keine Änderungen an den Silent Typing Einstellungen vorgenommen."
            },
            tooltip: {
                hidden: "Tippen versteckt ({{location}})",
                visible: "Tippen sichtbar ({{location}})",
                global: "Tippen sichtbar (Global)"
            },
            option: {
                enabledGlobally: {
                    label: "Global aktiviert",
                    description: "Schaltet deine eigene Tipp-Anzeige global ein oder aus."
                },
                hideChatBoxTypingIndicators: {
                    label: "Tipp-Anzeige über Chatbox ausblenden",
                    description: "Blendet Tipp-Anzeigen anderer Benutzer über der Chatleiste aus."
                },
                hideMembersListTypingIndicators: {
                    label: "Tipp-Anzeige in Mitgliederliste ausblenden",
                    description: "Blendet Tipp-Anzeigen anderer Benutzer in der Mitgliederliste aus."
                },
                chatIcon: {
                    label: "Chat-Icon",
                    description: "Zeigt ein Icon in der Chatleiste für schnelle Änderungen an."
                },
                chatIconLeftClickAction: {
                    label: "Linksklick auf Chat-Icon",
                    description: "Was beim Linksklick auf das Icon passieren soll.",
                    global: "Global umschalten",
                    channel: "Für Kanal umschalten",
                    guild: "Für Server umschalten",
                    settings: "Plugin-Einstellungen öffnen"
                },
                chatIconMiddleClickAction: {
                    label: "Mittelklick auf Chat-Icon",
                    description: "Was beim Mittelklick auf das Icon passieren soll.",
                    global: "Global umschalten",
                    channel: "Für Kanal umschalten",
                    guild: "Für Server umschalten",
                    settings: "Plugin-Einstellungen öffnen"
                },
                chatIconRightClickAction: {
                    label: "Rechtsklick auf Chat-Icon",
                    description: "Was beim Rechtsklick auf das Icon passieren soll.",
                    global: "Global umschalten",
                    channel: "Für Kanal umschalten",
                    guild: "Für Server umschalten",
                    settings: "Plugin-Einstellungen öffnen"
                },
                chatContextMenu: {
                    label: "Chat-Kontextmenü",
                    description: "Zeigt ein Menü im Kontextmenü an, um Einstellungen unterwegs zu ändern."
                },
                defaultHidden: {
                    label: "Standardmäßig versteckt",
                    description: "Wenn aktiviert, wird dein Tippen überall versteckt, außer an den unten gelisteten 'Deaktivierten Orten'. Wenn deaktiviert, ist dein Tippen überall sichtbar, außer an den 'Aktivierten Orten'."
                },
                enabledLocations: {
                    label: "Aktivierte Orte",
                    description: "IDs (kommagetrennt), für die das Verstecken aktiv sein soll (falls oben deaktiviert)."
                },
                disabledLocations: {
                    label: "Deaktivierte Orte",
                    description: "IDs (kommagetrennt), für die das Verstecken inaktiv sein soll (falls oben aktiviert)."
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Lass es auf Discord schneien!",
            about: {
                title: "Information",
                paragraph: "Dieses Plugin fügt einen weihnachtlichen Schneefall-Effekt über der Discord-Oberfläche hinzu.",
                note: "HINWEIS: Auf leistungsschwächeren Systemen kann dieser Effekt zu Verzögerungen (Lag) führen."
            },
            option: {
                typeOfSnow: {
                    label: "Schnee-Art",
                    description: "Ändert die Art des Schnees (beeinflusst die Performance).",
                    solid: "Solide Kreise (Beste Performance)",
                    text: "Text/Sternchen (Mittlere Performance)",
                    emoji: "Bild/Emoji (Niedrigste Performance)"
                },
                maxSize: {
                    label: "Maximale Größe",
                    description: "Maximale Größe der Schneeflocken."
                },
                speed: {
                    label: "Geschwindigkeit",
                    description: "Fallgeschwindigkeit (höher = schneller)."
                },
                flakesPerSecond: {
                    label: "Flocken pro Sekunde",
                    description: "Dichte des Schneefalls (höher = mehr Flocken)."
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Sortiert Freundesanfragen nach dem Eingangsdatum.",
            tooltip: "Hinzugefügt am {{date}}",
            option: {
                showDates: {
                    label: "Daten anzeigen",
                    description: "Zeigt das Datum bei Freundesanfragen an."
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Protokolliert alle Soundboard-Sounds, die in einem Sprachkanal abgespielt werden, und ermöglicht deren Download.",
            tooltip: "Soundboard-Protokoll öffnen",
            option: {
                savedIds: {
                    label: "Gespeicherte Sound-IDs",
                    description: "Anzahl der IDs, die gleichzeitig gespeichert werden (0 = unendlich).",
                    notNumber: "Der Wert ist keine Zahl.",
                    cantDecimal: "Der Wert darf keine Dezimalzahl sein.",
                    cantNegative: "Der Wert darf nicht negativ sein.",
                    heading: "Anzahl der gleichzeitig gespeicherten Soundboard-IDs",
                    warning: "Achtung! Ein niedrigerer Wert setzt das Protokoll zurück!",
                    placeholder: "Zahl eingeben"
                },
                fileType: {
                    label: "Dateityp",
                    description: "Das Format, in dem die Datei gespeichert werden soll."
                },
                openLogs: {
                    label: "Protokolle öffnen",
                    description: "Zeigt die Protokolle an.",
                    button: "Protokolle öffnen"
                },
                soundVolume: {
                    label: "Sound-Lautstärke",
                    description: "Lautstärke des Bestätigungstons beim Umschalten (0 zum Deaktivieren)."
                },
                iconLocation: {
                    label: "Icon-Position",
                    description: "Wähle, wo das Icon angezeigt werden soll (erfordert Neustart).",
                    toolbar: "Symbolleiste",
                    chatInput: "Chat-Eingabefeld"
                }
            },
            modal: {
                title: "Soundboard-Protokoll",
                loading: "Lade Sounds...",
                noLogs: "Noch keine Sounds protokolliert. Tritt einem Sprachkanal bei!",
                clearLogs: "Protokoll leeren",
                played: "{{time}} Mal abgespielt",
                last: "Zuletzt gespielt:",
                also: "Ebenfalls gespielt:",
                download: "Download",
                copyId: "ID kopieren",
                copied: "ID in Zwischenablage kopiert!",
                playSound: "Sound abspielen",
                moreUsers: "Andere Personen haben diesen Sound genutzt...",
                volume: "Soundboard-Lautstärke"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Teilt große Nachrichten automatisch in mehrere Teile auf, um Discords Zeichenlimit einzuhalten.",
            option: {
                maxLength: {
                    label: "Maximale Nachrichtenlänge",
                    description: "Maximale Länge vor der Teilung. Auf 0 setzen für automatische Erkennung."
                },
                disableFileConversion: {
                    label: "Datei-Konvertierung deaktivieren",
                    description: "Deaktiviert das automatische Erstellen von Textdateien bei sehr langen Nachrichten."
                },
                sendDelay: {
                    label: "Sende-Verzögerung",
                    description: "Verzögerung zwischen den einzelnen Teilen in Sekunden."
                },
                hardSplit: {
                    label: "Harter Split",
                    description: "Wenn aktiviert, wird exakt am letzten Zeichen getrennt anstatt am letzten Leerzeichen."
                },
                splitInSlowmode: {
                    label: "Teilen bei Slowmode",
                    description: "Sollen Nachrichten auch geteilt werden, wenn der Kanal Slowmode hat?"
                },
                slowmodeMax: {
                    label: "Max. Slowmode-Dauer",
                    description: "Maximale Slowmode-Zeit, bei der das Teilen noch erlaubt ist."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Fügt einen Button hinzu, um die Sichtbarkeit deiner Spotify-Aktivität schnell umzuschalten.",
            tooltip: {
                enable: "Spotify-Aktivität einschalten",
                disable: "Spotify-Aktivität ausschalten"
            },
            option: {
                location: {
                    label: "Position",
                    description: "Wo der Button angezeigt werden soll.",
                    panel: "Neben Stumm/Taub",
                    toolbox: "Plexcord Toolbox"
                },
                activityStatus: {
                    label: "Aktivitätsstatus",
                    description: "Der aktuelle Status deiner Spotify-Aktivität."
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Ermöglicht kostenloses 'Listen Along', deaktiviert das automatische Pausieren im Voice-Chat und hält die Aktivität auch im Idle-Modus aufrecht.",
            option: {
                noSpotifyAutoPause: {
                    label: "Kein Spotify Auto-Pause",
                    description: "Deaktiviert das automatische Pausieren von Spotify durch Discord."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Spotify-Aktivität bei Idle behalten",
                    description: "Hält die Spotify-Aktivität aufrecht, wenn du als abwesend (Idle) markiert bist."
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Teile deinen aktuellen Spotify-Track, das Album oder den Künstler über Slash-Befehle (/track, /album, /artist).",
            command: {
                makeCommand: {
                    description: "Teile deine(n) aktuelle(n) Spotify-{{type}} im Chat.",
                    track: "Du hörst gerade keinen Song auf Spotify.",
                    find: "Song konnte auf Spotify nicht gefunden werden."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Fügt den Punkt 'Startup Timings' zum Einstellungsmenü hinzu (zeigt Ladezeiten beim Start).",
            modal: {
                title: "Start-Zeitmessungen",
                ended: "Trace beendet um:",
                start: "Start",
                interval: "Intervall",
                delta: "Delta",
                event: "Ereignis",
                serverTrace: "Server-Trace",
                loading: "Lädt..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Fügt Benachrichtigungen bei Statusänderungen von Benutzern hinzu.",
            loading: "Lädt...",
            option: {
                notificationsSound: {
                    label: "Benachrichtigungston",
                    description: "Soll bei Statusänderungen ein Ton abgespielt werden?"
                },
                usersList: {
                    label: "Benutzerliste",
                    description: "Liste der überwachten Benutzer. Rechtsklick auf einen Benutzer -> 'Status Notifications', um ihn hinzuzufügen.",
                    empty: "Keine Benutzer überwacht. Klicke mit der rechten Maustaste auf einen Benutzer und wähle 'Status Notifications', um ihn hinzuzufügen."
                }
            },
            context: {
                label: "Status-Benachrichtigungen",
                notifications: "Benachrichtigungen",
                type: {
                    all: "Alle",
                    online: "Online",
                    offline: "Offline",
                    none: "Keine"
                }
            },
            notification: {
                unknownUser: "Benutzer",
                title: "Status-Benachrichtigungen"
            },
            status: {
                online: "Online",
                idle: "Abwesend",
                dnd: "Bitte nicht stören",
                offline: "Offline",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Ermöglicht es, Status-Presets zu speichern und später schnell wieder festzulegen.",
            button: {
                remember: "Status merken"
            },
            context: {
                edit: "Eigene Presets bearbeiten",
                set: "Eigenen Status setzen"
            },
            notification: {
                successfully: "Status erfolgreich gespeichert."
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Synchronisiere deinen Discord-Status mit Steam! (Online, Abwesend, Unsichtbar oder Offline).",
            option: {
                onlineStatus: {
                    label: "Online-Status",
                    description: "Steam-Status wenn auf Discord 'Online'."
                },
                idleStatus: {
                    label: "Idle-Status",
                    description: "Steam-Status wenn auf Discord 'Abwesend'."
                },
                dndStatus: {
                    label: "DND-Status",
                    description: "Steam-Status wenn auf Discord 'Bitte nicht stören'."
                },
                invisibleStatus: {
                    label: "Unsichtbar-Status",
                    description: "Steam-Status wenn auf Discord 'Unsichtbar'."
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Unsichtbar bei versteckter Aktivität",
                    description: "Setzt Steam auf Unsichtbar, wenn die Discord-Aktivität ausgeblendet ist."
                }
            },
            status: {
                online: "Online",
                away: "Abwesend",
                invisible: "Unsichtbar",
                offline: "Offline (Steam-Chat trennen)",
                disabled: "Deaktiviert"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Ermöglicht das Blockieren der Anzeige von Stickern.",
            option: {
                showGif: {
                    label: "GIF anzeigen",
                    description: "Ob stattdessen ein schickes Katzen-GIF angezeigt werden soll."
                },
                showMessage: {
                    label: "Nachricht anzeigen",
                    description: "Ob eine Nachricht mit der ID des blockierten Stickers angezeigt werden soll."
                },
                showButton: {
                    label: "Button anzeigen",
                    description: "Ob ein Button zum Entblocken angezeigt werden soll."
                },
                blockedStickers: {
                    label: "Blockierte Sticker",
                    description: "Die Liste der blockierten Sticker-IDs."
                }
            },
            modal: {
                blocked: "Sticker blockiert. ID: {{id}} NAME: {{name}}",
                unblock: "{{name}} entblocken"
            },
            context: {
                blockSticker: "Sticker blockieren",
                unblockSticker: "Sticker entblocken"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Bewirkt, dass das Auswählen eines Stickers diesen in das Chatfeld einfügt, anstatt ihn sofort abzusenden."
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Aktiviert den Streamer-Modus automatisch, sobald du auf Discord einen Stream startest."
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Deaktiviere spezifische Codecs für deine Streams.",
            option: {
                disableAv1Codec: {
                    label: "AV1 Codec deaktivieren",
                    description: "Verhindert, dass Discord AV1 für das Streaming nutzt."
                },
                disableH265Codec: {
                    label: "H265 Codec deaktivieren",
                    description: "Verhindert, dass Discord H265 für das Streaming nutzt."
                },
                disableH264Codec: {
                    label: "H264 Codec deaktivieren",
                    description: "Verhindert, dass Discord H264 für das Streaming nutzt."
                },
                disableVP8Codec: {
                    label: "VP8 Codec deaktivieren",
                    description: "Verhindert, dass Discord VP8 für das Streaming nutzt."
                },
                disableVP9Codec: {
                    label: "VP9 Codec deaktivieren",
                    description: "Verhindert, dass Discord VP9 für das Streaming nutzt."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Passe das Limit für gleichzeitig abgespielte Super-Reaktionen an und aktiviere Super-Reaktionen standardmäßig.",
            option: {
                superReactByDefault: {
                    label: "Standardmäßig Super-Reaktion",
                    description: "Die Reaktions-Auswahl öffnet standardmäßig die Super-Reaktionen."
                },
                unlimitedSuperReactionPlaying: {
                    label: "Unbegrenzte Super-Reaktionen",
                    description: "Entfernt das Limit für gleichzeitig abgespielte Super-Reaktion-Animationen."
                },
                superReactionPlayingLimit: {
                    label: "Limit für Super-Reaktionen",
                    description: "Maximale Anzahl gleichzeitiger Animationen. Auf 0 setzen, um sie ganz zu deaktivieren."
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Ersetze Text in deinen Nachrichten. Vorgefertigte Regeln findest du im Kanal #textreplace-rules auf dem Plexcord-Server.",
            option: {
                replace: {
                    label: "Ersetzen",
                    string: "Einfache Ersetzungen",
                    stringDescription: "Einfache Suchen-und-Ersetzen-Regeln. Zum Beispiel 'brb' finden und durch 'be right back' ersetzen",
                    regex: "Regex-Ersetzungen",
                    regexDescription: "Leistungsstärkere Ersetzungen mit regulären Ausdrücken. Dieser Abschnitt ist für fortgeschrittene Nutzer. Wenn du es nicht verstehst, kannst du es einfach ignorieren",
                    myMessages: "Auf eigene Nachrichten anwenden (für alle sichtbar)",
                    othersMessages: "Auf Nachrichten anderer anwenden (nur für dich sichtbar)",
                    allMessages: "Auf alle Nachrichten anwenden"
                },
                stringRules: {
                    label: "String-Regeln",
                    description: "Regeln für das Ersetzen von Text mittels String-Matching."
                },
                regexRules: {
                    label: "Regex-Regeln",
                    description: "Regeln für das Ersetzen von Text mittels regulärer Ausdrücke."
                }
            },
            modal: {
                title: "Regeln testen",
                find: "Suchen",
                findRegex: "Regex-Muster",
                findText: "Zu ersetzender Text",
                replace: "Ersetzen",
                replaceDescription: "Der Text, der den gefundenen Text ersetzt",
                includes: "Nur wenn enthält",
                includesDescription: "Diese Regel wird nur angewendet, wenn die Nachricht diesen Text enthält. Dies ist optional",
                type: "Nachricht eingeben",
                applied: "Nachricht mit angewendeten Regeln",
                delete: "Regel löschen",
                add: "Regel hinzufügen",
                empty: "Leere Regel",
                rule: "Regel",
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Fügt verschiedenen Elementen Datenattribute für Theme-Zwecke hinzu."
        },
        timezones: {
            name: "Timezones",
            description: "Zeigt die lokale Zeit von Benutzern in Profilen und Nachrichtenkopfzeilen an.",
            button: {
                wantToSave: "Möchtest du deine Zeitzone in der Datenbank speichern? Klicke hier, um sie festzulegen.",
                yourLocalTimezone: "(Deine lokale Zeitzone)"
            },
            context: {
                set: "Lokale Zeitzone festlegen"
            },
            toast: {
                refresh: {
                    successfully: "Zeitzonen erfolgreich aktualisiert!",
                    failed: "Aktualisierung der Zeitzonen fehlgeschlagen!",
                    failedTo: "Zeitzonen konnten nicht aktualisiert werden."
                },
                update: {
                    successfully: "Zeitzone erfolgreich aktualisiert!",
                    failed: "Zeitzone konnte nicht festgelegt werden."
                },
                delete: {
                    successfully: "Zeitzone erfolgreich gelöscht!",
                    failed: "Zeitzone konnte nicht gelöscht werden."
                },
                auth: {
                    failed: "Authentifizierung fehlgeschlagen.",
                    success: "Autorisierung erfolgreich!"
                }
            },
            toolbox: {
                set: "Datenbank-Zeitzone festlegen",
                refresh: "Datenbank-Zeitzonen aktualisieren"
            },
            option: {
                showOwnTimezone: {
                    label: "Eigene Zeitzone anzeigen",
                    description: "Zeigt deine eigene Zeitzone in Profilen und Nachrichtenkopfzeilen an."
                },
                twentyFourHourTime: {
                    label: "24-Stunden-Format",
                    description: "Zeit im 24-Stunden-Format anzeigen."
                },
                showTimezoneInfo: {
                    label: "Zeitzonen-Info anzeigen",
                    description: "Zeigt Zeitzonen-Informationen neben der Uhrzeit an."
                },
                showMessageHeaderTime: {
                    label: "Zeit im Nachrichtenkopf anzeigen",
                    description: "Zeigt die Uhrzeit in den Kopfzeilen von Nachrichten an."
                },
                showProfileTime: {
                    label: "Zeit im Profil anzeigen",
                    description: "Zeigt die Uhrzeit in Benutzerprofilen an."
                },
                useDatabase: {
                    label: "Datenbank-Zeitzone verwenden",
                    description: "Aktiviert die Datenbank zum Abrufen von Benutzer-Zeitzonen."
                },
                preferDatabaseOverLocal: {
                    label: "Datenbank bevorzugen",
                    description: "Bevorzugt die Datenbank gegenüber dem lokalen Speicher für Zeitzonen."
                },
                databaseUrl: {
                    label: "Datenbank-URL",
                    description: "Die URL des Zeitzonen-Datenbankservers."
                },
                setDatabaseTimezone: {
                    label: "Datenbank-Zeitzone festlegen",
                    description: "Lege deine Zeitzone in der Datenbank fest.",
                    setTimezone: "Zeitzone in Datenbank speichern"
                },
                resetDatabaseTimezone: {
                    label: "Datenbank-Zeitzone zurücksetzen",
                    description: "Setzt deine Zeitzone in der Datenbank zurück.",
                    failed: "Datenbank-Zeitzone konnte nicht zurückgesetzt werden."
                },
                askedTimezone: {
                    label: "Nach Zeitzone gefragt",
                    description: "Gibt an, ob der Benutzer bereits gebeten wurde, seine Zeitzone festzulegen."
                }
            },
            modal: {
                title: "Zeitzonen",
                select: "Zeitzone auswählen",
                selectPlaceholder: "Wähle eine Zeitzone",
                delete: "Zeitzone löschen",
                save: "Speichern"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Zeigt eine Toast-Benachrichtigung an, wenn du eine Direktnachricht erhältst.",
            notification: {
                call: "Hat einen Anruf mit dir gestartet!",
                recipient: {
                    add: "{{target}} wurde von {{actor}} zur Gruppe hinzugefügt.",
                    remove: "{{target}} wurde von {{actor}} aus der Gruppe entfernt.",
                    left: "Hat die Gruppe verlassen."
                },
                channel: {
                    change: {
                        name: "Hat den Kanalnamen in {{name}} geändert.",
                        icon: "Hat das Kanal-Icon geändert."
                    },
                    pinned: "Hat eine Nachricht angeheftet."
                },
                sent: {
                    embed: "Hat ein Embed gesendet.",
                    sticker: "Hat einen Sticker gesendet.",
                    attachment: "Anhang:"
                },
                redacted: "Nachrichteninhalt wurde geschwärzt/entfernt.",
                friend: {
                    accept: "{{user}} ist jetzt dein Freund",
                    acceptBody: "Du kannst ihm/ihr nun direkt Nachrichten senden.",
                    request: "{{user}} hat dir eine Freundesanfrage gesendet.",
                    requestBody: "Du kannst sie im Freunde-Tab annehmen oder ablehnen."
                },
                example: {
                    title: "Beispiel-Benachrichtigung",
                    body: "Dies ist ein beispielhafter Benachrichtigungstext."
                }
            },
            modal: {
                dismiss: "Benachrichtigung schließen",
                attachments: "{{attachments}} Anhang/Anhänge {{were}} gesendet."
            },
            option: {
                position: {
                    label: "Position",
                    description: "Die Position der Toast-Benachrichtigung",
                    topRight: "Oben rechts",
                    topLeft: "Oben links",
                    bottomRight: "Unten rechts",
                    bottomLeft: "Unten links"
                },
                timeout: {
                    label: "Anzeigedauer",
                    description: "Zeit in Sekunden, die Benachrichtigungen angezeigt werden."
                },
                opacity: {
                    label: "Deckkraft",
                    description: "Die Deckkraft der Toast-Benachrichtigung."
                },
                determineServerNotifications: {
                    label: "Server-Einstellungen berücksichtigen",
                    description: "Zeigt Benachrichtigungen basierend auf den Server-Benachrichtigungseinstellungen an."
                },
                directMessages: {
                    label: "Direktnachrichten",
                    description: "Benachrichtigungen für Direktnachrichten anzeigen."
                },
                groupMessages: {
                    label: "Gruppennachrichten",
                    description: "Benachrichtigungen für Gruppennachrichten anzeigen."
                },
                friendServerNotifications: {
                    label: "Freunde & Server Benachrichtigungen",
                    description: "Benachrichtigungen anzeigen, wenn Freunde Nachrichten auf gemeinsamen Servern senden."
                },
                friendActivity: {
                    label: "Freundesaktivität",
                    description: "Benachrichtigungen beim Hinzufügen von Personen oder beim Erhalt von Freundesanfragen."
                },
                notifyFor: {
                    label: "Benachrichtigen für",
                    description: "Liste von Kanal-IDs für Benachrichtigungen (mit Kommas trennen)."
                },
                ignoreUsers: {
                    label: "Benutzer ignorieren",
                    description: "Liste von Benutzer-IDs, deren Benachrichtigungen ignoriert werden sollen (mit Kommas trennen)."
                },
                exampleButton: {
                    label: "Beispiel-Button",
                    description: "Zeigt eine Test-Benachrichtigung an.",
                    show: "Beispiel-Benachrichtigung anzeigen"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Fügt einen anpassbaren Hotkey zum Umschalten der Webcam hinzu.",
            option: {
                keyBind: {
                    label: "Hotkey",
                    description: "Die Taste zum Umschalten der Webcam."
                },
                reqCtrl: {
                    label: "Erfordert Strg",
                    description: "Strg-Taste muss gedrückt gehalten werden."
                },
                reqShift: {
                    label: "Erfordert Umschalt",
                    description: "Umschalttaste muss gedrückt gehalten werden."
                },
                reqAlt: {
                    label: "Erfordert Alt",
                    description: "Alt-Taste muss gedrückt gehalten werden."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Übersetze Nachrichten mit Google Translate oder DeepL.",
            tooltip: {
                label: "Übersetzen"
            },
            context: {
                translate: "Übersetzen",
                open: "Übersetzungs-Fenster öffnen",
                auto: "Auto-Übersetzung aktiviert"
            },
            option: {
                receivedInput: {
                    label: "Eingangssprache",
                    description: "Sprache, von der empfangene Nachrichten übersetzt werden sollen."
                },
                receivedOutput: {
                    label: "Ausgangssprache (Empfang)",
                    description: "Sprache, in die empfangene Nachrichten übersetzt werden sollen."
                },
                sentInput: {
                    label: "Eingangssprache (Eigene)",
                    description: "Sprache, von der deine eigenen Nachrichten übersetzt werden sollen."
                },
                sentOutput: {
                    label: "Ausgangssprache (Eigene)",
                    description: "Sprache, in die deine eigenen Nachrichten übersetzt werden sollen."
                },
                service: {
                    label: "Übersetzungsdienst",
                    description: "DeepL erfordert einen kostenpflichtigen API-Key von DeepL Pro.",
                    descriptionWeb: "Übersetzungsdienst (Wird im Web nicht unterstützt!)",
                    google: "Google Translate",
                    deepl: "DeepL Free",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "DeepL API-Key",
                    description: "Dein DeepL API-Schlüssel.",
                    placeholder: "Hol dir deinen Key unter https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Auto-Übersetzung",
                    description: "Übersetzt deine Nachrichten automatisch vor dem Senden. Kann auch per Umschalt/Rechtsklick auf den Button getoggelt werden."
                },
                showAutoTranslateTooltip: {
                    label: "Auto-Übersetzungs-Tooltip anzeigen",
                    description: "Zeigt einen Hinweis am Button an, wenn eine Nachricht automatisch übersetzt wurde."
                }
            },
            modal: {
                title: "Übersetzen",
                select: "Sprache auswählen",
                auto: "Auto-Übersetzung",
                dismiss: "Schließen",
                translated: "übersetzt aus dem {{from}}",
                failed: {
                    to: "Übersetzung von {{text}} fehlgeschlagen",
                    connect: "Verbindung zur DeepL API fehlgeschlagen:"
                },
                wrong: "Etwas ist schiefgelaufen. Falls das Problem weiterhin besteht, prüfe bitte die Konsole oder frage im Support-Server nach.",
                deepl: {
                    api: "DeepL API-Kontingent erschöpft. Fallback auf Google Translate.",
                    apiKey: "DeepL API-Key nicht festgelegt. Zurücksetzen auf Google.",
                    auth: "Ungültiger DeepL API-Key oder falsche Version."
                },
                autoTranslateEnabled: {
                    title: "Plexcord Auto-Übersetzung aktiviert",
                    body: "Du hast gerade die Auto-Übersetzung aktiviert! Jede Nachricht wird vor dem Absenden automatisch übersetzt.",
                    confirm: "Auto-Übersetzung deaktivieren",
                    cancel: "Verstanden",
                    secondaryConfirm: "Nicht mehr anzeigen"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Fügt eine Anzeige hinzu, wenn jemand in einem Kanal tippt.",
            option: {
                includeCurrentChannel: {
                    label: "Aktuellen Kanal einbeziehen",
                    description: "Gibt an, ob die Tipp-Anzeige auch für den aktuell ausgewählten Kanal angezeigt werden soll."
                },
                includeMutedChannels: {
                    label: "Stummgeschaltete Kanäle einbeziehen",
                    description: "Gibt an, ob die Tipp-Anzeige für stummgeschaltete Kanäle angezeigt werden soll."
                },
                includeIgnoredUsers: {
                    label: "Ignorierte Benutzer einbeziehen",
                    description: "Gibt an, ob die Tipp-Anzeige für ignorierte Benutzer angezeigt werden soll."
                },
                includeBlockedUsers: {
                    label: "Blockierte Benutzer einbeziehen",
                    description: "Gibt an, ob die Tipp-Anzeige für blockierte Benutzer angezeigt werden soll."
                },
                indicatorMode: {
                    label: "Anzeige-Modus",
                    description: "Wie soll die Anzeige dargestellt werden?",
                    both: "Avatare und animierte Punkte",
                    dots: "Animierte Punkte",
                    avatars: "Avatare"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Zeigt Avatare und Rollenfarben in der Tipp-Anzeige an.",
            option: {
                showAvatars: {
                    label: "Mehrere Benutzer anzeigen",
                    description: "Zeigt Avatare in der Tipp-Anzeige an."
                },
                showRoleColors: {
                    label: "Rollenfarben anzeigen",
                    description: "Zeigt Rollenfarben in der Tipp-Anzeige an."
                },
                alternativeFormatting: {
                    label: "Alternatives Format",
                    description: "Zeigt eine nützlichere Nachricht an, wenn mehrere Benutzer gleichzeitig tippen."
                },
                amITyping: {
                    label: "Tippe ich gerade?",
                    description: "Zeigt dir an, ob andere sehen können, dass du gerade tippst."
                }
            },
            others: {
                areTyping: "und {{count}} andere tippen..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Entfernt führende Einrückungen aus Codeblöcken."
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Konvertiert metrische Einheiten in imperiale Einheiten und umgekehrt.",
            tooltip: "Einheiten konvertieren",
            option: {
                myUnits: {
                    label: "Meine Einheiten",
                    description: "Die Einheiten, die du verwendest und in die konvertiert werden soll (Standard: Imperial).",
                    imperial: "Imperial (Zoll, Meilen, etc.)",
                    metric: "Metrisch (Zentimeter, Kilometer, etc.)"
                }
            },
            button: {
                dismiss: "Schließen"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Erhöht die Anzahl der Konten, die du hinzufügen kannst.",
            option: {
                maxAccounts: {
                    label: "Maximale Konten",
                    description: "Anzahl der Konten, die hinzugefügt werden können (0 für kein Limit)."
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Ermöglicht es, beim Zuschneiden deines Avatars weiter hineinzuzoomen.",
            option: {
                zoomMultiplier: {
                    label: "Zoom-Multiplikator",
                    description: "Multiplikator für den Zoom."
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Ermöglicht es, unterdrückte Embeds in Nachrichten wieder einzublenden.",
            context: {
                unsuppress: "Embed einblenden",
                suppress: "Embed unterdrücken"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Zeigt zufällige nutzlose Informationen innerhalb von Discord an; Hotkeys und Intervalle sind anpassbar.",
            recording: "Aufnahme...",
            record: "Aufnehmen",
            option: {
                delay: {
                    label: "Benachrichtigungs-Intervall",
                    description: "Anzeige-Intervall der Benachrichtigungen in Minuten."
                },
                historyHotkey: {
                    label: "Verlauf-Panel Hotkey",
                    description: "Hotkey, um den Verlauf der zuvor angezeigten Fakten einzublenden."
                },
                randomFactHotkey: {
                    label: "Zufalls-Fakten Hotkey",
                    description: "Hotkey, um das Panel für zufällige Fakten zu öffnen."
                },
                sameFact: {
                    label: "Wiederholung vermeiden",
                    description: "Vermeidet das Anzeigen desselben Faktums, bis alle verfügbaren Fakten einmal gezeigt wurden."
                },
                lastNFacts: {
                    label: "Anzahl der zu vermeidenden Fakten",
                    description: "Anzahl der zuletzt gezeigten Fakten, die nicht wiederholt werden sollen (0 = unbegrenzt)."
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Noch keine Fakten vorhanden. Nutze den Hotkey oder warte ab.",
                    source: "Quelle"
                },
                showRandom: "Zufälligen anzeigen",
                close: "Schließen"
            },
            notification: {
                title: "Wusstest du schon?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Zeigt Pronomen von Benutzern in den Nachrichtenkopfzeilen an.",
            option: {
                pronounsFormat: {
                    label: "Format der Pronomen",
                    description: "Das Format, in dem Pronomen im Chat erscheinen sollen.",
                    lowercase: "Kleingeschrieben",
                    capitalized: "Großgeschrieben"
                },
                showSelf: {
                    label: "Eigene anzeigen",
                    description: "Aktiviert oder deaktiviert das Anzeigen deiner eigenen Pronomen."
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Zeigt einen Indikator an, wenn ein Benutzer in einem Sprachkanal ist.",
            option: {
                showInUserProfileModal: {
                    label: "Im Benutzerprofil anzeigen",
                    description: "Zeigt den Sprachkanal-Indikator im Profil neben dem Namen an."
                },
                showInMemberList: {
                    label: "In der Mitgliederliste anzeigen",
                    description: "Zeigt den Indikator in der Mitglieder- und DM-Liste an."
                },
                showInMessages: {
                    label: "In Nachrichten anzeigen",
                    description: "Zeigt den Indikator direkt bei den Chat-Nachrichten an."
                }
            },
            modal: {
                inVoiceChat: "Im Voice-Chat"
            },
            notification: {
                cannotJoin: "Du kannst dem Sprachkanal des Benutzers nicht beitreten."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Zeigt Benutzer-Banner von USRBG an, sodass jeder ein Banner ohne Nitro haben kann.",
            option: {
                nitroFirst: {
                    label: "Nitro bevorzugen",
                    description: "Welches Banner verwendet werden soll, wenn sowohl Nitro als auch USRBG vorhanden sind.",
                    nitro: "Nitro-Banner",
                    usrbg: "USRBG-Banner"
                },
                voiceBackground: {
                    label: "Sprachkanal-Hintergrund",
                    description: "Verwendet USRBG-Banner als Hintergründe im Voice-Chat."
                }
            },
            button: "Hol dir dein eigenes USRBG-Banner"
        },
        validReply: {
            name: "ValidReply",
            description: "Behebt den Fehler 'Nachricht konnte nicht geladen werden' beim Hovern über eine Antwort."
        },
        validUser: {
            name: "ValidUser",
            description: "Behebt Erwähnungen für unbekannte Benutzer, die als '@unknown-user' angezeigt werden (Hovern über eine Erwähnung zum Fixen).",
            badges: {
                discordBugHunter: "Discord Bug Hunter",
                moderatorProgramsAlumni: "Moderator Programs Alumni",
                discordStaff: "Discord Staff",
                hypeSquadEvents: "HypeSquad Events",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                partneredServerOwner: "Partner-Serverbesitzer",
                nitro: "Discord Nitro",
                earlySupporter: "Früher Unterstützer",
                earlyVerifiedBotDeveloper: "Früher verifizierter Bot-Entwickler"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Tritt Sprachkanälen per Doppelklick statt Einfachklick bei."
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Ansage per Sprachausgabe, wenn Benutzer Sprachkanäle betreten, verlassen oder verschieben.",
            option: {
                voice: {
                    label: "Stimme"
                },
                volume: {
                    label: "Lautstärke",
                    description: "Lautstärke des Erzählers."
                },
                rate: {
                    label: "Geschwindigkeit",
                    description: "Sprechgeschwindigkeit."
                },
                sayOwnName: {
                    label: "Eigenen Namen sagen",
                    description: "Eigenen Namen bei Aktionen mitsprechen."
                },
                latinOnly: {
                    label: "Nur Lateinische Zeichen",
                    description: "Entfernt nicht-lateinische Zeichen aus Namen vor der Ansage."
                },
                joinMessage: {
                    label: "Beitritts-Nachricht",
                    description: "Text beim Betreten."
                },
                leaveMessage: {
                    label: "Verlassens-Nachricht",
                    description: "Text beim Verlassen."
                },
                moveMessage: {
                    label: "Verschiebungs-Nachricht",
                    description: "Text beim Wechseln des Kanals."
                },
                muteMessage: {
                    label: "Stumm-Nachricht",
                    description: "Text beim Stummschalten (derzeit nur für sich selbst)."
                },
                unmuteMessage: {
                    label: "Entstumm-Nachricht",
                    description: "Text beim Entstummen."
                },
                deafenMessage: {
                    label: "Taub-Nachricht",
                    description: "Text beim Taubschalten."
                },
                undeafenMessage: {
                    label: "Enttaub-Nachricht",
                    description: "Text beim Aufheben der Taubschaltung."
                }
            },
            modal: {
                title: "Beispiel-Sounds abspielen",
                voiceTitle: "Stimme",
                voice: "Wähle eine Stimme aus",
                languageTitle: "Sprache",
                language: "Wähle eine Sprache aus",
                noVoice: "Keine Erzähler-Stimmen gefunden.",
                linuxNote: "Installiere speech-dispatcher oder espeak und starte Discord mit dem Flag --enable-speech-dispatcher.",
                someNarrator: "Versuche, Stimmen in den Erzähler-Einstellungen deines Betriebssystems zu installieren.",
                dontHaveEnglish: "Keine englischen Stimmen installiert; der Erzähler könnte seltsam klingen.",
                customiseMessages: "Du kannst die gesprochenen Nachrichten unten anpassen. Leere Felder deaktivieren die jeweilige Ansage.",
                placeholdersInfo: "Die Platzhalter {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} und {{CHANNEL}} werden durch den Namen, den Anzeigenamen, den Nickname bzw. den Kanalnamen ersetzt."
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Macht Avatare und Banner in Profilen anklickbar; fügt Einträge zum Anzeigen von Avataren/Bannern in Kontextmenüs hinzu.",
            context: {
                view: {
                    avatar: "Avatar anzeigen",
                    serverAvatar: "Server-Avatar anzeigen",
                    icon: "Icon anzeigen",
                    banner: "Banner anzeigen"
                }
            },
            option: {
                format: {
                    label: "Format",
                    description: "Wähle das Bildformat für nicht-animierte Bilder. Animierte Bilder verwenden immer .gif."
                },
                imgSize: {
                    label: "Bildgröße",
                    description: "Die zu verwendende Bildgröße."
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Kopiere und betrachte den Rohinhalt/Daten von Nachrichten, Kanälen oder Servern.",
            context: {
                copyLeft: "Rohdaten kopieren (Linksklick) / Rohdaten ansehen (Rechtsklick)",
                copyRight: "Rohdaten kopieren (Rechtsklick) / Rohdaten ansehen (Linksklick)",
                view: "Rohdaten ansehen"
            },
            option: {
                popoverButton: {
                    label: "Popover-Button",
                    description: "Zeigt einen Button im Nachrichten-Menü an, um die Rohdaten zu betrachten."
                },
                clickMethod: {
                    label: "Klick-Methode",
                    description: "Ändert die Button-Funktion zum Betrachten der Rohdaten.",
                    left: "Linksklick zum Betrachten der Rohdaten.",
                    right: "Rechtsklick zum Betrachten der Rohdaten."
                }
            },
            modal: {
                title: "Rohdaten ansehen",
                content: "Inhalt",
                data: "{{type}}-Daten",
                copied: "{{type}}-Daten in Zwischenablage kopiert!",
                copy: "{{type}}-JSON kopieren",
                copiedContent: "Inhalt in Zwischenablage kopiert!",
                copyContent: "Rohinhalt kopieren"
            },
            types: {
                message: "Nachricht",
                channel: "Kanal",
                guild: "Server",
                role: "Rolle",
                user: "Benutzer"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Ermöglicht schnelles DMen, Stummschalten oder Taubschalten von Benutzern direkt aus dem Voice-Panel.",
            option: {
                showChatButton: {
                    label: "Chat-Button anzeigen",
                    description: "Gibt an, ob der Chat-Button angezeigt werden soll."
                },
                showMuteButton: {
                    label: "Stummschalt-Button anzeigen",
                    description: "Gibt an, ob der Stummschalt-Button angezeigt werden soll."
                },
                showDeafenButton: {
                    label: "Taubschalt-Button anzeigen",
                    description: "Gibt an, ob der Taubschalt-Button angezeigt werden soll."
                },
                muteSoundboard: {
                    label: "Soundboard stummschalten",
                    description: "Schaltet deren Soundboard beim Klicken auf den Taubschalt-Button mit stumm."
                },
                disableVideo: {
                    label: "Video deaktivieren",
                    description: "Schaltet deren Video beim Klicken auf den Taubschalt-Button mit aus."
                },
                useServer: {
                    label: "Serverweite Aktion",
                    description: "Verwendet serverweites Stumm-/Taubschalten statt lokaler Aktionen, falls Berechtigungen vorhanden sind."
                },
                serverSelf: {
                    label: "Serverweite Eigenaktion",
                    description: "Dich selbst serverweit stumm-/taubschalten."
                },
                showButtonsSelf: {
                    label: "Buttons für sich selbst",
                    description: "Zeigt Buttons für den eigenen Benutzer an (öffnet DMs oder schaltet dich selbst stumm).",
                    display: "Anzeigen",
                    hide: "Verstecken",
                    disable: "Deaktivieren"
                },
                whichNameToShow: {
                    label: "Welcher Name",
                    description: "Wähle, ob der Nickname oder Benutzername im Tooltip angezeigt werden soll.",
                    global: "Anzeigename",
                    username: "Benutzername",
                    both: "Beide"
                },
                buttonPosition: {
                    label: "Button-Position",
                    description: "Wähle, wo die Buttons angezeigt werden sollen.",
                    left: "Links",
                    right: "Rechts"
                }
            },
            tooltip: {
                navigate: "Zu DMs navigieren",
                open: "DMs mit {{username}} öffnen",
                yourself: "dir selbst",
                serverMute: "Server-Stumm",
                serverDeafen: "Server-Taub",
                mute: "Stumm",
                deafen: "Taub",
                unmute: "Entstummen",
                undeafen: "Enttauben",
                serverUnmute: "Server-Entstummen",
                serverUndeafen: "Server-Enttauben"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Protokolliert, wer Sprachkanäle betritt oder verlässt.",
            context: {
                view: "Kanal-Protokoll ansehen"
            },
            modal: {
                joined: "Betrat <#{{channel}}>",
                left: "Verließ <#{{channel}}>",
                movedTo: "Verschoben nach <#{{channel}}>",
                movedFrom: "Verschoben aus <#{{channel}}>",
                noLogs: "Keine Protokolle vorhanden.",
                logs: "{{channel}} Protokolle"
            },
            option: {
                mode: {
                    label: "Modus",
                    description: "Wie das Protokoll angezeigt werden soll.",
                    menu: "Protokoll-Menü",
                    associated: "Direkt im zugehörigen Chat",
                    both: "Sowohl im Chat als auch im Menü"
                },
                voiceChannelChatSelf: {
                    label: "Eigene Aktionen im Kanal-Chat",
                    description: "Protokolliert deine eigenen Sprachkanal-Ereignisse im Chat."
                },
                voiceChannelChatSilent: {
                    label: "Stumme Kanal-Chat Logs",
                    description: "Nachrichten über Beitritt/Verlassen im Kanal-Chat erfolgen ohne Benachrichtigungston."
                },
                voiceChannelChatSilentSelf: {
                    label: "Eigene stumme Kanal-Chat Logs",
                    description: "Deine eigenen Ereignisse im Chat sind stumm, wenn du dich im Kanal befindest."
                },
                ignoreBlockedUsers: {
                    label: "Blockierte Benutzer ignorieren",
                    description: "Blockierte Benutzer nicht protokollieren."
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Ermöglicht Massenaktionen für einen gesamten Kanal (Verschieben, Stummschalten, Trennen, etc.).",
            option: {
                waitAfter: {
                    label: "Warten nach Aktion",
                    description: "Anzahl der API-Aktionen vor einer Pause (um Rate-Limits zu vermeiden)."
                },
                waitSeconds: {
                    label: "Wartezeit (Sekunden)",
                    description: "Zeit zwischen den Aktionen in Sekunden."
                }
            },
            context: {
                voiceTools: "Sprach-Tools",
                mentionAll: "Alle erwähnen",
                disconnectAll: "Alle trennen",
                muteAll: "Alle stummschalten",
                unmuteAll: "Alle entstummen",
                deafenAll: "Alle taubschalten",
                undeafenAll: "Alle enttauben",
                moveAll: "Alle verschieben"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Fügt Sprachnachrichten eine Download-Option hinzu (öffnet einen neuen Browser-Tab).",
            context: {
                download: "Sprachnachricht herunterladen"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Ermöglicht das Senden von Sprachnachrichten wie auf dem Handy. Rechtsklick auf den Upload-Button -> Sprachnachricht senden.",
            option: {
                noiseSuppression: {
                    label: "Rauschunterdrückung",
                    description: "Unterdrückt Hintergrundgeräusche."
                },
                echoCancellation: {
                    label: "Echounterdrückung",
                    description: "Verhindert Echos bei der Aufnahme."
                }
            },
            notification: {
                failed: {
                    upload: "Upload der Sprachnachricht fehlgeschlagen.",
                    start: "Aufnahme konnte nicht gestartet werden.",
                    finish: "Aufnahme konnte nicht beendet werden."
                }
            },
            context: {
                sendVoiceMessage: "Sprachnachricht senden",
                missingPermissions: "(Fehlende Berechtigungen)"
            },
            modal: {
                record: "Sprachnachricht aufnehmen",
                upload: "Datei hochladen",
                preview: "Vorschau",
                failed: "Audiodatei konnte nicht verarbeitet werden:",
                oggOpus: "Sprachnachrichten müssen OggOpus sein, um auf iOS spielbar zu sein. Diese Datei ist vom Typ {{type}}.",
                fix: "Konvertiere sie zuerst zu OggOpus, zum Beispiel über {{link}}.",
                sending: "Sprachnachricht wird gesendet... Bitte warten.",
                stop: "Aufnahme stoppen",
                start: "Aufnahme starten",
                resume: "Aufnahme fortsetzen",
                pause: "Aufnahme pausieren",
                recording: "AUFNAHME",
                send: "Senden"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Ermöglicht es, die Benutzer- und Stream-Lautstärke über das Standardmaximum hinaus zu erhöhen.",
            option: {
                multiplier: {
                    label: "Multiplikator",
                    description: "Lautstärke-Multiplikator."
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Setze Hintergrundbilder für jeden Kanal, Benutzer oder Server.",
            option: {
                globalDefault: {
                    label: "Globaler Standard",
                    description: "Setze ein globales Standard-Hintergrundbild für alle Kanäle."
                },
                stylingTips: {
                    label: "Styling-Tipps"
                }
            },
            context: {
                setWallpaper: "Hintergrundbild setzen",
                removeWallpaper: "Hintergrundbild entfernen"
            },
            modal: {
                set: "Hintergrundbild setzen",
                image: "Die Bild-URL",
                cancel: "Abbrechen",
                apply: "Anwenden",
                global: {
                    set: "Globales Hintergrundbild setzen",
                    remove: "Globales Standardbild entfernen",
                    reset: "Hintergrunddaten zurücksetzen"
                },
                web: {
                    info: "Lokale Dateien können genutzt werden, wenn sie im Plexcord-Theme-Ordner liegen (URL: plexcord:///themes/dateiname.ext).",
                    open: "Theme-Ordner öffnen",
                    quickCSS: "QuickCSS öffnen"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Fügt im Web fehlende Kontextmenüs für Links, Bilder und Textfelder wieder hinzu.",
            option: {
                addBack: {
                    label: "Wieder hinzufügen",
                    description: "Fügt Discord-Kontextmenüs für Bilder, Links und die Chatleiste wieder hinzu."
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Fügt fehlende Keybinds (Strg+T, Strg+Tab, etc.) für Web-Clients wieder hinzu. Funktioniert nur in Plextron/Legcord vollumfänglich."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Entfernt die Bitrate-Begrenzung von 2500kbps auf Chromium- und Plextron-Clients.",
            option: {
                experimentalAV1Support: {
                    label: "Experimenteller AV1-Support",
                    description: "Aktiviert AV1-Codec. Kann zu Problemen führen."
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Zeigt Avatare von Benutzern an, die auf eine Nachricht reagiert haben.",
            option: {
                avatarClick: {
                    label: "Avatar-Klick",
                    description: "Klickbare Avatare in Reaktionen umschalten."
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Hovere über das Screenshare-Icon, um zu sehen, wer deinen Stream schaut.",
            modal: {
                noSpectator: "Keine Zuschauer"
            },
            option: {
                showPanel: {
                    label: "Panel anzeigen",
                    description: "Zuschauer unter dem Screenshare-Panel auflisten."
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Schreibt den ersten Buchstaben jedes Satzes im Chatfeld automatisch groß.",
            option: {
                blockedWords: {
                    label: "Ignorierte Wörter",
                    description: "Wörter, die nicht großgeschrieben werden sollen (mit Komma trennen)."
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Leitet Discord-Benachrichtigungen an XSOverlay weiter (VR).",
            notification: {
                call: {
                    title: "{{user}} ruft dich an.",
                    content: "Eingehender Anruf"
                },
                message: {
                    reply: " (Antwort)",
                    embed: " [Embed] ",
                    onlyEmbed: "Nachrichten-Embed(s) gesendet",
                    sticker: " [Sticker] ",
                    onlySticker: "Sticker gesendet",
                    image: "Bild",
                    attachment: "Anhang"
                },
                test: {
                    title: "Hallo von Plexcord!",
                    content: "Dies ist eine Test-Benachrichtigung! *Explosion*",
                    button: "Test-Benachrichtigung senden"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket-Port",
                    description: "Port für WebSocket."
                },
                preferUDP: {
                    label: "UDP bevorzugen",
                    description: "Für ältere XSOverlay-Versionen ohne WebSocket-Support."
                },
                botNotifications: {
                    label: "Bot-Benachrichtigungen",
                    description: "Benachrichtigungen von Bots erlauben."
                },
                serverNotifications: {
                    label: "Server-Benachrichtigungen",
                    description: "Server-Benachrichtigungen erlauben."
                },
                dmNotifications: {
                    label: "DM-Benachrichtigungen",
                    description: "Direktnachrichten-Benachrichtigungen erlauben."
                },
                groupDmNotifications: {
                    label: "Gruppen-DM Benachrichtigungen",
                    description: "Gruppen-DM Benachrichtigungen erlauben."
                },
                callNotifications: {
                    label: "Anruf-Benachrichtigungen",
                    description: "Anruf-Benachrichtigungen erlauben."
                },
                pingColor: {
                    label: "Erwähnungs-Farbe",
                    description: "Farbe bei Benutzer-Erwähnung."
                },
                channelPingColor: {
                    label: "Kanal-Erwähnungs Farbe",
                    description: "Farbe bei Kanal-Erwähnung."
                },
                soundPath: {
                    label: "Sound-Pfad",
                    description: "Benachrichtigungston (default/warning/error)."
                },
                timeout: {
                    label: "Timeout",
                    description: "Dauer der Benachrichtigung (Sekunden)."
                },
                lengthBasedTimeout: {
                    label: "Längenabhängiges Timeout",
                    description: "Dauer basierend auf Nachrichtenlänge verlängern."
                },
                opacity: {
                    label: "Deckkraft",
                    description: "Transparenz der Benachrichtigung."
                },
                volume: {
                    label: "Lautstärke",
                    description: "Lautstärke."
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Blockiert Werbung in YouTube-Embeds und der 'Watch Together'-Aktivität via AdGuard."
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Fügt Beschreibungen zu YouTube-Video-Embeds hinzu."
        }
    }
} as const;

export default translations;
