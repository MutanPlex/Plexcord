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
        title: "Instellingen",
        language: {
            selector: {
                label: "Taal",
                description: "Selecteer uw voorkeurstaal voor Plexcord.",
                placeholder: "Selecteer Taal"
            }
        },
        location: {
            label: "Instellingen Locatie",
            description: "Waar moet het gedeelte Plexcord-instellingen worden geplaatst",
            top: "Helemaal bovenaan",
            nitro: {
                above: "Boven het Nitro-gedeelte",
                below: "Hieronder het Nitro-gedeelte"
            },
            activity: {
                above: "Boven Activiteitsinstellingen",
                below: "Hieronder Activiteitsinstellingen"
            },
            bottom: "Helemaal onderaan"
        },
        switches: {
            useQuickCss: {
                label: "Aangepaste CSS inschakelen",
                description: "Laad aangepaste CSS vanuit de QuickCSS-editor. Hiermee kun je het uiterlijk van Discord aanpassen met je eigen stijlen."
            },
            enableReactDevtools: {
                label: "Schakel React-ontwikkelaarstools in",
                description: "Schakel de React Developer Tools-extensie in voor het debuggen van de React-componenten van Discord. Handig voor het ontwikkelen van plug-ins."
            },
            mainWindowFrameless: {
                label: "Schakel het hoofdvensterframe uit",
                description: "Verwijder het oorspronkelijke raamkozijn voor een netter uiterlijk. U kunt het venster nog steeds verplaatsen door het titelbalkgebied te slepen."
            },
            frameless: {
                label: "Schakel het raamkozijn uit",
                description: "Verwijder het oorspronkelijke raamkozijn voor een netter uiterlijk. U kunt het venster nog steeds verplaatsen door het titelbalkgebied te slepen."
            },
            winNativeTitleBar: {
                label: "Gebruik de eigen titelbalk van Windows in plaats van de aangepaste titelbalk van Discord",
                description: "Vervang de aangepaste titelbalk van Discord door de standaard Windows-titelbalk. Dit kan de compatibiliteit met sommige vensterbeheertools verbeteren."
            },
            transparent: {
                label: "Schakel venstertransparantie in",
                description: "Maak het Discord-venster transparant. Er is een thema nodig dat transparantie ondersteunt, anders levert dit niets op.",
                isWindows: "Hierdoor wordt voorkomen dat het formaat van het venster kan worden aangepast en wordt voorkomen dat u het venster aan de schermranden vastklikt.",
                notWindows: "Hierdoor wordt voorkomen dat het formaat van het venster kan worden aangepast."
            },
            winCtrlQ: {
                label: "Registreer Ctrl+Q als snelkoppeling om Discord te sluiten (alternatief voor Alt+F4)",
                description: "Voeg Ctrl+Q toe als sneltoets om Discord te sluiten. Dit biedt een alternatief voor Alt+F4 om de applicatie snel te sluiten."
            },
            disableMinSize: {
                label: "Schakel de minimale venstergrootte uit",
                description: "Sta toe dat het Discord-venster kleiner wordt gemaakt dan de standaard minimumgrootte. Handig voor het betegelen van windowmanagers of kleine schermen."
            }
        },
        quickActions: {
            title: "Snelle acties",
            description: "Veelvoorkomende acties die u mogelijk wilt uitvoeren. Deze snelkoppelingen geven u snel toegang tot veelgebruikte functies zonder door menu's te hoeven navigeren.",
            notificationLog: "Meldingslogboek",
            editQuickCSS: "Bewerk QuickCSS",
            relaunchDiscord: "Start Discord opnieuw",
            openSettingsFolder: "Open de map Instellingen",
            viewSourceCode: "Broncode bekijken"
        },
        specialCards: {
            donations: {
                title: "Donaties",
                subtitle: "Bedankt voor het doneren!",
                description: "Je kunt je voordelen op elk moment beheren door een bericht te sturen naar @mutanplex.",
                button: "Doneer",
                invite: "Sluit je aan bij onze onenigheid",
                invalid: "Ongeldige of verlopen uitnodigingslink."
            },
            supportProject: {
                title: "Steun het project",
                description: "Overweeg alstublieft om de ontwikkeling van Plexcord te steunen door te doneren!"
            },
            contributions: {
                title: "Bijdragen",
                subtitle: "Bedankt voor uw bijdrage!",
                description: "Sinds je hebt bijgedragen aan Plexcord heb je nu een coole nieuwe badge!",
                buttonTitle: "Bekijk waaraan u heeft bijgedragen"
            }
        },
        settingsSection: {
            title: "Instellingen",
            description: "Configureer hoe Plexcord zich gedraagt ​​en integreert met Discord. Deze instellingen zijn van invloed op het uiterlijk en gedrag van de Discord-client.",
            hintParts: {
                prefix: "Je kunt aanpassen waar dit instellingengedeelte verschijnt in het instellingenmenu van Discord door de {{pluginLink}} te configureren",
                linkText: "Instellingen plug-in"
            }
        },
        notifications: {
            title: "Meldingen",
            description: "Configureer hoe Plexcord omgaat met meldingen. U kunt aanpassen wanneer en hoe u waarschuwingen ontvangt, of een geschiedenis van eerdere meldingen bekijken.",
            settings: "Meldingsinstellingen",
            viewLog: "Bekijk het meldingenlogboek",
            permissions: {
                denied: {
                    title: "Toestemming voor bureaubladmeldingen geweigerd",
                    label: "U heeft de machtigingen voor meldingen geweigerd. Bureaubladmeldingen werken niet!"
                }
            },
            style: {
                label: "Meldingenstijl",
                description: "Sommige plug-ins kunnen meldingen aan u weergeven. Deze zijn er in twee stijlen:",
                plexcord: "Plexcord-meldingen",
                plexcordDesc: "Dit zijn in-app-meldingen",
                desktop: "Bureaubladmeldingen",
                desktopDesc: "Native Desktop-meldingen (zoals wanneer u een ping ontvangt)",
                onlyWhenNotFocused: "Gebruik alleen bureaubladmeldingen als Discord niet gefocust is",
                always: {
                    desktop: "Gebruik altijd bureaubladmeldingen",
                    plexcord: "Gebruik altijd Plexcord-meldingen"
                }
            },
            positions: {
                label: "Meldingspositie",
                right: {
                    bottom: "Rechtsonder",
                    top: "Rechtsboven",
                },
                left: {
                    bottom: "Linksonder",
                    top: "Linksboven",
                }
            },
            missed: {
                label: "Gemiste meldingen tellen",
                description: "Wanneer je Discord opnieuw focust, verschijnt er een melding met hoeveel je er hebt gemist",
                whileYou: "Terwijl jij weg was",
                count: "{{count}} melding{{s}} ontvangen",
                s: "S"
            },
            timeout: {
                label: "Melding time-out",
                description: "De hoeveelheid tijd (in seconden) dat meldingen op het scherm blijven staan ​​voordat ze automatisch verdwijnen"
            },
            logLimit: {
                label: "Meldingsloglimiet",
                description: "Het maximale aantal meldingen dat in het logboek moet worden bewaard voordat oude worden verwijderd. Stel in op {{disable}} om het meldingenlogboek uit te schakelen en op {{unlimited}} om oude meldingen nooit automatisch te verwijderen"
            },
            opacity: {
                label: "Meldingsdekking",
                description: "De transparantie van in-app-meldingen"
            },
            maxNotifications: {
                label: "Maximale meldingen",
                description: "Maximaal aantal meldingen dat tegelijk wordt weergegeven"
            },
            behavior: {
                label: "Meldingsgedrag",
            },
            disableInStreamerMode: {
                label: "Uitschakelen in Streamer-modus",
                description: "Schakel meldingen uit in de streamermodus"
            },
            renderImages: {
                label: "Geef afbeeldingen weer",
                description: "Render afbeeldingen in meldingen"
            },
            streamingTreatment: {
                label: "Streaming-behandeling",
                description: "Hoe u meldingen kunt behandelen terwijl u uw scherm deelt",
                normal: "Normaal - Toon de melding zoals normaal",
                noContent: "Geen inhoud - Verberg de meldingstekst",
                ignore: "Negeren - Laat de melding helemaal niet zien"
            },
        },
        macVibrancy: {
            title: "Levendigheidsstijl van venster (herstart vereist)",
            description: "Pas het levendigheidseffect van macOS-vensters aan. Hiermee regelt u de stijl van vervaging en transparantie van het Discord-venster. Wijzigingen vereisen een herstart om van kracht te worden.",
            placeholder: "Levendige stijl van het venster",
            style: {
                no: "Geen levendigheid",
                underPage: "Onder pagina (ruiten tinten)",
                content: "Inhoud",
                window: "Raam",
                selection: "Selectie",
                titlebar: "Titelbalk",
                header: "Koptekst",
                sidebar: "Zijbalk",
                tooltip: "Tooltip",
                menu: "Menu",
                popover: "Pop-over",
                fullscreenUI: "Gebruikersinterface op volledig scherm (transparant maar enigszins wazig)",
                hud: "HUD (meest transparant)"
            }
        }
    },

    plugins: {
        title: "Plug-ins",
        new: "NIEUW",
        unknown: "Onbekend",
        noDescription: "Geen beschrijving beschikbaar.",
        restart: {
            apply: "Start opnieuw om de wijzigingen toe te passen!",
            required: "Opnieuw opstarten vereist!",
            description: "Start nu opnieuw op om nieuwe plug-ins en hun instellingen toe te passen",
            following: "De volgende plug-ins vereisen een herstart:",
            remainingCount: "en {{count}} meer",
            fully: "Sommige plug-ins vereisen een herstart om volledig uit te schakelen",
            would: "Wilt u nu opnieuw opstarten?",
            resetDefault: "Terugzetten naar standaardinstellingen",
            failed: "Kan afhankelijkheden niet starten:",
            button: {
                restart: "Opnieuw opstarten",
                later: "Later!",
                now: "Start nu opnieuw op",
                cancel: "Annuleren",
                disableWarning: "Schakel Waarschuwing voor altijd uit",
                disableAll: "Schakel alles uit",
                reset: "Opnieuw instellen",
                close: "Dichtbij"
            }
        },
        contributor: {
            contributed: "bijgedragen",
            modal: {
                contributionsInfo: "{{userName}} heeft {{continuedLink}} tot {{contributionCount}} plug-in{{s}}.",
                noContributions: "{{userName}} heeft geen plug-ins gemaakt. Waarschijnlijk {{contributedLink}} op andere manieren!"
            }
        },
        infoModal: {
            description: "Druk op het tandwiel of het infopictogram voor meer informatie over een plug-in",
            settingsInfo: "Plug-ins met een tandwiel hebben instellingen die u kunt wijzigen!",
            disableAll: "Schakel alle plug-ins uit"
        },
        error: {
            invalidInput: "Ongeldige invoer opgegeven",
            stopping: "Fout bij het stoppen van plug-in {{plugin}}",
            starting: "Fout bij het starten van plug-in {{plugin}}",
            startDependency: "Fout bij het starten van afhankelijkheden: {{failures}}",
            infoRender: "Er is een fout opgetreden bij het weergeven van de aangepaste Info-component van deze plug-in"
        },
        placeholder: {
            number: "Voer een nummer in",
            select: "Selecteer een optie",
            text: "Voer een waarde in"
        },
        excluded: {
            desktop: "Discord Desktop-app of Plextron",
            discordDesktop: "Discord Desktop-app",
            plextron: "Plextron-app",
            web: "Plextron-app en de webversie van Discord",
            dev: "Ontwikkelaarsversie van Plexcord"
        },
        search: {
            looking: "Bent u op zoek naar",
            onlyAvailable: "Alleen verkrijgbaar op de",
            noCriteria: "Er zijn geen plug-ins die aan de zoekcriteria voldoen."
        },
        required: {
            title: "Vereiste plug-ins",
            this: "Deze plug-in is vereist om Plexcord te laten functioneren.",
            by: "Deze plug-in is vereist voor:"
        },
        dangerModal: {
            title: "GEVAARLIJKE ACTIE",
            disablePlugins: "Schakel plug-ins uit",
            disableText: "Schakel alles uit",
            irreversible: "DEZE ACTIE IS ONOMKEERBAAR!",
            enableBack: "Weet u absoluut zeker dat u verder wilt gaan? Je kunt ze later altijd weer inschakelen.",
            undone: "Deze actie kan niet ongedaan worden gemaakt. Weet je het zeker?",
            resetDescription: "U staat op het punt alle instellingen voor {{pluginName}} terug te zetten naar de standaardwaarden.",
            disable: "U staat op het punt de {{enabledPlugins}}-plug-ins uit te schakelen!",
            confirmReset: "Bevestig resetten",
            cancel: "Annuleren",
            resetSettings: "Instellingen resetten",
            resetText: "Opnieuw instellen"
        },
        filters: {
            label: "Filters",
            placeholder: "Zoek naar een plug-in...",
            option: {
                all: "Toon alles",
                enabled: "Toon ingeschakeld",
                disabled: "Toon uitgeschakeld",
                new: "Toon Nieuw",
                userplugins: "Toon gebruikersplug-ins",
                api: "Toon API-plug-ins"
            }
        },
        pluginModal: {
            noSettings: "Er zijn geen instellingen voor deze plug-in.",
            authors: "Auteurs",
            settings: "Instellingen",
            successfulReset: "Instellingen voor {{plugin}} zijn gereset.",
            enabledStock: "Stock-plug-ins ingeschakeld",
            totalStock: "Total Stock-plug-ins",
            enabledUser: "Ingeschakelde gebruikersplug-ins",
            totalUser: "Totaal aantal gebruikersplug-ins",
            info: "Bekijk meer informatie",
            source: "Bekijk de broncode"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API om decorateurs toe te voegen aan de ledenlijst (zowel op servers als in DM's)",
                    messageAccessories: "API om accessoires aan berichten toe te voegen",
                    messageDecorations: "API om decoraties aan berichten toe te voegen",
                    chatInputButtons: "API om knoppen toe te voegen aan de chatinvoer",
                    commands: "API vereist voor alles dat opdrachten gebruikt",
                    contextMenu: "API voor het toevoegen/verwijderen van items aan/uit contextmenu's.",
                    dynamicImageModal: "Hiermee kunt u de breedte of hoogte weglaten bij het openen van een afbeeldingsmodal",
                    menuItemDemangler: "Demangles Discord's Menu Item-module",
                    messageEvents: "API vereist voor alles wat berichtgebeurtenissen gebruikt",
                    messagePopover: "API om knoppen toe te voegen aan berichtpopovers",
                    messageUpdater: "API voor het bijwerken en opnieuw weergeven van berichten",
                    nicknameIcons: "API om pictogrammen toe te voegen aan de bijnaam, in profielen",
                    notices: "Er is een probleem opgelost waarbij meldingen automatisch werden afgewezen",
                    serverList: "API vereist voor plug-ins die de serverlijst wijzigen",
                    userSettings: "Patcht de gebruikersinstellingen van Discord om hun groep en naam zichtbaar te maken.",
                    audioPlayer: "API om interne Discord-audiobestanden of externe audiolinks af te spelen.",
                    userArea: "API om knoppen toe te voegen aan het gebruikersgebiedpaneel."
                },
                chatButtons: {
                    context: {
                        buttons: "Knoppen"
                    }
                }
            },
            badges: {
                description: "API om badges aan gebruikers toe te voegen",
                contributor: {
                    plexcord: "Plexcord-bijdrager",
                    vencord: "Vencord-bijdrager",
                    userPlugin: "Bijdrager van gebruikersplugin"
                },
                context: {
                    title: "Badges-opties",
                    copy: {
                        name: "Copy Badge Name",
                        link: "Kopieer de badge-afbeeldingslink"
                    },
                    refetch: {
                        button: "Badges opnieuw ophalen",
                        success: "Badges zijn opnieuw opgehaald!"
                    }
                },
                modal: {
                    title: "Plexcord-donor",
                    special: "Deze badge is een speciaal voordeel voor Plexcord-donoren",
                    description: "Overweeg alstublieft om de ontwikkeling van Plexcord te steunen door donateur te worden. Het zou veel betekenen!"
                }
            },
        },
        uiElements: {
            manage: "Beheer UI-elementen",
            allows: "Hiermee kunt u knoppen verbergen die u niet bevallen",
            section: {
                chatbar: {
                    title: "Chatbar-knoppen",
                    description: "Dit zijn de knoppen aan de rechterkant van de chatinvoerbalk"
                },
                messagePopover: {
                    title: "Popover-knoppen voor berichten",
                    description: "Dit zijn de zwevende knoppen aan de rechterkant wanneer u over een bericht beweegt"
                }
            },
            button: "Knoppen van ingeschakelde plug-ins verschijnen hier."
        }
    },

    patchHelper: {
        title: "Patch-helper",
        description: "Een ontwikkelaarstool waarmee u patches voor Plexcord-plug-ins kunt maken.",
        fullPatch: {
            label: "Volledige patch",
            description: "Plak hier uw volledige JSON-patch om de velden in te vullen"
        },
        find: "Vinden",
        match: "Overeenkomst",
        replacement: "Vervanging",
        preview: "Voorbeeld",
        generatedCode: "Gegenereerde code",
        group: "Groep",
        diff: "Verschil",
        module: "Module",
        compile: "Compileren",
        compiled: "Compilatie succesvol",
        copy: {
            clipboard: "Kopiëren naar Klembord",
            codeblock: "Kopieer als codeblok"
        },
        error: {
            noMatch: "Geen overeenkomst gevonden. Deze module is mogelijk lui geladen?",
            multipleMatch: "Meerdere overeenkomsten gevonden. Gebruik een specifieker zoekpatroon.",
            noFind: "Het veld 'Zoeken' ontbreekt.",
            noReplacement: "Het veld 'Vervanging' ontbreekt.",
            invalidReplacement: "Het veld 'Vervanging' is ongeldig",
            replacementMatch: "Het veld 'replacement.match' ontbreekt",
            replacementReplace: "Het veld 'replacement.replace' ontbreekt",
            replacementMustFunction: "'Vervanging' moet een functie zijn"
        },
        cheatSheet: {
            title: "Spiekbriefje",
            identifiers: "Speciale regex-escape-reeks die overeenkomt met ID's (varnames, classnames, etc.)",
            dollar: "Voer een $ in",
            entireMatch: "Voer de hele wedstrijd in",
            beforeMatch: "Voeg de subtekenreeks in vóór de overeenkomst",
            afterMatch: "Voeg de subtekenreeks in na de overeenkomst",
            nthGroup: "Voeg de zoveelste vastleggroep in ($1, $2...)",
            pluginInstance: "Voeg de plug-ininstantie in"
        },
        replacementEval: {
            label: "Beschouw vervanging als functie",
            description: "'Vervanging' wordt als functie geëvalueerd als deze is ingeschakeld"
        }
    },

    sync: {
        title: "Back-up en herstel",
        warning: "Waarschuwing",
        warningText: "Als u een instellingenbestand importeert, worden uw huidige instellingen overschreven. Zorg ervoor dat u eerst een back-up exporteert als u uw huidige configuratie wilt behouden.",
        description: "U kunt uw Plexcord-instellingen importeren en exporteren als JSON-bestand. Hierdoor kun je eenvoudig je instellingen overzetten naar een ander apparaat, of je instellingen herstellen na het opnieuw installeren van Plexcord of Discord.",
        successful: "Instellingen succesvol geïmporteerd. Start opnieuw om de wijzigingen toe te passen!",
        error: {
            failure: "Kan instellingen niet importeren: {{error}}",
            failedExport: "Kan de instellingen niet exporteren. Controleer de console",
            invalid: "Ongeldige instellingen. Is dit zelfs een Plexcord-instellingenbestand?",
            tooLarge: "DataStore te groot - uitgesloten van back-up. Gebruik indien nodig 'Export DataStores'.",
            clearSomeDate: "Gegevensopslag te groot. Wis enkele plug-ingegevens en probeer het opnieuw."
        },
        settings: {
            text: "Wat zit er in een back-up?",
            quickcss: "Aangepaste QuickCSS",
            theme: "Themalinks",
            plugins: "Plugin-instellingen",
            datastores: "Plug-in DataStores (bijv. Tijdzones of IRememberYou)"
        },
        import: {
            title: "Instellingen importeren",
            description: "Selecteer een eerder geëxporteerd instellingenbestand om uw configuratie te herstellen. Hiermee worden al uw huidige instellingen vervangen door die uit de back-up.",
            all: "Importeer alle instellingen",
            plugins: "Plug-in importeren",
            css: "Importeer QuickCSS",
            datastore: "Gegevensarchieven importeren"
        },
        export: {
            title: "Instellingen exporteren",
            description: "U kunt uw huidige Plexcord-instellingen exporteren naar een bestand voor back-up of overdracht naar een ander apparaat.",
            all: "Exporteer alle instellingen",
            plugins: "Plug-in exporteren",
            css: "Exporteer QuickCSS",
            datastore: "Gegevensopslag exporteren"
        }
    },

    cloud: {
        text: "Wolk",
        title: "Instellingen synchroniseren",
        override: "Cloudsynchronisatie",
        description: "Synchroniseer uw Plexcord-instellingen met de cloud. Dit maakt het gemakkelijk om uw configuratie consistent te houden op meerdere apparaten zonder handmatig importeren/exporteren.",
        switchDescription: "Indien ingeschakeld, kunnen uw instellingen van en naar de cloud worden gesynchroniseerd. Gebruik de onderstaande acties om handmatig te synchroniseren.",
        settings: "Cloud-instellingen",
        successful: "Gesynchroniseerde instellingen naar de cloud!",
        updated: "Je instellingen zijn bijgewerkt! Klik hier om opnieuw te starten en de wijzigingen volledig toe te passen!",
        deleted: "Instellingen verwijderd uit de cloud!",
        integration: {
            title: "Cloud-integratie",
            description: "Dankzij de cloudintegratie van Plexcord kunt u uw instellingen synchroniseren tussen meerdere apparaten en Discord-installaties. Uw gegevens worden veilig opgeslagen en kunnen op elk moment eenvoudig worden hersteld.",
        },
        reauth: "We hebben gemerkt dat u cloudintegraties heeft ingeschakeld in een andere client! Vanwege beperkingen moet u opnieuw autoriseren om ze te kunnen blijven gebruiken. Klik hier om naar de instellingenpagina te gaan!",
        error: {
            setup: "Installatie mislukt (kan OAuth-configuratie niet ophalen).",
            secret: "Installatie mislukt (geen geheim geretourneerd).",
            string: "Installatie mislukt ({{error}}).",
            connect: "Cloudsynchronisatie is uitgeschakeld omdat dit account niet is verbonden met de Plexcord Cloud-app. U kunt het opnieuw inschakelen door dit account te koppelen in Cloudinstellingen. (let op: uw voorkeuren worden apart opgeslagen)",
            noSettings: "Er zijn geen instellingen in de cloud.",
            uptodate: "Uw instellingen zijn up-to-date.",
            localNewer: "Uw lokale instellingen zijn nieuwer dan de cloudinstellingen.",
            delete: "Kan instellingen niet verwijderen ({{error}}).",
            api: {
                returned: {
                    delete: "Kan instellingen niet verwijderen (API retourneert {{status}}).",
                    to: "Kan instellingen niet synchroniseren met de cloud (API retourneert {{status}}).",
                    from: "Kan instellingen uit de cloud niet synchroniseren (API retourneert {{status}}).",
                    manifest: "Kan manifest voor verwijdering niet ophalen (API gaf {{status}} terug)."
                }
            },
            synchronize: {
                to: "Kan de instellingen niet synchroniseren met de cloud ({{error}}).",
                from: "Kan instellingen uit de cloud ({{error}}) niet synchroniseren."
            }
        },
        warning: {
            enableCloudIntegration: "Schakel hierboven cloudintegratie in om de synchronisatiefuncties van instellingen te gebruiken."
        },
        danger: {
            title: "Gevarenzone",
            description: "Verwijder al uw gegevens definitief uit de cloud. Deze actie kan niet ongedaan worden gemaakt en verwijdert alle gesynchroniseerde instellingen en alle andere gegevens die zijn opgeslagen op de cloudbackend.",
            delete: {
                account: {
                    title: "Cloudaccount verwijderen",
                    description: "Weet u zeker dat u uw cloudaccount en alle bijbehorende gegevens definitief wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.",
                    confirm: "Account verwijderen",
                    cancel: "Annuleren"
                }
            }
        },
        notification: {
            title: "Cloud-integratie",
            enabled: "Cloudintegratie ingeschakeld",
            host: "{{host}} is toegevoegd aan de witte lijst. Start de app opnieuw om de wijzigingen door te voeren.",
            erase: {
                successful: "Cloudgegevens zijn succesvol gewist",
                failed: "Het is niet gelukt om alle gegevens te wissen (API {{status}} geretourneerd). Neem contact op met de ondersteuning."
            }
        },
        button: {
            to: "Synchroniseren met de cloud",
            from: "Synchroniseren vanuit de cloud",
            fromDescription: "Hierdoor worden uw lokale instellingen overschreven met die in de cloud. Gebruik verstandig!",
            delete: "Cloudgegevens verwijderen",
            enable: "Schakel cloudintegraties in",
            reauthorize: "Opnieuw autoriseren",
            confirm: "Start nu opnieuw op",
            later: "Later!"
        },
        privacy: "respecteert uw privacy",
        source: "broncode",
        overview: "Plexcord wordt geleverd met een cloudintegratie die extraatjes toevoegt, zoals het synchroniseren van instellingen op verschillende apparaten. Het is {{privacy}} en de {{source}} heeft een AGPL 3.0-licentie, dus u kunt het zelf hosten.",
        authorization: "Maak verbinding met de cloud-backend voor synchronisatie van instellingen. Er wordt om autorisatie gevraagd als u de cloudintegratie nog niet heeft ingesteld.",
        backend: {
            title: "Cloud-backend",
            description: "Kies hoe uw instellingen in de cloud worden opgeslagen. Standaard wordt gebruik gemaakt van Plexcord Cloud, maar u kunt ook uw eigen, zelf gehoste clouddienst aansluiten.",
            invalid: "Ongeldige URL"
        },
        sync: {
            title: "Synchronisatieregels voor dit apparaat",
            description: "Deze instelling bepaalt hoe instellingen tussen dit apparaat en de cloud worden verplaatst. Je kunt veranderingen in beide richtingen laten stromen, of één plek kiezen als de belangrijkste bron van waarheid.",
            direction: {
                both: "Tweerichtingssynchronisatie (wijzigingen gaan beide kanten op)",
                push: "Dit apparaat is de bron (alleen uploaden)",
                pull: "De cloud is de bron (alleen downloaden)",
                manual: "Niet automatisch synchroniseren (alleen handmatig synchroniseren via onderstaande knoppen)"
            }
        }
    },

    changelog: {
        text: "Wijzig logboek",
        title: "Wijzig logboek",
        description: "De laatste wijzigingen en updates voor Plexcord vindt u hier.",
        by: "door",
        check: "Controle van de opslagplaats",
        uptodate: "up-to-date",
        update: "Update",
        noMessage: "Geen bericht",
        unknown: "Onbekend",
        updatedPlugins: "Bijgewerkte plug-ins",
        newSettings: "Nieuwe instellingen",
        newSettingTooltip: "Nieuwe instelling in {{plugin}}",
        loading: "Laden...",
        repoUptodate: "Repository up-to-date",
        fetch: "Ophalen uit opslagplaats",
        clear: "Wis alle logboeken",
        internet: "Zorg ervoor dat je een internetverbinding hebt en probeer het opnieuw.",
        recent: "Recente wijzigingen",
        codeChanges: "Codewijzigingen {{count}} nieuwe commit{{s}}",
        updateLogs: "Updatelogboeken ({{count}})",
        noCommit: "Er zijn geen commits beschikbaar voorafgaand aan uw huidige versie. Klik op 'Ophalen uit Repository' om te controleren op nieuwe wijzigingen.",
        previous: "Eerdere updatesessies met hun commitgeschiedenis en plug-inwijzigingen.",
        modal: {
            description: "Bekijk de meest recente wijzigingen in Plexcord. Hiermee worden commits rechtstreeks uit de repository opgehaald om u te laten zien wat er nieuw is.",
            repository: "Opslagplaats",
            failed: "Kan niet ophalen - controleer de console",
            current: "Huidig:",
            hide: "Logboeken verbergen",
            show: "Logboeken weergeven",
            fetch: {
                title: "Wijzigingen ophalen",
                description: "Controleer de repository op nieuwe commits, plugin-updates en codewijzigingen. Hiermee wordt uw huidige versie vergeleken met de nieuwste beschikbare versie en wordt weergegeven wat er nieuw is.",
                newCommit: "Dit zijn de nieuwe commits en plugin-updates sinds je laatste versie. U kunt zien welke functies zijn toegevoegd, bugs zijn opgelost en welke plug-ins updates hebben ontvangen.",
                confirm: "Ophalen",
            }
        },
        commit: {
            available: "toezeggingen beschikbaar",
            no: "Geen nieuwe verplichtingen",
            new: "nieuwe plug-ins",
            updated: "bijgewerkte plug-ins",
            settings: "nieuwe instellingen"
        },
        toast: {
            already: "Al up-to-date met repository",
            found: "{{count}} nieuwe commit{{s}} gevonden uit de repository",
            local: "Repository is up-to-date met uw lokale kopie",
            failed: "Kan niet ophalen uit de repository :(",
            cleared: "Alle logs zijn gewist",
            logCleared: "Logboek is gewist",
            yourLatest: "Gelogde commits van uw laatste update"
        },
        alert: {
            clear: {
                title: "Wis alle logboeken",
                body: "Weet u zeker dat u alle logbestanden wilt wissen? Dit kan niet ongedaan worden gemaakt.",
                confirm: "Alles wissen",
                confirmColor: "Gevaar",
                cancel: "Annuleren"
            },
            log: {
                title: "Logboek wissen",
                body: "Weet u zeker dat u dit logboek wilt wissen? Dit kan niet ongedaan worden gemaakt.",
                confirm: "Logboek wissen",
                confirmColor: "Gevaar",
                cancel: "Annuleren"
            }
        },
        newPlugins: "{{count}} Nieuwe plug-in{{s}}",
        following: "De volgende plug-ins zijn toegevoegd in recente updates:",
        more: "+{{count}} meer plug-ins"
    },

    csp: {
        restart: "Om deze wijziging door te voeren is een herstart vereist",
        blocked: {
            resources: "Geblokkeerde bronnen",
            disallowed: "Sommige afbeeldingen, stijlen of lettertypen zijn geblokkeerd omdat ze afkomstig zijn van niet-toegestane domeinen.",
            recommended: "Het wordt sterk aanbevolen om ze naar GitHub of Imgur te verplaatsen. Maar u kunt ook domeinen toestaan ​​als u ze volledig vertrouwt.",
            afterAllow: "Nadat u een domein heeft toegestaan, moet u {{platform}} volledig afsluiten (via lade/taakbeheer) en opnieuw opstarten om de wijziging toe te passen.",
            allow: "Toestaan",
            url: "Geblokkeerde URL's"
        },
        imgur: {
            direct: "Imgur-links moeten directe links zijn in de vorm van {{etc}}",
            copy: "Om een ​​directe link te verkrijgen, klikt u met de rechtermuisknop op de afbeelding en selecteert u 'Afbeeldingsadres kopiëren'."
        },
        wants: {
            caller: "{{callerName}} wil verbindingen met {{domain}} toestaan",
            detail: "Tenzij u {{domain}} herkent en volledig vertrouwt, moet u dit verzoek annuleren!",
            restart: "U moet {{appName}} volledig afsluiten en opnieuw opstarten om de wijzigingen door te voeren.",
            type: {
                images: "Afbeeldingen",
                styles: "CSS en thema's",
                fonts: "Lettertypen"
            },
            content: "De volgende soorten inhoud mogen worden geladen vanaf {{domain}}:",
            understand: "Ik vertrouw {{domain}} volledig en begrijp de risico's van het toestaan ​​van verbindingen ermee.",
            button: {
                cancel: "Annuleren",
                allow: "Toestaan"
            },
            title: "Hostmachtigingen"
        }
    },

    themes: {
        title: "Thema's",
        management: "Themabeheer",
        description: "Pas het uiterlijk van Discord aan met thema's. Voeg lokale CSS-bestanden toe of laad thema's rechtstreeks vanaf URL's. Thema's met een tandwielpictogram hebben aanpasbare instellingen die u kunt wijzigen.",
        local: "Lokale thema's",
        new: "NIEUW",
        pinned: "Vastgezet",
        stylus: "Stylus-verlenging",
        bd: "BetterDiscord-thema's",
        github: "GitHub",
        download: "Op zoek naar thema's? Bekijk {{bd}} of zoek op {{github}}. Wanneer u downloadt van BetterDiscord, klikt u op 'Downloaden' en plaatst u het .theme.css-bestand in uw themamap.",
        add: "Toevoegen",
        reset: "Instellingen terugzetten naar standaard",
        notCSS: "Geen CSS-bestand. Vergeet niet om de onbewerkte link te gebruiken!",
        okay: "Oké!",
        checking: "Controleren...",
        valid: "Geldig!",
        upload: "Thema uploaden",
        openFolder: "Open de map Thema's",
        loadMissing: "Laad ontbrekende thema's",
        editQuickCSS: "Bewerk QuickCSS",
        editClient: "Klantthema bewerken",
        website: "Website openen",
        discord: "Discord-server",
        downloadTheme: "Downloaden",
        refresh: "Vernieuwen",
        delete: "Verwijderen",
        unknown: {
            title: "Onbekend",
            author: "Onbekende auteur",
            theme: "Een onenigheidsthema"
        },
        required: "De volgende plug-ins zijn vereist, maar zijn niet ingeschakeld:",
        homepage: "Startpagina",
        support: "Steun",
        online: {
            title: "Online-thema's",
            description: "Laad thema's rechtstreeks vanuit URL's in plaats van lokale bestanden. Online thema's worden automatisch bijgewerkt wanneer de bron verandert, zodat u altijd over de nieuwste versie beschikt zonder handmatige downloads.",
            enable: "Online thema's inschakelen",
            enableDescription: "Schakel het online laden van thema's in of uit. Indien uitgeschakeld, worden alle online thema's uitgeschakeld en kunt u geen nieuwe thema's toevoegen."
        },
        quickActions: {
            title: "Snelle acties",
            description: "Snelkoppelingen voor het beheren van uw thema's. Open uw themamap om nieuwe thema's toe te voegen, gebruik QuickCSS voor snelle stijlaanpassingen of laad thema's opnieuw nadat u wijzigingen hebt aangebracht."
        },
        error: {
            userscript: "Thema's worden niet ondersteund in het gebruikersscript!",
            stylus: "In plaats daarvan kunt u thema's installeren met de {{stylus}}!",
            expired: "Ongeldige of verlopen link",
            text: "Fout:"
        },
        copy: {
            url: "Kopieer URL",
            copied: "Thema-URL gekopieerd!",
            settings: "Kopieer thema-instellingen",
            copiedSettings: "Thema-instellingen naar klembord gekopieerd."
        },
        paste: {
            settings: "Thema-instellingen plakken",
            empty: "Je klembord is leeg.",
            invalid: "Uw klembord bevat geen geldige instellingsgegevens.",
            pasted: "Thema-instellingen geplakt vanaf het klembord."
        },
        settings: {
            for: "Instellingen voor {{themeName}}",
        },
        installed: {
            title: "Geïnstalleerde thema's",
            description: "Beheer hier uw thema's. Lokale thema's worden geladen vanuit uw themamap, online thema's via URL's. Thema's met een tandwielpictogram hebben aanpasbare instellingen.",
            count: "{{count}} thema{{s}} geïnstalleerd ({{localCount}} lokaal, {{onlineCount}} online) · {{enabledCount}} ingeschakeld",
            search: "Zoek een thema...",
            loading: "Thema's laden...",
            none: "Er zijn nog geen thema's geïnstalleerd. Voeg themabestanden toe aan uw themamap of voeg hierboven een online thema toe om aan de slag te gaan.",
            noCriteria: "Er zijn geen thema's die overeenkomen met uw zoek- of filtercriteria."
        },
        filter: {
            all: "Toon alles",
            online: "Online-thema's",
            local: "Lokale thema's",
            enabled: "Ingeschakeld",
            disabled: "Gehandicapt"
        },
        notification: {
            refresh: {
                title: "Thema vernieuwd",
                error: "Kan het thema niet vernieuwen"
            },
            failed: {
                download: "Kan het thema niet downloaden"
            }
        }
    },

    updater: {
        title: "Updater",
        settings: "Updater-instellingen",
        updates: "Updates",
        updated: "is bijgewerkt!",
        restart: "Klik hier om opnieuw te starten",
        repaired: "Plexcord is gerepareerd!",
        ok: "OK",
        preferences: {
            title: "Voorkeuren bijwerken",
            description: "Bepaal hoe Plexcord zichzelf up-to-date houdt. U kunt ervoor kiezen om automatisch op de achtergrond te updaten of een melding te krijgen wanneer er nieuwe updates beschikbaar zijn.",
        },
        github: {
            local: "Uw lokale kopie heeft recentere commits dan de externe repository. Dit gebeurt meestal wanneer u lokale wijzigingen heeft aangebracht. Bewaar ze of reset ze voordat u de update uitvoert."
        },
        error: {
            check: "Kan updates niet controleren. Kijk op de console voor meer informatie",
            occurred: "Er is een onbekende fout opgetreden",
            retrieve: "Kan niet ophalen - controleer de console",
            title: "Oeps!",
            tryAgain: "Er is een onbekende fout opgetreden. Probeer het opnieuw of raadpleeg de console voor meer informatie.",
            command: "Commando {{path}} niet gevonden. Installeer het en probeer het opnieuw.",
            code: "Code {{code}}. Zie de console voor meer informatie.",
            running: "Er is een fout opgetreden tijdens het uitvoeren van {{cmd}}: {{error}}",
            failed: "Dat mislukte ook :( Probeer te updaten of opnieuw te installeren met het installatieprogramma!"
        },
        available: "Er is 1 update",
        updateAvailable: "Er is een Plexcord-update beschikbaar!",
        click: "Klik hier om de update te bekijken",
        available_plural: "Er zijn {{count}}-updates",
        current: "Up-to-date!",
        successful: {
            title: "Succes bijwerken!",
            body: "Geüpdatet. Nu opnieuw opstarten om de wijzigingen toe te passen?",
            button: {
                confirm: "Opnieuw opstarten",
                cancel: "Niet nu!",
                update: "Nu bijwerken",
                check: "Controleer op updates"
            },
            noFound: "Geen updates gevonden"
        },
        automatically: {
            label: "Automatisch bijwerken",
            description: "Update Plexcord automatisch zonder bevestigingsvraag"
        },
        notify: {
            label: "Ontvang een melding wanneer een automatische update is voltooid",
            description: "Toont een melding wanneer Plexcord automatisch wordt bijgewerkt"
        },
        repo: "Repo",
        repoDescription: "Dit is de GitHub-repository waar Plexcord updates van ophaalt.",
        loading: "Laden...",
    },

    components: {
        error: {
            title: "O nee!",
            render: "Er is een fout opgetreden bij het renderen van dit onderdeel. Meer informatie vind je hieronder en in je console."
        },
        componentFailed: {
            message: "Eh oh! Kan deze pagina niet weergeven. Er is echter een update beschikbaar die dit mogelijk oplost. Wilt u nu updaten en opnieuw opstarten?"
        },
        quickCSS: {
            title: "QuickCSS-editor openen",
            message: "De QuickCSS-editor is nog steeds geopend op de achtergrond.",
            detail: "Wil je Discord toch sluiten? Hiermee wordt ook de QuickCSS-editor gesloten.",
            cancel: "Annuleren",
            close: "Hoe dan ook sluiten"
        }
    },

    commands: {
        error: {
            execute: "Er is een fout opgetreden tijdens het uitvoeren van de opdracht '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Melding afwijzen",
        noYet: "Nog geen meldingen",
        settings: "Meldingsinstellingen",
        log: {
            title: "Meldingslogboek",
            clear: "Meldingslogboek wissen",
            sure: "Weet je het zeker?",
            permamently: "Hiermee wordt de {{count}}-melding{{s}} definitief verwijderd. Deze actie kan niet ongedaan worden gemaakt.",
            button: {
                confirm: "Doe het!",
                cancel: "Laat maar zitten"
            }
        }
    },

    memberlist: {
        error: {
            render: "Kan {{key}} Ledenlijst-decorateur niet weergeven"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Kan {{key}} berichtaccessoire niet weergeven"
            }
        },
        decoration: {
            error: {
                render: "Kan {{key}} berichtdecoratie niet weergeven"
            }
        }
    },

    utils: {
        toast: {
            copied: "Gekopieerd naar klembord!"
        }
    },

    common: {
        unit: {
            year: "jaar",
            years: "jaar",
            month: "maand",
            months: "maanden",
            week: "week",
            weeks: "weken",
            day: "dag",
            days: "dagen",
            hour: "uur",
            hours: "uur",
            minute: "minuut",
            minutes: "notulen",
            second: "seconde",
            seconds: "seconden",
            ago: "geleden",
            s: "S"
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Schakel het volgen van Discord (analyse/'wetenschap'), statistieken en Sentry-crashrapportage uit",
            option: {
                disableAnalytics: {
                    label: "Schakel Analytics uit",
                    description: "Schakel het volgen van Discord (analyse/'wetenschap'), statistieken en Sentry-crashrapportage uit"
                }
            }
        },
        settings: {
            name: "Settings",
            description: "Voegt instellingen-UI en foutopsporingsinformatie toe",
            option: {
                language: {
                    label: "Taal",
                    description: "Selecteer uw voorkeurstaal voor Plexcord."
                },
                settingsLocation: {
                    label: "Instellingen Locatie",
                    description: "Bepaalt waar het gedeelte met Plexcord-instellingen zich bevindt."
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "Helpt ons u ondersteuning te bieden",
            commands: {
                description: {
                    debug: "Stuur Plexcord-foutopsporingsinformatie",
                    plugins: "Lijst met Plexcord-plug-ins verzenden"
                }
            },
            modals: {
                outdated: {
                    title: "Wacht even!",
                    body: "Je gebruikt een verouderde versie van Plexcord! De kans is groot dat uw probleem al is opgelost.",
                    footer: "Update eerst voordat u om ondersteuning vraagt!",
                    button: {
                        cancel: "Bekijk updates",
                        confirm: "Update en start nu opnieuw",
                        secondaryConfirm: "Ik weet wat ik doe, anders kan ik niet updaten"
                    }
                },
                updater: {
                    title: "Wacht even!",
                    body: "Je gebruikt een extern bijgewerkte Plexcord-versie, waar wij geen ondersteuning voor bieden!",
                    footer: "Schakel over naar een {{officially}}, of neem contact op met uw pakketbeheerder voor ondersteuning.",
                    officially: "officieel ondersteunde versie van Plexcord",
                    button: {
                        cancel: "Annuleren",
                        confirm: "Bekijk de downloadpagina",
                        now: "Nu bijwerken"
                    },
                    toast: {
                        success: "Succes! Opnieuw opstarten...",
                        already: "Al up-to-date!",
                        failed: "Kan niet updaten :("
                    }
                },
                custom: {
                    title: "Wacht even!",
                    header: "Je gebruikt een custom build van Plexcord, waar wij geen ondersteuning voor bieden!",
                    body: "Wij bieden alleen ondersteuning voor {{officialBuild}}. Ofwel {{switch}}, ofwel zoek zelf het probleem uit.",
                    footer: "Als u deze regel negeert, wordt u uitgesloten van het ontvangen van ondersteuning.",
                    official: "officiële constructies",
                    switch: "overstappen naar een officiële build",
                    button: {
                        confirm: "Begrepen",
                        secondaryConfirm: "Niet meer laten zien"
                    }
                }
            },
            button: {
                debug: "Voer /plexcord-debug uit",
                plugins: "Voer /plexcord-plug-ins uit",
                snippet: "Voer een fragment uit"
            },
            toast: {
                success: "Succes!",
                failed: "Kan fragment niet uitvoeren :(",
                failedOpenInvite: "Kan de uitnodiging niet openen, controleer de console :(",
                upload: "Plug-inlijst succesvol geüpload!",
                failedUpload: "Kan bestand met plug-inlijst niet uploaden. Probeer het opnieuw.",
                unableGenerate: "Kan plug-inlijst niet genereren."
            },
            dm: {
                warning: "Stuur alstublieft geen privébericht naar Plexcord-plug-inontwikkelaars voor ondersteuning!{{br}}In plaats daarvan kunt u lid worden van de {{support}}-server en het Plexcord-ondersteuningskanaal gebruiken: {{channel}}"
            },
            alert: {
                title: "Waarschuwing: hoog aantal plug-ins",
                paragraph1: "Je hebt meer dan 100 plug-ins ingeschakeld.",
                paragraph2: "Vanwege het enorme aantal plug-ins ontvangt u mogelijk geen ondersteuning.",
                paragraph3: "Uw probleem wordt waarschijnlijk veroorzaakt door plug-inconflicten.",
                paragraph4: "Overweeg om enkele plug-ins uit te schakelen om problemen op te lossen.",
                paragraph5: "Uw plug-inlijst wordt als tekstbestand verzonden.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Klik met de rechtermuisknop op uw accountpaneel linksonder om uw profiel op de huidige server te bekijken",
            option: {
                prioritizeServerProfile: {
                    label: "Geef prioriteit aan het serverprofiel",
                    description: "Geef prioriteit aan het serverprofiel wanneer u met de linkermuisknop op uw accountpaneel klikt"
                }
            },
            context: {
                account: "Bekijk accountprofiel",
                server: "Bekijk serverprofiel",
                prioritize: "Geef prioriteit aan het serverprofiel"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Zorgt ervoor dat de Pop-out voor ruisonderdrukking schakelt tussen Geen en Krisp in plaats van Krisp en Standaard"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Animeert alles wat geanimeerd kan worden",
            option: {
                icons: {
                    label: "Pictogrammen",
                    description: "Animeer altijd serverpictogrammen, avatars, decor en meer"
                },
                statusEmojis: {
                    label: "Status-emoji's",
                    description: "Animeer altijd status-emoji's"
                },
                serverBanners: {
                    label: "Serverbanners",
                    description: "Zorg altijd voor animatie van serverbanners"
                },
                nameplates: {
                    label: "Naamplaten",
                    description: "Animeer naamplaatjes altijd"
                },
                roleGradients: {
                    label: "Rolgradiënten",
                    description: "Animeer altijd rolgradiënten"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Breidt profielen-pop-outs altijd uit naar het volledige modale formaat"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Vouwt altijd rollenlijsten uit in profielpop-outs",
            option: {
                hideArrow: {
                    label: "Pijl verbergen",
                    description: "Pijl verbergen"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Speelt Animal Crossing Animalese voor elk verzonden bericht (ze keffen veel)",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume van het dierlijke geluid"
                },
                speed: {
                    label: "Snelheid",
                    description: "Snelheid van het dierlijke geluid"
                },
                pitch: {
                    label: "Toonhoogte",
                    description: "Pitch-vermenigvuldiger"
                },
                messageLengthLimit: {
                    label: "Limiet voor berichtlengte",
                    description: "Maximale lengte van het te verwerken bericht"
                },
                processOwnMessages: {
                    label: "Verwerk eigen berichten",
                    description: "Schakel in om ook uw eigen berichten te yappen"
                },
                soundQuality: {
                    label: "Geluidskwaliteit",
                    description: "Kwaliteit van geluid om te gebruiken",
                    high: "Hoog",
                    med: "Medium",
                    low: "Laag",
                    lowest: "Laagste"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Verwijdert het vervelende, niet-vertrouwde domein en de pop-up met verdachte bestanden",
            option: {
                domain: {
                    label: "Domein",
                    description: "Verwijder de pop-up van het niet-vertrouwde domein bij het openen van links"
                },
                file: {
                    label: "Bestand",
                    description: "Verwijder de pop-up 'Potentieel gevaarlijke download' bij het openen van links"
                },
                noDeleteSafety: {
                    label: "Geen verwijderingsveiligheid",
                    description: "Verwijdert de vereiste voor het invoeren van de servernaam bij het verwijderen van een server"
                },
                confirmModal: {
                    label: "Modaal bevestigen",
                    description: "Moet er een 'weet u zeker dat u wilt verwijderen'-modaliteit worden getoond?"
                }
            },
            alert: {
                title: "Server verwijderen?",
                body: "Het is permanent, als dat niet duidelijk was.",
                confirm: "Verwijderen",
                cancel: "Annuleren"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonimiseer geüploade bestandsnamen",
            option: {
                anonymiseByDefault: {
                    label: "Anonimiseer standaard",
                    description: "Anonimiseer bestandsnamen standaard. U kunt dit indien nodig uitschakelen in de uploadpop-up."
                },
                spoilerMessages: {
                    label: "Spoiler-berichten",
                    description: "Anonimiseer bestandsnamen die als spoilers zijn gemarkeerd."
                },
                method: {
                    label: "Methode",
                    description: "Anonimiseringsmethode",
                    random: "Willekeurige karakters",
                    consistent: "Consistent",
                    timestamp: "Tijdstempel"
                },
                randomisedLength: {
                    label: "Gerandomiseerde lengte",
                    description: "Willekeurige tekenlengte"
                },
                consistent: {
                    label: "Consistent",
                    description: "Consistent anonimiseringsgeheim"
                }
            },
            using: {
                anonymous: "Anonieme bestandsnaam gebruiken",
                spoiler: "Normale bestandsnaam gebruiken"
            },
            spoiler: {
                description: "Schakel spoiler voor uw bestanden in",
                toggle: "Schakel spoiler voor uw bestanden in (standaard ingeschakeld)",
                enabled: "Spoiler ingeschakeld!",
                disabled: "Spoiler uitgeschakeld!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Discord rijke aanwezigheid voor je Apple Music!",
            about: "Voor de aanpasbare tekenreeksen voor activiteitenformaten kunt u verschillende speciale tekenreeksen gebruiken om trackgegevens in activiteiten op te nemen! {{name}} wordt vervangen door de tracknaam; {{artist}} wordt vervangen door de naam/namen van de artiest(en); en {{album}} wordt vervangen door de albumnaam.",
            button: {
                listen: "Luister op Apple Music",
                songLink: "Bekijk op SongLink"
            },
            option: {
                activityType: {
                    label: "Activiteitstype",
                    description: "Welk type activiteit",
                    listening: "Luisteren",
                    playing: "Spelen"
                },
                statusDisplayType: {
                    label: "Type statusweergave",
                    description: "Toon de track-/artiestnaam in de ledenlijst",
                    off: "Niet weergeven (toont een algemeen luisterbericht)",
                    artist: "Toon artiestennaam",
                    track: "Toon tracknaam"
                },
                refreshInterval: {
                    label: "Vernieuwingsinterval",
                    description: "Het interval tussen activiteitvernieuwingen (seconden)"
                },
                enableTimestamps: {
                    label: "Tijdstempels inschakelen",
                    description: "Of tijdstempels al dan niet moeten worden ingeschakeld"
                },
                enableButtons: {
                    label: "Knoppen inschakelen",
                    description: "Of knoppen al dan niet moeten worden ingeschakeld"
                },
                nameString: {
                    label: "Naamreeks",
                    description: "Indelingsreeks voor activiteitsnaam"
                },
                detailsString: {
                    label: "Details String",
                    description: "Formaatreeks voor activiteitsdetails"
                },
                stateString: {
                    label: "Staatsreeks",
                    description: "Indelingsreeks voor activiteitsstatus"
                },
                largeImageType: {
                    label: "Groot afbeeldingstype",
                    description: "Activiteitsitems groot afbeeldingstype",
                    album: "Albumillustraties",
                    artist: "Kunstwerk van de kunstenaar",
                    disabled: "Gehandicapt"
                },
                largeTextString: {
                    label: "Grote tekstreeks",
                    description: "Activiteitsitems in grote tekstindeling"
                },
                smallImageType: {
                    label: "Klein afbeeldingstype",
                    description: "Activiteitsitems klein afbeeldingstype",
                    album: "Apple Music-logo",
                    artist: "Kunstwerk van de kunstenaar",
                    disabled: "Gehandicapt"
                },
                smallTextString: {
                    label: "Kleine tekstreeks",
                    description: "Activiteitsitems in kleine tekstindeling"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Clientplug-in voor arRPC om RPC op Discord Web in te schakelen (experimenteel)",
            use: {
                title: "Hoe arRPC te gebruiken",
                enable: "{{link}} om de server draaiende te krijgen en schakel vervolgens de plug-in in.",
                link: "Volg de instructies in de GitHub-opslagplaats"
            },
            toast: {
                connected: "Verbonden met arRPC",
                failed: "Kan geen verbinding maken met arRPC. Is deze actief?",
                retry: "Opnieuw proberen"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Met @someone kun je willekeurig iemand vermelden"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Werkt automatisch uw online status bij (online, inactief, dnd) wanneer u games start",
            option: {
                statusToSet: {
                    label: "Status om in te stellen",
                    description: "De status die moet worden ingesteld bij het starten van een game",
                    online: "Online",
                    dnd: "Niet storen",
                    idle: "Inactief",
                    invisible: "Onzichtbaar"
                },
                excludeInvisible: {
                    label: "Sluit onzichtbaar uit",
                    description: "Voorkom automatische statuswijzigingen terwijl uw status op onzichtbaar is ingesteld"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Zipt automatisch gespecificeerde bestandstypen en mappen voordat deze naar Discord worden geüpload",
            option: {
                extensions: {
                    label: "Extensies",
                    description: "Door komma's gescheiden lijst met bestandsextensies voor automatisch zippen (bijv. .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Toont banners in de ledenlijst",
            option: {
                animate: {
                    label: "Animeren",
                    description: "Animatiebanner"
                },
                preferNameplate: {
                    label: "Liever naamplaatje",
                    description: "Geef de voorkeur aan een naambord boven een banner"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Toont activiteitspictogrammen in de ledenlijst en maakt het weergeven van alle activiteiten mogelijk",
            option: {
                memberList: {
                    label: "Ledenlijst",
                    description: "Toon activiteitspictogrammen in de ledenlijst"
                },
                iconSize: {
                    label: "Pictogramgrootte",
                    description: "Grootte van de activiteitspictogrammen"
                },
                specialFirst: {
                    label: "Speciaal eerst",
                    description: "Speciale activiteiten eerst tonen (momenteel Spotify en Twitch)"
                },
                renderGifs: {
                    label: "Geef GIF's weer",
                    description: "Renderen van GIF's toestaan"
                },
                removeGameActivityStatus: {
                    label: "Verwijder de status 'Spelactiviteit'",
                    description: "Verwijder het spelactiviteitpictogram en de status"
                },
                userPopout: {
                    label: "Gebruikerspop-out",
                    description: "Toon alle activiteiten in de profielpop-out/zijbalk"
                },
                hideTooltip: {
                    label: "Tooltip verbergen",
                    description: "Verbergt activiteiten op verschillende plaatsen"
                },
                allActivitiesStyle: {
                    label: "Alle activiteitenstijl",
                    description: "Stijl voor het tonen van alle activiteiten",
                    list: "Lijst",
                    carousel: "Carrousel",
                    left: "Links",
                    right: "Rechts"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Voegt een spectrograaf en oscilloscoop-visualizer toe aan spelers met audiobijlagen",
            option: {
                oscilloscope: {
                    label: "Oscilloscoop",
                    description: "Schakel de visualisatie van de oscilloscoop in"
                },
                spectrograph: {
                    label: "Spectrograaf",
                    description: "Spectrograafvisualisatie inschakelen"
                },
                oscilloscopeSolidColor: {
                    label: "Oscilloscoop effen kleur",
                    description: "Gebruik een effen kleur voor de oscilloscoop in plaats van een verloop"
                },
                oscilloscopeColor: {
                    label: "Oscilloscoop kleur",
                    description: "Kleur van de oscilloscoop wanneer effen kleur is ingeschakeld"
                },
                spectrographSolidColor: {
                    label: "Spectrograaf effen kleur",
                    description: "Gebruik een effen kleur voor de spectrograaf in plaats van een verloop"
                },
                spectrographColor: {
                    label: "Spectrograaf kleur",
                    description: "Kleur van de spectrograaf wanneer effen kleur is ingeschakeld"
                },
                forceMoveBelow: {
                    label: "Forceer beweging naar beneden",
                    description: "Forceer de visualiser om zich onder de audiobediening te bevinden"
                }
            },
            toast: {
                invalidColorFormat: "Ongeldig kleurformaat voor {{settingKey}}, zorg ervoor dat het formaat 'R, G, B' of '#RRGGBB' is"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Maak aangepaste redenen om te gebruiken in de Discord-verbodsmodal, en/of toon standaard een tekstinvoer in plaats van de opties.",
            option: {
                reasons: {
                    label: "Redenen",
                    description: "Uw aangepaste redenen"
                },
                isTextInputDefault: {
                    label: "Is tekstinvoer standaard",
                    description: "Toont standaard een tekstinvoer in plaats van een selectiemenu. (Gelijkwaardig aan het klikken op de optie 'Anders')"
                }
            },
            title: "Redenen",
            placeholder: "Reden",
            add: "Voeg nog een reden toe"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Hiermee kunt u zoeken in de lijst met geblokkeerde gebruikers en kunt u namen selecteren in de instellingen.",
            placeholder: "Gebruikers zoeken..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Verbetert het commandosysteem met diverse verbeteringen.",
            option: {
                autoFillArguments: {
                    label: "Argumenten voor automatisch aanvullen",
                    description: "Vul de opdracht automatisch in met alle argumenten in plaats van alleen de vereiste argumenten"
                },
                allowNewlinesInCommands: {
                    label: "Sta nieuwe regels toe in opdrachten",
                    description: "Nieuwe regels toestaan ​​in opdrachtinvoer (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Vernieuwt Discord-toepassingsopdrachten lokaal",
                    user: "specifieke gebruiker om te proberen en te vernieuwen",
                    refreshing: "Applicatieopdrachten vernieuwen...",
                    refreshed: "Commando's zijn succesvol vernieuwd!",
                    failed: "Kan opdrachten niet vernieuwen. Controleer de console voor meer informatie."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Toont servermappen in de speciale zijbalk en voegt mapgerelateerde verbeteringen toe",
            option: {
                sidebar: {
                    label: "Zijbalk",
                    description: "Geef servers uit de map weer in de speciale zijbalk"
                },
                sidebarAnim: {
                    label: "Zijbalkanimatie",
                    description: "Animeer het openen van de zijbalk van de map"
                },
                closeAllFolders: {
                    label: "Sluit alle mappen",
                    description: "Sluit alle mappen wanneer u een server selecteert die niet in een map staat"
                },
                closeAllHomeButton: {
                    label: "Sluit alles Home-knop",
                    description: "Sluit alle mappen door op de homeknop te klikken"
                },
                closeOthers: {
                    label: "Sluit overige",
                    description: "Sluit andere mappen wanneer u een map opent"
                },
                closeServerFolder: {
                    label: "Sluit de servermap",
                    description: "Sluit de map wanneer u een server in die map selecteert"
                },
                forceOpen: {
                    label: "Forceer openen",
                    description: "Forceer het openen van een map wanneer u overschakelt naar een server van die map"
                },
                keepIcons: {
                    label: "Houd pictogrammen",
                    description: "Blijf gildepictogrammen tonen in de primaire gildebalkmap wanneer deze geopend is in de BetterFolders-zijbalk"
                },
                showFolderIcon: {
                    label: "Mappictogram weergeven",
                    description: "Toon het mappictogram boven de mapgilden in de BetterFolders-zijbalk",
                    never: "Nooit",
                    always: "Altijd",
                    moreThanOne: "Wanneer meer dan één map is uitgevouwen"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Verander de GIF-alt-tekst van simpelweg 'GIF' naar de GIF-tags/bestandsnaam"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Zorgt ervoor dat de GIF-kiezer standaard de favoriete categorie opent",
            option: {
                keepOpen: {
                    label: "Blijf open",
                    description: "Houdt de gif-kiezer open na het selecteren van een gif"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Bekijk de vervaldatum van uitnodigingen, bekijk het profiel van de uitnodiging en bekijk een voorbeeld van de servers voordat u lid wordt door op de naam te klikken",
            render: {
                tip: "Deze uitnodiging verloopt over {{time}}",
                header: "{{name}} heeft je uitgenodigd voor {{server}}",
                never: "niet verlopen"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Verberg notities of schakel de spellingcontrole uit (Configureer in instellingen!!)",
            option: {
                hide: {
                    label: "Verberg notities",
                    description: "Verberg het notitievak in gebruikerspop-outs"
                },
                noSpellCheck: {
                    label: "Geen spellingcontrole",
                    description: "Schakel de spellingcontrole in notities uit"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Het aantal plus vóór :emoji: is het bericht waar je het aan moet toevoegen"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Voegt opties toe om de rolkleur te kopiëren / de rol te bewerken / het rolpictogram te bekijken wanneer u met de rechtermuisknop op rollen in het gebruikersprofiel klikt",
            option: {
                roleIconFileFormat: {
                    label: "Bestandsformaat rolpictogram",
                    description: "Bestandsindeling die u kunt gebruiken bij het bekijken van rolpictogrammen"
                }
            },
            context: {
                copyColor: "Kopieer rolkleur",
                editRole: "Rol bewerken",
                viewIcon: "Rolpictogram bekijken"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Kopieer de rolkleur op RoleDot (toegankelijkheidsinstelling) klik. Maakt het ook mogelijk om zowel RoleDot als gekleurde namen tegelijkertijd te gebruiken.",
            option: {
                bothStyles: {
                    label: "Beide stijlen",
                    description: "Toon zowel rolpunten als gekleurde namen"
                },
                copyRoleColorInProfilePopout: {
                    label: "Kopieer rolkleur in profielpop-out",
                    description: "Sta toe dat u op de rolpunt in de profielpop-out klikt om de rolkleur te kopiëren"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Verbetert het menu Sessies (apparaten). Hiermee kunt u exacte tijdstempels bekijken, elke sessie een aangepaste naam geven en meldingen ontvangen over nieuwe sessies.",
            new: "NIEUW",
            newSessions: "Nieuwe sessies:",
            rename: "Hernoemen",
            newDevice: "Nieuwe apparaatnaam",
            resetName: "Naam opnieuw instellen",
            save: "Redden",
            cancel: "Annuleren",
            option: {
                backgroundCheck: {
                    label: "Achtergrondcontrole",
                    description: "Controleer op nieuwe sessies op de achtergrond en geef meldingen weer wanneer deze worden gedetecteerd"
                },
                checkInterval: {
                    label: "Controleer interval",
                    description: "Hoe vaak er op de achtergrond moet worden gecontroleerd op nieuwe sessies (indien ingeschakeld), in minuten"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Verbetert uw ervaring met het openen van instellingenmenu's",
            option: {
                disableFade: {
                    label: "Schakel vervagen uit",
                    description: "Schakel de crossfade-animatie uit"
                },
                organizeMenu: {
                    label: "Menu organiseren",
                    description: "Organiseert het contextmenu van de instellingen in categorieën"
                },
                eagerLoad: {
                    label: "Gretige lading",
                    description: "Verwijdert de laadvertraging bij het voor de eerste keer openen van het menu"
                }
            },
            alert: {
                title: "Opnieuw opstarten vereist",
                restart: "U heeft instellingen gewijzigd waarvoor opnieuw opstarten vereist is.",
                confirm: "Start nu opnieuw op",
                cancel: "Later!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Uploaden met een enkele klik, open het menu met een rechterklik"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Met deze plug-in kunt u streamvoorbeelden vergroten",
            context: {
                viewPreview: "Bekijk streamvoorbeeld"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Blokkeert berichten die specifieke, door de gebruiker gedefinieerde trefwoorden bevatten, alsof de gebruiker die ze heeft verzonden, is geblokkeerd.",
            option: {
                blockedWords: {
                    label: "Geblokkeerde woorden",
                    description: "Door komma's gescheiden lijst met te blokkeren woorden"
                },
                useRegex: {
                    label: "Gebruik Regex",
                    description: "Gebruik elke waarde als reguliere expressie bij het controleren van de berichtinhoud (geavanceerd)"
                },
                caseSensitive: {
                    label: "Hoofdlettergevoelig",
                    description: "Of u wel of niet hoofdlettergevoelig wilt zoeken"
                },
                ignoreBlockedMessages: {
                    label: "Negeer geblokkeerde berichten",
                    description: "Negeert de (recente) nieuwe berichtenbalk volledig"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Voorkom dat Krisp wordt geladen"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Vervaag bijlagen in NSFW-kanalen totdat ze zweven",
            option: {
                blurAmount: {
                    label: "Hoeveelheid vervagen",
                    description: "Hoeveelheid vervaging (in pixels)"
                },
                blurAllChannels: {
                    label: "Vervaag alle kanalen",
                    description: "Bijlagen vervagen in alle kanalen (niet alleen NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Omzeil de pin-prompt bij gebruik van de pin-functies"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Ontvang nog steeds meldingen van specifieke bronnen wanneer u zich in de modus Niet storen bevindt. Klik met de rechtermuisknop op gebruikers/kanalen/gilden om de modus Niet storen te omzeilen.",
            context: {
                remove: "Statusbypass verwijderen",
                add: "Statusbypass toevoegen"
            },
            option: {
                guilds: {
                    label: "Gilden",
                    description: "Gilden moeten worden omzeild (melding wanneer ergens in de gilde wordt gepingd)",
                    placeholder: "Scheid met komma's"
                },
                channels: {
                    label: "Kanalen",
                    description: "Kanalen die moeten worden overgeslagen (melding bij pingen in dat kanaal)",
                    placeholder: "Scheid met komma's"
                },
                users: {
                    label: "Gebruikers",
                    description: "Gebruikers die dit moeten laten omzeilen (melding voor alle berichten verzonden in DM's)",
                    placeholder: "Scheid met komma's"
                },
                allowOutsideOfDms: {
                    label: "Buiten DM's toestaan",
                    description: "Sta geselecteerde gebruikers toe om de status ook buiten DM's te omzeilen (werkt als een kanaal-/gilde-bypass, maar dit geldt voor alle berichten die door de geselecteerde gebruikers worden verzonden)"
                },
                notificationSound: {
                    label: "Meldingsgeluid",
                    description: "Of het meldingsgeluid moet worden afgespeeld"
                },
                respectSilentPings: {
                    label: "Respecteer stille pings",
                    description: "Respecteer stille pings (@stil / onderdruk meldingen)"
                },
                statusToUse: {
                    label: "Te gebruiken status",
                    description: "Status die moet worden gebruikt voor witte lijst",
                    online: "Online",
                    idle: "Inactief",
                    dnd: "Niet storen",
                    invisible: "Onzichtbaar"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Houd verjaardagen van gebruikers bij en toon ze met taartpictogrammen",
            context: {
                label: "Verjaardag",
                setBirthday: "Verjaardag instellen",
                clearBirthday: "Duidelijke verjaardag",
                current: "Huidig:"
            },
            option: {
                chat: {
                    label: "Chatten",
                    description: "Toon taartpictogrammen naast gebruikersnamen in de chat"
                },
                memberList: {
                    label: "Ledenlijst",
                    description: "Toon taartpictogrammen in de ledenlijst"
                },
                profileBadge: {
                    label: "Profielbadge",
                    description: "Toon taartbadge in gebruikersprofiel"
                },
                notificationSound: {
                    label: "Meldingsgeluid",
                    description: "Speel geluid af wanneer een verjaardagsmelding wordt verzonden"
                },
                userList: {
                    label: "Opgeslagen verjaardagen",
                    description: "Beheer opgeslagen verjaardagen"
                }
            },
            locations: {
                chat: {
                    label: "Chatten",
                    description: "naast gebruikersnamen in de chat"
                },
                memberList: {
                    label: "Ledenlijst",
                    description: "in ledenlijst"
                }
            },
            toast: {
                success: "Verjaardagsset succesvol!",
                invalid: "Ongeldig verjaardagsformaat! Alleen DD/MM wordt geaccepteerd.",
                cleared: "Verjaardag succesvol gewist!"
            },
            notification: {
                title: "🎂 Verjaardag vandaag!",
                body: "Vandaag is {{username}} jarig!"
            },
            modal: {
                title: "Verjaardag instellen voor {{username}}",
                description: "Voer de verjaardag in DD/MM-formaat in (bijvoorbeeld 25/12)",
                placeholder: "bijv. 25/12",
                current: "Huidige verjaardag:",
                set: "Verjaardag instellen",
                cancel: "Annuleren",
                birthday: "Het is mijn verjaardag! 🎂",
                saved: "Opgeslagen verjaardagen",
                savedDesc: "Nog geen verjaardagen opgeslagen. Klik met de rechtermuisknop op gebruikers om hun verjaardagen toe te voegen!",
                today: "Vandaag",
                remove: "Verwijderen",
                loading: "Laden...",
                save: "Redden",
                edit: "Bewerking"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Toont oproeptimers in alle spraakoproepen",
            option: {
                format: {
                    label: "Formaat",
                    description: "Compact of voor mensen leesbaar formaat",
                    human: "30d 23u 00m 42s"
                },
                allCallTimers: {
                    label: "Alle oproeptimers",
                    description: "Toon oproeptimers voor alle gebruikers op servers"
                },
                showWithoutHover: {
                    label: "Tonen zonder hover",
                    description: "Toon altijd de timer zonder te hoeven zweven"
                },
                showRoleColor: {
                    label: "Toon rolkleur",
                    description: "Weergave in de rolkleur van de gebruiker (als de ShowRoleColor-plug-in is ingeschakeld)"
                },
                trackSelf: {
                    label: "Volg jezelf",
                    description: "Laat ook je eigen timer zien"
                },
                showSeconds: {
                    label: "Seconden weergeven",
                    description: "Seconden weergeven in de timer"
                },
                watchLargeGuilds: {
                    label: "Kijk Grote gilden",
                    description: "Volg gebruikers in grote gilden. Dit kan vertraging veroorzaken als je in veel grote gilden zit met actieve stemgebruikers. Zonder problemen getest met maximaal 2000 actieve stemgebruikers."
                },
                fixUI: {
                    label: "UI-fix",
                    description: "In sommige gevallen kan de timer de gebruikersinterface verbreken. Schakel deze optie in om het probleem te verhelpen."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Voegt badges toe aan kanalen op basis van hun type",
            badge: {
                private: "Dit kanaal is vergrendeld.",
                nsfw: "Dit kanaal is gemarkeerd als NSFW.",
                rules: "Dit kanaal is het kanaal voor serverregels."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Eén badge per kanaal",
                    description: "Toon slechts één badge per kanaal"
                },
                showTextBadge: {
                    label: "Toon tekstbadge",
                    description: "Toon tekstbadge"
                },
                showVoiceBadge: {
                    label: "Toon stembadge",
                    description: "Toon Voice-badge"
                },
                showCategoryBadge: {
                    label: "Categoriebadge tonen",
                    description: "Categoriebadge tonen"
                },
                showDirectoryBadge: {
                    label: "Directory-badge tonen",
                    description: "Directory-badge tonen"
                },
                showAnnouncementThreadBadge: {
                    label: "Toon aankondigingsthread-badge",
                    description: "Badge voor aankondigingsthread tonen"
                },
                showPublicThreadBadge: {
                    label: "Toon openbare thread-badge",
                    description: "Badge voor openbare discussie tonen"
                },
                showPrivateThreadBadge: {
                    label: "Privéthread-badge tonen",
                    description: "Toon privéthread-badge"
                },
                showStageBadge: {
                    label: "Toon podiumbadge",
                    description: "Tonen Stage-badge"
                },
                showAnnouncementBadge: {
                    label: "Aankondigingsbadge tonen",
                    description: "Aankondigingsbadge tonen"
                },
                showForumBadge: {
                    label: "Toon forumbadge",
                    description: "Forum-badge tonen"
                },
                showMediaBadge: {
                    label: "Mediabadge tonen",
                    description: "Mediabadge tonen"
                },
                showNSFWBadge: {
                    label: "Toon NSFW-badge",
                    description: "Toon NSFW-badge"
                },
                showLockedBadge: {
                    label: "Toon vergrendelde badge",
                    description: "Toon vergrendelde badge"
                },
                showRulesBadge: {
                    label: "Toon regelsbadge",
                    description: "Toon Regels-badge"
                },
                showUnknownBadge: {
                    label: "Toon onbekende badge",
                    description: "Toon onbekende badge"
                },
                textBadgeLabel: {
                    label: "Tekstbadgelabel",
                    description: "Tekstbadgelabel",
                    default: "Tekst"
                },
                voiceBadgeLabel: {
                    label: "Stembadgelabel",
                    description: "Label met stembadge",
                    default: "Stem"
                },
                categoryBadgeLabel: {
                    label: "Categorie-badgelabel",
                    description: "Categoriebadgelabel",
                    default: "Categorie"
                },
                announcementBadgeLabel: {
                    label: "Aankondiging Draad Badge Label",
                    description: "Aankondiging Thread-badgelabel",
                    default: "Nieuws"
                },
                announcementThreadBadgeLabel: {
                    label: "Aankondiging Draad Badge Label",
                    description: "Aankondiging Thread-badgelabel",
                    default: "Nieuws draad"
                },
                publicThreadBadgeLabel: {
                    label: "Badgelabel voor openbare draad",
                    description: "Badgelabel voor openbare discussies",
                    default: "Draad"
                },
                privateThreadBadgeLabel: {
                    label: "Private Thread-badgelabel",
                    description: "Private Thread-badgelabel",
                    default: "Privé draad"
                },
                stageBadgeLabel: {
                    label: "Fase-badgelabel",
                    description: "Etiket voor podiumbadge",
                    default: "Fase"
                },
                directoryBadgeLabel: {
                    label: "Directory-badgelabel",
                    description: "Directory-badgelabel",
                    default: "Directory"
                },
                forumBadgeLabel: {
                    label: "Forumbadgelabel",
                    description: "Forumbadgelabel",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Mediabadgelabel",
                    description: "Mediabadgelabel",
                    default: "Media"
                },
                nsfwBadgeLabel: {
                    label: "NSFW-badgelabel",
                    description: "NSFW-badgelabel",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Vergrendeld badgelabel",
                    description: "Vergrendeld badgelabel",
                    default: "Vergrendeld"
                },
                rulesBadgeLabel: {
                    label: "Regels Badge Label",
                    description: "Regels badge-label",
                    default: "Regels"
                },
                unknownBadgeLabel: {
                    label: "Onbekend badgelabel",
                    description: "Onbekend badgelabel",
                    default: "Onbekend"
                },
                textBadgeColor: {
                    label: "Tekstbadgekleur",
                    description: "Kleur van de tekstbadge"
                },
                voiceBadgeColor: {
                    label: "Kleur stembadge",
                    description: "Kleur stembadge"
                },
                categoryBadgeColor: {
                    label: "Kleur van categoriebadge",
                    description: "Kleur van categoriebadge"
                },
                announcementBadgeColor: {
                    label: "Aankondiging Draad Badge Kleur",
                    description: "Kleur aankondigingsdraad"
                },
                announcementThreadBadgeColor: {
                    label: "Aankondiging Draad Badge Kleur",
                    description: "Kleur aankondigingsdraad"
                },
                publicThreadBadgeColor: {
                    label: "Badgekleur openbare draad",
                    description: "Badgekleur voor openbare threads"
                },
                privateThreadBadgeColor: {
                    label: "Badgekleur voor privéthreads",
                    description: "Kleur van de Private Thread-badge"
                },
                stageBadgeColor: {
                    label: "Kleur podiumbadge",
                    description: "Kleur podiumbadge"
                },
                directoryBadgeColor: {
                    label: "Kleur mapbadge",
                    description: "Kleur mapbadge"
                },
                forumBadgeColor: {
                    label: "Kleur forumbadge",
                    description: "Kleur forumbadge"
                },
                mediaBadgeColor: {
                    label: "Kleur mediabadge",
                    description: "Kleur mediabadge"
                },
                nsfwBadgeColor: {
                    label: "NSFW-badgekleur",
                    description: "NSFW-badgekleur"
                },
                lockedBadgeColor: {
                    label: "Vergrendelde badgekleur",
                    description: "Vergrendelde badgekleur"
                },
                rulesBadgeColor: {
                    label: "Regels Badgekleur",
                    description: "Regels badge kleur"
                },
                unknownBadgeColor: {
                    label: "Onbekende badgekleur",
                    description: "Onbekende badgekleur"
                }
            },
            badges: {
                text: "Tekst",
                voice: "Stem",
                category: "Categorie",
                announcement: "Nieuws",
                announcementThread: "Nieuws draad",
                publicThread: "Draad",
                privateThread: "Privé draad",
                stage: "Fase",
                directory: "Directory",
                forum: "Forum",
                media: "Media",
                nsfw: "NSFW",
                locked: "Vergrendeld",
                rules: "Regels",
                unknown: "Onbekend"
            },
            tooltip: {
                locked: "Dit kanaal is vergrendeld.",
                nsfw: "Dit kanaal is gemarkeerd als NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Groepeer uw vaak bezochte kanalen in tabbladen, zoals een browser",
            open: "Openen op nieuw tabblad",
            animation: {
                title: "Animatiebediening",
                description: "Schakel specifieke animaties voor kanaaltabbladen in of uit. Elke optie kan afzonderlijk worden geschakeld.",
                placeholder: "Selecteer welke animaties u wilt inschakelen...",
                tabHover: "Tab-zweefeffecten (lift + schaal)",
                tabSelection: "Geselecteerde animatie voor tablift",
                tabDragDrop: "Tabblad slepen en neerzetten (spook + opnieuw ordenen)",
                tabEnterExit: "Tabblad Dia's openen/sluiten (maken + sluiten)",
                tabIconPop: "Pictogram pop-up bij selectie (pictogram opschalen)",
                closeRotation: "Knoprotatie sluiten",
                plusPulse: "Plus-knoppuls",
                mentionGlow: "Vermeld Badge Glow",
                compactExpand: "Uitbreiding compacte modus",
                selectedBorder: "Geselecteerd tabblad Blauwe rand",
                selectedBackground: "Geselecteerde achtergrondkleur van tabblad",
                tabShadows: "Tabbladschaduweffecten",
                tabRepositioning: "Tabbladherpositionering (soepele positieveranderingen)",
                resizeHandle: "Formaat wijzigen Vervagen",
                questActivate: "Actief zoektochtverloop"
            },
            bookmark: {
                label: "Bladwijzer",
                unknown: "Onbekende gebruiker",
                folder: "Map",
                add: "Toevoegen aan bladwijzers",
                edit: "Bladwijzer bewerken",
                delete: "Bladwijzer verwijderen",
                remove: "Verwijderen uit bladwijzers",
                removeFolder: "Verwijder bladwijzer uit map",
                loading: "Bladwijzers laden...",
                noBookmarks: "Je hebt geen bladwijzers. U kunt een geopend tabblad toevoegen of dit verbergen door er met de rechtermuisknop op te klikken",
                quests: "Zoektochten",
                messageRequests: "Berichtverzoeken",
                friends: "Vrienden",
                shop: "Winkel",
                library: "Bibliotheek",
                discovery: "Ontdekking",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Activiteit",
                specialPage: "Speciale pagina"
            },
            button: {
                save: "Redden",
                delete: "Verwijderen",
                cancel: "Annuleren"
            },
            context: {
                label: "KanaalTabbladen Contextmenu",
                bookmark: "KanaalTabbladen Bladwijzer Contextmenu",
                tab: "KanaalTabs Tabblad Contextmenu",
                compact: "Compact",
                bookmarkBar: "Bladwijzerbalk",
                openAll: "Open Alles in Bladwijzers",
                openNew: "Openen op nieuw tabblad",
                close: {
                    tab: "Tabblad sluiten",
                    otherTabs: "Sluit andere tabbladen",
                    tabsToRight: "Sluit tabbladen aan de rechterkant",
                    tabsToLeft: "Sluit tabbladen aan de linkerkant",
                    reopen: "Open het gesloten tabblad opnieuw",
                    allTabs: "Sluit alle tabbladen"
                }
            },
            error: {
                noLogin: "Er is geen ingelogd account?"
            },
            modal: {
                add: {
                    title: "Voeg bladwijzer toe aan map",
                    select: "Selecteer een map",
                    create: "Maak er een"
                },
                edit: {
                    title: "Bladwijzer bewerken",
                    name: "Bookmark Name",
                    folder: "Mapkleur"
                },
                delete: {
                    title: "Weet je het zeker?",
                    description: "Als u een bladwijzermap verwijdert, worden ook alle bladwijzers daarin verwijderd."
                }
            },
            option: {
                onStartup: {
                    label: "Bij het opstarten",
                    description: "Wat te doen met tabbladen bij het opstarten",
                    nothing: "Niets doen (openen op het tabblad Vrienden)",
                    remember: "Onthoud tabbladen van de laatste sessie",
                    open: "Openen op een specifieke set tabbladen"
                },
                tabSet: {
                    label: "Tabbladset"
                },
                noPomeloNames: {
                    label: "Geen Pomelo-namen",
                    description: "Gebruik weergavenamen in plaats van gebruikersnamen voor DM's"
                },
                showStatusIndicators: {
                    label: "Statusindicatoren weergeven",
                    description: "Toon statusindicatoren voor DM's"
                },
                showBookmarkBar: {
                    label: "Bladwijzerbalk tonen"
                },
                bookmarkNotificationDot: {
                    label: "Bladwijzermeldingspunt",
                    description: "Toon meldingspunt voor bladwijzers"
                },
                widerTabsAndBookmarks: {
                    label: "Bredere tabbladen en bladwijzers",
                    description: "Verleng de lengte van tabbladen en bladwijzers voor grotere monitoren"
                },
                tabWidthScale: {
                    label: "Tabbreedteschaal",
                    description: "Schaal van tabbreedte (percentage) - instelbaar door tabranden te slepen"
                },
                renderAllTabs: {
                    label: "Geef alle tabbladen weer",
                    description: "Bewaar alle tabbladen in het cachegeheugen voor sneller schakelen (cacheert de scrollpositie en -status)"
                },
                switchToExistingTab: {
                    label: "Schakel over naar bestaand tabblad",
                    description: "Schakel over naar het tabblad als dit al bestaat voor het kanaal waarnaar u navigeert"
                },
                createNewTabIfNotExists: {
                    label: "Maak een nieuw tabblad als dit niet bestaat",
                    description: "Maak een nieuw tabblad als er nog geen bestaat voor het kanaal waar je naartoe navigeert"
                },
                enableRapidNavigation: {
                    label: "Schakel Snelle navigatie in",
                    description: "Schakel snel navigatiegedrag in - snel navigeren tussen kanalen vervangt het huidige tabblad in plaats van nieuwe aan te maken"
                },
                rapidNavigationThreshold: {
                    label: "Drempel voor snelle navigatie",
                    description: "Tijdvenster (in milliseconden) voor snelle navigatie. Binnen deze tijd vervangen nieuwe kanalen het huidige tabblad in plaats van nieuwe te maken."
                },
                tabBarPosition: {
                    label: "Positie van de tabbalk",
                    description: "Positie van de tabbladbalk",
                    top: "Bovenkant",
                    bottom: "Onderkant"
                },
                enableNumberKeySwitching: {
                    label: "Schakel nummertoetswisseling in",
                    description: "Schakel de cijfertoetsen (1-9) in om tussen tabbladen te schakelen"
                },
                numberKeySwitchCount: {
                    label: "Aantal sleutelschakelaars",
                    description: "Aantal tabbladen toegankelijk via cijfertoetsen (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Schakel de snelkoppeling Tabblad sluiten in",
                    description: "Schakel de sneltoets voor het sluiten van tabbladen in"
                },
                enableNewTabShortcut: {
                    label: "Schakel snelkoppeling voor nieuw tabblad in",
                    description: "Sneltoets voor nieuw tabblad inschakelen"
                },
                enableTabCycleShortcut: {
                    label: "Tabbladcyclussnelkoppeling inschakelen",
                    description: "Schakel de sneltoets voor het wisselen van tabbladen in"
                },
                keybindsSection: {
                    label: "Sleutelbinders",
                    description: "Klik op een knop en druk op de gewenste toetsencombinatie. Modifiers zoals CTRL, SHIFT en ALT worden ondersteund.",
                    title: "Sneltoetsen",
                    reset: "Alles terugzetten naar standaard",
                    closeTab: {
                        label: "Tabblad sluiten",
                        description: "Toetsenbord het momenteel actieve tabblad"
                    },
                    newTab: {
                        label: "Nieuw tabblad",
                        description: "Open een nieuw tabblad met het huidige kanaal"
                    },
                    cycleTabsForward: {
                        label: "Cyclustabs vooruit",
                        description: "Naar het volgende tabblad gaan (gaat door naar het eerste)"
                    },
                    cycleTabsBackward: {
                        label: "Cyclustabs achteruit",
                        description: "Naar het vorige tabblad gaan (loopt door tot het laatst)"
                    }
                },
                closeTabKeybind: {
                    label: "Tabblad-toetsbind sluiten",
                    description: "Sneltoets om het huidige tabblad te sluiten"
                },
                newTabKeybind: {
                    label: "Nieuw tabblad-toetsenbord",
                    description: "Sneltoets om een ​​nieuw tabblad te openen"
                },
                cycleTabForwardKeybind: {
                    label: "Cyclus Tab vooruit Keybind",
                    description: "Sneltoets om naar het volgende tabblad te gaan"
                },
                cycleTabBackwardKeybind: {
                    label: "Cyclus Tab Achteruit Keybind",
                    description: "Sneltoets om naar het vorige tabblad te gaan"
                },
                showTabNumbers: {
                    label: "Toon tabbladnummers",
                    description: "Toon genummerde badges op tabbladen om sneltoetsen aan te geven"
                },
                tabNumberPosition: {
                    label: "Positie tabbladnummer",
                    description: "Waar de genummerde badge op tabbladen moet worden weergegeven",
                    left: "Linkerkant (vóór pictogram)",
                    right: "Rechterzijde (na inhoud)"
                },
                animations: {
                    label: "Animaties"
                },
                animationHover: {
                    label: "Animatie op Hover",
                    description: "Schakel hoverlift- en schaaleffecten in"
                },
                animationSelection: {
                    label: "Animatie over selectie",
                    description: "Selectie-animaties inschakelen (randgloed, lift)"
                },
                animationDragDrop: {
                    label: "Animatie via slepen en neerzetten",
                    description: "Schakel spookeffecten met slepen en neerzetten in"
                },
                animationEnterExit: {
                    label: "Animatie bij in- en uitstappen",
                    description: "Schakel animaties voor het maken/sluiten van tabbladen in"
                },
                animationIconPop: {
                    label: "Animatie op Icon Pop",
                    description: "Schakel animatie voor het opschalen van pictogrammen in bij selectie"
                },
                animationCloseRotation: {
                    label: "Animatie over nauwe rotatie",
                    description: "Schakel rotatie-animatie in voor sluitknoppen"
                },
                animationPlusPulse: {
                    label: "Animatie op Plus-knoppuls",
                    description: "Schakel pulsanimatie in voor de plusknop"
                },
                animationMentionGlow: {
                    label: "Animatie op Mention Glow",
                    description: "Schakel pulserende rode gloed in voor vermeldingen"
                },
                animationCompactExpand: {
                    label: "Animatie bij compact/uitbreiden",
                    description: "Zorg voor een soepele uitbreiding voor compacte tabbladen"
                },
                animationSelectedBorder: {
                    label: "Animatie op geselecteerde rand",
                    description: "Schakel rand- en glansstijl in voor geselecteerde tabbladen"
                },
                animationSelectedBackground: {
                    label: "Animatie op geselecteerde achtergrond",
                    description: "Schakel achtergrondkleurverandering in voor geselecteerde tabbladen"
                },
                animationTabShadows: {
                    label: "Animatie op tabbladschaduwen",
                    description: "Schakel schaduweffecten op tabbladen in"
                },
                animationTabPositioning: {
                    label: "Positionering van animatietabbladen",
                    description: "Maak vloeiende overgangen mogelijk wanneer tabbladen van positie veranderen"
                },
                animationResizeHandle: {
                    label: "Animatieformaatgreep",
                    description: "Schakel vervagingsanimatie in voor de formaatgreep"
                },
                animationQuestsActive: {
                    label: "Animatiemissies actief",
                    description: "Schakel gradiëntanimaties in op het tabblad Quests wanneer missies actief zijn"
                },
                compactAutoExpandSelected: {
                    label: "Compact automatisch uitvouwen geselecteerd",
                    description: "Vouw compacte tabbladen automatisch uit wanneer deze zijn geselecteerd om de volledige kanaalnaam weer te geven"
                },
                compactAutoExpandOnHover: {
                    label: "Compact automatisch uitvouwen bij hover",
                    description: "Vouw compacte tabbladen automatisch uit bij het aanwijzen van de muis om de volledige kanaalnaam weer te geven"
                },
                openInNewTabAutoSwitch: {
                    label: "Openen in nieuw tabblad Automatisch schakelen",
                    description: "Schakel automatisch over naar nieuwe tabbladen die worden geopend vanuit het contextmenu 'Openen in nieuw tabblad'"
                },
                bookmarksIndependentFromTabs: {
                    label: "Bladwijzers onafhankelijk van tabbladen",
                    description: "Bladwijzers navigeren onafhankelijk zonder de actieve tabbladenbalk te beïnvloeden"
                },
                showResizeHandle: {
                    label: "Formaathandle tonen",
                    description: "Toon formaatgreep wanneer u over tabbladen zweeft om de tabbreedte aan te passen"
                },
                openNewTabsInCompactMode: {
                    label: "Open nieuwe tabbladen in de compacte modus",
                    description: "Open standaard alle nieuw gemaakte tabbladen in de compacte modus"
                },
                newTabButtonBehavior: {
                    label: "Gedrag van nieuwe tabbladknoppen",
                    description: "De knop Nieuw tabblad (+) volgt tabbladen in plaats van aan de rechterkant vast te blijven zitten"
                },
                oneTabPerServer: {
                    label: "Eén tabblad per server",
                    description: "Beperk tot één tabblad per server, dus als u een nieuw kanaal op die server opent, wordt het bestaande tabblad gebruikt."
                },
                maxOpenTabs: {
                    label: "Maximaal aantal geopende tabbladen",
                    description: "Maximaal aantal geopende tabbladen (0 = onbeperkt)"
                }
            },
            tabs: {
                startup: "Opstarttabbladen",
                currently: "Instellen op momenteel geopende tabbladen"
            },
            toast: {
                notRestoring: "Tabbladen worden niet hersteld omdat KeepCurrentChannel is ingeschakeld",
                failed: {
                    restore: "Kan tabbladen niet herstellen",
                    saved: "Kan opgeslagen tabbladen niet laden"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Geeft een tekenteller weer in het berichtenvenster",
            option: {
                colorEffects: {
                    label: "Kleureffecten",
                    description: "Schakel kleureffecten in of uit om dicht bij de tekenlimiet te komen"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Verbergt alle kanalen in samengevouwen categorieën, zelfs als ze ongelezen berichten hebben."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Verwijder alle emoji's en decorshit uit kanaalnamen"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Verwijdert automatisch trackingelementen uit URL's die u verzendt"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Klik op rollen in gebruikersprofielen en de ledenlijst om te zien welke leden deze hebben.",
            modal: {
                loading: "Leden laden...",
                noMembers: "Geen leden gevonden.",
                unknown: "Onbekende rol"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Hiermee kunt u bijna alle inhoud lokaal verbergen voor elke gebruiker",
            replying: "Beantwoorden van geblokkeerd bericht",
            option: {
                hideVc: {
                    label: "Spraakkanalen verbergen",
                    description: "Verberg spraakkanalen met geblokkeerde gebruikers."
                },
                usersToBlock: {
                    label: "Gebruikers om te blokkeren",
                    description: "Gebruikers-ID's gescheiden door een komma en een spatie"
                },
                hideBlockedUsers: {
                    label: "Verberg geblokkeerde gebruikers",
                    description: "Moeten geblokkeerde gebruikers ook overal verborgen worden"
                },
                hideBlockedMessages: {
                    label: "Verberg geblokkeerde berichten",
                    description: "Moeten berichten van geblokkeerde gebruikers volledig worden verborgen (hetzelfde als de oude noblockedmessages-plug-in)"
                },
                hideEmptyRoles: {
                    label: "Lege rollen verbergen",
                    description: "Moeten rolheaders worden verborgen als al hun leden zijn geblokkeerd?"
                },
                blockedReplyDisplay: {
                    label: "Geblokkeerde antwoordweergave",
                    description: "Wat moet worden weergegeven in plaats van het bericht wanneer iemand antwoordt op iemand die je hebt verborgen",
                    displayText: "Tekst weergeven waarin staat dat er op een verborgen bericht is gereageerd",
                    hideReply: "Letterlijk niets"
                },
                guildBlackList: {
                    label: "Gilde zwarte lijst",
                    description: "Gilde-ID's om functionaliteit uit te schakelen"
                },
                guildWhiteList: {
                    label: "Gilde witte lijst",
                    description: "Gilde-ID's om functionaliteit in te schakelen"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Herinrichting van het oude klantthema-experiment. Voeg een kleur toe aan uw Discord-clientthema",
            title: "Thema Kleur",
            add: "Voeg een kleur toe aan uw Discord-clientthema",
            option: {
                color: {
                    label: "Kleur"
                },
                resetColor: {
                    label: "Kleur opnieuw instellen"
                }
            },
            error: {
                modal: {
                    title: "Je thema zal er niet goed uitzien!",
                    contrast: "De geselecteerde kleur contrasteert niet goed met de tekst",
                    nitro: "Nitro-thema's worden niet ondersteund",
                    switch: "Schakel over naar de {{oppositeTheme}}-modus",
                    disable: "Schakel het Nitro-thema uit",
                    reset: "Themakleur opnieuw instellen"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Voeg meer Clip FPS- en duuropties toe, plus RPC-tagging!",
            minutes: "Notulen",
            option: {
                richPresenceTagging: {
                    label: "Rich Presence-tagging",
                    description: "Wanneer moeten clips worden getagd met de huidige Rich Presence?",
                    always: "Altijd",
                    only: "Alleen als de naam van het begin of einde van de activiteit overeenkomt",
                    never: "Nooit"
                },
                enableScreenshotKeybind: {
                    label: "Schakel Screenshot Keybind in",
                    description: "Schakel de screenshot-keybind-functie in"
                },
                enableVoiceOnlyClips: {
                    label: "Schakel alleen-spraakfragmenten in",
                    description: "Schakel alleen-spraakfragmenten in (audio zonder video)"
                },
                enableAdvancedSignals: {
                    label: "Schakel geavanceerde signalen in",
                    description: "Geavanceerde clipsignalen inschakelen (automatische cliptriggers)"
                },
                ignorePlatformRestriction: {
                    label: "Negeer platformbeperkingen",
                    description: "Platformbeperkt knippen toestaan ​​(kan opslagfouten veroorzaken)"
                },
                clipsLink: {
                    label: "Clips-link",
                    link: "Wijzig de FPS- en duuropties in de Clips-instellingen!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Verwijdert de kleurenblindvriendelijke pictogrammen uit statussen, net als Discord 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Hiermee kunt u met een toetsenbord door de gebruikersinterface navigeren.",
            action: {
                command: {
                    label: "Voer opdracht uit",
                    description: "Alias ​​een ander paletcommando op ID. Gebruik de kiezer als u niet zeker bent van de ID."
                },
                settings: {
                    label: "Open de pagina Instellingen",
                    description: "Ga direct naar een Discord-instellingenpagina. Kies een pagina uit de kiezer."
                },
                url: {
                    label: "URL openen",
                    description: "Open een link. Gebruik https:// links voor de beste compatibiliteit."
                },
                macro: {
                    label: "Macro uitvoeren",
                    description: "Voer een reeks opdrachten in volgorde uit. Voeg stappen toe via de kiezer."
                }
            },
            category: {
                auto: "Automatisch (gebruik standaardplaatsing)",
                default: {
                    label: "Snelle acties",
                    description: "Veelgebruikte Plexcord-snelkoppelingen"
                },
                plugins: {
                    label: "Plug-ins",
                    description: "Schakel Plexcord-plug-ins in, uit en configureer ze",
                    enable: {
                        label: "Schakel plug-ins in"
                    },
                    disable: {
                        label: "Schakel plug-ins uit"
                    },
                    settings: {
                        label: "Plugin-instellingen"
                    },
                    toolbox: {
                        label: "Plug-inacties"
                    },
                    chatbar: {
                        label: "Chatbalkknoppen"
                    },
                    changes: {
                        label: "Wijzigingen in plug-ins"
                    }
                },
                context: {
                    label: "Huidige context",
                    description: "Acties voor het geselecteerde kanaal en de gilde"
                },
                updates: {
                    label: "Updates",
                    description: "Blijf op de hoogte met Plexcord"
                },
                discordSettings: {
                    label: "Onenigheidsinstellingen",
                    description: "Ga naar Discord-configuratiepagina's"
                },
                custom: {
                    label: "Aangepaste opdrachten",
                    description: "Door de gebruiker gedefinieerde opdrachtpaletitems"
                },
                sessions: {
                    label: "Sessiehulpmiddelen",
                    description: "Hulpprogramma's voor het beheren van uw Discord-sessie"
                },
                guilds: {
                    label: "Gilden",
                    description: "Navigeer snel naar je gilden"
                },
                friends: {
                    label: "Vrienden",
                    description: "Navigeer snel naar je vrienden"
                },
                action: {
                    label: "Actie"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Open Plexcord-instellingen",
                        plugin: "Open Plugin-instellingen"
                    }
                },
                reload: {
                    label: "Herlaad onenigheid",
                    description: "Laadt het huidige Discord-venster opnieuw"
                }
            },
            command: {
                enable: "Schakel {{pluginName}} in",
                enabled: "Ingeschakeld {{pluginName}}",
                disable: "Schakel {{pluginName}} uit",
                disabled: "Uitgeschakeld {{pluginName}}",
                failed: "Commando mislukt:",
                toggleFailed: "Kan {{pluginName}} niet omschakelen.",
                pluginSettings: "{{pluginName}} Instellingen",
                untitled: "Naamloze opdracht",
                new: "Nieuw commando",
                error: {
                    enter: "Voer een opdracht-ID in of kies er hieronder een.",
                    noCommand: "Geen enkele opdracht komt overeen met deze ID."
                },
                discord: {
                    account: "Open Mijn account",
                    privacy: "Open gegevens en privacy",
                    notifications: "Meldingen openen",
                    voice: "Spraak en video openen",
                    text: "Open tekst en afbeeldingen",
                    appearance: "Open verschijning",
                    accessibility: "Open toegankelijkheid",
                    keybinds: "Sleutelbinders openen",
                    advanced: "Open Geavanceerd",
                },
                updates: {
                    check: {
                        label: "Controleer op updates",
                        description: "Controleer op Plexcord-updates",
                        one: "Eén update beschikbaar",
                        multiple: "{{count}}-updates beschikbaar",
                        none: "Geen updates beschikbaar",
                        failed: "Kan niet controleren op updates."
                    },
                    changelog: {
                        label: "Wijzigingslogboek bekijken",
                        description: "Opent het Plexcord-wijzigingslogboek"
                    }
                },
                read: {
                    mark: {
                        label: "Markeer {{channelLabel}} Gelezen"
                    }
                },
                pin: {
                    open: {
                        label: "Open pinnen voor {{channelLabel}}"
                    },
                    toggle: {
                        label: "Schakel Vastzetten op laatste opdracht in"
                    }
                },
                channel: {
                    mute: {
                        label: "Dempen {{channelLabel}}",
                        oneHour: "Mute {{channelLabel}} gedurende 1 uur",
                        untilTomorrow: "Demp {{channelLabel}} tot morgen",
                    },
                    unmute: {
                        label: "Dempen opheffen {{channelLabel}}",
                    },
                    reopen: {
                        label: "Heropen Laatst gesloten DM"
                    },
                    dm: {
                        open: {
                            label: "DM openen met {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Instellingen openen voor {{guildLabel}}"
                    },
                    navigate: {
                        label: "Navigeer naar {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Stel 'Niet storen' in op 30 minuten",
                    oneHourDnd: "Stel 'Niet storen' in op 1 uur",
                    cancelStatusReset: "Statustimer annuleren"
                },
                status: {
                    set: {
                        online: "Status instellen: Online",
                        idle: "Status instellen: Inactief",
                        dnd: "Status instellen: Niet storen",
                        invisible: "Status instellen: onzichtbaar"
                    }
                },
                toggle: {
                    streamer: "Schakel de Streamer-modus in",
                    mute: "Schakel Zelfdemping in",
                    deafen: "Schakel Zelfdoof in",
                },
                notification: {
                    clear: {
                        label: "Wis bureaubladmeldingen"
                    }
                },
                palette: {
                    settings: {
                        label: "Open de instellingen van het opdrachtpalet",
                        description: "Configureer de Command Palette-plug-in"
                    }
                },
                recent: {
                    label: "Toon recente opdrachten",
                    description: "Toont de laatst uitgevoerde opdrachten",
                    rerun: "Voer het laatste commando opnieuw uit"
                },
                plugin: {
                    reload: {
                        label: "Laad alle plug-ins opnieuw",
                        description: "Pogingen om elke ingeschakelde plug-in opnieuw te laden"
                    },
                    enable: {
                        label: "Schakel alle plug-ins in"
                    },
                    disable: {
                        label: "Schakel alle niet-vereiste plug-ins uit"
                    },
                    restart: {
                        label: "Start Plexcord opnieuw op",
                        description: "Laadt het Discord-clientvenster opnieuw"
                    }
                },
                quickCSS: {
                    label: "Schakel Snelle CSS in"
                },
                transparentity: {
                    label: "Schakel Venstertransparantie in"
                },
                theme: {
                    open: {
                        label: "Open Clientthema-instellingen"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Zoekopdrachten",
                noCommand: "Geen opdrachten gevonden",
                add: {
                    title: "Commando toevoegen"
                },
                choose: {
                    title: "Kies Commando"
                },
                command: {
                    palette: {
                        label: "Commandopalet",
                        placeholder: "Typ een opdracht",
                        filtering: "Filteren op {{tags}}",
                        noCommand: "Geen opdrachten gevonden",
                        pin: "Pin-opdracht",
                        unpin: "Opdracht losmaken"
                    },
                    target: {
                        label: "Doelopdracht-ID",
                        placeholder: "Voer de opdracht-ID in",
                        choose: "Kies Commando"
                    },
                    custom: {
                        label: "Aangepaste opdrachten",
                        description: "1) Geef het commando een naam · 2) Voeg optionele beschrijving/trefwoorden/tags/categorie toe · 3) Kies een actie en vul de details ervan in (ID's moeten overeenkomen met bestaande paletopdrachten voor aliassen en macro's).",
                        auto: "Automatisch (standaard)",
                        expand: "Uitbreiden",
                        collapse: "Instorten",
                        collapsed: {
                            label: "Label",
                            description: "Weergavenaam",
                            advanced: {
                                hide: "Geavanceerde opties verbergen",
                                show: "Geavanceerde opties weergeven"
                            },
                            subtitle: {
                                label: "Beschrijving",
                                placeholder: "Optionele ondertitel"
                            },
                            keywords: {
                                label: "Trefwoorden",
                                placeholder: "Door komma's gescheiden trefwoorden"
                            },
                            tags: {
                                label: "Labels",
                                placeholder: "Door komma's gescheiden tags"
                            },
                            suggestion: {
                                label: "Suggestie"
                            },
                            chooseCommand: {
                                label: "Kies waar deze opdracht in het palet verschijnt."
                            },
                            danger: {
                                label: "Toon als gevaarlijk"
                            }
                        },
                        remove: "Commando verwijderen",
                        add: "Commando toevoegen"
                    }
                },
                settings: {
                    noSelected: "Geen pagina geselecteerd",
                    current: "Huidige pagina",
                    choose: "Kies pagina..."
                },
                url: {
                    url: "URL",
                    error: "Gebruik http:// of https:// links.",
                    valid: "Voer een geldige URL in.",
                    open: {
                        external: "Extern openen",
                    }
                },
                macro: {
                    sequence: {
                        label: "Commandoreeks",
                        placeholder: "commando-a, commando-b"
                    },
                    addStep: "Stap toevoegen",
                    unknownId: "Onbekende opdracht-ID's"
                }
            },
            status: {
                online: "Online",
                idle: "Inactief",
                dnd: "Niet storen",
                invisible: "Onzichtbaar"
            },
            tag: {
                core: "Kern",
                navigation: "Navigatie",
                utility: "Nutsvoorziening",
                developer: "Ontwikkelaar",
                customization: "Maatwerk",
                plugins: "Plug-ins",
                session: "Sessie",
                context: "Context",
                custom: "Aangepast",
                guilds: "Gilden",
                friends: "Vrienden",
                other: "Ander"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Kan de chatknop '{{label}}' niet vinden.",
                        failedToTrigger: "Kan {{label}} niet activeren.",
                        activated: "{{label}} geactiveerd."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Bedieningselementen voor kanaaldemping zijn niet beschikbaar",
                        muted: "Gedempt kanaal.",
                        unmuted: "Ongedempt kanaal.",
                        failed: "Kan de mute-status van het kanaal niet updaten."
                    },
                    dm: {
                        no: "Er zijn geen DM-afsluitingen opgenomen tijdens deze sessie.",
                        reOpened: "Heropend laatste gesloten DM.",
                        noAvailable: "De DM is niet langer beschikbaar."
                    }
                },
                command: {
                    loop: "Opdrachtlus gedetecteerd tijdens macro-uitvoering.",
                    notFound: "Commando {{commandId}} niet gevonden.",
                    unsupported: "Niet-ondersteunde aangepaste opdrachtactie.",
                    failedToRun: "Kan {{label}} niet uitvoeren.",
                    notMetadata: "Metagegevens van de Command Palette-plug-in zijn niet beschikbaar."
                },
                guild: {
                    mute: {
                        unavailable: "Dempknoppen voor de gilde zijn niet beschikbaar",
                        muted: "Gedempte gilde.",
                        unmuted: "Ongedempte gilde.",
                        failed: "Kan de mute-status van de gilde niet updaten."
                    },
                    settings: {
                        unable: "Kan de gilde-instellingen niet openen.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Kan het pinnenpaneel niet openen.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Geplande statusreset geannuleerd.",
                        unableToChange: "Kan de status momenteel niet wijzigen.",
                        reverted: "Status teruggezet naar {{status}}.",
                        dnd: "Niet storen gedurende {{duration}} minuten."
                    },
                    change: {
                        unableToChange: "Kan de status momenteel niet wijzigen.",
                        changed: "Status gewijzigd in {{status}}."
                    }
                },
                read: {
                    marked: "Gemarkeerd {{channelLabel}} als gelezen.",
                    failed: "Het is niet gelukt om het kanaal als gelezen te markeren."
                },
                route: {
                    unable: "Kan {{destination}} niet openen.",
                },
                notification: {
                    cleared: "Alle meldingen gewist.",
                    failed: "Kan meldingen niet wissen.",
                    notSupported: "Het wissen van meldingen wordt niet ondersteund."
                },
                streamerMode: {
                    enabled: "Streamermodus ingeschakeld.",
                    disabled: "Streamermodus uitgeschakeld.",
                },
                voice: {
                    micToggle: {
                        muted: "Microfoon gedempt.",
                        unmuted: "Microfoon uitgeschakeld."
                    },
                    deafenToggle: {
                        deafened: "Je bent nu doof.",
                        undeafened: "Je bent niet langer doof."
                    }
                },
                quickCSS: {
                    enabled: "Snelle CSS ingeschakeld.",
                    disabled: "Snelle CSS uitgeschakeld."
                },
                transparentity: {
                    enabled: "Venstertransparantie ingeschakeld.",
                    disabled: "Venstertransparantie uitgeschakeld."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} is uitgeschakeld.",
                        disable: "{{pluginName}} is uitgeschakeld. Schakel de plug-in in om deze actie te gebruiken."
                    },
                    required: {
                        label: "{{pluginName}} vereist een herstart om te herladen."
                    },
                    stop: {
                        failed: "Kan {{pluginName}} niet stoppen."
                    },
                    restart: {
                        failed: "Herstarten van {{pluginName}} is mislukt."
                    },
                    reload: {
                        label: "{{pluginName}} opnieuw geladen.",
                        noPlugin: "Er zijn geen plug-ins opnieuw geladen.",
                        reloaded: "{{count}} plug-in{{s}} opnieuw geladen."
                    },
                    toggle: {
                        enabled: "{{changed}} plug-in{{s}} ingeschakeld.",
                        disabled: "{{changed}} plug-in{{s}} uitgeschakeld.",
                        noChanged: "Er zijn geen plug-ins gewijzigd van status."
                    },
                    run: {
                        failed: {
                            label: "Kan {{pluginName}}: {{actionLabel}} niet uitvoeren."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "Huidig ​​kanaal",
                    group: "Groeps-DM",
                    direct: "Direct bericht"
                },
                guild: {
                    current: "Huidig ​​Gilde",
                }
            },
            option: {
                hotkey: {
                    label: "Sneltoets",
                    description: "Sneltoets die wordt gebruikt om het opdrachtenpalet te openen",
                    recording: "Druk op een willekeurige toets...",
                    reset: "Opnieuw instellen"
                },
                visualStyle: {
                    label: "Visuele stijl",
                    description: "Palet uiterlijk",
                    classic: "Klassiek",
                    polished: "Gepolijst"
                },
                showTags: {
                    label: "Toon tags",
                    description: "Toon tagchips voor opdrachten"
                },
                enableTagFilter: {
                    label: "Tagfilter inschakelen",
                    description: "Toon de tagfilterbalk"
                },
                customCommands: {
                    label: "Aangepaste opdrachten",
                    description: "Beheer aangepaste opdrachtpaletitems"
                }
            },
            template: {
                alias: {
                    label: "Alias-opdracht",
                    description: "Spiegel een bestaande opdracht"
                },
                settings: {
                    label: "Instellingen",
                    description: "Open Discord-instellingen"
                },
                url: {
                    label: "Link",
                    description: "Open een externe URL"
                },
                macro: {
                    label: "Macro",
                    description: "Voer een reeks opdrachten uit"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Schakelt vervelende consoleberichten/fouten uit",
            option: {
                disableLoggers: {
                    label: "Loggers uitschakelen",
                    description: "Schakelt de loggers van Discord uit"
                },
                disableSpotifyLogger: {
                    label: "Schakel Spotify-logger uit",
                    description: "Schakel de Spotify-logger uit, die accountinformatie en toegangstoken lekt"
                },
                whitelistedLoggers: {
                    label: "Loggers op de witte lijst",
                    description: "Puntkomma's (;) gescheiden lijst met loggers die toegestaan ​​zijn, zelfs als andere verborgen zijn"
                },
                allowLevel: {
                    label: "Niveau toestaan",
                    description: "Sta dit soort loggers altijd toe",
                    filter: "Filterlijst"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Voegt kortere aliassen toe voor veel dingen in het venster. Voer `shortcutList` uit voor een lijst."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Hiermee kunt u bepaalde triggerwoorden opgeven die standaard onscherp worden gemaakt. Als u op de wazige inhoud klikt, wordt deze zichtbaar.",
            option: {
                flagged: {
                    label: "Gemarkeerd",
                    flagged: "Gemarkeerde woorden",
                    placeholder: "Woord"
                },
                onClick: {
                    label: "Op Klik",
                    description: "Toon triggerinhoud alleen bij klikken in plaats van zweven"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Hiermee kun je emoji's kopiëren als opgemaakte tekenreeks (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Kopieer Unicode",
                    description: "Kopieer het onbewerkte Unicode-teken in plaats van :name: voor standaard emoji's (👽)"
                }
            },
            context: {
                copy: "Kopieer Emoji-markering"
            },
            toast: {
                success: "Succes! Gekopieerde emoji-afwaardering."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Voegt een knop toe aan tekstbestandsbijlagen om de inhoud ervan te kopiëren",
            copied: "Gekopieerd!",
            large: "Bestand te groot om te kopiëren.",
            copyFileContents: "Kopieer de bestandsinhoud"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Een plug-in om de verloopkleuren van het profiel van mensen naar het klembord te kopiëren.",
            copy: "Kopieer profielkleuren",
            toast: {
                noColor: "Geen profielkleuren gevonden!",
                copied: "Profielkleuren gekopieerd naar klembord!",
                error: "Fout bij kopiëren van profielkleuren!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Kopieer de status-URL van de gebruiker wanneer u er met de rechtermuisknop op klikt",
            toast: {
                copied: "Gekopieerde URL",
                error: "Fout bij kopiëren van URL. Controleer de console voor meer informatie"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Voegt de mogelijkheid toe om stickerlinks te kopiëren en te openen",
            context: {
                copy: "Kopieer link",
                open: "Link openen"
            },
            toast: {
                success: "Link gekopieerd!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Voegt een knop toe om de vermelding van de gebruiker te kopiëren in het gebruikerscontextmenu, werkt het beste met ValidUser.",
            context: {
                copy: "Kopieer gebruikersvermelding"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Voegt een optie 'Gebruikers-URL kopiëren' toe aan het gebruikerscontextmenu.",
            context: {
                copy: "Kopieer gebruikers-URL"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Hulpprogramma-plug-in voor het afhandelen en mogelijk herstellen van crashes zonder opnieuw op te starten",
            option: {
                attemptToPreventCrashes: {
                    label: "Probeer crashes te voorkomen",
                    description: "Of je moet proberen Discord-crashes te voorkomen."
                },
                attemptToNavigateToHome: {
                    label: "Probeer naar Thuis te navigeren",
                    description: "Of u bij crashherstel naar het starttabblad moet proberen te navigeren."
                }
            },
            toast: {
                crashed: {
                    title: "Onenigheid is gecrasht!",
                    body: "Awn :( Discord is twee keer snel gecrasht en heeft niet geprobeerd te herstellen. Klik hier om lid te worden van onze ondersteuningsserver!",
                    update: "Oh, Discord is zojuist gecrasht... maar goed nieuws: er is een Plexcord-update beschikbaar die dit probleem mogelijk oplost! Wil je nu updaten?",
                    recover: "Proberen te herstellen... Klik hier om lid te worden van onze ondersteuningsserver!",
                    invalid: "Ongeldige of verlopen uitnodigingslink."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Gebruik Ctrl+Enter om berichten te verzenden (aanpasbaar)",
            option: {
                submitRule: {
                    label: "Regel indienen",
                    description: "De manier om een ​​bericht te verzenden",
                    ctrlEnter: "Ctrl+Enter (Enter of Shift+Enter voor nieuwe regel) (cmd+enter op macOS)",
                    shiftEnter: "Shift+Enter (Enter voor nieuwe regel)",
                    enter: "Enter (Shift+Enter voor nieuwe regel; Discord standaard)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Bericht verzenden midden in een codeblok",
                    description: "Of er midden in een codeblok een bericht moet worden verzonden"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Voegt een sprite toe die uw cursor volgt.",
            modal: {
                furColor: "Bont kleur",
                outlineColor: "Omtrekkleur"
            },
            option: {
                buddy: {
                    label: "Vriend",
                    description: "Kies een cursormaatje",
                    oneko: "Oneko",
                    fathorse: "Fatas paard"
                },
                speed: {
                    label: "Snelheid",
                    description: "Snelheid van je maatje",
                    invalid: "Snelheid moet groter zijn dan 0"
                },
                fps: {
                    label: "Framesnelheid",
                    description: "Framerate van je maatje",
                    invalid: "Framerate moet groter zijn dan 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Bont kleur",
                    description: "Bont hex kleur voor Oneko"
                },
                outlineColor: {
                    label: "Omtrekkleur",
                    description: "Hexuitdraaikleur voor Oneko"
                },
                fathorseSection: {
                    label: "Fatas paard"
                },
                size: {
                    label: "Maat",
                    description: "Grootte van het dikke paard",
                    invalid: "Grootte moet groter zijn dan 0"
                },
                fade: {
                    label: "Vervagen",
                    description: "Als het paard zou vervagen als de cursor dichtbij is"
                },
                freeroam: {
                    label: "Freeroam",
                    description: "Als het paard vrij moet rondlopen als hij stilstaat"
                },
                shake: {
                    label: "Schudden",
                    description: "Als het paard tijdens het lopen aan het raam moet schudden"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Pas mappictogrammen aan met elk PNG-bestand",
            option: {
                solidIcon: {
                    label: "Solide icoon",
                    description: "Gebruik een effen achtergrond op de achtergrond van de afbeelding"
                },
                folderIcons: {
                    label: "Mappictogrammen",
                    description: "instellingen voor mappictogram"
                }
            },
            modal: {
                change: "Wijzig de grootte van het mappictogram",
                save: "Redden",
                unset: "Uitgeschakeld",
                set: "Stel een nieuw pictogram in",
                hover: "Mogelijk moet u na het instellen met de muis over de map bewegen om deze te laten vernieuwen."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Hiermee kunt u de tijd instellen voordat Discord inactief wordt (of automatisch inactief uitschakelen)",
            backOnline: "Welkom terug! Klik op de knop om online te gaan. Klik op de X om inactief te blijven totdat u opnieuw laadt.",
            exit: "Verlaat Inactief",
            option: {
                idleTimeout: {
                    label: "Time-out bij inactiviteit",
                    description: "Minuten voordat Discord inactief wordt (0 om automatisch inactief uit te schakelen)"
                },
                remainInIdle: {
                    label: "Blijf inactief",
                    description: "Wanneer u terugkeert naar Discord, blijft u inactief totdat u bevestigt dat u online wilt gaan"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Voeg een volledig aanpasbare Rich Presence (gamestatus) toe aan je Discord-profiel",
            goTo: "Ga naar {{portal}} om een ​​applicatie te maken en de applicatie-ID op te halen.",
            upload: "Upload afbeeldingen op het tabblad Rich Presence om de afbeeldingssleutels te verkrijgen.",
            image: "Als u een afbeeldingslink wilt gebruiken, downloadt u uw afbeelding en uploadt u de afbeelding opnieuw naar {{imgur}}. U krijgt de afbeeldingslink door met de rechtermuisknop op de afbeelding te klikken en 'Afbeeldingsadres kopiëren' te selecteren.",
            button: "Je kunt je eigen knoppen op je profiel niet zien, maar alle anderen kunnen ze wel zien.",
            font: "Sommige vreemde Unicode-teksten ('fonts' 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) kunnen ervoor zorgen dat de rijke aanwezigheid niet verschijnt. Probeer in plaats daarvan normale letters te gebruiken.",
            placeholder: "Voer een waarde in",
            select: "Selecteer een optie",
            error: {
                appIdInvalid: "App-ID moet een geldig nummer zijn.",
                notice: "Kennisgeving",
                sharing: "Het delen van activiteiten is niet ingeschakeld. Mensen kunnen uw aangepaste uitgebreide aanwezigheid niet zien!",
                enable: "Inschakelen",
                validStream: "De streaminglink moet een geldige URL zijn.",
                mustBeURL: "Moet een geldige URL zijn.",
                streamCharacters: "De streaminglink mag niet langer zijn dan 512 tekens.",
                dontUse: "Gebruik geen Discord-link. Gebruik in plaats daarvan een Imgur-afbeeldingslink.",
                imgur: "De Imgur-link moet een directe link naar de afbeelding zijn (bijvoorbeeld https://i.imgur.com/...). Klik met de rechtermuisknop op de afbeelding en klik op 'Afbeeldingsadres kopiëren'",
                tenor: "Tenorlink moet een directe link naar de afbeelding zijn (bijvoorbeeld https://media.tenor.com/...). Klik met de rechtermuisknop op de GIF en klik op 'Afbeeldingsadres kopiëren'",
                required: "Dit veld is verplicht.",
                tooLong: "Mag niet langer zijn dan {{maxLength}} tekens.",
                mustBeNumber: "Moet een getal zijn.",
                mustBePositive: "Moet een positief getal zijn.",
                startTimeInvalid: "Starttijdstempel moet groter zijn dan 0.",
                endTimeInvalid: "Eindtijdstempel moet groter zijn dan 0."
            },
            option: {
                appId: {
                    label: "App-ID",
                    description: "Applicatie-ID (vereist)"
                },
                appName: {
                    label: "App-naam",
                    description: "Applicatienaam (vereist)"
                },
                details: {
                    label: "Details",
                    description: "Details (regel 1)"
                },
                detailsURL: {
                    label: "Details-URL",
                    description: "Details klikbare URL"
                },
                state: {
                    label: "Staat",
                    description: "Staat (regel 2)"
                },
                stateURL: {
                    label: "Geef URL op",
                    description: "Vermeld klikbare URL"
                },
                partySize: {
                    label: "Partijgrootte",
                    description: "Huidige groepsgrootte (moet worden gebruikt bij Max. groepsgrootte)"
                },
                partyMax: {
                    label: "Maximale groepsgrootte",
                    description: "Maximale groepsgrootte (moet worden gebruikt bij de huidige groepsgrootte)"
                },
                type: {
                    label: "Type activiteit",
                    description: "Type activiteit",
                    playing: "Spelen",
                    streaming: "Streamen",
                    listening: "Luisteren",
                    watching: "Kijken",
                    competing: "Concurreren"
                },
                streamLink: {
                    label: "Streamlink",
                    description: "Twitch.tv- of YouTube.com-link (alleen voor streaming-activiteitstype)"
                },
                timestampMode: {
                    label: "Tijdstempelmodus",
                    description: "Wat de tijdstempel moet weergeven",
                    none: "Geen",
                    sinceDiscordOpen: "Sinds Discord geopend",
                    sameAsCurrentTime: "Hetzelfde als uw huidige tijd (niet gereset na 24 uur)",
                    custom: "Aangepaste tijd"
                },
                startTime: {
                    label: "Starttijd (in milliseconden)",
                    description: "Starttijdstempel in milliseconden (alleen voor aangepaste tijdstempelmodus)"
                },
                endTime: {
                    label: "Eindtijd (in milliseconden)",
                    description: "Eindtijdstempel in milliseconden (alleen voor aangepaste tijdstempelmodus)"
                },
                imageBig: {
                    label: "Grote afbeeldingssleutel",
                    description: "Grote afbeeldingssleutel (moet worden geüpload op het tabblad Rich Presence)"
                },
                imageBigTooltip: {
                    label: "Afbeelding Grote Tooltip",
                    description: "Tooltip voor grote afbeeldingen"
                },
                imageBigURL: {
                    label: "Grote afbeeldings-URL",
                    description: "Klikbare URL voor grote afbeelding"
                },
                imageSmall: {
                    label: "Kleine afbeeldingssleutel",
                    description: "Kleine afbeeldingssleutel (moet worden geüpload op het tabblad Rich Presence)"
                },
                imageSmallTooltip: {
                    label: "Afbeelding Kleine tooltip",
                    description: "Tooltip voor kleine afbeeldingen"
                },
                imageSmallURL: {
                    label: "Kleine afbeeldings-URL",
                    description: "Klikbare URL voor kleine afbeelding"
                },
                buttonOneText: {
                    label: "Knop 1 Tekst",
                    description: "Knop 1 tekst"
                },
                buttonOneURL: {
                    label: "Knop 1-URL",
                    description: "Knop 1-URL"
                },
                buttonTwoText: {
                    label: "Knop 2 Tekst",
                    description: "Knop 2 tekst"
                },
                buttonTwoURL: {
                    label: "Knop 2-URL",
                    description: "Knop 2-URL"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Pas de geluiden van Discord aan.",
            search: "Zoek geluiden",
            placeholder: "Zoek op naam of ID",
            import: "Importeren",
            export: "Exporteren",
            reset: "Alles resetten",
            debug: "Foutopsporing",
            toast: {
                error: "Fout bij het laden van aangepast geluidsbestand",
                exported: "Geëxporteerde {{count}} instellingen (audiobestanden niet inbegrepen)",
                imported: "Instellingen geïmporteerd",
                importError: "Fout bij het importeren van instellingen. Controleer de console voor details.",
                reset: "Alle overschrijvingen zijn succesvol gereset!",
                overrideDescription: "Overschrijven voor {{soundName}}",
                previewSound: "Fout bij het afspelen van geluid.",
                playing: "Fout bij het afspelen van aangepast geluid. Het bestand is mogelijk beschadigd.",
                invalidFile: "Er is geen aangepast geluidsbestand beschikbaar voor preview",
                uploaded: "Bestand geüpload: {{fileName}}",
                uploadedError: "Fout bij uploaden van bestand: {{error}}",
                invalidExtension: "Ongeldig bestandstype. Upload een audiobestand.",
                uploading: "Bestand uploaden...",
                deleted: "Bestand succesvol verwijderd",
                deleteError: "Fout bij verwijderen van bestand.",
                loadingError: "Fout bij het laden van aangepast geluidsbestand"
            },
            button: {
                preview: "Voorbeeld",
                stop: "Stop",
                volume: "Volume",
                soundSource: "Geluidsbron",
                customFile: "Aangepast bestand",
                uploadNew: "Nieuw uploaden",
                delete: "Verwijder het geselecteerde bestand"
            },
            option: {
                default: "Standaard",
                custom: "Aangepast",
                select: "Selecteer een bestand..."
            },
            type: {
                activityEnd: "Activiteit einde",
                activityLaunch: "Activiteit starten",
                activityUserJoin: "Activiteit Gebruiker deelnemen",
                activityUserLeft: "Activiteit Gebruiker links",
                asmrMessage: "ASMR-bericht",
                bitMessage: "Beetje bericht",
                bopMessage: "Bop-bericht",
                callCalling: "Bellen Bellen",
                callRinging: "Bel beltoon",
                clipError: "Clipfout",
                clipSave: "Clip opslaan",
                ddrDown: "DDR omlaag",
                ddrLeft: "DDR links",
                ddrRight: "DDR-rechts",
                ddrUp: "DDR omhoog",
                deafen: "Doof",
                discodo: "Discotheek",
                disconnect: "Verbreek de verbinding",
                duckyMessage: "Ducky-bericht",
                hangStatusSelect: "Status ophangen Selecteer",
                highfiveClap: "Highfive klap",
                highfiveWhistle: "Highfive fluitje",
                humanMan: "Menselijke mens",
                lofiMessage: "LoFi-bericht",
                mention1: "Noem 1 (@rol)",
                mention2: "Noem 2 (@iedereen)",
                mention3: "Noem 3 (@hier)",
                message1: "Bericht 1 (algemeen)",
                message2: "Bericht 2 (antwoord in server)",
                message3: "Bericht 3 (DM's en groeps-DM's)",
                mute: "Stom",
                overlayUnlock: "Overlay-ontgrendeling",
                poggermodeAchievement: "Poggermode-prestatie",
                poggermodeApplause: "Poggermode-applaus",
                poggermodeEnabled: "Poggermodus ingeschakeld",
                poggermodeMessage: "Poggermode-bericht",
                pttStart: "PTT-start",
                pttStop: "PTT-stop",
                reconnect: "Maak opnieuw verbinding",
                robotMan: "Robotman",
                stageWaiting: "Podium wachten",
                streamEnded: "Stream beëindigd",
                streamStarted: "Stream gestart",
                streamUserJoined: "Streamgebruiker is lid geworden",
                streamUserLeft: "Streamgebruiker links",
                success: "Succes",
                undeafen: "Ondoof",
                unmute: "Dempen opheffen",
                userJoin: "Gebruiker wordt lid",
                userLeave: "Gebruiker verlof",
                userMoved: "Gebruiker verplaatst",
                vibingWumpus: "Wumpus trillen"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Aangepaste tijdstempels op berichten en tooltips",
            demo: {
                cozy: "Klik op mij om over te schakelen naar het Cosy-formaat",
                compact: "Klik op mij om over te schakelen naar het Compact-formaat",
                lastWeek: "Dit bericht is afgelopen week verzonden",
                hover: "Beweeg over tijdstempels om tooltip-indelingen te bekijken",
                edit: "Bewerk de onderstaande formaten om ze hier live te zien updaten"
            },
            modal: {
                title: "Hoe te gebruiken:",
                moment: "Moment.js-opmaakdocumentatie",
                hint: "Bovendien kunt u deze in uw invoer gebruiken:",
                calendar: "maakt dynamische datumopmaak mogelijk, zoals",
                today: "Vandaag",
                yesterday: "Gisteren",
                relative: "geeft je tijden zoals",
                relativeTime: "4 uur geleden",
                preview: "Voorbeeld",
                format: "Kalenderformaten",
                howTo: "Hoe de [kalender]-waarde kan worden opgemaakt indien gebruikt in de bovenstaande tijdstempels."
            },
            option: {
                formats: {
                    label: "Formaten",
                    description: "Pas de tijdstempelformaten aan",
                },
                cozyFormat: {
                    label: "Gezellige modus",
                    description: "Tijdformaat om te gebruiken in berichten in de gezellige modus"
                },
                compactFormat: {
                    label: "Compacte modus",
                    description: "Tijdformaat in compacte modus en zweven over berichten"
                },
                tooltipFormat: {
                    label: "Tooltip",
                    description: "Tijdnotatie voor gebruik in tooltips"
                },
                ariaLabelFormat: {
                    label: "Aria-label",
                    description: "Tijdformaat voor gebruik op aria-labels"
                },
                sameDayFormat: {
                    label: "Dezelfde dag",
                    description: "[kalender]-indeling voor vandaag",
                    default: "[Vandaag om] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Laatste dag",
                    description: "[kalender] formaat voor gisteren",
                    default: "[Gisteren om] UU:mm:ss"
                },
                lastWeekFormat: {
                    label: "Vorige week",
                    description: "[kalender]-indeling voor afgelopen week"
                },
                sameElseFormat: {
                    label: "Ouder anders",
                    description: "[kalender] formaat voor oudere data"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Hiermee kunt u voor elke gebruiker, waar dan ook, een aangepaste kleur toevoegen! Sterk aanbevolen om te gebruiken met typingTweaks en roleColorEverywhere",
            option: {
                dmList: {
                    label: "DM-lijst",
                    description: "Gebruikers met gedefinieerde aangepaste kleuren krijgen een gekleurde naam in de DM-lijst"
                },
                colorInServers: {
                    label: "Kleur in servers",
                    description: "Als de naamkleuren binnen servers moeten worden gewijzigd"
                }
            },
            context: {
                setColor: "Kleur instellen"
            },
            modal: {
                custom: "Aangepaste kleur",
                pick: "Kies een kleur",
                delete: "Invoer verwijderen",
                save: "Redden"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Zorgt ervoor dat YouTube-titels en thumbnails minder sensationeel zijn, mogelijk gemaakt door DeArrow",
            option: {
                hideButton: {
                    label: "Knop Verbergen",
                    description: "Verbergt de DeArrow-knop voor YouTube-insluitingen"
                },
                replaceElements: {
                    label: "Elementen vervangen",
                    description: "Kies welke elementen van de instortvoorziening worden vervangen",
                    everything: "Alles (titels en miniaturen)",
                    title: "Titels",
                    thumbnail: "Miniaturen"
                },
                dearrowByDefault: {
                    label: "Standaard DeArrow",
                    description: "DeArrow-video's automatisch"
                }
            },
            tooltip: {
                dearrowed: "Deze insluiting is DeArrowed; klik om te herstellen",
                dearrow: "Klik naar DeArrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Ruimt Discord op door niet-essentiële UI-elementen te verwijderen, zoals profieleffecten, winkeltabbladen, boosts en meer.",
            option: {
                userProfileHeader: {
                    label: "Gebruikersprofiel"
                },
                removeNameplate: {
                    label: "Naamplaatje verwijderen",
                    description: "Naamplaatjes verwijderen."
                },
                removeProfileEffect: {
                    label: "Profieleffect verwijderen",
                    description: "Verwijder profielanimatie-effecten bij het openen."
                },
                removeClanTag: {
                    label: "Clantag verwijderen",
                    description: "Verwijder clantags."
                },
                alwaysShowUsername: {
                    label: "Toon altijd gebruikersnaam",
                    description: "Toon altijd gebruikersnaam in plaats van status."
                },
                accessibilityNotice: {
                    label: "Toegankelijkheidsmededeling",
                    description: "Discord heeft al een ingebouwde optie voor gebruikersnaamstijl in de toegankelijkheidsinstellingen."
                },
                friendsListHeader: {
                    label: "Boven de vrienden-/DM-lijst"
                },
                removeShopAboveDM: {
                    label: "Verwijder Winkel Boven DM's",
                    description: "Verwijder winkels boven de DM-lijst."
                },
                removeQuestsAboveDM: {
                    label: "Verwijder missies boven DM's",
                    description: "Verwijder speurtochten boven de DM-lijst."
                },
                miscHeader: {
                    label: "Diversen"
                },
                removeServerBoostInfo: {
                    label: "Verwijder Server Boost-informatie",
                    description: "Verwijder serverboost-informatie boven de kanaallijst."
                },
                removeBillingSettings: {
                    label: "Factureringsinstellingen verwijderen",
                    description: "Factureringsinstellingen verwijderen."
                },
                removeGiftButton: {
                    label: "Cadeauknop verwijderen",
                    description: "Verwijder de cadeauknop."
                },
                removeUnavailableEmojiPicker: {
                    label: "Verwijder de niet-beschikbare Emoji-kiezer",
                    description: "Verwijder niet-beschikbare categorieën uit de emoji-kiezer."
                },
                removeAudioMenus: {
                    label: "Audiomenu's verwijderen",
                    description: "Verwijder menu's naast de knoppen voor dempen en doven."
                },
                removeButtonTooltips: {
                    label: "Knopinfo verwijderen",
                    description: "Knopinfo verwijderen."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Decodeer de Base64-inhoud van elk bericht en kopieer de gedecodeerde inhoud.",
            right: {
                decode: "Gedecodeerd kopiëren (klik met de linkermuisknop) / Base64 decoderen (klik met de rechtermuisknop)",
                copy: "Decodeer Base64 (klik met de linkermuisknop) / Kopieer gedecodeerd (klik met de rechtermuisknop)"
            },
            option: {
                clickMethod: {
                    label: "Klik op Methode",
                    description: "Wijzig de knop om de Base64-inhoud van elk bericht te decoderen.",
                    left: "Klik met de linkermuisknop om de Base64-inhoud te decoderen.",
                    right: "Klik met de rechtermuisknop om de Base64-inhoud te decoderen."
                }
            },
            modal: {
                title: "Gedecodeerde Base64-inhoud",
                content: "Gedecodeerde inhoud",
                copy: "Kopieer gedecodeerde inhoud {{index}}",
                copied: "Gedecodeerde inhoud gekopieerd naar klembord!"
            }
        },
        decor: {
            name: "Decor",
            description: "Creëer en gebruik je eigen aangepaste avatardecoraties, of kies je favoriet uit de presets.",
            presetPart: "Onderdeel van de {{name}} voorinstelling",
            createdBy: "Gemaakt door {{author}}",
            copy: "Kopieer voorinstellings-ID",
            file: "Bestand",
            your: {
                title: "Jouw decoraties",
                subtitle: "U kunt uw eigen decoraties verwijderen door er met de rechtermuisknop op te klikken."
            },
            option: {
                changeDecoration: {
                    label: "Decoratie wijzigen",
                    description: "Schakel Decor in en start uw client opnieuw op om uw avatardecoratie te wijzigen.",
                    also: "U kunt ook naar Decordecoraties gaan via de pagina {{profiles}}.",
                    profiles: "Profielen"
                },
                baseUrl: {
                    label: "Basis-URL",
                    description: "Decor-API-URL"
                },
                agreedToGuidelines: {
                    label: "Akkoord gegaan met richtlijnen",
                    description: "Akkoord gegaan met richtlijnen"
                }
            },
            context: {
                decorationOptions: "Decoratie opties",
                copyHash: "Kopieer Decoratiehash",
                deleteDecoration: "Decoratie verwijderen"
            },
            alert: {
                delete: {
                    title: "Decoratie verwijderen",
                    body: "Weet u zeker dat u {{decoration}} wilt verwijderen?",
                    confirm: "Verwijderen",
                    cancel: "Annuleren"
                },
                logout: {
                    title: "Uitloggen",
                    body: "Weet je zeker dat je wilt uitloggen bij Decor?",
                    confirm: "Uitloggen",
                    cancel: "Annuleren"
                }
            },
            button: {
                change: "Decoratie wijzigen",
                remove: "Decoratie verwijderen",
                apply: "Toepassen",
                cancel: "Annuleren",
                browse: "Blader",
                submit: "Ter beoordeling indienen",
                continue: "Doorgaan",
                back: "Ga terug"
            },
            tooltip: {
                pendingReview: "U heeft al een decoratie die in afwachting is van beoordeling",
                pending: "In afwachting van beoordeling"
            },
            join: {
                tooltip: "Word lid van Decor's Discord-server voor meldingen over de beoordeling van uw decoratie en wanneer er nieuwe presets worden vrijgegeven",
                button: "Discord-server"
            },
            create: {
                title: "Decoratie maken",
                notViolate: "Zorg ervoor dat uw decoratie niet in strijd is met {{guidelines}} voordat u deze verzendt.",
                guidelines: "de richtlijnen",
                file: "Het bestand moet APNG of PNG zijn.",
                fileHolder: "Kies een bestand",
                name: "This name will be used when referring to this decoration.",
                nameHolder: "Metgezel Kubus",
                nameTitle: "Naam"
            },
            help: {
                update: "Als u updates wilt ontvangen over de beoordeling van uw decoratie, wordt u lid van {{server}} en staat u directe berichten toe.",
                server: "Decor's Discord-server"
            },
            guidelines: {
                hold: "Wacht even",
                suspended: "Door een decoratie in te dienen, gaat u akkoord met {{guidelines}}. Als u deze richtlijnen niet leest, kan dit tot gevolg hebben dat uw account in de toekomst wordt opgeschort voor het maken van meer decoraties.",
                guidelines: "de richtlijnen"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plug-in voor het maken van themascreenshots - censuur die afbeeldingen en tekst identificeert.",
            toolbox: {
                toggle: "Schakel demonstratie in"
            },
            keycode: "Om uw toegangscode te wijzigen, ga naar {{keycode}}!",
            this: "dit hulpmiddel",
            okay: "Oké!",
            option: {
                keyBind: {
                    label: "Sleutel binden",
                    description: "De toets om van thema te wisselen wanneer erop wordt gedrukt"
                },
                soundVolume: {
                    label: "Geluidsvolume",
                    description: "Hoe luid het schakelgeluid is (0 om uit te schakelen)"
                },
                showConfirmationModal: {
                    label: "Bevestigingsmodaliteit tonen",
                    description: "Toon een modaal om u aan de snelkoppeling te herinneren"
                }
            },
            switch: {
                note: "U kunt deze instelling later opnieuw inschakelen",
                disable: "Modaal uitschakelen?"
            },
            shortcut: "Hierdoor wordt alle tekst gecensureerd! Om dit uit te schakelen, onthoud de snelkoppeling:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Dev Companion-plug-in. Meld alles wat niet werkt of zich vreemd gedraagt ​​(hoogstwaarschijnlijk een bug) aan MutanPlex, via ping of DM. Bedankt!",
            reconnect: "Maak opnieuw verbinding",
            option: {
                notifyOnAutoConnect: {
                    label: "Melding bij automatisch verbinden",
                    description: "Of er een melding moet worden gegeven wanneer Dev Companion automatisch verbinding heeft gemaakt."
                },
                usePatchedModule: {
                    label: "Gebruik een gepatchte module",
                    description: "Bij uittrekverzoeken antwoordt u met de huidige gepatchte module (als deze gepatcht is) in plaats van het origineel."
                },
                reloadAfterToggle: {
                    label: "Herladen na schakelen",
                    description: "Herladen nadat een 'disable/enable plugin'-opdracht is ontvangen."
                }
            },
            toast: {
                title: "Ontwikkelaar Companion verbonden",
                connected: "Verbonden met WebSocket",
                disconnected: "Dev Companion verbinding verbroken",
                error: "Dev Companion-fout",
                reload: "Herladen nodig",
                failed: "Kan afhankelijkheden niet starten: {{failures}}",
                close: "Dichtbij",
                stopping: "Fout bij het stoppen van plug-in {{plugin}}",
                starting: "Fout bij het starten van plug-in {{plugin}}",
                noMessage: "Geen foutmelding",
                noReason: "Geen reden opgegeven"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Schakelt uit dat u na 3 minuten automatisch uit een DM-spraakoproep wordt verwijderd en naar een AFK-spraakkanaal wordt verplaatst."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Schakelt standaard camera's tijdens een gesprek uit"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Schakelt de Discord-ontwikkelaarsbanner in, die de Build ID weergeeft",
            about: "Het formaat voor de Discord Dev Banner. U kunt de volgende variabelen gebruiken:",
            preview: "Voorbeeld:",
            empty: "Formaat mag niet leeg zijn.",
            variables: {
                discord: {
                    title: "Onenigheidsvariabelen",
                    icon: "Onenigheid icoon",
                    banner: "Pictogram voor ontwikkelaarbanner",
                    channel: "Discord-buildkanaal (bijv. Stabiel)",
                    build: "Discord-buildnummer (bijvoorbeeld 123456)",
                    hash: "Discord build-hash (bijvoorbeeld 123456)"
                },
                plexcord: {
                    title: "Plexcord-variabelen",
                    icon: "Plexcord-pictogram",
                    name: "Name of Plexcord",
                    version: "Versie van Plexcord (bijvoorbeeld 1.0.0)",
                    hash: "Plexcord build-hash (bijv. 123456)",
                    platform: "Platform waar Plexcord op draait (bijvoorbeeld Dev Build)"
                },
                plextron: {
                    title: "Plextron-specifieke variabelen",
                    hashShort: "Plextron build-hash (bijvoorbeeld 123456789)",
                    platformType: "Platform waar Plextron op draait (bijv. Dev Build)"
                },
                client: {
                    title: "Klantvariabelen",
                    icon: "Bureaubladpictogram",
                    name: "The name of the client (e.g. Discord Canary)",
                    version: "De versie van de client (bijvoorbeeld 1.0.0)",
                },
                electron: {
                    title: "Elektronenvariabelen",
                    icon: "Elektronen icoon",
                    version: "Electron-versie (bijv. 25.0.0)"
                },
                chromium: {
                    title: "Chroomvariabelen",
                    icon: "Chroom icoon",
                    version: "Chroommotorversie (bijv. 125.0.0.0)"
                },
                misc: {
                    title: "Diverse variabelen",
                    newline: "Newline-karakter"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Waarschuwt u als uw bericht een term bevat in de vooraf ingestelde AutoMod-lijst",
            alert: {
                title: "Wacht even!",
                content: "Uw bericht bevat een term uit de vooraf ingestelde AutoMod-lijst (Term: '{{trigger}}').",
                content2: "Er is een grote kans dat uw bericht wordt geblokkeerd en mogelijk wordt gemodereerd door een servermoderator.",
                confirm: "Hoe dan ook verzenden",
                cancel: "Annuleren"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Rondt relatieve tijdstempels altijd naar beneden af, zodat 7,6 jaar 7 jaar wordt in plaats van 8 jaar"
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Voegt functionaliteit voor slepen en neerzetten toe aan favoriete emotes"
        },
        dragify: {
            name: "Dragify",
            description: "Zet gebruikers, kanalen of servers neer in de chat om vermeldingen of uitnodigingen in te voegen.",
            option: {
                userOutput: {
                    label: "Gebruikersuitvoer",
                    description: "Uitvoer door gebruiker verwijderd.",
                    mention: "Noemen",
                    id: "Gebruikers-ID"
                },
                channelOutput: {
                    label: "Kanaaluitgang",
                    description: "Kanaaldaling-uitvoer.",
                    mention: "#kanaal vermelding",
                    link: "Kanaallink",
                },
                inviteExpireAfter: {
                    label: "Uitnodiging verloopt daarna",
                    description: "Vervaldatum uitnodiging",
                    never: "Nooit",
                    thirtyMinutes: "30 minuten",
                    oneHour: "1 uur",
                    sixHours: "6 uur",
                    twelveHours: "12 uur",
                    oneDay: "1 dag",
                    sevenDays: "7 dagen"
                },
                inviteMaxUses: {
                    label: "Nodig maximaal gebruik uit",
                    description: "Maximaal gebruik voor uitnodiging",
                    noLimit: "Geen limiet",
                    one: "1 Gebruik",
                    five: "5 toepassingen",
                    ten: "10 toepassingen",
                    twentyFive: "25 toepassingen",
                    fifty: "50 toepassingen",
                    hundred: "100 toepassingen"
                },
                inviteTemporaryMembership: {
                    label: "Nodig tijdelijk lidmaatschap uit",
                    description: "Tijdelijk lidmaatschap toekennen.",
                },
                reuseExistingInvites: {
                    label: "Hergebruik bestaande uitnodiging",
                    description: "Hergebruik een bestaande uitnodiging in plaats van een nieuwe te maken."
                },
                allowChatBodyDrop: {
                    label: "Sta het verwijderen van de chattekst toe",
                    description: "Sta toe dat u naar de hoofdtekst van de chat gaat om tekst in te voegen."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify kon de drop niet verwerken.",
                },
                invite: {
                    created: "Uitnodiging gemaakt.",
                    unable: "Kan uitnodiging niet maken.",
                    noChannel: "Geen kanaal beschikbaar voor uitnodigingen.",
                }
            },
            ghost: {
                user: "Gebruiker",
                server: "Server",
                dm: "Directe berichten",
                badge: {
                    channel: "kanaal",
                    thread: "draad",
                    voice: "stem",
                    forum: "forum",
                    media: "media",
                    announcement: "aankondiging",
                    dm: "dm",
                    user: "gebruiker",
                    server: "server"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Markeer en inspecteer elementen eenvoudig.",
            modal: {
                recording: "Opnemen...",
                reset: "Opnieuw instellen"
            },
            option: {
                keybind: {
                    label: "Sleutel binden",
                    description: "Schakel Markeerstift in"
                },
                showClasses: {
                    label: "Klassen weergeven",
                    description: "Geef de CSS-klassenamen van het element weer in de tooltip"
                },
                showId: {
                    label: "Toon identiteitsbewijs",
                    description: "Geef het ID-attribuut van het element weer in de tooltip"
                },
                showFont: {
                    label: "Lettertype weergeven",
                    description: "Geef de berekende lettertypefamilie en lettergrootte weer"
                },
                showPadding: {
                    label: "Opvulling tonen",
                    description: "Geef de opvulwaarden van het element weer"
                },
                showMargin: {
                    label: "Marge tonen",
                    description: "Geef de margewaarden van het element weer"
                },
                showBorderRadius: {
                    label: "Randradius tonen",
                    description: "Geef de randradiuswaarden van het element weer"
                },
                showPosition: {
                    label: "Toon positie",
                    description: "Geef het CSS-positietype en de z-index van het element weer"
                },
                showDisplay: {
                    label: "Toon weergave",
                    description: "Geef het weergavetype van het element weer, samen met de flex- of grid-eigenschappen"
                }
            },
            toast: {
                copied: {
                    color: "Kleur naar klembord gekopieerd!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Speel klankbordgeluiden af ​​wanneer u de verbinding met uw stem verbreekt.",
            button: "Instellen als globaal uitgangsgeluid",
            toast: {
                failedToPlay: "Oeps! Er is iets misgegaan."
            },
            option: {
                soundGuildId: {
                    label: "Geluidsgilde ID",
                    description: "Selecteer de server die het geluid bevat.",
                    placeholder: "Selecteer een server..."
                },
                soundId: {
                    label: "Geluid-ID",
                    description: "Voer de ID in van het geluid dat u wilt afspelen.",
                    placeholder: "Geluids-ID invoeren..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Schakel toegang tot experimenten en andere alleen-ontwikkelaarsfuncties in Discord in!",
            modal: {
                about: {
                    title: "Meer informatie",
                    body: "Je kunt de DevTools van Discord openen via {{key}}"
                },
                warning: {
                    title: "Wacht even!!",
                    body: "Experimenten zijn niet-uitgebrachte Discord-functies. Het kan zijn dat ze niet werken, of zelfs uw klant kapot maken of uw account uitschakelen.",
                    notReponsible: "Gebruik experimenten alleen als je weet wat je doet. Plexcord is niet verantwoordelijk voor eventuele schade veroorzaakt door het mogelijk maken van experimenten.",
                    useAtOwnRisk: "Als je niet weet wat een experiment doet, negeer het dan. Vraag ons ook niet wat experimenten doen; dat weten we waarschijnlijk niet.",
                    serverSideFeatures: "Nee, u kunt geen functies op de server gebruiken, zoals het aanvinken van het vakje 'Verzenden naar client'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Werkbalkontwikkelaarsmenu",
                    description: "Wijzig de Help (?)-werkbalkknop (rechtsboven in de chat) naar het ontwikkelaarsmenu van Discord"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Hiermee kunt u berichten naar bestanden exporteren: één bericht, alle berichten van een gebruiker of alle kanaalberichten",
            option: {
                maxMessages: {
                    label: "Maximaal aantal berichten",
                    description: "Maximaal aantal berichten om te exporteren (0 = onbeperkt)"
                },
                includeAttachments: {
                    label: "Voeg bijlagen toe",
                    description: "Voeg bijlagegegevens toe aan exports"
                },
                includeEmbeds: {
                    label: "Inclusief insluitingen",
                    description: "Neem insluitingsinformatie op in de export"
                },
                includeReactions: {
                    label: "Inclusief reacties",
                    description: "Neem reactie-informatie op in de export"
                },
                includeComponents: {
                    label: "Componenten opnemen",
                    description: "Neem componentinformatie op in de export"
                }
            },
            message: {
                invalid: "Ongeldig bericht — geen auteur",
                unknownUser: "Onbekende gebruiker",
                botEmbed: "Bot-insluitingsbericht",
                attachments: "Bijlagen",
                unknown: "Onbekend",
                noUrl: "Geen URL",
                embeds: "Insluitingen",
                title: "Titel",
                description: "Beschrijving",
                url: "URL",
                footer: "Voettekst",
                author: "Auteur",
                fields: "Velden",
                components: "Componenten",
                component: "Onderdeel",
                interactiveElement: "Interactief element",
                reactions: "Reacties",
                errorFormatting: "Fout bij het formatteren van bericht",
                unknownError: "Onbekende fout",
                header: "{{titlePrefix}} {{displayName}} in {{channelName}}",
                from: "Berichten van",
                direct: "Directe berichten",
                exported: "Geëxporteerd op",
                total: "Totaal aantal berichten"
            },
            toast: {
                export: {
                    title: "Berichten exporteren",
                    body: "Kan bericht niet exporteren"
                },
                noMessages: {
                    title: "Berichten exporteren",
                    notFoundUser: "Er zijn geen berichten gevonden van deze gebruiker in dit kanaal",
                    notFoundChannel: "Geen berichten gevonden in dit kanaal"
                },
                failed: {
                    title: "Berichten exporteren",
                    body: "Kan berichten niet exporteren"
                },
                userNotFound: {
                    title: "Berichten exporteren",
                    body: "Gebruiker niet gevonden"
                },
                complete: {
                    title: "Exporteren voltooid",
                    saved: "Bestand opgeslagen",
                    downloaded: "Bestand gedownload",
                    messages: "berichten"
                }
            },
            context: {
                exportMessage: "Exporteer dit bericht",
                exportAll: "Exporteer alle berichten van {{user}}",
                user: "Gebruiker",
                exportAllChannel: "Exporteer alle kanaalberichten"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Hiermee kunt u emotes en stickers naar uw eigen server klonen (klik er met de rechtermuisknop op)",
            modal: {
                title: "Aangepaste naam",
                invalidName: "De naam moet tussen 2 en 32 tekens lang zijn en mag alleen alfanumerieke tekens bevatten"
            },
            toast: {
                success: "Met succes {{name}} naar {{guild}} gekloond!",
                yourServer: "jouw server",
                failed: "Kan niet klonen:",
                console: "Er is iets misgegaan (controleer de console!)"
            },
            context: {
                clone: "Kloon {{type}}",
                cloneName: "Kloon {{data}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Pauzeer de client wanneer u op F8 drukt terwijl DevTools (+ breekpunten) open zijn."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Hiermee kun je nep-emoji's/stickers verzenden, Nitro-thema's gebruiken en streamen in Nitro-kwaliteit",
            option: {
                enableEmojiBypass: {
                    label: "Schakel Emoji-bypass in",
                    description: "Maakt het verzenden van nep-emoji's mogelijk (omzeilt ook de ontbrekende toestemming om aangepaste emoji's te gebruiken)"
                },
                emojiSize: {
                    label: "Emoji-grootte",
                    description: "Grootte van de emoji's bij het verzenden"
                },
                transformEmojis: {
                    label: "Transformeer emoji's",
                    description: "Of nep-emoji's in echte moeten worden omgezet"
                },
                enableStickerBypass: {
                    label: "Schakel Sticker-bypass in",
                    description: "Maakt het verzenden van valse stickers mogelijk (omzeilt ook de ontbrekende toestemming om stickers te gebruiken)"
                },
                stickerSize: {
                    label: "Stickergrootte",
                    description: "Grootte van de stickers bij verzending"
                },
                transformStickers: {
                    label: "Transformeer stickers",
                    description: "Of je nepstickers in echte wilt veranderen"
                },
                transformCompoundSentence: {
                    label: "Transformeer samengestelde zinnen",
                    description: "Of nep-stickers en emoji's moeten worden omgezet in samengestelde zinnen (zinnen met meer inhoud dan alleen de nep-emoji of stickerlink)"
                },
                enableStreamQualityBypass: {
                    label: "Schakel Streamkwaliteit-bypass in",
                    description: "Sta streaming in Nitro-kwaliteit toe"
                },
                useStickerHyperLinks: {
                    label: "Gebruik sticker-hyperlinks",
                    description: "Of hyperlinks moeten worden gebruikt bij het verzenden van nepstickers"
                },
                useEmojiHyperLinks: {
                    label: "Gebruik Emoji-hyperlinks",
                    description: "Of hyperlinks moeten worden gebruikt bij het verzenden van nep-emoji's"
                },
                hyperLinkText: {
                    label: "Hyperlinktekst",
                    description: "Welke tekst de hyperlink moet gebruiken. {{NAME}} wordt vervangen door de emoji/stickernaam."
                },
                disableEmbedPermissionCheck: {
                    label: "Schakel de controle van machtigingen voor insluiten uit",
                    description: "Of de controle op het insluiten van toestemming moet worden uitgeschakeld bij het verzenden van nep-emoji's en stickers"
                }
            },
            modal: {
                sticker: "Dit is een FakeNitro-sticker en wordt alleen voor jou weergegeven als een echte sticker. Verschijnt als een link voor niet-plug-ingebruikers.",
                emoji: "Dit is een FakeNitro-emoji en wordt alleen voor jou weergegeven als een echte emoji. Verschijnt als een link voor niet-plug-ingebruikers."
            },
            alert: {
                notice: {
                    title: "Wacht even!",
                    body: "U probeert een bericht te verzenden/bewerken dat een FakeNitro-emoji of sticker bevat; U heeft echter geen toestemming om links in het huidige kanaal in te sluiten. Weet u zeker dat u dit bericht wilt verzenden? Uw FakeNitro-items verschijnen alleen als link.",
                    footer: "U kunt deze waarschuwing uitschakelen in de FakeNitro-instellingen",
                    confirm: "Hoe dan ook verzenden",
                    cancel: "Annuleren",
                    secondaryConfirm: "Niet meer tonen"
                },
                apngSticker: {
                    title: "Wacht even!",
                    body: "Je kunt dit bericht niet verzenden omdat het een geanimeerde FakeNitro-sticker bevat en je geen toestemming hebt om bestanden in het huidige kanaal toe te voegen. Verwijder de sticker om door te gaan."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Maakt profielthema's mogelijk door de kleuren in uw biografie te verbergen dankzij onzichtbare 3y3-codering",
            button: {
                copy: "Kopieer 3y3"
            },
            modal: {
                usage: "Gebruik",
                preview: "Voorbeeld",
                intro: "Nadat u deze plug-in hebt ingeschakeld, ziet u aangepaste kleuren in de profielen van andere mensen die compatibele plug-ins gebruiken.",
                setColor: "Om uw eigen kleuren in te stellen:",
                step1: "• Gebruik de onderstaande kleurkiezers om uw kleuren te kiezen",
                step2: "• Klik op de knop {{copy}}",
                step3: "• Plak de onzichtbare tekst ergens in je biografie",
                pickers: "Kleurkiezers",
                primary: "Primair",
                accent: "Accent"
            },
            option: {
                nitroFirst: {
                    label: "Nitro eerst",
                    description: "Standaardkleurbron als beide aanwezig zijn",
                    nitro: "Nitro-kleuren",
                    fake: "Valse kleuren"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Maakt profielthema's en profieleffecten mogelijk door de kleuren en effecten in uw biografie te verbergen dankzij onzichtbare 3y3-codering",
            option: {
                prioritizeNitro: {
                    label: "Geef prioriteit aan Nitro",
                    description: "Bron om prioriteit te geven",
                    nitro: "Nitro",
                    aboutMe: "Over mij"
                },
                hideBuilder: {
                    label: "Bouwer verbergen",
                    description: "Verberg de FPTE Builder op de instellingenpagina's Gebruikersprofiel en Serverprofielen"
                }
            },
            modal: {
                primary: "Primair",
                accent: "Accent",
                effect: "Effect",
                usage: {
                    title: "Gebruik",
                    intro: "Nadat u deze plug-in hebt ingeschakeld, ziet u aangepaste themakleuren en effecten in de profielen van anderen die deze plug-in gebruiken.",
                    setColor: "Om uw eigen kleuren en effect in te stellen:",
                    step1: "Ga naar je profielinstellingen",
                    step2: "Gebruik de FPTE Builder om de kleuren en het effect van uw profielthema te kiezen",
                    step3: "Klik op de knop {{copy}}",
                    step4: "Plak de onzichtbare tekst ergens in je biografie"
                }
            },
            toast: {
                copied: "FPTE gekopieerd naar klembord!",
                empty: "FPTE Builder is leeg; niets om te kopiëren!"
            },
            button: {
                copyFPTE: "Kopieer FPTE",
                reset: "Opnieuw instellen",
                preview: "FPTE Builder-voorbeeld",
                buildBackwards: "Bouw achterwaarts compatibele FPTE",
                moreCharacters: "Zal meer tekens gebruiken"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Voegt een prullenbakpictogram toe om kanalen te verwijderen",
            option: {
                keyBind: {
                    label: "Sleutel binden",
                    description: "De toets om de prullenbak in of uit te schakelen wanneer erop wordt gedrukt."
                },
                reqCtrl: {
                    label: "Controle vereisen",
                    description: "Vereisen dat de Control-toets ingedrukt wordt gehouden."
                },
                reqShift: {
                    label: "Vereist verschuiving",
                    description: "Vereisen dat de Shift-toets ingedrukt wordt gehouden."
                },
                reqAlt: {
                    label: "Alt vereisen",
                    description: "Vereisen dat de Alt-toets ingedrukt wordt gehouden."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Zet je favoriete emoji op de eerste plaats in de automatisch aanvullen van emoji's en biedt ook emoji-aliassen.",
            option: {
                aliases: {
                    label: "Aliassen",
                    description: "Beheer uw emoji-aliassen."
                },
                clearAll: {
                    label: "Alles wissen",
                    description: "Verwijder alle aliassen."
                }
            },
            modal: {
                clear: {
                    title: "Verwijder alle aliassen",
                    description: "Hiermee wordt elke emoji-alias verwijderd die je hebt opgeslagen.",
                    confirm: "Verwijder alle aliassen"
                },
                set: {
                    title: "Alias ​​instellen",
                    description: "Stel een alias in voor {{emoji}}",
                    placeholder: "Alias, bijv. 'Vrolijk'",
                    save: "Redden",
                    error: "Dubbele alias"
                }
            },
            toast: {
                set: "Alias ​​ingesteld voor {{emoji}}",
                clearAll: "Alle emoji-aliassen verwijderd",
                failedDeleted: "Kan aliassen niet verwijderen",
                removed: "Alias ​​verwijderd: {{alias}}",
                failedRemove: "Kan alias niet verwijderen",
                duplicate: "Dubbele alias",
                failedSave: "Kan alias niet opslaan."
            },
            button: {
                edit: "Alias ​​bewerken",
                set: "Alias ​​instellen"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "Voegt een zoekbalk toe aan favoriete GIF's.",
            placeholder: "Zoek naar favoriete GIF's",
            option: {
                searchOption: {
                    label: "Zoekoptie",
                    description: "Het deel van de URL dat u wilt doorzoeken",
                    url: "Volledige URL",
                    path: "Alleen pad (/somegif.gif)",
                    hostandpath: "Host en pad (tenor.com somgif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "Favoriet elke afbeelding"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Voegt een downloadknop toe aan de rechterbovenhoek van bestanden"
        },
        findReply: {
            name: "FindReply",
            description: "Springt naar het eerste antwoord op een bericht in een kanaal (hiermee kunt u eerdere gesprekken gemakkelijker volgen).",
            context: {
                jump: "Ga naar Beantwoorden"
            },
            toast: {
                navigate: "Gebruik het onderste paneel om tussen antwoorden te navigeren.",
                container: "Kan het containerelement niet vinden.",
                couldntFind: "Kan het antwoordbericht niet vinden."
            },
            option: {
                includePings: {
                    label: "Inclusief pings",
                    description: "Zal ook zoeken naar berichten die rechtstreeks @ de auteur zijn"
                },
                includeAuthor: {
                    label: "Inclusief auteur",
                    description: "Zal ook zoeken naar berichten die in het algemeen op de auteur reageren, en niet alleen op dat exacte bericht"
                },
                hideButtonIfNoReply: {
                    label: "Knop verbergen als er geen antwoord is",
                    description: "Verbergt de knop als er geen antwoorden op het bericht zijn"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Verwijdert de opening tussen codeblokken en de tekst eronder"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Corrigeert bestandsextensies door ze, indien mogelijk, te hernoemen naar een compatibel ondersteund formaat"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Verbetert de kwaliteit van afbeeldingen door het gebruik van de originele bron te forceren",
            option: {
                originalImagesInChat: {
                    label: "Originele afbeeldingen in chat",
                    description: "Laad ook de originele afbeelding in de chat. WAARSCHUWING: Lees de bovenstaande waarschuwingen"
                }
            },
            modal: {
                about: {
                    title: "Het standaardgedrag is als volgt:",
                    body: "— In de chat worden geoptimaliseerde afbeeldingen met volledige resolutie geladen.",
                    body2: "— In het afbeeldingsmodal wordt de originele afbeelding geladen.",
                    body3: "Je kunt ook originele afbeeldingen inschakelen in de chat, maar let op de volgende kanttekeningen:",
                    warning: "— Geanimeerde afbeeldingen (GIF, WebP, enz.) in de chat zullen altijd bewegen, ongeacht of de app gefocust is.",
                    warning2: "— Kan vertraging veroorzaken.",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Er is een probleem opgelost dat Spotify-embedden ongelooflijk luid waren door je het volume te laten aanpassen",
            option: {
                volume: {
                    label: "Volume",
                    description: "Het volumepercentage dat moet worden ingesteld voor Spotify-insluitingen. Alles boven de 10% is heeel luid"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Omzeilt dat YouTube-video's worden geblokkeerd voor weergave op Discord (bijvoorbeeld door UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Voegt een volgoptie toe in het gebruikerscontextmenu om altijd in dezelfde VC te zijn als zij",
            indicatorTooltip: "{{user}} volgen (klik om handmatig te activeren, klik met de rechtermuisknop om niet meer te volgen)",
            unknownUser: "Onbekende gebruiker",
            option: {
                executeOnFollow: {
                    label: "Uitvoeren bij volgen",
                    description: "Zorg ervoor dat u zich in dezelfde VC bevindt als u een gebruiker volgt"
                },
                onlyManualTrigger: {
                    label: "Alleen handmatige trigger",
                    description: "Alleen activeren bij klik op de indicator"
                },
                followLeave: {
                    label: "Volg Verlaten",
                    description: "Verlaat ook wanneer de gevolgde gebruiker vertrekt"
                },
                autoMoveBack: {
                    label: "Automatisch teruggaan",
                    description: "Ga automatisch terug naar de VC van de gevolgde gebruiker wanneer u wordt verplaatst"
                },
                followUserId: {
                    label: "Volg gebruikers-ID",
                    description: "Gevolgde gebruikers-ID"
                },
                channelFull: {
                    label: "Kanaal vol",
                    description: "Probeer je naar het kanaal te verplaatsen als het niet meer vol is"
                }
            },
            toast: {
                channelFull: "Kanaal is vol",
                newVc: "Gebruiker gevolgd naar een nieuw spraakkanaal",
                insufficientPermissions: "Onvoldoende rechten om het spraakkanaal te betreden",
                sameVc: "Je bevindt je al in hetzelfde kanaal",
                disconnect: "Gevolgde gebruiker links; losgekoppeld",
                notFollowing: "Gevolgde gebruiker ging naar links, maar niet na het verbreken van de verbinding",
                notVc: "De gevolgde gebruiker bevindt zich niet in een spraakkanaal"
            },
            context: {
                follow: "Volg gebruiker",
                unfollow: "Gebruiker niet meer volgen"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Laadt elk lettertype van Google Fonts",
            option: {
                selectedFont: {
                    label: "Geselecteerd lettertype",
                    description: "Momenteel geselecteerd lettertype"
                },
                fontSearch: {
                    label: "Lettertype zoeken",
                    description: "Zoek en selecteer Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Toepassen op codeblokken",
                    description: "Pas het lettertype toe op codeblokken"
                }
            },
            toast: {
                failedLoad: "Kan lettertype niet laden"
            },
            modal: {
                settings: {
                    title: "Zoek op Google Lettertypen",
                    description: "Selecteer een lettertype om het toe te passen",
                    placeholder: "Lettertypen zoeken...",
                    previewText: "De snelle bruine vos springt over de luie hond heen",
                    authors: "Door {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Forceer de eigenaarskroon naast gebruikersnamen, zelfs als de server groot is."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Als het doorsturen mislukt, verzendt u het als een normaal bericht; staat ook NSFW-voorwaarts toe",
            option: {
                forwardPreface: {
                    label: "Voorwoord",
                    description: "Waarmee de doorgestuurde inhoud moet worden voorafgegaan"
                }
            },
            context: {
                attachments: "Bijlagen",
                forwarded: "Doorgestuurd van"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Hiermee kunt u uw bericht in een vreemd lettertype verzenden met behulp van de opdracht /freaky.",
            command: {
                freaky: "Het is eng.",
                message: "Maak je bericht gek"
            },
            option: {
                addFreakyEnding: {
                    label: "Voeg een Freaky-einde toe",
                    description: "Voeg aan het einde 👅 of ❤️ toe"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Herschrijft en filtert de Quick Switcher-resultaten zodat deze uw meest frequente kanalen zijn."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Voegt een /friendcloud-opdracht toe om de gebruikers te visualiseren waarmee u het meest communiceert",
            command: {
                friendcloud: {
                    description: "Visualiseer uw vriendenwolk",
                    count: "Aantal weer te geven gebruikers",
                    mustHigher: "Het aantal moet 1 of hoger zijn!",
                    noAffinities: "Geen affiniteiten gevonden. Controleer uw [privacy-instellingen](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Geen geldige gebruikers gevonden in affiniteiten. Controleer uw [privacy-instellingen](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Kon de afbeelding niet genereren :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Genereer vriendcodes om eenvoudig vrienden toe te voegen",
            card: {
                expires: "Verloopt <t:{{expiration}}:R> • {{uses}}/{{maxUses}} gebruikt",
                copy: "Kopiëren",
                copied: "Gekopieerd!",
                codes: "Uw vriendcodes",
                count: "Vriendcodes - {{invites}}",
                create: "Vriendcode aanmaken",
                revoke: "Trek alle vriendcodes in",
                loading: "Laden...",
                dontHave: "Je hebt geen vriendcodes."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Maak en beheer koppelingen voor vrienduitnodigingen via slash-opdrachten (/vriendsuitnodiging maken, /vriendenuitnodigingen bekijken, /vriendenuitnodigingen intrekken).",
            command: {
                create: {
                    description: "Genereert een vrienduitnodigingslink.",
                    message: "discord.gg/{{code}}`\n· Verloopt <t:{{expiration}}:R>\n· Maximaal gebruik: {{uses}}"
                },
                view: {
                    description: "Bekijk een lijst met alle gegenereerde vrienduitnodigingen.",
                    message: "_discord.gg/{{code}}_ \n· Verloopt: <t:{{expiration}}:R> \n· Gebruikte tijden: {{uses}}/{{maxUses}}",
                    noInvites: "Je hebt geen actieve vriendsuitnodigingen."
                },
                revoke: {
                    description: "Trekt alle gegenereerde vriendschapsuitnodigingen in.",
                    message: "Alle uitnodigingen voor vrienden zijn ingetrokken."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Voegt badges toe die laten zien hoe lang je al bevriend bent met een gebruiker",
            badge: {
                sprout: {
                    name: "Sprout",
                    description: "Je vriendschap begint nog maar net"
                },
                blooming: {
                    name: "Blooming",
                    description: "Je vriendschap komt er! (1 maand)"
                },
                burning: {
                    name: "Burning",
                    description: "Je vriendschap heeft de eindsnelheid bereikt (3 maanden)"
                },
                fighter: {
                    name: "Fighter",
                    description: "Je vriendschap is sterk (6 maanden)"
                },
                star: {
                    name: "Star",
                    description: "Je vriendschap bestaat al een tijdje (1 jaar)"
                },
                royal: {
                    name: "Royal",
                    description: "Je vriendschap is door dik en dun gegaan – een hele 2 jaar!"
                },
                besties: {
                    name: "Besties",
                    description: "Hoe krijg je dit überhaupt voor elkaar??? (5 jaar)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Laat zien wanneer je vrienden bent geworden met iemand in de gebruikerspop-out",
            section: "Vrienden sinds"
        },
        friendTags: {
            name: "FriendTags",
            description: "Hiermee kunt u filteren op aangepaste tags in de Quick Switcher door een zoekopdracht te starten met &",
            modal: {
                name: "Name",
                users: "Gebruikers (gescheiden door komma)",
                userlist: "Gebruikerslijst (klik op een gebruiker om te verwijderen)",
                remove: "Verwijderen",
                add: "Toevoegen",
                tag: "Label",
                removeFrom: "Verwijderen van",
                addTo: "Toevoegen aan"
            },
            option: {
                tagConfiguration: {
                    label: "Tagconfiguratie",
                    description: "De tagconfiguratiecomponent"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Zorgt ervoor dat het berichtcontextmenu in de berichtzoekresultaten alle opties bevat die u zou verwachten"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Zorgt ervoor dat gebruikersvermeldingen in de chatbox meer functionaliteiten hebben, zoals links/rechts klikken"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Zorgt ervoor dat avatars de volledige VC-tegel in beslag nemen",
            option: {
                useServerProfileAvatars: {
                    label: "Gebruik serverprofielavatars",
                    description: "Gebruik serverprofielavatars in gildestemkanalen indien beschikbaar."
                }
            }
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Voegt een schakelaar toe aan de gebruikerspop-out om uw gameactiviteit te tonen/verbergen",
            tooltip: "Schakel spelactiviteit in",
            gameActivity: {
                enabled: "Spelactiviteit ingeschakeld",
                disabled: "Spelactiviteit uitgeschakeld"
            },
            option: {
                oldIcon: {
                    label: "Oud icoon",
                    description: "Gebruik de oude pictogramstijl van vóór het herontwerp van het Discord-pictogram"
                },
                location: {
                    label: "Locatie",
                    description: "Waar de schakelknop voor spelactiviteiten wordt weergegeven",
                    panel: "Naast Mute/Doof",
                    toolbox: "Plexcord-gereedschapskist"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Er verschijnt een schattig spookje als je hun DM's niet beantwoordt",
            modal: {
                title: "Ghosted-gebruikers",
                no: "Geen Ghosted-gebruikers",
                unghost: "ongastheer",
                unknown: "Onbekend",
                unnamedGroup: "Naamloze groep",
                unknownUser: "Onbekende gebruiker",
                clearAll: "Alles wissen",
                noGhost: "Geen geesten hier!",
                clear: "Duidelijk"
            },
            option: {
                showIndicator: {
                    label: "Toon indicator",
                    description: "Toon de spookteller bovenaan de serverlijst"
                },
                showDmIcons: {
                    label: "DM-pictogrammen weergeven",
                    description: "Toon spookpictogrammen naast individuele DM's"
                },
                ignoreGroupDms: {
                    label: "Negeer groeps-DM's",
                    description: "Sluit alle groeps-DM's uit van ghosting"
                },
                exemptedChannels: {
                    label: "Vrijgestelde kanalen",
                    description: "Door komma's gescheiden lijst met kanaal-ID's die moeten worden uitgesloten van ghosting (klik met de rechtermuisknop op een DM-kanaal om de ID ervan te kopiëren)"
                },
                ignoreBots: {
                    label: "Negeer bots",
                    description: "Negeer DM's van bots"
                },
                maxInactiveTimeMs: {
                    label: "Maximale inactieve tijd",
                    description: "Toon alleen ghost DMs die binnen dit tijdsbestek actief waren",
                    no: "Geen limiet",
                    oneHour: "1 uur",
                    oneDay: "1 dag",
                    oneWeek: "1 week",
                    oneMonth: "1 maand"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Hiermee kunt u verzamelingen GIF's maken",
            context: {
                copyImageLink: "Kopieer afbeeldingslink",
                copyUrl: "Kopieer URL",
                collection: {
                    add: "Toevoegen aan collectie",
                    gif: "GIF-collecties",
                    delete: "Verzameling verwijderen",
                    create: "Verzameling maken",
                    remove: "Verwijderen",
                    information: "Verzamelinformatie",
                    name: "Naam",
                    gifs: "GIF's",
                    created: "Gemaakt op",
                    updated: "Laatst bijgewerkt",
                    close: "Dichtbij",
                    rename: "Hernoemen",
                    move: "Verplaats naar collectie",
                    select: "Selecteer een verzameling waarnaar u het item wilt verplaatsen"
                },
                gif: {
                    information: "Informatie",
                    added: "Toegevoegd op",
                    width: "Breedte",
                    height: "Hoogte",
                    close: "Dichtbij"
                }
            },
            option: {
                itemPrefix: {
                    label: "Artikelvoorvoegsel",
                    description: "Het voorvoegsel voor GIF-items"
                },
                collectionPrefix: {
                    label: "Verzamelvoorvoegsel",
                    description: "Het voorvoegsel voor verzamelingen"
                },
                onlyShowCollections: {
                    label: "Toon alleen collecties",
                    description: "Toon alleen collecties"
                },
                stopWarnings: {
                    label: "Waarschuwingen stoppen",
                    description: "Stop verwijderingswaarschuwingen"
                },
                showCopyImageLink: {
                    label: "Toon Kopieer afbeeldingslink",
                    description: "Toon de optie {{copyImageLink}} in contextmenu's"
                },
                preventDuplicates: {
                    label: "Voorkom duplicaten",
                    description: "Voorkom dat dezelfde GIF meerdere keren aan een verzameling wordt toegevoegd"
                },
                defaultEmptyCollectionImage: {
                    label: "Standaard lege collectieafbeelding",
                    description: "De afbeelding/GIF die wordt weergegeven als een collectie geen afbeeldingen/GIF's bevat"
                },
                collectionsSortType: {
                    label: "Sorteertype collecties",
                    description: "Het type sortering voor collecties"
                },
                collectionsSortOrder: {
                    label: "Sorteervolgorde collecties",
                    description: "De sorteervolgorde voor collecties"
                },
                collectionsSort: {
                    label: "Collecties sorteren",
                    description: "Bepaal hoe u collecties sorteert",
                    title: "Verzamelingen sorteren",
                    sortDescription: "Kies een sorteercriterium voor uw collecties",
                    sortBy: "Sorteer op",
                    name: "Name",
                    creationDate: "Aanmaakdatum",
                    modifiedDate: "Gewijzigde datum",
                    ascending: "Oplopend",
                    descending: "Aflopend"
                },
                importGifs: {
                    label: "GIF's importeren",
                    description: "Verzamelingen importeren",
                    button: "Verzamelingen importeren"
                },
                exportGifs: {
                    label: "GIF's exporteren",
                    description: "Collecties exporteren",
                    button: "Collecties exporteren"
                },
                resetCollections: {
                    label: "Verzamelingen opnieuw instellen",
                    description: "Collecties terugzetten naar standaard (verwijdert al uw collecties)",
                    button: "Verzamelingen opnieuw instellen"
                }
            },
            toast: {
                copied: "Afbeeldingslink gekopieerd naar klembord!",
                urlCopied: "URL gekopieerd naar klembord!",
                already: "Die verzameling bestaat al",
                alreadyCollection: "Die GIF zit al in die collectie"
            },
            modal: {
                create: {
                    title: "Verzameling maken",
                    name: "Collection Name",
                    create: "Creëren"
                },
                rename: {
                    title: "Hernoem collectie",
                    name: "New Collection Name",
                    warning: "Naam mag niet langer zijn dan 24 tekens",
                    rename: "Hernoemen"
                }
            },
            alert: {
                import: {
                    title: "Weet je het zeker?",
                    body: "Als u collecties importeert, worden uw huidige collecties overschreven.",
                    confirm: "Importeren",
                    cancel: "Laat maar zitten"
                },
                reset: {
                    title: "Weet je het zeker?",
                    body: "Als u collecties opnieuw instelt, worden al uw collecties verwijderd.",
                    confirm: "Opnieuw instellen",
                    cancel: "Laat maar zitten"
                },
                delete: {
                    title: "Weet je het zeker?",
                    deleteBody: "Wilt u deze verzameling echt verwijderen?",
                    removeBody: "Wilt u dit item echt verwijderen?",
                    confirm: "Verwijderen",
                    remove: "Verwijderen",
                    cancel: "Laat maar zitten"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Hiermee kunt u GIF's rechtstreeks in de chatbox plakken"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Voegt een opdracht toe om een ​​willekeurige GIF van je favorieten te verzenden, met een kans van één op tien om de eigenaar van de server te pingen",
            command: {
                gifRoulette: {
                    description: "Verleid het lot en stuur een GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Ping Eigenaar Kans",
                    description: "Of er een kans van 1 op 10 zou moeten zijn om de eigenaar van het gilde te pingen (oh nee)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Toont de openbare GitHub-opslagplaatsen van een gebruiker in zijn of haar profiel",
            loading: "Opslagplaatsen laden...",
            option: {
                showStars: {
                    label: "Sterren tonen",
                    description: "Toon repositorysterren"
                },
                showLanguage: {
                    label: "Toon taal",
                    description: "Toon de primaire taal van de repository"
                },
                showInMiniProfile: {
                    label: "Weergeven in miniprofiel",
                    description: "Toon opslagplaatsen in het pop-upvenster voor miniprofielen"
                },
                showRepositoryTab: {
                    label: "Tabblad Repository weergeven",
                    description: "Tabblad opslagplaatsen weergeven in profielmodaal (verbergt knop in verbindingen indien ingeschakeld)"
                }
            },
            error: {
                error: "Fout",
                render: "Fout: GitHubRepos kan niet worden weergegeven"
            },
            button: {
                show: "Toon GitHub-opslagplaatsen",
                repositories: "GitHub-opslagplaatsen",
                more: "Toon meer",
                only: "Alleen top {{length}}/{{total}} weergeven"
            },
            modal: {
                title: "De GitHub-opslagplaatsen van {{user}}",
                repository: "Opslagplaats",
                description: "Beschrijving",
                language: "Taal",
                stars: "Sterren",
                viewOnGitHub: "Bekijk op GitHub",
                close: "Dichtbij"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Voegt een opdracht toe om een ​​internetzoeklink te verzenden",
            command: {
                googleThat: {
                    description: "Stuur een zoekmachinelink",
                    query: "De zoekopdracht"
                }
            },
            option: {
                hyperlink: {
                    label: "Hyperlink",
                    description: "Of de verzonden link een hyperlink moet zijn met de zoekopdracht als label"
                },
                embed: {
                    label: "Insluiten",
                    description: "Of de verzonden link een insluiting moet weergeven"
                },
                defaultEngine: {
                    label: "Standaardmotor",
                    description: "De zoekmachine die u moet gebruiken"
                },
                customEngineURL: {
                    label: "Aangepaste engine-URL",
                    description: "De URL van de engine die u wilt gebruiken"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Hiermee kun je elke begroetingssticker gebruiken in plaats van alleen de willekeurige, door met de rechtermuisknop te klikken op 'Waai om hallo te zeggen!' knop",
            mode: {
                greet: "Begroeten",
                message: "Bericht"
            },
            option: {
                greetMode: {
                    label: "Begroet-modus",
                    description: "Kies de begroetingsmodus",
                    greet: "Begroet (je kunt slechts 3 keer begroeten)",
                    message: "Bericht (u kunt spam begroeten)"
                }
            },
            context: {
                label: "Begroet stickerkiezer",
                mode: "Begroet-modus",
                stickers: "Begroet stickers",
                multi: "Onheilige Multi-Greet",
                send: "Stuur groeten"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Contextmenu om de emoji's en stickers van een server te dumpen en te downloaden.",
            context: {
                download: {
                    emoji: "Emoji's downloaden",
                    sticker: "Stickers downloaden"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Voegt enkele instellingen toe voor gildetags, zoals het verbergen ervan of het uitschakelen van de prompt om ze over te nemen.",
            option: {
                hideTags: {
                    label: "Tags verbergen",
                    description: "Tags verbergen"
                },
                disableAdoptTagPrompt: {
                    label: "Schakel Tag-prompt overnemen uit",
                    description: "Schakel de prompt om tags over te nemen uit"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Mogelijkheid om de chatknoppen te verbergen",
            tooltip: {
                close: "Dichtbij",
                open: "Open"
            },
            option: {
                color: {
                    label: "Kleur",
                    description: "Kleur het rood bij het openen"
                },
                open: {
                    label: "Open",
                    description: "Standaard geopend"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Verberg bijlagen en insluitingen voor individuele berichten via de hover-knop",
            show: "Media tonen",
            hide: "Media verbergen",
            hidden: "Media verborgen"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Een plug-in om berichten tijdelijk te verbergen totdat u opnieuw opstart.",
            button: {
                hide: "Verbergen"
            },
            option: {
                hidePopoverButton: {
                    label: "Popover-knop verbergen",
                    description: "Verberg de knop Verbergen in de berichtenpopover."
                }
            }
        },
        hideServers: {
            name: "HideServers",
            description: "Verbergt servers uit de serverlijst",
            context: {
                hide: "Server verbergen",
                unhide: "Server zichtbaar maken",
                folder: {
                    hide: "Map verbergen",
                    unhide: "Map zichtbaar maken"
                }
            },
            option: {
                showIndicator: {
                    label: "Toon indicator",
                    description: "Menu weergeven om servers onder aan de lijst zichtbaar te maken"
                },
                guildsList: {
                    label: "Gilden lijst",
                    description: "Verwijder verborgen servers"
                },
                resetHidden: {
                    label: "Verborgen opnieuw instellen",
                    description: "Verwijder alle verborgen gilden uit de lijst",
                    button: "Verborgen servers opnieuw instellen"
                }
            },
            button: {
                hidden: "Verborgen",
                hiddenServers: "Verborgen servers",
                remove: "Verwijderen",
                folder: "Map",
                removeAll: "Alles verwijderen",
                guilds: "Gilden",
                noHiddenServers: "Geen verborgen servers"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Met Holy Notes kunt u berichten opslaan",
            main: "Voornaamst",
            button: {
                tooltip: "Heilige noten",
                save: "Bewaar notitie",
                cancel: "Annuleren",
                noteMessage: "Opmerking bericht",
                refresh: "Avatars vernieuwen",
                import: "Notities importeren",
                export: "Notities exporteren",
                deleteAll: "Verwijder alle notities",
                delete: "Notitieboekje verwijderen",
                create: "Maak een notitieboekje",
                copyText: "Kopieer tekst",
                copyAttachment: "Kopieer bijlage-URL",
                deleteNote: "Notitie verwijderen",
                moveNote: "Verplaats notitie",
                moveTo: "Verplaatsen naar {{key}}",
                copyId: "Kopieer identiteitsbewijs"
            },
            modal: {
                error: {
                    generic: "Er is een fout opgetreden bij het parseren van uw aantekeningen. Controleer de console voor meer informatie.",
                    easter: "Er zijn geen aantekeningen gevonden. Empathie Banaan is er voor jou.",
                    empty: "Er zijn geen notities gevonden die zijn opgeslagen in dit notitieboekje."
                },
                help: {
                    title: "Hulp",
                    description: "Leer hoe u Heilige Noten gebruikt",
                    addingNotes: "Notities toevoegen",
                    addingNotesText: "Om een ​​notitie toe te voegen, klikt u met de rechtermuisknop op een bericht, beweegt u de muis over het item 'Notitiebericht' en klikt u op de knop met de notitieboeknaam waarin u het bericht wilt noteren.",
                    prototype: "Prototype",
                    noteMessage: "Als u alleen op de knop 'Notitiebericht' klikt, wordt er standaard naar Main verwezen!",
                    deletingNotes: "Notities verwijderen",
                    deletingNotesText: "Let op: je kunt met de rechtermuisknop op de notitie klikken en op 'Notitie verwijderen' klikken, of je kunt de 'DELETE'-toets op je toetsenbord ingedrukt houden en op een notitie klikken; het is als magie!",
                    movingNotes: "Notities verplaatsen",
                    movingNotesText: "Om een ​​notitie te verplaatsen, klikt u met de rechtermuisknop op een notitie, beweegt u de muis over het item 'Notitie verplaatsen' en klikt u op de knop die overeenkomt met het notitieboek waarnaar u de notitie wilt verplaatsen.",
                    jumpToMessage: "Ga naar bericht",
                    jumpToMessageText: "Om naar de locatie te gaan waar de notitie oorspronkelijk stond, klikt u met de rechtermuisknop op de notitie en klikt u op 'Ga naar bericht'."
                },
                notebook: {
                    title: "NOTITIEBOEKJE",
                    search: "Zoek een bericht...",
                    options: "Sorteeropties",
                    label: "Sorteermenu",
                    filteredOf: "{{filteredCount}} van {{noteCount}} opmerking{{s}}",
                    note: "{{noteCount}} opmerking{{s}}",
                    ada: "Oplopend / Datum toegevoegd",
                    amd: "Oplopend / Berichtdatum",
                    dda: "Aflopend / Datum toegevoegd",
                    dmd: "Aflopend / Berichtdatum",
                    change: "Sortering wijzigen",
                    ascending: "Oplopend",
                    descending: "Aflopend",
                    dateAdded: "Datum toegevoegd",
                    messageDate: "Datum bericht"
                },
                create: {
                    title: "Maak een notitieboekje",
                    description: "Voer een naam in voor uw nieuwe notitieboekje",
                    placeholder: "Notitieboekjenaam"
                },
                delete: {
                    title: "{{notebookName}} verwijderen?",
                    description: "{{noteCount}} opmerking{{s}} wordt permanent verwijderd",
                    button: "Verwijderen"
                },
                tabs: {
                    label: "Notebook-tabbladen"
                }
            },
            toast: {
                saved: "Bericht succesvol toegevoegd aan {{notebook}}",
                deleted: "Notitie succesvol verwijderd van {{notebook}}",
                moved: "Notitie succesvol verplaatst van {{from}} naar {{to}}.",
                exists: "Notitieboekje {{notebookName}} bestaat al.",
                created: "{{notebookName}} is succesvol aangemaakt.",
                deletedNotebook: "{{notebookName}} succesvol verwijderd.",
                refreshed: "Avatars zijn vernieuwd.",
                deletedAll: "Alle notities zijn succesvol verwijderd.",
                imported: "Notities geïmporteerd.",
                invalid: "Kan notities niet importeren."
            },
            toolbox: {
                action: "Notities openen"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Verandert de homeknop in een type-indicator als iemand in uw DM's aan het typen is"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Voegt een nieuw tabblad toe aan de instellingen om een ​​voorbeeld van alle pictogrammen te bekijken.",
            toolbox: "Open het tabblad Pictogrammen",
            iconFinder: "Pictogramzoeker",
            about: {
                title: "Functies",
                preview: "Voorbeeldpictogrammen",
                list: {
                    copy: "Kopieer pictogramnamen en CSS-variabelen",
                    download: "Download pictogrammen in verschillende formaten (SVG, PNG, GIF, enz.)",
                    premade: "Kopieer vooraf gemaakte pictogramvondsten voor uw plug-ins",
                    find: "Zoek pictogrammen op functiecontext",
                    search: "Zoek naar kleuren door met de rechtermuisknop op de kleurnaam te klikken",
                    special: "Speciale dank"
                }
            },
            context: {
                icon: {
                    options: "Pictogram Opties",
                    log: "Meld u aan bij Console",
                    save: "Opslaan als...",
                    rightClick: "Klik met de rechtermuisknop op het pictogram om te wijzigen",
                    usage: "Gebruik",
                    click: "Klik om te kopiëren",
                    copied: "Gekopieerd!",
                    actions: "Acties"
                }
            },
            modal: {
                label: "Zoeken op functiecontext",
                search: "Zoek naar {{count}}-pictogrammen...",
                function: "Functie",
                iconViewer: {
                    colors: "Kleuren van pictogramviewer",
                    unknown: "onbekend",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Start de client automatisch opnieuw op nadat deze gedurende een configureerbare tijd inactief is geweest, maar voorkomt opnieuw opstarten terwijl u zich in VC bevindt.",
            option: {
                isEnabled: {
                    label: "Is ingeschakeld",
                    description: "Automatische herstart na inactiviteit inschakelen"
                },
                idleMinutes: {
                    label: "Inactieve minuten",
                    description: "Minuten van inactiviteit voordat opnieuw wordt opgestart (wanneer niet in VC)"
                }
            },
            toolbox: {
                disable: "Schakel automatisch opnieuw opstarten bij inactiviteit uit",
                enable: "Schakel automatisch opnieuw opstarten bij inactiviteit in"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Negeer ALLEEN dat activiteiten op uw status verschijnen. U kunt configureren welke specifiek worden genegeerd op de tabbladen Geregistreerde spellen en Activiteiten, of u kunt de algemene instellingen hieronder gebruiken",
            modal: {
                import: {
                    title: "Importeer de applicatie-ID van de CustomRPC-plug-in naar de filterlijst"
                },
                filter: {
                    title: "Filterlijst",
                    description: "Door komma's gescheiden lijst met activiteit-ID's om te filteren (handig voor het filteren van specifieke RPC-activiteiten en CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "CustomRPC-applicatie-ID is niet ingesteld.",
                    alreadyAdded: "CustomRPC-applicatie-ID is al toegevoegd."
                }
            },
            button: {
                import: "CustomRPC-ID importeren"
            },
            option: {
                importCustomRPC: {
                    label: "AangepasteRPC importeren"
                },
                listMode: {
                    label: "Lijstmodus",
                    description: "Kies hoe de filterlijst wordt toegepast",
                    blacklist: "Zwarte lijst (negeer alleen wat er op de lijst staat)",
                    whitelist: "Witte lijst (negeer alles behalve wat in de lijst staat)"
                },
                idList: {
                    label: "Lijst met ID's"
                },
                ignorePlaying: {
                    label: "Negeer spelen",
                    description: "Negeer alle spelactiviteiten (dit zijn meestal spel- en RPC-activiteiten)"
                },
                ignoreStreaming: {
                    label: "Negeer streaming",
                    description: "Negeer alle streamingactiviteiten"
                },
                ignoreListening: {
                    label: "Negeer luisteren",
                    description: "Negeer alle luisteractiviteiten (dit zijn meestal Spotify-activiteiten)"
                },
                ignoreWatching: {
                    label: "Negeer het kijken",
                    description: "Negeer alle kijkactiviteiten"
                },
                ignoreCompeting: {
                    label: "Negeer concurreren",
                    description: "Negeer alle concurrerende activiteiten (dit zijn normaal gesproken speciale spelactiviteiten)"
                },
                ignoredActivities: {
                    label: "Genegeerde activiteiten"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Hiermee kunt u oproepen van specifieke gebruikers of DM-groepen negeren.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Permanent genegeerde gebruikers",
                    description: "Gebruikers-ID's (komma + spatie) die permanent moeten worden genegeerd"
                }
            },
            button: {
                ignore: "Negeren",
                temporarilyIgnore: "Negeer tijdelijk oproepen",
                permanentlyIgnore: "Negeer oproepen permanent"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Verberg geen berichten voor 'waarschijnlijke spammers'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Geef de bestandsnaam van afbeeldingen en GIF's weer als tooltip wanneer u erover beweegt",
            option: {
                showFullUrl: {
                    label: "Toon volledige URL",
                    description: "Toon de volledige URL van de afbeelding in plaats van alleen de bestandsnaam. Altijd ingeschakeld voor GIF's omdat deze meestal geen betekenisvolle bestandsnaam hebben"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Verberg nooit afbeeldingslinks in berichten, ook al is dit de enige inhoud"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Hiermee kunt u inzoomen op afbeeldingen en GIF's en kunt u metagegevens van afbeeldingen weergeven. Gebruik het scrollwiel om in te zoomen en Shift + scrollwiel om de lensradius te vergroten.",
            option: {
                saveZoomValues: {
                    label: "Zoomwaarden opslaan",
                    description: "Of de zoom- en lensgroottewaarden moeten worden opgeslagen"
                },
                invertScroll: {
                    label: "Scroll omkeren",
                    description: "Scroll omkeren"
                },
                nearestNeighbour: {
                    label: "Dichtstbijzijnde buurman",
                    description: "Gebruik Nearest Neighbor Interpolation bij het schalen van afbeeldingen"
                },
                square: {
                    label: "Vierkant",
                    description: "Maak de lens vierkant"
                },
                zoom: {
                    label: "Zoom",
                    description: "Zoom van de lens"
                },
                size: {
                    label: "Maat",
                    description: "Straal / Grootte van de lens"
                },
                zoomSpeed: {
                    label: "Zoomsnelheid",
                    description: "Hoe snel de zoom-/lensgrootte verandert"
                },
                showMetadata: {
                    label: "Metagegevens weergeven",
                    description: "Toon metagegevens van afbeeldingen wanneer u dubbelklikt op de geselecteerde afbeelding"
                }
            },
            context: {
                square: "Vierkante lens",
                nearest: "Dichtstbijzijnde buurman",
                zoom: "Zoom",
                size: "Lensgrootte",
                zoomSpeed: "Zoomsnelheid",
                showImageMetadata: "Metagegevens van afbeeldingen weergeven",
                view: "Metagegevens bekijken",
                loading: "Laden...",
                unknown: "Onbekend",
                sizeHTML: "Maat",
                dimensions: "Afmetingen",
                filename: "Bestandsnaam"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Voegt een /imgtogif slash-opdracht toe om van elke afbeelding een GIF te maken",
            command: {
                imgToGif: {
                    description: "Hiermee kunt u een afbeelding omzetten in een GIF",
                    image: "Afbeeldingsbijlage om te gebruiken",
                    width: "Breedte van de GIF",
                    height: "Hoogte van de GIF"
                }
            },
            error: {
                noImage: "Geen afbeelding opgegeven!",
                notImage: "Uploaden is geen afbeelding"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Toont uw impliciete relaties op het tabblad Vrienden.",
            option: {
                sortByAffinity: {
                    label: "Sorteer op affiniteit",
                    description: "Of u impliciete relaties moet sorteren op basis van hun affiniteit met u."
                }
            },
            implicit: "Impliciet"
        },
        inRole: {
            name: "InRole",
            description: "Weet wie een rol heeft met het rolcontextmenu of het commando /inrole (lees plugin-info!)",
            command: {
                inrole: {
                    description: "Weet wie een rol speelt",
                    role: "De rol",
                    noGuild: "Zorg ervoor dat u zich op een server bevindt."
                }
            },
            context: {
                view: "Bekijk leden in rol"
            },
            modal: {
                about: {
                    title: "Beperkingen",
                    description: "Als u geen mod-rechten op de server heeft en die server groot is (meer dan 100 leden), kan de plug-in op de volgende manieren worden beperkt",
                    list: {
                        one: "Offline leden worden niet vermeld",
                        two: "Er worden standaard maximaal 100 leden weergegeven. Om meer te krijgen, scrollt u naar beneden in de ledenlijst om meer leden te laden.",
                        three: "Vrienden worden echter altijd weergegeven, ongeacht hun status."
                    }
                },
                member: {
                    title: "Rol leden",
                    noMembers: "Het lijkt erop dat er geen online in de cache opgeslagen leden met die rol zijn gevonden. Probeer naar beneden te scrollen in uw ledenlijst om meer gebruikers in de cache op te slaan!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Scherm direct delen wanneer u zich aansluit bij een spraakkanaal met ondersteuning voor desktopbronnen, vensters en video-invoerapparaten (camera's, opnamekaarten)",
            modal: {
                linux: {
                    title: "Voor Linux",
                    body: "Voor Wayland verschijnt alleen de schermshare-selectie",
                    bodyTwo: "Voor X11 kan het wel of niet werken :shrug:"
                },
                videoDevices: {
                    title: "Video-invoerapparaten",
                    body: "Ondersteunt camera's en capture-kaarten (zoals Elgato HD60X) indien ingeschakeld in de instellingen"
                },
                regardingSound: {
                    title: "Over de instellingen voor geluid en voorbeeld",
                    body: "We gebruiken de instellingen die zijn ingesteld en gebruikt door Discord om te beslissen of streamvoorbeeld en geluid moeten worden ingeschakeld of niet"
                }
            },
            option: {
                streamMedia: {
                    label: "Mediabron om te streamen",
                    description: "Reset naar het hoofdscherm als het niet wordt gevonden",
                    loading: "Mediabronnen laden...",
                    none: "Geen mediabronnen gevonden",
                    placeholder: "Selecteer een mediabron om te streamen"
                },
                includeVideoDevices: {
                    label: "Voeg videoapparaten toe",
                    description: "Neem video-invoerapparaten (camera's, opnamekaarten) op in de bronnenlijst"
                },
                autoMute: {
                    label: "Automatisch dempen",
                    description: "Demp uw microfoon automatisch wanneer u zich aansluit bij een spraakkanaal"
                },
                autoDeafen: {
                    label: "Auto doof",
                    description: "Automatisch doof wanneer u zich aansluit bij een spraakkanaal (dempt u ook)"
                },
                instantScreenshare: {
                    label: "Direct scherm delen",
                    description: "Schakelt de functie voor automatisch delen van schermen in"
                },
                keybindScreenshare: {
                    label: "Keybind-scherm delen",
                    description: "Scherm delen via keybind in Discord keybind-instellingen"
                },
                focusDiscord: {
                    label: "Focus onenigheid",
                    description: "Start scherm delen alleen met keybind wanneer Discord is gefocust"
                },
                toolboxManagement: {
                    label: "Toolbox-beheer",
                    description: "Schakel Direct scherm delen in/uit"
                }
            },
            toolbox: {
                label: "Direct scherm delen",
                toast: "Direct scherm delen {{state}}",
                enabled: "Ingeschakeld",
                disabled: "Gehandicapt"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Versleutel uw berichten op een niet-verdachte manier!",
            option: {
                savedPasswords: {
                    label: "Opgeslagen wachtwoorden",
                    description: "Opgeslagen wachtwoorden (gescheiden door een , )"
                }
            },
            button: {
                encrypt: "Versleutel bericht",
                decrypt: "Bericht decoderen",
                hidden: "Verborgen berichtindicator (InvisibleChat)"
            },
            tooltip: {
                hidden: "Dit bericht bevat een verborgen boodschap! (Onzichtbarechat)"
            },
            embed: {
                title: "Gedecodeerd bericht",
                footer: "Verzonden met InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Versleutel bericht",
                    secret: "Geheim",
                    cover: "Omslag (2 of meer woorden!!)",
                    password: "Wachtwoord",
                    dontUseCover: "Gebruik geen hoes",
                    send: "Versturen",
                    cancel: "Annuleren"
                },
                decrypt: {
                    title: "Bericht decoderen",
                    with: "Bericht met encryptie",
                    password: "Wachtwoord",
                    decrypt: "Ontsleutelen",
                    cancel: "Annuleren"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Hiermee kunt u de standaardwaarden bewerken bij het maken van serveruitnodigingen.",
            option: {
                inviteDuration: {
                    label: "Duur van de uitnodiging",
                    description: "Standaardduur voor serveruitnodigingen",
                    thirtyMinutes: "30 minuten",
                    oneHour: "1 uur",
                    sixHours: "6 uur",
                    twelveHours: "12 uur",
                    oneDay: "1 dag",
                    sevenDays: "7 dagen",
                    forever: "Voor altijd"
                },
                maxUses: {
                    label: "Maximaal gebruik",
                    description: "Standaard maximumgebruik voor serveruitnodigingen",
                    unlimited: "Onbeperkt",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Tijdelijk lidmaatschap",
                    description: "Standaard tijdelijk lidmaatschap voor serveruitnodigingen"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Maakt gebruikersnaamkleuren in chat uniek, zoals in IRC-clients",
            option: {
                lightness: {
                    label: "Lichtheid",
                    description: "Lichtheid, in%. Verander als de kleuren te licht of te donker zijn"
                },
                memberListColors: {
                    label: "Kleuren van de ledenlijst",
                    description: "Vervang de rolkleuren in de ledenlijst"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Kleur alleen toepassen op gebruikers zonder kleur",
                    description: "Pas kleuren alleen toe op gebruikers die geen vooraf gedefinieerde kleur hebben"
                },
                applyColorOnlyInDms: {
                    label: "Pas kleur alleen toe in DM's",
                    description: "Pas kleuren alleen toe in directe berichten; pas geen kleuren toe op servers."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Bewaart lokaal iedereen waarmee u hebt gecommuniceerd (inclusief servers), in geval van verlies",
            section: {
                description: "Biedt een lijst met gebruikers die u hebt genoemd of waarop u hebt gereageerd, of degenen die eigenaar zijn van de servers waartoe u behoort (servereigenaar*), of die lid zijn van uw gilde",
                empty: "Het is momenteel leeg.",
                tooltip: "{{user}}, bijgewerkt op {{updatedAtContent}}",
                owner: "Server-eigenaar",
                iRememberYou: "Ik herinner me jou"
            },
            context: {
                user: "Gebruikersopties",
                copy: "Kopieer gebruikers-ID",
                copyToast: "Gebruikers-ID gekopieerd naar klembord",
                view: "Bekijk profiel"
            },
            modal: {
                title: "Editor",
                filter: "Filter op tag, gebruikersnaam, ID",
                button: {
                    validate: "Valideren en opslaan",
                    cancel: "Annuleren",
                    openEditor: "Open Editor",
                    resetData: "Opslag opnieuw instellen",
                    sure: "Weet je het zeker?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Voegt contextmenu-opties toe om naar het begin of einde van een kanaal/DM te springen",
            context: {
                top: "Ga naar het eerste bericht",
                bottom: "Ga naar het laatste bericht",
                noMessages: "Er zijn geen berichten gevonden van deze gebruiker in dit kanaal.",
                searchFailed: "Zoeken naar berichten is niet gelukt."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Probeer naar het kanaal te navigeren waar je je bevond voordat je van account wisselt of Discord laadt."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Voegt OperaGX of osu ​​toe! geluidseffecten tijdens het typen op uw toetsenbord.",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume van de toetsenbordgeluiden"
                },
                soundPack: {
                    label: "Geluidspakket",
                    description: "Geluidspakket om te gebruiken voor toetsenbordgeluiden",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Stuurt een melding als een bepaald bericht overeenkomt met bepaalde trefwoorden of regexes",
            idHolder: "Identiteitskaart",
            keywordEntry: "Zoekwoordinvoer",
            regexHolder: "voorbeeld|regex",
            ignoreCase: "Negeer casus",
            whiteblackLabel: "Witte lijst/zwarte lijst",
            tab: {
                title: "Trefwoorden",
                clearAll: "Alles wissen"
            },
            button: {
                addId: "ID toevoegen",
                addKeyword: "Zoekwoordinvoer toevoegen"
            },
            listTypeSelector: {
                blacklist: "Zwarte lijst",
                whitelist: "Witte lijst",
                placeholder: "Selecteer een lijsttype"
            },
            option: {
                ignoreBots: {
                    label: "Negeer bots",
                    description: "Negeer berichten van bots"
                },
                amountToKeep: {
                    label: "Te behouden bedrag",
                    description: "Aantal berichten dat in het logboek moet worden bewaard"
                },
                keywords: {
                    label: "Trefwoorden",
                    description: "Beheer trefwoorden"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Voegt een laatste online-indicator toe onder gebruikersnamen in uw DM-lijst en gilde- en GDM-ledenlijst",
            unit: {
                d: "dag",
                h: "uur",
                m: "minuut"
            },
            online: "Online {{formattedTime}} geleden"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Kleine plug-in voor de rijke aanwezigheid van ListenBrainz",
            about: {
                title: "Over de MusicBrainz-API",
                description: "De MusicBrainz API vereist geen API-sleutel, maar wel een {{link}}. Voor de meesten zou een e-mailadres voldoende moeten zijn.",
                userAgent: "betekenisvolle user-agentreeks"
            },
            option: {
                username: {
                    label: "Gebruikersnaam",
                    description: "ListenBrainz-gebruikersnaam"
                },
                mbContact: {
                    label: "MB-contactpersoon",
                    description: "LuisterBrainz-contact"
                },
                shareUsername: {
                    label: "Deel gebruikersnaam",
                    description: "Link naar ListenBrainz-profiel tonen (mogelijk alleen zichtbaar voor andere gebruikers)"
                },
                shareSong: {
                    label: "Deel lied",
                    description: "Toon link naar huidig ​​nummer op ListenBrainz (mogelijk alleen zichtbaar voor andere gebruikers)"
                },
                hideWithSpotify: {
                    label: "Verbergen met Spotify",
                    description: "Verberg de aanwezigheid van ListenBrainz als Spotify actief is"
                },
                hideWithActivity: {
                    label: "Verbergen met activiteit",
                    description: "Verberg de aanwezigheid van ListenBrainz als u een andere aanwezigheid heeft"
                },
                useTimeBar: {
                    label: "Gebruik Tijdbalk",
                    description: "Gebruik de trackduur om een ​​tijdbalk weer te geven (moet de luisterstatus gebruiken)"
                },
                statusName: {
                    label: "Statusnaam",
                    description: "Aangepaste statustekst"
                },
                nameFormat: {
                    label: "Naam Formaat",
                    description: "Toon naam van nummer en artiest in statusnaam",
                    custom: "Gebruik een aangepaste statusnaam",
                    artistSong: "Gebruik formaat 'artiest - nummer'",
                    songArtist: "Gebruik formaat 'nummer - artiest'",
                    artistOnly: "Gebruik alleen de artiestennaam",
                    songOnly: "Gebruik alleen de naam van het nummer",
                    albumName: "Gebruik albumnaam (valt terug naar aangepaste statustekst als nummer geen album heeft)"
                },
                useListeningStatus: {
                    label: "Gebruik luisterstatus",
                    description: "Toon de status 'Luisteren naar' in plaats van 'Afspelen'"
                },
                missingArt: {
                    label: "Ontbrekende kunst",
                    description: "Wanneer album of albumhoezen ontbreken",
                    listenbrainzLogo: "Gebruik een groot ListenBrainz-logo",
                    generic: "Gebruik een algemene tijdelijke aanduiding"
                },
                useLogo: {
                    label: "Gebruik logo",
                    description: "Toon het ListenBrainz-logo op albumhoezen"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Vervang de laadcitaten van Discord",
            option: {
                replaceEvents: {
                    label: "Gebeurtenissen vervangen",
                    description: "Moet deze plug-in ook van toepassing zijn tijdens evenementen met speciale evenemententhema-citaten? (bijvoorbeeld Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Schakel vooraf ingestelde aanhalingstekens voor plug-ins in",
                    description: "Schakel de door deze plug-in vooraf ingestelde offertes in"
                },
                enableDiscordPresetQuotes: {
                    label: "Schakel vooraf ingestelde aanhalingstekens voor Discord in",
                    description: "Schakel de vooraf ingestelde aanhalingstekens van Discord in (inclusief gebeurtenisaanhalingstekens, tijdens evenementen)"
                },
                additionalQuotes: {
                    label: "Aanvullende citaten",
                    description: "Mogelijk worden er aanvullende aangepaste aanhalingstekens weergegeven, gescheiden door het onderstaande scheidingsteken"
                },
                additionalQuotesDelimiter: {
                    label: "Extra scheidingsteken voor aanhalingstekens",
                    description: "Scheidingsteken voor aanvullende offertes"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Hiermee kunt u inloggen op een ander apparaat door een login-QR-code te scannen, net als op mobiel!",
            option: {
                scanQr: {
                    label: "QR-code scannen",
                    description: "Scan een QR-code",
                    notEnabled: "Schakel de plug-in in en start uw client opnieuw op om een ​​login-QR-code te scannen"
                }
            },
            neverScan: "Scan nooit een inlog-QR-code van een andere gebruiker of applicatie.",
            hold: "Houd ingedrukt om het inloggen te bevestigen",
            scanning: "Scannen...",
            stopScanning: "Stop met scannen",
            usingWebcam: "Scannen met webcam",
            dragDrop: "Sleep hier een afbeelding en zet deze neer, of klik om een ​​afbeelding te selecteren",
            orPaste: "Of plak een afbeelding vanaf uw klembord!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Maakt het mogelijk de (standaard) afspeelsnelheid van media-insluitingen te wijzigen",
            playbackSpeed: "Afspeelsnelheid",
            context: {
                label: "Controle van de afspeelsnelheid"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Standaardsnelheid voor spraakberichten",
                    description: "Gesproken berichten"
                },
                defaultVideoSpeed: {
                    label: "Standaard videosnelheid",
                    description: "Video's"
                },
                defaultAudioSpeed: {
                    label: "Standaard audiosnelheid",
                    description: "Audio"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Toont het aantal online leden, het totale aantal leden en gebruikers in spraakkanalen op de server – in de ledenlijst en knopinfo.",
            option: {
                toolTip: {
                    label: "Tooltip",
                    description: "Toon het aantal leden op de servertooltip"
                },
                memberList: {
                    label: "Ledenlijst",
                    description: "Toon het aantal leden in de koptekst van de ledenlijst"
                },
                voiceActivity: {
                    label: "Spraakactiviteit",
                    description: "Toon aantal gebruikers in spraakkanalen"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} online in dit kanaal",
            totalMembers: "{{formattedTotalCount}} totaal aantal serverleden",
            totalVoice: "{{formattedVoiceCount}} leden in stem"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Toont gebruikersavatars en rolpictogrammen binnen vermeldingen",
            option: {
                showAtSymbol: {
                    label: "Toon @-symbool",
                    description: "Of het @-symbool moet worden weergegeven bij gebruikersvermeldingen"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Voegt een chatbarknop toe om te miauwen in de chat",
            button: {
                meow: "Miauw"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Voegt berichten die binnen een bepaalde periode zijn verzonden samen met uw eerder verzonden bericht als niemand anders vóór u een bericht verzendt.",
            option: {
                timePeriod: {
                    label: "Tijdsperiode",
                    description: "De duur van bursts (in seconden)."
                },
                shouldMergeWithAttachment: {
                    label: "Samenvoegen met bijlagen",
                    description: "Moet het bericht worden samengevoegd als het laatste bericht een bijlage heeft?"
                },
                useSpace: {
                    label: "Gebruik ruimte",
                    description: "Of er bij het samenvoegen een spatie tussen berichten moet worden toegevoegd in plaats van nieuwe regels."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Houd Backspace ingedrukt en klik om te verwijderen, dubbelklik om te bewerken/beantwoorden",
            option: {
                singleClickAction: {
                    label: "Actie met één klik",
                    description: "Actie bij één klik (uw berichten)"
                },
                singleClickModifier: {
                    label: "Modificatie met één klik",
                    description: "Modifier vereist voor actie met één klik (uw berichten)"
                },
                singleClickOthersAction: {
                    label: "Actie met één klik (overige)",
                    description: "Actie bij één klik (berichten van anderen)"
                },
                singleClickOthersModifier: {
                    label: "Single Click Modifier (overige)",
                    description: "Modifier vereist voor actie met één klik (berichten van anderen)"
                },
                doubleClickAction: {
                    label: "Dubbelklikactie",
                    description: "Actie bij dubbelklikken (uw berichten)"
                },
                doubleClickOthersAction: {
                    label: "Dubbelklikactie (overige)",
                    description: "Actie bij dubbelklikken (berichten van anderen)"
                },
                doubleClickModifier: {
                    label: "Dubbelklik-modificatie",
                    description: "Modifier vereist voor dubbelklikactie"
                },
                tripleClickAction: {
                    label: "Drievoudige klikactie",
                    description: "Actie bij drievoudige klik"
                },
                tripleClickModifier: {
                    label: "Drievoudige klikmodificatie",
                    description: "Modifier vereist voor drievoudige klikactie"
                },
                reactEmoji: {
                    label: "Reageer Emoji",
                    description: "Emoji om te gebruiken voor reactieacties"
                },
                addAdditionalReacts: {
                    label: "Voeg aanvullende reacties toe",
                    description: "Voeg ook extra geconfigureerde reactie-emoji's toe"
                },
                additionalReactEmojis: {
                    label: "Extra reactie-emoji's",
                    description: "Extra emoji's om toe te voegen bij gebruik van React-actie (door komma's/nieuwe regels gescheiden, max. {{count}})"
                },
                disableInDms: {
                    label: "Uitschakelen in DM's",
                    description: "Schakel alle klikacties in directe berichten uit"
                },
                disableInSystemDms: {
                    label: "Uitschakelen in systeem-DM's",
                    description: "Schakel alle klikacties in systeem-DM's uit"
                },
                clickTimeout: {
                    label: "Klik op Time-out",
                    description: "Time-out om dubbele/driedubbele klikken te onderscheiden (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Dubbelklik op Hold-drempel",
                    description: "Maximale bewaartijd voor dubbelklikacties (ms). Langer ingedrukt houden maakt tekstselectie mogelijk"
                },
                deferDoubleClickForTriple: {
                    label: "Stel dubbelklikken uit voor drievoudig klikken",
                    description: "Vertraag dubbelklikken om drievoudige klikacties toe te staan ​​(schakelt driedubbele klikken uit wanneer uitgeschakeld)"
                },
                selectionHoldTimeout: {
                    label: "Time-out voor selectieblokkering",
                    description: "Time-out om tekstselectie toe te staan ​​(ms)"
                },
                quoteWithReply: {
                    label: "Citaat met antwoord",
                    description: "Reageer bij het citeren ook op het bericht"
                },
                useSelectionForQuote: {
                    label: "Gebruik Selectie voor offerte",
                    description: "Gebruik bij het citeren de geselecteerde tekst, indien beschikbaar"
                }
            },
            actions: {
                none: "Geen",
                delete: "Verwijderen",
                copyLink: "Kopieer link",
                copyID: "Kopieer identiteitsbewijs",
                copyContent: "Kopieer inhoud",
                copyUserID: "Kopieer gebruikers-ID",
                edit: "Bewerking",
                reply: "Antwoord",
                react: "Reageren",
                openThread: "Open draad",
                openTab: "Tabblad openen",
                quote: "Citaat",
                pin: "Pin"
            },
            missingPermissions: {
                react: "Kan niet reageren: ontbrekende rechten",
                pin: "Kan niet vastzetten: ontbrekende machtigingen",
            },
            cannotQuote: "Kan dit berichttype niet citeren",
            copy: {
                messageId: "Bericht-ID gekopieerd!",
                messageContent: "Berichtinhoud gekopieerd!",
                userId: "Gebruikers-ID gekopieerd!"
            },
            linkCopied: "Link gekopieerd!"
        },
        messageColors: {
            name: "MessageColors",
            description: "Geeft kleurcodes zoals #FF0042 weer in berichten",
            option: {
                renderType: {
                    label: "Rendertype",
                    description: "Hoe kleuren weer te geven",
                    textColor: "Tekstkleur",
                    block: "Blok in de buurt",
                    backgroundColor: "Achtergrondkleur"
                },
                enableShortHexCodes: {
                    label: "Schakel korte hexadecimale codes in",
                    description: "Schakel hexadecimale code van 3 tekens in, zoals #39f"
                },
                blockView: {
                    label: "Blokweergavetype",
                    description: "Kleurblokken weergeven",
                    right: "Rechterkant",
                    left: "Linkerkant",
                    both: "Beide kanten"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Toont hoe lang het duurde om berichten op te halen voor het huidige kanaal",
            option: {
                showIcon: {
                    label: "Pictogram weergeven",
                    description: "Toon het ophaaltijdpictogram in de berichtenbalk"
                },
                showMs: {
                    label: "Milliseconden weergeven",
                    description: "Toon milliseconden in timing"
                },
                iconColor: {
                    label: "Pictogramkleur",
                    description: "Pictogramkleur (CSS-kleurwaarde)"
                }
            },
            loaded: "Berichten geladen in {{time}}ms ({{timeAgo}})",
            day: "dag{{s}} geleden",
            hour: "uur{{s}} geleden",
            minute: "minuut{{s}} geleden",
            justNow: "zojuist"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Geeft een indicator weer voor berichten waarvan de verzending ≥n seconden duurde",
            day: "dag",
            days: "dagen",
            hour: "uur",
            hours: "uur",
            minute: "minuut",
            minutes: "notulen",
            second: "seconde",
            seconds: "seconden",
            millisecond: "milliseconde",
            milliseconds: "milliseconden",
            and: "En",
            oldKotlinDetected: "Er wordt vermoed dat de gebruiker een oude Discord Android-client gebruikt.",
            ahead: "De klok van deze gebruiker staat {{delta}} voor.",
            delay: "Dit bericht is verzonden met een vertraging van {{delta}}.",
            delayedMessage: "Vertraagd bericht",
            oldAndroidClient: "Oude Discord Android-client",
            option: {
                latency: {
                    label: "Latentie",
                    description: "Drempel in seconden voor latentie-indicator"
                },
                detectDiscordKotlin: {
                    label: "Detecteer onenigheid Kotlin",
                    description: "Detecteer oude Discord Android-clients"
                },
                showMillis: {
                    label: "Milliseconden weergeven",
                    description: "Milliseconden weergeven"
                },
                ignoreSelf: {
                    label: "Negeer jezelf",
                    description: "Voeg geen indicator toe aan uw eigen berichten"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Voegt een voorbeeld toe aan berichten die een link naar een ander bericht bevatten",
            option: {
                messageBackgroundColor: {
                    label: "Achtergrondkleur bericht",
                    description: "Achtergrondkleur voor berichten in uitgebreide insluitingen"
                },
                automodEmbeds: {
                    label: "Automod-insluitingen",
                    description: "Gebruik automod-embeds in plaats van rijke embeds (kleiner maar minder info)",
                    always: "Gebruik altijd automod-embeds",
                    prefer: "Geef de voorkeur aan automod-insluitingen, maar gebruik rijke insluitingen als bepaalde inhoud niet kan worden weergegeven",
                    never: "Gebruik nooit automod-embeds"
                },
                listMode: {
                    label: "Lijstmodus",
                    description: "Of de ID-lijst als zwarte lijst of witte lijst moet worden gebruikt",
                    blacklist: "Zwarte lijst",
                    whitelist: "Witte lijst"
                },
                idList: {
                    label: "ID-lijst",
                    description: "Gilde-/kanaal-/gebruikers-ID's voor op de zwarte of witte lijst (gescheiden door een komma)"
                },
                clearMessageCache: {
                    label: "Berichtencache wissen",
                    description: "Wis de gekoppelde berichtencache"
                }
            },
            noContent: {
                noAttachments: "geen inhoud {{count}} insluiten{{s}}",
                noEmbeds: "geen inhoud {{count}} bijlage{{s}}",
                both: "geen inhoud, {{attachments}} bijlage{{attachmentsS}} en {{embeds}} embed{{embedsS}}"
            },
            dm: "Direct bericht",
            groupDm: "Groeps-DM",
            server: "Server"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Voegt een tooltip toe met een berichtvoorbeeld wanneer u over berichtlinks, antwoorden en doorgestuurde berichten beweegt.",
            loading: "Laden...",
            option: {
                onLink: {
                    label: "Op koppeling",
                    description: "Knopinfo weergeven wanneer u over berichtlinks beweegt"
                },
                onReply: {
                    label: "Bij antwoord",
                    description: "Toon tooltip wanneer u over berichtantwoorden beweegt"
                },
                onForward: {
                    label: "Aan Vooruit",
                    description: "Toon tooltip wanneer u over doorgestuurde berichten zweeft"
                },
                display: {
                    label: "Weergave",
                    description: "Weergavestijl",
                    auto: "Hetzelfde als bericht",
                    compact: "Compact",
                    cozy: "Knus"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Registreert tijdelijk verwijderde en bewerkte berichten.",
            removeMessage: "Berichtgeschiedenis verwijderen",
            removeMessageTemporary: "Bericht verwijderen (tijdelijk)",
            clearMessageLog: "Berichtenlog wissen",
            modal: {
                edit: {
                    title: "Berichtbewerkingsgeschiedenis",
                    tooltip: "Deze bewerkingsstatus is niet vastgelegd en kan dus niet worden weergegeven."
                }
            },
            option: {
                deleteStyle: {
                    label: "Stijl verwijderen",
                    description: "De stijl van verwijderde berichten",
                    text: "Rode tekst",
                    overlay: "Rode overlay"
                },
                logDeletes: {
                    label: "Logboekverwijderingen",
                    description: "Of verwijderde berichten moeten worden geregistreerd"
                },
                collapseDeleted: {
                    label: "Samenvouwen Verwijderd",
                    description: "Of verwijderde berichten moeten worden samengevouwen, vergelijkbaar met geblokkeerde berichten"
                },
                logEdits: {
                    label: "Logboekbewerkingen",
                    description: "Of bewerkte berichten moeten worden geregistreerd"
                },
                inlineEdits: {
                    label: "Inline-bewerkingen",
                    description: "Of de bewerkingsgeschiedenis moet worden weergegeven als onderdeel van de berichtinhoud"
                },
                ignoreBots: {
                    label: "Negeer bots",
                    description: "Of berichten van bots moeten worden genegeerd"
                },
                ignoreSelf: {
                    label: "Negeer jezelf",
                    description: "Of u berichten zelf moet negeren"
                },
                ignoreUsers: {
                    label: "Negeer gebruikers",
                    description: "Door komma's gescheiden lijst met gebruikers-ID's die moeten worden genegeerd"
                },
                ignoreChannels: {
                    label: "Negeer kanalen",
                    description: "Door komma's gescheiden lijst met kanaal-ID's die moeten worden genegeerd"
                },
                ignoreGuilds: {
                    label: "Negeer Gilden",
                    description: "Door komma's gescheiden lijst met gilde-ID's die moeten worden genegeerd"
                },
                showEditDiffs: {
                    label: "Toon bewerkingsverschillen",
                    description: "Toon visuele verschillen tussen bewerkte berichtversies"
                },
                separatedDiffs: {
                    label: "Gescheiden verschillen",
                    description: "Afzonderlijke toevoegingen en verwijderingen in diffs voor een beter leesbaar verschil"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Verbetert de MessageLogger-plug-in met extra functies.",
            updateImageCacheDir: "De cachemap voor afbeeldingen is bijgewerkt.",
            updateLogsDir: "De logboekmap is bijgewerkt.",
            failedUpdate: "Kan de map niet bijwerken.",
            blacklist: "Zwarte lijst",
            whitelist: "Witte lijst",
            failedToRemove: "Kan bericht niet verwijderen",
            successfullyImported: "Logboeken zijn geïmporteerd",
            errorImportingLogs: "Fout bij het importeren van logboeken. Kijk op de console voor meer informatie",
            importing: "Importeren...",
            importLogs: "Logboeken importeren",
            exporting: "Exporteren...",
            exportLogs: "Logboeken exporteren",
            alert: {
                clearLogs: {
                    title: "Logboeken wissen",
                    body: "Weet u zeker dat u alle logboeken wilt wissen?",
                    confirmText: "Duidelijk",
                    cancel: "Annuleren"
                },
                clearVisibleLogs: {
                    title: "Duidelijke zichtbare logboeken",
                    body: "Weet u zeker dat u de {{messages}}-logboeken wilt wissen?",
                    confirmText: "Duidelijk",
                    cancel: "Annuleren"
                },
                cleared: "Berichtenlogdatabase en cache gewist."
            },
            context: {
                title: "Berichtenlogger",
                jumpToMessage: "Ga naar bericht",
                openUserProfile: "Gebruikersprofiel openen",
                copyContent: "Kopieer inhoud",
                copyUserId: "Kopieer gebruikers-ID",
                copyMessageId: "Kopieer bericht-ID",
                copyChannelId: "Kanaal-ID kopiëren",
                copyServerId: "Kopieer server-ID",
                deleteLog: "Logboek verwijderen",
                fromUsernameDm: "Uit de DM's van {{username}}",
                fromGroupDm: "Van {{channelName}} Groeps-DM",
                fromServerChannel: "Van {{channelName}} tot {{serverName}}",
                moveTypeTo: "Verplaats {{type}} naar {{destination}}",
                removeTypeFrom: "Verwijder {{type}} van {{list}}",
                openLogsFor: "Logboeken openen voor {{name}}",
                openLogs: "Logboeken openen",
                removeMessage: "Bericht verwijderen (permanent)",
                removeMessageHistory: "Berichtgeschiedenis verwijderen (permanent)",
                deleteMessageHide: "Bericht verwijderen (verbergen in berichtenloggers)",
                addServerToBlacklist: "Server toevoegen aan zwarte lijst",
                addServerToWhitelist: "Server toevoegen aan witte lijst",
                removeServerFromBlacklist: "Verwijder de server van de zwarte lijst",
                removeServerFromWhitelist: "Verwijder de server van de witte lijst",
                moveServerToBlacklist: "Verplaats server naar zwarte lijst",
                moveServerToWhitelist: "Verplaats server naar witte lijst",
                addUserToBlacklist: "Gebruiker toevoegen aan zwarte lijst",
                addUserToWhitelist: "Gebruiker toevoegen aan witte lijst",
                removeUserFromBlacklist: "Gebruiker verwijderen van zwarte lijst",
                removeUserFromWhitelist: "Gebruiker verwijderen van witte lijst",
                moveUserToBlacklist: "Verplaats gebruiker naar zwarte lijst",
                moveUserToWhitelist: "Verplaats gebruiker naar witte lijst",
                addChannelToBlacklist: "Kanaal toevoegen aan zwarte lijst",
                addChannelToWhitelist: "Kanaal toevoegen aan witte lijst",
                removeChannelFromBlacklist: "Kanaal verwijderen van zwarte lijst",
                removeChannelFromWhitelist: "Kanaal verwijderen van witte lijst",
                moveChannelToBlacklist: "Kanaal naar zwarte lijst verplaatsen",
                moveChannelToWhitelist: "Kanaal naar witte lijst verplaatsen"
            },
            type: {
                server: "Server",
                user: "Gebruiker",
                channel: "Kanaal"
            },
            button: {
                chooseFolder: "Kies Map",
                browse: "Blader",
                clearLogs: "Wis alle logboeken",
                clearVisibleLogs: "Duidelijke zichtbare logboeken",
                sortOldest: "Sorteer de oudste eerst",
                sortNewest: "Sorteer Nieuwste eerst",
                loadMore: "Laad meer",
                noResults: "Geen resultaten in {{tab}}",
                tryOtherTabs: "Probeer misschien {{nextTab}} of {{lastTab}}",
                importLogs: "Logboeken importeren"
            },
            modal: {
                title: "Berichten filteren",
                deleted: "Verwijderd",
                edited: "Bewerkt",
                ghostPing: "Geest gepingd",
                empty: "Leeg hé",
                importLogs: "ML Enhanced slaat nu logboeken op in indexeddb. U moet uw oude logbestanden uit de logmap importeren. Bij het importeren worden bestaande logboeken niet overschreven"
            },
            clear: {
                title: "Logboeken wissen",
                description: "Weet u zeker dat u alle logboeken wilt wissen?",
                confirm: "Duidelijk",
                cancel: "Annuleren"
            },
            option: {
                saveMessages: {
                    label: "Berichten opslaan",
                    description: "Of de verwijderde en bewerkte berichten moeten worden opgeslagen."
                },
                saveImages: {
                    label: "Afbeeldingen opslaan",
                    description: "Bewaar verwijderde bijlagen."
                },
                sortNewest: {
                    label: "Sorteer Nieuwste eerst",
                    description: "Sorteer logboeken op nieuwste."
                },
                cacheMessagesFromServers: {
                    label: "Cacheberichten van servers",
                    description: "Meestal logt de berichtenlogger alleen van op de witte lijst geplaatste ID's en DM's. Dit zou betekenen dat ook berichten van alle servers worden geregistreerd. Houd er rekening mee dat dit ertoe kan leiden dat de cache de limiet overschrijdt, waardoor sommige berichten worden gemist. Als u zich op veel servers bevindt, kan dit de kans aanzienlijk vergroten dat berichten worden geregistreerd, wat kan resulteren in een groot berichtenrecord en de opname van irrelevante berichten."
                },
                ignoreBots: {
                    label: "Negeer bots",
                    description: "Of berichten van bots moeten worden genegeerd"
                },
                ignoreWebhooks: {
                    label: "Negeer webhooks",
                    description: "Of berichten via webhooks moeten worden genegeerd"
                },
                ignoreSelf: {
                    label: "Negeer jezelf",
                    description: "Of u berichten zelf moet negeren"
                },
                ignoreMutedGuilds: {
                    label: "Negeer gedempte gilden",
                    description: "Berichten in gedempte gilden worden niet geregistreerd. Op de witte lijst geplaatste gebruikers/kanalen in gedempte gilden worden nog steeds geregistreerd."
                },
                ignoreMutedCategories: {
                    label: "Negeer gedempte categorieën",
                    description: "Berichten in kanalen die tot gedempte categorieën behoren, worden niet geregistreerd. Op de witte lijst geplaatste gebruikers/kanalen in gedempte gilden worden nog steeds geregistreerd."
                },
                ignoreMutedChannels: {
                    label: "Negeer gedempte kanalen",
                    description: "Berichten in gedempte kanalen worden niet geregistreerd. Op de witte lijst geplaatste gebruikers/kanalen in gedempte gilden worden nog steeds geregistreerd."
                },
                alwaysLogDirectMessages: {
                    label: "Log altijd directe berichten in",
                    description: "Log altijd DM's in"
                },
                alwaysLogCurrentChannel: {
                    label: "Log altijd het huidige kanaal in",
                    description: "Log altijd het huidige geselecteerde kanaal in. Kanalen/gebruikers op de zwarte lijst worden nog steeds genegeerd."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Logboek standaard permanent verwijderen",
                    description: "Base MessageLogger log verwijderen knop zal logs permanent verwijderen"
                },
                hideMessageFromMessageLoggers: {
                    label: "Bericht verbergen voor berichtenloggers",
                    description: "Indien ingeschakeld, wordt er een contextmenuknop aan berichten toegevoegd, zodat u berichten kunt verwijderen zonder dat deze door andere loggers worden geregistreerd. Mogelijk niet veilig, gebruik op eigen risico."
                },
                showLogsButton: {
                    label: "Knop Logboeken weergeven",
                    description: "Schakel tussen wanneer de werkset wel of niet wordt weergegeven"
                },
                showWhereMessageIsFrom: {
                    label: "Laat zien waar het bericht vandaan komt",
                    description: "Toon berichtkanaal/auteurnaam en servernaam"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Berichten die meteen in logboeken moeten worden weergegeven",
                    description: "Aantal berichten dat tegelijk in logs moet worden weergegeven en aantal berichten dat moet worden geladen bij het laden van meer berichten in logs."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Bericht verbergen voor berichtenloggers Verwijderd bericht",
                    description: "De berichtinhoud waarmee het bericht moet worden vervangen bij gebruik van de functie Bericht verbergen in berichtenloggers."
                },
                messageLimit: {
                    label: "Berichtlimiet",
                    description: "Maximaal aantal berichten om op te slaan. Oudere berichten worden verwijderd wanneer de limiet is bereikt. 0 betekent dat er geen limiet is"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Maximale grootte bijlage in megabytes",
                    description: "Maximale grootte van een bijlage in megabytes om op te slaan. Bijlagen die groter zijn dan dit formaat worden niet opgeslagen."
                },
                attachmentFileExtensions: {
                    label: "Bestandsextensies voor bijlagen",
                    description: "Door komma's gescheiden lijst met bestandsextensies die moeten worden opgeslagen. Bijlagen met bestandsextensies die niet in deze lijst staan, worden niet opgeslagen. Laat leeg om alle bijlagen op te slaan."
                },
                cacheLimit: {
                    label: "Cachelimiet",
                    description: "Maximaal aantal berichten dat in de cache moet worden bewaard. Oudere berichten worden verwijderd wanneer de limiet is bereikt."
                },
                timeBasedCleanupMinutes: {
                    label: "Op tijd gebaseerde opruimminuten",
                    description: "Interval in minuten om op tijd gebaseerde opschoning uit te voeren van berichten die ouder zijn dan de berichtlimiet."
                },
                preserveCurrentChannel: {
                    label: "Huidig ​​kanaal behouden",
                    description: "Indien ingeschakeld, worden berichten in het momenteel geselecteerde kanaal niet beïnvloed door op tijd gebaseerde opschoning."
                },
                whitelistedIds: {
                    label: "ID's op de witte lijst",
                    description: "Server-, kanaal- of gebruikers-ID's op de witte lijst gezet."
                },
                blacklistedIds: {
                    label: "ID's op de zwarte lijst",
                    description: "Server-, kanaal- of gebruikers-ID's op de zwarte lijst gezet."
                },
                imageCacheDir: {
                    label: "Map voor afbeeldingscache",
                    description: "Selecteer de map met opgeslagen afbeeldingen"
                },
                logsDir: {
                    label: "Logboekmap",
                    description: "Selecteer de logboekmap"
                },
                importLogs: {
                    label: "Logboeken importeren",
                    description: "Logboeken importeren uit bestand"
                },
                exportLogs: {
                    label: "Logboeken exporteren",
                    description: "Logboeken exporteren vanuit IndexedDB"
                },
                openLogs: {
                    label: "Logboeken openen",
                    description: "Logboeken openen"
                },
                openImageCacheFolder: {
                    label: "Open de map Afbeeldingencache",
                    description: "Opent de cachemap voor afbeeldingen"
                },
                clearLogs: {
                    label: "Logboeken wissen",
                    description: "Logboeken wissen",
                    title: "Logboeken wissen",
                    body: "Weet u zeker dat u alle logbestanden wilt wissen?",
                    confirmText: "Duidelijk",
                    cancel: "Annuleren"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Ontvang toasts voor wanneer gekozen gebruikers een bericht sturen",
            dm: "hun DM's",
            option: {
                users: {
                    label: "Gebruikers",
                    description: "Door komma's gescheiden lijst met gebruikers-ID's waarvoor berichtentoast worden ontvangen",
                    invalidId: "{{id}} is geen geldige gebruikers-ID"
                }
            },
            notification: {
                title: "{{username}} heeft een bericht verzonden",
                body: "Klik om naar {{locationName}} te springen"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Hiermee kunt u berichten opslaan en gebruiken met een eenvoudige opdracht.",
            notExist: "De tag **{{tagname}}** bestaat niet meer! Herlaad je Discord om het probleem op te lossen :)",
            alreadyExist: "Er bestaat al een tag met de naam **{{tagname}}**!",
            sentTag: "De tag **{{tagname}}** is verzonden!",
            successCreate: "De tag **{{tagname}}** is aangemaakt!",
            allTags: "Al uw tags:",
            noTags: "Woeps! Er zijn nog geen tags, gebruik /tag create om er een aan te maken!",
            noDeleteTag: "Een tag **{{tagname}}** bestaat niet, dus deze kan niet worden verwijderd!",
            successDelete: "De tag **{{name}}** is succesvol verwijderd!",
            tagPreview: "Een tag met de naam **{{name}}** bestaat niet!",
            option: {
                clyde: {
                    label: "Clyde-bericht bij verzenden",
                    description: "Indien ingeschakeld, stuurt Clyde u een kortstondig bericht wanneer een tag is gebruikt."
                },
                tagsList: {
                    label: "Tagslijst",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Beheer alle tags voor jezelf",
                    option: {
                        create: {
                            description: "Maak een nieuw label",
                            name: "The name of the tag to trigger the response",
                            message: "Het bericht dat u verzendt als u deze tag gebruikt"
                        },
                        list: {
                            description: "Vermeld alle tags van jezelf"
                        },
                        delete: {
                            description: "Verwijder een tag van jezelf",
                            name: "The name of the tag to remove"
                        },
                        preview: {
                            description: "Bekijk een voorbeeld van een tag zonder deze openbaar te verzenden",
                            name: "The name of the tag to preview"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Voegt een microfoon-loopback-testpictogram toe aan het gebruikerspaneel",
            button: "Microfoontest loopback"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Diverse middenklik-tweaks, zoals plakken en openen van links.",
            option: {
                openScope: {
                    label: "Open bereik",
                    description: "Voorkom dat middelklikken op deze inhoudstypen ze opent.",
                    links: "Koppelingen",
                    media: "Media",
                    linksAndMedia: "Links en media",
                    none: "Geen"
                },
                pasteScope: {
                    label: "Reikwijdte plakken",
                    description: "Voorkom dat de middelste klik in deze situaties wordt geplakt.",
                    always: "Voorkom altijd middenklikplakken",
                    focus: "Alleen voorkomen als het tekstgebied niet is scherpgesteld",
                },
                pasteThreshold: {
                    label: "Drempelwaarde plakken",
                    description: "Milliseconden totdat plakken weer wordt ingeschakeld na een middelste klik."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock en meer",
            command: {
                echo: {
                    description: "Stuurt een bericht als Clyde (lokaal)"
                },
                lenny: {
                    description: "Stuurt een lenig gezicht"
                },
                mock: {
                    description: "mOcK-Mensen"
                },
                wordcount: {
                    description: "Telt het aantal woorden in een bericht",
                    response: "Het bericht bevat {{count}} woorden."
                },
                flipcoin: {
                    description: "Gooit een munt op en geeft kop of munt terug",
                    heads: "Hoofden",
                    tails: "Staarten",
                    response: "De munt landde op {{result}}."
                },
                ask: {
                    description: "Stel een ja/nee-vraag en krijg antwoord",
                    yes: "Ja",
                    no: "Nee",
                    maybe: "Misschien",
                    askAgain: "Vraag het later opnieuw",
                    definitelyNot: "Absoluut niet",
                    itIsCertain: "Het is zeker"
                },
                randomanimal: {
                    description: "Krijg een willekeurige dierenfoto",
                    animal: "kies je dier",
                    cat: "kat",
                    dog: "hond",
                    response: "Sorry, ik kan momenteel geen dierenfoto ophalen"
                },
                randomnumber: {
                    description: "Genereert een willekeurig getal tussen twee waarden",
                    min: "Minimale waarde",
                    max: "Maximale waarde",
                    response: "Willekeurig getal tussen {{min}} en {{max}}: {{number}}"
                },
                choose: {
                    description: "Kiest willekeurig uit de aangeboden opties",
                    option: "Door komma's gescheiden lijst met keuzes",
                    response: "Ik kies: {{choice}}"
                },
                systeminfo: {
                    description: "Toont systeeminformatie",
                    platform: "Platform",
                    deviceType: "Apparaattype",
                    mobile: "Mobiel",
                    desktop: "Bureaublad",
                    browser: "Browser",
                    cpuCores: "CPU-kernen",
                    memory: "Geheugen",
                    screen: "Scherm",
                    languages: "Talen",
                    network: "Netwerk",
                    online: "Online",
                    offline: "Offline",
                    failedToFetch: "Kan systeeminformatie niet ophalen",
                    unknown: "Onbekend"
                },
                getuptime: {
                    description: "Haalt de uptime van de klant op",
                    response: "**Client-uptime**: {{uptime}} minuten"
                },
                gettime: {
                    description: "Gets the current time",
                    response: "De huidige tijd is {{time}}"
                },
                transform: {
                    description: "Transformeer uw tekst met de opgegeven optie",
                    transformation: {
                        description: "Transformatie die op uw tekst moet worden toegepast",
                        lowercase: "Converteer tekst naar kleine letters",
                        uppercase: "Converteer tekst naar hoofdletters",
                        localeLowercase: "Converteer tekst naar kleine letters",
                        localeUppercase: "Converteer tekst naar hoofdletters",
                        same: "Blijf hetzelfde"
                    },
                    repeat: "hoe vaak herhalen",
                    reverse: "of u de tekst wilt omkeren",
                    normalize: {
                        description: "Formulier voor tekstnormalisatie",
                        nfc: "Normalisatieformulier C (NFC)",
                        nfd: "Normalisatieformulier D (NFD)",
                        nfkc: "Normalisatieformulier KC (NFKC)",
                        nfkd: "Normalisatieformulier KD (NFKD)"
                    },
                    text: "Transformeer deze tekst"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Voegt meer Kaomoji toe aan Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Verbetert de snelle reactieknoppen in het berichtcontextmenu.",
            option: {
                reactionCount: {
                    label: "Aantal reacties",
                    description: "Aantal reacties (0-42)"
                },
                frequentEmojis: {
                    label: "Frequente emoji's",
                    description: "Gebruik veelgebruikte emoji's in plaats van favoriete emoji's"
                },
                rows: {
                    label: "Rijen",
                    description: "Rijen met snelle reacties om weer te geven"
                },
                columns: {
                    label: "Kolommen",
                    description: "Kolommen met snelle reacties om weer te geven"
                },
                compactMode: {
                    label: "Compacte modus",
                    description: "Schaalt de knoppen naar 75% van hun oorspronkelijke schaal, terwijl de binnenste emoji wordt vergroot naar een schaal van 125%. Emoji's hebben 93,75% van de oorspronkelijke grootte. Het wordt aanbevolen om minimaal 5 kolommen te hebben"
                },
                scroll: {
                    label: "Rol",
                    description: "Schakel het scrollen door de lijst met emoji's in"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Voegt tags toe voor webhooks en modererende rollen (eigenaar, beheerder, etc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Deze gebruiker is een webhook"
                },
                owner: {
                    name: "Owner",
                    description: "Eigenaar van de server"
                },
                admin: {
                    name: "Admin",
                    description: "Heeft beheerdersrechten"
                },
                staff: {
                    name: "Staff",
                    description: "Kan de server, kanalen of rollen beheren"
                },
                mod: {
                    name: "Mod",
                    description: "Kan berichten beheren of mensen kicken/bannen"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "Kan voicechats beheren"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "Kan berichten beheren"
                }
            },
            modal: {
                example: "Voorbeeld",
                tag: "Label",
                customTextPlaceholder: "Tekst op tag (standaard: {{displayName}})",
                messages: "Weergeven in berichten",
                memberList: "Toon in ledenlijst en profielen"
            },
            option: {
                dontShowForBots: {
                    label: "Niet weergeven voor bots",
                    description: "Geen extra tags voor bots tonen (exclusief webhooks)"
                },
                dontShowBotTag: {
                    label: "Bottag niet weergeven",
                    description: "Toon alleen extra tags voor bots / Verberg [APP] tekst"
                },
                showWebhookTagFully: {
                    label: "Webhooktag volledig weergeven",
                    description: "Toon Webhook-tag in gevolgde kanalen zoals aankondigingen"
                },
                tagSettings: {
                    label: "Tag-instellingen",
                    description: "vul mij"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Een slash-opdracht om van/naar morsecode te vertalen.",
            command: {
                morse: {
                    description: "Vertalen van of naar morsecode",
                    message: "Tekst om te converteren"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume van de 🗿🗿🗿"
                },
                quality: {
                    label: "Kwaliteit",
                    description: "Kwaliteit van de 🗿🗿🗿",
                    normal: "Normaal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Trigger bij ongerichtheid",
                    description: "Activeer de 🗿 zelfs als het venster niet scherp is"
                },
                ignoreBots: {
                    label: "Negeer bots",
                    description: "Negeer berichten van bots"
                },
                ignoreBlocked: {
                    label: "Negeer geblokkeerde gebruikers",
                    description: "Negeer berichten van geblokkeerde gebruikers"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Muziekbediening en songteksten voor meerdere services",
            option: {
                SpotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Toon Spotify-bedieningselementen",
                    description: "Toon muziekbedieningen voor Spotify"
                },
                showSpotifyLyrics: {
                    label: "Toon Spotify-songteksten",
                    description: "Toon songteksten voor Spotify"
                },
                useSpotifyUris: {
                    label: "Gebruik Spotify-URI's",
                    description: "Open Spotify-URI's in plaats van Spotify-URL's. Werkt alleen als Spotify is geïnstalleerd en werkt mogelijk niet op alle platforms"
                },
                previousButtonRestartsTrack: {
                    label: "Knop Vorige Start nummer opnieuw",
                    description: "Herstart het momenteel afgespeelde nummer door op de vorige knop te drukken als de speeltijd >3s is"
                },
                TidalSectionTitle: {
                    label: "Getijden"
                },
                showTidalControls: {
                    label: "Toon getijdencontroles",
                    description: "Toon muziekbedieningen voor Tidal"
                },
                showTidalLyrics: {
                    label: "Toon Tidal-teksten",
                    description: "Toon songteksten voor Tidal"
                },
                YtmSectionTitle: {
                    label: "YouTube-muziek",
                    description: "Voor deze instellingen is {{app}} vereist"
                },
                showYoutubeMusicControls: {
                    label: "Toon YouTube-muziekbediening",
                    description: "Toon muziekbedieningen voor YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube Music API-URL",
                    description: "De URL voor de YouTube Music API-server die je gebruikt"
                },
                hoverControls: {
                    label: "Zweefbediening",
                    description: "Toon bedieningselementen bij zweven"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "Muzieknoot weergeven zonder songteksten",
                    description: "Toon een muzieknootpictogram als er geen songteksten zijn gevonden"
                },
                LyricsPosition: {
                    label: "Songtekst Positie",
                    description: "Positie van het songtekstpaneel",
                    above: "Bovenstaande speler(s)",
                    below: "Hieronder speler(s)"
                },
                LyricsProvider: {
                    label: "Aanbieder van songteksten",
                    description: "Waar de songtekst vandaan komt",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "Vertalen naar",
                    description: "Vertaal songteksten naar - Als u dit wijzigt, worden bestaande vertalingen gewist",
                    cleared: "Vertaling gewist"
                },
                LyricsConversion: {
                    label: "Conversie van songteksten",
                    description: "Automatisch teksten vertalen of romaniseren",
                    none: "Geen",
                    translate: "Vertalen",
                    romanize: "Romaniseren"
                },
                FallbackProvider: {
                    label: "Terugvalaanbieder",
                    description: "Als een songtekstprovider faalt, probeer dan andere providers"
                },
                ShowFailedToasts: {
                    label: "Mislukte toastjes weergeven",
                    description: "Toon toast als de songtekst niet kan worden geladen"
                },
                PurgeLyricsCache: {
                    label: "Leeg de songtekstcache",
                    description: "Wis alle in de cache opgeslagen teksten en vertalingen",
                    button: "Cache leegmaken",
                    cacheLyricsPurged: "Cache van de songteksten is leeggemaakt"
                }
            },
            context: {
                spotify: {
                    label: "Spotify-lyriekmenu",
                    type: "Spotify {{type}}-menu",
                    copy: "Kopieer {{type}} Naam",
                    link: "Kopieer {{type}}-link",
                    open: "Open {{type}} in Spotify",
                    album: "Spotify-albummenu"
                },
                tidal: {
                    label: "Tidal Songtekstmenu",
                    lyrics: "Getijdenteksten",
                    type: "Getijden {{name}} Menu",
                    copy: "Kopieer {{name}} Naam",
                    open: "Open {{name}} in Tidal",
                    album: "Getijdenalbummenu"
                },
                ytm: {
                    type: "YouTube Muziek {{name}} Menu",
                    copy: "Kopieer {{name}} Naam",
                    open: "Open {{name}} in YouTube Music",
                    album: "YouTube Muziekalbummenu",
                    muted: "Gedempt"
                },
                lyrics: {
                    provider: "Aanbieder van songteksten",
                    saved: "opgeslagen",
                    notFound: "Geen gesynchroniseerde songteksten gevonden"
                },
                copy: {
                    currentLyrics: "Kopieer de huidige songtekst"
                }
            },
            alert: {
                lyricCopied: "Tekst gekopieerd naar klembord!",
                noLyrics: "Geen songteksten",
                noLyricsTo: "Geen tekst voor {{translated}}",
                translate: "vertalen",
                romanize: "romaniseren",
                lyricsFetchFailed: "Het ophalen van de songtekst is mislukt",
                failedToFetchLyrics: "Kan {{translated}} niet ophalen",
                translation: "vertaling",
                romanization: "romanisering",
                failedToFetchTranslation: "Kan de songtekst van {{translated}} niet ophalen"
            },
            modal: {
                install: {
                    title: "Hoe te installeren",
                    install: "Installeer {{link}} vanaf hier en ga vervolgens naar TidalLuna-instellingen → Plugin-winkels → Installeer @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Er wordt geen nummer afgespeeld",
                    artist: "Artiest:",
                    album: "Album:",
                    noLyrics: "Geen songtekst beschikbaar :(",
                    progress: "Voortgang",
                    totalDuration: "Totale duur"
                },
                type: {
                    song: "Liedje",
                    artist: "Artiest",
                    album: "Album"
                },
                album: {
                    open: "Album openen",
                    viewCover: "Albumomslag bekijken",
                    volume: "Volume",
                    image: "Albumafbeelding"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Vertaald",
                romanized: "Geromaniseerd",
                none: "Geen"
            },
            error: {
                failed: "Kan Modal niet weergeven :(",
                checkConsole: "Controleer de console op fouten",
                invalidUrlCustomApi: "Ongeldige URL-indeling voor aangepaste API-server-URL"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Toont onderlinge groeps-DM's in profielen",
            no: "Geen onderlinge groepen",
            mutualGroup: "{{count}} Gemeenschappelijke groep{{s}}",
            members: "Leden",
            noGroup: "Geen gemeenschappelijke groeps-DM's",
            header: "Onderlinge groepen"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Voorkomt dat gespreks-/PiP-voorbeelden (scherm delen, streams, enz.) worden onderbroken, zelfs als de cliënt de focus verliest",
            about: "Deze plug-in zorgt ervoor dat Discord meer bronnen gebruikt dan normaal"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Demp automatisch nieuwe servers en wijzig diverse andere instellingen wanneer u lid wordt",
            context: {
                apply: "Pas nieuwe Gilde-instellingen toe"
            },
            option: {
                guild: {
                    label: "Mute Gilde",
                    description: "Gilde automatisch dempen"
                },
                messages: {
                    label: "Instellingen voor servermeldingen",
                    description: "Instellingen voor servermeldingen",
                    all: "Alle berichten",
                    mentions: "Alleen @vermeldingen",
                    nothing: "Niets",
                    default: "Serverstandaard"
                },
                everyone: {
                    label: "Onderdruk @iedereen en @hier",
                    description: "Onderdruk @iedereen en @hier"
                },
                role: {
                    label: "Onderdruk alle @vermeldingen van rollen",
                    description: "Onderdruk alle @vermeldingen van rollen"
                },
                highlights: {
                    label: "Onderdruk hoogtepunten",
                    description: "Onderdruk hoogtepunten automatisch"
                },
                events: {
                    label: "Demp nieuwe evenementen",
                    description: "Demp nieuwe evenementen automatisch"
                },
                showAllChannels: {
                    label: "Toon alle kanalen",
                    description: "Toon automatisch alle kanalen"
                },
                mobilePush: {
                    label: "Demp mobiele pushmeldingen",
                    description: "Demp mobiele pushmeldingen automatisch"
                },
                voiceChannels: {
                    label: "Spraakkanalen",
                    description: "Verberg namen in spraakkanalen automatisch"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Hulpprogramma dat u waarschuwt wanneer er nieuwe plug-ins aan Plexcord worden toegevoegd",
            modal: {
                title: "Nieuwe plug-ins en instellingen",
                description: "Sinds uw laatste bezoek zijn er nieuwe plug-ins en instellingen toegevoegd. Bekijk hieronder de nieuwe toevoegingen.",
                tooltip: "Afwijzen voor deze sessie",
                dontShowAgain: "Laat dit niet meer zien",
                restartRequired: "Opnieuw opstarten vereist om wijzigingen toe te passen",
                restart: "Opnieuw opstarten",
                continue: "Doorgaan"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Brengt de tag van de bot terug naar zijn oorspronkelijke vorm"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Verbergt alle geblokkeerde/genegeerde berichten volledig uit de chat",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Verberg ook genegeerde gebruikers",
                    description: "Verberg ook berichten van genegeerde gebruikers."
                },
                disableNotifications: {
                    label: "Schakel meldingen uit",
                    description: "Verberg nieuwe berichtmeldingen voor geblokkeerde gebruikers. Altijd waar als 'Standaard gebruikers verbergen' hieronder is ingeschakeld en de gebruiker die de melding activeert niet wordt uitgesloten in 'Gebruikers overschrijven'."
                },
                allowAutoModMessages: {
                    label: "AutoMod-berichten toestaan",
                    description: "Sta toe dat berichten verzonden door AutoMod de filtering omzeilen."
                },
                hideBlockedUserReplies: {
                    label: "Verberg geblokkeerde gebruikersantwoorden",
                    description: "Verberg berichten van geblokkeerde gebruikers in threads als u aan de thread hebt deelgenomen."
                },
                defaultHideUsers: {
                    label: "Standaard Gebruikers verbergen",
                    description: "Indien ingeschakeld, worden berichten van geblokkeerde gebruikers volledig verborgen en worden alle berichten van gebruikers-ID's in de overschrijvingslijst samengevouwen (standaard Discord-gedrag). Indien uitgeschakeld, worden berichten van geblokkeerde gebruikers samengevouwen en worden alle berichten van gebruikers-ID's in de overschrijvingslijst in plaats daarvan volledig verborgen."
                },
                overrideUsers: {
                    label: "Gebruikers overschrijven",
                    description: "Door komma's gescheiden lijst met gebruikers-ID's die worden verborgen of samengevouwen in plaats van het hierboven geselecteerde standaardgedrag."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Voorkomt dat u markdown-opsommingstekens typt (stinkende)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Schakelt de redundante deep linking-functie van Discord uit, die u probeert te dwingen hun desktop-app te gebruiken"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Verwijdert de vereiste 'voer servernaam in' bij het verwijderen van een server",
            option: {
                confirmModal: {
                    label: "Modaal bevestigen",
                    description: "Moet er een 'Weet u zeker dat u wilt verwijderen'-modaliteit worden getoond?"
                }
            },
            modal: {
                title: "Server verwijderen?",
                body: "Het is permanent, als dat niet duidelijk was.",
                confirm: "Verwijderen",
                cancel: "Annuleren"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Schakelt de 'HOLD UP'-banner in de console uit. Als bijwerking voorkomt het ook dat Discord je token verbergt, wat willekeurige afmeldingen voorkomt."
        },
        noF1: {
            name: "NoF1",
            description: "Schakelt F1-helpbinding uit."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Als u een link plakt terwijl er tekst is geselecteerd, wordt deze niet als een gemaskeerde URL geplakt"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Voorkomt dat de camera op uw scherm wordt gespiegeld"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Verwijdert de 300 ms lange animatie bij het openen of sluiten van modals"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Verwijdert Discord-afbeeldingsmozaïek",
            option: {
                inlineVideo: {
                    label: "Inline-video",
                    description: "Speel video's af zonder carrouselmodaal"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Verwijdert ALLE Nitro-upsells van Discord door de klant te laten denken dat je Nitro hebt."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Omzeilt het onboardingproces van Discord voor snellere toegang tot de server."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Slaat de langzame en vervelende onboardingvertraging over"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Verwijdert het ping-aantal van inkomende vriendschapsverzoeken, berichtverzoeken en Nitro-aanbiedingen.",
            option: {
                hideFriendRequestsCount: {
                    label: "Aantal vriendschapsverzoeken verbergen",
                    description: "Verberg het aantal inkomende vriendschapsverzoeken"
                },
                hideMessageRequestsCount: {
                    label: "Aantal berichtverzoeken verbergen",
                    description: "Aantal berichtverzoeken verbergen"
                },
                hidePremiumOffersCount: {
                    label: "Verberg het aantal premiumaanbiedingen",
                    description: "Verberg het aantal Nitro-aanbiedingen"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Verwijdert Nitro-profielthema's volledig van iedereen behalve uzelf."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Omzeilt de push-to-talk-vereiste voor spraakactiviteit in kanalen die dit afdwingen."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Schakelt antwoordpings standaard uit",
            option: {
                userList: {
                    label: "Gebruikerslijst",
                    description: "Lijst met gebruikers waarvoor pings moeten worden toegestaan ​​of uitgesloten (gescheiden door komma's of spaties)"
                },
                roleList: {
                    label: "Rollenlijst",
                    description: "Lijst met rollen waarvoor pings moeten worden toegestaan ​​of uitgesloten (gescheiden door komma's of spaties)"
                },
                shouldPingListed: {
                    label: "Moet Ping vermeld",
                    description: "Gedrag",
                    dontPing: "Ping de vermelde gebruikers/rollen niet",
                    onlyPing: "Ping alleen de vermelde gebruikers/rollen"
                },
                inverseShiftReply: {
                    label: "Antwoord omgekeerde verschuiving",
                    description: "Keer het shift-antwoordgedrag van Discord om (schakel in dat shift-antwoord de gebruiker vermeldt)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Verwijder kanarie/ptb van berichtlinks"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Wij zijn allemaal gelijk!! Verwijdert de rolkoppen in de ledenlijst."
        },
        noRPC: {
            name: "NoRPC",
            description: "Schakelt Discord Rich Presence uit"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Toon geen server-emoji's in het menu voor automatisch aanvullen.",
            option: {
                shownEmojis: {
                    label: "Getoonde emoji's",
                    description: "Kies welke emoji's je wilt weergeven in het menu voor automatisch aanvullen",
                    onlyUnicode: "Alleen Unicode-emoji's",
                    currentServer: "Unicode-emoji's en server-emoji's van de huidige server",
                    all: "Unicode-emoji's en alle server-emoji's (standaard Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Schakelt de taakbalk en het systeemvak uit voor het aantal ongelezen tellingen."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Maakt bureaubladmeldingen informatiever"
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Stel een aangepast volume in voor Discord-meldingen",
            option: {
                notificationVolume: {
                    label: "Meldingsvolume",
                    description: "Meldingsvolume"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Schakelt de typanimatie in de chat uit"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Hiermee kunt u naar berichten van geblokkeerde of genegeerde gebruikers en waarschijnlijk spammers gaan zonder deze te deblokkeren."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Als ongelezen berichten meerdere keren door een gebruiker in DM's worden verzonden, ontvangt u slechts één audioping.",
            option: {
                channelToAffect: {
                    label: "Kanaal om te beïnvloeden",
                    description: "Selecteer het type DM waarop de plug-in van invloed is",
                    both: "Beide",
                    user: "DM's van gebruikers",
                    group: "Groeps-DM's"
                },
                allowMentions: {
                    label: "Vermeldingen toestaan",
                    description: "Ontvang audiopings voor @mentions"
                },
                allowEveryone: {
                    label: "Sta iedereen toe",
                    description: "Ontvang audiopings voor @iedereen en @hier in groeps-DM's"
                },
                ignoreUsers: {
                    label: "Negeer gebruikers",
                    description: "Gebruikers-ID's (komma + spatie) waarvan de pings NOOIT mogen worden beperkt"
                },
                alwaysPlaySound: {
                    label: "Speel altijd geluid af",
                    description: "Speel het berichtmeldingsgeluid af, zelfs als dit is uitgeschakeld"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Open links in hun respectievelijke apps in plaats van in uw browser",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Open Spotify-links in de Spotify-app"
                },
                steam: {
                    label: "Stoom",
                    description: "Open Steam-links in de Steam-app"
                },
                epic: {
                    label: "Epische spellen",
                    description: "Open Epic Games-links in de Epic Games Launcher"
                },
                tidal: {
                    label: "Getijden",
                    description: "Open Tidal-links in de Tidal-app"
                },
                itunes: {
                    label: "iTunes",
                    description: "Open Apple Music-links in de iTunes-app"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Open VRChat-links in de VRCX-app"
                }
            },
            notification: {
                open: "Geopende link in native app"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Hiermee kunt u de standaard forumindeling/sorteervolgorde overschrijven. Je kunt dit nog steeds per kanaal wijzigen",
            option: {
                defaultLayout: {
                    label: "Standaardtags",
                    description: "Welke lay-out als standaard moet worden gebruikt",
                    list: "Lijst",
                    gallery: "Galerij"
                },
                defaultSortOrder: {
                    label: "Standaard sorteervolgorde",
                    description: "Welke sorteervolgorde moet standaard worden gebruikt?",
                    recentlyActive: "Recent actief",
                    datePosted: "Datum geplaatst"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Hiermee kun je de feestmodus gebruiken omdat het feest nooit eindigt ✨",
            option: {
                superIntensePartyMode: {
                    label: "Super Intense Party-modus",
                    description: "Intensiteit van het feest",
                    normal: "Normaal",
                    better: "Beter",
                    projectX: "Project X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Brengt de optie terug om uitnodigingen voor onbepaalde tijd te pauzeren die Discord overbodig heeft verwijderd.",
            pauseIndefinitely: "Pauzeer voor onbepaalde tijd"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Schakelt de beperkingen aan de clientzijde voor het beheer van kanaalmachtigingen uit.",
            option: {
                lockout: {
                    label: "Uitsluiting",
                    description: "Omzeil de preventie van toestemmingsblokkering ('Ik ben er vrij zeker van dat u dit niet wilt doen')"
                },
                onboarding: {
                    label: "Aan boord",
                    description: "Omzeil de onboardingvereisten ('Als u deze wijziging doorvoert, wordt uw server incompatibel [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Bekijk de rechten die een gebruiker of kanaal heeft en de rollen van een server",
            view: "Bekijk machtigingen",
            option: {
                permissionsSortOrder: {
                    label: "Machtigingen Sorteervolgorde",
                    description: "De sorteermethode die wordt gebruikt om te definiëren welke rol een gebruiker een bepaalde machtiging verleent",
                    highest: "Hoogste rol",
                    lowest: "Laagste rol"
                }
            },
            icon: {
                denied: "Geweigerd",
                allowed: "Toegestaan",
                notOverwritten: "Niet overschreven"
            },
            context: {
                permissions: "Machtigingen"
            },
            modal: {
                title: "Machtigingen",
                noPermissions: "Geen rechten om weer te geven!",
                owner: "eigenaar",
                grantedBy: "Toegekend door",
                serverOwner: "Server-eigenaar",
                ownerRole: "Eigenaar",
                sortingBy: "Sorteren op {{method}}",
                highest: "Hoogste rol",
                lowest: "Laagste rol",
                details: "Roldetails"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Voegt een /petpet slash-opdracht toe om headpet-GIF's van elke afbeelding te maken",
            command: {
                petpet: {
                    description: "Maak een petpet-GIF. U kunt slechts één van de afbeeldingsopties opgeven",
                    delay: "De vertraging tussen elk frame. Standaard ingesteld op 20.",
                    resolution: "Resolutie voor de GIF. Standaard ingesteld op 120. Als u een krankzinnig getal invoert en Discord bevriest, is dat uw schuld.",
                    image: "Afbeeldingsbijlage om te gebruiken",
                    url: "URL om afbeelding op te halen",
                    user: "Gebruiker wiens avatar als afbeelding moet worden gebruikt",
                    noServerPfp: "Gebruik de normale avatar in plaats van de serverspecifieke als u de optie 'gebruiker' gebruikt",
                    error: {
                        noImage: "Geen afbeelding opgegeven!",
                        delayTooLow: "De vertraging moet minimaal 20 zijn.",
                    }
                }
            },
            error: {
                uploadNotImage: "Uploaden is geen afbeelding",
                fetchUserFailed: "Kan gebruiker niet ophalen. Kijk op de console voor meer informatie.",
                fetchImageFailed: "Er is een fout opgetreden tijdens het laden van {{url}}. Kijk op de console voor meer informatie."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Voegt Picture-in-Picture toe aan video's (naast de knop Downloaden)",
            tooltip: "Schakel Beeld-in-beeld in",
            option: {
                loop: {
                    label: "Lus",
                    description: "Of de PiP-videoloop wel of niet moet worden gemaakt"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Hiermee kunt u privékanalen bovenaan uw DM-lijst vastzetten. Om pinnen vast te zetten/los te maken of opnieuw te ordenen, klikt u met de rechtermuisknop op DM's",
            context: {
                category: {
                    label: "Categoriemenu voor DM's vastzetten",
                    edit: "Categorie bewerken",
                    up: "Ga omhoog",
                    down: "Ga naar beneden",
                    delete: "Categorie verwijderen",
                    unnamed: "eh oh"
                },
                pin: {
                    label: "DM vastzetten",
                    addCategory: "Categorie toevoegen"
                },
                unPin: {
                    label: "DM losmaken",
                    move: "Verplaats naar categorie"
                }
            },
            option: {
                pinOrder: {
                    label: "Pin-bestelling",
                    description: "In welke volgorde moeten vastgezette DM's worden weergegeven?",
                    lastMessage: "Meest recente bericht",
                    custom: "Aangepast (klik met de rechtermuisknop op kanalen om de volgorde te wijzigen)"
                },
                canCollapseDmSection: {
                    label: "Opvouwbare vastgezette sectie",
                    description: "Toestaan ​​dat de niet-gecategoriseerde DM-sectie inklapbaar is"
                },
                dmSectionCollapsed: {
                    label: "DM-sectie samengevouwen",
                    description: "DM-sectie samenvouwen"
                },
                userBasedCategoryList: {
                    label: "Op gebruiker gebaseerde categorielijst",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Categorie vastzetten",
                    edit: "Categorie bewerken",
                    new: "Nieuwe categorie",
                    name: "Name",
                    color: "Kleur",
                    save: "Redden",
                    create: "Creëren"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Aanpasbare meldingen met verbeterde vermeldingsopmaak",
            option: {
                friends: {
                    label: "Vrienden",
                    description: "Waarschuw wanneer vrienden berichten verzenden op servers"
                },
                mentions: {
                    label: "Vermeldingen",
                    description: "Geef een melding wanneer iemand u rechtstreeks @vermeldt"
                },
                dms: {
                    label: "DM's",
                    description: "Melding voor directe berichten (DM's)"
                },
                showInActive: {
                    label: "Weergeven in actief",
                    description: "Toon meldingen, zelfs voor het momenteel actieve kanaal"
                },
                ignoreMuted: {
                    label: "Negeren Gedempt",
                    description: "Sla meldingen over van gedempte servers, kanalen of gebruikers"
                }
            },
            unknown: "Onbekend",
            dm: "DM",
            groupDM: "Groeps-DM",
            title: "{{username}} naar {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Voegt een pinpictogram toe aan vastgezette berichten"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Laat de kleine gildepictogrammen niet in mappen zien"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Voegt platformindicatoren (Desktop, Mobiel, Web...) toe aan gebruikers",
            embeddedTooltip: "Troosten",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lijst",
                    description: "Toon indicatoren in de ledenlijst"
                },
                badges: {
                    label: "Insignes",
                    description: "Toon indicatoren in gebruikersprofielen als badges"
                },
                messages: {
                    label: "Berichten",
                    description: "Toon indicatoren in berichten"
                },
                colorMobileIndicator: {
                    label: "Kleur mobiele indicator",
                    description: "Of de mobiele indicator moet overeenkomen met de kleur van de gebruikersstatus."
                },
                showBots: {
                    label: "Toon bots",
                    description: "Of platformindicatoren op bots moeten worden weergegeven"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Spoof op welk platform of apparaat u zich bevindt",
            about: "We kunnen niet garanderen dat u voor deze plug-in niet gewaarschuwd of verbannen wordt.",
            platform: {
                desktop: "Discord-klant",
                web: "Onenigheidsweb",
                ios: "Discord iOS",
                android: "Onenigheid Android",
                xbox: "Onenigheid ingebed",
                playstation: "Onenigheid ingebed",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Platform",
                    description: "Op welk platform je moet verschijnen",
                    desktop: "Bureaublad",
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
            description: "Voegt een knop toe aan de AppBar met snelle acties van Plexcord",
            tooltip: "Plexcord-gereedschapskist",
            context: {
                openLog: "Open het meldingenlogboek",
                enableQuickCSS: "Schakel QuickCSS in",
                openQuickCSS: "Bewerk QuickCSS",
                openSettings: "Instellingen openen",
                manageThemes: "Beheer thema's"
            },
            option: {
                showPluginMenu: {
                    label: "Plug-inmenu weergeven",
                    description: "Toon het plug-inmenu in de Plexcord Toolbox"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Past uw berichten aan, zodat ze er mooier uitzien en een betere grammatica hebben. Zie instellingen",
            option: {
                quickDisable: {
                    label: "Snel uitschakelen",
                    description: "Snel uitschakelen. Schakelt het wijzigen van berichten uit zonder dat de client opnieuw hoeft te worden geladen."
                },
                blockedWords: {
                    label: "Geblokkeerde woorden",
                    description: "Woorden die niet met een hoofdletter worden geschreven (door komma's gescheiden)."
                },
                fixApostrophes: {
                    label: "Apostrofen repareren",
                    description: "Zorg ervoor dat de weeën apostrofs bevatten."
                },
                expandContractions: {
                    label: "Vouw de contracties uit",
                    description: "Vouw de weeën uit"
                },
                fixCapitalization: {
                    label: "Hoofdlettergebruik repareren",
                    description: "Schrijf zinnen met een hoofdletter."
                },
                fixPunctuation: {
                    label: "Interpunctie corrigeren",
                    description: "Pas de afstand rond leestekens aan."
                },
                fixPunctuationFrequency: {
                    label: "Interpunctiefrequentie corrigeren",
                    description: "Percentage periodefrequentie (dit irriteert sommige mensen enorm).",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Hiermee kunt u een voorbeeld van uw bericht bekijken voordat u het verzendt.",
            tooltip: "Voorbeeldbericht"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Hiermee kunt u verschillende profielvoorinstellingen opslaan en laden via het gedeelte Profiel in Instellingen.",
            toast: {
                importFailed: "Kan profielsets niet importeren. Het bestand is mogelijk ongeldig.",
            },
            option: {
                avatarSize: {
                    label: "Avatar-grootte",
                    description: "Avatargrootte in vooraf ingestelde lijst"
                }
            },
            modal: {
                override: "Overschrijven",
                merge: "Samenvoegen",
                cancel: "Annuleren",
                timestamp: "{{formattedDate}} bij {{formattedTime}}",
                rename: "Hernoemen",
                update: "Update",
                moveUp: "Ga omhoog",
                moveDown: "Ga naar beneden",
                moveTo: "Ga naar pagina 1",
                delete: "Verwijderen",
                importProfiles: "Profielen importeren",
                importText: "Je hebt {{existingCount}} bestaande profielen in deze sectie. Wilt u ze overschrijven of samenvoegen met geïmporteerde profielen?",
                heading: "Opgeslagen profielen",
                searchProfiles: "Profielen zoeken...",
                profileName: "Profielnaam",
                saving: "Besparing...",
                save: "Profiel opslaan",
                cancelSearch: "Zoekopdracht annuleren",
                search: "Zoekopdracht",
                random: "Willekeurig",
                import: "Importeren",
                exportAll: "Alles exporteren"
            }
        },
        questify: {
            name: "Questify",
            description: "Verbeter je Quest-ervaring met een reeks functies, of schakel ze volledig uit als ze niet jouw ding zijn.",
            quests: "Zoektochten",
            context: {
                quest: {
                    label: "Quest-knopmenu",
                    ignore: "Markeer alles genegeerd",
                    reset: "Reset genegeerde lijst",
                    fetch: "Haal speurtochten op",
                    markAsIgnored: "Markeer als genegeerd",
                    unmarkAsIgnored: "Markeer als genegeerd",
                    stopAuto: "Stop automatisch aanvullen",
                    copyQuestID: "Kopieer Quest-ID",
                    startAuto: "Start automatisch aanvullen"
                }
            },
            settings: {
                questButton: {
                    title: "Quest-knop",
                    description: "Toon een Quest-knop in de serverlijst met een optionele indicator voor niet-geclaimde Quests.",
                    leftClick: "Linksklikactie",
                    middleClick: "Middelste klikactie",
                    rightClick: "Klik met de rechtermuisknop op actie",
                    visibility: "Knopzichtbaarheid",
                    unclaimedIndicator: "Niet-geclaimde indicator",
                    badgeColor: "Badgekleur",
                    rewardDisplay: "Beloningsweergave",
                    includedRewardTypes: "Inbegrepen beloningstypen",
                    includedRewardTypesDesc: "Tel missies met deze beloningstypen alleen als niet-geclaimd bij het bepalen van de knopzichtbaarheid, het aantal badges en bij het afspelen van het waarschuwingsgeluid.",
                    selectRewardTypes: "Selecteer welke beloningstypen u wilt opnemen in de niet-geclaimde telling...",
                    noRewardType: "Er is geen ondersteunde Quest-functie met die naam.",
                    default: "Standaard",
                    disable: "Uitzetten"
                },
                questFeatures: {
                    title: "Quest-functies",
                    description: "Pas specifieke Quest-functies aan.",
                    popupWarning: "De optie {{disablePopup}} wordt genegeerd voor voltooide missies en het bijhouden van de voortgang van missies.",
                    videoQuestInfo: "De optie {{completeVideo}} wacht gedurende de duur van de Video Quest en markeert deze automatisch als voltooid.",
                    gameQuestInfo: "Op dezelfde manier wacht de optie {{completeGame}} gedurende de Game Quest en markeert deze automatisch als voltooid. Deze optie wordt alleen ondersteund op de officiële desktopclient.",
                    manualStartWarning: "Je moet de Quests nog steeds handmatig starten. De eerste klik start de Quests op de achtergrond. Voor videomissies openen volgende klikken de videomodal zoals normaal. Om de Quests af te breken, kun je het contextmenu op de Quest-tegel openen en {{stopAuto}} selecteren.",
                    tosWarning: "Het gebruik van een van deze opties is in strijd met de ToS van Discord. Gebruik op eigen risico.",
                    selectFeatures: "Selecteer welke Quest-functies je wilt wijzigen.",
                    disablePopup: "Schakel de Quest-pop-up boven het accountpaneel uit",
                    completeVideo: "Voltooi videomissies op de achtergrond",
                    completeGame: "Voltooi speelgame-missies op de achtergrond",
                    stopAuto: "Stop automatisch aanvullen"
                },
                restyleQuests: {
                    title: "Restyle-missies",
                    description: "Markeer missies met optionele themakleuren voor zichtbaarheid.",
                    precedenceNote: "Geclaimde en Verlopen Quest-stijlen hebben voorrang, zelfs als een Quest wordt genegeerd.",
                    gradientStyle: "Verloopstijl",
                    assetPreload: "Activa vooraf laden",
                    unclaimed: "Niet geclaimd",
                    claimed: "Geclaimd",
                    ignored: "Genegeerd",
                    expired: "Verlopen",
                    intenseGradient: "Intens Restyle-verloop",
                    defaultGradient: "Standaard Restyle-verloop",
                    blackGradient: "Subtiel zwart verloop",
                    noGradient: "Geen verloop",
                    loadAllAssets: "Laad alle Quest-middelen bij het laden van de pagina",
                    loadDuringScroll: "Laad Quest-items tijdens het scrollen van de pagina"
                },
                reorderQuests: {
                    title: "Zoekopdrachten opnieuw rangschikken",
                    description: "Sorteer missies op hun status. Toegepast wanneer de sorteeroptie \"Questify\" is geselecteerd op de Quest-pagina.",
                    formatNote: "Een door komma's gescheiden lijst moet het volgende bevatten: {{items}}.",
                    placeholder: "U moet alle items van NIET-CLAIMED, CLAIMED, GENEGORED en EXPIRED opnemen",
                    invalidFormat: "Ongeldig formaat.",
                    unclaimedSubsort: "Niet-geclaimde subsoort",
                    claimedSubsort: "Geclaimde ondersoort",
                    ignoredSubsort: "Genegeerde subsoort",
                    expiredSubsort: "Verlopen subsoort",
                    addedNewest: "Toegevoegd (nieuwste)",
                    addedOldest: "Toegevoegd (oudste)",
                    expiredRecent: "Verlopen (meest recente)",
                    expiredLeast: "Verlopen (minst recent)",
                    expiringSoon: "Verloopt (binnenkort)",
                    expiringLate: "Verloopt (laatste)",
                    claimedRecent: "Geclaimd (meest recente)",
                    claimedLeast: "Geclaimd (minst recent)",
                    ignoredQuestProfile: "Genegeerd Quest-profiel",
                    sharedProfile: "Gedeeld: Alle accounts op deze clientshare worden genegeerd.",
                    privateProfile: "Privé: alle accounts op deze client hebben afzonderlijke negaties.",
                    rememberSort: "Onthoud de sorteerkeuze",
                    rememberFilter: "Onthoud de filterkeuze",
                    yes: "Ja",
                    no: "Nee",
                    rememberNote: "Deze sorteer- en filterkeuze verwijst naar de ingebouwde sorteer- en filteropties op de Quest-pagina. De aangepaste sortering hierboven wordt alleen toegepast als de sorteeroptie \"Questify\" is geselecteerd op de Quest-pagina. Als het onthouden is uitgeschakeld, worden de sorteer- of filteropties elke keer opnieuw ingesteld als je de Quest-pagina opent."
                },
                fetchingQuests: {
                    title: "Quests ophalen",
                    description: "Configureer hoe vaak je Quests van Discord wilt ophalen en stel waarschuwingen in voor nieuwe Quests.",
                    defaultBehavior: "Standaard haalt Discord alleen Quests op tijdens het laden en bij het bezoeken van de Quests-pagina. Dit betekent dat zonder een hieronder gedefinieerd ophaalinterval, deze plug-in niet op de hoogte zal zijn van nieuwe Quests die gedurende de dag worden toegevoegd.",
                    requirement: "Dit is afhankelijk van het feit dat de Quest-knop is ingeschakeld en is ingesteld op {{unclaimed}}, of is ingesteld op {{always}} met niet-geclaimde {{pill}}-, {{badge}}- of {{both}}-indicatoren ingeschakeld. Anders is er geen reden om periodiek speurtochten op te halen.",
                    blockWarning: "Ook als {{fetchingQuests}} is geblokkeerd in de instelling {{questFeatures}}, zal dit niet werken.",
                    fetchInterval: "Interval ophalen",
                    alertSound: "Waarschuwingsgeluid",
                    intervalPlaceholder: "Selecteer of typ een interval tussen 30 minuten en 12 uur.",
                    intervalFeedback: "Intervallen moeten tussen 30 minuten en 12 uur liggen.",
                    soundPlaceholder: "Selecteer een geluid of geef een aangepaste geluids-URL op.",
                    soundFeedback: "Er is geen geluid gevonden of de URL is niet afkomstig van een ondersteund domein.",
                    disabled: "Gehandicapt",
                    minutes: "Notulen",
                    minute: "Minuut",
                    hours: "Uur",
                    hour: "Uur",
                    thirtyMinutes: "30 minuten",
                    oneHour: "1 uur",
                    threeHours: "3 uur",
                    sixHours: "6 uur",
                    twelveHours: "12 uur",
                    customSound: "AANGEPASTE GELUID"
                },
                disableOptions: {
                    everything: "Schakel alles uit",
                    discovery: "Schakel het tabblad Ontdekking uit",
                    dms: "Schakel het tabblad Quests uit in DM's",
                    fetching: "Schakel het ophalen van speurtochten uit",
                    popup: "Schakel pop-up boven accountpaneel uit",
                    sponsored: "Schakel de gesponsorde banner op de Quests-pagina uit",
                    badge: "Badge op gebruikersprofielen uitschakelen",
                    inventory: "Melding van verplaatsing van cadeauvoorraad uitschakelen",
                    friendsList: "Vriendenlijst Actie nu actief",
                    membersList: "Ledenlijst Actief spelende pictogrammen",
                    gameQuests: "Voltooi spel-/activiteitsmissies op de achtergrond",
                    videoQuests: "Voltooi bekijk video-missies op de achtergrond",
                    achievementQuests: "Voltooi de taak in activiteitsmissies op de achtergrond",
                    mobileDesktop: "Maak Mobile Quests Desktop-compatibel",
                    notifyOnComplete: "Informeer bij voltooiing van de zoektocht"
                },
                options: {
                    always: "Altijd",
                    unclaimed: "Niet geclaimd",
                    never: "Nooit",
                    pill: "Pil",
                    badge: "Kenteken",
                    both: "Beide",
                    none: "Geen",
                    openQuests: "Open speurtochten",
                    contextMenu: "Contextmenu",
                    pluginSettings: "Plugin-instellingen",
                    nothing: "Niets",
                    orbs: "Orbs",
                    nitroCodes: "Nitro-codes",
                    rewardCodes: "Beloningscodes",
                    inGameItems: "In-game-items",
                    profileCollectibles: "Profiel Verzamelobjecten"
                }
            },
            option: {
                disableQuests: {
                    label: "Schakel missies uit",
                    description: "Selecteer welke Quest-functies je wilt uitschakelen."
                },
                disableQuestsEverything: {
                    label: "Schakel alles uit",
                    description: "Schakel alle Quest-functies uit."
                },
                disableQuestsFetchingQuests: {
                    label: "Schakel het ophalen van speurtochten uit",
                    description: "Schakel het ophalen van missies uit Discord uit."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Schakel het tabblad Quests uit in DM's",
                    description: "Schakel het tabblad Quest uit op de pagina Directe berichten."
                },
                disableQuestsDiscoveryTab: {
                    label: "Schakel het tabblad Ontdekking uit",
                    description: "Schakel het tabblad Quest uit op de ontdekkingspagina."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Schakel de gesponsorde banner op de Quests-pagina uit",
                    description: "Schakel de gesponsorde banner op de Quest-pagina uit."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Schakel pop-up boven accountpaneel uit",
                    description: "Schakel de Quest-pop-up boven uw accountpaneel uit."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Badge op gebruikersprofielen uitschakelen",
                    description: "Schakel de Quest-badge uit op gebruikersprofielen."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Melding van verplaatsing van cadeauvoorraad uitschakelen",
                    description: "Schakel de kennisgeving van de Quest-verhuizing van de cadeau-inventaris uit."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Vriendenlijst uitschakelen Actie nu actief",
                    description: "Schakel de promotie van Quests uit voor games die door vrienden worden gespeeld."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Schakel ledenlijst uit met actief spelende pictogrammen",
                    description: "Schakel de actief spelende pictogrammen in de ledenlijst uit."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Maak Mobile Quests Desktop-compatibel",
                    description: "Maak Quests voor mobiel compatibel met desktop."
                },
                completeVideoQuestsInBackground: {
                    label: "Voltooi videomissies op de achtergrond",
                    description: "Voltooi videomissies op de achtergrond nadat de videoduur is verstreken."
                },
                completeGameQuestsInBackground: {
                    label: "Voltooi spelmissies op de achtergrond",
                    description: "Voltooi gamemissies op de achtergrond nadat de spelduur is verstreken."
                },
                completeAchievementQuestsInBackground: {
                    label: "Voltooi de taak in activiteitsmissies op de achtergrond",
                    description: "Voltooi prestaties in activiteitenmissies op de achtergrond."
                },
                notifyOnQuestComplete: {
                    label: "Informeer bij voltooiing van de zoektocht",
                    description: "Toon een melding wanneer een Quest automatisch is voltooid."
                },
                questButton: {
                    label: "Quest-knop",
                    description: "Toon een Quest-knop in de serverlijst."
                },
                questButtonDisplay: {
                    label: "Quest-knopweergave",
                    description: "Welk weergavetype moet worden gebruikt voor de Quest-knop in de serverlijst."
                },
                questRewardIncludeRewardCode: {
                    label: "Inclusief beloningscodes",
                    description: "Voeg speurtochten met beloningscodes toe wanneer het aantal speurtochten wordt weergegeven."
                },
                questRewardIncludeNitroCode: {
                    label: "Inclusief Nitro-codes",
                    description: "Voeg missies met Nitro-codes toe wanneer het aantal missies wordt weergegeven."
                },
                questRewardIncludeInGame: {
                    label: "Inclusief in-game beloningen",
                    description: "Voeg speurtochten met in-game beloningen toe wanneer het aantal speurtochten wordt weergegeven."
                },
                questRewardIncludeCollectibles: {
                    label: "Inclusief verzamelobjecten",
                    description: "Voeg speurtochten met verzamelvoorwerpen toe wanneer het aantal speurtochten wordt weergegeven."
                },
                questRewardIncludeOrbs: {
                    label: "Inclusief lichtbollen",
                    description: "Voeg speurtochten met lichtbollen toe wanneer het aantal speurtochten wordt weergegeven."
                },
                questButtonUnclaimed: {
                    label: "Quest-knop Niet-geclaimde indicator",
                    description: "Welk weergavetype moet worden gebruikt voor de niet-geclaimde indicator op de Quest-knop in de serverlijst."
                },
                questButtonBadgeColor: {
                    label: "Quest-knopbadgekleur",
                    description: "De kleur van de Quest-knopbadge in de serverlijst."
                },
                questButtonLeftClickAction: {
                    label: "Linksklikactie",
                    description: "De actie die moet worden uitgevoerd wanneer u met de linkermuisknop op de Quest-knop in de serverlijst klikt."
                },
                questButtonMiddleClickAction: {
                    label: "Middelste klikactie",
                    description: "De actie die moet worden uitgevoerd wanneer u met de middelste muisklik op de Quest-knop in de serverlijst klikt."
                },
                questButtonRightClickAction: {
                    label: "Klik met de rechtermuisknop op actie",
                    description: "De actie die moet worden uitgevoerd wanneer u met de rechtermuisknop op de Quest-knop in de serverlijst klikt."
                },
                fetchingQuests: {
                    label: "Quests ophalen",
                    description: "Haal missies op van Discord."
                },
                fetchingQuestsInterval: {
                    label: "Interval voor het ophalen van speurtochten",
                    description: "Het interval in seconden om Quests van Discord op te halen."
                },
                fetchingQuestsAlert: {
                    label: "Quests-waarschuwing ophalen",
                    description: "Het geluid dat wordt afgespeeld wanneer er nieuwe Quests worden gedetecteerd."
                },
                fetchingQuestsAlertVolume: {
                    label: "Waarschuwingsvolume voor speurtochten ophalen",
                    description: "Het volume van het waarschuwingsgeluid wanneer er nieuwe Quests worden gedetecteerd."
                },
                restyleQuests: {
                    label: "Restyle-missies",
                    description: "Pas het uiterlijk van Quest-tegels aan op de Quests-pagina."
                },
                restyleQuestsUnclaimed: {
                    label: "Restyle-missies niet geclaimd",
                    description: "De kleur van niet-opgeëiste Quest-tegels op de Quests-pagina."
                },
                restyleQuestsClaimed: {
                    label: "Restyle-missies geclaimd",
                    description: "De kleur van de geclaimde Quest-tegels op de Quests-pagina."
                },
                restyleQuestsIgnored: {
                    label: "Restyle-missies genegeerd",
                    description: "De kleur van genegeerde Quest-tegels op de Quests-pagina."
                },
                restyleQuestsExpired: {
                    label: "Restyle-missies verlopen",
                    description: "De kleur van verlopen Quest-tegels op de Quests-pagina."
                },
                restyleQuestsGradient: {
                    label: "Restyle Quests-verloop",
                    description: "Stijl van het verloop dat wordt gebruikt in de Quest-tegels."
                },
                restyleQuestsPreload: {
                    label: "Restyle-missies vooraf laden",
                    description: "Probeer de middelen voor de Quest-tegels vooraf te laden."
                },
                reorderQuests: {
                    label: "Zoekopdrachten opnieuw rangschikken",
                    description: "Sorteer missies op hun status. Laat leeg voor standaardsortering. Een door komma's gescheiden lijst moet de volgende gegevens bevatten: UNCLAIMED, CLAIMED, IGNORED, EXPIRED."
                },
                unclaimedSubsort: {
                    label: "Niet-geclaimde subsoort",
                    description: "Subsorteermethode voor niet-geclaimde missies."
                },
                claimedSubsort: {
                    label: "Geclaimde ondersoort",
                    description: "Subsorteermethode voor geclaimde speurtochten."
                },
                ignoredSubsort: {
                    label: "Genegeerde subsoort",
                    description: "Subsorteermethode voor genegeerde missies."
                },
                expiredSubsort: {
                    label: "Verlopen subsoort",
                    description: "Subsorteermethode voor verlopen missies."
                },
                unclaimedUnignoredQuests: {
                    label: "Niet-opgeëiste, niet-genegeerde missies",
                    description: "Houdt het aantal niet-geclaimde en niet-genegeerde missies bij."
                },
                onQuestsPage: {
                    label: "Op Quests-pagina",
                    description: "Of de gebruiker zich momenteel op de Quests-pagina bevindt."
                },
                triggerQuestsRerender: {
                    label: "Triggermissies opnieuw weergeven",
                    description: "Activeer een nieuwe weergave van de Quests-pagina door deze instelling te wijzigen."
                },
                ignoredQuestProfile: {
                    label: "Genegeerd Quest-profiel",
                    description: "Het profiel dat wordt gebruikt voor genegeerde missies."
                },
                rememberQuestPageSort: {
                    label: "Onthoud Quest-paginasortering",
                    description: "Onthoud de laatst gebruikte sortering op de Quests-pagina."
                },
                rememberQuestPageFilters: {
                    label: "Onthoud Quest-paginafilters",
                    description: "Onthoud de laatst gebruikte filters op de Quests-pagina."
                },
                lastQuestPageSort: {
                    label: "Laatste zoektochtpagina sorteren",
                    description: "Onthoud de laatst gebruikte sortering op de Quests-pagina."
                },
                lastQuestPageFilters: {
                    label: "Laatste Quest-paginafilters",
                    description: "Onthoud de laatst gebruikte filters op de Quests-pagina."
                },
                ignoredQuestIDs: {
                    label: "Genegeerde Quest-ID's",
                    description: "Een reeks Quest-ID's die worden genegeerd."
                },
                resumeQuestIDs: {
                    label: "Quest-ID's hervatten",
                    description: "Een reeks Quest-ID's die op de achtergrond automatisch worden aangevuld."
                }
            },
            button: {
                questInProgressWithTime: "Voltooien ({{remainTime}})",
                completing: "Voltooien",
                resume: "Hervatten (~{{remainTime}})",
                complete: "Voltooi {{remainTime}}",
                completeImmediate: "Voltooid (onmiddellijk)",
                completed: "Voltooid"
            },
            reward: {
                orbs: "{{completingText}} voor {{orbQuantity}} lichtbollen.",
                article: "{{completingText}} voor {{itemName}}.",
                unrecognized: "{{completingText}} voor een niet-herkend beloningstype."
            },
            notification: {
                completed: {
                    title: "Zoektocht voltooid",
                    body: "De {{questName}} Quest is voltooid."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Vervang alle vraagtekens door de gekozen tekenreeks, als het bericht alleen vraagtekens bevat.",
            option: {
                replace: {
                    label: "Vervangen",
                    description: "Vervangen door"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Voegt een knop voor snelle vermelding toe aan de berichtactiebalk",
            tooltip: "Snelle vermelding"
        },
        quickReply: {
            name: "QuickReply",
            description: "Berichten beantwoorden (Ctrl+Omhoog/Omlaag) en bewerken (Ctrl+Shift+Omhoog/Omlaag) via sneltoetsen",
            option: {
                shouldMention: {
                    label: "Moet vermelden",
                    description: "Standaard ping-antwoord",
                    noReplyMentionPlugin: "Volg de NoReplyMention-plug-in (indien ingeschakeld)",
                    enabled: "Ingeschakeld",
                    disabled: "Gehandicapt"
                },
                ignoreBlockedAndIgnored: {
                    label: "Negeren Geblokkeerd en genegeerd",
                    description: "Negeer berichten van geblokkeerde/genegeerde gebruikers tijdens het navigeren"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Schakel snel tussen thema's met behulp van sneltoetsen.",
            about: {
                title: "Bindingen",
                description: "Gebruik Ctrl/Cmd+Shift+pijlen om te navigeren (links/rechts: thema's doorlopen, omhoog: inschakelen, omlaag: uitschakelen).",
                reload: "Druk op Ctrl/Cmd+Shift+Alt om de themalijst opnieuw te laden."
            },
            modal: {
                added: "{{count}} thema{{s}} toegevoegd",
                removed: "{{count}} thema{{s}} verwijderd",
                reloaded: "{{themeCount}} thema's opnieuw geladen",
                addedLocal: "{{count}} lokaal thema{{s}} toegevoegd",
                removedLocal: "{{count}} lokaal thema{{s}} verwijderd",
            },
            option: {
                includeLocal: {
                    label: "Lokaal opnemen",
                    description: "Voeg lokale thema's toe"
                },
                includeOnline: {
                    label: "Online opnemen",
                    description: "Voeg online thema's toe"
                },
                sortOrder: {
                    label: "Sorteervolgorde",
                    description: "Sorteermethode",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Recent"
                },
                autoRefresh: {
                    label: "Automatisch vernieuwen",
                    description: "Themalijst automatisch vernieuwen wanneer er wijzigingen worden gedetecteerd"
                },
                showNotifications: {
                    label: "Toon meldingen",
                    description: "Toon meldingen wanneer thema's worden toegevoegd/verwijderd"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Voegt de mogelijkheid toe om van een bericht een inspirerende quote-afbeelding te maken",
            context: {
                quote: "Citaat"
            },
            modal: {
                title: "Vang ze in 4k",
                grayscale: "Grijstinten",
                export: "Exporteren",
                send: "Versturen",
                saveAsGIF: "Opslaan als GIF",
                saveDescription: "Slaat/verzendt de afbeelding op als GIF in plaats van als PNG",
                showWatermark: "Toon watermerk",
                watermarkText: "Watermerktekst (max. 32 tekens)"
            },
            option: {
                quoteFont: {
                    label: "Citaat lettertype",
                    description: "Lettertype voor citaattekst (auteur/gebruikersnaam gebruik altijd M PLUS afgerond 1c)",
                    mPlusRounded: "M PLUS Afgerond 1c",
                    openSans: "Sans openen",
                    momoSignature: "Momo-handtekening",
                    lora: "Lora",
                    merriWeather: "Merriweer"
                },
                watermark: {
                    label: "Watermerk",
                    description: "Aangepaste watermerktekst (max. 32 tekens)"
                },
                grayscale: {
                    label: "Grijstinten",
                    description: "Schakel grijstinten standaard in"
                },
                showWatermark: {
                    label: "Toon watermerk",
                    description: "Standaard watermerk weergeven"
                },
                saveAsGif: {
                    label: "Opslaan als GIF",
                    description: "Standaard opslaan als GIF"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Voegt een knop toe naast de knop Dempen om deel te nemen aan een willekeurig spraakgesprek.",
            tooltip: "Willekeurige stem",
            context: {
                label: "Stemstatusmodificator",
                amountLabel: "GEBRUIKERSBEDRAG",
                spacesLabel: "RUIMTEN OVER",
                voiceLabel: "STEMLIMIET",
                selfLabel: "ZELF INSTELLINGEN",
                select: {
                    servers: "Selecteer Servers",
                    list: "Selecteer Lijst",
                    filters: "Selecteer Filters",
                    amount: "Gebruikersbedrag",
                    userAmount: "{{amount}} gebruiker{{s}}",
                    parameters: "Parameters",
                    moreThan: "Meer dan",
                    lessThan: "Minder dan",
                    equalTo: "Gelijk aan",
                    spaces: "Spaties links",
                    voice: "Stemlimiet"
                },
                filter: {
                    muted: "Gedempt",
                    deafened: "Verdoofd",
                    camera: "Camera",
                    stream: "Stroom",
                    includeFilters: "Inclusief filters",
                    avoidFilters: "Vermijd filters"
                },
                reset: {
                    list: "Lijst opnieuw instellen"
                },
                voice: {
                    label: "Stemopties",
                    auto: {
                        mute: "Automatisch dempen",
                        deafen: "Auto doof",
                        camera: "Automatische camera",
                        stream: "Automatische stream",
                        leaveWhenEmpty: "Verlaten wanneer leeg",
                        navigate: "Automatisch navigeren",
                        stage: "Vermijd fase",
                        afk: "Vermijd AFK"
                    }
                },
                invalid: {
                    server: "Ongeldige server"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Bewerking gebruikersbedrag",
                    description: "Selecteer een bewerking voor het aantal gebruikers"
                },
                userAmount: {
                    label: "Gebruikersbedrag",
                    description: "Selecteer het aantal gebruikers"
                },
                spacesLeftOperation: {
                    label: "Resterende ruimtes Bediening",
                    description: "Selecteer een bewerking voor het maximale aantal gebruikers"
                },
                spacesLeft: {
                    label: "Spaties links",
                    description: "Selecteer het maximale aantal gebruikers"
                },
                vcLimitOperation: {
                    label: "Bediening spraakkanaallimiet",
                    description: "Selecteer een bewerking voor het spraakkanaal."
                },
                vcLimit: {
                    label: "Spraakkanaallimiet",
                    description: "Selecteer een spraakkanaallimiet"
                },
                servers: {
                    label: "Servers",
                    description: "Servers die inbegrepen zijn"
                },
                autoNavigate: {
                    label: "Automatisch navigeren",
                    description: "Navigeer automatisch naar het spraakkanaal."
                },
                autoCamera: {
                    label: "Automatische camera",
                    description: "Schakelt de camera automatisch in"
                },
                autoStream: {
                    label: "Automatische stream",
                    description: "Schakelt de stream automatisch in"
                },
                selfMute: {
                    label: "Automatisch dempen",
                    description: "Dempt automatisch uw microfoon wanneer u zich aansluit bij een spraakkanaal."
                },
                selfDeafen: {
                    label: "Auto doof",
                    description: "Dempt automatisch uw audio wanneer u zich aansluit bij een spraakkanaal."
                },
                leaveEmpty: {
                    label: "Verlaten wanneer leeg",
                    description: "Vindt een willekeurige oproep wanneer de voicechat leeg is."
                },
                avoidStages: {
                    label: "Vermijd fase",
                    description: "Vermijdt deelname aan podiumstemkanalen."
                },
                avoidAfk: {
                    label: "Vermijd AFK",
                    description: "Vermijdt deelname aan AFK-spraakkanalen."
                },
                video: {
                    label: "Video",
                    description: "Zoekt naar gebruikers met hun video ingeschakeld"
                },
                stream: {
                    label: "Stroom",
                    description: "Zoekt naar gebruikers die streamen"
                },
                mute: {
                    label: "Stom",
                    description: "Zoekt naar gebruikers die gedempt zijn"
                },
                deafen: {
                    label: "Doof",
                    description: "Zoekt naar gebruikers die doof zijn"
                },
                includeStates: {
                    label: "Inclusief filters",
                    description: "Optie om staten op te nemen"
                },
                avoidStates: {
                    label: "Vermijd filters",
                    description: "Optie om staten te vermijden"
                }
            },
            alert: {
                failed: "Kan geen spraakkanaal vinden!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Decodeert Reageer foutcodes naar voor mensen leesbare berichten."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Lees alle servermeldingen met één klik op de knop!",
            button: "Lees alles"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Ctrl+Tab tussen meest recent gebruikte DM's (Ctrl+Shift+Tab omgekeerd)",
            option: {
                visualStyle: {
                    label: "Visuele stijl",
                    description: "Visuele indicatorstijl tijdens het fietsen",
                    overlay: "Overlay (Alt+Tab-stijl)",
                    toast: "Toast (statusmelding)",
                    off: "Uit"
                },
                overlayMode: {
                    label: "Overlay-modus",
                    description: "Overlay-inhoud",
                    row: "Rij van recent",
                    current: "Alleen actueel",
                },
                amountOfUsers: {
                    label: "Aantal gebruikers",
                    description: "Aantal gebruikers dat in overlay moet worden weergegeven"
                },
                overlayRowLength: {
                    label: "Overlay-rijlengte",
                    description: "Aantal recente DM's dat in rij moet worden weergegeven"
                },
                overlayShowAvatars: {
                    label: "Overlay Toon avatars",
                    description: "Toon gebruikersavatars in overlay"
                },
                toastDurationMs: {
                    label: "Toastduur (ms)",
                    description: "Duur van het statusbericht"
                },
                clearRdms: {
                    label: "RDMS-lijst wissen",
                    description: "Hulpprogramma voor testen: Wis de RDM-lijst",
                    toast: "RMDS-geschiedenis gewist",
                    button: "Wis de RDM-geschiedenis"
                }
            },
            modal: {
                unknown: "Onbekend",
                dm: "DM",
                group: "Groeps-DM",
                channel: "Kanaal",
                switchingTo: "Overschakelen naar: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Waarschuwt u wanneer een vriend, groepschat of server u verwijdert.",
            option: {
                notices: {
                    label: "Mededelingen",
                    description: "Laat ook bovenaan uw scherm een ​​melding zien wanneer u deze verwijdert (gebruik deze als u geen meldingen wilt missen)."
                },
                offlineRemovals: {
                    label: "Offline verhuizingen",
                    description: "Wanneer u Discord start, krijgt u een melding als u offline bent verwijderd."
                },
                friends: {
                    label: "Vrienden",
                    description: "Geef een melding wanneer een vriend je verwijdert"
                },
                friendRequestCancels: {
                    label: "Vriendschapsverzoek wordt geannuleerd",
                    description: "Geef een melding wanneer een vriendschapsverzoek is geannuleerd"
                },
                servers: {
                    label: "Servers",
                    description: "Waarschuw bij verwijdering van een server"
                },
                groups: {
                    label: "Groepen",
                    description: "Melding wanneer verwijderd uit een groepschat"
                }
            },
            notification: {
                removedFriend: "{{user}} heeft je verwijderd als vriend.",
                cancelledFriendRequest: "Een vriendschapsverzoek van {{user}} is verwijderd.",
                removedFromServer: "U bent verwijderd van de server {{server}}.",
                removedFromGroup: "Je bent verwijderd uit de groep {{group}}.",
                noLongerGroup: "Je maakt niet langer deel uit van de groep {{group}}.",
                noLongerServer: "U bevindt zich niet langer op de server {{server}}.",
                noLongerFriend: "Je bent niet langer vrienden met {{user}}.",
                friendRequestRevoked: "Vriendschapsverzoek van {{user}} is ingetrokken.",
                ok: "OK"
            }
        },
        remix: {
            name: "Remix",
            description: "Voegt een 'Remix'-optie toe aan het rechtermuisknopmenu van de knop voor het uploaden van bestanden. Deze optie opent een afbeelding in een eenvoudige afbeeldingseditor en stelt u in staat de bewerkte afbeelding rechtstreeks naar de chat te sturen.",
            label: "Remixen",
            button: {
                send: "Versturen",
                close: "Dichtbij",
                brush: "Borstel",
                erase: "Wissen",
                crop: "Gewas",
                shape: "Vorm",
                reset: "Opnieuw instellen",
                clear: "Duidelijk"
            },
            editor: {
                choose: "Kies een afbeelding",
                browse: "Blader",
                rectangle: "Rechthoek",
                ellipse: "Ellips",
                line: "Lijn",
                arrow: "Pijl",
                fill: "Vullen"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Hiermee kunt u berichten snel herhalen. Als u Shift ingedrukt houdt terwijl u op de optie Herhalen klikt, wordt het bericht beantwoord.",
            button: "Herhalen (klik) / Herhalen en beantwoorden (Shift + klik)",
            context: {
                repeat: "Herhalen",
                repeatAndReply: "Herhaal en beantwoord"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Vervangt de Google-zoekopdracht door verschillende zoekmachines.",
            option: {
                customEngineName: {
                    label: "Aangepaste motornaam",
                    description: "Naam van de aangepaste zoekmachine"
                },
                customEngineURL: {
                    label: "Aangepaste engine-URL",
                    description: "De URL van uw motor"
                },
                replacementEngine: {
                    label: "Vervangende motor",
                    description: "Vervang door een specifieke zoekmachine in plaats van een menu toe te voegen",
                    off: "Uit",
                    custom: "Aangepaste motor",
                }
            },
            context: {
                label: "Zoek tekst",
                searchWith: "Zoeken met {{name}}"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Bepaal of u altijd of nooit gepingd wilt worden bij berichtantwoorden, met een whitelist-functie",
            option: {
                alwaysPingOnReply: {
                    label: "Altijd Ping On Antwoord",
                    description: "Ontvang altijd een ping als iemand op uw berichten reageert"
                },
                replyPingWhitelist: {
                    label: "Antwoord Ping Witte lijst",
                    description: "Door komma's gescheiden lijst met gebruikers-ID's waarvan u altijd antwoordpings ontvangt"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Toont een tijdstempel bij voorbeelden van beantwoorde berichten"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Onthul alle spoilers in een bericht door Ctrl-klik op een spoiler, of in de chat met Ctrl+Shift-klik"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Voegt ImageSearch toe aan contextmenu's van afbeeldingen",
            context: {
                label: "Zoek afbeelding",
                all: "Zoek alles"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Beoordeel andere gebruikers (voegt een nieuwe sectie toe aan profielen)",
            notification: {
                newReview: "Je hebt nieuwe recensies op je profiel!",
                auth: {
                    error: "Er is een fout opgetreden tijdens het autoriseren",
                    successfully: "Succesvol ingelogd!",
                    failed: "Autoriseren is niet gelukt",
                    review: "Geef toestemming om een ​​recensie toe te voegen.",
                    opening: "Autorisatievenster openen...",
                    need: "U moet toestemming geven om gebruikers te beoordelen!"
                },
                error: {
                    fast: "U verzendt verzoeken te snel. Wacht een paar seconden en probeer het opnieuw.",
                    fetching: "Er is een fout opgetreden bij het ophalen van beoordelingen.",
                    action: {
                        failed: "Kan gebruiker {{action}} niet gebruiken",
                        success: "Gebruiker is {{action}}ed"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Weet je het zeker?",
                    description: "Wilt u deze recensie echt verwijderen?",
                    confirm: "Verwijderen",
                    cancel: "Laat maar zitten",
                    error: "Om beoordelingen te verwijderen moet u ingelogd zijn.",
                },
                report: {
                    title: "Weet je het zeker?",
                    description: "Wilt u deze review echt melden?",
                    confirm: "Rapport",
                    cancel: "Laat maar zitten",
                    error: "Om beoordelingen te kunnen rapporteren moet u ingelogd zijn.",
                },
                block: {
                    title: "Weet je het zeker?",
                    description: "Wilt u deze gebruiker echt blokkeren? Je zult hun beoordelingen niet meer zien.",
                    confirm: "Blok",
                    cancel: "Laat maar zitten",
                    error: "U moet ingelogd zijn om gebruikers te blokkeren.",
                },
                blocked: {
                    title: "Geblokkeerde gebruikers",
                    auth: "U bent niet ingelogd bij ReviewDB!",
                    noBlocked: "Er zijn geen gebruikers geblokkeerd.",
                    fetch: "Er is een fout opgetreden bij het ophalen van geblokkeerde gebruikers."
                },
                reviews: {
                    title: "'s beoordelingen",
                    noUser: "Het lijkt erop dat nog niemand deze gebruiker heeft beoordeeld. Jij zou de eerste kunnen zijn!",
                    noServer: "Het lijkt erop dat nog niemand deze server heeft beoordeeld. Jij zou de eerste kunnen zijn!"
                }
            },
            button: {
                appeal: "Hoger beroep",
                ok: "OK",
                more: "Lees meer",
                reply: "Reageer op @{{user}}",
                update: "Review bijwerken voor @{{user}}",
                review: "Beoordeel @{{user}}"
            },
            context: {
                view: "Bekijk beoordelingen",
                blocked: "Je hebt deze gebruiker geblokkeerd",
                delete: "Beoordeling verwijderen",
                report: "Rapportbeoordeling",
                block: "Gebruiker blokkeren",
                unblock: "Deblokkeer gebruiker",
                reply: "Antwoord beoordeling"
            },
            option: {
                authorize: {
                    label: "Autoriseren",
                    button: "Autoriseer met ReviewDB"
                },
                notifyReviews: {
                    label: "Breng beoordelingen op de hoogte",
                    description: "Informeer over nieuwe beoordelingen bij het opstarten"
                },
                showWarning: {
                    label: "Toon waarschuwing",
                    description: "Toon een waarschuwing om respectvol te zijn bovenaan de recensieslijst"
                },
                hideTimestamps: {
                    label: "Tijdstempels verbergen",
                    description: "Verberg tijdstempels voor recensies"
                },
                hideBlockedUsers: {
                    label: "Verberg geblokkeerde gebruikers",
                    description: "Verberg beoordelingen voor geblokkeerde gebruikers"
                },
                buttons: {
                    label: "Knoppen",
                    manageBlocked: "Beheer geblokkeerde gebruikers",
                    support: "Ondersteuning van ReviewDB-ontwikkeling",
                    website: "ReviewDB-website",
                    server: "ReviewDB-ondersteuningsserver"
                }
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Geeft magneetkoppelingen weer zoals berichtkoppelingen",
            unknown: "onbekende bestandsnaam"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Voegt waar mogelijk de kleur van de bovenste rol toe",
            option: {
                chatMentions: {
                    label: "Chatvermeldingen",
                    description: "Toon rolkleuren in chatvermeldingen (ook in het berichtenvenster)"
                },
                memberList: {
                    label: "Ledenlijst",
                    description: "Toon rolkleuren in de rolkoppen van de ledenlijst"
                },
                voiceUsers: {
                    label: "Spraakgebruikers",
                    description: "Toon rolkleuren in de voicechat-gebruikerslijst"
                },
                reactorsList: {
                    label: "Reactorenlijst",
                    description: "Toon rolkleuren in de reactorenlijst"
                },
                pollResults: {
                    label: "Enquêteresultaten",
                    description: "Toon rolkleuren in de enquêteresultaten"
                },
                colorChatMessages: {
                    label: "Kleurchatberichten",
                    description: "Kleur chatberichten op basis van de rolkleur van de auteur"
                },
                messageSaturation: {
                    label: "Berichtverzadiging",
                    description: "Intensiteit van berichtkleuring"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Bewerk het type en de inhoud van elke Rich Presence",
            option: {
                replacedAppIds: {
                    label: "App-ID's vervangen",
                }
            },
            modal: {
                tutorial: {
                    title: "ID's van momenteel actieve activiteiten",
                    noRunning: "Geen hardloopactiviteiten",
                    available: "Beschikbare variabelen",
                    variableText: "In alle velden (behalve de stream-URL) kun je variabelen invoeren die automatisch worden vervangen door hun originele inhoud:",
                    more: "Meer details",
                    details: {
                        leave: "Laat een veld leeg om het te laten zoals het is.",
                        set: "Stel een veld in op 'null' om het in de aanwezigheid te verbergen.",
                        reload: "Mogelijk moet je Discord opnieuw laden voordat de wijzigingen worden toegepast."
                    }
                },
                settings: {
                    applyEdits: "Pas bewerkingen toe op de app",
                    addNewApp: "Nieuwe applicatie toevoegen",
                    appId: "Applicatie-ID",
                    invalidAppId: "Ongeldige applicatie-ID",
                    newActivityType: "Nieuw activiteitstype",
                    activityTypes: {
                        playing: "Spelen",
                        watching: "Kijken",
                        listening: "Luisteren",
                        competing: "Concurreren",
                        streaming: "Streamen"
                    },
                    streamUrl: "Stream-URL (moet YouTube of Twitch zijn)",
                    invalidStreamUrl: "Ongeldige stream-URL",
                    newName: "Nieuwe naam",
                    newDetails: "Nieuwe details",
                    newState: "Nieuwe staat",
                    largeImage: "Grote afbeelding",
                    smallImage: "Klein beeld",
                    text: "Tekst",
                    url: "URL",
                    firstLine: "(eerste regel)",
                    secondLine: "(tweede regel)",
                    thirdLine: "(derde regel)",
                    alsoThirdLine: "(ook derde regel)",
                    hideAssets: "Items verbergen (grote en kleine afbeeldingen)",
                    hideTimestamps: "Tijdstempels verbergen"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Geeft statistieken weer over uw activiteit als RPC",
            option: {
                assetURL: {
                    label: "Item-URL",
                    description: "De afbeelding die u voor uw RPC moet gebruiken. Als je deze leeg laat, wordt je profielfoto gebruikt"
                },
                rpcTitle: {
                    label: "RPC-titel",
                    description: "De titel van uw RPC"
                },
                statDisplay: {
                    label: "Statistische weergave",
                    description: "Wat moet de RPC weergeven? (Je kunt maar één regel hebben, ik ben er vrij zeker van)",
                    today: "Het aantal berichten dat vandaag is verzonden",
                    alltime: "Het aantal berichten dat ooit is verzonden",
                    listened: "Je meest beluisterde album van de week"
                },
                lastFMApiKey: {
                    label: "Last.fm API-sleutel",
                    description: "Uw Last.fm API-sleutel"
                },
                lastFMUsername: {
                    label: "Last.fm-gebruikersnaam",
                    description: "Uw Last.fm-gebruikersnaam"
                },
                albumCoverImage: {
                    label: "Afbeelding albumomslag",
                    description: "Moet de albumhoesafbeelding worden gebruikt als de RPC-afbeelding? (Als u de Last.fm-weergave hebt gekozen)"
                },
                lastFMStatFormat: {
                    label: "Last.fm Stat-indeling",
                    description: "Hoe moet de Last.fm-statistiek worden geformatteerd? $album wordt vervangen door de albumnaam en $artist wordt vervangen door de artiestennaam"
                }
            },
            noInfo: "Er is momenteel geen informatie :(",
            messagesToday: "Berichten verzonden vandaag: {{count}}",
            messagesAllTime: "Berichten die altijd zijn verzonden: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Exporteer favoriete GIF-URL's",
            toolbox: "Bewaar favoriete GIF's",
            title: "Bewaar favoriete GIF's",
            command: {
                savegifs: {
                    description: "Bewaar alle favoriete GIF-URL's in een tekstbestand"
                },
                saveworkinggifs: {
                    description: "Test alle favoriete GIF's en sla alleen de GIF's op die nog werken"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Toolbox-knop tonen",
                    description: "Knop 'Favoriete GIF's opslaan' weergeven in Plexcord Toolbox (opnieuw laden vereist)"
                }
            },
            toast: {
                save: "GIF's succesvol opgeslagen als {{filename}}",
                failed: "Kan GIF's niet opslaan",
                no: "Geen favoriete GIF's gevonden!",
                testing: "{{count}} GIF's testen, dit kan even duren...",
                noneWorking: "Geen van je opgeslagen GIF's lijkt te werken.",
                saved: "Gefilterde {{broken}} mogelijk kapotte GIF's. {{saved}} werkende GIF's opgeslagen."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Plan dat berichten op een specifiek tijdstip of met vertraging worden verzonden.",
            toolbox: {
                toggle: "Bekijk geplande berichten"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Max. berichten per minuut",
                    description: "Maximaal aantal geplande berichten per kanaal die in dezelfde minuut kunnen worden verzonden."
                },
                checkIntervalSeconds: {
                    label: "Controle-interval (seconden)",
                    description: "Hoe vaak de plug-in controleert of er berichten worden verzonden."
                },
                showNotifications: {
                    label: "Toon meldingen",
                    description: "Toon toastmeldingen wanneer er berichten worden verzonden."
                },
                showPhantomMessages: {
                    label: "Toon fantoomberichten",
                    description: "Toon geplande berichten als fantoomberichten in de chat."
                }
            },
            channelType: {
                unknown: "Onbekend",
                dm: "DM",
                groupDm: "Groeps-DM",
                channel: "Kanaal"
            },
            toast: {
                messageSent: "Gepland bericht verzonden naar {{channel}}",
                messageFailed: "Kan het geplande bericht niet verzenden",
                maxMessagesReached: "Maximaal {{max}} berichten per kanaal per bereikte minuut",
                messageScheduled: "Bericht gepland!",
                messageRemoved: "Gepland bericht verwijderd",
                allCleared: "Alle geplande berichten zijn gewist"
            },
            button: {
                tooltipOn: "Schemamodus AAN (klik om uit te schakelen, klik met de rechtermuisknop voor lijst)",
                tooltipOff: "Schemamodus UIT (klik om in te schakelen, klik met de rechtermuisknop voor lijst)"
            },
            accessory: {
                scheduledFor: "Gepland op {date}{timeLeft}",
                remaining: {
                    days: "{{days}}d {{hours}}h resterend",
                    hours: "{{hours}}h {{minutes}}m resterend",
                    minutes: "{{minutes}}m resterend"
                }
            },
            scheduleModal: {
                title: "Plan bericht",
                schedulingFor: "Planning voor: {{channel}}",
                scheduleType: "Schematype",
                delay: "Vertraging",
                specificTime: "Specifieke tijd",
                delayMinutes: "Vertraging (minuten)",
                dateTime: "Datum en tijd",
                error: {
                    invalidDelay: "Voer een geldige vertraging in (minimaal 1 minuut)",
                    invalidDateTime: "Selecteer een toekomstige datum en tijd"
                },
                schedule: "Schema",
                cancel: "Annuleren"
            },
            viewModal: {
                title: "Geplande berichten",
                clearAll: "Alles wissen",
                noMessages: "Geen geplande berichten",
                delete: "Verwijderen",
                close: "Dichtbij"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Oplossing voor het vervelende 'We hebben het vergrootglas laten vallen!' fout.",
            notPerfect: "Deze oplossing is niet perfect, dus het kan zijn dat u de zoekbalk opnieuw moet laden om de problemen op te lossen.",
            paragraph1: "Discord staat slechts een maximale offset van 5000 toe (dit is de oorzaak van de vergrootglasfout).",
            paragraph2: "This means that you can only see precisely 5000 messages into the past, and 5000 messages into the future (when sorting by old).",
            paragraph3: "Deze plug-in springt gewoon naar de tegenovergestelde sorteermethode om de beperking van Discord te omzeilen,",
            paragraph4: "maar als er een groot zoekresultaat is en u probeert een bericht te bekijken dat met beide sorteermethoden niet kan worden verkregen,",
            paragraph5: "de plug-in toont eenvoudigweg offset 0 (nieuwste of oudste bericht, afhankelijk van de sorteermethode)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Speel altijd de geheime versie van de Discord-ringtone (behalve tijdens speciale ringtone-evenementen)",
            option: {
                onlySnow: {
                    label: "Alleen tijdens Snow Ringtone-evenement",
                    description: "Speel alleen het Sneeuwhalatie-thema"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Schakelt de experimentele samenvattingenfunctie van Discord op elke server in, waarbij door AI gegenereerde samenvattingen van gesprekken worden weergegeven",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Samenvatting Vervaldatumdrempel (dagen)",
                    description: "De tijd in dagen voordat een samenvatting wordt verwijderd. Houd er rekening mee dat er per kanaal slechts maximaal 50 samenvattingen worden bijgehouden"
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Voegt het huidige kanaal toe aan de pop-up met de doorstuurlijst"
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Verzend tijdstempels eenvoudig via de chatboxknop en tekstsnelkoppelingen. Lees de uitgebreide beschrijving!",
            sample: {
                paragraph1: "Als u snel tijdstempels wilt verzenden, neemt u tijdstempels op die zijn opgemaakt als 'HH:MM' (inclusief de backticks!) in uw bericht",
                paragraph2: "Zie hieronder voor voorbeelden.\nAls je iets specifiekers nodig hebt, gebruik dan de Datumknop in de chatbalk!",
                examples: "Voorbeelden:"
            },
            modal: {
                title: "Tijdstempelkiezer",
                light: "Licht",
                dark: "Donker",
                format: "Tijdstempelformaat",
                preview: "Voorbeeld",
                insert: "Invoegen",
                insertTimestamp: "Tijdstempel invoegen"
            },
            option: {
                replaceMessageContents: {
                    label: "Vervang berichtinhoud",
                    description: "Vervang tijdstempels in berichtinhoud"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Hiermee kunt u informatie over een server bekijken",
            context: {
                serverInfo: "Serverinfo"
            },
            option: {
                sorting: {
                    label: "Sorteren",
                    description: "Gebruikersnaam of, indien van toepassing, Weergavenaam",
                    username: "Gebruikersnaam",
                    displayname: "Weergavenaam",
                    none: "Sorteer niet"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Serverinfo",
                    friends: "Vrienden",
                    mutualUsers: "Wederzijdse gebruikers",
                    blockedUsers: "Geblokkeerde gebruikers",
                    ignoredUsers: "Genegeerde gebruikers"
                },
                owner: "Server-eigenaar",
                loading: "Laden...",
                createdAt: "Gemaakt op",
                joinedAt: "Aangesloten bij",
                vanityLink: "Vanity-link",
                preferredLocale: "Voorkeursland",
                verification: {
                    level: "Verificatieniveau",
                    none: "Geen",
                    low: "Laag",
                    medium: "Medium",
                    high: "Hoog",
                    highest: "Hoogste"
                },
                serverBoosts: "Serverboosts",
                channels: "Kanalen",
                roles: "Rollen"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Voeg het aantal online vrienden of het aantal servers toe aan de serverlijst",
            friends: "Vrienden",
            servers: "Servers",
            option: {
                mode: {
                    label: "Modus",
                    description: "Modus voor weergave in serverlijst",
                    friend: "Alleen online vrienden tellen mee",
                    server: "Alleen servertelling",
                    both: "Zowel de server als de online vrienden tellen mee"
                },
                useCompact: {
                    label: "Gebruik de compacte modus",
                    description: "Zorgt ervoor dat de indicator alleen met tekst verschijnt"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Navigeer beter door uw servers met een snelle zoekknop",
            tooltip: "Zoekopdracht"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Brengt codeblokken in VS Code-stijl naar Discord, mogelijk gemaakt door Shiki",
            option: {
                theme: {
                    label: "Thema",
                    description: "Standaardthema's"
                },
                customTheme: {
                    label: "Aangepast thema",
                    description: "Een link naar een aangepast VS Code-thema",
                    mustURL: "Moet een geldige URL zijn",
                    mustJSON: "Moet een JSON-bestand zijn"
                },
                tryHljs: {
                    label: "Terugval op Hljs",
                    description: "Gebruik de lichtere standaard Discord-markeerstift en -thema.",
                    never: "Nooit",
                    secondary: "Geef de voorkeur aan Shiki in plaats van Highlight.js",
                    primary: "Geef de voorkeur aan Highlight.js in plaats van Shiki",
                    always: "Altijd"
                },
                useDevIcon: {
                    label: "Gebruik Devicon voor taalpictogrammen",
                    description: "Hoe taalpictogrammen op codeblokken worden weergegeven",
                    disabled: "Gehandicapt",
                    colorless: "Kleurloos",
                    colored: "Gekleurd"
                },
                bgOpacity: {
                    label: "Achtergronddekking",
                    description: "Achtergronddekking"
                }
            },
            button: {
                copy: "Kopiëren",
                copied: "Gekopieerd!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Toon altijd alle berichtknoppen, ongeacht of u de Shift-toets ingedrukt houdt of niet.",
            option: {
                noShiftDelete: {
                    label: "Geen Shift-verwijdering",
                    description: "Verwijder de vereiste om shift ingedrukt te houden voor het verwijderen van een bericht."
                },
                noShiftPin: {
                    label: "Geen schakelpin",
                    description: "Verwijder de vereiste om shift ingedrukt te houden voor het vastzetten van een bericht."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Toont de badges van de auteur van het bericht naast hun naam in de chat.",
            option: {
                showPlexcordDonor: {
                    label: "Laat de Plexcord-donorbadge zien",
                    description: "Schakel in om Plexcord-donorbadges in de chat te tonen."
                },
                plexcordDonorPosition: {
                    label: "Positie van Plexcord-donorbadge",
                    description: "De positie van de Plexcord-donorbadges."
                },
                showPlexcordContributor: {
                    label: "Laat de Plexcord-bijdragersbadge zien",
                    description: "Schakel dit in om Plexcord Contributor-badges in de chat weer te geven."
                },
                plexcordContributorPosition: {
                    label: "Positie van Plexcord-bijdragerbadge",
                    description: "De positie van de Plexcord Contributor-badges."
                },
                showDiscordProfile: {
                    label: "Toon Discord-profielbadge",
                    description: "Schakel in om Discord-profielbadges in de chat weer te geven."
                },
                discordProfilePosition: {
                    label: "Discord-profielbadgepositie",
                    description: "De positie van de Discord-profielbadges."
                },
                showDiscordNitro: {
                    label: "Toon Discord Nitro-badge",
                    description: "Schakel in om Discord Nitro-badges in de chat te tonen."
                },
                discordNitroPosition: {
                    label: "Discord Nitro-badgepositie",
                    description: "De positie van de Discord Nitro-badges."
                },
                badgeSettings: {
                    label: "Badge-instellingen",
                    description: "Configureer de positie van andere badges die in de chat worden weergegeven.",
                    modal: "Versleep de badges om ze opnieuw te ordenen; u kunt klikken om een ​​specifiek badgetype in of uit te schakelen."
                }
            },
            badge: {
                plexcord: "Donateurbadge van Plexcord",
                contributor: "Plexcord-bijdragersbadge",
                discordProfile: "Discord-profielbadges (HypeSquad, Discord Staff, Active Developer, etc.)",
                nitro: "Nitro-badge",
                staff: "Discord-staf",
                partner: "Eigenaar van een partnerserver",
                events: "HypeSquad-evenementen",
                bravery: "HypeSquad-moed",
                brilliance: "HypeSquad-briljantie",
                balance: "HypeSquad-balans",
                bugHunter: "Onenigheid Bug Hunter",
                earlyVerifiedBotDeveloper: "Vroeg geverifieerde botontwikkelaar",
                earlySupporter: "Vroege supporter",
                moderatorProgram: "Moderator Programma Alumni"
            },
            modal: {
                plexcordContributor: "Plexcord-bijdrager",
                discordNitro: "Onenigheid Nitro",
                basic: "Basis",
                classic: "Klassiek"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Toon verbonden accounts in gebruikerspop-outs",
            option: {
                iconSize: {
                    label: "Pictogramgrootte",
                    description: "Pictogramgrootte (px)"
                },
                iconSpacing: {
                    label: "Pictogramafstand",
                    description: "Pictogrammarge",
                    compact: "Compact",
                    cozy: "Knus",
                    roomy: "Ruim"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Geef kanalen weer waartoe u geen toegang heeft.",
            tooltip: "Verborgen kanaal",
            option: {
                channelStyle: {
                    label: "Kanaalstijl",
                    description: "De stijl die wordt gebruikt om verborgen kanalen weer te geven.",
                    classic: "Klassiek",
                    muted: "Gedempt",
                    showUnreads: "Toon ongelezen",
                    mutedWithUnreads: "Gedempt en ongelezen berichten weergeven"
                },
                showMode: {
                    label: "Toon modus",
                    description: "De modus die wordt gebruikt om verborgen kanalen weer te geven.",
                    lock: "Eenvoudige stijl met in plaats daarvan een slotpictogram",
                    hidden: "Gedempte stijl met verborgen oogpictogram aan de rechterkant",
                    lockIconRight: "Vergrendelingspictogram aan de rechterkant"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Standaard vervolgkeuzelijst Toegestane gebruikers en rollen",
                    description: "Of de vervolgkeuzelijst met toegestane gebruikers en rollen op verborgen kanalen standaard geopend moet zijn"
                }
            },
            channelType: {
                text: "tekst",
                announcement: "aankondiging",
                forum: "forum",
                voice: "stem",
                stage: "fase"
            },
            sortOrder: {
                latestActivity: "Laatste activiteit",
                creationDate: "Aanmaakdatum"
            },
            forumLayout: {
                default: "Niet ingesteld",
                list: "Lijstweergave",
                grid: "Galerijweergave"
            },
            videoQuality: {
                auto: "Automatisch",
                full: "720p"
            },
            modal: {
                hidden: "verborgen",
                locked: "vergrendeld",
                threads: "draden",
                posts: "berichten",
                messages: "berichten",
                post: "na",
                message: "bericht",
                unknown: "onbekend",
                permissionDetails: "Toestemmingsdetails",
                thisIsA: "Dit is een {{status}} {{channelType}} kanaal",
                canNotSee: "Je kunt de {{type}} van dit kanaal niet zien.",
                guidelines: "Mogelijk ziet u echter de richtlijnen:",
                lastCreated: "Laatst {{type}} gemaakt:",
                lastPin: "Pincode laatste bericht:",
                threadSlowmode: "Standaard thread slowmode:",
                slowmode: "Slowmodus:",
                bitrate: "Bitsnelheid:",
                region: "Regio:",
                automatic: "Automatisch",
                videoQuality: "Videokwaliteitmodus:",
                inactiveArchiveDuration: "Standaard inactiviteitsduur vóór archivering {{type}}",
                defaultLayout: "Standaard lay-out:",
                defaultSort: "Standaard sorteervolgorde:",
                defaultReaction: "Standaard reactie-emoji:",
                requireTag: "Voor berichten op dit forum moet een tag worden ingesteld.",
                availableTags: "Beschikbare labels:",
                allowedUsersAndRoles: "Toegestane gebruikers en rollen:",
                hideAllowedUsersAndRoles: "Toegestane gebruikers en rollen verbergen",
                viewAllowedUsersAndRoles: "Bekijk toegestane gebruikers en rollen"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Toont verschillende verborgen en alleen voor moderators toegankelijke zaken, ongeacht de machtigingen.",
            option: {
                showTimeouts: {
                    label: "Toon time-outs voor leden in de chat",
                    description: "Toon time-outpictogrammen voor leden in de chat."
                },
                showInvitesPaused: {
                    label: "Toon uitnodigingen onderbroken",
                    description: "Toon de gepauzeerde tooltip voor uitnodigingen in de serverlijst."
                },
                showModView: {
                    label: "Mod-weergave tonen",
                    description: "Toon het contextmenu-item Member Mod View op alle servers."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Voegt een contextmenuoptie toe om insluitingen weer te geven voor links die er geen hebben",
            context: {
                embed: {
                    show: "Toon insluiten",
                    hide: "Insluiting verwijderen"
                }
            },
            error: {
                failed: "Kan niet insluiten",
                noEmbed: "Geen insluitingen gevonden"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Geef elke combinatie van aangepaste bijnamen, bijnamen van vrienden, serverbijnamen, weergavenamen en gebruikersnamen in de chat weer.",
            option: {
                messages: {
                    label: "Berichten",
                    description: "Aangepaste naamindeling weergeven in berichten."
                },
                replies: {
                    label: "Antwoorden",
                    description: "Aangepaste naamindeling weergeven in antwoorden."
                },
                mentions: {
                    label: "Vermeldingen",
                    description: "Geef aangepaste naamindeling weer in vermeldingen."
                },
                typingIndicator: {
                    label: "Type-indicator",
                    description: "Geef de eerste beschikbare naam weer die in uw aangepaste naamnotatie wordt vermeld in de typindicator."
                },
                memberList: {
                    label: "Ledenlijst",
                    description: "Geef de eerste beschikbare naam weer die in uw aangepaste naamnotatie in de ledenlijst wordt vermeld."
                },
                profilePopout: {
                    label: "Profielpop-out",
                    description: "Geef de eerste beschikbare naam weer die wordt vermeld in uw aangepaste naamnotatie in profielpop-outs."
                },
                voiceChannels: {
                    label: "Spraakkanalen",
                    description: "Geef de eerste beschikbare naam weer die wordt vermeld in uw aangepaste naamnotatie in spraakkanalen."
                },
                reactions: {
                    label: "Reacties",
                    description: "Geef de eerste beschikbare naam weer die in uw aangepaste naamnotatie wordt vermeld in reactietooltips, en de volledige naam in reactiepop-outs."
                },
                discriminators: {
                    label: "Discriminatoren",
                    description: "Voeg discriminatoren toe aan gebruikersnamen voor bots. Discriminators zijn verouderd voor gebruikers, maar worden nog steeds gebruikt voor bots. Standaard is de gebruikersnaam van een bot gelijk aan de algemene naam van een gebruiker. Daarom kunnen meerdere bots dezelfde gebruikersnaam hebben. Door discriminatoren toe te voegen, worden ze weer uniek."
                },
                hideDefaultAtSign: {
                    label: "Standaard bij teken verbergen",
                    description: "Verberg het standaard '@'-symbool vóór de naam in vermeldingen en antwoorden. Alleen toegepast als een van beide functies is ingeschakeld."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Kap alle namen af ​​met de Streamer-modus",
                    description: "Kap alle namen af, niet alleen gebruikersnamen, in de Streamer-modus."
                },
                removeDuplicates: {
                    label: "Duplicaten verwijderen",
                    description: "Als een van de namen gelijkwaardig is, verwijdert u deze en laat u alleen de unieke namen over."
                },
                ignoreFonts: {
                    label: "Negeer lettertypen",
                    description: "Gebruik voor de tweede, derde en vierde naam gg sans, ongeacht het aangepaste lettertype van de gebruiker."
                },
                ignoreGradients: {
                    label: "Negeer verlopen",
                    description: "Voor de niet-primaire namen: als de rol een verloop heeft en de onderstaande kleur is ingesteld op 'Rol+-#', gebruik dan de primaire kleur in plaats van het hele verloop, en als deze een Nitro-effect heeft, negeer deze dan volledig."
                },
                animateGradients: {
                    label: "Animeer verlopen",
                    description: "Als de rol een verloop heeft, animeert u deze voor de tweede, derde en vierde naam. Dit wordt uitgeschakeld door 'Negeer verlopen' en verminderde beweging."
                },
                nameSeparator: {
                    label: "Naam scheidingsteken",
                    description: "Het scheidingsteken dat tussen namen moet worden gebruikt. De standaardinstelling is één spatie."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Vriendnaam alleen in directe berichten",
                    description: "Geef alleen de namen van vrienden weer in DM's, en niet op servers."
                },
                customNameOnlyInDirectMessages: {
                    label: "Aangepaste naam alleen in directe berichten",
                    description: "Geef alleen aangepaste namen weer in DM's, en niet op servers."
                },
                includedNames: {
                    label: "Inclusief namen",
                    description: "De volgorde waarin gebruikersnamen, weergavenamen, bijnamen en namen van vrienden worden weergegeven. Gebruik de volgende tijdelijke aanduidingen: {user}, {display}, {nick}, {friend}. Je kunt meerdere naamopties opgeven die je kunt gebruiken als reserve als er één niet beschikbaar is, door ze te scheiden met komma's als volgt: {friend, nick, display}. U kunt maximaal drie voorvoegsels en drie achtervoegsels per naam hebben."
                },
                customNameColor: {
                    label: "Aangepaste naam kleur",
                    description: "De kleur die moet worden gebruikt voor de aangepaste naam die u aan een gebruiker hebt toegewezen, als deze niet de eerste is die wordt weergegeven. Accepteert elke geldige CSS-invoer. Gebruik 'Rol' om de toprolkleuren van de gebruiker, Nitro-effectkleuren of IRCColors-kleuren te volgen, indien ingeschakeld. Gebruik 'Rol+-#' om de helderheid met dat percentage aan te passen (bijvoorbeeld 'Rol+15')"
                },
                friendNameColor: {
                    label: "Naam van vriend Kleur",
                    description: "De kleur die moet worden gebruikt voor de bijnaam van een vriend als deze niet de eerste is die wordt weergegeven. Accepteert elke geldige CSS-invoer. Gebruik 'Rol' om de toprolkleuren van de gebruiker, Nitro-effectkleuren of IRCColors-kleuren te volgen, indien ingeschakeld. Gebruik 'Rol+-#' om de helderheid met dat percentage aan te passen (bijvoorbeeld 'Rol+15')"
                },
                nicknameColor: {
                    label: "Bijnaam Kleur",
                    description: "De kleur die voor de bijnaam moet worden gebruikt als deze niet de eerste is die wordt weergegeven. Accepteert elke geldige CSS-invoer. Gebruik 'Rol' om de toprolkleuren van de gebruiker, Nitro-effectkleuren of IRCColors-kleuren te volgen, indien ingeschakeld. Gebruik 'Rol+-#' om de helderheid met dat percentage aan te passen (bijvoorbeeld 'Rol+15')"
                },
                displayNameColor: {
                    label: "Weergavenaam Kleur",
                    description: "De kleur die voor de weergavenaam moet worden gebruikt als deze niet de eerste is die wordt weergegeven. Accepteert elke geldige CSS-invoer. Gebruik 'Rol' om de toprolkleuren van de gebruiker, Nitro-effectkleuren of IRCColors-kleuren te volgen, indien ingeschakeld. Gebruik 'Rol+-#' om de helderheid met dat percentage aan te passen (bijvoorbeeld 'Rol+15')"
                },
                usernameColor: {
                    label: "Gebruikersnaam Kleur",
                    description: "De kleur die voor de gebruikersnaam moet worden gebruikt als deze niet de eerste is die wordt weergegeven. Accepteert elke geldige CSS-invoer. Gebruik 'Rol' om de toprolkleuren van de gebruiker, Nitro-effectkleuren of IRCColors-kleuren te volgen, indien ingeschakeld. Gebruik 'Rol+-#' om de helderheid met dat percentage aan te passen (bijvoorbeeld 'Rol+15')"
                },
                triggerNameRerender: {
                    label: "Triggernaam opnieuw weergeven",
                    description: "Activeer een herweergave van de naam door deze instelling te wijzigen."
                }
            },
            modal: {
                change: {
                    title: "Wijzig de SMYN-bijnaam"
                },
                add: {
                    title: "Voeg SMYN-bijnaam toe"
                },
                setCustom: "Stel een aangepaste SMYN-bijnaam in voor deze gebruiker. Maak er gebruik van door {custom} op te geven in de SMYN-sjablooninstellingen.",
                nickname: "SMYN-bijnaam",
                reset: "SMYN-bijnaam opnieuw instellen",
                cancel: "Annuleren"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Toont hoe lang de time-out van een gebruiker duurt, in de tooltip van het time-outpictogram of ernaast",
            option: {
                displayStyle: {
                    label: "Weergavestijl",
                    description: "Hoe de time-outduur wordt weergegeven",
                    tooltip: "In de Tooltip",
                    inline: "Naast het time-outpictogram"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Toont de kanalen die verborgen zijn achter de serverbronnen in de kanalenlijst"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Toont de naam van het nummer in plaats van de artiest voor Spotify-activiteit"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Open een ander kanaal of een DM als zijbalk of als pop-out",
            toolbox: {
                label: "Vorige chat openen"
            },
            context: {
                label: "Open zijbalkchat"
            },
            modal: {
                switch: "Schakel tussen kanalen",
                popout: "Pop-out-chat",
                close: "Sluit de zijbalkchat"
            },
            option: {
                persistSidebar: {
                    label: "Blijf zijbalkchat houden",
                    description: "Houd de zijbalkchat open tijdens het opnieuw opstarten van Discord"
                },
                patchCommunity: {
                    label: "Patch-gemeenschap",
                    description: "Patch functies zoals de Kanaalbrowser of het tabblad Leden die communityservers hebben."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Geautomatiseerde vingerafdruk/eindtekst",
            option: {
                name: {
                    label: "Naam",
                    description: "De handtekening die aan het einde van uw berichten wordt toegevoegd"
                },
                textHeader: {
                    label: "Tekstkop",
                    description: "Met welke koptekst moet de tekst worden voorafgegaan"
                },
                showIcon: {
                    label: "Pictogram weergeven",
                    description: "Toon een pictogram voor het schakelen tussen de plug-in in de chatbalk"
                },
                contextMenu: {
                    label: "Contextmenu",
                    description: "Optie toegevoegd om de functionaliteit in het chatinvoercontextmenu te schakelen"
                },
                isEnabled: {
                    label: "Is ingeschakeld",
                    description: "Schakel functionaliteit in"
                }
            },
            tooltip: {
                enable: "Handtekening inschakelen",
                disable: "Handtekening uitschakelen"
            },
            context: {
                enable: "Handtekening inschakelen"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Schakel uw handtekening in",
                    toogle: "Schakel uw handtekening in (standaard is schakelen)",
                    enabled: "Handtekening ingeschakeld",
                    disabled: "Handtekening uitgeschakeld"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Voegt een knop toe aan de chatbalk om het verzenden van een stil bericht in of uit te schakelen.",
            option: {
                persistState: {
                    label: "Volhouden staat",
                    description: "Hoe u de stille berichtenschakelstatus kunt behouden",
                    none: "Niet volhouden (reset bij kanaalwijziging)",
                    channels: "Blijf tussen kanalen",
                    restarts: "Blijf doorgaan tussen kanalen en herstart"
                },
                autoDisable: {
                    label: "Automatisch uitschakelen",
                    description: "Schakel de stille berichtschakelaar automatisch opnieuw uit nadat u er een hebt verzonden"
                }
            },
            tooltip: {
                enable: "Schakel Stil bericht in",
                disable: "Schakel Stil bericht uit"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Verberg uw type-indicator in de chat.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Verberg uw type-indicator in de chat.",
                    toggle: {
                        name: "toggle",
                        description: "Schakel de functionaliteit globaal in, voor het kanaal of voor de gilde.",
                        global: "Globaal",
                        channel: "Kanaal",
                        guild: "Gilde"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Verberg de type-indicatoren van andere gebruikers boven de chatbalk."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Verberg de type-indicatoren van andere gebruikers in de ledenlijst."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Toon een pictogram in de chatbalk om onderweg tussen de plug-ins te schakelen."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Toon een vervolgkeuzelijst in het chatcontextmenu om onderweg de plug-ininstellingen te wijzigen."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Of het typen in DM's/kanalen/gilden standaard moet worden verborgen of niet."
                    }
                }
            },
            content: {
                updated: "Instellingen voor stil typen bijgewerkt.",
                noChanges: "Er zijn geen wijzigingen aangebracht in de instellingen voor stil typen."
            },
            tooltip: {
                hidden: "Typen verborgen ({{location}})",
                visible: "Typen zichtbaar ({{location}})",
                global: "Typen zichtbaar (algemeen)"
            },
            option: {
                enabledGlobally: {
                    label: "Wereldwijd ingeschakeld",
                    description: "Schakel de functionaliteit van uw eigen type-indicator wereldwijd in."
                },
                hideChatBoxTypingIndicators: {
                    label: "Type-indicatoren voor chatbox verbergen",
                    description: "Verberg de type-indicatoren van andere gebruikers boven de chatbalk."
                },
                hideMembersListTypingIndicators: {
                    label: "Ledenlijst verbergen Type-indicatoren",
                    description: "Verberg de type-indicatoren van andere gebruikers in de ledenlijst."
                },
                chatIcon: {
                    label: "Chat-icoon",
                    description: "Toon een pictogram in de chatbalk om de plug-in onderweg te wijzigen."
                },
                chatIconLeftClickAction: {
                    label: "Chatpictogram Linksklikactie",
                    description: "Wat te doen als u met de linkermuisknop op het chatpictogram klikt.",
                    global: "Schakel Globaal typen in",
                    channel: "Schakel Typen voor kanaal in",
                    guild: "Schakel typen voor gilde in",
                    settings: "Open Plugin-instellingen"
                },
                chatIconMiddleClickAction: {
                    label: "Chatpictogram Middelste klikactie",
                    description: "Wat te doen als u met de middelste muisknop op het chatpictogram klikt.",
                    global: "Schakel Globaal typen in",
                    channel: "Schakel Typen voor kanaal in",
                    guild: "Schakel typen voor gilde in",
                    settings: "Open Plugin-instellingen"
                },
                chatIconRightClickAction: {
                    label: "Chatpictogram Klik met de rechtermuisknop op actie",
                    description: "Wat te doen als u met de rechtermuisknop op het chatpictogram klikt.",
                    global: "Schakel Globaal typen in",
                    channel: "Schakel Typen voor kanaal in",
                    guild: "Schakel typen voor gilde in",
                    settings: "Open Plugin-instellingen"
                },
                chatContextMenu: {
                    label: "Chatcontextmenu",
                    description: "Toon een vervolgkeuzelijst in het chatcontextmenu om plug-ininstellingen onderweg te wijzigen."
                },
                defaultHidden: {
                    label: "Standaard verborgen",
                    description: "Indien ingeschakeld, verbergt de plug-in uw typen voor anderen in DM's/kanalen/gilden die niet vermeld staan ​​in 'Uitgeschakelde locaties' hieronder. Indien uitgeschakeld, zal de plug-in uw typen aan anderen laten zien voor alle DM's/kanalen/gilden die niet vermeld staan ​​in 'Ingeschakelde locaties' hieronder."
                },
                enabledLocations: {
                    label: "Ingeschakelde locaties",
                    description: "Schakel functionaliteit voor deze ID's in. Accepteert een door komma's gescheiden lijst met DM-ID's, kanaal-ID's en gilde-ID's. Wordt alleen gebruikt als 'Standaard verborgen' is uitgeschakeld."
                },
                disabledLocations: {
                    label: "Gehandicapte locaties",
                    description: "Schakel de functionaliteit voor deze ID's uit. Accepteert een door komma's gescheiden lijst met DM-ID's, kanaal-ID's en gilde-ID's. Wordt alleen gebruikt als 'Standaard verborgen' is ingeschakeld."
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Laat het sneeuwen op Discord!",
            about: {
                title: "Informatie",
                paragraph: "Deze plug-in voegt een kerstachtig sneeuwvaleffect toe bovenop de interface van Discord. Je kunt het type sneeuw wijzigen in de onderstaande instellingen.",
                note: "OPMERKING: Hoewel deze plug-in op de meeste computers geen grotere invloed heeft op de prestaties dan uw gemiddelde Plexcord-extensie, kan deze op lagere systemen enige vertraging veroorzaken."
            },
            option: {
                typeOfSnow: {
                    label: "Soort sneeuw",
                    description: "Wijzig het weergegeven type sneeuw (beïnvloedt de prestaties).",
                    solid: "Solide (hoogste prestaties)",
                    text: "Tekst (gemiddelde prestaties)",
                    emoji: "Afbeelding (laagste prestatie)"
                },
                maxSize: {
                    label: "Maximale grootte",
                    description: "Maximale sneeuwvlokgrootte"
                },
                speed: {
                    label: "Snelheid",
                    description: "Sneeuwvalsnelheid (hoger = snellere val)"
                },
                flakesPerSecond: {
                    label: "Vlokken per seconde",
                    description: "Sneeuwvlokken per seconde (hoger = dichtere sneeuwval)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Sorteert vriendschapsverzoeken op ontvangstdatum",
            tooltip: "Toegevoegd — {{date}}",
            option: {
                showDates: {
                    label: "Datums weergeven",
                    description: "Toon datums op vriendschapsverzoeken"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Registreert alle klankborden die worden afgespeeld in een voicechat en biedt u de mogelijkheid deze te downloaden",
            tooltip: "Open SoundBoard-logboek",
            option: {
                savedIds: {
                    label: "Opgeslagen klankbord-ID's",
                    description: "Het aantal klankbord-ID's dat u tegelijk wilt opslaan (met 0 kunt u oneindig opslaan)",
                    notNumber: "De waarde is geen getal.",
                    cantDecimal: "De waarde mag geen decimaal getal zijn.",
                    cantNegative: "De waarde kan geen negatief getal zijn.",
                    heading: "Het aantal klankbord-ID's dat u tegelijk wilt opslaan (met 0 kunt u oneindig opslaan)",
                    warning: "Waarschuwing! Als u het getal op een lagere waarde zet, wordt het log gereset!",
                    placeholder: "Voer een nummer in"
                },
                fileType: {
                    label: "Bestandstype",
                    description: "Het formaat waarin u uw bestand wilt opslaan"
                },
                openLogs: {
                    label: "Logboeken openen",
                    description: "Laat de logboeken zien",
                    button: "Logboeken openen"
                },
                soundVolume: {
                    label: "Geluidsvolume",
                    description: "Hoe luid het schakelgeluid is (0 om uit te schakelen)"
                },
                iconLocation: {
                    label: "Icoon Locatie",
                    description: "Kies waar u het SoundBoard Log-pictogram wilt weergeven (herstart vereist)",
                    toolbar: "Werkbalk",
                    chatInput: "Chat-invoer"
                }
            },
            modal: {
                title: "SoundBoard-logboeken",
                loading: "Geluiden laden...",
                noLogs: "Er zijn nog geen geluiden geregistreerd. Neem deel aan een voicechat om te beginnen met inloggen!",
                clearLogs: "Logboeken wissen",
                played: "Gespeeld {{time}} tijd{{s}}",
                last: "Laatst gespeeld:",
                also: "Ook gespeeld:",
                download: "Downloaden",
                copyId: "Kopieer identiteitsbewijs",
                copied: "ID gekopieerd naar klembord!",
                playSound: "Speel geluid af",
                moreUsers: "Andere mensen gebruikten dit geluid...",
                volume: "Klankbordvolume"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Splitst grote berichten in meerdere berichten, zodat ze binnen de berichtenlimiet van Discord vallen.",
            option: {
                maxLength: {
                    label: "Maximale berichtlengte",
                    description: "Maximale lengte van een bericht voordat het wordt gesplitst. Stel in op 0 om automatisch te detecteren."
                },
                disableFileConversion: {
                    label: "Schakel bestandsconversie uit",
                    description: "Indien waar, wordt de bestandsconversie voor grote berichten uitgeschakeld."
                },
                sendDelay: {
                    label: "Vertraging verzenden",
                    description: "Vertraging tussen elk deel in seconden."
                },
                hardSplit: {
                    label: "Harde splitsing",
                    description: "Indien waar, wordt gesplitst op het laatste teken in plaats van op de laatste spatie/nieuwe regel."
                },
                splitInSlowmode: {
                    label: "Splitsen in slowmode",
                    description: "Moeten berichten worden gesplitst als op het kanaal slowmode is ingeschakeld?"
                },
                slowmodeMax: {
                    label: "Slowmode Max",
                    description: "Maximale slowmode-tijd bij splitsen in slowmode."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Voegt een schakelknop toe voor zichtbaarheid van Spotify-activiteiten.",
            tooltip: {
                enable: "Schakel Spotify-activiteit in",
                disable: "Schakel Spotify-activiteit uit"
            },
            option: {
                location: {
                    label: "Locatie",
                    description: "Waar de Spotify-schakelknop moet worden weergegeven",
                    panel: "Naast Mute/Doof",
                    toolbox: "Plexcord-gereedschapskist"
                },
                activityStatus: {
                    label: "Activiteitsstatus",
                    description: "De huidige status van uw Spotify-activiteit"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Gratis meeluisteren, geen automatische pauze in de voicechat en zorgt ervoor dat de activiteit kan doorgaan met spelen wanneer deze inactief is",
            option: {
                noSpotifyAutoPause: {
                    label: "Geen Spotify Auto-Pauze",
                    description: "Schakel Spotify automatisch pauzeren uit."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Houd Spotify-activiteit inactief",
                    description: "Houd Spotify-activiteit aan terwijl u inactief bent"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Deel uw huidige Spotify-track, album of artiest via slash-opdracht (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Deel uw huidige Spotify {{type}} in de chat",
                    track: "Je luistert naar geen enkel nummer op Spotify.",
                    find: "Kan het nummer niet vinden op Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Voegt opstarttijden toe aan het menu Instellingen",
            modal: {
                title: "Opstarttijden",
                ended: "Trace eindigde op:",
                start: "Begin",
                interval: "Interval",
                delta: "Delta",
                event: "Evenement",
                serverTrace: "Servertracering",
                loading: "Laden..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Voegt meldingen toe voor statuswijzigingen",
            loading: "Laden...",
            option: {
                notificationsSound: {
                    label: "Meldingsgeluid",
                    description: "Een meldingsgeluid afspelen voor statusmeldingen?"
                },
                usersList: {
                    label: "Gebruikerslijst",
                    description: "Lijst met gebruikers die op de hoogte moeten worden gesteld van statuswijzigingen",
                    empty: "Er zijn geen gebruikers gevolgd. Klik met de rechtermuisknop op een gebruiker en selecteer 'Statusmeldingen' om deze toe te voegen."
                }
            },
            context: {
                label: "Statusmeldingen",
                notifications: "Meldingen",
                type: {
                    all: "Alle",
                    online: "Online",
                    offline: "Offline",
                    none: "Geen"
                }
            },
            notification: {
                unknownUser: "Gebruiker",
                title: "Statusmeldingen"
            },
            status: {
                online: "Online",
                idle: "Inactief",
                dnd: "Niet storen",
                offline: "Offline",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Hiermee kunt u uw statussen onthouden en deze later instellen",
            button: {
                remember: "Onthoud status"
            },
            context: {
                edit: "Aangepaste voorinstellingen bewerken",
                set: "Aangepaste status instellen"
            },
            notification: {
                successfully: "Status succesvol opgeslagen"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Synchroniseer uw status met Steam! (Online, Afwezig, Onzichtbaar of Offline.)",
            option: {
                onlineStatus: {
                    label: "Onlinestatus",
                    description: "Steam-status wanneer online"
                },
                idleStatus: {
                    label: "Inactieve status",
                    description: "Stoomstatus wanneer inactief"
                },
                dndStatus: {
                    label: "Status niet storen",
                    description: "Steam-status wanneer Niet storen is ingeschakeld"
                },
                invisibleStatus: {
                    label: "Onzichtbare status",
                    description: "Steam-status wanneer onzichtbaar"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Word onzichtbaar als activiteit verborgen is",
                    description: "Stel de Steam-status in op Onzichtbaar wanneer Discord-activiteit verborgen is"
                }
            },
            status: {
                online: "Online",
                away: "Weg",
                invisible: "Onzichtbaar",
                offline: "Offline (Steam-chat verbreken)",
                disabled: "Gehandicapt"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Hiermee kunt u voorkomen dat stickers worden weergegeven.",
            option: {
                showGif: {
                    label: "GIF tonen",
                    description: "Of je nu een hippe katten-GIF wilt laten zien."
                },
                showMessage: {
                    label: "Toon bericht",
                    description: "Of er een bericht moet worden weergegeven waarin wordt aangegeven welke ID is geblokkeerd"
                },
                showButton: {
                    label: "Toon knop",
                    description: "Of er een knop moet worden weergegeven om de GIF te deblokkeren"
                },
                blockedStickers: {
                    label: "Geblokkeerde stickers",
                    description: "De lijst met geblokkeerde sticker-ID's (niet bewerken tenzij je weet wat je doet)"
                }
            },
            modal: {
                blocked: "Geblokkeerde sticker. ID: {{id}} NAAM: {{name}}",
                unblock: "Deblokkeren {{name}}"
            },
            context: {
                blockSticker: "Bloksticker",
                unblockSticker: "Deblokkeer sticker"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Maakt het kiezen van een sticker in de stickerkiezer mogelijk, plaats deze in de chatbox in plaats van deze direct te verzenden"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Schakelt automatisch de Streamer-modus in wanneer je begint met streamen in Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Schakel codecs uit voor streaming naar keuze",
            option: {
                disableAv1Codec: {
                    label: "AV1-codec uitschakelen",
                    description: "Voorkom dat Discord overweegt AV1 te gebruiken voor streaming."
                },
                disableH265Codec: {
                    label: "Schakel H265-codec uit",
                    description: "Voorkom dat Discord overweegt H265 te gebruiken voor streaming."
                },
                disableH264Codec: {
                    label: "Schakel H264-codec uit",
                    description: "Voorkom dat Discord overweegt H264 te gebruiken voor streaming."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Pas de limiet aan van het aantal Super Reactions dat je tegelijk kunt spelen, en Super React standaard",
            option: {
                superReactByDefault: {
                    label: "Standaard superreactie",
                    description: "De reactiekiezer wordt standaard ingesteld op Superreacties"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Onbeperkt spelen met superreacties",
                    description: "Verwijder de limiet voor het tegelijk spelen van Super Reactions"
                },
                superReactionPlayingLimit: {
                    label: "Superreacties Speellimiet",
                    description: "Max Super Reactions om in één keer te spelen. Stel in op 0 om het spelen van Super Reactions uit te schakelen"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Vervang tekst in uw berichten. U kunt vooraf gemaakte regels vinden in het kanaal #textreplace-rules in de server van Plexcord",
            option: {
                replace: {
                    label: "Vervangen",
                    string: "Met behulp van String",
                    regex: "Regex gebruiken",
                    myMessages: "Toepassen op uw berichten (voor iedereen zichtbaar)",
                    othersMessages: "Toepassen op berichten van anderen (alleen zichtbaar voor jou)",
                    allMessages: "Toepassen op alle berichten"
                },
                stringRules: {
                    label: "Tekenreeksregels",
                    description: "Regels voor het vervangen van tekst met behulp van tekenreeksmatching."
                },
                regexRules: {
                    label: "Regex-regels",
                    description: "Regels voor het vervangen van tekst met behulp van reguliere expressies."
                }
            },
            modal: {
                title: "Testregels",
                find: "Vinden",
                replace: "Vervangen",
                includes: "Alleen als inclusief",
                type: "Typ een bericht",
                applied: "Bericht waarop regels zijn toegepast"
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Voegt gegevensattributen toe aan verschillende elementen voor thematische doeleinden"
        },
        timezones: {
            name: "Timezones",
            description: "Toont de lokale tijd van gebruikers in profielen en berichtkoppen",
            button: {
                wantToSave: "Wilt u uw tijdzone in de database opslaan? Klik hier om het in te stellen.",
                yourLocalTimezone: "(Uw lokale tijdzone)"
            },
            context: {
                set: "Lokale tijdzone instellen"
            },
            toast: {
                refresh: {
                    successfully: "Tijdzones zijn succesvol vernieuwd!",
                    failed: "Tijdzones kunnen niet worden vernieuwd!",
                    failedTo: "Kan tijdzones niet vernieuwen."
                },
                update: {
                    successfully: "Tijdzone succesvol bijgewerkt!",
                    failed: "Kan de tijdzone niet instellen."
                },
                delete: {
                    successfully: "Tijdzone succesvol verwijderd!",
                    failed: "Kan tijdzone niet verwijderen."
                },
                auth: {
                    failed: "Authenticatie mislukt.",
                    success: "Autorisatie succesvol!"
                }
            },
            toolbox: {
                set: "Databasetijdzone instellen",
                refresh: "Databasetijdzones vernieuwen"
            },
            option: {
                showOwnTimezone: {
                    label: "Toon eigen tijdzone",
                    description: "Toon uw eigen tijdzone in profielen en berichtkoppen"
                },
                twentyFourHourTime: {
                    label: "24-uurs tijd",
                    description: "Toon de tijd in 24-uursformaat"
                },
                showTimezoneInfo: {
                    label: "Tijdzone-info weergeven",
                    description: "Toon tijdzone-informatie naast de tijd"
                },
                showMessageHeaderTime: {
                    label: "Toon berichtkoptijd",
                    description: "Toon tijd in berichtkoppen"
                },
                showProfileTime: {
                    label: "Toon profieltijd",
                    description: "Toon tijd in gebruikersprofielen"
                },
                useDatabase: {
                    label: "Gebruik databasetijdzone",
                    description: "Database inschakelen voor het ophalen van tijdzones van gebruikers"
                },
                preferDatabaseOverLocal: {
                    label: "Geef de voorkeur aan database boven lokaal",
                    description: "Geef de voorkeur aan een database boven lokale opslag voor tijdzones"
                },
                databaseUrl: {
                    label: "Database-URL",
                    description: "De URL van de tijdzonedatabaseserver"
                },
                setDatabaseTimezone: {
                    label: "Databasetijdzone instellen",
                    description: "Stel uw tijdzone in de database in",
                    setTimezone: "Stel de tijdzone in op de database"
                },
                resetDatabaseTimezone: {
                    label: "Databasetijdzone opnieuw instellen",
                    description: "Reset uw tijdzone in de database",
                    failed: "Kan de databasetijdzone niet opnieuw instellen"
                },
                askedTimezone: {
                    label: "Tijdzone gevraagd",
                    description: "Of de gebruiker is gevraagd om zijn tijdzone in te stellen"
                }
            },
            modal: {
                title: "Tijdzones",
                select: "Selecteer Tijdzone",
                selectPlaceholder: "Selecteer een tijdzone",
                delete: "Tijdzone verwijderen",
                save: "Redden"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Toon een toastmelding wanneer u een direct bericht ontvangt.",
            notification: {
                call: "Ik ben met je gaan bellen!",
                recipient: {
                    add: "{{target}} is aan de groep toegevoegd door {{actor}}.",
                    remove: "{{target}} is uit de groep verwijderd door {{actor}}.",
                    left: "Verliet de groep."
                },
                channel: {
                    change: {
                        name: "Changed the channel name to {{name}}.",
                        icon: "Het kanaalpictogram gewijzigd."
                    },
                    pinned: "Een bericht vastgezet."
                },
                sent: {
                    embed: "Een insluiting verzonden.",
                    sticker: "Een sticker gestuurd.",
                    attachment: "Bijlage:"
                },
                redacted: "De inhoud van het bericht is geredigeerd.",
                friend: {
                    accept: "{{user}} is nu je vriend",
                    acceptBody: "Je kunt ze nu rechtstreeks een bericht sturen.",
                    request: "{{user}} heeft je een vriendschapsverzoek gestuurd.",
                    requestBody: "Je kunt het accepteren of weigeren op het tabblad Vrienden."
                },
                example: {
                    title: "Voorbeeld melding",
                    body: "Dit is een voorbeeld van een meldingsinstantie."
                }
            },
            modal: {
                dismiss: "Melding afwijzen",
                attachments: "{{attachments}} bijlage{{s}} {{were}} verzonden."
            },
            option: {
                position: {
                    label: "Positie",
                    description: "De positie van de toastmelding",
                    topRight: "Rechtsboven",
                    topLeft: "Linksboven",
                    bottomRight: "Rechtsonder",
                    bottomLeft: "Linksonder"
                },
                timeout: {
                    label: "Time-out",
                    description: "Tijd in seconden worden meldingen weergegeven"
                },
                opacity: {
                    label: "Dekking",
                    description: "De dekking van de toastmelding"
                },
                determineServerNotifications: {
                    label: "Bepaal servermeldingen",
                    description: "Bepaal of u meldingen wilt weergeven op basis van de instellingen voor servermeldingen"
                },
                directMessages: {
                    label: "Directe berichten",
                    description: "Toon meldingen voor directe berichten"
                },
                groupMessages: {
                    label: "Groepsberichten",
                    description: "Toon meldingen voor groepsberichten"
                },
                friendServerNotifications: {
                    label: "Vriend- en servermeldingen",
                    description: "Toon meldingen wanneer vrienden berichten verzenden op servers die ze met u delen"
                },
                friendActivity: {
                    label: "Vriend activiteit",
                    description: "Toon meldingen als je iemand toevoegt of een vriendschapsverzoek ontvangt"
                },
                notifyFor: {
                    label: "Informeer voor",
                    description: "Maak een lijst met kanaal-ID's waarvan u meldingen wilt ontvangen (gescheiden door komma's)"
                },
                ignoreUsers: {
                    label: "Negeer gebruikers",
                    description: "Maak een lijst met gebruikers-ID's waarvan u al hun meldingen wilt negeren (gescheiden door komma's)"
                },
                exampleButton: {
                    label: "Voorbeeldknop",
                    description: "Toon een voorbeeld van een toastmelding.",
                    show: "Voorbeeldmelding weergeven"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Voegt een aanpasbare koppeling toe om de webcam te schakelen.",
            option: {
                keyBind: {
                    label: "Sleutelbinder",
                    description: "De toets om de webcam te schakelen wanneer deze wordt ingedrukt."
                },
                reqCtrl: {
                    label: "Vereist Ctrl",
                    description: "Vereisen dat de controle wordt vastgehouden."
                },
                reqShift: {
                    label: "Vereist verschuiving",
                    description: "Vereisen dat Shift wordt vastgehouden."
                },
                reqAlt: {
                    label: "Alt vereisen",
                    description: "Vereisen dat Alt wordt vastgehouden."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Vertaal berichten met Google Translate of DeepL",
            tooltip: {
                label: "Vertalen"
            },
            context: {
                translate: "Vertalen",
                open: "Open Vertaalmodaal",
                auto: "Automatisch vertalen ingeschakeld"
            },
            option: {
                receivedInput: {
                    label: "Ontvangen invoer",
                    description: "De taal waaruit de ontvangen berichten moeten worden vertaald"
                },
                receivedOutput: {
                    label: "Ontvangen uitvoer",
                    description: "Taal waarin ontvangen berichten moeten worden vertaald"
                },
                sentInput: {
                    label: "Verzonden invoer",
                    description: "Taal waaruit uw eigen berichten moeten worden vertaald"
                },
                sentOutput: {
                    label: "Verzonden uitvoer",
                    description: "Taal waarnaar uw eigen berichten moeten worden vertaald"
                },
                service: {
                    label: "Vertaaldienst",
                    description: "DeepL vereist een betaalde API-sleutel van DeepL Pro",
                    descriptionWeb: "Vertaalservice (niet ondersteund op internet!)",
                    google: "Google Vertalen",
                    deepl: "DeepL gratis",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "DeepL API-sleutel",
                    description: "DeepL API-sleutel",
                    placeholder: "Haal uw API-sleutel op via https://deepl.com/uw-account"
                },
                autoTranslate: {
                    label: "Automatisch vertalen",
                    description: "Vertaal uw berichten automatisch voordat u ze verzendt. U kunt ook op de vertaalknop klikken of met de rechtermuisknop klikken om dit in of uit te schakelen"
                },
                showAutoTranslateTooltip: {
                    label: "Tooltip voor automatisch vertalen weergeven",
                    description: "Toon tooltip op de ChatBar-knop wanneer een bericht automatisch wordt vertaald"
                }
            },
            modal: {
                title: "Vertalen",
                select: "Selecteer een taal",
                auto: "Automatisch vertalen",
                dismiss: "Afwijzen",
                translated: "vertaald van {{from}}",
                failed: {
                    to: "Kan {{text}} niet vertalen",
                    connect: "Kan geen verbinding maken met DeepL API:"
                },
                wrong: "Er is iets misgegaan. Als dit probleem zich blijft voordoen, controleer dan de console of vraag om hulp op de ondersteuningsserver.",
                deepl: {
                    api: "DeepL API-quotum overschreden. Terugvallend op Google Translate.",
                    apiKey: "DeepL API-sleutel is niet ingesteld. Opnieuw instellen op Google",
                    auth: "Ongeldige DeepL API-sleutel of -versie"
                },
                autoTranslateEnabled: {
                    title: "Plexcord automatisch vertalen ingeschakeld",
                    body: "Je hebt zojuist automatisch vertalen ingeschakeld! Elk bericht wordt automatisch vertaald voordat het wordt verzonden.",
                    confirm: "Schakel automatisch vertalen uit",
                    cancel: "Ik heb het",
                    secondaryConfirm: "Niet meer laten zien"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Voegt een indicator toe als iemand op een kanaal typt.",
            option: {
                includeCurrentChannel: {
                    label: "Voeg huidig ​​kanaal toe",
                    description: "Of de type-indicator voor het momenteel geselecteerde kanaal moet worden weergegeven"
                },
                includeMutedChannels: {
                    label: "Inclusief gedempte kanalen",
                    description: "Of de type-indicator voor gedempte kanalen moet worden weergegeven."
                },
                includeIgnoredUsers: {
                    label: "Inclusief genegeerde gebruikers",
                    description: "Of de type-indicator voor genegeerde gebruikers moet worden weergegeven."
                },
                includeBlockedUsers: {
                    label: "Inclusief geblokkeerde gebruikers",
                    description: "Of de type-indicator voor geblokkeerde gebruikers moet worden weergegeven."
                },
                indicatorMode: {
                    label: "Indicatormodus",
                    description: "Hoe moet de indicator worden weergegeven?",
                    both: "Avatars en geanimeerde stippen",
                    dots: "Geanimeerde stippen",
                    avatars: "Avatars"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Toon avatars en rolkleuren in de type-indicator",
            option: {
                showAvatars: {
                    label: "Toon meerdere gebruikers",
                    description: "Toon avatars in de typindicator"
                },
                showRoleColors: {
                    label: "Toon rolkleuren",
                    description: "Toon rolkleuren in de type-indicator"
                },
                alternativeFormatting: {
                    label: "Alternatieve opmaak",
                    description: "Toon een nuttiger bericht wanneer meerdere gebruikers aan het typen zijn"
                },
                amITyping: {
                    label: "Ben ik aan het typen",
                    description: "Laat zien of andere mensen u kunnen zien typen"
                }
            },
            others: {
                areTyping: "en {{count}} anderen zijn aan het typen..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Snijdt de voorste inkepingen uit codeblokken weg"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Converteert metrische eenheden naar imperiale eenheden en omgekeerd",
            tooltip: "Eenheden converteren",
            option: {
                myUnits: {
                    label: "Mijn eenheden",
                    description: "De eenheden die u gebruikt en waarnaar u wilt converteren. Standaard ingesteld op imperiaal",
                    imperial: "Imperiaal",
                    metric: "Metrisch"
                }
            },
            button: {
                dismiss: "Afwijzen"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Verhoogt het aantal accounts dat u kunt toevoegen.",
            option: {
                maxAccounts: {
                    label: "Maximaal aantal accounts",
                    description: "Aantal accounts dat kan worden toegevoegd, of 0 voor geen limiet"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Hiermee kunt u verder inzoomen in de afbeeldingsbijsnijdtool wanneer u uw avatar wijzigt",
            option: {
                zoomMultiplier: {
                    label: "Zoomvermenigvuldiger",
                    description: "Zoomvermenigvuldiger"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Hiermee kunt u het insluiten van berichten in berichten ongedaan maken",
            context: {
                unsuppress: "Hef het insluiten op",
                suppress: "Onderdruk insluiten"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Toont willekeurige nutteloze informatie binnen Discord; snelkoppelingen en afstanden zijn instelbaar.",
            recording: "Opnemen...",
            record: "Dossier",
            option: {
                delay: {
                    label: "Meldingsinterval",
                    description: "Weergave-interval van meldingen in minuten"
                },
                historyHotkey: {
                    label: "Snelkoppeling in het geschiedenispaneel",
                    description: "Sneltoets om een ​​geschiedenis van eerder getoonde feiten weer te geven"
                },
                randomFactHotkey: {
                    label: "Willekeurige feitensnelkoppeling",
                    description: "Sneltoets om het willekeurige feitenpaneel te openen"
                },
                sameFact: {
                    label: "Vermijd het tonen van dezelfde items",
                    description: "Vermijd het meerdere keren tonen van hetzelfde feit totdat alle feiten zijn getoond"
                },
                lastNFacts: {
                    label: "Hoeveel recents moet je vermijden",
                    description: "Aantal meest recent getoonde feiten om herhaling te voorkomen (0 = aller tijden)"
                }
            },
            modal: {
                title: "Nutteloze informatie",
                history: {
                    none: "Nog geen feiten. Gebruik de snelkoppeling of wacht.",
                    source: "Bron"
                },
                showRandom: "Willekeurig weergeven",
                close: "Dichtbij"
            },
            notification: {
                title: "Wist je dat?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Toont voornaamwoorden van gebruikers in berichtkoppen",
            option: {
                pronounsFormat: {
                    label: "Voornaamwoorden Formaat",
                    description: "Het formaat waarin voornaamwoorden in de chat verschijnen",
                    lowercase: "Kleine letters",
                    capitalized: "Met hoofdletter"
                },
                showSelf: {
                    label: "Laat jezelf zien",
                    description: "Schakel het weergeven van voornaamwoorden voor uzelf in of uit"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Toont een indicator wanneer een gebruiker zich in een spraakkanaal bevindt",
            option: {
                showInUserProfileModal: {
                    label: "Weergeven in gebruikersprofiel Modaal",
                    description: "Toon de Spraakkanaalindicator van een gebruiker in zijn/haar profiel naast de naam"
                },
                showInMemberList: {
                    label: "Weergeven in ledenlijst",
                    description: "Toon de spraakkanaalindicator van een gebruiker in de leden- en DM's-lijst"
                },
                showInMessages: {
                    label: "Weergeven in berichten",
                    description: "Toon de spraakkanaalindicator van een gebruiker in berichten"
                }
            },
            modal: {
                inVoiceChat: "In voicechat"
            },
            notification: {
                cannotJoin: "U kunt niet deelnemen aan het spraakkanaal van de gebruiker."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Toont gebruikersbanners van USRBG, zodat iedereen een banner kan krijgen zonder Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro eerst",
                    description: "Banner om te gebruiken als zowel Nitro- als USRBG-banners aanwezig zijn",
                    nitro: "Nitro-banner",
                    usrbg: "USRBG-banner"
                },
                voiceBackground: {
                    label: "Stemachtergrond",
                    description: "Gebruik USRBG-banners als voicechat-achtergronden"
                }
            },
            button: "Koop uw eigen USRBG-banner"
        },
        validReply: {
            name: "ValidReply",
            description: "Oplossing voor het probleem 'Bericht kon niet worden geladen' als u met de muis over het antwoord zweefde"
        },
        validUser: {
            name: "ValidUser",
            description: "Vermeldingen repareren voor onbekende gebruikers die worden weergegeven als '@onbekende-gebruiker' (beweeg over een vermelding om dit te verhelpen)",
            badges: {
                discordBugHunter: "Onenigheid Bug Hunter",
                moderatorProgramsAlumni: "Moderator Programma's Alumni",
                discordStaff: "Discord-staf",
                hypeSquadEvents: "HypeSquad-evenementen",
                bravery: "HypeSquad-moed",
                brilliance: "HypeSquad-briljantie",
                balance: "HypeSquad-balans",
                partneredServerOwner: "Eigenaar van een partnerserver",
                nitro: "Onenigheid Nitro",
                earlySupporter: "Vroege supporter",
                earlyVerifiedBotDeveloper: "Vroeg geverifieerde botontwikkelaar"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Neem deel aan voicechats via dubbelklikken in plaats van enkele klikken"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Kondigt aan wanneer gebruikers via de verteller deelnemen aan spraakkanalen, deze verlaten of verplaatsen",
            option: {
                voice: {
                    label: "Stem"
                },
                volume: {
                    label: "Volume",
                    description: "Vertellervolume"
                },
                rate: {
                    label: "Tarief",
                    description: "Vertellersnelheid"
                },
                sayOwnName: {
                    label: "Zeg eigen naam",
                    description: "Zeg eigen naam"
                },
                latinOnly: {
                    label: "Alleen Latijn",
                    description: "Verwijder niet-Latijnse tekens uit namen voordat u ze uitspreekt"
                },
                joinMessage: {
                    label: "Meld je aan bij bericht",
                    description: "Meld je aan bij bericht"
                },
                leaveMessage: {
                    label: "Laat bericht achter",
                    description: "Laat bericht achter"
                },
                moveMessage: {
                    label: "Bericht verplaatsen",
                    description: "Bericht verplaatsen"
                },
                muteMessage: {
                    label: "Bericht dempen",
                    description: "Bericht dempen (voorlopig alleen mezelf)"
                },
                unmuteMessage: {
                    label: "Bericht dempen",
                    description: "Bericht dempen (voorlopig alleen mezelf)"
                },
                deafenMessage: {
                    label: "Dove boodschap",
                    description: "Dove boodschap (voorlopig alleen mezelf)"
                },
                undeafenMessage: {
                    label: "Ondoof bericht",
                    description: "Undeafen Message (voorlopig alleen mezelf)"
                }
            },
            modal: {
                title: "Speel voorbeeldgeluiden af",
                voiceTitle: "Stem",
                voice: "Selecteer een stem",
                languageTitle: "Taal",
                language: "Selecteer een taal",
                noVoice: "Geen vertellerstemmen gevonden.",
                linuxNote: "Installeer speech-dispatcher of espeak en voer Discord uit met de vlag --enable-speech-dispatcher",
                someNarrator: "Probeer er een paar te installeren in de Verteller-instellingen van uw besturingssysteem",
                dontHaveEnglish: "Je hebt geen Engelse stemmen geïnstalleerd, dus de verteller klinkt misschien raar",
                customiseMessages: "Hieronder kunt u de gesproken berichten aanpassen. U kunt specifieke berichten uitschakelen door ze op niets in te stellen",
                placeholdersInfo: "De speciale tijdelijke aanduidingen {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} en {{CHANNEL}} worden vervangen door respectievelijk de gebruikersnaam (niets als u het zelf bent), de weergavenaam van de gebruiker, de bijnaam van de gebruiker op de huidige server en de naam van het kanaal"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Maakt avatars en banners in gebruikersprofielen klikbaar, voegt View Avatar/Banner-items toe in het gebruikers-, server- en groepskanaalcontextmenu.",
            context: {
                view: {
                    avatar: "Bekijk Avatar",
                    serverAvatar: "Bekijk serveravatar",
                    icon: "Icoon bekijken",
                    banner: "Bekijk Banier"
                }
            },
            option: {
                format: {
                    label: "Formaat",
                    description: "Kies het afbeeldingsformaat dat u wilt gebruiken voor niet-geanimeerde afbeeldingen. Geanimeerde afbeeldingen gebruiken altijd .gif"
                },
                imgSize: {
                    label: "Afbeeldingsgrootte",
                    description: "Het afbeeldingsformaat dat moet worden gebruikt"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Kopieer en bekijk de onbewerkte inhoud/gegevens van elk bericht, kanaal of gilde",
            context: {
                copyLeft: "Kopieer Raw (klik met de linkermuisknop) / Bekijk Raw (klik met de rechtermuisknop)",
                copyRight: "Kopieer Raw (klik met de rechtermuisknop) / Bekijk Raw (klik met de linkermuisknop)",
                view: "Bekijk Ruw"
            },
            option: {
                popoverButton: {
                    label: "Popover-knop",
                    description: "Toon een knop in de berichtenpopover om de onbewerkte inhoud/gegevens van het bericht te bekijken."
                },
                clickMethod: {
                    label: "Klik op Methode",
                    description: "Wijzig de knop om de onbewerkte inhoud/gegevens van elk bericht te bekijken.",
                    left: "Klik met de linkermuisknop om de onbewerkte inhoud te bekijken.",
                    right: "Klik met de rechtermuisknop om de onbewerkte inhoud te bekijken."
                }
            },
            modal: {
                title: "Bekijk Ruw",
                content: "Inhoud",
                data: "{{type}} Gegevens",
                copied: "{{type}} gegevens gekopieerd naar klembord!",
                copy: "Kopieer {{type}} JSON",
                copiedContent: "Inhoud gekopieerd naar klembord!",
                copyContent: "Kopieer onbewerkte inhoud"
            },
            types: {
                message: "Bericht",
                channel: "Kanaal",
                guild: "Gilde",
                role: "Rol",
                user: "Gebruiker"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Stuur snel een DM, demp of verdoof elke gebruiker rechtstreeks vanuit het spraakoproeppaneel.",
            option: {
                showChatButton: {
                    label: "Chatknop tonen",
                    description: "Of u de chatknop wilt weergeven"
                },
                showMuteButton: {
                    label: "Toon dempknop",
                    description: "Of u de mute-knop wilt weergeven"
                },
                showDeafenButton: {
                    label: "Toon doofknop",
                    description: "Of u de doofknop wilt weergeven"
                },
                muteSoundboard: {
                    label: "Geluidsbord dempen",
                    description: "Schakelt hun klankbord in en uit door op de knop Doven te klikken."
                },
                disableVideo: {
                    label: "Schakel video uit",
                    description: "Schakelt hun video in en uit door op de knop Doven te klikken."
                },
                useServer: {
                    label: "Gebruik server",
                    description: "Gebruik server mute/deafen in plaats van lokaal als u daarvoor toestemming heeft."
                },
                serverSelf: {
                    label: "Server Zelf",
                    description: "Doof / Demp uzelf op de server wanneer u mute/deafen gebruikt."
                },
                showButtonsSelf: {
                    label: "Knoppen op zichzelf weergeven",
                    description: "Of u knoppen voor uw eigen gebruiker wilt weergeven. Dezelfde functionaliteit als andere knop(pen), behalve dat het het DM-paneel opent en voor jezelf dempt/verdooft als je op de knop(pen) klikt.",
                    display: "Weergave",
                    hide: "Verbergen",
                    disable: "Uitzetten"
                },
                whichNameToShow: {
                    label: "Welke naam moet worden weergegeven",
                    description: "Kies of u de bijnaam of gebruikersnaam in de tooltip wilt weergeven.",
                    global: "Globale naam",
                    username: "Gebruikersnaam",
                    both: "Beide"
                },
                buttonPosition: {
                    label: "Knoppositie",
                    description: "Kies waar de knoppen worden weergegeven.",
                    left: "Links",
                    right: "Rechts",
                }
            },
            tooltip: {
                navigate: "Navigeer naar DM's",
                open: "DM's openen met {{username}}",
                yourself: "jezelf",
                serverMute: "Server dempen",
                serverDeafen: "Server doof",
                mute: "Stom",
                deafen: "Doof",
                unmute: "Dempen opheffen",
                undeafen: "Ondoof",
                serverUnmute: "Server dempen opheffen",
                serverUndeafen: "Server Ondoof"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Registreert wie zich bij spraakkanalen aansluit en deze verlaat",
            context: {
                view: "Kanaallog bekijken"
            },
            modal: {
                joined: "Lid geworden van <#{{channel}}>",
                left: "Links <#{{channel}}>",
                movedTo: "Verplaatst naar <#{{channel}}>",
                movedFrom: "Verplaatst van <#{{channel}}>",
                noLogs: "Er zijn geen logboeken om weer te geven.",
                logs: "{{channel}} logt"
            },
            option: {
                mode: {
                    label: "Modus",
                    description: "Hoe het spraakkanaallogboek te tonen",
                    menu: "Log-menu",
                    associated: "Log rechtstreeks in bij de bijbehorende chat",
                    both: "Log in om te chatten en logmenu"
                },
                voiceChannelChatSelf: {
                    label: "Spraakkanaal Chat zelf",
                    description: "Registreer uw eigen spraakkanaalgebeurtenissen in de spraakkanalen"
                },
                voiceChannelChatSilent: {
                    label: "Spraakkanaal Chat Stil",
                    description: "Het deelnemen aan/verlaten/verplaatsen van berichten in spraakkanaalchats is stil"
                },
                voiceChannelChatSilentSelf: {
                    label: "Spraakkanaal Chat Stil Zelf",
                    description: "Het deelnemen aan/verlaten/verplaatsen van berichten in spraakkanaalchats is stil als u zich in het spraakkanaal bevindt"
                },
                ignoreBlockedUsers: {
                    label: "Negeer geblokkeerde gebruikers",
                    description: "Log geen geblokkeerde gebruikers in"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Met deze plug-in kunt u meerdere acties uitvoeren op een heel kanaal (verplaatsen, dempen, de verbinding verbreken, enz.) (oorspronkelijk door dutake)",
            option: {
                waitAfter: {
                    label: "Wacht na actie",
                    description: "Aantal API-acties dat moet worden uitgevoerd voordat wordt gewacht (om tarieflimieten te vermijden)"
                },
                waitSeconds: {
                    label: "Wacht seconden",
                    description: "Wachttijd tussen elke actie (in seconden)"
                }
            },
            context: {
                voiceTools: "Spraakhulpmiddelen",
                mentionAll: "Noem alle gebruikers",
                disconnectAll: "Ontkoppel alles",
                muteAll: "Demp alles",
                unmuteAll: "Schakel alles uit",
                deafenAll: "Verdoof allemaal",
                undeafenAll: "Ondoof allemaal",
                moveAll: "Verplaats alles"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Voegt een download toe aan spraakberichten. (Opent een nieuw browsertabblad)",
            context: {
                download: "Spraakbericht downloaden"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Hiermee kunt u spraakberichten verzenden, zoals op mobiel. Om dit te doen, klikt u met de rechtermuisknop op de uploadknop en klikt u op Spraakbericht verzenden.",
            option: {
                noiseSuppression: {
                    label: "Ruisonderdrukking",
                    description: "Ruisonderdrukking"
                },
                echoCancellation: {
                    label: "Echo-annulering",
                    description: "Echo-annulering"
                }
            },
            notification: {
                failed: {
                    upload: "Kan spraakbericht niet uploaden.",
                    start: "Kan de opname niet starten.",
                    finish: "Kan de opname niet voltooien."
                }
            },
            context: {
                sendVoiceMessage: "Spraakbericht verzenden",
                missingPermissions: "(Ontbrekende rechten)"
            },
            modal: {
                record: "Spraakbericht opnemen",
                upload: "Bestand uploaden",
                preview: "Voorbeeld",
                failed: "Kan het geselecteerde audiobestand niet parseren:",
                oggOpus: "Spraakberichten moeten van OggOpus zijn om op iOS te kunnen spelen. Dit bestand is {{type}} en kan dus niet worden afgespeeld op iOS.",
                fix: "Om het probleem te verhelpen, converteert u het eerst naar OggOpus, bijvoorbeeld met behulp van de {{link}}",
                sending: "Er wordt nu een spraakbericht verzonden... Even geduld.",
                stop: "Stop met opnemen",
                start: "Begin met opnemen",
                resume: "Hervat de opname",
                pause: "Pauzeer de opname",
                recording: "OPNAME",
                send: "Versturen",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Hiermee kunt u het gebruikers- en streamvolume boven het standaardmaximum instellen",
            option: {
                multiplier: {
                    label: "Vermenigvuldiger",
                    description: "Volumevermenigvuldiger"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Recreatie van het oude DM-behangexperiment; Stel een achtergrondafbeelding in voor elk kanaal, gebruiker of server.",
            option: {
                globalDefault: {
                    label: "Globale standaard",
                    description: "Stel een algemene standaardachtergrond in voor alle kanalen."
                },
                stylingTips: {
                    label: "Stylingtips"
                }
            },
            context: {
                setWallpaper: "Achtergrond instellen",
                removeWallpaper: "Verwijder behang"
            },
            modal: {
                set: "Achtergrond instellen",
                image: "De afbeeldings-URL",
                cancel: "Annuleren",
                apply: "Toepassen",
                global: {
                    set: "Stel een globale achtergrond in",
                    remove: "Verwijder de algemene standaardachtergrond",
                    reset: "Achtergrondgegevens opnieuw instellen"
                },
                web: {
                    info: "U kunt lokale bestanden gebruiken door ze in de Plexcord-themamap te plaatsen en de URL plexcord:///themes/bestandsnaam.ext te gebruiken",
                    open: "Open de Themamap",
                    quickCSS: "Open QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Voegt contextmenu's opnieuw toe die ontbreken in de webversie van Discord: links en afbeeldingen (kopiëren/openen link/afbeelding), tekstgebied (kopiëren, knippen, plakken, spellingcontrole)",
            option: {
                addBack: {
                    label: "Terug toevoegen",
                    description: "Voeg de Discord-contextmenu's terug voor afbeeldingen, links en de chatinvoerbalk"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Voegt keybinds opnieuw toe die ontbreken in de webversie van Discord: Ctrl+T, Ctrl+Shift+T, Ctrl+Tab, Ctrl+Shift+Tab, Ctrl+1-9, Ctrl+,. Werkt alleen volledig op Plextron/Legcord, niet in uw browser"
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Verwijdert de bitratelimiet van 2500 kbps op Chromium- en Plextron-clients.",
            option: {
                experimentalAV1Support: {
                    label: "Experimentele AV1-ondersteuning",
                    description: "Schakel AV1-codec-ondersteuning in. Kan problemen veroorzaken zoals het oneindig laden van streams"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Geeft de avatars weer van gebruikers die op een bericht hebben gereageerd",
            option: {
                avatarClick: {
                    label: "Avatar-klik",
                    description: "Schakel klikken op avatars in reacties in"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Beweeg over het scherm delen-pictogram om te zien welke gebruikers uw stream bekijken",
            modal: {
                noSpectator: "Geen toeschouwers"
            },
            option: {
                showPanel: {
                    label: "Paneel tonen",
                    description: "Toon toeschouwers onder het schermdeelpaneel"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Verandert de eerste letter van elke zin in berichtinvoer in hoofdletters",
            option: {
                blockedWords: {
                    label: "Geblokkeerde woorden",
                    description: "Tekenreeksen die niet met hoofdletters moeten worden geschreven (gescheiden door een komma)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Stuurt Discord-meldingen door naar XSOverlay, zodat je ze gemakkelijk kunt bekijken in VR",
            notification: {
                call: {
                    title: "{{user}} belt je.",
                    content: "Inkomend gesprek"
                },
                message: {
                    reply: "(antwoord)",
                    embed: "[insluiten]",
                    onlyEmbed: "Verzonden bericht ingesloten(en)",
                    sticker: "[sticker]",
                    onlySticker: "Een sticker gestuurd",
                    image: "afbeelding",
                    attachment: "bijlage"
                },
                test: {
                    title: "Hallo van Plexcord!",
                    content: "Dit is een testmelding! *Ontploffen*",
                    button: "Testmelding verzenden"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket-poort",
                    description: "WebSocket-poort"
                },
                preferUDP: {
                    label: "Liever UDP",
                    description: "Schakel dit in als u een oudere versie van XSOverlay gebruikt en geen verbinding kunt maken via WebSockets. Deze instelling wordt op internet genegeerd."
                },
                botNotifications: {
                    label: "Bot-meldingen",
                    description: "Sta botmeldingen toe"
                },
                serverNotifications: {
                    label: "Servermeldingen",
                    description: "Sta servermeldingen toe"
                },
                dmNotifications: {
                    label: "DM-meldingen",
                    description: "Sta Direct Message-meldingen toe"
                },
                groupDmNotifications: {
                    label: "Groeps-DM-meldingen",
                    description: "Sta groeps-DM-meldingen toe"
                },
                callNotifications: {
                    label: "Oproepmeldingen",
                    description: "Sta oproepmeldingen toe"
                },
                pingColor: {
                    label: "Ping-kleur",
                    description: "Kleur van gebruikersvermelding"
                },
                channelPingColor: {
                    label: "Kanaalping-kleur",
                    description: "Kleur van kanaalvermelding"
                },
                soundPath: {
                    label: "Geluidspad",
                    description: "Meldingsgeluid (standaard/waarschuwing/fout)"
                },
                timeout: {
                    label: "Time-out",
                    description: "Meldingsduur (sec)"
                },
                lengthBasedTimeout: {
                    label: "Op lengte gebaseerde time-out",
                    description: "Verleng de duur met de berichtlengte"
                },
                opacity: {
                    label: "Dekking",
                    description: "Ondoorzichtigheid van meldingen"
                },
                volume: {
                    label: "Volume",
                    description: "Volume"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Blokkeer advertenties in YouTube-insluitingen en de Watch Together-activiteit via AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Voegt beschrijvingen toe aan YouTube-video-insluitingen"
        }
    }
} as const;

export default translations;
