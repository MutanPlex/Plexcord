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
        title: "Inställningar",
        language: {
            selector: {
                label: "Språk",
                description: "Välj önskat språk för Plexcord.",
                placeholder: "Välj Språk"
            }
        },
        location: {
            label: "Inställningar Plats",
            description: "Var du ska placera avsnittet om Plexcord-inställningar",
            top: "Allra högst upp",
            nitro: {
                above: "Ovanför Nitro-sektionen",
                below: "Nedanför avsnittet Nitro"
            },
            activity: {
                above: "Ovan Aktivitetsinställningar",
                below: "Nedan Aktivitetsinställningar"
            },
            bottom: "Allra längst ner"
        },
        switches: {
            useQuickCss: {
                label: "Aktivera anpassad CSS",
                description: "Ladda anpassad CSS från QuickCSS-redigeraren. Detta gör att du kan anpassa Discords utseende med dina egna stilar."
            },
            enableReactDevtools: {
                label: "Aktivera React Developer Tools",
                description: "Aktivera tillägget React Developer Tools för att felsöka Discords React-komponenter. Användbar för pluginutveckling."
            },
            mainWindowFrameless: {
                label: "Inaktivera huvudfönsterramen",
                description: "Ta bort den inbyggda fönsterramen för ett renare utseende. Du kan fortfarande flytta fönstret genom att dra i namnlistens område."
            },
            frameless: {
                label: "Inaktivera fönsterramen",
                description: "Ta bort den inbyggda fönsterramen för ett renare utseende. Du kan fortfarande flytta fönstret genom att dra i namnlistens område."
            },
            winNativeTitleBar: {
                label: "Använd Windows inbyggda namnlist istället för Discords anpassade",
                description: "Ersätt Discords anpassade namnlist med standardnamnlisten i Windows. Detta kan förbättra kompatibiliteten med vissa fönsterhanteringsverktyg."
            },
            transparent: {
                label: "Aktivera fönstertransparens",
                description: "Gör Discord-fönstret genomskinligt. Ett tema som stöder transparens krävs annars gör det ingenting.",
                isWindows: "Detta hindrar fönstret från att ändra storlek och förhindrar att du fäster fönstret mot skärmkanterna.",
                notWindows: "Detta kommer att stoppa fönstret från att ändra storlek."
            },
            winCtrlQ: {
                label: "Registrera Ctrl+Q som genväg för att stänga Discord (alternativ till Alt+F4)",
                description: "Lägg till Ctrl+Q som kortkommando för att stänga Discord. Detta ger ett alternativ till Alt+F4 för att snabbt stänga programmet."
            },
            disableMinSize: {
                label: "Inaktivera minsta fönsterstorlek",
                description: "Tillåt att storleken på Discord-fönstret ändras mindre än dess standardminimistorlek. Användbar för kakelsättning av fönsterhanterare eller små skärmar."
            }
        },
        quickActions: {
            title: "Snabba åtgärder",
            description: "Vanliga åtgärder du kanske vill utföra. Dessa genvägar ger dig snabb åtkomst till ofta använda funktioner utan att behöva navigera genom menyer.",
            notificationLog: "Aviseringslogg",
            editQuickCSS: "Redigera QuickCSS",
            relaunchDiscord: "Starta om Discord",
            openSettingsFolder: "Öppna mappen Inställningar",
            viewSourceCode: "Se källkoden"
        },
        specialCards: {
            donations: {
                title: "Donationer",
                subtitle: "Tack för att du donerar!",
                description: "Du kan hantera dina förmåner när som helst genom att skicka ett meddelande till @mutanplex.",
                button: "Donera",
                invite: "Gå med i vår Discord",
                invalid: "Ogiltig eller utgången inbjudningslänk."
            },
            supportProject: {
                title: "Stöd projektet",
                description: "Överväg att stödja utvecklingen av Plexcord genom att donera!"
            },
            contributions: {
                title: "Bidrag",
                subtitle: "Tack för att du bidrar!",
                description: "Eftersom du har bidragit till Plexcord har du nu ett coolt nytt märke!",
                buttonTitle: "Se vad du har bidragit till"
            }
        },
        settingsSection: {
            title: "Inställningar",
            description: "Konfigurera hur Plexcord beter sig och integreras med Discord. Dessa inställningar påverkar Discord-klientens utseende och beteende.",
            hintParts: {
                prefix: "Du kan anpassa var denna inställningssektion visas i Discords inställningsmeny genom att konfigurera {{pluginLink}}",
                linkText: "Plugin för inställningar"
            }
        },
        notifications: {
            title: "Aviseringar",
            description: "Konfigurera hur Plexcord hanterar aviseringar. Du kan anpassa när och hur du får varningar eller se en historik över tidigare aviseringar.",
            settings: "Aviseringsinställningar",
            viewLog: "Visa meddelandelogg",
            permissions: {
                denied: {
                    title: "Skrivbordsaviseringsbehörighet nekad",
                    label: "Du har nekat aviseringsbehörigheter. Skrivbordsmeddelanden fungerar inte!"
                }
            },
            style: {
                label: "Aviseringsstil",
                description: "Vissa plugins kan visa aviseringar till dig. Dessa finns i två stilar:",
                plexcord: "Plexcord-meddelanden",
                plexcordDesc: "Dessa är aviseringar i appen",
                desktop: "Skrivbordsmeddelanden",
                desktopDesc: "Native Desktop-aviseringar (som när du får en ping)",
                onlyWhenNotFocused: "Använd endast skrivbordsaviseringar när Discord inte är fokuserat",
                always: {
                    desktop: "Använd alltid skrivbordsaviseringar",
                    plexcord: "Använd alltid Plexcord-aviseringar"
                }
            },
            positions: {
                label: "Aviseringsposition",
                right: {
                    bottom: "Nederst till höger",
                    top: "Överst till höger",
                },
                left: {
                    bottom: "Längst ner till vänster",
                    top: "Överst till vänster",
                }
            },
            missed: {
                label: "Antal missade aviseringar",
                description: "När du fokuserar om Discord kommer ett meddelande att dyka upp med hur många du missat",
                whileYou: "Medan du var borta",
                count: "{{count}} avisering{{s}} mottagen",
                s: "s"
            },
            timeout: {
                label: "Tidsgräns för meddelande",
                description: "Mängden tid (i sekunder) som aviseringar stannar på skärmen innan de försvinner automatiskt"
            },
            logLimit: {
                label: "Aviseringslogggräns",
                description: "Det maximala antalet aviseringar att behålla i loggen innan gamla tas bort. Ställ in på {{disable}} för att inaktivera aviseringsloggen och {{unlimited}} för att aldrig automatiskt ta bort gamla aviseringar"
            },
            opacity: {
                label: "Opacitet för meddelanden",
                description: "Opaciteten för aviseringar i appen"
            },
            maxNotifications: {
                label: "Max aviseringar",
                description: "Maximalt antal aviseringar som visas på en gång"
            },
            behavior: {
                label: "Aviseringsbeteende",
            },
            disableInStreamerMode: {
                label: "Inaktivera i streamerläge",
                description: "Inaktivera aviseringar i streamerläge"
            },
            renderImages: {
                label: "Rendera bilder",
                description: "Återge bilder i aviseringar"
            },
            streamingTreatment: {
                label: "Streaming behandling",
                description: "Hur man hanterar aviseringar när du delar din skärm",
                normal: "Normal - Visa meddelandet som normalt",
                noContent: "Inget innehåll - Göm meddelandekroppen",
                ignore: "Ignorera - Visa inte aviseringen alls"
            },
        },
        macVibrancy: {
            title: "Window Vibrancy Style (kräver omstart)",
            description: "Anpassa macOS-fönstereffekten. Detta styr discord-fönstrets oskärpa och transparensstil. Ändringar kräver en omstart för att träda i kraft.",
            placeholder: "Fönster vibrerande stil",
            style: {
                no: "Ingen Vibrans",
                underPage: "Under sida (Fönsterfärgning)",
                content: "Innehåll",
                window: "Fönster",
                selection: "Urval",
                titlebar: "Titelfält",
                header: "Rubrik",
                sidebar: "Sidofält",
                tooltip: "Verktygstips",
                menu: "Meny",
                popover: "Popover",
                fullscreenUI: "Helskärmsgränssnitt (Transparent men något suddigt)",
                hud: "HUD (mest transparent)"
            }
        }
    },

    plugins: {
        title: "Plugins",
        new: "NY",
        unknown: "Okänd",
        noDescription: "Ingen beskrivning tillgänglig.",
        restart: {
            apply: "Börja om för att tillämpa ändringar!",
            required: "Omstart krävs!",
            description: "Starta om nu för att tillämpa nya plugins och deras inställningar",
            following: "Följande plugins kräver omstart:",
            remainingCount: "och {{count}} till",
            fully: "Vissa plugins kräver en omstart för att helt inaktivera",
            would: "Vill du starta om nu?",
            resetDefault: "Återställ till standardinställningar",
            failed: "Det gick inte att starta beroenden:",
            button: {
                restart: "Starta om",
                later: "Senare!",
                now: "Starta om nu",
                cancel: "Avboka",
                disableWarning: "Inaktivera varning för alltid",
                disableAll: "Inaktivera alla",
                reset: "Återställa",
                close: "Nära"
            }
        },
        contributor: {
            contributed: "bidragit",
            modal: {
                contributionsInfo: "{{userName}} har {{continuedLink}} till {{contributionCount}} plugin{{s}}.",
                noContributions: "{{userName}} har inte gjort några plugins. De {{contributedLink}} förmodligen på andra sätt!"
            }
        },
        infoModal: {
            description: "Tryck på kugghjulet eller infoikonen för att få mer information om ett plugin",
            settingsInfo: "Plugins med kugghjul har inställningar som du kan ändra!",
            disableAll: "Inaktivera alla plugins"
        },
        error: {
            invalidInput: "Ogiltig inmatning har angetts",
            stopping: "Fel när plugin {{plugin}} stoppades",
            starting: "Fel vid start av plugin {{plugin}}",
            startDependency: "Fel vid start av beroenden: {{failures}}",
            infoRender: "Ett fel uppstod vid rendering av denna plugins anpassade infokomponent"
        },
        placeholder: {
            number: "Ange ett nummer",
            select: "Välj ett alternativ",
            text: "Ange ett värde"
        },
        excluded: {
            desktop: "Discord Desktop-app eller Plextron",
            discordDesktop: "Discord Desktop-appen",
            plextron: "Plextron app",
            web: "Plextron-appen och webbversionen av Discord",
            dev: "Utvecklarversion av Plexcord"
        },
        search: {
            looking: "Letar du efter",
            onlyAvailable: "Endast tillgänglig på",
            noCriteria: "Inga plugins uppfyller sökkriterierna."
        },
        required: {
            title: "Nödvändiga plugins",
            this: "Denna plugin krävs för att Plexcord ska fungera.",
            by: "Denna plugin krävs av:"
        },
        dangerModal: {
            title: "FARLIG HANDLING",
            disablePlugins: "Inaktivera plugins",
            disableText: "Inaktivera alla",
            irreversible: "DENNA HANDLING ÄR OÅTERSTÄLLBAR!",
            enableBack: "Är du helt säker på att du vill fortsätta? Du kan alltid aktivera dem igen senare.",
            undone: "Denna åtgärd kan inte ångras. Är du säker?",
            resetDescription: "Du är på väg att återställa alla inställningar för {{pluginName}} till deras standardvärden.",
            disable: "Du är på väg att inaktivera {{enabledPlugins}} plugins!",
            confirmReset: "Bekräfta återställning",
            cancel: "Avboka",
            resetSettings: "Återställ inställningar",
            resetText: "Återställa"
        },
        filters: {
            label: "Filter",
            placeholder: "Sök efter ett plugin...",
            option: {
                all: "Visa alla",
                enabled: "Visa aktiverat",
                disabled: "Visa inaktiverad",
                new: "Visa ny",
                userplugins: "Visa användarinsticksprogram",
                api: "Visa API-plugins",
                type: "Filtrera efter typ",
                tags: "Filtrera efter taggar"
            }
        },
        pluginModal: {
            noSettings: "Det finns inga inställningar för detta plugin.",
            authors: "Författare",
            settings: "Inställningar",
            successfulReset: "Inställningarna för {{plugin}} har återställts.",
            enabledStock: "Aktiverade aktieplugins",
            totalStock: "Totala lager plugins",
            enabledUser: "Aktiverade användarinsticksprogram",
            totalUser: "Totalt antal användarinsticksprogram",
            info: "Se mer info",
            source: "Se källkoden"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API för att lägga till dekoratörer till medlemslistan (både i servrar och DM)",
                    messageAccessories: "API för att lägga till tillbehör till meddelanden",
                    messageDecorations: "API för att lägga till dekorationer i meddelanden",
                    chatInputButtons: "API för att lägga till knappar till chattinmatningen",
                    commands: "API krävs av allt som använder kommandon",
                    contextMenu: "API för att lägga till/ta bort objekt till/från snabbmenyer.",
                    dynamicImageModal: "Låter dig utelämna antingen bredd eller höjd när du öppnar en bildmodal",
                    menuItemDemangler: "Demonterar Discords menyobjektmodul",
                    messageEvents: "API krävs av allt som använder meddelandehändelser",
                    messagePopover: "API för att lägga till knappar till popover-meddelanden",
                    messageUpdater: "API för uppdatering och återrendering av meddelanden",
                    nicknameIcons: "API för att lägga till ikoner till smeknamnet, i profiler",
                    notices: "Åtgärdar meddelanden som automatiskt avvisas",
                    serverList: "API krävs för plugins som ändrar serverlistan",
                    userSettings: "Patchar Discords användarinställningar för att exponera deras grupp och namn.",
                    audioPlayer: "API för att spela interna Discord-ljudfiler eller externa ljudlänkar.",
                    userArea: "API för att lägga till knappar i användarområdespanelen.",
                    profileCollections: "API för att lägga till samlingar i användarens profilpanel, likt Discords spelsamling."
                },
                chatButtons: {
                    context: {
                        buttons: "Knappar"
                    }
                }
            },
            badges: {
                description: "API för att lägga till märken till användare",
                contributor: {
                    plexcord: "Plexcord-bidragsgivare",
                    vencord: "Vencord-bidragsgivare",
                    userPlugin: "User Plugin Contributor"
                },
                context: {
                    title: "Alternativ för märken",
                    copy: {
                        name: "Copy Badge Name",
                        link: "Kopiera märkesbildlänk"
                    },
                    refetch: {
                        button: "Återhämta märken",
                        success: "Märken har återhämtats!"
                    }
                },
                modal: {
                    title: "Plexcord donator",
                    special: "Detta märke är en speciell förmån för Plexcord-givare",
                    description: "Överväg att stödja utvecklingen av Plexcord genom att bli donator. Det skulle betyda mycket!"
                }
            },
        },
        uiElements: {
            manage: "Hantera UI-element",
            allows: "Låter dig dölja knappar du inte gillar",
            section: {
                chatbar: {
                    title: "Chatbar-knappar",
                    description: "Det här är knapparna på höger sida av chattfältet"
                },
                messagePopover: {
                    title: "Meddelande Popover-knappar",
                    description: "Dessa är de flytande knapparna till höger när du håller muspekaren över ett meddelande"
                }
            },
            button: "Knappar för aktiverade plugins kommer att visas här."
        }
    },

    patchHelper: {
        title: "Patch Helper",
        description: "Ett utvecklarverktyg som hjälper dig att skapa patchar för Plexcord-plugins.",
        fullPatch: {
            label: "Full patch",
            description: "Klistra in din fullständiga JSON-patch här för att fylla i fälten"
        },
        find: "Hitta",
        match: "Match",
        replacement: "Ersättning",
        preview: "Förhandsvisning",
        generatedCode: "Genererad kod",
        group: "Grupp",
        diff: "Diff",
        module: "Modul",
        compile: "Sammanställa",
        compiled: "Sammanställningen lyckades",
        copy: {
            clipboard: "Kopiera till Urklipp",
            codeblock: "Kopiera som kodblock"
        },
        error: {
            noMatch: "Ingen matchning hittades. Den här modulen kan vara lata laddad?",
            multipleMatch: "Flera matchningar hittades. Använd ett mer specifikt sökmönster.",
            noFind: "\"Sök\"-fältet saknas.",
            noReplacement: "Fältet \"Ersättning\" saknas.",
            invalidReplacement: "Fältet \"Ersättning\" är ogiltigt",
            replacementMatch: "'replacement.match'-fältet saknas",
            replacementReplace: "'replacement.replace'-fältet saknas",
            replacementMustFunction: "'Ersättning' måste vara en funktion"
        },
        cheatSheet: {
            title: "Fuskblad",
            identifiers: "Särskild regex escape-sekvens som matchar identifierare (varnames, klassnamn, etc.)",
            dollar: "Sätt in en $",
            entireMatch: "Sätt in hela tändstickan",
            beforeMatch: "Sätt in delsträngen innan matchen",
            afterMatch: "Sätt in delsträngen efter matchen",
            nthGroup: "Infoga den n:e fångstgruppen ($1, $2...)",
            pluginInstance: "Sätt in plugin-instansen"
        },
        replacementEval: {
            label: "Behandla ersättning som funktion",
            description: "'Ersättning' kommer att utvärderas som en funktion om detta är aktiverat"
        }
    },

    sync: {
        title: "Säkerhetskopiera och återställa",
        warning: "Varning",
        warningText: "Om du importerar en inställningsfil kommer dina nuvarande inställningar att skrivas över. Make sure to export a backup first if you want to keep your current configuration.",
        description: "Du kan importera och exportera dina Plexcord-inställningar som en JSON-fil. Detta gör att du enkelt kan överföra dina inställningar till en annan enhet, eller återställa dina inställningar efter att du har installerat om Plexcord eller Discord.",
        successful: "Inställningarna har importerats. Börja om för att tillämpa ändringar!",
        error: {
            failure: "Det gick inte att importera inställningar: {{error}}",
            failedExport: "Det gick inte att exportera inställningar, kontrollera konsolen",
            invalid: "Ogiltiga inställningar. Är det här ens en Plexcord Settings-fil?",
            tooLarge: "DataStore för stort - utesluten från säkerhetskopiering. Använd \"Exportera databutiker\" om det behövs.",
            clearSomeDate: "DataStore för stort. Rensa några plugin-data och försök igen."
        },
        settings: {
            text: "Vad ingår i en säkerhetskopia?",
            quickcss: "Anpassad QuickCSS",
            theme: "Temalänkar",
            plugins: "Plugin-inställningar",
            datastores: "Plugin DataStores (t.ex. Tidszoner eller IRememberYou)"
        },
        import: {
            title: "Importera inställningar",
            description: "Välj en tidigare exporterad inställningsfil för att återställa din konfiguration. Detta kommer att ersätta alla dina nuvarande inställningar med de från säkerhetskopian.",
            all: "Importera alla inställningar",
            plugins: "Importera plugin",
            css: "Importera QuickCSS",
            datastore: "Importera databutiker"
        },
        export: {
            title: "Exportinställningar",
            description: "Du kan exportera dina nuvarande Plexcord-inställningar till en fil för säkerhetskopiering eller överföring till en annan enhet.",
            all: "Exportera alla inställningar",
            plugins: "Exportera plugin",
            css: "Exportera QuickCSS",
            datastore: "Exportera databutiker"
        }
    },

    cloud: {
        text: "Moln",
        title: "Inställningar Synk",
        override: "Cloud Sync",
        description: "Synkronisera dina Plexcord-inställningar till molnet. Detta gör det enkelt att hålla din konfiguration konsekvent över flera enheter utan manuell import/export.",
        switchDescription: "När det är aktiverat kan dina inställningar synkroniseras till och från molnet. Använd åtgärderna nedan för att synkronisera manuellt.",
        settings: "Molninställningar",
        successful: "Synkroniserade inställningar till molnet!",
        updated: "Dina inställningar har uppdaterats! Klicka här för att starta om för att tillämpa ändringarna helt!",
        deleted: "Inställningar raderade från molnet!",
        integration: {
            title: "Molnintegration",
            description: "Plexcords molnintegration låter dig synkronisera dina inställningar över flera enheter och Discord-installationer. Dina data lagras säkert och kan enkelt återställas när som helst.",
        },
        reauth: "Vi har märkt att du har molnintegrationer aktiverade i en annan klient! På grund av begränsningar måste du återauktorisera för att fortsätta använda dem. Klicka här för att gå till inställningssidan för att göra det!",
        error: {
            setup: "Konfigurationen misslyckades (det gick inte att hämta OAuth-konfigurationen).",
            secret: "Installationen misslyckades (ingen hemlighet returnerades).",
            string: "Konfigurationen misslyckades ({{error}}).",
            connect: "Molnsynkronisering inaktiverades eftersom det här kontot inte är anslutet till Plexcord Cloud-appen. Du kan aktivera det igen genom att ansluta det här kontot i molninställningarna. (obs: det kommer att lagra dina inställningar separat)",
            noSettings: "Det finns inga inställningar i molnet.",
            uptodate: "Dina inställningar är uppdaterade.",
            localNewer: "Dina lokala inställningar är nyare än molnet.",
            delete: "Kunde inte radera inställningar ({{error}}).",
            api: {
                returned: {
                    delete: "Kunde inte ta bort inställningar (API returnerade {{status}}).",
                    to: "Kunde inte synkronisera inställningar till molnet (API returnerade {{status}}).",
                    from: "Kunde inte synkronisera inställningar från molnet (API returnerade {{status}}).",
                    manifest: "Kunde inte hämta manifest för borttagning (API returnerade {{status}})."
                }
            },
            synchronize: {
                to: "Det gick inte att synkronisera inställningarna till molnet ({{error}}).",
                from: "Kunde inte synkronisera inställningar från molnet ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Aktivera molnintegrering ovan för att använda funktioner för synkronisering av inställningar."
        },
        danger: {
            title: "Riskzon",
            description: "Ta bort all din data permanent från molnet. Den här åtgärden kan inte ångras och kommer att ta bort alla synkroniserade inställningar och all annan data lagrad på molnets backend.",
            delete: {
                account: {
                    title: "Ta bort molnkonto",
                    description: "Är du säker på att du permanent vill ta bort ditt molnkonto och all tillhörande data? Denna åtgärd kan inte ångras.",
                    confirm: "Ta bort konto",
                    cancel: "Avboka"
                }
            }
        },
        notification: {
            title: "Molnintegration",
            enabled: "Molnintegration aktiverad",
            host: "{{host}} har lagts till i vitlistan. Starta om appen för att ändringarna ska träda i kraft.",
            erase: {
                successful: "Molndata har raderats",
                failed: "Det gick inte att radera all data (API {{status}} returnerades), kontakta supporten."
            }
        },
        button: {
            to: "Synkronisera till molnet",
            from: "Synkronisera från molnet",
            fromDescription: "Detta kommer att skriva över dina lokala inställningar med de i molnet. Använd klokt!",
            delete: "Ta bort molndata",
            enable: "Aktivera molnintegrationer",
            reauthorize: "Auktorisera på nytt",
            confirm: "Starta om nu",
            later: "Senare!"
        },
        privacy: "respekterar din integritet",
        source: "källkod",
        overview: "Plexcord kommer med en molnintegration som lägger till godsaker som synkronisering av inställningar mellan enheter. Den {{privacy}} och {{source}} är AGPL 3.0 licensierad så att du kan vara värd för den själv.",
        authorization: "Anslut till molnets backend för synkronisering av inställningar. Detta kommer att begära auktorisering om du inte har konfigurerat molnintegration ännu.",
        backend: {
            title: "Cloud Backend",
            description: "Välj hur dina inställningar lagras i molnet. Som standard används Plexcord Cloud, men du kan även ansluta din egen självvärdade molntjänst.",
            invalid: "Ogiltig URL"
        },
        sync: {
            title: "Synkroniseringsregler för den här enheten",
            description: "Den här inställningen styr hur inställningarna flyttas mellan den här enheten och molnet. Du kan låta förändringar flöda åt båda hållen, eller välja en plats som den huvudsakliga källan till sanning.",
            direction: {
                both: "Tvåvägssynkronisering (ändringar går åt båda hållen)",
                push: "Den här enheten är källan (endast uppladdning)",
                pull: "Molnet är källan (endast nedladdning)",
                manual: "Synkronisera inte automatiskt (endast manuell synkronisering via knapparna nedan)"
            }
        }
    },

    changelog: {
        text: "Ändra logg",
        title: "Ändra logg",
        description: "Du kan hitta de senaste ändringarna och uppdateringarna av Plexcord här.",
        by: "av",
        check: "Förvarskontroll",
        uptodate: "uppdaterad",
        update: "Uppdatera",
        noMessage: "Inget meddelande",
        unknown: "Okänd",
        updatedPlugins: "Uppdaterade plugins",
        newSettings: "Nya inställningar",
        newSettingTooltip: "Ny inställning i {{plugin}}",
        loading: "Belastning...",
        repoUptodate: "Förvaret uppdaterat",
        fetch: "Hämta från arkivet",
        clear: "Rensa alla loggar",
        internet: "Se till att du har en internetanslutning och försök igen.",
        recent: "Senaste ändringar",
        codeChanges: "Kodändringar {{count}} new commit{{s}}",
        updateLogs: "Uppdatera loggar ({{count}})",
        noCommit: "Inga bindningar tillgängliga före din nuvarande version. Klicka på \"Hämta från arkivet\" för att leta efter nya ändringar.",
        previous: "Tidigare uppdateringssessioner med deras commit-historik och plugin-ändringar.",
        modal: {
            description: "Se de senaste ändringarna av Plexcord. Detta hämtar commits direkt från arkivet för att visa dig vad som är nytt.",
            repository: "Förvar",
            failed: "Det gick inte att hämta - kontrollera konsolen",
            current: "Nuvarande:",
            hide: "Göm loggar",
            show: "Visa loggar",
            fetch: {
                title: "Hämta ändringar",
                description: "Kontrollera arkivet för nya bekräftelser, plugin-uppdateringar och kodändringar. Detta kommer att jämföra din nuvarande version med den senaste tillgängliga och visa dig vad som är nytt.",
                newCommit: "Det här är de nya commits och plugin-uppdateringarna sedan din senaste version. Du kan se vilka funktioner som lades till, buggar fixades och vilka plugins som fick uppdateringar.",
                confirm: "Hämta",
            }
        },
        commit: {
            available: "åtaganden tillgängliga",
            no: "Inga nya commits",
            new: "nya plugins",
            updated: "uppdaterade plugins",
            settings: "nya inställningar"
        },
        toast: {
            already: "Redan uppdaterad med repository",
            found: "Hittade {{count}} ny commit{{s}} från arkivet",
            local: "Lagret är uppdaterat med din lokala kopia",
            failed: "Det gick inte att hämta från arkivet :(",
            cleared: "Alla loggar har rensats",
            logCleared: "Loggen har rensats",
            yourLatest: "Loggade åtaganden från din senaste uppdatering"
        },
        alert: {
            clear: {
                title: "Rensa alla loggar",
                body: "Är du säker på att du vill rensa alla loggar? Detta kan inte ångras.",
                confirm: "Rensa alla",
                confirmColor: "fara",
                cancel: "Avboka"
            },
            log: {
                title: "Rensa logg",
                body: "Är du säker på att du vill rensa den här loggen? Detta kan inte ångras.",
                confirm: "Rensa logg",
                confirmColor: "fara",
                cancel: "Avboka"
            }
        },
        newPlugins: "{{count}} Ny plugin{{s}}",
        following: "Följande plugins har lagts till i de senaste uppdateringarna:",
        more: "+{{count}} fler plugins"
    },

    csp: {
        restart: "En omstart krävs för att tillämpa denna ändring",
        blocked: {
            resources: "Blockerade resurser",
            disallowed: "Vissa bilder, stilar eller typsnitt blockerades eftersom de kommer från otillåtna domäner.",
            recommended: "Det rekommenderas starkt att flytta dem till GitHub eller Imgur. Men du kan också tillåta domäner om du litar på dem fullt ut.",
            afterAllow: "När du har tillåtit en domän måste du stänga helt (från fack/uppgiftshanteraren) och starta om {{platform}} för att tillämpa ändringen.",
            allow: "Tillåta",
            url: "Blockerade webbadresser"
        },
        imgur: {
            direct: "Imgur-länkar bör vara direktlänkar i form av {{etc}}",
            copy: "För att få en direktlänk, högerklicka på bilden och välj \"Kopiera bildadress\"."
        },
        wants: {
            caller: "{{callerName}} vill tillåta anslutningar till {{domain}}",
            detail: "Om du inte känner igen och helt litar på {{domain}}, bör du avbryta denna begäran!",
            restart: "Du måste stänga och starta om {{appName}} helt för att ändringarna ska träda i kraft.",
            type: {
                images: "Bilder",
                styles: "CSS och teman",
                fonts: "Teckensnitt"
            },
            content: "Följande typer av innehåll kommer att tillåtas att laddas från {{domain}}:",
            understand: "Jag litar fullt ut på {{domain}} och förstår riskerna med att tillåta anslutningar till den.",
            button: {
                cancel: "Avboka",
                allow: "Tillåta"
            },
            title: "Värdbehörigheter"
        }
    },

    themes: {
        title: "teman",
        management: "Temahantering",
        description: "Customise Discord's appearance with themes. Lägg till lokala .css-filer eller ladda teman direkt från webbadresser. Teman med en kugghjulsikon har anpassningsbara inställningar som du kan ändra.",
        local: "Lokala teman",
        new: "NY",
        pinned: "Fäst",
        stylus: "Pennförlängning",
        bd: "BetterDiscord-teman",
        github: "GitHub",
        download: "Letar du efter teman? Kolla in {{bd}} eller sök på {{github}}. När du laddar ner från BetterDiscord, klicka på \"Ladda ner\" och placera .theme.css-filen i din temamapp.",
        add: "Tillägga",
        reset: "Återställ inställningarna till standard",
        notCSS: "Inte en CSS-fil. Kom ihåg att använda rålänken!",
        okay: "Okej!",
        checking: "Kontroll...",
        valid: "Giltig!",
        upload: "Ladda upp tema",
        openFolder: "Öppna mappen Teman",
        loadMissing: "Ladda saknade teman",
        editQuickCSS: "Redigera QuickCSS",
        editClient: "Redigera klienttema",
        website: "Öppna webbplatsen",
        discord: "Discord-server",
        downloadTheme: "Ladda ner",
        refresh: "Uppdatera",
        delete: "Radera",
        activation: {
            title: "Temaaktivering",
            always: "Alltid på",
            lightOnly: "Endast ljust tema",
            darkOnly: "Endast mörkt tema"
        },
        actions: {
            pin: "Fäst",
            unpin: "Lossa",
            editSettings: "Redigera inställningar"
        },
        unknown: {
            title: "Okänd",
            author: "Okänd författare",
            theme: "Ett discord-tema"
        },
        required: "Följande plugins krävs, men är inte aktiverade:",
        homepage: "Hemsida",
        support: "Stöd",
        online: {
            title: "Onlineteman",
            description: "Ladda teman direkt från webbadresser istället för lokala filer. Onlineteman uppdateras automatiskt när källan ändras, så att du alltid har den senaste versionen utan manuella nedladdningar.",
            enable: "Aktivera onlineteman",
            enableDescription: "Växla inläsning av onlinetema. När det är inaktiverat kommer alla onlineteman att stängas av och du kommer inte att kunna lägga till nya.",
            placeholder: "https://exempel.se/tema.css"
        },
        quickActions: {
            title: "Snabba åtgärder",
            description: "Genvägar för att hantera dina teman. Öppna din teman-mapp för att lägga till nya teman, använd QuickCSS för snabba stiljusteringar eller ladda om teman efter att du har gjort ändringar."
        },
        error: {
            userscript: "Teman stöds inte på Userscript!",
            stylus: "Du kan istället installera teman med {{stylus}}!",
            expired: "Ogiltig eller utgången länk",
            text: "Fel:"
        },
        copy: {
            url: "Kopiera URL",
            copied: "Tema URL kopierad!",
            settings: "Kopiera temainställningar",
            copiedSettings: "Kopierade temainställningar till urklipp."
        },
        paste: {
            settings: "Klistra in temainställningar",
            empty: "Ditt urklipp är tomt.",
            invalid: "Ditt urklipp har inte giltiga inställningsdata.",
            pasted: "Klistrade in temainställningar från urklipp."
        },
        settings: {
            for: "Inställningar för {{themeName}}",
        },
        installed: {
            title: "Installerade teman",
            description: "Hantera dina teman här. Lokala teman laddas från din temamapp, onlineteman från webbadresser. Teman med en kugghjulsikon har anpassningsbara inställningar.",
            count: "{{count}} tema{{s}} installerat ({{localCount}} lokalt, {{onlineCount}} online) · {{enabledCount}} aktiverat",
            search: "Sök efter ett tema...",
            loading: "Laddar teman...",
            none: "Inga teman installerade ännu. Lägg till temafiler i din temamapp eller lägg till ett onlinetema ovan för att komma igång.",
            noCriteria: "Inga teman matchar dina sök- eller filterkriterier."
        },
        filter: {
            all: "Visa alla",
            online: "Onlineteman",
            local: "Lokala teman",
            enabled: "Aktiverad",
            disabled: "Inaktiverad"
        },
        notification: {
            refresh: {
                title: "Temat uppdaterat",
                error: "Det gick inte att uppdatera temat"
            },
            failed: {
                download: "Det gick inte att ladda ner temat"
            }
        }
    },

    updater: {
        title: "Uppdaterare",
        settings: "Uppdateringsinställningar",
        updates: "Uppdateringar",
        updated: "har uppdaterats!",
        restart: "Klicka här för att starta om",
        repaired: "Plexcord har reparerats!",
        ok: "OK",
        preferences: {
            title: "Uppdatera inställningar",
            description: "Kontrollera hur Plexcord håller sig uppdaterad. Du kan välja att uppdatera automatiskt i bakgrunden eller få ett meddelande när nya uppdateringar är tillgängliga.",
        },
        github: {
            local: "Din lokala kopia har nyare commits än fjärrarkivet. Detta händer vanligtvis när du har gjort lokala ändringar. Vänligen spara eller återställ dem innan du uppdaterar."
        },
        error: {
            check: "Det gick inte att kontrollera uppdateringar. Kontrollera konsolen för mer information",
            occurred: "Ett okänt fel uppstod",
            retrieve: "Det gick inte att hämta - kontrollera konsolen",
            title: "hoppsan!",
            tryAgain: "Ett okänt fel uppstod. Försök igen eller se konsolen för mer information.",
            command: "Kommandot {{path}} hittades inte. Installera det och försök igen.",
            code: "Kod {{code}}. Se konsolen för mer information.",
            running: "Ett fel uppstod när {{cmd}} kördes: {{error}}",
            failed: "Det misslyckades också :( Försök att uppdatera eller installera om med installationsprogrammet!"
        },
        available: "Det finns 1 uppdatering",
        updateAvailable: "En Plexcord-uppdatering är tillgänglig!",
        click: "Klicka här för att se uppdateringen",
        available_plural: "Det finns {{count}} uppdateringar",
        current: "Uppdaterad!",
        successful: {
            title: "Uppdatering lyckats!",
            body: "Uppdaterades framgångsrikt. Starta om nu för att tillämpa ändringarna?",
            button: {
                confirm: "Starta om",
                cancel: "Inte nu!",
                update: "Uppdatera nu",
                check: "Sök efter uppdateringar"
            },
            noFound: "Inga uppdateringar hittades"
        },
        automatically: {
            label: "Uppdatera automatiskt",
            description: "Uppdatera Plexcord automatiskt utan bekräftelse"
        },
        notify: {
            label: "Få ett meddelande när en automatisk uppdatering slutförs",
            description: "Visar ett meddelande när Plexcord uppdateras automatiskt"
        },
        repo: "Repo",
        repoDescription: "Detta är GitHub-förrådet där Plexcord hämtar uppdateringar från.",
        loading: "Belastning...",
    },

    components: {
        error: {
            title: "nej då!",
            render: "Ett fel uppstod när den här komponenten renderades. Mer information finns nedan och i din konsol."
        },
        componentFailed: {
            message: "Åh Åh! Det gick inte att rendera denna sida. Det finns dock en uppdatering tillgänglig som kan fixa det. Vill du uppdatera och starta om nu?"
        },
        quickCSS: {
            title: "QuickCSS Editor Öppna",
            message: "QuickCSS-redigeraren är fortfarande öppen i bakgrunden.",
            detail: "Vill du stänga Discord ändå? Detta kommer också att stänga QuickCSS-redigeraren.",
            cancel: "Avboka",
            close: "Stäng i alla fall"
        }
    },

    commands: {
        error: {
            execute: "Ett fel uppstod när kommandot '{{command}}' kördes"
        }
    },

    notifications: {
        dismiss: "Avvisa meddelande",
        noYet: "Inga aviseringar än",
        settings: "Aviseringsinställningar",
        log: {
            title: "Aviseringslogg",
            clear: "Rensa aviseringslogg",
            sure: "Är du säker?",
            permamently: "Detta kommer att permanent ta bort {{count}} notification{{s}}. Denna åtgärd kan inte ångras.",
            button: {
                confirm: "Gör det!",
                cancel: "Strunt i det"
            }
        }
    },

    memberlist: {
        error: {
            render: "Det gick inte att återge {{key}} Medlemslistadekoratör"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Det gick inte att återge {{key}} meddelandetillbehör"
            }
        },
        decoration: {
            error: {
                render: "Det gick inte att återge {{key}} meddelandedekoration"
            }
        }
    },

    utils: {
        toast: {
            copied: "Kopierat till urklipp!"
        }
    },

    common: {
        unit: {
            year: "år",
            years: "år",
            month: "månad",
            months: "månader",
            week: "vecka",
            weeks: "veckor",
            day: "dag",
            days: "dagar",
            hour: "timme",
            hours: "timmar",
            minute: "minut",
            minutes: "minuter",
            second: "andra",
            seconds: "sekunder",
            ago: "sedan",
            s: "s"
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Inaktivera Discords spårning (analytics/'vetenskap'), mätvärden och Sentry-kraschrapportering",
            option: {
                disableAnalytics: {
                    label: "Inaktivera Analytics",
                    description: "Inaktivera Discords spårning (analytics/'vetenskap'), mätvärden och Sentry-kraschrapportering"
                }
            }
        },
        settings: {
            name: "Settings",
            description: "Lägger till Inställningar UI och felsökningsinformation",
            option: {
                language: {
                    label: "Språk",
                    description: "Välj önskat språk för Plexcord."
                },
                settingsLocation: {
                    label: "Inställningar Plats",
                    description: "Bestämmer var avsnittet Plexcord-inställningar kommer att finnas."
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "Hjälper oss att ge dig stöd",
            commands: {
                description: {
                    debug: "Skicka Plexcord felsökningsinformation",
                    plugins: "Skicka Plexcord plugin lista"
                }
            },
            modals: {
                outdated: {
                    title: "Hålla fast!",
                    body: "Du använder en föråldrad version av Plexcord! Chansen är stor att ditt problem redan är åtgärdat.",
                    footer: "Uppdatera först innan du ber om support!",
                    button: {
                        cancel: "Visa uppdateringar",
                        confirm: "Uppdatera och starta om nu",
                        secondaryConfirm: "Jag vet vad jag gör eller så kan jag inte uppdatera"
                    }
                },
                updater: {
                    title: "Hålla fast!",
                    body: "Du använder en externt uppdaterad Plexcord-version, som vi inte tillhandahåller support för!",
                    footer: "Byt antingen till en {{officially}} eller kontakta din paketansvarig för support istället.",
                    officially: "officiellt stödd version av Plexcord",
                    button: {
                        cancel: "Avboka",
                        confirm: "Visa nedladdningssidan",
                        now: "Uppdatera nu"
                    },
                    toast: {
                        success: "Framgång! Startar om...",
                        already: "Redan uppdaterad!",
                        failed: "Det gick inte att uppdatera :("
                    }
                },
                custom: {
                    title: "Hålla fast!",
                    header: "Du använder en anpassad version av Plexcord, som vi inte tillhandahåller support för!",
                    body: "Vi tillhandahåller endast support för {{officialBuild}}. Antingen {{switch}} eller ta reda på problemet själv.",
                    footer: "Du kommer att förbjudas att ta emot support om du ignorerar denna regel.",
                    official: "officiella konstruktioner",
                    switch: "byta till en officiell konstruktion",
                    button: {
                        confirm: "Förstått",
                        secondaryConfirm: "Visa inte igen"
                    }
                }
            },
            button: {
                debug: "Kör /plexcord-debug",
                plugins: "Kör /plexcord-plugins",
                snippet: "Kör Snippet"
            },
            toast: {
                success: "Framgång!",
                failed: "Det gick inte att köra utdrag :(",
                failedOpenInvite: "Det gick inte att öppna inbjudan, kolla konsolen :(",
                upload: "Pluginlistan har laddats upp!",
                failedUpload: "Det gick inte att ladda upp fil med pluginlistan. Försök igen.",
                unableGenerate: "Det gick inte att skapa plugin-listan."
            },
            dm: {
                warning: "Vänligen skicka inte privata meddelanden till Plexcord-pluginutvecklare för support!{{br}}Istället kan du gå med i {{support}}-servern och använda Plexcord-supportkanalen: {{channel}}"
            },
            alert: {
                title: "Varning: Högt antal plugin-program",
                paragraph1: "Du har mer än 100 plugins aktiverade.",
                paragraph2: "På grund av den stora mängden plugins kanske du inte får support.",
                paragraph3: "Ditt problem orsakas troligen av plugin-konflikter.",
                paragraph4: "Vänligen överväg att inaktivera några plugins för att felsöka.",
                paragraph5: "Din plugin-lista kommer att skickas som en textfil.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Högerklicka på din kontopanel längst ner till vänster för att se din profil på den aktuella servern",
            option: {
                prioritizeServerProfile: {
                    label: "Prioritera serverprofil",
                    description: "Prioritera serverprofil när du vänsterklickar på din kontopanel"
                }
            },
            context: {
                account: "Visa kontoprofil",
                server: "Visa serverprofil",
                prioritize: "Prioritera serverprofil"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Får brusreduceringen att växla mellan Ingen och Krisp istället för Krisp och Standard"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Animerar allt som kan animeras",
            option: {
                icons: {
                    label: "Ikoner",
                    description: "Animera alltid serverikoner, avatarer, dekor och mer"
                },
                statusEmojis: {
                    label: "Status Emojis",
                    description: "Animera alltid statusemojis"
                },
                serverBanners: {
                    label: "Server banners",
                    description: "Animera alltid serverbanners"
                },
                nameplates: {
                    label: "Namnskyltar",
                    description: "Animera alltid namnskyltar"
                },
                roleGradients: {
                    label: "Rollgradienter",
                    description: "Animera alltid rollgradienter"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Expanderar alltid profiler som popouts till full modal"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Utökar alltid rolllistor i profilfönster",
            option: {
                hideArrow: {
                    label: "Göm pil",
                    description: "Dölj pil"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Spelar animal crossing animalese för varje meddelande som skickas (de tjatar mycket)",
            option: {
                volume: {
                    label: "Volym",
                    description: "Volymen på det animaliska ljudet"
                },
                speed: {
                    label: "Hastighet",
                    description: "Det animaliska ljudets hastighet"
                },
                pitch: {
                    label: "Tonhöjd",
                    description: "Pitch multiplikator"
                },
                messageLengthLimit: {
                    label: "Meddelandelängdsgräns",
                    description: "Maximal längd på meddelande att bearbeta"
                },
                processOwnMessages: {
                    label: "Bearbeta egna meddelanden",
                    description: "Gör det möjligt att yap dina egna meddelanden också"
                },
                soundQuality: {
                    label: "Ljudkvalitet",
                    description: "Ljudkvalitet att använda",
                    high: "Hög",
                    med: "Medium",
                    low: "Låg",
                    lowest: "Lägst"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Tar bort den irriterande opålitliga domänen och misstänkt fil-popup",
            option: {
                domain: {
                    label: "Domän",
                    description: "Ta bort popup-fönstret för opålitlig domän när du öppnar länkar"
                },
                file: {
                    label: "Fil",
                    description: "Ta bort popupen \"Potentiellt farlig nedladdning\" när du öppnar länkar"
                },
                noDeleteSafety: {
                    label: "Ingen raderingssäkerhet",
                    description: "Tar bort kravet på ange servernamn när en server tas bort"
                },
                confirmModal: {
                    label: "Bekräfta Modal",
                    description: "Bör en \"är du säker på att du vill ta bort\"-modal visas?"
                }
            },
            alert: {
                title: "Ta bort server?",
                body: "Det är permanent, om det inte var uppenbart.",
                confirm: "Radera",
                cancel: "Avboka"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonymisera uppladdade filnamn",
            option: {
                anonymiseByDefault: {
                    label: "Anonymisera som standard",
                    description: "Anonymisera filnamn som standard. Du kan inaktivera detta i uppladdningspopupen om det behövs."
                },
                spoilerMessages: {
                    label: "Spoilermeddelanden",
                    description: "Anonymisera filnamn som är markerade som spoilers."
                },
                method: {
                    label: "Metod",
                    description: "Anonymiseringsmetod",
                    random: "Slumpmässiga karaktärer",
                    consistent: "Konsekvent",
                    timestamp: "Tidsstämpel"
                },
                randomisedLength: {
                    label: "Randomiserad längd",
                    description: "Randomiserad teckenlängd"
                },
                consistent: {
                    label: "Konsekvent",
                    description: "Konsekvent anonymiseringshemlighet"
                }
            },
            using: {
                anonymous: "Använder anonymt filnamn",
                spoiler: "Använder normalt filnamn"
            },
            spoiler: {
                description: "Växla spoiler för dina filer",
                toggle: "Växla spoiler för dina filer (standard på)",
                enabled: "Spoiler aktiverad!",
                disabled: "Spoiler inaktiverad!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Discord rik närvaro för din Apple Music!",
            about: "För de anpassningsbara aktivitetsformatsträngarna kan du använda flera specialsträngar för att inkludera spårdata i aktiviteter! {{name}} ersätts med spårnamnet; {{artist}} ersätts med artistens/konstnärernas namn; och {{album}} ersätts med albumnamnet.",
            button: {
                listen: "Lyssna på Apple Music",
                songLink: "Se på SongLink"
            },
            option: {
                activityType: {
                    label: "Aktivitetstyp",
                    description: "Vilken typ av aktivitet",
                    listening: "Lyssnande",
                    playing: "Spelar"
                },
                statusDisplayType: {
                    label: "Statusvisningstyp",
                    description: "Visa spåret/artistnamnet i medlemslistan",
                    off: "Visa inte (visar generiskt avlyssningsmeddelande)",
                    artist: "Visa artistnamn",
                    track: "Visa spårnamn"
                },
                refreshInterval: {
                    label: "Uppdateringsintervall",
                    description: "Intervallet mellan aktivitetsuppdateringar (sekunder)"
                },
                enableTimestamps: {
                    label: "Aktivera tidsstämplar",
                    description: "Om tidsstämplar ska aktiveras eller inte"
                },
                enableButtons: {
                    label: "Aktivera knappar",
                    description: "Om knappar ska aktiveras eller inte"
                },
                nameString: {
                    label: "Namnsträng",
                    description: "Aktivitetsnamnformatsträng"
                },
                detailsString: {
                    label: "Detaljer String",
                    description: "Aktivitetsinformation formatsträng"
                },
                stateString: {
                    label: "State String",
                    description: "Aktivitetstillståndsformatsträng"
                },
                largeImageType: {
                    label: "Stor bildtyp",
                    description: "Aktivitetstillgångar stor bildtyp",
                    album: "Albumkonstverk",
                    artist: "Konstnär konstverk",
                    disabled: "Inaktiverad"
                },
                largeTextString: {
                    label: "Stor textsträng",
                    description: "Aktivitetstillgångar stor textformatsträng"
                },
                smallImageType: {
                    label: "Liten bildtyp",
                    description: "Aktivitetstillgångar liten bildtyp",
                    album: "Apple Music-logotyp",
                    artist: "Konstnär konstverk",
                    disabled: "Inaktiverad"
                },
                smallTextString: {
                    label: "Liten textsträng",
                    description: "Aktivitetstillgångar liten textformatsträng"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Klientplugin för arRPC för att aktivera RPC på Discord Web (experimentell)",
            use: {
                title: "Hur man använder arRPC",
                enable: "{{link}} för att köra servern och aktivera sedan plugin-programmet.",
                link: "Följ instruktionerna i GitHub-repo"
            },
            toast: {
                connected: "Ansluten till arRPC",
                failed: "Det gick inte att ansluta till arRPC, körs den?",
                retry: "Försöka igen"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Med @någon kan du nämna någon slumpmässigt"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Uppdaterar automatiskt din onlinestatus (online, inaktiv, dnd) när du startar spel",
            option: {
                statusToSet: {
                    label: "Status att ställa in",
                    description: "Statusen som ska ställas in när ett spel startas",
                    online: "Online",
                    dnd: "Stör ej",
                    idle: "På tomgång",
                    invisible: "Osynlig"
                },
                excludeInvisible: {
                    label: "Uteslut Osynlig",
                    description: "Förhindra automatiska statusändringar medan din status är inställd på osynlig"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "ZIPar automatiskt specificerade filtyper och mappar innan uppladdning till Discord",
            option: {
                extensions: {
                    label: "Tillägg",
                    description: "Kommaseparerad lista över filtillägg för auto-zip (t.ex. .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Visar banners i medlemslistan",
            option: {
                animate: {
                    label: "Animera",
                    description: "Animera banner"
                },
                preferNameplate: {
                    label: "Föredrar namnskylt",
                    description: "Föredrar namnskylt framför banderoll"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Visar aktivitetsikoner i medlemslistan och tillåter att visa alla aktiviteter",
            option: {
                memberList: {
                    label: "Medlemslista",
                    description: "Visa aktivitetsikoner i medlemslistan"
                },
                iconSize: {
                    label: "Ikonstorlek",
                    description: "Storleken på aktivitetsikonerna"
                },
                specialFirst: {
                    label: "Special först",
                    description: "Visa specialaktiviteter först (för närvarande Spotify och Twitch)"
                },
                renderGifs: {
                    label: "Återge GIF-filer",
                    description: "Tillåt rendering av GIF-filer"
                },
                removeGameActivityStatus: {
                    label: "Ta bort statusen \"Spelaktivitet\".",
                    description: "Ta bort spelaktivitetsikon och status"
                },
                userPopout: {
                    label: "Användar popout",
                    description: "Visa alla aktiviteter i profilens popout/sidofält"
                },
                hideTooltip: {
                    label: "Dölj verktygstips",
                    description: "Döljer aktiviteter på olika platser"
                },
                allActivitiesStyle: {
                    label: "Alla aktiviteter stil",
                    description: "Stil för att visa alla aktiviteter",
                    list: "Lista",
                    carousel: "Karusell",
                    left: "Vänster",
                    right: "Rätt"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Lägger till en spektrograf och en oscilloskopvisualiserare till ljudtillbehörsspelare",
            option: {
                oscilloscope: {
                    label: "Oscilloskop",
                    description: "Aktivera oscilloskopvisualiserare"
                },
                spectrograph: {
                    label: "Spektrograf",
                    description: "Aktivera spektrografvisualiserare"
                },
                oscilloscopeSolidColor: {
                    label: "Oscilloskop enfärgad",
                    description: "Använd en enfärgad färg för oscilloskopet istället för en gradient"
                },
                oscilloscopeColor: {
                    label: "Oscilloskop färg",
                    description: "Färg på oscilloskopet när solid färg är aktiverat"
                },
                spectrographSolidColor: {
                    label: "Spectrograph Solid Color",
                    description: "Använd en enfärgad färg för spektrografen istället för en gradient"
                },
                spectrographColor: {
                    label: "Spektrograffärg",
                    description: "Färg på spektrografen när solid färg är aktiverat"
                }
            },
            toast: {
                invalidColorFormat: "Ogiltigt färgformat för {{settingKey}}, se till att det är i formatet \"R, G, B\" eller \"#RRGGBB\""
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Skapa anpassade skäl att använda i Discord-förbudsmodalen och/eller visa en textinmatning som standard istället för alternativen.",
            option: {
                reasons: {
                    label: "Skäl",
                    description: "Dina anpassade skäl"
                },
                isTextInputDefault: {
                    label: "Är textinmatning som standard",
                    description: "Visar en textinmatning istället för en valmeny som standard. (Motsvarar att klicka på alternativet \"Övrigt\")"
                }
            },
            title: "Skäl",
            placeholder: "Resonera",
            add: "Lägg till ytterligare ett skäl"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Låter dig söka i listan med blockerade användare och gör namn valbara i inställningarna.",
            placeholder: "Sök användare..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Förbättrar kommandosystemet med diverse förbättringar.",
            option: {
                autoFillArguments: {
                    label: "Autofyll-argument",
                    description: "Fyll kommandot automatiskt med alla argument istället för bara nödvändiga"
                },
                allowNewlinesInCommands: {
                    label: "Tillåt nya rader i kommandon",
                    description: "Tillåt nyrader i kommandoinmatningar (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Uppdaterar Discord-applikationens kommandon lokalt",
                    user: "specifika användare att försöka uppdatera",
                    refreshing: "Uppdaterar programkommandon...",
                    refreshed: "Kommandon har uppdaterats framgångsrikt!",
                    failed: "Det gick inte att uppdatera kommandon. Kontrollera konsolen för detaljer."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Visar servermappar på dedikerad sidofält och lägger till mapprelaterade förbättringar",
            option: {
                sidebar: {
                    label: "Sidofält",
                    description: "Visa servrar från mappen på dedikerad sidofält"
                },
                sidebarAnim: {
                    label: "Sidofältsanimering",
                    description: "Animera öppna mappens sidofält"
                },
                closeAllFolders: {
                    label: "Stäng alla mappar",
                    description: "Stäng alla mappar när du väljer en server som inte finns i en mapp"
                },
                closeAllHomeButton: {
                    label: "Stäng alla Hem-knapp",
                    description: "Stäng alla mappar när du klickar på hemknappen"
                },
                closeOthers: {
                    label: "Stäng andra",
                    description: "Stäng andra mappar när du öppnar en mapp"
                },
                closeServerFolder: {
                    label: "Stäng servermappen",
                    description: "Stäng mappen när du väljer en server i den mappen"
                },
                forceOpen: {
                    label: "Force Open",
                    description: "Tvinga en mapp att öppna när du byter till en server för den mappen"
                },
                keepIcons: {
                    label: "Behåll ikoner",
                    description: "Fortsätt visa guild-ikoner i den primära guildbar-mappen när den är öppen i BetterFolders sidofält"
                },
                showFolderIcon: {
                    label: "Visa mappikon",
                    description: "Visa mappikonen ovanför mappgillen i BetterFolders sidofält",
                    never: "Aldrig",
                    always: "Alltid",
                    moreThanOne: "När mer än en mapp utökas"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Ändra GIF alt-text från att bara vara \"GIF\" till att innehålla gif-taggar / filnamn"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Får gif-väljaren att öppna favoritkategorin som standard",
            option: {
                keepOpen: {
                    label: "Håll öppet",
                    description: "Håller gif-väljaren öppen efter att ha valt en gif"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Se inbjudningars utgångsdatum, se inbjudarens profil och förhandsgranska servrar innan du går med genom att klicka på namnet",
            render: {
                tip: "Den här inbjudan upphör att gälla {{time}}",
                header: "{{name}} bjöd in dig till {{server}}",
                never: "inte löpa ut"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Dölj anteckningar eller inaktivera stavningskontroll (Konfigurera i inställningarna!!)",
            option: {
                hide: {
                    label: "Dölj anteckningar",
                    description: "Dölj anteckningsrutan i användarens popoutfönster"
                },
                noSpellCheck: {
                    label: "Ingen stavningskontroll",
                    description: "Inaktivera stavningskontroll i anteckningar"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Mängden plus före :emoji: är meddelandet att lägga till det"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Lägger till alternativ för att kopiera rollfärg / redigera roll / visa rollikon när du högerklickar på roller i användarprofilen",
            option: {
                roleIconFileFormat: {
                    label: "Rollikon Filformat",
                    description: "Filformat att använda när du visar rollikoner"
                }
            },
            context: {
                copyColor: "Kopiera rollfärg",
                editRole: "Redigera roll",
                viewIcon: "Visa rollikon"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Kopiera rollfärg på RoleDot (tillgänglighetsinställning) klick. Gör det också möjligt att använda både RoleDot och färgade namn samtidigt.",
            option: {
                bothStyles: {
                    label: "Båda stilarna",
                    description: "Visa både rollprickar och färgade namn"
                },
                copyRoleColorInProfilePopout: {
                    label: "Kopiera rollfärg i profilfönster",
                    description: "Tillåt att klicka på rollprick i profilens popout för att kopiera rollfärg"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Förbättrar sessionsmenyn (enheter). Låter dig se exakta tidsstämplar, ge varje session ett anpassat namn och få aviseringar om nya sessioner.",
            new: "NY",
            newSessions: "Nya sessioner:",
            rename: "Döpa om",
            newDevice: "Nytt enhetsnamn",
            resetName: "Återställ namn",
            save: "Spara",
            cancel: "Avboka",
            option: {
                backgroundCheck: {
                    label: "Bakgrundskontroll",
                    description: "Leta efter nya sessioner i bakgrunden och visa aviseringar när de upptäcks"
                },
                checkInterval: {
                    label: "Kontrollera intervall",
                    description: "Hur ofta du ska leta efter nya sessioner i bakgrunden (om aktiverat), i minuter"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Förbättrar din upplevelse för inställningar-menyöppning",
            option: {
                disableFade: {
                    label: "Inaktivera Tona",
                    description: "Inaktivera crossfade-animeringen"
                },
                organizeMenu: {
                    label: "Ordna menyn",
                    description: "Ordnar inställningskuggens snabbmeny i kategorier"
                },
                eagerLoad: {
                    label: "Ivrig last",
                    description: "Tar bort laddningsfördröjningen när menyn öppnas för första gången"
                }
            },
            alert: {
                title: "Omstart krävs",
                restart: "Du har ändrat inställningar som kräver omstart.",
                confirm: "Starta om nu",
                cancel: "Senare!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Ladda upp med ett enda klick, öppna menyn med högerklick"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Denna plugin låter dig förstora förhandsvisningar av stream",
            context: {
                viewPreview: "Visa Stream Preview"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Blockerar meddelanden som innehåller specifika användardefinierade nyckelord, som om användaren som skickade dem var blockerad.",
            option: {
                blockedWords: {
                    label: "Blockerade ord",
                    description: "Kommaseparerad lista över ord att blockera"
                },
                useRegex: {
                    label: "Använd Regex",
                    description: "Använd varje värde som ett reguljärt uttryck när du kontrollerar meddelandeinnehåll (avancerat)"
                },
                caseSensitive: {
                    label: "Skiftlägeskänslig",
                    description: "Om man ska använda skiftlägeskänslig sökning eller inte"
                },
                ignoreBlockedMessages: {
                    label: "Ignorera blockerade meddelanden",
                    description: "Ignorar helt (senaste) nya meddelandefält"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Förhindra Krisp från att ladda"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Sudda bifogade filer i NSFW-kanaler tills du håller muspekaren",
            option: {
                blurAmount: {
                    label: "Oskärpa mängd",
                    description: "Oskärpa (i pixlar)"
                },
                blurAllChannels: {
                    label: "Oskärpa alla kanaler",
                    description: "Oskärpa bilagor i alla kanaler (inte bara NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Förbigå stiftmeddelandet när du använder stiftfunktionerna"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Få fortfarande aviseringar från specifika källor när du är i stör ej-läge. Högerklicka på användare/kanaler/skrån för att ställa in dem på att kringgå stör ej-läge.",
            context: {
                remove: "Ta bort Status Bypass",
                add: "Lägg till Status Bypass"
            },
            option: {
                guilds: {
                    label: "Skrån",
                    description: "Guilds att låta kringgå (meddelas när man pingar någonstans i guilden)",
                    placeholder: "Separera med kommatecken"
                },
                channels: {
                    label: "Kanaler",
                    description: "Kanaler att låta kringgå (meddelas när pingats i den kanalen)",
                    placeholder: "Separera med kommatecken"
                },
                users: {
                    label: "Användare",
                    description: "Användare att låta förbigå (meddelas för alla meddelanden som skickas i DM)",
                    placeholder: "Separera med kommatecken"
                },
                allowOutsideOfDms: {
                    label: "Tillåt utanför DM",
                    description: "Tillåt utvalda användare att kringgå status utanför DM också (fungerar som en kanal/guild-bypass, men det är för alla meddelanden som skickas av de valda användarna)"
                },
                notificationSound: {
                    label: "Aviseringsljud",
                    description: "Om aviseringsljudet ska spelas upp"
                },
                respectSilentPings: {
                    label: "Respektera Silent Pings",
                    description: "Respektera tysta pingar (@tyst / undertryck aviseringar)"
                },
                statusToUse: {
                    label: "Status att använda",
                    description: "Status att använda för vitlista",
                    online: "Online",
                    idle: "På tomgång",
                    dnd: "Stör ej",
                    invisible: "Osynlig"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Spåra och visa användarfödelsedagar med tårtikoner",
            context: {
                label: "Födelsedag",
                setBirthday: "Ställ in födelsedag",
                clearBirthday: "Klar födelsedag",
                current: "Nuvarande:"
            },
            option: {
                chat: {
                    label: "Chatta",
                    description: "Visa tårtikoner bredvid användarnamn i chatten"
                },
                memberList: {
                    label: "Medlemslista",
                    description: "Visa tårtikoner i medlemslistan"
                },
                profileBadge: {
                    label: "Profilmärke",
                    description: "Visa tårtmärket i användarprofilen"
                },
                notificationSound: {
                    label: "Aviseringsljud",
                    description: "Spela upp ljud när födelsedagsavisering skickas"
                },
                userList: {
                    label: "Sparade födelsedagar",
                    description: "Hantera sparade födelsedagar"
                }
            },
            locations: {
                chat: {
                    label: "Chatta",
                    description: "bredvid användarnamn i chatten"
                },
                memberList: {
                    label: "Medlemslista",
                    description: "i medlemslistan"
                }
            },
            toast: {
                success: "Födelsedagsuppsättning framgångsrikt!",
                invalid: "Ogiltigt födelsedagsformat! Endast DD/MM accepteras.",
                cleared: "Födelsedagen klarades av framgångsrikt!"
            },
            notification: {
                title: "🎂 Födelsedag idag!",
                body: "Det är {{username}}s födelsedag idag!"
            },
            modal: {
                title: "Ange födelsedag för {{username}}",
                description: "Ange födelsedagen i DD/MM-format (t.ex. 25/12)",
                placeholder: "till exempel 25/12",
                current: "Aktuell födelsedag:",
                set: "Ställ in födelsedag",
                cancel: "Avboka",
                birthday: "Det är min födelsedag! 🎂",
                saved: "Sparade födelsedagar",
                savedDesc: "Inga födelsedagar sparade ännu. Högerklicka på användare för att lägga till deras födelsedagar!",
                today: "I dag",
                remove: "Ta bort",
                loading: "Belastning...",
                save: "Spara",
                edit: "Redigera"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Visar samtalstimer i alla röstsamtal",
            option: {
                format: {
                    label: "Formatera",
                    description: "Kompakt eller läsbart format",
                    human: "30d 23h 00m 42s"
                },
                allCallTimers: {
                    label: "Alla samtalstimer",
                    description: "Visa samtalstimer för alla användare på servrar"
                },
                showWithoutHover: {
                    label: "Visa utan hover",
                    description: "Visa alltid timern utan att behöva hovra"
                },
                showRoleColor: {
                    label: "Visa rollfärg",
                    description: "Visas i användarens rollfärg (om insticksprogrammet ShowRoleColor är aktiverat)"
                },
                trackSelf: {
                    label: "Spåra dig själv",
                    description: "Visa även din egen timer"
                },
                showSeconds: {
                    label: "Visa sekunder",
                    description: "Visa sekunder i timern"
                },
                watchLargeGuilds: {
                    label: "Titta på Large Guilds",
                    description: "Spåra användare i stora skrån. Detta kan orsaka fördröjning om du är i många stora guilder med aktiva röstanvändare. Testad med upp till 2000 aktiva röstanvändare utan problem."
                },
                fixUI: {
                    label: "UI Fix",
                    description: "I vissa fall kan timern bryta användargränssnittet. Aktivera det här alternativet för att fixa det."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Lägger till märken till kanaler baserat på deras typ",
            badge: {
                private: "Denna kanal är låst.",
                nsfw: "Denna kanal är markerad som NSFW.",
                rules: "Denna kanal är kanalen för serverregler."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Ett märke per kanal",
                    description: "Visa bara ett märke per kanal"
                },
                showTextBadge: {
                    label: "Visa textmärke",
                    description: "Visa textmärke"
                },
                showVoiceBadge: {
                    label: "Visa röstmärke",
                    description: "Visa Voice-märket"
                },
                showCategoryBadge: {
                    label: "Visa kategorimärke",
                    description: "Visa kategorimärke"
                },
                showDirectoryBadge: {
                    label: "Visa katalogmärke",
                    description: "Visa katalogmärket"
                },
                showAnnouncementThreadBadge: {
                    label: "Visa meddelandetrådsmärke",
                    description: "Visa meddelandetrådsmärke"
                },
                showPublicThreadBadge: {
                    label: "Visa allmän trådmärke",
                    description: "Visa allmän tråd-märke"
                },
                showPrivateThreadBadge: {
                    label: "Visa privat trådmärke",
                    description: "Visa märket för privat tråd"
                },
                showStageBadge: {
                    label: "Visa scenmärke",
                    description: "Visa scenmärket"
                },
                showAnnouncementBadge: {
                    label: "Visa meddelandemärke",
                    description: "Visa meddelandemärket"
                },
                showForumBadge: {
                    label: "Visa forummärket",
                    description: "Visa forummärket"
                },
                showMediaBadge: {
                    label: "Visa mediamärke",
                    description: "Visa mediamärke"
                },
                showNSFWBadge: {
                    label: "Visa NSFW-märket",
                    description: "Visa NSFW-märket"
                },
                showLockedBadge: {
                    label: "Visa låst märke",
                    description: "Visa låst märke"
                },
                showRulesBadge: {
                    label: "Visa reglermärke",
                    description: "Visa regler-märket"
                },
                showUnknownBadge: {
                    label: "Visa okänt märke",
                    description: "Visa okänt märke"
                },
                textBadgeLabel: {
                    label: "Text märkesetikett",
                    description: "Textmärkesetikett",
                    default: "Text"
                },
                voiceBadgeLabel: {
                    label: "Röstmärkesetikett",
                    description: "Röstmärkesetikett",
                    default: "Röst"
                },
                categoryBadgeLabel: {
                    label: "Kategori märkesetikett",
                    description: "Kategorimärkesetikett",
                    default: "Kategori"
                },
                announcementBadgeLabel: {
                    label: "Etikett för meddelandetråd",
                    description: "Meddelande Trådmärkesetikett",
                    default: "Nyheter"
                },
                announcementThreadBadgeLabel: {
                    label: "Etikett för meddelandetråd",
                    description: "Meddelande Trådmärkesetikett",
                    default: "Nyhetstråd"
                },
                publicThreadBadgeLabel: {
                    label: "Offentlig trådmärkesetikett",
                    description: "Märket för offentlig tråd",
                    default: "Tråd"
                },
                privateThreadBadgeLabel: {
                    label: "Privat trådmärkesetikett",
                    description: "Märket för privat tråd",
                    default: "Privat tråd"
                },
                stageBadgeLabel: {
                    label: "Scenmärkesetikett",
                    description: "Scenmärkesetikett",
                    default: "Etapp"
                },
                directoryBadgeLabel: {
                    label: "Katalogmärkesetikett",
                    description: "Katalogmärkesetikett",
                    default: "Katalog"
                },
                forumBadgeLabel: {
                    label: "Forummärkesetikett",
                    description: "Etikett för forummärke",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Mediemärkesetikett",
                    description: "Etikett för mediamärke",
                    default: "Media"
                },
                nsfwBadgeLabel: {
                    label: "NSFW märkesetikett",
                    description: "NSFW märkesetikett",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Låst märkesetikett",
                    description: "Låst märkesetikett",
                    default: "Låst"
                },
                rulesBadgeLabel: {
                    label: "Regler märkesetikett",
                    description: "Regler märkesetikett",
                    default: "Regler"
                },
                unknownBadgeLabel: {
                    label: "Okänd märkesetikett",
                    description: "Okänd märkesetikett",
                    default: "Okänd"
                },
                textBadgeColor: {
                    label: "Textmärkesfärg",
                    description: "Färg på textmärket"
                },
                voiceBadgeColor: {
                    label: "Röstmärkesfärg",
                    description: "Röstmärkesfärg"
                },
                categoryBadgeColor: {
                    label: "Kategori märkesfärg",
                    description: "Kategorimärkets färg"
                },
                announcementBadgeColor: {
                    label: "Färg för meddelandetrådemblem",
                    description: "Meddelande Trådmärkets färg"
                },
                announcementThreadBadgeColor: {
                    label: "Färg för meddelandetrådemblem",
                    description: "Meddelande Trådmärkets färg"
                },
                publicThreadBadgeColor: {
                    label: "Offentlig trådmärkesfärg",
                    description: "Offentlig tråd-märkesfärg"
                },
                privateThreadBadgeColor: {
                    label: "Färg för privat trådmärke",
                    description: "Privat trådmärkesfärg"
                },
                stageBadgeColor: {
                    label: "Scenmärkesfärg",
                    description: "Scenmärkets färg"
                },
                directoryBadgeColor: {
                    label: "Katalogmärkesfärg",
                    description: "Katalogmärkets färg"
                },
                forumBadgeColor: {
                    label: "Forummärkesfärg",
                    description: "Färg på forummärket"
                },
                mediaBadgeColor: {
                    label: "Mediamärkesfärg",
                    description: "Färg på mediamärket"
                },
                nsfwBadgeColor: {
                    label: "NSFW märkesfärg",
                    description: "Färg på NSFW-märket"
                },
                lockedBadgeColor: {
                    label: "Låst märkesfärg",
                    description: "Låst märkesfärg"
                },
                rulesBadgeColor: {
                    label: "Regler Badge Färg",
                    description: "Regler märkesfärg"
                },
                unknownBadgeColor: {
                    label: "Okänd märkesfärg",
                    description: "Okänd märkesfärg"
                }
            },
            badges: {
                text: "Text",
                voice: "Röst",
                category: "Kategori",
                announcement: "Nyheter",
                announcementThread: "Nyhetstråd",
                publicThread: "Tråd",
                privateThread: "Privat tråd",
                stage: "Etapp",
                directory: "Katalog",
                forum: "Forum",
                media: "Media",
                nsfw: "NSFW",
                locked: "Låst",
                rules: "Regler",
                unknown: "Okänd"
            },
            tooltip: {
                locked: "Denna kanal är låst.",
                nsfw: "Denna kanal är markerad som NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Gruppera dina ofta besökta kanaler i flikar, som en webbläsare",
            open: "Öppna i Ny flik",
            animation: {
                title: "Animationskontroller",
                description: "Aktivera eller inaktivera specifika animationer för kanalflikar. Varje alternativ kan växlas oberoende.",
                placeholder: "Välj vilka animationer som ska aktiveras...",
                tabHover: "Tab Hover-effekter (lyft + skala)",
                tabSelection: "Vald Tab Lift Animation",
                tabDragDrop: "Tabb Dra och släpp (spöke + omordning)",
                tabEnterExit: "Tab Enter/Exit Slides (skapande + stängning)",
                tabIconPop: "Ikon poppar vid val (ikonuppskalning)",
                closeRotation: "Stäng knapprotation",
                plusPulse: "Plusknappspuls",
                mentionGlow: "Nämn Badge Glow",
                compactExpand: "Kompakt lägesexpansion",
                selectedBorder: "Vald flik Blå kant",
                selectedBackground: "Vald flikbakgrundsfärg",
                tabShadows: "Tabskuggeffekter",
                tabRepositioning: "Flikompositionering (smidiga positionsändringar)",
                resizeHandle: "Ändra storlek Handtag Tona",
                questActivate: "Aktiv Quest Gradient"
            },
            bookmark: {
                label: "Bokmärke",
                unknown: "Okänd användare",
                folder: "Mapp",
                add: "Lägg till i bokmärken",
                edit: "Redigera bokmärke",
                delete: "Ta bort bokmärke",
                remove: "Ta bort från bokmärken",
                removeFolder: "Ta bort bokmärke från mapp",
                loading: "Laddar bokmärken...",
                noBookmarks: "Du har inga bokmärken. Du kan lägga till en öppen flik eller dölja den genom att högerklicka på den",
                quests: "Uppdrag",
                messageRequests: "Meddelandeförfrågningar",
                friends: "Vänner",
                shop: "Handla",
                library: "Bibliotek",
                discovery: "Upptäckt",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Aktivitet",
                specialPage: "Specialsida",
                searchPlaceholder: "Sök bokmärken"
            },
            button: {
                save: "Spara",
                delete: "Radera",
                cancel: "Avboka",
                reset: "Återställ",
                close: "Stäng"
            },
            context: {
                label: "ChannelTabs Kontextmeny",
                bookmark: "Kanalflikar Bokmärkeskontextmeny",
                tab: "Kanalflikar Fliken Kontextmeny",
                folderMenu: "Bokmärkesmapp Meny",
                compact: "Kompakt",
                bookmarkBar: "Bokmärkesfältet",
                openAll: "Öppna Alla i Bokmärken",
                openNew: "Öppna i Ny flik",
                close: {
                    tab: "Stäng flik",
                    otherTabs: "Stäng andra flikar",
                    tabsToRight: "Stäng flikar till höger",
                    tabsToLeft: "Stäng flikar till vänster",
                    reopen: "Öppna stängd flik igen",
                    allTabs: "Stäng alla flikar"
                }
            },
            error: {
                noLogin: "Finns det inget inloggat konto?"
            },
            modal: {
                add: {
                    title: "Lägg till bokmärke i mapp",
                    select: "Välj en mapp",
                    create: "Skapa en"
                },
                edit: {
                    title: "Redigera bokmärke",
                    name: "Bookmark Name",
                    folder: "Mappfärg"
                },
                delete: {
                    title: "Är du säker?",
                    description: "Om du tar bort en bokmärkesmapp raderas också alla bokmärken i den."
                },
                folderIcon: {
                    title: "Välj Mappikon",
                    preview: "Förhandsvisning",
                    iconColor: "Ikonfärg",
                    search: "Sök",
                    searchPlaceholder: "Sök {{count}} ikoner...",
                    folderName: "Mappnamn",
                    folderColor: "Mappfärg",
                    folderIcon: "Mappikon",
                    chooseIcon: "Välj Ikon",
                    useDefaultIcon: "Använd Standardikon"
                }
            },
            option: {
                onStartup: {
                    label: "Vid uppstart",
                    description: "Vad man ska göra med flikar vid start",
                    nothing: "Gör ingenting (öppna på fliken vänner)",
                    remember: "Kom ihåg flikar från förra sessionen",
                    open: "Öppna på en specifik uppsättning flikar"
                },
                tabSet: {
                    label: "Flikuppsättning"
                },
                noPomeloNames: {
                    label: "Inga pomelonamn",
                    description: "Använd visningsnamn istället för användarnamn för DM"
                },
                showStatusIndicators: {
                    label: "Visa statusindikatorer",
                    description: "Visa statusindikatorer för DM"
                },
                showBookmarkBar: {
                    label: "Visa bokmärkesfältet"
                },
                persistUnreadCountFallback: {
                    label: "Behåll reserv för oläst antal",
                    description: "Behåll reservvärden för olästa märken mellan omladdningar för flikar och bokmärken"
                },
                bookmarkNotificationDot: {
                    label: "Bokmärke Notification Dot",
                    description: "Visa meddelandeprick för bokmärken"
                },
                widerTabsAndBookmarks: {
                    label: "Bredare flikar och bokmärken",
                    description: "Förläng längden på flikar och bokmärken för större bildskärmar"
                },
                tabWidthScale: {
                    label: "Tabbbreddskala",
                    description: "Flikbreddskala (procent) - justerbar genom att dra flikkanterna"
                },
                renderAllTabs: {
                    label: "Rendera alla flikar",
                    description: "Behåll alla flikar cachade i minnet för snabbare växling (caches rullningsposition och status)"
                },
                switchToExistingTab: {
                    label: "Växla till befintlig flik",
                    description: "Byt till flik om den redan finns för kanalen du navigerar till"
                },
                createNewTabIfNotExists: {
                    label: "Skapa ny flik om den inte finns",
                    description: "Skapa en ny flik om det inte finns någon för kanalen du navigerar till"
                },
                enableRapidNavigation: {
                    label: "Aktivera snabb navigering",
                    description: "Aktivera snabbt navigeringsbeteende – snabb navigering mellan kanaler kommer att ersätta den nuvarande fliken istället för att skapa nya"
                },
                rapidNavigationThreshold: {
                    label: "Tröskel för snabb navigering",
                    description: "Tidsfönster (i millisekunder) för snabb navigering. Inom denna tid ersätter nya kanaler den nuvarande fliken istället för att skapa nya."
                },
                tabBarPosition: {
                    label: "Tabbar position",
                    description: "Placering av flikfältet",
                    top: "Bästa",
                    bottom: "Botten"
                },
                enableNumberKeySwitching: {
                    label: "Aktivera sifferknappsväxling",
                    description: "Aktivera siffertangenter (1-9) för att byta flik"
                },
                numberKeySwitchCount: {
                    label: "Antal nyckelbrytare",
                    description: "Antal flikar tillgängliga via siffertangenter (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Aktivera Stäng flikgenväg",
                    description: "Aktivera tangentbordsgenväg med stäng flik"
                },
                enableNewTabShortcut: {
                    label: "Aktivera genväg för ny flik",
                    description: "Aktivera ny flik kortkommando"
                },
                enableTabCycleShortcut: {
                    label: "Aktivera genväg till flikcykel",
                    description: "Aktivera kortkommandon för flikcykling"
                },
                keybindsSection: {
                    label: "Keybinds",
                    description: "Klicka på en knapp och tryck på önskad tangentkombination. Modifierare som CTRL, SHIFT och ALT stöds.",
                    title: "Kortkommandon",
                    reset: "Återställ alla till standard",
                    shortcutDisabled: "Denna genväg är för närvarande inaktiverad",
                    pressKey: "Tryck på valfri tangent...",
                    conflictError: "Denna genväg används redan av: {{key}}",
                    closeTab: {
                        label: "Stäng flik",
                        description: "Tangentbord den för närvarande aktiva fliken"
                    },
                    newTab: {
                        label: "Ny flik",
                        description: "Öppna en ny flik med den aktuella kanalen"
                    },
                    cycleTabsForward: {
                        label: "Cykla flikar framåt",
                        description: "Växla till nästa flik (omsluter till första)"
                    },
                    cycleTabsBackward: {
                        label: "Cykla flikarna bakåt",
                        description: "Växla till föregående flik (omsluter till sist)"
                    }
                },
                closeTabKeybind: {
                    label: "Stäng Tab Keybind",
                    description: "Kortkommando för att stänga den aktuella fliken"
                },
                newTabKeybind: {
                    label: "Ny fliktangentbindning",
                    description: "Kortkommando för att öppna en ny flik"
                },
                cycleTabForwardKeybind: {
                    label: "Cycle Tab Forward Keybind",
                    description: "Kortkommando för att gå till nästa flik"
                },
                cycleTabBackwardKeybind: {
                    label: "Cycle Tab Backward Keybind",
                    description: "Kortkommando för att gå till föregående flik"
                },
                showTabNumbers: {
                    label: "Visa fliknummer",
                    description: "Visa numrerade märken på flikarna för att indikera kortkommandon"
                },
                tabNumberPosition: {
                    label: "Fliknummerposition",
                    description: "Var ska det numrerade märket visas på flikar",
                    left: "Vänster sida (före-ikon)",
                    right: "Höger sida (efter innehåll)"
                },
                animations: {
                    label: "Animationer"
                },
                animationHover: {
                    label: "Animation på Hover",
                    description: "Aktivera svävningslyft och skalningseffekter"
                },
                animationSelection: {
                    label: "Animation på urval",
                    description: "Aktivera urvalsanimationer (kantglöd, lyft)"
                },
                animationDragDrop: {
                    label: "Animation på dra och släpp",
                    description: "Aktivera dra och släpp spökeffekter"
                },
                animationEnterExit: {
                    label: "Animation vid Enter/Exit",
                    description: "Aktivera flikskapande/stängande bildanimeringar"
                },
                animationIconPop: {
                    label: "Animation på Icon Pop",
                    description: "Aktivera ikonuppskalningsanimering vid val"
                },
                animationCloseRotation: {
                    label: "Animation på nära rotation",
                    description: "Aktivera rotationsanimering för stängningsknappar"
                },
                animationPlusPulse: {
                    label: "Animation på plusknappspuls",
                    description: "Aktivera pulsanimering för plusknappen"
                },
                animationMentionGlow: {
                    label: "Animation på Mention Glow",
                    description: "Aktivera pulserande rött sken för omnämnanden"
                },
                animationCompactExpand: {
                    label: "Animation på Compact/Expand",
                    description: "Aktivera smidig expansion för kompakta flikar"
                },
                animationSelectedBorder: {
                    label: "Animation på vald kant",
                    description: "Aktivera kant- och glödstil för valda flikar"
                },
                animationSelectedBackground: {
                    label: "Animation på vald bakgrund",
                    description: "Aktivera förändring av bakgrundsfärg för valda flikar"
                },
                animationTabShadows: {
                    label: "Animation på Tab Shadows",
                    description: "Aktivera skuggeffekter på flikar"
                },
                animationTabPositioning: {
                    label: "Animation Tab Positionering",
                    description: "Aktivera mjuka övergångar när flikar flyttar positioner"
                },
                animationResizeHandle: {
                    label: "Handtag för animering av storleksändring",
                    description: "Aktivera tona animering för att ändra storlek på handtaget"
                },
                animationQuestsActive: {
                    label: "Animationsuppdrag aktiva",
                    description: "Aktivera gradientanimationer på fliken Uppdrag när uppdrag körs aktivt"
                },
                compactAutoExpandSelected: {
                    label: "Kompakt automatisk expandering har valts",
                    description: "Expandera kompakta flikar automatiskt när de väljs för att visa hela kanalnamnet"
                },
                compactAutoExpandOnHover: {
                    label: "Kompakt autoexpandera vid hovring",
                    description: "Expandera kompakta flikar automatiskt när du håller muspekaren för att visa hela kanalnamnet"
                },
                openInNewTabAutoSwitch: {
                    label: "Öppna i New Tab Auto-Switch",
                    description: "Växla automatiskt till nya flikar som öppnas från snabbmenyn \"Öppna i ny flik\"."
                },
                bookmarksIndependentFromTabs: {
                    label: "Bokmärken oberoende av flikar",
                    description: "Bokmärken navigerar oberoende utan att påverka den aktiva flikraden"
                },
                showResizeHandle: {
                    label: "Visa storleksändringshandtag",
                    description: "Visa storlekshandtaget när du håller muspekaren över flikar för att justera flikbredden"
                },
                openNewTabsInCompactMode: {
                    label: "Öppna nya flikar i kompaktläge",
                    description: "Öppna alla nyskapade flikar i kompakt läge som standard"
                },
                newTabButtonBehavior: {
                    label: "Nytt flikknappbeteende",
                    description: "Knappen Ny flik (+) följer flikarna istället för att förbli fästad till höger"
                },
                oneTabPerServer: {
                    label: "En flik per server",
                    description: "Begränsa till en flik per server, så att öppna en ny kanal på den servern kommer att använda den befintliga fliken."
                },
                maxOpenTabs: {
                    label: "Max öppna flikar",
                    description: "Maximalt antal öppna flikar (0 = obegränsat)"
                }
            },
            tabs: {
                startup: "Startflikar",
                currently: "Ställ in på för närvarande öppna flikar"
            },
            toast: {
                notRestoring: "Återställer inte flikar eftersom KeepCurrentChannel är aktiverat",
                failed: {
                    restore: "Det gick inte att återställa flikarna",
                    saved: "Det gick inte att läsa in sparade flikar"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Visar en teckenräknare i meddelanderutan",
            option: {
                colorEffects: {
                    label: "Färgeffekter",
                    description: "Slå på eller av färgeffekter för att komma nära teckengränsen"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Döljer alla kanaler i komprimerade kategorier, även om de har olästa meddelanden."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Ta bort all emoji och dekorskit från kanalnamn"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Tar automatiskt bort spårningselement från webbadresser du skickar"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Klicka på roller i användarprofiler och medlemslistan för att se vilka medlemmar som har dem.",
            modal: {
                loading: "Laddar medlemmar...",
                noMembers: "Inga medlemmar hittades.",
                unknown: "Okänd roll"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Gör att du kan dölja nästan allt innehåll från alla användare lokalt",
            replying: "Svarar på blockerat meddelande",
            option: {
                hideVc: {
                    label: "Dölj röstkanaler",
                    description: "Dölj röstkanaler som innehåller blockerade användare."
                },
                usersToBlock: {
                    label: "Användare att blockera",
                    description: "Användar-ID:n separerade med kommatecken och mellanslag"
                },
                hideBlockedUsers: {
                    label: "Dölj blockerade användare",
                    description: "Skulle blockerade användare också döljas överallt"
                },
                hideBlockedMessages: {
                    label: "Dölj blockerade meddelanden",
                    description: "Skulle meddelanden från blockerade användare döljas helt (samma som det gamla plugin-programmet noblockedmessages)"
                },
                hideEmptyRoles: {
                    label: "Dölj tomma roller",
                    description: "Bör rollrubriker döljas om alla deras medlemmar är blockerade"
                },
                blockedReplyDisplay: {
                    label: "Blockerad svarsvisning",
                    description: "Vad ska visas istället för meddelandet när någon svarar någon du har gömt",
                    displayText: "Displaytext som säger att ett dolt meddelande besvarades",
                    hideReply: "Bokstavligen ingenting"
                },
                guildBlackList: {
                    label: "Guild Blacklist",
                    description: "Guild ID:n för att inaktivera funktionalitet i"
                },
                guildWhiteList: {
                    label: "Guild Whitelist",
                    description: "Guild ID för att aktivera funktionalitet i"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Återskapande av det gamla klienttemaexperimentet. Lägg till en färg till ditt Discord-klienttema",
            title: "Tema färg",
            add: "Lägg till en färg till ditt Discord-klienttema",
            option: {
                color: {
                    label: "Färg"
                },
                resetColor: {
                    label: "Återställ färg"
                }
            },
            error: {
                modal: {
                    title: "Your theme won't look good!",
                    contrast: "Vald färg kommer inte att kontrastera bra med text",
                    nitro: "Nitro-teman stöds inte",
                    switch: "Växla till läge {{oppositeTheme}}",
                    disable: "Inaktivera Nitro-tema",
                    reset: "Återställ temafärg"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Lägg till fler FPS- och varaktighetsalternativ för klipp, plus RPC-taggning!",
            minutes: "Minuter",
            option: {
                richPresenceTagging: {
                    label: "Rich närvarotaggning",
                    description: "When should clips be tagged with the current Rich Presence?",
                    always: "Alltid",
                    only: "Endast när början eller slutet av aktivitetens namn matchar",
                    never: "Aldrig"
                },
                enableScreenshotKeybind: {
                    label: "Aktivera Screenshot Keybind",
                    description: "Aktivera tangentbindningsfunktionen för skärmdump"
                },
                enableVoiceOnlyClips: {
                    label: "Aktivera endast röstklipp",
                    description: "Aktivera endast röstklipp (ljud utan video)"
                },
                enableAdvancedSignals: {
                    label: "Aktivera avancerade signaler",
                    description: "Aktivera avancerade klippsignaler (autoklipputlösare)"
                },
                ignorePlatformRestriction: {
                    label: "Ignorera plattformsbegränsning",
                    description: "Tillåt plattformsbegränsad klippning (kan orsaka lagringsfel)"
                },
                clipsLink: {
                    label: "Klipplänk",
                    link: "Ändra FPS och varaktighet alternativ i Clips inställningar!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Tar bort de färgblindvänliga ikonerna från status, precis som 2015-2017 Discord"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Låter dig navigera i användargränssnittet med ett tangentbord.",
            action: {
                command: {
                    label: "Kör kommando",
                    description: "Alias ​​ett annat palettkommando efter ID. Använd väljaren om du är osäker på identifieraren."
                },
                settings: {
                    label: "Öppna sidan Inställningar",
                    description: "Hoppa direkt till en Discord-inställningssida. Välj en sida från väljaren."
                },
                url: {
                    label: "Öppna URL",
                    description: "Öppna en länk. Använd https://-länkar för bästa kompatibilitet."
                },
                macro: {
                    label: "Kör makro",
                    description: "Kör en sekvens av kommandon i ordning. Lägg till steg via väljaren."
                }
            },
            category: {
                auto: "Auto (använd standardplacering)",
                default: {
                    label: "Snabba åtgärder",
                    description: "Vanliga Plexcord-genvägar"
                },
                plugins: {
                    label: "Plugins",
                    description: "Aktivera, inaktivera och konfigurera Plexcord-plugins",
                    enable: {
                        label: "Aktivera plugins"
                    },
                    disable: {
                        label: "Inaktivera plugins"
                    },
                    settings: {
                        label: "Plugin-inställningar"
                    },
                    toolbox: {
                        label: "Plugin-åtgärder"
                    },
                    chatbar: {
                        label: "Chattfältsknappar"
                    },
                    changes: {
                        label: "Plugin ändringar"
                    }
                },
                context: {
                    label: "Aktuell kontext",
                    description: "Åtgärder för vald kanal och guild"
                },
                updates: {
                    label: "Uppdateringar",
                    description: "Håll dig uppdaterad med Plexcord"
                },
                discordSettings: {
                    label: "Discord-inställningar",
                    description: "Hoppa till Discord-konfigurationssidor"
                },
                custom: {
                    label: "Anpassade kommandon",
                    description: "Användardefinierade kommandopalettposter"
                },
                sessions: {
                    label: "Sessionsverktyg",
                    description: "Verktyg för att hantera din Discord-session"
                },
                guilds: {
                    label: "Skrån",
                    description: "Navigera snabbt till dina guilder"
                },
                friends: {
                    label: "Vänner",
                    description: "Navigera snabbt till dina vänner"
                },
                action: {
                    label: "Handling"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Öppna Plexcord-inställningar",
                        plugin: "Öppna Plugin-inställningar"
                    }
                },
                reload: {
                    label: "Ladda om Discord",
                    description: "Laddar om det aktuella Discord-fönstret"
                }
            },
            command: {
                enable: "Aktivera {{pluginName}}",
                enabled: "Aktiverad {{pluginName}}",
                disable: "Inaktivera {{pluginName}}",
                disabled: "Inaktiverad {{pluginName}}",
                failed: "Kommandot misslyckades:",
                toggleFailed: "Det gick inte att växla {{pluginName}}.",
                pluginSettings: "{{pluginName}} Inställningar",
                untitled: "Namnlöst kommando",
                new: "Nytt kommando",
                error: {
                    enter: "Ange ett kommando-ID eller välj ett nedan.",
                    noCommand: "Inget kommando matchar detta ID."
                },
                discord: {
                    account: "Öppna Mitt konto",
                    privacy: "Öppna Data & Sekretess",
                    notifications: "Öppna Aviseringar",
                    voice: "Öppna Röst och video",
                    text: "Öppna Text och bilder",
                    appearance: "Öppet utseende",
                    accessibility: "Öppen tillgänglighet",
                    keybinds: "Öppna Keybinds",
                    advanced: "Öppna Avancerat",
                },
                updates: {
                    check: {
                        label: "Sök efter uppdateringar",
                        description: "Sök efter Plexcord-uppdateringar",
                        one: "En uppdatering tillgänglig",
                        multiple: "{{count}} uppdateringar tillgängliga",
                        none: "Inga uppdateringar tillgängliga",
                        failed: "Det gick inte att söka efter uppdateringar."
                    },
                    changelog: {
                        label: "Visa ändringslogg",
                        description: "Öppnar Plexcord-ändringsloggen"
                    }
                },
                read: {
                    mark: {
                        label: "Markera {{channelLabel}} Läst"
                    }
                },
                pin: {
                    open: {
                        label: "Öppna pins för {{channelLabel}}"
                    },
                    toggle: {
                        label: "Växla Pin på sista kommandot"
                    }
                },
                channel: {
                    mute: {
                        label: "Stäng av ljudet {{channelLabel}}",
                        oneHour: "Stäng av ljudet för {{channelLabel}} i 1 timme",
                        untilTomorrow: "Stäng av ljudet för {{channelLabel}} tills imorgon",
                    },
                    unmute: {
                        label: "Slå på ljudet {{channelLabel}}",
                    },
                    reopen: {
                        label: "Öppna senast stängt DM igen"
                    },
                    dm: {
                        open: {
                            label: "Öppna DM med {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Öppna Inställningar för {{guildLabel}}"
                    },
                    navigate: {
                        label: "Navigera till {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Ställ in Stör ej i 30 minuter",
                    oneHourDnd: "Ställ in Stör ej i 1 timme",
                    cancelStatusReset: "Avbryt Status Timer"
                },
                status: {
                    set: {
                        online: "Ange status: Online",
                        idle: "Ställ in status: Inaktiv",
                        dnd: "Ange status: Stör ej",
                        invisible: "Ange status: Osynlig"
                    }
                },
                toggle: {
                    streamer: "Växla Streamer-läge",
                    mute: "Växla Self Mute",
                    deafen: "Växla självdöva",
                },
                notification: {
                    clear: {
                        label: "Rensa skrivbordsaviseringar"
                    }
                },
                palette: {
                    settings: {
                        label: "Öppna kommandopalettinställningar",
                        description: "Konfigurera kommandopalettens plugin"
                    }
                },
                recent: {
                    label: "Visa senaste kommandon",
                    description: "Visar de senast utförda kommandona",
                    rerun: "Kör senaste kommandot igen"
                },
                plugin: {
                    reload: {
                        label: "Ladda om alla plugins",
                        description: "Försöker att ladda om varje aktiverat plugin"
                    },
                    enable: {
                        label: "Aktivera alla plugins"
                    },
                    disable: {
                        label: "Inaktivera alla ej nödvändiga plugins"
                    },
                    restart: {
                        label: "Starta om Plexcord",
                        description: "Laddar om Discord-klientfönstret"
                    }
                },
                quickCSS: {
                    label: "Växla Quick CSS"
                },
                transparentity: {
                    label: "Växla fönstergenomskinlighet"
                },
                theme: {
                    open: {
                        label: "Öppna inställningar för klienttema"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Sökkommandon",
                noCommand: "Inga kommandon hittades",
                add: {
                    title: "Lägg till kommando"
                },
                choose: {
                    title: "Välj Kommando"
                },
                command: {
                    palette: {
                        label: "Kommandopalett",
                        placeholder: "Skriv ett kommando",
                        filtering: "Filtrera efter {{tags}}",
                        noCommand: "Inga kommandon hittades",
                        pin: "Fäst kommando",
                        unpin: "Lossa kommandot"
                    },
                    target: {
                        label: "Målkommando-ID",
                        placeholder: "Ange kommando-ID",
                        choose: "Välj Kommando"
                    },
                    custom: {
                        label: "Anpassade kommandon",
                        description: "1) Namnge kommandot · 2) Lägg till valfri beskrivning/sökord/taggar/kategori · 3) Välj en åtgärd och fyll i dess detaljer (ID:n ska matcha befintliga palettkommandon för alias och makron).",
                        auto: "Auto (standard)",
                        expand: "Expandera",
                        collapse: "Kollapsa",
                        collapsed: {
                            label: "Märka",
                            description: "Visningsnamn",
                            advanced: {
                                hide: "Dölj avancerade alternativ",
                                show: "Visa avancerade alternativ"
                            },
                            subtitle: {
                                label: "Beskrivning",
                                placeholder: "Valfri undertext"
                            },
                            keywords: {
                                label: "Nyckelord",
                                placeholder: "Kommaseparerade sökord"
                            },
                            tags: {
                                label: "Taggar",
                                placeholder: "Kommaseparerade taggar"
                            },
                            suggestion: {
                                label: "Förslag"
                            },
                            chooseCommand: {
                                label: "Välj var detta kommando ska visas i paletten."
                            },
                            danger: {
                                label: "Visas som farlig"
                            }
                        },
                        remove: "Ta bort kommando",
                        add: "Lägg till kommando"
                    }
                },
                settings: {
                    noSelected: "Ingen sida har valts",
                    current: "Aktuell sida",
                    choose: "Välj sida..."
                },
                url: {
                    url: "URL",
                    error: "Använd länkarna http:// eller https://.",
                    valid: "Ange en giltig URL.",
                    open: {
                        external: "Öppna externt",
                    }
                },
                macro: {
                    sequence: {
                        label: "Kommandosekvens",
                        placeholder: "kommando-a, kommando-b"
                    },
                    addStep: "Lägg till steg",
                    unknownId: "Okända kommando-ID:n"
                }
            },
            status: {
                online: "Online",
                idle: "På tomgång",
                dnd: "Stör ej",
                invisible: "Osynlig"
            },
            tag: {
                core: "Kärna",
                navigation: "Navigering",
                utility: "Nytta",
                developer: "Framkallare",
                customization: "Anpassning",
                plugins: "Plugins",
                session: "Session",
                context: "Sammanhang",
                custom: "Beställnings",
                guilds: "Skrån",
                friends: "Vänner",
                other: "Andra"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Det gick inte att hitta chattknappen '{{label}}'.",
                        failedToTrigger: "Det gick inte att utlösa {{label}}.",
                        activated: "{{label}} aktiverad."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Kanalavstängningskontroller är inte tillgängliga",
                        muted: "Avstängd kanal.",
                        unmuted: "Avstängd kanal.",
                        failed: "Det gick inte att uppdatera kanalens avstängningsläge."
                    },
                    dm: {
                        no: "Inga DM-stängningar spelade in den här sessionen.",
                        reOpened: "Återöppnade senast stängda DM.",
                        noAvailable: "DM är inte längre tillgängligt."
                    }
                },
                command: {
                    loop: "Kommandoslinga upptäckt i makroexekvering.",
                    notFound: "Kommandot {{commandId}} hittades inte.",
                    unsupported: "Anpassad kommandoåtgärd stöds inte.",
                    failedToRun: "Det gick inte att köra {{label}}.",
                    notMetadata: "Command Palette-pluginmetadata är inte tillgänglig."
                },
                guild: {
                    mute: {
                        unavailable: "Guild mute-kontroller är inte tillgängliga",
                        muted: "Dämpad guild.",
                        unmuted: "Ej dämpad guild.",
                        failed: "Det gick inte att uppdatera guild mute-tillstånd."
                    },
                    settings: {
                        unable: "Det går inte att öppna guildinställningarna.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Det går inte att öppna stiftpanelen.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Avbruten schemalagd statusåterställning.",
                        unableToChange: "Det går inte att ändra status just nu.",
                        reverted: "Status återställd till {{status}}.",
                        dnd: "Stör ej i {{duration}} minuter."
                    },
                    change: {
                        unableToChange: "Det går inte att ändra status just nu.",
                        changed: "Status ändrad till {{status}}."
                    }
                },
                read: {
                    marked: "Markerade {{channelLabel}} som läst.",
                    failed: "Det gick inte att markera kanalen som läst."
                },
                route: {
                    unable: "Unable to open {{destination}}.",
                },
                notification: {
                    cleared: "Rensat alla aviseringar.",
                    failed: "Det gick inte att rensa aviseringar.",
                    notSupported: "Aviseringsrensning stöds inte."
                },
                streamerMode: {
                    enabled: "Streamerläge aktiverat.",
                    disabled: "Streamerläge inaktiverat.",
                },
                voice: {
                    micToggle: {
                        muted: "Mikrofon avstängd.",
                        unmuted: "Mikrofon avstängd."
                    },
                    deafenToggle: {
                        deafened: "Du är nu dövad.",
                        undeafened: "Du är inte längre dövad."
                    }
                },
                quickCSS: {
                    enabled: "Snabb CSS aktiverad.",
                    disabled: "Snabb CSS inaktiverad."
                },
                transparentity: {
                    enabled: "Fönstertransparens aktiverad.",
                    disabled: "Fönstertransparens inaktiverad."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} är inaktiverad.",
                        disable: "{{pluginName}} är inaktiverad. Aktivera plugin-programmet för att använda den här åtgärden."
                    },
                    required: {
                        label: "{{pluginName}} kräver en omstart för att ladda om."
                    },
                    stop: {
                        failed: "Det gick inte att stoppa {{pluginName}}."
                    },
                    restart: {
                        failed: "Det gick inte att starta om {{pluginName}}."
                    },
                    reload: {
                        label: "Laddade om {{pluginName}}.",
                        noPlugin: "Inga plugins laddades om.",
                        reloaded: "Laddade om {{count}} plugin{{s}}."
                    },
                    toggle: {
                        enabled: "Aktiverad {{changed}} plugin{{s}}.",
                        disabled: "Inaktiverad {{changed}} plugin{{s}}.",
                        noChanged: "Inga plugins ändrade tillstånd."
                    },
                    run: {
                        failed: {
                            label: "Det gick inte att köra {{pluginName}}: {{actionLabel}}."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "Aktuell kanal",
                    group: "Grupp DM",
                    direct: "Direktmeddelande"
                },
                guild: {
                    current: "Nuvarande Guild",
                }
            },
            option: {
                hotkey: {
                    label: "Snabbtangent",
                    description: "Snabbtangent används för att öppna kommandopaletten",
                    recording: "Tryck på valfri tangent...",
                    reset: "Återställa"
                },
                visualStyle: {
                    label: "Visuell stil",
                    description: "Palett utseende",
                    classic: "Klassisk",
                    polished: "Polerad"
                },
                showTags: {
                    label: "Visa taggar",
                    description: "Visa taggchips för kommandon"
                },
                enableTagFilter: {
                    label: "Aktivera taggfilter",
                    description: "Visa taggfilterfältet"
                },
                customCommands: {
                    label: "Anpassade kommandon",
                    description: "Hantera anpassade kommandopalettposter"
                }
            },
            template: {
                alias: {
                    label: "Alias ​​kommando",
                    description: "Spegla ett befintligt kommando"
                },
                settings: {
                    label: "Inställningar",
                    description: "Öppna Discord-inställningar"
                },
                url: {
                    label: "Länk",
                    description: "Öppna en extern URL"
                },
                macro: {
                    label: "Makro",
                    description: "Kör en sekvens av kommandon"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Inaktiverar irriterande konsolmeddelanden/fel",
            option: {
                disableLoggers: {
                    label: "Inaktivera Loggers",
                    description: "Inaktiverar Discords loggare"
                },
                disableSpotifyLogger: {
                    label: "Inaktivera Spotify Logger",
                    description: "Inaktivera Spotify-loggern, som läcker kontoinformation och åtkomsttoken"
                },
                whitelistedLoggers: {
                    label: "Vitlistade Loggers",
                    description: "Semikolon (;) separerad lista med loggare för att tillåta även om andra är dolda"
                },
                allowLevel: {
                    label: "Tillåt nivå",
                    description: "Tillåt alltid loggare av dessa typer",
                    filter: "Filterlista"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Lägger till kortare alias för många saker på fönstret. Kör \"shortcutList\" för en lista."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Låter dig ange vissa triggerord som kommer att vara suddiga som standard. Om du klickar på det suddiga innehållet visas det.",
            option: {
                flagged: {
                    label: "Flaggat",
                    flagged: "Flaggade ord",
                    placeholder: "Ord"
                },
                onClick: {
                    label: "På klick",
                    description: "Visa bara triggerinnehåll vid klick istället för att hålla muspekaren"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Låter dig kopiera emojis som formaterad sträng (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Kopiera Unicode",
                    description: "Kopiera det råa unicode-tecknet istället för :name: för standardemojis (👽)"
                }
            },
            context: {
                copy: "Kopiera Emoji Markdown"
            },
            toast: {
                success: "Framgång! Kopierade emoji-markering."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Lägger till en knapp i textfilbilagor för att kopiera deras innehåll",
            copied: "Kopierade!",
            large: "Filen är för stor för att kopieras.",
            copyFileContents: "Kopiera filinnehåll"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Ett plugin för att kopiera människors profilgradientfärger till urklipp.",
            copy: "Kopiera profilfärger",
            toast: {
                noColor: "Inga profilfärger hittades!",
                copied: "Profilfärger kopierade till urklipp!",
                error: "Fel vid kopiering av profilfärger!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Kopiera användarens status-URL när du högerklickar på den",
            toast: {
                copied: "Kopierad URL",
                error: "Det gick inte att kopiera URL, kolla konsolen för mer information"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Lägger till möjligheten att kopiera och öppna Sticker-länkar",
            context: {
                copy: "Kopiera länk",
                open: "Öppna länken"
            },
            toast: {
                success: "Länken kopierad!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Lägger till en knapp för att kopiera användarens omnämnande på användarens snabbmeny, fungerar bäst med ValidUser.",
            context: {
                copy: "Kopiera användarnamn"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Lägger till alternativet \"Kopiera användaradress\" till användarens snabbmeny.",
            context: {
                copy: "Kopiera användarens URL"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Verktygsplugin för att hantera och eventuellt återställa från krascher utan omstart",
            option: {
                attemptToPreventCrashes: {
                    label: "Försök att förhindra krascher",
                    description: "Om man ska försöka förhindra Discord-krascher."
                },
                attemptToNavigateToHome: {
                    label: "Försök att navigera till hemmet",
                    description: "Om du ska försöka navigera till startfliken vid kraschåterställning."
                }
            },
            toast: {
                crashed: {
                    title: "Discord har kraschat!",
                    body: "Awn :( Discord har kraschat två gånger snabbt, försöker inte återhämta sig.",
                    update: "Åh, Discord har precis kraschat... men goda nyheter, det finns en Plexcord-uppdatering tillgänglig som kan fixa det här problemet! Vill du uppdatera nu?",
                    recover: "Försöker återställa...",
                    invalid: "Ogiltig eller utgången inbjudningslänk."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Använd Ctrl+Retur för att skicka meddelanden (kan anpassas)",
            option: {
                submitRule: {
                    label: "Skicka in regel",
                    description: "Sättet att skicka ett meddelande",
                    ctrlEnter: "Ctrl+Enter (Enter eller Shift+Enter för ny rad) (cmd+enter på macOS)",
                    shiftEnter: "Skift+Enter (Enter för ny rad)",
                    enter: "Enter (Skift+Enter för ny rad; Discord standard)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Skicka meddelande mitt i ett kodblock",
                    description: "Om ett meddelande ska skickas mitt i ett kodblock"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Lägger till en sprite som följer din markör.",
            modal: {
                furColor: "Pälsfärg",
                outlineColor: "Konturfärg"
            },
            option: {
                buddy: {
                    label: "Kompis",
                    description: "Välj en markörkompis",
                    oneko: "Oneko",
                    fathorse: "Fatass häst"
                },
                speed: {
                    label: "Hastighet",
                    description: "Din kompis hastighet",
                    invalid: "Hastigheten måste vara större än 0"
                },
                fps: {
                    label: "Framerate",
                    description: "Framerate av din kompis",
                    invalid: "Framerate måste vara större än 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Pälsfärg",
                    description: "Päls hex färg för Oneko"
                },
                outlineColor: {
                    label: "Konturfärg",
                    description: "Kontur hex-färg för Oneko"
                },
                fathorseSection: {
                    label: "Fatass häst"
                },
                size: {
                    label: "Storlek",
                    description: "Storleken på fatasshästen",
                    invalid: "Storleken måste vara större än 0"
                },
                fade: {
                    label: "Blekna",
                    description: "Om hästen skulle blekna när markören är nära"
                },
                freeroam: {
                    label: "Freeroam",
                    description: "Om hästen ska ströva fritt på tomgång"
                },
                shake: {
                    label: "Skaka",
                    description: "Om hästen ska skaka fönstret när den går"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Anpassa mappikoner med valfri PNG",
            option: {
                solidIcon: {
                    label: "Solid ikon",
                    description: "Använd en solid bakgrund på bakgrunden av bilden"
                },
                folderIcons: {
                    label: "Mappikoner",
                    description: "mappikoninställningar"
                }
            },
            modal: {
                change: "Ändra storleken på mappikonen",
                save: "Spara",
                unset: "Avaktiverad",
                set: "Ställ in en ny ikon",
                hover: "Du kanske måste hålla muspekaren över mappen efter inställningen för att den ska uppdateras."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Låter dig ställa in tiden innan Discord går i viloläge (eller inaktivera automatisk tomgång)",
            backOnline: "Välkommen tillbaka! Klicka på knappen för att gå online. Klicka på X för att förbli inaktiv tills du laddar om.",
            exit: "Avsluta tomgång",
            option: {
                idleTimeout: {
                    label: "Timeout för tomgång",
                    description: "Minuter innan Discord går i viloläge (0 för att inaktivera automatisk tomgång)"
                },
                remainInIdle: {
                    label: "Förbli i tomgång",
                    description: "När du kommer tillbaka till Discord, förbli inaktiv tills du bekräftar att du vill gå online"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Lägg till en helt anpassningsbar Rich Presence (spelstatus) till din Discord-profil",
            goTo: "Gå till {{portal}} för att skapa en applikation och hämta applikations-ID.",
            upload: "Ladda upp bilder på fliken Rich Presence för att hämta bildnycklarna.",
            image: "Om du vill använda en bildlänk, ladda ner din bild och ladda upp bilden igen till {{imgur}} och få bildlänken genom att högerklicka på bilden och välja 'Kopiera bildadress'.",
            button: "Du kan inte se dina egna knappar på din profil, men alla andra kan se dem bra.",
            font: "En del konstig unicode-text ('fonts' 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) kan göra att den rika närvaron inte dyker upp, försök använda vanliga bokstäver istället.",
            placeholder: "Ange ett värde",
            select: "Välj ett alternativ",
            error: {
                appIdInvalid: "App-ID måste vara ett giltigt nummer.",
                notice: "Varsel",
                sharing: "Aktivitetsdelning är inte aktiverat, andra kommer inte att kunna se din anpassade rika närvaro!",
                enable: "Aktivera",
                validStream: "Strömmande länk måste vara en giltig URL.",
                mustBeURL: "Måste vara en giltig webbadress.",
                streamCharacters: "Strömmande länk får inte vara längre än 512 tecken.",
                dontUse: "Använd inte en Discord-länk. Använd en Imgur-bildlänk istället.",
                imgur: "Imgur-länken måste vara en direktlänk till bilden (t.ex. https://i.imgur.com/...). Högerklicka på bilden och klicka på \"Kopiera bildadress\"",
                tenor: "Tenorlänk måste vara en direktlänk till bilden (t.ex. https://media.tenor.com/...). Högerklicka på GIF-filen och klicka på \"Kopiera bildadress\"",
                required: "Detta fält är obligatoriskt.",
                tooLong: "Får inte vara längre än {{maxLength}} tecken.",
                mustBeNumber: "Måste vara ett nummer.",
                mustBePositive: "Måste vara ett positivt tal.",
                startTimeInvalid: "Starttidsstämpeln måste vara större än 0.",
                endTimeInvalid: "Sluttidsstämpeln måste vara större än 0."
            },
            option: {
                appId: {
                    label: "App-ID",
                    description: "Applikations-ID (obligatoriskt)"
                },
                appName: {
                    label: "Appens namn",
                    description: "Programnamn (obligatoriskt)"
                },
                details: {
                    label: "Detaljer",
                    description: "Detaljer (rad 1)"
                },
                detailsURL: {
                    label: "Detaljer URL",
                    description: "Detaljerad klickbar URL"
                },
                state: {
                    label: "Ange",
                    description: "Tillstånd (rad 2)"
                },
                stateURL: {
                    label: "Ange URL",
                    description: "Ange klickbar URL"
                },
                partySize: {
                    label: "Feststorlek",
                    description: "Aktuell partistorlek (måste användas med Max Party Size)"
                },
                partyMax: {
                    label: "Max partystorlek",
                    description: "Max partistorlek (måste användas med nuvarande partistorlek)"
                },
                type: {
                    label: "Aktivitetstyp",
                    description: "Aktivitetstyp",
                    playing: "Spelar",
                    streaming: "Streaming",
                    listening: "Lyssnande",
                    watching: "Tittar på",
                    competing: "Tävlande"
                },
                streamLink: {
                    label: "Streamlänk",
                    description: "Twitch.tv eller YouTube.com-länk (endast för streamingaktivitetstyp)"
                },
                timestampMode: {
                    label: "Tidsstämpelläge",
                    description: "Vad tidsstämpeln ska visa",
                    none: "Ingen",
                    sinceDiscordOpen: "Sedan Discord öppnade",
                    sameAsCurrentTime: "Samma som din nuvarande tid (återställs inte efter 24 timmar)",
                    custom: "Anpassad tid"
                },
                startTime: {
                    label: "Starttid (i millisekunder)",
                    description: "Starttidsstämpel i millisekunder (endast för anpassat tidsstämpelläge)"
                },
                endTime: {
                    label: "Sluttid (i millisekunder)",
                    description: "Sluttidsstämpel i millisekunder (endast för anpassat tidsstämpelläge)"
                },
                imageBig: {
                    label: "Stor bildnyckel",
                    description: "Stor bildnyckel (måste laddas upp på fliken Rich Presence)"
                },
                imageBigTooltip: {
                    label: "Bild Stort verktygstips",
                    description: "Stor bild verktygstips"
                },
                imageBigURL: {
                    label: "Stor bild-URL",
                    description: "Klickbar URL för stor bild"
                },
                imageSmall: {
                    label: "Liten bildnyckel",
                    description: "Liten bildnyckel (måste laddas upp på fliken Rich Presence)"
                },
                imageSmallTooltip: {
                    label: "Bild Litet verktygstips",
                    description: "Verktygstips för liten bild"
                },
                imageSmallURL: {
                    label: "Liten bild-URL",
                    description: "Liten bild klickbar URL"
                },
                buttonOneText: {
                    label: "Knapp 1 Text",
                    description: "Knapp 1 text"
                },
                buttonOneURL: {
                    label: "Knapp 1 URL",
                    description: "Knapp 1 URL"
                },
                buttonTwoText: {
                    label: "Knapp 2 Text",
                    description: "Knapp 2 text"
                },
                buttonTwoURL: {
                    label: "Knapp 2 URL",
                    description: "Knapp 2 URL"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Anpassa Discords ljud.",
            search: "Sök ljud",
            placeholder: "Sök på namn eller ID",
            import: "Importera",
            export: "Exportera",
            reset: "Återställ alla",
            debug: "Felsökning",
            toast: {
                error: "Det gick inte att läsa in anpassad ljudfil",
                exported: "Exporterade {{count}}-inställningar (ljudfiler ingår inte)",
                imported: "Inställningarna har importerats",
                importError: "Fel vid import av inställningar. Kontrollera konsolen för detaljer.",
                reset: "Alla åsidosättningar har återställts framgångsrikt!",
                overrideDescription: "Åsidosätt för {{soundName}}",
                previewSound: "Det gick inte att spela upp ljudet.",
                playing: "Det gick inte att spela upp anpassat ljud. Filen kan vara skadad.",
                invalidFile: "Ingen anpassad ljudfil tillgänglig för förhandsvisning",
                uploaded: "Filen laddades upp: {{fileName}}",
                uploadedError: "Fel vid uppladdning av fil: {{error}}",
                invalidExtension: "Ogiltig filtyp. Ladda upp en ljudfil.",
                uploading: "Laddar upp fil...",
                deleted: "Filen har raderats",
                deleteError: "Det gick inte att ta bort filen.",
                loadingError: "Det gick inte att läsa in anpassad ljudfil"
            },
            button: {
                preview: "Förhandsvisning",
                stop: "Stopp",
                volume: "Volym",
                soundSource: "Ljudkälla",
                customFile: "Anpassad fil",
                uploadNew: "Ladda upp ny",
                delete: "Ta bort vald fil"
            },
            option: {
                default: "Standard",
                custom: "Beställnings",
                select: "Välj en fil..."
            },
            type: {
                activityEnd: "Aktivitet slut",
                activityLaunch: "Aktivitetsstart",
                activityUserJoin: "Aktivitet Användare Gå med",
                activityUserLeft: "Aktivitet Användare vänster",
                asmrMessage: "ASMR-meddelande",
                bitMessage: "Bitmeddelande",
                bopMessage: "Bop meddelande",
                callCalling: "Ring Ringer",
                callRinging: "Samtal ringer",
                clipError: "Klippfel",
                clipSave: "Klipp Spara",
                ddrDown: "DDR nere",
                ddrLeft: "DDR vänster",
                ddrRight: "DDR höger",
                ddrUp: "DDR upp",
                deafen: "Döva",
                discodo: "Discodo",
                disconnect: "Koppla från",
                duckyMessage: "Ducky meddelande",
                hangStatusSelect: "Häng Status Välj",
                highfiveClap: "Highfive klapp",
                highfiveWhistle: "Highfive Whistle",
                humanMan: "Mänsklig man",
                lofiMessage: "LoFi meddelande",
                mention1: "Nämn 1 (@roll)",
                mention2: "Nämn 2 (@alla)",
                mention3: "Nämn 3 (@här)",
                message1: "Meddelande 1 (Allmänt)",
                message2: "Meddelande 2 (Svara i server)",
                message3: "Meddelande 3 (DM och grupp-DM)",
                mute: "Stum",
                overlayUnlock: "Lås upp överlägg",
                poggermodeAchievement: "Poggermode Achievement",
                poggermodeApplause: "Poggermode-applåder",
                poggermodeEnabled: "Poggermode aktiverat",
                poggermodeMessage: "Poggermode meddelande",
                pttStart: "PTT Start",
                pttStop: "PTT Stopp",
                reconnect: "Återanslut",
                robotMan: "Robotman",
                stageWaiting: "Stage väntar",
                streamEnded: "Strömmen avslutad",
                streamStarted: "Strömmen startade",
                streamUserJoined: "Streamanvändare gick med",
                streamUserLeft: "Streama användare vänster",
                success: "Framgång",
                undeafen: "Odöva",
                unmute: "Slå på ljudet",
                userJoin: "Användare Gå med",
                userLeave: "Användarledighet",
                userMoved: "Användare flyttad",
                vibingWumpus: "Vibbar Wumpus"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Anpassade tidsstämplar på meddelanden och verktygstips",
            demo: {
                cozy: "Klicka på mig för att byta till Cozy-format",
                compact: "Klicka på mig för att byta till kompakt format",
                lastWeek: "Detta meddelande skickades under den senaste veckan",
                hover: "Håll muspekaren över tidsstämplar för att se verktygstipsformat",
                edit: "Redigera formaten nedan för att se dem liveuppdatering här"
            },
            modal: {
                title: "Hur man använder:",
                moment: "Moment.js formateringsdokumentation",
                hint: "Dessutom kan du använda dessa i dina ingångar:",
                calendar: "möjliggör dynamisk datumformatering som t.ex",
                today: "I dag",
                yesterday: "I går",
                relative: "ger dig tider som t.ex",
                relativeTime: "4 timmar sedan",
                preview: "Förhandsvisning",
                format: "Kalenderformat",
                howTo: "Hur man formaterar [kalender]-värdet om det används i ovanstående tidsstämplar."
            },
            option: {
                formats: {
                    label: "Format",
                    description: "Anpassa tidsstämpelformaten",
                },
                cozyFormat: {
                    label: "Mysigt läge",
                    description: "Tidsformat att använda i meddelanden i mysigt läge"
                },
                compactFormat: {
                    label: "Kompakt läge",
                    description: "Tidsformat i kompakt läge och svävande över meddelanden"
                },
                tooltipFormat: {
                    label: "Verktygstips",
                    description: "Tidsformat att använda på verktygstips"
                },
                ariaLabelFormat: {
                    label: "Aria etikett",
                    description: "Tidsformat att använda på ariaetiketter"
                },
                sameDayFormat: {
                    label: "Samma dag",
                    description: "[kalender] format för idag",
                    default: "[Idag kl.] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Sista dagen",
                    description: "[kalender] format för gårdagen",
                    default: "[Igår kl] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Förra veckan",
                    description: "[kalender]-format för förra veckan"
                },
                sameElseFormat: {
                    label: "Äldre annars",
                    description: "[kalender] format för äldre datum"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Låter dig lägga till en anpassad färg till vilken användare som helst, var som helst! Rekommenderar starkt att använda med typingTweaks och roleColorEverywhere",
            option: {
                dmList: {
                    label: "DM lista",
                    description: "Användare med anpassade färger kommer att få sitt namn färgat i DM-listan"
                },
                colorInServers: {
                    label: "Färg i servrar",
                    description: "Om namnfärger ska ändras inom servrar"
                }
            },
            context: {
                setColor: "Ställ in färg"
            },
            modal: {
                custom: "Anpassad färg",
                pick: "Välj en färg",
                delete: "Ta bort post",
                save: "Spara"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Gör YouTube inbäddade titlar och miniatyrer mindre sensationella, driven av DeArrow",
            option: {
                hideButton: {
                    label: "Göm knapp",
                    description: "Döljer DeArrow-knappen från YouTube-inbäddningar"
                },
                replaceElements: {
                    label: "Byt ut element",
                    description: "Välj vilka element i inbäddningen som ska ersättas",
                    everything: "Allt (titlar och miniatyrer)",
                    title: "Titlar",
                    thumbnail: "Miniatyrer"
                },
                dearrowByDefault: {
                    label: "DeArrow som standard",
                    description: "DeArrow-videor automatiskt"
                }
            },
            tooltip: {
                dearrowed: "Denna inbäddning har deArrowed; klicka för att återställa",
                dearrow: "Klicka för att DeArrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Rensar upp Discord genom att ta bort icke-väsentliga UI-element som profileffekter, butiksflikar, boosts och mer.",
            option: {
                userProfileHeader: {
                    label: "Användarprofil"
                },
                removeNameplate: {
                    label: "Ta bort namnskylten",
                    description: "Ta bort namnskyltar."
                },
                removeProfileEffect: {
                    label: "Ta bort profileffekt",
                    description: "Ta bort profilanimeringseffekter vid öppning."
                },
                removeClanTag: {
                    label: "Ta bort Clan Tag",
                    description: "Ta bort klantaggar."
                },
                alwaysShowUsername: {
                    label: "Visa alltid användarnamn",
                    description: "Visa alltid användarnamn istället för status."
                },
                accessibilityNotice: {
                    label: "Tillgänglighetsmeddelande",
                    description: "Discord har redan ett inbyggt alternativ för användarnamnstil i tillgänglighetsinställningarna."
                },
                friendsListHeader: {
                    label: "Ovanför listan över vänner/DM"
                },
                removeShopAboveDM: {
                    label: "Ta bort Shop Above DM",
                    description: "Ta bort butiker ovanför DM-listan."
                },
                removeQuestsAboveDM: {
                    label: "Ta bort uppdrag ovanför DM",
                    description: "Ta bort uppdrag ovanför DM-listan."
                },
                miscHeader: {
                    label: "Övrigt"
                },
                removeServerBoostInfo: {
                    label: "Ta bort Server Boost Info",
                    description: "Ta bort serverförstärkningsinformation ovanför kanallistan."
                },
                removeBillingSettings: {
                    label: "Ta bort faktureringsinställningar",
                    description: "Ta bort faktureringsinställningar."
                },
                removeGiftButton: {
                    label: "Ta bort presentknapp",
                    description: "Ta bort presentknappen."
                },
                removeUnavailableEmojiPicker: {
                    label: "Ta bort otillgänglig emojiväljare",
                    description: "Ta bort otillgängliga kategorier från emojiväljaren."
                },
                removeAudioMenus: {
                    label: "Ta bort ljudmenyer",
                    description: "Ta bort menyer bredvid mute- och dövknapparna."
                },
                removeButtonTooltips: {
                    label: "Ta bort knappverktygstips",
                    description: "Ta bort knappverktygstips."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Avkoda Base64-innehållet i alla meddelanden och kopiera det avkodade innehållet.",
            right: {
                decode: "Kopiera avkodad (vänsterklick) / Avkoda Base64 (högerklick)",
                copy: "Avkoda Base64 (vänsterklick) / Kopiera avkodad (högerklick)"
            },
            option: {
                clickMethod: {
                    label: "Klicka på Metod",
                    description: "Ändra knappen för att avkoda Base64-innehållet i ett meddelande.",
                    left: "Vänsterklicka för att avkoda Base64-innehållet.",
                    right: "Högerklicka för att avkoda Base64-innehållet."
                }
            },
            modal: {
                title: "Avkodat Base64-innehåll",
                content: "Avkodat innehåll",
                copy: "Kopiera avkodat innehåll {{index}}",
                copied: "Avkodat innehåll kopierat till urklipp!"
            }
        },
        decor: {
            name: "Decor",
            description: "Skapa och använd dina egna avatardekorationer, eller välj din favorit bland förinställningarna.",
            presetPart: "En del av förinställningen {{name}}",
            createdBy: "Skapad av {{author}}",
            copy: "Kopiera förinställt ID",
            file: "Fil",
            your: {
                title: "Dina dekorationer",
                subtitle: "Du kan ta bort dina egna dekorationer genom att högerklicka på dem."
            },
            option: {
                changeDecoration: {
                    label: "Byt dekoration",
                    description: "Aktivera Decor och starta om din klient för att ändra din avatardekoration.",
                    also: "Du kan också komma åt Dekordekorationer från sidan {{profiles}}.",
                    profiles: "Profiler"
                },
                baseUrl: {
                    label: "Bas-URL",
                    description: "Decor API URL"
                },
                agreedToGuidelines: {
                    label: "Godkände riktlinjer",
                    description: "Godkände riktlinjer"
                }
            },
            context: {
                decorationOptions: "Dekorationsalternativ",
                copyHash: "Kopiera dekorationshash",
                deleteDecoration: "Ta bort dekoration"
            },
            alert: {
                delete: {
                    title: "Ta bort dekoration",
                    body: "Är du säker på att du vill ta bort {{decoration}}?",
                    confirm: "Radera",
                    cancel: "Avboka"
                },
                logout: {
                    title: "Logga ut",
                    body: "Är du säker på att du vill logga ut från Decor?",
                    confirm: "Logga ut",
                    cancel: "Avboka"
                }
            },
            button: {
                change: "Byt dekoration",
                remove: "Ta bort dekoration",
                apply: "Tillämpas",
                cancel: "Avboka",
                browse: "Bläddra",
                submit: "Skicka in för granskning",
                continue: "Fortsätta",
                back: "Gå tillbaka"
            },
            tooltip: {
                pendingReview: "Du har redan en dekoration som väntar på granskning",
                pending: "Väntar på granskning"
            },
            join: {
                tooltip: "Gå med i Decors Discord-server för aviseringar om din dekorationsrecension och när nya förinställningar släpps",
                button: "Discord-server"
            },
            create: {
                title: "Skapa dekoration",
                notViolate: "Se till att din dekoration inte bryter mot {{guidelines}} innan du skickar in den.",
                guidelines: "riktlinjerna",
                file: "Filen ska vara APNG eller PNG.",
                fileHolder: "Välj en fil",
                name: "This name will be used when referring to this decoration.",
                nameHolder: "Companion Cube",
                nameTitle: "Namn"
            },
            help: {
                update: "För att få uppdateringar om din dekorationsrecension, gå med i {{server}} och tillåt direktmeddelanden.",
                server: "Decor's Discord Server"
            },
            guidelines: {
                hold: "Hålla fast",
                suspended: "Genom att skicka in en dekoration godkänner du {{guidelines}}. Att inte läsa dessa riktlinjer kan leda till att ditt konto stängs av från att skapa fler dekorationer i framtiden.",
                guidelines: "riktlinjerna"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin för att ta temaskärmdumpar - censorer som identifierar bilder och text.",
            toolbox: {
                toggle: "Växla demonstration"
            },
            keycode: "För att ändra din nyckelkod, kolla in {{keycode}}!",
            this: "detta verktyg",
            okay: "Okej!",
            option: {
                keyBind: {
                    label: "Nyckelbindning",
                    description: "Knappen för att växla tema när den trycks ned"
                },
                soundVolume: {
                    label: "Ljudvolym",
                    description: "Hur högt växlingsljudet är (0 för att inaktivera)"
                },
                showConfirmationModal: {
                    label: "Visa Confirmation Modal",
                    description: "Visa en modal för att påminna dig om genvägen"
                }
            },
            switch: {
                note: "Du kan återaktivera den här inställningen senare",
                disable: "Inaktivera modal?"
            },
            shortcut: "Detta kommer att censurera all text! För att inaktivera detta, kom ihåg genvägen:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Dev Companion plugin. Vänligen rapportera allt som inte fungerar eller beter sig konstigt (förmodligen en bugg) till MutanPlex, antingen genom ping eller DM. Tack!",
            reconnect: "Återanslut",
            option: {
                notifyOnAutoConnect: {
                    label: "Meddela på Auto-Connect",
                    description: "Om du ska meddela när Dev Companion har anslutit automatiskt."
                },
                usePatchedModule: {
                    label: "Använd patchad modul",
                    description: "På extraktförfrågningar, svara med den aktuella patchade modulen (om den är patchad) istället för originalet."
                },
                reloadAfterToggle: {
                    label: "Ladda om efter växling",
                    description: "Ladda om efter att ett \"inaktivera/aktivera plugin\"-kommando har tagits emot."
                }
            },
            toast: {
                title: "Dev Companion ansluten",
                connected: "Ansluten till WebSocket",
                disconnected: "Dev Companion frånkopplad",
                error: "Dev Companion-fel",
                reload: "Omladdning behövs",
                failed: "Det gick inte att starta beroenden: {{failures}}",
                close: "Nära",
                stopping: "Fel när plugin {{plugin}} stoppades",
                starting: "Fel vid start av plugin {{plugin}}",
                noMessage: "Inget felmeddelande",
                noReason: "Ingen anledning ges"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Inaktiverar att automatiskt sparkas från ett DM-röstsamtal efter 3 minuter och flyttas till en AFK-röstkanal."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Inaktiverar kameror i ett samtal som standard"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Aktiverar Discord-utvecklarbannern, som visar bygg-ID",
            about: "Formatet för Discord Dev Banner. Du kan använda följande variabler:",
            preview: "Förhandsvisning:",
            empty: "Formatet får inte vara tomt.",
            variables: {
                discord: {
                    title: "Discord-variabler",
                    icon: "Discord-ikonen",
                    banner: "Dev banner ikon",
                    channel: "Discord-byggkanal (t.ex. stabil)",
                    build: "Discord-byggnummer (t.ex. 123456)",
                    hash: "Discord build-hash (t.ex. 123456)"
                },
                plexcord: {
                    title: "Plexcord-variabler",
                    icon: "Plexcord ikon",
                    name: "Name of Plexcord",
                    version: "Version av Plexcord (t.ex. 1.0.0)",
                    hash: "Plexcord build-hash (t.ex. 123456)",
                    platform: "Plattform Plexcord körs på (t.ex. Dev Build)"
                },
                plextron: {
                    title: "Plextron-specifika variabler",
                    hashShort: "Plextron build-hash (t.ex. 123456789)",
                    platformType: "Plattform Plextron körs på (t.ex. Dev Build)"
                },
                client: {
                    title: "Klientvariabler",
                    icon: "Skrivbordsikon",
                    name: "The name of the client (e.g. Discord Canary)",
                    version: "Klientens version (t.ex. 1.0.0)",
                },
                electron: {
                    title: "Elektronvariabler",
                    icon: "Elektronikon",
                    version: "Elektronversion (t.ex. 25.0.0)"
                },
                chromium: {
                    title: "Kromvariabler",
                    icon: "Kromikon",
                    version: "Krommotorversion (t.ex. 125.0.0.0)"
                },
                misc: {
                    title: "Diverse variabler",
                    newline: "Newline karaktär"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Varnar dig om ditt meddelande innehåller en term i AutoMod-förinställningslistan",
            alert: {
                title: "Hålla fast!",
                content: "Ditt meddelande innehåller en term i AutoMod-förinställningslistan (Term: '{{trigger}}').",
                content2: "Det finns en stor chans att ditt meddelande kommer att blockeras och eventuellt modereras av en servermoderator.",
                confirm: "Skicka ändå",
                cancel: "Avboka"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Avrundar alltid relativa tidsstämplar nedåt, så 7,6y blir 7y istället för 8y"
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Lägger till dra-och-släpp-funktioner till favoritkänslor"
        },
        dragify: {
            name: "Dragify",
            description: "Släpp användare, kanaler eller servrar i chatten för att infoga omnämnanden eller inbjudningar.",
            option: {
                userOutput: {
                    label: "Användarutgång",
                    description: "Användarens utgång.",
                    mention: "Nämna",
                    id: "Användar-ID"
                },
                channelOutput: {
                    label: "Kanalutgång",
                    description: "Kanalavgångsutgång.",
                    mention: "#kanal Omnämnande",
                    link: "Kanallänk",
                },
                inviteExpireAfter: {
                    label: "Inbjudan löper ut efter",
                    description: "Inbjudan löper ut",
                    never: "Aldrig",
                    thirtyMinutes: "30 minuter",
                    oneHour: "1 timme",
                    sixHours: "6 timmar",
                    twelveHours: "12 timmar",
                    oneDay: "1 dag",
                    sevenDays: "7 dagar"
                },
                inviteMaxUses: {
                    label: "Bjud in Max Uses",
                    description: "Maximal användning för inbjudan",
                    noLimit: "Ingen gräns",
                    one: "1 Använd",
                    five: "5 användningsområden",
                    ten: "10 användningsområden",
                    twentyFive: "25 användningsområden",
                    fifty: "50 användningsområden",
                    hundred: "100 användningsområden"
                },
                inviteTemporaryMembership: {
                    label: "Bjud in tillfälligt medlemskap",
                    description: "Bevilja tillfälligt medlemskap.",
                },
                reuseExistingInvites: {
                    label: "Återanvänd befintlig inbjudan",
                    description: "Återanvänd en befintlig inbjudan istället för att skapa en ny."
                },
                allowChatBodyDrop: {
                    label: "Tillåt Chat Body Drop",
                    description: "Tillåt att du släpper in i chatthuvudet för att infoga text."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify kunde inte hantera släpp.",
                },
                invite: {
                    created: "Inbjudan har skapats.",
                    unable: "Det gick inte att skapa inbjudan.",
                    noChannel: "Ingen kanal tillgänglig för inbjudningar.",
                }
            },
            ghost: {
                user: "Användare",
                server: "Server",
                dm: "Direktmeddelanden",
                badge: {
                    channel: "kanal",
                    thread: "tråd",
                    voice: "röst",
                    forum: "forum",
                    media: "media",
                    announcement: "meddelande",
                    dm: "dm",
                    user: "användare",
                    server: "server"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Markera och inspektera element enkelt.",
            modal: {
                recording: "Inspelning...",
                reset: "Återställa"
            },
            option: {
                keybind: {
                    label: "Nyckelbindning",
                    description: "Växla överstrykningspenna"
                },
                showClasses: {
                    label: "Visa klasser",
                    description: "Visa elementets CSS-klassnamn i verktygstipset"
                },
                showId: {
                    label: "Visa ID",
                    description: "Visa elementets ID-attribut i verktygstipset"
                },
                showFont: {
                    label: "Visa teckensnitt",
                    description: "Visa den beräknade teckensnittsfamiljen och teckenstorleken"
                },
                showPadding: {
                    label: "Visa stoppning",
                    description: "Visa elementets utfyllnadsvärden"
                },
                showMargin: {
                    label: "Visa marginal",
                    description: "Visa elementets marginalvärden"
                },
                showBorderRadius: {
                    label: "Visa kantradie",
                    description: "Visa elementets ramradievärden"
                },
                showPosition: {
                    label: "Visa position",
                    description: "Visa elementets CSS-positionstyp och z-index"
                },
                showDisplay: {
                    label: "Visa Display",
                    description: "Visa elementets visningstyp tillsammans med flex- eller rutnätsegenskaper"
                }
            },
            toast: {
                copied: {
                    color: "Kopierade färg till urklipp!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Spela soundboardljud när du kopplar från rösten.",
            button: "Ställ in som globalt utgångsljud",
            toast: {
                failedToPlay: "hoppsan! Något gick fel."
            },
            option: {
                soundGuildId: {
                    label: "Sound Guild ID",
                    description: "Välj servern som innehåller ljudet.",
                    placeholder: "Välj en server..."
                },
                soundId: {
                    label: "Ljud-ID",
                    description: "Ange ID för ljudet du vill spela.",
                    placeholder: "Ange ljud-ID..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Aktivera åtkomst till experiment och andra funktioner endast för utvecklare i Discord!",
            modal: {
                about: {
                    title: "Mer information",
                    body: "Du kan öppna Discords DevTools via {{key}}"
                },
                warning: {
                    title: "Hålla fast!!",
                    body: "Experiment är ej släppta Discord-funktioner. De kanske inte fungerar, eller till och med bryter din klient eller får ditt konto inaktiverat.",
                    notReponsible: "Använd bara experiment om du vet vad du gör. Plexcord ansvarar inte för eventuella skador som orsakats av aktivering av experiment.",
                    useAtOwnRisk: "Om du inte vet vad ett experiment gör, ignorera det. Fråga oss inte heller vad experiment gör; vi vet nog inte.",
                    serverSideFeatures: "Nej, du kan inte använda funktioner på serversidan som att markera rutan \"Skicka till klient\"."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Verktygsfältets Dev-meny",
                    description: "Ändra verktygsfältsknappen Hjälp (?) (överst till höger i chatten) till Discords utvecklarmeny"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Låter dig exportera meddelanden till filer – ett enda meddelande, alla meddelanden från en användare eller alla kanalmeddelanden",
            option: {
                maxMessages: {
                    label: "Max meddelanden",
                    description: "Maximalt antal meddelanden att exportera (0 = obegränsat)"
                },
                includeAttachments: {
                    label: "Inkludera bilagor",
                    description: "Inkludera bilagainformation i exporter"
                },
                includeEmbeds: {
                    label: "Inkludera inbäddningar",
                    description: "Inkludera inbäddningsinformation i exporter"
                },
                includeReactions: {
                    label: "Inkludera reaktioner",
                    description: "Inkludera reaktionsinformation i export"
                },
                includeComponents: {
                    label: "Inkludera komponenter",
                    description: "Inkludera komponentinformation i exporter"
                }
            },
            message: {
                invalid: "Ogiltigt meddelande — ingen författare",
                unknownUser: "Okänd användare",
                botEmbed: "Bot Bädda in meddelande",
                attachments: "Bilagor",
                unknown: "Okänd",
                noUrl: "Ingen URL",
                embeds: "Bädda in",
                title: "Titel",
                description: "Beskrivning",
                url: "URL",
                footer: "Sidfot",
                author: "Författare",
                fields: "Fält",
                components: "Komponenter",
                component: "Komponent",
                interactiveElement: "Interaktivt element",
                reactions: "Reaktioner",
                errorFormatting: "Fel vid formatering av meddelandet",
                unknownError: "Okänt fel",
                header: "{{titlePrefix}} {{displayName}} i {{channelName}}",
                from: "Meddelanden från",
                direct: "Direktmeddelanden",
                exported: "Exporterad på",
                total: "Totalt antal meddelanden"
            },
            toast: {
                export: {
                    title: "Exportera meddelanden",
                    body: "Det gick inte att exportera meddelandet"
                },
                noMessages: {
                    title: "Exportera meddelanden",
                    notFoundUser: "Inga meddelanden hittades från denna användare i den här kanalen",
                    notFoundChannel: "Inga meddelanden hittades i den här kanalen"
                },
                failed: {
                    title: "Exportera meddelanden",
                    body: "Det gick inte att exportera meddelanden"
                },
                userNotFound: {
                    title: "Exportera meddelanden",
                    body: "Användaren hittades inte"
                },
                complete: {
                    title: "Exporten är klar",
                    saved: "Filen sparad",
                    downloaded: "Fil nedladdad",
                    messages: "meddelanden"
                }
            },
            context: {
                exportMessage: "Exportera detta meddelande",
                exportAll: "Exportera alla meddelanden från {{user}}",
                user: "Användare",
                exportAllChannel: "Exportera alla kanalmeddelanden"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Låter dig klona emotes och klistermärken till din egen server (högerklicka på dem)",
            modal: {
                title: "Anpassat namn",
                invalidName: "Namnet måste vara mellan 2 och 32 tecken och endast innehålla alfanumeriska tecken"
            },
            toast: {
                success: "Klonad {{name}} till {{guild}} framgångsrikt!",
                yourServer: "din server",
                failed: "Det gick inte att klona:",
                console: "Något gick fel (kolla konsolen!)"
            },
            context: {
                clone: "Klona {{type}}",
                cloneName: "Klona {{data}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Pausa klienten när du trycker på F8 med DevTools (+ brytpunkter) öppna."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Låter dig skicka falska emojis/klistermärken, använda Nitro-teman och streama i Nitro-kvalitet",
            option: {
                enableEmojiBypass: {
                    label: "Aktivera Emoji Bypass",
                    description: "Tillåter att falska emojis skickas (förbigår även saknad behörighet att använda anpassade emojis)"
                },
                emojiSize: {
                    label: "Emoji storlek",
                    description: "Storleken på emojierna vid sändning"
                },
                transformEmojis: {
                    label: "Förvandla emojis",
                    description: "Om falska emojis ska förvandlas till riktiga"
                },
                enableStickerBypass: {
                    label: "Aktivera Sticker Bypass",
                    description: "Tillåter sändning av falska klistermärken (förbigår även saknad behörighet att använda klistermärken)"
                },
                stickerSize: {
                    label: "Klistermärkesstorlek",
                    description: "Storlek på klistermärkena vid sändning"
                },
                transformStickers: {
                    label: "Förvandla klistermärken",
                    description: "Om falska klistermärken ska förvandlas till riktiga"
                },
                transformCompoundSentence: {
                    label: "Förvandla sammansatt mening",
                    description: "Om falska klistermärken och emojis ska förvandlas till sammansatta meningar (meningar med mer innehåll än bara den falska emojin eller dekallänken)"
                },
                enableStreamQualityBypass: {
                    label: "Aktivera förbikoppling av strömkvalitet",
                    description: "Tillåt streaming i Nitro-kvalitet"
                },
                useStickerHyperLinks: {
                    label: "Använd klistermärkeshyperlänkar",
                    description: "Om man ska använda hyperlänkar när man skickar falska klistermärken"
                },
                useEmojiHyperLinks: {
                    label: "Använd Emoji-hyperlänkar",
                    description: "Om du ska använda hyperlänkar när du skickar falska emojis"
                },
                hyperLinkText: {
                    label: "Hyperlänktext",
                    description: "Vilken text hyperlänken ska använda. {{NAME}} kommer att ersättas med emoji-/dekalnamnet."
                },
                disableEmbedPermissionCheck: {
                    label: "Inaktivera kontroll av inbäddningsbehörighet",
                    description: "Om du ska inaktivera kontrollen av inbäddningstillstånd när du skickar falska emojis och klistermärken"
                }
            },
            modal: {
                sticker: "Detta är ett FakeNitro-klistermärke och återges som ett riktigt klistermärke bara för dig. Visas som en länk till icke-pluginanvändare.",
                emoji: "Detta är en FakeNitro-emoji och återges som en riktig emoji bara för dig. Visas som en länk till icke-pluginanvändare."
            },
            alert: {
                notice: {
                    title: "Hålla fast!",
                    body: "Du försöker skicka/redigera ett meddelande som innehåller en FakeNitro-emoji eller klistermärke; du har dock inte behörighet att bädda in länkar i den aktuella kanalen. Är du säker på att du vill skicka det här meddelandet? Dina FakeNitro-föremål visas endast som en länk.",
                    footer: "Du kan inaktivera denna varning i FakeNitro-inställningarna",
                    confirm: "Skicka ändå",
                    cancel: "Avboka",
                    secondaryConfirm: "Visa inte igen"
                },
                apngSticker: {
                    title: "Hålla fast!",
                    body: "Du kan inte skicka det här meddelandet eftersom det innehåller ett animerat FakeNitro-klistermärke och du har inte behörighet att bifoga filer i den aktuella kanalen. Ta bort dekalen för att fortsätta."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Tillåter profiltema genom att dölja färgerna i din bio tack vare osynlig 3y3-kodning",
            button: {
                copy: "Kopiera 3y3"
            },
            modal: {
                usage: "Användande",
                preview: "Förhandsvisning",
                intro: "När du har aktiverat detta plugin kommer du att se anpassade färger i profilerna för andra personer som använder kompatibla plugins.",
                setColor: "Så här ställer du in dina egna färger:",
                step1: "• Använd färgväljarna nedan för att välja dina färger",
                step2: "• Klicka på knappen {{copy}}",
                step3: "• Klistra in den osynliga texten var som helst i din biografi",
                pickers: "Färgväljare",
                primary: "Primär",
                accent: "Accent"
            },
            option: {
                nitroFirst: {
                    label: "Nitro först",
                    description: "Standardfärgkälla om båda finns",
                    nitro: "Nitro färger",
                    fake: "Falska färger"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Tillåter profiltema och profileffekter genom att dölja färgerna och effekterna i din bio tack vare osynlig 3y3-kodning",
            option: {
                prioritizeNitro: {
                    label: "Prioritera Nitro",
                    description: "Källa att prioritera",
                    nitro: "Nitro",
                    aboutMe: "Om mig"
                },
                hideBuilder: {
                    label: "Hide Builder",
                    description: "Göm FPTE Builder på inställningssidorna för användarprofil och serverprofiler"
                }
            },
            modal: {
                primary: "Primär",
                accent: "Accent",
                effect: "Effekt",
                usage: {
                    title: "Användande",
                    intro: "Efter att ha aktiverat detta plugin kommer du att se anpassade temafärger och effekter i profilerna för andra som använder detta plugin.",
                    setColor: "Så här ställer du in dina egna färger och effekter:",
                    step1: "Gå till dina profilinställningar",
                    step2: "Använd FPTE Builder för att välja färger och effekt för ditt profiltema",
                    step3: "Klicka på knappen {{copy}}",
                    step4: "Klistra in den osynliga texten var som helst i din bio"
                }
            },
            toast: {
                copied: "FPTE kopierad till urklipp!",
                empty: "FPTE Builder är tom; inget att kopiera!"
            },
            button: {
                copyFPTE: "Kopiera FPTE",
                reset: "Återställa",
                preview: "FPTE Builder Preview",
                buildBackwards: "Bygg bakåtkompatibel FPTE",
                moreCharacters: "Kommer att använda fler tecken"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Lägger till en papperskorgsikon för att radera kanaler",
            option: {
                keyBind: {
                    label: "Nyckelbindning",
                    description: "Knappen för att växla papperskorgen när den trycks ned."
                },
                reqCtrl: {
                    label: "Kräv kontroll",
                    description: "Kräv att kontrolltangenten hålls inne."
                },
                reqShift: {
                    label: "Kräv Shift",
                    description: "Kräv att Shift-tangenten hålls nedtryckt."
                },
                reqAlt: {
                    label: "Kräv Alt",
                    description: "Kräv att Alt-tangenten hålls inne."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Sätter din favorit-emoji först i emoji-autokompletteringen och tillhandahåller även emoji-alias.",
            option: {
                aliases: {
                    label: "Alias",
                    description: "Hantera dina emoji-alias."
                },
                clearAll: {
                    label: "Rensa alla",
                    description: "Ta bort alla alias."
                }
            },
            modal: {
                clear: {
                    title: "Ta bort alla alias",
                    description: "Detta tar bort alla emoji-alias du har sparat.",
                    confirm: "Ta bort alla alias"
                },
                set: {
                    title: "Ställ in Alias",
                    description: "Ange ett alias för {{emoji}}",
                    placeholder: "Alias, t.ex. 'glad'",
                    save: "Spara",
                    error: "Duplicera alias"
                }
            },
            toast: {
                set: "Alias ​​inställt för {{emoji}}",
                clearAll: "Raderade alla emoji-alias",
                failedDeleted: "Det gick inte att ta bort alias",
                removed: "Borttaget alias: {{alias}}",
                failedRemove: "Det gick inte att ta bort alias",
                duplicate: "Duplicera alias",
                failedSave: "Det gick inte att spara aliaset."
            },
            button: {
                edit: "Redigera alias",
                set: "Ange alias"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "Lägger till ett sökfält till favorit-GIF-filer.",
            placeholder: "Sök efter favorit-GIF-filer",
            option: {
                searchOption: {
                    label: "Sökalternativ",
                    description: "Den del av webbadressen du vill söka efter",
                    url: "Hela webbadressen",
                    path: "Endast sökväg (/somegif.gif)",
                    hostandpath: "Host & Path (tenor.com somgif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "Favorita vilken bild som helst",
            noFiles: "Inga filer matchar din sökning.",
            searchPlaceholder: "Sök filer",
            media: "Media",
            demoText: "Klicka på stjärnan för att favoritmarkera en fil.\nFavoritfiler visas här!",
            fetchError: "Kunde inte hämta {filename}",
            uploadError: "Kunde inte ladda upp {filename}"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Lägger till en nedladdningsknapp i det övre högra hörnet av filer"
        },
        findReply: {
            name: "FindReply",
            description: "Hoppar till det tidigaste svaret på ett meddelande i en kanal (låter dig följa tidigare konversationer lättare).",
            context: {
                jump: "Hoppa till svar"
            },
            toast: {
                navigate: "Använd den nedre panelen för att navigera mellan svaren.",
                container: "Det gick inte att hitta behållarelementet.",
                couldntFind: "Kunde inte hitta svarsmeddelandet."
            },
            option: {
                includePings: {
                    label: "Inkludera Pings",
                    description: "Kommer också att söka efter meddelanden som @ författaren direkt"
                },
                includeAuthor: {
                    label: "Inkludera författare",
                    description: "Kommer också att söka efter meddelanden som svarar till författaren i allmänhet, inte bara det exakta meddelandet"
                },
                hideButtonIfNoReply: {
                    label: "Dölj knapp om inget svar",
                    description: "Döljer knappen om det inte finns några svar på meddelandet"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Tar bort gapet mellan kodblock och texten under dem"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Åtgärdar filtillägg genom att byta namn på dem till ett kompatibelt format som stöds om möjligt"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Förbättrar kvaliteten på bilderna genom att tvinga originalkällan att användas",
            option: {
                originalImagesInChat: {
                    label: "Originalbilder i chatt",
                    description: "Ladda även in originalbilden i chatten. VARNING: Läs varningarna ovan"
                }
            },
            modal: {
                about: {
                    title: "Standardbeteendet är följande:",
                    body: "— I chatten kommer optimerade men fullupplösta bilder att laddas.",
                    body2: "— I bildmodal kommer originalbilden att laddas.",
                    body3: "Du kan också aktivera originalbilder i chatten, men akta dig för följande varningar:",
                    warning: "— Animerade bilder (GIF, WebP, etc.) i chatten kommer alltid att animeras, oavsett om appen är fokuserad.",
                    warning2: "— Kan orsaka eftersläpning.",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Fixar att Spotify-inbäddningar blir otroligt högljudda genom att låta dig anpassa volymen",
            option: {
                volume: {
                    label: "Volym",
                    description: "Volymen % som ska ställas in för Spotify-inbäddningar. Allt över 10 % är väldigt högt"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Förbigår YouTube-videor som blockeras från visning på Discord (till exempel av UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Lägger till ett Följ-alternativ i användarens snabbmeny för att alltid vara i samma VC som dem",
            indicatorTooltip: "Efter {{user}} (klicka för att utlösa manuellt, högerklicka för att sluta följa)",
            unknownUser: "Okänd användare",
            option: {
                executeOnFollow: {
                    label: "Kör på Följ",
                    description: "Se till att vara i samma VC när du följer en användare"
                },
                onlyManualTrigger: {
                    label: "Endast manuell trigger",
                    description: "Aktivera endast vid klick på indikatorn"
                },
                followLeave: {
                    label: "Följ Leave",
                    description: "Lämna också när den efterföljande användaren lämnar"
                },
                autoMoveBack: {
                    label: "Auto Flytta tillbaka",
                    description: "Flytta automatiskt tillbaka till VC för den följe användaren när du flyttas"
                },
                followUserId: {
                    label: "Följ användar-ID",
                    description: "Följt användar-ID"
                },
                channelFull: {
                    label: "Kanalen är full",
                    description: "Försök att flytta dig till kanalen när den inte längre är full"
                }
            },
            toast: {
                channelFull: "Kanalen är full",
                newVc: "Följde användare till en ny röstkanal",
                insufficientPermissions: "Otillräckliga behörigheter för att komma in i röstkanalen",
                sameVc: "Du är redan i samma kanal",
                disconnect: "Följt användare vänster; osammanhängande",
                notFollowing: "Följd användare vänster, men följer inte frånkoppling",
                notVc: "Följd användare finns inte i en röstkanal"
            },
            context: {
                follow: "Följ användare",
                unfollow: "Sluta följa användare"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Laddar alla teckensnitt från Google Fonts",
            option: {
                selectedFont: {
                    label: "Valt teckensnitt",
                    description: "För närvarande valt typsnitt"
                },
                fontSearch: {
                    label: "Teckensnittssökning",
                    description: "Sök och välj Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Applicera på kodblock",
                    description: "Använd teckensnittet på kodblock"
                }
            },
            toast: {
                failedLoad: "Det gick inte att läsa in teckensnitt"
            },
            modal: {
                settings: {
                    title: "Sök på Google Fonts",
                    description: "Välj ett teckensnitt för att tillämpa det",
                    placeholder: "Sök teckensnitt...",
                    previewText: "Den kvicka bruna räven hoppar över den lata hunden",
                    authors: "Av {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Tvinga ägarkronan bredvid användarnamn även om servern är stor."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Om en vidarebefordran misslyckas, skicka den som ett vanligt meddelande; tillåter också NSFW forwards",
            option: {
                forwardPreface: {
                    label: "Framåt Förord",
                    description: "Vad ska det vidarebefordrade innehållet inledas med"
                }
            },
            context: {
                attachments: "Bilagor",
                forwarded: "Vidarebefordrat från"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Låter dig skicka ditt meddelande i ett konstigt teckensnitt med kommandot /freaky.",
            command: {
                freaky: "Det är galet.",
                message: "Gör ditt meddelande galet"
            },
            option: {
                addFreakyEnding: {
                    label: "Lägg till Freaky Ending",
                    description: "Lägg till 👅 eller ❤️ i slutet"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Skriver om och filtrerar snabbväxlingsresultaten för att vara dina vanligaste kanaler."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Lägger till ett /friendcloud-kommando för att visualisera de användare du interagerar mest med",
            command: {
                friendcloud: {
                    description: "Visualisera ditt vänmoln",
                    count: "Antal användare att visa",
                    mustHigher: "Antalet måste vara 1 eller högre!",
                    noAffinities: "Inga affiniteter hittades. Kontrollera dina [sekretessinställningar](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Inga giltiga användare hittades i affiniteter. Kontrollera dina [sekretessinställningar](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Kunde inte skapa bilden :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Skapa vänkoder för att enkelt lägga till vänner",
            card: {
                expires: "Går ut <t:{{expiration}}:R> • {{uses}}/{{maxUses}} använder",
                copy: "Kopiera",
                copied: "Kopierade!",
                codes: "Dina vänkoder",
                count: "Vänkoder - {{invites}}",
                create: "Skapa vänkod",
                revoke: "Återkalla alla vänkoder",
                loading: "Belastning...",
                dontHave: "Du har inga vänkoder."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Skapa och hantera länkar för väninbjudningar via snedstreckkommandon (/skapa väninbjudan, /visa väninbjudningar, /återkalla väninbjudningar).",
            command: {
                create: {
                    description: "Genererar en väninbjudningslänk.",
                    message: "discord.gg/{{code}}`\n· Upphör <t:{{expiration}}:R>\n· Max användningsområden: {{uses}}"
                },
                view: {
                    description: "Visa en lista över alla genererade väninbjudningar.",
                    message: "_discord.gg/{{code}}_ \n· Upphör att gälla: <t:{{expiration}}:R> \n· Använda tider: {{uses}}/{{maxUses}}",
                    noInvites: "Du har inga aktiva väninbjudningar."
                },
                revoke: {
                    description: "Återkallar alla genererade väninbjudningar.",
                    message: "Alla väninbjudningar har återkallats."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Lägger till märken som visar hur länge du har varit vän med en användare",
            badge: {
                sprout: {
                    name: "Sprout",
                    description: "Din vänskap har precis börjat"
                },
                blooming: {
                    name: "Blooming",
                    description: "Din vänskap närmar sig! (1 månad)"
                },
                burning: {
                    name: "Burning",
                    description: "Din vänskap har nått terminal hastighet (3 månader)"
                },
                fighter: {
                    name: "Fighter",
                    description: "Din vänskap är stark (6 månader)"
                },
                star: {
                    name: "Star",
                    description: "Din vänskap har pågått ett tag (1 år)"
                },
                royal: {
                    name: "Royal",
                    description: "Din vänskap har gått igenom tjockt och tunt - hela 2 år!"
                },
                besties: {
                    name: "Besties",
                    description: "Hur klarar du ens detta??? (5 år)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Visar när du blev vän med någon i användarens popout",
            section: "Vänner sedan"
        },
        friendTags: {
            name: "FriendTags",
            description: "Låter dig filtrera efter anpassade taggar i Quick Switcher genom att starta en sökning med &",
            modal: {
                name: "Name",
                users: "Användare (avgränsade med komma)",
                userlist: "Användarlista (klicka på en användare för att ta bort)",
                remove: "Ta bort",
                add: "Tillägga",
                tag: "Märka",
                removeFrom: "Ta bort från",
                addTo: "Lägg till"
            },
            option: {
                tagConfiguration: {
                    label: "Taggkonfiguration",
                    description: "Taggkonfigurationskomponenten"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Gör att meddelandekontextmenyn i meddelandesökresultat har alla alternativ du kan förvänta dig"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Får användaromnämnanden i chatboxen att ha fler funktioner, som att vänster-/högerklicka"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Får avatarer att ta upp hela VC-brickan"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Lägger till en växling till användarens popout för att visa/dölja din spelaktivitet",
            tooltip: "Växla spelaktivitet",
            gameActivity: {
                enabled: "Spelaktivitet aktiverad",
                disabled: "Spelaktivitet inaktiverad"
            },
            option: {
                oldIcon: {
                    label: "Gammal ikon",
                    description: "Använd den gamla ikonstilen från innan Discord-ikonens redesign"
                },
                location: {
                    label: "Plats",
                    description: "Var ska du visa växlingsknappen för spelaktivitet",
                    panel: "Bredvid Mute/Deafen",
                    toolbox: "Plexcord verktygslåda"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Ett sött spöke dyker upp om du inte svarar på deras DM",
            modal: {
                title: "Spökade användare",
                no: "Inga spökade användare",
                unghost: "unghost",
                unknown: "Okänd",
                unnamedGroup: "Namnlös grupp",
                unknownUser: "Okänd användare",
                clearAll: "Rensa alla",
                noGhost: "Inga spöken här!",
                clear: "Rensa"
            },
            option: {
                showIndicator: {
                    label: "Visa indikator",
                    description: "Visa spökräknaren överst i serverlistan"
                },
                showDmIcons: {
                    label: "Visa DM-ikoner",
                    description: "Visa spökikoner bredvid enskilda DM"
                },
                ignoreGroupDms: {
                    label: "Ignorera grupp-DM",
                    description: "Uteslut alla grupp-DM från spökbilder"
                },
                exemptedChannels: {
                    label: "Undantagna kanaler",
                    description: "Kommaseparerad lista över kanal-ID:n som ska undantas från spökbilder (högerklicka på en DM-kanal för att kopiera dess ID)"
                },
                ignoreBots: {
                    label: "Ignorera bots",
                    description: "Ignorera DM från bots"
                },
                maxInactiveTimeMs: {
                    label: "Maximal inaktiv tid",
                    description: "Endast spöke-DM:ar som är aktiva inom denna tidsram",
                    no: "Ingen gräns",
                    oneHour: "1 timme",
                    oneDay: "1 dag",
                    oneWeek: "1 vecka",
                    oneMonth: "1 månad"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Låter dig skapa samlingar av GIF-filer",
            context: {
                copyImageLink: "Kopiera bildlänk",
                copyUrl: "Kopiera URL",
                collection: {
                    add: "Lägg till i samlingen",
                    gif: "GIF-samlingar",
                    delete: "Ta bort samling",
                    create: "Skapa samling",
                    remove: "Ta bort",
                    information: "Insamlingsinformation",
                    name: "Name",
                    gifs: "GIF-filer",
                    created: "Skapad på",
                    updated: "Senast uppdaterad",
                    close: "Nära",
                    rename: "Döpa om",
                    move: "Flytta till samling",
                    select: "Välj en samling att flytta objektet till"
                },
                gif: {
                    information: "Information",
                    added: "Lades till kl",
                    width: "Bredd",
                    height: "Höjd",
                    close: "Nära"
                }
            },
            option: {
                itemPrefix: {
                    label: "Artikelprefix",
                    description: "Prefixet för GIF-objekt"
                },
                collectionPrefix: {
                    label: "Samlingsprefix",
                    description: "Prefixet för samlingar"
                },
                onlyShowCollections: {
                    label: "Visa endast samlingar",
                    description: "Visa endast samlingar"
                },
                stopWarnings: {
                    label: "Stoppvarningar",
                    description: "Stoppa borttagningsvarningar"
                },
                showCopyImageLink: {
                    label: "Visa länken Kopiera bild",
                    description: "Visa alternativet {{copyImageLink}} i snabbmenyer"
                },
                preventDuplicates: {
                    label: "Förhindra dubbletter",
                    description: "Förhindra att samma GIF läggs till i en samling flera gånger"
                },
                defaultEmptyCollectionImage: {
                    label: "Standard tom samlingsbild",
                    description: "Bilden/GIF:en som kommer att visas när en samling inte har några bilder/GIF:er"
                },
                collectionsSortType: {
                    label: "Sorteringstyp för samlingar",
                    description: "Typen av sortering för samlingar"
                },
                collectionsSortOrder: {
                    label: "Sorteringsordning för samlingar",
                    description: "Sorteringsordningen för samlingar"
                },
                collectionsSort: {
                    label: "Samlingar Sortera",
                    description: "Bestäm hur du ska sortera samlingar",
                    title: "Sortera samlingar",
                    sortDescription: "Välj ett sorteringskriterium för dina samlingar",
                    sortBy: "Sortera efter",
                    name: "Name",
                    creationDate: "Skapandedatum",
                    modifiedDate: "Ändrat datum",
                    ascending: "Stigande",
                    descending: "Fallande"
                },
                importGifs: {
                    label: "Importera GIF-filer",
                    description: "Importera samlingar",
                    button: "Importera samlingar"
                },
                exportGifs: {
                    label: "Exportera GIF-filer",
                    description: "Exportera samlingar",
                    button: "Exportera samlingar"
                },
                resetCollections: {
                    label: "Återställ samlingar",
                    description: "Återställ samlingar till standard (tar bort alla dina samlingar)",
                    button: "Återställ samlingar"
                }
            },
            toast: {
                copied: "Bildlänk kopierad till urklipp!",
                urlCopied: "URL kopierad till urklipp!",
                already: "Den samlingen finns redan",
                alreadyCollection: "Den GIF finns redan i den samlingen"
            },
            modal: {
                create: {
                    title: "Skapa samling",
                    name: "Collection Name",
                    create: "Skapa"
                },
                rename: {
                    title: "Byt namn på samlingen",
                    name: "New Collection Name",
                    warning: "Namnet får inte vara längre än 24 tecken",
                    rename: "Döpa om"
                }
            },
            alert: {
                import: {
                    title: "Är du säker?",
                    body: "När du importerar samlingar kommer dina nuvarande samlingar att skrivas över.",
                    confirm: "Importera",
                    cancel: "Strunt i det"
                },
                reset: {
                    title: "Är du säker?",
                    body: "Om du återställer samlingar tas alla dina samlingar bort.",
                    confirm: "Återställa",
                    cancel: "Strunt i det"
                },
                delete: {
                    title: "Är du säker?",
                    deleteBody: "Vill du verkligen ta bort den här samlingen?",
                    removeBody: "Vill du verkligen ta bort det här objektet?",
                    confirm: "Radera",
                    remove: "Ta bort",
                    cancel: "Strunt i det"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Låter dig klistra in GIF-filer direkt i chattrutan"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Lägger till ett kommando för att skicka en slumpmässig GIF från dina favoriter, med en av tio chans att pinga serverns ägare",
            command: {
                gifRoulette: {
                    description: "Fresta ödet och skicka en GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Ping Ägarchans",
                    description: "Om det ska finnas en chans på 1 på 10 att pinga ägaren till guilden (å nej)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Visar en användares offentliga GitHub-arkiv i deras profil",
            loading: "Laddar arkiv...",
            option: {
                showStars: {
                    label: "Visa stjärnor",
                    description: "Visa förrådsstjärnor"
                },
                showLanguage: {
                    label: "Visa språk",
                    description: "Visa förvarets primära språk"
                }
            },
            error: {
                error: "Fel",
                render: "Fel: Det gick inte att rendera GitHubRepos"
            },
            button: {
                show: "Visa GitHub-förråd",
                repositories: "GitHub Repositories",
                more: "Visa mer",
                only: "Visar endast topp {{length}}/{{total}}"
            },
            modal: {
                title: "{{user}}s GitHub-förråd",
                repository: "Förvar",
                description: "Beskrivning",
                language: "Språk",
                stars: "Stjärnor",
                viewOnGitHub: "Visa på GitHub",
                close: "Nära"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Lägger till ett kommando för att skicka en söklänk på internet",
            command: {
                googleThat: {
                    description: "Skicka en sökmotorlänk",
                    query: "Sökfrågan"
                }
            },
            option: {
                hyperlink: {
                    label: "Hyperlänk",
                    description: "Om den skickade länken ska hyperlänka med frågan som etikett"
                },
                embed: {
                    label: "Bädda in",
                    description: "Om den skickade länken ska rendera en inbäddning"
                },
                defaultEngine: {
                    label: "Standardmotor",
                    description: "Sökmotorn att använda"
                },
                customEngineURL: {
                    label: "URL för anpassad motor",
                    description: "URL:en till motorn du vill använda"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Låter dig använda valfri hälsningsdekal istället för bara den slumpmässiga genom att högerklicka på \"Våga för att säga hej!\" knapp",
            mode: {
                greet: "Hälsa",
                message: "Meddelande"
            },
            option: {
                greetMode: {
                    label: "Hälsningsläge",
                    description: "Välj hälsningsläge",
                    greet: "Hälsa (du kan bara hälsa 3 gånger)",
                    message: "Meddelande (du kan hälsa spam)"
                }
            },
            context: {
                label: "Hälsning Dekalväljare",
                mode: "Hälsningsläge",
                stickers: "Hälsning klistermärken",
                multi: "Oheliga Multi-Greet",
                send: "Skicka hälsningar"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Snabbmeny för att dumpa och ladda ner en servers emojis och klistermärken.",
            context: {
                download: {
                    emoji: "Ladda ner emojis",
                    sticker: "Ladda ner klistermärken"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Lägger till vissa inställningar för guild-taggar, som att dölja dem eller inaktivera uppmaningen att använda dem.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Inaktivera Adopt Tag Prompt",
                    description: "Inaktivera uppmaningen att anta taggar"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Kan dölja chattknapparna",
            tooltip: {
                close: "Nära",
                open: "Öppna"
            },
            option: {
                color: {
                    label: "Färg",
                    description: "Färga den röd vid öppning"
                },
                open: {
                    label: "Öppna",
                    description: "Öppnas som standard"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Dölj bilagor och inbäddningar för enskilda meddelanden via svävningsknappen",
            show: "Visa media",
            hide: "Dölj media",
            hidden: "Media dolda"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Ett plugin för att tillfälligt dölja meddelanden tills du startar om.",
            button: {
                hide: "Dölja"
            },
            option: {
                hidePopoverButton: {
                    label: "Göm popover-knappen",
                    description: "Göm dölj-knappen i meddelandefönstret."
                }
            }
        },
        hideServers: {
            name: "HideServers",
            description: "Döljer servrar från serverlistan",
            context: {
                hide: "Göm server",
                unhide: "Visa server",
                folder: {
                    hide: "Göm mapp",
                    unhide: "Visa mapp"
                }
            },
            option: {
                showIndicator: {
                    label: "Visa indikator",
                    description: "Visa meny för att visa servrar längst ner i listan"
                },
                guildsList: {
                    label: "Guilds List",
                    description: "Ta bort dolda servrar"
                },
                resetHidden: {
                    label: "Återställ dolda",
                    description: "Ta bort alla dolda guilds från listan",
                    button: "Återställ dolda servrar"
                }
            },
            button: {
                hidden: "Dold",
                hiddenServers: "Dolda servrar",
                remove: "Ta bort",
                folder: "Mapp",
                removeAll: "Ta bort alla",
                guilds: "Skrån",
                noHiddenServers: "Inga dolda servrar"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes låter dig spara meddelanden",
            main: "Main",
            button: {
                tooltip: "Heliga anteckningar",
                save: "Spara anteckning",
                cancel: "Avboka",
                noteMessage: "Notera meddelande",
                refresh: "Uppdatera avatarer",
                import: "Importera anteckningar",
                export: "Exportera anteckningar",
                deleteAll: "Ta bort alla anteckningar",
                delete: "Ta bort anteckningsbok",
                create: "Skapa anteckningsbok",
                copyText: "Kopiera text",
                copyAttachment: "Kopiera bifogad URL",
                deleteNote: "Ta bort anteckning",
                moveNote: "Flytta anteckning",
                moveTo: "Flytta till {{key}}",
                copyId: "Kopiera ID"
            },
            modal: {
                error: {
                    generic: "Det uppstod ett fel när dina anteckningar analyserades. Kontrollera konsolen för detaljer.",
                    easter: "Inga anteckningar hittades. Empathy Banana är här för dig.",
                    empty: "Inga anteckningar hittades sparade i den här anteckningsboken."
                },
                help: {
                    title: "Hjälp",
                    description: "Lär dig hur du använder heliga anteckningar",
                    addingNotes: "Lägga till anteckningar",
                    addingNotesText: "För att lägga till en anteckning, högerklicka på ett meddelande, för sedan muspekaren över \"Anteckningsmeddelande\" och klicka på knappen med anteckningsbokens namn som du vill anteckna meddelandet till.",
                    prototype: "Prototyp",
                    noteMessage: "Om du klickar på knappen \"Notera meddelande\" kommer du som standard att notera till Main!",
                    deletingNotes: "Ta bort anteckningar",
                    deletingNotesText: "Obs: du kan antingen högerklicka på anteckningen och trycka på \"Radera anteckning\" eller så kan du hålla ned \"DELETE\"-tangenten på ditt tangentbord och klicka på en anteckning; det är som magi!",
                    movingNotes: "Flytta anteckningar",
                    movingNotesText: "För att flytta en anteckning högerklickar du på en anteckning och håller muspekaren över objektet 'Flytta anteckning' och klickar på knappen som motsvarar den anteckningsbok du vill flytta anteckningen till.",
                    jumpToMessage: "Hoppa till meddelande",
                    jumpToMessageText: "För att hoppa till platsen där anteckningen ursprungligen fanns, högerklicka bara på anteckningen och tryck på \"Hoppa till meddelande\"."
                },
                notebook: {
                    title: "ANTECKNINGSBOK",
                    search: "Sök efter ett meddelande...",
                    options: "Sorteringsalternativ",
                    label: "Sortera meny",
                    filteredOf: "{{filteredCount}} av {{noteCount}} not{{s}}",
                    note: "{{noteCount}} not{{s}}",
                    ada: "Stigande / Tillagt datum",
                    amd: "Stigande/meddelandedatum",
                    dda: "Fallande / Tillagt datum",
                    dmd: "Fallande / meddelandedatum",
                    change: "Ändra sortering",
                    ascending: "Stigande",
                    descending: "Fallande",
                    dateAdded: "Datum tillagt",
                    messageDate: "Meddelandedatum"
                },
                create: {
                    title: "Skapa anteckningsbok",
                    description: "Ange ett namn för din nya anteckningsbok",
                    placeholder: "Anteckningsbokens namn"
                },
                delete: {
                    title: "Ta bort {{notebookName}}?",
                    description: "{{noteCount}} note{{s}} kommer att raderas permanent",
                    button: "Radera"
                },
                tabs: {
                    label: "Notebook flikar"
                }
            },
            toast: {
                saved: "Meddelandet har lagts till i {{notebook}}",
                deleted: "Anteckning från {{notebook}} har raderats",
                moved: "Anteckningen har flyttats från {{from}} till {{to}}.",
                exists: "Notebook {{notebookName}} finns redan.",
                created: "{{notebookName}} har skapats.",
                deletedNotebook: "{{notebookName}} har tagits bort.",
                refreshed: "Uppdaterade avatarer framgångsrikt.",
                deletedAll: "Alla anteckningar har raderats.",
                imported: "Anteckningar har importerats.",
                invalid: "Det gick inte att importera anteckningar."
            },
            toolbox: {
                action: "Öppna Anteckningar"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Ändrar hemknappen till en skrivindikator om någon i dina DM:n skriver"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Lägger till en ny flik i inställningarna för att förhandsgranska alla ikoner.",
            toolbox: "Öppna fliken Ikoner",
            iconFinder: "Ikon Finder",
            about: {
                title: "Drag",
                preview: "Förhandsgranska ikoner",
                list: {
                    copy: "Kopiera ikonnamn och CSS-variabler",
                    download: "Ladda ner ikoner i olika format (SVG, PNG, GIF, etc.)",
                    premade: "Kopiera färdiga ikonfynd för dina plugins",
                    find: "Hitta ikoner efter funktionskontext",
                    search: "Sök efter färger genom att högerklicka på färgnamnet",
                    special: "Speciellt tack"
                }
            },
            context: {
                icon: {
                    options: "Ikon Alternativ",
                    log: "Logga till konsolen",
                    save: "Spara som...",
                    rightClick: "Högerklicka på ikonen för att ändra",
                    usage: "Användande",
                    click: "Klicka för att kopiera",
                    copied: "Kopierade!",
                    actions: "Åtgärder"
                }
            },
            modal: {
                label: "Sök efter funktionskontext",
                search: "Sök efter {{count}} ikoner...",
                function: "Fungera",
                iconViewer: {
                    colors: "Ikon Viewer färger",
                    unknown: "okänd",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Startar om klienten automatiskt efter att ha varit inaktiv under en konfigurerbar tid, men undviker att starta om medan du är i VC.",
            option: {
                isEnabled: {
                    label: "är aktiverad",
                    description: "Aktivera automatisk omstart efter tomgång"
                },
                idleMinutes: {
                    label: "Inaktiva minuter",
                    description: "Minuter av inaktivitet före omstart (när det inte finns i VC)"
                }
            },
            toolbox: {
                disable: "Inaktivera inaktiv automatisk omstart",
                enable: "Aktivera inaktiv automatisk omstart"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignorera att aktiviteter ENDAST visas på din status. Du kan konfigurera vilka som specifikt ignoreras från flikarna Registrerade spel och aktiviteter, eller använda de allmänna inställningarna nedan",
            modal: {
                import: {
                    title: "Importera applikations-ID för CustomRPC-plugin till filterlistan"
                },
                filter: {
                    title: "Filterlista",
                    description: "Kommaseparerad lista över aktivitets-ID:n att filtrera (användbart för att filtrera specifika RPC-aktiviteter och CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "CustomRPC-applikations-ID är inte inställt.",
                    alreadyAdded: "CustomRPC-applikations-ID har redan lagts till."
                }
            },
            button: {
                import: "Importera CustomRPC ID"
            },
            option: {
                importCustomRPC: {
                    label: "Importera CustomRPC"
                },
                listMode: {
                    label: "Listläge",
                    description: "Välj hur filterlistan ska tillämpas",
                    blacklist: "Svartlista (ignorera bara det som finns i listan)",
                    whitelist: "Vitlista (ignorera allt utom det som finns i listan)"
                },
                idList: {
                    label: "ID-lista"
                },
                ignorePlaying: {
                    label: "Ignorera att spela",
                    description: "Ignorera alla spelaktiviteter (dessa är vanligtvis spel- och RPC-aktiviteter)"
                },
                ignoreStreaming: {
                    label: "Ignorera Streaming",
                    description: "Ignorera alla streamingaktiviteter"
                },
                ignoreListening: {
                    label: "Ignorera att lyssna",
                    description: "Ignorera alla lyssningsaktiviteter (dessa är vanligtvis Spotify-aktiviteter)"
                },
                ignoreWatching: {
                    label: "Ignorera tittar",
                    description: "Ignorera alla tittande aktiviteter"
                },
                ignoreCompeting: {
                    label: "Ignorera att tävla",
                    description: "Ignorera alla tävlande aktiviteter (dessa är normalt speciella spelaktiviteter)"
                },
                ignoredActivities: {
                    label: "Ignorerade aktiviteter"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Låter dig ignorera samtal från specifika användare eller DM-grupper.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Permanent ignorerade användare",
                    description: "Användar-ID (komma + blanksteg) som ska ignoreras permanent"
                }
            },
            button: {
                ignore: "Ignorera",
                temporarilyIgnore: "Ignorera samtal tillfälligt",
                permanentlyIgnore: "Ignorera samtal permanent"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Dölj inte meddelanden från \"sannolika spammare\""
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Visa filnamnet på bilder och GIF som ett verktygstips när du håller muspekaren över dem",
            option: {
                showFullUrl: {
                    label: "Visa fullständig URL",
                    description: "Visa hela webbadressen till bilden istället för bara filnamnet. Alltid aktiverat för GIF eftersom de vanligtvis inte har något meningsfullt filnamn"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Göm aldrig bildlänkar i meddelanden, även om det är det enda innehållet"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Låter dig zooma in på bilder och GIF samt visar bildmetadata. Använd scrollhjulet för att zooma in och Shift + scrollhjulet för att öka objektivradien.",
            option: {
                saveZoomValues: {
                    label: "Spara zoomvärden",
                    description: "Om zoom- och objektivstorleksvärden ska sparas"
                },
                invertScroll: {
                    label: "Invertera rullning",
                    description: "Invertera rullning"
                },
                nearestNeighbour: {
                    label: "Närmaste granne",
                    description: "Använd Nearest Neighbor Interpolation när du skalar bilder"
                },
                square: {
                    label: "Fyrkant",
                    description: "Gör linsen fyrkantig"
                },
                zoom: {
                    label: "Zoom",
                    description: "Zoom av linsen"
                },
                size: {
                    label: "Storlek",
                    description: "Radie / Storlek på linsen"
                },
                zoomSpeed: {
                    label: "Zoomhastighet",
                    description: "Hur snabbt zoomen/objektivets storlek ändras"
                },
                showMetadata: {
                    label: "Visa metadata",
                    description: "Visa bildmetadata när du dubbelklickar på den valda bilden"
                }
            },
            context: {
                square: "Fyrkantig lins",
                nearest: "Närmaste granne",
                zoom: "Zoom",
                size: "Linsstorlek",
                zoomSpeed: "Zoomhastighet",
                showImageMetadata: "Visa bildmetadata",
                view: "Visa metadata",
                loading: "Belastning...",
                unknown: "Okänd",
                sizeHTML: "Storlek",
                dimensions: "Mått",
                filename: "Filnamn"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Lägger till ett /imgtogif snedstreck kommando för att skapa en GIF från valfri bild",
            command: {
                imgToGif: {
                    description: "Låter dig förvandla en bild till en GIF",
                    image: "Bildbilaga att använda",
                    width: "GIF:ens bredd",
                    height: "Höjden på GIF"
                }
            },
            error: {
                noImage: "Ingen bild specificerad!",
                notImage: "Ladda upp är inte en bild"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Visar dina implicita relationer på fliken Vänner.",
            option: {
                sortByAffinity: {
                    label: "Sortera efter Affinitet",
                    description: "Om man ska sortera implicita relationer efter deras affinitet till dig."
                }
            },
            implicit: "Implicit"
        },
        inRole: {
            name: "InRole",
            description: "Vet vem som är i en roll med rollkontextmenyn eller /inrole-kommandot (läs plugininfo!)",
            command: {
                inrole: {
                    description: "Vet vem som är i en roll",
                    role: "Rollen",
                    noGuild: "Se till att du är på en server."
                }
            },
            context: {
                view: "Visa medlemmar i roll"
            },
            modal: {
                about: {
                    title: "Begränsningar",
                    description: "Om du inte har mod-behörigheter på servern och den servern är stor (över 100 medlemmar) kan plugin-programmet begränsas på följande sätt",
                    list: {
                        one: "Offlinemedlemmar kommer inte att listas",
                        two: "Upp till 100 medlemmar kommer att listas som standard. För att få fler, scrolla ner i medlemslistan för att ladda fler medlemmar.",
                        three: "Men vänner kommer alltid att visas oavsett deras status."
                    }
                },
                member: {
                    title: "Rollmedlemmar",
                    noMembers: "Det verkar som att inga onlinecachade medlemmar med den rollen hittades. Testa att scrolla ner på din medlemslista för att cachelagra fler användare!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Skärmdelning direkt när du går med i en röstkanal med stöd för skrivbordskällor, fönster och videoingångsenheter (kameror, inspelningskort)",
            modal: {
                linux: {
                    title: "För Linux",
                    body: "För Wayland dyker det bara upp skärmdelningsvalet",
                    bodyTwo: "För X11 kanske det fungerar eller inte fungerar :shrug:"
                },
                videoDevices: {
                    title: "Videoingångsenheter",
                    body: "Stöder kameror och inspelningskort (som Elgato HD60X) när de är aktiverade i inställningarna"
                },
                regardingSound: {
                    title: "Angående ljud- och förhandsvisningsinställningar",
                    body: "Vi använder inställningarna som ställts in och används av Discord för att bestämma om förhandsvisning av stream och ljud ska aktiveras eller inte"
                }
            },
            option: {
                streamMedia: {
                    label: "Mediakälla att streama",
                    description: "Återställs till huvudskärmen om den inte hittas",
                    loading: "Laddar mediekällor...",
                    none: "Inga mediekällor hittades",
                    placeholder: "Välj en mediekälla att streama"
                },
                includeVideoDevices: {
                    label: "Inkludera videoenheter",
                    description: "Inkludera videoingångsenheter (kameror, inspelningskort) i källlistan"
                },
                autoMute: {
                    label: "Auto Mute",
                    description: "Stäng av mikrofonen automatiskt när du går med i en röstkanal"
                },
                autoDeafen: {
                    label: "Auto Deafen",
                    description: "Automatiskt döva när du går med i en röstkanal (stänger också av dig)"
                },
                instantScreenshare: {
                    label: "Omedelbar skärmdelning",
                    description: "Aktiverar automatisk skärmdelningsfunktion"
                },
                keybindScreenshare: {
                    label: "Keybind Screenshare",
                    description: "Skärmdelning med tangentbindning i Discord-nyckelbindningsinställningar"
                },
                focusDiscord: {
                    label: "Fokus Discord",
                    description: "Starta bara skärmdelning med tangentbindning när Discord är fokuserat"
                },
                toolboxManagement: {
                    label: "Verktygslådanhantering",
                    description: "Aktivera/inaktivera Instant Screenshare"
                }
            },
            toolbox: {
                label: "Omedelbar skärmdelning",
                toast: "Omedelbar skärmdelning {{state}}",
                enabled: "Aktiverad",
                disabled: "Inaktiverad"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Kryptera dina meddelanden på ett icke-misstänkt sätt!",
            option: {
                savedPasswords: {
                    label: "Sparade lösenord",
                    description: "Sparade lösenord (avgränsade med , )"
                }
            },
            button: {
                encrypt: "Kryptera meddelande",
                decrypt: "Dekryptera meddelande",
                hidden: "Hidden Message Indicator (InvisibleChat)"
            },
            tooltip: {
                hidden: "Detta meddelande har ett dolt meddelande! (InvisibleChat)"
            },
            embed: {
                title: "Dekrypterat meddelande",
                footer: "Skickat med InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Kryptera meddelande",
                    secret: "Hemlighet",
                    cover: "Omslag (2 eller fler ord!!)",
                    password: "Lösenord",
                    dontUseCover: "Använd inte ett skydd",
                    send: "Skicka",
                    cancel: "Avboka"
                },
                decrypt: {
                    title: "Dekryptera meddelande",
                    with: "Meddelande med kryptering",
                    password: "Lösenord",
                    decrypt: "Dekryptera",
                    cancel: "Avboka"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Låter dig redigera standardvärdena när du skapar serverinbjudningar.",
            option: {
                inviteDuration: {
                    label: "Inbjudan varaktighet",
                    description: "Standardvaraktighet för serverinbjudningar",
                    thirtyMinutes: "30 minuter",
                    oneHour: "1 timme",
                    sixHours: "6 timmar",
                    twelveHours: "12 timmar",
                    oneDay: "1 dag",
                    sevenDays: "7 dagar",
                    forever: "Evigt"
                },
                maxUses: {
                    label: "Max användningsområden",
                    description: "Förinställd maximal användning för serverinbjudningar",
                    unlimited: "Obegränsat",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Tillfälligt medlemskap",
                    description: "Tillfälligt standardmedlemskap för serverinbjudningar"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Gör användarnamnsfärger i chatten unika, som i IRC-klienter",
            option: {
                lightness: {
                    label: "Lätthet",
                    description: "Lätthet, i %. Ändra om färgerna är för ljusa eller för mörka"
                },
                memberListColors: {
                    label: "Färger på medlemslistan",
                    description: "Ersätt rollfärger i medlemslistan"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Använd endast färg på användare utan färg",
                    description: "Tillämpa färger endast på användare som inte har en fördefinierad färg"
                },
                applyColorOnlyInDms: {
                    label: "Applicera endast färg i DM",
                    description: "Använd endast färger i direktmeddelanden; applicera inte färger på servrar."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Lokalt sparar alla du har kommunicerat med (inklusive servrar), i händelse av förlust",
            section: {
                description: "Tillhandahåller en lista över användare som du har nämnt eller svarat på, eller de som äger servrarna du tillhör (serverägare*), eller är medlemmar i din guild",
                empty: "Det är tomt just nu.",
                tooltip: "{{user}}, uppdaterad vid {{updatedAtContent}}",
                owner: "Serverägare",
                iRememberYou: "Jag minns dig"
            },
            context: {
                user: "Användaralternativ",
                copy: "Kopiera användar-ID",
                copyToast: "Användar-ID har kopierats till urklipp",
                view: "Visa profil"
            },
            modal: {
                title: "Redaktör",
                filter: "Filtrera efter tagg, användarnamn, ID",
                button: {
                    validate: "Validera och spara",
                    cancel: "Avboka",
                    openEditor: "Öppna Editor",
                    resetData: "Återställ lagring",
                    sure: "Är du säker?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Lägger till snabbmenyalternativ för att hoppa till början eller botten av en kanal/DM",
            context: {
                top: "Hoppa till första meddelandet",
                bottom: "Hoppa till senaste meddelandet",
                noMessages: "Inga meddelanden hittades från denna användare i den här kanalen.",
                searchFailed: "Det gick inte att söka efter meddelanden."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Försök att navigera till kanalen du var i innan du bytte konto eller laddade Discord."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Lägger till OperaGX eller osu! ljudeffekter när du skriver på tangentbordet.",
            option: {
                volume: {
                    label: "Volym",
                    description: "Volymen på tangentbordet låter"
                },
                soundPack: {
                    label: "Ljudpaket",
                    description: "Ljudpaket att använda för tangentbordsljud",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Skickar ett meddelande om ett givet meddelande matchar vissa nyckelord eller regexes",
            idHolder: "ID",
            keywordEntry: "Nyckelordsinmatning",
            regexHolder: "exempel|regex",
            ignoreCase: "Ignorera fallet",
            whiteblackLabel: "Vitlista/svartlista",
            tab: {
                title: "Nyckelord",
                clearAll: "Rensa alla"
            },
            button: {
                addId: "Lägg till ID",
                addKeyword: "Lägg till nyckelord"
            },
            listTypeSelector: {
                blacklist: "Svartlista",
                whitelist: "Vitlista",
                placeholder: "Välj en listtyp"
            },
            option: {
                ignoreBots: {
                    label: "Ignorera bots",
                    description: "Ignorera meddelanden från bots"
                },
                amountToKeep: {
                    label: "Belopp att behålla",
                    description: "Antal meddelanden att spara i loggen"
                },
                keywords: {
                    label: "Nyckelord",
                    description: "Hantera sökord"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Lägger till en sista online-indikator under användarnamn i din DM-lista och guild och GDM-medlemslista",
            unit: {
                d: "dag",
                h: "timme",
                m: "minut"
            },
            online: "Online för {{formattedTime}} sedan"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Litet plugin för ListenBrainz rik närvaro",
            about: {
                title: "Om MusicBrainz API",
                description: "MusicBrainz API kräver ingen API-nyckel, men det kräver en {{link}}. För de flesta borde det räcka med en e-postadress.",
                userAgent: "meningsfull användaragentsträng"
            },
            option: {
                username: {
                    label: "Användarnamn",
                    description: "ListenBrainz användarnamn"
                },
                mbContact: {
                    label: "MB kontakt",
                    description: "LyssnaBrainz kontakt"
                },
                shareUsername: {
                    label: "Dela användarnamn",
                    description: "Visa länk till ListenBrainz profil (kan bara vara synlig för andra användare)"
                },
                shareSong: {
                    label: "Dela låt",
                    description: "Visa länk till aktuell låt på ListenBrainz (kan bara vara synlig för andra användare)"
                },
                hideWithSpotify: {
                    label: "Göm dig med Spotify",
                    description: "Dölj ListenBrainz närvaro om Spotify körs"
                },
                hideWithActivity: {
                    label: "Göm med aktivitet",
                    description: "Dölj ListenBrainz närvaro om du har någon annan närvaro"
                },
                useTimeBar: {
                    label: "Använd Time Bar",
                    description: "Använd spårets längd för att visa en tidsindikator (måste använda lyssningsstatus)"
                },
                statusName: {
                    label: "Status Namn",
                    description: "Anpassad statustext"
                },
                nameFormat: {
                    label: "Namnformat",
                    description: "Visa namn på låt och artist i statusnamn",
                    custom: "Använd anpassat statusnamn",
                    artistSong: "Använd formatet 'artist - sång'",
                    songArtist: "Använd formatet \"låt - artist\"",
                    artistOnly: "Använd endast artistnamn",
                    songOnly: "Använd endast låtens namn",
                    albumName: "Använd albumnamn (faller tillbaka till anpassad statustext om låten inte har något album)"
                },
                useListeningStatus: {
                    label: "Använd Lyssningsstatus",
                    description: "Visa statusen \"Lyssnar på\" istället för \"Spelar\""
                },
                missingArt: {
                    label: "Saknade konst",
                    description: "När album eller albumomslag saknas",
                    listenbrainzLogo: "Använd den stora ListenBrainz-logotypen",
                    generic: "Använd generisk platshållare"
                },
                useLogo: {
                    label: "Använd logotyp",
                    description: "Visa ListenBrainz logotyp på albumomslaget"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Ersätt Discords laddningscitat",
            option: {
                replaceEvents: {
                    label: "Ersätt händelser",
                    description: "Bör detta plugin också gälla under evenemang med speciella evenemangstema citat? (t.ex. Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Aktivera förinställda citat för plugin",
                    description: "Aktivera citattecken förinställda av detta plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Aktivera Discord förinställda citat",
                    description: "Aktivera Discords förinställda citat (inklusive evenemangscitat, under evenemang)"
                },
                additionalQuotes: {
                    label: "Ytterligare citat",
                    description: "Ytterligare anpassade citat kan eventuellt visas, åtskilda av avgränsaren nedan"
                },
                additionalQuotesDelimiter: {
                    label: "Ytterligare citatavgränsare",
                    description: "Avgränsare för ytterligare offerter"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Låter dig logga in på en annan enhet genom att skanna en QR-kod för inloggning, precis som på mobilen!",
            option: {
                scanQr: {
                    label: "Skanna QR-koden",
                    description: "Skanna en QR-kod",
                    notEnabled: "Aktivera plugin-programmet och starta om din klient för att skanna en QR-kod för inloggning"
                }
            },
            neverScan: "Skanna aldrig en QR-kod för inloggning från en annan användare eller applikation.",
            hold: "Håll ned för att bekräfta inloggningen",
            scanning: "Scanning...",
            stopScanning: "Sluta skanna",
            usingWebcam: "Skanna med webbkamera",
            dragDrop: "Dra och släpp en bild här, eller klicka för att välja en bild",
            orPaste: "Eller klistra in en bild från ditt urklipp!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Tillåter att ändra (standard) uppspelningshastighet för mediainbäddningar",
            playbackSpeed: "Uppspelningshastighet",
            context: {
                label: "Uppspelningshastighetskontroll"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Standardhastighet för röstmeddelande",
                    description: "Röstmeddelanden"
                },
                defaultVideoSpeed: {
                    label: "Standard videohastighet",
                    description: "Videor"
                },
                defaultAudioSpeed: {
                    label: "Standardljudhastighet",
                    description: "Ljud"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Visar antalet onlinemedlemmar, totalt antal medlemmar och användare i röstkanaler på servern — i medlemslistan och verktygstipset.",
            option: {
                toolTip: {
                    label: "Verktygstips",
                    description: "Visa medlemsantal på serververktygstipset"
                },
                memberList: {
                    label: "Medlemslista",
                    description: "Visa medlemsantal i medlemslistans rubrik"
                },
                voiceActivity: {
                    label: "Röstaktivitet",
                    description: "Visa antalet användare i röstkanaler"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} online i den här kanalen",
            totalMembers: "{{formattedTotalCount}} totalt servermedlemmar",
            totalVoice: "{{formattedVoiceCount}} medlemmar i rösten"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Visar användaravatarer och rollikoner i omnämnanden",
            option: {
                showAtSymbol: {
                    label: "Visa @ Symbol",
                    description: "Om @-symbolen ska visas på användarnas uppgifter"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Lägger till en chatbar-knapp för att jama i chatten",
            button: {
                meow: "Mjau"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Slår samman meddelanden som skickats inom en tidsperiod med ditt tidigare skickade meddelande om ingen annan skickar ett meddelande före dig.",
            option: {
                timePeriod: {
                    label: "Tidsperiod",
                    description: "Varaktigheten av skurar (i sekunder)."
                },
                shouldMergeWithAttachment: {
                    label: "Slå samman med bilagor",
                    description: "Ska meddelandet slås samman om det sista meddelandet har en bilaga?"
                },
                useSpace: {
                    label: "Använd Space",
                    description: "Om du vill lägga till ett mellanslag mellan meddelanden vid sammanslagning istället för nya rader."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Håll ned Backsteg och klicka för att ta bort, dubbelklicka för att redigera/svara",
            option: {
                singleClickAction: {
                    label: "Enkla klickåtgärd",
                    description: "Åtgärd vid ett enda klick (dina meddelanden)"
                },
                singleClickModifier: {
                    label: "Single Click Modifier",
                    description: "Modifierare krävs för enkelklicksåtgärd (dina meddelanden)"
                },
                singleClickOthersAction: {
                    label: "Åtgärd med enkla klick (Övriga)",
                    description: "Åtgärd vid enkelklick (andras meddelanden)"
                },
                singleClickOthersModifier: {
                    label: "Single Click Modifier (Andra)",
                    description: "Modifierare krävs för enkelklicksåtgärd (andras meddelanden)"
                },
                doubleClickAction: {
                    label: "Dubbelklicka Åtgärd",
                    description: "Åtgärd vid dubbelklick (dina meddelanden)"
                },
                doubleClickOthersAction: {
                    label: "Dubbelklicksåtgärd (Andra)",
                    description: "Åtgärd vid dubbelklick (andras meddelanden)"
                },
                doubleClickModifier: {
                    label: "Dubbelklicka Modifierare",
                    description: "Modifierare krävs för dubbelklicksåtgärder"
                },
                tripleClickAction: {
                    label: "Triple Click Action",
                    description: "Åtgärd vid trippelklick"
                },
                tripleClickModifier: {
                    label: "Triple Click Modifier",
                    description: "Modifierare krävs för trippelklick"
                },
                reactEmoji: {
                    label: "Reagera Emoji",
                    description: "Emoji att använda för reaktionsåtgärder"
                },
                addAdditionalReacts: {
                    label: "Lägg till ytterligare reaktioner",
                    description: "Lägg också till ytterligare konfigurerade reaktions-emojis"
                },
                additionalReactEmojis: {
                    label: "Ytterligare React Emojis",
                    description: "Ytterligare emojis att lägga till när du använder React action (komma/nyrad separerad, max {{count}})"
                },
                disableInDms: {
                    label: "Inaktivera i DM",
                    description: "Inaktivera alla klickåtgärder i direktmeddelanden"
                },
                disableInSystemDms: {
                    label: "Inaktivera i System DM",
                    description: "Inaktivera alla klickåtgärder i system-DM:er"
                },
                clickTimeout: {
                    label: "Klicka på Timeout",
                    description: "Timeout för att skilja dubbel- och trippelklick (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Dubbelklicka på Håll tröskel",
                    description: "Max hålltid för dubbelklicksåtgärder (ms). Om du håller längre kan du välja text"
                },
                deferDoubleClickForTriple: {
                    label: "Förskjut dubbelklick för trippel",
                    description: "Fördröj dubbelklick för att tillåta trippelklick (inaktiverar trippelklick när av)"
                },
                selectionHoldTimeout: {
                    label: "Val Håll Timeout",
                    description: "Timeout för att tillåta textval (ms)"
                },
                quoteWithReply: {
                    label: "Citat med svar",
                    description: "När du citerar, svara också på meddelandet"
                },
                useSelectionForQuote: {
                    label: "Använd urval för offert",
                    description: "När du citerar, använd vald text om tillgänglig"
                }
            },
            actions: {
                none: "Ingen",
                delete: "Radera",
                copyLink: "Kopiera länk",
                copyID: "Kopiera ID",
                copyContent: "Kopiera innehåll",
                copyUserID: "Kopiera användar-ID",
                edit: "Redigera",
                reply: "Svar",
                react: "Reagera",
                openThread: "Öppna tråden",
                openTab: "Öppna flik",
                quote: "Citationstecken",
                pin: "Stift"
            },
            missingPermissions: {
                react: "Kan inte reagera: Behörigheter saknas",
                pin: "Det går inte att fästa: Behörigheter saknas",
            },
            cannotQuote: "Det går inte att citera den här meddelandetypen",
            copy: {
                messageId: "Meddelande-ID har kopierats!",
                messageContent: "Meddelandets innehåll har kopierats!",
                userId: "Användar-ID kopierat!"
            },
            linkCopied: "Länken kopierad!"
        },
        messageColors: {
            name: "MessageColors",
            description: "Visar färgkoder som #FF0042 inuti meddelanden",
            option: {
                renderType: {
                    label: "Rendertyp",
                    description: "Hur man återger färger",
                    textColor: "Textfärg",
                    block: "Block i närheten",
                    backgroundColor: "Bakgrundsfärg"
                },
                enableShortHexCodes: {
                    label: "Aktivera korta hex-koder",
                    description: "Aktivera hex-kod med tre tecken som #39f"
                },
                blockView: {
                    label: "Blockvisningstyp",
                    description: "Hur man visar färgblock",
                    right: "Höger sida",
                    left: "Vänster sida",
                    both: "Båda sidor"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Visar hur lång tid det tog att hämta meddelanden för den aktuella kanalen",
            option: {
                showIcon: {
                    label: "Visa ikon",
                    description: "Visa ikonen för hämtningstid i meddelandefältet"
                },
                showMs: {
                    label: "Visa millisekunder",
                    description: "Visa millisekunder i timing"
                },
                iconColor: {
                    label: "Ikon Färg",
                    description: "Ikonfärg (CSS-färgvärde)"
                }
            },
            loaded: "Meddelanden laddade om {{time}}ms ({{timeAgo}})",
            day: "dag{{s}} sedan",
            hour: "timme{{s}} sedan",
            minute: "minut{{s}} sedan",
            justNow: "just nu"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Visar en indikator för meddelanden som tog ≥n sekunder att skicka",
            day: "dag",
            days: "dagar",
            hour: "timme",
            hours: "timmar",
            minute: "minut",
            minutes: "minuter",
            second: "andra",
            seconds: "sekunder",
            millisecond: "millisekund",
            milliseconds: "millisekunder",
            and: "och",
            oldKotlinDetected: "Användaren misstänks vara på en gammal Discord Android-klient.",
            ahead: "Den här användarens klocka är {{delta}} före.",
            delay: "Det här meddelandet skickades med en fördröjning på {{delta}}.",
            delayedMessage: "Försenat meddelande",
            oldAndroidClient: "Gammal Discord Android-klient",
            option: {
                latency: {
                    label: "Latens",
                    description: "Tröskel i sekunder för latensindikator"
                },
                detectDiscordKotlin: {
                    label: "Upptäck Discord Kotlin",
                    description: "Upptäck gamla Discord Android-klienter"
                },
                showMillis: {
                    label: "Visa millisekunder",
                    description: "Visa millisekunder"
                },
                ignoreSelf: {
                    label: "Ignorera självet",
                    description: "Lägg inte till indikator i dina egna meddelanden"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Lägger till en förhandsvisning av meddelanden som länkar till ett annat meddelande",
            option: {
                messageBackgroundColor: {
                    label: "Meddelande bakgrundsfärg",
                    description: "Bakgrundsfärg för meddelanden i rika inbäddningar"
                },
                automodEmbeds: {
                    label: "Automod inbäddar",
                    description: "Använd automod-inbäddningar istället för rika inbäddningar (mindre men mindre info)",
                    always: "Använd alltid automod embeds",
                    prefer: "Föredrar automod-inbäddningar, men använd rika inbäddningar om visst innehåll inte kan visas",
                    never: "Använd aldrig automod-inbäddningar"
                },
                listMode: {
                    label: "Listläge",
                    description: "Om ID-listan ska användas som svartlista eller vitlista",
                    blacklist: "Svartlista",
                    whitelist: "Vitlista"
                },
                idList: {
                    label: "ID-lista",
                    description: "Guild/kanal/användar-ID:n att svartlista eller vitlista (separera med komma)"
                },
                clearMessageCache: {
                    label: "Rensa meddelandecache",
                    description: "Rensa den länkade meddelandecachen"
                }
            },
            noContent: {
                noAttachments: "inget innehåll {{count}} bädda in{{s}}",
                noEmbeds: "inget innehåll {{count}} bilaga{{s}}",
                both: "inget innehåll, {{attachments}} bilaga{{attachmentsS}} och {{embeds}} inbädda{{embedsS}}"
            },
            dm: "Direktmeddelande",
            groupDm: "Grupp DM",
            server: "Server"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Lägger till ett verktygstips med en förhandsgranskning av meddelanden när du håller muspekaren över meddelandelänkar, svar och vidarebefordrade meddelanden.",
            loading: "Belastning...",
            option: {
                onLink: {
                    label: "På länk",
                    description: "Visa verktygstips när du håller muspekaren över meddelandelänkar"
                },
                onReply: {
                    label: "På svar",
                    description: "Visa verktygstips när du håller muspekaren över meddelandesvar"
                },
                onForward: {
                    label: "På Framåt",
                    description: "Visa verktygstips när du håller muspekaren över vidarebefordrade meddelanden"
                },
                display: {
                    label: "Visa",
                    description: "Visa stil",
                    auto: "Samma som meddelande",
                    compact: "Kompakt",
                    cozy: "Mysig"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Loggar tillfälligt borttagna och redigerade meddelanden.",
            removeMessage: "Ta bort meddelandehistorik",
            removeMessageTemporary: "Ta bort meddelande (tillfälligt)",
            clearMessageLog: "Rensa meddelandelogg",
            showDiff: "Visa skillnader",
            modal: {
                edit: {
                    title: "Meddelande Redigera historik",
                    tooltip: "Detta redigeringstillstånd loggades inte så det kan inte visas."
                }
            },
            option: {
                deleteStyle: {
                    label: "Ta bort stil",
                    description: "Stilen på raderade meddelanden",
                    text: "Röd text",
                    overlay: "Rött överlägg"
                },
                logDeletes: {
                    label: "Logga bort",
                    description: "Om raderade meddelanden ska loggas"
                },
                collapseDeleted: {
                    label: "Komprimera borttaget",
                    description: "Om raderade meddelanden ska komprimeras, liknande blockerade meddelanden"
                },
                logEdits: {
                    label: "Loggredigeringar",
                    description: "Om redigerade meddelanden ska loggas"
                },
                inlineEdits: {
                    label: "Inline redigeringar",
                    description: "Om redigeringshistorik ska visas som en del av meddelandeinnehållet"
                },
                ignoreBots: {
                    label: "Ignorera bots",
                    description: "Om meddelanden från bots ska ignoreras"
                },
                ignoreSelf: {
                    label: "Ignorera självet",
                    description: "Om du ska ignorera meddelanden själv"
                },
                ignoreSelfEdits: {
                    label: "Ignorera egna redigeringar",
                    description: "Om redigeringar gjorda av dig själv ska ignoreras"
                },
                ignoreUsers: {
                    label: "Ignorera användare",
                    description: "Kommaseparerad lista med användar-ID:n att ignorera"
                },
                ignoreChannels: {
                    label: "Ignorera kanaler",
                    description: "Kommaseparerad lista med kanal-ID:n att ignorera"
                },
                ignoreGuilds: {
                    label: "Ignorera Guilds",
                    description: "Kommaseparerad lista med guild-ID:n att ignorera"
                },
                showEditDiffs: {
                    label: "Visa Redigera skillnader",
                    description: "Visa visuella skillnader mellan redigerade meddelandeversioner"
                },
                separatedDiffs: {
                    label: "Separerade Diff",
                    description: "Separat tillägg och borttagningar i diff för en mer läsbar differential"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Förbättrar insticksprogrammet MessageLogger med ytterligare funktioner.",
            updateImageCacheDir: "Framgångsrikt uppdaterad bildcachekatalog.",
            updateLogsDir: "Loggkatalogen har uppdaterats framgångsrikt.",
            failedUpdate: "Det gick inte att uppdatera katalogen.",
            blacklist: "Svartlista",
            whitelist: "Vitlista",
            failedToRemove: "Det gick inte att ta bort meddelandet",
            successfullyImported: "Loggar har importerats",
            errorImportingLogs: "Fel vid import av loggar. Kontrollera konsolen för mer information",
            importing: "Importerar...",
            importLogs: "Importera loggar",
            exporting: "Exporterar...",
            exportLogs: "Exportera loggar",
            alert: {
                clearLogs: {
                    title: "Rensa loggar",
                    body: "Är du säker på att du vill rensa alla loggar?",
                    confirmText: "Rensa",
                    cancel: "Avboka"
                },
                clearVisibleLogs: {
                    title: "Rensa synliga loggar",
                    body: "Är du säker på att du vill rensa {{messages}}-loggar?",
                    confirmText: "Rensa",
                    cancel: "Avboka"
                },
                cleared: "Meddelandeloggdatabas och cacheminne rensades."
            },
            context: {
                title: "Meddelandelogger",
                jumpToMessage: "Hoppa till meddelande",
                openUserProfile: "Öppna användarprofil",
                copyContent: "Kopiera innehåll",
                copyUserId: "Kopiera användar-ID",
                copyMessageId: "Kopiera meddelande-ID",
                copyChannelId: "Kopiera kanal-ID",
                copyServerId: "Kopiera server-ID",
                deleteLog: "Ta bort logg",
                fromUsernameDm: "Från {{username}}s DM",
                fromGroupDm: "Från {{channelName}} Grupp DM",
                fromServerChannel: "Från {{channelName}} i {{serverName}}",
                moveTypeTo: "Flytta {{type}} till {{destination}}",
                removeTypeFrom: "Ta bort {{type}} från {{list}}",
                openLogsFor: "Öppna loggar för {{name}}",
                openLogs: "Öppna Loggar",
                removeMessage: "Ta bort meddelande (permanent)",
                removeMessageHistory: "Ta bort meddelandehistorik (permanent)",
                deleteMessageHide: "Ta bort meddelande (dölj från meddelandeloggare)",
                addServerToBlacklist: "Lägg till server till svartlista",
                addServerToWhitelist: "Lägg till server till vitlista",
                removeServerFromBlacklist: "Ta bort server från svartlista",
                removeServerFromWhitelist: "Ta bort server från vitlista",
                moveServerToBlacklist: "Flytta server till svartlista",
                moveServerToWhitelist: "Flytta server till vitlista",
                addUserToBlacklist: "Lägg till användare till svartlista",
                addUserToWhitelist: "Lägg till användare till vitlista",
                removeUserFromBlacklist: "Ta bort användare från svartlista",
                removeUserFromWhitelist: "Ta bort användare från vitlistan",
                moveUserToBlacklist: "Flytta användare till svartlista",
                moveUserToWhitelist: "Flytta användare till vitlista",
                addChannelToBlacklist: "Lägg till kanal till svartlista",
                addChannelToWhitelist: "Lägg till kanal till vitlista",
                removeChannelFromBlacklist: "Ta bort kanal från svartlista",
                removeChannelFromWhitelist: "Ta bort kanal från vitlistan",
                moveChannelToBlacklist: "Flytta kanal till svartlista",
                moveChannelToWhitelist: "Flytta kanal till vitlista"
            },
            type: {
                server: "Server",
                user: "Användare",
                channel: "Kanal"
            },
            button: {
                chooseFolder: "Välj Mapp",
                browse: "Bläddra",
                clearLogs: "Rensa alla loggar",
                clearVisibleLogs: "Rensa synliga loggar",
                sortOldest: "Sortera äldst först",
                sortNewest: "Sortera nyaste först",
                loadMore: "Ladda mer",
                noResults: "Inga resultat i {{tab}}",
                tryOtherTabs: "Kanske prova {{nextTab}} eller {{lastTab}}",
                importLogs: "Importera loggar"
            },
            modal: {
                title: "Filtrera meddelanden",
                deleted: "Raderad",
                edited: "Redigerat",
                ghostPing: "Spöke plingade",
                empty: "Tomt va",
                importLogs: "ML Enhanced lagrar nu loggar i indexeddb. Du måste importera dina gamla loggar från loggkatalogen. Importering kommer inte att skriva över befintliga loggar"
            },
            clear: {
                title: "Rensa loggar",
                description: "Är du säker på att du vill rensa alla loggar?",
                confirm: "Rensa",
                cancel: "Avboka"
            },
            option: {
                saveMessages: {
                    label: "Spara meddelanden",
                    description: "Om de raderade och redigerade meddelandena ska sparas."
                },
                saveImages: {
                    label: "Spara bilder",
                    description: "Spara borttagna bilagor."
                },
                sortNewest: {
                    label: "Sortera nyaste först",
                    description: "Sortera loggar efter senaste."
                },
                cacheMessagesFromServers: {
                    label: "Cachemeddelanden från servrar",
                    description: "Vanligtvis loggar meddelandeloggaren bara från vitlistade ID:n och DM:n, vilket skulle innebära att det också loggar meddelanden från alla servrar. Observera att detta kan göra att cachen överskrider sin gräns, vilket resulterar i att vissa meddelanden missas. Om du är på många servrar kan detta avsevärt öka chanserna för att meddelanden loggas, vilket kan resultera i en stor meddelandepost och inkludering av irrelevanta meddelanden."
                },
                ignoreBots: {
                    label: "Ignorera bots",
                    description: "Om meddelanden från bots ska ignoreras"
                },
                ignoreWebhooks: {
                    label: "Ignorera Webhooks",
                    description: "Om du ska ignorera meddelanden via webhooks"
                },
                ignoreSelf: {
                    label: "Ignorera självet",
                    description: "Om du ska ignorera meddelanden själv"
                },
                ignoreMutedGuilds: {
                    label: "Ignorera Muted Guilds",
                    description: "Meddelanden i tystade guilds kommer inte att loggas. Vitlistade användare/kanaler i tystade guilds kommer fortfarande att loggas."
                },
                ignoreMutedCategories: {
                    label: "Ignorera dämpade kategorier",
                    description: "Meddelanden i kanaler som tillhör avstängda kategorier kommer inte att loggas. Vitlistade användare/kanaler i tystade guilds kommer fortfarande att loggas."
                },
                ignoreMutedChannels: {
                    label: "Ignorera avstängda kanaler",
                    description: "Meddelanden i avstängda kanaler kommer inte att loggas. Vitlistade användare/kanaler i tystade guilds kommer fortfarande att loggas."
                },
                alwaysLogDirectMessages: {
                    label: "Logga alltid direktmeddelanden",
                    description: "Logga alltid DM"
                },
                alwaysLogCurrentChannel: {
                    label: "Logga alltid aktuell kanal",
                    description: "Logga alltid aktuell vald kanal. Svartlistade kanaler/användare kommer fortfarande att ignoreras."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Ta bort logg permanent som standard",
                    description: "Base MessageLogger ta bort loggknapp kommer att radera loggar permanent"
                },
                hideMessageFromMessageLoggers: {
                    label: "Dölj meddelande från meddelandeloggare",
                    description: "När den är aktiverad kommer en snabbmenyknapp att läggas till meddelanden så att du kan radera meddelanden utan att de loggas av andra loggare. Kanske inte är säkert, använd på egen risk."
                },
                showLogsButton: {
                    label: "Knappen Visa loggar",
                    description: "Växla till när som helst visa verktygslådan eller inte"
                },
                showWhereMessageIsFrom: {
                    label: "Visa var meddelandet kommer ifrån",
                    description: "Visa meddelandekanal/författarnamn och servernamn"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Meddelanden som ska visas på en gång i loggar",
                    description: "Antal meddelanden som ska visas på en gång i loggar & antal meddelanden som ska laddas när fler meddelanden laddas i loggar."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Dölj meddelande från meddelandeloggare borttaget meddelande",
                    description: "Meddelandeinnehållet att ersätta meddelandet med när du använder funktionen för att dölja meddelande från meddelandeloggare."
                },
                messageLimit: {
                    label: "Meddelandegräns",
                    description: "Maximalt antal meddelanden att spara. Äldre meddelanden raderas när gränsen nås. 0 betyder att det inte finns någon gräns"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Storleksgräns för bilagor i megabyte",
                    description: "Maximal storlek på en bilaga i megabyte att spara. Bilagor som är större än denna storlek kommer inte att sparas."
                },
                attachmentFileExtensions: {
                    label: "Bifogade filtillägg",
                    description: "Kommaseparerad lista över filtillägg att spara. Bilagor med filtillägg som inte finns i den här listan kommer inte att sparas. Lämna tomt för att spara alla bilagor."
                },
                cacheLimit: {
                    label: "Cachegräns",
                    description: "Maximalt antal meddelanden att behålla i cachen. Äldre meddelanden raderas när gränsen nås."
                },
                timeBasedCleanupMinutes: {
                    label: "Tidsbaserade rengöringsminuter",
                    description: "Intervall i minuter för att utföra tidsbaserad rensning av meddelanden som är äldre än meddelandegränsen."
                },
                preserveCurrentChannel: {
                    label: "Bevara aktuell kanal",
                    description: "När det är aktiverat påverkas inte meddelanden i din för närvarande valda kanal av tidsbaserad rensning."
                },
                whitelistedIds: {
                    label: "Vitlistade ID",
                    description: "Vitlistade server, kanal eller användar-ID."
                },
                blacklistedIds: {
                    label: "Svartlistade ID",
                    description: "Svartlistade server-, kanal- eller användar-ID."
                },
                imageCacheDir: {
                    label: "Bildcachekatalog",
                    description: "Välj katalog för sparade bilder"
                },
                logsDir: {
                    label: "Loggar katalog",
                    description: "Välj loggkatalog"
                },
                importLogs: {
                    label: "Importera loggar",
                    description: "Importera loggar från fil"
                },
                exportLogs: {
                    label: "Exportera loggar",
                    description: "Exportera loggar från IndexedDB"
                },
                clearLogsOnRestart: {
                    label: "Rensa loggar vid omstart",
                    description: "Rensar loggar när Discord startar om."
                },
                openLogs: {
                    label: "Öppna Loggar",
                    description: "Öppna Loggar"
                },
                openImageCacheFolder: {
                    label: "Öppna mappen Image Cache",
                    description: "Öppnar bildcachekatalogen"
                },
                clearLogs: {
                    label: "Rensa loggar",
                    description: "Rensa loggar",
                    title: "Rensa loggar",
                    body: "Är du säker på att du vill rensa alla loggar?",
                    confirmText: "Rensa",
                    cancel: "Avboka"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Få skålar för när utvalda användare skickar ett meddelande",
            dm: "deras DM",
            option: {
                users: {
                    label: "Användare",
                    description: "Kommaseparerad lista med användar-ID:n att få meddelandetoaster för",
                    invalidId: "{{id}} är inte ett giltigt användar-ID"
                }
            },
            notification: {
                title: "{{username}} skickade ett meddelande",
                body: "Klicka för att hoppa till {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Låter dig spara meddelanden och använda dem med ett enkelt kommando.",
            notExist: "Taggen **{{tagname}}** finns inte längre! Ladda om din Discord för att fixa :)",
            alreadyExist: "En tagg med namnet **{{tagname}}** finns redan!",
            sentTag: "Taggen **{{tagname}}** har skickats!",
            successCreate: "Taggen **{{tagname}}** har skapats!",
            allTags: "Alla dina taggar:",
            noTags: "Hoppsan! Det finns inga taggar än, använd /tag create för att skapa en!",
            noDeleteTag: "En tagg **{{tagname}}** finns inte, så den kan inte tas bort!",
            successDelete: "Taggen **{{name}}** har tagits bort!",
            tagPreview: "En tagg med namnet **{{name}}** finns inte!",
            option: {
                clyde: {
                    label: "Clyde meddelande vid sändning",
                    description: "Om aktiverat kommer Clyde att skicka ett kortvarigt meddelande till dig när en tagg användes."
                },
                tagsList: {
                    label: "Tagglista",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Hantera alla taggar själv",
                    option: {
                        create: {
                            description: "Skapa en ny tagg",
                            name: "The name of the tag to trigger the response",
                            message: "Meddelandet som du kommer att skicka när du använder den här taggen"
                        },
                        list: {
                            description: "Lista alla taggar från dig själv"
                        },
                        delete: {
                            description: "Ta bort en tagg från dig själv",
                            name: "The name of the tag to remove"
                        },
                        preview: {
                            description: "Förhandsgranska en tagg utan att skicka den offentligt",
                            name: "The name of the tag to preview"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Lägger till ikon för test av återkoppling av mikrofon till användarpanelen",
            button: "Mic Test Loopback"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Olika mellanklicksjusteringar, som med inklistring och länköppning.",
            option: {
                openScope: {
                    label: "Öppna omfattning",
                    description: "Förhindra mellanklickning på dessa innehållstyper från att öppna dem.",
                    links: "Länkar",
                    media: "Media",
                    linksAndMedia: "Länkar och media",
                    none: "Ingen"
                },
                pasteScope: {
                    label: "Klistra in omfattning",
                    description: "Förhindra att mittklick klistras in under dessa situationer.",
                    always: "Förhindra alltid att klistra in mellanklick",
                    focus: "Förhindra endast när textområdet inte är fokuserat",
                },
                pasteThreshold: {
                    label: "Klistra in tröskel",
                    description: "Millisekunder tills inklistring aktiveras igen efter ett mittklick."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock och mer",
            command: {
                echo: {
                    description: "Skickar ett meddelande som Clyde (lokalt)"
                },
                lenny: {
                    description: "Skickar ett lenny-ansikte"
                },
                mock: {
                    description: "håna människor"
                },
                wordcount: {
                    description: "Räknar antalet ord i ett meddelande",
                    response: "Meddelandet innehåller {{count}} ord."
                },
                flipcoin: {
                    description: "Vänder ett mynt och returnerar huvuden eller svansar",
                    heads: "Huvuden",
                    tails: "Svansar",
                    response: "Myntet landade på {{result}}."
                },
                ask: {
                    description: "Ställ en ja/nej-fråga och få svar",
                    yes: "Ja",
                    no: "Inga",
                    maybe: "Kanske",
                    askAgain: "Fråga igen senare",
                    definitelyNot: "Definitivt inte",
                    itIsCertain: "Det är säkert"
                },
                randomanimal: {
                    description: "Få en slumpmässig djurbild",
                    animal: "välj ditt djur",
                    cat: "katt",
                    dog: "hund",
                    response: "Tyvärr, det gick inte att hämta en djurbild just nu"
                },
                randomnumber: {
                    description: "Genererar ett slumptal mellan två värden",
                    min: "Minsta värde",
                    max: "Maximalt värde",
                    response: "Slumptal mellan {{min}} och {{max}}: {{number}}"
                },
                choose: {
                    description: "Väljer slumpmässigt bland tillhandahållna alternativ",
                    option: "Kommaseparerad lista med val",
                    response: "Jag väljer: {{choice}}"
                },
                systeminfo: {
                    description: "Visar systeminformation",
                    platform: "Plattform",
                    deviceType: "Enhetstyp",
                    mobile: "Mobil",
                    desktop: "Skrivbord",
                    browser: "Webbläsare",
                    cpuCores: "CPU-kärnor",
                    memory: "Minne",
                    screen: "Skärm",
                    languages: "Språk",
                    network: "Nätverk",
                    online: "Online",
                    offline: "Off-line",
                    failedToFetch: "Det gick inte att hämta systeminformation",
                    unknown: "Okänd"
                },
                getuptime: {
                    description: "Får kundens drifttid",
                    response: "**Upptid för klient**: {{uptime}} minuter"
                },
                gettime: {
                    description: "Hämtar aktuell tid",
                    response: "Aktuell tid är {{time}}"
                },
                transform: {
                    description: "Förvandla din text med det angivna alternativet",
                    transformation: {
                        description: "Transformation för att tillämpa på din text",
                        lowercase: "Konvertera text till gemener",
                        uppercase: "Konvertera text till versaler",
                        localeLowercase: "Konvertera text till lokal gemener",
                        localeUppercase: "Konvertera text till lokal versaler",
                        same: "Förbli densamma"
                    },
                    repeat: "hur många gånger att upprepa",
                    reverse: "om texten ska vändas",
                    normalize: {
                        description: "Form för normalisering av text",
                        nfc: "Normaliseringsformulär C (NFC)",
                        nfd: "Normaliseringsform D (NFD)",
                        nfkc: "Normaliseringsformulär KC (NFKC)",
                        nfkd: "Normaliseringsformulär KD (NFKD)"
                    },
                    text: "Förvandla denna text"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Lägger till mer Kaomoji till Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Förbättrar snabbreaktionsknapparna i meddelandekontextmenyn.",
            option: {
                reactionCount: {
                    label: "Antal reaktioner",
                    description: "Antal reaktioner (0-42)"
                },
                frequentEmojis: {
                    label: "Frekventa emojis",
                    description: "Använd ofta använda emojis istället för favoritemojis"
                },
                rows: {
                    label: "Rader",
                    description: "Rader med snabba reaktioner att visa"
                },
                columns: {
                    label: "Kolumner",
                    description: "Kolumner med snabba reaktioner att visa"
                },
                compactMode: {
                    label: "Kompakt läge",
                    description: "Skalar knapparna till 75 % av deras ursprungliga skala, samtidigt som den inre emojin ökar till 125 % skala. Emojis kommer att vara 93,75 % av originalstorleken. Rekommenderas att ha minst 5 kolumner"
                },
                scroll: {
                    label: "Rulla",
                    description: "Aktivera rullning av listan med emojis"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Lägger till taggar för webhooks och moderativa roller (ägare, admin, etc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Denna användare är en webhook"
                },
                owner: {
                    name: "Owner",
                    description: "Äger servern"
                },
                admin: {
                    name: "Admin",
                    description: "Har administratörsbehörighet"
                },
                staff: {
                    name: "Staff",
                    description: "Kan hantera server, kanaler eller roller"
                },
                mod: {
                    name: "Mod",
                    description: "Kan hantera meddelanden eller sparka/banna personer"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "Kan hantera röstchatt"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "Kan hantera meddelanden"
                }
            },
            modal: {
                example: "Exempel",
                tag: "Märka",
                customTextPlaceholder: "Text på tagg (standard: {{displayName}})",
                messages: "Visas i meddelanden",
                memberList: "Visa i medlemslista och profiler"
            },
            option: {
                dontShowForBots: {
                    label: "Visa inte för bots",
                    description: "Visa inte extra taggar för bots (exklusive webhooks)"
                },
                dontShowBotTag: {
                    label: "Visa inte bot-taggen",
                    description: "Visa endast extra taggar för bots / Göm [APP] text"
                },
                showWebhookTagFully: {
                    label: "Visa webhook-taggen helt",
                    description: "Visa Webhook-taggen i följda kanaler som tillkännagivanden"
                },
                tagSettings: {
                    label: "Tagginställningar",
                    description: "fyll mig"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Ett snedstreck kommando för att översätta till/från morsekod.",
            command: {
                morse: {
                    description: "Översätt till eller från morsekod",
                    message: "Text att konvertera"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volym",
                    description: "Volym av 🗿🗿🗿"
                },
                quality: {
                    label: "Kvalitet",
                    description: "Kvaliteten på 🗿🗿🗿",
                    normal: "Normal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Utlösare när ofokuserad",
                    description: "Aktivera 🗿 även när fönstret är ofokuserat"
                },
                ignoreBots: {
                    label: "Ignorera bots",
                    description: "Ignorera meddelanden från bots"
                },
                ignoreBlocked: {
                    label: "Ignorera blockerade användare",
                    description: "Ignorera meddelanden från blockerade användare"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Musikkontroller och texter för flera tjänster",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Visa Spotify-kontroller",
                    description: "Visa musikkontroller för Spotify"
                },
                showSpotifyLyrics: {
                    label: "Visa Spotify-texter",
                    description: "Visa texter för Spotify"
                },
                useSpotifyUris: {
                    label: "Använd Spotify URI:er",
                    description: "Öppna Spotify URI:er istället för Spotify URL:er. Fungerar bara om du har Spotify installerat och kanske inte fungerar på alla plattformar"
                },
                previousButtonRestartsTrack: {
                    label: "Föregående knapp Startar om spår",
                    description: "Starta om det spår som spelas när du trycker på föregående knapp om speltiden är >3s"
                },
                tidalSectionTitle: {
                    label: "Tidvattens"
                },
                showTidalControls: {
                    label: "Visa tidvattenkontroller",
                    description: "Visa musikkontroller för Tidal"
                },
                showTidalLyrics: {
                    label: "Visa Tidal Lyrics",
                    description: "Visa texter för Tidal"
                },
                websocketURL: {
                    label: "Websocket-URL",
                    description: "Standard är ws://localhost:24123"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "{{app}} krävs för dessa inställningar"
                },
                showYoutubeMusicControls: {
                    label: "Visa YouTube Music-kontroller",
                    description: "Visa musikkontroller för YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube Music API URL",
                    description: "URL:en för YouTube Music API-servern du använder"
                },
                hoverControls: {
                    label: "Hover kontroller",
                    description: "Visa kontroller när du håller muspekaren"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Show Music Note On No Lyrics",
                    description: "Visa en notikon när ingen text hittas"
                },
                lyricsPosition: {
                    label: "Lyrics Position",
                    description: "Placering av textpanelen",
                    above: "Ovan spelare",
                    below: "Nedanstående spelare"
                },
                lyricsProvider: {
                    label: "Textleverantör",
                    description: "Där texterna hämtas ifrån",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "Spotify Lyrics API-URL",
                    description: "Bas-URL för Spotify lyrics API."
                },
                translateTo: {
                    label: "Översätt till",
                    description: "Översätt texter till - Om du ändrar detta rensas befintliga översättningar",
                    cleared: "Översättning rensad"
                },
                lyricsConversion: {
                    label: "Textkonvertering",
                    description: "Översätt eller romanisera texter automatiskt",
                    none: "Ingen",
                    translate: "Översätta",
                    romanize: "romanisera"
                },
                fallbackProvider: {
                    label: "Reservleverantör",
                    description: "När en textleverantör misslyckas, prova andra leverantörer"
                },
                showFailedToasts: {
                    label: "Visa misslyckade skålar",
                    description: "Visa skålar när texterna inte laddas"
                },
                purgeLyricsCache: {
                    label: "Rensa textcache",
                    description: "Rensa alla cachade texter och översättningar",
                    button: "Rensa cache",
                    cacheLyricsPurged: "Textens cache har rensats"
                }
            },
            context: {
                spotify: {
                    label: "Spotify Lyrics Meny",
                    type: "Spotify {{type}} Meny",
                    copy: "Kopiera {{type}} Namn",
                    link: "Kopiera {{type}} länk",
                    open: "Öppna {{type}} i Spotify",
                    album: "Spotify albummeny"
                },
                tidal: {
                    label: "Tidal Lyrics Meny",
                    lyrics: "Tidal texter",
                    type: "Tidvatten {{name}} Meny",
                    copy: "Kopiera {{name}} Namn",
                    open: "Öppna {{name}} i Tidal",
                    album: "Tidal Album Meny"
                },
                ytm: {
                    type: "YouTube Music {{name}} Meny",
                    copy: "Kopiera {{name}} Namn",
                    open: "Öppna {{name}} i YouTube Music",
                    album: "YouTube Music Album Meny",
                    muted: "Dämpad"
                },
                lyrics: {
                    provider: "Textleverantör",
                    saved: "sparat",
                    notFound: "Inga synkroniserade texter hittades"
                },
                copy: {
                    currentLyrics: "Kopiera aktuella texter"
                }
            },
            alert: {
                lyricCopied: "Lyric kopierad till urklipp!",
                noLyrics: "Inga texter",
                noLyricsTo: "Ingen text till {{translated}}",
                translate: "översätta",
                romanize: "romanisera",
                lyricsFetchFailed: "Det gick inte att hämta texter",
                failedToFetchLyrics: "Det gick inte att hämta {{translated}}",
                translation: "översättning",
                romanization: "romanisering",
                failedToFetchTranslation: "Det gick inte att hämta {{translated}} sångtexter"
            },
            modal: {
                install: {
                    title: "Hur man installerar",
                    install: "Installera {{link}} härifrån och gå sedan till TidalLuna-inställningar → Plugin-butiker → Installera @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Inget spår spelas",
                    artist: "Konstnär:",
                    album: "Album:",
                    noLyrics: "Inga texter tillgängliga :(",
                    progress: "Framsteg",
                    totalDuration: "Total varaktighet"
                },
                type: {
                    song: "Låt",
                    artist: "Konstnär",
                    album: "Album"
                },
                album: {
                    open: "Öppna Album",
                    viewCover: "Se albumomslaget",
                    volume: "Volym",
                    image: "Albumbild"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Översatt",
                romanized: "Romaniserad",
                none: "Ingen"
            },
            error: {
                failed: "Det gick inte att återge Modal :(",
                checkConsole: "Kontrollera konsolen för fel",
                invalidUrlCustomApi: "Ogiltigt URL-format för Custom API Server URL"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Visar ömsesidiga grupp-DM i profiler",
            no: "Inga ömsesidiga grupper",
            mutualGroup: "{{count}} Ömsesidig grupp{{s}}",
            members: "Medlemmar",
            noGroup: "Inga grupp-DM:n gemensamt",
            header: "Ömsesidiga grupper"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Förhindrar förhandsvisningar under samtal/PiP (skärmdelning, strömmar, etc.) från att pausas även om klienten tappar fokus",
            about: "Denna plugin kommer att få Discord att använda mer resurser än vanligt"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Stäng automatiskt av nya servrar och ändra olika andra inställningar när du går med",
            context: {
                apply: "Använd NewGuildSettings"
            },
            option: {
                guild: {
                    label: "Mute Guild",
                    description: "Stäng av Guild automatiskt"
                },
                messages: {
                    label: "Servermeddelandeinställningar",
                    description: "Servermeddelandeinställningar",
                    all: "Alla meddelanden",
                    mentions: "Endast @nämner",
                    nothing: "Ingenting",
                    default: "Server standard"
                },
                everyone: {
                    label: "Förtryck @alla och @här",
                    description: "Förtryck @alla och @här"
                },
                role: {
                    label: "Undertryck alla roll@omnämnanden",
                    description: "Undertryck alla roll@omnämnanden"
                },
                highlights: {
                    label: "Dämpa höjdpunkter",
                    description: "Dämpa högdagrar automatiskt"
                },
                events: {
                    label: "Stäng av nya händelser",
                    description: "Stäng av nya händelser automatiskt"
                },
                showAllChannels: {
                    label: "Visa alla kanaler",
                    description: "Visa alla kanaler automatiskt"
                },
                mobilePush: {
                    label: "Stäng av mobila push-meddelanden",
                    description: "Stäng av mobila push-meddelanden automatiskt"
                },
                voiceChannels: {
                    label: "Röstkanaler",
                    description: "Dölj namn i röstkanaler automatiskt"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Verktyg som meddelar dig när nya plugins läggs till Plexcord",
            modal: {
                title: "Nya plugins och inställningar",
                description: "Nya plugins och inställningar har lagts till sedan ditt senaste besök. Vänligen granska de nya tilläggen nedan.",
                tooltip: "Avvisa för denna session",
                dontShowAgain: "Visa inte detta igen",
                restartRequired: "Omstart krävs för att tillämpa ändringar",
                restart: "Starta om",
                continue: "Fortsätta"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Återställer botens tagg till sin ursprungliga form"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Döljer alla blockerade/ignorerade meddelanden från chatten helt",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Dölj även ignorerade användare",
                    description: "Dölj även meddelanden från ignorerade användare."
                },
                disableNotifications: {
                    label: "Inaktivera aviseringar",
                    description: "Dölj nya meddelandeaviseringar för blockerade användare. Alltid sant om \"Standarddölj användare\" är aktiverat nedan och användaren som utlöser aviseringen inte är undantagen i \"Åsidosätt användare\"."
                },
                allowAutoModMessages: {
                    label: "Tillåt AutoMod-meddelanden",
                    description: "Tillåt att meddelanden som skickas av AutoMod kringgår filtrering."
                },
                hideBlockedUserReplies: {
                    label: "Dölj blockerade användarsvar",
                    description: "Dölj meddelanden från blockerade användare i trådar om du har deltagit i tråden."
                },
                defaultHideUsers: {
                    label: "Standard Dölj användare",
                    description: "Om det är aktiverat kommer meddelanden från blockerade användare att vara helt dolda och alla meddelanden från användar-ID:n i åsidosättningslistan kommer att komprimeras (standard Discord-beteende) istället. Om det är inaktiverat kommer meddelanden från blockerade användare att komprimeras och alla meddelanden från användar-ID:n i åsidosättningslistan kommer att döljas helt istället."
                },
                overrideUsers: {
                    label: "Åsidosätt användare",
                    description: "Kommaseparerad lista med användar-ID:n som kommer att döljas eller komprimeras istället för standardbeteendet som valts ovan."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Hindrar dig från att skriva markdown-punkter (stinkende)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Inaktiverar Discords redundanta djuplänkningsfunktion som försöker tvinga dig att använda deras skrivbordsapp"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Tar bort kravet \"ange servernamn\" när en server tas bort",
            option: {
                confirmModal: {
                    label: "Bekräfta Modal",
                    description: "Bör en modal \"Är du säker på att du vill ta bort\" visas?"
                }
            },
            modal: {
                title: "Ta bort server?",
                body: "Det är permanent, om det inte var uppenbart.",
                confirm: "Radera",
                cancel: "Avboka"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Inaktiverar \"HOLD UP\"-bannern i konsolen. Som en bieffekt förhindrar även Discord från att dölja din token, vilket förhindrar slumpmässiga utloggningar."
        },
        noF1: {
            name: "NoF1",
            description: "Inaktiverar F1 hjälpbindning."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Att klistra in en länk samtidigt som text markeras kommer inte att klistras in som en maskerad URL"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Förhindrar att kameran speglas på din skärm"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Tar bort den 300 ms långa animationen när modaler öppnas eller stänger"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Tar bort Discord-bildmosaik",
            option: {
                inlineVideo: {
                    label: "Inline video",
                    description: "Spela upp videor utan karusellmodal"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Tar bort ALLA Discords Nitro-uppförsäljningar genom att lura klienten att tro att du har Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Går förbi Discords introduktionsprocess för snabbare serverinträde."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Hoppar över den långsamma och irriterande förseningen ombord"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Tar bort pingantalet för inkommande vänförfrågningar, meddelandeförfrågningar och Nitro-erbjudanden.",
            option: {
                hideFriendRequestsCount: {
                    label: "Dölj antalet vänförfrågningar",
                    description: "Dölj antalet inkommande vänförfrågningar"
                },
                hideMessageRequestsCount: {
                    label: "Dölj antal meddelandeförfrågningar",
                    description: "Dölj antalet meddelandeförfrågningar"
                },
                hidePremiumOffersCount: {
                    label: "Dölj premiumerbjudanden räknas",
                    description: "Dölj Nitro-erbjudanden räknas"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Tar helt bort Nitro-profilteman från alla utom dig själv."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Förbigår push-to-talk-kravet för röstaktivitet i kanaler som upprätthåller det."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Inaktiverar svarspingar som standard",
            option: {
                userList: {
                    label: "Användarlista",
                    description: "Lista över användare att tillåta eller undanta pingar för (avgränsade med kommatecken eller mellanslag)"
                },
                roleList: {
                    label: "Rolllista",
                    description: "Lista över roller att tillåta eller undanta pingar för (avgränsade med kommatecken eller mellanslag)"
                },
                shouldPingListed: {
                    label: "Bör pinglistas",
                    description: "Beteende",
                    dontPing: "Pinga inte de angivna användarna/rollerna",
                    onlyPing: "Pinga bara de angivna användarna/rollerna"
                },
                inverseShiftReply: {
                    label: "Omvänt skiftsvar",
                    description: "Invertera Discords skiftsvarsbeteende (aktivera för att få skiftsvar att nämna användare)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Ta bort kanariefågel/ptb från meddelandelänkar"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Vi är alla lika!! Tar bort rollrubrikerna i medlemslistan."
        },
        noRPC: {
            name: "NoRPC",
            description: "Inaktiverar Discord Rich Presence"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Visa inte server-emojis i autoslutförandemenyn.",
            option: {
                shownEmojis: {
                    label: "Visade emojis",
                    description: "Välj vilka emojis som ska visas i menyn för autoslutförande",
                    onlyUnicode: "Endast unicode-emojis",
                    currentServer: "Unicode-emojis och server-emojis från nuvarande server",
                    all: "Unicode-emojis och alla server-emojis (Discord-standard)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Inaktiverar aktivitetsfältet och systemfältets olästa antal märke."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Gör skrivbordsaviseringar mer informativa"
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Ställ in anpassad volym för Discord-aviseringar",
            option: {
                notificationVolume: {
                    label: "Aviseringsvolym",
                    description: "Aviseringsvolym"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Inaktiverar skrivanimationen i chatten"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Låter dig hoppa till meddelanden från blockerade eller ignorerade användare och troliga spammare utan att avblockera dem."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Om olästa meddelanden skickas av en användare i DM flera gånger kommer du bara att få en ljudping.",
            option: {
                channelToAffect: {
                    label: "Kanal att påverka",
                    description: "Välj vilken typ av DM som pluginet ska påverka",
                    both: "Både",
                    user: "Användar-DM",
                    group: "Grupp DM"
                },
                allowMentions: {
                    label: "Tillåt omnämnanden",
                    description: "Ta emot ljudpingningar för @omnämnanden"
                },
                allowEveryone: {
                    label: "Tillåt alla",
                    description: "Ta emot ljudpingningar för @alla och @här i grupp-DM"
                },
                ignoreUsers: {
                    label: "Ignorera användare",
                    description: "Användar-ID:n (komma + blanksteg) vars ping ALDRIG bör strypas"
                },
                alwaysPlaySound: {
                    label: "Spela alltid ljud",
                    description: "Spela upp meddelandeaviseringsljudet även när det är inaktiverat"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Öppna länkar i sina respektive appar istället för din webbläsare",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Öppna Spotify-länkar i Spotify-appen"
                },
                steam: {
                    label: "Ånga",
                    description: "Öppna Steam-länkar i Steam-appen"
                },
                epic: {
                    label: "Episka spel",
                    description: "Öppna Epic Games-länkarna i Epic Games Launcher"
                },
                tidal: {
                    label: "Tidvattens",
                    description: "Öppna Tidal-länkar i Tidal-appen"
                },
                itunes: {
                    label: "iTunes",
                    description: "Öppna Apple Music-länkar i iTunes-appen"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Öppna VRChat-länkar i VRCX-appen"
                }
            },
            notification: {
                open: "Öppnad länk i inbyggd app"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Låter dig åsidosätta standard forumlayout/sorteringsordning. Du kan fortfarande ändra det per kanal",
            option: {
                defaultLayout: {
                    label: "Standardtaggar",
                    description: "Vilken layout som ska användas som standard",
                    list: "Lista",
                    gallery: "Galleri"
                },
                defaultSortOrder: {
                    label: "Standard sorteringsordning",
                    description: "Vilken sorteringsordning som ska användas som standard",
                    recentlyActive: "Nyligen aktiv",
                    datePosted: "Upplagt datum"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Låter dig använda festläget eftersom festen aldrig tar slut ✨",
            option: {
                superIntensePartyMode: {
                    label: "Superintensivt partyläge",
                    description: "Festintensitet",
                    normal: "Normal",
                    better: "Bättre",
                    projectX: "Projekt X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Återställer alternativet att pausa inbjudningar på obestämd tid som Discord överflödigt tog bort.",
            pauseIndefinitely: "Pausa på obestämd tid"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Inaktiverar klientsidans begränsningar för kanalbehörighetshantering.",
            option: {
                lockout: {
                    label: "Lockout",
                    description: "Förbigå skyddet av behörighetslåset ('Ganska säker på att du inte vill göra det här')"
                },
                onboarding: {
                    label: "Onboarding",
                    description: "Gå förbi introduktionskraven ('Att göra den här ändringen kommer att göra din server inkompatibel [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Visa behörigheter en användare eller kanal har och rollerna för en server",
            view: "Visa behörigheter",
            option: {
                permissionsSortOrder: {
                    label: "Behörigheter Sorteringsordning",
                    description: "Sorteringsmetoden som används för att definiera vilken roll som ger en användare en viss behörighet",
                    highest: "Högsta roll",
                    lowest: "Lägsta roll"
                }
            },
            icon: {
                denied: "Nekad",
                allowed: "Tillåten",
                notOverwritten: "Ej överskriven"
            },
            context: {
                permissions: "Behörigheter"
            },
            modal: {
                title: "Behörigheter",
                noPermissions: "Inga behörigheter att visa!",
                owner: "ägare",
                grantedBy: "Beviljas av",
                serverOwner: "Serverägare",
                ownerRole: "Ägare",
                sortingBy: "Sorterar efter {{method}}",
                highest: "Högsta roll",
                lowest: "Lägsta roll",
                details: "Rolldetaljer"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Lägger till ett /petpet snedstreck kommando för att skapa headpet GIFs från vilken bild som helst",
            command: {
                petpet: {
                    description: "Skapa en petpet GIF. Du kan bara ange ett av bildalternativen",
                    delay: "Fördröjningen mellan varje bildruta. Standard är 20.",
                    resolution: "Upplösning för GIF. Standard är 120. Om du anger ett vansinnigt nummer och det fryser Discord är det ditt fel.",
                    image: "Bildbilaga att använda",
                    url: "URL att hämta bild från",
                    user: "Användare vars avatar ska användas som bild",
                    noServerPfp: "Använd den vanliga avataren istället för den serverspecifika när du använder alternativet \"användare\".",
                    error: {
                        noImage: "Ingen bild specificerad!",
                        delayTooLow: "Förseningen måste vara minst 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Ladda upp är inte en bild",
                fetchUserFailed: "Det gick inte att hämta användaren. Kontrollera konsolen för mer information.",
                fetchImageFailed: "Ett fel uppstod när {{url}} laddades. Kontrollera konsolen för mer information."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Lägger till bild-i-bild till videor (bredvid knappen Ladda ner)",
            tooltip: "Växla bild-i-bild",
            option: {
                loop: {
                    label: "Slinga",
                    description: "Om du ska göra PiP-videoslingan eller inte"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Låter dig fästa privata kanaler till toppen av din DM-lista. Högerklicka på DM om du vill fästa/lossa eller ändra ordning på nålar",
            context: {
                category: {
                    label: "Pin DMs kategorimeny",
                    edit: "Redigera kategori",
                    up: "Flytta upp",
                    down: "Flytta ner",
                    delete: "Ta bort kategori",
                    unnamed: "oj oj"
                },
                pin: {
                    label: "Pin DM",
                    addCategory: "Lägg till kategori"
                },
                unPin: {
                    label: "Lossa DM",
                    move: "Flytta till kategori"
                }
            },
            option: {
                pinOrder: {
                    label: "Pinbeställning",
                    description: "I vilken ordning ska fästade DM:n visas?",
                    lastMessage: "Senaste meddelandet",
                    custom: "Anpassad (högerklicka på kanaler för att ändra ordning)"
                },
                canCollapseDmSection: {
                    label: "Hopfällbar fäst sektion",
                    description: "Tillåt okategoriserade DM-avsnitt att vara hopfällbara"
                },
                dmSectionCollapsed: {
                    label: "DM-sektionen har kollapsat",
                    description: "Komprimera DM-avsnittet"
                },
                userBasedCategoryList: {
                    label: "Användarbaserad kategorilista",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Pin Kategori",
                    edit: "Redigera kategori",
                    new: "Ny kategori",
                    name: "Name",
                    color: "Färg",
                    save: "Spara",
                    create: "Skapa"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Anpassningsbara aviseringar med förbättrad omnämningsformatering",
            option: {
                friends: {
                    label: "Vänner",
                    description: "Meddela när vänner skickar meddelanden på servrar"
                },
                mentions: {
                    label: "Omnämnanden",
                    description: "Meddela när någon @nämner dig direkt"
                },
                dms: {
                    label: "DM",
                    description: "Avisera för direktmeddelanden (DM)"
                },
                showInActive: {
                    label: "Visa i aktiv",
                    description: "Visa aviseringar även för aktiv kanal"
                },
                ignoreMuted: {
                    label: "Ignorera tyst",
                    description: "Hoppa över aviseringar från avstängda servrar, kanaler eller användare"
                }
            },
            unknown: "Okänd",
            dm: "DM",
            groupDM: "Grupp DM",
            title: "{{username}} i {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Lägger till en nålikon till fästa meddelanden"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Visa inte de små guild-ikonerna i mappar"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Lägger till plattformsindikatorer (Desktop, Mobile, Web...) till användare",
            embeddedTooltip: "Trösta",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lista",
                    description: "Visa indikatorer i medlemslistan"
                },
                badges: {
                    label: "Märken",
                    description: "Visa indikatorer i användarprofiler som märken"
                },
                messages: {
                    label: "Meddelanden",
                    description: "Visa indikatorer i meddelanden"
                },
                colorMobileIndicator: {
                    label: "Färg mobil indikator",
                    description: "Om mobilindikatorn ska matcha färgen på användarstatusen."
                },
                showBots: {
                    label: "Visa bots",
                    description: "Om plattformsindikatorer ska visas på bots"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Förfalska vilken plattform eller enhet du är på",
            about: "Vi kan inte garantera att detta plugin inte får dig varnad eller förbjuden.",
            platform: {
                desktop: "Discord-klient",
                web: "Discord webben",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord inbäddad",
                playstation: "Discord inbäddad",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Plattform",
                    description: "Vilken plattform man ska dyka upp som",
                    desktop: "Skrivbord",
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
            description: "Lägger till en knapp i AppBar som innehåller Plexcord snabba åtgärder",
            tooltip: "Plexcord verktygslåda",
            context: {
                openLog: "Öppna meddelandeloggen",
                enableQuickCSS: "Aktivera QuickCSS",
                openQuickCSS: "Redigera QuickCSS",
                openSettings: "Öppna Inställningar",
                manageThemes: "Hantera teman"
            },
            option: {
                showPluginMenu: {
                    label: "Visa plugin-menyn",
                    description: "Visa plugin-menyn i Plexcord Toolbox"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Justerar dina meddelanden för att få dem att se snyggare ut och ha bättre grammatik. Se inställningar",
            option: {
                quickDisable: {
                    label: "Snabb inaktivering",
                    description: "Snabb inaktivering. Stänger av meddelandeändring utan att klienten behöver laddas om."
                },
                blockedWords: {
                    label: "Blockerade ord",
                    description: "Ord som inte kommer att skrivas med versaler (kommaseparerade)."
                },
                fixApostrophes: {
                    label: "Fixa apostroferna",
                    description: "Se till att sammandragningar innehåller apostrof."
                },
                expandContractions: {
                    label: "Expandera sammandragningar",
                    description: "Expandera sammandragningar"
                },
                fixCapitalization: {
                    label: "Fixa versaler",
                    description: "Skriv meningar med versaler."
                },
                fixPunctuation: {
                    label: "Fixa interpunktion",
                    description: "Fixa mellanrum runt skiljetecken."
                },
                fixPunctuationFrequency: {
                    label: "Fixa interpunktionfrekvens",
                    description: "Procentuell periodfrekvens (detta irriterar i hög grad vissa människor).",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Låter dig förhandsgranska ditt meddelande innan du skickar det.",
            tooltip: "Förhandsgranska meddelande"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Låter dig spara och ladda olika profilförinställningar via profilsektionen i Inställningar.",
            toast: {
                importFailed: "Det gick inte att importera profiluppsättningar. Filen kan vara ogiltig.",
            },
            option: {
                avatarSize: {
                    label: "Avatarstorlek",
                    description: "Avatarstorlek i förinställd lista"
                }
            },
            modal: {
                override: "Åsidosätta",
                merge: "Slå ihop",
                cancel: "Avboka",
                timestamp: "{{formattedDate}} vid {{formattedTime}}",
                rename: "Döpa om",
                update: "Uppdatera",
                moveUp: "Flytta upp",
                moveDown: "Flytta ner",
                moveTo: "Flytta till sida 1",
                delete: "Radera",
                importProfiles: "Importera profiler",
                importText: "Du har {{existingCount}} befintliga profiler i det här avsnittet. Vill du åsidosätta dem eller slå samman med importerade profiler?",
                heading: "Sparade profiler",
                searchProfiles: "Sök profiler...",
                profileName: "Profilnamn",
                saving: "Sparande...",
                save: "Spara profil",
                cancelSearch: "Avbryt sökning",
                search: "Söka",
                random: "Slumpmässig",
                import: "Importera",
                exportAll: "Exportera alla"
            }
        },
        questify: {
            name: "Questify",
            description: "Förbättra din Quest-upplevelse med en uppsättning funktioner, eller inaktivera dem helt om de inte är din grej.",
            quests: "Uppdrag",
            context: {
                quest: {
                    label: "Quest-knappsmeny",
                    ignore: "Markera alla ignorerade",
                    reset: "Återställ ignorerad lista",
                    fetch: "Hämta uppdrag",
                    markAsIgnored: "Markera som ignorerad",
                    unmarkAsIgnored: "Avmarkera som ignorerad",
                    stopAuto: "Stoppa Auto-Complete",
                    copyQuestID: "Kopiera Quest ID",
                    startAuto: "Starta Auto-Complete"
                }
            },
            settings: {
                questButton: {
                    title: "Quest-knappen",
                    description: "Visa en Quest-knapp i serverlistan med en valfri indikator för uppdrag utan anspråk.",
                    leftClick: "Vänsterklicka Åtgärd",
                    middleClick: "Mellanklickåtgärd",
                    rightClick: "Högerklicka Åtgärd",
                    visibility: "Knapp Synlighet",
                    unclaimedIndicator: "Indikator för ohävd",
                    badgeColor: "Badge färg",
                    rewardDisplay: "Belöningsvisning",
                    includedRewardTypes: "Inkluderade belöningstyper",
                    includedRewardTypesDesc: "Räkna endast uppdrag med dessa belöningstyper som outtagna när man bestämmer knappsynlighet, märkesantal och när man spelar upp varningsljudet.",
                    selectRewardTypes: "Välj vilka belöningstyper som ska inkluderas i antalet outtagna...",
                    noRewardType: "Det finns ingen Quest-funktion med det namnet som stöds.",
                    default: "Standard",
                    disable: "Inaktivera"
                },
                questFeatures: {
                    title: "Quest funktioner",
                    description: "Ändra specifika Quest-funktioner.",
                    popupWarning: "Alternativet {{disablePopup}} kommer att ignoreras för slutförda uppdrag och spårning av Quest-förlopp.",
                    videoQuestInfo: "Alternativet {{completeVideo}} väntar så länge videouppdraget pågår och markerar det som avslutat automatiskt.",
                    gameQuestInfo: "På samma sätt kommer alternativet {{completeGame}} att vänta under speluppdraget och markera det som avslutat automatiskt. Det här alternativet stöds endast på den officiella skrivbordsklienten.",
                    manualStartWarning: "Du måste fortfarande starta uppdragen manuellt. Det första klicket startar uppdragen i bakgrunden. För videouppdrag kommer efterföljande klick att öppna videomodalen som vanligt. För att avbryta uppdragen kan du öppna snabbmenyn på uppdragsrutan och välja {{stopAuto}}.",
                    tosWarning: "Att använda något av dessa alternativ är emot Discords ToS. Användning på egen risk.",
                    selectFeatures: "Välj vilka Quest-funktioner som ska ändras.",
                    disablePopup: "Inaktivera Quest Popup Above Account Panel",
                    completeVideo: "Slutför videouppdrag i bakgrunden",
                    completeGame: "Slutför speluppdrag i bakgrunden",
                    stopAuto: "Stoppa Auto-Complete"
                },
                restyleQuests: {
                    title: "Styla om uppdrag",
                    description: "Markera uppdrag med valfria temafärger för synlighet.",
                    precedenceNote: "Anspråkade och utgångna Quest-stilar kommer att ha företräde även om en Quest ignoreras.",
                    gradientStyle: "Gradientstil",
                    assetPreload: "Asset Preload",
                    unclaimed: "Ohämtad",
                    claimed: "Påstod",
                    ignored: "Ignorerade",
                    expired: "Utgått",
                    intenseGradient: "Intensiv Restyle Gradient",
                    defaultGradient: "Standard omstilsgradient",
                    blackGradient: "Subtil svart gradient",
                    noGradient: "Ingen gradient",
                    loadAllAssets: "Ladda alla Quest-tillgångar vid sidladdning",
                    loadDuringScroll: "Ladda Quest-tillgångar under sidrullning"
                },
                reorderQuests: {
                    title: "Ordna om uppdrag",
                    description: "Sortera uppdragen efter deras status. Tillämpas när sorteringsalternativet \"Questify\" är valt på Quest-sidan.",
                    formatNote: "Kommaseparerad lista måste innehålla alla: {{items}}.",
                    placeholder: "Du måste inkludera allt AVSÄTTAT, KRÄVAT, IGNORERAD, UTGÅTT",
                    invalidFormat: "Ogiltigt format.",
                    unclaimedSubsort: "Unclaimed Subsort",
                    claimedSubsort: "Påstådd underordnad",
                    ignoredSubsort: "Ignorerad underordnad",
                    expiredSubsort: "Utgått underordnad",
                    addedNewest: "Tillagd (nyast)",
                    addedOldest: "Tillagd (äldst)",
                    expiredRecent: "Utgått (senast)",
                    expiredLeast: "Utgått (senast nyligen)",
                    expiringSoon: "Utgår (snarast)",
                    expiringLate: "Utgår (senaste)",
                    claimedRecent: "Gjorde anspråk (senast)",
                    claimedLeast: "Anspråk på (senast senaste)",
                    ignoredQuestProfile: "Ignorerad Quest-profil",
                    sharedProfile: "Delad: Alla konton på denna kundandel ignoreras.",
                    privateProfile: "Privat: Alla konton på denna klient har separata ignoreringar.",
                    rememberSort: "Kom ihåg Sorteringsval",
                    rememberFilter: "Kom ihåg filterval",
                    yes: "Ja",
                    no: "Inga",
                    rememberNote: "Detta sorterings- och filterval hänvisar till de inbyggda sorterings- och filteralternativen på Quest-sidan. Den anpassade sorteringen ovan tillämpas endast när sorteringsalternativet \"Questify\" är valt på Quest-sidan. Om att komma ihåg är inaktiverat kommer sorterings- eller filteralternativen att återställas varje gång du öppnar Quest-sidan."
                },
                fetchingQuests: {
                    title: "Hämta uppdrag",
                    description: "Konfigurera hur ofta du vill hämta uppdrag från Discord och ställ in varningar för nya uppdrag.",
                    defaultBehavior: "Som standard hämtar Discord endast uppdrag vid laddning och när man besöker uppdragssidan. Detta innebär att utan ett hämtningsintervall definierat nedan, kommer detta plugin att bli omedvetet om nya uppdrag som läggs till under dagen.",
                    requirement: "Detta förlitar sig på att Quest-knappen är aktiverad och inställd på antingen {{unclaimed}}, eller inställd på {{always}} med indikatorerna {{pill}}, {{badge}} eller {{both}} som inte har gjorts anspråk på aktiverade. Annars finns det ingen anledning att regelbundet hämta uppdrag.",
                    blockWarning: "Dessutom, om {{fetchingQuests}} är blockerad i {{questFeatures}}-inställningen, kommer detta inte att fungera.",
                    fetchInterval: "Hämtningsintervall",
                    alertSound: "Varningsljud",
                    intervalPlaceholder: "Välj eller skriv ett intervall mellan 30 minuter och 12 timmar.",
                    intervalFeedback: "Intervaller måste vara mellan 30 minuter och 12 timmar.",
                    soundPlaceholder: "Välj ett ljud eller ange en anpassad ljud-URL.",
                    soundFeedback: "Ljudet hittades inte, eller så kommer webbadressen inte från en domän som stöds.",
                    disabled: "Inaktiverad",
                    minutes: "Minuter",
                    minute: "Minut",
                    hours: "Timmar",
                    hour: "Timme",
                    thirtyMinutes: "30 minuter",
                    oneHour: "1 timme",
                    threeHours: "3 timmar",
                    sixHours: "6 timmar",
                    twelveHours: "12 timmar",
                    customSound: "ANPASSAT LJUD"
                },
                disableOptions: {
                    everything: "Inaktivera allt",
                    discovery: "Inaktivera Discovery-fliken",
                    dms: "Inaktivera uppdragsfliken i DM",
                    fetching: "Inaktivera hämtning av uppdrag",
                    popup: "Inaktivera Popup Above Account Panel",
                    sponsored: "Inaktivera sponsrad banner på uppdragssidan",
                    badge: "Inaktivera märke på användarprofiler",
                    inventory: "Inaktivera meddelande om flytt av presentlager",
                    friendsList: "Vänlista Aktiv nu-kampanj",
                    membersList: "Medlemslista aktivt spelar ikoner",
                    gameQuests: "Slutför spel-/aktivitetsuppdrag i bakgrunden",
                    videoQuests: "Slutför titta på videouppdrag i bakgrunden",
                    achievementQuests: "Slutför uppgiften i aktivitetsuppdrag i bakgrunden",
                    mobileDesktop: "Gör Mobile Quests Desktop-kompatibel",
                    notifyOnComplete: "Meddela när uppdraget är slutfört"
                },
                options: {
                    always: "Alltid",
                    unclaimed: "Ohämtad",
                    never: "Aldrig",
                    pill: "Piller",
                    badge: "Emblem",
                    both: "Både",
                    none: "Ingen",
                    openQuests: "Öppna uppdrag",
                    contextMenu: "Snabbmeny",
                    pluginSettings: "Plugin-inställningar",
                    nothing: "Ingenting",
                    orbs: "Orbs",
                    nitroCodes: "Nitrokoder",
                    rewardCodes: "Belöningskoder",
                    inGameItems: "Föremål i spelet",
                    profileCollectibles: "Profil Samlarföremål"
                }
            },
            option: {
                disableQuests: {
                    label: "Inaktivera uppdrag",
                    description: "Välj vilka Quest-funktioner som ska inaktiveras."
                },
                disableQuestsEverything: {
                    label: "Inaktivera allt",
                    description: "Inaktivera alla Quest-funktioner."
                },
                disableQuestsFetchingQuests: {
                    label: "Inaktivera hämtning av uppdrag",
                    description: "Inaktivera hämtning av uppdrag från Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Inaktivera uppdragsfliken i DM",
                    description: "Inaktivera Quest-fliken på sidan Direktmeddelanden."
                },
                disableQuestsDiscoveryTab: {
                    label: "Inaktivera Discovery-fliken",
                    description: "Inaktivera Quest-fliken på Discovery-sidan."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Inaktivera sponsrad banner på uppdragssidan",
                    description: "Inaktivera den sponsrade bannern på Quest-sidan."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Inaktivera Popup Above Account Panel",
                    description: "Inaktivera Quest-popupen ovanför din kontopanel."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Inaktivera märke på användarprofiler",
                    description: "Inaktivera Quest-märket på användarprofiler."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Inaktivera meddelande om flytt av presentlager",
                    description: "Inaktivera presentinventeringen Quest omlokaliseringsmeddelande."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Inaktivera kampanj för vänlistan Active Now",
                    description: "Inaktivera marknadsföringen av uppdrag för spel som spelas av vänner."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Inaktivera ikoner för aktivt spelande medlemslista",
                    description: "Inaktivera de aktivt spelade ikonerna i medlemslistan."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Gör Mobile Quests Desktop-kompatibel",
                    description: "Gör mobiluppdrag kompatibla med datorer."
                },
                completeVideoQuestsInBackground: {
                    label: "Kompletta videouppdrag i bakgrunden",
                    description: "Slutför videouppdrag i bakgrunden efter att videons längd har passerat."
                },
                completeGameQuestsInBackground: {
                    label: "Slutför speluppdrag i bakgrunden",
                    description: "Slutför speluppdrag i bakgrunden efter att speltiden har passerat."
                },
                completeAchievementQuestsInBackground: {
                    label: "Slutför uppgiften i aktivitetsuppdrag i bakgrunden",
                    description: "Fullständig prestation i aktivitetsuppdrag i bakgrunden."
                },
                notifyOnQuestComplete: {
                    label: "Meddela när uppdraget är slutfört",
                    description: "Visa ett meddelande när ett uppdrag slutförs automatiskt."
                },
                questButton: {
                    label: "Quest-knappen",
                    description: "Visa en Quest-knapp i serverlistan."
                },
                questButtonDisplay: {
                    label: "Quest-knappdisplay",
                    description: "Vilken visningstyp som ska användas för Quest-knappen i serverlistan."
                },
                questRewardIncludeRewardCode: {
                    label: "Inkludera belöningskoder",
                    description: "Inkludera uppdrag med belöningskoder när du visar antal uppdrag."
                },
                questRewardIncludeNitroCode: {
                    label: "Inkludera nitrokoder",
                    description: "Inkludera uppdrag med nitrokoder när du visar antal uppdrag."
                },
                questRewardIncludeInGame: {
                    label: "Inkludera belöningar i spelet",
                    description: "Inkludera uppdrag med belöningar i spelet när du visar antal uppdrag."
                },
                questRewardIncludeCollectibles: {
                    label: "Inkludera samlarföremål",
                    description: "Inkludera uppdrag med samlarobjekt när du visar antalet uppdrag."
                },
                questRewardIncludeOrbs: {
                    label: "Inkludera klot",
                    description: "Inkludera uppdrag med klot när du visar antal uppdrag."
                },
                questButtonUnclaimed: {
                    label: "Quest-knapp Indikator för oupphämtad",
                    description: "Vilken visningstyp som ska användas för den outtagna indikatorn på Quest-knappen i serverlistan."
                },
                questButtonBadgeColor: {
                    label: "Quest Button Badge Färg",
                    description: "Färgen på Quest-knappmärket i serverlistan."
                },
                questButtonLeftClickAction: {
                    label: "Vänsterklicka Åtgärd",
                    description: "Åtgärden som ska utföras när du vänsterklickar på Quest-knappen i serverlistan."
                },
                questButtonMiddleClickAction: {
                    label: "Mellanklickåtgärd",
                    description: "Åtgärden som ska utföras när du mittklickar på Quest-knappen i serverlistan."
                },
                questButtonRightClickAction: {
                    label: "Högerklicka Åtgärd",
                    description: "Åtgärden som ska utföras när du högerklickar på Quest-knappen i serverlistan."
                },
                fetchingQuests: {
                    label: "Hämta uppdrag",
                    description: "Hämta uppdrag från Discord."
                },
                fetchingQuestsInterval: {
                    label: "Intervall för hämtning av uppdrag",
                    description: "Intervallet i sekunder för att hämta uppdrag från Discord."
                },
                fetchingQuestsAlert: {
                    label: "Varning för att hämta uppdrag",
                    description: "Ljudet att spela när nya uppdrag upptäcks."
                },
                fetchingQuestsAlertVolume: {
                    label: "Hämtar quests varningsvolym",
                    description: "Volymen på varningsljudet när nya uppdrag upptäcks."
                },
                restyleQuests: {
                    label: "Styla om uppdrag",
                    description: "Anpassa utseendet på Quest-brickorna på sidan Uppdrag."
                },
                restyleQuestsUnclaimed: {
                    label: "Restyle quests Unclaimed",
                    description: "Färgen på outtagna Quest-brickor på uppdragssidan."
                },
                restyleQuestsClaimed: {
                    label: "Restyle-uppdrag begärda",
                    description: "Färgen på questbrickor som gjorts anspråk på på uppdragssidan."
                },
                restyleQuestsIgnored: {
                    label: "Restyle-uppdrag ignorerade",
                    description: "Färgen på ignorerade Quest-brickor på uppdragssidan."
                },
                restyleQuestsExpired: {
                    label: "Restyle-uppdrag har löpt ut",
                    description: "Färgen på utgångna Quest-brickor på uppdragssidan."
                },
                restyleQuestsGradient: {
                    label: "Restyle Quests Gradient",
                    description: "Stil för gradienten som används i Quest-brickorna."
                },
                restyleQuestsPreload: {
                    label: "Restyle quests Preload",
                    description: "Försök att förladda tillgångarna för Quest-brickorna."
                },
                reorderQuests: {
                    label: "Ordna om uppdrag",
                    description: "Sortera uppdragen efter deras status. Lämna tomt för standardsortering. Kommaseparerad lista måste innehålla alla: EJ KRÄVAT, KRÄVAT, IGNORERAD, UTGÅTT."
                },
                unclaimedSubsort: {
                    label: "Unclaimed Subsort",
                    description: "Subsorteringsmetod för uppdrag utan anspråk."
                },
                claimedSubsort: {
                    label: "Påstådd underordnad",
                    description: "Subsorteringsmetod för påstådda uppdrag."
                },
                ignoredSubsort: {
                    label: "Ignorerad underordnad",
                    description: "Subsorteringsmetod för ignorerade uppdrag."
                },
                expiredSubsort: {
                    label: "Utgått underordnad",
                    description: "Subsorteringsmetod för utgångna uppdrag."
                },
                unclaimedUnignoredQuests: {
                    label: "Obekräftade och ignorerade uppdrag",
                    description: "Spårar antalet outtagna och ej ignorerade uppdrag."
                },
                onQuestsPage: {
                    label: "På uppdragssidan",
                    description: "Om användaren för närvarande är på sidan Uppdrag."
                },
                triggerQuestsRerender: {
                    label: "Utlösa uppdrag Återrendera",
                    description: "Utlösa en återgivning av uppdragssidan genom att växla mellan den här inställningen."
                },
                ignoredQuestProfile: {
                    label: "Ignorerad Quest-profil",
                    description: "Profilen som används för ignorerade uppdrag."
                },
                rememberQuestPageSort: {
                    label: "Kom ihåg Quest Page Sort",
                    description: "Kom ihåg den senast använda sorteringen på uppdragssidan."
                },
                rememberQuestPageFilters: {
                    label: "Kom ihåg Quest Page Filter",
                    description: "Kom ihåg de senast använda filtren på sidan Uppdrag."
                },
                lastQuestPageSort: {
                    label: "Sidsortering för sista uppdrag",
                    description: "Kom ihåg den senast använda sorteringen på uppdragssidan."
                },
                lastQuestPageFilters: {
                    label: "Filter för sista uppdragssidan",
                    description: "Kom ihåg de senast använda filtren på sidan Uppdrag."
                },
                ignoredQuestIDs: {
                    label: "Ignorerade uppdrags-ID:n",
                    description: "En uppsättning uppdrags-ID:n som ignoreras."
                },
                resumeQuestIDs: {
                    label: "Återuppta uppdrags-ID:n",
                    description: "En rad uppdrags-ID:n som automatiskt slutförs i bakgrunden."
                }
            },
            button: {
                questInProgressWithTime: "Slutför ({{remainTime}})",
                completing: "Slutför",
                resume: "Återuppta (~{{remainTime}})",
                complete: "Slutför {{remainTime}}",
                completeImmediate: "Komplett (Omedelbart)",
                completed: "Avslutad"
            },
            reward: {
                orbs: "{{completingText}} för {{orbQuantity}} Orbs.",
                article: "{{completingText}} för {{itemName}}.",
                unrecognized: "{{completingText}} för en okänd belöningstyp."
            },
            notification: {
                completed: {
                    title: "Uppdraget avslutat",
                    body: "{{questName}}-uppdraget har slutförts."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Ersätt alla frågetecken med vald sträng, om meddelandet endast innehåller frågetecken.",
            option: {
                replace: {
                    label: "Ersätta",
                    description: "Byt ut med"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Lägger till en snabbomnämningsknapp i meddelandefältet",
            tooltip: "Snabbt omnämnande"
        },
        quickReply: {
            name: "QuickReply",
            description: "Svara på (Ctrl+Upp/Ner) och redigera (Ctrl+Skift+Upp/Ner) meddelanden via tangentbindningar",
            option: {
                shouldMention: {
                    label: "Bör nämna",
                    description: "Pinga svar som standard",
                    noReplyMentionPlugin: "Följ NoReplyMention-plugin (om aktiverat)",
                    enabled: "Aktiverad",
                    disabled: "Inaktiverad"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignorera blockerad och ignorerad",
                    description: "Ignorera meddelanden från blockerade/ignorerade användare när du navigerar"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Växla snabbt mellan teman med kortkommandon.",
            about: {
                title: "Bindningar",
                description: "Använd Ctrl/Cmd+Skift+pilarna för att navigera (vänster/höger: växla teman, Upp: aktivera, Ned: inaktivera).",
                reload: "Tryck på Ctrl/Cmd+Skift+Alt för att ladda om temalistan."
            },
            modal: {
                added: "Lade till {{count}} tema{{s}}",
                removed: "Tog bort {{count}} tema{{s}}",
                reloaded: "Omladdade {{themeCount}} teman",
                addedLocal: "Lade till {{count}} lokalt tema{{s}}",
                removedLocal: "Tog bort {{count}} lokalt tema{{s}}",
            },
            option: {
                includeLocal: {
                    label: "Inkludera lokalt",
                    description: "Inkludera lokala teman"
                },
                includeOnline: {
                    label: "Inkludera online",
                    description: "Inkludera onlineteman"
                },
                sortOrder: {
                    label: "Sorteringsordning",
                    description: "Sorteringsmetod",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Ny"
                },
                autoRefresh: {
                    label: "Automatisk uppdatering",
                    description: "Uppdatera temalistan automatiskt när ändringar upptäcks"
                },
                showNotifications: {
                    label: "Visa aviseringar",
                    description: "Visa aviseringar när teman läggs till/tar bort"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Lägger till möjligheten att skapa en inspirerande citatbild från ett meddelande",
            context: {
                quote: "Citationstecken"
            },
            modal: {
                title: "Fånga dem i 4k",
                grayscale: "Gråskala",
                export: "Exportera",
                send: "Skicka",
                saveAsGIF: "Save as GIF",
                saveDescription: "Sparar/skickas bilden som en GIF istället för en PNG",
                showWatermark: "Visa vattenstämpel",
                watermarkText: "Vattenstämpeltext (max 32 tecken)"
            },
            option: {
                quoteFont: {
                    label: "Citat teckensnitt",
                    description: "Teckensnitt för citattext (författare/användarnamn använder alltid M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Öppna Sans",
                    momoSignature: "Momo signatur",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Vattenstämpel",
                    description: "Anpassad vattenstämpeltext (max 32 tecken)"
                },
                grayscale: {
                    label: "Gråskala",
                    description: "Aktivera gråskala som standard"
                },
                showWatermark: {
                    label: "Visa vattenstämpel",
                    description: "Visa vattenstämpel som standard"
                },
                saveAsGif: {
                    label: "Spara som gif",
                    description: "Spara som GIF som standard"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Lägger till en knapp nära Mute-knappen för att gå med i ett slumpmässigt röstsamtal.",
            tooltip: "Slumpmässig röst",
            context: {
                label: "Rösttillståndsmodifierare",
                amountLabel: "ANVÄNDARBELOPP",
                spacesLabel: "UTRYMMEN KVAR",
                voiceLabel: "RÖSTGRÄNS",
                selfLabel: "SJÄLVINSTÄLLNINGAR",
                select: {
                    servers: "Välj servrar",
                    list: "Välj Lista",
                    filters: "Välj Filter",
                    amount: "Användarbelopp",
                    userAmount: "{{amount}} användare{{s}}",
                    parameters: "Parametrar",
                    selectAll: "Välj allt",
                    reset: "Återställ",
                    stateFilters: "Tillståndsfilter",
                    moreThan: "Mer än",
                    lessThan: "Mindre än",
                    equalTo: "Lika med",
                    spaces: "Utrymmen kvar",
                    voice: "Röstbegränsning"
                },
                filter: {
                    muted: "Dämpad",
                    deafened: "Dövad",
                    camera: "Kamera",
                    stream: "Strömma",
                    includeFilters: "Inkludera filter",
                    avoidFilters: "Undvik filter"
                },
                reset: {
                    list: "Återställ lista"
                },
                voice: {
                    label: "Röstalternativ",
                    joinSettings: "Anslutningsinställningar",
                    auto: {
                        mute: "Auto Mute",
                        deafen: "Auto Deafen",
                        camera: "Autokamera",
                        stream: "Automatisk strömning",
                        leaveWhenEmpty: "Lämna när det är tomt",
                        navigate: "Automatisk navigering",
                        stage: "Undvik Stage",
                        afk: "Undvik AFK"
                    }
                },
                invalid: {
                    server: "Ogiltig server"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Användarbeloppshantering",
                    description: "Välj en operation för antalet användare"
                },
                userAmount: {
                    label: "Användarbelopp",
                    description: "Välj antal användare"
                },
                spacesLeftOperation: {
                    label: "Mellanslag kvar Operation",
                    description: "Välj en operation för det maximala antalet användare"
                },
                spacesLeft: {
                    label: "Utrymmen kvar",
                    description: "Välj antal maxanvändare"
                },
                vcLimitOperation: {
                    label: "Begränsning av röstkanal",
                    description: "Välj en operation för röstkanalen."
                },
                vcLimit: {
                    label: "Röstkanalgräns",
                    description: "Välj en röstkanalgräns"
                },
                servers: {
                    label: "Servrar",
                    description: "Servrar som ingår"
                },
                autoNavigate: {
                    label: "Automatisk navigering",
                    description: "Navigerar automatiskt till röstkanalen."
                },
                autoCamera: {
                    label: "Autokamera",
                    description: "Slår på kameran automatiskt"
                },
                autoStream: {
                    label: "Automatisk strömning",
                    description: "Slår på stream automatiskt"
                },
                selfMute: {
                    label: "Auto Mute",
                    description: "Stänger automatiskt av din mikrofon när du går med i en röstkanal."
                },
                selfDeafen: {
                    label: "Auto Deafen",
                    description: "Dövar automatiskt ditt ljud när du går med i en röstkanal."
                },
                leaveEmpty: {
                    label: "Lämna när det är tomt",
                    description: "Hittar ett slumpmässigt samtal när röstchatten är tom."
                },
                prioritizeFriends: {
                    label: "Prioritera vänner",
                    description: "Föredra kanaler med dina vänner i när det är möjligt."
                },
                avoidStages: {
                    label: "Undvik Stage",
                    description: "Undviker att gå med i scenröstkanaler."
                },
                avoidAfk: {
                    label: "Undvik AFK",
                    description: "Undviker att gå med i AFK röstkanaler."
                },
                video: {
                    label: "Video",
                    description: "Söker efter användare med deras video på"
                },
                stream: {
                    label: "Strömma",
                    description: "Söker efter användare som streamar"
                },
                mute: {
                    label: "Stum",
                    description: "Söker efter användare som är avstängda"
                },
                deafen: {
                    label: "Döva",
                    description: "Söker efter användare som är döva"
                },
                includeStates: {
                    label: "Inkludera filter",
                    description: "Möjlighet att inkludera stater"
                },
                avoidStates: {
                    label: "Undvik filter",
                    description: "Möjlighet att undvika stater"
                }
            },
            alert: {
                failed: "Det gick inte att hitta en röstkanal!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Avkodar Reagera felkoder till meddelanden som kan läsas av människor."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Läs alla serveraviseringar med ett enda knapptryck!",
            button: "Läs alla"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Ctrl+Tabb mellan senast använda DM:er (Ctrl+Skift+Tabb bakåt)",
            option: {
                visualStyle: {
                    label: "Visuell stil",
                    description: "Visuell indikatorstil under cykling",
                    overlay: "Överlagring (Alt+Tab-stil)",
                    toast: "Toast (statusmeddelande)",
                    off: "Av"
                },
                overlayMode: {
                    label: "Överlagringsläge",
                    description: "Överlagringsinnehåll",
                    row: "Rad av senaste",
                    current: "Endast aktuell",
                },
                amountOfUsers: {
                    label: "Antal användare",
                    description: "Antal användare som ska visas i överlagring"
                },
                overlayRowLength: {
                    label: "Överlagringsradlängd",
                    description: "Antalet senaste DM som ska visas i rad"
                },
                overlayShowAvatars: {
                    label: "Överlägg Visa avatarer",
                    description: "Visa användaravatarer i överlägg"
                },
                toastDurationMs: {
                    label: "Toastlängd (ms)",
                    description: "Statusmeddelandets varaktighet"
                },
                clearRdms: {
                    label: "Rensa RDMS-listan",
                    description: "Testverktyg: Rensa RDM-listan",
                    toast: "Rensad RMDS-historik",
                    button: "Rensa RDM-historik"
                }
            },
            modal: {
                unknown: "Okänd",
                dm: "DM",
                group: "Grupp DM",
                channel: "Kanal",
                switchingTo: "Byter till: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Meddelar dig när en vän, gruppchatt eller server tar bort dig.",
            option: {
                notices: {
                    label: "Notiser",
                    description: "Visa även en notis högst upp på skärmen när den tas bort (använd detta om du inte vill missa några aviseringar)."
                },
                offlineRemovals: {
                    label: "Offlineborttagningar",
                    description: "Meddela dig när du startar Discord om du togs bort när du var offline."
                },
                friends: {
                    label: "Vänner",
                    description: "Meddela när en vän tar bort dig"
                },
                friendRequestCancels: {
                    label: "Vänförfrågan avbryts",
                    description: "Meddela när en vänförfrågan avbryts"
                },
                servers: {
                    label: "Servrar",
                    description: "Meddela när den tas bort från en server"
                },
                groups: {
                    label: "Grupper",
                    description: "Meddela när du tas bort från en gruppchatt"
                }
            },
            notification: {
                removedFriend: "{{user}} tog bort dig som vän.",
                cancelledFriendRequest: "En vänförfrågan från {{user}} har tagits bort.",
                removedFromServer: "Du har tagits bort från servern {{server}}.",
                removedFromGroup: "Du togs bort från gruppen {{group}}.",
                noLongerGroup: "Du är inte längre i gruppen {{group}}.",
                noLongerServer: "Du är inte längre på servern {{server}}.",
                noLongerFriend: "Du är inte längre vän med {{user}}.",
                friendRequestRevoked: "Vänförfrågan från {{user}} har återkallats.",
                ok: "OK"
            }
        },
        remix: {
            name: "Remix",
            description: "Lägger till ett \"Remix\"-alternativ till högerklicksmenyn på filuppladdningsknappen. Detta alternativ öppnar en bild i en enkel bildredigerare och låter dig skicka den redigerade bilden direkt till chatten.",
            label: "Remix",
            button: {
                send: "Skicka",
                close: "Nära",
                brush: "Borsta",
                erase: "Radera",
                crop: "Beskära",
                shape: "Form",
                reset: "Återställa",
                clear: "Rensa"
            },
            editor: {
                choose: "Välj en bild",
                browse: "Bläddra",
                rectangle: "Rektangel",
                ellipse: "Ellips",
                line: "Linje",
                arrow: "Pil",
                fill: "Fylla"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Låter dig upprepa meddelanden snabbt. Om du håller ned Skift medan du klickar på alternativet Upprepa, kommer det att svara på meddelandet.",
            button: "Upprepa (klicka) / Upprepa och svara (Skift + klick)",
            context: {
                repeat: "Upprepa",
                repeatAndReply: "Upprepa och svara"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Ersätter Google-sökningen med olika motorer.",
            option: {
                customEngineName: {
                    label: "Anpassat motornamn",
                    description: "Namn på den anpassade sökmotorn"
                },
                customEngineURL: {
                    label: "URL för anpassad motor",
                    description: "Webbadressen till din motor"
                },
                replacementEngine: {
                    label: "Ersättningsmotor",
                    description: "Ersätt med en specifik sökmotor istället för att lägga till en meny",
                    off: "Av",
                    custom: "Anpassad motor",
                }
            },
            context: {
                label: "Sök text",
                searchWith: "Sök med {{name}}"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Styr om du alltid eller aldrig ska bli pingad på meddelandesvar, med en vitlistasfunktion",
            option: {
                alwaysPingOnReply: {
                    label: "Pinga alltid på svar",
                    description: "Blir alltid pingad när någon svarar på dina meddelanden"
                },
                replyPingWhitelist: {
                    label: "Svara Ping Whitelist",
                    description: "Kommaseparerad lista med användar-ID att alltid ta emot svarspingar från"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Visar en tidsstämpel på förhandsgranskningar av besvarade meddelanden"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Avslöja alla spoilers i ett meddelande genom att Ctrl-klicka på en spoiler, eller i chatten med Ctrl+Skift-klicka"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Lägger till ImageSearch till bildkontextmenyer",
            context: {
                label: "Sök bild",
                all: "Sök alla"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Recensera andra användare (lägger till ett nytt avsnitt i profiler)",
            notification: {
                newReview: "Du har nya recensioner på din profil!",
                auth: {
                    error: "Ett fel uppstod under auktorisering",
                    successfully: "Inloggad framgångsrikt!",
                    failed: "Det gick inte att auktorisera",
                    review: "Vänligen auktorisera att lägga till en recension.",
                    opening: "Öppnar auktoriseringsfönster...",
                    need: "Du måste auktorisera för att granska användare!"
                },
                error: {
                    fast: "Du skickar förfrågningar för snabbt. Vänta några sekunder och försök igen.",
                    fetching: "Ett fel uppstod när recensioner skulle hämtas.",
                    action: {
                        failed: "Det gick inte att använda {{action}}",
                        success: "{{action}}ad användare framgångsrikt"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Är du säker?",
                    description: "Vill du verkligen ta bort den här recensionen?",
                    confirm: "Radera",
                    cancel: "Strunt i det",
                    error: "Du måste vara inloggad för att ta bort recensioner.",
                },
                report: {
                    title: "Är du säker?",
                    description: "Vill du verkligen rapportera den här recensionen?",
                    confirm: "Rapportera",
                    cancel: "Strunt i det",
                    error: "Du måste vara inloggad för att rapportera recensioner.",
                },
                block: {
                    title: "Är du säker?",
                    description: "Vill du verkligen blockera den här användaren? Du kommer inte att se deras recensioner längre.",
                    confirm: "Blockera",
                    cancel: "Strunt i det",
                    error: "Du måste vara inloggad för att blockera användare.",
                },
                blocked: {
                    title: "Blockerade användare",
                    auth: "Du är inte inloggad på ReviewDB!",
                    noBlocked: "Inga användare är blockerade.",
                    fetch: "Ett fel uppstod vid hämtning av blockerade användare."
                },
                reviews: {
                    title: "s recensioner",
                    noUser: "Det verkar som om ingen har recenserat den här användaren ännu. Du kan vara den första!",
                    noServer: "Det verkar som om ingen har recenserat den här servern ännu. Du kan vara den första!"
                }
            },
            button: {
                appeal: "Överklagande",
                ok: "OK",
                more: "Läs mer",
                reply: "Svara till @{{user}}",
                update: "Uppdatera recension för @{{user}}",
                review: "Recensera @{{user}}"
            },
            context: {
                view: "Visa recensioner",
                blocked: "Du har blockerat denna användare",
                delete: "Ta bort recension",
                report: "Rapportgranskning",
                block: "Blockera användare",
                unblock: "Avblockera användare",
                reply: "Svara Recension"
            },
            option: {
                authorize: {
                    label: "Godkänna",
                    button: "Auktorisera med ReviewDB"
                },
                notifyReviews: {
                    label: "Meddela recensioner",
                    description: "Meddela om nya recensioner vid start"
                },
                showWarning: {
                    label: "Visa varning",
                    description: "Visa en varning för att vara respektfull högst upp på recensionerlistan"
                },
                hideTimestamps: {
                    label: "Dölj tidsstämplar",
                    description: "Dölj tidsstämplar på recensioner"
                },
                hideBlockedUsers: {
                    label: "Dölj blockerade användare",
                    description: "Dölj recensioner från blockerade användare"
                },
                buttons: {
                    label: "Knappar",
                    manageBlocked: "Hantera blockerade användare",
                    support: "Stöd ReviewDB utveckling",
                    website: "ReviewDB webbplats",
                    server: "ReviewDB Supportserver"
                }
            },
            profile: {
                optedOut: "Användare valde att hoppa av",
                noReviews: "Inga recensioner ännu"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Återger magnetlänkar som meddelandelänkar",
            unknown: "okänt filnamn"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Lägger till den översta rollfärgen var som helst",
            option: {
                chatMentions: {
                    label: "Chattomnämnanden",
                    description: "Visa rollfärger i chattomnämnanden (inklusive i meddelanderutan)"
                },
                memberList: {
                    label: "Medlemslista",
                    description: "Visa rollfärger i medlemslistans rollrubriker"
                },
                voiceUsers: {
                    label: "Röstanvändare",
                    description: "Visa rollfärger i användarlistan för röstchatt"
                },
                reactorsList: {
                    label: "Reaktorlista",
                    description: "Visa rollfärger i reaktorlistan"
                },
                pollResults: {
                    label: "Omröstningsresultat",
                    description: "Visa rollfärger i omröstningsresultaten"
                },
                colorChatMessages: {
                    label: "Färgchattmeddelanden",
                    description: "Färgchattmeddelanden baserat på författarens rollfärg"
                },
                messageSaturation: {
                    label: "Meddelande Mättnad",
                    description: "Intensiteten av meddelandefärgning"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Redigera typen och innehållet för eventuell Rich Presence",
            option: {
                replacedAppIds: {
                    label: "Ersatta app-ID:n",
                }
            },
            modal: {
                tutorial: {
                    title: "ID för aktuella aktiviteter",
                    noRunning: "Inga löpaktiviteter",
                    available: "Tillgängliga variabler",
                    variableText: "I alla fält (förutom stream-URL) kan du lägga in variabler som automatiskt kommer att ersättas av deras ursprungliga innehåll:",
                    more: "Mer information",
                    details: {
                        leave: "Lämna ett fält tomt för att lämna det som det är.",
                        set: "Ställ in ett fält på \"null\" för att dölja det på närvaron.",
                        reload: "Du kan behöva ladda om Discord för att ändringar ska gälla."
                    }
                },
                settings: {
                    applyEdits: "Tillämpa redigeringar i appen",
                    addNewApp: "Lägg till ny applikation",
                    appId: "Applikations-ID",
                    invalidAppId: "Ogiltigt app-ID",
                    newActivityType: "Ny aktivitetstyp",
                    activityTypes: {
                        playing: "Spelar",
                        watching: "Tittar på",
                        listening: "Lyssnande",
                        competing: "Tävlande",
                        streaming: "Streaming"
                    },
                    streamUrl: "Stream URL (måste vara YouTube eller Twitch)",
                    invalidStreamUrl: "Ogiltig webbadress för stream",
                    newName: "Nytt namn",
                    newDetails: "Nya detaljer",
                    newState: "Ny stat",
                    largeImage: "Stor bild",
                    smallImage: "Liten bild",
                    text: "Text",
                    url: "URL",
                    firstLine: "(första raden)",
                    secondLine: "(andra raden)",
                    thirdLine: "(tredje raden)",
                    alsoThirdLine: "(även tredje raden)",
                    hideAssets: "Dölj tillgångar (stora och små bilder)",
                    hideTimestamps: "Dölj tidsstämplar"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Visar statistik om din aktivitet som en RPC",
            option: {
                assetURL: {
                    label: "Tillgångens URL",
                    description: "Bilden som ska användas för din RPC. Din profilbild används om den lämnas tom"
                },
                rpcTitle: {
                    label: "RPC-titel",
                    description: "Titeln på din RPC"
                },
                statDisplay: {
                    label: "Statisk display",
                    description: "Vad ska RPC visa? (Du kan bara ha en rad, det är jag ganska säker på)",
                    today: "Antalet meddelanden som skickats idag",
                    alltime: "Antalet meddelanden som skickas hela tiden",
                    listened: "Ditt mest lyssnade album för veckan"
                },
                lastFMApiKey: {
                    label: "Last.fm API-nyckel",
                    description: "Din Last.fm API-nyckel"
                },
                lastFMUsername: {
                    label: "Last.fm användarnamn",
                    description: "Ditt Last.fm användarnamn"
                },
                albumCoverImage: {
                    label: "Albumomslagsbild",
                    description: "Bör skivomslagsbilden användas som RPC-bild? (Om du har valt Last.fm-skärmen)"
                },
                lastFMStatFormat: {
                    label: "Last.fm Stat-format",
                    description: "Hur ska Last.fm-statistiken formateras? $album ersätts med albumnamnet och $artist ersätts med artistnamnet"
                }
            },
            noInfo: "Ingen info just nu :(",
            messagesToday: "Meddelanden skickade idag: {{count}}",
            messagesAllTime: "Meddelanden skickade hela tiden: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Exportera favorit-GIF-URL:er",
            toolbox: "Spara favorit-GIF-filer",
            title: "Spara favorit-GIF-filer",
            command: {
                savegifs: {
                    description: "Spara alla favorit-GIF-URL:er i en textfil"
                },
                saveworkinggifs: {
                    description: "Testa alla favorit-GIF:er och spara bara de som fortfarande fungerar"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Visa verktygslåda-knapp",
                    description: "Visa knappen \"Spara favorit-GIF\" i Plexcord Toolbox (kräver omladdning)"
                }
            },
            toast: {
                save: "Sparade GIF-filer som {{filename}}",
                failed: "Det gick inte att spara GIF-filer",
                no: "Inga favorit-GIF-filer hittades!",
                testing: "Testar {{count}} GIF, detta kan ta en stund...",
                noneWorking: "Ingen av dina sparade GIF-filer verkar fungera.",
                saved: "Filtrerade {{broken}} möjligen trasiga GIF-filer. Sparade {{saved}} fungerande GIF-filer."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Schemalägg att meddelanden ska skickas vid en viss tidpunkt eller efter en fördröjning.",
            toolbox: {
                toggle: "Visa schemalagda meddelanden"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Max meddelanden per minut",
                    description: "Max schemalagda meddelanden per kanal som kan avfyras under samma minut."
                },
                checkIntervalSeconds: {
                    label: "Kontrollintervall (sekunder)",
                    description: "Hur ofta insticksprogrammet söker efter meddelanden att skicka."
                },
                showNotifications: {
                    label: "Visa aviseringar",
                    description: "Visa toastaviseringar när meddelanden skickas."
                },
                showPhantomMessages: {
                    label: "Visa fantommeddelanden",
                    description: "Visa schemalagda meddelanden som fantommeddelanden i chatten."
                }
            },
            channelType: {
                unknown: "Okänd",
                dm: "DM",
                groupDm: "Grupp DM",
                channel: "Kanal"
            },
            toast: {
                messageSent: "Schemalagt meddelande skickat till {{channel}}",
                messageFailed: "Det gick inte att skicka schemalagt meddelande",
                maxMessagesReached: "Maximalt antal {{max}} meddelanden per kanal och minut nått",
                messageScheduled: "Meddelande schemalagt!",
                messageRemoved: "Schemalagt meddelande har tagits bort",
                allCleared: "Alla schemalagda meddelanden raderades"
            },
            button: {
                tooltipOn: "Schemaläge PÅ (klicka för att inaktivera, högerklicka för lista)",
                tooltipOff: "Schemaläge AV (klicka för att aktivera, högerklicka för lista)"
            },
            accessory: {
                scheduledFor: "Schemalagt till {date}{timeLeft}",
                remaining: {
                    days: "{{days}}d {{hours}}h kvar",
                    hours: "{{hours}}h {{minutes}}m kvar",
                    minutes: "{{minutes}}m kvar"
                }
            },
            scheduleModal: {
                title: "Schemalägg meddelande",
                schedulingFor: "Schemaläggning för: {{channel}}",
                scheduleType: "Schematyp",
                delay: "Dröjsmål",
                specificTime: "Specifik tid",
                delayMinutes: "Fördröjning (minuter)",
                dateTime: "Datum och tid",
                error: {
                    invalidDelay: "Ange en giltig fördröjning (minst 1 minut)",
                    invalidDateTime: "Välj ett framtida datum och tid"
                },
                schedule: "Schema",
                cancel: "Avboka"
            },
            viewModal: {
                title: "Schemalagda meddelanden",
                clearAll: "Rensa alla",
                noMessages: "Inga schemalagda meddelanden",
                delete: "Radera",
                close: "Nära"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Åtgärdar det irriterande \"Vi tappade förstoringsglaset!\" fel.",
            notPerfect: "Den här korrigeringen är inte perfekt, så du kan behöva ladda om sökfältet för att åtgärda problem.",
            paragraph1: "Discord tillåter bara en maxoffset på 5000 (det är detta som orsakar förstoringsglasfelet).",
            paragraph2: "Det betyder att du bara kan se exakt 5 000 meddelanden i det förflutna och 5 000 meddelanden i framtiden (när du sorterar efter gamla).",
            paragraph3: "Detta plugin hoppar bara till den motsatta sorteringsmetoden för att försöka komma runt Discords begränsning,",
            paragraph4: "men om det finns ett stort sökresultat och du försöker se ett meddelande som inte går att få tag på med båda sorteringsmetoderna,",
            paragraph5: "insticksprogrammet kommer helt enkelt att visa offset 0 (antingen det senaste eller äldsta meddelandet beroende på sorteringsmetoden)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Spela alltid den hemliga versionen av Discord-ringsignalen (förutom under speciella ringsignalhändelser)",
            option: {
                onlySnow: {
                    label: "Endast under Snow Ringtone Event",
                    description: "Spela bara Snow Halation Theme"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Aktiverar Discords experimentella sammanfattningar-funktion på varje server och visar AI-genererade sammanfattningar av konversationer",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Sammanfattning utgångströskel (dagar)",
                    description: "Tiden i dagar innan en sammanfattning tas bort. Observera att endast upp till 50 sammanfattningar sparas per kanal"
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Lägger till den aktuella kanalen i popup-fönstret för vidarebefordran"
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Skicka tidsstämplar enkelt via chatbox-knapp och textgenvägar. Läs den utökade beskrivningen!",
            sample: {
                paragraph1: "För att snabbt skicka tidsstämplar, inkludera tidsstämplar formaterade som `HH:MM` (inklusive backticks!) i ditt meddelande",
                paragraph2: "Se nedan för exempel.\nOm du behöver något mer specifikt, använd datumknappen i chattfältet!",
                examples: "Exempel:"
            },
            modal: {
                title: "Tidsstämpelväljare",
                light: "Ljus",
                dark: "Mörk",
                format: "Tidsstämpelformat",
                preview: "Förhandsvisning",
                insert: "Infoga",
                insertTimestamp: "Infoga tidsstämpel"
            },
            option: {
                replaceMessageContents: {
                    label: "Ersätt meddelandeinnehåll",
                    description: "Byt ut tidsstämplar i meddelandeinnehåll"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Låter dig se information om en server",
            context: {
                serverInfo: "Server info"
            },
            option: {
                sorting: {
                    label: "Sortering",
                    description: "Användarnamn eller, om tillämpligt, Visningsnamn",
                    username: "Användarnamn",
                    displayname: "Visningsnamn",
                    none: "Sortera inte"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Server info",
                    friends: "Vänner",
                    mutualUsers: "Ömsesidiga användare",
                    blockedUsers: "Blockerade användare",
                    ignoredUsers: "Ignorerade användare"
                },
                owner: "Serverägare",
                loading: "Belastning...",
                createdAt: "Skapad på",
                joinedAt: "Anslöt sig till",
                vanityLink: "Vanity Link",
                preferredLocale: "Önskad plats",
                verification: {
                    level: "Verifieringsnivå",
                    none: "Ingen",
                    low: "Låg",
                    medium: "Medium",
                    high: "Hög",
                    highest: "Högsta"
                },
                serverBoosts: "Serverförstärkningar",
                channels: "Kanaler",
                roles: "Roller"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Lägg till antal vänner online eller serverantal i serverlistan",
            friends: "Vänner",
            servers: "Servrar",
            option: {
                mode: {
                    label: "Läge",
                    description: "Läge att visa i serverlistan",
                    friend: "Endast vänner online räknas",
                    server: "Endast server räknas",
                    both: "Både server och onlinevän räknas"
                },
                useCompact: {
                    label: "Använd kompaktläge",
                    description: "Får indikatorn att visas med endast text"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Navigera bättre på dina servrar med en snabbsökningsknapp",
            tooltip: "Söka"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Tar med VS Code-stil kodblock till Discord, drivs av Shiki",
            option: {
                theme: {
                    label: "Tema",
                    description: "Standardteman"
                },
                customTheme: {
                    label: "Anpassat tema",
                    description: "En länk till ett anpassat VS-kodtema",
                    mustURL: "Måste vara en giltig webbadress",
                    mustJSON: "Måste vara en JSON-fil"
                },
                tryHljs: {
                    label: "Fallback till Hljs",
                    description: "Använd den mer lätta standardmarkeringen och temat Discord.",
                    never: "Aldrig",
                    secondary: "Föredrar Shiki istället för Highlight.js",
                    primary: "Föredrar Highlight.js istället för Shiki",
                    always: "Alltid"
                },
                useDevIcon: {
                    label: "Använd Devicon för språkikoner",
                    description: "Hur man visar språkikoner på kodblock",
                    disabled: "Inaktiverad",
                    colorless: "Färglös",
                    colored: "Färgad"
                },
                bgOpacity: {
                    label: "Bakgrund Opacitet",
                    description: "Bakgrundens opacitet"
                }
            },
            button: {
                copy: "Kopiera",
                copied: "Kopierade!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Visa alltid alla meddelandeknappar oavsett om du håller ned skifttangenten eller inte.",
            option: {
                noShiftDelete: {
                    label: "Ingen Shift Delete",
                    description: "Ta bort kravet på att hålla shift för att radera ett meddelande."
                },
                noShiftPin: {
                    label: "Ingen Shift Pin",
                    description: "Ta bort kravet på att hålla shift för att fästa ett meddelande."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Visar meddelandeförfattarens märken bredvid namnet i chatten.",
            option: {
                showPlexcordDonor: {
                    label: "Visa Plexcord Donator Badge",
                    description: "Aktivera för att visa Plexcord Donor-märken i chatten."
                },
                plexcordDonorPosition: {
                    label: "Plexcord Donator Badge Position",
                    description: "Placeringen av Plexcord Donor-märken."
                },
                showPlexcordContributor: {
                    label: "Visa Plexcord Contributor Badge",
                    description: "Aktivera för att visa Plexcord Contributor-märken i chatten."
                },
                plexcordContributorPosition: {
                    label: "Position för Plexcord Contributor Badge",
                    description: "Placeringen av Plexcord Contributor-märkena."
                },
                showDiscordProfile: {
                    label: "Visa Discord-profilmärket",
                    description: "Aktivera för att visa Discord-profilmärken i chatten."
                },
                discordProfilePosition: {
                    label: "Discord profilmärkesposition",
                    description: "Placeringen av Discord-profilmärkena."
                },
                showDiscordNitro: {
                    label: "Visa Discord Nitro-märket",
                    description: "Aktivera för att visa Discord Nitro-märken i chatten."
                },
                discordNitroPosition: {
                    label: "Discord Nitro Badge Position",
                    description: "Placeringen av Discord Nitro-märkena."
                },
                badgeSettings: {
                    label: "Märkeinställningar",
                    description: "Konfigurera positionen för andra märken som visas i chatten.",
                    modal: "Dra märkena för att ordna om dem; du kan klicka för att aktivera/inaktivera en specifik märkestyp."
                }
            },
            badge: {
                plexcord: "Plexcord donatormärke",
                contributor: "Plexcord-medarbetarmärke",
                discordProfile: "Discord profilmärken (HypeSquad, Discord Staff, Active Developer, etc.)",
                nitro: "Nitro märke",
                staff: "Discord Personal",
                partner: "Partnerad serverägare",
                events: "HypeSquad-evenemang",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad-balans",
                bugHunter: "Discord Bug Hunter",
                earlyVerifiedBotDeveloper: "Tidig verifierad botutvecklare",
                earlySupporter: "Tidig supporter",
                moderatorProgram: "Moderatorprogram Alumner"
            },
            modal: {
                plexcordContributor: "Plexcord-bidragsgivare",
                discordNitro: "Discord Nitro",
                basic: "Grundläggande",
                classic: "Klassisk"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Visa anslutna konton i användarens popout-fönster",
            option: {
                iconSize: {
                    label: "Ikonstorlek",
                    description: "Ikonstorlek (px)"
                },
                iconSpacing: {
                    label: "Ikonavstånd",
                    description: "Ikon marginal",
                    compact: "Kompakt",
                    cozy: "Mysig",
                    roomy: "Rymlig"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Visa kanaler som du inte har tillgång till.",
            tooltip: "Dold kanal",
            option: {
                channelStyle: {
                    label: "Kanalstil",
                    description: "Stilen som används för att visa dolda kanaler.",
                    classic: "Klassisk",
                    muted: "Dämpad",
                    showUnreads: "Visa olästa",
                    mutedWithUnreads: "Avstängd och Visa olästa"
                },
                showMode: {
                    label: "Visa läge",
                    description: "Läget som används för att visa dolda kanaler.",
                    lock: "Vanlig stil med låsikon istället",
                    hidden: "Dämpad stil med dold ögonikon till höger",
                    lockIconRight: "Låsikon till höger"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Standardtillstånd för tillåtna användare och roller",
                    description: "Om rullgardinsmenyn för tillåtna användare och roller på dolda kanaler ska vara öppen som standard"
                }
            },
            channelType: {
                text: "text",
                announcement: "meddelande",
                forum: "forum",
                voice: "röst",
                stage: "etapp"
            },
            sortOrder: {
                latestActivity: "Senaste aktiviteten",
                creationDate: "Skapandedatum"
            },
            forumLayout: {
                default: "Inte inställt",
                list: "Listvy",
                grid: "Gallerivy"
            },
            videoQuality: {
                auto: "Automatisk",
                full: "720p"
            },
            modal: {
                hidden: "dold",
                locked: "låst",
                threads: "trådar",
                posts: "inlägg",
                messages: "meddelanden",
                post: "posta",
                message: "meddelande",
                unknown: "okänd",
                permissionDetails: "Tillståndsinformation",
                thisIsA: "Detta är en {{status}} {{channelType}} kanal",
                canNotSee: "Du kan inte se {{type}} för den här kanalen.",
                guidelines: "Däremot kan du se dess riktlinjer:",
                lastCreated: "Senast skapade {{type}}:",
                lastPin: "Pin för senaste meddelande:",
                threadSlowmode: "Standardtråd långsamt läge:",
                slowmode: "Långsamt läge:",
                bitrate: "Bithastighet:",
                region: "Område:",
                automatic: "Automatisk",
                videoQuality: "Videokvalitetsläge:",
                inactiveArchiveDuration: "Standardinaktivitetslängd före arkivering {{type}}",
                defaultLayout: "Standardlayout:",
                defaultSort: "Standard sorteringsordning:",
                defaultReaction: "Standard reaktion emoji:",
                requireTag: "Inlägg på detta forum kräver en tagg för att ställas in.",
                availableTags: "Tillgängliga taggar:",
                allowedUsersAndRoles: "Tillåtna användare och roller:",
                hideAllowedUsersAndRoles: "Dölj tillåtna användare och roller",
                viewAllowedUsersAndRoles: "Visa tillåtna användare och roller"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Visar olika dolda & endast moderator saker oavsett behörigheter.",
            option: {
                showTimeouts: {
                    label: "Visa tidsgränser för medlemmar i chatten",
                    description: "Visa tidsgräns för medlemmar i chatten."
                },
                showInvitesPaused: {
                    label: "Visa inbjudningar pausade",
                    description: "Visa verktygstipset för pausade inbjudningar i serverlistan."
                },
                showModView: {
                    label: "Visa modvy",
                    description: "Visa kontextmenyalternativet för medlemsmodvyn på alla servrar."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Lägger till ett snabbmenyalternativ för att visa inbäddningar för länkar som inte har en",
            context: {
                embed: {
                    show: "Visa Bädda in",
                    hide: "Ta bort Bädda in"
                }
            },
            error: {
                failed: "Det gick inte att bädda in",
                noEmbed: "Inga inbäddningar hittades"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Visa valfri permutation av anpassade smeknamn, smeknamn för vänner, server smeknamn, visningsnamn och användarnamn i chatten.",
            option: {
                messages: {
                    label: "Meddelanden",
                    description: "Visa anpassat namnformat i meddelanden."
                },
                replies: {
                    label: "Svar",
                    description: "Visa anpassat namnformat i svaren."
                },
                mentions: {
                    label: "Omnämnanden",
                    description: "Visa anpassat namnformat i omnämnanden."
                },
                typingIndicator: {
                    label: "Skrivningsindikator",
                    description: "Visa det första tillgängliga namnet i ditt anpassade namnformat i skrivindikatorn."
                },
                memberList: {
                    label: "Medlemslista",
                    description: "Visa det första tillgängliga namnet i ditt anpassade namnformat i medlemslistan."
                },
                profilePopout: {
                    label: "Profil Popout",
                    description: "Visa det första tillgängliga namnet i ditt anpassade namnformat i profilfönster."
                },
                voiceChannels: {
                    label: "Röstkanaler",
                    description: "Visa det första tillgängliga namnet i ditt anpassade namnformat i röstkanaler."
                },
                reactions: {
                    label: "Reaktioner",
                    description: "Visa det första tillgängliga namnet i ditt anpassade namnformat i reaktionsverktygstips och det fullständiga namnet i reaktionsfönster."
                },
                discriminators: {
                    label: "Diskriminatorer",
                    description: "Lägg till diskriminatorer till användarnamn för bots. Diskriminatorer fasades ut för användare, men används fortfarande för bots. Som standard motsvarar en bots användarnamn en användares globala namn, därför kan flera botar ha samma användarnamn. Att lägga till diskriminatorer gör dem unika igen."
                },
                hideDefaultAtSign: {
                    label: "Dölj standard vid tecken",
                    description: "Dölj standardsymbolen '@' före namnet i omnämnanden och svar. Tillämpas endast om någon av funktionerna är aktiverade."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Trunkera alla namn med Streamer-läge",
                    description: "Trunkera alla namn, inte bara användarnamn, i Streamer-läge."
                },
                removeDuplicates: {
                    label: "Ta bort dubbletter",
                    description: "Om något av namnen är likvärdiga, ta bort dem och lämna bara de unika namnen."
                },
                ignoreFonts: {
                    label: "Ignorera teckensnitt",
                    description: "För andra, tredje och fjärde namn, använd gg sans oavsett användarens anpassade teckensnitt."
                },
                ignoreGradients: {
                    label: "Ignorera övertoningar",
                    description: "För de icke-primära namnen, om rollen har en gradient och färgen nedan är inställd på 'Role+-#', använd primärfärgen istället för hela gradienten, och om den har en Nitro-effekt, ignorera den helt."
                },
                animateGradients: {
                    label: "Animera övertoningar",
                    description: "För andra, tredje och fjärde namn, om rollen har en gradient, animera den. Detta inaktiveras av \"Ignorera övertoningar\" och minskad rörelse."
                },
                nameSeparator: {
                    label: "Namnavskiljare",
                    description: "Avgränsaren att använda mellan namn. Standard är ett enda mellanslag."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Vännamn endast i direktmeddelanden",
                    description: "Visa endast kompisnamn när du är i DM, och inte på servrar."
                },
                customNameOnlyInDirectMessages: {
                    label: "Anpassat namn endast i direktmeddelanden",
                    description: "Visa endast anpassade namn i DM och inte på servrar."
                },
                includedNames: {
                    label: "Inkluderade namn",
                    description: "Ordningen för att visa användarnamn, visningsnamn, smeknamn och vännamn. Använd följande platshållare: {user}, {display}, {nick}, {friend}. Du kan tillhandahålla flera namnalternativ att använda som reservdelar om ett inte är tillgängligt genom att separera dem med kommatecken som sådana: {vän, smeknamn, display}. Du kan ha upp till tre prefix och tre suffix per namn."
                },
                customNameColor: {
                    label: "Anpassad namnfärg",
                    description: "Färgen som ska användas för det anpassade namnet du tilldelade en användare om det inte är det första som visas. Accepterar alla giltiga CSS-indata. Använd \"Roll\" för att följa användarens huvudrollsfärger, nitroeffektfärger eller IRCColors-färg om aktiverat. Använd 'Role+-#' för att justera ljusstyrkan med den procentandelen (t.ex. 'Role+15')"
                },
                friendNameColor: {
                    label: "Vän namn färg",
                    description: "Färgen som ska användas för en väns smeknamn om det inte är det första som visas. Accepterar alla giltiga CSS-indata. Använd \"Roll\" för att följa användarens huvudrollsfärger, nitroeffektfärger eller IRCColors-färg om aktiverat. Använd 'Role+-#' för att justera ljusstyrkan med den procentandelen (t.ex. 'Role+15')"
                },
                nicknameColor: {
                    label: "Smeknamn färg",
                    description: "Färgen som ska användas för smeknamnet om det inte är det första som visas. Accepterar alla giltiga CSS-indata. Använd \"Roll\" för att följa användarens huvudrollsfärger, nitroeffektfärger eller IRCColors-färg om aktiverat. Använd 'Role+-#' för att justera ljusstyrkan med den procentandelen (t.ex. 'Role+15')"
                },
                displayNameColor: {
                    label: "Visningsnamn Färg",
                    description: "Färgen som ska användas för visningsnamnet om det inte är den första som visas. Accepterar alla giltiga CSS-indata. Använd \"Roll\" för att följa användarens huvudrollsfärger, nitroeffektfärger eller IRCColors-färg om aktiverat. Använd 'Role+-#' för att justera ljusstyrkan med den procentandelen (t.ex. 'Role+15')"
                },
                usernameColor: {
                    label: "Användarnamn Färg",
                    description: "Färgen som ska användas för användarnamnet om det inte är det första som visas. Accepterar alla giltiga CSS-indata. Använd \"Roll\" för att följa användarens huvudrollsfärger, nitroeffektfärger eller IRCColors-färg om aktiverat. Använd 'Role+-#' för att justera ljusstyrkan med den procentandelen (t.ex. 'Role+15')"
                },
                triggerNameRerender: {
                    label: "Utlösa namnåtergivning",
                    description: "Utlösa en namnåtergivning genom att växla den här inställningen."
                }
            },
            modal: {
                change: {
                    title: "Ändra SMYN smeknamn"
                },
                add: {
                    title: "Lägg till SMYN smeknamn"
                },
                setCustom: "Ange ett anpassat SMYN smeknamn för denna användare. Använd det genom att ange {custom} i SMYN-mallinställningarna.",
                nickname: "Smeknamn SMYN",
                reset: "Återställ SMYN smeknamn",
                cancel: "Avboka"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Visar hur mycket längre en användares timeout kommer att pågå, antingen i timeout-ikonens verktygstips eller bredvid den",
            option: {
                displayStyle: {
                    label: "Visa stil",
                    description: "Hur man visar tidsgränsens varaktighet",
                    tooltip: "I verktygstipset",
                    inline: "Bredvid timeout-ikonen"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Visar kanalerna som är gömda bakom serverresurserna i kanallistan"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Visar låtnamn istället för artist för Spotify-aktivitet"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Öppna en annan kanal eller ett DM som sidofält eller som popout",
            toolbox: {
                label: "Öppna Föregående chatt"
            },
            context: {
                label: "Öppna Sidebar Chat"
            },
            modal: {
                switch: "Byt kanal",
                popout: "Popout-chatt",
                close: "Stäng sidofältchatt"
            },
            option: {
                persistSidebar: {
                    label: "Fortsätt chatten i sidofältet",
                    description: "Håll sidofältschatten öppen under omstarter av Discord"
                },
                patchCommunity: {
                    label: "Patch Community",
                    description: "Lagra funktioner som kanalbläddraren eller fliken Medlemmar som communityservrar har."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Automatiserat fingeravtryck/sluttext",
            option: {
                name: {
                    label: "Namn",
                    description: "Signaturen som kommer att läggas till i slutet av dina meddelanden"
                },
                textHeader: {
                    label: "Texthuvud",
                    description: "Vilken rubrik att förorda text med"
                },
                showIcon: {
                    label: "Visa ikon",
                    description: "Visa en ikon för att växla plugin-programmet i chattfältet"
                },
                contextMenu: {
                    label: "Snabbmeny",
                    description: "Lägg till alternativ för att växla funktionalitet i chattinmatningskontextmenyn"
                },
                isEnabled: {
                    label: "är aktiverad",
                    description: "Växla funktionalitet"
                }
            },
            tooltip: {
                enable: "Aktivera signatur",
                disable: "Inaktivera signatur"
            },
            context: {
                enable: "Aktivera signatur"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Växla din signatur",
                    toogle: "Växla din signatur (standard är växla)",
                    enabled: "Signatur aktiverad",
                    disabled: "Signatur inaktiverad"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Lägger till en knapp i chattfältet för att växla mellan att skicka ett tyst meddelande.",
            option: {
                persistState: {
                    label: "Fortsätt tillstånd",
                    description: "Hur man behåller växlingsläget för tyst meddelande",
                    none: "Fortsätt inte (återställ vid kanalbyte)",
                    channels: "Fortsätt mellan kanalerna",
                    restarts: "Fortsätt mellan kanaler och starta om"
                },
                autoDisable: {
                    label: "Autoavaktivera",
                    description: "Inaktivera automatiskt det tysta meddelandet igen efter att ha skickat ett"
                }
            },
            tooltip: {
                enable: "Aktivera tyst meddelande",
                disable: "Inaktivera tyst meddelande"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Dölj din skrivindikator från chatten.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Dölj din skrivindikator från chatten.",
                    toggle: {
                        name: "toggle",
                        description: "Växla funktionalitet globalt, för kanalen eller för guilden.",
                        global: "Global",
                        channel: "Kanal",
                        guild: "Gille"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Dölj andra användares skrivindikatorer ovanför chattfältet."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Dölj andra användares skrivindikatorer från medlemslistan."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Visa en ikon i chattfältet för att växla plugin-programmet när du är på språng."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Visa en rullgardinsmeny i chattens snabbmeny för att växla plugin-inställningar när du är på språng."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Huruvida man ska dölja att skriva i DM/kanaler/skrån som standard eller inte."
                    }
                }
            },
            content: {
                updated: "Inställningarna för tyst skrivning har uppdaterats.",
                noChanges: "Inga ändringar har gjorts i inställningarna för tyst skrivning."
            },
            tooltip: {
                hidden: "Skriver dold ({{location}})",
                visible: "Skriver synligt ({{location}})",
                global: "Skriver synligt (globalt)"
            },
            option: {
                enabledGlobally: {
                    label: "Aktiverad globalt",
                    description: "Växla funktionalitet för din egen skrivindikator globalt."
                },
                hideChatBoxTypingIndicators: {
                    label: "Dölj indikatorer för att skriva chattruta",
                    description: "Dölj andra användares skrivindikatorer ovanför chattfältet."
                },
                hideMembersListTypingIndicators: {
                    label: "Göm indikatorer för att skriva in medlemslistan",
                    description: "Dölj andra användares skrivindikatorer från medlemslistan."
                },
                chatIcon: {
                    label: "Chattikon",
                    description: "Visa en ikon i chattfältet för att ändra plugin-programmet när du är på språng."
                },
                chatIconLeftClickAction: {
                    label: "Chattikon Vänsterklick Åtgärd",
                    description: "Vad du ska göra när du vänsterklickar på chattikonen.",
                    global: "Växla mellan att skriva globalt",
                    channel: "Växla mellan att skriva för kanal",
                    guild: "Växla Skrivning för Guild",
                    settings: "Öppna Plugin-inställningar"
                },
                chatIconMiddleClickAction: {
                    label: "Chattikon Mellanklick Åtgärd",
                    description: "Vad du ska göra när du mittklickar på chattikonen.",
                    global: "Växla mellan att skriva globalt",
                    channel: "Växla mellan att skriva för kanal",
                    guild: "Växla Skrivning för Guild",
                    settings: "Öppna Plugin-inställningar"
                },
                chatIconRightClickAction: {
                    label: "Chattikon Högerklicka Åtgärd",
                    description: "Vad du ska göra när du högerklickar på chattikonen.",
                    global: "Växla mellan att skriva globalt",
                    channel: "Växla mellan att skriva för kanal",
                    guild: "Växla Skrivning för Guild",
                    settings: "Öppna Plugin-inställningar"
                },
                chatContextMenu: {
                    label: "Chatkontextmeny",
                    description: "Visa en rullgardinsmeny i chattens sammanhangsberoende meny för att ändra plugininställningar när du är på språng."
                },
                defaultHidden: {
                    label: "Standard Dold",
                    description: "Om det är aktiverat, kommer plugin-programmet att dölja ditt skrivande från andra i alla DM/kanaler/guilds som inte är listade i \"Inaktiverade platser\" nedan. Om insticksprogrammet är inaktiverat kommer insticksprogrammet att visa dina skrivningar för andra för alla DM/kanaler/skrån som inte är listade i \"Aktiverade platser\" nedan."
                },
                enabledLocations: {
                    label: "Aktiverade platser",
                    description: "Aktivera funktionalitet för dessa ID:n. Accepterar en kommaseparerad lista med DM-ID, kanal-ID och guild-ID. Används endast om 'Default Hidden' är inaktiverat."
                },
                disabledLocations: {
                    label: "Inaktiverade platser",
                    description: "Inaktivera funktionalitet för dessa ID:n. Accepterar en kommaseparerad lista med DM-ID, kanal-ID och guild-ID. Används endast om 'Default Hidden' är aktiverat."
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Låt det snöa på Discord!",
            about: {
                title: "Information",
                paragraph: "Detta plugin lägger till en julaktig snöfallseffekt ovanpå Discords gränssnitt. Du kan ändra typ av snö i inställningarna nedan.",
                note: "OBS: Även om det här plugin-programmet på de flesta datorer inte påverkar prestandan mer än ditt genomsnittliga Plexcord-tillägg, kan det orsaka en viss fördröjning på lägre system."
            },
            option: {
                typeOfSnow: {
                    label: "Typ av snö",
                    description: "Ändra typen av snö som visas (påverkar prestandan).",
                    solid: "Solid (högsta prestanda)",
                    text: "Text (medellång prestanda)",
                    emoji: "Bild (lägsta prestanda)"
                },
                maxSize: {
                    label: "Max storlek",
                    description: "Maximal snöflingastorlek"
                },
                speed: {
                    label: "Hastighet",
                    description: "Snöfallshastighet (högre = snabbare fall)"
                },
                flakesPerSecond: {
                    label: "Flingor per sekund",
                    description: "Snöflingor per sekund (högre = tätare snöfall)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Sorterar vänförfrågningar efter mottagningsdatum",
            tooltip: "Tillagd — {{date}}",
            option: {
                showDates: {
                    label: "Visa datum",
                    description: "Visa datum på vänförfrågningar"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Loggar alla soundboards som spelas i en röstchatt och låter dig ladda ner dem",
            tooltip: "Öppna SoundBoard Log",
            option: {
                savedIds: {
                    label: "Sparade Soundboard-ID:n",
                    description: "Mängden soundboard-ID:n du vill spara åt gången (0 låter dig spara oändligt)",
                    notNumber: "Värdet är inte ett tal.",
                    cantDecimal: "Värdet får inte vara ett decimaltal.",
                    cantNegative: "Värdet får inte vara ett negativt tal.",
                    heading: "Mängden soundboard-ID:n du vill spara åt gången (0 låter dig spara oändligt)",
                    warning: "Varning! Om du ställer in numret till ett lägre värde återställs loggen!",
                    placeholder: "Ange ett nummer"
                },
                fileType: {
                    label: "Filtyp",
                    description: "Formatet som du vill spara din fil i"
                },
                openLogs: {
                    label: "Öppna Loggar",
                    description: "Visa loggarna",
                    button: "Öppna Loggar"
                },
                soundVolume: {
                    label: "Ljudvolym",
                    description: "Hur högt växlingsljudet är (0 för att inaktivera)"
                },
                iconLocation: {
                    label: "Ikon Plats",
                    description: "Välj var SoundBoard Log-ikonen ska visas (kräver omstart)",
                    toolbar: "Verktygsfält",
                    chatInput: "Chatt input"
                }
            },
            modal: {
                title: "Soundboard-loggar",
                loading: "Laddar ljud...",
                noLogs: "Inga ljud loggade än. Gå med i en röstchatt för att börja logga!",
                clearLogs: "Rensa loggar",
                played: "Spelat {{time}} tid{{s}}",
                last: "Senast spelad:",
                also: "Spelade även:",
                download: "Ladda ner",
                copyId: "Kopiera ID",
                copied: "ID kopierat till urklipp!",
                playSound: "Spela ljud",
                moreUsers: "Andra använde det här ljudet...",
                volume: "Soundboard volym"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Delar upp stora meddelanden i flera för att passa Discords meddelandegräns.",
            option: {
                maxLength: {
                    label: "Maximal meddelandelängd",
                    description: "Maximal längd på ett meddelande innan det delas. Ställ in på 0 för att automatiskt upptäcka."
                },
                disableFileConversion: {
                    label: "Inaktivera filkonvertering",
                    description: "Om sant, inaktiverar filkonvertering för stora meddelanden."
                },
                sendDelay: {
                    label: "Skicka fördröjning",
                    description: "Fördröjning mellan varje bit i sekunder."
                },
                hardSplit: {
                    label: "Hård Split",
                    description: "Om sant, delas på det sista tecknet istället för det sista mellanslag/nyrad."
                },
                splitInSlowmode: {
                    label: "Dela i långsamt läge",
                    description: "Ska meddelanden delas om kanalen har aktiverat långsamt läge?"
                },
                slowmodeMax: {
                    label: "Slowmode Max",
                    description: "Maximal slowmodetid vid delning i slowmode."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Lägger till en växlingsknapp för synlighet av Spotify-aktivitet.",
            tooltip: {
                enable: "Slå på Spotify-aktivitet",
                disable: "Stäng av Spotify-aktivitet"
            },
            option: {
                location: {
                    label: "Plats",
                    description: "Var ska du visa Spotify-växlingsknappen",
                    panel: "Bredvid Mute/Deafen",
                    toolbox: "Plexcord verktygslåda"
                },
                activityStatus: {
                    label: "Aktivitetsstatus",
                    description: "Aktuell status för din Spotify-aktivitet"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Lyssna gratis med, ingen automatisk paus i röstchatt och gör att aktiviteten kan fortsätta spela i tomgång",
            option: {
                noSpotifyAutoPause: {
                    label: "Ingen Spotify Auto-paus",
                    description: "Inaktivera automatisk paus i Spotify."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Håll Spotify-aktivitet på inaktiv",
                    description: "Fortsätt spela Spotify-aktivitet på tomgång"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Dela ditt nuvarande Spotify-spår, album eller artist via snedstreck-kommando (/spår, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Dela din nuvarande Spotify {{type}} i chatten",
                    track: "Du lyssnar inte på något spår på Spotify.",
                    find: "Det gick inte att hitta spåret på Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Lägger till starttider i menyn Inställningar",
            modal: {
                title: "Starttider",
                ended: "Spårningen slutade kl.",
                start: "Start",
                interval: "Intervall",
                delta: "Delta",
                event: "Händelse",
                serverTrace: "Serverspårning",
                loading: "Belastning..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Lägger till aviseringar för statusändringar",
            loading: "Belastning...",
            option: {
                notificationsSound: {
                    label: "Aviseringsljud",
                    description: "Spela ett aviseringsljud för statusaviseringar?"
                },
                usersList: {
                    label: "Användarlista",
                    description: "Lista över användare att meddela om statusändring",
                    empty: "Inga användare spåras. Högerklicka på en användare och välj \"Statusmeddelanden\" för att lägga till dem."
                }
            },
            context: {
                label: "Statusmeddelanden",
                notifications: "Aviseringar",
                type: {
                    all: "Alla",
                    online: "Online",
                    offline: "Off-line",
                    none: "Ingen"
                }
            },
            notification: {
                unknownUser: "Användare",
                title: "Statusmeddelanden"
            },
            status: {
                online: "Online",
                idle: "På tomgång",
                dnd: "Stör ej",
                offline: "Off-line",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Låter dig komma ihåg dina statusar och ställa in dem senare",
            button: {
                remember: "Kom ihåg Status"
            },
            context: {
                edit: "Redigera anpassade förinställningar",
                set: "Ställ in anpassad status"
            },
            notification: {
                successfully: "Statusen har sparats"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Synkronisera din status till Steam! (Online, Borta, Osynlig eller Offline.)",
            option: {
                onlineStatus: {
                    label: "Onlinestatus",
                    description: "Steam-status när du är online"
                },
                idleStatus: {
                    label: "Inaktiv status",
                    description: "Steam-status när inaktiv"
                },
                dndStatus: {
                    label: "Stör ej-status",
                    description: "Steam-status när på Stör ej"
                },
                invisibleStatus: {
                    label: "Osynlig status",
                    description: "Steam-status när den är på Invisible"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Bli osynlig om aktivitet är dold",
                    description: "Ställ in Steam-status till Invisible när Discord-aktivitet är dold"
                }
            },
            status: {
                online: "Online",
                away: "Bort",
                invisible: "Osynlig",
                offline: "Offline (koppla från Steam Chat)",
                disabled: "Inaktiverad"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Låter dig blockera klistermärken från att visas.",
            option: {
                showGif: {
                    label: "Visa GIF",
                    description: "Om man ska visa en snygg katt GIF."
                },
                showMessage: {
                    label: "Visa meddelande",
                    description: "Om ett meddelande ska visa vilket ID som blockerades"
                },
                showButton: {
                    label: "Visa knapp",
                    description: "Om du vill visa en knapp för att avblockera GIF"
                },
                blockedStickers: {
                    label: "Blockerade klistermärken",
                    description: "Listan över blockerade dekal-ID:n (redigera inte om du inte vet vad du gör)"
                }
            },
            modal: {
                blocked: "Blockerad klistermärke. ID: {{id}} NAMN: {{name}}",
                unblock: "Avblockera {{name}}"
            },
            context: {
                blockSticker: "Block klistermärke",
                unblockSticker: "Avblockera klistermärke"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Gör att man väljer ett klistermärke i klistermärkesväljaren att det infogas i chattboxen istället för att skicka det direkt"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Aktiverar automatiskt Streamer-läge när du börjar streama i Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Inaktivera codecs för strömning av ditt val",
            option: {
                disableAv1Codec: {
                    label: "Inaktivera AV1 Codec",
                    description: "Förhindra att Discord överväger att använda AV1 för streaming."
                },
                disableH265Codec: {
                    label: "Inaktivera H265 Codec",
                    description: "Förhindra att Discord överväger att använda H265 för streaming."
                },
                disableH264Codec: {
                    label: "Inaktivera H264 Codec",
                    description: "Förhindra att Discord överväger att använda H264 för streaming."
                },
                disableVP8Codec: {
                    label: "Inaktivera VP8 Codec",
                    description: "Förhindra att Discord överväger att använda VP8 för streaming."
                },
                disableVP9Codec: {
                    label: "Inaktivera VP9 Codec",
                    description: "Förhindra att Discord överväger att använda VP9 för streaming."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Anpassa gränsen för Superreaktioner som spelas på en gång, och Superreaktion som standard",
            option: {
                superReactByDefault: {
                    label: "Superreagera som standard",
                    description: "Reaktionsväljaren kommer som standard till Superreaktioner"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Obegränsade superreaktioner som spelar",
                    description: "Ta bort gränsen för Superreaktioner som spelas på en gång"
                },
                superReactionPlayingLimit: {
                    label: "Superreaktioner Spelgräns",
                    description: "Max superreaktioner att spela på en gång. Ställ in på 0 för att inaktivera uppspelning av Superreaktioner"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Byt ut text i dina meddelanden. Du kan hitta färdiga regler i #textreplace-rules-kanalen i Plexcords server",
            option: {
                replace: {
                    label: "Ersätta",
                    string: "Enkla ersättningar",
                    stringDescription: "Enkla regler för sök och ersätt. Till exempel: hitta 'brb' och ersätt det med 'be right back'",
                    regex: "Regex-ersättningar",
                    regexDescription: "Mer kraftfulla ersättningar med reguljära uttryck. Den här sektionen är för avancerade användare. Om du inte förstår det kan du ignorera det",
                    myMessages: "Tillämpa på dina meddelanden (synligt för alla)",
                    othersMessages: "Tillämpa på andras meddelanden (endast synligt för dig)",
                    allMessages: "Tillämpa på alla meddelanden"
                },
                stringRules: {
                    label: "Strängregler",
                    description: "Regler för att ersätta text med strängmatchning."
                },
                regexRules: {
                    label: "Regex regler",
                    description: "Regler för att ersätta text med reguljära uttryck."
                }
            },
            modal: {
                title: "Testregler",
                find: "Hitta",
                findRegex: "Regex-mönster",
                findText: "Text att ersätta",
                replace: "Ersätt",
                replaceDescription: "Texten som ska ersätta den hittade texten",
                includes: "Endast om innehåller",
                includesDescription: "Denna regel tillämpas endast om meddelandet innehåller denna text. Detta är valfritt",
                type: "Skriv ett meddelande",
                applied: "Meddelande med regler tillämpade",
                delete: "Ta bort regel",
                add: "Lägg till regel",
                empty: "Tom regel",
                rule: "Regel",
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Lägger till dataattribut till olika element för temaändamål"
        },
        timezones: {
            name: "Timezones",
            description: "Visar lokal tid för användare i profiler och meddelanderubriker",
            button: {
                wantToSave: "Vill du spara din tidszon i databasen? Klicka här för att ställa in den.",
                yourLocalTimezone: "(Din lokala tidszon)"
            },
            context: {
                set: "Ställ in lokal tidszon"
            },
            toast: {
                refresh: {
                    successfully: "Tidszoner har uppdaterats!",
                    failed: "Tidszoner kunde inte uppdateras!",
                    failedTo: "Det gick inte att uppdatera tidszoner."
                },
                update: {
                    successfully: "Tidszonen har uppdaterats!",
                    failed: "Det gick inte att ställa in tidszon."
                },
                delete: {
                    successfully: "Tidszonen har raderats!",
                    failed: "Det gick inte att ta bort tidszonen."
                },
                auth: {
                    failed: "Autentiseringen misslyckades.",
                    success: "Auktoriseringen lyckades!"
                }
            },
            toolbox: {
                set: "Ställ in databastidszon",
                refresh: "Uppdatera databastidszoner"
            },
            option: {
                showOwnTimezone: {
                    label: "Visa egen tidszon",
                    description: "Visa din egen tidszon i profiler och meddelanderubriker"
                },
                twentyFourHourTime: {
                    label: "24-timmars tid",
                    description: "Visa tid i 24-timmarsformat"
                },
                showTimezoneInfo: {
                    label: "Visa tidszonsinformation",
                    description: "Visa tidszonsinformation bredvid tiden"
                },
                showMessageHeaderTime: {
                    label: "Visa meddelandehuvudtid",
                    description: "Visa tid i meddelanderubriker"
                },
                showProfileTime: {
                    label: "Visa profiltid",
                    description: "Visa tid i användarprofiler"
                },
                useDatabase: {
                    label: "Använd databasens tidszon",
                    description: "Aktivera databas för att få användarens tidszoner"
                },
                preferDatabaseOverLocal: {
                    label: "Föredrar databas framför lokal",
                    description: "Föredrar databas framför lokal lagring för tidszoner"
                },
                databaseUrl: {
                    label: "Databas URL",
                    description: "URL:en för tidszondatabasservern"
                },
                setDatabaseTimezone: {
                    label: "Ställ in databastidszon",
                    description: "Ställ in din tidszon i databasen",
                    setTimezone: "Ställ in tidszon i databasen"
                },
                resetDatabaseTimezone: {
                    label: "Återställ databasens tidszon",
                    description: "Återställ din tidszon på databasen",
                    failed: "Det gick inte att återställa databasens tidszon"
                },
                askedTimezone: {
                    label: "Frågade tidszon",
                    description: "Om användaren har blivit ombedd att ställa in sin tidszon"
                }
            },
            modal: {
                title: "Tidszoner",
                select: "Välj Tidszon",
                selectPlaceholder: "Välj en tidszon",
                delete: "Ta bort tidszon",
                save: "Spara"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Visa ett toastmeddelande när du får ett direktmeddelande.",
            notification: {
                call: "Började ett samtal med dig!",
                recipient: {
                    add: "{{target}} lades till i gruppen av {{actor}}.",
                    remove: "{{target}} togs bort från gruppen av {{actor}}.",
                    left: "Lämnade gruppen."
                },
                channel: {
                    change: {
                        name: "Changed the channel name to {{name}}.",
                        icon: "Ändrade kanalikonen."
                    },
                    pinned: "Fäste ett meddelande."
                },
                sent: {
                    embed: "Skickade en inbäddning.",
                    sticker: "Skickade ett klistermärke.",
                    attachment: "Fastsättning:"
                },
                redacted: "Meddelandeinnehållet har redigerats.",
                friend: {
                    accept: "{{user}} är nu din vän",
                    acceptBody: "Du kan nu skicka ett meddelande till dem direkt.",
                    request: "{{user}} har skickat en vänförfrågan till dig.",
                    requestBody: "Du kan acceptera eller avböja det på fliken Vänner."
                },
                example: {
                    title: "Exempelmeddelande",
                    body: "Detta är ett exempel på anmälningsorgan."
                }
            },
            modal: {
                dismiss: "Avvisa meddelande",
                attachments: "{{attachments}} bilaga{{s}} {{were}} har skickats."
            },
            option: {
                position: {
                    label: "Placera",
                    description: "Placeringen av toastmeddelandet",
                    topRight: "Överst till höger",
                    topLeft: "Överst till vänster",
                    bottomRight: "Nederst till höger",
                    bottomLeft: "Längst ner till vänster"
                },
                timeout: {
                    label: "Timeout",
                    description: "Tid i sekunder aviseringar kommer att visas för"
                },
                opacity: {
                    label: "Opacitet",
                    description: "Opaciteten för toastmeddelandet"
                },
                determineServerNotifications: {
                    label: "Bestäm servermeddelanden",
                    description: "Bestäm om du vill visa aviseringar baserat på serveraviseringsinställningar"
                },
                directMessages: {
                    label: "Direktmeddelanden",
                    description: "Visa aviseringar för direktmeddelanden"
                },
                groupMessages: {
                    label: "Gruppmeddelanden",
                    description: "Visa aviseringar för gruppmeddelanden"
                },
                friendServerNotifications: {
                    label: "Vän- och servermeddelanden",
                    description: "Visa aviseringar när vänner skickar meddelanden på servrar som de delar med dig"
                },
                friendActivity: {
                    label: "Vänaktivitet",
                    description: "Visa aviseringar för att lägga till någon eller ta emot en vänförfrågan"
                },
                notifyFor: {
                    label: "Meddela för",
                    description: "Skapa en lista med kanal-ID:n att ta emot aviseringar från (separera med kommatecken)"
                },
                ignoreUsers: {
                    label: "Ignorera användare",
                    description: "Skapa en lista med användar-ID att ignorera alla deras aviseringar från (separera med kommatecken)"
                },
                exampleButton: {
                    label: "Exempelknapp",
                    description: "Visa ett exempel på avisering om rostat bröd.",
                    show: "Visa exempelmeddelande"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Lägger till en anpassningsbar bindning för att växla webbkamera.",
            option: {
                keyBind: {
                    label: "Keybind",
                    description: "Nyckeln för att växla webbkamera när den trycks ned."
                },
                reqCtrl: {
                    label: "Kräv Ctrl",
                    description: "Kräv att kontroll hålls."
                },
                reqShift: {
                    label: "Kräv Shift",
                    description: "Kräv att Shift hålls."
                },
                reqAlt: {
                    label: "Kräv Alt",
                    description: "Kräv att Alt hålls."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Översätt meddelanden med Google Translate eller DeepL",
            tooltip: {
                label: "Översätta"
            },
            context: {
                translate: "Översätta",
                open: "Öppna Translate Modal",
                auto: "Automatisk översättning aktiverad"
            },
            option: {
                receivedInput: {
                    label: "Mottagen input",
                    description: "Språk som mottagna meddelanden ska översättas från"
                },
                receivedOutput: {
                    label: "Mottagen utdata",
                    description: "Språk som mottagna meddelanden ska översättas till"
                },
                sentInput: {
                    label: "Skickat ingång",
                    description: "Språk som dina egna meddelanden ska översättas från"
                },
                sentOutput: {
                    label: "Skickat utdata",
                    description: "Språk som dina egna meddelanden ska översättas till"
                },
                service: {
                    label: "Översättningstjänst",
                    description: "DeepL kräver en betald API-nyckel från DeepL Pro",
                    descriptionWeb: "Översättningstjänst (stöds inte på webben!)",
                    google: "Google Översätt",
                    deepl: "DeepL gratis",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "DeepL API-nyckel",
                    description: "DeepL API-nyckel",
                    placeholder: "Få din API-nyckel från https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Automatisk översättning",
                    description: "Översätt dina meddelanden automatiskt innan de skickas. Du kan också skifta/högerklicka på översättknappen för att växla mellan detta"
                },
                showAutoTranslateTooltip: {
                    label: "Visa verktygstips för automatisk översättning",
                    description: "Visa ett verktygstips på ChatBar-knappen när ett meddelande automatiskt översätts"
                }
            },
            modal: {
                title: "Översätta",
                select: "Välj ett språk",
                auto: "Automatisk översättning",
                dismiss: "Avfärda",
                translated: "översatt från {{from}}",
                failed: {
                    to: "Det gick inte att översätta {{text}}",
                    connect: "Det gick inte att ansluta till DeepL API:"
                },
                wrong: "Något gick fel. Om problemet kvarstår, kontrollera konsolen eller be om hjälp på supportservern.",
                deepl: {
                    api: "DeepL API-kvot har överskridits. Faller tillbaka till Google Translate.",
                    apiKey: "DeepL API-nyckel är inte inställd. Återställer till Google",
                    auth: "Ogiltig DeepL API-nyckel eller version"
                },
                autoTranslateEnabled: {
                    title: "Plexcord Auto-Translate aktiverad",
                    body: "Du har precis aktiverat Auto-Translate! Alla meddelanden kommer automatiskt att översättas innan de skickas.",
                    confirm: "Inaktivera automatisk översättning",
                    cancel: "Jag förstår",
                    secondaryConfirm: "Visa inte igen"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Lägger till en indikator om någon skriver på en kanal.",
            option: {
                includeCurrentChannel: {
                    label: "Inkludera aktuell kanal",
                    description: "Om skrivindikatorn ska visas för den för närvarande valda kanalen"
                },
                includeMutedChannels: {
                    label: "Inkludera dämpade kanaler",
                    description: "Om skrivindikatorn ska visas för dämpade kanaler."
                },
                includeIgnoredUsers: {
                    label: "Inkludera ignorerade användare",
                    description: "Om skrivindikatorn ska visas för ignorerade användare."
                },
                includeBlockedUsers: {
                    label: "Inkludera blockerade användare",
                    description: "Om skrivindikatorn ska visas för blockerade användare."
                },
                indicatorMode: {
                    label: "Indikatorläge",
                    description: "Hur ska indikatorn visas?",
                    both: "Avatarer och animerade prickar",
                    dots: "Animerade prickar",
                    avatars: "Avatarer"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Visa avatarer och rollfärger i skrivindikatorn",
            option: {
                showAvatars: {
                    label: "Visa flera användare",
                    description: "Visa avatarer i skrivindikatorn"
                },
                showRoleColors: {
                    label: "Visa rollfärger",
                    description: "Visa rollfärger i skrivindikatorn"
                },
                alternativeFormatting: {
                    label: "Alternativ formatering",
                    description: "Visa ett mer användbart meddelande när flera användare skriver"
                },
                amITyping: {
                    label: "Skriver jag",
                    description: "Visar dig om andra kan se dig skriva"
                }
            },
            others: {
                areTyping: "och {{count}} andra skriver..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Trimmar ledande indrag från kodblock"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Konverterar metriska enheter till imperialistiska enheter och vice versa",
            tooltip: "Konvertera enheter",
            option: {
                myUnits: {
                    label: "Mina enheter",
                    description: "De enheter du använder och vill ha saker omvandlade till. Standard till Imperial",
                    imperial: "Kejserlig",
                    metric: "Metrisk"
                }
            },
            button: {
                dismiss: "Avfärda"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Ökar antalet konton du kan lägga till.",
            option: {
                maxAccounts: {
                    label: "Max konton",
                    description: "Antal konton som kan läggas till, eller 0 utan gräns"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Låter dig zooma in ytterligare i bildbeskärningsverktyget när du byter avatar",
            option: {
                zoomMultiplier: {
                    label: "Zoommultiplikator",
                    description: "Zoommultiplikator"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Låter dig ta bort inbäddningar i meddelanden",
            context: {
                unsuppress: "Ta bort Bädda in",
                suppress: "Undertryck inbäddning"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Visar slumpmässig värdelös information inom Discord; genvägar och avstånd är justerbara.",
            recording: "Inspelning...",
            record: "Spela in",
            option: {
                delay: {
                    label: "Meddelandeintervall",
                    description: "Aviseringsvisningsintervall i minuter"
                },
                historyHotkey: {
                    label: "Genväg till Historikpanelen",
                    description: "Snabbtangent för att visa en historik över tidigare visade fakta"
                },
                randomFactHotkey: {
                    label: "Slumpmässig faktagenväg",
                    description: "Snabbtangent för att öppna den slumpmässiga faktapanelen"
                },
                sameFact: {
                    label: "Undvik att visa samma föremål",
                    description: "Undvik att visa samma fakta flera gånger tills alla fakta har visats"
                },
                lastNFacts: {
                    label: "Hur många senaste att undvika",
                    description: "Antal senast visade fakta för att undvika att upprepas (0 = genom tiderna)"
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Inga fakta än. Använd genvägen eller vänta.",
                    source: "Källa"
                },
                showRandom: "Visa slumpmässigt",
                close: "Nära"
            },
            notification: {
                title: "Visste du det?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Visar användarpronomen i meddelanderubriker",
            option: {
                pronounsFormat: {
                    label: "Pronomen Format",
                    description: "Formatet för pronomen som ska visas i chatten",
                    lowercase: "Små bokstäver",
                    capitalized: "Versal"
                },
                showSelf: {
                    label: "Visa själv",
                    description: "Aktivera eller inaktivera visning av pronomen för dig själv"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Visar en indikator när en användare är i en röstkanal",
            option: {
                showInUserProfileModal: {
                    label: "Visa i användarprofil Modal",
                    description: "Visa en användares röstkanalindikator i deras profil bredvid namnet"
                },
                showInMemberList: {
                    label: "Visa i medlemslistan",
                    description: "Visa en användares röstkanalindikator i medlems- och DM-listan"
                },
                showInMessages: {
                    label: "Visa i meddelanden",
                    description: "Visa en användares röstkanalindikator i meddelanden"
                }
            },
            modal: {
                inVoiceChat: "I röstchatt"
            },
            notification: {
                cannotJoin: "Du kan inte gå med i användarens röstkanal."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Visar användarbanners från USBBG, vilket gör att alla kan få en banner utan Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro först",
                    description: "Banner att använda om både Nitro- och USBG-banner finns",
                    nitro: "Nitro banner",
                    usrbg: "USBG-banner"
                },
                voiceBackground: {
                    label: "Röst bakgrund",
                    description: "Använd USBBG-banner som bakgrund för röstchatt"
                }
            },
            button: "Skaffa din egen USBG-banner"
        },
        validReply: {
            name: "ValidReply",
            description: "Fixar \"Meddelandet kunde inte laddas\" när du håller muspekaren över svaret"
        },
        validUser: {
            name: "ValidUser",
            description: "Åtgärda omnämnanden för okända användare som visas som \"@okänd-användare\" (håll muspekaren över ett omnämnande för att fixa det)",
            badges: {
                discordBugHunter: "Discord Bug Hunter",
                moderatorProgramsAlumni: "Moderatorprogram Alumner",
                discordStaff: "Discord Personal",
                hypeSquadEvents: "HypeSquad-evenemang",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad-balans",
                partneredServerOwner: "Partnerad serverägare",
                nitro: "Discord Nitro",
                earlySupporter: "Tidig supporter",
                earlyVerifiedBotDeveloper: "Tidig verifierad botutvecklare"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Gå med i röstchatt via dubbelklick istället för enkelklick"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Meddelar när användare går med i, lämnar eller flyttar röstkanaler via berättaren",
            option: {
                voice: {
                    label: "Röst"
                },
                volume: {
                    label: "Volym",
                    description: "Berättarvolym"
                },
                rate: {
                    label: "Hastighet",
                    description: "Berättarhastighet"
                },
                sayOwnName: {
                    label: "Säg eget namn",
                    description: "Säg eget namn"
                },
                latinOnly: {
                    label: "Endast latin",
                    description: "Ta bort icke-latinska tecken från namn innan du säger dem"
                },
                joinMessage: {
                    label: "Gå med i meddelandet",
                    description: "Gå med i meddelandet"
                },
                leaveMessage: {
                    label: "Lämna meddelande",
                    description: "Lämna meddelande"
                },
                moveMessage: {
                    label: "Flytta meddelande",
                    description: "Flytta meddelande"
                },
                muteMessage: {
                    label: "Stäng av meddelande",
                    description: "Ljud av meddelande (endast jag själv för tillfället)"
                },
                unmuteMessage: {
                    label: "Slå på ljudet för meddelande",
                    description: "Slå på ljudet för meddelande (endast jag själv för tillfället)"
                },
                deafenMessage: {
                    label: "Döva meddelande",
                    description: "Deafen Message (endast jag själv för tillfället)"
                },
                undeafenMessage: {
                    label: "Undeafen meddelande",
                    description: "Undeafen Message (endast jag själv för tillfället)"
                }
            },
            modal: {
                title: "Spela exempelljud",
                voiceTitle: "Röst",
                voice: "Välj en röst",
                languageTitle: "Språk",
                language: "Välj ett språk",
                noVoice: "Inga berättarröster hittades.",
                linuxNote: "Installera speech-dispatcher eller espeak och kör Discord med flaggan --enable-speech-dispatcher",
                someNarrator: "Testa att installera några i Skärmläsarens inställningar i ditt operativsystem",
                dontHaveEnglish: "Du har inga engelska röster installerade, så berättaren kan låta konstig",
                customiseMessages: "Du kan anpassa de talade meddelandena nedan. Du kan inaktivera specifika meddelanden genom att ställa in dem på ingenting",
                placeholdersInfo: "De speciella platshållarna {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} och {{CHANNEL}} kommer att ersättas med användarens namn (ingenting om det är du själv), användarens visningsnamn, användarens smeknamn på aktuell server respektive kanalens namn"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Gör avatarer och banners i användarprofiler klickbara, lägger till Visa Avatar/Banner-poster i användar-, server- och gruppkanalens snabbmeny.",
            context: {
                view: {
                    avatar: "Visa Avatar",
                    serverAvatar: "Visa serveravatar",
                    icon: "Visa ikon",
                    banner: "Visa banner"
                }
            },
            option: {
                format: {
                    label: "Formatera",
                    description: "Välj det bildformat som ska användas för icke-animerade bilder. Animerade bilder kommer alltid att använda .gif"
                },
                imgSize: {
                    label: "Bildstorlek",
                    description: "Bildstorleken som ska användas"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Kopiera och se råinnehållet/data från alla meddelanden, kanaler eller guilder",
            context: {
                copyLeft: "Kopiera Raw (vänsterklick) / Visa Raw (högerklick)",
                copyRight: "Kopiera Raw (högerklick) / Visa Raw (vänsterklick)",
                view: "Visa Raw"
            },
            option: {
                popoverButton: {
                    label: "Popover-knapp",
                    description: "Visa en knapp i meddelandets popover för att se meddelandets råa innehåll/data."
                },
                clickMethod: {
                    label: "Klicka på Metod",
                    description: "Ändra knappen för att visa råinnehållet/data för alla meddelanden.",
                    left: "Vänsterklicka för att se det råa innehållet.",
                    right: "Högerklicka för att se det råa innehållet."
                }
            },
            modal: {
                title: "Visa Raw",
                content: "Innehåll",
                data: "{{type}} Data",
                copied: "{{type}} data kopierad till urklipp!",
                copy: "Kopiera {{type}} JSON",
                copiedContent: "Innehållet har kopierats till urklipp!",
                copyContent: "Kopiera råinnehåll"
            },
            types: {
                message: "Meddelande",
                channel: "Kanal",
                guild: "Gille",
                role: "Roll",
                user: "Användare"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "DM, stäng av eller döv snabbt alla användare direkt från röstsamtalspanelen.",
            option: {
                showChatButton: {
                    label: "Visa chattknapp",
                    description: "Om du vill visa chattknappen"
                },
                showMuteButton: {
                    label: "Visa Mute-knappen",
                    description: "Om du vill visa mute-knappen"
                },
                showDeafenButton: {
                    label: "Visa Deafen-knappen",
                    description: "Om du vill visa döva-knappen"
                },
                muteSoundboard: {
                    label: "Stäng av Soundboard",
                    description: "Växlar deras soundboard när du klickar på knappen Döva."
                },
                disableVideo: {
                    label: "Inaktivera video",
                    description: "Växlar deras video när du klickar på knappen Döva."
                },
                useServer: {
                    label: "Använd server",
                    description: "Använd server mute/deafen istället för lokal när du har tillstånd."
                },
                serverSelf: {
                    label: "Server själv",
                    description: "Döva / Döva dig själv på servern när du använder mute/deafen."
                },
                showButtonsSelf: {
                    label: "Visa knappar på själv",
                    description: "Oavsett om du vill visa knappar för din egen användare. Samma funktionalitet som andra knapp(ar) förutom att den öppnar DMs-panelen och tystar/dövar för dig själv när du klickar på knapp(ar).",
                    display: "Visa",
                    hide: "Dölja",
                    disable: "Inaktivera"
                },
                whichNameToShow: {
                    label: "Vilket namn som ska visas",
                    description: "Välj om du vill visa smeknamn eller användarnamn i verktygstipset.",
                    global: "Globalt namn",
                    username: "Användarnamn",
                    both: "Både"
                },
                buttonPosition: {
                    label: "Knappens position",
                    description: "Välj var knapparna ska visas.",
                    left: "Vänster",
                    right: "Rätt",
                }
            },
            tooltip: {
                navigate: "Navigera till DM",
                open: "Öppna DM med {{username}}",
                yourself: "själv",
                serverMute: "Ljud av servern",
                serverDeafen: "Server Deafen",
                mute: "Stum",
                deafen: "Döva",
                unmute: "Slå på ljudet",
                undeafen: "Odöva",
                serverUnmute: "Slå på ljudet för servern",
                serverUndeafen: "Server Undeafen"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Loggar vem som går med och lämnar röstkanaler",
            context: {
                view: "Visa kanallogg"
            },
            modal: {
                joined: "Gick med i <#{{channel}}>",
                left: "Vänster <#{{channel}}>",
                movedTo: "Flyttade till <#{{channel}}>",
                movedFrom: "Flyttade från <#{{channel}}>",
                noLogs: "Inga loggar att visa.",
                logs: "{{channel}} logs"
            },
            option: {
                mode: {
                    label: "Läge",
                    description: "Hur man visar röstkanalloggen",
                    menu: "Loggmeny",
                    associated: "Logga till associerad chatt direkt",
                    both: "Logga till chatt och loggmeny"
                },
                voiceChannelChatSelf: {
                    label: "Röstkanal Chat Self",
                    description: "Logga dina egna röstkanalhändelser i röstkanalerna"
                },
                voiceChannelChatSilent: {
                    label: "Röstkanal Chatt Tyst",
                    description: "Gå med/lämna/flytta meddelanden i röstkanalchattar kommer att vara tysta"
                },
                voiceChannelChatSilentSelf: {
                    label: "Röstkanal Chatt Tyst själv",
                    description: "Gå med/lämna/flytta meddelanden i röstkanalchattar kommer att vara tysta om du är i röstkanalen"
                },
                ignoreBlockedUsers: {
                    label: "Ignorera blockerade användare",
                    description: "Logga inte blockerade användare"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Denna plugin låter dig utföra flera åtgärder på en hel kanal (flytta, tysta, koppla ur, etc.) (ursprungligen genom dutake)",
            option: {
                waitAfter: {
                    label: "Vänta efter åtgärd",
                    description: "Antal API-åtgärder som ska utföras innan du väntar (för att undvika hastighetsgränser)"
                },
                waitSeconds: {
                    label: "Vänta sekunder",
                    description: "Tid att vänta mellan varje åtgärd (i sekunder)"
                }
            },
            context: {
                voiceTools: "Röstverktyg",
                mentionAll: "Nämn alla användare",
                disconnectAll: "Koppla bort alla",
                muteAll: "Stäng av alla",
                unmuteAll: "Slå på ljudet för alla",
                deafenAll: "Döva alla",
                undeafenAll: "Undeafen Alla",
                moveAll: "Flytta alla"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Lägger till en nedladdning till röstmeddelanden. (Öppnar en ny webbläsarflik)",
            context: {
                download: "Ladda ner röstmeddelande"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Låter dig skicka röstmeddelanden som på mobilen. För att göra det, högerklicka på uppladdningsknappen och klicka på Skicka röstmeddelande.",
            option: {
                noiseSuppression: {
                    label: "Brusdämpning",
                    description: "Brusdämpning"
                },
                echoCancellation: {
                    label: "Eko-avstängning",
                    description: "Eko-avstängning"
                }
            },
            notification: {
                failed: {
                    upload: "Det gick inte att ladda upp röstmeddelande.",
                    start: "Det gick inte att starta inspelningen.",
                    finish: "Det gick inte att slutföra inspelningen."
                }
            },
            context: {
                sendVoiceMessage: "Skicka röstmeddelande",
                missingPermissions: "(Behörigheter saknas)"
            },
            modal: {
                record: "Spela in röstmeddelande",
                upload: "Ladda upp fil",
                preview: "Förhandsvisning",
                failed: "Det gick inte att tolka den valda ljudfilen:",
                oggOpus: "Röstmeddelanden måste vara OggOpus för att kunna spelas på iOS. Den här filen är {{type}} så den kommer inte att kunna spelas upp på iOS.",
                fix: "För att fixa det, konvertera det först till OggOpus, till exempel med hjälp av {{link}}",
                sending: "Skickar nu röstmeddelande... Ha tålamod.",
                stop: "Sluta spela in",
                start: "Börja spela in",
                resume: "Återuppta inspelningen",
                pause: "Pausa inspelningen",
                recording: "INSPELNING",
                send: "Skicka",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Låter dig ställa in användar- och streamvolymen över standardmax",
            option: {
                multiplier: {
                    label: "Multiplikator",
                    description: "Volymmultiplikator"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Rekreation av det gamla DM tapetexperimentet; Ställ in en bakgrundsbild för valfri kanal, användare eller server.",
            option: {
                globalDefault: {
                    label: "Global standard",
                    description: "Ställ in en global standardbakgrund för alla kanaler."
                },
                stylingTips: {
                    label: "Styling tips"
                }
            },
            context: {
                setWallpaper: "Ställ in Bakgrund",
                removeWallpaper: "Ta bort tapeter"
            },
            modal: {
                set: "Ställ in tapeter",
                image: "Bildens URL",
                cancel: "Avboka",
                apply: "Tillämpas",
                global: {
                    set: "Ställ in en global bakgrund",
                    remove: "Ta bort global standardbakgrund",
                    reset: "Återställ bakgrundsdata"
                },
                web: {
                    info: "Du kan använda lokala filer genom att ha dem i Plexcords temakatalog och använda URL:en plexcord:///themes/filename.ext",
                    open: "Öppna temakatalogen",
                    quickCSS: "Öppna QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Lägger till snabbmenyer som saknas i webbversionen av Discord: Länkar och bilder (Kopiera/Öppna länk/Bild), Textområde (Kopiera, Klipp ut, Klistra in, Stavningskontroll)",
            option: {
                addBack: {
                    label: "Lägg tillbaka",
                    description: "Lägg tillbaka Discord-kontextmenyerna för bilder, länkar och chattinmatningsfältet"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Återlägger nyckelbindningar som saknas i webbversionen av Discord: Ctrl+T, Ctrl+Skift+T, Ctrl+Tab, Ctrl+Skift+Tab, Ctrl+1-9, Ctrl+,. Fungerar endast fullt ut på Plextron/Legcord, inte i din webbläsare"
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Tar bort 2500 kbps bithastighetstak på Chromium- och Plextron-klienter.",
            option: {
                experimentalAV1Support: {
                    label: "Experimentell AV1-stöd",
                    description: "Aktivera stöd för AV1-codec. Kan orsaka problem som oändligt ladda strömmar"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Återger avatarerna för användare som reagerade på ett meddelande",
            option: {
                avatarClick: {
                    label: "Avatar Klicka",
                    description: "Växla klickande avatarer i reaktioner"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Håll muspekaren över skärmdelningsikonen för att se vilka användare som tittar på din stream",
            modal: {
                noSpectator: "Inga åskådare"
            },
            option: {
                showPanel: {
                    label: "Visa panel",
                    description: "Visa åskådarna under skärmdelningspanelen"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Ändrar den första bokstaven i varje mening i meddelandeinmatningar till versaler",
            option: {
                blockedWords: {
                    label: "Blockerade ord",
                    description: "Strängar som inte ska skrivas med versaler (separera med komma)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Vidarebefordrar Discord-aviseringar till XSOverlay, för enkel visning i VR",
            notification: {
                call: {
                    title: "{{user}} ringer dig.",
                    content: "Inkommande samtal"
                },
                message: {
                    reply: "(svar)",
                    embed: "[bädda in]",
                    onlyEmbed: "Skickat meddelande inbäddning(ar)",
                    sticker: "[dekal]",
                    onlySticker: "Skickade ett klistermärke",
                    image: "bild",
                    attachment: "fastsättning"
                },
                test: {
                    title: "Hej från Plexcord!",
                    content: "Detta är ett testmeddelande! *Explodera*",
                    button: "Skicka testavisering"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket-port",
                    description: "WebSocket-port"
                },
                preferUDP: {
                    label: "Föredrar UDP",
                    description: "Aktivera om du använder en äldre version av XSOverlay som inte kan ansluta via WebSockets. Den här inställningen ignoreras på webben."
                },
                botNotifications: {
                    label: "Botmeddelanden",
                    description: "Tillåt botaviseringar"
                },
                serverNotifications: {
                    label: "Servermeddelanden",
                    description: "Tillåt serveraviseringar"
                },
                dmNotifications: {
                    label: "DM-aviseringar",
                    description: "Tillåt direktmeddelandeaviseringar"
                },
                groupDmNotifications: {
                    label: "Grupp DM-meddelanden",
                    description: "Tillåt grupp-DM-aviseringar"
                },
                callNotifications: {
                    label: "Samtalsmeddelanden",
                    description: "Tillåt samtalsaviseringar"
                },
                pingColor: {
                    label: "Ping färg",
                    description: "Användaren nämner färg"
                },
                channelPingColor: {
                    label: "Kanalping-färg",
                    description: "Kanal nämna färg"
                },
                soundPath: {
                    label: "Ljudväg",
                    description: "Aviseringsljud (standard/varning/fel)"
                },
                timeout: {
                    label: "Timeout",
                    description: "Aviseringslängd (sekunder)"
                },
                lengthBasedTimeout: {
                    label: "Längdbaserad timeout",
                    description: "Förläng varaktigheten med meddelandelängd"
                },
                opacity: {
                    label: "Opacitet",
                    description: "Opacitet för meddelanden"
                },
                volume: {
                    label: "Volym",
                    description: "Volym"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Blockera annonser i YouTube-inbäddningar och aktiviteten Titta tillsammans via AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Lägger till beskrivningar till YouTube-videoinbäddningar"
        }
    }
} as const;

export default translations;
