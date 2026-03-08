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
        title: "impostazioni",
        language: {
            selector: {
                label: "Dil",
                description: "Seleziona la tua lingua preferita per Plexcord.",
                placeholder: "Seleziona lingua"
            }
        },
        location: {
            label: "Posizione delle impostazioni",
            description: "Plexcord determina dove posizionare la sezione delle impostazioni",
            top: "verso l'alto",
            nitro: {
                above: "In cima alla sezione nitro",
                below: "nella sezione nitro"
            },
            activity: {
                above: "Sopra le impostazioni dell'evento",
                below: "In Impostazioni evento"
            },
            bottom: "in alto"
        },
        switches: {
            useQuickCss: {
                label: "Abilita CSS personalizzato",
                description: "Carica CSS personalizzato dall'editor QuickCSS. Ciò ti consente di personalizzare l'aspetto di Discord con i tuoi stili."
            },
            enableReactDevtools: {
                label: "Abilita gli strumenti per sviluppatori React",
                description: "Abilita l'estensione React Developer Tools per eseguire il debug dei componenti React di Discord. Utile per lo sviluppo di plugin."
            },
            mainWindowFrameless: {
                label: "Disabilita la cornice della finestra principale",
                description: "Rimuovi il telaio della finestra locale per un aspetto più pulito. È comunque possibile spostare la finestra trascinando l'area della barra del titolo."
            },
            frameless: {
                label: "Disabilita il telaio della finestra",
                description: "Rimuovi il telaio della finestra locale per un aspetto più pulito. È comunque possibile spostare la finestra trascinando l'area della barra del titolo."
            },
            winNativeTitleBar: {
                label: "Utilizza la barra del titolo nativa di Windows invece della barra del titolo personalizzata di Discord",
                description: "Sostituisci la barra del titolo personalizzata di Discord con la barra del titolo standard di Windows. Ciò potrebbe migliorare la compatibilità con alcuni strumenti di gestione delle finestre."
            },
            transparent: {
                label: "Abilita la trasparenza della finestra",
                description: "Rendi trasparente la finestra Discord. È necessario un tema che supporti la trasparenza, altrimenti non farà nulla.",
                isWindows: "Ciò impedirà il ridimensionamento della finestra e ti impedirà di agganciare la finestra ai bordi dello schermo.",
                notWindows: "Ciò impedirà il ridimensionamento della finestra."
            },
            winCtrlQ: {
                label: "Salva la scorciatoia Ctrl+Q per chiudere Discord (alternativa a Alt+F4)",
                description: "Aggiungi Ctrl+Q come scorciatoia da tastiera per chiudere Discord. Ciò fornisce un'alternativa ad Alt+F4 per chiudere rapidamente l'applicazione."
            },
            disableMinSize: {
                label: "Disabilita la dimensione minima della finestra",
                description: "Consenti alla finestra Discord di ridimensionarsi più piccola della dimensione minima predefinita. Utile per affiancare gestori di finestre o schermi di piccole dimensioni."
            }
        },
        quickActions: {
            title: "Transazioni veloci",
            description: "Operazioni comuni che potresti voler utilizzare frequentemente. Queste scorciatoie forniscono un accesso rapido alle funzionalità utilizzate di frequente senza dover navigare nei menu.",
            notificationLog: "Registro delle notifiche",
            editQuickCSS: "Modifica QuickCSS",
            relaunchDiscord: "Riavvia Discord",
            openSettingsFolder: "Apri la cartella Impostazioni",
            viewSourceCode: "Visualizza il codice sorgente"
        },
        specialCards: {
            donations: {
                title: "Donazioni",
                subtitle: "Grazie per la tua donazione!",
                description: "Puoi gestire i tuoi privilegi in qualsiasi momento inviando un messaggio a @mutanplex.",
                button: "Donazione",
                invite: "Unisciti alla nostra discordia",
                invalid: "Link di invito non valido o scaduto."
            },
            supportProject: {
                title: "Sostieni il progetto",
                description: "Ti invitiamo a sostenere lo sviluppo di Plexcord facendo una donazione!"
            },
            contributions: {
                title: "Contributi",
                subtitle: "Grazie per il tuo contributo!",
                description: "Ora hai un fantastico badge per contribuire a Plexcord!",
                buttonTitle: "Guarda cosa hai contribuito"
            }
        },
        settingsSection: {
            title: "Impostazioni",
            description: "Configura il modo in cui Plexcord si integra e si comporta con Discord. Queste impostazioni influenzano l'aspetto e il comportamento del client Discord.",
            hintParts: {
                prefix: "Configurando le impostazioni di {{pluginLink}}, puoi personalizzare la posizione in cui questa sezione delle impostazioni appare nel menu delle impostazioni di Discord.",
                linkText: "Plug-in Impostazioni"
            }
        },
        notifications: {
            title: "Notifiche",
            description: "Configura il modo in cui Plexcord gestisce le notifiche. Puoi personalizzare quando e come ricevere avvisi o visualizzare una cronologia delle notifiche passate.",
            settings: "Impostazioni di notifica",
            viewLog: "Visualizza la cronologia delle notifiche",
            permissions: {
                denied: {
                    title: "Autorizzazione di notifica desktop negata",
                    label: "Hai negato le autorizzazioni di notifica. Le notifiche sul desktop non funzioneranno!"
                }
            },
            style: {
                label: "Stile di notifica",
                description: "Alcuni plugin potrebbero mostrarti notifiche. Questi sono disponibili in due stili:",
                plexcord: "Notifiche Plexcord",
                plexcordDesc: "Queste sono le notifiche in-app",
                desktop: "Notifiche sul desktop",
                desktopDesc: "Notifiche sul desktop locale (come quando ricevi un ping)",
                onlyWhenNotFocused: "Utilizza le notifiche desktop solo quando Discord non è attivo",
                always: {
                    desktop: "Utilizza sempre le notifiche desktop",
                    plexcord: "Utilizza sempre le notifiche Plexcord"
                }
            },
            positions: {
                label: "Posizione di notifica",
                right: {
                    bottom: "In basso a destra",
                    top: "In alto a destra"
                },
                left: {
                    bottom: "In basso a sinistra",
                    top: "In alto a sinistra"
                }
            },
            missed: {
                label: "Numero di notifiche perse",
                description: "Quando ti concentri nuovamente su Discord, verrà visualizzata una notifica su tutte le notifiche che hai perso.",
                whileYou: "mentre sei via",
                count: "{{count}} notifiche{{s}} ricevute",
                s: " "
            },
            timeout: {
                label: "Timeout delle notifiche",
                description: "Per quanto tempo le notifiche rimangono sullo schermo prima di scomparire automaticamente (in secondi)"
            },
            logLimit: {
                label: "Limite registro notifiche",
                description: "Numero massimo di notifiche da archiviare nel registro delle notifiche. Imposta su {{disable}} per disabilitare la registrazione delle notifiche e imposta su {{unlimited}} per non rimuovere automaticamente le vecchie notifiche"
            },
            opacity: {
                label: "Opacità",
                description: "Opacità delle notifiche in-app"
            },
            maxNotifications: {
                label: "Notifica massima",
                description: "Numero massimo di notifiche da mostrare contemporaneamente"
            },
            behavior: {
                label: "Comportamento delle notifiche",
            },
            disableInStreamerMode: {
                label: "Disabilita in modalità emittente",
                description: "Disattiva le notifiche in modalità emittente"
            },
            renderImages: {
                label: "Elaborare immagini",
                description: "Rendering di immagini nelle notifiche"
            },
            streamingTreatment: {
                label: "Comportamento della modalità emittente",
                description: "Come gestire le notifiche durante la condivisione dello schermo",
                normal: "Normale: mostra la notifica normalmente",
                noContent: "Nessun contenuto: nasconde il corpo della notifica",
                ignore: "Ignora: non mostra affatto la notifica"
            },
        },
        macVibrancy: {
            title: "Stile sfarfallio della finestra (riavvio richiesto)",
            description: "Personalizza l'effetto sfarfallio della finestra di macOS. Questo controlla lo stile di sfocatura e trasparenza della finestra Discord. È necessario un riavvio affinché le modifiche abbiano effetto.",
            placeholder: "Stile sfarfallio della finestra",
            style: {
                no: "senza agitazione",
                underPage: "Pagina sotto (colorazione dei vetri)",
                content: "Contenuto",
                window: "Finestra",
                selection: "Votare",
                titlebar: "barra del titolo",
                header: "Titolo",
                sidebar: "barra laterale",
                tooltip: "punta dello strumento",
                menu: "menu",
                popover: "finestra a comparsa",
                fullscreenUI: "Interfaccia utente a schermo intero (trasparente ma leggermente opaca)",
                hud: "HUD (più trasparente)"
            }
        }
    },

    plugins: {
        title: "Plugin",
        new: "Nuovo",
        unknown: "Sconosciuto",
        noDescription: "Descrizione non disponibile.",
        restart: {
            apply: "Riavvia per applicare le modifiche!",
            required: "È necessario riavviare!",
            description: "Riavvia ora per applicare nuovi plugin e impostazioni",
            following: "I seguenti plugin richiedono un riavvio:",
            fully: "Alcuni plugin richiedono un riavvio per essere completamente disabilitati.",
            would: "Vorresti ricominciare?",
            remainingCount: "e {{count}} altro",
            resetDefault: "Ripristina le impostazioni predefinite",
            failed: "Impossibile inizializzare le dipendenze:",
            button: {
                restart: "Ricomincia",
                later: "Poi!",
                now: "Riavvia ora",
                cancel: "Cancellare",
                disableWarning: "Disabilita avvisi",
                disableAll: "Disabilita tutto",
                reset: "reset",
                close: "Trimestre"
            }
        },
        contributor: {
            contributed: "contribuito",
            modal: {
                contributionsInfo: "{{userName}} {{contributionCount}} {{continuedLink}} sviluppando il plugin.",
                noContributions: "{{userName}} non ha ancora sviluppato alcun plugin. Molto probabilmente {{contributedLink}} in modi diversi!"
            }
        },
        infoModal: {
            description: "Puoi ottenere maggiori informazioni su un plugin premendo l'ingranaggio o l'icona delle informazioni",
            settingsInfo: "I plugin con ruote dentate hanno impostazioni che puoi modificare!",
            disableAll: "Disabilita tutti i plugin"
        },
        error: {
            invalidInput: "È stato fornito un input non valido",
            stopping: "Si è verificato un problema durante l'arresto del plugin {{plugin}}",
            starting: "Si è verificato un problema durante l'inizializzazione del plugin {{plugin}}",
            startDependency: "Si è verificato un problema durante l'inizializzazione delle dipendenze: {{failures}}",
            infoRender: "Si è verificato un errore durante il rendering del componente informativo personalizzato di questo plugin"
        },
        placeholder: {
            number: "Inserisci un numero",
            select: "Scegli un'opzione",
            text: "Inserisci un valore"
        },
        excluded: {
            desktop: "App Discord Desktop o Plextron",
            discordDesktop: "Applicazione Discord per desktop",
            plextron: "Applicazione Plextron",
            web: "App Plextron e versione Web di Discord",
            dev: "Versione per sviluppatori di Plexcord"
        },
        search: {
            looking: "E' questo quello che stai cercando?",
            onlyAvailable: "Disponibile solo qui ->",
            noCriteria: "Non è stato trovato nessun plugin corrispondente ai tuoi criteri di ricerca"
        },
        required: {
            title: "Plugin richiesti",
            this: "Questo plugin è necessario affinché Plexcord funzioni.",
            by: "Questo plugin è necessario per il funzionamento di quanto segue:"
        },
        dangerModal: {
            title: "Azione pericolosa",
            disablePlugins: "Disabilita plugin",
            disableText: "Disabilita tutto",
            irreversible: "QUESTA AZIONE NON PUÒ ESSERE REVOCA!",
            enableBack: "Sei assolutamente sicuro di voler continuare? Puoi riattivarlo più tardi.",
            undone: "Questa azione non può essere annullata. Sei sicuro?",
            resetDescription: "Stai per ripristinare le impostazioni del plugin {{pluginName}} ai valori predefiniti.",
            disable: "Stai per disabilitare i plugin {{enabledPlugins}}!",
            confirmReset: "Conferma e reimposta",
            cancel: "Cancellare",
            resetSettings: "Ripristina impostazioni",
            resetText: "reset"
        },
        filters: {
            label: "Filtri",
            placeholder: "Cerca plugin...",
            option: {
                all: "Tutto",
                enabled: "Attivo",
                disabled: "Disabilitato",
                new: "nuovo",
                userplugins: "Plugin utente",
                api: "Plugin API"
            }
        },
        pluginModal: {
            noSettings: "Questo plugin non ha impostazioni che puoi modificare.",
            authors: "Autori",
            settings: "Impostazioni",
            successfulReset: "Le impostazioni del plugin {{plugin}} sono state ripristinate con successo.",
            enabledStock: "Componenti aggiuntivi di stock attivi",
            totalStock: "Componenti aggiuntivi in ​​stock totali",
            enabledUser: "Plugin utente attivi",
            totalUser: "Componenti aggiuntivi utente totali",
            info: "Visualizza ulteriori informazioni",
            source: "Visualizza il codice sorgente"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API per aggiungere decoratori all'elenco dei membri (sia sui server che sui DM)",
                    messageAccessories: "API per aggiungere oggetti di scena ai messaggi",
                    messageDecorations: "API per aggiungere decoratori ai post",
                    chatInputButtons: "API per aggiungere il pulsante alla voce della chat",
                    commands: "API necessaria a tutto ciò che utilizza comandi",
                    contextMenu: "API per aggiungere/rimuovere elementi dal menu contestuale",
                    dynamicImageModal: "Ti consente di saltare la larghezza o l'altezza quando apri la finestra modale dell'immagine",
                    menuItemDemangler: "Rende più leggibile la voce del menu Discord",
                    messageEvents: "API necessaria a tutto ciò che utilizza gli eventi dei messaggi",
                    messagePopover: "API per aggiungere un pulsante al popup del messaggio",
                    messageUpdater: "API per l'aggiornamento e la rielaborazione dei messaggi",
                    nicknameIcons: "API per aggiungere icone ai nomi utente nei profili",
                    notices: "Risolto il problema con l'eliminazione automatica delle notifiche",
                    serverList: "API richiesta per i plugin che modificano l'elenco dei server",
                    userSettings: "Patch per rivelare le impostazioni utente, i gruppi e i nomi di Discord",
                    audioPlayer: "API per riprodurre file audio interni di Discord o collegamenti audio esterni.",
                    userArea: "API per aggiungere pulsanti al pannello dell'area utente."
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
                    plexcord: "Partecipante Plexcord",
                    vencord: "Partecipante Vencord",
                    userPlugin: "Collaboratore del plugin utente"
                },
                context: {
                    title: "Opzioni badge",
                    copy: {
                        name: "Copia il nome del badge",
                        link: "Copia il collegamento all'immagine del badge"
                    },
                    refetch: {
                        button: "Aggiorna badge",
                        success: "I badge sono stati rinnovati con successo!"
                    }
                },
                modal: {
                    title: "Sostenitore di Plexcord",
                    special: "Questo badge è un privilegio speciale per i donatori Plexcord.",
                    description: "Ti invitiamo a sostenere lo sviluppo di Plexcord diventando un donatore. Per noi sarebbe molto prezioso!!"
                }
            }
        },
        uiElements: {
            manage: "Gestisci gli elementi dell'interfaccia utente",
            allows: "Ti consente di nascondere i pulsanti che non ti piacciono",
            section: {
                chatbar: {
                    title: "Pulsanti della barra di chat",
                    description: "Questi sono i pulsanti sul lato destro della barra di accesso alla chat"
                },
                messagePopover: {
                    title: "Pulsanti popup dei messaggi",
                    description: "Si tratta di pulsanti mobili che appaiono sulla destra quando passi il mouse sopra un messaggio"
                }
            },
            button: "I pulsanti per i plugin attivati ​​appariranno qui."
        }
    },

    patchHelper: {
        title: "Assistente patch",
        description: "Uno strumento per sviluppatori che ti aiuta a creare patch per i plugin Plexcord.",
        fullPatch: {
            label: "Tam Yama",
            description: "Incolla qui la patch JSON completa per compilare i campi"
        },
        find: "Bul",
        match: "incontro",
        replacement: "Modifica",
        preview: "Anteprima",
        generatedCode: "Codice generato",
        group: "Gruppo",
        diff: "Differenza",
        module: "Modulo",
        compile: "Derlé",
        compiled: "Compilazione riuscita",
        copy: {
            clipboard: "Copia negli appunti",
            codeblock: "Copia come blocco codice"
        },
        error: {
            noMatch: "Nessuna corrispondenza trovata. Forse quel modulo è in fase di caricamento lento.",
            multipleMatch: "Trovata più di una corrispondenza. Utilizza un modello di ricerca più specifico.",
            noFind: "Non esiste un campo \"trova\".",
            noReplacement: "Non è presente alcun campo \"Modifica\".",
            invalidReplacement: "Il campo Sostituisci non è valido",
            replacementMatch: "Il campo \"replacement.match\" non esiste",
            replacementReplace: "Il campo \"replacement.replace\" non esiste",
            replacementMustFunction: "La sostituzione deve essere una funzione"
        },
        cheatSheet: {
            title: "Foglio informativo",
            identifiers: "Identificatori di corrispondenza della sequenza di escape regex personalizzata (nomi di variabili, nomi di classi, ecc.)",
            dollar: "aggiunge $",
            entireMatch: "Aggiunge tutte le corrispondenze",
            beforeMatch: "Aggiunge la sottostringa prima della corrispondenza",
            afterMatch: "Aggiunge la sottostringa dopo la corrispondenza",
            nthGroup: "Aggiunge l'ennesimo gruppo di acquisizione ($1, $2...)",
            pluginInstance: "Aggiunge l'istanza del plugin"
        },
        replacementEval: {
            label: "Sostituzione del processo come funzione",
            description: "La \"Sostituzione\" verrà trattata come una funzione quando questa è abilitata."
        }
    },

    sync: {
        title: "Backup e ripristino",
        warning: "Avvertimento",
        warningText: "L'importazione di un file di impostazioni sovrascriverà le impostazioni attuali. Se desideri mantenere la configurazione attuale, assicurati di esportare prima un backup.",
        description: "Puoi importare ed esportare le tue impostazioni Plexcord come file JSON. In questo modo, puoi spostare facilmente le tue impostazioni su un altro dispositivo o ripristinare le tue impostazioni dopo aver reinstallato Plexcord o Discord.",
        successful: "Le impostazioni sono state importate con successo. Riavvia l'app affinché le modifiche abbiano effetto!",
        error: {
            failure: "Importazione delle impostazioni non riuscita: {{error}}",
            failedExport: "Esportazione delle impostazioni non riuscita, controlla la console",
            invalid: "Impostazioni non valide. È davvero un file di ottimizzazione Plexcord?",
            tooLarge: "DataStore è troppo grande: escluso dal backup. Se necessario, utilizzare la funzione \"Esporta archivi dati\".",
            clearSomeDate: "DataStore è enorme. Cancella alcuni dati del plugin e riprova."
        },
        settings: {
            text: "Cosa c'è nel backup?",
            quickcss: "QuickCSS personalizzato",
            theme: "Collegamenti a tema",
            plugins: "Impostazioni del plugin",
            datastores: "Repository aggiuntivi (ad esempio Timezones o IRememberYou)"
        },
        import: {
            title: "Importa impostazioni",
            description: "Seleziona un file di impostazioni precedentemente esportato per ripristinare la configurazione. Ciò sostituirà tutte le impostazioni correnti con quelle del backup.",
            all: "Importa tutte le impostazioni",
            plugins: "Eklentiyi Iche Aktar",
            css: "QuickCSS'yi İçe Altro",
            datastore: "Importa archivi dati"
        },
        export: {
            title: "Impostazioni di esportazione",
            description: "Puoi esportare le tue attuali impostazioni Plexcord in un file per il backup o trasferirle su un altro dispositivo.",
            all: "Esporta tutte le impostazioni",
            plugins: "Plug-in di esportazione",
            css: "Esporta QuickCSS",
            datastore: "Esporta archivi dati"
        }
    },

    cloud: {
        text: "Nuvola",
        title: "Sincronizzazione delle impostazioni",
        override: "Sincronizzazione nel cloud",
        description: "Sincronizza le tue impostazioni Plexcord sul cloud. Ciò ti consente di mantenere la configurazione in modo coerente su più dispositivi senza importazione/esportazione manuale.",
        switchDescription: "Una volta abilitato, le tue impostazioni verranno sincronizzate sul cloud. È possibile sincronizzare manualmente utilizzando le seguenti azioni.",
        settings: "Impostazioni nuvola",
        successful: "Le tue impostazioni sono state sincronizzate con successo sul cloud.",
        updated: "Le tue impostazioni sono state aggiornate! Fare clic qui per riavviare affinché le modifiche abbiano pieno effetto!",
        deleted: "Impostazioni cancellate dal cloud!",
        integration: {
            title: "Integrazione nel cloud",
            description: "L'integrazione cloud di Plexcord ti consente di sincronizzare le tue impostazioni su più dispositivi e installazioni Discord. I tuoi dati sono archiviati in modo sicuro e possono essere facilmente ripristinati in qualsiasi momento.",
        },
        reauth: "Abbiamo notato che un altro cliente aveva abilitate le integrazioni cloud! A causa delle limitazioni, dovrai autenticarti nuovamente per continuare. Clicca qui per andare alla pagina delle impostazioni e continuare!",
        error: {
            setup: "L'installazione non è riuscita (impossibile recuperare la configurazione OAuth).",
            secret: "L'installazione non è riuscita (non è stata restituita alcuna chiave segreta).",
            string: "Installazione non riuscita ({{errore}}).",
            connect: "La sincronizzazione cloud è stata disabilitata perché questo account non è connesso all'app Plexcord Cloud. Puoi riattivare questo account collegandolo nelle Impostazioni cloud. (nota: memorizzerà le tue preferenze separatamente)",
            noSettings: "Nessuna impostazione trovata nel cloud.",
            uptodate: "Le tue impostazioni sono aggiornate.",
            localNewer: "Le tue impostazioni locali sono più recenti delle impostazioni cloud.",
            delete: "Impossibile eliminare le impostazioni ({{errore}}).",
            api: {
                returned: {
                    delete: "Impossibile eliminare le impostazioni (l'API ha restituito {{status}}).",
                    to: "Impossibile sincronizzare le impostazioni sul cloud (l'API ha restituito {{status}}).",
                    from: "Impossibile sincronizzare le impostazioni dal cloud (l'API ha restituito {{status}})."
                }
            },
            synchronize: {
                to: "Impossibile sincronizzare le impostazioni sul cloud ({{error}}).",
                from: "Impossibile sincronizzare le impostazioni dal cloud ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Per utilizzare le funzionalità di sincronizzazione delle impostazioni, abilita l'integrazione cloud sopra."
        },
        danger: {
            title: "Zona pericolosa",
            description: "Elimina definitivamente tutti i tuoi dati nel cloud. Questa azione è irreversibile e rimuove tutte le impostazioni sincronizzate e qualsiasi altro dato archiviato nell'infrastruttura cloud.",
            delete: {
                account: {
                    title: "Elimina account cloud",
                    description: "Sei sicuro di voler eliminare definitivamente il tuo account cloud e tutti i dati associati? Questa azione non può essere annullata.",
                    confirm: "Elimina account",
                    cancel: "Cancellare"
                }
            }
        },
        notification: {
            title: "Integrazione nel cloud",
            enabled: "Integrazione cloud abilitata",
            host: "Il dominio {{host}} è stato aggiunto all'elenco dei permessi. Riavviare l'applicazione affinché le modifiche abbiano effetto.",
            erase: {
                successful: "Dati cloud eliminati correttamente",
                failed: "Impossibile eliminare tutti i dati (l'API ha restituito {{status}}), contatta l'assistenza."
            }
        },
        button: {
            to: "Sincronizza su Cloud",
            from: "Sincronizzazione dal cloud",
            fromDescription: "Ciò sovrascriverà le tue impostazioni attuali con quelle del cloud. Usalo saggiamente!",
            delete: "Elimina dati cloud",
            enable: "Attiva le integrazioni cloud",
            reauthorize: "Riautorizzare",
            confirm: "Riavvia ora",
            later: "Poi!"
        },
        privacy: "protegge la tua privacy",
        source: "codice sorgente",
        overview: "Plexcord viene fornito con l'integrazione cloud, offrendo vantaggi come la sincronizzazione delle impostazioni tra dispositivi. Poiché questi {{privacy}} e {{source}} sono offerti con la licenza AGPL 3.0, puoi ospitarli sul tuo server.",
        authorization: "Connettiti al cloud per sincronizzare le impostazioni. Se non hai ancora configurato l'integrazione cloud, verrà richiesta l'autorizzazione.",
        backend: {
            title: "Fornitore di servizi cloud",
            description: "Scegli come verranno archiviate le tue impostazioni nel cloud. Per impostazione predefinita viene utilizzato Plexcord Cloud, ma se lo desideri puoi anche configurare il tuo servizio cloud self-hosted.",
            invalid: "URL non valido"
        },
        sync: {
            title: "Sincronizza le regole per questo dispositivo",
            description: "Questa impostazione determina la modalità di sincronizzazione delle impostazioni tra questo dispositivo e il cloud. È possibile consentire il trasferimento delle modifiche in entrambe le direzioni o selezionare un singolo lato come origine principale.",
            direction: {
                both: "Sincronizzazione bidirezionale (le modifiche vengono trasferite in entrambe le direzioni)",
                push: "Questo dispositivo è l'origine (solo caricamento)",
                pull: "Sorgente cloud (solo download)",
                manual: "Sincronizzazione automatica (sincronizzazione manuale solo con i pulsanti sottostanti)"
            }
        }
    },

    changelog: {
        text: "Modifica note",
        title: "Modifica note",
        description: "Puoi trovare le modifiche e gli aggiornamenti più recenti di Plexcord qui.",
        by: "scrittore",
        check: "Controlla il magazzino",
        uptodate: "attuale",
        update: "Aggiornamento",
        noMessage: "nessun messaggio",
        unknown: "sconosciuto",
        updatedPlugins: "Plugin aggiornati",
        newSettings: "Nuove impostazioni",
        newSettingTooltip: "Nuova impostazione per {{plugin}}",
        loading: "Caricamento...",
        repoUptodate: "Magazzino aggiornato",
        fetch: "Portare dal magazzino",
        clear: "Cancella tutte le note",
        internet: "Assicurati di avere una connessione Internet e riprova.",
        recent: "Modifiche recenti",
        codeChanges: "Modifiche al codice {{count}} nuovo commit",
        updateLogs: "{{count}} Nota di aggiornamento",
        noCommit: "Non è stato trovato alcun commit successivo dalla versione corrente. Fai clic su \"Recupera dal repository\" per verificare le nuove modifiche.",
        previous: "Insieme alle precedenti sessioni di aggiornamento, cronologie di commit e modifiche ai plug-in.",
        modal: {
            description: "Visualizza le ultime modifiche a Plexcord. Questo processo ti mostra le novità recuperando i commit direttamente dal repository.",
            repository: "Deposito",
            failed: "Impossibile ricevere: controlla la console",
            current: "Disponibile:",
            hide: "nascondere le note",
            show: "Mostra note",
            fetch: {
                title: "Porta cambiamenti",
                description: "Controlla la presenza di nuovi commit, aggiornamenti dei plug-in e modifiche al codice nel repository. Questo confronterà la tua versione attuale con la versione più recente e ti mostrerà le novità.",
                newCommit: "Questi sono nuovi commit e aggiornamenti dei plug-in dalla tua ultima versione. Puoi vedere quali funzionalità sono state aggiunte, quali bug sono stati risolti e quali plugin sono stati aggiornati.",
                confirm: "Potere",
            }
        },
        commit: {
            available: "impegno disponibile",
            no: "Nessun nuovo commit",
            new: "nuovi plugin",
            updated: "plugin aggiornati",
            settings: "nuove impostazioni"
        },
        toast: {
            already: "Il repository è già aggiornato",
            found: "{{count}} nuovi commit trovati dal repository",
            local: "Il repository è aggiornato con la tua copia locale",
            failed: "Impossibile portarlo dal magazzino :(",
            cleared: "Tutte le note cancellate",
            logCleared: "Nota cancellata",
            yourLatest: "Commit salvati dal tuo ultimo aggiornamento"
        },
        alert: {
            clear: {
                title: "Cancella tutte le note",
                body: "Sei sicuro di voler cancellare tutte le note? Questa azione non può essere annullata.",
                confirm: "Cancella tutto",
                confirmColor: "Pericolo",
                cancel: "Cancellare"
            },
            log: {
                title: "Cancella registro",
                body: "Sei sicuro di voler cancellare questo registro? Questa azione non può essere annullata.",
                confirm: "Cancella registro",
                confirmColor: "Pericolo",
                cancel: "Cancellare"
            }
        },
        newPlugins: "{{count}} Nuovo plugin",
        following: "Negli ultimi aggiornamenti sono stati aggiunti i seguenti plugin:",
        more: "+{{count}} nuovi plugin"
    },

    csp: {
        restart: "Per applicare questa modifica è necessario un riavvio",
        blocked: {
            resources: "Risorse bloccate",
            disallowed: "Alcune immagini, stili o caratteri sono stati bloccati perché provengono da domini non autorizzati.",
            recommended: "Si consiglia vivamente di spostarli su GitHub o Imgur. Tuttavia, puoi anche consentire i domini se ti fidi completamente di loro.",
            afterAllow: "Dopo aver concesso l'autorizzazione a uno spazio, devi spegnere completamente e riavviare {{platform}} (dalla barra delle applicazioni/dal task manager) per applicare la modifica.",
            allow: "Permettere",
            url: "URL bloccati"
        },
        imgur: {
            direct: "I collegamenti Imgur devono essere collegamenti diretti nel formato {{etc}}.",
            copy: "Per ottenere un collegamento diretto, fai clic con il pulsante destro del mouse sull'immagine e seleziona \"Copia indirizzo immagine\"."
        },
        wants: {
            caller: "{{callerName}} vuole consentire le connessioni a {{domain}}",
            detail: "Se non riconosci e non ti fidi completamente di {{domain}}, dovresti annullare questa richiesta!",
            restart: "Devi chiudere completamente e riavviare {{appName}} affinché le modifiche abbiano effetto.",
            type: {
                images: "immagini",
                styles: "CSS e temi",
                fonts: "Caratteri"
            },
            content: "Sarà consentito caricare i seguenti tipi di contenuti da {{domain}}:",
            understand: "Mi fido completamente di {{domain}} e comprendo i rischi derivanti dall'autorizzazione dei collegamenti.",
            button: {
                cancel: "Cancellare",
                allow: "Permettere"
            },
            title: "Autorizzazioni per i nomi di dominio"
        }
    },

    themes: {
        title: "Temi",
        management: "Gestione dei temi",
        description: "Personalizza l'aspetto di Discord con i temi. Aggiungi file .css locali o installa temi direttamente dagli URL. I temi con l'icona a forma di ingranaggio hanno impostazioni personalizzabili che puoi modificare.",
        local: "Temi locali",
        new: "NUOVO",
        pinned: "appuntato",
        stylus: "Estensione dello stilo",
        bd: "Temi BetterDiscord",
        github: "Github",
        download: "Stai cercando un tema? Dai un'occhiata a {{bd}} o cerca su {{github}}. Durante il download da BetterDiscord, fai clic sul pulsante \"Download\" e posiziona il file .theme.css nella cartella del tema.",
        add: "Aggiungere",
        reset: "Ripristina le impostazioni predefinite",
        notCSS: "Non è un file CSS. Assicurati di utilizzare il collegamento non elaborato!",
        okay: "Va bene!",
        checking: "In fase di controllo...",
        valid: "Valido!",
        upload: "Carica tema",
        openFolder: "Apri la cartella dei temi",
        loadMissing: "Installa temi mancanti",
        editQuickCSS: "Modifica QuickCSS",
        editClient: "Modifica ClientTheme",
        website: "Apri il sito web",
        discord: "Server Discordia",
        downloadTheme: "Scaricamento",
        refresh: "Aggiorna",
        delete: "Sil",
        unknown: {
            title: "sconosciuto",
            author: "Autore sconosciuto",
            theme: "Tema della discordia"
        },
        required: "I seguenti plugin sono necessari ma non attivi:",
        homepage: "Pagina iniziale",
        support: "Supporto",
        online: {
            title: "Temi in linea",
            description: "Installa temi direttamente dagli URL invece che dai file locali. I temi online vengono aggiornati automaticamente quando cambia la fonte; così avrai sempre la versione più recente senza download manuale.",
            enable: "Abilita temi online",
            enableDescription: "Attiva/disattiva il caricamento del tema online. Se disabilitato, tutti i temi online verranno disattivati ​​e non potrai aggiungere nuovi temi online."
        },
        quickActions: {
            title: "Transazioni veloci",
            description: "Scorciatoie per gestire i tuoi temi. Apri la cartella dei temi per aggiungere nuovi temi, utilizza QuickCSS per modifiche rapide allo stile o ricarica i temi dopo le modifiche."
        },
        error: {
            userscript: "I temi su Userscript non sono supportati!",
            stylus: "Puoi invece installare temi con {{stylus}}!",
            expired: "Collegamento non valido o scaduto",
            text: "Anche:"
        },
        copy: {
            url: "Copia l'URL",
            copied: "URL del tema copiato!",
            settings: "Copia le impostazioni del tema",
            copiedSettings: "Le impostazioni del tema sono state copiate negli appunti."
        },
        paste: {
            settings: "Incolla le impostazioni del tema",
            empty: "I tuoi appunti sono vuoti.",
            invalid: "Negli appunti non sono presenti dati di impostazioni validi.",
            pasted: "Le impostazioni del tema sono state incollate dagli appunti."
        },
        settings: {
            for: "Impostazioni per {{themeName}}",
        },
        installed: {
            title: "Temi installati",
            description: "Gestisci i tuoi temi qui. I temi locali vengono caricati dalla cartella dei temi, i temi online vengono caricati dagli URL. I temi con l'icona di un ingranaggio hanno impostazioni personalizzabili.",
            count: "{{count}} temi installati ({{localCount}} locale, {{onlineCount}} online) {{enabledCount}} abilitato",
            search: "Tema anche...",
            loading: "I temi sono in fase di caricamento...",
            none: "Non ci sono ancora temi installati. Per iniziare, aggiungi i file del tema alla cartella dei temi o aggiungi un tema online dall'alto.",
            noCriteria: "Non è stato trovato alcun tema corrispondente alla tua ricerca o ai tuoi criteri di filtro."
        },
        filter: {
            all: "Mostra tutto",
            online: "Temi in linea",
            local: "Temi locali",
            enabled: "Efficace",
            disabled: "Disabilitato"
        },
        notification: {
            refresh: {
                title: "Tema rinnovato",
                error: "Impossibile aggiornare il tema"
            },
            failed: {
                download: "Tema indirilemedi"
            }
        }
    },

    updater: {
        title: "Aggiornamento",
        settings: "Impostazioni dell'aggiornamento",
        updates: "Aggiornamenti",
        updated: "aggiornato!",
        restart: "Riavvia cliccando qui",
        repaired: "Plexcord riparato!",
        ok: "OK",
        preferences: {
            title: "Aggiorna preferenze",
            description: "Scopri come Plexcord si mantiene aggiornato. Puoi scegliere di aggiornare automaticamente in background o ricevere notifiche quando sono disponibili nuovi aggiornamenti.",
        },
        github: {
            local: "La tua copia locale ha record più recenti rispetto al repository remoto. Questo di solito accade quando apporti modifiche locali. Conservarli o reimpostarli prima dell'aggiornamento."
        },
        error: {
            check: "Si è verificato un problema durante la verifica della disponibilità di un aggiornamento. Vedi console per ulteriori informazioni.",
            occurred: "Si è verificato un errore",
            retrieve: "Si è verificato un problema durante il recupero delle informazioni sull'aggiornamento: controlla la console",
            title: "Nooooo!",
            tryAgain: "Si è verificato un errore. Riprova o consulta la console per ulteriori informazioni.",
            command: "Comando {{path}} non trovato. Scaricalo o riprova.",
            code: "Codice {{codice}}. Vedi console per ulteriori informazioni.",
            running: "Si è verificato un problema durante l'esecuzione di {{cmd}}: {{error}}",
            failed: "Anche questo non è riuscito :( Prova ad aggiornare o reinstallare con il programma di installazione!"
        },
        available: "1 aggiornamento disponibile",
        updateAvailable: "Aggiornamento Plexcord disponibile!",
        click: "Clicca qui per visualizzare l'aggiornamento",
        available_plural: "{{count}} aggiornamenti disponibili",
        current: "Attuale!",
        successful: {
            title: "Aggiornamento riuscito!",
            body: "Aggiornato con successo. Riavvia per salvare le modifiche!",
            button: {
                confirm: "Ricomincia",
                cancel: "Non adesso!",
                update: "Aggiorna ora",
                check: "Controlla gli aggiornamenti"
            },
            noFound: "Nessun aggiornamento trovato"
        },
        automatically: {
            label: "Aggiornamento automatico",
            description: "Plexcord scarica e installa automaticamente gli aggiornamenti senza conferma"
        },
        notify: {
            label: "Mostra la notifica di aggiornamento automatico",
            description: "Mostra una notifica quando Plexcord si aggiorna automaticamente"
        },
        repo: "Deposito",
        repoDescription: "Questo è il repository GitHub in cui Plexcord riceve gli aggiornamenti.",
        loading: "Caricamento...",
    },

    components: {
        error: {
            title: "Oh no!",
            render: "Si è verificato un errore durante il rendering di questo componente. Troverai ulteriori informazioni qui sotto e sulla tua console."
        },
        componentFailed: {
            message: "Ah! Impossibile eseguire il rendering di questa pagina. Tuttavia, è disponibile un aggiornamento che potrebbe risolvere questo problema. Vuoi aggiornare e riavviare adesso?"
        },
        quickCSS: {
            title: "Apri l'editor QuickCSS",
            message: "L'editor QuickCSS è ancora aperto in background.",
            detail: "Vuoi ancora chiudere Discord? Questo chiuderà anche l'editor QuickCSS.",
            cancel: "Cancellare",
            close: "Chiudi comunque"
        }
    },

    commands: {
        error: {
            execute: "Si è verificato un errore durante l'esecuzione del comando '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Chiudi notifica",
        noYet: "Nessuna notifica ancora",
        settings: "Impostazioni di notifica",
        log: {
            title: "Registro delle notifiche",
            clear: "Cancella registro notifiche",
            sure: "Sei sicuro?",
            permamently: "{{count}} notifiche verranno rimosse definitivamente. Questa azione non può essere annullata.",
            button: {
                confirm: "OK",
                cancel: "Cancellare"
            }
        }
    },

    memberlist: {
        error: {
            render: "Si è verificato un errore durante il rendering del Decoratore elenco membri {{key}}"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Si è verificato un errore durante il rendering dell'accessorio messaggio {{key}}"
            }
        },
        decoration: {
            error: {
                render: "Si è verificato un errore durante il rendering della decorazione del messaggio {{key}}"
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
            years: "anno",
            month: "È",
            months: "È",
            week: "settimana",
            weeks: "settimana",
            day: "giorno",
            days: "giorno",
            hour: "momento",
            hours: "momento",
            minute: "minuti",
            minutes: "minuti",
            second: "secondo",
            seconds: "secondo",
            ago: "Prima",
            s: " "
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Disabilita il monitoraggio di Discord (analisi/'scienza'), le metriche e la segnalazione degli arresti anomali di Sentry",
            option: {
                disableAnalytics: {
                    label: "Chiudi analisi",
                    description: "Disabilita le metriche di tracciamento (analisi/'scienza') di Discord e la segnalazione degli arresti anomali di Sentry"
                }
            }
        },
        settings: {
            name: "Impostazioni",
            description: "Aggiunge l'interfaccia delle impostazioni e le informazioni di debug",
            option: {
                language: {
                    label: "Dil",
                    description: "Seleziona la tua lingua preferita per Plexcord."
                },
                settingsLocation: {
                    label: "Posizione delle impostazioni",
                    description: "Plexcord determina dove posizionare la sezione delle impostazioni"
                }
            }
        },
        supportHelper: {
            name: "Assistente di supporto",
            description: "Ci aiuta a fornirti supporto",
            commands: {
                description: {
                    debug: "Invia informazioni di debug Plexcord",
                    plugins: "Invia l'elenco dei plug-in Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "Aspettare!",
                    body: "Stai utilizzando una vecchia versione di Plexcord! Molto probabilmente i tuoi problemi sono già stati risolti.",
                    footer: "Si prega di aggiornare prima di chiedere supporto!",
                    button: {
                        cancel: "Vedi Aggiornamenti",
                        confirm: "Aggiorna e riavvia ora",
                        secondaryConfirm: "So cosa sto facendo altrimenti non riesco ad aggiornare"
                    }
                },
                updater: {
                    title: "Aspettare!",
                    body: "Stai utilizzando una versione aggiornata esternamente di Plexcord, non forniamo supporto per questa versione!",
                    footer: "{{officially}} o contatta il fornitore del pacchetto per assistenza.",
                    officially: "versione ufficialmente supportata di Plexcord",
                    button: {
                        cancel: "Cancellare",
                        confirm: "Visualizza la pagina di download",
                        now: "Aggiorna ora"
                    },
                    toast: {
                        success: "Riuscito! Riavvio...",
                        already: "Già aggiornato!",
                        failed: "Aggiornamento non riuscito :("
                    }
                },
                custom: {
                    title: "Aspettare!",
                    header: "Stai utilizzando una versione proprietaria di Plexcord, non forniamo supporto per questa versione!",
                    body: "Forniamo supporto solo per {{officialBuild}}. {{cambia}} oppure affronta il problema da solo.",
                    footer: "Se ignori questa regola, il tuo diritto a ricevere il sostegno verrà revocato.",
                    official: "comunicati ufficiali",
                    switch: "aggiornare a una versione ufficiale",
                    button: {
                        confirm: "Capisco",
                        secondaryConfirm: "Non mostrarlo più"
                    }
                }
            },
            button: {
                debug: "esegui /plexcord-debug",
                plugins: "esegui /plexcord-plugins",
                snippet: "Esegui lo snippet di codice"
            },
            toast: {
                success: "Riuscito!",
                failed: "Impossibile eseguire lo snippet di codice :(",
                failedOpenInvite: "Impossibile aprire l'invito, controlla la console :(",
                upload: "Elenco dei plugin caricato con successo!",
                failedUpload: "Impossibile caricare il file dell'elenco dei plug-in. Per favore riprova.",
                unableGenerate: "Impossibile creare l'elenco dei plug-in."
            },
            dm: {
                warning: "Per favore non inviare messaggi privati ​​agli sviluppatori del plug-in Plexcord per ricevere supporto!{{br}}Invece, puoi utilizzare il canale di supporto Plexcord unendoti al server {{support}}: {{channel}}"
            },
            alert: {
                title: "Attenzione: troppi plugin",
                paragraph1: "Abbiamo notato che sono stati attivati ​​più di 100 plugin.",
                paragraph2: "Potresti non ricevere supporto a causa del numero di plugin.",
                paragraph3: "Molto probabilmente il tuo problema è causato da conflitti di plugin.",
                paragraph4: "Considera la possibilità di disabilitare alcuni plugin per risolvere il problema.",
                paragraph5: "L'elenco dei plug-in verrà inviato come file di testo.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Fai clic con il pulsante sinistro del mouse sul pannello del tuo account e fai clic con il pulsante destro del mouse per visualizzare il profilo del tuo server",
            option: {
                prioritizeServerProfile: {
                    label: "Dai priorità al profilo del server",
                    description: "Dai la priorità al profilo del server quando fai clic con il pulsante sinistro del mouse sul pannello del tuo account"
                }
            },
            context: {
                account: "Mostra profilo account",
                server: "Mostra profilo server",
                prioritize: "Dai priorità al profilo del server"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Fa sì che il popup di cancellazione del rumore passi da Nessuno a Krisp invece che da Krisp a Standard."
        },
        alwaysAnimate: {
            name: "Sempre animato",
            description: "Anima tutto ciò che può essere animato.",
            option: {
                icons: {
                    label: "icone",
                    description: "Anima le icone del server, gli avatar, le decorazioni e altro in qualsiasi momento."
                },
                statusEmojis: {
                    label: "Emoji di stato",
                    description: "Ravviva sempre gli emoji di stato."
                },
                serverBanners: {
                    label: "Banner del server",
                    description: "Anima sempre i banner del server."
                },
                nameplates: {
                    label: "Targhette",
                    description: "Animare sempre le targhette."
                },
                roleGradients: {
                    label: "Transizioni di ruolo",
                    description: "Anima sempre le transizioni di colore dei ruoli."
                }
            }
        },
        alwaysExpandProfiles: {
            name: "sempreEspandiProfili",
            description: "Apre sempre i profili utente espansi"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Espande sempre l'elenco dei ruoli nei popup del profilo",
            option: {
                hideArrow: {
                    label: "Nascondi frecce",
                    description: "Nascondi le frecce"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Riproduce un suono animalesco per ogni messaggio inviato (fanno molto)",
            option: {
                volume: {
                    label: "Livello sonoro",
                    description: "Volume della voce animale"
                },
                speed: {
                    label: "Velocità",
                    description: "Velocità vocale animalesca"
                },
                pitch: {
                    label: "Tonnellata",
                    description: "moltiplicatore di tono"
                },
                messageLengthLimit: {
                    label: "Limite di lunghezza del messaggio",
                    description: "Lunghezza massima del messaggio da elaborare"
                },
                processOwnMessages: {
                    label: "Elabora i tuoi messaggi",
                    description: "Abilita anche la possibilità di esprimere i tuoi messaggi"
                },
                soundQuality: {
                    label: "Qualità del suono",
                    description: "Qualità del suono da usare",
                    high: "Alto",
                    med: "Medio",
                    low: "Basso",
                    lowest: "Il più basso"
                }
            }
        },
        alwaysTrust: {
            name: "Fidati sempre",
            description: "Rimuove domini dannosi e pop-up di file sospetti",
            option: {
                domain: {
                    label: "nome di dominio",
                    description: "Rimuove il popup \"dominio dannoso\"."
                },
                file: {
                    label: "File",
                    description: "Rimuove il popup di download \"potenzialmente pericoloso\"."
                },
                noDeleteSafety: {
                    label: "Nessuna sicurezza di eliminazione",
                    description: "Elimina la necessità di inserire il nome del server durante l'eliminazione di un server"
                },
                confirmModal: {
                    label: "Popup di conferma",
                    description: "\"Sei sicuro di voler confermare questa transazione?\" rimuove il pop-up"
                }
            },
            alert: {
                title: "Eliminare il server?",
                body: "Questo processo è permanente, diciamolo se non è ovvio!",
                confirm: "Sil",
                cancel: "Cancellare"
            }
        },
        anonymiseFileNames: {
            name: "Anonimizzare i nomi dei file",
            description: "Anonimizza i nomi dei file caricati.",
            option: {
                anonymiseByDefault: {
                    label: "Anonimizza per impostazione predefinita",
                    description: "Anonimizza i nomi dei file per impostazione predefinita. Se lo desideri, puoi disabilitarlo nel popup di caricamento file."
                },
                spoilerMessages: {
                    label: "Messaggi spoiler",
                    description: "Rende anonimi i nomi dei file contrassegnati come spoiler."
                },
                method: {
                    label: "Metodo",
                    description: "Metodo di anonimizzazione",
                    random: "Caratteri casuali",
                    consistent: "Coerente",
                    timestamp: "Timestamp"
                },
                randomisedLength: {
                    label: "Durata della randomizzazione",
                    description: "Lunghezza carattere casuale"
                },
                consistent: {
                    label: "Anonimizzazione coerente",
                    description: "Chiave segreta per l'anonimizzazione coerente"
                }
            },
            using: {
                anonymous: "Viene utilizzato il nome file anonimo",
                spoiler: "Viene utilizzato il nome file normale"
            },
            spoiler: {
                description: "Attiva o disattiva Spoiler per i tuoi file",
                toggle: "Attiva o disattiva Spoiler per i tuoi file (attivato per impostazione predefinita)",
                enabled: "Spoiler attivato!",
                disabled: "Spoiler disabilitati!"
            }
        },
        appleMusic: {
            name: "Ricca presenza di Apple Music",
            description: "Apple Music mostra lo stato di ascolto come Discord Rich Presence",
            about: "Per le stringhe di formato evento personalizzabili, puoi utilizzare alcune stringhe personalizzate per aggiungere dati di traccia agli eventi! {{name}} viene sostituito con il nome della traccia, {{artist}} con il nome/i dell'artista e {{album}} con il nome dell'album.",
            button: {
                listen: "Apple Music'te Dinle",
                songLink: "Visualizza su SongLink"
            },
            option: {
                activityType: {
                    label: "Tipo di attività",
                    description: "Che tipo di attività verrà mostrata",
                    listening: "ascolto",
                    playing: "giocando"
                },
                statusDisplayType: {
                    label: "Tipo di visualizzazione dello stato",
                    description: "Mostra il nome della traccia/artista nell'elenco dei membri",
                    off: "Non mostrare (mostra un messaggio di ascolto generale)",
                    artist: "Mostra il nome dell'artista",
                    track: "Mostra il nome della traccia"
                },
                refreshInterval: {
                    label: "Aggiorna intervallo",
                    description: "Intervallo di aggiornamento evento (secondi)"
                },
                enableTimestamps: {
                    label: "Abilita timestamp",
                    description: "Se abilitare i timestamp"
                },
                enableButtons: {
                    label: "Abilita pulsanti",
                    description: "Se abilitare i pulsanti"
                },
                nameString: {
                    label: "Stringa del nome",
                    description: "Stringa del formato del nome dell'evento"
                },
                detailsString: {
                    label: "Dettagli Stringa",
                    description: "Stringa di formato dei dettagli dell'evento"
                },
                stateString: {
                    label: "Stringa di stato",
                    description: "Stringa di formato dello stato dell'evento"
                },
                largeImageType: {
                    label: "Tipo di immagine grande",
                    description: "Tipo di immagine grande per le risorse dell'evento",
                    album: "copertina dell'album",
                    artist: "pittura dell'artista",
                    disabled: "disabilitato"
                },
                largeTextString: {
                    label: "Stringa di testo di grandi dimensioni",
                    description: "Entità evento stringa in formato testo di grandi dimensioni"
                },
                smallImageType: {
                    label: "Tipo di miniatura",
                    description: "Tipo di miniatura delle risorse evento",
                    album: "Logo Apple Music",
                    artist: "pittura dell'artista",
                    disabled: "disabilitato"
                },
                smallTextString: {
                    label: "Piccola stringa di testo",
                    description: "Entità evento: piccola stringa in formato testo"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence (arRPC)",
            description: "Plug-in client arRPC per abilitare RPC su Discord Web (sperimentale)",
            use: {
                title: "Come utilizzare arRPC",
                enable: "{{link}} per eseguire il server e quindi attivare il plugin.",
                link: "Segui le istruzioni nel repository GitHub"
            },
            toast: {
                connected: "Connesso ad arRPC",
                failed: "Impossibile connettersi ad arRPC, funziona?",
                retry: "Riprova"
            }
        },
        atSomeone: {
            name: "A Qualcuno",
            description: "Ti consente di taggare una persona a caso con @qualcuno"
        },
        autoDNDWhilePlaying: {
            name: "Dnd automatico durante la riproduzione",
            description: "Aggiorna automaticamente lo stato online (online, inattivo, non disturbare) all'avvio del gioco",
            option: {
                statusToSet: {
                    label: "Stato da impostare",
                    description: "Stato da impostare all'avvio di un gioco",
                    online: "in linea",
                    dnd: "Non disturbare",
                    idle: "oziare",
                    invisible: "Invisibile"
                },
                excludeInvisible: {
                    label: "Escludi invisibile",
                    description: "Impedisci modifiche automatiche dello stato quando il tuo stato è impostato su invisibile"
                }
            }
        },
        autoZipper: {
            name: "AutoZip",
            description: "Comprime automaticamente i tipi di file e le cartelle specificati prima di caricarli su Discord",
            option: {
                extensions: {
                    label: "Estensioni",
                    description: "Elenco separato da virgole delle estensioni di file da comprimere automaticamente (ad esempio .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "Banner ovunque",
            description: "Visualizza i banner nell'elenco dei membri",
            option: {
                animate: {
                    label: "Animazione",
                    description: "Rendi animato il banner"
                },
                preferNameplate: {
                    label: "Scegli Targhetta",
                    description: "Scegli la targhetta invece del banner"
                }
            }
        },
        betterActivities: {
            name: "Attività migliori",
            description: "Mostra le icone delle attività nell'elenco dei membri e consente di mostrare tutti gli eventi",
            option: {
                memberList: {
                    label: "Elenco dei membri",
                    description: "Mostra le icone delle attività nell'elenco dei membri"
                },
                iconSize: {
                    label: "Dimensioni dell'icona",
                    description: "Dimensioni delle icone degli eventi"
                },
                specialFirst: {
                    label: "Speciali prima",
                    description: "Mostra prima gli eventi speciali (attualmente Spotify e Twitch)"
                },
                renderGifs: {
                    label: "GIF'leri Renderla",
                    description: "Consenti il ​​rendering delle GIF"
                },
                removeGameActivityStatus: {
                    label: "Rimuovi lo stato del gioco",
                    description: "Rimuovi l'icona e lo stato del gioco"
                },
                userPopout: {
                    label: "Popup utente",
                    description: "Mostra tutte le attività nel popup/barra laterale del profilo"
                },
                hideTooltip: {
                    label: "Nascondi descrizione comando",
                    description: "Nasconde le attività in vari luoghi"
                },
                allActivitiesStyle: {
                    label: "Stile di tutti gli eventi",
                    description: "Mostra tutti gli stili degli eventi",
                    list: "Lista",
                    carousel: "cursore",
                    left: "Sol",
                    right: "Giusto"
                }
            }
        },
        betterAudioPlayer: {
            name: "Lettore audio migliore",
            description: "Aggiunge il visualizzatore di spettrografo e oscilloscopio ai lettori di allegati audio",
            option: {
                oscilloscope: {
                    label: "Oscilloscopio",
                    description: "Abilita il visualizzatore dell'ambito"
                },
                spectrograph: {
                    label: "Spettrografo",
                    description: "Abilita il visualizzatore dello spettrografo"
                },
                oscilloscopeSolidColor: {
                    label: "Oscilloscopio tinta unita",
                    description: "Utilizza il colore a tinta unita anziché il gradiente per l'ambito"
                },
                oscilloscopeColor: {
                    label: "Oscilloscopio Rengi",
                    description: "Colore dell'oscilloscopio quando è abilitata la tinta unita"
                },
                spectrographSolidColor: {
                    label: "Spettrografo a tinta unita",
                    description: "Usa il colore solido anziché il gradiente per lo spettrografo"
                },
                spectrographColor: {
                    label: "Colore dello spettrografo",
                    description: "Colore dello spettrografo quando è abilitata la tinta unita"
                },
                forceMoveBelow: {
                    label: "Forza lo spostamento in basso",
                    description: "Forza lo spostamento del visualizzatore sotto i controlli del volume"
                }
            },
            toast: {
                invalidColorFormat: "Formato colore non valido per {{settingKey}}, assicurati che sia nel formato \"R, G, B\" o \"#RRGGBB\""
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Crea motivi personalizzati da utilizzare nella finestra di ban di Discord e/o mostra un input di testo invece delle opzioni per impostazione predefinita.",
            option: {
                reasons: {
                    label: "ragioni",
                    description: "i tuoi motivi speciali"
                },
                isTextInputDefault: {
                    label: "Immissione di testo predefinita",
                    description: "Per impostazione predefinita mostra un input di testo invece di un menu di selezione. (Equivale a fare clic su Altro)"
                }
            },
            title: "ragioni",
            placeholder: "Da dove",
            add: "Aggiungi un altro motivo"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Ti consente di cercare nell'elenco degli utenti bloccati e rendere i nomi selezionabili nelle impostazioni.",
            placeholder: "Cerca utenti..."
        },
        betterCommands: {
            name: "Comandi migliori",
            description: "Migliora il sistema di comando con vari miglioramenti.",
            option: {
                autoFillArguments: {
                    label: "Argomenti di compilazione automatica",
                    description: "Compila automaticamente il comando con tutti gli argomenti, non solo con gli argomenti richiesti"
                },
                allowNewlinesInCommands: {
                    label: "Consenti nuove righe nei comandi",
                    description: "Consenti ritorno a capo nelle voci di comando (CTRL + Maiusc + Invio)"
                }
            },
            command: {
                refresh: {
                    description: "Discord aggiorna i comandi dell'app in modo nativo",
                    user: "utente specifico per tentare il rinnovo",
                    refreshing: "I comandi dell'applicazione sono in fase di rinnovamento...",
                    refreshed: "Comandi aggiornati con successo!",
                    failed: "I comandi di aggiornamento non sono riusciti. Controlla la console per i dettagli."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Mostra le cartelle del server in una barra laterale personalizzata e aggiunge miglioramenti relativi alle cartelle",
            option: {
                sidebar: {
                    label: "Barra laterale",
                    description: "Mostra i server nella cartella nella barra laterale personalizzata"
                },
                sidebarAnim: {
                    label: "Animazione della barra laterale",
                    description: "Utilizza l'animazione all'apertura della barra laterale della cartella"
                },
                closeAllFolders: {
                    label: "Chiudi tutte le cartelle",
                    description: "Chiudere tutte le cartelle quando viene selezionato un server non presente in una cartella"
                },
                closeAllHomeButton: {
                    label: "Chiudi tutto sul pulsante Home",
                    description: "Chiudi tutte le cartelle quando fai clic sul pulsante Home"
                },
                closeOthers: {
                    label: "Chiudi gli altri",
                    description: "Chiudi le altre cartelle quando viene aperta una cartella"
                },
                closeServerFolder: {
                    label: "Chiudi la cartella del server",
                    description: "Chiudi la cartella quando viene selezionato un server nella cartella"
                },
                forceOpen: {
                    label: "Forza apertura",
                    description: "Forza l'apertura di una cartella quando si passa al server di una cartella"
                },
                keepIcons: {
                    label: "Proteggi le icone",
                    description: "Continua a mostrare le icone del server nella cartella della barra del server principale quando la cartella è aperta nella barra laterale di BetterFolders"
                },
                showFolderIcon: {
                    label: "Mostra l'icona della cartella",
                    description: "Mostra l'icona della cartella sopra i server delle cartelle nella barra laterale di BetterFolders",
                    never: "Mai",
                    always: "Sempre",
                    moreThanOne: "Quando vengono espanse più cartelle"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Modifica il testo alternativo GIF semplicemente da \"GIF\" per includere tag/nome file GIF"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Fa sì che il selettore GIF apra la categoria preferita per impostazione predefinita",
            option: {
                keepOpen: {
                    label: "Mantieni il selettore aperto",
                    description: "Consente al selettore GIF di rimanere aperto dopo aver selezionato una GIF"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Visualizza la data di scadenza degli inviti, visualizza il profilo dell'invitante e visualizza l'anteprima dei server prima di partecipare (facendo clic sul nome)",
            render: {
                tip: "Questo invito scadrà dopo {{time}}",
                header: "{{name}} ti ha invitato su {{server}}",
                never: "Mai"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Nascondi le note o disabilita il controllo ortografico (Configura in Impostazioni!!)",
            option: {
                hide: {
                    label: "Nascondi note",
                    description: "Nascondi la casella delle note nei popup dell'utente"
                },
                noSpellCheck: {
                    label: "Disattiva il controllo ortografico",
                    description: "Disabilita il controllo ortografico nelle note"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReagisce",
            description: "Il numero di segni più prima di :emoji: indica il messaggio a cui verrà aggiunta l'emoji"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Aggiunge opzioni per copiare il colore del ruolo/modificare il ruolo/visualizzare l'icona del ruolo quando si fa clic con il pulsante destro del mouse sui ruoli nei profili utente",
            option: {
                roleIconFileFormat: {
                    label: "Formato file icona ruolo",
                    description: "Formato file da utilizzare durante la visualizzazione delle icone dei ruoli"
                }
            },
            context: {
                copyColor: "Copia colore ruolo",
                editRole: "Modifica ruolo",
                viewIcon: "Visualizza l'icona del ruolo"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "RoleDot (impostazione di accessibilità) copia il colore del ruolo quando si fa clic. Consente inoltre l'uso simultaneo di RoleDot e nomi di colori.",
            option: {
                bothStyles: {
                    label: "Qui İki Stil",
                    description: "Mostra sia i punti di ruolo che i nomi colorati"
                },
                copyRoleColorInProfilePopout: {
                    label: "Copia il colore del ruolo nel popup del profilo",
                    description: "Consenti la copia del colore del ruolo facendo clic sul punto del ruolo nel popup del profilo"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Migliora il menu Sessioni (dispositivi). Ti consente di vedere i timestamp esatti, assegnare a ciascuna sessione un nome univoco e ricevere notifiche sulle nuove sessioni.",
            new: "NUOVO",
            newSessions: "Nuova sessione:",
            rename: "Rinominare",
            newDevice: "Nuovo nome dispositivo",
            resetName: "Reimposta nome",
            save: "Salva",
            cancel: "Cancellare",
            option: {
                backgroundCheck: {
                    label: "Controllo dei precedenti",
                    description: "Controlla le nuove sessioni in background e mostra le notifiche quando vengono rilevate"
                },
                checkInterval: {
                    label: "Gamma di controllo",
                    description: "La frequenza con cui verificare la presenza di nuove sessioni in background (se abilitato), in minuti"
                }
            }
        },
        betterSettings: {
            name: "Impostazioni migliori",
            description: "Migliora l'esperienza di apertura del menu delle impostazioni",
            option: {
                disableFade: {
                    label: "Disattiva l'effetto di transizione",
                    description: "Disabilita l'animazione della dissolvenza incrociata"
                },
                organizeMenu: {
                    label: "Modifica Menù",
                    description: "Impostazioni divide il menu dell'icona a forma di ingranaggio in categorie"
                },
                eagerLoad: {
                    label: "Caricamento veloce",
                    description: "Rimuove il ritardo nel caricamento alla prima apertura del menu"
                }
            },
            alert: {
                title: "È necessario riavviare",
                restart: "Hai modificato le impostazioni che richiedono un riavvio.",
                confirm: "Ricomincia adesso",
                cancel: "Dopo!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Installa con un clic, apri il menu con il tasto destro"
        },
        biggerStreamPreview: {
            name: "Anteprima del flusso più grande",
            description: "Questo plugin ti consente di ingrandire le anteprime della trasmissione",
            context: {
                viewPreview: "Vedi Anteprima di rilascio"
            }
        },
        blockKeywords: {
            name: "Blocca parole chiave",
            description: "Blocca i messaggi contenenti determinate parole chiave definite dall'utente come se l'utente mittente fosse bloccato.",
            option: {
                blockedWords: {
                    label: "Parole bloccate",
                    description: "Elenco di parole da bloccare separate da virgole"
                },
                useRegex: {
                    label: "RegexKullan",
                    description: "Utilizza ciascun valore come espressione regolare durante il controllo del contenuto del messaggio (avanzato)"
                },
                caseSensitive: {
                    label: "Maiuscole e minuscole",
                    description: "Utilizzare la ricerca con distinzione tra maiuscole e minuscole?"
                },
                ignoreBlockedMessages: {
                    label: "Ignora i messaggi bloccati",
                    description: "Ignora completamente la nuova barra dei messaggi (messaggi recenti)"
                }
            }
        },
        blockKrisp: {
            name: "Block Krisp",
            description: "Impedisce l'installazione di Krisp"
        },
        blurNSFW: {
            name: "SfocaturaNSFW",
            description: "Sfoca gli allegati nei canali NSFW finché non ci si passa sopra",
            option: {
                blurAmount: {
                    label: "Quantità di sfocatura",
                    description: "Quantità di sfocatura (in pixel)"
                },
                blurAllChannels: {
                    label: "Sfoca tutti i canali",
                    description: "Sfoca gli allegati su tutti i canali (non solo NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "Ignora PinPrompt",
            description: "Salta la richiesta del pin quando si utilizzano le funzioni pin"
        },
        bypassStatus: {
            name: "Stato bypass",
            description: "Ricevi comunque notifiche da determinate fonti mentre sei in modalità Non disturbare. Puoi fare clic con il pulsante destro del mouse su utenti/canali/server per ignorare la modalità Non disturbare.",
            context: {
                remove: "Rimuovi Salta stato",
                add: "Aggiungi Salta stato"
            },
            option: {
                guilds: {
                    label: "Server",
                    description: "Server autorizzati a saltare (ricevere notifiche quando viene eseguito il ping in qualsiasi punto del server)",
                    placeholder: "Separare con virgola"
                },
                channels: {
                    label: "Canali",
                    description: "Canali in cui è consentito saltare (ricevi notifiche quando viene eseguito il ping su quel canale)",
                    placeholder: "Separare con virgola"
                },
                users: {
                    label: "Utenti",
                    description: "Utenti autorizzati a saltare (ricevere notifiche per tutti i messaggi inviati nei DM)",
                    placeholder: "Separare con virgola"
                },
                allowOutsideOfDms: {
                    label: "Consenti DM esterno",
                    description: "Consenti agli utenti selezionati di ignorare gli stati non DM (agisce come il salto del canale/server, ma si applica a tutti i messaggi inviati dagli utenti selezionati)"
                },
                notificationSound: {
                    label: "Suono di notifica",
                    description: "Determina se riprodurre il suono di notifica"
                },
                respectSilentPings: {
                    label: "Rispetta i ping silenziosi",
                    description: "Rispetta i ping silenziosi (@silenzia/elimina notifiche)"
                },
                statusToUse: {
                    label: "Caso d'uso",
                    description: "Stato da utilizzare per la whitelist",
                    online: "in linea",
                    idle: "oziare",
                    dnd: "Non disturbare",
                    invisible: "Invisibile"
                }
            }
        },
        cakeDay: {
            name: "Giorno della torta",
            description: "Tieni traccia e visualizza i compleanni degli utenti con le icone della torta",
            context: {
                label: "Compleanno",
                setBirthday: "Imposta compleanno",
                clearBirthday: "Elimina compleanno",
                current: "Attuale:"
            },
            option: {
                chat: {
                    label: "Chiacchierata",
                    description: "Mostra le icone a torta accanto ai nomi utente nella chat"
                },
                memberList: {
                    label: "Elenco dei membri",
                    description: "Mostra le icone della torta nell'elenco dei membri"
                },
                profileBadge: {
                    label: "Distintivo del profilo",
                    description: "Mostra il badge della torta sul profilo utente"
                },
                notificationSound: {
                    label: "Suono di notifica",
                    description: "Riproduci un suono quando viene inviata la notifica del compleanno"
                },
                userList: {
                    label: "Compleanni salvati",
                    description: "Gestisci i compleanni salvati"
                }
            },
            locations: {
                chat: {
                    label: "Chiacchierata",
                    description: "Accanto ai nomi utente nella chat"
                },
                memberList: {
                    label: "Elenco dei membri",
                    description: "Nell'elenco dei membri"
                }
            },
            toast: {
                success: "Compleanno fissato con successo!",
                invalid: "Formato compleanno non valido! È accettato solo GG/MM.",
                cleared: "Compleanno eliminato con successo!"
            },
            notification: {
                title: "🎂 Oggi è il compleanno!",
                body: "Oggi è il compleanno di {{username}}!"
            },
            modal: {
                title: "Imposta il compleanno per {{username}}",
                description: "Inserisci la tua data di nascita nel formato GG/MM (es. 25/12)",
                placeholder: "aquila 25/12",
                current: "Compleanno attuale:",
                set: "Imposta compleanno",
                cancel: "Cancellare",
                birthday: "Oggi è il mio compleanno! 🎂",
                saved: "Compleanni salvati",
                savedDesc: "Nessun compleanno ancora registrato. Fare clic con il tasto destro sull'utente per aggiungere i compleanni!",
                today: "Oggi",
                remove: "Rimuovere",
                loading: "Caricamento...",
                save: "Salva",
                edit: "Modificare"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Mostra i timer delle chiamate su tutte le chiamate vocali",
            option: {
                format: {
                    label: "Formato",
                    description: "Formato compatto o leggibile dall'uomo",
                    human: "30g 23s 00d 42s"
                },
                allCallTimers: {
                    label: "Tutti i timer delle chiamate",
                    description: "Mostra i timer delle chiamate per tutti gli utenti sui server"
                },
                showWithoutHover: {
                    label: "Mostra senza indugiare",
                    description: "Mostra sempre il timer senza bisogno di posizionare il mouse"
                },
                showRoleColor: {
                    label: "Mostra colore ruolo",
                    description: "Mostra il colore del ruolo dell'utente (se il plug-in ShowRoleColor è abilitato)"
                },
                trackSelf: {
                    label: "Segui te stesso",
                    description: "Mostra anche il tuo timer"
                },
                showSeconds: {
                    label: "Mostra secondi",
                    description: "Mostra anche i secondi nel timer"
                },
                watchLargeGuilds: {
                    label: "Guarda Grandi server",
                    description: "Tieni traccia degli utenti su server di grandi dimensioni. Se utilizzi server di grandi dimensioni con molti utenti vocali attivi, ciò può causare ritardi. Testato con un massimo di 2000 utenti vocali attivi e non si è verificato alcun problema."
                },
                fixUI: {
                    label: "Correzione dell'interfaccia utente",
                    description: "In alcuni casi il timer potrebbe danneggiare l'interfaccia utente. Puoi risolvere questo problema abilitando questa opzione."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadge",
            description: "Aggiunge badge ai canali in base al loro tipo",
            badge: {
                private: "Questo canale è bloccato.",
                nsfw: "Questo canale è contrassegnato come NSFW.",
                rules: "Questo canale è il canale delle regole del server."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Un badge per canale",
                    description: "Mostra un solo badge per canale"
                },
                showTextBadge: {
                    label: "Mostra badge di testo",
                    description: "Mostra badge di testo"
                },
                showVoiceBadge: {
                    label: "Mostra badge vocale",
                    description: "Mostra badge audio"
                },
                showCategoryBadge: {
                    label: "Mostra badge di categoria",
                    description: "Mostra badge di categoria"
                },
                showDirectoryBadge: {
                    label: "Mostra badge indice",
                    description: "Mostra badge indice"
                },
                showAnnouncementThreadBadge: {
                    label: "Mostra badge argomento annuncio",
                    description: "Mostra il badge dell'argomento dell'annuncio"
                },
                showPublicThreadBadge: {
                    label: "Mostra badge argomento generale",
                    description: "Mostra il badge dell'argomento pubblico"
                },
                showPrivateThreadBadge: {
                    label: "Mostra badge argomento speciale",
                    description: "Mostra badge argomento personalizzato"
                },
                showStageBadge: {
                    label: "Mostra il badge sul palco",
                    description: "Mostra il badge sul palco"
                },
                showAnnouncementBadge: {
                    label: "Mostra badge annuncio",
                    description: "Mostra il badge dell'annuncio"
                },
                showForumBadge: {
                    label: "Mostra badge del forum",
                    description: "Mostra il badge del forum"
                },
                showMediaBadge: {
                    label: "Mostra badge multimediale",
                    description: "Mostra il badge multimediale"
                },
                showNSFWBadge: {
                    label: "Mostra il tuo badge NSFW",
                    description: "Mostra il badge NSFW"
                },
                showLockedBadge: {
                    label: "Mostra badge bloccato",
                    description: "Mostra il tuo badge bloccato"
                },
                showRulesBadge: {
                    label: "Mostra il badge delle regole",
                    description: "Mostra il badge delle regole"
                },
                showUnknownBadge: {
                    label: "Mostra badge sconosciuto",
                    description: "Mostra badge sconosciuto"
                },
                textBadgeLabel: {
                    label: "Etichetta distintivo di testo",
                    description: "etichetta distintivo di testo",
                    default: "Testo"
                },
                voiceBadgeLabel: {
                    label: "Etichetta del badge sonoro",
                    description: "etichetta distintivo audio",
                    default: "Sez"
                },
                categoryBadgeLabel: {
                    label: "Etichetta distintivo di categoria",
                    description: "Etichetta distintivo di categoria",
                    default: "Categoria"
                },
                announcementBadgeLabel: {
                    label: "Etichetta del badge dell'annuncio",
                    description: "Etichetta distintivo dell'annuncio",
                    default: "Haber"
                },
                announcementThreadBadgeLabel: {
                    label: "Etichetta badge argomento annuncio",
                    description: "Etichetta badge argomento annuncio",
                    default: "Argomento di notizie"
                },
                publicThreadBadgeLabel: {
                    label: "Etichetta badge per argomenti generali",
                    description: "Etichetta badge per argomento generale",
                    default: "Soggetto"
                },
                privateThreadBadgeLabel: {
                    label: "Etichetta distintivo per argomento speciale",
                    description: "Etichetta badge argomento personalizzata",
                    default: "Argomento speciale"
                },
                stageBadgeLabel: {
                    label: "Etichetta distintivo del palco",
                    description: "Etichetta distintivo del palco",
                    default: "Scena"
                },
                directoryBadgeLabel: {
                    label: "Etichetta del badge indice",
                    description: "Etichetta del badge indice",
                    default: "indice"
                },
                forumBadgeLabel: {
                    label: "Etichetta distintivo del forum",
                    description: "Etichetta distintivo del forum",
                    default: "Foro"
                },
                mediaBadgeLabel: {
                    label: "Etichetta badge multimediale",
                    description: "Etichetta distintivo multimediale",
                    default: "Media"
                },
                nsfwBadgeLabel: {
                    label: "Etichetta distintivo NSFW",
                    description: "Etichetta distintivo NSFW",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Etichetta badge di blocco",
                    description: "etichetta del badge di blocco",
                    default: "Bloccato"
                },
                rulesBadgeLabel: {
                    label: "Etichetta del badge delle regole",
                    description: "Etichetta distintivo delle regole",
                    default: "Regole"
                },
                unknownBadgeLabel: {
                    label: "Etichetta badge sconosciuta",
                    description: "Etichetta distintivo sconosciuta",
                    default: "Sconosciuto"
                },
                textBadgeColor: {
                    label: "Colore distintivo del testo",
                    description: "Colore del badge del testo"
                },
                voiceBadgeColor: {
                    label: "Colore del badge audio",
                    description: "Colore del distintivo sonoro"
                },
                categoryBadgeColor: {
                    label: "Colore distintivo di categoria",
                    description: "Colore distintivo della categoria"
                },
                announcementBadgeColor: {
                    label: "Colore del badge dell'annuncio",
                    description: "Colore del badge dell'annuncio"
                },
                announcementThreadBadgeColor: {
                    label: "Colore badge oggetto annuncio",
                    description: "Colore del badge dell'argomento dell'annuncio"
                },
                publicThreadBadgeColor: {
                    label: "Colore distintivo filo generale",
                    description: "Colore del badge dell'argomento generale"
                },
                privateThreadBadgeColor: {
                    label: "Colore badge argomento speciale",
                    description: "Colore badge argomento personalizzato"
                },
                stageBadgeColor: {
                    label: "Colore distintivo del palco",
                    description: "Colore distintivo del palco"
                },
                directoryBadgeColor: {
                    label: "Colore distintivo indice",
                    description: "Colore distintivo indice"
                },
                forumBadgeColor: {
                    label: "Colore distintivo del forum",
                    description: "Colore distintivo del forum"
                },
                mediaBadgeColor: {
                    label: "Colore badge multimediale",
                    description: "Colore del badge multimediale"
                },
                nsfwBadgeColor: {
                    label: "Colore distintivo NSFW",
                    description: "Colore distintivo NSFW"
                },
                lockedBadgeColor: {
                    label: "Colore badge bloccato",
                    description: "Colore del badge bloccato"
                },
                rulesBadgeColor: {
                    label: "Colore distintivo delle regole",
                    description: "Colore distintivo delle regole"
                },
                unknownBadgeColor: {
                    label: "Colore distintivo sconosciuto",
                    description: "Colore distintivo sconosciuto"
                }
            },
            badges: {
                text: "Testo",
                voice: "Sez",
                category: "Categoria",
                announcement: "Haber",
                announcementThread: "Argomento di notizie",
                publicThread: "Soggetto",
                privateThread: "Argomento speciale",
                stage: "Scena",
                directory: "indice",
                forum: "Foro",
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
            name: "Schede canale",
            description: "Raggruppa i canali visitati di frequente in schede come in un browser",
            open: "Apri in una nuova scheda",
            animation: {
                title: "Controlli di animazione",
                description: "Abilita o disabilita animazioni specifiche per le schede dei canali. Ciascuna opzione può essere attivata o disattivata in modo indipendente.",
                placeholder: "Scegli quali animazioni abilitare...",
                tabHover: "Effetti al passaggio del mouse sulla scheda (rimuovi + ridimensiona)",
                tabSelection: "Animazione di sollevamento delle schede selezionata",
                tabDragDrop: "Trascina e rilascia schede (fantasma + riordino)",
                tabEnterExit: "Scorrimenti Tab In/Out (crea + chiudi)",
                tabIconPop: "Icon Pop (crescita elettorale)",
                closeRotation: "Chiudi pulsante Ritorna",
                plusPulse: "Inoltre effetto impulso pulsante",
                mentionGlow: "Menzione Badge Sparkle",
                compactExpand: "Espansione in modalità compatta",
                selectedBorder: "Bordo blu della scheda selezionata",
                selectedBackground: "Colore di sfondo della scheda selezionata",
                tabShadows: "Scheda Effetti ombra",
                tabRepositioning: "Riposizionamento delle schede (transizione graduale)",
                resizeHandle: "Dissolvenza maniglia ridimensionamento",
                questActivate: "Gradiente di servizio attivo"
            },
            bookmark: {
                label: "Yer İmi",
                unknown: "Utente sconosciuto",
                folder: "Cartella",
                add: "Aggiungi ai segnalibri",
                edit: "Modifica segnalibro",
                delete: "Yer İmini Sil",
                remove: "Rimuovi dai segnalibri",
                removeFolder: "Rimuovi segnalibro dalla cartella",
                loading: "Caricamento segnalibri...",
                noBookmarks: "Non hai segnalibri. Puoi aggiungere una scheda aperta o nasconderla facendo clic con il pulsante destro del mouse.",
                quests: "Missioni",
                messageRequests: "Richieste di messaggi",
                friends: "Amici",
                shop: "Negozio",
                library: "Biblioteca",
                discovery: "Scoperta",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Attività",
                specialPage: "Pagina speciale"
            },
            button: {
                save: "Salva",
                delete: "Sil",
                cancel: "Cancellare"
            },
            context: {
                label: "Menu contestuale delle schede canale",
                bookmark: "Menu contestuale dei segnalibri di ChannelTabs",
                tab: "Menu contestuale della scheda ChannelTabs",
                compact: "Compatto",
                bookmarkBar: "Barra dei segnalibri",
                openAll: "Apri tutto nei segnalibri",
                openNew: "Apri in una nuova scheda",
                close: {
                    tab: "Chiudi scheda",
                    otherTabs: "Chiudi altre schede",
                    tabsToRight: "Chiudi le schede a destra",
                    tabsToLeft: "Chiudi le schede a sinistra",
                    reopen: "Riapri la scheda chiusa",
                    allTabs: "Chiudi tutte le schede"
                }
            },
            error: {
                noLogin: "Non hai un account registrato?"
            },
            modal: {
                add: {
                    title: "Aggiungi segnalibro alla cartella",
                    select: "Scegli una cartella",
                    create: "Crea nuovo"
                },
                edit: {
                    title: "Modifica segnalibro",
                    name: "Nome del segnalibro",
                    folder: "Colore della cartella"
                },
                delete: {
                    title: "Sei sicuro?",
                    description: "L'eliminazione di una cartella di segnalibri elimina anche tutti i segnalibri in essa contenuti."
                }
            },
            option: {
                onStartup: {
                    label: "Inizialmente",
                    description: "Scegli cosa fare con le schede all'avvio",
                    nothing: "Non fare nulla (apri la scheda Amici)",
                    remember: "Ricorda le schede dell'ultima sessione",
                    open: "Apri schede specifiche"
                },
                tabSet: {
                    label: "Insieme di schede"
                },
                noPomeloNames: {
                    label: "Nessun nome di pomelo",
                    description: "Utilizza nomi visualizzati anziché nomi utente per i messaggi diretti"
                },
                showStatusIndicators: {
                    label: "Mostra indicatori di stato",
                    description: "Mostra gli indicatori di stato per i DM"
                },
                showBookmarkBar: {
                    label: "Mostra la barra dei segnalibri"
                },
                bookmarkNotificationDot: {
                    label: "Punto di notifica dei segnalibri",
                    description: "Mostra punto di notifica per i segnalibri"
                },
                widerTabsAndBookmarks: {
                    label: "Schede grandi e segnalibri",
                    description: "Espandi schede e segnalibri su monitor più grandi"
                },
                tabWidthScale: {
                    label: "Scala larghezza scheda",
                    description: "Scala della larghezza della scheda (percentuale): regolabile trascinando i bordi della scheda"
                },
                renderAllTabs: {
                    label: "Mantieni tutte le schede in memoria",
                    description: "Mantieni tutte le schede in memoria per passare più rapidamente da una scheda all'altra (lo scorrimento e lo stato vengono memorizzati nella cache)"
                },
                switchToExistingTab: {
                    label: "Passa alla scheda esistente",
                    description: "Se è già presente una scheda per il canale che stai navigando, passa ad essa"
                },
                createNewTabIfNotExists: {
                    label: "Se non è presente alcuna scheda, creala",
                    description: "Se non è presente alcuna scheda per un canale, crea una nuova scheda"
                },
                enableRapidNavigation: {
                    label: "Abilita la navigazione rapida",
                    description: "Quando le modifiche al canale vengono apportate rapidamente, cambia la scheda corrente anziché la nuova scheda."
                },
                rapidNavigationThreshold: {
                    label: "Soglia di navigazione veloce",
                    description: "Intervallo di tempo in millisecondi. Se durante questo periodo viene aperto un nuovo canale, la scheda esistente verrà modificata."
                },
                tabBarPosition: {
                    label: "Posizione della barra delle schede",
                    description: "Posizione della barra delle schede",
                    top: "Superiore",
                    bottom: "Alt"
                },
                enableNumberKeySwitching: {
                    label: "Cambiare scheda con i tasti numerici",
                    description: "Abilita il cambio di scheda con i tasti 1–9"
                },
                numberKeySwitchCount: {
                    label: "Numero della scheda del tasto numerico",
                    description: "Numero di schede accessibili tramite i tasti numerici (1–9)"
                },
                enableCloseTabShortcut: {
                    label: "Scheda Chiudi collegamento",
                    description: "Abilita la scorciatoia da tastiera per chiudere la scheda"
                },
                enableNewTabShortcut: {
                    label: "Nuova scheda di collegamento",
                    description: "Abilita il collegamento all'apertura di una nuova scheda"
                },
                enableTabCycleShortcut: {
                    label: "Scorciatoia del ciclo di schede",
                    description: "Abilita la scorciatoia per passare da una scheda all'altra"
                },
                keybindsSection: {
                    label: "Scorciatoie da tastiera",
                    description: "Fare clic su un pulsante e premere la combinazione di tasti desiderata. Sono supportati modificatori come CTRL, SHIFT e ALT.",
                    title: "Scorciatoie da tastiera",
                    reset: "Ripristina tutto su predefinito",
                    closeTab: {
                        label: "Chiudi scheda",
                        description: "Scorciatoia da tastiera per chiudere la scheda corrente"
                    },
                    newTab: {
                        label: "Nuova scheda",
                        description: "Scorciatoia da tastiera per aprire una nuova scheda con il canale corrente"
                    },
                    cycleTabsForward: {
                        label: "Ciclo di tabulazioni in avanti",
                        description: "Scorciatoia per passare alla scheda successiva (va alla prima scheda)"
                    },
                    cycleTabsBackward: {
                        label: "Ciclo di rimbalzo posteriore",
                        description: "Scorciatoia per andare alla scheda precedente (va all'ultima scheda)"
                    }
                },
                closeTabKeybind: {
                    label: "Scheda Chiudi collegamento",
                    description: "Scorciatoia per chiudere la scheda corrente"
                },
                newTabKeybind: {
                    label: "Nuova scheda di collegamento",
                    description: "Nuova scheda aperta scorciatoia"
                },
                cycleTabForwardKeybind: {
                    label: "Ciclo di tabulazioni in avanti",
                    description: "Scorciatoia per passare alla scheda successiva"
                },
                cycleTabBackwardKeybind: {
                    label: "Ciclo di rimbalzo posteriore",
                    description: "Scorciatoia per andare alla scheda precedente"
                },
                showTabNumbers: {
                    label: "Mostra i numeri delle schede",
                    description: "Mostra i badge numerici sulle schede per rivelare le scorciatoie"
                },
                tabNumberPosition: {
                    label: "Posizione del numero di scheda",
                    description: "Posizione dei badge numerici sulle linguette",
                    left: "Sinistra (pre-icona)",
                    right: "Giusto (pubblica contenuto)"
                },
                animations: {
                    label: "Animazioni"
                },
                animationHover: {
                    label: "Animazione al passaggio del mouse",
                    description: "Abilita gli effetti di sollevamento e ingrandimento durante il passaggio del mouse"
                },
                animationSelection: {
                    label: "Animazione di selezione",
                    description: "Abilita le animazioni luce/fotogramma al momento della selezione"
                },
                animationDragDrop: {
                    label: "Animazione trascina e rilascia",
                    description: "Abilita l'effetto fantasma durante il trascinamento"
                },
                animationEnterExit: {
                    label: "Animazione di entrata/uscita",
                    description: "Scorri le animazioni durante la creazione/chiusura delle schede"
                },
                animationIconPop: {
                    label: "Icona Animazione Pop",
                    description: "Abilita l'animazione della crescita delle icone durante la selezione"
                },
                animationCloseRotation: {
                    label: "Ritorno del pulsante Kill",
                    description: "Aggiungi l'animazione di rotazione all'icona di spegnimento"
                },
                animationPlusPulse: {
                    label: "Pulsante Plus Impulso",
                    description: "Abilita l'animazione degli impulsi per il pulsante della nuova scheda"
                },
                animationMentionGlow: {
                    label: "Menziona Scintilla",
                    description: "Abilita l'animazione del bagliore rosso sul badge di menzione"
                },
                animationCompactExpand: {
                    label: "Animazione di espansione compatta",
                    description: "Abilita l'espansione fluida delle schede compatte"
                },
                animationSelectedBorder: {
                    label: "Animazione del bordo della scheda selezionata",
                    description: "Abilita le animazioni in stile bordo e bagliore per la scheda selezionata"
                },
                animationSelectedBackground: {
                    label: "Animazione di sfondo della scheda selezionata",
                    description: "Abilita la modifica animata del colore di sfondo della scheda selezionata"
                },
                animationTabShadows: {
                    label: "Scheda Animazione ombra",
                    description: "Abilita gli effetti ombra sulle schede"
                },
                animationTabPositioning: {
                    label: "Animazione del posizionamento delle schede",
                    description: "Animazioni di transizione fluide quando si passa da una scheda all'altra"
                },
                animationResizeHandle: {
                    label: "Ridimensionamento dell'animazione",
                    description: "Abilita l'animazione di dissolvenza della maniglia di ridimensionamento"
                },
                animationQuestsActive: {
                    label: "Animazione in servizio attivo",
                    description: "Abilita le animazioni sfumate nella scheda quando le attività sono attive"
                },
                compactAutoExpandSelected: {
                    label: "Espandi automaticamente quando selezionato",
                    description: "Espansione automatica delle schede compatte quando selezionate"
                },
                compactAutoExpandOnHover: {
                    label: "Espansione automatica al passaggio del mouse",
                    description: "Espansione automatica delle schede compatte al passaggio del mouse"
                },
                openInNewTabAutoSwitch: {
                    label: "Commutazione automatica all'apertura in una nuova scheda",
                    description: "Passa automaticamente a una nuova scheda quando si apre"
                },
                bookmarksIndependentFromTabs: {
                    label: "Segnalibri indipendenti",
                    description: "I segnalibri navigano in modo indipendente senza influenzare la barra delle schede"
                },
                showResizeHandle: {
                    label: "Mostra maniglia di dimensionamento",
                    description: "Mostra maniglia per regolare la larghezza delle schede"
                },
                openNewTabsInCompactMode: {
                    label: "Apri nuove schede in modo compatto",
                    description: "Le schede appena aperte si aprono in modalità compatta per impostazione predefinita"
                },
                newTabButtonBehavior: {
                    label: "Comportamento del pulsante Nuova scheda",
                    description: "Il nuovo pulsante della scheda (+) segue le schede anziché essere fisso a destra"
                },
                oneTabPerServer: {
                    label: "Scheda singola per server",
                    description: "Lascia che ci sia un solo hop per un server; Utilizza la stessa scheda quando viene aperto un nuovo canale"
                },
                maxOpenTabs: {
                    label: "Numero massimo di schede aperte",
                    description: "Numero massimo di schede che possono essere aperte contemporaneamente (0 = illimitato)"
                }
            },
            tabs: {
                startup: "Schede Home",
                currently: "Imposta le schede attualmente aperte"
            },
            toast: {
                notRestoring: "Le schede non vengono ripristinate perché KeepCurrentChannel è abilitato",
                failed: {
                    restore: "Impossibile ripristinare le schede",
                    saved: "Impossibile caricare le schede salvate"
                }
            }
        },
        characterCounter: {
            name: "Contatorecaratteri",
            description: "Mostra un contatore di caratteri nella finestra del messaggio",
            option: {
                colorEffects: {
                    label: "Effetti di colore",
                    description: "Attiva o disattiva gli effetti colore quando ti avvicini al limite di caratteri"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Nasconde semplicemente tutti i canali nelle categorie compresse, anche se sono presenti messaggi non letti."
        },
        cleanChannelName: {
            name: "NomeCanalePulito",
            description: "Rimuovi tutte le emoji e gli abbellimenti stupidi dai nomi dei canali"
        },
        clearURLs: {
            name: "CancellaURL",
            description: "Rimuove automaticamente gli elementi di tracciamento dagli URL inviati"
        },
        clickableRoles: {
            name: "Ruoli cliccabili",
            description: "Puoi vedere quali ruoli hanno i membri facendo clic sui ruoli nei profili utente e nell'elenco dei membri.",
            modal: {
                loading: "I membri stanno caricando...",
                noMembers: "Nessun membro trovato.",
                unknown: "Ruolo sconosciuto"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Ti consente di nascondere localmente quasi tutti i contenuti a qualsiasi utente",
            replying: "Risposta al messaggio bloccato",
            option: {
                hideVc: {
                    label: "Nascondi dai canali vocali",
                    description: "Nascondi i canali vocali contenenti utenti bloccati"
                },
                usersToBlock: {
                    label: "Utenti da bloccare",
                    description: "ID utente separati da virgole e spazi"
                },
                hideBlockedUsers: {
                    label: "Nascondi utenti bloccati",
                    description: "Nascondi completamente gli utenti bloccati ovunque"
                },
                hideBlockedMessages: {
                    label: "Nascondi i messaggi bloccati",
                    description: "Nascondi completamente i messaggi dagli utenti bloccati (come il vecchio plugin noblockedmessages)"
                },
                hideEmptyRoles: {
                    label: "Nascondi ruoli vacanti",
                    description: "Nascondi i titoli dei ruoli se tutti i membri sono bloccati"
                },
                blockedReplyDisplay: {
                    label: "Visualizzazione risposta bloccata",
                    description: "Ciò che appare al posto di un messaggio quando rispondi a qualcuno che hai nascosto",
                    displayText: "Mostra il testo che indica la risposta a un messaggio nascosto",
                    hideReply: "non mostrare nulla"
                },
                guildBlackList: {
                    label: "Lista nera dei server",
                    description: "ID del server in cui la funzionalità verrà disabilitata"
                },
                guildWhiteList: {
                    label: "Lista bianca del server",
                    description: "ID del server in cui verrà abilitata la funzionalità"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Remake del vecchio esperimento sul tema client. Aggiungi un colore al tema del tuo client Discord",
            title: "Colore del tema",
            add: "Aggiungi un colore al tema del tuo client Discord",
            option: {
                color: {
                    label: "Colore"
                },
                resetColor: {
                    label: "Reimposta colore"
                }
            },
            error: {
                modal: {
                    title: "Il tuo tema non avrà un bell'aspetto!",
                    contrast: "Il colore scelto non contrasterà bene con il testo",
                    nitro: "Temi Nitro non supportati",
                    switch: "Passa alla modalità {{oppositeTheme}}",
                    disable: "Disabilita il tema Nitro",
                    reset: "Ripristina il colore del tema"
                }
            }
        },
        clipsEnhancements: {
            name: "Miglioramenti delle clip",
            description: "Aggiungi più FPS clip e opzioni di durata, oltre al tagging RPC!",
            minutes: "Un minuto",
            option: {
                richPresenceTagging: {
                    label: "Tagging ricco di presenza",
                    description: "Quando è opportuno taggare le clip con la Rich Presence esistente?",
                    always: "Sempre",
                    only: "Solo quando l'inizio o la fine del nome dell'evento corrispondono",
                    never: "Mai"
                },
                enableScreenshotKeybind: {
                    label: "Abilita il tasto di scelta rapida screenshot",
                    description: "Abilita la funzione di scelta rapida degli screenshot"
                },
                enableVoiceOnlyClips: {
                    label: "Abilita solo clip audio",
                    description: "Abilita clip solo audio (audio senza video)"
                },
                enableAdvancedSignals: {
                    label: "Abilita segnali avanzati",
                    description: "Abilita segnali di clip avanzati (attivatori automatici di clip)"
                },
                ignorePlatformRestriction: {
                    label: "Ignora le restrizioni della piattaforma",
                    description: "Consenti ritaglio specifico della piattaforma (potrebbe causare errori di salvataggio)"
                },
                clipsLink: {
                    label: "Collegamento di clip",
                    link: "Modifica le opzioni FPS e durata nelle impostazioni Clip!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Rimuove le icone amichevoli daltoniche dalle situazioni, proprio come Discord 2015-2017"
        },
        commandPalette: {
            name: "Tavolozza dei comandi",
            description: "Ti consente di navigare nell'interfaccia utilizzando la tastiera.",
            action: {
                command: {
                    label: "Esegui comando",
                    description: "Esegue un altro comando della tavolozza con ID. Se non sei sicuro dell'identificatore, utilizza il selettore."
                },
                settings: {
                    label: "Apri la pagina Impostazioni",
                    description: "Va direttamente alla pagina delle impostazioni di Discord. Seleziona una pagina dal selettore."
                },
                url: {
                    label: "Apri l'URL",
                    description: "Apre un collegamento. Per una migliore compatibilità, utilizzare i collegamenti https://."
                },
                macro: {
                    label: "Esegui Macro",
                    description: "Esegue una serie di comandi in sequenza. Aggiungi passaggi tramite il selettore."
                }
            },
            category: {
                auto: "Automatico (utilizza il layout predefinito)",
                default: {
                    label: "Transazioni veloci",
                    description: "Scorciatoie comuni di Plexcord"
                },
                plugins: {
                    label: "Plugin",
                    description: "Abilita, disabilita e configura i plugin Plexcord",
                    enable: {
                        label: "Abilita plugin"
                    },
                    disable: {
                        label: "Disabilita plugin"
                    },
                    settings: {
                        label: "Impostazioni del plugin"
                    },
                    toolbox: {
                        label: "Azioni del plugin"
                    },
                    chatbar: {
                        label: "Pulsanti della barra di chat"
                    },
                    changes: {
                        label: "Modifiche al plugin"
                    }
                },
                context: {
                    label: "Contesto attuale",
                    description: "Azioni per il canale e il server selezionati"
                },
                updates: {
                    label: "Aggiornamenti",
                    description: "Rimani aggiornato con Plexcord"
                },
                discordSettings: {
                    label: "Impostazioni della discordia",
                    description: "Vai alle pagine di configurazione di Discord"
                },
                custom: {
                    label: "Comandi speciali",
                    description: "Voci della tavolozza dei comandi definite dall'utente"
                },
                sessions: {
                    label: "Strumenti di sessione",
                    description: "Strumenti per gestire la tua sessione Discord"
                },
                guilds: {
                    label: "Server",
                    description: "Naviga rapidamente verso i tuoi server"
                },
                friends: {
                    label: "Amici",
                    description: "Vai velocemente dai tuoi amici"
                },
                action: {
                    label: "Azione",
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Apri le Impostazioni Plexcord",
                        plugin: "Apri le Impostazioni del plugin"
                    }
                },
                reload: {
                    label: "Reinstallare Discord",
                    description: "Ricarica la finestra Discord corrente"
                }
            },
            command: {
                enable: "Abilita {{pluginName}}",
                enabled: "{{pluginName}} abilitato",
                disable: "Disabilita {{pluginName}}",
                disabled: "{{pluginName}} disabilitato",
                failed: "Il comando non è riuscito:",
                toggleFailed: "Impossibile modificare {{pluginName}}.",
                pluginSettings: "Impostazioni di {{pluginName}}",
                untitled: "Comando anonimo",
                new: "Nuovo Comando",
                error: {
                    enter: "Inserisci un ID comando o selezionalo di seguito.",
                    noCommand: "Non esiste alcun comando che corrisponda a questo ID."
                },
                discord: {
                    account: "Apri il mio account",
                    privacy: "Dati e Privacy Aperti",
                    notifications: "Attiva le notifiche",
                    voice: "Attiva audio e video",
                    text: "Apri Testo e immagini",
                    appearance: "Apri vista",
                    accessibility: "Apri accessibilità",
                    keybinds: "Attiva Associazioni tasti",
                    advanced: "Apri Impostazioni avanzate",
                },
                updates: {
                    check: {
                        label: "Controlla gli aggiornamenti",
                        description: "Controlla gli aggiornamenti di Plexcord",
                        one: "È disponibile un aggiornamento",
                        multiple: "{{count}} aggiornamenti disponibili",
                        none: "nessun aggiornamento",
                        failed: "Impossibile controllare gli aggiornamenti."
                    },
                    changelog: {
                        label: "Visualizza il registro delle modifiche",
                        description: "Plexcord apre il registro delle modifiche"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} Segna come letto"
                    }
                },
                pin: {
                    open: {
                        label: "Attiva i Pin {{channelLabel}}"
                    },
                    toggle: {
                        label: "Attiva/disattiva Blocca sull'ultimo comando"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} Sustur",
                        oneHour: "Disattiva il canale {{channelLabel}} per 1 ora",
                        untilTomorrow: "Disattiva il canale {{channelLabel}} fino a domani",
                    },
                    unmute: {
                        label: "Riattiva {{channelLabel}}",
                    },
                    reopen: {
                        label: "Riapri l'ultimo DM chiuso"
                    },
                    dm: {
                        open: {
                            label: "Apri DM con {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Apri le Impostazioni di {{guildLabel}}"
                    },
                    navigate: {
                        label: "Vai al server {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30 minuti Non disturbare",
                    oneHourDnd: "1 ora Non disturbare",
                    cancelStatusReset: "Annulla timer di stato"
                },
                status: {
                    set: {
                        online: "Imposta stato: in linea",
                        idle: "Imposta stato: inattivo",
                        dnd: "Imposta lo stato: Non disturbare",
                        invisible: "Imposta stato: invisibile"
                    }
                },
                toggle: {
                    streamer: "Attiva/disattiva la modalità streamer",
                    mute: "Attiva/disattiva l'audio automatico",
                    deafen: "Attiva/disattiva Autoassordante",
                },
                notification: {
                    clear: {
                        label: "Cancella notifiche sul desktop"
                    }
                },
                palette: {
                    settings: {
                        label: "Apri le impostazioni della tavolozza dei comandi",
                        description: "Configura il plug-in della tavolozza dei comandi"
                    }
                },
                recent: {
                    label: "Mostra comandi recenti",
                    description: "Visualizza i comandi eseguiti di recente",
                    rerun: "Riesegui l'ultimo comando"
                },
                plugin: {
                    reload: {
                        label: "Reinstalla tutti i plugin",
                        description: "Tenta immediatamente di ricaricare ogni plugin attivo"
                    },
                    enable: {
                        label: "Abilita tutti i plugin"
                    },
                    disable: {
                        label: "Disabilita tutti i plugin non necessari"
                    },
                    restart: {
                        label: "Riavvia Plexcord",
                        description: "Ricarica la finestra del client Discord"
                    }
                },
                quickCSS: {
                    label: "Attiva/disattiva CSS rapido"
                },
                transparentity: {
                    label: "Attiva/disattiva la trasparenza della finestra"
                },
                theme: {
                    open: {
                        label: "Apri Impostazioni tema client"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Cerca il comando",
                noCommand: "Comando non trovato",
                add: {
                    title: "Aggiungi comando"
                },
                choose: {
                    title: "Seleziona Comando"
                },
                command: {
                    palette: {
                        label: "Tavolozza dei comandi",
                        placeholder: "Digita un comando",
                        filtering: "Filtraggio per {{tags}}",
                        noCommand: "Comando non trovato",
                        pin: "comando pin",
                        unpin: "Sblocca"
                    },
                    target: {
                        label: "ID comando di destinazione",
                        placeholder: "Immettere l'ID del comando",
                        choose: "Seleziona Comando"
                    },
                    custom: {
                        label: "Comandi speciali",
                        description: "1) Assegna un nome al comando · 2) Aggiungi descrizione/parola chiave/tag/categoria facoltativi · 3) Seleziona un'azione e inserisci i dettagli (gli ID per alias e macro devono corrispondere ai comandi della tavolozza esistenti).",
                        auto: "Automatico (predefinito)",
                        expand: "Espandere",
                        collapse: "Crollo",
                        collapsed: {
                            label: "Biglietto",
                            description: "Nome da visualizzare",
                            advanced: {
                                hide: "Nascondi opzioni avanzate",
                                show: "Mostra opzioni avanzate"
                            },
                            subtitle: {
                                label: "Spiegazione",
                                placeholder: "Sottotitolo facoltativo"
                            },
                            keywords: {
                                label: "Parole chiave",
                                placeholder: "Parole chiave separate da virgole"
                            },
                            tags: {
                                label: "Tag",
                                placeholder: "Tag separati da virgole"
                            },
                            suggestion: {
                                label: "Suggerimento"
                            },
                            chooseCommand: {
                                label: "Scegli dove appare questo comando nella tavolozza."
                            },
                            danger: {
                                label: "Mostra come pericoloso"
                            }
                        },
                        remove: "Rimuovi comando",
                        add: "Aggiungi comando"
                    }
                },
                settings: {
                    noSelected: "Pagina non selezionata",
                    current: "Pagina corrente",
                    choose: "Seleziona pagina..."
                },
                url: {
                    url: "URL",
                    error: "Utilizzare i collegamenti http:// o https://.",
                    valid: "Inserisci un URL valido.",
                    open: {
                        external: "aperto esternamente",
                    }
                },
                macro: {
                    sequence: {
                        label: "Copione",
                        placeholder: "comando-a, comando-b"
                    },
                    addStep: "Aggiungi passaggio",
                    unknownId: "ID comando sconosciuti"
                }
            },
            status: {
                online: "in linea",
                idle: "oziare",
                dnd: "Non disturbare",
                invisible: "Invisibile"
            },
            tag: {
                core: "Seme di girasole",
                navigation: "Passeggiare",
                utility: "Veicolo",
                developer: "Sviluppatore",
                customization: "personalizzazione",
                plugins: "Plugin",
                session: "Sessione",
                context: "Contesto",
                custom: "Speciale",
                guilds: "Server",
                friends: "Amici",
                other: "Altro"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Pulsante chat '{{label}}' non trovato.",
                        failedToTrigger: "Impossibile attivare {{label}}.",
                        activated: "{{label}} è attivato."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Controlli di disattivazione dell'audio del canale non disponibili",
                        muted: "Il canale è stato silenziato.",
                        unmuted: "Il canale è stato disattivato.",
                        failed: "Impossibile aggiornare lo stato di disattivazione del canale."
                    },
                    dm: {
                        no: "Non sono state registrate chiusure DM in questa sessione.",
                        reOpened: "L'ultimo DM chiuso è stato riaperto.",
                        noAvailable: "Il DM non è più disponibile."
                    }
                },
                command: {
                    loop: "Rilevato loop di comandi durante l'esecuzione della macro.",
                    notFound: "Il comando {{commandId}} non è stato trovato.",
                    unsupported: "Azione del comando personalizzato non supportata.",
                    failedToRun: "Impossibile eseguire {{label}}.",
                    notMetadata: "I metadati del plug-in Command Palette non sono disponibili."
                },
                guild: {
                    mute: {
                        unavailable: "Controlli di disattivazione dell'audio del server non disponibili",
                        muted: "Il server è stato silenziato.",
                        unmuted: "Il silenziamento del server è stato rimosso.",
                        failed: "Impossibile aggiornare lo stato di disattivazione del server."
                    },
                    settings: {
                        unable: "Impossibile aprire le impostazioni del server.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Il pannello di fissaggio non può essere aperto.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Il ripristino dello stato pianificato è stato annullato.",
                        unableToChange: "Lo stato non può essere modificato in questo momento.",
                        reverted: "Lo stato viene restituito come {{status}}.",
                        dnd: "Non disturbare per {{duration}} minuti."
                    },
                    change: {
                        unableToChange: "Lo stato non può essere modificato in questo momento.",
                        changed: "Lo stato è cambiato in {{status}}."
                    }
                },
                read: {
                    marked: "{{channelLabel}} è contrassegnato come letto.",
                    failed: "Impossibile contrassegnare il canale come letto."
                },
                route: {
                    unable: "Impossibile aprire {{destination}}.",
                },
                notification: {
                    cleared: "Tutte le notifiche sono state cancellate.",
                    failed: "Impossibile cancellare le notifiche.",
                    notSupported: "La cancellazione delle notifiche non è supportata."
                },
                streamerMode: {
                    enabled: "La modalità emittente è abilitata.",
                    disabled: "La modalità emittente è disabilitata.",
                },
                voice: {
                    micToggle: {
                        muted: "Il microfono è stato silenziato.",
                        unmuted: "Il microfono è acceso."
                    },
                    deafenToggle: {
                        deafened: "Adesso sei sordo.",
                        undeafened: "Non sei più sordo."
                    }
                },
                quickCSS: {
                    enabled: "Il CSS veloce è abilitato.",
                    disabled: "Il CSS veloce è disabilitato."
                },
                transparentity: {
                    enabled: "La trasparenza della finestra è abilitata.",
                    disabled: "La trasparenza della finestra è disabilitata."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} è disabilitato.",
                        disable: "{{pluginName}} è disabilitato. Per utilizzare questa azione, abilitare il plugin."
                    },
                    required: {
                        label: "{{pluginName}} richiede un riavvio per la reinstallazione."
                    },
                    stop: {
                        failed: "Impossibile arrestare {{pluginName}}."
                    },
                    restart: {
                        failed: "Impossibile riavviare {{pluginName}}."
                    },
                    reload: {
                        label: "{{pluginName}} è stato ricaricato.",
                        noPlugin: "Nessun plugin è stato reinstallato.",
                        reloaded: "{{count}} plugin reinstallati."
                    },
                    toggle: {
                        enabled: "{{changed}} plug-in attivato.",
                        disabled: "Il plug-in {{modificato}} è disabilitato.",
                        noChanged: "Lo stato di tutti i plugin non è cambiato."
                    },
                    run: {
                        failed: {
                            label: "Impossibile eseguire {{pluginName}}: {{actionLabel}}."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "Canale corrente",
                    group: "Gruppo DM",
                    direct: "Messaggio diretto"
                },
                guild: {
                    current: "Server corrente",
                }
            },
            option: {
                hotkey: {
                    label: "Tasto di scelta rapida",
                    description: "Tasto di scelta rapida utilizzato per aprire la tavolozza dei comandi",
                    recording: "Premere un tasto qualsiasi...",
                    reset: "reset"
                },
                visualStyle: {
                    label: "Stile visivo",
                    description: "vista tavolozza",
                    classic: "Classico",
                    polished: "Lucido (moderno)"
                },
                showTags: {
                    label: "Mostra tag",
                    description: "Mostra etichette per i comandi"
                },
                enableTagFilter: {
                    label: "Abilita filtro tag",
                    description: "Mostra la barra dei filtri dei tag"
                },
                customCommands: {
                    label: "Comandi speciali",
                    description: "Gestisci le voci personalizzate della tavolozza dei comandi"
                }
            },
            template: {
                alias: {
                    label: "Comando soprannome",
                    description: "Riflette un comando esistente"
                },
                settings: {
                    label: "Impostazioni",
                    description: "Apri le Impostazioni Discord"
                },
                url: {
                    label: "Connessione",
                    description: "Apre un URL esterno"
                },
                macro: {
                    label: "Macro",
                    description: "Esegue una serie di comandi"
                }
            }
        },
        consoleJanitor: {
            name: "ConsolePortiere",
            description: "Disabilita fastidiosi messaggi/errori della console",
            option: {
                disableLoggers: {
                    label: "Disabilita logger",
                    description: "Disabilita i logger di Discord"
                },
                disableSpotifyLogger: {
                    label: "Disabilita Spotify Logger",
                    description: "Disabilita il logger Spotify che perde informazioni sull'account e chiave di accesso"
                },
                whitelistedLoggers: {
                    label: "Logger autorizzati",
                    description: "Elenco separato da punto e virgola (;) di logger che saranno consentiti anche se gli altri sono nascosti"
                },
                allowLevel: {
                    label: "Livello consentito",
                    description: "Consenti sempre logger di questo tipo",
                    filter: "Elenco filtri"
                }
            }
        },
        consoleShortcuts: {
            name: "Scorciatoie della console",
            description: "Aggiunge scorciatoie più brevi per molte cose sulla finestra. Esegui \"shortcutList\" per l'elenco."
        },
        contentWarning: {
            name: "ContenutoAvviso",
            description: "Consente di offuscare alcune parole chiave per impostazione predefinita. Facendo clic sul contenuto sfocato lo si rende visibile.",
            option: {
                flagged: {
                    label: "segno",
                    flagged: "Parole segnate",
                    placeholder: "Parola"
                },
                onClick: {
                    label: "Fare clic su di esso",
                    description: "Mostra il contenuto al clic, non solo al passaggio del mouse"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopiaEmojiMarkdown",
            description: "Ti consente di copiare emoji come testo formattato (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Copie Unicode",
                    description: "Copia il carattere unicode non elaborato invece di :name: per gli emoji predefiniti (👽)"
                }
            },
            context: {
                copy: "Copia Emoji Markdown"
            },
            toast: {
                success: "Riuscito! Il ribasso dell'emoji è stato copiato."
            }
        },
        copyFileContents: {
            name: "CopiaContenutoFile",
            description: "Aggiunge un pulsante ai file di testo allegati per copiarne il contenuto",
            copied: "Copiato!",
            large: "Il file è troppo grande per essere copiato.",
            copyFileContents: "Copia il contenuto del file"
        },
        copyProfileColors: {
            name: "CopiaProfileColors",
            description: "Un plugin che copia i colori sfumati del profilo degli utenti negli appunti.",
            copy: "Copia i colori del profilo",
            toast: {
                noColor: "Colori del profilo non trovati!",
                copied: "Colori del profilo copiati negli appunti!",
                error: "Errore durante la copia dei colori del profilo!"
            }
        },
        copyStatusUrls: {
            name: "CopiaStatoUrl",
            description: "Copia l'URL di stato di un utente facendo clic con il pulsante destro del mouse",
            toast: {
                copied: "URL copiato",
                error: "Errore durante la copia dell'URL, controlla la console per ulteriori informazioni"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Aggiunge la possibilità di copiare e aprire i collegamenti agli adesivi",
            context: {
                copy: "Copia collegamento",
                open: "Apri collegamento"
            },
            toast: {
                success: "Link copiato!"
            }
        },
        copyUserMention: {
            name: "CopiaUserMenzione",
            description: "Aggiunge un pulsante al menu contestuale dell'utente per copiare la menzione dell'utente. Funziona meglio con ValidUser.",
            context: {
                copy: "Copia menzione utente"
            }
        },
        copyUserURLs: {
            name: "Copia URL utente",
            description: "Aggiunge l'opzione \"Copia URL utente\" al menu contestuale dell'utente.",
            context: {
                copy: "Copia l'URL dell'utente"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Plugin di supporto per gestire e, se possibile, ripristinare in caso di arresti anomali senza dover riavviare",
            option: {
                attemptToPreventCrashes: {
                    label: "Prova a prevenire gli arresti anomali",
                    description: "Cerchi di prevenire gli arresti anomali di Discord?"
                },
                attemptToNavigateToHome: {
                    label: "Prova a reindirizzare alla home page",
                    description: "Tentativo di reindirizzare alla scheda principale nel ripristino post-incidente."
                }
            },
            toast: {
                crashed: {
                    title: "La discordia si è bloccata!",
                    body: "Spiacenti :( Discord si è bloccato due volte in breve tempo, non verrà effettuato alcun tentativo di ripristino. Clicca qui e unisciti al server di supporto!",
                    update: "Oh no, Discord si è appena bloccato... ma buone notizie, c'è un aggiornamento Plexcord che può risolvere questo problema! Vuoi aggiornare adesso?",
                    recover: "Tentativo di ripristino... Clicca qui e unisciti al server di supporto!",
                    invalid: "Link di invito non valido o scaduto."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlInvioInvia",
            description: "Usa Ctrl+Invio per inviare il messaggio (personalizzabile)",
            option: {
                submitRule: {
                    label: "Regola di pubblicazione",
                    description: "Come viene inviato un messaggio",
                    ctrlEnter: "Ctrl+Invio (Invio o Maiusc+Invio per una nuova riga) (cmd+Invio su macOS)",
                    shiftEnter: "Maiusc+Invio (Invio per una nuova riga)",
                    enter: "Invio (Maiusc+Invio per una nuova riga; impostazione predefinita Discord)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Invia messaggio nel mezzo del blocco codice",
                    description: "Invia il messaggio nel mezzo di un blocco di codice"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Aggiunge uno sprite che segue il cursore.",
            modal: {
                furColor: "Colore della pelliccia",
                outlineColor: "Anahat Rengi"
            },
            option: {
                buddy: {
                    label: "Compagna",
                    description: "Scegli un amico cursore",
                    oneko: "Bene",
                    fathorse: "Cavallo Grasso"
                },
                speed: {
                    label: "Velocità",
                    description: "La velocità del tuo amico",
                    invalid: "La velocità deve essere maggiore di 0"
                },
                fps: {
                    label: "Frequenza fotogrammi (FPS)",
                    description: "Il frame rate del tuo amico",
                    invalid: "La frequenza fotogrammi deve essere maggiore di 0"
                },
                onekoSection: {
                    label: "Bene"
                },
                furColor: {
                    label: "Colore della pelliccia",
                    description: "colore esagonale della pelliccia per Oneko"
                },
                outlineColor: {
                    label: "Anahat Rengi",
                    description: "Colore esadecimale del contorno per Oneko"
                },
                fathorseSection: {
                    label: "Cavallo Grasso"
                },
                size: {
                    label: "Dimensione",
                    description: "Dimensioni del cavallo grasso",
                    invalid: "La dimensione deve essere maggiore di 0"
                },
                fade: {
                    label: "Sbiadimento",
                    description: "Se il cavallo svanisce quando il cursore si avvicina"
                },
                freeroam: {
                    label: "Giro libero",
                    description: "Se il cavallo può vagare liberamente quando è inattivo"
                },
                shake: {
                    label: "Licenziamento",
                    description: "Se il cavallo scuoterà la finestra mentre cammina"
                }
            }
        },
        customFolderIcons: {
            name: "Icone cartelle personalizzate",
            description: "Personalizza le icone delle cartelle con qualsiasi png",
            option: {
                solidIcon: {
                    label: "Icona piatta",
                    description: "Utilizza uno sfondo semplice per lo sfondo della tua immagine"
                },
                folderIcons: {
                    label: "Icone delle cartelle",
                    description: "Impostazioni dell'icona della cartella"
                }
            },
            modal: {
                change: "Cambia la dimensione dell'icona della cartella",
                save: "Salva",
                unset: "Rimuovere",
                set: "Imposta una nuova icona",
                hover: "Potrebbe essere necessario passare il mouse sopra la cartella dopo averla impostata per l'aggiornamento."
            }
        },
        customIdle: {
            name: "Idle personalizzato",
            description: "Ti consente di impostare l'intervallo di tempo prima che Discord entri in modalità inattività (o disattivare la modalità inattività automatica)",
            backOnline: "Bentornato! Fare clic sul pulsante per andare online. Fare clic su X per rimanere inattivo finché non si ricarica.",
            exit: "Esci da Inattivo",
            option: {
                idleTimeout: {
                    label: "Timeout di inattività",
                    description: "Numero di minuti prima che Discord entri in modalità inattività (0 per disattivare la modalità inattività automatica)"
                },
                remainInIdle: {
                    label: "Rimani inattivo",
                    description: "Quando torni su Discord, rimani inattivo finché non confermi che desideri andare online"
                }
            }
        },
        customRPC: {
            name: "RPC personalizzato",
            description: "Aggiungi una Rich Presence completamente personalizzabile al tuo profilo Discord",
            goTo: "Crea un'applicazione andando su {{portal}} e ottieni l'ID dell'applicazione.",
            upload: "Ottieni le chiavi immagine caricando immagini dalla scheda Rich Presence.",
            image: "Se desideri utilizzare un collegamento immagine, scarica la tua immagine e caricala su {{imgur}}, quindi fai clic con il pulsante destro del mouse sull'immagine e utilizza \"Copia indirizzo immagine\" per ottenere il collegamento.",
            button: "Non puoi vedere i tuoi pulsanti sul tuo profilo, ma tutti gli altri possono vederli normalmente.",
            font: "Alcune strane lettere Unicode ('𝖇ö𝖞𝖑𝖊 𝖞𝖆𝖟ı𝖑𝖆𝖗') possono far sì che Rich Presence non venga visualizzato, prova invece a utilizzare lettere normali.",
            placeholder: "Inserisci un valore",
            select: "Scegli un'opzione",
            error: {
                appIdInvalid: "L'ID dell'applicazione non è un numero valido.",
                notice: "Avvertimento",
                sharing: "La condivisione degli eventi non è abilitata, le persone non potranno vedere la tua Rich Presence privata!",
                enable: "attivare",
                validStream: "Il collegamento al post deve essere un URL valido.",
                mustBeURL: "Deve essere un URL valido.",
                streamCharacters: "Il collegamento al post non deve contenere più di 512 caratteri.",
                dontUse: "Non utilizzare un collegamento Discord. Utilizza invece un collegamento immagine Imgur.",
                imgur: "Il collegamento Imgur deve essere direttamente all'immagine (ad esempio: https://i.imgur.com/...). Fare clic con il tasto destro sull'immagine e fare clic su \"Copia indirizzo immagine\".",
                tenor: "Il collegamento Tenor deve essere direttamente all'immagine (ad esempio: https://media.tenor.com/...). Fare clic con il tasto destro sulla GIF e fare clic su \"Copia indirizzo immagine\".",
                required: "Questo campo è obbligatorio.",
                tooLong: "Non deve essere più lungo di {{maxLength}} caratteri.",
                mustBeNumber: "Deve essere un numero.",
                mustBePositive: "Deve essere un numero positivo.",
                startTimeInvalid: "L'ora di inizio deve essere maggiore di 0.",
                endTimeInvalid: "L'ora di fine deve essere maggiore di 0."
            },
            option: {
                appId: {
                    label: "ID dell'applicazione",
                    description: "ID app (richiesto)"
                },
                appName: {
                    label: "Nome dell'applicazione",
                    description: "Nome dell'app (richiesto)"
                },
                details: {
                    label: "Dettaglio",
                    description: "Dettagli (riga 1)"
                },
                detailsURL: {
                    label: "URL dei dettagli",
                    description: "URL cliccabile per i dettagli"
                },
                state: {
                    label: "Dura",
                    description: "Stato (riga 2)"
                },
                stateURL: {
                    label: "URL di stato",
                    description: "URL cliccabile per lo stato"
                },
                partySize: {
                    label: "Dimensione del gruppo",
                    description: "Dimensione attuale del gruppo (deve essere utilizzata insieme alla dimensione massima del gruppo)"
                },
                partyMax: {
                    label: "Dimensione massima del gruppo",
                    description: "Dimensione massima del gruppo (deve essere utilizzato con la dimensione corrente del gruppo)"
                },
                type: {
                    label: "Tipo di evento",
                    description: "Tipo di evento",
                    playing: "giocando",
                    streaming: "Trasmissione",
                    listening: "ascolto",
                    watching: "guardando",
                    competing: "corsa"
                },
                streamLink: {
                    label: "Posta collegamento",
                    description: "Collegamento a Twitch.tv o Youtube.com (solo per il tipo di evento Trasmissione)"
                },
                timestampMode: {
                    label: "Modalità timestamp",
                    description: "Cosa dovrebbe indicare il timestamp",
                    none: "Nessuno",
                    sinceDiscordOpen: "Da quando è stato aperto Discord",
                    sameAsCurrentTime: "Uguale all'ora corrente (non si ripristina dopo 24 ore)",
                    custom: "Tempo speciale"
                },
                startTime: {
                    label: "Ora di inizio (in millisecondi)",
                    description: "Orario di inizio (solo per la modalità ora personalizzata)"
                },
                endTime: {
                    label: "Ora di fine (in millisecondi)",
                    description: "Timestamp di fine (solo per la modalità ora personalizzata)"
                },
                imageBig: {
                    label: "Grande chiave visiva",
                    description: "Tasto visivo grande (deve essere installato nella scheda Rich Presence)"
                },
                imageBigTooltip: {
                    label: "Grande indizio visivo",
                    description: "Suggerimento che appare quando si passa con il mouse sopra l'immagine più grande"
                },
                imageBigURL: {
                    label: "URL di immagini di grandi dimensioni",
                    description: "URL cliccabile di immagini di grandi dimensioni"
                },
                imageSmall: {
                    label: "Piccolo interruttore visivo",
                    description: "Piccola chiave visiva (deve essere installata nella scheda Rich Presence)"
                },
                imageSmallTooltip: {
                    label: "Piccolo indizio visivo",
                    description: "Suggerimento visualizzato quando si passa il mouse sopra un'immagine in miniatura"
                },
                imageSmallURL: {
                    label: "URL dell'immagine in miniatura",
                    description: "URL cliccabile di piccole immagini"
                },
                buttonOneText: {
                    label: "Pulsante 1 Metni",
                    description: "Pulsante 1 metni"
                },
                buttonOneURL: {
                    label: "URL del pulsante 1",
                    description: "Connessione pulsante 1"
                },
                buttonTwoText: {
                    label: "Pulsante 2 Metni",
                    description: "Pulsante 2 metni"
                },
                buttonTwoURL: {
                    label: "URL del pulsante 2",
                    description: "Connessione pulsante 2"
                }
            }
        },
        customSounds: {
            name: "Suoni personalizzati",
            description: "Personalizza i suoni di Discord.",
            search: "Cerca suoni",
            placeholder: "Cerca per nome o ID",
            import: "Iche Aktar",
            export: "Esportare",
            reset: "Reimposta tutto",
            debug: "Debug",
            toast: {
                error: "Errore durante il caricamento del file audio personalizzato",
                exported: "{{count}} impostazioni esportate (file audio non inclusi)",
                imported: "Impostazioni importate correttamente",
                importError: "Si è verificato un errore durante l'importazione delle impostazioni. Controlla la console per i dettagli.",
                reset: "Tutti i suoni sono stati ripristinati con successo!",
                overrideDescription: "Il suono di {{soundName}} è cambiato",
                previewSound: "Si è verificato un errore durante la riproduzione dell'audio.",
                playing: "Impossibile riprodurre il suono personalizzato. Il file potrebbe essere danneggiato.",
                invalidFile: "Nessun file audio personalizzato per l'anteprima",
                uploaded: "File caricato correttamente: {{fileName}}",
                uploadedError: "Si è verificato un errore durante il caricamento del file: {{error}}",
                invalidExtension: "Tipo di file non valido. Per favore carica un file audio.",
                uploading: "Caricamento file...",
                deleted: "Il file è stato eliminato con successo",
                deleteError: "Si è verificato un errore durante l'eliminazione del file.",
                loadingError: "Errore durante il caricamento del file audio personalizzato"
            },
            button: {
                preview: "Anteprima",
                stop: "Fluire",
                volume: "Sez",
                soundSource: "Sorgente audio",
                customFile: "Fascicolo speciale",
                uploadNew: "Nuovo caricamento",
                delete: "Elimina il file selezionato"
            },
            option: {
                default: "Predefinito",
                custom: "Speciale",
                select: "Seleziona un file..."
            },
            type: {
                activityEnd: "L'evento è terminato",
                activityLaunch: "Evento iniziato",
                activityUserJoin: "L'utente ha partecipato all'evento",
                activityUserLeft: "L'utente ha abbandonato l'evento",
                asmrMessage: "Messaggio ASMR",
                bitMessage: "Messaggio di bit",
                bopMessage: "Messaggio Bop",
                callCalling: "Ricerca in corso",
                callRinging: "Chiamata che squilla",
                clipError: "Errore di clip",
                clipSave: "Clip salvata",
                ddrDown: "DDR in calo",
                ddrLeft: "DDR Sol",
                ddrRight: "DDR Giusto",
                ddrUp: "DDR in su",
                deafen: "sordo",
                discodo: "Disco",
                disconnect: "Disconnesso",
                duckyMessage: "Messaggio paperoso",
                hangStatusSelect: "Sospendi la selezione dello stato",
                highfiveClap: "Applausi del cinque",
                highfiveWhistle: "Fischio del cinque",
                humanMan: "uomo umano",
                lofiMessage: "Messaggio LoFi",
                mention1: "Menzione 1 (@ruolo)",
                mention2: "Menzione 2 (@tutti)",
                mention3: "Menzione 3 (@qui)",
                message1: "Messaggio 1 (generale)",
                message2: "Messaggio 2 (risposta sul server)",
                message3: "Messaggio 3 (DM e DM di gruppo)",
                mute: "Muto",
                overlayUnlock: "Livello sbloccato",
                poggermodeAchievement: "Obiettivo Poggermode",
                poggermodeApplause: "Applausi in modalità Pogger",
                poggermodeEnabled: "Modalità Pogger abilitata",
                poggermodeMessage: "Messaggio di Poggermode",
                pttStart: "Avvia PTT",
                pttStop: "Arresto PTT",
                reconnect: "Riconnettiti",
                robotMan: "Robot Adamo",
                stageWaiting: "Scena in attesa",
                streamEnded: "Trasmissione terminata",
                streamStarted: "Trasmissione iniziata",
                streamUserJoined: "L'utente si è unito alla trasmissione",
                streamUserLeft: "L'utente ha lasciato la trasmissione",
                success: "Riuscito",
                undeafen: "Rimuovi Assordante",
                unmute: "Rimuovi il silenzio",
                userJoin: "Utente iscritto",
                userLeave: "Utente a sinistra",
                userMoved: "Utente spostato",
                vibingWumpus: "Wumpus bloccato"
            }
        },
        customTimestamps: {
            name: "Timestamp personalizzati",
            description: "Timestamp personalizzati su messaggi e descrizioni comandi",
            demo: {
                cozy: "Cliccami per passare al formato casual",
                compact: "Cliccami per passare al formato compatto",
                lastWeek: "Questo messaggio è stato inviato la settimana scorsa",
                hover: "Puoi visualizzare i formati delle descrizioni comandi passando il mouse sopra i timestamp",
                edit: "Modifica i formati di seguito, guardali aggiornati dal vivo qui"
            },
            modal: {
                title: "Come usare:",
                moment: "Documentazione sulla formattazione di Moment.js",
                hint: "Inoltre, puoi utilizzare quanto segue nelle tue voci:",
                calendar: "consente, ad esempio, la formattazione dinamica della data",
                today: "Oggi",
                yesterday: "Ieri",
                relative: "ti dà tempi come:",
                relativeTime: "4 ore fa",
                preview: "Anteprima",
                format: "formato calendario",
                howTo: "Ecco come formattare il valore [calendar] quando utilizzato nei timestamp sopra."
            },
            option: {
                formats: {
                    label: "Formati",
                    description: "Personalizza i formati di timestamp",
                },
                cozyFormat: {
                    label: "rilievo mod",
                    description: "Formato dell'ora da utilizzare per la modalità rilassata nei messaggi"
                },
                compactFormat: {
                    label: "Mod. compatto",
                    description: "Formato dell'ora da utilizzare in modalità compatta e quando si passa il mouse sopra i messaggi"
                },
                tooltipFormat: {
                    label: "punta dello strumento",
                    description: "Formato dell'ora da utilizzare nelle descrizioni comandi"
                },
                ariaLabelFormat: {
                    label: "Etichette Aria",
                    description: "Formato dell'ora da utilizzare nei tag Aria"
                },
                sameDayFormat: {
                    label: "lo stesso giorno",
                    description: "formato [calendario] per oggi",
                    default: "[Bugün] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Ieri",
                    description: "formato [calendario] per ieri",
                    default: "[Sottile] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "La settimana scorsa",
                    description: "formato [calendario] per la scorsa settimana"
                },
                sameElseFormat: {
                    label: "più vecchio",
                    description: "Formato [calendario] per le date precedenti"
                }
            }
        },
        customUserColors: {
            name: "Colori utente personalizzati",
            description: "Ti consente di aggiungere un colore personalizzato a qualsiasi utente, ovunque! Altamente consigliato da utilizzare con typeTweaks e roleColorEverywhere",
            option: {
                dmList: {
                    label: "Elenco DM",
                    description: "I nomi degli utenti a cui sono stati assegnati colori speciali verranno colorati nell'elenco dei DM"
                },
                colorInServers: {
                    label: "Colore sui server",
                    description: "Anche i colori dei nomi dovrebbero essere cambiati sui server?"
                }
            },
            context: {
                setColor: "Regola il colore"
            },
            modal: {
                custom: "Colore personalizzato",
                pick: "scegli un colore",
                delete: "Elimina registrazione",
                save: "Salva"
            }
        },
        dearrow: {
            name: "Dearrow",
            description: "Rende i titoli e le miniature incorporati su YouTube meno sensazionali, grazie alla tecnologia Dearrow",
            option: {
                hideButton: {
                    label: "Nascondi pulsante",
                    description: "Nasconde il pulsante Dearrow dagli incorporamenti di YouTube"
                },
                replaceElements: {
                    label: "Modifica elementi",
                    description: "Scegli quali elementi dell'incorporamento sostituire",
                    everything: "Tutto (titoli e miniature)",
                    title: "Titoli",
                    thumbnail: "Miniature"
                },
                dearrowByDefault: {
                    label: "Dearrow per impostazione predefinita",
                    description: "Dearrow video automaticamente"
                }
            },
            tooltip: {
                dearrowed: "Dearrow è stato applicato a questo incorporamento, fai clic per ripristinare",
                dearrow: "Fare clic per applicare la freccia"
            }
        },
        declutter: {
            name: "Meaning is the contrary",
            description: "Ripulisce Discord rimuovendo elementi dell'interfaccia utente non essenziali come effetti del profilo, schede del negozio, potenziamenti e altro ancora.",
            option: {
                userProfileHeader: {
                    label: "Profilo utente"
                },
                removeNameplate: {
                    label: "Rimuovere la targhetta",
                    description: "Rimuove le targhette."
                },
                removeProfileEffect: {
                    label: "Rimuovi effetto profilo",
                    description: "Rimuove gli effetti di animazione visualizzati all'apertura del profilo."
                },
                removeClanTag: {
                    label: "Rimuovi tag clan",
                    description: "Rimuove i tag del clan."
                },
                alwaysShowUsername: {
                    label: "Mostra sempre il nome utente",
                    description: "Mostra sempre il nome utente invece dello stato."
                },
                accessibilityNotice: {
                    label: "Avviso di accessibilità",
                    description: "Discord ha già un'opzione di stile del nome utente incorporata nelle sue impostazioni di accessibilità."
                },
                friendsListHeader: {
                    label: "Sopra l'elenco degli amici/DM"
                },
                removeShopAboveDM: {
                    label: "Rimuovi il negozio sopra l'elenco DM",
                    description: "Rimuove il pulsante Store sopra l'elenco DM."
                },
                removeQuestsAboveDM: {
                    label: "Rimuovi attività dall'elenco DM",
                    description: "Rimuove il pulsante delle attività sopra l'elenco dei messaggi diretti."
                },
                miscHeader: {
                    label: "Vari"
                },
                removeServerBoostInfo: {
                    label: "Rimuovere le informazioni sul potenziamento del server",
                    description: "Rimuove le informazioni sul rinforzo del server nella parte superiore dell'elenco dei canali."
                },
                removeBillingSettings: {
                    label: "Rimuovi le impostazioni di pagamento",
                    description: "Rimuove le impostazioni di pagamento (fattura)."
                },
                removeGiftButton: {
                    label: "Rimuovi pulsante regalo",
                    description: "Rimuove il pulsante Invia regalo."
                },
                removeUnavailableEmojiPicker: {
                    label: "Rimuovi il selettore emoji non disponibile",
                    description: "Rimuove le categorie inaccessibili nel selettore emoji."
                },
                removeAudioMenus: {
                    label: "Rimuovere i menu audio",
                    description: "Rimuove i menu freccia accanto ai pulsanti muto e sordo."
                },
                removeButtonTooltips: {
                    label: "Rimuovi suggerimenti sui pulsanti",
                    description: "Rimuove i suggerimenti visualizzati sui pulsanti."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Decodifica il contenuto base64 di qualsiasi messaggio e copia il contenuto decodificato.",
            right: {
                decode: "Copia risolta (clic sinistro) / Risoluzione Base64 (clic destro)",
                copy: "Decodifica Base64 (clic sinistro) / Copia decodificata (clic destro)"
            },
            option: {
                clickMethod: {
                    label: "Fare clic su Metodo",
                    description: "Cambia il comportamento del pulsante per decodificare il contenuto base64 di qualsiasi messaggio.",
                    left: "Fare clic con il tasto sinistro per decodificare il contenuto Base64.",
                    right: "Fare clic con il tasto destro per decodificare il contenuto Base64."
                }
            },
            modal: {
                title: "Contenuto Base64 decodificato",
                content: "Contenuto disciolto",
                copy: "Copia contenuto risolto {{index}}",
                copied: "Contenuto risolto copiato negli appunti!"
            }
        },
        decor: {
            name: "Arredamento",
            description: "Crea e utilizza le tue decorazioni avatar personalizzate o scegli la tua preferita tra quelle predefinite.",
            presetPart: "Parte del preset {{name}}",
            createdBy: "Creato da {{autore}}",
            copy: "Copia ID preimpostato",
            file: "File",
            your: {
                title: "decorazioni",
                subtitle: "Puoi eliminare le tue decorazioni facendo clic con il pulsante destro del mouse."
            },
            option: {
                changeDecoration: {
                    label: "Cambia ornamento",
                    description: "Per modificare la decorazione del tuo avatar, attiva Decorazione e riavvia il client.",
                    also: "Puoi anche accedere alle decorazioni decorative dalla pagina {{profiles}}.",
                    profiles: "Profili"
                },
                baseUrl: {
                    label: "URL di base",
                    description: "URL dell'API Dekor"
                },
                agreedToGuidelines: {
                    label: "Ho accettato le regole",
                    description: "Regole accettate"
                }
            },
            context: {
                decorationOptions: "Opzioni di decorazione",
                copyHash: "Copia hash decorazione",
                deleteDecoration: "Elimina ornamento"
            },
            alert: {
                delete: {
                    title: "Elimina ornamento",
                    body: "Sei sicuro di voler eliminare la decorazione {{decoration}}?",
                    confirm: "Sil",
                    cancel: "Cancellare"
                },
                logout: {
                    title: "Disconnessione",
                    body: "Sei sicuro di voler uscire da Dekor?",
                    confirm: "Disconnessione",
                    cancel: "Cancellare"
                }
            },
            button: {
                change: "Cambia ornamento",
                remove: "Rimuovi la decorazione",
                apply: "Fare domanda a",
                cancel: "Cancellare",
                browse: "Sfoglia",
                submit: "Invia per la revisione",
                continue: "Devam Et",
                back: "Torna indietro"
            },
            tooltip: {
                pendingReview: "Hai già un ornamento in fase di revisione",
                pending: "In attesa di revisione"
            },
            join: {
                tooltip: "Unisciti al server Discord di Decor per rivedere la tua decorazione e ricevere notifiche quando vengono rilasciati nuovi preset",
                button: "Server Discordia"
            },
            create: {
                title: "Crea ornamento",
                notViolate: "Assicurati che il tuo abbellimento non violi le {{guidelines}} prima di inviarlo.",
                guidelines: "regole",
                file: "Il file deve essere APNG o PNG.",
                fileHolder: "Seleziona un file",
                name: "Questo nome verrà utilizzato quando si fa riferimento a questo ornamento.",
                nameHolder: "Cubo compagno",
                nameTitle: "A.D"
            },
            help: {
                update: "Unisciti a {{server}} e consenti ai messaggi diretti di ricevere aggiornamenti sulla recensione della tua decorazione.",
                server: "Decor'un Discord"
            },
            guidelines: {
                hold: "Aspettare",
                suspended: "Inviando una decorazione accetti le {{guidelines}}. La mancata lettura di queste regole potrebbe comportare la sospensione del tuo diritto di creare ulteriori decorazioni in futuro.",
                guidelines: "regole"
            }
        },
        demonstration: {
            name: "Dimostrazione",
            description: "Plugin per acquisire screenshot del tema: censura l'identificazione di immagini e testo.",
            toolbox: {
                toggle: "censurato"
            },
            keycode: "Dai un'occhiata a {{keycode}} per cambiare il tuo tasto di scelta rapida!",
            this: "di questo veicolo",
            okay: "Va bene!",
            option: {
                keyBind: {
                    label: "Tasto di scelta rapida",
                    description: "Pulsante che attiva e disattiva il tema quando viene premuto"
                },
                soundVolume: {
                    label: "Livello sonoro",
                    description: "Volume del suono di attivazione/disattivazione (0 = disattivato)"
                },
                showConfirmationModal: {
                    label: "Mostra finestra di conferma",
                    description: "Mostra la finestra per ricordare la scorciatoia"
                }
            },
            switch: {
                note: "Potrai riattivare questa impostazione in un secondo momento",
                disable: "Disabilitare la finestra di conferma?"
            },
            shortcut: "Questo censurerà tutti i testi! Ricorda la scorciatoia per disabilitarlo:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Plug-in Assistente sviluppatore. Se vedi qualcosa che non funziona o che si comporta in modo strano (molto probabilmente un bug) segnalalo a MutanPlex, taggalo o scrivilo, grazie!",
            reconnect: "Riconnettiti",
            option: {
                notifyOnAutoConnect: {
                    label: "Notifica sulla connessione automatica",
                    description: "Mostrare una notifica quando Dev Companion si connette automaticamente?"
                },
                usePatchedModule: {
                    label: "Utilizza il modulo patch",
                    description: "Per le richieste di rimozione, rispondere con il modulo patchato esistente (se patchato) invece dell'originale."
                },
                reloadAfterToggle: {
                    label: "Dopo la reinstallazione",
                    description: "Reinstallare dopo aver ricevuto il comando disabilita/abilita plugin."
                }
            },
            toast: {
                title: "Compagno di sviluppo connesso",
                connected: "connesso a WebSocket",
                disconnected: "Companion sviluppatore disconnesso",
                error: "Errore del compagno di sviluppo",
                reload: "Reinstallazione richiesta",
                failed: "Impossibile inizializzare le dipendenze: {{failures}}",
                close: "Trimestre",
                stopping: "Errore durante l'arresto del plug-in {{plugin}}",
                starting: "Errore durante l'inizializzazione del plugin {{plugin}}",
                noMessage: "Nessun messaggio di errore",
                noReason: "Motivo non fornito"
            }
        },
        disableCallIdle: {
            name: "Disabilita CallIdle",
            description: "Disabilita l'espulsione automatica dalla chiamata vocale DM dopo 3 minuti e lo spostamento sul canale vocale AFK."
        },
        disableCameras: {
            name: "Disabilita fotocamere",
            description: "Disabilita le telecamere nelle chiamate per impostazione predefinita"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Abilita il banner per sviluppatori Discord che visualizza le informazioni sull'ID build.",
            about: "Formato banner per sviluppatori Discord. È possibile utilizzare le seguenti variabili:",
            preview: "Anteprima:",
            empty: "Il formato non può essere vuoto.",
            variables: {
                discord: {
                    title: "Variabili della discordia",
                    icon: "Icona discordia",
                    banner: "Icona banner sviluppatore",
                    channel: "Canale di creazione Discord (ad esempio Stabile)",
                    build: "Numero di build Discord (ad esempio 123456)",
                    hash: "Hash di build Discord (ad esempio 123456)"
                },
                plexcord: {
                    title: "Variabili Plexcord",
                    icon: "Icona Plexcord",
                    name: "Nome Plexcord",
                    version: "Versione Plexcord (es. 1.0.0)",
                    hash: "Hash della struttura Plexcord (ad esempio 123456)",
                    platform: "Piattaforma su cui viene eseguito Plexcord (ad esempio Dev Build)"
                },
                plextron: {
                    title: "Variabili personalizzate Plextron",
                    hashShort: "Hash a struttura corta Plextron (ad esempio 123456789)",
                    platformType: "Tipo di piattaforma su cui viene eseguito Plextron (ad esempio Dev Build)"
                },
                client: {
                    title: "Variabili del cliente",
                    icon: "icona del desktop",
                    name: "Nome del cliente (ad esempio Discord Canary)",
                    version: "Versione client (ad esempio 1.0.0)",
                },
                electron: {
                    title: "Variabili elettroniche",
                    icon: "Icona dell'elettrone",
                    version: "Versione elettronica (es. 25.0.0)"
                },
                chromium: {
                    title: "Variabili di cromo",
                    icon: "Icona del cromo",
                    version: "Versione motore Chromium (es. 125.0.0.0)"
                },
                misc: {
                    title: "Variabili varie",
                    newline: "carattere di nuova riga"
                }
            }
        },
        dontFilterMe: {
            name: "Non filtrarmi",
            description: "Ti avvisa se il tuo messaggio contiene un termine presente nell'elenco pronto per la moderazione automatica",
            alert: {
                title: "Apetta un minuto!",
                content: "Il tuo messaggio contiene un termine presente nell'elenco pronto per la moderazione automatica. (Termine '{{trigger}}')",
                content2: "C'è un'alta probabilità che il tuo messaggio venga bloccato ed elaborato da un moderatore del server.",
                confirm: "Invia comunque",
                cancel: "Cancellare"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Arrotonda sempre per difetto i timestamp relativi in ​​modo che 7,6y diventi 7y anziché 8y"
        },
        dragFavoriteEmotes: {
            name: "Trascina le emoticon preferite",
            description: "Aggiunge la funzionalità di trascinamento della selezione per modificare l'ordine degli emoji preferiti"
        },
        dragify: {
            name: "Trascina",
            description: "Trascina e rilascia utenti, canali o relatori nella chat per aggiungere menzioni o inviti.",
            option: {
                userOutput: {
                    label: "Uscita utente",
                    description: "Uscita di abbandono dell'utente.",
                    mention: "non menzionare",
                    id: "Identità utente (ID)"
                },
                channelOutput: {
                    label: "Uscita del canale",
                    description: "Uscita di rilascio del canale.",
                    mention: "Menzione sul #canale",
                    link: "Connessione al canale",
                },
                inviteExpireAfter: {
                    label: "Durata dell'invito",
                    description: "Il periodo di validità del collegamento di invito.",
                    never: "Mai",
                    thirtyMinutes: "30 minuti",
                    oneHour: "1 momento",
                    sixHours: "6 Momenti",
                    twelveHours: "12 Momenti",
                    oneDay: "1 giorno",
                    sevenDays: "7 giorni"
                },
                inviteMaxUses: {
                    label: "Numero massimo di utilizzi",
                    description: "Limite massimo di utilizzo dell'invito.",
                    noLimit: "Nessun limite",
                    one: "1 Utilizzo",
                    five: "5 Utilizzo",
                    ten: "10 Utilizzo",
                    twentyFive: "25 Utilizzo",
                    fifty: "50 usi",
                    hundred: "100 usi"
                },
                inviteTemporaryMembership: {
                    label: "Fornire un abbonamento temporaneo",
                    description: "Concede l'adesione temporanea agli invitati.",
                },
                reuseExistingInvites: {
                    label: "Riutilizza l'invito esistente",
                    description: "Utilizza l'invito esistente invece di crearne uno nuovo."
                },
                allowChatBodyDrop: {
                    label: "Consenti trascinamento nel corpo della chat",
                    description: "Permette di trascinare il testo direttamente nell'area chat per aggiungerlo."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify non ha potuto eseguire l'operazione.",
                },
                invite: {
                    created: "L'invito è stato creato.",
                    unable: "Impossibile creare un invito.",
                    noChannel: "Non ci sono canali disponibili per creare un invito.",
                }
            },
            ghost: {
                user: "Utente",
                server: "Presentatore",
                dm: "Messaggi diretti",
                badge: {
                    channel: "canale",
                    thread: "titolo",
                    voice: "ses",
                    forum: "foro",
                    media: "media",
                    announcement: "annuncio",
                    dm: "dm",
                    user: "utente",
                    server: "presentatore"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Evidenzia e ispeziona facilmente gli articoli.",
            modal: {
                recording: "Registrazione...",
                reset: "reset"
            },
            option: {
                keybind: {
                    label: "Assegnazione chiave",
                    description: "Attiva/disattiva evidenziatore"
                },
                showClasses: {
                    label: "Mostra classi",
                    description: "Visualizza i nomi delle classi CSS dell'elemento nella descrizione comando"
                },
                showId: {
                    label: "Mostra documento d'identità",
                    description: "Visualizza l'attributo ID dell'elemento nella descrizione comando"
                },
                showFont: {
                    label: "Mostra carattere",
                    description: "Visualizza la famiglia e la dimensione del carattere calcolata"
                },
                showPadding: {
                    label: "Mostra imbottitura",
                    description: "Visualizza i valori di spaziatura interna dell'elemento"
                },
                showMargin: {
                    label: "Mostra margine esterno",
                    description: "Visualizza i valori dello spazio esterno dell'elemento"
                },
                showBorderRadius: {
                    label: "Mostra rotondità del bordo",
                    description: "Visualizza i valori del raggio del bordo dell'elemento"
                },
                showPosition: {
                    label: "Mostra posizione",
                    description: "Visualizza il tipo di posizione CSS dell'elemento e il valore z-index"
                },
                showDisplay: {
                    label: "Mostra vista",
                    description: "Visualizza il tipo di vista dell'elemento insieme alle relative proprietà di flessibilità o griglia"
                }
            },
            toast: {
                copied: {
                    color: "Colore copiato negli appunti!",
                }
            }
        },
        exitSounds: {
            name: "EsciSuoni",
            description: "Quando si esce dal canale audio, viene riprodotto un suono dal pannello audio.",
            button: "Imposta come suono di uscita globale",
            toast: {
                failedToPlay: "Cristo no! Qualcosa è andato storto."
            },
            option: {
                soundGuildId: {
                    label: "Identità del server vocale (ID)",
                    description: "Seleziona il server in cui si trova l'audio.",
                    placeholder: "Scegli un server..."
                },
                soundId: {
                    label: "Identità vocale (ID)",
                    description: "Inserisci l'ID del suono che desideri riprodurre.",
                    placeholder: "Inserisci l'ID vocale..."
                }
            }
        },
        experiments: {
            name: "Esperimenti",
            description: "Fornisce l'accesso agli esperimenti e ad altre funzionalità riservate agli sviluppatori in Discord!",
            modal: {
                about: {
                    title: "Ulteriori informazioni",
                    body: "Puoi aprire gli Strumenti per sviluppatori di Discord con {{key}}"
                },
                warning: {
                    title: "Attenzione!!",
                    body: "Gli esperimenti sono funzionalità Discord inedite. Potrebbero non funzionare o addirittura danneggiare il tuo client o causare la disattivazione del tuo account.",
                    notReponsible: "Usa gli esperimenti solo se sai cosa stai facendo. Plexcord non è responsabile per eventuali danni che potrebbero verificarsi abilitando gli esperimenti.",
                    useAtOwnRisk: "Se non sai cosa fa un esperimento, ignoralo. Non chiedeteci cosa fanno, probabilmente non lo sappiamo neanche noi.",
                    serverSideFeatures: "No, non puoi utilizzare funzionalità lato server come selezionare la casella \"Invia al client\"."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Menu sviluppatore della barra degli strumenti",
                    description: "Sostituisce il pulsante della barra degli strumenti della guida (?) (in alto a destra della chat) con il menu sviluppatore di Discord"
                }
            }
        },
        exportMessages: {
            name: "Esporta messaggi",
            description: "Ti permette di esportare i messaggi su file: singolo messaggio, tutti i messaggi di un utente o tutti i messaggi di un canale",
            option: {
                maxMessages: {
                    label: "Messaggio massimo",
                    description: "Numero massimo di messaggi da trasferire (0 = illimitato)"
                },
                includeAttachments: {
                    label: "Includi allegati",
                    description: "Includere le informazioni sugli allegati nei trasferimenti"
                },
                includeEmbeds: {
                    label: "Embedleri Dahil Et",
                    description: "Includi informazioni di incorporamento nei trasferimenti"
                },
                includeReactions: {
                    label: "Includi reazioni",
                    description: "Includere informazioni sulla reazione nei trasferimenti"
                },
                includeComponents: {
                    label: "Includi componenti",
                    description: "Includere informazioni sui componenti nelle importazioni"
                }
            },
            message: {
                invalid: "Messaggio non valido: nessun autore",
                unknownUser: "Utente sconosciuto",
                botEmbed: "Messaggio incorporato nel bot",
                attachments: "allegati",
                unknown: "Sconosciuto",
                noUrl: "nessun URL",
                embeds: "Incorporatore",
                title: "Titolo",
                description: "Spiegazione",
                url: "URL",
                footer: "Altbilgi",
                author: "Scrittore",
                fields: "Campi",
                components: "Componenti",
                component: "Componente",
                interactiveElement: "Elemento interattivo",
                reactions: "Reazioni",
                errorFormatting: "Messaggio di errore durante la formattazione",
                unknownError: "errore sconosciuto",
                header: "{{titlePrefix}} {{displayName}}, canale {{channelName}}",
                from: "Messaggi -",
                direct: "Messaggi diretti",
                exported: "Data di esportazione",
                total: "Messaggi totali"
            },
            toast: {
                export: {
                    title: "Esporta messaggi",
                    body: "Esportazione del messaggio non riuscita"
                },
                noMessages: {
                    title: "Esporta messaggi",
                    notFoundUser: "Nessun messaggio trovato per questo utente",
                    notFoundChannel: "Nessun messaggio trovato in questo canale"
                },
                failed: {
                    title: "Esporta messaggi",
                    body: "Si è verificato un errore durante l'esportazione dei messaggi"
                },
                userNotFound: {
                    title: "Esporta messaggi",
                    body: "Utente non trovato"
                },
                complete: {
                    title: "Esportazione completata",
                    saved: "File salvato",
                    downloaded: "File scaricato",
                    messages: "messaggio"
                }
            },
            context: {
                exportMessage: "Esporta questo messaggio",
                exportAll: "Esporta tutti i messaggi di {{utente}}",
                user: "Utente",
                exportAllChannel: "Esporta tutti i messaggi del canale"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Ti consente di clonare emoji e adesivi sul tuo server (tasto destro)",
            modal: {
                title: "Nome proprio",
                invalidName: "Il nome deve contenere da 2 a 32 caratteri e contenere solo caratteri alfanumerici"
            },
            toast: {
                success: "{{name}} è stato clonato con successo sul server {{guild}}!",
                yourServer: "il tuo server",
                failed: "Clonazione non riuscita:",
                console: "Qualcosa è andato storto (controlla la console!)"
            },
            context: {
                clone: "{{tipo}} Clona",
                cloneName: "{{dati}} Clona"
            }
        },
        f8break: {
            name: "F8Interruzione",
            description: "Quando DevTools (+ punti di interruzione) è aperto, premendo F8 si mette in pausa il client."
        },
        fakeNitro: {
            name: "FalsoNitro",
            description: "Ti consente di inviare emoji/adesivi falsi, utilizzare temi Nitro e trasmettere in streaming in qualità Nitro",
            option: {
                enableEmojiBypass: {
                    label: "Abilita Salta Emoji",
                    description: "Consente l'invio di emoji false (ignora anche la mancanza di autorizzazione per utilizzare emoji personalizzate)"
                },
                emojiSize: {
                    label: "Dimensione dell'emoji",
                    description: "Dimensioni da utilizzare per l'invio di emoji"
                },
                transformEmojis: {
                    label: "Trasforma gli emoji",
                    description: "Determina se gli emoji falsi verranno convertiti in emoji reali"
                },
                enableStickerBypass: {
                    label: "Abilita Salta adesivo",
                    description: "Consente l'invio di adesivi falsi (ignora anche la mancanza di autorizzazione all'uso degli adesivi)"
                },
                stickerSize: {
                    label: "Dimensioni dell'adesivo",
                    description: "Dimensioni da utilizzare per l'invio dell'adesivo"
                },
                transformStickers: {
                    label: "Converti adesivi",
                    description: "Determina se gli adesivi falsi verranno convertiti in adesivi veri"
                },
                transformCompoundSentence: {
                    label: "Converti frasi composte",
                    description: "Determina se le emoji e gli adesivi falsi nelle frasi composte (frasi che contengono più contenuti oltre al semplice collegamento alle emoji o agli adesivi falsi) vengono convertiti"
                },
                enableStreamQualityBypass: {
                    label: "Abilita il salto della qualità di trasmissione",
                    description: "Consente lo streaming in qualità nitro"
                },
                useStickerHyperLinks: {
                    label: "Usa i ponti adesivi",
                    description: "Determina se utilizzare un collegamento ipertestuale durante l'invio di adesivi falsi"
                },
                useEmojiHyperLinks: {
                    label: "Usa i ponti Emoji",
                    description: "Determina se utilizzare i collegamenti ipertestuali durante l'invio di emoji falsi"
                },
                hyperLinkText: {
                    label: "Ipertesto",
                    description: "Il testo da utilizzare nel collegamento ipertestuale. {{NAME}} verrà sostituito con il nome dell'emoji/adesivo."
                },
                disableEmbedPermissionCheck: {
                    label: "Disabilita controllo autorizzazione incorporamento",
                    description: "Determina se disabilitare il controllo delle autorizzazioni di incorporamento quando si inviano emoji e adesivi falsi"
                }
            },
            modal: {
                sticker: "Questo è un adesivo FakeNitro e sembra un vero adesivo solo per te. Appare come collegamento per coloro che non utilizzano il plugin.",
                emoji: "Questa è un'emoji FakeNitro e sembra una vera emoji solo per te. Appare come collegamento per coloro che non utilizzano il plugin."
            },
            alert: {
                notice: {
                    title: "Attenzione!",
                    body: "Stai tentando di inviare/modificare un messaggio contenente un emoji o un adesivo FakeNitro, ma non hai il permesso di incorporare collegamenti in questo canale. Sei sicuro di voler inviare questo messaggio? I tuoi articoli FakeNitro appariranno solo come link.",
                    footer: "Puoi disabilitare questo avviso nelle impostazioni di FakeNitro",
                    confirm: "Invia comunque",
                    cancel: "Cancellare",
                    secondaryConfirm: "Non mostrarlo più"
                },
                apngSticker: {
                    title: "Attenzione!",
                    body: "Non puoi inviare questo messaggio perché contiene un adesivo animato FakeNitro e non hai il permesso di aggiungere file in questo canale. È necessario rimuovere l'adesivo per continuare."
                }
            }
        },
        fakeProfileThemes: {
            name: "Temi di profilo falso",
            description: "Fornisce temi per il profilo; Aggiunge colori nascosti al bione grazie alla codifica invisibile 3y3.",
            button: {
                copy: "3y3 Copia"
            },
            modal: {
                usage: "Utilizzo",
                preview: "Anteprima",
                intro: "Una volta attivato questo plugin, vedrai colori personalizzati sui profili di altre persone che utilizzano plugin compatibili.",
                setColor: "Per impostare i tuoi colori:",
                step1: "• scegli i tuoi colori utilizzando i selettori di colori qui sotto",
                step2: "• Fare clic sul pulsante {{copia}}",
                step3: "• incollare il testo invisibile ovunque nella sezione informazioni",
                pickers: "Selettori di colori",
                primary: "Primario",
                accent: "Enfasi"
            },
            option: {
                nitroFirst: {
                    label: "Nitro innanzitutto",
                    description: "Origine colore predefinita se entrambe sono disponibili",
                    nitro: "Colori nitro",
                    fake: "colori falsi"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "Temi ed effetti di FakeProfile",
            description: "Ti consente di aggiungere temi ed effetti al profilo; Grazie alla codifica invisibile 3y3, colori ed effetti nascosti vengono aggiunti alla biografia.",
            option: {
                prioritizeNitro: {
                    label: "Dai priorità a Nitro",
                    description: "Risorsa a cui dare priorità",
                    nitro: "Nitro",
                    aboutMe: "su di me"
                },
                hideBuilder: {
                    label: "Nascondi Creatore",
                    description: "Nascondi FPTE Creator nelle pagine delle impostazioni del profilo utente e del profilo server"
                }
            },
            modal: {
                primary: "Primario",
                accent: "Enfasi",
                effect: "Effetto",
                usage: {
                    title: "Utilizzo",
                    intro: "Una volta attivato questo plugin, vedrai colori ed effetti personalizzati del tema sui profili di altre persone che utilizzano questo plugin.",
                    setColor: "Per impostare i tuoi colori ed effetti:",
                    step1: "Vai alle impostazioni del profilo",
                    step2: "Utilizza FPTE Creator per scegliere i colori e gli effetti del tema del profilo",
                    step3: "Fai clic sul pulsante {{copia}}",
                    step4: "Incolla il testo invisibile dove vuoi nella tua biografia"
                }
            },
            toast: {
                copied: "FPTE copiato negli appunti!",
                empty: "Il generatore FPTE è vuoto; Non c'è niente da copiare!"
            },
            button: {
                copyFPTE: "Copia FPTE",
                reset: "reset",
                preview: "Anteprima del creatore FPTE",
                buildBackwards: "Crea FPTE compatibile con le versioni precedenti",
                moreCharacters: "Verranno utilizzati più caratteri"
            }
        },
        fastDeleteChannels: {
            name: "Eliminazione rapida dei canali",
            description: "Aggiunge un'icona del cestino per eliminare i canali",
            option: {
                keyBind: {
                    label: "Tasto di scelta rapida",
                    description: "La chiave da utilizzare per aprire e chiudere il cestino."
                },
                reqCtrl: {
                    label: "Tasto Ctrl obbligatorio",
                    description: "È necessario tenere premuto il tasto Ctrl per aprire il cestino."
                },
                reqShift: {
                    label: "Tasto Maiusc obbligatorio",
                    description: "Per aprire il cestino è necessario tenere premuto il tasto Maiusc."
                },
                reqAlt: {
                    label: "Tasto Alt obbligatorio",
                    description: "Per aprire il cestino è necessario tenere premuto il tasto Alt."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "PreferitoEmojiPrima",
            description: "Mette le tue emoji preferite in cima all'elenco di completamento automatico delle emoji e fornisce anche soprannomi emoji.",
            option: {
                aliases: {
                    label: "Soprannomi",
                    description: "Gestisci i tuoi soprannomi emoji."
                },
                clearAll: {
                    label: "Cancella tutto",
                    description: "Elimina tutti i soprannomi."
                }
            },
            modal: {
                clear: {
                    title: "Elimina tutti gli alias",
                    description: "Ciò rimuoverà tutti i soprannomi emoji che hai salvato.",
                    confirm: "Elimina tutti i soprannomi"
                },
                set: {
                    title: "Imposta soprannome",
                    description: "Imposta un nickname per {{emoji}}",
                    placeholder: "Soprannome, ad es. 'Contento'",
                    save: "Salva",
                    error: "Soprannome duplicato"
                }
            },
            toast: {
                set: "Soprannome impostato per {{emoji}}",
                clearAll: "Tutti i soprannomi emoji cancellati",
                failedDeleted: "Eliminazione degli alias non riuscita",
                removed: "Alias ​​per {{alias}} eliminato",
                failedRemove: "Rimozione dell'alias non riuscita",
                duplicate: "Soprannome duplicato",
                failedSave: "Impossibile registrare il nickname"
            },
            button: {
                edit: "Modifica soprannome",
                set: "Imposta soprannome"
            }
        },
        favoriteGifSearch: {
            name: "RicercaGifPreferiti",
            description: "Aggiunge una barra di ricerca alle GIF preferite.",
            placeholder: "Cerca le GIF preferite",
            option: {
                searchOption: {
                    label: "Opzione di ricerca",
                    description: "Quale parte dell'URL desideri cercare",
                    url: "Tutti gli URL",
                    path: "Solo percorso (/somegif.gif)",
                    hostandpath: "Host e percorso (tenor.com somegif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "PreferitoQualsiasi cosa",
            description: "Aggiungi ai preferiti qualsiasi immagine"
        },
        fileDownloadButton: {
            name: "Pulsante Download file",
            description: "Aggiunge un pulsante di download nell'angolo in alto a destra dei file"
        },
        findReply: {
            name: "TrovaRispondi",
            description: "Passa alla risposta più vecchia a un messaggio in un canale (rendendo più semplice tenere traccia delle conversazioni passate).",
            context: {
                jump: "Vai alla risposta"
            },
            toast: {
                navigate: "Utilizza il pannello inferiore per navigare tra le risposte.",
                container: "Elemento contenitore non trovato.",
                couldntFind: "Nessun messaggio di risposta trovato."
            },
            option: {
                includePings: {
                    label: "Includi menzioni",
                    description: "Cerca anche i messaggi inviati direttamente all'autore."
                },
                includeAuthor: {
                    label: "Includi autore",
                    description: "Cerca risposte non solo al post specifico ma anche all'autore in generale"
                },
                hideButtonIfNoReply: {
                    label: "Nascondi pulsante se nessuna risposta",
                    description: "Nasconde il pulsante se non c'è risposta al messaggio"
                }
            }
        },
        fixCodeblockGap: {
            name: "CorreggiCodeblockGap",
            description: "Rimuove lo spazio tra i blocchi di codice e il testo sottostante"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Corregge le estensioni dei file rinominandole in un formato supportato compatibile, se possibile"
        },
        fixImagesQuality: {
            name: "Correggi la qualità delle immagini",
            description: "Migliora la qualità delle immagini forzando l'uso della fonte originale",
            option: {
                originalImagesInChat: {
                    label: "Mostra immagini originali in chat",
                    description: "Mostra anche l'immagine originale in Chat. ATTENZIONE: leggere le avvertenze sopra"
                }
            },
            modal: {
                about: {
                    title: "Il comportamento predefinito è il seguente:",
                    body: "&mdash; Nella chat verranno caricate immagini ottimizzate ma a piena risoluzione.",
                    body2: "&mdash; Nella finestra dell'immagine (immagine modale), verrà caricata l'immagine originale.",
                    body3: "Puoi anche abilitare l'immagine originale nella chat, ma tieni presente le seguenti avvertenze:",
                    warning: "&mdash; Le immagini animate (GIF, WebP, ecc.) nella chat saranno sempre animate, anche se l'applicazione è attiva.",
                    warning2: "&mdash; Potrebbe causare problemi di prestazioni."
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "CorreggiSpotifyIncorpora",
            description: "Risolto il problema con gli incorporamenti di Spotify che risultavano troppo rumorosi e ti consente di personalizzare il volume",
            option: {
                volume: {
                    label: "Livello sonoro",
                    description: "Percentuale del volume da regolare per gli incorporamenti Spotify. Oltre il 10% sarebbe troppo alto"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "Correggi gli incorporamenti di YouTube",
            description: "Evita il blocco della visualizzazione dei video di YouTube in Discord (ad esempio da parte di UMG)"
        },
        followUser: {
            name: "SeguiUtente",
            description: "Aggiunge un'opzione di follow al menu contestuale dell'utente; ti assicura di essere sempre sullo stesso canale vocale",
            indicatorTooltip: "{{utente}} è seguito (fai clic per attivare manualmente, fai clic con il pulsante destro del mouse per smettere di seguire)",
            unknownUser: "Utente sconosciuto",
            option: {
                executeOnFollow: {
                    label: "Candidati quando segui",
                    description: "Quando segui un utente, assicurati che sia sullo stesso canale vocale"
                },
                onlyManualTrigger: {
                    label: "Solo attivazione manuale",
                    description: "Si attiva solo quando si fa clic sull'indicatore"
                },
                followLeave: {
                    label: "Quando le foglie seguite",
                    description: "Quando l'utente seguito se ne va, se ne va anche lui"
                },
                autoMoveBack: {
                    label: "Spostamento indietro automatico",
                    description: "Torna automaticamente al canale vocale dell'utente seguito quando ti sposti"
                },
                followUserId: {
                    label: "ID utente seguito",
                    description: "ID utente seguito"
                },
                channelFull: {
                    label: "Canale pieno",
                    description: "Se il canale non è più pieno, prova a spostarti lì"
                }
            },
            toast: {
                channelFull: "canale pieno",
                newVc: "L'utente seguito è passato a un nuovo canale vocale",
                insufficientPermissions: "Autorizzazione insufficiente per accedere al canale vocale",
                sameVc: "Sei già sullo stesso canale",
                disconnect: "L'utente seguito è uscito, disconnesso",
                notFollowing: "L'utente seguito se n'è andato, ma tu non hai smesso di seguire",
                notVc: "L'utente seguito non è sul canale vocale"
            },
            context: {
                follow: "Seguire",
                unfollow: "Smetti di seguire"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Installa qualsiasi carattere tramite Google Fonts",
            option: {
                selectedFont: {
                    label: "Carattere selezionato",
                    description: "Carattere attualmente selezionato"
                },
                fontSearch: {
                    label: "Ricerca caratteri",
                    description: "Cerca e seleziona i caratteri tramite Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Applica ai blocchi di codice",
                    description: "Applica il carattere ai blocchi di codice"
                }
            },
            toast: {
                failedLoad: "Impossibile caricare il carattere"
            },
            modal: {
                settings: {
                    title: "Google Fonts'ta Ara",
                    description: "Scegli un carattere da applicare",
                    placeholder: "Cerca caratteri...",
                    previewText: "Il paziente in pigiama si fidò subito dell'autista untuoso",
                    authors: "di {{autori}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Anche se il server è grande, mostra forzatamente la corona del proprietario del server accanto ai nomi utente."
        },
        forwardAnywhere: {
            name: "Avanti ovunque",
            description: "Se l'inoltro fallisce, invia il messaggio come un messaggio normale; Consente inoltre la trasmissione di contenuti NSFW.",
            option: {
                forwardPreface: {
                    label: "Prefisso di inoltro",
                    description: "Quale affermazione va aggiunta all'inizio del messaggio trasmesso?"
                }
            },
            context: {
                attachments: "allegati",
                forwarded: "Inoltrato da:"
            }
        },
        freaky: {
            name: "Capricciosa",
            description: "Il comando /freaky ti permette di inviare il tuo messaggio con un carattere strano.",
            command: {
                freaky: "Era strano.",
                message: "Invia il tuo messaggio con un carattere strano"
            },
            option: {
                addFreakyEnding: {
                    label: "Aggiungi finale strano",
                    description: "Aggiungi 👅 o ❤️ alla fine"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Cambio rapido frequente",
            description: "Sostituisce e filtra i risultati nella finestra di cambio rapido con i canali che usi più spesso."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Aggiunge un comando /friendcloud per visualizzare gli utenti con cui interagisci di più.",
            command: {
                friendcloud: {
                    description: "Visualizza la tua nuvola di amici",
                    count: "Numero di utenti da visualizzare",
                    mustHigher: "Il numero deve essere 1 o superiore!",
                    noAffinities: "Nessun dato di prossimità trovato. Controlla le tue [impostazioni sulla privacy](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Nessun utente valido trovato nei proxy. Controlla le tue [impostazioni sulla privacy](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Impossibile creare l'immagine :c"
                }
            }
        },
        friendCodes: {
            name: "Codici amico",
            description: "Genera codici amico per aggiungere facilmente amici",
            card: {
                expires: "Scadenza: <t:{{expiration}}:R> • {{uses}}/{{maxUses}} utilizzo",
                copy: "copia",
                copied: "Copiato!",
                codes: "I tuoi codici di amicizia",
                count: "Codici amico - {{invites}}",
                create: "Genera codice amicizia",
                revoke: "Annulla tutti i codici amico",
                loading: "Caricamento...",
                dontHave: "Non hai alcun codice amico."
            }
        },
        friendInvites: {
            name: "Inviti agli amici",
            description: "Crea e gestisci i collegamenti di invito agli amici con i comandi Slash (/crea invito di amici, /visualizza inviti di amici, /revoke inviti di amici).",
            command: {
                create: {
                    description: "Genera un collegamento di invito ad un amico.",
                    message: "discord.gg/{{code}}`\n· Scadenza: <t:{{expiration}}:R>\n· Utilizzo massimo: {{uses}}"
                },
                view: {
                    description: "Visualizza tutti i link di invito agli amici creati.",
                    message: "_discord.gg/{{code}}_\n· Scadenza: <t:{{expiration}}:R> \n· Numero di utilizzi: {{uses}}/{{maxUses}}",
                    noInvites: "Non hai un link di invito di amicizia attivo."
                },
                revoke: {
                    description: "Annulla tutti i collegamenti di invito agli amici creati.",
                    message: "Tutti i link di invito agli amici sono stati annullati."
                }
            }
        },
        friendshipRanks: {
            name: "Classifiche di amicizia",
            description: "Aggiunge badge che mostrano da quanto tempo sei amico di un utente.",
            badge: {
                sprout: {
                    name: "Germoglio",
                    description: "La tua amicizia sta appena sbocciando."
                },
                blooming: {
                    name: "Fioritura",
                    description: "La tua amicizia sta migliorando! (1 mese)"
                },
                burning: {
                    name: "Splendente",
                    description: "La tua amicizia ha raggiunto il suo apice. (3 mesi)"
                },
                fighter: {
                    name: "Combattente",
                    description: "La tua amicizia è forte. (6 mesi)"
                },
                star: {
                    name: "Stella",
                    description: "La vostra amicizia dura da molto tempo. (1 anno)"
                },
                royal: {
                    name: "Risultato",
                    description: "La tua amicizia ha superato ogni sfida: 2 anni!"
                },
                besties: {
                    name: "Migliore amico",
                    description: "Come si ottiene questo risultato??? (5 anni)"
                }
            }
        },
        friendsSince: {
            name: "AmiciSince",
            description: "Mostra quando l'utente è amico di qualcuno nel popup.",
            section: "Data di appuntamento"
        },
        friendTags: {
            name: "Tag degli amici",
            description: "Iniziare la ricerca con & ti consente di filtrare in base ai tag personalizzati nel menu di collegamento rapido.",
            modal: {
                name: "Nome",
                users: "Utenti (separati con virgole)",
                userlist: "Elenco utenti (fare clic su un utente per rimuoverlo)",
                remove: "Rimuovere",
                add: "Aggiungere",
                tag: "Biglietto",
                removeFrom: "Rimuovi da:",
                addTo: "Aggiungere a:"
            },
            option: {
                tagConfiguration: {
                    label: "Configurazione dell'etichetta",
                    description: "Componente di configurazione dei tag"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Rende il menu contestuale del messaggio nei risultati della ricerca del messaggio completo di tutte le opzioni che ti aspetteresti."
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Aggiunge funzionalità aggiuntive come il clic sinistro/destro sul tag utente nella casella di chat."
        },
        fullVCPFP: {
            name: "VCPFP completo",
            description: "Consente agli avatar di coprire l'intera casella di chat vocale.",
            option: {
                useServerProfileAvatars: {
                    label: "Utilizza gli avatar del profilo server",
                    description: "Utilizza gli avatar del profilo del relatore nelle caselle di chat vocale (se disponibile)"
                }
            }
        },
        gameActivityToggle: {
            name: "GiocoAttivitàAttiva/disattiva",
            description: "Aggiunge un interruttore al popup utente per mostrare o nascondere la tua attività di gioco.",
            tooltip: "Cambia evento di gioco",
            gameActivity: {
                enabled: "Evento di gioco abilitato",
                disabled: "Evento di gioco disabilitato"
            },
            option: {
                oldIcon: {
                    label: "icona antica",
                    description: "Utilizza il vecchio stile dell'icona prima della riprogettazione dell'icona Discord"
                },
                location: {
                    label: "Donne",
                    description: "Dove mostrare la chiave dell'evento di gioco",
                    panel: "Accanto a Disattiva/Microfono disattivato",
                    toolbox: "Plexcord nella casella degli strumenti"
                }
            }
        },
        ghosted: {
            name: "Fantasma",
            description: "Un simpatico fantasma appare accanto alle persone a cui non hai risposto ai messaggi diretti.",
            modal: {
                title: "Utenti fantasma",
                no: "Nessun utente fantasma",
                unghost: "allontana il fantasma",
                unknown: "sconosciuto",
                unnamedGroup: "Gruppo anonimo",
                unknownUser: "Utente sconosciuto",
                clearAll: "Cancella tutto",
                noGhost: "Non ci sono fantasmi qui!",
                clear: "chiaro"
            },
            option: {
                showIndicator: {
                    label: "Mostra indicatore",
                    description: "Mostra il contatore fantasma in cima all'elenco dei server."
                },
                showDmIcons: {
                    label: "Mostra icone DM",
                    description: "Mostra le icone fantasma accanto ai singoli DM."
                },
                ignoreGroupDms: {
                    label: "Ignora i messaggi diretti del gruppo",
                    description: "Mantiene tutti i messaggi del gruppo fuori dall'elenco dei fantasmi."
                },
                exemptedChannels: {
                    label: "Canali esenti",
                    description: "Elenco separato da virgole di ID canale (ID) che non saranno inclusi nella lista fantasma (fai clic con il pulsante destro del mouse su un canale DM per copiare l'ID)."
                },
                ignoreBots: {
                    label: "Ignora i bot",
                    description: "Ignora i messaggi diretti dei bot."
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Ti consente di creare raccolte GIF.",
            context: {
                copyImageLink: "Copia collegamento immagine",
                copyUrl: "Copia l'URL",
                collection: {
                    add: "Aggiungi alla raccolta",
                    gif: "Collezioni GIF",
                    delete: "Elimina raccolta",
                    create: "Crea raccolta",
                    remove: "Rimuovere",
                    information: "Informazioni sulla raccolta",
                    name: "Nome",
                    gifs: "Schiaffo",
                    created: "Data di creazione",
                    updated: "Ultimo aggiornamento",
                    close: "Trimestre",
                    rename: "Rinominare",
                    move: "Sposta nella raccolta",
                    select: "Seleziona la raccolta da spostare"
                },
                gif: {
                    information: "Informazioni",
                    added: "Data aggiunta",
                    width: "Larghezza",
                    height: "Altezza",
                    close: "Trimestre"
                }
            },
            option: {
                itemPrefix: {
                    label: "Prefisso articolo",
                    description: "Prefisso per elementi GIF"
                },
                collectionPrefix: {
                    label: "Prefisso della raccolta",
                    description: "Prefisso per le raccolte"
                },
                onlyShowCollections: {
                    label: "Mostra solo raccolte",
                    description: "Mostra solo le raccolte"
                },
                stopWarnings: {
                    label: "Interrompi gli avvisi",
                    description: "Interrompere gli avvisi di cancellazione"
                },
                showCopyImageLink: {
                    label: "Mostra l'opzione Copia collegamento immagine",
                    description: "Mostra {{copyImageLink}} nei menu contestuali"
                },
                preventDuplicates: {
                    label: "Prevenire le ricadute",
                    description: "Impedisci che la stessa GIF venga aggiunta più volte a una raccolta"
                },
                defaultEmptyCollectionImage: {
                    label: "Immagine di raccolta vuota predefinita",
                    description: "Immagine/GIF da mostrare quando non sono presenti immagini/GIF nella raccolta"
                },
                collectionsSortType: {
                    label: "Tipo di ordinamento della raccolta",
                    description: "Tipo di ordinamento delle raccolte"
                },
                collectionsSortOrder: {
                    label: "Ordinamento della raccolta",
                    description: "Ordinamento delle raccolte"
                },
                collectionsSort: {
                    label: "Ordina raccolte",
                    description: "Determinare come ordinare le raccolte",
                    title: "Ordina raccolte",
                    sortDescription: "Scegli un ordinamento in base alle tue collezioni",
                    sortBy: "Ordina per",
                    name: "Nome",
                    creationDate: "Data di creazione",
                    modifiedDate: "Data modificata",
                    ascending: "Crescente",
                    descending: "Decrescente"
                },
                importGifs: {
                    label: "Importa GIF",
                    description: "Importa raccolte",
                    button: "Importa raccolte"
                },
                exportGifs: {
                    label: "Esporta GIF",
                    description: "Esporta raccolte",
                    button: "Esporta raccolte"
                },
                resetCollections: {
                    label: "Reimposta raccolte",
                    description: "Ripristina le raccolte ai valori predefiniti (elimina tutte le raccolte)",
                    button: "Reimposta raccolte"
                }
            },
            toast: {
                copied: "Link immagine copiato negli appunti!",
                urlCopied: "URL copiato negli appunti!",
                already: "Questa raccolta esiste già",
                alreadyCollection: "Questa GIF esiste già nella raccolta"
            },
            modal: {
                create: {
                    title: "Crea raccolta",
                    name: "Nome della raccolta",
                    create: "Creare"
                },
                rename: {
                    title: "Rinomina raccolta",
                    name: "Nuovo nome della raccolta",
                    warning: "Il nome non può contenere più di 24 caratteri",
                    rename: "Rinominare"
                }
            },
            alert: {
                import: {
                    title: "Sei sicuro?",
                    body: "L'importazione delle raccolte sovrascrive le raccolte esistenti.",
                    confirm: "Iche Aktar",
                    cancel: "Cancellare"
                },
                reset: {
                    title: "Sei sicuro?",
                    body: "La reimpostazione delle raccolte rimuove tutte le raccolte.",
                    confirm: "reset",
                    cancel: "Cancellare"
                },
                delete: {
                    title: "Sei sicuro?",
                    deleteBody: "Vuoi davvero eliminare questa raccolta?",
                    removeBody: "Vuoi davvero rimuovere questo elemento?",
                    confirm: "Sil",
                    remove: "Rimuovere",
                    cancel: "Cancellare"
                }
            }
        },
        gifPaste: {
            name: "GifIncolla",
            description: "Ti consente di incollare GIF direttamente nella casella di chat."
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Aggiunge un comando che invia una GIF casuale dai tuoi preferiti; C'è una probabilità del 10% di taggare il proprietario del server!",
            command: {
                gifRoulette: {
                    description: "Tenta la fortuna e invia una GIF casuale"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Possibilità di taggare il proprietario del server",
                    description: "Imposta la possibilità di taggare il proprietario del server su 1 su 10 (oddio!)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Mostra i repository GitHub pubblici dell'utente sul suo profilo.",
            loading: "Caricamento in corso dei repository...",
            option: {
                showStars: {
                    label: "Mostra le stelle",
                    description: "Mostra le stelle del magazzino"
                },
                showLanguage: {
                    label: "Mostra lingua",
                    description: "Mostra il linguaggio di programmazione principale dei repository"
                },
                showInMiniProfile: {
                    label: "Mostra nel mini profilo",
                    description: "Mostra i repository nella finestra del mini profilo"
                },
                showRepositoryTab: {
                    label: "Mostra scheda Archivio",
                    description: "Mostra la scheda del repository nel profilo modale (nascondi il pulsante sui collegamenti quando abilitato)"
                }
            },
            error: {
                error: "Anche",
                render: "Errore: non è stato possibile visualizzare GithubRepos"
            },
            button: {
                show: "Mostra repository GitHub",
                repositories: "Repository GitHub",
                more: "Mostra altro",
                only: "Mostra solo i migliori {{length}}/{{total}}"
            },
            modal: {
                title: "Repository GitHub di {{utente}}",
                repository: "Deposito",
                description: "Spiegazione",
                language: "Dil",
                stars: "Stella",
                viewOnGitHub: "Visualizza su GitHub",
                close: "Trimestre"
            }
        },
        googleThat: {
            name: "GoogleQuello",
            description: "Aggiunge un comando che consente di inviare una connessione di ricerca Internet.",
            command: {
                googleThat: {
                    description: "Invia un collegamento al motore di ricerca",
                    query: "query di ricerca"
                }
            },
            option: {
                hyperlink: {
                    label: "Ponte",
                    description: "Indica se il collegamento inviato verrà inviato come collegamento ipertestuale con il tag di query"
                },
                embed: {
                    label: "Contenuto incorporato",
                    description: "Se visualizzare il collegamento inviato come contenuto incorporato"
                },
                defaultEngine: {
                    label: "Motore di ricerca predefinito",
                    description: "Motore di ricerca da utilizzare"
                },
                customEngineURL: {
                    label: "URL del motore di ricerca personalizzato",
                    description: "URL del motore di ricerca che desideri utilizzare"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "\"Saluta e saluta!\" Facendo clic con il pulsante destro del mouse potrai utilizzare l'adesivo di benvenuto che desideri invece di quello casuale.",
            mode: {
                greet: "Ciao",
                message: "Messaggio"
            },
            option: {
                greetMode: {
                    label: "Modalità di saluto",
                    description: "Seleziona la modalità di saluto",
                    greet: "Saluto (puoi inviare il saluto solo 3 volte)",
                    message: "Messaggio (puoi inviare saluti illimitati)"
                }
            },
            context: {
                label: "Selettore adesivo di auguri",
                mode: "Modalità di saluto",
                stickers: "Adesivi di auguri",
                multi: "Saluti multipli",
                send: "Invia Ciao"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Aggiunge un menu contestuale che ti consente di esportare e scaricare emoji e adesivi di un server.",
            context: {
                download: {
                    emoji: "Scarica Emoji",
                    sticker: "Scarica adesivi"
                }
            }
        },
        guildTagSettings: {
            name: "Impostazioni tag gilda",
            description: "Aggiunge le impostazioni dei tag del server, come nascondere i tag del server o disabilitare la richiesta di utilizzare i tag.",
            option: {
                hideTags: {
                    label: "Nascondi tag",
                    description: "Rende invisibili i tag del server"
                },
                disableAdoptTagPrompt: {
                    label: "Chiudi avviso reclamo tag",
                    description: "Disabilita la richiesta di utilizzare (richiedere) il tag del server"
                }
            }
        },
        hideChatButtons: {
            name: "NascondipulsantiChat",
            description: "Ti consente di nascondere i pulsanti della chat.",
            tooltip: {
                close: "Trimestre",
                open: "Affamato"
            },
            option: {
                color: {
                    label: "Colore",
                    description: "Mostra in rosso quando è acceso"
                },
                open: {
                    label: "Aprire",
                    description: "Attivo per impostazione predefinita"
                }
            }
        },
        hideMedia: {
            name: "NascondiMedia",
            description: "Ti consente di nascondere allegati e contenuti incorporati in determinati messaggi con un pulsante che appare al passaggio del mouse.",
            show: "Mostra contenuti multimediali",
            hide: "Nascondi file multimediali",
            hidden: "Media nascosti"
        },
        hideMessages: {
            name: "Nascondi messaggi",
            description: "Nasconde temporaneamente i messaggi fino al riavvio.",
            button: {
                hide: "nascondere"
            },
            option: {
                hidePopoverButton: {
                    label: "Nascondi pulsante popover",
                    description: "Nasconde il pulsante Nascondi nel popover del messaggio."
                }
            }
        },
        hideServers: {
            name: "HideServer",
            description: "Nasconde i server dall'elenco dei server",
            context: {
                hide: "Nascondi server",
                unhide: "Mostra server",
                folder: {
                    hide: "Nascondi cartella",
                    unhide: "Mostra cartella"
                }
            },
            option: {
                showIndicator: {
                    label: "Mostra indicatori",
                    description: "Mostra menu in basso per mostrare i server nascosti nell'elenco"
                },
                guildsList: {
                    label: "Elenco server",
                    description: "Rimuovi i server nascosti"
                },
                resetHidden: {
                    label: "Ripristina i server nascosti",
                    description: "Rimuovi tutti i server nascosti dall'elenco",
                    button: "Ripristina i server nascosti"
                }
            },
            button: {
                hidden: "Nascosto",
                hiddenServers: "Server nascosti",
                remove: "Rimuovere",
                folder: "Cartella",
                removeAll: "Rimuovi tutto",
                guilds: "Server",
                noHiddenServers: "Nessun server nascosto"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes ti consente di salvare i messaggi",
            main: "BENE",
            button: {
                tooltip: "Note Sacre",
                save: "Salva nota",
                cancel: "Cancellare",
                noteMessage: "Nota messaggio",
                refresh: "Aggiorna avatar",
                import: "Importa note",
                export: "Esporta note",
                deleteAll: "Elimina tutte le note",
                delete: "Elimina taccuino",
                create: "Crea taccuino",
                copyText: "Copia testo",
                copyAttachment: "Copia l'URL dell'allegato",
                deleteNote: "Notu Sil",
                moveNote: "Sposta nota",
                moveTo: "Sposta in {{key}}",
                copyId: "Copia documento d'identità"
            },
            modal: {
                error: {
                    generic: "Si è verificato un errore durante l'elaborazione dei tuoi voti. Controlla la console per i dettagli.",
                    easter: "Nessuna nota trovata. La banana dell’empatia è con te.",
                    empty: "Non ci sono note salvate in questo taccuino."
                },
                help: {
                    title: "Aiuto",
                    description: "Impara come usare le note sacre",
                    addingNotes: "Aggiunta di note",
                    addingNotesText: "Per aggiungere una nota, fai clic con il pulsante destro del mouse su un messaggio, seleziona \"Messaggio nota\" e seleziona il taccuino a cui desideri aggiungere la nota.",
                    prototype: "Prototipo",
                    noteMessage: "Un clic sul pulsante \"Nota messaggio\" lo aggiunge al registro principale per impostazione predefinita!",
                    deletingNotes: "Non Silme",
                    deletingNotesText: "Per eliminare una nota, puoi fare clic con il pulsante destro del mouse e selezionare \"Elimina nota\" oppure tenere premuto il tasto \"CANC\" sulla tastiera e fare clic sulla nota.",
                    movingNotes: "Spostare una nota",
                    movingNotesText: "Per spostare una nota, fai clic con il pulsante destro del mouse e seleziona il taccuino che desideri spostare dall'opzione \"Sposta nota\".",
                    jumpToMessage: "Vai a Messaggio",
                    jumpToMessageText: "Per andare al messaggio a cui appartiene una nota, fai clic con il pulsante destro del mouse sulla nota e seleziona \"Vai al messaggio\"."
                },
                notebook: {
                    title: "TACCUINO",
                    search: "Cerca un messaggio...",
                    options: "Opzioni di ordinamento",
                    label: "Menù di ordinamento",
                    filteredOf: "{{filteredCount}}/{{noteCount}} no",
                    note: "{{noteCount}} no",
                    ada: "Data ascendente/aggiunta",
                    amd: "Data ascendente/messaggio",
                    dda: "Data discendente/aggiunta",
                    dmd: "Discendente/Data del messaggio",
                    change: "Cambia ordinamento",
                    ascending: "Crescente",
                    descending: "Decrescente",
                    dateAdded: "Data aggiunta",
                    messageDate: "Data del messaggio"
                },
                create: {
                    title: "Crea taccuino",
                    description: "Immettere il nome del nuovo taccuino",
                    placeholder: "Nome del taccuino"
                },
                delete: {
                    title: "{{notebookName}} Silinsin Mi?",
                    description: "{{noteCount}} nota verrà eliminata definitivamente",
                    button: "Sil"
                },
                tabs: {
                    label: "Schede del taccuino"
                }
            },
            toast: {
                saved: "Il messaggio è stato aggiunto con successo a {{notebook}}.",
                deleted: "La nota è stata eliminata con successo da {{notebook}}.",
                moved: "La nota è stata spostata con successo dal taccuino {{from}} al taccuino {{to}}.",
                exists: "Il taccuino denominato {{notebookName}} esiste già.",
                created: "{{notebookName}} è stato creato correttamente.",
                deletedNotebook: "{{notebookName}} è stato eliminato con successo.",
                refreshed: "Gli avatar sono stati aggiornati con successo.",
                deletedAll: "Tutte le note sono state eliminate con successo.",
                imported: "Le note sono state importate con successo.",
                invalid: "Impossibile importare le note."
            },
            toolbox: {
                action: "Apri note"
            }
        },
        homeTyping: {
            name: "HomeDigitazione",
            description: "Se qualcuno sta scrivendo nei tuoi messaggi diretti, trasforma il pulsante Home in un indicatore di scrittura."
        },
        iconViewer: {
            name: "Visualizzatore di icone",
            description: "Aggiunge una nuova scheda nelle impostazioni per visualizzare in anteprima tutte le icone.",
            toolbox: "Apri la scheda Icone",
            iconFinder: "Trova icone",
            about: {
                title: "Caratteristiche",
                preview: "Icone di anteprima",
                list: {
                    copy: "Copia i nomi delle icone e le variabili CSS",
                    download: "Scarica icone in diversi formati (SVG, PNG, GIF, ecc.)",
                    premade: "Copia i risultati delle icone già pronte per i tuoi plugin",
                    find: "Trova le icone in base al contesto della funzione",
                    search: "Cerca i colori facendo clic con il pulsante destro del mouse sul nome del colore",
                    special: "un ringraziamento speciale"
                }
            },
            context: {
                icon: {
                    options: "Opzioni dell'icona",
                    log: "Stampa su console (registro)",
                    save: "Salva con nome...",
                    rightClick: "Fare clic con il tasto destro sull'icona da sostituire",
                    usage: "Utilizzo",
                    click: "Fare clic per copiare",
                    copied: "Copiato!",
                    actions: "Azioni"
                }
            },
            modal: {
                label: "Ricerca per contesto della funzione",
                search: "Cerca tra {{count}} simboli...",
                function: "Funzione",
                iconViewer: {
                    colors: "Colori del visualizzatore di icone",
                    unknown: "sconosciuto",
                }
            }
        },
        idleAutoRestart: {
            name: "Riavvio automatico inattivo",
            description: "Riavvia automaticamente l'app quando sei inattivo per un determinato periodo di tempo, ma impedisce il riavvio quando sei nel canale audio.",
            option: {
                isEnabled: {
                    label: "Efficace",
                    description: "Abilita il riavvio automatico dopo l'inattività"
                },
                idleMinutes: {
                    label: "Tempo di inattività (minuti)",
                    description: "Tempo di inattività prima del riavvio (non sul canale audio)"
                }
            },
            toolbox: {
                disable: "Disabilita il riavvio automatico",
                enable: "Abilita il riavvio automatico"
            }
        },
        ignoreActivities: {
            name: "Ignora attività",
            description: "Impedisce che gli eventi vengano visualizzati solo nello stato. Puoi specificare quali ignorare nelle schede Partite salvate ed Eventi oppure utilizzare le impostazioni generali di seguito.",
            modal: {
                import: {
                    title: "Importa l'ID app del plug-in CustomRPC nell'elenco dei filtri"
                },
                filter: {
                    title: "Elenco filtri",
                    description: "Elenco separato da virgole di ID evento da filtrare (utile per filtrare eventi RPC specifici e CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "L'ID dell'applicazione CustomRPC non è impostato.",
                    alreadyAdded: "L'ID dell'applicazione CustomRPC è già stato aggiunto."
                }
            },
            button: {
                import: "Importa ID RPC personalizzato"
            },
            option: {
                importCustomRPC: {
                    label: "CustomRPC'yi Altro"
                },
                listMode: {
                    label: "Modalità elenco",
                    description: "Scegli come applicare l'elenco dei filtri",
                    blacklist: "Lista nera (ignora solo quelli presenti nell'elenco)",
                    whitelist: "Lista bianca (ignora tutti tranne quelli nell'elenco)"
                },
                idList: {
                    label: "Elenco ID"
                },
                ignorePlaying: {
                    label: "Ignora ciò che viene riprodotto",
                    description: "Ignora tutti gli eventi giocati (solitamente eventi di gioco e RPC)"
                },
                ignoreStreaming: {
                    label: "Ignora i post",
                    description: "Ignora tutti gli eventi trasmessi"
                },
                ignoreListening: {
                    label: "Ignora gli ascoltatori",
                    description: "Ignora tutti gli eventi di ascolto (di solito eventi Spotify)"
                },
                ignoreWatching: {
                    label: "Ignora visualizzato",
                    description: "Ignora tutti gli eventi di monitoraggio"
                },
                ignoreCompeting: {
                    label: "Ignora gli eventi competitivi",
                    description: "Ignora tutti gli eventi competitivi (competizione) (solitamente eventi di gioco personalizzati)"
                },
                ignoredActivities: {
                    label: "Eventi ignorati"
                }
            }
        },
        ignoreCalls: {
            name: "Ignora chiamate",
            description: "Ti consente di ignorare le chiamate di utenti o gruppi DM specifici.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Utenti permanentemente ignorati",
                    description: "ID utente (virgül + boşluk) che dovrebbero essere permanentemente ignorati"
                }
            },
            button: {
                ignore: "Ok, dimmi",
                temporarilyIgnore: "Ignora temporaneamente",
                permanentlyIgnore: "Ignora permanentemente"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Nascondere i messaggi da \"potenziali spammer\"."
        },
        imageFilename: {
            name: "Nomefileimmagine",
            description: "Mostra il nome del file come descrizione comando quando si passa sopra immagini e GIF.",
            option: {
                showFullUrl: {
                    label: "Mostra URL completo",
                    description: "Mostra l'URL completo dell'immagine anziché solo il nome del file. È sempre abilitato per le GIF perché di solito non hanno un nome file significativo."
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Non nasconde mai i collegamenti visivi, anche se nei messaggi è presente solo un collegamento immagine."
        },
        imageZoom: {
            name: "Zoom immagine",
            description: "Ti consente di ingrandire immagini e GIF, nonché di visualizzare i metadati delle immagini. Ingrandisci utilizzando la rotellina del mouse, aumenta il raggio dell'obiettivo con Maiusc + rotellina del mouse.",
            option: {
                saveZoomValues: {
                    label: "Salva valori di zoom",
                    description: "Determina se i valori di zoom e dimensione dell'obiettivo vengono salvati"
                },
                invertScroll: {
                    label: "Scorrimento inverso",
                    description: "Inverte la direzione di scorrimento del mouse"
                },
                nearestNeighbour: {
                    label: "Il vicino più vicino",
                    description: "Utilizza l'interpolazione del vicino più vicino durante il ridimensionamento delle immagini"
                },
                square: {
                    label: "Proteggere",
                    description: "Trasforma la lente in una forma quadrata"
                },
                zoom: {
                    label: "Zoom",
                    description: "Rapporto di zoom dell'obiettivo"
                },
                size: {
                    label: "Dimensione",
                    description: "Raggio/dimensione della lente"
                },
                zoomSpeed: {
                    label: "Velocità dello zoom",
                    description: "Determina la velocità di modifica delle dimensioni dello zoom/obiettivo"
                },
                showMetadata: {
                    label: "Mostra metadati",
                    description: "Mostra i metadati quando si fa doppio clic sull'immagine selezionata"
                }
            },
            context: {
                square: "Lente quadrata",
                nearest: "Ingrandimento pixelato",
                zoom: "Zoom",
                size: "Dimensione dell'obiettivo",
                zoomSpeed: "Velocità dello zoom",
                showImageMetadata: "Mostra metadati immagine",
                view: "Visualizza metadati",
                loading: "Caricamento...",
                unknown: "sconosciuto",
                sizeHTML: "Dimensione",
                dimensions: "Dimensioni",
                filename: "Nome del file"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Aggiunge il comando /imgtogif per convertire qualsiasi immagine in GIF",
            command: {
                imgToGif: {
                    description: "Ti consente di convertire un'immagine in GIF",
                    image: "Attacco visivo da utilizzare",
                    width: "Larghezza GIF",
                    height: "altezza gif"
                }
            },
            error: {
                noImage: "Nessuna immagine specificata!",
                notImage: "Il file caricato non è un'immagine"
            }
        },
        implicitRelationships: {
            name: "Relazioni implicite",
            description: "Mostra le tue relazioni indirette nella scheda Amici.",
            option: {
                sortByAffinity: {
                    label: "Ordina per vicinanza",
                    description: "Determina se le relazioni indirette sono ordinate in base alla loro vicinanza all'utente."
                }
            },
            implicit: "Indiretto"
        },
        inRole: {
            name: "InRole",
            description: "Scopri chi ricopre un ruolo utilizzando il menu contestuale del ruolo o il comando /inrole (leggi le informazioni sul plugin!)",
            command: {
                inrole: {
                    description: "Scopri chi ha un ruolo",
                    role: "Ruolo",
                    noGuild: "Assicurati di essere su un server."
                }
            },
            context: {
                view: "Visualizza i membri nel ruolo"
            },
            modal: {
                about: {
                    title: "Limitazioni",
                    description: "Se non disponi di permessi di moderazione sul server e il server è grande (più di 100 membri), il plugin potrebbe essere limitato nei seguenti modi:",
                    list: {
                        one: "I membri offline non verranno elencati",
                        two: "Per impostazione predefinita, verrà elencato un massimo di 100 membri. Scorri verso il basso l'elenco dei membri per vedere più membri.",
                        three: "Ma i tuoi amici verranno sempre mostrati indipendentemente dal loro stato."
                    }
                },
                member: {
                    title: "Membri nel ruolo",
                    noMembers: "Non è stato trovato nessun membro memorizzato nella cache online con questo ruolo. Prova a scorrere l'elenco dei membri per memorizzare nella cache più utenti!"
                }
            }
        },
        instantScreenshare: {
            name: "Condivisione schermo istantaneo",
            description: "Quando ti unisci a un canale audio, puoi condividere immediatamente lo schermo con il supporto per sorgenti desktop, finestre e dispositivi di input video (fotocamere, schede di acquisizione).",
            modal: {
                linux: {
                    title: "Per Linux",
                    body: "Se utilizzi Wayland, attiva solo l'opzione di condivisione dello schermo.",
                    bodyTwo: "Potrebbe funzionare o meno per X11 :shrug:"
                },
                videoDevices: {
                    title: "Dispositivi di ingresso video",
                    body: "Supporta fotocamere e schede di acquisizione (ad esempio Elgato HD60X) se abilitato nelle impostazioni."
                },
                regardingSound: {
                    title: "Informazioni sulle impostazioni dell'audio e dell'anteprima",
                    body: "Utilizziamo le stesse impostazioni utilizzate da Discord per visualizzare l'anteprima dello streaming e decidere se abilitare l'audio."
                }
            },
            option: {
                streamMedia: {
                    label: "Fonte multimediale da rilasciare",
                    description: "Se non viene trovato, viene ripristinata la schermata principale.",
                    loading: "Caricamento delle fonti multimediali...",
                    none: "Nessuna fonte multimediale trovata",
                    placeholder: "Scegli una fonte multimediale da pubblicare"
                },
                includeVideoDevices: {
                    label: "Includi dispositivi video",
                    description: "Includere i dispositivi di input video (fotocamere, schede di acquisizione) nell'elenco delle sorgenti"
                },
                autoMute: {
                    label: "Disattivazione automatica",
                    description: "Disattiva automaticamente il microfono quando ti unisci a un canale vocale"
                },
                autoDeafen: {
                    label: "Autoassordante",
                    description: "Assorda automaticamente quando ti unisci a un canale vocale (ti disattiva anche l'audio)"
                },
                instantScreenshare: {
                    label: "Condivisione istantanea dello schermo",
                    description: "Abilita la funzione di condivisione automatica dello schermo"
                },
                keybindScreenshare: {
                    label: "Condivisione dello schermo con tasto di scelta rapida",
                    description: "Condivide lo schermo con il tasto di scelta rapida nelle impostazioni dei tasti di scelta rapida Discord"
                },
                focusDiscord: {
                    label: "Concentrarsi sulla discordia",
                    description: "Avvia la condivisione dello schermo con la combinazione di tasti solo quando Discord è attivo"
                },
                toolboxManagement: {
                    label: "Gestione della casella degli strumenti",
                    description: "Abilita/Disabilita la condivisione istantanea dello schermo"
                }
            },
            toolbox: {
                label: "Condivisione istantanea dello schermo",
                toast: "Condivisione istantanea dello schermo {{state}}",
                enabled: "Efficace",
                disabled: "Disabilitato"
            }
        },
        invisibleChat: {
            name: "Chat invisibile",
            description: "Crittografa i tuoi messaggi senza attirare sospetti!",
            option: {
                savedPasswords: {
                    label: "Password salvate",
                    description: "Password salvate (separate da virgole)"
                }
            },
            button: {
                encrypt: "Crittografa il messaggio",
                decrypt: "Decifrare il messaggio",
                hidden: "Indicatore di messaggi nascosti (InvisibleChat)"
            },
            tooltip: {
                hidden: "C'è un messaggio nascosto in questo messaggio! (Chat invisibile)"
            },
            embed: {
                title: "Messaggio decifrato",
                footer: "Inviato tramite InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Crittografa il messaggio",
                    secret: "Messaggio segreto",
                    cover: "Copertina (2 o più parole!!)",
                    password: "Password",
                    dontUseCover: "Utilizzando una copertura",
                    send: "Inviare",
                    cancel: "Cancellare"
                },
                decrypt: {
                    title: "Decifrare il messaggio",
                    with: "Messaggio crittografato",
                    password: "Password",
                    decrypt: "Decifrare",
                    cancel: "Cancellare"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Ti consente di modificare i valori predefiniti durante la creazione degli inviti al server.",
            option: {
                inviteDuration: {
                    label: "Durata dell'invito",
                    description: "Durata predefinita per gli inviti al server",
                    thirtyMinutes: "30 minuti",
                    oneHour: "1 momento",
                    sixHours: "6 Momenti",
                    twelveHours: "12 Momenti",
                    oneDay: "1 giorno",
                    sevenDays: "7 giorni",
                    forever: "Indefinito"
                },
                maxUses: {
                    label: "Utilizzo massimo",
                    description: "Utilizzo massimo predefinito per gli inviti al server",
                    unlimited: "Illimitato",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Iscrizione temporanea",
                    description: "Impostazione di iscrizione temporanea predefinita per gli inviti al server"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Rende unici i colori dei nomi utente nella chat, come nei client IRC.",
            option: {
                lightness: {
                    label: "Luminoso",
                    description: "Rapporto di luminosità (%). Se i colori sembrano troppo chiari o scuri, cambiali."
                },
                memberListColors: {
                    label: "Colori dell'elenco dei membri",
                    description: "Cambia i colori dei ruoli nell'elenco dei membri."
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Applica solo agli utenti senza colore",
                    description: "Applica il colore agli utenti il ​​cui colore non è predefinito."
                },
                applyColorOnlyInDms: {
                    label: "Applicare solo nei messaggi privati",
                    description: "Applica i colori solo ai messaggi privati; applicazione sui server."
                }
            }
        },
        iRememberYou: {
            name: "Mi ricordo di te",
            description: "Registra localmente tutti coloro con cui comunichi (inclusi i server), proteggendoli da eventuali perdite.",
            section: {
                description: "Mostra l'elenco dei proprietari dei server che hai menzionato, a cui hai risposto, di cui sei membro (proprietario del server*) o dei membri dei server su cui ti trovi.",
                empty: "Attualmente vuoto.",
                tooltip: "{{user}} aggiornato su {{updatedAtContent}}",
                owner: "Proprietario del server",
                iRememberYou: "Mi ricordo di te"
            },
            context: {
                user: "Opzioni utente",
                copy: "Copia l'ID utente",
                copyToast: "ID utente copiato negli appunti",
                view: "Visualizza profilo"
            },
            modal: {
                title: "Regolatore",
                filter: "Filtra per tag, nome utente o ID",
                button: {
                    validate: "Verifica e salva",
                    cancel: "Cancellare",
                    openEditor: "Apri Editor",
                    resetData: "Reimposta dati",
                    sure: "Sei sicuro?"
                }
            }
        },
        jumpTo: {
            name: "Vai a",
            description: "Aggiunge opzioni al menu contestuale per passare all'inizio o alla fine di un canale o di un messaggio privato.",
            context: {
                top: "Vai al primo post",
                bottom: "Vai all'ultimo messaggio",
                noMessages: "Nessun messaggio trovato da questo utente in questo canale.",
                searchFailed: "Si è verificato un errore durante la ricerca dei messaggi."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Quando si cambia account o si carica Discord, tenta di tornare al canale su cui ti trovavi."
        },
        keyboardSounds: {
            name: "Suoni della tastiera",
            description: "OperaGX o osu durante la digitazione con la tastiera! Aggiunge effetti sonori.",
            option: {
                volume: {
                    label: "Livello sonoro",
                    description: "La tastiera suona a volume"
                },
                soundPack: {
                    label: "Pacchetto audio",
                    description: "Pacchetto suoni da utilizzare per i suoni della tastiera",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "Notifica parola chiave",
            description: "Invia notifiche sui messaggi che corrispondono a determinate parole chiave o espressioni regex.",
            idHolder: "ID",
            keywordEntry: "Inserimento di parole chiave",
            regexHolder: "esempio|regex",
            ignoreCase: "Senza distinzione tra maiuscole e minuscole",
            whiteblackLabel: "Lista bianca/Lista nera",
            tab: {
                title: "Parole chiave",
                clearAll: "Cancella tutto"
            },
            button: {
                addId: "ID Ekle",
                addKeyword: "Aggiungi voce parola chiave"
            },
            listTypeSelector: {
                blacklist: "Lista nera",
                whitelist: "Lista bianca",
                placeholder: "Scegli un tipo di elenco"
            },
            option: {
                ignoreBots: {
                    label: "Ignora i bot",
                    description: "Ignora i messaggi dei bot"
                },
                amountToKeep: {
                    label: "Importo da salvare",
                    description: "Numero di messaggi da conservare nel registro"
                },
                keywords: {
                    label: "Parole chiave",
                    description: "Gestisci le parole chiave"
                }
            }
        },
        lastOnline: {
            name: "UltimoOnline",
            description: "Aggiunge un ultimo indicatore online sotto i nomi utente nell'elenco DM, negli elenchi dei membri DM del server e del gruppo.",
            unit: {
                d: "giorno",
                h: "momento",
                m: "minuti"
            },
            online: "{{formattedTime}} era online prima"
        },
        listenBrainzRPC: {
            name: "AscoltaBrainzRPC",
            description: "ListenBrainz è un piccolo plugin per una ricca presenza.",
            about: {
                title: "Informazioni sull'API MusicBrainz",
                description: "L'API MusicBrainz non richiede una chiave API, ma richiede un {{link}}. Per la maggior parte degli utenti è sufficiente un indirizzo e-mail.",
                userAgent: "una stringa significativa dell'agente utente"
            },
            option: {
                username: {
                    label: "Nome utente",
                    description: "Nome utente ListenBrainz"
                },
                mbContact: {
                    label: "Contatto MB",
                    description: "Informazioni di contatto di ListenBrainz"
                },
                shareUsername: {
                    label: "Condividi nome utente",
                    description: "Mostra il collegamento al profilo ListenBrainz (visibile solo ad altri utenti)"
                },
                shareSong: {
                    label: "Condividi la canzone",
                    description: "Mostra il collegamento al brano corrente su ListenBrainz (visibile solo ad altri utenti)"
                },
                hideWithSpotify: {
                    label: "Nascondi mentre Spotify è attivo",
                    description: "Nascondi lo stato di ListenBrainz se Spotify è in esecuzione"
                },
                hideWithActivity: {
                    label: "Nascondi se ci sono altri eventi",
                    description: "Nascondi lo stato di ListenBrainz se hai un altro stato"
                },
                useTimeBar: {
                    label: "Usa la barra del tempo",
                    description: "Mostra la durata della traccia come barra del tempo (è necessario utilizzare lo stato di ascolto)"
                },
                statusName: {
                    label: "Nome dello stato",
                    description: "Testo dell'eccezione"
                },
                nameFormat: {
                    label: "Formato nome",
                    description: "Come visualizzare il nome del brano e dell'artista nel nome dello stato",
                    custom: "Utilizza testo di stato personalizzato",
                    artistSong: "utilizzare il formato \"artista - canzone\".",
                    songArtist: "utilizzare il formato \"canzone - artista\".",
                    artistOnly: "Usa semplicemente il nome dell'artista",
                    songOnly: "Usa semplicemente il nome della canzone",
                    albumName: "Utilizza il nome dell'album (restituisce il testo dell'eccezione se il brano non ha un album)"
                },
                useListeningStatus: {
                    label: "Utilizza lo stato di ascolto",
                    description: "Mostra lo stato \"In ascolto\" anziché \"In riproduzione\""
                },
                missingArt: {
                    label: "Immagine di copertina mancante",
                    description: "Quando manca l'album o la copertina dell'album",
                    listenbrainzLogo: "Utilizza il grande logo ListenBrainz",
                    generic: "Utilizza un segnaposto generico"
                },
                useLogo: {
                    label: "Il logo Kullan",
                    description: "Mostra il logo ListenBrainz sulla copertina dell'album"
                }
            }
        },
        loadingQuotes: {
            name: "Caricamento citazioni",
            description: "Modifica le quote di caricamento di Discord",
            option: {
                replaceEvents: {
                    label: "Cambia eventi",
                    description: "Questo plugin dovrebbe essere applicato anche durante eventi con citazioni a tema eventi speciali? (ad esempio Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Abilita le virgolette dei plugin",
                    description: "Abilita le citazioni preparate da questo plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Abilita le virgolette Discord",
                    description: "Abilita le citazioni predefinite di Discord (comprese le citazioni degli eventi, durante gli eventi)"
                },
                additionalQuotes: {
                    label: "Citazioni aggiuntive",
                    description: "Le virgolette speciali aggiuntive che potrebbero apparire sono separate dal seguente separatore"
                },
                additionalQuotesDelimiter: {
                    label: "Separatore di virgolette aggiuntive",
                    description: "Separatore per preventivi aggiuntivi"
                }
            }
        },
        loginWithQR: {
            name: "AccediConQR",
            description: "Proprio come sul cellulare, la scansione del codice QR di accesso ti consente di accedere su un altro dispositivo!",
            option: {
                scanQr: {
                    label: "Scansiona il codice QR",
                    description: "Scansiona un codice QR",
                    notEnabled: "Attiva il plug-in e riavvia il client per scansionare un codice QR di accesso"
                }
            },
            neverScan: "Non scansionare mai un codice QR di accesso da un altro utente o app.",
            hold: "Tenere premuto per confermare l'immissione",
            scanning: "Scansione...",
            stopScanning: "Interrompi la scansione",
            usingWebcam: "Scansione utilizzando la webcam",
            dragDrop: "Trascina e rilascia un'immagine qui o fai clic per selezionare un'immagine",
            orPaste: "Oppure incolla un'immagine dagli appunti!"
        },
        mediaPlaybackSpeed: {
            name: "Velocità di riproduzione multimediale",
            description: "Consente di modificare la velocità di riproduzione (predefinita) degli incorporamenti multimediali.",
            playbackSpeed: "Velocità di riproduzione",
            context: {
                label: "Controllo della velocità di riproduzione"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Tariffa segreteria telefonica predefinita",
                    description: "Messaggi vocali"
                },
                defaultVideoSpeed: {
                    label: "Velocità video predefinita",
                    description: "Video"
                },
                defaultAudioSpeed: {
                    label: "Frequenza audio predefinita",
                    description: "file audio"
                }
            }
        },
        memberCount: {
            name: "Conteggio membri",
            description: "Mostra il numero di membri online sul server, i membri totali e gli utenti nei canali vocali, nell'elenco dei membri e nel suggerimento.",
            option: {
                toolTip: {
                    label: "Suggerimento strumento",
                    description: "Mostra il conteggio dei membri nella descrizione comando del server"
                },
                memberList: {
                    label: "Elenco dei membri",
                    description: "Mostra il numero di membri nella parte superiore dell'elenco dei membri"
                },
                voiceActivity: {
                    label: "Attività vocale",
                    description: "Mostra il numero di utenti sui canali vocali"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} è online su questo canale",
            totalMembers: "{{formattedTotalCount}} membri totali sul server",
            totalVoice: "Membro su {{formattedVoiceCount}} canali vocali"
        },
        mentionAvatars: {
            name: "Menzione Avatar",
            description: "Mostra gli avatar degli utenti e le icone dei ruoli all'interno delle menzioni.",
            option: {
                showAtSymbol: {
                    label: "Mostra icona @",
                    description: "Determina se il simbolo @ viene visualizzato nelle menzioni dell'utente."
                }
            }
        },
        meow: {
            name: "Miao",
            description: "Aggiunge un pulsante alla barra della chat per miagolare nella chat.",
            button: {
                meow: "Miyav"
            }
        },
        messageBurst: {
            name: "MessaggioBurst",
            description: "Unisce i messaggi inviati entro un certo periodo di tempo con il tuo messaggio precedente, a meno che qualcun altro non abbia inviato un messaggio prima di te.",
            option: {
                timePeriod: {
                    label: "Intervallo di tempo",
                    description: "Tempo di unione (in secondi)."
                },
                shouldMergeWithAttachment: {
                    label: "Combina con allegati",
                    description: "I messaggi devono essere uniti se nell'ultimo messaggio è presente un allegato (file/immagine)?"
                },
                useSpace: {
                    label: "Usa lo spazio",
                    description: "Se aggiungere spazi tra i messaggi invece di spostarsi su una nuova riga durante l'unione."
                }
            }
        },
        messageClickActions: {
            name: "Azioni clic sul messaggio",
            description: "Tenendo premuto il tasto Backspace e facendo clic è possibile eliminare, fare doppio clic per modificare o rispondere.",
            option: {
                singleClickAction: {
                    label: "Azione con un clic",
                    description: "Azione con un solo clic (sui tuoi messaggi)"
                },
                singleClickModifier: {
                    label: "Modificatore con un clic",
                    description: "Modificatore richiesto per l'azione con un clic (nei tuoi messaggi)"
                },
                singleClickOthersAction: {
                    label: "Azione con un clic (Altro)",
                    description: "Azione con un solo clic (sui messaggi degli altri)"
                },
                singleClickOthersModifier: {
                    label: "Modificatore con un clic (Altri)",
                    description: "Modificatore richiesto per l'azione con clic singolo (nei post di altri)"
                },
                doubleClickAction: {
                    label: "Azione doppio clic",
                    description: "Azione con doppio clic sui tuoi messaggi"
                },
                doubleClickOthersAction: {
                    label: "Azione doppio clic (altro)",
                    description: "Azione con doppio tocco sui messaggi degli altri"
                },
                doubleClickModifier: {
                    label: "Modificatore doppio clic",
                    description: "Modificatore richiesto per l'azione del doppio clic"
                },
                tripleClickAction: {
                    label: "Azione con tre clic",
                    description: "Azione con tre clic"
                },
                tripleClickModifier: {
                    label: "Modificatore a tre clic",
                    description: "Modificatore richiesto per tre azioni di clic"
                },
                reactEmoji: {
                    label: "Emoji di reazione",
                    description: "Emoji da utilizzare per le azioni di reazione"
                },
                addAdditionalReacts: {
                    label: "Aggiungi ulteriori reazioni",
                    description: "Aggiungi anche ulteriori emoji di reazione configurati"
                },
                additionalReactEmojis: {
                    label: "Emoji di reazione aggiuntivi",
                    description: "Emoji aggiuntivi da aggiungere quando si utilizza l'azione di reazione (separati da virgola/invio, massimo {{count}})"
                },
                disableInDms: {
                    label: "Disabilita nei DM",
                    description: "Disabilita tutte le azioni di clic nei messaggi diretti"
                },
                disableInSystemDms: {
                    label: "Disabilita nei DM di sistema",
                    description: "Disabilita tutte le azioni di clic nei messaggi diretti di sistema"
                },
                clickTimeout: {
                    label: "Fare clic su Timeout",
                    description: "Timeout (ms) per distinguere i clic doppi/tripli"
                },
                doubleClickHoldThreshold: {
                    label: "Soglia di conservazione del doppio clic",
                    description: "Tempo di attesa massimo (ms) per le azioni di doppio clic. Consente di mantenere la selezione del testo più a lungo"
                },
                deferDoubleClickForTriple: {
                    label: "Ritarda il doppio clic per il triplo clic",
                    description: "Ritarda il doppio clic per consentire le azioni del triplo clic (il triplo clic è disabilitato se disattivato)"
                },
                selectionHoldTimeout: {
                    label: "Timeout attesa selezione",
                    description: "Timeout (ms) per consentire la selezione del testo"
                },
                quoteWithReply: {
                    label: "Rispondi con citazione",
                    description: "Quando citi, rispondi anche al messaggio"
                },
                useSelectionForQuote: {
                    label: "Usa la selezione per il preventivo",
                    description: "Quando citi, usa il testo selezionato (se disponibile)"
                }
            },
            actions: {
                none: "Nessuno",
                delete: "Sil",
                copyLink: "Copia collegamento",
                copyID: "Copia documento d'identità",
                copyContent: "Copia contenuto",
                copyUserID: "Copia l'ID utente",
                edit: "Modificare",
                reply: "Rispondere",
                react: "Reagire",
                openThread: "Apri argomento",
                openTab: "Apri nella scheda",
                quote: "citazione",
                pin: "Appuntalo"
            },
            missingPermissions: {
                react: "Impossibile reagire: autorizzazioni mancanti",
                pin: "Impossibile risolvere: autorizzazioni mancanti",
            },
            cannotQuote: "Questo tipo di messaggio non può essere citato",
            copy: {
                messageId: "L'ID del messaggio è stato copiato!",
                messageContent: "Contenuto del messaggio copiato!",
                userId: "L'ID utente è stato copiato!"
            },
            linkCopied: "Link copiato!"
        },
        messageColors: {
            name: "Colori dei messaggi",
            description: "Mostra i codici colore nei messaggi, ad esempio #FF0042.",
            option: {
                renderType: {
                    label: "Tipo di visualizzazione",
                    description: "Determina la modalità di visualizzazione dei colori",
                    textColor: "colore del testo",
                    block: "blocco accanto a",
                    backgroundColor: "colore di sfondo"
                },
                enableShortHexCodes: {
                    label: "Abilita codici esadecimali brevi",
                    description: "Abilita codici esadecimali di 3 caratteri come #39f"
                },
                blockView: {
                    label: "Tipo di vista blocco",
                    description: "Determina la modalità di visualizzazione dei blocchi colore",
                    right: "Lato destro",
                    left: "Sinistra",
                    both: "entrambi i lati"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Mostra quanto tempo impiega il caricamento dei messaggi del canale corrente.",
            option: {
                showIcon: {
                    label: "Mostra icona",
                    description: "Mostra l'icona del tempo di caricamento nella barra dei messaggi"
                },
                showMs: {
                    label: "Mostra millisecondi",
                    description: "Mostra i millisecondi nel tempo"
                },
                iconColor: {
                    label: "Colore dell'icona",
                    description: "Colore dell'icona (valore del colore CSS)"
                }
            },
            loaded: "Messaggi caricati in {{time}}ms ({{timeAgo}})",
            day: "giorni fa",
            hour: "ore fa",
            minute: "minuti fa",
            justNow: "Ora"
        },
        messageLatency: {
            name: "Latenza dei messaggi",
            description: "Aggiunge un indicatore per i messaggi che impiegano ≥n secondi per essere inviati.",
            day: "giorno",
            days: "giorno",
            hour: "momento",
            hours: "momento",
            minute: "minuti",
            minutes: "minuti",
            second: "secondo",
            seconds: "secondo",
            millisecond: "millisecondo",
            milliseconds: "millisecondo",
            and: "ve",
            oldKotlinDetected: "Si sospetta che l'utente utilizzi un client Android Discord obsoleto.",
            ahead: "Il tempo di questo utente è {{delta}} avanti.",
            delay: "Questo messaggio è stato inviato con un ritardo di {{delta}}.",
            delayedMessage: "Messaggio ritardato",
            oldAndroidClient: "Client Android Discord precedente",
            option: {
                latency: {
                    label: "Ritardo",
                    description: "Valore di soglia in secondi per l'indicatore di ritardo"
                },
                detectDiscordKotlin: {
                    label: "Rileva Discord Kotlin",
                    description: "Rileva vecchi client Discord Android"
                },
                showMillis: {
                    label: "Mostra millisecondi",
                    description: "Mostra millisecondi"
                },
                ignoreSelf: {
                    label: "Ignoro me stesso",
                    description: "Aggiungi indicatori ai tuoi messaggi"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Aggiunge un'anteprima ai messaggi che contengono un collegamento a un altro messaggio.",
            option: {
                messageBackgroundColor: {
                    label: "Colore di sfondo del messaggio",
                    description: "Colore di sfondo per i messaggi negli incorporamenti avanzati"
                },
                automodEmbeds: {
                    label: "Sepolture Automod",
                    description: "Utilizza incorporamenti automod invece di incorporamenti ricchi (più piccoli ma contenenti meno informazioni)",
                    always: "Utilizza sempre gli incorporamenti automatici",
                    prefer: "Preferisci gli incorporamenti Automod, ma utilizza gli incorporamenti avanzati se alcuni contenuti non possono essere visualizzati",
                    never: "Non utilizzare mai gli incorporamenti automod"
                },
                listMode: {
                    label: "Modalità elenco",
                    description: "Determina se l'elenco ID verrà utilizzato come lista nera o lista bianca",
                    blacklist: "Lista nera",
                    whitelist: "Lista bianca"
                },
                idList: {
                    label: "Elenco ID",
                    description: "ID server/canale/utente da aggiungere alla blacklist o alla whitelist (separati da virgola)"
                },
                clearMessageCache: {
                    label: "Cancella cache dei messaggi",
                    description: "Cancella la cache dei messaggi collegati"
                }
            },
            noContent: {
                noAttachments: "nessun contenuto {{count}} messaggio incorporato",
                noEmbeds: "nessuna aggiunta di {{count}} contenuto",
                both: "nessun contenuto, {{attachments}} allegati e {{embeds}} messaggi incorporati"
            },
            dm: "Messaggio privato",
            groupDm: "Messaggio di gruppo",
            server: "Presentatore"
        },
        messageLinkTooltip: {
            name: "MessaggioLinkTooltip",
            description: "Aggiunge una descrizione comando e un'anteprima del messaggio al passaggio del mouse sui collegamenti ai messaggi, alle risposte e ai messaggi inoltrati.",
            loading: "Caricamento...",
            option: {
                onLink: {
                    label: "Su Collegamento",
                    description: "Mostra la descrizione comando al passaggio del mouse sui collegamenti ai messaggi"
                },
                onReply: {
                    label: "In risposta",
                    description: "Mostra la descrizione comando al passaggio del mouse sulle risposte ai messaggi"
                },
                onForward: {
                    label: "Sul messaggio trasmesso",
                    description: "Mostra la descrizione comando al passaggio del mouse sui messaggi inoltrati"
                },
                display: {
                    label: "Aspetto",
                    description: "Stile di aspetto",
                    auto: "Uguale al messaggio",
                    compact: "Compatto",
                    cozy: "Comodo"
                }
            }
        },
        messageLogger: {
            name: "Registratore di messaggi",
            description: "Salva temporaneamente i messaggi eliminati e modificati.",
            removeMessage: "Rimuovi la cronologia dei messaggi",
            removeMessageTemporary: "Rimuovi messaggio (temporaneo)",
            clearMessageLog: "Cancella registro messaggi",
            modal: {
                edit: {
                    title: "Cronologia modifiche messaggi",
                    tooltip: "Questo stato di modifica non può essere visualizzato perché non è stato salvato."
                }
            },
            option: {
                deleteStyle: {
                    label: "Cancella stile",
                    description: "Stile di aspetto dei messaggi eliminati",
                    text: "testo rosso",
                    overlay: "rivestimento rosso"
                },
                logDeletes: {
                    label: "Salva eliminato",
                    description: "Determina se i messaggi eliminati vengono salvati o meno"
                },
                collapseDeleted: {
                    label: "Comprimi Eliminato",
                    description: "Perfeziona i messaggi eliminati in modo simile ai messaggi bloccati"
                },
                logEdits: {
                    label: "Salva modificato",
                    description: "Determina se salvare i messaggi modificati"
                },
                inlineEdits: {
                    label: "Modifiche in linea",
                    description: "Mostra la cronologia delle modifiche come parte del contenuto del messaggio"
                },
                ignoreBots: {
                    label: "Ignora i bot",
                    description: "Ignora i messaggi inviati dai bot"
                },
                ignoreSelf: {
                    label: "Ignoro me stesso",
                    description: "Ignora i tuoi messaggi"
                },
                ignoreUsers: {
                    label: "Ignora gli utenti",
                    description: "Elenco separato da virgole di ID utente da ignorare"
                },
                ignoreChannels: {
                    label: "Ignora canali",
                    description: "Elenco separato da virgole di ID canale da ignorare"
                },
                ignoreGuilds: {
                    label: "Ignora i server",
                    description: "Elenco separato da virgole di ID server da ignorare"
                },
                showEditDiffs: {
                    label: "Mostra differenze di modifica",
                    description: "Mostra le differenze tra le versioni dei messaggi modificati"
                },
                separatedDiffs: {
                    label: "Differenze divise",
                    description: "Fornisce una visualizzazione più leggibile mostrando aggiunte ed eliminazioni separatamente nelle differenze"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Migliora il plugin MessageLogger con funzionalità aggiuntive.",
            updateImageCacheDir: "La directory della cache visiva è stata aggiornata correttamente.",
            updateLogsDir: "La directory dei log è stata aggiornata correttamente.",
            failedUpdate: "Impossibile aggiornare la directory.",
            blacklist: "Lista nera",
            whitelist: "Lista bianca",
            failedToRemove: "Impossibile rimuovere il messaggio",
            successfullyImported: "I registri sono stati importati correttamente.",
            errorImportingLogs: "Si è verificato un errore durante l'importazione dei registri. Controlla la console per ulteriori informazioni.",
            importing: "Importazione...",
            importLogs: "Importa registri",
            exporting: "Esportazione...",
            exportLogs: "Esporta registri",
            alert: {
                clearLogs: {
                    title: "Cancella registri",
                    body: "Sei sicuro di voler cancellare tutti i registri?",
                    confirmText: "chiaro",
                    cancel: "Cancellare"
                },
                clearVisibleLogs: {
                    title: "Cancella registri visibili",
                    body: "Sei sicuro di voler cancellare i log di {{messages}}?",
                    confirmText: "chiaro",
                    cancel: "Cancellare"
                },
                cleared: "Il database del registro dei messaggi e la cache sono stati cancellati."
            },
            context: {
                title: "Registro dei messaggi",
                jumpToMessage: "Vai a Messaggio",
                openUserProfile: "Apri profilo utente",
                copyContent: "Copia contenuto",
                copyUserId: "Copia l'ID utente",
                copyMessageId: "Copia ID messaggio",
                copyChannelId: "Copia l'ID del canale",
                copyServerId: "Copia l'ID del server",
                deleteLog: "Elimina registro",
                fromUsernameDm: "Dai messaggi diretti di {{username}}",
                fromGroupDm: "{{channelName}} DM del gruppo",
                fromServerChannel: "Dal canale {{channelName}} sul server {{serverName}}",
                moveTypeTo: "Sposta {{type}} a {{destination}}",
                removeTypeFrom: "Rimuovi {{type}} da {{list}}",
                openLogsFor: "Apri log per {{name}}",
                openLogs: "Apri registri",
                removeMessage: "Rimuovi messaggio (permanente)",
                removeMessageHistory: "Rimuovi cronologia messaggi (permanente)",
                deleteMessageHide: "Elimina messaggio (nascondi dai registratori di messaggi)",
                addServerToBlacklist: "Aggiungi server alla lista nera",
                addServerToWhitelist: "Aggiungi il server alla lista bianca",
                removeServerFromBlacklist: "Rimuovi il server dalla lista nera",
                removeServerFromWhitelist: "Rimuovi il server dalla lista bianca",
                moveServerToBlacklist: "Sposta il server nella lista nera",
                moveServerToWhitelist: "Sposta il server nella lista bianca",
                addUserToBlacklist: "Aggiungi utente alla lista nera",
                addUserToWhitelist: "Aggiungi utente alla lista bianca",
                removeUserFromBlacklist: "Rimuovi l'utente dalla lista nera",
                removeUserFromWhitelist: "Rimuovi utente dalla lista bianca",
                moveUserToBlacklist: "Sposta l'utente nella lista nera",
                moveUserToWhitelist: "Sposta l'utente nella lista bianca",
                addChannelToBlacklist: "Aggiungi canale alla lista nera",
                addChannelToWhitelist: "Aggiungi canale alla lista bianca",
                removeChannelFromBlacklist: "Rimuovi il canale dalla lista nera",
                removeChannelFromWhitelist: "Rimuovi il canale dalla lista bianca",
                moveChannelToBlacklist: "Sposta il canale nella lista nera",
                moveChannelToWhitelist: "Sposta il canale nella lista bianca"
            },
            type: {
                server: "Presentatore",
                user: "Utente",
                channel: "Canale"
            },
            button: {
                chooseFolder: "Seleziona Cartella",
                browse: "Gozat",
                clearLogs: "Cancella tutti i registri",
                clearVisibleLogs: "Cancella registri visibili",
                sortOldest: "Ordina dal più vecchio al più recente",
                sortNewest: "Ordina dal più recente al più vecchio",
                loadMore: "Carica altro",
                noResults: "Nessun risultato nella scheda {{tab}}",
                tryOtherTabs: "Prova le schede {{nextTab}} o {{lastTab}}",
                importLogs: "Importa registri"
            },
            modal: {
                title: "Filtra messaggi",
                deleted: "Eliminato",
                edited: "Organizzato",
                ghostPing: "Ping invisibile",
                empty: "Vuoto, eh",
                importLogs: "ML Enhanced ora salva i log in IndexedDB. Devi importare i tuoi vecchi log dalla directory dei log. L'importazione non modifica i log esistenti."
            },
            clear: {
                title: "Cancella registri",
                description: "Sei sicuro di voler cancellare tutti i registri?",
                confirm: "chiaro",
                cancel: "Cancellare"
            },
            option: {
                saveMessages: {
                    label: "Salva messaggi",
                    description: "Determina se i messaggi eliminati e modificati vengono salvati o meno."
                },
                saveImages: {
                    label: "Salva immagini",
                    description: "Salva gli allegati eliminati."
                },
                sortNewest: {
                    label: "Ordina dal più recente al più vecchio",
                    description: "Ordina i log in base al più recente."
                },
                cacheMessagesFromServers: {
                    label: "Messaggi nella cache dai server",
                    description: "Di solito il logger registra solo gli ID e i DM inseriti nella whitelist, abilitando questa opzione registrerà anche i messaggi su tutti i server. Tuttavia, ciò potrebbe superare il limite della cache e causare il salto di alcuni messaggi."
                },
                ignoreBots: {
                    label: "Ignora i bot",
                    description: "Ignora i messaggi del bot."
                },
                ignoreWebhooks: {
                    label: "Webhookları Yoksay",
                    description: "Ignora i messaggi webhook."
                },
                ignoreSelf: {
                    label: "Ignoro me stesso",
                    description: "Ignora i tuoi messaggi."
                },
                ignoreMutedGuilds: {
                    label: "Ignora i server disattivati",
                    description: "I messaggi sui server disattivati ​​non vengono registrati. Tuttavia, gli utenti/canali autorizzati vengono comunque registrati."
                },
                ignoreMutedCategories: {
                    label: "Ignora le categorie disattivate",
                    description: "I messaggi nei canali appartenenti alle categorie disattivate non vengono registrati."
                },
                ignoreMutedChannels: {
                    label: "Ignora i canali disattivati",
                    description: "I messaggi sui canali silenziati non vengono registrati."
                },
                alwaysLogDirectMessages: {
                    label: "Salva sempre i messaggi diretti",
                    description: "Salva sempre i messaggi diretti."
                },
                alwaysLogCurrentChannel: {
                    label: "Salva sempre il canale corrente",
                    description: "Salva sempre il canale corrente. Sono esclusi i canali/utenti inseriti nella lista nera."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Elimina definitivamente il registro per impostazione predefinita",
                    description: "Nel menu contestuale principale di MessageLogger, l'opzione di rimozione dal registro dei messaggi è predefinita per l'eliminazione permanente."
                },
                hideMessageFromMessageLoggers: {
                    label: "Nascondi il messaggio dai logger",
                    description: "Quando abilitato, aggiunge un'opzione del menu contestuale per nascondere i messaggi da altri logger. Potrebbe non essere sicuro, usalo a tuo rischio e pericolo."
                },
                showLogsButton: {
                    label: "Mostra pulsante di registro",
                    description: "Determina se la barra degli strumenti viene visualizzata o meno."
                },
                showWhereMessageIsFrom: {
                    label: "Mostra origine del messaggio",
                    description: "Mostra il canale/autore e il nome del server del messaggio."
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Numero di messaggi da mostrare contemporaneamente nei registri",
                    description: "Determina il numero di messaggi da mostrare nei registri alla volta e la quantità da aggiungere quando vengono caricati più messaggi."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Contenuto del messaggio nascosto dai registratori di messaggi",
                    description: "Viene utilizzato il contenuto per sostituire il messaggio quando viene nascosto dai registratori di messaggi."
                },
                messageLimit: {
                    label: "Limite dei messaggi",
                    description: "Numero massimo di messaggi da salvare. Quando viene superato il limite, i vecchi messaggi vengono eliminati. 0 = illimitato."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Limite dimensione allegato (MB)",
                    description: "Dimensione massima (in MB) degli allegati da salvare. Gli allegati più grandi di questo valore non verranno salvati."
                },
                attachmentFileExtensions: {
                    label: "Estensioni di file aggiuntive",
                    description: "Un elenco separato da virgole di estensioni di file da salvare. Se lasciato vuoto, tutti gli allegati vengono salvati."
                },
                cacheLimit: {
                    label: "Limite della cache",
                    description: "Numero massimo di messaggi da conservare nella cache. Quando viene superato il limite, i vecchi messaggi vengono eliminati."
                },
                timeBasedCleanupMinutes: {
                    label: "Pulizia minuto basata sul tempo",
                    description: "Intervallo in minuti in cui verrà eseguita la pulizia in base al tempo dei messaggi più vecchi del limite di messaggi."
                },
                preserveCurrentChannel: {
                    label: "Mantieni il canale corrente",
                    description: "Se abilitato, i messaggi sul canale attualmente selezionato non sono interessati dalla pulizia basata sul tempo."
                },
                whitelistedIds: {
                    label: "ID della lista bianca",
                    description: "Server, canali o ID utente autorizzati."
                },
                blacklistedIds: {
                    label: "ID della lista nera",
                    description: "Server, canali o ID utente inseriti nella lista nera."
                },
                imageCacheDir: {
                    label: "Directory della cache visiva",
                    description: "Seleziona la directory delle immagini salvate."
                },
                logsDir: {
                    label: "Indice del registro",
                    description: "Seleziona la directory in cui verranno salvati i registri."
                },
                importLogs: {
                    label: "Importa registri",
                    description: "Importa i log dal file."
                },
                exportLogs: {
                    label: "Esporta registri",
                    description: "Esporta i log da IndexedDB."
                },
                openLogs: {
                    label: "Apri registri",
                    description: "Apri i registri."
                },
                openImageCacheFolder: {
                    label: "Apri la cartella Cache visiva",
                    description: "Apre la directory della cache visiva."
                },
                clearLogs: {
                    label: "Cancella registri",
                    description: "Cancella registri.",
                    title: "Cancella registri",
                    body: "Sei sicuro di voler cancellare tutti i registri?",
                    confirmText: "chiaro",
                    cancel: "Cancellare"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Ricevi notifiche quando gli utenti selezionati inviano messaggi",
            dm: "messaggio privato",
            option: {
                users: {
                    label: "Utenti",
                    description: "Elenco separato da virgole di ID utente per ricevere notifiche di messaggi",
                    invalidId: "{{id}} non è un ID utente valido"
                }
            },
            notification: {
                title: "{{nome utente}} ha inviato un messaggio",
                body: "Fai clic per andare a {{locationName}}"
            }
        },
        messageTags: {
            name: "Tag dei messaggi",
            description: "Ti permette di salvare i messaggi e utilizzarli con un semplice comando.",
            notExist: "Il tag **{{tagname}}** non è più disponibile! Riavvia Discord per risolverlo :)",
            alreadyExist: "Esiste già un tag denominato **{{tagname}}**!",
            sentTag: "Il tag **{{tagname}}** è stato inviato!",
            successCreate: "**{{tagname}}** tag creato con successo!",
            allTags: "Tutti i tag:",
            noTags: "UPS! Non ci sono ancora tag, usa /tag create per crearli!",
            noDeleteTag: "Un tag denominato **{{tagname}}** non è stato trovato, quindi non può essere eliminato!",
            successDelete: "Tag **{{name}}** eliminato con successo!",
            tagPreview: "Un tag chiamato **{{name}}** non esiste!",
            option: {
                clyde: {
                    label: "Messaggio di Clyde nel post",
                    description: "Una volta abilitato, Clyde ti invierà un messaggio temporaneo quando viene utilizzato un tag."
                },
                tagsList: {
                    label: "Elenco dei tag",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Gestisci i tuoi tag",
                    option: {
                        create: {
                            description: "Crea una nuova etichetta",
                            name: "Nome del tag che attiverà la risposta",
                            message: "Il messaggio che verrà inviato quando utilizzi questo hashtag"
                        },
                        list: {
                            description: "Elenca tutti i tag"
                        },
                        delete: {
                            description: "Elimina un tag",
                            name: "Nome del tag da eliminare"
                        },
                        preview: {
                            description: "Visualizza l'anteprima di un tag senza pubblicarlo pubblicamente",
                            name: "Nome del tag da visualizzare in anteprima"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Aggiunge l'icona del test del circuito del microfono al pannello utente",
            button: "Ciclo di prova del microfono"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Vari miglioramenti al clic centrale (rotellina del mouse), come l'incollatura e l'apertura dei collegamenti.",
            option: {
                openScope: {
                    label: "Ambito di apertura",
                    description: "Impedisce l'apertura di questi tipi di contenuto quando si fa clic con il pulsante centrale.",
                    links: "Collegamenti",
                    media: "Media",
                    linksAndMedia: "Link e media",
                    none: "Nessuno"
                },
                pasteScope: {
                    label: "Ambito di legame",
                    description: "In alcuni casi, il clic centrale impedisce di incollare.",
                    always: "Blocca sempre Incolla con il clic centrale",
                    focus: "Blocca solo quando l'area di testo non è focalizzata",
                },
                pasteThreshold: {
                    label: "Soglia di legame",
                    description: "I millisecondi necessari per incollare e riattivare dopo il clic centrale."
                }
            }
        },
        moreCommands: {
            name: "Altri comandi",
            description: "Echo, Lenny, Mock e altri",
            command: {
                echo: {
                    description: "Invia un messaggio come Clyde (locale)"
                },
                lenny: {
                    description: "Manda una faccia da Lenny"
                },
                mock: {
                    description: "Prende in giro le persone (mOcK PeOpLe)"
                },
                wordcount: {
                    description: "Calcola il numero di parole in un messaggio",
                    response: "Il messaggio contiene {{count}} parole."
                },
                flipcoin: {
                    description: "Lancia una moneta e restituisce il risultato",
                    heads: "Scrivere",
                    tails: "Tura",
                    response: "I soldi {{result}} sono arrivati."
                },
                ask: {
                    description: "Chiede e risponde a domande sì/no",
                    yes: "SÌ",
                    no: "NO",
                    maybe: "Forse",
                    askAgain: "chiedi di nuovo più tardi",
                    definitelyNot: "Assolutamente no",
                    itIsCertain: "Assolutamente sì"
                },
                randomanimal: {
                    description: "Restituisce un'immagine di un animale casuale",
                    animal: "scegli il tuo animale",
                    cat: "gatto",
                    dog: "cane",
                    response: "Siamo spiacenti, al momento non è possibile recuperare immagini di animali"
                },
                randomnumber: {
                    description: "Genera un numero casuale tra due valori",
                    min: "Minimo",
                    max: "valore massimo",
                    response: "Numero casuale compreso tra {{min}} e {{max}}: {{number}}"
                },
                choose: {
                    description: "Ne sceglie una a caso tra le opzioni fornite",
                    option: "Elenco di opzioni separate da virgole",
                    response: "La mia scelta: {{choice}}"
                },
                systeminfo: {
                    description: "Mostra le informazioni di sistema",
                    platform: "Piattaforma",
                    deviceType: "Tipo di dispositivo",
                    mobile: "Mobile",
                    desktop: "scrivania",
                    browser: "Scanner",
                    cpuCores: "Core della CPU",
                    memory: "Memoria",
                    screen: "Schermo",
                    languages: "Dil",
                    network: "Bianco",
                    online: "in linea",
                    offline: "non in linea",
                    failedToFetch: "Impossibile recuperare le informazioni di sistema",
                    unknown: "sconosciuto"
                },
                getuptime: {
                    description: "Mostra il tempo di attività del client",
                    response: "**Tempo di attività del client**: {{uptime}} minuti"
                },
                gettime: {
                    description: "Mostra l'ora corrente",
                    response: "Ora corrente: {{time}}"
                },
                transform: {
                    description: "Trasforma il testo in base all'opzione specificata",
                    transformation: {
                        description: "Il tipo di trasformazione da applicare al testo",
                        lowercase: "Converti il ​​testo in minuscolo",
                        uppercase: "Converti il ​​testo in maiuscolo",
                        localeLowercase: "Converti il ​​testo in minuscolo nativo",
                        localeUppercase: "Converti il ​​testo in maiuscolo nativo",
                        same: "lascialo lo stesso"
                    },
                    repeat: "Quante volte verrà ripetuto?",
                    reverse: "Se invertire il testo",
                    normalize: {
                        description: "Formato di normalizzazione del testo",
                        nfc: "Formato di normalizzazione C (NFC)",
                        nfd: "Modulo di normalizzazione D (NFD)",
                        nfkc: "Formato di normalizzazione KC (NFKC)",
                        nfkd: "Formato di normalizzazione KD (NFKD)"
                    },
                    text: "Testo da convertire"
                }
            }
        },
        moreKaomoji: {
            name: "Ancora Kaomoji",
            description: "Aggiunge più Kaomoji a Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "Altre reazioni rapide",
            description: "Migliora i pulsanti di risposta rapida nel menu contestuale del messaggio.",
            option: {
                reactionCount: {
                    label: "Numero di reazioni",
                    description: "Numero di reazioni da mostrare (0-42)"
                },
                frequentEmojis: {
                    label: "Emoji usati frequentemente",
                    description: "Utilizza gli emoji usati di frequente invece degli emoji preferiti"
                },
                rows: {
                    label: "Vendono",
                    description: "Numero di righe di reazioni rapide da mostrare"
                },
                columns: {
                    label: "Colonne",
                    description: "Numero di colonne di reazioni rapide da mostrare"
                },
                compactMode: {
                    label: "Modello compatto",
                    description: "Ridimensiona i pulsanti al 75% della loro dimensione originale mentre ingrandisce l'emoji interna al 125%. Le emoji avranno una dimensione pari al 93,75% dell'originale. Si consiglia di utilizzare almeno 5 colonne"
                },
                scroll: {
                    label: "scorrere",
                    description: "Abilita l'elenco di emoji a scorrimento"
                }
            }
        },
        moreUserTags: {
            name: "Altri tag utente",
            description: "Aggiunge tag per webhook e ruoli di moderazione (proprietario, amministratore, ecc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Questo utente è un webhook"
                },
                owner: {
                    name: "Proprietario",
                    description: "Proprietario del server"
                },
                admin: {
                    name: "Ammin",
                    description: "Dispone dell'autorità di amministratore"
                },
                staff: {
                    name: "Ufficiale",
                    description: "Può gestire server, canali o ruoli"
                },
                mod: {
                    name: "Mod",
                    description: "Può gestire messaggi o cacciare/bannare contatti"
                },
                vcmod: {
                    name: "Vedi mod",
                    description: "Può gestire le chat vocali"
                },
                chatmod: {
                    name: "Modalità chat",
                    description: "Può gestire i messaggi"
                }
            },
            modal: {
                example: "Esempio",
                tag: "Biglietto",
                customTextPlaceholder: "Testo sull'etichetta (impostazione predefinita: {{displayName}})",
                messages: "Mostra nei messaggi",
                memberList: "Mostra nell'elenco dei membri e nei profili"
            },
            option: {
                dontShowForBots: {
                    label: "Non mostrare ai bot",
                    description: "Mostra tag aggiuntivi per i bot (eccetto webhook)"
                },
                dontShowBotTag: {
                    label: "Mostra tag bot",
                    description: "Mostra solo tag aggiuntivi/Nascondi [APP]"
                },
                showWebhookTagFully: {
                    label: "Mostra il tag webhook completo",
                    description: "Mostra il tag webhook completo nei canali seguiti (ad esempio annunci)"
                },
                tagSettings: {
                    label: "Impostazioni dei tag",
                    description: "da riempire"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Un comando per tradurre da o verso il codice morse.",
            command: {
                morse: {
                    description: "Traduce da o verso il codice morse",
                    message: "Testo da convertire"
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
                    label: "Qualità",
                    description: "🗿🗿🗿 qualità",
                    normal: "Normale",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Attiva quando fuori fuoco",
                    description: "Attiva 🗿 anche se la finestra non è a fuoco"
                },
                ignoreBots: {
                    label: "Ignora i bot",
                    description: "Ignora i messaggi dei bot"
                },
                ignoreBlocked: {
                    label: "Ignora gli utenti bloccati",
                    description: "Ignora i messaggi degli utenti bloccati"
                }
            }
        },
        musicControls: {
            name: "Controlli musicali",
            description: "Controlli musicali e testi per più servizi",
            option: {
                SpotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Mostra i controlli Spotify",
                    description: "Mostra i controlli musicali per Spotify"
                },
                showSpotifyLyrics: {
                    label: "Mostra i testi di Spotify",
                    description: "Mostra testi per Spotify"
                },
                useSpotifyUris: {
                    label: "Utilizza gli URI di Spotify",
                    description: "Spotify apre gli URI anziché gli URL. Funziona solo se Spotify è installato e potrebbe non funzionare su tutte le piattaforme"
                },
                previousButtonRestartsTrack: {
                    label: "Il pulsante Precedente riavvia la song",
                    description: "Se il tempo di riproduzione è superiore a 3 secondi, premendo il pulsante precedente si avvia il brano corrente dall'inizio"
                },
                TidalSectionTitle: {
                    label: "Marea"
                },
                showTidalControls: {
                    label: "Mostra controlli delle maree",
                    description: "Mostra i controlli musicali per Tidal"
                },
                showTidalLyrics: {
                    label: "Mostra i testi di Tidal",
                    description: "Mostra il testo di Tidal"
                },
                YtmSectionTitle: {
                    label: "YouTube Musica",
                    description: "Per questa impostazione è necessaria {{app}}"
                },
                showYoutubeMusicControls: {
                    label: "Mostra i controlli musicali di YouTube",
                    description: "Mostra i controlli musicali per YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL dell'API YouTube Music",
                    description: "L'URL del server API di YouTube Music che stai utilizzando"
                },
                hoverControls: {
                    label: "Controlli al passaggio del mouse",
                    description: "Mostra i controlli al passaggio del mouse"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "Mostra le note se non ci sono testi",
                    description: "Mostra l'icona della nota quando il testo non viene trovato"
                },
                LyricsPosition: {
                    label: "Posizione lirica",
                    description: "Posizione del pannello dei testi",
                    above: "Sopra i giocatori",
                    below: "Sotto Giocatori"
                },
                LyricsProvider: {
                    label: "Fornitore di testi",
                    description: "Fonte dei testi",
                    spotify: "Spotify (abbinamento musicale)",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "Traduci nella tua lingua",
                    description: "Traduci testi: la modifica di questa opzione cancella le traduzioni esistenti",
                    cleared: "Traduzione pulita"
                },
                LyricsConversion: {
                    label: "Conversione lirica",
                    description: "Traduci o romanizza automaticamente i testi",
                    none: "Nessuno",
                    translate: "Convertire",
                    romanize: "Romanizzare et"
                },
                FallbackProvider: {
                    label: "Fornitore di backup",
                    description: "Se un fornitore di testi fallisce, provane un altro"
                },
                ShowFailedToasts: {
                    label: "Mostra notifiche di errore",
                    description: "Mostra una notifica quando il testo non viene caricato"
                },
                PurgeLyricsCache: {
                    label: "Cancella cache dei testi",
                    description: "Elimina tutti i testi e le traduzioni memorizzati nella cache",
                    button: "Cancella cache",
                    cacheLyricsPurged: "La cache dei testi è stata svuotata"
                }
            },
            context: {
                spotify: {
                    label: "Menu dei testi di Spotify",
                    type: "Menu Spotify {{tipo}}",
                    copy: "Copia il nome {{type}}",
                    link: "Copia il collegamento {{type}}",
                    open: "Apri {{type}} in Spotify",
                    album: "Menu dell'album Spotify"
                },
                tidal: {
                    label: "Menu dei testi delle maree",
                    lyrics: "Testi di marea",
                    type: "Menu Tidal {{name}}",
                    copy: "Copia nome {{nome}}",
                    open: "Apri {{name}} su Tidal",
                    album: "Menù dell'album delle maree"
                },
                ytm: {
                    type: "Menu di YouTube Music {{name}}",
                    copy: "Copia nome {{nome}}",
                    open: "{{name}}'i YouTube Music'te Aç",
                    album: "Menu dell'album musicale di YouTube",
                    muted: "Disattivato"
                },
                lyrics: {
                    provider: "Fornitore di testi",
                    saved: "registrato",
                    notFound: "Testi sincroni non trovati"
                },
                copy: {
                    currentLyrics: "Copia i testi attuali"
                }
            },
            alert: {
                lyricCopied: "Testi copiati negli appunti!",
                noLyrics: "nessun testo",
                noLyricsTo: "Nessun testo per {{translated}}",
                translate: "traduzione",
                romanize: "non romanizzare",
                lyricsFetchFailed: "Impossibile trovare il testo",
                failedToFetchLyrics: "Impossibile recuperare {{translated}}",
                translation: "traduzione",
                romanization: "romanizzazione",
                failedToFetchTranslation: "Impossibile ottenere la traduzione del testo {{translated}}"
            },
            modal: {
                install: {
                    title: "Come installare",
                    install: "{{link}} installa da qui, poi vai alle impostazioni di TidaLuna → Negozi di componenti aggiuntivi → installa @vmohammad/api",
                    tidaluna: "Niente Luna"
                },
                player: {
                    noPlaying: "Non c'è traccia in riproduzione",
                    artist: "Artista:",
                    album: "Album:",
                    noLyrics: "Testo non trovato :(",
                    progress: "Progressi",
                    totalDuration: "Durata totale"
                },
                type: {
                    song: "Canzone",
                    artist: "Artista",
                    album: "Album"
                },
                album: {
                    open: "Apri l'album",
                    viewCover: "Visualizza la copertina dell'album",
                    volume: "Volume",
                    image: "Immagine dell'album"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Tradotto",
                romanized: "Romanizzato",
                none: "Nessuno"
            },
            error: {
                failed: "Impossibile creare la finestra :(",
                checkConsole: "Controlla la presenza di errori nella console",
                invalidUrlCustomApi: "Formato URL del server API personalizzato non valido"
            }
        },
        mutualGroupDMs: {
            name: "DM di gruppo comune",
            description: "Mostra i messaggi diretti del gruppo condiviso sui profili",
            no: "Nessun gruppo comune",
            mutualGroup: "{{count}} Gruppo comune",
            members: "Membro",
            noGroup: "Nessun messaggio diretto di gruppo pubblico",
            header: "Gruppi comuni"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Impedisce la messa in pausa delle anteprime in chiamata/PiP (condivisione dello schermo, trasmissioni, ecc.) anche se l'app perde il focus.",
            about: "Questo componente aggiuntivo fa sì che Discord consumi più risorse del solito."
        },
        newGuildSettings: {
            name: "Nuove impostazioni della gilda",
            description: "Disattiva e modifica automaticamente varie altre impostazioni quando si uniscono nuovi server",
            context: {
                apply: "Applica nuove impostazioni del server"
            },
            option: {
                guild: {
                    label: "Disattiva il server",
                    description: "Disattiva automaticamente l'audio del server"
                },
                messages: {
                    label: "Impostazioni di notifica del server",
                    description: "Impostazioni di notifica del server",
                    all: "Tutti i messaggi",
                    mentions: "Solo @menzioni",
                    nothing: "Nessuno",
                    default: "Impostazione predefinita del server"
                },
                everyone: {
                    label: "Elimina @tutti e @qui",
                    description: "Elimina le notifiche @everyone e @here"
                },
                role: {
                    label: "Sopprimi tutte le @menzioni di ruolo",
                    description: "Sopprimi tutte le @menzioni di ruolo"
                },
                highlights: {
                    label: "Sopprimi le evidenziazioni",
                    description: "Elimina automaticamente le evidenziazioni"
                },
                events: {
                    label: "Disattiva l'audio dei nuovi eventi",
                    description: "Disattiva automaticamente i nuovi eventi"
                },
                showAllChannels: {
                    label: "Mostra tutti i canali",
                    description: "Mostra tutti i canali automaticamente"
                },
                mobilePush: {
                    label: "Disattiva le notifiche mobili",
                    description: "Silenzia automaticamente le notifiche mobili"
                },
                voiceChannels: {
                    label: "Canali vocali",
                    description: "Nascondi automaticamente i nomi nei canali vocali"
                }
            }
        },
        newPluginsManager: {
            name: "NuovoPluginsManager",
            description: "Strumento utile che ti avvisa quando vengono aggiunti nuovi plugin a Plexcord",
            modal: {
                title: "Nuovi plugin e impostazioni",
                description: "Dalla tua ultima visita sono stati aggiunti nuovi plugin e impostazioni. Si prega di rivedere le nuove aggiunte di seguito.",
                tooltip: "Chiudi per questa sessione",
                dontShowAgain: "Non mostrarlo più",
                restartRequired: "I seguenti plugin richiedono un riavvio",
                restart: "Ricomincia",
                continue: "Devam Et"
            }
        },
        noAppsAllowed: {
            name: "Nessuna app consentita",
            description: "Ripristina il tag Bot per i bot"
        },
        noBlockedMessages: {
            name: "Nessun messaggio bloccato",
            description: "Nasconde completamente tutti i messaggi bloccati/ignorati dalla chat",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Nascondi anche gli utenti ignorati",
                    description: "Nascondi anche i messaggi degli utenti ignorati."
                },
                disableNotifications: {
                    label: "Disabilita notifiche",
                    description: "Nascondi le notifiche di nuovi messaggi per gli utenti bloccati. Quanto segue si applica sempre se la funzione \"Nascondi utente predefinito\" è abilitata e l'utente che ha attivato la notifica non è nell'elenco \"Utenti eccezionali\"."
                },
                allowAutoModMessages: {
                    label: "Consenti messaggi AutoMod",
                    description: "Consenti ai messaggi inviati da AutoMod di passare senza filtri."
                },
                hideBlockedUserReplies: {
                    label: "Nascondi le risposte degli utenti bloccati",
                    description: "Nascondi i messaggi degli utenti bloccati nei thread a cui hai partecipato in precedenza."
                },
                defaultHideUsers: {
                    label: "Nascondere l'utente predefinito",
                    description: "Se abilitato, i messaggi degli utenti bloccati vengono completamente nascosti e i messaggi degli ID utente nell'elenco delle eccezioni vengono invece compressi (comportamento Discord predefinito). Se disabilitato, i messaggi degli utenti bloccati verranno compressi e i messaggi degli ID utente nell'elenco delle eccezioni verranno completamente nascosti."
                },
                overrideUsers: {
                    label: "Utenti d'eccezione",
                    description: "Elenco separato da virgole di ID utente da nascondere o comprimere, invece del comportamento predefinito selezionato sopra."
                }
            }
        },
        noBulletPoints: {
            name: "Nessun punto elenco",
            description: "I punti elenco Markdown (•, -, *) ti impediscono di scrivere (cattiva abitudine)"
        },
        noDeepLinks: {
            name: "Disabilita DeepLink",
            description: "Disabilita la fastidiosa funzionalità di collegamento diretto che tenta di forzare l'apertura dell'app desktop di Discord"
        },
        noDeleteSafety: {
            name: "NoEliminaSicurezza",
            description: "Rimuove il requisito \"tipo nome server\" quando si elimina un server",
            option: {
                confirmModal: {
                    label: "Finestra di conferma",
                    description: "'Sei sicuro di voler eliminare questo server?' Mostrare la finestra di conferma?"
                }
            },
            modal: {
                title: "Eliminare il server?",
                body: "Sarà permanente, se non fosse già ovvio.",
                confirm: "Sil",
                cancel: "Cancellare"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Disabilita il banner di avviso \"LET'S HIT\" sulla console. Come effetto collaterale, impedisce anche a Discord di nascondere il proprio token, impedendo così disconnessioni casuali."
        },
        noF1: {
            name: "No. F1",
            description: "F1 disabilita il collegamento alla guida."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Quando un collegamento viene incollato con il testo selezionato, impedisce che il collegamento venga incollato come URL mascherato."
        },
        noMirroredCamera: {
            name: "Nessuna fotocamera a specchio",
            description: "Impedisce alla fotocamera di eseguire il mirroring dello schermo."
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Disabilita le animazioni di apertura/chiusura in tutte le finestre modali."
        },
        noMosaic: {
            name: "NoMosaico",
            description: "Rimuove il layout del mosaico visivo di Discord.",
            option: {
                inlineVideo: {
                    label: "Video in linea",
                    description: "Riproduci video senza loop modale."
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Rimuove TUTTE le notifiche di vendita di Nitro da Discord inducendo il cliente a pensare che possiedi Nitro."
        },
        noOnboarding: {
            name: "Nessun onboarding",
            description: "Consente un accesso più rapido saltando il processo di unione al server Discord."
        },
        noOnboardingDelay: {
            name: "Nessun ritardo di onboarding",
            description: "Evita il ritardo di connessione al server lento e fastidioso."
        },
        noPendingCount: {
            name: "Nessun conteggio in sospeso",
            description: "Rimuove il numero di notifiche per le richieste di amicizia in arrivo, le richieste di messaggi e le offerte Nitro.",
            option: {
                hideFriendRequestsCount: {
                    label: "Nascondi conteggio richieste di amicizia",
                    description: "Nascondi il numero di richieste di amicizia in arrivo"
                },
                hideMessageRequestsCount: {
                    label: "Nascondi conteggio richieste messaggi",
                    description: "Nascondi il numero di richieste di messaggi"
                },
                hidePremiumOffersCount: {
                    label: "Nascondi conteggio offerte Nitro",
                    description: "Nascondi il numero di offerte nitro"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Rimuove completamente i temi del profilo Nitro per tutti tranne te."
        },
        noPushToTalk: {
            name: "Nessun PushToTalk",
            description: "Ignora il requisito push-to-talk per l'attività vocale sui canali che lo richiedono."
        },
        noReplyMention: {
            name: "Nessuna menzione di risposta",
            description: "Disabilita i ping di risposta per impostazione predefinita.",
            option: {
                userList: {
                    label: "Elenco utenti",
                    description: "Elenco degli utenti che saranno autorizzati o esentati dal ping (devono essere separati da una virgola o uno spazio)"
                },
                roleList: {
                    label: "Elenco dei ruoli",
                    description: "Elenco dei ruoli che consentiranno o esenteranno il ping (devono essere separati da una virgola o uno spazio)"
                },
                shouldPingListed: {
                    label: "Ping elencato",
                    description: "Comportamento",
                    dontPing: "Ping degli utenti/ruoli elencati",
                    onlyPing: "Effettua il ping solo per gli utenti/ruoli elencati"
                },
                inverseShiftReply: {
                    label: "Comportamento di risposta al cambio inverso",
                    description: "Inverte il comportamento di risposta spostata di Discord (menziona l'utente durante la risposta spostata quando abilitata)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Rimuove i prefissi canary/ptb dai collegamenti ai messaggi."
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Siamo tutti uguali!! Rimuove i titoli dei ruoli dall'elenco dei membri."
        },
        noRPC: {
            name: "NoRPC",
            description: "Discord disabilita Rich Presence."
        },
        noServerEmojis: {
            name: "FromServerEmoji",
            description: "Il server non visualizza gli emoji nel menu di completamento automatico.",
            option: {
                shownEmojis: {
                    label: "Emoji mostrati",
                    description: "Scegli quali emoji mostrare nel menu di completamento automatico",
                    onlyUnicode: "Solo emoji Unicode",
                    currentServer: "Emoji Unicode ed emoji sul server corrente",
                    all: "Emoji Unicode e tutti gli emoji del server (impostazione predefinita di Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "Nessun badge di sistema",
            description: "Disabilita il badge di notifica non letto sulla barra delle applicazioni e sulla barra delle applicazioni."
        },
        notificationTitle: {
            name: "Titolo notifica",
            description: "Rende le notifiche desktop più informative."
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Imposta il volume personalizzato per le notifiche Discord.",
            option: {
                notificationVolume: {
                    label: "Suono di notifica",
                    description: "Volume delle notifiche"
                }
            }
        },
        noTypingAnimation: {
            name: "Nessuna animazione di digitazione",
            description: "Disabilita l'animazione di digitazione nelle chat."
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Ti consente di saltare i messaggi provenienti da utenti bloccati o ignorati (e possibilmente spammer) senza sbloccarli."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Anche se un utente invia messaggi non letti consecutivi nei DM, riceverai solo una notifica sonora.",
            option: {
                channelToAffect: {
                    label: "Tipo di canale da influenzare",
                    description: "Seleziona il tipo di DM che verrà influenzato dal plug-in",
                    both: "Entrambi",
                    user: "DM utente",
                    group: "DM di gruppo"
                },
                allowMentions: {
                    label: "@AllowMentions",
                    description: "Ricevi notifiche sonore per le @menzioni"
                },
                allowEveryone: {
                    label: "Consenti a @tutti",
                    description: "Ricevi notifiche sonore per @tutti e @qui nei messaggi diretti di gruppo"
                },
                ignoreUsers: {
                    label: "Utenti da ignorare",
                    description: "ID utente per non limitare MAI le notifiche (separare con virgola + spazio)"
                },
                alwaysPlaySound: {
                    label: "Riproduci sempre l'audio",
                    description: "Riproduci il suono anche se il suono di notifica è disabilitato"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Apre i collegamenti nelle applicazioni pertinenti anziché nel browser",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Apri i collegamenti Spotify nell'app Spotify"
                },
                steam: {
                    label: "Vapore",
                    description: "Apri i collegamenti Steam nell'app Steam"
                },
                epic: {
                    label: "Giochi epici",
                    description: "Apri i collegamenti di Epic Games nel launcher di Epic Games"
                },
                tidal: {
                    label: "Marea",
                    description: "Apri i collegamenti Tidal nell'app Tidal"
                },
                itunes: {
                    label: "iTunes",
                    description: "Apri i collegamenti di Apple Music nell'app iTunes"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Apri i collegamenti VRChat nell'app VRChat"
                }
            },
            notification: {
                open: "Collegamento aperto nell'app nativa"
            }
        },
        overrideForumDefaults: {
            name: "Sostituisci i valori predefiniti del forum",
            description: "Ti consente di sovrascrivere il layout/ordinamento predefinito del forum. Puoi comunque apportare modifiche canale per canale.",
            option: {
                defaultLayout: {
                    label: "Disposizione predefinita",
                    description: "Scegli quale layout utilizzare come predefinito",
                    list: "Lista",
                    gallery: "Galleria"
                },
                defaultSortOrder: {
                    label: "Ordinamento predefinito",
                    description: "Scegli quale ordinamento utilizzare per impostazione predefinita",
                    recentlyActive: "Ultimo attivo",
                    datePosted: "Data di pubblicazione"
                }
            }
        },
        partyMode: {
            name: "Modalità festa",
            description: "Ti consente di utilizzare la modalità festa perché la festa non finisce mai ✨",
            option: {
                superIntensePartyMode: {
                    label: "Modalità Party super intenso",
                    description: "Densità del partito",
                    normal: "Normale",
                    better: "Meglio",
                    projectX: "Progetto X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Riporta l'opzione \"sospendi gli inviti a tempo indeterminato\" che Discord ha stupidamente rimosso.",
            pauseIndefinitely: "Pausa indefinita"
        },
        permissionFreeWill: {
            name: "AutorizzazioneFreeWill",
            description: "Disabilita le restrizioni lato client nella gestione delle autorizzazioni del canale.",
            option: {
                lockout: {
                    label: "situazione di stallo",
                    description: "Ignora la protezione dagli arresti anomali dei permessi (\"Sei sicuro di volerlo fare?\")"
                },
                onboarding: {
                    label: "Requisiti di partenza",
                    description: "Ignorare i requisiti di onboarding che potrebbero rendere il server incompatibile (\"Questa modifica potrebbe rendere il tuo server incompatibile [...]\")"
                }
            }
        },
        permissionsViewer: {
            name: "Visualizzatore autorizzazioni",
            description: "Ti consente di visualizzare le autorizzazioni di cui dispone un utente o un canale e i ruoli di un server.",
            view: "Visualizza autorizzazioni",
            option: {
                permissionsSortOrder: {
                    label: "Ordinamento delle autorizzazioni",
                    description: "Metodo di ordinamento utilizzato per determinare in che modo un ruolo concede un'autorizzazione specifica a un utente",
                    highest: "Ruolo più alto",
                    lowest: "Ruolo più basso"
                }
            },
            icon: {
                denied: "respinto",
                allowed: "Consentito",
                notOverwritten: "Non sovrascritto"
            },
            context: {
                permissions: "Autorizzazioni"
            },
            modal: {
                title: "Autorizzazioni",
                noPermissions: "Nessuna autorizzazione da mostrare!",
                owner: "proprietario",
                grantedBy: "Permissivo",
                serverOwner: "Proprietario del server",
                ownerRole: "Proprietario",
                sortingBy: "{{method}} è ordinato con priorità",
                highest: "Ruolo più alto",
                lowest: "Ruolo più basso",
                details: "Dettagli del ruolo"
            }
        },
        petpet: {
            name: "Animale domestico",
            description: "Aggiunge il comando /petpet per creare gif petpet da qualsiasi immagine",
            command: {
                petpet: {
                    description: "Crea una gif per animali domestici. È possibile specificare solo una delle opzioni dell'immagine",
                    delay: "Ritardo tra ciascun fotogramma. L'impostazione predefinita è 20.",
                    resolution: "Risoluzione per gif. Il valore predefinito è 120. Se inserisci un numero folle e Discord si blocca, è colpa tua.",
                    image: "Allegato immagine da utilizzare",
                    url: "URL per ottenere l'immagine",
                    user: "L'utente il cui avatar verrà utilizzato come immagine",
                    noServerPfp: "Usa l'avatar normale invece di quello specifico del server quando usi l'opzione 'utente'",
                    error: {
                        noImage: "Nessuna immagine specificata!",
                        delayTooLow: "Il ritardo deve essere almeno 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Il file caricato non è un'immagine",
                fetchUserFailed: "Impossibile recuperare l'utente. Controlla la console per ulteriori informazioni.",
                fetchImageFailed: "Si è verificato un errore durante il caricamento di {{url}}. Controlla la console per ulteriori informazioni."
            }
        },
        pictureInPicture: {
            name: "Immagine nell'immagine",
            description: "Aggiunge la funzionalità Picture-in-Picture ai video (accanto al pulsante Download)",
            tooltip: "Attiva/disattiva Immagine nell'immagine",
            option: {
                loop: {
                    label: "Ciclo continuo",
                    description: "Se eseguire il loop del video PiP"
                }
            }
        },
        pinDMs: {
            name: "PinDM",
            description: "Ti consente di fissare i canali privati ​​(DM) in cima all'elenco dei DM. Puoi fare clic con il pulsante destro del mouse sui messaggi diretti per appuntare/rimuovere o modificare l'ordine dei messaggi diretti.",
            context: {
                category: {
                    label: "Menu delle categorie DM",
                    edit: "Modifica categoria",
                    up: "Spostati in alto",
                    down: "Sposta giù",
                    delete: "Elimina categoria",
                    unnamed: "anonimo"
                },
                pin: {
                    label: "DM Sabitle",
                    addCategory: "Categoria Disgustoso"
                },
                unPin: {
                    label: "Sblocca DM",
                    move: "Sposta nella categoria"
                }
            },
            option: {
                pinOrder: {
                    label: "Ordine di fissazione",
                    description: "In quale ordine devono essere visualizzati i messaggi diretti fissati?",
                    lastMessage: "Entro la data dell'ultimo messaggio",
                    custom: "Privato (cambia ordine cliccando con il tasto destro sui canali)"
                },
                canCollapseDmSection: {
                    label: "Sezione fissa pieghevole",
                    description: "Rendi comprimibile la sezione dei messaggi diretti senza categoria"
                },
                dmSectionCollapsed: {
                    label: "Sezione DM ristretta",
                    description: "Comprimi la sezione DM"
                },
                userBasedCategoryList: {
                    label: "Elenco delle categorie basato sull'utente",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Categoria perno",
                    edit: "Modifica categoria",
                    new: "Nuova categoria",
                    name: "Nome",
                    color: "Colore",
                    save: "Salva",
                    create: "Creare"
                }
            }
        },
        pingNotifications: {
            name: "Notifiche Ping",
            description: "Notifiche personalizzabili e formattazione delle menzioni migliorata",
            option: {
                friends: {
                    label: "Amici",
                    description: "Ricevi una notifica quando i tuoi amici inviano messaggi sui server"
                },
                mentions: {
                    label: "Menzioni",
                    description: "Ricevi una notifica quando qualcuno ti @menziona direttamente"
                },
                dms: {
                    label: "DM'ler",
                    description: "Ricevi notifiche per i messaggi diretti (DM)"
                },
                showInActive: {
                    label: "Mostra sui canali attivi",
                    description: "Mostra notifiche anche per i canali attualmente attivi"
                },
                ignoreMuted: {
                    label: "Ignora Disattivato",
                    description: "Ignora le notifiche da server, canali o utenti disattivati"
                }
            },
            unknown: "sconosciuto",
            dm: "DM",
            groupDM: "Gruppo DM",
            title: "{{username}} sul canale {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Aggiunge un'icona a forma di puntina ai messaggi appuntati."
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Non mostra le piccole icone del server nelle cartelle."
        },
        platformIndicators: {
            name: "Indicatori di piattaforma",
            description: "Aggiunge agli utenti gli indicatori della piattaforma (Desktop, Mobile, Web...).",
            embeddedTooltip: "Consolle",
            vrTooltip: "realtà virtuale",
            option: {
                list: {
                    label: "Lista",
                    description: "Mostra gli indicatori nell'elenco dei membri"
                },
                badges: {
                    label: "distintivi",
                    description: "Mostra gli indicatori come badge sui profili utente"
                },
                messages: {
                    label: "Messaggi",
                    description: "Mostra gli indicatori all'interno dei messaggi"
                },
                colorMobileIndicator: {
                    label: "Colora il tuo display mobile",
                    description: "Determina se l'indicatore mobile assume o meno il colore dello stato dell'utente."
                },
                showBots: {
                    label: "Mostra bot",
                    description: "Determina se mostrare gli indicatori della piattaforma nei bot"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Simula qualunque piattaforma o dispositivo utilizzi",
            about: "Non possiamo garantire che questo componente aggiuntivo ti proteggerà dall'essere avvisato o bannato.",
            platform: {
                desktop: "Cliente Discordia",
                web: "Rete della discordia",
                ios: "Discordia iOS",
                android: "Discordia Android",
                xbox: "Discordia incorporata",
                playstation: "Discordia incorporata",
                vr: "realtà virtuale"
            },
            option: {
                platform: {
                    label: "Piattaforma",
                    description: "Con quale piattaforma vuoi apparire?",
                    desktop: "scrivania",
                    web: "Rete",
                    android: "Androide",
                    ios: "iOS",
                    xbox: "Xbox",
                    playstation: "PlayStation",
                    vr: "realtà virtuale"
                }
            }
        },
        plexcordToolbox: {
            name: "PlexcordToolbox",
            description: "Aggiunge un pulsante alla barra delle app che ospita le azioni rapide di Plexcord.",
            tooltip: "Cassetta degli attrezzi Plexcord",
            context: {
                openLog: "Apri registro notifiche",
                enableQuickCSS: "Abilita QuickCSS",
                openQuickCSS: "Apri QuickCSS",
                openSettings: "Apri Impostazioni",
                manageThemes: "Gestisci temi"
            },
            option: {
                showPluginMenu: {
                    label: "Mostra il menu dei plugin",
                    description: "Mostra il menu dei plugin in Plexcord Toolbox"
                }
            }
        },
        polishWording: {
            name: "Formulazione polacca",
            description: "Apporta piccole modifiche per rendere i tuoi messaggi più belli e avere una grammatica migliore. Controlla le impostazioni",
            option: {
                quickDisable: {
                    label: "Disabilitazione rapida",
                    description: "Disattivazione rapida. Disattiva la modifica dei messaggi senza dover riavviare l'app."
                },
                blockedWords: {
                    label: "Parole bloccate",
                    description: "Parole che non saranno maiuscole (separate con virgole)."
                },
                fixApostrophes: {
                    label: "Correggi gli apostrofi",
                    description: "Assicura che le abbreviazioni contengano apostrofi."
                },
                expandContractions: {
                    label: "Abbreviazioni aperte",
                    description: "Converte le parole abbreviate nella loro forma esplicita (come Non farlo -> Non farlo)."
                },
                fixCapitalization: {
                    label: "Modifica delle maiuscole",
                    description: "Consente alle frasi di iniziare con la lettera maiuscola."
                },
                fixPunctuation: {
                    label: "Punteggiatura corretta",
                    description: "Modifica gli spazi attorno ai segni di punteggiatura."
                },
                fixPunctuationFrequency: {
                    label: "Frequenza della punteggiatura",
                    description: "Percentuale di frequenza con cui si mettono i punti alla fine delle frasi (questa caratteristica potrebbe infastidire alcune persone).",
                }
            }
        },
        previewMessage: {
            name: "AnteprimaMessaggio",
            description: "Ti consente di visualizzare in anteprima il tuo messaggio prima di inviarlo.",
            tooltip: "Anteprima del messaggio"
        },
        profileSets: {
            name: "Set di profili",
            description: "Ti consente di salvare le preimpostazioni del profilo e caricarle tramite la sezione Profilo in Impostazioni.",
            toast: {
                importFailed: "Impossibile importare le preimpostazioni del profilo. Il file potrebbe non essere valido.",
            },
            option: {
                avatarSize: {
                    label: "Dimensioni dell'avatar",
                    description: "Dimensioni dell'avatar nell'elenco delle preimpostazioni del profilo"
                },
            },
            modal: {
                override: "Sostituisci",
                merge: "Unisci",
                cancel: "Cancellare",
                timestamp: "{{formattedDate}} alle {{formattedTime}}",
                rename: "Rinominare",
                update: "Aggiornamento",
                moveUp: "Spostati in alto",
                moveDown: "Sposta giù",
                moveTo: "Passa alla pagina 1",
                delete: "Eliminare",
                importProfiles: "Importa profili",
                importText: "Hai {{existingCount}} profili esistenti in questa sezione. Vuoi sovrascriverli o unirli con i profili importati?",
                heading: "Profili salvati",
                searchProfiles: "Cerca profili...",
                profileName: "Nome del profilo",
                saving: "Risparmio...",
                save: "Salva profilo",
                cancelSearch: "Annulla ricerca",
                search: "Ricerca",
                random: "casuale",
                import: "Importare",
                exportAll: "Esporta tutto"
            }
        },
        questify: {
            name: "Domanda",
            description: "Migliora la tua esperienza di missione con una serie di funzionalità o disabilitale completamente se non sono ciò che desideri.",
            quests: "Missioni",
            context: {
                quest: {
                    label: "Menu dei pulsanti delle attività",
                    ignore: "Seleziona Ignora tutto",
                    reset: "Reimposta elenco ignorati",
                    fetch: "Recupera attività",
                    markAsIgnored: "Segna come Ignora",
                    unmarkAsIgnored: "Rimuovi Ignora",
                    stopAuto: "Arresta il completamento automatico",
                    copyQuestID: "Copia ID attività",
                    startAuto: "Avvia il completamento automatico"
                }
            },
            settings: {
                questButton: {
                    title: "Pulsante attività",
                    description: "Mostra un pulsante Missione con un indicatore opzionale per le Missioni non rivendicate nell'elenco dei server.",
                    leftClick: "Azione clic sinistro",
                    middleClick: "Azione clic centrale",
                    rightClick: "Azione clic destro",
                    visibility: "Visibilità dei pulsanti",
                    unclaimedIndicator: "Indicatore non richiesto",
                    badgeColor: "Colore distintivo",
                    rewardDisplay: "Esposizione del premio",
                    includedRewardTypes: "Tipi di premi inclusi",
                    includedRewardTypesDesc: "Quando si gioca alla visibilità dei pulsanti, al conteggio dei badge e al suono di avviso, contano solo le missioni con questi tipi di ricompensa come non riscattate.",
                    selectRewardTypes: "Seleziona i tipi di premio da includere nel conteggio dei premi non riscossi...",
                    noRewardType: "Non esiste alcuna funzionalità Attività supportata con questo nome.",
                    default: "Predefinito",
                    disable: "Disabilita"
                },
                questFeatures: {
                    title: "Caratteristiche del compito",
                    description: "Modificare proprietà specifiche dell'attività.",
                    popupWarning: "L'opzione {{disablePopup}} verrà ignorata per le missioni completate e per il monitoraggio dei progressi delle missioni.",
                    videoQuestInfo: "L'opzione {{completeVideo}} attenderà la durata dell'attività video e la contrassegnerà automaticamente come completata.",
                    gameQuestInfo: "Allo stesso modo, l'opzione {{completeGame}} attenderà la durata dell'attività di gioco e la contrassegnerà automaticamente come completata. Questa opzione è supportata solo nel client desktop ufficiale.",
                    manualStartWarning: "È necessario avviare le attività manualmente. Il primo clic avvia Attività in background. Per le attività video, i clic successivi aprono la finestra modale video normalmente. Per annullare le missioni, puoi aprire il menu contestuale nel riquadro Missione e selezionare {{stopAuto}}.",
                    tosWarning: "L'utilizzo di una qualsiasi di queste opzioni va contro i Termini di servizio di Discord. Utilizzare a proprio rischio.",
                    selectFeatures: "Scegli quali proprietà dell'attività modificare.",
                    disablePopup: "Disabilita il popup delle attività nel pannello dell'account",
                    completeVideo: "Completa le attività video in background",
                    completeGame: "Completa le attività di gioco in background",
                    stopAuto: "Arresta il completamento automatico"
                },
                restyleQuests: {
                    title: "Attività di riformattazione",
                    description: "Evidenzia le attività con colori del tema opzionali per la visibilità.",
                    precedenceNote: "Gli stili di attività richiesta e scaduta avranno la precedenza anche se l'attività viene ignorata.",
                    gradientStyle: "Gradiente Stili",
                    assetPreload: "Bootloader delle risorse",
                    unclaimed: "Non richiesto",
                    claimed: "Richiesto",
                    ignored: "ignorato",
                    expired: "Scaduto",
                    intenseGradient: "Gradiente di rifusione denso",
                    defaultGradient: "Gradiente di rifusione predefinito",
                    blackGradient: "Sottile sfumatura nera",
                    noGradient: "Nessun gradiente",
                    loadAllAssets: "Carica tutte le risorse attività al caricamento della pagina",
                    loadDuringScroll: "Carica risorse attività durante lo scorrimento della pagina"
                },
                reorderQuests: {
                    title: "Riordina le attività",
                    description: "Ordina le attività in base al loro stato. Si applica quando l'opzione di ordinamento \"Questify\" è selezionata nella pagina delle missioni.",
                    formatNote: "L'elenco separato da virgole deve contenere tutto quanto segue: {{items}}.",
                    placeholder: "È necessario aggiungere NON RECLAMI, RECLAMI, IGNORATI, SCADUTI tutti",
                    invalidFormat: "Formato non valido.",
                    unclaimedSubsort: "Sottorango non reclamato",
                    claimedSubsort: "Sottorango rivendicato",
                    ignoredSubsort: "Sottordine ignorato",
                    expiredSubsort: "Sottorango scaduto",
                    addedNewest: "Aggiunto (più recente)",
                    addedOldest: "Aggiunta (più vecchia)",
                    expiredRecent: "Scaduto (più recente)",
                    expiredLeast: "Scaduto (almeno al più tardi)",
                    expiringSoon: "In scadenza (più vicino)",
                    expiringLate: "Scade (più recente)",
                    claimedRecent: "Richiesto (più recente)",
                    claimedLeast: "Richiesto (almeno al più tardi)",
                    ignoredQuestProfile: "Profilo attività ignorato",
                    sharedProfile: "Condiviso: tutti gli account su questa condivisione client vengono ignorati.",
                    privateProfile: "Privato: tutti gli account su questo client hanno ignoramenti separati.",
                    rememberSort: "Ricorda la selezione dell'ordinamento",
                    rememberFilter: "Ricorda la selezione del filtro",
                    yes: "SÌ",
                    no: "NO",
                    rememberNote: "Questa selezione di ordinamento e filtro fa riferimento alle opzioni di ordinamento e filtro integrate nella pagina Attività. L'ordinamento personalizzato di cui sopra si applica solo quando l'opzione di ordinamento \"Questify\" è selezionata nella pagina Quest. Se il richiamo è disabilitato, le opzioni di ordinamento o filtro vengono reimpostate ogni volta che si apre la pagina Attività."
                },
                fetchingQuests: {
                    title: "Recupero attività",
                    description: "Configura la frequenza con cui le attività vengono recuperate da Discord e imposta avvisi per le nuove attività.",
                    defaultBehavior: "Per impostazione predefinita, Discord visualizza le Attività solo quando sono installate e visiti la pagina Attività. Ciò significa che senza un intervallo di recupero definito di seguito, questo plugin non verrà informato delle nuove missioni aggiunte durante il giorno.",
                    requirement: "Dipende se il pulsante Quest è attivo e impostato su {{unclaimed}} o impostato su {{always}} e gli indicatori {{pill}}, {{badge}} o {{both}} non rivendicati sono abilitati. Altrimenti, non è necessario recuperare periodicamente le missioni.",
                    blockWarning: "Inoltre, se {{fetchingQuests}} è bloccato nell'impostazione {{questFeatures}}, non funzionerà.",
                    fetchInterval: "Intervallo di recupero",
                    alertSound: "Suono di avviso",
                    intervalPlaceholder: "Selezionare o digitare un intervallo compreso tra 30 minuti e 12 ore.",
                    intervalFeedback: "Gli intervalli dovrebbero essere compresi tra 30 minuti e 12 ore.",
                    soundPlaceholder: "Scegli un suono o fornisci un URL del suono personalizzato.",
                    soundFeedback: "L'audio non è stato trovato oppure l'URL non proviene da un dominio supportato.",
                    disabled: "Disabilitato",
                    minutes: "Un minuto",
                    minute: "Un minuto",
                    hours: "Momento",
                    hour: "Momento",
                    thirtyMinutes: "30 minuti",
                    oneHour: "1 momento",
                    threeHours: "3 momenti",
                    sixHours: "6 Momenti",
                    twelveHours: "12 Momenti",
                    customSound: "SUONO PERSONALIZZATO"
                },
                disableOptions: {
                    everything: "Disabilita tutto",
                    discovery: "Disabilita la scheda Esplora",
                    dms: "Disattiva la scheda Attività nei messaggi diretti",
                    fetching: "Disabilita recupero attività",
                    popup: "Disabilita popup sopra il pannello dell'account",
                    sponsored: "Disabilita il banner sponsorizzato nella pagina delle attività",
                    badge: "Disabilita badge sui profili utente",
                    inventory: "Disattiva la notifica di trasporto dell'inventario dei regali",
                    friendsList: "Elenco amici Promozione attualmente attiva",
                    membersList: "Elenco dei membri Icone di gioco attive",
                    gameQuests: "Completa le sfide di giochi/attività in background",
                    videoQuests: "Completa le attività di visione video in background",
                    achievementQuests: "Completa le attività dell'attività in background",
                    mobileDesktop: "Rendi le attività mobili compatibili con il desktop",
                    notifyOnComplete: "Avvisami quando l'attività è completata"
                },
                options: {
                    always: "Sempre",
                    unclaimed: "Non richiesto",
                    never: "Mai",
                    pill: "Hap",
                    badge: "Distintivo",
                    both: "Entrambi",
                    none: "Nessuno",
                    openQuests: "Missioni aperte",
                    contextMenu: "Menù contestuale",
                    pluginSettings: "Impostazioni del plugin",
                    nothing: "Niente",
                    orbs: "sfere",
                    nitroCodes: "Codici Nitro",
                    rewardCodes: "Codici premio",
                    inGameItems: "Oggetti di gioco",
                    profileCollectibles: "Raccolte di profili"
                }
            },
            option: {
                disableQuests: {
                    label: "Disabilita attività",
                    description: "Scegli quali funzionalità dell'attività disattivare."
                },
                disableQuestsEverything: {
                    label: "Disabilita tutto",
                    description: "Disabilita tutte le funzionalità delle attività."
                },
                disableQuestsFetchingQuests: {
                    label: "Disabilita recupero attività",
                    description: "Disabilita il recupero delle attività da Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Disabilita la scheda Attività nei messaggi diretti",
                    description: "Disattiva la scheda Attività nella pagina Messaggi diretti."
                },
                disableQuestsDiscoveryTab: {
                    label: "Disabilita la scheda Esplora",
                    description: "Disattiva la scheda Missione nella pagina Esplora."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Disabilita il banner sponsorizzato nella pagina delle attività",
                    description: "Disabilita il banner sponsorizzato nella pagina Attività."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Disabilita popup nel pannello account",
                    description: "Disattiva il popup Attività nella parte superiore del pannello del tuo account."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Disabilita badge sui profili utente",
                    description: "Disabilita il badge Attività sui profili utente."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Disattiva la notifica di spostamento dell'inventario dei regali",
                    description: "Inventario dei regali Disattiva la notifica dello spostamento delle missioni."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Disabilita elenco amici Promozione attualmente attiva",
                    description: "Disattiva la promozione Quest per i giochi giocati dagli amici."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Disabilita le icone di riproduzione attiva nell'elenco dei membri",
                    description: "Disabilita le icone di riproduzione attiva nell'elenco dei membri."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Rendi compatibile Mobile Tasks Desktop",
                    description: "Rendi le attività solo per dispositivi mobili compatibili con il desktop."
                },
                completeVideoQuestsInBackground: {
                    label: "Completa le attività video in background",
                    description: "Completa le missioni video in background una volta trascorso il tempo del video."
                },
                completeGameQuestsInBackground: {
                    label: "Completa le missioni di gioco in background",
                    description: "Completa le missioni di gioco in background allo scadere del tempo di gioco."
                },
                completeAchievementQuestsInBackground: {
                    label: "Completa le attività dell'attività in background",
                    description: "Completa le sfide delle attività in background."
                },
                notifyOnQuestComplete: {
                    label: "Avvisami quando l'attività è completata",
                    description: "Mostra una notifica quando un'attività viene completata automaticamente."
                },
                questButton: {
                    label: "Pulsante attività",
                    description: "Mostra un pulsante Quest nell'elenco dei server."
                },
                questButtonDisplay: {
                    label: "Aspetto del pulsante attività",
                    description: "Quale tipo di visualizzazione utilizzare per il pulsante Attività nell'elenco dei server."
                },
                questRewardIncludeRewardCode: {
                    label: "Includi codici premio",
                    description: "Includi missioni con codici premio quando visualizzi il conteggio delle missioni."
                },
                questRewardIncludeNitroCode: {
                    label: "Includi codici Nitro",
                    description: "Includi le missioni codificate Nitro quando visualizzi il conteggio delle missioni."
                },
                questRewardIncludeInGame: {
                    label: "Includi premi di gioco",
                    description: "Includi missioni con ricompense di gioco quando visualizzi il conteggio delle missioni."
                },
                questRewardIncludeCollectibles: {
                    label: "Includi raccolte",
                    description: "Includi missioni con oggetti da collezione quando visualizzi il conteggio delle missioni."
                },
                questRewardIncludeOrbs: {
                    label: "Includi sfere",
                    description: "Includi le missioni vincitrici del mondo quando visualizzi il conteggio delle missioni."
                },
                questButtonUnclaimed: {
                    label: "Indicatore pulsante missione non reclamato",
                    description: "Quale tipo di visualizzazione utilizzare per l'indicatore non rivendicato sul pulsante Attività nell'elenco dei server."
                },
                questButtonBadgeColor: {
                    label: "Colore distintivo del pulsante Quest",
                    description: "Il colore del badge del pulsante Quest nell'elenco dei server."
                },
                questButtonLeftClickAction: {
                    label: "Azione clic sinistro",
                    description: "Azione da intraprendere quando si fa clic con il pulsante sinistro del mouse sul pulsante Attività nell'elenco dei server."
                },
                questButtonMiddleClickAction: {
                    label: "Azione clic centrale",
                    description: "Azione da intraprendere quando si fa clic con il pulsante centrale del mouse sul pulsante Attività nell'elenco dei server."
                },
                questButtonRightClickAction: {
                    label: "Azione clic destro",
                    description: "Azione da intraprendere quando si fa clic con il pulsante destro del mouse sul pulsante Attività nell'elenco dei server."
                },
                fetchingQuests: {
                    label: "Recupero attività",
                    description: "Porta attività da Discord."
                },
                fetchingQuestsInterval: {
                    label: "Intervallo di recupero delle missioni",
                    description: "Intervallo (in secondi) per recuperare le attività da Discord."
                },
                fetchingQuestsAlert: {
                    label: "Avviso recupero missione",
                    description: "Il suono che verrà riprodotto quando vengono rilevate nuove missioni."
                },
                fetchingQuestsAlertVolume: {
                    label: "Volume degli avvisi di recupero missioni",
                    description: "Il volume del suono che verrà riprodotto quando vengono rilevate nuove missioni."
                },
                restyleQuests: {
                    label: "Attività di riformattazione",
                    description: "Personalizza l'aspetto dei riquadri Attività nella pagina Attività."
                },
                restyleQuestsUnclaimed: {
                    label: "Attività di riformattazione: non richieste",
                    description: "Il colore dei riquadri Attività non rivendicati nella pagina Attività."
                },
                restyleQuestsClaimed: {
                    label: "Attività di riformattazione: richieste",
                    description: "Il colore dei riquadri Attività rivendicate nella pagina Attività."
                },
                restyleQuestsIgnored: {
                    label: "Attività di riformattazione: ignorate",
                    description: "Il colore dei riquadri Attività ignorati nella pagina Attività."
                },
                restyleQuestsExpired: {
                    label: "Attività di riformattazione - Scadute",
                    description: "Il colore dei riquadri Attività scaduti nella pagina Attività."
                },
                restyleQuestsGradient: {
                    label: "Attività di riformattazione - Gradiente",
                    description: "Stile sfumatura utilizzato nei riquadri delle attività."
                },
                restyleQuestsPreload: {
                    label: "Attività di riformattazione - Bootloader",
                    description: "Prova a precaricare le risorse per i riquadri attività."
                },
                reorderQuests: {
                    label: "Riordina le attività",
                    description: "Ordina le attività in base al loro stato. Lascia vuoto per l'ordinamento predefinito. L'elenco separato da virgole deve contenere tutti i seguenti elementi: UNCLAIMED, CLAIMED, IGNORED, EXPIRED."
                },
                unclaimedSubsort: {
                    label: "Sottorango non reclamato",
                    description: "Metodo di sottoordinamento per le attività non reclamate."
                },
                claimedSubsort: {
                    label: "Sottorango rivendicato",
                    description: "Metodo di sottoordinamento per le attività richieste."
                },
                ignoredSubsort: {
                    label: "Sottordine ignorato",
                    description: "Metodo di sottoordinamento per le attività ignorate."
                },
                expiredSubsort: {
                    label: "Sottorango scaduto",
                    description: "Metodo di downsorting per le attività scadute."
                },
                unclaimedUnignoredQuests: {
                    label: "Compiti non richiesti e non ignorati",
                    description: "Tiene traccia del numero di attività non rivendicate e non ignorate."
                },
                onQuestsPage: {
                    label: "Nella pagina delle attività",
                    description: "Se l'utente si trova attualmente nella pagina Attività."
                },
                triggerQuestsRerender: {
                    label: "Attivazione del rendering delle missioni",
                    description: "Attiva un nuovo rendering della pagina Attività modificando questa impostazione."
                },
                ignoredQuestProfile: {
                    label: "Profilo attività ignorato",
                    description: "Il profilo utilizzato per le attività ignorate."
                },
                rememberQuestPageSort: {
                    label: "Ricorda l'ordinamento delle pagine delle missioni",
                    description: "Ricorda l'ultima sequenza utilizzata nella pagina Attività."
                },
                rememberQuestPageFilters: {
                    label: "Ricorda i filtri della pagina delle attività",
                    description: "Ricorda gli ultimi filtri utilizzati nella pagina Attività."
                },
                lastQuestPageSort: {
                    label: "Classifica della pagina dell'ultima missione",
                    description: "Ricorda l'ultima sequenza utilizzata nella pagina Attività."
                },
                lastQuestPageFilters: {
                    label: "Filtri della pagina delle attività più recenti",
                    description: "Ricorda gli ultimi filtri utilizzati nella pagina Attività."
                },
                ignoredQuestIDs: {
                    label: "ID attività ignorati",
                    description: "Matrice di ID attività ignorati."
                },
                resumeQuestIDs: {
                    label: "ID attività in corso",
                    description: "Matrice di ID attività che si completano automaticamente in background."
                }
            },
            button: {
                questInProgressWithTime: "Completamento ({{remainTime}})",
                completing: "Completamento",
                resume: "Devam And (~{{remainTime}})",
                complete: "Completa {{remainTime}}",
                completeImmediate: "Completa (immediatamente)",
                completed: "completato"
            },
            reward: {
                orbs: "{{orbQuantity}} Sfere inserite {{completingText}}.",
                article: "{{completingText}} per {{itemName}}.",
                unrecognized: "{{completingText}} per un tipo di premio non riconosciuto."
            },
            notification: {
                completed: {
                    title: "Il lavoro è finito",
                    body: "Missione {{questName}} completata."
                }
            }
        },
        questionMarkReplacement: {
            name: "Sostituzione punto interrogativo",
            description: "Se il messaggio è composto solo da punti interrogativi, sostituisce tutti i punti interrogativi con la stringa selezionata.",
            option: {
                replace: {
                    label: "Modifica",
                    description: "Sostituisci con"
                }
            }
        },
        quickMention: {
            name: "Menzione rapida",
            description: "Aggiunge un pulsante di menzione rapida alla barra delle azioni del messaggio.",
            tooltip: "Scommessa veloce"
        },
        quickReply: {
            name: "Risposta rapida",
            description: "Rispondi (ctrl + su/giù) e modifica (ctrl + maiusc + su/giù) i messaggi con i tasti di scelta rapida.",
            option: {
                shouldMention: {
                    label: "Dovrei menzionare",
                    description: "Ping in risposta per impostazione predefinita",
                    noReplyMentionPlugin: "Segui il plugin NoReplyMention (se abilitato)",
                    enabled: "Efficace",
                    disabled: "Disabilitato"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignora Bloccato e Ignorato",
                    description: "Ignora i messaggi degli utenti bloccati/ignorati durante la navigazione"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Passa rapidamente da un tema all'altro utilizzando le scorciatoie da tastiera.",
            about: {
                title: "Tasti di scelta rapida",
                description: "Utilizza Ctrl/Cmd+Maiusc+tasti freccia per navigare (Sinistra/Destra: scorri tra i temi, Su: Abilita, Giù: Disabilita).",
                reload: "Premi Ctrl/Cmd+Shift+Alt per aggiornare l'elenco dei temi."
            },
            modal: {
                added: "{{count}} nuovi temi aggiunti",
                removed: "{{count}} temi rimossi",
                reloaded: "Tema {{themeCount}} ricaricato",
                addedLocal: "Aggiunti {{count}} temi locali",
                removedLocal: "{{count}} tema nativo rimosso",
            },
            option: {
                includeLocal: {
                    label: "Includi temi nativi",
                    description: "Include i temi nativi del tuo dispositivo nell'elenco"
                },
                includeOnline: {
                    label: "Includi temi online",
                    description: "Include temi online nell'elenco"
                },
                sortOrder: {
                    label: "Ordina per",
                    description: "Metodo di ordinamento",
                    asc: "A'dan Z'ye",
                    desc: "Z'den A'ya",
                    recent: "Nel Figlio"
                },
                autoRefresh: {
                    label: "Aggiornamento automatico",
                    description: "Aggiorna automaticamente l'elenco dei temi quando vengono rilevate modifiche"
                },
                showNotifications: {
                    label: "Mostra notifiche",
                    description: "Mostra notifiche quando i temi vengono aggiunti o rimossi"
                }
            }
        },
        quoter: {
            name: "Citatore",
            description: "Consente di creare un'immagine di citazione ispiratrice da un messaggio",
            context: {
                quote: "Preventivo"
            },
            modal: {
                title: "4K'da Yakala",
                grayscale: "Bianco-nero",
                export: "Esportare",
                send: "Inviare",
                saveAsGIF: "Salva come GIF",
                saveDescription: "Salva/invia l'immagine come GIF anziché PNG",
                showWatermark: "Mostra filigrana",
                watermarkText: "Filigran Metni (max. 32 caratteri)"
            },
            option: {
                quoteFont: {
                    label: "Carattere citazione",
                    description: "Carattere per il testo della citazione (autore/nome utente utilizza sempre M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Arrotondato 1c",
                    openSans: "Apri Sans",
                    momoSignature: "Firma Momo",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "filigrana",
                    description: "Testo filigrana personalizzato (max. 32 caratteri)"
                },
                grayscale: {
                    label: "Bianco-nero",
                    description: "Abilita il bianco e nero per impostazione predefinita"
                },
                showWatermark: {
                    label: "Mostra filigrana",
                    description: "Mostra filigrana per impostazione predefinita"
                },
                saveAsGif: {
                    label: "Salva come GIF",
                    description: "Salva come GIF per impostazione predefinita"
                }
            }
        },
        randomVoice: {
            name: "Voce casuale",
            description: "Aggiunge un pulsante di partecipazione a una chiamata vocale casuale accanto al pulsante di disattivazione audio.",
            tooltip: "Voce casuale",
            context: {
                label: "condizionatore del suono",
                amountLabel: "NUMERO DI UTENTI",
                spacesLabel: "POSTO VACANTE",
                voiceLabel: "SES LİMİTİ",
                selfLabel: "LE TUE IMPOSTAZIONI",
                select: {
                    servers: "Seleziona Server",
                    list: "Seleziona Elenco",
                    filters: "Seleziona Filtri",
                    amount: "Numero di utenti",
                    userAmount: "{{importo}} utente",
                    parameters: "Parametri",
                    moreThan: "più di",
                    lessThan: "Meno di quello",
                    equalTo: "uguale a",
                    spaces: "Posto vacante",
                    voice: "I suoi limiti"
                },
                filter: {
                    muted: "in silenzio",
                    deafened: "assordato",
                    camera: "Telecamera",
                    stream: "Trasmissione",
                    includeFilters: "Includi filtri",
                    avoidFilters: "Evita i filtri"
                },
                reset: {
                    list: "Reimposta elenco"
                },
                voice: {
                    label: "Impostazioni audio",
                    auto: {
                        mute: "Disattivazione automatica",
                        deafen: "Autoassordante",
                        camera: "Fotocamera automatica",
                        stream: "Trasmissione automatica",
                        leaveWhenEmpty: "Parti quando sei libero",
                        navigate: "Navigazione automatica",
                        stage: "Evita i canali sul palco",
                        afk: "Evita i canali AFK"
                    }
                },
                invalid: {
                    server: "server non valido"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Transazione conteggio utente",
                    description: "Seleziona un'azione per il numero di utenti"
                },
                userAmount: {
                    label: "Numero di utenti",
                    description: "Seleziona il numero di utenti"
                },
                spacesLeftOperation: {
                    label: "Processo di posto vacante",
                    description: "Seleziona un'azione per il numero massimo di utenti"
                },
                spacesLeft: {
                    label: "Posto vacante",
                    description: "Seleziona la quantità di spazio libero"
                },
                vcLimitOperation: {
                    label: "Operazione di limitazione del canale audio",
                    description: "Seleziona un'azione per il limite del canale audio."
                },
                vcLimit: {
                    label: "Limite del canale audio",
                    description: "Scegli un limite per il canale audio"
                },
                servers: {
                    label: "Server",
                    description: "Server da includere"
                },
                autoNavigate: {
                    label: "Navigazione automatica",
                    description: "Va automaticamente al canale audio."
                },
                autoCamera: {
                    label: "Fotocamera automatica",
                    description: "Accende automaticamente la fotocamera"
                },
                autoStream: {
                    label: "Trasmissione automatica",
                    description: "Inizia automaticamente la trasmissione"
                },
                selfMute: {
                    label: "Disattivazione automatica",
                    description: "Disattiva automaticamente il microfono quando ti unisci al canale audio."
                },
                selfDeafen: {
                    label: "Autoassordante",
                    description: "Ti assorda automaticamente quando ti unisci al canale vocale."
                },
                leaveEmpty: {
                    label: "Parti quando sei libero",
                    description: "Quando il canale vocale si svuota, trova casualmente un'altra chiamata."
                },
                avoidStages: {
                    label: "Evita i canali sul palco",
                    description: "Evita di unire canali audio di tipo stage."
                },
                avoidAfk: {
                    label: "Evita i canali AFK",
                    description: "AFK evita di unirsi ai canali audio."
                },
                video: {
                    label: "Video",
                    description: "Cerca gli utenti le cui fotocamere sono accese"
                },
                stream: {
                    label: "Trasmissione",
                    description: "Cerca gli utenti che stanno trasmettendo"
                },
                mute: {
                    label: "in silenzio",
                    description: "Cerca gli utenti disattivati"
                },
                deafen: {
                    label: "assordato",
                    description: "Cerca utenti sordi"
                },
                includeStates: {
                    label: "Includi filtri",
                    description: "Consente l'inclusione di stati utente specifici"
                },
                avoidStates: {
                    label: "Evita i filtri",
                    description: "Consente di evitare determinate situazioni utente"
                }
            },
            alert: {
                failed: "Impossibile trovare un canale audio!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "React converte i codici di errore in messaggi leggibili dall'uomo."
        },
        readAllNotificationsButton: {
            name: "Pulsante Leggi tutte le notifiche",
            description: "Aggiunge un pulsante al pannello delle notifiche per contrassegnare tutte le notifiche come lette con un solo clic.",
            button: "Leggi tutto"
        },
        recentDMSwitcher: {
            name: "DMSwitcher recente",
            description: "Passa da un messaggio diretto all'altro utilizzato di recente con Ctrl+Tab (Ctrl+Shift+Tab inverte)",
            option: {
                visualStyle: {
                    label: "Stile visivo",
                    description: "Stile dell'indicatore visivo che appare quando si cambia",
                    overlay: "Livello (stile Alt+Tab)",
                    toast: "Notifica (messaggio di stato)",
                    off: "Chiuso"
                },
                overlayMode: {
                    label: "Modalità livello",
                    description: "Contenuto a strati",
                    row: "Ultima riga delle conversazioni",
                    current: "solo disponibile",
                },
                amountOfUsers: {
                    label: "Numero di utenti",
                    description: "Numero di utenti da visualizzare sul livello"
                },
                overlayRowLength: {
                    label: "Lunghezza della riga del livello",
                    description: "Numero di messaggi diretti recenti da mostrare nella riga"
                },
                overlayShowAvatars: {
                    label: "Mostra immagini del profilo del livello",
                    description: "Mostra le immagini del profilo utente sul livello"
                },
                toastDurationMs: {
                    label: "Tempo di notifica (ms)",
                    description: "Mostra le immagini del profilo sul livello"
                },
                clearRdms: {
                    label: "Cancella elenco RDMS",
                    description: "Strumento di test: cancella l'elenco RDM",
                    toast: "La cronologia RDMS è stata cancellata",
                    button: "Cancella cronologia RDM"
                }
            },
            modal: {
                unknown: "Sconosciuto",
                dm: "DM",
                group: "Gruppo DM",
                channel: "Canale",
                switchingTo: "Passaggio a {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Ti avvisa quando un amico, una chat di gruppo o un server ti rimuove.",
            option: {
                notices: {
                    label: "Notifiche",
                    description: "Mostra una notifica nella parte superiore dello schermo quando viene rimosso (usalo se non vuoi perdere nessuna notifica)."
                },
                offlineRemovals: {
                    label: "Rimozioni offline",
                    description: "Invia una notifica se sei stato rimosso mentre sei offline quando apri Discord."
                },
                friends: {
                    label: "Amici",
                    description: "Avvisami quando un amico ti rimuove dalla sua lista"
                },
                friendRequestCancels: {
                    label: "Cancellazioni di richieste di amicizia",
                    description: "Avvisami quando una richiesta di amicizia viene annullata"
                },
                servers: {
                    label: "Server",
                    description: "Notifica quando viene rimosso da un server"
                },
                groups: {
                    label: "Gruppi",
                    description: "Avvisami quando rimosso da una chat di gruppo"
                }
            },
            notification: {
                removedFriend: "{{user}} ti ha tolto l'amicizia.",
                cancelledFriendRequest: "Una richiesta di amicizia inviata da {{user}} è stata annullata.",
                removedFromServer: "Sei stato rimosso da {{server}}.",
                removedFromGroup: "Sei stato rimosso da {{group}}.",
                noLongerGroup: "Non sei più in {{group}}.",
                noLongerServer: "Non sei più su {{server}}.",
                noLongerFriend: "Non sei più amico di {{user}}.",
                friendRequestRevoked: "La richiesta di amicizia inviata da {{user}} è stata ritirata.",
                ok: "OK"
            }
        },
        remix: {
            name: "Remix",
            description: "Aggiunge un'opzione \"Remix\" al menu di scelta rapida del pulsante di invio file. Questo apre un'immagine in un semplice editor di immagini e ti dà la possibilità di inviare l'immagine modificata direttamente alla chat.",
            label: "Remix",
            button: {
                send: "Inviare",
                close: "Trimestre",
                brush: "Spazzola",
                erase: "Spolverino",
                crop: "Raccolto",
                shape: "Forma",
                reset: "reset",
                clear: "chiaro"
            },
            editor: {
                choose: "Seleziona un'immagine",
                browse: "Gozat",
                rectangle: "Rettangolo",
                ellipse: "Ellisse",
                line: "Linea",
                arrow: "OK",
                fill: "riempire"
            }
        },
        repeatMessages: {
            name: "RipetiMessaggi",
            description: "Ti consente di inviare nuovamente rapidamente i messaggi. Se tieni premuto il tasto Maiusc mentre fai clic su Ripeti, lo invierà come risposta al messaggio.",
            button: "Ripeti (clic) / Ripeti e rispondi (Maiusc + clic)",
            context: {
                repeat: "ripetere",
                repeatAndReply: "Ripeti e rispondi"
            }
        },
        replaceGoogleSearch: {
            name: "SostituisciRicercaGoogle",
            description: "Sostituisce la ricerca di Google con diversi motori di ricerca.",
            option: {
                customEngineName: {
                    label: "Nome del motore personalizzato",
                    description: "Nome del motore di ricerca personalizzato"
                },
                customEngineURL: {
                    label: "URL del motore personalizzato",
                    description: "L'URL del tuo motore di ricerca"
                },
                replacementEngine: {
                    label: "Motore di ricerca di backup",
                    description: "Sostituisce il motore di ricerca di backup con un motore di ricerca specifico (invece di aggiungere un menu)",
                    off: "Chiuso",
                    custom: "Motore speciale",
                }
            },
            context: {
                label: "Metni Ara",
                searchWith: "{{name}} La casa di Ara"
            }
        },
        replyPingControl: {
            name: "RispondiPingControl",
            description: "Ti consente di controllare sempre o mai il ping nelle risposte ai messaggi, include anche la funzionalità whitelist",
            option: {
                alwaysPingOnReply: {
                    label: "Rispondi sempre a Ping",
                    description: "Ricevi un ping ogni volta che qualcuno risponde ai tuoi messaggi"
                },
                replyPingWhitelist: {
                    label: "Lista bianca ping di risposta",
                    description: "Inserisci gli ID degli utenti da cui desideri ricevere sempre un ping di risposta, separati da virgole."
                }
            }
        },
        replyTimestamp: {
            name: "RispondiTimestamp",
            description: "Mostra il timestamp nelle anteprime dei messaggi con risposta"
        },
        revealAllSpoilers: {
            name: "Rivela tutti gli spoiler",
            description: "Ctrl+clic su uno spoiler per mostrare tutti gli spoiler in un messaggio, Ctrl+Maiusc per mostrare tutti gli spoiler nell'intera chat"
        },
        reverseImageSearch: {
            name: "Ricerca inversa delle immagini",
            description: "Aggiunge le opzioni di ricerca inversa delle immagini ai menu di scelta rapida delle immagini",
            context: {
                label: "Cerca immagine",
                all: "Cerca tutto"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Valuta gli altri utenti (aggiunge una nuova sezione delle impostazioni ai Profili)",
            notification: {
                newReview: "Ci sono nuove recensioni sul tuo profilo!",
                auth: {
                    error: "Si è verificato un errore durante l'autorizzazione",
                    successfully: "Accesso effettuato con successo!",
                    failed: "Autorizzazione fallita",
                    review: "Si prega di autorizzare ad aggiungere una recensione.",
                    opening: "Si apre la finestra di autorizzazione...",
                    need: "Per valutare è necessaria l'autorizzazione!"
                },
                error: {
                    fast: "Stai facendo richieste troppo velocemente. Attendi qualche secondo e riprova.",
                    fetching: "Si è verificato un errore durante il recupero delle recensioni.",
                    action: {
                        failed: "Impossibile raggiungere l'utente {{action}}",
                        success: "L'utente ha eseguito con successo l'{{action}}"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Sei sicuro?",
                    description: "Vuoi davvero eliminare questa recensione?",
                    confirm: "Sil",
                    cancel: "Cancellare",
                    error: "Devi effettuare il login per eliminare le recensioni.",
                },
                report: {
                    title: "Sei sicuro?",
                    description: "Vuoi davvero segnalare questa recensione?",
                    confirm: "Dichiarazione",
                    cancel: "Cancellare",
                    error: "Devi essere loggato per pubblicare recensioni.",
                },
                block: {
                    title: "Sei sicuro?",
                    description: "Vuoi davvero bloccare questo utente? Non vedrai più le loro recensioni.",
                    confirm: "bloccare",
                    cancel: "Cancellare",
                    error: "Devi essere loggato per bloccare gli utenti.",
                },
                blocked: {
                    title: "Utenti bloccati",
                    auth: "Non hai effettuato l'accesso a ReviewDB.",
                    noBlocked: "Nessun utente è bloccato.",
                    fetch: "Si è verificato un errore durante il recupero degli utenti bloccati"
                },
                reviews: {
                    title: "Recensioni degli utenti",
                    noUser: "Sembra che nessuno abbia ancora recensito questo utente. Puoi essere il primo!",
                    noServer: "Sembra che nessuno abbia ancora recensito questo server. Puoi essere il primo!"
                }
            },
            button: {
                appeal: "Obiezione",
                ok: "OK",
                more: "Di più",
                reply: "Rispondi a @{{utente}}",
                update: "Aggiorna recensione per @{{utente}}",
                review: "Recensione @{{utente}}"
            },
            context: {
                view: "Vedi Recensioni",
                blocked: "Hai bloccato questo utente",
                delete: "Elimina recensione",
                report: "Segnala revisione",
                block: "Blocca utente",
                unblock: "Sblocca utente",
                reply: "Rispondi alla recensione"
            },
            option: {
                authorize: {
                    label: "Autorizzare",
                    button: "Autorizza con ReviewDB"
                },
                notifyReviews: {
                    label: "Avviso di valutazione",
                    description: "Notifica nuove recensioni all'avvio"
                },
                showWarning: {
                    label: "Mostra avviso",
                    description: "Mostra un avvertimento rispettoso sopra la rubrica"
                },
                hideTimestamps: {
                    label: "Nascondi timestamp",
                    description: "Nascondi i timestamp sulle recensioni"
                },
                hideBlockedUsers: {
                    label: "Nascondi utenti bloccati",
                    description: "Nascondi le recensioni degli utenti che hai bloccato"
                },
                buttons: {
                    label: "Pulsanti",
                    manageBlocked: "Gestisci gli utenti bloccati",
                    support: "Supporta lo sviluppo di ReviewDB",
                    website: "Sito web ReviewDB",
                    server: "Server di supporto ReviewDB"
                }
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Tratta i collegamenti magnetici come collegamenti ai messaggi (con anteprima)",
            unknown: "nome file sconosciuto"
        },
        roleColorEverywhere: {
            name: "RuoloColorOvunque",
            description: "Ove possibile, mostra il colore del ruolo principale",
            option: {
                chatMentions: {
                    label: "Menzioni in chat",
                    description: "Mostra i colori dei ruoli nelle menzioni della chat (inclusa la finestra dei messaggi)"
                },
                memberList: {
                    label: "Elenco dei membri",
                    description: "Mostra i colori dei ruoli nei titoli dei ruoli dell'elenco dei membri"
                },
                voiceUsers: {
                    label: "Utenti vocali",
                    description: "Mostra i colori dei ruoli nell'elenco degli utenti della chat vocale"
                },
                reactorsList: {
                    label: "Elenco dei reattori",
                    description: "Mostra i colori dei ruoli nell'elenco degli utenti con reazioni emoji"
                },
                pollResults: {
                    label: "Risultati del sondaggio",
                    description: "Mostra i colori dei ruoli nei risultati del sondaggio"
                },
                colorChatMessages: {
                    label: "Colora i tuoi messaggi di chat",
                    description: "Colora i messaggi di chat in base al colore del ruolo dell'autore"
                },
                messageSaturation: {
                    label: "Saturazione dei messaggi",
                    description: "Intensità di colorazione del messaggio"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Modifica qualsiasi contenuto e tipo di Rich Presence",
            option: {
                replacedAppIds: {
                    label: "Identità dell'applicazione (ID) modificate",
                }
            },
            modal: {
                tutorial: {
                    title: "ID degli eventi attualmente in esecuzione",
                    noRunning: "Nessun evento in corso",
                    available: "Variabili disponibili",
                    variableText: "In tutti i campi (tranne l'URL del post), puoi inserire variabili che verranno automaticamente sostituite con il loro contenuto originale:",
                    more: "Maggiori dettagli",
                    details: {
                        leave: "Per lasciare un campo così com'è, lascialo vuoto.",
                        set: "Digita \"null\" per nascondere un campo nell'indicatore di stato.",
                        reload: "Potrebbe essere necessario riavviare Discord affinché le modifiche vengano applicate."
                    }
                },
                settings: {
                    applyEdits: "Applica le modifiche all'app",
                    addNewApp: "Aggiungi nuova app",
                    appId: "ID dell'applicazione",
                    invalidAppId: "ID dell'applicazione non valido",
                    newActivityType: "Nuovo tipo di evento",
                    activityTypes: {
                        playing: "giocando",
                        watching: "guardando",
                        listening: "ascolto",
                        competing: "corsa",
                        streaming: "in onda"
                    },
                    streamUrl: "URL dello streaming (deve essere YouTube o Twitch)",
                    invalidStreamUrl: "URL del post non valido",
                    newName: "nuovo nome",
                    newDetails: "nuovi dettagli",
                    newState: "nuova situazione",
                    largeImage: "quadro generale",
                    smallImage: "clip art",
                    text: "Testo",
                    url: "URL",
                    firstLine: "(prima riga)",
                    secondLine: "(seconda riga)",
                    thirdLine: "(terza riga)",
                    alsoThirdLine: "(anche terza riga)",
                    hideAssets: "Nascondi immagini (immagini grandi e piccole)",
                    hideTimestamps: "Nascondi timestamp"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Visualizza le statistiche sulla tua attività come Rich Presence",
            option: {
                assetURL: {
                    label: "URL visivi",
                    description: "L'immagine da utilizzare per RPC. Se lasciato vuoto, verrà utilizzata la tua immagine del profilo"
                },
                rpcTitle: {
                    label: "Intestazione RPC",
                    description: "Titolo del tuo RPC"
                },
                statDisplay: {
                    label: "Visualizzazione delle statistiche",
                    description: "Cosa deve visualizzare RPC? (Probabilmente è consentita solo una riga)",
                    today: "Quantità di messaggi inviati oggi",
                    alltime: "Quantità di messaggi inviati in ogni momento",
                    listened: "L'album più ascoltato della settimana"
                },
                lastFMApiKey: {
                    label: "Chiave API Last.fm",
                    description: "La tua chiave API Last.fm"
                },
                lastFMUsername: {
                    label: "Nome utente Last.fm",
                    description: "Il tuo nome utente Last.fm"
                },
                albumCoverImage: {
                    label: "Immagine di copertina dell'album",
                    description: "Utilizzare la copertina dell'album come immagine RPC? (Se è selezionata la visualizzazione Last.fm)"
                },
                lastFMStatFormat: {
                    label: "Formato statistiche Last.fm",
                    description: "Come dovrebbero essere formattate le statistiche di Last.fm? $album viene sostituito con il nome dell'album, $artist viene sostituito con il nome dell'artista"
                }
            },
            noInfo: "Nessuna informazione al momento :(",
            messagesToday: "Messaggi inviati oggi: {{count}}",
            messagesAllTime: "Messaggi inviati in ogni momento: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "Salva GIF preferite",
            description: "Esporta i collegamenti GIF preferiti",
            toolbox: "Salva le GIF preferite",
            title: "Salva le GIF preferite",
            command: {
                savegifs: {
                    description: "Salva tutti i collegamenti GIF preferiti in un file di testo"
                },
                saveworkinggifs: {
                    description: "Testa tutte le tue GIF preferite e salva solo quelle che funzionano ancora"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Mostra pulsante Casella degli strumenti",
                    description: "Mostra il pulsante \"Salva GIF preferite\" nella casella degli strumenti Plexcord (richiede il riavvio)"
                }
            },
            toast: {
                save: "GIF salvate con successo come {{filename}}",
                failed: "Impossibile salvare le GIF",
                no: "GIF preferita non trovata!",
                testing: "{{count}} GIF sono in fase di test, l'operazione potrebbe richiedere del tempo...",
                noneWorking: "Nessuna delle GIF salvate sembra funzionare.",
                saved: "{{broken}} GIF potenzialmente danneggiate sono state filtrate. {{saved}} GIF funzionanti salvate."
            }
        },
        scheduledMessages: {
            name: "Messaggi pianificati",
            description: "Pianifica i messaggi da inviare a una determinata ora o dopo un determinato ritardo.",
            toolbox: {
                toggle: "Visualizza i messaggi pianificati"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Numero massimo di messaggi al minuto",
                    description: "Il numero massimo di messaggi programmati che possono essere inviati su un canale nello stesso minuto."
                },
                checkIntervalSeconds: {
                    label: "Intervallo di controllo (secondi)",
                    description: "Con quale frequenza il plugin controllerà se ci sono messaggi da inviare."
                },
                showNotifications: {
                    label: "Mostra notifiche",
                    description: "Mostra la notifica (brindisi) quando vengono inviati i messaggi."
                },
                showPhantomMessages: {
                    label: "Mostra messaggi fantasma",
                    description: "Mostra i messaggi programmati come messaggi fantasma (temporanei) nella chat."
                }
            },
            channelType: {
                unknown: "Sconosciuto",
                dm: "DM",
                groupDm: "Gruppo DM",
                channel: "Canale"
            },
            toast: {
                messageSent: "Messaggio programmato inviato a {{channel}}",
                messageFailed: "Impossibile inviare il messaggio pianificato",
                maxMessagesReached: "È stato raggiunto il limite massimo di {{max}} messaggi al minuto per canale",
                messageScheduled: "Messaggio pianificato!",
                messageRemoved: "Messaggio programmato rimosso",
                allCleared: "Tutti i messaggi programmati sono stati cancellati"
            },
            button: {
                tooltipOn: "Modalità di pianificazione attivata (fare clic per disattivare, fare clic con il pulsante destro del mouse per l'elenco)",
                tooltipOff: "Modalità di pianificazione disattivata (fare clic per abilitare, fare clic con il pulsante destro del mouse per l'elenco)"
            },
            accessory: {
                scheduledFor: "Programmato per {{date}} {{timeLeft}}",
                remaining: {
                    days: "{{days}}g {{hours}} rimanenti",
                    hours: "{{hours}}s {{minutes}}minuti rimasti",
                    minutes: "{{minutes}}min rimasti"
                }
            },
            scheduleModal: {
                title: "Pianifica il messaggio",
                schedulingFor: "Canale pianificato: {{channel}}",
                scheduleType: "Tipo di pianificazione",
                delay: "Ritardo",
                specificTime: "Orario specifico",
                delayMinutes: "Ritardo (minuti)",
                dateTime: "Data e ora",
                error: {
                    invalidDelay: "Inserisci un tempo di ritardo valido (minimo 1 minuto)",
                    invalidDateTime: "Seleziona una data e un'ora future"
                },
                schedule: "Pianificato",
                cancel: "Cancellare"
            },
            viewModal: {
                title: "Messaggi pianificati",
                clearAll: "Cancella tutto",
                noMessages: "Nessun messaggio programmato",
                delete: "Sil",
                close: "Trimestre"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Il fastidioso \"Abbiamo lasciato cadere la lente d'ingrandimento!\" corregge l'errore.",
            notPerfect: "Questa soluzione non è perfetta, quindi potrebbe essere necessario ricaricare la barra di ricerca per risolvere i problemi.",
            paragraph1: "Discord consente solo un offset massimo di 5000 (che è ciò che causa l'errore della lente di ingrandimento).",
            paragraph2: "Ciò significa che puoi vedere esattamente 5000 messaggi passati e 5000 messaggi futuri (ordinati in base al più vecchio).",
            paragraph3: "Questo plugin passa al metodo di ordinamento opposto per aggirare la restrizione di Discord,",
            paragraph4: "ma se il risultato della ricerca è di grandi dimensioni e provi a visualizzare un messaggio che non è raggiungibile con nessuno dei due metodi di ordinamento,",
            paragraph5: "il plugin mostra solo l'offset 0 (il messaggio più recente o più vecchio a seconda del metodo di ordinamento)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Discord riproduce sempre la versione segreta della suoneria (ad eccezione di eventi speciali della suoneria)",
            option: {
                onlySnow: {
                    label: "Solo durante l'evento suoneria neve",
                    description: "Gioca solo al tema Snow Halation"
                }
            }
        },
        summaries: {
            name: "Riepiloghi",
            description: "Abilita la funzione Riepiloghi sperimentali di Discord su tutti i server e mostra i riepiloghi delle conversazioni generati dall'intelligenza artificiale",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Soglia di eliminazione riepilogativa (giorni)",
                    description: "Il numero di giorni di validità di un digest prima che venga rimosso. Tieni presente che vengono archiviati un massimo di 50 riepiloghi per canale"
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Aggiunge il canale corrente al popup dell'elenco di inoltro"
        },
        sendTimestamps: {
            name: "InviaTimestamp",
            description: "Invia facilmente timestamp con il pulsante della casella di chat e le scorciatoie di testo. Leggi la descrizione estesa!",
            sample: {
                paragraph1: "Per inviare rapidamente timestamp solo temporali, aggiungi timestamp nel formato \"HH:MM\" (comprese le virgolette inverse!) al tuo messaggio",
                paragraph2: "Vedi gli esempi qui sotto.\nSe hai bisogno di qualcosa di più specifico, usa il pulsante Data nella barra della chat!",
                examples: "Esempi:"
            },
            modal: {
                title: "Selettore timestamp",
                light: "Aprire",
                dark: "Buio",
                format: "Formato timestamp",
                preview: "Anteprima",
                insert: "Aggiungere",
                insertTimestamp: "Aggiungi timestamp"
            },
            option: {
                replaceMessageContents: {
                    label: "Modifica il contenuto del messaggio",
                    description: "Modificare i timestamp nel contenuto del messaggio"
                }
            }
        },
        serverInfo: {
            name: "Informazioni sul server",
            description: "Consente di visualizzare le informazioni su un server",
            context: {
                serverInfo: "Informazioni sul server"
            },
            option: {
                sorting: {
                    label: "Disposizione",
                    description: "Nome utente o nome visualizzato, se applicabile",
                    username: "Nome utente",
                    displayname: "Nome da visualizzare",
                    none: "Ordinamento"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Informazioni sul server",
                    friends: "Amici",
                    mutualUsers: "Utenti comuni",
                    blockedUsers: "Utenti bloccati",
                    ignoredUsers: "Utenti ignorati"
                },
                owner: "Proprietario del server",
                loading: "Caricamento...",
                createdAt: "Data di creazione",
                joinedAt: "Data di adesione",
                vanityLink: "Collegamento di invito speciale",
                preferredLocale: "Regione preferita",
                verification: {
                    level: "Livello di verifica",
                    none: "Nessuno",
                    low: "Basso",
                    medium: "Medio",
                    high: "Alto",
                    highest: "Più alto"
                },
                serverBoosts: "Potenziamenti del server",
                channels: "Canali",
                roles: "Rullo"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Aggiunge il numero di amici online o il numero di server all'elenco dei server",
            friends: "Amico",
            servers: "Presentatore",
            option: {
                mode: {
                    label: "Mod",
                    description: "Modalità da visualizzare nell'elenco dei server",
                    friend: "Numero di amici solo online",
                    server: "Solo numero di server",
                    both: "Numero di amici sia del server che online"
                },
                useCompact: {
                    label: "Modu Kullan compatto",
                    description: "Fa apparire la legenda solo con il testo"
                }
            }
        },
        serverSearch: {
            name: "Ricercaserver",
            description: "Naviga meglio tra i tuoi server con il pulsante di ricerca rapida",
            tooltip: "Compriamo"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Porta su Discord i blocchi di codice in stile VSCode basati su Shiki",
            option: {
                theme: {
                    label: "Lui",
                    description: "Temi predefiniti"
                },
                customTheme: {
                    label: "Tema personalizzato",
                    description: "Collegamento a un tema VSCode personalizzato",
                    mustURL: "Deve essere un URL valido",
                    mustJSON: "Deve essere un file JSON"
                },
                tryHljs: {
                    label: "Backup su Hljs",
                    description: "Utilizza il colore e il tema Discord predefiniti più chiari.",
                    never: "Mai",
                    secondary: "Scegli Shiki su Highlight.js",
                    primary: "Scegli Highlight.js invece di Shiki",
                    always: "Sempre"
                },
                useDevIcon: {
                    label: "Usa Devicon per le icone della lingua",
                    description: "Come mostrare le icone della lingua nei blocchi di codice",
                    disabled: "Disabilitato",
                    colorless: "Incolore",
                    colored: "Colorato"
                },
                bgOpacity: {
                    label: "Opacità dello sfondo",
                    description: "opacità dello sfondo"
                }
            },
            button: {
                copy: "copia",
                copied: "Copiato!"
            }
        },
        showAllMessageButtons: {
            name: "Mostra tutti i pulsanti dei messaggi",
            description: "Mostra sempre tutti i pulsanti dei messaggi, indipendentemente dal fatto che si premi o meno il tasto Maiusc.",
            option: {
                noShiftDelete: {
                    label: "Elimina senza Maiusc",
                    description: "Elimina la necessità di premere il tasto Maiusc per eliminare un messaggio."
                },
                noShiftPin: {
                    label: "Fissazione senza spostamento",
                    description: "Elimina la necessità di premere il tasto Maiusc per appuntare un messaggio."
                }
            }
        },
        showBadgesInChat: {
            name: "MostraBadgesInChat",
            description: "Mostra i badge accanto al nome dell'autore del messaggio nella chat.",
            option: {
                showPlexcordDonor: {
                    label: "Mostra il tuo badge da donatore Plexcord",
                    description: "Abilita per mostrare i badge Donatore Plexcord nella chat."
                },
                plexcordDonorPosition: {
                    label: "Posizione del badge donatore Plexcord",
                    description: "Posizione dei badge Donatore Plexcord."
                },
                showPlexcordContributor: {
                    label: "Mostra badge collaboratore Plexcord",
                    description: "Abilita per mostrare i badge Collaboratore Plexcord nella chat."
                },
                plexcordContributorPosition: {
                    label: "Posizione del badge collaboratore Plexcord",
                    description: "Posizione dei badge Collaboratore Plexcord."
                },
                showDiscordProfile: {
                    label: "Mostra il badge del profilo Discord",
                    description: "Abilita per mostrare i badge del profilo Discord nella chat."
                },
                discordProfilePosition: {
                    label: "Posizione del badge del profilo Discord",
                    description: "Posizione dei badge del profilo Discord."
                },
                showDiscordNitro: {
                    label: "Mostra il distintivo Discord Nitro",
                    description: "Abilita per mostrare i badge Discord Nitro nella chat."
                },
                discordNitroPosition: {
                    label: "Posizione del badge Discord Nitro",
                    description: "Posizione dei badge Discord Nitro."
                },
                badgeSettings: {
                    label: "Impostazioni del badge",
                    description: "Configura le posizioni degli altri badge mostrati nella chat.",
                    modal: "Trascina per riordinare i badge; Fare clic per abilitare/disabilitare un tipo di badge specifico."
                }
            },
            badge: {
                plexcord: "Distintivo sostenitore Plexcord",
                contributor: "Badge partecipante Plexcord",
                discordProfile: "Discord profilo rozetleri (HypeSquad, Discord Staff, Active Developer vb.)",
                nitro: "distintivo nitro",
                staff: "Bastone della Discordia",
                partner: "Proprietario del server partner",
                events: "Eventi HypeSquad",
                bravery: "Il coraggio di HypeSquad",
                brilliance: "Brillantezza di HypeSquad",
                balance: "Saldo HypeSquad",
                bugHunter: "Cacciatore di insetti della discordia",
                earlyVerifiedBotDeveloper: "Sviluppatore di bot verificato in anticipo",
                earlySupporter: "Primo sostenitore",
                moderatorProgram: "Laureato del programma moderatore"
            },
            modal: {
                plexcordContributor: "Partecipante Plexcord",
                discordNitro: "Discordia Nitro",
                basic: "Di base",
                classic: "Classica"
            }
        },
        showConnections: {
            name: "MostraConnessioni",
            description: "Mostra gli account collegati nelle schede popup utente",
            option: {
                iconSize: {
                    label: "Dimensioni dell'icona",
                    description: "Dimensione icona (px)"
                },
                iconSpacing: {
                    label: "Spazio icona",
                    description: "margine dell'icona",
                    compact: "Compatto",
                    cozy: "Comodo",
                    roomy: "Ampio"
                }
            }
        },
        showHiddenChannels: {
            name: "Mostra canali nascosti",
            description: "Mostra i canali a cui non sei autorizzato ad accedere.",
            tooltip: "Canale segreto",
            option: {
                channelStyle: {
                    label: "Stile del canale",
                    description: "Lo stile utilizzato per visualizzare i canali nascosti.",
                    classic: "Classico",
                    muted: "Silenzioso",
                    showUnreads: "Mostra non letto",
                    mutedWithUnreads: "Mostra disattivato e non letto"
                },
                showMode: {
                    label: "Modalità di visualizzazione",
                    description: "La modalità utilizzata per visualizzare i canali nascosti.",
                    lock: "Stile semplice con l'icona del lucchetto",
                    hidden: "Stile disattivato con icona dell'occhio nascosto sulla destra",
                    lockIconRight: "Icona del lucchetto a destra"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Stato elenco a discesa utenti e ruoli con autorizzazioni predefinite",
                    description: "Se il menu degli utenti e dei ruoli consentiti sarà aperto per impostazione predefinita nei canali privati"
                }
            },
            channelType: {
                text: "testo",
                announcement: "annuncio",
                forum: "foro",
                voice: "ses",
                stage: "scena"
            },
            sortOrder: {
                latestActivity: "Ultimo evento",
                creationDate: "Data di creazione"
            },
            forumLayout: {
                default: "Non impostato",
                list: "Visualizzazione elenco",
                grid: "vista della galleria"
            },
            videoQuality: {
                auto: "Automatico",
                full: "720p"
            },
            modal: {
                hidden: "nascosto",
                locked: "bloccato",
                threads: "argomenti",
                posts: "post",
                messages: "messaggi",
                post: "inviare",
                message: "messaggio",
                unknown: "sconosciuto",
                permissionDetails: "Dettagli del permesso",
                thisIsA: "Questo è un canale {{status}} {{channelType}}",
                canNotSee: "Non puoi vedere la parte {{type}} di questo canale.",
                guidelines: "Ma puoi vedere le loro istruzioni:",
                lastCreated: "Ultima creazione {{type}}:",
                lastPin: "Ultimo post bloccato:",
                threadSlowmode: "Modalità lenta del thread predefinita:",
                slowmode: "Modalità lenta:",
                bitrate: "Velocità in bit:",
                region: "Zona:",
                automatic: "Automatico",
                videoQuality: "Modalità qualità video:",
                inactiveArchiveDuration: "Periodo di inattività predefinito prima dell'archiviazione {{type}}",
                defaultLayout: "Disposizione predefinita:",
                defaultSort: "Ordinamento predefinito:",
                defaultReaction: "Emoji di reazione predefinita:",
                requireTag: "È obbligatorio impostare un tag per i post in questo forum.",
                availableTags: "Tag disponibili:",
                allowedUsersAndRoles: "Utenti e ruoli consentiti:",
                hideAllowedUsersAndRoles: "Nascondi utenti e ruoli autorizzati",
                viewAllowedUsersAndRoles: "Visualizza utenti e ruoli autorizzati"
            }
        },
        showHiddenThings: {
            name: "Mostra cose nascoste",
            description: "Mostra varie cose nascoste e riservate ai moderatori indipendentemente dalle autorizzazioni.",
            option: {
                showTimeouts: {
                    label: "Mostra il timeout del membro nella chat",
                    description: "Mostra le icone di timeout dei membri nella chat."
                },
                showInvitesPaused: {
                    label: "Mostra le informazioni sugli inviti in pausa",
                    description: "Mostra che gli inviti sono in pausa nell'elenco dei server."
                },
                showModView: {
                    label: "Mostra vista mod",
                    description: "Mostra l'opzione del menu contestuale di visualizzazione della modalità membro su tutti i server."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbed",
            description: "Aggiunge l'opzione mostra incorporamento al menu contestuale per i collegamenti che non hanno incorporamenti",
            context: {
                embed: {
                    show: "Mostra incorporamento",
                    hide: "Rimuovi Incorpora"
                }
            },
            error: {
                failed: "Impossibile recuperare l'incorporamento",
                noEmbed: "Incorporamento non trovato"
            }
        },
        showMeYourName: {
            name: "Mostrami il tuo nome",
            description: "Visualizza qualsiasi permutazione di nickname personalizzati, nickname di amici, nickname di server, nomi visualizzati e nomi utente nella chat.",
            option: {
                messages: {
                    label: "Messaggi",
                    description: "Visualizza il formato del nome personalizzato nei messaggi."
                },
                replies: {
                    label: "Risposte",
                    description: "Visualizza il formato del nome personalizzato nelle risposte."
                },
                mentions: {
                    label: "Menzioni",
                    description: "Visualizza il formato del nome personalizzato nelle menzioni."
                },
                memberList: {
                    label: "Elenco dei membri",
                    description: "Mostra il primo nome disponibile elencato nel formato del nome personalizzato nell'elenco dei membri."
                },
                typingIndicator: {
                    label: "Indicatore di scrittura",
                    description: "Mostra il primo nome disponibile elencato nel formato del nome personalizzato nell'indicatore di digitazione."
                },
                profilePopout: {
                    label: "Scheda pop-up del profilo",
                    description: "Mostra il primo nome disponibile elencato nel formato del nome personalizzato nelle schede popup del profilo."
                },
                voiceChannels: {
                    label: "Canali audio",
                    description: "Mostra il primo nome disponibile elencato nel formato del nome personalizzato sui canali audio."
                },
                reactions: {
                    label: "Reazioni",
                    description: "Mostra il primo nome disponibile elencato nel formato del nome personalizzato nelle descrizioni comandi di reazione e mostra il nome completo nei popup di reazione."
                },
                discriminators: {
                    label: "Mostra parser",
                    description: "Aggiungi il parser ai nomi utente dei bot. I parser sono stati rimossi per gli utenti normali, ma vengono ancora utilizzati per i bot. Per impostazione predefinita, il nome utente di un bot equivale al nome globale di un utente e pertanto più bot possono avere lo stesso nome utente. L'aggiunta di parser li rende nuovamente unici."
                },
                hideDefaultAtSign: {
                    label: "Nascondi segno @ predefinito",
                    description: "Nascondi il simbolo predefinito \"@\" all'inizio del nome nelle menzioni e nelle risposte. Si applica solo se la funzionalità pertinente è abilitata."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Accorcia tutti i nomi in modalità editore",
                    description: "In modalità emittente, abbrevia tutti i nomi, non solo i nomi utente."
                },
                removeDuplicates: {
                    label: "Rimuovi duplicati",
                    description: "Se due nomi sono uguali, rimuovi i duplicati, lasciando solo quelli univoci."
                },
                ignoreFonts: {
                    label: "Ignora i caratteri",
                    description: "Per il secondo, terzo e quarto nome, utilizzare GG SANS, ignorando il carattere personalizzato dell'utente."
                },
                ignoreGradients: {
                    label: "Ignora gradienti",
                    description: "Per i nomi non primari, se il ruolo ha un gradiente e il colore successivo è impostato su \"Ruolo+-#\", utilizza il colore primario anziché l'intero gradiente e, se è presente un effetto nitro, ignoralo completamente."
                },
                animateGradients: {
                    label: "Rendi animati i gradienti",
                    description: "Mostra l'animazione se il secondo, terzo e quarto nome hanno un gradiente di ruolo. Disabilitato se 'Ignora gradienti' è abilitato o il movimento ridotto è attivo."
                },
                nameSeparator: {
                    label: "Separatore di nomi",
                    description: "Separatore da utilizzare tra i nomi. L'impostazione predefinita è uno spazio singolo."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Solo il nome dell'amico viene visualizzato nei messaggi privati",
                    description: "Mostra i nomi degli amici solo nei messaggi privati, non sui server."
                },
                customNameOnlyInDirectMessages: {
                    label: "Il nome personalizzato viene visualizzato solo nei messaggi privati",
                    description: "Mostra nomi personalizzati solo nei messaggi privati, non sui server."
                },
                includedNames: {
                    label: "Nomi inclusi",
                    description: "L'ordine in cui vengono visualizzati nomi utente, nomi visualizzati, soprannomi e nomi di amici. Utilizza questi segnaposto: {user}, {display}, {nick}, {friend}. Se un nome non è disponibile potete scrivere le alternative da utilizzare, separate da virgole: {friend, nick, display}. Puoi aggiungere tre prefissi e tre suffissi per ciascun nome."
                },
                customNameColor: {
                    label: "Colore nome personalizzato",
                    description: "Il colore da utilizzare per il nome personalizzato assegnato all'utente, se non è il primo visualizzato. Accetta qualsiasi input CSS valido. Utilizza \"Ruolo\" per tenere traccia dei colori del ruolo genitore dell'utente, dei colori dell'effetto nitro o del colore IRCColors (se abilitato). Utilizza \"Ruolo+-#\" per regolare la luminosità in base a questa percentuale (ad esempio \"Ruolo+15\")"
                },
                friendNameColor: {
                    label: "Colore nome amico",
                    description: "Il colore da utilizzare quando il nome dell'amico non è il primo nome visualizzato. Accetta qualsiasi input CSS valido. Utilizza \"Ruolo\" per tenere traccia dei colori del ruolo genitore dell'utente, dei colori dell'effetto nitro o del colore IRCColors (se abilitato). Utilizza \"Ruolo+-#\" per regolare la luminosità in base a questa percentuale (es: \"Ruolo+15\")"
                },
                nicknameColor: {
                    label: "Soprannome Colore",
                    description: "Il colore da utilizzare quando il soprannome non è il primo nome visualizzato. Accetta qualsiasi input CSS valido. Utilizza \"Ruolo\" per tenere traccia dei colori del ruolo genitore dell'utente, dei colori dell'effetto nitro o del colore IRCColors (se abilitato). Utilizza \"Ruolo+-#\" per regolare la luminosità in base a questa percentuale (es: \"Ruolo+15\")"
                },
                displayNameColor: {
                    label: "Colore nome visualizzato",
                    description: "Il colore da utilizzare quando il nome visualizzato non è il primo nome visualizzato. Accetta qualsiasi input CSS valido. Utilizza \"Ruolo\" per tenere traccia dei colori del ruolo genitore dell'utente, dei colori dell'effetto nitro o del colore IRCColors (se abilitato). Utilizza \"Ruolo+-#\" per regolare la luminosità in base a questa percentuale (es: \"Ruolo+15\")"
                },
                usernameColor: {
                    label: "Colore nome utente",
                    description: "Il colore da utilizzare quando il nome utente non è il primo nome visualizzato. Accetta qualsiasi input CSS valido. Utilizza \"Ruolo\" per tenere traccia dei colori del ruolo genitore dell'utente, dei colori dell'effetto nitro o del colore IRCColors (se abilitato). Utilizza \"Ruolo+-#\" per regolare la luminosità in base a questa percentuale (es: \"Ruolo+15\")"
                },
                triggerNameRerender: {
                    label: "Attiva la rigenerazione del nome",
                    description: "La modifica di questa impostazione attiva la rigenerazione del nome."
                }
            },
            modal: {
                change: {
                    title: "Cambia nome utente SMYN",
                },
                add: {
                    title: "Aggiungi il soprannome SMYN"
                },
                setCustom: "Imposta un nickname SMYN personalizzato per questo utente. Utilizzare specificando {custom} nelle impostazioni del modello SMYN.",
                nickname: "SMYN Soprannome",
                reset: "Reimposta il soprannome SMYN",
                cancel: "Cancellare"
            }
        },
        showResourceChannels: {
            name: "Mostra canali di risorse",
            description: "Mostra i canali nascosti dietro le risorse del server nell'elenco dei canali"
        },
        showSongName: {
            name: "Mostra nome della canzone",
            description: "Mostra il nome del brano anziché l'artista per l'evento Spotify"
        },
        showTimeoutDuration: {
            name: "MostraTimeoutDuration",
            description: "Indica per quanto tempo un utente andrà in timeout nella descrizione comando dell'icona di timeout o accanto ad essa",
            option: {
                displayStyle: {
                    label: "Stile di visualizzazione",
                    description: "Come visualizzare il periodo di timeout",
                    tooltip: "Nella descrizione comando",
                    inline: "Accanto all'icona del timeout"
                }
            }
        },
        sidebarChat: {
            name: "Barra lateraleChat",
            description: "Apri un altro canale o DM come barra laterale o popup",
            toolbox: {
                label: "Apri la chat precedente"
            },
            context: {
                label: "Apri la chat della barra laterale"
            },
            modal: {
                switch: "Cambia canali",
                popout: "Apri la chat come popup",
                close: "Chiudi la chat della barra laterale"
            },
            option: {
                persistSidebar: {
                    label: "Rendi permanente la chat della barra laterale",
                    description: "Consente alla chat della barra laterale di rimanere aperta al riavvio di Discord"
                },
                patchCommunity: {
                    label: "Applica la patch della comunità",
                    description: "Applica patch agli elementi sui server della comunità, come il browser dei canali o la scheda Membri."
                }
            }
        },
        signature: {
            name: "Firma",
            description: "Firma automatica/fine del testo del messaggio",
            option: {
                name: {
                    label: "Firma",
                    description: "Testo della firma da aggiungere alla fine dei tuoi messaggi"
                },
                textHeader: {
                    label: "Titolo del testo",
                    description: "Titolo da aggiungere all'inizio del testo"
                },
                showIcon: {
                    label: "Mostra icona",
                    description: "Mostra un'icona nella barra della chat per attivare e disattivare il plug-in"
                },
                contextMenu: {
                    label: "Menù contestuale",
                    description: "Aggiungi un'opzione per attivare/disattivare la funzionalità nel menu contestuale di accesso alla chat"
                },
                isEnabled: {
                    label: "Efficace",
                    description: "Funzione di commutazione"
                }
            },
            tooltip: {
                enable: "Abilita firma",
                disable: "Disabilita firma"
            },
            context: {
                enable: "Abilita firma"
            },
            command: {
                signature: {
                    name: "Firma",
                    description: "Attiva e disattiva la tua firma",
                    toogle: "Modifica la tua firma (comportamento predefinito: modifica)",
                    enabled: "Firma abilitata",
                    disabled: "La firma è disabilitata"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Aggiunge un pulsante alla barra della chat per attivare e disattivare l'invio di messaggi silenziosi.",
            option: {
                persistState: {
                    label: "Rendi lo stato permanente",
                    description: "Determinare come rendere persistente lo stato di attivazione/disattivazione del messaggio silenzioso",
                    none: "Non dovrebbe essere permanente (dovrebbe essere ripristinato quando si cambia canale)",
                    channels: "Rendilo persistente su tutti i canali",
                    restarts: "Persisti tra i canali e Discord si riavvia"
                },
                autoDisable: {
                    label: "Disattivazione automatica",
                    description: "Disabilita nuovamente automaticamente la funzione dopo aver inviato un messaggio silenzioso"
                }
            },
            tooltip: {
                enable: "Abilita messaggio silenzioso",
                disable: "Disabilita messaggio silenzioso"
            }
        },
        silentTyping: {
            name: "Digitazione silenziosa",
            description: "Nascondi il tuo indicatore di digitazione dalla chat.",
            command: {
                silentTyping: {
                    name: "Digitazione silenziosa",
                    description: "Nascondi l'indicatore di digitazione dalla chat.",
                    toggle: {
                        name: "attivare/disattivare",
                        description: "Attiva/disattiva la funzione a livello globale, per canale o per server.",
                        global: "Globale",
                        channel: "Canale",
                        guild: "Presentatore"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Nascondi gli indicatori di digitazione degli altri utenti dalla parte superiore della barra della chat."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Nascondi gli indicatori di digitazione degli altri utenti dall'elenco dei membri."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Mostra un'icona nella barra della chat per attivare e disattivare rapidamente il plug-in."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Aggiungi un menu a discesa al menu contestuale della chat per modificare rapidamente le impostazioni del plug-in."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Determina se le informazioni di scrittura nei DM/canali/server verranno nascoste per impostazione predefinita."
                    }
                }
            },
            content: {
                updated: "Le impostazioni di digitazione silenziosa sono state aggiornate.",
                noChanges: "Non sono state apportate modifiche alle impostazioni di digitazione silenziosa."
            },
            tooltip: {
                hidden: "Dice Nascosto ({{location}})",
                visible: "Scrive visibile ({{location}})",
                global: "Scrittura visibile (globale)"
            },
            option: {
                enabledGlobally: {
                    label: "Attivo a livello globale",
                    description: "Attiva/disattiva il tuo indicatore di scrittura a livello globale."
                },
                hideChatBoxTypingIndicators: {
                    label: "Nascondi gli indicatori di scrittura della casella di chat",
                    description: "Nascondi gli indicatori di digitazione nella parte superiore delle finestre di chat degli altri utenti."
                },
                hideMembersListTypingIndicators: {
                    label: "Nascondi gli indicatori di scrittura dell'elenco dei membri",
                    description: "Nascondi gli indicatori di digitazione nell'elenco dei membri di altri utenti."
                },
                chatIcon: {
                    label: "Icona chat",
                    description: "Mostra un'icona nella barra della chat per cambiare rapidamente il plugin."
                },
                chatIconLeftClickAction: {
                    label: "Icona chat Azione clic sinistro",
                    description: "Determina cosa fare quando si fa clic con il pulsante sinistro del mouse sull'icona della chat.",
                    global: "Modifica lo stato di scrittura globale",
                    channel: "Modifica lo stato di scrittura per il canale",
                    guild: "Modifica la scrittura sullo stato del server",
                    settings: "Apri le Impostazioni del plugin"
                },
                chatIconMiddleClickAction: {
                    label: "Icona chat Azione clic centrale",
                    description: "Determina cosa fare quando si fa clic con il pulsante centrale sull'icona della chat.",
                    global: "Modifica lo stato di scrittura globale",
                    channel: "Modifica lo stato di scrittura per il canale",
                    guild: "Modifica la scrittura sullo stato del server",
                    settings: "Apri le Impostazioni del plugin"
                },
                chatIconRightClickAction: {
                    label: "Icona chat Fare clic con il pulsante destro del mouse su Azione",
                    description: "Determina cosa fare quando fai clic con il pulsante destro del mouse sull'icona della chat.",
                    global: "Modifica lo stato di scrittura globale",
                    channel: "Modifica lo stato di scrittura per il canale",
                    guild: "Modifica la scrittura sullo stato del server",
                    settings: "Apri le Impostazioni del plugin"
                },
                chatContextMenu: {
                    label: "Menu contestuale della chat",
                    description: "Aggiungi un menu a discesa al menu contestuale della chat per modificare rapidamente le impostazioni del plug-in."
                },
                defaultHidden: {
                    label: "Predefinito nascosto",
                    description: "Se abilitato, il tuo indicatore sarà nascosto agli altri utenti su tutti i DM/canali/server non elencati nell'elenco \"Posizioni disabilitate\" di seguito. Se è disabilitato, il tuo indicatore apparirà in luoghi non inclusi nell'elenco \"Posizioni attive\"."
                },
                enabledLocations: {
                    label: "Posizioni attive",
                    description: "Abilita la funzione per questi ID. Accetta ID DM, ID canale e ID server separati da virgole. Utilizzato solo se 'Default Private' è disabilitato."
                },
                disabledLocations: {
                    label: "Posizioni disabilitate",
                    description: "Disabilitare la funzione per questi ID. Accetta ID DM, ID canale e ID server separati da virgole. Utilizzato solo se è abilitato \"Privato predefinito\"."
                }
            }
        },
        snowfall: {
            name: "Nevicata",
            description: "Lascia che nevichi su Discord!",
            about: {
                title: "Informazioni",
                paragraph: "Questo plugin aggiunge un effetto nevicata a tema natalizio sull'interfaccia Discord. Puoi modificare il tipo di neve dalle impostazioni seguenti.",
                note: "NOTA: anche se questo plug-in non crea un impatto maggiore sulle prestazioni rispetto a un plug-in Plexcord medio sulla maggior parte dei computer, potrebbe causare alcuni ritardi sui sistemi di fascia bassa."
            },
            option: {
                typeOfSnow: {
                    label: "tipo di auto",
                    description: "Cambia il tipo di neve visualizzata (influisce sulle prestazioni).",
                    solid: "Tinta unita (prestazioni massime)",
                    text: "Metin (prestazioni medie)",
                    emoji: "Visivo (prestazioni minime)"
                },
                maxSize: {
                    label: "Dimensione massima",
                    description: "Dimensione massima del fiocco di neve"
                },
                speed: {
                    label: "Velocità",
                    description: "Tasso di nevicate (più alto = caduta più rapida)"
                },
                flakesPerSecond: {
                    label: "Fiocchi di neve al secondo",
                    description: "Quantità di fiocchi di neve che cadono al secondo (maggiore = precipitazioni più intense)"
                }
            }
        },
        sortFriendRequests: {
            name: "Ordina richieste di amici",
            description: "Ordina le richieste di amicizia per data di ricezione",
            tooltip: "Aggiunto: {{data}}",
            option: {
                showDates: {
                    label: "Mostra date",
                    description: "Mostra le date nelle richieste di amicizia"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Registra tutti i suoni della tavola armonica riprodotti nelle chat vocali e ti consente di scaricarli",
            tooltip: "Apri il registro della SoundBoard",
            option: {
                savedIds: {
                    label: "ID della tavola armonica salvati",
                    description: "La quantità di ID della tavola armonica che desideri salvare alla volta (0 ti consente di salvare un numero illimitato)",
                    notNumber: "Il valore non è un numero.",
                    cantDecimal: "Il valore non può essere un numero decimale.",
                    cantNegative: "Il valore non può essere un numero negativo.",
                    heading: "La quantità di ID della tavola armonica che desideri salvare alla volta (0 ti consente di salvare un numero illimitato)",
                    warning: "Avvertimento! L'impostazione del numero su un valore inferiore ripristinerà i registri!",
                    placeholder: "Inserisci un numero"
                },
                fileType: {
                    label: "Tipo di file",
                    description: "Il formato in cui desideri salvare il file"
                },
                openLogs: {
                    label: "Apri registri",
                    description: "Mostra log",
                    button: "Apri registri"
                },
                soundVolume: {
                    label: "Livello sonoro",
                    description: "Volume del suono di attivazione/disattivazione (0 disattiva)"
                },
                iconLocation: {
                    label: "Posizione dell'icona",
                    description: "Scegli dove appare l'icona del registro SoundBoard (richiede il riavvio)",
                    toolbar: "Barra degli strumenti",
                    chatInput: "Accedi alla chat"
                }
            },
            modal: {
                title: "Registri della SoundBoard",
                loading: "I suoni sono in fase di caricamento...",
                noLogs: "Nessun audio è stato ancora registrato. Partecipa a una chat vocale per accedere!",
                clearLogs: "Cancella registri",
                played: "Giocato {{time}} volte",
                last: "Ultimo giocato:",
                also: "Inoltre ha rubato:",
                download: "Scaricamento",
                copyId: "Copia documento d'identità",
                copied: "ID copiato negli appunti!",
                playSound: "Riproduci suono",
                moreUsers: "Anche altre persone hanno usato questo suono...",
                volume: "Volume della tavola armonica"
            }
        },
        splitLargeMessages: {
            name: "Dividi messaggi di grandi dimensioni",
            description: "Divide i messaggi di grandi dimensioni in più messaggi per soddisfare il limite dei messaggi di Discord.",
            option: {
                maxLength: {
                    label: "Lunghezza massima del messaggio",
                    description: "La lunghezza massima che un messaggio può avere prima di essere diviso. Impostare su 0 per il rilevamento automatico."
                },
                disableFileConversion: {
                    label: "Disabilita conversione file",
                    description: "Se abilitato, disabilita la conversione dei file per i messaggi di grandi dimensioni."
                },
                sendDelay: {
                    label: "Ritardo nella spedizione",
                    description: "Tempo di attesa in secondi tra ogni traccia."
                },
                hardSplit: {
                    label: "Partizione solida",
                    description: "Se abilitato, si divide dall'ultimo carattere invece che da uno spazio/riga."
                },
                splitInSlowmode: {
                    label: "Dividi in modalità lenta",
                    description: "Dividi i messaggi se la modalità lenta è abilitata sul canale?"
                },
                slowmodeMax: {
                    label: "Modalità lenta massima",
                    description: "Tempo massimo in modalità lenta consentito durante la divisione in modalità lenta."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Aggiunge un pulsante di attivazione/disattivazione per la visibilità dell'attività di Spotify.",
            tooltip: {
                enable: "Apri l'attività di Spotify",
                disable: "Disattiva l'attività di Spotify"
            },
            option: {
                location: {
                    label: "Donne",
                    description: "Dove mostrare il pulsante di accensione/spegnimento di Spotify",
                    panel: "Accanto a Disattiva/Disattiva",
                    toolbox: "Cassetta degli attrezzi Plexcord"
                },
                activityStatus: {
                    label: "Stato dell'attività",
                    description: "Stato attuale della tua attività su Spotify"
                }
            }
        },
        spotifyCrack: {
            name: "Spotify Crack",
            description: "Consente il co-ascolto gratuito, bloccando la pausa automatica nella chat vocale e mantenendo l'attività di Spotify in riproduzione quando inattiva",
            option: {
                noSpotifyAutoPause: {
                    label: "Disattiva la pausa automatica di Spotify",
                    description: "Disattiva la pausa automatica di Spotify."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Riprendi l'attività di Spotify mentre sei inattivo",
                    description: "Consente all'attività di Spotify di continuare a essere riprodotta quando è inattiva"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Condividi il tuo brano, album o artista Spotify attuale con i comandi barra (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Condividi il tuo attuale Spotify {{type}} in chat",
                    track: "Non stai ascoltando nessun brano su Spotify.",
                    find: "Impossibile trovare la canzone su Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Aggiunge gli orari di avvio al menu Impostazioni",
            modal: {
                title: "Inizia i tempi",
                ended: "Guarda l'ora di fine:",
                start: "Inizio",
                interval: "Dicembre",
                delta: "Delta",
                event: "Olày",
                serverTrace: "Monitoraggio del server",
                loading: "Caricamento..."
            }
        },
        statusNotifications: {
            name: "Notifiche di stato",
            description: "Aggiunge notifiche per i cambiamenti di stato",
            loading: "Caricamento...",
            option: {
                notificationsSound: {
                    label: "Suono di notifica",
                    description: "Riproduci il suono di notifica per le notifiche di stato?"
                },
                usersList: {
                    label: "Elenco utenti",
                    description: "Gli utenti devono essere avvisati quando si verificano cambiamenti di stato",
                    empty: "Nessun utente monitorato. Puoi aggiungere un utente facendo clic con il pulsante destro del mouse su di esso e utilizzando l'opzione \"Notifiche di stato\"."
                }
            },
            context: {
                label: "Notifiche di stato",
                notifications: "Notifiche",
                type: {
                    all: "Tutto",
                    online: "in linea",
                    offline: "non in linea",
                    none: "Nessuno"
                }
            },
            notification: {
                unknownUser: "Utente",
                title: "Notifiche di stato",
            },
            status: {
                online: "in linea",
                idle: "oziare",
                dnd: "Non disturbare",
                offline: "non in linea",
            },
        },
        statusPresets: {
            name: "Preimpostazioni di stato",
            description: "Ti consente di salvare i tuoi stati e modificarli in seguito",
            button: {
                remember: "Ricorda lo stato",
            },
            context: {
                edit: "Modifica preimpostazioni personalizzate",
                set: "Imposta eccezione"
            },
            notification: {
                successfully: "Stato salvato con successo"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Sincronizza il tuo stato con Steam! (Online, Assente, Invisibile o Offline.)",
            option: {
                onlineStatus: {
                    label: "Stato in linea",
                    description: "Stato di Steam mentre Discord Online"
                },
                idleStatus: {
                    label: "Stato inattivo",
                    description: "Stato di Steam quando Discord è inattivo"
                },
                dndStatus: {
                    label: "Stato Non disturbare",
                    description: "Stato di Steam mentre Discord non disturba"
                },
                invisibleStatus: {
                    label: "Stato invisibile",
                    description: "Stato di Steam mentre Discord è invisibile"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Diventa invisibile se l'evento è privato",
                    description: "Imposta lo stato di Steam su Invisibile quando l'attività Discord è nascosta"
                }
            },
            status: {
                online: "in linea",
                away: "Lontano",
                invisible: "Invisibile",
                offline: "Offline (disconnettiti dalla chat di Steam)",
                disabled: "Disabilitato"
            }
        },
        stickerBlocker: {
            name: "Blocco adesivi",
            description: "Consente di impedire la visualizzazione degli adesivi.",
            option: {
                showGif: {
                    label: "Mostra GIF",
                    description: "Se visualizzare una bella GIF di gatti."
                },
                showMessage: {
                    label: "Mostra messaggio",
                    description: "Se mostrare un messaggio che indica quale ID è bloccato"
                },
                showButton: {
                    label: "Mostra pulsante",
                    description: "Se mostrare un pulsante per sbloccare la GIF"
                },
                blockedStickers: {
                    label: "Adesivi bloccati",
                    description: "Elenco degli ID adesivi bloccati (non modificare se non sai cosa stai facendo)"
                }
            },
            modal: {
                blocked: "Adesivo bloccato. ID: {{id}} NOME: {{nome}}",
                unblock: "Sblocca {{name}}"
            },
            context: {
                blockSticker: "Blocco adesivo",
                unblockSticker: "Sblocca adesivo"
            }
        },
        stickerPaste: {
            name: "AdesivoIncolla",
            description: "Quando selezioni un adesivo nel selettore adesivi, lo aggiunge alla casella di chat invece di inviarlo immediatamente"
        },
        streamerModeOnStream: {
            name: "Modalità StreamerOnStream",
            description: "Abilita automaticamente la modalità streamer quando inizi a trasmettere su Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Disabilita i codec di streaming desiderati",
            option: {
                disableAv1Codec: {
                    label: "Disabilita il codec AV1",
                    description: "Impedisce a Discord di prendere in considerazione l'utilizzo di AV1 per lo streaming."
                },
                disableH265Codec: {
                    label: "Disabilita il codec H265",
                    description: "Impedisce a Discord di prendere in considerazione l'utilizzo di H265 per lo streaming."
                },
                disableH264Codec: {
                    label: "Disabilita il codec H264",
                    description: "Impedisce a Discord di prendere in considerazione l'utilizzo di H264 per lo streaming."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Personalizza il limite delle Super Reazioni giocate simultaneamente e utilizza la Super Reazione per impostazione predefinita",
            option: {
                superReactByDefault: {
                    label: "Super reattivo per impostazione predefinita",
                    description: "Il selettore di reazioni utilizza le Super Reazioni per impostazione predefinita"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Giochi di Super Reazione illimitati",
                    description: "Rimuove il limite della Super Reazione sulla riproduzione simultanea"
                },
                superReactionPlayingLimit: {
                    label: "Limite di riproduzione Super Reaction",
                    description: "Numero massimo di Super Reazioni da giocare contemporaneamente. 0 disabilita la riproduzione delle Super Reazioni"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Cambia il testo nei tuoi messaggi. Puoi trovare regole già pronte nel canale #textreplace-rules sul server Plexcord",
            option: {
                replace: {
                    label: "Modifica",
                    string: "Utilizzo del testo normale",
                    regex: "Utilizzando Regex",
                    myMessages: "Applica ai tuoi messaggi (visibile a tutti)",
                    othersMessages: "Applica ai messaggi di altre persone (visibile solo a te)",
                    allMessages: "Applica a tutti i messaggi"
                },
                stringRules: {
                    label: "Regole del testo semplice",
                    description: "Regole di sostituzione del testo utilizzando la corrispondenza del testo in chiaro."
                },
                regexRules: {
                    label: "Regole regolari",
                    description: "Regole per sostituire il testo utilizzando le espressioni regolari."
                }
            },
            modal: {
                title: "Metti alla prova le regole",
                find: "Bul",
                replace: "Modifica",
                includes: "Solo se contiene",
                type: "Scrivi un messaggio",
                applied: "Messaggio con regole applicate"
            }
        },
        themeAttributes: {
            name: "Attributi del tema",
            description: "Aggiunge attributi di dati a vari elementi per scopi tematici"
        },
        timezones: {
            name: "Fusi orari",
            description: "Mostra l'ora locale degli utenti nei profili e nei thread di messaggi",
            button: {
                wantToSave: "Vuoi salvare il tuo fuso orario nel database? Fare clic qui per impostare.",
                yourLocalTimezone: "(Il tuo fuso orario locale)"
            },
            context: {
                set: "Imposta il fuso orario locale"
            },
            toast: {
                refresh: {
                    successfully: "I fusi orari sono stati rinnovati con successo!",
                    failed: "Impossibile aggiornare i fusi orari!",
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
                    failed: "Autenticazione non riuscita.",
                    success: "Autorizzazione riuscita!"
                }
            },
            toolbox: {
                set: "Imposta il fuso orario del database",
                refresh: "Aggiorna i fusi orari del database"
            },
            option: {
                showOwnTimezone: {
                    label: "Mostra il tuo fuso orario",
                    description: "Mostra il tuo fuso orario sul tuo profilo e nei thread dei messaggi"
                },
                twentyFourHourTime: {
                    label: "Formato 24 ore",
                    description: "Mostra l'ora nel formato 24 ore"
                },
                showTimezoneInfo: {
                    label: "Mostra informazioni sul fuso orario",
                    description: "Mostra le informazioni sul fuso orario oltre all'orologio"
                },
                showMessageHeaderTime: {
                    label: "Mostra l'ora del titolo del messaggio",
                    description: "Mostra l'ora nei thread dei messaggi"
                },
                showProfileTime: {
                    label: "Mostra l'ora del profilo",
                    description: "Mostra l'ora nei profili utente"
                },
                useDatabase: {
                    label: "Utilizza il fuso orario del database",
                    description: "Utilizza il database per ottenere i fusi orari degli utenti"
                },
                preferDatabaseOverLocal: {
                    label: "Preferire il database rispetto a quello locale",
                    description: "Preferire il database all'archiviazione locale tra fusi orari"
                },
                databaseUrl: {
                    label: "URL della banca dati",
                    description: "URL del server del database del fuso orario"
                },
                setDatabaseTimezone: {
                    label: "Imposta il fuso orario del database",
                    description: "Imposta il tuo fuso orario nel database",
                    setTimezone: "Imposta il fuso orario nel database"
                },
                resetDatabaseTimezone: {
                    label: "Reimposta il fuso orario del database",
                    description: "Reimposta il tuo fuso orario nel database",
                    failed: "Impossibile reimpostare il fuso orario del database"
                },
                askedTimezone: {
                    label: "Fuso orario chiesto",
                    description: "Indica se all'utente viene richiesto il fuso orario"
                }
            },
            modal: {
                title: "Fusi orari",
                select: "Seleziona Fuso orario",
                selectPlaceholder: "Scegli un fuso orario",
                delete: "Elimina fuso orario",
                save: "Salva"
            }
        },
        toastNotifications: {
            name: "ToastNotifiche",
            description: "Mostra una notifica di avviso popup quando ricevi un messaggio diretto.",
            notification: {
                call: "Ho iniziato una ricerca con te!",
                recipient: {
                    add: "{{target}} è stato aggiunto al gruppo da {{actor}}.",
                    remove: "{{target}} è stato rimosso dal gruppo da {{actor}}.",
                    left: "Ha lasciato il gruppo."
                },
                channel: {
                    change: {
                        name: "Il nome del canale è cambiato in {{name}}.",
                        icon: "L'icona del canale è stata modificata."
                    },
                    pinned: "Appuntato un messaggio."
                },
                sent: {
                    embed: "Ha inviato un incorporamento.",
                    sticker: "Ha mandato un adesivo.",
                    attachment: "File:"
                },
                redacted: "Il contenuto del messaggio è stato nascosto.",
                friend: {
                    accept: "{{user}} ora è tuo amico",
                    acceptBody: "Ora puoi inviargli un messaggio diretto.",
                    request: "{{user}} ti ha inviato una richiesta di amicizia.",
                    requestBody: "Puoi accettarlo o rifiutarlo dalla scheda Amici."
                },
                example: {
                    title: "Notifica del campione",
                    body: "Questo è un esempio di testo di notifica."
                }
            },
            modal: {
                dismiss: "Chiudi notifica",
                attachments: "{{attachments}} file inviati."
            },
            option: {
                position: {
                    label: "Donne",
                    description: "Posizione della notifica Toast",
                    topRight: "In alto a destra",
                    topLeft: "In alto a sinistra",
                    bottomRight: "In basso a destra",
                    bottomLeft: "Sol Alt"
                },
                timeout: {
                    label: "Orario di chiusura",
                    description: "Quanti secondi per mostrare le notifiche"
                },
                opacity: {
                    label: "Opacità",
                    description: "Opacità della notifica Toast"
                },
                determineServerNotifications: {
                    label: "Imposta le notifiche del server",
                    description: "Determina se mostrare le notifiche in base alle impostazioni di notifica del server"
                },
                directMessages: {
                    label: "Messaggi diretti",
                    description: "Mostra notifiche per i messaggi diretti"
                },
                groupMessages: {
                    label: "Messaggi di gruppo",
                    description: "Mostra notifica per i messaggi di gruppo"
                },
                friendServerNotifications: {
                    label: "Notifiche su amici e server",
                    description: "Mostra notifiche quando gli amici inviano messaggi su server pubblici"
                },
                friendActivity: {
                    label: "Evento amico",
                    description: "Mostra notifiche per l'aggiunta di amici o la ricezione di richieste di amicizia"
                },
                notifyFor: {
                    label: "Canali per ricevere notifiche",
                    description: "Inserisci gli ID dei canali per ricevere le notifiche (separati con virgole)"
                },
                ignoreUsers: {
                    label: "Utenti da ignorare",
                    description: "Inserisci gli ID utente le cui notifiche verranno ignorate (separate da virgole)"
                },
                exampleButton: {
                    label: "Pulsante campione",
                    description: "Mostra un esempio di notifica di avviso popup.",
                    show: "Mostra notifica di esempio"
                }
            }
        },
        toggleVideoBind: {
            name: "Attiva/disattiva associazione video",
            description: "Aggiunge un tasto di scelta rapida personalizzabile per accendere e spegnere la webcam.",
            option: {
                keyBind: {
                    label: "Tasto di scelta rapida",
                    description: "Il pulsante che accende e spegne la webcam quando viene premuto."
                },
                reqCtrl: {
                    label: "Ctrl Gerekli",
                    description: "Forza la pressione del tasto Ctrl."
                },
                reqShift: {
                    label: "Turno richiesto",
                    description: "Forza la pressione del tasto Maiusc."
                },
                reqAlt: {
                    label: "Sub obbligatorio",
                    description: "Forza la pressione del tasto Alt."
                }
            }
        },
        translate: {
            name: "Tradurre",
            description: "Traduci i messaggi con Google Translate o DeepL",
            tooltip: {
                label: "Convertire"
            },
            context: {
                translate: "Convertire",
                open: "Apri la finestra di traduzione",
                auto: "Traduzione automatica abilitata"
            },
            option: {
                receivedInput: {
                    label: "Ingresso ricevuto",
                    description: "La lingua in cui verranno tradotti i messaggi ricevuti"
                },
                receivedOutput: {
                    label: "Uscita ricevuta",
                    description: "In quale lingua verranno tradotti i messaggi ricevuti?"
                },
                sentInput: {
                    label: "Ingresso inviato",
                    description: "La lingua in cui verranno tradotti i tuoi messaggi"
                },
                sentOutput: {
                    label: "Output inviato",
                    description: "In quale lingua verranno tradotti i tuoi messaggi"
                },
                service: {
                    label: "Servizio di traduzione",
                    description: "DeepL Pro richiede una chiave API a pagamento",
                    descriptionWeb: "Servizio di traduzione (non supportato sul Web!)",
                    google: "Google Traduttore",
                    deepl: "DeepL gratuito",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "Chiave API DeepL",
                    description: "Chiave API DeepL",
                    placeholder: "Ottieni la tua chiave API su https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Traduzione automatica",
                    description: "Traduce automaticamente i tuoi messaggi prima di inviarli. Puoi anche spostare o fare clic con il pulsante destro del mouse sul pulsante di traduzione per attivare o disattivare questa funzione."
                },
                showAutoTranslateTooltip: {
                    label: "Mostra la descrizione della traduzione automatica",
                    description: "Mostra una descrizione nel pulsante della barra della chat quando un messaggio viene tradotto automaticamente"
                }
            },
            modal: {
                title: "Traduzione",
                select: "Scegli una lingua",
                auto: "Traduzione automatica",
                dismiss: "Trimestre",
                translated: "Tradotto da {{da}}",
                failed: {
                    to: "Traduzione di {{text}} fallita",
                    connect: "Connessione API DeepL non riuscita:"
                },
                wrong: "Qualcosa è andato storto. Se il problema persiste, controlla la console o chiedi aiuto al server di supporto.",
                deepl: {
                    api: "Quota API DeepL superata. Passaggio a Google Traduttore.",
                    apiKey: "La chiave API DeepL non è impostata. Ritornando a Google.",
                    auth: "Chiave o versione API DeepL non valida"
                },
                autoTranslateEnabled: {
                    title: "Traduzione automatica Plexcord abilitata",
                    body: "Hai appena abilitato la traduzione automatica! Tutti i messaggi che invii verranno tradotti automaticamente prima di essere inviati.",
                    confirm: "Disabilita la traduzione automatica",
                    cancel: "Capisco",
                    secondaryConfirm: "Non mostrarlo più"
                }
            }
        },
        typingIndicator: {
            name: "Indicatore di digitazione",
            description: "Aggiunge un indicatore quando qualcuno sta digitando in un canale.",
            option: {
                includeCurrentChannel: {
                    label: "Includi canale corrente",
                    description: "Se mostrare l'indicatore di digitazione per il canale attualmente selezionato"
                },
                includeMutedChannels: {
                    label: "Includi canali disattivati",
                    description: "Se mostrare l'indicatore di digitazione per i canali disattivati."
                },
                includeIgnoredUsers: {
                    label: "Includi utenti ignorati",
                    description: "Indica se mostrare l'indicatore di digitazione per gli utenti ignorati."
                },
                includeBlockedUsers: {
                    label: "Includi utenti bloccati",
                    description: "Se mostrare l'indicatore di digitazione per gli utenti bloccati."
                },
                indicatorMode: {
                    label: "Modalità di visualizzazione",
                    description: "Come visualizzare l'indicatore?",
                    both: "Avatar e punti animati",
                    dots: "punti animati",
                    avatars: "avatar"
                }
            }
        },
        typingTweaks: {
            name: "Tweaks di digitazione",
            description: "Mostra avatar e colori dei ruoli nell'indicatore di digitazione",
            option: {
                showAvatars: {
                    label: "Mostra più utenti",
                    description: "Mostra avatar nell'indicatore di digitazione"
                },
                showRoleColors: {
                    label: "Mostra i colori dei ruoli",
                    description: "Mostra i colori dei ruoli nell'indicatore di digitazione"
                },
                alternativeFormatting: {
                    label: "Formato alternativo",
                    description: "Mostra un messaggio più utile quando più di una persona sta digitando"
                },
                amITyping: {
                    label: "Sto scrivendo?",
                    description: "Mostra se altre persone hanno visto ciò che hai scritto"
                }
            },
            others: {
                areTyping: "e altre {{count}} persone scrivono..."
            }
        },
        unindent: {
            name: "Non rientrante",
            description: "Rimuove il rientro iniziale nei blocchi di codice"
        },
        unitConverter: {
            name: "Convertitore di unità",
            description: "Converte le unità metriche in unità imperiali e viceversa",
            tooltip: "Converti unità",
            option: {
                myUnits: {
                    label: "Le mie unità",
                    description: "Le unità che usi e in cui vuoi convertire. Predefinito: imperiale",
                    imperial: "Impero",
                    metric: "Metrico"
                }
            },
            button: {
                dismiss: "Trimestre"
            }
        },
        unlimitedAccounts: {
            name: "Account illimitati",
            description: "Aumenta il numero di account che puoi aggiungere.",
            option: {
                maxAccounts: {
                    label: "Conto massimo",
                    description: "Numero di account che possono essere aggiunti, inserisci 0 per illimitato"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "Avatar sbloccatoZoom",
            description: "Ti consente di ingrandire ulteriormente lo strumento di ritaglio delle immagini quando cambi il tuo avatar",
            option: {
                zoomMultiplier: {
                    label: "Moltiplicatore di zoom",
                    description: "Moltiplicatore di zoom"
                }
            }
        },
        unsuppressEmbeds: {
            name: "Riattiva gli incorporamenti",
            description: "Consente di riattivare il contenuto incorporato nei messaggi",
            context: {
                unsuppress: "Rimuovi la soppressione dell'incorporamento",
                suppress: "Stampa Incorpora"
            }
        },
        uselessInfo: {
            name: "Informazioni inutili",
            description: "Visualizza informazioni casuali inutili all'interno di Discord; è possibile effettuare scorciatoie e impostazioni degli intervalli.",
            recording: "Registrazione...",
            record: "Salva",
            option: {
                delay: {
                    label: "Intervallo di notifica",
                    description: "Intervallo di visualizzazione delle notifiche (in minuti)"
                },
                historyHotkey: {
                    label: "Scorciatoia del pannello Cronologia",
                    description: "Tasto di scelta rapida per aprire la cronologia delle informazioni mostrate in precedenza"
                },
                randomFactHotkey: {
                    label: "Collegamento casuale alle informazioni",
                    description: "Tasto di scelta rapida per aprire il pannello informativo casuale"
                },
                sameFact: {
                    label: "Evitare di ripetere le stesse informazioni",
                    description: "Impedisce che le stesse informazioni vengano visualizzate più volte senza mostrare tutte le informazioni"
                },
                lastNFacts: {
                    label: "Ultime informazioni da non ripetere",
                    description: "Ultimo numero di informazioni che non devono essere visualizzate nuovamente (0 = tutte le volte)"
                }
            },
            modal: {
                title: "Informazioni inutili",
                history: {
                    none: "Nessuna informazione ancora. Usa la scorciatoia o attendi.",
                    source: "Fonte"
                },
                showRandom: "Mostra in modo casuale",
                close: "Trimestre"
            },
            notification: {
                title: "Lo sapevate?"
            }
        },
        userMessagesPronouns: {
            name: "PronomiMessaggiutente",
            description: "Mostra i pronomi utente nelle intestazioni dei messaggi",
            option: {
                pronounsFormat: {
                    label: "Forma del pronome",
                    description: "Come appaiono i pronomi nella chat",
                    lowercase: "Minuscolo",
                    capitalized: "lettera maiuscola iniziale"
                },
                showSelf: {
                    label: "Mostrati",
                    description: "Attiva o disattiva la visualizzazione dei tuoi pronomi"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Mostra un indicatore quando un utente è sul canale vocale",
            option: {
                showInUserProfileModal: {
                    label: "Mostra nel profilo utente",
                    description: "Mostra l'indicatore del canale vocale accanto al nome nel profilo utente"
                },
                showInMemberList: {
                    label: "Mostra nell'elenco dei membri",
                    description: "Mostra l'indicatore del canale vocale nell'elenco dei membri e dei DM"
                },
                showInMessages: {
                    label: "Mostra nei messaggi",
                    description: "Mostra l'indicatore del canale vocale nei messaggi"
                }
            },
            modal: {
                inVoiceChat: "Nella chat vocale"
            },
            notification: {
                cannotJoin: "Non puoi unirti al canale vocale dell'utente."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Visualizza i banner utente da USRBG in modo che chiunque possa utilizzare i banner senza Nitro",
            option: {
                nitroFirst: {
                    label: "Nitro innanzitutto",
                    description: "Se esistono sia banner Nitro che USRBG, determina quale utilizzare",
                    nitro: "Striscione Nitro",
                    usrbg: "Bandiera dell'USRBG"
                },
                voiceBackground: {
                    label: "Sottofondo audio",
                    description: "Utilizza i banner USRBG come sfondo della chat vocale"
                }
            },
            button: "Ottieni il tuo banner USRBG"
        },
        validReply: {
            name: "Risposta valida",
            description: "Risolve l'errore \"Impossibile caricare il messaggio\" quando si passa il mouse sopra la risposta"
        },
        validUser: {
            name: "Utente valido",
            description: "Risolti i problemi relativi alle menzioni che apparivano come \"@unknown-user\" per gli utenti sconosciuti (passa con il mouse sopra la menzione per risolvere)",
            badges: {
                discordBugHunter: "Cacciatore di insetti della discordia",
                moderatorProgramsAlumni: "Laureato in programmi moderatori",
                discordStaff: "Bastone della Discordia",
                hypeSquadEvents: "Eventi HypeSquad",
                bravery: "HypeSquad Cesaret",
                brilliance: "Luminosità HypeSquad",
                balance: "HypeSquad Denge",
                partneredServerOwner: "Proprietario del co-server",
                nitro: "Discordia Nitro",
                earlySupporter: "Primo sostenitore",
                earlyVerifiedBotDeveloper: "Sviluppatore di bot verificato in anticipo"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Ti consente di partecipare alle chat vocali facendo doppio clic invece che con un clic singolo"
        },
        vcNarrator: {
            name: "VCNarratore",
            description: "Annuncia tramite narratore quando gli utenti si uniscono, abbandonano o spostano i canali vocali",
            option: {
                voice: {
                    label: "Sez"
                },
                volume: {
                    label: "Livello sonoro",
                    description: "Livello della voce del narratore"
                },
                rate: {
                    label: "Velocità",
                    description: "Velocità di parola del narratore"
                },
                sayOwnName: {
                    label: "Di' il tuo nome",
                    description: "Se il narratore dirà il tuo nome"
                },
                latinOnly: {
                    label: "Solo latino",
                    description: "Cancella i caratteri non latini nei nomi prima di leggerli"
                },
                joinMessage: {
                    label: "Messaggio di adesione",
                    description: "Partecipa al messaggio"
                },
                leaveMessage: {
                    label: "Messaggio di addio",
                    description: "lasciando un messaggio"
                },
                moveMessage: {
                    label: "Messaggio commovente",
                    description: "messaggio commovente"
                },
                muteMessage: {
                    label: "Messaggio muto",
                    description: "Disattiva messaggio (solo te stesso per ora)"
                },
                unmuteMessage: {
                    label: "Riattiva messaggio",
                    description: "Riattiva messaggio (solo te stesso per ora)"
                },
                deafenMessage: {
                    label: "Messaggio assordante",
                    description: "Messaggio assordante (solo te stesso per ora)"
                },
                undeafenMessage: {
                    label: "Messaggio assordante",
                    description: "Messaggio assordante (solo te stesso per ora)"
                }
            },
            modal: {
                title: "Riproduci suoni campione",
                voiceTitle: "Sez",
                voice: "Scegli un suono",
                languageTitle: "Dil",
                language: "Scegli una lingua",
                noVoice: "Voce dell'Assistente vocale non trovata.",
                linuxNote: "Installa Speech-Dispatcher o espeak ed esegui Discord con il parametro --enable-speech-dispatcher",
                someNarrator: "Prova a installare alcune voci dalle impostazioni dell'Assistente vocale del tuo sistema operativo",
                dontHaveEnglish: "Non hai caricato alcun audio in inglese, quindi il narratore potrebbe sembrare strano",
                customiseMessages: "Puoi personalizzare i messaggi vocali di seguito. Se lo lasci vuoto puoi disabilitare alcuni messaggi",
                placeholdersInfo: "I segnaposto personalizzati {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} e {{CHANNEL}} vengono sostituiti rispettivamente con il nome dell'utente (vuoto se sei tu stesso), il nome visualizzato, il nickname sul server e il nome del canale"
            }
        },
        viewIcons: {
            name: "VisualizzaIcone",
            description: "Rende cliccabili le immagini avatar e banner nei profili utente; Aggiunge le opzioni Visualizza avatar/banner al menu contestuale del canale utente, server e gruppo.",
            context: {
                view: {
                    avatar: "Visualizza l'avatar",
                    serverAvatar: "Visualizza l'avatar del server",
                    icon: "Visualizza icona",
                    banner: "Visualizza banner"
                }
            },
            option: {
                format: {
                    label: "Formato",
                    description: "Seleziona il formato immagine da utilizzare per le immagini non in movimento. Le immagini animate utilizzano sempre il formato .gif"
                },
                imgSize: {
                    label: "Dimensione dell'immagine",
                    description: "Dimensione dell'immagine da utilizzare"
                }
            }
        },
        viewRaw: {
            name: "VisualizzaRaw",
            description: "Copia e visualizza contenuti/dati grezzi di qualsiasi messaggio, canale o server",
            context: {
                copyLeft: "Copia dati grezzi (clic sinistro) / Visualizza dati grezzi (clic destro)",
                copyRight: "Copia dati grezzi (clic destro) / Visualizza dati grezzi (clic sinistro)",
                view: "Visualizza dati grezzi"
            },
            option: {
                popoverButton: {
                    label: "Pulsante del menu a comparsa",
                    description: "Mostra un pulsante nel popover del messaggio per visualizzare il contenuto/dati grezzi del messaggio."
                },
                clickMethod: {
                    label: "Fare clic su Metodo",
                    description: "Modificare il metodo di clic da utilizzare per visualizzare il contenuto/dati non elaborati di qualsiasi messaggio.",
                    left: "Fare clic con il tasto sinistro per visualizzare il contenuto non elaborato.",
                    right: "Fare clic con il tasto destro per visualizzare il contenuto non elaborato."
                }
            },
            modal: {
                title: "Prosciutto Veri",
                content: "Contenuto",
                data: "{{tipo}} Veri",
                copied: "Dati {{type}} copiati negli appunti!",
                copy: "Copia {{type}} JSON",
                copiedContent: "Contenuto copiato negli appunti!",
                copyContent: "Copia contenuto grezzo"
            },
            types: {
                message: "Messaggio",
                channel: "Canale",
                guild: "Presentatore",
                role: "Ruolo",
                user: "Utente"
            }
        },
        voiceButtons: {
            name: "Pulsanti vocali",
            description: "Invia rapidamente messaggi diretti, disattiva l'audio o assorda qualsiasi utente dal pannello delle chiamate vocali.",
            option: {
                showChatButton: {
                    label: "Mostra pulsante chat",
                    description: "Se mostrare o meno il pulsante della chat"
                },
                showMuteButton: {
                    label: "Mostra pulsante Muto",
                    description: "Se mostrare il pulsante di disattivazione audio"
                },
                showDeafenButton: {
                    label: "Mostra pulsante per non udenti",
                    description: "Se mostrare il pulsante sordo"
                },
                muteSoundboard: {
                    label: "Soundboard'u Sessize Al",
                    description: "Quando si fa clic sul pulsante assordante, si accende e si spegne la tavola armonica dell'utente."
                },
                disableVideo: {
                    label: "Disabilita video",
                    description: "Quando si fa clic sul pulsante assordante, si accende e si spegne il video dell'utente."
                },
                useServer: {
                    label: "Usa Server",
                    description: "Utilizza il silenziamento/assordamento del server anziché quello locale se si dispone dell'autorizzazione."
                },
                serverSelf: {
                    label: "Disattiva l'audio sul server",
                    description: "Mute/deafener disattiva o assorda te stesso sul server quando viene utilizzato."
                },
                showButtonsSelf: {
                    label: "Mostra i pulsanti per te stesso",
                    description: "Se mostrare i pulsanti per il tuo utente. Ha la stessa funzione; Il pannello DM si apre e ti disattiva/assorda.",
                    display: "Spettacolo",
                    hide: "nascondere",
                    disable: "Disabilitato"
                },
                whichNameToShow: {
                    label: "Quale nome dovrebbe apparire?",
                    description: "Mostra il nome utente, il nome globale o entrambi nelle descrizioni comandi?",
                    global: "Nome globale",
                    username: "Nome utente",
                    both: "Entrambi"
                },
                buttonPosition: {
                    label: "Posizione del pulsante",
                    description: "Scegli dove mostrare i pulsanti.",
                    left: "Sol",
                    right: "Giusto",
                }
            },
            tooltip: {
                navigate: "Vai ai DM",
                open: "Apri DM con {{nome utente}}",
                yourself: "te stesso",
                serverMute: "Disattiva l'audio sul server",
                serverDeafen: "Sordo sul server",
                mute: "Muto",
                deafen: "sordo",
                unmute: "Riattiva",
                undeafen: "Rimuovere da Assordante",
                serverUnmute: "Riattiva l'audio sul server",
                serverUndeafen: "Rimuovere Assordante sul server"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Registra chi si unisce e chi esce dai canali audio",
            context: {
                view: "Visualizza i registri dei canali"
            },
            modal: {
                joined: "Iscrizione al canale <#{{channel}}>",
                left: "Canale sinistro <#{{canale}}>",
                movedTo: "Spostato nel canale <#{{channel}}>",
                movedFrom: "Spostato da <#{{canale}}>",
                noLogs: "Non ci sono log da visualizzare.",
                logs: "{{canale}} log"
            },
            option: {
                mode: {
                    label: "Mod",
                    description: "Come mostrare il registro dei canali audio",
                    menu: "Menù di registro",
                    associated: "Accedi direttamente al canale di chat pertinente",
                    both: "Accedi sia al canale di chat che al menu di registro"
                },
                voiceChannelChatSelf: {
                    label: "Chat canale vocale (te stesso)",
                    description: "Registra l'attività del tuo canale vocale nei canali vocali"
                },
                voiceChannelChatSilent: {
                    label: "Chat silenziosa del canale vocale",
                    description: "I messaggi di partecipazione/uscita/spostamento vengono disattivati ​​nelle chat del canale vocale"
                },
                voiceChannelChatSilentSelf: {
                    label: "Chat silenziosa del canale vocale (te stesso)",
                    description: "Se sei su un canale vocale, i messaggi di partecipazione/uscita/spostamento saranno silenziosi"
                },
                ignoreBlockedUsers: {
                    label: "Ignora gli utenti bloccati",
                    description: "Registrazione degli utenti che hai bloccato"
                }
            }
        },
        voiceChatUtilities: {
            name: "Utilità VoiceChat",
            description: "Questo plugin ti consente di eseguire più azioni (spostare, silenziare, disconnettere, ecc.) su un intero canale (originariamente da dutake)",
            option: {
                waitAfter: {
                    label: "Attendi dopo l'azione",
                    description: "Numero di transazioni API da effettuare prima dell'attesa (per evitare limiti di velocità)"
                },
                waitSeconds: {
                    label: "Tempo di attesa",
                    description: "Tempo di attesa tra ogni operazione (in secondi)"
                }
            },
            context: {
                voiceTools: "Strumenti audio",
                mentionAll: "Tagga tutti gli utenti",
                disconnectAll: "Disconnetti tutti",
                muteAll: "Disattiva tutti",
                unmuteAll: "Riattiva l'audio per tutti",
                deafenAll: "Tutti sordi",
                undeafenAll: "Uscire senza assordare tutti",
                moveAll: "Muovi tutti"
            }
        },
        voiceDownload: {
            name: "Download vocale",
            description: "Aggiunge l'opzione di download ai messaggi vocali. (Apre una nuova scheda del browser)",
            context: {
                download: "Scarica la segreteria telefonica"
            }
        },
        voiceMessages: {
            name: "Messaggi vocali",
            description: "Ti consente di inviare messaggi vocali proprio come sul cellulare. Per fare ciò, fai clic con il pulsante destro del mouse sul pulsante di caricamento e seleziona \"Invia messaggio vocale\".",
            option: {
                noiseSuppression: {
                    label: "Cancellazione del rumore",
                    description: "Cancellazione del rumore"
                },
                echoCancellation: {
                    label: "Cancellazione dell'eco",
                    description: "Cancellazione dell'eco"
                }
            },
            notification: {
                failed: {
                    upload: "Impossibile caricare la posta vocale.",
                    start: "Impossibile avviare la registrazione.",
                    finish: "Impossibile completare la registrazione."
                }
            },
            context: {
                sendVoiceMessage: "Invia messaggio vocale",
                missingPermissions: "(Autorizzazione mancante)"
            },
            modal: {
                record: "Registra un messaggio vocale",
                upload: "Carica file",
                preview: "Anteprima",
                failed: "Impossibile analizzare il file audio selezionato:",
                oggOpus: "I messaggi vocali devono essere in formato OggOpus per essere riprodotti su iOS. Questo file non può essere riprodotto su iOS perché è nel formato {{type}}.",
                fix: "Per risolvere questo problema, converti prima il file nel formato OggOpus. Ad esempio, puoi utilizzare {{link}}.",
                sending: "Invio messaggio vocale... Attendere prego.",
                stop: "interrompere la registrazione",
                start: "avviare la registrazione",
                resume: "Riprendi la registrazione",
                pause: "Metti in pausa la registrazione",
                recording: "LA REGISTRAZIONE È IN CORSO",
                send: "Inviare"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Consente di aumentare il volume dell'utente e della trasmissione oltre il massimo predefinito",
            option: {
                multiplier: {
                    label: "Moltiplicatore",
                    description: "Moltiplicatore del suono"
                }
            }
        },
        wallpaperFree: {
            name: "SfondoGratis",
            description: "Un remake del vecchio esperimento sulla carta da parati DM; Imposta l'immagine di sfondo per qualsiasi canale, utente o server.",
            option: {
                globalDefault: {
                    label: "Predefinito generale",
                    description: "Imposta uno sfondo predefinito globale per tutti i canali."
                },
                stylingTips: {
                    label: "Consigli di stile"
                }
            },
            context: {
                setWallpaper: "Imposta lo sfondo",
                removeWallpaper: "Rimuovi lo sfondo"
            },
            modal: {
                set: "impostare lo sfondo",
                image: "URL dell'immagine",
                cancel: "Cancellare",
                apply: "Fare domanda a",
                global: {
                    set: "Imposta uno sfondo pubblico",
                    remove: "Rimuovi lo sfondo predefinito globale",
                    reset: "Reimposta i dati dello sfondo"
                },
                web: {
                    info: "Puoi utilizzare i file locali inserendoli nella directory del tema plexcord e utilizzando l'URL plexcord:///themes/filename.ext.",
                    open: "Apri la directory dei temi",
                    quickCSS: "Apri QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "MenuContestoWeb",
            description: "Aggiunge i menu contestuali mancanti nella versione web di Discord: collegamenti e immagini (copia o apri collegamento/immagine), area di testo (copia, taglia, incolla, controllo ortografico)",
            option: {
                addBack: {
                    label: "Aggiungi indietro",
                    description: "Aggiungi nuovamente i menu contestuali Discord per immagini, collegamenti e barra di accesso alla chat"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Aggiunge nuovamente i tasti di scelta rapida mancanti nella versione web di Discord: ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+1-9, ctrl+,. Funziona letteralmente solo su Plextron/Legcord, non nel browser."
        },
        webScreenShareFixes: {
            name: "Correzioni WebScreenShare",
            description: "Rimuove il limite di bitrate di condivisione dello schermo di 2500 kbps sui client Chromium e Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Supporto AV1 sperimentale",
                    description: "Abilita il supporto del codec AV1. I flussi di caricamento infiniti possono causare problemi come"
                }
            }
        },
        whoReacted: {
            name: "Chi ha reagito",
            description: "Mostra gli avatar degli utenti che reagiscono a un messaggio",
            option: {
                avatarClick: {
                    label: "Fare clic sull'avatar",
                    description: "Attiva/disattiva la cliccabilità degli avatar nelle reazioni"
                }
            }
        },
        whosWatching: {
            name: "Chi sta guardando",
            description: "Visualizza gli utenti che guardano la tua trasmissione passando il mouse sull'icona di condivisione dello schermo",
            modal: {
                noSpectator: "nessun pubblico"
            },
            option: {
                showPanel: {
                    label: "Mostra pannello",
                    description: "Mostra agli spettatori sotto il pannello di condivisione dello schermo"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Converte la prima lettera di ogni frase in maiuscolo nelle voci dei messaggi.",
            option: {
                blockedWords: {
                    label: "Parole bloccate",
                    description: "Espressioni che non devono essere maiuscole (separate con virgole)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Invia le notifiche Discord a XSOverlay per una facile visualizzazione in VR",
            notification: {
                call: {
                    title: "{{user}} ti sta cercando.",
                    content: "chiamata in arrivo"
                },
                message: {
                    reply: "(risposta)",
                    embed: "[incorpora]",
                    onlyEmbed: "incorporamento/i del messaggio inviato/i",
                    sticker: "[adesivo]",
                    onlySticker: "ha inviato un adesivo",
                    image: "immagine",
                    attachment: "IO"
                },
                test: {
                    title: "Plexcord e tuffati!",
                    content: "Questa è una notifica di prova! esplodere",
                    button: "Invia notifica di prova"
                }
            },
            option: {
                webSocketPort: {
                    label: "Porta WebSocket",
                    description: "Porta WebSocket"
                },
                preferUDP: {
                    label: "UDP Tercih Et",
                    description: "Se stai utilizzando versioni precedenti di XSOverlay e non riesci a connetterti tramite WebSocket, abilitalo. Questa impostazione viene ignorata sul Web."
                },
                botNotifications: {
                    label: "Notifiche dei bot",
                    description: "Consenti notifiche bot"
                },
                serverNotifications: {
                    label: "Notifiche del server",
                    description: "Consenti notifiche del server"
                },
                dmNotifications: {
                    label: "Notifiche DM",
                    description: "Consenti notifiche di messaggi privati"
                },
                groupDmNotifications: {
                    label: "Notifiche DM di gruppo",
                    description: "Consenti notifiche DM di gruppo"
                },
                callNotifications: {
                    label: "Notifiche di chiamata",
                    description: "Consenti notifiche di chiamata"
                },
                pingColor: {
                    label: "Ping Rengi",
                    description: "Colore del tag utente"
                },
                channelPingColor: {
                    label: "Canale ping colore",
                    description: "Colore dell'etichettatura del canale"
                },
                soundPath: {
                    label: "Percorso sonoro",
                    description: "Suono di notifica (predefinito/avviso/errore)"
                },
                timeout: {
                    label: "Tempo scaduto",
                    description: "Durata della notifica (secondi)"
                },
                lengthBasedTimeout: {
                    label: "Durata basata sulla lunghezza del messaggio",
                    description: "Estendi la durata in base alla lunghezza del messaggio"
                },
                opacity: {
                    label: "Opacità",
                    description: "Opacità delle notifiche"
                },
                volume: {
                    label: "Sez",
                    description: "livello sonoro"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Blocca gli annunci sugli incorporamenti di YouTube e l'attività WatchTogether con AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescrizione",
            description: "Aggiunge descrizioni ai video incorporati di YouTube"
        }
    }
} as const;

export default translations;
