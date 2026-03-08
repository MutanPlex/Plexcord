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
        title: "inställningar",
        language: {
            selector: {
                label: "Dil",
                description: "Välj önskat språk för Plexcord.",
                placeholder: "Välj Språk"
            }
        },
        location: {
            label: "Inställningar Plats",
            description: "Plexcord bestämmer var inställningssektionen ska placeras",
            top: "till toppen",
            nitro: {
                above: "Ovanpå nitrosektionen",
                below: "under nitrosektionen"
            },
            activity: {
                above: "Ovan händelseinställningar",
                below: "Under Händelseinställningar"
            },
            bottom: "på hög"
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
                label: "Inaktivera huvudfönsterram",
                description: "Ta bort den lokala fönsterramen för ett renare utseende. Du kan fortfarande flytta fönstret genom att dra i namnlistens område."
            },
            frameless: {
                label: "Inaktivera fönsterram",
                description: "Ta bort den lokala fönsterramen för ett renare utseende. Du kan fortfarande flytta fönstret genom att dra i namnlistens område."
            },
            winNativeTitleBar: {
                label: "Använd Windows inbyggda namnlist istället för Discords anpassade namnlist",
                description: "Ersätt Discords anpassade namnlist med standardnamnlisten i Windows. Detta kan förbättra kompatibiliteten med vissa fönsterhanteringsverktyg."
            },
            transparent: {
                label: "Aktivera fönstertransparens",
                description: "Gör Discord-fönstret genomskinligt. Ett tema som stöder transparens krävs, annars gör det ingenting.",
                isWindows: "Detta hindrar fönstret från att ändra storlek och förhindrar att du fäster fönstret mot skärmens kanter.",
                notWindows: "Detta förhindrar att storleken på fönstret ändras."
            },
            winCtrlQ: {
                label: "Spara Ctrl+Q genväg för att stänga Discord (alternativ till Alt+F4)",
                description: "Lägg till Ctrl+Q som kortkommando för att stänga Discord. Detta ger ett alternativ till Alt+F4 för att snabbt stänga programmet."
            },
            disableMinSize: {
                label: "Inaktivera minsta fönsterstorlek",
                description: "Tillåt Discord-fönstret att ändra storleken mindre än dess standardminimistorlek. Användbar för kakelsättning av fönsterhanterare eller små skärmar."
            }
        },
        quickActions: {
            title: "Snabba transaktioner",
            description: "Vanliga operationer som du kanske vill använda ofta. Dessa genvägar ger snabb åtkomst till ofta använda funktioner utan att navigera i menyer.",
            notificationLog: "Aviseringslogg",
            editQuickCSS: "QuickCSS Redigera",
            relaunchDiscord: "Starta om Discord",
            openSettingsFolder: "Öppna mappen Inställningar",
            viewSourceCode: "Se källkoden"
        },
        specialCards: {
            donations: {
                title: "Donationer",
                subtitle: "Tack för din donation!",
                description: "Du kan hantera dina privilegier när som helst genom att skicka ett meddelande till @mutanplex.",
                button: "Donation",
                invite: "Gå med i vår discord",
                invalid: "Ogiltig eller utgången inbjudningslänk."
            },
            supportProject: {
                title: "Stöd projektet",
                description: "Överväg att stödja utvecklingen av Plexcord genom att donera!"
            },
            contributions: {
                title: "Bidrag",
                subtitle: "Tack för ditt bidrag!",
                description: "Du har nu ett coolt märke för att bidra till Plexcord!",
                buttonTitle: "Se vad du bidragit med"
            }
        },
        settingsSection: {
            title: "Inställningar",
            description: "Konfigurera hur Plexcord integrerar och beter sig med Discord. Dessa inställningar påverkar utseendet och beteendet hos Discord-klienten.",
            hintParts: {
                prefix: "Genom att konfigurera inställningarna för {{pluginLink}} kan du anpassa var detta inställningsavsnitt visas i menyn Discord-inställningar.",
                linkText: "Inställningsplugin"
            }
        },
        notifications: {
            title: "Aviseringar",
            description: "Konfigurera hur Plexcord hanterar aviseringar. Du kan anpassa när och hur du får varningar eller se en historik över tidigare aviseringar.",
            settings: "Aviseringsinställningar",
            viewLog: "Visa meddelandehistorik",
            permissions: {
                denied: {
                    title: "Skrivbordsaviseringsbehörighet nekad",
                    label: "Du har nekat aviseringsbehörigheter. Skrivbordsmeddelanden fungerar inte!"
                }
            },
            style: {
                label: "Aviseringsstil",
                description: "Vissa plugins kan visa dig aviseringar. Dessa finns i två stilar:",
                plexcord: "Plexcord-meddelanden",
                plexcordDesc: "Dessa är aviseringar i appen",
                desktop: "Skrivbordsmeddelanden",
                desktopDesc: "Lokala skrivbordsaviseringar (som när du får en ping)",
                onlyWhenNotFocused: "Använd endast skrivbordsaviseringar när Discord inte är fokuserat",
                always: {
                    desktop: "Använd alltid skrivbordsaviseringar",
                    plexcord: "Använd alltid Plexcord-aviseringar"
                }
            },
            positions: {
                label: "Aviseringsposition",
                right: {
                    bottom: "Ner höger",
                    top: "Upp höger"
                },
                left: {
                    bottom: "Ned till vänster",
                    top: "Upp till vänster"
                }
            },
            missed: {
                label: "Antal missade aviseringar",
                description: "När du åter fokuserar på Discord kommer ett meddelande upp om eventuella aviseringar du missat.",
                whileYou: "medan du är borta",
                count: "{{count}} aviseringar{{s}} har tagits emot",
                s: " "
            },
            timeout: {
                label: "Timeout för meddelande",
                description: "Hur länge aviseringar stannar på skärmen innan de försvinner automatiskt (i sekunder)"
            },
            logLimit: {
                label: "Aviseringslogggräns",
                description: "Maximalt antal aviseringar som ska lagras i aviseringsloggen. Ställ in på {{disable}} för att inaktivera aviseringsloggning och ställ in på {{unlimited}} för att inte ta bort gamla aviseringar automatiskt"
            },
            opacity: {
                label: "Opacitet",
                description: "Opacitet för aviseringar i appen"
            },
            maxNotifications: {
                label: "Maximal avisering",
                description: "Maximalt antal aviseringar som ska visas samtidigt"
            },
            behavior: {
                label: "Aviseringsbeteende",
            },
            disableInStreamerMode: {
                label: "Inaktivera i sändningsläge",
                description: "Inaktivera aviseringar i sändningsläge"
            },
            renderImages: {
                label: "Bearbeta bilder",
                description: "Återge bilder i aviseringar"
            },
            streamingTreatment: {
                label: "Broadcaster Mode Beteende",
                description: "Hur du hanterar aviseringar när du delar din skärm",
                normal: "Normal - Visa meddelande normalt",
                noContent: "Inget innehåll - Dölj meddelandetext",
                ignore: "Ignorera – Visa inte meddelanden alls"
            },
        },
        macVibrancy: {
            title: "Fönsterflimmerstil (Omstart krävs)",
            description: "Anpassa macOS-fönsterflimmereffekt. Detta styr discord-fönstrets oskärpa och transparensstil. En omstart krävs för att ändringarna ska träda i kraft.",
            placeholder: "Fönster flimmer stil",
            style: {
                no: "ingen skakning",
                underPage: "Nedanför sidan (Fönsterfärgning)",
                content: "Innehåll",
                window: "Fönster",
                selection: "Rösta",
                titlebar: "titelraden",
                header: "Titel",
                sidebar: "sidofältet",
                tooltip: "verktygsspets",
                menu: "meny",
                popover: "popup-fönster",
                fullscreenUI: "Helskärmsgränssnitt (transparent men lite tråkigt)",
                hud: "HUD (mest transparent)"
            }
        }
    },

    plugins: {
        title: "Plugins",
        new: "Ny",
        unknown: "Okänd",
        noDescription: "Beskrivning inte tillgänglig.",
        restart: {
            apply: "Börja om för att tillämpa ändringar!",
            required: "Omstart krävs!",
            description: "Starta om nu för att tillämpa nya plugins och inställningar",
            following: "Följande plugins kräver omstart:",
            fully: "Vissa plugins kräver en omstart för att vara helt inaktiverade.",
            would: "Vill du starta om?",
            remainingCount: "och {{count}} till",
            resetDefault: "Återställ till standardinställningar",
            failed: "Det gick inte att initiera beroenden:",
            button: {
                restart: "Starta om",
                later: "Sedan!",
                now: "Starta om nu",
                cancel: "Avboka",
                disableWarning: "Inaktivera varningar",
                disableAll: "Inaktivera alla",
                reset: "återställa",
                close: "Kvartal"
            }
        },
        contributor: {
            contributed: "bidragit",
            modal: {
                contributionsInfo: "{{userName}} {{contributionCount}} {{continuedLink}} genom att utveckla plugin.",
                noContributions: "{{userName}} har inte utvecklat några plugins än. Mest troligt {{contributedLink}} på olika sätt!"
            }
        },
        infoModal: {
            description: "Du kan få mer information om ett plugin genom att trycka på kugghjulet eller informationsikonen",
            settingsInfo: "Plugins med kugghjul har inställningar du kan ändra!",
            disableAll: "Inaktivera alla plugins"
        },
        error: {
            invalidInput: "Ogiltig inmatning har angetts",
            stopping: "Det uppstod ett problem när plugin-programmet {{plugin}} skulle stoppas",
            starting: "Det uppstod ett problem med att initiera plugin-programmet {{plugin}}",
            startDependency: "Det uppstod ett problem med att initiera beroenden: {{failures}}",
            infoRender: "Ett fel uppstod vid rendering av denna plugins anpassade informationskomponent"
        },
        placeholder: {
            number: "Ange ett nummer",
            select: "Välj ett alternativ",
            text: "Ange ett värde"
        },
        excluded: {
            desktop: "Discord Desktop-app eller Plextron",
            discordDesktop: "Discord Desktop-app",
            plextron: "Plextron-applikation",
            web: "Plextron-appen och webbversionen av Discord",
            dev: "Utvecklarversion av Plexcord"
        },
        search: {
            looking: "Är det detta du letar efter",
            onlyAvailable: "Endast tillgänglig här ->",
            noCriteria: "Inga plugins som matchar dina sökkriterier hittades"
        },
        required: {
            title: "Nödvändiga plugins",
            this: "Denna plugin krävs för att Plexcord ska fungera.",
            by: "Denna plugin krävs för att följande ska fungera:"
        },
        dangerModal: {
            title: "Farlig handling",
            disablePlugins: "Inaktivera plugins",
            disableText: "Inaktivera alla",
            irreversible: "DEN HÄR ÅTGÄRDEN KAN INTE ÅTERställas!",
            enableBack: "Är du helt säker på att du vill fortsätta? Du kan aktivera den igen senare.",
            undone: "Denna åtgärd kan inte ångras. Är du säker?",
            resetDescription: "Du är på väg att återställa plugin-inställningarna för {{pluginName}} till deras standardvärden.",
            disable: "Du är på väg att inaktivera {{enabledPlugins}} plugins!",
            confirmReset: "Bekräfta och återställ",
            cancel: "Avboka",
            resetSettings: "Återställ inställningar",
            resetText: "återställa"
        },
        filters: {
            label: "Filter",
            placeholder: "Sök efter plugins...",
            option: {
                all: "Alla",
                enabled: "Aktiv",
                disabled: "Inaktiverad",
                new: "ny",
                userplugins: "Användarplugins",
                api: "API-plugins"
            }
        },
        pluginModal: {
            noSettings: "Detta plugin har inga inställningar som du kan ändra.",
            authors: "Författare",
            settings: "Inställningar",
            successfulReset: "{{plugin}}-pluginens inställningar har återställts.",
            enabledStock: "Aktiva aktietillägg",
            totalStock: "Totala lagertillägg",
            enabledUser: "Aktiva användarinsticksprogram",
            totalUser: "Totalt antal användartillägg",
            info: "Se mer information",
            source: "Se källkoden"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API för att lägga till dekoratörer till medlemslistan (både på servrar och DM)",
                    messageAccessories: "API för att lägga till rekvisita till meddelanden",
                    messageDecorations: "API för att lägga till dekoratörer till inlägg",
                    chatInputButtons: "API för att lägga till knapp för att chatta",
                    commands: "API behövs av allt som använder kommandon",
                    contextMenu: "API för att lägga till/ta bort objekt från snabbmenyn",
                    dynamicImageModal: "Låter dig hoppa över bredden eller höjden när du öppnar bildmodalen",
                    menuItemDemangler: "Gör Discord-menyalternativet mer läsbart",
                    messageEvents: "API behövs av allt som använder meddelandehändelser",
                    messagePopover: "API för att lägga till knapp till meddelande popup",
                    messageUpdater: "API för uppdatering och bearbetning av meddelanden",
                    nicknameIcons: "API för att lägga till ikoner till användarnamn i profiler",
                    notices: "Åtgärdar automatisk avvisning av meddelanden",
                    serverList: "API krävs för plugins som ändrar serverlistan",
                    userSettings: "Patchar för att avslöja Discords användarinställningar, grupper och namn",
                    audioPlayer: "API för att spela Discords interna ljudfiler eller externa ljudlänkar.",
                    userArea: "API för att lägga till knappar i användarområdespanelen."
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
                    plexcord: "Plexcord-deltagare",
                    vencord: "Vencord-deltagare",
                    userPlugin: "User Plugin Contributor"
                },
                context: {
                    title: "Märkealternativ",
                    copy: {
                        name: "Kopiera märkets namn",
                        link: "Kopiera märkets bildlänk"
                    },
                    refetch: {
                        button: "Uppdatera märken",
                        success: "Märken har förnyats framgångsrikt!"
                    }
                },
                modal: {
                    title: "Plexcord-supporter",
                    special: "Detta märke är ett speciellt privilegium för Plexcord-givare.",
                    description: "Överväg att stödja utvecklingen av Plexcord genom att bli donator. Detta skulle vara mycket värdefullt för oss!!"
                }
            }
        },
        uiElements: {
            manage: "Hantera UI-element",
            allows: "Låter dig dölja knappar du inte gillar",
            section: {
                chatbar: {
                    title: "Chattfältsknappar",
                    description: "Det här är knapparna på höger sida av chattfältet"
                },
                messagePopover: {
                    title: "Meddelande popup-knappar",
                    description: "Dessa är flytande knappar som visas till höger när du håller muspekaren över ett meddelande"
                }
            },
            button: "Knappar för aktiverade plugins kommer att visas här."
        }
    },

    patchHelper: {
        title: "Patchassistent",
        description: "Ett utvecklarverktyg som hjälper dig att skapa patchar för Plexcord-plugins.",
        fullPatch: {
            label: "Tam Yama",
            description: "Klistra in din fullständiga JSON-patch här för att fylla i fälten"
        },
        find: "Bul",
        match: "match",
        replacement: "Ändra",
        preview: "Förhandsvisning",
        generatedCode: "Genererad kod",
        group: "Grupp",
        diff: "Skillnad",
        module: "Modul",
        compile: "Derle",
        compiled: "Sammanställningen lyckades",
        copy: {
            clipboard: "Kopiera till Urklipp",
            codeblock: "Kopiera som kodblock"
        },
        error: {
            noMatch: "Ingen matchning hittades. Kanske den modulen laddar lat.",
            multipleMatch: "Mer än en matchning hittades. Använd ett mer specifikt sökmönster.",
            noFind: "Det finns inget \"hitta\"-fält.",
            noReplacement: "Det finns inget \"Ändra\"-fält.",
            invalidReplacement: "Ersätt fältet är ogiltigt",
            replacementMatch: "'replacement.match'-fältet finns inte",
            replacementReplace: "'replacement.replace'-fältet finns inte",
            replacementMustFunction: "Byte måste vara en funktion"
        },
        cheatSheet: {
            title: "Fuskblad",
            identifiers: "Anpassade escape-sekvensmatchande identifierare för regex (variabelnamn, klassnamn, etc.)",
            dollar: "lägger till $",
            entireMatch: "Lägger till all matchning",
            beforeMatch: "Lägger till delsträngen innan matchen",
            afterMatch: "Lägger till delsträngen efter matchen",
            nthGroup: "Lägger till den n:e fångstgruppen ($1, $2...)",
            pluginInstance: "Lägger till plugin-instans"
        },
        replacementEval: {
            label: "Processersättning som funktion",
            description: "'Ersättning' kommer att behandlas som en funktion när detta är aktiverat."
        }
    },

    sync: {
        title: "Säkerhetskopiera och återställa",
        warning: "Varning",
        warningText: "Att importera en inställningsfil kommer att åsidosätta dina nuvarande inställningar. Om du vill behålla din nuvarande konfiguration, se till att exportera en säkerhetskopia först.",
        description: "Du kan importera och exportera dina Plexcord-inställningar som en JSON-fil. På så sätt kan du enkelt flytta dina inställningar till en annan enhet eller återställa dina inställningar efter att du har installerat om Plexcord eller Discord.",
        successful: "Inställningarna har importerats. Starta om appen för att ändringarna ska träda i kraft!",
        error: {
            failure: "Import av inställningar misslyckades: {{error}}",
            failedExport: "Inställningsexport misslyckades, kontrollera konsolen",
            invalid: "Ogiltiga inställningar. Är detta verkligen en Plexcord Tuning-fil?",
            tooLarge: "DataStore är för stort - utesluten från säkerhetskopiering. Använd funktionen \"Exportera databutiker\" om det behövs.",
            clearSomeDate: "DataStore är enormt. Rensa några plugin-data och försök igen."
        },
        settings: {
            text: "Vad finns i säkerhetskopian?",
            quickcss: "Anpassad QuickCSS",
            theme: "Temalänkar",
            plugins: "Plugin-inställningar",
            datastores: "Tilläggsarkiv (t.ex. Tidszoner eller IRememberYou)"
        },
        import: {
            title: "Importera inställningar",
            description: "Välj en tidigare exporterad inställningsfil för att återställa din konfiguration. Detta kommer att ersätta alla dina nuvarande inställningar med dem från säkerhetskopian.",
            all: "Importera alla inställningar",
            plugins: "Eklentiyi Iche Aktar",
            css: "QuickCSS'yi İçe Mer",
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
        title: "Inställningar Synkronisering",
        override: "Molnsynkronisering",
        description: "Synkronisera dina Plexcord-inställningar till molnet. Detta gör att du kan underhålla din konfiguration konsekvent över flera enheter utan manuell import/export.",
        switchDescription: "När de är aktiverade synkroniseras dina inställningar till molnet. Du kan synkronisera manuellt med följande åtgärder.",
        settings: "Molninställningar",
        successful: "Dina inställningar har synkroniserats till molnet.",
        updated: "Dina inställningar har uppdaterats! Klicka här för att starta om för att ändringarna ska få full effekt!",
        deleted: "Inställningar raderade från molnet!",
        integration: {
            title: "Molnintegration",
            description: "Plexcords molnintegration låter dig synkronisera dina inställningar över flera enheter och Discord-installationer. Dina data lagras säkert och kan enkelt återställas när som helst.",
        },
        reauth: "Vi märkte att en annan klient hade molnintegrationer aktiverade! På grund av begränsningar måste du autentisera på nytt för att fortsätta. Klicka här för att gå till inställningssidan för att fortsätta!",
        error: {
            setup: "Installationen misslyckades (det gick inte att hämta OAuth-konfigurationen).",
            secret: "Installationen misslyckades (ingen hemlig nyckel returnerades).",
            string: "Installationen misslyckades ({{error}}).",
            connect: "Molnsynkronisering har inaktiverats eftersom det här kontot inte är anslutet till Plexcord Cloud-appen. Du kan återaktivera det här kontot genom att ansluta det i molninställningarna. (Obs: kommer att lagra dina inställningar separat)",
            noSettings: "Inga inställningar hittades i molnet.",
            uptodate: "Dina inställningar är uppdaterade.",
            localNewer: "Dina lokala inställningar är nyare än molninställningarna.",
            delete: "Det gick inte att ta bort inställningar ({{error}}).",
            api: {
                returned: {
                    delete: "Det gick inte att radera inställningar (API returnerade {{status}}).",
                    to: "Det gick inte att synkronisera inställningar till molnet (API returnerade {{status}}).",
                    from: "Det gick inte att synkronisera inställningar från molnet (API returnerade {{status}})."
                }
            },
            synchronize: {
                to: "Inställningarna kunde inte synkroniseras till molnet ({{error}}).",
                from: "Inställningarna kunde inte synkroniseras från molnet ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Om du vill använda funktionerna för synkronisering av inställningar, aktivera molnintegrering ovan."
        },
        danger: {
            title: "Riskzon",
            description: "Ta bort all din data permanent i molnet. Denna åtgärd är oåterkallelig och tar bort alla synkroniserade inställningar och all annan data som lagras i molninfrastrukturen.",
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
            host: "Domänen {{host}} har lagts till i behörighetslistan. Starta om programmet för att ändringarna ska träda i kraft.",
            erase: {
                successful: "Molndata har raderats",
                failed: "Det gick inte att radera all data (API returnerade {{status}}), kontakta supporten."
            }
        },
        button: {
            to: "Synkronisera till molnet",
            from: "Synkronisera från molnet",
            fromDescription: "Detta kommer att skriva över dina nuvarande inställningar med de från molnet. Använd det klokt!",
            delete: "Ta bort molndata",
            enable: "Aktivera molnintegrationer",
            reauthorize: "Auktorisera på nytt",
            confirm: "Starta om nu",
            later: "Sedan!"
        },
        privacy: "skyddar din integritet",
        source: "källkod",
        overview: "Plexcord kommer med molnintegration, vilket ger fördelar som att synkronisera inställningar mellan enheter. Eftersom dessa {{privacy}} och {{source}} erbjuds med AGPL 3.0-licens kan du vara värd för dem på din egen server.",
        authorization: "Anslut till molnet för att synkronisera inställningar. Om du inte har ställt in molnintegration än kommer detta att be om auktorisering.",
        backend: {
            title: "Molnleverantör",
            description: "Välj hur dina inställningar ska lagras i molnet. Som standard används Plexcord Cloud, men du kan även konfigurera din egen värdbaserade molntjänst om du vill.",
            invalid: "Ogiltig URL"
        },
        sync: {
            title: "Synkroniseringsregler för den här enheten",
            description: "Den här inställningen avgör hur inställningarna synkroniseras mellan den här enheten och molnet. Du kan tillåta att ändringar överförs i båda riktningarna eller välja en enskild sida som huvudkälla.",
            direction: {
                both: "Dubbelriktad synkronisering (ändringar överförs i båda riktningarna)",
                push: "Den här enheten är källan (endast uppladdning)",
                pull: "Molnkälla (endast nedladdning)",
                manual: "Automatisk synkronisering (manuell synkronisering endast med knapparna nedan)"
            }
        }
    },

    changelog: {
        text: "Ändra anteckningar",
        title: "Ändra anteckningar",
        description: "Du kan hitta de senaste ändringarna och uppdateringarna av Plexcord här.",
        by: "författare",
        check: "Kontrollera lager",
        uptodate: "nuvarande",
        update: "Uppdatera",
        noMessage: "inget meddelande",
        unknown: "okänd",
        updatedPlugins: "Uppdaterade plugins",
        newSettings: "Nya inställningar",
        newSettingTooltip: "Ny inställning för {{plugin}}",
        loading: "Belastning...",
        repoUptodate: "Lager uppdaterat",
        fetch: "Ta med från lager",
        clear: "Rensa alla anteckningar",
        internet: "Se till att du har en internetanslutning och försök igen.",
        recent: "Senaste ändringar",
        codeChanges: "Kodändringar {{count}} ny commit",
        updateLogs: "{{count}} Uppdatera notering",
        noCommit: "Inga vidarebefordran hittades från din nuvarande version. Klicka på \"Hämta från arkivet\" för att leta efter nya ändringar.",
        previous: "Tillsammans med tidigare uppdateringssessioner, commit-historik och plugin-ändringar.",
        modal: {
            description: "Se de senaste ändringarna av Plexcord. Den här processen visar dig vad som är nytt genom att hämta commits direkt från förvaret.",
            repository: "Depo",
            failed: "Det gick inte att ta emot - kontrollera konsolen",
            current: "Tillgänglig:",
            hide: "dölja anteckningar",
            show: "Visa anteckningar",
            fetch: {
                title: "Ta med ändringar",
                description: "Kontrollera om det finns nya commits, plugin-uppdateringar och kodändringar i arkivet. Detta kommer att jämföra din nuvarande version med den senaste versionen och visa dig vad som är nytt.",
                newCommit: "Dessa är nya commits och pluginuppdateringar sedan din senaste utgåva. Du kan se vilka funktioner som har lagts till, vilka buggar som har åtgärdats och vilka plugins som har uppdaterats.",
                confirm: "Burk",
            }
        },
        commit: {
            available: "begå tillgängligt",
            no: "Inga nya commits",
            new: "nya plugins",
            updated: "uppdaterade plugins",
            settings: "nya inställningar"
        },
        toast: {
            already: "Förvaret är redan uppdaterat",
            found: "{{count}} nya commits hittades från arkivet",
            local: "Förvaret är uppdaterat med din lokala kopia",
            failed: "Kunde inte ta med den från lagret :(",
            cleared: "Alla anteckningar raderade",
            logCleared: "Anteckning rensad",
            yourLatest: "Åtgärder sparade från din senaste uppdatering"
        },
        alert: {
            clear: {
                title: "Rensa alla anteckningar",
                body: "Är du säker på att du vill rensa alla anteckningar? Denna åtgärd kan inte ångras.",
                confirm: "Rensa alla",
                confirmColor: "fara",
                cancel: "Avboka"
            },
            log: {
                title: "Rensa logg",
                body: "Är du säker på att du vill rensa den här loggen? Denna åtgärd kan inte ångras.",
                confirm: "Rensa logg",
                confirmColor: "fara",
                cancel: "Avboka"
            }
        },
        newPlugins: "{{count}} Ny plugin",
        following: "Följande plugins har lagts till i de senaste uppdateringarna:",
        more: "+{{count}} nya plugins"
    },

    csp: {
        restart: "En omstart krävs för att tillämpa denna ändring",
        blocked: {
            resources: "Blockerade resurser",
            disallowed: "Vissa bilder, stilar eller typsnitt har blockerats eftersom de kommer från obehöriga domäner.",
            recommended: "Det rekommenderas starkt att du flyttar dem till GitHub eller Imgur. Du kan dock också tillåta domäner om du litar på dem helt.",
            afterAllow: "Efter att ha beviljat tillstånd till ett utrymme måste du stänga av och starta om {{plattform}} (från systemfältet/aktivitetshanteraren) för att tillämpa ändringen.",
            allow: "Tillåta",
            url: "Blockerade webbadresser"
        },
        imgur: {
            direct: "Imgur-länkar måste vara direktlänkar i formatet {{etc}}.",
            copy: "För att få en direktlänk högerklickar du på bilden och väljer 'Kopiera bildadress'."
        },
        wants: {
            caller: "{{callerName}} vill tillåta anslutningar till {{domän}}",
            detail: "Om du inte känner igen och helt litar på {{domän}} bör du avbryta denna begäran!",
            restart: "Du måste stänga och starta om {{appName}} helt för att ändringarna ska träda i kraft.",
            type: {
                images: "bilder",
                styles: "CSS och teman",
                fonts: "Teckensnitt"
            },
            content: "Följande typer av innehåll kommer att tillåtas laddas upp från {{domän}}:",
            understand: "Jag litar helt på {{domän}} och förstår riskerna med att tillåta länkar.",
            button: {
                cancel: "Avboka",
                allow: "Tillåta"
            },
            title: "Domännamnsbehörigheter"
        }
    },

    themes: {
        title: "teman",
        management: "Temahantering",
        description: "Anpassa Discords utseende med teman. Lägg till lokala .css-filer eller installera teman direkt från webbadresser. Teman med en kugghjulsikon har anpassningsbara inställningar som du kan ändra.",
        local: "Lokala teman",
        new: "NY",
        pinned: "fäst",
        stylus: "Pennförlängning",
        bd: "BetterDiscord-teman",
        github: "Github",
        download: "Letar du efter ett tema? Kolla in {{bd}} eller sök på {{github}}. När du laddar ner från BetterDiscord, klicka på knappen \"Ladda ner\" och placera .theme.css-filen i din temamapp.",
        add: "Tillägga",
        reset: "Återställ inställningarna till standard",
        notCSS: "Det är inte en CSS-fil. Se till att du använder rålänken!",
        okay: "Okej!",
        checking: "Kontrolleras...",
        valid: "Giltig!",
        upload: "Ladda upp tema",
        openFolder: "Öppna temamappen",
        loadMissing: "Installera saknade teman",
        editQuickCSS: "Redigera QuickCSS",
        editClient: "Redigera klienttema",
        website: "Öppna webbplatsen",
        discord: "Discord-server",
        downloadTheme: "Ladda ner",
        refresh: "Uppdatera",
        delete: "Sil",
        unknown: {
            title: "okänd",
            author: "Okänd författare",
            theme: "Discord-tema"
        },
        required: "Följande plugins krävs men är inte aktiva:",
        homepage: "Hemsida",
        support: "Stöd",
        online: {
            title: "Onlineteman",
            description: "Installera teman direkt från webbadresser istället för lokala filer. Onlineteman uppdateras automatiskt när källan ändras; så att du alltid har den senaste versionen utan manuell nedladdning.",
            enable: "Aktivera onlineteman",
            enableDescription: "Växla online-temauppladdning. När det är inaktiverat kommer alla onlineteman att stängas av och du kommer inte att kunna lägga till nya onlineteman."
        },
        quickActions: {
            title: "Snabba transaktioner",
            description: "Genvägar för att hantera dina teman. Öppna temamappen för att lägga till nya teman, använd QuickCSS för snabba stilredigeringar eller ladda om teman efter ändringar."
        },
        error: {
            userscript: "Teman på Userscript stöds inte!",
            stylus: "Du kan installera teman med {{stylus}} istället!",
            expired: "Ogiltig eller utgången länk",
            text: "Även:"
        },
        copy: {
            url: "Kopiera URL",
            copied: "Tema URL kopierad!",
            settings: "Kopiera temainställningar",
            copiedSettings: "Temainställningar har kopierats till urklipp."
        },
        paste: {
            settings: "Klistra in temainställningar",
            empty: "Ditt urklipp är tomt.",
            invalid: "Det finns inga giltiga inställningsdata i ditt urklipp.",
            pasted: "Temainställningar klistrades in från urklipp."
        },
        settings: {
            for: "Inställningar för {{themeName}}",
        },
        installed: {
            title: "Installerade teman",
            description: "Hantera dina teman här. Lokala teman laddas från din temamapp, onlineteman laddas från webbadresser. Teman med en kugghjulsikon har anpassningsbara inställningar.",
            count: "{{count}} teman installerade ({{localCount}} lokalt, {{onlineCount}} online) {{enabledCount}} aktiverade",
            search: "Tema till och med...",
            loading: "Teman laddas...",
            none: "Det finns inga teman installerade än. För att komma igång, lägg till temafilerna i din temamapp eller lägg till ett onlinetema ovanifrån.",
            noCriteria: "Inga teman hittades som matchade dina sök- eller filterkriterier."
        },
        filter: {
            all: "Visa alla",
            online: "Onlineteman",
            local: "Lokala teman",
            enabled: "Effektiv",
            disabled: "Inaktiverad"
        },
        notification: {
            refresh: {
                title: "Temat förnyat",
                error: "Temat kunde inte uppdateras"
            },
            failed: {
                download: "Indirilemedi tema"
            }
        }
    },

    updater: {
        title: "Uppdaterare",
        settings: "Uppdateringsinställningar",
        updates: "Uppdateringar",
        updated: "uppdaterad!",
        restart: "Starta om genom att klicka här",
        repaired: "Plexcord reparerad!",
        ok: "ok",
        preferences: {
            title: "Uppdatera inställningar",
            description: "Kolla in hur Plexcord håller sig uppdaterad. Du kan välja att uppdatera automatiskt i bakgrunden eller få aviseringar när nya uppdateringar är tillgängliga.",
        },
        github: {
            local: "Din lokala kopia har nyare poster än fjärrförvaret. Detta händer vanligtvis när du gör lokala ändringar. Behåll eller återställ dem innan du uppdaterar."
        },
        error: {
            check: "Det gick inte att söka efter en uppdatering. Se konsolen för mer information.",
            occurred: "Ett fel uppstod",
            retrieve: "Det uppstod ett problem med att hämta uppdateringsinformation - Kontrollera konsolen",
            title: "Nej!",
            tryAgain: "Ett fel har uppstått. Försök igen eller se konsolen för mer information.",
            command: "{{path}}-kommandot hittades inte. Ladda ner detta eller försök igen.",
            code: "Kod {{code}}. Se konsolen för mer information.",
            running: "Det uppstod ett problem när {{cmd}} kördes: {{error}}",
            failed: "Detta misslyckades också :( Försök att uppdatera eller installera om med installationsprogrammet!"
        },
        available: "1 uppdatering tillgänglig",
        updateAvailable: "Plexcord-uppdatering tillgänglig!",
        click: "Klicka här för att se uppdateringen",
        available_plural: "{{count}} uppdateringar tillgängliga",
        current: "Nuvarande!",
        successful: {
            title: "Uppdateringen lyckades!",
            body: "Uppdaterades framgångsrikt. Starta om för att spara ändringar!",
            button: {
                confirm: "Starta om",
                cancel: "Inte nu!",
                update: "Uppdatera nu",
                check: "Sök efter uppdateringar"
            },
            noFound: "Ingen uppdatering hittades"
        },
        automatically: {
            label: "Automatisk uppdatering",
            description: "Plexcord laddar ner och installerar automatiskt uppdateringar utan bekräftelse"
        },
        notify: {
            label: "Visa automatisk uppdateringsavisering",
            description: "Visa ett meddelande när Plexcord uppdateras automatiskt"
        },
        repo: "Depo",
        repoDescription: "Detta är GitHub-förvaret där Plexcord tar emot uppdateringar.",
        loading: "Belastning...",
    },

    components: {
        error: {
            title: "nej då!",
            render: "Ett fel uppstod när den här komponenten renderades. Hitta mer information nedan och på din konsol."
        },
        componentFailed: {
            message: "Ah! Den här sidan kunde inte renderas. Det finns dock en uppdatering tillgänglig som kan fixa detta. Vill du uppdatera och starta om nu?"
        },
        quickCSS: {
            title: "Öppna QuickCSS Editor",
            message: "QuickCSS-redigeraren är fortfarande öppen i bakgrunden.",
            detail: "Vill du fortfarande stänga Discord? Detta kommer också att stänga QuickCSS-redigeraren.",
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
        dismiss: "Stäng avisering",
        noYet: "Inga aviseringar än",
        settings: "Aviseringsinställningar",
        log: {
            title: "Aviseringslogg",
            clear: "Rensa aviseringslogg",
            sure: "Är du säker?",
            permamently: "{{count}} aviseringar kommer att tas bort permanent. Denna åtgärd kan inte ångras.",
            button: {
                confirm: "ok",
                cancel: "Avboka"
            }
        }
    },

    memberlist: {
        error: {
            render: "Ett fel uppstod när {{key}} medlemslistadekoratören renderades"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Ett fel uppstod när {{nyckel}} meddelandetillbehöret renderades"
            }
        },
        decoration: {
            error: {
                render: "Ett fel uppstod vid rendering av {{nyckel}} meddelandedekoration"
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
            month: "är",
            months: "är",
            week: "vecka",
            weeks: "vecka",
            day: "dag",
            days: "dag",
            hour: "ögonblick",
            hours: "ögonblick",
            minute: "minuter",
            minutes: "minuter",
            second: "andra",
            seconds: "andra",
            ago: "före",
            s: " "
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Inaktiverar Discords spårning (analytics/'vetenskap'), mätvärden och Sentry-kraschrapportering",
            option: {
                disableAnalytics: {
                    label: "Stäng analys",
                    description: "Inaktivera Discords spårnings (analytics/'vetenskap') mätvärden och Sentry-kraschrapportering"
                }
            }
        },
        settings: {
            name: "Inställningar",
            description: "Lägger till inställningsgränssnitt och felsökningsinformation",
            option: {
                language: {
                    label: "Dil",
                    description: "Välj önskat språk för Plexcord."
                },
                settingsLocation: {
                    label: "Inställningar Plats",
                    description: "Plexcord bestämmer var inställningssektionen ska placeras"
                }
            }
        },
        supportHelper: {
            name: "Supportassistent",
            description: "Hjälper oss att ge dig stöd",
            commands: {
                description: {
                    debug: "Skicka Plexcord felsökningsinformation",
                    plugins: "Skicka Plexcord plugin lista"
                }
            },
            modals: {
                outdated: {
                    title: "Vänta!",
                    body: "Du använder en gammal version av Plexcord! Troligtvis har dina problem redan lösts.",
                    footer: "Uppdatera innan du ber om support!",
                    button: {
                        cancel: "Se Uppdateringar",
                        confirm: "Uppdatera och starta om nu",
                        secondaryConfirm: "Jag vet vad jag gör eller så kan jag inte uppdatera"
                    }
                },
                updater: {
                    title: "Vänta!",
                    body: "Du använder en externt uppdaterad version av Plexcord, vi tillhandahåller inte support för denna version!",
                    footer: "Vänligen antingen {{officiellt}} ​​eller kontakta din paketleverantör för support.",
                    officially: "officiellt stödd version av Plexcord",
                    button: {
                        cancel: "Avboka",
                        confirm: "Visa nedladdningssidan",
                        now: "Uppdatera nu"
                    },
                    toast: {
                        success: "Framgångsrik! Startar om...",
                        already: "Redan uppdaterad!",
                        failed: "Uppdateringen misslyckades :("
                    }
                },
                custom: {
                    title: "Vänta!",
                    header: "Du använder en proprietär version av Plexcord, vi tillhandahåller inte support för denna version!",
                    body: "Vi tillhandahåller endast support för {{officialBuild}}. Antingen {{switch}} eller ta itu med problemet själv.",
                    footer: "Om du ignorerar denna regel kommer din rätt att få stöd att återkallas.",
                    official: "officiella releaser",
                    switch: "uppgradera till en officiell version",
                    button: {
                        confirm: "Jag förstår",
                        secondaryConfirm: "Visa det inte igen"
                    }
                }
            },
            button: {
                debug: "kör /plexcord-debug",
                plugins: "kör /plexcord-plugins",
                snippet: "Kör kodavsnitt"
            },
            toast: {
                success: "Framgångsrik!",
                failed: "Kunde inte köra kodavsnitt :(",
                failedOpenInvite: "Det gick inte att öppna inbjudan, kolla konsolen :(",
                upload: "Pluginlistan har laddats!",
                failedUpload: "Filen med pluginlistan kunde inte laddas. Försök igen.",
                unableGenerate: "Det gick inte att skapa plugin-listan."
            },
            dm: {
                warning: "Vänligen skicka inte privata meddelanden till Plexcord plugin-utvecklare för support!{{br}}Istället kan du använda Plexcords supportkanal genom att gå med i {{support}}-servern: {{channel}}"
            },
            alert: {
                title: "Varning: För många plugins",
                paragraph1: "Vi märkte att mer än 100 plugins aktiverades.",
                paragraph2: "Du kanske inte får support på grund av antalet plugins.",
                paragraph3: "Ditt problem orsakas troligen av plugin-konflikter.",
                paragraph4: "Överväg att inaktivera några plugins för att åtgärda problemet.",
                paragraph5: "Din plugin-lista kommer att skickas som en textfil.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Vänsterklicka på din kontopanel och högerklicka för att se din serverprofil",
            option: {
                prioritizeServerProfile: {
                    label: "Prioritera serverprofil",
                    description: "Prioritera serverprofilen när du vänsterklickar på din kontopanel"
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
            description: "Får brusreduceringspopupen att växla mellan Ingen och Krisp istället för Krisp och Standard."
        },
        alwaysAnimate: {
            name: "Animera alltid",
            description: "Den animerar allt som kan animeras.",
            option: {
                icons: {
                    label: "ikoner",
                    description: "Animera serverikoner, avatarer, dekorationer och mer när som helst."
                },
                statusEmojis: {
                    label: "Status Emojis",
                    description: "Liva alltid upp statusemojis."
                },
                serverBanners: {
                    label: "Server banners",
                    description: "Animera alltid serverbanners."
                },
                nameplates: {
                    label: "Namnskyltar",
                    description: "Animera alltid namnskyltar."
                },
                roleGradients: {
                    label: "Rollövergångar",
                    description: "Animera alltid rollfärgsövergångar."
                }
            }
        },
        alwaysExpandProfiles: {
            name: "alwaysExpandProfiles",
            description: "Öppnar alltid användarprofiler utökade"
        },
        alwaysExpandRoles: {
            name: "Expandera alltid roller",
            description: "Utökar alltid rolllistan i profilpopups",
            option: {
                hideArrow: {
                    label: "Göm pilar",
                    description: "Dölj pilar"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Spelar animaliskt ljud för varje meddelande som skickas (de gör mycket)",
            option: {
                volume: {
                    label: "Ljudnivå",
                    description: "Animalese röstvolym"
                },
                speed: {
                    label: "Hastighet",
                    description: "Animalese rösthastighet"
                },
                pitch: {
                    label: "Ton",
                    description: "tonmultiplikator"
                },
                messageLengthLimit: {
                    label: "Meddelandelängdsgräns",
                    description: "Maximal meddelandelängd att bearbeta"
                },
                processOwnMessages: {
                    label: "Bearbeta dina egna meddelanden",
                    description: "Aktivera även rösta dina egna meddelanden"
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
            name: "Alltid lita på",
            description: "Tar bort skadlig domän och popup-fönster för misstänkta filer",
            option: {
                domain: {
                    label: "domännamn",
                    description: "Tar bort \"skadlig domän\" popup"
                },
                file: {
                    label: "Fil",
                    description: "Tar bort \"potentiellt farligt\" nedladdningspopup"
                },
                noDeleteSafety: {
                    label: "Ingen raderingssäkerhet",
                    description: "Tar bort behovet av att ange servernamnet när en server tas bort"
                },
                confirmModal: {
                    label: "Bekräftelse popup",
                    description: "\"Är du säker på att du vill bekräfta den här transaktionen?\" tar bort popup"
                }
            },
            alert: {
                title: "Ta bort server?",
                body: "Denna process är permanent, låt oss säga det om det inte är uppenbart!",
                confirm: "Sil",
                cancel: "Avboka"
            }
        },
        anonymiseFileNames: {
            name: "Anonymisera filnamn",
            description: "Anonymiserar uppladdade filnamn.",
            option: {
                anonymiseByDefault: {
                    label: "Anonymisera som standard",
                    description: "Anonymiserar filnamn som standard. Du kan inaktivera det i popup-fönstret för filuppladdning om du vill."
                },
                spoilerMessages: {
                    label: "Spoilermeddelanden",
                    description: "Anonymiserar namnen på filer markerade som spoilers."
                },
                method: {
                    label: "Metod",
                    description: "Anonymiseringsmetod",
                    random: "Slumpmässiga karaktärer",
                    consistent: "Konsekvent",
                    timestamp: "Tidsstämpel"
                },
                randomisedLength: {
                    label: "Randomiseringslängd",
                    description: "Slumpmässig teckenlängd"
                },
                consistent: {
                    label: "Konsekvent anonymisering",
                    description: "Hemlig nyckel för konsekvent anonymisering"
                }
            },
            using: {
                anonymous: "Anonymt filnamn används",
                spoiler: "Normalt filnamn används"
            },
            spoiler: {
                description: "Slå på eller av spoiler för dina filer",
                toggle: "Slå på eller av spoiler för dina filer (standard på)",
                enabled: "Spoiler aktiverad!",
                disabled: "Spoilers inaktiverade!"
            }
        },
        appleMusic: {
            name: "Apple Music Rik närvaro",
            description: "Apple Music visar lyssningsstatus som Discord Rich Presence",
            about: "För anpassningsbara händelseformatsträngar kan du använda några anpassade strängar för att lägga till spårdata till händelser! {{name}} ersätts med spårnamnet, {{artist}} med artistnamnet och {{album}} med albumnamnet.",
            button: {
                listen: "Apple Music'te Dinle",
                songLink: "Se på SongLink"
            },
            option: {
                activityType: {
                    label: "Aktivitetstyp",
                    description: "Vilken typ av aktivitet kommer att visas",
                    listening: "lyssnande",
                    playing: "spelar"
                },
                statusDisplayType: {
                    label: "Statusvisningstyp",
                    description: "Visa spår/artistnamn i medlemslistan",
                    off: "Visa inte (visar allmänt lyssningsmeddelande)",
                    artist: "Visa artistnamn",
                    track: "Visa spårnamn"
                },
                refreshInterval: {
                    label: "Uppdateringsintervall",
                    description: "Händelseuppdateringsintervall (sekunder)"
                },
                enableTimestamps: {
                    label: "Aktivera tidsstämplar",
                    description: "Om tidsstämplar ska aktiveras"
                },
                enableButtons: {
                    label: "Aktivera knappar",
                    description: "Om knappar ska aktiveras"
                },
                nameString: {
                    label: "Namnsträng",
                    description: "Händelsenamnformatsträng"
                },
                detailsString: {
                    label: "Detaljer String",
                    description: "Händelseinformation formatsträng"
                },
                stateString: {
                    label: "Statussträng",
                    description: "Händelsestatusformatsträng"
                },
                largeImageType: {
                    label: "Stor bildtyp",
                    description: "Händelsetillgångar stor bildtyp",
                    album: "skivomslag",
                    artist: "konstnärsmålning",
                    disabled: "funktionshindrade"
                },
                largeTextString: {
                    label: "Stor textsträng",
                    description: "Händelseenheter stor textformatsträng"
                },
                smallImageType: {
                    label: "Typ av miniatyrbild",
                    description: "Händelsetillgångars miniatyrtyp",
                    album: "Apple Music-logotyp",
                    artist: "konstnärsmålning",
                    disabled: "funktionshindrade"
                },
                smallTextString: {
                    label: "Liten textsträng",
                    description: "Händelseenheter liten textformatsträng"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence (arRPC)",
            description: "arRPC-klientplugin för att aktivera RPC på Discord Web (experimentell)",
            use: {
                title: "Hur man använder arRPC",
                enable: "{{link}} för att köra servern och aktivera sedan plugin-programmet.",
                link: "Följ instruktionerna i GitHub-förvaret"
            },
            toast: {
                connected: "Ansluten till arRPC",
                failed: "Det gick inte att ansluta till arRPC, fungerar det?",
                retry: "Försök igen"
            }
        },
        atSomeone: {
            name: "Hos någon",
            description: "Låter dig tagga en slumpmässig person med @någon"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Uppdaterar onlinestatus automatiskt (online, inaktiv, stör ej) när spelet startar",
            option: {
                statusToSet: {
                    label: "Status att ställa in",
                    description: "Status att ställa in när ett spel startas",
                    online: "online",
                    dnd: "Stör ej",
                    idle: "på tomgång",
                    invisible: "Osynlig"
                },
                excludeInvisible: {
                    label: "Uteslut Osynlig",
                    description: "Förhindra automatiska statusändringar när din status är inställd på osynlig"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "ZIPar automatiskt specificerade filtyper och mappar innan de laddas upp till Discord",
            option: {
                extensions: {
                    label: "Tillägg",
                    description: "Kommaseparerad lista över filtillägg som ska zippas automatiskt (t.ex. .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "Banderoller överallt",
            description: "Visar banners i medlemslistan",
            option: {
                animate: {
                    label: "Animation",
                    description: "Gör bannern animerad"
                },
                preferNameplate: {
                    label: "Välj Namnskylt",
                    description: "Välj namnskylt istället för banderoll"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Visar aktivitetsikoner i medlemslistan och gör det möjligt att visa alla händelser",
            option: {
                memberList: {
                    label: "Medlemslista",
                    description: "Visa aktivitetsikoner i medlemslistan"
                },
                iconSize: {
                    label: "Ikonstorlek",
                    description: "Storlek på händelseikoner"
                },
                specialFirst: {
                    label: "Specialerbjudanden först",
                    description: "Visa specialevenemang först (för närvarande Spotify och Twitch)"
                },
                renderGifs: {
                    label: "GIF'yere Gör det",
                    description: "Tillåt rendering av GIF-filer"
                },
                removeGameActivityStatus: {
                    label: "Ta bort Game State",
                    description: "Ta bort spelets statusikon och status"
                },
                userPopout: {
                    label: "Användar popup",
                    description: "Visa alla aktiviteter i profilens popup/sidofält"
                },
                hideTooltip: {
                    label: "Dölj verktygstips",
                    description: "Döljer aktiviteter på olika platser"
                },
                allActivitiesStyle: {
                    label: "Alla evenemang stil",
                    description: "Visa alla händelser stil",
                    list: "Lista",
                    carousel: "reglaget",
                    left: "Sol",
                    right: "Rätt"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Lägger till spektrograf och oscilloskopvisualiserare till spelare för ljudtillbehör",
            option: {
                oscilloscope: {
                    label: "Oscilloskop",
                    description: "Aktivera scope visualizer"
                },
                spectrograph: {
                    label: "Spektrograf",
                    description: "Aktivera spektrografvisualiserare"
                },
                oscilloscopeSolidColor: {
                    label: "Oscilloskop enfärgad",
                    description: "Använd solid färg istället för gradient för omfattning"
                },
                oscilloscopeColor: {
                    label: "Rengi oscilloskop",
                    description: "Färg på oscilloskopet när solid färg är aktiverat"
                },
                spectrographSolidColor: {
                    label: "Spectrograph Solid Color",
                    description: "Använd solid färg istället för gradient för spektrograf"
                },
                spectrographColor: {
                    label: "Spektrograffärg",
                    description: "Färg på spektrografen när solid färg är aktiverat"
                },
                forceMoveBelow: {
                    label: "Tvinga Flytta till Botten",
                    description: "Tvinga flytta visualizer under volymkontrollerna"
                }
            },
            toast: {
                invalidColorFormat: "Ogiltigt färgformat för {{settingKey}}, se till att det är i formatet 'R, G, B' eller '#RRGGBB'"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Skapa anpassade skäl att använda i Discord-förbudsfönstret och/eller visa en textinmatning istället för alternativ som standard.",
            option: {
                reasons: {
                    label: "skäl",
                    description: "dina särskilda skäl"
                },
                isTextInputDefault: {
                    label: "Standardinmatning av text",
                    description: "Som standard visar den en textinmatning istället för en valmeny. (Motsvarar att klicka på Mer)"
                }
            },
            title: "skäl",
            placeholder: "Varifrån",
            add: "Lägg till ytterligare ett skäl"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Det låter dig söka i listan över blockerade användare och göra namn valbara i inställningarna.",
            placeholder: "Sök efter användare..."
        },
        betterCommands: {
            name: "Bättre kommandon",
            description: "Det förbättrar kommandosystemet med olika förbättringar.",
            option: {
                autoFillArguments: {
                    label: "Autofyll-argument",
                    description: "Fyller automatiskt kommandot med alla argument, inte bara de nödvändiga argumenten"
                },
                allowNewlinesInCommands: {
                    label: "Tillåt nya rader i kommandon",
                    description: "Tillåt nyrader i kommandoposter (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Discord uppdaterar appkommandon inbyggt",
                    user: "specifik användare att försöka förnya",
                    refreshing: "Programkommandon förnyas...",
                    refreshed: "Kommandon har uppdaterats framgångsrikt!",
                    failed: "Det gick inte att uppdatera kommandon. Kontrollera konsolen för detaljer."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Visar servermappar i ett anpassat sidofält och lägger till mapprelaterade förbättringar",
            option: {
                sidebar: {
                    label: "Sidofält",
                    description: "Visa servrar i mapp i anpassad sidofält"
                },
                sidebarAnim: {
                    label: "Sidofältsanimering",
                    description: "Använd animering när du öppnar sidofältet för mapparna"
                },
                closeAllFolders: {
                    label: "Stäng alla mappar",
                    description: "Stäng alla mappar när en server som inte finns i en mapp är vald"
                },
                closeAllHomeButton: {
                    label: "Stäng allt på hemknappen",
                    description: "Stäng alla mappar när du klickar på hemknappen"
                },
                closeOthers: {
                    label: "Stäng andra",
                    description: "Stäng andra mappar när en mapp öppnas"
                },
                closeServerFolder: {
                    label: "Stäng servermappen",
                    description: "Stäng mappen när en server i mappen är vald"
                },
                forceOpen: {
                    label: "Force Open",
                    description: "Tvinga upp en mapp när du byter till en mapps server"
                },
                keepIcons: {
                    label: "Skydda ikoner",
                    description: "Fortsätt visa serverikoner i huvudmappen på serverfältet när mappen är öppen i BetterFolders sidofält"
                },
                showFolderIcon: {
                    label: "Visa mappikon",
                    description: "Visa mappikonen ovanför mappservrarna i BetterFolders sidofält",
                    never: "Aldrig",
                    always: "Alltid",
                    moreThanOne: "När flera mappar expanderas"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Ändrar GIF alt-text från bara \"GIF\" för att inkludera gif-taggar/filnamn"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Får GIF-väljaren att öppna favoritkategorin som standard",
            option: {
                keepOpen: {
                    label: "Håll väljaren öppen",
                    description: "Gör det möjligt för GIF-väljaren att förbli öppen efter att ha valt en GIF"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Se inbjudningars utgångsdatum, se inbjudarens profil och förhandsgranska servrar innan du går med (genom att klicka på namnet)",
            render: {
                tip: "Den här inbjudan upphör att gälla efter {{time}}",
                header: "{{name}} bjöd in dig till {{server}}",
                never: "aldrig"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Dölj anteckningar eller inaktivera stavningskontroll (Konfigurera i Inställningar!!)",
            option: {
                hide: {
                    label: "Dölj anteckningar",
                    description: "Dölj anteckningsrutan i användarens popup-fönster"
                },
                noSpellCheck: {
                    label: "Stäng av stavningskontrollen",
                    description: "Inaktivera stavningskontroll i anteckningar"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Antalet plustecken före :emoji: indikerar meddelandet som emojin kommer att läggas till"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Lägger till alternativ för att kopiera rollfärg / redigera roll / visa rollikon när du högerklickar på roller i användarprofiler",
            option: {
                roleIconFileFormat: {
                    label: "Rollikon Filformat",
                    description: "Filformat att använda när rollikoner visas"
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
            description: "RoleDot (tillgänglighetsinställning) kopierar rollfärgen när den klickas. Det tillåter också samtidig användning av RoleDot och färgnamn.",
            option: {
                bothStyles: {
                    label: "Här İki Stil",
                    description: "Visa både rollpunkt och färgade namn"
                },
                copyRoleColorInProfilePopout: {
                    label: "Kopiera rollfärg i profilpopup",
                    description: "Tillåt kopiering av rollfärg genom att klicka på rollprick i profilens popup-fönster"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Förbättrar menyn Sessioner (enheter). Den låter dig se exakta tidsstämplar, ge varje session ett unikt namn och få aviseringar om nya sessioner.",
            new: "NY",
            newSessions: "Ny session:",
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
                    label: "Kontrollområde",
                    description: "Hur ofta du ska leta efter nya sessioner i bakgrunden (om aktiverat), i minuter"
                }
            }
        },
        betterSettings: {
            name: "Bättre inställningar",
            description: "Förbättrar upplevelsen av att öppna inställningsmenyn",
            option: {
                disableFade: {
                    label: "Inaktivera övergångseffekt",
                    description: "Inaktivera crossfade-animering"
                },
                organizeMenu: {
                    label: "Redigera meny",
                    description: "Inställningar delar upp kugghjulsikonmenyn i kategorier"
                },
                eagerLoad: {
                    label: "Snabb laddning",
                    description: "Tar bort laddningsfördröjning när menyn öppnas första gången"
                }
            },
            alert: {
                title: "Omstart krävs",
                restart: "Du ändrade inställningar som kräver omstart.",
                confirm: "Starta om nu",
                cancel: "Senare!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Installera med ett klick, öppna menyn med högerklick"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Denna plugin låter dig förstora sändningsförhandsvisningar",
            context: {
                viewPreview: "Se Release Preview"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Blockerar meddelanden som innehåller vissa användardefinierade nyckelord som om den avsändande användaren var blockerad.",
            option: {
                blockedWords: {
                    label: "Blockerade ord",
                    description: "Kommaseparerad lista över ord att blockera"
                },
                useRegex: {
                    label: "Regex Kullan",
                    description: "Använd varje värde som ett reguljärt uttryck när du kontrollerar meddelandeinnehåll (avancerat)"
                },
                caseSensitive: {
                    label: "Skiftlägeskänslig",
                    description: "Använd skiftlägeskänslig sökning?"
                },
                ignoreBlockedMessages: {
                    label: "Ignorera blockerade meddelanden",
                    description: "ignorerar helt det nya meddelandefältet (senaste meddelanden)"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Hindrar Krisp från att installera"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Gör bilagor i NSFW-kanaler suddiga tills pekaren hålls över",
            option: {
                blurAmount: {
                    label: "Mängd oskärpa",
                    description: "Mängd oskärpa (i pixlar)"
                },
                blurAllChannels: {
                    label: "Oskärpa alla kanaler",
                    description: "Oskärpa bilagor på alla kanaler (inte bara NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Hoppa över stiftuppmaning när stiftfunktioner används"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Får fortfarande aviseringar från vissa källor i Stör ej-läge. Du kan högerklicka på användare/kanaler/servrar för att kringgå Stör ej-läget.",
            context: {
                remove: "Ta bort statushopp",
                add: "Lägg till status Hoppa över"
            },
            option: {
                guilds: {
                    label: "Servrar",
                    description: "Servrar tillåts hoppa (ta emot aviseringar när de pingas var som helst på servern)",
                    placeholder: "Separera med kommatecken"
                },
                channels: {
                    label: "Kanaler",
                    description: "Kanaler där det är tillåtet att hoppa över (få aviseringar när pingats på den kanalen)",
                    placeholder: "Separera med kommatecken"
                },
                users: {
                    label: "Användare",
                    description: "Användare som får hoppa över (få aviseringar för alla meddelanden som skickas i DM)",
                    placeholder: "Separera med kommatecken"
                },
                allowOutsideOfDms: {
                    label: "Tillåt Outside DM",
                    description: "Tillåt valda användare att hoppa över icke-DM-statusar (fungerar som att hoppa över kanal/server, men gäller alla meddelanden som skickas av valda användare)"
                },
                notificationSound: {
                    label: "Aviseringsljud",
                    description: "Bestämmer om aviseringsljud ska spelas upp"
                },
                respectSilentPings: {
                    label: "Respektera Silent Pings",
                    description: "Respektera tysta pingar (@tysta/undertrycka aviseringar)"
                },
                statusToUse: {
                    label: "Användningsfall",
                    description: "Status att använda för vitlistning",
                    online: "online",
                    idle: "på tomgång",
                    dnd: "Stör ej",
                    invisible: "Osynlig"
                }
            }
        },
        cakeDay: {
            name: "Tårtdagen",
            description: "Spåra och visa användarfödelsedagar med tårtikoner",
            context: {
                label: "Födelsedag",
                setBirthday: "Ställ in födelsedag",
                clearBirthday: "Ta bort födelsedag",
                current: "Nuvarande:"
            },
            option: {
                chat: {
                    label: "Chatta",
                    description: "Visa pajikoner bredvid användarnamn i chatten"
                },
                memberList: {
                    label: "Medlemslista",
                    description: "Visa tårtikoner i medlemslistan"
                },
                profileBadge: {
                    label: "Profilmärke",
                    description: "Visa tårtmärket på användarprofilen"
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
                    description: "Bredvid användarnamn i chatten"
                },
                memberList: {
                    label: "Medlemslista",
                    description: "I medlemslistan"
                }
            },
            toast: {
                success: "Födelsedagsuppsättning framgångsrikt!",
                invalid: "Ogiltigt födelsedagsformat! Endast DD/MM accepteras.",
                cleared: "Födelsedagen har raderats!"
            },
            notification: {
                title: "🎂 Det är födelsedag idag!",
                body: "Idag är det {{username}} som fyller år!"
            },
            modal: {
                title: "Ange födelsedag för {{användarnamn}}",
                description: "Ange din födelsedag i DD/MM-format (t.ex. 25/12)",
                placeholder: "örn 25/12",
                current: "Aktuell födelsedag:",
                set: "Ställ in födelsedag",
                cancel: "Avboka",
                birthday: "Idag är det min födelsedag! 🎂",
                saved: "Sparade födelsedagar",
                savedDesc: "Inga födelsedagar har registrerats ännu. Högerklicka på användaren för att lägga till födelsedagar!",
                today: "I dag",
                remove: "Ta bort",
                loading: "Belastning...",
                save: "Spara",
                edit: "Redigera"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Visar samtalstimer för alla röstsamtal",
            option: {
                format: {
                    label: "Formatera",
                    description: "Kompakt eller läsbart format",
                    human: "30g 23s 00d 42s"
                },
                allCallTimers: {
                    label: "Alla samtalstimer",
                    description: "Visa samtalstimer för alla användare på servrar"
                },
                showWithoutHover: {
                    label: "Visa utan att sväva",
                    description: "Visa alltid timern utan att behöva hovra"
                },
                showRoleColor: {
                    label: "Visa rollfärg",
                    description: "Visa i användarens rollfärg (om ShowRoleColor-plugin är aktiverat)"
                },
                trackSelf: {
                    label: "Följ dig själv",
                    description: "Visa din egen timer också"
                },
                showSeconds: {
                    label: "Visa sekunder",
                    description: "Visa även sekunder i timer"
                },
                watchLargeGuilds: {
                    label: "Titta på Big Servers",
                    description: "Spåra användare på stora servrar. Om du är på stora servrar med många aktiva röstanvändare kan detta orsaka fördröjning. Testad med upp till 2000 aktiva röstanvändare och inga problem uppstod."
                },
                fixUI: {
                    label: "Användargränssnittsfix",
                    description: "I vissa fall kan timern bryta användargränssnittet. Du kan fixa detta genom att aktivera det här alternativet."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Lägger till märken till kanaler baserat på deras typ",
            badge: {
                private: "Denna kanal är låst.",
                nsfw: "Denna kanal är märkt NSFW.",
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
                    description: "Visa ljudmärke"
                },
                showCategoryBadge: {
                    label: "Visa kategorimärke",
                    description: "Visa kategorimärket"
                },
                showDirectoryBadge: {
                    label: "Visa indexmärke",
                    description: "Visa indexmärke"
                },
                showAnnouncementThreadBadge: {
                    label: "Visa tillkännagivande ämnesmärke",
                    description: "Visa meddelandets ämnesmärke"
                },
                showPublicThreadBadge: {
                    label: "Visa allmänt ämnesmärke",
                    description: "Visa offentligt ämnesmärke"
                },
                showPrivateThreadBadge: {
                    label: "Visa specialämnesmärke",
                    description: "Visa anpassat ämnesmärke"
                },
                showStageBadge: {
                    label: "Visa scenmärke",
                    description: "Visa scenmärke"
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
                    label: "Visa ditt NSFW-märke",
                    description: "Visa NSFW-märket"
                },
                showLockedBadge: {
                    label: "Visa låst märke",
                    description: "Visa ditt låsta märke"
                },
                showRulesBadge: {
                    label: "Visa reglermärke",
                    description: "Visa reglermärket"
                },
                showUnknownBadge: {
                    label: "Visa okänt märke",
                    description: "Visa okänd märke"
                },
                textBadgeLabel: {
                    label: "Textmärkesetikett",
                    description: "text märke etikett",
                    default: "Text"
                },
                voiceBadgeLabel: {
                    label: "Ljudmärkesetikett",
                    description: "ljudmärkesetikett",
                    default: "Ses"
                },
                categoryBadgeLabel: {
                    label: "Kategori märkesetikett",
                    description: "Kategorimärkesetikett",
                    default: "Kategori"
                },
                announcementBadgeLabel: {
                    label: "Meddelande märkesetikett",
                    description: "Meddelande märke etikett",
                    default: "Haber"
                },
                announcementThreadBadgeLabel: {
                    label: "Tillkännagivande Ämne Märkeetikett",
                    description: "Etikett för meddelandeämne",
                    default: "Nyheter ämne"
                },
                publicThreadBadgeLabel: {
                    label: "Allmänt ämne märkesetikett",
                    description: "Etikett för allmänt ämne",
                    default: "Ämne"
                },
                privateThreadBadgeLabel: {
                    label: "Märkeetikett för specialämne",
                    description: "Anpassad etikett för ämnesmärke",
                    default: "Speciellt ämne"
                },
                stageBadgeLabel: {
                    label: "Scenmärkesetikett",
                    description: "Scenmärkesetikett",
                    default: "Scen"
                },
                directoryBadgeLabel: {
                    label: "Indexmärkesetikett",
                    description: "Indexmärkesetikett",
                    default: "index"
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
                    label: "Lås märkesetikett",
                    description: "låsbricka",
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
                    label: "Ljudmärkesfärg",
                    description: "Färg på ljudmärket"
                },
                categoryBadgeColor: {
                    label: "Kategori märkesfärg",
                    description: "Kategorimärkets färg"
                },
                announcementBadgeColor: {
                    label: "Tillkännagivande märkesfärg",
                    description: "Färg på meddelandemärket"
                },
                announcementThreadBadgeColor: {
                    label: "Tillkännagivande Ämne Badge Färg",
                    description: "Färg på meddelandets ämnesmärke"
                },
                publicThreadBadgeColor: {
                    label: "Allmänt trådmärkesfärg",
                    description: "Allmänt ämnesmärkesfärg"
                },
                privateThreadBadgeColor: {
                    label: "Special Emne Badge Color",
                    description: "Anpassad färg för ämnesmärket"
                },
                stageBadgeColor: {
                    label: "Scenmärkesfärg",
                    description: "Scenmärkets färg"
                },
                directoryBadgeColor: {
                    label: "Indexmärkesfärg",
                    description: "Färg på indexmärket"
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
                voice: "Ses",
                category: "Kategori",
                announcement: "Haber",
                announcementThread: "Nyheter ämne",
                publicThread: "Ämne",
                privateThread: "Speciellt ämne",
                stage: "Scen",
                directory: "index",
                forum: "Forum",
                media: "Media",
                nsfw: "NSFW",
                locked: "Låst",
                rules: "Regler",
                unknown: "Okänd"
            },
            tooltip: {
                locked: "Denna kanal är låst.",
                nsfw: "Denna kanal är märkt NSFW."
            }
        },
        channelTabs: {
            name: "Kanalflikar",
            description: "Gruppera dina ofta besökta kanaler i flikar som i en webbläsare",
            open: "Öppna i Ny flik",
            animation: {
                title: "Animationskontroller",
                description: "Aktivera eller inaktivera specifika animationer för kanalflikar. Varje alternativ kan slås på eller av oberoende av varandra.",
                placeholder: "Välj vilka animationer du vill aktivera...",
                tabHover: "Tab Hover-effekter (ta bort + skala)",
                tabSelection: "Vald Tab Lift Animation",
                tabDragDrop: "Tabb Dra och släpp (spöke + omordning)",
                tabEnterExit: "Tab In/Out rullar (skapa + stäng)",
                tabIconPop: "Ikonpop (valtillväxt)",
                closeRotation: "Stäng knapp Återgå",
                plusPulse: "Plus-knapp pulseffekt",
                mentionGlow: "Nämn Badge Sparkle",
                compactExpand: "Kompakt lägesexpansion",
                selectedBorder: "Vald flik Blå kant",
                selectedBackground: "Vald flikbakgrundsfärg",
                tabShadows: "Tabskuggeffekter",
                tabRepositioning: "Flikompositionering (mjuk övergång)",
                resizeHandle: "Ändra storlek Handtag Tona",
                questActivate: "Aktiv arbetsgradient"
            },
            bookmark: {
                label: "Yer İmi",
                unknown: "Okänd användare",
                folder: "Mapp",
                add: "Lägg till i bokmärken",
                edit: "Redigera bokmärke",
                delete: "Yer İmini Sil",
                remove: "Ta bort från bokmärken",
                removeFolder: "Ta bort bokmärke från mapp",
                loading: "Laddar bokmärken...",
                noBookmarks: "Du har inga bokmärken. Du kan lägga till en öppen flik eller dölja den genom att högerklicka.",
                quests: "Uppdrag",
                messageRequests: "Meddelandeförfrågningar",
                friends: "Vänner",
                shop: "Lagra",
                library: "Bibliotek",
                discovery: "Upptäckt",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Aktivitet",
                specialPage: "Specialsida"
            },
            button: {
                save: "Spara",
                delete: "Sil",
                cancel: "Avboka"
            },
            context: {
                label: "ChannelTabs Kontextmeny",
                bookmark: "Kanalflikar Bokmärkeskontextmeny",
                tab: "Kanalflikar Fliken Kontextmeny",
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
                noLogin: "Har du inte ett konto inloggat?"
            },
            modal: {
                add: {
                    title: "Lägg till bokmärke i mapp",
                    select: "Välj en mapp",
                    create: "Skapa nytt"
                },
                edit: {
                    title: "Redigera bokmärke",
                    name: "Bokmärkes namn",
                    folder: "Mappfärg"
                },
                delete: {
                    title: "Är du säker?",
                    description: "Om du tar bort en bokmärkesmapp raderas också alla bokmärken i den."
                }
            },
            option: {
                onStartup: {
                    label: "Initialt",
                    description: "Välj vad du vill göra med flikarna vid start",
                    nothing: "Gör ingenting (öppna fliken vänner)",
                    remember: "Kom ihåg flikar från förra sessionen",
                    open: "Öppna specifika flikar"
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
                bookmarkNotificationDot: {
                    label: "Bokmärke Notification Point",
                    description: "Visa aviseringsprick för bokmärken"
                },
                widerTabsAndBookmarks: {
                    label: "Stora flikar och bokmärken",
                    description: "Expandera flikar och bokmärken på större bildskärmar"
                },
                tabWidthScale: {
                    label: "Tabbbreddskala",
                    description: "Flikbreddskala (procent) – justerbar genom att dra flikkanterna"
                },
                renderAllTabs: {
                    label: "Håll alla flikar i minnet",
                    description: "Behåll alla flikar i minnet för snabbare växling mellan flikar (rullning och status cachelagras)"
                },
                switchToExistingTab: {
                    label: "Växla till befintlig flik",
                    description: "Om det redan finns en flik för kanalen du bläddrar i, byt till den"
                },
                createNewTabIfNotExists: {
                    label: "Om det inte finns någon flik, skapa den",
                    description: "Om det inte finns någon flik för en kanal, skapa en ny flik"
                },
                enableRapidNavigation: {
                    label: "Aktivera snabbnavigering",
                    description: "När kanaländringar görs snabbt ändras den aktuella fliken istället för den nya fliken."
                },
                rapidNavigationThreshold: {
                    label: "Snabbnavigeringströskel",
                    description: "Tidsintervall i millisekunder. Om en ny kanal öppnas under denna period ändras den befintliga fliken."
                },
                tabBarPosition: {
                    label: "Flikfältets plats",
                    description: "Flikfältets plats",
                    top: "Bästa",
                    bottom: "Alt"
                },
                enableNumberKeySwitching: {
                    label: "Växla flikar med siffertangenter",
                    description: "Aktivera flikväxling med knapparna 1–9"
                },
                numberKeySwitchCount: {
                    label: "Nummerknapp Fliknummer",
                    description: "Antal flikar tillgängliga via siffertangenter (1–9)"
                },
                enableCloseTabShortcut: {
                    label: "Flik Stäng Genväg",
                    description: "Aktivera flikstängning kortkommando"
                },
                enableNewTabShortcut: {
                    label: "Ny flik genväg",
                    description: "Aktivera ny flik öppen genväg"
                },
                enableTabCycleShortcut: {
                    label: "Tab Loop Genväg",
                    description: "Aktivera genväg för att växla mellan flikar"
                },
                keybindsSection: {
                    label: "Kortkommandon",
                    description: "Klicka på en knapp och tryck på önskad tangentkombination. Modifierare som CTRL, SHIFT och ALT stöds.",
                    title: "Kortkommandon",
                    reset: "Återställ alla till standard",
                    closeTab: {
                        label: "Stäng flik",
                        description: "Kortkommando för att stänga den aktuella fliken"
                    },
                    newTab: {
                        label: "Ny flik",
                        description: "Kortkommando för att öppna en ny flik med den aktuella kanalen"
                    },
                    cycleTabsForward: {
                        label: "Framåt Tab Loop",
                        description: "Genväg för att gå till nästa flik (går till första flik)"
                    },
                    cycleTabsBackward: {
                        label: "Back Bounce Loop",
                        description: "Genväg för att gå till föregående flik (går till sista flik)"
                    }
                },
                closeTabKeybind: {
                    label: "Flik Stäng Genväg",
                    description: "Genväg för att stänga aktuell flik"
                },
                newTabKeybind: {
                    label: "Ny flik genväg",
                    description: "Ny flik öppen genväg"
                },
                cycleTabForwardKeybind: {
                    label: "Framåt Tab Loop",
                    description: "Genväg för att gå till nästa flik"
                },
                cycleTabBackwardKeybind: {
                    label: "Back Bounce Loop",
                    description: "Genväg för att gå till föregående flik"
                },
                showTabNumbers: {
                    label: "Visa fliknummer",
                    description: "Visa nummermärken på flikarna för att visa genvägar"
                },
                tabNumberPosition: {
                    label: "Plats för fliknummer",
                    description: "Placering av nummerbrickor på flikar",
                    left: "Vänster (för-ikon)",
                    right: "Höger (inläggets innehåll)"
                },
                animations: {
                    label: "Animationer"
                },
                animationHover: {
                    label: "Hover Animation",
                    description: "Aktivera lyft och förstora effekter medan du svävar"
                },
                animationSelection: {
                    label: "Urvalsanimering",
                    description: "Aktivera ljus-/ram-animationer vid urvalstillfället"
                },
                animationDragDrop: {
                    label: "Dra-och-släpp-animering",
                    description: "Aktivera spökeffekt medan du drar"
                },
                animationEnterExit: {
                    label: "Entry/Exit Animation",
                    description: "Rulla animationer när du skapar/stänger flikar"
                },
                animationIconPop: {
                    label: "Ikon Pop Animation",
                    description: "Aktivera animering av ikontillväxt under valet"
                },
                animationCloseRotation: {
                    label: "Kill Button Return",
                    description: "Lägg till snurranimering till avstängningsikonen"
                },
                animationPlusPulse: {
                    label: "Plusknappspuls",
                    description: "Aktivera pulsanimering för ny flikknapp"
                },
                animationMentionGlow: {
                    label: "Nämn Sparkle",
                    description: "Aktivera animering av röd glöd på märket"
                },
                animationCompactExpand: {
                    label: "Kompakt expansionsanimation",
                    description: "Möjliggör smidig expansion av kompakta flikar"
                },
                animationSelectedBorder: {
                    label: "Vald flikkantanimering",
                    description: "Aktivera kant- och glödanimationer för vald flik"
                },
                animationSelectedBackground: {
                    label: "Vald flikbakgrundsanimering",
                    description: "Aktivera animerad ändring av bakgrundsfärgen för den valda fliken"
                },
                animationTabShadows: {
                    label: "Tab Shadow Animation",
                    description: "Aktivera skuggeffekter på flikar"
                },
                animationTabPositioning: {
                    label: "Animation för flikpositionering",
                    description: "Smidiga övergångsanimationer när du byter flik"
                },
                animationResizeHandle: {
                    label: "Ändra storlek på animering",
                    description: "Aktivera tona animering för storlekshandtag"
                },
                animationQuestsActive: {
                    label: "Active Duty Animation",
                    description: "Aktivera övertoningsanimationer på fliken när uppgifter är aktiva"
                },
                compactAutoExpandSelected: {
                    label: "Expandera automatiskt när det är valt",
                    description: "Expandera kompakta flikar automatiskt när de väljs"
                },
                compactAutoExpandOnHover: {
                    label: "Expandera automatiskt vid muspekaren",
                    description: "Expandera kompakta flikar automatiskt när du svävar"
                },
                openInNewTabAutoSwitch: {
                    label: "Automatiskt byte vid öppning i ny flik",
                    description: "Växla automatiskt till en ny flik när den öppnas"
                },
                bookmarksIndependentFromTabs: {
                    label: "Bokmärken oberoende",
                    description: "Bokmärken navigerar oberoende utan att flikfältet påverkas"
                },
                showResizeHandle: {
                    label: "Visa storlekshandtag",
                    description: "Visa handtag för att justera bredden på flikarna"
                },
                openNewTabsInCompactMode: {
                    label: "Öppna nya flikar kompakt",
                    description: "Nyöppnade flikar öppnas i kompakt läge som standard"
                },
                newTabButtonBehavior: {
                    label: "Nytt flikknappbeteende",
                    description: "Knappen ny flik (+) följer flikar istället för att vara fixerad till höger"
                },
                oneTabPerServer: {
                    label: "En flik per server",
                    description: "Låt det bara finnas ett hopp för en server; Använd samma flik när en ny kanal öppnas"
                },
                maxOpenTabs: {
                    label: "Maximalt antal öppna flikar",
                    description: "Maximalt antal flikar som kan vara öppna samtidigt (0 = obegränsat)"
                }
            },
            tabs: {
                startup: "Hem-flikar",
                currently: "Ställ in för närvarande öppna flikar"
            },
            toast: {
                notRestoring: "Flikar återställs inte eftersom KeepCurrentChannel är aktiverat",
                failed: {
                    restore: "Flikar kunde inte återställas",
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
                    description: "Slå på eller av färgeffekter när du närmar dig teckengränsen"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Den döljer bara alla kanaler i kollapsade kategorier, även om det finns olästa meddelanden."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Ta bort alla emojier och fåniga utsmyckningar från kanalnamn"
        },
        clearURLs: {
            name: "Rensa webbadresser",
            description: "Tar automatiskt bort spårningselement från webbadresser du skickar in"
        },
        clickableRoles: {
            name: "Klickbara roller",
            description: "Du kan se vilka roller medlemmar har genom att klicka på rollerna i användarprofilerna och medlemslistan.",
            modal: {
                loading: "Medlemmar laddar...",
                noMembers: "Inga medlemmar hittades.",
                unknown: "Okänd roll"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Låter dig dölja nästan allt innehåll från alla användare lokalt",
            replying: "Svarar på blockerat meddelande",
            option: {
                hideVc: {
                    label: "Dölj från röstkanaler",
                    description: "Dölj röstkanaler som innehåller blockerade användare"
                },
                usersToBlock: {
                    label: "Användare att blockera",
                    description: "Användar-ID:n separerade med kommatecken och mellanslag"
                },
                hideBlockedUsers: {
                    label: "Dölj blockerade användare",
                    description: "Göm blockerade användare helt överallt"
                },
                hideBlockedMessages: {
                    label: "Dölj blockerade meddelanden",
                    description: "Dölj meddelanden helt från blockerade användare (samma som gamla noblockedmessages-plugin)"
                },
                hideEmptyRoles: {
                    label: "Dölj lediga roller",
                    description: "Dölj rolltitlar om alla medlemmar är blockerade"
                },
                blockedReplyDisplay: {
                    label: "Blockerad svarsvy",
                    description: "Vad som visas istället för ett meddelande när du svarar någon du har gömt",
                    displayText: "Visa text som anger svar på ett dolt meddelande",
                    hideReply: "visa ingenting"
                },
                guildBlackList: {
                    label: "Serversvartlista",
                    description: "Server-ID där funktionen kommer att inaktiveras"
                },
                guildWhiteList: {
                    label: "Server vitlista",
                    description: "Server-ID:n där funktionen kommer att aktiveras"
                }
            }
        },
        clientTheme: {
            name: "Klienttema",
            description: "Remake av gammalt klienttemaexperiment. Lägg till en färg till ditt Discord-klienttema",
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
                    title: "Ditt tema kommer inte att se bra ut!",
                    contrast: "Den valda färgen kommer inte att kontrastera bra med texten",
                    nitro: "Nitro-teman stöds inte",
                    switch: "Växla till läget {{oppositeTheme}}",
                    disable: "Inaktivera Nitro-tema",
                    reset: "Återställ temafärg"
                }
            }
        },
        clipsEnhancements: {
            name: "Klippförbättringar",
            description: "Lägg till fler FPS- och varaktighetsalternativ för klipp, plus RPC-taggning!",
            minutes: "En minut",
            option: {
                richPresenceTagging: {
                    label: "Rich närvarotaggning",
                    description: "När ska klipp taggas med befintlig Rich Presence?",
                    always: "Alltid",
                    only: "Endast när början eller slutet av händelsenamnet matchar",
                    never: "Aldrig"
                },
                enableScreenshotKeybind: {
                    label: "Aktivera snabbtangenten för skärmdump",
                    description: "Aktivera funktionen för snabbkommandon för skärmdumpar"
                },
                enableVoiceOnlyClips: {
                    label: "Aktivera endast ljudklipp",
                    description: "Aktivera endast ljudklipp (ljud utan video)"
                },
                enableAdvancedSignals: {
                    label: "Aktivera avancerade signaler",
                    description: "Aktivera avancerade klippsignaler (automatiska klipputlösare)"
                },
                ignorePlatformRestriction: {
                    label: "Ignorera plattformsbegränsningar",
                    description: "Tillåt plattformsspecifik klippning (kan orsaka lagringsfel)"
                },
                clipsLink: {
                    label: "Klipplänk",
                    link: "Ändra FPS och varaktighet alternativ i Clips inställningar!"
                }
            }
        },
        colorSighted: {
            name: "Färgsynt",
            description: "Tar bort färgblinda vänliga ikoner från situationer, precis som 2015-2017 Discord"
        },
        commandPalette: {
            name: "Kommandopalett",
            description: "Det låter dig navigera i gränssnittet med hjälp av tangentbordet.",
            action: {
                command: {
                    label: "Kör kommando",
                    description: "Kör ett annat palettkommando med ID. Om du inte är säker på identifieraren, använd väljaren."
                },
                settings: {
                    label: "Öppna sidan Inställningar",
                    description: "Den går direkt till en Discord-inställningssida. Välj en sida från väljaren."
                },
                url: {
                    label: "Öppna URL",
                    description: "Öppnar en länk. För bästa kompatibilitet, använd https://-länkar."
                },
                macro: {
                    label: "Kör makro",
                    description: "Kör en serie kommandon sekventiellt. Lägg till steg via väljaren."
                }
            },
            category: {
                auto: "Automatisk (använd standardlayout)",
                default: {
                    label: "Snabba transaktioner",
                    description: "Vanliga Plexcord-genvägar"
                },
                plugins: {
                    label: "Plugins",
                    description: "Aktiverar, inaktiverar och konfigurerar Plexcord-plugins",
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
                    description: "Åtgärder för den valda kanalen och servern"
                },
                updates: {
                    label: "Uppdateringar",
                    description: "Håll dig uppdaterad med Plexcord"
                },
                discordSettings: {
                    label: "Discord-inställningar",
                    description: "Gå till Discord-konfigurationssidor"
                },
                custom: {
                    label: "Specialkommandon",
                    description: "Användardefinierade kommandopalettposter"
                },
                sessions: {
                    label: "Sessionsverktyg",
                    description: "Verktyg för att hantera din Discord-session"
                },
                guilds: {
                    label: "Servrar",
                    description: "Navigera snabbt till dina servrar"
                },
                friends: {
                    label: "Vänner",
                    description: "Gå snabbt till dina vänner"
                },
                action: {
                    label: "Handling",
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
                    label: "Installera om Discord",
                    description: "Laddar om det aktuella Discord-fönstret"
                }
            },
            command: {
                enable: "Aktivera {{pluginName}}",
                enabled: "{{pluginName}} aktiverad",
                disable: "Inaktivera {{pluginName}}",
                disabled: "{{pluginName}} inaktiverad",
                failed: "Kommandot misslyckades:",
                toggleFailed: "{{pluginName}} kunde inte ändras.",
                pluginSettings: "Inställningar för {{pluginName}}",
                untitled: "Anonymt kommando",
                new: "Nytt kommando",
                error: {
                    enter: "Ange ett kommando-ID eller välj nedan.",
                    noCommand: "Det finns inget kommando som matchar detta ID."
                },
                discord: {
                    account: "Öppna Mitt konto",
                    privacy: "Data och integritet öppen",
                    notifications: "Aktivera aviseringar",
                    voice: "Slå på ljud och video",
                    text: "Öppna text och bilder",
                    appearance: "Öppna vy",
                    accessibility: "Öppen tillgänglighet",
                    keybinds: "Slå på nyckelbindningar",
                    advanced: "Öppna Avancerade inställningar",
                },
                updates: {
                    check: {
                        label: "Sök efter uppdateringar",
                        description: "Sök efter Plexcord-uppdateringar",
                        one: "En uppdatering är tillgänglig",
                        multiple: "{{count}} uppdateringar tillgängliga",
                        none: "ingen uppdatering",
                        failed: "Det gick inte att söka efter uppdateringar."
                    },
                    changelog: {
                        label: "Visa ändringslogg",
                        description: "Plexcord öppnar ändringslogg"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} Markera som läst"
                    }
                },
                pin: {
                    open: {
                        label: "Aktivera {{channelLabel}} Pins"
                    },
                    toggle: {
                        label: "Växla låsning på sista kommandot"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} Sustur",
                        oneHour: "Stäng av kanalen {{channelLabel}} i 1 timme",
                        untilTomorrow: "Stäng av kanalen {{channelLabel}} tills imorgon",
                    },
                    unmute: {
                        label: "Slå på ljudet för {{channelLabel}}",
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
                        label: "Öppna {{guildLabel}} Inställningar"
                    },
                    navigate: {
                        label: "Gå till {{guildLabel}}-servern"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30 minuter Stör ej",
                    oneHourDnd: "1 timme Stör ej",
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
                    deafen: "Växla självbedövande",
                },
                notification: {
                    clear: {
                        label: "Rensa skrivbordsaviseringar"
                    }
                },
                palette: {
                    settings: {
                        label: "Öppna kommandopalettinställningar",
                        description: "Konfigurera kommandopalett-plugin"
                    }
                },
                recent: {
                    label: "Visa senaste kommandon",
                    description: "Visar nyligen utförda kommandon",
                    rerun: "Kör senaste kommandot igen"
                },
                plugin: {
                    reload: {
                        label: "Installera om alla plugins",
                        description: "Försöker omedelbart att ladda om varje aktiv plugin"
                    },
                    enable: {
                        label: "Aktivera alla plugins"
                    },
                    disable: {
                        label: "Inaktivera alla onödiga plugins"
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
                searchPlaceholder: "Sök efter kommando",
                noCommand: "Kommandot hittades inte",
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
                        noCommand: "Kommandot hittades inte",
                        pin: "pin-kommando",
                        unpin: "Lossa"
                    },
                    target: {
                        label: "Målkommando-ID",
                        placeholder: "Ange kommando-ID",
                        choose: "Välj Kommando"
                    },
                    custom: {
                        label: "Specialkommandon",
                        description: "1) Namnge kommandot · 2) Lägg till valfri beskrivning/sökord/tagg/kategori · 3) Välj en åtgärd och fyll i detaljerna (ID:n för alias och makron måste matcha befintliga palettkommandon).",
                        auto: "Auto (standard)",
                        expand: "Expandera",
                        collapse: "Kollapsa",
                        collapsed: {
                            label: "Biljett",
                            description: "Visningsnamn",
                            advanced: {
                                hide: "Dölj avancerade alternativ",
                                show: "Visa avancerade alternativ"
                            },
                            subtitle: {
                                label: "Förklaring",
                                placeholder: "Valfri underrubrik"
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
                    noSelected: "Sidan är inte vald",
                    current: "Aktuell sida",
                    choose: "Välj sida..."
                },
                url: {
                    url: "URL",
                    error: "Använd länkarna http:// eller https://.",
                    valid: "Ange en giltig URL.",
                    open: {
                        external: "öppna externt",
                    }
                },
                macro: {
                    sequence: {
                        label: "Manus",
                        placeholder: "kommando-a, kommando-b"
                    },
                    addStep: "Lägg till steg",
                    unknownId: "Okända kommando-ID:n"
                }
            },
            status: {
                online: "online",
                idle: "på tomgång",
                dnd: "Stör ej",
                invisible: "Osynlig"
            },
            tag: {
                core: "Solrosfrö",
                navigation: "Promenerar",
                utility: "Fordon",
                developer: "Framkallare",
                customization: "anpassning",
                plugins: "Plugins",
                session: "Session",
                context: "Sammanhang",
                custom: "Särskild",
                guilds: "Servrar",
                friends: "Vänner",
                other: "Andra"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Chattknappen '{{label}}' hittades inte.",
                        failedToTrigger: "{{label}} kunde inte utlösas.",
                        activated: "{{label}} är aktiverad."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Kanalavstängningskontroller är inte tillgängliga",
                        muted: "Kanalen har tystats.",
                        unmuted: "Kanalen har stängts av.",
                        failed: "Kanalens avstängningsstatus kunde inte uppdateras."
                    },
                    dm: {
                        no: "Det finns inga DM-avslutningar registrerade i denna session.",
                        reOpened: "Senast stängda DM har öppnats igen.",
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
                        unavailable: "Serverns avstängningskontroller är inte tillgängliga",
                        muted: "Servern har tystats.",
                        unmuted: "Serveravstängning har tagits bort.",
                        failed: "Serverns tystnadsstatus kunde inte uppdateras."
                    },
                    settings: {
                        unable: "Det går inte att öppna serverinställningarna.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Fästpanelen kan inte öppnas.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Den planerade statusåterställningen har avbrutits.",
                        unableToChange: "Statusen kan inte ändras för närvarande.",
                        reverted: "Statusen returneras som {{status}}.",
                        dnd: "Stör ej i {{duration}} minuter."
                    },
                    change: {
                        unableToChange: "Statusen kan inte ändras för närvarande.",
                        changed: "Status ändrad till {{status}}."
                    }
                },
                read: {
                    marked: "{{channelLabel}} är markerad som läst.",
                    failed: "Kanalen kunde inte markeras som läst."
                },
                route: {
                    unable: "Det gick inte att öppna {{destination}}.",
                },
                notification: {
                    cleared: "Alla aviseringar raderade.",
                    failed: "Det gick inte att rensa aviseringar.",
                    notSupported: "Aviseringsrensning stöds inte."
                },
                streamerMode: {
                    enabled: "Sändningsläge är aktiverat.",
                    disabled: "Sändningsläge är inaktiverat.",
                },
                voice: {
                    micToggle: {
                        muted: "Mikrofonen tystades.",
                        unmuted: "Mikrofonen är påslagen."
                    },
                    deafenToggle: {
                        deafened: "Du är nu döv.",
                        undeafened: "Du är inte längre döv."
                    }
                },
                quickCSS: {
                    enabled: "Snabb CSS är aktiverad.",
                    disabled: "Snabb CSS är inaktiverad."
                },
                transparentity: {
                    enabled: "Fönstertransparens är aktiverad.",
                    disabled: "Fönstertransparens är inaktiverad."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} är inaktiverad.",
                        disable: "{{pluginName}} är inaktiverad. För att använda den här åtgärden, aktivera insticksprogrammet."
                    },
                    required: {
                        label: "{{pluginName}} kräver en omstart för att installera om."
                    },
                    stop: {
                        failed: "{{pluginName}} kunde inte stoppas."
                    },
                    restart: {
                        failed: "Det gick inte att starta om {{pluginName}}."
                    },
                    reload: {
                        label: "{{pluginName}} har laddats om.",
                        noPlugin: "Inga plugins installerades om.",
                        reloaded: "{{count}} plugins har installerats om."
                    },
                    toggle: {
                        enabled: "{{changed}} plugin aktiverad.",
                        disabled: "{{changed}} plugin är inaktiverad.",
                        noChanged: "Statusen för några plugins har inte ändrats."
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
                    current: "Aktuell server",
                }
            },
            option: {
                hotkey: {
                    label: "Snabbtangent",
                    description: "Snabbtangent används för att öppna kommandopaletten",
                    recording: "Tryck på valfri tangent...",
                    reset: "återställa"
                },
                visualStyle: {
                    label: "Görsel Stil",
                    description: "palettvy",
                    classic: "Klassisk",
                    polished: "Polerad (modern)"
                },
                showTags: {
                    label: "Visa taggar",
                    description: "Visa etiketter för kommandon"
                },
                enableTagFilter: {
                    label: "Aktivera taggfilter",
                    description: "Visa taggfilterfältet"
                },
                customCommands: {
                    label: "Specialkommandon",
                    description: "Hantera anpassade kommandopalettposter"
                }
            },
            template: {
                alias: {
                    label: "Smeknamn Kommando",
                    description: "Återspeglar ett befintligt kommando"
                },
                settings: {
                    label: "Inställningar",
                    description: "Öppna Discord-inställningar"
                },
                url: {
                    label: "Förbindelse",
                    description: "Öppnar en extern URL"
                },
                macro: {
                    label: "Makro",
                    description: "Kör en rad kommandon"
                }
            }
        },
        consoleJanitor: {
            name: "Konsolvaktmästare",
            description: "Inaktiverar irriterande konsolmeddelanden/fel",
            option: {
                disableLoggers: {
                    label: "Inaktivera Loggers",
                    description: "Inaktiverar Discords loggare"
                },
                disableSpotifyLogger: {
                    label: "Inaktivera Spotify Logger",
                    description: "Inaktiverar Spotify-logger som läcker kontoinformation och åtkomstnyckel"
                },
                whitelistedLoggers: {
                    label: "Vitlistade Loggers",
                    description: "Semikolon (;) separerad lista över loggare som kommer att tillåtas även om andra är dolda"
                },
                allowLevel: {
                    label: "Tillåten nivå",
                    description: "Tillåt alltid loggare av dessa typer",
                    filter: "Filterlista"
                }
            }
        },
        consoleShortcuts: {
            name: "Konsolgenvägar",
            description: "Lägger till kortare genvägar för många saker på fönstret. Kör \"shortcutList\" för listan."
        },
        contentWarning: {
            name: "Innehållsvarning",
            description: "Gör att vissa triggerord blir suddiga som standard. Genom att klicka på suddigt innehåll blir det synligt.",
            option: {
                flagged: {
                    label: "märke",
                    flagged: "Markerade ord",
                    placeholder: "Ord"
                },
                onClick: {
                    label: "Klicka på den",
                    description: "Visa innehåll genom att klicka, inte bara på musen över"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Låter dig kopiera emojis som formaterad text (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Unicode-kopior",
                    description: "Kopierar det råa unicode-tecknet istället för :name: för standardemojis (👽)"
                }
            },
            context: {
                copy: "Kopiera Emoji Markdown"
            },
            toast: {
                success: "Framgångsrik! Emojis markering har kopierats."
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
            description: "Ett plugin som kopierar användarnas profilgradientfärger till urklippet.",
            copy: "Kopiera profilfärger",
            toast: {
                noColor: "Profilfärger hittades inte!",
                copied: "Profilfärger kopierade till urklipp!",
                error: "Fel vid kopiering av profilfärger!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Kopiera en användares status-URL när du högerklickar",
            toast: {
                copied: "URL kopierad",
                error: "Det gick inte att kopiera URL. Kontrollera konsolen för mer information"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Lägger till möjligheten att kopiera och öppna klistermärkeslänkar",
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
            description: "Lägger till en knapp i användarens sammanhangsberoende meny för att kopiera användarens omnämnande. Fungerar bäst med ValidUser.",
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
            description: "Hjälpprogram för att hantera och, om möjligt, återställa från krascher utan att behöva starta om",
            option: {
                attemptToPreventCrashes: {
                    label: "Försök att förhindra krascher",
                    description: "Försöka förhindra Discord-krascher?"
                },
                attemptToNavigateToHome: {
                    label: "Försök att omdirigera till hemsidan",
                    description: "Försök att omdirigera till huvudfliken i återställning efter krasch."
                }
            },
            toast: {
                crashed: {
                    title: "Discord kraschade!",
                    body: "Hoppsan :( Discord kraschade två gånger på kort tid, inget återställningsförsök kommer att göras. Klicka här och gå med i supportservern!",
                    update: "Åh nej, Discord kraschade precis... men goda nyheter, det finns en Plexcord-uppdatering som kan fixa det här problemet! Vill du uppdatera nu?",
                    recover: "Försöker återställa... Klicka här och gå med i supportservern!",
                    invalid: "Ogiltig eller utgången inbjudningslänk."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Använd Ctrl+Enter för att skicka meddelande (anpassningsbart)",
            option: {
                submitRule: {
                    label: "Inläggsregel",
                    description: "Hur ett meddelande skickas",
                    ctrlEnter: "Ctrl+Enter (Enter eller Shift+Enter för ny rad) (cmd+enter på macOS)",
                    shiftEnter: "Skift+Enter (Enter för ny rad)",
                    enter: "Enter (Skift+Enter för ny rad; Discord standard)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Skicka meddelande i mitten av kodblocket",
                    description: "Skicka meddelande mitt i ett kodblock"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Lägger till en sprite som följer din markör.",
            modal: {
                furColor: "Päls färg",
                outlineColor: "Anahat Rengi"
            },
            option: {
                buddy: {
                    label: "Kompis",
                    description: "Välj en vän med markören",
                    oneko: "bra",
                    fathorse: "Fet häst"
                },
                speed: {
                    label: "Hastighet",
                    description: "Din kompis hastighet",
                    invalid: "Hastigheten måste vara större än 0"
                },
                fps: {
                    label: "Bildfrekvens (FPS)",
                    description: "Din kompis bildfrekvens",
                    invalid: "Bildfrekvensen måste vara större än 0"
                },
                onekoSection: {
                    label: "bra"
                },
                furColor: {
                    label: "Päls färg",
                    description: "päls hex färg för oneko"
                },
                outlineColor: {
                    label: "Anahat Rengi",
                    description: "Kontur hex-färg för Oneko"
                },
                fathorseSection: {
                    label: "Fet häst"
                },
                size: {
                    label: "Dimensionera",
                    description: "Storlek på fet häst",
                    invalid: "Storleken måste vara större än 0"
                },
                fade: {
                    label: "Fading",
                    description: "Om hästen bleknar när markören närmar sig"
                },
                freeroam: {
                    label: "Gratis roaming",
                    description: "Om hästen kan ströva fritt på tomgång"
                },
                shake: {
                    label: "Entledigande",
                    description: "Om hästen kommer att skaka fönstret när den går"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Anpassa mappikoner med valfri png",
            option: {
                solidIcon: {
                    label: "Platt ikon",
                    description: "Använd en vanlig bakgrund för bakgrunden till din bild"
                },
                folderIcons: {
                    label: "Mappikoner",
                    description: "Inställningar för mappikon"
                }
            },
            modal: {
                change: "Ändra storlek på mappikonen",
                save: "Spara",
                unset: "Ta bort",
                set: "Ställ in en ny ikon",
                hover: "Du kan behöva föra muspekaren över mappen efter att du har ställt in den på att uppdatera."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Låter dig ställa in hur lång tid det tar innan Discord går in i viloläge (eller inaktivera automatiskt viloläge)",
            backOnline: "Välkommen tillbaka! Klicka på knappen för att gå online. Klicka på X för att förbli inaktiv tills den laddas om.",
            exit: "Avsluta tomgång",
            option: {
                idleTimeout: {
                    label: "Timeout för tomgång",
                    description: "Antal minuter innan Discord går in i viloläge (0 för att inaktivera automatiskt viloläge)"
                },
                remainInIdle: {
                    label: "Håll dig ledig",
                    description: "När du återvänder till Discord, förbli inaktiv tills du bekräftar att du vill gå online"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Lägg till en helt anpassningsbar Rich Presence till din Discord-profil",
            goTo: "Skapa en applikation genom att gå till {{portal}} och hämta applikations-ID.",
            upload: "Få bildnycklar genom att ladda upp bilder från fliken Rich Presence.",
            image: "Om du vill använda en bildlänk, ladda ner din bild och ladda upp den till {{imgur}}, högerklicka sedan på bilden och använd 'Kopiera bildadress' för att få länken.",
            button: "Du kan inte se dina egna knappar på din profil, men alla andra kan se dem normalt.",
            font: "Vissa konstiga unicode-bokstäver ('𝖇ö𝖞𝖑𝖊 𝖞𝖆𝖟ı𝖑𝖆𝖗') kan göra att Rich Presence inte visas, försök använda vanliga bokstäver istället.",
            placeholder: "Ange ett värde",
            select: "Välj ett alternativ",
            error: {
                appIdInvalid: "Applikations-ID är inte ett giltigt nummer.",
                notice: "Varning",
                sharing: "Händelsedelning är inte aktiverat, andra kommer inte att kunna se din privata rika närvaro!",
                enable: "aktivera",
                validStream: "Inläggslänken måste vara en giltig URL.",
                mustBeURL: "Det måste vara en giltig URL.",
                streamCharacters: "Inläggslänken får inte vara längre än 512 tecken.",
                dontUse: "Använd inte en Discord-länk. Använd en Imgur-bildlänk istället.",
                imgur: "Imgur-länken måste vara direkt till bilden (till exempel: https://i.imgur.com/...). Högerklicka på bilden och klicka på \"Kopiera bildadress\".",
                tenor: "Tenor-länken måste vara direkt till bilden (till exempel: https://media.tenor.com/...). Högerklicka på GIF-filen och klicka på \"Kopiera bildadress\".",
                required: "Detta fält är obligatoriskt.",
                tooLong: "Den får inte vara längre än {{maxLength}} tecken.",
                mustBeNumber: "Det måste vara ett nummer.",
                mustBePositive: "Det måste vara ett positivt tal.",
                startTimeInvalid: "Starttiden måste vara större än 0.",
                endTimeInvalid: "Sluttiden måste vara större än 0."
            },
            option: {
                appId: {
                    label: "Applikations-ID",
                    description: "App-id (obligatoriskt)"
                },
                appName: {
                    label: "Applikationsnamn",
                    description: "Appnamn (obligatoriskt)"
                },
                details: {
                    label: "Detalj",
                    description: "Detaljer (rad 1)"
                },
                detailsURL: {
                    label: "Detaljer URL",
                    description: "Klickabar URL för detaljer"
                },
                state: {
                    label: "Durum",
                    description: "Status (rad 2)"
                },
                stateURL: {
                    label: "Status URL",
                    description: "Klickabar URL för status"
                },
                partySize: {
                    label: "Gruppstorlek",
                    description: "Aktuell gruppstorlek (måste användas tillsammans med maximal gruppstorlek)"
                },
                partyMax: {
                    label: "Maximal gruppstorlek",
                    description: "Maximal gruppstorlek (måste användas med aktuell gruppstorlek)"
                },
                type: {
                    label: "Händelsetyp",
                    description: "Händelsetyp",
                    playing: "spelar",
                    streaming: "Broadcasting",
                    listening: "lyssnande",
                    watching: "tittar på",
                    competing: "racing"
                },
                streamLink: {
                    label: "Postlänk",
                    description: "Länk till Twitch.tv eller Youtube.com (endast för typ av sändningsevenemang)"
                },
                timestampMode: {
                    label: "Tidsstämpelläge",
                    description: "Vad tidsstämpeln ska ange",
                    none: "Ingen",
                    sinceDiscordOpen: "Sedan Discord öppnade",
                    sameAsCurrentTime: "Samma som din nuvarande tid (återställs inte efter 24 timmar)",
                    custom: "Speciell tid"
                },
                startTime: {
                    label: "Starttid (i millisekunder)",
                    description: "Starttidsstämpel (endast för anpassat tidsläge)"
                },
                endTime: {
                    label: "Sluttid (i millisekunder)",
                    description: "Sluttidsstämpel (endast för anpassat tidsläge)"
                },
                imageBig: {
                    label: "Stor visuell nyckel",
                    description: "Stor visuell nyckel (måste installeras på fliken Rich Presence)"
                },
                imageBigTooltip: {
                    label: "Stor visuell ledtråd",
                    description: "Tips som visas när du håller muspekaren över den större bilden"
                },
                imageBigURL: {
                    label: "Stor bild-URL",
                    description: "Klickbar URL för stor bild"
                },
                imageSmall: {
                    label: "Liten visuell switch",
                    description: "Liten visuell nyckel (måste installeras på fliken Rich Presence)"
                },
                imageSmallTooltip: {
                    label: "Liten visuell ledtråd",
                    description: "Tips som visas när du håller muspekaren över en miniatyrbild"
                },
                imageSmallURL: {
                    label: "Webbadress för miniatyrbild",
                    description: "Liten bild klickbar URL"
                },
                buttonOneText: {
                    label: "Knapp 1 Metni",
                    description: "Knapp 1 metni"
                },
                buttonOneURL: {
                    label: "Knapp 1 URL",
                    description: "Knapp 1 anslutning"
                },
                buttonTwoText: {
                    label: "Knapp 2 Metni",
                    description: "Knapp 2 metni"
                },
                buttonTwoURL: {
                    label: "Knapp 2 URL",
                    description: "Knapp 2 anslutning"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Anpassa Discords ljud.",
            search: "Sök efter ljud",
            placeholder: "Sök på namn eller ID",
            import: "Iche Aktar",
            export: "Exportera",
            reset: "Återställ alla",
            debug: "Felsökning",
            toast: {
                error: "Det gick inte att ladda anpassad ljudfil",
                exported: "{{count}} inställningar exporterade (ljudfiler ingår inte)",
                imported: "Inställningarna har importerats",
                importError: "Ett fel uppstod vid import av inställningar. Kontrollera konsolen för detaljer.",
                reset: "Alla ljud har återställts!",
                overrideDescription: "{{soundName}}-ljudet har ändrats",
                previewSound: "Ett fel uppstod när ljudet spelades upp.",
                playing: "Det anpassade ljudet kunde inte spelas upp. Filen kan vara korrupt.",
                invalidFile: "Ingen anpassad ljudfil för förhandsvisning",
                uploaded: "Filen laddades upp: {{fileName}}",
                uploadedError: "Ett fel uppstod när filen laddades upp: {{error}}",
                invalidExtension: "Ogiltig filtyp. Ladda upp en ljudfil.",
                uploading: "Laddar fil...",
                deleted: "Filen raderades framgångsrikt",
                deleteError: "Ett fel uppstod när filen skulle raderas.",
                loadingError: "Det gick inte att ladda anpassad ljudfil"
            },
            button: {
                preview: "Förhandsvisning",
                stop: "Flöde",
                volume: "Ses",
                soundSource: "Ljudkälla",
                customFile: "Specialfil",
                uploadNew: "Ny uppladdning",
                delete: "Ta bort vald fil"
            },
            option: {
                default: "Standard",
                custom: "Särskild",
                select: "Välj en fil..."
            },
            type: {
                activityEnd: "Eventet är över",
                activityLaunch: "Eventet startat",
                activityUserJoin: "Användare deltog i evenemanget",
                activityUserLeft: "Användare lämnade händelsen",
                asmrMessage: "ASMR-meddelande",
                bitMessage: "Bitmeddelande",
                bopMessage: "Bop meddelande",
                callCalling: "Sökning pågår",
                callRinging: "Samtal ringer",
                clipError: "Klippfel",
                clipSave: "Klipp sparat",
                ddrDown: "DDR nere",
                ddrLeft: "DDR Sol",
                ddrRight: "DDR höger",
                ddrUp: "DDR upp",
                deafen: "döva",
                discodo: "Skiva",
                disconnect: "Osammanhängande",
                duckyMessage: "Ducky meddelande",
                hangStatusSelect: "Suspend Status Selection",
                highfiveClap: "High Five-applåder",
                highfiveWhistle: "High Five Whistle",
                humanMan: "mänsklig man",
                lofiMessage: "LoFi meddelande",
                mention1: "Nämn 1 (@roll)",
                mention2: "Nämn 2 (@alla)",
                mention3: "Nämn 3 (@här)",
                message1: "Meddelande 1 (Allmänt)",
                message2: "Meddelande 2 (svar på server)",
                message3: "Meddelande 3 (DM och grupp-DM)",
                mute: "Stum",
                overlayUnlock: "Lager upplåst",
                poggermodeAchievement: "Poggermode Achievement",
                poggermodeApplause: "Poggermode-applåder",
                poggermodeEnabled: "Poggermode aktiverat",
                poggermodeMessage: "Poggermode meddelande",
                pttStart: "Starta PTT",
                pttStop: "PTT Stopp",
                reconnect: "Återanslut",
                robotMan: "Robot Adam",
                stageWaiting: "Väntar på scen",
                streamEnded: "Sändningen avslutad",
                streamStarted: "Sändningen har startat",
                streamUserJoined: "Användare gick med i sändningen",
                streamUserLeft: "Användare lämnade sändningen",
                success: "Framgångsrik",
                undeafen: "Ta bort öronbedövande",
                unmute: "Ta bort tystnad",
                userJoin: "Användare gick med",
                userLeave: "Användare vänster",
                userMoved: "Användare flyttad",
                vibingWumpus: "Wumpus fastnade"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Anpassade tidsstämplar på meddelanden och verktygstips",
            demo: {
                cozy: "Klicka på mig för att byta till casual format",
                compact: "Klicka på mig för att byta till kompakt format",
                lastWeek: "Detta meddelande skickades förra veckan",
                hover: "Du kan se verktygstipsformat genom att hålla muspekaren över tidsstämplar",
                edit: "Redigera format nedan, se dem uppdaterade live här"
            },
            modal: {
                title: "Hur man använder:",
                moment: "Moment.js formateringsdokumentation",
                hint: "Dessutom kan du använda följande i dina inlägg:",
                calendar: "möjliggör dynamisk datumformatering, till exempel",
                today: "I dag",
                yesterday: "I går",
                relative: "ger dig tider som:",
                relativeTime: "4 timmar sedan",
                preview: "Förhandsvisning",
                format: "kalenderformat",
                howTo: "Så här formaterar du [kalender]-värdet när det används i tidsstämplarna ovan."
            },
            option: {
                formats: {
                    label: "Format",
                    description: "Anpassa tidsstämpelformat",
                },
                cozyFormat: {
                    label: "lättnad mod",
                    description: "Tidsformat att använda för avslappnat läge i meddelanden"
                },
                compactFormat: {
                    label: "Kompakt mod",
                    description: "Tidsformat att använda i kompakt läge och när du håller muspekaren över meddelanden"
                },
                tooltipFormat: {
                    label: "verktygsspets",
                    description: "Tidsformat att använda i verktygstips"
                },
                ariaLabelFormat: {
                    label: "Aria-etiketter",
                    description: "Tidsformat att använda i Aria-taggar"
                },
                sameDayFormat: {
                    label: "samma dag",
                    description: "[kalender] format för idag",
                    default: "[Bugün] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "I går",
                    description: "[kalender] format för gårdagen",
                    default: "[Tunn] TT:mm:ss"
                },
                lastWeekFormat: {
                    label: "Förra veckan",
                    description: "[kalender]-format för förra veckan"
                },
                sameElseFormat: {
                    label: "äldre",
                    description: "[kalender] format för äldre datum"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Låter dig lägga till en anpassad färg till vilken användare som helst, var som helst! Rekommenderas starkt att använda med typingTweaks och roleColorEverywhere",
            option: {
                dmList: {
                    label: "DM lista",
                    description: "Namn på användare som tilldelats specialfärger kommer att färgas i DM-listan"
                },
                colorInServers: {
                    label: "Färg på servrar",
                    description: "Bör namnfärger ändras på servrar också?"
                }
            },
            context: {
                setColor: "Justera färg"
            },
            modal: {
                custom: "Anpassad färg",
                pick: "välj en färg",
                delete: "Ta bort post",
                save: "Spara"
            }
        },
        dearrow: {
            name: "Dearrow",
            description: "Gör YouTube inbäddade titlar och miniatyrer mindre sensationella, driven av Dearrow",
            option: {
                hideButton: {
                    label: "Göm knapp",
                    description: "Döljer Dearrow-knappen från YouTube-inbäddningar"
                },
                replaceElements: {
                    label: "Ändra objekt",
                    description: "Välj vilka element i inbäddningen som ska ersättas",
                    everything: "Allt (titlar och miniatyrer)",
                    title: "Titlar",
                    thumbnail: "Miniatyrer"
                },
                dearrowByDefault: {
                    label: "Dearrow som standard",
                    description: "Dearrow videor automatiskt"
                }
            },
            tooltip: {
                dearrowed: "Dearrow har tillämpats på denna inbäddning, klicka för att återställa",
                dearrow: "Klicka för att tillämpa dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Rensar upp Discord genom att ta bort icke-väsentliga UI-element som profileffekter, butiksflikar, power-ups och mer.",
            option: {
                userProfileHeader: {
                    label: "Användarprofil"
                },
                removeNameplate: {
                    label: "Ta bort namnskylten",
                    description: "Tar bort namnskyltar."
                },
                removeProfileEffect: {
                    label: "Ta bort profileffekt",
                    description: "Tar bort animationseffekter som visas när profilen öppnas."
                },
                removeClanTag: {
                    label: "Ta bort Clan Tag",
                    description: "Tar bort klantaggar."
                },
                alwaysShowUsername: {
                    label: "Visa alltid användarnamn",
                    description: "Den visar alltid användarnamnet istället för statusen."
                },
                accessibilityNotice: {
                    label: "Tillgänglighetsvarning",
                    description: "Discord har redan ett inbyggt användarnamnstilalternativ i sina tillgänglighetsinställningar."
                },
                friendsListHeader: {
                    label: "Ovanför vän-/DM-listan"
                },
                removeShopAboveDM: {
                    label: "Ta bort butik ovanför DM-listan",
                    description: "Tar bort butiksknappen ovanför DM-listan."
                },
                removeQuestsAboveDM: {
                    label: "Ta bort uppgifter från DM-listan",
                    description: "Tar bort uppgiftsknappen ovanför DM-listan."
                },
                miscHeader: {
                    label: "Olika"
                },
                removeServerBoostInfo: {
                    label: "Ta bort Server Boost Information",
                    description: "Tar bort serverförstärkningsinformation överst på kanallistan."
                },
                removeBillingSettings: {
                    label: "Ta bort betalningsinställningar",
                    description: "Tar bort betalningsinställningar (faktura)."
                },
                removeGiftButton: {
                    label: "Ta bort presentknapp",
                    description: "Tar bort knappen skicka present."
                },
                removeUnavailableEmojiPicker: {
                    label: "Ta bort otillgänglig emojiväljare",
                    description: "Tar bort otillgängliga kategorier i emojiväljaren."
                },
                removeAudioMenus: {
                    label: "Ta bort ljudmenyer",
                    description: "Tar bort pilmenyerna bredvid mute- och dövknapparna."
                },
                removeButtonTooltips: {
                    label: "Ta bort knapptips",
                    description: "Den tar bort verktygstipsen som visas på knapparna."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Avkoda base64-innehållet i alla meddelanden och kopiera det avkodade innehållet.",
            right: {
                decode: "Copy Solved (vänsterklick) / Base64 Solve (högerklick)",
                copy: "Base64 Avkoda (vänsterklick) / Kopiera avkodad (högerklick)"
            },
            option: {
                clickMethod: {
                    label: "Klicka på Metod",
                    description: "Ändra beteendet för knappen för att avkoda base64-innehållet i ett meddelande.",
                    left: "Vänsterklicka för att avkoda Base64-innehåll.",
                    right: "Högerklicka för att avkoda Base64-innehåll."
                }
            },
            modal: {
                title: "Avkodat Base64-innehåll",
                content: "Upplöst innehåll",
                copy: "Kopiera löst innehåll {{index}}",
                copied: "Löst innehåll kopieras till urklipp!"
            }
        },
        decor: {
            name: "Dekor",
            description: "Skapa och använd dina egna anpassade avatardekorationer eller välj din favorit bland förinställningarna.",
            presetPart: "En del av förinställningen {{name}}",
            createdBy: "Skapad av {{author}}",
            copy: "Kopiera förinställt ID",
            file: "Fil",
            your: {
                title: "dekorationer",
                subtitle: "Du kan ta bort dina egna dekorationer genom att högerklicka."
            },
            option: {
                changeDecoration: {
                    label: "Byt prydnad",
                    description: "För att ändra din avatardekoration, aktivera Dekoration och starta om din klient.",
                    also: "Du kan också komma åt dekorationsdekorationer från sidan {{profiler}}.",
                    profiles: "Profiler"
                },
                baseUrl: {
                    label: "Bas-URL",
                    description: "Dekor API URL:er"
                },
                agreedToGuidelines: {
                    label: "Jag accepterade reglerna",
                    description: "Regler accepterade"
                }
            },
            context: {
                decorationOptions: "Dekorationsalternativ",
                copyHash: "Kopiera dekorationshash",
                deleteDecoration: "Ta bort prydnad"
            },
            alert: {
                delete: {
                    title: "Ta bort prydnad",
                    body: "Är du säker på att du vill ta bort {{decoration}}-dekorationen?",
                    confirm: "Sil",
                    cancel: "Avboka"
                },
                logout: {
                    title: "Logga ut",
                    body: "Är du säker på att du vill logga ut från Dekor?",
                    confirm: "Logga ut",
                    cancel: "Avboka"
                }
            },
            button: {
                change: "Byt prydnad",
                remove: "Ta bort dekoration",
                apply: "Tillämpas",
                cancel: "Avboka",
                browse: "Bläddra",
                submit: "Skicka in för granskning",
                continue: "Devam Et",
                back: "Gå tillbaka"
            },
            tooltip: {
                pendingReview: "Du har redan en prydnad under granskning",
                pending: "Väntar på granskning"
            },
            join: {
                tooltip: "Gå med i Decors Discord-server för att granska din dekoration och få meddelanden när nya förinställningar släpps",
                button: "Discord-server"
            },
            create: {
                title: "Skapa prydnad",
                notViolate: "Se till att din utsmyckning inte bryter mot {{riktlinjer}} innan du skickar in.",
                guidelines: "regler",
                file: "Filen måste vara APNG eller PNG.",
                fileHolder: "Välj en fil",
                name: "Detta namn kommer att användas när man hänvisar till denna prydnad.",
                nameHolder: "Companion Cube",
                nameTitle: "Ad"
            },
            help: {
                update: "Gå med i {{server}} och tillåt direktmeddelanden att få uppdateringar om din dekorationsrecension.",
                server: "Decor’un Discord"
            },
            guidelines: {
                hold: "vänta",
                suspended: "Genom att skicka in en dekoration godkänner du {{guidelines}}. Underlåtenhet att läsa dessa regler kan leda till att din rätt att skapa fler dekorationer i framtiden upphävs.",
                guidelines: "regler"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin för att ta temaskärmdumpar - censorer som identifierar bilder och text.",
            toolbox: {
                toggle: "censurerade"
            },
            keycode: "Kolla in {{keycode}} för att ändra din snabbtangent!",
            this: "av detta fordon",
            okay: "Okej!",
            option: {
                keyBind: {
                    label: "Snabbtangent",
                    description: "Knapp som slår på och av temat när du trycker på den"
                },
                soundVolume: {
                    label: "Ljudnivå",
                    description: "Volym av på/av-ljud (0 = av)"
                },
                showConfirmationModal: {
                    label: "Visa bekräftelsefönster",
                    description: "Visa fönster för att påminna genväg"
                }
            },
            switch: {
                note: "Du kan återaktivera den här inställningen senare",
                disable: "Inaktivera bekräftelsefönstret?"
            },
            shortcut: "Detta kommer att censurera alla texter! Kom ihåg genvägen för att inaktivera detta:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Plugin för utvecklareassistent. Om du ser något som inte fungerar eller fungerar konstigt (mest troligt en bugg) rapportera det till MutanPlex, antingen tagga eller dm det, tack!",
            reconnect: "Återanslut",
            option: {
                notifyOnAutoConnect: {
                    label: "Meddela på Auto-Connect",
                    description: "Visa avisering när Dev Companion ansluter automatiskt?"
                },
                usePatchedModule: {
                    label: "Använd patchmodul",
                    description: "För begäranden om borttagning, svara med den befintliga korrigerade modulen (om korrigerad) istället för originalet."
                },
                reloadAfterToggle: {
                    label: "Efter ominstallation",
                    description: "Installera om efter att ha mottagit kommandot disable/enable plugin."
                }
            },
            toast: {
                title: "Dev Companion ansluten",
                connected: "ansluten till WebSocket",
                disconnected: "Dev Companion frånkopplad",
                error: "Dev Companion-fel",
                reload: "Ominstallation krävs",
                failed: "Det gick inte att initiera beroenden: {{failures}}",
                close: "Kvartal",
                stopping: "Ett fel uppstod när plugin-programmet {{plugin}} skulle stoppas",
                starting: "Fel vid initialisering av plugin-programmet {{plugin}}",
                noMessage: "Inget felmeddelande",
                noReason: "Anledning ej angiven"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Inaktiverar att automatiskt kastas ut från DM-röstsamtalet efter 3 minuter och flyttas till AFK-röstkanalen."
        },
        disableCameras: {
            name: "Inaktivera kameror",
            description: "Inaktiverar kameror i samtal som standard"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Aktiverar Discord-utvecklarbannern som visar Build-ID-information.",
            about: "Discord Developer Banner-format. Du kan använda följande variabler:",
            preview: "Förhandsvisning:",
            empty: "Formatet får inte vara tomt.",
            variables: {
                discord: {
                    title: "Discord-variabler",
                    icon: "Discord ikon",
                    banner: "Utvecklare banner ikon",
                    channel: "Discord-byggkanal (t.ex. stabil)",
                    build: "Discord-byggnummer (t.ex. 123456)",
                    hash: "Discord build-hash (t.ex. 123456)"
                },
                plexcord: {
                    title: "Plexcord-variabler",
                    icon: "Plexcord ikon",
                    name: "Plexcord namn",
                    version: "Plexcord-version (t.ex. 1.0.0)",
                    hash: "Plexcord-strukturhash (t.ex. 123456)",
                    platform: "Plattform Plexcord körs på (t.ex. Dev Build)"
                },
                plextron: {
                    title: "Plextron anpassade variabler",
                    hashShort: "Plextron kort struktur hash (t.ex. 123456789)",
                    platformType: "Plattformstyp Plextron körs på (t.ex. Dev Build)"
                },
                client: {
                    title: "Klientvariabler",
                    icon: "skrivbordsikon",
                    name: "Klientnamn (t.ex. Discord Canary)",
                    version: "Klientversion (t.ex. 1.0.0)",
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
                    newline: "nyradstecken"
                }
            }
        },
        dontFilterMe: {
            name: "Filtrera mig inte",
            description: "Varnar dig om ditt meddelande innehåller en term som finns på redo-listan för automatisk moderering",
            alert: {
                title: "vänta ett ögonblick!",
                content: "Ditt meddelande innehåller en term som finns på listan för automatisk moderering. (Term '{{trigger}}')",
                content2: "Det finns en stor sannolikhet att ditt meddelande kommer att blockeras och bearbetas av en servermoderator.",
                confirm: "Skicka ändå",
                cancel: "Avboka"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Avrundar alltid relativa tidsstämplar nedåt så 7,6y blir 7y istället för 8y"
        },
        dragFavoriteEmotes: {
            name: "DragFavoritEmotes",
            description: "Lägger till dra-och-släpp-funktion för att ändra ordningen på favorit-emojis"
        },
        dragify: {
            name: "Dragify",
            description: "Dra och släpp användare, kanaler eller presentatörer till chatten för att lägga till omnämnanden eller inbjudningar.",
            option: {
                userOutput: {
                    label: "Användarutgång",
                    description: "Utgång för bortfall av användare.",
                    mention: "nämn inte",
                    id: "Användaridentitet (ID)"
                },
                channelOutput: {
                    label: "Kanalutgång",
                    description: "Kanalfrisläppningsutgång.",
                    mention: "#kanal Omnämnande",
                    link: "Kanalanslutning",
                },
                inviteExpireAfter: {
                    label: "Inbjudan varaktighet",
                    description: "Giltighetstiden för inbjudningslänken.",
                    never: "Aldrig",
                    thirtyMinutes: "30 minuter",
                    oneHour: "1 ögonblick",
                    sixHours: "6 ögonblick",
                    twelveHours: "12 ögonblick",
                    oneDay: "1 dag",
                    sevenDays: "7 dagar"
                },
                inviteMaxUses: {
                    label: "Maximalt antal användningar",
                    description: "Maximal användningsgräns för inbjudan.",
                    noLimit: "Inga gränser",
                    one: "1 Användning",
                    five: "5 Användning",
                    ten: "10 Användning",
                    twentyFive: "25 Användning",
                    fifty: "50 användningsområden",
                    hundred: "100 användningsområden"
                },
                inviteTemporaryMembership: {
                    label: "Tillhandahålla tillfälligt medlemskap",
                    description: "Den ger tillfälligt medlemskap till de inbjudna.",
                },
                reuseExistingInvites: {
                    label: "Återanvänd befintlig inbjudan",
                    description: "Den använder den befintliga inbjudan istället för att skapa en ny."
                },
                allowChatBodyDrop: {
                    label: "Tillåt Drop to Chat Body",
                    description: "Tillåter att släppa text direkt i chattområdet för att lägga till den."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify kunde inte utföra åtgärden.",
                },
                invite: {
                    created: "Inbjudan har skapats.",
                    unable: "Det gick inte att skapa inbjudan.",
                    noChannel: "Det finns inga tillgängliga kanaler för att skapa en inbjudan.",
                }
            },
            ghost: {
                user: "Användare",
                server: "Presentatör",
                dm: "Direktmeddelanden",
                badge: {
                    channel: "kanal",
                    thread: "titel",
                    voice: "ses",
                    forum: "forum",
                    media: "media",
                    announcement: "meddelande",
                    dm: "dm",
                    user: "användare",
                    server: "presentatör"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Markera och inspektera enkelt föremål.",
            modal: {
                recording: "Inspelning...",
                reset: "återställa"
            },
            option: {
                keybind: {
                    label: "Nyckeluppgift",
                    description: "Växla överstrykningspenna"
                },
                showClasses: {
                    label: "Visa klasser",
                    description: "Visar elementets CSS-klassnamn i verktygstipset"
                },
                showId: {
                    label: "Visa ID",
                    description: "Visar elementets ID-attribut i verktygstipset"
                },
                showFont: {
                    label: "Visa teckensnitt",
                    description: "Visar den beräknade teckensnittsfamiljen och storleken"
                },
                showPadding: {
                    label: "Visa stoppning",
                    description: "Visar elementets interna avståndsvärden"
                },
                showMargin: {
                    label: "Visa yttre marginal",
                    description: "Visar elementets yttre rymdvärden"
                },
                showBorderRadius: {
                    label: "Visa kantrundhet",
                    description: "Visar elementets kantradievärden"
                },
                showPosition: {
                    label: "Visa plats",
                    description: "Visar elementets CSS-positionstyp och z-indexvärde"
                },
                showDisplay: {
                    label: "Visa vy",
                    description: "Visar elementets vytyp tillsammans med dess flex- eller rutegenskaper"
                }
            },
            toast: {
                copied: {
                    color: "Färg kopierad till urklipp!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "När du lämnar ljudkanalen spelas ett ljud upp från ljudpanelen.",
            button: "Ställ in som globalt utgående ljud",
            toast: {
                failedToPlay: "Kristus nej! Något gick fel."
            },
            option: {
                soundGuildId: {
                    label: "Röstserveridentitet (ID)",
                    description: "Välj servern där ljudet finns.",
                    placeholder: "Välj en server..."
                },
                soundId: {
                    label: "Röstidentitet (ID)",
                    description: "Ange ID för ljudet du vill spela.",
                    placeholder: "Ange röst-ID..."
                }
            }
        },
        experiments: {
            name: "Experiment",
            description: "Ger tillgång till Experiment och andra funktioner endast för utvecklare i Discord!",
            modal: {
                about: {
                    title: "Mer information",
                    body: "Du kan öppna Discords utvecklarverktyg med {{key}}"
                },
                warning: {
                    title: "Uppmärksamhet!!",
                    body: "Experiment är ej släppta Discord-funktioner. De kanske inte fungerar, eller kan till och med skada din klient eller göra att ditt konto inaktiveras.",
                    notReponsible: "Använd bara experiment om du vet vad du gör. Plexcord ansvarar inte för skador som kan uppstå genom att aktivera experiment.",
                    useAtOwnRisk: "Om du inte vet vad ett experiment gör, ignorera det. Fråga oss inte vad de gör, det vet vi nog inte heller.",
                    serverSideFeatures: "Nej, du kan inte använda funktioner på serversidan som att markera rutan 'Skicka till klient'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Verktygsfältets utvecklarmeny",
                    description: "Ersätter hjälp(?) verktygsfältsknappen (överst till höger i chatten) med Discords utvecklarmeny"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Låter dig exportera meddelanden till filer - ett enda meddelande, alla meddelanden från en användare eller alla meddelanden från en kanal",
            option: {
                maxMessages: {
                    label: "Maximalt meddelande",
                    description: "Maximalt antal meddelanden att överföra (0 = obegränsat)"
                },
                includeAttachments: {
                    label: "Inkludera bilagor",
                    description: "Inkludera bifogad information i överföringar"
                },
                includeEmbeds: {
                    label: "Embedleri Dahil Et",
                    description: "Inkludera bädda in information i överföringar"
                },
                includeReactions: {
                    label: "Inkludera reaktioner",
                    description: "Inkludera reaktionsinformation i överföringar"
                },
                includeComponents: {
                    label: "Inkludera komponenter",
                    description: "Inkludera komponentinformation i importer"
                }
            },
            message: {
                invalid: "Ogiltigt meddelande - ingen författare",
                unknownUser: "Okänd användare",
                botEmbed: "Bot Bädda in meddelande",
                attachments: "bilagor",
                unknown: "Okänd",
                noUrl: "ingen URL",
                embeds: "Inbäddningsmaskin",
                title: "Titel",
                description: "Förklaring",
                url: "URL",
                footer: "Altbilgi",
                author: "Författare",
                fields: "Fält",
                components: "Komponenter",
                component: "Komponent",
                interactiveElement: "Interaktivt element",
                reactions: "Reaktioner",
                errorFormatting: "Fel vid formatering av meddelandet",
                unknownError: "okänt fel",
                header: "{{titlePrefix}} {{displayName}}, {{channelName}} kanalında",
                from: "Meddelanden -",
                direct: "Direktmeddelanden",
                exported: "Exportdatum",
                total: "Totalt antal meddelanden"
            },
            toast: {
                export: {
                    title: "Exportera meddelanden",
                    body: "Meddelandeexport misslyckades"
                },
                noMessages: {
                    title: "Exportera meddelanden",
                    notFoundUser: "Inga meddelanden hittades för denna användare",
                    notFoundChannel: "Inga meddelanden hittades i den här kanalen"
                },
                failed: {
                    title: "Exportera meddelanden",
                    body: "Ett fel uppstod vid export av meddelanden"
                },
                userNotFound: {
                    title: "Exportera meddelanden",
                    body: "Användaren hittades inte"
                },
                complete: {
                    title: "Exporten slutförd",
                    saved: "Filen sparad",
                    downloaded: "Fil nedladdad",
                    messages: "meddelande"
                }
            },
            context: {
                exportMessage: "Exportera detta meddelande",
                exportAll: "Exportera alla meddelanden från {{user}}",
                user: "Användare",
                exportAllChannel: "Exportera alla meddelanden från kanalen"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Låter dig klona emojis och klistermärken till din egen server (högerklicka)",
            modal: {
                title: "Egen substantiv",
                invalidName: "Namnet måste vara mellan 2 och 32 tecken och endast innehålla alfanumeriska tecken"
            },
            toast: {
                success: "{{name}} har klonats till {{guild}}-servern!",
                yourServer: "din server",
                failed: "Kloning misslyckades:",
                console: "Något gick fel (kolla konsolen!)"
            },
            context: {
                clone: "{{typ}} Klona",
                cloneName: "{{data}} Klona"
            }
        },
        f8break: {
            name: "F8 Break",
            description: "När DevTools (+ brytpunkter) är öppna pausar klienten genom att trycka på F8."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Låter dig skicka falska emojis/klistermärken, använda nitroteman och streama i nitrokvalitet",
            option: {
                enableEmojiBypass: {
                    label: "Aktivera Emoji Skip",
                    description: "Tillåter sändning av falska emoji (förbigår även bristen på behörighet att använda anpassad emoji)"
                },
                emojiSize: {
                    label: "Emoji storlek",
                    description: "Storlek att använda när du skickar emojis"
                },
                transformEmojis: {
                    label: "Förvandla emojis",
                    description: "Avgör om falska emojis kommer att konverteras till riktiga emojis"
                },
                enableStickerBypass: {
                    label: "Aktivera klistermärkeshopp",
                    description: "Tillåter sändning av falska klistermärken (förbigår även bristen på tillåtelse att använda klistermärken)"
                },
                stickerSize: {
                    label: "Klistermärkesstorlek",
                    description: "Storlek att använda när du skickar klistermärke"
                },
                transformStickers: {
                    label: "Konvertera klistermärken",
                    description: "Avgör om falska klistermärken kommer att omvandlas till riktiga klistermärken"
                },
                transformCompoundSentence: {
                    label: "Konvertera sammansatta meningar",
                    description: "Avgör om falska emoji och klistermärken i sammansatta meningar (meningar som innehåller mer innehåll än bara den falska emojin eller dekallänken) konverteras"
                },
                enableStreamQualityBypass: {
                    label: "Aktivera Hoppa över sändningskvalitet",
                    description: "Tillåter streaming i nitrokvalitet"
                },
                useStickerHyperLinks: {
                    label: "Använd Sticker Bridges",
                    description: "Avgör om en hyperlänk ska användas när du skickar falska klistermärken"
                },
                useEmojiHyperLinks: {
                    label: "Använd Emoji Bridges",
                    description: "Bestämmer om hyperlänkar ska användas när du skickar falska emojis"
                },
                hyperLinkText: {
                    label: "Hypertext",
                    description: "Texten som ska användas i hyperlänken. {{NAME}} kommer att ersättas med emoji-/dekalnamnet."
                },
                disableEmbedPermissionCheck: {
                    label: "Inaktivera kontroll av inbäddningsbehörighet",
                    description: "Avgör om kontroll av inbäddningsbehörighet ska inaktiveras när falska emojis och dekaler skickas"
                }
            },
            modal: {
                sticker: "Detta är ett FakeNitro-klistermärke och det ser ut som ett riktigt klistermärke bara för dig. Den visas som en länk för de som inte använder plugin.",
                emoji: "Det här är en FakeNitro-emoji och den ser ut som en riktig emoji bara för dig. Den visas som en länk för de som inte använder plugin."
            },
            alert: {
                notice: {
                    title: "Uppmärksamhet!",
                    body: "Du försöker skicka/redigera ett meddelande som innehåller en FakeNitro-emoji eller klistermärke, men du har inte behörighet att bädda in länkar i den här kanalen. Är du säker på att du vill skicka det här meddelandet? Dina FakeNitro-objekt visas endast som länkar.",
                    footer: "Du kan inaktivera denna varning i FakeNitro-inställningarna",
                    confirm: "Skicka ändå",
                    cancel: "Avboka",
                    secondaryConfirm: "Visa det inte igen"
                },
                apngSticker: {
                    title: "Uppmärksamhet!",
                    body: "Du kan inte skicka det här meddelandet eftersom det innehåller en animerad FakeNitro-dekal och du inte har behörighet att lägga till filer i den här kanalen. Du måste ta bort dekalen för att fortsätta."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Ger profiltema; Den lägger till dolda färger till bion tack vare den osynliga 3y3-kodningen.",
            button: {
                copy: "3y3 Kopiera"
            },
            modal: {
                usage: "Använda",
                preview: "Förhandsvisning",
                intro: "När du aktiverar detta plugin kommer du att se anpassade färger på profilerna för andra personer som använder kompatibla plugins.",
                setColor: "Så här ställer du in dina egna färger:",
                step1: "• välj dina färger med hjälp av färgväljarna nedan",
                step2: "• Klicka på knappen {{copy}}",
                step3: "• klistra in den osynliga texten var som helst i avsnittet Om",
                pickers: "Färgväljare",
                primary: "Primär",
                accent: "Betoning"
            },
            option: {
                nitroFirst: {
                    label: "Nitro först",
                    description: "Standardfärgkälla om båda är tillgängliga",
                    nitro: "Nitro färger",
                    fake: "falska färger"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Låter dig lägga till profilteman och profileffekter; Tack vare osynlig 3y3-kodning läggs dolda färger och effekter till i bion.",
            option: {
                prioritizeNitro: {
                    label: "Prioritera Nitro",
                    description: "Resurs att prioritera",
                    nitro: "Nitro",
                    aboutMe: "om mig"
                },
                hideBuilder: {
                    label: "Göm skapare",
                    description: "Göm FPTE Creator på inställningarna för användarprofil och serverprofil"
                }
            },
            modal: {
                primary: "Primär",
                accent: "Betoning",
                effect: "Effekt",
                usage: {
                    title: "Använda",
                    intro: "När du aktiverar detta plugin kommer du att se anpassade temafärger och effekter på profilerna för andra personer som använder detta plugin.",
                    setColor: "Så här ställer du in dina egna färger och effekter:",
                    step1: "Gå till profilinställningar",
                    step2: "Använd FPTE Creator för att välja profiltemafärger och effekt",
                    step3: "Klicka på knappen {{copy}}",
                    step4: "Klistra in osynlig text var du vill i din bio"
                }
            },
            toast: {
                copied: "FPTE kopierad till urklipp!",
                empty: "FPTE Generator är tom; Det finns inget att kopiera!"
            },
            button: {
                copyFPTE: "FPTE-kopia",
                reset: "återställa",
                preview: "FPTE Creator Preview",
                buildBackwards: "Skapa bakåtkompatibel FPTE",
                moreCharacters: "Fler tecken kommer att användas"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Lägger till en papperskorgsikon för att radera kanaler",
            option: {
                keyBind: {
                    label: "Snabbtangent",
                    description: "Nyckeln att använda för att öppna och stänga papperskorgen."
                },
                reqCtrl: {
                    label: "Ctrl-tangent krävs",
                    description: "Kräver att du håller ned Ctrl-tangenten för att öppna papperskorgen."
                },
                reqShift: {
                    label: "Skifttangent krävs",
                    description: "Att öppna papperskorgen kräver att du håller ned Skift-tangenten."
                },
                reqAlt: {
                    label: "Alt-tangent krävs",
                    description: "Att öppna papperskorgen kräver att du håller ned Alt-tangenten."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavoritemojiFirst",
            description: "Den placerar din favorit-emoji högst upp på emoji-autokompletteringslistan och ger även emoji-smeknamn.",
            option: {
                aliases: {
                    label: "Smeknamn",
                    description: "Hantera dina emoji smeknamn."
                },
                clearAll: {
                    label: "Rensa alla",
                    description: "Tar bort alla smeknamn."
                }
            },
            modal: {
                clear: {
                    title: "Ta bort alla alias",
                    description: "Detta tar bort alla emoji smeknamn som du har sparat.",
                    confirm: "Ta bort alla smeknamn"
                },
                set: {
                    title: "Ange smeknamn",
                    description: "Ange ett smeknamn för {{emoji}}",
                    placeholder: "Smeknamn, t.ex. 'Glad'",
                    save: "Spara",
                    error: "Dubblett smeknamn"
                }
            },
            toast: {
                set: "Smeknamn inställt för {{emoji}}",
                clearAll: "Alla emoji smeknamn raderade",
                failedDeleted: "Det gick inte att ta bort alias",
                removed: "Alias ​​för {{alias}} raderat",
                failedRemove: "Det gick inte att ta bort alias",
                duplicate: "Dubblett smeknamn",
                failedSave: "Smeknamn kunde inte registreras"
            },
            button: {
                edit: "Redigera smeknamn",
                set: "Ange smeknamn"
            }
        },
        favoriteGifSearch: {
            name: "FavoriteGifSearch",
            description: "Lägger till ett sökfält till favorit-GIF-filer.",
            placeholder: "Sök efter favorit-GIF-filer",
            option: {
                searchOption: {
                    label: "Sökalternativ",
                    description: "Vilken del av webbadressen du vill söka efter",
                    url: "Alla URL",
                    path: "Endast sökväg (/somegif.gif)",
                    hostandpath: "Värd och väg (tenor.com somegif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "Favorit Vad som helst",
            description: "Favorita vilken bild som helst"
        },
        fileDownloadButton: {
            name: "FileDownload Button",
            description: "Lägger till en nedladdningsknapp i det övre högra hörnet av filer"
        },
        findReply: {
            name: "FindReply",
            description: "Hoppar till det äldsta svaret på ett meddelande i en kanal (gör det lättare att hålla reda på tidigare konversationer).",
            context: {
                jump: "Gå till Svara"
            },
            toast: {
                navigate: "Använd den nedre panelen för att navigera genom svaren.",
                container: "Behållarelement hittades inte.",
                couldntFind: "Inget svarsmeddelande hittades."
            },
            option: {
                includePings: {
                    label: "Inkludera omnämnanden",
                    description: "Den söker också efter meddelanden som skickas direkt till författaren."
                },
                includeAuthor: {
                    label: "Inkludera författare",
                    description: "Söker efter svar inte bara på det specifika inlägget utan även till författaren i allmänhet"
                },
                hideButtonIfNoReply: {
                    label: "Dölj knapp om inget svar",
                    description: "Döljer knappen om det inte finns något svar på meddelandet"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Tar bort mellanslag mellan kodblock och texten under dem"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Åtgärdar filtillägg genom att byta namn på dem till ett kompatibelt format som stöds om möjligt"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Förbättrar kvaliteten på bilderna genom att tvinga fram originalkällan",
            option: {
                originalImagesInChat: {
                    label: "Visa originalbilder i chatt",
                    description: "Visa även originalbilden i Chat. VARNING: Läs varningarna ovan"
                }
            },
            modal: {
                about: {
                    title: "Standardbeteendet är som följer:",
                    body: "&mdash; Optimerade men fullupplösta bilder kommer att laddas i chatten.",
                    body2: "&mdash; I bildfönstret (bildmodal) kommer originalbilden att laddas.",
                    body3: "Du kan också aktivera originalbilden i chatten, men var medveten om följande varningar:",
                    warning: "&mdash; Animerade bilder (GIF, WebP, etc.) i chatten kommer alltid att vara animerade, även om applikationen har fokus.",
                    warning2: "&mdash; Det kan orsaka prestandaproblem."
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Fixar att Spotify-inbäddningar är för högljudda, låter dig anpassa volymen",
            option: {
                volume: {
                    label: "Ljudnivå",
                    description: "Volymprocent för att justera för Spotify-inbäddningar. Över 10 % skulle vara för högt"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Går förbi blockering av YouTube-videor från visning i Discord (t.ex. av UMG)"
        },
        followUser: {
            name: "Följ Användare",
            description: "Lägger till ett följningsalternativ till användarens snabbmeny; säkerställer att du alltid är på samma röstkanal",
            indicatorTooltip: "{{user}} följs (klicka för att utlösa manuellt, högerklicka för att sluta följa)",
            unknownUser: "Okänd användare",
            option: {
                executeOnFollow: {
                    label: "Ansök när du följer",
                    description: "När du följer en användare, se till att de är på samma röstkanal"
                },
                onlyManualTrigger: {
                    label: "Endast manuell utlösning",
                    description: "Utlösas endast när indikatorn klickas"
                },
                followLeave: {
                    label: "När följt lämnar",
                    description: "När den efterföljande användaren lämnar, lämna också"
                },
                autoMoveBack: {
                    label: "Auto Flytta tillbaka",
                    description: "Växla automatiskt tillbaka till den efterföljande användarens röstkanal när du flyttar"
                },
                followUserId: {
                    label: "Följt användar-ID",
                    description: "Följt användar-ID"
                },
                channelFull: {
                    label: "Kanalen är full",
                    description: "Om kanalen inte längre är full, försök att flytta dig dit"
                }
            },
            toast: {
                channelFull: "kanal full",
                newVc: "Följd användare bytte till en ny röstkanal",
                insufficientPermissions: "Otillräcklig behörighet för att komma in i röstkanalen",
                sameVc: "Du är redan på samma kanal",
                disconnect: "Följde användare vänster, frånkopplad",
                notFollowing: "Den följe användaren lämnade, men du slutade inte följa",
                notVc: "Följd användare finns inte på röstkanalen"
            },
            context: {
                follow: "Följa",
                unfollow: "Sluta följa"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Installerar alla typsnitt via Google Fonts",
            option: {
                selectedFont: {
                    label: "Valt teckensnitt",
                    description: "För närvarande valt typsnitt"
                },
                fontSearch: {
                    label: "Teckensnittssökning",
                    description: "Sök och välj typsnitt via Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Applicera på kodblock",
                    description: "Tillämpa teckensnitt på kodblock"
                }
            },
            toast: {
                failedLoad: "Det gick inte att läsa in teckensnitt"
            },
            modal: {
                settings: {
                    title: "Google Fonts'ta Ara",
                    description: "Välj ett teckensnitt att använda",
                    placeholder: "Sök teckensnitt...",
                    previewText: "Den pyjamasklädda patienten litade snabbt på den oljiga föraren",
                    authors: "av {{författare}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Även om servern är stor visar den med tvång serverns ägares krona bredvid användarnamn."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Om vidarebefordran misslyckas skickas meddelandet som ett normalt meddelande; Det tillåter också överföring av NSFW-innehåll.",
            option: {
                forwardPreface: {
                    label: "Vidarebefordran prefix",
                    description: "Vilket uttalande ska läggas till i början av det överförda meddelandet?"
                }
            },
            context: {
                attachments: "bilagor",
                forwarded: "Vidarebefordrat från:"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Kommandot /freaky låter dig skicka ditt meddelande i ett konstigt teckensnitt.",
            command: {
                freaky: "Det var konstigt.",
                message: "Skicka ditt meddelande i ett konstigt teckensnitt"
            },
            option: {
                addFreakyEnding: {
                    label: "Lägg till konstigt slut",
                    description: "Lägg till 👅 eller ❤️ i slutet"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frekvent snabbväxling",
            description: "Den ersätter och filtrerar resultaten i snabbväxlingsfönstret med de kanaler du använder oftast."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Lägger till ett /friendcloud-kommando för att visualisera de användare du interagerar mest med.",
            command: {
                friendcloud: {
                    description: "Visualisera ditt vänmoln",
                    count: "Antal användare att visa",
                    mustHigher: "Siffran måste vara 1 eller högre!",
                    noAffinities: "Inga närhetsdata hittades. Kontrollera dina [sekretessinställningar](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Inga giltiga användare hittades i proxyservrar. Kontrollera dina [sekretessinställningar](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Bilden kunde inte skapas :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Skapa vänkoder för att enkelt lägga till vänner",
            card: {
                expires: "Expiration: <t:{{expiration}}:R> • {{uses}}/{{maxUses}} användning",
                copy: "kopiera",
                copied: "Kopierade!",
                codes: "Dina vänskapskoder",
                count: "Vänkoder - {{invites}}",
                create: "Skapa vänskapskod",
                revoke: "Avbryt alla vänkoder",
                loading: "Belastning...",
                dontHave: "Du har inga vänkoder."
            }
        },
        friendInvites: {
            name: "Väninbjudningar",
            description: "Skapa och hantera länkar för väninbjudningar med Slash-kommandon (/skapa väninbjudan, /visa väninbjudningar, /återkalla väninbjudningar).",
            command: {
                create: {
                    description: "Genererar en väninbjudningslänk.",
                    message: "discord.gg/{{code}}`\n· Upphör att gälla: <t:{{expiration}}:R>\n· Maximal användning: {{uses}}"
                },
                view: {
                    description: "Visa alla skapade länkar för väninbjudningar.",
                    message: "_discord.gg/{{code}}_\n· Utgår: <t:{{expiration}}:R> \n· Antal användningar: {{uses}}/{{maxUses}}",
                    noInvites: "Du har inte en aktiv väninbjudningslänk."
                },
                revoke: {
                    description: "Avbryter alla väninbjudningslänkar som har skapats.",
                    message: "Alla väninbjudningslänkar har avbrutits."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Lägger till märken som visar hur länge du har varit vän med en användare.",
            badge: {
                sprout: {
                    name: "Gro",
                    description: "Din vänskap bara blommar ut."
                },
                blooming: {
                    name: "Blomning",
                    description: "Din vänskap förbättras! (1 månad)"
                },
                burning: {
                    name: "Flammande",
                    description: "Din vänskap har nått sin topp. (3 månader)"
                },
                fighter: {
                    name: "Kämpe",
                    description: "Din vänskap är stark. (6 månader)"
                },
                star: {
                    name: "Stjärna",
                    description: "Din vänskap har pågått länge. (1 år)"
                },
                royal: {
                    name: "Resultat",
                    description: "Din vänskap har övervunnit varje utmaning - 2 år!"
                },
                besties: {
                    name: "Bästa vän",
                    description: "Hur uppnår man detta??? (5 år)"
                }
            }
        },
        friendsSince: {
            name: "Vänner sedan",
            description: "Det visar när användaren är vän med någon i popup-fönstret.",
            section: "Dejting datum"
        },
        friendTags: {
            name: "FriendTags",
            description: "Genom att börja din sökning med & kan du filtrera efter anpassade taggar i snabbhoppsmenyn.",
            modal: {
                name: "Namn",
                users: "Användare (separera med kommatecken)",
                userlist: "Användarlista (Klicka på en användare för att ta bort)",
                remove: "Ta bort",
                add: "Tillägga",
                tag: "Biljett",
                removeFrom: "Ta bort från:",
                addTo: "Lägg till i:"
            },
            option: {
                tagConfiguration: {
                    label: "Taggkonfiguration",
                    description: "Taggkonfigurationskomponent"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Det gör meddelandekontextmenyn i meddelandesökresultat komplett med alla alternativ du kan förvänta dig."
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Lägger till ytterligare funktionalitet som vänster/högerklicka på användartaggen i chattrutan."
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Gör det möjligt för avatarer att täcka hela röstchattboxen.",
            option: {
                useServerProfileAvatars: {
                    label: "Använd serverprofilavatarer",
                    description: "Använder presentatörsprofilavatarer i röstchattrutor (om tillgängligt)"
                }
            }
        },
        gameActivityToggle: {
            name: "GameActivity Toggle",
            description: "Lägger till en switch till användarens popup för att visa eller dölja din spelaktivitet.",
            tooltip: "Ändra spelhändelse",
            gameActivity: {
                enabled: "Spelhändelse aktiverad",
                disabled: "Spelhändelse inaktiverad"
            },
            option: {
                oldIcon: {
                    label: "gammal ikon",
                    description: "Använd gammal ikonstil innan Discord-ikonen görs om"
                },
                location: {
                    label: "Kvinnor",
                    description: "Var ska du visa spelhändelsnyckeln",
                    panel: "Bredvid Mute/Mic Off",
                    toolbox: "Plexcord i verktygslådan"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Ett gulligt spöke dyker upp bredvid personer vars DM du inte har svarat på.",
            modal: {
                title: "Spökade användare",
                no: "Inga spökade användare",
                unghost: "ta bort spöket",
                unknown: "okänd",
                unnamedGroup: "Anonym grupp",
                unknownUser: "Okänd användare",
                clearAll: "Rensa alla",
                noGhost: "Det finns inga spöken här!",
                clear: "rensa"
            },
            option: {
                showIndicator: {
                    label: "Visa indikator",
                    description: "Visar spökräknaren överst i serverlistan."
                },
                showDmIcons: {
                    label: "Visa DM-ikoner",
                    description: "Visar spökikoner bredvid individuella DM."
                },
                ignoreGroupDms: {
                    label: "Ignorera grupp-DM",
                    description: "Håller alla gruppmeddelanden borta från spöklistan."
                },
                exemptedChannels: {
                    label: "Undantagna kanaler",
                    description: "Kommaseparerad lista över kanal-ID:n (ID) som inte kommer att inkluderas i spöklistan (högerklicka på en DM-kanal för att kopiera ID:n)."
                },
                ignoreBots: {
                    label: "Ignorera bots",
                    description: "Ignorerar DM från bots."
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Låter dig skapa GIF-samlingar.",
            context: {
                copyImageLink: "Kopiera bildlänk",
                copyUrl: "Kopiera URL",
                collection: {
                    add: "Lägg till i samlingen",
                    gif: "GIF-samlingar",
                    delete: "Ta bort samling",
                    create: "Skapa samling",
                    remove: "Ta bort",
                    information: "Samlingsinformation",
                    name: "Namn",
                    gifs: "Slag",
                    created: "Skapandedatum",
                    updated: "Senaste uppdatering",
                    close: "Kvartal",
                    rename: "Döpa om",
                    move: "Flytta till samling",
                    select: "Välj den samling som ska flyttas"
                },
                gif: {
                    information: "Information",
                    added: "Datum tillagt",
                    width: "Bredd",
                    height: "Höjd",
                    close: "Kvartal"
                }
            },
            option: {
                itemPrefix: {
                    label: "Artikelprefix",
                    description: "Prefix för GIF-element"
                },
                collectionPrefix: {
                    label: "Samlingsprefix",
                    description: "Prefix för samlingar"
                },
                onlyShowCollections: {
                    label: "Visa endast samlingar",
                    description: "Visa endast samlingar"
                },
                stopWarnings: {
                    label: "Stoppa varningar",
                    description: "Stoppa raderingsvarningar"
                },
                showCopyImageLink: {
                    label: "Visa alternativet Kopiera bildlänk",
                    description: "Visa {{copyImageLink}} i snabbmenyer"
                },
                preventDuplicates: {
                    label: "Förhindra återfall",
                    description: "Förhindra att samma GIF läggs till i en samling flera gånger"
                },
                defaultEmptyCollectionImage: {
                    label: "Standard tom samlingsbild",
                    description: "Bild/GIF för att visa när det inte finns några bilder/GIF i samlingen"
                },
                collectionsSortType: {
                    label: "Sorteringstyp för samling",
                    description: "Sorteringstyp av samlingar"
                },
                collectionsSortOrder: {
                    label: "Sorteringsordning för samling",
                    description: "Sorteringsordning på samlingar"
                },
                collectionsSort: {
                    label: "Sortera samlingar",
                    description: "Bestäm hur samlingar ska sorteras",
                    title: "Sortera samlingar",
                    sortDescription: "Välj en sortering efter dina samlingar",
                    sortBy: "Sortera efter",
                    name: "Namn",
                    creationDate: "Skapandedatum",
                    modifiedDate: "Ändrat datum",
                    ascending: "Växande",
                    descending: "Minskar"
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
                    description: "Återställ samlingar till standardvärden (tar bort alla samlingar)",
                    button: "Återställ samlingar"
                }
            },
            toast: {
                copied: "Bildlänk kopierad till urklipp!",
                urlCopied: "URL kopierad till urklipp!",
                already: "Den här samlingen finns redan",
                alreadyCollection: "Denna GIF finns redan i samlingen"
            },
            modal: {
                create: {
                    title: "Skapa samling",
                    name: "Samlingens namn",
                    create: "Skapa"
                },
                rename: {
                    title: "Byt namn på samlingen",
                    name: "Nytt samlingsnamn",
                    warning: "Namnet får inte vara längre än 24 tecken",
                    rename: "Döpa om"
                }
            },
            alert: {
                import: {
                    title: "Är du säker?",
                    body: "Att importera samlingar skriver över befintliga samlingar.",
                    confirm: "Iche Aktar",
                    cancel: "Avboka"
                },
                reset: {
                    title: "Är du säker?",
                    body: "Om du återställer samlingar tas alla samlingar bort.",
                    confirm: "återställa",
                    cancel: "Avboka"
                },
                delete: {
                    title: "Är du säker?",
                    deleteBody: "Vill du verkligen ta bort den här samlingen?",
                    removeBody: "Vill du verkligen ta bort det här objektet?",
                    confirm: "Sil",
                    remove: "Ta bort",
                    cancel: "Avboka"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Det låter dig klistra in GIF-filer direkt i chattrutan."
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Lägger till ett kommando som skickar en slumpmässig GIF från dina favoriter; Det finns 10 % chans att tagga serverägaren!",
            command: {
                gifRoulette: {
                    description: "Prova lyckan och skicka en slumpmässig GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Chans att tagga serverägaren",
                    description: "Ställer in chansen att tagga serverägaren till 1 av 10 (yikes!)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Visar användarens offentliga GitHub-förråd på sin profil.",
            loading: "Lagrar laddas...",
            option: {
                showStars: {
                    label: "Visa stjärnorna",
                    description: "Visa lagerstjärnor"
                },
                showLanguage: {
                    label: "Visa språk",
                    description: "Visa huvudprogrammeringsspråket för repositories"
                },
                showInMiniProfile: {
                    label: "Visa i miniprofil",
                    description: "Visa förråd i miniprofilfönster"
                },
                showRepositoryTab: {
                    label: "Visa arkivfliken",
                    description: "Visa arkivfliken i profilmodal (dölj knapp på länkar när den är aktiverad)"
                }
            },
            error: {
                error: "Även",
                render: "Fel: GithubRepos kunde inte visas"
            },
            button: {
                show: "Visa GitHub-förråd",
                repositories: "GitHub Repositories",
                more: "Visa mer",
                only: "Visar bara de bästa {{length}}/{{total}}"
            },
            modal: {
                title: "{{user}}s GitHub-förråd",
                repository: "Depo",
                description: "Förklaring",
                language: "Dil",
                stars: "Stjärna",
                viewOnGitHub: "Visa på GitHub",
                close: "Kvartal"
            }
        },
        googleThat: {
            name: "Googla det",
            description: "Lägger till ett kommando som låter dig skicka en internetsökningsanslutning.",
            command: {
                googleThat: {
                    description: "Skicka in en sökmotorlänk",
                    query: "sökfråga"
                }
            },
            option: {
                hyperlink: {
                    label: "Bro",
                    description: "Om den skickade länken kommer att skickas som en hyperlänk med frågetaggen"
                },
                embed: {
                    label: "Inbäddat innehåll",
                    description: "Om den skickade länken ska visas som inbäddat innehåll"
                },
                defaultEngine: {
                    label: "Standardsökmotor",
                    description: "Sökmotor att använda"
                },
                customEngineURL: {
                    label: "URL för anpassad sökmotor",
                    description: "URL till sökmotorn du vill använda"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "\"Vina och säg hej!\" Genom att högerklicka på knappen kan du använda välkomstetiketten du vill ha istället för den slumpmässiga.",
            mode: {
                greet: "Hej",
                message: "Meddelande"
            },
            option: {
                greetMode: {
                    label: "Hälsningsläge",
                    description: "Välj hälsningsläge",
                    greet: "Hälsning (du kan bara skicka hälsning 3 gånger)",
                    message: "Meddelande (du kan skicka obegränsade hälsningar)"
                }
            },
            context: {
                label: "Hälsningsdekalväljare",
                mode: "Hälsningsläge",
                stickers: "Hälsning klistermärken",
                multi: "Flera hälsningar",
                send: "Skicka hej"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Lägger till en snabbmeny som låter dig exportera och ladda ner en servers emoji och klistermärken.",
            context: {
                download: {
                    emoji: "Ladda ner emojis",
                    sticker: "Ladda ner klistermärken"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Lägger till servertaggarinställningar, som att dölja servertaggar eller inaktivera uppmaningen att använda taggar.",
            option: {
                hideTags: {
                    label: "Dölj taggar",
                    description: "Gör servertaggar osynliga"
                },
                disableAdoptTagPrompt: {
                    label: "Stäng Tag Claim Warning",
                    description: "Inaktiverar uppmaningen att använda (anspråka) servertaggen"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Låter dig dölja chattknappar.",
            tooltip: {
                close: "Kvartal",
                open: "Hungrig"
            },
            option: {
                color: {
                    label: "Färg",
                    description: "Visas i rött när den är på"
                },
                open: {
                    label: "Öppna",
                    description: "På som standard"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Det låter dig dölja bilagor och inbäddat innehåll i vissa meddelanden med en knapp som visas när du håller muspekaren över.",
            show: "Visa media",
            hide: "Dölj media",
            hidden: "Media dolda"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Döljer meddelanden tillfälligt tills du startar om.",
            button: {
                hide: "dölja"
            },
            option: {
                hidePopoverButton: {
                    label: "Dölj popover-knappen",
                    description: "Döljer knappen dölj i meddelandefönstret."
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
                    label: "Visa indikatorer",
                    description: "Visa menyn längst ner för att visa dolda servrar i listan"
                },
                guildsList: {
                    label: "Serverlista",
                    description: "Ta bort dolda servrar"
                },
                resetHidden: {
                    label: "Återställ dolda servrar",
                    description: "Ta bort alla dolda servrar från listan",
                    button: "Återställ dolda servrar"
                }
            },
            button: {
                hidden: "Dold",
                hiddenServers: "Dolda servrar",
                remove: "Ta bort",
                folder: "Mapp",
                removeAll: "Ta bort alla",
                guilds: "Servrar",
                noHiddenServers: "Inga dolda servrar"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes låter dig spara meddelanden",
            main: "Väl",
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
                deleteNote: "Notu Sil",
                moveNote: "Flytta anteckning",
                moveTo: "Flytta till {{key}}",
                copyId: "Kopiera ID"
            },
            modal: {
                error: {
                    generic: "Ett fel uppstod när dina betyg bearbetades. Kontrollera konsolen för detaljer.",
                    easter: "Inga anteckningar hittades. Empati banan är med dig.",
                    empty: "Det finns inga anteckningar sparade i den här anteckningsboken."
                },
                help: {
                    title: "Hjälp",
                    description: "Lär dig hur du använder heliga anteckningar",
                    addingNotes: "Lägga till anteckningar",
                    addingNotesText: "För att lägga till en anteckning, högerklicka på ett meddelande, peka på \"Anteckningsmeddelande\" och välj den anteckningsbok du vill lägga till anteckningen i.",
                    prototype: "Prototyp",
                    noteMessage: "Ett klick på knappen 'Notera meddelande' lägger till det i huvudboken som standard!",
                    deletingNotes: "Inte Silme",
                    deletingNotesText: "För att radera en anteckning kan du högerklicka och välja 'Radera anteckning' eller hålla ned 'DELETE'-tangenten på ditt tangentbord och klicka på anteckningen.",
                    movingNotes: "Flytta en anteckning",
                    movingNotesText: "För att flytta en anteckning, högerklicka och välj den anteckningsbok du vill flytta från alternativet \"Flytta anteckning\".",
                    jumpToMessage: "Gå till meddelande",
                    jumpToMessageText: "För att gå till meddelandet som en anteckning tillhör, högerklicka på anteckningen och välj \"Gå till meddelande\"."
                },
                notebook: {
                    title: "ANTECKNINGSBOK",
                    search: "Sök efter ett meddelande...",
                    options: "Sorteringsalternativ",
                    label: "Sorteringsmeny",
                    filteredOf: "{{filteredCount}}/{{noteCount}} inte",
                    note: "{{noteCount}} inte",
                    ada: "Stigande/tillagt datum",
                    amd: "Stigande/meddelandedatum",
                    dda: "Fallande/tillagt datum",
                    dmd: "Fallande / meddelandedatum",
                    change: "Ändra sortering",
                    ascending: "Växande",
                    descending: "Minskar",
                    dateAdded: "Tillagt datum",
                    messageDate: "Meddelandedatum"
                },
                create: {
                    title: "Skapa anteckningsbok",
                    description: "Ange namnet på den nya anteckningsboken",
                    placeholder: "Anteckningsbokens namn"
                },
                delete: {
                    title: "{{notebookName}} Silinsin Mi?",
                    description: "{{noteCount}} anteckning kommer att raderas permanent",
                    button: "Sil"
                },
                tabs: {
                    label: "Anteckningsbok flikar"
                }
            },
            toast: {
                saved: "Meddelandet har lagts till i {{anteckningsbok}}.",
                deleted: "Anteckningen har raderats från {{anteckningsbok}}.",
                moved: "Anteckningen har flyttats från {{from}}-anteckningsboken till {{to}}-anteckningsboken.",
                exists: "Anteckningsbok med namnet {{notebookName}} finns redan.",
                created: "{{notebookName}} har skapats.",
                deletedNotebook: "{{notebookName}} har raderats.",
                refreshed: "Avatarer har uppdaterats framgångsrikt.",
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
            description: "Om någon skriver i dina DM:s förvandlar det hemknappen till en skrivindikator."
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
                    special: "speciellt tack"
                }
            },
            context: {
                icon: {
                    options: "Ikon Alternativ",
                    log: "Skriv ut till konsol (logg)",
                    save: "Spara som...",
                    rightClick: "Högerklicka på ikonen för att ersätta",
                    usage: "Använda",
                    click: "Klicka för att kopiera",
                    copied: "Kopierade!",
                    actions: "Åtgärder"
                }
            },
            modal: {
                label: "Sök efter funktionskontext",
                search: "Sök inom {{count}} symboler...",
                function: "Fungera",
                iconViewer: {
                    colors: "Icon Viewer färger",
                    unknown: "okänd",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Den startar automatiskt om appen när du är inaktiv under en viss tid, men förhindrar omstart när du är i ljudkanalen.",
            option: {
                isEnabled: {
                    label: "Effektiv",
                    description: "Aktiverar automatisk omstart efter tomgång"
                },
                idleMinutes: {
                    label: "Inaktiv tid (minuter)",
                    description: "Tid för inaktivitet innan omstart (inte på ljudkanal)"
                }
            },
            toolbox: {
                disable: "Inaktivera automatisk omstart",
                enable: "Aktivera automatisk omstart"
            }
        },
        ignoreActivities: {
            name: "Ignorera aktiviteter",
            description: "Förhindrar att händelser endast visas i staten. Du kan ange vilka som ska ignoreras på flikarna Sparade spel och evenemang, eller använd de allmänna inställningarna nedan.",
            modal: {
                import: {
                    title: "Importera CustomRPC-plugins app-ID till filterlistan"
                },
                filter: {
                    title: "Filterlista",
                    description: "Kommaseparerad lista över händelse-ID att filtrera (användbart för att filtrera specifika RPC-händelser och CustomRPC)"
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
                    label: "CustomRPC'yi Mer"
                },
                listMode: {
                    label: "Listläge",
                    description: "Välj hur du vill använda filterlistan",
                    blacklist: "Svartlista (Ignorera bara de på listan)",
                    whitelist: "Vit lista (Ignorera alla utom de i listan)"
                },
                idList: {
                    label: "ID-lista"
                },
                ignorePlaying: {
                    label: "Ignorera vad som spelas",
                    description: "Ignorera alla spelade händelser (vanligtvis spel- och RPC-händelser)"
                },
                ignoreStreaming: {
                    label: "Ignorera inlägg",
                    description: "Ignorera alla sändningshändelser"
                },
                ignoreListening: {
                    label: "Ignorera lyssnare",
                    description: "Ignorera alla lyssningshändelser (vanligtvis Spotify-händelser)"
                },
                ignoreWatching: {
                    label: "Ignorera Visat",
                    description: "Ignorera alla spårningshändelser"
                },
                ignoreCompeting: {
                    label: "Ignorera tävlingsevenemang",
                    description: "Ignorera alla tävlingsevenemang (vanligtvis anpassade spelhändelser)"
                },
                ignoredActivities: {
                    label: "Ignorerade händelser"
                }
            }
        },
        ignoreCalls: {
            name: "Ignorera samtal",
            description: "Låter dig ignorera samtal från specifika användare eller DM-grupper.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Permanent ignorerade användare",
                    description: "Användar-ID (virgül + boşluk) som ska ignoreras permanent"
                }
            },
            button: {
                ignore: "Yoksay",
                temporarilyIgnore: "Ignorera tillfälligt",
                permanentlyIgnore: "Ignorera permanent"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Döljer meddelanden från \"potentiella spammare\"."
        },
        imageFilename: {
            name: "Bildfilnamn",
            description: "Visar filnamnet som ett verktygstips när du håller muspekaren över bilder och GIF-filer.",
            option: {
                showFullUrl: {
                    label: "Visa fullständig URL",
                    description: "Den visar bildens fullständiga URL istället för bara filnamnet. Det är alltid aktiverat för GIF-filer eftersom de vanligtvis inte har ett meningsfullt filnamn."
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Den döljer aldrig visuella länkar, även om det bara finns en bildlänk i meddelandena."
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Det låter dig zooma in på bilder och GIF, samt se bildmetadata. Zooma in med mushjulet, öka linsradien med Shift + mushjul.",
            option: {
                saveZoomValues: {
                    label: "Spara zoomvärden",
                    description: "Bestämmer om zoom- och objektivstorleksvärden sparas"
                },
                invertScroll: {
                    label: "Omvänd rullning",
                    description: "Vänder om musens rullningsriktning"
                },
                nearestNeighbour: {
                    label: "Närmaste granne",
                    description: "Använder närmaste granne-interpolation vid skalning av bilder"
                },
                square: {
                    label: "Skydda",
                    description: "Förvandlar linsen till en fyrkantig form"
                },
                zoom: {
                    label: "Zoom",
                    description: "Zoomförhållande för objektivet"
                },
                size: {
                    label: "Dimensionera",
                    description: "Linsradie/storlek"
                },
                zoomSpeed: {
                    label: "Zoomhastighet",
                    description: "Bestämmer hastigheten för förändring av zoom/objektivstorlek"
                },
                showMetadata: {
                    label: "Visa metadata",
                    description: "Visar metadata när du dubbelklickar på den valda bilden"
                }
            },
            context: {
                square: "Fyrkantig lins",
                nearest: "Pixelerad förstoring",
                zoom: "Zoom",
                size: "Linsstorlek",
                zoomSpeed: "Zoomhastighet",
                showImageMetadata: "Visa bildmetadata",
                view: "Visa metadata",
                loading: "Belastning...",
                unknown: "okänd",
                sizeHTML: "Dimensionera",
                dimensions: "Mått",
                filename: "Filnamn"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Lägger till /imgtogif-kommandot för att konvertera alla bilder till GIF",
            command: {
                imgToGif: {
                    description: "Låter dig konvertera en bild till GIF",
                    image: "Visuell fäste att använda",
                    width: "GIF-bredd",
                    height: "gif höjd"
                }
            },
            error: {
                noImage: "Ingen bild specificerad!",
                notImage: "Den uppladdade filen är inte en bild"
            }
        },
        implicitRelationships: {
            name: "Implicita relationer",
            description: "Visar dina indirekta relationer på fliken Vänner.",
            option: {
                sortByAffinity: {
                    label: "Sortera efter närhet",
                    description: "Avgör om indirekta relationer sorteras efter deras närhet till dig."
                }
            },
            implicit: "Indirekt"
        },
        inRole: {
            name: "InRole",
            description: "Ta reda på vem som har en roll med hjälp av rollkontextmenyn eller /inrole-kommandot (läs plugininfo!)",
            command: {
                inrole: {
                    description: "Ta reda på vem som har en roll",
                    role: "Roll",
                    noGuild: "Se till att du är på en server."
                }
            },
            context: {
                view: "Visa medlemmar i roll"
            },
            modal: {
                about: {
                    title: "Begränsningar",
                    description: "Om du inte har modereringsbehörighet på servern och servern är stor (mer än 100 medlemmar) kan plugin-programmet begränsas på följande sätt:",
                    list: {
                        one: "Medlemmar offline kommer inte att listas",
                        two: "Som standard kommer maximalt 100 medlemmar att listas. Scrolla ner i medlemslistan för att se fler medlemmar.",
                        three: "Men dina vänner kommer alltid att visas oavsett deras status."
                    }
                },
                member: {
                    title: "Medlemmar i rollen",
                    noMembers: "Inga onlinecachade medlemmar med den här rollen hittades. Försök att scrolla ner i medlemslistan för att cachelagra fler användare!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "När du går med i en ljudkanal låter den dig omedelbart dela skärmen med stöd för skrivbordskällor, fönster och videoingångsenheter (kameror, inspelningskort).",
            modal: {
                linux: {
                    title: "För Linux",
                    body: "Om du använder Wayland aktiveras bara alternativet för skärmdelning.",
                    bodyTwo: "Det kanske fungerar eller inte fungerar för X11 :shrug:"
                },
                videoDevices: {
                    title: "Videoingångsenheter",
                    body: "Stöder kameror och inspelningskort (t.ex. Elgato HD60X) när de är aktiverade i inställningarna."
                },
                regardingSound: {
                    title: "Om ljud- och förhandsgranskningsinställningar",
                    body: "Vi använder samma inställningar som Discord använder för att förhandsgranska strömmen och besluta om ljud ska aktiveras."
                }
            },
            option: {
                streamMedia: {
                    label: "Mediekälla kommer att släppas",
                    description: "Om den inte hittas återställs den till huvudskärmen.",
                    loading: "Laddar mediekällor...",
                    none: "Inga mediekällor hittades",
                    placeholder: "Välj en mediekälla att publicera"
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
                    description: "Automatiskt döva när du går med i en röstkanal (den tystar dig också)"
                },
                instantScreenshare: {
                    label: "Omedelbar skärmdelning",
                    description: "Aktiverar funktionen för automatisk skärmdelning"
                },
                keybindScreenshare: {
                    label: "Skärmdelning med snabbtangent",
                    description: "Delar skärm med snabbtangent i Discord-snabbtangentinställningar"
                },
                focusDiscord: {
                    label: "Fokus på Discord",
                    description: "Starta skärmdelning med tangentbindning endast när Discord har fokus"
                },
                toolboxManagement: {
                    label: "Verktygslådanhantering",
                    description: "Aktivera/inaktivera Instant Screen Sharing"
                }
            },
            toolbox: {
                label: "Omedelbar skärmdelning",
                toast: "Direkt skärmdelning {{state}}",
                enabled: "Effektiv",
                disabled: "Inaktiverad"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Kryptera dina meddelanden utan att väcka misstankar!",
            option: {
                savedPasswords: {
                    label: "Sparade lösenord",
                    description: "Sparade lösenord (kommaseparerade)"
                }
            },
            button: {
                encrypt: "Kryptera meddelande",
                decrypt: "Dechiffrera meddelandet",
                hidden: "Hidden Message Indicator (InvisibleChat)"
            },
            tooltip: {
                hidden: "Det finns ett dolt meddelande i detta meddelande! (InvisibleChat)"
            },
            embed: {
                title: "Dekrypterat meddelande",
                footer: "Skickat via InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Kryptera meddelande",
                    secret: "Hemligt meddelande",
                    cover: "Omslag (2 eller fler ord!!)",
                    password: "Lösenord",
                    dontUseCover: "Använda ett lock",
                    send: "Skicka",
                    cancel: "Avboka"
                },
                decrypt: {
                    title: "Dechiffrera meddelandet",
                    with: "Krypterat meddelande",
                    password: "Lösenord",
                    decrypt: "Dechiffrera",
                    cancel: "Avboka"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Låter dig redigera standardvärden när du skapar serverinbjudningar.",
            option: {
                inviteDuration: {
                    label: "Inbjudan varaktighet",
                    description: "Standardvaraktighet för serverinbjudningar",
                    thirtyMinutes: "30 minuter",
                    oneHour: "1 ögonblick",
                    sixHours: "6 ögonblick",
                    twelveHours: "12 ögonblick",
                    oneDay: "1 dag",
                    sevenDays: "7 dagar",
                    forever: "Obestämd"
                },
                maxUses: {
                    label: "Maximal användning",
                    description: "Standard maximal användning för serverinbjudningar",
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
                    description: "Standardinställning för tillfälligt medlemskap för serverinbjudningar"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Gör färgerna på användarnamn i chatten unika, som i IRC-klienter.",
            option: {
                lightness: {
                    label: "Ljus",
                    description: "Ljusstyrka (%). Om färgerna verkar för ljusa eller mörka, ändra dem."
                },
                memberListColors: {
                    label: "Medlemslista Färger",
                    description: "Ändra rollfärger i medlemslistan."
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Använd endast för användare utan färg",
                    description: "Tillämpa färg på användare vars färg inte är fördefinierad."
                },
                applyColorOnlyInDms: {
                    label: "Ansök endast i privata meddelanden",
                    description: "Tillämpa färger endast på privata meddelanden; applikation på servrar."
                }
            }
        },
        iRememberYou: {
            name: "Jag kommer ihåg dig",
            description: "Den registrerar lokalt alla du kommunicerar med (inklusive servrar), vilket skyddar mot förlust.",
            section: {
                description: "Den visar listan över ägarna till servrarna du nämnde, svarade på, är medlemmar av (serverägare*) eller medlemmarna på servrarna du är på.",
                empty: "För närvarande tomt.",
                tooltip: "{{user}} uppdaterad på {{updatedAtContent}}",
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
                title: "Regulator",
                filter: "Filtrera efter tagg, användarnamn eller ID",
                button: {
                    validate: "Verifiera och spara",
                    cancel: "Avboka",
                    openEditor: "Öppna Editor",
                    resetData: "Återställ data",
                    sure: "Är du säker?"
                }
            }
        },
        jumpTo: {
            name: "Hoppa till",
            description: "Lägger till alternativ i högerklicksmenyn för att hoppa till början eller slutet av en kanal eller ett privat meddelande.",
            context: {
                top: "Gå till första inlägget",
                bottom: "Gå till Senaste inlägget",
                noMessages: "Inga meddelanden hittades från denna användare i den här kanalen.",
                searchFailed: "Ett fel uppstod vid sökning efter meddelanden."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "När du byter konto eller laddar Discord försöker den återgå till kanalen du var på."
        },
        keyboardSounds: {
            name: "Tangentbordsljud",
            description: "OperaGX eller osu när du skriver med tangentbordet! Lägger till ljudeffekter.",
            option: {
                volume: {
                    label: "Ljudnivå",
                    description: "Volym på tangentbordet"
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
            name: "Keyword Notify",
            description: "Skickar aviseringar om meddelanden som matchar vissa nyckelord eller regexuttryck.",
            idHolder: "ID",
            keywordEntry: "Nyckelordsinmatning",
            regexHolder: "exempel|regex",
            ignoreCase: "Skiftlägesokänslig",
            whiteblackLabel: "White List / Black List",
            tab: {
                title: "Nyckelord",
                clearAll: "Rensa alla"
            },
            button: {
                addId: "ID Ekle",
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
                    label: "Belopp att spara",
                    description: "Antal meddelanden att behålla i loggen"
                },
                keywords: {
                    label: "Nyckelord",
                    description: "Hantera sökord"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Lägger till en sista online-indikator under användarnamn i din DM-lista, server- och grupp-DM-medlemslistor.",
            unit: {
                d: "dag",
                h: "ögonblick",
                m: "minuter"
            },
            online: "{{formattedTime}} var online tidigare"
        },
        listenBrainzRPC: {
            name: "Lyssna BrainzRPC",
            description: "ListenBrainz är ett litet plugin för rik närvaro.",
            about: {
                title: "Om MusicBrainz API",
                description: "MusicBrainz API kräver ingen API-nyckel, men det kräver en {{länk}}. För de flesta användare räcker det med en e-postadress.",
                userAgent: "en meningsfull user-agent-sträng"
            },
            option: {
                username: {
                    label: "Användarnamn",
                    description: "ListenBrainz användarnamn"
                },
                mbContact: {
                    label: "MB kontakt",
                    description: "ListenBrainz kontaktinformation"
                },
                shareUsername: {
                    label: "Dela användarnamn",
                    description: "Visa ListenBrainz profillänk (endast synlig för andra användare)"
                },
                shareSong: {
                    label: "Dela låten",
                    description: "Visa länk till aktuell låt på ListenBrainz (endast synlig för andra användare)"
                },
                hideWithSpotify: {
                    label: "Göm medan Spotify är aktivt",
                    description: "Dölj ListenBrainz-status om Spotify körs"
                },
                hideWithActivity: {
                    label: "Dölj om det finns andra händelser",
                    description: "Dölj ListenBrainz-status om du har en annan status"
                },
                useTimeBar: {
                    label: "Använd Time Bar",
                    description: "Visa spårets längd som tidsfält (lyssningsstatus måste användas)"
                },
                statusName: {
                    label: "Status Namn",
                    description: "Undantagstext"
                },
                nameFormat: {
                    label: "Namnformat",
                    description: "Hur man visar låt och artistnamn i statusnamn",
                    custom: "Använd anpassad statustext",
                    artistSong: "använd \"artist - sång\"-format",
                    songArtist: "använd formatet \"låt - artist\".",
                    artistOnly: "Använd bara artistnamnet",
                    songOnly: "Använd bara låtens namn",
                    albumName: "Använd albumnamn (returerar undantagstext om låten inte har ett album)"
                },
                useListeningStatus: {
                    label: "Använd Lyssningsstatus",
                    description: "Visa \"Lyssnar\"-status istället för \"Spelar\""
                },
                missingArt: {
                    label: "Omslagsbild saknas",
                    description: "När albumet eller albumomslaget saknas",
                    listenbrainzLogo: "Använd den stora ListenBrainz-logotypen",
                    generic: "Använd en allmän platshållare"
                },
                useLogo: {
                    label: "Kullan logotyp",
                    description: "Visa ListenBrainz logotyp på skivomslaget"
                }
            }
        },
        loadingQuotes: {
            name: "Laddar citat",
            description: "Ändrar Discords laddningscitat",
            option: {
                replaceEvents: {
                    label: "Ändra händelser",
                    description: "Bör detta plugin också tillämpas under evenemang med speciella evenemangstema citat? (t.ex. Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Aktivera plugin-citat",
                    description: "Aktivera offerter som utarbetats av detta plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Aktivera Discord-citat",
                    description: "Aktivera Discord-bearbetade citat (inklusive evenemangscitat, under evenemang)"
                },
                additionalQuotes: {
                    label: "Ytterligare citat",
                    description: "Ytterligare speciella citat som kan förekomma separeras av följande avgränsare"
                },
                additionalQuotesDelimiter: {
                    label: "Ytterligare offertavskiljare",
                    description: "Separator för ytterligare offerter"
                }
            }
        },
        loginWithQR: {
            name: "Logga inMedQR",
            description: "Precis som på mobilen kan du logga in på en annan enhet genom att skanna QR-koden för inloggning!",
            option: {
                scanQr: {
                    label: "Skanna QR-koden",
                    description: "Skanna en QR-kod",
                    notEnabled: "Aktivera plugin-programmet och starta om din klient för att skanna en QR-kod för inloggning"
                }
            },
            neverScan: "Skanna aldrig en QR-kod för inloggning från en annan användare eller app.",
            hold: "Tryck och håll ned för att bekräfta inmatningen",
            scanning: "Scanning...",
            stopScanning: "Sluta skanna",
            usingWebcam: "Skanna med webbkamera",
            dragDrop: "Dra och släpp en bild här eller klicka för att välja en bild",
            orPaste: "Eller klistra in en bild från urklippet!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlayback Speed",
            description: "Låter dig ändra (standard) uppspelningshastighet för mediainbäddningar.",
            playbackSpeed: "Uppspelningshastighet",
            context: {
                label: "Uppspelningshastighetskontroll"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Standardpris för röstmeddelanden",
                    description: "Röstmeddelanden"
                },
                defaultVideoSpeed: {
                    label: "Standard videohastighet",
                    description: "Videor"
                },
                defaultAudioSpeed: {
                    label: "Standardljudhastighet",
                    description: "ljudfiler"
                }
            }
        },
        memberCount: {
            name: "Antal medlemmar",
            description: "Visar antalet onlinemedlemmar på servern, totalt antal medlemmar och användare i röstkanaler — i medlemslistan och verktygstipset.",
            option: {
                toolTip: {
                    label: "Verktygstips",
                    description: "Visa medlemsantal i serververktygstips"
                },
                memberList: {
                    label: "Medlemslista",
                    description: "Visa antalet medlemmar högst upp i medlemslistan"
                },
                voiceActivity: {
                    label: "Röstaktivitet",
                    description: "Visa antalet användare på röstkanaler"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} är online på den här kanalen",
            totalMembers: "Totalt {{formattedTotalCount}} medlemmar på servern",
            totalVoice: "Medlem på {{formattedVoiceCount}} röstkanaler"
        },
        mentionAvatars: {
            name: "NämnAvatarer",
            description: "Visar användaravatarer och rollikoner i omnämnanden.",
            option: {
                showAtSymbol: {
                    label: "Visa @-ikonen",
                    description: "Bestämmer om @-symbolen visas i användarnamn."
                }
            }
        },
        meow: {
            name: "Mjau",
            description: "Lägger till en knapp i chattfältet för att jama i chatten.",
            button: {
                meow: "Miyav"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Den slår samman meddelanden som skickats inom en viss tidsperiod med ditt tidigare meddelande, om inte någon annan har skickat ett meddelande före dig.",
            option: {
                timePeriod: {
                    label: "Tidsintervall",
                    description: "Sammanfogningstid (i sekunder)."
                },
                shouldMergeWithAttachment: {
                    label: "Kombinera med bilagor",
                    description: "Ska meddelanden slås samman om det finns en bilaga (fil/bild) i det sista meddelandet?"
                },
                useSpace: {
                    label: "Använd Space",
                    description: "Om du vill lägga till mellanslag mellan meddelanden istället för att flytta till en ny rad vid sammanslagning."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Om du håller ner backstegstangenten och klickar kan du ta bort, dubbelklicka för att redigera eller svara.",
            option: {
                singleClickAction: {
                    label: "Åtgärd med ett klick",
                    description: "Enkelklicksåtgärd (på dina egna meddelanden)"
                },
                singleClickModifier: {
                    label: "One Click Modifier",
                    description: "Modifierare krävs för åtgärd med ett klick (i dina egna meddelanden)"
                },
                singleClickOthersAction: {
                    label: "Enklicksåtgärd (Övriga)",
                    description: "Enkelklicksåtgärd (på andras meddelanden)"
                },
                singleClickOthersModifier: {
                    label: "One Click Modifier (Andra)",
                    description: "Modifierare krävs för en klickåtgärd (i andras inlägg)"
                },
                doubleClickAction: {
                    label: "Dubbelklicka Åtgärd",
                    description: "Dubbelklicka på dina egna meddelanden"
                },
                doubleClickOthersAction: {
                    label: "Dubbelklicksåtgärd (Andra)",
                    description: "Dubbeltryck på åtgärder på andras meddelanden"
                },
                doubleClickModifier: {
                    label: "Dubbelklicka Modifierare",
                    description: "Modifierare krävs för dubbelklick"
                },
                tripleClickAction: {
                    label: "Treklicksåtgärd",
                    description: "Treklicksåtgärd"
                },
                tripleClickModifier: {
                    label: "Treklicksmodifierare",
                    description: "Modifierare krävs för tre klickåtgärder"
                },
                reactEmoji: {
                    label: "Reaktion Emoji",
                    description: "Emoji att använda för reaktionsåtgärder"
                },
                addAdditionalReacts: {
                    label: "Lägg till ytterligare reaktioner",
                    description: "Lägg också till ytterligare konfigurerade reaktions-emojis"
                },
                additionalReactEmojis: {
                    label: "Ytterligare reaktions-emojis",
                    description: "Ytterligare emojis som ska läggas till när reaktionsåtgärden används (avgränsade med kommatecken/enter, max {{count}})"
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
                    description: "Timeout (ms) för att skilja mellan dubbel- och trippelklick"
                },
                doubleClickHoldThreshold: {
                    label: "Dubbelklicka på retentionströskel",
                    description: "Maximal hålltid (ms) för dubbelklicksåtgärder. Tillåter att textvalet förblir längre"
                },
                deferDoubleClickForTriple: {
                    label: "Fördröj dubbelklick för trippelklick",
                    description: "Fördröj dubbelklick för att tillåta trippelklick (trippelklick är inaktiverat om av)"
                },
                selectionHoldTimeout: {
                    label: "Val Håll Timeout",
                    description: "Timeout (ms) för att tillåta textval"
                },
                quoteWithReply: {
                    label: "Svara med citat",
                    description: "När du citerar, svara också på meddelandet"
                },
                useSelectionForQuote: {
                    label: "Använd urval för offert",
                    description: "När du citerar, använd vald text (om tillgänglig)"
                }
            },
            actions: {
                none: "Ingen",
                delete: "Sil",
                copyLink: "Kopiera länk",
                copyID: "Kopiera ID",
                copyContent: "Kopiera innehåll",
                copyUserID: "Kopiera användar-ID",
                edit: "Redigera",
                reply: "Svar",
                react: "Reagera",
                openThread: "Öppna ämne",
                openTab: "Öppna i Tab",
                quote: "citationstecken",
                pin: "Fäst den"
            },
            missingPermissions: {
                react: "Det går inte att reagera: Behörigheter saknas",
                pin: "Kan inte fixa: Saknade behörigheter",
            },
            cannotQuote: "Denna meddelandetyp kan inte citeras",
            copy: {
                messageId: "Meddelande-ID kopierades!",
                messageContent: "Meddelandets innehåll har kopierats!",
                userId: "Användar-ID kopierades!"
            },
            linkCopied: "Länken kopierad!"
        },
        messageColors: {
            name: "Meddelandefärger",
            description: "Visar färgkoder i meddelanden, till exempel #FF0042.",
            option: {
                renderType: {
                    label: "Visualiseringstyp",
                    description: "Bestämmer hur färger visas",
                    textColor: "textfärg",
                    block: "block bredvid",
                    backgroundColor: "bakgrundsfärg"
                },
                enableShortHexCodes: {
                    label: "Aktivera korta hex-koder",
                    description: "Aktivera hexadecimala koder med tre tecken som #39f"
                },
                blockView: {
                    label: "Blockvisningstyp",
                    description: "Bestämmer hur färgblock visas",
                    right: "Höger sida",
                    left: "Vänster",
                    both: "båda sidor"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Visar hur lång tid det tar för den aktuella kanalens meddelanden att laddas.",
            option: {
                showIcon: {
                    label: "Visa ikon",
                    description: "Visa ikonen för laddningstid i meddelandefältet"
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
            loaded: "Meddelanden laddade om {{time}} ms ({{timeAgo}})",
            day: "dagar sedan",
            hour: "timmar sedan",
            minute: "minuter sedan",
            justNow: "Nu"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Lägger till en indikator för meddelanden som tar ≥n sekunder att skicka.",
            day: "dag",
            days: "dag",
            hour: "ögonblick",
            hours: "ögonblick",
            minute: "minuter",
            minutes: "minuter",
            second: "andra",
            seconds: "andra",
            millisecond: "millisekund",
            milliseconds: "millisekund",
            and: "ve",
            oldKotlinDetected: "Användaren misstänks använda en föråldrad Discord Android-klient.",
            ahead: "Den här användarens tid är {{delta}} före.",
            delay: "Detta meddelande skickades med {{delta}} fördröjning.",
            delayedMessage: "Försenat meddelande",
            oldAndroidClient: "Legacy Discord Android-klient",
            option: {
                latency: {
                    label: "Dröjsmål",
                    description: "Tröskelvärde i sekunder för fördröjningsindikatorn"
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
                    label: "Ignorera mig själv",
                    description: "Lägg till indikatorer i dina egna meddelanden"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Lägger till en förhandsgranskning av meddelanden som innehåller en länk till ett annat meddelande.",
            option: {
                messageBackgroundColor: {
                    label: "Meddelande bakgrundsfärg",
                    description: "Bakgrundsfärg för meddelanden i rika inbäddningar"
                },
                automodEmbeds: {
                    label: "Automod Begravningar",
                    description: "Använd automod-inbäddningar istället för rika inbäddningar (mindre men innehåller mindre information)",
                    always: "Använd alltid automod embeds",
                    prefer: "Föredrar Automod-inbäddningar, men använd rika inbäddningar om visst innehåll inte kan visas",
                    never: "Använd aldrig automod-inbäddningar"
                },
                listMode: {
                    label: "Listläge",
                    description: "Bestäm om ID-listan ska användas som en svartlista eller vitlista",
                    blacklist: "Svartlista",
                    whitelist: "Vitlista"
                },
                idList: {
                    label: "ID-lista",
                    description: "Server/kanal/användar-ID:n som ska läggas till i svartlistan eller vitlistan (avgränsade med komma)"
                },
                clearMessageCache: {
                    label: "Rensa meddelandecache",
                    description: "Rensa länkat meddelandecache"
                }
            },
            noContent: {
                noAttachments: "inget innehåll {{count}} inbäddat meddelande",
                noEmbeds: "inget innehåll {{count}} tillägg",
                both: "inget innehåll, {{attachments}} bilagor och {{embeds}} inbäddade meddelanden"
            },
            dm: "Privat meddelande",
            groupDm: "Gruppmeddelande",
            server: "Presentatör"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Lägger till ett verktygstips och meddelandeförhandsvisning när du håller muspekaren över meddelandelänkar, svar och vidarebefordrade meddelanden.",
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
                    label: "På det överförda meddelandet",
                    description: "Visa verktygstips när du håller muspekaren över vidarebefordrade meddelanden"
                },
                display: {
                    label: "Utseende",
                    description: "Utseende stil",
                    auto: "Samma som meddelande",
                    compact: "Kompakt",
                    cozy: "Bekväm"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Sparar tillfälligt raderade och redigerade meddelanden.",
            removeMessage: "Ta bort meddelandehistorik",
            removeMessageTemporary: "Ta bort meddelande (tillfälligt)",
            clearMessageLog: "Rensa meddelandelogg",
            modal: {
                edit: {
                    title: "Meddelande Redigera historik",
                    tooltip: "Denna redigeringsstatus kan inte visas eftersom den inte har sparats."
                }
            },
            option: {
                deleteStyle: {
                    label: "Radera stil",
                    description: "Utseendestil för raderade meddelanden",
                    text: "röd text",
                    overlay: "röd beläggning"
                },
                logDeletes: {
                    label: "Spara raderade",
                    description: "Avgör om raderade meddelanden sparas eller inte"
                },
                collapseDeleted: {
                    label: "Komprimera borttaget",
                    description: "Förfina raderade meddelanden som liknar blockerade meddelanden"
                },
                logEdits: {
                    label: "Spara redigerad",
                    description: "Bestämmer om redigerade meddelanden ska sparas"
                },
                inlineEdits: {
                    label: "Inline redigeringar",
                    description: "Visa redigeringshistorik som en del av meddelandeinnehåll"
                },
                ignoreBots: {
                    label: "Ignorera bots",
                    description: "Ignorera meddelanden som skickas av bots"
                },
                ignoreSelf: {
                    label: "Ignorera mig själv",
                    description: "Ignorera egna meddelanden"
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
                    label: "Ignorera servrar",
                    description: "Kommaseparerad lista över server-ID:n att ignorera"
                },
                showEditDiffs: {
                    label: "Visa redigeringsskillnader",
                    description: "Visa skillnader mellan redigerade meddelandeversioner"
                },
                separatedDiffs: {
                    label: "Dela skillnader",
                    description: "Ger en mer läsbar vy genom att visa tillägg och raderingar separat i skillnaderna"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Det förbättrar MessageLogger-pluginen med ytterligare funktioner.",
            updateImageCacheDir: "Den visuella cachekatalogen har uppdaterats framgångsrikt.",
            updateLogsDir: "Loggkatalogen har uppdaterats framgångsrikt.",
            failedUpdate: "Katalogen kunde inte uppdateras.",
            blacklist: "Svartlista",
            whitelist: "Vitlista",
            failedToRemove: "Meddelandet kunde inte tas bort",
            successfullyImported: "Loggar importerades framgångsrikt.",
            errorImportingLogs: "Ett fel uppstod vid import av loggar. Kontrollera konsolen för mer information.",
            importing: "Importerar...",
            importLogs: "Importera loggar",
            exporting: "Exporterar...",
            exportLogs: "Exportera loggar",
            alert: {
                clearLogs: {
                    title: "Rensa loggar",
                    body: "Är du säker på att du vill rensa alla loggar?",
                    confirmText: "rensa",
                    cancel: "Avboka"
                },
                clearVisibleLogs: {
                    title: "Rensa synliga loggar",
                    body: "Är du säker på att du vill rensa {{meddelanden}} loggar?",
                    confirmText: "rensa",
                    cancel: "Avboka"
                },
                cleared: "Meddelandeloggdatabasen och cachen har rensats."
            },
            context: {
                title: "Meddelandelogg",
                jumpToMessage: "Gå till meddelande",
                openUserProfile: "Öppna användarprofil",
                copyContent: "Kopiera innehåll",
                copyUserId: "Kopiera användar-ID",
                copyMessageId: "Kopiera meddelande-ID",
                copyChannelId: "Kopiera kanal-ID",
                copyServerId: "Kopiera server-ID",
                deleteLog: "Ta bort logg",
                fromUsernameDm: "Från {{username}}s DM",
                fromGroupDm: "{{channelName}} grupp DM",
                fromServerChannel: "Från kanal {{channelName}} på servern {{serverName}}",
                moveTypeTo: "Flytta {{typ}} till {{destination}}",
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
                server: "Presentatör",
                user: "Användare",
                channel: "Kanal"
            },
            button: {
                chooseFolder: "Välj Mapp",
                browse: "Gozat",
                clearLogs: "Rensa alla loggar",
                clearVisibleLogs: "Rensa synliga loggar",
                sortOldest: "Sortera äldst till nyaste",
                sortNewest: "Sortera Nyast till Äldst",
                loadMore: "Ladda mer",
                noResults: "Inga resultat på fliken {{tab}}",
                tryOtherTabs: "Prova flikarna {{nextTab}} eller {{lastTab}}",
                importLogs: "Importera loggar"
            },
            modal: {
                title: "Filtrera meddelanden",
                deleted: "Raderad",
                edited: "Organiserad",
                ghostPing: "Osynlig ping",
                empty: "Tom, va",
                importLogs: "ML Enhanced sparar nu loggar till IndexedDB. Du måste importera dina gamla loggar från loggkatalogen. Importen ändrar inte befintliga loggar."
            },
            clear: {
                title: "Rensa loggar",
                description: "Är du säker på att du vill rensa alla loggar?",
                confirm: "rensa",
                cancel: "Avboka"
            },
            option: {
                saveMessages: {
                    label: "Spara meddelanden",
                    description: "Bestämmer om raderade och redigerade meddelanden sparas eller inte."
                },
                saveImages: {
                    label: "Spara bilder",
                    description: "Spara borttagna bilagor."
                },
                sortNewest: {
                    label: "Sortera Nyast till Äldst",
                    description: "Sortera loggar efter senaste."
                },
                cacheMessagesFromServers: {
                    label: "Cachemeddelanden från servrar",
                    description: "Vanligtvis registrerar loggeren bara vitlistade ID:n och DM:n, om du aktiverar detta alternativ kommer även meddelanden att spelas in på alla servrar. Detta kan dock överskrida cachegränsen och göra att vissa meddelanden hoppas över."
                },
                ignoreBots: {
                    label: "Ignorera bots",
                    description: "Ignorera botmeddelanden."
                },
                ignoreWebhooks: {
                    label: "Webhookları Yoksay",
                    description: "Ignorera webhook-meddelanden."
                },
                ignoreSelf: {
                    label: "Ignorera mig själv",
                    description: "Ignorera dina egna meddelanden."
                },
                ignoreMutedGuilds: {
                    label: "Ignorera avstängda servrar",
                    description: "Meddelanden på tystade servrar spelas inte in. Vitlistade användare/kanaler spelas dock fortfarande in."
                },
                ignoreMutedCategories: {
                    label: "Ignorera dämpade kategorier",
                    description: "Meddelanden i kanaler som hör till avstängda kategorier spelas inte in."
                },
                ignoreMutedChannels: {
                    label: "Ignorera avstängda kanaler",
                    description: "Meddelanden på tysta kanaler spelas inte in."
                },
                alwaysLogDirectMessages: {
                    label: "Spara alltid DM",
                    description: "Spara alltid direktmeddelanden."
                },
                alwaysLogCurrentChannel: {
                    label: "Spara alltid aktuell kanal",
                    description: "Sparar alltid den aktuella kanalen. Svartlistade kanaler/användare är exkluderade."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Ta bort logg permanent som standard",
                    description: "I huvudmenyn för MessageLogger är alternativet att ta bort från meddelandeloggen som standard till permanent radering."
                },
                hideMessageFromMessageLoggers: {
                    label: "Dölj meddelande från Loggers",
                    description: "När den är aktiverad lägger den till ett snabbmenyalternativ för att dölja meddelanden från andra loggare. Det kanske inte är säkert, använd på egen risk."
                },
                showLogsButton: {
                    label: "Visa loggknapp",
                    description: "Växlar om verktygsfältet visas eller inte."
                },
                showWhereMessageIsFrom: {
                    label: "Visa meddelandekälla",
                    description: "Visa meddelandets kanal/författare och servernamn."
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Antal meddelanden som ska visas samtidigt i loggar",
                    description: "Bestämmer antalet meddelanden som ska visas i loggarna åt gången och mängden som ska läggas till när fler meddelanden laddas."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Meddelandeinnehåll dolt från meddelandeloggare",
                    description: "Innehåll för att ersätta meddelandet när det gömmer sig från meddelandeloggare används."
                },
                messageLimit: {
                    label: "Meddelandegräns",
                    description: "Maximalt antal meddelanden att spara. När gränsen överskrids raderas gamla meddelanden. 0 = obegränsat."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Storleksgräns för bilaga (MB)",
                    description: "Maximal storlek (i MB) för bilagor att spara. Bilagor som är större än detta värde kommer inte att sparas."
                },
                attachmentFileExtensions: {
                    label: "Ytterligare filtillägg",
                    description: "En kommaseparerad lista över filtillägg att spara. Om det lämnas tomt sparas alla bilagor."
                },
                cacheLimit: {
                    label: "Cachegräns",
                    description: "Maximalt antal meddelanden att behålla i cacheminnet. När gränsen överskrids raderas gamla meddelanden."
                },
                timeBasedCleanupMinutes: {
                    label: "Tidsbaserad minutrengöring",
                    description: "Minutintervall under vilket tidsbaserad rengöring av meddelanden som är äldre än meddelandegränsen kommer att utföras."
                },
                preserveCurrentChannel: {
                    label: "Behåll aktuell kanal",
                    description: "När det är aktiverat påverkas inte meddelanden på din för närvarande valda kanal av tidsbaserad rengöring."
                },
                whitelistedIds: {
                    label: "Vitlista ID:n",
                    description: "Vitlistade server, kanal eller användar-ID."
                },
                blacklistedIds: {
                    label: "Svartlista ID:n",
                    description: "Svartlistade server, kanal eller användar-ID."
                },
                imageCacheDir: {
                    label: "Visual Cache Directory",
                    description: "Välj katalogen med sparade bilder."
                },
                logsDir: {
                    label: "Loggindex",
                    description: "Välj katalogen där loggarna ska sparas."
                },
                importLogs: {
                    label: "Importera loggar",
                    description: "Importera loggar från filen."
                },
                exportLogs: {
                    label: "Exportera loggar",
                    description: "Exportera loggar från IndexedDB."
                },
                openLogs: {
                    label: "Öppna Loggar",
                    description: "Öppna loggarna."
                },
                openImageCacheFolder: {
                    label: "Öppna mappen Visual Cache",
                    description: "Öppnar den visuella cachekatalogen."
                },
                clearLogs: {
                    label: "Rensa loggar",
                    description: "Rensa loggar.",
                    title: "Rensa loggar",
                    body: "Är du säker på att du vill rensa alla loggar?",
                    confirmText: "rensa",
                    cancel: "Avboka"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Få meddelanden när utvalda användare skickar meddelanden",
            dm: "privat meddelande",
            option: {
                users: {
                    label: "Användare",
                    description: "Kommaseparerad lista över användar-ID för att ta emot meddelandeaviseringar",
                    invalidId: "{{id}} är inte ett giltigt användar-ID"
                }
            },
            notification: {
                title: "{{username}} skickade ett meddelande",
                body: "Klicka för att gå till {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Det låter dig spara meddelanden och använda dem med ett enkelt kommando.",
            notExist: "Taggen **{{tagname}}** är inte längre tillgänglig! Starta om Discord för att fixa det :)",
            alreadyExist: "En tagg med namnet **{{tagname}}** finns redan!",
            sentTag: "**{{tagname}}**-taggen har skickats!",
            successCreate: "**{{tagname}}**-taggen skapad framgångsrikt!",
            allTags: "Alla taggar:",
            noTags: "Ups! Det finns inga taggar än, använd /tag create för att skapa dem!",
            noDeleteTag: "En tagg med namnet **{{tagname}}** hittades inte, så den kan inte tas bort!",
            successDelete: "Taggen **{{name}}** har raderats!",
            tagPreview: "En tagg som heter **{{name}}** finns inte!",
            option: {
                clyde: {
                    label: "Clyde meddelande i inlägget",
                    description: "När det är aktiverat kommer Clyde att skicka ett tillfälligt meddelande till dig när en tagg används."
                },
                tagsList: {
                    label: "Tagglista",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Hantera dina egna taggar",
                    option: {
                        create: {
                            description: "Skapa en ny etikett",
                            name: "Namnet på taggen som utlöser svaret",
                            message: "Meddelandet som kommer att skickas när du använder denna hashtag"
                        },
                        list: {
                            description: "Lista alla taggar"
                        },
                        delete: {
                            description: "Ta bort en tagg",
                            name: "Namn på taggen som ska raderas"
                        },
                        preview: {
                            description: "Förhandsgranska en tagg utan att publicera den offentligt",
                            name: "Namn på taggen som ska förhandsgranskas"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Lägger till testikon för mikrofonslinga på användarpanelen",
            button: "Mikrofontestcykel"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Olika förbättringar i mittenklick (mushjul) såsom inklistring och länköppning.",
            option: {
                openScope: {
                    label: "Öppnande omfattning",
                    description: "Det förhindrar att dessa innehållstyper öppnas när du klickar på mitten.",
                    links: "Länkar",
                    media: "Media",
                    linksAndMedia: "Länkar och media",
                    none: "Ingen"
                },
                pasteScope: {
                    label: "Bindningsomfång",
                    description: "I vissa fall förhindrar mittklick inklistring.",
                    always: "Blockera alltid med mellanklick",
                    focus: "Blockera endast när textområdet inte är fokuserat",
                },
                pasteThreshold: {
                    label: "Bindningströskel",
                    description: "De millisekunder som krävs för att klistra in för att återaktiveras efter mittklick."
                }
            }
        },
        moreCommands: {
            name: "Fler kommandon",
            description: "Echo, Lenny, Mock och mer",
            command: {
                echo: {
                    description: "Skickar ett meddelande som Clyde (lokal)"
                },
                lenny: {
                    description: "Skickar ett Lenny-ansikte"
                },
                mock: {
                    description: "Gör narr av människor (håna människor)"
                },
                wordcount: {
                    description: "Beräknar antalet ord i ett meddelande",
                    response: "Meddelandet innehåller {{count}} ord."
                },
                flipcoin: {
                    description: "Vänder ett mynt och returnerar resultatet",
                    heads: "Handstil",
                    tails: "Tura",
                    response: "Pengarna {{result}} anlände."
                },
                ask: {
                    description: "Frågar och svarar ja/nej frågor",
                    yes: "Ja",
                    no: "Inga",
                    maybe: "Kanske",
                    askAgain: "fråga igen senare",
                    definitelyNot: "Absolut inte",
                    itIsCertain: "Absolut ja"
                },
                randomanimal: {
                    description: "Returnerar en slumpmässig djurbild",
                    animal: "välj ditt djur",
                    cat: "katt",
                    dog: "hund",
                    response: "Tyvärr, inga djurbilder kan hämtas just nu"
                },
                randomnumber: {
                    description: "Genererar ett slumptal mellan två värden",
                    min: "Minimum",
                    max: "högsta värde",
                    response: "Slumptal mellan {{min}} och {{max}}: {{number}}"
                },
                choose: {
                    description: "Väljer en slumpmässigt bland de givna alternativen",
                    option: "Kommaseparerad lista med alternativ",
                    response: "Mitt val: {{choice}}"
                },
                systeminfo: {
                    description: "Visar systeminformation",
                    platform: "Plattform",
                    deviceType: "Enhetstyp",
                    mobile: "Mobil",
                    desktop: "skrivbordet",
                    browser: "Scanner",
                    cpuCores: "CPU-kärnor",
                    memory: "Minne",
                    screen: "Skärm",
                    languages: "Dil",
                    network: "Vit",
                    online: "online",
                    offline: "off-line",
                    failedToFetch: "Systeminformationen kunde inte hämtas",
                    unknown: "okänd"
                },
                getuptime: {
                    description: "Visar klientens drifttid",
                    response: "**Upptid för klient**: {{upptid}} minuter"
                },
                gettime: {
                    description: "Visar aktuell tid",
                    response: "Aktuell tid: {{time}}"
                },
                transform: {
                    description: "Omvandlar text enligt det angivna alternativet",
                    transformation: {
                        description: "Den typ av omvandling som ska tillämpas på texten",
                        lowercase: "Konvertera text till gemener",
                        uppercase: "Konvertera text till versaler",
                        localeLowercase: "Konvertera text till inbyggda gemener",
                        localeUppercase: "Konvertera text till inbyggda versaler",
                        same: "lämna det samma"
                    },
                    repeat: "Hur många gånger kommer det att upprepas?",
                    reverse: "Om text ska vändas",
                    normalize: {
                        description: "Textnormaliseringsformat",
                        nfc: "Normaliseringsformat C (NFC)",
                        nfd: "Normaliseringsform D (NFD)",
                        nfkc: "Normaliseringsformat KC (NFKC)",
                        nfkd: "Normaliseringsformat KD (NFKD)"
                    },
                    text: "Text att konvertera"
                }
            }
        },
        moreKaomoji: {
            name: "Mer Kaomoji",
            description: "Lägger till mer Kaomoji till Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "Fler snabba reaktioner",
            description: "Förbättrar snabbsvarsknapparna i meddelandekontextmenyn.",
            option: {
                reactionCount: {
                    label: "Antal reaktioner",
                    description: "Antal reaktioner att visa (0-42)"
                },
                frequentEmojis: {
                    label: "Ofta använda emojis",
                    description: "Använd ofta använda emojis istället för favoritemojis"
                },
                rows: {
                    label: "De säljer",
                    description: "Antal rader med snabba reaktioner att visa"
                },
                columns: {
                    label: "Kolumner",
                    description: "Antal kolumner med snabba reaktioner att visa"
                },
                compactMode: {
                    label: "Kompakt Mod",
                    description: "Den skalar knapparna till 75 % av deras ursprungliga storlek samtidigt som den förstorar den inre emojin till 125 %. Emojis kommer att vara 93,75 % av originalstorleken. Det rekommenderas att använda minst 5 kolumner"
                },
                scroll: {
                    label: "rulla",
                    description: "Aktivera rullande emoji-lista"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Lägger till taggar för webhooks och modereringsroller (ägare, admin, etc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Denna användare är en webhook"
                },
                owner: {
                    name: "Ägare",
                    description: "Ägare av servern"
                },
                admin: {
                    name: "Administration",
                    description: "Har administratörsbefogenhet"
                },
                staff: {
                    name: "Officiell",
                    description: "Kan hantera server, kanaler eller roller"
                },
                mod: {
                    name: "Mod",
                    description: "Kan hantera meddelanden eller sparka/förbjuda kontakter"
                },
                vcmod: {
                    name: "Se Mod",
                    description: "Kan hantera röstchatt"
                },
                chatmod: {
                    name: "Chattläge",
                    description: "Kan hantera meddelanden"
                }
            },
            modal: {
                example: "Exempel",
                tag: "Biljett",
                customTextPlaceholder: "Text på etikett (standard: {{displayName}})",
                messages: "Visas i meddelanden",
                memberList: "Visa i medlemslista och profiler"
            },
            option: {
                dontShowForBots: {
                    label: "Visa inte för bots",
                    description: "Visa extra taggar för bots (förutom webhooks)"
                },
                dontShowBotTag: {
                    label: "Visa bot-tagg",
                    description: "Visa endast extra taggar / Göm [APP]"
                },
                showWebhookTagFully: {
                    label: "Visa hela webhook-taggen",
                    description: "Visa hela webhook-taggen i följda kanaler (t.ex. meddelanden)"
                },
                tagSettings: {
                    label: "Tagginställningar",
                    description: "att fyllas"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Ett kommando för att översätta till eller från morsekod.",
            command: {
                morse: {
                    description: "Översätter till eller från morsekod",
                    message: "Text att konvertera"
                }
            }
        },
        moyai: {
            name: "moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volym",
                    description: "🗿🗿🗿 volym"
                },
                quality: {
                    label: "Kvalitet",
                    description: "🗿🗿🗿 kvalitet",
                    normal: "Normal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Utlösare när den inte är i fokus",
                    description: "Trigger 🗿 även om fönstret inte är i fokus"
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
            name: "Musikkontroller",
            description: "Musikkontroller och texter för flera tjänster",
            option: {
                SpotifySectionTitle: {
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
                    description: "Spotify öppnar URI:er istället för URL:er. Fungerar bara om Spotify är installerat och kanske inte fungerar på alla plattformar"
                },
                previousButtonRestartsTrack: {
                    label: "Föregående knapp Startar om låten",
                    description: "Om uppspelningstiden är mer än 3 sekunder, startar den aktuella låten från början genom att trycka på föregående knapp"
                },
                TidalSectionTitle: {
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
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "{{app}} krävs för den här inställningen"
                },
                showYoutubeMusicControls: {
                    label: "Visa YouTube Music-kontroller",
                    description: "Visa musikkontroller för YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube Music API URL:s",
                    description: "URL:en till YouTube Music API-servern du använder"
                },
                hoverControls: {
                    label: "Hover kontroller",
                    description: "Visa kontroller när du håller muspekaren"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "Visa anteckningar om det inte finns några sångtexter",
                    description: "Visa anteckningsikon när texten inte hittas"
                },
                LyricsPosition: {
                    label: "Lyrisk plats",
                    description: "Plats för textpanelen",
                    above: "Ovan spelare",
                    below: "Nedanstående spelare"
                },
                LyricsProvider: {
                    label: "Textleverantör",
                    description: "Källa till texter",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "Översätt till ditt språk",
                    description: "Översätt texter — Om du ändrar detta rensas befintliga översättningar",
                    cleared: "Översättning rensad"
                },
                LyricsConversion: {
                    label: "Lyrisk konvertering",
                    description: "Översätt eller romanisera texter automatiskt",
                    none: "Ingen",
                    translate: "Konvertera",
                    romanize: "Romanisera Et"
                },
                FallbackProvider: {
                    label: "Säkerhetskopieringsleverantör",
                    description: "Om en textleverantör misslyckas, prova en annan"
                },
                ShowFailedToasts: {
                    label: "Visa felmeddelanden",
                    description: "Visa avisering när sångtexter inte kan laddas"
                },
                PurgeLyricsCache: {
                    label: "Rensa Lyric Cache",
                    description: "Ta bort alla cachade texter och översättningar",
                    button: "Rensa cache",
                    cacheLyricsPurged: "Lyrisk cache rensad"
                }
            },
            context: {
                spotify: {
                    label: "Spotify Lyrics Meny",
                    type: "Spotify {{typ}}-menyn",
                    copy: "Kopiera {{type}} namn",
                    link: "Kopiera länken {{typ}}",
                    open: "Öppna {{typ}} i Spotify",
                    album: "Spotify albummeny"
                },
                tidal: {
                    label: "Tidal Lyrics Meny",
                    lyrics: "Tidal texter",
                    type: "Tidal {{name}} Meny",
                    copy: "Kopiera namn {{name}}",
                    open: "Öppna {{name}} på Tidal",
                    album: "Tidal Album Meny"
                },
                ytm: {
                    type: "YouTube Music {{name}} Menüsü",
                    copy: "Kopiera namn {{name}}",
                    open: "{{name}}'i YouTube Music'te Aç",
                    album: "YouTube Music Album Meny",
                    muted: "Dämpad"
                },
                lyrics: {
                    provider: "Textleverantör",
                    saved: "inspelad",
                    notFound: "Synkrona texter hittades inte"
                },
                copy: {
                    currentLyrics: "Kopiera aktuella texter"
                }
            },
            alert: {
                lyricCopied: "Texten har kopierats till urklipp!",
                noLyrics: "inga texter",
                noLyricsTo: "Inga texter för {{translated}}",
                translate: "översättning",
                romanize: "romanisera inte",
                lyricsFetchFailed: "Det gick inte att hitta texten",
                failedToFetchLyrics: "{{translated}} kunde inte hämtas",
                translation: "översättning",
                romanization: "romanisering",
                failedToFetchTranslation: "Det gick inte att hämta {{translated}} textöversättning"
            },
            modal: {
                install: {
                    title: "Hur man installerar",
                    install: "{{link}} installera härifrån, gå sedan till TidaLuna-inställningar → Tilläggsbutiker → installera @vmohammad/api",
                    tidaluna: "Nej Luna"
                },
                player: {
                    noPlaying: "Det spelas inget spår",
                    artist: "Konstnär:",
                    album: "Album:",
                    noLyrics: "Texten hittades inte :(",
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
                failed: "Det gick inte att skapa fönster :(",
                checkConsole: "Kontrollera konsolen för fel",
                invalidUrlCustomApi: "Ogiltigt URL-format för anpassad API-server"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Visar delade grupp-DM:ar på profiler",
            no: "Inga gemensamma grupper",
            mutualGroup: "{{count}} gemensam grupp",
            members: "Medlem",
            noGroup: "Inga offentliga grupp-DM:n",
            header: "Gemensamma grupper"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Förhindrar att förhandsvisningar under samtal/PiP (skärmdelning, sändningar etc.) pausas även om appen tappar fokus.",
            about: "Detta tillägg gör att Discord förbrukar mer resurser än vanligt."
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Stänger automatiskt av och ändrar olika andra inställningar när du går med i nya servrar",
            context: {
                apply: "Tillämpa nya serverinställningar"
            },
            option: {
                guild: {
                    label: "Stäng av servern",
                    description: "Stäng av servern automatiskt"
                },
                messages: {
                    label: "Servermeddelandeinställningar",
                    description: "Inställningar för serveraviseringar",
                    all: "Alla meddelanden",
                    mentions: "endast @nämner",
                    nothing: "Ingen",
                    default: "Server standard"
                },
                everyone: {
                    label: "Undertryck @alla och @här",
                    description: "Undertryck @alla och @här-aviseringar"
                },
                role: {
                    label: "Undertryck alla roll@omnämnanden",
                    description: "Undertryck alla roll @omnämnanden"
                },
                highlights: {
                    label: "Dämpa höjdpunkter",
                    description: "Stäng automatiskt av högdagrar"
                },
                events: {
                    label: "Stäng av nya händelser",
                    description: "Stäng automatiskt av nya händelser"
                },
                showAllChannels: {
                    label: "Visa alla kanaler",
                    description: "Visa alla kanaler automatiskt"
                },
                mobilePush: {
                    label: "Stäng av mobilaviseringar",
                    description: "Stäng automatiskt av mobilaviseringar"
                },
                voiceChannels: {
                    label: "Röstkanaler",
                    description: "Göm automatiskt namn i röstkanaler"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Användbart verktyg som meddelar dig när nya plugins läggs till Plexcord",
            modal: {
                title: "Nya plugins och inställningar",
                description: "Nya plugins och inställningar har lagts till sedan ditt senaste besök. Vänligen granska de nya tilläggen nedan.",
                tooltip: "Stäng för denna session",
                dontShowAgain: "Visa det inte igen",
                restartRequired: "Följande plugins kräver omstart",
                restart: "Starta om",
                continue: "Devam Et"
            }
        },
        noAppsAllowed: {
            name: "Inga appar tillåtna",
            description: "Tar tillbaka Bot-taggen för bots"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Döljer helt alla blockerade/ignorerade meddelanden från chatten",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Dölj även ignorerade användare",
                    description: "Dölj även meddelanden från ignorerade användare."
                },
                disableNotifications: {
                    label: "Inaktivera aviseringar",
                    description: "Dölj nya meddelandeaviseringar för blockerade användare. Följande kommer alltid att gälla om funktionen \"Göm för standardanvändare\" är aktiverad och användaren som utlöste meddelandet inte finns i listan \"Undantagsanvändare\"."
                },
                allowAutoModMessages: {
                    label: "Tillåt AutoMod-meddelanden",
                    description: "Tillåt meddelanden som skickas av AutoMod att passera ofiltrerat."
                },
                hideBlockedUserReplies: {
                    label: "Dölj blockerade användarsvar",
                    description: "Dölj meddelanden från blockerade användare i trådar som du tidigare har deltagit i."
                },
                defaultHideUsers: {
                    label: "Standardanvändare gömmer sig",
                    description: "Om det är aktiverat är meddelanden från blockerade användare helt dolda och meddelanden från användar-ID:n i undantagslistan komprimeras istället (standard Discord-beteende). Om det är inaktiverat kommer meddelanden från blockerade användare att komprimeras och meddelanden från användar-ID:n i undantagslistan kommer att vara helt dolda."
                },
                overrideUsers: {
                    label: "Undantagsanvändare",
                    description: "Kommaseparerad lista med användar-ID:n som ska döljas eller komprimeras, istället för standardbeteendet som valts ovan."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Markdown-punkter (•, -, *) hindrar dig från att skriva (dålig vana)"
        },
        noDeepLinks: {
            name: "Inaktivera DeepLinks",
            description: "Inaktiverar den irriterande djuplänkningsfunktionen som försöker tvinga fram Discords skrivbordsapp"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Tar bort \"skriv servernamn\"-kravet när en server tas bort",
            option: {
                confirmModal: {
                    label: "Bekräftelsefönster",
                    description: "\"Är du säker på att du vill ta bort den här servern?\" Visa bekräftelsefönster?"
                }
            },
            modal: {
                title: "Ta bort server?",
                body: "Det kommer att vara permanent, om det inte redan var uppenbart.",
                confirm: "Sil",
                cancel: "Avboka"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Inaktiverar varningsbannern 'LET'S HIT' på konsolen. Som en bieffekt hindrar den också Discord från att dölja sin token, vilket förhindrar slumpmässiga utloggningar."
        },
        noF1: {
            name: "Nr F1",
            description: "F1 inaktiverar hjälpgenvägen."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "När en länk klistras in med text markerad förhindrar det att länken klistras in som en maskerad URL."
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Det hindrar kameran från att spegla skärmen."
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Inaktiverar öppnings-/stängningsanimationer i alla modala fönster."
        },
        noMosaic: {
            name: "Ingen mosaik",
            description: "Tar bort Discords visuella mosaiklayout.",
            option: {
                inlineVideo: {
                    label: "Inline video",
                    description: "Spela upp videor utan looping modal."
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Tar bort ALLA Nitro-försäljningsmeddelanden från Discord genom att lura kunden att tro att du äger Nitro."
        },
        noOnboarding: {
            name: "Ingen Onboarding",
            description: "Det möjliggör snabbare inloggning genom att hoppa över Discords serveranslutningsprocess."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Förbigår långsam och irriterande serveranslutningsfördröjning."
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Tar bort antalet aviseringar för inkommande vänförfrågningar, meddelandeförfrågningar och Nitro-erbjudanden.",
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
                    label: "Dölj antal nitroerbjudanden",
                    description: "Dölj antal nitroerbjudanden"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Det tar bort Nitro-profilteman helt för alla utom dig själv."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Förbigår push-to-talk-kravet för röstaktivitet på kanaler som kräver det."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Inaktiverar svarspingar som standard.",
            option: {
                userList: {
                    label: "Användarlista",
                    description: "Lista över användare som kommer att tillåtas eller undantas från pingning (måste avgränsas med kommatecken eller mellanslag)"
                },
                roleList: {
                    label: "Rolllista",
                    description: "Lista över roller som tillåter eller undantar ping (måste avgränsas med kommatecken eller mellanslag)"
                },
                shouldPingListed: {
                    label: "Pinglistad",
                    description: "Beteende",
                    dontPing: "Pingar listade användare/roller",
                    onlyPing: "Pinga endast listade användare/roller"
                },
                inverseShiftReply: {
                    label: "Reverse Shift Response Beteende",
                    description: "Vänder om Discords skiftsvarsbeteende (nämner användaren när skiftsvar är aktiverat)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Tar bort kanariefågel/ptb-prefix från meddelandelänkar."
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Vi är alla lika!! Tar bort rolltitlar från medlemslistan."
        },
        noRPC: {
            name: "NoRPC",
            description: "Discord inaktiverar rik närvaro."
        },
        noServerEmojis: {
            name: "Från ServerEmojis",
            description: "Servern visar inte emojis i autoslutförandemenyn.",
            option: {
                shownEmojis: {
                    label: "Emojis visas",
                    description: "Välj vilka emojis som ska visas i menyn för autoslutförande",
                    onlyUnicode: "Endast Unicode-emojis",
                    currentServer: "Unicode-emojis och emojis på den aktuella servern",
                    all: "Unicode-emojis och alla server-emojis (Discord-standard)"
                }
            }
        },
        noSystemBadge: {
            name: "Inget systemmärke",
            description: "Inaktiverar det olästa meddelandemärket i aktivitetsfältet och i systemfältet."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Gör skrivbordsaviseringar mer informativa."
        },
        notificationVolume: {
            name: "Aviseringsvolym",
            description: "Ställ in anpassad volym för Discord-aviseringar.",
            option: {
                notificationVolume: {
                    label: "Aviseringsljud",
                    description: "Aviseringsvolym"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Inaktiverar skrivanimationen i chattar."
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Det låter dig hoppa över meddelanden från blockerade eller ignorerade användare (och möjligen spammare) utan att avblockera dem."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Även om en användare skickar olästa meddelanden i följd i DM, får du bara en ljudavisering.",
            option: {
                channelToAffect: {
                    label: "Kanaltyp som ska påverkas",
                    description: "Välj vilken typ av DM som plugin-programmet kommer att påverka",
                    both: "Både",
                    user: "Användar-DM",
                    group: "Grupp DM"
                },
                allowMentions: {
                    label: "@AllowMentions",
                    description: "Få ljudaviseringar för @omnämnanden"
                },
                allowEveryone: {
                    label: "Tillåt @alla",
                    description: "Få ljudaviseringar för @alla och @här i grupp-DM"
                },
                ignoreUsers: {
                    label: "Användare att ignorera",
                    description: "Användar-ID för att ALDRIG begränsa aviseringar (separera med komma + mellanslag)"
                },
                alwaysPlaySound: {
                    label: "Spela alltid ljud",
                    description: "Spela upp ljud även om aviseringsljudet är inaktiverat"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Öppnar länkar i relevanta applikationer istället för webbläsaren",
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
                    description: "Öppna VRChat-länkar i VRChat-appen"
                }
            },
            notification: {
                open: "Öppnad länk i inbyggd app"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Låter dig åsidosätta standard forumlayout/sorteringsordning. Du kan fortfarande göra ändringar kanal för kanal.",
            option: {
                defaultLayout: {
                    label: "Standardlayout",
                    description: "Välj vilken layout som ska användas som standard",
                    list: "Lista",
                    gallery: "Galleri"
                },
                defaultSortOrder: {
                    label: "Standard sorteringsordning",
                    description: "Välj vilken sorteringsordning som ska användas som standard",
                    recentlyActive: "Senast aktiv",
                    datePosted: "Postat datum"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Låter dig använda festläget eftersom festen aldrig tar slut ✨",
            option: {
                superIntensePartyMode: {
                    label: "Superintensivt partyläge",
                    description: "Partitäthet",
                    normal: "Normal",
                    better: "Bättre",
                    projectX: "Projekt X"
                }
            }
        },
        pauseInvitesForever: {
            name: "Pausa InvitesForever",
            description: "Det tar tillbaka alternativet \"pausa inbjudningar på obestämd tid\" som Discord dumt tog bort.",
            pauseIndefinitely: "Pausa på obestämd tid"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Inaktiverar begränsningar på klientsidan i kanalbehörighetshantering.",
            option: {
                lockout: {
                    label: "dödläge",
                    description: "Förbigå kraschskydd för behörighet ('Är du säker på att du vill göra det här?')"
                },
                onboarding: {
                    label: "Startkrav",
                    description: "Förbigå onboardingkrav som kan göra servern inkompatibel ('Denna ändring kan göra din server inkompatibel [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Låter dig se de behörigheter en användare eller kanal har och rollerna för en server.",
            view: "Visa behörigheter",
            option: {
                permissionsSortOrder: {
                    label: "Behörighet Sorteringsordning",
                    description: "Sorteringsmetod som används för att bestämma hur en roll ger en specifik behörighet till en användare",
                    highest: "Högsta roll",
                    lowest: "Lägsta roll"
                }
            },
            icon: {
                denied: "avvisades",
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
                grantedBy: "Tolerant",
                serverOwner: "Serverägare",
                ownerRole: "Ägare",
                sortingBy: "{{metod}} sorteras med prioritet",
                highest: "Högsta roll",
                lowest: "Lägsta roll",
                details: "Rolldetaljer"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Lägger till /petpet-kommandot för att skapa petpet-gif från valfri bild",
            command: {
                petpet: {
                    description: "Skapa en petpet-gif. Du kan endast ange ett av bildalternativen",
                    delay: "Fördröjning mellan varje bildruta. Standard är 20.",
                    resolution: "Upplösning för gif. Standard är 120. Om du anger ett galet nummer och Discord fryser är det ditt fel.",
                    image: "Bildbilaga att använda",
                    url: "URL för att hämta bilden",
                    user: "Användaren vars avatar kommer att användas som bild",
                    noServerPfp: "Använd normal avatar istället för serverspecifik när du använder alternativet \"användare\".",
                    error: {
                        noImage: "Ingen bild specificerad!",
                        delayTooLow: "Förseningen måste vara minst 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Den uppladdade filen är inte en bild",
                fetchUserFailed: "Det gick inte att hämta användaren. Kontrollera konsolen för mer information.",
                fetchImageFailed: "Ett fel uppstod när {{url}} laddades. Kontrollera konsolen för mer information."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Lägger till bild-i-bild-funktion till videor (bredvid knappen Ladda ner)",
            tooltip: "Växla bild i bild",
            option: {
                loop: {
                    label: "Slinga",
                    description: "Om PiP-video ska slingras"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Låter dig fästa privata kanaler (DM) till toppen av din DM-lista. Du kan högerklicka på DM för att fästa/ta bort eller ändra ordningen på DM.",
            context: {
                category: {
                    label: "DM kategorimeny",
                    edit: "Redigera kategori",
                    up: "Flytta upp",
                    down: "Flytta ner",
                    delete: "Ta bort kategori",
                    unnamed: "anonym"
                },
                pin: {
                    label: "DM Sabitle",
                    addCategory: "Kategori Äckligt"
                },
                unPin: {
                    label: "Lossa DM",
                    move: "Flytta till kategori"
                }
            },
            option: {
                pinOrder: {
                    label: "Fastställande av order",
                    description: "I vilken ordning ska fästade DM:n visas?",
                    lastMessage: "Senaste meddelandedatum",
                    custom: "Privat (ändra ordning genom att högerklicka på kanaler)"
                },
                canCollapseDmSection: {
                    label: "Hopfällbar fast sektion",
                    description: "Gör okategoriserade DM-avsnitt hopfällbart"
                },
                dmSectionCollapsed: {
                    label: "DM-sektionen minskad",
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
                    name: "Namn",
                    color: "Färg",
                    save: "Spara",
                    create: "Skapa"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Anpassningsbara aviseringar och förbättrad omnämningsformatering",
            option: {
                friends: {
                    label: "Vänner",
                    description: "Få aviseringar när dina vänner skickar meddelanden på servrar"
                },
                mentions: {
                    label: "Omnämnanden",
                    description: "Få aviseringar när någon @nämner dig direkt"
                },
                dms: {
                    label: "DM'ler",
                    description: "Få aviseringar för direktmeddelanden (DM)"
                },
                showInActive: {
                    label: "Visa på aktiva kanaler",
                    description: "Visa aviseringar även för för närvarande aktiva kanaler"
                },
                ignoreMuted: {
                    label: "Ignorera tyst",
                    description: "Förbigå aviseringar från tysta servrar, kanaler eller användare"
                }
            },
            unknown: "okänd",
            dm: "DM",
            groupDM: "Grupp DM",
            title: "{{username}} på kanalen {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Lägger till en nålikon till fästa meddelanden."
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Det visar inte små serverikoner i mappar."
        },
        platformIndicators: {
            name: "Plattformsindikatorer",
            description: "Lägger till plattformsindikatorer (Desktop, Mobile, Web...) till användare.",
            embeddedTooltip: "Trösta",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lista",
                    description: "Visa indikatorer i medlemslistan"
                },
                badges: {
                    label: "märken",
                    description: "Visa indikatorer som märken på användarprofiler"
                },
                messages: {
                    label: "Meddelanden",
                    description: "Visa indikatorer i meddelanden"
                },
                colorMobileIndicator: {
                    label: "Färglägg din mobilskärm",
                    description: "Avgör om mobilindikatorn har användarstatusfärgen eller inte."
                },
                showBots: {
                    label: "Visa bots",
                    description: "Bestämmer om plattformsindikatorer ska visas i bots"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Simulerar vilken plattform eller enhet du än befinner dig på",
            about: "Vi kan inte garantera att detta tillägg skyddar dig från att bli varnad eller förbjuden.",
            platform: {
                desktop: "Discord-klient",
                web: "Discord webben",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Inbäddad Discord",
                playstation: "Inbäddad Discord",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Plattform",
                    description: "Vilken plattform vill du framstå som?",
                    desktop: "skrivbordet",
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
            name: "Plexcord Toolbox",
            description: "Lägger till en knapp i appfältet som är värd för Plexcord-snabbåtgärder.",
            tooltip: "Plexcord verktygslåda",
            context: {
                openLog: "Öppna meddelandeloggen",
                enableQuickCSS: "Aktivera QuickCSS",
                openQuickCSS: "Öppna QuickCSS",
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
            description: "Det gör mindre ändringar för att dina meddelanden ska se snyggare ut och ha bättre grammatik. Kolla in inställningarna",
            option: {
                quickDisable: {
                    label: "Snabb inaktivering",
                    description: "Snabb avaktivering. Stänger av meddelanderedigering utan att behöva starta om appen."
                },
                blockedWords: {
                    label: "Blockerade ord",
                    description: "Ord som inte kommer att skrivas med versaler (separera med kommatecken)."
                },
                fixApostrophes: {
                    label: "Fixa apostroferna",
                    description: "Ser till att förkortningar innehåller apostrof."
                },
                expandContractions: {
                    label: "Öppna förkortningar",
                    description: "Den konverterar förkortade ord till deras explicita form (som Don't -> Don't)."
                },
                fixCapitalization: {
                    label: "Redigera versaler",
                    description: "Tillåter meningar att börja med versaler."
                },
                fixPunctuation: {
                    label: "Korrekt interpunktion",
                    description: "Redigerar mellanslag runt skiljetecken."
                },
                fixPunctuationFrequency: {
                    label: "Interpunktion Frekvens",
                    description: "Procentandel av frekvensen av att sätta punkt i slutet av meningar (denna funktion kan störa vissa personer).",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Det låter dig förhandsgranska ditt meddelande innan du skickar det.",
            tooltip: "Förhandsgranska meddelande"
        },
        profileSets: {
            name: "Profiluppsättningar",
            description: "Det låter dig spara profilförinställningar och ladda dem via profilsektionen i Inställningar.",
            toast: {
                importFailed: "Det gick inte att importera profilförinställningar. Filen kan vara ogiltig.",
            },
            option: {
                avatarSize: {
                    label: "Avatarstorlek",
                    description: "Avatarstorlek i listan med profilförinställningar"
                },
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
                random: "slumpmässig",
                import: "Importera",
                exportAll: "Exportera alla"
            }
        },
        questify: {
            name: "Fråga",
            description: "Förbättra din uppdragsupplevelse med en rad funktioner eller inaktivera dem helt om de inte är vad du vill ha.",
            quests: "Uppdrag",
            context: {
                quest: {
                    label: "Meny för uppgiftsknapp",
                    ignore: "Mark Ignorera alla",
                    reset: "Återställ ignoreringslistan",
                    fetch: "Hämta uppgifter",
                    markAsIgnored: "Markera som Ignorera",
                    unmarkAsIgnored: "Ta bort Ignorera",
                    stopAuto: "Stoppa AutoComplete",
                    copyQuestID: "Kopiera uppgifts-ID",
                    startAuto: "Starta AutoComplete"
                }
            },
            settings: {
                questButton: {
                    title: "Uppgiftsknapp",
                    description: "Visa en Quest-knapp med en valfri indikator för outtagna uppdrag i serverlistan.",
                    leftClick: "Vänsterklicka Åtgärd",
                    middleClick: "Mellanklickåtgärd",
                    rightClick: "Högerklicka Åtgärd",
                    visibility: "Knapp synlighet",
                    unclaimedIndicator: "Oönskad indikator",
                    badgeColor: "Badge färg",
                    rewardDisplay: "Prisvisning",
                    includedRewardTypes: "Typer av belöningar ingår",
                    includedRewardTypesDesc: "När du spelar knappsynlighet, märkesantal och varningsljud, räknas endast uppdrag med dessa belöningstyper som outtagna.",
                    selectRewardTypes: "Välj belöningstyper att inkludera i outtagna räkningar...",
                    noRewardType: "Det finns ingen uppgiftsfunktion som stöds med detta namn.",
                    default: "Standard",
                    disable: "Inaktivera"
                },
                questFeatures: {
                    title: "Uppgiftsfunktioner",
                    description: "Ändra specifika aktivitetsegenskaper.",
                    popupWarning: "Alternativet {{disablePopup}} kommer att ignoreras för slutförda uppdrag och spårning av uppdragets framsteg.",
                    videoQuestInfo: "Alternativet {{completeVideo}} väntar så länge videouppgiften pågår och markerar den automatiskt som slutförd.",
                    gameQuestInfo: "På samma sätt kommer alternativet {{completeGame}} att vänta under speluppgiftens varaktighet och automatiskt markera det som slutfört. Det här alternativet stöds endast i den officiella skrivbordsklienten.",
                    manualStartWarning: "Du måste starta uppgifter manuellt. Det första klicket startar Uppgifter i bakgrunden. För videouppgifter öppnar efterföljande klick videomodalen som vanligt. För att avbryta uppdrag kan du öppna snabbmenyn i uppdragsrutan och välja {{stopAuto}}.",
                    tosWarning: "Att använda något av dessa alternativ strider mot Discords användarvillkor. Använd på egen risk.",
                    selectFeatures: "Välj vilka aktivitetsegenskaper som ska ändras.",
                    disablePopup: "Inaktivera Task Popup på kontopanelen",
                    completeVideo: "Slutför videouppgifter i bakgrunden",
                    completeGame: "Slutför speluppgifter i bakgrunden",
                    stopAuto: "Stoppa AutoComplete"
                },
                restyleQuests: {
                    title: "Omformatera uppgifter",
                    description: "Markera Uppgifter med valfria temafärger för synlighet.",
                    precedenceNote: "Begärda och utgångna aktivitetsstilar kommer att ha företräde även om uppgiften ignoreras.",
                    gradientStyle: "Gradient Stili",
                    assetPreload: "Asset Bootloader",
                    unclaimed: "Oombedd",
                    claimed: "Begärde",
                    ignored: "ignoreras",
                    expired: "Utgått",
                    intenseGradient: "Tät omarbetad gradient",
                    defaultGradient: "Standard omarbetad gradient",
                    blackGradient: "Subtil svart gradient",
                    noGradient: "Ingen gradient",
                    loadAllAssets: "Ladda alla uppgiftstillgångar vid sidladdning",
                    loadDuringScroll: "Ladda aktivitetstillgångar under sidrullning"
                },
                reorderQuests: {
                    title: "Ordna om uppgifter",
                    description: "Sortera uppgifter efter deras status. Gäller när sorteringsalternativet \"Questify\" är valt på uppdragssidan.",
                    formatNote: "Den kommaseparerade listan måste innehålla allt av följande: {{items}}.",
                    placeholder: "Du måste lägga till UNDERLAGET, KRÄVAT, IGNORERAD, UPPGIFT alla",
                    invalidFormat: "Ogiltigt format.",
                    unclaimedSubsort: "Unclaimed Subrank",
                    claimedSubsort: "Anspråk på Subrank",
                    ignoredSubsort: "Ignorerad underordning",
                    expiredSubsort: "Utgått underrankning",
                    addedNewest: "Tillagd (nyast)",
                    addedOldest: "Tillägg (äldst)",
                    expiredRecent: "Utgått (senast)",
                    expiredLeast: "Utgått (åtminstone senast)",
                    expiringSoon: "Utgår (närmast)",
                    expiringLate: "Går ut (senast)",
                    claimedRecent: "Begärt (senast)",
                    claimedLeast: "Begärt (åtminstone senast)",
                    ignoredQuestProfile: "Ignorerad uppgiftsprofil",
                    sharedProfile: "Delad: Alla konton på denna kundandel ignoreras.",
                    privateProfile: "Privat: Alla konton på denna klient har separata ignoreringar.",
                    rememberSort: "Kom ihåg Sorteringsval",
                    rememberFilter: "Kom ihåg filterval",
                    yes: "Ja",
                    no: "Inga",
                    rememberNote: "Det här sorterings- och filtervalet hänvisar till de inbyggda sorterings- och filteralternativen på aktivitetssidan. Ovanstående anpassade sortering gäller endast när sorteringsalternativet \"Questify\" är valt på Quest-sidan. Om återställningen är inaktiverad återställs sorterings- eller filteralternativen varje gång du öppnar uppgiftssidan."
                },
                fetchingQuests: {
                    title: "Hämta uppgifter",
                    description: "Konfigurera hur ofta uppgifter hämtas från Discord och ställ in varningar för nya uppgifter.",
                    defaultBehavior: "Som standard tar Discord bara upp Tasks när de är installerade och du besöker Tasks-sidan. Detta betyder att utan ett hämtningsintervall definierat nedan, kommer detta plugin inte att meddelas om nya uppdrag som läggs till under dagen.",
                    requirement: "Detta beror på om Quest-knappen är aktiv och inställd på {{unclaimed}}, eller inställd på {{alltid}} och indikatorerna för unclaimed {{pill}}, {{badge}} eller {{both}} är aktiverade. Annars finns det inget behov av att hämta uppdrag med jämna mellanrum.",
                    blockWarning: "Dessutom, om {{fetchingQuests}} är blockerad i inställningen {{questFeatures}}, kommer detta inte att fungera.",
                    fetchInterval: "Hämta räckvidd",
                    alertSound: "Varningsljud",
                    intervalPlaceholder: "Välj eller skriv ett intervall mellan 30 minuter och 12 timmar.",
                    intervalFeedback: "Intervallerna bör vara mellan 30 minuter och 12 timmar.",
                    soundPlaceholder: "Välj ett ljud eller ange en anpassad ljudadress.",
                    soundFeedback: "Ljudet hittades inte eller så kommer webbadressen inte från en domän som stöds.",
                    disabled: "Inaktiverad",
                    minutes: "En minut",
                    minute: "En minut",
                    hours: "Ögonblick",
                    hour: "Ögonblick",
                    thirtyMinutes: "30 minuter",
                    oneHour: "1 ögonblick",
                    threeHours: "3 ögonblick",
                    sixHours: "6 ögonblick",
                    twelveHours: "12 ögonblick",
                    customSound: "ANPASSAT LJUD"
                },
                disableOptions: {
                    everything: "Inaktivera allt",
                    discovery: "Inaktivera fliken Utforska",
                    dms: "Inaktivera fliken Uppgifter i DM",
                    fetching: "Inaktivera uppgiftshämtning",
                    popup: "Inaktivera Popup Above Account Panel",
                    sponsored: "Inaktivera sponsrad banner på uppgiftssidan",
                    badge: "Inaktivera märke på användarprofiler",
                    inventory: "Inaktivera meddelande om transport av presentlager",
                    friendsList: "Vänlista Aktiv kampanj för närvarande",
                    membersList: "Medlemslista Active Playing Icons",
                    gameQuests: "Slutför spel-/aktivitetsutmaningar i bakgrunden",
                    videoQuests: "Slutför videotittande uppgifter i bakgrunden",
                    achievementQuests: "Slutför aktivitetsuppgifter i bakgrunden",
                    mobileDesktop: "Gör mobila uppgifter kompatibla med skrivbordet",
                    notifyOnComplete: "Meddela mig när uppgiften är klar"
                },
                options: {
                    always: "Alltid",
                    unclaimed: "Oombedd",
                    never: "Aldrig",
                    pill: "Hap",
                    badge: "Emblem",
                    both: "Båda två",
                    none: "Ingen",
                    openQuests: "Öppna uppdrag",
                    contextMenu: "Snabbmeny",
                    pluginSettings: "Plugin-inställningar",
                    nothing: "Ingenting",
                    orbs: "sfärer",
                    nitroCodes: "Nitrokoder",
                    rewardCodes: "Belöningskoder",
                    inGameItems: "Föremål i spelet",
                    profileCollectibles: "Profilsamlingar"
                }
            },
            option: {
                disableQuests: {
                    label: "Inaktivera uppgifter",
                    description: "Välj vilka aktivitetsfunktioner som ska inaktiveras."
                },
                disableQuestsEverything: {
                    label: "Inaktivera allt",
                    description: "Inaktivera alla Task-funktioner."
                },
                disableQuestsFetchingQuests: {
                    label: "Inaktivera uppgiftshämtning",
                    description: "Inaktivera uppgiftshämtning från Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Inaktivera Task Tab i DM",
                    description: "Inaktivera fliken Uppgift på sidan Direktmeddelanden."
                },
                disableQuestsDiscoveryTab: {
                    label: "Inaktivera fliken Utforska",
                    description: "Inaktivera fliken Quest på sidan Utforska."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Inaktivera sponsrad banner på uppgiftssidan",
                    description: "Inaktivera den sponsrade bannern på sidan Uppgifter."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Inaktivera popup på kontopanelen",
                    description: "Inaktivera popup-fönstret Uppgift högst upp på din kontopanel."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Inaktivera märke på användarprofiler",
                    description: "Inaktivera uppgiftsmärket på användarprofiler."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Inaktivera meddelande om flytt av presentlager",
                    description: "Presentinventering Inaktivera meddelande om uppdragsflyttning."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Inaktivera kampanj för vänlistan för närvarande aktiv",
                    description: "Inaktivera Quest-kampanj för spel som spelas av vänner."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Inaktivera Active Play-ikoner i medlemslistan",
                    description: "Inaktivera aktivt spelikoner i medlemslistan."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Gör Mobile Tasks Desktop-kompatibel",
                    description: "Gör uppgifter endast för mobila enheter kompatibla med datorer."
                },
                completeVideoQuestsInBackground: {
                    label: "Slutför videouppgifter i bakgrunden",
                    description: "Slutför videouppdrag i bakgrunden när videotiden har gått."
                },
                completeGameQuestsInBackground: {
                    label: "Slutför speluppdrag i bakgrunden",
                    description: "Slutför speluppdrag i bakgrunden efter att speltiden har gått."
                },
                completeAchievementQuestsInBackground: {
                    label: "Slutför aktivitetsuppgifter i bakgrunden",
                    description: "Slutför aktivitetsutmaningar i bakgrunden."
                },
                notifyOnQuestComplete: {
                    label: "Meddela mig när uppgiften är klar",
                    description: "Visa meddelande när en uppgift slutförs automatiskt."
                },
                questButton: {
                    label: "Uppgiftsknapp",
                    description: "Visa en Quest-knapp i serverlistan."
                },
                questButtonDisplay: {
                    label: "Uppgiftsknappens utseende",
                    description: "Vilken visningstyp som ska användas för knappen Uppgift i serverlistan."
                },
                questRewardIncludeRewardCode: {
                    label: "Inkludera belöningskoder",
                    description: "Inkludera uppdrag med belöningskoder när du tittar på antalet uppdrag."
                },
                questRewardIncludeNitroCode: {
                    label: "Inkludera nitrokoder",
                    description: "Inkludera Nitro-kodade uppdrag när du tittar på uppdragen."
                },
                questRewardIncludeInGame: {
                    label: "Inkludera belöningar i spelet",
                    description: "Inkludera uppdrag med belöningar i spelet när du tittar på uppdragen."
                },
                questRewardIncludeCollectibles: {
                    label: "Inkludera samlingar",
                    description: "Inkludera uppdrag med samlarobjekt när du tittar på antalet uppdrag."
                },
                questRewardIncludeOrbs: {
                    label: "Inkludera sfärer",
                    description: "Inkludera Globe-vinnande uppdrag när du tittar på antalet uppdrag."
                },
                questButtonUnclaimed: {
                    label: "Quest-knapp Indikator för ohämtad",
                    description: "Vilken visningstyp som ska användas för den outtagna indikatorn på knappen Uppgift i serverlistan."
                },
                questButtonBadgeColor: {
                    label: "Quest Button Badge Färg",
                    description: "Färgen på Quest-knappmärket i serverlistan."
                },
                questButtonLeftClickAction: {
                    label: "Vänsterklicka Åtgärd",
                    description: "Åtgärd som ska vidtas när du vänsterklickar på knappen Uppgift i serverlistan."
                },
                questButtonMiddleClickAction: {
                    label: "Mellanklickåtgärd",
                    description: "Åtgärd som ska vidtas när du mittklickar på knappen Uppgift i serverlistan."
                },
                questButtonRightClickAction: {
                    label: "Högerklicka Åtgärd",
                    description: "Åtgärd som ska vidtas när du högerklickar på knappen Uppgift i serverlistan."
                },
                fetchingQuests: {
                    label: "Hämta uppgifter",
                    description: "Ta med Task from Discord."
                },
                fetchingQuestsInterval: {
                    label: "Quest Fetch Range",
                    description: "Intervall (i sekunder) för att hämta uppgifter från Discord."
                },
                fetchingQuestsAlert: {
                    label: "Quest Fetch Alert",
                    description: "Ljudet som kommer att spelas när nya uppdrag upptäcks."
                },
                fetchingQuestsAlertVolume: {
                    label: "Quest Fetch Alert Volym",
                    description: "Volymen på ljudet som kommer att spelas när nya uppdrag upptäcks."
                },
                restyleQuests: {
                    label: "Omformatera uppgifter",
                    description: "Anpassa utseendet på Task-rutor på sidan Tasks."
                },
                restyleQuestsUnclaimed: {
                    label: "Omformatera uppgifter - oönskad",
                    description: "Färgen på uppgiftsrutor som inte gjorts anspråk på på sidan Uppgifter."
                },
                restyleQuestsClaimed: {
                    label: "Omformatera uppgifter - begärs",
                    description: "Färgen på uppgiftsrutor som gjorts anspråk på på sidan Uppgifter."
                },
                restyleQuestsIgnored: {
                    label: "Formatera om uppgifter - ignoreras",
                    description: "Färgen på ignorerade uppgiftsrutor på sidan Uppgifter."
                },
                restyleQuestsExpired: {
                    label: "Formatera om uppgifter - utgången",
                    description: "Färgen på utgångna uppgiftsrutor på sidan Uppgifter."
                },
                restyleQuestsGradient: {
                    label: "Omformatera uppgifter - Gradient",
                    description: "Gradientstil som används i uppgiftsbrickor."
                },
                restyleQuestsPreload: {
                    label: "Formatera om uppgifter - Bootloader",
                    description: "Testa att förinläsa tillgångar för uppgiftsrutor."
                },
                reorderQuests: {
                    label: "Ordna om uppgifter",
                    description: "Sortera uppgifter efter deras status. Lämna tomt för standardsortering. Den kommaseparerade listan måste innehålla allt av följande: UNDERLAGET, KRÄVAT, IGNORERAD, UTGÅTT."
                },
                unclaimedSubsort: {
                    label: "Unclaimed Subrank",
                    description: "Undersorteringsmetod för outtagna uppgifter."
                },
                claimedSubsort: {
                    label: "Anspråk på Subrank",
                    description: "Undersorteringsmetod för begärda uppgifter."
                },
                ignoredSubsort: {
                    label: "Ignorerad underordning",
                    description: "Undersorteringsmetod för ignorerade uppgifter."
                },
                expiredSubsort: {
                    label: "Utgått underrankning",
                    description: "Nedsorteringsmetod för utgångna uppgifter."
                },
                unclaimedUnignoredQuests: {
                    label: "Obegärda ej ignorerade uppgifter",
                    description: "Håller reda på antalet outtagna och ej ignorerade uppgifter."
                },
                onQuestsPage: {
                    label: "På sidan Uppgifter",
                    description: "Om användaren för närvarande är på sidan Uppgifter."
                },
                triggerQuestsRerender: {
                    label: "Utlösande uppdrag Återrendera",
                    description: "Utlösa en ny rendering av sidan Uppgifter genom att ändra den här inställningen."
                },
                ignoredQuestProfile: {
                    label: "Ignorerad uppgiftsprofil",
                    description: "Profilen som används för Ignorerade uppgifter."
                },
                rememberQuestPageSort: {
                    label: "Kom ihåg Quest Page Sortering",
                    description: "Kom ihåg den senast använda sekvensen på sidan Uppgifter."
                },
                rememberQuestPageFilters: {
                    label: "Kom ihåg filter för uppgiftssidor",
                    description: "Kom ihåg senast använda filter på sidan Uppgifter."
                },
                lastQuestPageSort: {
                    label: "Senaste Quest Page Ranking",
                    description: "Kom ihåg den senast använda sekvensen på sidan Uppgifter."
                },
                lastQuestPageFilters: {
                    label: "Senaste filter för uppgiftssidor",
                    description: "Kom ihåg senast använda filter på sidan Uppgifter."
                },
                ignoredQuestIDs: {
                    label: "Ignorerade uppgifts-ID:n",
                    description: "En rad ignorerade uppgifts-ID:n."
                },
                resumeQuestIDs: {
                    label: "Pågående uppgifts-ID",
                    description: "Uppsättning av uppgifts-ID:n som autoslutförs i bakgrunden."
                }
            },
            button: {
                questInProgressWithTime: "Slutför ({{remainTime}})",
                completing: "Slutför",
                resume: "Devam And (~{{remainTime}})",
                complete: "Slutför {{remainTime}}",
                completeImmediate: "Komplett (omedelbart)",
                completed: "avslutad"
            },
            reward: {
                orbs: "{{orbQuantity}} Orbs için {{completingText}}.",
                article: "{{completingText}} för {{itemName}}.",
                unrecognized: "{{completingText}} för en okänd belöningstyp."
            },
            notification: {
                completed: {
                    title: "Jobbet är gjort",
                    body: "Uppdraget {{questName}} slutfört."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Om meddelandet endast består av frågetecken ersätter det alla frågetecken med den valda strängen.",
            option: {
                replace: {
                    label: "Ändra",
                    description: "Byt ut med"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Lägger till en snabbomnämningsknapp i meddelandefältet.",
            tooltip: "Snabbsatsning"
        },
        quickReply: {
            name: "Snabbsvar",
            description: "Svara (ctrl + upp/ner) och redigera (ctrl + shift + upp/ner) meddelanden med snabbtangenter.",
            option: {
                shouldMention: {
                    label: "Ska jag nämna",
                    description: "Pinga som svar som standard",
                    noReplyMentionPlugin: "Följ NoReplyMention-plugin (om aktiverat)",
                    enabled: "Effektiv",
                    disabled: "Inaktiverad"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignorera Blockerad och Ignorerad",
                    description: "Ignorera meddelanden från blockerade/ignorerade användare när du surfar"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Växla snabbt mellan teman med kortkommandon.",
            about: {
                title: "Snabbtangenter",
                description: "Använd Ctrl/Cmd+Skift+piltangenterna för att navigera (vänster/höger: Bläddra mellan teman, Upp: Aktivera, Ned: Inaktivera).",
                reload: "Tryck på Ctrl/Cmd+Skift+Alt för att uppdatera temalistan."
            },
            modal: {
                added: "{{count}} nya teman har lagts till",
                removed: "{{count}} teman har tagits bort",
                reloaded: "{{themeCount}} tema laddades om",
                addedLocal: "Lade till {{count}} lokala teman",
                removedLocal: "{{count}} inbyggt tema har tagits bort",
            },
            option: {
                includeLocal: {
                    label: "Inkludera inhemska teman",
                    description: "Inkluderar inbyggda teman på din enhet i listan"
                },
                includeOnline: {
                    label: "Inkludera onlineteman",
                    description: "Inkluderar onlineteman i listan"
                },
                sortOrder: {
                    label: "Sortera efter",
                    description: "Sorteringsmetod",
                    asc: "A'dan Z'ye",
                    desc: "Z'den A'ya",
                    recent: "I Son"
                },
                autoRefresh: {
                    label: "Automatisk uppdatering",
                    description: "Uppdaterar automatiskt temalistan när ändringar upptäcks"
                },
                showNotifications: {
                    label: "Visa aviseringar",
                    description: "Visar aviseringar när teman läggs till eller tas bort"
                }
            }
        },
        quoter: {
            name: "Citat",
            description: "Låter dig skapa en inspirerande citatbild från ett meddelande",
            context: {
                quote: "Citat"
            },
            modal: {
                title: "4K'da Yakala",
                grayscale: "Svart-Vit",
                export: "Exportera",
                send: "Skicka",
                saveAsGIF: "Spara som GIF",
                saveDescription: "Sparar/skicka bild som GIF istället för PNG",
                showWatermark: "Visa vattenstämpel",
                watermarkText: "Filigran Metni (max. 32 tecken)"
            },
            option: {
                quoteFont: {
                    label: "Citat teckensnitt",
                    description: "Teckensnitt för citattext (författare/användarnamn använder alltid M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rundad 1c",
                    openSans: "Öppna Sans",
                    momoSignature: "Momo signatur",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "filigran",
                    description: "Anpassad vattenstämpeltext (max. 32 tecken)"
                },
                grayscale: {
                    label: "Svart-Vit",
                    description: "Aktivera svartvitt som standard"
                },
                showWatermark: {
                    label: "Visa vattenstämpel",
                    description: "Visa vattenstämpel som standard"
                },
                saveAsGif: {
                    label: "Spara som GIF",
                    description: "Spara som GIF som standard"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Lägger till en slumpmässig kopplingsknapp för röstsamtal bredvid tystnadsknappen.",
            tooltip: "Slumpmässig röst",
            context: {
                label: "ljudkonditionering",
                amountLabel: "ANTAL ANVÄNDARE",
                spacesLabel: "VAKANS",
                voiceLabel: "SES LİMİTİ",
                selfLabel: "DINA EGNA INSTÄLLNINGAR",
                select: {
                    servers: "Välj Server",
                    list: "Välj Lista",
                    filters: "Välj Filter",
                    amount: "Antal användare",
                    userAmount: "{{amount}} användare",
                    parameters: "Parametrar",
                    moreThan: "mer än",
                    lessThan: "Mindre än så",
                    equalTo: "lika med",
                    spaces: "Vakans",
                    voice: "Dess gränser"
                },
                filter: {
                    muted: "på tyst",
                    deafened: "dövad",
                    camera: "Kamera",
                    stream: "Broadcasting",
                    includeFilters: "Inkludera filter",
                    avoidFilters: "Undvik filter"
                },
                reset: {
                    list: "Återställ lista"
                },
                voice: {
                    label: "Ljudinställningar",
                    auto: {
                        mute: "Auto Mute",
                        deafen: "Auto Deafen",
                        camera: "Automatisk kamera",
                        stream: "Automatisk sändning",
                        leaveWhenEmpty: "Lämna när du är ledig",
                        navigate: "Automatisk navigering",
                        stage: "Undvik scenkanaler",
                        afk: "Undvik AFK-kanaler"
                    }
                },
                invalid: {
                    server: "ogiltig server"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Antal användare transaktion",
                    description: "Välj en åtgärd för antalet användare"
                },
                userAmount: {
                    label: "Antal användare",
                    description: "Välj antal användare"
                },
                spacesLeftOperation: {
                    label: "Vakansprocess",
                    description: "Välj en åtgärd för maximalt antal användare"
                },
                spacesLeft: {
                    label: "Vakans",
                    description: "Välj mängd ledigt utrymme"
                },
                vcLimitOperation: {
                    label: "Ljudkanalgränsfunktion",
                    description: "Välj en åtgärd för ljudkanalgränsen."
                },
                vcLimit: {
                    label: "Ljudkanalgräns",
                    description: "Välj en ljudkanalgräns"
                },
                servers: {
                    label: "Servrar",
                    description: "Servrar att inkludera"
                },
                autoNavigate: {
                    label: "Automatisk navigering",
                    description: "Den går automatiskt till ljudkanalen."
                },
                autoCamera: {
                    label: "Automatisk kamera",
                    description: "Slår på kameran automatiskt"
                },
                autoStream: {
                    label: "Automatisk sändning",
                    description: "Startar automatiskt sändning"
                },
                selfMute: {
                    label: "Auto Mute",
                    description: "Den tystar automatiskt din mikrofon när du går med i ljudkanalen."
                },
                selfDeafen: {
                    label: "Auto Deafen",
                    description: "Det dövar dig automatiskt när du går med i röstkanalen."
                },
                leaveEmpty: {
                    label: "Lämna när du är ledig",
                    description: "När röstkanalen blir tom hittar den slumpmässigt ett annat samtal."
                },
                avoidStages: {
                    label: "Undvik scenkanaler",
                    description: "Undviker att ansluta till ljudkanaler av scentyp."
                },
                avoidAfk: {
                    label: "Undvik AFK-kanaler",
                    description: "AFK undviker att gå med i ljudkanaler."
                },
                video: {
                    label: "Video",
                    description: "Söker efter användare vars kameror är på"
                },
                stream: {
                    label: "Broadcasting",
                    description: "Söker efter användare som sänder"
                },
                mute: {
                    label: "på tyst",
                    description: "Söker efter användare som är avstängda"
                },
                deafen: {
                    label: "dövad",
                    description: "Söker efter dövade användare"
                },
                includeStates: {
                    label: "Inkludera filter",
                    description: "Tillåter inkludering av specifika användartillstånd"
                },
                avoidStates: {
                    label: "Undvik filter",
                    description: "Tillåter att vissa användarsituationer undviks"
                }
            },
            alert: {
                failed: "En ljudkanal hittades inte!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "React konverterar felkoder till meddelanden som kan läsas av människor."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Lägger till en knapp på meddelandepanelen för att markera alla aviseringar som lästa med ett enda klick.",
            button: "Läs alla"
        },
        recentDMSwitcher: {
            name: "Senaste DMSwitcher",
            description: "Växla mellan nyligen använda DM:er med Ctrl+Tab (Ctrl+Skift+Tab vänder om)",
            option: {
                visualStyle: {
                    label: "Görsel Stil",
                    description: "Visuell indikatorstil som visas vid byte",
                    overlay: "Lager (Alt+Tab-stil)",
                    toast: "Avisering (statusmeddelande)",
                    off: "Stängd"
                },
                overlayMode: {
                    label: "Lagerläge",
                    description: "Lagerinnehåll",
                    row: "Senaste konversationsraden",
                    current: "endast tillgänglig",
                },
                amountOfUsers: {
                    label: "Antal användare",
                    description: "Antal användare att visa på lagret"
                },
                overlayRowLength: {
                    label: "Layer Rad Längd",
                    description: "Antalet senaste DM som ska visas i raden"
                },
                overlayShowAvatars: {
                    label: "Visa lagerprofilbilder",
                    description: "Visar användarprofilbilder på lagret"
                },
                toastDurationMs: {
                    label: "Aviseringstid (ms)",
                    description: "Visa profilbilder på lager"
                },
                clearRdms: {
                    label: "Rensa RDMS-listan",
                    description: "Testverktyg: Rensar RDM-listan",
                    toast: "RDMS-historiken har rensats",
                    button: "Rensa RDM-historik"
                }
            },
            modal: {
                unknown: "Okänd",
                dm: "DM",
                group: "Grupp DM",
                channel: "Kanal",
                switchingTo: "Byter till {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Meddelar dig när en vän, gruppchatt eller server tar bort dig.",
            option: {
                notices: {
                    label: "Aviseringar",
                    description: "Visa en avisering högst upp på skärmen när den tas bort (använd den här om du inte vill missa några aviseringar)."
                },
                offlineRemovals: {
                    label: "Offlineborttagningar",
                    description: "Skicka ett meddelande om du har tagits bort när du är offline när du öppnar Discord."
                },
                friends: {
                    label: "Vänner",
                    description: "Meddela mig när en vän tar bort dig från sin lista"
                },
                friendRequestCancels: {
                    label: "Avbokningar av vänförfrågan",
                    description: "Meddela mig när en vänförfrågan avbryts"
                },
                servers: {
                    label: "Servrar",
                    description: "Meddela när den tas bort från en server"
                },
                groups: {
                    label: "Grupper",
                    description: "Meddela mig när den tas bort från en gruppchatt"
                }
            },
            notification: {
                removedFriend: "{{user}} blev vän med dig.",
                cancelledFriendRequest: "En vänförfrågan skickad av {{user}} har avbrutits.",
                removedFromServer: "Du har tagits bort från {{server}}.",
                removedFromGroup: "Du har tagits bort från {{grupp}}.",
                noLongerGroup: "Du är inte längre i {{grupp}}.",
                noLongerServer: "Du är inte längre på {{server}}.",
                noLongerFriend: "Du är inte längre vän med {{user}}.",
                friendRequestRevoked: "Vänförfrågan som skickades av {{user}} har dragits tillbaka.",
                ok: "ok"
            }
        },
        remix: {
            name: "Remix",
            description: "Lägger till ett \"Remix\"-alternativ till högerklicksmenyn för filsändningsknappen. Detta öppnar en bild i en enkel bildredigerare och ger dig möjlighet att skicka den redigerade bilden direkt till chatten.",
            label: "Remix",
            button: {
                send: "Skicka",
                close: "Kvartal",
                brush: "Borsta",
                erase: "Duster",
                crop: "Beskära",
                shape: "Form",
                reset: "återställa",
                clear: "rensa"
            },
            editor: {
                choose: "Välj en bild",
                browse: "Gozat",
                rectangle: "Rektangel",
                ellipse: "Ellips",
                line: "Linje",
                arrow: "Ok",
                fill: "fylla"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Det låter dig snabbt skicka meddelanden igen. Om du håller ned Skift-tangenten medan du klickar på Upprepa, skickas det som ett svar på meddelandet.",
            button: "Upprepa (klicka) / Upprepa och svara (Skift + klick)",
            context: {
                repeat: "upprepa",
                repeatAndReply: "Upprepa och svara"
            }
        },
        replaceGoogleSearch: {
            name: "Ersätt GoogleSearch",
            description: "Den ersätter Google-sökning med olika sökmotorer.",
            option: {
                customEngineName: {
                    label: "Anpassat motornamn",
                    description: "Namn på anpassad sökmotor"
                },
                customEngineURL: {
                    label: "URL för anpassad motor",
                    description: "Din sökmotors URL"
                },
                replacementEngine: {
                    label: "Backup sökmotor",
                    description: "Ersätter reservsökmotorn med en specifik sökmotor (istället för att lägga till en meny)",
                    off: "Stängd",
                    custom: "Specialmotor",
                }
            },
            context: {
                label: "Metni Ara",
                searchWith: "{{name}} Aras hus"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Låter dig styra att alltid eller aldrig pinga på meddelandesvar, inkluderar även vitlista",
            option: {
                alwaysPingOnReply: {
                    label: "Svara alltid Ping",
                    description: "Få ett ping varje gång någon svarar på dina meddelanden"
                },
                replyPingWhitelist: {
                    label: "Svar Ping vitlista",
                    description: "Ange ID:n för de användare du alltid vill få en svarsping från, separerade med kommatecken."
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Visar tidsstämpel i förhandsgranskningar av besvarade meddelanden"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Ctrl-klicka på en spoiler för att visa alla spoilers i ett meddelande, Ctrl+Shift för att visa alla spoilers i hela chatten"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Lägger till alternativ för omvänd bildsökning i högerklicksmenyer för bilder",
            context: {
                label: "Sök bild",
                all: "Sök alla"
            }
        },
        reviewDB: {
            name: "RecensionDB",
            description: "Betygsätt andra användare (lägger till en ny inställningssektion i profiler)",
            notification: {
                newReview: "Det finns nya recensioner på din profil!",
                auth: {
                    error: "Ett fel uppstod under auktoriseringen",
                    successfully: "Inloggad framgångsrikt!",
                    failed: "Auktorisering misslyckades",
                    review: "Vänligen auktorisera att lägga till en recension.",
                    opening: "Auktoriseringsfönstret öppnas...",
                    need: "Du behöver tillstånd för att utvärdera!"
                },
                error: {
                    fast: "Du gör förfrågningar för snabbt. Vänta några sekunder och försök igen.",
                    fetching: "Ett fel uppstod vid hämtning av recensioner.",
                    action: {
                        failed: "Användaren {{action}} kunde inte nås",
                        success: "Användaren lyckades {{action}}"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Är du säker?",
                    description: "Vill du verkligen ta bort den här recensionen?",
                    confirm: "Sil",
                    cancel: "Avboka",
                    error: "Du måste logga in för att ta bort recensioner.",
                },
                report: {
                    title: "Är du säker?",
                    description: "Vill du verkligen rapportera den här recensionen?",
                    confirm: "Förklaring",
                    cancel: "Avboka",
                    error: "Du måste vara inloggad för att skriva recensioner.",
                },
                block: {
                    title: "Är du säker?",
                    description: "Vill du verkligen blockera den här användaren? Du kommer inte längre att se deras recensioner.",
                    confirm: "blockera",
                    cancel: "Avboka",
                    error: "Du måste vara inloggad för att blockera användare.",
                },
                blocked: {
                    title: "Blockerade användare",
                    auth: "Du är inte inloggad på ReviewDB.",
                    noBlocked: "Inga användare är blockerade.",
                    fetch: "Ett fel uppstod när blockerade användare skulle hämtas"
                },
                reviews: {
                    title: "Användares recensioner",
                    noUser: "Det verkar som om ingen har recenserat den här användaren ännu. Du kan bli den första!",
                    noServer: "Det verkar som om ingen har recenserat den här servern ännu. Du kan bli den första!"
                }
            },
            button: {
                appeal: "Invändning",
                ok: "ok",
                more: "Mer",
                reply: "Svara till @{{användare}}",
                update: "Uppdatera recension för @{{user}}",
                review: "Recensera @{{användare}}"
            },
            context: {
                view: "Se recensioner",
                blocked: "Du blockerade den här användaren",
                delete: "Ta bort recension",
                report: "Rapportgranskning",
                block: "Blockera användare",
                unblock: "Avblockera användare",
                reply: "Svara på recension"
            },
            option: {
                authorize: {
                    label: "Godkänna",
                    button: "Auktorisera med ReviewDB"
                },
                notifyReviews: {
                    label: "Bedömningsmeddelande",
                    description: "Meddela nya recensioner vid start"
                },
                showWarning: {
                    label: "Visa varning",
                    description: "Visa respektfull varning ovanför rubriken"
                },
                hideTimestamps: {
                    label: "Dölj tidsstämplar",
                    description: "Dölj tidsstämplar på recensioner"
                },
                hideBlockedUsers: {
                    label: "Dölj blockerade användare",
                    description: "Dölj recensioner från användare som du har blockerat"
                },
                buttons: {
                    label: "Knappar",
                    manageBlocked: "Hantera blockerade användare",
                    support: "Stöd ReviewDB utveckling",
                    website: "ReviewDB webbplats",
                    server: "ReviewDB Support Server"
                }
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Behandlar magnetlänkar som meddelandelänkar (med förhandsgranskning)",
            unknown: "okänt filnamn"
        },
        roleColorEverywhere: {
            name: "RollColorEverywhere",
            description: "Visar den översta rollfärgen när det är möjligt",
            option: {
                chatMentions: {
                    label: "Chatt omnämnanden",
                    description: "Visa rollfärger i chattomnämnanden (inklusive meddelanderutan)"
                },
                memberList: {
                    label: "Medlemslista",
                    description: "Visa rollfärger i medlemslistans rolltitlar"
                },
                voiceUsers: {
                    label: "Röstanvändare",
                    description: "Visa rollfärger i användarlistan för röstchatt"
                },
                reactorsList: {
                    label: "Lista över reaktorer",
                    description: "Visa rollfärger i användarlistan med emoji-reaktioner"
                },
                pollResults: {
                    label: "Undersökningsresultat",
                    description: "Visa rollfärger i enkätresultat"
                },
                colorChatMessages: {
                    label: "Färglägg dina chattmeddelanden",
                    description: "Färglägg chattmeddelanden enligt författarens rollfärg"
                },
                messageSaturation: {
                    label: "Meddelande Mättnad",
                    description: "Meddelandes färgintensitet"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Redigera eventuellt innehåll och typ av Rich Presence",
            option: {
                replacedAppIds: {
                    label: "Ändrade applikationsidentiteter (ID:n)",
                }
            },
            modal: {
                tutorial: {
                    title: "ID för aktuella händelser",
                    noRunning: "Inga löpande evenemang",
                    available: "Tillgängliga variabler",
                    variableText: "I alla fält (förutom inläggets URL) kan du lägga in variabler som automatiskt kommer att ersättas med deras ursprungliga innehåll:",
                    more: "Mer information",
                    details: {
                        leave: "För att lämna ett fält som det är, lämna det tomt.",
                        set: "Skriv \"null\" för att dölja ett fält i statusindikatorn.",
                        reload: "Du kan behöva starta om Discord för att ändringarna ska gälla."
                    }
                },
                settings: {
                    applyEdits: "Tillämpa redigeringar i appen",
                    addNewApp: "Lägg till ny app",
                    appId: "Applikations-ID",
                    invalidAppId: "Ogiltigt app-ID",
                    newActivityType: "Ny händelsetyp",
                    activityTypes: {
                        playing: "spelar",
                        watching: "tittar på",
                        listening: "lyssnande",
                        competing: "racing",
                        streaming: "på luft"
                    },
                    streamUrl: "Strömmande webbadress (måste vara YouTube eller Twitch)",
                    invalidStreamUrl: "Ogiltig webbadress för inlägget",
                    newName: "nytt namn",
                    newDetails: "nya detaljer",
                    newState: "ny situation",
                    largeImage: "stor bild",
                    smallImage: "clipart",
                    text: "Text",
                    url: "URL",
                    firstLine: "(första raden)",
                    secondLine: "(andra raden)",
                    thirdLine: "(tredje raden)",
                    alsoThirdLine: "(även tredje raden)",
                    hideAssets: "Dölj bilder (stora och små bilder)",
                    hideTimestamps: "Dölj tidsstämplar"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Visar statistik om din aktivitet som en rik närvaro",
            option: {
                assetURL: {
                    label: "Görsel URL'si",
                    description: "Bilden som ska användas för RPC. Om det lämnas tomt kommer din profilbild att användas"
                },
                rpcTitle: {
                    label: "RPC-huvud",
                    description: "Titeln på din RPC"
                },
                statDisplay: {
                    label: "Visa statistik",
                    description: "Vad ska RPC visa? (Du har förmodligen bara en rad tillåten)",
                    today: "Antal meddelanden skickade idag",
                    alltime: "Antal meddelanden som skickas hela tiden",
                    listened: "Veckans mest lyssnade album"
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
                    description: "Använd skivomslag som RPC-bild? (Om Last.fm-skärm är vald)"
                },
                lastFMStatFormat: {
                    label: "Last.fm statistikformat",
                    description: "Hur ska Last.fm-statistiken formateras? $album ersätts med albumnamnet, $artist ersätts med artistnamnet"
                }
            },
            noInfo: "Ingen information just nu :(",
            messagesToday: "Meddelanden skickade idag: {{count}}",
            messagesAllTime: "Meddelanden skickade hela tiden: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SparaFavoritGIF",
            description: "Exporterar favorit-GIF-länkar",
            toolbox: "Spara favorit-GIF-filer",
            title: "Spara favorit-GIF-filer",
            command: {
                savegifs: {
                    description: "Sparar alla favorit-GIF-länkar till en textfil"
                },
                saveworkinggifs: {
                    description: "Testar alla dina favorit-GIF-filer och sparar bara de som fortfarande fungerar"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Visa verktygslåda-knapp",
                    description: "Visar knappen \"Spara favorit-GIF\" i Plexcord Toolbox (kräver omstart)"
                }
            },
            toast: {
                save: "GIF-filer har sparats som {{filename}}",
                failed: "GIF-filer kunde inte sparas",
                no: "Favorit GIF hittades inte!",
                testing: "{{count}} GIF-filer testas, detta kan ta lite tid...",
                noneWorking: "Ingen av dina sparade GIF-filer verkar fungera.",
                saved: "{{broken}} potentiellt trasiga GIF-filer filtrerades bort. {{saved}} fungerande GIF-filer har sparats."
            }
        },
        scheduledMessages: {
            name: "Schemalagda meddelanden",
            description: "Schemalägg att meddelanden ska skickas vid en viss tidpunkt eller efter en viss fördröjning.",
            toolbox: {
                toggle: "Visa schemalagda meddelanden"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Maximalt antal meddelanden per minut",
                    description: "Det maximala antalet schemalagda meddelanden som kan skickas på en kanal under samma minut."
                },
                checkIntervalSeconds: {
                    label: "Kontrollintervall (sekunder)",
                    description: "Hur ofta insticksprogrammet kontrollerar om det finns meddelanden att skicka."
                },
                showNotifications: {
                    label: "Visa aviseringar",
                    description: "Visar avisering (toast) när meddelanden skickas."
                },
                showPhantomMessages: {
                    label: "Visa spökmeddelanden",
                    description: "Visar schemalagda meddelanden som spökmeddelanden (tillfälliga) i chatten."
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
                messageFailed: "Schemalagt meddelande kunde inte skickas",
                maxMessagesReached: "Maximal gräns på {{max}} meddelanden per minut och kanal har nåtts",
                messageScheduled: "Meddelande planerat!",
                messageRemoved: "Schemalagt meddelande har tagits bort",
                allCleared: "Alla schemalagda meddelanden raderades"
            },
            button: {
                tooltipOn: "Planeringsläge PÅ (klicka för att inaktivera, högerklicka för lista)",
                tooltipOff: "Planeringsläge AV (klicka för att aktivera, högerklicka för lista)"
            },
            accessory: {
                scheduledFor: "Schemalagt till {{date}} {{timeLeft}}",
                remaining: {
                    days: "{{days}}g {{hours}}s kvar",
                    hours: "{{hours}}s {{minutes}}minut kvar",
                    minutes: "{{minutes}}min kvar"
                }
            },
            scheduleModal: {
                title: "Planmeddelande",
                schedulingFor: "Planerad kanal: {{channel}}",
                scheduleType: "Planeringstyp",
                delay: "Dröjsmål",
                specificTime: "Specifik tid",
                delayMinutes: "Fördröjning (minuter)",
                dateTime: "Datum och tid",
                error: {
                    invalidDelay: "Vänligen ange en giltig fördröjningstid (minst 1 minut)",
                    invalidDateTime: "Välj ett framtida datum och tid"
                },
                schedule: "Planerad",
                cancel: "Avboka"
            },
            viewModal: {
                title: "Schemalagda meddelanden",
                clearAll: "Rensa alla",
                noMessages: "Inga schemalagda meddelanden",
                delete: "Sil",
                close: "Kvartal"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Det irriterande \"Vi tappade förstoringsglaset!\" fixar felet.",
            notPerfect: "Den här korrigeringen är inte perfekt, så du kan behöva ladda om sökfältet för att åtgärda problemen.",
            paragraph1: "Discord tillåter endast en maximal offset på 5000 (vilket är det som orsakar förstoringsfelet).",
            paragraph2: "Det betyder att du kan se exakt 5000 meddelanden i det förflutna och 5000 meddelanden i framtiden (sorterade efter äldsta).",
            paragraph3: "Denna plugin växlar till den motsatta sorteringsmetoden för att kringgå Discords begränsning,",
            paragraph4: "men om det finns ett stort sökresultat och du försöker visa ett meddelande som inte kan nås med någon av sorteringsmetoderna,",
            paragraph5: "plugin-programmet visar endast offset 0 (nyaste eller äldsta meddelandet beroende på sorteringsmetod)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Discord spelar alltid upp den hemliga versionen av ringsignalen (förutom för speciella ringsignalhändelser)",
            option: {
                onlySnow: {
                    label: "Endast under Snow Ringtone Event",
                    description: "Spela endast Snow Halation Theme"
                }
            }
        },
        summaries: {
            name: "Sammanfattningar",
            description: "Aktiverar Discords experimentella sammanfattningar-funktion på alla servrar och visar AI-genererade sammanfattningar av konversationer",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Sammanfattning raderingströskel (dagar)",
                    description: "Antalet dagar ett sammandrag är giltigt innan det tas bort. Observera att max 50 sammanfattningar lagras per kanal"
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Lägger till den aktuella kanalen i popup-fönstret för vidarebefordran"
        },
        sendTimestamps: {
            name: "Skicka tidsstämplar",
            description: "Skicka enkelt tidsstämplar med chatbox-knapp och textgenvägar. Läs den utökade beskrivningen!",
            sample: {
                paragraph1: "För att snabbt skicka tidsstämplar, lägg till tidsstämplar i formatet `HH:MM` (inklusive citationstecken!) till ditt meddelande",
                paragraph2: "Se exempel nedan.\nOm du behöver något mer specifikt, använd datumknappen i chattfältet!",
                examples: "Exempel:"
            },
            modal: {
                title: "Tidsstämpelväljare",
                light: "Öppna",
                dark: "Mörk",
                format: "Tidsstämpelformat",
                preview: "Förhandsvisning",
                insert: "Tillägga",
                insertTimestamp: "Lägg till tidsstämpel"
            },
            option: {
                replaceMessageContents: {
                    label: "Ändra meddelandeinnehåll",
                    description: "Ändra tidsstämplar i meddelandeinnehåll"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Låter dig visa information om en server",
            context: {
                serverInfo: "Serverinformation"
            },
            option: {
                sorting: {
                    label: "Arrangemang",
                    description: "Användarnamn eller visningsnamn om tillämpligt",
                    username: "Användarnamn",
                    displayname: "Visningsnamn",
                    none: "Sortering"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Serverinformation",
                    friends: "Vänner",
                    mutualUsers: "Vanliga användare",
                    blockedUsers: "Blockerade användare",
                    ignoredUsers: "Ignorerade användare"
                },
                owner: "Serverägare",
                loading: "Belastning...",
                createdAt: "Skapandedatum",
                joinedAt: "Anslutningsdatum",
                vanityLink: "Speciell inbjudningslänk",
                preferredLocale: "Önskad region",
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
            description: "Lägger till antal onlinevänner eller antal servrar till serverlistan",
            friends: "Vän",
            servers: "Presentatör",
            option: {
                mode: {
                    label: "Mod",
                    description: "Läge att visa i serverlistan",
                    friend: "Endast antal vänner online",
                    server: "Endast antal servrar",
                    both: "Antal både server- och onlinevänner"
                },
                useCompact: {
                    label: "Kompakt Modu Kullan",
                    description: "Gör att förklaringen endast visas med text"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Navigera dina servrar bättre med snabbsökningsknappen",
            tooltip: "Vi köper"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Tar med VSCode-stil kodblock som drivs av Shiki till Discord",
            option: {
                theme: {
                    label: "Han",
                    description: "Standardteman"
                },
                customTheme: {
                    label: "Anpassat tema",
                    description: "Länk till ett anpassat VSCode-tema",
                    mustURL: "Måste vara en giltig webbadress",
                    mustJSON: "Måste vara en JSON-fil"
                },
                tryHljs: {
                    label: "Backup till Hljs",
                    description: "Använd den ljusare standardfärgen och -temat för Discord.",
                    never: "Aldrig",
                    secondary: "Välj Shiki framför Highlight.js",
                    primary: "Välj Highlight.js framför Shiki",
                    always: "Alltid"
                },
                useDevIcon: {
                    label: "Använd Devicon för språkikoner",
                    description: "Hur man visar språkikoner i kodblock",
                    disabled: "Inaktiverad",
                    colorless: "Färglös",
                    colored: "Färgrik"
                },
                bgOpacity: {
                    label: "Bakgrund Opacitet",
                    description: "bakgrundens opacitet"
                }
            },
            button: {
                copy: "kopiera",
                copied: "Kopierade!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Den visar alltid alla meddelandeknappar, oavsett om du trycker på Shift-tangenten eller inte.",
            option: {
                noShiftDelete: {
                    label: "Ta bort utan skift",
                    description: "Tar bort behovet av att trycka på skifttangenten för att radera ett meddelande."
                },
                noShiftPin: {
                    label: "Fixering utan Shift",
                    description: "Tar bort behovet av att trycka på shift-tangenten för att fästa ett meddelande."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Visar märken bredvid meddelandeförfattarens namn i chatten.",
            option: {
                showPlexcordDonor: {
                    label: "Visa ditt Plexcord-donatormärke",
                    description: "Aktivera för att visa Plexcord Donor-märken i chatten."
                },
                plexcordDonorPosition: {
                    label: "Plats för Plexcord Donor Badge",
                    description: "Placering av Plexcord Donor-märken."
                },
                showPlexcordContributor: {
                    label: "Visa Plexcord Contributor Badge",
                    description: "Aktivera för att visa Plexcord Contributor-märken i chatten."
                },
                plexcordContributorPosition: {
                    label: "Plats för Plexcord Contributor Badge",
                    description: "Plats för Plexcord Contributor-märken."
                },
                showDiscordProfile: {
                    label: "Visa Discord-profilmärket",
                    description: "Aktivera för att visa Discord-profilmärken i chatten."
                },
                discordProfilePosition: {
                    label: "Plats för Discord-profilmärket",
                    description: "Plats för Discord-profilmärken."
                },
                showDiscordNitro: {
                    label: "Visa Discord Nitro-märket",
                    description: "Aktivera för att visa Discord Nitro-märken i chatten."
                },
                discordNitroPosition: {
                    label: "Discord Nitro Badge Location",
                    description: "Placering av Discord Nitro-märken."
                },
                badgeSettings: {
                    label: "Märkeinställningar",
                    description: "Konfigurera platserna för andra märken som visas i chatten.",
                    modal: "Dra för att ändra ordning på märken; Klicka för att aktivera/avaktivera en specifik märkestyp."
                }
            },
            badge: {
                plexcord: "Plexcord supportermärke",
                contributor: "Plexcord-deltagaremärke",
                discordProfile: "Discord profil rozetleri (HypeSquad, Discord Staff, Active Developer vb.)",
                nitro: "nitromärke",
                staff: "Discord Personal",
                partner: "Partnerserverägare",
                events: "HypeSquad-evenemang",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad-balans",
                bugHunter: "Discord Bug Hunter",
                earlyVerifiedBotDeveloper: "Tidig verifierad botutvecklare",
                earlySupporter: "Tidig supporter",
                moderatorProgram: "Utexaminerad moderatorprogram"
            },
            modal: {
                plexcordContributor: "Plexcord-deltagare",
                discordNitro: "Discord Nitro",
                basic: "Grundläggande",
                classic: "Klassisk"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Visar länkade konton i användarens popup-kort",
            option: {
                iconSize: {
                    label: "Ikonstorlek",
                    description: "Ikonstorlek (px)"
                },
                iconSpacing: {
                    label: "Ikon utrymme",
                    description: "ikonens marginal",
                    compact: "Kompakt",
                    cozy: "Bekväm",
                    roomy: "Bred"
                }
            }
        },
        showHiddenChannels: {
            name: "Visa dolda kanaler",
            description: "Visar kanaler som du inte har behörighet att komma åt.",
            tooltip: "Hemlig kanal",
            option: {
                channelStyle: {
                    label: "Kanalstil",
                    description: "Stilen som används för att visa dolda kanaler.",
                    classic: "Klassisk",
                    muted: "Tyst",
                    showUnreads: "Visa oläst",
                    mutedWithUnreads: "Visa tystad och oläst"
                },
                showMode: {
                    label: "Visningsläge",
                    description: "Läget som används för att visa dolda kanaler.",
                    lock: "Enkel stil med låsikon",
                    hidden: "Dämpad stil med dold ögonikon till höger",
                    lockIconRight: "Låsikon till höger"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Standardstatus för behöriga användare och roller",
                    description: "Om menyn för tillåtna användare och roller kommer att vara öppen som standard i privata kanaler"
                }
            },
            channelType: {
                text: "text",
                announcement: "meddelande",
                forum: "forum",
                voice: "ses",
                stage: "scen"
            },
            sortOrder: {
                latestActivity: "Senaste evenemanget",
                creationDate: "Skapandedatum"
            },
            forumLayout: {
                default: "Inte inställt",
                list: "Listvy",
                grid: "gallerivy"
            },
            videoQuality: {
                auto: "Automatisk",
                full: "720p"
            },
            modal: {
                hidden: "dold",
                locked: "låst",
                threads: "ämnen",
                posts: "inlägg",
                messages: "meddelanden",
                post: "posta",
                message: "meddelande",
                unknown: "okänd",
                permissionDetails: "Tillståndsinformation",
                thisIsA: "Det här är en {{status}} {{channelType}} kanal",
                canNotSee: "Du kan inte se {{type}}-delen av den här kanalen.",
                guidelines: "Men du kan se deras instruktioner:",
                lastCreated: "Senast skapad {{type}}:",
                lastPin: "Senaste inlägg fäst:",
                threadSlowmode: "Standardtråd långsamt läge:",
                slowmode: "Långsamt läge:",
                bitrate: "Bithastighet:",
                region: "Område:",
                automatic: "Automatisk",
                videoQuality: "Videokvalitetsläge:",
                inactiveArchiveDuration: "Standardinaktivitetsperiod före arkivering {{typ}}",
                defaultLayout: "Standardlayout:",
                defaultSort: "Standardsortering:",
                defaultReaction: "Standard reaktion emoji:",
                requireTag: "Det är obligatoriskt att sätta en tagg för inlägg i detta forum.",
                availableTags: "Tillgängliga taggar:",
                allowedUsersAndRoles: "Tillåtna användare och roller:",
                hideAllowedUsersAndRoles: "Dölj behöriga användare och roller",
                viewAllowedUsersAndRoles: "Visa behöriga användare och roller"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Den visar olika dolda och endast moderatorer oavsett behörighet.",
            option: {
                showTimeouts: {
                    label: "Visa medlemstimeout i chatten",
                    description: "Visa tidsgräns för medlemmar i chatten."
                },
                showInvitesPaused: {
                    label: "Visa information om pausade inbjudningar",
                    description: "Visa att inbjudningar är pausade i serverlistan."
                },
                showModView: {
                    label: "Visa modvy",
                    description: "Visa medlemsläge visa snabbmenyalternativ på alla servrar."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Lägger till alternativet visa inbäddning i snabbmenyn för länkar som inte har inbäddade",
            context: {
                embed: {
                    show: "Visa Bädda in",
                    hide: "Ta bort Bädda in"
                }
            },
            error: {
                failed: "Det gick inte att hämta inbäddningen",
                noEmbed: "Det gick inte att bädda in"
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
                memberList: {
                    label: "Medlemslista",
                    description: "Visa det första tillgängliga namnet i ditt anpassade namnformat i medlemslistan."
                },
                typingIndicator: {
                    label: "Skrivindikator",
                    description: "Visa det första tillgängliga namnet i ditt anpassade namnformat i skrivindikatorn."
                },
                profilePopout: {
                    label: "Profil popup-kort",
                    description: "Visa det första tillgängliga namnet i ditt anpassade namnformat i popup-kort för profiler."
                },
                voiceChannels: {
                    label: "Ljudkanaler",
                    description: "Visa det första tillgängliga namnet i ditt anpassade namnformat på ljudkanaler."
                },
                reactions: {
                    label: "Reaktioner",
                    description: "Visa det första tillgängliga namnet i ditt anpassade namnformat i react-verktygstips och visa hela namnet i react-popups."
                },
                discriminators: {
                    label: "Visa Parsers",
                    description: "Lägg till parser till botanvändarnamn. Parsers har tagits bort för vanliga användare, men används fortfarande för bots. Som standard motsvarar en bots användarnamn en användares globala namn, och därför kan flera botar ha samma användarnamn. Att lägga till parsers gör dem unika igen."
                },
                hideDefaultAtSign: {
                    label: "Hide Default @ Sign",
                    description: "Dölj standardsymbolen '@' i början av namnet i omnämnanden och svar. Gäller endast om relevant funktion är aktiverad."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Förkorta alla namn i utgivarläge",
                    description: "Förkorta alla namn i sändningsläge, inte bara användarnamn."
                },
                removeDuplicates: {
                    label: "Ta bort dubbletter",
                    description: "Om två av namnen är lika, ta bort dubbletterna och lämna bara de unika."
                },
                ignoreFonts: {
                    label: "Ignorera teckensnitt",
                    description: "För andra, tredje och fjärde namn, använd GG SANS, och ignorera användarens anpassade teckensnitt."
                },
                ignoreGradients: {
                    label: "Ignorera övertoningar",
                    description: "För icke-primära namn, om rollen har en gradient och följande färg är inställd på 'Role+-#', använd primärfärgen istället för hela gradienten, och om det finns en nitroeffekt, ignorera den helt."
                },
                animateGradients: {
                    label: "Gör övertoningar animerade",
                    description: "Visa animering om andra, tredje och fjärde namn har en rollgradient. Inaktiverad om \"Ignorera övertoningar\" är aktiverat eller reducerad rörelse är på."
                },
                nameSeparator: {
                    label: "Namnavskiljare",
                    description: "Separator att använda mellan namn. Standard är ett blanksteg."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Vännens namn Visa endast i privata meddelanden",
                    description: "Visa endast vänners namn i privata meddelanden, inte på servrar."
                },
                customNameOnlyInDirectMessages: {
                    label: "Anpassat namn Visa endast i privata meddelanden",
                    description: "Visa anpassade namn endast i privata meddelanden, inte på servrar."
                },
                includedNames: {
                    label: "Inkluderade namn",
                    description: "Ordningen i vilken användarnamn, visningsnamn, smeknamn och vännamn visas. Använd dessa platshållare: {user}, {display}, {nick}, {friend}. Om ett namn inte är tillgängligt kan du skriva de alternativ som ska användas, separerade med kommatecken: {vän, smeknamn, display}. Du kan lägga till tre prefix och tre suffix för varje namn."
                },
                customNameColor: {
                    label: "Anpassad namnfärg",
                    description: "Färgen som ska användas för det anpassade namnet du tilldelar användaren, om det inte är det första som visas. Den accepterar alla giltiga CSS-indata. Använd \"Roll\" för att hålla reda på användarens överordnade rollfärger, nitroeffektfärger eller IRCColors-färg (om aktiverad). Använd 'Role+-#' för att justera ljusstyrkan med denna procentandel (t.ex. 'Role+15')"
                },
                friendNameColor: {
                    label: "Vän namn färg",
                    description: "Färgen som ska användas när kompisens namn inte är det förnamn som visas. Den accepterar alla giltiga CSS-indata. Använd \"Roll\" för att hålla reda på användarens överordnade rollfärger, nitroeffektfärger eller IRCColors-färg (om aktiverad). Använd 'Role+-#' för att justera ljusstyrkan med denna procentandel (t.ex. 'Role+15')"
                },
                nicknameColor: {
                    label: "Smeknamn färg",
                    description: "Färgen som ska användas när smeknamnet inte är det förnamn som visas. Den accepterar alla giltiga CSS-indata. Använd \"Roll\" för att hålla reda på användarens överordnade rollfärger, nitroeffektfärger eller IRCColors-färg (om aktiverad). Använd 'Role+-#' för att justera ljusstyrkan med denna procentandel (t.ex. 'Role+15')"
                },
                displayNameColor: {
                    label: "Visningsnamn Färg",
                    description: "Färgen som ska användas när visningsnamnet inte är det första visade namnet. Den accepterar alla giltiga CSS-indata. Använd \"Roll\" för att hålla reda på användarens överordnade rollfärger, nitroeffektfärger eller IRCColors-färg (om aktiverad). Använd 'Role+-#' för att justera ljusstyrkan med denna procentandel (t.ex. 'Role+15')"
                },
                usernameColor: {
                    label: "Användarnamn Färg",
                    description: "Färgen som ska användas när användarnamnet inte är det förnamn som visas. Den accepterar alla giltiga CSS-indata. Använd \"Roll\" för att hålla reda på användarens överordnade rollfärger, nitroeffektfärger eller IRCColors-färg (om aktiverad). Använd 'Role+-#' för att justera ljusstyrkan med denna procentandel (t.ex. 'Role+15')"
                },
                triggerNameRerender: {
                    label: "Utlösa namnregenerering",
                    description: "Om du ändrar denna inställning utlöses namnet som återskapas."
                }
            },
            modal: {
                change: {
                    title: "Ändra SMYN-användarnamn",
                },
                add: {
                    title: "Lägg till SMYN smeknamn"
                },
                setCustom: "Ange ett anpassat SMYN smeknamn för denna användare. Använd genom att ange {custom} i SMYN-mallinställningar.",
                nickname: "Smeknamn SMYN",
                reset: "Återställ SMYN smeknamn",
                cancel: "Avboka"
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Visar kanaler dolda bakom serverresurser i kanallistan"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Visar låtnamn istället för artist för Spotify-evenemang"
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Anger hur länge en användare kommer att ha timeout i timeoutikonens verktygstips eller bredvid den",
            option: {
                displayStyle: {
                    label: "Visa stil",
                    description: "Så här ser du timeoutperiod",
                    tooltip: "I Verktygstips",
                    inline: "Bredvid timeout-ikonen"
                }
            }
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Öppna en annan kanal eller DM som en sidofält eller popup",
            toolbox: {
                label: "Öppna Föregående chatt"
            },
            context: {
                label: "Öppna Sidebar Chat"
            },
            modal: {
                switch: "Byt kanal",
                popout: "Öppna Chatt som popup",
                close: "Stäng Sidopanelchatt"
            },
            option: {
                persistSidebar: {
                    label: "Gör Sidebar Chat permanent",
                    description: "Gör det möjligt för sidofältschatten att förbli öppen när Discord startas om"
                },
                patchCommunity: {
                    label: "Applicera Community Patch",
                    description: "Lappar objekt på communityservrar, som kanalbläddraren eller fliken Medlemmar."
                }
            }
        },
        signature: {
            name: "Signatur",
            description: "Automatisk signatur/slut på meddelandetext",
            option: {
                name: {
                    label: "Signatur",
                    description: "Signaturtext som ska läggas till i slutet av dina meddelanden"
                },
                textHeader: {
                    label: "Text Titel",
                    description: "Titel som ska läggas till i början av texten"
                },
                showIcon: {
                    label: "Visa ikon",
                    description: "Visa en ikon i chattfältet för att slå på och av plugin-programmet"
                },
                contextMenu: {
                    label: "Snabbmeny",
                    description: "Lägg till alternativ för att växla funktionalitet på snabbmenyn för chatt-inloggning"
                },
                isEnabled: {
                    label: "Effektiv",
                    description: "Växla funktion"
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
                    name: "Signatur",
                    description: "Slå på och av din signatur",
                    toogle: "Ändra din signatur (standardbeteende: ändra)",
                    enabled: "Signatur aktiverad",
                    disabled: "Signaturen är inaktiverad"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Lägger till en knapp i chattfältet för att slå på och av tyst meddelandesändning.",
            option: {
                persistState: {
                    label: "Gör status permanent",
                    description: "Bestäm hur växlingsstatusen för tyst meddelande ska fortsätta",
                    none: "Det ska inte vara permanent (det ska återställas när kanalen byts)",
                    channels: "Gör det beständigt över kanaler",
                    restarts: "Fortsätt över kanalerna och Discord startar om"
                },
                autoDisable: {
                    label: "Autoavaktivera",
                    description: "Inaktivera automatiskt funktionen igen efter att ha skickat ett tyst meddelande"
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
                        name: "växla",
                        description: "Växla funktionen globalt, per kanal eller per server.",
                        global: "Global",
                        channel: "Kanal",
                        guild: "Presentatör"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Dölj andra användares skrivindikatorer från toppen av chattfältet."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Dölj andra användares skrivindikatorer från medlemslistan."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Visa en ikon i chattfältet för att snabbt slå på och av plugin-programmet."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Lägg till en rullgardinsmeny i chattkontextmenyn för att snabbt ändra plugininställningar."
                    },
                    defaultHidden: {
                        name: "defaultDold",
                        description: "Bestämmer om skrivinformationen i DM/kanaler/servrar kommer att döljas som standard."
                    }
                }
            },
            content: {
                updated: "Inställningarna för tyst skrivning har uppdaterats.",
                noChanges: "Inga ändringar gjordes i inställningarna för tyst skrivning."
            },
            tooltip: {
                hidden: "Det står Hidden ({{location}})",
                visible: "Skriver synligt ({{location}})",
                global: "Att skriva synligt (globalt)"
            },
            option: {
                enabledGlobally: {
                    label: "Globalt aktiv",
                    description: "Slå på/av din egen skrivindikator globalt."
                },
                hideChatBoxTypingIndicators: {
                    label: "Dölj indikatorer för att skriva chattruta",
                    description: "Dölj skrivindikatorer överst i andra användares chattrutor."
                },
                hideMembersListTypingIndicators: {
                    label: "Göm medlemslista Skrivindikatorer",
                    description: "Dölj skrivindikatorer i andra användares medlemslista."
                },
                chatIcon: {
                    label: "Chattikon",
                    description: "Visa en ikon i chattfältet för att snabbt byta plugin."
                },
                chatIconLeftClickAction: {
                    label: "Chattikon Vänsterklick Åtgärd",
                    description: "Bestäm vad du ska göra när du vänsterklickar på chattikonen.",
                    global: "Ändra global skrivstatus",
                    channel: "Ändra skrivstatus för kanal",
                    guild: "Ändra skrivning till serverstatus",
                    settings: "Öppna Plugin-inställningar"
                },
                chatIconMiddleClickAction: {
                    label: "Chattikon Mellanklick Åtgärd",
                    description: "Bestäm vad du ska göra när du mittklickar på chattikonen.",
                    global: "Ändra global skrivstatus",
                    channel: "Ändra skrivstatus för kanal",
                    guild: "Ändra skrivning till serverstatus",
                    settings: "Öppna Plugin-inställningar"
                },
                chatIconRightClickAction: {
                    label: "Chattikon Högerklicka Åtgärd",
                    description: "Bestäm vad du ska göra när du högerklickar på chattikonen.",
                    global: "Ändra global skrivstatus",
                    channel: "Ändra skrivstatus för kanal",
                    guild: "Ändra skrivning till serverstatus",
                    settings: "Öppna Plugin-inställningar"
                },
                chatContextMenu: {
                    label: "Chatkontextmeny",
                    description: "Lägg till en rullgardinsmeny i chattkontextmenyn för att snabbt ändra plugininställningar."
                },
                defaultHidden: {
                    label: "Standard Dold",
                    description: "Om den är aktiverad kommer din indikator att döljas för andra användare på alla DM/kanaler/servrar som inte finns med i listan \"Inaktiverade platser\" nedan. Om den är inaktiverad kommer din indikator att visas på platser som inte ingår i listan \"Aktiva platser\"."
                },
                enabledLocations: {
                    label: "Aktiva platser",
                    description: "Aktivera funktionen för dessa ID:n. Den accepterar kommaseparerade DM-ID:n, kanal-ID:n och server-ID:n. Används endast om \"Default Private\" är inaktiverat."
                },
                disabledLocations: {
                    label: "Inaktiverade platser",
                    description: "Inaktivera funktionen för dessa ID:n. Den accepterar kommaseparerade DM-ID:n, kanal-ID:n och server-ID:n. Används endast om \"Default Private\" är aktiverat."
                }
            }
        },
        snowfall: {
            name: "Snöfall",
            description: "Låt det snöa på Discord!",
            about: {
                title: "Information",
                paragraph: "Detta plugin lägger till en snöfallseffekt med jultema över Discord-gränssnittet. Du kan ändra snötypen från inställningarna nedan.",
                note: "OBS: Även om det här plugin-programmet inte påverkar prestanda mer än ett genomsnittligt Plexcord-plugin-program på de flesta datorer, kan det orsaka viss fördröjning på low-end-system."
            },
            option: {
                typeOfSnow: {
                    label: "biltyp",
                    description: "Ändrar typen av snö som visas (påverkar prestandan).",
                    solid: "Enfärgad (högsta prestanda)",
                    text: "Metin (Medium Performance)",
                    emoji: "Visuellt (minst prestanda)"
                },
                maxSize: {
                    label: "Maximal storlek",
                    description: "Maximal snöflingastorlek"
                },
                speed: {
                    label: "Hastighet",
                    description: "Snöfallshastighet (högre = snabbare fall)"
                },
                flakesPerSecond: {
                    label: "Snöflingor per sekund",
                    description: "Mängd snöflingor som faller per sekund (högre = kraftigare nederbörd)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Sorterar vänförfrågningar efter mottagna datum",
            tooltip: "Tillagd – {{date}}",
            option: {
                showDates: {
                    label: "Visa datum",
                    description: "Visa datum i vänförfrågningar"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Spelar in alla soundboardljud som spelas i röstchatt och låter dig ladda ner dem",
            tooltip: "Öppna SoundBoard Log",
            option: {
                savedIds: {
                    label: "Sparade Soundboard-ID:n",
                    description: "Mängden soundboard-ID du vill spara åt gången (0 låter dig spara obegränsat)",
                    notNumber: "Värdet är inte ett tal.",
                    cantDecimal: "Värdet får inte vara ett decimaltal.",
                    cantNegative: "Värdet får inte vara ett negativt tal.",
                    heading: "Mängden soundboard-ID du vill spara åt gången (0 låter dig spara obegränsat)",
                    warning: "Varning! Om du ställer in numret till ett lägre värde återställs loggarna!",
                    placeholder: "Ange ett nummer"
                },
                fileType: {
                    label: "Filtyp",
                    description: "Formatet du vill spara din fil i"
                },
                openLogs: {
                    label: "Öppna Loggar",
                    description: "Visa loggar",
                    button: "Öppna Loggar"
                },
                soundVolume: {
                    label: "Ljudnivå",
                    description: "Volym av på/av ljud (0 inaktiverar)"
                },
                iconLocation: {
                    label: "Ikon Plats",
                    description: "Välj var SoundBoard Log-ikonen visas (kräver omstart)",
                    toolbar: "Verktygsfält",
                    chatInput: "Chatt Logga in"
                }
            },
            modal: {
                title: "Soundboard-loggar",
                loading: "Ljuden laddas...",
                noLogs: "Inget ljud har spelats in ännu. Gå med i en röstchatt för att logga!",
                clearLogs: "Rensa loggar",
                played: "Spelat {{time}} gånger",
                last: "Senast spelad:",
                also: "Han stal också:",
                download: "Ladda ner",
                copyId: "Kopiera ID",
                copied: "ID kopierat till urklipp!",
                playSound: "Spela ljud",
                moreUsers: "Andra använde det här ljudet också...",
                volume: "Soundboard volym"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Delar upp stora meddelanden i flera meddelanden för att passa Discords meddelandegräns.",
            option: {
                maxLength: {
                    label: "Maximal meddelandelängd",
                    description: "Den maximala längden ett meddelande kan ha innan det delas. Ställ in på 0 för automatisk detektering."
                },
                disableFileConversion: {
                    label: "Inaktivera filkonvertering",
                    description: "Om det är aktiverat inaktiverar du filkonvertering för stora meddelanden."
                },
                sendDelay: {
                    label: "Leveransförsening",
                    description: "Väntetid i sekunder mellan varje spår."
                },
                hardSplit: {
                    label: "Solid partition",
                    description: "Om det är aktiverat delas det från det sista tecknet istället för ett mellanslag/nyrad."
                },
                splitInSlowmode: {
                    label: "Dela i långsamt läge",
                    description: "Dela meddelanden om långsamt läge är aktiverat på kanalen?"
                },
                slowmodeMax: {
                    label: "Långsamt läge Max",
                    description: "Maximal tillåtna tid för långsamt läge vid delning i långsamt läge."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Lägger till en växlingsknapp för synlighet av Spotify-aktivitet.",
            tooltip: {
                enable: "Öppna Spotify-aktivitet",
                disable: "Stäng av Spotify-aktivitet"
            },
            option: {
                location: {
                    label: "Kvinnor",
                    description: "Var ska du visa Spotify på/av-knappen",
                    panel: "Bredvid Mute/Mute",
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
            description: "Tillåter gratis samlyssning, blockerar automatisk paus i röstchatt och håller Spotify-aktivitet spelad när den är inaktiv",
            option: {
                noSpotifyAutoPause: {
                    label: "Stäng av Spotify Auto-paus",
                    description: "Inaktivera Spotifys autopaus."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Återuppta Spotify-aktivitet när du är inaktiv",
                    description: "Tillåter Spotify-aktivitet att fortsätta spela när den är inaktiv"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShare-kommandon",
            description: "Dela din nuvarande Spotify-låt, album eller artist med snedstreckkommandon (/spår, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Dela din nuvarande Spotify {{type}} i chatten",
                    track: "Du lyssnar inte på någon låt på Spotify.",
                    find: "Låten gick inte att hitta på Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimes",
            description: "Lägger till starttider i menyn Inställningar",
            modal: {
                title: "Starttider",
                ended: "Titta på sluttid:",
                start: "Början",
                interval: "december",
                delta: "Delta",
                event: "Olay",
                serverTrace: "Serverövervakning",
                loading: "Belastning..."
            }
        },
        statusNotifications: {
            name: "Statusmeddelanden",
            description: "Lägger till aviseringar för statusändringar",
            loading: "Belastning...",
            option: {
                notificationsSound: {
                    label: "Aviseringsljud",
                    description: "Spela aviseringsljud för statusaviseringar?"
                },
                usersList: {
                    label: "Användarlista",
                    description: "Användare ska meddelas när statusändringar inträffar",
                    empty: "Inga användare övervakade. Du kan lägga till en användare genom att högerklicka på dem och använda alternativet \"Statusmeddelanden\"."
                }
            },
            context: {
                label: "Statusmeddelanden",
                notifications: "Aviseringar",
                type: {
                    all: "Alla",
                    online: "online",
                    offline: "off-line",
                    none: "Ingen"
                }
            },
            notification: {
                unknownUser: "Användare",
                title: "Statusmeddelanden",
            },
            status: {
                online: "online",
                idle: "på tomgång",
                dnd: "Stör ej",
                offline: "off-line",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Låter dig spara dina statusar och ändra dem senare",
            button: {
                remember: "Kom ihåg Status",
            },
            context: {
                edit: "Redigera anpassade förinställningar",
                set: "Ställ in undantag"
            },
            notification: {
                successfully: "Status har sparats"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Synkronisera din status med Steam! (Online, Borta, Osynlig eller Offline.)",
            option: {
                onlineStatus: {
                    label: "Onlinestatus",
                    description: "Steam-status medan Discord Online"
                },
                idleStatus: {
                    label: "Inaktiv status",
                    description: "Steam-status när Discord är inaktiv"
                },
                dndStatus: {
                    label: "Stör ej-status",
                    description: "Steam-status medan Discord Stör ej"
                },
                invisibleStatus: {
                    label: "Osynlig status",
                    description: "Steam-status medan Discord Invisible"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Bli osynlig om evenemanget är privat",
                    description: "Ställ in Steam-status till Invisible när Discord-aktivitet är dold"
                }
            },
            status: {
                online: "online",
                away: "Bort",
                invisible: "Osynlig",
                offline: "Offline (koppla från Steam Chat)",
                disabled: "Inaktiverad"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Låter dig förhindra att klistermärken visas.",
            option: {
                showGif: {
                    label: "Visa GIF",
                    description: "Om man ska visa en cool katt-GIF."
                },
                showMessage: {
                    label: "Visa meddelande",
                    description: "Om ett meddelande ska visas som anger vilket ID som är blockerat"
                },
                showButton: {
                    label: "Visa knapp",
                    description: "Om du vill visa en knapp för att avblockera GIF"
                },
                blockedStickers: {
                    label: "Blockerade klistermärken",
                    description: "Lista över blockerade dekal-ID:n (redigera inte om du inte vet vad du gör)"
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
            description: "När du väljer en dekal i dekalväljaren lägger den till den i chattrutan istället för att skicka den direkt"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Aktiverar automatiskt streamerläge när du börjar sända på Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Inaktiverar önskade streaming-codecs",
            option: {
                disableAv1Codec: {
                    label: "Inaktivera AV1 Codec",
                    description: "Förhindrar att Discord överväger att använda AV1 för streaming."
                },
                disableH265Codec: {
                    label: "Inaktivera H265 Codec",
                    description: "Hindrar Discord från att överväga att använda H265 för streaming."
                },
                disableH264Codec: {
                    label: "Inaktivera H264 Codec",
                    description: "Hindrar Discord från att överväga att använda H264 för streaming."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Anpassa gränsen för superreaktioner som spelas samtidigt och använd superreaktion som standard",
            option: {
                superReactByDefault: {
                    label: "Superreaktiv som standard",
                    description: "Reaktionsväljaren använder superreaktioner som standard"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Obegränsade superreaktionsspelningar",
                    description: "Tar bort superreaktionsgränsen vid samtidig uppspelning"
                },
                superReactionPlayingLimit: {
                    label: "Uppspelningsgräns för superreaktion",
                    description: "Maximalt antal superreaktioner att spela samtidigt. 0 inaktiverar Superreaktioner från att spela"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Ändra texten i dina meddelanden. Du kan hitta färdiga regler i #textreplace-rules-kanalen på Plexcord-servern",
            option: {
                replace: {
                    label: "Ändra",
                    string: "Använder vanlig text",
                    regex: "Använder Regex",
                    myMessages: "Tillämpa på dina egna meddelanden (synliga för alla)",
                    othersMessages: "Tillämpa på andras meddelanden (synligt endast för dig)",
                    allMessages: "Tillämpa på alla meddelanden"
                },
                stringRules: {
                    label: "Regler för vanlig text",
                    description: "Textersättningsregler som använder klartextmatchning."
                },
                regexRules: {
                    label: "Regex regler",
                    description: "Regler för att ersätta text med reguljära uttryck."
                }
            },
            modal: {
                title: "Testa reglerna",
                find: "Bul",
                replace: "Ändra",
                includes: "Bara om den innehåller",
                type: "Skriv ett meddelande",
                applied: "Meddelande med tillämpade regler"
            }
        },
        themeAttributes: {
            name: "Temaattribut",
            description: "Lägger till dataattribut till olika element för temaändamål"
        },
        timezones: {
            name: "Tidszoner",
            description: "Visar användares lokala tid i profiler och meddelandetrådar",
            button: {
                wantToSave: "Vill du spara din tidszon i databasen? Klicka här för att ställa in.",
                yourLocalTimezone: "(Din lokala tidszon)"
            },
            context: {
                set: "Ställ in lokal tidszon"
            },
            toast: {
                refresh: {
                    successfully: "Tidszoner har förnyats framgångsrikt!",
                    failed: "Tidszoner kunde inte uppdateras!",
                    failedTo: "Tidszoner kunde inte uppdateras."
                },
                update: {
                    successfully: "Tidszonen har uppdaterats!",
                    failed: "Tidszonen kunde inte ställas in."
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
                refresh: "Uppdatera databasens tidszoner"
            },
            option: {
                showOwnTimezone: {
                    label: "Visa din tidszon",
                    description: "Visar din tidszon i din profil och meddelandetrådar"
                },
                twentyFourHourTime: {
                    label: "24-timmarsformat",
                    description: "Visa tid i 24-timmarsformat"
                },
                showTimezoneInfo: {
                    label: "Visa tidszonsinformation",
                    description: "Visa tidszonsinformation förutom klockan"
                },
                showMessageHeaderTime: {
                    label: "Visa meddelandetiteltid",
                    description: "Visa tid i meddelandetrådar"
                },
                showProfileTime: {
                    label: "Visa profiltid",
                    description: "Visa tid i användarprofiler"
                },
                useDatabase: {
                    label: "Använd databasens tidszon",
                    description: "Använd databas för att få användarens tidszoner"
                },
                preferDatabaseOverLocal: {
                    label: "Föredrar databas framför lokal",
                    description: "Föredrar databas framför lokal lagring över tidszoner"
                },
                databaseUrl: {
                    label: "Databas URL",
                    description: "URL för tidszonens databasserver"
                },
                setDatabaseTimezone: {
                    label: "Ställ in databastidszon",
                    description: "Ställ in din tidszon i databasen",
                    setTimezone: "Ställ in tidszon i databasen"
                },
                resetDatabaseTimezone: {
                    label: "Återställ databasens tidszon",
                    description: "Återställ din tidszon i databasen",
                    failed: "Det gick inte att återställa databasens tidszon"
                },
                askedTimezone: {
                    label: "Tidszon frågad",
                    description: "Indikerar om användaren uppmanas att ange sin tidszon"
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
            description: "Visar ett toastmeddelande när du får ett direktmeddelande.",
            notification: {
                call: "Började en sökning med dig!",
                recipient: {
                    add: "{{target}} lades till i gruppen av {{actor}}.",
                    remove: "{{target}} togs bort från gruppen av {{actor}}.",
                    left: "Han lämnade gruppen."
                },
                channel: {
                    change: {
                        name: "Kanalens namn har ändrats till {{name}}.",
                        icon: "Kanalikonen har ändrats."
                    },
                    pinned: "Fäste ett meddelande."
                },
                sent: {
                    embed: "Han skickade en inbäddning.",
                    sticker: "Han skickade ett klistermärke.",
                    attachment: "Fil:"
                },
                redacted: "Meddelandeinnehållet har dolts.",
                friend: {
                    accept: "{{user}} är nu din vän",
                    acceptBody: "Nu kan du skicka ett direktmeddelande till honom.",
                    request: "{{user}} skickade en vänförfrågan till dig.",
                    requestBody: "Du kan acceptera eller avvisa detta från fliken Vänner."
                },
                example: {
                    title: "Exempelmeddelande",
                    body: "Detta är ett exempel på meddelandetext."
                }
            },
            modal: {
                dismiss: "Stäng avisering",
                attachments: "{{attachments}} filer har skickats."
            },
            option: {
                position: {
                    label: "Kvinnor",
                    description: "Plats för Toast-meddelande",
                    topRight: "Överst till höger",
                    topLeft: "Överst till vänster",
                    bottomRight: "Nederst till höger",
                    bottomLeft: "Sol Alt"
                },
                timeout: {
                    label: "Stängningstid",
                    description: "Hur många sekunder ska aviseringar visas"
                },
                opacity: {
                    label: "Opacitet",
                    description: "Opacitet för Toast-meddelande"
                },
                determineServerNotifications: {
                    label: "Ställ in servermeddelanden",
                    description: "Bestäm om du vill visa aviseringar baserat på serveraviseringsinställningar"
                },
                directMessages: {
                    label: "Direktmeddelanden",
                    description: "Visa aviseringar för direktmeddelanden"
                },
                groupMessages: {
                    label: "Gruppmeddelanden",
                    description: "Visa avisering för gruppmeddelanden"
                },
                friendServerNotifications: {
                    label: "Vän- och servermeddelanden",
                    description: "Visa aviseringar när vänner skickar meddelanden på offentliga servrar"
                },
                friendActivity: {
                    label: "Vänhändelse",
                    description: "Visa aviseringar för att lägga till vänner eller ta emot vänförfrågningar"
                },
                notifyFor: {
                    label: "Kanaler för att ta emot aviseringar",
                    description: "Ange kanal-ID:n för att få aviseringar (separera med kommatecken)"
                },
                ignoreUsers: {
                    label: "Användare att ignorera",
                    description: "Ange användar-ID vars meddelanden kommer att ignoreras (avgränsade med kommatecken)"
                },
                exampleButton: {
                    label: "Provknapp",
                    description: "Visa ett exempel på notis om rostat bröd.",
                    show: "Visa exempelmeddelande"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Lägger till en anpassningsbar snabbtangent för att slå på och stänga av din webbkamera.",
            option: {
                keyBind: {
                    label: "Snabbtangent",
                    description: "Knappen som slår på och av webbkameran när den trycks ned."
                },
                reqCtrl: {
                    label: "Ctrl Gerekli",
                    description: "Tvinga ned Ctrl-tangenten."
                },
                reqShift: {
                    label: "Skift krävs",
                    description: "Tvinga ned Skift-tangenten."
                },
                reqAlt: {
                    label: "Sub Obligatorisk",
                    description: "Tvinga ned Alt-tangenten."
                }
            }
        },
        translate: {
            name: "Översätta",
            description: "Översätt meddelanden med Google Translate eller DeepL",
            tooltip: {
                label: "Konvertera"
            },
            context: {
                translate: "Konvertera",
                open: "Öppna översättningsfönstret",
                auto: "Automatisk översättning aktiverad"
            },
            option: {
                receivedInput: {
                    label: "Mottagen input",
                    description: "Språket som de mottagna meddelandena kommer att översättas till"
                },
                receivedOutput: {
                    label: "Mottagen utdata",
                    description: "Vilket språk kommer de mottagna meddelandena att översättas till?"
                },
                sentInput: {
                    label: "Inskickad input",
                    description: "Språket som dina egna meddelanden kommer att översättas till"
                },
                sentOutput: {
                    label: "Skickat utdata",
                    description: "Vilket språk dina egna meddelanden kommer att översättas till"
                },
                service: {
                    label: "Översättningstjänst",
                    description: "DeepL Pro kräver en betald API-nyckel",
                    descriptionWeb: "Översättningstjänst (stöds inte på webben!)",
                    google: "Google Översätt",
                    deepl: "DeepL gratis",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "DeepL API-nyckel",
                    description: "DeepL API-nyckel",
                    placeholder: "Få din API-nyckel på https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Automatisk översättning",
                    description: "Den översätter automatiskt dina meddelanden innan de skickas. Du kan också skifta eller högerklicka på översättningsknappen för att slå på eller av den här funktionen."
                },
                showAutoTranslateTooltip: {
                    label: "Visa beskrivning av automatisk översättning",
                    description: "Visa en beskrivning i chattfältets knapp när ett meddelande översätts automatiskt"
                }
            },
            modal: {
                title: "Översättning",
                select: "Välj ett språk",
                auto: "Automatisk översättning",
                dismiss: "Kvartal",
                translated: "Översatt från {{from}}",
                failed: {
                    to: "Översättning av {{text}} misslyckades",
                    connect: "DeepL API-anslutning misslyckades:"
                },
                wrong: "Något gick fel. Om problemet kvarstår, kontrollera konsolen eller be om hjälp från supportservern.",
                deepl: {
                    api: "DeepL API-kvot har överskridits. Byter till Google Translate.",
                    apiKey: "DeepL API-nyckel är inte inställd. Återgår till Google.",
                    auth: "Ogiltig DeepL API-nyckel eller version"
                },
                autoTranslateEnabled: {
                    title: "Plexcord Auto Translation aktiverad",
                    body: "Du har precis aktiverat Automatisk översättning! Alla meddelanden du skickar kommer att översättas automatiskt innan de skickas.",
                    confirm: "Inaktivera automatisk översättning",
                    cancel: "Jag förstår",
                    secondaryConfirm: "Visa det inte igen"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Lägger till en indikator när någon skriver i en kanal.",
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
                    label: "Visningsläge",
                    description: "Hur visar man indikatorn?",
                    both: "Avatarer och animerade prickar",
                    dots: "animerade prickar",
                    avatars: "avatarer"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Visar avatarer och rollfärger i skrivindikatorn",
            option: {
                showAvatars: {
                    label: "Visa flera användare",
                    description: "Visa avatarer i skrivindikator"
                },
                showRoleColors: {
                    label: "Visa rollfärger",
                    description: "Visa rollfärger i skrivindikator"
                },
                alternativeFormatting: {
                    label: "Alternativt format",
                    description: "Visa ett mer användbart meddelande när mer än en person skriver"
                },
                amITyping: {
                    label: "Skriver jag?",
                    description: "Visar om andra har sett vad du skrev"
                }
            },
            others: {
                areTyping: "och {{count}} personer till skriver..."
            }
        },
        unindent: {
            name: "Oindrag",
            description: "Tar bort inledande indrag i kodblock"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Konverterar metriska enheter till imperialistiska enheter och vice versa",
            tooltip: "Konvertera enheter",
            option: {
                myUnits: {
                    label: "Mina enheter",
                    description: "De enheter du använder och vill omvandlas till. Standard: imperial",
                    imperial: "Imperium",
                    metric: "Metrisk"
                }
            },
            button: {
                dismiss: "Kvartal"
            }
        },
        unlimitedAccounts: {
            name: "Obegränsade konton",
            description: "Ökar antalet konton du kan lägga till.",
            option: {
                maxAccounts: {
                    label: "Maximalt konto",
                    description: "Antal konton som kan läggas till, ange 0 för obegränsat"
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
            name: "UnsuppressBädda in",
            description: "Låter dig ta bort inbäddat innehåll i meddelanden",
            context: {
                unsuppress: "Ta bort inbäddningsundertryckning",
                suppress: "Skriv ut Bädda in"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Visar slumpmässig värdelös information inom Discord; genvägar och intervallinställningar kan göras.",
            recording: "Inspelning...",
            record: "Spara",
            option: {
                delay: {
                    label: "Aviseringsintervall",
                    description: "Aviseringsintervall (i minuter)"
                },
                historyHotkey: {
                    label: "Genväg till Historikpanelen",
                    description: "Snabbtangent för att öppna historik över tidigare visad information"
                },
                randomFactHotkey: {
                    label: "Slumpmässig informationsgenväg",
                    description: "Snabbtangent för att öppna panelen med slumpmässig information"
                },
                sameFact: {
                    label: "Undvik att upprepa samma information",
                    description: "Förhindrar att samma information visas flera gånger utan att visa all information"
                },
                lastNFacts: {
                    label: "Senaste informationen får inte upprepas",
                    description: "Senaste antalet delar av information som inte ska visas igen (0 = alla gånger)"
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Ingen information ännu. Använd genvägen eller vänta.",
                    source: "Källa"
                },
                showRandom: "Visa slumpmässigt",
                close: "Kvartal"
            },
            notification: {
                title: "Visste du det?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronomen",
            description: "Visar användarpronomen i meddelanderubriker",
            option: {
                pronounsFormat: {
                    label: "Pronomen Form",
                    description: "Hur pronomen visas i chatten",
                    lowercase: "Gemensamt bokstäver",
                    capitalized: "första stor bokstav"
                },
                showSelf: {
                    label: "Visa dig själv",
                    description: "Växla visning av dina egna pronomen på eller av"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Visar en indikator när en användare är på röstkanalen",
            option: {
                showInUserProfileModal: {
                    label: "Visa i användarprofil",
                    description: "Visa röstkanalindikator bredvid namnet i användarprofilen"
                },
                showInMemberList: {
                    label: "Visa i medlemslistan",
                    description: "Visa röstkanalindikator i medlems- och DM-listan"
                },
                showInMessages: {
                    label: "Visa i meddelanden",
                    description: "Visa röstkanalindikator i meddelanden"
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
            name: "USBG",
            description: "Visar användarbanners från USBBG så att alla kan använda banners utan Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro först",
                    description: "Om det finns både Nitro- och USBBG-banner, bestäm vilken du ska använda",
                    nitro: "Nitro Banner",
                    usrbg: "USBG-banner"
                },
                voiceBackground: {
                    label: "Ljudbakgrund",
                    description: "Använd USBBG-banner som bakgrund för röstchatt"
                }
            },
            button: "Skaffa din egen USBG-banner"
        },
        validReply: {
            name: "ValidReply",
            description: "Åtgärdar felet \"Det gick inte att läsa in meddelandet\" när du håller muspekaren över svar"
        },
        validUser: {
            name: "ValidUser",
            description: "Åtgärdar omnämnanden som visas som \"@unknown-user\" för okända användare (håll muspekaren över omnämnande för att fixa)",
            badges: {
                discordBugHunter: "Discord Bug Hunter",
                moderatorProgramsAlumni: "Utexaminerad av moderatorprogram",
                discordStaff: "Discord Personal",
                hypeSquadEvents: "HypeSquad-evenemang",
                bravery: "HypeSquad Cesaret",
                brilliance: "HypeSquad-ljusstyrka",
                balance: "HypeSquad Denge",
                partneredServerOwner: "Co-Server Ägare",
                nitro: "Discord Nitro",
                earlySupporter: "Tidig supporter",
                earlyVerifiedBotDeveloper: "Tidig verifierad botutvecklare"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Låter dig gå med i röstchattar genom att dubbelklicka istället för att enkelklicka"
        },
        vcNarrator: {
            name: "VCNberättare",
            description: "Meddelar via berättaren när användare går med i, lämnar eller flyttar röstkanaler",
            option: {
                voice: {
                    label: "Ses"
                },
                volume: {
                    label: "Ljudnivå",
                    description: "Berättarröstnivå"
                },
                rate: {
                    label: "Hastighet",
                    description: "Berättarens talhastighet"
                },
                sayOwnName: {
                    label: "Säg ditt namn",
                    description: "Om berättaren kommer att säga ditt namn"
                },
                latinOnly: {
                    label: "Endast latin",
                    description: "Rensa icke-latinska tecken i namn innan du läser"
                },
                joinMessage: {
                    label: "Anslutande meddelande",
                    description: "Gå med i meddelandet"
                },
                leaveMessage: {
                    label: "Avskedsbesked",
                    description: "lämna meddelande"
                },
                moveMessage: {
                    label: "Rörligt meddelande",
                    description: "rörligt meddelande"
                },
                muteMessage: {
                    label: "Stäng av meddelande",
                    description: "Stäng av meddelandet (endast dig själv för tillfället)"
                },
                unmuteMessage: {
                    label: "Slå på ljudet för meddelande",
                    description: "Slå på ljudet av meddelandet (endast dig själv för tillfället)"
                },
                deafenMessage: {
                    label: "Öronbedövande meddelande",
                    description: "Öronbedövande meddelande (bara du själv för nu)"
                },
                undeafenMessage: {
                    label: "Öronbedövande meddelande",
                    description: "Öronbedövande meddelande (bara du själv för nu)"
                }
            },
            modal: {
                title: "Spela upp Sample Sounds",
                voiceTitle: "Ses",
                voice: "Välj ett ljud",
                languageTitle: "Dil",
                language: "Välj ett språk",
                noVoice: "Berättarröst hittades inte.",
                linuxNote: "Installera speech-dispatcher eller espeak och kör Discord med parametern --enable-speech-dispatcher",
                someNarrator: "Testa att installera några röster från ditt operativsystems Skärmläsarinställningar",
                dontHaveEnglish: "Du har inte laddat upp något engelskt ljud, så berättaren kan låta konstigt",
                customiseMessages: "Du kan anpassa de talade meddelandena nedan. Om du lämnar det tomt kan du inaktivera vissa meddelanden",
                placeholdersInfo: "Anpassade platshållare {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} och {{CHANNEL}} ersätts med användarens namn (tomt om du är själv), visningsnamn, smeknamn på servern respektive kanalnamn"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Gör avatar- och bannerbilder i användarprofiler klickbara; Lägger till Visa Avatar/Banner-alternativ till användar-, server- och gruppkanalens snabbmeny.",
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
                    description: "Välj det bildformat som ska användas för icke-rörliga bilder. Animerade bilder använder alltid .gif-formatet"
                },
                imgSize: {
                    label: "Bildstorlek",
                    description: "Bildstorlek att använda"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Kopiera och visa råinnehåll/data från alla meddelanden, kanaler eller server",
            context: {
                copyLeft: "Kopiera rådata (vänsterklick) / Visa rådata (högerklick)",
                copyRight: "Kopiera rådata (högerklick) / Visa rådata (vänsterklick)",
                view: "Visa rådata"
            },
            option: {
                popoverButton: {
                    label: "Popup-menyknapp",
                    description: "Visa en knapp i meddelandets popover för att se meddelandets råa innehåll/data."
                },
                clickMethod: {
                    label: "Klicka på Metod",
                    description: "Ändra den klickmetod som ska användas för att se råinnehållet/datan i ett meddelande.",
                    left: "Vänsterklicka för att se råinnehåll.",
                    right: "Högerklicka för att se råinnehåll."
                }
            },
            modal: {
                title: "Ham Veri",
                content: "Innehåll",
                data: "{{typ}} Veri",
                copied: "{{type}} data har kopierats till urklipp!",
                copy: "Kopiera {{typ}} JSON",
                copiedContent: "Innehållet har kopierats till urklipp!",
                copyContent: "Kopiera råinnehåll"
            },
            types: {
                message: "Meddelande",
                channel: "Kanal",
                guild: "Presentatör",
                role: "Roll",
                user: "Användare"
            }
        },
        voiceButtons: {
            name: "Röstknappar",
            description: "DM, stäng av eller döv snabbt alla användare från röstsamtalspanelen.",
            option: {
                showChatButton: {
                    label: "Visa chattknapp",
                    description: "Om chattknappen ska visas eller inte"
                },
                showMuteButton: {
                    label: "Visa Mute-knappen",
                    description: "Om ljudavstängningsknappen ska visas"
                },
                showDeafenButton: {
                    label: "Visa dövknapp",
                    description: "Om man ska visa dövknappen"
                },
                muteSoundboard: {
                    label: "Soundboard'u Sessize Al",
                    description: "När du klickar på öronbedövande knappen slår den på och av användarens soundboard."
                },
                disableVideo: {
                    label: "Inaktivera video",
                    description: "När du klickar på öronbedövande knappen slår den på och av användarens video."
                },
                useServer: {
                    label: "Använd server",
                    description: "Använder serverdämpning/öronbedövande istället för lokal om du har tillstånd."
                },
                serverSelf: {
                    label: "Stäng av dig själv på servern",
                    description: "Mute/deafener dämpar eller dövar dig själv på servern när den används."
                },
                showButtonsSelf: {
                    label: "Visa knappar för dig själv",
                    description: "Om du vill visa knappar för din egen användare. Den har samma funktion; DM-panelen öppnas och tystar/dövar dig själv.",
                    display: "Visa",
                    hide: "dölja",
                    disable: "Inaktiverad"
                },
                whichNameToShow: {
                    label: "Vilket namn ska visas?",
                    description: "Visa användarnamn, globalt namn eller båda i verktygstips?",
                    global: "Globalt namn",
                    username: "Användarnamn",
                    both: "Både"
                },
                buttonPosition: {
                    label: "Knappens plats",
                    description: "Välj var knapparna ska visas.",
                    left: "Sol",
                    right: "Rätt",
                }
            },
            tooltip: {
                navigate: "Gå till DM",
                open: "Öppna DM med {{användarnamn}}",
                yourself: "själv",
                serverMute: "Ljud av på servern",
                serverDeafen: "Döv på server",
                mute: "Stum",
                deafen: "döva",
                unmute: "Slå på ljudet",
                undeafen: "Ta bort från öronbedövande",
                serverUnmute: "Slå på ljudet på servern",
                serverUndeafen: "Ta bort öronbedövande på servern"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Spelar in vem som går med och lämnar ljudkanaler",
            context: {
                view: "Visa kanalloggar"
            },
            modal: {
                joined: "Gick med i kanalen <#{{channel}}>",
                left: "Vänster kanal <#{{channel}}>",
                movedTo: "Flyttad till <#{{channel}}> kanal",
                movedFrom: "Flyttade från <#{{channel}}>",
                noLogs: "Det finns inga loggar att visa.",
                logs: "{{channel}} loggar"
            },
            option: {
                mode: {
                    label: "Mod",
                    description: "Hur man visar ljudkanallogg",
                    menu: "Loggmeny",
                    associated: "Logga direkt till relevant chattkanal",
                    both: "Logga in på både chattkanalen och loggmenyn"
                },
                voiceChannelChatSelf: {
                    label: "Röstkanalchatt (dig själv)",
                    description: "Logga din egen röstkanalaktivitet i röstkanaler"
                },
                voiceChannelChatSilent: {
                    label: "Tyst röstkanalchatt",
                    description: "Gå med/lämna/flytta meddelanden är avstängda i röstkanalchattar"
                },
                voiceChannelChatSilentSelf: {
                    label: "Tyst röstkanalchatt (dig själv)",
                    description: "Om du är på en röstkanal kommer meddelanden att gå med/lämna/flytta att vara tysta"
                },
                ignoreBlockedUsers: {
                    label: "Ignorera blockerade användare",
                    description: "Loggar användare som du har blockerat"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Denna plugin låter dig utföra flera åtgärder (flytta, tysta, koppla ur, etc.) på en hel kanal (ursprungligen genom dutake)",
            option: {
                waitAfter: {
                    label: "Vänta efter åtgärd",
                    description: "Antal API-transaktioner som ska göras innan du väntar (för att undvika hastighetsgräns)"
                },
                waitSeconds: {
                    label: "Väntetid",
                    description: "Tid att vänta mellan varje operation (i sekunder)"
                }
            },
            context: {
                voiceTools: "Ljudverktyg",
                mentionAll: "Tagga alla användare",
                disconnectAll: "Koppla bort alla",
                muteAll: "Stäng av ljudet för alla",
                unmuteAll: "Slå på ljudet för alla",
                deafenAll: "Döva Alla",
                undeafenAll: "Gå ut utan att döva alla",
                moveAll: "Flytta alla"
            }
        },
        voiceDownload: {
            name: "Röstnedladdning",
            description: "Lägger till nedladdningsalternativ till röstmeddelanden. (Öppnar en ny webbläsarflik)",
            context: {
                download: "Ladda ner röstbrevlåda"
            }
        },
        voiceMessages: {
            name: "Röstmeddelanden",
            description: "Det låter dig skicka röstmeddelanden precis som på mobilen. För att göra detta, högerklicka på uppladdningsknappen och välj \"Skicka röstmeddelande\".",
            option: {
                noiseSuppression: {
                    label: "Brusreducering",
                    description: "Brusreducering"
                },
                echoCancellation: {
                    label: "Eko-avstängning",
                    description: "Eko-avstängning"
                }
            },
            notification: {
                failed: {
                    upload: "Röstbrevlådan kunde inte laddas.",
                    start: "Det gick inte att starta inspelningen.",
                    finish: "Registreringen kunde inte slutföras."
                }
            },
            context: {
                sendVoiceMessage: "Skicka röstmeddelande",
                missingPermissions: "(Tillstånd saknas)"
            },
            modal: {
                record: "Spela in röstmeddelande",
                upload: "Ladda upp fil",
                preview: "Förhandsvisning",
                failed: "Den valda ljudfilen kunde inte tolkas:",
                oggOpus: "Röstmeddelanden måste vara i OggOpus-format för att kunna spelas upp på iOS. Den här filen kan inte spelas upp på iOS eftersom den är i formatet {{type}}.",
                fix: "För att fixa detta, konvertera först filen till OggOpus-format. Du kan till exempel använda {{link}}.",
                sending: "Skickar röstmeddelande... Vänta.",
                stop: "stoppa inspelningen",
                start: "börja spela in",
                resume: "Återuppta registreringen",
                pause: "Pausa inspelningen",
                recording: "REGISTRERING PÅGÅR",
                send: "Skicka"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Låter dig öka användar- och sändningsvolymen över standardmax",
            option: {
                multiplier: {
                    label: "Multiplikator",
                    description: "Ljudmultiplikator"
                }
            }
        },
        wallpaperFree: {
            name: "Tapeter gratis",
            description: "En nyinspelning av det gamla DM-tapetexperimentet; Ställ in bakgrundsbild för valfri kanal, användare eller server.",
            option: {
                globalDefault: {
                    label: "Allmän standard",
                    description: "Ställ in en global standardbakgrund för alla kanaler."
                },
                stylingTips: {
                    label: "Stiltips"
                }
            },
            context: {
                setWallpaper: "Ställ in Bakgrund",
                removeWallpaper: "Ta bort tapeter"
            },
            modal: {
                set: "ställa in tapeter",
                image: "Bild URL",
                cancel: "Avboka",
                apply: "Tillämpas",
                global: {
                    set: "Ställ in en offentlig bakgrund",
                    remove: "Ta bort global standardbakgrund",
                    reset: "Återställ bakgrundsdata"
                },
                web: {
                    info: "Du kan använda lokala filer genom att lägga dem i plexcord-temakatalogen och använda webbadressen plexcord:///themes/filename.ext.",
                    open: "Öppna temakatalogen",
                    quickCSS: "Öppna QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenys",
            description: "Lägger till snabbmenyer som saknas i webbversionen av Discord: Länkar och bilder (Kopiera eller Öppna länk/Bild), Textområde (Kopiera, Klipp ut, Klistra in, Stavningskontroll)",
            option: {
                addBack: {
                    label: "Lägg tillbaka",
                    description: "Lägg tillbaka Discord-kontextmenyer för bilder, länkar och chattfält"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Den lägger till snabbtangenterna som saknas i webbversionen av Discord: ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+1-9, ctrl+,. Det fungerar bokstavligen bara på Plextron/Legcord, inte i webbläsaren."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Tar bort bithastighetsgränsen på 2500 kbps för skärmdelning på Chromium- och Plextron-klienter.",
            option: {
                experimentalAV1Support: {
                    label: "Experimentell AV1-stöd",
                    description: "Aktiverar AV1-codec-stöd. Oändliga laddningsströmmar kan orsaka problem som"
                }
            }
        },
        whoReacted: {
            name: "Vem reagerade",
            description: "Visar avatarer för användare som reagerar på ett meddelande",
            option: {
                avatarClick: {
                    label: "Avatar Klicka",
                    description: "Växla klickbarhet för avatarer i reaktioner"
                }
            }
        },
        whosWatching: {
            name: "Vem tittar på",
            description: "Se användare som tittar på din sändning genom att hålla muspekaren över skärmdelningsikonen",
            modal: {
                noSpectator: "ingen publik"
            },
            option: {
                showPanel: {
                    label: "Visa panel",
                    description: "Visa tittare under skärmdelningspanelen"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Konverterar den första bokstaven i varje mening till versaler i meddelandeposter.",
            option: {
                blockedWords: {
                    label: "Blockerade ord",
                    description: "Uttryck som inte ska skrivas med versaler (separera med kommatecken)"
                }
            }
        },
        xSOverlay: {
            name: "XSOöverlägg",
            description: "Skickar Discord-aviseringar till XSOverlay för enkel visning i VR",
            notification: {
                call: {
                    title: "{{user}} letar efter dig.",
                    content: "inkommande samtal"
                },
                message: {
                    reply: "(svar)",
                    embed: "[bädda in]",
                    onlyEmbed: "skickat meddelande inbäddning(ar)",
                    sticker: "[dekal]",
                    onlySticker: "skickade ett klistermärke",
                    image: "bild",
                    attachment: "jag"
                },
                test: {
                    title: "Plexcord och dyk!",
                    content: "Detta är ett testmeddelande! explodera",
                    button: "Skicka testavisering"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket Portu",
                    description: "WebSocket portu"
                },
                preferUDP: {
                    label: "UDP Tercih Et",
                    description: "Om du använder äldre versioner av XSOverlay och inte kan ansluta via WebSocket, aktivera det. Den här inställningen ignoreras på webben."
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
                    description: "Tillåt aviseringar om privata meddelanden"
                },
                groupDmNotifications: {
                    label: "Grupp DM-aviseringar",
                    description: "Tillåt grupp-DM-aviseringar"
                },
                callNotifications: {
                    label: "Samtalsmeddelanden",
                    description: "Tillåt samtalsaviseringar"
                },
                pingColor: {
                    label: "Ping Rengi",
                    description: "Användartaggningsfärg"
                },
                channelPingColor: {
                    label: "Färgping-kanal",
                    description: "Kanalmärkningsfärg"
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
                    label: "Meddelandelängd baserad varaktighet",
                    description: "Förläng varaktigheten enligt meddelandelängden"
                },
                opacity: {
                    label: "Opacitet",
                    description: "Opacitet för meddelanden"
                },
                volume: {
                    label: "Ses",
                    description: "ljudnivå"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTube Adblock",
            description: "Blockerar annonser på YouTube-inbäddningar och WatchTogether-aktivitet med AdGuard"
        },
        youtubeDescription: {
            name: "YouTube-beskrivning",
            description: "Lägger till beskrivningar till YouTube-videoinbäddningar"
        }
    }
} as const;

export default translations;
