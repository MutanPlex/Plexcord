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
                description: "Pas je geconfigureerde QuickCSS toe"
            },
            enableReactDevtools: {
                label: "Schakel React-ontwikkelaarstools in",
                description: "Vooral nuttig voor pluginontwikkelaars. Negeer dit als je niet weet wat het is"
            },
            mainWindowFrameless: {
                label: "Schakel het hoofdvensterframe uit",
                description: "Verwijder het oorspronkelijke raamkozijn voor een netter uiterlijk. U kunt het venster nog steeds verplaatsen door het titelbalkgebied te slepen."
            },
            frameless: {
                label: "Schakel het raamkozijn uit",
                description: "Verwijder het oorspronkelijke raamkozijn voor een netter uiterlijk. U kunt het venster nog steeds verplaatsen door het titelbalkgebied te slepen."
            },
            nativeTitleBar: {
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
                description: "Hiermee kun je het venster naar elk formaat schalen, zelfs kleiner dan het minimum van Discord"
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
        windowsMaterial: {
            title: "Windows-achtergrondmateriaal (herstart vereist)",
            description: "Transparante achtergrondeffecten van Windows. Je hebt een thema nodig dat transparantie ondersteunt, anders doet dit niets. Na het wijzigen van deze instelling is een herstart vereist.",
            material: {
                none: "Geen",
                mica: "Mica (gebruikt systeemthema + bureaubladachtergrond om de achtergrond te kleuren)",
                tabbed: "Tabbed (variant van Mica met sterkere achtergrondtint)",
                acrylic: "Acrylic (vervaagt het venster achter Discord voor een doorschijnende achtergrond)"
            }
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
        },
        tabs: {
            renderFailed: "Kan het tabblad {{tab}} niet weergeven. Blijft het probleem bestaan, probeer dan opnieuw te installeren met het installatieprogramma!"
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
            dev: "Ontwikkelaarsversie van Plexcord",
            browser: "Webbrowserversie van Plexcord"
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
                api: "Toon API-plug-ins",
                type: "Filter op type",
                tags: "Filter op tags",
                favorites: "Favorieten tonen"
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
            source: "Bekijk de broncode",
            favorite: "Plugin als favoriet markeren - zet hem bovenaan de pluginlijst",
            unfavorite: "Niet meer als favoriet markeren"
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
                    userArea: "API om knoppen toe te voegen aan het gebruikersgebiedpaneel.",
                    profileCollections: "API om verzamelingen toe te voegen aan het gebruikersprofielpaneel, zoals de gamecollectie van Discord.",
                    profileSections: "API om secties toe te voegen in de buurt van het 'Lid sinds'-gedeelte van gebruikersprofielpanelen.",
                    headerBar: "API om knoppen aan de koptekstbalk toe te voegen.",
                    surfaceClasses: "API om plugin-eigen semantische data-attributen en beperkte props toe te voegen aan stabiele Discord-layoutoppervlakken."
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
        },
        invalidInput: "Ongeldige invoer",
        loading: "Laden...",
        authorPrefix: "door"
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
        },
        backupFileType: "Plexcord-instellingenback-up"
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
        more: "+{{count}} meer plug-ins",
        error: {
            retrieveRepo: "Kan repository-informatie niet ophalen",
            fetchRepo: "Kan niet ophalen uit de repository",
            connectRepo: "Kan geen verbinding maken met de repository. Controleer je internetverbinding."
        }
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
        activation: {
            title: "Thema-activatie",
            always: "Altijd aan",
            lightOnly: "Alleen licht thema",
            darkOnly: "Alleen donker thema"
        },
        actions: {
            pin: "Vastzetten",
            unpin: "Losmaken",
            editSettings: "Instellingen bewerken"
        },
        unknown: {
            title: "Onbekend",
            author: "Onbekende auteur",
            theme: "Een onenigheidsthema",
            description: "Geen beschrijving opgegeven."
        },
        required: "De volgende plug-ins zijn vereist, maar zijn niet ingeschakeld:",
        homepage: "Startpagina",
        support: "Steun",
        online: {
            title: "Online-thema's",
            description: "Laad thema's rechtstreeks vanuit URL's in plaats van lokale bestanden. Online thema's worden automatisch bijgewerkt wanneer de bron verandert, zodat u altijd over de nieuwste versie beschikt zonder handmatige downloads.",
            enable: "Online thema's inschakelen",
            enableDescription: "Schakel het online laden van thema's in of uit. Indien uitgeschakeld, worden alle online thema's uitgeschakeld en kunt u geen nieuwe thema's toevoegen.",
            placeholder: "https://voorbeeld.nl/thema.css"
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
        },
        openInFolder: "Openen in map",
        fallback: {
            author: "Onbekende auteur",
            description: "Een Discord-thema."
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
        unknownAuthor: "Onbekende auteur"
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
            close: "Hoe dan ook sluiten",
            windowTitle: "Plexcord QuickCSS-editor"
        },
        messagePopover: {
            scrollLeft: "Naar links scrollen",
            scrollRight: "Naar rechts scrollen"
        },
        notices: {
            error: "Fout bij het tonen van de melding"
        },
        tray: {
            aboutPlexcord: "Over Plexcord",
            updatePlexcord: "Plexcord bijwerken",
            noUpdateTitle: "Geen update beschikbaar",
            noUpdateBody: "Je gebruikt al de nieuwste versie van Plexcord.",
            updateFailedTitle: "Update mislukt",
            updateFailedBody: "Kan de update voor Plexcord niet toepassen.",
            updateSuccessTitle: "Update geslaagd",
            updateSuccessBody: "Plexcord wordt opnieuw gestart om de update toe te passen.",
            updateErrorTitle: "Updatefout",
            updateErrorBody: "Er is een fout opgetreden bij het bijwerken van Plexcord.\n\n{{error}}",
            openSettingsFolder: "Instellingenmap openen",
            openThemesFolder: "Themamap openen"
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
        },
        detectLanguage: "Taal detecteren"
    },

    plugin: {
        tags: {
            accessibility: "Toegankelijkheid",
            activity: "Activiteit",
            appearance: "Uiterlijk",
            chat: "Chat",
            commands: "Commando's",
            console: "Console",
            customisation: "Aanpassing",
            developers: "Ontwikkelaars",
            emotes: "Emotes",
            friends: "Vrienden",
            fun: "Plezier",
            media: "Media",
            notifications: "Meldingen",
            organisation: "Organisatie",
            privacy: "Privacy",
            reactions: "Reacties",
            roles: "Rollen",
            servers: "Servers",
            shortcuts: "Snelkoppelingen",
            utility: "Hulpmiddelen",
            voice: "Stem"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "Extraheer componenten die zijn samengevoegd door de bundler"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "Extraheer modules die zijn samengevoegd door de bundler"
        },
        noTrack: {
            name: "NoTrack",
            description: "Schakel het volgen van Discord (analyse/'wetenschap'), statistieken en Sentry-crashrapportage uit",
            option: {
                disableAnalytics: {
                    label: "Schakel Analytics uit",
                    description: "Blokkeert de tracking-analyses van Discord. Schakel dit uit als je wilt dat badges je voortgang bijhouden (bijv. gestreamde uren)."
                },
                disableStackDumping: {
                    description: "Een native stacktrace in de console tonen als Discord crasht. Vereist een volledige herstart."
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
                },
                includePlexcordInfoWhenCopying: {
                    label: "Plexcord-informatie opnemen bij kopiëren",
                    description: "Kopieer ook Plexcord-informatie (Plexcord, Electron, Chromium) wanneer je op de versie-informatie linksonder op de instellingenpagina klikt"
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
                    dismiss: "Als je weet wat je doet of niet kunt updaten, kun je deze melding sluiten.",
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
                    med: "Gemiddeld",
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
                    timestamp: "Tijdstempel",
                    date: "Datum"
                },
                randomisedLength: {
                    label: "Gerandomiseerde lengte",
                    description: "Willekeurige tekenlengte"
                },
                consistent: {
                    label: "Consistent",
                    description: "Consistent anonimiseringsgeheim"
                },
                dateFormat: {
                    description: "Datumnotatie (YYYY, MM, DD, HH, mm, ss, SSS worden ondersteund)",
                    label: "Datumnotatie"
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
            },
            text: {
                smallText: "Kleine tekst",
                largeText: "Grote tekst"
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
                }
            },
            toast: {
                invalidColorFormat: "Ongeldig kleurformaat voor {{settingKey}}, zorg ervoor dat het formaat 'R, G, B' of '#RRGGBB' is",
                invalidColorFormatFor: "Ongeldige kleurnotatie voor {{key}}, gebruik \"R, G, B\" of \"#RRGGBB\""
            }
        },
        betterBackreading: {
            name: "BetterBackreading",
            description: "Verbetert het teruglezen door berichten eerder te laden en minder terug te springen.",
            wholeNumber: "Voer een geheel getal in van {{min}} tot {{max}}.",
            option: {
                imageScrollMargin: {
                    label: "Voorlaadafstand voor afbeeldingen",
                    description: "Hoe ver vooruit afbeeldingen worden geladen, in pixels (300-3000)."
                },
                messageLoadBuffer: {
                    label: "Laadbuffer voor berichten",
                    description: "Hoe ver vooruit meer berichten worden opgehaald, in pixels (500-3000)."
                },
                useDiscordMessageCount: {
                    label: "Discords dynamische berichtaantal gebruiken",
                    description: "Laat Discord kiezen hoeveel berichten worden opgehaald op basis van je venster en chatinstellingen."
                },
                messageCount: {
                    label: "Aangepast berichtaantal",
                    description: "Hoeveel berichten per geschiedenisverzoek worden opgehaald als het dynamische aantal is uitgeschakeld (30-100)."
                },
                channelOpenScrollMode: {
                    label: "Positie bij openen van kanaal",
                    description: "Open ongelezen kanalen op de opgeslagen positie (of onderaan), altijd onderaan, of gebruik het standaardgedrag voor ongelezen.",
                    default: "Discord-standaard",
                    bottom: "Altijd onderaan",
                    saved: "Opgeslagen positie"
                }
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
            add: "Voeg nog een reden toe",
            duration: {
                discordDefault: "Discord-standaard",
                none: "Niets verwijderen",
                hour1: "Afgelopen uur",
                hours6: "Afgelopen 6 uur",
                hours12: "Afgelopen 12 uur",
                hours24: "Afgelopen 24 uur",
                days3: "Afgelopen 3 dagen",
                days7: "Afgelopen 7 dagen"
            },
            text: {
                autoDeleteDuration: "Duur van automatisch berichten verwijderen"
            }
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
                enableNestedFolders: {
                    label: "Nesten van mappen inschakelen",
                    description: "Sta toe om mappen in andere mappen te plaatsen door te slepen"
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
                headerSelf: "Je hebt een uitnodiging gestuurd om lid te worden van {{server}}",
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
            description: "Voegt opties toe om rolkleur te kopiëren / rol te bewerken / rolpictogram te bekijken bij rechtsklikken op rollen in het gebruikersprofiel of de ledenlijst",
            option: {
                roleIconFileFormat: {
                    label: "Bestandsformaat rolpictogram",
                    description: "Bestandsindeling die u kunt gebruiken bij het bekijken van rolpictogrammen"
                }
            },
            context: {
                copyColor: "Kopieer rolkleur",
                editRole: "Rol bewerken",
                viewIcon: "Rolpictogram bekijken",
                viewMembers: "Rolleleden bekijken"
            },
            text: {
                roleActions: "Rolacties"
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
            regexHelper: {
                title: "Regex-helper",
                placeholder: "Testinvoer...",
                noPatterns: "Geen patronen ingesteld"
            },
            option: {
                blockedWords: {
                    label: "Geblokkeerde woorden",
                    description: "Door komma's gescheiden lijst met te blokkeren woorden"
                },
                useRegex: {
                    label: "Gebruik Regex",
                    description: "Gebruik elke waarde als reguliere expressie bij het controleren van de berichtinhoud (geavanceerd)"
                },
                regexHelper: {
                    label: "Regex-helper",
                    description: "Test je reguliere expressies op een voorbeeldinvoer"
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
            },
            text: {
                unknownUser: "Onbekende gebruiker"
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
                selectedBorder: "Accentrand van geselecteerd tabblad",
                selectedBackground: "Geselecteerde achtergrondkleur van tabblad",
                tabShadows: "Tabbladschaduweffecten",
                tabRepositioning: "Tabbladherpositionering (soepele positieveranderingen)",
                resizeHandle: "Formaat wijzigen Vervagen",
                questActivate: "Verloop voor actieve quests"
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
                specialPage: "Speciale pagina",
                searchPlaceholder: "Zoek bladwijzers"
            },
            button: {
                save: "Redden",
                delete: "Verwijderen",
                cancel: "Annuleren",
                reset: "Resetten",
                close: "Sluiten"
            },
            context: {
                label: "KanaalTabbladen Contextmenu",
                bookmark: "KanaalTabbladen Bladwijzer Contextmenu",
                tab: "KanaalTabs Tabblad Contextmenu",
                folderMenu: "Bladwijzermap Menu",
                compact: "Compact",
                bookmarkBar: "Bladwijzerbalk",
                openAll: "Alle bladwijzers openen",
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
                },
                folderIcon: {
                    title: "Kies Mappictogram",
                    preview: "Voorbeeld",
                    iconColor: "Pictogramkleur",
                    search: "Zoeken",
                    searchPlaceholder: "Zoek {{count}} pictogrammen...",
                    folderName: "Mapnaam",
                    folderColor: "Mapkleur",
                    folderIcon: "Mappictogram",
                    chooseIcon: "Kies Pictogram",
                    useDefaultIcon: "Gebruik Standaardpictogram"
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
                persistUnreadCountFallback: {
                    label: "Behåll reserv för oläst antal",
                    description: "Behåll reservvärden för olästa märken mellan omladdningar för flikar och bokmärken"
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
                tabHeightScale: {
                    label: "Tabbladhoogteschaal",
                    description: "Tabbladhoogteschaal (percentage)."
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
                    shortcutDisabled: "Deze snelkoppeling is momenteel uitgeschakeld",
                    pressKey: "Druk op een willekeurige toets...",
                    conflictError: "Deze snelkoppeling wordt al gebruikt door: {{key}}",
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
            },
            text: {
                folder: "Map"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Voegt een tekenteller toe aan de chatinvoer",
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
            description: "Verwijdert emoji's en versieringen uit kanaalnamen. Tijdens het bewerken van het kanaal wordt het origineel getoond.",
            option: {
                ignoredChannels: {
                    description: "Kommagescheiden lijst met kanaal-ID's die ongewijzigd moeten blijven.",
                    label: "Genegeerde kanalen"
                }
            },
            text: {
                keepOriginalName: "Oorspronkelijke naam behouden"
            }
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
                unknown: "Onbekende rol",
                andMore: "en nog {{count}}"
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
            },
            text: {
                dark: "Donker",
                light: "Licht"
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
            description: "Opdrachtenpalet in Raycast-stijl om overal in Discord acties uit te voeren",
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
                },
                commandDeleted: "Opdracht verwijderd.",
                statusSetToLabel: "Status ingesteld op {{label}}.",
                themeSetToLabel: "Thema ingesteld op {{label}}.",
                noSettingsPageWas: "Er is geen instellingenpagina opgegeven.",
                unableToOpenLabel: "Kan {{label_that_settings_page}} niet openen.",
                failedToStartDependencies: "Kan afhankelijkheden niet starten: {{join}}",
                messageSentToUsername: "Bericht verzonden naar {{username}}.",
                enabledRestart: "{{name}} ingeschakeld. Herstart om toe te passen.",
                disabledRestart: "{{name}} uitgeschakeld. Herstart om toe te passen.",
                enabled: "{{name}} ingeschakeld.",
                disabled: "{{name}} uitgeschakeld.",
                errorStarting: "Fout bij starten van {{name}}.",
                errorStopping: "Fout bij stoppen van {{name}}."
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
                },
                closeAfterExecute: {
                    description: "Sluit het palet na het uitvoeren van een opdracht.",
                    label: "Sluiten na uitvoeren"
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
            },
            text: {
                insertTextInChat: "Tekst in chat invoegen",
                name: "Name",
                commandName: "Opdrachtnaam",
                settingsPage: "Instellingenpagina",
                searchSettingsPages: "Instellingenpagina's zoeken...",
                text: "Tekst",
                textToInsertInto: "Tekst om in het chatvak in te voegen",
                editCommand: "Opdracht bewerken",
                deleteCommand: "Opdracht verwijderen",
                createCustomCommand: "Aangepaste opdracht maken",
                light: "Licht",
                ash: "As",
                dark: "Donker",
                onyx: "Onyx",
                toggleMute: "Dempen in-/uitschakelen",
                toggleDeafen: "Doof in-/uitschakelen",
                setStatus: "Status instellen",
                searchStatuses: "Statussen zoeken...",
                setLabel: "{{label}} instellen",
                toggleTheme: "Thema wisselen",
                openServer: "Server openen",
                openChannel: "Kanaal openen",
                openDm: "DM openen",
                goHome: "Naar start",
                goToServer: "Naar server gaan",
                searchServers: "Servers zoeken...",
                goToChannel: "Naar kanaal gaan",
                searchChannels: "Kanalen zoeken...",
                searchFriends: "Vrienden zoeken...",
                myAccount: "Mijn account",
                profiles: "Profielen",
                dataPrivacy: "Gegevens en privacy",
                devices: "Apparaten",
                connections: "Verbindingen",
                appearance: "Weergave",
                accessibility: "Toegankelijkheid",
                voiceVideo: "Spraak en video",
                chat: "Chat",
                textImages: "Tekst en afbeeldingen",
                notifications: "Meldingen",
                keybinds: "Sneltoetsen",
                authorizedApps: "Geautoriseerde apps",
                familyCenter: "Gezinscentrum",
                advanced: "Geavanceerd",
                plexcord: "Plexcord",
                plexcordPlugins: "Plexcord-plugins",
                plexcordThemes: "Plexcord-thema's",
                plexcordUpdater: "Plexcord-updater",
                plexcordChangelog: "Plexcord-wijzigingslog",
                openQuickcss: "QuickCSS openen",
                openUpdater: "Updater openen",
                openChangelog: "Wijzigingslog openen",
                restartDiscord: "Discord herstarten",
                managePlugins: "Plugins beheren",
                searchPlugins: "Plugins zoeken...",
                sendDm: "DM verzenden",
                recipient: "Ontvanger",
                message: "Bericht",
                messageContent: "Berichtinhoud",
                openPaletteHotkey: "Sneltoets om palet te openen",
                actions: "Acties",
                preview: "Voorbeeld",
                openCommand: "Opdracht openen",
                copyAnswer: "Antwoord kopiëren",
                openDetails: "Details openen",
                calculator: "Rekenmachine",
                expression: "Expressie",
                result: "Resultaat",
                copyExpression: "Expressie kopiëren",
                pinned: "Vastgezet",
                suggestions: "Suggesties",
                setAlias: "Alias instellen",
                aliasForLabel: "Alias voor {{label}}",
                leaveEmptyToRemove: "Leeg laten om te verwijderen",
                command: "Opdracht",
                noResults: "Geen resultaten",
                addFile: "Bestand toevoegen",
                saveCommand: "Commando opslaan",
                createCommand: "Commando maken",
                nameRequired: "Naam is verplicht.",
                enterValidUrl: "Voer een geldige URL in.",
                pickSettingsPage: "Kies een instellingenpagina uit de suggesties.",
                textRequired: "Tekst is verplicht.",
                commandSaved: "Commando opgeslagen.",
                commandCreated: "Commando gemaakt.",
                editCustomCommand: "Aangepast commando bewerken",
                disablePlugin: "Plugin uitschakelen",
                enablePlugin: "Plugin inschakelen",
                pickRecipient: "Kies een ontvanger uit de suggesties.",
                addMessageOrFile: "Voeg een bericht of een bestand toe.",
                pressKeys: "Druk op toetsen...",
                answerCopied: "Antwoord naar klembord gekopieerd.",
                calculationCopied: "Berekening naar klembord gekopieerd.",
                unpinCommand: "Commando losmaken",
                pinCommand: "Commando vastmaken",
                saveAlias: "Alias opslaan",
                changeHotkey: "Sneltoets wijzigen",
                recordHotkey: "Sneltoets opnemen",
                pressKeyCombo: "Druk op een toetscombinatie, Backspace om te wissen, Esc om te annuleren",
                searchIn: "Zoeken in {{title}}...",
                searchCommands: "Commando's zoeken...",
                somethingWentWrong: "Er is iets misgegaan.",
                remove: "Verwijderen",
                enabled: "Ingeschakeld",
                disabled: "Uitgeschakeld",
                sectionNavigation: "Navigatie",
                sectionCustom: "Aangepast",
                sectionPlugins: "Plugins",
                sectionMessaging: "Berichten",
                current: "Huidig",
                submit: "Verzenden"
            },
            description2: "Opdrachtenpalet in Raycast-stijl om overal in Discord acties uit te voeren"
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
            copy: "Kleuren van serverprofiel kopiëren",
            toast: {
                noColor: "Geen profielkleuren gevonden!",
                copied: "Profielkleuren gekopieerd naar klembord!",
                error: "Fout bij kopiëren van profielkleuren!"
            },
            text: {
                formatted: "Primaire kleur #{{primary}}, Secundaire kleur #{{secondary}}"
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
                copy: "Stickerlink kopiëren",
                open: "Stickerlink openen"
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
                    body: "Awn :( Discord is twee keer snel gecrasht en heeft niet geprobeerd te herstellen.",
                    update: "Oh, Discord is zojuist gecrasht... maar goed nieuws: er is een Plexcord-update beschikbaar die dit probleem mogelijk oplost! Wil je nu updaten?",
                    recover: "Proberen te herstellen...",
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
                    label: "Vrij rondzwerven",
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
            },
            context: {
                changeIcon: "Pictogram wijzigen"
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
                sharing: "Activiteit delen is niet ingeschakeld, dus anderen kunnen je aangepaste Rich Presence niet zien!",
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
                },
                enablePresence: {
                    description: "Of de aanwezigheid moet worden getoond",
                    label: "Aanwezigheid inschakelen"
                }
            },
            toast: {
                savedPresetName: "Voorinstelling {{name}} opgeslagen.",
                loadedPresetName: "Voorinstelling {{name}} geladen.",
                deletedPresetSelectedpreset: "Voorinstelling {{selectedPreset}} verwijderd."
            },
            text: {
                presetName: "Naam voorinstelling",
                selectAPreset: "Kies een voorinstelling",
                streamLinkTwitchOr: "Streamlink (Twitch of YouTube, alleen als het activiteitstype Streamen is)",
                presets: "Voorinstellingen",
                save: "Opslaan",
                load: "Laden",
                delete: "Verwijderen",
                noSavedPresetsYet: "Nog geen opgeslagen voorinstellingen.",
                showCustomRpc: "Aangepaste RPC tonen",
                customRpcDisabled: "Aangepaste RPC uitgeschakeld",
                theEnablePresenceSetting: "De instelling \"Aanwezigheid inschakelen\" staat uit, dus je aanwezigheid wordt niet getoond. Was dat niet de bedoeling, schakel haar dan hieronder in.",
                activitySharingDisabled: "Activiteit delen uitgeschakeld",
                discordDeveloperPortal: "Discord-ontwikkelaarsportaal",
                imgur: "Imgur",
                enableActivitySharing: "Activiteit delen inschakelen"
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
                stop: "Stoppen",
                volume: "Volume",
                soundSource: "Geluidsbron",
                customFile: "Aangepast bestand",
                uploadNew: "Nieuw uploaden",
                delete: "Verwijder het geselecteerde bestand"
            },
            option: {
                default: "Standaard",
                custom: "Aangepast",
                select: "Selecteer een bestand...",
                overrides: {
                    label: "Overschrijvingen"
                },
                soundpack: {
                    label: "Geluidspakket",
                    description: "Geluidspakket dat gebruikt wordt in plaats van het pakket dat in Discord is ingesteld.",
                    default: "Discord-standaard"
                }
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
                or: "of",
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
            },
            text: {
                toggleDearrow: "Dearrow in-/uitschakelen"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Ruimt Discord op door niet-essentiële UI-elementen te verwijderen, zoals profieleffecten, winkeltabbladen, boosts en meer.",
            option: {
                userProfileHeader: {
                    label: "Gebruikersprofiel"
                },
                removeAvatarDecoration: {
                    label: "Avatardecoratie verwijderen",
                    description: "Avatardecoraties verwijderen. Dit is/wordt uitgeschakeld als Decor is ingeschakeld.",
                    alertBody: "Het verwijderen van avatardecoraties is uitgeschakeld om conflicten met de Decor-plugin te voorkomen.",
                    ok: "OK"
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
                },
                removeProfileFrame: {
                    description: "Profielkaders verwijderen.",
                    label: "Profielkader verwijderen"
                },
                removeDisplayNameStyles: {
                    description: "Geanimeerde/opgemaakte weergavenamen in de ledenlijst verwijderen.",
                    label: "Weergavenaamstijlen verwijderen"
                },
                removeLibraryAboveDms: {
                    description: "Bibliotheek boven de DM-lijst verwijderen.",
                    label: "Bibliotheek boven DM's verwijderen"
                },
                removeFamilyCenterAboveDms: {
                    description: "Gezinscentrum boven de DM-lijst verwijderen.",
                    label: "Gezinscentrum boven DM's verwijderen"
                }
            },
            text: {
                discordAlreadyHasA: "Discord heeft al een ingebouwde optie voor gebruikersnaamstijl in",
                accessibilitySettings: "toegankelijkheidsinstellingen."
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
            },
            toast: {
                failedToAuthorizeMessage: "Autoriseren mislukt: {{message}}"
            },
            text: {
                removeDecoration: "Decor-decoratie verwijderen",
                decoration: "Decor-decoratie",
                none: "Geen",
                decorationFile: "Decoratiebestand"
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
            },
            text: {
                reconnect: "Opnieuw verbinden",
                loadingLazyModules: "Lazy modules worden geladen, herstarten kan fouten veroorzaken",
                loadedLazyModules: "Alle lazy modules zijn geladen",
                failedLazyModules: "Laden van lazy modules mislukt, controleer de console",
                ok: "OK"
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
            },
            text: {
                notSupported: "Niet ondersteund",
                devBuild: "Dev-build",
                standalone: "Standalone"
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
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "Voegt een popover-knop toe om alle bijlagen van een bericht in één keer te downloaden.",
            button: "Alle bijlagen downloaden",
            toast: {
                success: "{{count}} bijlage(n) gedownload.",
                partial: "{{succeeded}} van {{total}} bijlagen gedownload. {{failed}} mislukt.",
                downloadedPluralizeSucceededAttachment: "{{pluralize_succeeded_attachment}} gedownload.",
                downloadedSucceededOfLength: "{{succeeded}} van {{length}} bijlagen gedownload. {{failed}} mislukt."
            },
            option: {
                downloadAllFileTypes: {
                    description: "Download ook bijlagen die geen media zijn. Schakel dit alleen in als je vertrouwt wat mensen je sturen.",
                    label: "Alle bestandstypen downloaden"
                }
            }
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
                },
                noReusableInvite: "Geen herbruikbare uitnodiging beschikbaar.",
                unableToReuseInvite: "Kan uitnodiging niet hergebruiken."
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
            },
            text: {
                searchExperiments: "Experimenten zoeken"
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
            },
            text: {
                unknownError: "Onbekende fout"
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
                console: "Er is iets misgegaan (controleer de console!)",
                successfullyClonedNameTo: "{{name}} is gekloond naar {{name_your_server}}!"
            },
            context: {
                clone: "Kloon {{type}}",
                cloneName: "Kloon {{data}}"
            },
            text: {
                yourServer: "je server",
                cloneTo: "Klonen naar {{name}}",
                emoji: "Emoji",
                sticker: "Sticker"
            }
        },
        externalPlayer: {
            name: "ExternalPlayer",
            description: "Open video's en audio in een externe mediaspeler zoals mpv.",
            option: {
                player: {
                    label: "Speler",
                    description: "In welke speler media worden geopend."
                },
                openOnClick: {
                    label: "Openen bij klikken",
                    description: "Open video's en audio in de speler wanneer je op afspelen drukt, in plaats van ze in Discord af te spelen."
                },
                path: {
                    label: "Spelerpad",
                    description: "Absoluut pad naar het uitvoerbare bestand van de speler. Laat leeg om die uit je PATH te gebruiken."
                },
                args: {
                    label: "Spelerargumenten",
                    description: "Extra argumenten die aan de speler worden doorgegeven. Zet waarden met spaties tussen aanhalingstekens."
                }
            },
            context: {
                openIn: "Openen in {{player}}"
            },
            toast: {
                alreadyOpen: "Al geopend in {{player}}.",
                restartRequired: "Start Discord volledig opnieuw om ExternalPlayer te laden.",
                openFailed: "Kan de speler niet openen."
            },
            status: {
                paused: "Gepauzeerd in {{player}}",
                playing: "Speelt af in {{player}}"
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
                accent: "Accentkleur"
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
                accent: "Accentkleur",
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
                failedSave: "Kan alias niet opslaan.",
                removedAliasAlias: "Alias :{{alias}}: verwijderd",
                aliasSetForGetemojidisplayname: "Alias ingesteld voor {{getEmojiDisplayName_ref}}."
            },
            button: {
                edit: "Alias ​​bewerken",
                set: "Alias ​​instellen"
            },
            text: {
                remove: "Verwijderen",
                noAliasesSetYet: "Nog geen aliassen ingesteld.",
                aliasRequired: "Alias is verplicht.",
                aliasInvalid: "Alias moet 2-32 tekens lang zijn en mag alleen kleine letters, cijfers of underscores bevatten."
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "Favoriet elke afbeelding",
            noFiles: "Geen bestanden gevonden die overeenkomen met je zoekopdracht.",
            searchPlaceholder: "Bestanden zoeken",
            media: "Media",
            demoText: "Klik op de ster om een bestand toe te voegen aan favorieten.\nFavoriete bestanden verschijnen hier!",
            fetchError: "Kon {filename} niet ophalen",
            uploadError: "Kon {filename} niet uploaden",
            text: {
                clickTheStarTo: "Klik op de ster om een bestand als favoriet te markeren.",
                favoriteFilesWillShow: "Favoriete bestanden verschijnen hier!"
            },
            option: {
                localThumbnails: {
                    description: "Genereer bestandsminiaturen lokaal in plaats van een externe dienst (placeholder.nin0.dev) te gebruiken. Niet compatibel met mobiel. Deze optie wijzigen heeft geen invloed op bestaande favorieten.",
                    label: "Lokale miniaturen"
                }
            }
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
                couldntFind: "Kan geen antwoord vinden."
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
                },
                onlyWhenInVoice: {
                    label: "Alleen in spraak",
                    description: "Volg de gebruiker alleen als je in een spraakkanaal zit"
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
            },
            text: {
                currentFont: "Huidig lettertype:",
                resetFont: "Lettertype herstellen"
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Forceer de eigenaarskroon naast gebruikersnamen, zelfs als de server groot is."
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
            },
            option: {
                showFriendsInChat: {
                    description: "Een vriendpictogram tonen bij berichten van vrienden.",
                    label: "Vrienden in chat tonen"
                }
            },
            text: {
                friend: "Vriend",
                rankIcon: "Rangpictogram"
            }
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
            description: "Zorgt ervoor dat avatars de volledige VC-tegel in beslag nemen"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Voegt naast de microfoon- en dempknop een knop toe om spelactiviteit in/uit te schakelen. Rechtsklik om Spotify-activiteit te schakelen.",
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
            },
            text: {
                disableGameActivity: "Game-activiteit uitschakelen",
                enableGameActivity: "Game-activiteit inschakelen",
                shareSpotifyActivity: "Spotify-activiteit delen",
                shareSpotifyActivityAccount: "Spotify-activiteit delen ({{name}})"
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
                alreadyCollection: "Deze GIF staat al in de verzameling",
                collectionsImportedSuccessfully: "Verzamelingen geïmporteerd.",
                failedToImportCollections: "Kan verzamelingen niet importeren: {{String_err}}"
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
            },
            text: {
                gifPickerCategoryOptions: "Categorieopties van GIF-kiezer",
                gifCollections: "GIF-collecties",
                unknown: "Onbekend"
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
                    description: "Verleid het lot en stuur een GIF",
                    restricted: "Deze opdracht is beperkt op deze server."
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
                title: "GitHub-repository's van {{username}}",
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
                open: "Openen"
            },
            option: {
                color: {
                    label: "Kleur",
                    description: "Kleur het rood bij het openen"
                },
                open: {
                    label: "Openen",
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
            description: "Verberg berichten en DM's tijdelijk tot je opnieuw opstart.",
            button: {
                hide: "Verbergen",
                hideDm: "DM verbergen",
                unhideDm: "DM tonen"
            },
            toggle: {
                none: "Geen verborgen DM's",
                hide: "Verborgen DM's verbergen",
                show: "Verborgen DM's tonen"
            },
            option: {
                hidePopoverButton: {
                    label: "Popover-knop verbergen",
                    description: "Verberg de knop Verbergen in de berichtenpopover."
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "Verbergt de spraakindicator in de serverlijst wanneer de enige actieve spraakkanalen gedempt zijn"
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
                invalid: "Kan notities niet importeren.",
                invalidJson: "Ongeldige JSON"
            },
            toolbox: {
                action: "Notities openen"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "NOTITIE"
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
                    description: "Alle luisteractiviteiten negeren (meestal Spotify-activiteiten)"
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
            },
            text: {
                enableActivity: "Activiteit inschakelen",
                disableActivity: "Activiteit uitschakelen"
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
            },
            text: {
                bytes: "Bytes"
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
            },
            toast: {
                instantScreenshareDisabled: "Direct scherm delen {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
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
                    openEditor: "Editor openen",
                    resetData: "Opslag opnieuw instellen",
                    sure: "Weet je het zeker?"
                }
            },
            text: {
                serverOptions: "Serveropties",
                copyServerId: "Server-ID kopiëren",
                serverIdCopied: "Server-ID naar klembord gekopieerd"
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
            },
            text: {
                keywordEntryI1: "Trefwoordvermelding {{i_1}}",
                listPriorityAdvanced: "Lijstprioriteit (geavanceerd)",
                whichListToPrioritize: "Welke lijst voorrang krijgt als een bericht beide lijsten activeert",
                ifYouAreNot: "Weet je het niet zeker, dan staat dit in de meeste gevallen op Zwarte lijst"
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
                showAlbumCover: {
                    label: "Albumhoezen tonen",
                    description: "Toon albumhoezen. Als je dit uitschakelt, wordt er een tijdelijke aanduiding getoond. Handig als je muziek ongeschikte hoesafbeeldingen heeft"
                },
                useLogo: {
                    label: "Gebruik logo",
                    description: "Toon het ListenBrainz-logo op albumhoezen"
                }
            },
            button: {
                profile: "ListenBrainz-profiel",
                viewSong: "Nummer bekijken"
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
            },
            text: {
                allQuotesDisabled: "Heb je echt alle laadcitaten uitgeschakeld? Wat ben jij een clown..."
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
            orPaste: "Of plak een afbeelding vanaf uw klembord!",
            verifyLogin: "Inloggen verifiëren",
            text: {
                scanQrCode: "QR-code scannen"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "Toont markdowntabellen in GitHub-stijl in Discord-berichten.",
            toolbar: {
                label: "Markdown-tabelweergave",
                table: "Tabel",
                raw: "Ruw"
            },
            option: {
                hideToggle: {
                    label: "Schakelaar verbergen",
                    description: "Verbergt de Tabel/Ruw-schakelaar en toont tabellen altijd weergegeven."
                }
            }
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
            description: "Toont het aantal online leden, totaal aantal leden en gebruikers in spraakkanalen van de server - in de ledenlijst en tooltip.",
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
            totalVoice: "{{formattedVoiceCount}} leden in stem",
            tooltip: {
                total: "{{count}} serverleden in totaal"
            }
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
                pin: "Vastzetten"
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
            linkCopied: "Link gekopieerd!",
            text: {
                shift: "Shift",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "Backspace",
                pickEmoji: "Emoji kiezen"
            },
            emojiSetting: {
                pick: "Emoji kiezen",
                selectMain: "Emoji voor reacties kiezen",
                selectAdditional: "Extra emoji's kiezen",
                additionalPlaceholder: "gescheiden door komma/nieuwe regel, max. {{max}}"
            },
            toast: {
                cannotReact: "Kan niet reageren: ontbrekende rechten",
                linkCopied: "Link gekopieerd!"
            }
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
            removeMessage: "Berichtgeschiedenis wissen",
            removeMessageTemporary: "Bericht verwijderen (tijdelijk)",
            clearMessageLog: "Berichtenlog wissen",
            showDiff: "Verschillen tonen",
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
                ignoreSelfEdits: {
                    label: "Eigen bewerkingen negeren",
                    description: "Of bewerkingen door jezelf genegeerd moeten worden"
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
                },
                logDeletedAttachments: {
                    description: "Of verwijderde bijlagen moeten worden gelogd",
                    label: "Verwijderde bijlagen loggen"
                }
            },
            text: {
                clearHistory: "Geschiedenis wissen",
                toggleDeletedHighlight: "Markering van verwijderde in-/uitschakelen",
                enableDiffView: "Verschilweergave inschakelen",
                disableDiffView: "Verschilweergave uitschakelen",
                noDeletedMessages: "Geen verwijderde berichten",
                deletedMessageSuffix: " verwijderd bericht",
                deletedMessagesSuffix: " verwijderde berichten"
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
                    description: "Server-, kanaal- of gebruikers-ID's die altijd in het berichtenlogboek worden getoond."
                },
                blacklistedIds: {
                    label: "ID's op de zwarte lijst",
                    description: "Server-, kanaal- of gebruikers-ID's die nooit in het berichtenlogboek worden getoond."
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
                clearLogsOnRestart: {
                    label: "Logs wissen bij herstart",
                    description: "Wist logs wanneer Discord opnieuw opstart."
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
            },
            toast: {
                clearedLogs: "Logboeken gewist",
                failedToClearLogs: "Kan logboeken niet wissen",
                failedToRemoveMessage: "Kan bericht niet verwijderen. Bekijk de console voor details.",
                noMessagesFoundIn: "Geen berichten gevonden in logbestand",
                successfullyImportedCountLogs: "{{count}} logboeken geïmporteerd",
                successfullyExportedLogs: "Logboeken geëxporteerd",
                successfullyExportedCountLogs: "{{count}} logboeken geëxporteerd",
                errorExportingLogsCheck: "Fout bij exporteren van logboeken. Bekijk de console voor meer informatie"
            },
            text: {
                jsonFile: "JSON-bestand",
                clearLogs: "Logs wissen",
                clearingLogs: "Logs wissen...",
                messageLogger: "Message Logger",
                importLogs: "Logs importeren",
                logs: "Logs",
                loadingTabLogs: "Logboeken laden: {{tab}}..."
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
                    description: "Haalt de huidige tijd op",
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
                spotifySectionTitle: {
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
                tidalSectionTitle: {
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
                websocketURL: {
                    label: "Websocket-URL",
                    description: "Standaard is ws://localhost:24123"
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
                showMusicNoteOnNoLyrics: {
                    label: "Muzieknoot weergeven zonder songteksten",
                    description: "Toon een muzieknootpictogram als er geen songteksten zijn gevonden"
                },
                lyricsPosition: {
                    label: "Songtekst Positie",
                    description: "Positie van het songtekstpaneel",
                    above: "Bovenstaande speler(s)",
                    below: "Hieronder speler(s)"
                },
                lyricsProvider: {
                    label: "Aanbieder van songteksten",
                    description: "Waar de songtekst vandaan komt",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "Basis-URL van Spotify Lyrics API",
                    description: "Basis-URL van aangepaste instantie (bijvoorbeeld: http://localhost:8080)."
                },
                translateTo: {
                    label: "Vertalen naar",
                    description: "Vertaal songteksten naar - Als u dit wijzigt, worden bestaande vertalingen gewist",
                    cleared: "Vertalingen gewist"
                },
                lyricsConversion: {
                    label: "Conversie van songteksten",
                    description: "Automatisch teksten vertalen of romaniseren",
                    none: "Geen",
                    translate: "Vertalen",
                    romanize: "Romaniseren"
                },
                fallbackProvider: {
                    label: "Terugvalaanbieder",
                    description: "Als een songtekstprovider faalt, probeer dan andere providers"
                },
                showFailedToasts: {
                    label: "Mislukte toastjes weergeven",
                    description: "Toon toast als de songtekst niet kan worden geladen"
                },
                purgeLyricsCache: {
                    label: "Leeg de songtekstcache",
                    description: "Wis alle in de cache opgeslagen teksten en vertalingen",
                    button: "Cache leegmaken",
                    cacheLyricsPurged: "Cache van de songteksten is leeggemaakt"
                },
                lyricDelay: {
                    label: "Vertraging songtekst"
                }
            },
            context: {
                spotify: {
                    label: "Spotify-lyriekmenu",
                    type: "Spotify {{type}}-menu",
                    copy: "Kopieer {{type}} Naam",
                    link: "Kopieer {{type}}-link",
                    open: "{{type}} openen in Spotify",
                    album: "Spotify-albummenu"
                },
                tidal: {
                    label: "Tidal Songtekstmenu",
                    lyrics: "Getijdenteksten",
                    type: "Getijden {{name}} Menu",
                    copy: "Kopieer {{name}} Naam",
                    open: "{{name}} openen in Tidal",
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
            },
            text: {
                unknownArtist: "Onbekende artiest",
                unknownTitle: "Onbekende titel"
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
                apply: "NewGuildSettings toepassen op map"
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
                continue: "Doorgaan",
                supportUs: "Plexcord is opensourcesoftware. Als je het graag gebruikt, overweeg ons dan te steunen",
                supportUsLink: "hier"
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
            description: "Maakt bureaubladmeldingen informatiever",
            text: {
                threadInParent: "{{thread}} in {{parent}}"
            }
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
                },
                telegram: {
                    label: "Telegram",
                    description: "Telegram-links openen in de Telegram-app"
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
            },
            text: {
                roleOptions: "Rolopties",
                userOptions: "Gebruikersopties",
                unknownRole: "Onbekende rol",
                unknownUser: "Onbekende gebruiker"
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
                    label: "DM's vastzetten",
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
                },
                defaultCategoryName: "Vastgezette categorie {{number}}"
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
            embeddedTooltip: "Ingebed (console of game)",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lijst",
                    description: "Indicatoren tonen in gebruikersprofielen"
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
            about: "We kunnen niet garanderen dat je door deze plugin geen waarschuwing of ban krijgt. Als je Xbox/Playstation/VR kiest, kan je client een verouderde versie worden.",
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
                    description: "Op welk platform je wilt doen alsof je zit.",
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
            description: "Hiermee kun je verschillende profielvoorinstellingen opslaan en laden.",
            toast: {
                importFailed: "Kan voorinstellingen niet importeren. Het bestand is mogelijk ongeldig.",
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
            },
            text: {
                selectAServer: "Kies een server",
                profileSets: "Profielsets",
                youAreNotIn: "Je zit nog niet in een server.",
                mainProfile: "Hoofdprofiel",
                serverProfiles: "Serverprofielen",
                openProfileSets: "Profielsets openen"
            }
        },
        questify: {
            name: "Questify",
            description: "Verbeter specifieke Quest-functies, schakel storende elementen uit of verwijder Quests volledig.",
            quests: "Quests",
            context: {
                quest: {
                    label: "Quest-knopmenu",
                    ignore: "Alles als genegeerd markeren",
                    reset: "Negeerlijst resetten",
                    fetch: "Quests ophalen",
                    markAsIgnored: "Als genegeerd markeren",
                    unmarkAsIgnored: "Niet meer negeren",
                    stopAuto: "Automatisch voltooien stoppen",
                    startAuto: "Automatisch voltooien starten",
                    copyQuestID: "Quest-ID kopiëren",
                    pauseAutoEnrollment: "Automatisch inschrijven pauzeren",
                    unpauseAutoEnrollment: "Automatisch inschrijven hervatten",
                    pauseAutoProcessing: "Automatisch verwerken pauzeren",
                    unpauseAutoProcessing: "Automatisch verwerken hervatten"
                }
            },
            button: {
                completing: "Bezig met voltooien...",
                completingWithTime: "Bezig met voltooien ({{time}})",
                completingIn: "Voltooid over {{time}}",
                queued: "In wachtrij ({{position}})",
                resuming: "Hervatten...",
                completeNow: "Nu voltooien",
                complete: "Voltooien ({{time}})",
                resume: "Hervatten ({{time}})",
                completed: "Voltooid"
            },
            reward: {
                orbs: "{{status}} voor {{orbQuantity}} Orbs.",
                article: "{{status}} voor {{itemName}}.",
                unrecognized: "{{status}} voor een onbekende beloning."
            },
            toast: {
                autoCompleteBroken: "Automatisch voltooien werkt niet. Er komt binnenkort een oplossing.",
                enrollmentFailed: "Inschrijven voor de Quest {{questName}} is mislukt.",
                enrollmentInNormalizequestnameQuest: "Inschrijving voor quest {{normalizeQuestName_quest}} mislukt{{rateLimitSuffix}}.",
                automationUnlocked: "Quest-automatisering ontgrendeld.",
                automationLocked: "Quest-automatisering vergrendeld."
            },
            notification: {
                completed: {
                    title: "Quest voltooid!",
                    body: "De Quest {{questName}} is voltooid."
                },
                newQuest: {
                    title: "Nieuwe Quest gevonden!",
                    body: "De Quest {{questName}} is nu beschikbaar."
                },
                newQuests: {
                    title: "Nieuwe Quests gevonden!",
                    body: "{{count}} nieuwe Quests zijn nu beschikbaar."
                },
                newExcludedQuest: {
                    title: "Nieuwe uitgesloten Quest gevonden!",
                    body: "De uitgesloten Quest {{questName}} is gevonden. ID: {{questId}}"
                },
                newExcludedQuests: {
                    title: "Nieuwe uitgesloten Quests gevonden!",
                    body: "{{count}} nieuwe uitgesloten Quests gevonden. Bekijk de console voor hun Quest-ID's."
                }
            },
            alert: {
                restart: {
                    title: "Herstart vereist",
                    body: "Een wijziging in de instellingen van Questify vereist een herstart.",
                    confirm: "Herstarten",
                    cancel: "Later"
                },
                dangerous: {
                    title: "Weet je het zeker?",
                    confirm: "Doorgaan",
                    cancel: "Annuleren",
                    disableEverything: "Dit schakelt de Quest-functionaliteit volledig uit.",
                    allowDangerous: "Dit staat het wijzigen van gevaarlijke instellingen toe."
                }
            },
            status: {
                unclaimed: "NIET GECLAIMD",
                claimed: "Geclaimd",
                ignored: "Genegeerd",
                expired: "Verlopen"
            },
            questTypes: {
                watchVideo: "Video bekijken",
                watchVideoOnMobile: "Video bekijken op mobiel",
                achievementInActivity: "Prestatie in activiteit",
                achievementInGame: "Prestatie in game",
                playActivity: "Activiteit spelen",
                playOnDesktop: "Spelen op desktop",
                playOnDesktopV2: "Spelen op desktop V2",
                streamOnDesktop: "Streamen op desktop",
                playOnPlayStation: "Spelen op PlayStation",
                playOnXbox: "Spelen op Xbox"
            },
            settings: {
                questButton: {
                    title: "Quest-knop",
                    description: "Toon een Quest-knop in de serverlijst met een optionele indicator voor niet-geclaimde en niet-genegeerde Quests.",
                    behavior: "Knopgedrag",
                    leftClick: "Actie bij linkerklik:",
                    middleClick: "Actie bij middelklik:",
                    rightClick: "Actie bij rechterklik:",
                    visibility: "Zichtbaarheid van de knop:",
                    visibilityTooltip: "Altijd toont de Quest-knop zolang deze functie is ingeschakeld.\n\nNiet geclaimd toont hem alleen als je relevante niet-geclaimde Quest-beloningen hebt.\n\nNooit verbergt de Quest-knop.",
                    unclaimedIndicator: "Indicator niet geclaimd:",
                    unclaimedIndicatorTooltip: "Pil toont Discords ongelezen-markering naast de Quest-knop.\n\nBadge toont het aantal relevante niet-geclaimde Quest-beloningen.\n\nBeide toont de pil en de badge samen.\n\nGeen verbergt de indicatoren.",
                    badgeColor: "Badgekleur:",
                    relevancy: "Quest-relevantie",
                    includedRewardTypes: "Meegenomen beloningstypen:",
                    includedRewardTypesTooltip: "Tel alleen Quests met deze beloningstypen als niet geclaimd bij het bepalen van de knopzichtbaarheid, het badgegetal en het meldingsgedrag.",
                    includedQuestTypes: "Meegenomen Quest-typen:",
                    includedQuestTypesTooltip: "Tel alleen Quests met deze taaktypen als niet geclaimd bij het bepalen van de knopzichtbaarheid, het badgegetal en het meldingsgedrag.",
                    display: {
                        always: "Altijd",
                        unclaimed: "Niet geclaimd",
                        never: "Nooit"
                    },
                    indicator: {
                        pill: "Pil",
                        badge: "Badge",
                        both: "Beide",
                        none: "Geen"
                    },
                    action: {
                        openQuests: "Quests openen",
                        contextMenu: "Contextmenu",
                        pluginSettings: "Plugin-instellingen",
                        nothing: "Niets"
                    },
                    rewardTypes: {
                        orbs: "Orbs",
                        nitroCodes: "Nitro-codes",
                        rewardCodes: "Beloningscodes",
                        inGameItems: "In-game items",
                        profileCollectibles: "Profielverzamelobjecten"
                    }
                },
                questFeatures: {
                    title: "Quest-functies",
                    description: "Pas aan hoe Quests werken om functionaliteit te verbeteren of te verwijderen.",
                    disableFeatures: "Functies uitschakelen",
                    disableEverything: "Quest-functionaliteit volledig uitschakelen:",
                    disableEverythingTooltip: "Dit schakelt alle plugin-verbeteringen uit, verbergt de Quest-pagina en Quest-elementen in heel Discord en voorkomt dat Discord Quest-gegevens ophaalt. De winkel wordt niet beïnvloed, omdat Orbs als tweede valuta te nauw met de winkel verbonden zijn.",
                    disableSpecific: "Specifieke functies uitschakelen:",
                    disableSpecificTooltip: "Gesponsorde banner is een betaalde Quest-banner bovenaan de Quest-pagina.\n\nVerhuismeldingen zijn aanduidingen, zoals op de Ontdekken-pagina, dat Quests naar DM's zijn verplaatst.\n\nVriendenlijst-promo is een kaart in de sectie \"Nu actief\" van je vriendenlijst terwijl een gebruiker met wie je een server deelt een game met een actieve Quest speelt.\n\nLedenlijst-promo is een pictogram bij leden in de ledenlijst van een server terwijl ze een game met een actieve Quest spelen.\n\nAccountpaneel-promo is een betaalde Quest-promotie boven je accountpaneel.\n\nAccountpaneel-voortgang is de actieve of voltooide Quest-voortgang boven je accountpaneel.\n\nQuest- & Orbs-badges zijn badges op profielen voor wie minstens één Quest heeft voltooid of de Orbs-badge heeft gekocht.",
                    disableOptions: {
                        sponsoredBanner: "Gesponsorde banner",
                        relocationNotices: "Verhuismeldingen",
                        friendsListPromo: "Vriendenlijst-promo",
                        membersListPromo: "Ledenlijst-promo",
                        accountPanelPromo: "Accountpaneel-promo",
                        accountPanelProgress: "Accountpaneel-voortgang",
                        orbsAndQuestsBadges: "Quest- & Orbs-badges"
                    },
                    modifyFeatures: "Functies aanpassen",
                    warningTos: "Discord is begonnen met het waarschuwen van gebruikers van scripts of plugins die aanpassen hoe Quests worden voltooid, wat in strijd is met hun {{tos}}.",
                    tos: "Servicevoorwaarden",
                    warningEscalate: "De waarschuwingen lijken beperkt tot het dreigen met verlies van toegang tot Quests of hun beloningen, maar Discord kan op elk moment strenger worden.",
                    warningDetection: "Door de verschillende methoden die Discord gebruikt om gebruikers te volgen, is er realistisch gezien geen manier om detectie te ontwijken. Als je doorgaat, besef dan dat Discord het waarschijnlijk op een gegeven moment zal detecteren.",
                    warningRisk: "Gebruik de volgende schakelaar om op eigen risico toegang te krijgen tot mogelijk gevaarlijke instellingen.",
                    allowDangerous: "Wijzigen van gevaarlijke instellingen toestaan...",
                    disallowDangerous: "Resetten en wijzigen van gevaarlijke instellingen verbieden...",
                    completeVideoQuicker: "Automatisch voltooien van video-Quests versnellen:",
                    completeVideoQuickerTooltip: "Discord staat toe dat video-Quests worden voltooid zodra sinds je inschrijving de videoduur min 24 seconden is verstreken.\n\nDat betekent dat een video-Quest van 24 seconden of korter, of een Quest waarvoor je je inschrijft en later terugkomt, direct kan worden voltooid.\n\nDeze instelling geldt alleen voor het automatisch voltooien van video-Quests en is afhankelijk van de instelling voor automatisch voltooien hieronder. Handmatig voltooien vereist nog steeds het wachten van de volledige duur en hangt niet af van het inschrijfmoment.",
                    mobileDesktop: "Sommige mobiel-only video-Quests voltooibaar maken op desktop:",
                    mobileDesktopTooltip: "Voor sommige mobiel-only video-Quests kun je je op desktop inschrijven, maar ze moeten nog steeds op mobiel worden voltooid. Deze instelling maakt voltooien op desktop mogelijk.\n\nVoor sommige mobiel-only video-Quests kun je je alleen op mobiel inschrijven. Om deze instelling daarop toe te passen, moet je je eerst op je mobiele apparaat inschrijven voordat je terugkeert naar desktop en je Quests vernieuwt.\n\nAfzonderlijk ingeschakeld geldt deze instelling alleen voor het handmatig voltooien van video-Quests. Het automatisch voltooien van mobiele video-Quests vanaf desktop hangt af van de instelling voor automatisch voltooien hieronder en schakelt deze instelling impliciet ook in.",
                    simultaneous: "Quests tegelijk in plaats van na elkaar automatisch voltooien:",
                    simultaneousTooltip: "Standaard worden meerdere automatisch te voltooien Quests in een wachtrij gezet en op volgorde voltooid.\n\nMet deze instelling lopen alle automatisch te voltooien Quests in plaats daarvan tegelijk.\n\nDeze instelling geldt alleen voor automatisch voltooien en is afhankelijk van de instelling voor automatisch voltooien hieronder.",
                    resumeInterrupted: "Onderbroken automatische voltooiingen hervatten na herladen of herstarten:",
                    resumeInterruptedTooltip: "Deze instelling hervat automatisch voltooiingen die door herladen of herstarten zijn onderbroken, inclusief het opnieuw in de wachtrij zetten van Quests die al in de wachtrij stonden maar nog niet waren begonnen.",
                    autoProcess: "Compatibele Quests automatisch verwerken voor automatisch voltooien:",
                    autoProcessTooltip: "Voltooit in aanmerking komende, niet-geclaimde, niet-genegeerde en niet-verlopen Quests die binnen je beloning- en Quest-typefilters vallen en worden gedetecteerd terwijl Discord draait. Alleen ondersteunde taaktypen die hieronder zijn ingeschakeld, worden meegenomen.\n\nSchrijft zich automatisch in voor compatibele Quests voordat ze in de wachtrij worden gezet voor automatisch voltooien. Wacht bekende rate-limit-wachttijden af. Stopt bij onbekende fouten, rate limits zonder wachttijd of herhaalde inschrijvingsfouten.",
                    autoEnroll: "Automatisch inschrijven voor compatibele Quests.",
                    autoEnrollTooltip: "Schrijft zich in voor in aanmerking komende, niet-geclaimde, niet-genegeerde en niet-verlopen Quests die binnen je beloning- en Quest-typefilters vallen en worden gedetecteerd terwijl Discord draait.\n\nSchrijft zich in voor Quests zonder ze in de wachtrij te zetten voor automatisch voltooien. Wacht bekende rate-limit-wachttijden af. Stopt bij onbekende fouten, rate limits zonder wachttijd of herhaalde inschrijvingsfouten.",
                    autoCompleteTypes: "Specifieke Quest-typen automatisch voltooien:",
                    autoCompleteTypesTooltip: "\"Video bekijken op mobiel\"-Quests werken alleen voor mobiele Quests waarvoor je je op desktop kunt inschrijven. Is inschrijving beperkt tot mobiel, dan moet je je eerst op je mobiele apparaat inschrijven voordat je terugkeert naar desktop en je Quests vernieuwt.\n\nAlle videogerelateerde Quests sturen meestal een stacktrace mee met de voortgangsrapporten. Discord weet dus precies welke functies zijn aangeroepen en kan controleren of de eigen functies de voortgang hebben gestart. Questify wist deze stacktrace, maar de afwezigheid ervan verraadt evenveel als de aanwezigheid.\n\n\"Spelen op desktop\", \"Spelen op PlayStation\", \"Spelen op Xbox\", \"Activiteit spelen\" en \"Prestatie in activiteit\"-Quests zijn door een beperking van Discord alleen beschikbaar in officiële desktopclients. Clients van derden zoals webextensies, Plextron en andere ondersteunen het automatisch voltooien van deze typen niet.\n\nAlle gamegerelateerde Quests sturen meestal een game-fingerprint mee met de heartbeat-rapporten. Discord kan zo met gegevens van tienduizenden gebruikers bepalen of anderen waarschijnlijk een echte game gebruiken of het uitvoerbare bestand emuleren. Er is geen redelijke manier om deze waarde te vervalsen, dus Questify laat hem leeg, maar de afwezigheid ervan verraadt evenveel als een slechte vervalsing.\n\nAutomatisch voltooien start via de Quest-knoppen op de Quest-pagina of via automatische verwerking. Quests worden voltooid in de volgorde waarin ze in de wachtrij zijn gezet, tenzij hierboven gelijktijdig voltooien is ingeschakeld.\n\nHet automatisch voltooien van Quests is de meest riskante gevaarlijke instelling. Schakel het in op eigen risico."
                },
                questNotifications: {
                    title: "Quest-meldingen",
                    description: "Stel meldingen en waarschuwingen in voor voltooide en nieuw gevonden Quests.",
                    questCompleted: "Quest voltooid",
                    notifyOnComplete: "Melding tonen wanneer een Quest is voltooid:",
                    soundOnComplete: "Geluid afspelen wanneer een Quest is voltooid:",
                    volume: "Volume:",
                    newQuests: "Nieuwe Quests gevonden",
                    notifyOnNew: "Melding tonen wanneer nieuwe Quests worden gevonden:",
                    soundOnNew: "Geluid afspelen wanneer nieuwe Quests worden gevonden:",
                    notifyOnNewExcluded: "Melding tonen wanneer nieuwe uitgesloten Quests worden gevonden:",
                    notifyOnNewExcludedTooltip: "Sommige Quests zijn vanwege regio- of platformbeperkingen uitgesloten van je lijst met beschikbare Quests.\n\nIndien ingeschakeld haalt Questify hun configuraties op, past je filters voor Quest- en beloningstypen toe, schrijft de gegevens van uitgesloten Quests naar de console en toont een aparte melding voor overeenkomende uitgesloten Quests.",
                    soundOnNewExcluded: "Geluid afspelen wanneer nieuwe uitgesloten Quests worden gevonden:",
                    soundOnNewExcludedTooltip: "Sommige Quests zijn vanwege regio- of platformbeperkingen uitgesloten van je lijst met beschikbare Quests.\n\nAls er een geluid is gekozen, haalt Questify hun configuraties op, past je filters voor Quest- en beloningstypen toe, schrijft de gegevens van uitgesloten Quests naar de console en speelt dit geluid af voor overeenkomende uitgesloten Quests.",
                    fetchInterval: "Interval voor het ophalen van Quests:",
                    fetchIntervalTooltip: "Discord haalt Quests alleen op bij het laden en wanneer je de Quest-pagina bezoekt.\n\nDit interval haalt Quests regelmatig op zolang de client open blijft, zodat de Quest-knopindicatoren en meldingen over nieuwe Quests de hele dag actueel blijven.\n\nDit werkt alleen als het is ingeschakeld en de instellingen van de Quest-knop of Quest-meldingen periodiek ophalen zinvol maken.",
                    disabled: "UITGESCHAKELD",
                    preview: "{{sound}} beluisteren",
                    intervals: {
                        thirtyMinutes: "30 minuten",
                        fortyFiveMinutes: "45 minuten",
                        oneHour: "1 uur",
                        threeHours: "3 uur",
                        sixHours: "6 uur",
                        twelveHours: "12 uur"
                    }
                },
                questTiles: {
                    title: "Quest-tegels",
                    description: "Markeer Quests met optionele themakleuren voor betere zichtbaarheid.",
                    behavior: "Tegelgedrag",
                    gradientStyle: "Verloopstijl:",
                    gradientStyleTooltip: "Intens en Standaard gebruiken de gekozen tegelkleur in het afbeeldingsverloop.\n\nSubtiel zwart gebruikt een donkerder neutraal verloop voor contrast.\n\nGeen verloop verwijdert het afbeeldingsverloop, waardoor sommige Quest-afbeeldingen moeilijker leesbaar kunnen zijn.",
                    assetPreload: "Vooraf laden van bestanden:",
                    assetPreloadTooltip: "Alle bestanden laden bij het openen van de Quest-pagina vermindert verschuivingen in de lay-out tijdens het scrollen.\n\nLaden tijdens het scrollen ligt dichter bij het standaardgedrag van Discord en vergt vooraf minder werk.",
                    colors: "Tegelkleuren",
                    enable: "Inschakelen",
                    disable: "Uitschakelen",
                    gradient: {
                        intense: "Intens restyle-verloop",
                        default: "Standaard restyle-verloop",
                        black: "Subtiel zwart verloop",
                        hide: "Geen verloop"
                    },
                    preload: {
                        onLoad: "Alle Quest-bestanden laden bij het openen van de pagina",
                        onScroll: "Quest-bestanden laden tijdens het scrollen"
                    }
                },
                reorderQuests: {
                    title: "Quests herordenen",
                    description: "Quests op status sorteren als de Questify-sortering is gekozen op de questpagina. Verborgen statussen worden bij elke sortering uitgefilterd.",
                    statusOrder: "Statusvolgorde",
                    statusOrderTooltip: "Elke status kan maar één keer voorkomen. Een status kiezen die al op een andere positie staat, wisselt de twee posities om.",
                    positions: {
                        first: "Eerste:",
                        second: "Tweede:",
                        third: "Derde:",
                        fourth: "Vierde:"
                    },
                    subsorts: "Subsorteringen",
                    unclaimedSubsort: "Subsortering niet geclaimd:",
                    unclaimedSubsortTooltip: "Voltooide maar niet-geclaimde Quests blijven onder onvoltooide niet-geclaimde Quests; daarna wordt deze subsortering binnen die groepen toegepast.",
                    claimedSubsort: "Subsortering geclaimd:",
                    claimedSubsortTooltip: "Geclaimde Quests kunnen worden gesorteerd op claimtijd of op het moment dat de Quest is toegevoegd.",
                    ignoredSubsort: "Subsortering genegeerd:",
                    ignoredSubsortTooltip: "Genegeerde Quests behouden hun groepspositie; deze subsortering bepaalt hun volgorde binnen die groep.",
                    expiredSubsort: "Subsortering verlopen:",
                    expiredSubsortTooltip: "Verlopen Quests kunnen worden gesorteerd op vervaltijd of op het moment dat de Quest is toegevoegd.",
                    subsort: {
                        addedNewest: "Toegevoegd (nieuwste)",
                        addedOldest: "Toegevoegd (oudste)",
                        expiringSoonest: "Verloopt (eerst)",
                        expiringLatest: "Verloopt (laatst)",
                        expiredMostRecent: "Verlopen (meest recent)",
                        expiredLeastRecent: "Verlopen (minst recent)",
                        claimedMostRecent: "Geclaimd (meest recent)",
                        claimedLeastRecent: "Geclaimd (minst recent)"
                    },
                    memory: "Geheugen van de Quest-pagina",
                    rememberSort: "Gekozen sortering van de Quest-pagina onthouden:",
                    rememberSortTooltip: "Indien uitgeschakeld, opent de Quest-pagina elke keer met de Questify-sortering.",
                    rememberFilters: "Gekozen filters van de Quest-pagina onthouden:",
                    rememberFiltersTooltip: "Indien uitgeschakeld, opent de Quest-pagina elke keer zonder taak- of beloningsfilters."
                }
            },
            option: {
                migrationVersion: {
                    label: "Migratieversie",
                    description: "De huidige migratieversie van de instellingen."
                },
                questFeatures: {
                    label: "Quest-functies",
                    description: "Kies welke Quest-functies uitgeschakeld moeten worden."
                },
                disableQuestsEverything: {
                    label: "Alles uitschakelen",
                    description: "Schakelt alle Quest-functies uit."
                },
                disableRelocationNotices: {
                    label: "Verhuismeldingen uitschakelen",
                    description: "Schakelt Quest-verhuismeldingen op de Ontdekken-pagina uit."
                },
                disableSponsoredBanner: {
                    label: "Gesponsorde banner uitschakelen",
                    description: "Schakelt de gesponsorde banner op de Quest-pagina uit."
                },
                disableAccountPanelPromo: {
                    label: "Accountpaneel-promo uitschakelen",
                    description: "Schakelt de gepromote Quest-pop-up boven je accountpaneel uit."
                },
                disableAccountPanelQuestProgress: {
                    label: "Accountpaneel-voortgang uitschakelen",
                    description: "Schakelt actieve en voltooide Quest-voortgang boven je accountpaneel uit."
                },
                disableOrbsAndQuestsBadges: {
                    label: "Quest- & Orbs-badges uitschakelen",
                    description: "Schakelt de Quest-badge op profielen uit."
                },
                disableFriendsListPromo: {
                    label: "Vriendenlijst-promo uitschakelen",
                    description: "Schakelt de promotie van Quests voor games die vrienden spelen uit."
                },
                disableMembersListPromo: {
                    label: "Ledenlijst-promo uitschakelen",
                    description: "Schakelt het pictogram voor actief spelen in de ledenlijst uit."
                },
                allowChangingDangerousSettings: {
                    label: "Gevaarlijke instellingen toestaan",
                    description: "Staat het wijzigen van gevaarlijke instellingen toe."
                },
                resumeInterruptedQuests: {
                    label: "Onderbroken Quests hervatten",
                    description: "Hervat het automatisch voltooien van Quests na herladen of herstarten."
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "Mobiele video-Quests desktopcompatibel maken",
                    description: "Maakt mobiel-only video-Quests compatibel met desktop."
                },
                autoCompleteQuestsSimultaneously: {
                    label: "Tegelijk automatisch voltooien",
                    description: "Voltooit Quests tegelijk in plaats van na elkaar."
                },
                completeVideoQuestsQuicker: {
                    label: "Video-Quests sneller voltooien",
                    description: "Gebruikt Discords voortgangsmarge en de verstreken tijd sinds inschrijving bij het automatisch voltooien van video-Quests."
                },
                autoCompleteQuestTypes: {
                    label: "Automatisch te voltooien Quest-typen",
                    description: "Welke Quest-typen op de achtergrond automatisch worden voltooid."
                },
                questButton: {
                    label: "Quest-knop",
                    description: "Pas de Quest-knop in de serverlijst aan."
                },
                questButtonDisplay: {
                    label: "Weergave Quest-knop",
                    description: "Welk weergavetype voor de Quest-knop in de serverlijst wordt gebruikt."
                },
                questButtonIncludedTypes: {
                    label: "Meegenomen typen Quest-knop",
                    description: "Welke beloningstypen en Quest-typen worden meegenomen in het aantal op de Quest-knop."
                },
                questButtonIndicator: {
                    label: "Indicator Quest-knop",
                    description: "Welk weergavetype voor de indicator niet geclaimd op de Quest-knop wordt gebruikt."
                },
                questButtonBadgeCount: {
                    label: "Badgegetal",
                    description: "Het huidige aantal relevante niet-geclaimde Quests."
                },
                questButtonBadgeColor: {
                    label: "Badgekleur",
                    description: "De kleur van de badge van de Quest-knop in de serverlijst."
                },
                questButtonLeftClickAction: {
                    label: "Actie bij linkerklik",
                    description: "De actie bij een linkerklik op de Quest-knop."
                },
                questButtonMiddleClickAction: {
                    label: "Actie bij middelklik",
                    description: "De actie bij een middelklik op de Quest-knop."
                },
                questButtonRightClickAction: {
                    label: "Actie bij rechterklik",
                    description: "De actie bij een rechterklik op de Quest-knop."
                },
                questNotifications: {
                    label: "Quest-meldingen",
                    description: "Stel meldingen in voor voltooide en nieuw gevonden Quests."
                },
                notifyOnQuestComplete: {
                    label: "Melden bij voltooiing",
                    description: "Toont een melding wanneer een Quest is voltooid."
                },
                notifyOnNewQuests: {
                    label: "Nieuwe Quests melden",
                    description: "Toont een melding wanneer nieuwe Quests worden gevonden."
                },
                notifyOnNewExcludedQuests: {
                    label: "Nieuwe uitgesloten Quests melden",
                    description: "Toont een melding wanneer nieuwe uitgesloten Quests worden gevonden."
                },
                questCompletedAlertSound: {
                    label: "Geluid Quest voltooid",
                    description: "Het geluid dat wordt afgespeeld wanneer een Quest is voltooid."
                },
                questCompletedAlertVolume: {
                    label: "Volume Quest voltooid",
                    description: "Het volume van het geluid bij een voltooide Quest."
                },
                questFetchInterval: {
                    label: "Ophaalinterval",
                    description: "Het interval in seconden voor het ophalen van Quests bij Discord."
                },
                newQuestAlertSound: {
                    label: "Geluid nieuwe Quest",
                    description: "Het geluid dat wordt afgespeeld wanneer nieuwe Quests worden gevonden."
                },
                newQuestAlertVolume: {
                    label: "Volume nieuwe Quest",
                    description: "Het volume van het geluid bij nieuwe Quests."
                },
                newExcludedQuestAlertSound: {
                    label: "Geluid nieuwe uitgesloten Quest",
                    description: "Het geluid dat wordt afgespeeld wanneer nieuwe uitgesloten Quests worden gevonden."
                },
                newExcludedQuestAlertVolume: {
                    label: "Volume nieuwe uitgesloten Quest",
                    description: "Het volume van het geluid bij nieuwe uitgesloten Quests."
                },
                questTiles: {
                    label: "Quest-tegels",
                    description: "Pas het uiterlijk van Quest-tegels op de Quest-pagina aan."
                },
                questTileUnclaimedColor: {
                    label: "Tegelkleur niet geclaimd",
                    description: "De kleur van niet-geclaimde Quest-tegels."
                },
                questTileClaimedColor: {
                    label: "Tegelkleur geclaimd",
                    description: "De kleur van geclaimde Quest-tegels."
                },
                questTileIgnoredColor: {
                    label: "Tegelkleur genegeerd",
                    description: "De kleur van genegeerde Quest-tegels."
                },
                questTileExpiredColor: {
                    label: "Tegelkleur verlopen",
                    description: "De kleur van verlopen Quest-tegels."
                },
                questTileGradient: {
                    label: "Tegelverloop",
                    description: "Stijl van het verloop in de Quest-tegels."
                },
                questTilePreload: {
                    label: "Tegelbestanden vooraf laden",
                    description: "Probeert de bestanden van Quest-tegels vooraf te laden."
                },
                reorderQuests: {
                    label: "Quests herordenen",
                    description: "Sorteert Quests op status."
                },
                questOrder: {
                    label: "Quest-volgorde",
                    description: "Sorteervolgorde van de Quest-statusgroepen."
                },
                unclaimedSubsort: {
                    label: "Subsortering niet geclaimd",
                    description: "Subsorteermethode voor niet-geclaimde Quests."
                },
                claimedSubsort: {
                    label: "Subsortering geclaimd",
                    description: "Subsorteermethode voor geclaimde Quests."
                },
                ignoredSubsort: {
                    label: "Subsortering genegeerd",
                    description: "Subsorteermethode voor genegeerde Quests."
                },
                expiredSubsort: {
                    label: "Subsortering verlopen",
                    description: "Subsorteermethode voor verlopen Quests."
                },
                isOnQuestsPage: {
                    label: "Op de Quest-pagina",
                    description: "Of de gebruiker zich momenteel op de Quest-pagina bevindt."
                },
                rememberQuestPageSort: {
                    label: "Sortering onthouden",
                    description: "Onthoudt de laatst gebruikte sortering op de Quest-pagina."
                },
                rememberQuestPageFilters: {
                    label: "Filters onthouden",
                    description: "Onthoudt de laatst gebruikte filters op de Quest-pagina."
                },
                lastQuestPageSort: {
                    label: "Laatste sortering",
                    description: "De laatst gebruikte sortering op de Quest-pagina."
                },
                lastQuestPageFilters: {
                    label: "Laatste filters",
                    description: "De laatst gebruikte filters op de Quest-pagina."
                },
                ignoredQuestIDs: {
                    label: "Genegeerde Quest-ID's",
                    description: "Een lijst met genegeerde Quest-ID's."
                },
                resumeQuestIDs: {
                    label: "Te hervatten Quest-ID's",
                    description: "Een lijst met Quest-ID's die op de achtergrond automatisch worden voltooid of daarvoor in de wachtrij staan."
                },
                acknowledgedNotices: {
                    description: "Eenmalige meldingen die de gebruiker heeft bevestigd.",
                    label: "Bevestigde meldingen"
                },
                settingsSearch: {
                    description: "Questify-instellingen doorzoeken.",
                    label: "Instellingen zoeken"
                },
                hideNonAutoCompletableQuests: {
                    description: "Onvoltooide quests zonder ondersteunde en ingeschakelde automatische voltooiingstaak verbergen.",
                    label: "Niet automatisch voltooibare quests verbergen"
                },
                preventVideoQuestsPausing: {
                    description: "Voorkomen dat de video pauzeert als het questvenster de focus verliest.",
                    label: "Pauzeren van videoquests voorkomen"
                },
                hiddenQuestStatuses: {
                    description: "Te verbergen queststatusgroepen.",
                    label: "Verborgen queststatussen"
                },
                autoEnrollQuests: {
                    label: "Automatisch inschrijven voor Quests",
                    description: "Schrijf je automatisch in voor beschikbare Quests die in aanmerking komen bij succesvolle ophaalacties terwijl Discord draait."
                },
                autoCompleteQuests: {
                    label: "Quests automatisch voltooien",
                    description: "Schrijf je automatisch in voor en voltooi beschikbare Quests die in aanmerking komen met ondersteunde en ingeschakelde taaktypen bij succesvolle ophaalacties terwijl Discord draait."
                }
            },
            text: {
                clearQuestQueue: "Questwachtrij wissen",
                hideIncompleteQuestsWith: "Onvoltooide quests met status niet-geclaimd of genegeerd verbergen als op dit platform geen automatische voltooiingstaak wordt ondersteund en ingeschakeld in de keuzelijst met questtypen. Geclaimde, verlopen en voltooide quests zijn uitgezonderd. Gebruik de opties voor verborgen statusvolgorde om die quests te verbergen.",
                discordForcesYouTo: "Discord dwingt je om de client actief te hebben zodat videoquests hun video afspelen.",
                hideNonAutoCompletable: "Niet automatisch voltooibare quests verbergen:",
                preventVideoQuestsFrom: "Voorkomen dat videoquests pauzeren bij focusverlies:",
                thePunishmentAlsoConsists: "De straf omvat ook een overtreding van de accountstatus die per overtreding 2 jaar duurt.",
                dueToTheVarious: "Door de verschillende methoden die Discord gebruikt om gebruikers te volgen, is detectie realistisch gezien niet te ontwijken. Als je doorgaat, besef dan dat Discord je gebruik waarschijnlijk ooit zal detecteren.",
                enrollInQuest: "Inschrijven voor quest",
                hidden: "Verborgen",
                selectingAnOccupiedPosition: "Een bezette positie kiezen verwisselt de twee statussen. Verborgen statussen worden uit de questlijsten verwijderd.",
                searchQuestifySettings: "Questify-instellingen doorzoeken",
                searchQuestifySettings2: "Questify-instellingen doorzoeken...",
                noMatchingSettings: "Geen overeenkomende instellingen.",
                questifyNoticeAugust7th: "Questify-melding - 7 augustus 2026",
                keepUsingDangerousQuestify: "Gevaarlijke Questify-instellingen blijven gebruiken",
                disableDangerousQuestifySettings: "Gevaarlijke Questify-instellingen uitschakelen",
                questifyNoticeAugust26th: "Questify-melding - 26 augustus 2026",
                areYouSure: "Weet je het zeker?",
                thePunishmentAppearsLimited: "De straf lijkt beperkt tot verlies van toegang tot quests en hun beloningen, maar Discord kan op elk moment strenger optreden.",
                queueAllQuests: "Alle quests in wachtrij zetten",
                inProgress: "Bezig",
                rateLimited: "Gelimiteerd",
                preventsVideoPausing: "Deze instelling voorkomt dat de video pauzeert, zodat de voltooiing normaal verloopt.",
                appliesOnlyToVideoQuests: "Deze instelling geldt alleen voor het handmatig voltooien van videoquests.",
                knownToPunish: "Discord staat erom bekend gebruikers van scripts of plugins die het voltooien van quests aanpassen te straffen. Het aanpassen van het voltooien van quests is in strijd met Discords",
                punishmentConsists: "De straf bestaat uit tijdelijk of permanent verlies van toegang tot quests en hun beloningen.",
                questBanSystem: "Discord heeft een questbansysteem ingevoerd dat je toegang tot het voltooien van quests en het claimen van beloningen tijdelijk of permanent beperkt als blijkt dat je ze via onofficiële wegen voltooit. Het aanpassen van het voltooien van quests is in strijd met hun",
                begunPunishing: "Discord is begonnen met het straffen van gebruikers van scripts en plugins die het voltooien van quests aanpassen. Het aanpassen van het voltooien van quests is in strijd met hun",
                dueToRateLimits: " vanwege snelheidslimieten"
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
            },
            text: {
                quotePreview: "Citaatvoorbeeld"
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
                    selectAll: "Alles selecteren",
                    reset: "Opnieuw instellen",
                    stateFilters: "Statusfilters",
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
                    joinSettings: "Deelname-instellingen",
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
            keybind: {
                label: "Sneltoets",
                recording: "Opnemen...",
                reset: "Herstellen"
            },
            option: {
                keybindEnabled: {
                    label: "Sneltoets ingeschakeld",
                    description: "Toon de sneltoetsinstellingen voor willekeurige spraak"
                },
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
                prioritizeFriends: {
                    label: "Vrienden prioriteren",
                    description: "Geef indien mogelijk de voorkeur aan kanalen waar je vrienden in zitten."
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
            },
            toast: {
                failedToFindA: "Kan geen spraakkanaal vinden.",
                voiceChannelIsUnavailable: "Spraakkanaal niet beschikbaar."
            },
            text: {
                userCount: "{{count}} gebruiker",
                usersCount: "{{count}} gebruikers"
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
                    toast: "RDMS-geschiedenis gewist",
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
            },
            text: {
                relationshipNotifier: "Relatiemelder"
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
                fill: "Vullen",
                image: "Afbeelding"
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
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Beheer of je altijd of nooit een vermelding wilt krijgen bij antwoorden op berichten, met functies voor een witte en zwarte lijst",
            option: {
                replyPingBlacklist: {
                    label: "Zwarte lijst antwoordvermeldingen",
                    description: "Kommagescheiden lijst van gebruikers-ID's waarvan je nooit antwoordvermeldingen wilt ontvangen"
                },
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
            },
            text: {
                all: "Alle"
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
            },
            profile: {
                optedOut: "Gebruiker geweigerd",
                noReviews: "Nog geen recensies"
            },
            toast: {
                youCannotVoteOn: "Je kunt niet op je eigen recensie stemmen.",
                networkErrorFailedTo: "Netwerkfout: kan geen verbinding maken met ReviewDB.",
                pleaseAuthorizeToVote: "Autoriseer om op recensies te stemmen.",
                requestFailed: "ReviewDB: verzoek mislukt met status {{status}}"
            },
            text: {
                ok: "Oké",
                updateReviewFor: "Review voor @{{name}} bijwerken",
                reviewUser: "@{{name}} reviewen",
                system: "Systeem",
                reviewCount: "({{count}} beoordelingen)"
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
                allCleared: "Alle geplande berichten zijn gewist",
                scheduledMessageSentTo: "Gepland bericht verzonden naar {{name}}"
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
            paragraph2: "Dit betekent dat je precies 5000 berichten terug in de tijd kunt zien, en 5000 berichten vooruit (bij sorteren op oudste).",
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
                    medium: "Gemiddeld",
                    high: "Hoog",
                    highest: "Hoogste"
                },
                serverBoosts: "Serverboosts",
                channels: "Kanalen",
                roles: "Rollen",
                boostLevel: "{{count}} (Niveau {{level}})"
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
                tryDiscordHighlighter: {
                    label: "Discords highlighter proberen",
                    description: "Gebruik de lichtere standaard Discord-markeerstift en -thema.",
                    never: "Nooit",
                    secondary: "Shiki verkiezen boven Discords highlighter",
                    primary: "Discords highlighter verkiezen boven Shiki",
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
                },
                ignoredLanguages: {
                    label: "Genegeerde talen",
                    description: "Kommagescheiden lijst met talen die aan de standaard codeblokken van Discord worden overgelaten"
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
                },
                noQuickReacts: {
                    description: "Snelle reacties verbergen. Standaard verbergt het volledige menu de knoppen voor snelle reacties.",
                    label: "Geen snelle reacties"
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
                },
                showGithubOrgs: {
                    description: "GitHub-organisaties tonen waarvan de gebruiker lid is",
                    label: "GitHub-organisaties tonen"
                },
                showOnModal: {
                    description: "Gekoppelde accounts tonen in het volledige profielvenster",
                    label: "In venster tonen"
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
                    description: "De eerste beschikbare naam uit je aangepaste naamindeling tonen in de ledenlijst, DM-lijst, vriendenlijst en Nu actief."
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
                alwaysShowEffects: {
                    label: "Effecten altijd animeren",
                    description: "Toon effecten altijd zoals wanneer je er met de muis overheen beweegt."
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
                },
                searchAutocomplete: {
                    description: "De eerste beschikbare naam uit je aangepaste naamindeling tonen in de automatische aanvulling voor vermeldingen en zoeken.",
                    label: "Automatisch aanvullen bij zoeken"
                },
                styleDirectMessagesList: {
                    description: "Weergavenaameffecten tonen bij niet-geselecteerde items zonder hover. Geselecteerde en gehoverde items blijven opgemaakt als dit uit staat.",
                    label: "Lijst met privéberichten opmaken"
                },
                styleDirectMessagesMessages: {
                    description: "Weergavenaameffecten tonen bij berichtauteurs zonder hover. Gehoverde namen blijven opgemaakt als dit uit staat.",
                    label: "Berichten in privéberichten opmaken"
                },
                styleFriendsList: {
                    description: "Weergavenaameffecten tonen zonder hover. Gehoverde items blijven opgemaakt als dit uit staat.",
                    label: "Vriendenlijst opmaken"
                },
                styleActiveNow: {
                    description: "Weergavenaameffecten tonen zonder hover. Gehoverde items blijven opgemaakt als dit uit staat.",
                    label: "Nu actief opmaken"
                },
                ignoreEffects: {
                    description: "Voor niet-primaire namen alleen de primaire rolkleur gebruiken en weergavenaameffecten weglaten.",
                    label: "Effecten negeren"
                },
                animateEffects: {
                    description: "Rolverlopen en weergavenaameffecten op niet-primaire namen animeren. Uitgeschakeld door \"Effecten negeren\" en verminderde beweging.",
                    label: "Effecten animeren"
                },
                alwaysAnimateEffects: {
                    description: "Weergavenaameffecten laten animeren als ze al zichtbaar zouden zijn, ook zonder hover.",
                    label: "Effecten altijd animeren"
                },
                gradientGlow: {
                    description: "Een gloed toevoegen aan geanimeerde gebruikersverlopen, net als bij serverrolverlopen.",
                    label: "Verloopgloed"
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
            },
            text: {
                save: "Opslaan",
                unknown: "Onbekend"
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
            },
            text: {
                timeoutRemaining: "time-out resterend"
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
            channelTitle: {
                chat: "Chat",
                dm: "DM"
            },
            modal: {
                switch: "Schakel tussen kanalen",
                popout: "Pop-out-chat",
                popoutClose: "Pop-out-chat sluiten",
                popoutFor: "Pop-out-chat voor {{channel}}",
                close: "Sluit de zijbalkchat"
            },
            option: {
                persistSidebar: {
                    label: "Blijf zijbalkchat houden",
                    description: "Houd de zijbalkchat open tijdens het opnieuw opstarten van Discord"
                },
                persistPopoutWindows: {
                    label: "Pop-out-chats behouden",
                    description: "Herstel geopende pop-out-chats na het opnieuw opstarten van Discord"
                },
                popoutAlwaysOnTop: {
                    label: "Altijd op de voorgrond",
                    description: "Houd pop-out-chatvensters boven alle andere vensters."
                },
                patchCommunity: {
                    label: "Patch-gemeenschap",
                    description: "Patch functies zoals de Kanaalbrowser of het tabblad Leden die communityservers hebben."
                },
                persistedPopoutWindowIds: {
                    description: "Opgeslagen kanaal-ID's voor pop-out-chats."
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
                global: "Typen zichtbaar (algemeen)",
                voiceChannel: "Typen altijd zichtbaar in de chat van het verbonden spraakkanaal",
                temporary: "Typen tijdelijk zichtbaar in dit kanaal vanwege een recent bericht"
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
                alwaysEnableInActiveVoiceChat: {
                    label: "Altijd inschakelen in actieve spraakchat",
                    description: "Sta altijd toe dat je typindicator wordt getoond wanneer je typt in een spraakkanaal waarmee je verbonden bent."
                },
                temporaryEnableThresholdServers: {
                    label: "Tijdelijke inschakeldrempel (servers)",
                    description: "Sta tijdelijk toe dat je typindicator zoveel seconden wordt getoond na het verzenden van een bericht in een serverkanaal. Als de typindicator al zichtbaar is in het kanaal, heeft deze instelling geen effect."
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "Tijdelijke inschakeldrempel (directe berichten)",
                    description: "Sta tijdelijk toe dat je typindicator zoveel seconden wordt getoond na het verzenden van een bericht in een DM of groeps-DM. Als de typindicator al zichtbaar is in het kanaal, heeft deze instelling geen effect."
                },
                enabledLocations: {
                    label: "Ingeschakelde locaties",
                    description: "Schakel functionaliteit voor deze ID's in. Accepteert een door komma's gescheiden lijst met DM-ID's, kanaal-ID's en gilde-ID's. Wordt alleen gebruikt als 'Standaard verborgen' is uitgeschakeld."
                },
                disabledLocations: {
                    label: "Gehandicapte locaties",
                    description: "Schakel de functionaliteit voor deze ID's uit. Accepteert een door komma's gescheiden lijst met DM-ID's, kanaal-ID's en gilde-ID's. Wordt alleen gebruikt als 'Standaard verborgen' is ingeschakeld."
                }
            },
            text: {
                silentTyping: "Stil typen",
                enabled: "Ingeschakeld",
                chatBarIndicators: "Indicatoren in chatbalk",
                membersListIndicators: "Indicatoren in ledenlijst",
                guild: "Server",
                channel: "Kanaal",
                global: "Globaal"
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
            description: "Splitst te grote berichten vóór verzending in stukken van Discord-formaat.",
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
                    description: "Minimale vertraging tussen elk deel in seconden."
                },
                hardSplit: {
                    label: "Harde splitsing",
                    description: "Indien waar, wordt gesplitst op het laatste teken in plaats van op de laatste spatie/nieuwe regel."
                },
                splitInSlowmode: {
                    label: "Splitsen in slowmode",
                    description: "Splitsen in slowmodus toestaan als de vertraging binnen het ingestelde maximum valt."
                },
                slowmodeMax: {
                    label: "Maximale slowmodus",
                    description: "Maximale slowmodusduur die is toegestaan bij het splitsen van berichten."
                },
                splitMode: {
                    description: "Deze grens verkiezen bij het splitsen van een bericht.",
                    label: "Splitsmodus"
                }
            },
            toast: {
                cannotSplitThisMessage: "Dit bericht kan niet worden gesplitst vanwege de slowmodus van het kanaal.",
                onlySentLengthMessage: "Slechts {{sent}}/{{length}} berichtdelen zijn verzonden.",
                unsentCopied: "Niet-verzonden berichtdelen naar klembord gekopieerd."
            },
            text: {
                newlines: "Nieuwe regels",
                spaces: "Spaties",
                strictCharacterLimit: "Strikte tekenlimiet"
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
                set: "Aangepaste status instellen",
                delete: "Voorinstelling verwijderen"
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
            },
            text: {
                failedToRender: "Weergeven mislukt :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Maakt het kiezen van een sticker in de stickerkiezer mogelijk, plaats deze in de chatbox in plaats van deze direct te verzenden"
        },
        streaks: {
            name: "Streaks",
            description: "Toont een reeks naast een gebruiker wanneer jullie op opeenvolgende dagen DM's uitwisselen.",
            tooltip: "Reeks van {{count}} dagen",
            tooltipExpiring: "Reeks van {{count}} dagen — stuur vandaag een bericht om hem vast te houden!",
            option: {
                account: {
                    description: "In- of uitloggen bij de Streaks-API. Reeksen worden in de API opgeslagen, dus je moet ingelogd zijn om ze bij te houden.",
                    login: "Inloggen bij Streaks-API",
                    logout: "Uitloggen bij Streaks-API"
                },
                eliteColor: "Elite-reekskleur (100+ dagen)",
                diamondColor: "Diamant-reekskleur (60+ dagen)",
                platinumColor: "Platina-reekskleur (45+ dagen)",
                goldColor: "Goud-reekskleur (30+ dagen)",
                silverColor: "Zilver-reekskleur (14+ dagen)",
                bronzeColor: "Brons-reekskleur (7+ dagen)",
                defaultColor: "Standaard reekskleur (1+ dagen)"
            },
            toast: {
                authFailed: "Autorisatie mislukt: {{error}}",
                failedToAuthorizeMessage: "Autoriseren mislukt: {{message}}",
                authorizationExpired: "Streaks-autorisatie is verlopen. Autoriseer opnieuw in de instellingen van de Streaks-plugin."
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Schakelt automatisch de Streamer-modus in wanneer je begint met streamen in Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Schakel videocodecs naar keuze uit voor streamen en camera's.",
            option: {
                disableAv1Codec: {
                    label: "AV1-codec uitschakelen",
                    description: "Laat Discord AV1 niet overwegen voor streamen en camera's."
                },
                disableH265Codec: {
                    label: "Schakel H265-codec uit",
                    description: "Laat Discord H265 niet overwegen voor streamen en camera's."
                },
                disableH264Codec: {
                    label: "Schakel H264-codec uit",
                    description: "Laat Discord H264 niet overwegen voor streamen en camera's."
                },
                disableVP8Codec: {
                    label: "Schakel VP8-codec uit",
                    description: "Laat Discord VP8 niet overwegen voor streamen en camera's."
                },
                disableVP9Codec: {
                    label: "Schakel VP9-codec uit",
                    description: "Laat Discord VP9 niet overwegen voor streamen en camera's."
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
                    string: "Eenvoudige vervangingen",
                    stringDescription: "Eenvoudige zoek-en-vervang regels. Bijvoorbeeld: zoek 'brb' en vervang het door 'be right back'",
                    regex: "Regex-vervangingen",
                    regexDescription: "Krachtigere vervangingen met reguliere expressies. Deze sectie is voor gevorderde gebruikers. Als je het niet begrijpt, kun je het negeren",
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
                name: "Naam",
                nameDescription: "Een optionele naam om deze regel te herkennen.",
                search: "Zoek een regel...",
                noResults: "Geen regels komen overeen met je zoekopdracht.",
                title: "Testregels",
                find: "Vinden",
                findRegex: "Regex-patroon",
                findText: "Tekst om te vervangen",
                replace: "Vervangen",
                replaceDescription: "De tekst die de gevonden tekst zal vervangen",
                includes: "Alleen als bevat",
                includesDescription: "Deze regel wordt alleen toegepast als het bericht deze tekst bevat. Dit is optioneel",
                type: "Typ een bericht",
                applied: "Bericht met toegepaste regels",
                delete: "Regel verwijderen",
                add: "Regel toevoegen",
                empty: "Lege regel",
                rule: "Regel",
            },
            text: {
                optionallyOnlyApplyThis: "Pas deze regel optioneel alleen toe als het bericht deze tekst bevat.",
                emptyRule: "Lege regel {{number}}",
                ruleWithFind: "Regel {{number}} - {{find}}"
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
                    description: "Tijd tonen in 24-uursnotatie"
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
                },
                recipientTimezoneInDms: {
                    label: "Tijdzone van ontvanger in DM's",
                    description: "Toon in DM's de tijdzone van de ontvanger bij je berichten"
                },
                showLocalTimezone: {
                    label: "Lokale tijdzone tonen",
                    description: "Lokale tijdzone tonen in plaats van alleen \"lokaal\""
                }
            },
            modal: {
                title: "Tijdzones",
                select: "Selecteer Tijdzone",
                selectPlaceholder: "Selecteer een tijdzone",
                delete: "Tijdzone verwijderen",
                save: "Redden"
            },
            text: {
                invalidResponseFormat: "Ongeldige antwoordindeling"
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
                respectDoNotDisturb: {
                    label: "Niet storen respecteren",
                    description: "Geen meldingen tonen wanneer je status Niet storen is."
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
                    deepl: "DeepL Gratis - API-sleutel vereist",
                    deeplPro: "DeepL Pro - API-sleutel vereist",
                    kagi: "Kagi Vertaling - API-sleutel vereist"
                },
                kagiSession: {
                    label: "Kagi-sessie",
                    description: "Haal je sessietoken op van https://kagi.com/settings?p=user_details"
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
            },
            button: {
                manageLanguages: "Vertaaltalen en automatisch vertalen aanpassen"
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
            },
            text: {
                viewAvatarDecoration: "Avatardecoratie bekijken"
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
                },
                messageContextMenu: {
                    description: "Tonen in het contextmenu van berichten",
                    label: "Contextmenu van berichten"
                },
                sortKeys: {
                    description: "De sleutels van de ruwe gegevens alfabetisch sorteren.",
                    label: "Sleutels sorteren"
                },
                stripSensitiveData: {
                    description: "Gevoelige gegevens zoals je e-mailadres en telefoonnummer uit de ruwe gegevens verwijderen.",
                    label: "Gevoelige gegevens verwijderen"
                }
            },
            modal: {
                title: "Bekijk Ruw",
                content: "Berichtinhoud",
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
            },
            text: {
                copyTypeData: "{{type}}-gegevens kopiëren",
                rawTypeData: "Ruwe {{type}}-gegevens",
                messageData: "Berichtgegevens"
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
            },
            text: {
                convertioWebConverter: "convertio-webconverter"
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
            description: "Voegt sneltoetsen toe die ontbreken in de webversie van Discord. Werkt alleen volledig op Plextron/Legcord, niet in je browser",
            option: {
                showNavigationButtons: {
                    description: "Navigatieknoppen terug/vooruit tonen in de titelbalk.",
                    label: "Navigatieknoppen tonen"
                },
                overrideCommonKeybinds: {
                    description: "Laat Discord de meest gebruikte sneltoetsen voor tabnavigatie overschrijven (ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+n). Werkt alleen in enkele browsers die websitesneltoetsen voorrang geven.",
                    label: "Veelgebruikte sneltoetsen overschrijven"
                }
            }
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
                },
                clickableAvatars: {
                    description: "Als dit is ingeschakeld, opent klikken op de avatar van een reagerende gebruiker diens profiel in plaats van de reactie toe te voegen",
                    label: "Klikbare avatars"
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
        },
        addAttachments: {
            name: "AddAttachments",
            description: "Hiermee kun je nieuwe bijlagen toevoegen tijdens het bewerken van berichten",
            toast: {
                youCannotAddMore: "Je kunt geen bijlagen meer aan dit bericht toevoegen.",
                youCanOnlyAdd: "Je kunt nog maar {{count}} bijlage(n) aan dit bericht toevoegen.",
                uploadingThisCanTake: "Bezig met uploaden, dit kan even duren...",
                addedOne: "Bijlage toegevoegd!",
                addedMany: "Bijlagen toegevoegd!"
            },
            text: {
                addAttachments: "Bijlagen toevoegen"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "Wat er moet gebeuren met de vereenvoudigde machtigingenkaart van Discord",
                    label: "Vereenvoudigde kaart",
                    hide: "Verbergen",
                    collapse: "Inklapbaar maken",
                    show: "Zichtbaar laten"
                },
                collapsedByDefault: {
                    description: "Start met de vereenvoudigde machtigingen ingeklapt.",
                    label: "Standaard ingeklapt"
                }
            },
            name: "AdvancedPermissions",
            description: "Toon standaard de geavanceerde machtigingenkaart.",
            text: {
                simplifiedPermissions: "Vereenvoudigde machtigingen"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "Spring alleen automatisch naar berichten als het Discord-venster niet gefocust is.",
                    label: "Alleen als niet gefocust"
                }
            },
            name: "AutoJumpToMessage",
            description: "Opent automatisch het kanaal van nieuwe berichten."
        },
        betterForwards: {
            text: {
                serverIconForName: "Servericoon van {{name}}",
                messageAttachments: "Berichtbijlagen",
                messageTextWillNot: "Berichttekst wordt niet doorgestuurd als deze optie is uitgeschakeld",
                forwardEverything: "Alles doorsturen",
                viewServer: "Server bekijken",
                embed: "Insluiting",
                embedNumber: "Insluiting {{number}}",
                image: "Afbeelding",
                video: "Video",
                serverIcon: "Serverpictogram van {{name}}",
                dmIcon: "DM-pictogram van {{name}}",
                groupDmIcon: "Groeps-DM-pictogram van {{name}}"
            },
            option: {
                resendOnFail: {
                    description: "Probeert een doorgestuurd bericht opnieuw te verzenden als het doorsturen mislukt. Kan onbedoelde pings of tekstspam veroorzaken. Omzeilt NSFW-beperkingen.",
                    label: "Opnieuw verzenden bij fout"
                },
                forwardPreface: {
                    description: "Waarmee het doorgestuurde bericht moet beginnen",
                    label: "Doorstuurvoorvoegsel"
                },
                dontFollowForwards: {
                    description: "Na het doorsturen van één bericht er niet naartoe springen. Houd Shift ingedrukt om dit gedrag te negeren.",
                    label: "Doorsturingen niet volgen"
                },
                selfForward: {
                    description: "Toon het huidige kanaal in de pop-up met de doorstuurlijst.",
                    label: "Naar zelf doorsturen"
                }
            },
            name: "BetterForwards",
            description: "Hulpmiddelen voor het doorsturen van berichten, inclusief NSFW-omzeiling en UI-verbeteringen."
        },
        betterImageEditor: {
            text: {
                search: "Zoeken",
                searchSavedPictures: "Opgeslagen afbeeldingen doorzoeken",
                clearTheSearch: "Zoekopdracht wissen",
                savedPictures: "Opgeslagen afbeeldingen",
                removeName: "{{name}} verwijderen",
                removeHoldShiftTo: "Verwijderen. Houd Shift ingedrukt om de bevestiging over te slaan",
                originals: "Originelen",
                putBackTheLast: "De laatste terugzetten",
                forgetEveryRememberedCrop: "Alle onthouden bijsnijdingen vergeten?",
                yourPicturesStayEach: "Je afbeeldingen blijven. Elke afbeelding opent vanaf nu zonder kadrering, totdat je haar opnieuw bijsnijdt.",
                forget: "Vergeten",
                cancel: "Annuleren",
                clearSavedPictures: "Opgeslagen afbeeldingen wissen?",
                everyPictureYouHave: "Elke afbeelding die je hier hebt opgeslagen verdwijnt, samen met de onthouden bijsnijding van elke afbeelding. Het eigen archief van Discord en je huidige avatar en banner blijven onaangeroerd.",
                clear: "Wissen",
                removeThisPicture: "Deze afbeelding verwijderen?",
                remove: "Verwijderen",
                keepTheCroppedCopy: "Bijgesneden kopie bewaren?",
                itGoesOnThe: "Die komt op de plank {{toLowerCase}}, naast je originelen.",
                keep: "Bewaren",
                noThanks: "Nee, bedankt",
                exportToAFile: "Exporteren naar een bestand",
                importFromAFile: "Importeren uit een bestand",
                forgetRememberedFraming: "Onthouden kadrering vergeten",
                clearSavedPictures2: "Opgeslagen afbeeldingen wissen",
                croppedKind: "Bijgesneden {{kind}}",
                unpinName: "{{name}} losmaken",
                pinName: "{{name}} vastmaken",
                pinnedNeverDrops: "Vastgemaakt, valt nooit van de plank",
                pinNeverDrops: "Vastmaken zodat het nooit van de plank valt",
                nothingMatches: "Hier komt niets mee overeen",
                originalsEmpty: "Afbeeldingen die je kiest, plakt of neerzet komen hier terecht",
                croppedEmpty: "Afbeeldingen die je bijsnijdt komen hier terecht",
                forgotFraming: "Uitsnede van {{count}} afbeelding(en) vergeten",
                nothingFramed: "Er was niets uitgesneden",
                pictureLibrary: "Afbeeldingenbibliotheek",
                addedPictures: "{{count}} afbeelding(en) toegevoegd",
                nothingNew: "Niets nieuws in dat bestand",
                shownOfTotal: "{{shown}} van {{total}}",
                keptCount: "{{count}} bewaard",
                youAreWearingThis: "Je gebruikt dit nu",
                removePictureBody: "{{name}} wordt verwijderd uit je opgeslagen afbeeldingen, samen met de onthouden bijsnijding."
            },
            option: {
                librarySize: {
                    description: "Hoeveel afbeeldingen er op elke plank bewaard blijven.",
                    label: "Bibliotheekgrootte"
                },
                rememberCrop: {
                    description: "Herstel de zoom en positie die je het laatst voor een afbeelding hebt gebruikt.",
                    label: "Bijsnijding onthouden"
                },
                forgetFraming: {
                    description: "Gooi alle onthouden bijsnijdingen weg en open elke afbeelding zoals Discord dat zou doen.",
                    label: "Kadrering vergeten"
                },
                saveCropped: {
                    description: "Bewaar een kopie van elke afbeelding nadat je deze hebt bijgesneden.",
                    label: "Bijgesneden opslaan"
                },
                askBeforeSavingCropped: {
                    description: "Eerst vragen in plaats van de bijgesneden kopie automatisch te bewaren.",
                    label: "Vragen voor opslaan van bijgesneden"
                },
                transfer: {
                    description: "Neem je afbeeldingen, en hoe elk ervan is gekadreerd, mee naar een ander apparaat.",
                    label: "Overdragen"
                },
                clearLibrary: {
                    description: "Gooi alle opgeslagen afbeeldingen weg.",
                    label: "Bibliotheek wissen"
                }
            },
            name: "BetterImageEditor",
            description: "Bewaart een plank met je afbeeldingen in de avatar- en bannereditor en onthoudt hoe je elke afbeelding hebt bijgesneden.",
            toast: {
                couldNotExportYour: "Kon je afbeeldingen niet exporteren",
                couldNotReadThat: "Kon dat bestand niet lezen",
                thatPictureIsMissing: "Die afbeelding ontbreekt",
                thatPictureIsToo: "Die afbeelding is te groot voor Discord",
                couldNotUseThat: "Kon die afbeelding niet gebruiken",
                couldNotKeepThe: "Kon de bijgesneden kopie niet bewaren"
            },
            kind: {
                avatars: "avatars",
                banners: "banners",
                serverIcons: "serverpictogrammen",
                serverBanners: "serverbanners",
                eventCovers: "evenementcovers",
                homeHeaders: "startpaginakoppen",
                decorations: "decoraties",
                widgetCovers: "widgetcovers",
                widgetImages: "widgetafbeeldingen"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "Voegt een manier toe om uitgaande vriendschapsverzoeken vanuit profielen te annuleren.",
            text: {
                cancelOutgoingFriendRequest: "Uitgaand vriendschapsverzoek annuleren"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "De aanmaakdatum moet een geldige datum zijn.",
                cancel: "Annuleren",
                uploadClipFile: "Clipbestand uploaden",
                fileName: "Bestandsnaam",
                title: "Titel",
                epicMoment: "Episch moment",
                message: "Bericht",
                checkOutThisClip: "Bekijk deze clip!",
                spoiler: "Spoiler",
                remix: "Remix",
                thumbnail: "Miniatuur",
                file: "Bestand",
                selectFile: "Bestand kiezen",
                parseClipMetadataFrom: "Clipmetadata uit bestand halen",
                selectFriends: "Vrienden kiezen",
                selectAGame: "Kies een game",
                customApplicationId: "Aangepaste applicatie-ID",
                createdAt: "Aangemaakt op",
                participants: "Deelnemers",
                onlyTagPeopleWho: "Tag alleen mensen die aanwezig waren en ermee hebben ingestemd in deze clip te staan.",
                gameApplication: "Game/applicatie",
                uploadClipFile2: "Clipbestand uploaden",
                uploading: "Uploaden",
                upload: "Uploaden",
                noFileSelected: "Geen bestand geselecteerd",
                couldNotPrepare: "Kan het geselecteerde bestand niet voorbereiden.",
                couldNotRead: "Kan het geselecteerde bestand niet lezen.",
                couldNotUpdateMetadata: "Kan clipmetadata niet bijwerken.",
                notCompatible: "Dit bestand is niet compatibel. Gebruik een MP4-clip met H.264-video en AAC-audio.",
                uploadFailed: "Upload mislukt.",
                noUploadSlot: "Discord heeft geen uploadslot teruggegeven.",
                uploadCanceled: "Upload geannuleerd.",
                failedToUpload: "Kan clip niet uploaden.",
                selectClipFile: "Clipbestand selecteren",
                mp4Video: "MP4-video"
            },
            name: "ClipUpload",
            description: "Voegt een knop toe om een lokaal videobestand als Discord-clip te uploaden.",
            toast: {
                checkingClipFile: "Clipbestand wordt gecontroleerd.",
                convertingClipFile: "Clipbestand wordt geconverteerd.",
                clipUploaded: "Clip geüpload."
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "Ingebouwde inklapbare vlakken voor kanalen, leden, chatknoppen en gebruikersgebied.",
            text: {
                collapsibleUi: "Inklapbare interface",
                guildBar: "Serverbalk",
                channelList: "Kanaallijst",
                membersList: "Ledenlijst",
                messageButtons: "Berichtknoppen",
                titleBar: "Titelbalk",
                headerBar: "Kopbalk",
                userArea: "Gebruikersgebied"
            },
            option: {
                detachUserArea: {
                    description: "Maak het gebruikersgebied los zodat het vrij kan worden verplaatst wanneer het niet is ingeklapt.",
                    label: "Gebruikersgebied losmaken"
                },
                detachedUserAreaX: {
                    description: "Onthoud de x-positie van het losgemaakte gebruikersgebied.",
                    label: "Losgemaakt gebruikersgebied X"
                },
                detachedUserAreaY: {
                    description: "Onthoud de y-positie van het losgemaakte gebruikersgebied.",
                    label: "Losgemaakt gebruikersgebied Y"
                },
                guildBarCollapsed: {
                    description: "Onthoud de serverbalk als ingeklapt.",
                    label: "Serverbalk ingeklapt"
                },
                channelListCollapsed: {
                    description: "Onthoud de kanaallijst als ingeklapt.",
                    label: "Kanaallijst ingeklapt"
                },
                membersListCollapsed: {
                    description: "Onthoud de ledenlijst als ingeklapt.",
                    label: "Ledenlijst ingeklapt"
                },
                chatButtonsCollapsed: {
                    description: "Onthoud de rij berichtknoppen als ingeklapt.",
                    label: "Chatknoppen ingeklapt"
                },
                titleBarCollapsed: {
                    description: "Onthoud de titelbalk als ingeklapt.",
                    label: "Titelbalk ingeklapt"
                },
                headerBarCollapsed: {
                    description: "Onthoud de kopbalk als ingeklapt.",
                    label: "Kopbalk ingeklapt"
                },
                userAreaCollapsed: {
                    description: "Onthoud het gebruikersgebied als ingeklapt.",
                    label: "Gebruikersgebied ingeklapt"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "Annuleren",
                name: "Name",
                response: "Antwoord",
                detectedArguments: "Gedetecteerde argumenten",
                exampleCommandResponse: "Voorbeeld van opdrachtantwoord:",
                exampleUsage: "Voorbeeldgebruik:",
                exampleOutput: "Voorbeelduitvoer:",
                viewArgumentsGuide: "Gids voor argumenten bekijken",
                editTag: "Tag bewerken",
                deleteTag: "Tag verwijderen",
                registeredTags: "Geregistreerde tags",
                createTag: "Tag maken",
                aTagWithThe: "Een tag met de naam **{{name}}** bestaat niet!",
                successfullyDeletedTheTag: "De tag **{{name}}** is verwijderd!",
                ephemeralReserved: "De argumentnaam \"ephemeral\" is gereserveerd en kan niet worden gebruikt.",
                createNewTag: "Nieuwe tag maken",
                editTagSubtitle: "Bewerk je aangepaste commando.",
                createTagSubtitle: "Maak een nieuwe tag die als slash-commando wordt geregistreerd.",
                save: "Opslaan",
                create: "Maken",
                variablesHelp: "Je antwoord kan variabelen tussen dubbele accolades bevatten die commando-argumenten worden, bijvoorbeeld",
                defaultValuesHelp: "Je kunt argumenten met standaardwaarden opgeven met een isgelijkteken, bijvoorbeeld",
                noTagsYet: "Oeps! Er zijn nog geen tags, gebruik `/tags create` om er een te maken!",
                nameAlreadyExists: "Een tag met de naam \"{{name}}\" bestaat al en wordt overschreven.",
                defaultValue: "(standaard: {{value}})"
            },
            name: "CustomCommands",
            description: "Hiermee kun je aangepaste slash-opdrachten / tags maken",
            option: {
                tagsList: {
                    label: "Taglijst"
                }
            },
            command: {
                ephemeral: "Of het antwoord alleen voor jou zichtbaar moet zijn",
                tags: "Alle aangepaste opdrachten beheren",
                create: "Maak een nieuw label",
                list: "Al je tags weergeven",
                delete: "Een tag op naam verwijderen",
                tagName: "De naam van de tag"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "Upload bestanden naar hostingdiensten zoals Zipline, Nest, S3 en WebDAV",
            toast: {
                fileTypeNotAllowed: "Bestandstype niet toegestaan door het huidige filter",
                pleaseConfigureFileuploadSettings: "Configureer eerst de FileUpload-instellingen",
                sharexConfigIsValid: "ShareX-configuratie is geldig",
                importedSharexConfig: "ShareX-configuratie geïmporteerd",
                uploadSuccessfulButNo: "Upload gelukt, maar er was geen URL om te kopiëren",
                uploadSuccessfulUrlCopied: "Upload gelukt, URL naar klembord gekopieerd",
                uploadSuccessfulButFailed: "Upload gelukt, maar URL kopiëren mislukt",
                uploadSuccessful: "Upload gelukt",
                uploadSucceededWithServicelabels: "Upload gelukt met {{serviceLabels_service}} na reserve",
                apngToGifConversion: "APNG-naar-GIF-conversie mislukt, wordt als APNG geüpload",
                uploadAlreadyInProgress: "Upload is al bezig",
                uploadCancelled: "Upload geannuleerd",
                uploadFailedMessage: "Upload mislukt: {{message}}",
                invalidSharexConfig: "Ongeldige ShareX-configuratie",
                failedToImportSharexConfig: "Kan ShareX-configuratie niet importeren"
            },
            text: {
                uploadToServicename: "Uploaden naar {{serviceName}}",
                uploadToHost: "Uploaden naar host",
                chooseFile: "Bestand kiezen...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "S3-compatibel",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "Aangepaste ShareX-uploader",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 uur",
                n12Hours: "12 uur",
                n24Hours: "24 uur",
                n72Hours: "72 uur",
                corsProxy: "CORS-proxy",
                query: "Query",
                param: "Parameter",
                fakeLink: "Neplink",
                embed: "Embed",
                n30Seconds: "30 seconden",
                n1Minute: "1 minuut",
                n2Minutes: "2 minuten",
                n5Minutes: "5 minuten",
                n10Minutes: "10 minuten",
                dragHostsToReorder: "Sleep hosts om de volgorde van reservepogingen te wijzigen. De geselecteerde host wordt eerst geprobeerd, daarna wordt deze volgorde gebruikt.",
                chooseWhereFileuploadSends: "Kies waar FileUpload nieuwe bestanden naartoe stuurt.",
                connectionDetailsForYour: "Verbindingsgegevens voor je Zipline-instantie.",
                theUrlOfYour: "De URL van je Zipline-instantie",
                yourZiplineApiAuthorization: "Je Zipline API-autorisatietoken",
                yourZiplineApiToken: "Je Zipline API-token",
                folderIdForUploads: "Map-ID voor uploads (laat leeg voor geen map)",
                leaveEmptyForNo: "Laat leeg voor geen map",
                connectionDetailsForE: "Verbindingsgegevens voor E-Z Host-uploads.",
                yourEZHost: "Je E-Z Host API-sleutel",
                connectionDetailsForNest: "Verbindingsgegevens voor Nest-uploads.",
                yourNestApiAuthorization: "Je Nest API-autorisatietoken",
                yourNestApiToken: "Je Nest API-token",
                connectionDetailsForEncrypting: "Verbindingsgegevens voor Encrypting.host-uploads.",
                yourEncryptingHostApi: "Je Encrypting.host API-sleutel",
                howEncryptingHostShould: "Hoe Encrypting.host geretourneerde links moet opmaken.",
                selectUrlStyle: "URL-stijl kiezen",
                optionalTitleForEmbed: "Optionele titel voor antwoorden in embedstijl.",
                optionalTitle: "Optionele titel",
                optionalColorForEmbed: "Optionele kleur voor antwoorden in embedstijl.",
                optionalColor: "Optionele kleur",
                optionalFakeLinkValue: "Optionele neplinkwaarde voor antwoorden in fakelinkstijl.",
                optionalFakeLink: "Optionele neplink",
                connectionDetailsAndObject: "Verbindingsgegevens en objectnaamgeving voor je bucket.",
                s3CompatibleEndpointE: "S3-compatibele endpoint (bijv. https://<accountid>.r2.cloudflarestorage.com)",
                bucketToUploadInto: "Bucket om naar te uploaden",
                awsRegionOrAuto: "AWS-regio of auto voor Cloudflare R2",
                s3CompatibleAccessKey: "S3-compatibele toegangssleutel",
                yourAccessKeyId: "Je toegangssleutel-ID",
                s3CompatibleSecretKey: "S3-compatibele geheime sleutel",
                yourSecretAccessKey: "Je geheime toegangssleutel",
                optionalTemporaryCredentialToken: "Optioneel tijdelijk referentietoken",
                optionalSessionToken: "Optioneel sessietoken",
                optionalPublicUrlBase: "Optionele openbare basis-URL voor geretourneerde links",
                optionalFolderPrefixInside: "Optionele map/voorvoegsel in de bucket",
                useEndpointBucketKey: "Gebruik de indeling endpoint/bucket/key, aanbevolen voor R2.",
                optionalAccountBindingFor: "Optionele accountkoppeling voor Catbox-uploads.",
                yourCatboxUserhashFor: "Je Catbox-userhash voor accountkoppeling, laat leeg voor anonieme uploads.",
                yourCatboxUserhash: "Je Catbox-userhash",
                howLongUploadsAre: "Hoe lang uploads worden bewaard",
                selectExpiry: "Vervaltijd kiezen",
                optionalAccountBindingFor2: "Optionele accountkoppeling voor GoFile-uploads.",
                optionalGofileTokenTo: "Optioneel GoFile-token om naar je account te uploaden.",
                optionalGofileToken: "Optioneel GoFile-token",
                connectionDetailsForPixelvault: "Verbindingsgegevens voor PixelVault-uploads.",
                yourPixelvaultAuthorizationKey: "Je PixelVault-autorisatiesleutel.",
                yourPixelvaultUploadKey: "Je PixelVault-uploadsleutel",
                optionalAccountBindingFor3: "Optionele accountkoppeling voor PixelDrain-uploads.",
                optionalPixeldrainApiKey: "Optionele PixelDrain API-sleutel voor geauthenticeerde uploads. Laat leeg voor anonieme uploads.",
                yourPixeldrainApiKey: "Je PixelDrain API-sleutel",
                pasteImportOrValidate: "Plak, importeer of valideer een aangepaste ShareX-uploaderconfiguratie.",
                pasteYourSharexCustom: "Plak de JSON van je aangepaste ShareX-uploader (.sxcu/.json). DestinationType moet FileUploader of ImageUploader bevatten.",
                importFromFileOr: "Importeren uit bestand of geplakte configuratie valideren",
                connectionDetailsForWebdav: "Verbindingsgegevens voor WebDAV-servers (Nextcloud, Owncloud enz.).",
                baseWebdavUrlE: "Basis-WebDAV-URL (bijv. https://nextcloud.example.com/remote.php/dav/files/username)",
                optionalSubdirectoryOnThe: "Optionele submap op de server om naar te uploaden (bijv. uploads)",
                leaveEmptyForRoot: "Laat leeg voor de hoofdmap",
                selectYourWebdavServer: "Kies je WebDAV-servertype. Nextcloud en ownCloud maken een openbare deellink. Algemeen geeft de directe bestands-URL terug.",
                selectServerType: "Servertype kiezen",
                howToReturnThe: "Hoe de openbare deellink wordt teruggegeven. Deelpagina linkt naar een webpagina; Directe download linkt rechtstreeks naar het bestand; Markdown-link verpakt de deelpagina in een klikbare bestandsnaam.",
                selectShareLinkFormat: "Indeling van deellink kiezen",
                controlWhatFileuploadDoes: "Bepaal wat FileUpload doet nadat een host een URL teruggeeft.",
                stripQueryParametersFrom: "Queryparameters uit de URL van het geüploade bestand verwijderen.",
                wrapUploadedVideoLinks: "Geüploade videolinks omhullen met een embedproxy voor betere Discord-voorbeelden.",
                chooseWhichEmbedProxy: "Kies welke embedproxydienst wordt gebruikt voor geüploade videolinks",
                selectAnEmbedProxy: "Kies een embedproxydienst",
                convertApngFilesTo: "APNG-bestanden naar GIF-indeling converteren.",
                useTheOriginalFilename: "Gebruik de oorspronkelijke bestandsnaam in plaats van uploads upload.ext te noemen.",
                automaticallyCopyTheUploaded: "De URL van het geüploade bestand automatisch naar het klembord kopiëren.",
                onlyUseTheSelected: "Alleen de geselecteerde uploader gebruiken zonder reservehosts te proberen.",
                afterUploadInsertThe: "Na het uploaden de resulterende URL in de huidige chatinvoer invoegen.",
                wrapInsertedUrlsIn: "Ingevoegde URL's tussen punthaken zetten om Discord-voorbeelden te voorkomen.",
                chooseWhenFileuploadTakes: "Kies wanneer FileUpload de bestandsafhandeling van Discord overneemt.",
                useFileuploadWhenUploading: "FileUpload gebruiken bij uploaden via de bestandskiezer van Discord.",
                useFileuploadOnlyFor: "FileUpload alleen gebruiken voor bestanden groter dan je huidige Discord-uploadlimiet.",
                manualDiscordFileSize: "Handmatige Discord-bestandsgroottelimiet in MB, gebruikt als automatische detectie onjuist is. Laat leeg voor automatisch.",
                auto: "Automatisch",
                commaSeparatedListOf: "Kommagescheiden lijst met extensies (bijv. png,jpg,gif). Laat leeg om alles toe te staan.",
                configureBrowserUploadProxying: "Proxy en time-outs voor browseruploads configureren.",
                corsProxyUsedFor: "CORS-proxy voor webuploads. Laat leeg om de standaardproxy te gebruiken.",
                sourceCodeForThe: "Broncode van de standaard-CORS-proxy",
                maximumTimeToWait: "Maximale wachttijd per uploadpoging voordat naar reserve wordt overgeschakeld",
                selectTimeout: "Time-out kiezen",
                drag: "Slepen",
                importSxcuJson: ".sxcu/.json importeren",
                validate: "Valideren",
                resetToDefault: "Standaard herstellen",
                progress: "{{percent}}% - {{transferred}} van {{total}}",
                cancel: "Annuleren"
            },
            option: {
                serviceType: {
                    description: "Geselecteerde uploaddienst",
                    label: "Diensttype"
                },
                serviceUrl: {
                    description: "URL van de Zipline-dienst",
                    label: "Dienst-URL"
                },
                ziplineToken: {
                    description: "Zipline-authenticatietoken",
                    label: "Zipline-token"
                },
                folderId: {
                    description: "Optionele Zipline-map-ID",
                    label: "Map-ID"
                },
                ezHostKey: {
                    description: "E-Z Host API-sleutel",
                    label: "E-Z Host-sleutel"
                },
                nestToken: {
                    description: "Nest API-token",
                    label: "Nest-token"
                },
                encryptingHostKey: {
                    description: "Encrypting.host API-sleutel",
                    label: "Encrypting.host-sleutel"
                },
                encryptingHostUrlStyle: {
                    description: "URL-stijl van Encrypting.host",
                    label: "Encrypting.host URL-stijl"
                },
                encryptingHostDomains: {
                    description: "JSON-lijst met Encrypting.host-domeinen",
                    label: "Encrypting.host-domeinen"
                },
                encryptingHostTitle: {
                    description: "Optionele titel voor Encrypting.host-embed",
                    label: "Encrypting.host-titel"
                },
                encryptingHostColor: {
                    description: "Optionele kleur voor Encrypting.host-embed",
                    label: "Encrypting.host-kleur"
                },
                encryptingHostFakelink: {
                    description: "Optionele neplink voor Encrypting.host",
                    label: "Encrypting.host-neplink"
                },
                s3Endpoint: {
                    description: "S3-compatibele endpoint-URL",
                    label: "S3-endpoint"
                },
                s3Bucket: {
                    description: "Naam van S3-bucket",
                    label: "S3-bucket"
                },
                s3Region: {
                    description: "S3-regio (gebruik auto voor R2)",
                    label: "S3-regio"
                },
                s3AccessKeyId: {
                    description: "S3-toegangssleutel-ID",
                    label: "S3-toegangssleutel-ID"
                },
                s3SecretAccessKey: {
                    description: "Geheime S3-toegangssleutel",
                    label: "Geheime S3-toegangssleutel"
                },
                s3SessionToken: {
                    description: "Optioneel S3-sessietoken",
                    label: "S3-sessietoken"
                },
                s3PublicUrl: {
                    description: "Optionele openbare basis-URL",
                    label: "Openbare S3-URL"
                },
                s3Prefix: {
                    description: "Optioneel voorvoegsel voor S3-objectsleutels",
                    label: "S3-voorvoegsel"
                },
                s3ForcePathStyle: {
                    description: "S3-URL's in padstijl gebruiken",
                    label: "S3-padstijl afdwingen"
                },
                litterboxExpiry: {
                    description: "Bewaartermijn van Litterbox",
                    label: "Litterbox-vervaltijd"
                },
                catboxUserhash: {
                    description: "Catbox-userhash voor accountkoppeling",
                    label: "Catbox-userhash"
                },
                sharexConfig: {
                    description: "JSON van aangepaste ShareX-uploader",
                    label: "ShareX-configuratie"
                },
                disableFallbacks: {
                    description: "Reserve-uploaddiensten uitschakelen",
                    label: "Reserves uitschakelen"
                },
                autoSend: {
                    description: "Geüploade URL in de chatinvoer invoegen",
                    label: "Automatisch verzenden"
                },
                autoFormat: {
                    description: "Ingevoegde URL tussen punthaken zetten",
                    label: "Automatisch opmaken"
                },
                bypassDiscordUpload: {
                    description: "Discord-uploads omzeilen en in plaats daarvan FileUpload gebruiken.",
                    label: "Discord-upload omzeilen"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "Gebruik FileUpload alleen als het bestand of de bestanden de groottelimiet overschrijden.",
                    label: "Discord-upload alleen boven limiet omzeilen"
                },
                customDiscordFileSizeLimitMB: {
                    description: "Handmatige Discord-bestandsgroottelimiet in MB. 0 betekent automatische detectie.",
                    label: "Aangepaste Discord-bestandsgroottelimiet (MB)"
                },
                gofileToken: {
                    description: "Optioneel GoFile API-token",
                    label: "GoFile-token"
                },
                fallbackOrder: {
                    description: "Volgorde van reserve-uploaders",
                    label: "Reservevolgorde"
                },
                pixelVaultKey: {
                    description: "PixelVault-uploadsleutel",
                    label: "PixelVault-sleutel"
                },
                pixelDrainKey: {
                    description: "Optionele PixelDrain API-sleutel",
                    label: "PixelDrain-sleutel"
                },
                uploadTimeoutMs: {
                    description: "Uploadtime-out in milliseconden",
                    label: "Uploadtime-out (ms)"
                },
                stripQueryParams: {
                    description: "Queryparameters uit geüploade URL's verwijderen",
                    label: "Queryparameters verwijderen"
                },
                embedProxyEnabled: {
                    description: "Geüploade videolinks via een embedhulpdienst leiden.",
                    label: "Embedproxy ingeschakeld"
                },
                embedProxyService: {
                    description: "Embedhulpdienst die geüploade videolinks omhult.",
                    label: "Embedproxydienst"
                },
                corsProxyUrl: {
                    description: "CORS-proxy-URL voor browseruploads",
                    label: "CORS-proxy-URL"
                },
                apngToGif: {
                    description: "APNG-uploads naar GIF converteren",
                    label: "APNG naar GIF"
                },
                preserveOriginalFilename: {
                    description: "Behoud de oorspronkelijke bestandsnaam bij het uploaden.",
                    label: "Oorspronkelijke bestandsnaam behouden"
                },
                autoCopy: {
                    description: "Upload-URL automatisch kopiëren",
                    label: "Automatisch kopiëren"
                },
                autoUploadPastedFiles: {
                    description: "Bestanden van het klembord automatisch naar de afbeeldingshost uploaden bij plakken in de chatinvoer.",
                    label: "Geplakte bestanden automatisch uploaden"
                },
                webdavUrl: {
                    description: "URL van WebDAV-server",
                    label: "WebDAV-URL"
                },
                webdavUsername: {
                    description: "WebDAV-gebruikersnaam",
                    label: "WebDAV-gebruikersnaam"
                },
                webdavPassword: {
                    description: "WebDAV-wachtwoord of app-token",
                    label: "WebDAV-wachtwoord"
                },
                webdavDirectory: {
                    description: "Optionele submap op de WebDAV-server",
                    label: "WebDAV-map"
                },
                webdavServerType: {
                    description: "WebDAV-servertype",
                    label: "WebDAV-servertype",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "Algemene WebDAV"
                },
                webdavShareType: {
                    description: "Indeling van WebDAV-deellink",
                    label: "WebDAV-deeltype",
                    sharepage: "Deelpagina",
                    directdownload: "Directe download",
                    markdown: "Markdown-link"
                },
                uploadAllowedFileTypes: {
                    description: "Kommagescheiden lijst met toegestane bestandsextensies (bijv. png,jpg,gif,mp4). Laat leeg om alle bestanden toe te staan.",
                    label: "Toegestane bestandstypen voor upload"
                },
                settingsComponent: {
                    description: "Instellingen",
                    label: "Instellingencomponent"
                }
            },
            panel: {
                fallbackOrder: "Reservevolgorde",
                uploadService: "Uploaddienst",
                zipline: "Zipline",
                serviceUrl: "Dienst-URL",
                ziplineToken: "Zipline-token",
                folderId: "Map-ID",
                eZHost: "E-Z Host",
                eZHostApiKey: "E-Z Host API-sleutel",
                nest: "Nest",
                nestToken: "Nest-token",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Encrypting.host API-sleutel",
                urlStyle: "URL-stijl",
                domainsJson: "Domeinen (JSON)",
                embedTitle: "Titel van embed",
                embedColor: "Kleur van embed",
                fakeLink: "Neplink",
                s3CompatibleStorage: "S3-compatibele opslag",
                s3EndpointUrl: "S3-endpoint-URL",
                bucketName: "Bucketnaam",
                region: "Regio",
                accessKeyId: "Toegangssleutel-ID",
                secretAccessKey: "Geheime toegangssleutel",
                sessionToken: "Sessietoken",
                publicBaseUrl: "Openbare basis-URL",
                objectKeyPrefix: "Voorvoegsel voor objectsleutels",
                usePathStyleEndpoint: "Endpoint in padstijl gebruiken",
                catbox: "Catbox",
                catboxUserhash: "Catbox-userhash",
                litterboxExpiry: "Litterbox-vervaltijd",
                gofile: "GoFile",
                gofileToken: "GoFile-token",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "PixelVault-uploadsleutel",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "PixelDrain API-sleutel",
                sharexCustomUploader: "Aangepaste ShareX-uploader",
                sharexCustomUploaderConfig: "Configuratie van aangepaste ShareX-uploader",
                sharexConfigActions: "ShareX-configuratieacties",
                webdav: "WebDAV",
                serverUrl: "Server-URL",
                username: "Gebruikersnaam",
                passwordOrAppToken: "Wachtwoord of app-token",
                passwordOrAppToken2: "wachtwoord of app-token",
                uploadDirectory: "Uploadmap",
                serverType: "Servertype",
                shareLinkFormat: "Indeling van deellink",
                uploadBehavior: "Uploadgedrag",
                stripQueryParameters: "Queryparameters verwijderen",
                useEmbedProxy: "Embedproxy gebruiken",
                embedProxyService: "Embedproxydienst",
                convertApngToGif: "APNG naar GIF converteren",
                preserveOriginalFilename: "Oorspronkelijke bestandsnaam behouden",
                autoCopyUrl: "URL automatisch kopiëren",
                disableFallbackUploaders: "Reserve-uploaders uitschakelen",
                insertUrlIntoChatInput: "URL invoegen in chatinvoer",
                formatInsertedUrl: "Ingevoegde URL opmaken",
                discordIntegration: "Discord-integratie",
                bypassDiscordUploadButton: "Uploadknop van Discord omzeilen",
                autoUploadPastedFiles: "Geplakte bestanden automatisch uploaden",
                respectDiscordFileSizeLimit: "Discord-bestandsgroottelimiet respecteren",
                discordLimitOverrideMb: "Discord-limiet overschrijven (MB)",
                allowedFileTypes: "Toegestane bestandstypen",
                network: "Netwerk",
                corsProxyUrl: "CORS-proxy-URL",
                defaultCorsProxySource: "Bron van standaard-CORS-proxy",
                uploadTimeout: "Uploadtime-out",
                domainsJsonDescription: "JSON-array van te gebruiken domeinen, bijvoorbeeld [\"offensive\"]."
            },
            status: {
                cancelled: "Upload geannuleerd.",
                uploadingVia: "Uploaden via {{service}}...",
                uploading: "Uploaden...",
                unknownError: "Onbekende fout",
                startingVia: "Upload starten via {{service}}...",
                retryingWith: "Opnieuw proberen met {{service}} ({{attempt}}/{{total}})...",
                uploadedVia: "Succesvol geüpload via {{service}}.",
                allFailed: "Alle uploaddiensten zijn mislukt. Laatste fout: {{error}}",
                fileReady: "Bestand klaar, upload wordt gestart...",
                preparing: "Upload voorbereiden...",
                failed: "Upload mislukt: {{message}}",
                timedOut: "Upload is verlopen",
                serviceFailed: "{{service}} mislukt: {{message}}",
                preparingFile: "{{name}}{{suffix}} voorbereiden..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "Laatste breedte"
                },
                lastHeight: {
                    label: "Laatste hoogte"
                },
                lastCaptionMode: {
                    label: "Laatste bijschriftmodus"
                },
                lastCaptionText: {
                    label: "Laatste bijschrifttekst"
                },
                lastCaptionSize: {
                    label: "Laatste bijschriftgrootte"
                },
                lastFontFamily: {
                    label: "Laatste lettertypefamilie"
                },
                lastBubbleTipBase: {
                    label: "Laatste basis van ballonpunt"
                },
                maxWidth: {
                    description: "Maximale breedte bij automatisch passend maken.",
                    label: "Max. breedte"
                },
                maxHeight: {
                    description: "Maximale hoogte bij automatisch passend maken.",
                    label: "Max. hoogte"
                }
            },
            name: "GifMaker",
            description: "Maak GIF's met bijschrift van elk medium in de chat of de GIF-kiezer.",
            text: {
                send: "Verzenden",
                export: "Exporteren",
                makeGif: "GIF maken",
                editGif: "GIF bewerken",
                selectAFont: "Kies een lettertype...",
                enterCaption: "Bijschrift invoeren...",
                width: "Breedte",
                height: "Hoogte",
                loadingFonts: "Lettertypen laden...",
                captions: "Bijschriften",
                text: "Tekst",
                font: "Lettertype",
                fontSize: "Lettergrootte",
                tipBase: "Basis van punt",
                dimensions: "Afmetingen",
                generatingGif: "GIF genereren...",
                clickOnThePreview: "Klik op het voorbeeld om de ballonpunt te plaatsen",
                gifPreview: "GIF-voorbeeld"
            },
            captionMode: {
                caption: "Bijschrift",
                none: "Geen",
                speechbubble: "Tekstballon"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "Hiermee kun je de GIF-zoekfunctie van Tenor of Giphy gebruiken in plaats van Klipy",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "Aanbieders",
                providersCount: "{{count}} providers"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "Ongeldige URL",
                copiedResponseToClipboard: "Antwoord naar klembord gekopieerd!",
                issueFetchingUrl: "Probleem bij ophalen van URL",
                copiedGitInfoTo: "Git-info naar klembord gekopieerd!",
                noUpdatesAvailable: "Geen updates beschikbaar",
                enabledPlugin: "{{id}} ingeschakeld",
                disabledPlugin: "{{id}} uitgeschakeld"
            },
            text: {
                openPlexcordTab: "Plexcord-tabblad openen",
                openPluginTab: "Plugintabblad openen",
                openThemesTab: "Themas-tabblad openen",
                openUpdaterTab: "Updater-tabblad openen",
                openCloudTab: "Cloudtabblad openen",
                openBackupRestoreTab: "Tabblad Back-up en herstel openen",
                restartClient: "Client herstarten",
                openQuickCssFile: "QuickCSS-bestand openen",
                openSettingsFolder: "Instellingenmap openen",
                openInGithub: "Openen op GitHub",
                openInBrowser: "Openen in browser",
                togglePlugin: "Plugin in-/uitschakelen",
                enable: "Inschakelen",
                disable: "Uitschakelen",
                quickFetch: "Snel ophalen",
                copyGitInfo: "Git-info kopiëren",
                checkForUpdates: "Controleren op updates",
                aPlexcordUpdateIs: "Er is een Plexcord-update beschikbaar!",
                clickHereToView: "Klik hier om de update te bekijken",
                navigateToServer: "Naar server gaan",
                commandPalette: "Opdrachtenpalet",
                searchTheCommandPalette: "Opdrachtenpalet doorzoeken",
                multipleChoice: "Meerkeuze",
                textInput: "Tekstinvoer",
                openDevTab: "Ontwikkelaarstabblad openen",
                enterUrlToFetch: "Voer URL in om op te halen (alleen GET)",
                typeAndPressEnter: "Typ en druk op Enter",
                recording: "Opnemen...",
                recordKeybind: "Sneltoets opnemen",
                enterUrl: "Voer een URL in"
            },
            option: {
                hotkey: {
                    description: "De sneltoets om het opdrachtenpalet te openen.",
                    label: "Sneltoets"
                },
                allowMouseControl: {
                    description: "De muis het opdrachtenpalet laten bedienen.",
                    label: "Muisbediening toestaan"
                }
            },
            name: "KeyboardNavigation",
            description: "Hiermee kun je met het toetsenbord door de interface navigeren."
        },
        lastActive: {
            name: "LastActive",
            description: "Een plugin om naar het laatste actieve bericht van jezelf of een andere gebruiker in een kanaal/server te springen.",
            toast: {
                failedToFindMessages: "Kan berichten niet vinden. Bekijk de console voor details.",
                couldnTFindAny: "Geen recente berichten van deze gebruiker gevonden.",
                channelInformationNotAvailable: "Kanaalinformatie niet beschikbaar.",
                failedToJumpTo: "Kan niet naar bericht springen. Bekijk de console voor details."
            },
            text: {
                yourLastMessage: "Je laatste bericht",
                userSLastMessage: "Laatste bericht van gebruiker"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "Tag verwijderen",
                mustBeGreaterThan: "Moet >{{value}} zijn",
                maxResolutionTooLow: "Maximale resolutie mag niet lager zijn dan {{value}}",
                maxResolutionRound: "Maximale resolutie moet op 0 eindigen als Resolutie afronden aan staat"
            },
            name: "LimitlessScreenshare",
            description: "Voegt een schuifregelaar toe voor resolutie en fps van scherm delen.",
            option: {
                maxFPS: {
                    description: "Max. FPS voor de schuifregelaar",
                    label: "Max. FPS"
                },
                maxResolution: {
                    description: "Max. resolutie voor de schuifregelaar",
                    label: "Max. resolutie"
                },
                roundResolution: {
                    description: "Resolutie afronden op de dichtstbijzijnde 10p",
                    label: "Resolutie afronden"
                },
                resolutions: {
                    label: "Resoluties"
                },
                fpss: {
                    label: "FPS-waarden"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "Berichtvoorbeelden en tijdstempels verbergen voor gedempte DM's en groepschats.",
                    label: "Gedempte verbergen"
                }
            },
            name: "MessagePeek",
            description: "Toont het voorbeeld en de tijdstempel van het laatste bericht in de lijst met privéberichten.",
            text: {
                officialDiscordMessage: "Officieel Discord-bericht",
                sentGif: "stuurde een GIF",
                voiceMessage: "spraakbericht",
                membersCount: "{{count}} leden",
                you: "Jij"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "Vertaal berichten automatisch naar je taal, met caching, schakelaars per kanaal en meer opties.",
            option: {
                targetLanguage: {
                    description: "Doeltaalcode voor vertalingen (bijv. en, es, fr, de, ja).",
                    label: "Doeltaal"
                },
                excludedLanguages: {
                    description: "Taalcodes die van vertaling worden uitgesloten (bijv. en, es, fr, de, ja).",
                    label: "Uitgesloten talen"
                },
                confidenceRequirement: {
                    description: "Minimale betrouwbaarheid (0 tot 1) om een vertaling te tonen.",
                    label: "Vereiste betrouwbaarheid"
                },
                autoTranslate: {
                    description: "Berichten automatisch vertalen zodra ze verschijnen.",
                    label: "Automatisch vertalen"
                },
                skipOwnMessages: {
                    description: "Je eigen berichten niet vertalen.",
                    label: "Eigen berichten overslaan"
                },
                skipBotMessages: {
                    description: "Botberichten niet vertalen.",
                    label: "Botberichten overslaan"
                },
                ignoredGuilds: {
                    description: "Kommagescheiden lijst met server-ID's waarin niet wordt vertaald.",
                    label: "Genegeerde servers"
                },
                ignoredChannels: {
                    description: "Kommagescheiden lijst met kanaal-ID's waarin niet wordt vertaald.",
                    label: "Genegeerde kanalen"
                },
                ignoredUsers: {
                    description: "Kommagescheiden lijst met gebruikers-ID's die niet worden vertaald.",
                    label: "Genegeerde gebruikers"
                },
                showIndicator: {
                    description: "Een kleine (vertaald)-indicator toevoegen aan vertaalde berichten.",
                    label: "Indicator tonen"
                },
                showOriginal: {
                    description: "De oorspronkelijke en vertaalde tekst tonen.",
                    noorig: "Origineel niet tonen."
                }
            },
            text: {
                showOriginalInSubtext: "Origineel in subtekst tonen",
                showOriginalMessageTranslation: "Oorspronkelijk bericht tonen, vertaling in subtekst",
                translatedFrom: "vertaald uit het {{lang}}"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "Stickerpakket verwijderd",
                stickerPackAdded: "Stickerpakket toegevoegd",
                stickerPacksAdded: "Stickerpakketten toegevoegd",
                stickerPacksExported: "Stickerpakketten geëxporteerd",
                newStickerPacksAlready: "Nieuwe stickerpakketten bestaan al, migratie niet nodig",
                oldStickerPacksNot: "Oude stickerpakketten niet gevonden, niets te migreren",
                migrationFailedTitleId: "Migratie mislukt: {{title}} ({{id}})",
                stickerPackMigrationComplete: "Migratie van stickerpakketten voltooid",
                failedToUploadSticker: "Kan sticker niet uploaden"
            },
            text: {
                stickerPackUrl: "URL van stickerpakket",
                pasteHtmlHere: "Plak HTML hier",
                delete: "Verwijderen",
                addStickerPackFrom: "Stickerpakket toevoegen via URL",
                insert: "Invoegen",
                addStickerPackFrom2: "Stickerpakket toevoegen via HTML",
                insertFromHtml: "Invoegen vanuit HTML",
                addStickerPackFrom3: "Stickerpakket toevoegen uit bestand",
                miscTools: "Diverse hulpmiddelen",
                exportStickerPacks: "Stickerpakketten exporteren",
                migrateFromV1: "Migreren vanaf v1",
                stickersManagement: "Stickerbeheer",
                theRegionLineRecognized: "De regio die LINE herkent kan afwijken van jouw regio vanwege de CORS-proxy die we gebruiken.",
                openStickerPackFile: "Stickerpakketbestand openen",
                stickers: "Stickers+",
                categoryTitle: "Categorie, {{title}}",
                searchStickers: "Stickers zoeken",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext is niet gedefinieerd",
                recentlyUsed: "Recent gebruikt",
                addFromUrl: "Toevoegen via URL",
                addFromHtml: "Toevoegen via HTML",
                addFromFile: "Toevoegen uit bestand",
                misc: "Overig",
                invalidUrl: "Ongeldige URL",
                lineOnly: "Momenteel worden alleen LINE-stickers/-emoji's ondersteund.",
                getTelegramStickers: "Haal Telegram-stickers op met",
                htmlFallbackHelp: "Als je fouten tegenkomt bij het toevoegen van een stickerpakket, kun je proberen het toe te voegen via de HTML-broncode van de pakketpagina.",
                htmlFallbackApplies: "Dit geldt voor stickers die regio-/besturingssysteemgebonden zijn enz."
            },
            option: {
                promptToUpload: {
                    description: "Voegt de sticker in de chatbalk in in plaats van hem meteen te verzenden",
                    label: "Vragen voor uploaden"
                },
                packs: {
                    description: "Pakketten",
                    label: "Pakketten"
                }
            },
            name: "MoreStickers",
            description: "Voegt stickerpakketten toe van andere sociale-mediaplatforms. (bijv. LINE)"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "De te gebruiken scrobbler-backend.",
                    label: "Scrobbler-backend"
                },
                instanceBaseURL: {
                    description: "De basis-URL van je ListenBrainz-instantie.",
                    label: "Basis-URL van instantie"
                },
                instanceAPIBaseUrl: {
                    description: "De basis-URL van je ListenBrainz-API.",
                    label: "API-basis-URL van instantie"
                },
                apiKey: {
                    description: "Last.fm API-sleutel. Niet verplicht, maar sterk aanbevolen om snelheidslimieten met onze gedeelde sleutel te voorkomen",
                    label: "API-sleutel"
                },
                username: {
                    description: "Gebruikersnaam",
                    label: "Gebruikersnaam"
                },
                shareUsername: {
                    description: "Link naar scrobblerprofiel tonen",
                    label: "Gebruikersnaam delen"
                },
                clickableLinks: {
                    description: "Nummer-, artiest- en albumnamen klikbare links maken",
                    label: "Klikbare links"
                },
                hideWithSpotify: {
                    description: "Aanwezigheid verbergen als Spotify draait",
                    label: "Verbergen met Spotify"
                },
                hideWithActivity: {
                    description: "Aanwezigheid verbergen als je een andere aanwezigheid hebt",
                    label: "Verbergen bij activiteit"
                },
                statusName: {
                    description: "Aangepaste statustekst. Je kunt de volgende variabelen gebruiken: {artist} | {album} | {title}",
                    label: "Statusnaam"
                },
                statusDisplayType: {
                    description: "Nummer-/artiestnaam tonen in de ledenlijst",
                    off: "Niet tonen (toont algemeen luisterbericht)"
                },
                nameFormat: {
                    description: "Naam van nummer en artiest tonen in de statusnaam",
                    statusName: "Aangepaste statusnaam gebruiken"
                },
                missingArt: {
                    description: "Als album of albumhoes ontbreekt",
                    logo: "Groot scrobblerlogo gebruiken"
                },
                showLogo: {
                    description: "Logo van scrobblerdienst tonen bij de albumhoes",
                    label: "Scrobblerlogo tonen"
                },
                showAlbumCover: {
                    description: "Albumhoes tonen. Uitschakelen toont een tijdelijke afbeelding. Handig als je muziek ongepaste hoezen heeft",
                    label: "Albumhoes tonen"
                },
                useListeningStatus: {
                    description: "Status \"Luistert naar\" tonen in plaats van \"Speelt\""
                }
            },
            name: "MusicRichPresence",
            description: "Rich Presence voor Last.FM/Listenbrainz",
            text: {
                showArtistName: "Artiestnaam tonen",
                showTrackName: "Nummernaam tonen",
                useMusicServiceName: "Naam van muziekdienst gebruiken (valt terug op aangepaste statustekst)",
                useFormatArtistSong: "Indeling 'artiest - nummer' gebruiken",
                useFormatSongArtist: "Indeling 'nummer - artiest' gebruiken",
                useArtistNameOnly: "Alleen artiestnaam gebruiken",
                useSongNameOnly: "Alleen nummernaam gebruiken",
                useAlbumNameFalls: "Albumnaam gebruiken (valt terug op aangepaste statustekst als het nummer geen album heeft)",
                useGenericPlaceholder: "Algemene tijdelijke afbeelding gebruiken",
                lastFm: "Last.FM",
                howToCreateAn: "Een API-sleutel maken",
                set: "Stel",
                applicationName: "Naam van de applicatie",
                applicationDescription: "Beschrijving van de applicatie",
                toAnythingAndLeave: "in op iets willekeurigs en laat de rest leeg.",
                createApiKey: "API-sleutel maken",
                invalidInstance: "Ongeldige ListenBrainz-compatibele instantie",
                provideBoth: "Geef zowel de",
                apiBaseUrl: "API-basis-URL",
                andThe: "als de",
                instanceBaseUrl: "instantie-basis-URL",
                forYourCustomInstance: "van je eigen ListenBrainz-instantie op, of schakel terug naar ListenBrainz/Last.FM",
                allowConnectTitle: "Plexcord toestaan verbinding te maken met de ListenBrainz-instantie",
                allowConnectBody: "Om je eigen ListenBrainz-instantie te gebruiken, moet je Plexcord eerst toestaan er verbinding mee te maken.",
                allowInstance: "Instantie toestaan",
                listenBrainzCompatible: "ListenBrainz-compatibel (zelf gehost)",
                and: "en"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "Plakken met middelste muisknop op Linux uitschakelen - alleen Linux"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "Poort om mee te verbinden",
                    label: "Poort"
                }
            },
            name: "OrbolayBridge",
            description: "Brugplugin om Orbolay met Discord te verbinden",
            toast: {
                connectedToOrbolayServer: "Verbonden met Orbolay-server"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "Wordt gebruikt om ondersteuning te bieden en door Discord veroorzaakte crashes te verhelpen.",
            text: {
                restartRequired: "Herstart vereist",
                restartNow: "Nu herstarten",
                later: "Later",
                wouldYouLikeTo: "Wil je nu herstarten?",
                somePluginsRequireA: "Sommige plugins vereisen een herstart om volledig te worden uitgeschakeld.",
                alreadyEnabled: "{{plugin}} is al ingeschakeld",
                alreadyDisabled: "{{plugin}} is al uitgeschakeld",
                disablePlugin: "{{plugin}} uitschakelen",
                enablePlugin: "{{plugin}} inschakelen",
                errorStopping: "Fout bij het stoppen van plugin {{plugin}}",
                errorStarting: "Fout bij het starten van plugin {{plugin}}"
            },
            toast: {
                failedToTolowercase: "{{toLowerCase}} mislukt",
                aRestartIsRequired: "Een herstart is nodig om de wijziging door te voeren!"
            },
            card: {
                notOnThisVersion: "Deze plugin zit niet in deze versie van Plexcord. Probeer bij te werken!"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "Verwijdert de activiteitensectie boven de ledenlijst",
                    label: "Activiteitensectie verwijderen"
                },
                showYourOwnActivityButtons: {
                    description: "Discord verbergt om de een of andere reden je eigen activiteitsknoppen",
                    label: "Je eigen activiteitsknoppen tonen"
                },
                refreshSlashCommands: {
                    description: "Ververst slash-opdrachten zodat nieuwe opdrachten zonder herstart van de client verschijnen.",
                    label: "Slash-opdrachten verversen"
                },
                forceRoleIcon: {
                    description: "Dwingt rolpictogrammen naast berichten in compacte modus af",
                    label: "Rolpictogram afdwingen"
                },
                accountStandingButton: {
                    description: "Een knop voor accountstatus tonen in de koptekstbalk",
                    label: "Knop voor accountstatus"
                },
                jsonGateway: {
                    description: "Dwingt JSON af bij opnieuw verbinden met de gateway",
                    label: "JSON-gateway"
                },
                enableAutoCorrect: {
                    description: "Voegt een schakelaar toe aan het contextmenu van het chatvak voor native autocorrectie en tekstvervangingen",
                    label: "Autocorrectie inschakelen"
                },
                autoCorrect: {
                    description: "Native autocorrectie en tekstvervangingen gebruiken in berichteditors",
                    label: "Autocorrectie"
                },
                disableHolidayNotifications: {
                    label: "Feestdagmeldingen uitschakelen",
                    description: "Altijd de standaard meldingsgeluiden van Discord gebruiken"
                },
                showAllBadges: {
                    label: "Alle badges tonen",
                    description: "Toont elke profielbadge in plaats van de rest achter +n te verbergen"
                }
            },
            text: {
                allGood: "Alles in orde!",
                limited: "Beperkt",
                veryLimited: "Zeer beperkt",
                atRisk: "Risico",
                suspended: "Geschorst",
                slashCommandsRefreshedSuccessfully: "Slash-opdrachten ververst.",
                failedToRefreshCommands: "Kan opdrachten niet verversen. Bekijk de console voor details.",
                enableAutocorrect: "Autocorrectie inschakelen"
            },
            command: {
                refreshCommands: "Slash-opdrachten verversen"
            },
            description: "Een verzameling kleine aanpassingen en oplossingen voor Discord."
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "Streamkwaliteitsopties ontgrendelen ongeacht Nitro-status",
                    label: "Kwaliteitsopties ontgrendelen"
                },
                removeResolutionCap: {
                    description: "Resoluties boven 720p bij 60 fps toestaan",
                    label: "Resolutielimiet verwijderen"
                },
                forceEncoderSettings: {
                    description: "Encoder dwingen de ingestelde resolutie/fps te gebruiken",
                    label: "Encoderinstellingen afdwingen"
                },
                preventDownscale: {
                    description: "Voorkomen dat Discord de streamresolutie verlaagt",
                    label: "Verlagen voorkomen"
                },
                keyframeInterval: {
                    description: "Keyframe-interval in ms (0 = encoderstandaard, 5000 = elke 5 s)",
                    label: "Keyframe-interval"
                },
                minBitrate: {
                    description: "Minimale encoderbitrate in kbps",
                    label: "Min. bitrate"
                },
                raiseBitrateCaps: {
                    description: "Standaard bitratelimieten op desktop verhogen (doel 600 kbps → 10 Mbps, max 3,5 Mbps → 40 Mbps)",
                    label: "Bitratelimieten verhogen"
                },
                preventFramerateReduction: {
                    description: "Voorkomen dat Discord de framerate van de stream verlaagt als je niet praat",
                    label: "Framerateverlaging voorkomen"
                },
                bitsPerPixelPct: {
                    description: "Bits per pixel in procenten voor de doelbitrate (8 = 0,08 bpp, 12 = 0,12 bpp)",
                    label: "Bits per pixel (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "Probeert de streamkwaliteit op Plextron te verbeteren door de encoder en kwaliteitsbeperkingen van Discord te patchen."
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "Toont het tijdstip van elke reactie in het reactievenster.",
            text: {
                userAtTime: "{{user}} om {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "Aangepaste statusnaam gebruiken",
                useFormatArtistSong: "Indeling 'artiest - nummer' gebruiken",
                useFormatSongArtist: "Indeling 'nummer - artiest' gebruiken",
                useArtistNameOnly: "Alleen artiestnaam gebruiken",
                useSongNameOnly: "Alleen nummernaam gebruiken",
                useAlbumName: "Albumnaam gebruiken",
                useLargeStatsFm: "Groot Stats.fm-logo gebruiken",
                useGenericPlaceholder: "Algemene tijdelijke afbeelding gebruiken",
                seriesMovieName: "Naam serie/film",
                seriesEpisodeTrackMovie: "Serie - naam aflevering/track/film",
                custom: "Aangepast",
                seriesCover: "Serieomslag",
                episodeCover: "Afleveringsomslag",
                season1Episode1: "Seizoen 1 aflevering 1",
                off: "Uit",
                listening: "Luistert",
                playing: "Speelt",
                streaming: "Streamt",
                watching: "Kijkt",
                none: "Geen",
                navidromeInstanceExposesServer: "Navidrome-instantie (stelt server-URL bloot. Eenmalige authenticatie verzonden.)",
                lastFmApiSends: "Last.fm-API (stuurt metadata naar last.fm)",
                donTShowShows: "Niet tonen (toont algemeen luisterbericht)",
                showStateLineContent: "Inhoud van statusregel tonen",
                showDetailsLineContent: "Inhoud van detailregel tonen",
                displayYourCurrentlyPlaying: "Toon je huidige luisterboeken als Discord Rich Presence. Vereist de URL, gebruikersnaam en het wachtwoord van je AudioBookShelf-server.",
                audiobookshelfServerUrl: "URL van AudioBookShelf-server.",
                audiobookshelfUsername: "AudioBookShelf-gebruikersnaam.",
                audiobookshelfPassword: "AudioBookShelf-wachtwoord.",
                connectsToTosuVia: "Maakt via WebSocket op poort 24050 verbinding met tosu. Geen configuratie nodig, zorg alleen dat tosu naast osu! draait.",
                showWhatYouRe: "Toon via stats.fm waar je naar luistert. Je luistergeschiedenis moet openbaar zijn.",
                statsFmUsername: "Stats.fm-gebruikersnaam.",
                customStatusText: "Aangepaste statustekst.",
                statsFm: "Stats.fm",
                nameFormat: "Naamindeling.",
                fallbackWhenArtIs: "Terugval als de hoes ontbreekt.",
                showListeningStatus: "Luisterstatus tonen.",
                showStatsFmLogo: "Stats.fm-logo naast de albumhoes tonen.",
                showLinkToStats: "Link naar stats.fm-profiel tonen.",
                showLinkToSong: "Link naar nummer op stats.fm tonen.",
                hideStatsFmPresence: "stats.fm-aanwezigheid verbergen als Spotify draait.",
                hideStatsFmPresence2: "stats.fm-aanwezigheid verbergen als een externe RPC draait.",
                disableDownloadingAlbumArt: "Downloaden van albumhoezen uitschakelen.",
                showWhatYouRe2: "Toon wat je afspeelt op Jellyfin. Zo krijg je je API-sleutel: open de Jellyfin-webinterface, druk op F12 om de ontwikkelaarstools te openen, ga naar het tabblad Netwerk, zoek verzoeken naar je server, vind de Authorization-header (Ctrl+F om te zoeken); je hebt het deel uit Token='this' nodig. Je gebruikers-ID staat in de URL van je profielpagina.",
                jellyfinServerUrl: "URL van Jellyfin-server.",
                jellyfinApiKey: "Jellyfin API-sleutel.",
                authorization: "Authorization",
                jellyfinUserId: "Jellyfin-gebruikers-ID.",
                userIdFromProfile: "Gebruikers-ID uit profiel-URL",
                nameDisplayFormat: "Weergave-indeling van naam.",
                customNameTemplate: "Aangepast naamsjabloon.",
                nameOnJellyfin: "{name} op Jellyfin",
                coverTypeForTv: "Type omslag voor tv-series.",
                episodeNumberFormat: "Indeling van afleveringsnummer.",
                overrideRichPresenceType: "Rich presence-type overschrijven.",
                showEpisodeNameAfter: "Afleveringsnaam tonen na seizoen-/afleveringsinfo.",
                showPresenceWhenMedia: "Aanwezigheid tonen als media gepauzeerd is.",
                hideMediaDetails: "Mediadetails verbergen.",
                discordRichPresenceFor: "Discord Rich Presence voor Gensokyo Radio. Schakel het in en luister!",
                refreshIntervalInSeconds: "Vernieuwingsinterval in seconden.",
                showWhatYouRe3: "Toon via Navidrome waar je naar luistert.",
                navidromeServerUrlMust: "Navidrome-server-URL (moet een openbaar domein zijn, bijv. https://navidrome.example.com).",
                navidromeUsername: "Navidrome-gebruikersnaam.",
                navidromePassword: "Navidrome-wachtwoord.",
                optionalDiscordApplicationClient: "Optionele client-ID van Discord-applicatie.",
                howToFetchAlbum: "Hoe albumhoezen worden opgehaald.",
                optionalProvideYourOwn: "Optioneel: geef je eigen Last.fm API-sleutel op (standaard als leeg).",
                showNavidromeLogoIn: "Navidrome-logo rechtsonder op de albumhoes tonen.",
                showAlbumNameIn: "Albumnaam tonen in aanwezigheid.",
                whichTypeOfActivity: "Welk activiteitstype wordt getoond.",
                showTheStateDetails: "Inhoud van status-/detailregel tonen in de ledenlijst",
                hideRichPresenceWhen: "Rich Presence verbergen als muziek gepauzeerd is (in plaats van een stopwatch te tonen)",
                theListeningToText: "De tekst 'Luistert naar' (bijv. {artist})",
                navidrome: "Navidrome",
                theMainLineShowing: "De hoofdregel die toont welk nummer speelt (bijv. {song})",
                song: "{song}",
                theLineBelowThe: "De regel onder de nummernaam (bijv. {artist})",
                artist: "{artist}",
                theAlbumLineE: "De albumregel (bijv. {album})",
                album: "{album}",
                enableTabLabelsCurrenttab: "{{TAB_LABELS_currentTab}}-aanwezigheid inschakelen.",
                statsFmProfile: "Stats.fm-profiel",
                viewSong: "Nummer bekijken",
                showArtistName: "Artiestnaam tonen",
                showTrackName: "Nummernaam tonen",
                enterValue: "Voer een waarde in"
            },
            name: "RichPresence",
            description: "Centrale Rich Presence-hub voor AudioBookShelf, osu!, stats.fm, Jellyfin, Navidrome en Gensokyo Radio.",
            toast: {
                audiobookshelfRpcIsNot: "AudioBookShelf-RPC is niet geconfigureerd.",
                jellyfinRpcIsNot: "Jellyfin-RPC is niet geconfigureerd.",
                jellyfinReturnedAnInvalid: "Jellyfin gaf een ongeldig antwoord. Je API-sleutel is mogelijk onjuist."
            },
            option: {
                enabled: {
                    description: "Rich Presence-diensten inschakelen.",
                    label: "Ingeschakeld"
                },
                serviceSettings: {
                    description: "Dienstconfiguratie.",
                    label: "Dienstinstellingen"
                },
                abs_enabled: {
                    description: "AudioBookShelf-aanwezigheid inschakelen.",
                    label: "AudioBookShelf ingeschakeld"
                },
                tosu_enabled: {
                    description: "osu! (tosu)-aanwezigheid inschakelen.",
                    label: "osu! (tosu) ingeschakeld"
                },
                sfm_enabled: {
                    description: "stats.fm-aanwezigheid inschakelen.",
                    label: "Stats.fm ingeschakeld"
                },
                jf_enabled: {
                    description: "Jellyfin-aanwezigheid inschakelen.",
                    label: "Jellyfin ingeschakeld"
                },
                gr_enabled: {
                    description: "Gensokyo Radio-aanwezigheid inschakelen.",
                    label: "Gensokyo Radio ingeschakeld"
                },
                nd_enabled: {
                    description: "Navidrome-aanwezigheid inschakelen.",
                    label: "Navidrome ingeschakeld"
                },
                abs_serverUrl: {
                    description: "URL van AudioBookShelf-server.",
                    label: "AudioBookShelf-server-URL"
                },
                abs_username: {
                    description: "AudioBookShelf-gebruikersnaam.",
                    label: "AudioBookShelf-gebruikersnaam"
                },
                abs_password: {
                    description: "AudioBookShelf-wachtwoord.",
                    label: "AudioBookShelf-wachtwoord"
                },
                sfm_username: {
                    description: "Stats.fm-gebruikersnaam.",
                    label: "Stats.fm-gebruikersnaam"
                },
                sfm_shareUsername: {
                    description: "Link naar stats.fm-profiel tonen.",
                    label: "Stats.fm: gebruikersnaam delen"
                },
                sfm_shareSong: {
                    description: "Link naar nummer op stats.fm tonen.",
                    label: "Stats.fm: nummer delen"
                },
                sfm_hideWithSpotify: {
                    description: "stats.fm-aanwezigheid verbergen als Spotify draait.",
                    label: "Stats.fm: verbergen met Spotify"
                },
                sfm_hideWithExternalRPC: {
                    description: "stats.fm-aanwezigheid verbergen als een externe RPC draait.",
                    label: "Stats.fm: verbergen bij externe RPC"
                },
                sfm_statusName: {
                    description: "Aangepaste statustekst.",
                    label: "Stats.fm: statusnaam"
                },
                sfm_nameFormat: {
                    description: "Naamindeling.",
                    label: "Stats.fm: naamindeling",
                    statusName: "Aangepaste statusnaam gebruiken",
                    artistFirst: "Indeling 'artiest - nummer' gebruiken",
                    songFirst: "Indeling 'nummer - artiest' gebruiken",
                    artistOnly: "Alleen artiestnaam gebruiken",
                    songOnly: "Alleen nummernaam gebruiken",
                    albumName: "Albumnaam gebruiken"
                },
                sfm_useListeningStatus: {
                    description: "Luisterstatus tonen.",
                    label: "Stats.fm: luisterstatus gebruiken"
                },
                sfm_missingArt: {
                    description: "Terugval als de hoes ontbreekt.",
                    label: "Stats.fm: ontbrekende hoes",
                    statsFmLogo: "Groot Stats.fm-logo gebruiken",
                    placeholder: "Algemene tijdelijke afbeelding gebruiken"
                },
                sfm_showLogo: {
                    description: "Stats.fm-logo naast de albumhoes tonen.",
                    label: "Stats.fm: logo tonen"
                },
                sfm_alwaysHideArt: {
                    description: "Downloaden van albumhoezen uitschakelen.",
                    label: "Stats.fm: hoes altijd verbergen"
                },
                jf_serverUrl: {
                    description: "URL van Jellyfin-server.",
                    label: "Jellyfin-server-URL"
                },
                jf_apiKey: {
                    description: "Jellyfin API-sleutel.",
                    label: "Jellyfin API-sleutel"
                },
                jf_userId: {
                    description: "Jellyfin-gebruikers-ID.",
                    label: "Jellyfin-gebruikers-ID"
                },
                jf_nameDisplay: {
                    description: "Weergave-indeling van naam.",
                    label: "Jellyfin: naamweergave",
                    default: "Naam serie/film",
                    full: "Serie - naam aflevering/track/film",
                    custom: "Aangepast"
                },
                jf_customName: {
                    description: "Aangepast naamsjabloon.",
                    label: "Jellyfin: aangepaste naam"
                },
                jf_coverType: {
                    description: "Type omslag voor tv-series.",
                    label: "Jellyfin: type omslag",
                    series: "Serieomslag",
                    episode: "Afleveringsomslag"
                },
                jf_episodeFormat: {
                    description: "Indeling van afleveringsnummer.",
                    label: "Jellyfin: afleveringsindeling",
                    long: "S01E01",
                    fulltext: "Seizoen 1 aflevering 1"
                },
                jf_showEpisodeName: {
                    description: "Afleveringsnaam tonen na seizoen-/afleveringsinfo.",
                    label: "Jellyfin: afleveringsnaam tonen"
                },
                jf_overrideType: {
                    description: "Rich presence-type overschrijven.",
                    label: "Jellyfin: type overschrijven",
                    off: "Uit",
                    listening: "Luistert",
                    playing: "Speelt",
                    streaming: "Streamt",
                    watching: "Kijkt"
                },
                jf_showPausedState: {
                    description: "Aanwezigheid tonen als media gepauzeerd is.",
                    label: "Jellyfin: gepauzeerde status tonen"
                },
                jf_privacyMode: {
                    description: "Mediadetails verbergen.",
                    label: "Jellyfin: privacymodus"
                },
                gr_refreshInterval: {
                    description: "Vernieuwingsinterval in seconden.",
                    label: "Gensokyo Radio: vernieuwingsinterval"
                },
                nd_serverUrl: {
                    description: "Navidrome-server-URL (bijv. https://navidrome.example.com)",
                    label: "Navidrome-server-URL"
                },
                nd_username: {
                    description: "Navidrome-gebruikersnaam",
                    label: "Navidrome-gebruikersnaam"
                },
                nd_password: {
                    description: "Navidrome-wachtwoord",
                    label: "Navidrome-wachtwoord"
                },
                nd_clientId: {
                    description: "Optionele client-ID van Discord-applicatie",
                    label: "Navidrome: client-ID"
                },
                nd_showSmallImage: {
                    description: "Navidrome-logo rechtsonder op de albumhoes tonen.",
                    label: "Navidrome: kleine afbeelding tonen"
                },
                nd_showAlbum: {
                    description: "Albumnaam tonen in aanwezigheid.",
                    label: "Navidrome: album tonen"
                },
                nd_albumArtMode: {
                    description: "Hoe albumhoezen worden opgehaald.",
                    label: "Navidrome: albumhoesmodus",
                    none: "Geen",
                    instance: "Navidrome-instantie (stelt server-URL bloot aan Discord, geen authenticatie verzonden)",
                    lastfm: "Last.fm-API (stuurt nummermetadata naar Last.fm)"
                },
                nd_lastfmApiKey: {
                    description: "Optionele Last.fm API-sleutel",
                    label: "Navidrome: Last.fm API-sleutel"
                },
                nd_refreshInterval: {
                    description: "Vernieuwingsinterval in seconden.",
                    label: "Navidrome: vernieuwingsinterval"
                },
                nd_activityType: {
                    description: "Welk activiteitstype",
                    label: "Navidrome: activiteitstype",
                    listening: "Luistert",
                    playingFixesHiddenLines: "Speelt (verhelpt verborgen regels)",
                    watching: "Kijkt"
                },
                nd_nameString: {
                    description: "Opmaakreeks voor activiteitsnaam",
                    label: "Navidrome: naamreeks"
                },
                nd_detailsString: {
                    description: "Opmaakreeks voor activiteitsdetails",
                    label: "Navidrome: detailreeks"
                },
                nd_stateString: {
                    description: "Opmaakreeks voor activiteitsstatus",
                    label: "Navidrome: statusreeks"
                },
                nd_largeTextString: {
                    description: "Opmaakreeks voor grote activiteitstekst",
                    label: "Navidrome: reeks voor grote tekst"
                },
                nd_statusDisplayType: {
                    description: "Nummer-/artiestnaam tonen in de ledenlijst",
                    off: "Niet tonen (toont algemeen luisterbericht)"
                },
                nd_hideOnPause: {
                    description: "Rich Presence verbergen als muziek gepauzeerd is",
                    label: "Navidrome: verbergen bij pauze"
                }
            },
            panel: {
                password: "Wachtwoord",
                statsFmUsername: "stats.fm-gebruikersnaam",
                customStatusText: "Aangepaste statustekst",
                nameFormat: "Naam Formaat",
                missingArtFallback: "Terugval bij ontbrekende hoes",
                showListeningStatus: "Luisterstatus tonen",
                showStatsFmLogo: "Stats.fm-logo tonen",
                showProfileLink: "Profiellink tonen",
                showSongLink: "Nummerlink tonen",
                hideWithSpotify: "Verbergen met Spotify",
                hideWithExternalRpc: "Verbergen bij externe RPC",
                disableAlbumArt: "Albumhoezen uitschakelen",
                apiKey: "API-sleutel",
                userId: "Gebruikers-ID",
                nameDisplay: "Naamweergave",
                customNameTemplate: "Aangepast naamsjabloon",
                coverType: "Type omslag",
                episodeFormat: "Afleveringsindeling",
                overridePresenceType: "Aanwezigheidstype overschrijven",
                showEpisodeName: "Afleveringsnaam tonen",
                showWhenPaused: "Tonen bij pauze",
                privacyMode: "Privacymodus",
                refreshInterval: "Vernieuwingsinterval",
                clientId: "Client-ID",
                albumArtMode: "Albumhoesmodus",
                lastFmApiKey: "Last.fm API-sleutel",
                showSmallImage: "Kleine afbeelding tonen",
                showAlbum: "Album tonen",
                activityType: "Activiteitstype",
                statusDisplayType: "Weergavetype van status",
                hideOnPause: "Verbergen bij pauze",
                activityNameFormat: "Indeling van activiteitsnaam",
                detailsFormat: "Indeling van details",
                stateFormat: "Indeling van status",
                largeTextFormat: "Indeling van grote tekst",
                enabled: "Ingeschakeld"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "Keert de `r`-vlag om: met `r` wordt niet-regex-modus ingeschakeld, zonder wordt regex-modus gebruikt.",
                    label: "Standaard regex"
                }
            },
            name: "SedEnhanced",
            description: "Breidt de rudimentaire `sed`-ondersteuning van Discord uit."
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "Of de hoogste rol bij bots wordt getoond.",
                    label: "Bots tonen"
                },
                useRoleColor: {
                    description: "De kleur van de rol voor het pictogram gebruiken.",
                    label: "Rolkleur gebruiken"
                }
            },
            name: "ShowRolesInChat",
            description: "Toont de hoogste rol van een gebruiker naast de naam in chatberichten. Verberg/toon specifieke rollen via hun contextmenu (rechtsklik).",
            text: {
                chatRoleActions: "Rolacties in chat",
                unhideRolesInChat: "Rollen weer tonen in chat",
                showRoleInChat: "Rol in chat tonen",
                hideRoleInChat: "Rol in chat verbergen"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "Kommagescheiden Discord-gebruikers-ID's waarvan pings en serverbadges worden gedempt.",
                    label: "Gedempte gebruikers-ID's"
                }
            },
            name: "SilenceUsers",
            description: "Dempt @vermeldingspings en serverbadgetellers van specifieke gebruikers. Gewone berichten en DM's blijven ongemoeid."
        },
        songLink: {
            text: {
                showIfAvailable: "Tonen indien beschikbaar",
                openInDesktopApp: "Openen in desktop-app",
                loadingSongLink: "Nummerlink laden...",
                pleaseProvideAMusic: "Geef een muzieklink op.",
                thisWillTakeA: "Dit duurt even...",
                noAlternativePlatformsFound: "Geen alternatieve platforms gevonden voor deze link.",
                failedToResolveMusic: "Kan muzieklink niet herleiden",
                logo: "{{name}}-logo"
            },
            option: {
                servicesSettings: {
                    description: "instellingen voor diensten",
                    label: "Dienstinstellingen"
                },
                userCountry: {
                    description: "Land gebruikt voor opzoeken (landcode van twee letters)",
                    label: "Land van gebruiker"
                },
                includeMetadata: {
                    description: "Titel en artiestnaam als kop opnemen.",
                    label: "Metadata opnemen"
                }
            },
            name: "SongLink",
            description: "Voegt knoppen voor streamingdiensten toe onder nummerlinks",
            command: {
                musiclink: "Een muzieklink omzetten naar andere streamingplatforms.",
                url: "Muzieklink (Spotify, Deezer, YouTube, Tidal, Apple Music, SoundCloud)"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "Laat nummers zien op je profiel",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "Expliciet",
                addSong: "Nummer toevoegen",
                addANewSong: "Een nieuw nummer toevoegen",
                copyLink: "Link kopiëren",
                removeSong: "Nummer verwijderen",
                failedToLoad: "Laden mislukt!",
                areYouSure: "Weet je het zeker?",
                thisWillOverwriteYour: "Dit overschrijft je huidige nummers.",
                continue: "Doorgaan",
                nevermind: "Laat maar",
                thisWillPermanentlyDelete: "Dit verwijdert al je nummers permanent.",
                delete: "Verwijderen",
                signInToSong: "Aanmelden bij Song Spotlight",
                songs: "Nummers",
                authorization: "Authorization",
                importFromClipboard: "Importeren van klembord",
                copyToClipboard: "Naar klembord kopiëren",
                signOut: "Afmelden",
                deleteSongs: "Nummers verwijderen",
                more: "Meer",
                editSongs: "Nummers bewerken",
                copyJson: "JSON kopiëren",
                looksLikeThereS: "Het lijkt erop dat hier niets is!",
                uhOhSongSpotlight: "Oeps! Song Spotlight kon niet worden geladen. Bekijk de console voor meer details.",
                stealSong: "Nummer stelen",
                profileSongs: "Profielnummers",
                notEnoughSpace: "Niet genoeg ruimte",
                alreadyAdded: "Je hebt dit nummer al toegevoegd",
                invalidLink: "Ongeldige link",
                failedToParseLink: "Kan link niet verwerken",
                invalidUrl: "Ongeldige URL",
                goAddSongs: "Nou? Waar wacht je op? Voeg wat nummers toe aan je Song Spotlight!",
                tellUserToAddSongs: "Vraag {{name}} om wat nummers aan de Song Spotlight toe te voegen!",
                supportedServices: "Song Spotlight ondersteunt deze diensten:",
                viewSongsVia: "Je kunt je nummers ook bekijken via het commando",
                viewSongsViaSuffix: "!",
                coverTooltipOwner: "{{sublabel}} van {{label}}",
                coverTooltipBy: "{{label}} van {{sublabel}}",
                lastUpdated: "Laatst bijgewerkt",
                save: "Opslaan",
                showMore: "Toon nog {{count}}"
            },
            toast: {
                youHaveBeenSigned: "Je bent afgemeld bij Song Spotlight. Meld je opnieuw aan.",
                songSpotlightError: "Song Spotlight: {{error}}",
                successfullyAuthorized: "Autorisatie gelukt!",
                failedToPlaySong: "Kan nummervoorbeeld niet afspelen!",
                addedSong: "Nummer toegevoegd!",
                removedSong: "Nummer verwijderd!",
                noJsonInClipboard: "Geen JSON op het klembord!",
                invalidSongSpotlightData: "Ongeldige Song Spotlight-gegevens op het klembord!",
                oneOrMoreImported: "Een of meer geïmporteerde nummers waren ongeldig.",
                importedSongsFromClipboard: "Nummers geïmporteerd van het klembord!",
                successfullySavedSongs: "Nummers opgeslagen!",
                successfullySignedOut: "Afgemeld!",
                successfullyDeletedSongs: "Nummers verwijderd!",
                youDonTHave: "Je hebt niet genoeg ruimte!",
                uhOhThisSong: "Oeps, dit nummer bestaat niet!",
                youAlreadyHaveThis: "Je hebt dit nummer al toegevoegd!",
                youDonTHave2: "Je... hebt dit nummer niet toegevoegd?",
                fetchError: "Song Spotlight-ophaalfout bij {{path}}"
            },
            option: {
                collapseSongList: {
                    description: "Vouwt de nummerlijst op profielen samen tot een knop die een apart menu opent",
                    label: "Nummerlijst samenvouwen"
                },
                profileSongsLimit: {
                    description: "Hoeveel nummers worden getoond bij het eerste klikken op een gebruiker",
                    label: "Limiet profielnummers"
                },
                previewVolume: {
                    description: "Volume van nummervoorbeelden bij afspelen",
                    label: "Voorbeeldvolume"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "Voorkomt dat Discord de meldingsinstelling van een kanaal automatisch op \"Alle berichten\" zet"
        },
        themeLibrary: {
            text: {
                enablePlugin: "Plugin inschakelen",
                cancel: "Annuleren",
                holdOn: "Wacht even!",
                thisThemeRequiresThe: "Dit thema vereist de",
                pluginToWorkProperly: "plugin om goed te werken!",
                doYouWantTo: "Wil je het inschakelen?",
                themeInfo: "Thema-info",
                viewSource: "Bron bekijken",
                close: "Sluiten",
                download: "Downloaden",
                overwrite: "Overschrijven",
                keepMyFile: "Mijn bestand behouden",
                copyToClipboard: "Naar klembord kopiëren",
                conflict: "Conflict!",
                themeSource: "Themabron",
                aThemeWithThe: "Een thema met dezelfde naam",
                alreadyExists: "bestaat al",
                inYourThemesDirectory: "in je themamap! Wil je het overschrijven?",
                version: "Versie",
                likes: "Likes",
                donate: "Doneren",
                supportServer: "Supportserver",
                source: "Bron",
                tags: "Tags",
                youCanSupportThe: "Je kunt de auteur steunen door hieronder te doneren!",
                joinDiscordServer: "Discord-server joinen",
                viewThemeSource: "Themabron bekijken",
                showAll: "Alles tonen",
                showThemes: "Thema's tonen",
                showSnippets: "Snippets tonen",
                showMostLiked: "Meest gelikete tonen",
                showDark: "Donkere tonen",
                showLight: "Lichte tonen",
                showEnabled: "Ingeschakelde tonen",
                showDisabled: "Uitgeschakelde tonen",
                searchForATheme: "Een thema zoeken...",
                gettingTheLatestThemes: "Nieuwste thema's ophalen...",
                thisWonTTake: "Dit duurt niet lang!",
                failedToFetchThemes: "Kan thema's niet ophalen",
                couldNotFetchThe: "Kan de themalijst niet ophalen. Probeer het later opnieuw.",
                wantYourThemeRemoved: "Wil je dat je thema wordt verwijderd?",
                hide: "Verbergen",
                noThemeFound: "Geen thema gevonden.",
                tryNarrowingYourSearch: "Probeer je zoekopdracht te verfijnen.",
                themeLibrary: "Themabibliotheek",
                successfullyAuthorizedWithThemelibrary: "Geautoriseerd bij ThemeLibrary!",
                failedToAuthorizeCheck: "Autoriseren mislukt, bekijk de console",
                successfullyDeauthorizedFromThemelibrary: "Autorisatie bij ThemeLibrary ingetrokken!",
                failedToDeauthorizeCheck: "Intrekken mislukt, bekijk de console",
                themelibraryAuth: "ThemeLibrary-autorisatie",
                themeRemoval: "Thema verwijderen",
                allThemeAuthorsAre: "Alle thema-auteurs worden vermeld in de thema-info en er is geen bron gewijzigd. Wil je je thema toch laten verwijderen, open dan hieronder een issue.",
                authorizeWithThemelibrary: "Autoriseren bij ThemeLibrary",
                copyThemelibraryToken: "ThemeLibrary-token kopiëren",
                deauthorizeThemelibrary: "Autorisatie bij ThemeLibrary intrekken",
                themeDetails: "Details van {{name}}",
                mostLiked: "Meest geliked",
                newestAdditions: "Nieuwste toevoegingen",
                removeTheme: "Thema verwijderen",
                addTheme: "Thema toevoegen",
                authors: "Auteurs",
                author: "Auteur",
                nobodyLikedTheme: "Nog niemand vindt dit thema leuk.",
                nobodyLikedSnippet: "Nog niemand vindt dit snippet leuk.",
                usersLikedTheme: "{{likes}} gebruikers vinden dit thema leuk!",
                usersLikedSnippet: "{{likes}} gebruikers vinden dit snippet leuk!",
                openThemeLibrary: "Themabibliotheek openen",
                lastUpdated: "Dit thema is voor het laatst bijgewerkt op",
                removalInfo: "Als je wilt dat je thema('s) permanent worden verwijderd, open dan een issue op",
                themes: "Thema's",
                requestRemoval: "Verwijdering van thema aanvragen",
                pluginSuffix: "plugin!"
            },
            toast: {
                downloadedName: "{{name}} gedownload!",
                failedToDownloadName: "Kan {{name}} niet downloaden! (bekijk de console)",
                invalidOrExpiredInvite: "Ongeldige of verlopen uitnodiging!",
                copiedToClipboard: "Gekopieerd naar klembord",
                noUniquetokenPresentTry: "Geen uniqueToken aanwezig, autoriseer eerst!",
                noTokenToCopy: "Geen token om te kopiëren, autoriseer eerst!",
                copiedToClipboard2: "Gekopieerd naar klembord!"
            },
            name: "ThemeLibrary",
            description: "Een bibliotheek met thema's voor Plexcord.",
            option: {
                hideWarningCard: {
                    description: "De waarschuwingskaart bovenaan het tabblad Themabibliotheek verbergen",
                    label: "Waarschuwingskaart verbergen"
                },
                buttons: {
                    description: "ThemeLibrary-knoppen",
                    label: "Knoppen"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "De vertaalplugin van Plexcord, maar met ondersteuning voor kunsttalen!",
            text: {
                translate: "Vertalen",
                dismiss: "Sluiten",
                translationFailedDueTo: "Vertaling mislukt door een fout.",
                translatedFrom: "vertaald uit het {{lang}}"
            },
            option: {
                target: {
                    description: "Doeltaal",
                    label: "Doel"
                },
                toki: {
                    description: "Toki Pona inschakelen",
                    label: "Toki Pona"
                },
                sitelen: {
                    description: "Sitelen Pona inschakelen",
                    label: "Sitelen Pona"
                },
                shavian: {
                    description: "Shavian inschakelen",
                    label: "Shavian"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "Een plugin die je helpt quizvragen te beantwoorden met AI.",
            text: {
                answerWithAi: "Antwoorden met AI",
                enterApiKeyHere: "Voer hier de API-sleutel voor je AI-endpoint in.",
                enterSystemPrompt: "Voer systeemprompt in.",
                enterYourOpenaiCompatible: "Voer hier je OpenAI-compatibele AI-endpoint in.",
                status: "Status {{status}}"
            },
            option: {
                apiKey: {
                    description: "API-sleutel.",
                    label: "API-sleutel"
                },
                model: {
                    description: "Te gebruiken AI-model.",
                    label: "Model",
                    placeholder: "bijv. google/gemini-3-flash-preview, inception/mercury, openai/gpt-5.2-chat, enz."
                },
                systemPrompt: {
                    description: "Systeemprompt voor de AI. Tijdelijke aanduidingen: {current_user}, {current_time}",
                    label: "Systeemprompt"
                },
                maxTokens: {
                    description: "Maximaal aantal tokens in het antwoord.",
                    label: "Max. tokens"
                },
                endpoint: {
                    description: "OpenAI-compatibele AI-endpoint.",
                    label: "Endpoint"
                },
                context: {
                    description: "Aantal eerdere berichten om als context op te nemen.",
                    label: "Context"
                },
                passMessageAuthorName: {
                    description: "De naam van de auteur vóór de berichtinhoud plaatsen wanneer deze naar de AI gaat. Dit helpt de AI om gebruikers in een gesprek te onderscheiden.",
                    label: "Naam van berichtauteur doorgeven"
                },
                treatSelfAsAssistant: {
                    description: "Indien ingeschakeld worden je eigen berichten in de context als assistentberichten behandeld. Sommige modellen gaan dan fanfictie genereren.",
                    label: "Mezelf als assistent behandelen"
                },
                mode: {
                    description: "Hoe moeten antwoorden worden afgehandeld?",
                    label: "Modus",
                    autoreply: "Automatisch antwoorden",
                    chatbar: "Tekst in chatbalk vervangen",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "Afbeeldingen als context aan de AI doorgeven (indien aanwezig). Niet alle modellen ondersteunen dit.",
                    label: "Afbeeldingen ondersteunen"
                },
                sendImagesAsBase64: {
                    description: "Afbeeldingen als base64 naar de AI sturen.",
                    label: "Afbeeldingen als base64 sturen"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI: API-instellingen zijn onvolledig.",
                errorGettingResponseFrom: "Fout bij ophalen van antwoord van AI-model"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "Aantal ongelezen tonen bij gedempte kanalen",
                    label: "Tonen bij gedempte kanalen"
                },
                notificationCountLimit: {
                    description: "+99 tonen in plaats van het werkelijke aantal",
                    label: "Limiet voor meldingsaantal"
                }
            },
            name: "UnreadCountBadge",
            description: "Toont badges met het aantal ongelezen berichten bij kanalen in de kanalenlijst"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "GIF's/WebP moeten via een URL worden toegevoegd. Upload je GIF/WebP naar een afbeeldingshost en plak de link."
            },
            text: {
                save: "Opslaan",
                delete: "Verwijderen",
                customAvatar: "Aangepaste avatar",
                original: "Origineel",
                local: "Lokaal",
                enterPngGifUrl: "PNG/GIF-URL invoeren",
                setAvatar: "Avatar instellen",
                usingTheSetAvatar: "De functie avatar instellen is alleen lokaal, dus alleen jij ziet de wijziging.",
                joinUserpfpServer: "Word lid van de UserPFP-server",
                dropHere: "Hier neerzetten!",
                dragOrClick: "⬆ Sleep een afbeelding of klik om te uploaden (gebruik voor GIF's of WebP een URL)",
                uploadedFile: "(geüpload bestand)",
                supportHere: "Steun UserPFP hier"
            },
            option: {
                overrideServerAvatars: {
                    description: "Serveravatars overschrijven met aangepaste avatars of de standaardavatar als er geen aangepaste is ingesteld.",
                    label: "Serveravatars overschrijven"
                },
                preferNitro: {
                    description: "Welke avatar wordt gebruikt als zowel een standaard geanimeerde (Nitro) profielfoto als een UserPFP-avatar aanwezig is",
                    label: "Nitro verkiezen",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "URL waarvan de database wordt geladen",
                    label: "Databasebron"
                }
            },
            name: "UserPFP",
            description: "Hiermee kun je lokale statische of geanimeerde avatars instellen voor jezelf en andere gebruikers"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "Herstart om wijzigingen toe te passen!"
            },
            text: {
                installError: "Installatiefout",
                done: "Klaar!",
                later: "Later",
                updateError: "Updatefout",
                checkingForUpdates: "Controleren op updates...",
                loadingPlugins: "Plugins laden...",
                pluginUpdatesAvailable: "Plugin-updates beschikbaar",
                theFollowingPluginsAre: "De volgende plugins zijn verouderd:",
                youCanUpdatePlugins: "Je kunt de plugins hieronder bijwerken.",
                installPlugin: "Plugin installeren",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller niet volledig geladen",
                youNeedToRestart: "Je moet herstarten zodat het native deel kan laden :)",
                restartNow: "Nu herstarten",
                someUserpluginsAreOut: "Sommige UserPlugins zijn verouderd!",
                clickToOpenThe: "Klik om de UserPlugin-updater te openen",
                plexcordDoesNotModerate: "Plexcord modereert geen userplugins en is niet verantwoordelijk voor de gevolgen van het installeren ervan.",
                onlyInstallUserpluginsFrom: "Installeer alleen userplugins van ontwikkelaars die je vertrouwt. Dit is volledig op eigen risico.",
                setGitPath: "Git-pad instellen",
                installHint: "Je kunt een plugin van GitHub, GitLab, Codeberg, git.nin0.dev of plugins.nin0.dev installeren door hier de clone-URL te plakken.",
                enableAndRestart: "Inschakelen en herstarten",
                enableAndRefresh: "Inschakelen en vernieuwen",
                tabCounts: "({{total}}, {{enabled}} ingeschakeld)",
                possiblyMore: "en mogelijk meer, omdat het controleren op updates nog niet klaar is. ",
                alreadyInstalled: "Plugin is al geïnstalleerd, werk hieronder bij",
                invalidUrl: "Ongeldige URL, lees de melding hierboven",
                install: "Installeren",
                restart: "Herstarten",
                refresh: "Vernieuwen",
                update: "Bijwerken",
                source: "Bron",
                support: "Ondersteuning",
                managePlugins: "Plugins beheren",
                uninstalledRestart: "{{name}} is verwijderd. Een herstart is nodig om de plugin volledig te verwijderen.",
                uninstalledRefresh: "{{name}} is verwijderd. Vernieuwen is nodig om de plugin volledig te verwijderen.",
                updatedRestart: "{{name}} is bijgewerkt. Een herstart is nodig om de update toe te passen.",
                updatedRefresh: "{{name}} is bijgewerkt. Vernieuwen is nodig om de update toe te passen.",
                installedBody: "{{name}} is succesvol geïnstalleerd. Wat nu?",
                installedNativeBody: "{{name}} is succesvol geïnstalleerd. Omdat het native functies gebruikt, is een herstart van de client vereist. Wat nu?"
            },
            option: {
                allowlistedChannels: {
                    description: "Kommagescheiden lijst met kanalen waar de knop Plugin installeren wordt getoond. In de Plexcord-userpluginkanalen wordt hij altijd getoond",
                    label: "Toegestane kanalen"
                },
                notifyIfUpdate: {
                    description: "Een Plexcord-melding tonen als UserPlugins moeten worden bijgewerkt",
                    label: "Melden bij update"
                },
                neverNotifyForPlugins: {
                    description: "Nooit updatemeldingen tonen voor deze plugins (je kunt ze nog steeds bijwerken via het tabblad UserPlugins)",
                    label: "Nooit melden voor plugins"
                }
            },
            name: "UserpluginInstaller",
            description: "Installeer userplugins met één klik op een knop"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "Titel 1"
                },
                uncollapseSettingsByDefault: {
                    description: "Spraakinstellingen standaard automatisch uitklappen",
                    label: "Instellingen standaard uitklappen"
                },
                title2: {
                    label: "Titel 2"
                },
                outputVolume: {
                    description: "Een schuifregelaar voor uitvoervolume tonen",
                    label: "Uitvoervolume"
                },
                inputVolume: {
                    description: "Een schuifregelaar voor invoervolume tonen",
                    label: "Invoervolume"
                },
                outputDevice: {
                    description: "Een keuzelijst voor uitvoerapparaat tonen",
                    label: "Uitvoerapparaat"
                },
                inputDevice: {
                    description: "Een keuzelijst voor invoerapparaat tonen",
                    label: "Invoerapparaat"
                },
                camera: {
                    description: "Een camerakeuzelijst tonen",
                    label: "Camera"
                },
                title3: {
                    label: "Titel 3"
                },
                showOutputVolumeHeader: {
                    description: "Kop boven de schuifregelaar voor uitvoervolume tonen",
                    label: "Kop voor uitvoervolume tonen"
                },
                showInputVolumeHeader: {
                    description: "Kop boven de schuifregelaar voor invoervolume tonen",
                    label: "Kop voor invoervolume tonen"
                },
                showOutputDeviceHeader: {
                    description: "Kop boven de keuzelijst voor uitvoerapparaat tonen",
                    label: "Kop voor uitvoerapparaat tonen"
                },
                showInputDeviceHeader: {
                    description: "Kop boven de keuzelijst voor invoerapparaat tonen",
                    label: "Kop voor invoerapparaat tonen"
                },
                showVideoDeviceHeader: {
                    description: "Kop boven de camerakeuzelijst tonen",
                    label: "Kop voor videoapparaat tonen"
                }
            },
            name: "VCPanelSettings",
            description: "Bedien spraakinstellingen rechtstreeks vanuit het spraakpaneel",
            text: {
                appearance: "Weergave",
                settingsToShow: "Te tonen instellingen",
                headersToShow: "Te tonen koppen",
                outputVolume: "Uitvoervolume",
                inputVolume: "Invoervolume",
                outputDevice: "Uitvoerapparaat",
                inputDevice: "Invoerapparaat",
                settings: "Instellingen",
                hide: "Verbergen"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "Automatisch detecteren",
                start: "Starten",
                transcriptionOptions: "Transcriptieopties",
                audioLanguage: "Audiotaal",
                retry: "Opnieuw proberen",
                transcriptionFailed: "Transcriptie mislukt",
                transcribeVoiceMessage: "Spraakbericht transcriberen",
                close: "Sluiten",
                baseRecommended: "Base (aanbevolen)",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo (beste nauwkeurigheid, GPU aanbevolen)",
                transcribe: "Transcriberen",
                translateToEnglish: "Naar het Engels vertalen",
                voiceMessageTranslation: "Vertaling van spraakbericht",
                voiceMessageTranscription: "Transcriptie van spraakbericht",
                hideTimestamps: "Tijdstempels verbergen",
                showTimestamps: "Tijdstempels tonen",
                copied: "Gekopieerd!",
                copyText: "Tekst kopiëren",
                downloadingAudio: "Audio downloaden...",
                processingAudio: "Audio verwerken...",
                loadingModel: "Model laden...",
                transcribing: "Transcriberen...",
                transcription: "Transcriptie",
                transcriptionError: "Transcriptiefout",
                transcribingInProgress: "Transcriptie bezig...",
                initializing: "Initialiseren...",
                workerCrashed: "Transcriptie-worker is gecrasht",
                workerStopped: "Transcriptie-worker is gestopt",
                deleteCache: "Alle gecachte bestanden verwijderen ({{size}} MB)",
                action: "Actie"
            },
            name: "VoiceMessageTranscriber",
            description: "Transcripties van spraakberichten op het apparaat, aangedreven door Whisper",
            option: {
                embed: {
                    description: "Transcriptie rechtstreeks in de bijlage van het spraakbericht tonen in plaats van in een venster.",
                    label: "Embed"
                },
                maintainHorizontal: {
                    description: "Horizontale grootte van het ingesloten transcriptievak behouden en verticaal uitbreiden.",
                    label: "Horizontaal behouden"
                },
                selectedModel: {
                    description: "Modelgrootte.",
                    onnxcommunitywhispertiny: "Tiny (snelst, laagste nauwkeurigheid)"
                },
                useGpu: {
                    description: "Het model op je GPU (WebGPU) uitvoeren als dat wordt ondersteund. Veel sneller en maakt grotere modellen bruikbaar. Valt terug op de CPU indien niet beschikbaar.",
                    label: "GPU gebruiken"
                },
                quantized: {
                    description: "Gekwantiseerde modellen gebruiken op de CPU (kleiner, licht kwaliteitsverlies).",
                    label: "Gekwantiseerd"
                },
                deleteModalFiles: {
                    description: "Gecachte bestanden uit de opslag verwijderen.",
                    label: "Modelbestanden verwijderen"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "Laat spraakberichten doorspelen tussen chats met een gesynchroniseerde minispeler.",
            text: {
                voiceMessagesInBackground: "Achtergrondspeler voor spraakberichten",
                returnToChannelname: "Terug naar {{channelName}}",
                voiceMessagePosition: "Positie in spraakbericht",
                changePlaybackSpeed: "Afspeelsnelheid wijzigen",
                playbackSpeedSpeedTimes: "Afspeelsnelheid {{speed}} keer",
                closeVoiceMessagePlayer: "Speler voor spraakberichten sluiten",
                voiceMessage: "Spraakbericht",
                directMessage: "Privébericht",
                resume: "Spraakbericht hervatten",
                pause: "Spraakbericht pauzeren"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "Maakt Discord installeerbaar als app (PWA). Schakelt meldingsbadges, globale sneltoetsen en de eigen titelbalk van Discord in.",
            text: {
                activities: "Activiteiten",
                hopIn: "Doe mee",
                status: "Status",
                emojis: "Emoji's",
                rooms: "Ruimtes",
                discord: "Discord",
                platforms: "Platforms",
                keybindsInfoBefore: "Aangepaste globale Druk om X-sneltoetsen worden ondersteund. Ga naar",
                keybindsInfoAfter: "om ze te wijzigen. Houd ingedrukt voor X-sneltoetsen worden niet ondersteund."
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "Resolutie",
                    label: "Resolutie"
                },
                frameRate: {
                    description: "Framerate",
                    label: "Framerate"
                },
                contentHint: {
                    description: "Inhoudshint",
                    label: "Inhoudshint"
                },
                systemAudio: {
                    description: "Systeemgeluid dempen",
                    label: "Systeemgeluid"
                }
            },
            name: "WebScreenShare",
            description: "Voegt een menu met opties voor scherm delen toe. Hiermee wijzig je resolutie, framerate, coderingshints en systeemgeluid.",
            text: {
                stream: "Stream",
                streamMuted: "Stream gedempt",
                streamMode: "Streammodus",
                muteStreamAudio: "Streamgeluid dempen",
                preventsSystemAudioFrom: "Voorkomt dat systeemgeluid in je stream wordt opgenomen.",
                showStreamPreviews: "Streamvoorbeelden tonen",
                allowsOthersToSee: "Laat anderen een voorbeeld van je stream zien voordat ze meedoen.",
                smootherVideo: "Vloeiendere video",
                cleanerText: "Scherpere tekst",
                userPreset: "Gebruikersvoorinstelling",
                custom: "Aangepast",
                gaming: "Gaming",
                screenshare: "Scherm delen"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "Standaard Unicode-emoji's verbergen in automatisch aanvullen, tenzij ze op de witte lijst staan.",
                    label: "Standaardemoji's"
                },
                serverEmojis: {
                    description: "Aangepaste serveremoji's verbergen in automatisch aanvullen, tenzij ze op de witte lijst staan.",
                    label: "Serveremoji's"
                },
                disableToasts: {
                    description: "Geen meldingen tonen bij het toevoegen of verwijderen van emoji's.",
                    label: "Meldingen uitschakelen"
                },
                whiteListedEmojis: {
                    description: "Emoji's op witte lijst",
                    label: "Emoji's op witte lijst"
                },
                exportEmojis: {
                    description: "Emoji's exporteren",
                    label: "Emoji's exporteren"
                },
                importEmojis: {
                    description: "Emoji's importeren",
                    label: "Emoji's importeren"
                },
                resetEmojis: {
                    description: "Emoji's herstellen",
                    label: "Emoji's herstellen"
                }
            },
            name: "WhitelistedEmojis",
            description: "Hiermee kun je alle berichtemoji's uitschakelen, behalve een set op de witte lijst.",
            toast: {
                addedLengthEmojisTo: "{{length}} emoji's aan de lijst toegevoegd, {{length}} stonden er al in",
                removedLengthEmojisFrom: "{{length}} emoji's uit de lijst verwijderd",
                nameIsAlreadyIn: "\"{{name}}\" staat al in de lijst",
                addedNameToThe: "\"{{name}}\" aan de lijst toegevoegd",
                nameIsNotIn: "\"{{name}}\" staat niet in de lijst",
                removedNameFromThe: "\"{{name}}\" uit de lijst verwijderd",
                successfullyExportedEmojis: "Emoji's geëxporteerd",
                successfullyImportedEmojis: "Emoji's geïmporteerd",
                invalidJsonData: "Ongeldige JSON-gegevens",
                failedToImportEmojis: "Kan emoji's niet importeren: {{err}}",
                resetEmojis: "Emoji's hersteld"
            },
            text: {
                areYouSure: "Weet je het zeker?",
                thisWillOverwriteYour: "Dit overschrijft je huidige witte lijst.",
                import: "Importeren",
                cancel: "Annuleren",
                thisWillRemoveAll: "Dit verwijdert alle emoji's van je witte lijst.",
                reset: "Herstellen",
                addAllGuildEmojis: "Alle serveremoji's toevoegen",
                removeAllGuildEmojis: "Alle serveremoji's verwijderen",
                noEmojisInThe: "Geen emoji's op de witte lijst.",
                removeAll: "Alles verwijderen",
                removeFromWhitelist: "Van whitelist verwijderen",
                addToWhitelist: "Aan whitelist toevoegen",
                defaultEmojis: "Standaardemoji's",
                guildEmojis: "Emoji's van {{name}}",
                guildFallback: "Server {{id}}",
                whitelistedEmojis: "Emoji's op de whitelist",
                remove: "Verwijderen"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "Animatie-intensiteit in px",
                    label: "Intensiteit"
                }
            },
            name: "WigglyText",
            description: "Voegt een nieuwe markdown-opmaak toe waarmee tekst wiebelt.",
            text: {
                leftAndRight: "links en rechts",
                byTyping: "door te typen",
                upAndDown: "op en neer",
                inACircle: "in een cirkel",
                youCanMakeTextWiggle: "Zo kun je tekst laten wiebelen:"
            }
        },
        fixDiscordCss: {
            description: "Verhelpt de CSS-vertraging van Discord"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "Download bestanden rechtstreeks vanuit Discord in plaats van ze in de browser te openen"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "Kan repository's niet ophalen",
                personal: "Persoonlijk",
                unknown: "Onbekend",
                sortedByCount: "Gesorteerd op aantal repo's. Klik om A-Z te sorteren",
                sortedAlphabetically: "Gesorteerd A-Z. Klik om op aantal repo's te sorteren",
                mostRepos: "Meeste repo's"
            }
        }
    }
} as const;

export default translations;
