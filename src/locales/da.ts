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
        title: "indstillinger",
        language: {
            selector: {
                label: "Dil",
                description: "Vælg dit foretrukne sprog til Plexcord.",
                placeholder: "Vælg sprog"
            }
        },
        location: {
            label: "Indstillinger Placering",
            description: "Plexcord bestemmer, hvor indstillingssektionen skal placeres",
            top: "til toppen",
            nitro: {
                above: "På toppen af ​​nitro sektionen",
                below: "under nitrodelen"
            },
            activity: {
                above: "Over begivenhedsindstillinger",
                below: "Under Begivenhedsindstillinger"
            },
            bottom: "på højkant"
        },
        switches: {
            useQuickCss: {
                label: "Aktiver tilpasset CSS",
                description: "Indlæs tilpasset CSS fra QuickCSS-editoren. Dette giver dig mulighed for at tilpasse Discords udseende med dine egne stilarter."
            },
            enableReactDevtools: {
                label: "Aktiver React Developer Tools",
                description: "Aktiver udvidelsen React Developer Tools for at fejlsøge Discords React-komponenter. Nyttig til udvikling af plugin."
            },
            mainWindowFrameless: {
                label: "Deaktiver hovedvinduesramme",
                description: "Fjern den lokale vinduesramme for et renere udseende. Du kan stadig flytte vinduet ved at trække i titellinjeområdet."
            },
            frameless: {
                label: "Deaktiver vinduesramme",
                description: "Fjern den lokale vinduesramme for et renere udseende. Du kan stadig flytte vinduet ved at trække i titellinjeområdet."
            },
            winNativeTitleBar: {
                label: "Brug Windows' oprindelige titellinje i stedet for Discords brugerdefinerede titellinje",
                description: "Erstat Discords brugerdefinerede titellinje med standard Windows-titellinje. Dette kan forbedre kompatibiliteten med nogle vinduesstyringsværktøjer."
            },
            transparent: {
                label: "Aktiver vinduesgennemsigtighed",
                description: "Gør Discord-vinduet gennemsigtigt. Et tema, der understøtter gennemsigtighed, er påkrævet, ellers vil det ikke gøre noget.",
                isWindows: "Dette forhindrer vinduet i at ændre størrelse og forhindrer dig i at fastgøre vinduet til skærmens kanter.",
                notWindows: "Dette forhindrer vinduet i at blive ændret."
            },
            winCtrlQ: {
                label: "Gem Ctrl+Q genvej for at lukke Discord (alternativ til Alt+F4)",
                description: "Tilføj Ctrl+Q som en tastaturgenvej for at lukke Discord. Dette giver et alternativ til Alt+F4 for hurtigt at lukke applikationen."
            },
            disableMinSize: {
                label: "Deaktiver minimum vinduesstørrelse",
                description: "Tillad, at Discord-vinduet ændrer størrelsen mindre end standardminimumsstørrelsen. Nyttig til fliselægning af vinduesmanagere eller små skærme."
            }
        },
        quickActions: {
            title: "Hurtige transaktioner",
            description: "Almindelige operationer, du måske vil bruge ofte. Disse genveje giver hurtig adgang til ofte brugte funktioner uden at navigere i menuer.",
            notificationLog: "Notifikationslog",
            editQuickCSS: "QuickCSS-redigering",
            relaunchDiscord: "Genstart Discord",
            openSettingsFolder: "Åbn mappen Indstillinger",
            viewSourceCode: "Se kildekoden"
        },
        specialCards: {
            donations: {
                title: "Donationer",
                subtitle: "Tak for din donation!",
                description: "Du kan til enhver tid administrere dine privilegier ved at sende en besked til @mutanplex.",
                button: "Donation",
                invite: "Deltag i vores discord",
                invalid: "Ugyldigt eller udløbet invitationslink."
            },
            supportProject: {
                title: "Støt projektet",
                description: "Overvej venligst at støtte udviklingen af ​​Plexcord ved at donere!"
            },
            contributions: {
                title: "Bidrag",
                subtitle: "Tak for dit bidrag!",
                description: "Du har nu et fedt badge for at bidrage til Plexcord!",
                buttonTitle: "Se, hvad du har bidraget med"
            }
        },
        settingsSection: {
            title: "Indstillinger",
            description: "Konfigurer, hvordan Plexcord integrerer og opfører sig med Discord. Disse indstillinger påvirker udseendet og adfærden af ​​Discord-klienten.",
            hintParts: {
                prefix: "Ved at konfigurere {{pluginLink}}-indstillinger kan du tilpasse, hvor denne indstillingssektion vises i menuen Discord-indstillinger.",
                linkText: "Indstillinger plugin"
            }
        },
        notifications: {
            title: "Meddelelser",
            description: "Konfigurer, hvordan Plexcord håndterer meddelelser. Du kan tilpasse, hvornår og hvordan du modtager underretninger eller se en historik over tidligere meddelelser.",
            settings: "Notifikationsindstillinger",
            viewLog: "Se notifikationshistorik",
            permissions: {
                denied: {
                    title: "Skrivebordsmeddelelsestilladelse nægtet",
                    label: "Du har nægtet notifikationstilladelser. Skrivebordsmeddelelser virker ikke!"
                }
            },
            style: {
                label: "Meddelelsesstil",
                description: "Nogle plugins kan vise dig meddelelser. Disse kommer i to stilarter:",
                plexcord: "Plexcord-meddelelser",
                plexcordDesc: "Disse er notifikationer i appen",
                desktop: "Skrivebordsmeddelelser",
                desktopDesc: "Lokale skrivebordsmeddelelser (som når du får et ping)",
                onlyWhenNotFocused: "Brug kun skrivebordsmeddelelser, når Discord ikke er fokuseret",
                always: {
                    desktop: "Brug altid skrivebordsmeddelelser",
                    plexcord: "Brug altid Plexcord-meddelelser"
                }
            },
            positions: {
                label: "Notifikationsposition",
                right: {
                    bottom: "Nede til højre",
                    top: "Højre op"
                },
                left: {
                    bottom: "Nede til venstre",
                    top: "Op til venstre"
                }
            },
            missed: {
                label: "Antal ubesvarede meddelelser",
                description: "Når du igen fokuserer på Discord, vil en notifikation dukke op om eventuelle notifikationer, du gik glip af.",
                whileYou: "mens du er væk",
                count: "{{count}} meddelelser{{s}} modtaget",
                s: " "
            },
            timeout: {
                label: "Underretningstimeout",
                description: "Hvor længe underretninger forbliver på skærmen, før de automatisk forsvinder (i sekunder)"
            },
            logLimit: {
                label: "Notifikationsloggrænse",
                description: "Maksimalt antal meddelelser, der skal gemmes i meddelelsesloggen. Indstil til {{disable}} for at deaktivere notifikationslogning og indstil til {{unlimited}} for ikke automatisk at fjerne gamle notifikationer"
            },
            opacity: {
                label: "Opacitet",
                description: "Opacitet af meddelelser i appen"
            },
            maxNotifications: {
                label: "Maksimal meddelelse",
                description: "Maksimalt antal meddelelser, der skal vises samtidigt"
            },
            behavior: {
                label: "Underretningsadfærd",
            },
            disableInStreamerMode: {
                label: "Deaktiver i Broadcaster-tilstand",
                description: "Deaktiver meddelelser, mens du er i broadcaster-tilstand"
            },
            renderImages: {
                label: "Behandle billeder",
                description: "Gengiv billeder i meddelelser"
            },
            streamingTreatment: {
                label: "Broadcaster Mode Behavior",
                description: "Sådan håndterer du notifikationer, når du deler din skærm",
                normal: "Normal - Vis meddelelse normalt",
                noContent: "Intet indhold - Skjul underretningstekst",
                ignore: "Ignorer – Vis slet ikke meddelelser"
            },
        },
        macVibrancy: {
            title: "Vindues flimrende stil (genstart påkrævet)",
            description: "Tilpas macOS-vinduesflimmereffekt. Dette styrer sløringen og gennemsigtigheden i Discord-vinduet. En genstart er påkrævet for at ændringerne kan træde i kraft.",
            placeholder: "Vindues flimrende stil",
            style: {
                no: "ingen rystelser",
                underPage: "Nedenfor siden (vinduesfarvning)",
                content: "Indhold",
                window: "Vindue",
                selection: "Stemme",
                titlebar: "titellinje",
                header: "Titel",
                sidebar: "sidebjælke",
                tooltip: "værktøjsspids",
                menu: "menu",
                popover: "pop op vindue",
                fullscreenUI: "Fuld skærm UI (gennemsigtig, men lidt mat)",
                hud: "HUD (mest gennemsigtig)"
            }
        }
    },

    plugins: {
        title: "Plugins",
        new: "Ny",
        unknown: "Ukendt",
        noDescription: "Beskrivelse ikke tilgængelig.",
        restart: {
            apply: "Genstart for at anvende ændringer!",
            required: "Genstart påkrævet!",
            description: "Genstart nu for at anvende nye plugins og indstillinger",
            following: "Følgende plugins kræver en genstart:",
            fully: "Nogle plugins kræver en genstart for at være helt deaktiveret.",
            would: "Vil du genstarte?",
            remainingCount: "og {{count}} mere",
            resetDefault: "Nulstil til standardindstillinger",
            failed: "Kunne ikke initialisere afhængigheder:",
            button: {
                restart: "Genstart",
                later: "Så!",
                now: "Genstart nu",
                cancel: "Ophæve",
                disableWarning: "Deaktiver advarsler",
                disableAll: "Deaktiver alle",
                reset: "nulstilles",
                close: "Kvarter"
            }
        },
        contributor: {
            contributed: "bidraget",
            modal: {
                contributionsInfo: "{{userName}} {{contributionCount}} {{continuedLink}} ved at udvikle plugin.",
                noContributions: "{{userName}} har ikke udviklet nogen plugins endnu. Mest sandsynligt {{contributedLink}} på forskellige måder!"
            }
        },
        infoModal: {
            description: "Du kan få flere oplysninger om et plugin ved at trykke på tandhjuls- eller informationsikonet",
            settingsInfo: "Plugins med tandhjul har indstillinger, du kan ændre!",
            disableAll: "Deaktiver alle plugins"
        },
        error: {
            invalidInput: "Ugyldigt input er angivet",
            stopping: "Der opstod et problem med at stoppe {{plugin}}-pluginnet",
            starting: "Der var et problem med at initialisere pluginnet {{plugin}}",
            startDependency: "Der var et problem med at initialisere afhængigheder: {{failures}}",
            infoRender: "Der opstod en fejl under gengivelse af denne plugins tilpassede informationskomponent"
        },
        placeholder: {
            number: "Indtast et tal",
            select: "Vælg en mulighed",
            text: "Indtast en værdi"
        },
        excluded: {
            desktop: "Discord Desktop-app eller Plextron",
            discordDesktop: "Discord Desktop app",
            plextron: "Plextron applikation",
            web: "Plextron app og webversion af Discord",
            dev: "Udviklerversion af Plexcord"
        },
        search: {
            looking: "Er det det, du leder efter",
            onlyAvailable: "Kun tilgængelig her ->",
            noCriteria: "Der blev ikke fundet nogen plugins, der matcher dine søgekriterier"
        },
        required: {
            title: "Nødvendige plugins",
            this: "Dette plugin er påkrævet for at Plexcord kan fungere.",
            by: "Dette plugin er påkrævet for at følgende fungerer:"
        },
        dangerModal: {
            title: "Farlig handling",
            disablePlugins: "Deaktiver plugins",
            disableText: "Deaktiver alle",
            irreversible: "DENNE HANDLING KAN IKKE TILBAGES!",
            enableBack: "Er du helt sikker på, at du vil fortsætte? Du kan aktivere den igen senere.",
            undone: "Denne handling kan ikke fortrydes. Er du sikker?",
            resetDescription: "Du er ved at nulstille {{pluginName}} plugin-indstillingerne til deres standardværdier.",
            disable: "Du er ved at deaktivere {{enabledPlugins}} plugins!",
            confirmReset: "Bekræft og nulstil",
            cancel: "Ophæve",
            resetSettings: "Nulstil indstillinger",
            resetText: "nulstilles"
        },
        filters: {
            label: "Filtre",
            placeholder: "Søg efter plugins...",
            option: {
                all: "Alle",
                enabled: "Aktiv",
                disabled: "Handicappet",
                new: "ny",
                userplugins: "Bruger plugins",
                api: "API plugins"
            }
        },
        pluginModal: {
            noSettings: "Dette plugin har ikke indstillinger, som du kan ændre.",
            authors: "Forfattere",
            settings: "Indstillinger",
            successfulReset: "Indstillingerne for {{plugin}}-pluginet er blevet nulstillet.",
            enabledStock: "Aktive aktietilføjelser",
            totalStock: "Samlet lagertillæg",
            enabledUser: "Aktive bruger-plugins",
            totalUser: "Total brugertilføjelse",
            info: "Se flere oplysninger",
            source: "Se kildekoden"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API til at tilføje dekoratører til medlemslisten (både på servere og DM'er)",
                    messageAccessories: "API til at tilføje rekvisitter til beskeder",
                    messageDecorations: "API til at tilføje dekoratører til indlæg",
                    chatInputButtons: "API for at tilføje knap til chatindgang",
                    commands: "API påkrævet af alt, der bruger kommandoer",
                    contextMenu: "API til at tilføje/fjerne elementer fra kontekstmenuen",
                    dynamicImageModal: "Giver dig mulighed for at springe over bredden eller højden, når du åbner billedmodalen",
                    menuItemDemangler: "Gør Discord menupunkt mere læsbar",
                    messageEvents: "API påkrævet af alt, der bruger meddelelsesbegivenheder",
                    messagePopover: "API for at tilføje knap til popup-meddelelser",
                    messageUpdater: "API til opdatering og genbehandling af meddelelser",
                    nicknameIcons: "API til at tilføje ikoner til brugernavne i profiler",
                    notices: "Retter automatisk afvisning af meddelelser",
                    serverList: "API påkrævet for plugins, der ændrer serverlisten",
                    userSettings: "Patches til at afsløre Discords brugerindstillinger, grupper og navne",
                    audioPlayer: "API til afspilning af Discords interne lydfiler eller eksterne lydlinks.",
                    userArea: "API til at tilføje knapper til brugerområdepanel."
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
                    plexcord: "Plexcord-deltager",
                    vencord: "Vencord-deltager",
                    userPlugin: "Bruger Plugin Bidragyder"
                },
                context: {
                    title: "Badge muligheder",
                    copy: {
                        name: "Kopiér badgenavn",
                        link: "Kopiér Badges billedlink"
                    },
                    refetch: {
                        button: "Opdater badges",
                        success: "Badges er blevet fornyet!"
                    }
                },
                modal: {
                    title: "Plexcord Supporter",
                    special: "Dette badge er et særligt privilegium for Plexcord-donorer.",
                    description: "Overvej venligst at støtte udviklingen af ​​Plexcord ved at blive donor. Dette ville være meget værdifuldt for os!!"
                }
            }
        },
        uiElements: {
            manage: "Administrer UI-elementer",
            allows: "Giver dig mulighed for at skjule knapper, du ikke kan lide",
            section: {
                chatbar: {
                    title: "Chatbar knapper",
                    description: "Dette er knapperne i højre side af chatindtastningslinjen"
                },
                messagePopover: {
                    title: "Meddelelses popup-knapper",
                    description: "Disse er flydende knapper, der vises til højre, når du holder markøren over en besked"
                }
            },
            button: "Knapper til aktiverede plugins vises her."
        }
    },

    patchHelper: {
        title: "Patch assistent",
        description: "Et udviklerværktøj, der hjælper dig med at oprette patches til Plexcord-plugins.",
        fullPatch: {
            label: "Tam Yama",
            description: "Indsæt din fulde JSON-patch her for at udfylde felterne"
        },
        find: "Bul",
        match: "kamp",
        replacement: "Forandring",
        preview: "Forhåndsvisning",
        generatedCode: "Genereret kode",
        group: "Gruppe",
        diff: "Forskel",
        module: "modul",
        compile: "Derle",
        compiled: "Kompileringen lykkedes",
        copy: {
            clipboard: "Kopiér til udklipsholder",
            codeblock: "Kopiér som kodeblok"
        },
        error: {
            noMatch: "Ingen match fundet. Måske er modulet ved at indlæse.",
            multipleMatch: "Mere end ét match fundet. Brug venligst et mere specifikt søgemønster.",
            noFind: "Der er ikke noget 'find'-felt.",
            noReplacement: "Der er ikke noget \"Skift\"-felt.",
            invalidReplacement: "Erstat feltet er ugyldigt",
            replacementMatch: "'replacement.match'-feltet findes ikke",
            replacementReplace: "'replacement.replace'-feltet findes ikke",
            replacementMustFunction: "Udskiftning skal være en funktion"
        },
        cheatSheet: {
            title: "Snydeark",
            identifiers: "Brugerdefinerede escape-sekvensidentifikatorer (variabelnavne, klassenavne osv.)",
            dollar: "tilføjer $",
            entireMatch: "Tilføjer alle match",
            beforeMatch: "Tilføjer understrengen før kampen",
            afterMatch: "Tilføjer understrengen efter kampen",
            nthGroup: "Tilføjer den n'te optagelsesgruppe ($1, $2...)",
            pluginInstance: "Tilføjer plugin-forekomst"
        },
        replacementEval: {
            label: "Procesudskiftning som funktion",
            description: "'Erstatning' vil blive behandlet som en funktion, når dette er aktiveret."
        }
    },

    sync: {
        title: "Sikkerhedskopiering og gendannelse",
        warning: "Advarsel",
        warningText: "Import af en indstillingsfil vil tilsidesætte dine nuværende indstillinger. Hvis du vil beholde din nuværende konfiguration, skal du først eksportere en sikkerhedskopi.",
        description: "Du kan importere og eksportere dine Plexcord-indstillinger som en JSON-fil. På denne måde kan du nemt flytte dine indstillinger til en anden enhed eller gendanne dine indstillinger efter geninstallation af Plexcord eller Discord.",
        successful: "Indstillingerne er blevet importeret. Genstart appen for at ændringerne træder i kraft!",
        error: {
            failure: "Import af indstillinger mislykkedes: {{fejl}}",
            failedExport: "Eksport af indstillinger mislykkedes. Tjek konsollen",
            invalid: "Ugyldige indstillinger. Er dette virkelig en Plexcord Tuning-fil?",
            tooLarge: "DataStore er for stort - udelukket fra backup. Brug om nødvendigt funktionen 'Eksporter datalagre'.",
            clearSomeDate: "DataStore er enormt. Ryd nogle plugin-data, og prøv igen."
        },
        settings: {
            text: "Hvad er der i sikkerhedskopien?",
            quickcss: "Brugerdefineret QuickCSS",
            theme: "Tema links",
            plugins: "Indstillinger for plugin",
            datastores: "Tilføjelsesdepoter (f.eks. Tidszoner eller IRememberYou)"
        },
        import: {
            title: "Importer indstillinger",
            description: "Vælg en tidligere eksporteret indstillingsfil for at gendanne din konfiguration. Dette vil erstatte alle dine nuværende indstillinger med dem fra sikkerhedskopien.",
            all: "Importer alle indstillinger",
            plugins: "Eklentiyi Iche Aktar",
            css: "QuickCSS'yi İçe Mere",
            datastore: "Importer datalagre"
        },
        export: {
            title: "Eksportindstillinger",
            description: "Du kan eksportere dine nuværende Plexcord-indstillinger til en fil til sikkerhedskopiering eller overførsel til en anden enhed.",
            all: "Eksporter alle indstillinger",
            plugins: "Eksporter plugin",
            css: "Eksportér QuickCSS",
            datastore: "Eksporter datalagre"
        }
    },

    cloud: {
        text: "Sky",
        title: "Indstillinger Synkronisering",
        override: "Cloud Sync",
        description: "Synkroniser dine Plexcord-indstillinger til skyen. Dette giver dig mulighed for at vedligeholde din konfiguration konsekvent på tværs af flere enheder uden manuel import/eksport.",
        switchDescription: "Når de er aktiveret, vil dine indstillinger blive synkroniseret til skyen. Du kan synkronisere manuelt ved at bruge følgende handlinger.",
        settings: "Cloud-indstillinger",
        successful: "Dine indstillinger er blevet synkroniseret til skyen.",
        updated: "Dine indstillinger er blevet opdateret! Klik her for at genstarte for at få ændringerne til at træde i kraft!",
        deleted: "Indstillinger slettet fra skyen!",
        integration: {
            title: "Cloud integration",
            description: "Plexcords cloud-integration lader dig synkronisere dine indstillinger på tværs af flere enheder og Discord-installationer. Dine data opbevares sikkert og kan nemt gendannes til enhver tid.",
        },
        reauth: "Vi har bemærket, at en anden klient havde cloud-integrationer aktiveret! På grund af begrænsninger skal du godkende igen for at fortsætte. Klik her for at gå til indstillingssiden for at fortsætte!",
        error: {
            setup: "Opsætning mislykkedes (kunne ikke hente OAuth-konfiguration).",
            secret: "Opsætningen mislykkedes (ingen hemmelig nøgle blev returneret).",
            string: "Installationen mislykkedes ({{fejl}}).",
            connect: "Cloud-synkronisering er blevet deaktiveret, fordi denne konto ikke er forbundet til Plexcord Cloud-appen. Du kan genaktivere denne konto ved at forbinde den i Cloud-indstillinger. (bemærk: vil gemme dine præferencer separat)",
            noSettings: "Ingen indstillinger fundet i skyen.",
            uptodate: "Dine indstillinger er opdaterede.",
            localNewer: "Dine lokale indstillinger er nyere end skyindstillingerne.",
            delete: "Kunne ikke slette indstillinger ({{fejl}}).",
            api: {
                returned: {
                    delete: "Kunne ikke slette indstillinger (API returnerede {{status}}).",
                    to: "Kunne ikke synkronisere indstillinger til skyen (API returnerede {{status}}).",
                    from: "Kunne ikke synkronisere indstillinger fra skyen (API returnerede {{status}})."
                }
            },
            synchronize: {
                to: "Indstillinger kunne ikke synkroniseres til skyen ({{fejl}}).",
                from: "Indstillinger kunne ikke synkroniseres fra skyen ({{fejl}})."
            }
        },
        warning: {
            enableCloudIntegration: "For at bruge indstillingssynkroniseringsfunktioner skal du aktivere cloudintegration ovenfor."
        },
        danger: {
            title: "Farezone",
            description: "Slet alle dine data permanent i skyen. Denne handling er irreversibel og fjerner alle synkroniserede indstillinger og alle andre data, der er gemt i cloud-infrastrukturen.",
            delete: {
                account: {
                    title: "Slet Cloud-konto",
                    description: "Er du sikker på, at du permanent vil slette din cloud-konto og alle tilknyttede data? Denne handling kan ikke fortrydes.",
                    confirm: "Slet konto",
                    cancel: "Ophæve"
                }
            }
        },
        notification: {
            title: "Cloud integration",
            enabled: "Cloud-integration aktiveret",
            host: "Domænet {{host}} er blevet tilføjet til tilladelseslisten. Genstart applikationen for at ændringerne træder i kraft.",
            erase: {
                successful: "Cloud-data blev slettet",
                failed: "Kunne ikke slette alle data (API returnerede {{status}}), kontakt venligst support."
            }
        },
        button: {
            to: "Synkroniser til skyen",
            from: "Synkroniser fra skyen",
            fromDescription: "Dette vil overskrive dine nuværende indstillinger med dem fra skyen. Brug det fornuftigt!",
            delete: "Slet Cloud Data",
            enable: "Aktiver cloud-integrationer",
            reauthorize: "Genautoriser",
            confirm: "Genstart nu",
            later: "Så!"
        },
        privacy: "beskytter dit privatliv",
        source: "kildekode",
        overview: "Plexcord leveres med cloud-integration, hvilket giver fordele såsom synkronisering af indstillinger på tværs af enheder. Da disse {{privacy}} og {{source}} tilbydes med AGPL 3.0-licens, kan du hoste dem på din egen server.",
        authorization: "Opret forbindelse til skyen for at synkronisere indstillinger. Hvis du ikke har konfigureret cloud-integration endnu, vil dette bede om autorisation.",
        backend: {
            title: "Cloud udbyder",
            description: "Vælg, hvordan dine indstillinger skal gemmes i skyen. Som standard bruges Plexcord Cloud, men du kan også konfigurere din egen selvhostede cloud-tjeneste, hvis du ønsker det.",
            invalid: "Ugyldig URL"
        },
        sync: {
            title: "Synkroniseringsregler for denne enhed",
            description: "Denne indstilling bestemmer, hvordan indstillingerne synkroniseres mellem denne enhed og skyen. Du kan tillade, at ændringer overføres i begge retninger eller vælge en enkelt side som hovedkilde.",
            direction: {
                both: "Tovejssynkronisering (ændringer overføres i begge retninger)",
                push: "Denne enhed er kilden (kun upload)",
                pull: "Cloud-kilde (kun download)",
                manual: "Automatisk synkronisering (manuel synkronisering kun med knapperne nedenfor)"
            }
        }
    },

    changelog: {
        text: "Skift noter",
        title: "Skift noter",
        description: "Du kan finde de seneste ændringer og opdateringer til Plexcord her.",
        by: "forfatter",
        check: "Tjek lager",
        uptodate: "strøm",
        update: "Opdatering",
        noMessage: "ingen besked",
        unknown: "ukendt",
        updatedPlugins: "Opdaterede plugins",
        newSettings: "Nye indstillinger",
        newSettingTooltip: "Ny indstilling for {{plugin}}",
        loading: "Indlæser...",
        repoUptodate: "Lageret opdateret",
        fetch: "Medbring fra lager",
        clear: "Ryd alle noter",
        internet: "Sørg for, at du har en internetforbindelse, og prøv igen.",
        recent: "Seneste ændringer",
        codeChanges: "Kodeændringer {{count}} ny commit",
        updateLogs: "{{count}} Opdater note",
        noCommit: "Der blev ikke fundet nogen videreforpligtelser fra din nuværende version. Klik på 'Fetch from Repository' for at tjekke for nye ændringer.",
        previous: "Sammen med tidligere opdateringssessioner, commit-historier og plugin-ændringer.",
        modal: {
            description: "Se de seneste ændringer til Plexcord. Denne proces viser dig, hvad der er nyt ved at hente commits direkte fra lageret.",
            repository: "Depo",
            failed: "Kunne ikke modtage - tjek konsollen",
            current: "Tilgængelig:",
            hide: "skjule noter",
            show: "Vis noter",
            fetch: {
                title: "Medbring ændringer",
                description: "Tjek for nye commits, plugin-opdateringer og kodeændringer i depotet. Dette vil sammenligne din nuværende version med den seneste version og vise dig, hvad der er nyt.",
                newCommit: "Disse er nye commits og plugin-opdateringer siden din sidste udgivelse. Du kan se, hvilke funktioner der er tilføjet, hvilke fejl der er blevet rettet, og hvilke plugins der er blevet opdateret.",
                confirm: "Kan",
            }
        },
        commit: {
            available: "commit tilgængelig",
            no: "Ingen nye commits",
            new: "nye plugins",
            updated: "opdaterede plugins",
            settings: "nye indstillinger"
        },
        toast: {
            already: "Depotet er allerede opdateret",
            found: "{{count}} nye commits fundet fra repository",
            local: "Depotet er opdateret med din lokale kopi",
            failed: "Kunne ikke bringe den fra lageret :(",
            cleared: "Alle noter ryddet",
            logCleared: "Note slettet",
            yourLatest: "Forpligtelser gemt fra din sidste opdatering"
        },
        alert: {
            clear: {
                title: "Ryd alle noter",
                body: "Er du sikker på, at du vil rydde alle noter? Denne handling kan ikke fortrydes.",
                confirm: "Ryd alle",
                confirmColor: "fare",
                cancel: "Ophæve"
            },
            log: {
                title: "Ryd log",
                body: "Er du sikker på, at du vil rydde denne log? Denne handling kan ikke fortrydes.",
                confirm: "Ryd log",
                confirmColor: "fare",
                cancel: "Ophæve"
            }
        },
        newPlugins: "{{count}} Nyt plugin",
        following: "Følgende plugins er blevet tilføjet i de seneste opdateringer:",
        more: "+{{count}} nye plugins"
    },

    csp: {
        restart: "En genstart er påkrævet for at anvende denne ændring",
        blocked: {
            resources: "Blokerede ressourcer",
            disallowed: "Nogle billeder, typografier eller skrifttyper er blevet blokeret, fordi de kommer fra uautoriserede domæner.",
            recommended: "Det anbefales stærkt, at du flytter dem til GitHub eller Imgur. Du kan dog også tillade domæner, hvis du stoler fuldstændigt på dem.",
            afterAllow: "Efter at have givet tilladelse til et space, skal du helt lukke ned og genstarte {{platform}} (fra systembakken / opgavehåndteringen) for at anvende ændringen.",
            allow: "Tillade",
            url: "Blokerede URL'er"
        },
        imgur: {
            direct: "Imgur-links skal være direkte links i formatet {{etc}}.",
            copy: "For at få et direkte link skal du højreklikke på billedet og vælge 'Kopier billedadresse'."
        },
        wants: {
            caller: "{{callerName}} ønsker at tillade forbindelser til {{domain}}",
            detail: "Hvis du ikke genkender og stoler fuldstændigt på {{domæne}}, bør du annullere denne anmodning!",
            restart: "Du skal helt lukke og genstarte {{appName}} for at ændringerne træder i kraft.",
            type: {
                images: "billeder",
                styles: "CSS og temaer",
                fonts: "Skrifttyper"
            },
            content: "Følgende typer indhold vil blive tilladt at blive uploadet fra {{domæne}}:",
            understand: "Jeg stoler fuldstændig på {{domain}} og forstår risikoen ved at tillade links.",
            button: {
                cancel: "Ophæve",
                allow: "Tillade"
            },
            title: "Domænenavnstilladelser"
        }
    },

    themes: {
        title: "Temaer",
        management: "Temastyring",
        description: "Tilpas Discords udseende med temaer. Tilføj lokale .css-filer eller installer temaer direkte fra URL'er. Temaer med et tandhjulsikon har tilpassede indstillinger, som du kan ændre.",
        local: "Lokale temaer",
        new: "NY",
        pinned: "fastgjort",
        stylus: "Stylus forlængelse",
        bd: "BetterDiscord temaer",
        github: "Github",
        download: "Leder du efter et tema? Tjek {{bd}} eller søg på {{github}}. Når du downloader fra BetterDiscord, skal du klikke på knappen \"Download\" og placere .theme.css-filen i din temamappe.",
        add: "Tilføje",
        reset: "Nulstil indstillingerne til standard",
        notCSS: "Det er ikke en CSS-fil. Sørg for at bruge det rå link!",
        okay: "Okay!",
        checking: "Bliver tjekket...",
        valid: "Gyldig!",
        upload: "Upload tema",
        openFolder: "Åbn temamappe",
        loadMissing: "Installer manglende temaer",
        editQuickCSS: "Rediger QuickCSS",
        editClient: "Rediger klienttema",
        website: "Åbn hjemmesiden",
        discord: "Discord server",
        downloadTheme: "Download",
        refresh: "Opfriske",
        delete: "Sil",
        unknown: {
            title: "ukendt",
            author: "Ukendt forfatter",
            theme: "Discord tema"
        },
        required: "Følgende plugins er påkrævet, men ikke aktive:",
        homepage: "Hjemmeside",
        support: "Støtte",
        online: {
            title: "Online temaer",
            description: "Installer temaer direkte fra URL'er i stedet for lokale filer. Online-temaer opdateres automatisk, når kilden ændres; så du altid har den nyeste version uden manuel download.",
            enable: "Aktiver onlinetemaer",
            enableDescription: "Skift online temaoverførsel. Når de er deaktiveret, vil alle onlinetemaer blive slået fra, og du vil ikke kunne tilføje nye onlinetemaer."
        },
        quickActions: {
            title: "Hurtige transaktioner",
            description: "Genveje til at administrere dine temaer. Åbn temamappen for at tilføje nye temaer, brug QuickCSS til hurtige stilredigeringer eller genindlæs temaer efter ændringer."
        },
        error: {
            userscript: "Temaer på Userscript understøttes ikke!",
            stylus: "Du kan installere temaer med {{stylus}} i stedet for!",
            expired: "Ugyldigt eller udløbet link",
            text: "Endog:"
        },
        copy: {
            url: "Kopiér URL",
            copied: "Tema-URL kopieret!",
            settings: "Kopier temaindstillinger",
            copiedSettings: "Temaindstillinger er blevet kopieret til udklipsholderen."
        },
        paste: {
            settings: "Indsæt temaindstillinger",
            empty: "Dit udklipsholder er tomt.",
            invalid: "Der er ingen gyldige indstillingsdata i dit udklipsholder.",
            pasted: "Temaindstillinger blev indsat fra udklipsholderen."
        },
        settings: {
            for: "Indstillinger for {{themeName}}",
        },
        installed: {
            title: "Installerede temaer",
            description: "Administrer dine temaer her. Lokale temaer indlæses fra din temamappe, onlinetemaer indlæses fra URL'er. Temaer med et tandhjulsikon har indstillinger, der kan tilpasses.",
            count: "{{count}} temaer installeret ({{localCount}} lokalt, {{onlineCount}} online) {{enabledCount}} aktiveret",
            search: "Selv tema...",
            loading: "Temaer indlæses...",
            none: "Der er endnu ingen temaer installeret. For at komme i gang skal du tilføje temafilerne til din temamappe eller tilføje et onlinetema fra oven.",
            noCriteria: "Der blev ikke fundet nogen temaer, der matchede dine søge- eller filterkriterier."
        },
        filter: {
            all: "Vis alle",
            online: "Online temaer",
            local: "Lokale temaer",
            enabled: "Effektiv",
            disabled: "Handicappet"
        },
        notification: {
            refresh: {
                title: "Tema fornyet",
                error: "Temaet kunne ikke opdateres"
            },
            failed: {
                download: "Indirilemedi tema"
            }
        }
    },

    updater: {
        title: "Opdaterer",
        settings: "Opdateringsindstillinger",
        updates: "Opdateringer",
        updated: "opdateret!",
        restart: "Genstart ved at klikke her",
        repaired: "Plexcord repareret!",
        ok: "ok",
        preferences: {
            title: "Opdater præferencer",
            description: "Se, hvordan Plexcord holder sig opdateret. Du kan vælge at opdatere automatisk i baggrunden eller modtage meddelelser, når nye opdateringer er tilgængelige.",
        },
        github: {
            local: "Din lokale kopi har nyere registreringer end fjernlageret. Dette sker normalt, når du foretager lokale ændringer. Gem eller nulstil dem, før du opdaterer."
        },
        error: {
            check: "Der opstod et problem med at søge efter en opdatering. Se konsollen for mere information.",
            occurred: "Der opstod en fejl",
            retrieve: "Der opstod et problem med at hente opdateringsoplysninger - Tjek konsol",
            title: "Nej!",
            tryAgain: "Der er opstået en fejl. Prøv igen, eller se konsollen for at få flere oplysninger.",
            command: "{{path}}-kommandoen blev ikke fundet. Download denne eller prøv igen.",
            code: "Kode {{kode}}. Se konsollen for mere information.",
            running: "Der var et problem med at udføre {{cmd}}: {{error}}",
            failed: "Dette mislykkedes også :( Prøv venligst at opdatere eller geninstallere med installationsprogrammet!"
        },
        available: "1 tilgængelig opdatering",
        updateAvailable: "Plexcord-opdatering tilgængelig!",
        click: "Klik her for at se opdateringen",
        available_plural: "{{count}} tilgængelige opdateringer",
        current: "Strøm!",
        successful: {
            title: "Opdatering lykkedes!",
            body: "Opdateret med succes. Genstart for at gemme ændringer!",
            button: {
                confirm: "Genstart",
                cancel: "Ikke nu!",
                update: "Opdater nu",
                check: "Se efter opdateringer"
            },
            noFound: "Ingen opdatering fundet"
        },
        automatically: {
            label: "Automatisk opdatering",
            description: "Plexcord downloader og installerer automatisk opdateringer uden bekræftelse"
        },
        notify: {
            label: "Vis automatisk opdateringsmeddelelse",
            description: "Vis en notifikation, når Plexcord automatisk opdaterer"
        },
        repo: "Depo",
        repoDescription: "Dette er GitHub-depotet, hvor Plexcord modtager opdateringer.",
        loading: "Indlæser...",
    },

    components: {
        error: {
            title: "Åh nej!",
            render: "Der opstod en fejl under gengivelse af denne komponent. Find flere oplysninger nedenfor og på din konsol."
        },
        componentFailed: {
            message: "Ah! Denne side kunne ikke gengives. Der er dog en tilgængelig opdatering, som muligvis løser dette. Vil du opdatere og genstarte nu?"
        },
        quickCSS: {
            title: "Åbn QuickCSS Editor",
            message: "QuickCSS-editoren er stadig åben i baggrunden.",
            detail: "Vil du stadig lukke Discord? Dette vil også lukke QuickCSS-editoren.",
            cancel: "Ophæve",
            close: "Luk alligevel"
        }
    },

    commands: {
        error: {
            execute: "Der opstod en fejl under udførelse af kommandoen '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Luk meddelelse",
        noYet: "Ingen notifikationer endnu",
        settings: "Notifikationsindstillinger",
        log: {
            title: "Notifikationslog",
            clear: "Ryd notifikationslog",
            sure: "Er du sikker?",
            permamently: "{{count}} underretninger fjernes permanent. Denne handling kan ikke fortrydes.",
            button: {
                confirm: "ok",
                cancel: "Ophæve"
            }
        }
    },

    memberlist: {
        error: {
            render: "Der opstod en fejl under gengivelse af {{key}} medlemslistedekorator"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Der opstod en fejl under gengivelse af {{key}}-meddelelsestilbehøret"
            }
        },
        decoration: {
            error: {
                render: "Der opstod en fejl under gengivelse af {{key}} meddelelsesdekoration"
            }
        }
    },

    utils: {
        toast: {
            copied: "Kopieret til udklipsholder!"
        }
    },

    common: {
        unit: {
            year: "år",
            years: "år",
            month: "er",
            months: "er",
            week: "uge",
            weeks: "uge",
            day: "dag",
            days: "dag",
            hour: "øjeblik",
            hours: "øjeblik",
            minute: "minutter",
            minutes: "minutter",
            second: "anden",
            seconds: "anden",
            ago: "før",
            s: " "
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Deaktiverer Discords sporing (analyse/'videnskab'), metrics og Sentry-nedbrudsrapportering",
            option: {
                disableAnalytics: {
                    label: "Luk Analyse",
                    description: "Deaktiver Discords sporingsmålinger (analyse/'videnskab') og Sentry-nedbrudsrapportering"
                }
            }
        },
        settings: {
            name: "Indstillinger",
            description: "Tilføjer indstillingsgrænseflade og fejlfindingsoplysninger",
            option: {
                language: {
                    label: "Dil",
                    description: "Vælg dit foretrukne sprog til Plexcord."
                },
                settingsLocation: {
                    label: "Indstillinger Placering",
                    description: "Plexcord bestemmer, hvor indstillingssektionen skal placeres"
                }
            }
        },
        supportHelper: {
            name: "Supportassistent",
            description: "Hjælper os med at yde support til dig",
            commands: {
                description: {
                    debug: "Send Plexcord-fejlretningsoplysninger",
                    plugins: "Send Plexcord plugin liste"
                }
            },
            modals: {
                outdated: {
                    title: "Vente!",
                    body: "Du bruger en gammel version af Plexcord! Dine problemer er højst sandsynligt allerede løst.",
                    footer: "Opdater venligst før du beder om support!",
                    button: {
                        cancel: "Se Opdateringer",
                        confirm: "Opdater og genstart nu",
                        secondaryConfirm: "Jeg ved, hvad jeg laver, eller jeg kan ikke opdatere"
                    }
                },
                updater: {
                    title: "Vente!",
                    body: "Du bruger en eksternt opdateret version af Plexcord, vi yder ikke support til denne version!",
                    footer: "Venligst enten {{officielt}} eller kontakt din pakkeudbyder for at få support.",
                    officially: "officielt understøttet version af Plexcord",
                    button: {
                        cancel: "Ophæve",
                        confirm: "Se downloadside",
                        now: "Opdater nu"
                    },
                    toast: {
                        success: "Vellykket! Genstarter...",
                        already: "Allerede opdateret!",
                        failed: "Opdatering mislykkedes :("
                    }
                },
                custom: {
                    title: "Vente!",
                    header: "Du bruger en proprietær version af Plexcord, vi yder ikke support til denne version!",
                    body: "Vi yder kun support til {{officialBuild}}. Enten {{switch}} eller løse problemet selv.",
                    footer: "Hvis du ignorerer denne regel, vil din ret til at modtage støtte blive tilbagekaldt.",
                    official: "officielle udgivelser",
                    switch: "opgradere til en officiel version",
                    button: {
                        confirm: "Jeg forstår",
                        secondaryConfirm: "Vis det ikke igen"
                    }
                }
            },
            button: {
                debug: "kør /plexcord-debug",
                plugins: "køre /plexcord-plugins",
                snippet: "Kør kodestykket"
            },
            toast: {
                success: "Vellykket!",
                failed: "Kunne ikke køre kodestykket :(",
                failedOpenInvite: "Kunne ikke åbne invitationen, tjek venligst konsollen :(",
                upload: "Plugin-listen blev indlæst!",
                failedUpload: "Plugin-listefilen kunne ikke indlæses. Prøv venligst igen.",
                unableGenerate: "Kunne ikke oprette plugin-liste."
            },
            dm: {
                warning: "Send venligst ikke private beskeder til Plexcord-pluginudviklere for at få support!{{br}}I stedet kan du bruge Plexcord-supportkanalen ved at tilmelde dig {{support}}-serveren: {{channel}}"
            },
            alert: {
                title: "Advarsel: For mange plugins",
                paragraph1: "Vi bemærkede, at mere end 100 plugins blev aktiveret.",
                paragraph2: "Du modtager muligvis ikke support på grund af antallet af plugins.",
                paragraph3: "Dit problem er højst sandsynligt forårsaget af plugin-konflikter.",
                paragraph4: "Overvej at deaktivere nogle plugins for at løse problemet.",
                paragraph5: "Din plugin-liste vil blive sendt som en tekstfil.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Venstreklik på dit kontopanel og højreklik for at se din serverprofil",
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
            description: "Får støjreducerende popup til at skifte mellem Ingen og Krisp i stedet for Krisp og Standard."
        },
        alwaysAnimate: {
            name: "Altid Animer",
            description: "Den animerer alt, der kan animeres.",
            option: {
                icons: {
                    label: "ikoner",
                    description: "Animer serverikoner, avatarer, dekorationer og mere til enhver tid."
                },
                statusEmojis: {
                    label: "Status Emojis",
                    description: "Lev altid status-emojis op."
                },
                serverBanners: {
                    label: "Server bannere",
                    description: "Animer altid serverbannere."
                },
                nameplates: {
                    label: "Navneskilte",
                    description: "Animer altid navneskilte."
                },
                roleGradients: {
                    label: "Rolleovergange",
                    description: "Animér altid rollefarveovergange."
                }
            }
        },
        alwaysExpandProfiles: {
            name: "alwaysExpandProfiles",
            description: "Åbner altid brugerprofiler udvidet"
        },
        alwaysExpandRoles: {
            name: "Udvid altid roller",
            description: "Udvider altid rollelisten i profil-popups",
            option: {
                hideArrow: {
                    label: "Skjul pile",
                    description: "Skjul pile"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Afspiller animalsk lyd for hver besked, der sendes (de gør meget)",
            option: {
                volume: {
                    label: "Lydniveau",
                    description: "Animalese stemmelydstyrke"
                },
                speed: {
                    label: "Hastighed",
                    description: "Animales stemmehastighed"
                },
                pitch: {
                    label: "Ton",
                    description: "tonemultiplikator"
                },
                messageLengthLimit: {
                    label: "Beskedlængdegrænse",
                    description: "Maksimal meddelelseslængde at behandle"
                },
                processOwnMessages: {
                    label: "Behandle dine egne beskeder",
                    description: "Giv også mulighed for at stemme dine egne beskeder"
                },
                soundQuality: {
                    label: "Lydkvalitet",
                    description: "Lydkvalitet at bruge",
                    high: "Høj",
                    med: "Medium",
                    low: "Lav",
                    lowest: "Laveste"
                }
            }
        },
        alwaysTrust: {
            name: "Altid Tillid",
            description: "Fjerner ondsindet domæne og mistænkelig fil-pop-up",
            option: {
                domain: {
                    label: "domænenavn",
                    description: "Fjerner 'ondsindet domæne' popup"
                },
                file: {
                    label: "Fil",
                    description: "Fjerner 'potentielt farlig' download-pop-up"
                },
                noDeleteSafety: {
                    label: "Ingen Slet sikkerhed",
                    description: "Fjerner behovet for at indtaste servernavnet, når en server slettes"
                },
                confirmModal: {
                    label: "Bekræftelse popup",
                    description: "'Er du sikker på, at du vil bekræfte denne transaktion?' fjerner popup"
                }
            },
            alert: {
                title: "Vil du slette serveren?",
                body: "Denne proces er permanent, lad os sige det, hvis det ikke er indlysende!",
                confirm: "Sil",
                cancel: "Ophæve"
            }
        },
        anonymiseFileNames: {
            name: "Anonymiser filnavne",
            description: "Anonymiserer uploadede filnavne.",
            option: {
                anonymiseByDefault: {
                    label: "Anonymiser som standard",
                    description: "Anonymiserer filnavne som standard. Du kan deaktivere den i filupload-popup'en, hvis du vil."
                },
                spoilerMessages: {
                    label: "Spoiler beskeder",
                    description: "Anonymiserer navnene på filer, der er markeret som spoilere."
                },
                method: {
                    label: "Metode",
                    description: "Anonymiseringsmetode",
                    random: "Tilfældige tegn",
                    consistent: "Konsekvent",
                    timestamp: "Tidsstempel"
                },
                randomisedLength: {
                    label: "Randomiseringslængde",
                    description: "Tilfældig tegnlængde"
                },
                consistent: {
                    label: "Konsekvent anonymisering",
                    description: "Hemmelig nøgle til konsekvent anonymisering"
                }
            },
            using: {
                anonymous: "Anonymt filnavn bruges",
                spoiler: "Normalt filnavn bruges"
            },
            spoiler: {
                description: "Slå Spoiler til eller fra for dine filer",
                toggle: "Slå spoiler til eller fra for dine filer (standard slået til)",
                enabled: "Spoiler aktiveret!",
                disabled: "Spoilere deaktiveret!"
            }
        },
        appleMusic: {
            name: "Apple Music rig tilstedeværelse",
            description: "Apple Music viser lyttestatus som Discord Rich Presence",
            about: "Til tilpasselige begivenhedsformatstrenge kan du bruge et par brugerdefinerede strenge til at tilføje spordata til begivenheder! {{navn}} erstattes med nummernavnet, {{kunstner}} med kunstnernavnet(e) og {{album}} med albumnavnet.",
            button: {
                listen: "Apple Music'te Dinle",
                songLink: "Se på SongLink"
            },
            option: {
                activityType: {
                    label: "Aktivitetstype",
                    description: "Hvilken type aktivitet vil blive vist",
                    listening: "lytter",
                    playing: "spiller"
                },
                statusDisplayType: {
                    label: "Status Display Type",
                    description: "Vis nummeret/kunstnerens navn på medlemslisten",
                    off: "Vis ikke (viser en generel lyttemeddelelse)",
                    artist: "Vis kunstnernavn",
                    track: "Vis spornavn"
                },
                refreshInterval: {
                    label: "Opdateringsinterval",
                    description: "Hændelsesopdateringsinterval (sekunder)"
                },
                enableTimestamps: {
                    label: "Aktiver tidsstempler",
                    description: "Om tidsstempler skal aktiveres"
                },
                enableButtons: {
                    label: "Aktiver knapper",
                    description: "Om knapper skal aktiveres"
                },
                nameString: {
                    label: "Navnestreng",
                    description: "Hændelsesnavnsformatstreng"
                },
                detailsString: {
                    label: "Detaljer String",
                    description: "Hændelsesoplysninger formatstreng"
                },
                stateString: {
                    label: "Statusstreng",
                    description: "Hændelsesstatusformatstreng"
                },
                largeImageType: {
                    label: "Stor billedtype",
                    description: "Stor billedtype for begivenhedsaktiver",
                    album: "albumcover",
                    artist: "kunstner maleri",
                    disabled: "handicappet"
                },
                largeTextString: {
                    label: "Stor tekststreng",
                    description: "Hændelsesenheder stor tekstformatstreng"
                },
                smallImageType: {
                    label: "Miniaturetype",
                    description: "Begivenhedsaktivers miniaturetype",
                    album: "Apple Music-logo",
                    artist: "kunstner maleri",
                    disabled: "handicappet"
                },
                smallTextString: {
                    label: "Lille tekststreng",
                    description: "Hændelsesenheder lille tekstformatstreng"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence (arRPC)",
            description: "arRPC klient plugin til at aktivere RPC på Discord Web (eksperimentel)",
            use: {
                title: "Sådan bruger du arRPC",
                enable: "{{link}} for at køre serveren og derefter aktivere pluginnet.",
                link: "Følg instruktionerne i GitHub-lageret"
            },
            toast: {
                connected: "Forbundet til arRPC",
                failed: "Kunne ikke oprette forbindelse til arRPC, virker det?",
                retry: "Prøv igen"
            }
        },
        atSomeone: {
            name: "Hos nogen",
            description: "Giver dig mulighed for at tagge en tilfældig person med @nogen"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Opdaterer automatisk onlinestatus (online, inaktiv, forstyr ikke), når spillet starter",
            option: {
                statusToSet: {
                    label: "Status at indstille",
                    description: "Status, der skal indstilles, når et spil startes",
                    online: "online",
                    dnd: "Forstyr ikke",
                    idle: "ledig",
                    invisible: "Usynlig"
                },
                excludeInvisible: {
                    label: "Udeluk usynlig",
                    description: "Undgå automatiske statusændringer, når din status er sat til usynlig"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Zipper automatisk angivne filtyper og mapper, før de uploades til Discord",
            option: {
                extensions: {
                    label: "Udvidelser",
                    description: "Kommasepareret liste over filtypenavne, der skal zippes automatisk (f.eks. .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "Bannere overalt",
            description: "Viser bannere på medlemslisten",
            option: {
                animate: {
                    label: "Animation",
                    description: "Gør banneret animeret"
                },
                preferNameplate: {
                    label: "Vælg navneskilt",
                    description: "Vælg navneskilt i stedet for banner"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Viser aktivitetsikoner på medlemslisten og gør det muligt at vise alle begivenheder",
            option: {
                memberList: {
                    label: "Medlemsliste",
                    description: "Vis aktivitetsikoner på medlemslisten"
                },
                iconSize: {
                    label: "Ikon størrelse",
                    description: "Størrelse på begivenhedsikoner"
                },
                specialFirst: {
                    label: "Tilbud først",
                    description: "Vis særlige begivenheder først (i øjeblikket Spotify og Twitch)"
                },
                renderGifs: {
                    label: "GIF'yere Gør det",
                    description: "Tillad gengivelse af GIF'er"
                },
                removeGameActivityStatus: {
                    label: "Fjern spiltilstand",
                    description: "Fjern spilstatusikon og -status"
                },
                userPopout: {
                    label: "Bruger popup",
                    description: "Vis alle aktiviteter i profilens popup/sidebar"
                },
                hideTooltip: {
                    label: "Skjul værktøjstip",
                    description: "Skjuler aktiviteter forskellige steder"
                },
                allActivitiesStyle: {
                    label: "Alle begivenheder stil",
                    description: "Vis stil til alle begivenheder",
                    list: "Liste",
                    carousel: "skyderen",
                    left: "Sol",
                    right: "Højre"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Tilføjer spektrograf og oscilloskopvisualizer til lydafspillere",
            option: {
                oscilloscope: {
                    label: "Oscilloskop",
                    description: "Aktiver omfangsvisualisering"
                },
                spectrograph: {
                    label: "Spektrograf",
                    description: "Aktiver spektrografvisualisering"
                },
                oscilloscopeSolidColor: {
                    label: "Oscilloskop ensfarvet",
                    description: "Brug ensfarvet i stedet for gradient til omfang"
                },
                oscilloscopeColor: {
                    label: "Rengi oscilloskop",
                    description: "Farve på oscilloskopet, når solid farve er aktiveret"
                },
                spectrographSolidColor: {
                    label: "Spektrograf ensfarvet",
                    description: "Brug ensfarvet i stedet for gradient til spektrograf"
                },
                spectrographColor: {
                    label: "Spektrograffarve",
                    description: "Farve på spektrografen, når ensfarvet er aktiveret"
                },
                forceMoveBelow: {
                    label: "Tving Flyt til Bund",
                    description: "Tving visualiseringen til at flytte under lydstyrkeknapperne"
                }
            },
            toast: {
                invalidColorFormat: "Ugyldigt farveformat for {{settingKey}}, sørg for, at det er i formatet 'R, G, B' eller '#RRGGBB'"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Opret brugerdefinerede grunde til brug i Discord-forbudsvinduet og/eller vis et tekstinput i stedet for valgmuligheder som standard.",
            option: {
                reasons: {
                    label: "årsager",
                    description: "dine særlige grunde"
                },
                isTextInputDefault: {
                    label: "Standard tekstinput",
                    description: "Som standard viser den en tekstinput i stedet for en valgmenu. (Svarer til at klikke på Mere)"
                }
            },
            title: "årsager",
            placeholder: "Hvorfra",
            add: "Tilføj endnu en grund"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Det giver dig mulighed for at søge på listen over blokerede brugere og gøre navne valgbare i indstillingerne.",
            placeholder: "Søg efter brugere..."
        },
        betterCommands: {
            name: "Bedre kommandoer",
            description: "Det forbedrer kommandosystemet med forskellige forbedringer.",
            option: {
                autoFillArguments: {
                    label: "AutoFyld-argumenter",
                    description: "Fylder automatisk kommandoen med alle argumenter, ikke kun de påkrævede argumenter"
                },
                allowNewlinesInCommands: {
                    label: "Tillad nye linjer i kommandoer",
                    description: "Tillad nye linjer i kommandoindtastninger (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Discord opdaterer app-kommandoer indbygget",
                    user: "specifik bruger at forsøge at forny",
                    refreshing: "Applikationskommandoer bliver fornyet...",
                    refreshed: "Kommandoer blev opdateret!",
                    failed: "Opdatering af kommandoer mislykkedes. Tjek konsollen for detaljer."
                }
            }
        },
        betterFolders: {
            name: "Bedre mapper",
            description: "Viser servermapper i en brugerdefineret sidebjælke og tilføjer mapperelaterede forbedringer",
            option: {
                sidebar: {
                    label: "Sidebjælke",
                    description: "Vis servere i mappe i brugerdefineret sidebjælke"
                },
                sidebarAnim: {
                    label: "Sidebar animation",
                    description: "Brug animation, når du åbner mappesidebjælken"
                },
                closeAllFolders: {
                    label: "Luk alle mapper",
                    description: "Luk alle mapper, når en server, der ikke er i en mappe, er valgt"
                },
                closeAllHomeButton: {
                    label: "Luk alle på knappen Hjem",
                    description: "Luk alle mapper, når du klikker på startknappen"
                },
                closeOthers: {
                    label: "Luk Andre",
                    description: "Luk andre mapper, når en mappe åbnes"
                },
                closeServerFolder: {
                    label: "Luk servermappe",
                    description: "Luk mappe, når en server i mappe er valgt"
                },
                forceOpen: {
                    label: "Force Open",
                    description: "Tving til at åbne en mappe, når den skiftes til en mappes server"
                },
                keepIcons: {
                    label: "Beskyt ikoner",
                    description: "Fortsæt med at vise serverikoner i hovedserverbarmappen, når mappen er åben i BetterFolders sidebjælke"
                },
                showFolderIcon: {
                    label: "Vis mappeikon",
                    description: "Vis mappeikonet over mappeservere i BetterFolders sidebjælke",
                    never: "Aldrig",
                    always: "Altid",
                    moreThanOne: "Når flere mapper udvides"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Ændrer GIF-alt-tekst fra kun 'GIF' til at inkludere gif-tags/filnavn"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Får GIF-vælgeren til at åbne favoritkategorien som standard",
            option: {
                keepOpen: {
                    label: "Hold vælgeren åben",
                    description: "Gør det muligt for GIF-vælgeren at forblive åben efter valg af en GIF"
                }
            }
        },
        betterInvites: {
            name: "Bedre Invitationer",
            description: "Se invitationers udløbsdato, se invitationens profil og se forhåndsvisning af servere, før du tilmelder dig (ved at klikke på navnet)",
            render: {
                tip: "Denne invitation udløber efter {{time}}",
                header: "{{name}} inviterede dig til {{server}}",
                never: "aldrig"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Skjul noter eller deaktiver stavekontrol (Konfigurer i Indstillinger!!)",
            option: {
                hide: {
                    label: "Skjul noter",
                    description: "Skjul noteboks i bruger-popups"
                },
                noSpellCheck: {
                    label: "Slå stavekontrol fra",
                    description: "Deaktiver stavekontrol i noter"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Antallet af plustegn før :emoji: angiver den besked, som emojien vil blive tilføjet til"
        },
        betterRoleContext: {
            name: "Bedre RolleKontekst",
            description: "Tilføjer muligheder for at kopiere rollefarve / redigere rolle / vise rolleikon, når du højreklikker på roller i brugerprofiler",
            option: {
                roleIconFileFormat: {
                    label: "Rolleikon filformat",
                    description: "Filformat til brug ved visning af rolleikoner"
                }
            },
            context: {
                copyColor: "Kopier rollefarve",
                editRole: "Rediger rolle",
                viewIcon: "Se rolleikon"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "RoleDot (tilgængelighedsindstilling) kopierer rollefarven, når der klikkes på den. Det tillader også samtidig brug af RoleDot og farvenavne.",
            option: {
                bothStyles: {
                    label: "Her İki Stil",
                    description: "Vis både rollepunkt og farvede navne"
                },
                copyRoleColorInProfilePopout: {
                    label: "Kopier rollefarve i profilpopup",
                    description: "Tillad kopiering af rollefarve ved at klikke på rolleprikken i profil-popup"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Forbedrer menuen Sessioner (enheder). Det lader dig se nøjagtige tidsstempler, give hver session et unikt navn og modtage meddelelser om nye sessioner.",
            new: "NY",
            newSessions: "Ny session:",
            rename: "Omdøb",
            newDevice: "Nyt enhedsnavn",
            resetName: "Nulstil navn",
            save: "Spare",
            cancel: "Ophæve",
            option: {
                backgroundCheck: {
                    label: "Baggrundstjek",
                    description: "Tjek efter nye sessioner i baggrunden, og vis meddelelser, når de opdages"
                },
                checkInterval: {
                    label: "Kontrolområde",
                    description: "Hvor ofte skal du tjekke efter nye sessioner i baggrunden (hvis aktiveret), i minutter"
                }
            }
        },
        betterSettings: {
            name: "Bedre indstillinger",
            description: "Forbedrer oplevelsen af ​​at åbne indstillingsmenuen",
            option: {
                disableFade: {
                    label: "Deaktiver overgangseffekt",
                    description: "Deaktiver crossfade-animation"
                },
                organizeMenu: {
                    label: "Rediger menu",
                    description: "Indstillinger opdeler gearikonmenuen i kategorier"
                },
                eagerLoad: {
                    label: "Hurtig indlæsning",
                    description: "Fjerner indlæsningsforsinkelse, når menuen åbnes første gang"
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
            description: "Installer med et klik, åbn menuen med højreklik"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Dette plugin giver dig mulighed for at forstørre udsendelseseksempler",
            context: {
                viewPreview: "Se Forhåndsvisning af udgivelse"
            }
        },
        blockKeywords: {
            name: "Bloksøgeord",
            description: "Blokerer meddelelser, der indeholder visse brugerdefinerede nøgleord, som om den afsendende bruger var blokeret.",
            option: {
                blockedWords: {
                    label: "Blokerede ord",
                    description: "Kommasepareret liste over ord, der skal blokeres"
                },
                useRegex: {
                    label: "Regex Kullan",
                    description: "Brug hver værdi som et regulært udtryk, når du kontrollerer beskedindhold (avanceret)"
                },
                caseSensitive: {
                    label: "Forskellighed mellem store og små bogstaver",
                    description: "Bruger du søgning efter store og små bogstaver?"
                },
                ignoreBlockedMessages: {
                    label: "Ignorer blokerede meddelelser",
                    description: "Ignorerer fuldstændigt den nye beskedlinje (seneste beskeder)"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Forhindrer Krisp i at installere"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Slører vedhæftede filer i NSFW-kanaler, indtil den holdes over",
            option: {
                blurAmount: {
                    label: "Sløringsmængde",
                    description: "Mængden af ​​sløring (i pixels)"
                },
                blurAllChannels: {
                    label: "Slør alle kanaler",
                    description: "Slør vedhæftede filer på alle kanaler (ikke kun NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Springer pin-prompt over, når du bruger pin-funktioner"
        },
        bypassStatus: {
            name: "Bypass Status",
            description: "Modtag stadig meddelelser fra visse kilder, mens du er i Forstyr ikke-tilstand. Du kan højreklikke på brugere/kanaler/servere for at omgå Forstyr ikke-tilstand.",
            context: {
                remove: "Fjern status Spring over",
                add: "Tilføj status Spring over"
            },
            option: {
                guilds: {
                    label: "Servere",
                    description: "Servere får lov til at hoppe (modtag meddelelser, når de pinges hvor som helst på serveren)",
                    placeholder: "Adskil med komma"
                },
                channels: {
                    label: "Kanaler",
                    description: "Kanaler, hvor det er tilladt at springe over (modtag notifikationer, når der pinges på den kanal)",
                    placeholder: "Adskil med komma"
                },
                users: {
                    label: "Brugere",
                    description: "Brugere har tilladelse til at springe over (modtag notifikationer for alle beskeder sendt i DM'er)",
                    placeholder: "Adskil med komma"
                },
                allowOutsideOfDms: {
                    label: "Tillad ekstern DM",
                    description: "Tillad valgte brugere at springe ikke-DM-statusser over (fungerer som kanal-/serverspring, men gælder for alle beskeder sendt af udvalgte brugere)"
                },
                notificationSound: {
                    label: "Meddelelseslyd",
                    description: "Bestemmer, om meddelelseslyden skal afspilles"
                },
                respectSilentPings: {
                    label: "Respekter Silent Pings",
                    description: "Respekter tavse pings (@silent/undertrykk meddelelser)"
                },
                statusToUse: {
                    label: "Use Case",
                    description: "Status, der skal bruges til hvidlistning",
                    online: "online",
                    idle: "ledig",
                    dnd: "Forstyr ikke",
                    invisible: "Usynlig"
                }
            }
        },
        cakeDay: {
            name: "Kagedag",
            description: "Spor og vis brugerfødselsdage med kageikoner",
            context: {
                label: "Fødselsdag",
                setBirthday: "Indstil fødselsdag",
                clearBirthday: "Slet fødselsdag",
                current: "Strøm:"
            },
            option: {
                chat: {
                    label: "Snak",
                    description: "Vis tærteikoner ved siden af ​​brugernavne i chat"
                },
                memberList: {
                    label: "Medlemsliste",
                    description: "Vis kageikoner på medlemslisten"
                },
                profileBadge: {
                    label: "Profilmærke",
                    description: "Vis kagemærke på brugerprofil"
                },
                notificationSound: {
                    label: "Meddelelseslyd",
                    description: "Afspil lyd, når fødselsdagsmeddelelse sendes"
                },
                userList: {
                    label: "Gemte fødselsdage",
                    description: "Administrer gemte fødselsdage"
                }
            },
            locations: {
                chat: {
                    label: "Snak",
                    description: "Ved siden af ​​brugernavne i chat"
                },
                memberList: {
                    label: "Medlemsliste",
                    description: "I medlemslisten"
                }
            },
            toast: {
                success: "Fødselsdagssæt med succes!",
                invalid: "Ugyldigt fødselsdagsformat! Kun DD/MM accepteres.",
                cleared: "Fødselsdagen blev slettet!"
            },
            notification: {
                title: "🎂 Det er fødselsdag i dag!",
                body: "I dag er det {{username}}s fødselsdag!"
            },
            modal: {
                title: "Indstil fødselsdag for {{brugernavn}}",
                description: "Indtast din fødselsdag i DD/MM-format (f.eks. 25/12)",
                placeholder: "ørn 25/12",
                current: "Nuværende fødselsdag:",
                set: "Indstil fødselsdag",
                cancel: "Ophæve",
                birthday: "I dag er det min fødselsdag! 🎂",
                saved: "Gemte fødselsdage",
                savedDesc: "Ingen fødselsdage registreret endnu. Højreklik på brugeren for at tilføje fødselsdage!",
                today: "I dag",
                remove: "Fjerne",
                loading: "Indlæser...",
                save: "Spare",
                edit: "Redigere"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Viser opkaldstimere på alle taleopkald",
            option: {
                format: {
                    label: "Format",
                    description: "Kompakt eller menneskelæsbart format",
                    human: "30g 23s 00d 42s"
                },
                allCallTimers: {
                    label: "Alle opkaldstimere",
                    description: "Vis opkaldstimere for alle brugere på servere"
                },
                showWithoutHover: {
                    label: "Vis uden at svæve",
                    description: "Vis altid timeren uden at skulle svæve"
                },
                showRoleColor: {
                    label: "Vis rollefarve",
                    description: "Vis i brugerens rollefarve (hvis ShowRoleColor-plugin er aktiveret)"
                },
                trackSelf: {
                    label: "Følg dig selv",
                    description: "Vis også din egen timer"
                },
                showSeconds: {
                    label: "Vis sekunder",
                    description: "Vis også sekunder i timer"
                },
                watchLargeGuilds: {
                    label: "Se Big Servers",
                    description: "Spor brugere på store servere. Hvis du er på store servere med mange aktive stemmebrugere, kan dette forårsage forsinkelse. Testet med op til 2000 aktive stemmebrugere, og der opstod ingen problemer."
                },
                fixUI: {
                    label: "Brugergrænseflade rettelse",
                    description: "I nogle tilfælde kan timeren bryde brugergrænsefladen. Du kan rette dette ved at aktivere denne mulighed."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Tilføjer badges til kanaler baseret på deres type",
            badge: {
                private: "Denne kanal er låst.",
                nsfw: "Denne kanal er mærket NSFW.",
                rules: "Denne kanal er serverreglerkanalen."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Et mærke pr. kanal",
                    description: "Vis kun ét badge pr. kanal"
                },
                showTextBadge: {
                    label: "Vis tekstmærke",
                    description: "Vis tekstmærke"
                },
                showVoiceBadge: {
                    label: "Vis Voice Badge",
                    description: "Vis lydbadge"
                },
                showCategoryBadge: {
                    label: "Vis kategorimærke",
                    description: "Vis kategoribadge"
                },
                showDirectoryBadge: {
                    label: "Vis indeksmærke",
                    description: "Vis indeksmærke"
                },
                showAnnouncementThreadBadge: {
                    label: "Vis meddelelsesemnemærke",
                    description: "Vis meddelelsesemnebadge"
                },
                showPublicThreadBadge: {
                    label: "Vis General Emne Badge",
                    description: "Vis offentligt emnebadge"
                },
                showPrivateThreadBadge: {
                    label: "Vis Special Emne Badge",
                    description: "Vis tilpasset emnebadge"
                },
                showStageBadge: {
                    label: "Vis scenemærke",
                    description: "Vis scenemærke"
                },
                showAnnouncementBadge: {
                    label: "Vis meddelelsesmærke",
                    description: "Vis meddelelsesbadge"
                },
                showForumBadge: {
                    label: "Vis Forum Badge",
                    description: "Vis forumbadge"
                },
                showMediaBadge: {
                    label: "Vis mediemærke",
                    description: "Vis mediemærke"
                },
                showNSFWBadge: {
                    label: "Vis dit NSFW-mærke",
                    description: "Vis NSFW-badge"
                },
                showLockedBadge: {
                    label: "Vis låst badge",
                    description: "Vis dit låste badge"
                },
                showRulesBadge: {
                    label: "Vis Regler Badge",
                    description: "Vis regler-badge"
                },
                showUnknownBadge: {
                    label: "Vis ukendt badge",
                    description: "Vis ukendt badge"
                },
                textBadgeLabel: {
                    label: "Tekstmærketiket",
                    description: "tekst badge label",
                    default: "Tekst"
                },
                voiceBadgeLabel: {
                    label: "Lydmærke",
                    description: "lydmærkat",
                    default: "Ses"
                },
                categoryBadgeLabel: {
                    label: "Kategori Badge Label",
                    description: "Kategori badge label",
                    default: "Kategori"
                },
                announcementBadgeLabel: {
                    label: "Meddelelsesmærke",
                    description: "Meddelelsesmærkat",
                    default: "Haber"
                },
                announcementThreadBadgeLabel: {
                    label: "Meddelelse Emne Badge Label",
                    description: "Etiket for meddelelsesemne",
                    default: "Nyt emne"
                },
                publicThreadBadgeLabel: {
                    label: "Etiket med almindeligt emne",
                    description: "Etiket med generel emnemærke",
                    default: "Emne"
                },
                privateThreadBadgeLabel: {
                    label: "Special Emne Badge Label",
                    description: "Tilpasset emnemærketiket",
                    default: "Særligt emne"
                },
                stageBadgeLabel: {
                    label: "Stage Badge Label",
                    description: "Scenemærketabel",
                    default: "Scene"
                },
                directoryBadgeLabel: {
                    label: "Indeksmærketiket",
                    description: "Indeksmærketiket",
                    default: "indeks"
                },
                forumBadgeLabel: {
                    label: "Forum Badge Label",
                    description: "Forum-mærketiket",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Mediemærketiket",
                    description: "Mediemærketiket",
                    default: "Medier"
                },
                nsfwBadgeLabel: {
                    label: "NSFW Badge Label",
                    description: "NSFW badge label",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Lås Badge Tag",
                    description: "låsemærkemærke",
                    default: "Låst"
                },
                rulesBadgeLabel: {
                    label: "Regler Badge Label",
                    description: "Regler badge label",
                    default: "Regler"
                },
                unknownBadgeLabel: {
                    label: "Ukendt mærkemærke",
                    description: "Ukendt badge label",
                    default: "Ukendt"
                },
                textBadgeColor: {
                    label: "Farve på tekstmærke",
                    description: "Farve på tekstmærket"
                },
                voiceBadgeColor: {
                    label: "Lydbadge farve",
                    description: "Farve på lydmærket"
                },
                categoryBadgeColor: {
                    label: "Kategori Badge Farve",
                    description: "Farve på kategorimærket"
                },
                announcementBadgeColor: {
                    label: "Meddelelsesmærkefarve",
                    description: "Farve på meddelelsesmærket"
                },
                announcementThreadBadgeColor: {
                    label: "Meddelelse Emne Badge Farve",
                    description: "Farve på meddelelsesemnets badge"
                },
                publicThreadBadgeColor: {
                    label: "Generelt trådmærkefarve",
                    description: "Farve på generel emnemærke"
                },
                privateThreadBadgeColor: {
                    label: "Special Emne Badge Farve",
                    description: "Brugerdefineret emnebadgefarve"
                },
                stageBadgeColor: {
                    label: "Stage Badge Farve",
                    description: "Farve på scenemærket"
                },
                directoryBadgeColor: {
                    label: "Indeksmærkefarve",
                    description: "Indeksmærkets farve"
                },
                forumBadgeColor: {
                    label: "Forum Badge Farve",
                    description: "Forum badge farve"
                },
                mediaBadgeColor: {
                    label: "Mediemærke farve",
                    description: "Mediemærkets farve"
                },
                nsfwBadgeColor: {
                    label: "NSFW Badge Farve",
                    description: "NSFW badge farve"
                },
                lockedBadgeColor: {
                    label: "Låst badge farve",
                    description: "Farve på låst badge"
                },
                rulesBadgeColor: {
                    label: "Regler Badge Farve",
                    description: "Regler badge farve"
                },
                unknownBadgeColor: {
                    label: "Ukendt badgefarve",
                    description: "Ukendt badgefarve"
                }
            },
            badges: {
                text: "Tekst",
                voice: "Ses",
                category: "Kategori",
                announcement: "Haber",
                announcementThread: "Nyt emne",
                publicThread: "Emne",
                privateThread: "Særligt emne",
                stage: "Scene",
                directory: "indeks",
                forum: "Forum",
                media: "Medier",
                nsfw: "NSFW",
                locked: "Låst",
                rules: "Regler",
                unknown: "Ukendt"
            },
            tooltip: {
                locked: "Denne kanal er låst.",
                nsfw: "Denne kanal er mærket NSFW."
            }
        },
        channelTabs: {
            name: "Kanalfaner",
            description: "Gruppér dine ofte besøgte kanaler i faner som i en browser",
            open: "Åbn i Ny fane",
            animation: {
                title: "Animation kontrol",
                description: "Aktiver eller deaktiver specifikke animationer for kanalfaner. Hver mulighed kan slås til eller fra uafhængigt.",
                placeholder: "Vælg, hvilke animationer der skal aktiveres...",
                tabHover: "Tab-hovereffekter (fjern + skala)",
                tabSelection: "Valgt faneløft-animation",
                tabDragDrop: "Fanetræk og slip (spøgelse + omarranger)",
                tabEnterExit: "Tab ind/ud ruller (opret + luk)",
                tabIconPop: "Ikonpop (valgvækst)",
                closeRotation: "Luk knap Retur",
                plusPulse: "Plus knap pulseffekt",
                mentionGlow: "Nævn Badge Sparkle",
                compactExpand: "Kompakt tilstandsudvidelse",
                selectedBorder: "Valgt fane Blå kant",
                selectedBackground: "Valgt fanebaggrundsfarve",
                tabShadows: "Faneskyggeeffekter",
                tabRepositioning: "Faneflytning (blød overgang)",
                resizeHandle: "Ændr størrelse Håndtag Fade",
                questActivate: "Aktiv arbejdsgradient"
            },
            bookmark: {
                label: "Din İmi",
                unknown: "Ukendt bruger",
                folder: "Folder",
                add: "Føj til bogmærker",
                edit: "Rediger bogmærke",
                delete: "Yer İmini Sil",
                remove: "Fjern fra bogmærker",
                removeFolder: "Fjern bogmærke fra mappe",
                loading: "Indlæser bogmærker...",
                noBookmarks: "Du har ingen bogmærker. Du kan tilføje en åben fane eller skjule den ved at højreklikke.",
                quests: "Quests",
                messageRequests: "Besked anmodninger",
                friends: "Venner",
                shop: "Butik",
                library: "Bibliotek",
                discovery: "Opdagelse",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Aktivitet",
                specialPage: "Særlig side"
            },
            button: {
                save: "Spare",
                delete: "Sil",
                cancel: "Ophæve"
            },
            context: {
                label: "ChannelTabs kontekstmenu",
                bookmark: "Kanalfaner Bogmærke kontekstmenu",
                tab: "Kanalfaneblade Kontekstmenu",
                compact: "Kompakt",
                bookmarkBar: "Bogmærkelinje",
                openAll: "Åbn alle i bogmærker",
                openNew: "Åbn i Ny fane",
                close: {
                    tab: "Luk fanen",
                    otherTabs: "Luk Andre faner",
                    tabsToRight: "Luk faner til højre",
                    tabsToLeft: "Luk faner til venstre",
                    reopen: "Åbn lukket fane igen",
                    allTabs: "Luk alle faner"
                }
            },
            error: {
                noLogin: "Har du ikke en konto logget ind?"
            },
            modal: {
                add: {
                    title: "Tilføj bogmærke til mappe",
                    select: "Vælg en mappe",
                    create: "Opret ny"
                },
                edit: {
                    title: "Rediger bogmærke",
                    name: "Bogmærkenavn",
                    folder: "Mappe farve"
                },
                delete: {
                    title: "Er du sikker?",
                    description: "Sletning af en bogmærkemappe sletter også alle bogmærker i den."
                }
            },
            option: {
                onStartup: {
                    label: "Indledningsvis",
                    description: "Vælg, hvad du vil gøre med faner ved opstart",
                    nothing: "Gør ingenting (åbn venner-fanen)",
                    remember: "Husk faner fra sidste session",
                    open: "Åbn bestemte faner"
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
                bookmarkNotificationDot: {
                    label: "Bogmærke Notification Point",
                    description: "Vis notifikationsprik for bogmærker"
                },
                widerTabsAndBookmarks: {
                    label: "Store faner og bogmærker",
                    description: "Udvid faner og bogmærker på større skærme"
                },
                tabWidthScale: {
                    label: "Fanebreddeskala",
                    description: "Fanebreddeskala (procent) – justerbar ved at trække fanekanter"
                },
                renderAllTabs: {
                    label: "Hold alle faner i hukommelsen",
                    description: "Behold alle faner i hukommelsen for hurtigere at skifte mellem faner (scroll og tilstand er cachelagret)"
                },
                switchToExistingTab: {
                    label: "Skift til Eksisterende fane",
                    description: "Hvis der allerede er en fane for den kanal, du gennemser, skal du skifte til den"
                },
                createNewTabIfNotExists: {
                    label: "Hvis der ikke er nogen fane, skal du oprette den",
                    description: "Hvis der ikke er nogen fane for en kanal, skal du oprette en ny fane"
                },
                enableRapidNavigation: {
                    label: "Aktiver hurtig navigation",
                    description: "Når kanalændringer foretages hurtigt, ændres den aktuelle fane i stedet for den nye fane."
                },
                rapidNavigationThreshold: {
                    label: "Hurtig navigationstærskel",
                    description: "Tidsinterval i millisekunder. Hvis en ny kanal åbnes i denne periode, ændres den eksisterende fane."
                },
                tabBarPosition: {
                    label: "Fanebjælkens placering",
                    description: "Fanebjælkens placering",
                    top: "Top",
                    bottom: "Alt"
                },
                enableNumberKeySwitching: {
                    label: "Skift faneblad med taltaster",
                    description: "Aktiver faneskift med tasterne 1–9"
                },
                numberKeySwitchCount: {
                    label: "Nummertast Fanenummer",
                    description: "Antal faner tilgængelige via taltaster (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Fane Luk genvej",
                    description: "Aktiver faneluk tastaturgenvej"
                },
                enableNewTabShortcut: {
                    label: "Ny fane genvej",
                    description: "Aktiver ny genvej til åben fane"
                },
                enableTabCycleShortcut: {
                    label: "Genvej til faneløkke",
                    description: "Aktiver genvej til at skifte mellem faner"
                },
                keybindsSection: {
                    label: "Tastaturgenveje",
                    description: "Klik på en knap, og tryk på den ønskede tastekombination. Modifikatorer såsom CTRL, SHIFT og ALT understøttes.",
                    title: "Tastaturgenveje",
                    reset: "Nulstil alle til standard",
                    closeTab: {
                        label: "Luk fanen",
                        description: "Tastaturgenvej for at lukke den aktuelle fane"
                    },
                    newTab: {
                        label: "Ny fane",
                        description: "Tastaturgenvej for at åbne en ny fane med den aktuelle kanal"
                    },
                    cycleTabsForward: {
                        label: "Fremad faneløkke",
                        description: "Genvej til at gå til næste fane (går til første fane)"
                    },
                    cycleTabsBackward: {
                        label: "Back Bounce Loop",
                        description: "Genvej til at gå til forrige fane (går til sidste fane)"
                    }
                },
                closeTabKeybind: {
                    label: "Fane Luk genvej",
                    description: "Genvej til at lukke den aktuelle fane"
                },
                newTabKeybind: {
                    label: "Ny fane genvej",
                    description: "Ny fane åben genvej"
                },
                cycleTabForwardKeybind: {
                    label: "Fremad faneløkke",
                    description: "Genvej til at gå til næste faneblad"
                },
                cycleTabBackwardKeybind: {
                    label: "Back Bounce Loop",
                    description: "Genvej for at gå til forrige fane"
                },
                showTabNumbers: {
                    label: "Vis fanenummer",
                    description: "Vis nummermærker på faner for at afsløre genveje"
                },
                tabNumberPosition: {
                    label: "Fanenummerplacering",
                    description: "Placering af nummerskilte på faner",
                    left: "Venstre (præ-ikon)",
                    right: "Højre (indlægsindhold)"
                },
                animations: {
                    label: "Animationer"
                },
                animationHover: {
                    label: "Svæveanimation",
                    description: "Aktiver løft og forstør effekter, mens du svæver"
                },
                animationSelection: {
                    label: "Udvalgsanimation",
                    description: "Aktiver lys/ramme-animationer på valgtidspunktet"
                },
                animationDragDrop: {
                    label: "Træk-og-slip-animation",
                    description: "Aktiver spøgelseseffekt, mens du trækker"
                },
                animationEnterExit: {
                    label: "Entry/Exit Animation",
                    description: "Rul animationer, når du opretter/lukker faner"
                },
                animationIconPop: {
                    label: "Ikon Pop-animation",
                    description: "Aktiver ikonvækstanimation under valg"
                },
                animationCloseRotation: {
                    label: "Kill Button Return",
                    description: "Tilføj spin-animation til nedlukningsikonet"
                },
                animationPlusPulse: {
                    label: "Plus knap puls",
                    description: "Aktiver pulsanimation for ny faneknap"
                },
                animationMentionGlow: {
                    label: "Nævn Sparkle",
                    description: "Aktiver rød glød animation på omtale badge"
                },
                animationCompactExpand: {
                    label: "Kompakt udvidelsesanimation",
                    description: "Aktiver jævn udvidelse af kompakte faner"
                },
                animationSelectedBorder: {
                    label: "Valgt fanekantanimation",
                    description: "Aktiver kant- og glødstil-animationer for den valgte fane"
                },
                animationSelectedBackground: {
                    label: "Valgt fanebaggrundsanimation",
                    description: "Aktiver animeret ændring af baggrundsfarven på den valgte fane"
                },
                animationTabShadows: {
                    label: "Tab Shadow Animation",
                    description: "Aktiver skyggeeffekter på faner"
                },
                animationTabPositioning: {
                    label: "Faneplaceringsanimation",
                    description: "Glatte overgangsanimationer, når du skifter fane"
                },
                animationResizeHandle: {
                    label: "Ændre størrelse på animation",
                    description: "Aktiver fade-animation for størrelseshåndtag"
                },
                animationQuestsActive: {
                    label: "Active Duty Animation",
                    description: "Aktiver gradueringsanimationer i fanen, når opgaver er aktive"
                },
                compactAutoExpandSelected: {
                    label: "Udvid automatisk, når det er valgt",
                    description: "Udvid automatisk kompakte faner, når valgt"
                },
                compactAutoExpandOnHover: {
                    label: "Udvid automatisk ved svæv",
                    description: "Udvid automatisk kompakte faner, når du svæver"
                },
                openInNewTabAutoSwitch: {
                    label: "Automatisk skift ved åbning i ny fane",
                    description: "Skift automatisk til en ny fane, når den åbnes"
                },
                bookmarksIndependentFromTabs: {
                    label: "Bogmærker uafhængig",
                    description: "Bogmærker navigerer uafhængigt uden at påvirke fanelinjen"
                },
                showResizeHandle: {
                    label: "Vis størrelseshåndtag",
                    description: "Vis håndtag for at justere fanernes bredde"
                },
                openNewTabsInCompactMode: {
                    label: "Åbn nye faner kompakt",
                    description: "Nyligt åbnede faner åbnes som standard i kompakt tilstand"
                },
                newTabButtonBehavior: {
                    label: "Ny faneknap-adfærd",
                    description: "Knappen ny fane (+) følger faner i stedet for at være fastgjort til højre"
                },
                oneTabPerServer: {
                    label: "Enkelt faneblad pr. server",
                    description: "Lad der kun være et hop for en server; Brug den samme fane, når en ny kanal åbnes"
                },
                maxOpenTabs: {
                    label: "Maksimalt antal åbne faner",
                    description: "Maksimalt antal faner, der kan være åbne på samme tid (0 = ubegrænset)"
                }
            },
            tabs: {
                startup: "Hjem-faner",
                currently: "Indstil aktuelt åbne faner"
            },
            toast: {
                notRestoring: "Faner gendannes ikke, fordi KeepCurrentChannel er aktiveret",
                failed: {
                    restore: "Faner kunne ikke gendannes",
                    saved: "Gemte faner kunne ikke indlæses"
                }
            }
        },
        characterCounter: {
            name: "Tegntæller",
            description: "Viser en tegntæller i beskedboksen",
            option: {
                colorEffects: {
                    label: "Farveeffekter",
                    description: "Slå farveeffekter til eller fra, når tegngrænsen nærmer sig"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Den skjuler bare alle kanaler i skjulte kategorier, selvom der er ulæste beskeder."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Fjern alle emojis og fjollede udsmykninger fra kanalnavne"
        },
        clearURLs: {
            name: "Ryd URL'er",
            description: "Fjerner automatisk sporingselementer fra URL'er, du indsender"
        },
        clickableRoles: {
            name: "Klikbare roller",
            description: "Du kan se hvilke roller medlemmer har ved at klikke på rollerne i brugerprofilerne og medlemslisten.",
            modal: {
                loading: "Medlemmer indlæser...",
                noMembers: "Ingen medlemmer fundet.",
                unknown: "Ukendt rolle"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Giver dig mulighed for lokalt at skjule næsten alt indhold fra enhver bruger",
            replying: "Besvarer blokeret besked",
            option: {
                hideVc: {
                    label: "Skjul fra stemmekanaler",
                    description: "Skjul stemmekanaler, der indeholder blokerede brugere"
                },
                usersToBlock: {
                    label: "Brugere at blokere",
                    description: "Bruger-id'er adskilt af kommaer og mellemrum"
                },
                hideBlockedUsers: {
                    label: "Skjul blokerede brugere",
                    description: "Skjul blokerede brugere fuldstændigt overalt"
                },
                hideBlockedMessages: {
                    label: "Skjul blokerede meddelelser",
                    description: "Skjul fuldstændig beskeder fra blokerede brugere (samme som gamle noblockedmessages plugin)"
                },
                hideEmptyRoles: {
                    label: "Skjul ledige roller",
                    description: "Skjul rolletitler, hvis alle medlemmer er blokeret"
                },
                blockedReplyDisplay: {
                    label: "Blokeret svarvisning",
                    description: "Hvad vises i stedet for en besked, når du svarer til en, du har skjult",
                    displayText: "Vis tekst, der angiver svar på en skjult besked",
                    hideReply: "vis ikke noget"
                },
                guildBlackList: {
                    label: "Servers sortliste",
                    description: "Server-id'er, hvor funktionaliteten deaktiveres"
                },
                guildWhiteList: {
                    label: "Serverhvidliste",
                    description: "Server-id'er, hvor funktionaliteten vil blive aktiveret"
                }
            }
        },
        clientTheme: {
            name: "klienttema",
            description: "Genindspilning af gammelt klienttema-eksperiment. Tilføj en farve til dit Discord-klient-tema",
            title: "Tema farve",
            add: "Tilføj en farve til dit Discord-klient-tema",
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
                    contrast: "Den valgte farve vil ikke kontrastere godt med teksten",
                    nitro: "Nitro-temaer understøttes ikke",
                    switch: "Skift til tilstanden {{oppositeTheme}}",
                    disable: "Deaktiver Nitro-tema",
                    reset: "Nulstil temafarve"
                }
            }
        },
        clipsEnhancements: {
            name: "Klipforbedringer",
            description: "Tilføj flere klip-FPS og varighedsmuligheder plus RPC-tagging!",
            minutes: "Et minut",
            option: {
                richPresenceTagging: {
                    label: "Rich Presence Tagging",
                    description: "Hvornår skal klip tagges med eksisterende Rich Presence?",
                    always: "Altid",
                    only: "Kun når begyndelsen eller slutningen af ​​begivenhedens navn stemmer overens",
                    never: "Aldrig"
                },
                enableScreenshotKeybind: {
                    label: "Aktiver skærmbillede genvejstast",
                    description: "Aktiver genvejstaster til skærmbilleder"
                },
                enableVoiceOnlyClips: {
                    label: "Aktiver kun lydklip",
                    description: "Aktiver kun lydklip (lyd uden video)"
                },
                enableAdvancedSignals: {
                    label: "Aktiver avancerede signaler",
                    description: "Aktiver avancerede klipsignaler (automatiske klipudløsere)"
                },
                ignorePlatformRestriction: {
                    label: "Ignorer platformsbegrænsninger",
                    description: "Tillad platformspecifik klipning (kan forårsage lagringsfejl)"
                },
                clipsLink: {
                    label: "Klip link",
                    link: "Skift FPS og varighedsindstillinger i klipindstillinger!"
                }
            }
        },
        colorSighted: {
            name: "Farvesynet",
            description: "Fjerner farveblinde venlige ikoner fra situationer, ligesom 2015-2017 Discord"
        },
        commandPalette: {
            name: "Kommandopalet",
            description: "Det giver dig mulighed for at navigere i grænsefladen ved hjælp af tastaturet.",
            action: {
                command: {
                    label: "Kør kommando",
                    description: "Kører en anden paletkommando med ID. Hvis du ikke er sikker på identifikatoren, skal du bruge vælgeren."
                },
                settings: {
                    label: "Åbn siden Indstillinger",
                    description: "Det går direkte til en Discord-indstillingsside. Vælg en side fra vælgeren."
                },
                url: {
                    label: "Åbn URL",
                    description: "Åbner et link. For den bedste kompatibilitet, brug https:// links."
                },
                macro: {
                    label: "Kør makro",
                    description: "Kører en række kommandoer sekventielt. Tilføj trin via vælgeren."
                }
            },
            category: {
                auto: "Automatisk (brug standardlayout)",
                default: {
                    label: "Hurtige transaktioner",
                    description: "Almindelige Plexcord-genveje"
                },
                plugins: {
                    label: "Plugins",
                    description: "Aktiverer, deaktiverer og konfigurerer Plexcord-plugins",
                    enable: {
                        label: "Aktiver plugins"
                    },
                    disable: {
                        label: "Deaktiver plugins"
                    },
                    settings: {
                        label: "Indstillinger for plugin"
                    },
                    toolbox: {
                        label: "Plugin handlinger"
                    },
                    chatbar: {
                        label: "Chatbar knapper"
                    },
                    changes: {
                        label: "Plugin ændringer"
                    }
                },
                context: {
                    label: "Aktuel kontekst",
                    description: "Handlinger for den valgte kanal og server"
                },
                updates: {
                    label: "Opdateringer",
                    description: "Hold dig opdateret med Plexcord"
                },
                discordSettings: {
                    label: "Discord-indstillinger",
                    description: "Gå til Discord-konfigurationssider"
                },
                custom: {
                    label: "Særlige kommandoer",
                    description: "Brugerdefinerede kommandopaletposter"
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
                    description: "Gå hurtigt til dine venner"
                },
                action: {
                    label: "Handling",
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Åbn Plexcord-indstillinger",
                        plugin: "Åbn Plugin-indstillinger"
                    }
                },
                reload: {
                    label: "Geninstaller Discord",
                    description: "Genindlæser det aktuelle Discord-vindue"
                }
            },
            command: {
                enable: "Aktiver {{pluginName}}",
                enabled: "{{pluginName}} aktiveret",
                disable: "Deaktiver {{pluginName}}",
                disabled: "{{pluginName}} deaktiveret",
                failed: "Kommandoen mislykkedes:",
                toggleFailed: "{{pluginName}} kunne ikke ændres.",
                pluginSettings: "Indstillinger for {{pluginName}}",
                untitled: "Anonym kommando",
                new: "Ny kommando",
                error: {
                    enter: "Indtast et kommando-id, eller vælg nedenfor.",
                    noCommand: "Der er ingen kommando, der matcher dette id."
                },
                discord: {
                    account: "Åbn Min konto",
                    privacy: "Data og privatliv åben",
                    notifications: "Slå meddelelser til",
                    voice: "Slå lyd og video til",
                    text: "Åbn tekst og billeder",
                    appearance: "Åbn visning",
                    accessibility: "Åben tilgængelighed",
                    keybinds: "Slå nøglebindinger til",
                    advanced: "Åbn Avancerede indstillinger",
                },
                updates: {
                    check: {
                        label: "Se efter opdateringer",
                        description: "Se efter Plexcord-opdateringer",
                        one: "En opdatering er tilgængelig",
                        multiple: "{{count}} tilgængelige opdateringer",
                        none: "ingen opdatering",
                        failed: "Kunne ikke søge efter opdateringer."
                    },
                    changelog: {
                        label: "Se ændringslog",
                        description: "Plexcord åbner changelog"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} Markér som læst"
                    }
                },
                pin: {
                    open: {
                        label: "Slå {{channelLabel}} pins til"
                    },
                    toggle: {
                        label: "Slå fastgøring til sidste kommando til/fra"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} Sustur",
                        oneHour: "Slå lyden fra for kanalen {{channelLabel}} i 1 time",
                        untilTomorrow: "Slå lyden fra for kanalen {{channelLabel}} indtil i morgen",
                    },
                    unmute: {
                        label: "Slå {{channelLabel}} til",
                    },
                    reopen: {
                        label: "Genåbner sidst lukkede DM"
                    },
                    dm: {
                        open: {
                            label: "Åbn DM med {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Åbn {{guildLabel}} Indstillinger"
                    },
                    navigate: {
                        label: "Gå til {{guildLabel}}-serveren"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30 minutter Forstyr ikke",
                    oneHourDnd: "1 time Forstyr ikke",
                    cancelStatusReset: "Annuller Status Timer"
                },
                status: {
                    set: {
                        online: "Indstil status: Online",
                        idle: "Indstil status: Inaktiv",
                        dnd: "Indstil status: Forstyr ikke",
                        invisible: "Indstil status: Usynlig"
                    }
                },
                toggle: {
                    streamer: "Skift Streamer-tilstand",
                    mute: "Slå Self mute til/fra",
                    deafen: "Slå selvdøvende til",
                },
                notification: {
                    clear: {
                        label: "Ryd skrivebordsmeddelelser"
                    }
                },
                palette: {
                    settings: {
                        label: "Åbn kommandopaletindstillinger",
                        description: "Konfigurer Command Palette plugin"
                    }
                },
                recent: {
                    label: "Vis seneste kommandoer",
                    description: "Viser nyligt udførte kommandoer",
                    rerun: "Kør sidste kommando igen"
                },
                plugin: {
                    reload: {
                        label: "Geninstaller alle plugins",
                        description: "Forsøger øjeblikkeligt at genindlæse alle aktive plugin"
                    },
                    enable: {
                        label: "Aktiver alle plugins"
                    },
                    disable: {
                        label: "Deaktiver alle unødvendige plugins"
                    },
                    restart: {
                        label: "Genstart Plexcord",
                        description: "Genindlæser Discord-klientvinduet"
                    }
                },
                quickCSS: {
                    label: "Slå Hurtig CSS til/fra"
                },
                transparentity: {
                    label: "Slå vinduesgennemsigtighed til/fra"
                },
                theme: {
                    open: {
                        label: "Åbn klienttemaindstillinger"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Søg efter kommando",
                noCommand: "Kommandoen blev ikke fundet",
                add: {
                    title: "Tilføj kommando"
                },
                choose: {
                    title: "Vælg Kommando"
                },
                command: {
                    palette: {
                        label: "Kommandopalet",
                        placeholder: "Indtast en kommando",
                        filtering: "Filtrering efter {{tags}}",
                        noCommand: "Kommandoen blev ikke fundet",
                        pin: "pin kommando",
                        unpin: "Frigør"
                    },
                    target: {
                        label: "Target Command ID",
                        placeholder: "Indtast kommando-id",
                        choose: "Vælg Kommando"
                    },
                    custom: {
                        label: "Særlige kommandoer",
                        description: "1) Navngiv kommandoen · 2) Tilføj valgfri beskrivelse/søgeord/tag/kategori · 3) Vælg en handling og udfyld detaljerne (ID'er for aliaser og makroer skal matche eksisterende paletkommandoer).",
                        auto: "Auto (standard)",
                        expand: "Udvide",
                        collapse: "Bryde sammen",
                        collapsed: {
                            label: "Billet",
                            description: "Vist navn",
                            advanced: {
                                hide: "Skjul avancerede muligheder",
                                show: "Vis avancerede muligheder"
                            },
                            subtitle: {
                                label: "Forklaring",
                                placeholder: "Valgfri underoverskrift"
                            },
                            keywords: {
                                label: "Nøgleord",
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
                                label: "Vælg, hvor denne kommando skal vises på paletten."
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
                    noSelected: "Siden er ikke valgt",
                    current: "Nuværende side",
                    choose: "Vælg side..."
                },
                url: {
                    url: "URL",
                    error: "Brug http:// eller https:// links.",
                    valid: "Indtast en gyldig URL.",
                    open: {
                        external: "åben udvendigt",
                    }
                },
                macro: {
                    sequence: {
                        label: "Manuskript",
                        placeholder: "kommando-a, kommando-b"
                    },
                    addStep: "Tilføj trin",
                    unknownId: "Ukendte kommando-id'er"
                }
            },
            status: {
                online: "online",
                idle: "ledig",
                dnd: "Forstyr ikke",
                invisible: "Usynlig"
            },
            tag: {
                core: "Solsikkefrø",
                navigation: "Spadseretur",
                utility: "Køretøj",
                developer: "Udvikler",
                customization: "tilpasning",
                plugins: "Plugins",
                session: "Session",
                context: "Sammenhæng",
                custom: "Særlig",
                guilds: "Servere",
                friends: "Venner",
                other: "Andre"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Chat-knappen '{{label}}' blev ikke fundet.",
                        failedToTrigger: "{{label}} kunne ikke udløses.",
                        activated: "{{label}} er aktiveret."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Kanal mute-kontroller er ikke tilgængelige",
                        muted: "Kanalen er blevet lydløs.",
                        unmuted: "Kanalen er blevet slået fra.",
                        failed: "Kanalens lydløs status kunne ikke opdateres."
                    },
                    dm: {
                        no: "Der er ingen DM-lukninger registreret i denne session.",
                        reOpened: "Sidst lukkede DM er genåbnet.",
                        noAvailable: "DM er ikke længere tilgængelig."
                    }
                },
                command: {
                    loop: "Kommandosløjfe registreret i makroudførelse.",
                    notFound: "Kommandoen {{commandId}} blev ikke fundet.",
                    unsupported: "Ikke-understøttet brugerdefineret kommandohandling.",
                    failedToRun: "Kunne ikke køre {{label}}.",
                    notMetadata: "Command Palette-plugin-metadata er ikke tilgængelig."
                },
                guild: {
                    mute: {
                        unavailable: "Server mute-kontroller er ikke tilgængelige",
                        muted: "Serveren er blevet lydløs.",
                        unmuted: "Server muting er blevet fjernet.",
                        failed: "Server mute-status kunne ikke opdateres."
                    },
                    settings: {
                        unable: "Kan ikke åbne serverindstillinger.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Fastgørelsespanelet kan ikke åbnes.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Den planlagte statusnulstilling er blevet annulleret.",
                        unableToChange: "Status kan ikke ændres på nuværende tidspunkt.",
                        reverted: "Status returneres som {{status}}.",
                        dnd: "Forstyr ikke i {{duration}} minutter."
                    },
                    change: {
                        unableToChange: "Status kan ikke ændres på nuværende tidspunkt.",
                        changed: "Status ændret til {{status}}."
                    }
                },
                read: {
                    marked: "{{channelLabel}} er markeret som læst.",
                    failed: "Kanalen kunne ikke markeres som læst."
                },
                route: {
                    unable: "Kan ikke åbne {{destination}}.",
                },
                notification: {
                    cleared: "Alle meddelelser er ryddet.",
                    failed: "Notifikationer kunne ikke ryddes.",
                    notSupported: "Rydning af notifikationer understøttes ikke."
                },
                streamerMode: {
                    enabled: "Broadcaster-tilstand er aktiveret.",
                    disabled: "Broadcaster-tilstand er deaktiveret.",
                },
                voice: {
                    micToggle: {
                        muted: "Mikrofonen blev stille.",
                        unmuted: "Mikrofonen er tændt."
                    },
                    deafenToggle: {
                        deafened: "Du er nu døv.",
                        undeafened: "Du er ikke længere døv."
                    }
                },
                quickCSS: {
                    enabled: "Hurtig CSS er aktiveret.",
                    disabled: "Hurtig CSS er deaktiveret."
                },
                transparentity: {
                    enabled: "Vinduesgennemsigtighed er aktiveret.",
                    disabled: "Vinduesgennemsigtighed er deaktiveret."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} er deaktiveret.",
                        disable: "{{pluginName}} er deaktiveret. Aktiver plugin'et for at bruge denne handling."
                    },
                    required: {
                        label: "{{pluginName}} kræver en genstart for at geninstallere."
                    },
                    stop: {
                        failed: "{{pluginName}} kunne ikke stoppes."
                    },
                    restart: {
                        failed: "Kunne ikke genstarte {{pluginName}}."
                    },
                    reload: {
                        label: "{{pluginName}} er blevet genindlæst.",
                        noPlugin: "Ingen plugins blev geninstalleret.",
                        reloaded: "{{count}} plugins geninstalleret."
                    },
                    toggle: {
                        enabled: "{{changed}} plugin aktiveret.",
                        disabled: "{{changed}} plugin er deaktiveret.",
                        noChanged: "Status for eventuelle plugins er ikke ændret."
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
                    group: "Grup DM",
                    direct: "Direkte besked"
                },
                guild: {
                    current: "Nuværende server",
                }
            },
            option: {
                hotkey: {
                    label: "Genvejstast",
                    description: "Genvejstast bruges til at åbne kommandopaletten",
                    recording: "Tryk på en vilkårlig tast...",
                    reset: "nulstilles"
                },
                visualStyle: {
                    label: "Visuel stil",
                    description: "paletvisning",
                    classic: "Klassisk",
                    polished: "Poleret (moderne)"
                },
                showTags: {
                    label: "Vis tags",
                    description: "Vis etiketter for kommandoer"
                },
                enableTagFilter: {
                    label: "Aktiver tagfilter",
                    description: "Vis tagfilterbjælke"
                },
                customCommands: {
                    label: "Særlige kommandoer",
                    description: "Administrer brugerdefinerede kommandopaletposter"
                }
            },
            template: {
                alias: {
                    label: "Kaldenavn kommando",
                    description: "Afspejler en eksisterende kommando"
                },
                settings: {
                    label: "Indstillinger",
                    description: "Åbn Discord-indstillinger"
                },
                url: {
                    label: "Forbindelse",
                    description: "Åbner en ekstern URL"
                },
                macro: {
                    label: "Makro",
                    description: "Kører en række kommandoer"
                }
            }
        },
        consoleJanitor: {
            name: "KonsolPædagog",
            description: "Deaktiverer irriterende konsolmeddelelser/fejl",
            option: {
                disableLoggers: {
                    label: "Deaktiver loggere",
                    description: "Deaktiverer Discords loggere"
                },
                disableSpotifyLogger: {
                    label: "Deaktiver Spotify Logger",
                    description: "Deaktiverer Spotify-logger, der lækker kontooplysninger og adgangsnøgle"
                },
                whitelistedLoggers: {
                    label: "Hvidlistede loggere",
                    description: "Semikolon (;) adskilt liste over loggere, der vil være tilladt, selvom andre er skjult"
                },
                allowLevel: {
                    label: "Tilladt niveau",
                    description: "Tillad altid loggere af disse typer",
                    filter: "Filterliste"
                }
            }
        },
        consoleShortcuts: {
            name: "Konsolgenveje",
            description: "Tilføjer kortere genveje til mange ting på vinduet. Kør 'shortcutList' for listen."
        },
        contentWarning: {
            name: "Indholdsadvarsel",
            description: "Gør det muligt at sløre visse triggerord som standard. Ved at klikke på sløret indhold bliver det synligt.",
            option: {
                flagged: {
                    label: "mærke",
                    flagged: "Markerede Ord",
                    placeholder: "Ord"
                },
                onClick: {
                    label: "Klik på den",
                    description: "Vis indhold ved klik, ikke kun ved mouseover"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Giver dig mulighed for at kopiere emojis som formateret tekst (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Unicode kopier",
                    description: "Kopierer det rå unicode-tegn i stedet for :name: til standard-emojis (👽)"
                }
            },
            context: {
                copy: "Kopier Emoji Markdown"
            },
            toast: {
                success: "Vellykket! Emojis markdown er blevet kopieret."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Tilføjer en knap til vedhæftede tekstfiler for at kopiere deres indhold",
            copied: "Kopieret!",
            large: "Filen er for stor til at kopiere.",
            copyFileContents: "Kopier filindhold"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Et plugin, der kopierer brugernes profilgradientfarver til udklipsholderen.",
            copy: "Kopier profilfarver",
            toast: {
                noColor: "Profilfarver blev ikke fundet!",
                copied: "Profilfarver kopieret til udklipsholder!",
                error: "Fejl ved kopiering af profilfarver!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Kopiér en brugers status-URL, når du højreklikker",
            toast: {
                copied: "URL kopieret",
                error: "Fejl under kopiering af URL. Tjek konsollen for at få flere oplysninger"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Tilføjer muligheden for at kopiere og åbne klistermærkelinks",
            context: {
                copy: "Kopiér link",
                open: "Åbn link"
            },
            toast: {
                success: "Linket er kopieret!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Tilføjer en knap til brugerens kontekstmenu for at kopiere brugerens omtale. Fungerer bedst med ValidUser.",
            context: {
                copy: "Kopier brugeromtale"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Tilføjer muligheden 'Kopiér bruger-URL' til brugerens kontekstmenu.",
            context: {
                copy: "Kopiér bruger-URL"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Hjælper-plugin til at administrere og, hvis det er muligt, genoprette fra nedbrud uden at skulle genstarte",
            option: {
                attemptToPreventCrashes: {
                    label: "Prøv at forhindre nedbrud",
                    description: "Prøv at forhindre Discord-nedbrud?"
                },
                attemptToNavigateToHome: {
                    label: "Prøv at omdirigere til hjemmesiden",
                    description: "Forsøg på at omdirigere til hovedfanen i gendannelse efter nedbrud."
                }
            },
            toast: {
                crashed: {
                    title: "Discord styrtede ned!",
                    body: "Ups :( Discord styrtede ned to gange på kort tid, der vil ikke blive lavet et gendannelsesforsøg. Klik her og tilmeld dig supportserveren!",
                    update: "Åh nej, Discord er lige gået ned ... men gode nyheder, der er en Plexcord-opdatering, der kan løse dette problem! Vil du opdatere nu?",
                    recover: "Forsøger at genoprette... Klik her og tilmeld dig supportserveren!",
                    invalid: "Ugyldigt eller udløbet invitationslink."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Brug Ctrl+Enter til at sende besked (kan tilpasses)",
            option: {
                submitRule: {
                    label: "Posteringsregel",
                    description: "Hvordan en besked sendes",
                    ctrlEnter: "Ctrl+Enter (Enter eller Shift+Enter for ny linje) (cmd+enter på macOS)",
                    shiftEnter: "Shift+Enter (Enter for ny linje)",
                    enter: "Enter (Shift+Enter for ny linje; Discord standard)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Send besked i midten af ​​kodeblokken",
                    description: "Send besked midt i en kodeblok"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Tilføjer en sprite, der følger din markør.",
            modal: {
                furColor: "Pelsfarve",
                outlineColor: "Anahat Rengi"
            },
            option: {
                buddy: {
                    label: "Ven",
                    description: "Vælg en markørven",
                    oneko: "god",
                    fathorse: "Fed hest"
                },
                speed: {
                    label: "Hastighed",
                    description: "Din kammerats fart",
                    invalid: "Hastigheden skal være større end 0"
                },
                fps: {
                    label: "Billedhastighed (FPS)",
                    description: "Din vens billedhastighed",
                    invalid: "Billedhastigheden skal være større end 0"
                },
                onekoSection: {
                    label: "god"
                },
                furColor: {
                    label: "Pelsfarve",
                    description: "pels hex farve til oneko"
                },
                outlineColor: {
                    label: "Anahat Rengi",
                    description: "Kontur hex farve til Oneko"
                },
                fathorseSection: {
                    label: "Fed hest"
                },
                size: {
                    label: "Dimension",
                    description: "Størrelse af fed hest",
                    invalid: "Størrelsen skal være større end 0"
                },
                fade: {
                    label: "Faldende",
                    description: "Om hesten falmer, når markøren nærmer sig"
                },
                freeroam: {
                    label: "Gratis roaming",
                    description: "Om hesten kan gå frit i tomgang"
                },
                shake: {
                    label: "Afskedigelse",
                    description: "Om hesten vil ryste vinduet, mens den går"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Tilpas mappeikoner med enhver png",
            option: {
                solidIcon: {
                    label: "Fladt ikon",
                    description: "Brug en almindelig baggrund til baggrunden for dit billede"
                },
                folderIcons: {
                    label: "Mappe ikoner",
                    description: "Indstillinger for mappeikon"
                }
            },
            modal: {
                change: "Skift størrelse på mappeikonet",
                save: "Spare",
                unset: "Fjerne",
                set: "Indstil et nyt ikon",
                hover: "Du skal muligvis holde markøren over mappen, efter du har indstillet den til at opdatere."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Giver dig mulighed for at indstille mængden af ​​tid, før Discord går i inaktiv tilstand (eller deaktiverer automatisk inaktiv tilstand)",
            backOnline: "Velkommen tilbage! Klik på knappen for at gå online. Klik på X for at forblive inaktiv, indtil den genindlæses.",
            exit: "Afslut inaktiv",
            option: {
                idleTimeout: {
                    label: "Timeout for tomgang",
                    description: "Antal minutter før Discord går i inaktiv tilstand (0 for at deaktivere automatisk inaktiv tilstand)"
                },
                remainInIdle: {
                    label: "Forbliv ledig",
                    description: "Når du vender tilbage til Discord, skal du forblive inaktiv, indtil du bekræfter, at du vil gå online"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Tilføj en fuldt tilpasselig Rich Presence til din Discord-profil",
            goTo: "Opret en applikation ved at gå til {{portal}} og få applikations-id'et.",
            upload: "Få billednøgler ved at uploade billeder fra fanen Rich Presence.",
            image: "Hvis du vil bruge et billedlink, skal du downloade dit billede og uploade det til {{imgur}}, derefter højreklikke på billedet og bruge 'Kopier billedadresse' for at få linket.",
            button: "Du kan ikke se dine egne knapper på din profil, men alle andre kan se dem normalt.",
            font: "Nogle mærkelige unicode-bogstaver ('𝖇ö𝖞𝖑𝖊 𝖞𝖆𝖟ı𝖑𝖆𝖗') kan forårsage, at Rich Presence ikke vises, prøv at bruge normale bogstaver i stedet.",
            placeholder: "Indtast en værdi",
            select: "Vælg en mulighed",
            error: {
                appIdInvalid: "Applikations-id er ikke et gyldigt nummer.",
                notice: "Advarsel",
                sharing: "Begivenhedsdeling er ikke aktiveret, folk vil ikke kunne se din private rige tilstedeværelse!",
                enable: "aktivere",
                validStream: "Postlinket skal være en gyldig URL.",
                mustBeURL: "Det skal være en gyldig URL.",
                streamCharacters: "Postlinket må ikke være længere end 512 tegn.",
                dontUse: "Brug ikke et Discord-link. Brug i stedet et Imgur-billedlink.",
                imgur: "Imgur-linket skal være direkte til billedet (for eksempel: https://i.imgur.com/...). Højreklik på billedet og klik på 'Kopier billedadresse'.",
                tenor: "Tenor-linket skal være direkte til billedet (for eksempel: https://media.tenor.com/...). Højreklik på GIF'en og klik på 'Kopiér billedadresse'.",
                required: "Dette felt er påkrævet.",
                tooLong: "Den må ikke være længere end {{maxLength}} tegn.",
                mustBeNumber: "Det skal være et tal.",
                mustBePositive: "Det skal være et positivt tal.",
                startTimeInvalid: "Starttidspunktet skal være større end 0.",
                endTimeInvalid: "Sluttidspunktet skal være større end 0."
            },
            option: {
                appId: {
                    label: "Ansøgnings-id",
                    description: "App-id (påkrævet)"
                },
                appName: {
                    label: "Ansøgningsnavn",
                    description: "Appnavn (påkrævet)"
                },
                details: {
                    label: "Detalje",
                    description: "Detaljer (linje 1)"
                },
                detailsURL: {
                    label: "Detaljer URL",
                    description: "Klikbar URL for detaljer"
                },
                state: {
                    label: "Durum",
                    description: "Status (linje 2)"
                },
                stateURL: {
                    label: "Status URL",
                    description: "Klikbar URL for status"
                },
                partySize: {
                    label: "Gruppestørrelse",
                    description: "Aktuel gruppestørrelse (skal bruges sammen med maksimal gruppestørrelse)"
                },
                partyMax: {
                    label: "Maksimal gruppestørrelse",
                    description: "Maksimal gruppestørrelse (skal bruges med aktuel gruppestørrelse)"
                },
                type: {
                    label: "Begivenhedstype",
                    description: "Begivenhedstype",
                    playing: "spiller",
                    streaming: "Udsendelse",
                    listening: "lytter",
                    watching: "ser på",
                    competing: "væddeløb"
                },
                streamLink: {
                    label: "Post link",
                    description: "Link til Twitch.tv eller Youtube.com (kun for broadcast-begivenhedstype)"
                },
                timestampMode: {
                    label: "Tidsstempeltilstand",
                    description: "Hvad tidsstemplet skal indikere",
                    none: "Ingen",
                    sinceDiscordOpen: "Siden Discord åbnede",
                    sameAsCurrentTime: "Samme som din nuværende tid (nulstilles ikke efter 24 timer)",
                    custom: "Særlig tid"
                },
                startTime: {
                    label: "Starttid (i millisekunder)",
                    description: "Starttidsstempel (kun for brugerdefineret tidstilstand)"
                },
                endTime: {
                    label: "Sluttidspunkt (i millisekunder)",
                    description: "Sluttidsstempel (kun for brugerdefineret tidstilstand)"
                },
                imageBig: {
                    label: "Stor visuel nøgle",
                    description: "Stor visuel nøgle (skal installeres på fanen Rich Presence)"
                },
                imageBigTooltip: {
                    label: "Stor visuel clue",
                    description: "Tip, der vises, når du holder markøren over det større billede"
                },
                imageBigURL: {
                    label: "Stor billed-URL",
                    description: "Stort billede, klikbar URL"
                },
                imageSmall: {
                    label: "Lille visuel switch",
                    description: "Lille visuel nøgle (skal installeres på fanen Rich Presence)"
                },
                imageSmallTooltip: {
                    label: "Lille visuel ledetråd",
                    description: "Tip, der vises, når du holder markøren over et miniaturebillede"
                },
                imageSmallURL: {
                    label: "URL til miniaturebillede",
                    description: "Lille billede, klikbar URL"
                },
                buttonOneText: {
                    label: "Knap 1 Metni",
                    description: "Knap 1 metni"
                },
                buttonOneURL: {
                    label: "Knap 1 URL",
                    description: "Knap 1 tilslutning"
                },
                buttonTwoText: {
                    label: "Knap 2 Metni",
                    description: "Knap 2 metni"
                },
                buttonTwoURL: {
                    label: "Knap 2 URL",
                    description: "Knap 2 tilslutning"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Tilpas Discords lyde.",
            search: "Søg efter lyde",
            placeholder: "Søg på navn eller ID",
            import: "Iche Aktar",
            export: "Eksportere",
            reset: "Nulstil alle",
            debug: "Fejlretning",
            toast: {
                error: "Fejl ved indlæsning af tilpasset lydfil",
                exported: "{{count}} indstillinger eksporteret (lydfiler er ikke inkluderet)",
                imported: "Indstillinger blev importeret",
                importError: "Der opstod en fejl under import af indstillinger. Tjek konsollen for detaljer.",
                reset: "Alle lyde er blevet nulstillet!",
                overrideDescription: "{{soundName}} lyd ændret",
                previewSound: "Der opstod en fejl under afspilning af lyden.",
                playing: "Den brugerdefinerede lyd kunne ikke afspilles. Filen kan være korrupt.",
                invalidFile: "Ingen tilpasset lydfil til forhåndsvisning",
                uploaded: "Filen blev uploadet: {{fileName}}",
                uploadedError: "Der opstod en fejl under upload af filen: {{error}}",
                invalidExtension: "Ugyldig filtype. Upload venligst en lydfil.",
                uploading: "Indlæser fil...",
                deleted: "Filen blev slettet",
                deleteError: "Der opstod en fejl under sletning af filen.",
                loadingError: "Fejl ved indlæsning af tilpasset lydfil"
            },
            button: {
                preview: "Forhåndsvisning",
                stop: "Flyde",
                volume: "Ses",
                soundSource: "Lydkilde",
                customFile: "Speciel fil",
                uploadNew: "Ny upload",
                delete: "Slet den valgte fil"
            },
            option: {
                default: "Misligholdelse",
                custom: "Særlig",
                select: "Vælg en fil..."
            },
            type: {
                activityEnd: "Begivenheden er slut",
                activityLaunch: "Begivenheden startede",
                activityUserJoin: "Bruger deltog i begivenheden",
                activityUserLeft: "Bruger forlod begivenheden",
                asmrMessage: "ASMR-meddelelse",
                bitMessage: "Bit besked",
                bopMessage: "Bop besked",
                callCalling: "Søgning i gang",
                callRinging: "Ringer opkald",
                clipError: "Klipfejl",
                clipSave: "Klip gemt",
                ddrDown: "DDR nede",
                ddrLeft: "DDR Sol",
                ddrRight: "DDR højre",
                ddrUp: "DDR op",
                deafen: "døve",
                discodo: "disk",
                disconnect: "Afbrudt",
                duckyMessage: "Ducky besked",
                hangStatusSelect: "Suspend Status Selection",
                highfiveClap: "High Five applaus",
                highfiveWhistle: "High Five fløjte",
                humanMan: "menneskelig mand",
                lofiMessage: "LoFi besked",
                mention1: "Omtale 1 (@rolle)",
                mention2: "Omtale 2 (@alle)",
                mention3: "Omtale 3 (@her)",
                message1: "Besked 1 (Generelt)",
                message2: "Besked 2 (svar på server)",
                message3: "Besked 3 (DM'er og gruppe-DM'er)",
                mute: "Stum",
                overlayUnlock: "Lag ulåst",
                poggermodeAchievement: "Poggermode præstation",
                poggermodeApplause: "Poggermode bifald",
                poggermodeEnabled: "Poggermode aktiveret",
                poggermodeMessage: "Poggermode besked",
                pttStart: "Start PTT",
                pttStop: "PTT Stop",
                reconnect: "Tilslut igen",
                robotMan: "Robot Adam",
                stageWaiting: "Afventer scene",
                streamEnded: "Udsendelse afsluttet",
                streamStarted: "Udsendelsen er startet",
                streamUserJoined: "Bruger deltog i udsendelsen",
                streamUserLeft: "Bruger forlod udsendelsen",
                success: "Vellykket",
                undeafen: "Fjern øredøvende",
                unmute: "Fjern stilhed",
                userJoin: "Bruger tilsluttet",
                userLeave: "Bruger venstre",
                userMoved: "Bruger flyttet",
                vibingWumpus: "Wumpus sidder fast"
            }
        },
        customTimestamps: {
            name: "Brugerdefinerede tidsstempler",
            description: "Brugerdefinerede tidsstempler på beskeder og værktøjstip",
            demo: {
                cozy: "Klik på mig for at skifte til casual format",
                compact: "Klik på mig for at skifte til kompakt format",
                lastWeek: "Denne besked blev sendt i sidste uge",
                hover: "Du kan se værktøjstip-formater ved at holde markøren over tidsstempler",
                edit: "Rediger formater nedenfor, se dem opdateret live her"
            },
            modal: {
                title: "Sådan bruger du:",
                moment: "Moment.js formateringsdokumentation",
                hint: "Derudover kan du bruge følgende i dine poster:",
                calendar: "muliggør f.eks. dynamisk datoformatering",
                today: "I dag",
                yesterday: "I går",
                relative: "giver dig tider som:",
                relativeTime: "4 timer siden",
                preview: "Forhåndsvisning",
                format: "kalenderformat",
                howTo: "Her er, hvordan du formaterer [kalender]-værdien, når den bruges i tidsstemplerne ovenfor."
            },
            option: {
                formats: {
                    label: "Formater",
                    description: "Tilpas tidsstempelformater",
                },
                cozyFormat: {
                    label: "relief mod",
                    description: "Tidsformat til brug for afslappet tilstand i beskeder"
                },
                compactFormat: {
                    label: "Kompakt mod",
                    description: "Tidsformat til brug i kompakt tilstand og når du holder musemarkøren over beskeder"
                },
                tooltipFormat: {
                    label: "værktøjsspids",
                    description: "Tidsformat til brug i værktøjstip"
                },
                ariaLabelFormat: {
                    label: "Aria etiketter",
                    description: "Tidsformat til brug i Aria-tags"
                },
                sameDayFormat: {
                    label: "samme dag",
                    description: "[kalender] format for i dag",
                    default: "[Bugün] TT:mm:ss"
                },
                lastDayFormat: {
                    label: "I går",
                    description: "[kalender] format for i går",
                    default: "[Tynd] TT:mm:ss"
                },
                lastWeekFormat: {
                    label: "Sidste uge",
                    description: "[kalender] format for sidste uge"
                },
                sameElseFormat: {
                    label: "ældre",
                    description: "[kalender] format for ældre datoer"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Giver dig mulighed for at tilføje en brugerdefineret farve til enhver bruger, hvor som helst! Stærkt anbefalet at bruge med typingTweaks og roleColorEverywhere",
            option: {
                dmList: {
                    label: "DM liste",
                    description: "Navne på brugere tildelt specielle farver vil blive farvet i DM-listen"
                },
                colorInServers: {
                    label: "Farve på servere",
                    description: "Skal navnefarver også ændres på servere?"
                }
            },
            context: {
                setColor: "Juster farve"
            },
            modal: {
                custom: "Brugerdefineret farve",
                pick: "vælg en farve",
                delete: "Slet post",
                save: "Spare"
            }
        },
        dearrow: {
            name: "Dearrow",
            description: "Gør YouTube-indlejring af titler og thumbnails mindre sensationelle, drevet af Dearrow",
            option: {
                hideButton: {
                    label: "Skjul knap",
                    description: "Skjuler Dearrow-knappen fra YouTube-indlejringer"
                },
                replaceElements: {
                    label: "Skift varer",
                    description: "Vælg hvilke elementer i indlejringen, der skal erstattes",
                    everything: "Alt (titler og miniaturebilleder)",
                    title: "Titler",
                    thumbnail: "Miniaturebilleder"
                },
                dearrowByDefault: {
                    label: "Dearrow som standard",
                    description: "Dearrow videoer automatisk"
                }
            },
            tooltip: {
                dearrowed: "Dearrow er blevet anvendt på denne indlejring. Klik for at gendanne",
                dearrow: "Klik for at anvende dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Rydder op i Discord ved at fjerne ikke-essentielle UI-elementer som profileffekter, butiksfaner, power-ups og mere.",
            option: {
                userProfileHeader: {
                    label: "Brugerprofil"
                },
                removeNameplate: {
                    label: "Fjern navneskilt",
                    description: "Fjerner navneskilte."
                },
                removeProfileEffect: {
                    label: "Fjern profileffekt",
                    description: "Fjerner animationseffekter, der vises, når profilen åbnes."
                },
                removeClanTag: {
                    label: "Fjern Clan Tag",
                    description: "Fjerner klan-tags."
                },
                alwaysShowUsername: {
                    label: "Vis altid brugernavn",
                    description: "Det viser altid brugernavnet i stedet for status."
                },
                accessibilityNotice: {
                    label: "Advarsel om tilgængelighed",
                    description: "Discord har allerede en indbygget mulighed for brugernavnstil i dets tilgængelighedsindstillinger."
                },
                friendsListHeader: {
                    label: "Over venne-/DM-liste"
                },
                removeShopAboveDM: {
                    label: "Fjern Store over DM-listen",
                    description: "Fjerner butiksknappen over DM-listen."
                },
                removeQuestsAboveDM: {
                    label: "Fjern opgaver fra DM-listen",
                    description: "Fjerner opgaveknappen over DM-listen."
                },
                miscHeader: {
                    label: "Forskellige"
                },
                removeServerBoostInfo: {
                    label: "Fjern Server Boost Information",
                    description: "Fjerner serverforstærkningsoplysninger øverst på kanallisten."
                },
                removeBillingSettings: {
                    label: "Fjern betalingsindstillinger",
                    description: "Fjerner betalingsindstillinger (faktura)."
                },
                removeGiftButton: {
                    label: "Fjern gaveknap",
                    description: "Fjerner knappen Send gave."
                },
                removeUnavailableEmojiPicker: {
                    label: "Fjern Utilgængelig Emoji-vælger",
                    description: "Fjerner utilgængelige kategorier i emojivælgeren."
                },
                removeAudioMenus: {
                    label: "Fjern lydmenuer",
                    description: "Fjerner pilemenuerne ved siden af ​​mute- og døv-knapperne."
                },
                removeButtonTooltips: {
                    label: "Fjern knaptip",
                    description: "Det fjerner værktøjstip, der vises på knapperne."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Afkod base64-indholdet af enhver besked og kopier det afkodede indhold.",
            right: {
                decode: "Kopi løst (venstreklik) / Base64 løs (højreklik)",
                copy: "Base64 Decode (venstre klik) / Copy Decoded (højreklik)"
            },
            option: {
                clickMethod: {
                    label: "Klik på Metode",
                    description: "Skift opførsel af knappen for at afkode base64-indholdet i enhver meddelelse.",
                    left: "Venstreklik for at afkode Base64-indhold.",
                    right: "Højreklik for at afkode Base64-indhold."
                }
            },
            modal: {
                title: "Afkodet Base64-indhold",
                content: "Opløst indhold",
                copy: "Kopiér løst indhold {{indeks}}",
                copied: "Løst indhold kopieret til udklipsholder!"
            }
        },
        decor: {
            name: "Indretning",
            description: "Opret og brug dine egne tilpassede avatar-dekorationer, eller vælg din favorit blandt forudindstillingerne.",
            presetPart: "En del af forudindstillingen {{name}}",
            createdBy: "Skabt af {{author}}",
            copy: "Kopiér forudindstillet ID",
            file: "Fil",
            your: {
                title: "dekorationer",
                subtitle: "Du kan slette dine egne dekorationer ved at højreklikke."
            },
            option: {
                changeDecoration: {
                    label: "Skift ornament",
                    description: "For at ændre din avatar-dekoration skal du aktivere Dekoration og genstarte din klient.",
                    also: "Du kan også få adgang til dekorationsdekorationer fra siden {{profiler}}.",
                    profiles: "Profiler"
                },
                baseUrl: {
                    label: "Basis URL",
                    description: "Dekor API URL'er"
                },
                agreedToGuidelines: {
                    label: "Jeg accepterede reglerne",
                    description: "Regler accepteret"
                }
            },
            context: {
                decorationOptions: "Indretningsmuligheder",
                copyHash: "Kopier dekorationshash",
                deleteDecoration: "Slet Ornament"
            },
            alert: {
                delete: {
                    title: "Slet Ornament",
                    body: "Er du sikker på, at du vil slette {{decoration}} dekorationen?",
                    confirm: "Sil",
                    cancel: "Ophæve"
                },
                logout: {
                    title: "Log ud",
                    body: "Er du sikker på, at du vil logge ud af Dekor?",
                    confirm: "Log ud",
                    cancel: "Ophæve"
                }
            },
            button: {
                change: "Skift ornament",
                remove: "Fjern dekoration",
                apply: "Anvende",
                cancel: "Ophæve",
                browse: "Gennemse",
                submit: "Send til gennemgang",
                continue: "Devam Et",
                back: "Gå tilbage"
            },
            tooltip: {
                pendingReview: "Du har allerede et ornament under gennemgang",
                pending: "Afventer gennemgang"
            },
            join: {
                tooltip: "Tilmeld dig Decors Discord-server for at gennemgå din dekoration og modtage meddelelser, når nye forudindstillinger frigives",
                button: "Discord server"
            },
            create: {
                title: "Opret ornament",
                notViolate: "Sørg for, at din udsmykning ikke overtræder {{retningslinjer}}, før du indsender.",
                guidelines: "regler",
                file: "Filen skal være APNG eller PNG.",
                fileHolder: "Vælg en fil",
                name: "Dette navn vil blive brugt, når der henvises til dette ornament.",
                nameHolder: "Companion Cube",
                nameTitle: "Ad"
            },
            help: {
                update: "Tilmeld dig {{server}} og tillad direkte beskeder at modtage opdateringer om din dekorations anmeldelse.",
                server: "Indretning af Discord"
            },
            guidelines: {
                hold: "vente",
                suspended: "Ved at indsende en dekoration accepterer du {{guidelines}}. Undladelse af at læse disse regler kan resultere i suspension af din ret til at skabe flere dekorationer i fremtiden.",
                guidelines: "regler"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin til at tage temaskærmbilleder - censorer, der identificerer billeder og tekst.",
            toolbox: {
                toggle: "censureret"
            },
            keycode: "Tjek {{keycode}} for at ændre din genvejstast!",
            this: "af dette køretøj",
            okay: "Okay!",
            option: {
                keyBind: {
                    label: "Genvejstast",
                    description: "Knap, der tænder og slukker for temaet, når der trykkes på"
                },
                soundVolume: {
                    label: "Lydniveau",
                    description: "Lydstyrke for tænd/sluk-lyd (0 = slukket)"
                },
                showConfirmationModal: {
                    label: "Vis bekræftelsesvindue",
                    description: "Vis vindue for at minde om genvej"
                }
            },
            switch: {
                note: "Du kan genaktivere denne indstilling senere",
                disable: "Deaktiver bekræftelsesvinduet?"
            },
            shortcut: "Dette vil censurere alle tekster! Husk genvejen for at deaktivere dette:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Developer Assistant Plugin. Hvis du ser noget, der ikke fungerer eller opfører sig mærkeligt (sandsynligvis en fejl), rapporter det til MutanPlex, enten tag eller dm det, tak!",
            reconnect: "Tilslut igen",
            option: {
                notifyOnAutoConnect: {
                    label: "Giv besked på Auto-Connect",
                    description: "Vis meddelelse, når Dev Companion automatisk opretter forbindelse?"
                },
                usePatchedModule: {
                    label: "Brug Patch Module",
                    description: "For anmodninger om fjernelse skal du svare med det eksisterende patchede modul (hvis patched) i stedet for originalen."
                },
                reloadAfterToggle: {
                    label: "Efter geninstallation",
                    description: "Geninstaller efter at have modtaget kommandoen deaktiver/aktiver plugin."
                }
            },
            toast: {
                title: "Dev Companion tilsluttet",
                connected: "tilsluttet WebSocket",
                disconnected: "Dev Companion afbrudt",
                error: "Dev Companion-fejl",
                reload: "Geninstallation påkrævet",
                failed: "Kunne ikke initialisere afhængigheder: {{failures}}",
                close: "Kvarter",
                stopping: "Fejl ved at stoppe {{plugin}} plugin",
                starting: "Fejl ved initialisering af {{plugin}} plugin",
                noMessage: "Ingen fejlmeddelelse",
                noReason: "Årsag ikke angivet"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Deaktiverer automatisk at blive smidt ud af DM-taleopkaldet efter 3 minutter og flyttet til AFK-talekanalen."
        },
        disableCameras: {
            name: "Deaktiver kameraer",
            description: "Deaktiverer kameraer i opkald som standard"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Aktiverer Discord-udviklerbanneret, der viser Build-ID-oplysninger.",
            about: "Discord Developer Banner-format. Du kan bruge følgende variable:",
            preview: "Eksempel:",
            empty: "Formatet må ikke være tomt.",
            variables: {
                discord: {
                    title: "Discord-variabler",
                    icon: "Discord ikon",
                    banner: "Udvikler banner ikon",
                    channel: "Discord build-kanal (f.eks. stabil)",
                    build: "Discord build-nummer (f.eks. 123456)",
                    hash: "Discord build-hash (f.eks. 123456)"
                },
                plexcord: {
                    title: "Plexcord-variabler",
                    icon: "Plexcord ikon",
                    name: "Plexcord navn",
                    version: "Plexcord-version (f.eks. 1.0.0)",
                    hash: "Plexcord-strukturhash (f.eks. 123456)",
                    platform: "Platform Plexcord kører på (f.eks. Dev Build)"
                },
                plextron: {
                    title: "Plextron brugerdefinerede variabler",
                    hashShort: "Plextron kort struktur hash (f.eks. 123456789)",
                    platformType: "Platform type Plextron kører på (f.eks. Dev Build)"
                },
                client: {
                    title: "Klientvariabler",
                    icon: "skrivebordsikon",
                    name: "Klientnavn (f.eks. Discord Canary)",
                    version: "Klientversion (f.eks. 1.0.0)",
                },
                electron: {
                    title: "Elektronvariabler",
                    icon: "Elektron ikon",
                    version: "Elektronversion (f.eks. 25.0.0)"
                },
                chromium: {
                    title: "Chrom-variabler",
                    icon: "Chromium ikon",
                    version: "Chromium-motorversion (f.eks. 125.0.0.0)"
                },
                misc: {
                    title: "Diverse variabler",
                    newline: "nylinjekarakter"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Advarer dig, hvis din besked indeholder et udtryk, der er på klarlisten til automatisk moderering",
            alert: {
                title: "Vent et øjeblik!",
                content: "Din besked indeholder et udtryk, der er på den automatiske modereringsklarliste. (Udtrykket '{{trigger}}')",
                content2: "Der er stor sandsynlighed for, at din besked bliver blokeret og behandlet af en servermoderator.",
                confirm: "Send alligevel",
                cancel: "Ophæve"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Runder altid relative tidsstempler ned, så 7.6y bliver 7y i stedet for 8y"
        },
        dragFavoriteEmotes: {
            name: "DragFavoritEmotes",
            description: "Tilføjer træk-og-slip-funktion for at ændre rækkefølgen af ​​foretrukne emojis"
        },
        dragify: {
            name: "Dragify",
            description: "Træk og slip brugere, kanaler eller oplægsholdere ind i chatten for at tilføje omtaler eller invitationer.",
            option: {
                userOutput: {
                    label: "Bruger output",
                    description: "Output for brugerfrafald.",
                    mention: "ikke nævne",
                    id: "Brugeridentitet (ID)"
                },
                channelOutput: {
                    label: "Kanaloutput",
                    description: "Kanalfrigivelsesudgang.",
                    mention: "#kanal omtale",
                    link: "Kanalforbindelse",
                },
                inviteExpireAfter: {
                    label: "Invitationens varighed",
                    description: "Gyldighedsperioden for invitationslinket.",
                    never: "Aldrig",
                    thirtyMinutes: "30 minutter",
                    oneHour: "1 øjeblik",
                    sixHours: "6 øjeblikke",
                    twelveHours: "12 øjeblikke",
                    oneDay: "1 dag",
                    sevenDays: "7 dage"
                },
                inviteMaxUses: {
                    label: "Maksimalt antal anvendelser",
                    description: "Maksimal brugsgrænse for invitationen.",
                    noLimit: "Ingen grænser",
                    one: "1 Anvendelse",
                    five: "5 Brug",
                    ten: "10 Brug",
                    twentyFive: "25 Brug",
                    fifty: "50 anvendelser",
                    hundred: "100 anvendelser"
                },
                inviteTemporaryMembership: {
                    label: "Giv et midlertidigt medlemskab",
                    description: "Det giver midlertidigt medlemskab til de inviterede.",
                },
                reuseExistingInvites: {
                    label: "Genbrug eksisterende invitation",
                    description: "Den bruger den eksisterende invitation i stedet for at oprette en ny."
                },
                allowChatBodyDrop: {
                    label: "Tillad Drop to Chat Body",
                    description: "Tillader at slippe tekst direkte i chatområdet for at tilføje den."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify kunne ikke udføre handlingen.",
                },
                invite: {
                    created: "Invitationen er oprettet.",
                    unable: "Kan ikke oprette invitation.",
                    noChannel: "Der er ingen tilgængelige kanaler til at oprette en invitation.",
                }
            },
            ghost: {
                user: "Bruger",
                server: "Oplægsholder",
                dm: "Direkte beskeder",
                badge: {
                    channel: "kanal",
                    thread: "titel",
                    voice: "ses",
                    forum: "forum",
                    media: "medier",
                    announcement: "bekendtgørelse",
                    dm: "dm",
                    user: "bruger",
                    server: "oplægsholder"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Fremhæv og inspicér nemt emner.",
            modal: {
                recording: "Indspilning...",
                reset: "nulstilles"
            },
            option: {
                keybind: {
                    label: "Nøgleopgave",
                    description: "Skift highlighter"
                },
                showClasses: {
                    label: "Vis klasser",
                    description: "Viser elementets CSS-klassenavne i værktøjstip"
                },
                showId: {
                    label: "Vis ID",
                    description: "Viser elementets ID-attribut i værktøjstip"
                },
                showFont: {
                    label: "Vis skrifttype",
                    description: "Viser den beregnede skrifttypefamilie og størrelse"
                },
                showPadding: {
                    label: "Vis polstring",
                    description: "Viser elementets interne afstandsværdier"
                },
                showMargin: {
                    label: "Vis ydermargen",
                    description: "Viser elementets ydre rumværdier"
                },
                showBorderRadius: {
                    label: "Vis kantrundhed",
                    description: "Viser elementets grænseradiusværdier"
                },
                showPosition: {
                    label: "Vis placering",
                    description: "Viser elementets CSS-positionstype og z-indeksværdi"
                },
                showDisplay: {
                    label: "Vis visning",
                    description: "Viser elementets visningstype sammen med dets flex- eller gitteregenskaber"
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
            description: "Når du forlader lydkanalen, afspilles en lyd fra lydpanelet.",
            button: "Indstil som global udgangslyd",
            toast: {
                failedToPlay: "Kristus nej! Noget gik galt."
            },
            option: {
                soundGuildId: {
                    label: "Voice Server Identity (ID)",
                    description: "Vælg den server, hvor lyden er placeret.",
                    placeholder: "Vælg en server..."
                },
                soundId: {
                    label: "Stemmeidentitet (ID)",
                    description: "Indtast ID'et for den lyd, du vil afspille.",
                    placeholder: "Indtast stemme-id..."
                }
            }
        },
        experiments: {
            name: "Eksperimenter",
            description: "Giver adgang til eksperimenter og andre funktioner, der kun er udviklere i Discord!",
            modal: {
                about: {
                    title: "Mere information",
                    body: "Du kan åbne Discords udviklerværktøjer med {{key}}"
                },
                warning: {
                    title: "Opmærksomhed!!",
                    body: "Eksperimenter er uudgivne Discord-funktioner. De virker muligvis ikke, eller de kan endda ødelægge din klient eller få din konto til at blive deaktiveret.",
                    notReponsible: "Brug kun eksperimenter, hvis du ved, hvad du laver. Plexcord er ikke ansvarlig for skader, der kan opstå ved at aktivere eksperimenter.",
                    useAtOwnRisk: "Hvis du ikke ved, hvad et eksperiment gør, så ignorer det. Spørg os ikke, hvad de laver, det ved vi nok heller ikke.",
                    serverSideFeatures: "Nej, du kan ikke bruge funktioner på serversiden, såsom at markere feltet 'Send til klient'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Toolbar Developer Menu",
                    description: "Erstatter hjælpe(?) værktøjslinjeknappen (øverst til højre i chatten) med Discords udviklermenu"
                }
            }
        },
        exportMessages: {
            name: "Eksportmeddelelser",
            description: "Giver dig mulighed for at eksportere beskeder til filer - enkelt besked, alle beskeder fra en bruger eller alle beskeder fra en kanal",
            option: {
                maxMessages: {
                    label: "Maksimal besked",
                    description: "Maksimalt antal beskeder, der skal overføres (0 = ubegrænset)"
                },
                includeAttachments: {
                    label: "Inkluder vedhæftede filer",
                    description: "Inkluder vedhæftede oplysninger i overførsler"
                },
                includeEmbeds: {
                    label: "Embedleri Dahil Et",
                    description: "Inkluder integreringsoplysninger i overførsler"
                },
                includeReactions: {
                    label: "Inkluder reaktioner",
                    description: "Inkluder reaktionsoplysninger i overførsler"
                },
                includeComponents: {
                    label: "Inkluder komponenter",
                    description: "Inkluder komponentoplysninger i import"
                }
            },
            message: {
                invalid: "Ugyldig besked - ingen forfatter",
                unknownUser: "Ukendt bruger",
                botEmbed: "Bot Embed Message",
                attachments: "vedhæftede filer",
                unknown: "Ukendt",
                noUrl: "ingen URL",
                embeds: "Embedler",
                title: "Titel",
                description: "Forklaring",
                url: "URL",
                footer: "Altbilgi",
                author: "Forfatter",
                fields: "Felter",
                components: "Komponenter",
                component: "Komponent",
                interactiveElement: "Interaktivt element",
                reactions: "Reaktioner",
                errorFormatting: "Fejl ved formatering af besked",
                unknownError: "ukendt fejl",
                header: "{{titlePrefix}} {{displayName}}, {{channelName}} kanalında",
                from: "Beskeder -",
                direct: "Direkte beskeder",
                exported: "Eksportdato",
                total: "Samlet antal beskeder"
            },
            toast: {
                export: {
                    title: "Eksporter meddelelser",
                    body: "Beskedeksport mislykkedes"
                },
                noMessages: {
                    title: "Eksporter meddelelser",
                    notFoundUser: "Der blev ikke fundet nogen beskeder til denne bruger",
                    notFoundChannel: "Der blev ikke fundet nogen beskeder på denne kanal"
                },
                failed: {
                    title: "Eksporter meddelelser",
                    body: "Der opstod en fejl under eksport af meddelelser"
                },
                userNotFound: {
                    title: "Eksporter meddelelser",
                    body: "Bruger ikke fundet"
                },
                complete: {
                    title: "Eksport afsluttet",
                    saved: "Filen er gemt",
                    downloaded: "Filen er downloadet",
                    messages: "besked"
                }
            },
            context: {
                exportMessage: "Eksporter denne besked",
                exportAll: "Eksporter alle meddelelser fra {{user}}",
                user: "Bruger",
                exportAllChannel: "Eksporter alle meddelelser fra kanalen"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Giver dig mulighed for at klone Emojis og Stickers til din egen server (højreklik)",
            modal: {
                title: "Egennavn",
                invalidName: "Navnet skal være mellem 2 og 32 tegn og kun indeholde alfanumeriske tegn"
            },
            toast: {
                success: "{{name}} er blevet klonet til {{guild}}-serveren!",
                yourServer: "din server",
                failed: "Kloning mislykkedes:",
                console: "Noget gik galt (tjek konsollen!)"
            },
            context: {
                clone: "{{type}} Klon",
                cloneName: "{{data}} Klon"
            }
        },
        f8break: {
            name: "F8 Break",
            description: "Når DevTools (+ breakpoints) er åbne, sætter et tryk på F8 klienten på pause."
        },
        fakeNitro: {
            name: "Falsk Nitro",
            description: "Giver dig mulighed for at sende falske emojis/klistermærker, bruge nitro-temaer og streame i nitro-kvalitet",
            option: {
                enableEmojiBypass: {
                    label: "Aktiver Emoji Spring",
                    description: "Tillader afsendelse af falske emoji (omgår også manglende tilladelse til at bruge tilpasset emoji)"
                },
                emojiSize: {
                    label: "Emoji størrelse",
                    description: "Størrelse, der skal bruges, når du sender emojis"
                },
                transformEmojis: {
                    label: "Transformer emojis",
                    description: "Bestemmer, om falske emojis skal konverteres til rigtige emojis"
                },
                enableStickerBypass: {
                    label: "Aktiver Sticker Skip",
                    description: "Tillader afsendelse af falske klistermærker (omgår også manglende tilladelse til at bruge klistermærker)"
                },
                stickerSize: {
                    label: "Sticker Størrelse",
                    description: "Størrelse, der skal bruges ved afsendelse af klistermærke"
                },
                transformStickers: {
                    label: "Konverter klistermærker",
                    description: "Bestemmer, om falske klistermærker skal konverteres til rigtige klistermærker"
                },
                transformCompoundSentence: {
                    label: "Konverter sammensatte sætninger",
                    description: "Bestemmer, om falske emoji og klistermærker i sammensatte sætninger (sætninger, der indeholder mere indhold end blot den falske emoji eller klistermærkelink) konverteres"
                },
                enableStreamQualityBypass: {
                    label: "Aktiver Broadcast Quality Spring",
                    description: "Tillader streaming i nitro-kvalitet"
                },
                useStickerHyperLinks: {
                    label: "Brug Sticker Bridges",
                    description: "Bestemmer, om der skal bruges et hyperlink, når der sendes falske klistermærker"
                },
                useEmojiHyperLinks: {
                    label: "Brug Emoji Bridges",
                    description: "Bestemmer, om der skal bruges hyperlinks, når der sendes falske emojis"
                },
                hyperLinkText: {
                    label: "Hypertekst",
                    description: "Teksten, der skal bruges i hyperlinket. {{NAVN}} vil blive erstattet med emoji-/mærkatnavnet."
                },
                disableEmbedPermissionCheck: {
                    label: "Deaktiver tjek af indlejringstilladelse",
                    description: "Bestemmer, om kontrol af indlejringstilladelse skal deaktiveres, når der sendes falske emojis og klistermærker"
                }
            },
            modal: {
                sticker: "Dette er et FakeNitro-klistermærke, og det ligner et rigtigt klistermærke kun for dig. Det vises som et link til dem, der ikke bruger plugin.",
                emoji: "Dette er en FakeNitro-emoji, og den ligner kun en rigtig emoji for dig. Det vises som et link til dem, der ikke bruger plugin."
            },
            alert: {
                notice: {
                    title: "Opmærksomhed!",
                    body: "Du forsøger at sende/redigere en besked, der indeholder en FakeNitro emoji eller mærkat, men du har ikke tilladelse til at indlejre links i denne kanal. Er du sikker på, at du vil sende denne besked? Dine FakeNitro-genstande vises kun som links.",
                    footer: "Du kan deaktivere denne advarsel i FakeNitro-indstillingerne",
                    confirm: "Send alligevel",
                    cancel: "Ophæve",
                    secondaryConfirm: "Vis det ikke igen"
                },
                apngSticker: {
                    title: "Opmærksomhed!",
                    body: "Du kan ikke sende denne besked, fordi den indeholder et animeret FakeNitro-mærkat, og du ikke har tilladelse til at tilføje filer i denne kanal. Du skal fjerne klistermærket for at fortsætte."
                }
            }
        },
        fakeProfileThemes: {
            name: "Falske profiltemaer",
            description: "Giver profiltemaer; Den tilføjer skjulte farver til bion takket være den usynlige 3y3-kodning.",
            button: {
                copy: "3y3 Kopi"
            },
            modal: {
                usage: "Bruge",
                preview: "Forhåndsvisning",
                intro: "Når du aktiverer dette plugin, vil du se brugerdefinerede farver på profilerne for andre personer, der bruger kompatible plugins.",
                setColor: "Sådan indstiller du dine egne farver:",
                step1: "• vælg dine farver ved hjælp af farvevælgerne nedenfor",
                step2: "• Klik på knappen {{kopi}}",
                step3: "• indsæt den usynlige tekst hvor som helst i afsnittet Om",
                pickers: "Farvevælgere",
                primary: "Primær",
                accent: "Vægt"
            },
            option: {
                nitroFirst: {
                    label: "Nitro først",
                    description: "Standardfarvekilde, hvis begge er tilgængelige",
                    nitro: "Nitro farver",
                    fake: "falske farver"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Giver dig mulighed for at tilføje profiltemaer og profileffekter; Takket være usynlig 3y3-kodning føjes skjulte farver og effekter til bio.",
            option: {
                prioritizeNitro: {
                    label: "Prioriter Nitro",
                    description: "Ressource til at prioritere",
                    nitro: "Nitro",
                    aboutMe: "om mig"
                },
                hideBuilder: {
                    label: "Skjul skaberen",
                    description: "Skjul FPTE Creator på indstillingssiderne Brugerprofil og Serverprofil"
                }
            },
            modal: {
                primary: "Primær",
                accent: "Vægt",
                effect: "Effekt",
                usage: {
                    title: "Bruge",
                    intro: "Når du aktiverer dette plugin, vil du se brugerdefinerede temafarver og effekter på profilerne for andre personer, der bruger dette plugin.",
                    setColor: "Sådan indstiller du dine egne farver og effekt:",
                    step1: "Gå til profilindstillinger",
                    step2: "Brug FPTE Creator til at vælge profiltemafarver og effekt",
                    step3: "Klik på knappen {{kopi}}",
                    step4: "Indsæt usynlig tekst, hvor du vil, i din bio"
                }
            },
            toast: {
                copied: "FPTE kopieret til udklipsholder!",
                empty: "FPTE Generator er tom; Der er ikke noget at kopiere!"
            },
            button: {
                copyFPTE: "FPTE kopi",
                reset: "nulstilles",
                preview: "FPTE Creator Preview",
                buildBackwards: "Opret bagudkompatibel FPTE",
                moreCharacters: "Der vil blive brugt flere tegn"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Tilføjer et papirkurvsikon for at slette kanaler",
            option: {
                keyBind: {
                    label: "Genvejstast",
                    description: "Nøglen til at åbne og lukke skraldespanden."
                },
                reqCtrl: {
                    label: "Ctrl-tast påkrævet",
                    description: "Kræver at holde Ctrl-tasten nede for at åbne skraldespanden."
                },
                reqShift: {
                    label: "Skift-tast påkrævet",
                    description: "Åbning af papirkurven kræver, at du holder Shift-tasten nede."
                },
                reqAlt: {
                    label: "Alt-tast påkrævet",
                    description: "Åbning af skraldespanden kræver, at du holder Alt-tasten nede."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavoritemojiFirst",
            description: "Det placerer din yndlings-emoji øverst på emoji-autofuldførelseslisten og giver også emoji-kaldenavne.",
            option: {
                aliases: {
                    label: "Kaldenavne",
                    description: "Administrer dine emoji-kaldenavne."
                },
                clearAll: {
                    label: "Ryd alle",
                    description: "Sletter alle kaldenavne."
                }
            },
            modal: {
                clear: {
                    title: "Slet alle aliaser",
                    description: "Dette vil fjerne alle emoji-kaldenavne, du har gemt.",
                    confirm: "Slet alle kaldenavne"
                },
                set: {
                    title: "Indstil kaldenavn",
                    description: "Indstil et kaldenavn til {{emoji}}",
                    placeholder: "Kaldenavn, f.eks. 'Lykkelig'",
                    save: "Spare",
                    error: "Dublet kaldenavn"
                }
            },
            toast: {
                set: "Kaldenavn indstillet til {{emoji}}",
                clearAll: "Alle emoji-kaldenavne er slettet",
                failedDeleted: "Sletning af aliaser mislykkedes",
                removed: "Alias ​​​​for {{alias}} slettet",
                failedRemove: "Aliasets fjernelse mislykkedes",
                duplicate: "Dublet kaldenavn",
                failedSave: "Kaldenavn kunne ikke registreres"
            },
            button: {
                edit: "Rediger kaldenavn",
                set: "Indstil kaldenavn"
            }
        },
        favoriteGifSearch: {
            name: "FavoriteGifSearch",
            description: "Tilføjer en søgelinje til foretrukne GIF'er.",
            placeholder: "Søg efter foretrukne GIF'er",
            option: {
                searchOption: {
                    label: "Søgemulighed",
                    description: "Hvilken del af URL'en du vil søge efter",
                    url: "Alle URL'er",
                    path: "Kun sti (/somegif.gif)",
                    hostandpath: "Vært og sti (tenor.com somegif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavoritAlt",
            description: "Foretruk ethvert billede"
        },
        fileDownloadButton: {
            name: "FileDownload-knap",
            description: "Tilføjer en downloadknap i øverste højre hjørne af filer"
        },
        findReply: {
            name: "FindSvar",
            description: "Springer til det ældste svar på en besked i en kanal (gør det nemmere at holde styr på tidligere samtaler).",
            context: {
                jump: "Gå til Svar"
            },
            toast: {
                navigate: "Brug det nederste panel til at navigere gennem svarene.",
                container: "Containerelement blev ikke fundet.",
                couldntFind: "Ingen svarmeddelelse fundet."
            },
            option: {
                includePings: {
                    label: "Inkluder omtaler",
                    description: "Den søger også efter beskeder sendt direkte til forfatteren."
                },
                includeAuthor: {
                    label: "Inkluder forfatter",
                    description: "Søger efter svar ikke kun til det specifikke indlæg, men også til forfatteren generelt"
                },
                hideButtonIfNoReply: {
                    label: "Skjul knap hvis intet svar",
                    description: "Skjuler knappen, hvis der ikke er noget svar på beskeden"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Fjerner mellemrummet mellem kodeblokke og teksten under dem"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Retter filtypenavne ved at omdøbe dem til et kompatibelt understøttet format, hvis det er muligt"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Forbedrer kvaliteten af ​​billeder ved at tvinge brugen af ​​den originale kilde",
            option: {
                originalImagesInChat: {
                    label: "Vis originale billeder i chat",
                    description: "Vis også det originale billede i Chat. ADVARSEL: Læs advarslerne ovenfor"
                }
            },
            modal: {
                about: {
                    title: "Standardadfærden er som følger:",
                    body: "&mdash; Optimerede billeder i fuld opløsning vil blive indlæst i chatten.",
                    body2: "&mdash; I billedvinduet (billedmodal) vil det originale billede blive indlæst.",
                    body3: "Du kan også aktivere det originale billede i chatten, men vær opmærksom på følgende forbehold:",
                    warning: "&mdash; Animerede billeder (GIF, WebP osv.) i chat vil altid være animerede, selvom applikationen har fokus.",
                    warning2: "&mdash; Det kan forårsage ydeevneproblemer."
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Retter, at Spotify-indlejringer er for høje, lader dig tilpasse lydstyrken",
            option: {
                volume: {
                    label: "Lydniveau",
                    description: "Volumenprocent for at justere for Spotify-indlejringer. Over 10 % ville være for højt"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Omgår blokering af YouTube-videoer fra visning i Discord (f.eks. af UMG)"
        },
        followUser: {
            name: "Følg Bruger",
            description: "Tilføjer en følg-indstilling til brugerens kontekstmenu; sikrer, at du altid er på den samme stemmekanal",
            indicatorTooltip: "{{user}} følges (klik for at udløse manuelt, højreklik for at stoppe)",
            unknownUser: "Ukendt bruger",
            option: {
                executeOnFollow: {
                    label: "Ansøg, når du følger",
                    description: "Når du følger en bruger, skal du sørge for, at vedkommende er på den samme stemmekanal"
                },
                onlyManualTrigger: {
                    label: "Kun manuel udløsning",
                    description: "Udløser kun, når indikatoren klikkes"
                },
                followLeave: {
                    label: "Når fulgte Blade",
                    description: "Når den efterfølgende bruger forlader, skal du også gå"
                },
                autoMoveBack: {
                    label: "Auto Flyt tilbage",
                    description: "Skift automatisk tilbage til den fulgte brugers stemmekanal, når du bevæger dig"
                },
                followUserId: {
                    label: "Fulgte bruger-id",
                    description: "Fulgte bruger-id"
                },
                channelFull: {
                    label: "Kanal fuld",
                    description: "Hvis kanalen ikke længere er fuld, kan du prøve at flytte dig dertil"
                }
            },
            toast: {
                channelFull: "kanal fuld",
                newVc: "Den fulgte bruger skiftede til en ny talekanal",
                insufficientPermissions: "Utilstrækkelig tilladelse til at komme ind i talekanalen",
                sameVc: "Du er allerede på samme kanal",
                disconnect: "Følgte bruger til venstre, afbrudt",
                notFollowing: "Den fulgte bruger forlod, men du stoppede ikke med at følge",
                notVc: "Følget bruger er ikke på talekanalen"
            },
            context: {
                follow: "Følge",
                unfollow: "Slut med at følge"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Installerer enhver skrifttype via Google Fonts",
            option: {
                selectedFont: {
                    label: "Valgt skrifttype",
                    description: "Aktuelt valgt skrifttype"
                },
                fontSearch: {
                    label: "Skrifttypesøgning",
                    description: "Søg og vælg skrifttyper via Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Anvend på kodeblokke",
                    description: "Anvend skrifttype til kodeblokke"
                }
            },
            toast: {
                failedLoad: "Skrifttypen kunne ikke indlæses"
            },
            modal: {
                settings: {
                    title: "Google Fonts'ta Ara",
                    description: "Vælg en skrifttype at anvende",
                    placeholder: "Søg skrifttyper...",
                    previewText: "Den pyjamasklædte patient stolede hurtigt på den fedtede chauffør",
                    authors: "af {{forfattere}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Selvom serveren er stor, viser den med magt serverejerens krone ved siden af ​​brugernavne."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Hvis videresendelse mislykkes, sender den beskeden som en normal besked; Det tillader også transmission af NSFW-indhold.",
            option: {
                forwardPreface: {
                    label: "Videresendelsespræfiks",
                    description: "Hvilken erklæring skal tilføjes til begyndelsen af ​​den transmitterede meddelelse?"
                }
            },
            context: {
                attachments: "vedhæftede filer",
                forwarded: "Videresendt fra:"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Kommandoen /freaky giver dig mulighed for at sende din besked i en mærkelig skrifttype.",
            command: {
                freaky: "Det var mærkeligt.",
                message: "Send din besked i en mærkelig skrifttype"
            },
            option: {
                addFreakyEnding: {
                    label: "Tilføj underlig slutning",
                    description: "Tilføj 👅 eller ❤️ til sidst"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Hyppig Quick Switcher",
            description: "Det erstatter og filtrerer resultaterne i vinduet for hurtig skift med de kanaler, du bruger oftest."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Tilføjer en /friendcloud-kommando for at visualisere de brugere, du interagerer mest med.",
            command: {
                friendcloud: {
                    description: "Visualiser din vennesky",
                    count: "Antal brugere, der skal vises",
                    mustHigher: "Tallet skal være 1 eller højere!",
                    noAffinities: "Ingen nærhedsdata fundet. Tjek dine [privatlivsindstillinger](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Ingen gyldige brugere fundet i proxyerne. Tjek dine [privatlivsindstillinger](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Billedet kunne ikke oprettes :c"
                }
            }
        },
        friendCodes: {
            name: "Vennekoder",
            description: "Generer vennekoder for nemt at tilføje venner",
            card: {
                expires: "Udløb: <t:{{expiration}}:R> • {{uses}}/{{maxUses}} brug",
                copy: "kopi",
                copied: "Kopieret!",
                codes: "Dine venskabskoder",
                count: "Vennekoder - {{invites}}",
                create: "Generer venskabskode",
                revoke: "Annuller alle vennekoder",
                loading: "Indlæser...",
                dontHave: "Du har ingen vennekoder."
            }
        },
        friendInvites: {
            name: "Venindeinvitationer",
            description: "Opret og administrer venneinvitationslinks med Slash-kommandoer (/opret venneinvitation, /se venneinvitationer, /tilbagekald venneinvitationer).",
            command: {
                create: {
                    description: "Genererer et venneinvitationslink.",
                    message: "discord.gg/{{code}}`\n· Udløber: <t:{{expiration}}:R>\n· Maksimal brug: {{bruger}}"
                },
                view: {
                    description: "Se alle oprettede links til venneinvitationer.",
                    message: "_discord.gg/{{code}}_\n· Udløber: <t:{{expiration}}:R> \n· Antal anvendelser: {{uses}}/{{maxUses}}",
                    noInvites: "Du har ikke et aktivt venneinvitationslink."
                },
                revoke: {
                    description: "Annullerer eventuelle venneinvitationslinks, der er blevet oprettet.",
                    message: "Alle links til venneinvitationer er blevet annulleret."
                }
            }
        },
        friendshipRanks: {
            name: "Venskabsrang",
            description: "Tilføjer badges, der viser, hvor længe du har været venner med en bruger.",
            badge: {
                sprout: {
                    name: "Spire",
                    description: "Dit venskab blomstrer bare."
                },
                blooming: {
                    name: "Blomstrer",
                    description: "Dit venskab bliver bedre! (1 måned)"
                },
                burning: {
                    name: "Brandende",
                    description: "Dit venskab har nået sit højdepunkt. (3 måneder)"
                },
                fighter: {
                    name: "Fighter",
                    description: "Dit venskab er stærkt. (6 måneder)"
                },
                star: {
                    name: "Stjerne",
                    description: "Dit venskab har stået på i lang tid. (1 år)"
                },
                royal: {
                    name: "Resultat",
                    description: "Dit venskab har overvundet enhver udfordring - 2 år!"
                },
                besties: {
                    name: "Bedste ven",
                    description: "Hvordan opnår du dette??? (5 år)"
                }
            }
        },
        friendsSince: {
            name: "VennerSiden",
            description: "Det viser, når brugeren er venner med nogen i pop op-vinduet.",
            section: "Dating Dato"
        },
        friendTags: {
            name: "FriendTags",
            description: "At begynde din søgning med & giver dig mulighed for at filtrere efter brugerdefinerede tags i hurtigspringsmenuen.",
            modal: {
                name: "Navn",
                users: "Brugere (adskil med kommaer)",
                userlist: "Brugerliste (Klik på en bruger for at fjerne)",
                remove: "Fjerne",
                add: "Tilføje",
                tag: "Billet",
                removeFrom: "Fjern fra:",
                addTo: "Tilføj til:"
            },
            option: {
                tagConfiguration: {
                    label: "Tag konfiguration",
                    description: "Tag-konfigurationskomponent"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Det gør meddelelseskontekstmenuen i meddelelsessøgeresultater komplet med alle de muligheder, du ville forvente."
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Tilføjer yderligere funktionalitet såsom venstre/højre klik på brugermærket i chatboksen."
        },
        fullVCPFP: {
            name: "Fuld VCPFP",
            description: "Gør det muligt for avatarer at dække hele stemmechatboksen.",
            option: {
                useServerProfileAvatars: {
                    label: "Brug serverprofilavatarer",
                    description: "Bruger præsentationsprofilavatarer i stemmechatbokse (hvis tilgængelig)"
                }
            }
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Tilføjer en kontakt til bruger-popup'en for at vise eller skjule din spilaktivitet.",
            tooltip: "Skift spilbegivenhed",
            gameActivity: {
                enabled: "Spilbegivenhed aktiveret",
                disabled: "Spilbegivenhed deaktiveret"
            },
            option: {
                oldIcon: {
                    label: "gammelt ikon",
                    description: "Brug gammel ikonstil før Discord-ikonet redesigner"
                },
                location: {
                    label: "Kvinder",
                    description: "Hvor skal du vise spilbegivenhedsnøglen",
                    panel: "Ved siden af ​​Mute/Mic Off",
                    toolbox: "Plexcord i værktøjskassen"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Et sødt spøgelse dukker op ved siden af ​​folk, hvis DM'er du ikke har besvaret.",
            modal: {
                title: "Ghosted brugere",
                no: "Ingen ghostede brugere",
                unghost: "fjerne spøgelset",
                unknown: "ukendt",
                unnamedGroup: "Anonym gruppe",
                unknownUser: "Ukendt bruger",
                clearAll: "Ryd alle",
                noGhost: "Der er ingen spøgelser her!",
                clear: "klar"
            },
            option: {
                showIndicator: {
                    label: "Vis indikator",
                    description: "Viser spøgelsestælleren øverst på serverlisten."
                },
                showDmIcons: {
                    label: "Vis DM-ikoner",
                    description: "Viser spøgelsesikoner ved siden af ​​individuelle DM'er."
                },
                ignoreGroupDms: {
                    label: "Ignorer gruppe DM'er",
                    description: "Holder alle gruppebeskeder ude af spøgelseslisten."
                },
                exemptedChannels: {
                    label: "Undtaget kanaler",
                    description: "Kommasepareret liste over kanal-id'er (ID), der ikke vil blive inkluderet i spøgelseslisten (højreklik på en DM-kanal for at kopiere ID'et)."
                },
                ignoreBots: {
                    label: "Ignorer bots",
                    description: "Ignorerer DM'er fra bots."
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Lader dig oprette GIF-samlinger.",
            context: {
                copyImageLink: "Kopier billedlink",
                copyUrl: "Kopiér URL",
                collection: {
                    add: "Tilføj til samling",
                    gif: "GIF-samlinger",
                    delete: "Slet samling",
                    create: "Opret samling",
                    remove: "Fjerne",
                    information: "Indsamlingsoplysninger",
                    name: "Navn",
                    gifs: "Smække",
                    created: "Oprettelsesdato",
                    updated: "Sidste opdatering",
                    close: "Kvarter",
                    rename: "Omdøb",
                    move: "Flyt til samling",
                    select: "Vælg den samling, der skal flyttes"
                },
                gif: {
                    information: "Information",
                    added: "Dato tilføjet",
                    width: "Bredde",
                    height: "Højde",
                    close: "Kvarter"
                }
            },
            option: {
                itemPrefix: {
                    label: "Varepræfiks",
                    description: "Præfiks for GIF-elementer"
                },
                collectionPrefix: {
                    label: "Samlingspræfiks",
                    description: "Præfiks for samlinger"
                },
                onlyShowCollections: {
                    label: "Vis kun samlinger",
                    description: "Vis kun samlinger"
                },
                stopWarnings: {
                    label: "Stop alarmer",
                    description: "Stop advarsler om sletning"
                },
                showCopyImageLink: {
                    label: "Vis indstillingen Kopiér billedlink",
                    description: "Vis {{copyImageLink}} i kontekstmenuer"
                },
                preventDuplicates: {
                    label: "Forebyg tilbagefald",
                    description: "Undgå, at den samme GIF føjes til en samling flere gange"
                },
                defaultEmptyCollectionImage: {
                    label: "Standard tom samlingsbillede",
                    description: "Billede/GIF for at vise, når der ikke er nogen billeder/GIF'er i samlingen"
                },
                collectionsSortType: {
                    label: "Sorteringstype for samling",
                    description: "Sorteringstype af samlinger"
                },
                collectionsSortOrder: {
                    label: "Samling sorteringsrækkefølge",
                    description: "Sorteringsrækkefølge af samlinger"
                },
                collectionsSort: {
                    label: "Sorter samlinger",
                    description: "Bestem, hvordan du sorterer samlinger",
                    title: "Sorter samlinger",
                    sortDescription: "Vælg en sortering efter dine samlinger",
                    sortBy: "Sorter efter",
                    name: "Navn",
                    creationDate: "Oprettelsesdato",
                    modifiedDate: "Ændret dato",
                    ascending: "Vokser",
                    descending: "Aftagende"
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
                    description: "Nulstil samlinger til standardindstillinger (sletter alle samlinger)",
                    button: "Nulstil samlinger"
                }
            },
            toast: {
                copied: "Billedlink kopieret til udklipsholder!",
                urlCopied: "URL kopieret til udklipsholder!",
                already: "Denne samling findes allerede",
                alreadyCollection: "Denne GIF findes allerede i samlingen"
            },
            modal: {
                create: {
                    title: "Opret samling",
                    name: "Samlingens navn",
                    create: "Skabe"
                },
                rename: {
                    title: "Omdøb samling",
                    name: "Nyt samlingsnavn",
                    warning: "Navnet må ikke være længere end 24 tegn",
                    rename: "Omdøb"
                }
            },
            alert: {
                import: {
                    title: "Er du sikker?",
                    body: "Import af samlinger overskriver eksisterende samlinger.",
                    confirm: "Iche Aktar",
                    cancel: "Ophæve"
                },
                reset: {
                    title: "Er du sikker?",
                    body: "Nulstilling af samlinger fjerner alle samlinger.",
                    confirm: "nulstilles",
                    cancel: "Ophæve"
                },
                delete: {
                    title: "Er du sikker?",
                    deleteBody: "Vil du virkelig slette denne samling?",
                    removeBody: "Vil du virkelig fjerne dette element?",
                    confirm: "Sil",
                    remove: "Fjerne",
                    cancel: "Ophæve"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Det giver dig mulighed for at indsætte GIF'er direkte i chatboksen."
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Tilføjer en kommando, der sender en tilfældig GIF fra dine favoritter; Der er 10 % chance for at tagge serverejeren!",
            command: {
                gifRoulette: {
                    description: "Prøv lykken og send en tilfældig GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Mulighed for at tagge serverejeren",
                    description: "Indstiller chancen for at tagge serverejeren til at være 1 ud af 10 (yikes!)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Viser brugerens offentlige GitHub-lagre på deres profil.",
            loading: "Lagre indlæses...",
            option: {
                showStars: {
                    label: "Vis stjernerne",
                    description: "Vis lagerstjerner"
                },
                showLanguage: {
                    label: "Vis sprog",
                    description: "Vis hovedprogrammeringssprog for repositories"
                },
                showInMiniProfile: {
                    label: "Vis i miniprofil",
                    description: "Vis arkiver i miniprofilvindue"
                },
                showRepositoryTab: {
                    label: "Vis fanen Repository",
                    description: "Vis lagerfane i profilmodal (skjul knap på links, når den er aktiveret)"
                }
            },
            error: {
                error: "Endog",
                render: "Fejl: GithubRepos kunne ikke vises"
            },
            button: {
                show: "Vis GitHub-lagre",
                repositories: "GitHub Repositories",
                more: "Vis mere",
                only: "Viser kun de bedste {{length}}/{{total}}"
            },
            modal: {
                title: "{{user}}'s GitHub-depoter",
                repository: "Depo",
                description: "Forklaring",
                language: "Dil",
                stars: "Stjerne",
                viewOnGitHub: "Se på GitHub",
                close: "Kvarter"
            }
        },
        googleThat: {
            name: "Google det",
            description: "Tilføjer en kommando, der lader dig sende en internetsøgningsforbindelse.",
            command: {
                googleThat: {
                    description: "Indsend et søgemaskinelink",
                    query: "søgeforespørgsel"
                }
            },
            option: {
                hyperlink: {
                    label: "Bro",
                    description: "Om det indsendte link vil blive sendt som et hyperlink med forespørgselstagget"
                },
                embed: {
                    label: "Indlejret indhold",
                    description: "Om det indsendte link skal vises som indlejret indhold"
                },
                defaultEngine: {
                    label: "Standard søgemaskine",
                    description: "Søgemaskine at bruge"
                },
                customEngineURL: {
                    label: "URL til tilpasset søgemaskine",
                    description: "URL på den søgemaskine, du vil bruge"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "'Vink og sig hej!' Højreklik på knappen giver dig mulighed for at bruge det velkomstmærkat, du ønsker i stedet for det tilfældige.",
            mode: {
                greet: "hej",
                message: "Besked"
            },
            option: {
                greetMode: {
                    label: "Hilsningstilstand",
                    description: "Vælg velkomsttilstand",
                    greet: "Hilsen (du kan kun sende en hilsen 3 gange)",
                    message: "Besked (du kan sende ubegrænsede hilsner)"
                }
            },
            context: {
                label: "Hilsningsmærkatvælger",
                mode: "Hilsningstilstand",
                stickers: "Hilsen klistermærker",
                multi: "Mange hilsener",
                send: "Send hej"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Tilføjer en kontekstmenu, der lader dig eksportere og downloade en servers emoji og klistermærker.",
            context: {
                download: {
                    emoji: "Download emojis",
                    sticker: "Download klistermærker"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Tilføjer server-tag-indstillinger, såsom at skjule server-tags eller deaktivere prompten om at bruge tags.",
            option: {
                hideTags: {
                    label: "Skjul tags",
                    description: "Gør server-tags usynlige"
                },
                disableAdoptTagPrompt: {
                    label: "Advarsel om at lukke mærkekrav",
                    description: "Deaktiverer prompten om at bruge (kræve) servertagget"
                }
            }
        },
        hideChatButtons: {
            name: "Skjul Chat-knapper",
            description: "Giver dig mulighed for at skjule chatknapper.",
            tooltip: {
                close: "Kvarter",
                open: "Sulten"
            },
            option: {
                color: {
                    label: "Farve",
                    description: "Vises i rødt, når den er tændt"
                },
                open: {
                    label: "Åben",
                    description: "Til som standard"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Det giver dig mulighed for at skjule vedhæftede filer og indlejret indhold i visse meddelelser med en knap, der vises, når du holder markøren over.",
            show: "Vis medier",
            hide: "Skjul medier",
            hidden: "Medier skjult"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Skjuler meddelelser midlertidigt, indtil du genstarter.",
            button: {
                hide: "skjule"
            },
            option: {
                hidePopoverButton: {
                    label: "Skjul popover-knap",
                    description: "Skjuler knappen Skjul i popover-meddelelsen."
                }
            }
        },
        hideServers: {
            name: "Skjul servere",
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
                    label: "Vis indikatorer",
                    description: "Vis menuen nederst for at vise skjulte servere på listen"
                },
                guildsList: {
                    label: "Serverliste",
                    description: "Fjern skjulte servere"
                },
                resetHidden: {
                    label: "Nulstil skjulte servere",
                    description: "Fjern alle skjulte servere fra listen",
                    button: "Nulstil skjulte servere"
                }
            },
            button: {
                hidden: "Skjult",
                hiddenServers: "Skjulte servere",
                remove: "Fjerne",
                folder: "Folder",
                removeAll: "Fjern alle",
                guilds: "Servere",
                noHiddenServers: "Ingen skjulte servere"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes lader dig gemme beskeder",
            main: "Godt",
            button: {
                tooltip: "Hellige Noter",
                save: "Gem note",
                cancel: "Ophæve",
                noteMessage: "Bemærk besked",
                refresh: "Opdater avatarer",
                import: "Importer noter",
                export: "Eksporter noter",
                deleteAll: "Slet alle noter",
                delete: "Slet notesbog",
                create: "Opret notesbog",
                copyText: "Kopier tekst",
                copyAttachment: "Kopiér vedhæftet URL",
                deleteNote: "Notu Sil",
                moveNote: "Flyt note",
                moveTo: "Flyt til {{key}}",
                copyId: "Kopiér ID"
            },
            modal: {
                error: {
                    generic: "Der opstod en fejl under behandlingen af ​​dine karakterer. Tjek konsollen for detaljer.",
                    easter: "Ingen noter fundet. Empati bananen er med dig.",
                    empty: "Der er ingen noter gemt i denne notesbog."
                },
                help: {
                    title: "Hjælp",
                    description: "Lær, hvordan du bruger hellige noter",
                    addingNotes: "Tilføjelse af noter",
                    addingNotesText: "For at tilføje en note skal du højreklikke på en besked, pege på 'Notemeddelelse' og vælge den notesbog, du vil tilføje noten til.",
                    prototype: "Prototype",
                    noteMessage: "Et enkelt klik på knappen 'Note besked' tilføjer den som standard til hovedbogen!",
                    deletingNotes: "Ikke Silme",
                    deletingNotesText: "For at slette en note kan du højreklikke og vælge 'Slet note' eller holde 'DELETE'-tasten nede på dit tastatur og klikke på noten.",
                    movingNotes: "Flytning af en note",
                    movingNotesText: "For at flytte en note skal du højreklikke og vælge den notesbog, du vil flytte, fra indstillingen 'Flyt note'.",
                    jumpToMessage: "Gå til Besked",
                    jumpToMessageText: "For at gå til den besked, en note tilhører, skal du højreklikke på noten og vælge 'Gå til besked'."
                },
                notebook: {
                    title: "NOTESBOG",
                    search: "Søg efter en besked...",
                    options: "Sorteringsmuligheder",
                    label: "Sorteringsmenu",
                    filteredOf: "{{filteredCount}}/{{noteCount}} ikke",
                    note: "{{noteCount}} ikke",
                    ada: "Stigende/Tilføjet dato",
                    amd: "Stigende/meddelelsesdato",
                    dda: "Faldende / tilføjet dato",
                    dmd: "Faldende / Meddelelsesdato",
                    change: "Skift sortering",
                    ascending: "Vokser",
                    descending: "Aftagende",
                    dateAdded: "Tilføjet dato",
                    messageDate: "Meddelelsesdato"
                },
                create: {
                    title: "Opret notesbog",
                    description: "Indtast navnet på den nye notesbog",
                    placeholder: "Notebook navn"
                },
                delete: {
                    title: "{{notebookName}} Silinsin Mi?",
                    description: "{{noteCount}} note vil blive slettet permanent",
                    button: "Sil"
                },
                tabs: {
                    label: "Notebook-faner"
                }
            },
            toast: {
                saved: "Meddelelsen er blevet tilføjet til {{notesbog}}.",
                deleted: "Noten er blevet slettet fra {{notesbog}}.",
                moved: "Noten er blevet flyttet fra {{from}} notesbogen til {{to}} notesbogen.",
                exists: "Notesbog med navnet {{notebookName}} findes allerede.",
                created: "{{notebookName}} er blevet oprettet.",
                deletedNotebook: "{{notebookName}} er blevet slettet.",
                refreshed: "Avatarer er blevet opdateret.",
                deletedAll: "Alle noter er blevet slettet.",
                imported: "Noter er blevet importeret.",
                invalid: "Kunne ikke importere noter."
            },
            toolbox: {
                action: "Åbn Notes"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Hvis nogen skriver i dine DM'er, forvandler det hjemknappen til en skriveindikator."
        },
        iconViewer: {
            name: "IconViewer",
            description: "Tilføjer en ny fane i indstillinger for at få vist alle ikoner.",
            toolbox: "Åbn fanen Ikoner",
            iconFinder: "Ikon Finder",
            about: {
                title: "Funktioner",
                preview: "Forhåndsvisningsikoner",
                list: {
                    copy: "Kopier ikonnavne og CSS-variabler",
                    download: "Download ikoner i forskellige formater (SVG, PNG, GIF osv.)",
                    premade: "Kopier færdige ikonfund til dine plugins",
                    find: "Find ikoner efter funktionskontekst",
                    search: "Søg efter farver ved at højreklikke på farvenavnet",
                    special: "særlig tak"
                }
            },
            context: {
                icon: {
                    options: "Ikon indstillinger",
                    log: "Udskriv til konsol (log)",
                    save: "Gem som...",
                    rightClick: "Højreklik på ikonet for at erstatte",
                    usage: "Bruge",
                    click: "Klik for at kopiere",
                    copied: "Kopieret!",
                    actions: "Handlinger"
                }
            },
            modal: {
                label: "Søg efter funktionskontekst",
                search: "Søg inden for {{count}} symboler...",
                function: "Fungere",
                iconViewer: {
                    colors: "Icon Viewer farver",
                    unknown: "ukendt",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Den genstarter automatisk appen, når du er inaktiv i et bestemt tidsrum, men forhindrer genstart, når du er i lydkanalen.",
            option: {
                isEnabled: {
                    label: "Effektiv",
                    description: "Aktiverer automatisk genstart efter tomgang"
                },
                idleMinutes: {
                    label: "Inaktiv tid (minutter)",
                    description: "Tidspunkt for inaktivitet før genstart (ikke på lydkanal)"
                }
            },
            toolbox: {
                disable: "Deaktiver automatisk genstart",
                enable: "Aktiver automatisk genstart"
            }
        },
        ignoreActivities: {
            name: "Ignorer aktiviteter",
            description: "Forhindrer, at begivenheder kun vises i staten. Du kan angive, hvilke der skal ignoreres på fanerne Gemte spil og begivenheder, eller du kan bruge de generelle indstillinger nedenfor.",
            modal: {
                import: {
                    title: "Importer CustomRPC-plugins app-id til filterlisten"
                },
                filter: {
                    title: "Filterliste",
                    description: "Kommasepareret liste over hændelses-id'er, der skal filtreres (Nyttig til filtrering af specifikke RPC-hændelser og CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "CustomRPC-applikations-id er ikke angivet.",
                    alreadyAdded: "CustomRPC-applikations-id'et er allerede blevet tilføjet."
                }
            },
            button: {
                import: "Importér CustomRPC ID"
            },
            option: {
                importCustomRPC: {
                    label: "CustomRPC'yi Mere"
                },
                listMode: {
                    label: "Listetilstand",
                    description: "Vælg, hvordan du vil anvende filterlisten",
                    blacklist: "Sortliste (Ignorer kun dem på listen)",
                    whitelist: "Hvidliste (Ignorer alle undtagen dem på listen)"
                },
                idList: {
                    label: "ID liste"
                },
                ignorePlaying: {
                    label: "Ignorer hvad der spilles",
                    description: "Ignorer alle spillede begivenheder (normalt spil- og RPC-begivenheder)"
                },
                ignoreStreaming: {
                    label: "Ignorer indlæg",
                    description: "Ignorer alle udsendelsesbegivenheder"
                },
                ignoreListening: {
                    label: "Ignorer lyttere",
                    description: "Ignorer alle lyttebegivenheder (normalt Spotify-begivenheder)"
                },
                ignoreWatching: {
                    label: "İzlenenleri Yok Say",
                    description: "Tüm izleme etkinliklerini yok say"
                },
                ignoreCompeting: {
                    label: "Rekabet Etkinliklerini Yok Say",
                    description: "Tüm rekabet (yarışma) etkinliklerini yok say (Genellikle özel oyun etkinlikleridir)"
                },
                ignoredActivities: {
                    label: "Yok Sayılan Etkinlikler"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Belirli kullanıcılar veya DM gruplarından gelen aramaları yok saymanı sağlar.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Kalıcı Olarak Yok Sayılan Kullanıcılar",
                    description: "User IDs (virgül + boşluk) who should be permanently ignored"
                }
            },
            button: {
                ignore: "Yoksay",
                temporarilyIgnore: "Geçici Olarak Yoksay",
                permanentlyIgnore: "Kalıcı Olarak Yoksay"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "'Muhtemel spam göndericilerinden' gelen mesajları gizleme."
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Görsellere ve GIF’lere fareyle geldiğinde dosya adını ipucu olarak gösterir.",
            option: {
                showFullUrl: {
                    label: "Tam URL'yi Göster",
                    description: "Yalnızca dosya adı yerine görselin tam URL’sini gösterir. GIF’ler için her zaman etkindir çünkü genellikle anlamlı bir dosya adları yoktur."
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Mesajlarda yalnızca görsel bağlantısı olsa bile görsel bağlantılarını asla gizlemez."
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Görselleri ve GIF'leri yakınlaştırmanıza ve ayrıca görsel meta verilerini görüntülemenize olanak tanır. Fare tekerleğini kullanarak yakınlaştırın, Shift + fare tekerleği ile mercek yarıçapını artırın.",
            option: {
                saveZoomValues: {
                    label: "Yakınlaştırma Değerlerini Kaydet",
                    description: "Yakınlaştırma ve mercek boyutu değerlerinin kaydedilip kaydedilmeyeceğini belirler"
                },
                invertScroll: {
                    label: "Kaydırmayı Ters Çevir",
                    description: "Fare kaydırma yönünü tersine çevirir"
                },
                nearestNeighbour: {
                    label: "En Yakın Komşu",
                    description: "Görselleri ölçeklendirirken En Yakın Komşu Enterpolasyonunu kullanır"
                },
                square: {
                    label: "Kare",
                    description: "Merceği kare şekline getirir"
                },
                zoom: {
                    label: "Yakınlaştırma",
                    description: "Merceğin yakınlaştırma oranı"
                },
                size: {
                    label: "Boyut",
                    description: "Mercek yarıçapı / boyutu"
                },
                zoomSpeed: {
                    label: "Yakınlaştırma Hızı",
                    description: "Yakınlaştırma / mercek boyutunun değişim hızını belirler"
                },
                showMetadata: {
                    label: "Meta Verileri Göster",
                    description: "Seçili görsele çift tıklandığında meta verileri gösterir"
                }
            },
            context: {
                square: "Kare Mercek",
                nearest: "Pikselli Büyütme",
                zoom: "Yakınlaştırma",
                size: "Mercek Boyutu",
                zoomSpeed: "Yakınlaştırma Hızı",
                showImageMetadata: "Görsel Meta Verilerini Göster",
                view: "Meta Verileri Görüntüle",
                loading: "Yükleniyor...",
                unknown: "Bilinmiyor",
                sizeHTML: "Boyut",
                dimensions: "Boyutlar",
                filename: "Dosya Adı"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Tilføjer /imgtogif kommando for at konvertere ethvert billede til GIF",
            command: {
                imgToGif: {
                    description: "Lader dig konvertere et billede til GIF",
                    image: "Visuel vedhæftning til brug",
                    width: "GIF-bredde",
                    height: "gif højde"
                }
            },
            error: {
                noImage: "Intet billede angivet!",
                notImage: "Den uploadede fil er ikke et billede"
            }
        },
        implicitRelationships: {
            name: "Implicitte relationer",
            description: "Viser dine indirekte relationer på fanen Venner.",
            option: {
                sortByAffinity: {
                    label: "Sorter efter Nærhed",
                    description: "Bestemmer, om indirekte relationer er sorteret efter deres nærhed til dig."
                }
            },
            implicit: "Indirekte"
        },
        inRole: {
            name: "InRole",
            description: "Find ud af, hvem der er i en rolle ved hjælp af rollekontekstmenuen eller /inrole-kommandoen (læs plugin-info!)",
            command: {
                inrole: {
                    description: "Find ud af, hvem der er i en rolle",
                    role: "Rolle",
                    noGuild: "Sørg for, at du er på en server."
                }
            },
            context: {
                view: "Se medlemmer i rolle"
            },
            modal: {
                about: {
                    title: "Begrænsninger",
                    description: "Hvis du ikke har moderationstilladelser på serveren, og serveren er stor (mere end 100 medlemmer), kan pluginnet være begrænset på følgende måder:",
                    list: {
                        one: "Offlinemedlemmer vil ikke blive opført",
                        two: "Som standard vil maksimalt 100 medlemmer blive opført. Rul ned på medlemslisten for at se flere medlemmer.",
                        three: "Men dine venner vil altid blive vist uanset deres status."
                    }
                },
                member: {
                    title: "Medlemmer i rollen",
                    noMembers: "Der blev ikke fundet nogen online cachelagrede medlemmer med denne rolle. Prøv at rulle ned på din medlemsliste for at cache flere brugere!"
                }
            }
        },
        instantScreenshare: {
            name: "Øjeblikkelig skærmdeling",
            description: "Når du tilslutter dig en lydkanal, giver den dig mulighed for øjeblikkeligt at dele skærmen med understøttelse af skrivebordskilder, vinduer og videoinputenheder (kameraer, optagelseskort).",
            modal: {
                linux: {
                    title: "Til Linux",
                    body: "Hvis du bruger Wayland, aktiverer den kun muligheden for skærmdeling.",
                    bodyTwo: "Det virker måske eller ikke for X11 :shrug:"
                },
                videoDevices: {
                    title: "Video input-enheder",
                    body: "Understøtter kameraer og optagelseskort (f.eks. Elgato HD60X), når de er aktiveret i indstillingerne."
                },
                regardingSound: {
                    title: "Om lyd- og forhåndsvisningsindstillinger",
                    body: "Vi bruger de samme indstillinger, som Discord bruger til at forhåndsvise streamen og beslutte, om lyden skal aktiveres."
                }
            },
            option: {
                streamMedia: {
                    label: "Mediekilde skal frigives",
                    description: "Hvis den ikke findes, nulstilles den til hovedskærmen.",
                    loading: "Indlæser mediekilder...",
                    none: "Ingen mediekilder fundet",
                    placeholder: "Vælg en mediekilde at publicere"
                },
                includeVideoDevices: {
                    label: "Inkluder videoenheder",
                    description: "Inkluder videoinputenheder (kameraer, optagelseskort) i kildelisten"
                },
                autoMute: {
                    label: "Auto mute",
                    description: "Slå automatisk din mikrofon fra, når du tilslutter dig en stemmekanal"
                },
                autoDeafen: {
                    label: "Autodøve",
                    description: "Døv automatisk, når du tilslutter dig en stemmekanal (det slår dig også lyden fra)"
                },
                instantScreenshare: {
                    label: "Øjeblikkelig skærmdeling",
                    description: "Aktiverer den automatiske skærmdelingsfunktion"
                },
                keybindScreenshare: {
                    label: "Skærmdeling med genvejstast",
                    description: "Deler skærm med genvejstast i Discord-genvejstastindstillinger"
                },
                focusDiscord: {
                    label: "Fokus på Discord",
                    description: "Start kun skærmdeling med tastebinding, når Discord har fokus"
                },
                toolboxManagement: {
                    label: "Værktøjskassestyring",
                    description: "Aktiver/deaktiver øjeblikkelig skærmdeling"
                }
            },
            toolbox: {
                label: "Øjeblikkelig skærmdeling",
                toast: "Øjeblikkelig skærmdeling {{state}}",
                enabled: "Effektiv",
                disabled: "Handicappet"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Krypter dine beskeder uden at vække mistanke!",
            option: {
                savedPasswords: {
                    label: "Gemte adgangskoder",
                    description: "Gemte adgangskoder (kommasepareret)"
                }
            },
            button: {
                encrypt: "Krypter besked",
                decrypt: "Dechifrere meddelelsen",
                hidden: "Skjult beskedindikator (InvisibleChat)"
            },
            tooltip: {
                hidden: "Der er en skjult besked i denne besked! (InvisibleChat)"
            },
            embed: {
                title: "Dekrypteret besked",
                footer: "Sendt via InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Krypter besked",
                    secret: "Hemmelig besked",
                    cover: "Cover (2 eller flere ord!!)",
                    password: "Adgangskode",
                    dontUseCover: "Brug af et cover",
                    send: "Sende",
                    cancel: "Ophæve"
                },
                decrypt: {
                    title: "Dechifrere meddelelsen",
                    with: "Krypteret besked",
                    password: "Adgangskode",
                    decrypt: "Dechifrere",
                    cancel: "Ophæve"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Giver dig mulighed for at redigere standardværdier, når du opretter serverinvitationer.",
            option: {
                inviteDuration: {
                    label: "Invitationens varighed",
                    description: "Standardvarighed for serverinvitationer",
                    thirtyMinutes: "30 minutter",
                    oneHour: "1 øjeblik",
                    sixHours: "6 øjeblikke",
                    twelveHours: "12 øjeblikke",
                    oneDay: "1 dag",
                    sevenDays: "7 dage",
                    forever: "Ubestemt"
                },
                maxUses: {
                    label: "Maksimal brug",
                    description: "Standard maksimal brug for serverinvitationer",
                    unlimited: "Ubegrænset",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Geçici Üyelik",
                    description: "Sunucu davetleri için varsayılan geçici üyelik ayarı"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Sohbetteki kullanıcı adlarının renklerini IRC istemcilerindeki gibi benzersiz hale getirir.",
            option: {
                lightness: {
                    label: "Aydınlık",
                    description: "Aydınlık oranı (% cinsinden). Renkler çok açık veya koyu görünüyorsa değiştirin."
                },
                memberListColors: {
                    label: "Üye Listesi Renkleri",
                    description: "Üye listesindeki rol renklerini değiştir."
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Sadece Rengi Olmayan Kullanıcılara Uygula",
                    description: "Rengi önceden tanımlanmamış kullanıcılara renk uygula."
                },
                applyColorOnlyInDms: {
                    label: "Sadece Özel Mesajlarda Uygula",
                    description: "Renkleri yalnızca özel mesajlarda uygula; sunucularda uygulama."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "İletişim kurduğun herkesi (sunucular dahil) yerel olarak kaydeder, kayıp durumuna karşı koruma sağlar.",
            section: {
                description: "Bahsettiğin, yanıtladığın, üyesi olduğun sunucuların sahipleri (sunucu sahibi*) veya bulunduğun sunuculardaki üyelerin listesini gösterir.",
                empty: "Şu anda boş.",
                tooltip: "{{user}}, {{updatedAtContent}} tarihinde güncellendi",
                owner: "Sunucu Sahibi",
                iRememberYou: "Seni Hatırlıyorum"
            },
            context: {
                user: "Kullanıcı Seçenekleri",
                copy: "Kullanıcı Kimliğini Kopyala",
                copyToast: "Kullanıcı kimliği panoya kopyalandı",
                view: "Profili Görüntüle"
            },
            modal: {
                title: "Düzenleyici",
                filter: "Etikete, kullanıcı adına veya ID’ye göre filtrele",
                button: {
                    validate: "Doğrula ve Kaydet",
                    cancel: "İptal",
                    openEditor: "Düzenleyiciyi Aç",
                    resetData: "Verileri Sıfırla",
                    sure: "Emin misin?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Bir kanalın veya özel mesajın başına ya da sonuna atlamak için sağ tık menüsüne seçenekler ekler.",
            context: {
                top: "İlk Mesaja Git",
                bottom: "Son Mesaja Git",
                noMessages: "Bu kanalda bu kullanıcıdan mesaj bulunamadı.",
                searchFailed: "Mesajlar aranırken hata oluştu."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Hesap değiştirirken veya Discord yüklenirken bulunduğun kanala geri dönmeye çalışır."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Klavye ile yazarken OperaGX veya osu! ses efektleri ekler.",
            option: {
                volume: {
                    label: "Ses Seviyesi",
                    description: "Klavye seslerinin ses seviyesi"
                },
                soundPack: {
                    label: "Ses Paketi",
                    description: "Klavye sesleri için kullanılacak ses paketi",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Belirli anahtar kelimeler veya regex ifadeleriyle eşleşen mesajlarda bildirim gönderir.",
            idHolder: "ID",
            keywordEntry: "Anahtar Kelime Girişi",
            regexHolder: "örnek|regex",
            ignoreCase: "Büyük/Küçük Harf Duyarsız",
            whiteblackLabel: "Beyaz Liste / Kara Liste",
            tab: {
                title: "Anahtar Kelimeler",
                clearAll: "Tümünü Temizle"
            },
            button: {
                addId: "ID Ekle",
                addKeyword: "Anahtar Kelime Girişi Ekle"
            },
            listTypeSelector: {
                blacklist: "Kara Liste",
                whitelist: "Beyaz Liste",
                placeholder: "Bir liste türü seçin"
            },
            option: {
                ignoreBots: {
                    label: "Botları Yoksay",
                    description: "Botlardan gelen mesajları yoksay"
                },
                amountToKeep: {
                    label: "Kaydedilecek Miktar",
                    description: "Günlükte tutulacak mesaj sayısı"
                },
                keywords: {
                    label: "Anahtar Kelimeler",
                    description: "Anahtar kelimeleri yönet"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "DM listende, sunucu ve grup DM üye listesinde kullanıcı adlarının altında son çevrimiçi olma göstergesi ekler.",
            unit: {
                d: "gün",
                h: "saat",
                m: "dakika"
            },
            online: "{{formattedTime}} önce çevrimiçiydi"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz rich presence için küçük bir eklenti.",
            about: {
                title: "MusicBrainz API Hakkında",
                description: "MusicBrainz API bir API anahtarı gerektirmez, ancak bir {{link}} gerektirir. Çoğu kullanıcı için bir e-posta adresi yeterlidir.",
                userAgent: "anlamlı bir kullanıcı aracısı (user-agent) dizesi"
            },
            option: {
                username: {
                    label: "Kullanıcı Adı",
                    description: "ListenBrainz kullanıcı adı"
                },
                mbContact: {
                    label: "MB İletişim",
                    description: "ListenBrainz iletişim bilgisi"
                },
                shareUsername: {
                    label: "Kullanıcı Adını Paylaş",
                    description: "ListenBrainz profil bağlantısını göster (yalnızca diğer kullanıcılar görebilir)"
                },
                shareSong: {
                    label: "Şarkıyı Paylaş",
                    description: "ListenBrainz üzerindeki mevcut şarkıya bağlantı göster (yalnızca diğer kullanıcılar görebilir)"
                },
                hideWithSpotify: {
                    label: "Spotify Aktifken Gizle",
                    description: "Spotify çalışıyorsa ListenBrainz durumunu gizle"
                },
                hideWithActivity: {
                    label: "Başka Etkinlik Varsa Gizle",
                    description: "Başka bir durumun varsa ListenBrainz durumunu gizle"
                },
                useTimeBar: {
                    label: "Zaman Çubuğu Kullan",
                    description: "Parça süresini zaman çubuğu olarak göster (Dinleme durumu kullanılmalıdır)"
                },
                statusName: {
                    label: "Durum Adı",
                    description: "Özel durum metni"
                },
                nameFormat: {
                    label: "İsim Biçimi",
                    description: "Durum adında şarkı ve sanatçı adını gösterme biçimi",
                    custom: "Özel durum metni kullan",
                    artistSong: "'sanatçı - şarkı' biçimini kullan",
                    songArtist: "'şarkı - sanatçı' biçimini kullan",
                    artistOnly: "Sadece sanatçı adını kullan",
                    songOnly: "Sadece şarkı adını kullan",
                    albumName: "Brug albumnavn (returnerer undtagelsestekst, hvis sangen ikke har et album)"
                },
                useListeningStatus: {
                    label: "Brug lyttestatus",
                    description: "Vis \"Lytter\"-status i stedet for \"Afspiller\""
                },
                missingArt: {
                    label: "Manglende forsidebillede",
                    description: "Når albummet eller albumcoveret mangler",
                    listenbrainzLogo: "Brug det store ListenBrainz-logo",
                    generic: "Brug en generisk pladsholder"
                },
                useLogo: {
                    label: "Kullan logo",
                    description: "Vis ListenBrainz logo på albumcoveret"
                }
            }
        },
        loadingQuotes: {
            name: "Indlæser Citater",
            description: "Ændrer Discords indlæsningscitater",
            option: {
                replaceEvents: {
                    label: "Skift begivenheder",
                    description: "Skal dette plugin også anvendes under arrangementer med særlige begivenhedstema citater? (f.eks. Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Aktiver plugin-tilbud",
                    description: "Aktiver tilbud udarbejdet af dette plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Aktiver Discord-citater",
                    description: "Aktiver Discord dåsecitater (inklusive begivenhedscitater, under begivenheder)"
                },
                additionalQuotes: {
                    label: "Yderligere citater",
                    description: "Yderligere specielle citater, der kan forekomme, er adskilt af følgende separator"
                },
                additionalQuotesDelimiter: {
                    label: "Yderligere citationsseparator",
                    description: "Separator for yderligere tilbud"
                }
            }
        },
        loginWithQR: {
            name: "Log ind med QR",
            description: "Ligesom på mobil, scanning af login QR-koden lader dig logge ind på en anden enhed!",
            option: {
                scanQr: {
                    label: "Scan QR-kode",
                    description: "Scan en QR-kode",
                    notEnabled: "Aktiver pluginnet og genstart din klient for at scanne en login QR-kode"
                }
            },
            neverScan: "Scan aldrig en QR-kode til login fra en anden bruger eller app.",
            hold: "Tryk og hold for at bekræfte indtastningen",
            scanning: "Scanner...",
            stopScanning: "Stop scanning",
            usingWebcam: "Scan ved hjælp af webcam",
            dragDrop: "Træk og slip et billede her, eller klik for at vælge et billede",
            orPaste: "Eller indsæt et billede fra udklipsholderen!"
        },
        mediaPlaybackSpeed: {
            name: "Medieafspilningshastighed",
            description: "Giver dig mulighed for at ændre (standard) afspilningshastigheden for medieindlejringer.",
            playbackSpeed: "Afspilningshastighed",
            context: {
                label: "Afspilningshastighedskontrol"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Standardtakst for telefonsvarer",
                    description: "Stemmebeskeder"
                },
                defaultVideoSpeed: {
                    label: "Standard videohastighed",
                    description: "Videoer"
                },
                defaultAudioSpeed: {
                    label: "Standard lydhastighed",
                    description: "lydfiler"
                }
            }
        },
        memberCount: {
            name: "Antal medlemmer",
            description: "Viser antallet af onlinemedlemmer på serveren, det samlede antal medlemmer og brugere i talekanaler - i medlemslisten og værktøjstip.",
            option: {
                toolTip: {
                    label: "Værktøjstip",
                    description: "Vis medlemsantal i serverværktøjstip"
                },
                memberList: {
                    label: "Medlemsliste",
                    description: "Vis antal medlemmer øverst på medlemslisten"
                },
                voiceActivity: {
                    label: "Stemmeaktivitet",
                    description: "Vis antallet af brugere på talekanaler"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} er online på denne kanal",
            totalMembers: "{{formattedTotalCount}} medlemmer i alt på serveren",
            totalVoice: "Medlem på {{formattedVoiceCount}} stemmekanaler"
        },
        mentionAvatars: {
            name: "NævnAvatarer",
            description: "Viser brugeravatarer og rolleikoner i omtaler.",
            option: {
                showAtSymbol: {
                    label: "Vis @-ikon",
                    description: "Bestemmer, om @-symbolet skal vises i brugeromtaler."
                }
            }
        },
        meow: {
            name: "Mjav",
            description: "Tilføjer en knap til chatlinjen for at miave i chat.",
            button: {
                meow: "Miyav"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Den fletter beskeder, der er sendt inden for et bestemt tidsrum, med din tidligere besked, medmindre en anden har sendt en besked før dig.",
            option: {
                timePeriod: {
                    label: "Tidsområde",
                    description: "Sammenfletningstid (i sekunder)."
                },
                shouldMergeWithAttachment: {
                    label: "Kombiner med vedhæftede filer",
                    description: "Skal meddelelser flettes, hvis der er en vedhæftet fil (fil/billede) i den sidste meddelelse?"
                },
                useSpace: {
                    label: "Brug Space",
                    description: "Om der skal tilføjes mellemrum mellem meddelelser i stedet for at flytte til en ny linje ved fletning."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Hold tilbagetasten nede og klik giver dig mulighed for at slette, dobbeltklikke for at redigere eller svare.",
            option: {
                singleClickAction: {
                    label: "Et klik handling",
                    description: "Enkeltklik handling (på dine egne beskeder)"
                },
                singleClickModifier: {
                    label: "Modifikator med ét klik",
                    description: "Modifikator påkrævet for handling med et enkelt klik (i dine egne meddelelser)"
                },
                singleClickOthersAction: {
                    label: "Handling med ét klik (andre)",
                    description: "Enkeltklik-handling (på andres beskeder)"
                },
                singleClickOthersModifier: {
                    label: "Modifikator med ét klik (andre)",
                    description: "Modifikator påkrævet for handling med et enkelt klik (i andres indlæg)"
                },
                doubleClickAction: {
                    label: "Dobbeltklik på handling",
                    description: "Dobbeltklik på dine egne beskeder"
                },
                doubleClickOthersAction: {
                    label: "Dobbeltklikhandling (andre)",
                    description: "Dobbelttryk på handling på andres beskeder"
                },
                doubleClickModifier: {
                    label: "Dobbeltklik Modifier",
                    description: "Modifikator påkrævet til dobbeltklikhandling"
                },
                tripleClickAction: {
                    label: "Tre klik handling",
                    description: "Tre klik handling"
                },
                tripleClickModifier: {
                    label: "Modifikator med tre klik",
                    description: "Modifikator påkrævet for tre klikhandlinger"
                },
                reactEmoji: {
                    label: "Reaktion Emoji",
                    description: "Emoji til brug for reaktionshandlinger"
                },
                addAdditionalReacts: {
                    label: "Tilføj yderligere reaktioner",
                    description: "Tilføj også yderligere konfigurerede reaktions-emojis"
                },
                additionalReactEmojis: {
                    label: "Yderligere reaktions-emojis",
                    description: "Yderligere emojis, der skal tilføjes, når reaktionshandlingen bruges (adskilt med komma/enter, maks. {{count}})"
                },
                disableInDms: {
                    label: "Deaktiver i DM'er",
                    description: "Deaktiver alle klikhandlinger i direkte beskeder"
                },
                disableInSystemDms: {
                    label: "Deaktiver i System DM'er",
                    description: "Deaktiver alle klikhandlinger i system DM'er"
                },
                clickTimeout: {
                    label: "Klik på Timeout",
                    description: "Timeout (ms) for at skelne mellem dobbeltklik og tredobbelt klik"
                },
                doubleClickHoldThreshold: {
                    label: "Dobbeltklik Retention Threshold",
                    description: "Maksimal holdetid (ms) for dobbeltklikhandlinger. Tillader tekstvalg at holde længere"
                },
                deferDoubleClickForTriple: {
                    label: "Forsinket dobbeltklik for tredobbelt klik",
                    description: "Forsinket dobbeltklik for at tillade tredobbelt klik-handlinger (tredobbelt klik er deaktiveret, hvis deaktiveret)"
                },
                selectionHoldTimeout: {
                    label: "Valg Hold Timeout",
                    description: "Timeout (ms) for at tillade tekstvalg"
                },
                quoteWithReply: {
                    label: "Svar med citat",
                    description: "Når du citerer, skal du også svare på beskeden"
                },
                useSelectionForQuote: {
                    label: "Brug Selection for Citat",
                    description: "Når du citerer, skal du bruge valgt tekst (hvis tilgængelig)"
                }
            },
            actions: {
                none: "Ingen",
                delete: "Sil",
                copyLink: "Kopiér link",
                copyID: "Kopiér ID",
                copyContent: "Kopier indhold",
                copyUserID: "Kopiér bruger-id",
                edit: "Redigere",
                reply: "Svar",
                react: "Reagere",
                openThread: "Åbn emne",
                openTab: "Åbn i faneblad",
                quote: "citere",
                pin: "Fastgør det"
            },
            missingPermissions: {
                react: "Kan ikke reagere: Manglende tilladelser",
                pin: "Kan ikke rette: Manglende tilladelser",
            },
            cannotQuote: "Denne meddelelsestype kan ikke citeres",
            copy: {
                messageId: "Meddelelses-id blev kopieret!",
                messageContent: "Beskedens indhold er kopieret!",
                userId: "Bruger-id blev kopieret!"
            },
            linkCopied: "Linket er kopieret!"
        },
        messageColors: {
            name: "Meddelelsesfarver",
            description: "Viser farvekoder i beskeder, såsom #FF0042.",
            option: {
                renderType: {
                    label: "Visualiseringstype",
                    description: "Bestemmer, hvordan farver vises",
                    textColor: "tekst farve",
                    block: "blok ved siden af",
                    backgroundColor: "baggrundsfarve"
                },
                enableShortHexCodes: {
                    label: "Aktiver korte hex-koder",
                    description: "Aktiver 3-tegns hex-koder som #39f"
                },
                blockView: {
                    label: "Blokvisningstype",
                    description: "Bestemmer, hvordan farveblokke vises",
                    right: "Højre side",
                    left: "Venstre",
                    both: "begge sider"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Viser, hvor lang tid det tager for den aktuelle kanals beskeder at indlæse.",
            option: {
                showIcon: {
                    label: "Vis ikon",
                    description: "Vis ikon for indlæsningstid i meddelelseslinjen"
                },
                showMs: {
                    label: "Vis Millisekunder",
                    description: "Vis millisekunder i timing"
                },
                iconColor: {
                    label: "Ikon farve",
                    description: "Ikonfarve (CSS-farveværdi)"
                }
            },
            loaded: "Beskeder indlæst om {{time}}ms ({{timeAgo}})",
            day: "dage siden",
            hour: "timer siden",
            minute: "minutter siden",
            justNow: "Nu"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Tilføjer en indikator for beskeder, der tager ≥n sekunder at sende.",
            day: "dag",
            days: "dag",
            hour: "øjeblik",
            hours: "øjeblik",
            minute: "minutter",
            minutes: "minutter",
            second: "anden",
            seconds: "anden",
            millisecond: "millisekund",
            milliseconds: "millisekund",
            and: "ve",
            oldKotlinDetected: "Brugeren er mistænkt for at bruge en forældet Discord Android-klient.",
            ahead: "Denne brugers tid er {{delta}} forud.",
            delay: "Denne besked blev sendt med {{delta}} forsinkelse.",
            delayedMessage: "Forsinket besked",
            oldAndroidClient: "Legacy Discord Android-klient",
            option: {
                latency: {
                    label: "Forsinke",
                    description: "Tærskelværdi i sekunder for forsinkelsesindikatoren"
                },
                detectDiscordKotlin: {
                    label: "Opdag Discord Kotlin",
                    description: "Opdag gamle Discord Android-klienter"
                },
                showMillis: {
                    label: "Vis Millisekunder",
                    description: "Vis millisekunder"
                },
                ignoreSelf: {
                    label: "Ignorer mig selv",
                    description: "Tilføj indikatorer til dine egne beskeder"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Tilføjer en forhåndsvisning til beskeder, der indeholder et link til en anden besked.",
            option: {
                messageBackgroundColor: {
                    label: "Besked baggrundsfarve",
                    description: "Baggrundsfarve for beskeder i rig indlejring"
                },
                automodEmbeds: {
                    label: "Automod Begravelser",
                    description: "Brug automod-indlejringer i stedet for omfattende indlejringer (mindre, men indeholder færre oplysninger)",
                    always: "Brug altid automod embeds",
                    prefer: "Foretrækker Automod-indlejringer, men brug rich embeds, hvis noget indhold ikke kan vises",
                    never: "Brug aldrig automod embeds"
                },
                listMode: {
                    label: "Listetilstand",
                    description: "Bestem, om ID-listen skal bruges som sortliste eller hvidliste",
                    blacklist: "Sortliste",
                    whitelist: "Hvidliste"
                },
                idList: {
                    label: "ID liste",
                    description: "Server/kanal/bruger-id'er, der skal tilføjes til sortlisten eller hvidlisten (adskilt med komma)"
                },
                clearMessageCache: {
                    label: "Ryd beskedcache",
                    description: "Ryd linket meddelelsescache"
                }
            },
            noContent: {
                noAttachments: "intet indhold {{count}} indlejret besked",
                noEmbeds: "intet indhold {{count}} tilføjelse",
                both: "intet indhold, {{vedhæftede filer}} vedhæftede filer og {{embeds}} indlejrede meddelelser"
            },
            dm: "Privat besked",
            groupDm: "Gruppemeddelelse",
            server: "Oplægsholder"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Tilføjer et værktøjstip og forhåndsvisning af beskeder, når du holder musemarkøren over beskedlinks, svar og videresendte beskeder.",
            loading: "Indlæser...",
            option: {
                onLink: {
                    label: "På Link",
                    description: "Vis værktøjstip, når du holder markøren over meddelelseslinks"
                },
                onReply: {
                    label: "Ved svar",
                    description: "Vis værktøjstip, når du holder markøren over beskedsvar"
                },
                onForward: {
                    label: "På den overførte meddelelse",
                    description: "Vis værktøjstip, når du holder markøren over videresendte meddelelser"
                },
                display: {
                    label: "Udseende",
                    description: "Udseende stil",
                    auto: "Samme som besked",
                    compact: "Kompakt",
                    cozy: "Komfortabel"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Gemmer midlertidigt slettede og redigerede beskeder.",
            removeMessage: "Fjern meddelelseshistorik",
            removeMessageTemporary: "Fjern meddelelse (midlertidigt)",
            clearMessageLog: "Ryd beskedlog",
            modal: {
                edit: {
                    title: "Besked Rediger historik",
                    tooltip: "Denne redigeringsstatus kan ikke vises, fordi den ikke er blevet gemt."
                }
            },
            option: {
                deleteStyle: {
                    label: "Slet stil",
                    description: "Udseendestil for slettede beskeder",
                    text: "rød tekst",
                    overlay: "rød belægning"
                },
                logDeletes: {
                    label: "Gem slettet",
                    description: "Bestemmer, om slettede beskeder gemmes eller ej"
                },
                collapseDeleted: {
                    label: "Skjul Slettet",
                    description: "Forfin slettede beskeder svarende til blokerede beskeder"
                },
                logEdits: {
                    label: "Gem redigeret",
                    description: "Bestemmer, om redigerede beskeder skal gemmes"
                },
                inlineEdits: {
                    label: "Inline redigeringer",
                    description: "Vis redigeringshistorik som en del af beskedindhold"
                },
                ignoreBots: {
                    label: "Ignorer bots",
                    description: "Ignorer beskeder sendt af bots"
                },
                ignoreSelf: {
                    label: "Ignorer mig selv",
                    description: "Ignorer egne beskeder"
                },
                ignoreUsers: {
                    label: "Ignorer brugere",
                    description: "Kommasepareret liste over bruger-id'er, der skal ignoreres"
                },
                ignoreChannels: {
                    label: "Ignorer kanaler",
                    description: "Kommasepareret liste over kanal-id'er, der skal ignoreres"
                },
                ignoreGuilds: {
                    label: "Ignorer servere",
                    description: "Kommasepareret liste over server-id'er, der skal ignoreres"
                },
                showEditDiffs: {
                    label: "Vis redigeringsforskelle",
                    description: "Vis forskelle mellem redigerede meddelelsesversioner"
                },
                separatedDiffs: {
                    label: "Opdelte forskelle",
                    description: "Giver en mere læsbar visning ved at vise tilføjelser og sletninger separat i forskellene"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Det forbedrer MessageLogger-plugin'et med yderligere funktioner.",
            updateImageCacheDir: "Den visuelle cache-mappe er blevet opdateret.",
            updateLogsDir: "Logbiblioteket er blevet opdateret.",
            failedUpdate: "Mappen kunne ikke opdateres.",
            blacklist: "Sortliste",
            whitelist: "Hvidliste",
            failedToRemove: "Beskeden kunne ikke fjernes",
            successfullyImported: "Logfiler blev importeret.",
            errorImportingLogs: "Der opstod en fejl under import af logfiler. Tjek konsollen for at få flere oplysninger.",
            importing: "Importerer...",
            importLogs: "Importer logs",
            exporting: "Eksporterer...",
            exportLogs: "Eksporter logs",
            alert: {
                clearLogs: {
                    title: "Ryd logfiler",
                    body: "Er du sikker på, at du vil rydde alle logfiler?",
                    confirmText: "klar",
                    cancel: "Ophæve"
                },
                clearVisibleLogs: {
                    title: "Ryd synlige logfiler",
                    body: "Er du sikker på, at du vil rydde {{messages}} logfiler?",
                    confirmText: "klar",
                    cancel: "Ophæve"
                },
                cleared: "Meddelelseslogdatabasen og cachen er blevet ryddet."
            },
            context: {
                title: "Meddelelseslog",
                jumpToMessage: "Gå til Besked",
                openUserProfile: "Åbn Brugerprofil",
                copyContent: "Kopier indhold",
                copyUserId: "Kopiér bruger-id",
                copyMessageId: "Kopiér meddelelses-id",
                copyChannelId: "Kopiér kanal-id",
                copyServerId: "Kopiér server-id",
                deleteLog: "Slet log",
                fromUsernameDm: "Fra {{username}}'s DM'er",
                fromGroupDm: "{{channelName}} gruppe DM'er",
                fromServerChannel: "Fra kanal {{channelName}} på serveren {{serverName}}",
                moveTypeTo: "Flyt {{type}} til {{destination}}",
                removeTypeFrom: "Fjern {{type}} fra {{list}}",
                openLogsFor: "Åbn logfiler for {{name}}",
                openLogs: "Åbn Logs",
                removeMessage: "Fjern besked (permanent)",
                removeMessageHistory: "Fjern meddelelseshistorik (permanent)",
                deleteMessageHide: "Slet meddelelse (skjul fra meddelelsesloggere)",
                addServerToBlacklist: "Føj server til sortliste",
                addServerToWhitelist: "Føj server til hvidliste",
                removeServerFromBlacklist: "Fjern server fra sortliste",
                removeServerFromWhitelist: "Fjern server fra hvidliste",
                moveServerToBlacklist: "Flyt server til sortliste",
                moveServerToWhitelist: "Flyt server til hvidliste",
                addUserToBlacklist: "Føj bruger til sortliste",
                addUserToWhitelist: "Føj bruger til hvidliste",
                removeUserFromBlacklist: "Fjern bruger fra sortliste",
                removeUserFromWhitelist: "Fjern bruger fra hvidliste",
                moveUserToBlacklist: "Flyt bruger til sortliste",
                moveUserToWhitelist: "Flyt bruger til hvidliste",
                addChannelToBlacklist: "Føj kanal til sortliste",
                addChannelToWhitelist: "Føj kanal til hvidliste",
                removeChannelFromBlacklist: "Fjern kanal fra sortliste",
                removeChannelFromWhitelist: "Fjern kanal fra hvidliste",
                moveChannelToBlacklist: "Flyt kanal til sortliste",
                moveChannelToWhitelist: "Flyt kanal til hvidliste"
            },
            type: {
                server: "Oplægsholder",
                user: "Bruger",
                channel: "Kanal"
            },
            button: {
                chooseFolder: "Vælg Mappe",
                browse: "Gozat",
                clearLogs: "Ryd alle logfiler",
                clearVisibleLogs: "Ryd synlige logfiler",
                sortOldest: "Sorter ældst til nyeste",
                sortNewest: "Sorter Nyeste til Ældste",
                loadMore: "Indlæs mere",
                noResults: "Ingen resultater på fanen {{tab}}",
                tryOtherTabs: "Prøv fanerne {{nextTab}} eller {{lastTab}}",
                importLogs: "Importer logs"
            },
            modal: {
                title: "Filtrer meddelelser",
                deleted: "Slettet",
                edited: "Organiseret",
                ghostPing: "Usynlig Ping",
                empty: "Tom, hva'",
                importLogs: "ML Enhanced gemmer nu logfiler til IndexedDB. Du skal importere dine gamle logfiler fra logbiblioteket. Import ændrer ikke eksisterende logfiler."
            },
            clear: {
                title: "Ryd logfiler",
                description: "Er du sikker på, at du vil rydde alle logfiler?",
                confirm: "klar",
                cancel: "Ophæve"
            },
            option: {
                saveMessages: {
                    label: "Gem beskeder",
                    description: "Bestemmer, om slettede og redigerede beskeder gemmes eller ej."
                },
                saveImages: {
                    label: "Gem billeder",
                    description: "Gem slettede vedhæftede filer."
                },
                sortNewest: {
                    label: "Sorter Nyeste til Ældste",
                    description: "Sorter logfiler efter nyeste."
                },
                cacheMessagesFromServers: {
                    label: "Cache beskeder fra servere",
                    description: "Normalt registrerer loggeren kun hvidlistede id'er og DM'er. Aktivering af denne mulighed vil også optage meddelelser på alle servere. Dette kan dog overskride cachegrænsen og forårsage, at nogle meddelelser springes over."
                },
                ignoreBots: {
                    label: "Ignorer bots",
                    description: "Ignorer bot-meddelelser."
                },
                ignoreWebhooks: {
                    label: "Webhookları Yoksay",
                    description: "Ignorer webhook-beskeder."
                },
                ignoreSelf: {
                    label: "Ignorer mig selv",
                    description: "Ignorer dine egne beskeder."
                },
                ignoreMutedGuilds: {
                    label: "Ignorer dæmpede servere",
                    description: "Meddelelser på dæmpede servere optages ikke. Hvidlistede brugere/kanaler optages dog stadig."
                },
                ignoreMutedCategories: {
                    label: "Ignorer dæmpede kategorier",
                    description: "Beskeder i kanaler, der tilhører kategorier, der er slået fra, optages ikke."
                },
                ignoreMutedChannels: {
                    label: "Ignorer dæmpede kanaler",
                    description: "Beskeder på dæmpede kanaler optages ikke."
                },
                alwaysLogDirectMessages: {
                    label: "Gem altid DM'er",
                    description: "Gem altid direkte beskeder."
                },
                alwaysLogCurrentChannel: {
                    label: "Gem altid den aktuelle kanal",
                    description: "Gemmer altid den aktuelle kanal. Sortlistede kanaler/brugere er ekskluderet."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Slet log permanent som standard",
                    description: "I hovedmenuen for MessageLogger er muligheden for at fjerne fra meddelelsesloggen som standard til permanent sletning."
                },
                hideMessageFromMessageLoggers: {
                    label: "Skjul besked fra loggere",
                    description: "Når den er aktiveret, tilføjer den en kontekstmenuindstilling for at skjule meddelelser fra andre loggere. Det er muligvis ikke sikkert, brug på egen risiko."
                },
                showLogsButton: {
                    label: "Vis Log-knap",
                    description: "Skifter om værktøjslinjen vises eller ej."
                },
                showWhereMessageIsFrom: {
                    label: "Vis kilde til meddelelse",
                    description: "Vis meddelelsens kanal/forfatter og servernavn."
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Antal meddelelser, der skal vises samtidigt i logfiler",
                    description: "Bestemmer antallet af meddelelser, der skal vises i logfilerne ad gangen, og mængden, der skal tilføjes, når flere meddelelser indlæses."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Beskedindhold skjult fra meddelelsesloggere",
                    description: "Der bruges indhold til at erstatte meddelelsen, når den skjules fra meddelelsesloggere."
                },
                messageLimit: {
                    label: "Beskedgrænse",
                    description: "Maksimalt antal beskeder at gemme. Når grænsen overskrides, slettes gamle beskeder. 0 = ubegrænset."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Størrelsesgrænse for vedhæftede filer (MB)",
                    description: "Maksimal størrelse (i MB) af vedhæftede filer, der skal gemmes. Vedhæftede filer, der er større end denne værdi, vil ikke blive gemt."
                },
                attachmentFileExtensions: {
                    label: "Yderligere filudvidelser",
                    description: "En kommasepareret liste over filtypenavne, der skal gemmes. Hvis det efterlades tomt, gemmes alle vedhæftede filer."
                },
                cacheLimit: {
                    label: "Cachegrænse",
                    description: "Maksimalt antal meddelelser, der skal opbevares i cachen. Når grænsen overskrides, slettes gamle beskeder."
                },
                timeBasedCleanupMinutes: {
                    label: "Tidsbaseret minutrengøring",
                    description: "Minutinterval, hvori der udføres tidsbaseret rensning af beskeder, der er ældre end beskedgrænsen."
                },
                preserveCurrentChannel: {
                    label: "Behold den nuværende kanal",
                    description: "Når den er aktiveret, påvirkes beskeder på din aktuelt valgte kanal ikke af tidsbaseret rengøring."
                },
                whitelistedIds: {
                    label: "Hvidliste-id'er",
                    description: "Hvidlistede server-, kanal- eller bruger-id'er."
                },
                blacklistedIds: {
                    label: "Sortliste ID'er",
                    description: "Sortlistede server-, kanal- eller bruger-id'er."
                },
                imageCacheDir: {
                    label: "Visual Cache Directory",
                    description: "Vælg biblioteket med gemte billeder."
                },
                logsDir: {
                    label: "Log Indeks",
                    description: "Vælg den mappe, hvor logfilerne skal gemmes."
                },
                importLogs: {
                    label: "Importer logs",
                    description: "Importer logfiler fra fil."
                },
                exportLogs: {
                    label: "Eksporter logs",
                    description: "Eksporter logfiler fra IndexedDB."
                },
                openLogs: {
                    label: "Åbn Logs",
                    description: "Åbn logfilerne."
                },
                openImageCacheFolder: {
                    label: "Åbn Visual Cache-mappe",
                    description: "Åbner den visuelle cache-mappe."
                },
                clearLogs: {
                    label: "Ryd logfiler",
                    description: "Ryd logfiler.",
                    title: "Ryd logfiler",
                    body: "Er du sikker på, at du vil rydde alle logfiler?",
                    confirmText: "klar",
                    cancel: "Ophæve"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Modtag meddelelser, når udvalgte brugere sender beskeder",
            dm: "privat besked",
            option: {
                users: {
                    label: "Brugere",
                    description: "Kommasepareret liste over bruger-id'er til at modtage beskeder",
                    invalidId: "{{id}} er ikke et gyldigt bruger-id"
                }
            },
            notification: {
                title: "{{username}} sendte en besked",
                body: "Klik for at gå til {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Det giver dig mulighed for at gemme beskeder og bruge dem med en simpel kommando.",
            notExist: "Tagget **{{tagname}}** er ikke længere tilgængeligt! Genstart Discord for at rette det :)",
            alreadyExist: "Et tag med navnet **{{tagname}}** eksisterer allerede!",
            sentTag: "**{{tagname}}** tag er blevet sendt!",
            successCreate: "**{{tagname}}** tag oprettet!",
            allTags: "Alle tags:",
            noTags: "Ups! Der er ingen tags endnu, brug /tag create til at oprette dem!",
            noDeleteTag: "Et tag med navnet **{{tagname}}** blev ikke fundet, så det kan ikke slettes!",
            successDelete: "Tag **{{name}}** slettet!",
            tagPreview: "Et tag med navnet **{{name}}** eksisterer ikke!",
            option: {
                clyde: {
                    label: "Clyde besked i posten",
                    description: "Når det er aktiveret, sender Clyde dig en midlertidig besked, når et tag bruges."
                },
                tagsList: {
                    label: "Tag liste",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Administrer dine egne tags",
                    option: {
                        create: {
                            description: "Opret en ny etiket",
                            name: "Navnet på det tag, der udløser svaret",
                            message: "Den besked, der sendes, når du bruger dette hashtag"
                        },
                        list: {
                            description: "Liste over alle tags"
                        },
                        delete: {
                            description: "Slet et tag",
                            name: "Navnet på det tag, der skal slettes"
                        },
                        preview: {
                            description: "Se forhåndsvisning af et tag uden at sende det offentligt",
                            name: "Navnet på det tag, der skal forhåndsvises"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Tilføjer mikrofonløkketestikon til brugerpanelet",
            button: "Mikrofon testcyklus"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Forskellige midterklik (musehjul) forbedringer såsom indsættelse og linkåbning.",
            option: {
                openScope: {
                    label: "Åbningsomfang",
                    description: "Det forhindrer disse indholdstyper i at åbne, når der klikkes mellem dem.",
                    links: "Links",
                    media: "Medier",
                    linksAndMedia: "Links og medier",
                    none: "Ingen"
                },
                pasteScope: {
                    label: "Limningsomfang",
                    description: "I visse tilfælde forhindrer midterklik indsættelse.",
                    always: "Bloker altid med mellemklik",
                    focus: "Bloker kun, når tekstområdet ikke er fokuseret",
                },
                pasteThreshold: {
                    label: "Bindingstærskel",
                    description: "De millisekunder, der kræves for at indsætte for at genaktivere efter midterste klik."
                }
            }
        },
        moreCommands: {
            name: "Flere kommandoer",
            description: "Echo, Lenny, Mock og mere",
            command: {
                echo: {
                    description: "Sender en besked som Clyde (lokal)"
                },
                lenny: {
                    description: "Sender et Lenny-ansigt"
                },
                mock: {
                    description: "Gør sjov med mennesker (hånende mennesker)"
                },
                wordcount: {
                    description: "Beregner antallet af ord i en besked",
                    response: "Meddelelsen indeholder {{count}} ord."
                },
                flipcoin: {
                    description: "Vender en mønt og returnerer resultatet",
                    heads: "Skrivning",
                    tails: "Tura",
                    response: "Pengene {{resultat}} ankom."
                },
                ask: {
                    description: "Spørger og svarer ja/nej spørgsmål",
                    yes: "Ja",
                    no: "Ingen",
                    maybe: "Måske",
                    askAgain: "spørg igen senere",
                    definitelyNot: "Absolut ikke",
                    itIsCertain: "Absolut ja"
                },
                randomanimal: {
                    description: "Returnerer et tilfældigt dyrebillede",
                    animal: "vælg dit dyr",
                    cat: "kat",
                    dog: "hund",
                    response: "Beklager, ingen dyrebilleder kan hentes på nuværende tidspunkt"
                },
                randomnumber: {
                    description: "Genererer et tilfældigt tal mellem to værdier",
                    min: "Minimum",
                    max: "maksimal værdi",
                    response: "Tilfældigt tal mellem {{min}} og {{max}}: {{number}}"
                },
                choose: {
                    description: "Vælger en tilfældigt blandt de givne muligheder",
                    option: "Kommasepareret liste over muligheder",
                    response: "Mit valg: {{choice}}"
                },
                systeminfo: {
                    description: "Viser systemoplysninger",
                    platform: "Platform",
                    deviceType: "Enhedstype",
                    mobile: "Mobil",
                    desktop: "skrivebord",
                    browser: "Scanner",
                    cpuCores: "CPU-kerner",
                    memory: "Hukommelse",
                    screen: "Skærm",
                    languages: "Dil",
                    network: "Hvid",
                    online: "online",
                    offline: "offline",
                    failedToFetch: "Systemoplysninger kunne ikke hentes",
                    unknown: "ukendt"
                },
                getuptime: {
                    description: "Viser klientens oppetid",
                    response: "**Kundens oppetid**: {{oppetid}} minutter"
                },
                gettime: {
                    description: "Viser aktuel tid",
                    response: "Aktuel tid: {{time}}"
                },
                transform: {
                    description: "Transformerer tekst i henhold til den angivne indstilling",
                    transformation: {
                        description: "Den type transformation, der skal anvendes på teksten",
                        lowercase: "Konverter tekst til små bogstaver",
                        uppercase: "Konverter tekst til store bogstaver",
                        localeLowercase: "Konverter tekst til indbygget små bogstaver",
                        localeUppercase: "Konverter tekst til oprindelige store bogstaver",
                        same: "lad det være det samme"
                    },
                    repeat: "Hvor mange gange vil det blive gentaget?",
                    reverse: "Om tekst skal vendes",
                    normalize: {
                        description: "Tekstnormaliseringsformat",
                        nfc: "Normaliseringsformat C (NFC)",
                        nfd: "Normaliseringsform D (NFD)",
                        nfkc: "Normaliseringsformat KC (NFKC)",
                        nfkd: "Normaliseringsformat KD (NFKD)"
                    },
                    text: "Tekst, der skal konverteres"
                }
            }
        },
        moreKaomoji: {
            name: "Mere Kaomoji",
            description: "Tilføjer mere Kaomoji til Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "Flere hurtige reaktioner",
            description: "Forbedrer hurtigsvarsknapperne i meddelelseskontekstmenuen.",
            option: {
                reactionCount: {
                    label: "Antal reaktioner",
                    description: "Antal reaktioner at vise (0-42)"
                },
                frequentEmojis: {
                    label: "Ofte brugte emojis",
                    description: "Brug ofte brugte emojis i stedet for foretrukne emojis"
                },
                rows: {
                    label: "De sælger",
                    description: "Antal linjer med hurtige reaktioner at vise"
                },
                columns: {
                    label: "Kolonner",
                    description: "Antal kolonner med hurtige reaktioner at vise"
                },
                compactMode: {
                    label: "Kompakt Mod",
                    description: "Den skalerer knapperne til 75 % af deres originale størrelse, mens den forstørrer den indre emoji til 125 %. Emojis vil være 93,75 % af den originale størrelse. Det anbefales at bruge mindst 5 kolonner"
                },
                scroll: {
                    label: "rulle",
                    description: "Aktiver rullende emoji-liste"
                }
            }
        },
        moreUserTags: {
            name: "Flere brugertags",
            description: "Tilføjer tags til webhooks og moderationsroller (ejer, admin osv.)",
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
                    description: "Har administrator autoritet"
                },
                staff: {
                    name: "Officiel",
                    description: "Kan administrere server, kanaler eller roller"
                },
                mod: {
                    name: "Mod",
                    description: "Kan administrere beskeder eller kick/ban kontakter"
                },
                vcmod: {
                    name: "Ses Mod",
                    description: "Kan administrere stemmechats"
                },
                chatmod: {
                    name: "Chattilstand",
                    description: "Kan administrere beskeder"
                }
            },
            modal: {
                example: "Eksempel",
                tag: "Billet",
                customTextPlaceholder: "Tekst på etiket (standard: {{displayName}})",
                messages: "Vis i beskeder",
                memberList: "Vis i medlemsliste og profiler"
            },
            option: {
                dontShowForBots: {
                    label: "Vis ikke for bots",
                    description: "Vis ekstra tags for bots (undtagen webhooks)"
                },
                dontShowBotTag: {
                    label: "Vis bot-tag",
                    description: "Vis kun ekstra tags / Skjul [APP]"
                },
                showWebhookTagFully: {
                    label: "Vis hele webhook-tag",
                    description: "Vis hele webhook-tagget i de kanaler, du følger (f.eks. meddelelser)"
                },
                tagSettings: {
                    label: "Tag-indstillinger",
                    description: "skal udfyldes"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "En kommando til at oversætte til eller fra morsekode.",
            command: {
                morse: {
                    description: "Oversætter til eller fra morsekode",
                    message: "Tekst, der skal konverteres"
                }
            }
        },
        moyai: {
            name: "moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Bind",
                    description: "🗿🗿🗿 bind"
                },
                quality: {
                    label: "Kvalitet",
                    description: "🗿🗿🗿 kvalitet",
                    normal: "Normal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Trigger, når ude af fokus",
                    description: "Trigger 🗿 selvom vinduet ikke er i fokus"
                },
                ignoreBots: {
                    label: "Ignorer bots",
                    description: "Ignorer beskeder fra bots"
                },
                ignoreBlocked: {
                    label: "Ignorer blokerede brugere",
                    description: "Ignorer beskeder fra blokerede brugere"
                }
            }
        },
        musicControls: {
            name: "Musikkontrol",
            description: "Musikkontrol og sangtekster til flere tjenester",
            option: {
                SpotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Vis Spotify-kontroller",
                    description: "Vis musikkontroller til Spotify"
                },
                showSpotifyLyrics: {
                    label: "Vis Spotify-tekster",
                    description: "Vis tekster til Spotify"
                },
                useSpotifyUris: {
                    label: "Brug Spotify URI'er",
                    description: "Spotify åbner URI'er i stedet for URL'er. Virker kun hvis Spotify er installeret og virker muligvis ikke på alle platforme"
                },
                previousButtonRestartsTrack: {
                    label: "Forrige knap Genstarter sangen",
                    description: "Hvis afspilningstiden er mere end 3 sekunder, starter et tryk på den forrige knap den aktuelle sang fra begyndelsen"
                },
                TidalSectionTitle: {
                    label: "Tidevand"
                },
                showTidalControls: {
                    label: "Vis tidevandskontrol",
                    description: "Vis musikkontroller til Tidal"
                },
                showTidalLyrics: {
                    label: "Vis Tidal-lyrics",
                    description: "Vis tekster til Tidal"
                },
                YtmSectionTitle: {
                    label: "YouTube Musik",
                    description: "{{app}} er påkrævet for denne indstilling"
                },
                showYoutubeMusicControls: {
                    label: "Vis YouTube Music Controls",
                    description: "Vis musikkontroller til YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube Music API URL's",
                    description: "URL'en på den YouTube Music API-server, du bruger"
                },
                hoverControls: {
                    label: "Hover kontrol",
                    description: "Vis kontrolelementer, når du svæver"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "Vis noter, hvis der ikke er nogen sangtekster",
                    description: "Vis noteikon, når sangtekster ikke findes"
                },
                LyricsPosition: {
                    label: "Lyrisk placering",
                    description: "Placering af sangtekstpanelet",
                    above: "Over spiller(e)",
                    below: "Nedenstående spiller(e)"
                },
                LyricsProvider: {
                    label: "Udbyder af tekster",
                    description: "Kilde til sangtekster",
                    spotify: "Spotify (Music Match)",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "Oversæt til dit sprog",
                    description: "Oversæt tekster — Ændring af dette sletter eksisterende oversættelser",
                    cleared: "Oversættelse renset"
                },
                LyricsConversion: {
                    label: "Lyrisk konvertering",
                    description: "Oversæt eller romaniser automatisk tekster",
                    none: "Ingen",
                    translate: "Konvertere",
                    romanize: "Romanisere Et"
                },
                FallbackProvider: {
                    label: "Sikkerhedskopieringsudbyder",
                    description: "Hvis en sangtekstudbyder fejler, så prøv en anden"
                },
                ShowFailedToasts: {
                    label: "Vis fejlmeddelelser",
                    description: "Vis meddelelse, når sangtekster ikke kan indlæses"
                },
                PurgeLyricsCache: {
                    label: "Ryd lyrisk cache",
                    description: "Slet alle cachelagrede tekster og oversættelser",
                    button: "Ryd cache",
                    cacheLyricsPurged: "Lyrisk cache ryddet"
                }
            },
            context: {
                spotify: {
                    label: "Spotify sangtekstmenu",
                    type: "Spotify {{type}} menu",
                    copy: "Kopiér {{type}} navn",
                    link: "Kopiér {{type}}-linket",
                    open: "Åbn {{type}} i Spotify",
                    album: "Spotify albummenu"
                },
                tidal: {
                    label: "Tidal Lyrics Menu",
                    lyrics: "Tidal sangtekster",
                    type: "Tidevandsmenuen {{navn}}",
                    copy: "Kopiér navn {{navn}}",
                    open: "Åbn {{name}} på Tidal",
                    album: "Tidal Album Menu"
                },
                ytm: {
                    type: "YouTube Music {{name}} Menüsü",
                    copy: "Kopiér navn {{navn}}",
                    open: "{{name}}'i YouTube Music'te Aç",
                    album: "YouTube Music Album Menu",
                    muted: "Slået fra"
                },
                lyrics: {
                    provider: "Udbyder af tekster",
                    saved: "optaget",
                    notFound: "Synkrone sangtekster blev ikke fundet"
                },
                copy: {
                    currentLyrics: "Kopier aktuelle sangtekster"
                }
            },
            alert: {
                lyricCopied: "Sangtekster kopieret til udklipsholder!",
                noLyrics: "ingen tekster",
                noLyricsTo: "Ingen tekster til {{translated}}",
                translate: "oversættelse",
                romanize: "ikke romanisere",
                lyricsFetchFailed: "Teksterne kunne ikke findes",
                failedToFetchLyrics: "{{translated}} kunne ikke hentes",
                translation: "oversættelse",
                romanization: "romanisering",
                failedToFetchTranslation: "Kunne ikke oversætte {{translated}} sangtekster"
            },
            modal: {
                install: {
                    title: "Sådan installeres",
                    install: "{{link}} installer herfra, og gå derefter til TidaLuna-indstillinger → Tilføjelsesbutikker → installer @vmohammad/api",
                    tidaluna: "Nej Luna"
                },
                player: {
                    noPlaying: "Der afspilles ikke noget spor",
                    artist: "Kunstner:",
                    album: "Album:",
                    noLyrics: "Teksten blev ikke fundet :(",
                    progress: "Fremskridt",
                    totalDuration: "Samlet varighed"
                },
                type: {
                    song: "Sang",
                    artist: "Kunstner",
                    album: "Album"
                },
                album: {
                    open: "Åbn Album",
                    viewCover: "Se albumcover",
                    volume: "Bind",
                    image: "Album billede"
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
                failed: "Kunne ikke oprette vindue :(",
                checkConsole: "Tjek konsollen for fejl",
                invalidUrlCustomApi: "Ugyldigt URL-format for tilpasset API-server"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Viser delte gruppe DM'er på profiler",
            no: "Ingen fælles grupper",
            mutualGroup: "{{count}} Fælles gruppe",
            members: "Medlem",
            noGroup: "Ingen offentlige gruppe DM'er",
            header: "Fælles grupper"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Forhindrer in-call/PiP previews (skærmdeling, udsendelser osv.) i at blive sat på pause, selvom appen mister fokus.",
            about: "Denne tilføjelse får Discord til at forbruge flere ressourcer end normalt."
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Slår automatisk fra og ændrer forskellige andre indstillinger, når du tilmelder dig nye servere",
            context: {
                apply: "Anvend nye serverindstillinger"
            },
            option: {
                guild: {
                    label: "Slå server fra",
                    description: "Slå serveren automatisk fra"
                },
                messages: {
                    label: "Servermeddelelsesindstillinger",
                    description: "Servermeddelelsesindstillinger",
                    all: "Alle beskeder",
                    mentions: "@omtaler kun",
                    nothing: "Ingen",
                    default: "Server standard"
                },
                everyone: {
                    label: "Undertryk @alle og @her",
                    description: "Undertryk @alle og @here-meddelelser"
                },
                role: {
                    label: "Undertryk alle rolle @omtaler",
                    description: "Undertrykk alle rolle @omtaler"
                },
                highlights: {
                    label: "Undertrykke højdepunkter",
                    description: "Undertrykk automatisk højlys"
                },
                events: {
                    label: "Slå lyden fra for nye begivenheder",
                    description: "Slå automatisk lyden fra for nye begivenheder"
                },
                showAllChannels: {
                    label: "Vis alle kanaler",
                    description: "Vis alle kanaler automatisk"
                },
                mobilePush: {
                    label: "Slå mobilmeddelelser fra",
                    description: "Slå automatisk mobilmeddelelser fra"
                },
                voiceChannels: {
                    label: "Stemmekanaler",
                    description: "Skjul automatisk navne i stemmekanaler"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Nyttigt værktøj, der giver dig besked, når nye plugins føjes til Plexcord",
            modal: {
                title: "Nye plugins og indstillinger",
                description: "Nye plugins og indstillinger er blevet tilføjet siden dit sidste besøg. Gennemgå venligst de nye tilføjelser nedenfor.",
                tooltip: "Luk for denne session",
                dontShowAgain: "Vis det ikke igen",
                restartRequired: "Følgende plugins kræver en genstart",
                restart: "Genstart",
                continue: "Devam Et"
            }
        },
        noAppsAllowed: {
            name: "Ingen apps tilladt",
            description: "Giver bot-tagget tilbage for bots"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Skjuler fuldstændigt alle blokerede/ignorerede beskeder fra chat",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Skjul også ignorerede brugere",
                    description: "Skjul også beskeder fra ignorerede brugere."
                },
                disableNotifications: {
                    label: "Deaktiver meddelelser",
                    description: "Skjul nye beskedmeddelelser for blokerede brugere. Følgende vil altid gælde, hvis funktionen 'Standardbrugerskjul' er aktiveret, og den bruger, der udløste meddelelsen, ikke er på listen 'Undtagelsesbrugere'."
                },
                allowAutoModMessages: {
                    label: "Tillad AutoMod-beskeder",
                    description: "Tillad meddelelser sendt af AutoMod at passere ufiltreret."
                },
                hideBlockedUserReplies: {
                    label: "Skjul blokerede brugersvar",
                    description: "Skjul beskeder fra blokerede brugere i tråde, du tidligere har deltaget i."
                },
                defaultHideUsers: {
                    label: "Standard brugerskjul",
                    description: "Hvis det er aktiveret, skjules beskeder fra blokerede brugere fuldstændigt, og beskeder fra bruger-id'er på undtagelseslisten skjules i stedet (standard Discord-adfærd). Hvis deaktiveret, vil meddelelser fra blokerede brugere blive skjult, og meddelelser fra bruger-id'er på undtagelseslisten vil blive fuldstændig skjult."
                },
                overrideUsers: {
                    label: "Undtagelsesbrugere",
                    description: "Kommasepareret liste over bruger-id'er, der skal skjules eller skjules, i stedet for standardadfærden valgt ovenfor."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Markdown-punkter (•, -, *) forhindrer dig i at skrive (dårlig vane)"
        },
        noDeepLinks: {
            name: "Deaktiver DeepLinks",
            description: "Deaktiverer den irriterende dybe link-funktion, der forsøger at tvinge til at åbne Discords desktop-app"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Fjerner \"indtast servernavn\"-kravet ved sletning af en server",
            option: {
                confirmModal: {
                    label: "Bekræftelsesvindue",
                    description: "'Er du sikker på, at du vil slette denne server?' Vis bekræftelsesvindue?"
                }
            },
            modal: {
                title: "Vil du slette serveren?",
                body: "Det vil være permanent, hvis det ikke allerede var indlysende.",
                confirm: "Sil",
                cancel: "Ophæve"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Deaktiverer 'LET'S HIT' advarselsbanneret på konsollen. Som en bivirkning forhindrer det også Discord i at skjule sit token, hvilket forhindrer tilfældige logout."
        },
        noF1: {
            name: "nr. F1",
            description: "F1 deaktiverer hjælpegenvejen."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Når et link indsættes med valgt tekst, forhindrer det linket i at blive indsat som en maskeret URL."
        },
        noMirroredCamera: {
            name: "Intet MirroredCamera",
            description: "Det forhindrer kameraet i at spejle skærmen."
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Deaktiverer åbne/lukke-animationer i alle modale vinduer."
        },
        noMosaic: {
            name: "Ingen mosaik",
            description: "Fjerner Discords visuelle mosaiklayout.",
            option: {
                inlineVideo: {
                    label: "Inline video",
                    description: "Afspil videoer uden looping modal."
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Fjerner ALLE Nitro-salgsmeddelelser fra Discord ved at narre klienten til at tro, at du ejer Nitro."
        },
        noOnboarding: {
            name: "Ingen Onboarding",
            description: "Det tillader hurtigere login ved at springe Discords servertilslutningsproces over."
        },
        noOnboardingDelay: {
            name: "Ingen OnboardingDelay",
            description: "Omgår langsom og irriterende serverforbindelsesforsinkelse."
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Fjerner antallet af notifikationer for indgående venneanmodninger, beskedanmodninger og Nitro-tilbud.",
            option: {
                hideFriendRequestsCount: {
                    label: "Skjul optælling af venneanmodninger",
                    description: "Skjul antallet af indgående venneanmodninger"
                },
                hideMessageRequestsCount: {
                    label: "Skjul antal meddelelsesanmodninger",
                    description: "Skjul antallet af beskedanmodninger"
                },
                hidePremiumOffersCount: {
                    label: "Skjul antal nitrotilbud",
                    description: "Skjul antallet af nitro-tilbud"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfile Themes",
            description: "Det fjerner fuldstændigt Nitro-profiltemaer for alle undtagen dig selv."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Omgår push-to-talk-kravet for taleaktivitet på kanaler, der kræver det."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Deaktiverer som standard svarpings.",
            option: {
                userList: {
                    label: "Brugerliste",
                    description: "Liste over brugere, der vil få lov eller fritaget for ping (skal adskilles med komma eller mellemrum)"
                },
                roleList: {
                    label: "Rolleliste",
                    description: "Liste over roller, der tillader eller undtager ping (skal adskilles med komma eller mellemrum)"
                },
                shouldPingListed: {
                    label: "Pinglistet",
                    description: "Opførsel",
                    dontPing: "Pinger listede brugere/roller",
                    onlyPing: "Ping kun anførte brugere/roller"
                },
                inverseShiftReply: {
                    label: "Omvendt Shift Response-adfærd",
                    description: "Vendter Discords skiftsvaradfærd (omtaler brugeren, når skiftsvar er aktiveret)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "Normaliser meddelelseslinks",
            description: "Fjerner canary/ptb-præfikser fra beskedlinks."
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Vi er alle lige!! Fjerner rolletitler fra medlemslisten."
        },
        noRPC: {
            name: "NoRPC",
            description: "Discord deaktiverer rig tilstedeværelse."
        },
        noServerEmojis: {
            name: "Fra ServerEmojis",
            description: "Serveren viser ikke emojis i autofuldførelsesmenuen.",
            option: {
                shownEmojis: {
                    label: "Emojis vist",
                    description: "Vælg, hvilke emojis der skal vises i autofuldførelsesmenuen",
                    onlyUnicode: "Kun Unicode-emojis",
                    currentServer: "Unicode-emojis og emojis på den aktuelle server",
                    all: "Unicode-emojis og alle server-emojis (Discord-standard)"
                }
            }
        },
        noSystemBadge: {
            name: "Intet SystemBadge",
            description: "Deaktiverer det ulæste meddelelsesmærke på proceslinjen og proceslinjen."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Gør skrivebordsmeddelelser mere informative."
        },
        notificationVolume: {
            name: "Meddelelsesvolumen",
            description: "Indstil tilpasset lydstyrke for Discord-meddelelser.",
            option: {
                notificationVolume: {
                    label: "Meddelelseslyd",
                    description: "Notifikationsvolumen"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Deaktiverer skriveanimationen i chats."
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Det giver dig mulighed for at springe meddelelser fra blokerede eller ignorerede brugere (og muligvis spammere) over uden at fjerne blokeringen af ​​dem."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Selvom en bruger sender fortløbende ulæste beskeder i DM'er, får du kun én lydmeddelelse.",
            option: {
                channelToAffect: {
                    label: "Kanaltype, der skal påvirkes",
                    description: "Vælg den type DM, som plugin'et vil påvirke",
                    both: "Begge",
                    user: "Bruger DM'er",
                    group: "Gruppe DM'er"
                },
                allowMentions: {
                    label: "@AllowMentions",
                    description: "Få lydmeddelelser for @omtaler"
                },
                allowEveryone: {
                    label: "Tillad @alle",
                    description: "Få lydnotifikationer til @alle og @her i gruppe-DM'er"
                },
                ignoreUsers: {
                    label: "Brugere at ignorere",
                    description: "Bruger-id'er for ALDRIG at begrænse meddelelser (adskilt med komma + mellemrum)"
                },
                alwaysPlaySound: {
                    label: "Spil altid lyd",
                    description: "Afspil lyd, selvom meddelelseslyd er deaktiveret"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Åbner links i relevante applikationer i stedet for browseren",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Åbn Spotify-links i Spotify-appen"
                },
                steam: {
                    label: "Damp",
                    description: "Åbn Steam-links i Steam-appen"
                },
                epic: {
                    label: "Episke spil",
                    description: "Åbn Epic Games-links i Epic Games Launcher"
                },
                tidal: {
                    label: "Tidevand",
                    description: "Åbn Tidal-links i Tidal-appen"
                },
                itunes: {
                    label: "iTunes",
                    description: "Åbn Apple Music-links i iTunes-appen"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Åbn VRChat-links i VRChat-appen"
                }
            },
            notification: {
                open: "Åbnet link i native app"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Giver dig mulighed for at tilsidesætte standard forumlayout/sorteringsrækkefølge. Du kan stadig foretage ændringer på en kanal-for-kanal-basis.",
            option: {
                defaultLayout: {
                    label: "Standardlayout",
                    description: "Vælg hvilket layout der skal bruges som standard",
                    list: "Liste",
                    gallery: "Galleri"
                },
                defaultSortOrder: {
                    label: "Standard sorteringsrækkefølge",
                    description: "Vælg hvilken sorteringsrækkefølge der skal bruges som standard",
                    recentlyActive: "Sidst aktive",
                    datePosted: "Udsendt dato"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Lader dig bruge festtilstand, fordi festen aldrig slutter ✨",
            option: {
                superIntensePartyMode: {
                    label: "Super Intens Party Mode",
                    description: "Partitæthed",
                    normal: "Normal",
                    better: "Bedre",
                    projectX: "Projekt X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInviter for evigt",
            description: "Det bringer tilbage muligheden for 'pause invitationer på ubestemt tid', som Discord dumt fjernede.",
            pauseIndefinitely: "Pause på ubestemt tid"
        },
        permissionFreeWill: {
            name: "TilladelseFreeWill",
            description: "Deaktiverer begrænsninger på klientsiden i administration af kanaltilladelser.",
            option: {
                lockout: {
                    label: "dødvande",
                    description: "Omgå tilladelsesnedbrudsbeskyttelse ('Er du sikker på, at du vil gøre dette?')"
                },
                onboarding: {
                    label: "Startkrav",
                    description: "Omgå onboarding-krav, der kan gøre serveren inkompatibel ('Denne ændring kan gøre din server inkompatibel [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Giver dig mulighed for at se de tilladelser, en bruger eller kanal har, og rollerne for en server.",
            view: "Se tilladelser",
            option: {
                permissionsSortOrder: {
                    label: "Tilladelse Sorteringsrækkefølge",
                    description: "Sorteringsmetode, der bruges til at bestemme, hvordan en rolle giver en bestemt tilladelse til en bruger",
                    highest: "Højeste rolle",
                    lowest: "Laveste rolle"
                }
            },
            icon: {
                denied: "afvist",
                allowed: "Tilladt",
                notOverwritten: "Ikke overskrevet"
            },
            context: {
                permissions: "Tilladelser"
            },
            modal: {
                title: "Tilladelser",
                noPermissions: "Ingen tilladelser til at vise!",
                owner: "ejer",
                grantedBy: "Tilladende",
                serverOwner: "Server ejer",
                ownerRole: "Ejer",
                sortingBy: "{{metode}} er sorteret med prioritet",
                highest: "Højeste rolle",
                lowest: "Laveste rolle",
                details: "Rolle detaljer"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Tilføjer /petpet-kommando for at skabe petpet-gif fra ethvert billede",
            command: {
                petpet: {
                    description: "Opret en petpet-gif. Du kan kun angive én af billedindstillingerne",
                    delay: "Forsinkelse mellem hver frame. Standard er 20.",
                    resolution: "Opløsning til gif. Standarden er 120. Hvis du indtaster et vanvittigt tal, og Discord fryser, er det din skyld.",
                    image: "Billedvedhæftning til brug",
                    url: "URL for at hente billede",
                    user: "Den bruger, hvis avatar vil blive brugt som billede",
                    noServerPfp: "Brug normal avatar i stedet for serverspecifik, når du bruger 'bruger'-indstillingen",
                    error: {
                        noImage: "Intet billede angivet!",
                        delayTooLow: "Forsinkelsen skal være mindst 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Den uploadede fil er ikke et billede",
                fetchUserFailed: "Kunne ikke hente bruger. Tjek konsollen for at få flere oplysninger.",
                fetchImageFailed: "Der opstod en fejl under indlæsning af {{url}}. Tjek konsollen for at få flere oplysninger."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Tilføjer billed-i-billede-funktion til videoer (ved siden af ​​Download-knappen)",
            tooltip: "Skift billede i billede",
            option: {
                loop: {
                    label: "Løkke",
                    description: "Om PiP-video skal sløjfes"
                }
            }
        },
        pinDMs: {
            name: "PinDM'er",
            description: "Giver dig mulighed for at fastgøre private kanaler (DM'er) til toppen af ​​din DM-liste. Du kan højreklikke på DM'er for at fastgøre/fjerne eller ændre rækkefølgen af ​​DM'er.",
            context: {
                category: {
                    label: "DM Kategori Menu",
                    edit: "Rediger kategori",
                    up: "Flyt op",
                    down: "Flyt ned",
                    delete: "Slet kategori",
                    unnamed: "anonym"
                },
                pin: {
                    label: "DM Sabitle",
                    addCategory: "Kategori Ulækkert"
                },
                unPin: {
                    label: "Løsn DM",
                    move: "Flyt til kategori"
                }
            },
            option: {
                pinOrder: {
                    label: "Fastsættelse af ordre",
                    description: "I hvilken rækkefølge skal fastgjorte DM'er vises?",
                    lastMessage: "Ved sidste beskeddato",
                    custom: "Privat (skift rækkefølge ved at højreklikke på kanaler)"
                },
                canCollapseDmSection: {
                    label: "Sammenklappelig fast sektion",
                    description: "Gør ukategoriserede DM'er-sektionen sammenklappelig"
                },
                dmSectionCollapsed: {
                    label: "DM Sektion indsnævret",
                    description: "Skjul DM-sektionen"
                },
                userBasedCategoryList: {
                    label: "Brugerbaseret kategoriliste",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Pin kategori",
                    edit: "Rediger kategori",
                    new: "Ny kategori",
                    name: "Navn",
                    color: "Farve",
                    save: "Spare",
                    create: "Skabe"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifikationer",
            description: "Tilpasselige meddelelser og forbedret omtaleformatering",
            option: {
                friends: {
                    label: "Venner",
                    description: "Få besked, når dine venner sender beskeder på servere"
                },
                mentions: {
                    label: "Omtaler",
                    description: "Få besked, når nogen @omtaler dig direkte"
                },
                dms: {
                    label: "DM'ler",
                    description: "Få notifikationer for direkte beskeder (DM)"
                },
                showInActive: {
                    label: "Vis på aktive kanaler",
                    description: "Vis meddelelser selv for aktuelt aktive kanaler"
                },
                ignoreMuted: {
                    label: "Ignorer Mutet",
                    description: "Omgå meddelelser fra dæmpede servere, kanaler eller brugere"
                }
            },
            unknown: "ukendt",
            dm: "DM",
            groupDM: "Grup DM",
            title: "{{username}} på kanalen {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Tilføjer et pin-ikon til fastgjorte beskeder."
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Det viser ikke små serverikoner i mapper."
        },
        platformIndicators: {
            name: "Platformindikatorer",
            description: "Tilføjer platformsindikatorer (Desktop, Mobile, Web...) til brugere.",
            embeddedTooltip: "Konsol",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Liste",
                    description: "Vis indikatorer i medlemslisten"
                },
                badges: {
                    label: "badges",
                    description: "Vis indikatorer som badges på brugerprofiler"
                },
                messages: {
                    label: "Beskeder",
                    description: "Vis indikatorer i beskeder"
                },
                colorMobileIndicator: {
                    label: "Farvelæg din mobilskærm",
                    description: "Bestemmer, om mobilindikatoren tager brugerstatusfarven eller ej."
                },
                showBots: {
                    label: "Vis bots",
                    description: "Bestemmer, om platformindikatorer skal vises i bots"
                }
            }
        },
        platformSpoofer: {
            name: "Platformspoofer",
            description: "Simulerer uanset hvilken platform eller enhed du er på",
            about: "Vi kan ikke garantere, at denne tilføjelse vil beskytte dig mod at blive advaret eller forbudt.",
            platform: {
                desktop: "Discord klient",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Indlejret Discord",
                playstation: "Indlejret Discord",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Platform",
                    description: "Hvilken platform vil du fremstå som?",
                    desktop: "skrivebord",
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
            name: "Plexcord værktøjskasse",
            description: "Tilføjer en knap til applinjen, der er vært for Plexcord-hurtige handlinger.",
            tooltip: "Plexcord værktøjskasse",
            context: {
                openLog: "Åbn notifikationslog",
                enableQuickCSS: "Aktiver QuickCSS",
                openQuickCSS: "Åbn QuickCSS",
                openSettings: "Åbn Indstillinger",
                manageThemes: "Administrer temaer"
            },
            option: {
                showPluginMenu: {
                    label: "Vis plugin-menu",
                    description: "Vis plugins-menuen i Plexcord Toolbox"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Det foretager mindre redigeringer for at få dine beskeder til at se pænere ud og have bedre grammatik. Tjek indstillingerne",
            option: {
                quickDisable: {
                    label: "Hurtig deaktiver",
                    description: "Hurtig deaktivering. Deaktiverer redigering af beskeder uden at skulle genstarte appen."
                },
                blockedWords: {
                    label: "Blokerede ord",
                    description: "Ord, der ikke skrives med stort (adskil med kommaer)."
                },
                fixApostrophes: {
                    label: "Reparer apostrof",
                    description: "Sørger for, at forkortelser indeholder apostrof."
                },
                expandContractions: {
                    label: "Åbne forkortelser",
                    description: "Det konverterer forkortede ord til deres eksplicitte form (såsom Don't -> Don't)."
                },
                fixCapitalization: {
                    label: "Redigering af store bogstaver",
                    description: "Tillader sætninger at starte med store bogstaver."
                },
                fixPunctuation: {
                    label: "Korrekt tegnsætning",
                    description: "Redigerer mellemrum omkring tegnsætningstegn."
                },
                fixPunctuationFrequency: {
                    label: "Tegnsætningsfrekvens",
                    description: "Procentdel af hyppigheden af ​​at sætte punktum i slutningen af ​​sætninger (denne funktion kan genere nogle mennesker).",
                }
            }
        },
        previewMessage: {
            name: "Forhåndsvisningsmeddelelse",
            description: "Det giver dig mulighed for at forhåndsvise din besked, før du sender den.",
            tooltip: "Forhåndsvisning af besked"
        },
        profileSets: {
            name: "Profilsæt",
            description: "Det giver dig mulighed for at gemme profilindstillinger og indlæse dem via profilsektionen i Indstillinger.",
            toast: {
                importFailed: "Kunne ikke importere profilforudindstillinger. Filen kan være ugyldig.",
            },
            option: {
                avatarSize: {
                    label: "Avatar størrelse",
                    description: "Avatarstørrelse på listen over forudindstillinger for profil"
                },
            },
            modal: {
                override: "Tilsidesæt",
                merge: "Flet sammen",
                cancel: "Ophæve",
                timestamp: "{{formattedDate}} kl. {{formattedTime}}",
                rename: "Omdøb",
                update: "Opdatering",
                moveUp: "Flyt op",
                moveDown: "Flyt ned",
                moveTo: "Flyt til side 1",
                delete: "Slet",
                importProfiles: "Importer profiler",
                importText: "Du har {{existingCount}} eksisterende profiler i denne sektion. Vil du tilsidesætte dem eller flette med importerede profiler?",
                heading: "Gemte profiler",
                searchProfiles: "Søg profiler...",
                profileName: "Profilnavn",
                saving: "Gemmer...",
                save: "Gem profil",
                cancelSearch: "Annuller søgning",
                search: "Søge",
                random: "tilfældig",
                import: "Importere",
                exportAll: "Eksporter alle"
            }
        },
        questify: {
            name: "Spørgsmål",
            description: "Forbedre din missionsoplevelse med en række funktioner, eller deaktiver dem helt, hvis de ikke er, hvad du ønsker.",
            quests: "Quests",
            context: {
                quest: {
                    label: "Menuen Opgaveknap",
                    ignore: "Mark Ignorer alle",
                    reset: "Nulstil ignoreringslisten",
                    fetch: "Hent opgaver",
                    markAsIgnored: "Markér som Ignorer",
                    unmarkAsIgnored: "Fjern Ignorer",
                    stopAuto: "Stop Autofuldførelse",
                    copyQuestID: "Kopiér opgave-id",
                    startAuto: "Start Autofuldførelse"
                }
            },
            settings: {
                questButton: {
                    title: "Opgaveknap",
                    description: "Vis en Quest-knap med en valgfri indikator for uafhentede Quests på serverlisten.",
                    leftClick: "Venstre klik handling",
                    middleClick: "Mellemklik handling",
                    rightClick: "Højreklik på handling",
                    visibility: "Knap synlighed",
                    unclaimedIndicator: "Uopfordret indikator",
                    badgeColor: "Badge farve",
                    rewardDisplay: "Præmievisning",
                    includedRewardTypes: "Typer af belønninger inkluderet",
                    includedRewardTypesDesc: "Når du spiller knapsynlighed, badgeantal og alarmlyd, tæller kun quests med disse belønningstyper som uhævede.",
                    selectRewardTypes: "Vælg belønningstyper, der skal inkluderes i uafhentet optælling...",
                    noRewardType: "Der er ingen understøttet opgavefunktion med dette navn.",
                    default: "Misligholdelse",
                    disable: "Deaktiver"
                },
                questFeatures: {
                    title: "Opgavefunktioner",
                    description: "Skift specifikke opgaveegenskaber.",
                    popupWarning: "Valgmuligheden {{disablePopup}} vil blive ignoreret for gennemførte Quests og Quest-statussporing.",
                    videoQuestInfo: "Indstillingen {{completeVideo}} vil vente i videoopgavens varighed og automatisk markere den som afsluttet.",
                    gameQuestInfo: "På samme måde vil valgmuligheden {{completeGame}} vente i spillets varighed og automatisk markere den som afsluttet. Denne mulighed understøttes kun i den officielle desktop-klient.",
                    manualStartWarning: "Du skal starte opgaver manuelt. Det første klik starter Opgaver i baggrunden. For videoopgaver åbner efterfølgende klik videomodalen som normalt. For at annullere missioner kan du åbne kontekstmenuen i Mission-feltet og vælge {{stopAuto}}.",
                    tosWarning: "Brug af nogen af ​​disse muligheder er imod Discords servicevilkår. Brug på eget ansvar.",
                    selectFeatures: "Vælg hvilke opgaveegenskaber, der skal ændres.",
                    disablePopup: "Deaktiver Opgavepopup på Kontopanel",
                    completeVideo: "Fuldfør videoopgaver i baggrunden",
                    completeGame: "Fuldfør gameplay-opgaver i baggrunden",
                    stopAuto: "Stop Autofuldførelse"
                },
                restyleQuests: {
                    title: "Reformatér opgaver",
                    description: "Fremhæv Opgaver med valgfrie temafarver for synlighed.",
                    precedenceNote: "Stilarter for anmodet og udløbet opgave vil have forrang, selvom opgaven ignoreres.",
                    gradientStyle: "Gradient Stili",
                    assetPreload: "Asset Bootloader",
                    unclaimed: "Uopfordret",
                    claimed: "Anmodet",
                    ignored: "ignoreret",
                    expired: "Udløbet",
                    intenseGradient: "Tæt omstøbt gradient",
                    defaultGradient: "Standard Recast Gradient",
                    blackGradient: "Subtil sort gradient",
                    noGradient: "Ingen gradient",
                    loadAllAssets: "Indlæs alle opgaveaktiver ved sideindlæsning",
                    loadDuringScroll: "Indlæs opgaveaktiver under siderulning"
                },
                reorderQuests: {
                    title: "Omarranger opgaver",
                    description: "Sorter opgaver efter deres status. Gælder, når sorteringsindstillingen \"Questify\" er valgt på questsiden.",
                    formatNote: "Den kommaseparerede liste skal indeholde alle følgende: {{items}}.",
                    placeholder: "Du skal tilføje UKREVET, KRÆVET, IGNORERET, UDLØBET alle",
                    invalidFormat: "Ugyldigt format.",
                    unclaimedSubsort: "Uopkrævet underrang",
                    claimedSubsort: "Hævdede underrang",
                    ignoredSubsort: "Ignoreret underrækkefølge",
                    expiredSubsort: "Udløbet underrang",
                    addedNewest: "Tilføjet (nyeste)",
                    addedOldest: "Tilføjelse (ældst)",
                    expiredRecent: "Udløbet (seneste)",
                    expiredLeast: "Udløbet (mindst senest)",
                    expiringSoon: "Udløber (nærmeste)",
                    expiringLate: "Udløber (senest)",
                    claimedRecent: "Anmodet (seneste)",
                    claimedLeast: "Anmodet (i det mindste senest)",
                    ignoredQuestProfile: "Ignoreret opgaveprofil",
                    sharedProfile: "Delt: Alle konti på denne kundeandel ignoreres.",
                    privateProfile: "Privat: Alle konti på denne klient har separate ignoreringer.",
                    rememberSort: "Husk sorteringsvalg",
                    rememberFilter: "Husk filtervalg",
                    yes: "Ja",
                    no: "Ingen",
                    rememberNote: "Dette sorterings- og filtervalg refererer til de indbyggede sorterings- og filterindstillinger på opgavesiden. Ovenstående tilpassede sortering gælder kun, når sorteringsindstillingen \"Questify\" er valgt på Quest-siden. Hvis genkald er deaktiveret, nulstilles sorterings- eller filterindstillingerne, hver gang du åbner opgavesiden."
                },
                fetchingQuests: {
                    title: "Hente opgaver",
                    description: "Konfigurer, hvor ofte Opgaver hentes fra Discord, og indstil advarsler for nye Opgaver.",
                    defaultBehavior: "Som standard viser Discord kun Opgaver, når de er installeret, og du besøger siden Opgaver. Dette betyder, at uden et henteinterval defineret nedenfor, vil dette plugin ikke blive underrettet om nye quests tilføjet i løbet af dagen.",
                    requirement: "Dette afhænger af, om Quest-knappen er aktiv og indstillet til {{unclaimed}}, eller indstillet til {{always}}, og de uhævede {{pill}}-, {{badge}}- eller {{both}}-indikatorer er aktiveret. Ellers er der ingen grund til at hente Quests med jævne mellemrum.",
                    blockWarning: "Desuden, hvis {{fetchingQuests}} er blokeret i indstillingen {{questFeatures}}, vil dette ikke virke.",
                    fetchInterval: "Hent rækkevidde",
                    alertSound: "Advarselslyd",
                    intervalPlaceholder: "Vælg eller skriv et interval mellem 30 minutter og 12 timer.",
                    intervalFeedback: "Intervaller bør være mellem 30 minutter og 12 timer.",
                    soundPlaceholder: "Vælg en lyd, eller angiv en tilpasset lyd-URL.",
                    soundFeedback: "Lyden blev ikke fundet, eller URL'en er ikke fra et understøttet domæne.",
                    disabled: "Handicappet",
                    minutes: "Et minut",
                    minute: "Et minut",
                    hours: "Øjeblik",
                    hour: "Øjeblik",
                    thirtyMinutes: "30 minutter",
                    oneHour: "1 øjeblik",
                    threeHours: "3 øjeblikke",
                    sixHours: "6 øjeblikke",
                    twelveHours: "12 øjeblikke",
                    customSound: "BRUGERDEFINERET LYD"
                },
                disableOptions: {
                    everything: "Deaktiver alt",
                    discovery: "Deaktiver fanen Udforsk",
                    dms: "Deaktiver fanen Opgaver i DM'er",
                    fetching: "Deaktiver opgavehentning",
                    popup: "Deaktiver Popup Above Account Panel",
                    sponsored: "Deaktiver sponsoreret banner på opgavesiden",
                    badge: "Deaktiver badge på brugerprofiler",
                    inventory: "Deaktiver meddelelse om transport af gavebeholdning",
                    friendsList: "Venneliste Aktuelt aktiv kampagne",
                    membersList: "Medlemsliste Active Playing-ikoner",
                    gameQuests: "Gennemfør spil/aktivitetsudfordringer i baggrunden",
                    videoQuests: "Fuldfør videovisningsopgaver i baggrunden",
                    achievementQuests: "Udfør aktivitetsopgaver i baggrunden",
                    mobileDesktop: "Gør mobile opgaver kompatible med desktop",
                    notifyOnComplete: "Giv mig besked, når opgaven er fuldført"
                },
                options: {
                    always: "Altid",
                    unclaimed: "Uopfordret",
                    never: "Aldrig",
                    pill: "Hap",
                    badge: "Badge",
                    both: "Begge dele",
                    none: "Ingen",
                    openQuests: "Åbn Quests",
                    contextMenu: "Kontekstmenu",
                    pluginSettings: "Indstillinger for plugin",
                    nothing: "Intet",
                    orbs: "kugler",
                    nitroCodes: "Nitro koder",
                    rewardCodes: "Belønningskoder",
                    inGameItems: "Genstande i spillet",
                    profileCollectibles: "Profilsamlinger"
                }
            },
            option: {
                disableQuests: {
                    label: "Deaktiver Opgaver",
                    description: "Vælg hvilke opgavefunktioner, der skal deaktiveres."
                },
                disableQuestsEverything: {
                    label: "Deaktiver alt",
                    description: "Deaktiver alle opgavefunktioner."
                },
                disableQuestsFetchingQuests: {
                    label: "Deaktiver opgavehentning",
                    description: "Deaktiver opgavehentning fra Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Deaktiver fanen Opgave i DM'er",
                    description: "Deaktiver fanen Opgave på siden Direkte beskeder."
                },
                disableQuestsDiscoveryTab: {
                    label: "Deaktiver fanen Udforsk",
                    description: "Deaktiver fanen Quest på siden Udforsk."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Deaktiver sponsoreret banner på opgavesiden",
                    description: "Deaktiver det sponsorerede banner på siden Opgaver."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Deaktiver popup på kontopanel",
                    description: "Deaktiver Opgave-pop op-vinduet øverst i dit kontopanel."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Deaktiver badge på brugerprofiler",
                    description: "Deaktiver opgavemærket på brugerprofiler."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Deaktiver besked om flytning af gavebeholdning",
                    description: "Gavebeholdning Deaktiver notifikation om missionsflytning."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Deaktiver Venneliste Aktuelt aktiv promovering",
                    description: "Deaktiver Quest-promovering for spil, der spilles af venner."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Deaktiver Active Play-ikoner på medlemslisten",
                    description: "Deaktiver aktive afspilningsikoner på medlemslisten."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Gør Mobile Tasks Desktop-kompatibel",
                    description: "Gør Opgaver kun til mobilenheder kompatible med desktop."
                },
                completeVideoQuestsInBackground: {
                    label: "Fuldfør videoopgaver i baggrunden",
                    description: "Gennemfør videomissioner i baggrunden, når videotiden er gået."
                },
                completeGameQuestsInBackground: {
                    label: "Gennemfør spilmissioner i baggrunden",
                    description: "Gennemfør spilmissioner i baggrunden, efter spilletid er gået."
                },
                completeAchievementQuestsInBackground: {
                    label: "Udfør aktivitetsopgaver i baggrunden",
                    description: "Gennemfør aktivitetsudfordringer i baggrunden."
                },
                notifyOnQuestComplete: {
                    label: "Giv mig besked, når opgaven er fuldført",
                    description: "Vis besked, når en opgave er fuldført automatisk."
                },
                questButton: {
                    label: "Opgaveknap",
                    description: "Vis en Quest-knap på serverlisten."
                },
                questButtonDisplay: {
                    label: "Opgaveknappens udseende",
                    description: "Hvilken skærmtype der skal bruges til knappen Opgave på serverlisten."
                },
                questRewardIncludeRewardCode: {
                    label: "Inkluder belønningskoder",
                    description: "Inkluder quests med belønningskoder, når du ser questtællinger."
                },
                questRewardIncludeNitroCode: {
                    label: "Inkluder Nitro-koder",
                    description: "Inkluder Nitro-kodede missioner, når du ser missionstællinger."
                },
                questRewardIncludeInGame: {
                    label: "Inkluder belønninger i spillet",
                    description: "Inkluder missioner med belønninger i spillet, når du ser missionstællinger."
                },
                questRewardIncludeCollectibles: {
                    label: "Inkluder samlinger",
                    description: "Inkluder quests med samleobjekter, når du ser questtællinger."
                },
                questRewardIncludeOrbs: {
                    label: "Inkluder sfærer",
                    description: "Inkluder Globe-vindende Quests, når du ser Quest-tællinger."
                },
                questButtonUnclaimed: {
                    label: "Quest-knap Uopkrævet indikator",
                    description: "Hvilken visningstype der skal bruges til den uopkrævede indikator på knappen Opgave på serverlisten."
                },
                questButtonBadgeColor: {
                    label: "Quest Button Badge Farve",
                    description: "Farven på Quest-knappens badge på serverlisten."
                },
                questButtonLeftClickAction: {
                    label: "Venstre klik handling",
                    description: "Handling, der skal udføres, når du venstreklikker på knappen Opgave i serverlisten."
                },
                questButtonMiddleClickAction: {
                    label: "Mellemklik handling",
                    description: "Handling, der skal udføres, når du midterklikker på knappen Opgave på serverlisten."
                },
                questButtonRightClickAction: {
                    label: "Højreklik på handling",
                    description: "Handling, der skal udføres, når du højreklikker på knappen Opgave i serverlisten."
                },
                fetchingQuests: {
                    label: "Hente opgaver",
                    description: "Medbring opgave fra Discord."
                },
                fetchingQuestsInterval: {
                    label: "Quest Fetch Range",
                    description: "Interval (i sekunder) for at hente opgaver fra Discord."
                },
                fetchingQuestsAlert: {
                    label: "Quest Fetch Alert",
                    description: "Lyden, der afspilles, når nye missioner registreres."
                },
                fetchingQuestsAlertVolume: {
                    label: "Quest Fetch Alert Volume",
                    description: "Lydstyrken, der afspilles, når nye missioner registreres."
                },
                restyleQuests: {
                    label: "Reformatér opgaver",
                    description: "Tilpas udseendet af opgavefelter på siden Opgaver."
                },
                restyleQuestsUnclaimed: {
                    label: "Omformater opgaver - uopfordret",
                    description: "Farven på uopkrævede opgavebrikker på siden Opgaver."
                },
                restyleQuestsClaimed: {
                    label: "Omformater opgaver - anmodet",
                    description: "Farven på opgavefelter, der er gjort krav på, på siden Opgaver."
                },
                restyleQuestsIgnored: {
                    label: "Omformater opgaver - ignoreret",
                    description: "Farven på ignorerede opgavefelter på siden Opgaver."
                },
                restyleQuestsExpired: {
                    label: "Omformater opgaver - udløbet",
                    description: "Farven på udløbne opgavefelter på siden Opgaver."
                },
                restyleQuestsGradient: {
                    label: "Reformatér opgaver - Gradient",
                    description: "Gradientstil brugt i opgavebrikker."
                },
                restyleQuestsPreload: {
                    label: "Omformater opgaver - Bootloader",
                    description: "Prøv at forudindlæse aktiver til opgavefelter."
                },
                reorderQuests: {
                    label: "Omarranger opgaver",
                    description: "Sorter opgaver efter deres status. Lad tom for standardsortering. Den kommaseparerede liste skal indeholde alt af følgende: UKRÆVET, KRÆVET, IGNORERET, UDLØBET."
                },
                unclaimedSubsort: {
                    label: "Uopkrævet underrang",
                    description: "Undersorteringsmetode for uhævede opgaver."
                },
                claimedSubsort: {
                    label: "Hævdede underrang",
                    description: "Undersorteringsmetode for ønskede opgaver."
                },
                ignoredSubsort: {
                    label: "Ignoreret underrækkefølge",
                    description: "Undersorteringsmetode for ignorerede opgaver."
                },
                expiredSubsort: {
                    label: "Udløbet underrang",
                    description: "Nedsorteringsmetode for udløbne opgaver."
                },
                unclaimedUnignoredQuests: {
                    label: "Uanmodede Ikke-Ignorerede Opgaver",
                    description: "Holder styr på antallet af uopkrævede og ikke-ignorerede opgaver."
                },
                onQuestsPage: {
                    label: "På siden Opgaver",
                    description: "Om brugeren i øjeblikket er på siden Opgaver."
                },
                triggerQuestsRerender: {
                    label: "Udløser Quests Genrender",
                    description: "Udløs en gengivelse af siden Opgaver ved at ændre denne indstilling."
                },
                ignoredQuestProfile: {
                    label: "Ignoreret opgaveprofil",
                    description: "Profilen, der bruges til Ignorerede opgaver."
                },
                rememberQuestPageSort: {
                    label: "Husk Quest Page Sortering",
                    description: "Husk den sidst brugte sekvens på siden Opgaver."
                },
                rememberQuestPageFilters: {
                    label: "Husk opgavesidefiltre",
                    description: "Husk sidst brugte filtre på siden Opgaver."
                },
                lastQuestPageSort: {
                    label: "Seneste Quest Page Ranking",
                    description: "Husk den sidst brugte sekvens på siden Opgaver."
                },
                lastQuestPageFilters: {
                    label: "Seneste opgavesidefiltre",
                    description: "Husk sidst brugte filtre på siden Opgaver."
                },
                ignoredQuestIDs: {
                    label: "Ignorerede opgave-id'er",
                    description: "Array af ignorerede opgave-id'er."
                },
                resumeQuestIDs: {
                    label: "Igangværende opgave-id'er",
                    description: "Array af opgave-id'er, der autofuldføres i baggrunden."
                }
            },
            button: {
                questInProgressWithTime: "Fuldfører ({{remainTime}})",
                completing: "Færdiggør",
                resume: "Devam And (~{{remainTime}})",
                complete: "Fuldfør {{remainTime}}",
                completeImmediate: "Fuldstændig (med det samme)",
                completed: "afsluttet"
            },
            reward: {
                orbs: "{{orbQuantity}} Orbs için {{completingText}}.",
                article: "{{completingText}} for {{itemName}}.",
                unrecognized: "{{completingText}} for en ikke-genkendt belønningstype."
            },
            notification: {
                completed: {
                    title: "Jobbet er udført",
                    body: "{{questName}} quest fuldført."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Hvis beskeden kun består af spørgsmålstegn, erstatter den alle spørgsmålstegn med den valgte streng.",
            option: {
                replace: {
                    label: "Forandring",
                    description: "Udskift med"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Tilføjer en hurtig omtaleknap til meddelelseshandlingslinjen.",
            tooltip: "Hurtigt bet"
        },
        quickReply: {
            name: "Hurtigt svar",
            description: "Besvar (ctrl + op/ned) og rediger (ctrl + shift + op/ned) beskeder med genvejstaster.",
            option: {
                shouldMention: {
                    label: "Skal jeg nævne",
                    description: "Ping som svar som standard",
                    noReplyMentionPlugin: "Følg NoReplyMention plugin (hvis aktiveret)",
                    enabled: "Effektiv",
                    disabled: "Handicappet"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignorer blokeret og ignoreret",
                    description: "Ignorer beskeder fra blokerede/ignorerede brugere, mens du browser"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Skift hurtigt mellem temaer ved hjælp af tastaturgenveje.",
            about: {
                title: "Genvejstaster",
                description: "Brug Ctrl/Cmd+Shift+piletasterne til at navigere (venstre/højre: Skift mellem temaer, Op: Aktiver, Ned: Deaktiver).",
                reload: "Tryk på Ctrl/Cmd+Shift+Alt for at opdatere temalisten."
            },
            modal: {
                added: "{{count}} nye temaer tilføjet",
                removed: "{{count}} temaer blev fjernet",
                reloaded: "{{themeCount}} tema genindlæst",
                addedLocal: "Tilføjet {{count}} lokale temaer",
                removedLocal: "{{count}} indbygget tema blev fjernet",
            },
            option: {
                includeLocal: {
                    label: "Inkluder indfødte temaer",
                    description: "Indeholder oprindelige temaer på din enhed på listen"
                },
                includeOnline: {
                    label: "Inkluder onlinetemaer",
                    description: "Inkluderer online-temaer på listen"
                },
                sortOrder: {
                    label: "Sorter efter",
                    description: "Sorteringsmetode",
                    asc: "A'dan Z'ye",
                    desc: "Z'den A'ya",
                    recent: "I Søn"
                },
                autoRefresh: {
                    label: "Automatisk opdatering",
                    description: "Değişiklik algılandığında tema listesini otomatik olarak yeniler"
                },
                showNotifications: {
                    label: "Bildirimleri Göster",
                    description: "Temalar eklendiğinde veya kaldırıldığında bildirim gösterir"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Bir mesajdan ilham verici alıntı görseli oluşturmanı sağlar",
            context: {
                quote: "Alıntı"
            },
            modal: {
                title: "4K'da Yakala",
                grayscale: "Siyah-Beyaz",
                export: "Dışa Aktar",
                send: "Gönder",
                saveAsGIF: "GIF olarak Kaydet",
                saveDescription: "Görseli PNG yerine GIF olarak kaydeder/gönderir",
                showWatermark: "Filigranı Göster",
                watermarkText: "Filigran Metni (maks. 32 karakter)"
            },
            option: {
                quoteFont: {
                    label: "Alıntı Fontu",
                    description: "Alıntı metni için font (yazar/kullanıcı adı her zaman M PLUS Rounded 1c kullanır)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Filigran",
                    description: "Özel filigran metni (maks. 32 karakter)"
                },
                grayscale: {
                    label: "Siyah-Beyaz",
                    description: "Varsayılan olarak siyah-beyazı etkinleştir"
                },
                showWatermark: {
                    label: "Filigranı Göster",
                    description: "Varsayılan olarak filigranı göster"
                },
                saveAsGif: {
                    label: "GIF Olarak Kaydet",
                    description: "Varsayılan olarak GIF olarak kaydet"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Sessiz alma butonunun yanında rastgele bir sesli aramaya katılma butonu ekler.",
            tooltip: "Rastgele Sesli",
            context: {
                label: "Ses durumu düzenleyici",
                amountLabel: "KULLANICI SAYISI",
                spacesLabel: "BOŞ YER",
                voiceLabel: "SES LİMİTİ",
                selfLabel: "KENDİ AYARLARIN",
                select: {
                    servers: "Sunucu Seç",
                    list: "Liste Seç",
                    filters: "Filtreleri Seç",
                    amount: "Kullanıcı Sayısı",
                    userAmount: "{{amount}} kullanıcı",
                    parameters: "Parametreler",
                    moreThan: "Şundan fazla",
                    lessThan: "Şundan az",
                    equalTo: "Şuna eşit",
                    spaces: "Boş Yer",
                    voice: "Ses Limiti"
                },
                filter: {
                    muted: "Sessizde",
                    deafened: "Sağırlaştırılmış",
                    camera: "Kamera",
                    stream: "Udsendelse",
                    includeFilters: "Inkluder filtre",
                    avoidFilters: "Undgå filtre"
                },
                reset: {
                    list: "Nulstil liste"
                },
                voice: {
                    label: "Lydindstillinger",
                    auto: {
                        mute: "Auto mute",
                        deafen: "Autodøve",
                        camera: "Automatisk kamera",
                        stream: "Automatisk udsendelse",
                        leaveWhenEmpty: "Tag afsted, når du er fri",
                        navigate: "Automatisk navigering",
                        stage: "Undgå scenekanaler",
                        afk: "Undgå AFK-kanaler"
                    }
                },
                invalid: {
                    server: "ugyldig server"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Brugerantal transaktion",
                    description: "Vælg en handling for antallet af brugere"
                },
                userAmount: {
                    label: "Antal brugere",
                    description: "Vælg antal brugere"
                },
                spacesLeftOperation: {
                    label: "Stillingsproces",
                    description: "Vælg en handling for maksimalt antal brugere"
                },
                spacesLeft: {
                    label: "Ledig stilling",
                    description: "Vælg mængden af ​​ledig plads"
                },
                vcLimitOperation: {
                    label: "Audio Channel Limit Operation",
                    description: "Vælg en handling for lydkanalgrænsen."
                },
                vcLimit: {
                    label: "Lydkanalgrænse",
                    description: "Vælg en lydkanalgrænse"
                },
                servers: {
                    label: "Servere",
                    description: "Servere til at inkludere"
                },
                autoNavigate: {
                    label: "Auto Navigation",
                    description: "Den går automatisk til lydkanalen."
                },
                autoCamera: {
                    label: "Automatisk kamera",
                    description: "Tænder automatisk kameraet"
                },
                autoStream: {
                    label: "Automatisk udsendelse",
                    description: "Starter automatisk udsendelse"
                },
                selfMute: {
                    label: "Auto mute",
                    description: "Den slår automatisk din mikrofon fra, når du tilslutter dig lydkanalen."
                },
                selfDeafen: {
                    label: "Autodøve",
                    description: "Det overdøver dig automatisk, når du tilslutter dig stemmekanalen."
                },
                leaveEmpty: {
                    label: "Tag afsted, når du er fri",
                    description: "Når stemmekanalen bliver tom, finder den tilfældigt et andet opkald."
                },
                avoidStages: {
                    label: "Undgå scenekanaler",
                    description: "Undgår at slutte sig til lydkanaler af scenetype."
                },
                avoidAfk: {
                    label: "Undgå AFK-kanaler",
                    description: "AFK undgår at tilslutte sig lydkanaler."
                },
                video: {
                    label: "Video",
                    description: "Søger efter brugere, hvis kameraer er tændt"
                },
                stream: {
                    label: "Udsendelse",
                    description: "Søger efter brugere, der sender"
                },
                mute: {
                    label: "på lydløs",
                    description: "Søger efter brugere, der er slået fra"
                },
                deafen: {
                    label: "døvet",
                    description: "Søger efter døvede brugere"
                },
                includeStates: {
                    label: "Inkluder filtre",
                    description: "Tillader inklusion af specifikke brugertilstande"
                },
                avoidStates: {
                    label: "Undgå filtre",
                    description: "Gør det muligt at undgå visse brugersituationer"
                }
            },
            alert: {
                failed: "En lydkanal blev ikke fundet!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "React konverterer fejlkoder til meddelelser, der kan læses af mennesker."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotifications Button",
            description: "Tilføjer en knap til meddelelsespanelet for at markere alle meddelelser som læst med et enkelt klik.",
            button: "Læs alle"
        },
        recentDMSwitcher: {
            name: "Seneste DMSwitcher",
            description: "Skift mellem nyligt brugte DM'er med Ctrl+Tab (Ctrl+Shift+Tab vender tilbage)",
            option: {
                visualStyle: {
                    label: "Visuel stil",
                    description: "Visuel indikatorstil, der vises, når der skiftes",
                    overlay: "Lag (Alt+Tab-stil)",
                    toast: "Notifikation (statusmeddelelse)",
                    off: "Lukket"
                },
                overlayMode: {
                    label: "Lagtilstand",
                    description: "Lagindhold",
                    row: "Sidste samtalelinje",
                    current: "kun tilgængelig",
                },
                amountOfUsers: {
                    label: "Antal brugere",
                    description: "Antal brugere, der skal vises på laget"
                },
                overlayRowLength: {
                    label: "Lagrækkelængde",
                    description: "Antal seneste DM'er, der skal vises i rækken"
                },
                overlayShowAvatars: {
                    label: "Vis lagprofilbilleder",
                    description: "Viser brugerprofilbilleder på laget"
                },
                toastDurationMs: {
                    label: "Underretningstid (ms)",
                    description: "Vis profilbilleder på lag"
                },
                clearRdms: {
                    label: "Ryd RDMS-liste",
                    description: "Testværktøj: Rydder listen over RDM'er",
                    toast: "RDMS-historikken er ryddet",
                    button: "Ryd RDMs historie"
                }
            },
            modal: {
                unknown: "Ukendt",
                dm: "DM",
                group: "Grup DM",
                channel: "Kanal",
                switchingTo: "Skifter til {{name}}"
            }
        },
        relationshipNotifier: {
            name: "Relationship Notifier",
            description: "Giver dig besked, når en ven, gruppechat eller server fjerner dig.",
            option: {
                notices: {
                    label: "Meddelelser",
                    description: "Vis en notifikation øverst på skærmen, når den fjernes (brug denne, hvis du ikke vil gå glip af nogen notifikationer)."
                },
                offlineRemovals: {
                    label: "Offline fjernelser",
                    description: "Send besked, hvis du er blevet fjernet, mens du er offline, når du åbner Discord."
                },
                friends: {
                    label: "Venner",
                    description: "Giv mig besked, når en ven fjerner dig fra sin liste"
                },
                friendRequestCancels: {
                    label: "Annullering af venneanmodning",
                    description: "Giv mig besked, når en venneanmodning er annulleret"
                },
                servers: {
                    label: "Servere",
                    description: "Giv besked, når den fjernes fra en server"
                },
                groups: {
                    label: "Grupper",
                    description: "Giv mig besked, når den fjernes fra en gruppechat"
                }
            },
            notification: {
                removedFriend: "{{user}} gjorde dig uvenner.",
                cancelledFriendRequest: "En venneanmodning sendt af {{user}} er blevet annulleret.",
                removedFromServer: "Du er blevet fjernet fra {{server}}.",
                removedFromGroup: "Du er blevet fjernet fra {{gruppe}}.",
                noLongerGroup: "Du er ikke længere i {{gruppe}}.",
                noLongerServer: "Du er ikke længere på {{server}}.",
                noLongerFriend: "Du er ikke længere venner med {{user}}.",
                friendRequestRevoked: "Venneanmodningen sendt af {{bruger}} er blevet trukket tilbage.",
                ok: "ok"
            }
        },
        remix: {
            name: "Remix",
            description: "Tilføjer en 'Remix'-indstilling til højrekliksmenuen på filsend-knappen. Dette åbner et billede i en simpel billededitor og giver dig mulighed for at sende det redigerede billede direkte til chatten.",
            label: "Remix",
            button: {
                send: "Sende",
                close: "Kvarter",
                brush: "Børste",
                erase: "Duster",
                crop: "Afgrøde",
                shape: "Form",
                reset: "nulstilles",
                clear: "klar"
            },
            editor: {
                choose: "Vælg et billede",
                browse: "Gozat",
                rectangle: "Rektangel",
                ellipse: "Ellipse",
                line: "Linje",
                arrow: "Okay",
                fill: "fylde"
            }
        },
        repeatMessages: {
            name: "Gentag beskeder",
            description: "Det giver dig mulighed for hurtigt at sende beskeder igen. Hvis du holder Shift-tasten nede, mens du klikker på Gentag, vil den sende den som et svar på beskeden.",
            button: "Gentag (klik) / Gentag og svar (Shift + klik)",
            context: {
                repeat: "gentage",
                repeatAndReply: "Gentag og svar"
            }
        },
        replaceGoogleSearch: {
            name: "Erstat GoogleSearch",
            description: "Det erstatter Google-søgning med forskellige søgemaskiner.",
            option: {
                customEngineName: {
                    label: "Brugerdefineret motornavn",
                    description: "Navn på tilpasset søgemaskine"
                },
                customEngineURL: {
                    label: "Tilpasset motor-URL",
                    description: "Din søgemaskines URL"
                },
                replacementEngine: {
                    label: "Backup søgemaskine",
                    description: "Erstatter backup-søgemaskinen med en specifik søgemaskine (i stedet for at tilføje en menu)",
                    off: "Lukket",
                    custom: "Speciel motor",
                }
            },
            context: {
                label: "Metni Ara",
                searchWith: "{{name}} Aras hus"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Giver dig mulighed for at kontrollere altid eller aldrig ping på beskedsvar, inkluderer også hvidlistefunktion",
            option: {
                alwaysPingOnReply: {
                    label: "Svar altid Ping",
                    description: "Få et ping hver gang nogen svarer på dine beskeder"
                },
                replyPingWhitelist: {
                    label: "Svar Ping hvidliste",
                    description: "Indtast ID'erne for de brugere, du altid vil modtage et svar-ping fra, adskilt af kommaer."
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Viser tidsstempel i forhåndsvisninger af besvarede beskeder"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Ctrl-klik på en spoiler for at vise alle spoilere i en besked, Ctrl+Shift for at vise alle spoilere i hele chatten"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Tilføjer muligheder for omvendt billedsøgning til billedhøjrekliksmenuer",
            context: {
                label: "Søg billede",
                all: "Søg alle"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Bedøm andre brugere (Tilføjer en ny indstillingssektion til Profiler)",
            notification: {
                newReview: "Der er nye anmeldelser på din profil!",
                auth: {
                    error: "Der opstod en fejl under godkendelsen",
                    successfully: "Log ind med succes!",
                    failed: "Godkendelse mislykkedes",
                    review: "Giv venligst tilladelse til at tilføje en anmeldelse.",
                    opening: "Godkendelsesvinduet åbnes...",
                    need: "Du skal have autorisation for at evaluere!"
                },
                error: {
                    fast: "Du fremsætter anmodninger for hurtigt. Vent et par sekunder, og prøv igen.",
                    fetching: "Der opstod en fejl under hentning af anmeldelser.",
                    action: {
                        failed: "Brugeren {{action}} kunne ikke nås",
                        success: "Brugeren blev {{action}}"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Er du sikker?",
                    description: "Vil du virkelig slette denne anmeldelse?",
                    confirm: "Sil",
                    cancel: "Ophæve",
                    error: "Du skal logge ind for at slette anmeldelser.",
                },
                report: {
                    title: "Er du sikker?",
                    description: "Vil du virkelig rapportere denne anmeldelse?",
                    confirm: "Erklæring",
                    cancel: "Ophæve",
                    error: "Du skal være logget ind for at skrive anmeldelser.",
                },
                block: {
                    title: "Er du sikker?",
                    description: "Vil du virkelig blokere denne bruger? Du vil ikke længere se deres anmeldelser.",
                    confirm: "blok",
                    cancel: "Ophæve",
                    error: "Du skal være logget ind for at blokere brugere.",
                },
                blocked: {
                    title: "Blokerede brugere",
                    auth: "Du er ikke logget ind på ReviewDB.",
                    noBlocked: "Ingen brugere er blokeret.",
                    fetch: "Der opstod en fejl under hentning af blokerede brugere"
                },
                reviews: {
                    title: "Brugers anmeldelser",
                    noUser: "Det ser ud til, at ingen har anmeldt denne bruger endnu. Du kan være den første!",
                    noServer: "Det ser ud til, at ingen har anmeldt denne server endnu. Du kan være den første!"
                }
            },
            button: {
                appeal: "Indvending",
                ok: "ok",
                more: "Mere",
                reply: "Svar til @{{bruger}}",
                update: "Opdater anmeldelse for @{{user}}",
                review: "Anmeld @{{bruger}}"
            },
            context: {
                view: "Se anmeldelser",
                blocked: "Du blokerede denne bruger",
                delete: "Slet anmeldelse",
                report: "Rapportgennemgang",
                block: "Bloker bruger",
                unblock: "Fjern blokering af bruger",
                reply: "Svar på anmeldelse"
            },
            option: {
                authorize: {
                    label: "Bemyndige",
                    button: "Godkend med ReviewDB"
                },
                notifyReviews: {
                    label: "Vurderingsmeddelelse",
                    description: "Giv besked om nye anmeldelser ved opstart"
                },
                showWarning: {
                    label: "Vis advarsel",
                    description: "Vis respektfuld advarsel over rubrikken"
                },
                hideTimestamps: {
                    label: "Skjul tidsstempler",
                    description: "Skjul tidsstempler på anmeldelser"
                },
                hideBlockedUsers: {
                    label: "Skjul blokerede brugere",
                    description: "Skjul anmeldelser fra brugere, du har blokeret"
                },
                buttons: {
                    label: "Knapper",
                    manageBlocked: "Administrer blokerede brugere",
                    support: "Support ReviewDB udvikling",
                    website: "ReviewDB hjemmeside",
                    server: "ReviewDB Support Server"
                }
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Behandler magnetlinks som beskedlinks (med forhåndsvisning)",
            unknown: "ukendt filnavn"
        },
        roleColorEverywhere: {
            name: "RolleFarveEverywhere",
            description: "Viser den øverste rollefarve, hvor det er muligt",
            option: {
                chatMentions: {
                    label: "Chat-omtaler",
                    description: "Vis rollefarver i chatomtaler (inklusive beskedboks)"
                },
                memberList: {
                    label: "Medlemsliste",
                    description: "Vis rollefarver i medlemslistens rolletitler"
                },
                voiceUsers: {
                    label: "Stemmebrugere",
                    description: "Vis rollefarver i stemmechatbrugerlisten"
                },
                reactorsList: {
                    label: "Liste over reaktorer",
                    description: "Vis rollefarver i brugerlisten med emoji-reaktioner"
                },
                pollResults: {
                    label: "Undersøgelsesresultater",
                    description: "Vis rollefarver i undersøgelsesresultater"
                },
                colorChatMessages: {
                    label: "Farvelæg dine chatbeskeder",
                    description: "Farve chatbeskeder i henhold til forfatterens rollefarve"
                },
                messageSaturation: {
                    label: "Meddelelsesmætning",
                    description: "Beskedens farveintensitet"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Rediger ethvert Rich Presence-indhold og -type",
            option: {
                replacedAppIds: {
                    label: "Ændrede applikationsidentiteter (ID'er)",
                }
            },
            modal: {
                tutorial: {
                    title: "ID'er for aktuelle begivenheder",
                    noRunning: "Ingen løbende begivenheder",
                    available: "Tilgængelige variabler",
                    variableText: "I alle felter (undtagen post-URL'en) kan du indsætte variabler, der automatisk vil blive erstattet med deres originale indhold:",
                    more: "Flere detaljer",
                    details: {
                        leave: "For at forlade et felt som det er, lad det stå tomt.",
                        set: "Skriv 'null' for at skjule et felt i statusindikatoren.",
                        reload: "Du skal muligvis genstarte Discord for at ændringerne skal gælde."
                    }
                },
                settings: {
                    applyEdits: "Anvend redigeringer til appen",
                    addNewApp: "Tilføj ny app",
                    appId: "Ansøgnings-id",
                    invalidAppId: "Ugyldigt applikations-id",
                    newActivityType: "Ny begivenhedstype",
                    activityTypes: {
                        playing: "spiller",
                        watching: "ser på",
                        listening: "lytter",
                        competing: "væddeløb",
                        streaming: "i luften"
                    },
                    streamUrl: "Stream-URL (skal være YouTube eller Twitch)",
                    invalidStreamUrl: "Ugyldig webadresse for indlæg",
                    newName: "nyt navn",
                    newDetails: "nye detaljer",
                    newState: "ny situation",
                    largeImage: "store billede",
                    smallImage: "clipart",
                    text: "Tekst",
                    url: "URL",
                    firstLine: "(første linje)",
                    secondLine: "(anden linje)",
                    thirdLine: "(tredje linje)",
                    alsoThirdLine: "(også tredje linje)",
                    hideAssets: "Skjul billeder (store og små billeder)",
                    hideTimestamps: "Skjul tidsstempler"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Viser statistik om din aktivitet som en rig tilstedeværelse",
            option: {
                assetURL: {
                    label: "Visuelle URL'er",
                    description: "Billedet, der skal bruges til RPC. Hvis det efterlades tomt, vil dit profilbillede blive brugt"
                },
                rpcTitle: {
                    label: "RPC-header",
                    description: "Titel på din RPC"
                },
                statDisplay: {
                    label: "Visning af statistik",
                    description: "Hvad skal RPC vise? (Du har sandsynligvis kun én linje tilladt)",
                    today: "Antal meddelelser sendt i dag",
                    alltime: "Antallet af meddelelser sendt til enhver tid",
                    listened: "Ugens mest lyttede album"
                },
                lastFMApiKey: {
                    label: "Last.fm API nøgle",
                    description: "Din Last.fm API nøgle"
                },
                lastFMUsername: {
                    label: "Last.fm brugernavn",
                    description: "Dit Last.fm brugernavn"
                },
                albumCoverImage: {
                    label: "Albumomslagsbillede",
                    description: "Brug albumcover som RPC-billede? (Hvis Last.fm-skærm er valgt)"
                },
                lastFMStatFormat: {
                    label: "Last.fm Statistik Format",
                    description: "Hvordan skal Last.fm-statistikker formateres? $album er erstattet med albumnavnet, $artist er erstattet med kunstnernavnet"
                }
            },
            noInfo: "Ingen information lige nu :(",
            messagesToday: "Beskeder sendt i dag: {{count}}",
            messagesAllTime: "Beskeder sendt til enhver tid: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "Gem favorit-GIF'er",
            description: "Eksporterer foretrukne GIF-links",
            toolbox: "Gem foretrukne GIF'er",
            title: "Gem foretrukne GIF'er",
            command: {
                savegifs: {
                    description: "Gemmer alle foretrukne GIF-links til en tekstfil"
                },
                saveworkinggifs: {
                    description: "Tester alle dine foretrukne GIF'er og gemmer kun dem, der stadig virker"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Vis værktøjskasse-knap",
                    description: "Viser knappen 'Gem foretrukne GIF'er' i Plexcord Toolbox (kræver genstart)"
                }
            },
            toast: {
                save: "GIF'er blev gemt som {{filename}}",
                failed: "GIF'er kunne ikke gemmes",
                no: "Favorit GIF blev ikke fundet!",
                testing: "{{count}} GIF'er bliver testet, det kan tage noget tid...",
                noneWorking: "Ingen af ​​dine gemte GIF'er ser ud til at virke.",
                saved: "{{broken}} potentielt ødelagte GIF'er blev filtreret fra. {{gemte}} fungerende GIF'er gemt."
            }
        },
        scheduledMessages: {
            name: "Planlagte meddelelser",
            description: "Planlæg, at beskeder skal sendes på et bestemt tidspunkt eller efter en vis forsinkelse.",
            toolbox: {
                toggle: "Se planlagte beskeder"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Maksimalt antal beskeder pr. minut",
                    description: "Det maksimale antal planlagte beskeder, der kan sendes på en kanal i samme minut."
                },
                checkIntervalSeconds: {
                    label: "Kontrolinterval (sekunder)",
                    description: "Hvor ofte vil pluginnet tjekke, om der er beskeder at sende."
                },
                showNotifications: {
                    label: "Vis meddelelser",
                    description: "Viser notifikation (toast), når beskeder sendes."
                },
                showPhantomMessages: {
                    label: "Vis spøgelsesbeskeder",
                    description: "Viser planlagte beskeder som spøgelsesbeskeder (midlertidige) i chatten."
                }
            },
            channelType: {
                unknown: "Ukendt",
                dm: "DM",
                groupDm: "Grup DM",
                channel: "Kanal"
            },
            toast: {
                messageSent: "Planlagt besked sendt til {{channel}}",
                messageFailed: "Den planlagte besked kunne ikke sendes",
                maxMessagesReached: "Den maksimale grænse på {{max}} beskeder pr. minut pr. kanal er nået",
                messageScheduled: "Besked planlagt!",
                messageRemoved: "Planlagt besked fjernet",
                allCleared: "Alle planlagte beskeder blev ryddet"
            },
            button: {
                tooltipOn: "Planlægningstilstand TIL (klik for at deaktivere, højreklik for liste)",
                tooltipOff: "Planlægningstilstand FRA (klik for at aktivere, højreklik for liste)"
            },
            accessory: {
                scheduledFor: "Planlagt til {{date}} {{timeLeft}}",
                remaining: {
                    days: "{{days}}g {{hours}}s tilbage",
                    hours: "{{hours}}s {{minutes}}min. tilbage",
                    minutes: "{{minutes}}min. tilbage"
                }
            },
            scheduleModal: {
                title: "Plan besked",
                schedulingFor: "Planlagt kanal: {{channel}}",
                scheduleType: "Planlægningstype",
                delay: "Forsinke",
                specificTime: "Specifik tid",
                delayMinutes: "Forsinkelse (minutter)",
                dateTime: "Dato og tid",
                error: {
                    invalidDelay: "Indtast venligst en gyldig forsinkelsestid (minimum 1 minut)",
                    invalidDateTime: "Vælg en fremtidig dato og tid"
                },
                schedule: "Planlagt",
                cancel: "Ophæve"
            },
            viewModal: {
                title: "Planlagte beskeder",
                clearAll: "Ryd alle",
                noMessages: "Ingen planlagte beskeder",
                delete: "Sil",
                close: "Kvarter"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Det irriterende 'Vi tabte forstørrelsesglasset!' retter fejlen.",
            notPerfect: "Denne rettelse er ikke perfekt, så du skal muligvis genindlæse søgelinjen for at løse problemerne.",
            paragraph1: "Discord tillader kun en maksimal offset på 5000 (hvilket er det, der forårsager forstørrelsesfejlen).",
            paragraph2: "Det betyder, at du kan se præcis 5000 beskeder i fortiden og 5000 beskeder i fremtiden (sorteret efter ældste).",
            paragraph3: "Dette plugin skifter til den modsatte sorteringsmetode for at omgå Discords begrænsning,",
            paragraph4: "men hvis der er et stort søgeresultat, og du prøver at vise en meddelelse, der ikke kan nås med nogen af ​​sorteringsmetoderne,",
            paragraph5: "plugin'et viser kun offset 0 (nyeste eller ældste besked afhængig af sorteringsmetode)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Discord afspiller altid den hemmelige version af ringetonen (undtagen særlige ringetonebegivenheder)",
            option: {
                onlySnow: {
                    label: "Kun under sne-ringetonebegivenhed",
                    description: "Spil kun Snow Halation Theme"
                }
            }
        },
        summaries: {
            name: "Resuméer",
            description: "Aktiverer Discords eksperimentelle oversigtsfunktion på alle servere og viser AI-genererede oversigter over samtaler",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Oversigtssletningstærskel (dage)",
                    description: "Antallet af dage en fordøjelse er gyldig, før den fjernes. Bemærk, at der maksimalt gemmes 50 oversigter pr. kanal"
                }
            }
        },
        selfForward: {
            name: "Selvfremad",
            description: "Tilføjer den aktuelle kanal til popup-listen for videresendelse"
        },
        sendTimestamps: {
            name: "SendTidsstempler",
            description: "Send nemt tidsstempler med chatboksknap og tekstgenveje. Læs den udvidede beskrivelse!",
            sample: {
                paragraph1: "For hurtigt at sende tidsstempler, skal du tilføje tidsstempler i `TT:MM`-format (inklusive tilbageanførselstegn!) til din besked",
                paragraph2: "Se eksempler nedenfor.\nHvis du har brug for noget mere specifikt, så brug knappen Dato i chatlinjen!",
                examples: "Eksempler:"
            },
            modal: {
                title: "Tidsstempelvælger",
                light: "Åben",
                dark: "Mørk",
                format: "Tidsstempelformat",
                preview: "Forhåndsvisning",
                insert: "Tilføje",
                insertTimestamp: "Tilføj tidsstempel"
            },
            option: {
                replaceMessageContents: {
                    label: "Skift beskedindhold",
                    description: "Skift tidsstempler i beskedindhold"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Giver dig mulighed for at se oplysninger om en server",
            context: {
                serverInfo: "Serverinformation"
            },
            option: {
                sorting: {
                    label: "Arrangement",
                    description: "Brugernavn eller Vist navn, hvis relevant",
                    username: "Brugernavn",
                    displayname: "Vist navn",
                    none: "Sortering"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Serverinformation",
                    friends: "Venner",
                    mutualUsers: "Almindelige brugere",
                    blockedUsers: "Blokerede brugere",
                    ignoredUsers: "Ignorerede brugere"
                },
                owner: "Server ejer",
                loading: "Indlæser...",
                createdAt: "Oprettelsesdato",
                joinedAt: "Tilmeldingsdato",
                vanityLink: "Særligt invitationslink",
                preferredLocale: "Foretrukken region",
                verification: {
                    level: "Verifikationsniveau",
                    none: "Ingen",
                    low: "Lav",
                    medium: "Medium",
                    high: "Høj",
                    highest: "Højest"
                },
                serverBoosts: "Server booster",
                channels: "Kanaler",
                roles: "Rulle"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Tilføjer antallet af online venner eller antallet af servere til serverlisten",
            friends: "Ven",
            servers: "Oplægsholder",
            option: {
                mode: {
                    label: "Mod",
                    description: "Tilstand til visning på serverlisten",
                    friend: "Kun antal venner online",
                    server: "Kun antal servere",
                    both: "Antal både server- og onlinevenner"
                },
                useCompact: {
                    label: "Kompakt Modu Kullan",
                    description: "Får forklaringen til at vises kun med tekst"
                }
            }
        },
        serverSearch: {
            name: "Serversøgning",
            description: "Naviger bedre på dine servere med hurtigsøgningsknappen",
            tooltip: "Vi køber"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Bringer VSCode-stil kodeblokke drevet af Shiki til Discord",
            option: {
                theme: {
                    label: "Han",
                    description: "Standard temaer"
                },
                customTheme: {
                    label: "Brugerdefineret tema",
                    description: "Link til et brugerdefineret VSCode-tema",
                    mustURL: "Skal være en gyldig URL",
                    mustJSON: "Skal være en JSON-fil"
                },
                tryHljs: {
                    label: "Backup til Hljs",
                    description: "Brug den lysere standard Discord-farvestof og -tema.",
                    never: "Aldrig",
                    secondary: "Vælg Shiki frem for Highlight.js",
                    primary: "Vælg Highlight.js frem for Shiki",
                    always: "Altid"
                },
                useDevIcon: {
                    label: "Brug Devicon til sprogikoner",
                    description: "Sådan viser du sprogikoner i kodeblokke",
                    disabled: "Handicappet",
                    colorless: "Farveløs",
                    colored: "Farverig"
                },
                bgOpacity: {
                    label: "Baggrundsgennemsigtighed",
                    description: "baggrunds opacitet"
                }
            },
            button: {
                copy: "kopi",
                copied: "Kopieret!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Den viser altid alle beskedknapper, uanset om du trykker på Shift-tasten eller ej.",
            option: {
                noShiftDelete: {
                    label: "Slet uden skift",
                    description: "Fjerner behovet for at trykke på Shift-tasten for at slette en besked."
                },
                noShiftPin: {
                    label: "Fastgørelse uden Shift",
                    description: "Fjerner behovet for at trykke på Shift-tasten for at fastgøre en besked."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Viser badges ud for meddelelsesforfatterens navn i chatten.",
            option: {
                showPlexcordDonor: {
                    label: "Vis dit Plexcord-donormærke",
                    description: "Aktiver for at vise Plexcord Donor-badges i chat."
                },
                plexcordDonorPosition: {
                    label: "Placering af Plexcord Donor Badge",
                    description: "Placering af Plexcord Donor badges."
                },
                showPlexcordContributor: {
                    label: "Vis Plexcord Contributor Badge",
                    description: "Aktiver for at vise Plexcord Contributor-badges i chat."
                },
                plexcordContributorPosition: {
                    label: "Placering af Plexcord Contributor Badge",
                    description: "Placering af Plexcord Contributor-badges."
                },
                showDiscordProfile: {
                    label: "Vis Discord-profilmærket",
                    description: "Aktiver for at vise Discord-profilmærker i chat."
                },
                discordProfilePosition: {
                    label: "Placering af Discord-profilmærke",
                    description: "Placering af Discord-profilmærker."
                },
                showDiscordNitro: {
                    label: "Vis Discord Nitro Badge",
                    description: "Aktiver for at vise Discord Nitro-badges i chat."
                },
                discordNitroPosition: {
                    label: "Placering af Discord Nitro Badge",
                    description: "Placering af Discord Nitro-mærker."
                },
                badgeSettings: {
                    label: "Badgeindstillinger",
                    description: "Konfigurer placeringen af ​​andre badges vist i chatten.",
                    modal: "Træk for at omarrangere badges; Klik for at aktivere/deaktivere en specifik badgetype."
                }
            },
            badge: {
                plexcord: "Plexcord supportermærke",
                contributor: "Plexcord deltager badge",
                discordProfile: "Discord profil rozetleri (HypeSquad, Discord Staff, Active Developer vb.)",
                nitro: "nitro badge",
                staff: "Discord personale",
                partner: "Partner Server Ejer",
                events: "HypeSquad-begivenheder",
                bravery: "HypeSquad Tapperhed",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Discord Bug Hunter",
                earlyVerifiedBotDeveloper: "Tidlig verificeret botudvikler",
                earlySupporter: "Tidlig tilhænger",
                moderatorProgram: "Uddannet moderatorprogram"
            },
            modal: {
                plexcordContributor: "Plexcord-deltager",
                discordNitro: "Discord Nitro",
                basic: "Grundlæggende",
                classic: "Klassisk"
            }
        },
        showConnections: {
            name: "Vis forbindelser",
            description: "Viser tilknyttede konti i brugerens pop op-kort",
            option: {
                iconSize: {
                    label: "Ikon størrelse",
                    description: "Ikonstørrelse (px)"
                },
                iconSpacing: {
                    label: "Ikon Space",
                    description: "ikonmargen",
                    compact: "Kompakt",
                    cozy: "Komfortabel",
                    roomy: "Bred"
                }
            }
        },
        showHiddenChannels: {
            name: "Vis Skjulte kanaler",
            description: "Viser kanaler, som du ikke har tilladelse til at få adgang til.",
            tooltip: "Hemmelig kanal",
            option: {
                channelStyle: {
                    label: "Kanalstil",
                    description: "Den stil, der bruges til at vise skjulte kanaler.",
                    classic: "Klassisk",
                    muted: "Stille",
                    showUnreads: "Vis ulæst",
                    mutedWithUnreads: "Vis Slået fra og ulæst"
                },
                showMode: {
                    label: "Visningstilstand",
                    description: "Den tilstand, der bruges til at vise skjulte kanaler.",
                    lock: "Enkel stil med låseikon",
                    hidden: "Dæmpet stil med skjult øje-ikon til højre",
                    lockIconRight: "Låseikon til højre"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Standardtilladte brugere og roller dropdown-status",
                    description: "Om den tilladte bruger- og rollemenu vil være åben som standard i private kanaler"
                }
            },
            channelType: {
                text: "tekst",
                announcement: "bekendtgørelse",
                forum: "forum",
                voice: "ses",
                stage: "scene"
            },
            sortOrder: {
                latestActivity: "Seneste begivenhed",
                creationDate: "Oprettelsesdato"
            },
            forumLayout: {
                default: "Ikke indstillet",
                list: "Listevisning",
                grid: "galleri udsigt"
            },
            videoQuality: {
                auto: "Automatisk",
                full: "720p"
            },
            modal: {
                hidden: "skjult",
                locked: "låst",
                threads: "emner",
                posts: "indlæg",
                messages: "beskeder",
                post: "stolpe",
                message: "besked",
                unknown: "ukendt",
                permissionDetails: "Detaljer om tilladelse",
                thisIsA: "Dette er en {{status}} {{channelType}} kanal",
                canNotSee: "Du kan ikke se {{type}}-delen af ​​denne kanal.",
                guidelines: "Men du kan se deres instruktioner:",
                lastCreated: "Sidst oprettet {{type}}:",
                lastPin: "Sidste indlæg fastgjort:",
                threadSlowmode: "Standard tråd langsom tilstand:",
                slowmode: "Langsom tilstand:",
                bitrate: "Bitrate:",
                region: "Areal:",
                automatic: "Automatisk",
                videoQuality: "Videokvalitetstilstand:",
                inactiveArchiveDuration: "Standard inaktivitetsperiode før arkivering {{type}}",
                defaultLayout: "Standard layout:",
                defaultSort: "Standard sortering:",
                defaultReaction: "Standard reaktion emoji:",
                requireTag: "Det er obligatorisk at sætte et tag for indlæg i dette forum.",
                availableTags: "Tilgængelige tags:",
                allowedUsersAndRoles: "Tilladte brugere og roller:",
                hideAllowedUsersAndRoles: "Skjul tilladte brugere og roller",
                viewAllowedUsersAndRoles: "Se tilladte brugere og roller"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Det viser forskellige skjulte og kun moderatorer uanset tilladelser.",
            option: {
                showTimeouts: {
                    label: "Vis medlemstimeout i chat",
                    description: "Vis timeout-ikoner for medlemmer i chat."
                },
                showInvitesPaused: {
                    label: "Vis oplysninger om invitationer, der er sat på pause",
                    description: "Vis, at invitationer er sat på pause på serverlisten."
                },
                showModView: {
                    label: "Vis modvisning",
                    description: "Vis medlemstilstand se kontekstmenu på alle servere."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Tilføjer indstillingen vis indlejring til kontekstmenuen for links, der ikke har indlejringer",
            context: {
                embed: {
                    show: "Vis Integrer",
                    hide: "Fjern Embed"
                }
            },
            error: {
                failed: "Integrering kunne ikke hentes",
                noEmbed: "Integrer ikke fundet"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Se enhver permutation af brugerdefinerede kaldenavne, venners kaldenavne, serverkaldenavne, visningsnavne og brugernavne i chat.",
            option: {
                messages: {
                    label: "Beskeder",
                    description: "Vis tilpasset navneformat i beskeder."
                },
                replies: {
                    label: "Svar",
                    description: "Se brugerdefineret navneformat i svar."
                },
                mentions: {
                    label: "Omtaler",
                    description: "Vis tilpasset navneformat i omtaler."
                },
                memberList: {
                    label: "Medlemsliste",
                    description: "Vis det første tilgængelige navn i dit brugerdefinerede navneformat på medlemslisten."
                },
                typingIndicator: {
                    label: "Skriveindikator",
                    description: "Vis det første tilgængelige navn i dit brugerdefinerede navneformat i indtastningsindikatoren."
                },
                profilePopout: {
                    label: "Profil pop-up kort",
                    description: "Vis det første tilgængelige navn, der er angivet i dit brugerdefinerede navneformat i profil-pop-up-kort."
                },
                voiceChannels: {
                    label: "Lydkanaler",
                    description: "Vis det første tilgængelige navn i dit brugerdefinerede navneformat på lydkanaler."
                },
                reactions: {
                    label: "Reaktioner",
                    description: "Vis det første tilgængelige navn i dit brugerdefinerede navneformat i react tooltips, og vis det fulde navn i react popups."
                },
                discriminators: {
                    label: "Vis parsere",
                    description: "Tilføj parser til botbrugernavne. Parsere er blevet fjernet for normale brugere, men bruges stadig til bots. Som standard svarer en bots brugernavn til en brugers globale navn, og derfor kan flere bots have det samme brugernavn. Tilføjelse af parsere gør dem unikke igen."
                },
                hideDefaultAtSign: {
                    label: "Skjul standard @ Sign",
                    description: "Skjul standard '@'-symbolet i begyndelsen af ​​navnet i omtaler og svar. Gælder kun, hvis den relevante funktion er aktiveret."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Forkort alle navne i udgivertilstand",
                    description: "Mens du er i Broadcaster-tilstand, skal du forkorte alle navne, ikke kun brugernavne."
                },
                removeDuplicates: {
                    label: "Fjern dubletter",
                    description: "Hvis to af navnene er ens, skal du fjerne dubletterne, så kun de unikke efterlades."
                },
                ignoreFonts: {
                    label: "Ignorer skrifttyper",
                    description: "For andet, tredje og fjerde navn skal du bruge GG SANS, idet du ignorerer brugerens tilpassede skrifttype."
                },
                ignoreGradients: {
                    label: "Ignorer gradienter",
                    description: "For ikke-primære navne, hvis rollen har en gradient, og den følgende farve er sat til 'Role+-#', skal du bruge den primære farve i stedet for hele gradienten, og hvis der er en nitroeffekt, ignorer den fuldstændigt."
                },
                animateGradients: {
                    label: "Gør gradienter animerede",
                    description: "Vis animation, hvis andet, tredje og fjerde navn har en rollegradient. Deaktiveret, hvis 'Ignorer gradienter' er aktiveret, eller reduceret bevægelse er aktiveret."
                },
                nameSeparator: {
                    label: "Navneskiller",
                    description: "Separator til brug mellem navne. Standard er enkelt mellemrum."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Venns navn Vises kun i private beskeder",
                    description: "Vis kun vennenavne i private beskeder, ikke på servere."
                },
                customNameOnlyInDirectMessages: {
                    label: "Brugerdefineret navn Vis kun i private beskeder",
                    description: "Vis kun brugerdefinerede navne i private beskeder, ikke på servere."
                },
                includedNames: {
                    label: "Medfølgende navne",
                    description: "Den rækkefølge, som brugernavne, visningsnavne, kaldenavne og vennenavne vises i. Brug disse pladsholdere: {user}, {display}, {nick}, {friend}. Hvis et navn ikke er tilgængeligt, kan du skrive de alternativer, der skal bruges, adskilt af kommaer: {ven, nick, display}. Du kan tilføje tre præfikser og tre suffikser for hvert navn."
                },
                customNameColor: {
                    label: "Brugerdefineret navnefarve",
                    description: "Farven, der skal bruges til det brugerdefinerede navn, du tildeler brugeren, hvis det ikke er det første, der vises. Den accepterer ethvert gyldigt CSS-input. Brug 'Role' til at holde styr på brugerens overordnede rollefarver, nitroeffektfarver eller IRCColors-farve (hvis aktiveret). Brug 'Role+-#' til at justere lysstyrken med denne procentdel (f.eks. 'Role+15')"
                },
                friendNameColor: {
                    label: "Farve på vens navn",
                    description: "Farven, der skal bruges, når vennens navn ikke er det fornavn, der vises. Den accepterer ethvert gyldigt CSS-input. Brug 'Role' til at holde styr på brugerens overordnede rollefarver, nitroeffektfarver eller IRCColors-farve (hvis aktiveret). Brug 'Role+-#' til at justere lysstyrken med denne procentdel (f.eks. 'Role+15')"
                },
                nicknameColor: {
                    label: "Kaldenavn farve",
                    description: "Farven, der skal bruges, når kaldenavnet ikke er det fornavn, der vises. Den accepterer ethvert gyldigt CSS-input. Brug 'Role' til at holde styr på brugerens overordnede rollefarver, nitroeffektfarver eller IRCColors-farve (hvis aktiveret). Brug 'Role+-#' til at justere lysstyrken med denne procentdel (f.eks. 'Role+15')"
                },
                displayNameColor: {
                    label: "Farve på displaynavn",
                    description: "Farven, der skal bruges, når visningsnavnet ikke er det først viste navn. Den accepterer ethvert gyldigt CSS-input. Brug 'Role' til at holde styr på brugerens overordnede rollefarver, nitroeffektfarver eller IRCColors-farve (hvis aktiveret). Brug 'Role+-#' til at justere lysstyrken med denne procentdel (f.eks. 'Role+15')"
                },
                usernameColor: {
                    label: "Brugernavn Farve",
                    description: "Farven, der skal bruges, når brugernavnet ikke er det fornavn, der vises. Den accepterer ethvert gyldigt CSS-input. Brug 'Role' til at holde styr på brugerens overordnede rollefarver, nitroeffektfarver eller IRCColors-farve (hvis aktiveret). Brug 'Role+-#' til at justere lysstyrken med denne procentdel (f.eks. 'Role+15')"
                },
                triggerNameRerender: {
                    label: "Udløser navnregenerering",
                    description: "Ændring af denne indstilling udløser navnet, der skal genskabes."
                }
            },
            modal: {
                change: {
                    title: "Skift SMYN brugernavn",
                },
                add: {
                    title: "Tilføj SMYN kaldenavn"
                },
                setCustom: "Indstil et brugerdefineret SMYN kaldenavn for denne bruger. Brug ved at angive {custom} i SMYN-skabelonindstillinger.",
                nickname: "SMYN kaldenavn",
                reset: "Nulstil SMYN kaldenavn",
                cancel: "Ophæve"
            }
        },
        showResourceChannels: {
            name: "Vis ressourcekanaler",
            description: "Viser kanaler skjult bag serverressourcer på kanallisten"
        },
        showSongName: {
            name: "VisSangnavn",
            description: "Viser sangnavn i stedet for kunstner til Spotify-begivenhed"
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Angiver, hvor længe en bruger vil timeout i timeout-ikonets værktøjstip eller ved siden af ​​det",
            option: {
                displayStyle: {
                    label: "Vis stil",
                    description: "Sådan får du vist timeout-perioden",
                    tooltip: "I Værktøjstip",
                    inline: "Ved siden af ​​timeout-ikonet"
                }
            }
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Åbn en anden kanal eller DM som en sidebar eller pop op",
            toolbox: {
                label: "Åbn forrige chat"
            },
            context: {
                label: "Åbn Sidebar Chat"
            },
            modal: {
                switch: "Skift kanaler",
                popout: "Åbn Chat som popup",
                close: "Luk Sidebar Chat"
            },
            option: {
                persistSidebar: {
                    label: "Gør Sidebar Chat Permanent",
                    description: "Gør det muligt for sidebar-chat at forblive åben, når Discord genstartes"
                },
                patchCommunity: {
                    label: "Anvend fællesskabspatch",
                    description: "Retter elementer på fællesskabsservere, såsom kanalbrowseren eller fanen Medlemmer."
                }
            }
        },
        signature: {
            name: "Signatur",
            description: "Automatisk signatur/slutning af beskedtekst",
            option: {
                name: {
                    label: "Signatur",
                    description: "Signaturtekst, der skal tilføjes til slutningen af ​​dine beskeder"
                },
                textHeader: {
                    label: "Tekst titel",
                    description: "Titel, der skal tilføjes i begyndelsen af ​​teksten"
                },
                showIcon: {
                    label: "Vis ikon",
                    description: "Vis et ikon i chatlinjen for at slå pluginnet til og fra"
                },
                contextMenu: {
                    label: "Kontekstmenu",
                    description: "Tilføj mulighed for at skifte funktionalitet på chat login kontekstmenu"
                },
                isEnabled: {
                    label: "Effektiv",
                    description: "Skift funktion"
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
                    name: "Signatur",
                    description: "Slå din signatur til og fra",
                    toogle: "Skift din signatur (standardadfærd: ændring)",
                    enabled: "Signatur aktiveret",
                    disabled: "Signatur er deaktiveret"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Tilføjer en knap til chatlinjen for at slå afsendelse af lydløs besked til og fra.",
            option: {
                persistState: {
                    label: "Gør status permanent",
                    description: "Bestem, hvordan du fortsætter med at skifte status for tavs besked",
                    none: "Det bør ikke være permanent (det skal nulstilles, når kanalen skiftes)",
                    channels: "Gør det vedvarende på tværs af kanaler",
                    restarts: "Fortsæt på tværs af kanaler, og Discord genstarter"
                },
                autoDisable: {
                    label: "Auto deaktiver",
                    description: "Deaktiver automatisk funktionen igen efter at have sendt en lydløs besked"
                }
            },
            tooltip: {
                enable: "Aktiver Silent Message",
                disable: "Deaktiver Silent Message"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Skjul din skriveindikator fra chat.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Skjul din skriveindikator fra chat.",
                    toggle: {
                        name: "skifte",
                        description: "Skift funktionen globalt, pr. kanal eller pr. server.",
                        global: "Global",
                        channel: "Kanal",
                        guild: "Oplægsholder"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Skjul andre brugeres skriveindikatorer fra toppen af ​​chatlinjen."
                    },
                    membersListIndicator: {
                        name: "medlemslisteindikator",
                        description: "Skjul andre brugeres skriveindikatorer fra medlemslisten."
                    },
                    chatIcon: {
                        name: "chatIkon",
                        description: "Vis et ikon i chatlinjen for hurtigt at slå pluginnet til og fra."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Tilføj en rullemenu til chatkontekstmenuen for hurtigt at ændre plugin-indstillinger."
                    },
                    defaultHidden: {
                        name: "defaultSkjult",
                        description: "Bestemmer, om skriveinformationen i DM'er/kanaler/servere skal skjules som standard."
                    }
                }
            },
            content: {
                updated: "Indstillinger for tavs skrivning er blevet opdateret.",
                noChanges: "Der blev ikke foretaget ændringer i indstillingerne for lydløs indtastning."
            },
            tooltip: {
                hidden: "Der står Skjult ({{location}})",
                visible: "Skriver synlig ({{location}})",
                global: "Synlig skrivning (global)"
            },
            option: {
                enabledGlobally: {
                    label: "Globalt aktiv",
                    description: "Tænd/sluk din egen skriveindikator globalt."
                },
                hideChatBoxTypingIndicators: {
                    label: "Skjul chatboksskriveindikatorer",
                    description: "Skjul skriveindikatorer øverst i andre brugeres chatbokse."
                },
                hideMembersListTypingIndicators: {
                    label: "Skjul medlemsliste skriveindikatorer",
                    description: "Skjul indtastningsindikatorer i andre brugeres medlemsliste."
                },
                chatIcon: {
                    label: "Chat-ikon",
                    description: "Vis et ikon i chatlinjen for hurtigt at skifte plugin."
                },
                chatIconLeftClickAction: {
                    label: "Chatikon Venstre klik Handling",
                    description: "Bestem, hvad du skal gøre, når du venstreklikker på chatikonet.",
                    global: "Skift global skrivestatus",
                    channel: "Skift skrivestatus for kanal",
                    guild: "Skift skrivning til serverstatus",
                    settings: "Åbn Plugin-indstillinger"
                },
                chatIconMiddleClickAction: {
                    label: "Chat-ikon Mellemklik handling",
                    description: "Bestem, hvad du skal gøre, når du midterklikker på chatikonet.",
                    global: "Skift global skrivestatus",
                    channel: "Skift skrivestatus for kanal",
                    guild: "Skift skrivning til serverstatus",
                    settings: "Åbn Plugin-indstillinger"
                },
                chatIconRightClickAction: {
                    label: "Chat-ikon Højreklik Handling",
                    description: "Bestem, hvad du skal gøre, når du højreklikker på chatikonet.",
                    global: "Skift global skrivestatus",
                    channel: "Skift skrivestatus for kanal",
                    guild: "Skift skrivning til serverstatus",
                    settings: "Åbn Plugin-indstillinger"
                },
                chatContextMenu: {
                    label: "Chat kontekstmenu",
                    description: "Tilføj en rullemenu til chatkontekstmenuen for hurtigt at ændre plugin-indstillinger."
                },
                defaultHidden: {
                    label: "Standard skjult",
                    description: "Hvis den er aktiveret, vil din indikator blive skjult for andre brugere på alle DM'er/kanaler/servere, der ikke er angivet på listen 'Deaktiverede steder' nedenfor. Hvis den er deaktiveret, vises din indikator på steder, der ikke er inkluderet på listen 'Aktive steder'."
                },
                enabledLocations: {
                    label: "Aktive lokationer",
                    description: "Aktiver funktionen for disse ID'er. Den accepterer kommaseparerede DM-id'er, kanal-id'er og server-id'er. Bruges kun, hvis 'Standard privat' er deaktiveret."
                },
                disabledLocations: {
                    label: "Deaktiverede steder",
                    description: "Deaktiver funktionen for disse ID'er. Den accepterer kommaseparerede DM-id'er, kanal-id'er og server-id'er. Bruges kun, hvis 'Standard privat' er aktiveret."
                }
            }
        },
        snowfall: {
            name: "Snefald",
            description: "Lad det sne på Discord!",
            about: {
                title: "Information",
                paragraph: "Dette plugin tilføjer en snefaldseffekt med juletema over Discord-grænsefladen. Du kan ændre snetypen fra indstillingerne nedenfor.",
                note: "BEMÆRK: Selvom dette plug-in ikke skaber mere effekt på ydeevnen end et gennemsnitligt Plexcord-plugin på de fleste computere, kan det forårsage en vis forsinkelse på low-end-systemer."
            },
            option: {
                typeOfSnow: {
                    label: "biltype",
                    description: "Ændrer den viste snetype (påvirker ydeevnen).",
                    solid: "Ensfarvet (højeste ydeevne)",
                    text: "Metin (medium ydeevne)",
                    emoji: "Visuelt (mindst ydeevne)"
                },
                maxSize: {
                    label: "Maksimal størrelse",
                    description: "Maksimal snefnugstørrelse"
                },
                speed: {
                    label: "Hastighed",
                    description: "Snefaldsrate (højere = hurtigere fald)"
                },
                flakesPerSecond: {
                    label: "Snefnug per sekund",
                    description: "Mængde snefnug, der falder pr. sekund (højere = kraftigere nedbør)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Sorterer venneanmodninger efter modtaget dato",
            tooltip: "Tilføjet — {{date}}",
            option: {
                showDates: {
                    label: "Vis datoer",
                    description: "Vis datoer i venneanmodninger"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Optager alle soundboard-lyde, der afspilles i stemmechat, og giver dig mulighed for at downloade dem",
            tooltip: "Åbn SoundBoard-log",
            option: {
                savedIds: {
                    label: "Gemte Soundboard-id'er",
                    description: "Mængden af ​​soundboard-id, du vil gemme ad gangen (0 giver dig mulighed for at gemme ubegrænset)",
                    notNumber: "Værdien er ikke et tal.",
                    cantDecimal: "Værdien må ikke være et decimaltal.",
                    cantNegative: "Værdien må ikke være et negativt tal.",
                    heading: "Mængden af ​​soundboard-id, du vil gemme ad gangen (0 giver dig mulighed for at gemme ubegrænset)",
                    warning: "Advarsel! Indstilling af tallet til en lavere værdi vil nulstille logfilerne!",
                    placeholder: "Indtast et tal"
                },
                fileType: {
                    label: "Filtype",
                    description: "Det format, du vil gemme din fil i"
                },
                openLogs: {
                    label: "Åbn Logs",
                    description: "Vis logfiler",
                    button: "Åbn Logs"
                },
                soundVolume: {
                    label: "Lydniveau",
                    description: "Lydstyrke for tænd/sluk-lyd (0 deaktiverer)"
                },
                iconLocation: {
                    label: "Ikon Placering",
                    description: "Vælg, hvor SoundBoard-logikonet skal vises (kræver genstart)",
                    toolbar: "Værktøjslinje",
                    chatInput: "Chat login"
                }
            },
            modal: {
                title: "Soundboard-logfiler",
                loading: "Lyde indlæses...",
                noLogs: "Der er endnu ikke optaget lyd. Deltag i en stemmechat for at logge!",
                clearLogs: "Ryd logfiler",
                played: "Spillet {{time}} gange",
                last: "Sidst spillet:",
                also: "Han stjal også:",
                download: "Download",
                copyId: "Kopiér ID",
                copied: "ID kopieret til udklipsholder!",
                playSound: "Afspil lyd",
                moreUsers: "Andre mennesker brugte også denne lyd...",
                volume: "Soundboard lydstyrke"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Opdeler store beskeder i flere beskeder for at passe til Discords beskedgrænse.",
            option: {
                maxLength: {
                    label: "Maksimal meddelelseslængde",
                    description: "Den maksimale længde en besked kan have, før den opdeles. Indstil til 0 for automatisk registrering."
                },
                disableFileConversion: {
                    label: "Deaktiver filkonvertering",
                    description: "Hvis aktiveret, deaktiverer filkonvertering for store meddelelser."
                },
                sendDelay: {
                    label: "Forsinkelse af forsendelse",
                    description: "Ventetid i sekunder mellem hvert spor."
                },
                hardSplit: {
                    label: "Solid partition",
                    description: "Hvis det er aktiveret, opdeles det fra det sidste tegn i stedet for et mellemrum/ny linje."
                },
                splitInSlowmode: {
                    label: "Opdel i langsom tilstand",
                    description: "Opdele beskeder, hvis langsom tilstand er aktiveret på kanalen?"
                },
                slowmodeMax: {
                    label: "Langsom tilstand maksimum",
                    description: "Maksimal langsom tilstand tilladt ved opdeling i langsom tilstand."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Tilføjer en skifteknap til Spotify-aktivitetssynlighed.",
            tooltip: {
                enable: "Åbn Spotify-aktivitet",
                disable: "Slå Spotify-aktivitet fra"
            },
            option: {
                location: {
                    label: "Kvinder",
                    description: "Hvor skal Spotify tænd/sluk-knappen vises",
                    panel: "Ved siden af ​​Mute/Mute",
                    toolbox: "Plexcord værktøjskasse"
                },
                activityStatus: {
                    label: "Aktivitetsstatus",
                    description: "Aktuel status for din Spotify-aktivitet"
                }
            }
        },
        spotifyCrack: {
            name: "Spotify crack",
            description: "Tillader gratis samlytning, blokerer automatisk pause i stemmechat og holder Spotify-aktivitet afspillet, når den er inaktiv",
            option: {
                noSpotifyAutoPause: {
                    label: "Slå Spotify Auto-Pause fra",
                    description: "Deaktiver Spotifys auto-pause."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Genoptag Spotify-aktivitet, mens du er inaktiv",
                    description: "Tillader Spotify-aktivitet at fortsætte med at spille, når den er inaktiv"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShare-kommandoer",
            description: "Del din aktuelle Spotify-sang, album eller kunstner med skråstregkommandoer (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Del din nuværende Spotify {{type}} i chatten",
                    track: "Du lytter ikke til nogen sang på Spotify.",
                    find: "Sangen kunne ikke findes på Spotify."
                }
            }
        },
        startupTimings: {
            name: "Opstartstidspunkter",
            description: "Tilføjer starttidspunkter til menuen Indstillinger",
            modal: {
                title: "Starttidspunkter",
                ended: "Se sluttidspunkt:",
                start: "Begyndelse",
                interval: "december",
                delta: "Delta",
                event: "Olay",
                serverTrace: "Server overvågning",
                loading: "Indlæser..."
            }
        },
        statusNotifications: {
            name: "Statusmeddelelser",
            description: "Tilføjer meddelelser om statusændringer",
            loading: "Indlæser...",
            option: {
                notificationsSound: {
                    label: "Meddelelseslyd",
                    description: "Vil du spille notifikationslyd til statusmeddelelser?"
                },
                usersList: {
                    label: "Brugerliste",
                    description: "Brugere skal underrettes, når der sker statusændringer",
                    empty: "Ingen brugere overvåget. Du kan tilføje en bruger ved at højreklikke på vedkommende og bruge muligheden 'Statusmeddelelser'."
                }
            },
            context: {
                label: "Statusmeddelelser",
                notifications: "Meddelelser",
                type: {
                    all: "Alle",
                    online: "online",
                    offline: "offline",
                    none: "Ingen"
                }
            },
            notification: {
                unknownUser: "Bruger",
                title: "Statusmeddelelser",
            },
            status: {
                online: "online",
                idle: "ledig",
                dnd: "Forstyr ikke",
                offline: "offline",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Giver dig mulighed for at gemme dine statusser og justere dem senere",
            button: {
                remember: "Husk status",
            },
            context: {
                edit: "Rediger brugerdefinerede forudindstillinger",
                set: "Indstil undtagelse"
            },
            notification: {
                successfully: "Status blev gemt"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Synkroniser din status med Steam! (Online, Away, Invisible eller Offline.)",
            option: {
                onlineStatus: {
                    label: "Online status",
                    description: "Steam-status, mens Discord er online"
                },
                idleStatus: {
                    label: "Inaktiv status",
                    description: "Steam-status, når Discord er inaktiv"
                },
                dndStatus: {
                    label: "Forstyr ikke-status",
                    description: "Steam-status, mens Discord Forstyr ikke"
                },
                invisibleStatus: {
                    label: "Usynlig status",
                    description: "Steam-status mens Discord Invisible"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Bliv usynlig, hvis begivenheden er privat",
                    description: "Indstil Steam-status til Usynlig, når Discord-aktivitet er skjult"
                }
            },
            status: {
                online: "online",
                away: "Væk",
                invisible: "Usynlig",
                offline: "Offline (Afbryd forbindelsen fra Steam Chat)",
                disabled: "Handicappet"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Giver dig mulighed for at forhindre klistermærker i at blive vist.",
            option: {
                showGif: {
                    label: "Vis GIF",
                    description: "Om man skal vise en cool kat GIF."
                },
                showMessage: {
                    label: "Vis besked",
                    description: "Om der skal vises en besked, der angiver, hvilket ID der er blokeret"
                },
                showButton: {
                    label: "Vis knap",
                    description: "Om der skal vises en knap for at fjerne blokeringen af ​​GIF'en"
                },
                blockedStickers: {
                    label: "Blokerede klistermærker",
                    description: "Liste over blokerede klistermærke-id'er (må ikke redigeres, medmindre du ved, hvad du laver)"
                }
            },
            modal: {
                blocked: "Blokeret klistermærke. ID: {{id}} NAVN: {{name}}",
                unblock: "Fjern blokering af {{name}}"
            },
            context: {
                blockSticker: "Blok klistermærke",
                unblockSticker: "Fjern blokering af klistermærke"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Når du vælger et klistermærke i mærkatvælgeren, føjer det det til chatboksen i stedet for at sende det med det samme"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Aktiverer automatisk streamertilstand, når du begynder at udsende på Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Deaktiverer dine ønskede streaming-codecs",
            option: {
                disableAv1Codec: {
                    label: "Deaktiver AV1 Codec",
                    description: "Forhindrer Discord i at overveje at bruge AV1 til streaming."
                },
                disableH265Codec: {
                    label: "Deaktiver H265 Codec",
                    description: "Forhindrer Discord i at overveje at bruge H265 til streaming."
                },
                disableH264Codec: {
                    label: "Deaktiver H264 Codec",
                    description: "Forhindrer Discord i at overveje at bruge H264 til streaming."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Tilpas grænsen for superreaktioner, der spilles samtidigt, og brug superreaktion som standard",
            option: {
                superReactByDefault: {
                    label: "Superreaktiv som standard",
                    description: "Reaktionsvælgeren bruger Superreaktioner som standard"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Ubegrænset superreaktionsspil",
                    description: "Fjerner superreaktionsgrænsen ved samtidig afspilning"
                },
                superReactionPlayingLimit: {
                    label: "Super reaktion afspilningsgrænse",
                    description: "Maksimalt antal superreaktioner at spille samtidigt. 0 deaktiverer Super Reactions fra at spille"
                }
            }
        },
        textReplace: {
            name: "TekstErstat",
            description: "Skift teksten i dine beskeder. Du kan finde færdige regler i #textreplace-rules-kanalen på Plexcord-serveren",
            option: {
                replace: {
                    label: "Forandring",
                    string: "Brug af almindelig tekst",
                    regex: "Brug af Regex",
                    myMessages: "Anvend på dine egne beskeder (synlig for alle)",
                    othersMessages: "Anvend på andres beskeder (kun synligt for dig)",
                    allMessages: "Anvend på alle beskeder"
                },
                stringRules: {
                    label: "Regler for almindelig tekst",
                    description: "Teksterstatningsregler ved hjælp af almindelig tekstmatchning."
                },
                regexRules: {
                    label: "Regex regler",
                    description: "Regler for udskiftning af tekst ved hjælp af regulære udtryk."
                }
            },
            modal: {
                title: "Test reglerne",
                find: "Bul",
                replace: "Forandring",
                includes: "Kun hvis den indeholder",
                type: "Skriv en besked",
                applied: "Besked med regler anvendt"
            }
        },
        themeAttributes: {
            name: "Temaattributter",
            description: "Tilføjer dataattributter til forskellige elementer til tematiske formål"
        },
        timezones: {
            name: "Tidszoner",
            description: "Viser brugernes lokale tid i profiler og meddelelsestråde",
            button: {
                wantToSave: "Vil du gemme din tidszone i databasen? Klik her for at indstille.",
                yourLocalTimezone: "(Din lokale tidszone)"
            },
            context: {
                set: "Indstil lokal tidszone"
            },
            toast: {
                refresh: {
                    successfully: "Tidszoner er blevet fornyet med succes!",
                    failed: "Tidszoner kunne ikke opdateres!",
                    failedTo: "Tidszoner kunne ikke opdateres."
                },
                update: {
                    successfully: "Tidszonen blev opdateret!",
                    failed: "Tidszone kunne ikke indstilles."
                },
                delete: {
                    successfully: "Tidszone blev slettet!",
                    failed: "Tidszone kunne ikke slettes."
                },
                auth: {
                    failed: "Godkendelse mislykkedes.",
                    success: "Godkendelse gennemført!"
                }
            },
            toolbox: {
                set: "Indstil databasens tidszone",
                refresh: "Opdater databasens tidszoner"
            },
            option: {
                showOwnTimezone: {
                    label: "Vis din tidszone",
                    description: "Viser din tidszone på din profil og meddelelsestråde"
                },
                twentyFourHourTime: {
                    label: "24 timers format",
                    description: "Vis tid i 24-timers format"
                },
                showTimezoneInfo: {
                    label: "Vis tidszoneoplysninger",
                    description: "Vis tidszoneoplysninger ud over uret"
                },
                showMessageHeaderTime: {
                    label: "Vis meddelelsens titel tid",
                    description: "Vis tid i meddelelsestråde"
                },
                showProfileTime: {
                    label: "Vis profiltid",
                    description: "Vis tid i brugerprofiler"
                },
                useDatabase: {
                    label: "Brug Database Tidszone",
                    description: "Brug databasen til at få brugerens tidszoner"
                },
                preferDatabaseOverLocal: {
                    label: "Foretrækker database frem for lokal",
                    description: "Foretrækker database frem for lokal lagring på tværs af tidszoner"
                },
                databaseUrl: {
                    label: "Database URL",
                    description: "URL for tidszonedatabaseserveren"
                },
                setDatabaseTimezone: {
                    label: "Indstil databasens tidszone",
                    description: "Indstil din tidszone i databasen",
                    setTimezone: "Indstil tidszone i databasen"
                },
                resetDatabaseTimezone: {
                    label: "Nulstil databasens tidszone",
                    description: "Nulstil din tidszone i databasen",
                    failed: "Kunne ikke nulstille databasens tidszone"
                },
                askedTimezone: {
                    label: "Tidszone spurgt",
                    description: "Angiver, om brugeren bliver bedt om at angive sin tidszone"
                }
            },
            modal: {
                title: "Tidszoner",
                select: "Vælg Tidszone",
                selectPlaceholder: "Vælg en tidszone",
                delete: "Slet tidszone",
                save: "Spare"
            }
        },
        toastNotifications: {
            name: "ToastNotifikationer",
            description: "Viser en toast-notifikation, når du modtager en direkte besked.",
            notification: {
                call: "Startede en søgning med dig!",
                recipient: {
                    add: "{{target}} blev føjet til gruppen af ​​{{actor}}.",
                    remove: "{{target}} blev fjernet fra gruppen af ​​{{actor}}.",
                    left: "Han forlod gruppen."
                },
                channel: {
                    change: {
                        name: "Kanalens navn er ændret til {{name}}.",
                        icon: "Kanalikonet er blevet ændret."
                    },
                    pinned: "Fastgjort en besked."
                },
                sent: {
                    embed: "Han sendte en indlejring.",
                    sticker: "Han sendte et klistermærke.",
                    attachment: "Fil:"
                },
                redacted: "Beskedens indhold er blevet skjult.",
                friend: {
                    accept: "{{user}} er nu din ven",
                    acceptBody: "Nu kan du sende ham en direkte besked.",
                    request: "{{user}} sendte dig en venneanmodning.",
                    requestBody: "Du kan acceptere eller afvise dette fra fanen Venner."
                },
                example: {
                    title: "Eksempel på meddelelse",
                    body: "Dette er et eksempel på en notifikationstekst."
                }
            },
            modal: {
                dismiss: "Luk meddelelse",
                attachments: "{{vedhæftede filer}} filer blev sendt."
            },
            option: {
                position: {
                    label: "Kvinder",
                    description: "Placering af Toast-meddelelse",
                    topRight: "Øverst til højre",
                    topLeft: "Øverst til venstre",
                    bottomRight: "Nederst til højre",
                    bottomLeft: "Sol Alt"
                },
                timeout: {
                    label: "Lukketid",
                    description: "Hvor mange sekunder der skal vises underretninger"
                },
                opacity: {
                    label: "Opacitet",
                    description: "Opacitet af Toast-meddelelse"
                },
                determineServerNotifications: {
                    label: "Indstil servermeddelelser",
                    description: "Bestem, om der skal vises meddelelser baseret på servermeddelelsesindstillinger"
                },
                directMessages: {
                    label: "Direkte beskeder",
                    description: "Vis meddelelser for direkte beskeder"
                },
                groupMessages: {
                    label: "Gruppebeskeder",
                    description: "Vis notifikation for gruppebeskeder"
                },
                friendServerNotifications: {
                    label: "Ven- og servermeddelelser",
                    description: "Vis meddelelser, når venner sender beskeder på offentlige servere"
                },
                friendActivity: {
                    label: "Vennebegivenhed",
                    description: "Vis meddelelser om tilføjelse af venner eller modtagelse af venneanmodninger"
                },
                notifyFor: {
                    label: "Kanaler til at modtage meddelelser",
                    description: "Indtast kanal-id'erne for at modtage notifikationer (adskilt med kommaer)"
                },
                ignoreUsers: {
                    label: "Brugere at ignorere",
                    description: "Indtast bruger-id'er, hvis meddelelser vil blive ignoreret (adskilt af kommaer)"
                },
                exampleButton: {
                    label: "Eksempel knap",
                    description: "Vis et eksempel på notifikation om toast.",
                    show: "Vis prøvemeddelelse"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Tilføjer en tilpasselig genvejstast til at tænde og slukke for dit webcam.",
            option: {
                keyBind: {
                    label: "Genvejstast",
                    description: "Knappen, der tænder og slukker for webcam, når der trykkes på den."
                },
                reqCtrl: {
                    label: "Ctrl Gerekli",
                    description: "Tving Ctrl-tasten ned."
                },
                reqShift: {
                    label: "Skift påkrævet",
                    description: "Tving Shift-tasten ned."
                },
                reqAlt: {
                    label: "Sub Påkrævet",
                    description: "Tving Alt-tasten ned."
                }
            }
        },
        translate: {
            name: "Oversætte",
            description: "Oversæt beskeder med Google Translate eller DeepL",
            tooltip: {
                label: "Konvertere"
            },
            context: {
                translate: "Konvertere",
                open: "Åbn oversættelsesvinduet",
                auto: "Automatisk oversættelse aktiveret"
            },
            option: {
                receivedInput: {
                    label: "Modtaget input",
                    description: "Det sprog, som de modtagne beskeder vil blive oversat til"
                },
                receivedOutput: {
                    label: "Modtaget output",
                    description: "Hvilket sprog vil de modtagne beskeder blive oversat til?"
                },
                sentInput: {
                    label: "Indsendt input",
                    description: "Det sprog, som dine egne beskeder vil blive oversat til"
                },
                sentOutput: {
                    label: "Sendt output",
                    description: "Hvilket sprog dine egne beskeder vil blive oversat til"
                },
                service: {
                    label: "Oversættelsestjeneste",
                    description: "DeepL Pro kræver en betalt API-nøgle",
                    descriptionWeb: "Oversættelsestjeneste (understøttes ikke på nettet!)",
                    google: "Google Oversæt",
                    deepl: "DeepL Gratis",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "DeepL API nøgle",
                    description: "DeepL API nøgle",
                    placeholder: "Få din API-nøgle på https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Automatisk oversættelse",
                    description: "Det oversætter automatisk dine beskeder, før de sendes. Du kan også skifte eller højreklikke på oversættelsesknappen for at slå denne funktion til eller fra."
                },
                showAutoTranslateTooltip: {
                    label: "Vis beskrivelse af automatisk oversættelse",
                    description: "Vis en beskrivelse i chatbar-knappen, når en besked er autooversat"
                }
            },
            modal: {
                title: "Oversættelse",
                select: "Vælg et sprog",
                auto: "Automatisk oversættelse",
                dismiss: "Kvarter",
                translated: "Oversat fra {{from}}",
                failed: {
                    to: "Oversættelse af {{text}} mislykkedes",
                    connect: "DeepL API-forbindelse mislykkedes:"
                },
                wrong: "Noget gik galt. Hvis problemet fortsætter, skal du tjekke konsollen eller bede om hjælp fra supportserveren.",
                deepl: {
                    api: "DeepL API-kvoten er overskredet. Skifter til Google Oversæt.",
                    apiKey: "DeepL API-nøgle er ikke indstillet. Vender tilbage til Google.",
                    auth: "Ugyldig DeepL API-nøgle eller version"
                },
                autoTranslateEnabled: {
                    title: "Plexcord automatisk oversættelse aktiveret",
                    body: "Du har lige aktiveret Automatisk oversættelse! Alle beskeder, du sender, bliver automatisk oversat, før de sendes.",
                    confirm: "Deaktiver automatisk oversættelse",
                    cancel: "Jeg forstår",
                    secondaryConfirm: "Vis det ikke igen"
                }
            }
        },
        typingIndicator: {
            name: "Indtastningsindikator",
            description: "Tilføjer en indikator, når nogen skriver i en kanal.",
            option: {
                includeCurrentChannel: {
                    label: "Inkluder aktuel kanal",
                    description: "Om indtastningsindikatoren skal vises for den aktuelt valgte kanal"
                },
                includeMutedChannels: {
                    label: "Inkluder dæmpede kanaler",
                    description: "Om indtastningsindikatoren skal vises for dæmpede kanaler."
                },
                includeIgnoredUsers: {
                    label: "Inkluder ignorerede brugere",
                    description: "Om indtastningsindikatoren skal vises for ignorerede brugere."
                },
                includeBlockedUsers: {
                    label: "Inkluder blokerede brugere",
                    description: "Om skriveindikatoren skal vises for blokerede brugere."
                },
                indicatorMode: {
                    label: "Visningstilstand",
                    description: "Hvordan viser man indikatoren?",
                    both: "Avatarer og animerede prikker",
                    dots: "animerede prikker",
                    avatars: "avatarer"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Viser avatarer og rollefarver i skriveindikatoren",
            option: {
                showAvatars: {
                    label: "Vis flere brugere",
                    description: "Vis avatarer i skriveindikator"
                },
                showRoleColors: {
                    label: "Vis rollefarver",
                    description: "Vis rollefarver i skriveindikator"
                },
                alternativeFormatting: {
                    label: "Alternativt format",
                    description: "Vis en mere nyttig besked, når mere end én person skriver"
                },
                amITyping: {
                    label: "Skriver jeg?",
                    description: "Viser, om andre har set, hvad du skrev"
                }
            },
            others: {
                areTyping: "og {{count}} flere personer skriver..."
            }
        },
        unindent: {
            name: "Uindrykning",
            description: "Fjerner førende indrykning i kodeblokke"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Konverterer metriske enheder til kejserlige enheder og omvendt",
            tooltip: "Konverter enheder",
            option: {
                myUnits: {
                    label: "Mine enheder",
                    description: "De enheder du bruger og ønsker konverteret til. Standard: imperial",
                    imperial: "Imperium",
                    metric: "Metrisk"
                }
            },
            button: {
                dismiss: "Kvarter"
            }
        },
        unlimitedAccounts: {
            name: "Ubegrænsede konti",
            description: "Øger antallet af konti, du kan tilføje.",
            option: {
                maxAccounts: {
                    label: "Maksimal konto",
                    description: "Antal konti, der kan tilføjes, indtast 0 for ubegrænset"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Giver dig mulighed for at zoome yderligere ind i billedbeskæringsværktøjet, når du ændrer din avatar",
            option: {
                zoomMultiplier: {
                    label: "Zoom multiplikator",
                    description: "Zoom multiplikator"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Giver dig mulighed for at fjerne indlejret indhold i beskeder",
            context: {
                unsuppress: "Fjern Embed Suppression",
                suppress: "Udskriv Integrer"
            }
        },
        uselessInfo: {
            name: "Ubrugelig info",
            description: "Viser tilfældig ubrugelig information i Discord; der kan laves genveje og intervalindstillinger.",
            recording: "Indspilning...",
            record: "Spare",
            option: {
                delay: {
                    label: "Underretningsinterval",
                    description: "Underretningsvisningsinterval (i minutter)"
                },
                historyHotkey: {
                    label: "Genvej til Historikpanel",
                    description: "Genvejstast for at åbne historikken for tidligere vist information"
                },
                randomFactHotkey: {
                    label: "Tilfældig informationsgenvej",
                    description: "Genvejstast for at åbne panelet tilfældigt info"
                },
                sameFact: {
                    label: "Undgå at gentage de samme oplysninger",
                    description: "Forhindrer den samme information i at blive vist flere gange uden at vise alle oplysningerne"
                },
                lastNFacts: {
                    label: "Seneste information må ikke gentages",
                    description: "Sidste antal oplysninger, der ikke skal vises igen (0 = alle gange)"
                }
            },
            modal: {
                title: "Ubrugelig info",
                history: {
                    none: "Ingen information endnu. Brug genvejen eller vent.",
                    source: "Kilde"
                },
                showRandom: "Vis tilfældigt",
                close: "Kvarter"
            },
            notification: {
                title: "Vidste du det?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronomen",
            description: "Viser brugerpronominer i meddelelsesoverskrifter",
            option: {
                pronounsFormat: {
                    label: "Pronomen Form",
                    description: "Hvordan pronominer vises i chat",
                    lowercase: "Små bogstaver",
                    capitalized: "stort begyndelsesbogstav"
                },
                showSelf: {
                    label: "Vis dig selv",
                    description: "Slå visning af dine egne pronominer til eller fra"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Viser en indikator, når en bruger er på talekanalen",
            option: {
                showInUserProfileModal: {
                    label: "Vis i brugerprofil",
                    description: "Vis stemmekanalindikator ved siden af ​​navnet i brugerprofilen"
                },
                showInMemberList: {
                    label: "Vis i medlemslisten",
                    description: "Vis stemmekanalindikator i medlems- og DM-listen"
                },
                showInMessages: {
                    label: "Vis i Beskeder",
                    description: "Vis stemmekanalindikator i beskeder"
                }
            },
            modal: {
                inVoiceChat: "I Voice Chat"
            },
            notification: {
                cannotJoin: "Du kan ikke tilslutte dig brugerens stemmekanal."
            }
        },
        uSRBG: {
            name: "USBG",
            description: "Viser brugerbannere fra USBBG, så alle kan bruge bannere uden Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro først",
                    description: "Hvis der findes både Nitro- og USBBG-bannere, skal du bestemme, hvilken du skal bruge",
                    nitro: "Nitro banner",
                    usrbg: "USBG-banner"
                },
                voiceBackground: {
                    label: "Lyd baggrund",
                    description: "Brug USBG-bannere som baggrund for stemmechat"
                }
            },
            button: "Få dit eget USBG-banner"
        },
        validReply: {
            name: "ValidReply",
            description: "Retter fejlen 'Kunne ikke indlæse besked', når du holder markøren over svar"
        },
        validUser: {
            name: "Gyldig bruger",
            description: "Retter omtaler, der vises som '@ukendt-bruger' for ukendte brugere (svæv over omtale for at rette)",
            badges: {
                discordBugHunter: "Discord Bug Hunter",
                moderatorProgramsAlumni: "Uddannet i moderatorprogrammer",
                discordStaff: "Discord personale",
                hypeSquadEvents: "HypeSquad-begivenheder",
                bravery: "HypeSquad Cesaret",
                brilliance: "HypeSquad-lysstyrke",
                balance: "HypeSquad Denge",
                partneredServerOwner: "Co-Server ejer",
                nitro: "Discord Nitro",
                earlySupporter: "Tidlig tilhænger",
                earlyVerifiedBotDeveloper: "Tidlig verificeret botudvikler"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Giver dig mulighed for at deltage i stemmechat ved at dobbeltklikke i stedet for at enkeltklikke"
        },
        vcNarrator: {
            name: "VCNfortæller",
            description: "Meddeler via oplæser, når brugere tilslutter sig, forlader eller flytter stemmekanaler",
            option: {
                voice: {
                    label: "Ses"
                },
                volume: {
                    label: "Lydniveau",
                    description: "Fortællerstemmeniveau"
                },
                rate: {
                    label: "Hastighed",
                    description: "Fortællerens talehastighed"
                },
                sayOwnName: {
                    label: "Sig dit navn",
                    description: "Om fortælleren vil sige dit navn"
                },
                latinOnly: {
                    label: "kun latin",
                    description: "Ryd ikke-latinske tegn i navne før læsning"
                },
                joinMessage: {
                    label: "Tilmeldingsmeddelelse",
                    description: "Deltag i besked"
                },
                leaveMessage: {
                    label: "Afskedsbesked",
                    description: "efterlader besked"
                },
                moveMessage: {
                    label: "Bevægende besked",
                    description: "bevægende besked"
                },
                muteMessage: {
                    label: "Slå besked fra",
                    description: "Slå besked fra (kun dig selv indtil videre)"
                },
                unmuteMessage: {
                    label: "Slå besked til",
                    description: "Slå lyden til for besked (kun dig selv indtil videre)"
                },
                deafenMessage: {
                    label: "øredøvende budskab",
                    description: "Øjende besked (bare dig selv for nu)"
                },
                undeafenMessage: {
                    label: "øredøvende budskab",
                    description: "Øjende besked (bare dig selv for nu)"
                }
            },
            modal: {
                title: "Afspil prøvelyde",
                voiceTitle: "Ses",
                voice: "Vælg en lyd",
                languageTitle: "Dil",
                language: "Vælg et sprog",
                noVoice: "Fortællerstemmen blev ikke fundet.",
                linuxNote: "Installer speech-dispatcher eller espeak og kør Discord med --enable-speech-dispatcher parameteren",
                someNarrator: "Prøv at installere nogle stemmer fra dit operativsystems Oplæser-indstillinger",
                dontHaveEnglish: "Du har ikke uploadet nogen engelsk lyd, så fortælleren lyder måske mærkelig",
                customiseMessages: "Du kan tilpasse de talte beskeder nedenfor. Hvis du lader det stå tomt, kan du deaktivere visse meddelelser",
                placeholdersInfo: "Tilpassede pladsholdere {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} og {{CHANNEL}} erstattes med henholdsvis brugerens navn (tom, hvis du er dig selv), visningsnavn, kaldenavn på serveren og kanalnavn"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Gør avatar- og bannerbilleder i brugerprofiler klikbare; Tilføjer Vis Avatar/Banner-indstillinger til bruger-, server- og gruppekanalens kontekstmenu.",
            context: {
                view: {
                    avatar: "Se Avatar",
                    serverAvatar: "Se serveravatar",
                    icon: "Vis ikon",
                    banner: "Se banner"
                }
            },
            option: {
                format: {
                    label: "Format",
                    description: "Vælg det billedformat, der skal bruges til ikke-bevægelige billeder. Animerede billeder bruger altid .gif-formatet"
                },
                imgSize: {
                    label: "Billedstørrelse",
                    description: "Billedstørrelse til brug"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Kopier og se råindhold/data fra enhver besked, kanal eller server",
            context: {
                copyLeft: "Kopier rådata (venstre klik) / se rådata (højreklik)",
                copyRight: "Kopier rådata (højreklik) / se rådata (venstreklik)",
                view: "Se rådata"
            },
            option: {
                popoverButton: {
                    label: "Pop-up menu-knap",
                    description: "Vis en knap i popover-meddelelsen for at se beskedens rå indhold/data."
                },
                clickMethod: {
                    label: "Klik på Metode",
                    description: "Skift den klikmetode, der skal bruges til at se råindholdet/dataene for enhver meddelelse.",
                    left: "Venstreklik for at se råindhold.",
                    right: "Højreklik for at se råindhold."
                }
            },
            modal: {
                title: "Ham Veri",
                content: "Indhold",
                data: "{{type}} Veri",
                copied: "{{type}} data kopieret til udklipsholder!",
                copy: "Kopier {{type}} JSON",
                copiedContent: "Indhold kopieret til udklipsholder!",
                copyContent: "Kopier råindhold"
            },
            types: {
                message: "Besked",
                channel: "Kanal",
                guild: "Oplægsholder",
                role: "Rolle",
                user: "Bruger"
            }
        },
        voiceButtons: {
            name: "Stemmeknapper",
            description: "Hurtigt DM, slå lyden fra eller overdøv enhver bruger fra stemmeopkaldspanelet.",
            option: {
                showChatButton: {
                    label: "Vis chatknap",
                    description: "Om chatknappen skal vises eller ej"
                },
                showMuteButton: {
                    label: "Vis Mute-knap",
                    description: "Om mute-knappen skal vises"
                },
                showDeafenButton: {
                    label: "Vis Døve-knap",
                    description: "Om man skal vise døveknappen"
                },
                muteSoundboard: {
                    label: "Soundboard'u Sessize Al",
                    description: "Når der trykkes på den øredøvende knap, tænder og slukker den brugerens klangbund."
                },
                disableVideo: {
                    label: "Deaktiver video",
                    description: "Når der trykkes på den øredøvende knap, tænder og slukker den brugerens video."
                },
                useServer: {
                    label: "Brug server",
                    description: "Bruger server muting/døvende i stedet for lokal, hvis du har tilladelse."
                },
                serverSelf: {
                    label: "Slå lyden fra på serveren",
                    description: "Mute/deafener dæmper eller overdøver dig selv på serveren, når den bruges."
                },
                showButtonsSelf: {
                    label: "Vis knapper for dig selv",
                    description: "Om du vil vise knapper for din egen bruger. Den har samme funktion; DM panelet åbner og dæmper/døver dig selv.",
                    display: "Vise",
                    hide: "skjule",
                    disable: "Handicappet"
                },
                whichNameToShow: {
                    label: "Hvilket navn skal vises?",
                    description: "Vis brugernavn, globalt navn eller begge dele i værktøjstip?",
                    global: "Globalt navn",
                    username: "Brugernavn",
                    both: "Begge"
                },
                buttonPosition: {
                    label: "Knap placering",
                    description: "Vælg, hvor knapperne skal vises.",
                    left: "Sol",
                    right: "Højre",
                }
            },
            tooltip: {
                navigate: "Gå til DM'er",
                open: "Åbn DM med {{brugernavn}}",
                yourself: "dig selv",
                serverMute: "Slå lyden fra på serveren",
                serverDeafen: "Døv på server",
                mute: "Stum",
                deafen: "døve",
                unmute: "Slå lyden til",
                undeafen: "Fjern fra øredøvende",
                serverUnmute: "Slå lyden til på serveren",
                serverUndeafen: "Fjern øredøvende på serveren"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannel Log",
            description: "Optager, hvem der tilslutter sig og forlader lydkanaler",
            context: {
                view: "Se kanallogfiler"
            },
            modal: {
                joined: "Tilmeldte sig <#{{channel}}> kanal",
                left: "Venstre kanal <#{{channel}}>",
                movedTo: "Flyttet til <#{{channel}}> kanal",
                movedFrom: "Flyttet fra <#{{channel}}>",
                noLogs: "Der er ingen logfiler at vise.",
                logs: "{{channel}} logfiler"
            },
            option: {
                mode: {
                    label: "Mod",
                    description: "Sådan viser du lydkanallog",
                    menu: "Log menu",
                    associated: "Log direkte på den relevante chatkanal",
                    both: "Log ind på både chatkanalen og log-menuen"
                },
                voiceChannelChatSelf: {
                    label: "Talekanalchat (dig selv)",
                    description: "Log din egen stemmekanalaktivitet i talekanaler"
                },
                voiceChannelChatSilent: {
                    label: "Silent Voice Channel Chat",
                    description: "Deltag/efterlad/flyt beskeder er slået fra i talekanalchat"
                },
                voiceChannelChatSilentSelf: {
                    label: "Silent Voice Channel Chat (dig selv)",
                    description: "Hvis du er på en stemmekanal, vil meddelelser til at deltage/efterlade/flytte være tavse"
                },
                ignoreBlockedUsers: {
                    label: "Ignorer blokerede brugere",
                    description: "Logning af brugere, du har blokeret"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Dette plugin giver dig mulighed for at udføre flere handlinger (flytte, mute, afbryde, osv.) på en hel kanal (oprindeligt ved dutake)",
            option: {
                waitAfter: {
                    label: "Vent efter handling",
                    description: "Antal API-transaktioner, der skal foretages før ventetid (for at undgå hastighedsgrænse)"
                },
                waitSeconds: {
                    label: "Ventetid",
                    description: "Tid til at vente mellem hver operation (i sekunder)"
                }
            },
            context: {
                voiceTools: "Lydværktøjer",
                mentionAll: "Tag alle brugere",
                disconnectAll: "Afbryd forbindelsen til alle",
                muteAll: "Slå lyden fra for alle",
                unmuteAll: "Slå lyden til for alle",
                deafenAll: "Døve Alle",
                undeafenAll: "Kom ud uden at overdøve alle",
                moveAll: "Flyt alle"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Tilføjer downloadmulighed til talebeskeder. (Åbner en ny browserfane)",
            context: {
                download: "Hent voicemail"
            }
        },
        voiceMessages: {
            name: "Stemmemeddelelser",
            description: "Det giver dig mulighed for at sende talebeskeder ligesom på mobil. For at gøre dette skal du højreklikke på upload-knappen og vælge 'Send talebesked'.",
            option: {
                noiseSuppression: {
                    label: "Støjreduktion",
                    description: "Støjreduktion"
                },
                echoCancellation: {
                    label: "Ekkoannullering",
                    description: "Ekkoannullering"
                }
            },
            notification: {
                failed: {
                    upload: "Voicemail kunne ikke indlæses.",
                    start: "Kunne ikke starte optagelsen.",
                    finish: "Registreringen kunne ikke gennemføres."
                }
            },
            context: {
                sendVoiceMessage: "Send talebesked",
                missingPermissions: "(Mangler tilladelse)"
            },
            modal: {
                record: "Optag talebesked",
                upload: "Upload fil",
                preview: "Forhåndsvisning",
                failed: "Den valgte lydfil kunne ikke parses:",
                oggOpus: "Talebeskeder skal være i OggOpus-format for at blive afspillet på iOS. Denne fil kan ikke afspilles på iOS, fordi den er i formatet {{type}}.",
                fix: "For at løse dette skal du først konvertere filen til OggOpus-format. Du kan f.eks. bruge {{link}}.",
                sending: "Sender voicemail... Vent venligst.",
                stop: "stoppe optagelsen",
                start: "begynde at optage",
                resume: "Genoptag registrering",
                pause: "Sæt optagelsen på pause",
                recording: "TILMELDING ER I GANG",
                send: "Sende"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Giver dig mulighed for at øge bruger- og udsendelsesvolumen over standardmaksimum",
            option: {
                multiplier: {
                    label: "Multiplikator",
                    description: "Lydmultiplikator"
                }
            }
        },
        wallpaperFree: {
            name: "Gratis tapet",
            description: "En genindspilning af det gamle DM tapeteksperiment; Indstil baggrundsbillede for enhver kanal, bruger eller server.",
            option: {
                globalDefault: {
                    label: "Generel standard",
                    description: "Indstil et globalt standardbaggrund for alle kanaler."
                },
                stylingTips: {
                    label: "Stil tips"
                }
            },
            context: {
                setWallpaper: "Indstil tapet",
                removeWallpaper: "Fjern tapet"
            },
            modal: {
                set: "sæt tapet",
                image: "Billed-URL",
                cancel: "Ophæve",
                apply: "Anvende",
                global: {
                    set: "Indstil et offentligt tapet",
                    remove: "Fjern globalt standardbaggrund",
                    reset: "Nulstil tapetdata"
                },
                web: {
                    info: "Du kan bruge lokale filer ved at placere dem i plexcord-temabiblioteket og bruge url'en plexcord:///themes/filename.ext.",
                    open: "Åbn temakatalog",
                    quickCSS: "Åbn QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Tilføjer tilbage kontekstmenuer, der mangler fra webversionen af ​​Discord: Links og billeder (Kopiér eller Åbn Link/Billede), Tekstområde (Kopier, Klip, Indsæt, Stavekontrol)",
            option: {
                addBack: {
                    label: "Tilføj tilbage",
                    description: "Tilføj tilbage Discord-kontekstmenuer til billeder, links og chatindtastningslinje"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Det tilføjer de genvejstaster, der mangler i webversionen af ​​Discord: ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+1-9, ctrl+,. Det virker bogstaveligt talt kun på Plextron/Legcord, ikke i browseren."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Fjerner skærmdelingsgrænsen på 2500 kbps på Chromium- og Plextron-klienter.",
            option: {
                experimentalAV1Support: {
                    label: "Eksperimentel AV1-understøttelse",
                    description: "Aktiverer AV1-codec-understøttelse. Uendelige indlæsningsstrømme kan forårsage problemer som f.eks"
                }
            }
        },
        whoReacted: {
            name: "Hvem reagerede",
            description: "Viser avatarer af brugere, der reagerer på en besked",
            option: {
                avatarClick: {
                    label: "Avatar klik",
                    description: "Skift klikbarhed for avatarer i reaktioner"
                }
            }
        },
        whosWatching: {
            name: "Hvem ser på",
            description: "Se brugere, der ser din udsendelse, ved at holde markøren over skærmdelingsikonet",
            modal: {
                noSpectator: "intet publikum"
            },
            option: {
                showPanel: {
                    label: "Vis panel",
                    description: "Vis seere under skærmdelingspanelet"
                }
            }
        },
        writeUpperCase: {
            name: "SkrivStore bogstaver",
            description: "Konverterer det første bogstav i hver sætning til stort bogstav i meddelelsesindtastninger.",
            option: {
                blockedWords: {
                    label: "Blokerede ord",
                    description: "Udtryk, der ikke skal skrives med stort (adskil med kommaer)"
                }
            }
        },
        xSOverlay: {
            name: "XSOoverlay",
            description: "Sender Discord-meddelelser til XSOverlay for nem visning i VR",
            notification: {
                call: {
                    title: "{{user}} leder efter dig.",
                    content: "indgående opkald"
                },
                message: {
                    reply: "(svar)",
                    embed: "[indlejring]",
                    onlyEmbed: "indlejret(e) meddelelser",
                    sticker: "[klistermærke]",
                    onlySticker: "sendt et klistermærke",
                    image: "billede",
                    attachment: "jeg"
                },
                test: {
                    title: "Plexcord'og dyk!",
                    content: "Dette er en testmeddelelse! eksplodere",
                    button: "Send testbesked"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket port",
                    description: "WebSocket port"
                },
                preferUDP: {
                    label: "UDP Tercih Et",
                    description: "Hvis du bruger ældre versioner af XSOverlay og ikke kan oprette forbindelse via WebSocket, skal du aktivere det. Denne indstilling ignoreres på nettet."
                },
                botNotifications: {
                    label: "Bot-meddelelser",
                    description: "Tillad bot-notifikationer"
                },
                serverNotifications: {
                    label: "Servermeddelelser",
                    description: "Tillad servermeddelelser"
                },
                dmNotifications: {
                    label: "DM-meddelelser",
                    description: "Tillad underretninger om private beskeder"
                },
                groupDmNotifications: {
                    label: "Gruppe DM-meddelelser",
                    description: "Tillad gruppe-DM-notifikationer"
                },
                callNotifications: {
                    label: "Opkaldsmeddelelser",
                    description: "Tillad opkaldsnotifikationer"
                },
                pingColor: {
                    label: "Ping Rengi",
                    description: "Bruger tagging farve"
                },
                channelPingColor: {
                    label: "Farve Ping-kanal",
                    description: "Kanalmærkningsfarve"
                },
                soundPath: {
                    label: "Lydstien",
                    description: "Underretningslyd (standard/advarsel/fejl)"
                },
                timeout: {
                    label: "Timeout",
                    description: "Underretningsvarighed (sekunder)"
                },
                lengthBasedTimeout: {
                    label: "Meddelelseslængde baseret varighed",
                    description: "Forlæng varigheden i henhold til beskedens længde"
                },
                opacity: {
                    label: "Opacitet",
                    description: "Notifikationsgennemsigtighed"
                },
                volume: {
                    label: "Ses",
                    description: "lydniveau"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTube Adblock",
            description: "Blokerer annoncer på YouTube-indlejringer og WatchTogether-aktivitet med AdGuard"
        },
        youtubeDescription: {
            name: "YouTube-beskrivelse",
            description: "Tilføjer beskrivelser til YouTube-videoindlejringer"
        }
    }
} as const;

export default translations;
