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
        title: "instellingen",
        language: {
            selector: {
                label: "Dil",
                description: "Selecteer uw voorkeurstaal voor Plexcord.",
                placeholder: "Selecteer Taal"
            }
        },
        location: {
            label: "Instellingen Locatie",
            description: "Plexcord bepaalt waar het instellingengedeelte moet worden geplaatst",
            top: "naar de top",
            nitro: {
                above: "Bovenop het nitrogedeelte",
                below: "onder de nitrosectie"
            },
            activity: {
                above: "Boven Evenementinstellingen",
                below: "Onder Evenementinstellingen"
            },
            bottom: "op de hoogte"
        },
        switches: {
            useQuickCss: {
                label: "Aangepaste CSS inschakelen",
                description: "Laad aangepaste CSS vanuit de QuickCSS-editor. Hiermee kun je het uiterlijk van Discord aanpassen met je eigen stijlen."
            },
            enableReactDevtools: {
                label: "Schakel React-ontwikkelaarstools in",
                description: "Schakel de React Developer Tools-extensie in om de React-componenten van Discord te debuggen. Handig voor het ontwikkelen van plug-ins."
            },
            mainWindowFrameless: {
                label: "Schakel het hoofdvensterframe uit",
                description: "Verwijder het plaatselijke raamkozijn voor een netter uiterlijk. U kunt het venster nog steeds verplaatsen door het titelbalkgebied te slepen."
            },
            frameless: {
                label: "Schakel raamkozijn uit",
                description: "Verwijder het plaatselijke raamkozijn voor een netter uiterlijk. U kunt het venster nog steeds verplaatsen door het titelbalkgebied te slepen."
            },
            winNativeTitleBar: {
                label: "Gebruik de eigen titelbalk van Windows in plaats van de aangepaste titelbalk van Discord",
                description: "Vervang de aangepaste titelbalk van Discord door de standaard Windows-titelbalk. Dit kan de compatibiliteit met sommige vensterbeheertools verbeteren."
            },
            transparent: {
                label: "Schakel venstertransparantie in",
                description: "Maak het Discord-venster transparant. Er is een thema nodig dat transparantie ondersteunt, anders levert het niets op.",
                isWindows: "Hierdoor wordt voorkomen dat het formaat van het venster wordt aangepast en wordt voorkomen dat u het venster vastklikt op de schermranden.",
                notWindows: "Dit voorkomt dat het venster wordt vergroot of verkleind."
            },
            winCtrlQ: {
                label: "Bewaar de sneltoets Ctrl+Q om Discord te sluiten (alternatief voor Alt+F4)",
                description: "Voeg Ctrl+Q toe als sneltoets om Discord te sluiten. Dit biedt een alternatief voor Alt+F4 om de applicatie snel te sluiten."
            },
            disableMinSize: {
                label: "Schakel de minimale venstergrootte uit",
                description: "Sta toe dat het Discord-venster kleiner wordt gemaakt dan de standaard minimumgrootte. Handig voor het betegelen van windowmanagers of kleine schermen."
            }
        },
        quickActions: {
            title: "Snelle transacties",
            description: "Algemene bewerkingen die u mogelijk vaak wilt gebruiken. Deze snelkoppelingen bieden snelle toegang tot veelgebruikte functies zonder door menu's te hoeven navigeren.",
            notificationLog: "Meldingslogboek",
            editQuickCSS: "QuickCSS-bewerking",
            relaunchDiscord: "Start Discord opnieuw",
            openSettingsFolder: "Open de map Instellingen",
            viewSourceCode: "Broncode bekijken"
        },
        specialCards: {
            donations: {
                title: "Donaties",
                subtitle: "Bedankt voor je donatie!",
                description: "U kunt uw privileges op elk moment beheren door een bericht te sturen naar @mutanplex.",
                button: "Donatie",
                invite: "Sluit je aan bij onze onenigheid",
                invalid: "Ongeldige of verlopen uitnodigingslink."
            },
            supportProject: {
                title: "Steun het project",
                description: "Overweeg alstublieft om de ontwikkeling van Plexcord te steunen door te doneren!"
            },
            contributions: {
                title: "Bijdragen",
                subtitle: "Bedankt voor je bijdrage!",
                description: "Je hebt nu een coole badge voor je bijdrage aan Plexcord!",
                buttonTitle: "Bekijk wat je hebt bijgedragen"
            }
        },
        settingsSection: {
            title: "Instellingen",
            description: "Configureer hoe Plexcord integreert en zich gedraagt ​​met Discord. Deze instellingen zijn van invloed op het uiterlijk en het gedrag van de Discord-client.",
            hintParts: {
                prefix: "Door de instellingen van {{pluginLink}} te configureren, kunt u aanpassen waar dit instellingengedeelte verschijnt in het Discord-instellingenmenu.",
                linkText: "Instellingen plug-in"
            }
        },
        notifications: {
            title: "Meldingen",
            description: "Configureer hoe Plexcord omgaat met meldingen. U kunt aanpassen wanneer en hoe u waarschuwingen ontvangt of een geschiedenis van eerdere meldingen bekijken.",
            settings: "Meldingsinstellingen",
            viewLog: "Bekijk de meldingsgeschiedenis",
            permissions: {
                denied: {
                    title: "Toestemming voor bureaubladmeldingen geweigerd",
                    label: "U heeft de meldingsrechten geweigerd. Bureaubladmeldingen werken niet!"
                }
            },
            style: {
                label: "Meldingsstijl",
                description: "Sommige plug-ins kunnen u meldingen tonen. Deze zijn er in twee stijlen:",
                plexcord: "Plexcord-meldingen",
                plexcordDesc: "Dit zijn in-app-meldingen",
                desktop: "Bureaubladmeldingen",
                desktopDesc: "Lokale bureaubladmeldingen (zoals wanneer u een ping ontvangt)",
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
                    top: "Rechtsboven"
                },
                left: {
                    bottom: "Links beneden",
                    top: "Linksboven"
                }
            },
            missed: {
                label: "Aantal gemiste meldingen",
                description: "Wanneer u zich opnieuw op Discord concentreert, verschijnt er een melding over eventuele meldingen die u hebt gemist.",
                whileYou: "terwijl je weg bent",
                count: "{{count}} meldingen{{s}} ontvangen",
                s: " "
            },
            timeout: {
                label: "Melding time-out",
                description: "Hoe lang meldingen op het scherm blijven voordat ze automatisch verdwijnen (in seconden)"
            },
            logLimit: {
                label: "Meldingsloglimiet",
                description: "Maximaal aantal meldingen dat in het meldingenlogboek moet worden opgeslagen. Stel in op {{disable}} om het loggen van meldingen uit te schakelen en stel in op {{unlimited}} om oude meldingen niet automatisch te verwijderen"
            },
            opacity: {
                label: "Dekking",
                description: "Dekking van in-app-meldingen"
            },
            maxNotifications: {
                label: "Maximale melding",
                description: "Maximaal aantal meldingen dat tegelijkertijd kan worden weergegeven"
            },
            behavior: {
                label: "Meldingsgedrag",
            },
            disableInStreamerMode: {
                label: "Uitschakelen in de Broadcaster-modus",
                description: "Schakel meldingen uit in de uitzendmodus"
            },
            renderImages: {
                label: "Afbeeldingen verwerken",
                description: "Render afbeeldingen in meldingen"
            },
            streamingTreatment: {
                label: "Gedrag van de omroepmodus",
                description: "Hoe u omgaat met meldingen bij het delen van uw scherm",
                normal: "Normaal - Melding normaal weergeven",
                noContent: "Geen inhoud - Meldingstekst verbergen",
                ignore: "Negeren – Toon helemaal geen melding"
            },
        },
        macVibrancy: {
            title: "Flikkerende vensterstijl (opnieuw opstarten vereist)",
            description: "Pas het macOS-vensterflikkereffect aan. Hiermee regelt u de stijl van vervaging en transparantie van het Discord-venster. Een herstart is vereist om de wijzigingen door te voeren.",
            placeholder: "Flikkerende vensterstijl",
            style: {
                no: "geen schudden",
                underPage: "Onderste pagina (ruiten tinten)",
                content: "Inhoud",
                window: "Raam",
                selection: "Stemmen",
                titlebar: "titelbalk",
                header: "Titel",
                sidebar: "zijbalk",
                tooltip: "gereedschapstip",
                menu: "menu",
                popover: "pop-upvenster",
                fullscreenUI: "Gebruikersinterface op volledig scherm (transparant maar enigszins saai)",
                hud: "HUD (meest transparant)"
            }
        }
    },

    plugins: {
        title: "Plug-ins",
        new: "Nieuw",
        unknown: "Onbekend",
        noDescription: "Beschrijving niet beschikbaar.",
        restart: {
            apply: "Start opnieuw om de wijzigingen toe te passen!",
            required: "Opnieuw opstarten vereist!",
            description: "Start nu opnieuw op om nieuwe plug-ins en instellingen toe te passen",
            following: "De volgende plug-ins vereisen een herstart:",
            fully: "Voor sommige plug-ins moet opnieuw worden opgestart om volledig te worden uitgeschakeld.",
            would: "Wilt u opnieuw opstarten?",
            remainingCount: "en nog {{count}} meer",
            resetDefault: "Terugzetten naar standaardinstellingen",
            failed: "Kan afhankelijkheden niet initialiseren:",
            button: {
                restart: "Opnieuw opstarten",
                later: "Dan!",
                now: "Start nu opnieuw op",
                cancel: "Annuleren",
                disableWarning: "Schakel waarschuwingen uit",
                disableAll: "Schakel alles uit",
                reset: "opnieuw instellen",
                close: "Kwartaal"
            }
        },
        contributor: {
            contributed: "bijgedragen",
            modal: {
                contributionsInfo: "{{userName}} {{contributionCount}} {{continuedLink}} door plug-in te ontwikkelen.",
                noContributions: "{{userName}} heeft nog geen plug-ins ontwikkeld. Hoogstwaarschijnlijk {{contributedLink}} op verschillende manieren!"
            }
        },
        infoModal: {
            description: "U kunt meer informatie over een plug-in krijgen door op het tandwiel- of informatiepictogram te drukken",
            settingsInfo: "Plug-ins met tandwielen hebben instellingen die u kunt wijzigen!",
            disableAll: "Schakel alle plug-ins uit"
        },
        error: {
            invalidInput: "Ongeldige invoer opgegeven",
            stopping: "Er is een probleem opgetreden bij het stoppen van de plug-in {{plugin}}",
            starting: "Er is een probleem opgetreden bij het initialiseren van de plug-in {{plugin}}",
            startDependency: "Er is een probleem opgetreden bij het initialiseren van afhankelijkheden: {{failures}}",
            infoRender: "Er is een fout opgetreden bij het weergeven van de aangepaste informatiecomponent van deze plug-in"
        },
        placeholder: {
            number: "Voer een nummer in",
            select: "Kies een optie",
            text: "Voer een waarde in"
        },
        excluded: {
            desktop: "Discord Desktop-app of Plextron",
            discordDesktop: "Discord Desktop-app",
            plextron: "Plextron-applicatie",
            web: "Plextron-app en webversie van Discord",
            dev: "Ontwikkelaarsversie van Plexcord"
        },
        search: {
            looking: "Is dit wat je zoekt",
            onlyAvailable: "Alleen hier verkrijgbaar ->",
            noCriteria: "Er zijn geen plug-ins gevonden die aan uw zoekcriteria voldoen"
        },
        required: {
            title: "Vereiste plug-ins",
            this: "Deze plug-in is vereist om Plexcord te laten werken.",
            by: "Deze plug-in is vereist om het volgende te laten werken:"
        },
        dangerModal: {
            title: "Gevaarlijke actie",
            disablePlugins: "Schakel plug-ins uit",
            disableText: "Schakel alles uit",
            irreversible: "DEZE ACTIE KAN NIET TERUGGEKEERD WORDEN!",
            enableBack: "Weet u absoluut zeker dat u wilt doorgaan? Je kunt het later opnieuw activeren.",
            undone: "Deze actie kan niet ongedaan worden gemaakt. Weet je het zeker?",
            resetDescription: "U staat op het punt de instellingen van de {{pluginName}}-plug-in terug te zetten naar hun standaardwaarden.",
            disable: "U staat op het punt om {{enabledPlugins}} plug-ins uit te schakelen!",
            confirmReset: "Bevestig en reset",
            cancel: "Annuleren",
            resetSettings: "Instellingen resetten",
            resetText: "opnieuw instellen"
        },
        filters: {
            label: "Filters",
            placeholder: "Zoeken naar plug-ins...",
            option: {
                all: "Alle",
                enabled: "Actief",
                disabled: "Gehandicapt",
                new: "nieuw",
                userplugins: "Gebruikersplug-ins",
                api: "API-plug-ins"
            }
        },
        pluginModal: {
            noSettings: "Deze plug-in heeft geen instellingen die u kunt wijzigen.",
            authors: "Auteurs",
            settings: "Instellingen",
            successfulReset: "De instellingen van de plug-in {{plugin}} zijn succesvol gereset.",
            enabledStock: "Actieve voorraad-add-ons",
            totalStock: "Totale voorraad-add-ons",
            enabledUser: "Actieve gebruikersplug-ins",
            totalUser: "Totaal aantal gebruikersadd-ons",
            info: "Bekijk meer informatie",
            source: "Bekijk de broncode"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API om decorateurs toe te voegen aan de ledenlijst (zowel op servers als DM's)",
                    messageAccessories: "API voor het toevoegen van rekwisieten aan berichten",
                    messageDecorations: "API om decorateurs aan berichten toe te voegen",
                    chatInputButtons: "API om een ​​knop toe te voegen aan chatinvoer",
                    commands: "API nodig voor alles dat opdrachten gebruikt",
                    contextMenu: "API om items toe te voegen/verwijderen uit het contextmenu",
                    dynamicImageModal: "Hiermee kunt u de breedte of hoogte overslaan bij het openen van het afbeeldingsmodal",
                    menuItemDemangler: "Maakt Discord-menu-item leesbaarder",
                    messageEvents: "API nodig voor alles dat berichtgebeurtenissen gebruikt",
                    messagePopover: "API om knop toe te voegen aan berichtpop-up",
                    messageUpdater: "API voor het bijwerken en opnieuw verwerken van berichten",
                    nicknameIcons: "API om pictogrammen toe te voegen aan gebruikersnamen in profielen",
                    notices: "Oplossing voor het automatisch negeren van meldingen",
                    serverList: "API vereist voor plug-ins die de serverlijst wijzigen",
                    userSettings: "Patches om de gebruikersinstellingen, groepen en namen van Discord te onthullen",
                    audioPlayer: "API voor het afspelen van de interne audiobestanden of externe audiolinks van Discord.",
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
                    plexcord: "Plexcord-deelnemer",
                    vencord: "Vencord-deelnemer",
                    userPlugin: "Bijdrager van gebruikersplugin"
                },
                context: {
                    title: "Badge-opties",
                    copy: {
                        name: "Kopieer badgenaam",
                        link: "Kopieer de afbeeldingslink van de badge"
                    },
                    refetch: {
                        button: "Badges vernieuwen",
                        success: "Badges zijn succesvol vernieuwd!"
                    }
                },
                modal: {
                    title: "Plexcord-supporter",
                    special: "Deze badge is een speciaal voorrecht voor Plexcord-donateurs.",
                    description: "Overweeg alstublieft om de ontwikkeling van Plexcord te steunen door donateur te worden. Dit zou voor ons zeer waardevol zijn!!"
                }
            }
        },
        uiElements: {
            manage: "Beheer UI-elementen",
            allows: "Hiermee kunt u knoppen verbergen die u niet bevallen",
            section: {
                chatbar: {
                    title: "Chatbalkknoppen",
                    description: "Dit zijn de knoppen aan de rechterkant van de chatinvoerbalk"
                },
                messagePopover: {
                    title: "Pop-upknoppen voor berichten",
                    description: "Dit zijn zwevende knoppen die aan de rechterkant verschijnen als u met de muis over een bericht beweegt"
                }
            },
            button: "Hier verschijnen knoppen voor geactiveerde plug-ins."
        }
    },

    patchHelper: {
        title: "Patch-assistent",
        description: "Een ontwikkelaarstool waarmee u patches voor Plexcord-plug-ins kunt maken.",
        fullPatch: {
            label: "Tam Yama",
            description: "Plak hier uw volledige JSON-patch om de velden in te vullen"
        },
        find: "Bul",
        match: "overeenkomst",
        replacement: "Wijziging",
        preview: "Voorbeeld",
        generatedCode: "Gegenereerde code",
        group: "Groep",
        diff: "Verschil",
        module: "Module",
        compile: "Derle",
        compiled: "Compilatie succesvol",
        copy: {
            clipboard: "Kopiëren naar Klembord",
            codeblock: "Kopieer als codeblok"
        },
        error: {
            noMatch: "Geen overeenkomst gevonden. Misschien is die module lui aan het laden.",
            multipleMatch: "Er is meer dan één overeenkomst gevonden. Gebruik een specifieker zoekpatroon.",
            noFind: "Er is geen 'vind'-veld.",
            noReplacement: "Er is geen veld 'Wijzigen'.",
            invalidReplacement: "Vervangveld is ongeldig",
            replacementMatch: "Het veld 'replacement.match' bestaat niet",
            replacementReplace: "Het veld 'replacement.replace' bestaat niet",
            replacementMustFunction: "Vervanging moet een functie zijn"
        },
        cheatSheet: {
            title: "Spiekbriefje",
            identifiers: "Aangepaste regex-escape-reeks die overeenkomt met ID's (variabelenamen, klassennamen, enz.)",
            dollar: "voegt $ toe",
            entireMatch: "Voegt alle overeenkomsten toe",
            beforeMatch: "Voegt de subtekenreeks toe vóór de overeenkomst",
            afterMatch: "Voegt de subtekenreeks toe na de overeenkomst",
            nthGroup: "Voegt de zoveelste capture-groep toe ($1, $2...)",
            pluginInstance: "Voegt plug-ininstantie toe"
        },
        replacementEval: {
            label: "Procesvervanging als functie",
            description: "'Vervanging' wordt behandeld als een functie wanneer dit is ingeschakeld."
        }
    },

    sync: {
        title: "Back-up en herstel",
        warning: "Waarschuwing",
        warningText: "Als u een instellingenbestand importeert, worden uw huidige instellingen overschreven. Als u uw huidige configuratie wilt behouden, zorg er dan voor dat u eerst een back-up exporteert.",
        description: "U kunt uw Plexcord-instellingen importeren en exporteren als JSON-bestand. Zo verplaats je eenvoudig je instellingen naar een ander apparaat of herstel je je instellingen na het opnieuw installeren van Plexcord of Discord.",
        successful: "De instellingen zijn succesvol geïmporteerd. Start de app opnieuw om de wijzigingen door te voeren!",
        error: {
            failure: "Importeren van instellingen mislukt: {{error}}",
            failedExport: "Het exporteren van instellingen is mislukt. Controleer de console",
            invalid: "Ongeldige instellingen. Is dit echt een Plexcord Tuning-bestand?",
            tooLarge: "DataStore is te groot - uitgesloten van back-up. Gebruik indien nodig de functie 'Datastores exporteren'.",
            clearSomeDate: "DataStore is enorm. Wis enkele plug-ingegevens en probeer het opnieuw."
        },
        settings: {
            text: "Wat zit er in de back-up?",
            quickcss: "Aangepaste QuickCSS",
            theme: "Themalinks",
            plugins: "Plug-in-instellingen",
            datastores: "Add-on-opslagplaatsen (bijv. Tijdzones of IRememberYou)"
        },
        import: {
            title: "Instellingen importeren",
            description: "Selecteer een eerder geëxporteerd instellingenbestand om uw configuratie te herstellen. Hiermee worden al uw huidige instellingen vervangen door die uit de back-up.",
            all: "Importeer alle instellingen",
            plugins: "Eklentiyi Iche Aktar",
            css: "QuickCSS'yi İçe Meer",
            datastore: "Gegevensarchieven importeren"
        },
        export: {
            title: "Instellingen exporteren",
            description: "U kunt uw huidige Plexcord-instellingen exporteren naar een bestand voor back-up of overdracht naar een ander apparaat.",
            all: "Exporteer alle instellingen",
            plugins: "Plug-in exporteren",
            css: "Exporteer QuickCSS",
            datastore: "Datastores exporteren"
        }
    },

    cloud: {
        text: "Wolk",
        title: "Instellingen Synchronisatie",
        override: "Cloudsynchronisatie",
        description: "Synchroniseer uw Plexcord-instellingen met de cloud. Hierdoor kunt u uw configuratie consistent behouden op meerdere apparaten zonder handmatig importeren/exporteren.",
        switchDescription: "Eenmaal ingeschakeld, worden uw instellingen gesynchroniseerd met de cloud. U kunt handmatig synchroniseren met behulp van de volgende acties.",
        settings: "Cloud-instellingen",
        successful: "Uw instellingen zijn succesvol gesynchroniseerd met de cloud.",
        updated: "Je instellingen zijn bijgewerkt! Klik hier om opnieuw op te starten zodat de wijzigingen volledig van kracht worden!",
        deleted: "Instellingen verwijderd uit de cloud!",
        integration: {
            title: "Cloud-integratie",
            description: "Met de cloudintegratie van Plexcord kunt u uw instellingen synchroniseren tussen meerdere apparaten en Discord-installaties. Uw gegevens worden veilig opgeslagen en kunnen op elk moment eenvoudig worden hersteld.",
        },
        reauth: "We merkten dat bij een andere klant cloudintegraties waren ingeschakeld! Vanwege beperkingen moet u zich opnieuw authenticeren om door te gaan. Klik hier om naar de instellingenpagina te gaan om verder te gaan!",
        error: {
            setup: "Installatie mislukt (kan OAuth-configuratie niet ophalen).",
            secret: "Installatie mislukt (er is geen geheime sleutel geretourneerd).",
            string: "Installatie mislukt ({{error}}).",
            connect: "Cloudsynchronisatie is uitgeschakeld omdat dit account niet is verbonden met de Plexcord Cloud-app. U kunt dit account opnieuw inschakelen door het te koppelen in Cloudinstellingen. (let op: slaat uw voorkeuren apart op)",
            noSettings: "Geen instellingen gevonden in de cloud.",
            uptodate: "Uw instellingen zijn up-to-date.",
            localNewer: "Uw lokale instellingen zijn nieuwer dan de cloudinstellingen.",
            delete: "Kan instellingen niet verwijderen ({{error}}).",
            api: {
                returned: {
                    delete: "Kan de instellingen niet verwijderen (API retourneert {{status}}).",
                    to: "Kan de instellingen niet synchroniseren met de cloud (API retourneert {{status}}).",
                    from: "Kan instellingen vanuit de cloud niet synchroniseren (API retourneert {{status}})."
                }
            },
            synchronize: {
                to: "Instellingen kunnen niet worden gesynchroniseerd met de cloud ({{error}}).",
                from: "Instellingen kunnen niet vanuit de cloud worden gesynchroniseerd ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Om de synchronisatiefuncties van instellingen te gebruiken, schakelt u hierboven cloudintegratie in."
        },
        danger: {
            title: "Gevarenzone",
            description: "Verwijder definitief al uw gegevens in de cloud. Deze actie is onomkeerbaar en verwijdert alle gesynchroniseerde instellingen en alle andere gegevens die zijn opgeslagen in de cloudinfrastructuur.",
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
            host: "Het domein {{host}} is toegevoegd aan de toestemmingslijst. Start de toepassing opnieuw om de wijzigingen door te voeren.",
            erase: {
                successful: "Cloudgegevens zijn succesvol verwijderd",
                failed: "Het is niet gelukt om alle gegevens te verwijderen (API retourneert {{status}}). Neem contact op met de ondersteuning."
            }
        },
        button: {
            to: "Synchroniseren met de cloud",
            from: "Synchroniseren vanuit de cloud",
            fromDescription: "Hierdoor worden uw huidige instellingen overschreven met die uit de cloud. Gebruik het verstandig!",
            delete: "Cloudgegevens verwijderen",
            enable: "Activeer cloudintegraties",
            reauthorize: "Opnieuw autoriseren",
            confirm: "Start nu opnieuw op",
            later: "Dan!"
        },
        privacy: "beschermt uw privacy",
        source: "broncode",
        overview: "Plexcord wordt geleverd met cloudintegratie en biedt voordelen zoals het synchroniseren van instellingen op verschillende apparaten. Omdat deze {{privacy}} en {{source}} worden aangeboden met een AGPL 3.0-licentie, kunt u ze op uw eigen server hosten.",
        authorization: "Maak verbinding met de cloud om instellingen te synchroniseren. Als u de cloudintegratie nog niet heeft ingesteld, wordt er om autorisatie gevraagd.",
        backend: {
            title: "Cloudaanbieder",
            description: "Kies hoe uw instellingen in de cloud worden opgeslagen. Standaard wordt Plexcord Cloud gebruikt, maar u kunt desgewenst ook uw eigen, zelfgehoste cloudservice configureren.",
            invalid: "Ongeldige URL"
        },
        sync: {
            title: "Synchronisatieregels voor dit apparaat",
            description: "Deze instelling bepaalt hoe instellingen worden gesynchroniseerd tussen dit apparaat en de cloud. U kunt toestaan ​​dat wijzigingen in beide richtingen worden overgedragen of u kunt één zijde als hoofdbron selecteren.",
            direction: {
                both: "Bidirectionele synchronisatie (wijzigingen worden in beide richtingen overgedragen)",
                push: "Dit apparaat is de bron (alleen uploaden)",
                pull: "Cloudbron (alleen downloaden)",
                manual: "Automatische synchronisatie (handmatige synchronisatie alleen met onderstaande knoppen)"
            }
        }
    },

    changelog: {
        text: "Wijzig notities",
        title: "Wijzig notities",
        description: "De laatste wijzigingen en updates voor Plexcord vindt u hier.",
        by: "schrijver",
        check: "Magazijn controleren",
        uptodate: "huidig",
        update: "Update",
        noMessage: "geen bericht",
        unknown: "onbekend",
        updatedPlugins: "Bijgewerkte plug-ins",
        newSettings: "Nieuwe instellingen",
        newSettingTooltip: "Nieuwe instelling voor {{plugin}}",
        loading: "Laden...",
        repoUptodate: "Magazijn up-to-date",
        fetch: "Meenemen uit magazijn",
        clear: "Wis alle notities",
        internet: "Zorg ervoor dat je een internetverbinding hebt en probeer het opnieuw.",
        recent: "Recente wijzigingen",
        codeChanges: "Codewijzigingen {{count}} nieuwe commit",
        updateLogs: "{{count}} Update-opmerking",
        noCommit: "Er zijn geen forward commits gevonden voor uw huidige versie. Klik op 'Ophalen uit Repository' om te controleren op nieuwe wijzigingen.",
        previous: "Samen met eerdere updatesessies, commitgeschiedenis en plug-inwijzigingen.",
        modal: {
            description: "Bekijk de laatste wijzigingen in Plexcord. Dit proces laat je zien wat er nieuw is door commits rechtstreeks uit de repository op te halen.",
            repository: "Depo",
            failed: "Kan niet ontvangen - controleer de console",
            current: "Beschikbaar:",
            hide: "notities verbergen",
            show: "Toon notities",
            fetch: {
                title: "Breng veranderingen",
                description: "Controleer op nieuwe commits, plugin-updates en codewijzigingen in de repository. Hiermee wordt uw huidige versie vergeleken met de nieuwste versie en wordt weergegeven wat er nieuw is.",
                newCommit: "Dit zijn nieuwe commits en plugin-updates sinds je laatste release. U kunt zien welke functies zijn toegevoegd, welke bugs zijn opgelost en welke plug-ins zijn bijgewerkt.",
                confirm: "Kan",
            }
        },
        commit: {
            available: "verplichting beschikbaar",
            no: "Geen nieuwe verplichtingen",
            new: "nieuwe plug-ins",
            updated: "bijgewerkte plug-ins",
            settings: "nieuwe instellingen"
        },
        toast: {
            already: "De repository is al up-to-date",
            found: "{{count}} nieuwe commits gevonden uit de repository",
            local: "De repository is up-to-date met uw lokale kopie",
            failed: "Kon het niet uit het magazijn halen :(",
            cleared: "Alle notities gewist",
            logCleared: "Opmerking gewist",
            yourLatest: "Vastleggingen opgeslagen vanaf uw laatste update"
        },
        alert: {
            clear: {
                title: "Wis alle notities",
                body: "Weet u zeker dat u alle notities wilt wissen? Deze actie kan niet ongedaan worden gemaakt.",
                confirm: "Alles wissen",
                confirmColor: "Gevaar",
                cancel: "Annuleren"
            },
            log: {
                title: "Logboek wissen",
                body: "Weet u zeker dat u dit logboek wilt wissen? Deze actie kan niet ongedaan worden gemaakt.",
                confirm: "Logboek wissen",
                confirmColor: "Gevaar",
                cancel: "Annuleren"
            }
        },
        newPlugins: "{{count}} Nieuwe plug-in",
        following: "De volgende plug-ins zijn toegevoegd in recente updates:",
        more: "+{{count}} nieuwe plug-ins"
    },

    csp: {
        restart: "Om deze wijziging door te voeren is opnieuw opstarten vereist",
        blocked: {
            resources: "Geblokkeerde bronnen",
            disallowed: "Sommige afbeeldingen, stijlen of lettertypen zijn geblokkeerd omdat ze afkomstig zijn van niet-geautoriseerde domeinen.",
            recommended: "Het wordt ten zeerste aanbevolen om ze naar GitHub of Imgur te verplaatsen. U kunt echter ook domeinen toestaan ​​als u ze volledig vertrouwt.",
            afterAllow: "Nadat u toestemming heeft verleend aan een ruimte, moet u {{platform}} volledig afsluiten en opnieuw opstarten (via het systeemvak/taakbeheer) om de wijziging toe te passen.",
            allow: "Toestaan",
            url: "Geblokkeerde URL's"
        },
        imgur: {
            direct: "Imgur-links moeten directe links zijn in de indeling {{etc}}.",
            copy: "Om een ​​directe link te krijgen, klikt u met de rechtermuisknop op de afbeelding en selecteert u 'Afbeeldingsadres kopiëren'."
        },
        wants: {
            caller: "{{callerName}} wil verbindingen met {{domain}} toestaan",
            detail: "Als u {{domain}} niet herkent en volledig vertrouwt, moet u dit verzoek annuleren!",
            restart: "U moet {{appName}} volledig afsluiten en opnieuw opstarten om de wijzigingen door te voeren.",
            type: {
                images: "foto's",
                styles: "CSS en thema's",
                fonts: "Lettertypen"
            },
            content: "De volgende typen inhoud mogen worden geüpload vanaf {{domain}}:",
            understand: "Ik vertrouw {{domain}} volledig en begrijp de risico's van het toestaan ​​van links.",
            button: {
                cancel: "Annuleren",
                allow: "Toestaan"
            },
            title: "Domeinnaamrechten"
        }
    },

    themes: {
        title: "Thema's",
        management: "Themabeheer",
        description: "Pas het uiterlijk van Discord aan met thema's. Voeg lokale CSS-bestanden toe of installeer thema's rechtstreeks vanaf URL's. Thema's met een tandwielpictogram hebben aanpasbare instellingen die u kunt wijzigen.",
        local: "Lokale thema's",
        new: "NIEUW",
        pinned: "vastgezet",
        stylus: "Stylus-verlenging",
        bd: "BetterDiscord-thema's",
        github: "Github",
        download: "Bent u op zoek naar een thema? Bekijk {{bd}} of zoek op {{github}}. Wanneer u downloadt van BetterDiscord, klikt u op de knop \"Downloaden\" en plaatst u het .theme.css-bestand in uw themamap.",
        add: "Toevoegen",
        reset: "Instellingen terugzetten naar standaard",
        notCSS: "Het is geen CSS-bestand. Zorg ervoor dat je de onbewerkte link gebruikt!",
        okay: "Oké!",
        checking: "Wordt gecontroleerd...",
        valid: "Geldig!",
        upload: "Thema uploaden",
        openFolder: "Themamap openen",
        loadMissing: "Installeer ontbrekende thema's",
        editQuickCSS: "Bewerk QuickCSS",
        editClient: "Klantthema bewerken",
        website: "Website openen",
        discord: "Discord-server",
        downloadTheme: "Downloaden",
        refresh: "Vernieuwen",
        delete: "Sil",
        unknown: {
            title: "onbekend",
            author: "Onbekende auteur",
            theme: "Onenigheid Thema"
        },
        required: "De volgende plug-ins zijn vereist maar niet actief:",
        homepage: "Startpagina",
        support: "Steun",
        online: {
            title: "Online-thema's",
            description: "Installeer thema's rechtstreeks vanaf URL's in plaats van lokale bestanden. Online thema’s worden automatisch bijgewerkt als de bron verandert; zodat je altijd de nieuwste versie hebt zonder handmatig downloaden.",
            enable: "Online thema's inschakelen",
            enableDescription: "Schakel online thema-upload in. Indien uitgeschakeld, worden alle online thema's uitgeschakeld en kunt u geen nieuwe online thema's toevoegen."
        },
        quickActions: {
            title: "Snelle transacties",
            description: "Snelkoppelingen om uw thema's te beheren. Open de themamap om nieuwe thema's toe te voegen, gebruik QuickCSS voor snelle stijlbewerkingen of laad thema's opnieuw na wijzigingen."
        },
        error: {
            userscript: "Thema's op Userscript worden niet ondersteund!",
            stylus: "Je kunt in plaats daarvan thema's installeren met {{stylus}}!",
            expired: "Ongeldige of verlopen link",
            text: "Zelfs:"
        },
        copy: {
            url: "Kopieer URL",
            copied: "Thema-URL gekopieerd!",
            settings: "Kopieer thema-instellingen",
            copiedSettings: "Thema-instellingen zijn naar het klembord gekopieerd."
        },
        paste: {
            settings: "Thema-instellingen plakken",
            empty: "Je klembord is leeg.",
            invalid: "Er staan ​​geen geldige instellingengegevens op uw klembord.",
            pasted: "Thema-instellingen zijn vanaf het klembord geplakt."
        },
        settings: {
            for: "Instellingen voor {{themeName}}",
        },
        installed: {
            title: "Geïnstalleerde thema's",
            description: "Beheer hier uw thema's. Lokale thema's worden geladen vanuit uw themamap, online thema's worden geladen vanuit URL's. Thema's met een tandwielpictogram hebben aanpasbare instellingen.",
            count: "{{count}} thema's geïnstalleerd ({{localCount}} lokaal, {{onlineCount}} online) {{enabledCount}} ingeschakeld",
            search: "Thema zelfs...",
            loading: "Thema's worden geladen...",
            none: "Er zijn nog geen thema's geïnstalleerd. Voeg om te beginnen de themabestanden toe aan uw themamap of voeg hierboven een online thema toe.",
            noCriteria: "Er zijn geen thema's gevonden die overeenkomen met uw zoek- of filtercriteria."
        },
        filter: {
            all: "Toon alles",
            online: "Online-thema's",
            local: "Lokale thema's",
            enabled: "Effectief",
            disabled: "Gehandicapt"
        },
        notification: {
            refresh: {
                title: "Thema vernieuwd",
                error: "Thema kan niet worden vernieuwd"
            },
            failed: {
                download: "Indirilemedi-thema"
            }
        }
    },

    updater: {
        title: "Updater",
        settings: "Updater-instellingen",
        updates: "Updates",
        updated: "bijgewerkt!",
        restart: "Start opnieuw door hier te klikken",
        repaired: "Plexkoord gerepareerd!",
        ok: "OK",
        preferences: {
            title: "Voorkeuren bijwerken",
            description: "Bekijk hoe Plexcord zichzelf up-to-date houdt. U kunt ervoor kiezen om automatisch op de achtergrond te updaten of meldingen te ontvangen wanneer er nieuwe updates beschikbaar zijn.",
        },
        github: {
            local: "Uw lokale kopie heeft nieuwere records dan de externe opslagplaats. Dit gebeurt meestal wanneer u lokale wijzigingen aanbrengt. Bewaar ze of reset ze voordat u de update uitvoert."
        },
        error: {
            check: "Er is een probleem opgetreden bij het zoeken naar een update. Zie console voor meer informatie.",
            occurred: "Er is een fout opgetreden",
            retrieve: "Er is een probleem opgetreden bij het ophalen van update-informatie - Controleer Console",
            title: "Neeee!",
            tryAgain: "Er is een fout opgetreden. Probeer het opnieuw of ga naar de console voor meer informatie.",
            command: "{{path}} opdracht niet gevonden. Download dit of probeer het opnieuw.",
            code: "Codeer {{code}}. Zie console voor meer informatie.",
            running: "Er is een probleem opgetreden bij het uitvoeren van {{cmd}}: {{error}}",
            failed: "Ook dit mislukte :( Probeer de update uit te voeren of opnieuw te installeren met het installatieprogramma!"
        },
        available: "1 update beschikbaar",
        updateAvailable: "Plexcord-update beschikbaar!",
        click: "Klik hier om de update te bekijken",
        available_plural: "{{count}} updates beschikbaar",
        current: "Huidig!",
        successful: {
            title: "Update succesvol!",
            body: "Succesvol bijgewerkt. Start opnieuw om de wijzigingen op te slaan!",
            button: {
                confirm: "Opnieuw opstarten",
                cancel: "Niet nu!",
                update: "Nu bijwerken",
                check: "Controleer op updates"
            },
            noFound: "Geen update gevonden"
        },
        automatically: {
            label: "Automatische update",
            description: "Plexcord downloadt en installeert automatisch updates zonder bevestiging"
        },
        notify: {
            label: "Toon automatische updatemelding",
            description: "Toon een melding wanneer Plexcord automatisch wordt bijgewerkt"
        },
        repo: "Depo",
        repoDescription: "Dit is de GitHub-repository waar Plexcord updates ontvangt.",
        loading: "Laden...",
    },

    components: {
        error: {
            title: "O nee!",
            render: "Er is een fout opgetreden bij het renderen van dit onderdeel. Meer informatie vindt u hieronder en op uw console."
        },
        componentFailed: {
            message: "Ah! Deze pagina kon niet worden weergegeven. Er is echter een update beschikbaar die dit mogelijk oplost. Wilt u nu updaten en opnieuw opstarten?"
        },
        quickCSS: {
            title: "Open de QuickCSS-editor",
            message: "De QuickCSS-editor is nog steeds geopend op de achtergrond.",
            detail: "Wil je Discord toch sluiten? Hiermee wordt ook de QuickCSS-editor gesloten.",
            cancel: "Annuleren",
            close: "Hoe dan ook sluiten"
        }
    },

    commands: {
        error: {
            execute: "Er is een fout opgetreden tijdens het uitvoeren van opdracht '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Melding sluiten",
        noYet: "Nog geen meldingen",
        settings: "Meldingsinstellingen",
        log: {
            title: "Meldingslogboek",
            clear: "Meldingslogboek wissen",
            sure: "Weet je het zeker?",
            permamently: "{{count}} meldingen worden permanent verwijderd. Deze actie kan niet ongedaan worden gemaakt.",
            button: {
                confirm: "OK",
                cancel: "Annuleren"
            }
        }
    },

    memberlist: {
        error: {
            render: "Er is een fout opgetreden bij het weergeven van de {{key}} Member List Decorator"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Er is een fout opgetreden bij het weergeven van het berichtaccessoire {{key}}"
            }
        },
        decoration: {
            error: {
                render: "Er is een fout opgetreden bij het weergeven van {{key}} Berichtdecoratie"
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
            month: "is",
            months: "is",
            week: "week",
            weeks: "week",
            day: "dag",
            days: "dag",
            hour: "moment",
            hours: "moment",
            minute: "notulen",
            minutes: "notulen",
            second: "seconde",
            seconds: "seconde",
            ago: "voor",
            s: " "
        }
    },

    plugin: {
        noTrack: {
            name: "Geen Track",
            description: "Schakelt het volgen van Discord (analyse/'wetenschap'), statistieken en Sentry-crashrapportage uit",
            option: {
                disableAnalytics: {
                    label: "Analyse sluiten",
                    description: "Schakel de trackingstatistieken (analyse/'wetenschap') van Discord en de Sentry-crashrapportage uit"
                }
            }
        },
        settings: {
            name: "Instellingen",
            description: "Voegt instellingeninterface en foutopsporingsinformatie toe",
            option: {
                language: {
                    label: "Dil",
                    description: "Selecteer uw voorkeurstaal voor Plexcord."
                },
                settingsLocation: {
                    label: "Instellingen Locatie",
                    description: "Plexcord bepaalt waar het instellingengedeelte moet worden geplaatst"
                }
            }
        },
        supportHelper: {
            name: "Ondersteuning assistent",
            description: "Helpt ons u ondersteuning te bieden",
            commands: {
                description: {
                    debug: "Stuur Plexcord-foutopsporingsinformatie",
                    plugins: "Lijst met Plexcord-plug-ins verzenden"
                }
            },
            modals: {
                outdated: {
                    title: "Wachten!",
                    body: "Je gebruikt een oude versie van Plexcord! Waarschijnlijk zijn uw problemen al opgelost.",
                    footer: "Update eerst voordat u om ondersteuning vraagt!",
                    button: {
                        cancel: "Zie Updates",
                        confirm: "Update en start nu opnieuw",
                        secondaryConfirm: "Ik weet wat ik doe, anders kan ik niet updaten"
                    }
                },
                updater: {
                    title: "Wachten!",
                    body: "Je gebruikt een extern bijgewerkte versie van Plexcord, wij bieden geen ondersteuning voor deze versie!",
                    footer: "Neem {{officieel}} contact op met uw pakketaanbieder voor ondersteuning.",
                    officially: "officieel ondersteunde versie van Plexcord",
                    button: {
                        cancel: "Annuleren",
                        confirm: "Bekijk de downloadpagina",
                        now: "Nu bijwerken"
                    },
                    toast: {
                        success: "Succesvol! Opnieuw opstarten...",
                        already: "Al up-to-date!",
                        failed: "Update mislukt :("
                    }
                },
                custom: {
                    title: "Wachten!",
                    header: "Je gebruikt een eigen versie van Plexcord, wij bieden geen ondersteuning voor deze versie!",
                    body: "We bieden alleen ondersteuning voor {{officialBuild}}. {{switch}} of los het probleem zelf op.",
                    footer: "Als u deze regel negeert, wordt uw recht op ondersteuning ingetrokken.",
                    official: "officiële releases",
                    switch: "upgrade naar een officiële versie",
                    button: {
                        confirm: "Ik begrijp",
                        secondaryConfirm: "Laat het niet meer zien"
                    }
                }
            },
            button: {
                debug: "voer /plexcord-debug uit",
                plugins: "voer /plexcord-plug-ins uit",
                snippet: "Codefragment uitvoeren"
            },
            toast: {
                success: "Succesvol!",
                failed: "Kan codefragment niet uitvoeren :(",
                failedOpenInvite: "Kan de uitnodiging niet openen. Controleer de console :(",
                upload: "Plug-inlijst succesvol geladen!",
                failedUpload: "Het plug-inlijstbestand kan niet worden geladen. Probeer het opnieuw.",
                unableGenerate: "Kan plug-inlijst niet maken."
            },
            dm: {
                warning: "Stuur alstublieft geen privéberichten naar ontwikkelaars van Plexcord-plug-ins voor ondersteuning!{{br}}In plaats daarvan kunt u het Plexcord-ondersteuningskanaal gebruiken door lid te worden van de {{support}}-server: {{channel}}"
            },
            alert: {
                title: "Waarschuwing: te veel plug-ins",
                paragraph1: "We merkten dat er meer dan 100 plug-ins waren geactiveerd.",
                paragraph2: "Het kan zijn dat u geen ondersteuning ontvangt vanwege het aantal plug-ins.",
                paragraph3: "Uw probleem wordt waarschijnlijk veroorzaakt door plug-inconflicten.",
                paragraph4: "Overweeg enkele plug-ins uit te schakelen om het probleem op te lossen.",
                paragraph5: "Uw plug-inlijst wordt als tekstbestand verzonden.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfiel",
            description: "Klik met de linkermuisknop op uw accountpaneel en klik met de rechtermuisknop om uw serverprofiel te bekijken",
            option: {
                prioritizeServerProfile: {
                    label: "Geef prioriteit aan het serverprofiel",
                    description: "Geef prioriteit aan het serverprofiel wanneer u met de linkermuisknop op uw accountpaneel klikt"
                }
            },
            context: {
                account: "Accountprofiel tonen",
                server: "Serverprofiel tonen",
                prioritize: "Geef prioriteit aan het serverprofiel"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Zorgt ervoor dat de pop-up voor ruisonderdrukking schakelt tussen Geen en Krisp in plaats van Krisp en Standaard."
        },
        alwaysAnimate: {
            name: "AltijdAnimatie",
            description: "Het animeert alles wat geanimeerd kan worden.",
            option: {
                icons: {
                    label: "pictogrammen",
                    description: "Animeer serverpictogrammen, avatars, decoraties en meer op elk gewenst moment."
                },
                statusEmojis: {
                    label: "Status-emoji's",
                    description: "Maak status-emoji's altijd levendiger."
                },
                serverBanners: {
                    label: "Serverbanners",
                    description: "Zorg altijd voor animatie van serverbanners."
                },
                nameplates: {
                    label: "Naamplaten",
                    description: "Animeer naamplaatjes altijd."
                },
                roleGradients: {
                    label: "Rolovergangen",
                    description: "Animeer altijd rolkleurovergangen."
                }
            }
        },
        alwaysExpandProfiles: {
            name: "altijdExpandProfiles",
            description: "Opent gebruikersprofielen altijd uitgebreid"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Breidt altijd de rollenlijst uit in profielpop-ups",
            option: {
                hideArrow: {
                    label: "Pijlen verbergen",
                    description: "Pijlen verbergen"
                }
            }
        },
        animalese: {
            name: "Dierlijk",
            description: "Speelt een dierlijk geluid af voor elk verzonden bericht (ze doen veel)",
            option: {
                volume: {
                    label: "Geluidsniveau",
                    description: "Dierlijk stemvolume"
                },
                speed: {
                    label: "Snelheid",
                    description: "Dierlijke stemsnelheid"
                },
                pitch: {
                    label: "Ton",
                    description: "toonvermenigvuldiger"
                },
                messageLengthLimit: {
                    label: "Limiet voor berichtlengte",
                    description: "Maximale berichtlengte om te verwerken"
                },
                processOwnMessages: {
                    label: "Verwerk uw eigen berichten",
                    description: "Schakel ook uw eigen berichten in"
                },
                soundQuality: {
                    label: "Geluidskwaliteit",
                    description: "Geluidskwaliteit om te gebruiken",
                    high: "Hoog",
                    med: "Medium",
                    low: "Laag",
                    lowest: "Laagste"
                }
            }
        },
        alwaysTrust: {
            name: "AltijdVertrouw",
            description: "Verwijdert kwaadaardige domein- en verdachte bestandspop-ups",
            option: {
                domain: {
                    label: "domeinnaam",
                    description: "Verwijdert de pop-up 'kwaadaardig domein'"
                },
                file: {
                    label: "Bestand",
                    description: "Verwijdert 'potentieel gevaarlijke' downloadpop-up"
                },
                noDeleteSafety: {
                    label: "Geen verwijderbeveiliging",
                    description: "Verwijdert de noodzaak om de servernaam in te voeren bij het verwijderen van een server"
                },
                confirmModal: {
                    label: "Bevestigingspop-up",
                    description: "'Weet u zeker dat u deze transactie wilt bevestigen?' verwijdert pop-up"
                }
            },
            alert: {
                title: "Server verwijderen?",
                body: "Dit proces is permanent, laten we het vermelden als het niet duidelijk is!",
                confirm: "Sil",
                cancel: "Annuleren"
            }
        },
        anonymiseFileNames: {
            name: "Anonimiseer bestandsnamen",
            description: "Anonimiseert geüploade bestandsnamen.",
            option: {
                anonymiseByDefault: {
                    label: "Anonimiseer standaard",
                    description: "Anonimiseert standaard bestandsnamen. Je kunt het desgewenst uitschakelen in de pop-up voor het uploaden van bestanden."
                },
                spoilerMessages: {
                    label: "Spoiler-berichten",
                    description: "Anonimiseert de namen van bestanden die als spoilers zijn gemarkeerd."
                },
                method: {
                    label: "Methode",
                    description: "Anonimiseringsmethode",
                    random: "Willekeurige karakters",
                    consistent: "Consistent",
                    timestamp: "Tijdstempel"
                },
                randomisedLength: {
                    label: "Randomisatie lengte",
                    description: "Willekeurige tekenlengte"
                },
                consistent: {
                    label: "Consistente anonimisering",
                    description: "Geheime sleutel voor consistente anonimisering"
                }
            },
            using: {
                anonymous: "Er wordt een anonieme bestandsnaam gebruikt",
                spoiler: "Er wordt een normale bestandsnaam gebruikt"
            },
            spoiler: {
                description: "Schakel Spoiler in of uit voor uw bestanden",
                toggle: "Spoiler in- of uitschakelen voor uw bestanden (standaard ingeschakeld)",
                enabled: "Spoiler geactiveerd!",
                disabled: "Spoilers uitgeschakeld!"
            }
        },
        appleMusic: {
            name: "Rijke aanwezigheid van Apple Music",
            description: "Apple Music toont de luisterstatus als Discord Rich Presence",
            about: "Voor aanpasbare tekenreeksen voor gebeurtenisformaten kunt u een paar aangepaste tekenreeksen gebruiken om trackgegevens aan gebeurtenissen toe te voegen! {{name}} wordt vervangen door de tracknaam, {{artiest}} door de artiestennaam(en) en {{album}} door de albumnaam.",
            button: {
                listen: "Apple Music'te Dinle",
                songLink: "Bekijk op SongLink"
            },
            option: {
                activityType: {
                    label: "Activiteitstype",
                    description: "Welk type activiteit wordt getoond",
                    listening: "luisteren",
                    playing: "spelen"
                },
                statusDisplayType: {
                    label: "Type statusweergave",
                    description: "Toon track-/artiestnaam in ledenlijst",
                    off: "Niet tonen (toont algemene luisterboodschap)",
                    artist: "Toon artiestennaam",
                    track: "Toon tracknaam"
                },
                refreshInterval: {
                    label: "Vernieuwingsinterval",
                    description: "Vernieuwingsinterval van gebeurtenis (seconden)"
                },
                enableTimestamps: {
                    label: "Tijdstempels inschakelen",
                    description: "Of tijdstempels moeten worden ingeschakeld"
                },
                enableButtons: {
                    label: "Knoppen inschakelen",
                    description: "Of knoppen moeten worden ingeschakeld"
                },
                nameString: {
                    label: "Naamreeks",
                    description: "Tekenreeks voor de indeling van de gebeurtenisnaam"
                },
                detailsString: {
                    label: "Details String",
                    description: "Formaatreeks voor gebeurtenisdetails"
                },
                stateString: {
                    label: "Statusreeks",
                    description: "Tekenreeks van gebeurtenisstatusindeling"
                },
                largeImageType: {
                    label: "Groot afbeeldingstype",
                    description: "Evenementitems groot afbeeldingstype",
                    album: "albumhoes kunst",
                    artist: "kunstenaar schilderij",
                    disabled: "gehandicapt"
                },
                largeTextString: {
                    label: "Grote tekstreeks",
                    description: "Gebeurtenisentiteiten tekenreeks met grote tekstindeling"
                },
                smallImageType: {
                    label: "Miniatuurtype",
                    description: "Miniatuurtype van evenementitems",
                    album: "Apple Music-logosu",
                    artist: "kunstenaar schilderij",
                    disabled: "gehandicapt"
                },
                smallTextString: {
                    label: "Kleine tekstreeks",
                    description: "Kleine tekstindeling van gebeurtenisentiteiten"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence (arRPC)",
            description: "arRPC-clientplug-in om RPC op Discord Web in te schakelen (experimenteel)",
            use: {
                title: "Hoe arRPC te gebruiken",
                enable: "{{link}} om de server te laten draaien en vervolgens de plug-in te activeren.",
                link: "Volg de instructies in de GitHub-opslagplaats"
            },
            toast: {
                connected: "Verbonden met arRPC",
                failed: "Kan geen verbinding maken met arRPC, werkt het?",
                retry: "Probeer het opnieuw"
            }
        },
        atSomeone: {
            name: "Bij iemand",
            description: "Hiermee kun je een willekeurig persoon taggen met @iemand"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndTerwijl spelen",
            description: "Updatet automatisch de online status (online, inactief, niet storen) wanneer de game wordt gestart",
            option: {
                statusToSet: {
                    label: "Status om in te stellen",
                    description: "Status die moet worden ingesteld wanneer een spel wordt gestart",
                    online: "online",
                    dnd: "Niet storen",
                    idle: "inactief",
                    invisible: "Onzichtbaar"
                },
                excludeInvisible: {
                    label: "Sluit onzichtbaar uit",
                    description: "Voorkom automatische statuswijzigingen wanneer uw status op onzichtbaar is ingesteld"
                }
            }
        },
        autoZipper: {
            name: "Automatische ritssluiting",
            description: "Zipt automatisch gespecificeerde bestandstypen en mappen voordat ze naar Discord worden geüpload",
            option: {
                extensions: {
                    label: "Extensies",
                    description: "Door komma's gescheiden lijst met bestandsextensies die automatisch moeten worden gecomprimeerd (bijv. .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "Overal spandoeken",
            description: "Toont banners in de ledenlijst",
            option: {
                animate: {
                    label: "Animatie",
                    description: "Maak de banner geanimeerd"
                },
                preferNameplate: {
                    label: "Kies Naamplaatje",
                    description: "Kies voor een naambord in plaats van een banner"
                }
            }
        },
        betterActivities: {
            name: "Betere activiteiten",
            description: "Toont activiteitspictogrammen in de ledenlijst en maakt het mogelijk om alle evenementen te tonen",
            option: {
                memberList: {
                    label: "Ledenlijst",
                    description: "Toon activiteitspictogrammen in de ledenlijst"
                },
                iconSize: {
                    label: "Pictogramgrootte",
                    description: "Grootte van gebeurtenispictogrammen"
                },
                specialFirst: {
                    label: "Specialiteiten eerst",
                    description: "Speciale evenementen eerst tonen (momenteel Spotify en Twitch)"
                },
                renderGifs: {
                    label: "GIF'je Maak het",
                    description: "Weergave van GIF's toestaan"
                },
                removeGameActivityStatus: {
                    label: "Spelstatus verwijderen",
                    description: "Verwijder het spelstatuspictogram en de status"
                },
                userPopout: {
                    label: "Gebruikerspop-up",
                    description: "Toon alle activiteiten in profielpop-up/zijbalk"
                },
                hideTooltip: {
                    label: "Knopinfo verbergen",
                    description: "Verbergt activiteiten op verschillende plaatsen"
                },
                allActivitiesStyle: {
                    label: "Stijl voor alle evenementen",
                    description: "Toon alle evenementenstijl",
                    list: "Lijst",
                    carousel: "schuifregelaar",
                    left: "Sol",
                    right: "Rechts"
                }
            }
        },
        betterAudioPlayer: {
            name: "Betere audiospeler",
            description: "Voegt spectrograaf en oscilloscoop-visualizer toe aan spelers met audiobijlagen",
            option: {
                oscilloscope: {
                    label: "Oscilloscoop",
                    description: "Schakel scope-visualizer in"
                },
                spectrograph: {
                    label: "Spectrograaf",
                    description: "Spectrograaf-visualizer inschakelen"
                },
                oscilloscopeSolidColor: {
                    label: "Oscilloscoop effen kleur",
                    description: "Gebruik effen kleuren in plaats van verloop voor reikwijdte"
                },
                oscilloscopeColor: {
                    label: "Rengi-oscilloscoop",
                    description: "Kleur van de oscilloscoop wanneer effen kleur is ingeschakeld"
                },
                spectrographSolidColor: {
                    label: "Spectrograaf effen kleur",
                    description: "Gebruik effen kleuren in plaats van verloop voor spectrograaf"
                },
                spectrographColor: {
                    label: "Spectrograaf kleur",
                    description: "Kleur van de spectrograaf wanneer effen kleur is ingeschakeld"
                },
                forceMoveBelow: {
                    label: "Forceer verplaatsing naar beneden",
                    description: "Forceer de visualisatie onder de volumeregelaars"
                }
            },
            toast: {
                invalidColorFormat: "Ongeldig kleurformaat voor {{settingKey}}, zorg ervoor dat het de indeling 'R, G, B' of '#RRGGBB' heeft"
            }
        },
        betterBanReasons: {
            name: "BetterBanRedenen",
            description: "Maak aangepaste redenen om te gebruiken in het Discord-verbodsvenster en/of toon standaard een tekstinvoer in plaats van opties.",
            option: {
                reasons: {
                    label: "redenen",
                    description: "uw speciale redenen"
                },
                isTextInputDefault: {
                    label: "Standaard tekstinvoer",
                    description: "Standaard wordt een tekstinvoer weergegeven in plaats van een selectiemenu. (Gelijkwaardig aan klikken op Meer)"
                }
            },
            title: "redenen",
            placeholder: "Van waar",
            add: "Voeg nog een reden toe"
        },
        betterBlockedUsers: {
            name: "Beter geblokkeerde gebruikers",
            description: "Hiermee kunt u de lijst met geblokkeerde gebruikers doorzoeken en namen selecteerbaar maken in de instellingen.",
            placeholder: "Zoeken naar gebruikers..."
        },
        betterCommands: {
            name: "Betere opdrachten",
            description: "Het verbetert het commandosysteem met verschillende verbeteringen.",
            option: {
                autoFillArguments: {
                    label: "Argumenten voor automatisch aanvullen",
                    description: "Vult de opdracht automatisch met alle argumenten, niet alleen met de vereiste argumenten"
                },
                allowNewlinesInCommands: {
                    label: "Sta nieuwe regels toe in opdrachten",
                    description: "Nieuwe regels toestaan ​​in opdrachtinvoer (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Discord vernieuwt app-opdrachten native",
                    user: "specifieke gebruiker die u wilt verlengen",
                    refreshing: "Applicatieopdrachten worden vernieuwd...",
                    refreshed: "Commando's zijn succesvol vernieuwd!",
                    failed: "Het vernieuwen van opdrachten is mislukt. Controleer de console voor meer informatie."
                }
            }
        },
        betterFolders: {
            name: "Betere mappen",
            description: "Toont servermappen in een aangepaste zijbalk en voegt mapgerelateerde verbeteringen toe",
            option: {
                sidebar: {
                    label: "Zijbalk",
                    description: "Toon servers in map in aangepaste zijbalk"
                },
                sidebarAnim: {
                    label: "Zijbalkanimatie",
                    description: "Gebruik animatie bij het openen van de zijbalk van de map"
                },
                closeAllFolders: {
                    label: "Sluit alle mappen",
                    description: "Sluit alle mappen als er een server is geselecteerd die niet in een map staat"
                },
                closeAllHomeButton: {
                    label: "Sluit alles op de Home-knop",
                    description: "Sluit alle mappen wanneer u op de startknop klikt"
                },
                closeOthers: {
                    label: "Sluit overige",
                    description: "Sluit andere mappen wanneer een map wordt geopend"
                },
                closeServerFolder: {
                    label: "Sluit de servermap",
                    description: "Sluit de map wanneer een server in de map is geselecteerd"
                },
                forceOpen: {
                    label: "Forceer openen",
                    description: "Forceer het openen van een map wanneer er wordt overgeschakeld naar de server van een map"
                },
                keepIcons: {
                    label: "Bescherm pictogrammen",
                    description: "Blijf serverpictogrammen weergeven in de hoofdmap van de serverbalk wanneer de map geopend is in de zijbalk van BetterFolders"
                },
                showFolderIcon: {
                    label: "Mappictogram weergeven",
                    description: "Toon het mappictogram boven mapservers in de zijbalk van BetterFolders",
                    never: "Nooit",
                    always: "Altijd",
                    moreThanOne: "Wanneer meerdere mappen zijn uitgevouwen"
                }
            }
        },
        betterGifAltText: {
            name: "BeterGifAltText",
            description: "Verandert de GIF-alt-tekst van alleen 'GIF' om GIF-tags/bestandsnaam op te nemen"
        },
        betterGifPicker: {
            name: "BeterGifPicker",
            description: "Zorgt ervoor dat de GIF-kiezer standaard de favoriete categorie opent",
            option: {
                keepOpen: {
                    label: "Houd de selectie open",
                    description: "Zorgt ervoor dat de GIF-kiezer open blijft na het selecteren van een GIF"
                }
            }
        },
        betterInvites: {
            name: "Betere uitnodigingen",
            description: "Bekijk de vervaldatum van uitnodigingen, bekijk het profiel van de uitnodiger en bekijk een voorbeeld van de servers voordat u lid wordt (door op de naam te klikken)",
            render: {
                tip: "Deze uitnodiging verloopt na {{time}}",
                header: "{{name}} heeft je uitgenodigd op {{server}}",
                never: "nooit"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Verberg notities of schakel de spellingcontrole uit (Configureer in Instellingen!!)",
            option: {
                hide: {
                    label: "Verberg notities",
                    description: "Verberg het notitievak in gebruikerspop-ups"
                },
                noSpellCheck: {
                    label: "Schakel de spellingcontrole uit",
                    description: "Schakel de spellingcontrole in notities uit"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Het aantal plustekens vóór :emoji: geeft aan aan welk bericht de emoji wordt toegevoegd"
        },
        betterRoleContext: {
            name: "Betere RolContext",
            description: "Voegt opties toe om de rolkleur te kopiëren / de rol te bewerken / het rolpictogram weer te geven wanneer u met de rechtermuisknop op rollen in gebruikersprofielen klikt",
            option: {
                roleIconFileFormat: {
                    label: "Bestandsformaat rolpictogram",
                    description: "Bestandsformaat dat moet worden gebruikt bij het weergeven van rolpictogrammen"
                }
            },
            context: {
                copyColor: "Kopieer rolkleur",
                editRole: "Rol bewerken",
                viewIcon: "Rolpictogram bekijken"
            }
        },
        betterRoleDot: {
            name: "BeterRoleDot",
            description: "RoleDot (toegankelijkheidsinstelling) kopieert de rolkleur wanneer erop wordt geklikt. Het maakt ook het gelijktijdige gebruik van RoleDot en kleurnamen mogelijk.",
            option: {
                bothStyles: {
                    label: "Hier İki Stil",
                    description: "Toon zowel rolpunt- als gekleurde namen"
                },
                copyRoleColorInProfilePopout: {
                    label: "Kopieer de rolkleur in de profielpop-up",
                    description: "Sta het kopiëren van de rolkleur toe door op de rolpunt in de profielpop-up te klikken"
                }
            }
        },
        betterSessions: {
            name: "Betere sessies",
            description: "Verbetert het menu Sessies (apparaten). Hiermee kunt u exacte tijdstempels zien, elke sessie een unieke naam geven en meldingen ontvangen over nieuwe sessies.",
            new: "NIEUW",
            newSessions: "Nieuwe sessie:",
            rename: "Hernoemen",
            newDevice: "Nieuwe apparaatnaam",
            resetName: "Naam opnieuw instellen",
            save: "Redden",
            cancel: "Annuleren",
            option: {
                backgroundCheck: {
                    label: "Achtergrondcontrole",
                    description: "Controleer op nieuwe sessies op de achtergrond en toon meldingen wanneer deze worden gedetecteerd"
                },
                checkInterval: {
                    label: "Controlebereik",
                    description: "Hoe vaak er op de achtergrond moet worden gecontroleerd op nieuwe sessies (indien ingeschakeld), in minuten"
                }
            }
        },
        betterSettings: {
            name: "Betere instellingen",
            description: "Verbetert de ervaring bij het openen van het instellingenmenu",
            option: {
                disableFade: {
                    label: "Schakel overgangseffect uit",
                    description: "Crossfade-animatie uitschakelen"
                },
                organizeMenu: {
                    label: "Menu bewerken",
                    description: "Instellingen verdeelt het tandwielpictogrammenu in categorieën"
                },
                eagerLoad: {
                    label: "Snel laden",
                    description: "Verwijdert laadvertraging wanneer het menu voor het eerst wordt geopend"
                }
            },
            alert: {
                title: "Opnieuw opstarten vereist",
                restart: "U hebt instellingen gewijzigd waarvoor opnieuw opstarten vereist is.",
                confirm: "Start nu opnieuw op",
                cancel: "Later!"
            }
        },
        betterUploadButton: {
            name: "BeterUploadKnop",
            description: "Installeer met één klik, open het menu met een rechterklik"
        },
        biggerStreamPreview: {
            name: "GroterStreamPreview",
            description: "Met deze plug-in kunt u uitzendingsvoorbeelden vergroten",
            context: {
                viewPreview: "Zie Releasevoorbeeld"
            }
        },
        blockKeywords: {
            name: "Blokzoekwoorden",
            description: "Blokkeert berichten die bepaalde door de gebruiker gedefinieerde trefwoorden bevatten, alsof de verzendende gebruiker is geblokkeerd.",
            option: {
                blockedWords: {
                    label: "Geblokkeerde woorden",
                    description: "Door komma's gescheiden lijst met te blokkeren woorden"
                },
                useRegex: {
                    label: "Regex Kullan",
                    description: "Gebruik elke waarde als reguliere expressie bij het controleren van de berichtinhoud (geavanceerd)"
                },
                caseSensitive: {
                    label: "Hoofdlettergevoelig",
                    description: "Hoofdlettergevoelig zoeken gebruiken?"
                },
                ignoreBlockedMessages: {
                    label: "Negeer geblokkeerde berichten",
                    description: "Negeert volledig de nieuwe berichtenbalk (recente berichten)"
                }
            }
        },
        blockKrisp: {
            name: "BlokKrisp",
            description: "Voorkomt dat Krisp installeert"
        },
        blurNSFW: {
            name: "VervagenNSFW",
            description: "Vervaagt bijlagen in NSFW-kanalen totdat er overheen wordt bewogen",
            option: {
                blurAmount: {
                    label: "Hoeveelheid vervaging",
                    description: "Hoeveelheid onscherpte (in pixels)"
                },
                blurAllChannels: {
                    label: "Vervaag alle kanalen",
                    description: "Bijlagen vervagen op alle kanalen (niet alleen NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "OmzeilPinPrompt",
            description: "Slaat de pin-prompt over bij gebruik van pin-functies"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Ontvang nog steeds meldingen van bepaalde bronnen in de modus Niet storen. U kunt met de rechtermuisknop op gebruikers/kanalen/servers klikken om de modus Niet storen te omzeilen.",
            context: {
                remove: "Statusoverslaan verwijderen",
                add: "Statusoverslaan toevoegen"
            },
            option: {
                guilds: {
                    label: "Servers",
                    description: "Servers die mogen springen (meldingen ontvangen wanneer ze ergens op de server worden gepingd)",
                    placeholder: "Scheid met een komma"
                },
                channels: {
                    label: "Kanalen",
                    description: "Kanalen waar overslaan is toegestaan ​​(ontvang meldingen wanneer u op dat kanaal wordt gepingd)",
                    placeholder: "Scheid met een komma"
                },
                users: {
                    label: "Gebruikers",
                    description: "Gebruikers mogen overslaan (meldingen ontvangen voor alle berichten die in DM's worden verzonden)",
                    placeholder: "Scheid met een komma"
                },
                allowOutsideOfDms: {
                    label: "Sta buiten DM toe",
                    description: "Sta geselecteerde gebruikers toe om niet-DM-statussen over te slaan (werkt hetzelfde als het overslaan van kanalen/servers, maar is van toepassing op alle berichten die door geselecteerde gebruikers worden verzonden)"
                },
                notificationSound: {
                    label: "Meldingsgeluid",
                    description: "Bepaalt of meldingsgeluid moet worden afgespeeld"
                },
                respectSilentPings: {
                    label: "Respecteer stille pings",
                    description: "Respecteer stille pings (@stil/onderdruk meldingen)"
                },
                statusToUse: {
                    label: "Gebruikscasus",
                    description: "Status die moet worden gebruikt voor whitelisting",
                    online: "online",
                    idle: "inactief",
                    dnd: "Niet storen",
                    invisible: "Onzichtbaar"
                }
            }
        },
        cakeDay: {
            name: "TaartDag",
            description: "Houd verjaardagen van gebruikers bij en toon ze met taartpictogrammen",
            context: {
                label: "Verjaardag",
                setBirthday: "Verjaardag instellen",
                clearBirthday: "Verjaardag verwijderen",
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
                    description: "Toon taartbadge op gebruikersprofiel"
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
                    description: "Naast gebruikersnamen in chat"
                },
                memberList: {
                    label: "Ledenlijst",
                    description: "In de ledenlijst"
                }
            },
            toast: {
                success: "Verjaardagsset succesvol!",
                invalid: "Ongeldig verjaardagsformaat! Alleen DD/MM wordt geaccepteerd.",
                cleared: "Verjaardag succesvol verwijderd!"
            },
            notification: {
                title: "🎂 Vandaag is hij jarig!",
                body: "Vandaag is {{username}}'s verjaardag!"
            },
            modal: {
                title: "Verjaardag instellen voor {{username}}",
                description: "Voer uw verjaardag in DD/MM-formaat in (bijvoorbeeld 25/12)",
                placeholder: "adelaar 25/12",
                current: "Huidige verjaardag:",
                set: "Verjaardag instellen",
                cancel: "Annuleren",
                birthday: "Vandaag ben ik jarig! 🎂",
                saved: "Opgeslagen verjaardagen",
                savedDesc: "Er zijn nog geen verjaardagen geregistreerd. Klik met de rechtermuisknop op de gebruiker om verjaardagen toe te voegen!",
                today: "Vandaag",
                remove: "Verwijderen",
                loading: "Laden...",
                save: "Redden",
                edit: "Bewerking"
            }
        },
        callTimer: {
            name: "BelTimer",
            description: "Toont oproeptimers voor alle spraakoproepen",
            option: {
                format: {
                    label: "Formaat",
                    description: "Compact of voor mensen leesbaar formaat",
                    human: "30g 23s 00d 42s"
                },
                allCallTimers: {
                    label: "Alle oproeptimers",
                    description: "Toon oproeptimers voor alle gebruikers op servers"
                },
                showWithoutHover: {
                    label: "Tonen zonder te zweven",
                    description: "Toon altijd de timer zonder te hoeven zweven"
                },
                showRoleColor: {
                    label: "Toon rolkleur",
                    description: "Weergeven in de rolkleur van de gebruiker (als de plug-in ShowRoleColor is ingeschakeld)"
                },
                trackSelf: {
                    label: "Volg jezelf",
                    description: "Laat ook je eigen timer zien"
                },
                showSeconds: {
                    label: "Seconden weergeven",
                    description: "Toon ook seconden in de timer"
                },
                watchLargeGuilds: {
                    label: "Kijk naar Grote Servers",
                    description: "Volg gebruikers op grote servers. Als u op grote servers met veel actieve spraakgebruikers werkt, kan dit vertraging veroorzaken. Getest met maximaal 2000 actieve stemgebruikers en er hebben zich geen problemen voorgedaan."
                },
                fixUI: {
                    label: "Gebruikersinterface opgelost",
                    description: "In sommige gevallen kan de timer de gebruikersinterface verbreken. U kunt dit oplossen door deze optie in te schakelen."
                }
            }
        },
        channelBadges: {
            name: "Kanaalbadges",
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
                    description: "Tekstbadge tonen"
                },
                showVoiceBadge: {
                    label: "Toon stembadge",
                    description: "Toon audiobadge"
                },
                showCategoryBadge: {
                    label: "Categoriebadge tonen",
                    description: "Categoriebadge tonen"
                },
                showDirectoryBadge: {
                    label: "Toon indexbadge",
                    description: "Toon indexbadge"
                },
                showAnnouncementThreadBadge: {
                    label: "Badge voor aankondigingsonderwerp weergeven",
                    description: "Badge met aankondigingsonderwerp weergeven"
                },
                showPublicThreadBadge: {
                    label: "Algemene onderwerpbadge weergeven",
                    description: "Badge voor openbaar onderwerp tonen"
                },
                showPrivateThreadBadge: {
                    label: "Speciaal onderwerp-badge tonen",
                    description: "Aangepaste onderwerpbadge weergeven"
                },
                showStageBadge: {
                    label: "Toon podiumbadge",
                    description: "Toon podiumbadge"
                },
                showAnnouncementBadge: {
                    label: "Aankondigingsbadge tonen",
                    description: "Aankondigingsbadge tonen"
                },
                showForumBadge: {
                    label: "Toon forumbadge",
                    description: "Toon forumbadge"
                },
                showMediaBadge: {
                    label: "Mediabadge tonen",
                    description: "Mediabadge tonen"
                },
                showNSFWBadge: {
                    label: "Toon uw NSFW-badge",
                    description: "Toon NSFW-badge"
                },
                showLockedBadge: {
                    label: "Toon vergrendelde badge",
                    description: "Toon uw vergrendelde badge"
                },
                showRulesBadge: {
                    label: "Toon regelsbadge",
                    description: "Regelbadge tonen"
                },
                showUnknownBadge: {
                    label: "Toon onbekende badge",
                    description: "Toon onbekende badge"
                },
                textBadgeLabel: {
                    label: "Tekstbadgelabel",
                    description: "tekstbadgelabel",
                    default: "Tekst"
                },
                voiceBadgeLabel: {
                    label: "Geluidsbadgelabel",
                    description: "audiobadgelabel",
                    default: "Ses"
                },
                categoryBadgeLabel: {
                    label: "Categorie-badgelabel",
                    description: "Categoriebadgelabel",
                    default: "Categorie"
                },
                announcementBadgeLabel: {
                    label: "Aankondiging badge-label",
                    description: "Aankondiging badgelabel",
                    default: "Haber"
                },
                announcementThreadBadgeLabel: {
                    label: "Aankondiging Onderwerp Badge Label",
                    description: "Badgelabel voor aankondigingsonderwerp",
                    default: "Nieuwsonderwerp"
                },
                publicThreadBadgeLabel: {
                    label: "Badgelabel voor algemeen onderwerp",
                    description: "Badgelabel voor algemeen onderwerp",
                    default: "Onderwerp"
                },
                privateThreadBadgeLabel: {
                    label: "Badgelabel voor speciaal onderwerp",
                    description: "Aangepast onderwerpbadgelabel",
                    default: "Speciaal onderwerp"
                },
                stageBadgeLabel: {
                    label: "Fase-badgelabel",
                    description: "Etiket voor podiumbadge",
                    default: "Scène"
                },
                directoryBadgeLabel: {
                    label: "Index-badgelabel",
                    description: "Indexbadgelabel",
                    default: "index"
                },
                forumBadgeLabel: {
                    label: "Forum-badgelabel",
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
                    label: "Badgetag vergrendelen",
                    description: "badge-tag vergrendelen",
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
                    label: "Kleur audiobadge",
                    description: "Kleur geluidsbadge"
                },
                categoryBadgeColor: {
                    label: "Kleur van categoriebadge",
                    description: "Kleur van categoriebadge"
                },
                announcementBadgeColor: {
                    label: "Kleur aankondigingsbadge",
                    description: "Kleur aankondigingsbadge"
                },
                announcementThreadBadgeColor: {
                    label: "Aankondiging Onderwerp Badgekleur",
                    description: "Badgekleur van aankondigingsonderwerp"
                },
                publicThreadBadgeColor: {
                    label: "Algemene draad-badgekleur",
                    description: "Badgekleur voor algemeen onderwerp"
                },
                privateThreadBadgeColor: {
                    label: "Badgekleur speciaal onderwerp",
                    description: "Aangepaste onderwerpbadgekleur"
                },
                stageBadgeColor: {
                    label: "Kleur podiumbadge",
                    description: "Kleur podiumbadge"
                },
                directoryBadgeColor: {
                    label: "Kleur indexbadge",
                    description: "Kleur indexbadge"
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
                voice: "Ses",
                category: "Categorie",
                announcement: "Haber",
                announcementThread: "Nieuwsonderwerp",
                publicThread: "Onderwerp",
                privateThread: "Speciaal onderwerp",
                stage: "Scène",
                directory: "index",
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
            name: "KanaalTabbladen",
            description: "Groepeer uw vaak bezochte kanalen in tabbladen, zoals in een browser",
            open: "Openen op nieuw tabblad",
            animation: {
                title: "Animatiebediening",
                description: "Schakel specifieke animaties voor kanaaltabbladen in of uit. Elke optie kan afzonderlijk worden in- of uitgeschakeld.",
                placeholder: "Kies welke animaties u wilt inschakelen...",
                tabHover: "Tab-zweefeffecten (verwijderen + schalen)",
                tabSelection: "Geselecteerde animatie voor tablift",
                tabDragDrop: "Tabblad slepen en neerzetten (spook + opnieuw ordenen)",
                tabEnterExit: "Tab In/Uit Scrollen (maken + sluiten)",
                tabIconPop: "Icon Pop (electorale groei)",
                closeRotation: "Knop Sluiten Terug",
                plusPulse: "Plus-knoppulseffect",
                mentionGlow: "Noem Badge Sparkle",
                compactExpand: "Uitbreiding compacte modus",
                selectedBorder: "Geselecteerd tabblad Blauwe rand",
                selectedBackground: "Geselecteerde achtergrondkleur van tabblad",
                tabShadows: "Tabbladschaduweffecten",
                tabRepositioning: "Tabbladherpositionering (zachte overgang)",
                resizeHandle: "Formaat wijzigen Vervagen",
                questActivate: "Gradiënt in actieve dienst"
            },
            bookmark: {
                label: "Jer İmi",
                unknown: "Onbekende gebruiker",
                folder: "Map",
                add: "Toevoegen aan bladwijzers",
                edit: "Bladwijzer bewerken",
                delete: "Yer İmini Sil",
                remove: "Verwijderen uit bladwijzers",
                removeFolder: "Verwijder bladwijzer uit map",
                loading: "Bladwijzers laden...",
                noBookmarks: "Je hebt geen bladwijzers. U kunt een geopend tabblad toevoegen of verbergen door met de rechtermuisknop te klikken.",
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
                delete: "Sil",
                cancel: "Annuleren"
            },
            context: {
                label: "KanaalTabbladen Contextmenu",
                bookmark: "KanaalTabbladen Bladwijzer Contextmenu",
                tab: "KanaalTabbladen Contextmenu tabblad",
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
                noLogin: "Heeft u geen account ingelogd?"
            },
            modal: {
                add: {
                    title: "Voeg bladwijzer toe aan map",
                    select: "Kies een map",
                    create: "Maak nieuw"
                },
                edit: {
                    title: "Bladwijzer bewerken",
                    name: "Bladwijzernaam",
                    folder: "Mapkleur"
                },
                delete: {
                    title: "Weet je het zeker?",
                    description: "Als u een bladwijzermap verwijdert, worden ook alle bladwijzers daarin verwijderd."
                }
            },
            option: {
                onStartup: {
                    label: "Aanvankelijk",
                    description: "Kies wat u met tabbladen wilt doen bij het opstarten",
                    nothing: "Niets doen (open het tabblad Vrienden)",
                    remember: "Onthoud tabbladen van de laatste sessie",
                    open: "Open specifieke tabbladen"
                },
                tabSet: {
                    label: "Tabbladset"
                },
                noPomeloNames: {
                    label: "Geen Pomelo-namen",
                    description: "Gebruik weergavenamen in plaats van gebruikersnamen voor DM's"
                },
                showStatusIndicators: {
                    label: "Statusindicatoren tonen",
                    description: "Toon statusindicatoren voor DM's"
                },
                showBookmarkBar: {
                    label: "Bladwijzerbalk tonen"
                },
                bookmarkNotificationDot: {
                    label: "Maak een bladwijzer van meldingspunt",
                    description: "Toon meldingspunt voor bladwijzers"
                },
                widerTabsAndBookmarks: {
                    label: "Grote tabbladen en bladwijzers",
                    description: "Vouw tabbladen en bladwijzers uit op grotere monitoren"
                },
                tabWidthScale: {
                    label: "Tabbreedteschaal",
                    description: "Tabbladbreedteschaal (percentage) – aanpasbaar door de tabranden te slepen"
                },
                renderAllTabs: {
                    label: "Bewaar alle tabbladen in het geheugen",
                    description: "Bewaar alle tabbladen in het geheugen voor sneller schakelen tussen tabbladen (scrollen en status worden in de cache opgeslagen)"
                },
                switchToExistingTab: {
                    label: "Schakel over naar bestaand tabblad",
                    description: "Als er al een tabblad is voor het kanaal dat u bekijkt, kunt u daarheen gaan"
                },
                createNewTabIfNotExists: {
                    label: "Als er geen tabblad is, maak het dan aan",
                    description: "Als er geen tabblad voor een kanaal is, maak dan een nieuw tabblad aan"
                },
                enableRapidNavigation: {
                    label: "Schakel Snelle navigatie in",
                    description: "Wanneer kanaalwijzigingen snel worden doorgevoerd, verandert het huidige tabblad in plaats van het nieuwe tabblad."
                },
                rapidNavigationThreshold: {
                    label: "Drempel voor snelle navigatie",
                    description: "Tijdsinterval in milliseconden. Als er tijdens deze periode een nieuw kanaal wordt geopend, wordt het bestaande tabblad gewijzigd."
                },
                tabBarPosition: {
                    label: "Locatie van de tabbladbalk",
                    description: "Locatie van de tabbalk",
                    top: "Bovenkant",
                    bottom: "Alt"
                },
                enableNumberKeySwitching: {
                    label: "Van tabblad wisselen met cijfertoetsen",
                    description: "Schakel het schakelen tussen tabbladen in met de toetsen 1–9"
                },
                numberKeySwitchCount: {
                    label: "Nummertoets Tabnummer",
                    description: "Aantal tabbladen toegankelijk via cijfertoetsen (1–9)"
                },
                enableCloseTabShortcut: {
                    label: "Tabblad Sluiten Snelkoppeling",
                    description: "Schakel de sneltoets voor het sluiten van tabbladen in"
                },
                enableNewTabShortcut: {
                    label: "Nieuwe tabbladsnelkoppeling",
                    description: "Schakel de snelkoppeling voor het openen van een nieuw tabblad in"
                },
                enableTabCycleShortcut: {
                    label: "Tablus-snelkoppeling",
                    description: "Snelkoppeling inschakelen om tussen tabbladen te schakelen"
                },
                keybindsSection: {
                    label: "Sneltoetsen",
                    description: "Klik op een knop en druk op de gewenste toetsencombinatie. Modifiers zoals CTRL, SHIFT en ALT worden ondersteund.",
                    title: "Sneltoetsen",
                    reset: "Alles terugzetten naar standaard",
                    closeTab: {
                        label: "Tabblad sluiten",
                        description: "Sneltoets om het huidige tabblad te sluiten"
                    },
                    newTab: {
                        label: "Nieuw tabblad",
                        description: "Sneltoets om een ​​nieuw tabblad te openen met het huidige kanaal"
                    },
                    cycleTabsForward: {
                        label: "Voorwaartse tablus",
                        description: "Sneltoets om naar het volgende tabblad te gaan (gaat naar het eerste tabblad)"
                    },
                    cycleTabsBackward: {
                        label: "Terug stuiterlus",
                        description: "Sneltoets om naar het vorige tabblad te gaan (gaat naar het laatste tabblad)"
                    }
                },
                closeTabKeybind: {
                    label: "Tabblad Sluiten Snelkoppeling",
                    description: "Snelkoppeling om het huidige tabblad te sluiten"
                },
                newTabKeybind: {
                    label: "Nieuwe tabbladsnelkoppeling",
                    description: "Snelkoppeling voor het openen van een nieuw tabblad"
                },
                cycleTabForwardKeybind: {
                    label: "Voorwaartse tablus",
                    description: "Snelkoppeling om naar het volgende tabblad te gaan"
                },
                cycleTabBackwardKeybind: {
                    label: "Terug stuiterlus",
                    description: "Snelkoppeling om naar het vorige tabblad te gaan"
                },
                showTabNumbers: {
                    label: "Toon tabbladnummers",
                    description: "Toon nummerbadges op tabbladen om snelkoppelingen zichtbaar te maken"
                },
                tabNumberPosition: {
                    label: "Locatie van tabbladnummer",
                    description: "Locatie van nummerbadges op tabbladen",
                    left: "Links (pre-pictogram)",
                    right: "Rechts (postinhoud)"
                },
                animations: {
                    label: "Animaties"
                },
                animationHover: {
                    label: "Zweef animatie",
                    description: "Schakel lift- en vergrotingseffecten in terwijl u zweeft"
                },
                animationSelection: {
                    label: "Selectie-animatie",
                    description: "Schakel licht-/frame-animaties in tijdens de selectie"
                },
                animationDragDrop: {
                    label: "Animatie met slepen en neerzetten",
                    description: "Schakel spookeffect in tijdens het slepen"
                },
                animationEnterExit: {
                    label: "Animatie bij binnenkomst/uitgang",
                    description: "Scroll-animaties bij het maken/sluiten van tabbladen"
                },
                animationIconPop: {
                    label: "Pictogram Pop-animatie",
                    description: "Schakel animatie voor pictogramgroei in tijdens selectie"
                },
                animationCloseRotation: {
                    label: "Kill-knop terugkeer",
                    description: "Voeg spin-animatie toe aan het afsluitpictogram"
                },
                animationPlusPulse: {
                    label: "Plus-knoppuls",
                    description: "Schakel pulsanimatie in voor de knop 'Nieuw tabblad'"
                },
                animationMentionGlow: {
                    label: "Noem Sparkle",
                    description: "Schakel de rode gloed-animatie in op de vermeldingsbadge"
                },
                animationCompactExpand: {
                    label: "Compacte uitbreidingsanimatie",
                    description: "Zorg voor een soepele uitbreiding van compacte tabbladen"
                },
                animationSelectedBorder: {
                    label: "Geselecteerde tabbladrandanimatie",
                    description: "Schakel rand- en gloedstijlanimaties in voor het geselecteerde tabblad"
                },
                animationSelectedBackground: {
                    label: "Geselecteerde tabbladachtergrondanimatie",
                    description: "Schakel geanimeerde wijziging van de achtergrondkleur van het geselecteerde tabblad in"
                },
                animationTabShadows: {
                    label: "Tabbladschaduwanimatie",
                    description: "Schakel schaduweffecten op tabbladen in"
                },
                animationTabPositioning: {
                    label: "Animatie voor tabpositionering",
                    description: "Vloeiende overgangsanimaties bij het schakelen tussen tabbladen"
                },
                animationResizeHandle: {
                    label: "Het formaat van animatie wijzigen",
                    description: "Schakel de animatie voor het vervagen van de formaatgreep in"
                },
                animationQuestsActive: {
                    label: "Actieve animatie",
                    description: "Schakel verloopanimaties in op het tabblad wanneer taken actief zijn"
                },
                compactAutoExpandSelected: {
                    label: "Automatisch uitvouwen indien geselecteerd",
                    description: "Compacte tabbladen automatisch uitvouwen wanneer geselecteerd"
                },
                compactAutoExpandOnHover: {
                    label: "Automatisch uitvouwen bij hover",
                    description: "Compacte tabbladen automatisch uitvouwen bij zweven"
                },
                openInNewTabAutoSwitch: {
                    label: "Automatisch overschakelen bij openen in nieuw tabblad",
                    description: "Schakel automatisch over naar een nieuw tabblad wanneer dit wordt geopend"
                },
                bookmarksIndependentFromTabs: {
                    label: "Bladwijzers Onafhankelijk",
                    description: "Bladwijzers navigeren onafhankelijk zonder de tabbalk te beïnvloeden"
                },
                showResizeHandle: {
                    label: "Toon maatgreep",
                    description: "Toon handvat om de breedte van de tabbladen aan te passen"
                },
                openNewTabsInCompactMode: {
                    label: "Open compact nieuwe tabbladen",
                    description: "Nieuw geopende tabbladen worden standaard in compacte modus geopend"
                },
                newTabButtonBehavior: {
                    label: "Gedrag van nieuwe tabbladknoppen",
                    description: "De knop voor een nieuw tabblad (+) volgt de tabbladen en is niet aan de rechterkant vastgezet"
                },
                oneTabPerServer: {
                    label: "Eén tabblad per server",
                    description: "Laat er maar één hop zijn voor een server; Gebruik hetzelfde tabblad wanneer een nieuw kanaal wordt geopend"
                },
                maxOpenTabs: {
                    label: "Maximaal aantal geopende tabbladen",
                    description: "Maximaal aantal tabbladen dat tegelijkertijd geopend kan zijn (0 = onbeperkt)"
                }
            },
            tabs: {
                startup: "Home-tabbladen",
                currently: "Stel momenteel geopende tabbladen in"
            },
            toast: {
                notRestoring: "Tabbladen worden niet hersteld omdat KeepCurrentChannel is ingeschakeld",
                failed: {
                    restore: "Tabbladen kunnen niet worden hersteld",
                    saved: "Opgeslagen tabbladen kunnen niet worden geladen"
                }
            }
        },
        characterCounter: {
            name: "Karakterteller",
            description: "Toont een tekenteller in het berichtenvenster",
            option: {
                colorEffects: {
                    label: "Kleureffecten",
                    description: "Schakel kleureffecten in of uit wanneer u de tekenlimiet nadert"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Het verbergt gewoon alle kanalen in samengevouwen categorieën, zelfs als er ongelezen berichten zijn."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Verwijder alle emoji's en gekke versieringen uit kanaalnamen"
        },
        clearURLs: {
            name: "ClearURL's",
            description: "Verwijdert automatisch trackingelementen van URL's die u indient"
        },
        clickableRoles: {
            name: "Klikbarerollen",
            description: "Welke rollen leden hebben, kunt u zien door op de rollen in de gebruikersprofielen en ledenlijst te klikken.",
            modal: {
                loading: "Leden zijn aan het laden...",
                noMembers: "Geen leden gevonden.",
                unknown: "Onbekende rol"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Hiermee kunt u vrijwel alle inhoud lokaal verbergen voor elke gebruiker",
            replying: "Beantwoorden van geblokkeerd bericht",
            option: {
                hideVc: {
                    label: "Verbergen voor spraakkanalen",
                    description: "Verberg spraakkanalen met geblokkeerde gebruikers"
                },
                usersToBlock: {
                    label: "Gebruikers om te blokkeren",
                    description: "Gebruikers-ID's gescheiden door komma's en spaties"
                },
                hideBlockedUsers: {
                    label: "Verberg geblokkeerde gebruikers",
                    description: "Verberg geblokkeerde gebruikers overal volledig"
                },
                hideBlockedMessages: {
                    label: "Verberg geblokkeerde berichten",
                    description: "Verberg berichten van geblokkeerde gebruikers volledig (hetzelfde als de oude noblockedmessages-plug-in)"
                },
                hideEmptyRoles: {
                    label: "Verberg vacante rollen",
                    description: "Verberg roltitels als alle leden zijn geblokkeerd"
                },
                blockedReplyDisplay: {
                    label: "Geblokkeerde antwoordweergave",
                    description: "Wat er verschijnt in plaats van een bericht wanneer je antwoordt op iemand die je hebt verborgen",
                    displayText: "Toon tekst die het antwoord op een verborgen bericht aangeeft",
                    hideReply: "laat niets zien"
                },
                guildBlackList: {
                    label: "Zwarte lijst van servers",
                    description: "Server-ID's waarbij de functionaliteit wordt uitgeschakeld"
                },
                guildWhiteList: {
                    label: "Witte lijst van servers",
                    description: "Server-ID's waarop de functionaliteit wordt ingeschakeld"
                }
            }
        },
        clientTheme: {
            name: "KlantThema",
            description: "Remake van een oud klantthema-experiment. Voeg een kleur toe aan uw Discord-clientthema",
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
                    contrast: "De gekozen kleur zal niet goed contrasteren met de tekst",
                    nitro: "Nitro-thema's worden niet ondersteund",
                    switch: "Schakel over naar de modus {{oppositeTheme}}",
                    disable: "Schakel het Nitro-thema uit",
                    reset: "Themakleur opnieuw instellen"
                }
            }
        },
        clipsEnhancements: {
            name: "Clipsverbeteringen",
            description: "Voeg meer Clip FPS- en duuropties toe, plus RPC-tagging!",
            minutes: "Een minuut",
            option: {
                richPresenceTagging: {
                    label: "Rich Presence-tagging",
                    description: "Wanneer moeten clips worden getagd met bestaande Rich Presence?",
                    always: "Altijd",
                    only: "Alleen als het begin of einde van de evenementnaam overeenkomt",
                    never: "Nooit"
                },
                enableScreenshotKeybind: {
                    label: "Schakel Screenshot-sneltoets in",
                    description: "Schakel de screenshot-sneltoetsfunctie in"
                },
                enableVoiceOnlyClips: {
                    label: "Schakel alleen audioclips in",
                    description: "Clips met alleen audio inschakelen (audio zonder video)"
                },
                enableAdvancedSignals: {
                    label: "Schakel geavanceerde signalen in",
                    description: "Geavanceerde clipsignalen inschakelen (automatische cliptriggers)"
                },
                ignorePlatformRestriction: {
                    label: "Negeer platformbeperkingen",
                    description: "Platformspecifiek knippen toestaan ​​(kan opslagfouten veroorzaken)"
                },
                clipsLink: {
                    label: "Clips-link",
                    link: "Wijzig de FPS- en duuropties in de Clips-instellingen!"
                }
            }
        },
        colorSighted: {
            name: "KleurZichtbaar",
            description: "Verwijdert kleurenblindvriendelijke pictogrammen uit situaties, net als Discord 2015-2017"
        },
        commandPalette: {
            name: "Commandopalet",
            description: "Hiermee kunt u door de interface navigeren met behulp van het toetsenbord.",
            action: {
                command: {
                    label: "Voer opdracht uit",
                    description: "Voert een ander paletcommando uit met ID. Als u niet zeker bent van de identificatie, gebruikt u de selector."
                },
                settings: {
                    label: "Open de pagina Instellingen",
                    description: "Het gaat rechtstreeks naar een Discord-instellingenpagina. Selecteer een pagina uit de kiezer."
                },
                url: {
                    label: "URL openen",
                    description: "Opent een link. Gebruik https:// links voor de beste compatibiliteit."
                },
                macro: {
                    label: "Macro uitvoeren",
                    description: "Voert een reeks opdrachten achtereenvolgens uit. Voeg stappen toe via selector."
                }
            },
            category: {
                auto: "Automatisch (gebruik standaardlay-out)",
                default: {
                    label: "Snelle transacties",
                    description: "Veelgebruikte Plexcord-snelkoppelingen"
                },
                plugins: {
                    label: "Plug-ins",
                    description: "Schakelt Plexcord-plug-ins in, uit en configureert deze",
                    enable: {
                        label: "Schakel plug-ins in"
                    },
                    disable: {
                        label: "Schakel plug-ins uit"
                    },
                    settings: {
                        label: "Plug-in-instellingen"
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
                    description: "Acties voor het geselecteerde kanaal en de server"
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
                    label: "Speciale commando's",
                    description: "Door de gebruiker gedefinieerde opdrachtpaletitems"
                },
                sessions: {
                    label: "Sessiehulpmiddelen",
                    description: "Tools om uw Discord-sessie te beheren"
                },
                guilds: {
                    label: "Servers",
                    description: "Navigeer snel naar uw servers"
                },
                friends: {
                    label: "Vrienden",
                    description: "Ga snel naar je vrienden"
                },
                action: {
                    label: "Actie",
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
                    label: "Installeer Discord opnieuw",
                    description: "Laadt het huidige Discord-venster opnieuw"
                }
            },
            command: {
                enable: "Schakel {{pluginName}} in",
                enabled: "{{pluginName}} Ingeschakeld",
                disable: "Schakel {{pluginName}} uit",
                disabled: "{{pluginName}} Uitgeschakeld",
                failed: "De opdracht is mislukt:",
                toggleFailed: "{{pluginName}} kan niet worden gewijzigd.",
                pluginSettings: "{{pluginName}} Instellingen",
                untitled: "Anoniem commando",
                new: "Nieuw commando",
                error: {
                    enter: "Voer een opdracht-ID in of selecteer hieronder.",
                    noCommand: "Er is geen opdracht die overeenkomt met deze ID."
                },
                discord: {
                    account: "Open Mijn account",
                    privacy: "Gegevens en privacy Open",
                    notifications: "Schakel Meldingen in",
                    voice: "Schakel Audio en Video in",
                    text: "Open tekst en afbeeldingen",
                    appearance: "Weergave openen",
                    accessibility: "Open toegankelijkheid",
                    keybinds: "Schakel Toetsbindingen in",
                    advanced: "Open Geavanceerde instellingen",
                },
                updates: {
                    check: {
                        label: "Controleer op updates",
                        description: "Controleer op Plexcord-updates",
                        one: "Er is een update beschikbaar",
                        multiple: "{{count}} updates beschikbaar",
                        none: "geen update",
                        failed: "Kan niet controleren op updates."
                    },
                    changelog: {
                        label: "Bekijk de wijzigingslog",
                        description: "Plexcord opent het wijzigingslogboek"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} Markeer als gelezen"
                    }
                },
                pin: {
                    open: {
                        label: "Schakel {{channelLabel}} pins in"
                    },
                    toggle: {
                        label: "Schakel Vastzetten op laatste opdracht in"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} Onderhoud",
                        oneHour: "Demp kanaal {{channelLabel}} gedurende 1 uur",
                        untilTomorrow: "Demp kanaal {{channelLabel}} tot morgen",
                    },
                    unmute: {
                        label: "Dempen {{channelLabel}} opheffen",
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
                        label: "Open {{guildLabel}} Instellingen"
                    },
                    navigate: {
                        label: "Ga naar de {{guildLabel}}-server"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30 minuten Niet storen",
                    oneHourDnd: "1 uur Niet storen",
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
                    deafen: "Schakel Zelfverdovend in",
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
                    description: "Toont recent uitgevoerde opdrachten",
                    rerun: "Voer het laatste commando opnieuw uit"
                },
                plugin: {
                    reload: {
                        label: "Installeer alle plug-ins opnieuw",
                        description: "Probeert onmiddellijk elke actieve plug-in opnieuw te laden"
                    },
                    enable: {
                        label: "Schakel alle plug-ins in"
                    },
                    disable: {
                        label: "Schakel alle onnodige plug-ins uit"
                    },
                    restart: {
                        label: "Start Plexcord opnieuw",
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
                searchPlaceholder: "Zoek naar commando",
                noCommand: "Commando niet gevonden",
                add: {
                    title: "Commando toevoegen"
                },
                choose: {
                    title: "Selecteer Commando"
                },
                command: {
                    palette: {
                        label: "Commandopalet",
                        placeholder: "Typ een opdracht",
                        filtering: "Filteren op {{tags}}",
                        noCommand: "Commando niet gevonden",
                        pin: "pin-opdracht",
                        unpin: "Losmaken"
                    },
                    target: {
                        label: "Doelopdracht-ID",
                        placeholder: "Voer de opdracht-ID in",
                        choose: "Selecteer Commando"
                    },
                    custom: {
                        label: "Speciale commando's",
                        description: "1) Geef de opdracht een naam · 2) Voeg optionele beschrijving/trefwoord/tag/categorie toe · 3) Selecteer een actie en vul de details in (ID's voor aliassen en macro's moeten overeenkomen met bestaande paletopdrachten).",
                        auto: "Automatisch (standaard)",
                        expand: "Uitbreiden",
                        collapse: "Instorten",
                        collapsed: {
                            label: "Ticket",
                            description: "Weergavenaam",
                            advanced: {
                                hide: "Geavanceerde opties verbergen",
                                show: "Geavanceerde opties weergeven"
                            },
                            subtitle: {
                                label: "Uitleg",
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
                    noSelected: "Pagina niet geselecteerd",
                    current: "Huidige pagina",
                    choose: "Selecteer pagina..."
                },
                url: {
                    url: "URL",
                    error: "Gebruik http:// of https:// links.",
                    valid: "Voer een geldige URL in.",
                    open: {
                        external: "extern openen",
                    }
                },
                macro: {
                    sequence: {
                        label: "Script",
                        placeholder: "commando-a, commando-b"
                    },
                    addStep: "Stap toevoegen",
                    unknownId: "Onbekende opdracht-ID's"
                }
            },
            status: {
                online: "online",
                idle: "inactief",
                dnd: "Niet storen",
                invisible: "Onzichtbaar"
            },
            tag: {
                core: "Zonnebloemzaad",
                navigation: "Wandelen",
                utility: "Voertuig",
                developer: "Ontwikkelaar",
                customization: "maatwerk",
                plugins: "Plug-ins",
                session: "Sessie",
                context: "Context",
                custom: "Speciaal",
                guilds: "Servers",
                friends: "Vrienden",
                other: "Ander"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Chatknop '{{label}}' niet gevonden.",
                        failedToTrigger: "{{label}} kan niet worden geactiveerd.",
                        activated: "{{label}} is geactiveerd."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Bedieningselementen voor kanaaldemping zijn niet beschikbaar",
                        muted: "Het kanaal is tot zwijgen gebracht.",
                        unmuted: "Het kanaal is gedempt.",
                        failed: "De mute-status van het kanaal kan niet worden bijgewerkt."
                    },
                    dm: {
                        no: "Er zijn geen DM-afsluitingen opgenomen tijdens deze sessie.",
                        reOpened: "De laatste gesloten DM is heropend.",
                        noAvailable: "DM is niet langer beschikbaar."
                    }
                },
                command: {
                    loop: "Opdrachtlus gedetecteerd tijdens macro-uitvoering.",
                    notFound: "De opdracht {{commandId}} is niet gevonden.",
                    unsupported: "Niet-ondersteunde aangepaste opdrachtactie.",
                    failedToRun: "Kan {{label}} niet uitvoeren.",
                    notMetadata: "Metagegevens van de Command Palette-plug-in zijn niet beschikbaar."
                },
                guild: {
                    mute: {
                        unavailable: "Bediening voor het dempen van de server is niet beschikbaar",
                        muted: "De server is stilgezet.",
                        unmuted: "Het dempen van de server is verwijderd.",
                        failed: "De mutestatus van de server kan niet worden bijgewerkt."
                    },
                    settings: {
                        unable: "Kan serverinstellingen niet openen.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Het bevestigingspaneel kan niet worden geopend.",
                    }
                },
                status: {
                    reset: {
                        canceled: "De geplande statusreset is geannuleerd.",
                        unableToChange: "De status kan op dit moment niet worden gewijzigd.",
                        reverted: "De status wordt geretourneerd als {{status}}.",
                        dnd: "Niet storen gedurende {{duration}} minuten."
                    },
                    change: {
                        unableToChange: "De status kan op dit moment niet worden gewijzigd.",
                        changed: "Status gewijzigd in {{status}}."
                    }
                },
                read: {
                    marked: "{{channelLabel}} is gemarkeerd als gelezen.",
                    failed: "Het kanaal kon niet als gelezen worden gemarkeerd."
                },
                route: {
                    unable: "Kan {{destination}} niet openen.",
                },
                notification: {
                    cleared: "Alle meldingen gewist.",
                    failed: "Meldingen konden niet worden gewist.",
                    notSupported: "Het wissen van meldingen wordt niet ondersteund."
                },
                streamerMode: {
                    enabled: "Omroepmodus is ingeschakeld.",
                    disabled: "Omroepmodus is uitgeschakeld.",
                },
                voice: {
                    micToggle: {
                        muted: "De microfoon werd stilgezet.",
                        unmuted: "De microfoon is ingeschakeld."
                    },
                    deafenToggle: {
                        deafened: "Je bent nu doof.",
                        undeafened: "Je bent niet langer doof."
                    }
                },
                quickCSS: {
                    enabled: "Snelle CSS is ingeschakeld.",
                    disabled: "Snelle CSS is uitgeschakeld."
                },
                transparentity: {
                    enabled: "Venstertransparantie is ingeschakeld.",
                    disabled: "Venstertransparantie is uitgeschakeld."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} is uitgeschakeld.",
                        disable: "{{pluginName}} is uitgeschakeld. Om deze actie te gebruiken, schakelt u de plug-in in."
                    },
                    required: {
                        label: "{{pluginName}} vereist opnieuw opstarten om opnieuw te installeren."
                    },
                    stop: {
                        failed: "{{pluginName}} kan niet worden gestopt."
                    },
                    restart: {
                        failed: "Herstarten van {{pluginName}} is mislukt."
                    },
                    reload: {
                        label: "{{pluginName}} is opnieuw geladen.",
                        noPlugin: "Er zijn geen plug-ins opnieuw geïnstalleerd.",
                        reloaded: "{{count}} plug-ins opnieuw geïnstalleerd."
                    },
                    toggle: {
                        enabled: "{{changed}} plug-in geactiveerd.",
                        disabled: "De plug-in {{changed}} is uitgeschakeld.",
                        noChanged: "De status van eventuele plug-ins is niet veranderd."
                    },
                    run: {
                        failed: {
                            label: "Kan {{pluginName}} niet uitvoeren: {{actionLabel}}."
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
                    current: "Huidige server",
                }
            },
            option: {
                hotkey: {
                    label: "Sneltoets",
                    description: "Sneltoets die wordt gebruikt om het opdrachtenpalet te openen",
                    recording: "Druk op een willekeurige toets...",
                    reset: "opnieuw instellen"
                },
                visualStyle: {
                    label: "Visuele stijl",
                    description: "paletweergave",
                    classic: "Klassiek",
                    polished: "Gepolijst (modern)"
                },
                showTags: {
                    label: "Toon tags",
                    description: "Toon labels voor opdrachten"
                },
                enableTagFilter: {
                    label: "Tagfilter inschakelen",
                    description: "Toon tagfilterbalk"
                },
                customCommands: {
                    label: "Speciale commando's",
                    description: "Beheer aangepaste opdrachtpaletitems"
                }
            },
            template: {
                alias: {
                    label: "Bijnaam Commando",
                    description: "Weerspiegelt een bestaande opdracht"
                },
                settings: {
                    label: "Instellingen",
                    description: "Open Discord-instellingen"
                },
                url: {
                    label: "Verbinding",
                    description: "Opent een externe URL"
                },
                macro: {
                    label: "Macro",
                    description: "Voert een reeks opdrachten uit"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleConciërge",
            description: "Schakelt vervelende consoleberichten/fouten uit",
            option: {
                disableLoggers: {
                    label: "Loggers uitschakelen",
                    description: "Schakelt de loggers van Discord uit"
                },
                disableSpotifyLogger: {
                    label: "Schakel Spotify-logger uit",
                    description: "Schakelt Spotify-logger uit die accountinformatie en toegangssleutel lekt"
                },
                whitelistedLoggers: {
                    label: "Loggers op de witte lijst",
                    description: "Door puntkomma's (;) gescheiden lijst met loggers die zijn toegestaan, zelfs als andere verborgen zijn"
                },
                allowLevel: {
                    label: "Toegestaan ​​niveau",
                    description: "Sta dit soort loggers altijd toe",
                    filter: "Filterlijst"
                }
            }
        },
        consoleShortcuts: {
            name: "Consolesnelkoppelingen",
            description: "Voegt kortere snelkoppelingen toe voor veel dingen in het venster. Voer 'shortcutList' uit voor de lijst."
        },
        contentWarning: {
            name: "InhoudWaarschuwing",
            description: "Zorgt ervoor dat bepaalde triggerwoorden standaard worden vervaagd. Als u op onscherpe inhoud klikt, wordt deze zichtbaar.",
            option: {
                flagged: {
                    label: "markering",
                    flagged: "Gemarkeerde woorden",
                    placeholder: "Woord"
                },
                onClick: {
                    label: "Klik erop",
                    description: "Toon inhoud bij klikken, niet alleen bij mouseover"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "KopieerEmojiMarkdown",
            description: "Hiermee kun je emoji's kopiëren als opgemaakte tekst (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Unicode-kopieën",
                    description: "Kopieert het onbewerkte Unicode-teken in plaats van :name: voor standaard emoji's (👽)"
                }
            },
            context: {
                copy: "Kopieer Emoji-markering"
            },
            toast: {
                success: "Succesvol! De korting van de emoji is gekopieerd."
            }
        },
        copyFileContents: {
            name: "KopieerBestandInhoud",
            description: "Voegt een knop toe aan tekstbestandsbijlagen om de inhoud ervan te kopiëren",
            copied: "Gekopieerd!",
            large: "Het bestand is te groot om te kopiëren.",
            copyFileContents: "Kopieer de bestandsinhoud"
        },
        copyProfileColors: {
            name: "Kopieerprofielkleuren",
            description: "Een plug-in die de verloopkleuren van gebruikersprofielen naar het klembord kopieert.",
            copy: "Kopieer profielkleuren",
            toast: {
                noColor: "Profielkleuren niet gevonden!",
                copied: "Profielkleuren gekopieerd naar klembord!",
                error: "Fout bij kopiëren van profielkleuren!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Kopieer de status-URL van een gebruiker wanneer u met de rechtermuisknop klikt",
            toast: {
                copied: "URL gekopieerd",
                error: "Fout bij kopiëren van URL. Controleer de console voor meer informatie"
            }
        },
        copyStickerLinks: {
            name: "KopieerStickerLinks",
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
            name: "KopieerGebruikersMention",
            description: "Voegt een knop toe aan het gebruikerscontextmenu om de vermelding van de gebruiker te kopiëren. Werkt het beste met ValidUser.",
            context: {
                copy: "Kopieer gebruikersvermelding"
            }
        },
        copyUserURLs: {
            name: "KopieerGebruikersURL's",
            description: "Voegt de optie 'Kopieer gebruikers-URL' toe aan het gebruikerscontextmenu.",
            context: {
                copy: "Kopieer gebruikers-URL"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Helper-plug-in om crashes te beheren en, indien mogelijk, te herstellen zonder opnieuw op te starten",
            option: {
                attemptToPreventCrashes: {
                    label: "Probeer crashes te voorkomen",
                    description: "Discord-crashes proberen te voorkomen?"
                },
                attemptToNavigateToHome: {
                    label: "Probeer om te leiden naar de startpagina",
                    description: "Probeer bij herstel na de crash om te leiden naar het hoofdtabblad."
                }
            },
            toast: {
                crashed: {
                    title: "De onenigheid is gecrasht!",
                    body: "Oeps :( Discord crashte twee keer in korte tijd, er wordt geen herstelpoging gedaan. Klik hier en word lid van de ondersteuningsserver!",
                    update: "Oh nee, Discord is zojuist gecrasht... maar goed nieuws: er is een Plexcord-update die dit probleem kan oplossen! Wil je nu updaten?",
                    recover: "Proberen te herstellen... Klik hier en word lid van de ondersteuningsserver!",
                    invalid: "Ongeldige of verlopen uitnodigingslink."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterVerzenden",
            description: "Gebruik Ctrl+Enter om een ​​bericht te verzenden (aanpasbaar)",
            option: {
                submitRule: {
                    label: "Regel voor posten",
                    description: "Hoe een bericht wordt verzonden",
                    ctrlEnter: "Ctrl+Enter (Enter of Shift+Enter voor nieuwe regel) (cmd+enter op macOS)",
                    shiftEnter: "Shift+Enter (Enter voor nieuwe regel)",
                    enter: "Enter (Shift+Enter voor nieuwe regel; Discord standaard)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Stuur een bericht midden in het codeblok",
                    description: "Stuur een bericht midden in een codeblok"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Voegt een sprite toe die uw cursor volgt.",
            modal: {
                furColor: "Bont kleur",
                outlineColor: "Anahat Rengi"
            },
            option: {
                buddy: {
                    label: "Vriend",
                    description: "Kies een cursorvriend",
                    oneko: "Goed",
                    fathorse: "Vet paard"
                },
                speed: {
                    label: "Snelheid",
                    description: "De snelheid van je vriend",
                    invalid: "Snelheid moet groter zijn dan 0"
                },
                fps: {
                    label: "Framesnelheid (FPS)",
                    description: "De framesnelheid van je buddy",
                    invalid: "De framesnelheid moet groter zijn dan 0"
                },
                onekoSection: {
                    label: "Goed"
                },
                furColor: {
                    label: "Bont kleur",
                    description: "bont hex kleur voor oneko"
                },
                outlineColor: {
                    label: "Anahat Rengi",
                    description: "Hexuitdraaikleur voor Oneko"
                },
                fathorseSection: {
                    label: "Vet paard"
                },
                size: {
                    label: "Dimensie",
                    description: "Grootte van dik paard",
                    invalid: "Grootte moet groter zijn dan 0"
                },
                fade: {
                    label: "Vervagen",
                    description: "Of het paard vervaagt als de cursor nadert"
                },
                freeroam: {
                    label: "Vrij rondlopen",
                    description: "Of het paard vrij kan rondlopen als hij stilstaat"
                },
                shake: {
                    label: "Ontslag",
                    description: "Of het paard tijdens het lopen aan het raam zal schudden"
                }
            }
        },
        customFolderIcons: {
            name: "Aangepaste mappictogrammen",
            description: "Pas mappictogrammen aan met elk png-bestand",
            option: {
                solidIcon: {
                    label: "Platte icoon",
                    description: "Gebruik een effen achtergrond voor de achtergrond van uw afbeelding"
                },
                folderIcons: {
                    label: "Mappictogrammen",
                    description: "Instellingen voor mappictogram"
                }
            },
            modal: {
                change: "Wijzig de grootte van het mappictogram",
                save: "Redden",
                unset: "Verwijderen",
                set: "Stel een nieuw pictogram in",
                hover: "Mogelijk moet u de muisaanwijzer op de map plaatsen nadat u deze hebt ingesteld op vernieuwen."
            }
        },
        customIdle: {
            name: "AangepastInactief",
            description: "Hiermee kunt u de hoeveelheid tijd instellen voordat Discord naar de inactieve modus gaat (of de automatische inactieve modus uitschakelen)",
            backOnline: "Welkom terug! Klik op de knop om online te gaan. Klik op X om inactief te blijven totdat het opnieuw wordt geladen.",
            exit: "Verlaat Inactief",
            option: {
                idleTimeout: {
                    label: "Time-out bij inactiviteit",
                    description: "Aantal minuten voordat Discord naar de inactieve modus gaat (0 om de automatische inactieve modus uit te schakelen)"
                },
                remainInIdle: {
                    label: "Blijf inactief",
                    description: "Wanneer u terugkeert naar Discord, blijft u inactief totdat u bevestigt dat u online wilt gaan"
                }
            }
        },
        customRPC: {
            name: "AangepasteRPC",
            description: "Voeg een volledig aanpasbare Rich Presence toe aan je Discord-profiel",
            goTo: "Maak een applicatie door naar {{portal}} te gaan en de applicatie-ID op te halen.",
            upload: "Ontvang afbeeldingssleutels door afbeeldingen te uploaden vanaf het tabblad Rich Presence.",
            image: "Als je een afbeeldingslink wilt gebruiken, download dan je afbeelding en upload deze naar {{imgur}}, klik vervolgens met de rechtermuisknop op de afbeelding en gebruik 'Afbeeldingsadres kopiëren' om de link te krijgen.",
            button: "Je kunt je eigen knoppen op je profiel niet zien, maar alle anderen kunnen ze normaal zien.",
            font: "Sommige vreemde Unicode-letters ('𝖇ö𝖞𝖑𝖊 𝖞𝖆𝖟ı𝖑𝖆𝖗') kunnen ervoor zorgen dat Rich Presence niet verschijnt. Probeer in plaats daarvan normale letters te gebruiken.",
            placeholder: "Voer een waarde in",
            select: "Kies een optie",
            error: {
                appIdInvalid: "Applicatie-ID is geen geldig nummer.",
                notice: "Waarschuwing",
                sharing: "Het delen van evenementen is niet ingeschakeld, mensen kunnen uw privé Rich Presence niet zien!",
                enable: "activeren",
                validStream: "De berichtlink moet een geldige URL zijn.",
                mustBeURL: "Het moet een geldige URL zijn.",
                streamCharacters: "De berichtlink mag niet langer zijn dan 512 tekens.",
                dontUse: "Gebruik geen Discord-link. Gebruik in plaats daarvan een Imgur-afbeeldingslink.",
                imgur: "De Imgur-link moet rechtstreeks naar de afbeelding verwijzen (bijvoorbeeld: https://i.imgur.com/...). Klik met de rechtermuisknop op de afbeelding en klik op 'Afbeeldingsadres kopiëren'.",
                tenor: "De Tenor-link moet rechtstreeks naar de afbeelding verwijzen (bijvoorbeeld: https://media.tenor.com/...). Klik met de rechtermuisknop op de GIF en klik op 'Afbeeldingsadres kopiëren'.",
                required: "Dit veld is verplicht.",
                tooLong: "Het mag niet langer zijn dan {{maxLength}} tekens.",
                mustBeNumber: "Het moet een getal zijn.",
                mustBePositive: "Het moet een positief getal zijn.",
                startTimeInvalid: "De starttijd moet groter zijn dan 0.",
                endTimeInvalid: "De eindtijd moet groter zijn dan 0."
            },
            option: {
                appId: {
                    label: "Applicatie-ID",
                    description: "App-ID (vereist)"
                },
                appName: {
                    label: "Applicatienaam",
                    description: "App-naam (vereist)"
                },
                details: {
                    label: "Detail",
                    description: "Details (regel 1)"
                },
                detailsURL: {
                    label: "Details-URL",
                    description: "Klikbare URL voor details"
                },
                state: {
                    label: "Durum",
                    description: "Status (regel 2)"
                },
                stateURL: {
                    label: "Status-URL",
                    description: "Klikbare URL voor status"
                },
                partySize: {
                    label: "Groepsgrootte",
                    description: "Huidige groepsgrootte (moet worden gebruikt in combinatie met Maximale groepsgrootte)"
                },
                partyMax: {
                    label: "Maximale groepsgrootte",
                    description: "Maximale groepsgrootte (moet worden gebruikt bij Huidige groepsgrootte)"
                },
                type: {
                    label: "Evenementtype",
                    description: "Type evenement",
                    playing: "spelen",
                    streaming: "Uitzending",
                    listening: "luisteren",
                    watching: "kijken",
                    competing: "racen"
                },
                streamLink: {
                    label: "Postlink",
                    description: "Link naar Twitch.tv of Youtube.com (alleen voor Broadcast-gebeurtenistype)"
                },
                timestampMode: {
                    label: "Tijdstempelmodus",
                    description: "Wat de tijdstempel moet aangeven",
                    none: "Geen",
                    sinceDiscordOpen: "Sinds Discord is geopend",
                    sameAsCurrentTime: "Hetzelfde als uw huidige tijd (wordt na 24 uur niet gereset)",
                    custom: "Speciale tijd"
                },
                startTime: {
                    label: "Starttijd (in milliseconden)",
                    description: "Starttijdstempel (alleen voor aangepaste tijdmodus)"
                },
                endTime: {
                    label: "Eindtijd (in milliseconden)",
                    description: "Eindtijdstempel (alleen voor aangepaste tijdmodus)"
                },
                imageBig: {
                    label: "Grote visuele sleutel",
                    description: "Grote visuele sleutel (moet worden geïnstalleerd op het tabblad Rich Presence)"
                },
                imageBigTooltip: {
                    label: "Grote visuele aanwijzing",
                    description: "Tip die verschijnt als u over de grotere afbeelding zweeft"
                },
                imageBigURL: {
                    label: "Grote afbeeldings-URL",
                    description: "Klikbare URL voor grote afbeelding"
                },
                imageSmall: {
                    label: "Kleine visuele schakelaar",
                    description: "Kleine visuele sleutel (moet worden geïnstalleerd op het tabblad Rich Presence)"
                },
                imageSmallTooltip: {
                    label: "Kleine visuele aanwijzing",
                    description: "Tip die verschijnt wanneer u over een miniatuurafbeelding beweegt"
                },
                imageSmallURL: {
                    label: "URL van miniatuurafbeelding",
                    description: "Klikbare URL voor kleine afbeelding"
                },
                buttonOneText: {
                    label: "Knop 1 Metni",
                    description: "Knop 1 metni"
                },
                buttonOneURL: {
                    label: "Knop 1-URL",
                    description: "Knop 1 aansluiting"
                },
                buttonTwoText: {
                    label: "Knop 2 Metni",
                    description: "Knoop 2 metni"
                },
                buttonTwoURL: {
                    label: "Knop 2-URL",
                    description: "Knop 2 aansluiting"
                }
            }
        },
        customSounds: {
            name: "Aangepaste geluiden",
            description: "Pas de geluiden van Discord aan.",
            search: "Zoek naar geluiden",
            placeholder: "Zoek op naam of ID",
            import: "Ik ben Aktar",
            export: "Exporteren",
            reset: "Alles resetten",
            debug: "Foutopsporing",
            toast: {
                error: "Fout bij het laden van aangepast audiobestand",
                exported: "{{count}} instellingen geëxporteerd (audiobestanden niet inbegrepen)",
                imported: "Instellingen geïmporteerd",
                importError: "Er is een fout opgetreden tijdens het importeren van instellingen. Controleer de console voor meer informatie.",
                reset: "Alle geluiden zijn succesvol gereset!",
                overrideDescription: "{{soundName}} geluid gewijzigd",
                previewSound: "Er is een fout opgetreden tijdens het afspelen van het geluid.",
                playing: "Het aangepaste geluid kon niet worden afgespeeld. Het bestand is mogelijk beschadigd.",
                invalidFile: "Geen aangepast audiobestand voor voorbeeld",
                uploaded: "Bestand geüpload: {{fileName}}",
                uploadedError: "Er is een fout opgetreden tijdens het uploaden van het bestand: {{error}}",
                invalidExtension: "Ongeldig bestandstype. Upload een audiobestand.",
                uploading: "Bestand laden...",
                deleted: "Het bestand is succesvol verwijderd",
                deleteError: "Er is een fout opgetreden bij het verwijderen van het bestand.",
                loadingError: "Fout bij het laden van aangepast audiobestand"
            },
            button: {
                preview: "Voorbeeld",
                stop: "Stroom",
                volume: "Ses",
                soundSource: "Audiobron",
                customFile: "Speciaal bestand",
                uploadNew: "Nieuwe upload",
                delete: "Verwijder het geselecteerde bestand"
            },
            option: {
                default: "Standaard",
                custom: "Speciaal",
                select: "Selecteer een bestand..."
            },
            type: {
                activityEnd: "Evenement is voorbij",
                activityLaunch: "Evenement gestart",
                activityUserJoin: "Gebruiker heeft deelgenomen aan het evenement",
                activityUserLeft: "Gebruiker heeft de gebeurtenis verlaten",
                asmrMessage: "ASMR-bericht",
                bitMessage: "Beetje bericht",
                bopMessage: "Bop-bericht",
                callCalling: "Zoeken wordt uitgevoerd",
                callRinging: "Bel beltoon",
                clipError: "Clipfout",
                clipSave: "Clip opgeslagen",
                ddrDown: "DDR omlaag",
                ddrLeft: "DDR Sol",
                ddrRight: "DDR-rechts",
                ddrUp: "DDR omhoog",
                deafen: "doof maken",
                discodo: "Schijf",
                disconnect: "Verbinding verbroken",
                duckyMessage: "Ducky-bericht",
                hangStatusSelect: "Statusselectie onderbreken",
                highfiveClap: "Hoog vijf applaus",
                highfiveWhistle: "High Five-fluit",
                humanMan: "menselijke mens",
                lofiMessage: "LoFi-bericht",
                mention1: "Noem 1 (@rol)",
                mention2: "Noem 2 (@iedereen)",
                mention3: "Noem 3 (@hier)",
                message1: "Bericht 1 (algemeen)",
                message2: "Bericht 2 (reactie op server)",
                message3: "Bericht 3 (DM's en groeps-DM's)",
                mute: "Stom",
                overlayUnlock: "Laag ontgrendeld",
                poggermodeAchievement: "Poggermode-prestatie",
                poggermodeApplause: "Poggermode-applaus",
                poggermodeEnabled: "Poggermodus ingeschakeld",
                poggermodeMessage: "Poggermode-bericht",
                pttStart: "PTT starten",
                pttStop: "PTT-stop",
                reconnect: "Maak opnieuw verbinding",
                robotMan: "Robot Adam",
                stageWaiting: "In afwachting van scène",
                streamEnded: "Uitzending beëindigd",
                streamStarted: "Uitzending gestart",
                streamUserJoined: "Gebruiker heeft deelgenomen aan de uitzending",
                streamUserLeft: "Gebruiker heeft de uitzending verlaten",
                success: "Succesvol",
                undeafen: "Oorverdovend verwijderen",
                unmute: "Verwijder stilte",
                userJoin: "Gebruiker is lid geworden",
                userLeave: "Gebruiker links",
                userMoved: "Gebruiker verplaatst",
                vibingWumpus: "Wumpus bleef hangen"
            }
        },
        customTimestamps: {
            name: "Aangepaste tijdstempels",
            description: "Aangepaste tijdstempels op berichten en tooltips",
            demo: {
                cozy: "Klik op mij om over te schakelen naar het informele formaat",
                compact: "Klik op mij om over te schakelen naar compact formaat",
                lastWeek: "Dit bericht is vorige week verzonden",
                hover: "U kunt tooltip-indelingen bekijken door de muisaanwijzer op tijdstempels te plaatsen",
                edit: "Bewerk formaten hieronder, bekijk ze hier live bijgewerkt"
            },
            modal: {
                title: "Hoe te gebruiken:",
                moment: "Moment.js-opmaakdocumentatie",
                hint: "Daarnaast kunt u het volgende in uw invoer gebruiken:",
                calendar: "maakt bijvoorbeeld dynamische datumnotatie mogelijk",
                today: "Vandaag",
                yesterday: "Gisteren",
                relative: "geeft je tijden als:",
                relativeTime: "4 uur geleden",
                preview: "Voorbeeld",
                format: "kalender formaat",
                howTo: "Hier ziet u hoe u de waarde [calendar] kunt opmaken wanneer deze wordt gebruikt in de bovenstaande tijdstempels."
            },
            option: {
                formats: {
                    label: "Formaten",
                    description: "Pas tijdstempelformaten aan",
                },
                cozyFormat: {
                    label: "reliëf mod",
                    description: "Tijdformaat om te gebruiken voor een ontspannen modus in berichten"
                },
                compactFormat: {
                    label: "Compacte mod",
                    description: "Tijdformaat om te gebruiken in de compacte modus en bij het bewegen over berichten"
                },
                tooltipFormat: {
                    label: "gereedschapstip",
                    description: "Tijdnotatie voor gebruik in tooltips"
                },
                ariaLabelFormat: {
                    label: "Aria-labels",
                    description: "Tijdnotatie voor gebruik in Aria-tags"
                },
                sameDayFormat: {
                    label: "dezelfde dag",
                    description: "[kalender]-indeling voor vandaag",
                    default: "[Bugün] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Gisteren",
                    description: "[kalender] formaat voor gisteren",
                    default: "[Dun] UU:mm:ss"
                },
                lastWeekFormat: {
                    label: "Vorige week",
                    description: "[kalender]-indeling voor afgelopen week"
                },
                sameElseFormat: {
                    label: "ouder",
                    description: "[kalender] formaat voor oudere data"
                }
            }
        },
        customUserColors: {
            name: "Aangepaste gebruikerskleuren",
            description: "Hiermee kunt u voor elke gebruiker, waar dan ook, een aangepaste kleur toevoegen! Een echte aanrader om te gebruiken met typingTweaks en roleColorEverywhere",
            option: {
                dmList: {
                    label: "DM-lijst",
                    description: "Namen van gebruikers aan wie speciale kleuren zijn toegewezen, worden gekleurd in de DM-lijst"
                },
                colorInServers: {
                    label: "Kleur op servers",
                    description: "Moeten de naamkleuren ook op servers worden gewijzigd?"
                }
            },
            context: {
                setColor: "Kleur aanpassen"
            },
            modal: {
                custom: "Aangepaste kleur",
                pick: "kies een kleur",
                delete: "Opname verwijderen",
                save: "Redden"
            }
        },
        dearrow: {
            name: "Dearrow",
            description: "Zorgt ervoor dat YouTube-titels en thumbnails minder sensationeel zijn, mogelijk gemaakt door Dearrow",
            option: {
                hideButton: {
                    label: "Knop Verbergen",
                    description: "Verbergt de Dearrow-knop voor YouTube-insluitingen"
                },
                replaceElements: {
                    label: "Artikelen wijzigen",
                    description: "Kies welke elementen van de instortvoorziening u wilt vervangen",
                    everything: "Alles (titels en miniaturen)",
                    title: "Titels",
                    thumbnail: "Miniaturen"
                },
                dearrowByDefault: {
                    label: "Standaard Dearrow",
                    description: "Dearrow-video's automatisch"
                }
            },
            tooltip: {
                dearrowed: "Dearrow is op deze insluiting toegepast. Klik om te herstellen",
                dearrow: "Klik om toe te passen dearrow"
            }
        },
        declutter: {
            name: "Opruimen",
            description: "Ruimt Discord op door niet-essentiële UI-elementen te verwijderen, zoals profieleffecten, winkeltabbladen, power-ups en meer.",
            option: {
                userProfileHeader: {
                    label: "Gebruikersprofiel"
                },
                removeNameplate: {
                    label: "Naamplaatje verwijderen",
                    description: "Verwijdert naamplaatjes."
                },
                removeProfileEffect: {
                    label: "Profieleffect verwijderen",
                    description: "Verwijdert animatie-effecten die verschijnen wanneer het profiel wordt geopend."
                },
                removeClanTag: {
                    label: "Clantag verwijderen",
                    description: "Verwijdert clantags."
                },
                alwaysShowUsername: {
                    label: "Toon altijd gebruikersnaam",
                    description: "Het toont altijd de gebruikersnaam in plaats van de status."
                },
                accessibilityNotice: {
                    label: "Toegankelijkheidswaarschuwing",
                    description: "Discord heeft al een ingebouwde optie voor gebruikersnaamstijl in de toegankelijkheidsinstellingen."
                },
                friendsListHeader: {
                    label: "Boven vrienden-/DM-lijst"
                },
                removeShopAboveDM: {
                    label: "Verwijder winkel boven DM-lijst",
                    description: "Verwijdert de winkelknop boven de DM-lijst."
                },
                removeQuestsAboveDM: {
                    label: "Verwijder taken uit de DM-lijst",
                    description: "Verwijdert de takenknop boven de DM-lijst."
                },
                miscHeader: {
                    label: "Verscheidene"
                },
                removeServerBoostInfo: {
                    label: "Verwijder Server Boost-informatie",
                    description: "Verwijdert informatie over serverversterking bovenaan de kanaallijst."
                },
                removeBillingSettings: {
                    label: "Betalingsinstellingen verwijderen",
                    description: "Verwijdert betalings- (factuur)instellingen."
                },
                removeGiftButton: {
                    label: "Cadeauknop verwijderen",
                    description: "Verwijdert de knop Cadeau verzenden."
                },
                removeUnavailableEmojiPicker: {
                    label: "Verwijder de niet-beschikbare Emoji-kiezer",
                    description: "Verwijdert ontoegankelijke categorieën in de emoji-kiezer."
                },
                removeAudioMenus: {
                    label: "Geluidsmenu's verwijderen",
                    description: "Verwijdert de pijlmenu's naast de mute- en doofknoppen."
                },
                removeButtonTooltips: {
                    label: "Knoptips verwijderen",
                    description: "Het verwijdert de tooltips die op de knoppen verschijnen."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Decodeer de base64-inhoud van elk bericht en kopieer de gedecodeerde inhoud.",
            right: {
                decode: "Opgelost kopiëren (klik met de linkermuisknop) / Base64 oplossen (klik met de rechtermuisknop)",
                copy: "Base64-decoderen (klik met de linkermuisknop) / gedecodeerd kopiëren (klik met de rechtermuisknop)"
            },
            option: {
                clickMethod: {
                    label: "Klik op Methode",
                    description: "Verander het gedrag van de knop om de base64-inhoud van elk bericht te decoderen.",
                    left: "Klik met de linkermuisknop om Base64-inhoud te decoderen.",
                    right: "Klik met de rechtermuisknop om Base64-inhoud te decoderen."
                }
            },
            modal: {
                title: "Gedecodeerde Base64-inhoud",
                content: "Opgeloste inhoud",
                copy: "Kopieer opgeloste inhoud {{index}}",
                copied: "Opgeloste inhoud gekopieerd naar het klembord!"
            }
        },
        decor: {
            name: "Decor",
            description: "Creëer en gebruik je eigen aangepaste avatardecoraties of kies je favoriet uit de presets.",
            presetPart: "Onderdeel van de {{name}}-voorinstelling",
            createdBy: "Gemaakt door {{auteur}}",
            copy: "Kopieer voorinstellings-ID",
            file: "Bestand",
            your: {
                title: "decoraties",
                subtitle: "U kunt uw eigen decoraties verwijderen door met de rechtermuisknop te klikken."
            },
            option: {
                changeDecoration: {
                    label: "Verander ornament",
                    description: "Om uw avatardecoratie te wijzigen, schakelt u Decoratie in en start u uw client opnieuw op.",
                    also: "Je hebt ook toegang tot Decoratiedecoraties via de pagina {{profiles}}.",
                    profiles: "Profielen"
                },
                baseUrl: {
                    label: "Basis-URL",
                    description: "Dekor API-URL's"
                },
                agreedToGuidelines: {
                    label: "Ik accepteerde de regels",
                    description: "Regels geaccepteerd"
                }
            },
            context: {
                decorationOptions: "Decoratie opties",
                copyHash: "Kopieer Decoratiehash",
                deleteDecoration: "Versiering verwijderen"
            },
            alert: {
                delete: {
                    title: "Versiering verwijderen",
                    body: "Weet je zeker dat je de {{decoration}} decoratie wilt verwijderen?",
                    confirm: "Sil",
                    cancel: "Annuleren"
                },
                logout: {
                    title: "Uitloggen",
                    body: "Weet u zeker dat u zich wilt afmelden bij Dekor?",
                    confirm: "Uitloggen",
                    cancel: "Annuleren"
                }
            },
            button: {
                change: "Verander ornament",
                remove: "Decoratie verwijderen",
                apply: "Toepassen",
                cancel: "Annuleren",
                browse: "Blader",
                submit: "Ter beoordeling indienen",
                continue: "Devam Et",
                back: "Ga terug"
            },
            tooltip: {
                pendingReview: "Je hebt al een sieraad in beoordeling",
                pending: "In afwachting van beoordeling"
            },
            join: {
                tooltip: "Sluit je aan bij Decor's Discord-server om je decoratie te bekijken en meldingen te ontvangen wanneer er nieuwe presets worden vrijgegeven",
                button: "Discord-server"
            },
            create: {
                title: "Maak een ornament",
                notViolate: "Zorg ervoor dat uw verfraaiing niet in strijd is met de {{richtlijnen}} voordat u deze indient.",
                guidelines: "regels",
                file: "Het bestand moet APNG of PNG zijn.",
                fileHolder: "Selecteer een bestand",
                name: "Deze naam zal worden gebruikt wanneer naar dit ornament wordt verwezen.",
                nameHolder: "Metgezel Kubus",
                nameTitle: "Advertentie"
            },
            help: {
                update: "Word lid van {{server}} en laat directe berichten updates ontvangen over de beoordeling van uw decoratie.",
                server: "Decor'un Discord"
            },
            guidelines: {
                hold: "wachten",
                suspended: "Door een decoratie in te dienen, gaat u akkoord met {{guidelines}}. Als u deze regels niet leest, kan dit leiden tot opschorting van uw recht om in de toekomst meer decoraties te maken.",
                guidelines: "regels"
            }
        },
        demonstration: {
            name: "Demonstratie",
            description: "Plug-in voor het maken van themascreenshots - censuur die afbeeldingen en tekst identificeert.",
            toolbox: {
                toggle: "gecensureerd"
            },
            keycode: "Bekijk {{keycode}} om uw sneltoets te wijzigen!",
            this: "van dit voertuig",
            okay: "Oké!",
            option: {
                keyBind: {
                    label: "Sneltoets",
                    description: "Knop waarmee het thema wordt in- en uitgeschakeld wanneer erop wordt gedrukt"
                },
                soundVolume: {
                    label: "Geluidsniveau",
                    description: "Volume van aan/uit-geluid (0 = uit)"
                },
                showConfirmationModal: {
                    label: "Bevestigingsvenster tonen",
                    description: "Toon venster om de snelkoppeling te herinneren"
                }
            },
            switch: {
                note: "U kunt deze instelling later opnieuw inschakelen",
                disable: "Bevestigingsvenster uitschakelen?"
            },
            shortcut: "Dit zal alle teksten censureren! Onthoud de snelkoppeling om dit uit te schakelen:"
        },
        devCompanion: {
            name: "OntwikkelaarCompanion",
            description: "Plug-in voor ontwikkelaarsassistent. Als je ziet dat iets niet werkt of zich vreemd gedraagt ​​(hoogstwaarschijnlijk een bug), rapporteer het dan aan MutanPlex, tag het of dm het, bedankt!",
            reconnect: "Maak opnieuw verbinding",
            option: {
                notifyOnAutoConnect: {
                    label: "Melding bij automatisch verbinden",
                    description: "Melding weergeven wanneer Dev Companion automatisch verbinding maakt?"
                },
                usePatchedModule: {
                    label: "Gebruik Patchmodule",
                    description: "Reageer bij verwijderingsverzoeken met de bestaande gepatchte module (indien gepatcht) in plaats van het origineel."
                },
                reloadAfterToggle: {
                    label: "Na herinstallatie",
                    description: "Installeer opnieuw nadat u de opdracht voor het uitschakelen/inschakelen van de plug-in hebt ontvangen."
                }
            },
            toast: {
                title: "Ontwikkelaar Companion verbonden",
                connected: "verbonden met WebSocket",
                disconnected: "Dev Companion verbinding verbroken",
                error: "Dev Companion-fout",
                reload: "Herinstallatie vereist",
                failed: "Kan afhankelijkheden niet initialiseren: {{failures}}",
                close: "Kwartaal",
                stopping: "Fout bij het stoppen van de plug-in {{plugin}}",
                starting: "Fout bij het initialiseren van de plug-in {{plugin}}",
                noMessage: "Geen foutmelding",
                noReason: "Reden niet opgegeven"
            }
        },
        disableCallIdle: {
            name: "SchakelCallIdle uit",
            description: "Schakelt uit dat u na 3 minuten automatisch uit de DM-spraakoproep wordt verwijderd en naar het AFK-spraakkanaal wordt verplaatst."
        },
        disableCameras: {
            name: "Camera's uitschakelen",
            description: "Schakelt camera's tijdens oproepen standaard uit"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Schakelt de Discord-ontwikkelaarsbanner in die Build-ID-informatie weergeeft.",
            about: "Discord Developer Banner-formaat. U kunt de volgende variabelen gebruiken:",
            preview: "Voorbeeld:",
            empty: "Formaat mag niet leeg zijn.",
            variables: {
                discord: {
                    title: "Onenigheidsvariabelen",
                    icon: "Onenigheid icoon",
                    banner: "Pictogram voor de banner van de ontwikkelaar",
                    channel: "Discord-buildkanaal (bijv. Stabiel)",
                    build: "Discord-buildnummer (bijvoorbeeld 123456)",
                    hash: "Discord build-hash (bijvoorbeeld 123456)"
                },
                plexcord: {
                    title: "Plexcord-variabelen",
                    icon: "Plexcord-pictogram",
                    name: "Plexcord-naam",
                    version: "Plexcord-versie (bijvoorbeeld 1.0.0)",
                    hash: "Plexcord-structuurhash (bijv. 123456)",
                    platform: "Platform waar Plexcord op draait (bijv. Dev Build)"
                },
                plextron: {
                    title: "Aangepaste variabelen van Plextron",
                    hashShort: "Plextron hasj met korte structuur (bijv. 123456789)",
                    platformType: "Platformtype waar Plextron op draait (bijv. Dev Build)"
                },
                client: {
                    title: "Klantvariabelen",
                    icon: "bureaubladpictogram",
                    name: "Klantnaam (bijvoorbeeld Discord Canary)",
                    version: "Clientversie (bijvoorbeeld 1.0.0)",
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
                    newline: "nieuwregel karakter"
                }
            }
        },
        dontFilterMe: {
            name: "Filter mij niet",
            description: "Waarschuwt u als uw bericht een term bevat die op de gereedlijst voor automatische moderatie staat",
            alert: {
                title: "Wacht even!",
                content: "Uw bericht bevat een term die op de gereedlijst voor automatische moderatie staat. (Term '{{trigger}}')",
                content2: "Er is een grote kans dat uw bericht wordt geblokkeerd en verwerkt door een servermoderator.",
                confirm: "Hoe dan ook indienen",
                cancel: "Annuleren"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Rondt relatieve tijdstempels altijd naar beneden af, zodat 7,6 jaar 7 jaar wordt in plaats van 8 jaar"
        },
        dragFavoriteEmotes: {
            name: "Sleep FavorietenEmotes",
            description: "Voegt een drag-and-drop-functie toe om de volgorde van favoriete emoji's te wijzigen"
        },
        dragify: {
            name: "Versleep",
            description: "Sleep gebruikers, kanalen of presentatoren naar de chat om vermeldingen of uitnodigingen toe te voegen.",
            option: {
                userOutput: {
                    label: "Gebruikersuitvoer",
                    description: "Uitvoer van gebruikersuitval.",
                    mention: "vermeld niet",
                    id: "Gebruikersidentiteit (ID)"
                },
                channelOutput: {
                    label: "Kanaaluitgang",
                    description: "Uitgang kanaalvrijgave.",
                    mention: "#kanaal vermelding",
                    link: "Kanaalverbinding",
                },
                inviteExpireAfter: {
                    label: "Uitnodigingsduur",
                    description: "De geldigheidsduur van de uitnodigingslink.",
                    never: "Nooit",
                    thirtyMinutes: "30 minuten",
                    oneHour: "1 moment",
                    sixHours: "6 momenten",
                    twelveHours: "12 momenten",
                    oneDay: "1 dag",
                    sevenDays: "7 dagen"
                },
                inviteMaxUses: {
                    label: "Maximaal aantal toepassingen",
                    description: "Maximale gebruikslimiet van de uitnodiging.",
                    noLimit: "Geen grenzen",
                    one: "1 Gebruik",
                    five: "5 Gebruik",
                    ten: "10 Gebruik",
                    twentyFive: "25 Gebruik",
                    fifty: "50 toepassingen",
                    hundred: "100 toepassingen"
                },
                inviteTemporaryMembership: {
                    label: "Bied tijdelijk lidmaatschap aan",
                    description: "Het verleent tijdelijk lidmaatschap aan de genodigden.",
                },
                reuseExistingInvites: {
                    label: "Hergebruik bestaande uitnodiging",
                    description: "Het gebruikt de bestaande uitnodiging in plaats van een nieuwe te maken."
                },
                allowChatBodyDrop: {
                    label: "Sta toe dat u naar de chattekst gaat",
                    description: "Hiermee kunt u tekst rechtstreeks in het chatgebied plaatsen om deze toe te voegen."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify kon de bewerking niet uitvoeren.",
                },
                invite: {
                    created: "De uitnodiging is gemaakt.",
                    unable: "Kan geen uitnodiging maken.",
                    noChannel: "Er zijn geen kanalen beschikbaar om een ​​uitnodiging aan te maken.",
                }
            },
            ghost: {
                user: "Gebruiker",
                server: "Presentator",
                dm: "Directe berichten",
                badge: {
                    channel: "kanaal",
                    thread: "titel",
                    voice: "zo",
                    forum: "forum",
                    media: "media",
                    announcement: "aankondiging",
                    dm: "dm",
                    user: "gebruiker",
                    server: "presentator"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Markeer en inspecteer eenvoudig items.",
            modal: {
                recording: "Opnemen...",
                reset: "opnieuw instellen"
            },
            option: {
                keybind: {
                    label: "Sleuteltoewijzing",
                    description: "Schakel markeerstift in"
                },
                showClasses: {
                    label: "Klassen weergeven",
                    description: "Toont de CSS-klassenamen van het element in de tooltip"
                },
                showId: {
                    label: "Toon identiteitsbewijs",
                    description: "Geeft het ID-attribuut van het element weer in de tooltip"
                },
                showFont: {
                    label: "Lettertype weergeven",
                    description: "Geeft de berekende lettertypefamilie en -grootte weer"
                },
                showPadding: {
                    label: "Opvulling tonen",
                    description: "Toont de interne afstandswaarden van het element"
                },
                showMargin: {
                    label: "Toon buiten marge",
                    description: "Toont de waarden van de buitenruimte van het element"
                },
                showBorderRadius: {
                    label: "Randrondheid weergeven",
                    description: "Geeft de randradiuswaarden van het element weer"
                },
                showPosition: {
                    label: "Toon locatie",
                    description: "Toont het CSS-positietype en de z-indexwaarde van het element"
                },
                showDisplay: {
                    label: "Toon weergave",
                    description: "Toont het weergavetype van het element samen met de flex- of grid-eigenschappen"
                }
            },
            toast: {
                copied: {
                    color: "Kleur gekopieerd naar klembord!",
                }
            }
        },
        exitSounds: {
            name: "AfsluitenGeluiden",
            description: "Wanneer u het audiokanaal verlaat, klinkt er een geluid via het audiopaneel.",
            button: "Instellen als globaal uitgangsgeluid",
            toast: {
                failedToPlay: "Christus nee! Er is iets misgegaan."
            },
            option: {
                soundGuildId: {
                    label: "Voice Server-identiteit (ID)",
                    description: "Selecteer de server waarop de audio zich bevindt.",
                    placeholder: "Kies een server..."
                },
                soundId: {
                    label: "Stemidentiteit (ID)",
                    description: "Voer de ID in van het geluid dat u wilt afspelen.",
                    placeholder: "Voer de stem-ID in..."
                }
            }
        },
        experiments: {
            name: "Experimenten",
            description: "Biedt toegang tot Experimenten en andere functies die alleen voor ontwikkelaars beschikbaar zijn in Discord!",
            modal: {
                about: {
                    title: "Meer informatie",
                    body: "Je kunt de ontwikkelaarstools van Discord openen met {{key}}"
                },
                warning: {
                    title: "Aandacht!!",
                    body: "Experimenten zijn niet-uitgebrachte Discord-functies. Het kan zijn dat ze niet werken, of uw client zelfs kapot maken of ervoor zorgen dat uw account wordt uitgeschakeld.",
                    notReponsible: "Gebruik experimenten alleen als je weet wat je doet. Plexcord is niet verantwoordelijk voor eventuele schade die kan ontstaan ​​door het mogelijk maken van experimenten.",
                    useAtOwnRisk: "Als je niet weet wat een experiment doet, negeer het dan. Vraag ons niet wat ze doen, wij weten het waarschijnlijk ook niet.",
                    serverSideFeatures: "Nee, u kunt geen functies op de server gebruiken, zoals het aanvinken van het vakje 'Verzenden naar client'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Werkbalk Ontwikkelaarsmenu",
                    description: "Vervangt de help-knop (?) op de werkbalk (rechtsboven in de chat) door het ontwikkelaarsmenu van Discord"
                }
            }
        },
        exportMessages: {
            name: "Berichten exporteren",
            description: "Hiermee kunt u berichten naar bestanden exporteren: één bericht, alle berichten van een gebruiker of alle berichten van een kanaal",
            option: {
                maxMessages: {
                    label: "Maximale boodschap",
                    description: "Maximaal aantal over te dragen berichten (0 = onbeperkt)"
                },
                includeAttachments: {
                    label: "Voeg bijlagen toe",
                    description: "Voeg bijlagegegevens toe aan overdrachten"
                },
                includeEmbeds: {
                    label: "Embedleri Dahil Et",
                    description: "Voeg insluitinformatie toe aan overdrachten"
                },
                includeReactions: {
                    label: "Inclusief reacties",
                    description: "Neem reactie-informatie op in overdrachten"
                },
                includeComponents: {
                    label: "Componenten opnemen",
                    description: "Neem componentinformatie op in de import"
                }
            },
            message: {
                invalid: "Ongeldig bericht - geen auteur",
                unknownUser: "Onbekende gebruiker",
                botEmbed: "Bot-insluitingsbericht",
                attachments: "bijlagen",
                unknown: "Onbekend",
                noUrl: "geen URL",
                embeds: "Embedler",
                title: "Titel",
                description: "Uitleg",
                url: "URL",
                footer: "Altbilgi",
                author: "Schrijver",
                fields: "Velden",
                components: "Componenten",
                component: "Onderdeel",
                interactiveElement: "Interactief element",
                reactions: "Reacties",
                errorFormatting: "Fout bij het formatteren van bericht",
                unknownError: "onbekende fout",
                header: "{{titlePrefix}} {{displayName}}, {{channelName}} kanalında",
                from: "Berichten -",
                direct: "Directe berichten",
                exported: "Exportdatum",
                total: "Totaal aantal berichten"
            },
            toast: {
                export: {
                    title: "Berichten exporteren",
                    body: "Het exporteren van berichten is mislukt"
                },
                noMessages: {
                    title: "Berichten exporteren",
                    notFoundUser: "Geen berichten gevonden voor deze gebruiker",
                    notFoundChannel: "Geen berichten gevonden in dit kanaal"
                },
                failed: {
                    title: "Berichten exporteren",
                    body: "Er is een fout opgetreden tijdens het exporteren van berichten"
                },
                userNotFound: {
                    title: "Berichten exporteren",
                    body: "Gebruiker niet gevonden"
                },
                complete: {
                    title: "Exporteren voltooid",
                    saved: "Bestand opgeslagen",
                    downloaded: "Bestand gedownload",
                    messages: "bericht"
                }
            },
            context: {
                exportMessage: "Exporteer dit bericht",
                exportAll: "Exporteer alle berichten van {{user}}",
                user: "Gebruiker",
                exportAllChannel: "Exporteer alle berichten van het kanaal"
            }
        },
        expressionCloner: {
            name: "ExpressieCloner",
            description: "Hiermee kunt u Emoji's en stickers naar uw eigen server klonen (klik met de rechtermuisknop)",
            modal: {
                title: "Eigennaam",
                invalidName: "De naam moet tussen 2 en 32 tekens lang zijn en mag alleen alfanumerieke tekens bevatten"
            },
            toast: {
                success: "{{name}} is met succes gekloond naar de {{gilde}}-server!",
                yourServer: "jouw server",
                failed: "Klonen mislukt:",
                console: "Er is iets misgegaan (controleer de console!)"
            },
            context: {
                clone: "{{type}} Kloon",
                cloneName: "{{data}} Kloon"
            }
        },
        f8break: {
            name: "F8 Pauze",
            description: "Wanneer DevTools (+ breakpoints) geopend is, pauzeert het indrukken van F8 de client."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Hiermee kun je nep-emoji's/stickers verzenden, nitro-thema's gebruiken en streamen in nitro-kwaliteit",
            option: {
                enableEmojiBypass: {
                    label: "Schakel Emoji overslaan in",
                    description: "Maakt het verzenden van nep-emoji mogelijk (omzeilt ook het ontbreken van toestemming om aangepaste emoji te gebruiken)"
                },
                emojiSize: {
                    label: "Emoji-grootte",
                    description: "Formaat dat moet worden gebruikt bij het verzenden van emoji's"
                },
                transformEmojis: {
                    label: "Transformeer emoji's",
                    description: "Bepaalt of nep-emoji's worden omgezet in echte emoji's"
                },
                enableStickerBypass: {
                    label: "Schakel Sticker overslaan in",
                    description: "Maakt het verzenden van valse stickers mogelijk (omzeilt ook het ontbreken van toestemming om stickers te gebruiken)"
                },
                stickerSize: {
                    label: "Stickergrootte",
                    description: "Formaat te gebruiken bij het versturen van de sticker"
                },
                transformStickers: {
                    label: "Stickers converteren",
                    description: "Bepaalt of nepstickers worden omgezet in echte stickers"
                },
                transformCompoundSentence: {
                    label: "Samengestelde zinnen converteren",
                    description: "Bepaalt of nep-emoji en stickers in samengestelde zinnen (zinnen die meer inhoud bevatten dan alleen de nep-emoji of stickerlink) worden geconverteerd"
                },
                enableStreamQualityBypass: {
                    label: "Overslaan van uitzendkwaliteit inschakelen",
                    description: "Maakt streaming in nitrokwaliteit mogelijk"
                },
                useStickerHyperLinks: {
                    label: "Gebruik stickerbruggen",
                    description: "Bepaalt of een hyperlink moet worden gebruikt bij het verzenden van valse stickers"
                },
                useEmojiHyperLinks: {
                    label: "Gebruik Emoji-bruggen",
                    description: "Bepaalt of hyperlinks moeten worden gebruikt bij het verzenden van nep-emoji's"
                },
                hyperLinkText: {
                    label: "Hypertekst",
                    description: "De tekst die in de hyperlink moet worden gebruikt. {{NAME}} wordt vervangen door de emoji/stickernaam."
                },
                disableEmbedPermissionCheck: {
                    label: "Schakel de controle van machtigingen voor insluiten uit",
                    description: "Bepaalt of de controle op insluitingsrechten moet worden uitgeschakeld bij het verzenden van nep-emoji's en stickers"
                }
            },
            modal: {
                sticker: "Dit is een FakeNitro-sticker en ziet eruit als een echte sticker, alleen voor jou. Het verschijnt als een link voor degenen die de plug-in niet gebruiken.",
                emoji: "Dit is een FakeNitro-emoji en het ziet eruit als een echte emoji, alleen voor jou. Het verschijnt als een link voor degenen die de plug-in niet gebruiken."
            },
            alert: {
                notice: {
                    title: "Aandacht!",
                    body: "Je probeert een bericht te verzenden/bewerken dat een FakeNitro-emoji of sticker bevat, maar je hebt geen toestemming om links in dit kanaal in te sluiten. Weet u zeker dat u dit bericht wilt verzenden? Uw FakeNitro-items verschijnen alleen als links.",
                    footer: "U kunt deze waarschuwing uitschakelen in de FakeNitro-instellingen",
                    confirm: "Hoe dan ook indienen",
                    cancel: "Annuleren",
                    secondaryConfirm: "Laat het niet meer zien"
                },
                apngSticker: {
                    title: "Aandacht!",
                    body: "Je kunt dit bericht niet verzenden omdat het een geanimeerde FakeNitro-sticker bevat en je geen toestemming hebt om bestanden toe te voegen aan dit kanaal. U moet de sticker verwijderen om door te gaan."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThema's",
            description: "Biedt profielthema's; Het voegt verborgen kleuren toe aan de bion dankzij de onzichtbare 3y3-codering.",
            button: {
                copy: "3y3 Kopie"
            },
            modal: {
                usage: "Gebruik",
                preview: "Voorbeeld",
                intro: "Zodra u deze plug-in activeert, ziet u aangepaste kleuren op de profielen van andere mensen die compatibele plug-ins gebruiken.",
                setColor: "Om uw eigen kleuren in te stellen:",
                step1: "• kies uw kleuren met behulp van de onderstaande kleurkiezers",
                step2: "• Klik op de knop {{copy}}",
                step3: "• plak de onzichtbare tekst ergens in het gedeelte Over",
                pickers: "Kleurkiezers",
                primary: "Primair",
                accent: "Nadruk"
            },
            option: {
                nitroFirst: {
                    label: "Nitro eerst",
                    description: "Standaardkleurbron als beide beschikbaar zijn",
                    nitro: "Nitro-kleuren",
                    fake: "valse kleuren"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThema's En Effecten",
            description: "Hiermee kunt u profielthema's en profieleffecten toevoegen; Dankzij onzichtbare 3y3-codering worden verborgen kleuren en effecten aan de biografie toegevoegd.",
            option: {
                prioritizeNitro: {
                    label: "Geef prioriteit aan Nitro",
                    description: "Middel om prioriteiten te stellen",
                    nitro: "Nitro",
                    aboutMe: "over mij"
                },
                hideBuilder: {
                    label: "Schepper verbergen",
                    description: "Verberg FPTE Creator op de instellingenpagina's Gebruikersprofiel en Serverprofiel"
                }
            },
            modal: {
                primary: "Primair",
                accent: "Nadruk",
                effect: "Effect",
                usage: {
                    title: "Gebruik",
                    intro: "Zodra u deze plug-in activeert, ziet u aangepaste themakleuren en effecten op de profielen van andere mensen die deze plug-in gebruiken.",
                    setColor: "Om uw eigen kleuren en effect in te stellen:",
                    step1: "Ga naar profielinstellingen",
                    step2: "Gebruik FPTE Creator om de kleuren en effecten van het profielthema te kiezen",
                    step3: "Klik op de knop {{copy}}",
                    step4: "Plak onzichtbare tekst waar je maar wilt in je biografie"
                }
            },
            toast: {
                copied: "FPTE gekopieerd naar klembord!",
                empty: "FPTE-generator is leeg; Er valt niets te kopiëren!"
            },
            button: {
                copyFPTE: "FPTE-kopie",
                reset: "opnieuw instellen",
                preview: "FPTE Creator-voorbeeld",
                buildBackwards: "Creëer achterwaarts compatibele FPTE",
                moreCharacters: "Er zullen meer karakters worden gebruikt"
            }
        },
        fastDeleteChannels: {
            name: "Kanalen snel verwijderen",
            description: "Voegt een prullenbakpictogram toe om kanalen te verwijderen",
            option: {
                keyBind: {
                    label: "Sneltoets",
                    description: "De sleutel om de prullenbak te openen en te sluiten."
                },
                reqCtrl: {
                    label: "Ctrl-toets vereist",
                    description: "Vereist het ingedrukt houden van de Ctrl-toets om de prullenbak te openen."
                },
                reqShift: {
                    label: "Shift-toets vereist",
                    description: "Om de prullenbak te openen, moet u de Shift-toets ingedrukt houden."
                },
                reqAlt: {
                    label: "Alt-toets vereist",
                    description: "Om de prullenbak te openen, moet u de Alt-toets ingedrukt houden."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavorieteEmojiEerste",
            description: "Het plaatst je favoriete emoji bovenaan de lijst met automatisch aanvullen van emoji's en biedt ook emoji-bijnamen.",
            option: {
                aliases: {
                    label: "Bijnamen",
                    description: "Beheer uw emoji-bijnamen."
                },
                clearAll: {
                    label: "Alles wissen",
                    description: "Verwijdert alle bijnamen."
                }
            },
            modal: {
                clear: {
                    title: "Verwijder alle aliassen",
                    description: "Hiermee worden alle emoji-bijnamen die je hebt opgeslagen verwijderd.",
                    confirm: "Verwijder alle bijnamen"
                },
                set: {
                    title: "Bijnaam instellen",
                    description: "Stel een bijnaam in voor {{emoji}}",
                    placeholder: "Bijnaam, bijv. 'Vrolijk'",
                    save: "Redden",
                    error: "Dubbele bijnaam"
                }
            },
            toast: {
                set: "Bijnaam ingesteld voor {{emoji}}",
                clearAll: "Alle emoji-bijnamen verwijderd",
                failedDeleted: "Het verwijderen van aliassen is mislukt",
                removed: "Alias ​​voor {{alias}} verwijderd",
                failedRemove: "Het verwijderen van de alias is mislukt",
                duplicate: "Dubbele bijnaam",
                failedSave: "Bijnaam kon niet worden geregistreerd"
            },
            button: {
                edit: "Bijnaam bewerken",
                set: "Bijnaam instellen"
            }
        },
        favoriteGifSearch: {
            name: "FavorietGifSearch",
            description: "Voegt een zoekbalk toe aan favoriete GIF's.",
            placeholder: "Zoek naar favoriete GIF's",
            option: {
                searchOption: {
                    label: "Zoekoptie",
                    description: "Welk deel van de URL u wilt doorzoeken",
                    url: "Alle URL's",
                    path: "Alleen pad (/somegif.gif)",
                    hostandpath: "Host en pad (tenor.com somegif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavorietAlles",
            description: "Favoriet elke afbeelding"
        },
        fileDownloadButton: {
            name: "BestandDownloadKnop",
            description: "Voegt een downloadknop toe aan de rechterbovenhoek van bestanden"
        },
        findReply: {
            name: "Vind antwoord",
            description: "Springt naar het oudste antwoord op een bericht in een kanaal (waardoor het gemakkelijker wordt om eerdere gesprekken bij te houden).",
            context: {
                jump: "Ga naar Antwoord"
            },
            toast: {
                navigate: "Gebruik het onderste paneel om door de antwoorden te navigeren.",
                container: "Containerelement niet gevonden.",
                couldntFind: "Geen antwoordbericht gevonden."
            },
            option: {
                includePings: {
                    label: "Vermeldingen opnemen",
                    description: "Er wordt ook gezocht naar berichten die rechtstreeks naar de auteur zijn verzonden."
                },
                includeAuthor: {
                    label: "Inclusief auteur",
                    description: "Zoekt niet alleen naar antwoorden op het specifieke bericht, maar ook op de auteur in het algemeen"
                },
                hideButtonIfNoReply: {
                    label: "Knop verbergen als er geen reactie is",
                    description: "Verbergt de knop als er geen reactie is op het bericht"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Verwijdert de ruimte tussen codeblokken en de tekst eronder"
        },
        fixFileExtensions: {
            name: "Bestandsextensies repareren",
            description: "Corrigeert bestandsextensies door ze, indien mogelijk, te hernoemen naar een compatibel ondersteund formaat"
        },
        fixImagesQuality: {
            name: "FixAfbeeldingenKwaliteit",
            description: "Verbetert de kwaliteit van afbeeldingen door het gebruik van de originele bron te forceren",
            option: {
                originalImagesInChat: {
                    label: "Toon originele afbeeldingen in de chat",
                    description: "Toon ook de originele afbeelding in Chat. WAARSCHUWING: Lees de bovenstaande waarschuwingen"
                }
            },
            modal: {
                about: {
                    title: "Het standaardgedrag is als volgt:",
                    body: "&mdash; Geoptimaliseerde afbeeldingen met volledige resolutie worden in de chat geladen.",
                    body2: "&mdash; In het afbeeldingsvenster (afbeeldingsmodaal) wordt de originele afbeelding geladen.",
                    body3: "Je kunt ook de originele afbeelding in de chat inschakelen, maar houd rekening met de volgende kanttekeningen:",
                    warning: "&mdash; Geanimeerde afbeeldingen (GIF, WebP, enz.) in de chat zullen altijd geanimeerd zijn, zelfs als de applicatie focus heeft.",
                    warning2: "&mdash; Dit kan prestatieproblemen veroorzaken."
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Er is een oplossing gevonden voor het feit dat Spotify-embedden te luid zijn, zodat u het volume kunt aanpassen",
            option: {
                volume: {
                    label: "Geluidsniveau",
                    description: "Volumepercentage dat moet worden aangepast voor Spotify-insluitingen. Boven de 10% zou te hoog zijn"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Omzeilt het blokkeren van YouTube-video's voor weergave in Discord (bijvoorbeeld door UMG)"
        },
        followUser: {
            name: "VolgGebruiker",
            description: "Voegt een volgoptie toe aan het gebruikerscontextmenu; zorgt ervoor dat u altijd op hetzelfde spraakkanaal zit",
            indicatorTooltip: "{{user}} wordt gevolgd (klik om handmatig te activeren, klik met de rechtermuisknop om niet meer te volgen)",
            unknownUser: "Onbekende gebruiker",
            option: {
                executeOnFollow: {
                    label: "Solliciteer als je volgt",
                    description: "Wanneer u een gebruiker volgt, zorg er dan voor dat deze zich op hetzelfde spraakkanaal bevindt"
                },
                onlyManualTrigger: {
                    label: "Alleen handmatige activering",
                    description: "Alleen activeren wanneer op de indicator wordt geklikt"
                },
                followLeave: {
                    label: "Wanneer gevolgd vertrekt",
                    description: "Als de gevolgde gebruiker vertrekt, ga dan ook weg"
                },
                autoMoveBack: {
                    label: "Automatisch teruggaan",
                    description: "Schakel automatisch terug naar het spraakkanaal van de gevolgde gebruiker wanneer u zich verplaatst"
                },
                followUserId: {
                    label: "Gevolgde gebruikers-ID",
                    description: "Gevolgde gebruikers-ID"
                },
                channelFull: {
                    label: "Kanaal vol",
                    description: "Als het kanaal niet langer vol is, probeer je daar dan naartoe te verplaatsen"
                }
            },
            toast: {
                channelFull: "kanaal vol",
                newVc: "De gevolgde gebruiker is overgeschakeld naar een nieuw spraakkanaal",
                insufficientPermissions: "Onvoldoende autorisatie om het spraakkanaal te betreden",
                sameVc: "Je bent al op hetzelfde kanaal",
                disconnect: "Gevolgde gebruiker naar links, verbinding verbroken",
                notFollowing: "De gevolgde gebruiker is vertrokken, maar je hebt het volgen niet stopgezet",
                notVc: "De gevolgde gebruiker bevindt zich niet op het spraakkanaal"
            },
            context: {
                follow: "Volgen",
                unfollow: "Ontvolgen"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Installeert elk lettertype via Google Fonts",
            option: {
                selectedFont: {
                    label: "Geselecteerd lettertype",
                    description: "Momenteel geselecteerd lettertype"
                },
                fontSearch: {
                    label: "Lettertype zoeken",
                    description: "Zoek en selecteer lettertypen via Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Toepassen op codeblokken",
                    description: "Pas lettertype toe op codeblokken"
                }
            },
            toast: {
                failedLoad: "Kan lettertype niet laden"
            },
            modal: {
                settings: {
                    title: "Google Fonts'ta Ara",
                    description: "Kies een lettertype dat u wilt toepassen",
                    placeholder: "Lettertypen zoeken...",
                    previewText: "De in pyjama geklede patiënt vertrouwde de vette chauffeur al snel",
                    authors: "door {{auteurs}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Zelfs als de server groot is, wordt de kroon van de servereigenaar geforceerd weergegeven naast de gebruikersnamen."
        },
        forwardAnywhere: {
            name: "Overal vooruit",
            description: "Als het doorsturen mislukt, wordt het bericht als een normaal bericht verzonden; Het maakt ook de overdracht van NSFW-inhoud mogelijk.",
            option: {
                forwardPreface: {
                    label: "Doorstuurvoorvoegsel",
                    description: "Welke verklaring moet aan het begin van het verzonden bericht worden toegevoegd?"
                }
            },
            context: {
                attachments: "bijlagen",
                forwarded: "Doorgestuurd van:"
            }
        },
        freaky: {
            name: "Bizar",
            description: "Met het commando /freaky kunt u uw bericht in een vreemd lettertype verzenden.",
            command: {
                freaky: "Het was raar.",
                message: "Stuur uw bericht in een vreemd lettertype"
            },
            option: {
                addFreakyEnding: {
                    label: "Voeg een vreemd einde toe",
                    description: "Voeg aan het einde 👅 of ❤️ toe"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequente snelle switcher",
            description: "Het vervangt en filtert de resultaten in het snelwisselvenster met de kanalen die u het vaakst gebruikt."
        },
        friendCloud: {
            name: "VriendCloud",
            description: "Voegt een /friendcloud-opdracht toe om de gebruikers te visualiseren waarmee u het meest communiceert.",
            command: {
                friendcloud: {
                    description: "Visualiseer uw vriendenwolk",
                    count: "Aantal weer te geven gebruikers",
                    mustHigher: "Het getal moet 1 of hoger zijn!",
                    noAffinities: "Geen nabijheidsgegevens gevonden. Controleer uw [privacy-instellingen](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Er zijn geen geldige gebruikers gevonden in de proxy's. Controleer uw [privacy-instellingen](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Afbeelding kon niet worden gemaakt: c"
                }
            }
        },
        friendCodes: {
            name: "VriendCodes",
            description: "Genereer vriendcodes om eenvoudig vrienden toe te voegen",
            card: {
                expires: "Vervaldatum: <t:{{expiration}}:R> • {{uses}}/{{maxUses}} gebruik",
                copy: "kopiëren",
                copied: "Gekopieerd!",
                codes: "Uw vriendschapscodes",
                count: "Vriendcodes - {{invites}}",
                create: "Vriendschapscode genereren",
                revoke: "Annuleer alle vriendcodes",
                loading: "Laden...",
                dontHave: "Je hebt geen vriendcodes."
            }
        },
        friendInvites: {
            name: "VriendUitnodigingen",
            description: "Maak en beheer koppelingen voor vrienduitnodigingen met Slash-opdrachten (/vriendenuitnodiging maken, /vriendenuitnodigingen bekijken, /vriendenuitnodigingen intrekken).",
            command: {
                create: {
                    description: "Genereert een vrienduitnodigingslink.",
                    message: "discord.gg/{{code}}`\n· Verloopt: <t:{{expiration}}:R>\n· Maximaal gebruik: {{uses}}"
                },
                view: {
                    description: "Bekijk alle gemaakte vrienduitnodigingslinks.",
                    message: "_discord.gg/{{code}}_\n· Verloopt: <t:{{expiration}}:R> \n· Aantal toepassingen: {{uses}}/{{maxUses}}",
                    noInvites: "Je hebt geen actieve uitnodigingslink voor vrienden."
                },
                revoke: {
                    description: "Annuleert alle gemaakte vrienduitnodigingslinks.",
                    message: "Alle uitnodigingslinks voor vrienden zijn geannuleerd."
                }
            }
        },
        friendshipRanks: {
            name: "Vriendschapsrangen",
            description: "Voegt badges toe die laten zien hoe lang je al bevriend bent met een gebruiker.",
            badge: {
                sprout: {
                    name: "Spruit",
                    description: "Je vriendschap bloeit gewoon op."
                },
                blooming: {
                    name: "Bloeiend",
                    description: "Je vriendschap verbetert! (1 maand)"
                },
                burning: {
                    name: "Blazend",
                    description: "Je vriendschap heeft zijn hoogtepunt bereikt. (3 maanden)"
                },
                fighter: {
                    name: "Vechter",
                    description: "Je vriendschap is sterk. (6 maanden)"
                },
                star: {
                    name: "Ster",
                    description: "Jullie vriendschap bestaat al heel lang. (1 jaar)"
                },
                royal: {
                    name: "Resultaat",
                    description: "Jouw vriendschap heeft elke uitdaging overwonnen – 2 jaar!"
                },
                besties: {
                    name: "Beste vriend",
                    description: "Hoe bereik je dit??? (5 jaar)"
                }
            }
        },
        friendsSince: {
            name: "Vrienden Sinds",
            description: "In de pop-up wordt weergegeven wanneer de gebruiker bevriend is met iemand.",
            section: "Datingdatum"
        },
        friendTags: {
            name: "VriendTags",
            description: "Als u uw zoekopdracht begint met &, kunt u filteren op aangepaste tags in het snelmenu.",
            modal: {
                name: "Naam",
                users: "Gebruikers (gescheiden door komma's)",
                userlist: "Gebruikerslijst (klik op een gebruiker om te verwijderen)",
                remove: "Verwijderen",
                add: "Toevoegen",
                tag: "Ticket",
                removeFrom: "Verwijderen uit:",
                addTo: "Toevoegen aan:"
            },
            option: {
                tagConfiguration: {
                    label: "Tagconfiguratie",
                    description: "Component voor tagconfiguratie"
                }
            }
        },
        fullSearchContext: {
            name: "Volledige zoekcontext",
            description: "Het maakt het berichtcontextmenu in de berichtzoekresultaten compleet met alle opties die u zou verwachten."
        },
        fullUserInChatbox: {
            name: "VolledigeGebruikerInChatbox",
            description: "Voegt extra functionaliteit toe, zoals links/rechts klikken op de gebruikerstag in de chatbox."
        },
        fullVCPFP: {
            name: "VolledigVCPFP",
            description: "Zorgt ervoor dat avatars de hele voicechatbox kunnen bestrijken.",
            option: {
                useServerProfileAvatars: {
                    label: "Gebruik serverprofielavatars",
                    description: "Gebruikt avatars van presentatorprofielen in voicechatboxen (indien beschikbaar)"
                }
            }
        },
        gameActivityToggle: {
            name: "SpelActiviteitToggle",
            description: "Voegt een schakelaar toe aan de gebruikerspop-up om uw gameactiviteit weer te geven of te verbergen.",
            tooltip: "Wijzig spelgebeurtenis",
            gameActivity: {
                enabled: "Gamegebeurtenis ingeschakeld",
                disabled: "Gamegebeurtenis uitgeschakeld"
            },
            option: {
                oldIcon: {
                    label: "oud icoon",
                    description: "Gebruik de oude pictogramstijl vóór het herontwerp van het Discord-pictogram"
                },
                location: {
                    label: "Vrouwen",
                    description: "Waar de spelgebeurtenissleutel moet worden weergegeven",
                    panel: "Naast Dempen/Microfoon uit",
                    toolbox: "Plexcord in de Gereedschapskist"
                }
            }
        },
        ghosted: {
            name: "Spookachtig",
            description: "Er verschijnt een schattig spookje naast mensen van wie je de DM's niet hebt beantwoord.",
            modal: {
                title: "Ghosted-gebruikers",
                no: "Geen Ghosted-gebruikers",
                unghost: "verwijder de geest",
                unknown: "onbekend",
                unnamedGroup: "Anonieme groep",
                unknownUser: "Onbekende gebruiker",
                clearAll: "Alles wissen",
                noGhost: "Er zijn hier geen geesten!",
                clear: "duidelijk"
            },
            option: {
                showIndicator: {
                    label: "Toon indicator",
                    description: "Toont de spookteller bovenaan de serverlijst."
                },
                showDmIcons: {
                    label: "Toon DM-pictogrammen",
                    description: "Toont spookpictogrammen naast individuele DM's."
                },
                ignoreGroupDms: {
                    label: "Negeer groeps-DM's",
                    description: "Houdt alle groepsberichten uit de spooklijst."
                },
                exemptedChannels: {
                    label: "Vrijgestelde kanalen",
                    description: "Door komma's gescheiden lijst met kanaal-ID's (ID) die niet in de spooklijst worden opgenomen (klik met de rechtermuisknop op een DM-kanaal om de ID te kopiëren)."
                },
                ignoreBots: {
                    label: "Negeer bots",
                    description: "Negeert DM's van bots."
                }
            }
        },
        gifCollections: {
            name: "GifCollectie",
            description: "Hiermee kunt u GIF-collecties maken.",
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
                    gifs: "Klap",
                    created: "Aanmaakdatum",
                    updated: "Laatste update",
                    close: "Kwartaal",
                    rename: "Hernoemen",
                    move: "Verplaats naar collectie",
                    select: "Selecteer de collectie die u wilt verplaatsen"
                },
                gif: {
                    information: "Informatie",
                    added: "Datum toegevoegd",
                    width: "Breedte",
                    height: "Hoogte",
                    close: "Kwartaal"
                }
            },
            option: {
                itemPrefix: {
                    label: "Artikelvoorvoegsel",
                    description: "Voorvoegsel voor GIF-elementen"
                },
                collectionPrefix: {
                    label: "Verzamelvoorvoegsel",
                    description: "Voorvoegsel voor verzamelingen"
                },
                onlyShowCollections: {
                    label: "Alleen collecties tonen",
                    description: "Toon alleen collecties"
                },
                stopWarnings: {
                    label: "Stopwaarschuwingen",
                    description: "Stop verwijderingswaarschuwingen"
                },
                showCopyImageLink: {
                    label: "Toon de optie Afbeeldingslink kopiëren",
                    description: "Toon {{copyImageLink}} in contextmenu's"
                },
                preventDuplicates: {
                    label: "Voorkom terugval",
                    description: "Voorkom dat dezelfde GIF meerdere keren aan een verzameling wordt toegevoegd"
                },
                defaultEmptyCollectionImage: {
                    label: "Standaard lege collectieafbeelding",
                    description: "Afbeelding/GIF om weer te geven als er geen afbeeldingen/GIF's in de collectie aanwezig zijn"
                },
                collectionsSortType: {
                    label: "Sorteertype collectie",
                    description: "Soort collecties sorteren"
                },
                collectionsSortOrder: {
                    label: "Sorteervolgorde collectie",
                    description: "Sorteervolgorde van collecties"
                },
                collectionsSort: {
                    label: "Verzamelingen sorteren",
                    description: "Bepaal hoe u collecties sorteert",
                    title: "Verzamelingen sorteren",
                    sortDescription: "Kies een sortering op basis van uw collecties",
                    sortBy: "Sorteer op",
                    name: "Naam",
                    creationDate: "Aanmaakdatum",
                    modifiedDate: "Gewijzigde datum",
                    ascending: "Groeien",
                    descending: "Afnemend"
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
                    description: "Verzamelingen terugzetten naar de standaardwaarden (verwijdert alle verzamelingen)",
                    button: "Verzamelingen opnieuw instellen"
                }
            },
            toast: {
                copied: "Afbeeldingslink gekopieerd naar klembord!",
                urlCopied: "URL gekopieerd naar klembord!",
                already: "Deze collectie bestaat al",
                alreadyCollection: "Deze GIF bestaat al in de collectie"
            },
            modal: {
                create: {
                    title: "Verzameling maken",
                    name: "Collectienaam",
                    create: "Creëren"
                },
                rename: {
                    title: "Hernoem collectie",
                    name: "Nieuwe collectienaam",
                    warning: "Naam mag niet langer zijn dan 24 tekens",
                    rename: "Hernoemen"
                }
            },
            alert: {
                import: {
                    title: "Weet je het zeker?",
                    body: "Als u collecties importeert, worden bestaande collecties overschreven.",
                    confirm: "Ik ben Aktar",
                    cancel: "Annuleren"
                },
                reset: {
                    title: "Weet je het zeker?",
                    body: "Als u collecties opnieuw instelt, worden alle collecties verwijderd.",
                    confirm: "opnieuw instellen",
                    cancel: "Annuleren"
                },
                delete: {
                    title: "Weet je het zeker?",
                    deleteBody: "Wilt u deze verzameling echt verwijderen?",
                    removeBody: "Wilt u dit item echt verwijderen?",
                    confirm: "Sil",
                    remove: "Verwijderen",
                    cancel: "Annuleren"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Hiermee kunt u GIF's rechtstreeks in de chatbox plakken."
        },
        gifRoulette: {
            name: "GIFRoulette",
            description: "Voegt een opdracht toe die een willekeurige GIF van je favorieten verzendt; Er is een kans van 10% dat u de servereigenaar tagt!",
            command: {
                gifRoulette: {
                    description: "Beproef je geluk en stuur een willekeurige GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Kans om de servereigenaar te taggen",
                    description: "Stelt de kans in dat de servereigenaar wordt getagd op 1 op 10 (yikes!)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Toont de openbare GitHub-opslagplaatsen van de gebruiker op zijn profiel.",
            loading: "Opslagplaatsen worden geladen...",
            option: {
                showStars: {
                    label: "Laat de sterren zien",
                    description: "Toon magazijnsterren"
                },
                showLanguage: {
                    label: "Toon taal",
                    description: "Toon de belangrijkste programmeertaal van repository's"
                },
                showInMiniProfile: {
                    label: "Weergeven in miniprofiel",
                    description: "Toon opslagplaatsen in het miniprofielvenster"
                },
                showRepositoryTab: {
                    label: "Tabblad Repository weergeven",
                    description: "Toon repository-tabblad in profielmodaal (knop op links verbergen indien ingeschakeld)"
                }
            },
            error: {
                error: "Zelfs",
                render: "Fout: GithubRepos kon niet worden weergegeven"
            },
            button: {
                show: "GitHub-opslagplaatsen weergeven",
                repositories: "GitHub-opslagplaatsen",
                more: "Toon meer",
                only: "Toont alleen de beste {{length}}/{{total}}"
            },
            modal: {
                title: "De GitHub-opslagplaatsen van {{user}}",
                repository: "Depo",
                description: "Uitleg",
                language: "Dil",
                stars: "Ster",
                viewOnGitHub: "Bekijk op GitHub",
                close: "Kwartaal"
            }
        },
        googleThat: {
            name: "GoogleDat",
            description: "Voegt een opdracht toe waarmee u een internetzoekverbinding kunt verzenden.",
            command: {
                googleThat: {
                    description: "Dien een zoekmachinelink in",
                    query: "zoekopdracht"
                }
            },
            option: {
                hyperlink: {
                    label: "Brug",
                    description: "Of de ingediende link als hyperlink met de querytag wordt verzonden"
                },
                embed: {
                    label: "Ingesloten inhoud",
                    description: "Of de ingediende link als ingesloten inhoud moet worden weergegeven"
                },
                defaultEngine: {
                    label: "Standaardzoekmachine",
                    description: "Zoekmachine om te gebruiken"
                },
                customEngineURL: {
                    label: "Aangepaste zoekmachine-URL",
                    description: "URL van de zoekmachine die u wilt gebruiken"
                }
            }
        },
        greetStickerPicker: {
            name: "GroetStickerPicker",
            description: "'Wuiven en hallo zeggen!' Als u met de rechtermuisknop op de knop klikt, kunt u de gewenste welkomststicker gebruiken in plaats van de willekeurige.",
            mode: {
                greet: "Hallo",
                message: "Bericht"
            },
            option: {
                greetMode: {
                    label: "Begroetingsmodus",
                    description: "Selecteer de begroetingsmodus",
                    greet: "Begroeting (u kunt slechts 3 keer een begroeting verzenden)",
                    message: "Bericht (je kunt onbeperkt groeten sturen)"
                }
            },
            context: {
                label: "Groetstickerkiezer",
                mode: "Begroetingsmodus",
                stickers: "Groetstickers",
                multi: "Meerdere groeten",
                send: "Stuur Hallo"
            }
        },
        guildPickerDumper: {
            name: "GildePickerDumper",
            description: "Voegt een contextmenu toe waarmee u de emoji en stickers van een server kunt exporteren en downloaden.",
            context: {
                download: {
                    emoji: "Emoji's downloaden",
                    sticker: "Stickers downloaden"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTag-instellingen",
            description: "Voegt instellingen voor servertags toe, zoals het verbergen van servertags of het uitschakelen van de prompt om tags te gebruiken.",
            option: {
                hideTags: {
                    label: "Tags verbergen",
                    description: "Maakt servertags onzichtbaar"
                },
                disableAdoptTagPrompt: {
                    label: "Waarschuwing voor tagclaim sluiten",
                    description: "Schakelt de prompt uit om de servertag te gebruiken (claimen)."
                }
            }
        },
        hideChatButtons: {
            name: "Chatknoppen verbergen",
            description: "Hiermee kunt u chatknoppen verbergen.",
            tooltip: {
                close: "Kwartaal",
                open: "Hongerig"
            },
            option: {
                color: {
                    label: "Kleur",
                    description: "Wordt rood weergegeven wanneer ingeschakeld"
                },
                open: {
                    label: "Open",
                    description: "Standaard ingeschakeld"
                }
            }
        },
        hideMedia: {
            name: "Media verbergen",
            description: "Hiermee kunt u bijlagen en ingesloten inhoud in bepaalde berichten verbergen met een knop die verschijnt als u erover beweegt.",
            show: "Media tonen",
            hide: "Media verbergen",
            hidden: "Media verborgen"
        },
        hideMessages: {
            name: "Verberg berichten",
            description: "Verbergt tijdelijk berichten totdat u opnieuw opstart.",
            button: {
                hide: "verbergen"
            },
            option: {
                hidePopoverButton: {
                    label: "Popover-knop verbergen",
                    description: "Verbergt de knop Verbergen in de berichtenpopover."
                }
            }
        },
        hideServers: {
            name: "Servers verbergen",
            description: "Verbergt servers uit de serverlijst",
            context: {
                hide: "Server verbergen",
                unhide: "Server tonen",
                folder: {
                    hide: "Map verbergen",
                    unhide: "Map tonen"
                }
            },
            option: {
                showIndicator: {
                    label: "Indicatoren tonen",
                    description: "Toon menu onderaan om verborgen servers in de lijst weer te geven"
                },
                guildsList: {
                    label: "Serverlijst",
                    description: "Verwijder verborgen servers"
                },
                resetHidden: {
                    label: "Verborgen servers opnieuw instellen",
                    description: "Verwijder alle verborgen servers uit de lijst",
                    button: "Verborgen servers opnieuw instellen"
                }
            },
            button: {
                hidden: "Verborgen",
                hiddenServers: "Verborgen servers",
                remove: "Verwijderen",
                folder: "Map",
                removeAll: "Alles verwijderen",
                guilds: "Servers",
                noHiddenServers: "Geen verborgen servers"
            }
        },
        holyNotes: {
            name: "Heilige notities",
            description: "Met Holy Notes kunt u berichten opslaan",
            main: "Goed",
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
                deleteNote: "Notu Sil",
                moveNote: "Verplaats notitie",
                moveTo: "Verplaatsen naar {{key}}",
                copyId: "Kopieer identiteitsbewijs"
            },
            modal: {
                error: {
                    generic: "Er is een fout opgetreden bij het verwerken van je cijfers. Controleer de console voor meer informatie.",
                    easter: "Geen notities gevonden. De empathiebanaan is bij jou.",
                    empty: "Er zijn geen notities opgeslagen in dit notitieboekje."
                },
                help: {
                    title: "Hulp",
                    description: "Leer hoe u Heilige Noten gebruikt",
                    addingNotes: "Notities toevoegen",
                    addingNotesText: "Om een ​​notitie toe te voegen, klikt u met de rechtermuisknop op een bericht, wijst u naar 'Notitiebericht' en selecteert u het notitieboekje waaraan u de notitie wilt toevoegen.",
                    prototype: "Prototype",
                    noteMessage: "Met één klik op de knop 'Notitiebericht' wordt het standaard aan het hoofdboek toegevoegd!",
                    deletingNotes: "Niet Silme",
                    deletingNotesText: "Om een ​​notitie te verwijderen, kunt u met de rechtermuisknop klikken en 'Notitie verwijderen' selecteren, of de 'DELETE'-toets op uw toetsenbord ingedrukt houden en op de notitie klikken.",
                    movingNotes: "Een notitie verplaatsen",
                    movingNotesText: "Om een ​​notitie te verplaatsen, klikt u met de rechtermuisknop en selecteert u het notitieblok dat u wilt verplaatsen via de optie 'Notitie verplaatsen'.",
                    jumpToMessage: "Ga naar Bericht",
                    jumpToMessageText: "Om naar het bericht te gaan waartoe een notitie behoort, klikt u met de rechtermuisknop op de notitie en selecteert u 'Ga naar bericht'."
                },
                notebook: {
                    title: "NOTITIEBOEKJE",
                    search: "Zoek een bericht...",
                    options: "Sorteeropties",
                    label: "Sorteermenu",
                    filteredOf: "{{filteredCount}}/{{noteCount}} niet",
                    note: "{{noteCount}} niet",
                    ada: "Oplopend / toegevoegde datum",
                    amd: "Oplopend / Berichtdatum",
                    dda: "Aflopend / toegevoegde datum",
                    dmd: "Aflopend / Berichtdatum",
                    change: "Sortering wijzigen",
                    ascending: "Groeien",
                    descending: "Afnemend",
                    dateAdded: "Datum toegevoegd",
                    messageDate: "Datum bericht"
                },
                create: {
                    title: "Maak een notitieboekje",
                    description: "Voer de naam van het nieuwe notitieblok in",
                    placeholder: "Notitieboekjenaam"
                },
                delete: {
                    title: "{{notebookName}} Silinsin Mi?",
                    description: "{{noteCount}} notitie wordt permanent verwijderd",
                    button: "Sil"
                },
                tabs: {
                    label: "Notebook-tabbladen"
                }
            },
            toast: {
                saved: "Het bericht is succesvol toegevoegd aan {{notebook}}.",
                deleted: "De notitie is succesvol verwijderd uit {{notebook}}.",
                moved: "De notitie is succesvol verplaatst van het notitieboek {{from}} naar het notitieboek {{to}}.",
                exists: "Notitieboekje met de naam {{notebookName}} bestaat al.",
                created: "{{notebookName}} is succesvol aangemaakt.",
                deletedNotebook: "{{notebookName}} is succesvol verwijderd.",
                refreshed: "Avatars zijn succesvol vernieuwd.",
                deletedAll: "Alle notities zijn succesvol verwijderd.",
                imported: "Notities zijn succesvol geïmporteerd.",
                invalid: "Kan notities niet importeren."
            },
            toolbox: {
                action: "Notities openen"
            }
        },
        homeTyping: {
            name: "HomeTypen",
            description: "Als iemand in uw DM's schrijft, verandert de homeknop in een schrijfindicator."
        },
        iconViewer: {
            name: "IconViewer",
            description: "Voegt een nieuw tabblad toe in de instellingen om een ​​voorbeeld van alle pictogrammen te bekijken.",
            toolbox: "Open het tabblad Pictogrammen",
            iconFinder: "Pictogramzoeker",
            about: {
                title: "Functies",
                preview: "Voorbeeldpictogrammen",
                list: {
                    copy: "Kopieer pictogramnamen en CSS-variabelen",
                    download: "Download pictogrammen in verschillende formaten (SVG, PNG, GIF, enz.)",
                    premade: "Kopieer kant-en-klare pictogrambevindingen voor uw plug-ins",
                    find: "Zoek pictogrammen op functiecontext",
                    search: "Zoek naar kleuren door met de rechtermuisknop op de kleurnaam te klikken",
                    special: "speciale dank"
                }
            },
            context: {
                icon: {
                    options: "Pictogram Opties",
                    log: "Afdrukken naar console (logboek)",
                    save: "Opslaan als...",
                    rightClick: "Klik met de rechtermuisknop op het pictogram dat u wilt vervangen",
                    usage: "Gebruik",
                    click: "Klik om te kopiëren",
                    copied: "Gekopieerd!",
                    actions: "Acties"
                }
            },
            modal: {
                label: "Zoeken op functiecontext",
                search: "Zoeken binnen {{count}} symbolen...",
                function: "Functie",
                iconViewer: {
                    colors: "Kleuren van pictogramviewer",
                    unknown: "onbekend",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Het herstart de app automatisch wanneer u een bepaalde tijd inactief bent, maar voorkomt het herstarten wanneer u zich in het audiokanaal bevindt.",
            option: {
                isEnabled: {
                    label: "Effectief",
                    description: "Maakt automatische herstart na inactiviteit mogelijk"
                },
                idleMinutes: {
                    label: "Inactieve tijd (minuten)",
                    description: "Tijd van inactiviteit vóór opnieuw opstarten (niet op audiokanaal)"
                }
            },
            toolbox: {
                disable: "Schakel automatisch opnieuw opstarten uit",
                enable: "Schakel automatisch opnieuw opstarten in"
            }
        },
        ignoreActivities: {
            name: "Negeer activiteiten",
            description: "Voorkomt dat gebeurtenissen alleen in de staat verschijnen. Je kunt opgeven welke je wilt negeren op de tabbladen Opgeslagen games en evenementen, of je kunt de algemene instellingen hieronder gebruiken.",
            modal: {
                import: {
                    title: "Importeer de app-ID van de CustomRPC-plug-in in de filterlijst"
                },
                filter: {
                    title: "Filterlijst",
                    description: "Door komma's gescheiden lijst met gebeurtenis-ID's die moeten worden gefilterd (handig voor het filteren van specifieke RPC-gebeurtenissen en CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "CustomRPC-applicatie-ID is niet ingesteld.",
                    alreadyAdded: "De CustomRPC-applicatie-ID is al toegevoegd."
                }
            },
            button: {
                import: "CustomRPC-ID importeren"
            },
            option: {
                importCustomRPC: {
                    label: "AangepasteRPC'yi Meer"
                },
                listMode: {
                    label: "Lijstmodus",
                    description: "Kies hoe u de filterlijst wilt toepassen",
                    blacklist: "Zwarte lijst (negeer alleen degenen op de lijst)",
                    whitelist: "Witte lijst (negeer alles behalve degenen in de lijst)"
                },
                idList: {
                    label: "ID-lijst"
                },
                ignorePlaying: {
                    label: "Negeer wat er wordt afgespeeld",
                    description: "Negeer alle gespeelde evenementen (meestal game- en RPC-evenementen)"
                },
                ignoreStreaming: {
                    label: "Negeer berichten",
                    description: "Negeer alle uitzendgebeurtenissen"
                },
                ignoreListening: {
                    label: "Negeer luisteraars",
                    description: "Negeer alle luistergebeurtenissen (meestal Spotify-gebeurtenissen)"
                },
                ignoreWatching: {
                    label: "Negeren bekeken",
                    description: "Negeer alle trackinggebeurtenissen"
                },
                ignoreCompeting: {
                    label: "Negeer competitieve gebeurtenissen",
                    description: "Negeer alle competitieve (competitie)gebeurtenissen (meestal aangepaste game-evenementen)"
                },
                ignoredActivities: {
                    label: "Genegeerde gebeurtenissen"
                }
            }
        },
        ignoreCalls: {
            name: "Negeeroproepen",
            description: "Hiermee kunt u oproepen van specifieke gebruikers of DM-groepen negeren.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Permanent genegeerde gebruikers",
                    description: "Gebruikers-ID's (virgül + boşluk) die permanent moeten worden genegeerd"
                }
            },
            button: {
                ignore: "Yoksay",
                temporarilyIgnore: "Tijdelijk negeren",
                permanentlyIgnore: "Negeer permanent"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Berichten verbergen voor 'potentiële spammers'."
        },
        imageFilename: {
            name: "AfbeeldingBestandsnaam",
            description: "Toont de bestandsnaam als tooltip wanneer u over afbeeldingen en GIF's zweeft.",
            option: {
                showFullUrl: {
                    label: "Toon volledige URL",
                    description: "Het toont de volledige URL van de afbeelding in plaats van alleen de bestandsnaam. Het is altijd ingeschakeld voor GIF's, omdat deze meestal geen betekenisvolle bestandsnaam hebben."
                }
            }
        },
        imageLink: {
            name: "BeeldLink",
            description: "Het verbergt nooit visuele links, ook al staat er alleen een afbeeldingslink in de berichten."
        },
        imageZoom: {
            name: "BeeldZoom",
            description: "Hiermee kunt u inzoomen op afbeeldingen en GIF's, en metagegevens van afbeeldingen bekijken. Zoom in met het muiswiel, vergroot de lensradius met Shift + muiswiel.",
            option: {
                saveZoomValues: {
                    label: "Zoomwaarden opslaan",
                    description: "Bepaalt of de zoom- en lensgroottewaarden worden opgeslagen"
                },
                invertScroll: {
                    label: "Omgekeerd scrollen",
                    description: "Keert de scrollrichting van de muis om"
                },
                nearestNeighbour: {
                    label: "Dichtstbijzijnde buurman",
                    description: "Maakt gebruik van Nearest Neighbour-interpolatie bij het schalen van afbeeldingen"
                },
                square: {
                    label: "Beschermen",
                    description: "Verandert de lens in een vierkante vorm"
                },
                zoom: {
                    label: "Zoom",
                    description: "Zoomverhouding van de lens"
                },
                size: {
                    label: "Dimensie",
                    description: "Lensradius/grootte"
                },
                zoomSpeed: {
                    label: "Zoomsnelheid",
                    description: "Bepaalt de snelheid waarmee de zoom-/lensgrootte verandert"
                },
                showMetadata: {
                    label: "Metagegevens weergeven",
                    description: "Toont metadata wanneer u dubbelklikt op de geselecteerde afbeelding"
                }
            },
            context: {
                square: "Vierkante lens",
                nearest: "Gepixeleerde vergroting",
                zoom: "Zoom",
                size: "Lensgrootte",
                zoomSpeed: "Zoomsnelheid",
                showImageMetadata: "Metagegevens van afbeeldingen tonen",
                view: "Metagegevens bekijken",
                loading: "Laden...",
                unknown: "onbekend",
                sizeHTML: "Dimensie",
                dimensions: "Afmetingen",
                filename: "Bestandsnaam"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Voegt de opdracht /imgtogif toe om elke afbeelding naar GIF te converteren",
            command: {
                imgToGif: {
                    description: "Hiermee kunt u een afbeelding naar GIF converteren",
                    image: "Visuele bijlage om te gebruiken",
                    width: "GIF-breedte",
                    height: "gif-hoogte"
                }
            },
            error: {
                noImage: "Geen afbeelding opgegeven!",
                notImage: "Het geüploade bestand is geen afbeelding"
            }
        },
        implicitRelationships: {
            name: "Impliciete relaties",
            description: "Toont uw indirecte relaties op het tabblad Vrienden.",
            option: {
                sortByAffinity: {
                    label: "Sorteer op nabijheid",
                    description: "Bepaalt of indirecte relaties worden gesorteerd op basis van hun nabijheid tot u."
                }
            },
            implicit: "Indirect"
        },
        inRole: {
            name: "InRole",
            description: "Ontdek wie een rol heeft met behulp van het rolcontextmenu of de opdracht /inrole (lees plug-in-info!)",
            command: {
                inrole: {
                    description: "Ontdek wie er in een rol speelt",
                    role: "Rol",
                    noGuild: "Zorg ervoor dat u zich op een server bevindt."
                }
            },
            context: {
                view: "Bekijk leden in rol"
            },
            modal: {
                about: {
                    title: "Beperkingen",
                    description: "Als u geen moderatierechten heeft op de server en de server groot is (meer dan 100 leden), kan de plug-in op de volgende manieren worden beperkt:",
                    list: {
                        one: "Offline leden worden niet vermeld",
                        two: "Standaard worden er maximaal 100 leden vermeld. Scroll naar beneden in de ledenlijst om meer leden te zien.",
                        three: "Maar uw vrienden worden altijd weergegeven, ongeacht hun status."
                    }
                },
                member: {
                    title: "Leden in de rol",
                    noMembers: "Er zijn geen online in de cache opgeslagen leden met deze rol gevonden. Probeer door uw ledenlijst te scrollen om meer gebruikers in de cache op te slaan!"
                }
            }
        },
        instantScreenshare: {
            name: "Direct Scherm delen",
            description: "Wanneer u lid wordt van een audiokanaal, kunt u direct uw scherm delen met ondersteuning voor desktopbronnen, vensters en video-invoerapparaten (camera's, opnamekaarten).",
            modal: {
                linux: {
                    title: "Voor Linux",
                    body: "Als je Wayland gebruikt, wordt alleen de optie voor scherm delen ingeschakeld.",
                    bodyTwo: "Het kan wel of niet werken voor X11 :shrug:"
                },
                videoDevices: {
                    title: "Video-invoerapparaten",
                    body: "Ondersteunt camera's en capture-kaarten (bijv. Elgato HD60X) indien ingeschakeld in de instellingen."
                },
                regardingSound: {
                    title: "Over geluids- en voorbeeldinstellingen",
                    body: "We gebruiken dezelfde instellingen die Discord gebruikt om een ​​voorbeeld van de stream te bekijken en te beslissen of audio wordt ingeschakeld."
                }
            },
            option: {
                streamMedia: {
                    label: "Mediabron wordt vrijgegeven",
                    description: "Als het niet wordt gevonden, wordt het teruggezet naar het hoofdscherm.",
                    loading: "Mediabronnen laden...",
                    none: "Geen mediabronnen gevonden",
                    placeholder: "Kies een mediabron om te publiceren"
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
                    description: "Automatisch doof wanneer u lid wordt van een spraakkanaal (u wordt ook gedempt)"
                },
                instantScreenshare: {
                    label: "Direct scherm delen",
                    description: "Schakelt de functie voor automatisch delen van schermen in"
                },
                keybindScreenshare: {
                    label: "Scherm delen met sneltoets",
                    description: "Deelt scherm met sneltoets in Discord-sneltoetsinstellingen"
                },
                focusDiscord: {
                    label: "Focus op onenigheid",
                    description: "Start scherm delen met sneltoetsen alleen als Discord focus heeft"
                },
                toolboxManagement: {
                    label: "Toolbox-beheer",
                    description: "Direct scherm delen in-/uitschakelen"
                }
            },
            toolbox: {
                label: "Direct scherm delen",
                toast: "Direct scherm delen {{state}}",
                enabled: "Effectief",
                disabled: "Gehandicapt"
            }
        },
        invisibleChat: {
            name: "OnzichtbareChat",
            description: "Versleutel uw berichten zonder argwaan te wekken!",
            option: {
                savedPasswords: {
                    label: "Opgeslagen wachtwoorden",
                    description: "Opgeslagen wachtwoorden (door komma's gescheiden)"
                }
            },
            button: {
                encrypt: "Versleutel bericht",
                decrypt: "Ontcijfer de boodschap",
                hidden: "Verborgen berichtindicator (InvisibleChat)"
            },
            tooltip: {
                hidden: "Er zit een verborgen boodschap in dit bericht! (Onzichtbarechat)"
            },
            embed: {
                title: "Gedecodeerd bericht",
                footer: "Verzonden via InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Versleutel bericht",
                    secret: "Geheime boodschap",
                    cover: "Omslag (2 of meer woorden!!)",
                    password: "Wachtwoord",
                    dontUseCover: "Een hoes gebruiken",
                    send: "Versturen",
                    cancel: "Annuleren"
                },
                decrypt: {
                    title: "Ontcijfer de boodschap",
                    with: "Gecodeerd bericht",
                    password: "Wachtwoord",
                    decrypt: "Ontcijferen",
                    cancel: "Annuleren"
                }
            }
        },
        inviteDefaults: {
            name: "Standaardinstellingen uitnodigen",
            description: "Hiermee kunt u standaardwaarden bewerken bij het maken van serveruitnodigingen.",
            option: {
                inviteDuration: {
                    label: "Uitnodigingsduur",
                    description: "Standaardduur voor serveruitnodigingen",
                    thirtyMinutes: "30 minuten",
                    oneHour: "1 moment",
                    sixHours: "6 momenten",
                    twelveHours: "12 momenten",
                    oneDay: "1 dag",
                    sevenDays: "7 dagen",
                    forever: "Onbepaald"
                },
                maxUses: {
                    label: "Maximaal gebruik",
                    description: "Standaard maximaal gebruik voor serveruitnodigingen",
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
                    description: "Standaard tijdelijke lidmaatschapsinstelling voor serveruitnodigingen"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Maakt de kleuren van gebruikersnamen in de chat uniek, zoals in IRC-clients.",
            option: {
                lightness: {
                    label: "Helder",
                    description: "Helderheidsverhouding (%). Als de kleuren te licht of te donker lijken, verander ze dan."
                },
                memberListColors: {
                    label: "Kleuren van de ledenlijst",
                    description: "Wijzig de rolkleuren in de ledenlijst."
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Alleen van toepassing op gebruikers zonder kleur",
                    description: "Kleur toepassen op gebruikers van wie de kleur niet vooraf is gedefinieerd."
                },
                applyColorOnlyInDms: {
                    label: "Alleen toepassen in privéberichten",
                    description: "Pas kleuren alleen toe op privéberichten; applicatie op servers."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Het registreert lokaal iedereen waarmee u communiceert (inclusief servers), en beschermt tegen verlies.",
            section: {
                description: "Het toont de lijst met de eigenaren van de servers die u noemde, waarop u hebt geantwoord, waar u lid van bent (servereigenaar*) of de leden van de servers waarop u zich bevindt.",
                empty: "Momenteel leeg.",
                tooltip: "{{user}} bijgewerkt op {{updatedAtContent}}",
                owner: "Server-eigenaar",
                iRememberYou: "Ik herinner me je"
            },
            context: {
                user: "Gebruikersopties",
                copy: "Kopieer gebruikers-ID",
                copyToast: "Gebruikers-ID gekopieerd naar klembord",
                view: "Bekijk profiel"
            },
            modal: {
                title: "Regelaar",
                filter: "Filter op tag, gebruikersnaam of ID",
                button: {
                    validate: "Verifieer en bewaar",
                    cancel: "Annuleren",
                    openEditor: "Open Editor",
                    resetData: "Gegevens opnieuw instellen",
                    sure: "Weet je het zeker?"
                }
            }
        },
        jumpTo: {
            name: "SpringNaar",
            description: "Voegt opties toe aan het rechtsklikmenu om naar het begin of einde van een kanaal of privébericht te springen.",
            context: {
                top: "Ga naar Eerste bericht",
                bottom: "Ga naar Laatste bericht",
                noMessages: "Er zijn geen berichten gevonden van deze gebruiker in dit kanaal.",
                searchFailed: "Er is een fout opgetreden tijdens het zoeken naar berichten."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentKanaal",
            description: "Bij het wisselen van account of het laden van Discord probeert het terug te keren naar het kanaal waar je op zat."
        },
        keyboardSounds: {
            name: "Toetsenbordgeluiden",
            description: "OperaGX of osu ​​tijdens het typen met het toetsenbord! Voegt geluidseffecten toe.",
            option: {
                volume: {
                    label: "Geluidsniveau",
                    description: "Toetsenbord klinkt volume"
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
            name: "TrefwoordMelden",
            description: "Verzendt meldingen over berichten die overeenkomen met bepaalde trefwoorden of regex-expressies.",
            idHolder: "Identiteitskaart",
            keywordEntry: "Zoekwoordinvoer",
            regexHolder: "voorbeeld|regex",
            ignoreCase: "Hoofdletterongevoelig",
            whiteblackLabel: "Witte lijst/zwarte lijst",
            tab: {
                title: "Trefwoorden",
                clearAll: "Alles wissen"
            },
            button: {
                addId: "ID Ekle",
                addKeyword: "Zoekwoordinvoer toevoegen"
            },
            listTypeSelector: {
                blacklist: "Zwarte lijst",
                whitelist: "Witte lijst",
                placeholder: "Kies een lijsttype"
            },
            option: {
                ignoreBots: {
                    label: "Negeer bots",
                    description: "Negeer berichten van bots"
                },
                amountToKeep: {
                    label: "Bedrag om op te slaan",
                    description: "Aantal berichten dat in het logboek moet worden bewaard"
                },
                keywords: {
                    label: "Trefwoorden",
                    description: "Beheer trefwoorden"
                }
            }
        },
        lastOnline: {
            name: "LaatsteOnline",
            description: "Voegt een laatste online-indicator toe onder gebruikersnamen in uw DM-lijst, server- en groeps-DM-ledenlijsten.",
            unit: {
                d: "dag",
                h: "moment",
                m: "notulen"
            },
            online: "{{formattedTime}} was eerder online"
        },
        listenBrainzRPC: {
            name: "LuisterBrainzRPC",
            description: "ListenBrainz is een kleine plug-in voor rijke aanwezigheid.",
            about: {
                title: "Over de MusicBrainz-API",
                description: "MusicBrainz API vereist geen API-sleutel, maar wel een {{link}}. Voor de meeste gebruikers is één e-mailadres voldoende.",
                userAgent: "een betekenisvolle user-agent-tekenreeks"
            },
            option: {
                username: {
                    label: "Gebruikersnaam",
                    description: "ListenBrainz-gebruikersnaam"
                },
                mbContact: {
                    label: "MB-contactpersoon",
                    description: "Contactgegevens van ListenBrainz"
                },
                shareUsername: {
                    label: "Deel gebruikersnaam",
                    description: "Toon ListenBrainz-profiellink (alleen zichtbaar voor andere gebruikers)"
                },
                shareSong: {
                    label: "Deel het liedje",
                    description: "Toon link naar huidig ​​nummer op ListenBrainz (alleen zichtbaar voor andere gebruikers)"
                },
                hideWithSpotify: {
                    label: "Verbergen terwijl Spotify actief is",
                    description: "Verberg de ListenBrainz-status als Spotify actief is"
                },
                hideWithActivity: {
                    label: "Verbergen als er andere gebeurtenissen zijn",
                    description: "Verberg de ListenBrainz-status als u een andere status heeft"
                },
                useTimeBar: {
                    label: "Gebruik Tijdbalk",
                    description: "Toon de trackduur als tijdbalk (luisterstatus moet worden gebruikt)"
                },
                statusName: {
                    label: "Statusnaam",
                    description: "Uitzonderingstekst"
                },
                nameFormat: {
                    label: "Naam Formaat",
                    description: "Hoe de naam van het nummer en de artiest in de statusnaam wordt weergegeven",
                    custom: "Gebruik aangepaste statustekst",
                    artistSong: "gebruik het formaat 'artiest - nummer'",
                    songArtist: "gebruik het formaat 'nummer - artiest'",
                    artistOnly: "Gebruik gewoon de artiestennaam",
                    songOnly: "Gebruik gewoon de naam van het nummer",
                    albumName: "Gebruik albumnaam (retourneert uitzonderingstekst als nummer geen album heeft)"
                },
                useListeningStatus: {
                    label: "Gebruik luisterstatus",
                    description: "Toon de status 'Luisteren' in plaats van 'Spelen'"
                },
                missingArt: {
                    label: "Ontbrekende omslagafbeelding",
                    description: "Wanneer het album of de albumhoes ontbreekt",
                    listenbrainzLogo: "Gebruik het grote ListenBrainz-logo",
                    generic: "Gebruik een algemene tijdelijke aanduiding"
                },
                useLogo: {
                    label: "Kullan-logo",
                    description: "Toon het ListenBrainz-logo op de albumhoes"
                }
            }
        },
        loadingQuotes: {
            name: "Offertes laden",
            description: "Verandert de laadcitaten van Discord",
            option: {
                replaceEvents: {
                    label: "Wijzig gebeurtenissen",
                    description: "Moet deze plug-in ook worden toegepast tijdens evenementen met speciale evenemententhema-citaten? (bijvoorbeeld Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Schakel plug-incitaten in",
                    description: "Schakel offertes in die door deze plug-in zijn opgesteld"
                },
                enableDiscordPresetQuotes: {
                    label: "Schakel Discord-citaten in",
                    description: "Schakel Discord ingeblikte citaten in (inclusief gebeurteniscitaten, tijdens evenementen)"
                },
                additionalQuotes: {
                    label: "Aanvullende citaten",
                    description: "Extra speciale aanhalingstekens die kunnen verschijnen, worden gescheiden door het volgende scheidingsteken"
                },
                additionalQuotesDelimiter: {
                    label: "Extra scheidingsteken voor offertes",
                    description: "Scheidingsteken voor aanvullende offertes"
                }
            }
        },
        loginWithQR: {
            name: "InloggenMetQR",
            description: "Net als op mobiel kunt u door het scannen van de QR-inlogcode inloggen op een ander apparaat!",
            option: {
                scanQr: {
                    label: "QR-code scannen",
                    description: "Scan een QR-code",
                    notEnabled: "Activeer de plug-in en start uw client opnieuw op om een ​​login-QR-code te scannen"
                }
            },
            neverScan: "Scan nooit een inlog-QR-code van een andere gebruiker of app.",
            hold: "Houd ingedrukt om de invoer te bevestigen",
            scanning: "Scannen...",
            stopScanning: "Stop met scannen",
            usingWebcam: "Scannen met webcam",
            dragDrop: "Sleep hier een afbeelding en zet deze neer of klik om een ​​afbeelding te selecteren",
            orPaste: "Of plak een foto vanaf het klembord!"
        },
        mediaPlaybackSpeed: {
            name: "MediaAfspeelsnelheid",
            description: "Hiermee kunt u de (standaard) afspeelsnelheid van media-insluitingen wijzigen.",
            playbackSpeed: "Afspeelsnelheid",
            context: {
                label: "Afspeelsnelheid regelen"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Standaard voicemailtarief",
                    description: "Gesproken berichten"
                },
                defaultVideoSpeed: {
                    label: "Standaard videosnelheid",
                    description: "Video's"
                },
                defaultAudioSpeed: {
                    label: "Standaard audiosnelheid",
                    description: "audiobestanden"
                }
            }
        },
        memberCount: {
            name: "Aantal leden",
            description: "Toont het aantal online leden op de server, het totale aantal leden en gebruikers in spraakkanalen – in de ledenlijst en knopinfo.",
            option: {
                toolTip: {
                    label: "Gereedschapstip",
                    description: "Toon het aantal leden in de servertooltip"
                },
                memberList: {
                    label: "Ledenlijst",
                    description: "Toon het aantal leden bovenaan de ledenlijst"
                },
                voiceActivity: {
                    label: "Spraakactiviteit",
                    description: "Toon aantal gebruikers op spraakkanalen"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} is online op dit kanaal",
            totalMembers: "{{formattedTotalCount}} totaal aantal leden op de server",
            totalVoice: "Lid van {{formattedVoiceCount}} spraakkanalen"
        },
        mentionAvatars: {
            name: "Noem Avatars",
            description: "Toont gebruikersavatars en rolpictogrammen binnen vermeldingen.",
            option: {
                showAtSymbol: {
                    label: "Toon @-pictogram",
                    description: "Bepaalt of het @-symbool wordt weergegeven in gebruikersvermeldingen."
                }
            }
        },
        meow: {
            name: "Miauw",
            description: "Voegt een knop toe aan de chatbalk om te miauwen in de chat.",
            button: {
                meow: "Miyav"
            }
        },
        messageBurst: {
            name: "BerichtBurst",
            description: "Het voegt berichten die binnen een bepaalde periode zijn verzonden samen met uw vorige bericht, tenzij iemand anders vóór u een bericht heeft verzonden.",
            option: {
                timePeriod: {
                    label: "Tijdbereik",
                    description: "Tijd samenvoegen (in seconden)."
                },
                shouldMergeWithAttachment: {
                    label: "Combineer met bijlagen",
                    description: "Moeten berichten worden samengevoegd als er een bijlage (bestand/afbeelding) in het laatste bericht zit?"
                },
                useSpace: {
                    label: "Gebruik ruimte",
                    description: "Of er spaties tussen berichten moeten worden toegevoegd in plaats van naar een nieuwe regel te gaan bij het samenvoegen."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Door de Backspace-toets ingedrukt te houden en te klikken, kunt u verwijderen, dubbelklikken om te bewerken of te antwoorden.",
            option: {
                singleClickAction: {
                    label: "Actie met één klik",
                    description: "Actie met één klik (op uw eigen berichten)"
                },
                singleClickModifier: {
                    label: "Modificatie met één klik",
                    description: "Modifier vereist voor actie met één klik (in uw eigen berichten)"
                },
                singleClickOthersAction: {
                    label: "Actie met één klik (overige)",
                    description: "Actie met één klik (op berichten van anderen)"
                },
                singleClickOthersModifier: {
                    label: "Modifier met één klik (anderen)",
                    description: "Modifier vereist voor actie met één klik (in berichten van anderen)"
                },
                doubleClickAction: {
                    label: "Dubbelklikactie",
                    description: "Dubbelklikactie op uw eigen berichten"
                },
                doubleClickOthersAction: {
                    label: "Dubbelklikactie (overige)",
                    description: "Dubbeltik op de berichten van anderen"
                },
                doubleClickModifier: {
                    label: "Dubbelklik-modificatie",
                    description: "Modifier vereist voor dubbelklikactie"
                },
                tripleClickAction: {
                    label: "Actie met drie klikken",
                    description: "Actie met drie klikken"
                },
                tripleClickModifier: {
                    label: "Modificatie met drie klikken",
                    description: "Modifier vereist voor drie klikacties"
                },
                reactEmoji: {
                    label: "Reactie-emoji",
                    description: "Emoji om te gebruiken voor reactieacties"
                },
                addAdditionalReacts: {
                    label: "Voeg aanvullende reacties toe",
                    description: "Voeg ook extra geconfigureerde reactie-emoji's toe"
                },
                additionalReactEmojis: {
                    label: "Aanvullende reactie-emoji's",
                    description: "Extra emoji's die moeten worden toegevoegd bij gebruik van de reactieactie (gescheiden door komma/enter, max {{count}})"
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
                    description: "Time-out (ms) om dubbele/driedubbele klikken te onderscheiden"
                },
                doubleClickHoldThreshold: {
                    label: "Retentiedrempel voor dubbelklikken",
                    description: "Maximale vasthoudtijd (ms) voor dubbelklikacties. Zorgt ervoor dat tekstselectie langer bewaard blijft"
                },
                deferDoubleClickForTriple: {
                    label: "Vertraging dubbelklikken voor drievoudig klikken",
                    description: "Vertraag dubbelklikken om drievoudige klikacties toe te staan ​​(driedubbele klik is uitgeschakeld als deze is uitgeschakeld)"
                },
                selectionHoldTimeout: {
                    label: "Time-out voor selectieblokkering",
                    description: "Time-out (ms) om tekstselectie mogelijk te maken"
                },
                quoteWithReply: {
                    label: "Reageer met offerte",
                    description: "Reageer bij het citeren ook op het bericht"
                },
                useSelectionForQuote: {
                    label: "Gebruik Selectie voor offerte",
                    description: "Gebruik bij het citeren geselecteerde tekst (indien beschikbaar)"
                }
            },
            actions: {
                none: "Geen",
                delete: "Sil",
                copyLink: "Kopieer link",
                copyID: "Kopieer identiteitsbewijs",
                copyContent: "Kopieer inhoud",
                copyUserID: "Kopieer gebruikers-ID",
                edit: "Bewerking",
                reply: "Antwoord",
                react: "Reageren",
                openThread: "Onderwerp openen",
                openTab: "Openen in tabblad",
                quote: "citaat",
                pin: "Speld het vast"
            },
            missingPermissions: {
                react: "Kan niet reageren: ontbrekende rechten",
                pin: "Kan het probleem niet oplossen: ontbrekende machtigingen",
            },
            cannotQuote: "Dit berichttype kan niet worden geciteerd",
            copy: {
                messageId: "Bericht-ID is gekopieerd!",
                messageContent: "Berichtinhoud gekopieerd!",
                userId: "Gebruikers-ID is gekopieerd!"
            },
            linkCopied: "Link gekopieerd!"
        },
        messageColors: {
            name: "BerichtKleuren",
            description: "Toont kleurcodes in berichten, zoals #FF0042.",
            option: {
                renderType: {
                    label: "Visualisatietype",
                    description: "Bepaalt hoe kleuren worden weergegeven",
                    textColor: "tekst kleur",
                    block: "blok ernaast",
                    backgroundColor: "achtergrondkleur"
                },
                enableShortHexCodes: {
                    label: "Schakel korte hexadecimale codes in",
                    description: "Schakel hexadecimale codes van 3 tekens in, zoals #39f"
                },
                blockView: {
                    label: "Blokweergavetype",
                    description: "Bepaalt hoe kleurblokken worden weergegeven",
                    right: "Rechterkant",
                    left: "Links",
                    both: "beide kanten"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Toont hoe lang het duurt voordat de berichten van het huidige kanaal zijn geladen.",
            option: {
                showIcon: {
                    label: "Pictogram weergeven",
                    description: "Toon het laadtijdpictogram in de berichtenbalk"
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
            loaded: "Berichten geladen in {{time}} ms ({{timeAgo}})",
            day: "dagen geleden",
            hour: "uur geleden",
            minute: "minuten geleden",
            justNow: "Nu"
        },
        messageLatency: {
            name: "BerichtLatentie",
            description: "Voegt een indicator toe voor berichten die ≥n seconden nodig hebben om te verzenden.",
            day: "dag",
            days: "dag",
            hour: "moment",
            hours: "moment",
            minute: "notulen",
            minutes: "notulen",
            second: "seconde",
            seconds: "seconde",
            millisecond: "milliseconde",
            milliseconds: "milliseconde",
            and: "ve",
            oldKotlinDetected: "Er wordt vermoed dat de gebruiker een verouderde Discord Android-client gebruikt.",
            ahead: "De tijd van deze gebruiker ligt {{delta}} voor.",
            delay: "Dit bericht is verzonden met {{delta}} vertraging.",
            delayedMessage: "Vertraagd bericht",
            oldAndroidClient: "Legacy Discord Android-client",
            option: {
                latency: {
                    label: "Vertraging",
                    description: "Drempelwaarde in seconden voor de vertragingsindicator"
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
                    label: "Negeer mezelf",
                    description: "Voeg indicatoren toe aan uw eigen berichten"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Voegt een voorbeeld toe aan berichten die een link naar een ander bericht bevatten.",
            option: {
                messageBackgroundColor: {
                    label: "Achtergrondkleur bericht",
                    description: "Achtergrondkleur voor berichten in uitgebreide insluitingen"
                },
                automodEmbeds: {
                    label: "Automod-begrafenissen",
                    description: "Gebruik automod-embeds in plaats van rijke embeds (kleiner maar bevatten minder informatie)",
                    always: "Gebruik altijd automod-embeds",
                    prefer: "Geef de voorkeur aan Automod-insluitingen, maar gebruik rijke insluitingen als bepaalde inhoud niet kan worden weergegeven",
                    never: "Gebruik nooit automod-embeds"
                },
                listMode: {
                    label: "Lijstmodus",
                    description: "Bepaal of de ID-lijst wordt gebruikt als zwarte lijst of witte lijst",
                    blacklist: "Zwarte lijst",
                    whitelist: "Witte lijst"
                },
                idList: {
                    label: "ID-lijst",
                    description: "Server-/kanaal-/gebruikers-ID's die moeten worden toegevoegd aan de zwarte lijst of witte lijst (gescheiden door komma's)"
                },
                clearMessageCache: {
                    label: "Berichtencache wissen",
                    description: "Wis de cache van gekoppelde berichten"
                }
            },
            noContent: {
                noAttachments: "geen inhoud {{count}} ingesloten bericht",
                noEmbeds: "geen inhoud {{count}} toevoeging",
                both: "geen inhoud, {{attachments}} bijlagen en {{embeds}} ingesloten berichten"
            },
            dm: "Privébericht",
            groupDm: "Groepsbericht",
            server: "Presentator"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Voegt tooltip en berichtvoorbeeld toe als u de muisaanwijzer op berichtlinks, antwoorden en doorgestuurde berichten plaatst.",
            loading: "Laden...",
            option: {
                onLink: {
                    label: "Op koppeling",
                    description: "Tooltip weergeven als u de muisaanwijzer op berichtlinks plaatst"
                },
                onReply: {
                    label: "Bij reactie",
                    description: "Toon tooltip als u de muisaanwijzer op berichtantwoorden plaatst"
                },
                onForward: {
                    label: "Over het verzonden bericht",
                    description: "Toon tooltip als u de muisaanwijzer op doorgestuurde berichten plaatst"
                },
                display: {
                    label: "Verschijning",
                    description: "Uiterlijk stijl",
                    auto: "Hetzelfde als bericht",
                    compact: "Compact",
                    cozy: "Comfortabel"
                }
            }
        },
        messageLogger: {
            name: "BerichtLogger",
            description: "Bewaart tijdelijk verwijderde en bewerkte berichten.",
            removeMessage: "Berichtgeschiedenis verwijderen",
            removeMessageTemporary: "Bericht verwijderen (tijdelijk)",
            clearMessageLog: "Berichtenlog wissen",
            modal: {
                edit: {
                    title: "Berichtbewerkingsgeschiedenis",
                    tooltip: "Deze bewerkingsstatus kan niet worden weergegeven omdat deze niet is opgeslagen."
                }
            },
            option: {
                deleteStyle: {
                    label: "Wis stijl",
                    description: "Weergavestijl van verwijderde berichten",
                    text: "rode tekst",
                    overlay: "rode coating"
                },
                logDeletes: {
                    label: "Opslaan verwijderd",
                    description: "Bepaalt of verwijderde berichten worden opgeslagen of niet"
                },
                collapseDeleted: {
                    label: "Samenvouwen Verwijderd",
                    description: "Verfijn verwijderde berichten, vergelijkbaar met geblokkeerde berichten"
                },
                logEdits: {
                    label: "Opslaan bewerkt",
                    description: "Bepaalt of bewerkte berichten moeten worden opgeslagen"
                },
                inlineEdits: {
                    label: "Inline-bewerkingen",
                    description: "Toon bewerkingsgeschiedenis als onderdeel van de berichtinhoud"
                },
                ignoreBots: {
                    label: "Negeer bots",
                    description: "Negeer berichten verzonden door bots"
                },
                ignoreSelf: {
                    label: "Negeer mezelf",
                    description: "Negeer eigen berichten"
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
                    label: "Negeer servers",
                    description: "Door komma's gescheiden lijst met server-ID's die moeten worden genegeerd"
                },
                showEditDiffs: {
                    label: "Toon verschillen",
                    description: "Toon verschillen tussen bewerkte berichtversies"
                },
                separatedDiffs: {
                    label: "Verschillen splitsen",
                    description: "Geeft een beter leesbare weergave door toevoegingen en verwijderingen afzonderlijk weer te geven in de verschillen"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerVerbeterd",
            description: "Het breidt de MessageLogger-plug-in uit met extra functies.",
            updateImageCacheDir: "De visuele cachemap is succesvol bijgewerkt.",
            updateLogsDir: "De logmap is succesvol bijgewerkt.",
            failedUpdate: "De map kan niet worden bijgewerkt.",
            blacklist: "Zwarte lijst",
            whitelist: "Witte lijst",
            failedToRemove: "Bericht kon niet worden verwijderd",
            successfullyImported: "Logboeken zijn succesvol geïmporteerd.",
            errorImportingLogs: "Er is een fout opgetreden tijdens het importeren van logboeken. Kijk op de console voor meer informatie.",
            importing: "Importeren...",
            importLogs: "Logboeken importeren",
            exporting: "Exporteren...",
            exportLogs: "Logboeken exporteren",
            alert: {
                clearLogs: {
                    title: "Logboeken wissen",
                    body: "Weet u zeker dat u alle logbestanden wilt wissen?",
                    confirmText: "duidelijk",
                    cancel: "Annuleren"
                },
                clearVisibleLogs: {
                    title: "Duidelijke zichtbare logboeken",
                    body: "Weet je zeker dat je de logbestanden van {{messages}} wilt wissen?",
                    confirmText: "duidelijk",
                    cancel: "Annuleren"
                },
                cleared: "De berichtenlogdatabase en cache zijn gewist."
            },
            context: {
                title: "Berichtenlogboek",
                jumpToMessage: "Ga naar Bericht",
                openUserProfile: "Gebruikersprofiel openen",
                copyContent: "Kopieer inhoud",
                copyUserId: "Kopieer gebruikers-ID",
                copyMessageId: "Kopieer bericht-ID",
                copyChannelId: "Kanaal-ID kopiëren",
                copyServerId: "Kopieer server-ID",
                deleteLog: "Logboek verwijderen",
                fromUsernameDm: "Uit de DM's van {{username}}",
                fromGroupDm: "{{channelName}} groeps-DM's",
                fromServerChannel: "Van kanaal {{channelName}} op server {{serverName}}",
                moveTypeTo: "Verplaats {{type}} naar {{destinatie}}",
                removeTypeFrom: "Verwijder {{type}} uit {{list}}",
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
                server: "Presentator",
                user: "Gebruiker",
                channel: "Kanaal"
            },
            button: {
                chooseFolder: "Selecteer Map",
                browse: "Gozat",
                clearLogs: "Wis alle logboeken",
                clearVisibleLogs: "Duidelijke zichtbare logboeken",
                sortOldest: "Sorteer van oud naar nieuw",
                sortNewest: "Sorteer van nieuw naar oud",
                loadMore: "Laad meer",
                noResults: "Geen resultaten op het tabblad {{tab}}",
                tryOtherTabs: "Probeer de tabbladen {{nextTab}} of {{lastTab}}",
                importLogs: "Logboeken importeren"
            },
            modal: {
                title: "Berichten filteren",
                deleted: "Verwijderd",
                edited: "Georganiseerd",
                ghostPing: "Onzichtbare ping",
                empty: "Leeg, hè",
                importLogs: "ML Enhanced slaat nu logboeken op in IndexedDB. U moet uw oude logbestanden uit de logdirectory importeren. Bij het importeren worden bestaande logboeken niet gewijzigd."
            },
            clear: {
                title: "Logboeken wissen",
                description: "Weet u zeker dat u alle logbestanden wilt wissen?",
                confirm: "duidelijk",
                cancel: "Annuleren"
            },
            option: {
                saveMessages: {
                    label: "Berichten opslaan",
                    description: "Bepaalt of verwijderde en bewerkte berichten worden opgeslagen of niet."
                },
                saveImages: {
                    label: "Afbeeldingen opslaan",
                    description: "Bewaar verwijderde bijlagen."
                },
                sortNewest: {
                    label: "Sorteer van nieuw naar oud",
                    description: "Sorteer logboeken op nieuwste."
                },
                cacheMessagesFromServers: {
                    label: "Cacheberichten van servers",
                    description: "Normaal gesproken registreert de logger alleen ID's en DM's op de witte lijst. Als u deze optie inschakelt, worden ook berichten op alle servers opgenomen. Dit kan echter de cachelimiet overschrijden, waardoor sommige berichten worden overgeslagen."
                },
                ignoreBots: {
                    label: "Negeer bots",
                    description: "Negeer botberichten."
                },
                ignoreWebhooks: {
                    label: "Webhookları Yoksay",
                    description: "Negeer webhookberichten."
                },
                ignoreSelf: {
                    label: "Negeer mezelf",
                    description: "Negeer uw eigen berichten."
                },
                ignoreMutedGuilds: {
                    label: "Negeer gedempte servers",
                    description: "Berichten op gedempte servers worden niet opgenomen. Gebruikers/kanalen op de witte lijst worden echter nog steeds geregistreerd."
                },
                ignoreMutedCategories: {
                    label: "Negeer gedempte categorieën",
                    description: "Berichten in kanalen die tot gedempte categorieën behoren, worden niet opgenomen."
                },
                ignoreMutedChannels: {
                    label: "Negeer gedempte kanalen",
                    description: "Berichten op gedempte kanalen worden niet opgenomen."
                },
                alwaysLogDirectMessages: {
                    label: "Bewaar DM's altijd",
                    description: "Bewaar directe berichten altijd."
                },
                alwaysLogCurrentChannel: {
                    label: "Bewaar altijd het huidige kanaal",
                    description: "Slaat altijd het huidige kanaal op. Kanalen/gebruikers op de zwarte lijst zijn uitgesloten."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Logboek standaard permanent verwijderen",
                    description: "In het hoofdcontextmenu van MessageLogger is de optie om uit het berichtenlogboek te verwijderen standaard ingesteld op permanent verwijderen."
                },
                hideMessageFromMessageLoggers: {
                    label: "Bericht verbergen voor loggers",
                    description: "Indien ingeschakeld, wordt er een contextmenuoptie toegevoegd om berichten voor andere loggers te verbergen. Het is mogelijk niet veilig, gebruik op eigen risico."
                },
                showLogsButton: {
                    label: "Toon logknop",
                    description: "Schakelt in of de werkbalk wel of niet wordt weergegeven."
                },
                showWhereMessageIsFrom: {
                    label: "Toon bron van bericht",
                    description: "Toon het kanaal/auteur en de servernaam van het bericht."
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Aantal berichten dat gelijktijdig in logboeken moet worden weergegeven",
                    description: "Bepaalt het aantal berichten dat tegelijk in de logboeken moet worden weergegeven en het aantal dat moet worden toegevoegd als er meer berichten worden geladen."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Berichtinhoud verborgen voor berichtenloggers",
                    description: "Er wordt inhoud gebruikt om het bericht te vervangen wanneer het wordt verborgen voor berichtloggers."
                },
                messageLimit: {
                    label: "Berichtlimiet",
                    description: "Maximaal aantal berichten om op te slaan. Wanneer de limiet wordt overschreden, worden oude berichten verwijderd. 0 = onbeperkt."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Maximale grootte bijlage (MB)",
                    description: "Maximale grootte (in MB) van bijlagen om op te slaan. Bijlagen die groter zijn dan deze waarde worden niet opgeslagen."
                },
                attachmentFileExtensions: {
                    label: "Extra bestandsextensies",
                    description: "Een door komma's gescheiden lijst met bestandsextensies die u wilt opslaan. Als u dit veld leeg laat, worden alle bijlagen opgeslagen."
                },
                cacheLimit: {
                    label: "Cachelimiet",
                    description: "Maximaal aantal berichten dat in de cache moet worden bewaard. Wanneer de limiet wordt overschreden, worden oude berichten verwijderd."
                },
                timeBasedCleanupMinutes: {
                    label: "Op tijd gebaseerde minutenreiniging",
                    description: "Minuteninterval waarin op tijd gebaseerde opschoning van berichten ouder dan de berichtenlimiet wordt uitgevoerd."
                },
                preserveCurrentChannel: {
                    label: "Huidig ​​kanaal behouden",
                    description: "Indien ingeschakeld, worden berichten op het momenteel geselecteerde kanaal niet beïnvloed door op tijd gebaseerde opschoning."
                },
                whitelistedIds: {
                    label: "Witte lijst-ID's",
                    description: "Server-, kanaal- of gebruikers-ID's op de witte lijst gezet."
                },
                blacklistedIds: {
                    label: "Zwarte lijst-ID's",
                    description: "Server-, kanaal- of gebruikers-ID's op de zwarte lijst."
                },
                imageCacheDir: {
                    label: "Visuele cachemap",
                    description: "Selecteer de map met opgeslagen afbeeldingen."
                },
                logsDir: {
                    label: "Logindex",
                    description: "Selecteer de map waarin de logboeken worden opgeslagen."
                },
                importLogs: {
                    label: "Logboeken importeren",
                    description: "Importeer logboeken uit een bestand."
                },
                exportLogs: {
                    label: "Logboeken exporteren",
                    description: "Logboeken exporteren vanuit IndexedDB."
                },
                openLogs: {
                    label: "Logboeken openen",
                    description: "Open de logboeken."
                },
                openImageCacheFolder: {
                    label: "Open de map Visuele cache",
                    description: "Opent de visuele cachemap."
                },
                clearLogs: {
                    label: "Logboeken wissen",
                    description: "Logboeken wissen.",
                    title: "Logboeken wissen",
                    body: "Weet u zeker dat u alle logbestanden wilt wissen?",
                    confirmText: "duidelijk",
                    cancel: "Annuleren"
                }
            }
        },
        messageNotifier: {
            name: "BerichtNotifier",
            description: "Ontvang meldingen wanneer geselecteerde gebruikers berichten verzenden",
            dm: "privé bericht",
            option: {
                users: {
                    label: "Gebruikers",
                    description: "Door komma's gescheiden lijst met gebruikers-ID's om berichtmeldingen te ontvangen",
                    invalidId: "{{id}} is geen geldige gebruikers-ID"
                }
            },
            notification: {
                title: "{{gebruikersnaam}} heeft een bericht gestuurd",
                body: "Klik om naar {{locationName}} te gaan"
            }
        },
        messageTags: {
            name: "BerichtTags",
            description: "Hiermee kunt u berichten opslaan en gebruiken met een eenvoudige opdracht.",
            notExist: "De tag **{{tagname}}** is niet langer beschikbaar! Start Discord opnieuw om het probleem te verhelpen :)",
            alreadyExist: "Er bestaat al een tag met de naam **{{tagname}}**!",
            sentTag: "**{{tagname}}** tag is verzonden!",
            successCreate: "**{{tagname}}** tag is succesvol aangemaakt!",
            allTags: "Alle tags:",
            noTags: "Ups! Er zijn nog geen tags, gebruik /tag create om ze aan te maken!",
            noDeleteTag: "Een tag met de naam **{{tagname}}** is niet gevonden en kan dus niet worden verwijderd!",
            successDelete: "Tag **{{name}}** succesvol verwijderd!",
            tagPreview: "Een tag met de naam **{{name}}** bestaat niet!",
            option: {
                clyde: {
                    label: "Clyde-bericht in post",
                    description: "Eenmaal ingeschakeld, stuurt Clyde u een tijdelijk bericht wanneer een tag wordt gebruikt."
                },
                tagsList: {
                    label: "Taglijst",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Beheer uw eigen tags",
                    option: {
                        create: {
                            description: "Maak een nieuw etiket",
                            name: "Naam van de tag die het antwoord activeert",
                            message: "Het bericht dat wordt verzonden als je deze hashtag gebruikt"
                        },
                        list: {
                            description: "Maak een lijst van alle tags"
                        },
                        delete: {
                            description: "Verwijder een label",
                            name: "Naam van de tag die moet worden verwijderd"
                        },
                        preview: {
                            description: "Bekijk een voorbeeld van een tag zonder deze openbaar te plaatsen",
                            name: "Naam van de tag waarvan u een voorbeeld wilt bekijken"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Voegt een microfoonlustestpictogram toe aan het gebruikerspaneel",
            button: "Microfoontestcyclus"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Diverse middenklikverbeteringen (muiswiel), zoals plakken en het openen van links.",
            option: {
                openScope: {
                    label: "Openingsbereik",
                    description: "Het voorkomt dat deze inhoudstypen worden geopend wanneer er met de middelste klik op wordt geklikt.",
                    links: "Koppelingen",
                    media: "Media",
                    linksAndMedia: "Links en media",
                    none: "Geen"
                },
                pasteScope: {
                    label: "Bindingsbereik",
                    description: "In bepaalde gevallen voorkomt een middelste klik plakken.",
                    always: "Blokkeer plakken altijd met middelklik",
                    focus: "Alleen blokkeren wanneer het tekstgebied niet scherpgesteld is",
                },
                pasteThreshold: {
                    label: "Bondingsdrempel",
                    description: "De milliseconden die nodig zijn om het plakken opnieuw in te schakelen na een middelste klik."
                }
            }
        },
        moreCommands: {
            name: "Meer opdrachten",
            description: "Echo, Lenny, Mock en meer",
            command: {
                echo: {
                    description: "Stuurt een bericht als Clyde (lokaal)"
                },
                lenny: {
                    description: "Stuurt een Lenny-gezicht"
                },
                mock: {
                    description: "Maakt mensen belachelijk (mOcK PeOpLe)"
                },
                wordcount: {
                    description: "Berekent het aantal woorden in een bericht",
                    response: "Het bericht bevat {{count}} woorden."
                },
                flipcoin: {
                    description: "Gooit een munt op en retourneert het resultaat",
                    heads: "Schrijven",
                    tails: "Tuur",
                    response: "Het geld {{result}} is aangekomen."
                },
                ask: {
                    description: "Stelt en beantwoordt ja/nee-vragen",
                    yes: "Ja",
                    no: "Nee",
                    maybe: "Misschien",
                    askAgain: "vraag het later nog eens",
                    definitelyNot: "Absoluut niet",
                    itIsCertain: "Absoluut ja"
                },
                randomanimal: {
                    description: "Retourneert een willekeurige dierenafbeelding",
                    animal: "kies je dier",
                    cat: "kat",
                    dog: "hond",
                    response: "Sorry, er kunnen momenteel geen dierenafbeeldingen worden opgehaald"
                },
                randomnumber: {
                    description: "Genereert een willekeurig getal tussen twee waarden",
                    min: "Minimum",
                    max: "maximale waarde",
                    response: "Willekeurig getal tussen {{min}} en {{max}}: {{number}}"
                },
                choose: {
                    description: "Kiest willekeurig één uit de gegeven opties",
                    option: "Door komma's gescheiden lijst met opties",
                    response: "Mijn keuze: {{choice}}"
                },
                systeminfo: {
                    description: "Toont systeeminformatie",
                    platform: "Platform",
                    deviceType: "Apparaattype",
                    mobile: "Mobiel",
                    desktop: "bureaublad",
                    browser: "Scanner",
                    cpuCores: "CPU-kernen",
                    memory: "Geheugen",
                    screen: "Scherm",
                    languages: "Dil",
                    network: "Wit",
                    online: "online",
                    offline: "offline",
                    failedToFetch: "Systeeminformatie kan niet worden opgehaald",
                    unknown: "onbekend"
                },
                getuptime: {
                    description: "Toont de uptime van de klant",
                    response: "**Client-uptime**: {{uptime}} minuten"
                },
                gettime: {
                    description: "Toont de huidige tijd",
                    response: "Huidige tijd: {{time}}"
                },
                transform: {
                    description: "Transformeert tekst volgens de opgegeven optie",
                    transformation: {
                        description: "Het type transformatie dat op de tekst moet worden toegepast",
                        lowercase: "Converteer tekst naar kleine letters",
                        uppercase: "Converteer tekst naar hoofdletters",
                        localeLowercase: "Converteer tekst naar kleine letters",
                        localeUppercase: "Converteer tekst naar hoofdletters",
                        same: "laat het hetzelfde"
                    },
                    repeat: "Hoe vaak zal het herhaald worden?",
                    reverse: "Of de tekst moet worden omgedraaid",
                    normalize: {
                        description: "Tekstnormalisatieformaat",
                        nfc: "Normalisatieformaat C (NFC)",
                        nfd: "Normalisatieformulier D (NFD)",
                        nfkc: "Normalisatieformaat KC (NFKC)",
                        nfkd: "Normalisatieformaat KD (NFKD)"
                    },
                    text: "Tekst om te converteren"
                }
            }
        },
        moreKaomoji: {
            name: "Meer Kaomoji",
            description: "Voegt meer Kaomoji toe aan Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "Meer snelle reacties",
            description: "Verbetert de snelle reactieknoppen in het berichtcontextmenu.",
            option: {
                reactionCount: {
                    label: "Aantal reacties",
                    description: "Aantal te tonen reacties (0-42)"
                },
                frequentEmojis: {
                    label: "Veelgebruikte emoji's",
                    description: "Gebruik veelgebruikte emoji's in plaats van favoriete emoji's"
                },
                rows: {
                    label: "Ze verkopen",
                    description: "Aantal regels met snelle reacties om weer te geven"
                },
                columns: {
                    label: "Kolommen",
                    description: "Aantal kolommen met snelle reacties om weer te geven"
                },
                compactMode: {
                    label: "Compacte mod",
                    description: "Het schaalt de knoppen naar 75% van hun oorspronkelijke grootte, terwijl de binnenste emoji wordt vergroot tot 125%. Emoji's hebben 93,75% van de oorspronkelijke grootte. Het wordt aanbevolen om minimaal 5 kolommen te gebruiken"
                },
                scroll: {
                    label: "rol",
                    description: "Schakel scrollende emoji-lijst in"
                }
            }
        },
        moreUserTags: {
            name: "Meer gebruikerstags",
            description: "Voegt tags toe voor webhooks en moderatierollen (eigenaar, beheerder, etc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Deze gebruiker is een webhook"
                },
                owner: {
                    name: "Eigenaar",
                    description: "Eigenaar van de server"
                },
                admin: {
                    name: "Beheerder",
                    description: "Heeft beheerdersbevoegdheid"
                },
                staff: {
                    name: "Officieel",
                    description: "Kan server, kanalen of rollen beheren"
                },
                mod: {
                    name: "Mod",
                    description: "Kan berichten beheren of contacten kicken/bannen"
                },
                vcmod: {
                    name: "Zie mod",
                    description: "Kan voicechats beheren"
                },
                chatmod: {
                    name: "Chatmodus",
                    description: "Kan berichten beheren"
                }
            },
            modal: {
                example: "Voorbeeld",
                tag: "Ticket",
                customTextPlaceholder: "Tekst op label (standaard: {{displayName}})",
                messages: "Weergeven in berichten",
                memberList: "Toon in ledenlijst en profielen"
            },
            option: {
                dontShowForBots: {
                    label: "Niet weergeven voor bots",
                    description: "Toon extra tags voor bots (behalve webhooks)"
                },
                dontShowBotTag: {
                    label: "Bottag tonen",
                    description: "Toon alleen extra tags / Verberg [APP]"
                },
                showWebhookTagFully: {
                    label: "Volledige webhooktag weergeven",
                    description: "Toon volledige webhooktag in gevolgde kanalen (bijvoorbeeld aankondigingen)"
                },
                tagSettings: {
                    label: "Tag-instellingen",
                    description: "gevuld te worden"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Een commando om van of naar morsecode te vertalen.",
            command: {
                morse: {
                    description: "Vertaalt van of naar morsecode",
                    message: "Tekst om te converteren"
                }
            }
        },
        moyai: {
            name: "moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volume",
                    description: "🗿🗿🗿volume"
                },
                quality: {
                    label: "Kwaliteit",
                    description: "🗿🗿🗿 kwaliteit",
                    normal: "Normaal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Trigger wanneer onscherp",
                    description: "Trigger 🗿 zelfs als het venster niet scherp is"
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
            name: "Muziekbediening",
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
                    description: "Spotify opent URI's in plaats van URL's. Werkt alleen als Spotify is geïnstalleerd en werkt mogelijk niet op alle platforms"
                },
                previousButtonRestartsTrack: {
                    label: "Knop Vorige Start het nummer opnieuw",
                    description: "Als de afspeeltijd meer dan 3 seconden bedraagt, wordt door op de vorige knop te drukken het huidige nummer vanaf het begin gestart"
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
                    description: "Voor deze instelling is {{app}} vereist"
                },
                showYoutubeMusicControls: {
                    label: "Toon YouTube-muziekbediening",
                    description: "Toon muziekbedieningen voor YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube Music API-URL'si",
                    description: "De URL van de YouTube Music API-server die je gebruikt"
                },
                hoverControls: {
                    label: "Zweefbediening",
                    description: "Toon bedieningselementen bij zweven"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "Toon notities als er geen songteksten zijn",
                    description: "Toon notitiepictogram wanneer de songtekst niet is gevonden"
                },
                LyricsPosition: {
                    label: "Lyrische locatie",
                    description: "Locatie van het songtekstpaneel",
                    above: "Bovenstaande speler(s)",
                    below: "Hieronder speler(s)"
                },
                LyricsProvider: {
                    label: "Aanbieder van songteksten",
                    description: "Bron van teksten",
                    spotify: "Spotify (muziekmatch)",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "Vertaal naar jouw taal",
                    description: "Songteksten vertalen: als u dit wijzigt, worden bestaande vertalingen gewist",
                    cleared: "Vertaling opgeschoond"
                },
                LyricsConversion: {
                    label: "Lyrische conversie",
                    description: "Automatisch teksten vertalen of romaniseren",
                    none: "Geen",
                    translate: "Overzetten",
                    romanize: "Romaniseren Et"
                },
                FallbackProvider: {
                    label: "Back-upprovider",
                    description: "Als de ene songtekstprovider faalt, probeer dan een andere"
                },
                ShowFailedToasts: {
                    label: "Foutmeldingen weergeven",
                    description: "Toon melding wanneer de songtekst niet kan worden geladen"
                },
                PurgeLyricsCache: {
                    label: "Wis de songtekstcache",
                    description: "Verwijder alle in de cache opgeslagen teksten en vertalingen",
                    button: "Cache wissen",
                    cacheLyricsPurged: "Songtekstcache gewist"
                }
            },
            context: {
                spotify: {
                    label: "Spotify-lyriekmenu",
                    type: "Spotify {{type}}-menu",
                    copy: "Kopieer {{type}} naam",
                    link: "Kopieer {{type}} link",
                    open: "Open {{type}} in Spotify",
                    album: "Spotify-albummenu"
                },
                tidal: {
                    label: "Tidal Songtekstmenu",
                    lyrics: "Getijdenteksten",
                    type: "Getijdenmenu {{name}}",
                    copy: "Kopieer naam {{name}}",
                    open: "Open {{name}} op Tidal",
                    album: "Getijdenalbummenu"
                },
                ytm: {
                    type: "YouTube Music {{name}} Menu's",
                    copy: "Kopieer naam {{name}}",
                    open: "{{name}}'i YouTube Music'te Aç",
                    album: "YouTube Muziekalbummenu",
                    muted: "Gedempt"
                },
                lyrics: {
                    provider: "Aanbieder van songteksten",
                    saved: "opgenomen",
                    notFound: "Synchrone songtekst niet gevonden"
                },
                copy: {
                    currentLyrics: "Kopieer de huidige songtekst"
                }
            },
            alert: {
                lyricCopied: "Songtekst gekopieerd naar klembord!",
                noLyrics: "geen teksten",
                noLyricsTo: "Geen songtekst voor {{translated}}",
                translate: "vertaling",
                romanize: "niet romaniseren",
                lyricsFetchFailed: "Er konden geen songteksten worden gevonden",
                failedToFetchLyrics: "{{translated}} kan niet worden opgehaald",
                translation: "vertaling",
                romanization: "romanisering",
                failedToFetchTranslation: "Kon de vertaling van de tekst van {{translated}} niet krijgen"
            },
            modal: {
                install: {
                    title: "Hoe te installeren",
                    install: "{{link}} installeer vanaf hier en ga vervolgens naar TidaLuna-instellingen → Add-on-winkels → installeer @vmohammad/api",
                    tidaluna: "Nee Luna"
                },
                player: {
                    noPlaying: "Er wordt geen nummer afgespeeld",
                    artist: "Artiest:",
                    album: "Album:",
                    noLyrics: "Tekst niet gevonden :(",
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
                failed: "Kan venster niet maken :(",
                checkConsole: "Controleer de console op fouten",
                invalidUrlCustomApi: "Ongeldige URL-indeling van aangepaste API-server"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDM's",
            description: "Toont gedeelde groeps-DM's op profielen",
            no: "Geen gemeenschappelijke groepen",
            mutualGroup: "{{count}} Gemeenschappelijke groep",
            members: "Lid",
            noGroup: "Geen openbare groeps-DM's",
            header: "Gemeenschappelijke groepen"
        },
        neverPausePreviews: {
            name: "NooitPauzeVoorbeelden",
            description: "Voorkomt dat previews tijdens gesprekken/PiP (scherm delen, uitzendingen, enz.) worden gepauzeerd, zelfs als de app de focus verliest.",
            about: "Deze add-on zorgt ervoor dat Discord meer bronnen verbruikt dan normaal."
        },
        newGuildSettings: {
            name: "Nieuwe Gilde-instellingen",
            description: "Dempt en wijzigt automatisch verschillende andere instellingen wanneer u lid wordt van nieuwe servers",
            context: {
                apply: "Pas nieuwe serverinstellingen toe"
            },
            option: {
                guild: {
                    label: "Mute-server",
                    description: "Demp de server automatisch"
                },
                messages: {
                    label: "Instellingen voor servermeldingen",
                    description: "Instellingen voor servermeldingen",
                    all: "Alle berichten",
                    mentions: "Alleen @vermeldingen",
                    nothing: "Geen",
                    default: "Serverstandaard"
                },
                everyone: {
                    label: "Onderdruk @iedereen en @hier",
                    description: "Onderdruk de meldingen @iedereen en @hier"
                },
                role: {
                    label: "Onderdruk alle @vermeldingen van rollen",
                    description: "Onderdruk alle @vermeldingen van rollen"
                },
                highlights: {
                    label: "Onderdruk hoogtepunten",
                    description: "Hoogtepunten automatisch onderdrukken"
                },
                events: {
                    label: "Demp nieuwe evenementen",
                    description: "Demp automatisch nieuwe gebeurtenissen"
                },
                showAllChannels: {
                    label: "Toon alle kanalen",
                    description: "Toon automatisch alle kanalen"
                },
                mobilePush: {
                    label: "Demp mobiele meldingen",
                    description: "Schakel mobiele meldingen automatisch uit"
                },
                voiceChannels: {
                    label: "Spraakkanalen",
                    description: "Verberg automatisch namen in spraakkanalen"
                }
            }
        },
        newPluginsManager: {
            name: "NieuwePluginsManager",
            description: "Handige tool die u waarschuwt wanneer er nieuwe plug-ins aan Plexcord worden toegevoegd",
            modal: {
                title: "Nieuwe plug-ins en instellingen",
                description: "Sinds uw laatste bezoek zijn er nieuwe plug-ins en instellingen toegevoegd. Bekijk hieronder de nieuwe toevoegingen.",
                tooltip: "Sluit voor deze sessie",
                dontShowAgain: "Laat het niet meer zien",
                restartRequired: "De volgende plug-ins vereisen een herstart",
                restart: "Opnieuw opstarten",
                continue: "Devam Et"
            }
        },
        noAppsAllowed: {
            name: "Geen apps toegestaan",
            description: "Brengt de Bot-tag terug voor bots"
        },
        noBlockedMessages: {
            name: "Geen geblokkeerde berichten",
            description: "Verbergt volledig alle geblokkeerde/genegeerde berichten uit de chat",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Verberg ook genegeerde gebruikers",
                    description: "Verberg ook berichten van genegeerde gebruikers."
                },
                disableNotifications: {
                    label: "Schakel meldingen uit",
                    description: "Verberg nieuwe berichtmeldingen voor geblokkeerde gebruikers. Het volgende is altijd van toepassing als de functie 'Standaardgebruikers verbergen' is ingeschakeld en de gebruiker die de melding heeft geactiveerd niet in de lijst 'Uitzonderingsgebruikers' staat."
                },
                allowAutoModMessages: {
                    label: "AutoMod-berichten toestaan",
                    description: "Laat berichten verzonden door AutoMod ongefilterd passeren."
                },
                hideBlockedUserReplies: {
                    label: "Verberg geblokkeerde gebruikersantwoorden",
                    description: "Verberg berichten van geblokkeerde gebruikers in discussies waaraan u eerder heeft deelgenomen."
                },
                defaultHideUsers: {
                    label: "Standaard gebruiker verbergen",
                    description: "Indien ingeschakeld, worden berichten van geblokkeerde gebruikers volledig verborgen en worden berichten van gebruikers-ID's in de uitzonderingslijst in plaats daarvan samengevouwen (standaard Discord-gedrag). Indien uitgeschakeld, worden berichten van geblokkeerde gebruikers samengevouwen en worden berichten van gebruikers-ID's in de uitzonderingslijst volledig verborgen."
                },
                overrideUsers: {
                    label: "Uitzonderingsgebruikers",
                    description: "Door komma's gescheiden lijst met gebruikers-ID's die u wilt verbergen of samenvouwen, in plaats van het hierboven geselecteerde standaardgedrag."
                }
            }
        },
        noBulletPoints: {
            name: "Geen BulletPoints",
            description: "Markdown-kogels (•, -, *) voorkomen dat u schrijft (slechte gewoonte)"
        },
        noDeepLinks: {
            name: "Schakel DeepLinks uit",
            description: "Schakelt de vervelende functie voor deep links uit die probeert de desktop-app van Discord te openen"
        },
        noDeleteSafety: {
            name: "NeeVerwijderenVeiligheid",
            description: "Verwijdert de vereiste 'type servernaam' bij het verwijderen van een server",
            option: {
                confirmModal: {
                    label: "Bevestigingsvenster",
                    description: "'Weet je zeker dat je deze server wilt verwijderen?' Bevestigingsvenster tonen?"
                }
            },
            modal: {
                title: "Server verwijderen?",
                body: "Het zal permanent zijn, als dat nog niet duidelijk was.",
                confirm: "Sil",
                cancel: "Annuleren"
            }
        },
        noDevtoolsWarning: {
            name: "GeenDevtoolsWaarschuwing",
            description: "Schakelt de waarschuwingsbanner 'LET'S HIT' op de console uit. Als neveneffect voorkomt het ook dat Discord zijn token verbergt, waardoor willekeurige afmeldingen worden voorkomen."
        },
        noF1: {
            name: "Nee. F1",
            description: "F1 schakelt de helpsnelkoppeling uit."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Wanneer een link wordt geplakt terwijl de tekst is geselecteerd, wordt voorkomen dat de link als een gemaskeerde URL wordt geplakt."
        },
        noMirroredCamera: {
            name: "Geen gespiegelde camera",
            description: "Het voorkomt dat de camera het scherm spiegelt."
        },
        noModalAnimation: {
            name: "Geen modale animatie",
            description: "Schakelt openings-/sluitanimaties uit in alle modale vensters."
        },
        noMosaic: {
            name: "GeenMozaïek",
            description: "Verwijdert de visuele mozaïeklay-out van Discord.",
            option: {
                inlineVideo: {
                    label: "Inline-video",
                    description: "Speel video's af zonder modaal in een lus te plaatsen."
                }
            }
        },
        noNitroUpsell: {
            name: "Geen NitroUpsell",
            description: "Verwijdert ALLE Nitro-verkoopmeldingen uit Discord door de klant te laten denken dat u Nitro bezit."
        },
        noOnboarding: {
            name: "Geen onboarding",
            description: "Het maakt sneller inloggen mogelijk door het deelnameproces aan de server van Discord over te slaan."
        },
        noOnboardingDelay: {
            name: "Geen onboardingvertraging",
            description: "Omzeilt trage en vervelende server-join-vertraging."
        },
        noPendingCount: {
            name: "GeenPendingCount",
            description: "Verwijdert het aantal meldingen voor inkomende vriendschapsverzoeken, berichtverzoeken en Nitro-aanbiedingen.",
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
                    label: "Aantal Nitro-aanbiedingen verbergen",
                    description: "Aantal nitro-aanbiedingen verbergen"
                }
            }
        },
        noProfileThemes: {
            name: "Geen profielthema's",
            description: "Het verwijdert Nitro-profielthema's volledig voor iedereen behalve jezelf."
        },
        noPushToTalk: {
            name: "Geen PushToTalk",
            description: "Omzeilt de push-to-talk-vereiste voor spraakactiviteit op kanalen die dit vereisen."
        },
        noReplyMention: {
            name: "Geen antwoordVermelding",
            description: "Schakelt antwoordpings standaard uit.",
            option: {
                userList: {
                    label: "Gebruikerslijst",
                    description: "Lijst met gebruikers die wel of niet mogen pingen (moet worden gescheiden door een komma of spatie)"
                },
                roleList: {
                    label: "Rollenlijst",
                    description: "Lijst met rollen die ping toestaan ​​of uitsluiten (moet worden gescheiden door een komma of spatie)"
                },
                shouldPingListed: {
                    label: "Ping vermeld",
                    description: "Gedrag",
                    dontPing: "Pingen van vermelde gebruikers/rollen",
                    onlyPing: "Ping alleen vermelde gebruikers/rollen"
                },
                inverseShiftReply: {
                    label: "Reverse Shift Response-gedrag",
                    description: "Keert het ploegantwoordgedrag van Discord om (vermeldt de gebruiker bij ploegantwoorden indien ingeschakeld)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "Normaliseer berichtkoppelingen",
            description: "Verwijdert canary/ptb-voorvoegsels uit berichtlinks."
        },
        noRoleHeaders: {
            name: "Geen RolHeaders",
            description: "Wij zijn allemaal gelijk!! Verwijdert roltitels uit de ledenlijst."
        },
        noRPC: {
            name: "GeenRPC",
            description: "Discord schakelt rijke aanwezigheid uit."
        },
        noServerEmojis: {
            name: "Van ServerEmoji's",
            description: "De server geeft geen emoji's weer in het menu voor automatisch aanvullen.",
            option: {
                shownEmojis: {
                    label: "Emoji's weergegeven",
                    description: "Kies welke emoji's je wilt weergeven in het menu voor automatisch aanvullen",
                    onlyUnicode: "Alleen Unicode-emoji's",
                    currentServer: "Unicode-emoji's en emoji's op de huidige server",
                    all: "Unicode-emoji's en alle server-emoji's (standaard Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "Geen systeembadge",
            description: "Schakelt de ongelezen meldingsbadge op de taakbalk en het systeemvak uit."
        },
        notificationTitle: {
            name: "Meldingstitel",
            description: "Maakt bureaubladmeldingen informatiever."
        },
        notificationVolume: {
            name: "Meldingsvolume",
            description: "Stel een aangepast volume in voor Discord-meldingen.",
            option: {
                notificationVolume: {
                    label: "Meldingsgeluid",
                    description: "Meldingsvolume"
                }
            }
        },
        noTypingAnimation: {
            name: "Geen typenAnimatie",
            description: "Schakelt de typanimatie in chats uit."
        },
        noUnblockToJump: {
            name: "GeenUnblockToJump",
            description: "Hiermee kunt u berichten van geblokkeerde of genegeerde gebruikers (en mogelijk spammers) overslaan zonder ze te deblokkeren."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Zelfs als een gebruiker opeenvolgende ongelezen berichten in DM's verzendt, ontvangt u slechts één geluidsmelding.",
            option: {
                channelToAffect: {
                    label: "Kanaaltype dat wordt beïnvloed",
                    description: "Selecteer het type DM waarop de plug-in van invloed is",
                    both: "Beide",
                    user: "DM's van gebruikers",
                    group: "Groeps-DM's"
                },
                allowMentions: {
                    label: "@AllowMentions",
                    description: "Ontvang geluidsmeldingen voor @mentions"
                },
                allowEveryone: {
                    label: "Sta @iedereen toe",
                    description: "Ontvang geluidsmeldingen voor @iedereen en @hier in groeps-DM's"
                },
                ignoreUsers: {
                    label: "Gebruikers om te negeren",
                    description: "Gebruikers-ID's om NOOIT meldingen te beperken (gescheiden door komma + spatie)"
                },
                alwaysPlaySound: {
                    label: "Speel altijd geluid af",
                    description: "Speel geluid af, zelfs als het meldingsgeluid is uitgeschakeld"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Opent links in relevante applicaties in plaats van in de browser",
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
                    description: "Open Epic Games-links in Epic Games Launcher"
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
                    description: "Open VRChat-links in de VRChat-app"
                }
            },
            notification: {
                open: "Geopende link in native app"
            }
        },
        overrideForumDefaults: {
            name: "Forumstandaardwaarden negeren",
            description: "Hiermee kunt u de standaard forumindeling/sorteervolgorde overschrijven. U kunt nog steeds wijzigingen per kanaal aanbrengen.",
            option: {
                defaultLayout: {
                    label: "Standaardindeling",
                    description: "Kies welke lay-out u als standaard wilt gebruiken",
                    list: "Lijst",
                    gallery: "Galerij"
                },
                defaultSortOrder: {
                    label: "Standaard sorteervolgorde",
                    description: "Kies welke sorteervolgorde u standaard wilt gebruiken",
                    recentlyActive: "Laatst actief",
                    datePosted: "Datum geplaatst"
                }
            }
        },
        partyMode: {
            name: "Partymodus",
            description: "Hiermee kun je de feestmodus gebruiken omdat het feest nooit eindigt ✨",
            option: {
                superIntensePartyMode: {
                    label: "Super Intense Party-modus",
                    description: "Partijdichtheid",
                    normal: "Normaal",
                    better: "Beter",
                    projectX: "Project X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Het brengt de optie ‘uitnodigingen voor onbepaalde tijd pauzeren’ terug die Discord domweg heeft verwijderd.",
            pauseIndefinitely: "Pauzeer voor onbepaalde tijd"
        },
        permissionFreeWill: {
            name: "ToestemmingVrije Wil",
            description: "Schakelt beperkingen aan de clientzijde uit in het beheer van kanaalmachtigingen.",
            option: {
                lockout: {
                    label: "impasse",
                    description: "Crashbescherming voor toestemming omzeilen ('Weet je zeker dat je dit wilt doen?')"
                },
                onboarding: {
                    label: "Startvereisten",
                    description: "Omzeil de onboardingvereisten die de server incompatibel kunnen maken ('Deze wijziging kan uw server incompatibel maken [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "MachtigingenViewer",
            description: "Hiermee kunt u de machtigingen bekijken die een gebruiker of kanaal heeft en de rollen van een server.",
            view: "Bekijk machtigingen",
            option: {
                permissionsSortOrder: {
                    label: "Sorteervolgorde van toestemming",
                    description: "Sorteermethode die wordt gebruikt om te bepalen hoe een rol een specifieke machtiging aan een gebruiker verleent",
                    highest: "Hoogste rol",
                    lowest: "Laagste rol"
                }
            },
            icon: {
                denied: "afgewezen",
                allowed: "Toegestaan",
                notOverwritten: "Niet overschreven"
            },
            context: {
                permissions: "Machtigingen"
            },
            modal: {
                title: "Machtigingen",
                noPermissions: "Geen rechten om te tonen!",
                owner: "eigenaar",
                grantedBy: "Toegeeflijk",
                serverOwner: "Server-eigenaar",
                ownerRole: "Eigenaar",
                sortingBy: "{{methode}} wordt met prioriteit gesorteerd",
                highest: "Hoogste rol",
                lowest: "Laagste rol",
                details: "Roldetails"
            }
        },
        petpet: {
            name: "HuisdierPet",
            description: "Voegt de opdracht /petpet toe om petpet-gif van elke afbeelding te maken",
            command: {
                petpet: {
                    description: "Maak een petpet-gif. U kunt slechts één van de afbeeldingsopties opgeven",
                    delay: "Vertraging tussen elk frame. Standaard is 20.",
                    resolution: "Resolutie voor gif. De standaardwaarde is 120. Als je een gek getal invoert en Discord loopt vast, is dat jouw schuld.",
                    image: "Afbeeldingsbijlage om te gebruiken",
                    url: "URL om afbeelding op te halen",
                    user: "De gebruiker wiens avatar als afbeelding wordt gebruikt",
                    noServerPfp: "Gebruik een normale avatar in plaats van serverspecifiek wanneer u de optie 'gebruiker' gebruikt",
                    error: {
                        noImage: "Geen foto gespecificeerd!",
                        delayTooLow: "De vertraging moet minimaal 20 zijn.",
                    }
                }
            },
            error: {
                uploadNotImage: "Het geüploade bestand is geen afbeelding",
                fetchUserFailed: "Kan gebruiker niet ophalen. Kijk op de console voor meer informatie.",
                fetchImageFailed: "Er is een fout opgetreden tijdens het laden van {{url}}. Kijk op de console voor meer informatie."
            }
        },
        pictureInPicture: {
            name: "BeeldInBeeld",
            description: "Voegt een beeld-in-beeld-functie toe aan video's (naast de knop Downloaden)",
            tooltip: "Schakel tussen afbeelding in afbeelding",
            option: {
                loop: {
                    label: "Lus",
                    description: "Of PiP-video moet worden herhaald"
                }
            }
        },
        pinDMs: {
            name: "PinDM's",
            description: "Hiermee kunt u privékanalen (DM's) bovenaan uw DM-lijst vastzetten. U kunt met de rechtermuisknop op DM's klikken om de DM's vast te zetten/verwijderen of de volgorde ervan te wijzigen.",
            context: {
                category: {
                    label: "DM-categoriemenu",
                    edit: "Categorie bewerken",
                    up: "Ga omhoog",
                    down: "Ga naar beneden",
                    delete: "Categorie verwijderen",
                    unnamed: "anoniem"
                },
                pin: {
                    label: "DM Sabitel",
                    addCategory: "Categorie Walgelijk"
                },
                unPin: {
                    label: "DM losmaken",
                    move: "Verplaats naar categorie"
                }
            },
            option: {
                pinOrder: {
                    label: "Bestelling bevestigen",
                    description: "In welke volgorde moeten vastgezette DM's worden weergegeven?",
                    lastMessage: "Op de datum van het laatste bericht",
                    custom: "Privé (wijzig de volgorde door met de rechtermuisknop op kanalen te klikken)"
                },
                canCollapseDmSection: {
                    label: "Inklapbaar vast gedeelte",
                    description: "Maak de niet-gecategoriseerde DM-sectie inklapbaar"
                },
                dmSectionCollapsed: {
                    label: "DM-sectie beperkt",
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
                    name: "Naam",
                    color: "Kleur",
                    save: "Redden",
                    create: "Creëren"
                }
            }
        },
        pingNotifications: {
            name: "PingMeldingen",
            description: "Aanpasbare meldingen en verbeterde vermeldingsopmaak",
            option: {
                friends: {
                    label: "Vrienden",
                    description: "Ontvang een melding wanneer uw vrienden berichten op servers verzenden"
                },
                mentions: {
                    label: "Vermeldingen",
                    description: "Ontvang een melding wanneer iemand u rechtstreeks @vermeldt"
                },
                dms: {
                    label: "DM'ler",
                    description: "Ontvang meldingen voor directe berichten (DM)"
                },
                showInActive: {
                    label: "Weergeven op actieve kanalen",
                    description: "Toon meldingen, zelfs voor momenteel actieve kanalen"
                },
                ignoreMuted: {
                    label: "Negeren Gedempt",
                    description: "Omzeil meldingen van gedempte servers, kanalen of gebruikers"
                }
            },
            unknown: "onbekend",
            dm: "DM",
            groupDM: "Groeps-DM",
            title: "{{username}} op kanaal {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Voegt een pinpictogram toe aan vastgezette berichten."
        },
        plainFolderIcon: {
            name: "Gewoon mappictogram",
            description: "Er worden geen kleine serverpictogrammen in mappen weergegeven."
        },
        platformIndicators: {
            name: "PlatformIndicatoren",
            description: "Voegt platformindicatoren (Desktop, Mobiel, Web...) toe aan gebruikers.",
            embeddedTooltip: "Troosten",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lijst",
                    description: "Toon indicatoren in de ledenlijst"
                },
                badges: {
                    label: "insignes",
                    description: "Toon indicatoren als badges op gebruikersprofielen"
                },
                messages: {
                    label: "Berichten",
                    description: "Toon indicatoren in berichten"
                },
                colorMobileIndicator: {
                    label: "Kleur uw mobiele display",
                    description: "Bepaalt of de mobiele indicator de gebruikersstatuskleur aanneemt of niet."
                },
                showBots: {
                    label: "Toon bots",
                    description: "Bepaalt of platformindicatoren in bots moeten worden weergegeven"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Simuleert welk platform of apparaat u ook gebruikt",
            about: "We kunnen niet garanderen dat deze add-on u beschermt tegen waarschuwingen of verbanningen.",
            platform: {
                desktop: "Discord-klant",
                web: "Onenigheidsweb",
                ios: "Discord iOS",
                android: "Onenigheid Android",
                xbox: "Ingebedde onenigheid",
                playstation: "Ingebedde onenigheid",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Platform",
                    description: "Op welk platform wil je verschijnen?",
                    desktop: "bureaublad",
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
            description: "Voegt een knop toe aan de app-balk waarop snelle Plexcord-acties worden gehost.",
            tooltip: "Plexcord-gereedschapskist",
            context: {
                openLog: "Open het meldingenlogboek",
                enableQuickCSS: "Schakel QuickCSS in",
                openQuickCSS: "Open QuickCSS",
                openSettings: "Instellingen openen",
                manageThemes: "Beheer thema's"
            },
            option: {
                showPluginMenu: {
                    label: "Plug-inmenu weergeven",
                    description: "Toon het plug-insmenu in Plexcord Toolbox"
                }
            }
        },
        polishWording: {
            name: "Poolse formulering",
            description: "Het brengt kleine wijzigingen aan om uw berichten er mooier uit te laten zien en een betere grammatica te hebben. Bekijk de instellingen",
            option: {
                quickDisable: {
                    label: "Snel uitschakelen",
                    description: "Snelle deactivering. Schakelt het bewerken van berichten uit zonder dat u de app opnieuw hoeft te starten."
                },
                blockedWords: {
                    label: "Geblokkeerde woorden",
                    description: "Woorden die niet met een hoofdletter worden geschreven (gescheiden door komma's)."
                },
                fixApostrophes: {
                    label: "Apostrofen repareren",
                    description: "Zorgt ervoor dat afkortingen apostrofs bevatten."
                },
                expandContractions: {
                    label: "Afkortingen openen",
                    description: "Het converteert afgekorte woorden naar hun expliciete vorm (zoals Niet -> Niet doen)."
                },
                fixCapitalization: {
                    label: "Hoofdlettergebruik bewerken",
                    description: "Maakt het mogelijk dat zinnen met hoofdletters beginnen."
                },
                fixPunctuation: {
                    label: "Correcte interpunctie",
                    description: "Bewerkt spaties rond leestekens."
                },
                fixPunctuationFrequency: {
                    label: "Interpunctiefrequentie",
                    description: "Percentage van de frequentie van het plaatsen van punten aan het einde van zinnen (deze functie kan sommige mensen storen).",
                }
            }
        },
        previewMessage: {
            name: "Voorbeeldbericht",
            description: "Hiermee kunt u een voorbeeld van uw bericht bekijken voordat u het verzendt.",
            tooltip: "Voorbeeldbericht"
        },
        profileSets: {
            name: "Profielsets",
            description: "Hiermee kunt u profielvoorinstellingen opslaan en laden via de profielsectie in Instellingen.",
            toast: {
                importFailed: "Kan profielvoorinstellingen niet importeren. Het bestand is mogelijk ongeldig.",
            },
            option: {
                avatarSize: {
                    label: "Avatar-grootte",
                    description: "Avatargrootte in lijst met profielvoorinstellingen"
                },
            },
            modal: {
                override: "Overschrijven",
                merge: "Samenvoegen",
                cancel: "Annuleren",
                timestamp: "{{formattedDate}} om {{formattedTime}}",
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
                random: "willekeurig",
                import: "Importeren",
                exportAll: "Alles exporteren"
            }
        },
        questify: {
            name: "Questify",
            description: "Verbeter je missie-ervaring met een reeks functies of schakel ze volledig uit als ze niet zijn wat je wilt.",
            quests: "Zoektochten",
            context: {
                quest: {
                    label: "Menu Taakknop",
                    ignore: "Markeer Alles negeren",
                    reset: "Negeerlijst opnieuw instellen",
                    fetch: "Taken ophalen",
                    markAsIgnored: "Markeer als negeren",
                    unmarkAsIgnored: "Verwijder negeren",
                    stopAuto: "Stop automatisch aanvullen",
                    copyQuestID: "Kopieer taak-ID",
                    startAuto: "Start Automatisch aanvullen"
                }
            },
            settings: {
                questButton: {
                    title: "Taakknop",
                    description: "Toon een Quest-knop met een optionele indicator voor niet-geclaimde Quests in de serverlijst.",
                    leftClick: "Linksklikactie",
                    middleClick: "Middelste klikactie",
                    rightClick: "Klik met de rechtermuisknop op actie",
                    visibility: "Knopzichtbaarheid",
                    unclaimedIndicator: "Ongevraagde indicator",
                    badgeColor: "Badgekleur",
                    rewardDisplay: "Award-vertoning",
                    includedRewardTypes: "Soorten beloningen inbegrepen",
                    includedRewardTypesDesc: "Bij het spelen van knopzichtbaarheid, aantal badges en waarschuwingsgeluiden telt u alleen missies met deze beloningstypen als niet-geclaimd.",
                    selectRewardTypes: "Selecteer beloningstypen die u wilt opnemen in de niet-geclaimde telling...",
                    noRewardType: "Er is geen ondersteunde taakfunctie met deze naam.",
                    default: "Standaard",
                    disable: "Uitzetten"
                },
                questFeatures: {
                    title: "Taakfuncties",
                    description: "Wijzig specifieke taakeigenschappen.",
                    popupWarning: "De optie {{disablePopup}} wordt genegeerd voor voltooide missies en het bijhouden van de voortgang van missies.",
                    videoQuestInfo: "De optie {{completeVideo}} wacht gedurende de duur van de videotaak en markeert deze automatisch als voltooid.",
                    gameQuestInfo: "Op dezelfde manier wacht de optie {{completeGame}} gedurende de duur van de speltaak en markeert deze automatisch als voltooid. Deze optie wordt alleen ondersteund in de officiële desktopclient.",
                    manualStartWarning: "U moet taken handmatig starten. Met de eerste klik worden Taken op de achtergrond gestart. Voor videotaken openen volgende klikken het videomodal zoals normaal. Om missies te annuleren, kun je het contextmenu in de missietegel openen en {{stopAuto}} selecteren.",
                    tosWarning: "Het gebruik van een van deze opties is in strijd met de Servicevoorwaarden van Discord. Gebruik op eigen risico.",
                    selectFeatures: "Kies welke taakeigenschappen u wilt wijzigen.",
                    disablePopup: "Schakel Taakpop-up uit op het accountpaneel",
                    completeVideo: "Voltooi videotaken op de achtergrond",
                    completeGame: "Voltooi gameplaytaken op de achtergrond",
                    stopAuto: "Stop automatisch aanvullen"
                },
                restyleQuests: {
                    title: "Taken opnieuw formatteren",
                    description: "Markeer taken met optionele themakleuren voor zichtbaarheid.",
                    precedenceNote: "Aangevraagde en verlopen taakstijlen hebben voorrang, zelfs als de taak wordt genegeerd.",
                    gradientStyle: "Gradiënt Stili",
                    assetPreload: "Asset-bootloader",
                    unclaimed: "Ongevraagd",
                    claimed: "Gevraagd",
                    ignored: "genegeerd",
                    expired: "Verlopen",
                    intenseGradient: "Dicht herschikt verloop",
                    defaultGradient: "Standaard herschikkingsverloop",
                    blackGradient: "Subtiel zwart verloop",
                    noGradient: "Geen verloop",
                    loadAllAssets: "Laad alle taakmiddelen bij het laden van de pagina",
                    loadDuringScroll: "Taakmiddelen laden tijdens het scrollen van de pagina"
                },
                reorderQuests: {
                    title: "Taken opnieuw ordenen",
                    description: "Sorteer taken op basis van hun status. Is van toepassing wanneer de sorteeroptie \"Questify\" is geselecteerd op de questpagina.",
                    formatNote: "De door komma's gescheiden lijst moet het volgende bevatten: {{items}}.",
                    placeholder: "Je moet UNCLAIMED, CLAIMED, IGNORED en EXPIRED allemaal toevoegen",
                    invalidFormat: "Ongeldig formaat.",
                    unclaimedSubsort: "Niet-geclaimde subrang",
                    claimedSubsort: "Beweerde onderrang",
                    ignoredSubsort: "Genegeerde onderorde",
                    expiredSubsort: "Verlopen subrang",
                    addedNewest: "Toegevoegd (nieuwste)",
                    addedOldest: "Toevoeging (oudste)",
                    expiredRecent: "Verlopen (laatste)",
                    expiredLeast: "Verlopen (tenminste laatste)",
                    expiringSoon: "Verloopt (dichtstbijzijnde)",
                    expiringLate: "Verloopt (laatste)",
                    claimedRecent: "Aangevraagd (laatste)",
                    claimedLeast: "Aangevraagd (minstens laatste)",
                    ignoredQuestProfile: "Genegeerd taakprofiel",
                    sharedProfile: "Gedeeld: Alle accounts op deze clientshare worden genegeerd.",
                    privateProfile: "Privé: alle accounts op deze client hebben afzonderlijke negaties.",
                    rememberSort: "Onthoud sorteerselectie",
                    rememberFilter: "Onthoud filterselectie",
                    yes: "Ja",
                    no: "Nee",
                    rememberNote: "Deze sorteer- en filterselectie verwijst naar de ingebouwde sorteer- en filteropties op de Taakpagina. De bovenstaande aangepaste sortering is alleen van toepassing als de sorteeroptie \"Questify\" is geselecteerd op de Quest-pagina. Als terughalen is uitgeschakeld, worden de sorteer- of filteropties opnieuw ingesteld telkens wanneer u de taakpagina opent."
                },
                fetchingQuests: {
                    title: "Taken ophalen",
                    description: "Configureer hoe vaak taken worden opgehaald uit Discord en stel waarschuwingen in voor nieuwe taken.",
                    defaultBehavior: "Standaard toont Discord alleen Taken wanneer deze zijn geïnstalleerd en u de Taken-pagina bezoekt. Dit betekent dat zonder een hieronder gedefinieerd ophaalinterval, deze plug-in gedurende de dag niet op de hoogte wordt gesteld van nieuwe Quests die worden toegevoegd.",
                    requirement: "Dit hangt ervan af of de Quest-knop actief is en is ingesteld op {{unclaimed}}, of is ingesteld op {{always}} en de niet-geclaimde indicatoren {{pill}}, {{badge}} of {{both}} zijn ingeschakeld. Anders is het niet nodig om periodiek speurtochten op te halen.",
                    blockWarning: "Als {{fetchingQuests}} is geblokkeerd in de instelling {{questFeatures}}, zal dit ook niet werken.",
                    fetchInterval: "Bereik ophalen",
                    alertSound: "Waarschuwingsgeluid",
                    intervalPlaceholder: "Selecteer of typ een interval tussen 30 minuten en 12 uur.",
                    intervalFeedback: "Intervallen moeten tussen 30 minuten en 12 uur liggen.",
                    soundPlaceholder: "Kies een geluid of geef een aangepaste geluids-URL op.",
                    soundFeedback: "De audio is niet gevonden of de URL is niet afkomstig van een ondersteund domein.",
                    disabled: "Gehandicapt",
                    minutes: "Een minuut",
                    minute: "Een minuut",
                    hours: "Moment",
                    hour: "Moment",
                    thirtyMinutes: "30 minuten",
                    oneHour: "1 moment",
                    threeHours: "3 momenten",
                    sixHours: "6 momenten",
                    twelveHours: "12 momenten",
                    customSound: "AANGEPASTE GELUID"
                },
                disableOptions: {
                    everything: "Schakel alles uit",
                    discovery: "Schakel het tabblad Ontdekken uit",
                    dms: "Schakel het tabblad Taken uit in DM's",
                    fetching: "Schakel het ophalen van taken uit",
                    popup: "Schakel pop-up boven accountpaneel uit",
                    sponsored: "Schakel gesponsorde banner uit op de takenpagina",
                    badge: "Badge op gebruikersprofielen uitschakelen",
                    inventory: "Schakel de transportmelding voor cadeauvoorraad uit",
                    friendsList: "Vriendenlijst Momenteel actieve promotie",
                    membersList: "Ledenlijst Actieve speelpictogrammen",
                    gameQuests: "Voltooi spel-/activiteitsuitdagingen op de achtergrond",
                    videoQuests: "Voltooi videokijktaken op de achtergrond",
                    achievementQuests: "Voltooi activiteitstaken op de achtergrond",
                    mobileDesktop: "Maak mobiele taken compatibel met desktop",
                    notifyOnComplete: "Laat het mij weten als de taak is voltooid"
                },
                options: {
                    always: "Altijd",
                    unclaimed: "Ongevraagd",
                    never: "Nooit",
                    pill: "Hap",
                    badge: "Kenteken",
                    both: "Beiden",
                    none: "Geen",
                    openQuests: "Open speurtochten",
                    contextMenu: "Contextmenu",
                    pluginSettings: "Plug-in-instellingen",
                    nothing: "Niets",
                    orbs: "bollen",
                    nitroCodes: "Nitro-codes",
                    rewardCodes: "Beloningscodes",
                    inGameItems: "In-game-items",
                    profileCollectibles: "Profielcollecties"
                }
            },
            option: {
                disableQuests: {
                    label: "Taken uitschakelen",
                    description: "Kies welke taakfuncties u wilt uitschakelen."
                },
                disableQuestsEverything: {
                    label: "Schakel alles uit",
                    description: "Schakel alle taakfuncties uit."
                },
                disableQuestsFetchingQuests: {
                    label: "Schakel het ophalen van taken uit",
                    description: "Schakel het ophalen van taken uit Discord uit."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Schakel het tabblad Taak uit in DM's",
                    description: "Schakel het tabblad Taak op de pagina Directe berichten uit."
                },
                disableQuestsDiscoveryTab: {
                    label: "Schakel het tabblad Ontdekken uit",
                    description: "Schakel het tabblad Quest op de pagina Ontdekken uit."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Schakel gesponsorde banner uit op de takenpagina",
                    description: "Schakel de gesponsorde banner op de pagina Taken uit."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Schakel pop-up uit op het accountpaneel",
                    description: "Schakel de pop-up Taak bovenaan uw accountpaneel uit."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Badge op gebruikersprofielen uitschakelen",
                    description: "Schakel de taakbadge uit voor gebruikersprofielen."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Schakel de melding voor het verplaatsen van cadeauvoorraad uit",
                    description: "Cadeau-inventaris Schakel de melding van missiebewegingen uit."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Schakel de vriendenlijst uit die momenteel actief is",
                    description: "Schakel Quest-promotie uit voor games die door vrienden worden gespeeld."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Schakel actieve speelpictogrammen uit in de ledenlijst",
                    description: "Schakel actieve afspeelpictogrammen uit in de ledenlijst."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Maak mobiele taken desktop-compatibel",
                    description: "Maak taken die alleen voor mobiel beschikbaar zijn, compatibel met desktop."
                },
                completeVideoQuestsInBackground: {
                    label: "Voltooi videotaken op de achtergrond",
                    description: "Voltooi videomissies op de achtergrond nadat de videotijd is verstreken."
                },
                completeGameQuestsInBackground: {
                    label: "Voltooi spelmissies op de achtergrond",
                    description: "Voltooi spelmissies op de achtergrond nadat de speeltijd is verstreken."
                },
                completeAchievementQuestsInBackground: {
                    label: "Voltooi activiteitstaken op de achtergrond",
                    description: "Voltooi activiteitsuitdagingen op de achtergrond."
                },
                notifyOnQuestComplete: {
                    label: "Laat het mij weten als de taak is voltooid",
                    description: "Toon melding wanneer een taak automatisch is voltooid."
                },
                questButton: {
                    label: "Taakknop",
                    description: "Toon een Quest-knop in de serverlijst."
                },
                questButtonDisplay: {
                    label: "Weergave van de taakknop",
                    description: "Welk weergavetype moet worden gebruikt voor de knop Taak in de serverlijst."
                },
                questRewardIncludeRewardCode: {
                    label: "Inclusief beloningscodes",
                    description: "Voeg missies met beloningscodes toe bij het bekijken van het aantal missies."
                },
                questRewardIncludeNitroCode: {
                    label: "Inclusief Nitro-codes",
                    description: "Voeg Nitro-gecodeerde missies toe bij het bekijken van het aantal missies."
                },
                questRewardIncludeInGame: {
                    label: "Inclusief in-game beloningen",
                    description: "Voeg missies toe met in-game beloningen wanneer je de missietellingen bekijkt."
                },
                questRewardIncludeCollectibles: {
                    label: "Inclusief collecties",
                    description: "Voeg speurtochten met verzamelvoorwerpen toe bij het bekijken van het aantal speurtochten."
                },
                questRewardIncludeOrbs: {
                    label: "Inclusief bollen",
                    description: "Voeg wereldwinnende missies toe als je het aantal missies bekijkt."
                },
                questButtonUnclaimed: {
                    label: "Quest-knop Niet-geclaimde indicator",
                    description: "Welk weergavetype moet worden gebruikt voor de niet-geclaimde indicator op de knop Taak in de serverlijst."
                },
                questButtonBadgeColor: {
                    label: "Quest-knopbadgekleur",
                    description: "De kleur van de Quest-knopbadge in de serverlijst."
                },
                questButtonLeftClickAction: {
                    label: "Linksklikactie",
                    description: "Actie die moet worden ondernomen wanneer u met de linkermuisknop op de knop Taak in de serverlijst klikt."
                },
                questButtonMiddleClickAction: {
                    label: "Middelste klikactie",
                    description: "Actie die moet worden ondernomen wanneer u met de middelste muisklik op de knop Taak in de serverlijst klikt."
                },
                questButtonRightClickAction: {
                    label: "Klik met de rechtermuisknop op actie",
                    description: "Actie die moet worden ondernomen wanneer u met de rechtermuisknop op de knop Taak in de serverlijst klikt."
                },
                fetchingQuests: {
                    label: "Taken ophalen",
                    description: "Breng taak uit onenigheid."
                },
                fetchingQuestsInterval: {
                    label: "Quest-ophaalbereik",
                    description: "Interval (in seconden) om taken op te halen van Discord."
                },
                fetchingQuestsAlert: {
                    label: "Quest Ophaalwaarschuwing",
                    description: "Het geluid dat wordt afgespeeld wanneer nieuwe missies worden gedetecteerd."
                },
                fetchingQuestsAlertVolume: {
                    label: "Quest Ophaalwaarschuwingsvolume",
                    description: "Het geluidsvolume dat wordt afgespeeld wanneer nieuwe missies worden gedetecteerd."
                },
                restyleQuests: {
                    label: "Taken opnieuw formatteren",
                    description: "Pas het uiterlijk van taaktegels op de pagina Taken aan."
                },
                restyleQuestsUnclaimed: {
                    label: "Taken opnieuw formatteren - ongevraagd",
                    description: "De kleur van niet-geclaimde taaktegels op de pagina Taken."
                },
                restyleQuestsClaimed: {
                    label: "Taken opnieuw formatteren - gevraagd",
                    description: "De kleur van de geclaimde taaktegels op de pagina Taken."
                },
                restyleQuestsIgnored: {
                    label: "Taken opnieuw formatteren - Genegeerd",
                    description: "De kleur van genegeerde taaktegels op de pagina Taken."
                },
                restyleQuestsExpired: {
                    label: "Taken opnieuw formatteren - Verlopen",
                    description: "De kleur van verlopen taaktegels op de pagina Taken."
                },
                restyleQuestsGradient: {
                    label: "Taken opnieuw formatteren - Verloop",
                    description: "Verloopstijl gebruikt in taaktegels."
                },
                restyleQuestsPreload: {
                    label: "Taken opnieuw formatteren - Bootloader",
                    description: "Probeer middelen voor taaktegels vooraf te laden."
                },
                reorderQuests: {
                    label: "Taken opnieuw ordenen",
                    description: "Sorteer taken op basis van hun status. Laat dit leeg voor standaardsortering. De door komma's gescheiden lijst moet het volgende bevatten: UNCLAIMED, CLAIMED, IGNORED, EXPIRED."
                },
                unclaimedSubsort: {
                    label: "Niet-geclaimde subrang",
                    description: "Subsorteermethode voor niet-geclaimde taken."
                },
                claimedSubsort: {
                    label: "Beweerde onderrang",
                    description: "Subsorteermethode voor aangevraagde taken."
                },
                ignoredSubsort: {
                    label: "Genegeerde onderorde",
                    description: "Subsorteermethode voor genegeerde taken."
                },
                expiredSubsort: {
                    label: "Verlopen subrang",
                    description: "Downsorteermethode voor verlopen taken."
                },
                unclaimedUnignoredQuests: {
                    label: "Ongevraagde, niet genegeerde taken",
                    description: "Houdt het aantal niet-geclaimde en niet-genegeerde taken bij."
                },
                onQuestsPage: {
                    label: "Op de pagina Taken",
                    description: "Of de gebruiker zich momenteel op de pagina Taken bevindt."
                },
                triggerQuestsRerender: {
                    label: "Het activeren van missies opnieuw renderen",
                    description: "Activeer een nieuwe weergave van de pagina Taken door deze instelling te wijzigen."
                },
                ignoredQuestProfile: {
                    label: "Genegeerd taakprofiel",
                    description: "Het profiel dat wordt gebruikt voor genegeerde taken."
                },
                rememberQuestPageSort: {
                    label: "Onthoud het sorteren van Quest-pagina's",
                    description: "Onthoud de laatst gebruikte reeks op de pagina Taken."
                },
                rememberQuestPageFilters: {
                    label: "Onthoud taakpaginafilters",
                    description: "Onthoud de laatst gebruikte filters op de pagina Taken."
                },
                lastQuestPageSort: {
                    label: "Laatste Quest-paginarangschikking",
                    description: "Onthoud de laatst gebruikte reeks op de pagina Taken."
                },
                lastQuestPageFilters: {
                    label: "Nieuwste taakpaginafilters",
                    description: "Onthoud de laatst gebruikte filters op de pagina Taken."
                },
                ignoredQuestIDs: {
                    label: "Genegeerde taak-ID's",
                    description: "Array van genegeerde taak-ID's."
                },
                resumeQuestIDs: {
                    label: "In uitvoering taak-ID's",
                    description: "Een reeks taak-ID's die op de achtergrond automatisch worden aangevuld."
                }
            },
            button: {
                questInProgressWithTime: "Voltooien ({{remainTime}})",
                completing: "Voltooien",
                resume: "Devam En (~{{remainTime}})",
                complete: "Voltooi {{remainTime}}",
                completeImmediate: "Voltooid (onmiddellijk)",
                completed: "voltooid"
            },
            reward: {
                orbs: "{{orbQuantity}} Orbs in {{completingText}}.",
                article: "{{completingText}} voor {{itemName}}.",
                unrecognized: "{{completingText}} voor een niet-herkend beloningstype."
            },
            notification: {
                completed: {
                    title: "De klus is geklaard",
                    body: "{{questName}} missie voltooid."
                }
            }
        },
        questionMarkReplacement: {
            name: "VraagMarkVervanging",
            description: "Als het bericht alleen uit vraagtekens bestaat, worden alle vraagtekens vervangen door de geselecteerde tekenreeks.",
            option: {
                replace: {
                    label: "Wijziging",
                    description: "Vervangen door"
                }
            }
        },
        quickMention: {
            name: "Snelle vermelding",
            description: "Voegt een knop voor snelle vermelding toe aan de berichtactiebalk.",
            tooltip: "Snelle weddenschap"
        },
        quickReply: {
            name: "Snel antwoord",
            description: "Beantwoord (ctrl + omhoog/omlaag) en bewerk berichten (ctrl + shift + omhoog/omlaag) met sneltoetsen.",
            option: {
                shouldMention: {
                    label: "Moet ik vermelden",
                    description: "Ping standaard als antwoord",
                    noReplyMentionPlugin: "Volg de NoReplyMention-plug-in (indien ingeschakeld)",
                    enabled: "Effectief",
                    disabled: "Gehandicapt"
                },
                ignoreBlockedAndIgnored: {
                    label: "Negeren Geblokkeerd en Genegeerd",
                    description: "Negeer berichten van geblokkeerde/genegeerde gebruikers tijdens het browsen"
                }
            }
        },
        quickThemeSwitcher: {
            name: "Snelle ThemaSwitcher",
            description: "Schakel snel tussen thema's met behulp van sneltoetsen.",
            about: {
                title: "Sneltoetsen",
                description: "Gebruik Ctrl/Cmd+Shift+pijltoetsen om te navigeren (links/rechts: bladeren tussen thema's, omhoog: inschakelen, omlaag: uitschakelen).",
                reload: "Druk op Ctrl/Cmd+Shift+Alt om de themalijst te vernieuwen."
            },
            modal: {
                added: "{{count}} nieuwe thema's toegevoegd",
                removed: "{{count}} thema's verwijderd",
                reloaded: "{{themeCount}} thema opnieuw geladen",
                addedLocal: "{{count}} lokale thema's toegevoegd",
                removedLocal: "{{count}} native thema verwijderd",
            },
            option: {
                includeLocal: {
                    label: "Voeg native thema's toe",
                    description: "Bevat native thema's op uw apparaat in de lijst"
                },
                includeOnline: {
                    label: "Inclusief online thema's",
                    description: "Bevat online thema's in de lijst"
                },
                sortOrder: {
                    label: "Sorteer op",
                    description: "Sorteermethode",
                    asc: "A'dan Z'ye",
                    desc: "Z'den A'ya",
                    recent: "Bij zoon"
                },
                autoRefresh: {
                    label: "Automatisch vernieuwen",
                    description: "Vernieuwt automatisch de themalijst wanneer er wijzigingen worden gedetecteerd"
                },
                showNotifications: {
                    label: "Toon meldingen",
                    description: "Toont meldingen wanneer thema's worden toegevoegd of verwijderd"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Hiermee kunt u van een bericht een inspirerende quote-afbeelding maken",
            context: {
                quote: "Offerte"
            },
            modal: {
                title: "4K'da Yakala",
                grayscale: "Zwart-Wit",
                export: "Exporteren",
                send: "Versturen",
                saveAsGIF: "Opslaan als GIF",
                saveDescription: "Slaat/verzendt afbeelding op als GIF in plaats van PNG",
                showWatermark: "Toon watermerk",
                watermarkText: "Filigran Metni (max. 32 tekens)"
            },
            option: {
                quoteFont: {
                    label: "Citaat lettertype",
                    description: "Lettertype voor citaattekst (auteur/gebruikersnaam gebruikt altijd M PLUS afgerond 1c)",
                    mPlusRounded: "M PLUS Afgerond 1c",
                    openSans: "Sans openen",
                    momoSignature: "Momo-handtekening",
                    lora: "Lora",
                    merriWeather: "Merriweer"
                },
                watermark: {
                    label: "filigraan",
                    description: "Aangepaste watermerktekst (max. 32 tekens)"
                },
                grayscale: {
                    label: "Zwart-Wit",
                    description: "Schakel standaard zwart-wit in"
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
            name: "Willekeurige stem",
            description: "Voegt een willekeurige knop voor deelname aan een spraakoproep toe naast de knop Dempen.",
            tooltip: "Willekeurige stem",
            context: {
                label: "geluidsconditioner",
                amountLabel: "AANTAL GEBRUIKERS",
                spacesLabel: "VACATURE",
                voiceLabel: "SES LİMİTİ",
                selfLabel: "UW EIGEN INSTELLINGEN",
                select: {
                    servers: "Selecteer Server",
                    list: "Selecteer Lijst",
                    filters: "Selecteer Filters",
                    amount: "Aantal gebruikers",
                    userAmount: "{{amount}} gebruiker",
                    parameters: "Parameters",
                    moreThan: "meer dan",
                    lessThan: "Minder dan dat",
                    equalTo: "gelijk aan",
                    spaces: "Vacature",
                    voice: "Zijn grenzen"
                },
                filter: {
                    muted: "op stil",
                    deafened: "doof",
                    camera: "Camera",
                    stream: "Uitzending",
                    includeFilters: "Inclusief filters",
                    avoidFilters: "Vermijd filters"
                },
                reset: {
                    list: "Lijst opnieuw instellen"
                },
                voice: {
                    label: "Geluidsinstellingen",
                    auto: {
                        mute: "Automatisch dempen",
                        deafen: "Auto doof",
                        camera: "Automatische camera",
                        stream: "Automatische uitzending",
                        leaveWhenEmpty: "Vertrek als je vrij bent",
                        navigate: "Automatisch navigeren",
                        stage: "Vermijd podiumkanalen",
                        afk: "Vermijd AFK-kanalen"
                    }
                },
                invalid: {
                    server: "ongeldige server"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Transactie aantal gebruikers",
                    description: "Selecteer een actie voor het aantal gebruikers"
                },
                userAmount: {
                    label: "Aantal gebruikers",
                    description: "Selecteer aantal gebruikers"
                },
                spacesLeftOperation: {
                    label: "Vacatureproces",
                    description: "Selecteer een actie voor het maximale aantal gebruikers"
                },
                spacesLeft: {
                    label: "Vacature",
                    description: "Selecteer de hoeveelheid vrije ruimte"
                },
                vcLimitOperation: {
                    label: "Bediening audiokanaallimiet",
                    description: "Selecteer een actie voor de audiokanaallimiet."
                },
                vcLimit: {
                    label: "Audiokanaallimiet",
                    description: "Kies een audiokanaallimiet"
                },
                servers: {
                    label: "Servers",
                    description: "Servers om op te nemen"
                },
                autoNavigate: {
                    label: "Automatische navigatie",
                    description: "Er wordt automatisch naar het audiokanaal gegaan."
                },
                autoCamera: {
                    label: "Automatische camera",
                    description: "Schakelt de camera automatisch in"
                },
                autoStream: {
                    label: "Automatische uitzending",
                    description: "Start automatisch met uitzenden"
                },
                selfMute: {
                    label: "Automatisch dempen",
                    description: "Het dempt automatisch uw microfoon wanneer u zich bij het audiokanaal aansluit."
                },
                selfDeafen: {
                    label: "Auto doof",
                    description: "Het maakt je automatisch doof als je lid wordt van het spraakkanaal."
                },
                leaveEmpty: {
                    label: "Vertrek als je vrij bent",
                    description: "Wanneer het spraakkanaal leeg raakt, vindt het willekeurig een andere oproep."
                },
                avoidStages: {
                    label: "Vermijd podiumkanalen",
                    description: "Vermijdt het samenvoegen van audiokanalen van het podiumtype."
                },
                avoidAfk: {
                    label: "Vermijd AFK-kanalen",
                    description: "AFK vermijdt het samenvoegen van audiokanalen."
                },
                video: {
                    label: "Video",
                    description: "Zoekt naar gebruikers van wie de camera's zijn ingeschakeld"
                },
                stream: {
                    label: "Uitzending",
                    description: "Zoekt naar gebruikers die uitzenden"
                },
                mute: {
                    label: "op stil",
                    description: "Zoekt naar gebruikers die gedempt zijn"
                },
                deafen: {
                    label: "doof",
                    description: "Zoekt naar dove gebruikers"
                },
                includeStates: {
                    label: "Inclusief filters",
                    description: "Maakt opname van specifieke gebruikersstatussen mogelijk"
                },
                avoidStates: {
                    label: "Vermijd filters",
                    description: "Hiermee kunnen bepaalde gebruikerssituaties worden vermeden"
                }
            },
            alert: {
                failed: "Er is geen audiokanaal gevonden!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "React zet foutcodes om in voor mensen leesbare berichten."
        },
        readAllNotificationsButton: {
            name: "LeesAlleMeldingenKnop",
            description: "Voegt een knop toe aan het meldingenpaneel om met één klik alle meldingen als gelezen te markeren.",
            button: "Lees alles"
        },
        recentDMSwitcher: {
            name: "RecenteDMSwitcher",
            description: "Schakel tussen recent gebruikte DM's met Ctrl+Tab (Ctrl+Shift+Tab omgekeerd)",
            option: {
                visualStyle: {
                    label: "Visuele stijl",
                    description: "Visuele indicatorstijl die verschijnt bij het schakelen",
                    overlay: "Laag (Alt+Tab-stijl)",
                    toast: "Notificatie (Statusbericht)",
                    off: "Gesloten"
                },
                overlayMode: {
                    label: "Laagmodus",
                    description: "Laaginhoud",
                    row: "Laatste gespreksregel",
                    current: "alleen beschikbaar",
                },
                amountOfUsers: {
                    label: "Aantal gebruikers",
                    description: "Aantal gebruikers dat op de laag moet worden weergegeven"
                },
                overlayRowLength: {
                    label: "Lengte van laagrij",
                    description: "Aantal recente DM's dat in de rij moet worden weergegeven"
                },
                overlayShowAvatars: {
                    label: "Toon laagprofielafbeeldingen",
                    description: "Toont gebruikersprofielafbeeldingen op de laag"
                },
                toastDurationMs: {
                    label: "Meldingstijd (ms)",
                    description: "Toon profielafbeeldingen op laag"
                },
                clearRdms: {
                    label: "RDMS-lijst wissen",
                    description: "Testtool: Wist de RDM-lijst",
                    toast: "RDMS-geschiedenis gewist",
                    button: "Wis de RDM-geschiedenis"
                }
            },
            modal: {
                unknown: "Onbekend",
                dm: "DM",
                group: "Groeps-DM",
                channel: "Kanaal",
                switchingTo: "Overstappen naar {{naam}}"
            }
        },
        relationshipNotifier: {
            name: "RelatieNotifier",
            description: "Waarschuwt u wanneer een vriend, groepschat of server u verwijdert.",
            option: {
                notices: {
                    label: "Meldingen",
                    description: "Toon een melding bovenaan het scherm bij verwijdering (gebruik deze als je geen meldingen wilt missen)."
                },
                offlineRemovals: {
                    label: "Offline verhuizingen",
                    description: "Stuur een melding als je offline bent verwijderd wanneer je Discord opent."
                },
                friends: {
                    label: "Vrienden",
                    description: "Laat het me weten als een vriend je uit zijn/haar lijst verwijdert"
                },
                friendRequestCancels: {
                    label: "Annuleringen van vriendverzoeken",
                    description: "Laat het mij weten als een vriendschapsverzoek is geannuleerd"
                },
                servers: {
                    label: "Servers",
                    description: "Waarschuw bij verwijdering van een server"
                },
                groups: {
                    label: "Groepen",
                    description: "Stuur mij een melding wanneer u uit een groepschat wordt verwijderd"
                }
            },
            notification: {
                removedFriend: "{{user}} heeft je ontvriend.",
                cancelledFriendRequest: "Een vriendschapsverzoek verzonden door {{user}} is geannuleerd.",
                removedFromServer: "Je bent verwijderd van {{server}}.",
                removedFromGroup: "Je bent verwijderd uit {{group}}.",
                noLongerGroup: "Je bent niet langer lid van {{group}}.",
                noLongerServer: "Je bevindt je niet langer op {{server}}.",
                noLongerFriend: "Je bent niet langer vrienden met {{user}}.",
                friendRequestRevoked: "Het vriendschapsverzoek verzonden door {{user}} is ingetrokken.",
                ok: "OK"
            }
        },
        remix: {
            name: "Remixen",
            description: "Voegt een 'Remix'-optie toe aan het rechtsklikmenu van de knop voor het verzenden van bestanden. Hiermee wordt een afbeelding geopend in een eenvoudige afbeeldingseditor en heb je de mogelijkheid om de bewerkte afbeelding rechtstreeks naar de chat te sturen.",
            label: "Remixen",
            button: {
                send: "Versturen",
                close: "Kwartaal",
                brush: "Borstel",
                erase: "Stofdoek",
                crop: "Gewas",
                shape: "Vorm",
                reset: "opnieuw instellen",
                clear: "duidelijk"
            },
            editor: {
                choose: "Selecteer een afbeelding",
                browse: "Gozat",
                rectangle: "Rechthoek",
                ellipse: "Ellips",
                line: "Lijn",
                arrow: "OK",
                fill: "vullen"
            }
        },
        repeatMessages: {
            name: "Herhaal berichten",
            description: "Hiermee kunt u snel berichten opnieuw verzenden. Als u de Shift-toets ingedrukt houdt terwijl u op Herhalen klikt, wordt deze als antwoord op het bericht verzonden.",
            button: "Herhalen (klik) / Herhalen en beantwoorden (Shift + klik)",
            context: {
                repeat: "herhalen",
                repeatAndReply: "Herhaal en beantwoord"
            }
        },
        replaceGoogleSearch: {
            name: "Vervang GoogleSearch",
            description: "Het vervangt Google Zoeken door verschillende zoekmachines.",
            option: {
                customEngineName: {
                    label: "Aangepaste motornaam",
                    description: "Naam van de aangepaste zoekmachine"
                },
                customEngineURL: {
                    label: "Aangepaste engine-URL",
                    description: "Uw zoekmachine-URL"
                },
                replacementEngine: {
                    label: "Back-upzoekmachine",
                    description: "Vervangt de back-upzoekmachine door een specifieke zoekmachine (in plaats van een menu toe te voegen)",
                    off: "Gesloten",
                    custom: "Speciale motor",
                }
            },
            context: {
                label: "Metni Ara",
                searchWith: "{{name}} Ara's huis"
            }
        },
        replyPingControl: {
            name: "AntwoordPingControl",
            description: "Hiermee kunt u altijd of nooit pingen op berichtantwoorden bepalen, inclusief whitelist-functie",
            option: {
                alwaysPingOnReply: {
                    label: "Altijd antwoordping",
                    description: "Ontvang een ping elke keer dat iemand op uw berichten reageert"
                },
                replyPingWhitelist: {
                    label: "Reactieping Witte lijst",
                    description: "Voer de ID's in van de gebruikers van wie u altijd een antwoordping wilt ontvangen, gescheiden door komma's."
                }
            }
        },
        replyTimestamp: {
            name: "Antwoordtijdstempel",
            description: "Toont tijdstempel in beantwoorde berichtvoorbeelden"
        },
        revealAllSpoilers: {
            name: "OnthulAlleSpoilers",
            description: "Ctrl-klik op een spoiler om alle spoilers in een bericht te tonen, Ctrl+Shift om alle spoilers in de hele chat te tonen"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Voegt opties voor het zoeken naar afbeeldingen toe aan rechtsklikmenu's voor afbeeldingen",
            context: {
                label: "Zoek afbeelding",
                all: "Zoek alles"
            }
        },
        reviewDB: {
            name: "BeoordelingDB",
            description: "Beoordeel andere gebruikers (voegt een nieuw instellingengedeelte toe aan Profielen)",
            notification: {
                newReview: "Er staan ​​nieuwe recensies op je profiel!",
                auth: {
                    error: "Er is een fout opgetreden tijdens de autorisatie",
                    successfully: "Succesvol ingelogd!",
                    failed: "Autorisatie mislukt",
                    review: "Geef toestemming om een ​​recensie toe te voegen.",
                    opening: "Het autorisatievenster wordt geopend...",
                    need: "Om te evalueren heeft u toestemming nodig!"
                },
                error: {
                    fast: "U doet te snel verzoeken. Wacht een paar seconden en probeer het opnieuw.",
                    fetching: "Er is een fout opgetreden bij het ophalen van beoordelingen.",
                    action: {
                        failed: "Gebruiker {{action}} kan niet worden bereikt",
                        success: "Gebruiker is succesvol {{action}}"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Weet je het zeker?",
                    description: "Wilt u deze recensie echt verwijderen?",
                    confirm: "Sil",
                    cancel: "Annuleren",
                    error: "Om beoordelingen te verwijderen moet u inloggen.",
                },
                report: {
                    title: "Weet je het zeker?",
                    description: "Wilt u deze review echt melden?",
                    confirm: "Verklaring",
                    cancel: "Annuleren",
                    error: "Om beoordelingen te plaatsen moet u ingelogd zijn.",
                },
                block: {
                    title: "Weet je het zeker?",
                    description: "Wilt u deze gebruiker echt blokkeren? Je zult hun beoordelingen niet meer zien.",
                    confirm: "blok",
                    cancel: "Annuleren",
                    error: "U moet ingelogd zijn om gebruikers te blokkeren.",
                },
                blocked: {
                    title: "Geblokkeerde gebruikers",
                    auth: "U bent niet ingelogd bij ReviewDB.",
                    noBlocked: "Er zijn geen gebruikers geblokkeerd.",
                    fetch: "Er is een fout opgetreden bij het ophalen van geblokkeerde gebruikers"
                },
                reviews: {
                    title: "Gebruikersrecensies",
                    noUser: "Het lijkt erop dat nog niemand deze gebruiker heeft beoordeeld. Jij kunt de eerste zijn!",
                    noServer: "Het lijkt erop dat nog niemand deze server heeft beoordeeld. Jij kunt de eerste zijn!"
                }
            },
            button: {
                appeal: "Bezwaar",
                ok: "OK",
                more: "Meer",
                reply: "Reageer op @{{user}}",
                update: "Review bijwerken voor @{{user}}",
                review: "Recensie @{{user}}"
            },
            context: {
                view: "Zie Recensies",
                blocked: "Je hebt deze gebruiker geblokkeerd",
                delete: "Beoordeling verwijderen",
                report: "Rapportbeoordeling",
                block: "Gebruiker blokkeren",
                unblock: "Deblokkeer gebruiker",
                reply: "Reageer op recensie"
            },
            option: {
                authorize: {
                    label: "Autoriseren",
                    button: "Autoriseer met ReviewDB"
                },
                notifyReviews: {
                    label: "Beoordelingsbericht",
                    description: "Meld nieuwe beoordelingen bij het opstarten"
                },
                showWarning: {
                    label: "Toon waarschuwing",
                    description: "Toon respectvolle waarschuwing boven de rubriek"
                },
                hideTimestamps: {
                    label: "Tijdstempels verbergen",
                    description: "Verberg tijdstempels voor recensies"
                },
                hideBlockedUsers: {
                    label: "Verberg geblokkeerde gebruikers",
                    description: "Verberg beoordelingen van gebruikers die u hebt geblokkeerd"
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
            description: "Behandelt magneetlinks als berichtlinks (met voorbeeld)",
            unknown: "onbekende bestandsnaam"
        },
        roleColorEverywhere: {
            name: "RolKleurOveral",
            description: "Toont waar mogelijk de kleur van de toprol",
            option: {
                chatMentions: {
                    label: "Chatvermeldingen",
                    description: "Toon rolkleuren in chatvermeldingen (inclusief berichtvenster)"
                },
                memberList: {
                    label: "Ledenlijst",
                    description: "Toon rolkleuren in de roltitels van ledenlijsten"
                },
                voiceUsers: {
                    label: "Spraakgebruikers",
                    description: "Toon rolkleuren in de voicechat-gebruikerslijst"
                },
                reactorsList: {
                    label: "Lijst met reactoren",
                    description: "Toon rolkleuren in gebruikerslijst met emoji-reacties"
                },
                pollResults: {
                    label: "Enquêteresultaten",
                    description: "Toon rolkleuren in enquêteresultaten"
                },
                colorChatMessages: {
                    label: "Kleur uw chatberichten",
                    description: "Kleur chatberichten volgens de rolkleur van de auteur"
                },
                messageSaturation: {
                    label: "Berichtverzadiging",
                    description: "Kleurintensiteit van berichten"
                }
            }
        },
        rpcEditor: {
            name: "RPC-editor",
            description: "Bewerk alle Rich Presence-inhoud en -type",
            option: {
                replacedAppIds: {
                    label: "Gewijzigde applicatie-identiteiten (ID's)",
                }
            },
            modal: {
                tutorial: {
                    title: "ID's van momenteel actieve evenementen",
                    noRunning: "Geen hardloopevenementen",
                    available: "Beschikbare variabelen",
                    variableText: "In alle velden (behalve de bericht-URL) kun je variabelen plaatsen die automatisch worden vervangen door hun originele inhoud:",
                    more: "Meer details",
                    details: {
                        leave: "Als u een veld wilt laten zoals het is, laat u het leeg.",
                        set: "Typ 'null' om een ​​veld in de statusindicator te verbergen.",
                        reload: "Mogelijk moet u Discord opnieuw opstarten om de wijzigingen toe te passen."
                    }
                },
                settings: {
                    applyEdits: "Pas bewerkingen toe op de app",
                    addNewApp: "Nieuwe app toevoegen",
                    appId: "Applicatie-ID",
                    invalidAppId: "Ongeldige applicatie-ID",
                    newActivityType: "Nieuw evenementtype",
                    activityTypes: {
                        playing: "spelen",
                        watching: "kijken",
                        listening: "luisteren",
                        competing: "racen",
                        streaming: "op lucht"
                    },
                    streamUrl: "Stream-URL (moet YouTube of Twitch zijn)",
                    invalidStreamUrl: "Ongeldige bericht-URL",
                    newName: "nieuwe naam",
                    newDetails: "nieuwe details",
                    newState: "nieuwe situatie",
                    largeImage: "groot beeld",
                    smallImage: "illustraties",
                    text: "Tekst",
                    url: "URL",
                    firstLine: "(eerste regel)",
                    secondLine: "(tweede regel)",
                    thirdLine: "(derde regel)",
                    alsoThirdLine: "(ook derde regel)",
                    hideAssets: "Afbeeldingen verbergen (grote en kleine afbeeldingen)",
                    hideTimestamps: "Tijdstempels verbergen"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Geeft statistieken weer over uw activiteit als Rich Presence",
            option: {
                assetURL: {
                    label: "Visuele URL's",
                    description: "De afbeelding die moet worden gebruikt voor RPC. Als je dit veld leeg laat, wordt je profielfoto gebruikt"
                },
                rpcTitle: {
                    label: "RPC-koptekst",
                    description: "Titel van uw RPC"
                },
                statDisplay: {
                    label: "Statistieken bekijken",
                    description: "Wat moet RPC weergeven? (Je hebt waarschijnlijk maar één regel toegestaan)",
                    today: "Aantal berichten dat vandaag is verzonden",
                    alltime: "Aantal verzonden berichten te allen tijde",
                    listened: "Meest beluisterde album van de week"
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
                    description: "Albumhoes gebruiken als RPC-afbeelding? (Als Last.fm-weergave is geselecteerd)"
                },
                lastFMStatFormat: {
                    label: "Last.fm-statistiekformaat",
                    description: "Hoe moeten Last.fm-statistieken worden opgemaakt? $album wordt vervangen door de albumnaam, $artist wordt vervangen door de artiestennaam"
                }
            },
            noInfo: "Er is momenteel geen informatie :(",
            messagesToday: "Berichten verzonden vandaag: {{count}}",
            messagesAllTime: "Berichten die te allen tijde worden verzonden: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "Favoriete GIF's opslaan",
            description: "Exporteert favoriete GIF-links",
            toolbox: "Bewaar favoriete GIF's",
            title: "Bewaar favoriete GIF's",
            command: {
                savegifs: {
                    description: "Slaat alle favoriete GIF-links op in een tekstbestand"
                },
                saveworkinggifs: {
                    description: "Test al je favoriete GIF's en bewaar alleen de GIF's die nog werken"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Toolbox-knop tonen",
                    description: "Toont de knop 'Favoriete GIF's opslaan' in Plexcord Toolbox (herstart vereist)"
                }
            },
            toast: {
                save: "GIF's zijn succesvol opgeslagen als {{filename}}",
                failed: "GIF's konden niet worden opgeslagen",
                no: "Favoriete GIF niet gevonden!",
                testing: "{{count}} GIF's worden getest, dit kan enige tijd duren...",
                noneWorking: "Geen van je opgeslagen GIF's lijkt te werken.",
                saved: "{{broken}} potentieel kapotte GIF's zijn eruit gefilterd. {{saved}} werkende GIF's opgeslagen."
            }
        },
        scheduledMessages: {
            name: "Geplande berichten",
            description: "Plan dat berichten op een bepaald tijdstip of na een bepaalde vertraging worden verzonden.",
            toolbox: {
                toggle: "Bekijk geplande berichten"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Maximaal aantal berichten per minuut",
                    description: "Het maximale aantal geplande berichten dat in dezelfde minuut op een kanaal kan worden verzonden."
                },
                checkIntervalSeconds: {
                    label: "Controle-interval (seconden)",
                    description: "Hoe vaak de plug-in controleert of er berichten zijn om te verzenden."
                },
                showNotifications: {
                    label: "Toon meldingen",
                    description: "Toont een melding (toast) wanneer er berichten worden verzonden."
                },
                showPhantomMessages: {
                    label: "Spookberichten weergeven",
                    description: "Toont geplande berichten als spookberichten (tijdelijke) in de chat."
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
                messageFailed: "Gepland bericht kon niet worden verzonden",
                maxMessagesReached: "Maximale limiet van {{max}} berichten per minuut per kanaal bereikt",
                messageScheduled: "Bericht gepland!",
                messageRemoved: "Gepland bericht verwijderd",
                allCleared: "Alle geplande berichten zijn gewist"
            },
            button: {
                tooltipOn: "Planningsmodus AAN (klik om uit te schakelen, klik met de rechtermuisknop voor lijst)",
                tooltipOff: "Planningsmodus UIT (klik om in te schakelen, klik met de rechtermuisknop voor lijst)"
            },
            accessory: {
                scheduledFor: "Gepland op {{date}} {{timeLeft}}",
                remaining: {
                    days: "{{days}}g {{hours}} resterend",
                    hours: "{{hours}}s {{minutes}} minuten resterend",
                    minutes: "{{minuten}} min. resterend"
                }
            },
            scheduleModal: {
                title: "Planbericht",
                schedulingFor: "Gepland kanaal: {{channel}}",
                scheduleType: "Planningstype",
                delay: "Vertraging",
                specificTime: "Specifieke tijd",
                delayMinutes: "Vertraging (minuten)",
                dateTime: "Datum en tijd",
                error: {
                    invalidDelay: "Voer een geldige vertragingstijd in (minimaal 1 minuut)",
                    invalidDateTime: "Selecteer een toekomstige datum en tijd"
                },
                schedule: "Gepland",
                cancel: "Annuleren"
            },
            viewModal: {
                title: "Geplande berichten",
                clearAll: "Alles wissen",
                noMessages: "Geen geplande berichten",
                delete: "Sil",
                close: "Kwartaal"
            }
        },
        searchFix: {
            name: "ZoekFix",
            description: "Het vervelende 'We hebben het vergrootglas laten vallen!' herstelt de fout.",
            notPerfect: "Deze oplossing is niet perfect, dus het kan zijn dat u de zoekbalk opnieuw moet laden om de problemen op te lossen.",
            paragraph1: "Discord staat slechts een maximale offset van 5000 toe (wat de vergrootglasfout veroorzaakt).",
            paragraph2: "Dit betekent dat u precies 5000 berichten uit het verleden en 5000 berichten in de toekomst kunt zien (gesorteerd op oudste).",
            paragraph3: "Deze plug-in schakelt over naar de tegenovergestelde sorteermethode om de beperking van Discord te omzeilen,",
            paragraph4: "maar als er een groot zoekresultaat is en u probeert een bericht weer te geven dat niet bereikbaar is via een van beide sorteermethoden,",
            paragraph5: "de plug-in toont alleen offset 0 (nieuwste of oudste bericht, afhankelijk van de sorteermethode)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Discord speelt altijd de geheime versie van de ringtone af (behalve bij speciale ringtone-evenementen)",
            option: {
                onlySnow: {
                    label: "Alleen tijdens Snow Ringtone-evenement",
                    description: "Speel alleen het thema Sneeuwhalatie"
                }
            }
        },
        summaries: {
            name: "Samenvattingen",
            description: "Schakelt de experimentele samenvattingenfunctie van Discord in op alle servers en toont door AI gegenereerde samenvattingen van gesprekken",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Samenvatting verwijderingsdrempel (dagen)",
                    description: "Het aantal dagen dat een samenvatting geldig is voordat deze wordt verwijderd. Houd er rekening mee dat er per kanaal maximaal 50 samenvattingen kunnen worden opgeslagen"
                }
            }
        },
        selfForward: {
            name: "ZelfVooruit",
            description: "Voegt het huidige kanaal toe aan de pop-up met de doorstuurlijst"
        },
        sendTimestamps: {
            name: "Tijdstempels verzenden",
            description: "Verzend eenvoudig tijdstempels met de chatboxknop en tekstsnelkoppelingen. Lees de uitgebreide beschrijving!",
            sample: {
                paragraph1: "Als u snel tijdstempels wilt verzenden, voegt u tijdstempels in het formaat 'HH:MM' (inclusief aanhalingstekens!) toe aan uw bericht",
                paragraph2: "Zie onderstaande voorbeelden.\nAls je iets specifiekers nodig hebt, gebruik dan de Datumknop in de chatbalk!",
                examples: "Voorbeelden:"
            },
            modal: {
                title: "Tijdstempelkiezer",
                light: "Open",
                dark: "Donker",
                format: "Tijdstempelformaat",
                preview: "Voorbeeld",
                insert: "Toevoegen",
                insertTimestamp: "Tijdstempel toevoegen"
            },
            option: {
                replaceMessageContents: {
                    label: "Berichtinhoud wijzigen",
                    description: "Wijzig tijdstempels in berichtinhoud"
                }
            }
        },
        serverInfo: {
            name: "Serverinfo",
            description: "Hiermee kunt u informatie over een server bekijken",
            context: {
                serverInfo: "Serverinformatie"
            },
            option: {
                sorting: {
                    label: "Regeling",
                    description: "Gebruikersnaam of weergavenaam, indien van toepassing",
                    username: "Gebruikersnaam",
                    displayname: "Weergavenaam",
                    none: "Sorteren"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Serverinformatie",
                    friends: "Vrienden",
                    mutualUsers: "Gemeenschappelijke gebruikers",
                    blockedUsers: "Geblokkeerde gebruikers",
                    ignoredUsers: "Genegeerde gebruikers"
                },
                owner: "Server-eigenaar",
                loading: "Laden...",
                createdAt: "Aanmaakdatum",
                joinedAt: "Datum van toetreding",
                vanityLink: "Speciale uitnodigingslink",
                preferredLocale: "Voorkeursregio",
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
                roles: "Rol"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicatoren",
            description: "Voegt het aantal online vrienden of het aantal servers toe aan de serverlijst",
            friends: "Vriend",
            servers: "Presentator",
            option: {
                mode: {
                    label: "Mod",
                    description: "Modus om weer te geven in de serverlijst",
                    friend: "Aantal vrienden alleen online",
                    server: "Alleen aantal servers",
                    both: "Aantal zowel server- als onlinevrienden"
                },
                useCompact: {
                    label: "Compacte Modu Kullan",
                    description: "Zorgt ervoor dat de legenda alleen met tekst wordt weergegeven"
                }
            }
        },
        serverSearch: {
            name: "ServerZoeken",
            description: "Navigeer beter door uw servers met de snelzoekknop",
            tooltip: "Wij kopen"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblokken",
            description: "Brengt codeblokken in VSCode-stijl, mogelijk gemaakt door Shiki, naar Discord",
            option: {
                theme: {
                    label: "Hij",
                    description: "Standaardthema's"
                },
                customTheme: {
                    label: "Aangepast thema",
                    description: "Link naar een aangepast VSCode-thema",
                    mustURL: "Moet een geldige URL zijn",
                    mustJSON: "Moet een JSON-bestand zijn"
                },
                tryHljs: {
                    label: "Back-up naar Hljs",
                    description: "Gebruik de lichtere standaard Discord-kleurstof en -thema.",
                    never: "Nooit",
                    secondary: "Kies Shiki boven Highlight.js",
                    primary: "Kies Highlight.js boven Shiki",
                    always: "Altijd"
                },
                useDevIcon: {
                    label: "Gebruik Devicon voor taalpictogrammen",
                    description: "Hoe taalpictogrammen in codeblokken worden weergegeven",
                    disabled: "Gehandicapt",
                    colorless: "Kleurloos",
                    colored: "Kleurrijk"
                },
                bgOpacity: {
                    label: "Achtergronddekking",
                    description: "achtergronddekking"
                }
            },
            button: {
                copy: "kopiëren",
                copied: "Gekopieerd!"
            }
        },
        showAllMessageButtons: {
            name: "ToonAlleBerichtKnoppen",
            description: "Het toont altijd alle berichtknoppen, of u nu op de Shift-toets drukt of niet.",
            option: {
                noShiftDelete: {
                    label: "Verwijderen zonder Shift",
                    description: "Verwijdert de noodzaak om op de Shift-toets te drukken om een ​​bericht te verwijderen."
                },
                noShiftPin: {
                    label: "Repareren zonder Shift",
                    description: "Elimineert de noodzaak om op de Shift-toets te drukken om een ​​bericht vast te zetten."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Toont badges naast de naam van de auteur van het bericht in de chat.",
            option: {
                showPlexcordDonor: {
                    label: "Laat uw Plexcord-donorbadge zien",
                    description: "Schakel in om Plexcord-donorbadges in de chat te tonen."
                },
                plexcordDonorPosition: {
                    label: "Locatie van Plexcord-donorbadge",
                    description: "Locatie van Plexcord-donorbadges."
                },
                showPlexcordContributor: {
                    label: "Laat de Plexcord-bijdragersbadge zien",
                    description: "Schakel dit in om Plexcord Contributor-badges in de chat weer te geven."
                },
                plexcordContributorPosition: {
                    label: "Locatie van de Plexcord-bijdragerbadge",
                    description: "Locatie van Plexcord-bijdragersbadges."
                },
                showDiscordProfile: {
                    label: "Toon Discord-profielbadge",
                    description: "Schakel in om Discord-profielbadges in de chat weer te geven."
                },
                discordProfilePosition: {
                    label: "Discord-profielbadgelocatie",
                    description: "Locatie van Discord-profielbadges."
                },
                showDiscordNitro: {
                    label: "Toon Discord Nitro-badge",
                    description: "Schakel in om Discord Nitro-badges in de chat te tonen."
                },
                discordNitroPosition: {
                    label: "Discord Nitro-badgelocatie",
                    description: "Locatie van Discord Nitro-badges."
                },
                badgeSettings: {
                    label: "Badge-instellingen",
                    description: "Configureer de locaties van andere badges die in de chat worden weergegeven.",
                    modal: "Sleep om badges opnieuw te rangschikken; Klik om een ​​specifiek badgetype in of uit te schakelen."
                }
            },
            badge: {
                plexcord: "Plexcord-supporterbadge",
                contributor: "Plexcord-deelnemersbadge",
                discordProfile: "Discord-profiel rozetleri (HypeSquad, Discord Staff, Active Developer vb.)",
                nitro: "nitro-badge",
                staff: "Discord-staf",
                partner: "Eigenaar van partnerserver",
                events: "HypeSquad-evenementen",
                bravery: "HypeSquad-moed",
                brilliance: "HypeSquad-briljantie",
                balance: "HypeSquad-balans",
                bugHunter: "Onenigheid Bug Hunter",
                earlyVerifiedBotDeveloper: "Vroeg geverifieerde botontwikkelaar",
                earlySupporter: "Vroege supporter",
                moderatorProgram: "Moderator Programma Afgestudeerd"
            },
            modal: {
                plexcordContributor: "Plexcord-deelnemer",
                discordNitro: "Onenigheid Nitro",
                basic: "Basis",
                classic: "Klassiek"
            }
        },
        showConnections: {
            name: "Toon verbindingen",
            description: "Toont gekoppelde accounts in gebruikerspop-upkaarten",
            option: {
                iconSize: {
                    label: "Pictogramgrootte",
                    description: "Pictogramgrootte (px)"
                },
                iconSpacing: {
                    label: "Pictogram Ruimte",
                    description: "pictogrammarge",
                    compact: "Compact",
                    cozy: "Comfortabel",
                    roomy: "Breed"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Toont kanalen waarvoor u geen toegangsrechten heeft.",
            tooltip: "Geheim kanaal",
            option: {
                channelStyle: {
                    label: "Kanaalstijl",
                    description: "De stijl die wordt gebruikt om verborgen kanalen weer te geven.",
                    classic: "Klassiek",
                    muted: "Stil",
                    showUnreads: "Toon ongelezen",
                    mutedWithUnreads: "Toon gedempt en ongelezen"
                },
                showMode: {
                    label: "Weergavemodus",
                    description: "De modus die wordt gebruikt om verborgen kanalen weer te geven.",
                    lock: "Eenvoudige stijl met slotpictogram",
                    hidden: "Gedempte stijl met verborgen oogpictogram aan de rechterkant",
                    lockIconRight: "Vergrendelingspictogram aan de rechterkant"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Standaard geautoriseerde gebruikers en rollen vervolgkeuzelijststatus",
                    description: "Of het menu met toegestane gebruikers en rollen standaard geopend is in privékanalen"
                }
            },
            channelType: {
                text: "tekst",
                announcement: "aankondiging",
                forum: "forum",
                voice: "zo",
                stage: "scène"
            },
            sortOrder: {
                latestActivity: "Laatste evenement",
                creationDate: "Aanmaakdatum"
            },
            forumLayout: {
                default: "Niet ingesteld",
                list: "Lijstweergave",
                grid: "galerijweergave"
            },
            videoQuality: {
                auto: "Automatisch",
                full: "720p"
            },
            modal: {
                hidden: "verborgen",
                locked: "vergrendeld",
                threads: "onderwerpen",
                posts: "berichten",
                messages: "berichten",
                post: "na",
                message: "bericht",
                unknown: "onbekend",
                permissionDetails: "Vergunningdetails",
                thisIsA: "Dit is een {{status}} {{channelType}} kanaal",
                canNotSee: "Je kunt het {{type}}-gedeelte van dit kanaal niet zien.",
                guidelines: "Maar je kunt hun instructies zien:",
                lastCreated: "Laatst aangemaakt {{type}}:",
                lastPin: "Laatste bericht vastgezet:",
                threadSlowmode: "Standaard langzame modus voor threads:",
                slowmode: "Langzame modus:",
                bitrate: "Bitsnelheid:",
                region: "Gebied:",
                automatic: "Automatisch",
                videoQuality: "Videokwaliteitmodus:",
                inactiveArchiveDuration: "Standaard inactiviteitsperiode vóór archivering {{type}}",
                defaultLayout: "Standaard lay-out:",
                defaultSort: "Standaard sortering:",
                defaultReaction: "Standaard reactie-emoji:",
                requireTag: "Het is verplicht om een ​​tag in te stellen voor berichten op dit forum.",
                availableTags: "Beschikbare labels:",
                allowedUsersAndRoles: "Toegestane gebruikers en rollen:",
                hideAllowedUsersAndRoles: "Toegestane gebruikers en rollen verbergen",
                viewAllowedUsersAndRoles: "Bekijk gemachtigde gebruikers en rollen"
            }
        },
        showHiddenThings: {
            name: "Toon verborgen dingen",
            description: "Het toont verschillende verborgen dingen en dingen die alleen voor moderators toegankelijk zijn, ongeacht de machtigingen.",
            option: {
                showTimeouts: {
                    label: "Toon time-out voor leden in chat",
                    description: "Toon time-outpictogrammen voor leden in de chat."
                },
                showInvitesPaused: {
                    label: "Toon uitnodigingen Onderbroken informatie",
                    description: "Laat zien dat uitnodigingen zijn gepauzeerd in de serverlijst."
                },
                showModView: {
                    label: "Mod-weergave tonen",
                    description: "Toon de contextmenuoptie in de ledenmodus op alle servers."
                }
            }
        },
        showMessageEmbeds: {
            name: "Toon berichtinsluitingen",
            description: "Voegt de optie Insluiting tonen toe aan het contextmenu voor links die geen insluitingen hebben",
            context: {
                embed: {
                    show: "Toon insluiten",
                    hide: "Insluiting verwijderen"
                }
            },
            error: {
                failed: "Embed kan niet worden opgehaald",
                noEmbed: "Insluiting niet gevonden"
            }
        },
        showMeYourName: {
            name: "Toon mij uw naam",
            description: "Bekijk elke permutatie van aangepaste bijnamen, bijnamen van vrienden, serverbijnamen, weergavenamen en gebruikersnamen in de chat.",
            option: {
                messages: {
                    label: "Berichten",
                    description: "Aangepaste naamindeling weergeven in berichten."
                },
                replies: {
                    label: "Antwoorden",
                    description: "Bekijk de aangepaste naamnotatie in antwoorden."
                },
                mentions: {
                    label: "Vermeldingen",
                    description: "Geef aangepaste naamindeling weer in vermeldingen."
                },
                memberList: {
                    label: "Ledenlijst",
                    description: "Toon de eerste beschikbare naam in uw aangepaste naamnotatie in de ledenlijst."
                },
                typingIndicator: {
                    label: "Schrijven Indicator",
                    description: "Toon de eerste beschikbare naam in uw aangepaste naamnotatie in de typindicator."
                },
                profilePopout: {
                    label: "PROFIEL Pop-upkaart",
                    description: "Toon de eerste beschikbare naam in uw aangepaste naamformaat in profielpop-upkaarten."
                },
                voiceChannels: {
                    label: "Audiokanalen",
                    description: "Toon de eerste beschikbare naam in uw aangepaste naamnotatie op audiokanalen."
                },
                reactions: {
                    label: "Reacties",
                    description: "Toon de eerste beschikbare naam in uw aangepaste naamformaat in reactietooltips, en toon de volledige naam in reactiepop-ups."
                },
                discriminators: {
                    label: "Parsers weergeven",
                    description: "Voeg parser toe aan bot-gebruikersnamen. Parsers zijn verwijderd voor normale gebruikers, maar worden nog steeds gebruikt voor bots. Standaard is de gebruikersnaam van een bot gelijk aan de algemene naam van een gebruiker, en daarom kunnen meerdere bots dezelfde gebruikersnaam hebben. Door parsers toe te voegen, worden ze weer uniek."
                },
                hideDefaultAtSign: {
                    label: "Standaard @-teken verbergen",
                    description: "Verberg het standaard '@'-symbool aan het begin van de naam in vermeldingen en antwoorden. Geldt alleen als de relevante functie is ingeschakeld."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Verkort alle namen in de uitgeversmodus",
                    description: "Kort in de Broadcaster-modus alle namen in, niet alleen de gebruikersnamen."
                },
                removeDuplicates: {
                    label: "Duplicaten verwijderen",
                    description: "Als twee van de namen hetzelfde zijn, verwijder dan de duplicaten en laat alleen de unieke over."
                },
                ignoreFonts: {
                    label: "Negeer lettertypen",
                    description: "Gebruik voor de tweede, derde en vierde naam GG SANS, waarbij u het aangepaste lettertype van de gebruiker negeert."
                },
                ignoreGradients: {
                    label: "Negeer verlopen",
                    description: "Voor niet-primaire namen: als de rol een verloop heeft en de volgende kleur is ingesteld op 'Rol+-#', gebruik dan de primaire kleur in plaats van het gehele verloop, en als er een nitro-effect is, negeer deze dan volledig."
                },
                animateGradients: {
                    label: "Maak verlopen geanimeerd",
                    description: "Animatie weergeven als de tweede, derde en vierde naam een ​​rolverloop hebben. Uitgeschakeld als 'Verlopen negeren' is ingeschakeld of verminderde beweging is ingeschakeld."
                },
                nameSeparator: {
                    label: "Naam scheidingsteken",
                    description: "Scheidingsteken om tussen namen te gebruiken. De standaardinstelling is één spatie."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Vriendnaam wordt alleen weergegeven in privéberichten",
                    description: "Toon alleen de namen van vrienden in privéberichten, niet op servers."
                },
                customNameOnlyInDirectMessages: {
                    label: "Aangepaste naam Alleen weergeven in privéberichten",
                    description: "Toon aangepaste namen alleen in privéberichten, niet op servers."
                },
                includedNames: {
                    label: "Inclusief namen",
                    description: "De volgorde waarin gebruikersnamen, weergavenamen, bijnamen en namen van vrienden worden weergegeven. Gebruik deze tijdelijke aanduidingen: {user}, {display}, {nick}, {friend}. Als er geen naam beschikbaar is, kunt u de te gebruiken alternatieven opschrijven, gescheiden door komma's: {friend, nick, display}. U kunt voor elke naam drie voorvoegsels en drie achtervoegsels toevoegen."
                },
                customNameColor: {
                    label: "Aangepaste naam kleur",
                    description: "De kleur die moet worden gebruikt voor de aangepaste naam die u aan de gebruiker toewijst, als deze niet de eerste is die wordt weergegeven. Het accepteert elke geldige CSS-invoer. Gebruik 'Rol' om de bovenliggende rolkleuren, nitro-effectkleuren of IRCColors-kleuren van de gebruiker bij te houden (indien ingeschakeld). Gebruik 'Rol+-#' om de helderheid met dit percentage aan te passen (bijvoorbeeld 'Rol+15')"
                },
                friendNameColor: {
                    label: "Naam van vriend Kleur",
                    description: "De kleur die moet worden gebruikt als de naam van de vriend niet de eerst weergegeven naam is. Het accepteert elke geldige CSS-invoer. Gebruik 'Rol' om de bovenliggende rolkleuren, nitro-effectkleuren of IRCColors-kleuren van de gebruiker bij te houden (indien ingeschakeld). Gebruik 'Rol+-#' om de helderheid met dit percentage aan te passen (bijvoorbeeld: 'Rol+15')"
                },
                nicknameColor: {
                    label: "Bijnaam Kleur",
                    description: "De kleur die moet worden gebruikt als de bijnaam niet de eerst weergegeven naam is. Het accepteert elke geldige CSS-invoer. Gebruik 'Rol' om de bovenliggende rolkleuren, nitro-effectkleuren of IRCColors-kleuren van de gebruiker bij te houden (indien ingeschakeld). Gebruik 'Rol+-#' om de helderheid met dit percentage aan te passen (bijvoorbeeld: 'Rol+15')"
                },
                displayNameColor: {
                    label: "Weergavenaam Kleur",
                    description: "De kleur die moet worden gebruikt als de weergavenaam niet de eerste weergegeven naam is. Het accepteert elke geldige CSS-invoer. Gebruik 'Rol' om de bovenliggende rolkleuren, nitro-effectkleuren of IRCColors-kleuren van de gebruiker bij te houden (indien ingeschakeld). Gebruik 'Rol+-#' om de helderheid met dit percentage aan te passen (bijvoorbeeld: 'Rol+15')"
                },
                usernameColor: {
                    label: "Gebruikersnaam Kleur",
                    description: "De kleur die moet worden gebruikt als de gebruikersnaam niet de eerst weergegeven naam is. Het accepteert elke geldige CSS-invoer. Gebruik 'Rol' om de bovenliggende rolkleuren, nitro-effectkleuren of IRCColors-kleuren van de gebruiker bij te houden (indien ingeschakeld). Gebruik 'Rol+-#' om de helderheid met dit percentage aan te passen (bijvoorbeeld: 'Rol+15')"
                },
                triggerNameRerender: {
                    label: "Triggernaam Regeneratie",
                    description: "Als u deze instelling wijzigt, wordt de naam opnieuw gegenereerd."
                }
            },
            modal: {
                change: {
                    title: "Wijzig de SMYN-gebruikersnaam",
                },
                add: {
                    title: "Voeg SMYN-bijnaam toe"
                },
                setCustom: "Stel een aangepaste SMYN-bijnaam in voor deze gebruiker. Gebruik dit door {custom} op te geven in de SMYN-sjablooninstellingen.",
                nickname: "SMYN-bijnaam",
                reset: "SMYN-bijnaam opnieuw instellen",
                cancel: "Annuleren"
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Toont kanalen die verborgen zijn achter serverbronnen in de kanalenlijst"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Toont de naam van het nummer in plaats van de artiest voor Spotify-evenement"
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Geeft aan hoe lang een gebruiker een time-out krijgt in de tooltip van het time-outpictogram of ernaast",
            option: {
                displayStyle: {
                    label: "Weergavestijl",
                    description: "Hoe de time-outperiode te bekijken",
                    tooltip: "In Tooltip",
                    inline: "Naast het time-outpictogram"
                }
            }
        },
        sidebarChat: {
            name: "ZijbalkChat",
            description: "Open een ander kanaal of DM als zijbalk of pop-up",
            toolbox: {
                label: "Vorige chat openen"
            },
            context: {
                label: "Open zijbalkchat"
            },
            modal: {
                switch: "Kanalen wijzigen",
                popout: "Open Chat als pop-up",
                close: "Sluit zijbalkchat"
            },
            option: {
                persistSidebar: {
                    label: "Maak zijbalkchat permanent",
                    description: "Zorgt ervoor dat de zijbalkchat open blijft wanneer Discord opnieuw wordt opgestart"
                },
                patchCommunity: {
                    label: "Community-patch toepassen",
                    description: "Patcht items op communityservers, zoals de Kanaalbrowser of het tabblad Leden."
                }
            }
        },
        signature: {
            name: "Handtekening",
            description: "Automatische ondertekening/einde berichttekst",
            option: {
                name: {
                    label: "Handtekening",
                    description: "Handtekeningtekst die aan het einde van uw berichten moet worden toegevoegd"
                },
                textHeader: {
                    label: "Tekst Titel",
                    description: "Titel die aan het begin van de tekst moet worden toegevoegd"
                },
                showIcon: {
                    label: "Pictogram weergeven",
                    description: "Toon een pictogram in de chatbalk om de plug-in in en uit te schakelen"
                },
                contextMenu: {
                    label: "Contextmenu",
                    description: "Optie toegevoegd om functionaliteit in te schakelen in het contextmenu voor chataanmelding"
                },
                isEnabled: {
                    label: "Effectief",
                    description: "Schakelfunctie"
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
                    name: "Handtekening",
                    description: "Schakel uw handtekening in en uit",
                    toogle: "Wijzig uw handtekening (standaardgedrag: wijzigen)",
                    enabled: "Handtekening ingeschakeld",
                    disabled: "Handtekening is uitgeschakeld"
                }
            }
        },
        silentMessageToggle: {
            name: "Stil bericht wisselen",
            description: "Voegt een knop toe aan de chatbalk om het stil verzenden van berichten in en uit te schakelen.",
            option: {
                persistState: {
                    label: "Maak status permanent",
                    description: "Bepaal hoe u de schakelstatus voor stille berichten kunt behouden",
                    none: "Het mag niet permanent zijn (het moet worden gereset wanneer het kanaal wordt gewijzigd)",
                    channels: "Maak het persistent via alle kanalen",
                    restarts: "Blijf doorgaan op alle kanalen en Discord wordt opnieuw opgestart"
                },
                autoDisable: {
                    label: "Automatisch uitschakelen",
                    description: "Schakel de functie automatisch weer uit na het verzenden van een stil bericht"
                }
            },
            tooltip: {
                enable: "Schakel Stil bericht in",
                disable: "Schakel Stil bericht uit"
            }
        },
        silentTyping: {
            name: "Stil typen",
            description: "Verberg uw type-indicator in de chat.",
            command: {
                silentTyping: {
                    name: "Stil typen",
                    description: "Verberg uw type-indicator in de chat.",
                    toggle: {
                        name: "schakelaar",
                        description: "Schakel de functie globaal, per kanaal of per server in.",
                        global: "Globaal",
                        channel: "Kanaal",
                        guild: "Presentator"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Verberg de type-indicatoren van andere gebruikers bovenaan de chatbalk."
                    },
                    membersListIndicator: {
                        name: "ledenLijstIndicator",
                        description: "Verberg de type-indicatoren van andere gebruikers in de ledenlijst."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Toon een pictogram in de chatbalk om de plug-in snel aan en uit te zetten."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Voeg een vervolgkeuzemenu toe aan het chatcontextmenu om de plug-ininstellingen snel te wijzigen."
                    },
                    defaultHidden: {
                        name: "standaardverborgen",
                        description: "Bepaalt of de schrijfinformatie in DM's/kanalen/servers standaard verborgen wordt."
                    }
                }
            },
            content: {
                updated: "De instellingen voor stil typen zijn bijgewerkt.",
                noChanges: "Er zijn geen wijzigingen aangebracht in de instellingen voor stil typen."
            },
            tooltip: {
                hidden: "Er staat Verborgen ({{locatie}})",
                visible: "Schrijft zichtbaar ({{locatie}})",
                global: "Zichtbaar schrijven (wereldwijd)"
            },
            option: {
                enabledGlobally: {
                    label: "Wereldwijd actief",
                    description: "Schakel uw eigen schrijfindicator wereldwijd in/uit."
                },
                hideChatBoxTypingIndicators: {
                    label: "Verberg chatbox-schrijfindicatoren",
                    description: "Verberg type-indicatoren bovenaan de chatboxen van andere gebruikers."
                },
                hideMembersListTypingIndicators: {
                    label: "Verberg schrijfindicatoren van de ledenlijst",
                    description: "Verberg type-indicatoren in de ledenlijst van andere gebruikers."
                },
                chatIcon: {
                    label: "Chat-icoon",
                    description: "Toon een pictogram in de chatbalk om snel van plug-in te wisselen."
                },
                chatIconLeftClickAction: {
                    label: "Chatpictogram Linksklikactie",
                    description: "Bepaal wat u moet doen als u met de linkermuisknop op het chatpictogram klikt.",
                    global: "Wijzig de algemene schrijfstatus",
                    channel: "Wijzig de schrijfstatus voor het kanaal",
                    guild: "Wijzig het schrijven naar de serverstatus",
                    settings: "Open Plugin-instellingen"
                },
                chatIconMiddleClickAction: {
                    label: "Chatpictogram Middelste klikactie",
                    description: "Bepaal wat u moet doen als u met het midden op het chatpictogram klikt.",
                    global: "Wijzig de algemene schrijfstatus",
                    channel: "Wijzig de schrijfstatus voor het kanaal",
                    guild: "Wijzig het schrijven naar de serverstatus",
                    settings: "Open Plugin-instellingen"
                },
                chatIconRightClickAction: {
                    label: "Chatpictogram Klik met de rechtermuisknop op actie",
                    description: "Bepaal wat u moet doen als u met de rechtermuisknop op het chatpictogram klikt.",
                    global: "Wijzig de algemene schrijfstatus",
                    channel: "Wijzig de schrijfstatus voor het kanaal",
                    guild: "Wijzig het schrijven naar de serverstatus",
                    settings: "Open Plugin-instellingen"
                },
                chatContextMenu: {
                    label: "Chatcontextmenu",
                    description: "Voeg een vervolgkeuzemenu toe aan het chatcontextmenu om de plug-ininstellingen snel te wijzigen."
                },
                defaultHidden: {
                    label: "Standaard verborgen",
                    description: "Indien ingeschakeld, wordt uw indicator verborgen voor andere gebruikers op alle DM's/kanalen/servers die niet in de lijst 'Uitgeschakelde locaties' hieronder staan. Als deze is uitgeschakeld, verschijnt uw indicator op plaatsen die niet zijn opgenomen in de lijst 'Actieve locaties'."
                },
                enabledLocations: {
                    label: "Actieve locaties",
                    description: "Schakel de functie voor deze ID's in. Het accepteert door komma's gescheiden DM-ID's, kanaal-ID's en server-ID's. Wordt alleen gebruikt als 'Standaard privé' is uitgeschakeld."
                },
                disabledLocations: {
                    label: "Gehandicapte locaties",
                    description: "Schakel de functie voor deze ID's uit. Het accepteert door komma's gescheiden DM-ID's, kanaal-ID's en server-ID's. Wordt alleen gebruikt als 'Standaard privé' is ingeschakeld."
                }
            }
        },
        snowfall: {
            name: "Sneeuwval",
            description: "Laat het sneeuwen op Discord!",
            about: {
                title: "Informatie",
                paragraph: "Deze plug-in voegt een sneeuwvaleffect met kerstthema toe aan de Discord-interface. Je kunt het sneeuwtype wijzigen via de onderstaande instellingen.",
                note: "OPMERKING: Hoewel deze plug-in op de meeste computers niet meer prestatie-impact heeft dan een gemiddelde Plexcord-plug-in, kan deze op low-end systemen enige vertraging veroorzaken."
            },
            option: {
                typeOfSnow: {
                    label: "auto soort",
                    description: "Verandert het type sneeuw dat wordt weergegeven (beïnvloedt de prestaties).",
                    solid: "Effen kleur (hoogste prestaties)",
                    text: "Metin (gemiddelde prestaties)",
                    emoji: "Visueel (minste prestatie)"
                },
                maxSize: {
                    label: "Maximale grootte",
                    description: "Maximale sneeuwvlokgrootte"
                },
                speed: {
                    label: "Snelheid",
                    description: "Sneeuwvalpercentage (hoger = snellere val)"
                },
                flakesPerSecond: {
                    label: "Sneeuwvlokken per seconde",
                    description: "Hoeveelheid sneeuwvlokken die per seconde vallen (hoger = zwaardere neerslag)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendVerzoeken",
            description: "Sorteert vriendschapsverzoeken op ontvangen datum",
            tooltip: "Toegevoegd — {{date}}",
            option: {
                showDates: {
                    label: "Datums weergeven",
                    description: "Datums weergeven in vriendschapsverzoeken"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Neemt alle klankbordgeluiden op die in voicechats worden afgespeeld en stelt u in staat deze te downloaden",
            tooltip: "Open SoundBoard-logboek",
            option: {
                savedIds: {
                    label: "Opgeslagen klankbord-ID's",
                    description: "De hoeveelheid klankbord-ID die u per keer wilt opslaan (met 0 kunt u onbeperkt opslaan)",
                    notNumber: "De waarde is geen getal.",
                    cantDecimal: "De waarde mag geen decimaal getal zijn.",
                    cantNegative: "De waarde kan geen negatief getal zijn.",
                    heading: "De hoeveelheid klankbord-ID die u per keer wilt opslaan (met 0 kunt u onbeperkt opslaan)",
                    warning: "Waarschuwing! Als u het getal op een lagere waarde zet, worden de logs gereset!",
                    placeholder: "Voer een nummer in"
                },
                fileType: {
                    label: "Bestandstype",
                    description: "Het formaat waarin u uw bestand wilt opslaan"
                },
                openLogs: {
                    label: "Logboeken openen",
                    description: "Logboeken weergeven",
                    button: "Logboeken openen"
                },
                soundVolume: {
                    label: "Geluidsniveau",
                    description: "Volume van aan/uit-geluid (0 uitgeschakeld)"
                },
                iconLocation: {
                    label: "Icoon Locatie",
                    description: "Kies waar het SoundBoard Log-pictogram verschijnt (opnieuw opstarten vereist)",
                    toolbar: "Werkbalk",
                    chatInput: "Chat-login"
                }
            },
            modal: {
                title: "SoundBoard-logboeken",
                loading: "Geluiden worden geladen...",
                noLogs: "Er is nog geen audio opgenomen. Neem deel aan een voicechat om in te loggen!",
                clearLogs: "Logboeken wissen",
                played: "{{time}} keer gespeeld",
                last: "Laatst gespeeld:",
                also: "Hij stal ook:",
                download: "Downloaden",
                copyId: "Kopieer identiteitsbewijs",
                copied: "ID gekopieerd naar klembord!",
                playSound: "Speel geluid af",
                moreUsers: "Andere mensen gebruikten dit geluid ook...",
                volume: "Klankbordvolume"
            }
        },
        splitLargeMessages: {
            name: "Grote berichten splitsen",
            description: "Splitst grote berichten in meerdere berichten om binnen de berichtlimiet van Discord te passen.",
            option: {
                maxLength: {
                    label: "Maximale berichtlengte",
                    description: "De maximale lengte die een bericht mag hebben voordat het wordt gesplitst. Stel in op 0 voor automatische detectie."
                },
                disableFileConversion: {
                    label: "Schakel bestandsconversie uit",
                    description: "Indien ingeschakeld, wordt de bestandsconversie voor grote berichten uitgeschakeld."
                },
                sendDelay: {
                    label: "Verzending vertraging",
                    description: "Wachttijd in seconden tussen elk nummer."
                },
                hardSplit: {
                    label: "Solide partitie",
                    description: "Indien ingeschakeld, wordt het gesplitst vanaf het laatste teken in plaats van een spatie/nieuwe regel."
                },
                splitInSlowmode: {
                    label: "Splitsen in langzame modus",
                    description: "Berichten splitsen als de langzame modus is ingeschakeld op het kanaal?"
                },
                slowmodeMax: {
                    label: "Langzame modus Maximaal",
                    description: "Maximale toegestane langzame modustijd bij delen in langzame modus."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActiviteitToggle",
            description: "Voegt een schakelknop toe voor zichtbaarheid van Spotify-activiteiten.",
            tooltip: {
                enable: "Open Spotify-activiteit",
                disable: "Schakel Spotify-activiteit uit"
            },
            option: {
                location: {
                    label: "Vrouwen",
                    description: "Waar de Spotify aan/uit-knop wordt weergegeven",
                    panel: "Naast Dempen/Dempen",
                    toolbox: "Plexcord-gereedschapskist"
                },
                activityStatus: {
                    label: "Activiteitsstatus",
                    description: "Huidige status van uw Spotify-activiteit"
                }
            }
        },
        spotifyCrack: {
            name: "Spotify-crack",
            description: "Maakt gratis samen luisteren mogelijk, blokkeert automatisch pauzeren in voicechat en laat Spotify-activiteit spelen wanneer deze niet actief is",
            option: {
                noSpotifyAutoPause: {
                    label: "Schakel Spotify Auto-Pauze uit",
                    description: "Schakel de automatische pauze van Spotify uit."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Hervat Spotify-activiteit terwijl deze inactief is",
                    description: "Zorgt ervoor dat Spotify-activiteit kan blijven spelen wanneer deze niet actief is"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShare-opdrachten",
            description: "Deel uw huidige Spotify-nummer, album of artiest met slash-opdrachten (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Deel uw huidige Spotify {{type}} in de chat",
                    track: "Je luistert naar geen enkel nummer op Spotify.",
                    find: "Het nummer was niet te vinden op Spotify."
                }
            }
        },
        startupTimings: {
            name: "Opstarttijden",
            description: "Voegt starttijden toe aan het menu Instellingen",
            modal: {
                title: "Starttijden",
                ended: "Eindtijd bekijken:",
                start: "Begin",
                interval: "December",
                delta: "Delta",
                event: "Ola",
                serverTrace: "Serverbewaking",
                loading: "Laden..."
            }
        },
        statusNotifications: {
            name: "StatusMeldingen",
            description: "Voegt meldingen toe voor statuswijzigingen",
            loading: "Laden...",
            option: {
                notificationsSound: {
                    label: "Meldingsgeluid",
                    description: "Meldingsgeluid afspelen voor statusmeldingen?"
                },
                usersList: {
                    label: "Gebruikerslijst",
                    description: "Gebruikers moeten op de hoogte worden gesteld wanneer statuswijzigingen optreden",
                    empty: "Er zijn geen gebruikers gecontroleerd. U kunt een gebruiker toevoegen door er met de rechtermuisknop op te klikken en de optie 'Statusmeldingen' te gebruiken."
                }
            },
            context: {
                label: "Statusmeldingen",
                notifications: "Meldingen",
                type: {
                    all: "Alle",
                    online: "online",
                    offline: "offline",
                    none: "Geen"
                }
            },
            notification: {
                unknownUser: "Gebruiker",
                title: "Statusmeldingen",
            },
            status: {
                online: "online",
                idle: "inactief",
                dnd: "Niet storen",
                offline: "offline",
            },
        },
        statusPresets: {
            name: "StatusVoorinstellingen",
            description: "Hiermee kunt u uw statussen opslaan en later opnieuw aanpassen",
            button: {
                remember: "Onthoud status",
            },
            context: {
                edit: "Aangepaste voorinstellingen bewerken",
                set: "Uitzondering instellen"
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
                    description: "Steam-status tijdens Discord Online"
                },
                idleStatus: {
                    label: "Inactieve status",
                    description: "Steam-status wanneer Discord inactief is"
                },
                dndStatus: {
                    label: "Status niet storen",
                    description: "Steam-status tijdens Discord Do Not Disturb"
                },
                invisibleStatus: {
                    label: "Onzichtbare status",
                    description: "Steam-status terwijl Discord Invisible is"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Word onzichtbaar als het evenement privé is",
                    description: "Stel de Steam-status in op Onzichtbaar wanneer Discord-activiteit verborgen is"
                }
            },
            status: {
                online: "online",
                away: "Weg",
                invisible: "Onzichtbaar",
                offline: "Offline (verbinding met Steam-chat verbreken)",
                disabled: "Gehandicapt"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Hiermee kunt u voorkomen dat stickers worden weergegeven.",
            option: {
                showGif: {
                    label: "GIF tonen",
                    description: "Of je nu een coole katten-GIF wilt weergeven."
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
                    description: "Lijst met geblokkeerde sticker-ID's (niet bewerken tenzij je weet wat je doet)"
                }
            },
            modal: {
                blocked: "Geblokkeerde sticker. ID: {{id}} NAAM: {{name}}",
                unblock: "Deblokkeer {{naam}}"
            },
            context: {
                blockSticker: "Bloksticker",
                unblockSticker: "Deblokkeer sticker"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Wanneer u een sticker selecteert in de stickerkiezer, wordt deze toegevoegd aan de chatbox in plaats van deze direct te verzenden"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Schakelt automatisch de streamermodus in wanneer je begint met uitzenden op Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Schakelt uw gewenste streamingcodecs uit",
            option: {
                disableAv1Codec: {
                    label: "AV1-codec uitschakelen",
                    description: "Voorkomt dat Discord overweegt AV1 te gebruiken voor streaming."
                },
                disableH265Codec: {
                    label: "Schakel H265-codec uit",
                    description: "Voorkomt dat Discord overweegt H265 te gebruiken voor streaming."
                },
                disableH264Codec: {
                    label: "Schakel H264-codec uit",
                    description: "Voorkomt dat Discord overweegt H264 te gebruiken voor streaming."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Pas de limiet aan van Super Reactions die tegelijkertijd worden gespeeld en gebruik standaard Super Reaction",
            option: {
                superReactByDefault: {
                    label: "Standaard superreactief",
                    description: "Reactiekiezer gebruikt standaard Superreacties"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Onbeperkte Super Reaction-spellen",
                    description: "Verwijdert de Super Reaction-limiet bij gelijktijdig afspelen"
                },
                superReactionPlayingLimit: {
                    label: "Afspeellimiet voor superreacties",
                    description: "Maximaal aantal Super Reactions dat tegelijkertijd kan worden gespeeld. 0 schakelt Super Reactions uit om te spelen"
                }
            }
        },
        textReplace: {
            name: "TekstVervangen",
            description: "Wijzig de tekst in uw berichten. Kant-en-klare regels vind je in het kanaal #textreplace-rules op de Plexcord-server",
            option: {
                replace: {
                    label: "Wijziging",
                    string: "Gebruik van platte tekst",
                    regex: "Regex gebruiken",
                    myMessages: "Toepassen op je eigen berichten (voor iedereen zichtbaar)",
                    othersMessages: "Toepassen op de berichten van anderen (alleen zichtbaar voor jou)",
                    allMessages: "Toepassen op alle berichten"
                },
                stringRules: {
                    label: "Regels voor platte tekst",
                    description: "Regels voor tekstvervanging met behulp van leesbare tekstmatching."
                },
                regexRules: {
                    label: "Regex-regels",
                    description: "Regels voor het vervangen van tekst met behulp van reguliere expressies."
                }
            },
            modal: {
                title: "Test de regels",
                find: "Bul",
                replace: "Wijziging",
                includes: "Alleen als het bevat",
                type: "Schrijf een bericht",
                applied: "Bericht waarop regels zijn toegepast"
            }
        },
        themeAttributes: {
            name: "ThemaAttributen",
            description: "Voegt gegevensattributen toe aan verschillende elementen voor thematische doeleinden"
        },
        timezones: {
            name: "Tijdzones",
            description: "Toont de lokale tijd van gebruikers in profielen en berichtenthreads",
            button: {
                wantToSave: "Wilt u uw tijdzone opslaan in de database? Klik hier om in te stellen.",
                yourLocalTimezone: "(Uw lokale tijdzone)"
            },
            context: {
                set: "Lokale tijdzone instellen"
            },
            toast: {
                refresh: {
                    successfully: "Tijdzones zijn succesvol vernieuwd!",
                    failed: "Tijdzones konden niet worden vernieuwd!",
                    failedTo: "Tijdzones konden niet worden vernieuwd."
                },
                update: {
                    successfully: "Tijdzone succesvol bijgewerkt!",
                    failed: "De tijdzone kan niet worden ingesteld."
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
                set: "Stel de databasetijdzone in",
                refresh: "Databasetijdzones vernieuwen"
            },
            option: {
                showOwnTimezone: {
                    label: "Toon uw tijdzone",
                    description: "Toont uw tijdzone op uw profiel en berichtenthreads"
                },
                twentyFourHourTime: {
                    label: "24-uursformaat",
                    description: "Toon de tijd in 24-uursformaat"
                },
                showTimezoneInfo: {
                    label: "Toon tijdzone-informatie",
                    description: "Toon tijdzone-informatie naast de klok"
                },
                showMessageHeaderTime: {
                    label: "Toon berichttiteltijd",
                    description: "Toon tijd in berichtenthreads"
                },
                showProfileTime: {
                    label: "Toon profieltijd",
                    description: "Toon tijd in gebruikersprofielen"
                },
                useDatabase: {
                    label: "Gebruik databasetijdzone",
                    description: "Gebruik de database om de tijdzones van gebruikers op te halen"
                },
                preferDatabaseOverLocal: {
                    label: "Geef de voorkeur aan database boven lokaal",
                    description: "Geef de voorkeur aan een database boven lokale opslag in verschillende tijdzones"
                },
                databaseUrl: {
                    label: "Database-URL",
                    description: "URL van de tijdzonedatabaseserver"
                },
                setDatabaseTimezone: {
                    label: "Stel de databasetijdzone in",
                    description: "Stel uw tijdzone in de database in",
                    setTimezone: "Stel de tijdzone in de database in"
                },
                resetDatabaseTimezone: {
                    label: "Databasetijdzone opnieuw instellen",
                    description: "Reset uw tijdzone in de database",
                    failed: "Kan de tijdzone van de database niet opnieuw instellen"
                },
                askedTimezone: {
                    label: "Tijdzone gevraagd",
                    description: "Geeft aan of de gebruiker om zijn tijdzone wordt gevraagd"
                }
            },
            modal: {
                title: "Tijdzones",
                select: "Selecteer Tijdzone",
                selectPlaceholder: "Kies een tijdzone",
                delete: "Tijdzone verwijderen",
                save: "Redden"
            }
        },
        toastNotifications: {
            name: "ToastMeldingen",
            description: "Toont een toastmelding wanneer u een direct bericht ontvangt.",
            notification: {
                call: "Samen met jou een zoektocht gestart!",
                recipient: {
                    add: "{{target}} is aan de groep toegevoegd door {{actor}}.",
                    remove: "{{target}} is uit de groep verwijderd door {{actor}}.",
                    left: "Hij verliet de groep."
                },
                channel: {
                    change: {
                        name: "Kanaalnaam gewijzigd in {{name}}.",
                        icon: "Kanaalpictogram is gewijzigd."
                    },
                    pinned: "Een bericht vastgezet."
                },
                sent: {
                    embed: "Hij heeft een embed gestuurd.",
                    sticker: "Hij stuurde een sticker.",
                    attachment: "Bestand:"
                },
                redacted: "Berichtinhoud is verborgen.",
                friend: {
                    accept: "{{user}} is nu je vriend",
                    acceptBody: "Nu kunt u hem een ​​direct bericht sturen.",
                    request: "{{user}} heeft je een vriendschapsverzoek gestuurd.",
                    requestBody: "Je kunt dit accepteren of weigeren via het tabblad Vrienden."
                },
                example: {
                    title: "Voorbeeldmelding",
                    body: "Dit is een voorbeeld van een meldingstekst."
                }
            },
            modal: {
                dismiss: "Melding sluiten",
                attachments: "{{bijlagen}} bestanden verzonden."
            },
            option: {
                position: {
                    label: "Vrouwen",
                    description: "Locatie van Toast-melding",
                    topRight: "Rechtsboven",
                    topLeft: "Linksboven",
                    bottomRight: "Rechtsonder",
                    bottomLeft: "Sol Alt"
                },
                timeout: {
                    label: "Sluitingstijd",
                    description: "Hoeveel seconden om meldingen weer te geven"
                },
                opacity: {
                    label: "Dekking",
                    description: "Dekking van Toast-melding"
                },
                determineServerNotifications: {
                    label: "Servermeldingen instellen",
                    description: "Bepaal of u meldingen wilt weergeven op basis van de instellingen voor servermeldingen"
                },
                directMessages: {
                    label: "Directe berichten",
                    description: "Toon meldingen voor directe berichten"
                },
                groupMessages: {
                    label: "Groepsberichten",
                    description: "Toon melding voor groepsberichten"
                },
                friendServerNotifications: {
                    label: "Vriend- en servermeldingen",
                    description: "Toon meldingen wanneer vrienden berichten verzenden op openbare servers"
                },
                friendActivity: {
                    label: "Vriend evenement",
                    description: "Toon meldingen voor het toevoegen van vrienden of het ontvangen van vriendschapsverzoeken"
                },
                notifyFor: {
                    label: "Kanalen om meldingen te ontvangen",
                    description: "Voer de kanaal-ID's in om meldingen te ontvangen (gescheiden door komma's)"
                },
                ignoreUsers: {
                    label: "Gebruikers om te negeren",
                    description: "Voer gebruikers-ID's in waarvan de meldingen worden genegeerd (gescheiden door komma's)"
                },
                exampleButton: {
                    label: "Voorbeeldknop",
                    description: "Toon een voorbeeld van een toastmelding.",
                    show: "Toon voorbeeldmelding"
                }
            }
        },
        toggleVideoBind: {
            name: "SchakelVideoBind",
            description: "Voegt een aanpasbare sneltoets toe om uw webcam aan en uit te zetten.",
            option: {
                keyBind: {
                    label: "Sneltoets",
                    description: "De knop waarmee de webcam wordt in- en uitgeschakeld wanneer erop wordt gedrukt."
                },
                reqCtrl: {
                    label: "Ctrl Gerekli",
                    description: "Forceer het indrukken van de Ctrl-toets."
                },
                reqShift: {
                    label: "Ploegendienst vereist",
                    description: "Forceer het indrukken van de Shift-toets."
                },
                reqAlt: {
                    label: "Sub vereist",
                    description: "Forceer het indrukken van de Alt-toets."
                }
            }
        },
        translate: {
            name: "Vertalen",
            description: "Vertaal berichten met Google Translate of DeepL",
            tooltip: {
                label: "Overzetten"
            },
            context: {
                translate: "Overzetten",
                open: "Open het vertaalvenster",
                auto: "Automatische vertaling ingeschakeld"
            },
            option: {
                receivedInput: {
                    label: "Ontvangen invoer",
                    description: "De taal waarin de ontvangen berichten worden vertaald"
                },
                receivedOutput: {
                    label: "Ontvangen uitvoer",
                    description: "In welke taal worden de ontvangen berichten vertaald?"
                },
                sentInput: {
                    label: "Ingezonden invoer",
                    description: "De taal waarin uw eigen berichten worden vertaald"
                },
                sentOutput: {
                    label: "Verzonden uitvoer",
                    description: "In welke taal uw eigen berichten worden vertaald"
                },
                service: {
                    label: "Vertaaldienst",
                    description: "DeepL Pro vereist een betaalde API-sleutel",
                    descriptionWeb: "Vertaalservice (niet ondersteund op internet!)",
                    google: "Google Vertalen",
                    deepl: "DeepL gratis",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "DeepL API-sleutel",
                    description: "DeepL API-sleutel",
                    placeholder: "Haal uw API-sleutel op https://deepl.com/uw-account"
                },
                autoTranslate: {
                    label: "Automatische vertaling",
                    description: "Het vertaalt uw berichten automatisch voordat ze worden verzonden. U kunt ook op de vertaalknop klikken of met de rechtermuisknop klikken om deze functie in of uit te schakelen."
                },
                showAutoTranslateTooltip: {
                    label: "Automatische vertalingsbeschrijving weergeven",
                    description: "Toon een beschrijving in de chatbalkknop wanneer een bericht automatisch wordt vertaald"
                }
            },
            modal: {
                title: "Vertaling",
                select: "Kies een taal",
                auto: "Automatische vertaling",
                dismiss: "Kwartaal",
                translated: "Vertaald uit {{van}}",
                failed: {
                    to: "Vertaling van {{text}} is mislukt",
                    connect: "DeepL API-verbinding mislukt:"
                },
                wrong: "Er is iets misgegaan. Als het probleem zich blijft voordoen, controleer dan de console of vraag om hulp van de ondersteuningsserver.",
                deepl: {
                    api: "DeepL API-quotum overschreden. Overstappen naar Google Translate.",
                    apiKey: "DeepL API-sleutel is niet ingesteld. Terugkerend naar Google.",
                    auth: "Ongeldige DeepL API-sleutel of -versie"
                },
                autoTranslateEnabled: {
                    title: "Automatische vertaling van Plexcord ingeschakeld",
                    body: "Je hebt zojuist automatische vertaling ingeschakeld! Alle berichten die u verzendt, worden automatisch vertaald voordat ze worden verzonden.",
                    confirm: "Automatische vertaling uitschakelen",
                    cancel: "Ik begrijp",
                    secondaryConfirm: "Laat het niet meer zien"
                }
            }
        },
        typingIndicator: {
            name: "TypeIndicator",
            description: "Voegt een indicator toe wanneer iemand een kanaal typt.",
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
                    label: "Weergavemodus",
                    description: "Hoe de indicator weergeven?",
                    both: "Avatars en geanimeerde stippen",
                    dots: "geanimeerde stippen",
                    avatars: "avatars"
                }
            }
        },
        typingTweaks: {
            name: "Typeaanpassingen",
            description: "Toont avatars en rolkleuren in de typindicator",
            option: {
                showAvatars: {
                    label: "Meerdere gebruikers weergeven",
                    description: "Toon avatars in typindicator"
                },
                showRoleColors: {
                    label: "Toon rolkleuren",
                    description: "Toon rolkleuren in typindicator"
                },
                alternativeFormatting: {
                    label: "Alternatief formaat",
                    description: "Toon een nuttiger bericht wanneer meer dan één persoon aan het typen is"
                },
                amITyping: {
                    label: "Ben ik aan het schrijven?",
                    description: "Laat zien of andere mensen hebben gezien wat je hebt geschreven"
                }
            },
            others: {
                areTyping: "en {{count}} meer mensen schrijven..."
            }
        },
        unindent: {
            name: "Niet inspringen",
            description: "Verwijdert voorloopstreepjes in codeblokken"
        },
        unitConverter: {
            name: "EenheidConverter",
            description: "Converteert metrische eenheden naar imperiale eenheden en omgekeerd",
            tooltip: "Eenheden converteren",
            option: {
                myUnits: {
                    label: "Mijn eenheden",
                    description: "De eenheden die u gebruikt en waarnaar u wilt omrekenen. Standaard: imperiaal",
                    imperial: "Empire",
                    metric: "Metrisch"
                }
            },
            button: {
                dismiss: "Kwartaal"
            }
        },
        unlimitedAccounts: {
            name: "Onbeperkte accounts",
            description: "Verhoogt het aantal accounts dat u kunt toevoegen.",
            option: {
                maxAccounts: {
                    label: "Maximale rekening",
                    description: "Aantal accounts dat kan worden toegevoegd, vul 0 in voor onbeperkt"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "Ontgrendelde AvatarZoom",
            description: "Hiermee kunt u verder inzoomen in de tool voor het bijsnijden van afbeeldingen wanneer u uw avatar wijzigt",
            option: {
                zoomMultiplier: {
                    label: "Zoomvermenigvuldiger",
                    description: "Zoomvermenigvuldiger"
                }
            }
        },
        unsuppressEmbeds: {
            name: "Hef het onderdrukken van insluitingen op",
            description: "Hiermee kunt u de onderdrukking van ingesloten inhoud in berichten opheffen",
            context: {
                unsuppress: "Verwijder insluitingsonderdrukking",
                suppress: "Afdrukken insluiten"
            }
        },
        uselessInfo: {
            name: "Nutteloze informatie",
            description: "Toont willekeurige nutteloze informatie binnen Discord; Er kunnen snelkoppelingen en intervalinstellingen worden gemaakt.",
            recording: "Opnemen...",
            record: "Redden",
            option: {
                delay: {
                    label: "Meldingsinterval",
                    description: "Weergave-interval melding (in minuten)"
                },
                historyHotkey: {
                    label: "Snelkoppeling in het geschiedenispaneel",
                    description: "Sneltoets om de geschiedenis van eerder getoonde informatie te openen"
                },
                randomFactHotkey: {
                    label: "Willekeurige informatiesnelkoppeling",
                    description: "Sneltoets om willekeurig informatiepaneel te openen"
                },
                sameFact: {
                    label: "Vermijd het herhalen van dezelfde informatie",
                    description: "Voorkomt dat dezelfde informatie meerdere keren wordt getoond zonder dat alle informatie wordt getoond"
                },
                lastNFacts: {
                    label: "Laatste informatie mag niet worden herhaald",
                    description: "Laatste aantal stukjes informatie die niet opnieuw mogen worden weergegeven (0 = altijd)"
                }
            },
            modal: {
                title: "Nutteloze informatie",
                history: {
                    none: "Nog geen informatie. Gebruik de snelkoppeling of wacht.",
                    source: "Bron"
                },
                showRandom: "Willekeurig weergeven",
                close: "Kwartaal"
            },
            notification: {
                title: "Wist je dat?"
            }
        },
        userMessagesPronouns: {
            name: "GebruikersberichtenVoornaamwoorden",
            description: "Toont voornaamwoorden van gebruikers in berichtkoppen",
            option: {
                pronounsFormat: {
                    label: "Voornaamwoordvorm",
                    description: "Hoe voornaamwoorden verschijnen in de chat",
                    lowercase: "Kleine letters",
                    capitalized: "initiële hoofdletter"
                },
                showSelf: {
                    label: "Laat jezelf zien",
                    description: "Schakel het weergeven van uw eigen voornaamwoorden in of uit"
                }
            }
        },
        userVoiceShow: {
            name: "GebruikerVoiceShow",
            description: "Toont een indicator wanneer een gebruiker zich op het spraakkanaal bevindt",
            option: {
                showInUserProfileModal: {
                    label: "Weergeven in gebruikersprofiel",
                    description: "Toon spraakkanaalindicator naast naam in gebruikersprofiel"
                },
                showInMemberList: {
                    label: "Weergeven in ledenlijst",
                    description: "Toon spraakkanaalindicator in leden- en DM-lijst"
                },
                showInMessages: {
                    label: "Weergeven in berichten",
                    description: "Toon spraakkanaalindicator in berichten"
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
            description: "Toont gebruikersbanners van USRBG zodat iedereen banners kan gebruiken zonder Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro eerst",
                    description: "Als er zowel Nitro- als USRBG-banners bestaan, bepaal dan welke u wilt gebruiken",
                    nitro: "Nitro-banner",
                    usrbg: "USRBG-banner"
                },
                voiceBackground: {
                    label: "Audio-achtergrond",
                    description: "Gebruik USRBG-banners als achtergrond voor voicechat"
                }
            },
            button: "Koop uw eigen USRBG-banner"
        },
        validReply: {
            name: "Geldig antwoord",
            description: "Oplossing voor de fout 'Kan bericht niet laden' wanneer u met de muis over het antwoord zweeft"
        },
        validUser: {
            name: "Geldige gebruiker",
            description: "Oplossing voor het verschijnen van vermeldingen als '@onbekende-gebruiker' voor onbekende gebruikers (beweeg over de vermelding om dit op te lossen)",
            badges: {
                discordBugHunter: "Onenigheid Bug Hunter",
                moderatorProgramsAlumni: "Afgestudeerd aan moderatorprogramma's",
                discordStaff: "Discord-staf",
                hypeSquadEvents: "HypeSquad-evenementen",
                bravery: "HypeSquad Cesaret",
                brilliance: "HypeSquad-helderheid",
                balance: "HypeSquad Denge",
                partneredServerOwner: "Mede-servereigenaar",
                nitro: "Onenigheid Nitro",
                earlySupporter: "Vroege supporter",
                earlyVerifiedBotDeveloper: "Vroeg geverifieerde botontwikkelaar"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Hiermee kunt u deelnemen aan voicechats door te dubbelklikken in plaats van één keer te klikken"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Kondigt via verteller aan wanneer gebruikers zich aansluiten bij, verlaten of verplaatsen van spraakkanalen",
            option: {
                voice: {
                    label: "Ses"
                },
                volume: {
                    label: "Geluidsniveau",
                    description: "Stemniveau van verteller"
                },
                rate: {
                    label: "Snelheid",
                    description: "Spreeksnelheid van verteller"
                },
                sayOwnName: {
                    label: "Zeg uw naam",
                    description: "Of de verteller uw naam zal zeggen"
                },
                latinOnly: {
                    label: "Alleen Latijn",
                    description: "Wis niet-Latijnse tekens in namen voordat u ze leest"
                },
                joinMessage: {
                    label: "Deelnamebericht",
                    description: "Meld je aan bij bericht"
                },
                leaveMessage: {
                    label: "Afscheidsbericht",
                    description: "bericht achterlaten"
                },
                moveMessage: {
                    label: "Bewegend bericht",
                    description: "ontroerende boodschap"
                },
                muteMessage: {
                    label: "Bericht dempen",
                    description: "Bericht dempen (voorlopig alleen jezelf)"
                },
                unmuteMessage: {
                    label: "Bericht dempen",
                    description: "Bericht dempen (voorlopig alleen jezelf)"
                },
                deafenMessage: {
                    label: "Oorverdovende boodschap",
                    description: "Oorverdovende boodschap (voor nu alleen jezelf)"
                },
                undeafenMessage: {
                    label: "Oorverdovende boodschap",
                    description: "Oorverdovende boodschap (voor nu alleen jezelf)"
                }
            },
            modal: {
                title: "Speel voorbeeldgeluiden af",
                voiceTitle: "Ses",
                voice: "Kies een geluid",
                languageTitle: "Dil",
                language: "Kies een taal",
                noVoice: "Vertellerstem niet gevonden.",
                linuxNote: "Installeer speech-dispatcher of espeak en voer Discord uit met de parameter --enable-speech-dispatcher",
                someNarrator: "Probeer enkele stemmen te installeren vanuit de Verteller-instellingen van uw besturingssysteem",
                dontHaveEnglish: "Je hebt geen Engelse audio geüpload, dus de verteller klinkt misschien raar",
                customiseMessages: "Hieronder kunt u de gesproken berichten aanpassen. Als u dit leeg laat, kunt u bepaalde berichten uitschakelen",
                placeholdersInfo: "Aangepaste tijdelijke aanduidingen {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} en {{CHANNEL}} worden vervangen door respectievelijk de gebruikersnaam (leeg als je jezelf bent), de weergavenaam, de bijnaam op de server en de kanaalnaam"
            }
        },
        viewIcons: {
            name: "Bekijk iconen",
            description: "Maakt avatar- en bannerafbeeldingen in gebruikersprofielen klikbaar; Voegt opties voor schermavatar/banner toe aan het contextmenu van de gebruiker, de server en het groepskanaal.",
            context: {
                view: {
                    avatar: "Bekijk Avatar",
                    serverAvatar: "Bekijk serveravatar",
                    icon: "Pictogram bekijken",
                    banner: "Bekijk Banier"
                }
            },
            option: {
                format: {
                    label: "Formaat",
                    description: "Selecteer het beeldformaat dat u wilt gebruiken voor niet-bewegende beelden. Geanimeerde afbeeldingen gebruiken altijd het .gif-formaat"
                },
                imgSize: {
                    label: "Afbeeldingsgrootte",
                    description: "Te gebruiken afbeeldingsgrootte"
                }
            }
        },
        viewRaw: {
            name: "BekijkRaw",
            description: "Kopieer en bekijk onbewerkte inhoud/gegevens van elk bericht, kanaal of server",
            context: {
                copyLeft: "Kopieer onbewerkte gegevens (klik met de linkermuisknop) / Bekijk onbewerkte gegevens (klik met de rechtermuisknop)",
                copyRight: "Kopieer onbewerkte gegevens (klik met de rechtermuisknop) / Bekijk onbewerkte gegevens (klik met de linkermuisknop)",
                view: "Bekijk onbewerkte gegevens"
            },
            option: {
                popoverButton: {
                    label: "Pop-upmenuknop",
                    description: "Toon een knop in de berichtenpopover om de onbewerkte inhoud/gegevens van het bericht te bekijken."
                },
                clickMethod: {
                    label: "Klik op Methode",
                    description: "Wijzig de klikmethode die u wilt gebruiken om de onbewerkte inhoud/gegevens van een bericht te bekijken.",
                    left: "Klik met de linkermuisknop om onbewerkte inhoud te bekijken.",
                    right: "Klik met de rechtermuisknop om onbewerkte inhoud te bekijken."
                }
            },
            modal: {
                title: "Ham Veri",
                content: "Inhoud",
                data: "{{type}} Veri",
                copied: "{{type}} gegevens gekopieerd naar klembord!",
                copy: "Kopieer {{type}} JSON",
                copiedContent: "Inhoud gekopieerd naar klembord!",
                copyContent: "Kopieer onbewerkte inhoud"
            },
            types: {
                message: "Bericht",
                channel: "Kanaal",
                guild: "Presentator",
                role: "Rol",
                user: "Gebruiker"
            }
        },
        voiceButtons: {
            name: "Spraakknoppen",
            description: "Stuur snel een bericht, demp of verdoof elke gebruiker via het spraakoproeppaneel.",
            option: {
                showChatButton: {
                    label: "Chatknop tonen",
                    description: "Of de chatknop wel of niet moet worden weergegeven"
                },
                showMuteButton: {
                    label: "Toon dempknop",
                    description: "Of de mute-knop moet worden weergegeven"
                },
                showDeafenButton: {
                    label: "Toon dovenknop",
                    description: "Of de doofknop moet worden weergegeven"
                },
                muteSoundboard: {
                    label: "Klankbord'u Sessize Al",
                    description: "Wanneer op de oorverdovende knop wordt geklikt, wordt het klankbord van de gebruiker aan- en uitgeschakeld."
                },
                disableVideo: {
                    label: "Schakel video uit",
                    description: "Wanneer op de oorverdovende knop wordt geklikt, wordt de video van de gebruiker in- en uitgeschakeld."
                },
                useServer: {
                    label: "Gebruik server",
                    description: "Maakt gebruik van server dempen/oorverdovend in plaats van lokaal als u daarvoor toestemming heeft."
                },
                serverSelf: {
                    label: "Demp uzelf op de server",
                    description: "Mute/deafener dempt of verdooft uzelf op de server wanneer u deze gebruikt."
                },
                showButtonsSelf: {
                    label: "Laat knoppen voor jezelf zien",
                    description: "Of u knoppen voor uw eigen gebruiker wilt weergeven. Het heeft dezelfde functie; Het DM-paneel gaat open en dempt/dooft jezelf.",
                    display: "Show",
                    hide: "verbergen",
                    disable: "Gehandicapt"
                },
                whichNameToShow: {
                    label: "Welke naam moet verschijnen?",
                    description: "Gebruikersnaam, globale naam of beide weergeven in tooltips?",
                    global: "Globale naam",
                    username: "Gebruikersnaam",
                    both: "Beide"
                },
                buttonPosition: {
                    label: "Knop Locatie",
                    description: "Kies waar u knoppen wilt weergeven.",
                    left: "Sol",
                    right: "Rechts",
                }
            },
            tooltip: {
                navigate: "Ga naar DM's",
                open: "DM openen met {{username}}",
                yourself: "jezelf",
                serverMute: "Dempen op server",
                serverDeafen: "Doof op de server",
                mute: "Stom",
                deafen: "doof maken",
                unmute: "Dempen opheffen",
                undeafen: "Verwijder uit oorverdovend",
                serverUnmute: "Dempen op server opheffen",
                serverUndeafen: "Verwijder oorverdovend op de server"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Registreert wie zich bij audiokanalen aansluit en deze verlaat",
            context: {
                view: "Kanaallogboeken bekijken"
            },
            modal: {
                joined: "Lid geworden van <#{{channel}}> kanaal",
                left: "Linkerkanaal <#{{channel}}>",
                movedTo: "Verplaatst naar <#{{channel}}> kanaal",
                movedFrom: "Verplaatst van <#{{channel}}>",
                noLogs: "Er zijn geen logboeken om weer te geven.",
                logs: "{{channel}} logboeken"
            },
            option: {
                mode: {
                    label: "Mod",
                    description: "Hoe het audiokanaallogboek te tonen",
                    menu: "Log-menu",
                    associated: "Log direct in op het betreffende chatkanaal",
                    both: "Log in op zowel het chatkanaal als het logmenu"
                },
                voiceChannelChatSelf: {
                    label: "Spraakkanaalchat (jezelf)",
                    description: "Registreer uw eigen spraakkanaalactiviteit in spraakkanalen"
                },
                voiceChannelChatSilent: {
                    label: "Stille spraakkanaalchat",
                    description: "Berichten voor deelnemen/verlaten/verplaatsen worden gedempt in spraakkanaalchats"
                },
                voiceChannelChatSilentSelf: {
                    label: "Stille spraakkanaalchat (jezelf)",
                    description: "Als u zich op een spraakkanaal bevindt, zijn berichten voor deelnemen/verlaten/verplaatsen stil"
                },
                ignoreBlockedUsers: {
                    label: "Negeer geblokkeerde gebruikers",
                    description: "Gebruikers registreren die u hebt geblokkeerd"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatHulpprogramma's",
            description: "Met deze plug-in kunt u meerdere acties uitvoeren (verplaatsen, dempen, de verbinding verbreken, enz.) op een heel kanaal (oorspronkelijk door dutake)",
            option: {
                waitAfter: {
                    label: "Wacht na actie",
                    description: "Aantal API-transacties dat moet worden uitgevoerd voordat wordt gewacht (om tarieflimiet te vermijden)"
                },
                waitSeconds: {
                    label: "Wachttijd",
                    description: "Wachttijd tussen elke handeling (in seconden)"
                }
            },
            context: {
                voiceTools: "Audiohulpmiddelen",
                mentionAll: "Tag alle gebruikers",
                disconnectAll: "Ontkoppel iedereen",
                muteAll: "Demp iedereen",
                unmuteAll: "Hef het dempen van iedereen op",
                deafenAll: "Doof allemaal",
                undeafenAll: "Ga weg zonder iedereen oorverdovend te maken",
                moveAll: "Beweeg iedereen"
            }
        },
        voiceDownload: {
            name: "Stem downloaden",
            description: "Voegt een downloadoptie toe aan spraakberichten. (Opent een nieuw browsertabblad)",
            context: {
                download: "Voicemail downloaden"
            }
        },
        voiceMessages: {
            name: "Spraakberichten",
            description: "Hiermee kunt u spraakberichten verzenden, net als op uw mobiel. Klik hiervoor met de rechtermuisknop op de uploadknop en selecteer 'Spraakbericht verzenden'.",
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
                    upload: "Voicemail kan niet worden geladen.",
                    start: "Kan de opname niet starten.",
                    finish: "Registratie kon niet worden voltooid."
                }
            },
            context: {
                sendVoiceMessage: "Spraakbericht verzenden",
                missingPermissions: "(Toestemming ontbreekt)"
            },
            modal: {
                record: "Spraakbericht opnemen",
                upload: "Bestand uploaden",
                preview: "Voorbeeld",
                failed: "Het geselecteerde audiobestand kan niet worden geparseerd:",
                oggOpus: "Spraakberichten moeten de OggOpus-indeling hebben om op iOS te kunnen afspelen. Dit bestand kan niet worden afgespeeld op iOS omdat het de indeling {{type}} heeft.",
                fix: "Om dit op te lossen, converteert u het bestand eerst naar het OggOpus-formaat. U kunt bijvoorbeeld {{link}} gebruiken.",
                sending: "Voicemail wordt verzonden... Een ogenblik geduld.",
                stop: "stop met opnemen",
                start: "beginnen met opnemen",
                resume: "Registratie hervatten",
                pause: "Pauzeer de opname",
                recording: "REGISTRATIE IS IN PROGRESS",
                send: "Versturen"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Hiermee kunt u het gebruikers- en uitzendvolume verhogen tot boven het standaardmaximum",
            option: {
                multiplier: {
                    label: "Vermenigvuldiger",
                    description: "Geluidsmultiplier"
                }
            }
        },
        wallpaperFree: {
            name: "BehangGratis",
            description: "Een remake van het oude DM-behangexperiment; Stel een achtergrondafbeelding in voor elk kanaal, gebruiker of server.",
            option: {
                globalDefault: {
                    label: "Algemene standaard",
                    description: "Stel een algemene standaardachtergrond in voor alle kanalen."
                },
                stylingTips: {
                    label: "Stijltips"
                }
            },
            context: {
                setWallpaper: "Achtergrond instellen",
                removeWallpaper: "Verwijder behang"
            },
            modal: {
                set: "behang instellen",
                image: "Afbeeldings-URL",
                cancel: "Annuleren",
                apply: "Toepassen",
                global: {
                    set: "Stel een openbare achtergrond in",
                    remove: "Verwijder de algemene standaardachtergrond",
                    reset: "Achtergrondgegevens opnieuw instellen"
                },
                web: {
                    info: "U kunt lokale bestanden gebruiken door ze in de plexcord-themamap te plaatsen en de url plexcord:///themes/bestandsnaam.ext te gebruiken.",
                    open: "Open de Themamap",
                    quickCSS: "Open QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenu's",
            description: "Voegt back-contextmenu's toe die ontbreken in de webversie van Discord: links en afbeeldingen (kopiëren of link/afbeelding openen), tekstgebied (kopiëren, knippen, plakken, spellingcontrole)",
            option: {
                addBack: {
                    label: "Terug toevoegen",
                    description: "Voeg Discord-contextmenu's terug voor afbeeldingen, links en chatinvoerbalk"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Het voegt de sneltoetsen toe die ontbreken in de webversie van Discord: ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+1-9, ctrl+,. Het werkt letterlijk alleen op Plextron/Legcord, niet in de browser."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Verwijdert de bitsnelheidslimiet van 2500 kbps voor het delen van schermen op Chromium- en Plextron-clients.",
            option: {
                experimentalAV1Support: {
                    label: "Experimentele AV1-ondersteuning",
                    description: "Maakt AV1-codec-ondersteuning mogelijk. Oneindige laadstromen kunnen problemen veroorzaken zoals"
                }
            }
        },
        whoReacted: {
            name: "Wie heeft gereageerd",
            description: "Toont avatars van gebruikers die op een bericht reageren",
            option: {
                avatarClick: {
                    label: "Avatar-klik",
                    description: "Schakel de klikbaarheid van avatars in reacties in"
                }
            }
        },
        whosWatching: {
            name: "Wie kijkt",
            description: "Bekijk gebruikers die naar uw uitzending kijken door de muisaanwijzer op het pictogram voor scherm delen te plaatsen",
            modal: {
                noSpectator: "geen publiek"
            },
            option: {
                showPanel: {
                    label: "Paneel tonen",
                    description: "Toon kijkers onder het deelvenster Scherm delen"
                }
            }
        },
        writeUpperCase: {
            name: "SchrijfHoofdletter",
            description: "Converteert de eerste letter van elke zin naar hoofdletters in berichtinvoer.",
            option: {
                blockedWords: {
                    label: "Geblokkeerde woorden",
                    description: "Uitdrukkingen die geen hoofdletter mogen zijn (gescheiden door komma's)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Pusht Discord-meldingen naar XSOverlay voor eenvoudige weergave in VR",
            notification: {
                call: {
                    title: "{{user}} zoekt jou.",
                    content: "inkomend gesprek"
                },
                message: {
                    reply: "(antwoord)",
                    embed: "[insluiten]",
                    onlyEmbed: "verzonden bericht embed(s)",
                    sticker: "[sticker]",
                    onlySticker: "een sticker gestuurd",
                    image: "afbeelding",
                    attachment: "I"
                },
                test: {
                    title: "Plexcord'en duiken!",
                    content: "Dit is een testmelding! ontploffen",
                    button: "Testmelding verzenden"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket-poort",
                    description: "WebSocket-poort"
                },
                preferUDP: {
                    label: "UDP Tercih Et",
                    description: "Als u oudere versies van XSOverlay gebruikt en geen verbinding kunt maken via WebSocket, schakel deze dan in. Deze instelling wordt op internet genegeerd."
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
                    description: "Sta privéberichtmeldingen toe"
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
                    label: "Ping Rengi",
                    description: "Kleur van gebruikerstag"
                },
                channelPingColor: {
                    label: "Kleurping-kanaal",
                    description: "Kleur van kanaallabel"
                },
                soundPath: {
                    label: "Geluidspad",
                    description: "Meldingsgeluid (standaard/waarschuwing/fout)"
                },
                timeout: {
                    label: "Time-out",
                    description: "Meldingsduur (seconden)"
                },
                lengthBasedTimeout: {
                    label: "Op berichtlengte gebaseerde duur",
                    description: "Verleng de duur afhankelijk van de berichtlengte"
                },
                opacity: {
                    label: "Dekking",
                    description: "Ondoorzichtigheid van meldingen"
                },
                volume: {
                    label: "Ses",
                    description: "geluidsniveau"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Blokkeert advertenties op YouTube-insluitingen en WatchTogether-activiteit met AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeBeschrijving",
            description: "Voegt beschrijvingen toe aan YouTube-video-insluitingen"
        }
    }
} as const;

export default translations;
