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
        title: "Impostazioni",
        language: {
            selector: {
                label: "Lingua",
                description: "Seleziona la tua lingua preferita per Plexcord.",
                placeholder: "Seleziona Lingua"
            }
        },
        location: {
            label: "Posizione Impostazioni",
            description: "Dove posizionare la sezione delle impostazioni di Plexcord",
            top: "In cima a tutto",
            nitro: {
                above: "Sopra la sezione Nitro",
                below: "Sotto la sezione Nitro"
            },
            activity: {
                above: "Sopra Impostazioni Attività",
                below: "Sotto Impostazioni Attività"
            },
            bottom: "In fondo a tutto"
        },
        switches: {
            useQuickCss: {
                label: "Abilita CSS Personalizzato",
                description: "Carica i CSS personalizzati dall'editor QuickCSS. Questo ti permette di personalizzare l'aspetto di Discord con i tuoi stili."
            },
            enableReactDevtools: {
                label: "Abilita React Developer Tools",
                description: "Abilita l'estensione React Developer Tools per il debug dei componenti React di Discord. Utile per lo sviluppo di plugin."
            },
            mainWindowFrameless: {
                label: "Disabilita il bordo della finestra principale",
                description: "Rimuove il bordo nativo della finestra per un aspetto più pulito. Puoi comunque spostare la finestra trascinando l'area della barra del titolo."
            },
            frameless: {
                label: "Disabilita il bordo della finestra",
                description: "Rimuove il bordo nativo della finestra per un aspetto più pulito."
            },
            winNativeTitleBar: {
                label: "Usa la barra del titolo nativa di Windows invece di quella di Discord",
                description: "Sostituisce la barra del titolo personalizzata di Discord con quella standard di Windows. Migliora la compatibilità con alcuni strumenti di gestione delle finestre."
            },
            transparent: {
                label: "Abilita trasparenza finestra",
                description: "Rende la finestra di Discord trasparente. È richiesto un tema che supporti la trasparenza, altrimenti non avrà effetto.",
                isWindows: "Questo impedirà il ridimensionamento della finestra e l'aggancio ai bordi dello schermo.",
                notWindows: "Questo impedirà il ridimensionamento della finestra."
            },
            winCtrlQ: {
                label: "Registra Ctrl+Q come scorciatoia per chiudere Discord",
                description: "Aggiunge Ctrl+Q come scorciatoia da tastiera per chiudere Discord. Un'alternativa a Alt+F4."
            },
            disableMinSize: {
                label: "Disabilita dimensione minima finestra",
                description: "Permette alla finestra di Discord di essere ridimensionata al di sotto della sua dimensione minima predefinita."
            }
        },
        quickActions: {
            title: "Azioni Rapide",
            description: "Azioni comuni che potresti voler eseguire frequentemente.",
            notificationLog: "Registro Notifiche",
            editQuickCSS: "Modifica QuickCSS",
            relaunchDiscord: "Riavvia Discord",
            openSettingsFolder: "Apri Cartella Impostazioni",
            viewSourceCode: "Visualizza Codice Sorgente"
        },
        specialCards: {
            donations: {
                title: "Donazioni",
                subtitle: "Grazie per la tua donazione!",
                description: "Puoi gestire i tuoi vantaggi in qualsiasi momento contattando @mutanplex.",
                button: "Dona",
                invite: "Entra nel nostro Discord",
                invalid: "Link d'invito non valido o scaduto."
            },
            supportProject: {
                title: "Supporta il Progetto",
                description: "Per favore, considera di supportare lo sviluppo di Plexcord effettuando una donazione!"
            },
            contributions: {
                title: "Contributi",
                subtitle: "Grazie per il tuo contributo!",
                description: "Poiché hai contribuito a Plexcord, ora hai un nuovo fantastico badge!",
                buttonTitle: "Guarda a cosa hai contribuito"
            }
        },
        settingsSection: {
            title: "Impostazioni",
            description: "Configura il comportamento di Plexcord e la sua integrazione con Discord.",
            hintParts: {
                prefix: "Puoi personalizzare la posizione di questa sezione nel menu impostazioni configurando il {{pluginLink}}",
                linkText: "Plugin Impostazioni"
            }
        },
        notifications: {
            title: "Notifiche",
            description: "Configura come Plexcord gestisce le notifiche. Puoi personalizzare gli avvisi o visualizzare la cronologia.",
            settings: "Impostazioni Notifiche",
            viewLog: "Visualizza Registro Notifiche",
            permissions: {
                denied: {
                    title: "Permesso Notifiche Desktop Negato",
                    label: "Hai negato i permessi per le notifiche. Le notifiche desktop non funzioneranno!"
                }
            },
            style: {
                label: "Stile Notifiche",
                description: "Alcuni plugin potrebbero mostrarti delle notifiche. Sono disponibili in due stili:",
                plexcord: "Notifiche Plexcord",
                plexcordDesc: "Queste sono notifiche interne all'app",
                desktop: "Notifiche Desktop",
                desktopDesc: "Notifiche native del sistema (come quando ricevi un ping)",
                onlyWhenNotFocused: "Usa notifiche Desktop solo quando Discord non è in primo piano",
                always: {
                    desktop: "Usa sempre notifiche Desktop",
                    plexcord: "Usa sempre notifiche Plexcord"
                }
            },
            positions: {
                label: "Posizione Notifiche",
                right: {
                    bottom: "In basso a destra",
                    top: "In alto a destra",
                },
                left: {
                    bottom: "In basso a sinistra",
                    top: "In alto a sinistra",
                }
            },
            missed: {
                label: "Conteggio Notifiche Perse",
                description: "Al ritorno su Discord, apparirà una notifica con il numero di avvisi persi",
                whileYou: "Mentre eri assente",
                count: "{{count}} notifica/he ricevuta/e",
                s: "e"
            },
            timeout: {
                label: "Timeout Notifiche",
                description: "Il tempo (in secondi) per cui le notifiche rimangono sullo schermo prima di sparire"
            },
            logLimit: {
                label: "Limite Registro Notifiche",
                description: "Numero massimo di notifiche da conservare. Imposta su {{disable}} per disabilitare il registro e {{unlimited}} per non rimuoverle mai"
            },
            opacity: {
                label: "Opacità Notifiche",
                description: "L'opacità delle notifiche interne all'app"
            },
            maxNotifications: {
                label: "Max Notifiche",
                description: "Numero massimo di notifiche visualizzate contemporaneamente"
            },
            behavior: {
                label: "Comportamento Notifiche",
            },
            disableInStreamerMode: {
                label: "Disabilita in Modalità Streamer",
                description: "Disabilita le notifiche mentre la modalità streamer è attiva"
            },
            renderImages: {
                label: "Mostra Immagini",
                description: "Mostra le immagini nelle notifiche"
            },
            streamingTreatment: {
                label: "Trattamento in Streaming",
                description: "Come gestire le notifiche durante la condivisione dello schermo",
                normal: "Normale - Mostra la notifica normalmente",
                noContent: "Senza Contenuto - Nascondi il corpo della notifica",
                ignore: "Ignora - Non mostrare affatto la notifica"
            },
        },
        macVibrancy: {
            title: "Stile Vibrancy Finestra (Richiede Riavvio)",
            description: "Personalizza l'effetto vibrante della finestra su macOS. Controlla lo stile di sfocatura e trasparenza.",
            placeholder: "Stile vibrancy finestra",
            style: {
                no: "Nessuna",
                underPage: "Sotto la pagina",
                content: "Contenuto",
                window: "Finestra",
                selection: "Selezione",
                titlebar: "Barra del titolo",
                header: "Intestazione",
                sidebar: "Barra laterale",
                tooltip: "Suggerimento",
                menu: "Menu",
                popover: "Popover",
                fullscreenUI: "UI Schermo Intero",
                hud: "HUD (Più Trasparente)"
            }
        }
    },

    plugins: {
        title: "Plugin",
        new: "NUOVO",
        unknown: "Sconosciuto",
        noDescription: "Nessuna descrizione disponibile.",
        restart: {
            apply: "Riavvia per applicare le modifiche!",
            required: "Riavvio richiesto!",
            description: "Riavvia ora per applicare i nuovi plugin e le loro impostazioni",
            following: "I seguenti plugin richiedono un riavvio:",
            remainingCount: "e altri {{count}}",
            fully: "Alcuni plugin richiedono un riavvio per essere disabilitati completamente",
            would: "Vuoi riavviare ora?",
            resetDefault: "Ripristina impostazioni predefinite",
            failed: "Impossibile avviare le dipendenze:",
            button: {
                restart: "Riavvia",
                later: "Più tardi!",
                now: "Riavvia Ora",
                cancel: "Annulla",
                disableWarning: "Disabilita avviso per sempre",
                disableAll: "Disabilita Tutto",
                reset: "Ripristina",
                close: "Chiudi"
            }
        },
        contributor: {
            contributed: "ha contribuito",
            modal: {
                contributionsInfo: "{{userName}} ha {{continuedLink}} a {{contributionCount}} plugin.",
                noContributions: "{{userName}} non ha creato plugin. Probabilmente ha {{contributedLink}} in altri modi!"
            }
        },
        infoModal: {
            description: "Premi l'ingranaggio o l'icona info per maggiori dettagli su un plugin",
            settingsInfo: "I plugin con l'ingranaggio hanno impostazioni modificabili!",
            disableAll: "Disabilita Tutti i Plugin"
        },
        error: {
            invalidInput: "Input non valido",
            stopping: "Errore durante l'arresto del plugin {{plugin}}",
            starting: "Errore durante l'avvio del plugin {{plugin}}",
            startDependency: "Errore durante l'avvio delle dipendenze: {{failures}}",
            infoRender: "Errore durante il rendering del componente Info personalizzato"
        },
        placeholder: {
            number: "Inserisci un numero",
            select: "Seleziona un'opzione",
            text: "Inserisci un valore"
        },
        excluded: {
            desktop: "App Discord Desktop o Plextron",
            discordDesktop: "App Discord Desktop",
            plextron: "App Plextron",
            web: "App Plextron e versione Web di Discord",
            dev: "Versione sviluppatore di Plexcord"
        },
        search: {
            looking: "Stai cercando",
            onlyAvailable: "Disponibile solo su",
            noCriteria: "Nessun plugin corrisponde ai criteri di ricerca."
        },
        required: {
            title: "Plugin Richiesti",
            this: "Questo plugin è necessario per il funzionamento di Plexcord.",
            by: "Questo plugin è richiesto da:"
        },
        dangerModal: {
            title: "AZIONE PERICOLOSA",
            disablePlugins: "Disabilita Plugin",
            disableText: "Disabilita Tutto",
            irreversible: "QUESTA AZIONE È IRREVERSIBILE!",
            enableBack: "Sei assolutamente sicuro di voler procedere? Potrai riabilitarli in seguito.",
            undone: "Questa azione non può essere annullata. Sei sicuro?",
            resetDescription: "Stai per ripristinare tutte le impostazioni di {{pluginName}} ai valori predefiniti.",
            disable: "Stai per disabilitare {{enabledPlugins}} plugin!",
            confirmReset: "Conferma Ripristino",
            cancel: "Annulla",
            resetSettings: "Ripristina Impostazioni",
            resetText: "Ripristina"
        },
        filters: {
            label: "Filtri",
            placeholder: "Cerca un plugin...",
            option: {
                all: "Mostra Tutti",
                enabled: "Mostra Abilitati",
                disabled: "Mostra Disabilitati",
                new: "Mostra Nuovi",
                userplugins: "Mostra Plugin Utente",
                api: "Mostra Plugin API"
            }
        },
        pluginModal: {
            noSettings: "Non ci sono impostazioni per questo plugin.",
            authors: "Autori",
            settings: "Impostazioni",
            successfulReset: "Le impostazioni di {{plugin}} sono state ripristinate.",
            enabledStock: "Plugin Stock Abilitati",
            totalStock: "Plugin Stock Totali",
            enabledUser: "Plugin Utente Abilitati",
            totalUser: "Plugin Utente Totali",
            info: "Più info",
            source: "Codice sorgente"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API per aggiungere decorazioni alla lista membri",
                    messageAccessories: "API per aggiungere accessori ai messaggi",
                    messageDecorations: "API per aggiungere decorazioni ai messaggi",
                    chatInputButtons: "API per aggiungere pulsanti all'input della chat",
                    commands: "API richiesta per i comandi",
                    contextMenu: "API per gestire le voci dei menu contestuali.",
                    dynamicImageModal: "Permette di omettere larghezza o altezza nei modal delle immagini",
                    menuItemDemangler: "Gestisce il modulo Menu Item di Discord",
                    messageEvents: "API richiesta per gli eventi dei messaggi",
                    messagePopover: "API per aggiungere pulsanti ai popover dei messaggi",
                    messageUpdater: "API per aggiornare e renderizzare i messaggi",
                    nicknameIcons: "API per aggiungere icone ai nickname nei profili",
                    notices: "Corregge la chiusura automatica degli avvisi",
                    serverList: "API richiesta per i plugin che modificano la lista server",
                    userSettings: "Patch per UserSettings di Discord.",
                    audioPlayer: "API per riprodurre file audio interni o esterni.",
                    userArea: "API per aggiungere pulsanti al pannello utente."
                },
                chatButtons: {
                    context: {
                        buttons: "Pulsanti"
                    }
                }
            },
            badges: {
                description: "API per aggiungere badge agli utenti",
                contributor: {
                    plexcord: "Contributore Plexcord",
                    vencord: "Contributore Vencord",
                    userPlugin: "Contributore Plugin Utente"
                },
                context: {
                    title: "Opzioni Badge",
                    copy: {
                        name: "Copia Nome Badge",
                        link: "Copia Link Immagine Badge"
                    },
                    refetch: {
                        button: "Aggiorna Badge",
                        success: "Badge aggiornati con successo!"
                    }
                },
                modal: {
                    title: "Donatore Plexcord",
                    special: "Questo Badge è un ringraziamento speciale per i donatori di Plexcord",
                    description: "Per favore, considera di supportare Plexcord diventando un donatore. Significherebbe molto per noi!"
                }
            },
        },
        uiElements: {
            manage: "Gestisci Elementi UI",
            allows: "Ti permette di nascondere i pulsanti che non ti piacciono",
            section: {
                chatbar: {
                    title: "Pulsanti Barra Chat",
                    description: "Questi sono i pulsanti sul lato destro dell'input chat"
                },
                messagePopover: {
                    title: "Pulsanti Popover Messaggio",
                    description: "Pulsanti che appaiono passando sopra un messaggio"
                }
            },
            button: "I pulsanti dei plugin abilitati appariranno qui."
        }
    },

    patchHelper: {
        title: "Aiuto Patch",
        description: "Uno strumento per sviluppatori per creare patch per i plugin Plexcord.",
        fullPatch: {
            label: "Patch Completa",
            description: "Incolla qui la tua patch JSON completa"
        },
        find: "Trova",
        match: "Corrispondenza",
        replacement: "Sostituzione",
        preview: "Anteprima",
        generatedCode: "Codice Generato",
        group: "Gruppo",
        diff: "Differenza",
        module: "Modulo",
        compile: "Compila",
        compiled: "Compilazione Riuscita",
        copy: {
            clipboard: "Copia negli appunti",
            codeblock: "Copia come blocco di codice"
        },
        error: {
            noMatch: "Nessuna corrispondenza trovata. Modulo caricato in ritardo (lazy)?",
            multipleMatch: "Trovate più corrispondenze. Usa un pattern più specifico.",
            noFind: "Campo 'Trova' mancante.",
            noReplacement: "Campo 'Sostituzione' mancante.",
            invalidReplacement: "Sostituzione non valida",
            replacementMatch: "Campo 'replacement.match' mancante",
            replacementReplace: "Campo 'replacement.replace' mancante",
            replacementMustFunction: "La sostituzione deve essere una funzione"
        },
        cheatSheet: {
            title: "Promemoria",
            identifiers: "Sequenza regex per identificatori (nomi variabili, classi, ecc.)",
            dollar: "Inserisci un $",
            entireMatch: "Inserisci l'intera corrispondenza",
            beforeMatch: "Inserisci la sottostringa precedente",
            afterMatch: "Inserisci la sottostringa successiva",
            nthGroup: "Inserisci l'n-esimo gruppo ($1, $2...)",
            pluginInstance: "Inserisci l'istanza del plugin"
        },
        replacementEval: {
            label: "Tratta sostituzione come funzione",
            description: "La sostituzione verrà valutata come funzione se abilitato"
        }
    },

    sync: {
        title: "Backup e Ripristino",
        warning: "Attenzione",
        warningText: "L'importazione sovrascriverà le tue impostazioni attuali. Fai un backup prima se vuoi conservarle.",
        description: "Puoi importare ed esportare le tue impostazioni come file JSON per trasferirle su altri dispositivi.",
        successful: "Impostazioni importate. Riavvia per applicare!",
        error: {
            failure: "Importazione fallita: {{error}}",
            failedExport: "Esportazione fallita, controlla la console",
            invalid: "Impostazioni non valide. È un file Plexcord?",
            tooLarge: "DataStore troppo grande - escluso dal backup.",
            clearSomeDate: "Dati troppo grandi. Cancella alcuni dati plugin e riprova."
        },
        settings: {
            text: "Cosa include il backup?",
            quickcss: "QuickCSS personalizzato",
            theme: "Link dei Temi",
            plugins: "Impostazioni Plugin",
            datastores: "DataStore dei Plugin"
        },
        import: {
            title: "Importa Impostazioni",
            description: "Seleziona un file esportato in precedenza.",
            all: "Importa Tutto",
            plugins: "Importa Plugin",
            css: "Importa QuickCSS",
            datastore: "Importa DataStore"
        },
        export: {
            title: "Esporta Impostazioni",
            description: "Esporta le impostazioni attuali su un file.",
            all: "Esporta Tutto",
            plugins: "Esporta Plugin",
            css: "Esporta QuickCSS",
            datastore: "Esporta DataStore"
        }
    },

    cloud: {
        text: "Cloud",
        title: "Sincronizzazione Impostazioni",
        override: "Sincronizzazione Cloud",
        description: "Sincronizza le tue impostazioni sul cloud per averle su tutti i dispositivi.",
        switchDescription: "Quando abilitato, le impostazioni verranno sincronizzate automaticamente.",
        settings: "Impostazioni Cloud",
        successful: "Sincronizzato con il cloud!",
        updated: "Impostazioni aggiornate! Clicca qui per riavviare.",
        deleted: "Impostazioni eliminate dal cloud!",
        integration: {
            title: "Integrazione Cloud",
            description: "L'integrazione cloud ti permette di mantenere la configurazione tra diverse installazioni di Discord.",
        },
        reauth: "Hai integrazioni cloud attive su un altro client! Devi riautorizzare per continuare.",
        error: {
            setup: "Configurazione fallita (impossibile recuperare OAuth).",
            secret: "Configurazione fallita (nessun segreto ricevuto).",
            string: "Configurazione fallita ({{error}}).",
            connect: "Sincronizzazione disabilitata: account non connesso all'app Plexcord Cloud.",
            noSettings: "Nessuna impostazione presente nel cloud.",
            uptodate: "Le tue impostazioni sono già aggiornate.",
            localNewer: "Le tue impostazioni locali sono più recenti di quelle nel cloud.",
            delete: "Impossibile eliminare ({{error}}).",
            api: {
                returned: {
                    delete: "Errore API eliminazione ({{status}}).",
                    to: "Errore API sincronizzazione al cloud ({{status}}).",
                    from: "Errore API sincronizzazione dal cloud ({{status}}).",
                    manifest: "Impossibile recuperare il manifest per l'eliminazione (l'API ha restituito {{status}})."
                }
            },
            synchronize: {
                to: "Errore sincronizzazione al cloud ({{error}}).",
                from: "Errore sincronizzazione dal cloud ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Abilita l'integrazione cloud qui sopra per usare queste funzioni."
        },
        danger: {
            title: "Zona Pericolosa",
            description: "Elimina permanentemente tutti i tuoi dati dal cloud. Questa azione è irreversibile.",
            delete: {
                account: {
                    title: "Elimina Account Cloud",
                    description: "Sei sicuro di voler eliminare l'account cloud e tutti i dati associati?",
                    confirm: "Elimina Account",
                    cancel: "Annulla"
                }
            }
        },
        notification: {
            title: "Integrazione Cloud",
            enabled: "Integrazione Cloud Abilitata",
            host: "{{host}} aggiunto alla whitelist. Riavvia l'app.",
            erase: {
                successful: "Dati cloud cancellati con successo",
                failed: "Cancellazione fallita (API {{status}})."
            }
        },
        button: {
            to: "Sincronizza verso il Cloud",
            from: "Sincronizza dal Cloud",
            fromDescription: "Questo sovrascriverà le impostazioni locali. Usa con cautela!",
            delete: "Elimina Dati Cloud",
            enable: "Abilita Integrazioni Cloud",
            reauthorize: "Riautorizza",
            confirm: "Riavvia ora",
            later: "Più tardi!"
        },
        privacy: "rispetta la tua privacy",
        source: "codice sorgente",
        overview: "Plexcord include un'integrazione cloud. {{privacy}}, e il {{source}} è licenziato AGPL 3.0, così puoi ospitarlo tu stesso.",
        authorization: "Connettiti al backend cloud. Richiederà l'autorizzazione se non l'hai ancora configurato.",
        backend: {
            title: "Backend Cloud",
            description: "Scegli come memorizzare i dati. Di default usa Plexcord Cloud, ma puoi usarne uno tuo.",
            invalid: "URL non valido"
        },
        sync: {
            title: "Regole di Sincronizzazione",
            description: "Controlla come si muovono i dati tra questo dispositivo e il cloud.",
            direction: {
                both: "Bidirezionale (i cambiamenti vanno in entrambe le direzioni)",
                push: "Questo dispositivo è la fonte (solo caricamento)",
                pull: "Il cloud è la fonte (solo scaricamento)",
                manual: "Non sincronizzare automaticamente (solo manuale)"
            }
        }
    },

    changelog: {
        text: "Registro modifiche",
        title: "Registro modifiche",
        description: "Qui trovi le ultime modifiche e gli aggiornamenti di Plexcord.",
        by: "da",
        check: "Controllo repository",
        uptodate: "aggiornato",
        update: "Aggiorna",
        noMessage: "Nessun messaggio",
        unknown: "Sconosciuto",
        updatedPlugins: "Plugin Aggiornati",
        newSettings: "Nuove Impostazioni",
        newSettingTooltip: "Nuova impostazione in {{plugin}}",
        loading: "Caricamento...",
        repoUptodate: "Repository aggiornato",
        fetch: "Recupera dal Repository",
        clear: "Cancella Tutti i Registri",
        internet: "Verifica la connessione internet e riprova.",
        recent: "Modifiche Recenti",
        codeChanges: "Modifiche Codice: {{count}} nuovi commit",
        updateLogs: "Registri Aggiornamento ({{count}})",
        noCommit: "Nessun nuovo commit disponibile.",
        previous: "Sessioni precedenti con cronologia commit e modifiche plugin.",
        modal: {
            description: "Visualizza le modifiche più recenti recuperandole direttamente dal repository.",
            repository: "Repository",
            failed: "Recupero fallito - controlla la console",
            current: "Attuale:",
            hide: "Nascondi log",
            show: "Mostra log",
            fetch: {
                title: "Recupera Modifiche",
                description: "Confronta la tua versione con l'ultima disponibile.",
                newCommit: "Nuovi commit e aggiornamenti plugin dall'ultima versione.",
                confirm: "Recupera",
            }
        },
        commit: {
            available: "commit disponibili",
            no: "Nessun nuovo commit",
            new: "nuovi plugin",
            updated: "plugin aggiornati",
            settings: "nuove impostazioni"
        },
        toast: {
            already: "Già aggiornato al repository",
            found: "Trovati {{count}} nuovi commit",
            local: "Il repository è aggiornato con la tua copia locale",
            failed: "Impossibile recuperare dal repository :(",
            cleared: "Tutti i registri cancellati",
            logCleared: "Registro cancellato",
            yourLatest: "Commit registrati dall'ultimo aggiornamento"
        },
        alert: {
            clear: {
                title: "Cancella Tutti i Registri",
                body: "Sei sicuro di voler cancellare tutti i registri? L'azione è irreversibile.",
                confirm: "Cancella Tutto",
                confirmColor: "danger",
                cancel: "Annulla"
            },
            log: {
                title: "Cancella Registro",
                body: "Sei sicuro di voler cancellare questo registro?",
                confirm: "Cancella Log",
                confirmColor: "danger",
                cancel: "Annulla"
            }
        },
        newPlugins: "{{count}} Nuovi Plugin",
        following: "I seguenti plugin sono stati aggiunti di recente:",
        more: "+ altri {{count}} plugin"
    },

    csp: {
        restart: "È richiesto un riavvio per applicare questa modifica",
        blocked: {
            resources: "Risorse Bloccate",
            disallowed: "Alcune immagini, stili o font sono stati bloccati perché provenienti da domini non consentiti.",
            recommended: "Si consiglia di spostarli su GitHub o Imgur. Ma puoi consentire i domini se ti fidi.",
            afterAllow: "Dopo aver consentito un dominio, chiudi e riavvia completamente {{platform}}.",
            allow: "Consenti",
            url: "URL Bloccati"
        },
        imgur: {
            direct: "I link Imgur dovrebbero essere link diretti nella forma {{etc}}",
            copy: "Per un link diretto, tasto destro sull'immagine e seleziona 'Copia indirizzo immagine'."
        },
        wants: {
            caller: "{{callerName}} vuole consentire connessioni a {{domain}}",
            detail: "A meno che tu non ti fidi ciecamente di {{domain}}, dovresti annullare!",
            restart: "Dovrai riavviare completamente {{appName}}.",
            type: {
                images: "Immagini",
                styles: "CSS e Temi",
                fonts: "Font"
            },
            content: "Saranno permessi i seguenti contenuti da {{domain}}:",
            understand: "Mi fido di {{domain}} e capisco i rischi.",
            button: {
                cancel: "Annulla",
                allow: "Consenti"
            },
            title: "Permessi Host"
        }
    },

    themes: {
        title: "Temi",
        management: "Gestione Temi",
        description: "Personalizza l'aspetto di Discord con i temi. Aggiungi file .css locali o caricali via URL.",
        local: "Temi Locali",
        new: "NUOVO",
        pinned: "Fissati",
        stylus: "estensione Stylus",
        bd: "Temi BetterDiscord",
        github: "GitHub",
        download: "Cerchi temi? Guarda su {{bd}} o {{github}}.",
        add: "Aggiungi",
        reset: "Ripristina impostazioni",
        notCSS: "Non è un file CSS. Usa il link raw!",
        okay: "Okay!",
        checking: "Controllo...",
        valid: "Valido!",
        upload: "Carica Tema",
        openFolder: "Apri Cartella Temi",
        loadMissing: "Carica Temi Mancanti",
        editQuickCSS: "Modifica QuickCSS",
        editClient: "Modifica ClientTheme",
        website: "Apri Sito Web",
        discord: "Server Discord",
        downloadTheme: "Scarica",
        refresh: "Aggiorna",
        delete: "Elimina",
        unknown: {
            title: "Sconosciuto",
            author: "Autore Sconosciuto",
            theme: "Un Tema Discord"
        },
        required: "I seguenti plugin sono richiesti ma non abilitati: ",
        homepage: "Homepage",
        support: "Supporto",
        online: {
            title: "Temi Online",
            description: "Carica temi da URL. Si aggiornano automaticamente alla fonte.",
            enable: "Abilita Temi Online",
            enableDescription: "Attiva il caricamento dei temi online."
        },
        quickActions: {
            title: "Azioni Rapide",
            description: "Scorciatoie per gestire i tuoi temi."
        },
        error: {
            userscript: "I temi non sono supportati su Userscript!",
            stylus: "Puoi installarli con {{stylus}}!",
            expired: "Link non valido o scaduto",
            text: "Errore:"
        },
        copy: {
            url: "Copia URL",
            copied: "URL Tema copiato!",
            settings: "Copia impostazioni tema",
            copiedSettings: "Impostazioni tema copiate negli appunti."
        },
        paste: {
            settings: "Incolla impostazioni tema",
            empty: "Gli appunti sono vuoti.",
            invalid: "Dati non validi negli appunti.",
            pasted: "Impostazioni tema incollate."
        },
        settings: {
            for: "Impostazioni per {{themeName}}",
        },
        installed: {
            title: "Temi Installati",
            description: "Gestisci i tuoi temi qui.",
            count: "{{count}} temi installati ({{localCount}} locali, {{onlineCount}} online) · {{enabledCount}} abilitati",
            search: "Cerca un tema...",
            loading: "Caricamento temi...",
            none: "Nessun tema installato.",
            noCriteria: "Nessun tema corrisponde alla ricerca."
        },
        filter: {
            all: "Mostra Tutti",
            online: "Temi Online",
            local: "Temi Locali",
            enabled: "Abilitati",
            disabled: "Disabilitati"
        },
        notification: {
            refresh: {
                title: "Tema Aggiornato",
                error: "Aggiornamento tema fallito"
            },
            failed: {
                download: "Download tema fallito"
            }
        }
    },

    updater: {
        title: "Aggiornatore",
        settings: "Impostazioni Aggiornatore",
        updates: "Aggiornamenti",
        updated: "è stato aggiornato!",
        restart: "Clicca qui per riavviare",
        repaired: "Plexcord è stato riparato!",
        ok: "OK",
        preferences: {
            title: "Preferenze Aggiornamento",
            description: "Scegli come Plexcord deve aggiornarsi.",
        },
        github: {
            local: "La tua copia locale ha commit più recenti del repository remoto."
        },
        error: {
            check: "Controllo aggiornamenti fallito.",
            occurred: "Errore sconosciuto",
            retrieve: "Recupero fallito",
            title: "Oops!",
            tryAgain: "Riprova o controlla la console.",
            command: "Comando {{path}} non trovato.",
            code: "Codice {{code}}.",
            running: "Errore durante {{cmd}}: {{error}}",
            failed: "Fallito. Prova a reinstallare con l'installer!"
        },
        available: "C'è 1 aggiornamento",
        updateAvailable: "Aggiornamento Plexcord disponibile!",
        click: "Clicca qui per vederlo",
        available_plural: "Ci sono {{count}} aggiornamenti",
        current: "Aggiornato!",
        successful: {
            title: "Aggiornamento Riuscito!",
            body: "Riavviare ora per applicare?",
            button: {
                confirm: "Riavvia",
                cancel: "Non ora!",
                update: "Aggiorna Ora",
                check: "Controlla Aggiornamenti"
            },
            noFound: "Nessun aggiornamento trovato"
        },
        automatically: {
            label: "Aggiorna automaticamente",
            description: "Aggiorna senza chiedere conferma"
        },
        notify: {
            label: "Notifica al completamento",
            description: "Mostra una notifica dopo l'aggiornamento automatico"
        },
        repo: "Repo",
        repoDescription: "Repository GitHub sorgente per gli aggiornamenti.",
        loading: "Caricamento...",
    },

    components: {
        error: {
            title: "Oh no!",
            render: "Errore nel rendering di questo componente."
        },
        componentFailed: {
            message: "Impossibile caricare questa pagina. Un aggiornamento potrebbe risolvere il problema. Vuoi aggiornare e riavviare ora?"
        },
        quickCSS: {
            title: "Editor QuickCSS Aperto",
            message: "L'editor QuickCSS è ancora aperto in background.",
            detail: "Vuoi chiudere comunque Discord? L'editor verrà chiuso.",
            cancel: "Annulla",
            close: "Chiudi comunque"
        }
    },

    commands: {
        error: {
            execute: "Errore durante l'esecuzione del comando '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Chiudi Notifica",
        noYet: "Nessuna notifica",
        settings: "Impostazioni Notifiche",
        log: {
            title: "Registro Notifiche",
            clear: "Cancella Registro Notifiche",
            sure: "Sei sicuro?",
            permamently: "Rimuoverà permanentemente {{count}} notifiche.",
            button: {
                confirm: "Fallo!",
                cancel: "Lascia stare"
            }
        }
    },

    memberlist: {
        error: {
            render: "Rendering Decoratore Lista Membri fallito per {{key}}"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Rendering Accessorio Messaggio fallito per {{key}}"
            }
        },
        decoration: {
            error: {
                render: "Rendering Decorazione Messaggio fallito per {{key}}"
            }
        }
    },

    utils: {
        toast: {
            copied: "Copiato negli appunti!"
        }
    },

    common: {
        unit: {
            year: "anno",
            years: "anni",
            month: "mese",
            months: "mesi",
            week: "settimana",
            weeks: "settimane",
            day: "giorno",
            days: "giorni",
            hour: "ora",
            hours: "ore",
            minute: "minuto",
            minutes: "minuti",
            second: "secondo",
            seconds: "secondi",
            ago: "fa",
            s: "i"
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Disabilita il tracciamento di Discord (analytics/'science'), le metriche e l'invio di report sui crash a Sentry",
            option: {
                disableAnalytics: {
                    label: "Disabilita Analytics",
                    description: "Disabilita il tracciamento di Discord (analytics/'science'), le metriche e l'invio di report sui crash a Sentry"
                }
            }
        },
        settings: {
            name: "Settings",
            description: "Aggiunge l'interfaccia delle impostazioni e le informazioni di debug",
            option: {
                language: {
                    label: "Lingua",
                    description: "Seleziona la tua lingua preferita per Plexcord."
                },
                settingsLocation: {
                    label: "Posizione Impostazioni",
                    description: "Determina dove verrà posizionata la sezione delle impostazioni di Plexcord."
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "Ci aiuta a fornirti supporto",
            commands: {
                description: {
                    debug: "Invia informazioni di debug di Plexcord",
                    plugins: "Invia la lista dei plugin di Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "Aspetta un attimo!",
                    body: "Stai usando una versione obsoleta di Plexcord! È molto probabile che il tuo problema sia già stato risolto.",
                    footer: "Per favore, aggiorna prima di chiedere supporto!",
                    button: {
                        cancel: "Visualizza Aggiornamenti",
                        confirm: "Aggiorna e Riavvia Ora",
                        secondaryConfirm: "So cosa sto facendo / Non posso aggiornare"
                    }
                },
                updater: {
                    title: "Aspetta un attimo!",
                    body: "Stai usando una versione di Plexcord aggiornata esternamente, per la quale non forniamo supporto!",
                    footer: "Per favore, passa a una {{officially}}, oppure contatta il manutentore del pacchetto per ricevere supporto.",
                    officially: "versione di Plexcord supportata ufficialmente",
                    button: {
                        cancel: "Annulla",
                        confirm: "Vai alla Pagina di Download",
                        now: "Aggiorna Ora"
                    },
                    toast: {
                        success: "Successo! Riavvio in corso...",
                        already: "Già aggiornato!",
                        failed: "Aggiornamento fallito :("
                    }
                },
                custom: {
                    title: "Aspetta un attimo!",
                    header: "Stai usando una build personalizzata di Plexcord, per la quale non forniamo supporto!",
                    body: "Forniamo supporto solo per le {{officialBuild}}. Ti preghiamo di {{switch}} o di risolvere il problema da solo.",
                    footer: "Se ignori questa regola, ti verrà vietato di ricevere supporto.",
                    official: "build ufficiali",
                    switch: "passare a una build ufficiale",
                    button: {
                        confirm: "Ho capito",
                        secondaryConfirm: "Non mostrare più"
                    }
                }
            },
            button: {
                debug: "Esegui /plexcord-debug",
                plugins: "Esegui /plexcord-plugins",
                snippet: "Esegui Snippet"
            },
            toast: {
                success: "Successo!",
                failed: "Impossibile eseguire lo snippet :(",
                failedOpenInvite: "Impossibile aprire l'invito, controlla la console :(",
                upload: "Lista plugin caricata con successo!",
                failedUpload: "Caricamento del file lista plugin fallito. Riprova.",
                unableGenerate: "Impossibile generare la lista dei plugin."
            },
            dm: {
                warning: "Per favore, non inviare messaggi privati agli sviluppatori dei plugin di Plexcord per chiedere supporto!{{br}}Puoi invece unirti al server di {{support}} e usare il canale di supporto Plexcord: {{channel}}"
            },
            alert: {
                title: "Avviso: Numero Elevato di Plugin",
                paragraph1: "Hai più di 100 plugin abilitati.",
                paragraph2: "A causa dell'elevata quantità di plugin, potresti non ricevere supporto.",
                paragraph3: "Il tuo problema è probabilmente causato da un conflitto tra plugin.",
                paragraph4: "Considera di disabilitare alcuni plugin per risolvere il problema.",
                paragraph5: "La tua lista di plugin verrà inviata come file di testo.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Fai clic con il tasto destro sul pannello del tuo account in basso a sinistra per visualizzare il tuo profilo nel server corrente",
            option: {
                prioritizeServerProfile: {
                    label: "Priorità Profilo Server",
                    description: "Dai priorità al profilo del server quando fai clic con il tasto sinistro sul pannello del tuo account"
                }
            },
            context: {
                account: "Visualizza Profilo Account",
                server: "Visualizza Profilo Server",
                prioritize: "Dai Priorità al Profilo Server"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Rende l'interruttore del popout di soppressione del rumore uno switch tra 'Nessuno' e 'Krisp' invece di 'Krisp' e 'Standard'"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Anima qualsiasi cosa possa essere animata",
            option: {
                icons: {
                    label: "Icone",
                    description: "Anima sempre le icone dei server, gli avatar, le decorazioni e altro"
                },
                statusEmojis: {
                    label: "Emoji di Stato",
                    description: "Anima sempre le emoji degli stati"
                },
                serverBanners: {
                    label: "Banner del Server",
                    description: "Anima sempre i banner dei server"
                },
                nameplates: {
                    label: "Targhette (Nameplates)",
                    description: "Anima sempre le targhette dei nomi"
                },
                roleGradients: {
                    label: "Gradienti Ruoli",
                    description: "Anima sempre i gradienti dei ruoli"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Espande sempre i popout dei profili nella finestra modale completa"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Espande sempre la lista dei ruoli nei popout dei profili",
            option: {
                hideArrow: {
                    label: "Nascondi Freccia",
                    description: "Nasconde la freccia di espansione"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Riproduce il suono 'Animalese' di Animal Crossing per ogni messaggio inviato (parlano un sacco!)",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume del suono Animalese"
                },
                speed: {
                    label: "Velocità",
                    description: "Velocità del suono Animalese"
                },
                pitch: {
                    label: "Tonalità (Pitch)",
                    description: "Moltiplicatore della tonalità"
                },
                messageLengthLimit: {
                    label: "Limite Lunghezza Messaggio",
                    description: "Lunghezza massima del messaggio da elaborare"
                },
                processOwnMessages: {
                    label: "Elabora i Propri Messaggi",
                    description: "Abilita per riprodurre il suono anche per i tuoi messaggi"
                },
                soundQuality: {
                    label: "Qualità Audio",
                    description: "Qualità del suono da utilizzare",
                    high: "Alta",
                    med: "Media",
                    low: "Bassa",
                    lowest: "Minima"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Rimuove i fastidiosi popout di dominio non attendibile e file sospetto",
            option: {
                domain: {
                    label: "Dominio",
                    description: "Rimuove il popout di dominio non attendibile quando si aprono i link"
                },
                file: {
                    label: "File",
                    description: "Rimuove il popout 'Download potenzialmente pericoloso' quando si aprono i link"
                },
                noDeleteSafety: {
                    label: "Nessuna Sicurezza Eliminazione",
                    description: "Rimuove l'obbligo di inserire il nome del server quando lo si elimina"
                },
                confirmModal: {
                    label: "Finestra di Conferma",
                    description: "Mostra una finestra di conferma 'Sei sicuro di voler eliminare?'"
                }
            },
            alert: {
                title: "Eliminare il server?",
                body: "È un'azione permanente, se non fosse ovvio.",
                confirm: "Elimina",
                cancel: "Annulla"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Rende anonimi i nomi dei file caricati",
            option: {
                anonymiseByDefault: {
                    label: "Anonimizza per impostazione predefinita",
                    description: "Rende anonimi i nomi dei file di default. Puoi disabilitarlo nel popout di caricamento se necessario."
                },
                spoilerMessages: {
                    label: "Messaggi Spoiler",
                    description: "Anonimizza i nomi dei file contrassegnati come spoiler."
                },
                method: {
                    label: "Metodo",
                    description: "Metodo di anonimizzazione",
                    random: "Caratteri Casuali",
                    consistent: "Coerente",
                    timestamp: "Timestamp"
                },
                randomisedLength: {
                    label: "Lunghezza Casuale",
                    description: "Lunghezza dei caratteri casuali"
                },
                consistent: {
                    label: "Coerente",
                    description: "Segreto di anonimizzazione coerente"
                }
            },
            using: {
                anonymous: "Uso del nome file anonimo",
                spoiler: "Uso del nome file normale"
            },
            spoiler: {
                description: "Attiva/disattiva lo spoiler per i tuoi file",
                toggle: "Attiva/disattiva spoiler (predefinito: ON)",
                enabled: "Spoiler abilitato!",
                disabled: "Spoiler disabilitato!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Rich Presence di Discord per il tuo Apple Music!",
            about: "Per le stringhe di formato attività personalizzabili, puoi usare diverse stringhe speciali! {{name}} viene sostituito con il nome del brano; {{artist}} con il nome degli artisti; e {{album}} con il nome dell'album.",
            button: {
                listen: "Ascolta su Apple Music",
                songLink: "Visualizza su SongLink"
            },
            option: {
                activityType: {
                    label: "Tipo di Attività",
                    description: "Quale tipo di attività mostrare",
                    listening: "In ascolto",
                    playing: "In gioco"
                },
                statusDisplayType: {
                    label: "Tipo di Visualizzazione Stato",
                    description: "Mostra il brano / artista nella lista membri",
                    off: "Non mostrare (mostra messaggio generico)",
                    artist: "Mostra nome artista",
                    track: "Mostra nome brano"
                },
                refreshInterval: {
                    label: "Intervallo di Aggiornamento",
                    description: "L'intervallo tra gli aggiornamenti dell'attività (secondi)"
                },
                enableTimestamps: {
                    label: "Abilita Timestamp",
                    description: "Indica se abilitare o meno i timestamp"
                },
                enableButtons: {
                    label: "Abilita Pulsanti",
                    description: "Indica se abilitare o meno i pulsanti"
                },
                nameString: {
                    label: "Stringa Nome",
                    description: "Stringa di formato per il nome dell'attività"
                },
                detailsString: {
                    label: "Stringa Dettagli",
                    description: "Stringa di formato per i dettagli dell'attività"
                },
                stateString: {
                    label: "Stringa Stato",
                    description: "Stringa di formato per lo stato dell'attività"
                },
                largeImageType: {
                    label: "Tipo Immagine Grande",
                    description: "Tipo di immagine grande per gli asset dell'attività",
                    album: "Copertina album",
                    artist: "Immagine artista",
                    disabled: "Disabilitato"
                },
                largeTextString: {
                    label: "Stringa Testo Grande",
                    description: "Stringa di formato per il testo dell'immagine grande"
                },
                smallImageType: {
                    label: "Tipo Immagine Piccola",
                    description: "Tipo di immagine piccola per gli asset dell'attività",
                    album: "Logo Apple Music",
                    artist: "Immagine artista",
                    disabled: "Disabilitato"
                },
                smallTextString: {
                    label: "Stringa Testo Piccolo",
                    description: "Stringa di formato per il testo dell'immagine piccola"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Plugin client per arRPC per abilitare l'RPC su Discord Web (sperimentale)",
            use: {
                title: "Come usare arRPC",
                enable: "{{link}} per avviare il server, quindi abilita il plugin.",
                link: "Segui le istruzioni nella repo GitHub"
            },
            toast: {
                connected: "Connesso ad arRPC",
                failed: "Connessione ad arRPC fallita. È in esecuzione?",
                retry: "Riprova"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Con @someone puoi menzionare qualcuno a caso"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Aggiorna automaticamente il tuo stato online (online, assente, non disturbare) quando avvii un gioco",
            option: {
                statusToSet: {
                    label: "Stato da Impostare",
                    description: "Lo stato da impostare all'avvio di un gioco",
                    online: "Online",
                    dnd: "Non Disturbare",
                    idle: "Assente",
                    invisible: "Invisibile"
                },
                excludeInvisible: {
                    label: "Escludi se Invisibile",
                    description: "Impedisce il cambio automatico di stato se il tuo stato attuale è 'Invisibile'"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Comprime automaticamente (ZIP) cartelle e tipi di file specificati prima di caricarli su Discord",
            option: {
                extensions: {
                    label: "Estensioni",
                    description: "Lista di estensioni separate da virgola da comprimere (es: .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Visualizza i banner nella lista membri",
            option: {
                animate: {
                    label: "Anima",
                    description: "Anima il banner"
                },
                preferNameplate: {
                    label: "Preferisci Targhetta",
                    description: "Preferisci la targhetta rispetto al banner"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Mostra le icone delle attività nella lista membri e permette di visualizzarle tutte",
            option: {
                memberList: {
                    label: "Lista Membri",
                    description: "Mostra icone attività nella lista membri"
                },
                iconSize: {
                    label: "Dimensione Icona",
                    description: "Dimensione delle icone delle attività"
                },
                specialFirst: {
                    label: "Attività Speciali per Prime",
                    description: "Mostra prima le attività speciali (attualmente Spotify e Twitch)"
                },
                renderGifs: {
                    label: "Renderizza GIF",
                    description: "Permette il rendering delle GIF"
                },
                removeGameActivityStatus: {
                    label: "Rimuovi Stato 'Attività di Gioco'",
                    description: "Rimuove l'icona e lo stato dell'attività di gioco"
                },
                userPopout: {
                    label: "Popout Utente",
                    description: "Mostra tutte le attività nel popout del profilo o nella barra laterale"
                },
                hideTooltip: {
                    label: "Nascondi Suggerimento (Tooltip)",
                    description: "Nasconde le attività in vari punti"
                },
                allActivitiesStyle: {
                    label: "Stile Tutte le Attività",
                    description: "Stile per visualizzare tutte le attività",
                    list: "Lista",
                    carousel: "Carosello",
                    left: "Sinistra",
                    right: "Destra"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Aggiunge un visualizzatore spettrografico e oscilloscopico ai player degli allegati audio",
            option: {
                oscilloscope: {
                    label: "Oscilloscopio",
                    description: "Abilita il visualizzatore oscilloscopico"
                },
                spectrograph: {
                    label: "Spettrografo",
                    description: "Abilita il visualizzatore spettrografico"
                },
                oscilloscopeSolidColor: {
                    label: "Colore Solido Oscilloscopio",
                    description: "Usa un colore solido invece di un gradiente"
                },
                oscilloscopeColor: {
                    label: "Colore Oscilloscopio",
                    description: "Colore dell'oscilloscopio quando è attivo il colore solido"
                },
                spectrographSolidColor: {
                    label: "Colore Solido Spettrografo",
                    description: "Usa un colore solido invece di un gradiente"
                },
                spectrographColor: {
                    label: "Colore Spettrografo",
                    description: "Colore dello spettrografo quando è attivo il colore solido"
                },
                forceMoveBelow: {
                    label: "Forza Spostamento in Basso",
                    description: "Forza il visualizzatore a trovarsi sotto i controlli audio"
                }
            },
            toast: {
                invalidColorFormat: "Formato colore non valido per {{settingKey}}, assicurati che sia 'R, G, B' o '#RRGGBB'"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Crea motivazioni personalizzate per il ban e/o mostra un campo di testo predefinito invece delle opzioni standard.",
            option: {
                reasons: {
                    label: "Motivazioni",
                    description: "Le tue motivazioni personalizzate"
                },
                isTextInputDefault: {
                    label: "Input di Testo come Predefinito",
                    description: "Mostra un campo di testo invece di un menu a tendina (equivale a cliccare 'Altro')"
                }
            },
            title: "Motivazioni",
            placeholder: "Motivo",
            add: "Aggiungi un altro motivo"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Permette di cercare nella lista degli utenti bloccati e rende i nomi selezionabili nelle impostazioni.",
            placeholder: "Cerca utenti..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Migliora il sistema dei comandi con diverse ottimizzazioni.",
            option: {
                autoFillArguments: {
                    label: "Autocompletamento Argomenti",
                    description: "Compila automaticamente il comando con tutti gli argomenti, non solo quelli obbligatori"
                },
                allowNewlinesInCommands: {
                    label: "Consenti Nuove Linee nei Comandi",
                    description: "Consente l'uso di nuove linee nei comandi (CTRL + Shift + Invio)"
                }
            },
            command: {
                refresh: {
                    description: "Aggiorna i comandi applicazione di Discord localmente",
                    user: "utente specifico da aggiornare",
                    refreshing: "Aggiornamento comandi in corso...",
                    refreshed: "Comandi aggiornati con successo!",
                    failed: "Aggiornamento comandi fallito. Controlla la console."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Mostra le cartelle dei server in una barra laterale dedicata e aggiunge vari miglioramenti",
            option: {
                sidebar: {
                    label: "Barra Laterale",
                    description: "Visualizza i server della cartella in una barra laterale dedicata"
                },
                sidebarAnim: {
                    label: "Animazione Barra Laterale",
                    description: "Anima l'apertura della barra laterale della cartella"
                },
                closeAllFolders: {
                    label: "Chiudi Tutte le Cartelle",
                    description: "Chiude tutte le cartelle quando selezioni un server che non fa parte di una cartella"
                },
                closeAllHomeButton: {
                    label: "Pulsante Home Chiude Tutto",
                    description: "Chiude tutte le cartelle quando clicchi sul pulsante Home"
                },
                closeOthers: {
                    label: "Chiudi Altre",
                    description: "Chiude le altre cartelle quando ne apri una"
                },
                closeServerFolder: {
                    label: "Chiudi Cartella Server",
                    description: "Chiude la cartella quando selezioni un server al suo interno"
                },
                forceOpen: {
                    label: "Forza Apertura",
                    description: "Forza l'apertura della cartella quando passi a un server che ne fa parte"
                },
                keepIcons: {
                    label: "Mantieni Icone",
                    description: "Continua a mostrare le icone dei server nella barra principale quando sono aperti nella barra BetterFolders"
                },
                showFolderIcon: {
                    label: "Mostra Icona Cartella",
                    description: "Mostra l'icona della cartella sopra i server nella barra BetterFolders",
                    never: "Mai",
                    always: "Sempre",
                    moreThanOne: "Quando è espansa più di una cartella"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Cambia il testo alternativo delle GIF da un semplice 'GIF' ai tag della GIF o al nome del file"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Fa in modo che il selettore di GIF apra la categoria dei preferiti per impostazione predefinita",
            option: {
                keepOpen: {
                    label: "Mantieni Aperto",
                    description: "Mantiene aperto il selettore di GIF dopo averne selezionata una"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Visualizza la data di scadenza degli inviti, il profilo di chi ha invitato e l'anteprima dei server prima di entrare cliccando sul nome",
            render: {
                tip: "Questo invito scadrà tra {{time}}",
                header: "{{name}} ti ha invitato su {{server}}",
                never: "non scade mai"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Nasconde le note o disabilita il correttore ortografico (Configura nelle impostazioni!!)",
            option: {
                hide: {
                    label: "Nascondi note",
                    description: "Nasconde il riquadro delle note nei popout utente"
                },
                noSpellCheck: {
                    label: "No Correttore Ortografico",
                    description: "Disabilita il controllo ortografico nelle note"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "La quantità di '+' prima di :emoji: indica il messaggio a cui aggiungerla"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Aggiunge opzioni per copiare il colore del ruolo, modificare il ruolo o visualizzare l'icona del ruolo cliccando con il tasto destro nel profilo utente",
            option: {
                roleIconFileFormat: {
                    label: "Formato File Icona Ruolo",
                    description: "Formato file da usare per visualizzare l'icona del ruolo"
                }
            },
            context: {
                copyColor: "Copia Colore Ruolo",
                editRole: "Modifica Ruolo",
                viewIcon: "Visualizza Icona Ruolo"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Copia il colore del ruolo cliccando sul RoleDot (impostazione accessibilità). Consente anche di usare sia il RoleDot che i nomi colorati simultaneamente.",
            option: {
                bothStyles: {
                    label: "Entrambi gli Stili",
                    description: "Mostra sia il pallino del ruolo che i nomi colorati"
                },
                copyRoleColorInProfilePopout: {
                    label: "Copia Colore Ruolo nel Popout",
                    description: "Consente il clic sul pallino del ruolo nel popout del profilo per copiare il colore"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Migliora il menu delle sessioni (dispositivi). Permette di vedere timestamp esatti, dare nomi personalizzati alle sessioni e ricevere notifiche per le nuove sessioni.",
            new: "NUOVO",
            newSessions: "Nuove Sessioni:",
            rename: "Rinomina",
            newDevice: "Nuovo Nome Dispositivo",
            resetName: "Ripristina Nome",
            save: "Salva",
            cancel: "Annulla",
            option: {
                backgroundCheck: {
                    label: "Controllo in Background",
                    description: "Controlla nuove sessioni in background e mostra notifiche quando rilevate"
                },
                checkInterval: {
                    label: "Intervallo di Controllo",
                    description: "Frequenza di controllo delle nuove sessioni (in minuti)"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Migliora l'esperienza di apertura del menu impostazioni",
            option: {
                disableFade: {
                    label: "Disabilita Dissolvenza",
                    description: "Disabilita l'animazione di crossfade"
                },
                organizeMenu: {
                    label: "Organizza Menu",
                    description: "Organizza il menu contestuale dell'ingranaggio in categorie"
                },
                eagerLoad: {
                    label: "Caricamento Rapido (Eager Load)",
                    description: "Rimuove il ritardo di caricamento all'apertura del menu per la prima volta"
                }
            },
            alert: {
                title: "Riavvio richiesto",
                restart: "Hai modificato impostazioni che richiedono il riavvio.",
                confirm: "Riavvia ora",
                cancel: "Più tardi!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Carica file con un singolo clic, apri il menu con il tasto destro"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Questo plugin ti permette di ingrandire le anteprime degli streaming",
            context: {
                viewPreview: "Visualizza Anteprima Streaming"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Blocca i messaggi contenenti parole chiave definite, come se l'utente fosse bloccato.",
            option: {
                blockedWords: {
                    label: "Parole Bloccate",
                    description: "Lista di parole da bloccare separate da virgola"
                },
                useRegex: {
                    label: "Usa Regex",
                    description: "Usa i valori come espressioni regolari (avanzato)"
                },
                caseSensitive: {
                    label: "Case Sensitive",
                    description: "Indica se la ricerca deve distinguere tra maiuscole e minuscole"
                },
                ignoreBlockedMessages: {
                    label: "Ignora Messaggi Bloccati",
                    description: "Ignora completamente la barra dei nuovi messaggi (recenti)"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Impedisce il caricamento di Krisp"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Sfoca gli allegati nei canali NSFW finché non ci passi sopra con il mouse",
            option: {
                blurAmount: {
                    label: "Intensità Sfocatura",
                    description: "Intensità della sfocatura (in pixel)"
                },
                blurAllChannels: {
                    label: "Sfoca Tutti i Canali",
                    description: "Sfoca gli allegati in tutti i canali (non solo quelli NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Salta la conferma del PIN quando si usano le funzioni di fissaggio"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Ricevi comunque notifiche da fonti specifiche quando sei in modalità 'Non Disturbare'. Clicca con il tasto destro su utenti/canali/server per impostare l'eccezione.",
            context: {
                remove: "Rimuovi Eccezione Stato",
                add: "Aggiungi Eccezione Stato"
            },
            option: {
                guilds: {
                    label: "Server",
                    description: "Server autorizzati (notifica per i ping ovunque nel server)",
                    placeholder: "Separa con virgole"
                },
                channels: {
                    label: "Canali",
                    description: "Canali autorizzati (notifica per i ping nel canale)",
                    placeholder: "Separa con virgole"
                },
                users: {
                    label: "Utenti",
                    description: "Utenti autorizzati (notifica per tutti i messaggi in DM)",
                    placeholder: "Separa con virgole"
                },
                allowOutsideOfDms: {
                    label: "Consenti Fuori dai DM",
                    description: "Permette agli utenti selezionati di bypassare lo stato anche fuori dai DM (vale per tutti i messaggi inviati dagli utenti scelti)"
                },
                notificationSound: {
                    label: "Suono Notifica",
                    description: "Indica se riprodurre il suono della notifica"
                },
                respectSilentPings: {
                    label: "Rispetta Ping Silenziosi",
                    description: "Rispetta i ping silenziosi (@silent / soppressione notifiche)"
                },
                statusToUse: {
                    label: "Stato da Usare",
                    description: "Stato per il quale applicare la whitelist",
                    online: "Online",
                    idle: "Assente",
                    dnd: "Non Disturbare",
                    invisible: "Invisibile"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Monitora e visualizza i compleanni degli utenti con icone a forma di torta",
            context: {
                label: "Compleanno",
                setBirthday: "Imposta Compleanno",
                clearBirthday: "Rimuovi Compleanno",
                current: "Attuale:"
            },
            option: {
                chat: {
                    label: "Chat",
                    description: "Mostra icone torta accanto ai nomi utente in chat"
                },
                memberList: {
                    label: "Lista Membri",
                    description: "Mostra icone torta nella lista membri"
                },
                profileBadge: {
                    label: "Badge Profilo",
                    description: "Mostra il badge torta nel profilo utente"
                },
                notificationSound: {
                    label: "Suono Notifica",
                    description: "Riproduce un suono quando viene inviata la notifica di compleanno"
                },
                userList: {
                    label: "Compleanni Salvati",
                    description: "Gestisci i compleanni salvati"
                }
            },
            locations: {
                chat: {
                    label: "Chat",
                    description: "accanto ai nomi utente in chat"
                },
                memberList: {
                    label: "Lista Membri",
                    description: "nella lista membri"
                }
            },
            toast: {
                success: "Compleanno impostato con successo!",
                invalid: "Formato compleanno non valido! È accettato solo GG/MM.",
                cleared: "Compleanno rimosso con successo!"
            },
            notification: {
                title: "🎂 Compleanno Oggi!",
                body: "Oggi è il compleanno di {{username}}!"
            },
            modal: {
                title: "Imposta Compleanno per {{username}}",
                description: "Inserisci il compleanno nel formato GG/MM (es. 25/12)",
                placeholder: "es. 25/12",
                current: "Compleanno attuale:",
                set: "Imposta Compleanno",
                cancel: "Annulla",
                birthday: "È il mio compleanno! 🎂",
                saved: "Compleanni Salvati",
                savedDesc: "Nessun compleanno salvato. Clicca col tasto destro sugli utenti per aggiungerli!",
                today: "Oggi",
                remove: "Rimuovi",
                loading: "Caricamento...",
                save: "Salva",
                edit: "Modifica"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Mostra la durata della chiamata in tutte le chiamate vocali",
            option: {
                format: {
                    label: "Formato",
                    description: "Formato compatto o leggibile (esteso)",
                    human: "30g 23o 00m 42s"
                },
                allCallTimers: {
                    label: "Tutti i Timer Chiamata",
                    description: "Mostra i timer di chiamata per tutti gli utenti nei server"
                },
                showWithoutHover: {
                    label: "Mostra Senza Passare il Mouse",
                    description: "Mostra sempre il timer senza doverci passare sopra con il mouse"
                },
                showRoleColor: {
                    label: "Mostra Colore Ruolo",
                    description: "Visualizza con il colore del ruolo dell'utente (se il plugin ShowRoleColor è abilitato)"
                },
                trackSelf: {
                    label: "Traccia Te Stesso",
                    description: "Mostra anche il tuo timer personale"
                },
                showSeconds: {
                    label: "Mostra Secondi",
                    description: "Visualizza i secondi nel timer"
                },
                watchLargeGuilds: {
                    label: "Monitora Grandi Server",
                    description: "Traccia gli utenti nei server grandi. Potrebbe causare lag se sei in molti server con molti utenti in voce."
                },
                fixUI: {
                    label: "Correzione UI",
                    description: "In alcuni casi il timer potrebbe rompere l'interfaccia. Abilita questa opzione per risolvere."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Aggiunge badge ai canali in base alla loro tipologia",
            badge: {
                private: "Questo canale è bloccato.",
                nsfw: "Questo canale è contrassegnato come NSFW.",
                rules: "Questo è il canale delle regole del server."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Un Badge Per Canale",
                    description: "Mostra solo un badge per ogni canale"
                },
                showTextBadge: {
                    label: "Mostra Badge Testo",
                    description: "Mostra il badge Testo"
                },
                showVoiceBadge: {
                    label: "Mostra Badge Voce",
                    description: "Mostra il badge Voce"
                },
                showCategoryBadge: {
                    label: "Mostra Badge Categoria",
                    description: "Mostra il badge Categoria"
                },
                showDirectoryBadge: {
                    label: "Mostra Badge Directory",
                    description: "Mostra il badge Directory"
                },
                showAnnouncementThreadBadge: {
                    label: "Mostra Badge Thread Annunci",
                    description: "Mostra il badge Thread Annunci"
                },
                showPublicThreadBadge: {
                    label: "Mostra Badge Thread Pubblico",
                    description: "Mostra il badge Thread Pubblico"
                },
                showPrivateThreadBadge: {
                    label: "Mostra Badge Thread Privato",
                    description: "Mostra il badge Thread Privato"
                },
                showStageBadge: {
                    label: "Mostra Badge Stage",
                    description: "Mostra il badge Stage"
                },
                showAnnouncementBadge: {
                    label: "Mostra Badge Annunci",
                    description: "Mostra il badge Annunci"
                },
                showForumBadge: {
                    label: "Mostra Badge Forum",
                    description: "Mostra il badge Forum"
                },
                showMediaBadge: {
                    label: "Mostra Badge Media",
                    description: "Mostra il badge Media"
                },
                showNSFWBadge: {
                    label: "Mostra Badge NSFW",
                    description: "Mostra il badge NSFW"
                },
                showLockedBadge: {
                    label: "Mostra Badge Bloccato",
                    description: "Mostra il badge Lucchetto"
                },
                showRulesBadge: {
                    label: "Mostra Badge Regole",
                    description: "Mostra il badge Regole"
                },
                showUnknownBadge: {
                    label: "Mostra Badge Sconosciuto",
                    description: "Mostra il badge Sconosciuto"
                },
                textBadgeLabel: {
                    label: "Etichetta Badge Testo",
                    description: "Testo dell'etichetta badge testo",
                    default: "Testo"
                },
                voiceBadgeLabel: {
                    label: "Etichetta Badge Voce",
                    description: "Testo dell'etichetta badge voce",
                    default: "Voce"
                },
                categoryBadgeLabel: {
                    label: "Etichetta Badge Categoria",
                    description: "Testo dell'etichetta badge categoria",
                    default: "Categoria"
                },
                announcementBadgeLabel: {
                    label: "Etichetta Badge Thread Annunci",
                    description: "Testo dell'etichetta badge thread annunci",
                    default: "Novità"
                },
                announcementThreadBadgeLabel: {
                    label: "Etichetta Badge Thread Annunci",
                    description: "Testo dell'etichetta badge thread annunci",
                    default: "Thread Novità"
                },
                publicThreadBadgeLabel: {
                    label: "Etichetta Badge Thread Pubblico",
                    description: "Testo dell'etichetta badge thread pubblico",
                    default: "Thread"
                },
                privateThreadBadgeLabel: {
                    label: "Etichetta Badge Thread Privato",
                    description: "Testo dell'etichetta badge thread privato",
                    default: "Thread Privato"
                },
                stageBadgeLabel: {
                    label: "Etichetta Badge Stage",
                    description: "Testo dell'etichetta badge stage",
                    default: "Stage"
                },
                directoryBadgeLabel: {
                    label: "Etichetta Badge Directory",
                    description: "Testo dell'etichetta badge directory",
                    default: "Directory"
                },
                forumBadgeLabel: {
                    label: "Etichetta Badge Forum",
                    description: "Testo dell'etichetta badge forum",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Etichetta Badge Media",
                    description: "Testo dell'etichetta badge media",
                    default: "Media"
                },
                nsfwBadgeLabel: {
                    label: "Etichetta Badge NSFW",
                    description: "Testo dell'etichetta badge NSFW",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Etichetta Badge Bloccato",
                    description: "Testo dell'etichetta badge bloccato",
                    default: "Bloccato"
                },
                rulesBadgeLabel: {
                    label: "Etichetta Badge Regole",
                    description: "Testo dell'etichetta badge regole",
                    default: "Regole"
                },
                unknownBadgeLabel: {
                    label: "Etichetta Badge Sconosciuto",
                    description: "Testo dell'etichetta badge sconosciuto",
                    default: "Sconosciuto"
                },
                textBadgeColor: {
                    label: "Colore Badge Testo",
                    description: "Colore del badge testo"
                },
                voiceBadgeColor: {
                    label: "Colore Badge Voce",
                    description: "Colore del badge voce"
                },
                categoryBadgeColor: {
                    label: "Colore Badge Categoria",
                    description: "Colore del badge categoria"
                },
                announcementBadgeColor: {
                    label: "Colore Badge Thread Annunci",
                    description: "Colore del badge thread annunci"
                },
                announcementThreadBadgeColor: {
                    label: "Colore Badge Thread Annunci",
                    description: "Colore del badge thread annunci"
                },
                publicThreadBadgeColor: {
                    label: "Colore Badge Thread Pubblico",
                    description: "Colore del badge thread pubblico"
                },
                privateThreadBadgeColor: {
                    label: "Colore Badge Thread Privato",
                    description: "Colore del badge thread privato"
                },
                stageBadgeColor: {
                    label: "Colore Badge Stage",
                    description: "Colore del badge stage"
                },
                directoryBadgeColor: {
                    label: "Colore Badge Directory",
                    description: "Colore del badge directory"
                },
                forumBadgeColor: {
                    label: "Colore Badge Forum",
                    description: "Colore del badge forum"
                },
                mediaBadgeColor: {
                    label: "Colore Badge Media",
                    description: "Colore del badge media"
                },
                nsfwBadgeColor: {
                    label: "Colore Badge NSFW",
                    description: "Colore del badge NSFW"
                },
                lockedBadgeColor: {
                    label: "Colore Badge Bloccato",
                    description: "Colore del badge bloccato"
                },
                rulesBadgeColor: {
                    label: "Colore Badge Regole",
                    description: "Colore del badge regole"
                },
                unknownBadgeColor: {
                    label: "Colore Badge Sconosciuto",
                    description: "Colore del badge sconosciuto"
                }
            },
            badges: {
                text: "Testo",
                voice: "Voce",
                category: "Categoria",
                announcement: "Novità",
                announcementThread: "Thread Novità",
                publicThread: "Thread",
                privateThread: "Thread Privato",
                stage: "Stage",
                directory: "Directory",
                forum: "Forum",
                media: "Media",
                nsfw: "NSFW",
                locked: "Bloccato",
                rules: "Regole",
                unknown: "Sconosciuto"
            },
            tooltip: {
                locked: "Questo canale è bloccato.",
                nsfw: "Questo canale è contrassegnato come NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Raggruppa i tuoi canali visitati frequentemente in schede, come in un browser",
            open: "Apri in una Nuova Scheda",
            animation: {
                title: "Controlli Animazione",
                description: "Abilita o disabilita animazioni specifiche per le schede dei canali.",
                placeholder: "Seleziona quali animazioni abilitare...",
                tabHover: "Effetti Hover Scheda (sollevamento + scala)",
                tabSelection: "Animazione Sollevamento Scheda Selezionata",
                tabDragDrop: "Trascina e Rilascia Scheda (fantasma + riordino)",
                tabEnterExit: "Scorrimento Entrata/Uscita Scheda (creazione + chiusura)",
                tabIconPop: "Pop Icona su Selezione (ingrandimento icona)",
                closeRotation: "Rotazione Pulsante Chiudi",
                plusPulse: "Pulsazione Pulsante Più",
                mentionGlow: "Bagliore Badge Menzioni",
                compactExpand: "Espansione Modalità Compatta",
                selectedBorder: "Bordo Blu Scheda Selezionata",
                selectedBackground: "Colore Sfondo Scheda Selezionata",
                tabShadows: "Effetti Ombra Scheda",
                tabRepositioning: "Riposizionamento Scheda (cambi di posizione fluidi)",
                resizeHandle: "Dissolvenza Maniglia Ridimensionamento",
                questActivate: "Gradiente Quest Attiva"
            },
            bookmark: {
                label: "Segnalibro",
                unknown: "Utente Sconosciuto",
                folder: "Cartella",
                add: "Aggiungi ai Segnalibri",
                edit: "Modifica Segnalibro",
                delete: "Elimina Segnalibro",
                remove: "Rimuovi dai Segnalibri",
                removeFolder: "Rimuovi Segnalibro dalla Cartella",
                loading: "Caricamento segnalibri...",
                noBookmarks: "Non hai segnalibri. Puoi aggiungere una scheda aperta o nascondere questo messaggio col tasto destro",
                quests: "Quest",
                messageRequests: "Richieste di Messaggio",
                friends: "Amici",
                shop: "Negozio",
                library: "Libreria",
                discovery: "Scoperta",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Attività",
                specialPage: "Pagina Speciale",
                searchPlaceholder: "Cerca segnalibri"
            },
            button: {
                save: "Salva",
                delete: "Elimina",
                cancel: "Annulla",
                reset: "Ripristina",
                close: "Chiudi"
            },
            context: {
                label: "Menu Contestuale ChannelTabs",
                bookmark: "Menu Contestuale Segnalibri ChannelTabs",
                tab: "Menu Contestuale Schede ChannelTabs",
                folderMenu: "Menu Cartella Segnalibri",
                compact: "Compatto",
                bookmarkBar: "Barra dei Segnalibri",
                openAll: "Apri Tutto nei Segnalibri",
                openNew: "Apri in Nuova Scheda",
                close: {
                    tab: "Chiudi Scheda",
                    otherTabs: "Chiudi Altre Schede",
                    tabsToRight: "Chiudi Schede a Destra",
                    tabsToLeft: "Chiudi Schede a Sinistra",
                    reopen: "Riapri Scheda Chiusa",
                    allTabs: "Chiudi Tutte le Schede"
                }
            },
            error: {
                noLogin: "Nessun account collegato trovato."
            },
            modal: {
                add: {
                    title: "Aggiungi Segnalibro alla Cartella",
                    select: "Seleziona una cartella",
                    create: "Creane una"
                },
                edit: {
                    title: "Modifica Segnalibro",
                    name: "Nome Segnalibro",
                    folder: "Colore Cartella"
                },
                delete: {
                    title: "Sei sicuro?",
                    description: "Eliminando una cartella di segnalibri eliminerai anche tutti i segnalibri al suo interno."
                },
                folderIcon: {
                    title: "Scegli Icona Cartella",
                    preview: "Anteprima",
                    iconColor: "Colore Icona",
                    search: "Cerca",
                    searchPlaceholder: "Cerca {{count}} icone...",
                    folderName: "Nome Cartella",
                    folderColor: "Colore Cartella",
                    folderIcon: "Icona Cartella",
                    chooseIcon: "Scegli Icona",
                    useDefaultIcon: "Usa Icona Predefinita"
                }
            },
            option: {
                onStartup: {
                    label: "All'Avvio",
                    description: "Cosa fare con le schede all'avvio",
                    nothing: "Nulla (apri sulla scheda Amici)",
                    remember: "Ricorda le schede dell'ultima sessione",
                    open: "Apri un set specifico di schede"
                },
                tabSet: {
                    label: "Set di Schede"
                },
                noPomeloNames: {
                    label: "Nessun Nome Pomelo",
                    description: "Usa i nomi visualizzati invece dei nomi utente per i DM"
                },
                showStatusIndicators: {
                    label: "Mostra Indicatori di Stato",
                    description: "Mostra gli indicatori di stato per i DM"
                },
                showBookmarkBar: {
                    label: "Mostra Barra Segnalibri"
                },
                persistUnreadCountFallback: {
                    label: "Mantieni fallback conteggio non letti",
                    description: "Mantieni i fallback dei badge non letti tra i ricaricamenti per schede e segnalibri"
                },
                bookmarkNotificationDot: {
                    label: "Puntino Notifica Segnalibro",
                    description: "Mostra il puntino di notifica per i segnalibri"
                },
                widerTabsAndBookmarks: {
                    label: "Schede e Segnalibri più Larghi",
                    description: "Estende la lunghezza di schede e segnalibri per monitor più grandi"
                },
                tabWidthScale: {
                    label: "Scala Larghezza Scheda",
                    description: "Scala larghezza scheda (percentuale) - regolabile trascinando i bordi"
                },
                renderAllTabs: {
                    label: "Renderizza Tutte le Schede",
                    description: "Mantieni tutte le schede in memoria per un cambio rapido (salva posizione e stato)"
                },
                switchToExistingTab: {
                    label: "Passa a Scheda Esistente",
                    description: "Passa alla scheda se esiste già per il canale verso cui stai navigando"
                },
                createNewTabIfNotExists: {
                    label: "Crea Nuova Scheda Se Non Esiste",
                    description: "Crea una nuova scheda se non ne esiste già una per il canale verso cui stai navigando"
                },
                enableRapidNavigation: {
                    label: "Abilita Navigazione Rapida",
                    description: "Navigando velocemente tra i canali verrà sostituita la scheda corrente invece di crearne di nuove"
                },
                rapidNavigationThreshold: {
                    label: "Soglia Navigazione Rapida",
                    description: "Finestra temporale (ms) per la navigazione rapida."
                },
                tabBarPosition: {
                    label: "Posizione Barra Schede",
                    description: "Posizione della barra delle schede",
                    top: "Sopra",
                    bottom: "Sotto"
                },
                enableNumberKeySwitching: {
                    label: "Cambio Scheda con Tasti Numerici",
                    description: "Abilita i tasti numerici (1-9) per cambiare scheda"
                },
                numberKeySwitchCount: {
                    label: "Conteggio Tasti Numerici",
                    description: "Numero di schede accessibili tramite tasti numerici"
                },
                enableCloseTabShortcut: {
                    label: "Scorciatoia Chiudi Scheda",
                    description: "Abilita la scorciatoia da tastiera per chiudere la scheda"
                },
                enableNewTabShortcut: {
                    label: "Scorciatoia Nuova Scheda",
                    description: "Abilita la scorciatoia da tastiera per una nuova scheda"
                },
                enableTabCycleShortcut: {
                    label: "Scorciatoia Ciclo Schede",
                    description: "Abilita la scorciatoia per scorrere tra le schede"
                },
                keybindsSection: {
                    label: "Scorciatoie",
                    description: "Clicca un pulsante e premi la combinazione di tasti desiderata. Sono supportati i modificatori come CTRL, SHIFT e ALT.",
                    title: "Scorciatoie da tastiera",
                    reset: "Ripristina Tutto",
                    shortcutDisabled: "Questa scorciatoia è attualmente disabilitata",
                    pressKey: "Premi un tasto qualsiasi...",
                    conflictError: "Questa scorciatoia è già utilizzata da: {{key}}",
                    closeTab: {
                        label: "Chiudi Scheda",
                        description: "Chiude la scheda attualmente attiva"
                    },
                    newTab: {
                        label: "Nuova Scheda",
                        description: "Apre una nuova scheda con il canale corrente"
                    },
                    cycleTabsForward: {
                        label: "Ciclo Schede Avanti",
                        description: "Passa alla scheda successiva"
                    },
                    cycleTabsBackward: {
                        label: "Ciclo Schede Indietro",
                        description: "Passa alla scheda precedente"
                    }
                },
                closeTabKeybind: {
                    label: "Tasto Chiudi Scheda",
                    description: "Scorciatoia per chiudere la scheda corrente"
                },
                newTabKeybind: {
                    label: "Tasto Nuova Scheda",
                    description: "Scorciatoia per aprire una nuova scheda"
                },
                cycleTabForwardKeybind: {
                    label: "Tasto Ciclo Avanti",
                    description: "Scorciatoia per passare alla scheda successiva"
                },
                cycleTabBackwardKeybind: {
                    label: "Tasto Ciclo Indietro",
                    description: "Scorciatoia per passare alla scheda precedente"
                },
                showTabNumbers: {
                    label: "Mostra Numeri Scheda",
                    description: "Mostra badge numerati sulle schede per indicare le scorciatoie"
                },
                tabNumberPosition: {
                    label: "Posizione Numero Scheda",
                    description: "Dove visualizzare il numero sulla scheda",
                    left: "Sinistra (prima dell'icona)",
                    right: "Destra (dopo il contenuto)"
                },
                animations: {
                    label: "Animazioni"
                },
                animationHover: {
                    label: "Animazione al Passaggio",
                    description: "Abilita effetti di sollevamento e scala al passaggio del mouse"
                },
                animationSelection: {
                    label: "Animazione alla Selezione",
                    description: "Abilita animazioni di selezione (bagliore bordo, sollevamento)"
                },
                animationDragDrop: {
                    label: "Animazione Trascina e Rilascia",
                    description: "Abilita effetti fantasma durante il trascinamento"
                },
                animationEnterExit: {
                    label: "Animazione Entrata/Uscita",
                    description: "Abilita animazioni a scorrimento per creazione/chiusura"
                },
                animationIconPop: {
                    label: "Animazione Pop Icona",
                    description: "Abilita l'ingrandimento dell'icona alla selezione"
                },
                animationCloseRotation: {
                    label: "Animazione Rotazione Chiusura",
                    description: "Abilita l'animazione di rotazione per i pulsanti di chiusura"
                },
                animationPlusPulse: {
                    label: "Animazione Pulsazione Più",
                    description: "Abilita l'animazione pulsante per il tasto (+)"
                },
                animationMentionGlow: {
                    label: "Animazione Bagliore Menzioni",
                    description: "Abilita il bagliore rosso pulsante per le menzioni"
                },
                animationCompactExpand: {
                    label: "Animazione Compatta/Espansa",
                    description: "Abilita l'espansione fluida per le schede compatte"
                },
                animationSelectedBorder: {
                    label: "Animazione Bordo Selezionato",
                    description: "Abilita lo stile del bordo e del bagliore per le schede selezionate"
                },
                animationSelectedBackground: {
                    label: "Animazione Sfondo Selezionato",
                    description: "Abilita il cambio di colore dello sfondo per le schede selezionate"
                },
                animationTabShadows: {
                    label: "Animazione Ombre Scheda",
                    description: "Abilita gli effetti ombra sulle schede"
                },
                animationTabPositioning: {
                    label: "Animazione Posizionamento Scheda",
                    description: "Abilita transizioni fluide quando le schede cambiano posizione"
                },
                animationResizeHandle: {
                    label: "Animazione Maniglia Ridimensionamento",
                    description: "Abilita l'animazione di dissolvenza per la maniglia di ridimensionamento"
                },
                animationQuestsActive: {
                    label: "Animazione Quest Attive",
                    description: "Abilita animazioni gradienti sulla scheda Quest quando le missioni sono in corso"
                },
                compactAutoExpandSelected: {
                    label: "Auto-Espansione Compatta Selezionata",
                    description: "Espande automaticamente le schede compatte quando selezionate per mostrare il nome completo"
                },
                compactAutoExpandOnHover: {
                    label: "Auto-Espansione Compatta al Passaggio",
                    description: "Espande automaticamente le schede compatte al passaggio del mouse per mostrare il nome completo"
                },
                openInNewTabAutoSwitch: {
                    label: "Passaggio Automatico Nuova Scheda",
                    description: "Passa automaticamente alle nuove schede aperte dal menu contestuale"
                },
                bookmarksIndependentFromTabs: {
                    label: "Segnalibri Indipendenti dalle Schede",
                    description: "I segnalibri navigano in modo indipendente senza influenzare la barra delle schede attive"
                },
                showResizeHandle: {
                    label: "Mostra Maniglia Ridimensionamento",
                    description: "Mostra la maniglia quando passi sulle schede per regolarne la larghezza"
                },
                openNewTabsInCompactMode: {
                    label: "Nuove Schede in Modalità Compatta",
                    description: "Apri tutte le nuove schede in modalità compatta per impostazione predefinita"
                },
                newTabButtonBehavior: {
                    label: "Comportamento Pulsante Nuova Scheda",
                    description: "Il pulsante (+) segue le schede invece di restare fisso a destra"
                },
                oneTabPerServer: {
                    label: "Una Scheda per Server",
                    description: "Limita a una scheda per server; aprire un nuovo canale nello stesso server userà la scheda esistente."
                },
                maxOpenTabs: {
                    label: "Massimo Schede Aperte",
                    description: "Numero massimo di schede aperte (0 = illimitato)"
                }
            },
            tabs: {
                startup: "Schede all'Avvio",
                currently: "Imposta sulle schede attualmente aperte"
            },
            toast: {
                notRestoring: "Ripristino schede saltato perché KeepCurrentChannel è abilitato",
                failed: {
                    restore: "Ripristino schede fallito",
                    saved: "Caricamento schede salvate fallito"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Visualizza un contatore di caratteri nel riquadro dei messaggi",
            option: {
                colorEffects: {
                    label: "Effetti Colore",
                    description: "Attiva o disattiva gli effetti colore quando ci si avvicina al limite dei caratteri"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Nasconde tutti i canali nelle categorie compresse, anche se hanno messaggi non letti."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Rimuove tutte le emoji e decorazioni dai nomi dei canali"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Rimuove automaticamente gli elementi di tracciamento dagli URL che invii"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Clicca sui ruoli nei profili utente e nella lista membri per vedere quali membri li possiedono.",
            modal: {
                loading: "Caricamento membri...",
                noMembers: "Nessun membro trovato.",
                unknown: "Ruolo Sconosciuto"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Ti permette di nascondere localmente quasi tutti i contenuti di qualsiasi utente",
            replying: "Risposta a un messaggio bloccato",
            option: {
                hideVc: {
                    label: "Nascondi Canali Vocali",
                    description: "Nasconde i canali vocali che contengono utenti bloccati."
                },
                usersToBlock: {
                    label: "Utenti da Bloccare",
                    description: "ID utente separati da virgola e spazio"
                },
                hideBlockedUsers: {
                    label: "Nascondi Utenti Bloccati",
                    description: "Nasconde gli utenti bloccati ovunque"
                },
                hideBlockedMessages: {
                    label: "Nascondi Messaggi Bloccati",
                    description: "Nasconde completamente i messaggi degli utenti bloccati"
                },
                hideEmptyRoles: {
                    label: "Nascondi Ruoli Vuoti",
                    description: "Nasconde le intestazioni dei ruoli se tutti i membri sono bloccati"
                },
                blockedReplyDisplay: {
                    label: "Visualizzazione Risposta Bloccata",
                    description: "Cosa mostrare quando qualcuno risponde a un utente nascosto",
                    displayText: "Mostra un testo che indica una risposta a un messaggio nascosto",
                    hideReply: "Assolutamente nulla"
                },
                guildBlackList: {
                    label: "Blacklist Server",
                    description: "ID dei server dove disabilitare questa funzione"
                },
                guildWhiteList: {
                    label: "Whitelist Server",
                    description: "ID dei server dove abilitare questa funzione"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Ricreazione del vecchio esperimento del tema client. Aggiungi un colore al tuo tema Discord",
            title: "Colore Tema",
            add: "Aggiungi un colore al tuo tema client Discord",
            option: {
                color: {
                    label: "Colore"
                },
                resetColor: {
                    label: "Ripristina Colore"
                }
            },
            error: {
                modal: {
                    title: "Il tema potrebbe non apparire bene!",
                    contrast: "Il colore selezionato non ha abbastanza contrasto con il testo",
                    nitro: "I temi Nitro non sono supportati",
                    switch: "Passa alla modalità {{oppositeTheme}}",
                    disable: "Disabilita Tema Nitro",
                    reset: "Ripristina Colore Tema"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Aggiunge più opzioni per FPS e durata dei Clip, oltre al tagging RPC!",
            minutes: "Minuti",
            option: {
                richPresenceTagging: {
                    label: "Tagging Rich Presence",
                    description: "Quando i clip devono essere taggati con la Rich Presence attuale?",
                    always: "Sempre",
                    only: "Solo quando l'inizio o la fine del nome attività coincide",
                    never: "Mai"
                },
                enableScreenshotKeybind: {
                    label: "Abilita Tasto Screenshot",
                    description: "Abilita la funzione scorciatoia per lo screenshot"
                },
                enableVoiceOnlyClips: {
                    label: "Abilita Clip Solo Voce",
                    description: "Abilita clip solo audio (senza video)"
                },
                enableAdvancedSignals: {
                    label: "Abilita Segnali Avanzati",
                    description: "Abilita i segnali avanzati per i clip (trigger automatici)"
                },
                ignorePlatformRestriction: {
                    label: "Ignora Restrizioni Piattaforma",
                    description: "Permette il clipping anche su piattaforme con restrizioni (potrebbe causare errori di salvataggio)"
                },
                clipsLink: {
                    label: "Link Clip",
                    link: "Cambia le opzioni FPS e durata nelle impostazioni Clip!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Rimuove le icone per daltonici dagli stati, proprio come il Discord del 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Ti permette di navigare l'interfaccia con la tastiera.",
            action: {
                command: {
                    label: "Esegui Comando",
                    description: "Crea un alias per un altro comando della tavolozza tramite ID."
                },
                settings: {
                    label: "Apri Pagina Impostazioni",
                    description: "Vai direttamente a una pagina delle impostazioni di Discord."
                },
                url: {
                    label: "Apri URL",
                    description: "Apri un link. Usa link https:// per la migliore compatibilità."
                },
                macro: {
                    label: "Esegui Macro",
                    description: "Esegui una sequenza di comandi in ordine."
                }
            },
            category: {
                auto: "Auto (posizione predefinita)",
                default: {
                    label: "Azioni Rapide",
                    description: "Scorciatoie comuni di Plexcord"
                },
                plugins: {
                    label: "Plugin",
                    description: "Abilita, disabilita e configura i plugin di Plexcord",
                    enable: {
                        label: "Abilita Plugin"
                    },
                    disable: {
                        label: "Disabilita Plugin"
                    },
                    settings: {
                        label: "Impostazioni Plugin"
                    },
                    toolbox: {
                        label: "Azioni Plugin"
                    },
                    chatbar: {
                        label: "Pulsanti Barra Chat"
                    },
                    changes: {
                        label: "Modifiche Plugin"
                    }
                },
                context: {
                    label: "Contesto Attuale",
                    description: "Azioni per il canale e il server selezionati"
                },
                updates: {
                    label: "Aggiornamenti",
                    description: "Resta aggiornato con Plexcord"
                },
                discordSettings: {
                    label: "Impostazioni Discord",
                    description: "Vai alle pagine di configurazione di Discord"
                },
                custom: {
                    label: "Comandi Personalizzati",
                    description: "Voci della tavolozza definite dall'utente"
                },
                sessions: {
                    label: "Strumenti Sessione",
                    description: "Utility per gestire la tua sessione Discord"
                },
                guilds: {
                    label: "Server",
                    description: "Naviga rapidamente tra i tuoi server"
                },
                friends: {
                    label: "Amici",
                    description: "Naviga rapidamente tra i tuoi amici"
                },
                action: {
                    label: "Azione"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Apri Impostazioni Plexcord",
                        plugin: "Apri Impostazioni Plugin"
                    }
                },
                reload: {
                    label: "Ricarica Discord",
                    description: "Ricarica la finestra corrente di Discord"
                }
            },
            command: {
                enable: "Abilita {{pluginName}}",
                enabled: "Abilitato {{pluginName}}",
                disable: "Disabilita {{pluginName}}",
                disabled: "Disabilitato {{pluginName}}",
                failed: "Comando fallito:",
                toggleFailed: "Impossibile attivare/disattivare {{pluginName}}.",
                pluginSettings: "Impostazioni {{pluginName}}",
                untitled: "Comando Senza Titolo",
                new: "Nuovo Comando",
                error: {
                    enter: "Inserisci un ID comando o scegline uno sotto.",
                    noCommand: "Nessun comando corrisponde a questo ID."
                },
                discord: {
                    account: "Apri Il Mio Account",
                    privacy: "Apri Privacy e Sicurezza",
                    notifications: "Apri Notifiche",
                    voice: "Apri Voce e Video",
                    text: "Apri Testo e Immagini",
                    appearance: "Apri Aspetto",
                    accessibility: "Apri Accessibilità",
                    keybinds: "Apri Scorciatoie",
                    advanced: "Apri Avanzate",
                },
                updates: {
                    check: {
                        label: "Controlla Aggiornamenti",
                        description: "Controlla aggiornamenti per Plexcord",
                        one: "Un aggiornamento disponibile",
                        multiple: "{{count}} aggiornamenti disponibili",
                        none: "Nessun aggiornamento disponibile",
                        failed: "Controllo aggiornamenti fallito."
                    },
                    changelog: {
                        label: "Vedi Registro Modifiche",
                        description: "Apre il registro modifiche di Plexcord"
                    }
                },
                read: {
                    mark: {
                        label: "Segna {{channelLabel}} come Letto"
                    }
                },
                pin: {
                    open: {
                        label: "Apri Messaggi Fissati per {{channelLabel}}"
                    },
                    toggle: {
                        label: "Attiva/Disattiva Fissa su Ultimo Comando"
                    }
                },
                channel: {
                    mute: {
                        label: "Silenzi Comandi {{channelLabel}}",
                        oneHour: "Silenzi {{channelLabel}} per 1 ora",
                        untilTomorrow: "Silenzi {{channelLabel}} fino a domani",
                    },
                    unmute: {
                        label: "Riattiva Audio {{channelLabel}}",
                    },
                    reopen: {
                        label: "Riapri Ultimo DM Chiuso"
                    },
                    dm: {
                        open: {
                            label: "Apri DM con {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Apri Impostazioni per {{guildLabel}}"
                    },
                    navigate: {
                        label: "Vai a {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Imposta Non Disturbare per 30 minuti",
                    oneHourDnd: "Imposta Non Disturbare per 1 ora",
                    cancelStatusReset: "Annulla Timer Stato"
                },
                status: {
                    set: {
                        online: "Imposta Stato: Online",
                        idle: "Imposta Stato: Assente",
                        dnd: "Imposta Stato: Non Disturbare",
                        invisible: "Imposta Stato: Invisibile"
                    }
                },
                toggle: {
                    streamer: "Attiva/Disattiva Modalità Streamer",
                    mute: "Attiva/Disattiva Microfono",
                    deafen: "Attiva/Disattiva Audio",
                },
                notification: {
                    clear: {
                        label: "Cancella Notifiche Desktop"
                    }
                },
                palette: {
                    settings: {
                        label: "Apri Impostazioni Command Palette",
                        description: "Configura il plugin Command Palette"
                    }
                },
                recent: {
                    label: "Mostra Comandi Recenti",
                    description: "Visualizza gli ultimi comandi eseguiti",
                    rerun: "Riesegui Ultimo Comando"
                },
                plugin: {
                    reload: {
                        label: "Ricarica Tutti i Plugin",
                        description: "Tenta di ricaricare a caldo ogni plugin abilitato"
                    },
                    enable: {
                        label: "Abilita Tutti i Plugin"
                    },
                    disable: {
                        label: "Disabilita Tutti i Plugin non richiesti"
                    },
                    restart: {
                        label: "Riavvia Plexcord",
                        description: "Ricarica la finestra del client Discord"
                    }
                },
                quickCSS: {
                    label: "Attiva/Disattiva Quick CSS"
                },
                transparentity: {
                    label: "Attiva/Disattiva Trasparenza Finestra"
                },
                theme: {
                    open: {
                        label: "Apri Impostazioni Tema Client"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Cerca comandi",
                noCommand: "Nessun comando trovato",
                add: {
                    title: "Aggiungi Comando"
                },
                choose: {
                    title: "Scegli Comando"
                },
                command: {
                    palette: {
                        label: "Command Palette",
                        placeholder: "Digita un comando",
                        filtering: "Filtraggio per {{tags}}",
                        noCommand: "Nessun comando trovato",
                        pin: "Fissa comando",
                        unpin: "Rimuovi comando fissato"
                    },
                    target: {
                        label: "ID Comando Destinazione",
                        placeholder: "Inserisci ID comando",
                        choose: "Scegli Comando"
                    },
                    custom: {
                        label: "Comandi Personalizzati",
                        description: "1) Nomina il comando · 2) Aggiungi info opzionali · 3) Scegli un'azione.",
                        auto: "Auto (predefinito)",
                        expand: "Espandi",
                        collapse: "Comprimi",
                        collapsed: {
                            label: "Etichetta",
                            description: "Nome Visualizzato",
                            advanced: {
                                hide: "Nascondi opzioni avanzate",
                                show: "Mostra opzioni avanzate"
                            },
                            subtitle: {
                                label: "Descrizione",
                                placeholder: "Sottotitolo opzionale"
                            },
                            keywords: {
                                label: "Parole Chiave",
                                placeholder: "Parole separate da virgola"
                            },
                            tags: {
                                label: "Tag",
                                placeholder: "Tag separati da virgola"
                            },
                            suggestion: {
                                label: "Suggerimento"
                            },
                            chooseCommand: {
                                label: "Scegli dove questo comando appare nella tavolozza."
                            },
                            danger: {
                                label: "Mostra come pericoloso"
                            }
                        },
                        remove: "Rimuovi Comando",
                        add: "Aggiungi Comando"
                    }
                },
                settings: {
                    noSelected: "Nessuna pagina selezionata",
                    current: "Pagina Corrente",
                    choose: "Scegli Pagina..."
                },
                url: {
                    url: "URL",
                    error: "Usa link http:// o https://.",
                    valid: "Inserisci un URL valido.",
                    open: {
                        external: "Apri esternamente",
                    }
                },
                macro: {
                    sequence: {
                        label: "Sequenza Comandi",
                        placeholder: "comando-a, comando-b"
                    },
                    addStep: "Aggiungi Passaggio",
                    unknownId: "ID Comandi Sconosciuti"
                }
            },
            status: {
                online: "Online",
                idle: "Assente",
                dnd: "Non Disturbare",
                invisible: "Invisibile"
            },
            tag: {
                core: "Core",
                navigation: "Navigazione",
                utility: "Utility",
                developer: "Sviluppatore",
                customization: "Personalizzazione",
                plugins: "Plugin",
                session: "Sessione",
                context: "Contesto",
                custom: "Personalizzato",
                guilds: "Server",
                friends: "Amici",
                other: "Altro"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Impossibile trovare il pulsante chat '{{label}}'.",
                        failedToTrigger: "Attivazione di {{label}} fallita.",
                        activated: "{{label}} attivato."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Controlli silenziamento canale non disponibili",
                        muted: "Canale silenziato.",
                        unmuted: "Audio canale riattivato.",
                        failed: "Aggiornamento stato silenziamento canale fallito."
                    },
                    dm: {
                        no: "Nessuna chiusura DM registrata in questa sessione.",
                        reOpened: "Riaperto l'ultimo DM chiuso.",
                        noAvailable: "Il DM non è più disponibile."
                    }
                },
                command: {
                    loop: "Rilevato loop di comandi nell'esecuzione della macro.",
                    notFound: "Comando {{commandId}} non trovato.",
                    unsupported: "Azione comando personalizzato non supportata.",
                    failedToRun: "Esecuzione di {{label}} fallita.",
                    notMetadata: "Metadati plugin Command Palette non disponibili."
                },
                guild: {
                    mute: {
                        unavailable: "Controlli silenziamento server non disponibili",
                        muted: "Server silenziato.",
                        unmuted: "Audio server riattivato.",
                        failed: "Aggiornamento stato silenziamento server fallito."
                    },
                    settings: {
                        unable: "Impossibile aprire le impostazioni del server.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Impossibile aprire il pannello dei messaggi fissati.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Annullato il ripristino programmato dello stato.",
                        unableToChange: "Impossibile cambiare lo stato al momento.",
                        reverted: "Stato ripristinato a {{status}}.",
                        dnd: "Non Disturbare per {{duration}} minuti."
                    },
                    change: {
                        unableToChange: "Impossibile cambiare lo stato al momento.",
                        changed: "Stato cambiato in {{status}}."
                    }
                },
                read: {
                    marked: "Segnato {{channelLabel}} come letto.",
                    failed: "Impossibile segnare il canale come letto."
                },
                route: {
                    unable: "Impossibile aprire {{destination}}.",
                },
                notification: {
                    cleared: "Tutte le notifiche rimosse.",
                    failed: "Rimozione notifiche fallita.",
                    notSupported: "Rimozione notifiche non supportata."
                },
                streamerMode: {
                    enabled: "Modalità Streamer abilitata.",
                    disabled: "Modalità Streamer disabilitata.",
                },
                voice: {
                    micToggle: {
                        muted: "Microfono disattivato.",
                        unmuted: "Microfono attivato."
                    },
                    deafenToggle: {
                        deafened: "Audio disattivato.",
                        undeafened: "Audio attivato."
                    }
                },
                quickCSS: {
                    enabled: "Quick CSS abilitato.",
                    disabled: "Quick CSS disabilitato."
                },
                transparentity: {
                    enabled: "Trasparenza Finestra abilitata.",
                    disabled: "Trasparenza Finestra disabilitata."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} è disabilitato.",
                        disable: "{{pluginName}} è disabilitato. Abilita il plugin per usare questa azione."
                    },
                    required: {
                        label: "{{pluginName}} richiede un riavvio per essere ricaricato."
                    },
                    stop: {
                        failed: "Arresto di {{pluginName}} fallito."
                    },
                    restart: {
                        failed: "Riavvio di {{pluginName}} fallito."
                    },
                    reload: {
                        label: "Ricaricato {{pluginName}}.",
                        noPlugin: "Nessun plugin ricaricato.",
                        reloaded: "Ricaricati {{count}} plugin."
                    },
                    toggle: {
                        enabled: "Abilitati {{changed}} plugin.",
                        disabled: "Disabilitati {{changed}} plugin.",
                        noChanged: "Nessun plugin ha cambiato stato."
                    },
                    run: {
                        failed: {
                            label: "Esecuzione fallita per {{pluginName}}: {{actionLabel}}."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "Canale Corrente",
                    group: "DM di Gruppo",
                    direct: "Messaggio Diretto"
                },
                guild: {
                    current: "Server Corrente",
                }
            },
            option: {
                hotkey: {
                    label: "Tasto di Scelta Rapida",
                    description: "Tasto usato per aprire la tavolozza dei comandi",
                    recording: "Premi un tasto...",
                    reset: "Ripristina"
                },
                visualStyle: {
                    label: "Stile Visuale",
                    description: "Aspetto della tavolozza",
                    classic: "Classico",
                    polished: "Rifinito"
                },
                showTags: {
                    label: "Mostra Tag",
                    description: "Visualizza i tag per i comandi"
                },
                enableTagFilter: {
                    label: "Abilita Filtro Tag",
                    description: "Mostra la barra di filtraggio per tag"
                },
                customCommands: {
                    label: "Comandi Personalizzati",
                    description: "Gestisci le voci personalizzate della tavolozza"
                }
            },
            template: {
                alias: {
                    label: "Comando Alias",
                    description: "Riflette un comando esistente"
                },
                settings: {
                    label: "Impostazioni",
                    description: "Apri Impostazioni Discord"
                },
                url: {
                    label: "Link",
                    description: "Apri un URL esterno"
                },
                macro: {
                    label: "Macro",
                    description: "Esegui una sequenza di comandi"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Disabilita i fastidiosi messaggi/errori della console",
            option: {
                disableLoggers: {
                    label: "Disabilita Logger",
                    description: "Disabilita i logger di Discord"
                },
                disableSpotifyLogger: {
                    label: "Disabilita Logger Spotify",
                    description: "Disabilita il logger di Spotify (evita fughe di token e info account)"
                },
                whitelistedLoggers: {
                    label: "Logger in Whitelist",
                    description: "Lista di logger (separati da ;) da consentire comunque"
                },
                allowLevel: {
                    label: "Livello Consentito",
                    description: "Consenti sempre i logger di questi tipi",
                    filter: "Filtra Lista"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Aggiunge alias brevi per molte funzioni nella finestra. Esegui `shortcutList` per la lista."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Ti permette di specificare parole che verranno sfocate per impostazione predefinita. Clicca sul contenuto sfocato per rivelarlo.",
            option: {
                flagged: {
                    label: "Segnalate",
                    flagged: "Parole Segnalate",
                    placeholder: "Parola"
                },
                onClick: {
                    label: "Al Clic",
                    description: "Mostra il contenuto solo al clic invece che al passaggio del mouse"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Ti permette di copiare le emoji come stringhe formattate (<a:nome:ID>)",
            option: {
                copyUnicode: {
                    label: "Copia Unicode",
                    description: "Copia il carattere unicode grezzo invece di :nome: per le emoji predefinite"
                }
            },
            context: {
                copy: "Copia Markdown Emoji"
            },
            toast: {
                success: "Successo! Markdown emoji copiato."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Aggiunge un pulsante agli allegati di testo per copiarne il contenuto",
            copied: "Copiato!",
            large: "File troppo grande per essere copiato.",
            copyFileContents: "Copia Contenuto File"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Un plugin per copiare i colori gradiente del profilo degli utenti negli appunti.",
            copy: "Copia Colori Profilo",
            toast: {
                noColor: "Nessun colore profilo trovato!",
                copied: "Colori profilo copiati negli appunti!",
                error: "Errore durante la copia dei colori profilo!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Copia l'URL dello stato dell'utente cliccandoci sopra col tasto destro",
            toast: {
                copied: "URL copiato",
                error: "Errore durante la copia dell'URL, controlla la console"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Aggiunge la possibilità di copiare e aprire i link degli Sticker",
            context: {
                copy: "Copia Link",
                open: "Apri Link"
            },
            toast: {
                success: "Link copiato!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Aggiunge un pulsante per copiare la menzione dell'utente nel menu contestuale.",
            context: {
                copy: "Copia Menzione Utente"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Aggiunge l'opzione 'Copia URL Utente' al menu contestuale dell'utente.",
            context: {
                copy: "Copia URL Utente"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Plugin per gestire e possibilmente riprendersi dai crash senza riavviare",
            option: {
                attemptToPreventCrashes: {
                    label: "Tenta di Prevenire i Crash",
                    description: "Indica se tentare di prevenire i crash di Discord."
                },
                attemptToNavigateToHome: {
                    label: "Tenta di Tornare alla Home",
                    description: "Tenta di tornare alla scheda Amici dopo un recupero da crash."
                }
            },
            toast: {
                crashed: {
                    title: "Discord è crashato!",
                    body: "Awn :( Discord è crashato due volte rapidamente.",
                    update: "Oh no, Discord è crashato... ma c'è un aggiornamento di Plexcord che potrebbe risolvere! Vuoi aggiornare ora?",
                    recover: "Tentativo di recupero...",
                    invalid: "Link d'invito non valido o scaduto."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Usa Ctrl+Invio per inviare messaggi (personalizzabile)",
            option: {
                submitRule: {
                    label: "Regola Invio",
                    description: "Il modo in cui inviare un messaggio",
                    ctrlEnter: "Ctrl+Invio (Invio o Shift+Invio per nuova riga)",
                    shiftEnter: "Shift+Invio (Invio per nuova riga)",
                    enter: "Invio (Shift+Invio per nuova riga; predefinito Discord)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Invia Messaggio in Mezzo a un Blocco Codice",
                    description: "Indica se inviare il messaggio se ci si trova all'interno di un blocco di codice"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Aggiunge uno sprite che segue il tuo cursore.",
            modal: {
                furColor: "Colore Pelliccia",
                outlineColor: "Colore Bordo"
            },
            option: {
                buddy: {
                    label: "Compagno",
                    description: "Scegli un compagno per il cursore",
                    oneko: "Oneko",
                    fathorse: "Cavallo Grassottello"
                },
                speed: {
                    label: "Velocità",
                    description: "Velocità del compagno",
                    invalid: "La velocità deve essere maggiore di 0"
                },
                fps: {
                    label: "Framerate",
                    description: "Framerate del compagno",
                    invalid: "Il framerate deve essere maggiore di 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Colore Pelliccia",
                    description: "Colore esadecimale pelliccia per Oneko"
                },
                outlineColor: {
                    label: "Colore Bordo",
                    description: "Colore esadecimale bordo per Oneko"
                },
                fathorseSection: {
                    label: "Cavallo Grassottello"
                },
                size: {
                    label: "Dimensione",
                    description: "Dimensione del cavallo",
                    invalid: "La dimensione deve essere maggiore di 0"
                },
                fade: {
                    label: "Dissolvenza",
                    description: "Se il cavallo deve svanire quando il cursore è vicino"
                },
                freeroam: {
                    label: "Vagabondaggio",
                    description: "Se il cavallo deve vagare liberamente quando inattivo"
                },
                shake: {
                    label: "Scuotimento",
                    description: "Se il cavallo deve scuotere la finestra mentre cammina"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Personalizza le icone delle cartelle con qualsiasi file PNG",
            option: {
                solidIcon: {
                    label: "Icona Solida",
                    description: "Usa uno sfondo solido dietro l'immagine"
                },
                folderIcons: {
                    label: "Icone Cartella",
                    description: "Impostazioni icone cartella"
                }
            },
            modal: {
                change: "Cambia la dimensione dell'icona cartella",
                save: "Salva",
                unset: "Rimuovi",
                set: "Imposta Nuova Icona",
                hover: "Potrebbe essere necessario passare il mouse sulla cartella dopo l'impostazione per aggiornarla."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Ti permette di impostare il tempo prima che Discord vada in 'Assente' (o disabilitarlo)",
            backOnline: "Bentornato! Clicca il pulsante per tornare online. Clicca la X per restare assente.",
            exit: "Esci da Assente",
            option: {
                idleTimeout: {
                    label: "Timeout Assenza",
                    description: "Minuti prima che Discord vada in assente (0 per disabilitare)"
                },
                remainInIdle: {
                    label: "Resta in Assente",
                    description: "Quando torni su Discord, resta in assente finché non confermi di voler tornare online"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Aggiunge una Rich Presence (Stato di gioco) completamente personalizzabile al tuo profilo",
            goTo: "Vai al {{portal}} per creare un'applicazione e ottenere l'ID.",
            upload: "Carica le immagini nella scheda Rich Presence per ottenere le chiavi.",
            image: "Se vuoi usare un link immagine, caricala su {{imgur}} e copia l'indirizzo dell'immagine.",
            button: "Non puoi vedere i tuoi pulsanti sul tuo profilo, ma gli altri li vedranno correttamente.",
            font: "Alcuni caratteri unicode speciali potrebbero impedire la visualizzazione, prova a usare lettere normali.",
            placeholder: "Inserisci un valore",
            select: "Seleziona un'opzione",
            error: {
                appIdInvalid: "L'ID App deve essere un numero valido.",
                notice: "Avviso",
                sharing: "La condivisione attività non è abilitata, gli altri non vedranno la tua presenza personalizzata!",
                enable: "Abilita",
                validStream: "Il link streaming deve essere un URL valido.",
                mustBeURL: "Deve essere un URL valido.",
                streamCharacters: "Il link streaming non deve superare i 512 caratteri.",
                dontUse: "Non usare un link Discord. Usa un link Imgur.",
                imgur: "Il link Imgur deve essere un link diretto all'immagine (es. https://i.imgur.com/...).",
                tenor: "Il link Tenor deve essere un link diretto alla GIF (es. https://media.tenor.com/...).",
                required: "Questo campo è obbligatorio.",
                tooLong: "Non deve superare i {{maxLength}} caratteri.",
                mustBeNumber: "Deve essere un numero.",
                mustBePositive: "Deve essere un numero positivo.",
                startTimeInvalid: "Il timestamp di inizio deve essere maggiore di 0.",
                endTimeInvalid: "Il timestamp di fine deve essere maggiore di 0."
            },
            option: {
                appId: {
                    label: "ID App",
                    description: "ID Applicazione (richiesto)"
                },
                appName: {
                    label: "Nome App",
                    description: "Nome Applicazione (richiesto)"
                },
                details: {
                    label: "Dettagli",
                    description: "Dettagli (riga 1)"
                },
                detailsURL: {
                    label: "URL Dettagli",
                    description: "URL cliccabile per i dettagli"
                },
                state: {
                    label: "Stato",
                    description: "Stato (riga 2)"
                },
                stateURL: {
                    label: "URL Stato",
                    description: "URL cliccabile per lo stato"
                },
                partySize: {
                    label: "Dimensione Gruppo",
                    description: "Dimensione attuale del gruppo (da usare con Dimensione Max)"
                },
                partyMax: {
                    label: "Dimensione Max Gruppo",
                    description: "Dimensione massima del gruppo"
                },
                type: {
                    label: "Tipo attività",
                    description: "Tipo di attività",
                    playing: "In gioco",
                    streaming: "In streaming",
                    listening: "In ascolto",
                    watching: "In visione",
                    competing: "In competizione"
                },
                streamLink: {
                    label: "Link Stream",
                    description: "Link Twitch.tv o YouTube.com (solo per tipo Streaming)"
                },
                timestampMode: {
                    label: "Modalità Timestamp",
                    description: "Cosa deve mostrare il tempo",
                    none: "Nessuno",
                    sinceDiscordOpen: "Da quando Discord è aperto",
                    sameAsCurrentTime: "Stessa ora attuale",
                    custom: "Tempo Personalizzato"
                },
                startTime: {
                    label: "Ora Inizio (ms)",
                    description: "Timestamp di inizio in millisecondi"
                },
                endTime: {
                    label: "Ora Fine (ms)",
                    description: "Timestamp di fine in millisecondi"
                },
                imageBig: {
                    label: "Chiave Immagine Grande",
                    description: "Chiave caricata nel portale sviluppatori"
                },
                imageBigTooltip: {
                    label: "Suggerimento Immagine Grande",
                    description: "Testo al passaggio del mouse"
                },
                imageBigURL: {
                    label: "URL Immagine Grande",
                    description: "URL cliccabile immagine grande"
                },
                imageSmall: {
                    label: "Chiave Immagine Piccola",
                    description: "Chiave immagine piccola"
                },
                imageSmallTooltip: {
                    label: "Suggerimento Immagine Piccola",
                    description: "Testo al passaggio del mouse"
                },
                imageSmallURL: {
                    label: "URL Immagine Piccola",
                    description: "URL cliccabile immagine piccola"
                },
                buttonOneText: {
                    label: "Testo Pulsante 1",
                    description: "Testo del primo pulsante"
                },
                buttonOneURL: {
                    label: "URL Pulsante 1",
                    description: "URL del primo pulsante"
                },
                buttonTwoText: {
                    label: "Testo Pulsante 2",
                    description: "Testo del secondo pulsante"
                },
                buttonTwoURL: {
                    label: "URL Pulsante 2",
                    description: "URL del secondo pulsante"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Personalizza i suoni di Discord.",
            search: "Cerca suoni",
            placeholder: "Cerca per nome o ID",
            import: "Importa",
            export: "Esporta",
            reset: "Ripristina Tutto",
            debug: "Debug",
            toast: {
                error: "Errore caricamento file audio personalizzato",
                exported: "Esportate {{count}} impostazioni (file audio esclusi)",
                imported: "Impostazioni importate con successo",
                importError: "Errore durante l'importazione. Controlla la console.",
                reset: "Tutti i suoni ripristinati!",
                overrideDescription: "Sostituzione per {{soundName}}",
                previewSound: "Errore riproduzione suono.",
                playing: "Errore riproduzione suono personalizzato. Il file potrebbe essere corrotto.",
                invalidFile: "Nessun file audio disponibile per l'anteprima",
                uploaded: "File caricato: {{fileName}}",
                uploadedError: "Errore caricamento: {{error}}",
                invalidExtension: "Tipo file non valido. Carica un file audio.",
                uploading: "Caricamento file...",
                deleted: "File eliminato con successo",
                deleteError: "Errore eliminazione file.",
                loadingError: "Errore caricamento file audio"
            },
            button: {
                preview: "Anteprima",
                stop: "Stop",
                volume: "Volume",
                soundSource: "Sorgente Suono",
                customFile: "File Personalizzato",
                uploadNew: "Carica Nuovo",
                delete: "Elimina File Selezionato"
            },
            option: {
                default: "Predefinito",
                custom: "Personalizzato",
                select: "Seleziona un file..."
            },
            type: {
                activityEnd: "Fine Attività",
                activityLaunch: "Avvio Attività",
                activityUserJoin: "Utente Entra in Attività",
                activityUserLeft: "Utente Esce da Attività",
                asmrMessage: "Messaggio ASMR",
                bitMessage: "Messaggio Bit",
                bopMessage: "Messaggio Bop",
                callCalling: "Chiamata in Uscita",
                callRinging: "Chiamata in Entrata",
                clipError: "Errore Clip",
                clipSave: "Salvataggio Clip",
                ddrDown: "DDR Giù",
                ddrLeft: "DDR Sinistra",
                ddrRight: "DDR Destra",
                ddrUp: "DDR Su",
                deafen: "Audio Disattivato",
                discodo: "Discodo",
                disconnect: "Disconnesso",
                duckyMessage: "Messaggio Paperella",
                hangStatusSelect: "Selezione Stato Sospeso",
                highfiveClap: "Batti Cinque",
                highfiveWhistle: "Fischio Batti Cinque",
                humanMan: "Uomo Umano",
                lofiMessage: "Messaggio LoFi",
                mention1: "Menzione 1 (@ruolo)",
                mention2: "Menzione 2 (@everyone)",
                mention3: "Menzione 3 (@here)",
                message1: "Messaggio 1 (Generico)",
                message2: "Messaggio 2 (Risposta in Server)",
                message3: "Messaggio 3 (DM e Gruppi)",
                mute: "Microfono Disattivato",
                overlayUnlock: "Sblocco Overlay",
                poggermodeAchievement: "Obiettivo Poggermode",
                poggermodeApplause: "Applauso Poggermode",
                poggermodeEnabled: "Poggermode Abilitato",
                poggermodeMessage: "Messaggio Poggermode",
                pttStart: "Inizio PTT",
                pttStop: "Fine PTT",
                reconnect: "Riconnesso",
                robotMan: "Uomo Robot",
                stageWaiting: "Attesa Stage",
                streamEnded: "Streaming Terminato",
                streamStarted: "Streaming Iniziato",
                streamUserJoined: "Utente Entrato in Streaming",
                streamUserLeft: "Utente Uscito da Streaming",
                success: "Successo",
                undeafen: "Audio Attivato",
                unmute: "Microfono Attivato",
                userJoin: "Utente Entrato",
                userLeave: "Utente Uscito",
                userMoved: "Utente Spostato",
                vibingWumpus: "Wumpus in Vibrazione"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Timestamp personalizzati su messaggi e suggerimenti",
            demo: {
                cozy: "Cliccami per passare al formato Cozy",
                compact: "Cliccami per passare al formato Compatto",
                lastWeek: "Questo messaggio è stato inviato nell'ultima settimana",
                hover: "Passa il mouse sui timestamp per vedere i formati",
                edit: "Modifica i formati sotto per vederli aggiornati qui in tempo reale"
            },
            modal: {
                title: "Come usare:",
                moment: "Documentazione formattazione Moment.js",
                hint: "Puoi usare anche questi nei tuoi input:",
                calendar: "abilita la formattazione dinamica delle date come",
                today: "Oggi",
                yesterday: "Ieri",
                relative: "ti dà orari come",
                relativeTime: "4 ore fa",
                preview: "Anteprima",
                format: "Formati calendario",
                howTo: "Come formattare il valore [calendar] se usato nei timestamp."
            },
            option: {
                formats: {
                    label: "Formati",
                    description: "Personalizza i formati dei timestamp",
                },
                cozyFormat: {
                    label: "Modalità Cozy",
                    description: "Formato ora nei messaggi in modalità cozy"
                },
                compactFormat: {
                    label: "Modalità Compatta",
                    description: "Formato ora in modalità compatta e al passaggio del mouse"
                },
                tooltipFormat: {
                    label: "Suggerimento (Tooltip)",
                    description: "Formato ora usato nei tooltip"
                },
                ariaLabelFormat: {
                    label: "Etichetta Aria",
                    description: "Formato ora usato nelle etichette per l'accessibilità"
                },
                sameDayFormat: {
                    label: "Stesso giorno",
                    description: "Formato [calendar] per oggi",
                    default: "[Oggi alle] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Giorno precedente",
                    description: "Formato [calendar] per ieri",
                    default: "[Ieri alle] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Ultima settimana",
                    description: "Formato [calendar] per l'ultima settimana"
                },
                sameElseFormat: {
                    label: "Date precedenti",
                    description: "Formato [calendar] per date più vecchie"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Ti permette di aggiungere un colore personalizzato a qualsiasi utente! Si consiglia l'uso con typingTweaks e roleColorEverywhere",
            option: {
                dmList: {
                    label: "Lista DM",
                    description: "Gli utenti con colori personalizzati avranno il nome colorato nella lista dei DM"
                },
                colorInServers: {
                    label: "Colore nei Server",
                    description: "Indica se i colori dei nomi devono essere cambiati all'interno dei server"
                }
            },
            context: {
                setColor: "Imposta Colore"
            },
            modal: {
                custom: "Colore Personalizzato",
                pick: "Scegli un colore",
                delete: "Elimina Voce",
                save: "Salva"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Rende i titoli e le miniature dei video YouTube incorporati meno sensazionalistici, grazie a DeArrow",
            option: {
                hideButton: {
                    label: "Nascondi Pulsante",
                    description: "Nasconde il pulsante DeArrow dai video YouTube incorporati"
                },
                replaceElements: {
                    label: "Sostituisci Elementi",
                    description: "Scegli quali elementi dell'incorporamento sostituire",
                    everything: "Tutto (Titoli e Miniature)",
                    title: "Titoli",
                    thumbnail: "Miniature"
                },
                dearrowByDefault: {
                    label: "DeArrow Predefinito",
                    description: "Applica DeArrow ai video automaticamente"
                }
            },
            tooltip: {
                dearrowed: "Questo video è stato DeArrowed; clicca per ripristinare",
                dearrow: "Clicca per applicare DeArrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Pulisce Discord rimuovendo elementi non essenziali come effetti profilo, schede negozio, potenziamenti e altro.",
            option: {
                userProfileHeader: {
                    label: "Profilo Utente"
                },
                removeNameplate: {
                    label: "Rimuovi Targhetta (Nameplate)",
                    description: "Rimuove le targhette dei nomi."
                },
                removeProfileEffect: {
                    label: "Rimuovi Effetto Profilo",
                    description: "Rimuove gli effetti di animazione all'apertura del profilo."
                },
                removeClanTag: {
                    label: "Rimuovi Tag Clan",
                    description: "Rimuove i tag dei clan."
                },
                alwaysShowUsername: {
                    label: "Mostra Sempre Nome Utente",
                    description: "Mostra sempre il nome utente al posto dello stato."
                },
                accessibilityNotice: {
                    label: "Avviso Accessibilità",
                    description: "Discord ha già un'opzione integrata per lo stile del nome utente nelle impostazioni di Accessibilità."
                },
                friendsListHeader: {
                    label: "Sopra la Lista Amici/DM"
                },
                removeShopAboveDM: {
                    label: "Rimuovi Negozio sopra i DM",
                    description: "Rimuove il link al negozio sopra la lista dei messaggi diretti."
                },
                removeQuestsAboveDM: {
                    label: "Rimuovi Quest sopra i DM",
                    description: "Rimuove le missioni (quest) sopra la lista dei messaggi diretti."
                },
                miscHeader: {
                    label: "Varie"
                },
                removeServerBoostInfo: {
                    label: "Rimuovi Info Boost Server",
                    description: "Rimuove le info sul potenziamento del server sopra la lista canali."
                },
                removeBillingSettings: {
                    label: "Rimuovi Impostazioni Fatturazione",
                    description: "Rimuove le impostazioni relative alla fatturazione."
                },
                removeGiftButton: {
                    label: "Rimuovi Pulsante Regalo",
                    description: "Rimuove il pulsante per regalare Nitro."
                },
                removeUnavailableEmojiPicker: {
                    label: "Rimuovi Emoji Non Disponibili",
                    description: "Rimuove le categorie non disponibili dal selettore di emoji."
                },
                removeAudioMenus: {
                    label: "Rimuovi Menu Audio",
                    description: "Rimuove i menu accanto ai pulsanti silenziamento audio/microfono."
                },
                removeButtonTooltips: {
                    label: "Rimuovi Suggerimenti Pulsanti",
                    description: "Rimuove i suggerimenti (tooltip) che appaiono sui pulsanti."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Decodifica il contenuto Base64 di qualsiasi messaggio e copia il risultato.",
            right: {
                decode: "Copia Decodificato (Clic Sx) / Decodifica Base64 (Clic Dx)",
                copy: "Decodifica Base64 (Clic Sx) / Copia Decodificato (Clic Dx)"
            },
            option: {
                clickMethod: {
                    label: "Metodo Clic",
                    description: "Cambia il modo di interagire col pulsante per decodificare i messaggi Base64.",
                    left: "Clic sinistro per decodificare.",
                    right: "Clic destro per decodificare."
                }
            },
            modal: {
                title: "Contenuto Base64 Decodificato",
                content: "Contenuto Decodificato",
                copy: "Copia Contenuto Decodificato {{index}}",
                copied: "Contenuto decodificato copiato negli appunti!"
            }
        },
        decor: {
            name: "Decor",
            description: "Crea e usa le tue decorazioni avatar personalizzate, o scegline una dai preset.",
            presetPart: "Parte del Preset {{name}}",
            createdBy: "Creato da {{author}}",
            copy: "Copia ID Preset",
            file: "File",
            your: {
                title: "Le tue Decorazioni",
                subtitle: "Puoi eliminare le tue decorazioni cliccandoci col tasto destro."
            },
            option: {
                changeDecoration: {
                    label: "Cambia Decorazione",
                    description: "Abilita Decor e riavvia il client per cambiare la tua decorazione avatar.",
                    also: "Puoi accedere alle decorazioni Decor anche dalla pagina {{profiles}}.",
                    profiles: "Profili"
                },
                baseUrl: {
                    label: "URL Base",
                    description: "URL dell'API Decor"
                },
                agreedToGuidelines: {
                    label: "Linee Guida Accettate",
                    description: "Hai accettato le linee guida"
                }
            },
            context: {
                decorationOptions: "Opzioni Decorazione",
                copyHash: "Copia Hash Decorazione",
                deleteDecoration: "Elimina Decorazione"
            },
            alert: {
                delete: {
                    title: "Elimina Decorazione",
                    body: "Sei sicuro di voler eliminare {{decoration}}?",
                    confirm: "Elimina",
                    cancel: "Annulla"
                },
                logout: {
                    title: "Esci",
                    body: "Sei sicuro di voler uscire da Decor?",
                    confirm: "Esci",
                    cancel: "Annulla"
                }
            },
            button: {
                change: "Cambia Decorazione",
                remove: "Rimuovi Decorazione",
                apply: "Applica",
                cancel: "Annulla",
                browse: "Sfoglia",
                submit: "Invia per Revisione",
                continue: "Continua",
                back: "Torna Indietro"
            },
            tooltip: {
                pendingReview: "Hai già una decorazione in attesa di revisione",
                pending: "In Revisione"
            },
            join: {
                tooltip: "Unisciti al server Discord di Decor per notifiche sulla revisione e nuovi preset",
                button: "Server Discord"
            },
            create: {
                title: "Crea Decorazione",
                notViolate: "Assicurati che la tua decorazione non violi {{guidelines}} prima di inviarla.",
                guidelines: "le linee guida",
                file: "Il file deve essere APNG o PNG.",
                fileHolder: "Scegli un file",
                name: "Questo nome verrà usato per riferirsi alla decorazione.",
                nameHolder: "Companion Cube",
                nameTitle: "Nome"
            },
            help: {
                update: "Per ricevere aggiornamenti sulla revisione, unisciti a {{server}} e attiva i messaggi diretti.",
                server: "Server Discord di Decor"
            },
            guidelines: {
                hold: "Aspetta un attimo",
                suspended: "Inviando una decorazione, accetti {{guidelines}}. Ignorarle può portare alla sospensione dell'account.",
                guidelines: "le linee guida"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin per scattare screenshot dei temi - censura testi e immagini identificative.",
            toolbox: {
                toggle: "Attiva/Disattiva Demonstration"
            },
            keycode: "Per cambiare il tasto, controlla {{keycode}}!",
            this: "questo strumento",
            okay: "Okay!",
            option: {
                keyBind: {
                    label: "Tasto Scorciatoia",
                    description: "Il tasto per attivare il tema quando premuto"
                },
                soundVolume: {
                    label: "Volume Suono",
                    description: "Volume del suono di attivazione (0 per disabilitare)"
                },
                showConfirmationModal: {
                    label: "Mostra Finestra di Conferma",
                    description: "Mostra una finestra per ricordarti la scorciatoia"
                }
            },
            switch: {
                note: "Puoi riabilitare questa impostazione in seguito",
                disable: "Disabilitare la finestra?"
            },
            shortcut: "Questo censurerà tutto il testo! Per disabilitarlo, ricorda la scorciatoia:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Plugin Dev Companion. Segnala qualsiasi malfunzionamento a MutanPlex tramite ping o DM. Grazie!",
            reconnect: "Riconnetti",
            option: {
                notifyOnAutoConnect: {
                    label: "Notifica su Connessione Automatica",
                    description: "Indica se notificare quando Dev Companion si connette automaticamente."
                },
                usePatchedModule: {
                    label: "Usa Modulo Patchato",
                    description: "Sulle richieste di estrazione, risponde con il modulo attualmente patchato invece dell'originale."
                },
                reloadAfterToggle: {
                    label: "Ricarica dopo Attivazione",
                    description: "Ricarica dopo la ricezione di un comando 'abilita/disabilita plugin'."
                }
            },
            toast: {
                title: "Dev Companion Connesso",
                connected: "Connesso al WebSocket",
                disconnected: "Dev Companion Disconnesso",
                error: "Errore Dev Companion",
                reload: "Ricaricamento Necessario",
                failed: "Avvio dipendenze fallito: {{failures}}",
                close: "Chiudi",
                stopping: "Errore arresto plugin {{plugin}}",
                starting: "Errore avvio plugin {{plugin}}",
                noMessage: "Nessun messaggio di errore",
                noReason: "Nessuna ragione fornita"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Impedisce di essere espulsi automaticamente da una chiamata vocale DM dopo 3 minuti o di essere spostati in un canale AFK."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Disabilita le telecamere in una chiamata per impostazione predefinita"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Abilita il banner sviluppatore di Discord, che visualizza il Build ID",
            about: "Formato per il Discord Dev Banner. Puoi usare le seguenti variabili:",
            preview: "Anteprima:",
            empty: "Il formato non può essere vuoto.",
            variables: {
                discord: {
                    title: "Variabili Discord",
                    icon: "Icona Discord",
                    banner: "Icona banner dev",
                    channel: "Canale build Discord (es. Stable)",
                    build: "Numero build Discord",
                    hash: "Hash build Discord"
                },
                plexcord: {
                    title: "Variabili Plexcord",
                    icon: "Icona Plexcord",
                    name: "Nome di Plexcord",
                    version: "Versione di Plexcord",
                    hash: "Hash build Plexcord",
                    platform: "Piattaforma su cui gira Plexcord"
                },
                plextron: {
                    title: "Variabili Plextron",
                    hashShort: "Hash build Plextron breve",
                    platformType: "Tipo piattaforma Plextron"
                },
                client: {
                    title: "Variabili Client",
                    icon: "Icona Desktop",
                    name: "Nome del client (es. Discord Canary)",
                    version: "Versione del client",
                },
                electron: {
                    title: "Variabili Electron",
                    icon: "Icona Electron",
                    version: "Versione Electron"
                },
                chromium: {
                    title: "Variabili Chromium",
                    icon: "Icona Chromium",
                    version: "Versione motore Chromium"
                },
                misc: {
                    title: "Variabili Varie",
                    newline: "Carattere nuova riga"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Ti avvisa se il tuo messaggio contiene un termine presente nella lista AutoMod",
            alert: {
                title: "Aspetta!",
                content: "Il tuo messaggio contiene un termine nella lista AutoMod (Termine: '{{trigger}}').",
                content2: "C'è un'alta probabilità che il messaggio venga bloccato o moderato.",
                confirm: "Invia Comunque",
                cancel: "Annulla"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Arrotonda sempre per difetto i timestamp relativi (es. 7.6 anni diventa 7 anni invece di 8)"
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Aggiunge la funzione trascina e rilascia alle emoji preferite"
        },
        dragify: {
            name: "Dragify",
            description: "Trascina utenti, canali o server in chat per inserire menzioni o inviti.",
            option: {
                userOutput: {
                    label: "Output Utente",
                    description: "Cosa inserire al rilascio dell'utente.",
                    mention: "Menzione",
                    id: "ID Utente"
                },
                channelOutput: {
                    label: "Output Canale",
                    description: "Cosa inserire al rilascio del canale.",
                    mention: "Menzione #canale",
                    link: "Link Canale",
                },
                inviteExpireAfter: {
                    label: "Scadenza Invito",
                    description: "Dopo quanto tempo scade l'invito",
                    never: "Mai",
                    thirtyMinutes: "30 Minuti",
                    oneHour: "1 Ora",
                    sixHours: "6 Ore",
                    twelveHours: "12 Ore",
                    oneDay: "1 Giorno",
                    sevenDays: "7 Giorni"
                },
                inviteMaxUses: {
                    label: "Usi Massimi Invito",
                    description: "Numero massimo di utilizzi per l'invito",
                    noLimit: "Nessun Limite",
                    one: "1 Utilizzo",
                    five: "5 Utilizzi",
                    ten: "10 Utilizzi",
                    twentyFive: "25 Utilizzi",
                    fifty: "50 Utilizzi",
                    hundred: "100 Utilizzi"
                },
                inviteTemporaryMembership: {
                    label: "Appartenenza Temporanea Invito",
                    description: "Concedi l'appartenenza temporanea.",
                },
                reuseExistingInvites: {
                    label: "Riusa Invito Esistente",
                    description: "Riusa un invito esistente invece di crearne uno nuovo."
                },
                allowChatBodyDrop: {
                    label: "Consenti Rilascio nel Corpo Chat",
                    description: "Permette di rilasciare nel corpo principale della chat per inserire testo."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify: errore nella gestione del rilascio.",
                },
                invite: {
                    created: "Invito creato.",
                    unable: "Impossibile creare l'invito.",
                    noChannel: "Nessun canale disponibile per gli inviti.",
                }
            },
            ghost: {
                user: "Utente",
                server: "Server",
                dm: "Messaggi Diretti",
                badge: {
                    channel: "canale",
                    thread: "thread",
                    voice: "voce",
                    forum: "forum",
                    media: "media",
                    announcement: "annuncio",
                    dm: "dm",
                    user: "utente",
                    server: "server"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Evidenzia e ispeziona gli elementi dell'interfaccia con facilità.",
            modal: {
                recording: "Registrazione...",
                reset: "Ripristina"
            },
            option: {
                keybind: {
                    label: "Tasto Scorciatoia",
                    description: "Attiva/Disattiva Evidenziatore"
                },
                showClasses: {
                    label: "Mostra Classi",
                    description: "Visualizza i nomi delle classi CSS dell'elemento nel suggerimento"
                },
                showId: {
                    label: "Mostra ID",
                    description: "Visualizza l'attributo ID dell'elemento nel suggerimento"
                },
                showFont: {
                    label: "Mostra Font",
                    description: "Visualizza la famiglia di font calcolata ve la dimensione"
                },
                showPadding: {
                    label: "Mostra Padding",
                    description: "Visualizza i valori di spaziatura interna (padding) dell'elemento"
                },
                showMargin: {
                    label: "Mostra Margine",
                    description: "Visualizza i valori di margine dell'elemento"
                },
                showBorderRadius: {
                    label: "Mostra Arrotondamento Bordi",
                    description: "Visualizza i valori di border-radius dell'elemento"
                },
                showPosition: {
                    label: "Mostra Posizione",
                    description: "Visualizza il tipo di posizionamento CSS ve lo z-index"
                },
                showDisplay: {
                    label: "Mostra Display",
                    description: "Visualizza il tipo di display (flex, grid, ecc.) e le sue proprietà"
                }
            },
            toast: {
                copied: {
                    color: "Colore copiato negli appunti!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Riproduci suoni della soundboard quando ti disconnetti dai canali vocali.",
            button: "Imposta come suono di uscita globale",
            toast: {
                failedToPlay: "Ops! Qualcosa è andato storto."
            },
            option: {
                soundGuildId: {
                    label: "ID Server del Suono",
                    description: "Seleziona il server che contiene il suono.",
                    placeholder: "Seleziona un server..."
                },
                soundId: {
                    label: "ID Suono",
                    description: "Inserisci l'ID del suono che vuoi riprodurre.",
                    placeholder: "Inserisci ID suono..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Abilita l'accesso agli esperimenti e ad altre funzioni per sviluppatori in Discord!",
            modal: {
                about: {
                    title: "Ulteriori Informazioni",
                    body: "Puoi aprire i DevTools di Discord tramite {{key}}"
                },
                warning: {
                    title: "Aspetta un attimo!!",
                    body: "Gli esperimenti sono funzioni di Discord non ancora rilasciate. Potrebbero non funzionare, rompere il client o far disabilitare l'account.",
                    notReponsible: "Usa gli esperimenti solo se sai cosa stai facendo. Plexcord non è responsabile per eventuali danni causati.",
                    useAtOwnRisk: "Se non sai a cosa serve un esperimento, ignoralo. Non chiederci cosa fanno, probabilmente non lo sappiamo nemmeno noi.",
                    serverSideFeatures: "No, non puoi usare funzioni lato server come spuntare la casella 'Send to Client'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Menu Sviluppatore Toolbar",
                    description: "Cambia il pulsante Aiuto (?) della barra strumenti (in alto a destra) nel menu sviluppatore di Discord"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Ti permette di esportare i messaggi in file: messaggi singoli, di un utente specifico o dell'intero canale",
            option: {
                maxMessages: {
                    label: "Limite Messaggi",
                    description: "Numero massimo di messaggi da esportare (0 = illimitato)"
                },
                includeAttachments: {
                    label: "Includi Allegati",
                    description: "Includi le informazioni sugli allegati nelle esportazioni"
                },
                includeEmbeds: {
                    label: "Includi Embed",
                    description: "Includi le informazioni sugli embed nelle esportazioni"
                },
                includeReactions: {
                    label: "Includi Reazioni",
                    description: "Includi le informazioni sulle reazioni nelle esportazioni"
                },
                includeComponents: {
                    label: "Includi Componenti",
                    description: "Includi le informazioni sui componenti nelle esportazioni"
                }
            },
            message: {
                invalid: "Messaggio non valido — nessun autore",
                unknownUser: "Utente Sconosciuto",
                botEmbed: "Messaggio Embed del Bot",
                attachments: "Allegati",
                unknown: "Sconosciuto",
                noUrl: "Nessun URL",
                embeds: "Embed",
                title: "Titolo",
                description: "Descrizione",
                url: "URL",
                footer: "Piè di pagina (Footer)",
                author: "Autore",
                fields: "Campi",
                components: "Componenti",
                component: "Componente",
                interactiveElement: "Elemento Interattivo",
                reactions: "Reazioni",
                errorFormatting: "Errore nella formattazione del messaggio",
                unknownError: "Errore sconosciuto",
                header: "{{titlePrefix}} {{displayName}} in {{channelName}}",
                from: "Messaggi da",
                direct: "Messaggi Diretti",
                exported: "Esportato il",
                total: "Totale messaggi"
            },
            toast: {
                export: {
                    title: "Esporta Messaggi",
                    body: "Esportazione messaggio fallita"
                },
                noMessages: {
                    title: "Esporta Messaggi",
                    notFoundUser: "Nessun messaggio trovato da questo utente in questo canale",
                    notFoundChannel: "Nessun messaggio trovato in questo canale"
                },
                failed: {
                    title: "Esporta Messaggi",
                    body: "Esportazione messaggi fallita"
                },
                userNotFound: {
                    title: "Esporta Messaggi",
                    body: "Utente non trovato"
                },
                complete: {
                    title: "Esportazione Completata",
                    saved: "File salvato",
                    downloaded: "File scaricato",
                    messages: "messaggi"
                }
            },
            context: {
                exportMessage: "Esporta Questo Messaggio",
                exportAll: "Esporta tutti i messaggi di {{user}}",
                user: "Utente",
                exportAllChannel: "Esporta Tutti i Messaggi del Canale"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Ti permette di clonare emoji e sticker nel tuo server (clicca col tasto destro su di essi)",
            modal: {
                title: "Nome Personalizzato",
                invalidName: "Il nome deve avere tra 2 e 32 caratteri e contenere solo caratteri alfanumerici"
            },
            toast: {
                success: "Clonato con successo {{name}} in {{guild}}!",
                yourServer: "il tuo server",
                failed: "Clonazione fallita: ",
                console: "Qualcosa è andato storto (controlla la console!)"
            },
            context: {
                clone: "Clona {{type}}",
                cloneName: "Clona {{data}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Mette in pausa il client quando premi F8 con i DevTools (e i breakpoint) aperti."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Ti permette di inviare emoji/sticker falsi, usare i temi Nitro e streammare in qualità Nitro",
            option: {
                enableEmojiBypass: {
                    label: "Abilita Bypass Emoji",
                    description: "Permette di inviare emoji false (ignora anche la mancanza di permessi per emoji personalizzate)"
                },
                emojiSize: {
                    label: "Dimensione Emoji",
                    description: "Dimensione delle emoji durante l'invio"
                },
                transformEmojis: {
                    label: "Trasforma Emoji",
                    description: "Indica se trasformare le emoji finte in reali"
                },
                enableStickerBypass: {
                    label: "Abilita Bypass Sticker",
                    description: "Permette di inviare sticker falsi (ignora anche la mancanza di permessi per gli sticker)"
                },
                stickerSize: {
                    label: "Dimensione Sticker",
                    description: "Dimensione degli sticker durante l'invio"
                },
                transformStickers: {
                    label: "Trasforma Sticker",
                    description: "Indica se trasformare gli sticker finti in reali"
                },
                transformCompoundSentence: {
                    label: "Trasforma Frasi Composte",
                    description: "Trasforma sticker e emoji finte anche in frasi che contengono altro testo"
                },
                enableStreamQualityBypass: {
                    label: "Abilita Bypass Qualità Stream",
                    description: "Consente lo streaming in qualità Nitro"
                },
                useStickerHyperLinks: {
                    label: "Usa Collegamenti Ipertestuali Sticker",
                    description: "Usa gli hyperlink durante l'invio di sticker falsi"
                },
                useEmojiHyperLinks: {
                    label: "Usa Collegamenti Ipertestuali Emoji",
                    description: "Usa gli hyperlink durante l'invio di emoji false"
                },
                hyperLinkText: {
                    label: "Testo Hyperlink",
                    description: "Testo da usare per l'hyperlink. {{NAME}} sarà sostituito dal nome dell'emoji/sticker."
                },
                disableEmbedPermissionCheck: {
                    label: "Disabilita Controllo Permessi Embed",
                    description: "Disabilita il controllo dei permessi per i link quando invii elementi FakeNitro"
                }
            },
            modal: {
                sticker: "Questo è uno sticker FakeNitro; appare come sticker reale solo per te. Per gli altri utenti apparirà come un link.",
                emoji: "Questa è un'emoji FakeNitro; appare come emoji reale solo per te. Per gli altri utenti apparirà come un link."
            },
            alert: {
                notice: {
                    title: "Aspetta!",
                    body: "Stai provando a inviare/modificare un messaggio con elementi FakeNitro, ma non hai il permesso di inserire link nel canale. Sei sicuro? Verranno visualizzati solo come link testuali.",
                    footer: "Puoi disabilitare questo avviso nelle impostazioni di FakeNitro",
                    confirm: "Invia Comunque",
                    cancel: "Annulla",
                    secondaryConfirm: "Non mostrare più"
                },
                apngSticker: {
                    title: "Aspetta!",
                    body: "Non puoi inviare questo messaggio perché contiene uno sticker FakeNitro animato e non hai il permesso di allegare file in questo canale. Rimuovi lo sticker per procedere."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Permette di personalizzare i temi del profilo nascondendo i colori nella bio grazie alla codifica 3y3 invisibile",
            button: {
                copy: "Copia 3y3"
            },
            modal: {
                usage: "Utilizzo",
                preview: "Anteprima",
                intro: "Dopo aver abilitato questo plugin, vedrai i colori personalizzati nei profili di altri utenti che usano plugin compatibili.",
                setColor: "Per impostare i tuoi colori:",
                step1: "• Usa i selettori qui sotto per scegliere i colori",
                step2: "• Clicca sul pulsante {{copy}}",
                step3: "• Incolla il testo invisibile ovunque nella tua bio",
                pickers: "Selettori Colore",
                primary: "Primario",
                accent: "Accento"
            },
            option: {
                nitroFirst: {
                    label: "Nitro per Primo",
                    description: "Fonte di colore predefinita se sono presenti entrambi",
                    nitro: "Colori Nitro",
                    fake: "Colori Fake"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Permette di personalizzare temi ed effetti del profilo nascondendo i dati nella bio tramite codifica 3y3 invisibile",
            option: {
                prioritizeNitro: {
                    label: "Priorità a Nitro",
                    description: "Sorgente a cui dare la priorità",
                    nitro: "Nitro",
                    aboutMe: "Bio (Informazioni su di me)"
                },
                hideBuilder: {
                    label: "Nascondi Builder",
                    description: "Nascondi il Builder FPTE nelle pagine delle impostazioni del profilo"
                }
            },
            modal: {
                primary: "Primario",
                accent: "Accento",
                effect: "Effetto",
                usage: {
                    title: "Utilizzo",
                    intro: "Dopo aver abilitato questo plugin, vedrai i temi e gli effetti personalizzati nei profili degli altri utenti che usano questo plugin.",
                    setColor: "Per impostare i tuoi colori ed effetti:",
                    step1: "Vai alle impostazioni del tuo profilo",
                    step2: "Usa il Builder FPTE per scegliere i colori e l'effetto",
                    step3: "Clicca sul pulsante {{copy}}",
                    step4: "Incolla il testo invisibile ovunque nella tua bio"
                }
            },
            toast: {
                copied: "FPTE copiato negli appunti!",
                empty: "Il Builder FPTE è vuoto; nulla da copiare!"
            },
            button: {
                copyFPTE: "Copia FPTE",
                reset: "Ripristina",
                preview: "Anteprima Builder FPTE",
                buildBackwards: "Costruisci FPTE retrocompatibile",
                moreCharacters: "Userà più caratteri"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Aggiunge un'icona del cestino per eliminare rapidamente i canali",
            option: {
                keyBind: {
                    label: "Tasto Scorciatoia",
                    description: "Il tasto per attivare/disattivare l'icona del cestino."
                },
                reqCtrl: {
                    label: "Richiedi Control",
                    description: "Richiede che il tasto Ctrl sia premuto."
                },
                reqShift: {
                    label: "Richiedi Shift",
                    description: "Richiede che il tasto Shift sia premuto."
                },
                reqAlt: {
                    label: "Richiedi Alt",
                    description: "Richiede che il tasto Alt sia premuto."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Mette le tue emoji preferite per prime nel completamento automatico e fornisce alias per le emoji.",
            option: {
                aliases: {
                    label: "Alias",
                    description: "Gestisci i tuoi alias per le emoji."
                },
                clearAll: {
                    label: "Cancella Tutto",
                    description: "Elimina tutti gli alias."
                }
            },
            modal: {
                clear: {
                    title: "Elimina Tutti gli Alias",
                    description: "Questo rimuoverà ogni alias di emoji salvato.",
                    confirm: "Elimina tutti gli alias"
                },
                set: {
                    title: "Imposta Alias",
                    description: "Imposta un alias per {{emoji}}",
                    placeholder: "Alias, es. 'felice'",
                    save: "Salva",
                    error: "Alias duplicato"
                }
            },
            toast: {
                set: "Alias impostato per {{emoji}}",
                clearAll: "Eliminati tutti gli alias emoji",
                failedDeleted: "Eliminazione alias fallita",
                removed: "Alias rimosso: {{alias}}",
                failedRemove: "Rimozione alias fallita",
                duplicate: "Alias duplicato",
                failedSave: "Salvataggio alias fallito."
            },
            button: {
                edit: "Modifica alias",
                set: "Imposta alias"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "Aggiunge una barra di ricerca alle tue GIF preferite.",
            placeholder: "Cerca tra le GIF preferite",
            option: {
                searchOption: {
                    label: "Opzione di Ricerca",
                    description: "La parte dell'URL in cui cercare",
                    url: "Intero URL",
                    path: "Solo il percorso (/gif.gif)",
                    hostandpath: "Host e Percorso (tenor.com/gif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "Ti permette di aggiungere qualsiasi immagine ai preferiti"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Aggiunge un pulsante di download nell'angolo in alto a destra dei file"
        },
        findReply: {
            name: "FindReply",
            description: "Salta alla prima risposta a un messaggio in un canale (permette di seguire le conversazioni passate più facilmente).",
            context: {
                jump: "Vai alla Risposta"
            },
            toast: {
                navigate: "Usa il pannello inferiore per navigare tra le risposte.",
                container: "Impossibile trovare l'elemento contenitore.",
                couldntFind: "Impossibile trovare il messaggio di risposta."
            },
            option: {
                includePings: {
                    label: "Includi Ping",
                    description: "Cercherà anche i messaggi che menzionano direttamente l'autore"
                },
                includeAuthor: {
                    label: "Includi Autore",
                    description: "Cercherà risposte generiche all'autore, non solo a quel messaggio specifico"
                },
                hideButtonIfNoReply: {
                    label: "Nascondi Pulsante se Senza Risposta",
                    description: "Nasconde il pulsante se non ci sono risposte al messaggio"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Rimuove lo spazio tra i blocchi di codice (codeblock) e il testo sottostante"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Corregge le estensioni dei file rinominandole in un formato compatibile se possibile"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Migliora la qualità delle immagini forzando l'uso della sorgente originale",
            option: {
                originalImagesInChat: {
                    label: "Immagini Originali in Chat",
                    description: "Carica l'immagine originale anche in chat. ATTENZIONE: Leggi le avvertenze"
                }
            },
            modal: {
                about: {
                    title: "Il comportamento predefinito è il seguente:",
                    body: "&mdash; In chat, verranno caricate immagini ottimizzate ma a piena risoluzione.",
                    body2: "&mdash; Nel popup dell'immagine, verrà caricata l'immagine originale.",
                    body3: "Puoi abilitare le immagini originali in chat, ma tieni presente che:",
                    warning: "&mdash; Le immagini animate (GIF, WebP, ecc.) in chat saranno sempre animate, anche se l'app non è in primo piano.",
                    warning2: "&mdash; Potrebbe causare rallentamenti (lag).",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Corregge il volume eccessivo degli embed di Spotify permettendoti di personalizzarlo",
            option: {
                volume: {
                    label: "Volume",
                    description: "La % di volume per gli embed di Spotify. Sopra il 10% è già mooolto alto"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Aggira il blocco della visualizzazione dei video YouTube su Discord (ad esempio quelli bloccati da UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Aggiunge l'opzione Segui nel menu contestuale per essere sempre nello stesso canale vocale dell'utente",
            indicatorTooltip: "Seguendo {{user}} (clicca per attivare manualmente, tasto destro per smettere)",
            unknownUser: "Utente Sconosciuto",
            option: {
                executeOnFollow: {
                    label: "Esegui al Segui",
                    description: "Assicurati di essere nello stesso canale vocale quando inizi a seguire"
                },
                onlyManualTrigger: {
                    label: "Solo Attivazione Manuale",
                    description: "Attiva solo cliccando sull'indicatore"
                },
                followLeave: {
                    label: "Segui Uscita",
                    description: "Disconnettiti quando l'utente seguito esce dal canale"
                },
                autoMoveBack: {
                    label: "Ritorno Automatico",
                    description: "Torna automaticamente nel canale dell'utente seguito se vieni spostato"
                },
                followUserId: {
                    label: "ID Utente Seguito",
                    description: "ID dell'utente che si sta seguendo"
                },
                channelFull: {
                    label: "Canale Pieno",
                    description: "Tenta di entrare nel canale appena non è più pieno"
                }
            },
            toast: {
                channelFull: "Il canale è pieno",
                newVc: "Utente seguito in un nuovo canale vocale",
                insufficientPermissions: "Permessi insufficienti per entrare nel canale",
                sameVc: "Sei già nello stesso canale",
                disconnect: "L'utente seguito è uscito; disconnessione",
                notFollowing: "L'utente seguito è uscito, ma la disconnessione automatica è disattivata",
                notVc: "L'utente seguito non è in un canale vocale"
            },
            context: {
                follow: "Segui Utente",
                unfollow: "Smetti di Seguire"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Carica qualsiasi font da Google Fonts",
            option: {
                selectedFont: {
                    label: "Font Selezionato",
                    description: "Font attualmente in uso"
                },
                fontSearch: {
                    label: "Ricerca Font",
                    description: "Cerca ve seleziona font da Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Applica ai Blocchi di Codice",
                    description: "Applica il font anche ai codeblock"
                }
            },
            toast: {
                failedLoad: "Caricamento font fallito"
            },
            modal: {
                settings: {
                    title: "Cerca su Google Fonts",
                    description: "Seleziona un font per applicarlo",
                    placeholder: "Cerca font...",
                    previewText: "The quick brown fox jumps over the lazy dog",
                    authors: "Di {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Forza la corona del proprietario accanto ai nomi utente anche nei server molto grandi."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Se un inoltro fallisce, lo invia come messaggio normale; permette anche l'inoltro di contenuti NSFW",
            option: {
                forwardPreface: {
                    label: "Prefazione Inoltro",
                    description: "Testo da anteporre al contenuto inoltrato"
                }
            },
            context: {
                attachments: "Allegati",
                forwarded: "Inoltrato da"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Ti permette di inviare messaggi con un font strano usando il comando /freaky.",
            command: {
                freaky: "È freaky.",
                message: "Rendi il tuo messaggio freaky"
            },
            option: {
                addFreakyEnding: {
                    label: "Aggiungi Finale Freaky",
                    description: "Aggiungi 👅 o ❤️ alla fine del messaggio"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Riscrive e filtra i risultati del Quick Switcher basandosi sui canali visitati più frequentemente."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Aggiunge il comando /friendcloud per visualizzare gli utenti con cui interagisci di più",
            command: {
                friendcloud: {
                    description: "Visualizza la tua nuvola di amici",
                    count: "Numero di utenti da mostrare",
                    mustHigher: "Il numero deve essere almeno 1!",
                    noAffinities: "Nessuna affinità trovata. Controlla le tue [impostazioni privacy](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Nessun utente valido trovato nelle affinità. Controlla le tue [impostazioni privacy](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Impossibile generare l'immagine :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Genera codici amico per farti aggiungere facilmente",
            card: {
                expires: "Scade <t:{{expiration}}:R> • {{uses}}/{{maxUses}} utilizzi",
                copy: "Copia",
                copied: "Copiato!",
                codes: "I Tuoi Codici Amico",
                count: "Codici Amico - {{invites}}",
                create: "Crea Codice Amico",
                revoke: "Revoca Tutti i Codici",
                loading: "Caricamento...",
                dontHave: "Non hai alcun codice amico attivo."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Crea e gestisci link di invito amico tramite comandi slash (/create friend invite, /view friend invites, /revoke friend invites).",
            command: {
                create: {
                    description: "Genera un link di invito amico.",
                    message: "discord.gg/{{code}}`\n· Scade <t:{{expiration}}:R>\n· Usi Max: {{uses}}"
                },
                view: {
                    description: "Visualizza la lista di tutti gli inviti amico generati.",
                    message: "_discord.gg/{{code}}_ \n· Scade: <t:{{expiration}}:R> \n· Usati: {{uses}}/{{maxUses}}",
                    noInvites: "Non hai inviti amico attivi."
                },
                revoke: {
                    description: "Revoca tutti gli inviti amico generati.",
                    message: "Tutti gli inviti amico sono stati revocati."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Aggiunge badge che mostrano da quanto tempo sei amico di un utente",
            badge: {
                sprout: {
                    name: "Germoglio (Sprout)",
                    description: "La vostra amicizia è appena iniziata"
                },
                blooming: {
                    name: "Fioritura (Blooming)",
                    description: "La vostra amicizia sta crescendo! (1 mese)"
                },
                burning: {
                    name: "Ardente (Burning)",
                    description: "La vostra amicizia è diventata solida (3 mesi)"
                },
                fighter: {
                    name: "Combattente (Fighter)",
                    description: "La vostra amicizia è forte (6 mesi)"
                },
                star: {
                    name: "Stella (Star)",
                    description: "Siete amici da un bel po'! (1 anno)"
                },
                royal: {
                    name: "Reale (Royal)",
                    description: "Siete amici inseparabili — ben 2 anni!"
                },
                besties: {
                    name: "Migliori Amici (Besties)",
                    description: "Ma come fate??? (5 anni)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Mostra nel popout utente la data in cui sei diventato amico di qualcuno",
            section: "Amici Dal"
        },
        friendTags: {
            name: "FriendTags",
            description: "Ti permette di filtrare per tag personalizzati nel Quick Switcher iniziando la ricerca con &",
            modal: {
                name: "Nome",
                users: "Utenti (separati da virgola)",
                userlist: "Lista Utenti (clicca per rimuovere)",
                remove: "Rimuovi",
                add: "Aggiungi",
                tag: "Tag",
                removeFrom: "Rimuovi da",
                addTo: "Aggiungi a"
            },
            option: {
                tagConfiguration: {
                    label: "Configurazione Tag",
                    description: "Componente per la configurazione dei tag"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Rende il menu contestuale dei messaggi nei risultati di ricerca completo di tutte le opzioni"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Rende le menzioni utente nel box di testo più funzionali (es. clic destro/sinistro)"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Fa sì che gli avatar occupino l'intero riquadro del canale vocale"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Aggiunge un interruttore nel popout utente per mostrare/nascondere la tua attività di gioco",
            tooltip: "Attiva/Disattiva Attività di Gioco",
            gameActivity: {
                enabled: "Attività di Gioco Abilitata",
                disabled: "Attività di Gioco Disabilitata"
            },
            option: {
                oldIcon: {
                    label: "Icona Vecchia",
                    description: "Usa il vecchio stile dell'icona (precedente al redesign di Discord)"
                },
                location: {
                    label: "Posizione",
                    description: "Dove mostrare il pulsante",
                    panel: "Accanto a Silenzia/Audio",
                    toolbox: "Toolbox di Plexcord"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Apparirà un fantasma carino se non rispondi ai messaggi diretti (ghosting)",
            modal: {
                title: "Utenti Ghostati",
                no: "Nessun Utente Ghostato",
                unghost: "Smetti di ghostare",
                unknown: "Sconosciuto",
                unnamedGroup: "Gruppo Senza Nome",
                unknownUser: "Utente Sconosciuto",
                clearAll: "Cancella Tutto",
                noGhost: "Nessun fantasma qui!",
                clear: "Cancella"
            },
            option: {
                showIndicator: {
                    label: "Mostra Indicatore",
                    description: "Mostra il contatore dei fantasmi in cima alla lista server"
                },
                showDmIcons: {
                    label: "Mostra Icone DM",
                    description: "Mostra l'icona del fantasma accanto ai singoli DM"
                },
                ignoreGroupDms: {
                    label: "Ignora DM di Gruppo",
                    description: "Esclude i gruppi dal sistema di ghosting"
                },
                exemptedChannels: {
                    label: "Canali Esentati",
                    description: "Lista di ID canali (separati da virgola) da esentare"
                },
                ignoreBots: {
                    label: "Ignora Bot",
                    description: "Ignora i DM provenienti dai bot"
                },
                maxInactiveTimeMs: {
                    label: "Tempo Massimo di Inattività",
                    description: "Mostra i DM fantasma solo se sono stati attivi entro questo periodo",
                    no: "Nessun limite",
                    oneHour: "1 ora",
                    oneDay: "1 giorno",
                    oneWeek: "1 settimana",
                    oneMonth: "1 mese"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Ti permette di creare collezioni di GIF",
            context: {
                copyImageLink: "Copia Link Immagine",
                copyUrl: "Copia URL",
                collection: {
                    add: "Aggiungi alla Collezione",
                    gif: "Collezioni GIF",
                    delete: "Elimina Collezione",
                    create: "Crea Collezione",
                    remove: "Rimuovi",
                    information: "Informazioni Collezione",
                    name: "Nome",
                    gifs: "GIF",
                    created: "Creato il",
                    updated: "Ultimo aggiornamento",
                    close: "Chiudi",
                    rename: "Rinomina",
                    move: "Sposta nella Collezione",
                    select: "Seleziona una collezione in cui spostare l'elemento"
                },
                gif: {
                    information: "Informazioni",
                    added: "Aggiunto il",
                    width: "Larghezza",
                    height: "Altezza",
                    close: "Chiudi"
                }
            },
            option: {
                itemPrefix: {
                    label: "Prefisso Elemento",
                    description: "Prefisso per gli elementi GIF"
                },
                collectionPrefix: {
                    label: "Prefisso Collezione",
                    description: "Prefisso per le collezioni"
                },
                onlyShowCollections: {
                    label: "Mostra Solo Collezioni",
                    description: "Nasconde tutto tranne le collezioni"
                },
                stopWarnings: {
                    label: "Smetti Avvisi",
                    description: "Disabilita gli avvisi di eliminazione"
                },
                showCopyImageLink: {
                    label: "Mostra Copia Link Immagine",
                    description: "Mostra l'opzione {{copyImageLink}} nei menu contestuali"
                },
                preventDuplicates: {
                    label: "Previeni Duplicati",
                    description: "Impedisce di aggiungere la stessa GIF più volte a una collezione"
                },
                defaultEmptyCollectionImage: {
                    label: "Immagine Collezione Vuota",
                    description: "L'immagine/GIF mostrata quando una collezione è vuota"
                },
                collectionsSortType: {
                    label: "Tipo Ordinamento Collezioni",
                    description: "Criterio di ordinamento delle collezioni"
                },
                collectionsSortOrder: {
                    label: "Ordine Ordinamento Collezioni",
                    description: "Direzione dell'ordinamento"
                },
                collectionsSort: {
                    label: "Ordinamento Collezioni",
                    description: "Decidi come ordinare le collezioni",
                    title: "Ordina Collezioni",
                    sortDescription: "Scegli un criterio per ordinare le tue collezioni",
                    sortBy: "Ordina Per",
                    name: "Nome",
                    creationDate: "Data Creazione",
                    modifiedDate: "Data Modifica",
                    ascending: "Crescente",
                    descending: "Decrescente"
                },
                importGifs: {
                    label: "Importa GIF",
                    description: "Importa Collezioni",
                    button: "Importa Collezioni"
                },
                exportGifs: {
                    label: "Esporta GIF",
                    description: "Esporta Collezioni",
                    button: "Esporta Collezioni"
                },
                resetCollections: {
                    label: "Ripristina Collezioni",
                    description: "Ripristina ai valori predefiniti (cancella tutte le tue collezioni)",
                    button: "Ripristina Collezioni"
                }
            },
            toast: {
                copied: "Link immagine copiato negli appunti!",
                urlCopied: "URL copiato negli appunti!",
                already: "Questa collezione esiste già",
                alreadyCollection: "Questa GIF è già presente nella collezione"
            },
            modal: {
                create: {
                    title: "Crea Collezione",
                    name: "Nome Collezione",
                    create: "Crea"
                },
                rename: {
                    title: "Rinomina Collezione",
                    name: "Nuovo Nome Collezione",
                    warning: "Il nome non può superare i 24 caratteri",
                    rename: "Rinomina"
                }
            },
            alert: {
                import: {
                    title: "Sei sicuro?",
                    body: "L'importazione sovrascriverà le tue collezioni attuali.",
                    confirm: "Importa",
                    cancel: "Annulla"
                },
                reset: {
                    title: "Sei sicuro?",
                    body: "Il ripristino rimuoverà permanentemente tutte le tue collezioni.",
                    confirm: "Ripristina",
                    cancel: "Annulla"
                },
                delete: {
                    title: "Sei sicuro?",
                    deleteBody: "Vuoi davvero eliminare questa collezione?",
                    removeBody: "Vuoi davvero rimuovere questo elemento?",
                    confirm: "Elimina",
                    remove: "Rimuovi",
                    cancel: "Annulla"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Ti permette di incollare le GIF direttamente nel box della chat"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Aggiunge un comando per inviare una GIF a caso tra i preferiti, con una possibilità su dieci di menzionare il proprietario del server",
            command: {
                gifRoulette: {
                    description: "Sfidala sorte e invia una GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Possibilità Ping Proprietario",
                    description: "Attiva la possibilità (1 su 10) di menzionare il proprietario del server (pericolo!)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Mostra i repository GitHub pubblici di un utente nel suo profilo",
            loading: "Caricamento repository...",
            option: {
                showStars: {
                    label: "Mostra Stelle",
                    description: "Mostra le stelle dei repository"
                },
                showLanguage: {
                    label: "Mostra Linguaggio",
                    description: "Mostra il linguaggio di programmazione principale"
                }
            },
            error: {
                error: "Errore",
                render: "Errore: Rendering GitHubRepos fallito"
            },
            button: {
                show: "Mostra Repository GitHub",
                repositories: "Repository GitHub",
                more: "Mostra Altri",
                only: "Mostrati solo i primi {{length}}/{{total}}"
            },
            modal: {
                title: "Repository GitHub di {{user}}",
                repository: "Repository",
                description: "Descrizione",
                language: "Linguaggio",
                stars: "Stelle",
                viewOnGitHub: "Vedi su GitHub",
                close: "Chiudi"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Aggiunge un comando per inviare un link di ricerca internet",
            command: {
                googleThat: {
                    description: "Invia un link di un motore di ricerca",
                    query: "La query di ricerca"
                }
            },
            option: {
                hyperlink: {
                    label: "Hyperlink",
                    description: "Indica se il link inviato deve essere un hyperlink con la query come etichetta"
                },
                embed: {
                    label: "Embed",
                    description: "Indica se il link deve generare un embed"
                },
                defaultEngine: {
                    label: "Motore Predefinito",
                    description: "Il motore di ricerca da utilizzare"
                },
                customEngineURL: {
                    label: "URL Motore Personalizzato",
                    description: "L'URL del motore che desideri utilizzare"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Ti permette di scegliere qualsiasi sticker di saluto invece di quello casuale cliccando col tasto destro sul pulsante 'Saluta!'",
            mode: {
                greet: "Saluta",
                message: "Messaggio"
            },
            option: {
                greetMode: {
                    label: "Modalità Saluto",
                    description: "Scegli come salutare",
                    greet: "Saluto (limite di 3 volte)",
                    message: "Messaggio (puoi spammare il saluto)"
                }
            },
            context: {
                label: "Selettore Sticker Saluto",
                mode: "Modalità Saluto",
                stickers: "Sticker di Saluto",
                multi: "Multi-Saluto Infernale",
                send: "Invia Saluti"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Menu contestuale per scaricare tutte le emoji ve gli sticker di un server.",
            context: {
                download: {
                    emoji: "Scarica Emoji",
                    sticker: "Scarica Sticker"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Aggiunge impostazioni per i tag dei server, come nasconderli o disabilitare l'invito ad adottarli.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Disabilita Suggerimento Adozione Tag",
                    description: "Disabilita il popup che suggerisce di adottare i tag"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Ti permette di nascondere i pulsanti della chat",
            tooltip: {
                close: "Chiudi",
                open: "Apri"
            },
            option: {
                color: {
                    label: "Colore",
                    description: "Colora di rosso all'apertura"
                },
                open: {
                    label: "Apri",
                    description: "Aperto per impostazione predefinita"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Nasconde allegati ed embed per singoli messaggi tramite un pulsante al passaggio del mouse",
            show: "Mostra Media",
            hide: "Nascondi Media",
            hidden: "Media Nascosti"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Un plugin per nascondere temporaneamente i messaggi fino al riavvio.",
            button: {
                hide: "Nascondi"
            },
            option: {
                hidePopoverButton: {
                    label: "Nascondi Pulsante Popover",
                    description: "Nasconde il pulsante di occultamento nel menu contestuale del messaggio."
                }
            }
        },
        hideServers: {
            name: "HideServers",
            description: "Nasconde i server dalla lista dei server",
            context: {
                hide: "Nascondi Server",
                unhide: "Mostra Server",
                folder: {
                    hide: "Nascondi Cartella",
                    unhide: "Mostra Cartella"
                }
            },
            option: {
                showIndicator: {
                    label: "Mostra Indicatore",
                    description: "Mostra un menu in fondo alla lista per ripristinare i server nascosti"
                },
                guildsList: {
                    label: "Lista Server",
                    description: "Rimuovi i server nascosti"
                },
                resetHidden: {
                    label: "Ripristina Nascosti",
                    description: "Rimuove tutti i server nascosti dalla lista",
                    button: "Ripristina Server Nascosti"
                }
            },
            button: {
                hidden: "Nascosti",
                hiddenServers: "Server Nascosti",
                remove: "Rimuovi",
                folder: "Cartella",
                removeAll: "Rimuovi Tutto",
                guilds: "Server",
                noHiddenServers: "Nessun server nascosto"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes ti permette di salvare i messaggi come note",
            main: "Principale",
            button: {
                tooltip: "Holy Notes",
                save: "Salva Nota",
                cancel: "Annulla",
                noteMessage: "Nota Messaggio",
                refresh: "Aggiorna Avatar",
                import: "Importa Note",
                export: "Esporta Note",
                deleteAll: "Elimina Tutte le Note",
                delete: "Elimina Notebook",
                create: "Crea Notebook",
                copyText: "Copia Testo",
                copyAttachment: "Copia URL Allegato",
                deleteNote: "Elimina Nota",
                moveNote: "Sposta Nota",
                moveTo: "Sposta in {{key}}",
                copyId: "Copia ID"
            },
            modal: {
                error: {
                    generic: "C'è stato un errore nell'analisi delle tue note. Controlla la console per i dettagli.",
                    easter: "Nessuna nota trovata. Empathy Banana è qui per te.",
                    empty: "Non sono state trovate note salvate in questo notebook."
                },
                help: {
                    title: "Aiuto",
                    description: "Scopri come usare Holy Notes",
                    addingNotes: "Aggiungere Note",
                    addingNotesText: "Per aggiungere una nota, clicca col tasto destro su un messaggio, passa il mouse su 'Nota Messaggio' e seleziona il notebook desiderato.",
                    prototype: "Prototipo",
                    noteMessage: "Cliccando direttamente sul pulsante 'Nota Messaggio', la nota verrà salvata in 'Principale'!",
                    deletingNotes: "Eliminare Note",
                    deletingNotesText: "Nota: puoi cliccare col tasto destro sulla nota e premere 'Elimina Nota', oppure tenere premuto il tasto 'CANC' (DELETE) e cliccare sulla nota.",
                    movingNotes: "Spostare Note",
                    movingNotesText: "Per spostare una nota, clicca col tasto destro su di essa, passa su 'Sposta Nota' e seleziona il notebook di destinazione.",
                    jumpToMessage: "Vai al Messaggio",
                    jumpToMessageText: "Per tornare alla posizione originale del messaggio, clicca col tasto destro sulla nota e premi 'Vai al Messaggio'."
                },
                notebook: {
                    title: "NOTEBOOK",
                    search: "Cerca un messaggio...",
                    options: "Opzioni Ordinamento",
                    label: "Menu Ordinamento",
                    filteredOf: "{{filteredCount}} di {{noteCount}} note",
                    note: "{{noteCount}} note",
                    ada: "Crescente / Data Aggiunta",
                    amd: "Crescente / Data Messaggio",
                    dda: "Decrescente / Data Aggiunta",
                    dmd: "Decrescente / Data Messaggio",
                    change: "Cambia Ordinamento",
                    ascending: "Crescente",
                    descending: "Decrescente",
                    dateAdded: "Data Aggiunta",
                    messageDate: "Data Messaggio"
                },
                create: {
                    title: "Crea Notebook",
                    description: "Inserisci un nome per il nuovo notebook",
                    placeholder: "Nome Notebook"
                },
                delete: {
                    title: "Eliminare {{notebookName}}?",
                    description: "{{noteCount}} note verranno eliminate permanentemente",
                    button: "Elimina"
                },
                tabs: {
                    label: "Schede Notebook"
                }
            },
            toast: {
                saved: "Messaggio aggiunto con successo a {{notebook}}",
                deleted: "Nota eliminata con successo da {{notebook}}",
                moved: "Nota spostata con successo da {{from}} a {{to}}.",
                exists: "Il notebook {{notebookName}} esiste già.",
                created: "Notebook {{notebookName}} creato con successo.",
                deletedNotebook: "Notebook {{notebookName}} eliminato con successo.",
                refreshed: "Avatar aggiornati con successo.",
                deletedAll: "Tutte le note sono state eliminate.",
                imported: "Note importate con successo.",
                invalid: "Impossibile importare le note."
            },
            toolbox: {
                action: "Apri Note"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Cambia il pulsante Home in un indicatore di scrittura se qualcuno nei tuoi DM sta scrivendo"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Aggiunge una scheda nelle impostazioni per visualizzare in anteprima tutte le icone.",
            toolbox: "Apri Scheda Icone",
            iconFinder: "Trova Icone",
            about: {
                title: "Funzionalità",
                preview: "Anteprima Icone",
                list: {
                    copy: "Copia nomi icone e variabili CSS",
                    download: "Scarica icone in diversi formati (SVG, PNG, GIF, ecc.)",
                    premade: "Copia set di icone predefiniti per i tuoi plugin",
                    find: "Trova icone per contesto di funzione",
                    search: "Cerca i colori cliccando col tasto destro sul nome del colore",
                    special: "Ringraziamenti speciali"
                }
            },
            context: {
                icon: {
                    options: "Opzioni Icona",
                    log: "Mostra in Console",
                    save: "Salva come...",
                    rightClick: "Clic destro per cambiare",
                    usage: "Utilizzo",
                    click: "Clicca per copiare",
                    copied: "Copiato!",
                    actions: "Azioni"
                }
            },
            modal: {
                label: "Cerca per contesto",
                search: "Cerca tra {{count}} icone...",
                function: "Funzione",
                iconViewer: {
                    colors: "Colori Icon Viewer",
                    unknown: "sconosciuto",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Riavvia automaticamente il client dopo un periodo di inattività configurabile, evitando il riavvio se sei in un canale vocale.",
            option: {
                isEnabled: {
                    label: "Abilitato",
                    description: "Abilita il riavvio automatico dopo inattività"
                },
                idleMinutes: {
                    label: "Minuti di Inattività",
                    description: "Minuti di inattività prima del riavvio (fuori dai canali vocali)"
                }
            },
            toolbox: {
                disable: "Disattiva Riavvio Automatico",
                enable: "Attiva Riavvio Automatico"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignora le attività affinché non appaiano nel tuo stato. Puoi configurare quali ignorare dalle schede Giochi Registrati o usare le impostazioni generali qui sotto",
            modal: {
                import: {
                    title: "Importa l'ID applicazione del plugin CustomRPC nella lista filtri"
                },
                filter: {
                    title: "Lista Filtri",
                    description: "Lista di ID attività separati da virgola (utile per filtrare RPC specifici o CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "L'ID applicazione CustomRPC non è impostato.",
                    alreadyAdded: "L'ID applicazione CustomRPC è già presente nella lista."
                }
            },
            button: {
                import: "Importa ID CustomRPC"
            },
            option: {
                importCustomRPC: {
                    label: "Importa CustomRPC"
                },
                listMode: {
                    label: "Modalità Lista",
                    description: "Scegli come applicare il filtro",
                    blacklist: "Blacklist (ignora solo ciò che è in lista)",
                    whitelist: "Whitelist (ignora tutto tranne ciò che è in lista)"
                },
                idList: {
                    label: "Lista ID"
                },
                ignorePlaying: {
                    label: "Ignora 'In gioco a'",
                    description: "Ignora tutte le attività di gioco e RPC"
                },
                ignoreStreaming: {
                    label: "Ignora 'In live'",
                    description: "Ignora tutte le attività di streaming"
                },
                ignoreListening: {
                    label: "Ignora 'In ascolto'",
                    description: "Ignora tutte le attività di ascolto (solitamente Spotify)"
                },
                ignoreWatching: {
                    label: "Ignora 'In visione'",
                    description: "Ignora tutte le attività di visione"
                },
                ignoreCompeting: {
                    label: "Ignora 'In competizione'",
                    description: "Ignora tutte le attività competitive"
                },
                ignoredActivities: {
                    label: "Attività Ignorate"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Ti permette di ignorare le chiamate da utenti specifici o gruppi DM.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Utenti Ignorati Permanentemente",
                    description: "ID utente (separati da virgola) da ignorare sempre"
                }
            },
            button: {
                ignore: "Ignora",
                temporarilyIgnore: "Ignora Chiamate Temporaneamente",
                permanentlyIgnore: "Ignora Chiamate Permanentemente"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Non nascondere i messaggi dai 'probabili spammer'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Mostra il nome file di immagini e GIF come suggerimento al passaggio del mouse",
            option: {
                showFullUrl: {
                    label: "Mostra URL Completo",
                    description: "Mostra l'URL completo invece del nome file. Sempre attivo per le GIF."
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Non nascondere mai i link delle immagini nei messaggi, anche se sono l'unico contenuto"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Ti permette di zoomare su immagini e GIF e visualizzarne i metadati. Usa la rotellina per lo zoom e Shift + rotellina per la dimensione della lente.",
            option: {
                saveZoomValues: {
                    label: "Salva Valori Zoom",
                    description: "Indica se salvare lo zoom e la dimensione della lente"
                },
                invertScroll: {
                    label: "Inverti Scorrimento",
                    description: "Inverte la direzione della rotellina"
                },
                nearestNeighbour: {
                    label: "Nearest Neighbour",
                    description: "Usa l'interpolazione Nearest Neighbour per scalare le immagini"
                },
                square: {
                    label: "Quadrata",
                    description: "Rendi la lente di forma quadrata"
                },
                zoom: {
                    label: "Zoom",
                    description: "Livello di zoom della lente"
                },
                size: {
                    label: "Dimensione",
                    description: "Raggio / Dimensione della lente"
                },
                zoomSpeed: {
                    label: "Velocità Zoom",
                    description: "Velocità di variazione dello zoom e della lente"
                },
                showMetadata: {
                    label: "Mostra Metadati",
                    description: "Mostra i metadati dell'immagine con un doppio clic"
                }
            },
            context: {
                square: "Lente Quadrata",
                nearest: "Nearest Neighbour",
                zoom: "Zoom",
                size: "Dimensione Lente",
                zoomSpeed: "Velocità Zoom",
                showImageMetadata: "Mostra Metadati Immagine",
                view: "Vedi Metadati",
                loading: "Caricamento...",
                unknown: "Sconosciuto",
                sizeHTML: "Dimensione",
                dimensions: "Dimensioni",
                filename: "Nome File"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Aggiunge il comando /imgtogif per creare una GIF da qualsiasi immagine",
            command: {
                imgToGif: {
                    description: "Trasforma un'immagine in una GIF",
                    image: "Allegato immagine da usare",
                    width: "Larghezza della GIF",
                    height: "Altezza della GIF"
                }
            },
            error: {
                noImage: "Nessuna immagine specificata!",
                notImage: "Il file caricato non è un'immagine"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Mostra le tue relazioni implicite nella scheda Amici.",
            option: {
                sortByAffinity: {
                    label: "Ordina per Affinità",
                    description: "Indica se ordinare le relazioni in base alla loro affinità con te."
                }
            },
            implicit: "Implicito"
        },
        inRole: {
            name: "InRole",
            description: "Scopri chi ha un determinato ruolo tramite il menu contestuale o il comando /inrole",
            command: {
                inrole: {
                    description: "Scopri chi possiede un ruolo",
                    role: "Il ruolo",
                    noGuild: "Assicurati di essere in un server."
                }
            },
            context: {
                view: "Vedi Membri con Ruolo"
            },
            modal: {
                about: {
                    title: "Limitazioni",
                    description: "Se non hai permessi di moderazione e il server è grande (oltre 100 membri), potrebbero esserci dei limiti:",
                    list: {
                        one: "I membri offline non verranno elencati",
                        two: "Verranno mostrati fino a 100 membri. Scorri la lista per caricarne altri.",
                        three: "Gli amici verranno mostrati sempre, a prescindere dal loro stato."
                    }
                },
                member: {
                    title: "Membri del Ruolo",
                    noMembers: "Nessun membro online trovato per questo ruolo nella cache. Prova a scorrere la lista membri per aggiornarla!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Condivisione schermo istantanea quando entri in un canale vocale, con supporto per schermi, finestre e dispositivi video (camere, schede acquisizione)",
            modal: {
                linux: {
                    title: "Per Linux",
                    body: "Su Wayland apre solo la selezione dello schermo",
                    bodyTwo: "Su X11 potrebbe funzionare o meno :shrug:"
                },
                videoDevices: {
                    title: "Dispositivi di Input Video",
                    body: "Supporta fotocamere e schede di acquisizione (es. Elgato HD60X) se abilitato"
                },
                regardingSound: {
                    title: "Riguardo Audio e Anteprima",
                    body: "Vengono usate le impostazioni di Discord per decidere se attivare audio e anteprima"
                }
            },
            option: {
                streamMedia: {
                    label: "Sorgente da trasmettere",
                    description: "Torna allo schermo principale se non trovata",
                    loading: "Caricamento sorgenti...",
                    none: "Nessuna sorgente trovata",
                    placeholder: "Seleziona una sorgente da trasmettere"
                },
                includeVideoDevices: {
                    label: "Includi Dispositivi Video",
                    description: "Includi fotocamere e schede di acquisizione nella lista"
                },
                autoMute: {
                    label: "Muto Automatico",
                    description: "Disattiva il microfono automaticamente all'ingresso"
                },
                autoDeafen: {
                    label: "Audio Disabilitato Automatico",
                    description: "Disattiva l'audio (e il microfono) automaticamente all'ingresso"
                },
                instantScreenshare: {
                    label: "Screenshare Istantaneo",
                    description: "Abilita la funzione di condivisione automatica"
                },
                keybindScreenshare: {
                    label: "Scorciatoia Screenshare",
                    description: "Usa la scorciatoia tastiera definita nelle impostazioni di Discord"
                },
                focusDiscord: {
                    label: "Focus Discord",
                    description: "Avvia lo screenshare solo se Discord è in primo piano"
                },
                toolboxManagement: {
                    label: "Gestione Toolbox",
                    description: "Abilita/Disabilita Instant Screenshare"
                }
            },
            toolbox: {
                label: "Instant Screenshare",
                toast: "Instant Screenshare {{state}}",
                enabled: "Abilitato",
                disabled: "Disabilitato"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Cripta i tuoi messaggi in modo non sospetto!",
            option: {
                savedPasswords: {
                    label: "Password Salvate",
                    description: "Password salvate (separate da virgola)"
                }
            },
            button: {
                encrypt: "Cripta Messaggio",
                decrypt: "Decripta Messaggio",
                hidden: "Indicatore Messaggio Nascosto (InvisibleChat)"
            },
            tooltip: {
                hidden: "Questo messaggio contiene un messaggio nascosto! (InvisibleChat)"
            },
            embed: {
                title: "Messaggio Decriptato",
                footer: "Inviato con InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Cripta Messaggio",
                    secret: "Segreto",
                    cover: "Copertura (minimo 2 parole!!)",
                    password: "Password",
                    dontUseCover: "Non usare copertura",
                    send: "Invia",
                    cancel: "Annulla"
                },
                decrypt: {
                    title: "Decripta Messaggio",
                    with: "Messaggio criptato",
                    password: "Password",
                    decrypt: "Decripta",
                    cancel: "Annulla"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Ti permette di modificare i valori predefiniti durante la creazione degli inviti server.",
            option: {
                inviteDuration: {
                    label: "Durata Invito",
                    description: "Durata predefinita degli inviti",
                    thirtyMinutes: "30 Minuti",
                    oneHour: "1 Ora",
                    sixHours: "6 Ore",
                    twelveHours: "12 Ore",
                    oneDay: "1 Giorno",
                    sevenDays: "7 Giorni",
                    forever: "Senza scadenza"
                },
                maxUses: {
                    label: "Usi Massimi",
                    description: "Numero massimo di utilizzi predefinito",
                    unlimited: "Illimitato",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Membro Temporaneo",
                    description: "Imposta se i nuovi membri sono temporanei per impostazione predefinita"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Rende i colori dei nomi utente unici nella chat, come nei client IRC",
            option: {
                lightness: {
                    label: "Luminosità",
                    description: "Luminosità in %. Cambia se i colori sono troppo chiari o scuri"
                },
                memberListColors: {
                    label: "Colori Lista Membri",
                    description: "Sostituisce i colori dei ruoli nella lista membri"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Applica Solo a Utenti Senza Colore",
                    description: "Applica il colore solo agli utenti che non ne hanno uno predefinito"
                },
                applyColorOnlyInDms: {
                    label: "Applica Solo nei DM",
                    description: "Applica i colori solo nei messaggi diretti e non nei server."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Salva localmente tutte le persone con cui hai comunicato, utile in caso di perdita dati",
            section: {
                description: "Fornisce una lista di utenti menzionati, a cui hai risposto o proprietari di server a cui appartieni",
                empty: "La lista è vuota al momento.",
                tooltip: "{{user}}, aggiornato il {{updatedAtContent}}",
                owner: "Proprietario Server",
                iRememberYou: "I Remember You"
            },
            context: {
                user: "Opzioni Utente",
                copy: "Copia ID Utente",
                copyToast: "ID Utente copiato negli appunti",
                view: "Vedi Profilo"
            },
            modal: {
                title: "Editor",
                filter: "Filtra per tag, nome, ID",
                button: {
                    validate: "Valida e Salva",
                    cancel: "Annulla",
                    openEditor: "Apri Editor",
                    resetData: "Ripristina Archivio",
                    sure: "Sei sicuro?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Aggiunge opzioni per saltare all'inizio o alla fine di un canale o DM",
            context: {
                top: "Vai al Primo Messaggio",
                bottom: "Vai all'Ultimo Messaggio",
                noMessages: "Nessun messaggio trovato da questo utente in questo canale.",
                searchFailed: "Ricerca messaggi fallita."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Tenta di riportarti nell'ultimo canale visitato dopo il riavvio o il cambio account."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Aggiunge effetti sonori (OperaGX o osu!) mentre scrivi sulla tastiera.",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume dei suoni della tastiera"
                },
                soundPack: {
                    label: "Pacchetto Suoni",
                    description: "Scegli il set di suoni da usare",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Invia una notifica se un messaggio corrisponde a determinate parole chiave o espressioni regolari (regex)",
            idHolder: "ID",
            keywordEntry: "Voce Parola Chiave",
            regexHolder: "esempio|regex",
            ignoreCase: "Ignora Maiuscole",
            whiteblackLabel: "Whitelist/Blacklist",
            tab: {
                title: "Parole Chiave",
                clearAll: "Cancella Tutto"
            },
            button: {
                addId: "Aggiungi ID",
                addKeyword: "Aggiungi Parola Chiave"
            },
            listTypeSelector: {
                blacklist: "Blacklist",
                whitelist: "Whitelist",
                placeholder: "Seleziona tipo di lista"
            },
            option: {
                ignoreBots: {
                    label: "Ignora Bot",
                    description: "Ignora i messaggi dai bot"
                },
                amountToKeep: {
                    label: "Messaggi da Mantenere",
                    description: "Numero di messaggi da conservare nel registro"
                },
                keywords: {
                    label: "Parole Chiave",
                    description: "Gestisci le parole chiave"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Aggiunge un indicatore dell'ultimo accesso sotto i nomi utente nelle liste DM e membri",
            unit: {
                d: "giorno",
                h: "ora",
                m: "minuto"
            },
            online: "Online {{formattedTime}} fa"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Eklentisi per il rich presence di ListenBrainz",
            about: {
                title: "Riguardo l'API MusicBrainz",
                description: "L'API non richiede una chiave, ma necessita di un {{link}} (solitamente un indirizzo email).",
                userAgent: "stringa user-agent significativa"
            },
            option: {
                username: {
                    label: "Nome Utente",
                    description: "Nome utente ListenBrainz"
                },
                mbContact: {
                    label: "Contatto MB",
                    description: "Contatto ListenBrainz"
                },
                shareUsername: {
                    label: "Condividi Nome Utente",
                    description: "Mostra il link al profilo ListenBrainz"
                },
                shareSong: {
                    label: "Condividi Brano",
                    description: "Mostra il link al brano corrente"
                },
                hideWithSpotify: {
                    label: "Nascondi con Spotify",
                    description: "Nascondi ListenBrainz se Spotify è in esecuzione"
                },
                hideWithActivity: {
                    label: "Nascondi con Altre Attività",
                    description: "Nascondi ListenBrainz se hai già un'altra attività"
                },
                useTimeBar: {
                    label: "Usa Barra Temporale",
                    description: "Usa la durata del brano per mostrare la barra di avanzamento"
                },
                statusName: {
                    label: "Nome Stato",
                    description: "Testo dello stato personalizzato"
                },
                nameFormat: {
                    label: "Formato Nome",
                    description: "Formato per artista e brano nello stato",
                    custom: "Usa nome stato personalizzato",
                    artistSong: "Formato 'artista - brano'",
                    songArtist: "Formato 'brano - artista'",
                    artistOnly: "Solo artista",
                    songOnly: "Solo brano",
                    albumName: "Nome album"
                },
                useListeningStatus: {
                    label: "Usa Stato 'In ascolto'",
                    description: "Mostra 'In ascolto di' invece di 'In gioco a'"
                },
                missingArt: {
                    label: "Copertina Mancante",
                    description: "Cosa mostrare se manca l'immagine dell'album",
                    listenbrainzLogo: "Logo grande ListenBrainz",
                    generic: "Segnaposto generico"
                },
                useLogo: {
                    label: "Usa Logo",
                    description: "Mostra il logo ListenBrainz sopra l'immagine dell'album"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Sostituisce le frasi di caricamento predefinite di Discord",
            option: {
                replaceEvents: {
                    label: "Sostituisci in Eventi",
                    description: "Applica anche durante gli eventi a tema (es. Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Abilita Frasi Plugin",
                    description: "Usa le frasi fornite da questo plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Abilita Frasi Discord",
                    description: "Mantiene anche le frasi originali di Discord"
                },
                additionalQuotes: {
                    label: "Frasi Aggiuntive",
                    description: "Frasi personalizzate da mostrare, separate dal delimitatore"
                },
                additionalQuotesDelimiter: {
                    label: "Delimitatore Frasi",
                    description: "Carattere usato per separare le frasi aggiuntive"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Ti permette di accedere su un altro dispositivo scansionando il codice QR, proprio come su mobile!",
            option: {
                scanQr: {
                    label: "Scansiona Codice QR",
                    description: "Scansiona un codice QR",
                    notEnabled: "Abilita il plugin e riavvia per scansionare un QR di accesso"
                }
            },
            neverScan: "Non scansionare MAI codici QR forniti da altri utenti o applicazioni non ufficiali.",
            hold: "Tieni premuto per confermare l'accesso",
            scanning: "Scansione in corso...",
            stopScanning: "Interrompi Scansione",
            usingWebcam: "Scansiona tramite webcam",
            dragDrop: "Trascina un'immagine qui o clicca per selezionarla",
            orPaste: "Oppure incolla un'immagine dagli appunti!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Ti permette di cambiare la velocità di riproduzione dei media",
            playbackSpeed: "Velocità Riproduzione",
            context: {
                label: "Controllo velocità"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Velocità Messaggi Vocali",
                    description: "Velocità predefinita per i vocali"
                },
                defaultVideoSpeed: {
                    label: "Velocità Video",
                    description: "Velocità predefinita per i video"
                },
                defaultAudioSpeed: {
                    label: "Velocità Audio",
                    description: "Velocità predefinita per gli audio"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Mostra il numero di membri online, totali ve utenti in vocale.",
            option: {
                toolTip: {
                    label: "Suggerimento (Tooltip)",
                    description: "Mostra il conteggio nel suggerimento del server"
                },
                memberList: {
                    label: "Lista Membri",
                    description: "Mostra il conteggio nell'intestazione della lista membri"
                },
                voiceActivity: {
                    label: "Attività Vocale",
                    description: "Mostra il numero di utenti nei canali vocali"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} online in questo canale",
            totalMembers: "{{formattedTotalCount}} membri totali",
            totalVoice: "{{formattedVoiceCount}} membri in vocale"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Mostra l'avatar dell'utente e l'icona del ruolo all'interno delle menzioni",
            option: {
                showAtSymbol: {
                    label: "Mostra Simbolo @",
                    description: "Indica se mostrare il simbolo @ nelle menzioni"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Aggiunge un pulsante 'Meow' alla barra della chat",
            button: {
                meow: "Meow"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Unisce messaggi inviati consecutivamente in un breve periodo se nessun altro interviene.",
            option: {
                timePeriod: {
                    label: "Periodo di Tempo",
                    description: "Durata dell'intervallo di unione (in secondi)."
                },
                shouldMergeWithAttachment: {
                    label: "Unisci con Allegati",
                    description: "Indica se unire il messaggio se l'ultimo conteneva un allegato."
                },
                useSpace: {
                    label: "Usa Spazio",
                    description: "Indica se usare uno spazio invece di una nuova riga durante l'unione."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Backspace + clic per eliminare, doppio clic per modificare/rispondere",
            option: {
                singleClickAction: {
                    label: "Azione Clic Singolo",
                    description: "Azione al clic singolo (tuoi messaggi)"
                },
                singleClickModifier: {
                    label: "Modificatore Clic Singolo",
                    description: "Tasto richiesto per l'azione al clic singolo"
                },
                singleClickOthersAction: {
                    label: "Azione Clic Singolo (Altri)",
                    description: "Azione al clic singolo (messaggi altrui)"
                },
                singleClickOthersModifier: {
                    label: "Modificatore Clic Singolo (Altri)",
                    description: "Tasto richiesto per l'azione al clic singolo su altri"
                },
                doubleClickAction: {
                    label: "Azione Doppio Clic",
                    description: "Azione al doppio clic (tuoi messaggi)"
                },
                doubleClickOthersAction: {
                    label: "Azione Doppio Clic (Altri)",
                    description: "Azione al doppio clic (messaggi altrui)"
                },
                doubleClickModifier: {
                    label: "Modificatore Doppio Clic",
                    description: "Tasto richiesto per il doppio clic"
                },
                tripleClickAction: {
                    label: "Azione Triplo Clic",
                    description: "Azione al triplo clic"
                },
                tripleClickModifier: {
                    label: "Modificatore Triplo Clic",
                    description: "Tasto richiesto per il triplo clic"
                },
                reactEmoji: {
                    label: "Emoji Reazione",
                    description: "Emoji da usare per le reazioni rapide"
                },
                addAdditionalReacts: {
                    label: "Aggiungi Reazioni Extra",
                    description: "Aggiunge anche le altre emoji configurate"
                },
                additionalReactEmojis: {
                    label: "Emoji Reazione Extra",
                    description: "Emoji aggiuntive (separate da virgola, max {{count}})"
                },
                disableInDms: {
                    label: "Disabilita nei DM",
                    description: "Disattiva le azioni nei messaggi diretti"
                },
                disableInSystemDms: {
                    label: "Disabilita nei DM di Sistema",
                    description: "Disattiva le azioni nei messaggi di sistema"
                },
                clickTimeout: {
                    label: "Timeout Clic",
                    description: "Tempo per distinguere doppio/triplo clic (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Soglia Pressione Doppio Clic",
                    description: "Tempo massimo di pressione per il doppio clic (ms). Oltre questo tempo permetterà la selezione del testo"
                },
                deferDoubleClickForTriple: {
                    label: "Ritarda Doppio Clic per Triplo",
                    description: "Attende per permettere l'azione del triplo clic"
                },
                selectionHoldTimeout: {
                    label: "Timeout Pressione Selezione",
                    description: "Tempo per consentire la selezione del testo (ms)"
                },
                quoteWithReply: {
                    label: "Cita con Risposta",
                    description: "Quando citi, rispondi anche al messaggio"
                },
                useSelectionForQuote: {
                    label: "Usa Selezione per Citazione",
                    description: "Usa il testo selezionato quando si cita"
                }
            },
            actions: {
                none: "Nessuna",
                delete: "Elimina",
                copyLink: "Copia Link",
                copyID: "Copia ID",
                copyContent: "Copia Contenuto",
                copyUserID: "Copia ID Utente",
                edit: "Modifica",
                reply: "Rispondi",
                react: "Reagisci",
                openThread: "Apri Thread",
                openTab: "Apri Scheda",
                quote: "Cita",
                pin: "Fissa (Pin)"
            },
            missingPermissions: {
                react: "Impossibile reagire: Permessi mancanti",
                pin: "Impossibile fissare: Permessi mancanti",
            },
            cannotQuote: "Impossibile citare questo tipo di messaggio",
            copy: {
                messageId: "ID Messaggio copiato!",
                messageContent: "Contenuto messaggio copiato!",
                userId: "ID Utente copiato!"
            },
            linkCopied: "Link copiato!"
        },
        messageColors: {
            name: "MessageColors",
            description: "Visualizza i codici colore (es. #FF0042) all'interno dei messaggi",
            option: {
                renderType: {
                    label: "Tipo Rendering",
                    description: "Come visualizzare i colori",
                    textColor: "Colore del testo",
                    block: "Blocco accanto",
                    backgroundColor: "Colore di sfondo"
                },
                enableShortHexCodes: {
                    label: "Abilita Codici Hex Brevi",
                    description: "Abilita codici a 3 caratteri come #39f"
                },
                blockView: {
                    label: "Posizione Blocco",
                    description: "Dove mostrare il blocco colore",
                    right: "Lato destro",
                    left: "Lato sinistro",
                    both: "Entrambi i lati"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Mostra quanto tempo è stato necessario per caricare i messaggi del canale",
            option: {
                showIcon: {
                    label: "Mostra Icona",
                    description: "Mostra l'icona del tempo di caricamento nella barra dei messaggi"
                },
                showMs: {
                    label: "Mostra Millisecondi",
                    description: "Mostra i millisecondi nel tempo"
                },
                iconColor: {
                    label: "Colore Icona",
                    description: "Colore dell'icona (valore CSS)"
                }
            },
            loaded: "Messaggi caricati in {{time}}ms ({{timeAgo}})",
            day: "giorno fa",
            hour: "ora fa",
            minute: "minuto fa",
            justNow: "proprio ora"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Mostra un indicatore per i messaggi che hanno impiegato molto tempo per essere inviati",
            day: "giorno",
            days: "giorni",
            hour: "ora",
            hours: "ore",
            minute: "minuto",
            minutes: "minuti",
            second: "secondo",
            seconds: "secondi",
            millisecond: "millisecondo",
            milliseconds: "millisecondi",
            and: "e",
            oldKotlinDetected: "Si sospetta che l'utente stia usando un vecchio client Discord Android.",
            ahead: "L'orologio di questo utente è avanti di {{delta}}.",
            delay: "Questo messaggio è stato inviato con un ritardo di {{delta}}.",
            delayedMessage: "Messaggio Ritardato",
            oldAndroidClient: "Vecchio client Discord Android",
            option: {
                latency: {
                    label: "Latenza",
                    description: "Soglia in secondi per l'indicatore di latenza"
                },
                detectDiscordKotlin: {
                    label: "Rileva Discord Kotlin",
                    description: "Rileva vecchi client Android"
                },
                showMillis: {
                    label: "Mostra Millisecondi",
                    description: "Mostra i millisecondi"
                },
                ignoreSelf: {
                    label: "Ignora Te Stesso",
                    description: "Non aggiungere l'indicatore ai tuoi messaggi"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Aggiunge un'anteprima ai messaggi che contengono il link di un altro messaggio",
            option: {
                messageBackgroundColor: {
                    label: "Colore Sfondo Messaggio",
                    description: "Colore di sfondo per i messaggi negli embed"
                },
                automodEmbeds: {
                    label: "Embed Automod",
                    description: "Usa embed automod (più piccoli ma con meno info)",
                    always: "Usa sempre embed automod",
                    prefer: "Preferisci automod, ma usa rich embed se necessario",
                    never: "Non usare mai embed automod"
                },
                listMode: {
                    label: "Modalità Lista",
                    description: "Usa la lista ID come blacklist o whitelist",
                    blacklist: "Blacklist",
                    whitelist: "Whitelist"
                },
                idList: {
                    label: "Lista ID",
                    description: "ID di server/canali/utenti da filtrare (separati da virgola)"
                },
                clearMessageCache: {
                    label: "Pulisci Cache Messaggi",
                    description: "Pulisce la cache dei messaggi collegati"
                }
            },
            noContent: {
                noAttachments: "nessun contenuto, {{count}} embed",
                noEmbeds: "nessun contenuto, {{count}} allegato",
                both: "nessun contenuto, {{attachments}} allegato/i e {{embeds}} embed"
            },
            dm: "Messaggio Diretto",
            groupDm: "DM di Gruppo",
            server: "Server"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Aggiunge un suggerimento con l'anteprima del messaggio quando passi sopra link, risposte e inoltri.",
            loading: "Caricamento...",
            option: {
                onLink: {
                    label: "Sui Link",
                    description: "Mostra anteprima sui link dei messaggi"
                },
                onReply: {
                    label: "Sulle Risposte",
                    description: "Mostra anteprima sulle risposte"
                },
                onForward: {
                    label: "Sui Messaggi Inoltrati",
                    description: "Mostra anteprima sui messaggi inoltrati"
                },
                display: {
                    label: "Visualizzazione",
                    description: "Stile di visualizzazione",
                    auto: "Come il messaggio",
                    compact: "Compatto",
                    cozy: "Standard (Cozy)"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Registra temporaneamente i messaggi eliminati e modificati.",
            removeMessage: "Rimuovi Cronologia Messaggi",
            removeMessageTemporary: "Rimuovi Messaggio (Temporaneo)",
            clearMessageLog: "Pulisci Registro Messaggi",
            modal: {
                edit: {
                    title: "Cronologia Modifiche Messaggio",
                    tooltip: "Questo stato di modifica non è stato registrato."
                }
            },
            option: {
                deleteStyle: {
                    label: "Stile Eliminazione",
                    description: "Stile dei messaggi eliminati",
                    text: "Testo rosso",
                    overlay: "Sovrapposizione rossa"
                },
                logDeletes: {
                    label: "Registra Eliminati",
                    description: "Registra i messaggi eliminati"
                },
                collapseDeleted: {
                    label: "Comprimi Eliminati",
                    description: "Comprime i messaggi eliminati (simile ai messaggi bloccati)"
                },
                logEdits: {
                    label: "Registra Modificati",
                    description: "Registra i messaggi modificati"
                },
                inlineEdits: {
                    label: "Modifiche in Linea",
                    description: "Mostra la cronologia delle modifiche nel contenuto del messaggio"
                },
                ignoreBots: {
                    label: "Ignora Bot",
                    description: "Ignora i messaggi dei bot"
                },
                ignoreSelf: {
                    label: "Ignora Te Stesso",
                    description: "Ignora i tuoi messaggi"
                },
                ignoreUsers: {
                    label: "Ignora Utenti",
                    description: "Lista ID utenti da ignorare (separati da virgola)"
                },
                ignoreChannels: {
                    label: "Ignora Canali",
                    description: "Lista ID canali da ignorare"
                },
                ignoreGuilds: {
                    label: "Ignora Server",
                    description: "Lista ID server da ignorare"
                },
                showEditDiffs: {
                    label: "Mostra Differenze Modifiche",
                    description: "Mostra visivamente le differenze tra le versioni modificate"
                },
                separatedDiffs: {
                    label: "Differenze Separate",
                    description: "Separa aggiunte e rimozioni per una migliore leggibilità"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Potenzia il plugin MessageLogger con funzionalità aggiuntive.",
            updateImageCacheDir: "Directory cache immagini aggiornata.",
            updateLogsDir: "Directory dei log aggiornata.",
            failedUpdate: "Aggiornamento directory fallito.",
            blacklist: "Blacklist",
            whitelist: "Whitelist",
            failedToRemove: "Rimozione messaggio fallita",
            successfullyImported: "Log importati con successo",
            errorImportingLogs: "Errore durante l'importazione dei log. Controlla la console",
            importing: "Importazione in corso...",
            importLogs: "Importa Log",
            exporting: "Esportazione in corso...",
            exportLogs: "Esporta Log",
            alert: {
                clearLogs: {
                    title: "Pulisci Log",
                    body: "Sei sicuro di voler cancellare tutti i log?",
                    confirmText: "Pulisci",
                    cancel: "Annulla"
                },
                clearVisibleLogs: {
                    title: "Pulisci Log Visibili",
                    body: "Sei sicuro di voler cancellare {{messages}} log?",
                    confirmText: "Pulisci",
                    cancel: "Annulla"
                },
                cleared: "Database dei log e cache cancellati."
            },
            context: {
                title: "Message Logger",
                jumpToMessage: "Vai al Messaggio",
                openUserProfile: "Apri Profilo Utente",
                copyContent: "Copia Contenuto",
                copyUserId: "Copia ID Utente",
                copyMessageId: "Copia ID Messaggio",
                copyChannelId: "Copia ID Canale",
                copyServerId: "Copia ID Server",
                deleteLog: "Elimina Log",
                fromUsernameDm: "Dai DM di {{username}}",
                fromGroupDm: "Dal gruppo {{channelName}}",
                fromServerChannel: "Da {{channelName}} in {{serverName}}",
                moveTypeTo: "Sposta {{type}} in {{destination}}",
                removeTypeFrom: "Rimuovi {{type}} da {{list}}",
                openLogsFor: "Apri Log per {{name}}",
                openLogs: "Apri Log",
                removeMessage: "Rimuovi Messaggio (Permanente)",
                removeMessageHistory: "Rimuovi Cronologia (Permanente)",
                deleteMessageHide: "Elimina Messaggio (Nascondi ai Logger)",
                addServerToBlacklist: "Aggiungi Server alla Blacklist",
                addServerToWhitelist: "Aggiungi Server alla Whitelist",
                removeServerFromBlacklist: "Rimuovi Server dalla Blacklist",
                removeServerFromWhitelist: "Rimuovi Server dalla Whitelist",
                moveServerToBlacklist: "Sposta Server in Blacklist",
                moveServerToWhitelist: "Sposta Server in Whitelist",
                addUserToBlacklist: "Aggiungi Utente alla Blacklist",
                addUserToWhitelist: "Aggiungi Utente alla Whitelist",
                removeUserFromBlacklist: "Rimuovi Utente dalla Blacklist",
                removeUserFromWhitelist: "Rimuovi Utente dalla Whitelist",
                moveUserToBlacklist: "Sposta Utente in Blacklist",
                moveUserToWhitelist: "Sposta Utente in Whitelist",
                addChannelToBlacklist: "Aggiungi Canale alla Blacklist",
                addChannelToWhitelist: "Aggiungi Canale alla Whitelist",
                removeChannelFromBlacklist: "Rimuovi Canale dalla Blacklist",
                removeChannelFromWhitelist: "Rimuovi Canale dalla Whitelist",
                moveChannelToBlacklist: "Sposta Canale in Blacklist",
                moveChannelToWhitelist: "Sposta Canale in Whitelist"
            },
            type: {
                server: "Server",
                user: "Utente",
                channel: "Canale"
            },
            button: {
                chooseFolder: "Scegli Cartella",
                browse: "Sfoglia",
                clearLogs: "Pulisci Tutti i Log",
                clearVisibleLogs: "Pulisci Log Visibili",
                sortOldest: "Ordina dal più vecchio",
                sortNewest: "Ordina dal più recente",
                loadMore: "Carica Altri",
                noResults: "Nessun risultato in {{tab}}",
                tryOtherTabs: "Prova in {{nextTab}} o {{lastTab}}",
                importLogs: "Importa Log"
            },
            modal: {
                title: "Filtra Messaggi",
                deleted: "Eliminati",
                edited: "Modificati",
                ghostPing: "Ghost Ping",
                empty: "Vuoto",
                importLogs: "ML Enhanced ora salva i log in indexeddb. Devi importare i vecchi log dalla directory dei log. L'importazione non sovrascriverà i log esistenti."
            },
            clear: {
                title: "Pulisci Log",
                description: "Sei sicuro di voler cancellare tutti i log?",
                confirm: "Pulisci",
                cancel: "Annulla"
            },
            option: {
                saveMessages: {
                    label: "Salva Messaggi",
                    description: "Indica se salvare i messaggi eliminati e modificati."
                },
                saveImages: {
                    label: "Salva Immagini",
                    description: "Salva gli allegati eliminati."
                },
                sortNewest: {
                    label: "Ordina per i più recenti",
                    description: "Mostra i log più nuovi per primi."
                },
                cacheMessagesFromServers: {
                    label: "Cache Messaggi dai Server",
                    description: "Abilitando questa opzione verranno salvati i messaggi da tutti i server, non solo quelli in whitelist. Attenzione: può riempire rapidamente lo spazio o includere messaggi irrilevanti."
                },
                ignoreBots: {
                    label: "Ignora Bot",
                    description: "Non registrare i messaggi dei bot"
                },
                ignoreWebhooks: {
                    label: "Ignora Webhook",
                    description: "Non registrare i messaggi dai webhook"
                },
                ignoreSelf: {
                    label: "Ignora Te Stesso",
                    description: "Non registrare i propri messaggi"
                },
                ignoreMutedGuilds: {
                    label: "Ignora Server Silenziati",
                    description: "I messaggi nei server silenziati non verranno registrati (salvo whitelist)."
                },
                ignoreMutedCategories: {
                    label: "Ignora Categorie Silenziate",
                    description: "Non registra messaggi in canali di categorie silenziate."
                },
                ignoreMutedChannels: {
                    label: "Ignora Canali Silenziati",
                    description: "Non registra messaggi in canali silenziati."
                },
                alwaysLogDirectMessages: {
                    label: "Registra Sempre Messaggi Diretti",
                    description: "Registra sempre i DM"
                },
                alwaysLogCurrentChannel: {
                    label: "Registra Sempre Canale Corrente",
                    description: "Registra sempre il canale selezionato."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Rimozione Permanente Predefinita",
                    description: "Il pulsante di rimozione base di MessageLogger eliminerà i log permanentemente"
                },
                hideMessageFromMessageLoggers: {
                    label: "Nascondi Messaggio ai Logger",
                    description: "Aggiunge un'opzione per eliminare messaggi senza che vengano loggati. Usare con cautela."
                },
                showLogsButton: {
                    label: "Mostra Pulsante Log",
                    description: "Mostra/nasconde il pulsante nella barra degli strumenti"
                },
                showWhereMessageIsFrom: {
                    label: "Mostra Provenienza Messaggio",
                    description: "Mostra autore, canale e server d'origine"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Messaggi da Mostrare Contemporaneamente",
                    description: "Numero di log visualizzati contemporaneamente e caricati per volta."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Testo Sostitutivo Nascondi",
                    description: "Contenuto con cui sostituire il messaggio quando si usa la funzione nascondi."
                },
                messageLimit: {
                    label: "Limite Messaggi",
                    description: "Numero massimo di messaggi da salvare. 0 = nessun limite."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Limite Dimensione Allegati (MB)",
                    description: "Dimensione massima per salvare un allegato eliminato."
                },
                attachmentFileExtensions: {
                    label: "Estensioni Allegati",
                    description: "Estensioni da salvare (es. png,jpg). Lascia vuoto per tutte."
                },
                cacheLimit: {
                    label: "Limite Cache",
                    description: "Numero massimo di messaggi da tenere in cache."
                },
                timeBasedCleanupMinutes: {
                    label: "Intervallo Pulizia Temporale",
                    description: "Ogni quanti minuti eseguire la pulizia dei vecchi log."
                },
                preserveCurrentChannel: {
                    label: "Preserva Canale Corrente",
                    description: "I messaggi nel canale selezionato non vengono rimossi dalla pulizia automatica."
                },
                whitelistedIds: {
                    label: "ID in Whitelist",
                    description: "ID di server, canali o utenti privilegiati."
                },
                blacklistedIds: {
                    label: "ID in Blacklist",
                    description: "ID di server, canali o utenti da ignorare."
                },
                imageCacheDir: {
                    label: "Directory Cache Immagini",
                    description: "Seleziona dove salvare le immagini"
                },
                logsDir: {
                    label: "Directory dei Log",
                    description: "Seleziona dove salvare i log"
                },
                importLogs: {
                    label: "Importa Log",
                    description: "Importa log da file"
                },
                exportLogs: {
                    label: "Esporta Log",
                    description: "Esporta log da IndexedDB"
                },
                openLogs: {
                    label: "Apri Log",
                    description: "Apre la finestra dei log"
                },
                openImageCacheFolder: {
                    label: "Apri Cartella Cache Immagini",
                    description: "Apre la directory della cache immagini"
                },
                clearLogs: {
                    label: "Pulisci Log",
                    description: "Pulisci Log",
                    title: "Pulisci log",
                    body: "Sei sicuro di voler cancellare tutti i log?",
                    confirmText: "Pulisci",
                    cancel: "Annulla"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Ricevi notifiche toast quando utenti selezionati inviano un messaggio",
            dm: "i loro DM",
            option: {
                users: {
                    label: "Utenti",
                    description: "Lista ID utenti (separati da virgola) da monitorare",
                    invalidId: "{{id}} non è un ID utente valido"
                }
            },
            notification: {
                title: "{{username}} ha inviato un messaggio",
                body: "Clicca per andare a {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Ti permette di salvare messaggi e usarli con un semplice comando.",
            notExist: "Il tag **{{tagname}}** non esiste più! Ricarica Discord per risolvere :)",
            alreadyExist: "Un tag con il nome **{{tagname}}** esiste già!",
            sentTag: "Il tag **{{tagname}}** è stato inviato!",
            successCreate: "Il tag **{{tagname}}** è stato creato!",
            allTags: "Tutti i tuoi tag:",
            noTags: "Ops! Non ci sono tag, usa /tag create per crearne uno!",
            noDeleteTag: "Il tag **{{tagname}}** non esiste e non può essere eliminato!",
            successDelete: "Tag **{{name}}** eliminato con successo!",
            tagPreview: "Il tag **{{name}}** non esiste!",
            option: {
                clyde: {
                    label: "Messaggio Clyde all'invio",
                    description: "Se abilitato, Clyde ti invierà un messaggio effimero quando un tag viene usato."
                },
                tagsList: {
                    label: "Lista Tag",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Gestisci i tuoi tag",
                    option: {
                        create: {
                            description: "Crea un nuovo tag",
                            name: "Nome del tag che attiva la risposta",
                            message: "Messaggio da inviare quando si usa il tag"
                        },
                        list: {
                            description: "Elenca tutti i tuoi tag"
                        },
                        delete: {
                            description: "Rimuovi un tag",
                            name: "Nome del tag da rimuovere"
                        },
                        preview: {
                            description: "Anteprima di un tag senza inviarlo pubblicamente",
                            name: "Nome del tag da vedere in anteprima"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Aggiunge un'icona di test del microfono nel pannello utente",
            button: "Test Microfono (Loopback)"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Varie modifiche per il tasto centrale del mouse (es. incolla e apertura link).",
            option: {
                openScope: {
                    label: "Ambito Apertura",
                    description: "Impedisce al tasto centrale di aprire questi tipi di contenuto.",
                    links: "Link",
                    media: "Media",
                    linksAndMedia: "Link e Media",
                    none: "Nessuno"
                },
                pasteScope: {
                    label: "Ambito Incolla",
                    description: "Impedisce l'azione incolla col tasto centrale in queste situazioni.",
                    always: "Impedisci sempre di incollare col tasto centrale",
                    focus: "Impedisci solo quando l'area di testo non è focalizzata",
                },
                pasteThreshold: {
                    label: "Soglia Incolla",
                    description: "Millisecondi prima che l'azione incolla sia riabilitata dopo un clic centrale."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock e molto altro",
            command: {
                echo: {
                    description: "Invia un messaggio come Clyde (solo locale)"
                },
                lenny: {
                    description: "Invia una faccia lenny ( ͡° ͜ʖ ͡°)"
                },
                mock: {
                    description: "pReNdI iN gIrO lE pErSoNe"
                },
                wordcount: {
                    description: "Conta il numero di parole in un messaggio",
                    response: "Il messaggio contiene {{count}} parole."
                },
                flipcoin: {
                    description: "Lancia una moneta (testa o croce)",
                    heads: "Testa",
                    tails: "Croce",
                    response: "È uscito {{result}}."
                },
                ask: {
                    description: "Fai una domanda sì/no",
                    yes: "Sì",
                    no: "No",
                    maybe: "Forse",
                    askAgain: "Chiedi più tardi",
                    definitelyNot: "Certamente no",
                    itIsCertain: "È certo"
                },
                randomanimal: {
                    description: "Ottieni l'immagine di un animale a caso",
                    animal: "scegli il tuo animale",
                    cat: "gatto",
                    dog: "cane",
                    response: "Scusa, non sono riuscito a recuperare l'immagine dell'animale"
                },
                randomnumber: {
                    description: "Genera un numero casuale tra due valori",
                    min: "Valore minimo",
                    max: "Valore massimo",
                    response: "Numero casuale tra {{min}} e {{max}}: {{number}}"
                },
                choose: {
                    description: "Sceglie casualmente tra le opzioni fornite",
                    option: "Lista di scelte separate da virgola",
                    response: "Scelgo: {{choice}}"
                },
                systeminfo: {
                    description: "Mostra informazioni sul sistema",
                    platform: "Piattaforma",
                    deviceType: "Tipo Dispositivo",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    browser: "Browser",
                    cpuCores: "Core CPU",
                    memory: "Memoria",
                    screen: "Schermo",
                    languages: "Lingue",
                    network: "Rete",
                    online: "Online",
                    offline: "Offline",
                    failedToFetch: "Impossibile recuperare info sistema",
                    unknown: "Sconosciuto"
                },
                getuptime: {
                    description: "Mostra da quanto tempo il client è attivo",
                    response: "**Uptime Client**: {{uptime}} minuti"
                },
                gettime: {
                    description: "Mostra l'ora corrente",
                    response: "L'ora attuale è {{time}}"
                },
                transform: {
                    description: "Trasforma il tuo testo con l'opzione specificata",
                    transformation: {
                        description: "Trasformazione da applicare",
                        lowercase: "Tutto minuscolo",
                        uppercase: "Tutto maiuscolo",
                        localeLowercase: "Minuscolo locale",
                        localeUppercase: "Maiuscolo locale",
                        same: "Nessuna modifica"
                    },
                    repeat: "quante volte ripetere",
                    reverse: "se invertire il testo",
                    normalize: {
                        description: "Forma di normalizzazione del testo",
                        nfc: "Normalizzazione C (NFC)",
                        nfd: "Normalizzazione D (NFD)",
                        nfkc: "Normalizzazione KC (NFKC)",
                        nfkd: "Normalizzazione KD (NFKD)"
                    },
                    text: "Testo da trasformare"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Aggiunge più Kaomoji a Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Migliora i pulsanti di reazione rapida nel menu contestuale dei messaggi.",
            option: {
                reactionCount: {
                    label: "Numero Reazioni",
                    description: "Numero di reazioni (0-42)"
                },
                frequentEmojis: {
                    label: "Emoji Frequenti",
                    description: "Usa le emoji frequenti invece delle preferite"
                },
                rows: {
                    label: "Righe",
                    description: "Righe di reazioni rapide da mostrare"
                },
                columns: {
                    label: "Colonne",
                    description: "Colonne di reazioni rapide da mostrare"
                },
                compactMode: {
                    label: "Modalità Compatta",
                    description: "Scala i pulsanti al 75% e ingrandisce l'emoji interna al 125%. Consigliato almeno 5 colonne."
                },
                scroll: {
                    label: "Scorrimento",
                    description: "Abilita lo scorrimento della lista emoji"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Aggiunge tag per i webhook e ruoli moderativi (proprietario, admin, ecc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Questo utente è un webhook"
                },
                owner: {
                    name: "Proprietario",
                    description: "Possiede il server"
                },
                admin: {
                    name: "Admin",
                    description: "Ha il permesso amministratore"
                },
                staff: {
                    name: "Staff",
                    description: "Può gestire il server, i canali o i ruoli"
                },
                mod: {
                    name: "Mod",
                    description: "Può gestire messaggi o espellere/bandire utenti"
                },
                vcmod: {
                    name: "Mod Vocale",
                    description: "Può gestire le chat vocali"
                },
                chatmod: {
                    name: "Mod Chat",
                    description: "Può gestire i messaggi"
                }
            },
            modal: {
                example: "Esempio",
                tag: "Tag",
                customTextPlaceholder: "Testo sul tag (default: {{displayName}})",
                messages: "Mostra nei messaggi",
                memberList: "Mostra nella lista membri e profili"
            },
            option: {
                dontShowForBots: {
                    label: "Non mostrare per i bot",
                    description: "Non mostrare tag extra per i bot (esclusi i webhook)"
                },
                dontShowBotTag: {
                    label: "Nascondi tag bot",
                    description: "Mostra solo i tag extra / Nasconde la scritta [APP]"
                },
                showWebhookTagFully: {
                    label: "Mostra tag webhook completo",
                    description: "Mostra il tag Webhook nei canali seguiti come gli annunci"
                },
                tagSettings: {
                    label: "Impostazioni Tag",
                    description: "Configura i tag utente"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Un comando slash per tradurre da/verso il codice morse.",
            command: {
                morse: {
                    description: "Traduci in o dal codice Morse",
                    message: "Testo da convertire"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volume",
                    description: "Volume dei 🗿🗿🗿"
                },
                quality: {
                    label: "Qualità",
                    description: "Qualità dei 🗿🗿🗿",
                    normal: "Normale",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Attiva se non a fuoco",
                    description: "Attiva il 🗿 anche se la finestra non è in primo piano"
                },
                ignoreBots: {
                    label: "Ignora Bot",
                    description: "Ignora i messaggi dei bot"
                },
                ignoreBlocked: {
                    label: "Ignora Utenti Bloccati",
                    description: "Ignora i messaggi degli utenti bloccati"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Controlli musicali e testi per vari servizi",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Mostra Controlli Spotify",
                    description: "Mostra i controlli per Spotify"
                },
                showSpotifyLyrics: {
                    label: "Mostra Testi Spotify",
                    description: "Mostra i testi dei brani per Spotify"
                },
                useSpotifyUris: {
                    label: "Usa URI Spotify",
                    description: "Apre URI invece di URL (richiede Spotify installato)"
                },
                previousButtonRestartsTrack: {
                    label: "Pulsante 'Precedente' riavvia brano",
                    description: "Ricomincia il brano corrente se riprodotto per più di 3s"
                },
                tidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Mostra Controlli Tidal",
                    description: "Mostra i controlli per Tidal"
                },
                showTidalLyrics: {
                    label: "Mostra Testi Tidal",
                    description: "Mostra i testi per Tidal"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "È richiesto {{app}} per queste impostazioni"
                },
                showYoutubeMusicControls: {
                    label: "Mostra Controlli YouTube Music",
                    description: "Mostra i controlli per YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL API YouTube Music",
                    description: "L'URL del server API YouTube Music che stai usando"
                },
                hoverControls: {
                    label: "Controlli al passaggio del mouse",
                    description: "Mostra i controlli solo quando passi sopra col mouse"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Mostra nota se mancano i testi",
                    description: "Mostra un'icona di nota musicale quando non vengono trovati testi"
                },
                lyricsPosition: {
                    label: "Posizione Testi",
                    description: "Dove posizionare il pannello dei testi",
                    above: "Sopra il player",
                    below: "Sotto il player"
                },
                lyricsProvider: {
                    label: "Fornitore Testi",
                    description: "Da dove vengono scaricati i testi",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                translateTo: {
                    label: "Traduci In",
                    description: "Traduci i testi in questa lingua (cambiarlo pulirà le traduzioni esistenti)",
                    cleared: "Traduzione Pulita"
                },
                lyricsConversion: {
                    label: "Conversione Testi",
                    description: "Traduci o traslittera (romanize) automaticamente i testi",
                    none: "Nessuna",
                    translate: "Traduci",
                    romanize: "Traslittera (Romanize)"
                },
                fallbackProvider: {
                    label: "Fornitore di Riserva",
                    description: "Se il principale fallisce, prova altri fornitori"
                },
                showFailedToasts: {
                    label: "Mostra Toast Fallimenti",
                    description: "Mostra avvisi quando i testi non vengono caricati"
                },
                purgeLyricsCache: {
                    label: "Svuota Cache Testi",
                    description: "Pulisce tutti i testi e le traduzioni salvate",
                    button: "Svuota Cache",
                    cacheLyricsPurged: "Cache testi svuotata"
                }
            },
            context: {
                spotify: {
                    label: "Menu Testi Spotify",
                    type: "Menu {{type}} Spotify",
                    copy: "Copia nome {{type}}",
                    link: "Copia link {{type}}",
                    open: "Apri {{type}} su Spotify",
                    album: "Menu Album Spotify"
                },
                tidal: {
                    label: "Menu Testi Tidal",
                    lyrics: "Testi Tidal",
                    type: "Menu {{name}} Tidal",
                    copy: "Copia nome {{name}}",
                    open: "Apri {{name}} su Tidal",
                    album: "Menu Album Tidal"
                },
                ytm: {
                    type: "Menu {{name}} YouTube Music",
                    copy: "Copia nome {{name}}",
                    open: "Apri {{name}} su YouTube Music",
                    album: "Menu Album YouTube Music",
                    muted: "Silenziato"
                },
                lyrics: {
                    provider: "Fornitore Testi",
                    saved: "salvato",
                    notFound: "Nessun testo sincronizzato trovato"
                },
                copy: {
                    currentLyrics: "Copia testi correnti"
                }
            },
            alert: {
                lyricCopied: "Testo copiato negli appunti!",
                noLyrics: "Nessun testo",
                noLyricsTo: "Nessun testo da {{translated}}",
                translate: "tradurre",
                romanize: "traslitterare",
                lyricsFetchFailed: "Recupero testi fallito",
                failedToFetchLyrics: "Impossibile recuperare {{translated}}",
                translation: "traduzione",
                romanization: "traslitterazione",
                failedToFetchTranslation: "Impossibile recuperare i testi di {{translated}}"
            },
            modal: {
                install: {
                    title: "Come installare",
                    install: "Installa {{link}} da qui, poi vai su impostazioni TidaLuna → Plugin stores → Installa @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Nessun brano in riproduzione",
                    artist: "Artista:",
                    album: "Album:",
                    noLyrics: "Nessun testo disponibile :(",
                    progress: "Avanzamento",
                    totalDuration: "Durata Totale"
                },
                type: {
                    song: "Brano",
                    artist: "Artista",
                    album: "Album"
                },
                album: {
                    open: "Apri Album",
                    viewCover: "Vedi Copertina",
                    volume: "Volume",
                    image: "Immagine Album"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Tradotto",
                romanized: "Traslitterato",
                none: "Nessuno"
            },
            error: {
                failed: "Rendering del modal fallito :(",
                checkConsole: "Controlla la console per gli errori",
                invalidUrlCustomApi: "Formato URL non valido per l'API personalizzata"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Mostra i gruppi DM in comune nei profili",
            no: "Nessun Gruppo in Comune",
            mutualGroup: "{{count}} Gruppo/i in Comune",
            members: "Membri",
            noGroup: "Nessun gruppo DM in comune",
            header: "Gruppi in Comune"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Impedisce alle anteprime in chiamata/PiP (condivisione schermo, stream, ecc.) di andare in pausa anche se il client perde il focus",
            about: "Questo plugin farà sì che Discord utilizzi più risorse del solito"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Silenzi automaticamente i nuovi server e modifica varie altre impostazioni al momento dell'ingresso",
            context: {
                apply: "Applica NewGuildSettings"
            },
            option: {
                guild: {
                    label: "Silenzia Server",
                    description: "Silenzia il server automaticamente"
                },
                messages: {
                    label: "Impostazioni Notifiche Server",
                    description: "Impostazioni Notifiche Server",
                    all: "Tutti i messaggi",
                    mentions: "Solo @menzioni",
                    nothing: "Nulla",
                    default: "Predefinito del server"
                },
                everyone: {
                    label: "Sopprimi @everyone e @here",
                    description: "Sopprimi @everyone e @here"
                },
                role: {
                    label: "Sopprimi tutte le @menzioni dei ruoli",
                    description: "Sopprimi tutte le @menzioni dei ruoli"
                },
                highlights: {
                    label: "Sopprimi Highlights",
                    description: "Sopprimi gli Highlights automaticamente"
                },
                events: {
                    label: "Silenzia Nuovi Eventi",
                    description: "Silenzia i nuovi eventi automaticamente"
                },
                showAllChannels: {
                    label: "Mostra Tutti i Canali",
                    description: "Mostra tutti i canali automaticamente"
                },
                mobilePush: {
                    label: "Silenzia Notifiche Push Mobile",
                    description: "Silenzia le notifiche push mobile automaticamente"
                },
                voiceChannels: {
                    label: "Canali Vocali",
                    description: "Nascondi automaticamente i nomi nei canali vocali"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Utility che ti avvisa quando nuovi plugin vengono aggiunti a Plexcord",
            modal: {
                title: "Nuovi Plugin e Impostazioni",
                description: "Sono stati aggiunti nuovi plugin e impostazioni dalla tua ultima visita. Per favore, rivedi le novità qui sotto.",
                tooltip: "Ignora per questa sessione",
                dontShowAgain: "Non mostrare più",
                restartRequired: "Riavvio richiesto per applicare le modifiche",
                restart: "Riavvia",
                continue: "Continua"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Riporta il tag dei bot alla sua forma originale"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Nasconde completamente tutti i messaggi bloccati/ignorati dalla chat",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Nascondi anche Utenti Ignorati",
                    description: "Nasconde anche i messaggi degli utenti ignorati."
                },
                disableNotifications: {
                    label: "Disabilita Notifiche",
                    description: "Nasconde le notifiche di nuovi messaggi per gli utenti bloccati. Sempre attivo se 'Nascondi Utenti di Default' è abilitato e l'utente non è esentato."
                },
                allowAutoModMessages: {
                    label: "Consenti Messaggi AutoMod",
                    description: "Consente ai messaggi inviati da AutoMod di bypassare il filtraggio."
                },
                hideBlockedUserReplies: {
                    label: "Nascondi Risposte Utenti Bloccati",
                    description: "Nasconde i messaggi degli utenti bloccati nei thread se hai partecipato alla discussione."
                },
                defaultHideUsers: {
                    label: "Nascondi Utenti di Default",
                    description: "Se abilitato, i messaggi degli utenti bloccati saranno completamente nascosti; gli ID nella lista override verranno invece compressi (comportamento standard). Se disabilitato, i bloccati saranno compressi e gli override saranno nascosti."
                },
                overrideUsers: {
                    label: "Override Utenti",
                    description: "Lista di ID utente (separati da virgola) che verranno nascosti o compressi inversamente al comportamento predefinito scelto sopra."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Ti impedisce di scrivere elenchi puntati in markdown (puzzano)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Disabilita la ridondante funzione di deep linking di Discord che cerca di forzarti a usare l'app Desktop"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Rimuove l'obbligo di inserire il nome del server quando ne elimini uno",
            option: {
                confirmModal: {
                    label: "Finestra di Conferma",
                    description: "Deve essere mostrata una finestra 'Sei sicuro di voler eliminare'?"
                }
            },
            modal: {
                title: "Eliminare il server?",
                body: "È un'azione permanente, nel caso non fosse ovvio.",
                confirm: "Elimina",
                cancel: "Annulla"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Disabilita il banner 'HOLD UP' nella console. Come effetto collaterale, impedisce a Discord di nascondere il tuo token, prevenendo logout casuali."
        },
        noF1: {
            name: "NoF1",
            description: "Disabilita il tasto F1 per l'aiuto."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Incollare un link mentre del testo è selezionato non creerà un URL mascherato"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Impedisce che la telecamera venga riflessa (specchiata) sul tuo schermo"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Rimuove l'animazione di 300ms all'apertura o chiusura delle finestre"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Rimuove il mosaico di immagini di Discord",
            option: {
                inlineVideo: {
                    label: "Video in linea",
                    description: "Riproduci video senza la finestra carosello"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Rimuove TUTTE le pubblicità di Nitro ingannando il client e facendogli credere che tu abbia Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Bypassa il processo di onboarding di Discord per un ingresso più rapido nei server."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Salta il lento e fastidioso ritardo dell'onboarding"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Rimuove il conteggio dei badge per richieste di amicizia, messaggi in sospeso e offerte Nitro.",
            option: {
                hideFriendRequestsCount: {
                    label: "Nascondi Conteggio Richieste Amicizia",
                    description: "Nasconde il conteggio delle richieste di amicizia in arrivo"
                },
                hideMessageRequestsCount: {
                    label: "Nascondi Conteggio Richieste Messaggi",
                    description: "Nasconde il conteggio delle richieste di messaggio"
                },
                hidePremiumOffersCount: {
                    label: "Nascondi Conteggio Offerte Premium",
                    description: "Nasconde il conteggio delle offerte Nitro"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Rimuove completamente i temi del profilo Nitro da chiunque tranne te stesso."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Bypassa l'obbligo del push-to-talk nei canali che lo impongono."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Disabilita il ping delle risposte di default",
            option: {
                userList: {
                    label: "Lista Utenti",
                    description: "Lista di utenti per cui consentire o esentare i ping (separati da virgola o spazio)"
                },
                roleList: {
                    label: "Lista Ruoli",
                    description: "Lista di ruoli per cui consentire o esentare i ping (separati da virgola o spazio)"
                },
                shouldPingListed: {
                    label: "Comportamento Lista",
                    description: "Azione da eseguire",
                    dontPing: "Non pingare gli utenti/ruoli in lista",
                    onlyPing: "Pingare solo gli utenti/ruoli in lista"
                },
                inverseShiftReply: {
                    label: "Inverti Shift+Risposta",
                    description: "Inverte il comportamento dello shift durante la risposta (abilitalo per far sì che shift+risposta menzioni l'utente)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Rimuove 'canary/' o 'ptb/' dai link dei messaggi"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Siamo tutti uguali!! Rimuove le intestazioni dei ruoli nella lista membri."
        },
        noRPC: {
            name: "NoRPC",
            description: "Disabilita il Rich Presence di Discord"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Non mostrare le emoji del server nel menu di completamento automatico.",
            option: {
                shownEmojis: {
                    label: "Emoji Mostrate",
                    description: "Scegli quali emoji mostrare nel menu di completamento automatico",
                    onlyUnicode: "Solo emoji unicode",
                    currentServer: "Emoji unicode ed emoji del server corrente",
                    all: "Emoji unicode e tutte le emoji dei server (default Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Disabilita il badge del conteggio non letti sulla barra delle applicazioni e nell'area di notifica."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Rende le notifiche desktop più informative"
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Imposta un volume personalizzato per le notifiche di Discord",
            option: {
                notificationVolume: {
                    label: "Volume Notifiche",
                    description: "Volume delle notifiche"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Disabilita l'animazione di digitazione in chat"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Ti permette di saltare ai messaggi di utenti bloccati o ignorati senza doverli sbloccare."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Se un utente invia più messaggi nei DM, riceverai un solo avviso sonoro finché non leggi la chat.",
            option: {
                channelToAffect: {
                    label: "Canali interessati",
                    description: "Seleziona il tipo di DM su cui il plugin deve agire",
                    both: "Entrambi",
                    user: "DM Utente",
                    group: "DM di Gruppo"
                },
                allowMentions: {
                    label: "Consenti Menzioni",
                    description: "Ricevi avvisi sonori per le @menzioni"
                },
                allowEveryone: {
                    label: "Consenti @everyone",
                    description: "Ricevi avvisi sonori per @everyone e @here nei DM di gruppo"
                },
                ignoreUsers: {
                    label: "Ignora Utenti",
                    description: "ID utente (virgola + spazio) i cui ping non devono MAI essere limitati"
                },
                alwaysPlaySound: {
                    label: "Riproduci sempre suono",
                    description: "Riproduci il suono di notifica anche quando è disabilitato"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Apri i link nelle rispettive app invece che nel browser",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Apri i link Spotify nell'app Spotify"
                },
                steam: {
                    label: "Steam",
                    description: "Apri i link Steam nell'app Steam"
                },
                epic: {
                    label: "Epic Games",
                    description: "Apri i link Epic Games nel launcher Epic"
                },
                tidal: {
                    label: "Tidal",
                    description: "Apri i link Tidal nell'app Tidal"
                },
                itunes: {
                    label: "iTunes",
                    description: "Apri i link Apple Music nell'app iTunes"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Apri i link VRChat nell'app VRCX"
                }
            },
            notification: {
                open: "Link aperto nell'app nativa"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Ti permette di sovrascrivere il layout/ordinamento predefinito dei forum.",
            option: {
                defaultLayout: {
                    label: "Tag Predefiniti",
                    description: "Quale layout usare come predefinito",
                    list: "Elenco",
                    gallery: "Galleria"
                },
                defaultSortOrder: {
                    label: "Ordinamento Predefinito",
                    description: "Quale ordine di visualizzazione usare",
                    recentlyActive: "Attività Recente",
                    datePosted: "Data di Pubblicazione"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Ti permette di usare la modalità Party perché la festa non finisce mai ✨",
            option: {
                superIntensePartyMode: {
                    label: "Modalità Party Super Intensa",
                    description: "Intensità del party",
                    normal: "Normale",
                    better: "Migliore",
                    projectX: "Project X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Ripristina l'opzione per mettere in pausa gli inviti a tempo indeterminato che Discord ha rimosso.",
            pauseIndefinitely: "Metti in pausa a tempo indeterminato"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Disabilita le restrizioni lato client per la gestione dei permessi dei canali.",
            option: {
                lockout: {
                    label: "Blocco Prevenzione",
                    description: "Bypassa la prevenzione del blocco permessi ('Sei sicuro di volerlo fare?')"
                },
                onboarding: {
                    label: "Onboarding",
                    description: "Bypassa i requisiti di onboarding"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Visualizza i permessi di un utente o canale e i ruoli di un server",
            view: "Visualizza Permessi",
            option: {
                permissionsSortOrder: {
                    label: "Ordinamento Permessi",
                    description: "Metodo di ordinamento usato per definire quale ruolo garantisce un permesso",
                    highest: "Ruolo più alto",
                    lowest: "Ruolo più basso"
                }
            },
            icon: {
                denied: "Negato",
                allowed: "Consentito",
                notOverwritten: "Non Sovrascritto"
            },
            context: {
                permissions: "Permessi"
            },
            modal: {
                title: "Permessi",
                noPermissions: "Nessun permesso da visualizzare!",
                owner: "proprietario",
                grantedBy: "Concesso da",
                serverOwner: "Proprietario del Server",
                ownerRole: "Proprietario",
                sortingBy: "Ordinamento per {{method}}",
                highest: "Ruolo più alto",
                lowest: "Ruolo più basso",
                details: "Dettagli Ruolo"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Aggiunge un comando slash /petpet per creare GIF 'headpet' da qualsiasi immagine",
            command: {
                petpet: {
                    description: "Crea una GIF petpet. Puoi specificare solo una delle opzioni immagine",
                    delay: "Ritardo tra i fotogrammi. Default: 20.",
                    resolution: "Risoluzione della GIF. Default: 120. Se inserisci un numero folle e Discord si blocca, è colpa tua.",
                    image: "Allegato immagine da usare",
                    url: "URL dell'immagine",
                    user: "Utente di cui usare l'avatar",
                    noServerPfp: "Usa l'avatar normale invece di quello specifico del server",
                    error: {
                        noImage: "Nessuna immagine specificata!",
                        delayTooLow: "Il ritardo deve essere almeno 20."
                    }
                }
            },
            error: {
                uploadNotImage: "Il file caricato non è un'immagine",
                fetchUserFailed: "Impossibile recuperare l'utente. Controlla la console.",
                fetchImageFailed: "Errore durante il caricamento di {{url}}. Controlla la console."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Aggiunge il Picture-in-Picture ai video (accanto al pulsante Download)",
            tooltip: "Attiva Picture-in-Picture",
            option: {
                loop: {
                    label: "Ripeti",
                    description: "Se far andare il video PiP in loop o meno"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Ti permette di fissare i canali privati in cima alla lista DM. Clicca col tasto destro per fissare o riordinare",
            context: {
                category: {
                    label: "Menu Categorie Pin DM",
                    edit: "Modifica Categoria",
                    up: "Sposta Su",
                    down: "Sposta Giù",
                    delete: "Elimina Categoria",
                    unnamed: "ops"
                },
                pin: {
                    label: "Fissa DM",
                    addCategory: "Aggiungi Categoria"
                },
                unPin: {
                    label: "Sblocca DM",
                    move: "Sposta in Categoria"
                }
            },
            option: {
                pinOrder: {
                    label: "Ordine Pin",
                    description: "In che ordine devono essere mostrati i DM fissati?",
                    lastMessage: "Messaggio più recente",
                    custom: "Personalizzato (tasto destro sui canali per riordinare)"
                },
                canCollapseDmSection: {
                    label: "Sezione Pin Collassabile",
                    description: "Permette di chiudere la sezione dei DM non categorizzati"
                },
                dmSectionCollapsed: {
                    label: "Sezione DM Chiusa",
                    description: "Chiudi la sezione DM"
                },
                userBasedCategoryList: {
                    label: "Lista Categorie per Utente",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Fissa Categoria",
                    edit: "Modifica Categoria",
                    new: "Nuova Categoria",
                    name: "Nome",
                    color: "Colore",
                    save: "Salva",
                    create: "Crea"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Notifiche personalizzabili con formattazione delle menzioni migliorata",
            option: {
                friends: {
                    label: "Amici",
                    description: "Notifica quando gli amici inviano messaggi nei server"
                },
                mentions: {
                    label: "Menzioni",
                    description: "Notifica quando qualcuno ti menziona direttamente"
                },
                dms: {
                    label: "DM",
                    description: "Notifica per i messaggi diretti (DM)"
                },
                showInActive: {
                    label: "Mostra in Canale Attivo",
                    description: "Mostra notifiche anche per il canale attualmente aperto"
                },
                ignoreMuted: {
                    label: "Ignora Silenziati",
                    description: "Salta notifiche da server, canali o utenti silenziati"
                }
            },
            unknown: "Sconosciuto",
            dm: "DM",
            groupDM: "DM di Gruppo",
            title: "{{username}} in {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Aggiunge un'icona a forma di spilla ai messaggi fissati"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Non mostrare le piccole icone dei server all'interno delle cartelle"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Aggiunge indicatori di piattaforma (Desktop, Mobile, Web...) agli utenti",
            embeddedTooltip: "Console",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lista Membri",
                    description: "Mostra indicatori nella lista membri"
                },
                badges: {
                    label: "Badge",
                    description: "Mostra indicatori nei profili utente come badge"
                },
                messages: {
                    label: "Messaggi",
                    description: "Mostra indicatori all'interno dei messaggi"
                },
                colorMobileIndicator: {
                    label: "Colora Indicatore Mobile",
                    description: "Se far corrispondere il colore dell'indicatore mobile allo stato dell'utente."
                },
                showBots: {
                    label: "Mostra per i Bot",
                    description: "Se mostrare gli indicatori di piattaforma anche sui bot"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Simula la piattaforma o il dispositivo su cui ti trovi",
            about: "Non possiamo garantire che questo plugin non ti porti a avvertimenti o ban.",
            platform: {
                desktop: "Client Discord",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord Embedded",
                playstation: "Discord Embedded",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Piattaforma",
                    description: "Quale piattaforma far apparire",
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
            description: "Aggiunge un pulsante alla barra superiore con le azioni rapide di Plexcord",
            tooltip: "Plexcord Toolbox",
            context: {
                openLog: "Apri Log Notifiche",
                enableQuickCSS: "Abilita QuickCSS",
                openQuickCSS: "Modifica QuickCSS",
                openSettings: "Apri Impostazioni",
                manageThemes: "Gestisci Temi"
            },
            option: {
                showPluginMenu: {
                    label: "Mostra Menu Plugin",
                    description: "Mostra il menu dei plugin nel Toolbox"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Ritocca i tuoi messaggi per renderli più eleganti e correggere la grammatica.",
            option: {
                quickDisable: {
                    label: "Disabilitazione Rapida",
                    description: "Spegne la modifica dei messaggi senza richiedere il riavvio del client."
                },
                blockedWords: {
                    label: "Parole Bloccate",
                    description: "Parole che non verranno capitalizzate (separate da virgola)."
                },
                fixApostrophes: {
                    label: "Correggi Apostrofi",
                    description: "Assicura che le contrazioni contengano gli apostrofi."
                },
                expandContractions: {
                    label: "Espandi Contrazioni",
                    description: "Espande le forme contratte"
                },
                fixCapitalization: {
                    label: "Correggi Maiuscole",
                    description: "Mette la maiuscola all'inizio delle frasi."
                },
                fixPunctuation: {
                    label: "Correggi Punteggiatura",
                    description: "Sistema gli spazi intorno alla punteggiatura."
                },
                fixPunctuationFrequency: {
                    label: "Frequenza Punto Finale",
                    description: "Percentuale di frequenza del punto (può dare fastidio ad alcuni)."
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Ti permette di visualizzare l'anteprima del messaggio prima di inviarlo.",
            tooltip: "Anteprima Messaggio"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Ti permette di salvare e caricare diversi set di profili tramite la sezione Profilo nelle Impostazioni.",
            toast: {
                importFailed: "Impossibile importare i set di profili. Il file potrebbe non essere valido.",
            },
            option: {
                avatarSize: {
                    label: "Dimensione Avatar",
                    description: "Dimensione avatar nella lista preset"
                }
            },
            modal: {
                override: "Sovrascrivi",
                merge: "Unisci",
                cancel: "Annulla",
                timestamp: "{{formattedDate}} alle {{formattedTime}}",
                rename: "Rinomina",
                update: "Aggiorna",
                moveUp: "Sposta Su",
                moveDown: "Sposta Giù",
                moveTo: "Sposta alla Pagina 1",
                delete: "Elimina",
                importProfiles: "Importa Profili",
                importText: "Hai {{existingCount}} profili esistenti. Vuoi sovrascriverli o unirli a quelli importati?",
                heading: "Profili Salvati",
                searchProfiles: "Cerca Profili...",
                profileName: "Nome Profilo",
                saving: "Salvataggio...",
                save: "Salva Profilo",
                cancelSearch: "Annulla Ricerca",
                search: "Cerca",
                random: "Casuale",
                import: "Importa",
                exportAll: "Esporta Tutto"
            }
        },
        questify: {
            name: "Questify",
            description: "Migliora l'esperienza delle Quest (Missioni) con funzioni avanzate, o disabilitale del tutto.",
            quests: "Missioni",
            context: {
                quest: {
                    label: "Menu Pulsante Quest",
                    ignore: "Segna Tutti come Ignorati",
                    reset: "Ripristina Lista Ignorati",
                    fetch: "Recupera Missioni",
                    markAsIgnored: "Segna come Ignorato",
                    unmarkAsIgnored: "Rimuovi da Ignorati",
                    stopAuto: "Ferma Completamento Auto",
                    copyQuestID: "Copia ID Quest",
                    startAuto: "Inizia Completamento Auto"
                }
            },
            settings: {
                questButton: {
                    title: "Pulsante Missioni",
                    description: "Mostra un pulsante Missioni nella lista server con un indicatore opzionale per le Quest non riscattate.",
                    leftClick: "Azione Click Sinistro",
                    middleClick: "Azione Click Centrale",
                    rightClick: "Azione Click Destro",
                    visibility: "Visibilità Pulsante",
                    unclaimedIndicator: "Indicatore non riscattate",
                    badgeColor: "Colore Badge",
                    rewardDisplay: "Visualizzazione Premi",
                    includedRewardTypes: "Tipi di Premi Inclusi",
                    includedRewardTypesDesc: "Conta solo le Quest con questi premi per determinare visibilità e notifiche.",
                    selectRewardTypes: "Seleziona i premi da includere nel conteggio...",
                    noRewardType: "Nessuna funzione supportata con quel nome.",
                    default: "Predefinito",
                    disable: "Disabilita"
                },
                questFeatures: {
                    title: "Funzioni Missioni",
                    description: "Modifica specifiche funzioni delle Quest.",
                    popupWarning: "L'opzione {{disablePopup}} sarà ignorata per le Quest completate e il tracciamento progressi.",
                    videoQuestInfo: "L'opzione {{completeVideo}} attenderà la durata del video e lo segnerà come completato automaticamente.",
                    gameQuestInfo: "L'opzione {{completeGame}} attenderà la durata richiesta del gioco. Supportato solo sul client desktop ufficiale.",
                    manualStartWarning: "Devi comunque avviare le Quest manualmente. Il primo click le avvia in background.",
                    tosWarning: "L'uso di queste opzioni è contro i ToS di Discord. Usa a tuo rischio.",
                    selectFeatures: "Seleziona quali funzioni modificare.",
                    disablePopup: "Disabilita Popup sopra Pannello Account",
                    completeVideo: "Completa Quest Video in Background",
                    completeGame: "Completa Quest Gioco in Background",
                    stopAuto: "Ferma Completamento Auto"
                },
                restyleQuests: {
                    title: "Restyling Missioni",
                    description: "Evidenzia le Quest con colori a tema per visibilità.",
                    precedenceNote: "Gli stili 'Riscattato' e 'Scaduto' hanno la precedenza anche se ignorati.",
                    gradientStyle: "Stile Gradiente",
                    assetPreload: "Precaricamento Asset",
                    unclaimed: "Non Riscattate",
                    claimed: "Riscattate",
                    ignored: "Ignorate",
                    expired: "Scadute",
                    intenseGradient: "Gradiente Intenso",
                    defaultGradient: "Gradiente Predefinito",
                    blackGradient: "Gradiente Nero Sottile",
                    noGradient: "Nessun Gradiente",
                    loadAllAssets: "Carica tutti gli asset al caricamento pagina",
                    loadDuringScroll: "Carica asset durante lo scorrimento"
                },
                reorderQuests: {
                    title: "Riordina Missioni",
                    description: "Ordina le Quest per stato. Si applica quando l'opzione \"Questify\" è selezionata nella pagina delle Missioni.",
                    formatNote: "La lista deve contenere: {{items}}.",
                    placeholder: "Devi includere UNCLAIMED, CLAIMED, IGNORED, EXPIRED",
                    invalidFormat: "Formato non valido.",
                    unclaimedSubsort: "Sotto-ordinamento Non Riscattate",
                    claimedSubsort: "Sotto-ordinamento Riscattate",
                    ignoredSubsort: "Sotto-ordinamento Ignorate",
                    expiredSubsort: "Sotto-ordinamento Scadute",
                    addedNewest: "Aggiunte (Più recenti)",
                    addedOldest: "Aggiunte (Meno recenti)",
                    expiredRecent: "Scadute (Recenti)",
                    expiredLeast: "Scadute (Meno recenti)",
                    expiringSoon: "In scadenza (Presto)",
                    expiringLate: "In scadenza (Tardi)",
                    claimedRecent: "Riscattate (Recenti)",
                    claimedLeast: "Riscattate (Meno recenti)",
                    ignoredQuestProfile: "Profilo Quest Ignorate",
                    sharedProfile: "Condiviso: Tutti gli account condividono gli ignorati.",
                    privateProfile: "Privato: Ogni account ha i propri ignorati separati.",
                    rememberSort: "Ricorda Scelta Ordinamento",
                    rememberFilter: "Ricorda Scelta Filtro",
                    yes: "Sì",
                    no: "No",
                    rememberNote: "Se disabilitato, le opzioni di filtro e ordine si resetteranno ogni volta."
                },
                fetchingQuests: {
                    title: "Recupero Missioni",
                    description: "Configura ogni quanto cercare nuove Quest su Discord e imposta gli avvisi.",
                    defaultBehavior: "Di default, Discord carica le Quest solo all'avvio o visitando la pagina. Senza un intervallo, il plugin non vedrà le nuove Quest aggiunte durante il giorno.",
                    requirement: "Richiede il Pulsante Quest abilitato.",
                    blockWarning: "Se il recupero è bloccato nelle impostazioni Funzioni Missioni, non funzionerà.",
                    fetchInterval: "Intervallo di Recupero",
                    alertSound: "Suono di Avviso",
                    intervalPlaceholder: "Scegli tra 30 minuti e 12 ore.",
                    intervalFeedback: "L'intervallo deve essere tra 30 min e 12 ore.",
                    soundPlaceholder: "Scegli un suono o inserisci un URL.",
                    soundFeedback: "Suono non trovato o dominio non supportato.",
                    disabled: "Disabilitato",
                    minutes: "Minuti",
                    minute: "Minuto",
                    hours: "Ore",
                    hour: "Ora",
                    thirtyMinutes: "30 Minuti",
                    oneHour: "1 Ora",
                    threeHours: "3 Ore",
                    sixHours: "6 Ore",
                    twelveHours: "12 Ore",
                    customSound: "SUONO PERSONALIZZATO"
                },
                disableOptions: {
                    everything: "Disabilita Tutto",
                    discovery: "Disabilita Tab Scoperta",
                    dms: "Disabilita Tab Quest nei DM",
                    fetching: "Disabilita Recupero Missioni",
                    popup: "Disabilita Popup sopra Account",
                    sponsored: "Disabilita Banner Sponsorizzati",
                    badge: "Disabilita Badge sui Profili",
                    inventory: "Disabilita Avviso Spostamento Inventario",
                    friendsList: "Promozione 'Attivi Ora' Lista Amici",
                    membersList: "Icone 'In gioco' Lista Membri",
                    gameQuests: "Completa Quest Gioco in Background",
                    videoQuests: "Completa Quest Video in Background",
                    achievementQuests: "Completa Obiettivi Attività in Background",
                    mobileDesktop: "Rendi Quest Mobile compatibili con Desktop",
                    notifyOnComplete: "Notifica al completamento"
                },
                options: {
                    always: "Sempre",
                    unclaimed: "Non Riscattate",
                    never: "Mai",
                    pill: "Pillola",
                    badge: "Badge",
                    both: "Entrambi",
                    none: "Nessuno",
                    openQuests: "Apri Missioni",
                    contextMenu: "Menu Contestuale",
                    pluginSettings: "Impostazioni Plugin",
                    nothing: "Nulla",
                    orbs: "Sfere (Orbs)",
                    nitroCodes: "Codici Nitro",
                    rewardCodes: "Codici Premio",
                    inGameItems: "Oggetti In-Gioco",
                    profileCollectibles: "Collezionabili Profilo"
                }
            },
            option: {
                disableQuests: {
                    label: "Disabilita Missioni",
                    description: "Scegli quali funzioni delle Missioni disattivare."
                },
                disableQuestsEverything: {
                    label: "Disabilita Tutto",
                    description: "Disattiva tutte le funzioni delle Quest."
                },
                disableQuestsFetchingQuests: {
                    label: "Disabilita Recupero Missioni",
                    description: "Smette di cercare nuove Quest su Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Disabilita Tab Quest nei DM",
                    description: "Rimuove la scheda Missioni dalla pagina dei Messaggi Diretti."
                },
                disableQuestsDiscoveryTab: {
                    label: "Disabilita Tab Scoperta",
                    description: "Rimuove la scheda Missioni dalla pagina Scoperta."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Disabilita Banner Sponsorizzati",
                    description: "Rimuove i banner sponsorizzati dalla pagina Missioni."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Disabilita Popup sopra Pannello Account",
                    description: "Rimuove il piccolo popup delle Quest sopra il tuo profilo."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Disabilita Badge sui Profili Utente",
                    description: "Non mostra il badge delle Quest sui profili."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Disabilita Avviso Inventario Regali",
                    description: "Nasconde l'avviso che informa dello spostamento dell'inventario."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Disabilita Promozione Lista Amici",
                    description: "Nasconde le Quest suggerite basate sui giochi degli amici."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Disabilita Icone 'In Gioco' Lista Membri",
                    description: "Nasconde le icone delle Quest nella lista membri."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Rendi Quest Mobile Compatibili Desktop",
                    description: "Permette di completare le Quest nate per mobile su PC."
                },
                completeVideoQuestsInBackground: {
                    label: "Completa Quest Video in Background",
                    description: "Completa le Quest video automaticamente allo scadere del tempo."
                },
                completeGameQuestsInBackground: {
                    label: "Completa Quest Gioco in Background",
                    description: "Completa le Quest di gioco automaticamente allo scadere del tempo."
                },
                completeAchievementQuestsInBackground: {
                    label: "Completa Task Attività in Background",
                    description: "Completa gli obiettivi delle attività in background."
                },
                notifyOnQuestComplete: {
                    label: "Notifica al Completamento",
                    description: "Mostra una notifica quando una Quest viene finita automaticamente."
                },
                questButton: {
                    label: "Pulsante Missioni",
                    description: "Mostra un pulsante per le Missioni nella lista server."
                },
                questButtonDisplay: {
                    label: "Visualizzazione Pulsante",
                    description: "Tipo di visualizzazione per il pulsante Missioni."
                },
                questRewardIncludeRewardCode: {
                    label: "Includi Codici Premio",
                    description: "Includi le Quest con Codici Premio nei conteggi."
                },
                questRewardIncludeNitroCode: {
                    label: "Includi Codici Nitro",
                    description: "Includi le Quest con Codici Nitro nei conteggi."
                },
                questRewardIncludeInGame: {
                    label: "Includi Premi In-Gioco",
                    description: "Includi le Quest con premi In-Gioco nei conteggi."
                },
                questRewardIncludeCollectibles: {
                    label: "Includi Collezionabili",
                    description: "Includi le Quest con Collezionabili Profilo nei conteggi."
                },
                questRewardIncludeOrbs: {
                    label: "Includi Sfere (Orbs)",
                    description: "Includi le Quest con Orbs nei conteggi."
                },
                questButtonUnclaimed: {
                    label: "Indicatore Non Riscattate",
                    description: "Stile dell'indicatore per le Quest da riscattare."
                },
                questButtonBadgeColor: {
                    label: "Colore Badge Pulsante",
                    description: "Il colore del badge del pulsante Missioni."
                },
                questButtonLeftClickAction: {
                    label: "Azione Click Sinistro",
                    description: "Cosa succede cliccando col sinistro."
                },
                questButtonMiddleClickAction: {
                    label: "Azione Click Centrale",
                    description: "Cosa succede cliccando col centrale."
                },
                questButtonRightClickAction: {
                    label: "Azione Click Destro",
                    description: "Cosa succede cliccando col destro."
                },
                fetchingQuests: {
                    label: "Recupero Missioni",
                    description: "Recupera le Quest da Discord."
                },
                fetchingQuestsInterval: {
                    label: "Intervallo Recupero (secondi)",
                    description: "Ogni quanto cercare nuove Quest."
                },
                fetchingQuestsAlert: {
                    label: "Avviso Nuovo Recupero",
                    description: "Suono da riprodurre quando vengono trovate nuove Quest."
                },
                fetchingQuestsAlertVolume: {
                    label: "Volume Avviso Recupero",
                    description: "Volume del suono di avviso."
                },
                restyleQuests: {
                    label: "Restyling Missioni",
                    description: "Personalizza l'aspetto delle schede Quest."
                },
                restyleQuestsUnclaimed: {
                    label: "Colore Non Riscattate",
                    description: "Colore per le Quest da riscattare."
                },
                restyleQuestsClaimed: {
                    label: "Colore Riscattate",
                    description: "Colore per le Quest già riscattate."
                },
                restyleQuestsIgnored: {
                    label: "Colore Ignorate",
                    description: "Colore per le Quest messe tra gli ignorati."
                },
                restyleQuestsExpired: {
                    label: "Colore Scadute",
                    description: "Colore per le Quest ormai scadute."
                },
                restyleQuestsGradient: {
                    label: "Gradiente Restyling",
                    description: "Stile del gradiente nelle schede Quest."
                },
                restyleQuestsPreload: {
                    label: "Precaricamento Asset",
                    description: "Tenta di caricare le immagini delle Quest in anticipo."
                },
                reorderQuests: {
                    label: "Riordina Missioni",
                    description: "Ordina le Quest per stato. Lascia vuoto per default. Deve contenere: UNCLAIMED, CLAIMED, IGNORED, EXPIRED."
                },
                unclaimedSubsort: {
                    label: "Sotto-ordinamento Non Riscattate",
                    description: "Metodo di ordinamento secondario."
                },
                claimedSubsort: {
                    label: "Sotto-ordinamento Riscattate",
                    description: "Metodo di ordinamento secondario."
                },
                ignoredSubsort: {
                    label: "Sotto-ordinamento Ignorate",
                    description: "Metodo di ordinamento secondario."
                },
                expiredSubsort: {
                    label: "Sotto-ordinamento Scadute",
                    description: "Metodo di ordinamento secondario."
                },
                unclaimedUnignoredQuests: {
                    label: "Quest Non Riscattate e Non Ignorate",
                    description: "Traccia il numero di Quest attive."
                },
                onQuestsPage: {
                    label: "Sulla Pagina Quest",
                    description: "Se l'utente è attualmente nella pagina delle Missioni."
                },
                triggerQuestsRerender: {
                    label: "Forza Render Quest",
                    description: "Attiva un nuovo rendering della pagina Missioni."
                },
                ignoredQuestProfile: {
                    label: "Profilo Quest Ignorate",
                    description: "Il profilo utilizzato per gestire le Quest ignorate."
                },
                rememberQuestPageSort: {
                    label: "Ricorda Ordine Pagina Quest",
                    description: "Ricorda l'ultimo ordinamento usato nella pagina."
                },
                rememberQuestPageFilters: {
                    label: "Ricorda Filtri Pagina Quest",
                    description: "Ricorda l'ultimo filtro usato nella pagina."
                },
                lastQuestPageSort: {
                    label: "Ultimo Ordine Usato",
                    description: "Ricorda l'ultimo ordinamento."
                },
                lastQuestPageFilters: {
                    label: "Ultimi Filtri Usati",
                    description: "Ricorda gli ultimi filtri."
                },
                ignoredQuestIDs: {
                    label: "ID Quest Ignorate",
                    description: "Array di ID delle missioni ignorate."
                },
                resumeQuestIDs: {
                    label: "ID Quest in Ripristino",
                    description: "Array di ID delle missioni in fase di completamento automatico."
                }
            },
            button: {
                questInProgressWithTime: "Completamento ({{remainTime}})",
                completing: "Completamento in corso",
                resume: "Riprendi (~{{remainTime}})",
                complete: "Completa {{remainTime}}",
                completeImmediate: "Completa (Immediato)",
                completed: "Completato"
            },
            reward: {
                orbs: "{{completingText}} per {{orbQuantity}} Sfere (Orbs).",
                article: "{{completingText}} per {{itemName}}.",
                unrecognized: "{{completingText}} per un premio non riconosciuto."
            },
            notification: {
                completed: {
                    title: "Missione Completata",
                    body: "La missione {{questName}} è stata completata."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Sostituisce tutti i punti di domanda con una stringa a scelta, se il messaggio contiene solo quelli.",
            option: {
                replace: {
                    label: "Sostituisci con",
                    description: "Sostituisci con"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Aggiunge un pulsante per la menzione rapida nella barra delle azioni del messaggio",
            tooltip: "Menzione Rapida"
        },
        quickReply: {
            name: "QuickReply",
            description: "Rispondi (Ctrl+Su/Giù) e modifica (Ctrl+Shift+Su/Giù) i messaggi tramite scorciatoie da tastiera",
            option: {
                shouldMention: {
                    label: "Menzione",
                    description: "Ping della risposta di default",
                    noReplyMentionPlugin: "Segui il plugin NoReplyMention (se attivo)",
                    enabled: "Abilitato",
                    disabled: "Disabilitato"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignora Bloccati e Ignorati",
                    description: "Ignora i messaggi di utenti bloccati/ignorati durante la navigazione"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Cambia rapidamente tema usando scorciatoie da tastiera.",
            about: {
                title: "Scorciatoie",
                description: "Usa Ctrl/Cmd+Shift+Frecce per navigare (Sinistra/Destra: cicla temi, Su: abilita, Giù: disabilita).",
                reload: "Premi Ctrl/Cmd+Shift+Alt per ricaricare la lista dei temi."
            },
            modal: {
                added: "Aggiunto/i {{count}} tema/i",
                removed: "Rimosso/i {{count}} tema/i",
                reloaded: "Ricaricati {{themeCount}} temi",
                addedLocal: "Aggiunto/i {{count}} tema/i locale/i",
                removedLocal: "Rimosso/i {{count}} tema/i locale/i",
            },
            option: {
                includeLocal: {
                    label: "Includi Locali",
                    description: "Includi temi locali"
                },
                includeOnline: {
                    label: "Includi Online",
                    description: "Includi temi online"
                },
                sortOrder: {
                    label: "Ordinamento",
                    description: "Metodo di ordinamento",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Recenti"
                },
                autoRefresh: {
                    label: "Aggiornamento Automatico",
                    description: "Aggiorna la lista dei temi quando vengono rilevati cambiamenti"
                },
                showNotifications: {
                    label: "Mostra Notifiche",
                    description: "Mostra notifiche quando i temi vengono aggiunti/rimossi"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Aggiunge la possibilità di creare un'immagine 'citazione ispirazionale' da un messaggio",
            context: {
                quote: "Cita (Immagine)"
            },
            modal: {
                title: "Beccati in 4k",
                grayscale: "Scala di grigi",
                export: "Esporta",
                send: "Invia",
                saveAsGIF: "Salva come GIF",
                saveDescription: "Salva/Invia l'immagine come GIF invece di PNG",
                showWatermark: "Mostra Watermark",
                watermarkText: "Testo Watermark (max 32 caratteri)"
            },
            option: {
                quoteFont: {
                    label: "Font Citazione",
                    description: "Carattere per il testo della citazione (autore/username usano sempre M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Watermark",
                    description: "Testo personalizzato per il watermark (max 32 caratteri)"
                },
                grayscale: {
                    label: "Scala di grigi",
                    description: "Abilita scala di grigi di default"
                },
                showWatermark: {
                    label: "Mostra Watermark",
                    description: "Mostra watermark di default"
                },
                saveAsGif: {
                    label: "Salva come GIF",
                    description: "Salva come GIF di default"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Aggiunge un pulsante vicino a quello per silenziare il microfono per entrare in una chiamata casuale.",
            tooltip: "Voce Casuale",
            context: {
                label: "Modificatore stato voce",
                amountLabel: "QUANTITÀ UTENTI",
                spacesLabel: "POSTI LIBERI",
                voiceLabel: "LIMITE VOCE",
                selfLabel: "IMPOSTAZIONI PERSONALI",
                select: {
                    servers: "Seleziona Server",
                    list: "Seleziona Lista",
                    filters: "Seleziona Filtri",
                    amount: "Quantità Utenti",
                    userAmount: "{{amount}} utente/i",
                    parameters: "Parametri",
                    moreThan: "Più di",
                    lessThan: "Meno di",
                    equalTo: "Uguale a",
                    spaces: "Posti Liberi",
                    voice: "Limite Voce"
                },
                filter: {
                    muted: "Silenziati",
                    deafened: "In cuffia",
                    camera: "Telecamera",
                    stream: "Stream",
                    includeFilters: "Includi Filtri",
                    avoidFilters: "Evita Filtri"
                },
                reset: {
                    list: "Ripristina Lista"
                },
                voice: {
                    label: "Opzioni Voce",
                    auto: {
                        mute: "Auto Silenzia",
                        deafen: "Auto Cuffia",
                        camera: "Auto Camera",
                        stream: "Auto Stream",
                        leaveWhenEmpty: "Esci se Vuoto",
                        navigate: "Navigazione Auto",
                        stage: "Evita Stage",
                        afk: "Evita AFK"
                    }
                },
                invalid: {
                    server: "Server non valido"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Operazione Quantità Utenti",
                    description: "Seleziona un'operazione per il numero di utenti"
                },
                userAmount: {
                    label: "Quantità Utenti",
                    description: "Seleziona il numero di utenti"
                },
                spacesLeftOperation: {
                    label: "Operazione Posti Liberi",
                    description: "Seleziona un'operazione per i posti massimi liberi"
                },
                spacesLeft: {
                    label: "Posti Liberi",
                    description: "Seleziona quantità di utenti max"
                },
                vcLimitOperation: {
                    label: "Operazione Limite Canale Vocale",
                    description: "Seleziona un'operazione per il canale vocale."
                },
                vcLimit: {
                    label: "Limite Canale Vocale",
                    description: "Seleziona un limite per il canale vocale"
                },
                servers: {
                    label: "Server",
                    description: "Server inclusi"
                },
                autoNavigate: {
                    label: "Navigazione Automatica",
                    description: "Ti sposta automaticamente nel canale vocale trovato."
                },
                autoCamera: {
                    label: "Auto Camera",
                    description: "Accende automaticamente la telecamera"
                },
                autoStream: {
                    label: "Auto Stream",
                    description: "Avvia automaticamente lo streaming"
                },
                selfMute: {
                    label: "Auto Silenzia",
                    description: "Silenzia il tuo microfono all'ingresso nel canale."
                },
                selfDeafen: {
                    label: "Auto Cuffia",
                    description: "Disabilita il tuo audio all'ingresso nel canale."
                },
                leaveEmpty: {
                    label: "Esci se Vuoto",
                    description: "Cerca un'altra chiamata se il canale è vuoto."
                },
                avoidStages: {
                    label: "Evita Stage",
                    description: "Evita di entrare nei canali Stage."
                },
                avoidAfk: {
                    label: "Evita AFK",
                    description: "Evita di entrare nei canali AFK."
                },
                video: {
                    label: "Video",
                    description: "Cerca utenti con telecamera accesa"
                },
                stream: {
                    label: "Stream",
                    description: "Cerca utenti in streaming"
                },
                mute: {
                    label: "Silenziato",
                    description: "Cerca utenti silenziati"
                },
                deafen: {
                    label: "In cuffia",
                    description: "Cerca utenti con audio disattivato"
                },
                includeStates: {
                    label: "Includi Filtri",
                    description: "Opzione per includere stati"
                },
                avoidStates: {
                    label: "Evita Filtri",
                    description: "Opzione per evitare stati"
                }
            },
            alert: {
                failed: "Impossibile trovare un canale vocale!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Decodifica i codici errore di React in messaggi leggibili."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Segna come lette tutte le notifiche dei server con un singolo click!",
            button: "Leggi Tutto"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Usa Ctrl+Tab per scorrere tra i DM più recenti (Ctrl+Shift+Tab per l'ordine inverso)",
            option: {
                visualStyle: {
                    label: "Stile Visuale",
                    description: "Stile dell'indicatore durante il ciclo",
                    overlay: "Sovrimpressione (Stile Alt+Tab)",
                    toast: "Notifica (Messaggio di stato)",
                    off: "Spento"
                },
                overlayMode: {
                    label: "Modalità Overlay",
                    description: "Contenuto dell'overlay",
                    row: "Fila dei recenti",
                    current: "Solo attuale",
                },
                amountOfUsers: {
                    label: "Quantità Utenti",
                    description: "Numero di utenti da mostrare nell'overlay"
                },
                overlayRowLength: {
                    label: "Lunghezza Fila Overlay",
                    description: "Numero di DM recenti da mostrare nella fila"
                },
                overlayShowAvatars: {
                    label: "Mostra Avatar in Overlay",
                    description: "Mostra gli avatar degli utenti nell'overlay"
                },
                toastDurationMs: {
                    label: "Durata Notifica (ms)",
                    description: "Durata del messaggio di stato"
                },
                clearRdms: {
                    label: "Pulisci Lista RDMS",
                    description: "Utility di test: Pulisci la lista RDMs",
                    toast: "Cronologia RMDS pulita",
                    button: "Pulisci Cronologia RDMs"
                }
            },
            modal: {
                unknown: "Sconosciuto",
                dm: "DM",
                group: "DM di Gruppo",
                channel: "Canale",
                switchingTo: "Passando a: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Ti avvisa quando un amico, un gruppo o un server ti rimuove.",
            option: {
                notices: {
                    label: "Avvisi Superiori",
                    description: "Mostra anche un avviso nella parte alta dello schermo quando vieni rimosso."
                },
                offlineRemovals: {
                    label: "Rimozioni Offline",
                    description: "Ti avvisa all'avvio di Discord se sei stato rimosso mentre eri offline."
                },
                friends: {
                    label: "Amici",
                    description: "Notifica quando un amico ti rimuove"
                },
                friendRequestCancels: {
                    label: "Richieste Amicizia Annullate",
                    description: "Notifica quando una richiesta di amicizia viene annullata"
                },
                servers: {
                    label: "Server",
                    description: "Notifica quando vieni rimosso da un server"
                },
                groups: {
                    label: "Gruppi",
                    description: "Notifica quando vieni rimosso da un gruppo"
                }
            },
            notification: {
                removedFriend: "{{user}} ti ha rimosso dagli amici.",
                cancelledFriendRequest: "Una richiesta di amicizia da {{user}} è stata rimossa.",
                removedFromServer: "Sei stato rimosso dal server {{server}}.",
                removedFromGroup: "Sei stato rimosso dal gruppo {{group}}.",
                noLongerGroup: "Non sei più nel gruppo {{group}}.",
                noLongerServer: "Non sei più nel server {{server}}.",
                noLongerFriend: "Non sei più amico di {{user}}.",
                friendRequestRevoked: "La richiesta di amicizia di {{user}} è stata revocata.",
                ok: "OK"
            }
        },
        remix: {
            name: "Remix",
            description: "Aggiunge un'opzione 'Remix' al menu del tasto destro sul pulsante di caricamento file. Apre un editor di immagini semplice per modificare e inviare direttamente l'immagine.",
            label: "Remix",
            button: {
                send: "Invia",
                close: "Chiudi",
                brush: "Pennello",
                erase: "Gomma",
                crop: "Ritaglia",
                shape: "Forma",
                reset: "Ripristina",
                clear: "Pulisci"
            },
            editor: {
                choose: "Scegli un'immagine",
                browse: "Sfoglia",
                rectangle: "Rettangolo",
                ellipse: "Ellisse",
                line: "Linea",
                arrow: "Freccia",
                fill: "Riempi"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Ti permette di ripetere i messaggi rapidamente. Tenendo premuto Shift mentre clicchi l'opzione Ripeti, risponderà al messaggio.",
            button: "Ripeti (Click) / Ripeti e Rispondi (Shift + Click)",
            context: {
                repeat: "Ripeti",
                repeatAndReply: "Ripeti e Rispondi"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Sostituisce la ricerca Google con altri motori di ricerca.",
            option: {
                customEngineName: {
                    label: "Nome Motore Personalizzato",
                    description: "Nome del motore di ricerca personalizzato"
                },
                customEngineURL: {
                    label: "URL Motore Personalizzato",
                    description: "L'URL del tuo motore di ricerca"
                },
                replacementEngine: {
                    label: "Motore Sostitutivo",
                    description: "Sostituisci con un motore specifico invece di aggiungere un menu",
                    off: "Spento",
                    custom: "Motore Personalizzato",
                }
            },
            context: {
                label: "Cerca Testo",
                searchWith: "Cerca con {{name}}"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Controlla se ricevere sempre o mai il ping nelle risposte, con una whitelist",
            option: {
                alwaysPingOnReply: {
                    label: "Ping Sempre in Risposta",
                    description: "Ricevi sempre il ping quando qualcuno risponde ai tuoi messaggi"
                },
                replyPingWhitelist: {
                    label: "Whitelist Ping Risposte",
                    description: "Lista di ID utente (separati da virgola) da cui ricevere sempre il ping nelle risposte"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Mostra l'orario nell'anteprima dei messaggi a cui si risponde"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Rivela tutti gli spoiler in un messaggio con Ctrl+Click, o in tutta la chat con Ctrl+Shift+Click"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Aggiunge la ricerca inversa delle immagini ai menu contestuali",
            context: {
                label: "Cerca Immagine",
                all: "Cerca su tutti"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Recensisci altri utenti (Aggiunge una sezione ai profili)",
            notification: {
                newReview: "Hai nuove recensioni sul tuo profilo!",
                auth: {
                    error: "Errore durante l'autorizzazione",
                    successfully: "Accesso effettuato con successo!",
                    failed: "Autorizzazione fallita",
                    review: "Autorizza per aggiungere una recensione.",
                    opening: "Apertura finestra di autorizzazione...",
                    need: "Devi autorizzare per recensire gli utenti!"
                },
                error: {
                    fast: "Stai inviando richieste troppo velocemente. Attendi qualche secondo.",
                    fetching: "Errore durante il recupero delle recensioni.",
                    action: {
                        failed: "Impossibile {{action}} l'utente",
                        success: "Azione {{action}} eseguita con successo"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Sei sicuro?",
                    description: "Vuoi davvero eliminare questa recensione?",
                    confirm: "Elimina",
                    cancel: "Annulla",
                    error: "Devi aver effettuato l'accesso per eliminare le recensioni.",
                },
                report: {
                    title: "Sei sicuro?",
                    description: "Vuoi davvero segnalare questa recensione?",
                    confirm: "Segnala",
                    cancel: "Annulla",
                    error: "Devi aver effettuato l'accesso per segnalare le recensioni.",
                },
                block: {
                    title: "Sei sicuro?",
                    description: "Vuoi davvero bloccare questo utente? non vedrai più le sue recensioni.",
                    confirm: "Blocca",
                    cancel: "Annulla",
                    error: "Devi aver effettuato l'accesso per bloccare gli utenti.",
                },
                blocked: {
                    title: "Utenti Bloccati",
                    auth: "Non sei collegato a ReviewDB!",
                    noBlocked: "Nessun utente bloccato.",
                    fetch: "Errore durante il recupero degli utenti bloccati."
                },
                reviews: {
                    title: "Recensioni di",
                    noUser: "Sembra che nessuno abbia ancora recensito questo utente. Sii il primo!",
                    noServer: "Sembra che nessuno abbia ancora recensito questo server. Sii il primo!"
                }
            },
            button: {
                appeal: "Ricorso",
                ok: "OK",
                more: "Leggi di più",
                reply: "Rispondi a @{{user}}",
                update: "Aggiorna recensione per @{{user}}",
                review: "Recensisci @{{user}}"
            },
            context: {
                view: "Visualizza Recensioni",
                blocked: "Hai bloccato questo utente",
                delete: "Elimina Recensione",
                report: "Segnala Recensione",
                block: "Blocca Utente",
                unblock: "Sblocca Utente",
                reply: "Rispondi alla Recensione"
            },
            option: {
                authorize: {
                    label: "Autorizza",
                    button: "Autorizza con ReviewDB"
                },
                notifyReviews: {
                    label: "Notifica Recensioni",
                    description: "Notifica le nuove recensioni all'avvio"
                },
                showWarning: {
                    label: "Mostra Avviso",
                    description: "Mostra l'avviso di essere rispettosi in cima alla lista recensioni"
                },
                hideTimestamps: {
                    label: "Nascondi Orari",
                    description: "Nascondi gli orari sulle recensioni"
                },
                hideBlockedUsers: {
                    label: "Nascondi Utenti Bloccati",
                    description: "Nascondi le recensioni degli utenti bloccati"
                },
                buttons: {
                    label: "Pulsanti",
                    manageBlocked: "Gestisci Utenti Bloccati",
                    support: "Supporta lo sviluppo di ReviewDB",
                    website: "Sito web di ReviewDB",
                    server: "Server di supporto ReviewDB"
                }
            },
            profile: {
                optedOut: "Utente ha rinunciato",
                noReviews: "Ancora nessuna recensione"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Renderizza i link magnet come se fossero link ai messaggi",
            unknown: "nome file sconosciuto"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Aggiunge il colore del ruolo più alto ovunque sia possibile",
            option: {
                chatMentions: {
                    label: "Menzioni in Chat",
                    description: "Mostra i colori dei ruoli nelle menzioni in chat (incluso il box di scrittura)"
                },
                memberList: {
                    label: "Lista Membri",
                    description: "Mostra i colori dei ruoli nelle intestazioni dei ruoli nella lista membri"
                },
                voiceUsers: {
                    label: "Utenti in Voce",
                    description: "Mostra i colori dei ruoli nella lista utenti dei canali vocali"
                },
                reactorsList: {
                    label: "Lista Reazioni",
                    description: "Mostra i colori dei ruoli nella lista di chi ha reagito"
                },
                pollResults: {
                    label: "Risultati Sondaggio",
                    description: "Mostra i colori dei ruoli nei risultati dei sondaggi"
                },
                colorChatMessages: {
                    label: "Colora Messaggi Chat",
                    description: "Colora l'intero messaggio in base al colore del ruolo dell'autore"
                },
                messageSaturation: {
                    label: "Saturazione Messaggi",
                    description: "Intensità della colorazione dei messaggi"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Modifica il tipo e il contenuto di qualsiasi Rich Presence",
            option: {
                replacedAppIds: {
                    label: "ID App Sostituiti",
                }
            },
            modal: {
                tutorial: {
                    title: "ID delle attività attualmente in esecuzione",
                    noRunning: "Nessuna attività in esecuzione",
                    available: "Variabili disponibili",
                    variableText: "In tutti i campi (eccetto l'URL stream), puoi inserire variabili che verranno sostituite dai contenuti originali:",
                    more: "Più dettagli",
                    details: {
                        leave: "Lascia un campo vuoto per non modificarlo.",
                        set: "Imposta un campo su 'null' per nasconderlo nella presenza.",
                        reload: "Potresti dover riavviare Discord per applicare le modifiche."
                    }
                },
                settings: {
                    applyEdits: "Applica modifiche all'app",
                    addNewApp: "Aggiungi nuova applicazione",
                    appId: "ID Applicazione",
                    invalidAppId: "ID Applicazione non valido",
                    newActivityType: "Nuovo tipo attività",
                    activityTypes: {
                        playing: "Sta giocando a",
                        watching: "Sta guardando",
                        listening: "Sta ascoltando",
                        competing: "Sta partecipando a",
                        streaming: "In streaming"
                    },
                    streamUrl: "URL Stream (deve essere YouTube o Twitch)",
                    invalidStreamUrl: "URL stream non valido",
                    newName: "Nuovo nome",
                    newDetails: "Nuovi dettagli",
                    newState: "Nuovo stato",
                    largeImage: "Immagine grande",
                    smallImage: "Immagine piccola",
                    text: "Testo",
                    url: "URL",
                    firstLine: "(prima riga)",
                    secondLine: "(seconda riga)",
                    thirdLine: "(terza riga)",
                    alsoThirdLine: "(anche terza riga)",
                    hideAssets: "Nascondi asset (immagini grande e piccola)",
                    hideTimestamps: "Nascondi orari"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Mostra le statistiche della tua attività come Rich Presence",
            option: {
                assetURL: {
                    label: "URL Asset",
                    description: "L'immagine da usare per il tuo RPC. Se vuoto, verrà usata la tua foto profilo"
                },
                rpcTitle: {
                    label: "Titolo RPC",
                    description: "Il titolo del tuo Rich Presence"
                },
                statDisplay: {
                    label: "Visualizzazione Statistiche",
                    description: "Cosa deve mostrare l'RPC?",
                    today: "La quantità di messaggi inviati oggi",
                    alltime: "La quantità di messaggi inviati in totale",
                    listened: "Il tuo album più ascoltato della settimana (Last.fm)"
                },
                lastFMApiKey: {
                    label: "Chiave API Last.fm",
                    description: "La tua chiave API di Last.fm"
                },
                lastFMUsername: {
                    label: "Username Last.fm",
                    description: "Il tuo nome utente di Last.fm"
                },
                albumCoverImage: {
                    label: "Immagine Copertina Album",
                    description: "Usa la copertina dell'album come immagine RPC (se è attiva la stat di Last.fm)"
                },
                lastFMStatFormat: {
                    label: "Formato Stat Last.fm",
                    description: "Come formattare la stat? $album per l'album, $artist per l'artista"
                }
            },
            noInfo: "Nessuna info al momento :(",
            messagesToday: "Messaggi inviati oggi: {{count}}",
            messagesAllTime: "Messaggi totali inviati: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Esporta gli URL delle GIF preferite",
            toolbox: "Salva GIF Preferite",
            title: "Salva GIF Preferite",
            command: {
                savegifs: {
                    description: "Salva tutti gli URL delle GIF preferite in un file di testo"
                },
                saveworkinggifs: {
                    description: "Testa tutte le GIF preferite e salva solo quelle ancora funzionanti"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Mostra Pulsante Toolbox",
                    description: "Mostra il pulsante 'Salva GIF Preferite' nel Toolbox di Plexcord (Richiede Riavvio)"
                }
            },
            toast: {
                save: "GIF salvate con successo come {{filename}}",
                failed: "Impossibile salvare le GIF",
                no: "Nessuna GIF preferita trovata!",
                testing: "Test di {{count}} GIF in corso, potrebbe richiedere un momento...",
                noneWorking: "Nessuna delle tue GIF salvate sembra essere funzionante.",
                saved: "Filtrate {{broken}} GIF probabilmente corrotte. Salvate {{saved}} GIF funzionanti."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Programma l'invio di messaggi a un orario specifico o dopo un ritardo.",
            toolbox: {
                toggle: "Visualizza Messaggi Programmati"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Messaggi Max per Minuto",
                    description: "Numero massimo di messaggi programmati che possono essere inviati nello stesso minuto per canale."
                },
                checkIntervalSeconds: {
                    label: "Intervallo di Controllo (Secondi)",
                    description: "Ogni quanto il plugin controlla se ci sono messaggi da inviare."
                },
                showNotifications: {
                    label: "Mostra Notifiche",
                    description: "Mostra notifiche toast quando i messaggi vengono inviati."
                },
                showPhantomMessages: {
                    label: "Mostra Messaggi Fantasma",
                    description: "Mostra i messaggi programmati come messaggi fantasma nella chat."
                }
            },
            channelType: {
                unknown: "Sconosciuto",
                dm: "DM",
                groupDm: "DM di Gruppo",
                channel: "Canale"
            },
            toast: {
                messageSent: "Messaggio programmato inviato in {{channel}}",
                messageFailed: "Impossibile inviare il messaggio programmato",
                maxMessagesReached: "Limite massimo di {{max}} messaggi per canale al minuto raggiunto",
                messageScheduled: "Messaggio programmato!",
                messageRemoved: "Messaggio programmato rimosso",
                allCleared: "Tutti i messaggi programmati sono stati cancellati"
            },
            button: {
                tooltipOn: "Modalità Programmazione ATTIVA (clicca per disabilitare, tasto destro per la lista)",
                tooltipOff: "Modalità Programmazione DISATTIVA (clicca per abilitare, tasto destro per la lista)"
            },
            accessory: {
                scheduledFor: "Programmato per il {date}{timeLeft}",
                remaining: {
                    days: "{{days}}g {{hours}}o rimanenti",
                    hours: "{{hours}}o {{minutes}}m rimanenti",
                    minutes: "{{minutes}}m rimanenti"
                }
            },
            scheduleModal: {
                title: "Programma Messaggio",
                schedulingFor: "Programmazione per: {{channel}}",
                scheduleType: "Tipo di Programmazione",
                delay: "Ritardo",
                specificTime: "Orario Specifico",
                delayMinutes: "Ritardo (minuti)",
                dateTime: "Data e Ora",
                error: {
                    invalidDelay: "Inserisci un ritardo valido (minimo 1 minuto)",
                    invalidDateTime: "Seleziona una data e un'ora futura"
                },
                schedule: "Programma",
                cancel: "Annulla"
            },
            viewModal: {
                title: "Messaggi Programmati",
                clearAll: "Cancella Tutto",
                noMessages: "Nessun messaggio programmato",
                delete: "Elimina",
                close: "Chiudi"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Corregge il fastidioso errore 'Abbiamo perso la lente d'ingrandimento!'.",
            notPerfect: "Questa correzione non è perfetta, potresti dover ricaricare la barra di ricerca per risolvere alcuni problemi.",
            paragraph1: "Discord consente un offset massimo di 5000 (questo causa l'errore della lente d'ingrandimento).",
            paragraph2: "Ciò significa che puoi vedere esattamente 5000 messaggi nel passato e 5000 nel futuro (ordinando per i più vecchi).",
            paragraph3: "Questo plugin alterna il metodo di ordinamento per cercare di aggirare la restrizione di Discord,",
            paragraph4: "ma se il risultato della ricerca è molto ampio e cerchi di visualizzare un messaggio non ottenibile con entrambi i metodi,",
            paragraph5: "il plugin mostrerà semplicemente l'offset 0 (il messaggio più recente o più vecchio a seconda dell'ordinamento)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Riproduce sempre la versione segreta della suoneria di Discord (eccetto durante eventi speciali)",
            option: {
                onlySnow: {
                    label: "Solo durante l'evento suoneria neve",
                    description: "Riproduce solo il tema Snow Halation"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Abilita la funzione sperimentale 'Summaries' di Discord su ogni server, mostrando riassunti delle conversazioni generati dall'IA",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Soglia Scadenza Riassunti (Giorni)",
                    description: "Tempo in giorni prima che un riassunto venga rimosso. Nota: vengono conservati al massimo 50 riassunti per canale"
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Aggiunge il canale corrente alla lista di inoltro rapido"
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Invia facilmente timestamp tramite pulsante e scorciatoie testuali. Leggi la descrizione estesa!",
            sample: {
                paragraph1: "Per inviare rapidamente timestamp di sola ora, includi l'orario nel formato `HH:MM` (apici inclusi!) nel tuo messaggio",
                paragraph2: "Vedi sotto per gli esempi.\nSe hai bisogno di qualcosa di più specifico, usa il pulsante Data nella barra della chat!",
                examples: "Esempi:"
            },
            modal: {
                title: "Selettore Timestamp",
                light: "Chiaro",
                dark: "Scuro",
                format: "Formato Timestamp",
                preview: "Anteprima",
                insert: "Inserisci",
                insertTimestamp: "Inserisci Timestamp"
            },
            option: {
                replaceMessageContents: {
                    label: "Sostituisci Contenuto Messaggio",
                    description: "Sostituisce i timestamp nel contenuto del messaggio"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Ti permette di visualizzare informazioni dettagliate su un server",
            context: {
                serverInfo: "Info Server"
            },
            option: {
                sorting: {
                    label: "Ordinamento",
                    description: "Username o, se applicabile, Nome Visualizzato",
                    username: "Username",
                    displayname: "Nome Visualizzato",
                    none: "Non Ordinare"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Info Server",
                    friends: "Amici",
                    mutualUsers: "Utenti in Comune",
                    blockedUsers: "Utenti Bloccati",
                    ignoredUsers: "Utenti Ignorati"
                },
                owner: "Proprietario del Server",
                loading: "Caricamento...",
                createdAt: "Creato il",
                joinedAt: "Entrato il",
                vanityLink: "Link Personalizzato",
                preferredLocale: "Lingua Preferita",
                verification: {
                    level: "Livello di Verifica",
                    none: "Nessuno",
                    low: "Basso",
                    medium: "Medio",
                    high: "Alto",
                    highest: "Massimo"
                },
                serverBoosts: "Potenziamenti Server",
                channels: "Canali",
                roles: "Ruoli"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Aggiunge il conteggio degli amici online o dei server nella lista dei server",
            friends: "Amici",
            servers: "Server",
            option: {
                mode: {
                    label: "Modalità",
                    description: "Cosa visualizzare nella lista server",
                    friend: "Solo amici online",
                    server: "Solo conteggio server",
                    both: "Entrambi"
                },
                useCompact: {
                    label: "Usa Modalità Compatta",
                    description: "Mostra l'indicatore solo come testo"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Naviga meglio tra i tuoi server con un pulsante di ricerca rapida",
            tooltip: "Cerca"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Porta i blocchi di codice stile VS Code su Discord, potenziati da Shiki",
            option: {
                theme: {
                    label: "Tema",
                    description: "Temi predefiniti"
                },
                customTheme: {
                    label: "Tema Personalizzato",
                    description: "Un link a un tema VS Code personalizzato",
                    mustURL: "Deve essere un URL valido",
                    mustJSON: "Deve essere un file JSON"
                },
                tryHljs: {
                    label: "Fallback a Hljs",
                    description: "Usa l'evidenziatore predefinito di Discord (più leggero).",
                    never: "Mai",
                    secondary: "Preferisci Shiki invece di Highlight.js",
                    primary: "Preferisci Highlight.js invece di Shiki",
                    always: "Sempre"
                },
                useDevIcon: {
                    label: "Usa Devicon per le Icone Linguaggio",
                    description: "Come mostrare le icone del linguaggio sui blocchi di codice",
                    disabled: "Disabilitato",
                    colorless: "Senza colore",
                    colored: "Colorato"
                },
                bgOpacity: {
                    label: "Opacità Sfondo",
                    description: "Opacità dello sfondo"
                }
            },
            button: {
                copy: "Copia",
                copied: "Copiato!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Mostra sempre tutti i pulsanti del messaggio indipendentemente dal tasto Shift.",
            option: {
                noShiftDelete: {
                    label: "Eliminazione senza Shift",
                    description: "Rimuove l'obbligo di tenere premuto Shift per eliminare un messaggio."
                },
                noShiftPin: {
                    label: "Fissa senza Shift",
                    description: "Rimuove l'obbligo di tenere premuto Shift per fissare un messaggio."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Mostra i badge dell'autore del messaggio accanto al nome in chat.",
            option: {
                showPlexcordDonor: {
                    label: "Mostra Badge Donatore Plexcord",
                    description: "Abilita per mostrare i badge dei donatori Plexcord in chat."
                },
                plexcordDonorPosition: {
                    label: "Posizione Badge Donatore",
                    description: "La posizione del badge donatore Plexcord."
                },
                showPlexcordContributor: {
                    label: "Mostra Badge Collaboratore Plexcord",
                    description: "Abilita per mostrare i badge dei collaboratori di Plexcord in chat."
                },
                plexcordContributorPosition: {
                    label: "Posizione Badge Collaboratore",
                    description: "La posizione del badge collaboratore Plexcord."
                },
                showDiscordProfile: {
                    label: "Mostra Badge Profilo Discord",
                    description: "Abilita per mostrare i badge del profilo Discord (HypeSquad, ecc.) in chat."
                },
                discordProfilePosition: {
                    label: "Posizione Badge Profilo",
                    description: "La posizione dei badge del profilo Discord."
                },
                showDiscordNitro: {
                    label: "Mostra Badge Discord Nitro",
                    description: "Abilita per mostrare i badge Nitro in chat."
                },
                discordNitroPosition: {
                    label: "Posizione Badge Nitro",
                    description: "La posizione dei badge Discord Nitro."
                },
                badgeSettings: {
                    label: "Impostazioni Badge",
                    description: "Configura la posizione degli altri badge mostrati in chat.",
                    modal: "Trascina i badge per riordinarli; puoi cliccare per abilitare/disabilitare un tipo di badge."
                }
            },
            badge: {
                plexcord: "Badge donatore Plexcord",
                contributor: "Badge collaboratore Plexcord",
                discordProfile: "Badge profilo Discord (HypeSquad, Staff, Sviluppatore, ecc.)",
                nitro: "Badge Nitro",
                staff: "Staff di Discord",
                partner: "Proprietario di Server Partner",
                events: "Eventi HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Discord Bug Hunter",
                earlyVerifiedBotDeveloper: "Sviluppatore di Bot Verificato",
                earlySupporter: "Sostenitore Storico",
                moderatorProgram: "Ex Membro Programma Moderatori"
            },
            modal: {
                plexcordContributor: "Collaboratore Plexcord",
                discordNitro: "Discord Nitro",
                basic: "Basic",
                classic: "Classic"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Mostra gli account collegati nei popout degli utenti",
            option: {
                iconSize: {
                    label: "Dimensione Icone",
                    description: "Dimensione icone (px)"
                },
                iconSpacing: {
                    label: "Spaziatura Icone",
                    description: "Margine icone",
                    compact: "Compatto",
                    cozy: "Accogliente",
                    roomy: "Spazioso"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Mostra i canali a cui non hai accesso per visualizzarli.",
            tooltip: "Canale Nascosto",
            option: {
                channelStyle: {
                    label: "Stile Canale",
                    description: "Lo stile usato per visualizzare i canali nascosti.",
                    classic: "Classico",
                    muted: "Silenziato",
                    showUnreads: "Mostra Non Letti",
                    mutedWithUnreads: "Silenziato con Non Letti"
                },
                showMode: {
                    label: "Modalità Visualizzazione",
                    description: "Come devono apparire i canali nascosti.",
                    lock: "Stile normale con icona Lucchetto",
                    hidden: "Stile silenziato con icona Occhio sulla destra",
                    lockIconRight: "Icona Lucchetto sulla destra"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Stato Menu Permessi di Default",
                    description: "Se il menu a tendina degli utenti e ruoli autorizzati deve essere aperto di default"
                }
            },
            channelType: {
                text: "testuale",
                announcement: "annunci",
                forum: "forum",
                voice: "vocale",
                stage: "stage"
            },
            sortOrder: {
                latestActivity: "Ultima Attività",
                creationDate: "Data di Creazione"
            },
            forumLayout: {
                default: "Non impostato",
                list: "Visualizzazione elenco",
                grid: "Visualizzazione galleria"
            },
            videoQuality: {
                auto: "Automatico",
                full: "720p"
            },
            modal: {
                hidden: "nascosto",
                locked: "bloccato",
                threads: "thread",
                posts: "post",
                messages: "messaggi",
                post: "post",
                message: "messaggio",
                unknown: "sconosciuto",
                permissionDetails: "Dettagli Permessi",
                thisIsA: "Questo è un canale {{channelType}} {{status}}",
                canNotSee: "Non puoi vedere i {{type}} di questo canale.",
                guidelines: "Tuttavia, puoi vederne le linee guida:",
                lastCreated: "Ultimo {{type}} creato:",
                lastPin: "Ultimo messaggio fissato:",
                threadSlowmode: "Slowmode thread predefinita:",
                slowmode: "Slowmode:",
                bitrate: "Bitrate:",
                region: "Regione:",
                automatic: "Automatico",
                videoQuality: "Qualità Video:",
                inactiveArchiveDuration: "Durata inattività prima dell'archiviazione {{type}}",
                defaultLayout: "Layout predefinito:",
                defaultSort: "Ordinamento predefinito:",
                defaultReaction: "Emoji reazione predefinita:",
                requireTag: "I post in questo forum richiedono un tag.",
                availableTags: "Tag Disponibili:",
                allowedUsersAndRoles: "Utenti e ruoli autorizzati:",
                hideAllowedUsersAndRoles: "Nascondi Utenti e Ruoli Autorizzati",
                viewAllowedUsersAndRoles: "Visualizza Utenti e Ruoli Autorizzati"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Mostra vari elementi nascosti o riservati ai moderatori indipendentemente dai tuoi permessi.",
            option: {
                showTimeouts: {
                    label: "Mostra Timeout Membri in Chat",
                    description: "Mostra l'icona del timeout dei membri nella chat."
                },
                showInvitesPaused: {
                    label: "Mostra Inviti in Pausa",
                    description: "Mostra il tooltip degli inviti messi in pausa nella lista server."
                },
                showModView: {
                    label: "Mostra Vista Moderatore",
                    description: "Mostra l'opzione 'Vista Moderatore' nel menu contestuale dei membri in tutti i server."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Aggiunge un'opzione al menu contestuale per forzare la visualizzazione degli embed per i link che ne sono privi",
            context: {
                embed: {
                    show: "Mostra Embed",
                    hide: "Rimuovi Embed"
                }
            },
            error: {
                failed: "Impossibile ottenere l'embed",
                noEmbed: "Nessun embed trovato"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Visualizza qualsiasi combinazione di soprannomi personalizzati, nomi amici, nomi server e username in chat.",
            option: {
                messages: {
                    label: "Messaggi",
                    description: "Mostra il formato nome personalizzato nei messaggi."
                },
                replies: {
                    label: "Risposte",
                    description: "Mostra il formato nome personalizzato nelle risposte."
                },
                mentions: {
                    label: "Menzioni",
                    description: "Mostra il formato nome personalizzato nelle menzioni."
                },
                typingIndicator: {
                    label: "Indicatore di Digitazione",
                    description: "Usa il primo nome disponibile nel formato personalizzato per l'indicatore di digitazione."
                },
                memberList: {
                    label: "Lista Membri",
                    description: "Usa il primo nome disponibile nel formato personalizzato nella lista membri."
                },
                profilePopout: {
                    label: "Popout Profilo",
                    description: "Usa il primo nome disponibile nel formato personalizzato nei popout profilo."
                },
                voiceChannels: {
                    label: "Canali Vocali",
                    description: "Usa il primo nome disponibile nel formato personalizzato nei canali vocali."
                },
                reactions: {
                    label: "Reazioni",
                    description: "Usa il nome personalizzato nei tooltip delle reazioni e il nome completo nei popout delle reazioni."
                },
                discriminators: {
                    label: "Discriminatori",
                    description: "Aggiunge il discriminatore (#0000) agli username dei bot per renderli univoci."
                },
                hideDefaultAtSign: {
                    label: "Nascondi Simbolo @",
                    description: "Nasconde il simbolo '@' davanti al nome nelle menzioni e risposte."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Tronca Nomi in Modalità Streamer",
                    description: "Tronca tutti i nomi quando la Modalità Streamer è attiva."
                },
                removeDuplicates: {
                    label: "Rimuovi Duplicati",
                    description: "Se i nomi sono uguali, ne mostra solo uno."
                },
                ignoreFonts: {
                    label: "Ignora Font",
                    description: "Usa il font gg sans standard per i nomi secondari, ignorando font personalizzati dell'utente."
                },
                ignoreGradients: {
                    label: "Ignora Gradienti",
                    description: "Usa il colore primario invece dei gradienti per i nomi non principali."
                },
                animateGradients: {
                    label: "Anima Gradienti",
                    description: "Anima i gradienti dei nomi secondari (se supportati)."
                },
                nameSeparator: {
                    label: "Separatore Nomi",
                    description: "Il carattere usato tra i nomi. Di default è uno spazio."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Nome Amico Solo nei DM",
                    description: "Mostra il nome amico solo nei messaggi diretti."
                },
                customNameOnlyInDirectMessages: {
                    label: "Nome Personalizzato Solo nei DM",
                    description: "Mostra il nome personalizzato SMYN solo nei messaggi diretti."
                },
                includedNames: {
                    label: "Nomi Inclusi",
                    description: "L'ordine dei nomi da visualizzare. Usa: {user}, {display}, {nick}, {friend}, {custom}. Puoi usare virgole per i fallback (es: {friend, nick})."
                },
                customNameColor: {
                    label: "Colore Nome Personalizzato",
                    description: "Colore per il nome personalizzato SMYN. Accetta CSS o 'Role' per seguire i colori del ruolo."
                },
                friendNameColor: {
                    label: "Colore Nome Amico",
                    description: "Colore per il soprannome amico."
                },
                nicknameColor: {
                    label: "Colore Soprannome",
                    description: "Colore per il soprannome server."
                },
                displayNameColor: {
                    label: "Colore Nome Visualizzato",
                    description: "Colore per il nome visualizzato globale."
                },
                usernameColor: {
                    label: "Colore Username",
                    description: "Colore per l'username (@utente)."
                },
                triggerNameRerender: {
                    label: "Forza Render Nomi",
                    description: "Attiva un nuovo rendering dei nomi aggiornando questa impostazione."
                }
            },
            modal: {
                change: {
                    title: "Cambia Soprannome SMYN"
                },
                add: {
                    title: "Aggiungi Soprannome SMYN"
                },
                setCustom: "Imposta un soprannome SMYN personalizzato per questo utente. Usalo specificando {custom} nelle impostazioni del template.",
                nickname: "Soprannome SMYN",
                reset: "Ripristina Soprannome",
                cancel: "Annulla"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Mostra quanto durerà ancora il timeout di un utente, nel tooltip dell'icona o accanto ad essa",
            option: {
                displayStyle: {
                    label: "Stile Visualizzazione",
                    description: "Come mostrare la durata del timeout",
                    tooltip: "Nel Tooltip",
                    inline: "Accanto all'icona"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Mostra i canali nascosti dietro le Risorse del Server nella lista dei canali"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Mostra il nome della canzone invece dell'artista per l'attività Spotify"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Apri un altro canale o un DM come barra laterale o come finestra popout",
            toolbox: {
                label: "Apri Chat Precedente"
            },
            context: {
                label: "Apri Chat Laterale"
            },
            modal: {
                switch: "Cambia canali",
                popout: "Finestra esterna",
                close: "Chiudi chat laterale"
            },
            option: {
                persistSidebar: {
                    label: "Persisti Chat Laterale",
                    description: "Mantieni la chat laterale aperta al riavvio di Discord"
                },
                patchCommunity: {
                    label: "Patch Community",
                    description: "Applica modifiche a funzioni come 'Sfoglia Canali' o il tab 'Membri' dei server community."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Firma/testo finale automatico alla fine dei tuoi messaggi",
            option: {
                name: {
                    label: "Firma",
                    description: "Il testo che verrà aggiunto alla fine dei tuoi messaggi"
                },
                textHeader: {
                    label: "Intestazione Testo",
                    description: "Testo che precede la firma"
                },
                showIcon: {
                    label: "Mostra Icona",
                    description: "Mostra un'icona per attivare/disattivare il plugin nella barra della chat"
                },
                contextMenu: {
                    label: "Menu Contestuale",
                    description: "Aggiungi l'opzione nel menu contestuale del box di scrittura"
                },
                isEnabled: {
                    label: "Abilitato",
                    description: "Attiva o disattiva la funzione"
                }
            },
            tooltip: {
                enable: "Abilita Firma",
                disable: "Disabilita Firma"
            },
            context: {
                enable: "Abilita Firma"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Attiva/disattiva la tua firma",
                    toogle: "Attiva/disattiva (default: alterna)",
                    enabled: "Firma abilitata",
                    disabled: "Firma disabilitata"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Aggiunge un pulsante alla barra della chat per inviare messaggi silenziosi (senza notifica).",
            option: {
                persistState: {
                    label: "Stato Persistente",
                    description: "Come conservare l'attivazione dei messaggi silenziosi",
                    none: "Non persistere (reset al cambio canale)",
                    channels: "Persisti tra i canali",
                    restarts: "Persisti tra i canali e al riavvio"
                },
                autoDisable: {
                    label: "Disattivazione Automatica",
                    description: "Disabilita automaticamente i messaggi silenziosi dopo averne inviato uno"
                }
            },
            tooltip: {
                enable: "Abilita Messaggio Silenzioso",
                disable: "Disabilita Messaggio Silenzioso"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Nasconde il tuo indicatore di digitazione dalla chat.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Nasconde il tuo indicatore di digitazione dalla chat.",
                    toggle: {
                        name: "toggle",
                        description: "Attiva/disattiva globalmente, per il canale o per il server.",
                        global: "Globale",
                        channel: "Canale",
                        guild: "Server"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Nasconde gli indicatori di digitazione degli altri sopra la barra della chat."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Nasconde gli indicatori di digitazione degli altri nella lista membri."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Mostra un'icona nella barra della chat per un cambio rapido."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Mostra un menu a tendina nel menu contestuale della chat."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Se nascondere la digitazione di default o meno."
                    }
                }
            },
            content: {
                updated: "Impostazioni Silent Typing aggiornate.",
                noChanges: "Nessuna modifica effettuata."
            },
            tooltip: {
                hidden: "Digitazione Nascosta ({{location}})",
                visible: "Digitazione Visibile ({{location}})",
                global: "Digitazione Visibile (Globale)"
            },
            option: {
                enabledGlobally: {
                    label: "Abilitato Globalmente",
                    description: "Nasconde il tuo indicatore di digitazione ovunque."
                },
                hideChatBoxTypingIndicators: {
                    label: "Nascondi Indicatori Barra Chat",
                    description: "Nasconde chi sta scrivendo sopra la barra della chat."
                },
                hideMembersListTypingIndicators: {
                    label: "Nascondi Indicatori Lista Membri",
                    description: "Nasconde chi sta scrivendo nella lista membri."
                },
                chatIcon: {
                    label: "Icona Chat",
                    description: "Mostra un'icona nella barra della chat per modifiche rapide."
                },
                chatIconLeftClickAction: {
                    label: "Azione Click Sinistro Icona",
                    description: "Cosa fare al click sinistro.",
                    global: "Alterna Digitazione Globale",
                    channel: "Alterna per il Canale",
                    guild: "Alterna per il Server",
                    settings: "Apri Impostazioni Plugin"
                },
                chatIconMiddleClickAction: {
                    label: "Azione Click Centrale Icona",
                    description: "Cosa fare al click centrale.",
                    global: "Alterna Digitazione Globale",
                    channel: "Alterna per il Canale",
                    guild: "Alterna per il Server",
                    settings: "Apri Impostazioni Plugin"
                },
                chatIconRightClickAction: {
                    label: "Azione Click Destro Icona",
                    description: "Cosa fare al click destro.",
                    global: "Alterna Digitazione Globale",
                    channel: "Alterna per il Canale",
                    guild: "Alterna per il Server",
                    settings: "Apri Impostazioni Plugin"
                },
                chatContextMenu: {
                    label: "Menu Contestuale Chat",
                    description: "Mostra un menu a tendina nel menu contestuale della chat."
                },
                defaultHidden: {
                    label: "Nascosto di Default",
                    description: "Se attivo, nasconde la tua digitazione ovunque eccetto nelle 'Posizioni Disabilitate'. Se disattivo, la mostra ovunque eccetto nelle 'Posizioni Abilitate'."
                },
                enabledLocations: {
                    label: "Posizioni Abilitate",
                    description: "Nascondi digitazione per questi ID (DM, canali o server). Usato se 'Nascosto di Default' è disattivo."
                },
                disabledLocations: {
                    label: "Posizioni Disabilitate",
                    description: "Mostra digitazione per questi ID. Usato se 'Nascosto di Default' è attivo."
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Fai nevicare su Discord!",
            about: {
                title: "Informazioni",
                paragraph: "Questo plugin aggiunge un effetto neve natalizio sopra l'interfaccia di Discord. Puoi cambiare il tipo di neve nelle impostazioni.",
                note: "NOTA: Sebbene non impatti molto sulle prestazioni, potrebbe causare rallentamenti su sistemi molto datati."
            },
            option: {
                typeOfSnow: {
                    label: "Tipo di Neve",
                    description: "Cambia l'aspetto della neve (influisce sulle prestazioni).",
                    solid: "Solida (Prestazioni Massime)",
                    text: "Testuale (Prestazioni Medie)",
                    emoji: "Immagine (Prestazioni Minime)"
                },
                maxSize: {
                    label: "Dimensione Massima",
                    description: "Dimensione massima dei fiocchi"
                },
                speed: {
                    label: "Velocità",
                    description: "Velocità di caduta (più alto = più veloce)"
                },
                flakesPerSecond: {
                    label: "Fiocchi al Secondo",
                    description: "Densità della neve (più alto = più fiocchi)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Ordina le richieste di amicizia per data di ricezione",
            tooltip: "Aggiunto il &mdash; {{date}}",
            option: {
                showDates: {
                    label: "Mostra Date",
                    description: "Mostra le date sulle richieste di amicizia"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Registra tutti i suoni della Soundboard riprodotti in chat vocale e ti permette di scaricarli",
            tooltip: "Apri Log SoundBoard",
            option: {
                savedIds: {
                    label: "ID Soundboard Salvati",
                    description: "Numero di ID da conservare (0 per infiniti)",
                    notNumber: "Il valore non è un numero.",
                    cantDecimal: "Il valore non può essere decimale.",
                    cantNegative: "Il valore non può essere negativo.",
                    heading: "Numero di suoni da salvare contemporaneamente",
                    warning: "Attenzione! Ridurre questo valore resetterà il log!",
                    placeholder: "Inserisci un numero"
                },
                fileType: {
                    label: "Tipo File",
                    description: "Il formato in cui salvare il file audio"
                },
                openLogs: {
                    label: "Apri Log",
                    description: "Mostra i log",
                    button: "Apri Log"
                },
                soundVolume: {
                    label: "Volume Suono",
                    description: "Volume del suono di attivazione (0 per disabilitare)"
                },
                iconLocation: {
                    label: "Posizione Icona",
                    description: "Dove mostrare l'icona del Log SoundBoard (richiede riavvio)",
                    toolbar: "Barra strumenti superiore",
                    chatInput: "Box scrittura chat"
                }
            },
            modal: {
                title: "Log SoundBoard",
                loading: "Caricamento suoni...",
                noLogs: "Nessun suono registrato. Entra in una vocale per iniziare!",
                clearLogs: "Cancella Log",
                played: "Riprodotti {{time}} volta/e",
                last: "Ultima riproduzione:",
                also: "Riprodotti anche da:",
                download: "Scarica",
                copyId: "Copia ID",
                copied: "ID copiato negli appunti!",
                playSound: "Riproduci Suono",
                moreUsers: "Altre persone hanno usato questo suono...",
                volume: "Volume Soundboard"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Divide i messaggi lunghi in più parti per superare il limite di caratteri di Discord.",
            option: {
                maxLength: {
                    label: "Lunghezza Massima Messaggio",
                    description: "Limite caratteri prima della divisione. Imposta 0 per il rilevamento automatico."
                },
                disableFileConversion: {
                    label: "Disabilita Conversione in File",
                    description: "Se attivo, impedisce la conversione del messaggio lungo in un file .txt."
                },
                sendDelay: {
                    label: "Ritardo Invio",
                    description: "Ritardo tra l'invio di ogni parte in secondi."
                },
                hardSplit: {
                    label: "Divisione Forzata",
                    description: "Se attivo, divide esattamente all'ultimo carattere utile invece di cercare uno spazio o a capo."
                },
                splitInSlowmode: {
                    label: "Dividi in Slowmode",
                    description: "Indica se dividere i messaggi anche nei canali con slowmode attivo."
                },
                slowmodeMax: {
                    label: "Massimo Slowmode",
                    description: "Tempo massimo di slowmode tollerato per la divisione."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Aggiunge un pulsante per attivare/disattivare la visibilità della tua attività Spotify.",
            tooltip: {
                enable: "Attiva attività Spotify",
                disable: "Disattiva attività Spotify"
            },
            option: {
                location: {
                    label: "Posizione",
                    description: "Dove mostrare il pulsante",
                    panel: "Accanto a Silenzia/Cuffie",
                    toolbox: "Plexcord Toolbox"
                },
                activityStatus: {
                    label: "Stato Attività",
                    description: "Stato attuale dell'attività Spotify"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Permette l'ascolto di gruppo (Listen Along) gratuito, impedisce la pausa automatica in vocale e mantiene l'attività attiva anche in idle",
            option: {
                noSpotifyAutoPause: {
                    label: "No Pausa Auto Spotify",
                    description: "Disabilita la pausa automatica di Spotify quando usi il microfono."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Mantieni Attività in Idle",
                    description: "Mantiene l'attività Spotify visibile anche quando sei assente (Idle)."
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Condividi il brano, l'album o l'artista corrente tramite comandi slash (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Condividi il tuo {{type}} Spotify attuale in chat",
                    track: "Non stai ascoltando nulla su Spotify.",
                    find: "Impossibile trovare il brano su Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Aggiunge un grafico dei tempi di avvio nel menu Impostazioni",
            modal: {
                title: "Tempi di Avvio",
                ended: "Tracciamento terminato alle:",
                start: "Avvio",
                interval: "Intervallo",
                delta: "Delta",
                event: "Evento",
                serverTrace: "Tracciamento Server",
                loading: "Caricamento..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Aggiunge notifiche quando gli utenti cambiano stato",
            loading: "Caricamento...",
            option: {
                notificationsSound: {
                    label: "Suono Notifica",
                    description: "Riprodurre un suono per le notifiche di stato?"
                },
                usersList: {
                    label: "Lista Utenti",
                    description: "Lista degli utenti da monitorare",
                    empty: "Nessun utente monitorato. Fai click destro su un utente e seleziona 'Notifiche di Stato' per aggiungerlo."
                }
            },
            context: {
                label: "Notifiche di Stato",
                notifications: "Notifiche",
                type: {
                    all: "Tutte",
                    online: "Solo Online",
                    offline: "Solo Offline",
                    none: "Nessuna"
                }
            },
            notification: {
                unknownUser: "Utente",
                title: "Notifiche di Stato"
            },
            status: {
                online: "Online",
                idle: "Assente",
                dnd: "Non Disturbare",
                offline: "Offline",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Ti permette di salvare i tuoi stati personalizzati per riutilizzarli in seguito",
            button: {
                remember: "Ricorda Stato"
            },
            context: {
                edit: "Modifica Preset",
                set: "Imposta Stato Personalizzato"
            },
            notification: {
                successfully: "Stato salvato con successo"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Sincronizza il tuo stato di Discord con Steam! (Online, Assente, Invisibile o Offline.)",
            option: {
                onlineStatus: {
                    label: "Stato Online",
                    description: "Stato su Steam quando sei Online"
                },
                idleStatus: {
                    label: "Stato Assente",
                    description: "Stato su Steam quando sei Assente"
                },
                dndStatus: {
                    label: "Stato Non Disturbare",
                    description: "Stato su Steam quando sei su Non Disturbare"
                },
                invisibleStatus: {
                    label: "Stato Invisibile",
                    description: "Stato su Steam quando sei Invisibile"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Invisibile se Attività Nascosta",
                    description: "Imposta lo stato Steam su Invisibile quando l'attività di Discord è nascosta"
                }
            },
            status: {
                online: "Online",
                away: "Assente",
                invisible: "Invisibile",
                offline: "Offline (Disconnetti Chat Steam)",
                disabled: "Disabilitato"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Ti permette di bloccare la visualizzazione degli adesivi.",
            option: {
                showGif: {
                    label: "Mostra GIF",
                    description: "Indica se mostrare una simpatica GIF di un gatto al posto dell'adesivo."
                },
                showMessage: {
                    label: "Mostra Messaggio",
                    description: "Indica se mostrare un messaggio con l'ID dell'adesivo bloccato."
                },
                showButton: {
                    label: "Mostra Pulsante",
                    description: "Indica se mostrare un pulsante per sbloccare l'adesivo."
                },
                blockedStickers: {
                    label: "Adesivi Bloccati",
                    description: "La lista degli ID degli adesivi bloccati (non modificare manualmente)."
                }
            },
            modal: {
                blocked: "Adesivo Bloccato. ID: {{id}} NOME: {{name}}",
                unblock: "Sblocca {{name}}"
            },
            context: {
                blockSticker: "Blocca Adesivo",
                unblockSticker: "Sblocca Adesivo"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Fa sì che selezionando un adesivo venga inserito nel box di scrittura invece di essere inviato istantaneamente"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Attiva automaticamente la Modalità Streamer quando avvii una diretta su Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Disabilita a scelta i codec per lo streaming",
            option: {
                disableAv1Codec: {
                    label: "Disabilita Codec AV1",
                    description: "Impedisce a Discord di usare il codec AV1 per lo streaming."
                },
                disableH265Codec: {
                    label: "Disabilita Codec H265",
                    description: "Impedisce a Discord di usare il codec H265 per lo streaming."
                },
                disableH264Codec: {
                    label: "Disabilita Codec H264",
                    description: "Impedisce a Discord di usare il codec H264 per lo streaming."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Personalizza il limite delle Super Reazioni visualizzate e rendile predefinite",
            option: {
                superReactByDefault: {
                    label: "Super Reazioni Predefinite",
                    description: "Il selettore delle reazioni userà di default le Super Reazioni"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Super Reazioni Illimitate",
                    description: "Rimuove il limite alle Super Reazioni riprodotte contemporaneamente"
                },
                superReactionPlayingLimit: {
                    label: "Limite Super Reazioni",
                    description: "Numero massimo di Super Reazioni da riprodurre. Imposta 0 per disabilitarle del tutto"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Sostituisce il testo nei tuoi messaggi. Puoi trovare regole già pronte nel canale #textreplace-rules sul server di Plexcord",
            option: {
                replace: {
                    label: "Sostituisci",
                    string: "Sostituzioni semplici",
                    stringDescription: "Semplici regole di trova e sostituisci. Ad esempio, trova 'brb' e sostituiscilo con 'be right back'",
                    regex: "Sostituzioni Regex",
                    regexDescription: "Sostituzioni più potenti usando espressioni regolari. Questa sezione è per utenti avanzati. Se non lo capisci, ignorala",
                    myMessages: "Applica ai tuoi messaggi (visibile a tutti)",
                    othersMessages: "Applica ai messaggi altrui (visibile solo a te)",
                    allMessages: "Applica a tutti i messaggi"
                },
                stringRules: {
                    label: "Regole Testo Fisso",
                    description: "Regole per la sostituzione tramite corrispondenza testuale."
                },
                regexRules: {
                    label: "Regole Regex",
                    description: "Regole per la sostituzione tramite espressioni regolari."
                }
            },
            modal: {
                title: "Test Regole",
                find: "Trova",
                findRegex: "Pattern regex",
                findText: "Testo da sostituire",
                replace: "Sostituisci",
                replaceDescription: "Il testo che sostituirà il testo trovato",
                includes: "Solo se include",
                includesDescription: "Questa regola verrà applicata solo se il messaggio include questo testo. È opzionale",
                type: "Scrivi un messaggio",
                applied: "Messaggio con regole applicate",
                delete: "Elimina regola",
                add: "Aggiungi regola",
                empty: "Regola vuota",
                rule: "Regola",
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Aggiunge attributi data a vari elementi per facilitare la creazione di temi CSS"
        },
        timezones: {
            name: "Timezones",
            description: "Mostra l'ora locale degli utenti nei profili e nelle intestazioni dei messaggi",
            button: {
                wantToSave: "Vuoi salvare il tuo fuso orario nel database? Clicca qui per impostarlo.",
                yourLocalTimezone: "(Tuo fuso orario locale)"
            },
            context: {
                set: "Imposta Fuso Orario Locale"
            },
            toast: {
                refresh: {
                    successfully: "Fusi orari aggiornati con successo!",
                    failed: "Aggiornamento fusi orari fallito!",
                    failedTo: "Impossibile aggiornare i fusi orari."
                },
                update: {
                    successfully: "Fuso orario aggiornato con successo!",
                    failed: "Impossibile impostare il fuso orario."
                },
                delete: {
                    successfully: "Fuso orario eliminato con successo!",
                    failed: "Impossibile eliminare il fuso orario."
                },
                auth: {
                    failed: "Autenticazione fallita.",
                    success: "Autorizzazione riuscita!"
                }
            },
            toolbox: {
                set: "Imposta Fuso Orario nel DB",
                refresh: "Aggiorna Fusi Orari dal DB"
            },
            option: {
                showOwnTimezone: {
                    label: "Mostra il mio Fuso Orario",
                    description: "Mostra il tuo fuso orario nei profili e nei messaggi"
                },
                twentyFourHourTime: {
                    label: "Formato 24 Ore",
                    description: "Mostra l'ora nel formato 24 ore"
                },
                showTimezoneInfo: {
                    label: "Mostra Info Fuso Orario",
                    description: "Mostra il nome del fuso orario accanto all'ora"
                },
                showMessageHeaderTime: {
                    label: "Mostra Ora nei Messaggi",
                    description: "Mostra l'ora locale dei mittenti nell'intestazione dei messaggi"
                },
                showProfileTime: {
                    label: "Mostra Ora nel Profilo",
                    description: "Mostra l'ora locale degli utenti nei loro profili"
                },
                useDatabase: {
                    label: "Usa Database Fusi Orari",
                    description: "Abilita l'uso del database per ottenere i fusi orari degli utenti"
                },
                preferDatabaseOverLocal: {
                    label: "Preferisci Database a Locale",
                    description: "Usa i dati del database anche se è presente un fuso orario locale"
                },
                databaseUrl: {
                    label: "URL Database",
                    description: "L'indirizzo del server del database dei fusi orari"
                },
                setDatabaseTimezone: {
                    label: "Imposta Fuso Orario nel Database",
                    description: "Salva il tuo fuso orario sul database centralizzato",
                    setTimezone: "Imposta Fuso Orario nel Database"
                },
                resetDatabaseTimezone: {
                    label: "Resetta Fuso Orario nel Database",
                    description: "Elimina il tuo fuso orario dal database",
                    failed: "Impossibile resettare il fuso orario nel database"
                },
                askedTimezone: {
                    label: "Fuso Orario Richiesto",
                    description: "Indica se è già stato chiesto all'utente di impostare il fuso orario"
                }
            },
            modal: {
                title: "Fusi Orari",
                select: "Seleziona Fuso Orario",
                selectPlaceholder: "Scegli un fuso orario",
                delete: "Elimina Fuso Orario",
                save: "Salva"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Mostra una notifica toast ogni volta che ricevi un messaggio diretto.",
            notification: {
                call: "Ha iniziato una chiamata con te!",
                recipient: {
                    add: "{{target}} è stato aggiunto al gruppo da {{actor}}.",
                    remove: "{{target}} è stato rimosso dal gruppo da {{actor}}.",
                    left: "Ha lasciato il gruppo."
                },
                channel: {
                    change: {
                        name: "Ha cambiato il nome del canale in {{name}}.",
                        icon: "Ha cambiato l'icona del canale."
                    },
                    pinned: "Ha fissato un messaggio."
                },
                sent: {
                    embed: "Ha inviato un embed.",
                    sticker: "Ha inviato un adesivo.",
                    attachment: "Allegato:"
                },
                redacted: "Il contenuto del messaggio è stato oscurato.",
                friend: {
                    accept: "{{user}} è ora tuo amico",
                    acceptBody: "Ora puoi inviargli messaggi diretti.",
                    request: "{{user}} ti ha inviato una richiesta di amicizia.",
                    requestBody: "Puoi accettarla o rifiutarla nella scheda Amici."
                },
                example: {
                    title: "Notifica di Esempio",
                    body: "Questo è il corpo di una notifica di esempio."
                }
            },
            modal: {
                dismiss: "Chiudi Notifica",
                attachments: "Inviato/i {{attachments}} allegato/i."
            },
            option: {
                position: {
                    label: "Posizione",
                    description: "La posizione della notifica toast",
                    topRight: "In alto a destra",
                    topLeft: "In alto a sinistra",
                    bottomRight: "In basso a destra",
                    bottomLeft: "In basso a sinistra"
                },
                timeout: {
                    label: "Durata",
                    description: "Tempo in secondi di permanenza della notifica"
                },
                opacity: {
                    label: "Opacità",
                    description: "L'opacità della notifica toast"
                },
                determineServerNotifications: {
                    label: "Rispetta Impostazioni Server",
                    description: "Mostra le notifiche in base alle impostazioni di notifica del server"
                },
                directMessages: {
                    label: "Messaggi Diretti",
                    description: "Mostra notifiche per i messaggi privati"
                },
                groupMessages: {
                    label: "Messaggi di Gruppo",
                    description: "Mostra notifiche per i gruppi"
                },
                friendServerNotifications: {
                    label: "Notifiche Amici nei Server",
                    description: "Mostra notifiche quando gli amici scrivono nei server in comune"
                },
                friendActivity: {
                    label: "Attività Amici",
                    description: "Mostra notifiche per nuove amicizie o richieste"
                },
                notifyFor: {
                    label: "Notifica Per",
                    description: "Lista di ID canali da cui ricevere notifiche (separati da virgola)"
                },
                ignoreUsers: {
                    label: "Ignora Utenti",
                    description: "Lista di ID utente da cui ignorare le notifiche (separati da virgola)"
                },
                exampleButton: {
                    label: "Pulsante Esempio",
                    description: "Mostra una notifica toast di prova.",
                    show: "Mostra Notifica di Esempio"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Aggiunge una scorciatoia personalizzabile per attivare/disattivare la webcam.",
            option: {
                keyBind: {
                    label: "Scorciatoia",
                    description: "Il tasto da premere per attivare la webcam."
                },
                reqCtrl: {
                    label: "Richiedi Ctrl",
                    description: "Richiede la pressione di Control."
                },
                reqShift: {
                    label: "Richiedi Shift",
                    description: "Richiede la pressione di Shift."
                },
                reqAlt: {
                    label: "Richiedi Alt",
                    description: "Richiede la pressione di Alt."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Traduci i messaggi con Google Translate o DeepL",
            tooltip: {
                label: "Traduci"
            },
            context: {
                translate: "Traduci",
                open: "Apri Finestra Traduzione",
                auto: "Traduzione Automatica Attiva"
            },
            option: {
                receivedInput: {
                    label: "Lingua Origine (Ricevuti)",
                    description: "Lingua da cui tradurre i messaggi ricevuti"
                },
                receivedOutput: {
                    label: "Lingua Destinazione (Ricevuti)",
                    description: "Lingua in cui tradurre i messaggi ricevuti"
                },
                sentInput: {
                    label: "Lingua Origine (Inviati)",
                    description: "Lingua da cui tradurre i tuoi messaggi"
                },
                sentOutput: {
                    label: "Lingua Destinazione (Inviati)",
                    description: "Lingua in cui tradurre i tuoi messaggi"
                },
                service: {
                    label: "Servizio di Traduzione",
                    description: "DeepL Pro richiede una chiave API a pagamento",
                    descriptionWeb: "Servizio di traduzione (Non supportato su Web!)",
                    google: "Google Translate",
                    deepl: "DeepL Gratis",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "Chiave API DeepL",
                    description: "Inserisci qui la tua chiave API di DeepL",
                    placeholder: "Ottieni la chiave su https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Traduzione Automatica",
                    description: "Traduci automaticamente i tuoi messaggi prima di inviarli. Puoi anche usare Shift+Click sul pulsante traduci per alternare."
                },
                showAutoTranslateTooltip: {
                    label: "Mostra Tooltip Auto-Translate",
                    description: "Mostra un avviso sopra la barra chat ogni volta che un messaggio viene tradotto automaticamente"
                }
            },
            modal: {
                title: "Traduci",
                select: "Seleziona una lingua",
                auto: "Traduzione Automatica",
                dismiss: "Chiudi",
                translated: "tradotto da {{from}}",
                failed: {
                    to: "Impossibile tradurre {{text}}",
                    connect: "Connessione alle API di DeepL fallita:"
                },
                wrong: "Qualcosa è andato storto. Controlla la console o chiedi aiuto sul server di supporto.",
                deepl: {
                    api: "Quota API DeepL esaurita. Utilizzo di Google Translate.",
                    apiKey: "Chiave API DeepL mancante. Ritorno a Google.",
                    auth: "Chiave API o versione DeepL non valida"
                },
                autoTranslateEnabled: {
                    title: "Plexcord Auto-Translate Attivato",
                    body: "Hai appena attivato la Traduzione Automatica! Ogni tuo messaggio verrà tradotto prima dell'invio.",
                    confirm: "Disabilita Traduzione Automatica",
                    cancel: "Ho capito",
                    secondaryConfirm: "Non mostrare più"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Aggiunge un indicatore se qualcuno sta scrivendo in un canale.",
            option: {
                includeCurrentChannel: {
                    label: "Includi Canale Corrente",
                    description: "Mostra l'indicatore anche per il canale attualmente selezionato"
                },
                includeMutedChannels: {
                    label: "Includi Canali Silenziati",
                    description: "Mostra l'indicatore per i canali silenziati."
                },
                includeIgnoredUsers: {
                    label: "Includi Utenti Ignorati",
                    description: "Mostra l'indicatore per gli utenti ignorati."
                },
                includeBlockedUsers: {
                    label: "Includi Utenti Bloccati",
                    description: "Mostra l'indicatore per gli utenti bloccati."
                },
                indicatorMode: {
                    label: "Modalità Indicatore",
                    description: "Come deve essere visualizzato l'indicatore?",
                    both: "Avatar e puntini animati",
                    dots: "Puntini animati",
                    avatars: "Avatar"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Mostra gli avatar e i colori dei ruoli nell'indicatore di digitazione",
            option: {
                showAvatars: {
                    label: "Mostra Più Utenti",
                    description: "Mostra gli avatar di chi sta scrivendo"
                },
                showRoleColors: {
                    label: "Mostra Colori Ruoli",
                    description: "Applica i colori dei ruoli ai nomi di chi scrive"
                },
                alternativeFormatting: {
                    label: "Formattazione Alternativa",
                    description: "Mostra un messaggio più utile quando molte persone stanno scrivendo"
                },
                amITyping: {
                    label: "Sto Scrivendo?",
                    description: "Ti mostra un'icona se gli altri possono vederti mentre scrivi"
                }
            },
            others: {
                areTyping: "e altri {{count}} stanno scrivendo..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Rimuove gli spazi di indentazione iniziali dai blocchi di codice"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Converte le unità di misura metriche in imperiali e viceversa",
            tooltip: "Converti Unità",
            option: {
                myUnits: {
                    label: "Mie Unità",
                    description: "Il sistema di misura che utilizzi e in cui vuoi convertire i valori. Predefinito: Imperiale",
                    imperial: "Imperiale",
                    metric: "Metrico"
                }
            },
            button: {
                dismiss: "Chiudi"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Aumenta il numero di account che puoi aggiungere.",
            option: {
                maxAccounts: {
                    label: "Account Massimi",
                    description: "Numero di account aggiungibili (imposta 0 per nessun limite)"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Ti permette di zoomare ulteriormente nello strumento di ritaglio quando cambi il tuo avatar",
            option: {
                zoomMultiplier: {
                    label: "Moltiplicatore Zoom",
                    description: "Moltiplicatore dello zoom"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Ti permette di ripristinare gli embed nascosti nei messaggi",
            context: {
                unsuppress: "Ripristina Embed",
                suppress: "Nascondi Embed"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Mostra informazioni casuali e inutili all'interno di Discord; scorciatoie e intervalli sono regolabili.",
            recording: "Registrazione...",
            record: "Registra",
            option: {
                delay: {
                    label: "Intervallo Notifiche",
                    description: "Intervallo di visualizzazione delle notifiche in minuti"
                },
                historyHotkey: {
                    label: "Scorciatoia Pannello Cronologia",
                    description: "Tasto rapido per mostrare la cronologia dei fatti visualizzati in precedenza"
                },
                randomFactHotkey: {
                    label: "Scorciatoia Fatto Casuale",
                    description: "Tasto rapido per aprire il pannello dei fatti casuali"
                },
                sameFact: {
                    label: "Evita ripetizioni",
                    description: "Evita di mostrare lo stesso fatto più volte finché non sono stati mostrati tutti quelli disponibili"
                },
                lastNFacts: {
                    label: "Quanti recenti evitare",
                    description: "Numero di fatti mostrati recentemente da non ripetere (0 = cronologia completa)"
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Ancora nessun fatto. Usa la scorciatoia o attendi.",
                    source: "Fonte"
                },
                showRandom: "Mostra Casuale",
                close: "Chiudi"
            },
            notification: {
                title: "Lo sapevi che?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Mostra i pronomi dell'utente nell'intestazione del messaggio",
            option: {
                pronounsFormat: {
                    label: "Formato Pronomi",
                    description: "Come devono apparire i pronomi in chat",
                    lowercase: "Minuscolo",
                    capitalized: "Iniziale maiuscola"
                },
                showSelf: {
                    label: "Mostra i Tuoi",
                    description: "Abilita o disabilita la visualizzazione dei tuoi stessi pronomi"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Mostra un indicatore quando un utente si trova in un canale vocale",
            option: {
                showInUserProfileModal: {
                    label: "Mostra nel Profilo Utente",
                    description: "Mostra l'indicatore del canale vocale nel profilo dell'utente accanto al nome"
                },
                showInMemberList: {
                    label: "Mostra nella Lista Membri",
                    description: "Mostra l'indicatore nella lista dei membri e nei DM"
                },
                showInMessages: {
                    label: "Mostra nei Messaggi",
                    description: "Mostra l'indicatore del canale vocale direttamente sui messaggi"
                }
            },
            modal: {
                inVoiceChat: "In chat vocale"
            },
            notification: {
                cannotJoin: "Non puoi unirti al canale vocale dell'utente."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Visualizza i banner utente da USRBG, permettendo a chiunque di avere un banner senza Nitro",
            option: {
                nitroFirst: {
                    label: "Priorità Nitro",
                    description: "Quale banner usare se sono presenti sia quello Nitro che quello USRBG",
                    nitro: "Banner Nitro",
                    usrbg: "Banner USRBG"
                },
                voiceBackground: {
                    label: "Sfondo Vocale",
                    description: "Usa i banner USRBG come sfondi per la chat vocale"
                }
            },
            button: "Ottieni il tuo banner USRBG"
        },
        validReply: {
            name: "ValidReply",
            description: "Corregge l'errore 'Il messaggio non può essere caricato' quando si passa il mouse sopra una risposta"
        },
        validUser: {
            name: "ValidUser",
            description: "Corregge le menzioni per gli utenti sconosciuti che appaiono come '@unknown-user' (passa il mouse sopra la menzione per risolvere)",
            badges: {
                discordBugHunter: "Discord Bug Hunter",
                moderatorProgramsAlumni: "Ex Membro Programma Moderatori",
                discordStaff: "Staff di Discord",
                hypeSquadEvents: "Eventi HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                partneredServerOwner: "Proprietario Server Partner",
                nitro: "Discord Nitro",
                earlySupporter: "Sostenitore Storico",
                earlyVerifiedBotDeveloper: "Sviluppatore di Bot Verificato"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Permette di entrare nei canali vocali con un doppio click invece di uno singolo"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Annuncia tramite sintesi vocale (narratore) quando gli utenti entrano, escono o si spostano tra i canali vocali",
            option: {
                voice: {
                    label: "Voce"
                },
                volume: {
                    label: "Volume",
                    description: "Volume del narratore"
                },
                rate: {
                    label: "Velocità",
                    description: "Velocità di lettura"
                },
                sayOwnName: {
                    label: "Dì il mio nome",
                    description: "Pronuncia anche il tuo nome"
                },
                latinOnly: {
                    label: "Solo caratteri latini",
                    description: "Rimuove i caratteri non latini dai nomi prima di pronunciarli"
                },
                joinMessage: {
                    label: "Messaggio di Entrata",
                    description: "Messaggio pronunciato all'entrata"
                },
                leaveMessage: {
                    label: "Messaggio di Uscita",
                    description: "Messaggio pronunciato all'uscita"
                },
                moveMessage: {
                    label: "Messaggio di Spostamento",
                    description: "Messaggio pronunciato al cambio canale"
                },
                muteMessage: {
                    label: "Messaggio Silenziato",
                    description: "Messaggio quando vieni silenziato (solo per te stesso)"
                },
                unmuteMessage: {
                    label: "Messaggio Riattivato",
                    description: "Messaggio quando riattivi il microfono (solo per te stesso)"
                },
                deafenMessage: {
                    label: "Messaggio Cuffie Disattivate",
                    description: "Messaggio quando disattivi l'audio (solo per te stesso)"
                },
                undeafenMessage: {
                    label: "Messaggio Cuffie Riattivate",
                    description: "Messaggio quando riattivi l'audio (solo per te stesso)"
                }
            },
            modal: {
                title: "Riproduci Suoni di Esempio",
                voiceTitle: "Voce",
                voice: "Seleziona una voce",
                languageTitle: "Lingua",
                language: "Seleziona una lingua",
                noVoice: "Nessuna voce trovata. ",
                linuxNote: "Installa speech-dispatcher o espeak e avvia Discord con il flag --enable-speech-dispatcher",
                someNarrator: "Prova a installarne alcune nelle impostazioni del Narratore del tuo Sistema Operativo",
                dontHaveEnglish: "Non hai voci inglesi installate, il narratore potrebbe suonare strano",
                customiseMessages: "Puoi personalizzare i messaggi pronunciati qui sotto. Impostali su vuoto per disabilitarli",
                placeholdersInfo: "I segnaposto speciali {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} e {{CHANNEL}} verranno sostituiti rispettivamente con il nome utente (vuoto se sei tu), il nome visualizzato, il soprannome nel server e il nome del canale"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Rende cliccabili gli avatar e i banner nei profili utente; aggiunge le voci 'Visualizza Avatar/Banner' nei menu contestuali di utenti, server e gruppi.",
            context: {
                view: {
                    avatar: "Visualizza Avatar",
                    serverAvatar: "Visualizza Avatar Server",
                    icon: "Visualizza Icona",
                    banner: "Visualizza Banner"
                }
            },
            option: {
                format: {
                    label: "Formato",
                    description: "Scegli il formato per le immagini non animate. Le immagini animate useranno sempre .gif"
                },
                imgSize: {
                    label: "Dimensione Immagine",
                    description: "La dimensione dell'immagine da visualizzare"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Copia e visualizza il contenuto o i dati grezzi (JSON) di qualsiasi messaggio, canale o server",
            context: {
                copyLeft: "Copia Raw (Click SX) / Vedi Raw (Click DX)",
                copyRight: "Copia Raw (Click DX) / Vedi Raw (Click SX)",
                view: "Visualizza Raw"
            },
            option: {
                popoverButton: {
                    label: "Pulsante Popover",
                    description: "Mostra un pulsante nel menu rapido del messaggio per visualizzarne i dati grezzi."
                },
                clickMethod: {
                    label: "Metodo di Click",
                    description: "Cambia il comportamento del pulsante per visualizzare il contenuto grezzo.",
                    left: "Click sinistro per visualizzare il contenuto grezzo.",
                    right: "Click destro per visualizzare il contenuto grezzo."
                }
            },
            modal: {
                title: "Visualizza Raw",
                content: "Contenuto",
                data: "Dati {{type}}",
                copied: "Dati {{type}} copiati negli appunti!",
                copy: "Copia JSON {{type}}",
                copiedContent: "Contenuto copiato negli appunti!",
                copyContent: "Copia Contenuto Grezzo"
            },
            types: {
                message: "Messaggio",
                channel: "Canale",
                guild: "Server",
                role: "Ruolo",
                user: "Utente"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Aggiunge pulsanti rapidi per inviare DM, silenziare o disattivare l'audio di un utente direttamente dal pannello della chiamata vocale.",
            option: {
                showChatButton: {
                    label: "Mostra Pulsante Chat",
                    description: "Indica se visualizzare il pulsante per aprire i messaggi diretti"
                },
                showMuteButton: {
                    label: "Mostra Pulsante Silenzia",
                    description: "Indica se visualizzare il pulsante per silenziare l'utente"
                },
                showDeafenButton: {
                    label: "Mostra Pulsante Cuffie",
                    description: "Indica se visualizzare il pulsante per disattivare l'audio"
                },
                muteSoundboard: {
                    label: "Silenzia Soundboard",
                    description: "Silenziando le cuffie dell'utente, verrà silenziata anche la sua Soundboard."
                },
                disableVideo: {
                    label: "Disabilita Video",
                    description: "Disattivando le cuffie dell'utente, verrà nascosto anche il suo video."
                },
                useServer: {
                    label: "Usa Server",
                    description: "Usa il silenziamento/disattivazione server invece di quello locale se hai i permessi."
                },
                serverSelf: {
                    label: "Server Personale",
                    description: "Applica il silenziamento a te stesso a livello di server."
                },
                showButtonsSelf: {
                    label: "Mostra Pulsanti su Te Stesso",
                    description: "Mostra i pulsanti anche sul tuo profilo nella vocale per azioni rapide su te stesso.",
                    display: "Mostra",
                    hide: "Nascondi",
                    disable: "Disabilita"
                },
                whichNameToShow: {
                    label: "Quale Nome Mostrare",
                    description: "Scegli se mostrare il soprannome o l'username nel tooltip.",
                    global: "Nome Globale",
                    username: "Username",
                    both: "Entrambi"
                },
                buttonPosition: {
                    label: "Posizione Pulsanti",
                    description: "Scegli dove posizionare i pulsanti.",
                    left: "Sinistra",
                    right: "Destra",
                }
            },
            tooltip: {
                navigate: "Vai ai DM",
                open: "Apri DM con {{username}}",
                yourself: "te stesso",
                serverMute: "Silenzia nel server",
                serverDeafen: "Disattiva audio nel server",
                mute: "Silenzia localmente",
                deafen: "Disattiva audio localmente",
                unmute: "Riattiva microfono",
                undeafen: "Riattiva audio",
                serverUnmute: "Riattiva nel server",
                serverUndeafen: "Riattiva audio nel server"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Registra chi entra ed esce dai canali vocali",
            context: {
                view: "Vedi Log Canale"
            },
            modal: {
                joined: "Entrato in <#{{channel}}>",
                left: "Uscito da <#{{channel}}>",
                movedTo: "Spostato in <#{{channel}}>",
                movedFrom: "Spostato da <#{{channel}}>",
                noLogs: "Nessun log da mostrare.",
                logs: "Log di {{channel}}"
            },
            option: {
                mode: {
                    label: "Modalità",
                    description: "Come mostrare i log vocali",
                    menu: "Menu log dedicato",
                    associated: "Log direttamente nella chat associata",
                    both: "Sia nel menu che nella chat"
                },
                voiceChannelChatSelf: {
                    label: "Log Personali in Chat",
                    description: "Registra i tuoi stessi spostamenti nelle chat dei canali vocali"
                },
                voiceChannelChatSilent: {
                    label: "Messaggi Silenziosi in Chat",
                    description: "I messaggi di entrata/uscita nelle chat vocali saranno inviati senza notifica"
                },
                voiceChannelChatSilentSelf: {
                    label: "Messaggi Silenziosi (Solo Tu)",
                    description: "I messaggi saranno silenziosi solo quando riguardano te"
                },
                ignoreBlockedUsers: {
                    label: "Ignora Utenti Bloccati",
                    description: "Non registrare le azioni degli utenti bloccati"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Questo plugin ti permette di eseguire azioni multiple su un intero canale (spostare tutti, silenziare tutti, disconnettere tutti, ecc.).",
            option: {
                waitAfter: {
                    label: "Azioni prima della pausa",
                    description: "Numero di azioni API da eseguire prima di attendere (per evitare limiti di velocità)"
                },
                waitSeconds: {
                    label: "Secondi di Attesa",
                    description: "Tempo di attesa tra ogni azione (in secondi)"
                }
            },
            context: {
                voiceTools: "Strumenti Vocali",
                mentionAll: "Menziona Tutti",
                disconnectAll: "Disconnetti Tutti",
                muteAll: "Silenzia Tutti",
                unmuteAll: "Riattiva Tutti",
                deafenAll: "Disattiva Audio a Tutti",
                undeafenAll: "Riattiva Audio a Tutti",
                moveAll: "Sposta Tutti"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Aggiunge un'opzione di download ai messaggi vocali. (Apre una nuova scheda del browser)",
            context: {
                download: "Scarica messaggio vocale"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Ti permette di inviare messaggi vocali come su mobile. Fai click destro sul pulsante di caricamento e seleziona 'Invia Messaggio Vocale'.",
            option: {
                noiseSuppression: {
                    label: "Riduzione Rumore",
                    description: "Riduzione del rumore di fondo"
                },
                echoCancellation: {
                    label: "Cancellazione Eco",
                    description: "Cancellazione dell'eco"
                }
            },
            notification: {
                failed: {
                    upload: "Impossibile caricare il messaggio vocale.",
                    start: "Impossibile avviare la registrazione.",
                    finish: "Impossibile terminare la registrazione."
                }
            },
            context: {
                sendVoiceMessage: "Invia Messaggio Vocale",
                missingPermissions: "(Permessi Mancanti)"
            },
            modal: {
                record: "Registra Messaggio Vocale",
                upload: "Carica File",
                preview: "Anteprima",
                failed: "Impossibile analizzare il file audio selezionato:",
                oggOpus: "I messaggi vocali devono essere in formato OggOpus per essere riprodotti su iOS. Questo file è {{type}}, quindi non sarà udibile su dispositivi Apple.",
                fix: "Per risolvere, convertilo prima in OggOpus, ad esempio usando {{link}}",
                sending: "Invio del messaggio vocale in corso... Attendi.",
                stop: "Ferma registrazione",
                start: "Inizia registrazione",
                resume: "Riprendi registrazione",
                pause: "Metti in pausa",
                recording: "REGISTRAZIONE IN CORSO",
                send: "Invia",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Ti permette di impostare il volume di utenti e streaming oltre il limite massimo predefinito",
            option: {
                multiplier: {
                    label: "Moltiplicatore",
                    description: "Moltiplicatore del volume"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Ricreazione del vecchio esperimento degli sfondi nei DM; imposta un'immagine di sfondo per qualsiasi canale, utente o server.",
            option: {
                globalDefault: {
                    label: "Sfondo Globale",
                    description: "Imposta uno sfondo predefinito per tutti i canali."
                },
                stylingTips: {
                    label: "Suggerimenti di Stile"
                }
            },
            context: {
                setWallpaper: "Imposta Sfondo",
                removeWallpaper: "Rimuovi Sfondo"
            },
            modal: {
                set: "Imposta sfondo",
                image: "URL dell'immagine",
                cancel: "Annulla",
                apply: "Applica",
                global: {
                    set: "Imposta sfondo globale",
                    remove: "Rimuovi sfondo globale predefinito",
                    reset: "Resetta dati sfondi"
                },
                web: {
                    info: "Puoi usare file locali inserendoli nella cartella dei temi di Plexcord e usando l'URL plexcord:///themes/nomefile.ext",
                    open: "Apri Cartella Temi",
                    quickCSS: "Apri QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Ripristina i menu contestuali mancanti nella versione web di Discord: Link e Immagini (Copia/Apri), Area di Testo (Copia, Taglia, Incolla, Controllo Ortografico)",
            option: {
                addBack: {
                    label: "Ripristina",
                    description: "Aggiunge nuovamente i menu contestuali di Discord per immagini, link e barra di input"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Ripristina le scorciatoie da tastiera mancanti nella versione web di Discord (Ctrl+T, Ctrl+Tab, ecc.). Funziona pienamente solo su Plextron/Legcord."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Rimuove il limite di bitrate di 2500kbps sui client Chromium e Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Supporto AV1 Sperimentale",
                    description: "Abilita il supporto al codec AV1. Potrebbe causare caricamenti infiniti degli streaming"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Mostra gli avatar degli utenti che hanno aggiunto una reazione a un messaggio",
            option: {
                avatarClick: {
                    label: "Click sull'Avatar",
                    description: "Abilita o disabilita l'apertura del profilo cliccando sugli avatar nelle reazioni"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Passa il mouse sopra l'icona della diretta per vedere quali utenti stanno guardando il tuo streaming",
            modal: {
                noSpectator: "Nessuno spettatore"
            },
            option: {
                showPanel: {
                    label: "Mostra Pannello",
                    description: "Mostra gli spettatori sotto il pannello della condivisione schermo"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Cambia automaticamente in maiuscola la prima lettera di ogni frase nel box di scrittura",
            option: {
                blockedWords: {
                    label: "Parole Escluse",
                    description: "Termini da non rendere mai maiuscoli (separa con una virgola)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Inoltra le notifiche di Discord a XSOverlay, per visualizzarle facilmente in Realtà Virtuale (VR)",
            notification: {
                call: {
                    title: "{{user}} ti sta chiamando.",
                    content: "Chiamata in arrivo"
                },
                message: {
                    reply: " (risposta)",
                    embed: " [embed] ",
                    onlyEmbed: "Inviato embed del messaggio",
                    sticker: " [adesivo] ",
                    onlySticker: "Inviato un adesivo",
                    image: "immagine",
                    attachment: "allegato"
                },
                test: {
                    title: "Saluti da Plexcord!",
                    content: "Questa è una notifica di test! *Esplosione*",
                    button: "Invia notifica di test"
                }
            },
            option: {
                webSocketPort: {
                    label: "Porta WebSocket",
                    description: "Porta per la connessione WebSocket"
                },
                preferUDP: {
                    label: "Preferisci UDP",
                    description: "Abilita se usi una vecchia versione di XSOverlay che non supporta i WebSocket. Ignorato su web."
                },
                botNotifications: {
                    label: "Notifiche Bot",
                    description: "Consenti notifiche dai bot"
                },
                serverNotifications: {
                    label: "Notifiche Server",
                    description: "Consenti notifiche dai server"
                },
                dmNotifications: {
                    label: "Notifiche DM",
                    description: "Consenti notifiche dai messaggi diretti"
                },
                groupDmNotifications: {
                    label: "Notifiche DM di Gruppo",
                    description: "Consenti notifiche dai gruppi"
                },
                callNotifications: {
                    label: "Notifiche Chiamate",
                    description: "Consenti notifiche per le chiamate"
                },
                pingColor: {
                    label: "Colore Menzioni",
                    description: "Colore per le menzioni utente"
                },
                channelPingColor: {
                    label: "Colore Menzioni Canale",
                    description: "Colore per le menzioni dei canali"
                },
                soundPath: {
                    label: "Percorso Suono",
                    description: "Suono notifica (default/warning/error)"
                },
                timeout: {
                    label: "Durata",
                    description: "Durata della notifica (secondi)"
                },
                lengthBasedTimeout: {
                    label: "Durata basata sulla lunghezza",
                    description: "Estende la durata in base alla lunghezza del messaggio"
                },
                opacity: {
                    label: "Opacità",
                    description: "Opacità della notifica"
                },
                volume: {
                    label: "Volume",
                    description: "Volume"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Blocca le pubblicità negli embed di YouTube e nell'attività 'Watch Together' tramite AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Aggiunge la descrizione del video agli embed di YouTube"
        },
    }
} as const;

export default translations;
