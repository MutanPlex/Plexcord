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
        title: "Indstillinger",
        language: {
            selector: {
                label: "Sprog",
                description: "Vælg dit foretrukne sprog til Plexcord.",
                placeholder: "Vælg sprog"
            }
        },
        location: {
            label: "Placering af indstillinger",
            description: "Hvor Plexcord-indstillingssektionen skal placeres",
            top: "Helt øverst",
            nitro: {
                above: "Over Nitro-sektionen",
                below: "Under Nitro-sektionen"
            },
            activity: {
                above: "Over Aktivitetsindstillinger",
                below: "Under Aktivitetsindstillinger"
            },
            bottom: "Helt i bunden"
        },
        switches: {
            useQuickCss: {
                label: "Aktiver brugerdefineret CSS",
                description: "Indlæs brugerdefineret CSS fra QuickCSS-editoren. Dette giver dig mulighed for at tilpasse Discords udseende med dine egne styles."
            },
            enableReactDevtools: {
                label: "Aktiver React Developer Tools",
                description: "Aktiver React Developer Tools-udvidelsen til fejlfinding af Discords React-komponenter. Nyttigt til plugin-udvikling."
            },
            mainWindowFrameless: {
                label: "Deaktiver hovedvinduets ramme",
                description: "Fjern den indfødte vinduesramme for et renere look. Du kan stadig flytte vinduet ved at trække i titellinjen."
            },
            frameless: {
                label: "Deaktiver vinduesrammen",
                description: "Fjern den indfødte vinduesramme for et renere look. Du kan stadig flytte vinduet ved at trække i titellinjen."
            },
            winNativeTitleBar: {
                label: "Brug Windows' indfødte titellinje i stedet for Discords brugerdefinerede",
                description: "Erstat Discords brugerdefinerede titellinje med standard Windows-titellinjen. Dette kan forbedre kompatibiliteten med visse vindueshåndteringsværktøjer."
            },
            transparent: {
                label: "Aktiver vinduesgennemsigtighed",
                description: "Gør Discord-vinduet gennemsigtigt. Et tema, der understøtter gennemsigtighed, er påkrævet, ellers har dette ingen effekt.",
                isWindows: "Dette vil forhindre vinduet i at ændre størrelse og forhindre dig i at fastgøre vinduet til skærmkanter.",
                notWindows: "Dette vil forhindre vinduet i at ændre størrelse."
            },
            winCtrlQ: {
                label: "Registrer Ctrl+Q som genvej til at lukke Discord (Alternativ til Alt+F4)",
                description: "Tilføj Ctrl+Q som en tastaturgenvej til at lukke Discord. Dette giver et alternativ til Alt+F4 for hurtigt at lukke applikationen."
            },
            disableMinSize: {
                label: "Deaktiver minimum vinduesstørrelse",
                description: "Tillad Discord-vinduet at blive gjort mindre end dets standard minimumstørrelse. Nyttigt til tiling window managers eller små skærme."
            }
        },
        quickActions: {
            title: "Hurtige handlinger",
            description: "Almindelige handlinger, du måtte ønske at udføre. Disse genveje giver dig hurtig adgang til ofte brugte funktioner uden at navigere gennem menuer.",
            notificationLog: "Notifikationslog",
            editQuickCSS: "Rediger QuickCSS",
            relaunchDiscord: "Genstart Discord",
            openSettingsFolder: "Åbn indstillingsmappe",
            viewSourceCode: "Vis kildekode"
        },
        specialCards: {
            donations: {
                title: "Donationer",
                subtitle: "Tak fordi du donerer!",
                description: "Du kan til enhver tid administrere dine fordele ved at sende en besked til @mutanplex.",
                button: "Doner",
                invite: "Deltag i vores Discord",
                invalid: "Ugyldigt eller udløbet invitationslink."
            },
            supportProject: {
                title: "Støt projektet",
                description: "Overvej venligst at støtte udviklingen af Plexcord ved at donere!"
            },
            contributions: {
                title: "Bidrag",
                subtitle: "Tak for dit bidrag!",
                description: "Da du har bidraget til Plexcord, har du nu fået et sejt nyt badge!",
                buttonTitle: "Se hvad du har bidraget til"
            }
        },
        settingsSection: {
            title: "Indstillinger",
            description: "Konfigurer hvordan Plexcord opfører sig og integreres med Discord. Disse indstillinger påvirker Discord-klientens udseende og adfærd.",
            hintParts: {
                prefix: "Du kan tilpasse, hvor denne indstillingssektion vises i Discords indstillingsmenu ved at konfigurere {{pluginLink}}",
                linkText: "Indstillinger Plugin"
            }
        },
        notifications: {
            title: "Notifikationer",
            description: "Konfigurer hvordan Plexcord håndterer notifikationer. Du kan tilpasse, hvornår og hvordan du modtager advarsler, eller se en historik over tidligere notifikationer.",
            settings: "Notifikationsindstillinger",
            viewLog: "Vis notifikationslog",
            permissions: {
                denied: {
                    title: "Adgang til skrivebordsnotifikationer nægtet",
                    label: "Du har nægtet tilladelse til notifikationer. Skrivebordsnotifikationer vil ikke fungere!"
                }
            },
            style: {
                label: "Notifikationsstil",
                description: "Nogle plugins kan vise notifikationer til dig. Disse findes i to stilarter:",
                plexcord: "Plexcord-notifikationer",
                plexcordDesc: "Disse er notifikationer i appen",
                desktop: "Skrivebordsnotifikationer",
                desktopDesc: "Indfødte skrivebordsnotifikationer (som når du får et ping)",
                onlyWhenNotFocused: "Brug kun skrivebordsnotifikationer, når Discord ikke er i fokus",
                always: {
                    desktop: "Brug altid skrivebordsnotifikationer",
                    plexcord: "Brug altid Plexcord-notifikationer"
                }
            },
            positions: {
                label: "Notifikationsposition",
                right: {
                    bottom: "Nederst til højre",
                    top: "Øverst til højre",
                },
                left: {
                    bottom: "Nederst til venstre",
                    top: "Øverst til venstre",
                }
            },
            missed: {
                label: "Antal missede notifikationer",
                description: "Når Discord fokuseres igen, vil en notifikation dukke op med, hvor mange du har misset",
                whileYou: "Mens du var væk",
                count: "{{count}} notifikation{{s}} modtaget",
                s: "er"
            },
            timeout: {
                label: "Notifikation timeout",
                description: "Hvor lang tid (i sekunder) notifikationer bliver på skærmen, før de automatisk forsvinder"
            },
            logLimit: {
                label: "Grænse for notifikationslog",
                description: "Det maksimale antal notifikationer, der skal beholdes i loggen, før gamle fjernes. Sæt til {{disable}} for at deaktivere notifikationsloggen og {{unlimited}} for aldrig automatisk at fjerne gamle notifikationer"
            },
            opacity: {
                label: "Notifikation gennemsigtighed",
                description: "Gennemsigtigheden af notifikationer i appen"
            },
            maxNotifications: {
                label: "Maks. notifikationer",
                description: "Maksimalt antal notifikationer vist på én gang"
            },
            behavior: {
                label: "Notifikationsadfærd",
            },
            disableInStreamerMode: {
                label: "Deaktiver i Streamer-tilstand",
                description: "Deaktiver notifikationer, mens du er i streamer-tilstand"
            },
            renderImages: {
                label: "Vis billeder",
                description: "Vis billeder i notifikationer"
            },
            streamingTreatment: {
                label: "Behandling under streaming",
                description: "Hvordan notifikationer skal behandles, mens du deler din skærm",
                normal: "Normal - Vis notifikationen som normalt",
                noContent: "Intet indhold - Skjul notifikationens indhold",
                ignore: "Ignorer - Vis slet ikke notifikationen"
            },
        },
        macVibrancy: {
            title: "Vinduesvibrationsstil (Kræver genstart)",
            description: "Tilpas macOS-vinduets vibrationseffekt. Dette styrer slørings- og gennemsigtighedsstilen for Discord-vinduet. Ændringer kræver en genstart for at træde i kraft.",
            placeholder: "Vinduesvibrationsstil",
            style: {
                no: "Ingen vibration",
                underPage: "Under siden (Vinduesfarvning)",
                content: "Indhold",
                window: "Vindue",
                selection: "Valg",
                titlebar: "Titellinje",
                header: "Overskrift",
                sidebar: "Sidebjælke",
                tooltip: "Værktøjstip",
                menu: "Menu",
                popover: "Popover",
                fullscreenUI: "Fuldskærms-UI (Gennemsigtig men let sløret)",
                hud: "HUD (Mest gennemsigtig)"
            }
        }
    },

    plugins: {
        title: "Plugins",
        new: "NY",
        unknown: "Ukendt",
        noDescription: "Ingen beskrivelse tilgængelig.",
        restart: {
            apply: "Genstart for at anvende ændringer!",
            required: "Genstart påkrævet!",
            description: "Genstart nu for at anvende nye plugins og deres indstillinger",
            following: "Følgende plugins kræver en genstart:",
            remainingCount: "og {{count}} mere",
            fully: "Nogle plugins kræver en genstart for at blive helt deaktiveret",
            would: "Vil du genstarte nu?",
            resetDefault: "Nulstil til standardindstillinger",
            failed: "Kunne ikke starte afhængigheder:",
            button: {
                restart: "Genstart",
                later: "Senere!",
                now: "Genstart nu",
                cancel: "Annuller",
                disableWarning: "Deaktiver advarsel for altid",
                disableAll: "Deaktiver alle",
                reset: "Nulstil",
                close: "Luk"
            }
        },
        contributor: {
            contributed: "bidrog",
            modal: {
                contributionsInfo: "{{userName}} har {{continuedLink}} til {{contributionCount}} plugin{{s}}.",
                noContributions: "{{userName}} har ikke lavet nogen plugins. De har sandsynligvis {{contributedLink}} på andre måder!"
            }
        },
        infoModal: {
            description: "Tryk på tandhjulet eller info-ikonet for at få mere info om et plugin",
            settingsInfo: "Plugins med et tandhjul har indstillinger, du kan ændre!",
            disableAll: "Deaktiver alle plugins"
        },
        error: {
            invalidInput: "Ugyldigt input angivet",
            stopping: "Fejl under stop af plugin {{plugin}}",
            starting: "Fejl under start af plugin {{plugin}}",
            startDependency: "Fejl under start af afhængigheder: {{failures}}",
            infoRender: "Der opstod en fejl under rendering af dette plugins brugerdefinerede Info-komponent"
        },
        placeholder: {
            number: "Indtast et nummer",
            select: "Vælg en mulighed",
            text: "Indtast en værdi"
        },
        excluded: {
            desktop: "Discord Desktop-app eller Plextron",
            discordDesktop: "Discord Desktop-app",
            plextron: "Plextron-app",
            web: "Plextron-app og webversionen af Discord",
            dev: "Udviklerversion af Plexcord"
        },
        search: {
            looking: "Leder du efter",
            onlyAvailable: "Kun tilgængelig på",
            noCriteria: "Ingen plugins matcher søgekriterierne."
        },
        required: {
            title: "Påkrævede plugins",
            this: "Dette plugin er påkrævet for at Plexcord kan fungere.",
            by: "Dette plugin kræves af:"
        },
        dangerModal: {
            title: "FARLIG HANDLING",
            disablePlugins: "Deaktiver plugins",
            disableText: "Deaktiver alle",
            irreversible: "DENNE HANDLING KAN IKKE GØRES OM!",
            enableBack: "Er du helt sikker på, at du vil fortsætte? Du kan altid aktivere dem igen senere.",
            undone: "Denne handling kan ikke fortrydes. Er du sikker?",
            resetDescription: "Du er ved at nulstille alle indstillinger for {{pluginName}} til deres standardværdier.",
            disable: "Du er ved at deaktivere {{enabledPlugins}} plugins!",
            confirmReset: "Bekræft nulstilling",
            cancel: "Annuller",
            resetSettings: "Nulstil indstillinger",
            resetText: "Nulstil"
        },
        filters: {
            label: "Filtre",
            placeholder: "Søg efter et plugin...",
            option: {
                all: "Vis alle",
                enabled: "Vis aktiverede",
                disabled: "Vis deaktiverede",
                new: "Vis nye",
                userplugins: "Vis bruger-plugins",
                api: "Vis API-plugins"
            }
        },
        pluginModal: {
            noSettings: "Der er ingen indstillinger for dette plugin.",
            authors: "Forfattere",
            settings: "Indstillinger",
            successfulReset: "Indstillinger for {{plugin}} er blevet nulstillet.",
            enabledStock: "Aktiverede standard-plugins",
            totalStock: "Antal standard-plugins i alt",
            enabledUser: "Aktiverede bruger-plugins",
            totalUser: "Antal bruger-plugins i alt",
            info: "Se mere info",
            source: "Se kildekode"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API til at tilføje dekoratører til medlemslisten (både i servere og DM'er)",
                    messageAccessories: "API til at tilføje tilbehør til beskeder",
                    messageDecorations: "API til at tilføje dekorationer til beskeder",
                    chatInputButtons: "API til at tilføje knapper til chat-inputfeltet",
                    commands: "API påkrævet for alt, der bruger kommandoer",
                    contextMenu: "API til at tilføje/fjerne elementer til/fra genvejsmenuer.",
                    dynamicImageModal: "Giver dig mulighed for at udelade enten bredde eller højde, når du åbner en billedmodal",
                    menuItemDemangler: "Demangler Discords Menu Item-modul",
                    messageEvents: "API påkrævet for alt, der bruger beskedbegivenheder",
                    messagePopover: "API til at tilføje knapper til besked-popovere",
                    messageUpdater: "API til opdatering og gen-rendering af beskeder",
                    nicknameIcons: "API til at tilføje ikoner til kaldenavnet i profiler",
                    notices: "Retter at meddelelser automatisk bliver afvist",
                    serverList: "API påkrævet for plugins, der ændrer serverlisten",
                    userSettings: "Patcher Discords UserSettings for at eksponere deres gruppe og navn.",
                    audioPlayer: "API til at afspille interne Discord-lydfiler eller eksterne lydlinks.",
                    userArea: "API til at tilføje knapper til brugerområdepanelet.",
                    profileCollections: "API til at tilføje samlinger til brugerens profilpanel, ligesom Discords spilsamling."
                },
                chatButtons: {
                    context: {
                        buttons: "Knapper"
                    }
                }
            },
            badges: {
                description: "API til at tilføje badges til brugere",
                contributor: {
                    plexcord: "Plexcord-bidragsyder",
                    vencord: "Vencord-bidragsyder",
                    userPlugin: "Bruger-plugin-bidragsyder"
                },
                context: {
                    title: "Badge-indstillinger",
                    copy: {
                        name: "Kopier badgenavn",
                        link: "Kopier link til badge-billede"
                    },
                    refetch: {
                        button: "Genindlæs badges",
                        success: "Badges blev genindlæst!"
                    }
                },
                modal: {
                    title: "Plexcord-donor",
                    special: "Dette badge er en særlig fordel for Plexcord-donorer",
                    description: "Overvej venligst at støtte udviklingen af Plexcord ved at blive donor. Det ville betyde meget!"
                }
            },
        },
        uiElements: {
            manage: "Administrer UI-elementer",
            allows: "Giver dig mulighed for at skjule knapper, du ikke kan lide",
            section: {
                chatbar: {
                    title: "Chatbar-knapper",
                    description: "Dette er knapperne på højre side af chat-inputfeltet"
                },
                messagePopover: {
                    title: "Besked-popover-knapper",
                    description: "Dette er de svævende knapper til højre, når du holder musen over en besked"
                }
            },
            button: "Knapper fra aktiverede plugins vises her."
        }
    },

    patchHelper: {
        title: "Patch Helper",
        description: "Et udviklerværktøj til at hjælpe dig med at oprette patches til Plexcord-plugins.",
        fullPatch: {
            label: "Fuld Patch",
            description: "Indsæt din fulde JSON-patch her for at udfylde felterne"
        },
        find: "Find",
        match: "Match",
        replacement: "Erstatning",
        preview: "Forhåndsvisning",
        generatedCode: "Genereret kode",
        group: "Gruppe",
        diff: "Diff",
        module: "Modul",
        compile: "Kompiler",
        compiled: "Kompilering lykkedes",
        copy: {
            clipboard: "Kopier til udklipsholder",
            codeblock: "Kopier som kodeblok"
        },
        error: {
            noMatch: "Intet match fundet. Er dette modul måske lazy loaded?",
            multipleMatch: "Flere matches fundet. Brug venligst et mere specifikt søgemønster.",
            noFind: "'Find'-feltet mangler.",
            noReplacement: "'Erstatning'-feltet mangler.",
            invalidReplacement: "'Erstatning'-feltet er ugyldigt",
            replacementMatch: "'replacement.match'-feltet mangler",
            replacementReplace: "'replacement.replace'-feltet mangler",
            replacementMustFunction: "'Erstatning' skal være en funktion"
        },
        cheatSheet: {
            title: "Huskeark",
            identifiers: "Speciel regex-escape-sekvens, der matcher identifikatorer (varnavne, klassenavne osv.)",
            dollar: "Indsæt et $",
            entireMatch: "Indsæt hele matchet",
            beforeMatch: "Indsæt understrengen før matchet",
            afterMatch: "Indsæt understrengen efter matchet",
            nthGroup: "Indsæt den n'te fangstgruppe ($1, $2...)",
            pluginInstance: "Indsæt plugin-instansen"
        },
        replacementEval: {
            label: "Behandl erstatning som funktion",
            description: "'Erstatning' vil blive evalueret som en funktion, hvis dette er aktiveret"
        }
    },

    sync: {
        title: "Sikkerhedskopiering og gendannelse",
        warning: "Advarsel",
        warningText: "Import af en indstillingsfil vil overskrive dine nuværende indstillinger. Sørg for at eksportere en sikkerhedskopi først, hvis du vil beholde din nuværende konfiguration.",
        description: "Du kan importere og eksportere dine Plexcord-indstillinger som en JSON-fil. Dette giver dig mulighed for nemt at overføre dine indstillinger til en anden enhed eller gendanne dine indstillinger efter geninstallation af Plexcord eller Discord.",
        successful: "Indstillinger blev importeret. Genstart for at anvende ændringer!",
        error: {
            failure: "Kunne ikke importere indstillinger: {{error}}",
            failedExport: "Kunne ikke eksportere indstillinger, tjek konsollen",
            invalid: "Ugyldige indstillinger. Er dette overhovedet en Plexcord-indstillinger-fil?",
            tooLarge: "DataStore er for stor - udeladt fra sikkerhedskopien. Brug 'Eksporter DataStores' hvis nødvendigt.",
            clearSomeDate: "DataStore er for stor. Slet venligst nogle plugin-data og prøv igen."
        },
        settings: {
            text: "Hvad er inkluderet i en sikkerhedskopi?",
            quickcss: "Brugerdefineret QuickCSS",
            theme: "Tema-links",
            plugins: "Plugin-indstillinger",
            datastores: "Plugin DataStores (f.eks. tidszoner eller IRememberYou)"
        },
        import: {
            title: "Importer indstillinger",
            description: "Vælg en tidligere eksporteret indstillingsfil for at gendanne din konfiguration. Dette vil erstatte alle dine nuværende indstillinger med dem fra sikkerhedskopien.",
            all: "Importer alle indstillinger",
            plugins: "Importer plugin",
            css: "Importer QuickCSS",
            datastore: "Importer DataStores"
        },
        export: {
            title: "Eksporter indstillinger",
            description: "Du kan eksportere dine nuværende Plexcord-indstillinger til en fil for sikkerhedskopiering eller overførsel til en anden enhed.",
            all: "Eksporter alle indstillinger",
            plugins: "Eksporter plugin",
            css: "Eksporter QuickCSS",
            datastore: "Eksporter DataStores"
        }
    },

    cloud: {
        text: "Cloud",
        title: "Settings Sync",
        override: "Cloud Sync",
        description: "Synchronise your Plexcord settings to the cloud. This makes it easy to keep your configuration consistent across multiple devices without manual import/export.",
        switchDescription: "When enabled, your settings can be synchronised to and from the cloud. Use the actions below to manually sync.",
        settings: "Cloud Settings",
        successful: "Synchronised settings to the cloud!",
        updated: "Your settings have been updated! Click here to restart to fully apply changes!",
        deleted: "Settings deleted from cloud!",
        integration: {
            title: "Cloud Integration",
            description: "Plexcord's cloud integration allows you to synchronise your settings across multiple devices and Discord installations. Your data is securely stored and can be easily restored at any time.",
        },
        reauth: "We've noticed you have cloud integrations enabled in another client! Due to limitations, you will need to re-authorise to continue using them. Click here to go to the settings page to do so!",
        error: {
            setup: "Setup failed (couldn't retrieve OAuth configuration).",
            secret: "Setup failed (no secret returned).",
            string: "Setup failed ({{error}}).",
            connect: "Cloud sync was disabled because this account isn't connected to the Plexcord Cloud App. You can enable it again by connecting this account in Cloud Settings. (note: it will store your preferences separately)",
            noSettings: "There are no settings in the cloud.",
            uptodate: "Your settings are up to date.",
            localNewer: "Your local settings are newer than the cloud ones.",
            delete: "Could not delete settings ({{error}}).",
            api: {
                returned: {
                    delete: "Could not delete settings (API returned {{status}}).",
                    to: "Could not synchronise settings to cloud (API returned {{status}}).",
                    from: "Could not synchronise settings from the cloud (API returned {{status}}).",
                    manifest: "Kunne ikke hente manifest til sletning (API returnerede {{status}})."
                }
            },
            synchronize: {
                to: "Could not synchronise settings to cloud ({{error}}).",
                from: "Could not synchronise settings from the cloud ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Enable cloud integration above to use settings sync features."
        },
        danger: {
            title: "Danger Zone",
            description: "Permanently delete all your data from the cloud. This action cannot be undone and will remove all synchronised settings and any other data stored on the cloud backend.",
            delete: {
                account: {
                    title: "Delete Cloud Account",
                    description: "Are you sure you want to permanently delete your cloud account and all associated data? This action cannot be undone.",
                    confirm: "Delete Account",
                    cancel: "Cancel"
                }
            }
        },
        notification: {
            title: "Cloud Integration",
            enabled: "Cloud integration Enabled",
            host: "{{host}} has been added to the whitelist. Please restart the app for the changes to take effect.",
            erase: {
                successful: "Cloud data successfully erased",
                failed: "Failed to erase all data (API {{status}} returned), please contact support."
            }
        },
        button: {
            to: "Sync to Cloud",
            from: "Sync from Cloud",
            fromDescription: "This will overwrite your local settings with the ones on the cloud. Use wisely!",
            delete: "Delete Cloud Data",
            enable: "Enable Cloud Integrations",
            reauthorize: "Reauthorise",
            confirm: "Restart now",
            later: "Later!"
        },
        privacy: "respects your privacy",
        source: "source code",
        overview: "Plexcord comes with a cloud integration that adds goodies like settings sync across devices. It {{privacy}}, and the {{source}} is AGPL 3.0 licensed so you can host it yourself.",
        authorization: "Connect to the cloud backend for settings synchronisation. This will request authorisation if you haven't set up cloud integration yet.",
        backend: {
            title: "Cloud Backend",
            description: "Choose how your settings are stored in the cloud. By default, Plexcord Cloud is used, but you can also connect your own self-hosted cloud service.",
            invalid: "Invalid URL"
        },
        sync: {
            title: "Sync Rules for This Device",
            description: "This setting controls how settings move between this device and the cloud. You can let changes flow both ways, or choose one place to be the main source of truth.",
            direction: {
                both: "Two-way sync (changes go both directions)",
                push: "This device is the source (upload only)",
                pull: "The cloud is the source (download only)",
                manual: "Do not sync automatically (manual sync via buttons below only)"
            }
        }
    },

    changelog: {
        text: "Change log",
        title: "Change log",
        description: "You can find the latest changes and updates to Plexcord here.",
        by: "by",
        check: "Repository check",
        uptodate: "up to date",
        update: "Update",
        noMessage: "No message",
        unknown: "Unknown",
        updatedPlugins: "Updated Plugins",
        newSettings: "New Settings",
        newSettingTooltip: "New setting in {{plugin}}",
        loading: "Loading...",
        repoUptodate: "Repository up to date",
        fetch: "Fetch from Repository",
        clear: "Clear All Logs",
        internet: "Make sure you have an Internet connection and try again.",
        recent: "Recent Changes",
        codeChanges: "Code Changes {{count}} new commit{{s}}",
        updateLogs: "Update Logs ({{count}})",
        noCommit: "No commits available ahead of your current version. Click 'Fetch from Repository' to check for new changes.",
        previous: "Previous update sessions with their commit history and plugin changes.",
        modal: {
            description: "View the most recent changes to Plexcord. This fetches commits directly from the repository to show you what's new.",
            repository: "Repository",
            failed: "Failed to retrieve - check console",
            current: "Current:",
            hide: "Hide logs",
            show: "Show logs",
            fetch: {
                title: "Fetch Changes",
                description: "Check the repository for new commits, plugin updates, and code changes. This will compare your current version with the latest available and show you what's new.",
                newCommit: "These are the new commits and plugin updates since your last version. You can see what features were added, bugs were fixed, and which plugins received updates.",
                confirm: "Fetch",
            }
        },
        commit: {
            available: "commits available",
            no: "No new commits",
            new: "new plugins",
            updated: "updated plugins",
            settings: "new settings"
        },
        toast: {
            already: "Already up to date with repository",
            found: "Found {{count}} new commit{{s}} from repository",
            local: "Repository is up to date with your local copy",
            failed: "Failed to fetch from repository :(",
            cleared: "All logs have been cleared",
            logCleared: "Log has been cleared",
            yourLatest: "Logged commits from your latest update"
        },
        alert: {
            clear: {
                title: "Clear All Logs",
                body: "Are you sure you would like to clear all logs? This cannot be undone.",
                confirm: "Clear All",
                confirmColor: "danger",
                cancel: "Cancel"
            },
            log: {
                title: "Clear Log",
                body: "Are you sure you would like to clear this log? This cannot be undone.",
                confirm: "Clear Log",
                confirmColor: "danger",
                cancel: "Cancel"
            }
        },
        newPlugins: "{{count}} New Plugin{{s}}",
        following: "The following plugins have been added in recent updates:",
        more: "+{{count}} more plugins"
    },

    csp: {
        restart: "A restart is required to apply this change",
        blocked: {
            resources: "Blocked Resources",
            disallowed: "Some images, styles, or fonts were blocked because they come from disallowed domains.",
            recommended: "It is highly recommended to move them to GitHub or Imgur. But you may also allow domains if you fully trust them.",
            afterAllow: "After allowing a domain, you have to fully close (from tray / task manager) and restart {{platform}} to apply the change.",
            allow: "Allow",
            url: "Blocked URLs"
        },
        imgur: {
            direct: "Imgur links should be direct links in the form of {{etc}}",
            copy: "To obtain a direct link, right-click the image and select 'Copy image address'."
        },
        wants: {
            caller: "{{callerName}} wants to allow connections to {{domain}}",
            detail: "Unless you recognise and fully trust {{domain}}, you should cancel this request!",
            restart: "You will have to fully close and restart {{appName}} for the changes to take effect.",
            type: {
                images: "Images",
                styles: "CSS & Themes",
                fonts: "Fonts"
            },
            content: "The following types of content will be allowed to load from {{domain}}:",
            understand: "I fully trust {{domain}} and understand the risks of allowing connections to it.",
            button: {
                cancel: "Cancel",
                allow: "Allow"
            },
            title: "Host Permissions"
        }
    },

    themes: {
        title: "Themes",
        management: "Theme Management",
        description: "Customise Discord's appearance with themes. Add local .css files or load themes directly from URLs. Themes with a cog wheel icon have customisable settings you can modify.",
        local: "Local Themes",
        new: "NEW",
        pinned: "Pinned",
        stylus: "Stylus extension",
        bd: "BetterDiscord Themes",
        github: "GitHub",
        download: "Looking for themes? Check out {{bd}} or search on {{github}}. When downloading from BetterDiscord, click 'Download' and place the .theme.css file into your themes folder.",
        add: "Add",
        reset: "Reset settings to default",
        notCSS: "Not a CSS file. Remember to use the raw link!",
        okay: "Okay!",
        checking: "Checking...",
        valid: "Valid!",
        upload: "Upload Theme",
        openFolder: "Open Themes Folder",
        loadMissing: "Load Missing Themes",
        editQuickCSS: "Edit QuickCSS",
        editClient: "Edit ClientTheme",
        website: "Open Website",
        discord: "Discord Server",
        downloadTheme: "Download",
        refresh: "Refresh",
        delete: "Delete",
        unknown: {
            title: "Unknown",
            author: "Unknown Author",
            theme: "A Discord Theme"
        },
        required: "The following plugins are required, but aren't enabled: ",
        homepage: "Homepage",
        support: "Support",
        online: {
            title: "Online Themes",
            description: "Load themes directly from URLs instead of local files. Online themes auto-update when the source changes, so you always have the latest version without manual downloads.",
            enable: "Enable Online Themes",
            enableDescription: "Toggle online theme loading. When disabled, all online themes will be turned off and you won't be able to add new ones."
        },
        quickActions: {
            title: "Quick Actions",
            description: "Shortcuts for managing your themes. Open your themes folder to add new themes, use QuickCSS for quick style tweaks, or reload themes after making changes."
        },
        error: {
            userscript: "Themes are not supported on the Userscript!",
            stylus: "You can instead install themes with the {{stylus}}!",
            expired: "Invalid or expired link",
            text: "Error:"
        },
        copy: {
            url: "Copy URL",
            copied: "Theme URL copied!",
            settings: "Copy theme settings",
            copiedSettings: "Copied theme settings to clipboard."
        },
        paste: {
            settings: "Paste theme settings",
            empty: "Your clipboard is empty.",
            invalid: "Your clipboard doesn't have valid settings data.",
            pasted: "Pasted theme settings from clipboard."
        },
        settings: {
            for: "Settings for {{themeName}}",
        },
        installed: {
            title: "Installed Themes",
            description: "Manage your themes here. Local themes load from your themes folder, online themes from URLs. Themes with a cog wheel icon have customisable settings.",
            count: "{{count}} theme{{s}} installed ({{localCount}} local, {{onlineCount}} online) · {{enabledCount}} enabled",
            search: "Search for a theme...",
            loading: "Loading themes...",
            none: "No themes installed yet. Add theme files to your themes folder or add an online theme above to get started.",
            noCriteria: "No themes match your search or filter criteria."
        },
        filter: {
            all: "Show All",
            online: "Online Themes",
            local: "Local Themes",
            enabled: "Enabled",
            disabled: "Disabled"
        },
        notification: {
            refresh: {
                title: "Theme Refreshed",
                error: "Failed to refresh theme"
            },
            failed: {
                download: "Failed to download theme"
            }
        }
    },

    updater: {
        title: "Updater",
        settings: "Updater Settings",
        updates: "Updates",
        updated: "has been updated!",
        restart: "Click here to restart",
        repaired: "Plexcord has been repaired!",
        ok: "OK",
        preferences: {
            title: "Update Preferences",
            description: "Control how Plexcord keeps itself up to date. You can choose to update automatically in the background or be notified when new updates are available.",
        },
        github: {
            local: "Your local copy has more recent commits than the remote repository. This usually happens when you've made local changes. Please stash or reset them before updating."
        },
        error: {
            check: "Failed to check updates. Check the console for more info",
            occurred: "An unknown error occurred",
            retrieve: "Failed to retrieve - check console",
            title: "Oops!",
            tryAgain: "An unknown error occurred. Please try again or see the console for more info.",
            command: "Command {{path}} not found. Please install it and try again.",
            code: "Code {{code}}. See the console for more info.",
            running: "An error occurred while running {{cmd}}: {{error}}",
            failed: "That also failed :( Try updating or re-installing with the installer!"
        },
        available: "There is 1 update",
        updateAvailable: "A Plexcord update is available!",
        click: "Click here to view the update",
        available_plural: "There are {{count}} updates",
        current: "Up to Date!",
        successful: {
            title: "Update Success!",
            body: "Successfully updated. Restart now to apply the changes?",
            button: {
                confirm: "Restart",
                cancel: "Not now!",
                update: "Update Now",
                check: "Check for Updates"
            },
            noFound: "No updates found"
        },
        automatically: {
            label: "Automatically update",
            description: "Automatically update Plexcord without confirmation prompt"
        },
        notify: {
            label: "Get notified when an automatic update completes",
            description: "Shows a notification when Plexcord automatically updates"
        },
        repo: "Repo",
        repoDescription: "This is the GitHub repository where Plexcord fetches updates from.",
        loading: "Loading...",
    },

    components: {
        error: {
            title: "Oh no!",
            render: "An error occurred while rendering this Component. More info can be found below and in your console."
        },
        componentFailed: {
            message: "Uh Oh! Failed to render this Page. However, there is an update available that might fix it. Would you like to update and restart now?"
        },
        quickCSS: {
            title: "QuickCSS Editor Open",
            message: "QuickCSS editor is still open in the background.",
            detail: "Do you want to close Discord anyway? This will also close the QuickCSS editor.",
            cancel: "Cancel",
            close: "Close Anyway"
        }
    },

    commands: {
        error: {
            execute: "An error occurred while executing command '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Dismiss Notification",
        noYet: "No notifications yet",
        settings: "Notification Settings",
        log: {
            title: "Notification Log",
            clear: "Clear Notification Log",
            sure: "Are you sure?",
            permamently: "This will permanently remove {{count}} notification{{s}}. This action cannot be undone.",
            button: {
                confirm: "Do it!",
                cancel: "Nevermind"
            }
        }
    },

    memberlist: {
        error: {
            render: "Failed to render {{key}} Member List Decorator"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Failed to render {{key}} Message Accessory"
            }
        },
        decoration: {
            error: {
                render: "Failed to render {{key}} Message Decoration"
            }
        }
    },

    utils: {
        toast: {
            copied: "Copied to clipboard!"
        }
    },

    common: {
        unit: {
            year: "year",
            years: "years",
            month: "month",
            months: "months",
            week: "week",
            weeks: "weeks",
            day: "day",
            days: "days",
            hour: "hour",
            hours: "hours",
            minute: "minute",
            minutes: "minutes",
            second: "second",
            seconds: "seconds",
            ago: "ago",
            s: "s"
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Deaktiver Discords sporing (analytics/'science'), metrikker og Sentry-fejlrapportering",
            option: {
                disableAnalytics: {
                    label: "Deaktiver analyse",
                    description: "Deaktiver Discords sporing (analytics/'science'), metrikker og Sentry-fejlrapportering"
                }
            }
        },
        settings: {
            name: "Indstillinger",
            description: "Tilføjer brugerflade til indstillinger og fejlfindingsinfo",
            option: {
                language: {
                    label: "Sprog",
                    description: "Vælg dit foretrukne sprog til Plexcord."
                },
                settingsLocation: {
                    label: "Placering af indstillinger",
                    description: "Bestemmer hvor Plexcord-indstillingssektionen skal placeres."
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "Hjælper os med at give dig support",
            commands: {
                description: {
                    debug: "Send Plexcord fejlfindingsinfo",
                    plugins: "Send Plexcord plugin-liste"
                }
            },
            modals: {
                outdated: {
                    title: "Vent lidt!",
                    body: "Du bruger en forældet version af Plexcord! Chancerne er, at dit problem allerede er løst.",
                    footer: "Opdater venligst først, før du beder om support!",
                    button: {
                        cancel: "Vis opdateringer",
                        confirm: "Opdater og genstart nu",
                        secondaryConfirm: "Jeg ved hvad jeg gør, eller jeg kan ikke opdatere"
                    }
                },
                updater: {
                    title: "Vent lidt!",
                    body: "Du bruger en eksternt opdateret Plexcord-version, som vi ikke yder support til!",
                    footer: "Skift venligst enten til en {{officially}}, eller kontakt din pakkevedligeholder for support i stedet.",
                    officially: "officielt understøttet version af Plexcord",
                    button: {
                        cancel: "Annuller",
                        confirm: "Vis downloadside",
                        now: "Opdater nu"
                    },
                    toast: {
                        success: "Succes! Genstarter...",
                        already: "Allerede helt opdateret!",
                        failed: "Opdatering mislykkedes :("
                    }
                },
                custom: {
                    title: "Vent lidt!",
                    header: "Du bruger en brugerdefineret build af Plexcord, som vi ikke yder support til!",
                    body: "Vi yder kun support til {{officialBuild}}. Enten {{switch}} eller find selv ud af dit problem.",
                    footer: "Du vil blive udelukket fra at modtage support, hvis du ignorerer denne regel.",
                    official: "officielle builds",
                    switch: "skift til en officiel build",
                    button: {
                        confirm: "Forstået",
                        secondaryConfirm: "Vis ikke igen"
                    }
                }
            },
            button: {
                debug: "Kør /plexcord-debug",
                plugins: "Kør /plexcord-plugins",
                snippet: "Kør Snippet"
            },
            toast: {
                success: "Succes!",
                failed: "Kunne ikke køre snippet :(",
                failedOpenInvite: "Kunne ikke åbne invitation, tjek venligst konsollen :(",
                upload: "Plugin-liste blev uploadet!",
                failedUpload: "Kunne ikke uploade filen med plugin-listen. Prøv venligst igen.",
                unableGenerate: "Kunne ikke generere plugin-liste."
            },
            dm: {
                warning: "Send venligst ikke private beskeder til Plexcord-plugin-udviklere for support!{{br}}I stedet kan du deltage i {{support}}-serveren og bruge Plexcord-supportkanalen: {{channel}}"
            },
            alert: {
                title: "Advarsel: Højt antal plugins",
                paragraph1: "Du har mere end 100 plugins aktiveret.",
                paragraph2: "På grund af den store mængde plugins modtager du muligvis ikke support.",
                paragraph3: "Dit problem er sandsynligvis forårsaget af plugin-konflikter.",
                paragraph4: "Overvej venligst at deaktivere nogle plugins for at fejlsøge.",
                paragraph5: "Din plugin-liste vil blive sendt som en tekstfil.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Højreklik på dit kontopanel i nederste venstre hjørne for at se din profil på den nuværende server",
            option: {
                prioritizeServerProfile: {
                    label: "Prioriter serverprofil",
                    description: "Prioriter serverprofilen, når du venstreklikker på dit kontopanel"
                }
            },
            context: {
                account: "Vis kontoprofil",
                server: "Vis serverprofil",
                prioritize: "Prioriter serverprofil"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Gør at pop-up'en for støjreduktion skifter mellem 'Ingen' og 'Krisp' i stedet for 'Krisp' og 'Standard'"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Animerer alt, der kan animeres",
            option: {
                icons: {
                    label: "Ikoner",
                    description: "Animer altid serverikoner, avatarer, dekorationer og mere"
                },
                statusEmojis: {
                    label: "Status-emojis",
                    description: "Animer altid status-emojis"
                },
                serverBanners: {
                    label: "Serverbannere",
                    description: "Animer altid serverbannere"
                },
                nameplates: {
                    label: "Navneskilte",
                    description: "Animer altid navneskilte"
                },
                roleGradients: {
                    label: "Rollefarveovergange",
                    description: "Animer altid rollefarveovergange"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Udvider altid profil-pop-ups til den fulde modal"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Udvider altid rollelister i profil-pop-ups",
            option: {
                hideArrow: {
                    label: "Skjul pil",
                    description: "Skjul pilen"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Afspiller Animal Crossing 'animalese' for hver besked sendt (de snakker meget)",
            option: {
                volume: {
                    label: "Lydstyrke",
                    description: "Lydstyrke for animalese-lyden"
                },
                speed: {
                    label: "Hastighed",
                    description: "Hastighed for animalese-lyden"
                },
                pitch: {
                    label: "Tonehøjde",
                    description: "Tonehøjde-multiplikator"
                },
                messageLengthLimit: {
                    label: "Grænse for beskedlængde",
                    description: "Maksimal beskedlængde der skal behandles"
                },
                processOwnMessages: {
                    label: "Behandl egne beskeder",
                    description: "Aktiver for også at høre dine egne beskeder"
                },
                soundQuality: {
                    label: "Lydkvalitet",
                    description: "Lydkvalitet der skal bruges",
                    high: "Høj",
                    med: "Mellem",
                    low: "Lav",
                    lowest: "Laveste"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Fjerner den irriterende pop-up om ikke-betroede domæner og mistænkelige filer",
            option: {
                domain: {
                    label: "Domæne",
                    description: "Fjern pop-up'en om ikke-betroet domæne, når du åbner links"
                },
                file: {
                    label: "Fil",
                    description: "Fjern pop-up'en 'Potentielt farlig download', når du åbner links"
                },
                noDeleteSafety: {
                    label: "Ingen slettesikkerhed",
                    description: "Fjerner kravet om at indtaste servernavnet, når en server slettes"
                },
                confirmModal: {
                    label: "Bekræftelsesmodal",
                    description: "Skal der vises en 'er du sikker på, at du vil slette'-modal?"
                }
            },
            alert: {
                title: "Slet server?",
                body: "Det er permanent, hvis det ikke var indlysende.",
                confirm: "Slet",
                cancel: "Annuller"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonymiser navne på uploadede filer",
            option: {
                anonymiseByDefault: {
                    label: "Anonymiser som standard",
                    description: "Anonymiser filnavne som standard. Du kan deaktivere dette i upload-pop-up'en, hvis det er nødvendigt."
                },
                spoilerMessages: {
                    label: "Spoiler-beskeder",
                    description: "Anonymiser filnavne på filer markeret som spoilers."
                },
                method: {
                    label: "Metode",
                    description: "Anonymiseringsmetode",
                    random: "Tilfældige tegn",
                    consistent: "Konsistent",
                    timestamp: "Tidsstempel"
                },
                randomisedLength: {
                    label: "Tilfældig længde",
                    description: "Længde på tilfældige tegn"
                },
                consistent: {
                    label: "Konsistent",
                    description: "Konsistent anonymiserings-hemmelighed"
                }
            },
            using: {
                anonymous: "Bruger anonymt filnavn",
                spoiler: "Bruger normalt filnavn"
            },
            spoiler: {
                description: "Slå spoiler til/fra for dine filer",
                toggle: "Slå spoiler til/fra for dine filer (standard er til)",
                enabled: "Spoiler aktiveret!",
                disabled: "Spoiler deaktiveret!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Discord Rich Presence til dit Apple Music!",
            about: "For de brugerdefinerede aktivitetsformatstrenge kan du bruge flere specielle strenge til at inkludere sangdata! {{name}} erstattes med sangens navn; {{artist}} erstattes med kunstnerens navn(e); og {{album}} erstattes med albummets navn.",
            button: {
                listen: "Lyt på Apple Music",
                songLink: "Vis på SongLink"
            },
            option: {
                activityType: {
                    label: "Aktivitetstype",
                    description: "Hvilken type aktivitet",
                    listening: "Lytter til",
                    playing: "Spiller"
                },
                statusDisplayType: {
                    label: "Statusvisningstype",
                    description: "Vis sang- / kunstnernavn i medlemslisten",
                    off: "Vis ikke (viser generisk lytter-besked)",
                    artist: "Vis kunstnernavn",
                    track: "Vis sangnavn"
                },
                refreshInterval: {
                    label: "Opdateringsinterval",
                    description: "Intervallet mellem aktivitetsopdateringer (sekunder)"
                },
                enableTimestamps: {
                    label: "Aktiver tidsstempler",
                    description: "Hvorvidt tidsstempler skal aktiveres"
                },
                enableButtons: {
                    label: "Aktiver knapper",
                    description: "Hvorvidt knapper skal aktiveres"
                },
                nameString: {
                    label: "Navnestreng",
                    description: "Formatstreng for aktivitetsnavn"
                },
                detailsString: {
                    label: "Detaljestreng",
                    description: "Formatstreng for aktivitetsdetaljer"
                },
                stateString: {
                    label: "Tilstandsstreng",
                    description: "Formatstreng for aktivitetstilstand"
                },
                largeImageType: {
                    label: "Stor billedtype",
                    description: "Type af stort billede til aktiviteten",
                    album: "Albumcover",
                    artist: "Kunstnerbillede",
                    disabled: "Deaktiveret"
                },
                largeTextString: {
                    label: "Stor tekststreng",
                    description: "Formatstreng for stor tekst til aktiviteten"
                },
                smallImageType: {
                    label: "Lille billedtype",
                    description: "Type af lille billede til aktiviteten",
                    album: "Apple Music-logo",
                    artist: "Kunstnerbillede",
                    disabled: "Deaktiveret"
                },
                smallTextString: {
                    label: "Lille tekststreng",
                    description: "Formatstreng for lille tekst til aktiviteten"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Klient-plugin til arRPC for at aktivere RPC på Discord Web (eksperimentel)",
            use: {
                title: "Sådan bruges arRPC",
                enable: "{{link}} for at få serveren til at køre, og aktiver derefter plugin'et.",
                link: "Følg instruktionerne i GitHub-repositoryet"
            },
            toast: {
                connected: "Forbundet til arRPC",
                failed: "Kunne ikke forbinde til arRPC, kører det?",
                retry: "Prøv igen"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Med @someone kan du nævne en tilfældig person"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Opdaterer automatisk din online-status (online, ikke til stede, dnd), når du starter spil",
            option: {
                statusToSet: {
                    label: "Status der skal sættes",
                    description: "Status der skal sættes, når et spil startes",
                    online: "Online",
                    dnd: "Vil ikke forstyrres",
                    idle: "Ikke til stede",
                    invisible: "Usynlig"
                },
                excludeInvisible: {
                    label: "Ekskluder usynlig",
                    description: "Forhindrer automatiske statusændringer, når din status er sat til usynlig"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Zipper automatisk angivne filtyper og mapper før upload til Discord",
            option: {
                extensions: {
                    label: "Udvidelser",
                    description: "Komma-separeret liste over filendelser der skal auto-zippes (f.eks. .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Viser bannere i medlemslisten",
            option: {
                animate: {
                    label: "Animer",
                    description: "Animer banneret"
                },
                preferNameplate: {
                    label: "Foretræk navneskilt",
                    description: "Foretræk navneskilt over banner"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Viser aktivitetsikoner i medlemslisten og giver mulighed for at se alle aktiviteter",
            option: {
                memberList: {
                    label: "Medlemsliste",
                    description: "Vis aktivitetsikoner i medlemslisten"
                },
                iconSize: {
                    label: "Ikonstørrelse",
                    description: "Størrelse på aktivitetsikoner"
                },
                specialFirst: {
                    label: "Specielle først",
                    description: "Vis specielle aktiviteter først (pt. Spotify og Twitch)"
                },
                renderGifs: {
                    label: "Vis GIF'er",
                    description: "Tillad visning af GIF'er"
                },
                removeGameActivityStatus: {
                    label: "Fjern 'Spilaktivitet' status",
                    description: "Fjern spilaktivitets-ikon og status"
                },
                userPopout: {
                    label: "Bruger-pop-up",
                    description: "Vis alle aktiviteter i profil-pop-up'en/sidebjælken"
                },
                hideTooltip: {
                    label: "Skjul værktøjstip",
                    description: "Skjuler aktiviteter forskellige steder"
                },
                allActivitiesStyle: {
                    label: "Stil for alle aktiviteter",
                    description: "Stil til visning af alle aktiviteter",
                    list: "Liste",
                    carousel: "Karrusel",
                    left: "Venstre",
                    right: "Højre"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Tilføjer et spektrograf- og oscilloskop-visualiseringsværktøj til lydafspillere",
            option: {
                oscilloscope: {
                    label: "Oscilloskop",
                    description: "Aktiver oscilloskop-visualisering"
                },
                spectrograph: {
                    label: "Spektrograf",
                    description: "Aktiver spektrograf-visualisering"
                },
                oscilloscopeSolidColor: {
                    label: "Oscilloskop ensfarvet",
                    description: "Brug en ensartet farve til oscilloskopet i stedet for en farveovergang"
                },
                oscilloscopeColor: {
                    label: "Oscilloskop-farve",
                    description: "Farve på oscilloskopet når ensfarvet er aktiveret"
                },
                spectrographSolidColor: {
                    label: "Spektrograf ensfarvet",
                    description: "Brug en ensartet farve til spektrografen i stedet for en farveovergang"
                },
                spectrographColor: {
                    label: "Spektrograf-farve",
                    description: "Farve på spektrografen når ensfarvet er aktiveret"
                }
            },
            toast: {
                invalidColorFormat: "Ugyldigt farveformat for {{settingKey}}, sørg for at det er i formatet 'R, G, B' eller '#RRGGBB'"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Opret brugerdefinerede årsager til Discords ban-modal, og/eller vis et tekstfelt som standard i stedet for valgmulighederne.",
            option: {
                reasons: {
                    label: "Årsager",
                    description: "Dine brugerdefinerede årsager"
                },
                isTextInputDefault: {
                    label: "Tekstfelt som standard",
                    description: "Viser et tekstfelt i stedet for en menu som standard. (Svarer til at klikke på 'Andet')"
                }
            },
            title: "Årsager",
            placeholder: "Årsag",
            add: "Tilføj en anden årsag"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Giver dig mulighed for at søge i listen over blokerede brugere og gør navne valgbare i indstillinger.",
            placeholder: "Søg efter brugere..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Forbedrer kommandosystemet med diverse forbedringer.",
            option: {
                autoFillArguments: {
                    label: "Auto-udfyld argumenter",
                    description: "Udfyld automatisk kommandoen med alle argumenter i stedet for kun de påkrævede"
                },
                allowNewlinesInCommands: {
                    label: "Tillad linjeskift i kommandoer",
                    description: "Tillad linjeskift i kommando-input (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Opdaterer Discord-applikationskommandoer lokalt",
                    user: "specifik bruger der skal forsøges opdateret",
                    refreshing: "Opdaterer applikationskommandoer...",
                    refreshed: "Kommandoer blev opdateret!",
                    failed: "Kunne ikke opdatere kommandoer. Tjek konsollen for detaljer."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Viser servermapper i en dedikeret sidebjælke og tilføjer mappe-relaterede forbedringer",
            option: {
                sidebar: {
                    label: "Sidebjælke",
                    description: "Vis servere fra mapper i en dedikeret sidebjælke"
                },
                sidebarAnim: {
                    label: "Sidebjælke-animation",
                    description: "Animer åbning af mappens sidebjælke"
                },
                closeAllFolders: {
                    label: "Luk alle mapper",
                    description: "Luk alle mapper, når du vælger en server, der ikke er i en mappe"
                },
                closeAllHomeButton: {
                    label: "Luk alle (Hjem-knap)",
                    description: "Luk alle mapper, når du klikker på hjem-knappen"
                },
                closeOthers: {
                    label: "Luk andre",
                    description: "Luk andre mapper, når du åbner en mappe"
                },
                closeServerFolder: {
                    label: "Luk servermappe",
                    description: "Luk mappen, når du vælger en server i den mappe"
                },
                forceOpen: {
                    label: "Tving åben",
                    description: "Tving en mappe til at åbne, når du skifter til en server i den mappe"
                },
                keepIcons: {
                    label: "Behold ikoner",
                    description: "Behold serverikonerne i den primære serverliste, når mappen er åben i BetterFolders-sidebjælken"
                },
                showFolderIcon: {
                    label: "Vis mappe-ikon",
                    description: "Vis mappe-ikonet over mappens servere i BetterFolders-sidebjælken",
                    never: "Aldrig",
                    always: "Altid",
                    moreThanOne: "Når mere end én mappe er udvidet"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Ændrer GIF-alt-tekst fra blot at være 'GIF' til at indeholde GIF-tags / filnavn"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Gør at GIF-vælgeren åbner favorit-kategorien som standard",
            option: {
                keepOpen: {
                    label: "Hold åben",
                    description: "Holder GIF-vælgeren åben efter valg af en GIF"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Se udløbsdato for invitationer, se indbyderens profil og få forhåndsvisning af servere før deltagelse ved at klikke på navnet",
            render: {
                tip: "Denne invitation udløber {{time}}",
                header: "{{name}} inviterede dig til {{server}}",
                never: "udløber aldrig"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Skjul noter eller deaktiver stavekontrol (Konfigurer i indstillinger!!)",
            option: {
                hide: {
                    label: "Skjul noter",
                    description: "Skjul notefeltet i bruger-pop-ups"
                },
                noSpellCheck: {
                    label: "Ingen stavekontrol",
                    description: "Deaktiver stavekontrol i noter"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Antallet af plusser før :emoji: er beskeden, den skal tilføjes til"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Tilføjer muligheder for at kopiere rollefarve / redigere rolle / se rolle-ikon, når du højreklikker på roller i brugerprofilen",
            option: {
                roleIconFileFormat: {
                    label: "Filformat for rolle-ikon",
                    description: "Filformat der skal bruges ved visning af rolle-ikoner"
                }
            },
            context: {
                copyColor: "Kopier rollefarve",
                editRole: "Rediger rolle",
                viewIcon: "Vis rolle-ikon"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Kopier rollefarve ved klik på Rolle-prik (tilgængelighedsindstilling). Giver også mulighed for at bruge både Rolle-prik og farvede navne samtidigt.",
            option: {
                bothStyles: {
                    label: "Begge stile",
                    description: "Vis både rolle-prik og farvede navne"
                },
                copyRoleColorInProfilePopout: {
                    label: "Kopier rollefarve i profil-pop-up",
                    description: "Tillad klik på rolle-prik i profil-pop-up for at kopiere rollefarve"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Forbedrer menuen for sessioner (enheder). Giver dig mulighed for at se nøjagtige tidsstempler, give hver session et brugerdefineret navn og modtage notifikationer om nye sessioner.",
            new: "NY",
            newSessions: "Nye sessioner:",
            rename: "Omdøb",
            newDevice: "Nyt enhedsnavn",
            resetName: "Nulstil navn",
            save: "Gem",
            cancel: "Annuller",
            option: {
                backgroundCheck: {
                    label: "Baggrundstjek",
                    description: "Tjek for nye sessioner i baggrunden og vis notifikationer, når de opdages"
                },
                checkInterval: {
                    label: "Tjek-interval",
                    description: "Hvor ofte der skal tjekkes for nye sessioner i baggrunden (hvis aktiveret), i minutter"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Forbedrer din oplevelse når du åbner indstillingsmenuen",
            option: {
                disableFade: {
                    label: "Deaktiver fade",
                    description: "Deaktiver crossfade-animationen"
                },
                organizeMenu: {
                    label: "Organiser menu",
                    description: "Organiserer indstillings-tandhjulets genvejsmenu i kategorier"
                },
                eagerLoad: {
                    label: "Hurtig indlæsning",
                    description: "Fjerner indlæsningsforsinkelsen, når menuen åbnes for første gang"
                }
            },
            alert: {
                title: "Genstart påkrævet",
                restart: "Du har ændret indstillinger, der kræver en genstart.",
                confirm: "Genstart nu",
                cancel: "Senere!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Upload med et enkelt klik, åbn menuen med et højreklik"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Dette plugin giver dig mulighed for at forstørre stream-forhåndsvisninger",
            context: {
                viewPreview: "Vis stream-forhåndsvisning"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Blokerer beskeder der indeholder specifikke brugerdefinerede nøgleord, som hvis brugeren der sendte dem var blokeret.",
            option: {
                blockedWords: {
                    label: "Blokerede ord",
                    description: "Komma-separeret liste over ord der skal blokeres"
                },
                useRegex: {
                    label: "Brug Regex",
                    description: "Brug hver værdi som et regulært udtryk ved tjek af beskedindhold (avanceret)"
                },
                caseSensitive: {
                    label: "Forskel på store/små bogstaver",
                    description: "Hvorvidt søgningen skal tage højde for store og små bogstaver"
                },
                ignoreBlockedMessages: {
                    label: "Ignorer blokerede beskeder",
                    description: "Ignorerer fuldstændigt bjælken for (nylige) nye beskeder"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Forhindrer Krisp i at indlæse"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Slører vedhæftede filer i NSFW-kanaler, indtil musen holdes over dem",
            option: {
                blurAmount: {
                    label: "Sløringsstyrke",
                    description: "Sløringsstyrke (i pixels)"
                },
                blurAllChannels: {
                    label: "Slør alle kanaler",
                    description: "Slør vedhæftede filer i alle kanaler (ikke kun NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Gå udenom bekræftelsen ved fastgørelse (pinning), når du bruger pin-funktionerne"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Få stadig notifikationer fra specifikke kilder, når du er i 'vil ikke forstyrres' tilstand. Højreklik på brugere/kanaler/servere for at lade dem gå udenom 'vil ikke forstyrres'.",
            context: {
                remove: "Fjern status-bypass",
                add: "Tilføj status-bypass"
            },
            option: {
                guilds: {
                    label: "Servere",
                    description: "Servere der skal have lov at gå udenom (notificeres ved ping overalt på serveren)",
                    placeholder: "Adskil med komma"
                },
                channels: {
                    label: "Kanaler",
                    description: "Kanaler der skal have lov at gå udenom (notificeres ved ping i den kanal)",
                    placeholder: "Adskil med komma"
                },
                users: {
                    label: "Brugere",
                    description: "Brugere der skal have lov at gå udenom (notificeres ved alle beskeder i DM'er)",
                    placeholder: "Adskil med komma"
                },
                allowOutsideOfDms: {
                    label: "Tillad udenfor DM'er",
                    description: "Tillad valgte brugere at gå udenom status udenfor DM'er også (fungerer som en kanal/server bypass, men for alle beskeder sendt af de valgte brugere)"
                },
                notificationSound: {
                    label: "Notifikationslyd",
                    description: "Hvorvidt notifikationslyden skal afspilles"
                },
                respectSilentPings: {
                    label: "Respekter lydløse pings",
                    description: "Respekter lydløse pings (@silent / undertryk notifikationer)"
                },
                statusToUse: {
                    label: "Status der skal bruges",
                    description: "Status der skal bruges til hvidlisten",
                    online: "Online",
                    idle: "Ikke til stede",
                    dnd: "Vil ikke forstyrres",
                    invisible: "Usynlig"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Spor og vis brugerfødselsdage med kage-ikoner",
            context: {
                label: "Fødselsdag",
                setBirthday: "Indstil fødselsdag",
                clearBirthday: "Ryd fødselsdag",
                current: "Nuværende:"
            },
            option: {
                chat: {
                    label: "Chat",
                    description: "Vis kage-ikoner ved siden af brugernavne i chatten"
                },
                memberList: {
                    label: "Medlemsliste",
                    description: "Vis kage-ikoner i medlemslisten"
                },
                profileBadge: {
                    label: "Profilmærke",
                    description: "Vis kagemærke på brugerprofilen"
                },
                notificationSound: {
                    label: "Notifikationslyd",
                    description: "Afspil lyd, når der sendes en fødselsdagsnotifikation"
                },
                userList: {
                    label: "Gemte fødselsdage",
                    description: "Administrer gemte fødselsdage"
                }
            },
            locations: {
                chat: {
                    label: "Chat",
                    description: "ved siden af brugernavne i chatten"
                },
                memberList: {
                    label: "Medlemsliste",
                    description: "i medlemslisten"
                }
            },
            toast: {
                success: "Fødselsdag indstillet korrekt!",
                invalid: "Ugyldigt fødselsdagsformat! Kun DD/MM accepteres.",
                cleared: "Fødselsdag blev ryddet!"
            },
            notification: {
                title: "🎂 Fødselsdag i dag!",
                body: "Det er {{username}}s fødselsdag i dag!"
            },
            modal: {
                title: "Indstil fødselsdag for {{username}}",
                description: "Indtast fødselsdagen i formatet DD/MM (f.eks. 25/12)",
                placeholder: "f.eks. 25/12",
                current: "Nuværende fødselsdag:",
                set: "Indstil fødselsdag",
                cancel: "Annuller",
                birthday: "Det er min fødselsdag! 🎂",
                saved: "Gemte fødselsdage",
                savedDesc: "Ingen fødselsdage gemt endnu. Højreklik på brugere for at tilføje deres fødselsdage!",
                today: "I dag",
                remove: "Fjern",
                loading: "Indlæser...",
                save: "Gem",
                edit: "Rediger"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Viser opkaldstimere i alle stemmeopkald",
            option: {
                format: {
                    label: "Format",
                    description: "Kompakt eller letlæseligt format",
                    human: "30d 23t 00m 42s"
                },
                allCallTimers: {
                    label: "Alle opkaldstimere",
                    description: "Vis opkaldstimere for alle brugere i servere"
                },
                showWithoutHover: {
                    label: "Vis uden at holde musen over",
                    description: "Vis altid timeren uden at skulle holde musen over"
                },
                showRoleColor: {
                    label: "Vis rollefarve",
                    description: "Vis i brugerens rollefarve (hvis ShowRoleColor-ekstensionen er aktiveret)"
                },
                trackSelf: {
                    label: "Spor dig selv",
                    description: "Vis også din egen timer"
                },
                showSeconds: {
                    label: "Vis sekunder",
                    description: "Vis sekunder i timeren"
                },
                watchLargeGuilds: {
                    label: "Overvåg store servere",
                    description: "Spor brugere i store servere. Dette kan forårsage forsinkelse, hvis du er i mange store servere med aktive stemmebrugere. Testet med op til 2000 aktive brugere uden problemer."
                },
                fixUI: {
                    label: "Brugerflade-fix",
                    description: "I nogle tilfælde kan timeren ødelægge brugerfladen. Aktiver denne indstilling for at rette det."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Tilføjer mærker til kanaler baseret på deres type",
            badge: {
                private: "Denne kanal er låst.",
                nsfw: "Denne kanal er markeret som NSFW.",
                rules: "Denne kanal er serverens regelkanal."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Ét mærke pr. kanal",
                    description: "Vis kun ét mærke pr. kanal"
                },
                showTextBadge: {
                    label: "Vis tekstmærke",
                    description: "Vis tekstmærke"
                },
                showVoiceBadge: {
                    label: "Vis stemmemærke",
                    description: "Vis stemmemærke"
                },
                showCategoryBadge: {
                    label: "Vis kategorimærke",
                    description: "Vis kategorimærke"
                },
                showDirectoryBadge: {
                    label: "Vis biblioteksmærke",
                    description: "Vis biblioteksmærke"
                },
                showAnnouncementThreadBadge: {
                    label: "Vis meddelelsestrådmærke",
                    description: "Vis meddelelsestrådmærke"
                },
                showPublicThreadBadge: {
                    label: "Vis offentlig trådmærke",
                    description: "Vis offentlig trådmærke"
                },
                showPrivateThreadBadge: {
                    label: "Vis privat trådmærke",
                    description: "Vis privat trådmærke"
                },
                showStageBadge: {
                    label: "Vis scenemærke",
                    description: "Vis scenemærke"
                },
                showAnnouncementBadge: {
                    label: "Vis meddelelsesmærke",
                    description: "Vis meddelelsesmærke"
                },
                showForumBadge: {
                    label: "Vis forummærke",
                    description: "Vis forummærke"
                },
                showMediaBadge: {
                    label: "Vis mediemærke",
                    description: "Vis mediemærke"
                },
                showNSFWBadge: {
                    label: "Vis NSFW-mærke",
                    description: "Vis NSFW-mærke"
                },
                showLockedBadge: {
                    label: "Vis låst mærke",
                    description: "Vis låst mærke"
                },
                showRulesBadge: {
                    label: "Vis regelmærke",
                    description: "Vis regelmærke"
                },
                showUnknownBadge: {
                    label: "Vis ukendt mærke",
                    description: "Vis ukendt mærke"
                },
                textBadgeLabel: {
                    label: "Tekstmærke-etiket",
                    description: "Tekstmærke-etiket",
                    default: "Tekst"
                },
                voiceBadgeLabel: {
                    label: "Stemmemærke-etiket",
                    description: "Stemmemærke-etiket",
                    default: "Stemmme"
                },
                categoryBadgeLabel: {
                    label: "Kategorimærke-etiket",
                    description: "Kategorimærke-etiket",
                    default: "Kategori"
                },
                announcementBadgeLabel: {
                    label: "Meddelelsestrådmærke-etiket",
                    description: "Meddelelsestrådmærke-etiket",
                    default: "Nyheder"
                },
                announcementThreadBadgeLabel: {
                    label: "Meddelelsestrådmærke-etiket",
                    description: "Meddelelsestrådmærke-etiket",
                    default: "Nyhedstråd"
                },
                publicThreadBadgeLabel: {
                    label: "Offentlig trådmærke-etiket",
                    description: "Offentlig trådmærke-etiket",
                    default: "Tråd"
                },
                privateThreadBadgeLabel: {
                    label: "Privat trådmærke-etiket",
                    description: "Privat trådmærke-etiket",
                    default: "Privat Tråd"
                },
                stageBadgeLabel: {
                    label: "Scenemærke-etiket",
                    description: "Scenemærke-etiket",
                    default: "Scene"
                },
                directoryBadgeLabel: {
                    label: "Biblioteksmærke-etiket",
                    description: "Biblioteksmærke-etiket",
                    default: "Bibliotek"
                },
                forumBadgeLabel: {
                    label: "Forummærke-etiket",
                    description: "Forummærke-etiket",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Mediemærke-etiket",
                    description: "Mediemærke-etiket",
                    default: "Medie"
                },
                nsfwBadgeLabel: {
                    label: "NSFW-mærke-etiket",
                    description: "NSFW-mærke-etiket",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Låst mærke-etiket",
                    description: "Låst mærke-etiket",
                    default: "Låst"
                },
                rulesBadgeLabel: {
                    label: "Regelmærke-etiket",
                    description: "Regelmærke-etiket",
                    default: "Regler"
                },
                unknownBadgeLabel: {
                    label: "Ukendt mærke-etiket",
                    description: "Ukendt mærke-etiket",
                    default: "Ukendt"
                },
                textBadgeColor: {
                    label: "Tekstmærkefarve",
                    description: "Tekstmærkefarve"
                },
                voiceBadgeColor: {
                    label: "Stemmemærkefarve",
                    description: "Stemmemærkefarve"
                },
                categoryBadgeColor: {
                    label: "Kategorimærkefarve",
                    description: "Kategorimærkefarve"
                },
                announcementBadgeColor: {
                    label: "Meddelelsestrådfarve",
                    description: "Meddelelsestrådfarve"
                },
                announcementThreadBadgeColor: {
                    label: "Meddelelsestrådfarve",
                    description: "Meddelelsestrådfarve"
                },
                publicThreadBadgeColor: {
                    label: "Offentlig trådfarve",
                    description: "Offentlig trådfarve"
                },
                privateThreadBadgeColor: {
                    label: "Privat trådfarve",
                    description: "Privat trådfarve"
                },
                stageBadgeColor: {
                    label: "Scenemærkefarve",
                    description: "Scenemærkefarve"
                },
                directoryBadgeColor: {
                    label: "Biblioteksmærkefarve",
                    description: "Biblioteksmærkefarve"
                },
                forumBadgeColor: {
                    label: "Forummærkefarve",
                    description: "Forummærkefarve"
                },
                mediaBadgeColor: {
                    label: "Mediemærkefarve",
                    description: "Mediemærkefarve"
                },
                nsfwBadgeColor: {
                    label: "NSFW-mærkefarve",
                    description: "NSFW-mærkefarve"
                },
                lockedBadgeColor: {
                    label: "Låst mærkefarve",
                    description: "Låst mærkefarve"
                },
                rulesBadgeColor: {
                    label: "Regelmærkefarve",
                    description: "Regelmærkefarve"
                },
                unknownBadgeColor: {
                    label: "Ukendt mærkefarve",
                    description: "Ukendt mærkefarve"
                }
            },
            badges: {
                text: "Tekst",
                voice: "Stemme",
                category: "Kategori",
                announcement: "Nyheder",
                announcementThread: "Nyhedstråd",
                publicThread: "Tråd",
                privateThread: "Privat Tråd",
                stage: "Scene",
                directory: "Bibliotek",
                forum: "Forum",
                media: "Medie",
                nsfw: "NSFW",
                locked: "Låst",
                rules: "Regler",
                unknown: "Ukendt"
            },
            tooltip: {
                locked: "Denne kanal er låst.",
                nsfw: "Denne kanal er markeret som NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Grupper dine mest besøgte kanaler i faner, ligesom en browser",
            open: "Åbn i ny fane",
            animation: {
                title: "Animationsstyring",
                description: "Aktiver eller deaktiver specifikke animationer for kanalfaner. Hver indstilling kan slås til/fra uafhængigt.",
                placeholder: "Vælg hvilke animationer der skal aktiveres...",
                tabHover: "Fane-hover-effekter (løft + skalering)",
                tabSelection: "Valgt fane-løfte-animation",
                tabDragDrop: "Fane træk-og-slip (ghost + rækkefølge)",
                tabEnterExit: "Fane ind/ud-glidning (oprettelse + lukning)",
                tabIconPop: "Ikon-pop ved markering (ikon-skalering)",
                closeRotation: "Lukkeknap-rotation",
                plusPulse: "Plus-knap-puls",
                mentionGlow: "Mention-mærke-glød",
                compactExpand: "Kompakt tilstand-udvidelse",
                selectedBorder: "Valgt fane blå kant",
                selectedBackground: "Valgt fane baggrundsfarve",
                tabShadows: "Fane-skyggeeffekter",
                tabRepositioning: "Fane-repositionering (glatte positionsskift)",
                resizeHandle: "Størrelseshåndtag-fading",
                questActivate: "Aktiv Quest-gradient"
            },
            bookmark: {
                label: "Bogmærke",
                unknown: "Ukendt bruger",
                folder: "Mappe",
                add: "Tilføj til bogmærker",
                edit: "Rediger bogmærke",
                delete: "Slet bogmærke",
                remove: "Fjern fra bogmærker",
                removeFolder: "Fjern bogmærke fra mappe",
                loading: "Indlæser bogmærker...",
                noBookmarks: "Du har ingen bogmærker. Du kan tilføje en åben fane eller skjule dette ved at højreklikke",
                quests: "Quests",
                messageRequests: "Beskedanmodninger",
                friends: "Venner",
                shop: "Butik",
                library: "Bibliotek",
                discovery: "Opdagelse",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Aktivitet",
                specialPage: "Speciel side",
                searchPlaceholder: "Søg i bogmærker"
            },
            button: {
                save: "Gem",
                delete: "Slet",
                cancel: "Annuller",
                reset: "Nulstil",
                close: "Luk"
            },
            context: {
                label: "ChannelTabs Kontextmenu",
                bookmark: "ChannelTabs Bogmærke Kontextmenu",
                tab: "ChannelTabs Fane Kontextmenu",
                folderMenu: "Bogmærkemappe Menu",
                compact: "Kompakt",
                bookmarkBar: "Bogmærkelinje",
                openAll: "Åbn alle i bogmærker",
                openNew: "Åbn i ny fane",
                close: {
                    tab: "Luk fane",
                    otherTabs: "Luk andre faner",
                    tabsToRight: "Luk faner til højre",
                    tabsToLeft: "Luk faner til venstre",
                    reopen: "Genåbn lukket fane",
                    allTabs: "Luk alle faner"
                }
            },
            error: {
                noLogin: "Der er ingen konto logget ind?"
            },
            modal: {
                add: {
                    title: "Tilføj bogmærke til mappe",
                    select: "Vælg en mappe",
                    create: "Opret en"
                },
                edit: {
                    title: "Rediger bogmærke",
                    name: "Bogmærkenavn",
                    folder: "Mappefarve"
                },
                delete: {
                    title: "Er du sikker?",
                    description: "Sletning af en bogmærkemappe vil også slette alle bogmærker i den."
                },
                folderIcon: {
                    title: "Vælg Mappeikon",
                    preview: "Forhåndsvisning",
                    iconColor: "Ikonfarve",
                    search: "Søg",
                    searchPlaceholder: "Søg i {{count}} ikoner...",
                    folderName: "Mappenavn",
                    folderColor: "Mappefarve",
                    folderIcon: "Mappeikon",
                    chooseIcon: "Vælg Ikon",
                    useDefaultIcon: "Brug Standardikon"
                }
            },
            option: {
                onStartup: {
                    label: "Ved opstart",
                    description: "Hvad skal der ske med faner ved opstart",
                    nothing: "Gør intet (åbn på venner-fanen)",
                    remember: "Husk faner fra sidst",
                    open: "Åbn med et bestemt sæt faner"
                },
                tabSet: {
                    label: "Fanesæt"
                },
                noPomeloNames: {
                    label: "Ingen Pomelo-navne",
                    description: "Brug visningsnavne i stedet for brugernavne til DM'er"
                },
                showStatusIndicators: {
                    label: "Vis statusindikatorer",
                    description: "Vis statusindikatorer for DM'er"
                },
                showBookmarkBar: {
                    label: "Vis bogmærkelinje"
                },
                persistUnreadCountFallback: {
                    label: "Bevar fallback for ulæst antal",
                    description: "Bevar fallback for ulæste badges mellem genindlæsninger for faner og bogmærker"
                },
                bookmarkNotificationDot: {
                    label: "Bogmærke-notifikationsprik",
                    description: "Vis notifikationsprik på bogmærker"
                },
                widerTabsAndBookmarks: {
                    label: "Bredere faner og bogmærker",
                    description: "Udvid længden af faner og bogmærker til større skærme"
                },
                tabWidthScale: {
                    label: "Fanebredde-skala",
                    description: "Fanebredde-skala (procent) - kan justeres ved at trække i fanekanter"
                },
                renderAllTabs: {
                    label: "Render alle faner",
                    description: "Hold alle faner i hukommelsen for hurtigere skift (gemmer scroll-position og tilstand)"
                },
                switchToExistingTab: {
                    label: "Skift til eksisterende fane",
                    description: "Skift til fanen, hvis den allerede findes for den kanal, du navigerer til"
                },
                createNewTabIfNotExists: {
                    label: "Opret ny fane hvis den ikke findes",
                    description: "Opret en ny fane, hvis der ikke findes en for den kanal, du navigerer til"
                },
                enableRapidNavigation: {
                    label: "Aktiver hurtig navigation",
                    description: "Aktiver hurtig navigation - hurtig skift mellem kanaler vil erstatte den nuværende fane i stedet for at oprette nye"
                },
                rapidNavigationThreshold: {
                    label: "Tærskel for hurtig navigation",
                    description: "Tidsvindue (i millisekunder) for hurtig navigation. Inden for denne tid erstatter nye kanaler den nuværende fane."
                },
                tabBarPosition: {
                    label: "Fanelinje-position",
                    description: "Position af fanelinjen",
                    top: "Top",
                    bottom: "Bund"
                },
                enableNumberKeySwitching: {
                    label: "Aktiver nummertast-skift",
                    description: "Brug nummertaster (1-9) til at skifte faner"
                },
                numberKeySwitchCount: {
                    label: "Antal nummertast-faner",
                    description: "Antal faner tilgængelige via nummertaster (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Aktiver 'Luk fane'-genvej",
                    description: "Aktiver tastaturgenvej til at lukke faner"
                },
                enableNewTabShortcut: {
                    label: "Aktiver 'Ny fane'-genvej",
                    description: "Aktiver tastaturgenvej til at oprette nye faner"
                },
                enableTabCycleShortcut: {
                    label: "Aktiver fane-cyklus-genvej",
                    description: "Aktiver tastaturgenvej til at skifte mellem faner"
                },
                keybindsSection: {
                    label: "Genveje",
                    description: "Klik på en knap og tryk på din ønskede tastekombination. Modifikatorer som CTRL, SHIFT og ALT understøttes.",
                    title: "Tastaturgenveje",
                    reset: "Nulstil alle til standard",
                    shortcutDisabled: "Denne genvej er i øjeblikket deaktiveret",
                    pressKey: "Tryk på en vilkårlig tast...",
                    conflictError: "Denne genvej bruges allerede af: {{key}}",
                    closeTab: {
                        label: "Luk fane",
                        description: "Luk den nuværende aktive fane"
                    },
                    newTab: {
                        label: "Ny fane",
                        description: "Åbn en ny fane med den nuværende kanal"
                    },
                    cycleTabsForward: {
                        label: "Skift til næste fane",
                        description: "Skift til næste fane (starter forfra)"
                    },
                    cycleTabsBackward: {
                        label: "Skift til forrige fane",
                        description: "Skift til forrige fane (går til den sidste)"
                    }
                },
                closeTabKeybind: {
                    label: "Luk fane-genvej",
                    description: "Tastaturgenvej til at lukke den nuværende fane"
                },
                newTabKeybind: {
                    label: "Ny fane-genvej",
                    description: "Tastaturgenvej til at åbne en ny fane"
                },
                cycleTabForwardKeybind: {
                    label: "Næste fane-genvej",
                    description: "Tastaturgenvej til at skifte til næste fane"
                },
                cycleTabBackwardKeybind: {
                    label: "Forrige fane-genvej",
                    description: "Tastaturgenvej til at skifte til forrige fane"
                },
                showTabNumbers: {
                    label: "Vis fanenumre",
                    description: "Vis nummererede mærker på faner for at indikere genveje"
                },
                tabNumberPosition: {
                    label: "Fanenummer-position",
                    description: "Hvor det nummererede mærke skal vises på fanerne",
                    left: "Venstre side (før ikon)",
                    right: "Højre side (efter indhold)"
                },
                animations: {
                    label: "Animationer"
                },
                animationHover: {
                    label: "Animation ved hover",
                    description: "Aktiver løft- og skaleringseffekter ved hover"
                },
                animationSelection: {
                    label: "Animation ved markering",
                    description: "Aktiver markeringsanimationer (kantglød, løft)"
                },
                animationDragDrop: {
                    label: "Animation ved træk-og-slip",
                    description: "Aktiver ghost-effekter ved træk-og-slip"
                },
                animationEnterExit: {
                    label: "Animation ved ind/ud",
                    description: "Aktiver glidende animationer når faner oprettes/lukkes"
                },
                animationIconPop: {
                    label: "Animation ved ikon-pop",
                    description: "Aktiver ikon-skalering ved markering"
                },
                animationCloseRotation: {
                    label: "Animation ved lukke-rotation",
                    description: "Aktiver rotationsanimation for lukkeknapper"
                },
                animationPlusPulse: {
                    label: "Animation ved plus-knap-puls",
                    description: "Aktiver pulserende animation for plus-knappen"
                },
                animationMentionGlow: {
                    label: "Animation ved mention-glød",
                    description: "Aktiver pulserende rød glød for mentions"
                },
                animationCompactExpand: {
                    label: "Animation ved kompakt/udvid",
                    description: "Aktiver glidende udvidelse for kompakte faner"
                },
                animationSelectedBorder: {
                    label: "Animation på valgt kant",
                    description: "Aktiver kant- og glødstyling for valgte faner"
                },
                animationSelectedBackground: {
                    label: "Animation på valgt baggrund",
                    description: "Aktiver baggrundsfarveskift for valgte faner"
                },
                animationTabShadows: {
                    label: "Animation på faneskygger",
                    description: "Aktiver skyggeeffekter på faner"
                },
                animationTabPositioning: {
                    label: "Animation ved fanepositionering",
                    description: "Aktiver glatte overgange, når faner flytter position"
                },
                animationResizeHandle: {
                    label: "Animation ved størrelseshåndtag",
                    description: "Aktiver fade-animation for størrelseshåndtaget"
                },
                animationQuestsActive: {
                    label: "Animation ved aktive Quests",
                    description: "Aktiver gradient-animationer på Quests-fanen, når quests kører"
                },
                compactAutoExpandSelected: {
                    label: "Kompakt auto-udvidelse ved markering",
                    description: "Udvid automatisk kompakte faner, når de vælges, for at vise hele kanalnavnet"
                },
                compactAutoExpandOnHover: {
                    label: "Kompakt auto-udvidelse ved hover",
                    description: "Udvid automatisk kompakte faner ved hover for at vise hele kanalnavnet"
                },
                openInNewTabAutoSwitch: {
                    label: "Auto-skift ved 'Åbn i ny fane'",
                    description: "Skift automatisk til nye faner åbnet fra 'Åbn i ny fane'-menuen"
                },
                bookmarksIndependentFromTabs: {
                    label: "Bogmærker uafhængige af faner",
                    description: "Bogmærker navigerer uafhængigt uden at påvirke den aktive fanelinje"
                },
                showResizeHandle: {
                    label: "Vis størrelseshåndtag",
                    description: "Vis størrelseshåndtag ved hover over faner for at justere bredden"
                },
                openNewTabsInCompactMode: {
                    label: "Åbn nye faner i kompakt tilstand",
                    description: "Åbn alle nye faner i kompakt tilstand som standard"
                },
                newTabButtonBehavior: {
                    label: "Ny fane-knap adfærd",
                    description: "Ny fane (+)-knappen følger fanerne i stedet for at være låst til højre"
                },
                oneTabPerServer: {
                    label: "Én fane pr. server",
                    description: "Begræns til én fane pr. server, så åbning af en ny kanal i samme server bruger den eksisterende fane."
                },
                maxOpenTabs: {
                    label: "Maks. åbne faner",
                    description: "Maksimalt antal åbne faner (0 = ubegrænset)"
                }
            },
            tabs: {
                startup: "Opstartsfaner",
                currently: "Indstil til nuværende åbne faner"
            },
            toast: {
                notRestoring: "Gendanner ikke faner, da KeepCurrentChannel er aktiveret",
                failed: {
                    restore: "Kunne ikke gendanne faner",
                    saved: "Kunne ikke indlæse gemte faner"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Viser en tegntæller i beskedfeltet",
            option: {
                colorEffects: {
                    label: "Farveeffekter",
                    description: "Slå farveeffekter til/fra, når man nærmer sig tegngrænsen"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Skjuler alle kanaler i sammenklappede kategorier, selvom de har ulæste beskeder."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Fjern alle emoji og dekoration fra kanalnavne"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Fjerner automatisk sporingselementer fra URL'er, du sender"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Klik på roller i brugerprofiler og medlemslisten for at se, hvilke medlemmer der har dem.",
            modal: {
                loading: "Indlæser medlemmer...",
                noMembers: "Ingen medlemmer fundet.",
                unknown: "Ukendt rolle"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Gør det muligt lokalt at skjule næsten alt indhold fra enhver bruger",
            replying: "Svarer på blokeret besked",
            option: {
                hideVc: {
                    label: "Skjul stemmekanaler",
                    description: "Skjul stemmekanaler, der indeholder blokerede brugere."
                },
                usersToBlock: {
                    label: "Brugere der skal blokeres",
                    description: "Bruger-ID'er adskilt af komma og mellemrum"
                },
                hideBlockedUsers: {
                    label: "Skjul blokerede brugere",
                    description: "Skal blokerede brugere skjules overalt"
                },
                hideBlockedMessages: {
                    label: "Skjul blokerede beskeder",
                    description: "Skal beskeder fra blokerede brugere skjules helt"
                },
                hideEmptyRoles: {
                    label: "Skjul tomme roller",
                    description: "Skal rollehoveder skjules, hvis alle deres medlemmer er blokerede"
                },
                blockedReplyDisplay: {
                    label: "Visning af svar på blokeret",
                    description: "Hvad skal vises i stedet for beskeden, når nogen svarer en bruger, du har skjult",
                    displayText: "Vis tekst, der siger at en skjult besked blev besvaret",
                    hideReply: "Absolut intet"
                },
                guildBlackList: {
                    label: "Server-sortliste",
                    description: "Server-ID'er hvor funktionaliteten skal deaktiveres"
                },
                guildWhiteList: {
                    label: "Server-hvidliste",
                    description: "Server-ID'er hvor funktionaliteten skal aktiveres"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Genskabelse af det gamle klient-temaeksperiment. Tilføj en farve til dit Discord-tema",
            title: "Temafarve",
            add: "Tilføj en farve til dit Discord-tema",
            option: {
                color: {
                    label: "Farve"
                },
                resetColor: {
                    label: "Nulstil farve"
                }
            },
            error: {
                modal: {
                    title: "Dit tema vil ikke se godt ud!",
                    contrast: "Den valgte farve har ikke god kontrast til tekst",
                    nitro: "Nitro-temaer understøttes ikke",
                    switch: "Skift til {{oppositeTheme}} tilstand",
                    disable: "Deaktiver Nitro-tema",
                    reset: "Nulstil temafarve"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Tilføj flere Clip FPS- og varighedsmuligheder, plus RPC-tagging!",
            minutes: "Minutter",
            option: {
                richPresenceTagging: {
                    label: "Rich Presence Tagging",
                    description: "Hvornår skal clips tagges med den nuværende Rich Presence?",
                    always: "Altid",
                    only: "Kun når start eller slut af aktivitetsnavnet matcher",
                    never: "Aldrig"
                },
                enableScreenshotKeybind: {
                    label: "Aktiver genvej til skærmbillede",
                    description: "Aktiver genvejsfunktionen til skærmbilleder"
                },
                enableVoiceOnlyClips: {
                    label: "Aktiver clips med kun lyd",
                    description: "Aktiver clips med kun lyd (uden video)"
                },
                enableAdvancedSignals: {
                    label: "Aktiver avancerede signaler",
                    description: "Aktiver avancerede clip-signaler (auto-clip triggers)"
                },
                ignorePlatformRestriction: {
                    label: "Ignorer platformsbegrænsning",
                    description: "Tillad clipping på begrænsede platforme (kan forårsage gemmefejl)"
                },
                clipsLink: {
                    label: "Clips Link",
                    link: "Skift FPS og varighed i Clips-indstillingerne!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Fjerner de farveblind-venlige ikoner fra statusser, ligesom Discord var i 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Gør det muligt at navigere i brugerfladen med et tastatur.",
            action: {
                command: {
                    label: "Kør kommando",
                    description: "Alias en anden palet-kommando via ID. Brug vælgeren, hvis du er usikker på ID'et."
                },
                settings: {
                    label: "Åbn indstillingsside",
                    description: "Hop direkte til en Discord-indstillingsside. Vælg en side fra vælgeren."
                },
                url: {
                    label: "Åbn URL",
                    description: "Åbn et link. Brug https:// links for bedst kompatibilitet."
                },
                macro: {
                    label: "Kør makro",
                    description: "Kør en sekvens af kommandoer i rækkefølge. Tilføj trin via vælgeren."
                }
            },
            category: {
                auto: "Auto (standardplacering)",
                default: {
                    label: "Hurtige handlinger",
                    description: "Almindelige Plexcord-genveje"
                },
                plugins: {
                    label: "Plugins",
                    description: "Aktiver, deaktiver og konfigurer Plexcord-plugins",
                    enable: {
                        label: "Aktiver Plugins"
                    },
                    disable: {
                        label: "Deaktiver Plugins"
                    },
                    settings: {
                        label: "Plugin-indstillinger"
                    },
                    toolbox: {
                        label: "Plugin-handlinger"
                    },
                    chatbar: {
                        label: "Chatlinje-knapper"
                    },
                    changes: {
                        label: "Plugin-ændringer"
                    }
                },
                context: {
                    label: "Nuværende kontekst",
                    description: "Handlinger for den valgte kanal og server"
                },
                updates: {
                    label: "Opdateringer",
                    description: "Hold dig opdateret med Plexcord"
                },
                discordSettings: {
                    label: "Discord-indstillinger",
                    description: "Hop til Discords konfigurationssider"
                },
                custom: {
                    label: "Brugerdefinerede kommandoer",
                    description: "Brugerdefinerede kommandoer i paletten"
                },
                sessions: {
                    label: "Sessionsværktøjer",
                    description: "Værktøjer til at administrere din Discord-session"
                },
                guilds: {
                    label: "Servere",
                    description: "Naviger hurtigt til dine servere"
                },
                friends: {
                    label: "Venner",
                    description: "Naviger hurtigt til dine venner"
                },
                action: {
                    label: "Handling"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Åbn Plexcord-indstillinger",
                        plugin: "Åbn plugin-indstillinger"
                    }
                },
                reload: {
                    label: "Genindlæs Discord",
                    description: "Genindlæser det nuværende Discord-vindue"
                }
            },
            command: {
                enable: "Aktiver {{pluginName}}",
                enabled: "Aktiverede {{pluginName}}",
                disable: "Deaktiver {{pluginName}}",
                disabled: "Deaktiverede {{pluginName}}",
                failed: "Kommando fejlede:",
                toggleFailed: "Kunne ikke skifte {{pluginName}}.",
                pluginSettings: "{{pluginName}}-indstillinger",
                untitled: "Navnløs kommando",
                new: "Ny kommando",
                error: {
                    enter: "Indtast et kommando-ID eller vælg et herunder.",
                    noCommand: "Ingen kommando matcher dette ID."
                },
                discord: {
                    account: "Åbn Min konto",
                    privacy: "Åbn Privatliv og sikkerhed",
                    notifications: "Åbn Notifikationer",
                    voice: "Åbn Stemme og video",
                    text: "Åbn Tekst og billeder",
                    appearance: "Åbn Udseende",
                    accessibility: "Åbn Tilgængelighed",
                    keybinds: "Åbn Genvejstaster",
                    advanced: "Åbn Avanceret",
                },
                updates: {
                    check: {
                        label: "Søg efter opdateringer",
                        description: "Søg efter Plexcord-opdateringer",
                        one: "Én opdatering tilgængelig",
                        multiple: "{{count}} opdateringer tilgængelige",
                        none: "Ingen opdateringer tilgængelige",
                        failed: "Kunne ikke søge efter opdateringer."
                    },
                    changelog: {
                        label: "Vis ændringslog",
                        description: "Åbner Plexcords ændringslog"
                    }
                },
                read: {
                    mark: {
                        label: "Marker {{channelLabel}} som læst"
                    }
                },
                pin: {
                    open: {
                        label: "Åbn fastgjorte beskeder for {{channelLabel}}"
                    },
                    toggle: {
                        label: "Skift fastgørelse på sidste kommando"
                    }
                },
                channel: {
                    mute: {
                        label: "Mute {{channelLabel}}",
                        oneHour: "Mute {{channelLabel}} i 1 time",
                        untilTomorrow: "Mute {{channelLabel}} indtil i morgen",
                    },
                    unmute: {
                        label: "Unmute {{channelLabel}}",
                    },
                    reopen: {
                        label: "Genåbn sidste lukkede DM"
                    },
                    dm: {
                        open: {
                            label: "Åbn DM med {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Åbn indstillinger for {{guildLabel}}"
                    },
                    navigate: {
                        label: "Naviger til {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Sæt Vil ikke forstyrres i 30 minutter",
                    oneHourDnd: "Sæt Vil ikke forstyrres i 1 time",
                    cancelStatusReset: "Annuller statustimer"
                },
                status: {
                    set: {
                        online: "Sæt status: Online",
                        idle: "Sæt status: Inaktiv",
                        dnd: "Sæt status: Vil ikke forstyrres",
                        invisible: "Sæt status: Usynlig"
                    }
                },
                toggle: {
                    streamer: "Skift Streamer-tilstand",
                    mute: "Skift egen mute",
                    deafen: "Skift egen deafen",
                },
                notification: {
                    clear: {
                        label: "Ryd skrivebordsnotifikationer"
                    }
                },
                palette: {
                    settings: {
                        label: "Åbn indstillinger for Command Palette",
                        description: "Konfigurer Command Palette-pluginnet"
                    }
                },
                recent: {
                    label: "Vis seneste kommandoer",
                    description: "Viser de sidst kørte kommandoer",
                    rerun: "Kør sidste kommando igen"
                },
                plugin: {
                    reload: {
                        label: "Genindlæs alle plugins",
                        description: "Forsøger at hot-reloade alle aktiverede plugins"
                    },
                    enable: {
                        label: "Aktiver alle plugins"
                    },
                    disable: {
                        label: "Deaktiver alle ikke-påkrævede plugins"
                    },
                    restart: {
                        label: "Genstart Plexcord",
                        description: "Genindlæser Discords klientvindue"
                    }
                },
                quickCSS: {
                    label: "Skift Quick CSS"
                },
                transparentity: {
                    label: "Skift vindues-gennemsigtighed"
                },
                theme: {
                    open: {
                        label: "Åbn indstillinger for klient-tema"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Søg efter kommandoer",
                noCommand: "Ingen kommandoer fundet",
                add: {
                    title: "Tilføj kommando"
                },
                choose: {
                    title: "Vælg kommando"
                },
                command: {
                    palette: {
                        label: "Command Palette",
                        placeholder: "Skriv en kommando",
                        filtering: "Filtrerer efter {{tags}}",
                        noCommand: "Ingen kommandoer fundet",
                        pin: "Fastgør kommando",
                        unpin: "Fjern fastgørelse"
                    },
                    target: {
                        label: "Målkommando-ID",
                        placeholder: "Indtast kommando-ID",
                        choose: "Vælg kommando"
                    },
                    custom: {
                        label: "Brugerdefinerede kommandoer",
                        description: "1) Navngiv kommandoen · 2) Tilføj valgfri beskrivelse/søgeord/tags/kategori · 3) Vælg en handling og udfyld detaljerne (ID'er skal matche eksisterende palet-kommandoer for aliaser og makroer).",
                        auto: "Auto (standard)",
                        expand: "Udvid",
                        collapse: "Skjul",
                        collapsed: {
                            label: "Etiket",
                            description: "Visningsnavn",
                            advanced: {
                                hide: "Skjul avancerede indstillinger",
                                show: "Vis avancerede indstillinger"
                            },
                            subtitle: {
                                label: "Beskrivelse",
                                placeholder: "Valgfri undertitel"
                            },
                            keywords: {
                                label: "Søgeord",
                                placeholder: "Kommaseparerede søgeord"
                            },
                            tags: {
                                label: "Tags",
                                placeholder: "Kommaseparerede tags"
                            },
                            suggestion: {
                                label: "Forslag"
                            },
                            chooseCommand: {
                                label: "Vælg hvor denne kommando skal vises i paletten."
                            },
                            danger: {
                                label: "Vis som farlig"
                            }
                        },
                        remove: "Fjern kommando",
                        add: "Tilføj kommando"
                    }
                },
                settings: {
                    noSelected: "Ingen side valgt",
                    current: "Nuværende side",
                    choose: "Vælg side..."
                },
                url: {
                    url: "URL",
                    error: "Brug http:// eller https:// links.",
                    valid: "Indtast en gyldig URL.",
                    open: {
                        external: "Åbn eksternt",
                    }
                },
                macro: {
                    sequence: {
                        label: "Kommandosekvens",
                        placeholder: "kommando-a, kommando-b"
                    },
                    addStep: "Tilføj trin",
                    unknownId: "Ukendte kommando-ID'er"
                }
            },
            status: {
                online: "Online",
                idle: "Inaktiv",
                dnd: "Vil ikke forstyrres",
                invisible: "Usynlig"
            },
            tag: {
                core: "Kerne",
                navigation: "Navigation",
                utility: "Værktøj",
                developer: "Udvikler",
                customization: "Tilpasning",
                plugins: "Plugins",
                session: "Session",
                context: "Kontekst",
                custom: "Brugerdefineret",
                guilds: "Servere",
                friends: "Venner",
                other: "Andet"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Kunne ikke finde '{{label}}' chatknappen.",
                        failedToTrigger: "Kunne ikke aktivere {{label}}.",
                        activated: "{{label}} aktiveret."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Kanal-mute-styring utilgængelig",
                        muted: "Mutede kanalen.",
                        unmuted: "Unmutede kanalen.",
                        failed: "Kunne ikke opdatere kanalens mute-tilstand."
                    },
                    dm: {
                        no: "Ingen lukkede DM'er registreret i denne session.",
                        reOpened: "Genåbnede sidste lukkede DM.",
                        noAvailable: "Denne DM er ikke længere tilgængelig."
                    }
                },
                command: {
                    loop: "Kommandoløkke fundet i makro-udførelsen.",
                    notFound: "Kommando {{commandId}} blev ikke fundet.",
                    unsupported: "Ikke-understøttet brugerdefineret handling.",
                    failedToRun: "Kunne ikke køre {{label}}.",
                    notMetadata: "Metadata for Command Palette-plugin utilgængelig."
                },
                guild: {
                    mute: {
                        unavailable: "Server-mute-styring utilgængelig",
                        muted: "Mutede serveren.",
                        unmuted: "Unmutede serveren.",
                        failed: "Kunne ikke opdatere serverens mute-tilstand."
                    },
                    settings: {
                        unable: "Kunne ikke åbne serverindstillinger.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Kunne ikke åbne panelet for fastgjorte beskeder.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Annullerede planlagt status-nulstilling.",
                        unableToChange: "Kan ikke ændre status lige nu.",
                        reverted: "Status blev ført tilbage til {{status}}.",
                        dnd: "Vil ikke forstyrres i {{duration}} minutter."
                    },
                    change: {
                        unableToChange: "Kan ikke ændre status lige nu.",
                        changed: "Status ændret til {{status}}."
                    }
                },
                read: {
                    marked: "Markerede {{channelLabel}} som læst.",
                    failed: "Kunne ikke markere kanal som læst."
                },
                route: {
                    unable: "Kunne ikke åbne {{destination}}.",
                },
                notification: {
                    cleared: "Ryddede alle notifikationer.",
                    failed: "Kunne ikke rydde notifikationer.",
                    notSupported: "Rydning af notifikationer understøttes ikke."
                },
                streamerMode: {
                    enabled: "Streamer-tilstand aktiveret.",
                    disabled: "Streamer-tilstand deaktiveret.",
                },
                voice: {
                    micToggle: {
                        muted: "Mikrofon mutet.",
                        unmuted: "Mikrofon unmutet."
                    },
                    deafenToggle: {
                        deafened: "Du er nu deafened.",
                        undeafened: "Du er ikke længere deafened."
                    }
                },
                quickCSS: {
                    enabled: "Quick CSS aktiveret.",
                    disabled: "Quick CSS deaktiveret."
                },
                transparentity: {
                    enabled: "Vindues-gennemsigtighed aktiveret.",
                    disabled: "Vindues-gennemsigtighed deaktiveret."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} er deaktiveret.",
                        disable: "{{pluginName}} er deaktiveret. Aktiver pluginnet for at bruge denne handling."
                    },
                    required: {
                        label: "{{pluginName}} kræver genstart for at genindlæse."
                    },
                    stop: {
                        failed: "Kunne ikke stoppe {{pluginName}}."
                    },
                    restart: {
                        failed: "Kunne ikke genstarte {{pluginName}}."
                    },
                    reload: {
                        label: "Genindlæste {{pluginName}}.",
                        noPlugin: "Ingen plugins blev genindlæst.",
                        reloaded: "Genindlæste {{count}} plugin{{s}}."
                    },
                    toggle: {
                        enabled: "Aktiverede {{changed}} plugin{{s}}.",
                        disabled: "Deaktiverede {{changed}} plugin{{s}}.",
                        noChanged: "Ingen plugins ændrede tilstand."
                    },
                    run: {
                        failed: {
                            label: "Kunne ikke køre {{pluginName}}: {{actionLabel}}."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "Nuværende kanal",
                    group: "Gruppe-DM",
                    direct: "Direkte besked"
                },
                guild: {
                    current: "Nuværende server",
                }
            },
            option: {
                hotkey: {
                    label: "Genvejstast",
                    description: "Genvejstast brugt til at åbne command paletten",
                    recording: "Tryk på en tast...",
                    reset: "Nulstil"
                },
                visualStyle: {
                    label: "Visuel stil",
                    description: "Palettens udseende",
                    classic: "Klassisk",
                    polished: "Poleret"
                },
                showTags: {
                    label: "Vis tags",
                    description: "Vis tag-chips for kommandoer"
                },
                enableTagFilter: {
                    label: "Aktiver tag-filter",
                    description: "Vis tag-filterlinjen"
                },
                customCommands: {
                    label: "Brugerdefinerede kommandoer",
                    description: "Administrer brugerdefinerede kommandoer i paletten"
                }
            },
            template: {
                alias: {
                    label: "Alias-kommando",
                    description: "Spejl en eksisterende kommando"
                },
                settings: {
                    label: "Indstillinger",
                    description: "Åbn Discord-indstillinger"
                },
                url: {
                    label: "Link",
                    description: "Åbn en ekstern URL"
                },
                macro: {
                    label: "Makro",
                    description: "Kør en sekvens af kommandoer"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Deaktiverer irriterende konsolbeskeder og fejl",
            option: {
                disableLoggers: {
                    label: "Deaktiver loggere",
                    description: "Deaktiverer Discords egne loggere"
                },
                disableSpotifyLogger: {
                    label: "Deaktiver Spotify-logger",
                    description: "Deaktiver Spotify-loggeren, som lækker kontooplysninger og adgangstoken"
                },
                whitelistedLoggers: {
                    label: "Hvidlistede loggere",
                    description: "Semikolon (;)-separeret liste over loggere, der skal tillades"
                },
                allowLevel: {
                    label: "Tillad niveau",
                    description: "Tillad altid loggere af disse typer",
                    filter: "Filterliste"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Tilføjer kortere aliaser for mange ting i vinduet. Kør `shortcutList` for en liste."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Gør det muligt at angive trigger-ord, som vil blive sløret som standard. Klik på det slørede indhold for at se det.",
            option: {
                flagged: {
                    label: "Flagget",
                    flagged: "Flaggede ord",
                    placeholder: "Ord"
                },
                onClick: {
                    label: "Ved klik",
                    description: "Vis kun trigger-indhold ved klik i stedet for hover"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Gør det muligt at kopiere emojis som formateret streng (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Kopier Unicode",
                    description: "Kopier det rå unicode-tegn i stedet for :navn: for standard-emojis (👽)"
                }
            },
            context: {
                copy: "Kopier Emoji Markdown"
            },
            toast: {
                success: "Succes! Kopierede emoji markdown."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Tilføjer en knap til tekstfil-vedhæftninger for at kopiere deres indhold",
            copied: "Kopieret!",
            large: "Filen er for stor til at kopiere.",
            copyFileContents: "Kopier filindhold"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Et plugin til at kopiere folks profil-gradientfarver til udklipsholderen.",
            copy: "Kopier profilfarver",
            toast: {
                noColor: "Ingen profilfarver fundet!",
                copied: "Profilfarver kopieret til udklipsholder!",
                error: "Fejl ved kopiering af profilfarver!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Kopier brugerens status-URL, når du højreklikker på den",
            toast: {
                copied: "Kopierede URL",
                error: "Fejl ved kopiering af URL, tjek konsollen for mere info"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Tilføjer muligheden for at kopiere og åbne Sticker-links",
            context: {
                copy: "Kopier link",
                open: "Åbn link"
            },
            toast: {
                success: "Link kopieret!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Tilføjer en knap til at kopiere brugerens mention i bruger-kontekstmenuen.",
            context: {
                copy: "Kopier bruger-mention"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Tilføjer en 'Kopier bruger-URL' valgmulighed til bruger-kontekstmenuen.",
            context: {
                copy: "Kopier bruger-URL"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Værktøjs-plugin til håndtering og mulig gendannelse efter nedbrud uden genstart",
            option: {
                attemptToPreventCrashes: {
                    label: "Forsøg at forhindre nedbrud",
                    description: "Om der skal gøres forsøg på at forhindre Discord-nedbrud."
                },
                attemptToNavigateToHome: {
                    label: "Forsøg at navigere til Hjem",
                    description: "Om der skal navigeres til hjem-fanen ved gendannelse efter nedbrud."
                }
            },
            toast: {
                crashed: {
                    title: "Discord er gået ned!",
                    body: "Øv :( Discord er gået ned to gange hurtigt efter hinanden, forsøger ikke at gendanne.",
                    update: "Åh nej, Discord er lige gået ned... men gode nyheder, der er en Plexcord-opdatering tilgængelig, som måske løser problemet! Vil du opdatere nu?",
                    recover: "Forsøger at gendanne...",
                    invalid: "Ugyldigt eller udløbet invitationslink."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Brug Ctrl+Enter til at sende beskeder (kan tilpasses)",
            option: {
                submitRule: {
                    label: "Send-regel",
                    description: "Måden en besked sendes på",
                    ctrlEnter: "Ctrl+Enter (Enter eller Shift+Enter for ny linje) (cmd+enter på macOS)",
                    shiftEnter: "Shift+Enter (Enter for ny linje)",
                    enter: "Enter (Shift+Enter for ny linje; Discord standard)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Send besked midt i en kodeblok",
                    description: "Om en besked skal sendes, hvis man er midt i en kodeblok"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Tilføjer en figur, der følger din markør.",
            modal: {
                furColor: "Pelsfarve",
                outlineColor: "Kantfarve"
            },
            option: {
                buddy: {
                    label: "Makker",
                    description: "Vælg en markør-makker",
                    oneko: "Oneko",
                    fathorse: "Fed Hest"
                },
                speed: {
                    label: "Hastighed",
                    description: "Din makkers hastighed",
                    invalid: "Hastighed skal være større end 0"
                },
                fps: {
                    label: "Billedhastighed",
                    description: "Din makkers billedhastighed (FPS)",
                    invalid: "Billedhastighed skal være større end 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Pelsfarve",
                    description: "Pels-hex-farve for Oneko"
                },
                outlineColor: {
                    label: "Kantfarve",
                    description: "Kant-hex-farve for Oneko"
                },
                fathorseSection: {
                    label: "Fed Hest"
                },
                size: {
                    label: "Størrelse",
                    description: "Størrelsen på den fede hest",
                    invalid: "Størrelsen skal være større end 0"
                },
                fade: {
                    label: "Fading",
                    description: "Om hesten skal fade ud, når markøren er tæt på"
                },
                freeroam: {
                    label: "Frigang",
                    description: "Om hesten skal gå frit omkring, når du er inaktiv"
                },
                shake: {
                    label: "Ryst",
                    description: "Om hesten skal ryste vinduet, når den går"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Tilpas mappetikoner med et hvilket som helst PNG-billede",
            option: {
                solidIcon: {
                    label: "Solidt ikon",
                    description: "Brug en solid baggrund bag billedet"
                },
                folderIcons: {
                    label: "Mappetikoner",
                    description: "Indstillinger for mappetikoner"
                }
            },
            modal: {
                change: "Skift størrelsen på mappetikone",
                save: "Gem",
                unset: "Fjern",
                set: "Indstil et nyt ikon",
                hover: "Du skal muligvis holde musen over mappen efter indstilling for at den opdateres."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Gør det muligt at indstille tiden, før Discord går i inaktiv (eller deaktivere auto-inaktiv)",
            backOnline: "Velkommen tilbage! Klik på knappen for at gå online. Klik på X for at blive ved med at være inaktiv indtil genindlæsning.",
            exit: "Afslut inaktiv",
            option: {
                idleTimeout: {
                    label: "Tidsgrænse for inaktivitet",
                    description: "Minutter før Discord går i inaktiv (0 for at deaktivere)"
                },
                remainInIdle: {
                    label: "Forbliv inaktiv",
                    description: "Når du kommer tilbage til Discord, forbliv inaktiv indtil du bekræfter, at du vil gå online"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Tilføj en fuldt tilpasselig Rich Presence (spilstatus) til din Discord-profil",
            goTo: "Gå til {{portal}} for at oprette en applikation og få applikations-ID'et.",
            upload: "Upload billeder i Rich Presence-fanen for at få billednøglerne.",
            image: "Hvis du vil bruge et billedlink, skal du downloade dit billede og uploade det igen til {{imgur}} og få linket ved at højreklikke på billedet og vælge 'Kopier billedadresse'.",
            button: "Du kan ikke se dine egne knapper på din profil, men alle andre kan se dem fint.",
            font: "Visse mærkelige unicode-tegn ('skrifttyper' 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) kan få din rich presence til ikke at blive vist. Prøv at bruge normale bogstaver i stedet.",
            placeholder: "Indtast en værdi",
            select: "Vælg en mulighed",
            error: {
                appIdInvalid: "App-ID skal være et gyldigt nummer.",
                notice: "Bemærk",
                sharing: "Aktivitetsdeling er ikke aktiveret, folk vil ikke kunne se din brugerdefinerede rich presence!",
                enable: "Aktiver",
                validStream: "Streaming-link skal være en gyldig URL.",
                mustBeURL: "Skal være en gyldig URL.",
                streamCharacters: "Streaming-link må ikke være længere end 512 tegn.",
                dontUse: "Brug ikke et Discord-link. Brug et Imgur-billedlink i stedet.",
                imgur: "Imgur-link skal være et direkte link til billedet (f.eks. https://i.imgur.com/...). Højreklik på billedet og klik 'Kopier billedadresse'",
                tenor: "Tenor-link skal være et direkte link til billedet (f.eks. https://media.tenor.com/...). Højreklik på GIF'en og klik 'Kopier billedadresse'",
                required: "Dette felt er påkrævet.",
                tooLong: "Må ikke være længere end {{maxLength}} tegn.",
                mustBeNumber: "Skal være et tal.",
                mustBePositive: "Skal være et positivt tal.",
                startTimeInvalid: "Start-tidspunkt skal være større end 0.",
                endTimeInvalid: "Slut-tidspunkt skal være større end 0."
            },
            option: {
                appId: {
                    label: "App-ID",
                    description: "Applikations-ID (påkrævet)"
                },
                appName: {
                    label: "App-navn",
                    description: "Applikationsnavn (påkrævet)"
                },
                details: {
                    label: "Detaljer",
                    description: "Detaljer (linje 1)"
                },
                detailsURL: {
                    label: "Detaljer-URL",
                    description: "Klikbar URL for detaljer"
                },
                state: {
                    label: "Tilstand",
                    description: "Tilstand (linje 2)"
                },
                stateURL: {
                    label: "Tilstand-URL",
                    description: "Klikbar URL for tilstand"
                },
                partySize: {
                    label: "Gruppe-størrelse",
                    description: "Nuværende gruppestørrelse (skal bruges sammen med Maks. gruppestørrelse)"
                },
                partyMax: {
                    label: "Maks. gruppestørrelse",
                    description: "Maksimal gruppestørrelse (skal bruges sammen med Nuværende gruppestørrelse)"
                },
                type: {
                    label: "Aktivitetstype",
                    description: "Aktivitetstype",
                    playing: "Spiller",
                    streaming: " streamer",
                    listening: "Lytter til",
                    watching: "Ser",
                    competing: "Deltager i"
                },
                streamLink: {
                    label: "Stream-link",
                    description: "Twitch.tv eller YouTube.com link (kun for 'streamer' aktivitetstype)"
                },
                timestampMode: {
                    label: "Tidsstempel-tilstand",
                    description: "Hvad tidsstemplet skal vise",
                    none: "Ingen",
                    sinceDiscordOpen: "Siden Discord blev åbnet",
                    sameAsCurrentTime: "Samme som din nuværende tid (nulstilles ikke efter 24 timer)",
                    custom: "Brugerdefineret tid"
                },
                startTime: {
                    label: "Start-tid (i millisekunder)",
                    description: "Start-tidsstempel i millisekunder (kun for brugerdefineret tilstand)"
                },
                endTime: {
                    label: "Slut-tid (i millisekunder)",
                    description: "Slut-tidsstempel i millisekunder (kun for brugerdefineret tilstand)"
                },
                imageBig: {
                    label: "Stort billede-nøgle",
                    description: "Nøgle for stort billede (skal være uploadet i Rich Presence-fanen)"
                },
                imageBigTooltip: {
                    label: "Værktøjstip til stort billede",
                    description: "Værktøjstip for det store billede"
                },
                imageBigURL: {
                    label: "Stort billede-URL",
                    description: "Klikbar URL for det store billede"
                },
                imageSmall: {
                    label: "Lille billede-nøgle",
                    description: "Nøgle for lille billede (skal være uploadet i Rich Presence-fanen)"
                },
                imageSmallTooltip: {
                    label: "Værktøjstip til lille billede",
                    description: "Værktøjstip for det lille billede"
                },
                imageSmallURL: {
                    label: "Lille billede-URL",
                    description: "Klikbar URL for det lille billede"
                },
                buttonOneText: {
                    label: "Knap 1 Tekst",
                    description: "Tekst på knap 1"
                },
                buttonOneURL: {
                    label: "Knap 1 URL",
                    description: "URL for knap 1"
                },
                buttonTwoText: {
                    label: "Knap 2 Tekst",
                    description: "Tekst på knap 2"
                },
                buttonTwoURL: {
                    label: "Knap 2 URL",
                    description: "URL for knap 2"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Tilpas Discords lyde.",
            search: "Søg efter lyde",
            placeholder: "Søg efter navn eller ID",
            import: "Importer",
            export: "Eksporter",
            reset: "Nulstil alle",
            debug: "Fejlfinding",
            toast: {
                error: "Fejl ved indlæsning af lydfil",
                exported: "Eksporterede {{count}} indstillinger (lydfiler ikke inkluderet)",
                imported: "Indstillinger importeret korrekt",
                importError: "Fejl ved import af indstillinger. Tjek konsollen for detaljer.",
                reset: "Alle ændringer blev nulstillet!",
                overrideDescription: "Overstyring for {{soundName}}",
                previewSound: "Fejl ved afspilning af lyd.",
                playing: "Fejl ved afspilning. Filen kan være beskadiget.",
                invalidFile: "Ingen lydfil tilgængelig for forhåndsvisning",
                uploaded: "Fil uploadet: {{fileName}}",
                uploadedError: "Fejl ved upload: {{error}}",
                invalidExtension: "Ugyldig filtype. Upload venligst en lydfil.",
                uploading: "Uploader fil...",
                deleted: "Fil slettet korrekt",
                deleteError: "Fejl ved sletning af fil.",
                loadingError: "Fejl ved indlæsning af lydfil"
            },
            button: {
                preview: "Forhåndsvisning",
                stop: "Stop",
                volume: "Lydstyrke",
                soundSource: "Lydkilde",
                customFile: "Brugerdefineret fil",
                uploadNew: "Upload ny",
                delete: "Slet valgte fil"
            },
            option: {
                default: "Standard",
                custom: "Brugerdefineret",
                select: "Vælg en fil..."
            },
            type: {
                activityEnd: "Aktivitet slut",
                activityLaunch: "Aktivitet startet",
                activityUserJoin: "Bruger deltager i aktivitet",
                activityUserLeft: "Bruger forlod aktivitet",
                asmrMessage: "ASMR-besked",
                bitMessage: "Bit-besked",
                bopMessage: "Bop-besked",
                callCalling: "Opkald foretages",
                callRinging: "Det ringer",
                clipError: "Clip-fejl",
                clipSave: "Clip gemt",
                ddrDown: "DDR Ned",
                ddrLeft: "DDR Venstre",
                ddrRight: "DDR Højre",
                ddrUp: "DDR Op",
                deafen: "Deafen",
                discodo: "Discodo",
                disconnect: "Forbindelse afbrudt",
                duckyMessage: "Ducky-besked",
                hangStatusSelect: "Hang Status Valgt",
                highfiveClap: "Highfive-klap",
                highfiveWhistle: "Highfive-fløjt",
                humanMan: "Menneskemand",
                lofiMessage: "LoFi-besked",
                mention1: "Mention 1 (@rolle)",
                mention2: "Mention 2 (@everyone)",
                mention3: "Mention 3 (@here)",
                message1: "Besked 1 (Generisk)",
                message2: "Besked 2 (Svar i server)",
                message3: "Besked 3 (DM'er og gruppe-DM'er)",
                mute: "Mute",
                overlayUnlock: "Overlay låst op",
                poggermodeAchievement: "Poggermode Bedrift",
                poggermodeApplause: "Poggermode Applaus",
                poggermodeEnabled: "Poggermode Aktiveret",
                poggermodeMessage: "Poggermode Besked",
                pttStart: "PTT Start",
                pttStop: "PTT Stop",
                reconnect: "Forbindelse genoprettet",
                robotMan: "Robotmand",
                stageWaiting: "Scene venter",
                streamEnded: "Stream afsluttet",
                streamStarted: "Stream startet",
                streamUserJoined: "Bruger deltog i stream",
                streamUserLeft: "Bruger forlod stream",
                success: "Succes",
                undeafen: "Undeafen",
                unmute: "Unmute",
                userJoin: "Bruger deltager",
                userLeave: "Bruger forlader",
                userMoved: "Bruger flyttet",
                vibingWumpus: "Vibing Wumpus"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Brugerdefinerede tidsstempler på beskeder og værktøjstip",
            demo: {
                cozy: "Klik på mig for at skifte til Cozy-format",
                compact: "Klik på mig for at skifte til Compact-format",
                lastWeek: "Denne besked blev sendt i sidste uge",
                hover: "Hold musen over tidsstempler for at se værktøjstip-formater",
                edit: "Rediger formaterne herunder for at se dem live-opdatere her"
            },
            modal: {
                title: "Sådan bruges det:",
                moment: "Moment.js formateringsdokumentation",
                hint: "Derudover kan du bruge disse i dine felter:",
                calendar: "aktiverer dynamisk datoformatering såsom",
                today: "I dag",
                yesterday: "I går",
                relative: "giver dig tider som",
                relativeTime: "for 4 timer siden",
                preview: "Forhåndsvisning",
                format: "Kalenderformater",
                howTo: "Sådan formateres [calendar]-værdien, hvis den bruges i ovenstående tidsstempler."
            },
            option: {
                formats: {
                    label: "Formater",
                    description: "Tilpas tidsstempel-formaterne",
                },
                cozyFormat: {
                    label: "Cozy-tilstand",
                    description: "Tidsformat til beskeder i cozy-tilstand"
                },
                compactFormat: {
                    label: "Compact-tilstand",
                    description: "Tidsformat i compact-tilstand og ved hover over beskeder"
                },
                tooltipFormat: {
                    label: "Værktøjstip",
                    description: "Tidsformat brugt i værktøjstip"
                },
                ariaLabelFormat: {
                    label: "Aria-etiket",
                    description: "Tidsformat brugt i aria-etiketter"
                },
                sameDayFormat: {
                    label: "Samme dag",
                    description: "[calendar] format for i dag",
                    default: "[I dag kl.] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Sidste dag",
                    description: "[calendar] format for i går",
                    default: "[I går kl.] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Sidste uge",
                    description: "[calendar] format for sidste uge"
                },
                sameElseFormat: {
                    label: "Ældre datoer",
                    description: "[calendar] format for ældre datoer"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Gør det muligt at tilføje en brugerdefineret farve til enhver bruger, overalt! Anbefales kraftigt sammen med typingTweaks og roleColorEverywhere",
            option: {
                dmList: {
                    label: "DM-liste",
                    description: "Brugere med tilpassede farver vil få deres navn farvet i DM-listen"
                },
                colorInServers: {
                    label: "Farve i servere",
                    description: "Om navnefarver skal ændres inde i servere"
                }
            },
            context: {
                setColor: "Indstil farve"
            },
            modal: {
                custom: "Brugerdefineret farve",
                pick: "Vælg en farve",
                delete: "Slet post",
                save: "Gem"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Gør YouTube-embed-titler og thumbnails mindre sensationelle, drevet af DeArrow",
            option: {
                hideButton: {
                    label: "Skjul knap",
                    description: "Skjuler DeArrow-knappen fra YouTube-embeds"
                },
                replaceElements: {
                    label: "Erstat elementer",
                    description: "Vælg hvilke elementer i embeddet, der skal erstattes",
                    everything: "Alt (Titler og Thumbnails)",
                    title: "Titler",
                    thumbnail: "Thumbnails"
                },
                dearrowByDefault: {
                    label: "DeArrow som standard",
                    description: "DeArrow videoer automatisk"
                }
            },
            tooltip: {
                dearrowed: "Dette embed er blevet DeArrowed; klik for at gendanne",
                dearrow: "Klik for at DeArrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Rydder op i Discord ved at fjerne ikke-essentielle UI-elementer som profileffekter, butiksfaner, boosts og mere.",
            option: {
                userProfileHeader: {
                    label: "Brugerprofil"
                },
                removeNameplate: {
                    label: "Fjern navneskilt",
                    description: "Fjern navneskilte (nameplates)."
                },
                removeProfileEffect: {
                    label: "Fjern profileffekt",
                    description: "Fjern animations-effekter på profiler ved åbning."
                },
                removeClanTag: {
                    label: "Fjern klan-tag",
                    description: "Fjern klan-tags."
                },
                alwaysShowUsername: {
                    label: "Vis altid brugernavn",
                    description: "Vis altid brugernavn i stedet for status."
                },
                accessibilityNotice: {
                    label: "Tilgængelighedsbemærkning",
                    description: "Discord har allerede en indbygget indstilling for brugernavns-stil under Tilgængelighed."
                },
                friendsListHeader: {
                    label: "Over Venner/DM-liste"
                },
                removeShopAboveDM: {
                    label: "Fjern butik over DM'er",
                    description: "Fjern butiks-linket over listen med direkte beskeder."
                },
                removeQuestsAboveDM: {
                    label: "Fjern Quests over DM'er",
                    description: "Fjern quests over listen med direkte beskeder."
                },
                miscHeader: {
                    label: "Diverse"
                },
                removeServerBoostInfo: {
                    label: "Fjern Server Boost info",
                    description: "Fjern server boost info over kanallisten."
                },
                removeBillingSettings: {
                    label: "Fjern faktureringsindstillinger",
                    description: "Skjul faktureringsindstillinger."
                },
                removeGiftButton: {
                    label: "Fjern gaveknap",
                    description: "Fjern knappen til at give gaver."
                },
                removeUnavailableEmojiPicker: {
                    label: "Fjern utilgængelige emojis",
                    description: "Fjern utilgængelige kategorier fra emoji-vælgeren."
                },
                removeAudioMenus: {
                    label: "Fjern lydmenuer",
                    description: "Fjern menuerne ved siden af mute- og deafen-knapperne."
                },
                removeButtonTooltips: {
                    label: "Fjern knap-værktøjstip",
                    description: "Fjern værktøjstip (tooltips) fra knapper."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Afkod Base64-indhold i enhver besked og kopier det afkodede indhold.",
            right: {
                decode: "Kopier afkodet (Venstreklik) / Afkod Base64 (Højreklik)",
                copy: "Afkod Base64 (Venstreklik) / Kopier afkodet (Højreklik)"
            },
            option: {
                clickMethod: {
                    label: "Klikmetode",
                    description: "Skift knappen til at afkode Base64-indhold i beskeder.",
                    left: "Venstreklik for at afkode Base64-indhold.",
                    right: "Højreklik for at afkode Base64-indhold."
                }
            },
            modal: {
                title: "Afkodet Base64-indhold",
                content: "Afkodet indhold",
                copy: "Kopier afkodet indhold {{index}}",
                copied: "Afkodet indhold kopieret til udklipsholder!"
            }
        },
        decor: {
            name: "Decor",
            description: "Opret og brug dine egne brugerdefinerede avatar-dekorationer, eller vælg din favorit fra præsæt-listen.",
            presetPart: "En del af {{name}} præsættet",
            createdBy: "Oprettet af {{author}}",
            copy: "Kopier præsæt-ID",
            file: "Fil",
            your: {
                title: "Dine dekorationer",
                subtitle: "Du kan slette dine egne dekorationer ved at højreklikke på dem."
            },
            option: {
                changeDecoration: {
                    label: "Skift dekoration",
                    description: "Aktiver Decor og genstart din klient for at ændre din avatar-dekoration.",
                    also: "Du kan også få adgang til Decor-dekorationer fra siden {{profiles}}.",
                    profiles: "Profiler"
                },
                baseUrl: {
                    label: "Base URL",
                    description: "Decor API URL"
                },
                agreedToGuidelines: {
                    label: "Accepteret retningslinjer",
                    description: "Accepteret retningslinjer"
                }
            },
            context: {
                decorationOptions: "Dekorationsmuligheder",
                copyHash: "Kopier dekorations-hash",
                deleteDecoration: "Slet dekoration"
            },
            alert: {
                delete: {
                    title: "Slet dekoration",
                    body: "Er du sikker på, at du vil slette {{decoration}}?",
                    confirm: "Slet",
                    cancel: "Annuller"
                },
                logout: {
                    title: "Log ud",
                    body: "Er du sikker på, at du vil logge ud af Decor?",
                    confirm: "Log ud",
                    cancel: "Annuller"
                }
            },
            button: {
                change: "Skift dekoration",
                remove: "Fjern dekoration",
                apply: "Anvend",
                cancel: "Annuller",
                browse: "Gennemse",
                submit: "Send til gennemsyn",
                continue: "Fortsæt",
                back: "Gå tilbage"
            },
            tooltip: {
                pendingReview: "Du har allerede en dekoration til gennemsyn",
                pending: "Afventer gennemsyn"
            },
            join: {
                tooltip: "Deltag i Decors Discord-server for notifikationer om din dekorations gennemsyn, og når nye præsæt udgives",
                button: "Discord Server"
            },
            create: {
                title: "Opret dekoration",
                notViolate: "Sørg for, at din dekoration ikke overtræder {{guidelines}}, før du indsender den.",
                guidelines: "retningslinjerne",
                file: "Filen skal være APNG eller PNG.",
                fileHolder: "Vælg en fil",
                name: "Dette navn vil blive brugt, når der henvises til denne dekoration.",
                nameHolder: "Companion Cube",
                nameTitle: "Navn"
            },
            help: {
                update: "For at modtage opdateringer om gennemsyn af din dekoration, deltag i {{server}} og tillad direkte beskeder.",
                server: "Decors Discord-server"
            },
            guidelines: {
                hold: "Vent lige lidt",
                suspended: "Ved at indsende en dekoration accepterer du {{guidelines}}. Hvis du ikke læser disse retningslinjer, kan det resultere i, at din konto udelukkes fra at oprette flere dekorationer i fremtiden.",
                guidelines: "retningslinjerne"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin til at tage tema-skærmbilleder - censurerer identificerende billeder og tekst.",
            toolbox: {
                toggle: "Slå Demonstration til/fra"
            },
            keycode: "For at ændre din tastekode, tjek {{keycode}}!",
            this: "dette værktøj",
            okay: "Oki!",
            option: {
                keyBind: {
                    label: "Tastegenvej",
                    description: "Tasten der trykkes på for at skifte temaet"
                },
                soundVolume: {
                    label: "Lydstyrke",
                    description: "Hvor højt skiftelyden er (0 for at deaktivere)"
                },
                showConfirmationModal: {
                    label: "Vis bekræftelsesvindue",
                    description: "Vis et vindue for at påminde dig om genvejen"
                }
            },
            switch: {
                note: "Du kan genaktivere denne indstilling senere",
                disable: "Deaktiver vindue?"
            },
            shortcut: "Dette vil censurere al tekst! For at deaktivere dette, husk genvejen:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Dev Companion plugin. Rapporter venligst alt, der ikke virker eller opfører sig mærkeligt (sandsynligvis en fejl) til MutanPlex, enten via ping eller DM. Tak!",
            reconnect: "Genforbind",
            option: {
                notifyOnAutoConnect: {
                    label: "Giv besked ved auto-forbindelse",
                    description: "Om der skal gives besked, når Dev Companion automatisk har oprettet forbindelse."
                },
                usePatchedModule: {
                    label: "Brug patchet modul",
                    description: "Ved anmodninger om udtræk, svar med det nuværende patchede modul (hvis det er patchet) i stedet for det originale."
                },
                reloadAfterToggle: {
                    label: "Genindlæs efter skift",
                    description: "Genindlæs efter en 'deaktiver/aktiver plugin'-kommando er modtaget."
                }
            },
            toast: {
                title: "Dev Companion Forbundet",
                connected: "Forbundet til WebSocket",
                disconnected: "Dev Companion afbrudt",
                error: "Dev Companion fejl",
                reload: "Genindlæsning påkrævet",
                failed: "Kunne ikke starte afhængigheder: {{failures}}",
                close: "Luk",
                stopping: "Fejl under stop af plugin {{plugin}}",
                starting: "Fejl under start af plugin {{plugin}}",
                noMessage: "Ingen fejlbesked",
                noReason: "Ingen årsag angivet"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Deaktiverer at man automatisk bliver smidt ud af et DM-opkald efter 3 minutter og bliver flyttet til en AFK-kanal."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Deaktiverer kameraer i et opkald som standard"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Aktiverer Discords udvikler-banner, som viser Build ID",
            about: "Formatet for Discord Dev Banneret. Du kan bruge følgende variabler:",
            preview: "Forhåndsvisning:",
            empty: "Formatet må ikke være tomt.",
            variables: {
                discord: {
                    title: "Discord Variabler",
                    icon: "Discord ikon",
                    banner: "Udvikler-banner ikon",
                    channel: "Discord build-kanal (f.eks. Stable)",
                    build: "Discord build-nummer (f.eks. 123456)",
                    hash: "Discord build-hash (f.eks. 123456)"
                },
                plexcord: {
                    title: "Plexcord Variabler",
                    icon: "Plexcord ikon",
                    name: "Navn på Plexcord",
                    version: "Version af Plexcord (f.eks. 1.0.0)",
                    hash: "Plexcord build-hash (f.eks. 123456)",
                    platform: "Platform Plexcord kører på (f.eks. Dev Build)"
                },
                plextron: {
                    title: "Plextron-specifikke variabler",
                    hashShort: "Plextron build-hash (f.eks. 123456789)",
                    platformType: "Platform Plextron kører på (f.eks. Dev Build)"
                },
                client: {
                    title: "Klient Variabler",
                    icon: "Skrivebordsikon",
                    name: "Navnet på klienten (f.eks. Discord Canary)",
                    version: "Klientens version (f.eks. 1.0.0)",
                },
                electron: {
                    title: "Electron Variabler",
                    icon: "Electron ikon",
                    version: "Electron version (f.eks. 25.0.0)"
                },
                chromium: {
                    title: "Chromium Variabler",
                    icon: "Chromium ikon",
                    version: "Chromium motor version (f.eks. 125.0.0.0)"
                },
                misc: {
                    title: "Diverse variabler",
                    newline: "Linjeskift-tegn"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Advarer dig, hvis din besked indeholder et udtryk fra AutoMods præsæt-liste",
            alert: {
                title: "Vent lige!",
                content: "Din besked indeholder et udtryk fra AutoMods præsæt-liste (Udløser: '{{trigger}}').",
                content2: "Der er stor chance for, at din besked vil blive blokeret og potentielt føre til handling fra en moderator.",
                confirm: "Send alligevel",
                cancel: "Annuller"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Runder altid relative tidsstempler ned, så 7.6 år bliver til 7 år i stedet for 8 år"
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Tilføjer træk-og-slip funktionalitet til favorit-emotes"
        },
        dragify: {
            name: "Dragify",
            description: "Træk brugere, kanaler eller servere ind i chatten for at indsætte mentions eller invitationer.",
            option: {
                userOutput: {
                    label: "Bruger-output",
                    description: "Output ved bruger-drop.",
                    mention: "Mention",
                    id: "Bruger-ID"
                },
                channelOutput: {
                    label: "Kanal-output",
                    description: "Output ved kanal-drop.",
                    mention: "#kanal Mention",
                    link: "Kanal-link",
                },
                inviteExpireAfter: {
                    label: "Invitation udløber efter",
                    description: "Udløb af invitation",
                    never: "Aldrig",
                    thirtyMinutes: "30 minutter",
                    oneHour: "1 time",
                    sixHours: "6 timer",
                    twelveHours: "12 timer",
                    oneDay: "1 dag",
                    sevenDays: "7 dage"
                },
                inviteMaxUses: {
                    label: "Maks. brug af invitation",
                    description: "Maksimalt antal gange invitationen kan bruges",
                    noLimit: "Ingen grænse",
                    one: "1 brug",
                    five: "5 brug",
                    ten: "10 brug",
                    twentyFive: "25 brug",
                    fifty: "50 brug",
                    hundred: "100 brug"
                },
                inviteTemporaryMembership: {
                    label: "Midlertidigt medlemskab",
                    description: "Giv midlertidigt medlemskab.",
                },
                reuseExistingInvites: {
                    label: "Genbrug eksisterende invitation",
                    description: "Genbrug en eksisterende invitation i stedet for at oprette en ny."
                },
                allowChatBodyDrop: {
                    label: "Tillad drop i chatfelt",
                    description: "Tillad at trække ting ind i selve chatfeltet for at indsætte tekst."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify kunne ikke håndtere droppet.",
                },
                invite: {
                    created: "Invitation oprettet.",
                    unable: "Kunne ikke oprette invitation.",
                    noChannel: "Ingen kanal tilgængelig for invitationer.",
                }
            },
            ghost: {
                user: "Bruger",
                server: "Server",
                dm: "Direkte beskeder",
                badge: {
                    channel: "kanal",
                    thread: "tråd",
                    voice: "stemme",
                    forum: "forum",
                    media: "medie",
                    announcement: "meddelelse",
                    dm: "dm",
                    user: "bruger",
                    server: "server"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Fremhæv og inspicer elementer nemt.",
            modal: {
                recording: "Optager...",
                reset: "Nulstil"
            },
            option: {
                keybind: {
                    label: "Tastegenvej",
                    description: "Skift Highlighter til/fra"
                },
                showClasses: {
                    label: "Vis klasser",
                    description: "Vis elementets CSS-klassenavne i værktøjstippet"
                },
                showId: {
                    label: "Vis ID",
                    description: "Vis elementets ID-attribut i værktøjstippet"
                },
                showFont: {
                    label: "Vis skrifttype",
                    description: "Vis den beregnede skrifttype og størrelse"
                },
                showPadding: {
                    label: "Vis padding",
                    description: "Vis elementets padding-værdier"
                },
                showMargin: {
                    label: "Vis margin",
                    description: "Vis elementets margin-værdier"
                },
                showBorderRadius: {
                    label: "Vis kant-radius",
                    description: "Vis elementets border-radius-værdier"
                },
                showPosition: {
                    label: "Vis position",
                    description: "Vis elementets CSS-positionstype og z-index"
                },
                showDisplay: {
                    label: "Vis Display",
                    description: "Vis elementets display-type sammen med flex- eller grid-egenskaber"
                }
            },
            toast: {
                copied: {
                    color: "Farve kopieret til udklipsholder!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Afspil lyde fra soundboardet, når du forlader et stemmeopkald.",
            button: "Indstil som global exit-lyd",
            toast: {
                failedToPlay: "Ups! Noget gik galt."
            },
            option: {
                soundGuildId: {
                    label: "Lyd-server ID",
                    description: "Vælg serveren, der indeholder lyden.",
                    placeholder: "Vælg en server..."
                },
                soundId: {
                    label: "Lyd-ID",
                    description: "Indtast ID'et på den lyd, du vil afspille.",
                    placeholder: "Indtast lyd-ID..."
                }
            }
        },
        experiments: {
            name: "Eksperimenter",
            description: "Giver adgang til eksperimenter og andre udvikler-funktioner i Discord!",
            modal: {
                about: {
                    title: "Mere information",
                    body: "Du kan åbne Discords DevTools via {{key}}"
                },
                warning: {
                    title: "Vent lige lidt!!",
                    body: "Eksperimenter er ikke-udgivne Discord-funktioner. De virker måske ikke, eller kan endda ødelægge din klient eller få din konto deaktiveret.",
                    notReponsible: "Brug kun eksperimenter, hvis du ved, hvad du gør. Plexcord er ikke ansvarlig for skader forårsaget af at aktivere eksperimenter.",
                    useAtOwnRisk: "Hvis du ikke ved, hvad et eksperiment gør, så ignorer det. Spørg os ikke om hvad de gør; vi ved det sandsynligvis heller ikke.",
                    serverSideFeatures: "Nej, du kan ikke bruge server-side funktioner såsom at markere 'Send to Client' feltet."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Værktøjslinje Udvikler-menu",
                    description: "Skift Hjælp (?)-knappen (øverst til højre i chatten) til Discords udvikler-menu"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Gør det muligt at eksportere beskeder til filer — enkelte beskeder, alle beskeder fra en bruger, eller alle kanalbeskeder",
            option: {
                maxMessages: {
                    label: "Maks. beskeder",
                    description: "Maksimalt antal beskeder der skal eksporteres (0 = ubegrænset)"
                },
                includeAttachments: {
                    label: "Inkluder vedhæftninger",
                    description: "Inkluder information om vedhæftede filer i eksporten"
                },
                includeEmbeds: {
                    label: "Inkluder embeds",
                    description: "Inkluder embed-information i eksporten"
                },
                includeReactions: {
                    label: "Inkluder reaktioner",
                    description: "Inkluder information om reaktioner i eksporten"
                },
                includeComponents: {
                    label: "Inkluder komponenter",
                    description: "Inkluder information om komponenter (knapper osv.) i eksporten"
                }
            },
            message: {
                invalid: "Ugyldig besked — ingen forfatter",
                unknownUser: "Ukendt bruger",
                botEmbed: "Bot-embed besked",
                attachments: "Vedhæftninger",
                unknown: "Ukendt",
                noUrl: "Ingen URL",
                embeds: "Embeds",
                title: "Titel",
                description: "Beskrivelse",
                url: "URL",
                footer: "Bundtekst",
                author: "Forfatter",
                fields: "Felter",
                components: "Komponenter",
                component: "Komponent",
                interactiveElement: "Interaktivt element",
                reactions: "Reaktioner",
                errorFormatting: "Fejl ved formatering af besked",
                unknownError: "Ukendt fejl",
                header: "{{titlePrefix}} {{displayName}} i {{channelName}}",
                from: "Beskeder fra",
                direct: "Direkte beskeder",
                exported: "Eksporteret den",
                total: "Antal beskeder i alt"
            },
            toast: {
                export: {
                    title: "Eksporter beskeder",
                    body: "Kunne ikke eksportere besked"
                },
                noMessages: {
                    title: "Eksporter beskeder",
                    notFoundUser: "Ingen beskeder fundet fra denne bruger i denne kanal",
                    notFoundChannel: "Ingen beskeder fundet i denne kanal"
                },
                failed: {
                    title: "Eksporter beskeder",
                    body: "Kunne ikke eksportere beskeder"
                },
                userNotFound: {
                    title: "Eksporter beskeder",
                    body: "Bruger blev ikke fundet"
                },
                complete: {
                    title: "Eksport færdig",
                    saved: "Fil gemt",
                    downloaded: "Fil downloadet",
                    messages: "beskeder"
                }
            },
            context: {
                exportMessage: "Eksporter denne besked",
                exportAll: "Eksporter alle beskeder fra {{user}}",
                user: "Bruger",
                exportAllChannel: "Eksporter alle kanalbeskeder"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Gør det muligt at klone emotes og stickers til din egen server (højreklik på dem)",
            modal: {
                title: "Brugerdefineret navn",
                invalidName: "Navnet skal være mellem 2 og 32 tegn og må kun indeholde alfanumeriske tegn"
            },
            toast: {
                success: "Klonede {{name}} til {{guild}}!",
                yourServer: "din server",
                failed: "Kunne ikke klone: ",
                console: "Noget gik galt (tjek konsollen!)"
            },
            context: {
                clone: "Klon {{type}}",
                cloneName: "Klon {{data}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Sæt klienten på pause, når du trykker på F8 med DevTools (+ breakpoints) åbne."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Giver dig mulighed for at sende falske emojis/stickers, bruge Nitro-temaer og streame i Nitro-kvalitet",
            option: {
                enableEmojiBypass: {
                    label: "Aktiver Emoji Bypass",
                    description: "Tillader at sende falske emojis (omgår også manglende tilladelse til at bruge brugerdefinerede emojis)"
                },
                emojiSize: {
                    label: "Emoji-størrelse",
                    description: "Størrelsen på emojis når de sendes"
                },
                transformEmojis: {
                    label: "Transformer emojis",
                    description: "Om falske emojis skal transformeres til rigtige"
                },
                enableStickerBypass: {
                    label: "Aktiver Sticker Bypass",
                    description: "Tillader at sende falske stickers (omgår også manglende tilladelse til at bruge stickers)"
                },
                stickerSize: {
                    label: "Sticker-størrelse",
                    description: "Størrelsen på stickers når de sendes"
                },
                transformStickers: {
                    label: "Transformer stickers",
                    description: "Om falske stickers skal transformeres til rigtige"
                },
                transformCompoundSentence: {
                    label: "Transformer sammensatte sætninger",
                    description: "Om falske stickers og emojis skal transformeres i sætninger, der indeholder andet end blot det falske link"
                },
                enableStreamQualityBypass: {
                    label: "Aktiver Stream-kvalitet Bypass",
                    description: "Tillad streaming i Nitro-kvalitet"
                },
                useStickerHyperLinks: {
                    label: "Brug Sticker-hyperlinks",
                    description: "Om der skal bruges hyperlinks, når der sendes falske stickers"
                },
                useEmojiHyperLinks: {
                    label: "Brug Emoji-hyperlinks",
                    description: "Om der skal bruges hyperlinks, når der sendes falske emojis"
                },
                hyperLinkText: {
                    label: "Hyperlink-tekst",
                    description: "Hvilken tekst hyperlinket skal bruge. {{NAME}} vil blive erstattet med navnet."
                },
                disableEmbedPermissionCheck: {
                    label: "Deaktiver tjek af embed-tilladelse",
                    description: "Om tjek af tilladelse til at indlejre links skal deaktiveres ved afsendelse"
                }
            },
            modal: {
                sticker: "Dette er en FakeNitro sticker og vises kun som en rigtig sticker for dig. Vises som et link for brugere uden pluginnet.",
                emoji: "Dette er en FakeNitro emoji og vises kun som en rigtig emoji for dig. Vises som et link for brugere uden pluginnet."
            },
            alert: {
                notice: {
                    title: "Vent lige!",
                    body: "Du forsøger at sende/redigere en besked, der indeholder en FakeNitro emoji eller sticker; men du har ikke tilladelse til at indlejre links i denne kanal. Er du sikker på, at du vil sende den? Dine FakeNitro-ting vil kun fremstå som et link.",
                    footer: "Du kan deaktivere denne advarsel i FakeNitro-indstillingerne",
                    confirm: "Send alligevel",
                    cancel: "Annuller",
                    secondaryConfirm: "Vis ikke igen"
                },
                apngSticker: {
                    title: "Vent lige!",
                    body: "Du kan ikke sende denne besked, da den indeholder en animeret FakeNitro sticker, og du ikke har tilladelse til at vedhæfte filer i denne kanal. Fjern venligst stickeren for at fortsætte."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Tillader profil-temaer ved at skjule farverne i din bio takket være usynlig 3y3-kodning",
            button: {
                copy: "Kopier 3y3"
            },
            modal: {
                usage: "Anvendelse",
                preview: "Forhåndsvisning",
                intro: "Når du har aktiveret dette plugin, vil du se brugerdefinerede farver i profilerne hos andre, der bruger kompatible plugins.",
                setColor: "For at indstille dine egne farver:",
                step1: "• Brug farvevælgerne herunder til at vælge dine farver",
                step2: "• Klik på {{copy}} knappen",
                step3: "• Indsæt den usynlige tekst hvor som helst i din bio",
                pickers: "Farvevælgere",
                primary: "Primær",
                accent: "Accent"
            },
            option: {
                nitroFirst: {
                    label: "Nitro først",
                    description: "Standardkilde hvis begge er til stede",
                    nitro: "Nitro-farver",
                    fake: "Falske farver"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Tillader profil-temaer og profileffekter ved at skjule farver og effekter i din bio via usynlig 3y3-kodning",
            option: {
                prioritizeNitro: {
                    label: "Prioriter Nitro",
                    description: "Hvilken kilde skal prioriteres",
                    nitro: "Nitro",
                    aboutMe: "Om mig"
                },
                hideBuilder: {
                    label: "Skjul Builder",
                    description: "Skjul FPTE Builderen i profil-indstillingerne"
                }
            },
            modal: {
                primary: "Primær",
                accent: "Accent",
                effect: "Effekt",
                usage: {
                    title: "Anvendelse",
                    intro: "Når du har aktiveret dette plugin, vil du se brugerdefinerede temafarver og effekter i profilerne hos andre, der bruger dette plugin.",
                    setColor: "For at indstille dine egne farver og effekter:",
                    step1: "Gå til dine profil-indstillinger",
                    step2: "Brug FPTE Builderen til at vælge dine farver og effekt",
                    step3: "Klik på {{copy}} knappen",
                    step4: "Indsæt den usynlige tekst hvor som helst i din bio"
                }
            },
            toast: {
                copied: "FPTE kopieret til udklipsholder!",
                empty: "FPTE Builder er tom; intet at kopiere!"
            },
            button: {
                copyFPTE: "Kopier FPTE",
                reset: "Nulstil",
                preview: "FPTE Builder Forhåndsvisning",
                buildBackwards: "Byg bagudkompatibel FPTE",
                moreCharacters: "Vil bruge flere tegn"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Tilføjer et skraldespandsikon for hurtigt at slette kanaler",
            option: {
                keyBind: {
                    label: "Tastegenvej",
                    description: "Tasten der skal trykkes på for at vise skraldespanden."
                },
                reqCtrl: {
                    label: "Kræv Control",
                    description: "Kræv at Control-tasten holdes nede."
                },
                reqShift: {
                    label: "Kræv Shift",
                    description: "Kræv at Shift-tasten holdes nede."
                },
                reqAlt: {
                    label: "Kræv Alt",
                    description: "Kræv at Alt-tasten holdes nede."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Placerer dine favorit-emojis først i emoji-autocomplete og giver mulighed for emoji-aliaser.",
            option: {
                aliases: {
                    label: "Aliaser",
                    description: "Administrer dine emoji-aliaser."
                },
                clearAll: {
                    label: "Ryd alle",
                    description: "Slet alle aliaser."
                }
            },
            modal: {
                clear: {
                    title: "Slet alle aliaser",
                    description: "Dette vil fjerne alle emoji-aliaser, du har gemt.",
                    confirm: "Slet alle aliaser"
                },
                set: {
                    title: "Indstil alias",
                    description: "Indstil et alias for {{emoji}}",
                    placeholder: "Alias, f.eks. 'glad'",
                    save: "Gem",
                    error: "Alias findes allerede"
                }
            },
            toast: {
                set: "Alias indstillet for {{emoji}}",
                clearAll: "Slettede alle emoji-aliaser",
                failedDeleted: "Kunne ikke slette aliaser",
                removed: "Fjernede alias: {{alias}}",
                failedRemove: "Kunne ikke fjerne alias",
                duplicate: "Alias findes allerede",
                failedSave: "Kunne ikke gemme alias."
            },
            button: {
                edit: "Rediger alias",
                set: "Indstil alias"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "Tilføjer en søgelinje til favorit-GIF'er.",
            placeholder: "Søg i favorit-GIF'er",
            option: {
                searchOption: {
                    label: "Søgemulighed",
                    description: "Den del af URL'en du vil søge i",
                    url: "Hele URL'en",
                    path: "Kun stien (/en-gif.gif)",
                    hostandpath: "Host og sti (tenor.com en-gif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "Gør ethvert billede til en favorit",
            noFiles: "Ingen filer matcher din søgning.",
            searchPlaceholder: "Søg filer",
            media: "Medier",
            demoText: "Klik på stjernen for at gøre en fil til favorit.\nFavoritfiler vil vises her!",
            fetchError: "Kunne ikke hente {filename}",
            uploadError: "Kunne ikke uploade {filename}"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Tilføjer en Download-knap øverst til højre på filer"
        },
        findReply: {
            name: "FindReply",
            description: "Hopper til det tidligste svar på en besked i en kanal (gør det nemt at følge samtaler).",
            context: {
                jump: "Hop til svar"
            },
            toast: {
                navigate: "Brug bundpanelet til at navigere mellem svar.",
                container: "Kunne ikke finde container-elementet.",
                couldntFind: "Kunne ikke finde svarbeskeden."
            },
            option: {
                includePings: {
                    label: "Inkluder pings",
                    description: "Vil også søge efter beskeder, der @-nævner forfatteren direkte"
                },
                includeAuthor: {
                    label: "Inkluder forfatter",
                    description: "Vil også søge efter beskeder, der generelt svarer forfatteren, ikke kun den præcise besked"
                },
                hideButtonIfNoReply: {
                    label: "Skjul knap hvis intet svar findes",
                    description: "Skjuler knappen, hvis der ikke er nogen svar på beskeden"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Fjerner mellemrummet mellem kodeblokke og teksten under dem"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Retter filendelser ved at omdøbe dem til et kompatibelt understøttet format, hvis muligt"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Forbedrer billedkvaliteten ved at tvinge den originale kilde til at blive brugt",
            option: {
                originalImagesInChat: {
                    label: "Originale billeder i chat",
                    description: "Indlæs også det originale billede direkte i chatten. ADVARSEL: Læs bemærkningerne herunder"
                }
            },
            modal: {
                about: {
                    title: "Standardadfærden er følgende:",
                    body: "&mdash; I chatten indlæses optimerede billeder i fuld opløsning.",
                    body2: "&mdash; I billedviseren (modal) indlæses det originale billede.",
                    body3: "Du kan også aktivere originale billeder i chatten, men vær opmærksom på følgende:",
                    warning: "&mdash; Animerede billeder (GIF, WebP osv.) vil altid animere, uanset om appen er i fokus.",
                    warning2: "&mdash; Kan medføre lag (forsinkelse).",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Retter Spotify-embeds, der er ekstremt høje, ved at lade dig tilpasse lydstyrken",
            option: {
                volume: {
                    label: "Lydstyrke",
                    description: "Lydstyrken i % for Spotify-embeds. Alt over 10% er meeeeget højt"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Omgår blokering af YouTube-videoer i Discord (f.eks. blokeret af UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Tilføjer en 'Følg'-mulighed i bruger-kontekstmenuen for altid at være i samme stemmekanal som dem",
            indicatorTooltip: "Følger {{user}} (klik for at udløse manuelt, højreklik for at stoppe med at følge)",
            unknownUser: "Ukendt bruger",
            option: {
                executeOnFollow: {
                    label: "Udfør ved start",
                    description: "Sørg for at være i samme kanal med det samme, når du følger"
                },
                onlyManualTrigger: {
                    label: "Kun manuel udløsning",
                    description: "Udløs kun ved klik på indikatoren"
                },
                followLeave: {
                    label: "Følg ved afgang",
                    description: "Forlad også kanalen, når den fulgte bruger forlader den"
                },
                autoMoveBack: {
                    label: "Flyt automatisk tilbage",
                    description: "Flyt automatisk tilbage til den fulgte brugers kanal, hvis du bliver flyttet"
                },
                followUserId: {
                    label: "Følg bruger-ID",
                    description: "ID på den bruger der følges"
                },
                channelFull: {
                    label: "Kanal fuld",
                    description: "Forsøg at flytte dig til kanalen, når den ikke længere er fuld"
                }
            },
            toast: {
                channelFull: "Kanalen er fuld",
                newVc: "Fulgte brugeren ind i en ny stemmekanal",
                insufficientPermissions: "Utilstrækkelige rettigheder til at gå ind i kanalen",
                sameVc: "Du er allerede i samme kanal",
                disconnect: "Den fulgte bruger forlod; forbindelse afbrudt",
                notFollowing: "Den fulgte bruger forlod, men 'forlad ved afgang' er deaktiveret",
                notVc: "Den fulgte bruger er ikke i en stemmekanal"
            },
            context: {
                follow: "Følg bruger",
                unfollow: "Stop med at følge bruger"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Indlæser enhver skrifttype fra Google Fonts",
            option: {
                selectedFont: {
                    label: "Valgt skrifttype",
                    description: "Den nuværende valgte skrifttype"
                },
                fontSearch: {
                    label: "Søg efter skrifttype",
                    description: "Søg og vælg Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Anvend på kodeblokke",
                    description: "Anvend skrifttypen på kodeblokke"
                }
            },
            toast: {
                failedLoad: "Kunne ikke indlæse skrifttype"
            },
            modal: {
                settings: {
                    title: "Søg i Google Fonts",
                    description: "Vælg en skrifttype for at anvende den",
                    placeholder: "Søg efter skrifttyper...",
                    previewText: "Den hurtige brune ræv hopper over den dovne hund",
                    authors: "Af {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Tvinger ejer-kronen frem ved siden af brugernavne, selv i store servere."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Hvis en videresendelse fejler, sendes den som en normal besked; tillader også videresendelse af NSFW-indhold",
            option: {
                forwardPreface: {
                    label: "Videresendelses-præfiks",
                    description: "Hvilken tekst skal videresendt indhold indledes med"
                }
            },
            context: {
                attachments: "Vedhæftninger",
                forwarded: "Videresendt fra"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Gør det muligt at sende din besked med en mærkelig skrifttype ved hjælp af /freaky kommandoen.",
            command: {
                freaky: "Det er freaky.",
                message: "Gør din besked freaky"
            },
            option: {
                addFreakyEnding: {
                    label: "Tilføj Freaky slutning",
                    description: "Tilføj 👅 eller ❤️ til sidst"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Omskriver og filtrerer Quick Switcher-resultaterne, så de viser dine mest brugte kanaler."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Tilføjer en /friendcloud kommando for at visualisere de brugere, du interagerer mest med",
            command: {
                friendcloud: {
                    description: "Visualiser din venne-sky",
                    count: "Antal brugere der skal vises",
                    mustHigher: "Antallet skal være 1 eller højere!",
                    noAffinities: "Ingen interaktioner fundet. Tjek dine [privatlivsindstillinger](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Ingen gyldige brugere fundet. Tjek dine [privatlivsindstillinger](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Kunne ikke generere billedet :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Generer vennekoder for nemt at tilføje venner",
            card: {
                expires: "Udløber <t:{{expiration}}:R> • {{uses}}/{{maxUses}} brug",
                copy: "Kopier",
                copied: "Kopieret!",
                codes: "Dine vennekoder",
                count: "Vennekoder - {{invites}}",
                create: "Opret vennekode",
                revoke: "Annuller alle vennekoder",
                loading: "Indlæser...",
                dontHave: "Du har ikke nogen vennekoder."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Opret og administrer venne-invitationslinks via slash-kommandoer (/create friend invite, /view friend invites, /revoke friend invites).",
            command: {
                create: {
                    description: "Genererer et venne-invitationslink.",
                    message: "discord.gg/{{code}}`\n· Udløber <t:{{expiration}}:R>\n· Maks. brug: {{uses}}"
                },
                view: {
                    description: "Vis en liste over alle genererede venne-invitationer.",
                    message: "_discord.gg/{{code}}_ \n· Udløber: <t:{{expiration}}:R> \n· Brugt: {{uses}}/{{maxUses}}",
                    noInvites: "Du har ingen aktive venne-invitationer."
                },
                revoke: {
                    description: "Annullerer alle genererede venne-invitationer.",
                    message: "Alle venne-invitationer er blevet annulleret."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Tilføjer mærker, der viser, hvor længe du har været venner med en bruger",
            badge: {
                sprout: {
                    name: "Spire",
                    description: "Jeres venskab er lige startet"
                },
                blooming: {
                    name: "Blomstrende",
                    description: "Jeres venskab er godt på vej! (1 måned)"
                },
                burning: {
                    name: "Brændende",
                    description: "Jeres venskab har nået terminalhastighed (3 måneder)"
                },
                fighter: {
                    name: "Kriger",
                    description: "Jeres venskab er stærkt (6 måneder)"
                },
                star: {
                    name: "Stjerne",
                    description: "Jeres venskab har varet LÆNGE (1 år)"
                },
                royal: {
                    name: "Kongelig",
                    description: "Jeres venskab har været igennem tykt og tyndt — hele 2 år!"
                },
                besties: {
                    name: "Besties",
                    description: "Hvordan gør I det overhovedet??? (5 år)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Viser hvornår I blev venner i brugerens popout",
            section: "Venner siden"
        },
        friendTags: {
            name: "FriendTags",
            description: "Giver mulighed for at filtrere med brugerdefinerede tags i Quick Switcheren ved at starte en søgning med &",
            modal: {
                name: "Navn",
                users: "Brugere (adskilt af komma)",
                userlist: "Brugerliste (klik på en bruger for at fjerne)",
                remove: "Fjern",
                add: "Tilføj",
                tag: "Tag",
                removeFrom: "Fjern fra",
                addTo: "Tilføj til"
            },
            option: {
                tagConfiguration: {
                    label: "Tag Konfiguration",
                    description: "Komponent til konfiguration af tags"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Sørger for, at besked-kontekstmenuen i søgeresultater har alle de muligheder, man forventer"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Gør bruger-mentions i chatfeltet mere funktionelle, såsom ved venstre/højre-klik"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Sørger for at avatarer optager hele pladsen i en stemmekanals-flise"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Tilføjer en kontakt til bruger-popouten for at vise/skjule din spilaktivitet",
            tooltip: "Skift spilaktivitet",
            gameActivity: {
                enabled: "Spilaktivitet aktiveret",
                disabled: "Spilaktivitet deaktiveret"
            },
            option: {
                oldIcon: {
                    label: "Gammelt ikon",
                    description: "Brug den gamle ikon-stil fra før Discords ikon-redesign"
                },
                location: {
                    label: "Placering",
                    description: "Hvor knappen til spilaktivitet skal vises",
                    panel: "Ved siden af Mute/Deafen",
                    toolbox: "Plexcord Værktøjskasse"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Et sødt spøgelse vil dukke op, hvis du ikke svarer på dine DM'er",
            modal: {
                title: "Ghostede brugere",
                no: "Ingen ghostede brugere",
                unghost: "unghost",
                unknown: "Ukendt",
                unnamedGroup: "Navnløs gruppe",
                unknownUser: "Ukendt bruger",
                clearAll: "Ryd alle",
                noGhost: "Ingen spøgelser her!",
                clear: "Ryd"
            },
            option: {
                showIndicator: {
                    label: "Vis indikator",
                    description: "Vis spøgelsestælleren øverst på serverlisten"
                },
                showDmIcons: {
                    label: "Vis DM-ikoner",
                    description: "Vis spøgelsesikoner ved siden af individuelle DM'er"
                },
                ignoreGroupDms: {
                    label: "Ignorer gruppe-DM'er",
                    description: "Udeluk alle gruppe-DM'er fra ghosting"
                },
                exemptedChannels: {
                    label: "Undtagne kanaler",
                    description: "Komma-separeret liste over kanal-ID'er der skal undtages (højreklik på en DM-kanal for at kopiere ID)"
                },
                ignoreBots: {
                    label: "Ignorer bots",
                    description: "Ignorer DM'er fra bots"
                },
                maxInactiveTimeMs: {
                    label: "Maks. inaktiv tid",
                    description: "Kun ghost DM'er der er aktive inden for denne tidsramme",
                    no: "Ingen grænse",
                    oneHour: "1 time",
                    oneDay: "1 dag",
                    oneWeek: "1 uge",
                    oneMonth: "1 måned"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Gør det muligt at oprette samlinger af GIF'er",
            context: {
                copyImageLink: "Kopier billedlink",
                copyUrl: "Kopier URL",
                collection: {
                    add: "Tilføj til samling",
                    gif: "GIF-samlinger",
                    delete: "Slet samling",
                    create: "Opret samling",
                    remove: "Fjern",
                    information: "Samlingsinformation",
                    name: "Navn",
                    gifs: "GIF'er",
                    created: "Oprettet den",
                    updated: "Sidst opdateret",
                    close: "Luk",
                    rename: "Omdøb",
                    move: "Flyt til samling",
                    select: "Vælg en samling at flytte elementet til"
                },
                gif: {
                    information: "Information",
                    added: "Tilføjet den",
                    width: "Bredde",
                    height: "Højde",
                    close: "Luk"
                }
            },
            option: {
                itemPrefix: {
                    label: "Element-præfiks",
                    description: "Præfikset for GIF-elementer"
                },
                collectionPrefix: {
                    label: "Samlings-præfiks",
                    description: "Præfikset for samlinger"
                },
                onlyShowCollections: {
                    label: "Vis kun samlinger",
                    description: "Vis kun samlinger i oversigten"
                },
                stopWarnings: {
                    label: "Stop advarsler",
                    description: "Deaktiver advarsler ved sletning"
                },
                showCopyImageLink: {
                    label: "Vis 'Kopier billedlink'",
                    description: "Vis {{copyImageLink}} i kontekstmenuer"
                },
                preventDuplicates: {
                    label: "Forhindr dubletter",
                    description: "Forhindr at tilføje den samme GIF til en samling flere gange"
                },
                defaultEmptyCollectionImage: {
                    label: "Standardbillede for tom samling",
                    description: "Billedet/GIF'en der vises, når en samling er tom"
                },
                collectionsSortType: {
                    label: "Sorteringstype for samlinger",
                    description: "Typen af sortering for samlinger"
                },
                collectionsSortOrder: {
                    label: "Sorteringsrækkefølge for samlinger",
                    description: "Rækkefølgen af sortering for samlinger"
                },
                collectionsSort: {
                    label: "Sortering af samlinger",
                    description: "Bestem hvordan samlinger skal sorteres",
                    title: "Sorter samlinger",
                    sortDescription: "Vælg et sorteringskriterium for dine samlinger",
                    sortBy: "Sorter efter",
                    name: "Navn",
                    creationDate: "Oprettelsesdato",
                    modifiedDate: "Ændringsdato",
                    ascending: "Stigende",
                    descending: "Faldende"
                },
                importGifs: {
                    label: "Importer GIF'er",
                    description: "Importer samlinger",
                    button: "Importer samlinger"
                },
                exportGifs: {
                    label: "Eksporter GIF'er",
                    description: "Eksporter samlinger",
                    button: "Eksporter samlinger"
                },
                resetCollections: {
                    label: "Nulstil samlinger",
                    description: "Nulstil samlinger til standard (sletter alle dine samlinger)",
                    button: "Nulstil samlinger"
                }
            },
            toast: {
                copied: "Billedlink kopieret til udklipsholder!",
                urlCopied: "URL kopieret til udklipsholder!",
                already: "Den samling findes allerede",
                alreadyCollection: "Den GIF er allerede i den samling"
            },
            modal: {
                create: {
                    title: "Opret samling",
                    name: "Navn på samling",
                    create: "Opret"
                },
                rename: {
                    title: "Omdøb samling",
                    name: "Nyt navn på samling",
                    warning: "Navnet må ikke være længere end 24 tegn",
                    rename: "Omdøb"
                }
            },
            alert: {
                import: {
                    title: "Er du sikker?",
                    body: "Importering af samlinger vil overskrive dine nuværende samlinger.",
                    confirm: "Importer",
                    cancel: "Glem det"
                },
                reset: {
                    title: "Er du sikker?",
                    body: "Nulstilling af samlinger vil fjerne alle dine samlinger.",
                    confirm: "Nulstil",
                    cancel: "Glem det"
                },
                delete: {
                    title: "Er du sikker?",
                    deleteBody: "Vil du virkelig slette denne samling?",
                    removeBody: "Vil du virkelig fjerne dette element?",
                    confirm: "Slet",
                    remove: "Fjern",
                    cancel: "Glem det"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Gør det muligt at indsætte GIF'er direkte i chatfeltet"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Tilføjer en kommando til at sende en tilfældig GIF fra dine favoritter, med en 1/10 chance for at ping'e serverens ejer",
            command: {
                gifRoulette: {
                    description: "Udfordr skæbnen og send en GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Chance for at ping'e ejer",
                    description: "Om der skal være 1 ud af 10 chance for at ping'e ejeren af serveren (åh nej)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Viser en brugers offentlige GitHub-repositories på deres profil",
            loading: "Indlæser repositories...",
            option: {
                showStars: {
                    label: "Vis stjerner",
                    description: "Vis antal stjerner for repository"
                },
                showLanguage: {
                    label: "Vis sprog",
                    description: "Vis repositories primære programmeringssprog"
                }
            },
            error: {
                error: "Fejl",
                render: "Fejl: Kunne ikke indlæse GitHubRepos"
            },
            button: {
                show: "Vis GitHub-repositories",
                repositories: "GitHub-repositories",
                more: "Vis flere",
                only: "Viser kun de øverste {{length}}/{{total}}"
            },
            modal: {
                title: "{{user}}s GitHub-repositories",
                repository: "Repository",
                description: "Beskrivelse",
                language: "Sprog",
                stars: "Stjerner",
                viewOnGitHub: "Vis på GitHub",
                close: "Luk"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Tilføjer en kommando til at sende et link til en internetsøgning",
            command: {
                googleThat: {
                    description: "Send et link fra en søgemaskine",
                    query: "Søgeordet"
                }
            },
            option: {
                hyperlink: {
                    label: "Hyperlink",
                    description: "Om det sendte link skal være et hyperlink med søgeordet som tekst"
                },
                embed: {
                    label: "Embed",
                    description: "Om det sendte link skal generere et embed"
                },
                defaultEngine: {
                    label: "Standard søgemaskine",
                    description: "Søgemaskinen der skal bruges"
                },
                customEngineURL: {
                    label: "Brugerdefineret URL",
                    description: "URL'en på den søgemaskine du ønsker at bruge"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Gør det muligt at bruge enhver hilsen-sticker i stedet for den tilfældige ved at højreklikke på 'Vink for at sige hej!'-knappen",
            mode: {
                greet: "Hilsen",
                message: "Besked"
            },
            option: {
                greetMode: {
                    label: "Hilsen-tilstand",
                    description: "Vælg hilsen-tilstand",
                    greet: "Hilsen (du kan kun hilse 3 gange)",
                    message: "Besked (du kan hilse så meget du vil)"
                }
            },
            context: {
                label: "Hilsen-sticker vælger",
                mode: "Hilsen-tilstand",
                stickers: "Hilsen-stickers",
                multi: "Unholy Multi-Greet",
                send: "Send hilsner"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Kontekstmenu til at dumpe og downloade en servers emojis og stickers.",
            context: {
                download: {
                    emoji: "Download emojis",
                    sticker: "Download stickers"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Tilføjer indstillinger for server-tags, såsom at skjule dem eller deaktivere anmodninger om at bruge dem.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Deaktiver 'Adopt Tag' anmodning",
                    description: "Deaktiver anmodningen om at bruge tags"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Giver mulighed for at skjule chat-knapperne",
            tooltip: {
                close: "Luk",
                open: "Åbn"
            },
            option: {
                color: {
                    label: "Farve",
                    description: "Gør den rød ved åbning"
                },
                open: {
                    label: "Åben",
                    description: "Åben som standard"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Skjul vedhæftninger og embeds for individuelle beskeder via en knap ved hover",
            show: "Vis medier",
            hide: "Skjul medier",
            hidden: "Medier skjult"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Et plugin til midlertidigt at skjule beskeder, indtil du genstarter.",
            button: {
                hide: "Skjul"
            },
            option: {
                hidePopoverButton: {
                    label: "Skjul Popover-knap",
                    description: "Skjul 'skjul'-knappen i beskedens popover-menu."
                }
            }
        },
        hideServers: {
            name: "HideServers",
            description: "Skjuler servere fra serverlisten",
            context: {
                hide: "Skjul server",
                unhide: "Vis server",
                folder: {
                    hide: "Skjul mappe",
                    unhide: "Vis mappe"
                }
            },
            option: {
                showIndicator: {
                    label: "Vis indikator",
                    description: "Vis menu til at gendanne skjulte servere nederst på listen"
                },
                guildsList: {
                    label: "Serverliste",
                    description: "Fjern skjulte servere"
                },
                resetHidden: {
                    label: "Nulstil skjulte",
                    description: "Fjern alle skjulte servere fra listen",
                    button: "Nulstil skjulte servere"
                }
            },
            button: {
                hidden: "Skjult",
                hiddenServers: "Skjulte servere",
                remove: "Fjern",
                folder: "Mappe",
                removeAll: "Fjern alle",
                guilds: "Servere",
                noHiddenServers: "Ingen skjulte servere"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes giver dig mulighed for at gemme beskeder",
            main: "Hoved",
            button: {
                tooltip: "Holy Notes",
                save: "Gem note",
                cancel: "Annuller",
                noteMessage: "Gem besked som note",
                refresh: "Opdater avatarer",
                import: "Importer noter",
                export: "Eksporter noter",
                deleteAll: "Slet alle noter",
                delete: "Slet notesbog",
                create: "Opret notesbog",
                copyText: "Kopier tekst",
                copyAttachment: "Kopier vedhæftnings-URL",
                deleteNote: "Slet note",
                moveNote: "Flyt note",
                moveTo: "Flyt til {{key}}",
                copyId: "Kopier ID"
            },
            modal: {
                error: {
                    generic: "Der opstod en fejl ved læsning af dine noter. Tjek konsollen for detaljer.",
                    easter: "Ingen noter fundet. Empathy Banana er her for dig.",
                    empty: "Der blev ikke fundet nogen noter i denne notesbog."
                },
                help: {
                    title: "Hjælp",
                    description: "Lær hvordan du bruger Holy Notes",
                    addingNotes: "Tilføjelse af noter",
                    addingNotesText: "For at tilføje en note skal du højreklikke på en besked, holde musen over 'Gem besked som note' og klikke på knappen med navnet på den notesbog, du vil gemme beskeden i.",
                    prototype: "Prototype",
                    noteMessage: "Hvis du bare klikker på 'Gem besked som note' uden at vælge en bog, gemmes den i 'Hoved' som standard!",
                    deletingNotes: "Sletning af noter",
                    deletingNotesText: "Bemærk: Du kan enten højreklikke på noten og vælge 'Slet note', eller du kan holde 'DELETE'-tasten nede på dit tastatur og klikke på en note; det er som magi!",
                    movingNotes: "Flytning af noter",
                    movingNotesText: "For at flytte en note skal du højreklikke på en note, holde musen over 'Flyt note' og klikke på den notesbog, du vil flytte den til.",
                    jumpToMessage: "Hop til besked",
                    jumpToMessageText: "For at hoppe til det sted, hvor noten oprindeligt blev skrevet, skal du blot højreklikke på noten og vælge 'Hop til besked'."
                },
                notebook: {
                    title: "NOTESBOG",
                    search: "Søg efter en besked...",
                    options: "Sorteringsmuligheder",
                    label: "Sorteringsmenu",
                    filteredOf: "{{filteredCount}} af {{noteCount}} note{{s}}",
                    note: "{{noteCount}} note{{s}}",
                    ada: "Stigende / Tilføjelsesdato",
                    amd: "Stigende / Beskeddato",
                    dda: "Faldende / Tilføjelsesdato",
                    dmd: "Faldende / Beskeddato",
                    change: "Skift sortering",
                    ascending: "Stigende",
                    descending: "Faldende",
                    dateAdded: "Dato tilføjet",
                    messageDate: "Beskeddato"
                },
                create: {
                    title: "Opret notesbog",
                    description: "Indtast et navn til din nye notesbog",
                    placeholder: "Navn på notesbog"
                },
                delete: {
                    title: "Slet {{notebookName}}?",
                    description: "{{noteCount}} note{{s}} vil blive slettet permanent",
                    button: "Slet"
                },
                tabs: {
                    label: "Notesbogs-faner"
                }
            },
            toast: {
                saved: "Besked tilføjet til {{notebook}}",
                deleted: "Note slettet fra {{notebook}}",
                moved: "Note flyttet fra {{from}} til {{to}}.",
                exists: "Notesbogen {{notebookName}} findes allerede.",
                created: "{{notebookName}} er blevet oprettet.",
                deletedNotebook: "{{notebookName}} er blevet slettet.",
                refreshed: "Avatarer er blevet opdateret.",
                deletedAll: "Alle noter er blevet slettet.",
                imported: "Noter er blevet importeret.",
                invalid: "Kunne ikke importere noter."
            },
            toolbox: {
                action: "Åbn noter"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Ændrer hjem-knappen til en skrive-indikator, hvis nogen i dine DM'er skriver"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Tilføjer en ny fane til indstillinger for at se alle ikoner.",
            toolbox: "Åbn ikon-fane",
            iconFinder: "Ikon-finder",
            about: {
                title: "Funktioner",
                preview: "Forhåndsvis ikoner",
                list: {
                    copy: "Kopier ikon-navne og CSS-variabler",
                    download: "Download ikoner i forskellige formater (SVG, PNG, GIF osv.)",
                    premade: "Kopier færdiglavede ikon-koder til dine plugins",
                    find: "Find ikoner efter funktionskontekst",
                    search: "Søg efter farver ved at højreklikke på farvenavnet",
                    special: "Særlig tak"
                }
            },
            context: {
                icon: {
                    options: "Ikon-indstillinger",
                    log: "Log til konsol",
                    save: "Gem som...",
                    rightClick: "Højreklik på ikon for at ændre",
                    usage: "Anvendelse",
                    click: "Klik for at kopiere",
                    copied: "Kopieret!",
                    actions: "Handlinger"
                }
            },
            modal: {
                label: "Søg efter funktionskontekst",
                search: "Søg i {{count}} ikoner...",
                function: "Funktion",
                iconViewer: {
                    colors: "Ikonviser-farver",
                    unknown: "ukendt",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Genstarter automatisk klienten efter at have været inaktiv i et bestemt tidsrum, men undgår at genstarte mens du er i et stemmeopkald.",
            option: {
                isEnabled: {
                    label: "Er aktiveret",
                    description: "Aktiver automatisk genstart efter inaktivitet"
                },
                idleMinutes: {
                    label: "Inaktive minutter",
                    description: "Minutters inaktivitet før genstart (når du ikke er i opkald)"
                }
            },
            toolbox: {
                disable: "Deaktiver inaktivitets-genstart",
                enable: "Aktiver inaktivitets-genstart"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignorer aktiviteter fra kun at blive vist på DIN status. Du kan konfigurere hvilke der specifikt skal ignoreres i fanerne for registrerede spil og aktiviteter, eller bruge de generelle indstillinger herunder",
            modal: {
                import: {
                    title: "Importer applikations-ID fra CustomRPC-pluginnet til filterlisten"
                },
                filter: {
                    title: "Filterliste",
                    description: "Komma-separeret liste over aktivitets-ID'er der skal filtreres (nyttigt til specifikke RPC-aktiviteter)"
                }
            },
            toast: {
                id: {
                    notSet: "CustomRPC applikations-ID er ikke indstillet.",
                    alreadyAdded: "CustomRPC applikations-ID er allerede tilføjet."
                }
            },
            button: {
                import: "Importer CustomRPC ID"
            },
            option: {
                importCustomRPC: {
                    label: "Importer CustomRPC"
                },
                listMode: {
                    label: "Listetilstand",
                    description: "Vælg hvordan filterlisten skal anvendes",
                    blacklist: "Sortliste (ignorer kun det på listen)",
                    whitelist: "Hvidliste (ignorer alt undtagen det på listen)"
                },
                idList: {
                    label: "ID-liste"
                },
                ignorePlaying: {
                    label: "Ignorer 'Spiller'",
                    description: "Ignorer alle 'spiller'-aktiviteter (spil og RPC)"
                },
                ignoreStreaming: {
                    label: "Ignorer 'Streamer'",
                    description: "Ignorer alle streaming-aktiviteter"
                },
                ignoreListening: {
                    label: "Ignorer 'Lytter'",
                    description: "Ignorer alle 'lytter'-aktiviteter (f.eks. Spotify)"
                },
                ignoreWatching: {
                    label: "Ignorer 'Ser'",
                    description: "Ignorer alle 'ser'-aktiviteter"
                },
                ignoreCompeting: {
                    label: "Ignorer 'Deltager i'",
                    description: "Ignorer alle 'deltager i'-aktiviteter"
                },
                ignoredActivities: {
                    label: "Ignorerede aktiviteter"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Giver dig mulighed for at ignorere opkald fra specifikke brugere eller DM-grupper.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Permanent ignorerede brugere",
                    description: "Bruger-ID'er (adskilt af komma + mellemrum) som altid skal ignoreres"
                }
            },
            button: {
                ignore: "Ignorer",
                temporarilyIgnore: "Ignorer opkald midlertidigt",
                permanentlyIgnore: "Ignorer opkald permanent"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Skjul ikke beskeder fra 'sandsynlige spammere'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Viser filnavnet på billeder og GIF'er som et værktøjstip, når man holder musen over dem",
            option: {
                showFullUrl: {
                    label: "Vis fuld URL",
                    description: "Vis den fulde URL i stedet for kun filnavnet. Altid aktiveret for GIF'er, da de ofte mangler sigende filnavne"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Skjul aldrig billedlinks i beskeder, selvom det er det eneste indhold"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Giver dig mulighed for at zoome ind på billeder og GIF'er samt vise metadata. Brug scroll-hjulet for at zoome og Shift + scroll for at ændre linsens størrelse.",
            option: {
                saveZoomValues: {
                    label: "Gem zoom-værdier",
                    description: "Om zoom- og linsestørrelse skal gemmes"
                },
                invertScroll: {
                    label: "Inverter scroll",
                    description: "Inverter scroll-retning"
                },
                nearestNeighbour: {
                    label: "Nearest Neighbour",
                    description: "Brug Nearest Neighbour interpolation ved skalering af billeder"
                },
                square: {
                    label: "Firkantet",
                    description: "Gør linsen firkantet"
                },
                zoom: {
                    label: "Zoom",
                    description: "Zoom-niveau for linsen"
                },
                size: {
                    label: "Størrelse",
                    description: "Radius / Størrelse på linsen"
                },
                zoomSpeed: {
                    label: "Zoom-hastighed",
                    description: "Hvor hurtigt zoom/linse ændrer sig"
                },
                showMetadata: {
                    label: "Vis metadata",
                    description: "Vis billed-metadata ved dobbeltklik på det valgte billede"
                }
            },
            context: {
                square: "Firkantet linse",
                nearest: "Nearest Neighbour",
                zoom: "Zoom",
                size: "Linsestørrelse",
                zoomSpeed: "Zoom-hastighed",
                showImageMetadata: "Vis billed-metadata",
                view: "Vis metadata",
                loading: "Indlæser...",
                unknown: "Ukendt",
                sizeHTML: "Størrelse",
                dimensions: "Dimensioner",
                filename: "Filnavn"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Tilføjer en /imgtogif slash-kommando for at lave en GIF ud fra et billede",
            command: {
                imgToGif: {
                    description: "Gør det muligt at lave et billede om til en GIF",
                    image: "Billedvedhæftning der skal bruges",
                    width: "Bredde på GIF'en",
                    height: "Højde på GIF'en"
                }
            },
            error: {
                noImage: "Intet billede angivet!",
                notImage: "Det uploadede er ikke et billede"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Viser dine implicitte relationer i fanen Venner.",
            option: {
                sortByAffinity: {
                    label: "Sorter efter affinitet",
                    description: "Om implicitte relationer skal sorteres efter hvor meget I interagerer."
                }
            },
            implicit: "Implicit"
        },
        inRole: {
            name: "InRole",
            description: "Se hvem der har en bestemt rolle via rollens kontekstmenu eller /inrole kommandoen (læs plugin info!)",
            command: {
                inrole: {
                    description: "Se hvem der har en rolle",
                    role: "Rollen",
                    noGuild: "Sørg for, at du er på en server."
                }
            },
            context: {
                view: "Vis medlemmer med rollen"
            },
            modal: {
                about: {
                    title: "Begrænsninger",
                    description: "Hvis du ikke har moderator-rettigheder på serveren, og serveren er stor (over 100 medlemmer), kan pluginnet være begrænset på følgende måde:",
                    list: {
                        one: "Offline medlemmer vil ikke blive vist",
                        two: "Op til 100 medlemmer vises som standard. For at få flere, skal du rulle ned i medlemslisten for at indlæse dem.",
                        three: "Venner vil dog altid blive vist uanset deres status."
                    }
                },
                member: {
                    title: "Rolle-medlemmer",
                    noMembers: "Det ser ikke ud til, at der blev fundet nogen online-medlemmer med den rolle. Prøv at rulle ned i medlemslisten for at indlæse flere!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Del din skærm med det samme, når du går ind i en stemmekanal, med understøttelse af skriveborde, vinduer og kameraer",
            modal: {
                linux: {
                    title: "For Linux",
                    body: "For Wayland åbnes kun skærmdelings-vælgeren",
                    bodyTwo: "For X11 virker det måske, eller måske ikke :shrug:"
                },
                videoDevices: {
                    title: "Video-input enheder",
                    body: "Understøtter kameraer og capture cards (som Elgato HD60X), når det er aktiveret i indstillingerne"
                },
                regardingSound: {
                    title: "Om lyd og forhåndsvisning",
                    body: "Vi bruger Discords egne indstillinger til at bestemme, om lyd og forhåndsvisning skal være aktiveret"
                }
            },
            option: {
                streamMedia: {
                    label: "Mediekilde der skal streames",
                    description: "Nulstilles til hovedskærm, hvis kilden ikke findes",
                    loading: "Indlæser mediekilder...",
                    none: "Ingen mediekilder fundet",
                    placeholder: "Vælg en mediekilde"
                },
                includeVideoDevices: {
                    label: "Inkluder videoenheder",
                    description: "Inkluder kameraer og capture cards i listen over kilder"
                },
                autoMute: {
                    label: "Auto Mute",
                    description: "Slå automatisk din mikrofon fra, når du går ind i en kanal"
                },
                autoDeafen: {
                    label: "Auto Deafen",
                    description: "Slå automatisk lyden fra (deafen), når du går ind i en kanal (slår også mikrofonen fra)"
                },
                instantScreenshare: {
                    label: "Instant Screenshare",
                    description: "Aktiverer den automatiske skærmdelings-funktion"
                },
                keybindScreenshare: {
                    label: "Keybind Screenshare",
                    description: "Del skærm via en genvejstast indstillet i Discord"
                },
                focusDiscord: {
                    label: "Fokus på Discord",
                    description: "Start kun skærmdeling via genvejstast, når Discord er i fokus"
                },
                toolboxManagement: {
                    label: "Værktøjskasse-styring",
                    description: "Aktiver/Deaktiver Instant Screenshare"
                }
            },
            toolbox: {
                label: "Instant Screenshare",
                toast: "Instant Screenshare {{state}}",
                enabled: "Aktiveret",
                disabled: "Deaktiveret"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Krypter dine beskeder på en ikke-mistænkelig måde!",
            option: {
                savedPasswords: {
                    label: "Gemte adgangskoder",
                    description: "Gemte adgangskoder (adskilt af komma)"
                }
            },
            button: {
                encrypt: "Krypter besked",
                decrypt: "Dekrypter besked",
                hidden: "Indikator for skjult besked (InvisibleChat)"
            },
            tooltip: {
                hidden: "Denne besked indeholder en skjult besked! (InvisibleChat)"
            },
            embed: {
                title: "Dekrypteret besked",
                footer: "Sendt med InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Krypter besked",
                    secret: "Hemmelighed",
                    cover: "Dæktekst (2 eller flere ord!!)",
                    password: "Adgangskode",
                    dontUseCover: "Brug ikke dæktekst",
                    send: "Send",
                    cancel: "Annuller"
                },
                decrypt: {
                    title: "Dekrypter besked",
                    with: "Besked med kryptering",
                    password: "Adgangskode",
                    decrypt: "Dekrypter",
                    cancel: "Annuller"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Gør det muligt at ændre standardværdierne, når du opretter server-invitationer.",
            option: {
                inviteDuration: {
                    label: "Varighed",
                    description: "Standard varighed for invitationer",
                    thirtyMinutes: "30 minutter",
                    oneHour: "1 time",
                    sixHours: "6 timer",
                    twelveHours: "12 timer",
                    oneDay: "1 dag",
                    sevenDays: "7 dage",
                    forever: "Uendelig"
                },
                maxUses: {
                    label: "Maks. brug",
                    description: "Standard maksimalt antal brug for invitationer",
                    unlimited: "Ubegrænset",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Midlertidigt medlemskab",
                    description: "Standard indstilling for midlertidigt medlemskab"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Gør brugernavns-farver i chatten unikke, ligesom i IRC-klienter",
            option: {
                lightness: {
                    label: "Lysstyrke",
                    description: "Lysstyrke i %. Skift hvis farverne er for lyse eller for mørke"
                },
                memberListColors: {
                    label: "Farver i medlemslisten",
                    description: "Erstat rollefarver i medlemslisten"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Kun for brugere uden farve",
                    description: "Anvend kun farver på brugere, der ikke allerede har en defineret farve"
                },
                applyColorOnlyInDms: {
                    label: "Kun i DM'er",
                    description: "Anvend kun farver i direkte beskeder; ikke på servere."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Gemmer lokalt alle dem, du har kommunikeret med (inklusive servere), i tilfælde af tab",
            section: {
                description: "Giver en liste over brugere, du har nævnt eller svaret, dem der ejer servere du er i, eller medlemmer af din egen server",
                empty: "Listen er tom i øjeblikket.",
                tooltip: "{{user}}, opdateret {{updatedAtContent}}",
                owner: "Server-ejer",
                iRememberYou: "I Remember You"
            },
            context: {
                user: "Brugerindstillinger",
                copy: "Kopier bruger-ID",
                copyToast: "Bruger-ID kopieret til udklipsholder",
                view: "Vis profil"
            },
            modal: {
                title: "Editor",
                filter: "Filtrer efter tag, brugernavn, ID",
                button: {
                    validate: "Valider og gem",
                    cancel: "Annuller",
                    openEditor: "Åbn Editor",
                    resetData: "Nulstil lager",
                    sure: "Er du sikker?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Tilføjer muligheder i kontekstmenuen for at hoppe til toppen eller bunden af en kanal/DM",
            context: {
                top: "Hop til første besked",
                bottom: "Hop til seneste besked",
                noMessages: "Ingen beskeder fundet fra denne bruger i denne kanal.",
                searchFailed: "Søgning efter beskeder fejlede."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Forsøger at navigere tilbage til den kanal, du var i, før du skiftede konto eller indlæste Discord."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Tilføjer OperaGX eller osu! lydeffekter, når du skriver på dit tastatur.",
            option: {
                volume: {
                    label: "Lydstyrke",
                    description: "Lydstyrke for tastaturlydene"
                },
                soundPack: {
                    label: "Lydpakke",
                    description: "Lydpakke der skal bruges til tastaturlyde",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Sender en notifikation, hvis en besked matcher bestemte nøgleord eller regex (regulære udtryk)",
            idHolder: "ID",
            keywordEntry: "Nøgleord",
            regexHolder: "eksempel|regex",
            ignoreCase: "Ignorer store/små bogstaver",
            whiteblackLabel: "Hvidliste/Sortliste",
            tab: {
                title: "Nøgleord",
                clearAll: "Ryd alle"
            },
            button: {
                addId: "Tilføj ID",
                addKeyword: "Tilføj nøgleord"
            },
            listTypeSelector: {
                blacklist: "Sortliste",
                whitelist: "Hvidliste",
                placeholder: "Vælg en listetype"
            },
            option: {
                ignoreBots: {
                    label: "Ignorer bots",
                    description: "Ignorer beskeder fra bots"
                },
                amountToKeep: {
                    label: "Antal der skal gemmes",
                    description: "Antal beskeder der skal gemmes i loggen"
                },
                keywords: {
                    label: "Nøgleord",
                    description: "Administrer nøgleord"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Tilføjer en 'sidst set'-indikator under brugernavne i din DM-liste samt medlemslister i servere og grupper",
            unit: {
                d: "dag",
                h: "time",
                m: "minut"
            },
            online: "Online for {{formattedTime}} siden"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Lille plugin til ListenBrainz 'rich presence'",
            about: {
                title: "Om MusicBrainz API",
                description: "MusicBrainz API kræver ikke en API-nøgle, men kræver en {{link}}. For de fleste vil en e-mailadresse være tilstrækkelig.",
                userAgent: "meningsfuld user-agent streng"
            },
            option: {
                username: {
                    label: "Brugernavn",
                    description: "ListenBrainz brugernavn"
                },
                mbContact: {
                    label: "MB Kontakt",
                    description: "ListenBrainz kontakt"
                },
                shareUsername: {
                    label: "Del brugernavn",
                    description: "Vis link til ListenBrainz-profil (er muligvis kun synlig for andre brugere)"
                },
                shareSong: {
                    label: "Del sang",
                    description: "Vis link til nuværende sang på ListenBrainz (er muligvis kun synlig for andre brugere)"
                },
                hideWithSpotify: {
                    label: "Skjul ved Spotify",
                    description: "Skjul ListenBrainz-status hvis Spotify kører"
                },
                hideWithActivity: {
                    label: "Skjul ved aktivitet",
                    description: "Skjul ListenBrainz-status hvis du har en hvilken som helst anden aktivitet"
                },
                useTimeBar: {
                    label: "Brug tidslinje",
                    description: "Brug sangens varighed til at vise en tidslinje (kræver 'Lytter til'-status)"
                },
                statusName: {
                    label: "Statusnavn",
                    description: "Brugerdefineret statustekst"
                },
                nameFormat: {
                    label: "Navneformat",
                    description: "Vis navn på sang og kunstner i statussen",
                    custom: "Brug brugerdefineret statusnavn",
                    artistSong: "Brug formatet 'kunstner - sang'",
                    songArtist: "Brug formatet 'sang - kunstner'",
                    artistOnly: "Vis kun kunstnernavn",
                    songOnly: "Vis kun sangnavn",
                    albumName: "Vis albumnavn (falder tilbage til brugerdefineret tekst, hvis album mangler)"
                },
                useListeningStatus: {
                    label: "Brug 'Lytter til'-status",
                    description: "Vis 'Lytter til' i stedet for 'Spiller'"
                },
                missingArt: {
                    label: "Manglende cover",
                    description: "Når album eller cover mangler",
                    listenbrainzLogo: "Brug stort ListenBrainz-logo",
                    generic: "Brug generisk pladsholder"
                },
                useLogo: {
                    label: "Brug logo",
                    description: "Vis ListenBrainz-logo på albumcoveret"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Erstat Discords citater under indlæsning",
            option: {
                replaceEvents: {
                    label: "Erstat ved begivenheder",
                    description: "Skal dette plugin også gælde under begivenheder med specielle tema-citater? (f.eks. Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Aktiver plugin-citater",
                    description: "Aktiver de citater, der følger med dette plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Aktiver Discord-citater",
                    description: "Aktiver Discords egne citater (inklusiv tema-citater under begivenheder)"
                },
                additionalQuotes: {
                    label: "Ekstra citater",
                    description: "Egne citater der skal vises, adskilt af nedenstående skilletegn"
                },
                additionalQuotesDelimiter: {
                    label: "Skilletegn for citater",
                    description: "Skilletegn brugt til ekstra citater"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Giver dig mulighed for at logge ind på en anden enhed ved at scanne en QR-kode, ligesom på mobilen!",
            option: {
                scanQr: {
                    label: "Scan QR-kode",
                    description: "Scan en QR-kode",
                    notEnabled: "Aktiver pluginnet og genstart din klient for at scanne en QR-kode"
                }
            },
            neverScan: "Scan aldrig en login-QR-kode fra en anden bruger eller applikation.",
            hold: "Hold nede for at bekræfte login",
            scanning: "Scanner...",
            stopScanning: "Stop scanning",
            usingWebcam: "Scan med webcam",
            dragDrop: "Træk og slip et billede her, eller klik for at vælge et",
            orPaste: "Eller indsæt et billede fra din udklipsholder!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Giver mulighed for at ændre (standard) afspilningshastigheden på indlejrede medier",
            playbackSpeed: "Afspilningshastighed",
            context: {
                label: "Hastighedskontrol"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Standardhastighed for talebeskeder",
                    description: "Talebeskeder"
                },
                defaultVideoSpeed: {
                    label: "Standardhastighed for video",
                    description: "Videoer"
                },
                defaultAudioSpeed: {
                    label: "Standardhastighed for lyd",
                    description: "Lydfiler"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Viser antallet af online medlemmer, totalt antal medlemmer og brugere i stemmekanaler — i medlemslisten og som værktøjstip.",
            option: {
                toolTip: {
                    label: "Værktøjstip",
                    description: "Vis antal medlemmer på serverens værktøjstip"
                },
                memberList: {
                    label: "Medlemsliste",
                    description: "Vis antal medlemmer i toppen af medlemslisten"
                },
                voiceActivity: {
                    label: "Stemmeaktivitet",
                    description: "Vis antal brugere i stemmekanaler"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} online i denne kanal",
            totalMembers: "{{formattedTotalCount}} medlemmer i alt på serveren",
            totalVoice: "{{formattedVoiceCount}} medlemmer i stemmekanaler"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Viser bruger-avatarer og rolle-ikoner inde i mentions (@-nævnelser)",
            option: {
                showAtSymbol: {
                    label: "Vis @-symbol",
                    description: "Om @-symbolet skal vises ved bruger-mentions"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Tilføjer en knap i chatfeltet til at 'miave' i chatten",
            button: {
                meow: "Miauw"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Slår beskeder sendt inden for et kort tidsrum sammen med din forrige besked, hvis ingen andre skriver imellem dem.",
            option: {
                timePeriod: {
                    label: "Tidsrum",
                    description: "Varigheden af et 'burst' (i sekunder)."
                },
                shouldMergeWithAttachment: {
                    label: "Slå sammen ved vedhæftninger",
                    description: "Skal besked slås sammen, hvis den forrige besked indeholder en fil?"
                },
                useSpace: {
                    label: "Brug mellemrum",
                    description: "Om der skal tilføjes et mellemrum mellem beskeder i stedet for et linjeskift ved sammenlægning."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Hold Backspace nede og klik for at slette, dobbeltklik for at redigere/svare",
            option: {
                singleClickAction: {
                    label: "Enkeltklik-handling",
                    description: "Handling ved enkeltklik (dine beskeder)"
                },
                singleClickModifier: {
                    label: "Enkeltklik-modifikator",
                    description: "Tast der skal holdes nede ved enkeltklik (dine beskeder)"
                },
                singleClickOthersAction: {
                    label: "Enkeltklik-handling (Andre)",
                    description: "Handling ved enkeltklik (andres beskeder)"
                },
                singleClickOthersModifier: {
                    label: "Enkeltklik-modifikator (Andre)",
                    description: "Tast der skal holdes nede ved enkeltklik (andres beskeder)"
                },
                doubleClickAction: {
                    label: "Dobbeltklik-handling",
                    description: "Handling ved dobbeltklik (dine beskeder)"
                },
                doubleClickOthersAction: {
                    label: "Dobbeltklik-handling (Andre)",
                    description: "Handling ved dobbeltklik (andres beskeder)"
                },
                doubleClickModifier: {
                    label: "Dobbeltklik-modifikator",
                    description: "Tast der skal holdes nede ved dobbeltklik"
                },
                tripleClickAction: {
                    label: "Trippelklik-handling",
                    description: "Handling ved trippelklik"
                },
                tripleClickModifier: {
                    label: "Trippelklik-modifikator",
                    description: "Tast der skal holdes nede ved trippelklik"
                },
                reactEmoji: {
                    label: "Reaktions-emoji",
                    description: "Emoji der bruges til reaktions-handlinger"
                },
                addAdditionalReacts: {
                    label: "Tilføj ekstra reaktioner",
                    description: "Tilføj også andre konfigurerede reaktions-emojis"
                },
                additionalReactEmojis: {
                    label: "Ekstra reaktions-emojis",
                    description: "Ekstra emojis der tilføjes ved reaktions-handling (adskilt af komma/linjeskift, maks. {{count}})"
                },
                disableInDms: {
                    label: "Deaktiver i DM'er",
                    description: "Deaktiver alle klik-handlinger i direkte beskeder"
                },
                disableInSystemDms: {
                    label: "Deaktiver i system-DM'er",
                    description: "Deaktiver alle klik-handlinger i system-DM'er"
                },
                clickTimeout: {
                    label: "Klik-timeout",
                    description: "Tid til at skelne mellem dobbelt/trippelklik (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Tærskel for dobbeltklik-hold",
                    description: "Maksimal tid en tast må holdes nede ved dobbeltklik (ms). Længere hold tillader tekstmarkering"
                },
                deferDoubleClickForTriple: {
                    label: "Udskyd dobbeltklik for trippel",
                    description: "Forsink dobbeltklik for at tillade trippelklik (deaktiverer trippelklik hvis slået fra)"
                },
                selectionHoldTimeout: {
                    label: "Timeout for markering",
                    description: "Tid før tekstmarkering tillades (ms)"
                },
                quoteWithReply: {
                    label: "Citer med svar",
                    description: "Ved citering skal der også svares på beskeden"
                },
                useSelectionForQuote: {
                    label: "Brug markering til citat",
                    description: "Brug markeret tekst til citat, hvis tilgængeligt"
                }
            },
            actions: {
                none: "Ingen",
                delete: "Slet",
                copyLink: "Kopier link",
                copyID: "Kopier ID",
                copyContent: "Kopier indhold",
                copyUserID: "Kopier bruger-ID",
                edit: "Rediger",
                reply: "Svar",
                react: "Reager",
                openThread: "Åbn tråd",
                openTab: "Åbn fane",
                quote: "Citer",
                pin: "Fastgør"
            },
            missingPermissions: {
                react: "Kan ikke reagere: Mangler rettigheder",
                pin: "Kan ikke fastgøre: Mangler rettigheder",
            },
            cannotQuote: "Kan ikke citere denne beskedtype",
            copy: {
                messageId: "Besked-ID kopieret!",
                messageContent: "Beskedindhold kopieret!",
                userId: "Bruger-ID kopieret!"
            },
            linkCopied: "Link kopieret!"
        },
        messageColors: {
            name: "MessageColors",
            description: "Viser farvekoder som #FF0042 direkte i beskeder",
            option: {
                renderType: {
                    label: "Visningstype",
                    description: "Hvordan farver skal vises",
                    textColor: "Tekstfarve",
                    block: "Farveblok ved siden af",
                    backgroundColor: "Baggrundsfarve"
                },
                enableShortHexCodes: {
                    label: "Aktiver korte hex-koder",
                    description: "Aktiver hex-koder med 3 tegn som #39f"
                },
                blockView: {
                    label: "Type af blokvisning",
                    description: "Hvordan farveblokke skal placeres",
                    right: "Højre side",
                    left: "Venstre side",
                    both: "Begge sider"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Viser hvor lang tid det tog at hente beskeder for den nuværende kanal",
            option: {
                showIcon: {
                    label: "Vis ikon",
                    description: "Vis ikon for hentningstid i beskedfeltet"
                },
                showMs: {
                    label: "Vis millisekunder",
                    description: "Vis millisekunder i tidsangivelsen"
                },
                iconColor: {
                    label: "Ikonfarve",
                    description: "Farve på ikonet (CSS-farveværdi)"
                }
            },
            loaded: "Beskeder indlæst på {{time}}ms ({{timeAgo}})",
            day: "dag{{s}} siden",
            hour: "time{{s}} siden",
            minute: "minut{{s}} siden",
            justNow: "lige nu"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Viser en indikator for beskeder, der tog ≥n sekunder at sende",
            day: "dag",
            days: "dage",
            hour: "time",
            hours: "timer",
            minute: "minut",
            minutes: "minutter",
            second: "sekund",
            seconds: "sekunder",
            millisecond: "millisekund",
            milliseconds: "millisekunder",
            and: "og",
            oldKotlinDetected: "Brugeren mistænkes for at bruge en gammel Discord Android-klient.",
            ahead: "Denne brugers ur er {{delta}} foran.",
            delay: "Denne besked blev sendt med en forsinkelse på {{delta}}.",
            delayedMessage: "Forsinket besked",
            oldAndroidClient: "Gammel Discord Android-klient",
            option: {
                latency: {
                    label: "Forsinkelse",
                    description: "Tærskel i sekunder for forsinkelses-indikatoren"
                },
                detectDiscordKotlin: {
                    label: "Registrer Discord Kotlin",
                    description: "Registrer gamle Discord Android-klienter"
                },
                showMillis: {
                    label: "Vis millisekunder",
                    description: "Vis millisekunder"
                },
                ignoreSelf: {
                    label: "Ignorer dig selv",
                    description: "Tilføj ikke indikator på dine egne beskeder"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Tilføjer en forhåndsvisning til beskeder, der linker til en anden besked",
            option: {
                messageBackgroundColor: {
                    label: "Baggrundsfarve for besked",
                    description: "Baggrundsfarve for beskeder i rich embeds"
                },
                automodEmbeds: {
                    label: "Automod Embeds",
                    description: "Brug automod embeds i stedet for rich embeds (mindre, men færre info)",
                    always: "Brug altid automod embeds",
                    prefer: "Foretræk automod embeds, men brug rich embeds hvis indholdet kræver det",
                    never: "Brug aldrig automod embeds"
                },
                listMode: {
                    label: "Listetilstand",
                    description: "Om ID-listen skal bruges som sortliste eller hvidliste",
                    blacklist: "Sortliste",
                    whitelist: "Hvidliste"
                },
                idList: {
                    label: "ID-liste",
                    description: "ID'er på servere/kanaler/brugere (adskilt af komma)"
                },
                clearMessageCache: {
                    label: "Ryd besked-cache",
                    description: "Ryd cachen for linkede beskeder"
                }
            },
            noContent: {
                noAttachments: "intet indhold {{count}} embed{{s}}",
                noEmbeds: "intet indhold {{count}} vedhæftning{{s}}",
                both: "intet indhold, {{attachments}} vedhæftning{{attachmentsS}} og {{embeds}} embed{{embedsS}}"
            },
            dm: "Direkte besked",
            groupDm: "Gruppechat",
            server: "Server"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Viser et værktøjstip med forhåndsvisning af besked ved hover over links, svar og videresendte beskeder.",
            loading: "Indlæser...",
            option: {
                onLink: {
                    label: "Ved links",
                    description: "Vis værktøjstip ved hover over beskedlinks"
                },
                onReply: {
                    label: "Ved svar",
                    description: "Vis værktøjstip ved hover over svar"
                },
                onForward: {
                    label: "Ved videresendelse",
                    description: "Vis værktøjstip ved hover over videresendte beskeder"
                },
                display: {
                    label: "Visning",
                    description: "Visningsstil",
                    auto: "Samme som besked",
                    compact: "Kompakt",
                    cozy: "Rummelig (Cozy)"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Logger midlertidigt slettede og redigerede beskeder.",
            removeMessage: "Fjern beskedhistorik",
            removeMessageTemporary: "Fjern besked (Midlertidigt)",
            clearMessageLog: "Ryd beskedlog",
            showDiff: "Vis forskelle",
            modal: {
                edit: {
                    title: "Historik for redigering",
                    tooltip: "Denne ændring blev ikke logget og kan ikke vises."
                }
            },
            option: {
                deleteStyle: {
                    label: "Slettestil",
                    description: "Hvordan slettede beskeder skal se ud",
                    text: "Rød tekst",
                    overlay: "Rød baggrund"
                },
                logDeletes: {
                    label: "Log sletninger",
                    description: "Om slettede beskeder skal logges"
                },
                collapseDeleted: {
                    label: "Skjul slettede",
                    description: "Om slettede beskeder skal skjules/foldes sammen, ligesom blokerede beskeder"
                },
                logEdits: {
                    label: "Log redigeringer",
                    description: "Om redigerede beskeder skal logges"
                },
                inlineEdits: {
                    label: "Inline redigeringer",
                    description: "Om redigeringshistorik skal vises som en del af beskedens indhold"
                },
                ignoreBots: {
                    label: "Ignorer bots",
                    description: "Om beskeder fra bots skal ignoreres"
                },
                ignoreSelf: {
                    label: "Ignorer dig selv",
                    description: "Om dine egne beskeder skal ignoreres"
                },
                ignoreSelfEdits: {
                    label: "Ignorer egne redigeringer",
                    description: "Om redigeringer foretaget af dig selv skal ignoreres"
                },
                ignoreUsers: {
                    label: "Ignorer brugere",
                    description: "Komma-separeret liste over bruger-ID'er der skal ignoreres"
                },
                ignoreChannels: {
                    label: "Ignorer kanaler",
                    description: "Komma-separeret liste over kanal-ID'er der skal ignoreres"
                },
                ignoreGuilds: {
                    label: "Ignorer servere",
                    description: "Komma-separeret liste over server-ID'er der skal ignoreres"
                },
                showEditDiffs: {
                    label: "Vis ændringer (Diffs)",
                    description: "Vis visuelle forskelle mellem redigerede beskedversioner"
                },
                separatedDiffs: {
                    label: "Separerede ændringer",
                    description: "Adskil tilføjelser og fjernelser i ændringsvisningen for bedre læsbarhed"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Forbedrer MessageLogger-pluginnet med ekstra funktioner.",
            updateImageCacheDir: "Billed-cache-mappe opdateret.",
            updateLogsDir: "Log-mappe opdateret.",
            failedUpdate: "Kunne ikke opdatere mappe.",
            blacklist: "Sortliste",
            whitelist: "Hvidliste",
            failedToRemove: "Kunne ikke fjerne besked",
            successfullyImported: "Logfiler importeret",
            errorImportingLogs: "Fejl ved import af logs. Tjek konsollen for detaljer",
            importing: "Importerer...",
            importLogs: "Importer logs",
            exporting: "Eksporterer...",
            exportLogs: "Eksporter logs",
            alert: {
                clearLogs: {
                    title: "Ryd logs",
                    body: "Er du sikker på, at du vil rydde alle logs?",
                    confirmText: "Ryd",
                    cancel: "Annuller"
                },
                clearVisibleLogs: {
                    title: "Ryd synlige logs",
                    body: "Er du sikker på, at du vil rydde {{messages}} logs?",
                    confirmText: "Ryd",
                    cancel: "Annuller"
                },
                cleared: "Log-database og cache ryddet."
            },
            context: {
                title: "Message Logger",
                jumpToMessage: "Hop til besked",
                openUserProfile: "Åbn brugerprofil",
                copyContent: "Kopier indhold",
                copyUserId: "Kopier bruger-ID",
                copyMessageId: "Kopier besked-ID",
                copyChannelId: "Kopier kanal-ID",
                copyServerId: "Kopier server-ID",
                deleteLog: "Slet log",
                fromUsernameDm: "Fra {{username}}s DM'er",
                fromGroupDm: "Fra {{channelName}} gruppechat",
                fromServerChannel: "Fra {{channelName}} på {{serverName}}",
                moveTypeTo: "Flyt {{type}} til {{destination}}",
                removeTypeFrom: "Fjern {{type}} fra {{list}}",
                openLogsFor: "Åbn logs for {{name}}",
                openLogs: "Åbn logs",
                removeMessage: "Fjern besked (Permanent)",
                removeMessageHistory: "Fjern beskedhistorik (Permanent)",
                deleteMessageHide: "Slet besked (Skjul for loggere)",
                addServerToBlacklist: "Tilføj server til sortliste",
                addServerToWhitelist: "Tilføj server til hvidliste",
                removeServerFromBlacklist: "Fjern server fra sortliste",
                removeServerFromWhitelist: "Fjern server fra hvidliste",
                moveServerToBlacklist: "Flyt server til sortliste",
                moveServerToWhitelist: "Flyt server til hvidliste",
                addUserToBlacklist: "Tilføj bruger til sortliste",
                addUserToWhitelist: "Tilføj bruger til hvidliste",
                removeUserFromBlacklist: "Fjern bruger fra sortliste",
                removeUserFromWhitelist: "Fjern bruger fra hvidliste",
                moveUserToBlacklist: "Flyt bruger til sortliste",
                moveUserToWhitelist: "Flyt bruger til hvidliste",
                addChannelToBlacklist: "Tilføj kanal til sortliste",
                addChannelToWhitelist: "Tilføj kanal til hvidliste",
                removeChannelFromBlacklist: "Fjern kanal fra sortliste",
                removeChannelFromWhitelist: "Fjern kanal fra hvidliste",
                moveChannelToBlacklist: "Flyt kanal til sortliste",
                moveChannelToWhitelist: "Flyt kanal til hvidliste"
            },
            type: {
                server: "Server",
                user: "Bruger",
                channel: "Kanal"
            },
            button: {
                chooseFolder: "Vælg mappe",
                browse: "Gennemse",
                clearLogs: "Ryd alle logs",
                clearVisibleLogs: "Ryd synlige logs",
                sortOldest: "Sorter ældste først",
                sortNewest: "Sorter nyeste først",
                loadMore: "Indlæs flere",
                noResults: "Ingen resultater i {{tab}}",
                tryOtherTabs: "Prøv måske {{nextTab}} eller {{lastTab}}",
                importLogs: "Importer logs"
            },
            modal: {
                title: "Filtrer beskeder",
                deleted: "Slettet",
                edited: "Redigeret",
                ghostPing: "Ghost Pinged",
                empty: "Tomt her",
                importLogs: "ML Enhanced gemmer nu logs i indexeddb. Du skal importere dine gamle logs fra log-mappen. Import vil ikke overskrive eksisterende logs."
            },
            clear: {
                title: "Ryd logs",
                description: "Er du sikker på, at du vil rydde alle logs?",
                confirm: "Ryd",
                cancel: "Annuller"
            },
            option: {
                saveMessages: {
                    label: "Gem beskeder",
                    description: "Om slettede og redigerede beskeder skal gemmes."
                },
                saveImages: {
                    label: "Gem billeder",
                    description: "Gem slettede vedhæftninger."
                },
                sortNewest: {
                    label: "Sorter nyeste først",
                    description: "Sorter logs efter nyeste dato."
                },
                cacheMessagesFromServers: {
                    label: "Cache beskeder fra servere",
                    description: "Normalt logger message logger kun fra hvidlistede ID'er og DM'er. Aktivering af dette betyder, at den også logger fra alle servere. Bemærk at dette kan fylde cachen op."
                },
                ignoreBots: {
                    label: "Ignorer bots",
                    description: "Om beskeder fra bots skal ignoreres"
                },
                ignoreWebhooks: {
                    label: "Ignorer webhooks",
                    description: "Om beskeder fra webhooks skal ignoreres"
                },
                ignoreSelf: {
                    label: "Ignorer dig selv",
                    description: "Om dine egne beskeder skal ignoreres"
                },
                ignoreMutedGuilds: {
                    label: "Ignorer stumme servere",
                    description: "Beskeder i servere du har sat på lydløs vil ikke blive logget."
                },
                ignoreMutedCategories: {
                    label: "Ignorer stumme kategorier",
                    description: "Beskeder i kategorier du har sat på lydløs vil ikke blive logget."
                },
                ignoreMutedChannels: {
                    label: "Ignorer stumme kanaler",
                    description: "Beskeder i kanaler du har sat på lydløs vil ikke blive logget."
                },
                alwaysLogDirectMessages: {
                    label: "Log altid direkte beskeder",
                    description: "Log altid alle DM'er"
                },
                alwaysLogCurrentChannel: {
                    label: "Log altid nuværende kanal",
                    description: "Log altid den kanal du har valgt i øjeblikket."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Fjern log permanent som standard",
                    description: "Standardknappen til at fjerne logs vil slette dem permanent"
                },
                hideMessageFromMessageLoggers: {
                    label: "Skjul besked for andre loggere",
                    description: "Tilføjer en knap til at slette beskeder uden at de logges af andre loggere. Brug på eget ansvar."
                },
                showLogsButton: {
                    label: "Vis log-knap",
                    description: "Vis eller skjul log-knappen i værktøjskassen"
                },
                showWhereMessageIsFrom: {
                    label: "Vis hvor besked er fra",
                    description: "Vis kanal/forfatter og servernavn i loggen"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Antal beskeder i visning",
                    description: "Antal beskeder der vises ad gangen i loggen."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Erstatningstekst ved skjult sletning",
                    description: "Teksten der erstatter indholdet, når du bruger 'skjul for loggere'-funktionen."
                },
                messageLimit: {
                    label: "Beskedgrænse",
                    description: "Maksimalt antal beskeder der gemmes. 0 betyder ingen grænse."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Størrelsesgrænse for vedhæftninger (MB)",
                    description: "Maksimal størrelse på filer der gemmes."
                },
                attachmentFileExtensions: {
                    label: "Filtyper for vedhæftninger",
                    description: "Komma-separeret liste over filendelser der skal gemmes (efterlad tom for alle)."
                },
                cacheLimit: {
                    label: "Cache-grænse",
                    description: "Maksimalt antal beskeder i midlertidig cache."
                },
                timeBasedCleanupMinutes: {
                    label: "Interval for oprydning (min)",
                    description: "Hvor ofte der skal ryddes op i gamle beskeder."
                },
                preserveCurrentChannel: {
                    label: "Bevar nuværende kanal",
                    description: "Beskeder i den valgte kanal slettes ikke af den automatiske oprydning."
                },
                whitelistedIds: {
                    label: "Hvidlistede ID'er",
                    description: "ID'er på servere, kanaler eller brugere der altid logges."
                },
                blacklistedIds: {
                    label: "Sortlistede ID'er",
                    description: "ID'er på servere, kanaler eller brugere der aldrig logges."
                },
                imageCacheDir: {
                    label: "Mappe til billed-cache",
                    description: "Vælg mappe til gemte billeder"
                },
                logsDir: {
                    label: "Log-mappe",
                    description: "Vælg mappe til logfiler"
                },
                importLogs: {
                    label: "Importer logs",
                    description: "Importer logs fra fil"
                },
                exportLogs: {
                    label: "Eksporter logs",
                    description: "Eksporter logs fra IndexedDB"
                },
                openLogs: {
                    label: "Åbn logs",
                    description: "Åbn logviseren"
                },
                openImageCacheFolder: {
                    label: "Åbn billed-cache mappe",
                    description: "Åbner mappen med gemte billeder"
                },
                clearLogs: {
                    label: "Ryd logs",
                    description: "Slet alle gemte logs",
                    title: "Ryd logs",
                    body: "Er du sikker på, at du vil slette alle logs?",
                    confirmText: "Ryd",
                    cancel: "Annuller"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Få små beskeder (toasts), når valgte brugere sender en besked",
            dm: "deres DM'er",
            option: {
                users: {
                    label: "Brugere",
                    description: "Komma-separeret liste over bruger-ID'er der skal overvåges",
                    invalidId: "{{id}} er ikke et gyldigt bruger-ID"
                }
            },
            notification: {
                title: "{{username}} sendte en besked",
                body: "Klik for at hoppe til {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Giver dig mulighed for at gemme beskeder (tags) og bruge dem med en simpel kommando.",
            notExist: "Tagget **{{tagname}}** findes ikke længere! Genstart venligst Discord for at rette det :)",
            alreadyExist: "Et tag med navnet **{{tagname}}** findes allerede!",
            sentTag: "Tagget **{{tagname}}** er blevet sendt!",
            successCreate: "Tagget **{{tagname}}** er blevet oprettet!",
            allTags: "Alle dine tags:",
            noTags: "Ups! Der er ingen tags endnu, brug /tag create for at lave et!",
            noDeleteTag: "Tagget **{{tagname}}** findes ikke og kan derfor ikke slettes!",
            successDelete: "Tagget **{{name}}** er blevet slettet!",
            tagPreview: "Et tag med navnet **{{name}}** findes ikke!",
            option: {
                clyde: {
                    label: "Clyde-besked ved brug",
                    description: "Hvis aktiveret, vil Clyde sende dig en privat besked, når et tag bruges."
                },
                tagsList: {
                    label: "Tag-liste",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Administrer dine egne tags",
                    option: {
                        create: {
                            description: "Opret et nyt tag",
                            name: "Navnet på tagget",
                            message: "Beskeden der skal sendes"
                        },
                        list: {
                            description: "Vis alle dine tags"
                        },
                        delete: {
                            description: "Fjern et tag",
                            name: "Navnet på tagget der skal fjernes"
                        },
                        preview: {
                            description: "Forhåndsvis et tag uden at sende det offentligt",
                            name: "Navnet på tagget"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Tilføjer et ikon til mikrofontest (loopback) i brugerpanelet",
            button: "Mikrofontest (Loopback)"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Forskellige justeringer ved brug af midterklik, f.eks. ved indsætning og åbning af links.",
            option: {
                openScope: {
                    label: "Åbningsområde",
                    description: "Forhindr midterklik i at åbne disse indholdstyper.",
                    links: "Links",
                    media: "Medier",
                    linksAndMedia: "Links og medier",
                    none: "Ingen"
                },
                pasteScope: {
                    label: "Indsætningsområde",
                    description: "Forhindr midterklik i at indsætte tekst i disse situationer.",
                    always: "Forhindr altid indsætning ved midterklik",
                    focus: "Forhindr kun når tekstfeltet ikke er i fokus",
                },
                pasteThreshold: {
                    label: "Indsætningstærskel",
                    description: "Millisekunder før indsætning aktiveres igen efter et midterklik."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock og flere",
            command: {
                echo: {
                    description: "Sender en besked som Clyde (lokalt)"
                },
                lenny: {
                    description: "Sender et Lenny-ansigt ( ͡° ͜ʖ ͡°)"
                },
                mock: {
                    description: "gØr nAr aF fOlK"
                },
                wordcount: {
                    description: "Tæller antallet af ord i en besked",
                    response: "Beskeden indeholder {{count}} ord."
                },
                flipcoin: {
                    description: "Kaster en mønt (plat eller krone)",
                    heads: "Krone",
                    tails: "Plat",
                    response: "Mønten landede på {{result}}."
                },
                ask: {
                    description: "Stil et ja/nej-spørgsmål og få et svar",
                    yes: "Ja",
                    no: "Nej",
                    maybe: "Måske",
                    askAgain: "Spørg igen senere",
                    definitelyNot: "Absolut ikke",
                    itIsCertain: "Det er helt sikkert"
                },
                randomanimal: {
                    description: "Få et tilfældigt billede af et dyr",
                    animal: "Vælg dit dyr",
                    cat: "kat",
                    dog: "hund",
                    response: "Beklager, kunne ikke hente et billede lige nu"
                },
                randomnumber: {
                    description: "Genererer et tilfældigt tal mellem to værdier",
                    min: "Minimumsværdi",
                    max: "Maksimumsværdi",
                    response: "Tilfældigt tal mellem {{min}} og {{max}}: {{number}}"
                },
                choose: {
                    description: "Vælger tilfældigt mellem de angivne muligheder",
                    option: "Komma-separeret liste af valg",
                    response: "Jeg vælger: {{choice}}"
                },
                systeminfo: {
                    description: "Viser systeminformation",
                    platform: "Platform",
                    deviceType: "Enhedstype",
                    mobile: "Mobil",
                    desktop: "Computer",
                    browser: "Browser",
                    cpuCores: "CPU-kerner",
                    memory: "Hukommelse",
                    screen: "Skærm",
                    languages: "Sprog",
                    network: "Netværk",
                    online: "Online",
                    offline: "Offline",
                    failedToFetch: "Kunne ikke hente systeminfo",
                    unknown: "Ukendt"
                },
                getuptime: {
                    description: "Viser hvor længe klienten har kørt",
                    response: "**Klient Uptime**: {{uptime}} minutter"
                },
                gettime: {
                    description: "Viser det aktuelle klokkeslæt",
                    response: "Klokken er {{time}}"
                },
                transform: {
                    description: "Transformer din tekst med den valgte indstilling",
                    transformation: {
                        description: "Transformation der skal anvendes",
                        lowercase: "Små bogstaver",
                        uppercase: "STORE BOGSTAVER",
                        localeLowercase: "Lokale små bogstaver",
                        localeUppercase: "Lokale store bogstaver",
                        same: "Behold som den er"
                    },
                    repeat: "antal gange den skal gentages",
                    reverse: "om teksten skal vendes om",
                    normalize: {
                        description: "Tekst-normaliseringsform",
                        nfc: "NFC",
                        nfd: "NFD",
                        nfkc: "NFKC",
                        nfkd: "NFKD"
                    },
                    text: "Transformer denne tekst"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Tilføjer flere Kaomoji til Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Forbedrer hurtig-reaktionsknapperne i beskedens kontekstmenu.",
            option: {
                reactionCount: {
                    label: "Antal reaktioner",
                    description: "Antal reaktioner (0-42)"
                },
                frequentEmojis: {
                    label: "Ofte brugte emojis",
                    description: "Brug ofte brugte emojis i stedet for favoritter"
                },
                rows: {
                    label: "Rækker",
                    description: "Antal rækker af reaktioner der skal vises"
                },
                columns: {
                    label: "Kolonner",
                    description: "Antal kolonner af reaktioner der skal vises"
                },
                compactMode: {
                    label: "Kompakt tilstand",
                    description: "Skalerer knapperne ned til 75% for at få plads til flere."
                },
                scroll: {
                    label: "Scroll",
                    description: "Aktiver scrolling i listen over emojis"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Tilføjer tags for webhooks vemod, ejer, admin osv.",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Denne bruger er en webhook"
                },
                owner: {
                    name: "Ejer",
                    description: "Ejer af serveren"
                },
                admin: {
                    name: "Admin",
                    description: "Har administrator-rettigheder"
                },
                staff: {
                    name: "Personale",
                    description: "Kan administrere serveren, kanaler eller roller"
                },
                mod: {
                    name: "Mod",
                    description: "Kan administrere beskeder eller smide folk ud"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "Kan administrere stemmekanaler"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "Kan administrere beskeder"
                }
            },
            modal: {
                example: "Eksempel",
                tag: "Tag",
                customTextPlaceholder: "Tekst på tag (standard: {{displayName}})",
                messages: "Vis i beskeder",
                memberList: "Vis i medlemsliste og profiler"
            },
            option: {
                dontShowForBots: {
                    label: "Vis ikke for bots",
                    description: "Vis ikke ekstra tags for bots (undtagen webhooks)"
                },
                dontShowBotTag: {
                    label: "Skjul bot-tag",
                    description: "Vis kun ekstra tags for bots / Skjul [APP]-teksten"
                },
                showWebhookTagFully: {
                    label: "Vis webhook-tag fuldt ud",
                    description: "Vis Webhook-tag i fulgte kanaler (f.eks. meddelelser)"
                },
                tagSettings: {
                    label: "Tag-indstillinger",
                    description: "Indstil tags"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "En kommando til at oversætte til og fra morsekode.",
            command: {
                morse: {
                    description: "Oversæt til eller fra morse",
                    message: "Tekst der skal konverteres"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Lydstyrke",
                    description: "Lydstyrke for 🗿🗿🗿"
                },
                quality: {
                    label: "Kvalitet",
                    description: "Kvalitet af 🗿🗿🗿 lyden",
                    normal: "Normal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Udløs ved manglende fokus",
                    description: "Udløs 🗿 selv når vinduet ikke er aktivt"
                },
                ignoreBots: {
                    label: "Ignorer bots",
                    description: "Ignorer beskeder fra bots"
                },
                ignoreBlocked: {
                    label: "Ignorer blokerede",
                    description: "Ignorer beskeder fra blokerede brugere"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Musikstyring og sangtekster for flere tjenester",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Vis Spotify-styring",
                    description: "Vis knapper til at styre Spotify"
                },
                showSpotifyLyrics: {
                    label: "Vis Spotify-sangtekster",
                    description: "Vis sangtekster for Spotify"
                },
                useSpotifyUris: {
                    label: "Brug Spotify URI'er",
                    description: "Åbn Spotify URI'er i stedet for web-links (kræver Spotify installeret)"
                },
                previousButtonRestartsTrack: {
                    label: "Forrige-knap genstarter sang",
                    description: "Genstart nuværende sang ved tryk på 'forrige', hvis der er spillet >3 sekunder"
                },
                tidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Vis Tidal-styring",
                    description: "Vis knapper til at styre Tidal"
                },
                showTidalLyrics: {
                    label: "Vis Tidal-sangtekster",
                    description: "Vis sangtekster for Tidal"
                },
                websocketURL: {
                    label: "Websocket-URL",
                    description: "Standard er ws://localhost:24123"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "{{app}} er påkrævet for disse indstillinger"
                },
                showYoutubeMusicControls: {
                    label: "Vis YouTube Music-styring",
                    description: "Vis knapper til at styre YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube Music API URL",
                    description: "URL til YouTube Music API-serveren"
                },
                hoverControls: {
                    label: "Vis ved hover",
                    description: "Vis knapper når musen holdes over"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Vis node ved manglende tekst",
                    description: "Vis et node-ikon når der ikke findes sangtekster"
                },
                lyricsPosition: {
                    label: "Placering af tekst",
                    description: "Hvor sangtekst-panelet skal vises",
                    above: "Over afspilleren",
                    below: "Under afspilleren"
                },
                lyricsProvider: {
                    label: "Sangtekst-udbyder",
                    description: "Hvor sangtekster hentes fra",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "Spotify Lyrics API-URL",
                    description: "Spotify lyrics API-basis-URL."
                },
                translateTo: {
                    label: "Oversæt til",
                    description: "Oversæt sangtekster til dette sprog",
                    cleared: "Oversættelse ryddet"
                },
                lyricsConversion: {
                    label: "Tekst-konvertering",
                    description: "Oversæt eller romaniser sangtekster automatisk",
                    none: "Ingen",
                    translate: "Oversæt",
                    romanize: "Romaniser"
                },
                fallbackProvider: {
                    label: "Fallback-udbyder",
                    description: "Prøv andre kilder, hvis den primære fejler"
                },
                showFailedToasts: {
                    label: "Vis fejl-beskeder",
                    description: "Vis beskeder når sangtekster ikke kan indlæses"
                },
                purgeLyricsCache: {
                    label: "Ryd sangtekst-cache",
                    description: "Slet alle gemte sangtekster og oversættelser",
                    button: "Ryd cache",
                    cacheLyricsPurged: "Sangtekst-cache ryddet"
                }
            },
            context: {
                spotify: {
                    label: "Spotify Sangtekst-menu",
                    type: "Spotify {{type}}-menu",
                    copy: "Kopier {{type}}-navn",
                    link: "Kopier {{type}}-link",
                    open: "Åbn {{type}} i Spotify",
                    album: "Spotify Album-menu"
                },
                tidal: {
                    label: "Tidal Sangtekst-menu",
                    lyrics: "Tidal Sangtekster",
                    type: "Tidal {{name}}-menu",
                    copy: "Kopier {{name}}-navn",
                    open: "Åbn {{name}} i Tidal",
                    album: "Tidal Album-menu"
                },
                ytm: {
                    type: "YouTube Music {{name}}-menu",
                    copy: "Kopier {{name}}-navn",
                    open: "Åbn {{name}} i YouTube Music",
                    album: "YouTube Music Album-menu",
                    muted: "Lydløs"
                },
                lyrics: {
                    provider: "Sangtekst-udbyder",
                    saved: "gemt",
                    notFound: "Ingen synkroniserede tekster fundet"
                },
                copy: {
                    currentLyrics: "Kopier nuværende tekst"
                }
            },
            alert: {
                lyricCopied: "Linje kopieret til udklipsholder!",
                noLyrics: "Ingen sangtekster",
                noLyricsTo: "Ingen tekster at {{translated}}",
                translate: "oversætte",
                romanize: "romanisere",
                lyricsFetchFailed: "Hentning af sangtekst fejlede",
                failedToFetchLyrics: "Kunne ikke hente {{translated}}",
                translation: "oversættelse",
                romanization: "romanisering",
                failedToFetchTranslation: "Kunne ikke hente {{translated}} sangtekst"
            },
            modal: {
                install: {
                    title: "Hvordan installeres det",
                    install: "Installer {{link}} herfra, gå derefter til TidalLuna indstillinger → Plugin stores → Installer @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Ingen sang spiller",
                    artist: "Kunstner:",
                    album: "Album:",
                    noLyrics: "Ingen sangtekster tilgængelige :(",
                    progress: "Status",
                    totalDuration: "Total varighed"
                },
                type: {
                    song: "Sang",
                    artist: "Kunstner",
                    album: "Album"
                },
                album: {
                    open: "Åbn album",
                    viewCover: "Vis albumcover",
                    volume: "Lydstyrke",
                    image: "Albumbillede"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Oversat",
                romanized: "Romaniseret",
                none: "Ingen"
            },
            error: {
                failed: "Kunne ikke indlæse vinduet :(",
                checkConsole: "Tjek konsollen for fejl",
                invalidUrlCustomApi: "Ugyldigt URL-format for brugerdefineret API"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Viser fælles gruppechats i profiler",
            no: "Ingen fælles grupper",
            mutualGroup: "{{count}} fælles gruppe{{s}}",
            members: "Medlemmer",
            noGroup: "Ingen fælles gruppechats",
            header: "Fælles grupper"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Forhindrer forhåndsvisninger i opkald/PiP (skærmdeling, streams osv.) i at pause, selvom klienten mister fokus",
            about: "Dette plugin vil få Discord til at bruge flere ressourcer end normalt"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Sætter automatisk nye servere på lydløs og ændrer forskellige andre indstillinger, når du tilslutter dig",
            context: {
                apply: "Anvend NewGuildSettings"
            },
            option: {
                guild: {
                    label: "Sæt server på lydløs",
                    description: "Sæt automatisk serveren på lydløs"
                },
                messages: {
                    label: "Indstillinger for servernotifikationer",
                    description: "Indstillinger for servernotifikationer",
                    all: "Alle beskeder",
                    mentions: "Kun @mentions",
                    nothing: "Ingen",
                    default: "Serverstandard"
                },
                everyone: {
                    label: "Undtryk @everyone og @here",
                    description: "Undtryk @everyone og @here"
                },
                role: {
                    label: "Undtryk alle rolle-@mentions",
                    description: "Undtryk alle rolle-@mentions"
                },
                highlights: {
                    label: "Undtryk Highlights",
                    description: "Undtryk automatisk Highlights"
                },
                events: {
                    label: "Sæt nye begivenheder på lydløs",
                    description: "Sæt automatisk nye begivenheder på lydløs"
                },
                showAllChannels: {
                    label: "Vis alle kanaler",
                    description: "Vis automatisk alle kanaler"
                },
                mobilePush: {
                    label: "Sæt mobil-push-notifikationer på lydløs",
                    description: "Sæt automatisk mobil-push-notifikationer på lydløs"
                },
                voiceChannels: {
                    label: "Stemmekanaler",
                    description: "Skjul automatisk navne i stemmekanaler"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Værktøj der giver dig besked, når nye plugins tilføjes til Plexcord",
            modal: {
                title: "Nye plugins og indstillinger",
                description: "Nye plugins og indstillinger er blevet tilføjet siden dit sidste besøg. Gennemse venligst de nye tilføjelser nedenfor.",
                tooltip: "Luk for denne session",
                dontShowAgain: "Vis ikke dette igen",
                restartRequired: "Genstart påkrævet for at anvende ændringer",
                restart: "Genstart",
                continue: "Fortsæt"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Fører bottens tag tilbage til dens oprindelige form"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Skjuler alle blokerede/ignorerede beskeder fuldstændigt fra chatten",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Skjul også ignorerede brugere",
                    description: "Skjul også beskeder fra ignorerede brugere."
                },
                disableNotifications: {
                    label: "Deaktiver notifikationer",
                    description: "Skjul notifikationer om nye beskeder fra blokerede brugere."
                },
                allowAutoModMessages: {
                    label: "Tillad AutoMod-beskeder",
                    description: "Lad beskeder sendt af AutoMod omgå filtreringen."
                },
                hideBlockedUserReplies: {
                    label: "Skjul svar fra blokerede brugere",
                    description: "Skjul beskeder fra blokerede brugere i tråde, hvis du har deltaget i tråden."
                },
                defaultHideUsers: {
                    label: "Standard skjul brugere",
                    description: "Hvis aktiveret, vil beskeder fra blokerede brugere blive helt skjult, og beskeder fra ID'er på undtagelseslisten vil blive foldet sammen (standard Discord-adfærd). Hvis deaktiveret, vil blokerede beskeder blive foldet sammen, og undtagelser blive helt skjult."
                },
                overrideUsers: {
                    label: "Bruger-undtagelser",
                    description: "Komma-separeret liste over bruger-ID'er, der skal behandles modsat den valgte standardadfærd ovenfor."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Forhindrer dig i at skrive markdown-punkttegn (stinkende)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Deaktiverer Discords overflødige deep-linking-funktion, som forsøger at tvinge dig til at bruge deres Desktop App"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Fjerner kravet om at 'skrive servernavn', når du sletter en server",
            option: {
                confirmModal: {
                    label: "Bekræftelsesvindue",
                    description: "Skal der stadig vises et 'Er du sikker på, du vil slette'-vindue?"
                }
            },
            modal: {
                title: "Slet server?",
                body: "Det er permanent, hvis det ikke var indlysende.",
                confirm: "Slet",
                cancel: "Annuller"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Deaktiverer 'HOLD UP'-banneret i konsollen. Som en bivirkning forhindrer det også Discord i at skjule din token, hvilket forebygger tilfældige logud."
        },
        noF1: {
            name: "NoF1",
            description: "Deaktiverer F1-hjælp genvejen."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Indsætning af et link mens tekst er markeret, vil ikke indsætte det som en skjult (masked) URL"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Forhindrer kameraet i at blive spejlvendt på din skærm"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Fjerner den 300ms lange animation, når vinduer åbnes eller lukkes"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Fjerner Discords billed-mosaik",
            option: {
                inlineVideo: {
                    label: "Inline video",
                    description: "Afspil videoer uden karrusel-visning"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Fjerner ALLE Discords Nitro-reklamer ved at snyde klienten til at tro, at du har Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Omgår Discords onboarding-proces for hurtigere adgang til servere."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Springer den langsomme og irriterende onboarding-forsinkelse over"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Fjerner tælleren (pings) for indgående venneanmodninger, beskedanmodninger og Nitro-tilbud.",
            option: {
                hideFriendRequestsCount: {
                    label: "Skjul antal venneanmodninger",
                    description: "Skjul antallet af indgående venneanmodninger"
                },
                hideMessageRequestsCount: {
                    label: "Skjul antal beskedanmodninger",
                    description: "Skjul antallet af beskedanmodninger"
                },
                hidePremiumOffersCount: {
                    label: "Skjul antal Nitro-tilbud",
                    description: "Skjul antallet af Nitro-tilbud"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Fjerner fuldstændigt Nitro-profiltemaer fra alle undtagen dig selv."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Omgår kravet om push-to-talk i kanaler, der ellers gennemtvinger det."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Deaktiverer svar-pings som standard",
            option: {
                userList: {
                    label: "Brugerliste",
                    description: "Liste over brugere der må pinges (adskilt af komma eller mellemrum)"
                },
                roleList: {
                    label: "Rolleliste",
                    description: "Liste over roller der må pinges (adskilt af komma eller mellemrum)"
                },
                shouldPingListed: {
                    label: "Adfærd for liste",
                    description: "Vælg adfærd",
                    dontPing: "Ping ikke de listede brugere / roller",
                    onlyPing: "Ping kun de listede brugere / roller"
                },
                inverseShiftReply: {
                    label: "Inverter Shift-svar",
                    description: "Inverter Discords Shift-svar adfærd (aktiver for at lade Shift+svar nævne brugeren)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Fjerner 'canary/ptb' fra beskedlinks"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Vi er alle lige!! Fjerner role-headers (overskrifter) i medlemslisten."
        },
        noRPC: {
            name: "NoRPC",
            description: "Deaktiverer Discord Rich Presence"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Vis ikke server-emojis i autofuldførelses-menuen.",
            option: {
                shownEmojis: {
                    label: "Viste emojis",
                    description: "Vælg hvilke emojis der skal vises i autofuldførelsen",
                    onlyUnicode: "Kun standard unicode-emojis",
                    currentServer: "Unicode-emojis og emojis fra den nuværende server",
                    all: "Unicode-emojis og alle server-emojis (Discord standard)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Deaktiverer tælleren for ulæste beskeder på proceslinjen og i systembakken."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Gør desktop-notifikationer mere informative"
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Indstil brugerdefineret lydstyrke for Discord-notifikationer",
            option: {
                notificationVolume: {
                    label: "Lydstyrke for notifikationer",
                    description: "Lydstyrke for notifikationer"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Deaktiverer skrive-animationen i chatten"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Gør det muligt at hoppe til beskeder fra blokerede eller ignorerede brugere samt mulige spammere uden at ophæve blokeringen."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Hvis der sendes flere ulæste beskeder fra en bruger i DM, vil du kun modtage én lyd-notifikation.",
            option: {
                channelToAffect: {
                    label: "Berørte kanaler",
                    description: "Vælg hvilken type DM pluginnet skal påvirke",
                    both: "Begge",
                    user: "Bruger-DM'er",
                    group: "Gruppechats"
                },
                allowMentions: {
                    label: "Tillad Mentions",
                    description: "Modtag lyd-notifikationer for @mentions"
                },
                allowEveryone: {
                    label: "Tillad Everyone",
                    description: "Modtag lyd-notifikationer for @everyone og @here i gruppechats"
                },
                ignoreUsers: {
                    label: "Ignorer brugere",
                    description: "Bruger-ID'er (adskilt af komma + mellemrum), hvis notifikationer ALDRIG skal begrænses"
                },
                alwaysPlaySound: {
                    label: "Afspil altid lyd",
                    description: "Afspil notifikationslyden, selv når den er deaktiveret"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Åbn links i deres respektive apps i stedet for i din browser",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Åbn Spotify-links i Spotify-appen"
                },
                steam: {
                    label: "Steam",
                    description: "Åbn Steam-links i Steam-appen"
                },
                epic: {
                    label: "Epic Games",
                    description: "Åbn Epic Games-links i Epic Games Launcher"
                },
                tidal: {
                    label: "Tidal",
                    description: "Åbn Tidal-links i Tidal-appen"
                },
                itunes: {
                    label: "iTunes",
                    description: "Åbn Apple Music-links i iTunes-appen"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Åbn VRChat-links i VRCX-appen"
                }
            },
            notification: {
                open: "Åbnede link i den oprindelige app"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Giver dig mulighed for at overskrive standard layout/sortering i fora. Du kan stadig ændre det manuelt pr. kanal",
            option: {
                defaultLayout: {
                    label: "Standard Tags",
                    description: "Hvilket layout der skal bruges som standard",
                    list: "Liste",
                    gallery: "Galleri"
                },
                defaultSortOrder: {
                    label: "Standard sorteringsrækkefølge",
                    description: "Hvilken sortering der skal bruges som standard",
                    recentlyActive: "Senest aktive",
                    datePosted: "Dato for opslag"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Giver dig mulighed for at bruge Party Mode, fordi festen aldrig slutter ✨",
            option: {
                superIntensePartyMode: {
                    label: "Super Intense Party Mode",
                    description: "Fest-intensitet",
                    normal: "Normal",
                    better: "Bedre",
                    projectX: "Project X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Bringer muligheden for at pause invitationer på ubestemt tid tilbage, som Discord ellers fjernede.",
            pauseIndefinitely: "Pause på ubestemt tid"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Deaktiverer klient-side restriktioner for styring af kanal-tilladelser.",
            option: {
                lockout: {
                    label: "Lockout",
                    description: "Omgå beskyttelse mod udelukkelse fra tilladelser ('Er du sikker på, at du vil gøre dette?')"
                },
                onboarding: {
                    label: "Onboarding",
                    description: "Omgå onboarding-krav ('Ændring af dette vil gøre din server inkompatibel [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Se hvilke tilladelser en bruger eller kanal har, samt rollerne på en server",
            view: "Se tilladelser",
            option: {
                permissionsSortOrder: {
                    label: "Sortering af tilladelser",
                    description: "Metoden brugt til at definere, hvilken rolle der giver en bruger en bestemt tilladelse",
                    highest: "Højeste rolle",
                    lowest: "Laveste rolle"
                }
            },
            icon: {
                denied: "Nægtet",
                allowed: "Tilladt",
                notOverwritten: "Ikke overskrevet"
            },
            context: {
                permissions: "Tilladelser"
            },
            modal: {
                title: "Tilladelser",
                noPermissions: "Ingen tilladelser at vise!",
                owner: "ejer",
                grantedBy: "Givet af",
                serverOwner: "Server-ejer",
                ownerRole: "Ejer",
                sortingBy: "Sorterer efter {{method}}",
                highest: "Højeste rolle",
                lowest: "Laveste rolle",
                details: "Rolledetaljer"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Tilføjer en /petpet kommando til at lave headpet-GIF'er fra et hvilket som helst billede",
            command: {
                petpet: {
                    description: "Opret en petpet-GIF. Du kan kun angive én af billedmulighederne",
                    delay: "Forsinkelsen mellem hver frame. Standard er 20.",
                    resolution: "Opløsning for GIF'en. Standard er 120. Hvis du skriver et absurd højt tal og Discord fryser, er det din egen skyld.",
                    image: "Vedhæftet billede der skal bruges",
                    url: "URL som billede skal hentes fra",
                    user: "Bruger hvis avatar skal bruges som billede",
                    noServerPfp: "Brug standard-avatar i stedet for den server-specifikke, når du bruger 'user'-muligheden",
                    error: {
                        noImage: "Intet billede angivet!",
                        delayTooLow: "Forsinkelsen skal være mindst 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Uploadet fil er ikke et billede",
                fetchUserFailed: "Kunne ikke hente bruger. Tjek konsollen for info.",
                fetchImageFailed: "Der opstod en fejl under indlæsning af {{url}}. Tjek konsollen for info."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Tilføjer Picture-in-Picture (Billede-i-Billede) til videoer (ved siden af download-knappen)",
            tooltip: "Slå Picture-in-Picture til/fra",
            option: {
                loop: {
                    label: "Loop",
                    description: "Om PiP-videoen skal køre i ring"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Giver dig mulighed for at fastgøre private chats til toppen af din DM-liste. For at fastgøre eller ændre rækkefølge, skal du højreklikke på DM'erne",
            context: {
                category: {
                    label: "Pin DMs Kategori-menu",
                    edit: "Rediger kategori",
                    up: "Flyt op",
                    down: "Flyt ned",
                    delete: "Slet kategori",
                    unnamed: "ups"
                },
                pin: {
                    label: "Fastgør DM",
                    addCategory: "Tilføj kategori"
                },
                unPin: {
                    label: "Frigør DM",
                    move: "Flyt til kategori"
                }
            },
            option: {
                pinOrder: {
                    label: "Rækkefølge for fastgørelse",
                    description: "Hvilken rækkefølge skal fastgjorte DM'er vises i?",
                    lastMessage: "Seneste besked",
                    custom: "Brugerdefineret (højreklik på kanaler for at ændre)"
                },
                canCollapseDmSection: {
                    label: "Foldbar sektion",
                    description: "Tillad at sektionen med ikke-kategoriserede fastgjorte DM'er kan foldes sammen"
                },
                dmSectionCollapsed: {
                    label: "DM-sektion foldet sammen",
                    description: "Fold DM-sektionen sammen"
                },
                userBasedCategoryList: {
                    label: "Brugerbaseret kategoriliste",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Fastgør kategori",
                    edit: "Rediger kategori",
                    new: "Ny kategori",
                    name: "Navn",
                    color: "Farve",
                    save: "Gem",
                    create: "Opret"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Notifikationer der kan tilpasses, med forbedret formatering af mentions",
            option: {
                friends: {
                    label: "Venner",
                    description: "Giv besked når venner sender beskeder på servere"
                },
                mentions: {
                    label: "Mentions",
                    description: "Giv besked når nogen @nævner dig direkte"
                },
                dms: {
                    label: "DM'er",
                    description: "Giv besked ved direkte beskeder (DM'er)"
                },
                showInActive: {
                    label: "Vis i aktiv kanal",
                    description: "Vis notifikationer selv for den kanal, du kigger i lige nu"
                },
                ignoreMuted: {
                    label: "Ignorer lydløse",
                    description: "Spring notifikationer over fra servere, kanaler eller brugere på lydløs"
                }
            },
            unknown: "Ukendt",
            dm: "DM",
            groupDM: "Gruppechat",
            title: "{{username}} i {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Tilføjer et tegnestift-ikon til fastgjorte beskeder"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Vis ikke de små server-ikoner inde i mapper"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Tilføjer indikatorer for platform (Computer, Mobil, Web...) til brugere",
            embeddedTooltip: "Konsol",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Liste",
                    description: "Vis indikatorer i medlemslisten"
                },
                badges: {
                    label: "Badges",
                    description: "Vis indikatorer som badges i brugerprofiler"
                },
                messages: {
                    label: "Beskeder",
                    description: "Vis indikatorer inde i beskeder"
                },
                colorMobileIndicator: {
                    label: "Farvet mobil-indikator",
                    description: "Om mobil-indikatoren skal matche farven på brugerens status."
                },
                showBots: {
                    label: "Vis for bots",
                    description: "Om der skal vises platform-indikatorer på bots"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Snyd med hvilken platform eller enhed du er på",
            about: "Vi kan ikke garantere, at dette plugin ikke vil resultere i en advarsel eller udelukkelse.",
            platform: {
                desktop: "Discord Klient",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord Embedded",
                playstation: "Discord Embedded",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Platform",
                    description: "Hvilken platform du skal fremstå som",
                    desktop: "Computer",
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
            description: "Tilføjer en knap til AppBar, som indeholder hurtige Plexcord-handlinger",
            tooltip: "Plexcord Værktøjskasse",
            context: {
                openLog: "Åbn notifikationslog",
                enableQuickCSS: "Aktiver QuickCSS",
                openQuickCSS: "Rediger QuickCSS",
                openSettings: "Åbn indstillinger",
                manageThemes: "Administrer temaer"
            },
            option: {
                showPluginMenu: {
                    label: "Vis plugin-menu",
                    description: "Vis plugin-menuen i Plexcord Værktøjskassen"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Justerer dine beskeder for at få dem til at se pænere ud og have bedre grammatik. Se indstillinger",
            option: {
                quickDisable: {
                    label: "Hurtig deaktivering",
                    description: "Slår beskedændringer fra uden at kræve genstart af klienten."
                },
                blockedWords: {
                    label: "Blokerede ord",
                    description: "Ord der ikke skal have stort begyndelsesbogstav (adskilt af komma)."
                },
                fixApostrophes: {
                    label: "Ret apostroffer",
                    description: "Sørg for at sammentrækninger indeholder apostroffer."
                },
                expandContractions: {
                    label: "Udvid sammentrækninger",
                    description: "Udvid sammentrækninger (f.eks. 'don't' til 'do not')"
                },
                fixCapitalization: {
                    label: "Ret store bogstaver",
                    description: "Start sætninger med stort bogstav."
                },
                fixPunctuation: {
                    label: "Ret tegnsætning",
                    description: "Ret mellemrum omkring tegnsætning."
                },
                fixPunctuationFrequency: {
                    label: "Frekvens for punktum",
                    description: "Hvor ofte der skal tilføjes punktum (dette irriterer nogle mennesker meget)."
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Lader dig se en forhåndsvisning af din besked, før du sender den.",
            tooltip: "Forhåndsvis besked"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Giver dig mulighed for at gemme og indlæse forskellige profil-presets via Profil-sektionen i Indstillinger.",
            toast: {
                importFailed: "Kunne ikke importere profil-sæt. Filen er muligvis ugyldig.",
            },
            option: {
                avatarSize: {
                    label: "Avatar-størrelse",
                    description: "Avatar-størrelse i preset-listen"
                }
            },
            modal: {
                override: "Overskriv",
                merge: "Flet",
                cancel: "Annuller",
                timestamp: "{{formattedDate}} kl. {{formattedTime}}",
                rename: "Omdøb",
                update: "Opdater",
                moveUp: "Flyt op",
                moveDown: "Flyt ned",
                moveTo: "Flyt til side 1",
                delete: "Slet",
                importProfiles: "Importer profiler",
                importText: "Du har {{existingCount}} eksisterende profiler. Vil du overskrive dem eller flette dem med de importerede?",
                heading: "Gemte profiler",
                searchProfiles: "Søg i profiler...",
                profileName: "Profilnavn",
                saving: "Gemmer...",
                save: "Gem profil",
                cancelSearch: "Annuller søgning",
                search: "Søg",
                random: "Tilfældig",
                import: "Importer",
                exportAll: "Eksporter alle"
            }
        },
        questify: {
            name: "Questify",
            description: "Forbedr din Quest-oplevelse med en række funktioner, eller deaktiver dem helt, hvis de ikke er noget for dig.",
            quests: "Quests",
            context: {
                quest: {
                    label: "Quest-knap menu",
                    ignore: "Marker alle som ignoreret",
                    reset: "Nulstil ignoreret-liste",
                    fetch: "Hent Quests",
                    markAsIgnored: "Marker som ignoreret",
                    unmarkAsIgnored: "Fjern markering som ignoreret",
                    stopAuto: "Stop auto-fuldførelse",
                    copyQuestID: "Kopier Quest-ID",
                    startAuto: "Start auto-fuldførelse"
                }
            },
            settings: {
                questButton: {
                    title: "Quest-knap",
                    description: "Vis en Quest-knap i serverlisten med en valgfri indikator for uafhentede Quests.",
                    leftClick: "Venstreklik-handling",
                    middleClick: "Midterklik-handling",
                    rightClick: "Højreklik-handling",
                    visibility: "Knappens synlighed",
                    unclaimedIndicator: "Uafhentet-indikator",
                    badgeColor: "Badge-farve",
                    rewardDisplay: "Visning af belønning",
                    includedRewardTypes: "Inkluderede belønningstyper",
                    includedRewardTypesDesc: "Tæl kun Quests med disse belønningstyper som uafhentede ved beregning af synlighed, badge-antal og lyd.",
                    selectRewardTypes: "Vælg hvilke belønningstyper der skal tælles med...",
                    noRewardType: "Der er ingen understøttet Quest-funktion med det navn.",
                    default: "Standard",
                    disable: "Deaktiver"
                },
                questFeatures: {
                    title: "Quest-funktioner",
                    description: "Rediger specifikke Quest-funktioner.",
                    popupWarning: "{{disablePopup}}-indstillingen vil blive ignoreret for gennemførte Quests og sporing af fremskridt.",
                    videoQuestInfo: "{{completeVideo}}-indstillingen vil vente på varigheden af Video-Questen og markere den som gennemført automatisk.",
                    gameQuestInfo: "Ligeledes vil {{completeGame}}-indstillingen vente på varigheden af Spil-Questen og markere den som gennemført automatisk. Denne funktion understøttes kun på den officielle desktop-klient.",
                    manualStartWarning: "Du skal stadig starte Quests manuelt. Det første klik starter dem i baggrunden. For Video-Quests vil efterfølgende klik åbne videoen som normalt. For at afbryde, kan du bruge kontekstmenuen og vælge {{stopAuto}}.",
                    tosWarning: "Brug af disse funktioner er imod Discords Servicevilkår (ToS). Brug på eget ansvar.",
                    selectFeatures: "Vælg hvilke Quest-funktioner der skal ændres.",
                    disablePopup: "Deaktiver Quest-popup over kontopanelet",
                    completeVideo: "Fuldfør Video-Quests i baggrunden",
                    completeGame: "Fuldfør Spil-Quests i baggrunden",
                    stopAuto: "Stop auto-fuldførelse"
                },
                restyleQuests: {
                    title: "Quest-stil",
                    description: "Fremhæv Quests med valgfrie temafarver for bedre synlighed.",
                    precedenceNote: "Stilen for afhentede og udløbne Quests vil have forrang, selvom en Quest er ignoreret.",
                    gradientStyle: "Gradient-stil",
                    assetPreload: "Præ-indlæsning af filer",
                    unclaimed: "Uafhentet",
                    claimed: "Afhentet",
                    ignored: "Ignoreret",
                    expired: "Udløbet",
                    intenseGradient: "Intens gradient",
                    defaultGradient: "Standard gradient",
                    blackGradient: "Diskret sort gradient",
                    noGradient: "Ingen gradient",
                    loadAllAssets: "Indlæs alle filer ved indlæsning af siden",
                    loadDuringScroll: "Indlæs filer mens der scrolles"
                },
                reorderQuests: {
                    title: "Omorganiser Quests",
                    description: "Sorter Quests efter deres status. Anvendes når sorteringen 'Questify' er valgt på Quest-siden.",
                    formatNote: "Komma-separeret liste skal indeholde alle disse: {{items}}.",
                    placeholder: "Du skal inkludere alle: UNCLAIMED, CLAIMED, IGNORED, EXPIRED",
                    invalidFormat: "Ugyldigt format.",
                    unclaimedSubsort: "Sub-sortering for uafhentede",
                    claimedSubsort: "Sub-sortering for afhentede",
                    ignoredSubsort: "Sub-sortering for ignorerede",
                    expiredSubsort: "Sub-sortering for udløbne",
                    addedNewest: "Tilføjet (Nyeste)",
                    addedOldest: "Tilføjet (Ældste)",
                    expiredRecent: "Udløbet (Senest)",
                    expiredLeast: "Udløbet (Længst siden)",
                    expiringSoon: "Udløber (Snarest)",
                    expiringLate: "Udløber (Senest)",
                    claimedRecent: "Afhentet (Senest)",
                    claimedLeast: "Afhentet (Længst siden)",
                    ignoredQuestProfile: "Ignoreret Quest-profil",
                    sharedProfile: "Delt: Alle konti på denne klient deler ignoreringer.",
                    privateProfile: "Privat: Alle konti har separate ignoreringer.",
                    rememberSort: "Husk sorteringsvalg",
                    rememberFilter: "Husk filtervalg",
                    yes: "Ja",
                    no: "Nej",
                    rememberNote: "Dette husker Discords indbyggede valg. Hvis deaktiveret, nulstilles de hver gang siden åbnes."
                },
                fetchingQuests: {
                    title: "Hentning af Quests",
                    description: "Konfigurer hvor ofte der skal tjekkes for Quests hos Discord og opsæt alarmer.",
                    defaultBehavior: "Som standard henter Discord kun Quests ved opstart. Uden et interval her, vil pluginnet ikke opdage nye Quests i løbet af dagen.",
                    requirement: "Dette kræver at Quest-knappen er aktiveret med indikatorer. Ellers er der ingen grund til at tjekke periodisk.",
                    blockWarning: "Hvis {{fetchingQuests}} er blokeret i {{questFeatures}}, vil dette ikke virke.",
                    fetchInterval: "Interval for tjek",
                    alertSound: "Alarmlyd",
                    intervalPlaceholder: "Vælg eller skriv et interval mellem 30 minutter og 12 timer.",
                    intervalFeedback: "Intervallet skal være mellem 30 minutter og 12 timer.",
                    soundPlaceholder: "Vælg en lyd eller angiv en URL.",
                    soundFeedback: "Lyd ikke fundet, eller URL er ikke fra et understøttet domæne.",
                    disabled: "Deaktiveret",
                    minutes: "Minutter",
                    minute: "Minut",
                    hours: "Timer",
                    hour: "Time",
                    thirtyMinutes: "30 minutter",
                    oneHour: "1 time",
                    threeHours: "3 timer",
                    sixHours: "6 timer",
                    twelveHours: "12 timer",
                    customSound: "EGEN LYD"
                },
                disableOptions: {
                    everything: "Deaktiver alt",
                    discovery: "Deaktiver Discovery-fane",
                    dms: "Deaktiver Quests-fane i DM'er",
                    fetching: "Deaktiver hentning af Quests",
                    popup: "Deaktiver popup over kontopanel",
                    sponsored: "Deaktiver reklame-banner på Quest-siden",
                    badge: "Deaktiver badge på brugerprofiler",
                    inventory: "Deaktiver notifikation om flytning af inventar",
                    friendsList: "Fremme af spil i vennelisten",
                    membersList: "Ikoner for aktivt spil i medlemslisten",
                    gameQuests: "Fuldfør Spil-Quests i baggrunden",
                    videoQuests: "Fuldfør Video-Quests i baggrunden",
                    achievementQuests: "Fuldfør opgave-Quests i baggrunden",
                    mobileDesktop: "Gør mobil-Quests computer-kompatible",
                    notifyOnComplete: "Giv besked ved fuldførelse"
                },
                options: {
                    always: "Altid",
                    unclaimed: "Uafhentet",
                    never: "Aldrig",
                    pill: "Pille-indikator",
                    badge: "Badge",
                    both: "Begge",
                    none: "Ingen",
                    openQuests: "Åbn Quests",
                    contextMenu: "Kontekstmenu",
                    pluginSettings: "Plugin-indstillinger",
                    nothing: "Ingen handling",
                    orbs: "Orbs",
                    nitroCodes: "Nitro-koder",
                    rewardCodes: "Belønningskoder",
                    inGameItems: "Genstande i spil",
                    profileCollectibles: "Profil-samleobjekter"
                }
            },
            option: {
                disableQuests: {
                    label: "Deaktiver Quests",
                    description: "Vælg hvilke Quest-funktioner der skal deaktiveres."
                },
                disableQuestsEverything: {
                    label: "Deaktiver alt",
                    description: "Deaktiver alle Quest-funktioner."
                },
                disableQuestsFetchingQuests: {
                    label: "Deaktiver hentning",
                    description: "Stop med at hente Quests fra Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Deaktiver fane i DM'er",
                    description: "Fjern Quest-fanen fra siden med direkte beskeder."
                },
                disableQuestsDiscoveryTab: {
                    label: "Deaktiver fane i Discovery",
                    description: "Fjern Quest-fanen fra Discovery-siden."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Deaktiver reklame-banner",
                    description: "Fjern reklame-banneret fra Quest-siden."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Deaktiver popup",
                    description: "Fjern Quest-popup'en over dit kontopanel."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Deaktiver badge på profiler",
                    description: "Fjern Quest-badget fra brugerprofiler."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Deaktiver flytnings-notifikation",
                    description: "Fjern notifikationen om at gave-inventaret er flyttet."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Deaktiver venner-promotion",
                    description: "Stop promovering af Quests baseret på hvad venner spiller."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Deaktiver medlemsliste-ikoner",
                    description: "Fjern ikoner for aktive spil i medlemslisten."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Mobil-til-Computer kompatibilitet",
                    description: "Gør Quests, der kun er til mobil, tilgængelige på computer."
                },
                completeVideoQuestsInBackground: {
                    label: "Fuldfør Video-Quests i baggrunden",
                    description: "Fuldfør Video-Quests automatisk når tiden er gået."
                },
                completeGameQuestsInBackground: {
                    label: "Fuldfør Spil-Quests i baggrunden",
                    description: "Fuldfør Spil-Quests automatisk når tiden er gået."
                },
                completeAchievementQuestsInBackground: {
                    label: "Fuldfør Achievement-Quests i baggrunden",
                    description: "Fuldfør opgaver i aktiviteter automatisk i baggrunden."
                },
                notifyOnQuestComplete: {
                    label: "Besked ved fuldførelse",
                    description: "Vis en notifikation når en Quest fuldføres automatisk."
                },
                questButton: {
                    label: "Quest-knap",
                    description: "Vis en Quest-knap i serverlisten."
                },
                questButtonDisplay: {
                    label: "Visning af Quest-knap",
                    description: "Vælg visningstype for knappen i serverlisten."
                },
                questRewardIncludeRewardCode: {
                    label: "Inkluder belønningskoder",
                    description: "Tæl Quests med belønningskoder med i oversigten."
                },
                questRewardIncludeNitroCode: {
                    label: "Inkluder Nitro-koder",
                    description: "Tæl Quests med Nitro-koder med i oversigten."
                },
                questRewardIncludeInGame: {
                    label: "Inkluder belønninger i spil",
                    description: "Tæl Quests med ting til spil med i oversigten."
                },
                questRewardIncludeCollectibles: {
                    label: "Inkluder samleobjekter",
                    description: "Tæl Quests med profil-samleobjekter med i oversigten."
                },
                questRewardIncludeOrbs: {
                    label: "Inkluder Orbs",
                    description: "Tæl Quests med Orbs med i oversigten."
                },
                questButtonUnclaimed: {
                    label: "Uafhentet-indikator på knap",
                    description: "Vælg stil for indikatoren på Quest-knappen."
                },
                questButtonBadgeColor: {
                    label: "Farve på knap-badge",
                    description: "Farven på badget på Quest-knappen i serverlisten."
                },
                questButtonLeftClickAction: {
                    label: "Venstreklik-handling",
                    description: "Hvad der sker ved venstreklik på knappen."
                },
                questButtonMiddleClickAction: {
                    label: "Midterklik-handling",
                    description: "Hvad der sker ved midterklik på knappen."
                },
                questButtonRightClickAction: {
                    label: "Højreklik-handling",
                    description: "Hvad der sker ved højreklik på knappen."
                },
                fetchingQuests: {
                    label: "Hentning af Quests",
                    description: "Hent Quests fra Discord."
                },
                fetchingQuestsInterval: {
                    label: "Interval for hentning",
                    description: "Interval i sekunder for tjek af nye Quests."
                },
                fetchingQuestsAlert: {
                    label: "Alarmlyd",
                    description: "Lyden der afspilles når nye Quests opdages."
                },
                fetchingQuestsAlertVolume: {
                    label: "Lydstyrke for alarm",
                    description: "Lydstyrken for alarmen ved nye Quests."
                },
                restyleQuests: {
                    label: "Quest-stil",
                    description: "Tilpas udseendet af Quest-felter på siden."
                },
                restyleQuestsUnclaimed: {
                    label: "Farve for uafhentede",
                    description: "Farven for uafhentede Quests."
                },
                restyleQuestsClaimed: {
                    label: "Farve for afhentede",
                    description: "Farven for afhentede Quests."
                },
                restyleQuestsIgnored: {
                    label: "Farve for ignorerede",
                    description: "Farven for ignorerede Quests."
                },
                restyleQuestsExpired: {
                    label: "Farve for udløbne",
                    description: "Farven for udløbne Quests."
                },
                restyleQuestsGradient: {
                    label: "Gradient-stil",
                    description: "Stilen for gradienten i Quest-felterne."
                },
                restyleQuestsPreload: {
                    label: "Præ-indlæsning",
                    description: "Forsøg at indlæse billeder til Quests på forhånd."
                },
                reorderQuests: {
                    label: "Omorganiser Quests",
                    description: "Sorter efter status. Efterlad tom for standard."
                },
                unclaimedSubsort: {
                    label: "Uafhentede sub-sortering",
                    description: "Metode til sub-sortering af uafhentede."
                },
                claimedSubsort: {
                    label: "Afhentede sub-sortering",
                    description: "Metode til sub-sortering af afhentede."
                },
                ignoredSubsort: {
                    label: "Ignorerede sub-sortering",
                    description: "Metode til sub-sortering af ignorerede."
                },
                expiredSubsort: {
                    label: "Udløbne sub-sortering",
                    description: "Metode til sub-sortering af udløbne."
                },
                unclaimedUnignoredQuests: {
                    label: "Uafhentede/ikke-ignorerede tæller",
                    description: "Holder styr på antallet af uafhentede og ikke-ignorerede Quests."
                },
                onQuestsPage: {
                    label: "På Quest-siden",
                    description: "Om brugeren befinder sig på Quest-siden."
                },
                triggerQuestsRerender: {
                    label: "Gennemtving gen-indlæsning",
                    description: "Gennemtving en opdatering af Quest-visningen."
                },
                ignoredQuestProfile: {
                    label: "Ignoreret Quest-profil",
                    description: "Profilen der bruges til ignorerede Quests."
                },
                rememberQuestPageSort: {
                    label: "Husk sortering",
                    description: "Husk den sidst brugte sortering."
                },
                rememberQuestPageFilters: {
                    label: "Husk filtre",
                    description: "Husk de sidst brugte filtre."
                },
                lastQuestPageSort: {
                    label: "Sidst brugte sortering",
                    description: "Husker den seneste sortering."
                },
                lastQuestPageFilters: {
                    label: "Sidst brugte filtre",
                    description: "Husker de seneste filtre."
                },
                ignoredQuestIDs: {
                    label: "Ignorerede Quest-ID'er",
                    description: "En liste over ID'er der er ignoreret."
                },
                resumeQuestIDs: {
                    label: "Genoptag Quest-ID'er",
                    description: "En liste over ID'er der er ved at blive auto-fuldført."
                }
            },
            button: {
                questInProgressWithTime: "Fuldfører ({{remainTime}})",
                completing: "Fuldfører",
                resume: "Genoptag (~{{remainTime}})",
                complete: "Fuldfør {{remainTime}}",
                completeImmediate: "Fuldfør (Straks)",
                completed: "Gennemført"
            },
            reward: {
                orbs: "{{completingText}} for {{orbQuantity}} Orbs.",
                article: "{{completingText}} for {{itemName}}.",
                unrecognized: "{{completingText}} for en ukendt belønningstype."
            },
            notification: {
                completed: {
                    title: "Quest Gennemført",
                    body: "Questen {{questName}} er blevet fuldført."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Erstatter alle spørgsmålstegn med en valgt tekst, hvis beskeden kun indeholder spørgsmålstegn.",
            option: {
                replace: {
                    label: "Erstat med",
                    description: "Tekst der skal erstatte spørgsmålstegnene"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Tilføjer en hurtig @nævn-knap til beskedens handlingslinje",
            tooltip: "Hurtig @nævn"
        },
        quickReply: {
            name: "QuickReply",
            description: "Svar på (Ctrl+Op/Ned) og rediger (Ctrl+Shift+Op/Ned) beskeder via genvejstaster",
            option: {
                shouldMention: {
                    label: "Skal @nævne",
                    description: "Ping ved svar som standard",
                    noReplyMentionPlugin: "Følg NoReplyMention-plugin (hvis aktiveret)",
                    enabled: "Aktiveret",
                    disabled: "Deaktiveret"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignorer blokerede og ignorerede",
                    description: "Ignorer beskeder fra blokerede/ignorerede brugere under navigation"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Skift hurtigt mellem temaer ved hjælp af genvejstaster.",
            about: {
                title: "Genveje",
                description: "Brug Ctrl/Cmd+Shift+Pile for at navigere (Venstre/Højre: skift tema, Op: aktiver, Ned: deaktiver).",
                reload: "Tryk Ctrl/Cmd+Shift+Alt for at genindlæse temalisten."
            },
            modal: {
                added: "Tilføjede {{count}} tema{{s}}",
                removed: "Fjernede {{count}} tema{{s}}",
                reloaded: "Genindlæste {{themeCount}} temaer",
                addedLocal: "Tilføjede {{count}} lokale tema{{s}}",
                removedLocal: "Fjernede {{count}} lokale tema{{s}}",
            },
            option: {
                includeLocal: {
                    label: "Inkluder lokale",
                    description: "Inkluder lokale temaer"
                },
                includeOnline: {
                    label: "Inkluder online",
                    description: "Inkluder online temaer"
                },
                sortOrder: {
                    label: "Sorteringsrækkefølge",
                    description: "Sorteringsmetode",
                    asc: "A-Å",
                    desc: "Å-A",
                    recent: "Seneste"
                },
                autoRefresh: {
                    label: "Auto-opdatering",
                    description: "Opdater temalisten automatisk ved ændringer"
                },
                showNotifications: {
                    label: "Vis notifikationer",
                    description: "Vis notifikationer når temaer tilføjes/fjernes"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Tilføjer muligheden for at oprette et inspirerende citat-billede fra en besked",
            context: {
                quote: "Citer (Billede)"
            },
            modal: {
                title: "Fanget i 4K",
                grayscale: "Gråtoner",
                export: "Eksporter",
                send: "Send",
                saveAsGIF: "Gem som GIF",
                saveDescription: "Gemmer/Sender billedet som en GIF i stedet for PNG",
                showWatermark: "Vis vandmærke",
                watermarkText: "Tekst til vandmærke (maks. 32 tegn)"
            },
            option: {
                quoteFont: {
                    label: "Skrifttype til citat",
                    description: "Skrifttype for citat-tekst (forfatter bruger altid M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Vandmærke",
                    description: "Egen tekst til vandmærke (maks. 32 tegn)"
                },
                grayscale: {
                    label: "Gråtoner",
                    description: "Aktiver gråtoner som standard"
                },
                showWatermark: {
                    label: "Vis vandmærke",
                    description: "Vis vandmærke som standard"
                },
                saveAsGif: {
                    label: "Gem som GIF",
                    description: "Gem som GIF som standard"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Tilføjer en knap nær lydløs-knappen for at deltage i et tilfældigt stemmeopkald.",
            tooltip: "Tilfældigt opkald",
            context: {
                label: "Stemme-status modifikator",
                amountLabel: "ANTAL BRUGERE",
                spacesLabel: "LEDIGE PLADSER",
                voiceLabel: "STEMMEGRÆNSE",
                selfLabel: "EGNE INDSTILLINGER",
                select: {
                    servers: "Vælg servere",
                    list: "Vælg liste",
                    filters: "Vælg filtre",
                    amount: "Antal brugere",
                    userAmount: "{{amount}} bruger{{s}}",
                    parameters: "Parametre",
                    selectAll: "Vælg alt",
                    reset: "Nulstil",
                    stateFilters: "Tilstand filtre",
                    moreThan: "Mere end",
                    lessThan: "Mindre end",
                    equalTo: "Lig med",
                    spaces: "Ledige pladser",
                    voice: "Stemmegrænse"
                },
                filter: {
                    muted: "Muted",
                    deafened: "Deafened",
                    camera: "Kamera",
                    stream: "Stream",
                    includeFilters: "Inkluder filtre",
                    avoidFilters: "Undgå filtre"
                },
                reset: {
                    list: "Nulstil liste"
                },
                voice: {
                    label: "Stemme-indstillinger",
                    joinSettings: "Deltag indstillinger",
                    auto: {
                        mute: "Auto Mute",
                        deafen: "Auto Deafen",
                        camera: "Auto Kamera",
                        stream: "Auto Stream",
                        leaveWhenEmpty: "Forlad når tom",
                        navigate: "Auto Navigering",
                        stage: "Undgå Stage",
                        afk: "Undgå AFK"
                    }
                },
                invalid: {
                    server: "Ugyldig server"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Brugerantal operation",
                    description: "Vælg en operation for antallet af brugere"
                },
                userAmount: {
                    label: "Antal brugere",
                    description: "Vælg antallet af brugere"
                },
                spacesLeftOperation: {
                    label: "Ledige pladser operation",
                    description: "Vælg en operation for antallet af ledige pladser"
                },
                spacesLeft: {
                    label: "Ledige pladser",
                    description: "Vælg antallet af ledige pladser"
                },
                vcLimitOperation: {
                    label: "VC-grænse operation",
                    description: "Vælg en operation for kanalgrænsen."
                },
                vcLimit: {
                    label: "VC-grænse",
                    description: "Vælg en grænse for stemmekanalen"
                },
                servers: {
                    label: "Servere",
                    description: "Servere der er inkluderet"
                },
                autoNavigate: {
                    label: "Auto Navigering",
                    description: "Navigerer automatisk til stemmekanalen."
                },
                autoCamera: {
                    label: "Auto Kamera",
                    description: "Tænder automatisk for kameraet"
                },
                autoStream: {
                    label: "Auto Stream",
                    description: "Tænder automatisk for stream"
                },
                selfMute: {
                    label: "Auto Mute",
                    description: "Sætter automatisk din mikrofon på lydløs ved deltagelse."
                },
                selfDeafen: {
                    label: "Auto Deafen",
                    description: "Deaktiverer automatisk lyd ved deltagelse."
                },
                leaveEmpty: {
                    label: "Forlad når tom",
                    description: "Finder et nyt tilfældigt opkald, hvis rummet er tomt."
                },
                prioritizeFriends: {
                    label: "Prioriter venner",
                    description: "Foretræk kanaler med dine venner i, når det er muligt."
                },
                avoidStages: {
                    label: "Undgå Stage",
                    description: "Undgår at deltage i Stage-kanaler."
                },
                avoidAfk: {
                    label: "Undgå AFK",
                    description: "Undgår at deltage i AFK-kanaler."
                },
                video: {
                    label: "Video",
                    description: "Søger efter brugere med kameraet tændt"
                },
                stream: {
                    label: "Stream",
                    description: "Søger efter brugere der streamer"
                },
                mute: {
                    label: "Muted",
                    description: "Søger efter brugere der er på lydløs"
                },
                deafen: {
                    label: "Deafened",
                    description: "Søger efter brugere der har slået lyden fra"
                },
                includeStates: {
                    label: "Inkluder filtre",
                    description: "Mulighed for at inkludere bestemte statusser"
                },
                avoidStates: {
                    label: "Undgå filtre",
                    description: "Mulighed for at undgå bestemte statusser"
                }
            },
            alert: {
                failed: "Kunne ikke finde en stemmekanal!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Dekoder React-fejlkoder til læsbare beskeder."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Marker alle servernotifikationer som læst med ét klik!",
            button: "Læs alle"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Ctrl+Tab mellem de senest brugte DM'er (Ctrl+Shift+Tab for omvendt)",
            option: {
                visualStyle: {
                    label: "Visuel stil",
                    description: "Stil for den visuelle indikator under skift",
                    overlay: "Overlay (Alt+Tab stil)",
                    toast: "Toast (statusbesked)",
                    off: "Fra"
                },
                overlayMode: {
                    label: "Overlay-tilstand",
                    description: "Indhold i overlayet",
                    row: "Række af seneste",
                    current: "Kun nuværende",
                },
                amountOfUsers: {
                    label: "Antal brugere",
                    description: "Antal brugere der skal vises i overlayet"
                },
                overlayRowLength: {
                    label: "Rækkelængde i overlay",
                    description: "Antal seneste DM'er vist i en række"
                },
                overlayShowAvatars: {
                    label: "Vis avatarer i overlay",
                    description: "Vis brugeres avatarer i overlayet"
                },
                toastDurationMs: {
                    label: "Varighed for toast (ms)",
                    description: "Hvor længe statusbeskeden skal vises"
                },
                clearRdms: {
                    label: "Ryd RDMS-liste",
                    description: "Værktøj: Ryd listen over seneste DM'er",
                    toast: "Ryddede RMDS-historik",
                    button: "Ryd RDMS-historik"
                }
            },
            modal: {
                unknown: "Ukendt",
                dm: "DM",
                group: "Gruppechat",
                channel: "Kanal",
                switchingTo: "Skifter til: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Giver dig besked, når en ven, gruppechat eller server fjerner dig.",
            option: {
                notices: {
                    label: "Notitser",
                    description: "Vis også en besked i toppen af skærmen ved fjernelse (brug dette for ikke at gå glip af noget)."
                },
                offlineRemovals: {
                    label: "Offline fjernelser",
                    description: "Giv besked ved opstart, hvis du blev fjernet, mens du var offline."
                },
                friends: {
                    label: "Venner",
                    description: "Giv besked når en ven fjerner dig"
                },
                friendRequestCancels: {
                    label: "Annullerede venneanmodninger",
                    description: "Giv besked når en venneanmodning annulleres"
                },
                servers: {
                    label: "Servere",
                    description: "Giv besked når du fjernes fra en server"
                },
                groups: {
                    label: "Grupper",
                    description: "Giv besked når du fjernes fra en gruppechat"
                }
            },
            notification: {
                removedFriend: "{{user}} fjernede dig som ven.",
                cancelledFriendRequest: "En venneanmodning fra {{user}} er blevet fjernet.",
                removedFromServer: "Du er blevet fjernet fra serveren {{server}}.",
                removedFromGroup: "Du blev fjernet fra gruppen {{group}}.",
                noLongerGroup: "Du er ikke længere i gruppen {{group}}.",
                noLongerServer: "Du er ikke længere på serveren {{server}}.",
                noLongerFriend: "Du er ikke længere venner med {{user}}.",
                friendRequestRevoked: "Venneanmodning fra {{user}} er blevet trukket tilbage.",
                ok: "OK"
            }
        },
        remix: {
            name: "Remix",
            description: "Tilføjer en 'Remix'-mulighed til højreklikmenuen på upload-knappen. Dette åbner et billede i en enkel editor.",
            label: "Remix",
            button: {
                send: "Send",
                close: "Luk",
                brush: "Pensel",
                erase: "Viskelæder",
                crop: "Beskær",
                shape: "Figur",
                reset: "Nulstil",
                clear: "Ryd"
            },
            editor: {
                choose: "Vælg et billede",
                browse: "Gennemse",
                rectangle: "Rektangel",
                ellipse: "Ellipse",
                line: "Linje",
                arrow: "Pil",
                fill: "Udfyld"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Giver dig mulighed for hurtigt at gentage beskeder. Hvis du holder Shift nede mens du trykker 'Repeat', vil den svare på beskeden.",
            button: "Gentag (Klik) / Gentag og Svar (Shift + Klik)",
            context: {
                repeat: "Gentag",
                repeatAndReply: "Gentag og Svar"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Erstatter Google-søgning med andre søgemaskiner.",
            option: {
                customEngineName: {
                    label: "Eget navn på søgemaskine",
                    description: "Navnet på den brugerdefinerede søgemaskine"
                },
                customEngineURL: {
                    label: "Egen URL til søgemaskine",
                    description: "URL'en til din søgemaskine"
                },
                replacementEngine: {
                    label: "Erstatningsmaskine",
                    description: "Erstat med en specifik søgemaskine i stedet for at tilføje en menu",
                    off: "Fra",
                    custom: "Egen søgemaskine",
                }
            },
            context: {
                label: "Søg efter tekst",
                searchWith: "Søg med {{name}}"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Kontroller om du altid eller aldrig skal pinges ved svar, med en hvidliste-funktion",
            option: {
                alwaysPingOnReply: {
                    label: "Ping altid ved svar",
                    description: "Bliv altid pinget, når nogen svarer på dine beskeder"
                },
                replyPingWhitelist: {
                    label: "Hvidliste for svar-ping",
                    description: "Komma-separeret liste over bruger-ID'er der altid må pinge dig ved svar"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Viser et tidsstempel på forhåndsvisninger af besked-svar"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Afslør alle spoilers i en besked ved at Ctrl-klikke på en spoiler, eller i hele chatten med Ctrl+Shift-klik"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Tilføjer omvendt billedsøgning til billed-kontekstmenuen",
            context: {
                label: "Søg efter billede",
                all: "Søg overalt"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Anmeld andre brugere (Tilføjer en ny sektion til profiler)",
            notification: {
                newReview: "Du har nye anmeldelser på din profil!",
                auth: {
                    error: "Der opstod en fejl under godkendelse",
                    successfully: "Logget ind med succes!",
                    failed: "Kunne ikke godkende",
                    review: "Godkend venligst for at tilføje en anmeldelse.",
                    opening: "Åbner godkendelsesvindue...",
                    need: "Du skal godkende for at anmelde brugere!"
                },
                error: {
                    fast: "Du sender anmodninger for hurtigt. Vent et par sekunder.",
                    fetching: "Der opstod en fejl under hentning af anmeldelser.",
                    action: {
                        failed: "Kunne ikke {{action}} bruger",
                        success: "Bruger {{action}}et med succes"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Er du sikker?",
                    description: "Vil du virkelig slette denne anmeldelse?",
                    confirm: "Slet",
                    cancel: "Annuller",
                    error: "Du skal være logget ind for at slette anmeldelser.",
                },
                report: {
                    title: "Er du sikker?",
                    description: "Vil du virkelig anmelde (report) denne anmeldelse?",
                    confirm: "Anmeld",
                    cancel: "Annuller",
                    error: "Du skal være logget ind for at anmelde anmeldelser.",
                },
                block: {
                    title: "Er du sikker?",
                    description: "Vil du virkelig blokere denne bruger? Du vil ikke længere se deres anmeldelser.",
                    confirm: "Bloker",
                    cancel: "Annuller",
                    error: "Du skal være logget ind for at blokere brugere.",
                },
                blocked: {
                    title: "Blokerede brugere",
                    auth: "Du er ikke logget ind på ReviewDB!",
                    noBlocked: "Ingen brugere er blokeret.",
                    fetch: "Fejl under hentning af blokerede brugere."
                },
                reviews: {
                    title: "s Anmeldelser",
                    noUser: "Det ser ud til, at ingen har anmeldt denne bruger endnu. Du kan være den første!",
                    noServer: "Det ser ud til, at ingen har anmeldt denne server endnu. Du kan være den første!"
                }
            },
            button: {
                appeal: "Appeller",
                ok: "OK",
                more: "Læs mere",
                reply: "Svar til @{{user}}",
                update: "Opdater anmeldelse for @{{user}}",
                review: "Anmeld @{{user}}"
            },
            context: {
                view: "Se anmeldelser",
                blocked: "Du har blokeret denne bruger",
                delete: "Slet anmeldelse",
                report: "Anmeld anmeldelse",
                block: "Bloker bruger",
                unblock: "Fjern blokering",
                reply: "Svar på anmeldelse"
            },
            option: {
                authorize: {
                    label: "Godkend",
                    button: "Godkend med ReviewDB"
                },
                notifyReviews: {
                    label: "Notificer om anmeldelser",
                    description: "Giv besked om nye anmeldelser ved opstart"
                },
                showWarning: {
                    label: "Vis advarsel",
                    description: "Vis en påmindelse om at være respektfuld i toppen af listen"
                },
                hideTimestamps: {
                    label: "Skjul tidsstempler",
                    description: "Skjul tidspunkter på anmeldelser"
                },
                hideBlockedUsers: {
                    label: "Skjul blokerede brugere",
                    description: "Skjul anmeldelser fra blokerede brugere"
                },
                buttons: {
                    label: "Knapper",
                    manageBlocked: "Administrer blokerede brugere",
                    support: "Støt ReviewDB-udvikling",
                    website: "ReviewDB hjemmeside",
                    server: "ReviewDB Support-server"
                }
            },
            profile: {
                optedOut: "Bruger fravalgt",
                noReviews: "Ingen anmeldelser endnu"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Viser magnet-links (torrents) på samme måde som beskedlinks",
            unknown: "ukendt filnavn"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Tilføjer farven fra den højeste rolle overalt hvor det er muligt",
            option: {
                chatMentions: {
                    label: "Chat Mentions",
                    description: "Vis rollefarver i @nævnelser (inklusiv i skrivefeltet)"
                },
                memberList: {
                    label: "Medlemsliste",
                    description: "Vis rollefarver i overskrifter i medlemslisten"
                },
                voiceUsers: {
                    label: "Brugere i stemmechat",
                    description: "Vis rollefarver i listen over brugere i stemmechat"
                },
                reactorsList: {
                    label: "Reaktions-liste",
                    description: "Vis rollefarver i listen over hvem der har reageret"
                },
                pollResults: {
                    label: "Afstemningsresultater",
                    description: "Vis rollefarver i resultaterne af afstemninger"
                },
                colorChatMessages: {
                    label: "Farv chatbeskeder",
                    description: "Farv hele chatbeskeden baseret på forfatterens rollefarve"
                },
                messageSaturation: {
                    label: "Farve-intensitet",
                    description: "Intensiteten af farvningen af beskeder"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Rediger type og indhold af enhver Rich Presence (aktivitetsstatus)",
            option: {
                replacedAppIds: {
                    label: "Erstattede App-ID'er",
                }
            },
            modal: {
                tutorial: {
                    title: "ID'er for nuværende aktiviteter",
                    noRunning: "Ingen aktive aktiviteter",
                    available: "Tilgængelige variabler",
                    variableText: "I alle felter (undtagen stream-URL) kan du indsætte variabler, der automatisk erstattes:",
                    more: "Flere detaljer",
                    details: {
                        leave: "Efterlad et felt tomt for at beholde det oprindelige.",
                        set: "Sæt et felt til 'null' for at skjule det.",
                        reload: "Du skal muligvis genindlæse Discord for at se ændringerne."
                    }
                },
                settings: {
                    applyEdits: "Anvend ændringer på app",
                    addNewApp: "Tilføj ny applikation",
                    appId: "Applikations-ID",
                    invalidAppId: "Ugyldigt applikations-ID",
                    newActivityType: "Ny aktivitetstype",
                    activityTypes: {
                        playing: "Spiller",
                        watching: "Ser",
                        listening: "Lytter til",
                        competing: "Deltager i",
                        streaming: "Streamer"
                    },
                    streamUrl: "Stream-URL (skal være YouTube eller Twitch)",
                    invalidStreamUrl: "Ugyldig stream-URL",
                    newName: "Nyt navn",
                    newDetails: "Nye detaljer",
                    newState: "Ny status (state)",
                    largeImage: "Stort billede",
                    smallImage: "Lille billede",
                    text: "Tekst",
                    url: "URL",
                    firstLine: "(første linje)",
                    secondLine: "(anden linje)",
                    thirdLine: "(tredje linje)",
                    alsoThirdLine: "(også tredje linje)",
                    hideAssets: "Skjul billeder (stort & lille)",
                    hideTimestamps: "Skjul tidsstempler"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Viser statistikker om din aktivitet som en RPC-status",
            option: {
                assetURL: {
                    label: "Billed-URL",
                    description: "Billedet der skal bruges. Dit profilbillede bruges hvis feltet er tomt"
                },
                rpcTitle: {
                    label: "RPC-titel",
                    description: "Titlen på din RPC-status"
                },
                statDisplay: {
                    label: "Statistik-visning",
                    description: "Hvad skal statussen vise?",
                    today: "Antal beskeder sendt i dag",
                    alltime: "Antal beskeder sendt i alt",
                    listened: "Dit mest hørte album i denne uge"
                },
                lastFMApiKey: {
                    label: "Last.fm API-nøgle",
                    description: "Din Last.fm API-nøgle"
                },
                lastFMUsername: {
                    label: "Last.fm brugernavn",
                    description: "Dit Last.fm brugernavn"
                },
                albumCoverImage: {
                    label: "Brug albumcover",
                    description: "Skal albumcoveret bruges som billede? (Hvis Last.fm er valgt)"
                },
                lastFMStatFormat: {
                    label: "Last.fm format",
                    description: "Hvordan skal statistikken formateres? $album og $artist erstattes automatisk"
                }
            },
            noInfo: "Ingen information lige nu :(",
            messagesToday: "Beskeder sendt i dag: {{count}}",
            messagesAllTime: "Beskeder sendt i alt: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Eksporter URL'er på dine favorit-GIF'er",
            toolbox: "Gem favorit-GIF'er",
            title: "Gem favorit-GIF'er",
            command: {
                savegifs: {
                    description: "Gem alle favorit-GIF-URL'er i en tekstfil"
                },
                saveworkinggifs: {
                    description: "Test alle favorit-GIF'er og gem kun dem, der stadig virker"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Vis knap i værktøjskasse",
                    description: "Vis knappen 'Gem favorit-GIF'er' i Plexcord-værktøjskassen (kræver genstart)"
                }
            },
            toast: {
                save: "GIF'er gemt som {{filename}}",
                failed: "Kunne ikke gemme GIF'er",
                no: "Ingen favorit-GIF'er fundet!",
                testing: "Tester {{count}} GIF'er, dette kan tage et øjeblik...",
                noneWorking: "Ingen af dine gemte GIF'er ser ud til at virke.",
                saved: "Filtrerede {{broken}} potentielt defekte GIF'er. Gemte {{saved}} fungerende GIF'er."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Planlæg beskeder til at blive sendt på et specifikt tidspunkt eller efter en forsinkelse.",
            toolbox: {
                toggle: "Vis planlagte beskeder"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Maks. beskeder pr. minut",
                    description: "Maksimalt antal planlagte beskeder pr. kanal, der kan sendes i samme minut."
                },
                checkIntervalSeconds: {
                    label: "Interval for tjek (sekunder)",
                    description: "Hvor ofte pluginnet tjekker for beskeder, der skal sendes."
                },
                showNotifications: {
                    label: "Vis notifikationer",
                    description: "Vis toast-notifikationer, når beskeder sendes."
                },
                showPhantomMessages: {
                    label: "Vis fantombeskeder",
                    description: "Vis planlagte beskeder som fantombeskeder i chatten."
                }
            },
            channelType: {
                unknown: "Ukendt",
                dm: "DM",
                groupDm: "Gruppechat",
                channel: "Kanal"
            },
            toast: {
                messageSent: "Planlagt besked sendt til {{channel}}",
                messageFailed: "Kunne ikke sende planlagt besked",
                maxMessagesReached: "Maksimum på {{max}} beskeder pr. kanal pr. minut er nået",
                messageScheduled: "Besked planlagt!",
                messageRemoved: "Planlagt besked fjernet",
                allCleared: "Alle planlagte beskeder er slettet"
            },
            button: {
                tooltipOn: "Planlægningstilstand TIL (klik for at deaktivere, højreklik for liste)",
                tooltipOff: "Planlægningstilstand FRA (klik for at aktivere, højreklik for liste)"
            },
            accessory: {
                scheduledFor: "Planlagt til {date}{timeLeft}",
                remaining: {
                    days: "{{days}}d {{hours}}t tilbage",
                    hours: "{{hours}}t {{minutes}}m tilbage",
                    minutes: "{{minutes}}m tilbage"
                }
            },
            scheduleModal: {
                title: "Planlæg besked",
                schedulingFor: "Planlægger for: {{channel}}",
                scheduleType: "Type af planlægning",
                delay: "Forsinkelse",
                specificTime: "Specifikt tidspunkt",
                delayMinutes: "Forsinkelse (minutter)",
                dateTime: "Dato og tid",
                error: {
                    invalidDelay: "Indtast venligst en gyldig forsinkelse (minimum 1 minut)",
                    invalidDateTime: "Vælg venligst en fremtidig dato og tid"
                },
                schedule: "Planlæg",
                cancel: "Annuller"
            },
            viewModal: {
                title: "Planlagte beskeder",
                clearAll: "Ryd alle",
                noMessages: "Ingen planlagte beskeder",
                delete: "Slet",
                close: "Luk"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Retter den irriterende 'We dropped the magnifying glass!'-fejl i søgninger.",
            notPerfect: "Dette fix er ikke perfekt, så du skal muligvis genindlæse søgefeltet for at løse problemer.",
            paragraph1: "Discord tillader kun en maks. forskydning (offset) på 5000 (dette forårsager fejlen).",
            paragraph2: "Det betyder, at du kun kan se præcis 5000 beskeder tilbage i tiden og 5000 frem i tiden.",
            paragraph3: "Dette plugin skifter automatisk sorteringsmetode for at forsøge at omgå Discords begrænsning,",
            paragraph4: "men hvis der er et stort søgeresultat, og du prøver at se en besked, der ikke kan hentes med nogen af metoderne,",
            paragraph5: "vil pluginnet blot vise det første resultat (nyeste eller ældste besked afhængigt af sortering)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Afspil altid den hemmelige version af Discord-ringetonen (undtagen under specielle begivenheder)",
            option: {
                onlySnow: {
                    label: "Kun under sne-begivenhed",
                    description: "Afspil kun 'Snow Halation'-temaet"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Aktiverer Discords eksperimentelle 'Summaries'-funktion på alle servere (AI-genererede overblik over samtaler)",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Tærskel for udløb af resumé (Dage)",
                    description: "Antal dage før et resumé fjernes. Bemærk at kun op til 50 resuméer gemmes pr. kanal"
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Tilføjer den nuværende kanal til listen over destinationer, når du videresender beskeder"
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Send tidsstempler nemt via knap i chatfeltet eller genveje. Læs den udvidede beskrivelse!",
            sample: {
                paragraph1: "For hurtigt at sende tidsstempler, inkluder tid formateret som `HH:MM` (inklusiv backticks!) i din besked",
                paragraph2: "Se eksempler nedenfor.\nHvis du har brug for noget mere specifikt, så brug Dato-knappen i chatfeltet!",
                examples: "Eksempler:"
            },
            modal: {
                title: "Vælg tidsstempel",
                light: "Lys",
                dark: "Mørk",
                format: "Format for tidsstempel",
                preview: "Forhåndsvisning",
                insert: "Indsæt",
                insertTimestamp: "Indsæt tidsstempel"
            },
            option: {
                replaceMessageContents: {
                    label: "Erstat beskedindhold",
                    description: "Erstat tidsstempler direkte i beskedens indhold"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Giver dig mulighed for at se detaljeret info om en server",
            context: {
                serverInfo: "Server-info"
            },
            option: {
                sorting: {
                    label: "Sortering",
                    description: "Brugernavn eller visningsnavn",
                    username: "Brugernavn",
                    displayname: "Visningsnavn",
                    none: "Sorter ikke"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Server-info",
                    friends: "Venner",
                    mutualUsers: "Fælles brugere",
                    blockedUsers: "Blokerede brugere",
                    ignoredUsers: "Ignorerede brugere"
                },
                owner: "Server-ejer",
                loading: "Indlæser...",
                createdAt: "Oprettet den",
                joinedAt: "Tilsluttet den",
                vanityLink: "Brugerdefineret link",
                preferredLocale: "Foretrukket sprog",
                verification: {
                    level: "Verifikationsniveau",
                    none: "Ingen",
                    low: "Lav",
                    medium: "Medium",
                    high: "Høj",
                    highest: "Højeste"
                },
                serverBoosts: "Server Boosts",
                channels: "Kanaler",
                roles: "Roller"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Vis antal online venner eller antal servere i serverlisten",
            friends: "Venner",
            servers: "Servere",
            option: {
                mode: {
                    label: "Tilstand",
                    description: "Hvad der skal vises i serverlisten",
                    friend: "Kun antal online venner",
                    server: "Kun antal servere",
                    both: "Begge dele"
                },
                useCompact: {
                    label: "Brug kompakt tilstand",
                    description: "Viser kun indikatoren som tekst"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Naviger bedre mellem dine servere med en hurtig søgeknap",
            tooltip: "Søg"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Bringer kodefelter i VS Code-stil til Discord, drevet af Shiki",
            option: {
                theme: {
                    label: "Tema",
                    description: "Standardtemaer"
                },
                customTheme: {
                    label: "Brugerdefineret tema",
                    description: "Link til et brugerdefineret VS Code-tema (JSON-fil via URL)",
                    mustURL: "Skal være en gyldig URL",
                    mustJSON: "Skal være en JSON-fil"
                },
                tryHljs: {
                    label: "Fallback til Hljs",
                    description: "Brug Discords standard highlighter hvis nødvendigt.",
                    never: "Aldrig",
                    secondary: "Foretræk Shiki over Highlight.js",
                    primary: "Foretræk Highlight.js over Shiki",
                    always: "Altid"
                },
                useDevIcon: {
                    label: "Brug Devicons til sprog-ikoner",
                    description: "Hvordan sprog-ikoner skal vises på kodefelter",
                    disabled: "Deaktiveret",
                    colorless: "Uden farve",
                    colored: "Med farve"
                },
                bgOpacity: {
                    label: "Baggrundsgennemsigtighed",
                    description: "Gennemsigtighed for baggrunden"
                }
            },
            button: {
                copy: "Kopier",
                copied: "Kopieret!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Vis altid alle beskedknapper, uanset om du holder Shift nede eller ej.",
            option: {
                noShiftDelete: {
                    label: "Slet uden Shift",
                    description: "Fjern kravet om at holde Shift for at slette en besked."
                },
                noShiftPin: {
                    label: "Fastgør uden Shift",
                    description: "Fjern kravet om at holde Shift for at fastgøre en besked."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Viser forfatterens badges ved siden af deres navn i chatten.",
            option: {
                showPlexcordDonor: {
                    label: "Vis Plexcord Donor-badge",
                    description: "Aktiver for at se Plexcord Donor-badges i chatten."
                },
                plexcordDonorPosition: {
                    label: "Position for Donor-badge",
                    description: "Hvor Plexcord Donor-badget skal placeres."
                },
                showPlexcordContributor: {
                    label: "Vis Plexcord Contributor-badge",
                    description: "Aktiver for at se Plexcord Contributor-badges."
                },
                plexcordContributorPosition: {
                    label: "Position for Contributor-badge",
                    description: "Hvor Plexcord Contributor-badget skal placeres."
                },
                showDiscordProfile: {
                    label: "Vis Discord-profilbadges",
                    description: "Vis standard Discord-badges (HypeSquad osv.) i chatten."
                },
                discordProfilePosition: {
                    label: "Position for Discord-badges",
                    description: "Hvor Discord-profilbadges skal placeres."
                },
                showDiscordNitro: {
                    label: "Vis Discord Nitro-badge",
                    description: "Vis Nitro-badge i chatten."
                },
                discordNitroPosition: {
                    label: "Position for Nitro-badge",
                    description: "Hvor Nitro-badget skal placeres."
                },
                badgeSettings: {
                    label: "Badge-indstillinger",
                    description: "Konfigurer rækkefølgen af badges i chatten.",
                    modal: "Træk i badgene for at ændre rækkefølge; klik for at aktivere/deaktivere en bestemt type."
                }
            },
            badge: {
                plexcord: "Plexcord donor-badge",
                contributor: "Plexcord contributor-badge",
                discordProfile: "Discord profilbadges (HypeSquad, Staff, Active Developer osv.)",
                nitro: "Nitro-badge",
                staff: "Discord Staff",
                partner: "Partnered Server Owner",
                events: "HypeSquad Events",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Discord Bug Hunter",
                earlyVerifiedBotDeveloper: "Early Verified Bot Developer",
                earlySupporter: "Early Supporter",
                moderatorProgram: "Moderator Program Alumni"
            },
            modal: {
                plexcordContributor: "Plexcord Contributor",
                discordNitro: "Discord Nitro",
                basic: "Basic",
                classic: "Classic"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Vis tilknyttede konti i bruger-popouts",
            option: {
                iconSize: {
                    label: "Ikonstørrelse",
                    description: "Størrelse på ikoner (px)"
                },
                iconSpacing: {
                    label: "Ikon-afstand",
                    description: "Margen mellem ikoner",
                    compact: "Kompakt",
                    cozy: "Hyggelig",
                    roomy: "Rummelig"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Vis kanaler som du normalt ikke har adgang til at se.",
            tooltip: "Skjult kanal",
            option: {
                channelStyle: {
                    label: "Kanal-stil",
                    description: "Hvordan skjulte kanaler skal fremstå.",
                    classic: "Klassisk",
                    muted: "Lydløs-stil",
                    showUnreads: "Vis ulæste",
                    mutedWithUnreads: "Lydløs med ulæste"
                },
                showMode: {
                    label: "Visningstilstand",
                    description: "Ikon-stil for de skjulte kanaler.",
                    lock: "Almindelig med hængelås-ikon",
                    hidden: "Lydløs-stil med et skjult øje til højre",
                    lockIconRight: "Hængelås til højre"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Standardstatus for 'Tilladte brugere'-liste",
                    description: "Om listen over roller med adgang skal være åben som standard"
                }
            },
            channelType: {
                text: "tekst",
                announcement: "bekendtgørelse",
                forum: "forum",
                voice: "stemme",
                stage: "stage"
            },
            sortOrder: {
                latestActivity: "Seneste aktivitet",
                creationDate: "Oprettelsesdato"
            },
            forumLayout: {
                default: "Ikke sat",
                list: "Listevisning",
                grid: "Gallerivisning"
            },
            videoQuality: {
                auto: "Automatisk",
                full: "720p"
            },
            modal: {
                hidden: "skjult",
                locked: "låst",
                threads: "tråde",
                posts: "opslag",
                messages: "beskeder",
                post: "opslag",
                message: "besked",
                unknown: "ukendt",
                permissionDetails: "Tilladelsesdetaljer",
                thisIsA: "Dette er en {{status}} {{channelType}} kanal",
                canNotSee: "Du kan ikke se {{type}} i denne kanal.",
                guidelines: "Du kan dog se dens retningslinjer:",
                lastCreated: "Sidst oprettet {{type}}:",
                lastPin: "Sidst fastgjorte besked:",
                threadSlowmode: "Standard slowmode for tråde:",
                slowmode: "Slowmode:",
                bitrate: "Bitrate:",
                region: "Region:",
                automatic: "Automatisk",
                videoQuality: "Videokvalitet:",
                inactiveArchiveDuration: "Standardtid før arkivering af {{type}}",
                defaultLayout: "Standard layout:",
                defaultSort: "Standard sortering:",
                defaultReaction: "Standard reaktions-emoji:",
                requireTag: "Opslag i dette forum kræver et tag.",
                availableTags: "Tilgængelige tags:",
                allowedUsersAndRoles: "Tilladte brugere og roller:",
                hideAllowedUsersAndRoles: "Skjul tilladte brugere og roller",
                viewAllowedUsersAndRoles: "Vis tilladte brugere og roller"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Viser forskellige skjulte ting og moderator-værktøjer uanset tilladelser.",
            option: {
                showTimeouts: {
                    label: "Vis timeouts i chatten",
                    description: "Vis ikoner for medlems-timeouts i chatten."
                },
                showInvitesPaused: {
                    label: "Vis pausede invitationer",
                    description: "Vis indikatoren for pausede invitationer i serverlisten."
                },
                showModView: {
                    label: "Vis Mod-visning",
                    description: "Vis 'Mod View'-punktet i kontekstmenuen på alle servere."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Tilføjer en mulighed i kontekstmenuen for at vise embeds for links, der mangler dem",
            context: {
                embed: {
                    show: "Vis Embed",
                    hide: "Fjern Embed"
                }
            },
            error: {
                failed: "Kunne ikke hente embed",
                noEmbed: "Ingen embeds fundet"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Vis enhver kombination af kaldenavne, venners navne, servernavne og brugernavne i chatten.",
            option: {
                messages: {
                    label: "Beskeder",
                    description: "Brug brugerdefineret navneformat i beskeder."
                },
                replies: {
                    label: "Svar",
                    description: "Brug brugerdefineret navneformat i svar."
                },
                mentions: {
                    label: "Mentions",
                    description: "Brug brugerdefineret navneformat i mentions."
                },
                typingIndicator: {
                    label: "Skrive-indikator",
                    description: "Vis det første tilgængelige navn i skrive-indikatoren."
                },
                memberList: {
                    label: "Medlemsliste",
                    description: "Vis det første tilgængelige navn i medlemslisten."
                },
                profilePopout: {
                    label: "Profil-popout",
                    description: "Vis det første tilgængelige navn i profil-popouts."
                },
                voiceChannels: {
                    label: "Stemmekanaler",
                    description: "Vis det første tilgængelige navn i stemmekanaler."
                },
                reactions: {
                    label: "Reaktioner",
                    description: "Vis navnet i værktøjstip til reaktioner og det fulde navn i oversigten."
                },
                discriminators: {
                    label: "Discriminators (#0000)",
                    description: "Vis #numre for bots. Selvom de er udfaset for brugere, hjælper det med at kende forskel på bots."
                },
                hideDefaultAtSign: {
                    label: "Skjul '@'-tegn",
                    description: "Skjul @-symbolet før navnet i mentions og svar."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Afkort navne i Streamer-tilstand",
                    description: "Afkort alle navne (ikke kun brugernavne) mens Streamer-tilstand er aktiv."
                },
                removeDuplicates: {
                    label: "Fjern dubletter",
                    description: "Hvis to navne er ens, så vis kun det ene."
                },
                ignoreFonts: {
                    label: "Ignorer skrifttyper",
                    description: "Brug altid 'gg sans' til ekstra navne, uanset brugerens egen skrifttype."
                },
                ignoreGradients: {
                    label: "Ignorer gradients",
                    description: "Brug kun primærfarven i stedet for hele farveforløbet (gradients) på sekundære navne."
                },
                animateGradients: {
                    label: "Animerede gradients",
                    description: "Animer farveforløb på de ekstra navne hvis muligt."
                },
                nameSeparator: {
                    label: "Navne-separator",
                    description: "Tegnet der adskiller navnene. Standard er et mellemrum."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Ven-navne kun i DM",
                    description: "Vis kun dine egne navne til venner i DM'er, ikke på servere."
                },
                customNameOnlyInDirectMessages: {
                    label: "Eget navn kun i DM",
                    description: "Vis kun brugerdefinerede navne i DM'er."
                },
                includedNames: {
                    label: "Inkluderede navne",
                    description: "Rækkefølgen af navne. Brug: {user}, {display}, {nick}, {friend}. Adskil med komma for at bruge som fallback."
                },
                customNameColor: {
                    label: "Farve på brugerdefineret navn",
                    description: "Farven på det navn du selv har tildelt en bruger. Brug 'Role' for at følge rollefarve."
                },
                friendNameColor: {
                    label: "Farve på ven-navn",
                    description: "Farven på en vens kaldenavn."
                },
                nicknameColor: {
                    label: "Farve på kaldenavn",
                    description: "Farven på server-kaldenavnet."
                },
                displayNameColor: {
                    label: "Farve på visningsnavn",
                    description: "Farven på profilens visningsnavn."
                },
                usernameColor: {
                    label: "Farve på brugernavn",
                    description: "Farven på selve brugernavnet."
                },
                triggerNameRerender: {
                    label: "Gennemtving opdatering af navne",
                    description: "Opdater visningen af navne ved at trykke her."
                }
            },
            modal: {
                change: {
                    title: "Skift SMYN-kaldenavn"
                },
                add: {
                    title: "Tilføj SMYN-kaldenavn"
                },
                setCustom: "Sæt et eget kaldenavn for denne bruger (kun synligt for dig).",
                nickname: "SMYN-kaldenavn",
                reset: "Nulstil SMYN-kaldenavn",
                cancel: "Annuller"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Viser hvor længe en brugers timeout varer, enten i værktøjstippet eller direkte ved siden af ikonet",
            option: {
                displayStyle: {
                    label: "Visningsstil",
                    description: "Hvordan varigheden skal vises",
                    tooltip: "I værktøjstippet",
                    inline: "Ved siden af ikonet"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Viser de kanaler, der er gemt bag server-ressourcer i kanallisten"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Viser sangens navn i stedet for kunstneren i Spotify-aktivitet"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Åbn en anden kanal eller en DM i en sidebjælke eller som et separat vindue",
            toolbox: {
                label: "Åbn forrige chat"
            },
            context: {
                label: "Åbn i sidebjælke"
            },
            modal: {
                switch: "Skift kanaler",
                popout: "Åbn i nyt vindue",
                close: "Luk sidebjælke"
            },
            option: {
                persistSidebar: {
                    label: "Husk sidebjælke",
                    description: "Behold sidebjælken åben efter genstart af Discord"
                },
                patchCommunity: {
                    label: "Patch Community",
                    description: "Retter fejl i Community-funktioner som Channel Browser eller Medlems-fanen."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Automatisk tekst/signatur i slutningen af dine beskeder",
            option: {
                name: {
                    label: "Navn",
                    description: "Signaturen der tilføjes i slutningen af dine beskeder"
                },
                textHeader: {
                    label: "Overskrift",
                    description: "Hvilken separator der skal bruges før signaturen"
                },
                showIcon: {
                    label: "Vis ikon",
                    description: "Vis et ikon i chatfeltet til at slå signatur til/fra"
                },
                contextMenu: {
                    label: "Kontekstmenu",
                    description: "Tilføj mulighed for at skifte signatur i højreklik-menuen"
                },
                isEnabled: {
                    label: "Er aktiveret",
                    description: "Slå funktionen til/fra"
                }
            },
            tooltip: {
                enable: "Aktiver signatur",
                disable: "Deaktiver signatur"
            },
            context: {
                enable: "Aktiver signatur"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Skift din signatur",
                    toogle: "Skift signatur-status",
                    enabled: "Signatur aktiveret",
                    disabled: "Signatur deaktiveret"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Tilføjer en knap i chatfeltet for at sende beskeder lydløst (uden push-notifikation).",
            option: {
                persistState: {
                    label: "Husk status",
                    description: "Hvordan knappens status skal gemmes",
                    none: "Husk ikke (nulstil ved kanalskift)",
                    channels: "Husk mellem kanaler",
                    restarts: "Husk efter genstart"
                },
                autoDisable: {
                    label: "Auto-deaktiver",
                    description: "Slå lydløs besked fra igen efter du har sendt én"
                }
            },
            tooltip: {
                enable: "Aktiver lydløs besked",
                disable: "Deaktiver lydløs besked"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Skjul at du skriver i chatten.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Skjul at du skriver i chatten.",
                    toggle: {
                        name: "skift",
                        description: "Skift funktion globalt, for kanalen eller for serveren.",
                        global: "Globalt",
                        channel: "Kanal",
                        guild: "Server"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndikator",
                        description: "Skjul andres skrive-indikatorer over chatfeltet."
                    },
                    membersListIndicator: {
                        name: "medlemslisteIndikator",
                        description: "Skjul andres skrive-indikatorer i medlemslisten."
                    },
                    chatIcon: {
                        name: "chatIkon",
                        description: "Vis et ikon i chatfeltet til hurtig skift."
                    },
                    chatContextMenu: {
                        name: "chatKontekstmenu",
                        description: "Vis indstillinger i højreklik-menuen."
                    },
                    defaultHidden: {
                        name: "standardSkjult",
                        description: "Om du som standard skal skjule at du skriver."
                    }
                }
            },
            content: {
                updated: "Indstillinger for Silent Typing opdateret.",
                noChanges: "Ingen ændringer foretaget."
            },
            tooltip: {
                hidden: "Skrivning skjult ({{location}})",
                visible: "Skrivning synlig ({{location}})",
                global: "Skrivning synlig (Globalt)"
            },
            option: {
                enabledGlobally: {
                    label: "Aktiveret globalt",
                    description: "Skjul globalt at du skriver."
                },
                hideChatBoxTypingIndicators: {
                    label: "Skjul indikatorer over chatfelt",
                    description: "Skjul andres skrive-indikatorer over chatfeltet."
                },
                hideMembersListTypingIndicators: {
                    label: "Skjul indikatorer i medlemsliste",
                    description: "Skjul andres skrive-indikatorer i medlemslisten."
                },
                chatIcon: {
                    label: "Chat-ikon",
                    description: "Vis et ikon i chatfeltet."
                },
                chatIconLeftClickAction: {
                    label: "Venstreklik på ikon",
                    description: "Handling ved venstreklik.",
                    global: "Skift globalt",
                    channel: "Skift for kanal",
                    guild: "Skift for server",
                    settings: "Åbn indstillinger"
                },
                chatIconMiddleClickAction: {
                    label: "Midterklik på ikon",
                    description: "Handling ved midterklik.",
                    global: "Skift globalt",
                    channel: "Skift for kanal",
                    guild: "Skift for server",
                    settings: "Åbn indstillinger"
                },
                chatIconRightClickAction: {
                    label: "Højreklik på ikon",
                    description: "Handling ved højreklik.",
                    global: "Skift globalt",
                    channel: "Skift for kanal",
                    guild: "Skift for server",
                    settings: "Åbn indstillinger"
                },
                chatContextMenu: {
                    label: "Kontekstmenu i chat",
                    description: "Vis indstillinger i højreklik-menuen."
                },
                defaultHidden: {
                    label: "Standard skjult",
                    description: "Hvis aktiveret, skjules din skrivning overalt, undtagen de steder du vælger i listen 'Deaktiverede steder' nedenfor."
                },
                enabledLocations: {
                    label: "Aktiverede steder",
                    description: "ID'er på kanaler/servere hvor funktionen skal være aktiv."
                },
                disabledLocations: {
                    label: "Deaktiverede steder",
                    description: "ID'er på kanaler/servere hvor funktionen skal være deaktiveret."
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Lad det sne på Discord!",
            about: {
                title: "Information",
                paragraph: "Dette plugin tilføjer en hyggelig sne-effekt over Discords brugerflade.",
                note: "BEMÆRK: Selvom dette plugin kører fint på de fleste computere, kan det medføre lag på ældre systemer."
            },
            option: {
                typeOfSnow: {
                    label: "Type af sne",
                    description: "Skift snetypen (påvirker ydeevnen).",
                    solid: "Fast farve (Højeste ydeevne)",
                    text: "Tekst (Medium ydeevne)",
                    emoji: "Billede (Laveste ydeevne)"
                },
                maxSize: {
                    label: "Maks. størrelse",
                    description: "Maksimal størrelse på snefnug"
                },
                speed: {
                    label: "Hastighed",
                    description: "Faldhastighed (højere = hurtigere)"
                },
                flakesPerSecond: {
                    label: "Fnug pr. sekund",
                    description: "Hvor tæt det skal sne"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Sorterer venneanmodninger efter modtagelsesdato",
            tooltip: "Tilføjet &mdash; {{date}}",
            option: {
                showDates: {
                    label: "Vis datoer",
                    description: "Vis dato på venneanmodninger"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Logger alle lyde fra soundboards der afspilles i stemmechat og lader dig downloade dem",
            tooltip: "Åbn SoundBoard-log",
            option: {
                savedIds: {
                    label: "Gemte lyde-ID'er",
                    description: "Hvor mange lyde der skal gemmes i loggen ad gangen (0 = uendeligt)",
                    notNumber: "Værdien er ikke et tal.",
                    cantDecimal: "Værdien kan ikke være et decimaltal.",
                    cantNegative: "Værdien kan ikke være negativ.",
                    heading: "Antal lyde i loggen",
                    warning: "Advarsel! Hvis du sætter tallet lavere, nulstilles loggen!",
                    placeholder: "Indtast et tal"
                },
                fileType: {
                    label: "Filtype",
                    description: "Formatet lyden skal gemmes i"
                },
                openLogs: {
                    label: "Åbn log",
                    description: "Vis loggen",
                    button: "Åbn log"
                },
                soundVolume: {
                    label: "Lydstyrke",
                    description: "Lydstyrke for kontrollyden (0 for deaktiveret)"
                },
                iconLocation: {
                    label: "Ikon-placering",
                    description: "Hvor ikonet skal vises (kræver genstart)",
                    toolbar: "Værktøjslinje",
                    chatInput: "Chatfelt"
                }
            },
            modal: {
                title: "SoundBoard-log",
                loading: "Indlæser lyde...",
                noLogs: "Ingen lyde logget endnu. Deltag i en stemmechat for at starte!",
                clearLogs: "Ryd log",
                played: "Afspillet {{time}} gang{{s}}",
                last: "Sidst afspillet:",
                also: "Også afspillet af:",
                download: "Download",
                copyId: "Kopier ID",
                copied: "ID kopieret til udklipsholder!",
                playSound: "Afspil lyd",
                moreUsers: "Andre brugere brugte denne lyd...",
                volume: "Lydstyrke for Soundboard"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Opdeler store beskeder i flere dele, så de passer til Discords grænse.",
            option: {
                maxLength: {
                    label: "Maks. beskedlængde",
                    description: "Maksimal længde før opdeling (0 = automatisk)."
                },
                disableFileConversion: {
                    label: "Deaktiver fil-konvertering",
                    description: "Forhindrer at store beskeder bliver lavet om til .txt filer."
                },
                sendDelay: {
                    label: "Forsinkelse ved afsendelse",
                    description: "Pause mellem hver del i sekunder."
                },
                hardSplit: {
                    label: "Hård opdeling",
                    description: "Hvis aktiveret, opdeles der præcis ved tegngrænsen i stedet for ved mellemrum."
                },
                splitInSlowmode: {
                    label: "Opdel i slowmode",
                    description: "Skal beskeder opdeles selvom kanalen har slowmode?"
                },
                slowmodeMax: {
                    label: "Slowmode maks.",
                    description: "Maksimal slowmode-tid hvor opdeling stadig er tilladt."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Tilføjer en knap til at slå synlighed af Spotify-aktivitet til/fra.",
            tooltip: {
                enable: "Slå Spotify-aktivitet til",
                disable: "Slå Spotify-aktivitet fra"
            },
            option: {
                location: {
                    label: "Placering",
                    description: "Hvor knappen skal vises",
                    panel: "Ved siden af Mute/Deafen",
                    toolbox: "Plexcord-værktøjskasse"
                },
                activityStatus: {
                    label: "Aktivitetsstatus",
                    description: "Nuværende status for din Spotify-aktivitet"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Gratis 'Listen Along', ingen auto-pause i stemmechat, og lader aktiviteten fortsætte selvom du er inaktiv",
            option: {
                noSpotifyAutoPause: {
                    label: "Ingen auto-pause",
                    description: "Deaktiver at Spotify pauser når du taler."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Behold aktivitet ved inaktivitet",
                    description: "Lad Spotify-status blive stående selvom du er Idle"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Del din nuværende sang, album eller kunstner via kommandoer (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Del din Spotify-{{type}} i chatten",
                    track: "Du lytter ikke til noget på Spotify.",
                    find: "Kunne ikke finde sangen på Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Tilføjer statistikker over opstartstid til indstillingerne",
            modal: {
                title: "Opstartstider",
                ended: "Trace sluttede kl.:",
                start: "Start",
                interval: "Interval",
                delta: "Forskel (Delta)",
                event: "Begivenhed",
                serverTrace: "Server-trace",
                loading: "Indlæser..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Giver besked når udvalgte brugeres status ændres",
            loading: "Indlæser...",
            option: {
                notificationsSound: {
                    label: "Notifikationslyd",
                    description: "Afspil lyd ved statusændringer"
                },
                usersList: {
                    label: "Brugerliste",
                    description: "Hvilke brugere der skal overvåges",
                    empty: "Ingen brugere overvåges. Højreklik på en bruger og vælg 'Status Notifications' for at tilføje dem."
                }
            },
            context: {
                label: "Statusnotifikationer",
                notifications: "Notifikationer",
                type: {
                    all: "Alle",
                    online: "Online",
                    offline: "Offline",
                    none: "Ingen"
                }
            },
            notification: {
                unknownUser: "Bruger",
                title: "Statusændring"
            },
            status: {
                online: "Online",
                idle: "Inaktiv",
                dnd: "Vil ikke forstyrres",
                offline: "Offline",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Gem dine statusser som skabeloner og skift hurtigt mellem dem",
            button: {
                remember: "Husk status"
            },
            context: {
                edit: "Rediger skabeloner",
                set: "Sæt brugerdefineret status"
            },
            notification: {
                successfully: "Status gemt med succes"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Synkroniser din Discord-status til Steam! (Online, Away, Invisible, eller Offline.)",
            option: {
                onlineStatus: {
                    label: "Online status",
                    description: "Steam-status når du er Online"
                },
                idleStatus: {
                    label: "Inaktiv status",
                    description: "Steam-status når du er Idle"
                },
                dndStatus: {
                    label: "Vil ikke forstyrres status",
                    description: "Steam-status når du er på DND"
                },
                invisibleStatus: {
                    label: "Usynlig status",
                    description: "Steam-status når du er Usynlig"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Usynlig hvis aktivitet er skjult",
                    description: "Sæt Steam-status til Usynlig hvis Discord-aktivitet er skjult"
                }
            },
            status: {
                online: "Online",
                away: "Away (Væk)",
                invisible: "Invisible (Usynlig)",
                offline: "Offline (Log af Steam Chat)",
                disabled: "Deaktiveret"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Giver dig mulighed for at blokere specifikke stickers.",
            option: {
                showGif: {
                    label: "Vis GIF",
                    description: "Vis en sjov katte-GIF i stedet for klistermærket."
                },
                showMessage: {
                    label: "Vis besked",
                    description: "Vis info om hvilket ID der blev blokeret"
                },
                showButton: {
                    label: "Vis knap",
                    description: "Vis en knap til at ophæve blokeringen"
                },
                blockedStickers: {
                    label: "Blokerede stickers",
                    description: "Listen over blokerede ID'er (rediger kun hvis du ved hvad du gør)"
                }
            },
            modal: {
                blocked: "Blokeret sticker. ID: {{id}} NAVN: {{name}}",
                unblock: "Fjern blokering af {{name}}"
            },
            context: {
                blockSticker: "Bloker sticker",
                unblockSticker: "Fjern blokering af sticker"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Gør at valg af en sticker indsætter den i chatfeltet i stedet for at sende den med det samme"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Aktiverer automatisk Streamer-tilstand når du starter med at streame i Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Deaktiver specifikke codecs til streaming",
            option: {
                disableAv1Codec: {
                    label: "Deaktiver AV1 Codec",
                    description: "Forhindrer Discord i at bruge AV1 til streaming."
                },
                disableH265Codec: {
                    label: "Deaktiver H265 Codec",
                    description: "Forhindrer Discord i at bruge H265 til streaming."
                },
                disableH264Codec: {
                    label: "Deaktiver H264 Codec",
                    description: "Forhindrer Discord i at bruge H264 til streaming."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Tilpas grænsen for Super-reaktioner og vælg Super-reaktioner som standard",
            option: {
                superReactByDefault: {
                    label: "Super-reaktion som standard",
                    description: "Reaktions-menuen vil starte på Super-reaktioner"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Ubegrænset afspilning",
                    description: "Fjern grænsen for hvor mange Super-reaktioner der kan afspilles samtidigt"
                },
                superReactionPlayingLimit: {
                    label: "Grænse for afspilning",
                    description: "Maks. antal Super-reaktioner der afspilles på én gang. Sæt til 0 for at deaktivere afspilning"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Erstat tekst i dine beskeder automatisk. Du kan finde færdige regler i Plexcord-serveren.",
            option: {
                replace: {
                    label: "Erstat",
                    string: "Simple udskiftninger",
                    stringDescription: "Simple find-og-erstat-regler. For eksempel: find 'brb' og erstat det med 'be right back'.",
                    regex: "Regex-udskiftninger",
                    regexDescription: "Mere avancerede udskiftninger ved hjælp af regulære udtryk (Regular Expressions). Denne sektion er for avancerede brugere. Hvis du ikke forstår det, kan du bare ignorere det.",
                    myMessages: "Anvend på dine beskeder (synligt for alle)",
                    othersMessages: "Anvend på andres beskeder (kun synligt for dig)",
                    allMessages: "Anvend på alle beskeder"
                },
                stringRules: {
                    label: "Tekstregler",
                    description: "Regler for tekst-erstatning."
                },
                regexRules: {
                    label: "Regex-regler",
                    description: "Regler ved brug af regulære udtryk."
                }
            },
            modal: {
                title: "Test regler",
                find: "Find",
                findRegex: "Regex-mønster",
                findText: "Tekst der skal erstattes",
                replace: "Erstat",
                replaceDescription: "Teksten der skal erstatte den fundne tekst",
                includes: "Kun hvis indeholder",
                includesDescription: "Denne regel anvendes kun hvis beskeden indeholder denne tekst. Dette er valgfrit",
                type: "Skriv en besked",
                applied: "Besked med regler anvendt",
                delete: "Slet regel",
                add: "Tilføj regel",
                empty: "Tom regel",
                rule: "Regel",
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Tilføjer data-attributter til forskellige elementer for at hjælpe med styling af temaer"
        },
        timezones: {
            name: "Timezones",
            description: "Viser brugeres lokal tid i profiler og beskedhoveder",
            button: {
                wantToSave: "Vil du gemme din tidszone i databasen? Klik her.",
                yourLocalTimezone: "(Din lokale tidszone)"
            },
            context: {
                set: "Sæt lokal tidszone"
            },
            toast: {
                refresh: {
                    successfully: "Tidszoner opdateret!",
                    failed: "Kunne ikke opdatere tidszoner!",
                    failedTo: "Opdatering af tidszoner mislykkedes."
                },
                update: {
                    successfully: "Tidszone opdateret!",
                    failed: "Kunne ikke sætte tidszone."
                },
                delete: {
                    successfully: "Tidszone slettet!",
                    failed: "Kunne ikke slette tidszone."
                },
                auth: {
                    failed: "Godkendelse mislykkedes.",
                    success: "Godkendelse gennemført!"
                }
            },
            toolbox: {
                set: "Sæt database-tidszone",
                refresh: "Opdater database-tidszoner"
            },
            option: {
                showOwnTimezone: {
                    label: "Vis egen tidszone",
                    description: "Vis din egen tidszone i profiler"
                },
                twentyFourHourTime: {
                    label: "24-timers ur",
                    description: "Vis tid i 24-timers format"
                },
                showTimezoneInfo: {
                    label: "Vis tidszone-info",
                    description: "Vis tidszonens navn ved siden af tiden"
                },
                showMessageHeaderTime: {
                    label: "Vis tid i beskedhoved",
                    description: "Vis lokal tid ved siden af afsenderens navn"
                },
                showProfileTime: {
                    label: "Vis tid på profil",
                    description: "Vis lokal tid i brugerprofiler"
                },
                useDatabase: {
                    label: "Brug database-tidszone",
                    description: "Hent tidszoner fra databasen"
                },
                preferDatabaseOverLocal: {
                    label: "Foretræk database frem for lokal",
                    description: "Brug databasen som primær kilde"
                },
                databaseUrl: {
                    label: "Database-URL",
                    description: "URL til tidszone-serveren"
                },
                setDatabaseTimezone: {
                    label: "Sæt database-tidszone",
                    description: "Gem din tidszone på serveren",
                    setTimezone: "Gem tidszone"
                },
                resetDatabaseTimezone: {
                    label: "Nulstil database-tidszone",
                    description: "Slet din tidszone fra serveren",
                    failed: "Nulstilling mislykkedes"
                },
                askedTimezone: {
                    label: "Er blevet spurgt",
                    description: "Om brugeren er blevet bedt om at sætte sin tidszone"
                }
            },
            modal: {
                title: "Tidszoner",
                select: "Vælg tidszone",
                selectPlaceholder: "Vælg en tidszone fra listen",
                delete: "Slet tidszone",
                save: "Gem"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Viser en toast-notifikation når du modtager en direkte besked.",
            notification: {
                call: "Startede et opkald med dig!",
                recipient: {
                    add: "{{target}} blev tilføjet til gruppen af {{actor}}.",
                    remove: "{{target}} blev fjernet fra gruppen af {{actor}}.",
                    left: "Forlod gruppen."
                },
                channel: {
                    change: {
                        name: "Ændrede kanalens navn til {{name}}.",
                        icon: "Ændrede kanalens ikon."
                    },
                    pinned: "Fastgjorde en besked."
                },
                sent: {
                    embed: "Sendte et embed.",
                    sticker: "Sendte en sticker.",
                    attachment: "Vedhæftning:"
                },
                redacted: "Beskedens indhold er blevet fjernet.",
                friend: {
                    accept: "{{user}} er nu din ven",
                    acceptBody: "Du kan nu sende direkte beskeder.",
                    request: "{{user}} har sendt dig en venneanmodning.",
                    requestBody: "Du kan acceptere eller afvise den under Venner."
                },
                example: {
                    title: "Eksempel på notifikation",
                    body: "Dette er et eksempel på indholdet i en notifikation."
                }
            },
            modal: {
                dismiss: "Luk notifikation",
                attachments: "{{attachments}} vedhæftning{{s}} {{were}} sendt."
            },
            option: {
                position: {
                    label: "Position",
                    description: "Hvor på skærmen notifikationen skal vises",
                    topRight: "Øverst til højre",
                    topLeft: "Øverst til venstre",
                    bottomRight: "Nederst til højre",
                    bottomLeft: "Nederst til venstre"
                },
                timeout: {
                    label: "Varighed",
                    description: "Hvor mange sekunder notifikationen vises"
                },
                opacity: {
                    label: "Gennemsigtighed",
                    description: "Hvor gennemsigtig notifikationen skal være"
                },
                determineServerNotifications: {
                    label: "Følg serverindstillinger",
                    description: "Vis kun notifikationer hvis de også er tilladt af serverens indstillinger"
                },
                directMessages: {
                    label: "Direkte beskeder",
                    description: "Vis notifikationer for DM'er"
                },
                groupMessages: {
                    label: "Gruppebeskeder",
                    description: "Vis notifikationer for gruppechats"
                },
                friendServerNotifications: {
                    label: "Venner på servere",
                    description: "Giv besked når venner skriver på fælles servere"
                },
                friendActivity: {
                    label: "Venneaktivitet",
                    description: "Giv besked ved nye venner eller anmodninger"
                },
                notifyFor: {
                    label: "Giv besked for",
                    description: "Liste over kanal-ID'er der altid skal give besked (adskilt af komma)"
                },
                ignoreUsers: {
                    label: "Ignorer brugere",
                    description: "Liste over bruger-ID'er der aldrig skal give besked"
                },
                exampleButton: {
                    label: "Eksempel-knap",
                    description: "Vis en test-notifikation.",
                    show: "Vis test-notifikation"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Tilføjer en genvejstast til at tænde/slukke for webkameraet.",
            option: {
                keyBind: {
                    label: "Genvejstast",
                    description: "Tasten der skal trykkes på."
                },
                reqCtrl: {
                    label: "Kræv Ctrl",
                    description: "Ctrl skal holdes nede."
                },
                reqShift: {
                    label: "Kræv Shift",
                    description: "Shift skal holdes nede."
                },
                reqAlt: {
                    label: "Kræv Alt",
                    description: "Alt skal holdes nede."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Oversæt beskeder med Google Translate eller DeepL",
            tooltip: {
                label: "Oversæt"
            },
            context: {
                translate: "Oversæt",
                open: "Åbn oversættelsesvindue",
                auto: "Auto-oversættelse aktiveret"
            },
            option: {
                receivedInput: {
                    label: "Modtaget sprog (fra)",
                    description: "Sproget som indkommende beskeder skal oversættes fra"
                },
                receivedOutput: {
                    label: "Modtaget sprog (til)",
                    description: "Sproget som indkommende beskeder skal oversættes til"
                },
                sentInput: {
                    label: "Afsendt sprog (fra)",
                    description: "Sproget som dine egne beskeder skal oversættes fra"
                },
                sentOutput: {
                    label: "Afsendt sprog (til)",
                    description: "Sproget som dine egne beskeder skal oversættes til"
                },
                service: {
                    label: "Oversættelsestjeneste",
                    description: "DeepL kræver en API-nøgle fra DeepL Pro",
                    descriptionWeb: "Tjeneste (Ikke understøttet på Web!)",
                    google: "Google Translate",
                    deepl: "DeepL Free",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "DeepL API-nøgle",
                    description: "Din DeepL API-nøgle",
                    placeholder: "Hent din nøgle på https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Auto-oversæt",
                    description: "Oversæt automatisk dine beskeder før de sendes. Kan også skiftes ved Shift/højreklik på oversæt-knappen"
                },
                showAutoTranslateTooltip: {
                    label: "Vis værktøjstip ved auto-oversæt",
                    description: "Vis en lille info når en besked automatisk oversættes"
                }
            },
            modal: {
                title: "Oversæt",
                select: "Vælg et sprog",
                auto: "Auto-oversæt",
                dismiss: "Luk",
                translated: "oversat fra {{from}}",
                failed: {
                    to: "Kunne ikke oversætte {{text}}",
                    connect: "Kunne ikke forbinde til DeepL API:"
                },
                wrong: "Noget gik galt. Tjek konsollen eller support-serveren.",
                deepl: {
                    api: "DeepL kvote overskredet. Bruger Google Translate i stedet.",
                    apiKey: "DeepL API-nøgle mangler. Skifter til Google",
                    auth: "Ugyldig DeepL API-nøgle eller version"
                },
                autoTranslateEnabled: {
                    title: "Plexcord Auto-oversættelse aktiveret",
                    body: "Du har lige aktiveret auto-oversættelse! Alle beskeder vil blive oversat automatisk før afsendelse.",
                    confirm: "Deaktiver auto-oversættelse",
                    cancel: "Forstået",
                    secondaryConfirm: "Vis ikke igen"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Tilføjer en indikator i kanallisten hvis nogen skriver.",
            option: {
                includeCurrentChannel: {
                    label: "Inkluder nuværende kanal",
                    description: "Vis indikatoren for den kanal du kigger i lige nu"
                },
                includeMutedChannels: {
                    label: "Inkluder lydløse kanaler",
                    description: "Vis indikatoren for kanaler der er på lydløs."
                },
                includeIgnoredUsers: {
                    label: "Inkluder ignorerede brugere",
                    description: "Vis indikatoren for brugere du har ignoreret."
                },
                includeBlockedUsers: {
                    label: "Inkluder blokerede brugere",
                    description: "Vis indikatoren for brugere du har blokeret."
                },
                indicatorMode: {
                    label: "Visningstilstand",
                    description: "Hvordan skal indikatoren se ud?",
                    both: "Avatarer og animerede prikker",
                    dots: "Animerede prikker",
                    avatars: "Avatarer"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Vis avatarer og rollefarver i skrive-indikatoren i bunden af chatten",
            option: {
                showAvatars: {
                    label: "Vis flere brugere",
                    description: "Vis avatarer i skrive-indikatoren"
                },
                showRoleColors: {
                    label: "Vis rollefarver",
                    description: "Brug rollefarver til brugernavne i indikatoren"
                },
                alternativeFormatting: {
                    label: "Alternativ formatering",
                    description: "Vis en mere brugbar besked når flere brugere skriver"
                },
                amITyping: {
                    label: "Skriver jeg?",
                    description: "Viser dig om andre kan se at du skriver"
                }
            },
            others: {
                areTyping: "og {{count}} andre skriver..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Fjerner overflødige indrykninger (spaces) i starten af linjer i kodefelter"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Konverterer metriske enheder til britiske/amerikanske (Imperial) og omvendt",
            tooltip: "Konverter enheder",
            option: {
                myUnits: {
                    label: "Mine enheder",
                    description: "Enhederne du bruger og ønsker ting konverteret til.",
                    imperial: "Britiske/Amerikanske (Imperial)",
                    metric: "Metriske (Metric)"
                }
            },
            button: {
                dismiss: "Luk"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Øger antallet af konti du kan tilføje til Discord.",
            option: {
                maxAccounts: {
                    label: "Maks. konti",
                    description: "Antal konti der kan tilføjes (0 = ingen grænse)"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Giver dig mulighed for at zoome længere ind i beskæringsværktøjet, når du skifter avatar",
            option: {
                zoomMultiplier: {
                    label: "Zoom-multiplikator",
                    description: "Hvor meget ekstra der kan zoomes"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Giver dig mulighed for at gendanne embeds, der er blevet skjult",
            context: {
                unsuppress: "Gendan Embed",
                suppress: "Skjul Embed"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Viser tilfældig og ligegyldig information i Discord.",
            recording: "Optager...",
            record: "Optag",
            option: {
                delay: {
                    label: "Interval for notifikationer",
                    description: "Hvor ofte fakta skal vises (i minutter)"
                },
                historyHotkey: {
                    label: "Genvej til historik",
                    description: "Genvejstast til at se tidligere viste fakta"
                },
                randomFactHotkey: {
                    label: "Genvej til tilfældig fakta",
                    description: "Genvejstast til at åbne fakta-panelet"
                },
                sameFact: {
                    label: "Undgå gentagelser",
                    description: "Vis ikke det samme før alle fakta har været vist"
                },
                lastNFacts: {
                    label: "Antal seneste der skal undgås",
                    description: "Hvor mange af de seneste fakta der ikke må gentages (0 = alle)"
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Ingen fakta endnu. Vent eller brug genvejen.",
                    source: "Kilde"
                },
                showRandom: "Vis tilfældig",
                close: "Luk"
            },
            notification: {
                title: "Vidste du det?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Viser brugeres pronominer (stedord) i beskedhoveder",
            option: {
                pronounsFormat: {
                    label: "Format for pronominer",
                    description: "Hvordan de skal vises i chatten",
                    lowercase: "små bogstaver",
                    capitalized: "Stort begyndelsesbogstav"
                },
                showSelf: {
                    label: "Vis egne",
                    description: "Vis eller skjul dine egne pronominer"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Viser en indikator når en bruger befinder sig i en stemmekanal",
            option: {
                showInUserProfileModal: {
                    label: "Vis i profilvindue",
                    description: "Vis indikatoren ved siden af navnet på brugerens profil"
                },
                showInMemberList: {
                    label: "Vis i medlemsliste",
                    description: "Vis indikatoren i medlemslisten og DM-listen"
                },
                showInMessages: {
                    label: "Vis i beskeder",
                    description: "Vis indikatoren direkte ved siden af navnet i chatten"
                }
            },
            modal: {
                inVoiceChat: "I stemmekanal"
            },
            notification: {
                cannotJoin: "Du kan ikke deltage i denne stemmekanal."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Viser brugerbannere fra USRBG-databasen, så alle kan få et banner uden Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro først",
                    description: "Hvilket banner der skal vises, hvis brugeren har begge dele",
                    nitro: "Nitro-banner",
                    usrbg: "USRBG-banner"
                },
                voiceBackground: {
                    label: "Stemme-baggrund",
                    description: "Brug USRBG-bannere som baggrund i stemmechat"
                }
            },
            button: "Få dit eget USRBG-banner"
        },
        validReply: {
            name: "ValidReply",
            description: "Retter fejlen 'Message could not be loaded', når man holder musen over et svar."
        },
        validUser: {
            name: "ValidUser",
            description: "Retter mentions for ukendte brugere, der vises som '@unknown-user' (hold musen over en mention for at rette den).",
            badges: {
                discordBugHunter: "Discord Bug Hunter",
                moderatorProgramsAlumni: "Moderator Programs Alumni",
                discordStaff: "Discord Staff",
                hypeSquadEvents: "HypeSquad Events",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                partneredServerOwner: "Partnered Server Owner",
                nitro: "Discord Nitro",
                earlySupporter: "Early Supporter",
                earlyVerifiedBotDeveloper: "Early Verified Bot Developer"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Deltag i stemmechat via dobbeltklik i stedet for enkeltklik."
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Oplæser via en fortællerstemme (narrator), når brugere tilslutter, forlader eller flytter stemmekanaler.",
            option: {
                voice: {
                    label: "Stemme"
                },
                volume: {
                    label: "Lydstyrke",
                    description: "Fortællerens lydstyrke"
                },
                rate: {
                    label: "Hastighed",
                    description: "Fortællerens talehastighed"
                },
                sayOwnName: {
                    label: "Sig eget navn",
                    description: "Oplæs også dit eget navn"
                },
                latinOnly: {
                    label: "Kun latinske tegn",
                    description: "Fjern ikke-latinske tegn fra navne før oplæsning"
                },
                joinMessage: {
                    label: "Besked ved tilslutning",
                    description: "Besked der oplæses når nogen deltager"
                },
                leaveMessage: {
                    label: "Besked ved afgang",
                    description: "Besked der oplæses når nogen forlader"
                },
                moveMessage: {
                    label: "Besked ved flytning",
                    description: "Besked der oplæses når nogen skifter kanal"
                },
                muteMessage: {
                    label: "Besked ved mute",
                    description: "Besked ved mute (kun for dig selv i øjeblikket)"
                },
                unmuteMessage: {
                    label: "Besked ved unmute",
                    description: "Besked ved unmute (kun for dig selv i øjeblikket)"
                },
                deafenMessage: {
                    label: "Besked ved deafen",
                    description: "Besked ved deafen (kun for dig selv i øjeblikket)"
                },
                undeafenMessage: {
                    label: "Besked ved undeafen",
                    description: "Besked ved undeafen (kun for dig selv i øjeblikket)"
                }
            },
            modal: {
                title: "Afspil eksempel-lyde",
                voiceTitle: "Stemme",
                voice: "Vælg en stemme",
                languageTitle: "Sprog",
                language: "Vælg et sprog",
                noVoice: "Ingen fortællerstemmer fundet. ",
                linuxNote: "Installer speech-dispatcher eller espeak og kør Discord med flaget --enable-speech-dispatcher",
                someNarrator: "Prøv at installere nogle i dit operativsystems indstillinger for Narrator/Oplæser",
                dontHaveEnglish: "Du har ikke installeret engelske stemmer, så fortælleren kan lyde mærkelig",
                customiseMessages: "Du kan tilpasse de oplæste beskeder nedenfor. Deaktiver specifikke beskeder ved at lade dem være tomme",
                placeholdersInfo: "Pladsholderne {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} og {{CHANNEL}} vil blive erstattet med henholdsvis brugerens navn, visningsnavn, kaldenavn og kanalens navn."
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Gør avatarer og bannere i brugerprofiler klikbare, og tilføjer 'Vis Avatar/Banner' i kontekstmenuer for brugere, servere og grupper.",
            context: {
                view: {
                    avatar: "Vis Avatar",
                    serverAvatar: "Vis Server-avatar",
                    icon: "Vis Ikon",
                    banner: "Vis Banner"
                }
            },
            option: {
                format: {
                    label: "Format",
                    description: "Vælg billedformat for ikke-animerede billeder. Animerede billeder vil altid bruge .gif"
                },
                imgSize: {
                    label: "Billedstørrelse",
                    description: "Den billedstørrelse der skal bruges"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Kopier og se rå indhold/data for enhver besked, kanal eller server",
            context: {
                copyLeft: "Kopier rå (Venstreklik) / Vis rå (Højreklik)",
                copyRight: "Kopier rå (Højreklik) / Vis rå (Venstreklik)",
                view: "Vis rå data"
            },
            option: {
                popoverButton: {
                    label: "Popover-knap",
                    description: "Vis en knap i beskedmenuen for at se beskedens rå data."
                },
                clickMethod: {
                    label: "Klik-metode",
                    description: "Skift hvordan knappen til rå data fungerer.",
                    left: "Venstreklik for at se råt indhold.",
                    right: "Højreklik for at se råt indhold."
                }
            },
            modal: {
                title: "Vis rå data",
                content: "Indhold",
                data: "{{type}} Data",
                copied: "{{type}} data kopieret til udklipsholder!",
                copy: "Kopier {{type}} JSON",
                copiedContent: "Indhold kopieret til udklipsholder!",
                copyContent: "Kopier råt indhold"
            },
            types: {
                message: "Besked",
                channel: "Kanal",
                guild: "Server",
                role: "Rolle",
                user: "Bruger"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Hurtig adgang til DM, mute eller deafen for enhver bruger direkte fra stemme-panelet.",
            option: {
                showChatButton: {
                    label: "Vis Chat-knap",
                    description: "Om du vil have vist chat-knappen"
                },
                showMuteButton: {
                    label: "Vis Mute-knap",
                    description: "Om du vil have vist mute-knappen"
                },
                showDeafenButton: {
                    label: "Vis Deafen-knap",
                    description: "Om du vil have vist deafen-knappen"
                },
                muteSoundboard: {
                    label: "Mute Soundboard",
                    description: "Slår deres soundboard fra når du trykker på Deafen-knappen."
                },
                disableVideo: {
                    label: "Deaktiver Video",
                    description: "Slår deres video fra når du trykker på Deafen-knappen."
                },
                useServer: {
                    label: "Brug Server-indstilling",
                    description: "Brug server-mute/deafen i stedet for lokal, hvis du har tilladelse til det."
                },
                serverSelf: {
                    label: "Server-selv",
                    description: "Døv/Mute dig selv på server-niveau når du bruger knapperne."
                },
                showButtonsSelf: {
                    label: "Vis knapper på dig selv",
                    description: "Om du vil se knapperne på din egen bruger i listen.",
                    display: "Vis",
                    hide: "Skjul",
                    disable: "Deaktiver"
                },
                whichNameToShow: {
                    label: "Hvilket navn skal vises",
                    description: "Vælg om kaldenavn eller brugernavn skal vises i værktøjstippet.",
                    global: "Globalt navn",
                    username: "Brugernavn",
                    both: "Begge dele"
                },
                buttonPosition: {
                    label: "Knap-position",
                    description: "Vælg hvor knapperne skal placeres.",
                    left: "Venstre",
                    right: "Højre",
                }
            },
            tooltip: {
                navigate: "Gå til DM'er",
                open: "Åbn DM med {{username}}",
                yourself: "dig selv",
                serverMute: "Server-mute",
                serverDeafen: "Server-deafen",
                mute: "Mute",
                deafen: "Deafen",
                unmute: "Unmute",
                undeafen: "Undeafen",
                serverUnmute: "Fjern server-mute",
                serverUndeafen: "Fjern server-deafen"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Logger hvem der tilslutter og forlader stemmekanaler",
            context: {
                view: "Vis kanallog"
            },
            modal: {
                joined: "Deltog i <#{{channel}}>",
                left: "Forlod <#{{channel}}>",
                movedTo: "Flyttede til <#{{channel}}>",
                movedFrom: "Flyttede fra <#{{channel}}>",
                noLogs: "Ingen logposter at vise.",
                logs: "{{channel}} log"
            },
            option: {
                mode: {
                    label: "Tilstand",
                    description: "Hvordan loggen skal vises",
                    menu: "Log-menu",
                    associated: "Log direkte til den tilknyttede chat",
                    both: "Både chat og menu"
                },
                voiceChannelChatSelf: {
                    label: "Log dig selv",
                    description: "Log dine egne bevægelser i stemmekanalerne"
                },
                voiceChannelChatSilent: {
                    label: "Lydløs log i chat",
                    description: "Beskeder i chatten vil være lydløse (uden notifikation)"
                },
                voiceChannelChatSilentSelf: {
                    label: "Lydløs log for dig selv",
                    description: "Log-beskeder vil være lydløse hvis du selv er i kanalen"
                },
                ignoreBlockedUsers: {
                    label: "Ignorer blokerede brugere",
                    description: "Log ikke hændelser fra blokerede brugere"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Dette plugin lader dig udføre handlinger på en hel kanal på én gang (flyt, mute, afbryd osv.).",
            option: {
                waitAfter: {
                    label: "Vent efter handling",
                    description: "Antal handlinger før en pause indlægges (for at undgå rate limits)"
                },
                waitSeconds: {
                    label: "Ventetid i sekunder",
                    description: "Tid der ventes mellem hver handling (i sekunder)"
                }
            },
            context: {
                voiceTools: "Stemme-værktøjer",
                mentionAll: "Mention alle brugere",
                disconnectAll: "Afbryd alle",
                muteAll: "Mute alle",
                unmuteAll: "Unmute alle",
                deafenAll: "Deafen alle",
                undeafenAll: "Undeafen alle",
                moveAll: "Flyt alle"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Tilføjer en download-mulighed til stemmebeskeder (åbner en ny fane).",
            context: {
                download: "Download stemmebesked"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Lader dig sende stemmebeskeder ligesom på mobil. Højreklik på upload-knappen for at starte.",
            option: {
                noiseSuppression: {
                    label: "Støjreduktion",
                    description: "Noise Suppression"
                },
                echoCancellation: {
                    label: "Ekko-annullering",
                    description: "Echo Cancellation"
                }
            },
            notification: {
                failed: {
                    upload: "Kunne ikke uploade stemmebesked.",
                    start: "Kunne ikke starte optagelse.",
                    finish: "Kunne ikke afslutte optagelse."
                }
            },
            context: {
                sendVoiceMessage: "Send stemmebesked",
                missingPermissions: "(Mangler tilladelser)"
            },
            modal: {
                record: "Optag stemmebesked",
                upload: "Upload fil",
                preview: "Forhåndsvisning",
                failed: "Kunne ikke læse lydfilen:",
                oggOpus: "Stemmebeskeder skal være OggOpus for at kunne afspilles på iOS. Denne fil er {{type}} og vil derfor ikke virke på iPhone/iPad.",
                fix: "For at fikse det, skal den konverteres til OggOpus, f.eks. via {{link}}",
                sending: "Sender stemmebesked... Vent venligst.",
                stop: "Stop optagelse",
                start: "Start optagelse",
                resume: "Genoptag optagelse",
                pause: "Pause optagelse",
                recording: "OPTAGER",
                send: "Send",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Lader dig sætte lydstyrken for brugere og streams højere end standard-maksimum.",
            option: {
                multiplier: {
                    label: "Multiplikator",
                    description: "Lydstyrke-multiplikator"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Genskabelse af det gamle 'DM wallpaper'-eksperiment. Sæt et baggrundsbillede for enhver kanal, bruger eller server.",
            option: {
                globalDefault: {
                    label: "Global standard",
                    description: "Sæt et standardbaggrundsbillede for alle kanaler."
                },
                stylingTips: {
                    label: "Styling-tips"
                }
            },
            context: {
                setWallpaper: "Sæt baggrundsbillede",
                removeWallpaper: "Fjern baggrundsbillede"
            },
            modal: {
                set: "Sæt baggrund",
                image: "Billed-URL",
                cancel: "Annuller",
                apply: "Anvend",
                global: {
                    set: "Sæt global baggrund",
                    remove: "Fjern global standardbaggrund",
                    reset: "Nulstil alle baggrundsdata"
                },
                web: {
                    info: "Du kan bruge lokale filer ved at lægge dem i din Plexcord theme-mappe og bruge URL'en plexcord:///themes/filnavn.ext",
                    open: "Åbn theme-mappe",
                    quickCSS: "Åbn QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Genskaber kontekstmenuer der mangler i web-versionen af Discord (Links, Billeder, Tekst-felter osv.).",
            option: {
                addBack: {
                    label: "Tilføj igen",
                    description: "Tilføj Discord-menuerne for billeder, links og chat-feltet igen."
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Genskaber genvejstaster der mangler i web-versionen (Ctrl+T, Ctrl+Tab osv.). Virker bedst i Plextron/Legcord."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Fjerner grænsen på 2500kbps bitrate for skærmdeling på Chromium- og Plextron-klienter.",
            option: {
                experimentalAV1Support: {
                    label: "Eksperimentel AV1-understøttelse",
                    description: "Aktiver AV1-codec. Kan give problemer som f.eks. streams der aldrig færdigindlæses."
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Viser avatarer på de brugere, der har reageret på en besked.",
            option: {
                avatarClick: {
                    label: "Avatar-klik",
                    description: "Gør det muligt at klikke på avatarer i reaktionerne."
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Hold musen over skærmdelings-ikonet for at se, hvem der ser med på din stream.",
            modal: {
                noSpectator: "Ingen tilskuere"
            },
            option: {
                showPanel: {
                    label: "Vis panel",
                    description: "Vis tilskuere under skærmdelings-panelet."
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Ændrer automatisk det første bogstav i hver sætning til stort.",
            option: {
                blockedWords: {
                    label: "Blokerede ord",
                    description: "Ord der ikke skal have stort begyndelsesbogstav (adskil med komma)."
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Sender Discord-notifikationer videre til XSOverlay, så de nemt kan ses i VR.",
            notification: {
                call: {
                    title: "{{user}} ringer til dig.",
                    content: "Indgående opkald"
                },
                message: {
                    reply: " (svar)",
                    embed: " [embed] ",
                    onlyEmbed: "Sendte besked-embed(s)",
                    sticker: " [sticker] ",
                    onlySticker: "Sendte en sticker",
                    image: "billede",
                    attachment: "vedhæftning"
                },
                test: {
                    title: "Hilsen fra Plexcord!",
                    content: "Dette er en test-notifikation! *Explode*",
                    button: "Send test-notifikation"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket Port",
                    description: "WebSocket port"
                },
                preferUDP: {
                    label: "Foretræk UDP",
                    description: "Aktiver hvis du bruger en ældre XSOverlay-version. Ignoreres på web."
                },
                botNotifications: {
                    label: "Bot-notifikationer",
                    description: "Tillad notifikationer fra bots"
                },
                serverNotifications: {
                    label: "Server-notifikationer",
                    description: "Tillad notifikationer fra servere"
                },
                dmNotifications: {
                    label: "DM-notifikationer",
                    description: "Tillad notifikationer fra direkte beskeder"
                },
                groupDmNotifications: {
                    label: "Gruppe-DM notifikationer",
                    description: "Tillad notifikationer fra gruppechats"
                },
                callNotifications: {
                    label: "Opkalds-notifikationer",
                    description: "Tillad notifikationer for opkald"
                },
                pingColor: {
                    label: "Farve på Ping",
                    description: "Farve for bruger-mentions"
                },
                channelPingColor: {
                    label: "Farve på kanal-ping",
                    description: "Farve for kanal-mentions"
                },
                soundPath: {
                    label: "Lyd-sti",
                    description: "Notifikationslyd (default/warning/error)"
                },
                timeout: {
                    label: "Varighed",
                    description: "Hvor længe notifikationen vises (sek)"
                },
                lengthBasedTimeout: {
                    label: "Længde-baseret varighed",
                    description: "Forlæng visningen baseret på beskedens længde"
                },
                opacity: {
                    label: "Gennemsigtighed",
                    description: "Notifikationens gennemsigtighed"
                },
                volume: {
                    label: "Lydstyrke",
                    description: "Lydstyrke"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Blokerer reklamer i YouTube-embeds og 'Watch Together'-aktiviteten via AdGuard."
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Tilføjer beskrivelser til YouTube-video embeds."
        },
    }
} as const;

export default translations;
