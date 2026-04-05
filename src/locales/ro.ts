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
        title: "Setări",
        language: {
            selector: {
                label: "Limbă",
                description: "Selectați limba preferată pentru Plexcord.",
                placeholder: "Selectați Limba"
            }
        },
        location: {
            label: "Locație Setări",
            description: "Unde să fie plasată secțiunea de setări Plexcord",
            top: "În partea de sus",
            nitro: {
                above: "Deasupra secțiunii Nitro",
                below: "Sub secțiunea Nitro"
            },
            activity: {
                above: "Deasupra Setărilor de Activitate",
                below: "Sub Setările de Activitate"
            },
            bottom: "În partea de jos"
        },
        switches: {
            useQuickCss: {
                label: "Activează CSS Personalizat",
                description: "Încarcă CSS personalizat din editorul QuickCSS. Acest lucru îți permite să personalizezi aspectul Discord cu propriile stiluri."
            },
            enableReactDevtools: {
                label: "Activează React Developer Tools",
                description: "Activează extensia React Developer Tools pentru depanarea componentelor React din Discord. Util pentru dezvoltarea de plugin-uri."
            },
            mainWindowFrameless: {
                label: "Dezactivează Cadrul Ferestrei Principale",
                description: "Elimină cadrul nativ al ferestrei pentru un aspect mai curat. Poți în continuare să muți fereastra trăgând de zona barei de titlu."
            },
            frameless: {
                label: "Dezactivează cadrul ferestrei",
                description: "Elimină cadrul nativ al ferestrei pentru un aspect mai curat. Poți în continuare să muți fereastra trăgând de zona barei de titlu."
            },
            winNativeTitleBar: {
                label: "Folosește bara de titlu nativă Windows în locul celei personalizate Discord",
                description: "Înlocuiește bara de titlu personalizată a Discord cu bara de titlu standard Windows. Acest lucru poate îmbunătăți compatibilitatea cu unele instrumente de gestionare a ferestrelor."
            },
            transparent: {
                label: "Activează transparența ferestrei",
                description: "Face fereastra Discord transparentă. Este necesară o temă care suportă transparența, altfel această setare nu va avea niciun efect.",
                isWindows: "Acest lucru va împiedica redimensionarea ferestrei și fixarea acesteia pe marginile ecranului (snap).",
                notWindows: "Acest lucru va împiedica redimensionarea ferestrei."
            },
            winCtrlQ: {
                label: "Înregistrează Ctrl+Q ca scurtătură pentru închiderea Discord (Alternativă la Alt+F4)",
                description: "Adaugă Ctrl+Q ca scurtătură de tastatură pentru a închide Discord. Aceasta oferă o alternativă la Alt+F4 pentru închiderea rapidă a aplicației."
            },
            disableMinSize: {
                label: "Dezactivează dimensiunea minimă a ferestrei",
                description: "Permite redimensionarea ferestrei Discord la dimensiuni mai mici decât cea minimă implicită. Util pentru manageri de ferestre de tip tiling sau ecrane mici."
            }
        },
        quickActions: {
            title: "Acțiuni Rapide",
            description: "Acțiuni comune pe care s-ar putea să dorești să le efectuezi. Aceste scurtături îți oferă acces rapid la funcțiile utilizate frecvent fără a naviga prin meniuri.",
            notificationLog: "Jurnal Notificări",
            editQuickCSS: "Editează QuickCSS",
            relaunchDiscord: "Repornește Discord",
            openSettingsFolder: "Deschide Dosarul de Setări",
            viewSourceCode: "Vezi Codul Sursă"
        },
        specialCards: {
            donations: {
                title: "Donații",
                subtitle: "Îți mulțumim pentru donație!",
                description: "Îți poți gestiona beneficiile în orice moment trimițând un mesaj către @mutanplex.",
                button: "Donează",
                invite: "Alătură-te Discord-ului nostru",
                invalid: "Link de invitație invalid sau expirat."
            },
            supportProject: {
                title: "Susține Proiectul",
                description: "Te rugăm să iei în considerare susținerea dezvoltării Plexcord printr-o donație!"
            },
            contributions: {
                title: "Contribuții",
                subtitle: "Îți mulțumim pentru contribuție!",
                description: "Deoarece ai contribuit la Plexcord, acum ai o insignă nouă și cool!",
                buttonTitle: "Vezi la ce ai contribuit"
            }
        },
        settingsSection: {
            title: "Setări",
            description: "Configurează modul în care Plexcord se comportă și se integrează cu Discord. Aceste setări afectează aspectul și comportamentul clientului Discord.",
            hintParts: {
                prefix: "Poți personaliza unde apare această secțiune de setări în meniul Discord configurând {{pluginLink}}",
                linkText: "Plugin-ul de Setări"
            }
        },
        notifications: {
            title: "Notificări",
            description: "Configurează modul în care Plexcord gestionează notificările. Poți personaliza când și cum primești alerte sau poți vizualiza un istoric al notificărilor trecute.",
            settings: "Setări Notificări",
            viewLog: "Vezi Jurnalul de Notificări",
            permissions: {
                denied: {
                    title: "Permisiune Notificări Desktop Respinsă",
                    label: "Ai respins permisiunile pentru notificări. Notificările desktop nu vor funcționa!"
                }
            },
            style: {
                label: "Stil Notificări",
                description: "Unele plugin-uri îți pot afișa notificări. Acestea vin în două stiluri:",
                plexcord: "Notificări Plexcord",
                plexcordDesc: "Acestea sunt notificări în interiorul aplicației",
                desktop: "Notificări Desktop",
                desktopDesc: "Notificări native de sistem (ca atunci când primești un ping)",
                onlyWhenNotFocused: "Folosește notificările Desktop doar când Discord nu este în focar (focused)",
                always: {
                    desktop: "Folosește întotdeauna notificările Desktop",
                    plexcord: "Folosește întotdeauna notificările Plexcord"
                }
            },
            positions: {
                label: "Poziție Notificări",
                right: {
                    bottom: "Dreapta Jos",
                    top: "Dreapta Sus",
                },
                left: {
                    bottom: "Stânga Jos",
                    top: "Stânga Sus",
                }
            },
            missed: {
                label: "Număr Notificări Ratate",
                description: "Când revii în Discord, va apărea o notificare cu numărul de mesaje ratate",
                whileYou: "În timp ce ai fost plecat",
                count: "{{count}} notificare{{s}} primită/e",
                s: ""
            },
            timeout: {
                label: "Expirare Notificare",
                description: "Timpul (în secunde) în care notificările vor rămâne pe ecran înainte de a dispărea automat"
            },
            logLimit: {
                label: "Limită Jurnal Notificări",
                description: "Numărul maxim de notificări care vor fi păstrate în jurnal înainte ca cele vechi să fie eliminate. Setează pe {{disable}} pentru a dezactiva jurnalul și pe {{unlimited}} pentru a nu elimina niciodată notificările vechi."
            },
            opacity: {
                label: "Opacitate Notificări",
                description: "Opacitatea notificărilor din interiorul aplicației"
            },
            maxNotifications: {
                label: "Număr Maxim de Notificări",
                description: "Numărul maxim de notificări afișate simultan"
            },
            behavior: {
                label: "Comportament Notificări",
            },
            disableInStreamerMode: {
                label: "Dezactivează în Modul Streamer",
                description: "Dezactivează notificările în timp ce te afli în modul streamer"
            },
            renderImages: {
                label: "Redă Imagini",
                description: "Afișează imaginile în cadrul notificărilor"
            },
            streamingTreatment: {
                label: "Tratament în timpul Streaming-ului",
                description: "Cum să fie tratate notificările în timp ce îți partajezi ecranul",
                normal: "Normal - Arată notificarea normal",
                noContent: "Fără Conținut - Ascunde corpul notificării",
                ignore: "Ignoră - Nu arăta notificarea deloc"
            },
        },
        macVibrancy: {
            title: "Stil Vibranță Fereastră (Necesită Repornire)",
            description: "Personalizează efectul de vibranță al ferestrei pe macOS. Acesta controlează stilul de blur și transparență al ferestrei Discord. Modificările necesită repornire.",
            placeholder: "Stil vibranță fereastră",
            style: {
                no: "Fără Vibranță",
                underPage: "Sub Pagină (Nuanțare fereastră)",
                content: "Conținut",
                window: "Fereastră",
                selection: "Selecție",
                titlebar: "Bară de Titlu",
                header: "Antet",
                sidebar: "Bară Laterală",
                tooltip: "Tooltip",
                menu: "Meniu",
                popover: "Popover",
                fullscreenUI: "Interfață Fullscreen (Transparent dar ușor blurat)",
                hud: "HUD (Cea mai transparentă)"
            }
        }
    },

    plugins: {
        title: "Plugin-uri",
        new: "NOU",
        unknown: "Necunoscut",
        noDescription: "Nicio descriere disponibilă.",
        restart: {
            apply: "Repornește pentru a aplica modificările!",
            required: "Repornire necesară!",
            description: "Repornește acum pentru a aplica noile plugin-uri și setările lor",
            following: "Următoarele plugin-uri necesită repornire:",
            remainingCount: "și încă {{count}}",
            fully: "Unele plugin-uri necesită repornire pentru a fi dezactivate complet",
            would: "Dorești să repornești acum?",
            resetDefault: "Resetează la setările implicite",
            failed: "Eșec la pornirea dependențelor:",
            button: {
                restart: "Repornește",
                later: "Mai târziu!",
                now: "Repornește Acum",
                cancel: "Anulează",
                disableWarning: "Dezactivează Avertismentul Permanent",
                disableAll: "Dezactivează Tot",
                reset: "Resetează",
                close: "Închide"
            }
        },
        contributor: {
            contributed: "a contribuit",
            modal: {
                contributionsInfo: "{{userName}} a {{continuedLink}} la {{contributionCount}} plugin-uri.",
                noContributions: "{{userName}} nu a creat niciun plugin. Probabil a {{contributedLink}} în alte moduri!"
            }
        },
        infoModal: {
            description: "Apasă pe rotița dințată sau pe pictograma de info pentru mai multe detalii despre un plugin",
            settingsInfo: "Plugin-urile cu rotiță dințată au setări care pot fi modificate!",
            disableAll: "Dezactivează Toate Plugin-urile"
        },
        error: {
            invalidInput: "Date de intrare invalide",
            stopping: "Eroare la oprirea plugin-ului {{plugin}}",
            starting: "Eroare la pornirea plugin-ului {{plugin}}",
            startDependency: "Eroare la pornirea dependențelor: {{failures}}",
            infoRender: "A apărut o eroare la redarea Componentei Info personalizate a acestui plugin"
        },
        placeholder: {
            number: "Introdu un număr",
            select: "Selectează o opțiune",
            text: "Introdu o valoare"
        },
        excluded: {
            desktop: "Aplicația Discord Desktop sau Plextron",
            discordDesktop: "Aplicația Discord Desktop",
            plextron: "Aplicația Plextron",
            web: "Aplicația Plextron și versiunea Web a Discord",
            dev: "Versiunea de dezvoltator a Plexcord"
        },
        search: {
            looking: "Cauți cumva",
            onlyAvailable: "Disponibil doar pe",
            noCriteria: "Niciun plugin nu corespunde criteriilor de căutare."
        },
        required: {
            title: "Plugin-uri Obligatorii",
            this: "Acest plugin este necesar pentru funcționarea Plexcord.",
            by: "Acest plugin este solicitat de:"
        },
        dangerModal: {
            title: "ACȚIUNE PERICULOASĂ",
            disablePlugins: "Dezactivează Plugin-urile",
            disableText: "Dezactivează Tot",
            irreversible: "ACEASTĂ ACȚIUNE ESTE IREVOCABILĂ!",
            enableBack: "Ești sigur că vrei să continui? Le poți reactiva mai târziu.",
            undone: "Această acțiune nu poate fi anulată. Ești sigur?",
            resetDescription: "Ești pe cale să resetezi toate setările pentru {{pluginName}} la valorile implicite.",
            disable: "Ești pe cale să dezactivezi {{enabledPlugins}} plugin-uri!",
            confirmReset: "Confirmă Resetarea",
            cancel: "Anulează",
            resetSettings: "Resetează Setările",
            resetText: "Resetare"
        },
        filters: {
            label: "Filtre",
            placeholder: "Caută un plugin...",
            option: {
                all: "Arată Tot",
                enabled: "Arată Active",
                disabled: "Arată Dezactivate",
                new: "Arată Noi",
                userplugins: "Arată Plugin-uri Utilizator",
                api: "Arată Plugin-uri API"
            }
        },
        pluginModal: {
            noSettings: "Nu există setări pentru acest plugin.",
            authors: "Autori",
            settings: "Setări",
            successfulReset: "Setările pentru {{plugin}} au fost resetate.",
            enabledStock: "Plugin-uri Stock Active",
            totalStock: "Total Plugin-uri Stock",
            enabledUser: "Plugin-uri Utilizator Active",
            totalUser: "Total Plugin-uri Utilizator",
            info: "Vezi mai multe info",
            source: "Vezi codul sursă"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API pentru a adăuga decoratori în lista de membri (atât în servere, cât și în DM-uri)",
                    messageAccessories: "API pentru a adăuga accesorii la mesaje",
                    messageDecorations: "API pentru a adăuga decorațiuni la mesaje",
                    chatInputButtons: "API pentru a adăuga butoane în câmpul de chat",
                    commands: "API necesar pentru orice folosește comenzi",
                    contextMenu: "API pentru adăugarea/eliminarea elementelor în meniurile contextuale.",
                    dynamicImageModal: "Permite omiterea lățimii sau înălțimii la deschiderea unui modal de imagine",
                    menuItemDemangler: "Descifrează modulul Menu Item al Discord",
                    messageEvents: "API necesar pentru orice folosește evenimente de mesaj",
                    messagePopover: "API pentru a adăuga butoane în ferestrele popover ale mesajelor",
                    messageUpdater: "API pentru actualizarea și re-redarea mesajelor",
                    nicknameIcons: "API pentru a adăuga pictograme lângă poreclă, în profiluri",
                    notices: "Remediază închiderea automată a notificărilor (notices)",
                    serverList: "API necesar pentru plugin-urile care modifică lista de servere",
                    userSettings: "Patch-uiește UserSettings din Discord pentru a expune grupul și numele acestora.",
                    audioPlayer: "API pentru a reda fișiere audio interne Discord sau link-uri audio externe.",
                    userArea: "API pentru a adăuga butoane în panoul zonei de utilizator.",
                    profileCollections: "API pentru adăugarea colecțiilor în panoul de profil al utilizatorului, precum colecția de jocuri Discord."
                },
                chatButtons: {
                    context: {
                        buttons: "Butoane"
                    }
                }
            },
            badges: {
                description: "API pentru a adăuga insigne utilizatorilor",
                contributor: {
                    plexcord: "Contribuitor Plexcord",
                    vencord: "Contribuitor Vencord",
                    userPlugin: "Contribuitor Plugin Utilizator"
                },
                context: {
                    title: "Opțiuni Insigne",
                    copy: {
                        name: "Copiază Numele Insignei",
                        link: "Copiază Link-ul Imaginii Insignei"
                    },
                    refetch: {
                        button: "Reîmprospătează Insignele",
                        success: "Insignele au fost reîmprospătate cu succes!"
                    }
                },
                modal: {
                    title: "Donator Plexcord",
                    special: "Această insignă este un beneficiu special pentru donatorii Plexcord",
                    description: "Te rugăm să iei în considerare susținerea dezvoltării Plexcord devenind donator. Ar însemna mult pentru noi!"
                }
            },
        },
        uiElements: {
            manage: "Gestionează Elementele UI",
            allows: "Îți permite să ascunzi butoanele care nu îți plac",
            section: {
                chatbar: {
                    title: "Butoane Chatbar",
                    description: "Acestea sunt butoanele din partea dreaptă a câmpului de introducere chat"
                },
                messagePopover: {
                    title: "Butoane Popover Mesaj",
                    description: "Acestea sunt butoanele plutitoare din dreapta care apar când treci cu mouse-ul peste un mesaj"
                }
            },
            button: "Butoanele plugin-urilor activate vor apărea aici."
        }
    },

    patchHelper: {
        title: "Ajutor Patch",
        description: "Un instrument pentru dezvoltatori care te ajută să creezi patch-uri pentru plugin-urile Plexcord.",
        fullPatch: {
            label: "Patch Complet",
            description: "Lipește patch-ul JSON complet aici pentru a completa câmpurile"
        },
        find: "Caută",
        match: "Potrivire",
        replacement: "Înlocuire",
        preview: "Previzualizare",
        generatedCode: "Cod Generat",
        group: "Grup",
        diff: "Diferență (Diff)",
        module: "Modul",
        compile: "Compilează",
        compiled: "Compilare Reușită",
        copy: {
            clipboard: "Copiază în Clipboard",
            codeblock: "Copiază ca Bloc de Cod"
        },
        error: {
            noMatch: "Nicio potrivire găsită. Acest modul este cumva încărcat prin lazy loading?",
            multipleMatch: "S-au găsit mai multe potriviri. Te rugăm să folosești un model de căutare mai specific.",
            noFind: "Câmpul 'Caută' lipsește.",
            noReplacement: "Câmpul 'Înlocuire' lipsește.",
            invalidReplacement: "Câmpul 'Înlocuire' este invalid",
            replacementMatch: "Câmpul 'replacement.match' lipsește",
            replacementReplace: "Câmpul 'replacement.replace' lipsește",
            replacementMustFunction: "'Înlocuirea' trebuie să fie o funcție"
        },
        cheatSheet: {
            title: "Listă Rapidă (Cheat Sheet)",
            identifiers: "Secvență escape regex specială care se potrivește cu identificatori (nume variabile, clase, etc.)",
            dollar: "Inserează un $",
            entireMatch: "Inserează întreaga potrivire",
            beforeMatch: "Inserează subșirul de dinaintea potrivirii",
            afterMatch: "Inserează subșirul de după potrivire",
            nthGroup: "Inserează al n-lea grup de captură ($1, $2...)",
            pluginInstance: "Inserează instanța plugin-ului"
        },
        replacementEval: {
            label: "Tratează Înlocuirea ca funcție",
            description: "'Înlocuirea' va fi evaluată ca o funcție dacă acest lucru este activat"
        }
    },

    sync: {
        title: "Backup și Restaurare",
        warning: "Avertisment",
        warningText: "Importarea unui fișier de setări va suprascrie setările actuale. Asigură-te că exporți un backup mai întâi dacă dorești să păstrezi configurația actuală.",
        description: "Poți importa și exporta setările Plexcord ca fișier JSON. Acest lucru îți permite să transferi ușor setările pe un alt dispozitiv sau să le recuperezi după reinstalarea Plexcord sau Discord.",
        successful: "Setări importate cu succes. Repornește pentru a aplica modificările!",
        error: {
            failure: "Eșec la importarea setărilor: {{error}}",
            failedExport: "Eșec la exportarea setărilor, verifică consola",
            invalid: "Setări Invalide. Este acesta un fișier de setări Plexcord?",
            tooLarge: "DataStore prea mare - exclus din backup. Folosește 'Export DataStores' dacă este necesar.",
            clearSomeDate: "DataStore prea mare. Te rugăm să ștergi câteva date din plugin-uri și să încerci din nou."
        },
        settings: {
            text: "Ce este inclus într-un backup?",
            quickcss: "QuickCSS Personalizat",
            theme: "Link-uri Teme",
            plugins: "Setări Plugin-uri",
            datastores: "Plugin DataStores (ex: Fusuri orare sau IRememberYou)"
        },
        import: {
            title: "Importă Setări",
            description: "Selectează un fișier de setări exportat anterior pentru a restaura configurația. Aceasta va înlocui toate setările actuale cu cele din backup.",
            all: "Importă Toate Setările",
            plugins: "Importă Plugin",
            css: "Importă QuickCSS",
            datastore: "Importă DataStores"
        },
        export: {
            title: "Exportă Setări",
            description: "Poți exporta setările actuale Plexcord într-un fișier pentru backup sau transfer pe alt dispozitiv.",
            all: "Exportă Toate Setările",
            plugins: "Exportă Plugin",
            css: "Exportă QuickCSS",
            datastore: "Exportă DataStores"
        }
    },

    cloud: {
        text: "Cloud",
        title: "Sincronizare Setări",
        override: "Sincronizare Cloud",
        description: "Sincronizează-ți setările Plexcord în cloud. Acest lucru facilitează menținerea unei configurații consistente pe mai multe dispozitive, fără import/export manual.",
        switchDescription: "Când este activată, setările tale pot fi sincronizate către și dinspre cloud. Folosește acțiunile de mai jos pentru sincronizare manuală.",
        settings: "Setări Cloud",
        successful: "Setările au fost sincronizate în cloud!",
        updated: "Setările tale au fost actualizate! Click aici pentru a reporni și a aplica complet modificările!",
        deleted: "Setările au fost șterse din cloud!",
        integration: {
            title: "Integrare Cloud",
            description: "Integrarea cloud a Plexcord îți permite să îți sincronizezi setările pe mai multe dispozitive și instalări Discord. Datele tale sunt stocate în siguranță și pot fi restaurate cu ușurință în orice moment.",
        },
        reauth: "Am observat că ai integrările cloud activate într-un alt client! Din cauza unor limitări, va trebui să reautorizezi pentru a continua să le folosești. Click aici pentru a merge la pagina de setări!",
        error: {
            setup: "Configurarea a eșuat (nu s-a putut recupera configurația OAuth).",
            secret: "Configurarea a eșuat (nu a fost returnat niciun secret).",
            string: "Configurarea a eșuat ({{error}}).",
            connect: "Sincronizarea cloud a fost dezactivată deoarece acest cont nu este conectat la aplicația Plexcord Cloud. O poți activa din nou conectând contul în Setările Cloud. (notă: va stoca preferințele separat)",
            noSettings: "Nu există setări în cloud.",
            uptodate: "Setările tale sunt la zi.",
            localNewer: "Setările tale locale sunt mai noi decât cele din cloud.",
            delete: "Nu s-au putut șterge setările ({{error}}).",
            api: {
                returned: {
                    delete: "Nu s-au putut șterge setările (API-ul a returnat {{status}}).",
                    to: "Nu s-au putut sincroniza setările în cloud (API-ul a returnat {{status}}).",
                    from: "Nu s-au putut sincroniza setările din cloud (API-ul a returnat {{status}}).",
                    manifest: "Nu s-a putut prelua manifestul pentru ștergere (API a returnat {{status}})."
                }
            },
            synchronize: {
                to: "Nu s-au putut sincroniza setările în cloud ({{error}}).",
                from: "Nu s-au putut sincroniza setările din cloud ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Activează integrarea cloud de mai sus pentru a folosi funcțiile de sincronizare."
        },
        danger: {
            title: "Zonă Periculoasă",
            description: "Șterge definitiv toate datele tale din cloud. Această acțiune este ireversibilă și va elimina toate setările sincronizate și orice alte date stocate în backend-ul cloud.",
            delete: {
                account: {
                    title: "Șterge Contul Cloud",
                    description: "Ești sigur că vrei să ștergi definitiv contul cloud și toate datele asociate? Această acțiune este ireversibilă.",
                    confirm: "Șterge Contul",
                    cancel: "Anulează"
                }
            }
        },
        notification: {
            title: "Integrare Cloud",
            enabled: "Integrare Cloud Activată",
            host: "{{host}} a fost adăugat în lista albă. Te rugăm să repornești aplicația pentru ca modificările să aibă efect.",
            erase: {
                successful: "Datele din cloud au fost șterse cu succes",
                failed: "Eșec la ștergerea datelor (API-ul a returnat {{status}}), te rugăm să contactezi suportul."
            }
        },
        button: {
            to: "Sincronizează în Cloud",
            from: "Sincronizează din Cloud",
            fromDescription: "Această acțiune va suprascrie setările locale cu cele din cloud. Folosește-o cu atenție!",
            delete: "Șterge Datele Cloud",
            enable: "Activează Integrările Cloud",
            reauthorize: "Reautorizează",
            confirm: "Repornește acum",
            later: "Mai târziu!"
        },
        privacy: "îți respectă confidențialitatea",
        source: "codul sursă",
        overview: "Plexcord vine cu o integrare cloud care adaugă funcții precum sincronizarea setărilor între dispozitive. Aceasta {{privacy}}, iar {{source}} este sub licență AGPL 3.0, astfel încât o poți găzdui singur.",
        authorization: "Conectează-te la backend-ul cloud pentru sincronizarea setărilor. Aceasta va solicita autorizarea dacă nu ai configurat încă integrarea cloud.",
        backend: {
            title: "Backend Cloud",
            description: "Alege modul în care setările tale sunt stocate în cloud. Implicit este folosit Plexcord Cloud, dar poți conecta și propriul serviciu cloud auto-găzduit.",
            invalid: "URL Invalid"
        },
        sync: {
            title: "Reguli de Sincronizare pentru acest Dispozitiv",
            description: "Această setare controlează modul în care setările circulă între acest dispozitiv și cloud. Poți lăsa modificările să circule în ambele sensuri sau poți alege o sursă principală de adevăr.",
            direction: {
                both: "Sincronizare bidirecțională (modificările merg în ambele sensuri)",
                push: "Acest dispozitiv este sursa (doar încărcare)",
                pull: "Cloud-ul este sursa (doar descărcare)",
                manual: "Nu sincroniza automat (doar sincronizare manuală prin butoanele de mai jos)"
            }
        }
    },

    changelog: {
        text: "Jurnal de modificări",
        title: "Jurnal de modificări",
        description: "Poți găsi ultimele schimbări și actualizări ale Plexcord aici.",
        by: "de",
        check: "Verificare depozit (Repo)",
        uptodate: "la zi",
        update: "Actualizare",
        noMessage: "Niciun mesaj",
        unknown: "Necunoscut",
        updatedPlugins: "Plugin-uri Actualizate",
        newSettings: "Setări Noi",
        newSettingTooltip: "Setare nouă în {{plugin}}",
        loading: "Se încarcă...",
        repoUptodate: "Depozitul este la zi",
        fetch: "Preluare din Depozit",
        clear: "Șterge Toate Jurnalele",
        internet: "Asigură-te că ai o conexiune la internet și încearcă din nou.",
        recent: "Schimbări Recente",
        codeChanges: "Schimbări de Cod: {{count}} commit-uri noi",
        updateLogs: "Jurnale Actualizări ({{count}})",
        noCommit: "Nu există commit-uri noi față de versiunea ta actuală. Apasă 'Preluare din Depozit' pentru a verifica.",
        previous: "Sesiuni de actualizare anterioare cu istoricul commit-urilor și schimbările de plugin-uri.",
        modal: {
            description: "Vezi cele mai recente schimbări din Plexcord. Această funcție preia commit-urile direct din depozit pentru a-ți arăta noutățile.",
            repository: "Depozit (Repository)",
            failed: "Preluarea a eșuat - verifică consola",
            current: "Actual:",
            hide: "Ascunde jurnalele",
            show: "Arată jurnalele",
            fetch: {
                title: "Preluare Schimbări",
                description: "Verifică depozitul pentru commit-uri noi, actualizări de plugin-uri și schimbări de cod. Aceasta va compara versiunea actuală cu ultima disponibilă.",
                newCommit: "Acestea sunt noile commit-uri și actualizări de la ultima ta versiune. Poți vedea ce funcții au fost adăugate, ce bug-uri au fost reparate și care plugin-uri au fost actualizate.",
                confirm: "Preluare",
            }
        },
        commit: {
            available: "commit-uri disponibile",
            no: "Niciun commit nou",
            new: "plugin-uri noi",
            updated: "plugin-uri actualizate",
            settings: "setări noi"
        },
        toast: {
            already: "Ești deja la zi cu depozitul",
            found: "S-au găsit {{count}} commit-uri noi în depozit",
            local: "Depozitul este la zi cu copia ta locală",
            failed: "Eșec la preluarea din depozit :(",
            cleared: "Toate jurnalele au fost șterse",
            logCleared: "Jurnalul a fost șters",
            yourLatest: "Commit-uri înregistrate de la ultima ta actualizare"
        },
        alert: {
            clear: {
                title: "Șterge Toate Jurnalele",
                body: "Ești sigur că vrei să ștergi toate jurnalele? Această acțiune nu poate fi anulată.",
                confirm: "Șterge Tot",
                confirmColor: "danger",
                cancel: "Anulează"
            },
            log: {
                title: "Șterge Jurnalul",
                body: "Ești sigur că vrei să ștergi acest jurnal? Această acțiune nu poate fi anulată.",
                confirm: "Șterge Jurnalul",
                confirmColor: "danger",
                cancel: "Anulează"
            }
        },
        newPlugins: "{{count}} Plugin-uri Noi",
        following: "Următoarele plugin-uri au fost adăugate în actualizările recente:",
        more: "+ încă {{count}} plugin-uri"
    },

    csp: {
        restart: "Este necesară o repornire pentru a aplica această modificare",
        blocked: {
            resources: "Resurse Blocate",
            disallowed: "Unele imagini, stiluri sau fonturi au fost blocate deoarece provin din domenii nepermise.",
            recommended: "Se recomandă insistent mutarea lor pe GitHub sau Imgur. Totuși, poți permite domeniile dacă ai încredere deplină în ele.",
            afterAllow: "După ce permiți un domeniu, trebuie să închizi complet aplicația (din tray / task manager) și să repornești {{platform}}.",
            allow: "Permite",
            url: "URL-uri Blocate"
        },
        imgur: {
            direct: "Link-urile Imgur ar trebui să fie link-uri directe de forma {{etc}}",
            copy: "Pentru a obține un link direct, fă click dreapta pe imagine și selectează 'Copy image address'."
        },
        wants: {
            caller: "{{callerName}} dorește să permită conexiuni către {{domain}}",
            detail: "Dacă nu recunoști și nu ai încredere deplină în {{domain}}, ar trebui să anulezi această cerere!",
            restart: "Va trebui să închizi complet și să repornești {{appName}} pentru ca modificările să aibă efect.",
            type: {
                images: "Imagini",
                styles: "CSS și Teme",
                fonts: "Fonturi"
            },
            content: "Următoarele tipuri de conținut vor fi permise să se încarce de pe {{domain}}:",
            understand: "Am încredere deplină în {{domain}} și înțeleg riscurile.",
            button: {
                cancel: "Anulează",
                allow: "Permite"
            },
            title: "Permisiuni Host"
        }
    },

    themes: {
        title: "Teme",
        management: "Gestionare Teme",
        description: "Personalizează aspectul Discord cu teme. Adaugă fișiere .css locale sau încarcă teme direct din URL-uri. Temele cu rotiță dințată au setări personalizabile.",
        local: "Teme Locale",
        new: "NOU",
        pinned: "Fixat",
        stylus: "extensia Stylus",
        bd: "Teme BetterDiscord",
        github: "GitHub",
        download: "Cauți teme? Verifică {{bd}} sau caută pe {{github}}. Când descarci de pe BetterDiscord, apasă 'Download' și pune fișierul .theme.css în dosarul tău de teme.",
        add: "Adaugă",
        reset: "Resetează setările la valorile implicite",
        notCSS: "Nu este un fișier CSS. Amintește-ți să folosești link-ul direct (raw)!",
        okay: "Ok!",
        checking: "Se verifică...",
        valid: "Valid!",
        upload: "Încarcă Temă",
        openFolder: "Deschide Dosarul de Teme",
        loadMissing: "Încarcă Temele Lipsă",
        editQuickCSS: "Editează QuickCSS",
        editClient: "Editează ClientTheme",
        website: "Deschide Site-ul",
        discord: "Server de Discord",
        downloadTheme: "Descarcă",
        refresh: "Reîmprospătează",
        delete: "Șterge",
        unknown: {
            title: "Necunoscut",
            author: "Autor Necunoscut",
            theme: "O Temă Discord"
        },
        required: "Următoarele plugin-uri sunt necesare, dar nu sunt activate: ",
        homepage: "Pagina principală",
        support: "Suport",
        online: {
            title: "Teme Online",
            description: "Încarcă teme direct din URL-uri în loc de fișiere locale. Temele online se actualizează automat când sursa se modifică.",
            enable: "Activează Temele Online",
            enableDescription: "Comută încărcarea temelor online. Când este dezactivat, toate temele online vor fi oprite."
        },
        quickActions: {
            title: "Acțiuni Rapide",
            description: "Scurtături pentru gestionarea temelor. Deschide dosarul de teme, folosește QuickCSS sau reîncarcă temele după modificări."
        },
        error: {
            userscript: "Temele nu sunt suportate în Userscript!",
            stylus: "Poți în schimb să instalezi teme folosind {{stylus}}!",
            expired: "Link invalid sau expirat",
            text: "Eroare:"
        },
        copy: {
            url: "Copiază URL",
            copied: "URL-ul temei a fost copiat!",
            settings: "Copiază setările temei",
            copiedSettings: "Setările temei au fost copiate în clipboard."
        },
        paste: {
            settings: "Lipește setările temei",
            empty: "Clipboard-ul este gol.",
            invalid: "Clipboard-ul nu conține date de setări valide.",
            pasted: "Setările temei au fost lipite din clipboard."
        },
        settings: {
            for: "Setări pentru {{themeName}}",
        },
        installed: {
            title: "Teme Instalate",
            description: "Gestionează-ți temele aici. Temele locale se încarcă din dosar, cele online din URL-uri.",
            count: "{{count}} teme instalate ({{localCount}} locale, {{onlineCount}} online) · {{enabledCount}} activate",
            search: "Caută o temă...",
            loading: "Se încarcă temele...",
            none: "Nicio temă instalată încă. Adaugă fișiere în dosar sau adaugă o temă online mai sus.",
            noCriteria: "Nicio temă nu corespunde căutării."
        },
        filter: {
            all: "Arată Tot",
            online: "Teme Online",
            local: "Teme Locale",
            enabled: "Activate",
            disabled: "Dezactivate"
        },
        notification: {
            refresh: {
                title: "Temă Reîmprospătată",
                error: "Eșec la reîmprospătarea temei"
            },
            failed: {
                download: "Eșec la descărcarea temei"
            }
        }
    },

    updater: {
        title: "Actualizator",
        settings: "Setări Actualizator",
        updates: "Actualizări",
        updated: "a fost actualizat!",
        restart: "Click aici pentru repornire",
        repaired: "Plexcord a fost reparat!",
        ok: "OK",
        preferences: {
            title: "Preferințe Actualizare",
            description: "Controlează modul în care Plexcord se menține la zi. Poți alege actualizarea automată în fundal sau notificări pentru actualizări noi.",
        },
        github: {
            local: "Copia ta locală are commit-uri mai recente decât depozitul la distanță. Acest lucru se întâmplă de obicei dacă ai făcut modificări locale."
        },
        error: {
            check: "Eșec la verificarea actualizărilor. Verifică consola pentru info",
            occurred: "A apărut o eroare necunoscută",
            retrieve: "Eșec la preluare - verifică consola",
            title: "Oops!",
            tryAgain: "A apărut o eroare necunoscută. Te rugăm să încerci din nou.",
            command: "Comanda {{path}} nu a fost găsită. Te rugăm să o instalezi.",
            code: "Cod {{code}}. Vezi consola pentru info.",
            running: "Eroare la rularea {{cmd}}: {{error}}",
            failed: "Și asta a eșuat :( Încearcă să actualizezi sau să reinstalezi folosind kitul de instalare!"
        },
        available: "Există o actualizare",
        updateAvailable: "O actualizare Plexcord este disponibilă!",
        click: "Click aici pentru a vedea actualizarea",
        available_plural: "Există {{count}} actualizări",
        current: "La zi!",
        successful: {
            title: "Actualizare Reușită!",
            body: "Actualizat cu succes. Repornești acum pentru a aplica modificările?",
            button: {
                confirm: "Repornește",
                cancel: "Nu acum!",
                update: "Actualizează Acum",
                check: "Verifică Actualizări"
            },
            noFound: "Nicio actualizare găsită"
        },
        automatically: {
            label: "Actualizare automată",
            description: "Actualizează Plexcord automat fără confirmare"
        },
        notify: {
            label: "Notifică-mă când o actualizare automată se termină",
            description: "Arată o notificare când Plexcord se actualizează automat"
        },
        repo: "Repo",
        repoDescription: "Acesta este depozitul GitHub de unde Plexcord își preia actualizările.",
        loading: "Se încarcă...",
    },

    components: {
        error: {
            title: "O, nu!",
            render: "A apărut o eroare la redarea acestei Componente. Mai multe info în consolă."
        },
        componentFailed: {
            message: "Eșec la redarea acestei Pagini. Totuși, există o actualizare disponibilă care ar putea rezolva problema. Dorești să actualizezi și să repornești acum?"
        },
        quickCSS: {
            title: "Editorul QuickCSS este deschis",
            message: "Editorul QuickCSS este încă deschis în fundal.",
            detail: "Vrei să închizi Discord oricum? Această acțiune va închide și editorul.",
            cancel: "Anulează",
            close: "Închide oricum"
        }
    },

    commands: {
        error: {
            execute: "A apărut o eroare la executarea comenzii '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Închide Notificarea",
        noYet: "Nicio notificare încă",
        settings: "Setări Notificări",
        log: {
            title: "Jurnal Notificări",
            clear: "Șterge Jurnalul de Notificări",
            sure: "Ești sigur?",
            permamently: "Această acțiune va elimina definitiv {{count}} notificare/notificări. Acțiunea este ireversibilă.",
            button: {
                confirm: "Fă-o!",
                cancel: "Lasă așa"
            }
        }
    },

    memberlist: {
        error: {
            render: "Eșec la redarea decoratorului de listă membri {{key}}"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Eșec la redarea accesoriului de mesaj {{key}}"
            }
        },
        decoration: {
            error: {
                render: "Eșec la redarea decorațiunii de mesaj {{key}}"
            }
        }
    },

    utils: {
        toast: {
            copied: "Copiat în clipboard!"
        }
    },

    common: {
        unit: {
            year: "an",
            years: "ani",
            month: "lună",
            months: "luni",
            week: "săptămână",
            weeks: "săptămâni",
            day: "zi",
            days: "zile",
            hour: "oră",
            hours: "ore",
            minute: "minut",
            minutes: "minute",
            second: "secundă",
            seconds: "secunde",
            ago: "în urmă",
            s: ""
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Dezactivează urmărirea Discord (analytics/'science'), metricile și raportarea erorilor Sentry",
            option: {
                disableAnalytics: {
                    label: "Dezactivează Analiticele",
                    description: "Dezactivează urmărirea Discord (analytics/'science'), metricile și raportarea erorilor Sentry"
                }
            }
        },
        settings: {
            name: "Settings",
            description: "Adaugă interfața de Setări și informații de depanare",
            option: {
                language: {
                    label: "Limbă",
                    description: "Selectează limba preferată pentru Plexcord."
                },
                settingsLocation: {
                    label: "Locație Setări",
                    description: "Determinul unde va fi amplasată secțiunea de setări Plexcord."
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "Ne ajută să îți oferim suport",
            commands: {
                description: {
                    debug: "Trimite info de depanare Plexcord",
                    plugins: "Trimite lista de plugin-uri Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "Stai puțin!",
                    body: "Folosești o versiune învechită de Plexcord! Sunt șanse mari ca problema ta să fie deja rezolvată.",
                    footer: "Te rugăm să actualizezi înainte de a cere suport!",
                    button: {
                        cancel: "Vezi Actualizări",
                        confirm: "Actualizează și Repornește Acum",
                        secondaryConfirm: "Știu ce fac sau nu pot actualiza"
                    }
                },
                updater: {
                    title: "Stai puțin!",
                    body: "Folosești o versiune Plexcord actualizată extern, pentru care nu oferim suport!",
                    footer: "Te rugăm să treci la o {{officially}}, sau contactează menținătorul pachetului pentru suport.",
                    officially: "versiune de Plexcord suportată oficial",
                    button: {
                        cancel: "Anulează",
                        confirm: "Vezi Pagina de Descărcare",
                        now: "Actualizează Acum"
                    },
                    toast: {
                        success: "Succes! Se repornește...",
                        already: "Deja la zi!",
                        failed: "Actualizarea a eșuat :("
                    }
                },
                custom: {
                    title: "Stai puțin!",
                    header: "Folosești o versiune custom de Plexcord, pentru care nu oferim suport!",
                    body: "Oferim suport doar pentru {{officialBuild}}. Fie {{switch}}, fie rezolvă problema singur.",
                    footer: "Vei primi ban la suport dacă ignori această regulă.",
                    official: "versiunile oficiale",
                    switch: "treci la o versiune oficială",
                    button: {
                        confirm: "Am înțeles",
                        secondaryConfirm: "Nu mai arăta"
                    }
                }
            },
            button: {
                debug: "Rulează /plexcord-debug",
                plugins: "Rulează /plexcord-plugins",
                snippet: "Rulează Snippet"
            },
            toast: {
                success: "Succes!",
                failed: "Rularea snippet-ului a eșuat :(",
                failedOpenInvite: "Eșec la deschiderea invitației, verifică consola :(",
                upload: "Lista de plugin-uri a fost încărcată cu succes!",
                failedUpload: "Eșec la încărcarea listei de plugin-uri. Te rugăm să încerci din nou.",
                unableGenerate: "Eșec la generarea listei de plugin-uri."
            },
            dm: {
                warning: "Te rugăm să nu trimiți mesaje private dezvoltatorilor Plexcord pentru suport!{{br}}În schimb, poți intra pe serverul de {{support}} și să folosești canalul de suport Plexcord: {{channel}}"
            },
            alert: {
                title: "Atenție: Număr mare de plugin-uri",
                paragraph1: "Ai peste 100 de plugin-uri activate.",
                paragraph2: "Din cauza numărului mare de plugin-uri, s-ar putea să nu primești suport.",
                paragraph3: "Problema ta este probabil cauzată de conflicte între plugin-uri.",
                paragraph4: "Te rugăm să dezactivezi câteva plugin-uri pentru depanare.",
                paragraph5: "Lista ta de plugin-uri va fi trimisă ca fișier text.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Click dreapta pe panoul de cont din stânga jos pentru a vedea profilul tău în serverul curent",
            option: {
                prioritizeServerProfile: {
                    label: "Prioritizează Profilul de Server",
                    description: "Prioritizează Profilul de Server la click stânga pe panoul de cont"
                }
            },
            context: {
                account: "Vezi Profil Cont",
                server: "Vezi Profil Server",
                prioritize: "Prioritizează Profil Server"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Face ca popout-ul de Suprimare Zgomot să comute între 'Niciunul' și 'Krisp' în loc de 'Krisp' și 'Standard'"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Animează orice poate fi animat",
            option: {
                icons: {
                    label: "Pictograme",
                    description: "Animează mereu pictogramele serverelor, avatarele, decorațiunile și altele"
                },
                statusEmojis: {
                    label: "Emoji-uri de Status",
                    description: "Animează mereu emoji-urile de status"
                },
                serverBanners: {
                    label: "Banner-e Server",
                    description: "Animează mereu banner-ele serverelor"
                },
                nameplates: {
                    label: "Plăcuțe de nume",
                    description: "Animează mereu plăcuțele de nume (nameplates)"
                },
                roleGradients: {
                    label: "Gradienți de Rol",
                    description: "Animează mereu gradienții de rol"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Extinde mereu ferestrele de profil la dimensiunea completă"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Extinde mereu listele de roluri în popout-urile de profil",
            option: {
                hideArrow: {
                    label: "Ascunde Săgeata",
                    description: "Ascunde săgeata"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Redă sunetul 'animalese' din Animal Crossing pentru fiecare mesaj trimis (vorbesc mult)",
            option: {
                volume: {
                    label: "Volum",
                    description: "Volumul sunetului animalese"
                },
                speed: {
                    label: "Viteză",
                    description: "Viteza sunetului animalese"
                },
                pitch: {
                    label: "Tonalitate (Pitch)",
                    description: "Multiplicator de tonalitate"
                },
                messageLengthLimit: {
                    label: "Limită Lungime Mesaj",
                    description: "Lungimea maximă a mesajului de procesat"
                },
                processOwnMessages: {
                    label: "Procesează Propriile Mesaje",
                    description: "Activează pentru a procesa și propriile tale mesaje"
                },
                soundQuality: {
                    label: "Calitate Sunet",
                    description: "Calitatea sunetului utilizat",
                    high: "Înaltă",
                    med: "Medie",
                    low: "Joasă",
                    lowest: "Cea mai joasă"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Elimină ferestrele enervante de 'domeniu nesigur' și 'fișier suspect'",
            option: {
                domain: {
                    label: "Domeniu",
                    description: "Elimină pop-up-ul de domeniu nesigur la deschiderea link-urilor"
                },
                file: {
                    label: "Fișier",
                    description: "Elimină pop-up-ul 'Descărcare Potențial Periculoasă' la deschiderea link-urilor"
                },
                noDeleteSafety: {
                    label: "Fără Siguranță la Ștergere",
                    description: "Elimină cerința de a introduce numele serverului la ștergerea acestuia"
                },
                confirmModal: {
                    label: "Modal de Confirmare",
                    description: "Să fie afișat un modal 'ești sigur că vrei să ștergi'?"
                }
            },
            alert: {
                title: "Ștergi serverul?",
                body: "Este permanent, dacă nu era deja evident.",
                confirm: "Șterge",
                cancel: "Anulează"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonimizează numele fișierelor încărcate",
            option: {
                anonymiseByDefault: {
                    label: "Anonimizează implicit",
                    description: "Anonimizează numele fișierelor în mod implicit. Poți dezactiva asta în pop-up-ul de încărcare dacă e nevoie."
                },
                spoilerMessages: {
                    label: "Mesaje Spoiler",
                    description: "Anonimizează numele fișierelor care sunt marcate ca spoilere."
                },
                method: {
                    label: "Metodă",
                    description: "Metoda de anonimizare",
                    random: "Caractere Aleatorii",
                    consistent: "Consistent",
                    timestamp: "Timestamp (Marcaj temporal)"
                },
                randomisedLength: {
                    label: "Lungime Aleatorie",
                    description: "Lungimea caracterelor aleatorii"
                },
                consistent: {
                    label: "Consistent",
                    description: "Secret de anonimizare consistent"
                }
            },
            using: {
                anonymous: "Se folosește nume de fișier anonim",
                spoiler: "Se folosește nume de fișier normal"
            },
            spoiler: {
                description: "Comută spoiler pentru fișierele tale",
                toggle: "Comută spoiler pentru fișierele tale (implicit activat)",
                enabled: "Spoiler activat!",
                disabled: "Spoiler dezactivat!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Discord Rich Presence pentru Apple Music-ul tău!",
            about: "Pentru șirurile de formatare personalizate, poți folosi câteva tag-uri speciale: {{name}} este înlocuit cu numele piesei; {{artist}} este înlocuit cu numele artistului; și {{album}} este înlocuit cu numele albumului.",
            button: {
                listen: "Ascultă pe Apple Music",
                songLink: "Vezi pe SongLink"
            },
            option: {
                activityType: {
                    label: "Tip Activitate",
                    description: "Ce tip de activitate să apară",
                    listening: "Ascultă",
                    playing: "Se joacă"
                },
                statusDisplayType: {
                    label: "Tip Afișare Status",
                    description: "Arată numele piesei / artistului în lista de membri",
                    off: "Nu arăta (arată mesaj generic de ascultare)",
                    artist: "Arată numele artistului",
                    track: "Arată numele piesei"
                },
                refreshInterval: {
                    label: "Interval de Împrospătare",
                    description: "Intervalul dintre împrospătările activității (secunde)"
                },
                enableTimestamps: {
                    label: "Activează Marcajele Temporale",
                    description: "Dacă să fie activate sau nu marcajele temporale"
                },
                enableButtons: {
                    label: "Activează Butoanele",
                    description: "Dacă să fie activate sau nu butoanele"
                },
                nameString: {
                    label: "Format Nume",
                    description: "Formatul numelui activității"
                },
                detailsString: {
                    label: "Format Detalii",
                    description: "Formatul detaliilor activității"
                },
                stateString: {
                    label: "Format Stare",
                    description: "Formatul stării activității"
                },
                largeImageType: {
                    label: "Tip Imagine Mare",
                    description: "Tipul imaginii mari din activitate",
                    album: "Copertă album",
                    artist: "Imagine artist",
                    disabled: "Dezactivat"
                },
                largeTextString: {
                    label: "Format Text Imagine Mare",
                    description: "Formatul textului pentru imaginea mare"
                },
                smallImageType: {
                    label: "Tip Imagine Mică",
                    description: "Tipul imaginii mici din activitate",
                    album: "Logo Apple Music",
                    artist: "Imagine artist",
                    disabled: "Dezactivat"
                },
                smallTextString: {
                    label: "Format Text Imagine Mică",
                    description: "Formatul textului pentru imaginea mică"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Plugin de client pentru arRPC pentru a activa RPC pe Discord Web (experimental)",
            use: {
                title: "Cum se folosește arRPC",
                enable: "{{link}} pentru a porni serverul, apoi activează plugin-ul.",
                link: "Urmează instrucțiunile din repo-ul GitHub"
            },
            toast: {
                connected: "Conectat la arRPC",
                failed: "Eșec la conectarea la arRPC, este pornit?",
                retry: "Reîncearcă"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Cu @someone poți menționa pe cineva la întâmplare"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Actualizează automat statusul tău online (online, idle, dnd) când lansezi jocuri",
            option: {
                statusToSet: {
                    label: "Status de Setat",
                    description: "Statusul care va fi setat la lansarea unui joc",
                    online: "Online",
                    dnd: "Nu deranja (Do Not Disturb)",
                    idle: "Inactiv (Idle)",
                    invisible: "Invizibil"
                },
                excludeInvisible: {
                    label: "Exclude Invizibil",
                    description: "Previne schimbările automate de status când ești deja pe invizibil"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Arhivează automat (zip) anumite tipuri de fișiere și dosare înainte de a le încărca pe Discord",
            option: {
                extensions: {
                    label: "Extensii",
                    description: "Listă de extensii separate prin virgulă pentru auto-zip (ex: .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Afișează banner-e în lista de membri",
            option: {
                animate: {
                    label: "Animează",
                    description: "Animează banner-ul"
                },
                preferNameplate: {
                    label: "Preferă Nameplate",
                    description: "Preferă plăcuța de nume în locul banner-ului"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Arată pictogramele de activitate în lista de membri și permite vizualizarea tuturor activităților",
            option: {
                memberList: {
                    label: "Listă Membri",
                    description: "Arată pictogramele de activitate în lista de membri"
                },
                iconSize: {
                    label: "Dimensiune Pictogramă",
                    description: "Dimensiunea pictogramelor de activitate"
                },
                specialFirst: {
                    label: "Speciale la Început",
                    description: "Arată activitățile speciale primele (Momentan Spotify și Twitch)"
                },
                renderGifs: {
                    label: "Randare GIF-uri",
                    description: "Permite randarea GIF-urilor"
                },
                removeGameActivityStatus: {
                    label: "Elimină Statusul 'Activitate Joc'",
                    description: "Elimină pictograma și statusul de activitate joc"
                },
                userPopout: {
                    label: "Popout Utilizator",
                    description: "Arată toate activitățile în popout-ul/sidebar-ul profilului"
                },
                hideTooltip: {
                    label: "Ascunde Tooltip",
                    description: "Ascunde activitățile în diverse locuri"
                },
                allActivitiesStyle: {
                    label: "Stil Toate Activitățile",
                    description: "Stilul pentru afișarea tuturor activităților",
                    list: "Listă",
                    carousel: "Carusel",
                    left: "Stânga",
                    right: "Dreapta"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Adaugă un vizualizator spectrograf și osciloscop la playerul de fișiere audio",
            option: {
                oscilloscope: {
                    label: "Osciloscop",
                    description: "Activează vizualizatorul osciloscop"
                },
                spectrograph: {
                    label: "Spectrograf",
                    description: "Activează vizualizatorul spectrograf"
                },
                oscilloscopeSolidColor: {
                    label: "Culoare Solidă Osciloscop",
                    description: "Folosește o culoare solidă pentru osciloscop în loc de gradient"
                },
                oscilloscopeColor: {
                    label: "Culoare Osciloscop",
                    description: "Culoarea osciloscopului când culoarea solidă este activată"
                },
                spectrographSolidColor: {
                    label: "Culoare Solidă Spectrograf",
                    description: "Folosește o culoare solidă pentru spectrograf în loc de gradient"
                },
                spectrographColor: {
                    label: "Culoare Spectrograf",
                    description: "Culoarea spectrografului când culoarea solidă este activată"
                }
            },
            toast: {
                invalidColorFormat: "Format de culoare invalid pentru {{settingKey}}, asigură-te că este 'R, G, B' sau '#RRGGBB'"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Creează motive personalizate pentru ban și/sau arată un câmp de text implicit în locul opțiunilor.",
            option: {
                reasons: {
                    label: "Motive",
                    description: "Motivele tale personalizate"
                },
                isTextInputDefault: {
                    label: "Câmp Text Implicit",
                    description: "Arată un câmp de text în loc de meniu selectabil. (Echivalent cu apăsarea opțiunii 'Altul')"
                }
            },
            title: "Motive",
            placeholder: "Motiv",
            add: "Adaugă alt motiv"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Permite căutarea în lista de utilizatori blocați și face numele selectabile în setări.",
            placeholder: "Caută utilizatori..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Îmbunătățește sistemul de comenzi cu diverse funcții.",
            option: {
                autoFillArguments: {
                    label: "Auto-completare Argumente",
                    description: "Completează automat comanda cu toate argumentele, nu doar cele obligatorii"
                },
                allowNewlinesInCommands: {
                    label: "Permite Linii Noi în Comenzi",
                    description: "Permite linii noi în inputul comenzilor (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Reîmprospătează comenzile aplicațiilor Discord local",
                    user: "utilizator specific pentru reîmprospătare",
                    refreshing: "Se reîmprospătează comenzile...",
                    refreshed: "Comenzi reîmprospătate cu succes!",
                    failed: "Eșec la reîmprospătarea comenzilor. Verifică consola pentru detalii."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Arată dosarele de servere pe un sidebar dedicat și adaugă îmbunătățiri pentru dosare",
            option: {
                sidebar: {
                    label: "Sidebar",
                    description: "Afișează serverele din dosar pe un sidebar dedicat"
                },
                sidebarAnim: {
                    label: "Animație Sidebar",
                    description: "Animează deschiderea sidebar-ului de dosare"
                },
                closeAllFolders: {
                    label: "Închide Toate Dosarele",
                    description: "Închide toate dosarele când selectezi un server care nu este în dosar"
                },
                closeAllHomeButton: {
                    label: "Închide Tot la Buton Home",
                    description: "Închide toate dosarele când dai click pe butonul Home"
                },
                closeOthers: {
                    label: "Închide Altele",
                    description: "Închide celelalte dosare când deschizi un dosar"
                },
                closeServerFolder: {
                    label: "Închide Dosar Server",
                    description: "Închide dosarul când selectezi un server din acel dosar"
                },
                forceOpen: {
                    label: "Forțează Deschiderea",
                    description: "Forțează un dosar să se deschidă când treci la un server din acel dosar"
                },
                keepIcons: {
                    label: "Păstrează Pictogramele",
                    description: "Păstrează pictogramele în bara principală chiar dacă dosarul e deschis în BetterFolders sidebar"
                },
                showFolderIcon: {
                    label: "Arată Pictogramă Dosar",
                    description: "Arată pictograma dosarului deasupra serverelor în sidebar-ul BetterFolders",
                    never: "Niciodată",
                    always: "Întotdeauna",
                    moreThanOne: "Când sunt extinse mai multe dosare"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Schimbă textul alt al GIF-urilor din simplul 'GIF' în etichetele/numele fișierului"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Face ca selectorul de GIF-uri să deschidă categoria Favorite implicit",
            option: {
                keepOpen: {
                    label: "Păstrează Deschis",
                    description: "Păstrează selectorul de GIF-uri deschis după selectare"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Vezi data de expirare a invitațiilor, profilul celui care a invitat și previzualizează serverele înainte de a intra",
            render: {
                tip: "Această invitație va expira în {{time}}",
                header: "{{name}} te-a invitat în {{server}}",
                never: "nu expiră niciodată"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Ascunde notițele sau dezactivează corecția ortografică (Configurează în setări!!)",
            option: {
                hide: {
                    label: "Ascunde notițele",
                    description: "Ascunde căsuța de notițe în popout-ul utilizatorului"
                },
                noSpellCheck: {
                    label: "Fără Corecție Ortografică",
                    description: "Dezactivează spellcheck-ul în notițe"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Numărul de semne plus dinaintea unui :emoji: determină mesajul la care se adaugă reacția"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Adaugă opțiuni pentru a copia culoarea rolului / editare rol / vizualizare pictogramă rol la click dreapta",
            option: {
                roleIconFileFormat: {
                    label: "Format Fișier Pictogramă Rol",
                    description: "Formatul fișierului utilizat la vizualizarea pictogramei rolului"
                }
            },
            context: {
                copyColor: "Copiază Culoare Rol",
                editRole: "Editează Rol",
                viewIcon: "Vezi Pictogramă Rol"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Copiază culoarea rolului la click pe punctul de rol. Permite folosirea punctului și a numelor colorate simultan.",
            option: {
                bothStyles: {
                    label: "Ambele Stiluri",
                    description: "Arată și punctul de rol și numele colorate"
                },
                copyRoleColorInProfilePopout: {
                    label: "Copiază Culoare Rol în Profil",
                    description: "Permite click pe punctul de rol din profil pentru a copia culoarea"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Îmbunătățește meniul de sesiuni (dispozitive). Vezi marcaje temporale exacte, pune nume personalizate și primește notificări.",
            new: "NOU",
            newSessions: "Sesiuni Noi:",
            rename: "Redenumește",
            newDevice: "Nume Nou Dispozitiv",
            resetName: "Resetează Numele",
            save: "Salvează",
            cancel: "Anulează",
            option: {
                backgroundCheck: {
                    label: "Verificare în Fundal",
                    description: "Verifică sesiunile noi în fundal și afișează notificări"
                },
                checkInterval: {
                    label: "Interval Verificare",
                    description: "Cât de des să verifice sesiunile noi în fundal (în minute)"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Îmbunătățește experiența deschiderii meniului de setări",
            option: {
                disableFade: {
                    label: "Dezactivează Fade",
                    description: "Dezactivează animația de tranziție (crossfade)"
                },
                organizeMenu: {
                    label: "Organizează Meniul",
                    description: "Organizează meniul rotiței de setări în categorii"
                },
                eagerLoad: {
                    label: "Eager Load (Încărcare Rapidă)",
                    description: "Elimină întârzierea la prima deschidere a meniului"
                }
            },
            alert: {
                title: "Repornire necesară",
                restart: "Ai schimbat setări care necesită repornire.",
                confirm: "Repornește acum",
                cancel: "Mai târziu!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Încarcă cu un singur click, deschide meniul cu click dreapta"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Acest plugin îți permite să mărești previzualizările fluxurilor (stream)",
            context: {
                viewPreview: "Vezi Previzualizare Stream"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Blochează mesajele care conțin cuvinte cheie definite de tine, ca și cum utilizatorul ar fi blocat.",
            option: {
                blockedWords: {
                    label: "Cuvinte Blocate",
                    description: "Listă de cuvinte separate prin virgulă de blocat"
                },
                useRegex: {
                    label: "Folosește Regex",
                    description: "Folosește fiecare valoare ca expresie regulată (avansat)"
                },
                caseSensitive: {
                    label: "Sensibil la Majuscule",
                    description: "Dacă căutarea să facă distincție între litere mari și mici"
                },
                ignoreBlockedMessages: {
                    label: "Ignoră Mesajele Blocate",
                    description: "Ignoră complet bara de mesaje noi (recente)"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Previne încărcarea modulului Krisp"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Cenzurează (blur) fișierele din canalele NSFW până când treci cu mouse-ul peste ele",
            option: {
                blurAmount: {
                    label: "Nivel de Blur",
                    description: "Nivelul de blur (în pixeli)"
                },
                blurAllChannels: {
                    label: "Blur în Toate Canalele",
                    description: "Cenzurează fișierele în toate canalele (nu doar NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Sari peste confirmarea de fixare (pin) când folosești funcțiile de pin"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Primește notificări de la surse specifice chiar și pe modul 'Nu deranja'. Click dreapta pe utilizatori/canale/servere pentru a seta bypass-ul.",
            context: {
                remove: "Elimină Bypass Status",
                add: "Adaugă Bypass Status"
            },
            option: {
                guilds: {
                    label: "Servere",
                    description: "Servere cu bypass (notificat la orice ping în server)",
                    placeholder: "Separă prin virgulă"
                },
                channels: {
                    label: "Canale",
                    description: "Canale cu bypass (notificat la orice ping în acel canal)",
                    placeholder: "Separă prin virgulă"
                },
                users: {
                    label: "Utilizatori",
                    description: "Utilizatori cu bypass (notificat pentru toate mesajele în DM)",
                    placeholder: "Separă prin virgulă"
                },
                allowOutsideOfDms: {
                    label: "Permite în afara DM-urilor",
                    description: "Permite utilizatorilor selectați să facă bypass și în afara DM-urilor (toate mesajele trimise de ei)"
                },
                notificationSound: {
                    label: "Sunet Notificare",
                    description: "Dacă sunetul de notificare ar trebui redat"
                },
                respectSilentPings: {
                    label: "Respectă Ping-urile Silențioase",
                    description: "Respectă ping-urile @silent / notificările suprimate"
                },
                statusToUse: {
                    label: "Status de Folosit",
                    description: "Statusul pentru care se aplică lista albă",
                    online: "Online",
                    idle: "Inactiv",
                    dnd: "Nu deranja",
                    invisible: "Invizibil"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Urmărește și afișează zilele de naștere ale utilizatorilor cu pictograme de tort",
            context: {
                label: "Zi de naștere",
                setBirthday: "Setează ziua de naștere",
                clearBirthday: "Șterge ziua de naștere",
                current: "Actuală:"
            },
            option: {
                chat: {
                    label: "Chat",
                    description: "Afișează pictograme de tort lângă numele de utilizator în chat"
                },
                memberList: {
                    label: "Lista de membri",
                    description: "Afișează pictograme de tort în lista de membri"
                },
                profileBadge: {
                    label: "Insignă profil",
                    description: "Afișează insigna de tort în profilul utilizatorului"
                },
                notificationSound: {
                    label: "Sunet notificare",
                    description: "Redă un sunet când este trimisă notificarea de zi de naștere"
                },
                userList: {
                    label: "Zile de naștere salvate",
                    description: "Gestionați zilele de naștere salvate"
                }
            },
            locations: {
                chat: {
                    label: "Chat",
                    description: "lângă numele de utilizator în chat"
                },
                memberList: {
                    label: "Lista de membri",
                    description: "în lista de membri"
                }
            },
            toast: {
                success: "Ziua de naștere a fost setată cu succes!",
                invalid: "Format invalid! Este acceptat doar formatul ZZ/LL.",
                cleared: "Ziua de naștere a fost ștearsă cu succes!"
            },
            notification: {
                title: "🎂 Zi de naștere astăzi!",
                body: "Astăzi este ziua de naștere a lui {{username}}!"
            },
            modal: {
                title: "Setează ziua de naștere pentru {{username}}",
                description: "Introdu ziua de naștere în format ZZ/LL (ex. 25/12)",
                placeholder: "ex. 25/12",
                current: "Ziua de naștere actuală:",
                set: "Setează ziua",
                cancel: "Anulează",
                birthday: "Este ziua mea! 🎂",
                saved: "Zile de naștere salvate",
                savedDesc: "Nicio zi de naștere salvată încă. Fă click dreapta pe utilizatori pentru a le adăuga ziua de naștere!",
                today: "Astăzi",
                remove: "Elimină",
                loading: "Se încarcă...",
                save: "Salvează",
                edit: "Editează"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Afișează cronometrele în toate apelurile vocale",
            option: {
                format: {
                    label: "Format",
                    description: "Format compact sau ușor de citit",
                    human: "30z 23o 00m 42s"
                },
                allCallTimers: {
                    label: "Toate cronometrele de apel",
                    description: "Afișează cronometrele pentru toți utilizatorii din servere"
                },
                showWithoutHover: {
                    label: "Afișare fără hover",
                    description: "Afișează întotdeauna cronometrul fără a fi nevoie de hover"
                },
                showRoleColor: {
                    label: "Afișare culoare rol",
                    description: "Afișează în culoarea rolului utilizatorului (dacă pluginul ShowRoleColor este activat)"
                },
                trackSelf: {
                    label: "Urmărire proprie",
                    description: "Afișează și propriul tău cronometru"
                },
                showSeconds: {
                    label: "Afișare secunde",
                    description: "Afișează secundele în cronometru"
                },
                watchLargeGuilds: {
                    label: "Monitorizare servere mari",
                    description: "Urmărește utilizatorii în serverele mari. Acest lucru poate cauza lag dacă ești în multe servere mari cu utilizatori activi. Testat cu până la 2000 de utilizatori vocali activi fără probleme."
                },
                fixUI: {
                    label: "Reparare UI",
                    description: "În unele cazuri, cronometrul poate strica interfața. Activează această opțiune pentru a o repara."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Adaugă insigne canalelor în funcție de tipul lor",
            badge: {
                private: "Acest canal este blocat.",
                nsfw: "Acest canal este marcat ca NSFW.",
                rules: "Acest canal este canalul de reguli al serverului."
            },
            option: {
                oneBadgePerChannel: {
                    label: "O singură insignă per canal",
                    description: "Afișează doar o insignă pe canal"
                },
                showTextBadge: {
                    label: "Afișare insignă text",
                    description: "Afișează insigna Text"
                },
                showVoiceBadge: {
                    label: "Afișare insignă voce",
                    description: "Afișează insigna Voce"
                },
                showCategoryBadge: {
                    label: "Afișare insignă categorie",
                    description: "Afișează insigna Categorie"
                },
                showDirectoryBadge: {
                    label: "Afișare insignă director",
                    description: "Afișează insigna Director"
                },
                showAnnouncementThreadBadge: {
                    label: "Afișare insignă fir anunțuri",
                    description: "Afișează insigna Fir Anunțuri"
                },
                showPublicThreadBadge: {
                    label: "Afișare insignă fir public",
                    description: "Afișează insigna Fir Public"
                },
                showPrivateThreadBadge: {
                    label: "Afișare insignă fir privat",
                    description: "Afișează insigna Fir Privat"
                },
                showStageBadge: {
                    label: "Afișare insignă scenă",
                    description: "Afișează insigna Scenă"
                },
                showAnnouncementBadge: {
                    label: "Afișare insignă anunțuri",
                    description: "Afișează insigna Anunțuri"
                },
                showForumBadge: {
                    label: "Afișare insignă forum",
                    description: "Afișează insigna Forum"
                },
                showMediaBadge: {
                    label: "Afișare insignă media",
                    description: "Afișează insigna Media"
                },
                showNSFWBadge: {
                    label: "Afișare insignă NSFW",
                    description: "Afișează insigna NSFW"
                },
                showLockedBadge: {
                    label: "Afișare insignă blocat",
                    description: "Afișează insigna Blocat"
                },
                showRulesBadge: {
                    label: "Afișare insignă reguli",
                    description: "Afișează insigna Reguli"
                },
                showUnknownBadge: {
                    label: "Afișare insignă necunoscută",
                    description: "Afișează insigna Necunoscut"
                },
                textBadgeLabel: {
                    label: "Etichetă insignă text",
                    description: "Eticheta pentru insigna de text",
                    default: "Text"
                },
                voiceBadgeLabel: {
                    label: "Etichetă insignă voce",
                    description: "Eticheta pentru insigna de voce",
                    default: "Voce"
                },
                categoryBadgeLabel: {
                    label: "Etichetă insignă categorie",
                    description: "Eticheta pentru insigna de categorie",
                    default: "Categorie"
                },
                announcementBadgeLabel: {
                    label: "Etichetă insignă fir anunțuri",
                    description: "Eticheta pentru insigna firului de anunțuri",
                    default: "Știri"
                },
                announcementThreadBadgeLabel: {
                    label: "Etichetă insignă fir anunțuri",
                    description: "Eticheta pentru insigna firului de anunțuri",
                    default: "Fir Știri"
                },
                publicThreadBadgeLabel: {
                    label: "Etichetă insignă fir public",
                    description: "Eticheta pentru insigna firului public",
                    default: "Fir"
                },
                privateThreadBadgeLabel: {
                    label: "Etichetă insignă fir privat",
                    description: "Eticheta pentru insigna firului privat",
                    default: "Fir Privat"
                },
                stageBadgeLabel: {
                    label: "Etichetă insignă scenă",
                    description: "Eticheta pentru insigna de scenă",
                    default: "Scenă"
                },
                directoryBadgeLabel: {
                    label: "Etichetă insignă director",
                    description: "Eticheta pentru insigna de director",
                    default: "Director"
                },
                forumBadgeLabel: {
                    label: "Etichetă insignă forum",
                    description: "Eticheta pentru insigna de forum",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Etichetă insignă media",
                    description: "Eticheta pentru insigna media",
                    default: "Media"
                },
                nsfwBadgeLabel: {
                    label: "Etichetă insignă NSFW",
                    description: "Eticheta pentru insigna NSFW",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Etichetă insignă blocat",
                    description: "Eticheta pentru insigna blocat",
                    default: "Blocat"
                },
                rulesBadgeLabel: {
                    label: "Etichetă insignă reguli",
                    description: "Eticheta pentru insigna de reguli",
                    default: "Reguli"
                },
                unknownBadgeLabel: {
                    label: "Etichetă insignă necunoscută",
                    description: "Eticheta pentru insigna necunoscută",
                    default: "Necunoscut"
                },
                textBadgeColor: {
                    label: "Culoare insignă text",
                    description: "Culoarea pentru insigna de text"
                },
                voiceBadgeColor: {
                    label: "Culoare insignă voce",
                    description: "Culoarea pentru insigna de voce"
                },
                categoryBadgeColor: {
                    label: "Culoare insignă categorie",
                    description: "Culoarea pentru insigna de categorie"
                },
                announcementBadgeColor: {
                    label: "Culoare insignă fir anunțuri",
                    description: "Culoarea pentru insigna firului de anunțuri"
                },
                announcementThreadBadgeColor: {
                    label: "Culoare insignă fir anunțuri",
                    description: "Culoarea pentru insigna firului de anunțuri"
                },
                publicThreadBadgeColor: {
                    label: "Culoare insignă fir public",
                    description: "Culoarea pentru insigna firului public"
                },
                privateThreadBadgeColor: {
                    label: "Culoare insignă fir privat",
                    description: "Culoarea pentru insigna firului privat"
                },
                stageBadgeColor: {
                    label: "Culoare insignă scenă",
                    description: "Culoarea pentru insigna de scenă"
                },
                directoryBadgeColor: {
                    label: "Culoare insignă director",
                    description: "Culoarea pentru insigna de director"
                },
                forumBadgeColor: {
                    label: "Culoare insignă forum",
                    description: "Culoarea pentru insigna de forum"
                },
                mediaBadgeColor: {
                    label: "Culoare insignă media",
                    description: "Culoarea pentru insigna media"
                },
                nsfwBadgeColor: {
                    label: "Culoare insignă NSFW",
                    description: "Culoarea pentru insigna NSFW"
                },
                lockedBadgeColor: {
                    label: "Culoare insignă blocat",
                    description: "Culoarea pentru insigna blocat"
                },
                rulesBadgeColor: {
                    label: "Culoare insignă reguli",
                    description: "Culoarea pentru insigna de reguli"
                },
                unknownBadgeColor: {
                    label: "Culoare insignă necunoscută",
                    description: "Culoarea pentru insigna necunoscută"
                }
            },
            badges: {
                text: "Text",
                voice: "Voce",
                category: "Categorie",
                announcement: "Știri",
                announcementThread: "Fir Știri",
                publicThread: "Fir",
                privateThread: "Fir Privat",
                stage: "Scenă",
                directory: "Director",
                forum: "Forum",
                media: "Media",
                nsfw: "NSFW",
                locked: "Blocat",
                rules: "Reguli",
                unknown: "Necunoscut"
            },
            tooltip: {
                locked: "Acest canal este blocat.",
                nsfw: "Acest canal este marcat ca NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Grupează canalele vizitate frecvent în file, ca într-un browser",
            open: "Deschide în filă nouă",
            animation: {
                title: "Control animații",
                description: "Activează sau dezactivează animații specifice pentru filele de canale. Fiecare opțiune poate fi comutată independent.",
                placeholder: "Selectează animațiile pe care dorești să le activezi...",
                tabHover: "Efecte hover filă (ridicare + scalare)",
                tabSelection: "Animație ridicare filă selectată",
                tabDragDrop: "Tragere și plasare filă (fantomă + reordonare)",
                tabEnterExit: "Glisare intrare/ieșire filă (creare + închidere)",
                tabIconPop: "Pop iconiță la selecție (scalare iconiță)",
                closeRotation: "Rotație buton închidere",
                plusPulse: "Pulsare buton plus",
                mentionGlow: "Strălucire insignă mențiune",
                compactExpand: "Expansiune mod compact",
                selectedBorder: "Bordură albastră filă selectată",
                selectedBackground: "Culoare fundal filă selectată",
                tabShadows: "Efecte umbră filă",
                tabRepositioning: "Repoziționare filă (schimbări de poziție line)",
                resizeHandle: "Estompare mâner redimensionare",
                questActivate: "Gradient misiune activă"
            },
            bookmark: {
                label: "Semn de carte",
                unknown: "Utilizator necunoscut",
                folder: "Dosar",
                add: "Adaugă la semne de carte",
                edit: "Editează semnul de carte",
                delete: "Șterge semnul de carte",
                remove: "Elimină din semnele de carte",
                removeFolder: "Elimină semnul de carte din dosar",
                loading: "Se încarcă semnele de carte...",
                noBookmarks: "Nu ai semne de carte. Poți adăuga o filă deschisă sau poți ascunde asta dând click dreapta",
                quests: "Misiuni",
                messageRequests: "Cereri de mesaje",
                friends: "Prieteni",
                shop: "Magazin",
                library: "Bibliotecă",
                discovery: "Descoperă",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Activitate",
                specialPage: "Pagină specială",
                searchPlaceholder: "Caută semne de carte"
            },
            button: {
                save: "Salvează",
                delete: "Șterge",
                cancel: "Anulează",
                reset: "Resetează",
                close: "Închide"
            },
            context: {
                label: "Meniu contextual ChannelTabs",
                bookmark: "Meniu contextual semne de carte ChannelTabs",
                tab: "Meniu contextual file ChannelTabs",
                folderMenu: "Meniu dosar semne de carte",
                compact: "Compact",
                bookmarkBar: "Bară semne de carte",
                openAll: "Deschide toate din semne de carte",
                openNew: "Deschide în filă nouă",
                close: {
                    tab: "Închide fila",
                    otherTabs: "Închide celelalte file",
                    tabsToRight: "Închide filele din dreapta",
                    tabsToLeft: "Închide filele din stânga",
                    reopen: "Redeschide fila închisă",
                    allTabs: "Închide toate filele"
                }
            },
            error: {
                noLogin: "Nu există niciun cont conectat?"
            },
            modal: {
                add: {
                    title: "Adaugă semn de carte în dosar",
                    select: "Selectează un dosar",
                    create: "Creează unul"
                },
                edit: {
                    title: "Editează semn de carte",
                    name: "Nume semn de carte",
                    folder: "Culoare dosar"
                },
                delete: {
                    title: "Ești sigur?",
                    description: "Ștergerea unui dosar de semne de carte va șterge și toate semnele de carte din interiorul acestuia."
                },
                folderIcon: {
                    title: "Alege Pictogramă Dosar",
                    preview: "Previzualizare",
                    iconColor: "Culoare Pictogramă",
                    search: "Caută",
                    searchPlaceholder: "Caută {{count}} pictograme...",
                    folderName: "Nume Dosar",
                    folderColor: "Culoare Dosar",
                    folderIcon: "Pictogramă Dosar",
                    chooseIcon: "Alege Pictogramă",
                    useDefaultIcon: "Folosește Pictogramă Implicită"
                }
            },
            option: {
                onStartup: {
                    label: "La pornire",
                    description: "Ce să facă cu filele la pornire",
                    nothing: "Nu face nimic (deschide fila prieteni)",
                    remember: "Ține minte filele din ultima sesiune",
                    open: "Deschide un set specific de file"
                },
                tabSet: {
                    label: "Set de file"
                },
                noPomeloNames: {
                    label: "Fără nume Pomelo",
                    description: "Folosește numele afișate în loc de numele de utilizator pentru mesaje directe"
                },
                showStatusIndicators: {
                    label: "Afișare indicatori stare",
                    description: "Afișează indicatorii de stare pentru mesajele directe"
                },
                showBookmarkBar: {
                    label: "Afișare bară semne de carte"
                },
                persistUnreadCountFallback: {
                    label: "Persistă fallback pentru numărul necitit",
                    description: "Păstrează fallback-urile badge-urilor necitite între reîncărcări dla file și marcaje"
                },
                bookmarkNotificationDot: {
                    label: "Punct notificare semne de carte",
                    description: "Afișează punctul de notificare pentru semne de carte"
                },
                widerTabsAndBookmarks: {
                    label: "File și semne de carte mai late",
                    description: "Extinde lungimea filelor și semnelor de carte pentru monitoare mai mari"
                },
                tabWidthScale: {
                    label: "Scara lățimii filei",
                    description: "Scara lățimii filei (procentaj) - reglabilă prin tragerea marginilor filei"
                },
                renderAllTabs: {
                    label: "Randare toate filele",
                    description: "Păstrează toate filele în memorie pentru o comutare mai rapidă (salvează poziția de derulare și starea)"
                },
                switchToExistingTab: {
                    label: "Comutare la fila existentă",
                    description: "Comută la filă dacă aceasta există deja pentru canalul pe care navighezi"
                },
                createNewTabIfNotExists: {
                    label: "Creare filă nouă dacă nu există",
                    description: "Creează o filă nouă dacă nu există una pentru canalul pe care navighezi"
                },
                enableRapidNavigation: {
                    label: "Activare navigare rapidă",
                    description: "Activează comportamentul de navigare rapidă - navigarea rapidă între canale va înlocui fila curentă în loc să creeze altele noi"
                },
                rapidNavigationThreshold: {
                    label: "Prag navigare rapidă",
                    description: "Fereastra de timp (în milisecunde) pentru navigarea rapidă. În acest interval, noile canale înlocuiesc fila curentă."
                },
                tabBarPosition: {
                    label: "Poziție bară file",
                    description: "Poziția barei de file",
                    top: "Sus",
                    bottom: "Jos"
                },
                enableNumberKeySwitching: {
                    label: "Activare comutare cu taste numerice",
                    description: "Activează tastele numerice (1-9) pentru a comuta între file"
                },
                numberKeySwitchCount: {
                    label: "Număr file accesibile prin cifre",
                    description: "Numărul de file accesibile prin tastele numerice (1-9)"
                },
                enableCloseTabShortcut: {
                    label: "Activare comandă rapidă închidere filă",
                    description: "Activează scurtătura de tastatură pentru închiderea filei"
                },
                enableNewTabShortcut: {
                    label: "Activare comandă rapidă filă nouă",
                    description: "Activează scurtătura de tastatură pentru filă nouă"
                },
                enableTabCycleShortcut: {
                    label: "Activare comandă rapidă ciclu file",
                    description: "Activează scurtătura de tastatură pentru parcurgerea filelor"
                },
                keybindsSection: {
                    label: "Comenzi tastatură",
                    description: "Apasă un buton și apasă combinația de taste dorită. Sunt acceptate tastele de modificare precum CTRL, SHIFT și ALT.",
                    title: "Scurtături tastatură",
                    reset: "Resetează tot la valorile implicite",
                    shortcutDisabled: "Această scurtătură este momentan dezactivată",
                    pressKey: "Apasă orice tastă...",
                    conflictError: "Această scurtătură este deja folosită de: {{key}}",
                    closeTab: {
                        label: "Închide fila",
                        description: "Închide fila activă curent prin tastatură"
                    },
                    newTab: {
                        label: "Filă nouă",
                        description: "Deschide o filă nouă cu canalul curent"
                    },
                    cycleTabsForward: {
                        label: "Ciclează filele înainte",
                        description: "Comută la următoarea filă"
                    },
                    cycleTabsBackward: {
                        label: "Ciclează filele înapoi",
                        description: "Comută la fila anterioară"
                    }
                },
                closeTabKeybind: {
                    label: "Scurtătură închidere filă",
                    description: "Scurtătura de tastatură pentru a închide fila curentă"
                },
                newTabKeybind: {
                    label: "Scurtătură filă nouă",
                    description: "Scurtătura de tastatură pentru a deschide o filă nouă"
                },
                cycleTabForwardKeybind: {
                    label: "Scurtătură ciclu înainte",
                    description: "Scurtătura de tastatură pentru a trece la următoarea filă"
                },
                cycleTabBackwardKeybind: {
                    label: "Scurtătură ciclu înapoi",
                    description: "Scurtătura de tastatură pentru a trece la fila anterioară"
                },
                showTabNumbers: {
                    label: "Afișare numere file",
                    description: "Afișează insigne numerotate pe file pentru a indica scurtăturile de tastatură"
                },
                tabNumberPosition: {
                    label: "Poziție număr filă",
                    description: "Unde să fie afișată insigna numerotată pe file",
                    left: "Partea stângă (înainte de iconiță)",
                    right: "Partea dreaptă (după conținut)"
                },
                animations: {
                    label: "Animații"
                },
                animationHover: {
                    label: "Animație la hover",
                    description: "Activează efectele de ridicare și scalare la hover"
                },
                animationSelection: {
                    label: "Animație la selecție",
                    description: "Activează animațiile de selecție (strălucire bordură, ridicare)"
                },
                animationDragDrop: {
                    label: "Animație la tragere și plasare",
                    description: "Activează efectele fantomă la tragere și plasare"
                },
                animationEnterExit: {
                    label: "Animație la intrare/ieșire",
                    description: "Activează animațiile de glisare la crearea/închiderea filei"
                },
                animationIconPop: {
                    label: "Animație la pop iconiță",
                    description: "Activează animația de scalare a iconiței la selecție"
                },
                animationCloseRotation: {
                    label: "Animație la rotație închidere",
                    description: "Activează animația de rotație pentru butoanele de închidere"
                },
                animationPlusPulse: {
                    label: "Animație pulsare buton plus",
                    description: "Activează animația de pulsare pentru butonul plus"
                },
                animationMentionGlow: {
                    label: "Animație strălucire mențiune",
                    description: "Activează strălucirea roșie pulsantă pentru mențiuni"
                },
                animationCompactExpand: {
                    label: "Animație la compactare/expandare",
                    description: "Activează expansiunea lină pentru filele compacte"
                },
                animationSelectedBorder: {
                    label: "Animație bordură selectată",
                    description: "Activează stilul de bordură și strălucire pentru filele selectate"
                },
                animationSelectedBackground: {
                    label: "Animație fundal selectat",
                    description: "Activează schimbarea culorii de fundal pentru filele selectate"
                },
                animationTabShadows: {
                    label: "Animație umbre file",
                    description: "Activează efectele de umbră pe file"
                },
                animationTabPositioning: {
                    label: "Animație poziționare file",
                    description: "Activează tranzițiile line când filele își schimbă poziția"
                },
                animationResizeHandle: {
                    label: "Animație mâner redimensionare",
                    description: "Activează animația de estompare pentru mânerul de redimensionare"
                },
                animationQuestsActive: {
                    label: "Animație misiuni active",
                    description: "Activează animațiile de gradient pe fila Misiuni când misiunile rulează activ"
                },
                compactAutoExpandSelected: {
                    label: "Auto-expandare compactă la selecție",
                    description: "Expandează automat filele compacte când sunt selectate pentru a arăta numele complet al canalului"
                },
                compactAutoExpandOnHover: {
                    label: "Auto-expandare compactă la hover",
                    description: "Expandează automat filele compacte la hover pentru a arăta numele complet al canalului"
                },
                openInNewTabAutoSwitch: {
                    label: "Auto-comutare la deschidere în filă nouă",
                    description: "Comută automat la filele noi deschise prin meniul contextual 'Deschide în filă nouă'"
                },
                bookmarksIndependentFromTabs: {
                    label: "Semne de carte independente de file",
                    description: "Semnele de carte navighează independent fără a afecta bara de file active"
                },
                showResizeHandle: {
                    label: "Afișare mâner redimensionare",
                    description: "Afișează mânerul de redimensionare la hover peste file pentru a regla lățimea filei"
                },
                openNewTabsInCompactMode: {
                    label: "Deschide filele noi în mod compact",
                    description: "Deschide toate filele nou create în mod compact implicit"
                },
                newTabButtonBehavior: {
                    label: "Comportament buton filă nouă",
                    description: "Butonul de filă nouă (+) urmărește filele în loc să rămână fixat în dreapta"
                },
                oneTabPerServer: {
                    label: "O singură filă per server",
                    description: "Limitează la o singură filă per server, astfel încât deschiderea unui nou canal în acel server va folosi fila existentă."
                },
                maxOpenTabs: {
                    label: "Număr maxim file deschise",
                    description: "Numărul maxim de file deschise (0 = nelimitat)"
                }
            },
            tabs: {
                startup: "File la pornire",
                currently: "Setează la filele deschise curent"
            },
            toast: {
                notRestoring: "Nu se restaurează filele deoarece KeepCurrentChannel este activat",
                failed: {
                    restore: "Restaurarea filelor a eșuat",
                    saved: "Încărcarea filelor salvate a eșuat"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Afișează un contor de caractere în caseta de mesaje",
            option: {
                colorEffects: {
                    label: "Efecte de culoare",
                    description: "Activează sau dezactivează efectele de culoare când te apropii de limita de caractere"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Ascunde toate canalele din categoriile restrânse, chiar dacă au mesaje necitite."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Elimină toate emoji-urile și decorațiunile din numele canalelor"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Elimină automat elementele de urmărire din URL-urile pe care le trimiteți"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Fă click pe roluri în profilurile utilizatorilor și în lista de membri pentru a vedea ce membri le au.",
            modal: {
                loading: "Se încarcă membrii...",
                noMembers: "Niciun membru găsit.",
                unknown: "Rol necunoscut"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Vă permite să ascundeți local aproape orice conținut de la orice utilizator",
            replying: "Răspunde la un mesaj blocat",
            option: {
                hideVc: {
                    label: "Ascunde canalele vocale",
                    description: "Ascunde canalele vocale care conțin utilizatori blocați."
                },
                usersToBlock: {
                    label: "Utilizatori de blocat",
                    description: "ID-uri de utilizatori separate prin virgulă și spațiu"
                },
                hideBlockedUsers: {
                    label: "Ascunde utilizatorii blocați",
                    description: "Dacă utilizatorii blocați ar trebui ascunși peste tot"
                },
                hideBlockedMessages: {
                    label: "Ascunde mesajele blocate",
                    description: "Dacă mesajele de la utilizatorii blocați ar trebui ascunse complet"
                },
                hideEmptyRoles: {
                    label: "Ascunde rolurile goale",
                    description: "Dacă antetele de rol ar trebui ascunse dacă toți membrii lor sunt blocați"
                },
                blockedReplyDisplay: {
                    label: "Afișare răspuns blocat",
                    description: "Ce ar trebui să apară în locul mesajului când cineva răspunde unei persoane pe care ai ascuns-o",
                    displayText: "Afișează un text care spune că s-a răspuns la un mesaj ascuns",
                    hideReply: "Absolut nimic"
                },
                guildBlackList: {
                    label: "Listă neagră servere",
                    description: "ID-uri de servere unde funcționalitatea este dezactivată"
                },
                guildWhiteList: {
                    label: "Listă albă servere",
                    description: "ID-uri de servere unde funcționalitatea este activată"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Recrearea vechiului experiment de temă client. Adaugă o culoare temei tale Discord",
            title: "Culoare temă",
            add: "Adaugă o culoare temei tale Discord",
            option: {
                color: {
                    label: "Culoare"
                },
                resetColor: {
                    label: "Resetează culoarea"
                }
            },
            error: {
                modal: {
                    title: "Tema ta nu va arăta bine!",
                    contrast: "Culoarea selectată nu va avea un contrast bun cu textul",
                    nitro: "Temele Nitro nu sunt suportate",
                    switch: "Comută la modul {{oppositeTheme}}",
                    disable: "Dezactivează tema Nitro",
                    reset: "Resetează culoarea temei"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Adaugă mai multe opțiuni de FPS și durată pentru clipuri, plus etichetare RPC!",
            minutes: "Minute",
            option: {
                richPresenceTagging: {
                    label: "Etichetare Rich Presence",
                    description: "Când ar trebui etichetate clipurile cu Rich Presence-ul curent?",
                    always: "Întotdeauna",
                    only: "Doar când începutul sau sfârșitul numelui activității se potrivește",
                    never: "Niciodată"
                },
                enableScreenshotKeybind: {
                    label: "Activare scurtătură captură ecran",
                    description: "Activează funcția de captură de ecran prin tastatură"
                },
                enableVoiceOnlyClips: {
                    label: "Activare clipuri doar audio",
                    description: "Activează clipurile doar vocale (audio fără video)"
                },
                enableAdvancedSignals: {
                    label: "Activare semnale avansate",
                    description: "Activează semnalele avansate de clip (declanșatoare auto-clip)"
                },
                ignorePlatformRestriction: {
                    label: "Ignoră restricția platformei",
                    description: "Permite înregistrarea pe platforme restricționate (poate cauza erori de salvare)"
                },
                clipsLink: {
                    label: "Link Clipuri",
                    link: "Schimbă opțiunile de FPS și durată în setările Clipuri!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Elimină pictogramele adaptate pentru daltoniști de la statusuri, exact ca pe Discord-ul din 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Vă permite să navigați prin interfață folosind tastatura.",
            action: {
                command: {
                    label: "Rulează comanda",
                    description: "Creează un alias pentru o altă comandă din paletă după ID."
                },
                settings: {
                    label: "Deschide pagina de setări",
                    description: "Sari direct la o pagină de setări Discord."
                },
                url: {
                    label: "Deschide URL",
                    description: "Deschide un link. Folosește linkuri https:// pentru cea mai bună compatibilitate."
                },
                macro: {
                    label: "Rulează macrocomandă",
                    description: "Rulează o secvență de comenzi în ordine."
                }
            },
            category: {
                auto: "Auto (poziționare implicită)",
                default: {
                    label: "Acțiuni rapide",
                    description: "Scurtături comune Plexcord"
                },
                plugins: {
                    label: "Pluginuri",
                    description: "Activează, dezactivează și configurează pluginurile Plexcord",
                    enable: {
                        label: "Activează pluginuri"
                    },
                    disable: {
                        label: "Dezactivează pluginuri"
                    },
                    settings: {
                        label: "Setări plugin"
                    },
                    toolbox: {
                        label: "Acțiuni plugin"
                    },
                    chatbar: {
                        label: "Butoane bară chat"
                    },
                    changes: {
                        label: "Schimbări plugin"
                    }
                },
                context: {
                    label: "Context curent",
                    description: "Acțiuni pentru canalul și serverul selectat"
                },
                updates: {
                    label: "Actualizări",
                    description: "Rămâi la curent cu Plexcord"
                },
                discordSettings: {
                    label: "Setări Discord",
                    description: "Sari la paginile de configurare Discord"
                },
                custom: {
                    label: "Comenzi personalizate",
                    description: "Intrări în paleta de comenzi definite de utilizator"
                },
                sessions: {
                    label: "Instrumente sesiune",
                    description: "Utilități pentru gestionarea sesiunii tale Discord"
                },
                guilds: {
                    label: "Servere",
                    description: "Navighează rapid către serverele tale"
                },
                friends: {
                    label: "Prieteni",
                    description: "Navighează rapid către prietenii tăi"
                },
                action: {
                    label: "Acțiune"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Deschide setările Plexcord",
                        plugin: "Deschide setările pluginului"
                    }
                },
                reload: {
                    label: "Reîncarcă Discord",
                    description: "Reîncarcă fereastra curentă de Discord"
                }
            },
            command: {
                enable: "Activează {{pluginName}}",
                enabled: "Activat {{pluginName}}",
                disable: "Dezactivează {{pluginName}}",
                disabled: "Dezactivat {{pluginName}}",
                failed: "Comanda a eșuat:",
                toggleFailed: "Eșec la comutarea {{pluginName}}.",
                pluginSettings: "Setări {{pluginName}}",
                untitled: "Comandă fără titlu",
                new: "Comandă nouă",
                error: {
                    enter: "Introdu un ID de comandă sau alege unul de mai jos.",
                    noCommand: "Nicio comandă nu se potrivește cu acest ID."
                },
                discord: {
                    account: "Deschide contul meu",
                    privacy: "Deschide Confidențialitate și date",
                    notifications: "Deschide Notificări",
                    voice: "Deschide Voce și Video",
                    text: "Deschide Text și Imagini",
                    appearance: "Deschide Aspect",
                    accessibility: "Deschide Accesibilitate",
                    keybinds: "Deschide Taste rapide",
                    advanced: "Deschide Avansat",
                },
                updates: {
                    check: {
                        label: "Caută actualizări",
                        description: "Caută actualizări Plexcord",
                        one: "O actualizare disponibilă",
                        multiple: "{{count}} actualizări disponibile",
                        none: "Nicio actualizare disponibilă",
                        failed: "Eșec la căutarea actualizărilor."
                    },
                    changelog: {
                        label: "Vezi jurnalul de modificări",
                        description: "Deschide jurnalul de modificări Plexcord"
                    }
                },
                read: {
                    mark: {
                        label: "Marchează {{channelLabel}} ca citit"
                    }
                },
                pin: {
                    open: {
                        label: "Deschide mesajele fixate pentru {{channelLabel}}"
                    },
                    toggle: {
                        label: "Comută fixarea pe ultima comandă"
                    }
                },
                channel: {
                    mute: {
                        label: "Pune pe mut {{channelLabel}}",
                        oneHour: "Pune pe mut {{channelLabel}} pentru 1 oră",
                        untilTomorrow: "Pune pe mut {{channelLabel}} până mâine",
                    },
                    unmute: {
                        label: "Scoate de pe mut {{channelLabel}}",
                    },
                    reopen: {
                        label: "Redeschide ultimul DM închis"
                    },
                    dm: {
                        open: {
                            label: "Deschide DM cu {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Deschide setările pentru {{guildLabel}}"
                    },
                    navigate: {
                        label: "Navighează la {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Setează Nu deranja pentru 30 de minute",
                    oneHourDnd: "Setează Nu deranja pentru 1 oră",
                    cancelStatusReset: "Anulează cronometrul de stare"
                },
                status: {
                    set: {
                        online: "Setează stare: Online",
                        idle: "Setează stare: Inactiv",
                        dnd: "Setează stare: Nu deranja",
                        invisible: "Setează stare: Invizibil"
                    }
                },
                toggle: {
                    streamer: "Comută modul Streamer",
                    mute: "Comută Mut propriu",
                    deafen: "Comută Surzire proprie",
                },
                notification: {
                    clear: {
                        label: "Șterge notificările de pe desktop"
                    }
                },
                palette: {
                    settings: {
                        label: "Deschide setările Command Palette",
                        description: "Configurează pluginul Command Palette"
                    }
                },
                recent: {
                    label: "Arată comenzile recente",
                    description: "Afișează ultimele comenzi executate",
                    rerun: "Rulează din nou ultima comandă"
                },
                plugin: {
                    reload: {
                        label: "Reîncarcă toate pluginurile",
                        description: "Încearcă să reîncarce la cald fiecare plugin activat"
                    },
                    enable: {
                        label: "Activează toate pluginurile"
                    },
                    disable: {
                        label: "Dezactivează toate pluginurile neesențiale"
                    },
                    restart: {
                        label: "Repornește Plexcord",
                        description: "Reîncarcă fereastra clientului Discord"
                    }
                },
                quickCSS: {
                    label: "Comută Quick CSS"
                },
                transparentity: {
                    label: "Comută transparența ferestrei"
                },
                theme: {
                    open: {
                        label: "Deschide setările temei clientului"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Caută comenzi",
                noCommand: "Nicio comandă găsită",
                add: {
                    title: "Adaugă comandă"
                },
                choose: {
                    title: "Alege comanda"
                },
                command: {
                    palette: {
                        label: "Command Palette",
                        placeholder: "Scrie o comandă",
                        filtering: "Filtrare după {{tags}}",
                        noCommand: "Nicio comandă găsită",
                        pin: "Fixează comanda",
                        unpin: "Anulează fixarea comenzii"
                    },
                    target: {
                        label: "ID comandă țintă",
                        placeholder: "Introdu ID-ul comenzii",
                        choose: "Alege comanda"
                    },
                    custom: {
                        label: "Comenzi personalizate",
                        description: "1) Numește comanda · 2) Adaugă descriere/cuvinte cheie/etichete/categorie opționale · 3) Alege o acțiune și completează detaliile.",
                        auto: "Auto (implicit)",
                        expand: "Extinde",
                        collapse: "Restrânge",
                        collapsed: {
                            label: "Etichetă",
                            description: "Nume afișat",
                            advanced: {
                                hide: "Ascunde opțiunile avansate",
                                show: "Arată opțiunile avansate"
                            },
                            subtitle: {
                                label: "Descriere",
                                placeholder: "Subtitlu opțional"
                            },
                            keywords: {
                                label: "Cuvinte cheie",
                                placeholder: "Cuvinte cheie separate prin virgulă"
                            },
                            tags: {
                                label: "Etichete",
                                placeholder: "Etichete separate prin virgulă"
                            },
                            suggestion: {
                                label: "Sugestie"
                            },
                            chooseCommand: {
                                label: "Alege unde apare această comandă în paletă."
                            },
                            danger: {
                                label: "Afișează ca periculoasă"
                            }
                        },
                        remove: "Elimină comanda",
                        add: "Adaugă comanda"
                    }
                },
                settings: {
                    noSelected: "Nicio pagină selectată",
                    current: "Pagina curentă",
                    choose: "Alege pagina..."
                },
                url: {
                    url: "URL",
                    error: "Folosește linkuri http:// sau https://.",
                    valid: "Introdu un URL valid.",
                    open: {
                        external: "Deschide extern",
                    }
                },
                macro: {
                    sequence: {
                        label: "Secvență comenzi",
                        placeholder: "comanda-a, comanda-b"
                    },
                    addStep: "Adaugă pas",
                    unknownId: "ID-uri de comandă necunoscute"
                }
            },
            status: {
                online: "Online",
                idle: "Inactiv",
                dnd: "Nu deranja",
                invisible: "Invizibil"
            },
            tag: {
                core: "Nucleu",
                navigation: "Navigare",
                utility: "Utilitate",
                developer: "Dezvoltator",
                customization: "Personalizare",
                plugins: "Pluginuri",
                session: "Sesiune",
                context: "Context",
                custom: "Personalizat",
                guilds: "Servere",
                friends: "Prieteni",
                other: "Altele"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Nu s-a putut găsi butonul de chat '{{label}}'.",
                        failedToTrigger: "Eșec la declanșarea {{label}}.",
                        activated: "{{label}} activat."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Controalele de mut pentru canal sunt indisponibile",
                        muted: "Canal pus pe mut.",
                        unmuted: "Canal scos de pe mut.",
                        failed: "Eșec la actualizarea stării de mut a canalului."
                    },
                    dm: {
                        no: "Nicio închidere de DM înregistrată în această sesiune.",
                        reOpened: "S-a redeschis ultimul DM închis.",
                        noAvailable: "DM-ul nu mai este disponibil."
                    }
                },
                command: {
                    loop: "Buclă de comandă detectată în execuția macro.",
                    notFound: "Comanda {{commandId}} nu a fost găsită.",
                    unsupported: "Acțiune de comandă personalizată nesuportată.",
                    failedToRun: "Eșec la rularea {{label}}.",
                    notMetadata: "Metadatele pluginului Command Palette sunt indisponibile."
                },
                guild: {
                    mute: {
                        unavailable: "Controalele de mut pentru server sunt indisponibile",
                        muted: "Server pus pe mut.",
                        unmuted: "Server scos de pe mut.",
                        failed: "Eșec la actualizarea stării de mut a serverului."
                    },
                    settings: {
                        unable: "Nu s-au putut deschide setările serverului.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Nu s-a putut deschide panoul de mesaje fixate.",
                    }
                },
                status: {
                    reset: {
                        canceled: "S-a anulat resetarea programată a stării.",
                        unableToChange: "Starea nu poate fi schimbată acum.",
                        reverted: "Starea a revenit la {{status}}.",
                        dnd: "Nu deranja pentru {{duration}} minute."
                    },
                    change: {
                        unableToChange: "Starea nu poate fi schimbată acum.",
                        changed: "Starea a fost schimbată în {{status}}."
                    }
                },
                read: {
                    marked: "S-a marcat {{channelLabel}} ca citit.",
                    failed: "Eșec la marcarea canalului ca citit."
                },
                route: {
                    unable: "Nu s-a putut deschide {{destination}}.",
                },
                notification: {
                    cleared: "Toate notificările au fost șterse.",
                    failed: "Ștergerea notificărilor a eșuat.",
                    notSupported: "Ștergerea notificărilor nu este suportată."
                },
                streamerMode: {
                    enabled: "Modul Streamer activat.",
                    disabled: "Modul Streamer dezactivat.",
                },
                voice: {
                    micToggle: {
                        muted: "Microfon oprit.",
                        unmuted: "Microfon pornit."
                    },
                    deafenToggle: {
                        deafened: "Acum ești surzit.",
                        undeafened: "Nu mai ești surzit."
                    }
                },
                quickCSS: {
                    enabled: "Quick CSS activat.",
                    disabled: "Quick CSS dezactivat."
                },
                transparentity: {
                    enabled: "Transparența ferestrei activată.",
                    disabled: "Transparența ferestrei dezactivată."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} este dezactivat.",
                        disable: "{{pluginName}} este dezactivat. Activează pluginul pentru a folosi această acțiune."
                    },
                    required: {
                        label: "{{pluginName}} necesită o repornire pentru a fi reîncărcat."
                    },
                    stop: {
                        failed: "Oprirea {{pluginName}} a eșuat."
                    },
                    restart: {
                        failed: "Repornirea {{pluginName}} a eșuat."
                    },
                    reload: {
                        label: "S-a reîncărcat {{pluginName}}.",
                        noPlugin: "Niciun plugin nu a fost reîncărcat.",
                        reloaded: "S-au reîncărcat {{count}} pluginuri."
                    },
                    toggle: {
                        enabled: "S-au activat {{changed}} pluginuri.",
                        disabled: "S-au dezactivat {{changed}} pluginuri.",
                        noChanged: "Niciun plugin nu și-a schimbat starea."
                    },
                    run: {
                        failed: {
                            label: "Eșec la rularea {{pluginName}}: {{actionLabel}}."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "Canal curent",
                    group: "Grup DM",
                    direct: "Mesaj direct"
                },
                guild: {
                    current: "Server curent",
                }
            },
            option: {
                hotkey: {
                    label: "Tastă rapidă",
                    description: "Tasta folosită pentru a deschide paleta de comenzi",
                    recording: "Apasă orice tastă...",
                    reset: "Resetează"
                },
                visualStyle: {
                    label: "Stil vizual",
                    description: "Aspectul paletei",
                    classic: "Clasic",
                    polished: "Lustruit"
                },
                showTags: {
                    label: "Arată etichete",
                    description: "Afișează cipuri cu etichete pentru comenzi"
                },
                enableTagFilter: {
                    label: "Activare filtru etichete",
                    description: "Arată bara de filtrare după etichete"
                },
                customCommands: {
                    label: "Comenzi personalizate",
                    description: "Gestionează intrările personalizate din paleta de comenzi"
                }
            },
            template: {
                alias: {
                    label: "Comandă Alias",
                    description: "Oglindește o comandă existentă"
                },
                settings: {
                    label: "Setări",
                    description: "Deschide setările Discord"
                },
                url: {
                    label: "Link",
                    description: "Deschide un URL extern"
                },
                macro: {
                    label: "Macro",
                    description: "Rulează o secvență de comenzi"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Dezactivează mesajele/erorile enervante din consolă",
            option: {
                disableLoggers: {
                    label: "Dezactivează Loggers",
                    description: "Dezactivează jurnalele Discord"
                },
                disableSpotifyLogger: {
                    label: "Dezactivează Spotify Logger",
                    description: "Dezactivează jurnalul Spotify, care poate divulga informații despre cont și token-ul de acces"
                },
                whitelistedLoggers: {
                    label: "Loggers în lista albă",
                    description: "Listă de jurnale separate prin punct și virgulă (;) care sunt permise"
                },
                allowLevel: {
                    label: "Nivel permis",
                    description: "Permite întotdeauna jurnalele de acest tip",
                    filter: "Listă filtru"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Adaugă alias-uri scurte pentru multe elemente în fereastră. Rulează `shortcutList` pentru o listă."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Vă permite să specificați anumite cuvinte declanșatoare care vor fi estompate implicit. Click pe conținutul estompat îl va dezvălui.",
            option: {
                flagged: {
                    label: "Marcat",
                    flagged: "Cuvinte marcate",
                    placeholder: "Cuvânt"
                },
                onClick: {
                    label: "La click",
                    description: "Arată conținutul declanșator doar la click, nu la hover"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Vă permite să copiați emoji-urile ca șir formatat (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Copiază Unicode",
                    description: "Copiază caracterul unicode brut în loc de :nume: pentru emoji-urile implicite (👽)"
                }
            },
            context: {
                copy: "Copiază Emoji Markdown"
            },
            toast: {
                success: "Succes! S-a copiat emoji-ul formatat."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Adaugă un buton fișierelor text atașate pentru a le copia conținutul",
            copied: "Copiat!",
            large: "Fișier prea mare pentru a fi copiat.",
            copyFileContents: "Copiază conținutul fișierului"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Un plugin pentru a copia culorile gradientului de profil în clipboard.",
            copy: "Copiază culorile profilului",
            toast: {
                noColor: "Nu s-au găsit culori de profil!",
                copied: "Culorile profilului au fost copiate în clipboard!",
                error: "Eroare la copierea culorilor profilului!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Copiază URL-ul de stare al utilizatorului când dai click dreapta pe el",
            toast: {
                copied: "URL copiat",
                error: "Eroare la copierea URL-ului, verifică consola pentru detalii"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Adaugă posibilitatea de a copia și deschide linkurile abțibildurilor",
            context: {
                copy: "Copiază linkul",
                open: "Deschide linkul"
            },
            toast: {
                success: "Link copiat!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Adaugă un buton pentru a copia mențiunea utilizatorului în meniul contextual, funcționează cel mai bine cu ValidUser.",
            context: {
                copy: "Copiază mențiunea utilizatorului"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Adaugă o opțiune 'Copiază URL utilizator' în meniul contextual.",
            context: {
                copy: "Copiază URL utilizator"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Plugin de utilitate pentru gestionarea și posibila recuperare după blocări (crash) fără repornire",
            option: {
                attemptToPreventCrashes: {
                    label: "Încearcă să previi blocările",
                    description: "Dacă să se încerce prevenirea blocărilor Discord."
                },
                attemptToNavigateToHome: {
                    label: "Încearcă navigarea la Acasă",
                    description: "Dacă să se încerce navigarea la fila 'Acasă' după recuperarea dintr-o blocare."
                }
            },
            toast: {
                crashed: {
                    title: "Discord s-a blocat!",
                    body: "Of :( Discord s-a blocat de două ori rapid, nu se mai încearcă recuperarea.",
                    update: "O nu, Discord tocmai s-a blocat... dar vestea bună este că există o actualizare Plexcord disponibilă care ar putea rezolva problema! Dorești să actualizezi acum?",
                    recover: "Se încearcă recuperarea...",
                    invalid: "Link de invitație invalid sau expirat."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Folosește Ctrl+Enter pentru a trimite mesaje (personalizabil)",
            option: {
                submitRule: {
                    label: "Regulă trimitere",
                    description: "Modul de trimitere a unui mesaj",
                    ctrlEnter: "Ctrl+Enter (Enter sau Shift+Enter pentru rând nou) (cmd+enter pe macOS)",
                    shiftEnter: "Shift+Enter (Enter pentru rând nou)",
                    enter: "Enter (Shift+Enter pentru rând nou; implicit Discord)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Trimite mesaj în mijlocul unui bloc de cod",
                    description: "Dacă să se trimită mesajul când cursorul este în mijlocul unui bloc de cod"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Adaugă un personaj animat care îți urmărește cursorul.",
            modal: {
                furColor: "Culoare blană",
                outlineColor: "Culoare contur"
            },
            option: {
                buddy: {
                    label: "Companion",
                    description: "Alege un companion pentru cursor",
                    oneko: "Oneko",
                    fathorse: "Cal Grăsuț"
                },
                speed: {
                    label: "Viteză",
                    description: "Viteza companionului tău",
                    invalid: "Viteza trebuie să fie mai mare de 0"
                },
                fps: {
                    label: "Framerate",
                    description: "FPS-ul companionului tău",
                    invalid: "Framerate-ul trebuie să fie mai mare de 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Culoare blană",
                    description: "Culoarea hex a blănii pentru Oneko"
                },
                outlineColor: {
                    label: "Culoare contur",
                    description: "Culoarea hex a conturului pentru Oneko"
                },
                fathorseSection: {
                    label: "Cal Grăsuț"
                },
                size: {
                    label: "Dimensiune",
                    description: "Dimensiunea calului grăsuț",
                    invalid: "Dimensiunea trebuie să fie mai mare de 0"
                },
                fade: {
                    label: "Estompare",
                    description: "Dacă personajul ar trebui să se estompeze când cursorul este aproape"
                },
                freeroam: {
                    label: "Hoinăreala liberă",
                    description: "Dacă personajul ar trebui să se plimbe liber când este inactiv"
                },
                shake: {
                    label: "Tremur",
                    description: "Dacă personajul ar trebui să scuture fereastra când merge"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Personalizează iconițele dosarelor cu orice imagine PNG",
            option: {
                solidIcon: {
                    label: "Iconiță solidă",
                    description: "Folosește un fundal solid în spatele imaginii"
                },
                folderIcons: {
                    label: "Iconițe dosar",
                    description: "Setări pentru iconițele dosarelor"
                }
            },
            modal: {
                change: "Schimbă dimensiunea iconiței dosarului",
                save: "Salvează",
                unset: "Resetează",
                set: "Setează o iconiță nouă",
                hover: "S-ar putea să fie nevoie să treci cu mouse-ul peste dosar după setare pentru a se actualiza."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Vă permite să setați timpul înainte ca Discord să devină inactiv (sau să dezactivați starea inactivă automată)",
            backOnline: "Bine ai revenit! Click pe buton pentru a trece online. Click pe X pentru a rămâne inactiv până la reîncărcare.",
            exit: "Ieși din starea inactivă",
            option: {
                idleTimeout: {
                    label: "Timp expirare stare inactivă",
                    description: "Minute înainte ca Discord să devină inactiv (0 pentru a dezactiva)"
                },
                remainInIdle: {
                    label: "Rămâi în starea inactivă",
                    description: "Când te întorci la Discord, rămâi inactiv până când confirmi că vrei să treci online"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Adaugă un Rich Presence (stare de joc) complet personalizabil profilului tău Discord",
            goTo: "Mergi la {{portal}} pentru a crea o aplicație și a obține ID-ul aplicației.",
            upload: "Încarcă imagini în fila Rich Presence pentru a obține cheile de imagine.",
            image: "Dacă vrei să folosești un link de imagine, descarc-o și reîncarc-o pe {{imgur}}, apoi obține linkul dând click dreapta și selectând 'Copy image address'.",
            button: "Nu îți poți vedea propriile butoane pe profil, dar toți ceilalți le pot vedea normal.",
            font: "Unele caractere unicode ciudate ('fonturi' 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) pot face ca prezența să nu apară, încearcă litere normale.",
            placeholder: "Introdu o valoare",
            select: "Selectează o opțiune",
            error: {
                appIdInvalid: "ID-ul aplicației trebuie să fie un număr valid.",
                notice: "Notă",
                sharing: "Partajarea activității nu este activată, oamenii nu vor putea vedea prezența ta personalizată!",
                enable: "Activează",
                validStream: "Link-ul de streaming trebuie să fie un URL valid.",
                mustBeURL: "Trebuie să fie un URL valid.",
                streamCharacters: "Link-ul de streaming nu trebuie să depășească 512 caractere.",
                dontUse: "Nu folosi un link de Discord. Folosește un link Imgur în schimb.",
                imgur: "Link-ul Imgur trebuie să fie un link direct către imagine (ex. https://i.imgur.com/...).",
                tenor: "Link-ul Tenor trebuie să fie un link direct către GIF (ex. https://media.tenor.com/...).",
                required: "Acest câmp este obligatoriu.",
                tooLong: "Nu trebuie să depășească {{maxLength}} caractere.",
                mustBeNumber: "Trebuie să fie un număr.",
                mustBePositive: "Trebuie să fie un număr pozitiv.",
                startTimeInvalid: "Timestamp-ul de început trebuie să fie mai mare de 0.",
                endTimeInvalid: "Timestamp-ul de sfârșit trebuie să fie mai mare de 0."
            },
            option: {
                appId: {
                    label: "ID Aplicație",
                    description: "ID-ul aplicației (obligatoriu)"
                },
                appName: {
                    label: "Nume Aplicație",
                    description: "Numele aplicației (obligatoriu)"
                },
                details: {
                    label: "Detalii",
                    description: "Detalii (linia 1)"
                },
                detailsURL: {
                    label: "URL Detalii",
                    description: "URL care poate fi accesat prin click pe Detalii"
                },
                state: {
                    label: "Stare",
                    description: "Stare (linia 2)"
                },
                stateURL: {
                    label: "URL Stare",
                    description: "URL care poate fi accesat prin click pe Stare"
                },
                partySize: {
                    label: "Dimensiune grup",
                    description: "Dimensiunea curentă a grupului (trebuie folosită cu Dimensiune maximă)"
                },
                partyMax: {
                    label: "Dimensiune maximă grup",
                    description: "Capacitatea maximă a grupului"
                },
                type: {
                    label: "Tip activitate",
                    description: "Tipul activității",
                    playing: "Se joacă",
                    streaming: "Transmite live",
                    listening: "Ascultă",
                    watching: "Vizionează",
                    competing: "Concurează"
                },
                streamLink: {
                    label: "Link Stream",
                    description: "Link Twitch.tv sau YouTube.com (doar pentru tipul Transmite live)"
                },
                timestampMode: {
                    label: "Mod Timestamp",
                    description: "Ce ar trebui să arate cronometrul",
                    none: "Niciunul",
                    sinceDiscordOpen: "De când s-a deschis Discord",
                    sameAsCurrentTime: "La fel ca ora ta curentă",
                    custom: "Timp personalizat"
                },
                startTime: {
                    label: "Timp început (în milisecunde)",
                    description: "Timestamp început (doar pentru modul timp personalizat)"
                },
                endTime: {
                    label: "Timp sfârșit (în milisecunde)",
                    description: "Timestamp sfârșit (doar pentru modul timp personalizat)"
                },
                imageBig: {
                    label: "Cheie imagine mare",
                    description: "Cheia imaginii mari (trebuie încărcată în fila Rich Presence)"
                },
                imageBigTooltip: {
                    label: "Tooltip imagine mare",
                    description: "Text la hover peste imaginea mare"
                },
                imageBigURL: {
                    label: "URL imagine mare",
                    description: "URL-ul imaginii mari"
                },
                imageSmall: {
                    label: "Cheie imagine mică",
                    description: "Cheia imaginii mici"
                },
                imageSmallTooltip: {
                    label: "Tooltip imagine mică",
                    description: "Text la hover peste imaginea mică"
                },
                imageSmallURL: {
                    label: "URL imagine mică",
                    description: "URL-ul imaginii mici"
                },
                buttonOneText: {
                    label: "Text Buton 1",
                    description: "Textul de pe butonul 1"
                },
                buttonOneURL: {
                    label: "URL Buton 1",
                    description: "URL-ul butonului 1"
                },
                buttonTwoText: {
                    label: "Text Buton 2",
                    description: "Textul de pe butonul 2"
                },
                buttonTwoURL: {
                    label: "URL Buton 2",
                    description: "URL-ul butonului 2"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Personalizează sunetele Discord.",
            search: "Caută sunete",
            placeholder: "Caută după nume sau ID",
            import: "Importă",
            export: "Exportă",
            reset: "Resetează tot",
            debug: "Depanare",
            toast: {
                error: "Eroare la încărcarea fișierului de sunet personalizat",
                exported: "S-au exportat {{count}} setări (fișierele audio nu sunt incluse)",
                imported: "Setările au fost importate cu succes",
                importError: "Eroare la importul setărilor. Verifică consola pentru detalii.",
                reset: "Toate modificările au fost resetate!",
                overrideDescription: "Modificare pentru {{soundName}}",
                previewSound: "Eroare la redarea sunetului.",
                playing: "Eroare la redarea sunetului. Fișierul poate fi corupt.",
                invalidFile: "Niciun fișier audio disponibil pentru previzualizare",
                uploaded: "Fișier încărcat cu succes: {{fileName}}",
                uploadedError: "Eroare la încărcarea fișierului: {{error}}",
                invalidExtension: "Tip de fișier invalid. Te rugăm să încarci un fișier audio.",
                uploading: "Se încarcă fișierul...",
                deleted: "Fișier șters cu succes",
                deleteError: "Eroare la ștergerea fișierului.",
                loadingError: "Eroare la încărcarea fișierului audio"
            },
            button: {
                preview: "Previzualizare",
                stop: "Stop",
                volume: "Volum",
                soundSource: "Sursă sunet",
                customFile: "Fișier personalizat",
                uploadNew: "Încarcă nou",
                delete: "Șterge fișierul selectat"
            },
            option: {
                default: "Implicit",
                custom: "Personalizat",
                select: "Selectează un fișier..."
            },
            type: {
                activityEnd: "Sfârșit activitate",
                activityLaunch: "Lansare activitate",
                activityUserJoin: "Utilizator s-a alăturat activității",
                activityUserLeft: "Utilizator a părăsit activitatea",
                asmrMessage: "Mesaj ASMR",
                bitMessage: "Mesaj Bit",
                bopMessage: "Mesaj Bop",
                callCalling: "Apel (Ieșire)",
                callRinging: "Apel (Intrare)",
                clipError: "Eroare Clip",
                clipSave: "Salvare Clip",
                ddrDown: "DDR Jos",
                ddrLeft: "DDR Stânga",
                ddrRight: "DDR Dreapta",
                ddrUp: "DDR Sus",
                deafen: "Surzire",
                discodo: "Discodo",
                disconnect: "Deconectare",
                duckyMessage: "Mesaj Rățușcă",
                hangStatusSelect: "Selectare Hang Status",
                highfiveClap: "Bate palma",
                highfiveWhistle: "Fluierat Highfive",
                humanMan: "Human Man",
                lofiMessage: "Mesaj LoFi",
                mention1: "Mențiune 1 (@rol)",
                mention2: "Mențiune 2 (@everyone)",
                mention3: "Mențiune 3 (@here)",
                message1: "Mesaj 1 (Generic)",
                message2: "Mesaj 2 (Răspuns în server)",
                message3: "Mesaj 3 (DM și Grup)",
                mute: "Mut",
                overlayUnlock: "Deblocare Overlay",
                poggermodeAchievement: "Realizare Poggermode",
                poggermodeApplause: "Aplauze Poggermode",
                poggermodeEnabled: "Poggermode activat",
                poggermodeMessage: "Mesaj Poggermode",
                pttStart: "PTT Pornit",
                pttStop: "PTT Oprit",
                reconnect: "Reconectare",
                robotMan: "Robot Man",
                stageWaiting: "Așteptare Scenă",
                streamEnded: "Stream încheiat",
                streamStarted: "Stream început",
                streamUserJoined: "Utilizator s-a alăturat stream-ului",
                streamUserLeft: "Utilizator a părăsit stream-ul",
                success: "Succes",
                undeafen: "Anulare surzire",
                unmute: "Anulare mut",
                userJoin: "Utilizator s-a alăturat",
                userLeave: "Utilizator a plecat",
                userMoved: "Utilizator mutat",
                vibingWumpus: "Vibing Wumpus"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Timestamp-uri personalizate pe mesaje și tooltip-uri",
            demo: {
                cozy: "Click aici pentru a trece la formatul Cozy",
                compact: "Click aici pentru a trece la formatul Compact",
                lastWeek: "Acest mesaj a fost trimis în ultima săptămână",
                hover: "Treceți peste timestamp-uri pentru a vedea formatele tooltip",
                edit: "Editați formatele de mai jos pentru a le vedea actualizate aici live"
            },
            modal: {
                title: "Cum se folosește:",
                moment: "Documentație formatare Moment.js",
                hint: "În plus, puteți folosi acestea în intrările voastre:",
                calendar: "activează formatarea dinamică a datei precum",
                today: "Astăzi",
                yesterday: "Ieri",
                relative: "vă oferă timpi precum",
                relativeTime: "acum 4 ore",
                preview: "Previzualizare",
                format: "Formate calendar",
                howTo: "Cum se formatează valoarea [calendar] dacă este utilizată în timestamp-urile de mai sus."
            },
            option: {
                formats: {
                    label: "Formate",
                    description: "Personalizează formatele de timp",
                },
                cozyFormat: {
                    label: "Modul Cozy",
                    description: "Formatul de timp utilizat în mesaje pe modul Cozy"
                },
                compactFormat: {
                    label: "Modul Compact",
                    description: "Formatul de timp pe modul Compact și la hover peste mesaje"
                },
                tooltipFormat: {
                    label: "Tooltip",
                    description: "Formatul de timp utilizat în ferestrele pop-up (tooltips)"
                },
                ariaLabelFormat: {
                    label: "Etichetă Aria",
                    description: "Formatul de timp utilizat pentru etichetele de accesibilitate"
                },
                sameDayFormat: {
                    label: "Aceeași zi",
                    description: "Format [calendar] pentru astăzi",
                    default: "[Astăzi la] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Ziua trecută",
                    description: "Format [calendar] pentru ieri",
                    default: "[Ieri la] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Săptămâna trecută",
                    description: "[calendar] format pentru săptămâna trecută"
                },
                sameElseFormat: {
                    label: "Alte date mai vechi",
                    description: "Format [calendar] pentru date mai vechi"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Vă permite să adăugați o culoare personalizată oricărui utilizator, oriunde! Recomandat de folosit cu typingTweaks și roleColorEverywhere",
            option: {
                dmList: {
                    label: "Lista DM",
                    description: "Utilizatorii cu culori personalizate definite vor avea numele colorat în lista DM"
                },
                colorInServers: {
                    label: "Culoare în servere",
                    description: "Dacă culorile numelor ar trebui schimbate și în interiorul serverelor"
                }
            },
            context: {
                setColor: "Setează culoarea"
            },
            modal: {
                custom: "Culoare personalizată",
                pick: "Alege o culoare",
                delete: "Șterge intrarea",
                save: "Salvează"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Face titlurile și miniaturile YouTube mai puțin senzaționaliste, powered by DeArrow",
            option: {
                hideButton: {
                    label: "Ascunde butonul",
                    description: "Ascunde butonul DeArrow din embed-urile YouTube"
                },
                replaceElements: {
                    label: "Înlocuire elemente",
                    description: "Alege ce elemente ale embed-ului vor fi înlocuite",
                    everything: "Totul (Titluri și Miniaturi)",
                    title: "Titluri",
                    thumbnail: "Miniaturi"
                },
                dearrowByDefault: {
                    label: "DeArrow implicit",
                    description: "Aplică DeArrow videoclipurilor automat"
                }
            },
            tooltip: {
                dearrowed: "Acest conținut a fost curățat prin DeArrow; click pentru a restaura",
                dearrow: "Click pentru DeArrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Curăță Discord-ul prin eliminarea elementelor neesențiale de interfață, cum ar fi efectele de profil, filele de magazin, boost-uri și altele.",
            option: {
                userProfileHeader: {
                    label: "Profil utilizator"
                },
                removeNameplate: {
                    label: "Elimină plăcuța de nume",
                    description: "Elimină plăcuțele de identificare (nameplates)."
                },
                removeProfileEffect: {
                    label: "Elimină efectul de profil",
                    description: "Elimină animațiile de profil la deschidere."
                },
                removeClanTag: {
                    label: "Elimină eticheta de clan",
                    description: "Elimină etichetele de clan."
                },
                alwaysShowUsername: {
                    label: "Arată mereu numele de utilizator",
                    description: "Arată întotdeauna numele de utilizator în loc de status."
                },
                accessibilityNotice: {
                    label: "Notă accesibilitate",
                    description: "Discord are deja o opțiune încorporată pentru stilul numelui de utilizator în setările de Accesibilitate."
                },
                friendsListHeader: {
                    label: "Deasupra listei de Prieteni/DM"
                },
                removeShopAboveDM: {
                    label: "Elimină Magazinul de deasupra DM-urilor",
                    description: "Elimină butonul magazinului de deasupra listei de mesaje directe."
                },
                removeQuestsAboveDM: {
                    label: "Elimină Misiunile de deasupra DM-urilor",
                    description: "Elimină secțiunea misiunilor de deasupra listei de mesaje directe."
                },
                miscHeader: {
                    label: "Diverse"
                },
                removeServerBoostInfo: {
                    label: "Elimină info Server Boost",
                    description: "Elimină informațiile despre boost de deasupra listei de canale."
                },
                removeBillingSettings: {
                    label: "Elimină setările de facturare",
                    description: "Elimină secțiunile legate de facturare."
                },
                removeGiftButton: {
                    label: "Elimină butonul de cadou",
                    description: "Elimină butonul pentru trimiterea cadourilor."
                },
                removeUnavailableEmojiPicker: {
                    label: "Elimină selectorul de emoji indisponibile",
                    description: "Elimină categoriile indisponibile din selectorul de emoji."
                },
                removeAudioMenus: {
                    label: "Elimină meniurile audio",
                    description: "Elimină meniurile de lângă butoanele de mut și surzire."
                },
                removeButtonTooltips: {
                    label: "Elimină tooltip-urile butoanelor",
                    description: "Elimină mesajele de ajutor care apar peste butoane."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Decodifică conținutul Base64 al oricărui mesaj și copiază textul decodificat.",
            right: {
                decode: "Copiază decodificat (Click stânga) / Decodifică Base64 (Click dreapta)",
                copy: "Decodifică Base64 (Click stânga) / Copiază decodificat (Click dreapta)"
            },
            option: {
                clickMethod: {
                    label: "Metodă click",
                    description: "Schimbă modul în care butonul decodifică conținutul Base64.",
                    left: "Click stânga pentru a decodifica.",
                    right: "Click dreapta pentru a decodifica."
                }
            },
            modal: {
                title: "Conținut Base64 decodificat",
                content: "Conținut decodificat",
                copy: "Copiază conținutul decodificat {{index}}",
                copied: "Conținutul decodificat a fost copiat în clipboard!"
            }
        },
        decor: {
            name: "Decor",
            description: "Creează și folosește propriile decorațiuni de avatar personalizate sau alege din setările predefinite.",
            presetPart: "Parte din presetul {{name}}",
            createdBy: "Creat de {{author}}",
            copy: "Copiază ID Preset",
            file: "Fișier",
            your: {
                title: "Decorațiunile tale",
                subtitle: "Îți poți șterge propriile decorațiuni dând click dreapta pe ele."
            },
            option: {
                changeDecoration: {
                    label: "Schimbă decorațiunea",
                    description: "Activează Decor și repornește clientul pentru a-ți schimba decorațiunea avatarului.",
                    also: "Puteți accesa decorațiunile Decor și din pagina {{profiles}}.",
                    profiles: "Profiluri"
                },
                baseUrl: {
                    label: "Base URL",
                    description: "URL-ul API pentru Decor"
                },
                agreedToGuidelines: {
                    label: "Acord cu regulamentul",
                    description: "Acord cu liniile directoare"
                }
            },
            context: {
                decorationOptions: "Opțiuni decorațiune",
                copyHash: "Copiază Hash decorațiune",
                deleteDecoration: "Șterge decorațiunea"
            },
            alert: {
                delete: {
                    title: "Șterge decorațiunea",
                    body: "Ești sigur că vrei să ștergi {{decoration}}?",
                    confirm: "Șterge",
                    cancel: "Anulează"
                },
                logout: {
                    title: "Deconectare",
                    body: "Ești sigur că vrei să te deconectezi din Decor?",
                    confirm: "Deconectare",
                    cancel: "Anulează"
                }
            },
            button: {
                change: "Schimbă decorațiunea",
                remove: "Elimină decorațiunea",
                apply: "Aplică",
                cancel: "Anulează",
                browse: "Răsfoiește",
                submit: "Trimite pentru verificare",
                continue: "Continuă",
                back: "Înapoi"
            },
            tooltip: {
                pendingReview: "Ai deja o decorațiune în curs de verificare",
                pending: "În curs de verificare"
            },
            join: {
                tooltip: "Alătură-te serverului de Discord Decor pentru notificări despre verificarea decorațiunilor tale și lansări de noi preseturilor",
                button: "Server de Discord"
            },
            create: {
                title: "Creează decorațiune",
                notViolate: "Asigură-te că decorațiunea ta nu încalcă {{guidelines}} înainte de a o trimite.",
                guidelines: "regulamentul",
                file: "Fișierul trebuie să fie APNG sau PNG.",
                fileHolder: "Alege un fișier",
                name: "Acest nume va fi folosit pentru a face referire la această decorațiune.",
                nameHolder: "Companion Cube",
                nameTitle: "Nume"
            },
            help: {
                update: "Pentru a primi actualizări despre verificarea decorațiunii tale, alătură-te {{server}} și permite mesajele directe.",
                server: "Serverul de Discord Decor"
            },
            guidelines: {
                hold: "Stai puțin",
                suspended: "Prin trimiterea unei decorațiuni, ești de acord cu {{guidelines}}. Necitirea acestora poate duce la suspendarea contului tău pentru crearea de decorațiuni viitoare.",
                guidelines: "regulamentul"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Plugin pentru a face capturi de ecran ale temelor — cenzurează imaginile și textele de identificare.",
            toolbox: {
                toggle: "Comută Demonstration"
            },
            keycode: "Pentru a schimba codul de taste, verifică {{keycode}}!",
            this: "acest instrument",
            okay: "Bine!",
            option: {
                keyBind: {
                    label: "Scurtătură tastatură",
                    description: "Tasta pentru a comuta tema când este apăsată"
                },
                soundVolume: {
                    label: "Volum sunet",
                    description: "Cât de tare este sunetul de comutare (0 pentru a dezactiva)"
                },
                showConfirmationModal: {
                    label: "Arată fereastra de confirmare",
                    description: "Arată o fereastră pentru a-ți reaminti de scurtătura de tastatură"
                }
            },
            switch: {
                note: "Poți reactiva această setare mai târziu",
                disable: "Dezactivezi fereastra?"
            },
            shortcut: "Acest lucru va cenzura tot textul! Pentru a dezactiva, ține minte scurtătura:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Plugin Dev Companion. Te rugăm să raportezi orice lucru care nu funcționează sau se comportă ciudat lui MutanPlex. Mulțumim!",
            reconnect: "Reconectare",
            option: {
                notifyOnAutoConnect: {
                    label: "Notificare la auto-conectare",
                    description: "Dacă să se trimită o notificare când Dev Companion s-a conectat automat."
                },
                usePatchedModule: {
                    label: "Folosește modulul patch-uit",
                    description: "La cererile de extragere, răspunde cu modulul patch-uit curent în loc de cel original."
                },
                reloadAfterToggle: {
                    label: "Reîncărcare după comutare",
                    description: "Reîncarcă după ce este primită o comandă de 'dezactivare/activare plugin'."
                }
            },
            toast: {
                title: "Dev Companion Conectat",
                connected: "Conectat la WebSocket",
                disconnected: "Dev Companion Deconectat",
                error: "Eroare Dev Companion",
                reload: "Reîncărcare necesară",
                failed: "Pornirea dependențelor a eșuat: {{failures}}",
                close: "Închide",
                stopping: "Eroare la oprirea pluginului {{plugin}}",
                starting: "Eroare la pornirea pluginului {{plugin}}",
                noMessage: "Niciun mesaj de eroare",
                noReason: "Niciun motiv oferit"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Dezactivează deconectarea automată dintr-un apel vocal DM după 3 minute de inactivitate sau mutarea într-un canal AFK."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Dezactivează camerele într-un apel în mod implicit"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Activează banner-ul de dezvoltator Discord, care afișează ID-ul Build-ului",
            about: "Formatul pentru Discord Dev Banner. Poți folosi următoarele variabile:",
            preview: "Previzualizare:",
            empty: "Formatul nu poate fi gol.",
            variables: {
                discord: {
                    title: "Variabile Discord",
                    icon: "Iconiță Discord",
                    banner: "Iconiță banner dev",
                    channel: "Canal build Discord (ex. Stable)",
                    build: "Număr build Discord (ex. 123456)",
                    hash: "Hash build Discord"
                },
                plexcord: {
                    title: "Variabile Plexcord",
                    icon: "Iconiță Plexcord",
                    name: "Numele Plexcord",
                    version: "Versiunea Plexcord",
                    hash: "Hash build Plexcord",
                    platform: "Platforma pe care rulează Plexcord"
                },
                plextron: {
                    title: "Variabile specifice Plextron",
                    hashShort: "Hash scurt build Plextron",
                    platformType: "Tip platformă Plextron"
                },
                client: {
                    title: "Variabile Client",
                    icon: "Iconiță desktop",
                    name: "Numele clientului (ex. Discord Canary)",
                    version: "Versiunea clientului",
                },
                electron: {
                    title: "Variabile Electron",
                    icon: "Iconiță Electron",
                    version: "Versiune Electron"
                },
                chromium: {
                    title: "Variabile Chromium",
                    icon: "Iconiță Chromium",
                    version: "Versiune motor Chromium"
                },
                misc: {
                    title: "Variabile diverse",
                    newline: "Caracter de rând nou"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Vă avertizează dacă mesajul conține un termen din lista predefinită AutoMod",
            alert: {
                title: "Stai puțin!",
                content: "Mesajul tău conține un termen din lista predefinită AutoMod (Termen: '{{trigger}}').",
                content2: "Există șanse mari ca mesajul tău să fie blocat și moderat de un moderator de server.",
                confirm: "Trimite oricum",
                cancel: "Anulează"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Rotunjește întotdeauna timestamp-urile relative prin lipsă, astfel încât 7.6 ani devin 7 ani în loc de 8 ani"
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Adaugă funcționalitatea drag-and-drop pentru emoji-urile preferate"
        },
        dragify: {
            name: "Dragify",
            description: "Trage utilizatori, canale sau servere în chat pentru a insera mențiuni sau invitații.",
            option: {
                userOutput: {
                    label: "Ieșire utilizator",
                    description: "Rezultatul tragerii unui utilizator.",
                    mention: "Mențiune",
                    id: "ID Utilizator"
                },
                channelOutput: {
                    label: "Ieșire canal",
                    description: "Rezultatul tragerii unui canal.",
                    mention: "Mențiune #canal",
                    link: "Link canal",
                },
                inviteExpireAfter: {
                    label: "Invitația expiră după",
                    description: "Durata invitației",
                    never: "Niciodată",
                    thirtyMinutes: "30 minute",
                    oneHour: "1 oră",
                    sixHours: "6 ore",
                    twelveHours: "12 ore",
                    oneDay: "1 zi",
                    sevenDays: "7 zile"
                },
                inviteMaxUses: {
                    label: "Utilizări maxime invitație",
                    description: "Limita de utilizări pentru invitație",
                    noLimit: "Fără limită",
                    one: "1 utilizare",
                    five: "5 utilizări",
                    ten: "10 utilizări",
                    twentyFive: "25 utilizări",
                    fifty: "50 utilizări",
                    hundred: "100 utilizări"
                },
                inviteTemporaryMembership: {
                    label: "Calitate de membru temporar",
                    description: "Acordă apartenență temporară.",
                },
                reuseExistingInvites: {
                    label: "Reutilizează invitație existentă",
                    description: "Refolosește o invitație existentă în loc să creeze una nouă."
                },
                allowChatBodyDrop: {
                    label: "Permite tragerea în corpul chat-ului",
                    description: "Permite tragerea elementelor în zona principală de mesaje pentru a insera text."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify nu a reușit să gestioneze acțiunea.",
                },
                invite: {
                    created: "Invitație creată.",
                    unable: "Imposibil de creat invitația.",
                    noChannel: "Niciun canal disponibil pentru invitații.",
                }
            },
            ghost: {
                user: "Utilizator",
                server: "Server",
                dm: "Mesaje directe",
                badge: {
                    channel: "canal",
                    thread: "fir de discuție",
                    voice: "voce",
                    forum: "forum",
                    media: "media",
                    announcement: "anunț",
                    dm: "dm",
                    user: "utilizator",
                    server: "server"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Evidențiază și inspectează elementele cu ușurință.",
            modal: {
                recording: "Înregistrare...",
                reset: "Resetează"
            },
            option: {
                keybind: {
                    label: "Scurtătură tastatură",
                    description: "Comută Highlighter"
                },
                showClasses: {
                    label: "Arată clasele",
                    description: "Afișează numele claselor CSS ale elementului în tooltip"
                },
                showId: {
                    label: "Arată ID",
                    description: "Afișează atributul ID al elementului în tooltip"
                },
                showFont: {
                    label: "Arată fontul",
                    description: "Afișează familia de fonturi și dimensiunea calculată"
                },
                showPadding: {
                    label: "Arată padding",
                    description: "Afișează valorile padding-ului elementului"
                },
                showMargin: {
                    label: "Arată marginea",
                    description: "Afișează valorile marginilor elementului"
                },
                showBorderRadius: {
                    label: "Arată border-radius",
                    description: "Afișează valorile razei bordurii"
                },
                showPosition: {
                    label: "Arată poziția",
                    description: "Afișează tipul poziției CSS și z-index"
                },
                showDisplay: {
                    label: "Arată display",
                    description: "Afișează tipul de afișare (display) împreună cu proprietățile flex sau grid"
                }
            },
            toast: {
                copied: {
                    color: "Culoarea a fost copiată în clipboard!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Redă sunete din soundboard când te deconectezi de la voce.",
            button: "Setează ca sunet de ieșire global",
            toast: {
                failedToPlay: "Hopa! Ceva n-a mers bine."
            },
            option: {
                soundGuildId: {
                    label: "ID Server sunet",
                    description: "Selectează serverul care conține sunetul.",
                    placeholder: "Alege un server..."
                },
                soundId: {
                    label: "ID Sunet",
                    description: "Introdu ID-ul sunetului pe care dorești să-l redai.",
                    placeholder: "Introdu ID-ul sunetului..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Activează accesul la experimente și alte funcții de dezvoltator în Discord!",
            modal: {
                about: {
                    title: "Mai multe informații",
                    body: "Puteți deschide DevTools din Discord prin {{key}}"
                },
                warning: {
                    title: "Stai puțin!!",
                    body: "Experimentele sunt funcții Discord nelansate. S-ar putea să nu funcționeze, să strice clientul sau chiar să ducă la dezactivarea contului.",
                    notReponsible: "Folosiți experimentele doar dacă știți ce faceți. Plexcord nu este responsabil pentru nicio daună cauzată.",
                    useAtOwnRisk: "Dacă nu știți ce face un experiment, ignorați-l. Nu ne întrebați ce fac experimentele; probabil nici noi nu știm.",
                    serverSideFeatures: "Nu, nu puteți folosi funcții server-side, cum ar fi bifarea căsuței 'Send to Client'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Meniu Dev în Toolbar",
                    description: "Schimbă butonul Ajutor (?) din bara de sus cu meniul de dezvoltator Discord"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Vă permite să exportați mesajele în fișiere — un singur mesaj, toate mesajele unui utilizator sau toate mesajele canalului",
            option: {
                maxMessages: {
                    label: "Mesaje maxime",
                    description: "Numărul maxim de mesaje de exportat (0 = nelimitat)"
                },
                includeAttachments: {
                    label: "Include atașamente",
                    description: "Include informațiile despre atașamente în export"
                },
                includeEmbeds: {
                    label: "Include embed-uri",
                    description: "Include informațiile embed în export"
                },
                includeReactions: {
                    label: "Include reacții",
                    description: "Include informațiile despre reacții în export"
                },
                includeComponents: {
                    label: "Include componente",
                    description: "Include informațiile despre componente (butoane etc.) în export"
                }
            },
            message: {
                invalid: "Mesaj invalid — lipsește autorul",
                unknownUser: "Utilizator necunoscut",
                botEmbed: "Mesaj Embed Bot",
                attachments: "Atașamente",
                unknown: "Necunoscut",
                noUrl: "Fără URL",
                embeds: "Embed-uri",
                title: "Titlu",
                description: "Descriere",
                url: "URL",
                footer: "Subsol",
                author: "Autor",
                fields: "Câmpuri",
                components: "Componente",
                component: "Componentă",
                interactiveElement: "Element interactiv",
                reactions: "Reacții",
                errorFormatting: "Eroare la formatarea mesajului",
                unknownError: "Eroare necunoscută",
                header: "{{titlePrefix}} {{displayName}} în {{channelName}}",
                from: "Mesaje de la",
                direct: "Mesaje directe",
                exported: "Exportat la data de",
                total: "Total mesaje"
            },
            toast: {
                export: {
                    title: "Export Mesaje",
                    body: "Exportarea mesajului a eșuat"
                },
                noMessages: {
                    title: "Export Mesaje",
                    notFoundUser: "Nu s-au găsit mesaje de la acest utilizator în acest canal",
                    notFoundChannel: "Nu s-au găsit mesaje în acest canal"
                },
                failed: {
                    title: "Export Mesaje",
                    body: "Exportarea mesajelor a eșuat"
                },
                userNotFound: {
                    title: "Export Mesaje",
                    body: "Utilizatorul nu a fost găsit"
                },
                complete: {
                    title: "Export Finalizat",
                    saved: "Fișier salvat",
                    downloaded: "Fișier descărcat",
                    messages: "mesaje"
                }
            },
            context: {
                exportMessage: "Exportă acest mesaj",
                exportAll: "Exportă toate mesajele de la {{user}}",
                user: "Utilizator",
                exportAllChannel: "Exportă toate mesajele din canal"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Vă permite să clonați emoji-uri și abțibilduri pe propriul server (click dreapta pe ele)",
            modal: {
                title: "Nume personalizat",
                invalidName: "Numele trebuie să aibă între 2 și 32 de caractere și să conțină doar caractere alfanumerice"
            },
            toast: {
                success: "S-a clonat cu succes {{name}} pe {{guild}}!",
                yourServer: "serverul tău",
                failed: "Clonarea a eșuat: ",
                console: "Ceva n-a mers bine (verifică consola!)"
            },
            context: {
                clone: "Clonează {{type}}",
                cloneName: "Clonează {{data}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Pune clientul pe pauză când apeși F8 având DevTools (+ puncte de întrerupere) deschise."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Vă permite să trimiteți emoji-uri/stickere false, să folosiți teme Nitro și să transmiteți la calitate Nitro",
            option: {
                enableEmojiBypass: {
                    label: "Activare Emoji Bypass",
                    description: "Permite trimiterea de emoji-uri false (de asemenea, ocolește lipsa permisiunii de a folosi emoji-uri personalizate)"
                },
                emojiSize: {
                    label: "Dimensiune Emoji",
                    description: "Dimensiunea emoji-urilor la trimitere"
                },
                transformEmojis: {
                    label: "Transformare Emoji-uri",
                    description: "Dacă să transforme emoji-urile false în unele reale"
                },
                enableStickerBypass: {
                    label: "Activare Sticker Bypass",
                    description: "Permite trimiterea de stickere false (de asemenea, ocolește lipsa permisiunii de a folosi stickere)"
                },
                stickerSize: {
                    label: "Dimensiune Sticker",
                    description: "Dimensiunea stickerelor la trimitere"
                },
                transformStickers: {
                    label: "Transformare Stickere",
                    description: "Dacă să transforme stickerele false în unele reale"
                },
                transformCompoundSentence: {
                    label: "Transformare propoziții compuse",
                    description: "Dacă să transforme stickerele și emoji-urile false în propoziții compuse (propoziții cu mai mult conținut decât doar linkul de emoji sau sticker)"
                },
                enableStreamQualityBypass: {
                    label: "Activare Stream Quality Bypass",
                    description: "Permite streaming-ul la calitate Nitro"
                },
                useStickerHyperLinks: {
                    label: "Folosire hyperlink-uri pentru stickere",
                    description: "Dacă să folosească hyperlink-uri la trimiterea stickerelor false"
                },
                useEmojiHyperLinks: {
                    label: "Folosire hyperlink-uri pentru emoji-uri",
                    description: "Dacă să folosească hyperlink-uri la trimiterea emoji-urilor false"
                },
                hyperLinkText: {
                    label: "Text hyperlink",
                    description: "Ce text ar trebui să folosească hyperlink-ul. {{NAME}} va fi înlocuit cu numele emoji-ului/stickerului."
                },
                disableEmbedPermissionCheck: {
                    label: "Dezactivare verificare permisiuni embed",
                    description: "Dacă să dezactiveze verificarea permisiunii de embed la trimiterea emoji-urilor și stickerelor false"
                }
            },
            modal: {
                sticker: "Acesta este un sticker FakeNitro și se randează ca un sticker real doar pentru tine. Apare ca un link pentru utilizatorii fără plugin.",
                emoji: "Acesta este un emoji FakeNitro și se randează ca un emoji real doar pentru tine. Apare ca un link pentru utilizatorii fără plugin."
            },
            alert: {
                notice: {
                    title: "Stai puțin!",
                    body: "Încerci să trimiți/editezi un mesaj care conține un emoji sau sticker FakeNitro; totuși, nu ai permisiunea de a insera linkuri (embed) în canalul curent. Ești sigur că vrei să trimiți acest mesaj? Elementele FakeNitro vor apărea doar ca un link.",
                    footer: "Poți dezactiva această alertă în setările FakeNitro",
                    confirm: "Trimite oricum",
                    cancel: "Anulează",
                    secondaryConfirm: "Nu mai afișa"
                },
                apngSticker: {
                    title: "Stai puțin!",
                    body: "Nu poți trimite acest mesaj deoarece conține un sticker FakeNitro animat, iar tu nu ai permisiunea de a atașa fișiere în canalul curent. Te rugăm să elimini stickerul pentru a continua."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Permite personalizarea temei profilului prin ascunderea culorilor în biografie folosind codificarea invizibilă 3y3",
            button: {
                copy: "Copiază 3y3"
            },
            modal: {
                usage: "Utilizare",
                preview: "Previzualizare",
                intro: "După activarea acestui plugin, vei vedea culori personalizate în profilurile altor persoane care folosesc pluginuri compatibile.",
                setColor: "Pentru a-ți seta propriile culori:",
                step1: "• Folosește selectoarele de culoare de mai jos pentru a alege culorile",
                step2: "• Click pe butonul {{copy}}",
                step3: "• Lipsește (Paste) textul invizibil oriunde în biografia ta",
                pickers: "Selectoare de culoare",
                primary: "Primar",
                accent: "Accent"
            },
            option: {
                nitroFirst: {
                    label: "Prioritate Nitro",
                    description: "Sursa implicită de culori dacă ambele sunt prezente",
                    nitro: "Culori Nitro",
                    fake: "Culori false"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Permite teme și efecte de profil prin ascunderea culorilor și efectelor în biografie folosind codificarea invizibilă 3y3",
            option: {
                prioritizeNitro: {
                    label: "Prioritizează Nitro",
                    description: "Sursa de prioritizat",
                    nitro: "Nitro",
                    aboutMe: "Despre mine"
                },
                hideBuilder: {
                    label: "Ascunde Builder",
                    description: "Ascunde FPTE Builder în paginile de setări Profil Utilizator și Profil Server"
                }
            },
            modal: {
                primary: "Primar",
                accent: "Accent",
                effect: "Efect",
                usage: {
                    title: "Utilizare",
                    intro: "După activarea acestui plugin, vei vedea culori de temă și efecte personalizate în profilurile altora care folosesc acest plugin.",
                    setColor: "Pentru a-ți seta propriile culori și efectul:",
                    step1: "Mergi la setările profilului tău",
                    step2: "Folosește FPTE Builder pentru a alege culorile temei și efectul",
                    step3: "Click pe butonul {{copy}}",
                    step4: "Lipsește textul invizibil oriunde în biografia ta"
                }
            },
            toast: {
                copied: "FPTE a fost copiat în clipboard!",
                empty: "FPTE Builder este gol; nimic de copiat!"
            },
            button: {
                copyFPTE: "Copiază FPTE",
                reset: "Resetează",
                preview: "Previzualizare FPTE Builder",
                buildBackwards: "Construiește FPTE compatibil retroactiv",
                moreCharacters: "Va folosi mai multe caractere"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Adaugă o pictogramă de coș de gunoi pentru a șterge canalele",
            option: {
                keyBind: {
                    label: "Scurtătură tastatură",
                    description: "Tasta pentru a comuta vizibilitatea coșului de gunoi."
                },
                reqCtrl: {
                    label: "Necesită Control",
                    description: "Necesită menținerea tastei Control apăsată."
                },
                reqShift: {
                    label: "Necesită Shift",
                    description: "Necesită menținerea tastei Shift apăsată."
                },
                reqAlt: {
                    label: "Necesită Alt",
                    description: "Necesită menținerea tastei Alt apăsată."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Pune emoji-urile preferate primele în autocompletare și oferă, de asemenea, alias-uri pentru emoji-uri.",
            option: {
                aliases: {
                    label: "Alias-uri",
                    description: "Gestionează alias-urile pentru emoji-uri."
                },
                clearAll: {
                    label: "Șterge tot",
                    description: "Șterge toate alias-urile."
                }
            },
            modal: {
                clear: {
                    title: "Șterge toate alias-urile",
                    description: "Această acțiune va elimina fiecare alias de emoji pe care l-ai salvat.",
                    confirm: "Șterge toate alias-urile"
                },
                set: {
                    title: "Setează Alias",
                    description: "Setează un alias pentru {{emoji}}",
                    placeholder: "Alias, ex: 'fericit'",
                    save: "Salvează",
                    error: "Alias duplicat"
                }
            },
            toast: {
                set: "Alias setat pentru {{emoji}}",
                clearAll: "Toate alias-urile de emoji au fost șterse",
                failedDeleted: "Eșec la ștergerea alias-urilor",
                removed: "Alias eliminat: {{alias}}",
                failedRemove: "Eșec la eliminarea alias-ului",
                duplicate: "Alias duplicat",
                failedSave: "Eșec la salvarea alias-ului."
            },
            button: {
                edit: "Editează alias",
                set: "Setează alias"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "Adaugă o bară de căutare pentru GIF-urile preferate.",
            placeholder: "Caută în GIF-urile preferate",
            option: {
                searchOption: {
                    label: "Opțiune căutare",
                    description: "Partea din URL pe care dorești să o cauți",
                    url: "Întreg URL-ul",
                    path: "Doar calea (/un-gif.gif)",
                    hostandpath: "Host & Cale (tenor.com un-gif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "Adaugă la favorite orice imagine",
            noFiles: "Niciun fișier nu corespunde căutării tale.",
            searchPlaceholder: "Caută fișiere",
            media: "Media",
            demoText: "Apasă pe stea pentru a adăuga un fișier la favorite.\nFișierele favorite vor apărea aici!",
            fetchError: "Nu s-a putut obține {filename}",
            uploadError: "Nu s-a putut încărca {filename}"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Adaugă un buton de Descărcare în colțul din dreapta sus al fișierelor"
        },
        findReply: {
            name: "FindReply",
            description: "Sare la primul răspuns al unui mesaj dintr-un canal (vă permite să urmăriți conversațiile trecute mai ușor).",
            context: {
                jump: "Mergi la răspuns"
            },
            toast: {
                navigate: "Folosește panoul de jos pentru a naviga între răspunsuri.",
                container: "Nu s-a putut găsi elementul container.",
                couldntFind: "Nu s-a putut găsi mesajul de răspuns."
            },
            option: {
                includePings: {
                    label: "Include mențiunile (pings)",
                    description: "Va căuta și mesaje care menționează autorul direct cu @"
                },
                includeAuthor: {
                    label: "Include autorul",
                    description: "Va căuta mesaje care răspund autorului în general, nu doar la acel mesaj specific"
                },
                hideButtonIfNoReply: {
                    label: "Ascunde butonul dacă nu există răspuns",
                    description: "Ascunde butonul dacă nu există răspunsuri la mesaj"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Elimină spațiul gol dintre blocurile de cod și textul de sub ele"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Corectează extensiile fișierelor prin redenumirea lor într-un format compatibil suportat, dacă este posibil"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Îmbunătățește calitatea imaginilor prin forțarea utilizării sursei originale",
            option: {
                originalImagesInChat: {
                    label: "Imagini originale în Chat",
                    description: "Încarcă imaginea originală și în chat. ATENȚIE: Citiți avertismentele de mai sus"
                }
            },
            modal: {
                about: {
                    title: "Comportamentul implicit este următorul:",
                    body: "&mdash; În chat, vor fi încărcate imagini optimizate, dar la rezoluție maximă.",
                    body2: "&mdash; În fereastra modală a imaginii, va fi încărcată imaginea originală.",
                    body3: "Poți activa imaginile originale și în chat, dar fii atent la următoarele aspecte:",
                    warning: "&mdash; Imaginile animate (GIF, WebP etc.) în chat vor fi mereu animate, indiferent dacă aplicația este în focar.",
                    warning2: "&mdash; Poate cauza lag.",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Corectează embed-urile Spotify care sunt extrem de gălăgioase, permițându-vă să personalizați volumul",
            option: {
                volume: {
                    label: "Volum",
                    description: "Procentul de volum pentru embed-urile Spotify. Orice peste 10% este foaaaarte tare"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Ocolește blocarea afișării videoclipurilor YouTube pe Discord (de exemplu, cele blocate de UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Adaugă o opțiune de 'Urmărire' în meniul contextual al utilizatorului pentru a fi mereu în același canal vocal cu acesta",
            indicatorTooltip: "Urmărești pe {{user}} (click pentru declanșare manuală, click dreapta pentru a opri urmărirea)",
            unknownUser: "Utilizator necunoscut",
            option: {
                executeOnFollow: {
                    label: "Execută la urmărire",
                    description: "Asigură-te că ești în același canal vocal atunci când începi să urmărești un utilizator"
                },
                onlyManualTrigger: {
                    label: "Doar declanșare manuală",
                    description: "Declanșează doar la click pe indicator"
                },
                followLeave: {
                    label: "Urmărește părăsirea",
                    description: "Părăsește canalul atunci când utilizatorul urmărit pleacă"
                },
                autoMoveBack: {
                    label: "Auto-mutare înapoi",
                    description: "Te mută automat înapoi în canalul vocal al utilizatorului urmărit dacă ești mutat de altcineva"
                },
                followUserId: {
                    label: "ID utilizator urmărit",
                    description: "ID-ul utilizatorului urmărit"
                },
                channelFull: {
                    label: "Canal plin",
                    description: "Încearcă să te mute în canal atunci când acesta nu mai este plin"
                }
            },
            toast: {
                channelFull: "Canalul este plin",
                newVc: "Ai urmat utilizatorul într-un nou canal vocal",
                insufficientPermissions: "Permisiuni insuficiente pentru a intra în canalul vocal",
                sameVc: "Ești deja în același canal",
                disconnect: "Utilizatorul urmărit a plecat; deconectat",
                notFollowing: "Utilizatorul urmărit a plecat, dar opțiunea de deconectare la urmărire nu este activă",
                notVc: "Utilizatorul urmărit nu este într-un canal vocal"
            },
            context: {
                follow: "Urmărește utilizatorul",
                unfollow: "Nu mai urmări utilizatorul"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Încarcă orice font de pe Google Fonts",
            option: {
                selectedFont: {
                    label: "Font selectat",
                    description: "Fontul selectat curent"
                },
                fontSearch: {
                    label: "Căutare font",
                    description: "Caută și selectează fonturi de pe Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Aplică pe blocurile de cod",
                    description: "Aplică fontul și blocurilor de cod"
                }
            },
            toast: {
                failedLoad: "Eșec la încărcarea fontului"
            },
            modal: {
                settings: {
                    title: "Caută pe Google Fonts",
                    description: "Selectează un font pentru a-l aplica",
                    placeholder: "Caută fonturi...",
                    previewText: "The quick brown fox jumps over the lazy dog",
                    authors: "De {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Forțează coroana de proprietar lângă numele de utilizator chiar dacă serverul este mare."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Dacă o redirecționare eșuează, trimite-o ca pe un mesaj normal; de asemenea, permite redirecționări NSFW",
            option: {
                forwardPreface: {
                    label: "Prefață redirecționare",
                    description: "Cu ce text ar trebui prefațat conținutul redirecționat"
                }
            },
            context: {
                attachments: "Atașamente",
                forwarded: "Redirecționat de la"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Vă permite să trimiteți mesaje folosind un font ciudat prin comanda /freaky.",
            command: {
                freaky: "Este ciudat (freaky).",
                message: "Fă-ți mesajul ciudat"
            },
            option: {
                addFreakyEnding: {
                    label: "Adaugă final ciudat",
                    description: "Adaugă 👅 sau ❤️ la sfârșit"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Rescrie și filtrează rezultatele din Quick Switcher pentru a afișa canalele tale cele mai frecventate."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Adaugă o comandă /friendcloud pentru a vizualiza utilizatorii cu care interacționezi cel mai mult",
            command: {
                friendcloud: {
                    description: "Vizualizează-ți norul de prieteni",
                    count: "Numărul de utilizatori de afișat",
                    mustHigher: "Numărul trebuie să fie 1 sau mai mare!",
                    noAffinities: "Nu s-au găsit afinități. Verifică [setările de confidențialitate](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Nu s-au găsit utilizatori valizi. Verifică [setările de confidențialitate](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Nu s-a putut genera imaginea :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Generează coduri de prietenie pentru a adăuga prieteni cu ușurință",
            card: {
                expires: "Expiră <t:{{expiration}}:R> • {{uses}}/{{maxUses}} utilizări",
                copy: "Copiază",
                copied: "Copiat!",
                codes: "Codurile tale de prietenie",
                count: "Coduri de prietenie - {{invites}}",
                create: "Creează cod de prietenie",
                revoke: "Revocă toate codurile",
                loading: "Se încarcă...",
                dontHave: "Nu ai niciun cod de prietenie."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Creează și gestionează linkuri de invitație de prietenie prin comenzi slash (/create friend invite, /view friend invites, /revoke friend invites).",
            command: {
                create: {
                    description: "Generează un link de invitație de prietenie.",
                    message: "discord.gg/{{code}}`\n· Expiră <t:{{expiration}}:R>\n· Utilizări maxime: {{uses}}"
                },
                view: {
                    description: "Vezi o listă cu toate invitațiile de prietenie generate.",
                    message: "_discord.gg/{{code}}_ \n· Expiră: <t:{{expiration}}:R> \n· De câte ori a fost folosită: {{uses}}/{{maxUses}}",
                    noInvites: "Nu ai nicio invitație de prietenie activă."
                },
                revoke: {
                    description: "Revocă toate invitațiile de prietenie generate.",
                    message: "Toate invitațiile de prietenie au fost revocate."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Adaugă insigne care arată de cât timp ești prieten cu un utilizator",
            badge: {
                sprout: {
                    name: "Lăstar",
                    description: "Prietenia voastră este la început"
                },
                blooming: {
                    name: "Înflorire",
                    description: "Prietenia voastră evoluează! (1 lună)"
                },
                burning: {
                    name: "Ardere",
                    description: "Prietenia voastră a prins viteză (3 luni)"
                },
                fighter: {
                    name: "Luptător",
                    description: "Prietenia voastră este puternică (6 luni)"
                },
                star: {
                    name: "Stea",
                    description: "Sunteți prieteni de mult timp (1 an)"
                },
                royal: {
                    name: "Regal",
                    description: "Prietenia voastră a trecut prin bune și rele — un total de 2 ani!"
                },
                besties: {
                    name: "Cei mai buni prieteni",
                    description: "Cum de ați reușit asta??? (5 ani)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Arată când ați devenit prieteni în popout-ul utilizatorului",
            section: "Prieteni din"
        },
        friendTags: {
            name: "FriendTags",
            description: "Vă permite să filtrați după etichete personalizate în Quick Switcher începând căutarea cu &",
            modal: {
                name: "Nume",
                users: "Utilizatori (separați prin virgulă)",
                userlist: "Listă utilizatori (click pe un utilizator pentru a-l elimina)",
                remove: "Elimină",
                add: "Adaugă",
                tag: "Etichetă",
                removeFrom: "Elimină din",
                addTo: "Adaugă la"
            },
            option: {
                tagConfiguration: {
                    label: "Configurare etichete",
                    description: "Componenta de configurare a etichetelor"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Face ca meniul contextual al mesajelor din rezultatele căutării să aibă toate opțiunile la care te-ai aștepta"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Oferă mențiunilor de utilizatori din caseta de chat mai multe funcționalități, cum ar fi click stânga/dreapta"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Face ca avatarele să ocupe întreaga celulă a canalului vocal"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Adaugă un comutator în popout-ul utilizatorului pentru a arăta/ascunde activitatea ta de joc",
            tooltip: "Comută activitatea de joc",
            gameActivity: {
                enabled: "Activitate de joc activată",
                disabled: "Activitate de joc dezactivată"
            },
            option: {
                oldIcon: {
                    label: "Pictogramă veche",
                    description: "Folosește stilul vechi de pictogramă de dinainte de reproiectarea Discord"
                },
                location: {
                    label: "Locație",
                    description: "Unde să fie afișat butonul de comutare a activității de joc",
                    panel: "Lângă Mut/Surzire",
                    toolbox: "Plexcord Toolbox"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "O fantomă drăguță va apărea dacă nu răspunzi la mesajele directe",
            modal: {
                title: "Utilizatori ignorați (Ghosted)",
                no: "Niciun utilizator ignorat",
                unghost: "anulează ignorarea",
                unknown: "Necunoscut",
                unnamedGroup: "Grup fără nume",
                unknownUser: "Utilizator necunoscut",
                clearAll: "Șterge tot",
                noGhost: "Nicio fantomă aici!",
                clear: "Șterge"
            },
            option: {
                showIndicator: {
                    label: "Arată indicator",
                    description: "Arată contorul de fantome în partea de sus a listei de servere"
                },
                showDmIcons: {
                    label: "Arată pictograme DM",
                    description: "Arată pictograme cu fantome lângă mesajele directe individuale"
                },
                ignoreGroupDms: {
                    label: "Ignoră grupurile DM",
                    description: "Exclude toate grupurile de mesaje directe"
                },
                exemptedChannels: {
                    label: "Canale exceptate",
                    description: "Listă separată prin virgulă de ID-uri de canale exceptate (click dreapta pe un canal DM pentru a-i copia ID-ul)"
                },
                ignoreBots: {
                    label: "Ignoră boții",
                    description: "Ignoră mesajele directe de la boți"
                },
                maxInactiveTimeMs: {
                    label: "Timp inactiv maxim",
                    description: "Doar DM-urile de fantomă active în acest interval de timp",
                    no: "Fără limită",
                    oneHour: "1 oră",
                    oneDay: "1 zi",
                    oneWeek: "1 săptămână",
                    oneMonth: "1 luna"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Vă permite să creați colecții de GIF-uri",
            context: {
                copyImageLink: "Copiază link imagine",
                copyUrl: "Copiază URL",
                collection: {
                    add: "Adaugă la colecție",
                    gif: "Colecții de GIF-uri",
                    delete: "Șterge colecția",
                    create: "Creează colecție",
                    remove: "Elimină",
                    information: "Informații colecție",
                    name: "Nume",
                    gifs: "GIF-uri",
                    created: "Creat la",
                    updated: "Ultima actualizare",
                    close: "Închide",
                    rename: "Redenumește",
                    move: "Mută în colecție",
                    select: "Selectează o colecție în care să muți elementul"
                },
                gif: {
                    information: "Informații",
                    added: "Adăugat la",
                    width: "Lățime",
                    height: "Înălțime",
                    close: "Închide"
                }
            },
            option: {
                itemPrefix: {
                    label: "Prefix element",
                    description: "Prefixul pentru elementele GIF"
                },
                collectionPrefix: {
                    label: "Prefix colecție",
                    description: "Prefixul pentru colecții"
                },
                onlyShowCollections: {
                    label: "Arată doar colecțiile",
                    description: "Afișează exclusiv colecțiile"
                },
                stopWarnings: {
                    label: "Oprește avertismentele",
                    description: "Oprește avertismentele la ștergere"
                },
                showCopyImageLink: {
                    label: "Arată Copiază link imagine",
                    description: "Arată opțiunea {{copyImageLink}} în meniurile contextuale"
                },
                preventDuplicates: {
                    label: "Previne duplicatele",
                    description: "Previne adăugarea aceluiași GIF de mai multe ori într-o colecție"
                },
                defaultEmptyCollectionImage: {
                    label: "Imagine implicită colecție goală",
                    description: "Imaginea/GIF-ul care va fi afișat atunci când o colecție nu are imagini"
                },
                collectionsSortType: {
                    label: "Tip sortare colecții",
                    description: "Tipul de sortare pentru colecții"
                },
                collectionsSortOrder: {
                    label: "Ordine sortare colecții",
                    description: "Ordinea de sortare pentru colecții"
                },
                collectionsSort: {
                    label: "Sortare colecții",
                    description: "Decide cum să sortezi colecțiile",
                    title: "Sortează colecțiile",
                    sortDescription: "Alege un criteriu de sortare pentru colecțiile tale",
                    sortBy: "Sortează după",
                    name: "Nume",
                    creationDate: "Data creării",
                    modifiedDate: "Data modificării",
                    ascending: "Ascendent",
                    descending: "Descendent"
                },
                importGifs: {
                    label: "Importă GIF-uri",
                    description: "Importă colecții",
                    button: "Importă colecții"
                },
                exportGifs: {
                    label: "Exportă GIF-uri",
                    description: "Exportă colecții",
                    button: "Exportă colecții"
                },
                resetCollections: {
                    label: "Resetează colecțiile",
                    description: "Resetează colecțiile la starea implicită (șterge toate colecțiile tale)",
                    button: "Resetează colecțiile"
                }
            },
            toast: {
                copied: "Link-ul imaginii a fost copiat în clipboard!",
                urlCopied: "URL-ul a fost copiat în clipboard!",
                already: "Această colecție există deja",
                alreadyCollection: "Acest GIF este deja în acea colecție"
            },
            modal: {
                create: {
                    title: "Creează colecție",
                    name: "Nume colecție",
                    create: "Creează"
                },
                rename: {
                    title: "Redenumește colecția",
                    name: "Nume nou colecție",
                    warning: "Numele nu poate fi mai lung de 24 de caractere",
                    rename: "Redenumește"
                }
            },
            alert: {
                import: {
                    title: "Ești sigur?",
                    body: "Importarea colecțiilor va suprascrie colecțiile tale actuale.",
                    confirm: "Importă",
                    cancel: "Anulează"
                },
                reset: {
                    title: "Ești sigur?",
                    body: "Resetarea colecțiilor va elimina toate colecțiile tale.",
                    confirm: "Resetează",
                    cancel: "Anulează"
                },
                delete: {
                    title: "Ești sigur?",
                    deleteBody: "Chiar vrei să ștergi această colecție?",
                    removeBody: "Chiar vrei să elimini acest element?",
                    confirm: "Șterge",
                    remove: "Elimină",
                    cancel: "Anulează"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Vă permite să lipiți (paste) GIF-uri direct în caseta de chat"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Adaugă o comandă pentru a trimite un GIF aleatoriu din favorite, cu o șansă de 1 la 10 de a menționa proprietarul serverului",
            command: {
                gifRoulette: {
                    description: "Invocă soarta și trimite un GIF"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Șansă de menționare a proprietarului",
                    description: "Dacă ar trebui să existe o șansă de 1 la 10 de a menționa proprietarul serverului (o, nu!)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Afișează depozitele (repos) GitHub publice ale unui utilizator în profilul acestuia",
            loading: "Se încarcă depozitele...",
            option: {
                showStars: {
                    label: "Arată stelele",
                    description: "Afișează stelele (stars) depozitului"
                },
                showLanguage: {
                    label: "Arată limbajul",
                    description: "Afișează limbajul principal al depozitului"
                }
            },
            error: {
                error: "Eroare",
                render: "Eroare: Eșec la randarea GitHubRepos"
            },
            button: {
                show: "Arată depozitele GitHub",
                repositories: "Depozite GitHub",
                more: "Arată mai multe",
                only: "Se afișează doar primele {{length}}/{{total}}"
            },
            modal: {
                title: "Depozitele GitHub ale lui {{user}}",
                repository: "Depozit",
                description: "Descriere",
                language: "Limbaj",
                stars: "Stele",
                viewOnGitHub: "Vezi pe GitHub",
                close: "Închide"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Adaugă o comandă pentru a trimite un link de căutare pe internet",
            command: {
                googleThat: {
                    description: "Trimite un link de motor de căutare",
                    query: "Căutarea dorită"
                }
            },
            option: {
                hyperlink: {
                    label: "Hyperlink",
                    description: "Dacă link-ul trimis ar trebui să fie un hyperlink cu textul căutării ca etichetă"
                },
                embed: {
                    label: "Embed",
                    description: "Dacă link-ul trimis ar trebui să randeze un embed"
                },
                defaultEngine: {
                    label: "Motor implicit",
                    description: "Motorul de căutare de utilizat"
                },
                customEngineURL: {
                    label: "URL motor personalizat",
                    description: "URL-ul motorului pe care dorești să-l folosești"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Vă permite să folosiți orice sticker de salut în loc de cel aleatoriu, dând click dreapta pe butonul 'Wave to say hi!'",
            mode: {
                greet: "Salutare",
                message: "Mesaj"
            },
            option: {
                greetMode: {
                    label: "Mod salut",
                    description: "Alege modul de salut",
                    greet: "Salutare (poți saluta doar de 3 ori)",
                    message: "Mesaj (poți trimite salutări nelimitate)"
                }
            },
            context: {
                label: "Selector sticker de salut",
                mode: "Mod salut",
                stickers: "Stickere de salut",
                multi: "Multi-salut necurat",
                send: "Trimite salutări"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Meniu contextual pentru a descărca emoji-urile și stickerele unui server.",
            context: {
                download: {
                    emoji: "Descarcă emoji-urile",
                    sticker: "Descarcă stickerele"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Adaugă setări pentru etichetele serverului, cum ar fi ascunderea acestora sau dezactivarea invitației de a le adopta.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Dezactivează invitația de adoptare",
                    description: "Dezactivează mesajul care te invită să adopți etichetele"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Permite ascunderea butoanelor din chat",
            tooltip: {
                close: "Închide",
                open: "Deschide"
            },
            option: {
                color: {
                    label: "Culoare",
                    description: "Colorează în roșu la deschidere"
                },
                open: {
                    label: "Deschis",
                    description: "Deschis în mod implicit"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Ascunde atașamentele și embed-urile pentru mesaje individuale printr-un buton la hover",
            show: "Arată conținutul media",
            hide: "Ascunde conținutul media",
            hidden: "Conținut media ascuns"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Un plugin pentru a ascunde temporar mesajele până la repornire.",
            button: {
                hide: "Ascunde"
            },
            option: {
                hidePopoverButton: {
                    label: "Ascunde butonul din popover",
                    description: "Ascunde butonul de ascundere din meniul popover al mesajului."
                }
            }
        },
        hideServers: {
            name: "HideServers",
            description: "Ascunde serverele din lista de servere",
            context: {
                hide: "Ascunde serverul",
                unhide: "Arată serverul",
                folder: {
                    hide: "Ascunde dosarul",
                    unhide: "Arată dosarul"
                }
            },
            option: {
                showIndicator: {
                    label: "Arată indicator",
                    description: "Arată un meniu pentru a reafisă serverele în partea de jos a listei"
                },
                guildsList: {
                    label: "Lista serverelor",
                    description: "Elimină serverele ascunse"
                },
                resetHidden: {
                    label: "Resetează ascunse",
                    description: "Elimină toate serverele ascunse din listă",
                    button: "Resetează serverele ascunse"
                }
            },
            button: {
                hidden: "Ascunse",
                hiddenServers: "Servere ascunse",
                remove: "Elimină",
                folder: "Dosar",
                removeAll: "Elimină tot",
                guilds: "Servere",
                noHiddenServers: "Niciun server ascuns"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes vă permite să salvați mesaje",
            main: "Principal",
            button: {
                tooltip: "Holy Notes",
                save: "Salvează notița",
                cancel: "Anulează",
                noteMessage: "Notifică mesajul",
                refresh: "Reîmprospătează avatarele",
                import: "Importă notițe",
                export: "Exportă notițe",
                deleteAll: "Șterge toate notițele",
                delete: "Șterge carnețelul",
                create: "Creează carnețel",
                copyText: "Copiază text",
                copyAttachment: "Copiază URL atașament",
                deleteNote: "Șterge notița",
                moveNote: "Mută notița",
                moveTo: "Mută în {{key}}",
                copyId: "Copiază ID"
            },
            modal: {
                error: {
                    generic: "A apărut o eroare la procesarea notițelor tale. Verifică consola pentru detalii.",
                    easter: "Nu s-au găsit notițe. Empathy Banana este aici pentru tine.",
                    empty: "Nu s-au găsit notițe salvate în acest carnețel."
                },
                help: {
                    title: "Ajutor",
                    description: "Învață cum să folosești Holy Notes",
                    addingNotes: "Adăugarea notițelor",
                    addingNotesText: "Pentru a adăuga o notiță, dă click dreapta pe un mesaj, apoi treci cu mouse-ul peste elementul 'Notifică mesajul' și apasă butonul cu numele carnețelului în care dorești să salvezi mesajul.",
                    prototype: "Prototip",
                    noteMessage: "Apasarea butonului 'Notifică mesajul' simplu va salva în secțiunea Principal în mod implicit!",
                    deletingNotes: "Ștergerea notițelor",
                    deletingNotesText: "Notă: poți fie să dai click dreapta pe notiță și să apeși 'Șterge notița', fie să ții apăsată tasta 'DELETE' și să dai click pe o notiță; este ca prin magie!",
                    movingNotes: "Mutarea notițelor",
                    movingNotesText: "Pentru a muta o notiță, dă click dreapta pe ea, treci peste 'Mută notița' și apasă pe butonul corespunzător carnețelului în care vrei să o muți.",
                    jumpToMessage: "Sari la mesaj",
                    jumpToMessageText: "Pentru a merge la locația originală a mesajului, dă click dreapta pe notiță și apasă 'Sari la mesaj'."
                },
                notebook: {
                    title: "CARNEȚEL",
                    search: "Caută un mesaj...",
                    options: "Opțiuni sortare",
                    label: "Meniu sortare",
                    filteredOf: "{{filteredCount}} din {{noteCount}} notițe",
                    note: "{{noteCount}} notițe",
                    ada: "Ascendent / Data adăugării",
                    amd: "Ascendent / Data mesajului",
                    dda: "Descendent / Data adăugării",
                    dmd: "Descendent / Data mesajului",
                    change: "Schimbă sortarea",
                    ascending: "Ascendent",
                    descending: "Descendent",
                    dateAdded: "Data adăugării",
                    messageDate: "Data mesajului"
                },
                create: {
                    title: "Creează carnețel",
                    description: "Introdu un nume pentru noul tău carnețel",
                    placeholder: "Nume carnețel"
                },
                delete: {
                    title: "Ștergi {{notebookName}}?",
                    description: "{{noteCount}} notițe vor fi șterse definitiv",
                    button: "Șterge"
                },
                tabs: {
                    label: "File carnețel"
                }
            },
            toast: {
                saved: "Mesaj adăugat cu succes în {{notebook}}",
                deleted: "Notiță ștearsă cu succes din {{notebook}}",
                moved: "Notiță mutată cu succes din {{from}} în {{to}}.",
                exists: "Carnețelul {{notebookName}} există deja.",
                created: "S-a creat cu succes {{notebookName}}.",
                deletedNotebook: "S-a șters cu succes {{notebookName}}.",
                refreshed: "Avatarele au fost reîmprospătate cu succes.",
                deletedAll: "Toate notițele au fost șterse.",
                imported: "Notițele au fost importate cu succes.",
                invalid: "Eșec la importarea notițelor."
            },
            toolbox: {
                action: "Deschide notițele"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Transformă butonul 'Acasă' într-un indicator de scriere dacă cineva îți scrie în mesajele directe"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Adaugă o filă nouă în setări pentru a previzualiza toate pictogramele.",
            toolbox: "Deschide fila Pictograme",
            iconFinder: "Căutare pictograme",
            about: {
                title: "Caracteristici",
                preview: "Previzualizare pictograme",
                list: {
                    copy: "Copiază numele pictogramelor și variabilele CSS",
                    download: "Descarcă pictograme în diferite formate (SVG, PNG, GIF etc.)",
                    premade: "Copiază rezultate gata făcute pentru pluginurile tale",
                    find: "Găsește pictograme după contextul funcției",
                    search: "Caută culori dând click dreapta pe numele culorii",
                    special: "Mulțumiri speciale"
                }
            },
            context: {
                icon: {
                    options: "Opțiuni pictogramă",
                    log: "Afișează în consolă (Log)",
                    save: "Salvează ca...",
                    rightClick: "Click dreapta pe pictogramă pentru a o schimba",
                    usage: "Utilizare",
                    click: "Click pentru a copia",
                    copied: "Copiat!",
                    actions: "Acțiuni"
                }
            },
            modal: {
                label: "Caută după contextul funcției",
                search: "Caută în {{count}} pictograme...",
                function: "Funcție",
                iconViewer: {
                    colors: "Culori Icon Viewer",
                    unknown: "necunoscut",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Repornește automat clientul după ce a fost inactiv pentru o perioadă configurabilă, dar evită repornirea în timp ce ești într-un canal vocal (VC).",
            option: {
                isEnabled: {
                    label: "Este activat",
                    description: "Activează repornirea automată după inactivitate"
                },
                idleMinutes: {
                    label: "Minute de inactivitate",
                    description: "Minute de inactivitate înainte de repornire (când nu ești în VC)"
                }
            },
            toolbox: {
                disable: "Dezactivează repornirea automată la inactivitate",
                enable: "Activează repornirea automată la inactivitate"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignoră activitățile pentru a nu apărea DOAR pe statusul tău. Poți configura care dintre ele sunt ignorate specific din filele Jocuri Înregistrate și Activități, sau folosește setările generale de mai jos",
            modal: {
                import: {
                    title: "Importă ID-ul aplicației din pluginul CustomRPC în lista de filtre"
                },
                filter: {
                    title: "Lista de filtre",
                    description: "Listă separată prin virgulă de ID-uri de activități pentru filtrare (utilă pentru filtrarea anumitor activități RPC și CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "ID-ul aplicației CustomRPC nu este setat.",
                    alreadyAdded: "ID-ul aplicației CustomRPC este deja adăugat."
                }
            },
            button: {
                import: "Importă ID CustomRPC"
            },
            option: {
                importCustomRPC: {
                    label: "Importă CustomRPC"
                },
                listMode: {
                    label: "Mod listă",
                    description: "Alege modul în care este aplicată lista de filtre",
                    blacklist: "Blacklist (ignoră doar ceea ce este în listă)",
                    whitelist: "Whitelist (ignoră tot, cu excepția celor din listă)"
                },
                idList: {
                    label: "Listă ID-uri"
                },
                ignorePlaying: {
                    label: "Ignoră 'În joc'",
                    description: "Ignoră toate activitățile de tip joc (acestea sunt de obicei activități de joc și RPC)"
                },
                ignoreStreaming: {
                    label: "Ignoră 'Streaming'",
                    description: "Ignoră toate activitățile de tip streaming"
                },
                ignoreListening: {
                    label: "Ignoră 'Ascultă'",
                    description: "Ignoră toate activitățile de ascultare (acestea sunt de obicei activități Spotify)"
                },
                ignoreWatching: {
                    label: "Ignoră 'Vizionează'",
                    description: "Ignoră toate activitățile de vizionare"
                },
                ignoreCompeting: {
                    label: "Ignoră 'Competiție'",
                    description: "Ignoră toate activitățile de competiție (acestea sunt de regulă activități de joc speciale)"
                },
                ignoredActivities: {
                    label: "Activități ignorate"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Vă permite să ignorați apelurile de la anumiți utilizatori sau grupuri de mesaje directe (DM).",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Utilizatori ignorați permanent",
                    description: "ID-uri de utilizatori (virgulă + spațiu) care ar trebui ignorați permanent"
                }
            },
            button: {
                ignore: "Ignoră",
                temporarilyIgnore: "Ignoră apelurile temporar",
                permanentlyIgnore: "Ignoră apelurile permanent"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Nu ascunde mesajele de la 'potențiali spammeri'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Afișează numele fișierului pentru imagini și GIF-uri ca un tooltip atunci când treci cu mouse-ul peste ele",
            option: {
                showFullUrl: {
                    label: "Arată URL-ul complet",
                    description: "Arată URL-ul complet al imaginii în loc de numele fișierului. Întotdeauna activat pentru GIF-uri, deoarece acestea de obicei nu au un nume de fișier sugestiv"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Nu ascunde niciodată linkurile imaginilor în mesaje, chiar dacă acesta este singurul conținut"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Vă permite să măriți imaginile și GIF-urile și afișează metadatele imaginii. Folosiți rotița mouse-ului pentru zoom și Shift + rotiță pentru a mări raza lentilei.",
            option: {
                saveZoomValues: {
                    label: "Salvează valorile de zoom",
                    description: "Dacă să salveze valorile pentru zoom și dimensiunea lentilei"
                },
                invertScroll: {
                    label: "Inversează scroll-ul",
                    description: "Inversează direcția de scroll"
                },
                nearestNeighbour: {
                    label: "Nearest Neighbour",
                    description: "Folosește interpolarea 'Nearest Neighbour' la redimensionarea imaginilor"
                },
                square: {
                    label: "Pătrat",
                    description: "Face lentila pătrată"
                },
                zoom: {
                    label: "Zoom",
                    description: "Nivelul de zoom al lentilei"
                },
                size: {
                    label: "Dimensiune",
                    description: "Raza / Dimensiunea lentilei"
                },
                zoomSpeed: {
                    label: "Viteza de zoom",
                    description: "Cât de repede se schimbă zoom-ul / dimensiunea lentilei"
                },
                showMetadata: {
                    label: "Arată metadate",
                    description: "Arată metadatele imaginii la dublu-click pe imaginea selectată"
                }
            },
            context: {
                square: "Lentilă pătrată",
                nearest: "Nearest Neighbour",
                zoom: "Zoom",
                size: "Dimensiune lentilă",
                zoomSpeed: "Viteză zoom",
                showImageMetadata: "Arată metadate imagine",
                view: "Vezi metadate",
                loading: "Se încarcă...",
                unknown: "Necunoscut",
                sizeHTML: "Dimensiune",
                dimensions: "Dimensiuni",
                filename: "Nume fișier"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Adaugă o comandă slash /imgtogif pentru a crea un GIF din orice imagine",
            command: {
                imgToGif: {
                    description: "Vă permite să transformați o imagine într-un GIF",
                    image: "Atașamentul imagine de utilizat",
                    width: "Lățimea GIF-ului",
                    height: "Înălțimea GIF-ului"
                }
            },
            error: {
                noImage: "Nicio imagine specificată!",
                notImage: "Fișierul încărcat nu este o imagine"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Afișează relațiile tale implicite în fila Prieteni.",
            option: {
                sortByAffinity: {
                    label: "Sortează după afinitate",
                    description: "Dacă să sorteze relațiile implicite în funcție de afinitatea acestora față de tine."
                }
            },
            implicit: "Implicit"
        },
        inRole: {
            name: "InRole",
            description: "Află cine face parte dintr-un rol folosind meniul contextual al rolului sau comanda /inrole (citește informațiile pluginului!)",
            command: {
                inrole: {
                    description: "Află cine este într-un rol",
                    role: "Rolul",
                    noGuild: "Asigură-te că ești pe un server."
                }
            },
            context: {
                view: "Vezi membrii cu acest rol"
            },
            modal: {
                about: {
                    title: "Limitări",
                    description: "Dacă nu ai permisiuni de moderator pe server, iar serverul este mare (peste 100 de membri), pluginul poate fi limitat în următoarele moduri",
                    list: {
                        one: "Membrii offline nu vor fi listați",
                        two: "Până la 100 de membri vor fi listați în mod implicit. Pentru a vedea mai mulți, derulează în jos în lista de membri pentru a încărca mai mulți.",
                        three: "Totuși, prietenii vor fi întotdeauna afișați, indiferent de statusul lor."
                    }
                },
                member: {
                    title: "Membrii rolului",
                    noMembers: "Se pare că nu au fost găsiți membri stocați (cache) care să fie online cu acest rol. Încearcă să derulezi în jos în lista de membri pentru a încărca mai mulți utilizatori!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Partajează ecranul instantaneu la intrarea într-un canal vocal, cu suport pentru surse desktop, ferestre și dispozitive de intrare video (camere, plăci de captură)",
            modal: {
                linux: {
                    title: "Pentru Linux",
                    body: "Pentru Wayland, doar afișează fereastra de selectare a partajării",
                    bodyTwo: "Pentru X11 s-ar putea să funcționeze sau nu :shrug:"
                },
                videoDevices: {
                    title: "Dispozitive de intrare video",
                    body: "Suportă camere și plăci de captură (cum ar fi Elgato HD60X) când este activat în setări"
                },
                regardingSound: {
                    title: "Privind setările de sunet și previzualizare",
                    body: "Folosim setările stabilite și folosite de Discord pentru a decide dacă previzualizarea stream-ului și sunetul ar trebui să fie activate sau nu"
                }
            },
            option: {
                streamMedia: {
                    label: "Sursa media de transmis",
                    description: "Revine la ecranul principal dacă nu este găsită",
                    loading: "Se încarcă sursele media...",
                    none: "Nu s-au găsit surse media",
                    placeholder: "Selectează o sursă media pentru stream"
                },
                includeVideoDevices: {
                    label: "Include dispozitive video",
                    description: "Include dispozitivele de intrare video (camere, plăci de captură) în lista de surse"
                },
                autoMute: {
                    label: "Auto Mute",
                    description: "Oprește automat microfonul la intrarea într-un canal vocal"
                },
                autoDeafen: {
                    label: "Auto Deafen",
                    description: "Oprește automat sunetul (deafen) la intrarea într-un canal vocal (te trece și pe mute)"
                },
                instantScreenshare: {
                    label: "Instant Screenshare",
                    description: "Activează funcția de partajare automată a ecranului"
                },
                keybindScreenshare: {
                    label: "Scurtătură tastatură partajare",
                    description: "Partajare ecran prin scurtătură în setările de taste Discord"
                },
                focusDiscord: {
                    label: "Focalizează Discord",
                    description: "Începe partajarea ecranului prin scurtătură doar când Discord este în prim-plan"
                },
                toolboxManagement: {
                    label: "Gestionare Toolbox",
                    description: "Activează/Dezactivează Instant Screenshare"
                }
            },
            toolbox: {
                label: "Instant Screenshare",
                toast: "Instant Screenshare este {{state}}",
                enabled: "Activat",
                disabled: "Dezactivat"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Criptează-ți mesajele într-un mod care nu trezește suspiciuni!",
            option: {
                savedPasswords: {
                    label: "Parole salvate",
                    description: "Parole salvate (separate prin , )"
                }
            },
            button: {
                encrypt: "Criptează mesajul",
                decrypt: "Decriptează mesajul",
                hidden: "Indicator mesaj ascuns (InvisibleChat)"
            },
            tooltip: {
                hidden: "Acest mesaj conține un mesaj ascuns! (InvisibleChat)"
            },
            embed: {
                title: "Mesaj decriptat",
                footer: "Trimis cu InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Criptează mesajul",
                    secret: "Secret",
                    cover: "Text de acoperire (2 sau mai multe cuvinte!!)",
                    password: "Parolă",
                    dontUseCover: "Nu folosi text de acoperire",
                    send: "Trimite",
                    cancel: "Anulează"
                },
                decrypt: {
                    title: "Decriptează mesajul",
                    with: "Mesaj cu criptare",
                    password: "Parolă",
                    decrypt: "Decriptează",
                    cancel: "Anulează"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Vă permite să editați valorile implicite atunci când creați invitații pentru server.",
            option: {
                inviteDuration: {
                    label: "Durata invitației",
                    description: "Durata implicită pentru invitațiile de server",
                    thirtyMinutes: "30 de minute",
                    oneHour: "o oră",
                    sixHours: "6 ore",
                    twelveHours: "12 ore",
                    oneDay: "o zi",
                    sevenDays: "7 zile",
                    forever: "Niciodată"
                },
                maxUses: {
                    label: "Utilizări maxime",
                    description: "Numărul maxim implicit de utilizări pentru invitațiile de server",
                    unlimited: "Nelimitat",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Calitate de membru temporar",
                    description: "Calitatea de membru temporar implicită pentru invitațiile de server"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Face culorile numelor de utilizator în chat unice, ca în clienții IRC",
            option: {
                lightness: {
                    label: "Luminozitate",
                    description: "Luminozitate în %. Modifică dacă culorile sunt prea deschise sau prea închise"
                },
                memberListColors: {
                    label: "Culori în lista de membri",
                    description: "Înlocuiește culorile rolurilor în lista de membri"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Aplică culoarea doar utilizatorilor fără culoare",
                    description: "Aplică culori doar utilizatorilor care nu au o culoare predefinită"
                },
                applyColorOnlyInDms: {
                    label: "Aplică culoarea doar în DM-uri",
                    description: "Aplică culori doar în mesajele directe; nu aplica culori pe servere."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Salvează local pe toată lumea cu care ai comunicat (inclusiv serverele), în caz de pierdere a datelor",
            section: {
                description: "Oferă o listă a utilizatorilor pe care i-ai menționat sau cărora le-ai răspuns, sau a celor care dețin serverele din care faci parte (proprietar server*), sau sunt membri ai breslei tale",
                empty: "Momentan este gol.",
                tooltip: "{{user}}, actualizat la {{updatedAtContent}}",
                owner: "Proprietar server",
                iRememberYou: "I Remember You"
            },
            context: {
                user: "Opțiuni utilizator",
                copy: "Copiază ID utilizator",
                copyToast: "ID utilizator copiat în clipboard",
                view: "Vezi profil"
            },
            modal: {
                title: "Editor",
                filter: "Filtrează după etichetă, nume utilizator, ID",
                button: {
                    validate: "Validează și Salvează",
                    cancel: "Anulează",
                    openEditor: "Deschide Editorul",
                    resetData: "Resetează stocarea",
                    sure: "Ești sigur?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Adaugă opțiuni în meniul contextual pentru a sări la începutul sau la sfârșitul unui canal/DM",
            context: {
                top: "Sari la primul mesaj",
                bottom: "Sari la ultimul mesaj",
                noMessages: "Nu s-au găsit mesaje de la acest utilizator în acest canal.",
                searchFailed: "Căutarea mesajelor a eșuat."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Încearcă să navigheze către canalul în care te aflai înainte de a schimba contul sau de a încărca Discord."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Adaugă efecte sonore de tip OperaGX sau osu! atunci când tastezi.",
            option: {
                volume: {
                    label: "Volum",
                    description: "Volumul sunetelor de tastatură"
                },
                soundPack: {
                    label: "Pachet de sunete",
                    description: "Pachetul de sunete utilizat pentru tastare",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Trimite o notificare dacă un mesaj conține anumite cuvinte cheie sau expresii regulate (regex)",
            idHolder: "ID",
            keywordEntry: "Introducere cuvânt cheie",
            regexHolder: "exemplu|regex",
            ignoreCase: "Ignoră majusculele",
            whiteblackLabel: "Whitelist/Blacklist",
            tab: {
                title: "Cuvinte cheie",
                clearAll: "Șterge tot"
            },
            button: {
                addId: "Adaugă ID",
                addKeyword: "Adaugă cuvânt cheie"
            },
            listTypeSelector: {
                blacklist: "Blacklist",
                whitelist: "Whitelist",
                placeholder: "Selectează un tip de listă"
            },
            option: {
                ignoreBots: {
                    label: "Ignoră boții",
                    description: "Ignoră mesajele trimise de boți"
                },
                amountToKeep: {
                    label: "Cantitate de păstrat",
                    description: "Numărul de mesaje de păstrat în jurnal (log)"
                },
                keywords: {
                    label: "Cuvinte cheie",
                    description: "Gestionează cuvintele cheie"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Adaugă un indicator al ultimei activități sub numele de utilizator în lista de DM-uri și în lista de membri ai serverelor sau grupurilor",
            unit: {
                d: "zi",
                h: "oră",
                m: "minut"
            },
            online: "Activ acum {{formattedTime}}"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Un mic plugin pentru rich presence ListenBrainz",
            about: {
                title: "Despre MusicBrainz API",
                description: "API-ul MusicBrainz nu necesită o cheie API, dar are nevoie de un {{link}}. Pentru majoritatea, o adresă de e-mail ar trebui să fie suficientă.",
                userAgent: "string user-agent sugestiv"
            },
            option: {
                username: {
                    label: "Nume utilizator",
                    description: "Numele de utilizator ListenBrainz"
                },
                mbContact: {
                    label: "Contact MB",
                    description: "Contact ListenBrainz"
                },
                shareUsername: {
                    label: "Partajează numele de utilizator",
                    description: "Afișează link-ul către profilul ListenBrainz (poate fi vizibil doar pentru ceilalți utilizatori)"
                },
                shareSong: {
                    label: "Partajează melodia",
                    description: "Afișează link-ul către melodia curentă pe ListenBrainz (poate fi vizibil doar pentru ceilalți utilizatori)"
                },
                hideWithSpotify: {
                    label: "Ascunde dacă rulează Spotify",
                    description: "Ascunde prezența ListenBrainz dacă Spotify este pornit"
                },
                hideWithActivity: {
                    label: "Ascunde dacă există altă activitate",
                    description: "Ascunde prezența ListenBrainz dacă ai orice altă activitate activă"
                },
                useTimeBar: {
                    label: "Folosește bara de timp",
                    description: "Folosește durata piesei pentru a afișa o bară de timp (necesită utilizarea statusului 'Listening')"
                },
                statusName: {
                    label: "Nume status",
                    description: "Text personalizat pentru status"
                },
                nameFormat: {
                    label: "Format nume",
                    description: "Arată numele melodiei și al artistului în numele statusului",
                    custom: "Folosește nume status personalizat",
                    artistSong: "Folosește formatul 'artist - melodie'",
                    songArtist: "Folosește formatul 'melodie - artist'",
                    artistOnly: "Arată doar artistul",
                    songOnly: "Arată doar melodia",
                    albumName: "Folosește numele albumului (revine la textul personalizat dacă melodia nu are album)"
                },
                useListeningStatus: {
                    label: "Folosește statusul 'Listening'",
                    description: "Afișează statusul 'Ascultă' în loc de 'Se joacă'"
                },
                missingArt: {
                    label: "Copertă lipsă",
                    description: "Când albumul sau coperta lipsesc",
                    listenbrainzLogo: "Folosește logo-ul mare ListenBrainz",
                    generic: "Folosește un înlocuitor generic"
                },
                useLogo: {
                    label: "Folosește Logo",
                    description: "Arată logo-ul ListenBrainz pe coperta albumului"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Înlocuiește citatele de încărcare ale Discord",
            option: {
                replaceEvents: {
                    label: "Înlocuiește evenimentele",
                    description: "Ar trebui ca acest plugin să se aplice și în timpul evenimentelor cu citate tematice speciale? (ex. Halloween)"
                },
                enablePluginPresetQuotes: {
                    label: "Activează citatele predefinite ale pluginului",
                    description: "Activează setul de citate oferit de acest plugin"
                },
                enableDiscordPresetQuotes: {
                    label: "Activează citatele predefinite Discord",
                    description: "Activează citatele standard Discord (inclusiv cele de eveniment)"
                },
                additionalQuotes: {
                    label: "Citate adiționale",
                    description: "Citate personalizate suplimentare care pot apărea, separate prin delimitatorul de mai jos"
                },
                additionalQuotesDelimiter: {
                    label: "Delimitator citate adiționale",
                    description: "Simbolul folosit pentru a separa citatele suplimentare"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Îți permite să te autentifici pe alt dispozitiv prin scanarea unui cod QR, exact ca pe mobil!",
            option: {
                scanQr: {
                    label: "Scanează cod QR",
                    description: "Scanează un cod QR",
                    notEnabled: "Activează pluginul și repornește clientul pentru a scana un cod QR de autentificare"
                }
            },
            neverScan: "Nu scana niciodată un cod QR de autentificare primit de la un alt utilizator sau aplicație.",
            hold: "Ține apăsat pentru a confirma autentificarea",
            scanning: "Se scanează...",
            stopScanning: "Oprește scanarea",
            usingWebcam: "Scanează folosind camera web",
            dragDrop: "Trage și plasează o imagine aici, sau dă click pentru a selecta una",
            orPaste: "Sau lipește o imagine din clipboard!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Permite modificarea vitezei de redare (implicite) pentru conținutul media încorporat",
            playbackSpeed: "Viteză redare",
            context: {
                label: "Control viteză redare"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Viteză implicită mesaje vocale",
                    description: "Mesaje vocale"
                },
                defaultVideoSpeed: {
                    label: "Viteză implicită video",
                    description: "Videoclipuri"
                },
                defaultAudioSpeed: {
                    label: "Viteză implicită audio",
                    description: "Fișiere audio"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Afișează numărul de membri online, totalul membrilor și utilizatorii din canalele vocale — în lista de membri și în tooltip.",
            option: {
                toolTip: {
                    label: "Tooltip",
                    description: "Arată numărul de membri în tooltip-ul serverului"
                },
                memberList: {
                    label: "Listă membri",
                    description: "Arată numărul de membri în antetul listei de membri"
                },
                voiceActivity: {
                    label: "Activitate vocală",
                    description: "Arată numărul de utilizatori aflați în canalele vocale"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} online în acest canal",
            totalMembers: "{{formattedTotalCount}} membri în total pe server",
            totalVoice: "{{formattedVoiceCount}} membri în apel vocal"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Afișează avatarele utilizatorilor și pictogramele de rol în interiorul mențiunilor",
            option: {
                showAtSymbol: {
                    label: "Arată simbolul @",
                    description: "Dacă simbolul @ ar trebui afișat în mențiunile de utilizator"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Adaugă un buton în bara de chat pentru a face 'miau' (meow)",
            button: {
                meow: "Miau"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Unește mesajele trimise într-un interval scurt de timp cu mesajul tău anterior, dacă nimeni altcineva nu a trimis un mesaj între timp.",
            option: {
                timePeriod: {
                    label: "Perioadă de timp",
                    description: "Durata intervalului pentru unire (în secunde)."
                },
                shouldMergeWithAttachment: {
                    label: "Unește cu atașamente",
                    description: "Ar trebui mesajul să fie unit dacă ultimul mesaj conține un atașament?"
                },
                useSpace: {
                    label: "Folosește spațiu",
                    description: "Dacă să se adauge un spațiu între mesaje la unire în loc de rând nou."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Ține apăsat Backspace și dă click pentru a șterge, sau dublu click pentru a edita/răspunde",
            option: {
                singleClickAction: {
                    label: "Acțiune click simplu",
                    description: "Acțiune la click simplu (mesajele tale)"
                },
                singleClickModifier: {
                    label: "Modificator click simplu",
                    description: "Tasta modificatoare necesară pentru click simplu (mesajele tale)"
                },
                singleClickOthersAction: {
                    label: "Acțiune click simplu (Alții)",
                    description: "Acțiune la click simplu (mesajele altora)"
                },
                singleClickOthersModifier: {
                    label: "Modificator click simplu (Alții)",
                    description: "Tasta modificatoare necesară pentru click simplu (mesajele altora)"
                },
                doubleClickAction: {
                    label: "Acțiune dublu click",
                    description: "Acțiune la dublu click (mesajele tale)"
                },
                doubleClickOthersAction: {
                    label: "Acțiune dublu click (Alții)",
                    description: "Acțiune la dublu click (mesajele altora)"
                },
                doubleClickModifier: {
                    label: "Modificator dublu click",
                    description: "Tasta modificatoare necesară pentru dublu click"
                },
                tripleClickAction: {
                    label: "Acțiune triplu click",
                    description: "Acțiune la triplu click"
                },
                tripleClickModifier: {
                    label: "Modificator triplu click",
                    description: "Tasta modificatoare necesară pentru triplu click"
                },
                reactEmoji: {
                    label: "Emoji reacție",
                    description: "Emoji-ul folosit pentru acțiunile de reacție"
                },
                addAdditionalReacts: {
                    label: "Adaugă reacții suplimentare",
                    description: "Adaugă de asemenea și celelalte emoji-uri de reacție configurate"
                },
                additionalReactEmojis: {
                    label: "Emoji-uri reacție suplimentare",
                    description: "Emoji-uri adiționale de adăugat la acțiunea Reacție (separate prin virgulă/rând nou, max {{count}})"
                },
                disableInDms: {
                    label: "Dezactivează în DM-uri",
                    description: "Dezactivează toate acțiunile de click în mesajele directe"
                },
                disableInSystemDms: {
                    label: "Dezactivează în DM-uri de sistem",
                    description: "Dezactivează toate acțiunile de click în mesajele directe de sistem"
                },
                clickTimeout: {
                    label: "Timp expirare click",
                    description: "Intervalul de timp pentru a distinge între dublu/triplu click (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Prag menținere dublu click",
                    description: "Timpul maxim de menținere pentru acțiunile de dublu click (ms). O apăsare mai lungă permite selectarea textului"
                },
                deferDoubleClickForTriple: {
                    label: "Amână dublu click pentru triplu",
                    description: "Întârzie dublu click pentru a permite acțiuni de triplu click (dezactivează triplu click dacă e oprit)"
                },
                selectionHoldTimeout: {
                    label: "Timp expirare menținere selecție",
                    description: "Intervalul de timp care permite selectarea textului (ms)"
                },
                quoteWithReply: {
                    label: "Citat cu răspuns",
                    description: "Când citezi, răspunde de asemenea la mesaj"
                },
                useSelectionForQuote: {
                    label: "Folosește selecția pentru citat",
                    description: "Când citezi, folosește textul selectat dacă este disponibil"
                }
            },
            actions: {
                none: "Niciuna",
                delete: "Șterge",
                copyLink: "Copiază link",
                copyID: "Copiază ID",
                copyContent: "Copiază conținut",
                copyUserID: "Copiază ID utilizator",
                edit: "Editează",
                reply: "Răspunde",
                react: "Reacționează",
                openThread: "Deschide fir de discuție",
                openTab: "Deschide filă",
                quote: "Citează",
                pin: "Fixează (Pin)"
            },
            missingPermissions: {
                react: "Nu se poate reacționa: Lipsesc permisiunile",
                pin: "Nu se poate fixa: Lipsesc permisiunile",
            },
            cannotQuote: "Acest tip de mesaj nu poate fi citat",
            copy: {
                messageId: "ID mesaj copiat!",
                messageContent: "Conținut mesaj copiat!",
                userId: "ID utilizator copiat!"
            },
            linkCopied: "Link copiat!"
        },
        messageColors: {
            name: "MessageColors",
            description: "Afișează codurile de culoare de tipul #FF0042 direct în interiorul mesajelor",
            option: {
                renderType: {
                    label: "Tip randare",
                    description: "Cum să fie afișate culorile",
                    textColor: "Culoare text",
                    block: "Bloc adiacent",
                    backgroundColor: "Culoare fundal"
                },
                enableShortHexCodes: {
                    label: "Activează codurile Hex scurte",
                    description: "Activează codurile hex din 3 caractere, ex: #39f"
                },
                blockView: {
                    label: "Tip vizualizare bloc",
                    description: "Cum să fie afișate blocurile de culoare",
                    right: "Partea dreaptă",
                    left: "Partea stângă",
                    both: "Ambele părți"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Arată cât timp a durat preluarea mesajelor pentru canalul curent",
            option: {
                showIcon: {
                    label: "Arată pictogramă",
                    description: "Arată pictograma timpului de preluare în bara de mesaje"
                },
                showMs: {
                    label: "Arată milisecunde",
                    description: "Arată milisecundele în cronometrare"
                },
                iconColor: {
                    label: "Culoare pictogramă",
                    description: "Culoarea pictogramei (valoare CSS)"
                }
            },
            loaded: "Mesaje încărcate în {{time}}ms ({{timeAgo}})",
            day: "acum {{s}} zi/zile",
            hour: "acum {{s}} oră/ore",
            minute: "acum {{s}} minut/minute",
            justNow: "chiar acum"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Afișează un indicator pentru mesajele care au durat ≥n secunde să fie trimise",
            day: "zi",
            days: "zile",
            hour: "oră",
            hours: "ore",
            minute: "minut",
            minutes: "minute",
            second: "secundă",
            seconds: "secunde",
            millisecond: "milisecundă",
            milliseconds: "milisecunde",
            and: "și",
            oldKotlinDetected: "Utilizatorul este suspectat că folosește un client Discord Android vechi.",
            ahead: "Ceasul acestui utilizator este cu {{delta}} înainte.",
            delay: "Acest mesaj a fost trimis cu o întârziere de {{delta}}.",
            delayedMessage: "Mesaj întârziat",
            oldAndroidClient: "Client Discord Android vechi",
            option: {
                latency: {
                    label: "Latență",
                    description: "Pragul în secunde pentru indicatorul de latență"
                },
                detectDiscordKotlin: {
                    label: "Detectează Discord Kotlin",
                    description: "Detectează clienții Discord Android vechi"
                },
                showMillis: {
                    label: "Arată milisecunde",
                    description: "Afișează milisecundele"
                },
                ignoreSelf: {
                    label: "Ignoră-te pe tine",
                    description: "Nu adăuga indicatorul la propriile mesaje"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Adaugă o previzualizare mesajelor care conțin link către un alt mesaj",
            option: {
                messageBackgroundColor: {
                    label: "Culoare fundal mesaj",
                    description: "Culoarea de fundal pentru mesaje în embed-uri rich"
                },
                automodEmbeds: {
                    label: "Embed-uri Automod",
                    description: "Folosește embed-uri de tip automod în loc de rich embeds (mai mici, dar cu mai puține info)",
                    always: "Folosește mereu embed-uri automod",
                    prefer: "Preferă embed-urile automod, dar folosește rich embeds dacă anumit conținut nu poate fi afișat",
                    never: "Nu folosi niciodată embed-uri automod"
                },
                listMode: {
                    label: "Mod listă",
                    description: "Dacă să folosească lista de ID-uri ca blacklist sau whitelist",
                    blacklist: "Blacklist",
                    whitelist: "Whitelist"
                },
                idList: {
                    label: "Listă ID-uri",
                    description: "ID-uri de servere/canale/utilizatori de filtrat (separate prin virgulă)"
                },
                clearMessageCache: {
                    label: "Șterge cache mesaje",
                    description: "Șterge memoria cache a mesajelor corelate"
                }
            },
            noContent: {
                noAttachments: "fără conținut, {{count}} embed-uri",
                noEmbeds: "fără conținut, {{count}} atașamente",
                both: "fără conținut, {{attachments}} atașamente și {{embeds}} embed-uri"
            },
            dm: "Mesaj direct",
            groupDm: "Grup DM",
            server: "Server"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Adaugă un tooltip cu previzualizarea mesajului când treci cu mouse-ul peste link-uri de mesaje, răspunsuri și mesaje redirecționate.",
            loading: "Se încarcă...",
            option: {
                onLink: {
                    label: "Pe link",
                    description: "Arată tooltip când treci peste link-urile mesajelor"
                },
                onReply: {
                    label: "Pe răspuns",
                    description: "Arată tooltip când treci peste răspunsurile mesajelor"
                },
                onForward: {
                    label: "Pe redirecționare",
                    description: "Arată tooltip când treci peste mesajele redirecționate"
                },
                display: {
                    label: "Afișare",
                    description: "Stilul de afișare",
                    auto: "La fel ca mesajul",
                    compact: "Compact",
                    cozy: "Relaxat (Cozy)"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Înregistrează temporar mesajele șterse și editate.",
            removeMessage: "Elimină istoricul mesajului",
            removeMessageTemporary: "Elimină mesajul (Temporar)",
            clearMessageLog: "Șterge jurnalul de mesaje",
            showDiff: "Arată diferențele",
            modal: {
                edit: {
                    title: "Istoric editare mesaj",
                    tooltip: "Această stare de editare nu a fost înregistrată, deci nu poate fi afișată."
                }
            },
            option: {
                deleteStyle: {
                    label: "Stil ștergere",
                    description: "Stilul mesajelor șterse",
                    text: "Text roșu",
                    overlay: "Suprapunere roșie"
                },
                logDeletes: {
                    label: "Înregistrează ștergerile",
                    description: "Dacă să înregistreze mesajele șterse"
                },
                collapseDeleted: {
                    label: "Restrânge ștergerile",
                    description: "Dacă să restrângă mesajele șterse, similar cu mesajele blocate"
                },
                logEdits: {
                    label: "Înregistrează editările",
                    description: "Dacă să înregistreze mesajele editate"
                },
                inlineEdits: {
                    label: "Editări în rând",
                    description: "Dacă să afișeze istoricul editărilor ca parte a conținutului mesajului"
                },
                ignoreBots: {
                    label: "Ignoră boții",
                    description: "Dacă să ignore mesajele de la boți"
                },
                ignoreSelf: {
                    label: "Ignoră-te pe tine",
                    description: "Dacă să ignore propriile mesaje"
                },
                ignoreSelfEdits: {
                    label: "Ignoră editările proprii",
                    description: "Dacă să fie ignorate editările făcute de tine"
                },
                ignoreUsers: {
                    label: "Ignoră utilizatorii",
                    description: "Listă de ID-uri de utilizatori de ignorat (separate prin virgulă)"
                },
                ignoreChannels: {
                    label: "Ignoră canalele",
                    description: "Listă de ID-uri de canale de ignorat (separate prin virgulă)"
                },
                ignoreGuilds: {
                    label: "Ignoră serverele",
                    description: "Listă de ID-uri de servere de ignorat (separate prin virgulă)"
                },
                showEditDiffs: {
                    label: "Arată diferențele de editare",
                    description: "Arată diferențele vizuale între versiunile mesajului editat"
                },
                separatedDiffs: {
                    label: "Diferențe separate",
                    description: "Separă adăugările de eliminări în diferențe pentru o citire mai ușoară"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Îmbunătățește pluginul MessageLogger cu funcții suplimentare.",
            updateImageCacheDir: "Directorul cache pentru imagini a fost actualizat cu succes.",
            updateLogsDir: "Directorul pentru jurnale a fost actualizat cu succes.",
            failedUpdate: "Eșec la actualizarea directorului.",
            blacklist: "Blacklist",
            whitelist: "Whitelist",
            failedToRemove: "Eșec la eliminarea mesajului",
            successfullyImported: "Jurnalele au fost importate cu succes",
            errorImportingLogs: "Eroare la importarea jurnalelor. Verifică consola pentru mai multe informații",
            importing: "Se importă...",
            importLogs: "Importă jurnale",
            exporting: "Se exportă...",
            exportLogs: "Exportă jurnale",
            alert: {
                clearLogs: {
                    title: "Șterge jurnalele",
                    body: "Ești sigur că vrei să ștergi toate jurnalele?",
                    confirmText: "Șterge",
                    cancel: "Anulează"
                },
                clearVisibleLogs: {
                    title: "Șterge jurnalele vizibile",
                    body: "Ești sigur că vrei să ștergi {{messages}} jurnale?",
                    confirmText: "Șterge",
                    cancel: "Anulează"
                },
                cleared: "Baza de date a jurnalelor și memoria cache au fost șterse."
            },
            context: {
                title: "Message Logger",
                jumpToMessage: "Sari la mesaj",
                openUserProfile: "Deschide profil utilizator",
                copyContent: "Copiază conținut",
                copyUserId: "Copiază ID utilizator",
                copyMessageId: "Copiază ID mesaj",
                copyChannelId: "Copiază ID canal",
                copyServerId: "Copiază ID server",
                deleteLog: "Șterge jurnal",
                fromUsernameDm: "Din DM-urile lui {{username}}",
                fromGroupDm: "Din grupul DM {{channelName}}",
                fromServerChannel: "Din {{channelName}} pe {{serverName}}",
                moveTypeTo: "Mută {{type}} în {{destination}}",
                removeTypeFrom: "Elimină {{type}} din {{list}}",
                openLogsFor: "Deschide jurnalele pentru {{name}}",
                openLogs: "Deschide jurnalele",
                removeMessage: "Elimină mesajul (Permanent)",
                removeMessageHistory: "Elimină istoricul mesajului (Permanent)",
                deleteMessageHide: "Șterge mesajul (Ascunde de Message Loggers)",
                addServerToBlacklist: "Adaugă serverul în Blacklist",
                addServerToWhitelist: "Adaugă serverul în Whitelist",
                removeServerFromBlacklist: "Elimină serverul din Blacklist",
                removeServerFromWhitelist: "Elimină serverul din Whitelist",
                moveServerToBlacklist: "Mută serverul în Blacklist",
                moveServerToWhitelist: "Mută serverul în Whitelist",
                addUserToBlacklist: "Adaugă utilizatorul în Blacklist",
                addUserToWhitelist: "Adaugă utilizatorul în Whitelist",
                removeUserFromBlacklist: "Elimină utilizatorul din Blacklist",
                removeUserFromWhitelist: "Elimină utilizatorul din Whitelist",
                moveUserToBlacklist: "Mută utilizatorul în Blacklist",
                moveUserToWhitelist: "Mută utilizatorul în Whitelist",
                addChannelToBlacklist: "Adaugă canalul în Blacklist",
                addChannelToWhitelist: "Adaugă canalul în Whitelist",
                removeChannelFromBlacklist: "Elimină canalul din Blacklist",
                removeChannelFromWhitelist: "Elimină canalul din Whitelist",
                moveChannelToBlacklist: "Mută canalul în Blacklist",
                moveChannelToWhitelist: "Mută canalul în Whitelist"
            },
            type: {
                server: "Server",
                user: "Utilizator",
                channel: "Canal"
            },
            button: {
                chooseFolder: "Alege folder",
                browse: "Răsfoiește",
                clearLogs: "Șterge toate jurnalele",
                clearVisibleLogs: "Șterge jurnalele vizibile",
                sortOldest: "Sortează de la cele mai vechi",
                sortNewest: "Sortează de la cele mai noi",
                loadMore: "Încarcă mai multe",
                noResults: "Niciun rezultat în {{tab}}",
                tryOtherTabs: "Încearcă eventual în {{nextTab}} sau {{lastTab}}",
                importLogs: "Importă jurnale"
            },
            modal: {
                title: "Filtrează mesaje",
                deleted: "Șterse",
                edited: "Editate",
                ghostPing: "Ghost Pinged",
                empty: "E gol",
                importLogs: "ML Enhanced stochează acum jurnalele în indexeddb. Trebuie să imporți jurnalele vechi din directorul logs. Importarea nu va suprascrie jurnalele existente"
            },
            clear: {
                title: "Șterge jurnalele",
                description: "Ești sigur că vrei să ștergi toate jurnalele?",
                confirm: "Șterge",
                cancel: "Anulează"
            },
            option: {
                saveMessages: {
                    label: "Salvează mesajele",
                    description: "Dacă să salveze mesajele șterse și editate."
                },
                saveImages: {
                    label: "Salvează imaginile",
                    description: "Salvează atașamentele șterse."
                },
                sortNewest: {
                    label: "Sortează de la cele mai noi",
                    description: "Sortează jurnalele pornind de la cele mai recente."
                },
                cacheMessagesFromServers: {
                    label: "Cache mesaje de pe servere",
                    description: "De obicei jurnalul înregistrează doar ID-uri din whitelist și DM-uri; activarea acestei opțiuni va înregistra mesaje de pe toate serverele. Atenție: cache-ul poate atinge limita, cauzând pierderea unor mesaje. Dacă ești pe multe servere, înregistrarea poate deveni foarte voluminoasă."
                },
                ignoreBots: {
                    label: "Ignoră boții",
                    description: "Dacă să ignore mesajele de la boți"
                },
                ignoreWebhooks: {
                    label: "Ignoră Webhook-urile",
                    description: "Dacă să ignore mesajele de la webhook-uri"
                },
                ignoreSelf: {
                    label: "Ignoră-te pe tine",
                    description: "Dacă să ignore propriile mesaje"
                },
                ignoreMutedGuilds: {
                    label: "Ignoră serverele cu mute",
                    description: "Mesajele din serverele cu mute nu vor fi înregistrate. Excepție fac utilizatorii/canalele din whitelist."
                },
                ignoreMutedCategories: {
                    label: "Ignoră categoriile cu mute",
                    description: "Mesajele din canalele ce aparțin categoriilor cu mute nu vor fi înregistrate."
                },
                ignoreMutedChannels: {
                    label: "Ignoră canalele cu mute",
                    description: "Mesajele din canalele cu mute nu vor fi înregistrate."
                },
                alwaysLogDirectMessages: {
                    label: "Înregistrează mereu mesajele directe",
                    description: "Înregistrează mereu DM-urile"
                },
                alwaysLogCurrentChannel: {
                    label: "Înregistrează mereu canalul curent",
                    description: "Înregistrează mereu canalul selectat curent. Canalele/utilizatorii din blacklist vor fi totuși ignorați."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Elimină jurnalul permanent în mod implicit",
                    description: "Butonul de eliminare al MessageLogger va șterge jurnalele definitiv"
                },
                hideMessageFromMessageLoggers: {
                    label: "Ascunde mesajul de loggere",
                    description: "Adaugă un buton în meniul contextual pentru a șterge mesaje fără ca acestea să fie înregistrate de alte loggere. Folosește pe propriul risc."
                },
                showLogsButton: {
                    label: "Arată butonul Jurnale",
                    description: "Comută afișarea butonului în bara de unelte"
                },
                showWhereMessageIsFrom: {
                    label: "Arată originea mesajului",
                    description: "Arată numele canalului/autorului și numele serverului"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Mesaje afișate simultan în jurnale",
                    description: "Numărul de mesaje afișate simultan și numărul de mesaje încărcate la derulare."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Text înlocuire pentru mesaje ascunse",
                    description: "Conținutul cu care este înlocuit mesajul atunci când folosești funcția de ascundere."
                },
                messageLimit: {
                    label: "Limită mesaje",
                    description: "Numărul maxim de mesaje salvate. Cele mai vechi sunt șterse la atingerea limitei. 0 înseamnă fără limită"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Limită dimensiune atașament (MB)",
                    description: "Dimensiunea maximă a unui atașament pentru a fi salvat."
                },
                attachmentFileExtensions: {
                    label: "Extensii atașamente",
                    description: "Listă de extensii salvate (ex: jpg, png). Lasă gol pentru toate."
                },
                cacheLimit: {
                    label: "Limită Cache",
                    description: "Numărul maxim de mesaje păstrate în memoria cache."
                },
                timeBasedCleanupMinutes: {
                    label: "Curățare bazată pe timp (minute)",
                    description: "Intervalul la care se realizează curățarea mesajelor vechi."
                },
                preserveCurrentChannel: {
                    label: "Protejează canalul curent",
                    description: "Mesajele din canalul selectat nu vor fi afectate de curățarea automată."
                },
                whitelistedIds: {
                    label: "ID-uri Whitelist",
                    description: "ID-uri de servere, canale sau utilizatori permise."
                },
                blacklistedIds: {
                    label: "ID-uri Blacklist",
                    description: "ID-uri de servere, canale sau utilizatori interzise."
                },
                imageCacheDir: {
                    label: "Director Cache Imagini",
                    description: "Selectează directorul pentru imaginile salvate"
                },
                logsDir: {
                    label: "Director Jurnale",
                    description: "Selectează directorul pentru jurnale"
                },
                importLogs: {
                    label: "Importă jurnale",
                    description: "Importă jurnale din fișier"
                },
                exportLogs: {
                    label: "Exportă jurnale",
                    description: "Exportă jurnalele din IndexedDB"
                },
                openLogs: {
                    label: "Deschide jurnalele",
                    description: "Deschide interfața jurnalelor"
                },
                openImageCacheFolder: {
                    label: "Deschide folderul cache imagini",
                    description: "Deschide directorul cache pentru imagini"
                },
                clearLogs: {
                    label: "Șterge jurnalele",
                    description: "Șterge jurnalele",
                    title: "Șterge jurnalele",
                    body: "Ești sigur că vrei să ștergi toate jurnalele?",
                    confirmText: "Șterge",
                    cancel: "Anulează"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Primește notificări de tip toast când anumiți utilizatori trimit un mesaj",
            dm: "DM-urile lor",
            option: {
                users: {
                    label: "Utilizatori",
                    description: "Listă de ID-uri de utilizatori (separate prin virgulă) pentru care să primești notificări",
                    invalidId: "{{id}} nu este un ID de utilizator valid"
                }
            },
            notification: {
                title: "{{username}} a trimis un mesaj",
                body: "Click pentru a sări la {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Îți permite să salvezi mesaje (etichete) și să le folosești printr-o comandă simplă.",
            notExist: "Eticheta **{{tagname}}** nu mai există! Te rugăm să reîncarci Discord pentru a remedia :)",
            alreadyExist: "O etichetă cu numele **{{tagname}}** există deja!",
            sentTag: "Eticheta **{{tagname}}** a fost trimisă!",
            successCreate: "Eticheta **{{tagname}}** a fost creată!",
            allTags: "Toate etichetele tale:",
            noTags: "Hopa! Nu există nicio etichetă încă, folosește /tag create pentru a crea una!",
            noDeleteTag: "Eticheta **{{tagname}}** nu există, deci nu poate fi ștearsă!",
            successDelete: "Eticheta **{{name}}** a fost ștearsă cu succes!",
            tagPreview: "O etichetă cu numele **{{name}}** nu există!",
            option: {
                clyde: {
                    label: "Mesaj Clyde la trimitere",
                    description: "Dacă este activat, Clyde îți va trimite un mesaj efemer când o etichetă a fost folosită."
                },
                tagsList: {
                    label: "Listă etichete",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Gestionează propriile etichete",
                    option: {
                        create: {
                            description: "Creează o etichetă nouă",
                            name: "Numele etichetei care va declanșa răspunsul",
                            message: "Mesajul care va fi trimis la utilizarea acestei etichete"
                        },
                        list: {
                            description: "Listează toate etichetele tale"
                        },
                        delete: {
                            description: "Elimină o etichetă proprie",
                            name: "Numele etichetei de eliminat"
                        },
                        preview: {
                            description: "Previzualizează o etichetă fără a o trimite public",
                            name: "Numele etichetei de previzualizat"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Adaugă o pictogramă de test loopback pentru microfon în panoul utilizatorului",
            button: "Test microfon Loopback"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Diverse ajustări pentru click-ul de mijloc, precum lipirea (paste) și deschiderea link-urilor.",
            option: {
                openScope: {
                    label: "Domeniu deschidere",
                    description: "Previne deschiderea acestor tipuri de conținut la click-ul de mijloc.",
                    links: "Link-uri",
                    media: "Conținut media",
                    linksAndMedia: "Link-uri și Media",
                    none: "Niciunul"
                },
                pasteScope: {
                    label: "Domeniu lipire (Paste)",
                    description: "Previne lipirea conținutului la click-ul de mijloc în aceste situații.",
                    always: "Previne mereu lipirea la click mijloc",
                    focus: "Previne doar când zona de text nu este focalizată",
                },
                pasteThreshold: {
                    label: "Prag lipire",
                    description: "Milisecunde până când lipirea este reactivată după un click de mijloc."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock și altele",
            command: {
                echo: {
                    description: "Trimite un mesaj ca fiind Clyde (local)"
                },
                lenny: {
                    description: "Trimite o față de tip Lenny"
                },
                mock: {
                    description: "mOcK PeOpLe (ironizează textul)"
                },
                wordcount: {
                    description: "Numără cuvintele dintr-un mesaj",
                    response: "Mesajul conține {{count}} cuvinte."
                },
                flipcoin: {
                    description: "Dă cu banul și returnează cap sau pajură",
                    heads: "Cap",
                    tails: "Pajură",
                    response: "Banul a căzut pe {{result}}."
                },
                ask: {
                    description: "Pune o întrebare cu răspuns da/nu și primește un răspuns",
                    yes: "Da",
                    no: "Nu",
                    maybe: "Poate",
                    askAgain: "Întreabă mai târziu",
                    definitelyNot: "Cu siguranță nu",
                    itIsCertain: "Este sigur"
                },
                randomanimal: {
                    description: "Obține o poză aleatorie cu un animal",
                    animal: "alege animalul",
                    cat: "pisică",
                    dog: "câine",
                    response: "Scuze, nu am putut prelua o poză cu un animal acum"
                },
                randomnumber: {
                    description: "Generează un număr aleatoriu între două valori",
                    min: "Valoare minimă",
                    max: "Valoare maximă",
                    response: "Număr aleatoriu între {{min}} și {{max}}: {{number}}"
                },
                choose: {
                    description: "Alege aleatoriu dintre opțiunile oferite",
                    option: "Listă de opțiuni separate prin virgulă",
                    response: "Aleg: {{choice}}"
                },
                systeminfo: {
                    description: "Afișează informații despre sistem",
                    platform: "Platformă",
                    deviceType: "Tip dispozitiv",
                    mobile: "Mobil",
                    desktop: "Desktop",
                    browser: "Browser",
                    cpuCores: "Nuclee CPU",
                    memory: "Memorie",
                    screen: "Ecran",
                    languages: "Limbi",
                    network: "Rețea",
                    online: "Online",
                    offline: "Offline",
                    failedToFetch: "Eșec la preluarea informațiilor de sistem",
                    unknown: "Necunoscut"
                },
                getuptime: {
                    description: "Obține timpul de funcționare al clientului",
                    response: "**Uptime Client**: {{uptime}} minute"
                },
                gettime: {
                    description: "Obține ora curentă",
                    response: "Ora curentă este {{time}}"
                },
                transform: {
                    description: "Transformă textul folosind opțiunea specificată",
                    transformation: {
                        description: "Transformarea de aplicat textului",
                        lowercase: "Convertește textul în minuscule",
                        uppercase: "Convertește textul în majuscule",
                        localeLowercase: "Convertește în minuscule (locale)",
                        localeUppercase: "Convertește în majuscule (locale)",
                        same: "Rămâne neschimbat"
                    },
                    repeat: "de câte ori să se repete",
                    reverse: "dacă să inverseze textul",
                    normalize: {
                        description: "Forma de normalizare a textului",
                        nfc: "Forma de normalizare C (NFC)",
                        nfd: "Forma de normalizare D (NFD)",
                        nfkc: "Forma de normalizare KC (NFKC)",
                        nfkd: "Forma de normalizare KD (NFKD)"
                    },
                    text: "Transformă acest text"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Adaugă mai multe Kaomoji în Discord. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Îmbunătățește butoanele de reacție rapidă din meniul contextual al mesajelor.",
            option: {
                reactionCount: {
                    label: "Număr reacții",
                    description: "Numărul de reacții (0-42)"
                },
                frequentEmojis: {
                    label: "Emoji-uri frecvente",
                    description: "Folosește emoji-urile frecvente în loc de cele favorite"
                },
                rows: {
                    label: "Rânduri",
                    description: "Numărul de rânduri de reacții rapide afișate"
                },
                columns: {
                    label: "Coloane",
                    description: "Numărul de coloane de reacții rapide afișate"
                },
                compactMode: {
                    label: "Mod compact",
                    description: "Redimensionează butoanele la 75%, mărind în același timp emoji-ul interior la 125%. Recomandat să ai minim 5 coloane"
                },
                scroll: {
                    label: "Scroll",
                    description: "Activează derularea listei de emoji-uri"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Adaugă etichete pentru webhook-uri și roluri de moderare (proprietar, admin etc.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Acest utilizator este un webhook"
                },
                owner: {
                    name: "Proprietar",
                    description: "Deține serverul"
                },
                admin: {
                    name: "Admin",
                    description: "Are permisiunea de administrator"
                },
                staff: {
                    name: "Staff",
                    description: "Poate gestiona serverul, canalele sau rolurile"
                },
                mod: {
                    name: "Mod",
                    description: "Poate gestiona mesaje sau poate da afară/bana persoane"
                },
                vcmod: {
                    name: "VC Mod",
                    description: "Poate gestiona chaturile vocale"
                },
                chatmod: {
                    name: "Chat Mod",
                    description: "Poate gestiona mesajele"
                }
            },
            modal: {
                example: "Exemplu",
                tag: "Etichetă",
                customTextPlaceholder: "Text pe etichetă (implicit: {{displayName}})",
                messages: "Arată în mesaje",
                memberList: "Arată în lista de membri și profiluri"
            },
            option: {
                dontShowForBots: {
                    label: "Nu arăta pentru boți",
                    description: "Nu afișa etichete suplimentare pentru boți (excluzând webhook-urile)"
                },
                dontShowBotTag: {
                    label: "Nu arăta eticheta 'BOT'",
                    description: "Arată doar etichetele extra pentru boți / Ascunde textul [APP]"
                },
                showWebhookTagFully: {
                    label: "Arată eticheta webhook complet",
                    description: "Arată eticheta Webhook în canalele urmărite, cum ar fi cele de anunțuri"
                },
                tagSettings: {
                    label: "Setări etichetă",
                    description: "configurează etichetele"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "O comandă slash pentru a traduce în/din codul Morse.",
            command: {
                morse: {
                    description: "Tradu în sau din codul Morse",
                    message: "Textul de convertit"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Volum",
                    description: "Volumul pentru 🗿🗿🗿"
                },
                quality: {
                    label: "Calitate",
                    description: "Calitatea pentru 🗿🗿🗿",
                    normal: "Normală",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Declanșează când fereastra nu este focalizată",
                    description: "Declanșează 🗿 chiar și când fereastra nu este în prim-plan"
                },
                ignoreBots: {
                    label: "Ignoră boții",
                    description: "Ignoră mesajele de la boți"
                },
                ignoreBlocked: {
                    label: "Ignoră utilizatorii blocați",
                    description: "Ignoră mesajele de la utilizatorii blocați"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Controale muzicale și versuri pentru multiple servicii",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Arată controale Spotify",
                    description: "Afișează controalele muzicale pentru Spotify"
                },
                showSpotifyLyrics: {
                    label: "Arată versuri Spotify",
                    description: "Afișează versurile pentru Spotify"
                },
                useSpotifyUris: {
                    label: "Folosește URI-uri Spotify",
                    description: "Deschide URI-uri Spotify în loc de URL-uri. Funcționează doar dacă ai Spotify instalat"
                },
                previousButtonRestartsTrack: {
                    label: "Butonul Înapoi repornește piesa",
                    description: "Repornește piesa curentă la apăsarea butonului 'înapoi' dacă timpul scurs este >3s"
                },
                tidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Arată controale Tidal",
                    description: "Afișează controalele muzicale pentru Tidal"
                },
                showTidalLyrics: {
                    label: "Arată versuri Tidal",
                    description: "Afișează versurile pentru Tidal"
                },
                websocketURL: {
                    label: "URL Websocket",
                    description: "Valoarea implicită este ws://localhost:24123"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "{{app}} este necesar pentru aceste setări"
                },
                showYoutubeMusicControls: {
                    label: "Arată controale YouTube Music",
                    description: "Afișează controalele muzicale pentru YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL API YouTube Music",
                    description: "URL-ul pentru serverul API YouTube Music pe care îl folosești"
                },
                hoverControls: {
                    label: "Controale la hover",
                    description: "Arată controalele doar când treci cu mouse-ul peste"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Arată notă muzicală când nu există versuri",
                    description: "Afișează o pictogramă cu o notă muzicală când nu sunt găsite versuri"
                },
                lyricsPosition: {
                    label: "Poziție versuri",
                    description: "Poziția panoului cu versuri",
                    above: "Deasupra player-ului",
                    below: "Sub player"
                },
                lyricsProvider: {
                    label: "Furnizor versuri",
                    description: "Sursa de unde sunt preluate versurile",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "URL API Versuri Spotify",
                    description: "URL-ul de bază al API-ului pentru versuri Spotify."
                },
                translateTo: {
                    label: "Tradu în",
                    description: "Tradu versurile în limba selectată - Schimbarea acestei setări va șterge traducerile existente",
                    cleared: "Traducere ștearsă"
                },
                lyricsConversion: {
                    label: "Conversie versuri",
                    description: "Tradu sau romanizează automat versurile",
                    none: "Niciuna",
                    translate: "Tradu",
                    romanize: "Romanizează (Romanise)"
                },
                fallbackProvider: {
                    label: "Furnizor de rezervă",
                    description: "Când un furnizor de versuri eșuează, încearcă alți furnizori"
                },
                showFailedToasts: {
                    label: "Arată notificări la eșec",
                    description: "Afișează notificări (toasts) când versurile nu pot fi încărcate"
                },
                purgeLyricsCache: {
                    label: "Golește cache versuri",
                    description: "Șterge toate versurile și traducerile salvate în cache",
                    button: "Golește Cache",
                    cacheLyricsPurged: "Cache-ul de versuri a fost golit"
                }
            },
            context: {
                spotify: {
                    label: "Meniu versuri Spotify",
                    type: "Meniu Spotify {{type}}",
                    copy: "Copiază nume {{type}}",
                    link: "Copiază link {{type}}",
                    open: "Deschide {{type}} în Spotify",
                    album: "Meniu Album Spotify"
                },
                tidal: {
                    label: "Meniu versuri Tidal",
                    lyrics: "Versuri Tidal",
                    type: "Meniu Tidal {{name}}",
                    copy: "Copiază nume {{name}}",
                    open: "Deschide {{name}} în Tidal",
                    album: "Meniu Album Tidal"
                },
                ytm: {
                    type: "Meniu YouTube Music {{name}}",
                    copy: "Copiază nume {{name}}",
                    open: "Deschide {{name}} în YouTube Music",
                    album: "Meniu Album YouTube Music",
                    muted: "Fără sunet"
                },
                lyrics: {
                    provider: "Furnizor versuri",
                    saved: "salvat",
                    notFound: "Nu s-au găsit versuri sincronizate"
                },
                copy: {
                    currentLyrics: "Copiază versurile actuale"
                }
            },
            alert: {
                lyricCopied: "Versul a fost copiat în clipboard!",
                noLyrics: "Fără versuri",
                noLyricsTo: "Fără versuri pentru {{translated}}",
                translate: "traducere",
                romanize: "romanizare",
                lyricsFetchFailed: "Preluarea versurilor a eșuat",
                failedToFetchLyrics: "Eșec la preluarea {{translated}}",
                translation: "traducere",
                romanization: "romanizare",
                failedToFetchTranslation: "Eșec la preluarea versurilor pentru {{translated}}"
            },
            modal: {
                install: {
                    title: "Cum se instalează",
                    install: "Instalează {{link}} de aici, apoi mergi la setări TidalLuna → Plugin stores → Install @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Nicio piesă în redare",
                    artist: "Artist:",
                    album: "Album:",
                    noLyrics: "Versuri indisponibile :(",
                    progress: "Progres",
                    totalDuration: "Durată totală"
                },
                type: {
                    song: "Melodie",
                    artist: "Artist",
                    album: "Album"
                },
                album: {
                    open: "Deschide Album",
                    viewCover: "Vezi copertă album",
                    volume: "Volum",
                    image: "Imagine Album"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Tradus",
                romanized: "Romanizat",
                none: "Niciunul"
            },
            error: {
                failed: "Eșec la randarea ferestrei modale :(",
                checkConsole: "Verifică consola pentru erori",
                invalidUrlCustomApi: "Format URL invalid pentru URL-ul serverului Custom API"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Afișează grupurile DM comune în profiluri",
            no: "Niciun grup comun",
            mutualGroup: "{{count}} grup(uri) comun(e)",
            members: "Membri",
            noGroup: "Niciun grup DM în comun",
            header: "Grupuri comune"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Împiedică previzualizările în apel/PiP (partajare ecran, stream-uri etc.) să intre în pauză chiar dacă clientul pierde focalizarea",
            about: "Acest plugin va face ca Discord să folosească mai multe resurse decât de obicei"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Pune automat pe mute serverele noi și modifică diverse alte setări la intrarea pe acestea",
            context: {
                apply: "Aplică NewGuildSettings"
            },
            option: {
                guild: {
                    label: "Mute Server",
                    description: "Pune serverul pe mute automat"
                },
                messages: {
                    label: "Setări notificări server",
                    description: "Setări notificări server",
                    all: "Toate mesajele",
                    mentions: "Doar mențiunile @",
                    nothing: "Nimic",
                    default: "Implicit server"
                },
                everyone: {
                    label: "Suprimă @everyone și @here",
                    description: "Suprimă mențiunile @everyone și @here"
                },
                role: {
                    label: "Suprimă toate mențiunile de rol",
                    description: "Suprimă toate mențiunile @rol"
                },
                highlights: {
                    label: "Suprimă evidențierile (Highlights)",
                    description: "Suprimă evidențierile automat"
                },
                events: {
                    label: "Mute evenimente noi",
                    description: "Pune pe mute evenimentele noi automat"
                },
                showAllChannels: {
                    label: "Arată toate canalele",
                    description: "Afișează toate canalele automat"
                },
                mobilePush: {
                    label: "Mute notificări push pe mobil",
                    description: "Pune pe mute notificările push de pe mobil automat"
                },
                voiceChannels: {
                    label: "Canale vocale",
                    description: "Ascunde automat numele în canalele vocale"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Utilitar care te notifică atunci când sunt adăugate pluginuri noi în Plexcord",
            modal: {
                title: "Pluginuri și setări noi",
                description: "Pluginuri și setări noi au fost adăugate de la ultima ta vizită. Te rugăm să verifici noutățile de mai jos.",
                tooltip: "Închide pentru această sesiune",
                dontShowAgain: "Nu mai afișa",
                restartRequired: "Este necesară repornirea pentru a aplica modificările",
                restart: "Repornește",
                continue: "Continuă"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Readuce eticheta botului la forma sa originală"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Ascunde complet din chat toate mesajele blocate sau ignorate",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Ascunde și utilizatorii ignorați",
                    description: "Ascunde de asemenea mesajele de la utilizatorii ignorați."
                },
                disableNotifications: {
                    label: "Dezactivează notificările",
                    description: "Ascunde notificările de mesaje noi pentru utilizatorii blocați. Mereu activ dacă 'Default Hide Users' este activat mai jos și utilizatorul nu este exceptat."
                },
                allowAutoModMessages: {
                    label: "Permite mesajele AutoMod",
                    description: "Permite mesajelor trimise de AutoMod să ocolească filtrarea."
                },
                hideBlockedUserReplies: {
                    label: "Ascunde răspunsurile utilizatorilor blocați",
                    description: "Ascunde mesajele de la utilizatorii blocați în firele de discuție (threads) la care ai participat."
                },
                defaultHideUsers: {
                    label: "Ascundere utilizatori implicită",
                    description: "Dacă este activat, mesajele de la utilizatorii blocați vor fi complet ascunse, iar cele de la ID-urile din lista de excepții vor fi doar restrânse (comportament implicit Discord). Dacă este dezactivat, se întâmplă invers."
                },
                overrideUsers: {
                    label: "Utilizatori exceptați",
                    description: "Listă de ID-uri (separate prin virgulă) care vor fi ascunse sau restrânse contrar comportamentului implicit ales mai sus."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Te împiedică să tastezi puncte de listă markdown (urâte)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Dezactivează funcția redundantă de deep linking a Discord care încearcă să te forțeze să folosești aplicația de desktop"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Elimină cerința de a introduce numele serverului atunci când ștergi un server",
            option: {
                confirmModal: {
                    label: "Fereastră confirmare",
                    description: "Ar trebui să fie afișată o fereastră de confirmare 'Ești sigur că vrei să ștergi?'"
                }
            },
            modal: {
                title: "Ștergi serverul?",
                body: "Este o acțiune permanentă, în caz că nu era evident.",
                confirm: "Șterge",
                cancel: "Anulează"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Dezactivează bannerul 'HOLD UP' din consolă. Ca efect secundar, împiedică Discord să-ți ascundă token-ul, ceea ce previne deconectările aleatorii."
        },
        noF1: {
            name: "NoF1",
            description: "Dezactivează scurtătura F1 pentru ajutor."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Lipirea unui link peste un text selectat nu va crea un URL mascat"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Împiedică camera să fie afișată în oglindă pe ecranul tău"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Elimină animația de 300ms la deschiderea sau închiderea ferestrelor modale"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Elimină mozaicul de imagini din Discord",
            option: {
                inlineVideo: {
                    label: "Video în rând (Inline)",
                    description: "Redă videoclipurile fără fereastra tip carusel"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Elimină TOATE reclamele de tip Nitro făcând clientul să creadă că ai deja abonament Nitro."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Sare peste procesul de 'onboarding' al Discord pentru o intrare mai rapidă pe servere."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Sare peste întârzierea lentă și enervantă a procesului de onboarding"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Elimină contorul de cereri de prietenie primite, mesaje cerute și oferte Nitro.",
            option: {
                hideFriendRequestsCount: {
                    label: "Ascunde număr cereri prietenie",
                    description: "Ascunde numărul de cereri de prietenie primite"
                },
                hideMessageRequestsCount: {
                    label: "Ascunde număr cereri mesaje",
                    description: "Ascunde numărul de cereri de mesaje"
                },
                hidePremiumOffersCount: {
                    label: "Ascunde număr oferte Nitro",
                    description: "Ascunde numărul ofertelor Nitro"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Elimină complet temele de profil Nitro de la toată lumea, exceptându-te pe tine."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Ocolește cerința de 'push-to-talk' în canalele care impun acest lucru pentru activitatea vocală."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Dezactivează menționarea automată la răspunsuri",
            option: {
                userList: {
                    label: "Listă utilizatori",
                    description: "Listă de utilizatori pentru care să permiți sau să excepți mențiunile (separați prin virgulă sau spațiu)"
                },
                roleList: {
                    label: "Listă roluri",
                    description: "Listă de roluri pentru care să permiți sau să excepți mențiunile (separați prin virgulă sau spațiu)"
                },
                shouldPingListed: {
                    label: "Comportament listă",
                    description: "Cum să fie tratată lista",
                    dontPing: "Nu menționa utilizatorii / rolurile din listă",
                    onlyPing: "Menționează doar utilizatorii / rolurile din listă"
                },
                inverseShiftReply: {
                    label: "Inversare Shift + Răspuns",
                    description: "Inversează comportamentul tastei Shift la răspuns (activează pentru ca Shift + Răspuns să menționeze utilizatorul)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Elimină prefixele 'canary' sau 'ptb' din linkurile mesajelor"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Toți suntem egali!! Elimină antetele de rol din lista de membri."
        },
        noRPC: {
            name: "NoRPC",
            description: "Dezactivează Discord Rich Presence"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Nu afișa emoji-urile serverului în meniul de autocompletare.",
            option: {
                shownEmojis: {
                    label: "Emoji-uri afișate",
                    description: "Alege ce emoji-uri să apară în autocompletare",
                    onlyUnicode: "Doar emoji-uri unicode",
                    currentServer: "Emoji-uri unicode și cele de pe serverul curent",
                    all: "Emoji-uri unicode și toate emoji-urile de pe servere (implicit Discord)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Dezactivează insigna cu numărul de mesaje necitite din bara de activități (taskbar) și zona de notificare."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Face notificările de desktop mai informative"
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Setează un volum personalizat pentru notificările Discord",
            option: {
                notificationVolume: {
                    label: "Volum notificări",
                    description: "Volumul notificărilor"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Dezactivează animația de scriere din chat"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Îți permite să sari la mesajele utilizatorilor blocați, ignorați sau potențiali spammeri fără a-i debloca."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Dacă un utilizator trimite mai multe mesaje necitite în DM, vei primi o singură notificare sonoră.",
            option: {
                channelToAffect: {
                    label: "Canal vizat",
                    description: "Selectează tipul de DM afectat de plugin",
                    both: "Ambele",
                    user: "DM-uri utilizator",
                    group: "DM-uri de grup"
                },
                allowMentions: {
                    label: "Permite mențiunile",
                    description: "Primește notificări sonore pentru @mențiuni"
                },
                allowEveryone: {
                    label: "Permite @everyone",
                    description: "Primește notificări sonore pentru @everyone și @here în DM-urile de grup"
                },
                ignoreUsers: {
                    label: "Ignoră utilizatori",
                    description: "ID-uri de utilizatori (virgulă + spațiu) ale căror notificări nu vor fi NICIODATĂ limitate"
                },
                alwaysPlaySound: {
                    label: "Redă mereu sunetul",
                    description: "Redă sunetul de notificare chiar și când este dezactivat"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Deschide linkurile în aplicațiile lor respective în loc de browser",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Deschide linkurile Spotify în aplicația Spotify"
                },
                steam: {
                    label: "Steam",
                    description: "Deschide linkurile Steam în aplicația Steam"
                },
                epic: {
                    label: "Epic Games",
                    description: "Deschide linkurile Epic Games în Epic Games Launcher"
                },
                tidal: {
                    label: "Tidal",
                    description: "Deschide linkurile Tidal în aplicația Tidal"
                },
                itunes: {
                    label: "iTunes",
                    description: "Deschide linkurile Apple Music în aplicația iTunes"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Deschide linkurile VRChat în aplicația VRCX"
                }
            },
            notification: {
                open: "Link deschis în aplicația nativă"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Îți permite să suprascrii așezarea și sortarea implicită a forumurilor. Poți totuși să le schimbi individual pe canal",
            option: {
                defaultLayout: {
                    label: "Așezare implicită",
                    description: "Ce stil de așezare să fie folosit ca implicit",
                    list: "Listă",
                    gallery: "Galerie"
                },
                defaultSortOrder: {
                    label: "Sortare implicită",
                    description: "Ce ordine de sortare să fie folosită ca implicită",
                    recentlyActive: "Activitate recentă",
                    datePosted: "Data postării"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Îți permite să folosești Party Mode deoarece petrecerea nu se termină niciodată ✨",
            option: {
                superIntensePartyMode: {
                    label: "Intensitate Party Mode",
                    description: "Intensitatea efectelor",
                    normal: "Normal",
                    better: "Mai bun",
                    projectX: "Project X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Readuce opțiunea de a pune invitațiile pe pauză pe termen nelimitat, funcție pe care Discord a eliminat-o.",
            pauseIndefinitely: "Pauză nedefinită"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Dezactivează restricțiile de pe partea clientului pentru gestionarea permisiunilor canalelor.",
            option: {
                lockout: {
                    label: "Blocare acces",
                    description: "Ocolește prevenirea blocării permisiunilor ('Ești sigur că vrei să faci asta?')"
                },
                onboarding: {
                    label: "Onboarding",
                    description: "Ocolește cerințele de onboarding ('Această schimbare va face serverul incompatibil [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Vizualizează permisiunile unui utilizator sau ale unui canal, precum și rolurile unui server",
            view: "Vezi permisiunile",
            option: {
                permissionsSortOrder: {
                    label: "Ordine sortare permisiuni",
                    description: "Metoda de sortare folosită pentru a defini care rol acordă o anumită permisiune",
                    highest: "Cel mai înalt rol",
                    lowest: "Cel mai jos rol"
                }
            },
            icon: {
                denied: "Refuzat",
                allowed: "Permis",
                notOverwritten: "Nesuprascris"
            },
            context: {
                permissions: "Permisiuni"
            },
            modal: {
                title: "Permisiuni",
                noPermissions: "Nicio permisiune de afișat!",
                owner: "proprietar",
                grantedBy: "Acordată de",
                serverOwner: "Proprietar server",
                ownerRole: "Proprietar",
                sortingBy: "Sortare după {{method}}",
                highest: "Cel mai înalt rol",
                lowest: "Cel mai jos rol",
                details: "Detalii rol"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Adaugă o comandă /petpet pentru a crea GIF-uri cu mângâieri pe cap din orice imagine",
            command: {
                petpet: {
                    description: "Creează un GIF petpet. Poți specifica o singură opțiune de imagine",
                    delay: "Întârzierea dintre cadre. Implicit este 20.",
                    resolution: "Rezoluția GIF-ului. Implicit 120. Dacă introduci un număr imens și Discord blochează, este vina ta.",
                    image: "Atașament imagine de folosit",
                    url: "URL pentru a prelua imaginea",
                    user: "Utilizator al cărui avatar să fie folosit",
                    noServerPfp: "Folosește avatarul global în loc de cel specific serverului când folosești opțiunea 'user'",
                    error: {
                        noImage: "Nicio imagine specificată!",
                        delayTooLow: "Întârzierea trebuie să fie de cel puțin 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Fișierul încărcat nu este o imagine",
                fetchUserFailed: "Eșec la preluarea utilizatorului. Verifică consola pentru detalii.",
                fetchImageFailed: "A apărut o eroare la încărcarea {{url}}. Verifică consola."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Adaugă funcția Picture-in-Picture videoclipurilor (lângă butonul de Descărcare)",
            tooltip: "Comută Picture-in-Picture",
            option: {
                loop: {
                    label: "Repetare (Loop)",
                    description: "Dacă videoclipul PiP să se repete sau nu"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Îți permite să fixezi canalele private în partea de sus a listei de DM. Click dreapta pe DM pentru fixare/reordonare",
            context: {
                category: {
                    label: "Meniu categorie Pin DMs",
                    edit: "Editează categoria",
                    up: "Mută sus",
                    down: "Mută jos",
                    delete: "Șterge categoria",
                    unnamed: "oops"
                },
                pin: {
                    label: "Fixează DM",
                    addCategory: "Adaugă categorie"
                },
                unPin: {
                    label: "Anulează fixarea DM",
                    move: "Mută în categorie"
                }
            },
            option: {
                pinOrder: {
                    label: "Ordine fixare",
                    description: "În ce ordine să fie afișate DM-urile fixate?",
                    lastMessage: "Cel mai recent mesaj",
                    custom: "Personalizat (click dreapta pe canale pentru reordonare)"
                },
                canCollapseDmSection: {
                    label: "Secțiune fixată restrânsă",
                    description: "Permite restrângerea secțiunii de DM-uri necategorizate"
                },
                dmSectionCollapsed: {
                    label: "Secțiune DM restrânsă",
                    description: "Restrânge secțiunea DM"
                },
                userBasedCategoryList: {
                    label: "Listă categorii bazată pe utilizator",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Fixează categoria",
                    edit: "Editează categoria",
                    new: "Categorie nouă",
                    name: "Nume",
                    color: "Culoare",
                    save: "Salvează",
                    create: "Creează"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Notificări personalizabile cu o formătare îmbunătățită a mențiunilor",
            option: {
                friends: {
                    label: "Prieteni",
                    description: "Notifică atunci când prietenii trimit mesaje pe servere"
                },
                mentions: {
                    label: "Mențiuni",
                    description: "Notifică atunci când cineva te menționează direct"
                },
                dms: {
                    label: "DM-uri",
                    description: "Notifică pentru mesajele directe (DMs)"
                },
                showInActive: {
                    label: "Arată în canalul activ",
                    description: "Arată notificări chiar și pentru canalul deschis curent"
                },
                ignoreMuted: {
                    label: "Ignoră setările mute",
                    description: "Sare peste notificările de la servere, canale sau utilizatori cu mute"
                }
            },
            unknown: "Necunoscut",
            dm: "DM",
            groupDM: "Grup DM",
            title: "{{username}} în {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Adaugă o pictogramă de ac la mesajele fixate (pinned)"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Nu afișa pictogramele mici de server în interiorul dosarelor"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Adaugă indicatori de platformă (Desktop, Mobil, Web...) utilizatorilor",
            embeddedTooltip: "Consolă",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Listă",
                    description: "Arată indicatorii în lista de membri"
                },
                badges: {
                    label: "Insigne",
                    description: "Arată indicatorii în profilurile utilizatorilor sub formă de insigne"
                },
                messages: {
                    label: "Mesaje",
                    description: "Arată indicatorii în interiorul mesajelor"
                },
                colorMobileIndicator: {
                    label: "Colorare indicator mobil",
                    description: "Dacă indicatorul de mobil să se potrivească cu culoarea statusului utilizatorului."
                },
                showBots: {
                    label: "Arată la boți",
                    description: "Dacă să afișeze indicatorii de platformă și pentru boți"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Falsifică platforma sau dispozitivul pe care te afli",
            about: "Nu garantăm că acest plugin nu îți va aduce un avertisment sau suspendarea contului.",
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
                    label: "Platformă",
                    description: "Sub ce platformă să apari",
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
            description: "Adaugă un buton în AppBar care găzduiește acțiunile rapide Plexcord",
            tooltip: "Plexcord Toolbox",
            context: {
                openLog: "Deschide jurnal notificări",
                enableQuickCSS: "Activează QuickCSS",
                openQuickCSS: "Editează QuickCSS",
                openSettings: "Deschide setările",
                manageThemes: "Gestionare teme"
            },
            option: {
                showPluginMenu: {
                    label: "Arată meniul pluginurilor",
                    description: "Afișează meniul pluginurilor în Plexcord Toolbox"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Ajustează mesajele pentru a arăta mai bine și a avea o gramatică corectă. Vezi setările",
            option: {
                quickDisable: {
                    label: "Dezactivare rapidă",
                    description: "Dezactivează modificarea mesajelor fără a necesita reîncărcarea clientului."
                },
                blockedWords: {
                    label: "Cuvinte blocate",
                    description: "Cuvinte care nu vor fi scrise cu majusculă (separate prin virgulă)."
                },
                fixApostrophes: {
                    label: "Corectează apostrofurile",
                    description: "Asigură-te că formele contrase conțin apostrofuri."
                },
                expandContractions: {
                    label: "Extinde contracțiile",
                    description: "Extinde formele scurte (ex. I'm -> I am)"
                },
                fixCapitalization: {
                    label: "Corectează majusculele",
                    description: "Scrie începutul propozițiilor cu majusculă."
                },
                fixPunctuation: {
                    label: "Corectează punctuația",
                    description: "Corectează spațierea în jurul semnelor de punctuație."
                },
                fixPunctuationFrequency: {
                    label: "Frecvență punctuație",
                    description: "Procentajul frecvenței punctelor (poate fi enervant pentru unii).",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Îți permite să previzualizezi mesajul înainte de a-l trimite.",
            tooltip: "Previzualizează mesajul"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Îți permite să salvezi și să încarci diferite profiluri predefinite din secțiunea Profil din Setări.",
            toast: {
                importFailed: "Eșec la importarea seturilor de profil. Fișierul poate fi invalid.",
            },
            option: {
                avatarSize: {
                    label: "Dimensiune avatar",
                    description: "Dimensiunea avatarului în lista de presetări"
                }
            },
            modal: {
                override: "Suprascrie",
                merge: "Unește",
                cancel: "Anulează",
                timestamp: "{{formattedDate}} la {{formattedTime}}",
                rename: "Redenumește",
                update: "Actualizează",
                moveUp: "Mută sus",
                moveDown: "Mută jos",
                moveTo: "Mută la pagina 1",
                delete: "Șterge",
                importProfiles: "Importă profiluri",
                importText: "Ai deja {{existingCount}} profiluri salvate. Vrei să le suprascrii sau să le unești cu cele importate?",
                heading: "Profiluri salvate",
                searchProfiles: "Caută profiluri...",
                profileName: "Nume profil",
                saving: "Se salvează...",
                save: "Salvează profilul",
                cancelSearch: "Anulează căutarea",
                search: "Caută",
                random: "Aleatoriu",
                import: "Importă",
                exportAll: "Exportă tot"
            }
        },
        questify: {
            name: "Questify",
            description: "Îmbunătățește-ți experiența Quest cu o suită de funcții sau dezactivează-le complet dacă nu sunt pe placul tău.",
            quests: "Misiuni (Quests)",
            context: {
                quest: {
                    label: "Meniu buton Quest",
                    ignore: "Marchează tot ca ignorat",
                    reset: "Resetează lista de ignorate",
                    fetch: "Preia misiunile",
                    markAsIgnored: "Marchează ca ignorat",
                    unmarkAsIgnored: "Anulează marcarea ca ignorat",
                    stopAuto: "Oprește completarea automată",
                    copyQuestID: "Copiază ID misiune",
                    startAuto: "Pornește completarea automată"
                }
            },
            settings: {
                questButton: {
                    title: "Buton Quest",
                    description: "Afișează un buton Quest în lista de servere cu un indicator opțional pentru misiunile nerevendicate.",
                    leftClick: "Acțiune click stânga",
                    middleClick: "Acțiune click mijloc",
                    rightClick: "Acțiune click dreapta",
                    visibility: "Vizibilitate buton",
                    unclaimedIndicator: "Indicator nerevendicate",
                    badgeColor: "Culoare insignă",
                    rewardDisplay: "Afișare recompensă",
                    includedRewardTypes: "Tipuri de recompense incluse",
                    includedRewardTypesDesc: "Numără doar misiunile cu aceste tipuri de recompense ca fiind nerevendicate pentru vizibilitatea butonului, numărul insignei și sunetul de alertă.",
                    selectRewardTypes: "Selectează tipurile de recompense de inclus în numărătoarea celor nerevendicate...",
                    noRewardType: "Nu există nicio funcție Quest acceptată cu acest nume.",
                    default: "Implicit",
                    disable: "Dezactivează"
                },
                questFeatures: {
                    title: "Funcții Quest",
                    description: "Modifică funcții specifice ale misiunilor.",
                    popupWarning: "Opțiunea {{disablePopup}} va fi ignorată pentru misiunile finalizate și pentru urmărirea progresului.",
                    videoQuestInfo: "Opțiunea {{completeVideo}} va aștepta durata misiunii video și o va marca automat ca fiind finalizată.",
                    gameQuestInfo: "În mod similar, opțiunea {{completeGame}} va aștepta durata misiunii de joc și o va marca automat ca fiind finalizată. Această opțiune este acceptată doar pe clientul oficial de desktop.",
                    manualStartWarning: "Trebuie totuși să pornești misiunile manual. Primul click va porni misiunile în fundal. Pentru misiunile video, click-urile ulterioare vor deschide fereastra video normal. Pentru a anula, poți deschide meniul contextual pe cardul misiunii și selecta {{stopAuto}}.",
                    tosWarning: "Utilizarea oricăreia dintre aceste opțiuni contravine Termenilor și Condițiilor Discord. Folosește-le pe propriul risc.",
                    selectFeatures: "Selectează ce funcții Quest dorești să modifici.",
                    disablePopup: "Dezactivează fereastra Quest deasupra panoului de cont",
                    completeVideo: "Finalizează misiunile video în fundal",
                    completeGame: "Finalizează misiunile de joc în fundal",
                    stopAuto: "Oprește completarea automată"
                },
                restyleQuests: {
                    title: "Restilizare Misiuni",
                    description: "Evidențiază misiunile cu culori tematice opționale pentru o mai bună vizibilitate.",
                    precedenceNote: "Stilurile pentru misiunile revendicate și expirate vor avea prioritate chiar dacă o misiune este ignorată.",
                    gradientStyle: "Stil degrade (Gradient)",
                    assetPreload: "Preîncărcare resurse",
                    unclaimed: "Nerevendicate",
                    claimed: "Revendicate",
                    ignored: "Ignorate",
                    expired: "Expirate",
                    intenseGradient: "Degrade intens",
                    defaultGradient: "Degrade implicit",
                    blackGradient: "Degrade negru subtil",
                    noGradient: "Fără degrade",
                    loadAllAssets: "Încarcă toate resursele la încărcarea paginii",
                    loadDuringScroll: "Încarcă resursele în timpul derulării paginii"
                },
                reorderQuests: {
                    title: "Reordonare Misiuni",
                    description: "Sortează misiunile după starea lor. Se aplică atunci când opțiunea de sortare \"Questify\" este selectată pe pagina misiunilor.",
                    formatNote: "Lista separată prin virgulă trebuie să conțină toate elementele: {{items}}.",
                    placeholder: "Trebuie să incluzi UNCLAIMED, CLAIMED, IGNORED, EXPIRED",
                    invalidFormat: "Format invalid.",
                    unclaimedSubsort: "Sub-sortare nerevendicate",
                    claimedSubsort: "Sub-sortare revendicate",
                    ignoredSubsort: "Sub-sortare ignorate",
                    expiredSubsort: "Sub-sortare expirate",
                    addedNewest: "Adăugate (cele mai noi)",
                    addedOldest: "Adăugate (cele mai vechi)",
                    expiredRecent: "Expirate (recent)",
                    expiredLeast: "Expirate (cele mai vechi)",
                    expiringSoon: "Expiră curând",
                    expiringLate: "Expiră târziu",
                    claimedRecent: "Revendicate (cele mai recente)",
                    claimedLeast: "Revendicate (cele mai vechi)",
                    ignoredQuestProfile: "Profil misiuni ignorate",
                    sharedProfile: "Partajat: Toate conturile de pe acest client partajează lista de ignorate.",
                    privateProfile: "Privat: Toate conturile au liste de ignorate separate.",
                    rememberSort: "Ține minte sortarea",
                    rememberFilter: "Ține minte filtrele",
                    yes: "Da",
                    no: "Nu",
                    rememberNote: "Această alegere se referă la opțiunile de sortare și filtrare integrate pe pagina Quest. Sortarea personalizată de mai sus se aplică doar când \"Questify\" este selectat. Dacă reținerea este dezactivată, opțiunile se resetează la fiecare deschidere."
                },
                fetchingQuests: {
                    title: "Preluare Misiuni",
                    description: "Configurează cât de des să preiei misiunile de la Discord și setează alerte pentru misiuni noi.",
                    defaultBehavior: "Implicit, Discord preia misiunile doar la încărcare sau la vizitarea paginii. Fără un interval definit mai jos, pluginul nu va detecta misiunile noi adăugate pe parcursul zilei.",
                    requirement: "Aceasta necesită ca Butonul Quest să fie activat și setat pe {{unclaimed}} sau {{always}} cu indicatori de tip {{pill}}, {{badge}} sau {{both}} activați.",
                    blockWarning: "De asemenea, dacă {{fetchingQuests}} este blocat în setările {{questFeatures}}, acest lucru nu va funcționa.",
                    fetchInterval: "Interval de preluare",
                    alertSound: "Sunet de alertă",
                    intervalPlaceholder: "Selectează sau scrie un interval între 30 min și 12 ore.",
                    intervalFeedback: "Intervalul trebuie să fie între 30 minute și 12 ore.",
                    soundPlaceholder: "Selectează un sunet sau introdu un URL personalizat.",
                    soundFeedback: "Sunetul nu a fost găsit sau URL-ul nu este dintr-un domeniu acceptat.",
                    disabled: "Dezactivat",
                    minutes: "Minute",
                    minute: "Minut",
                    hours: "Ore",
                    hour: "Oră",
                    thirtyMinutes: "30 Minute",
                    oneHour: "1 Oră",
                    threeHours: "3 Ore",
                    sixHours: "6 Ore",
                    twelveHours: "12 Ore",
                    customSound: "SUNET PERSONALIZAT"
                },
                disableOptions: {
                    everything: "Dezactivează tot",
                    discovery: "Dezactivează fila Discovery",
                    dms: "Dezactivează fila Quests în DM",
                    fetching: "Dezactivează preluarea misiunilor",
                    popup: "Dezactivează fereastra deasupra panoului de cont",
                    sponsored: "Dezactivează bannerul sponsorizat",
                    badge: "Dezactivează insigna pe profilurile de utilizator",
                    inventory: "Dezactivează notificarea de mutare a inventarului",
                    friendsList: "Promoție 'Activ acum' în lista de prieteni",
                    membersList: "Pictograme 'Se joacă activ' în lista de membri",
                    gameQuests: "Finalizează misiunile de joc în fundal",
                    videoQuests: "Finalizează misiunile video în fundal",
                    achievementQuests: "Finalizează misiunile de tip activitate în fundal",
                    mobileDesktop: "Fă misiunile de mobil compatibile cu desktop",
                    notifyOnComplete: "Notifică la finalizarea misiunii"
                },
                options: {
                    always: "Mereu",
                    unclaimed: "Nerevendicate",
                    never: "Niciodată",
                    pill: "Pastilă (Pill)",
                    badge: "Insignă (Badge)",
                    both: "Ambele",
                    none: "Niciuna",
                    openQuests: "Deschide misiunile",
                    contextMenu: "Meniu contextual",
                    pluginSettings: "Setări plugin",
                    nothing: "Nimic",
                    orbs: "Orb-uri",
                    nitroCodes: "Coduri Nitro",
                    rewardCodes: "Coduri recompensă",
                    inGameItems: "Obiecte în joc",
                    profileCollectibles: "Elemente de profil"
                }
            },
            option: {
                disableQuests: {
                    label: "Dezactivează misiunile",
                    description: "Selectează ce funcții Quest dorești să dezactivezi."
                },
                disableQuestsEverything: {
                    label: "Dezactivează tot",
                    description: "Dezactivează toate funcțiile Quest."
                },
                disableQuestsFetchingQuests: {
                    label: "Dezactivează preluarea misiunilor",
                    description: "Dezactivează preluarea misiunilor de la Discord."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Dezactivează fila Quests în DM",
                    description: "Dezactivează fila de misiuni din pagina de mesaje directe."
                },
                disableQuestsDiscoveryTab: {
                    label: "Dezactivează fila Discovery",
                    description: "Dezactivează fila de misiuni din pagina Discovery."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Dezactivează bannerul sponsorizat",
                    description: "Dezactivează bannerul sponsorizat de pe pagina Quest."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Dezactivează fereastra deasupra panoului de cont",
                    description: "Dezactivează fereastra pop-up deasupra panoului contului tău."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Dezactivează insigna pe profiluri",
                    description: "Dezactivează insigna Quest de pe profilurile de utilizator."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Dezactivează notificarea de mutare a inventarului",
                    description: "Dezactivează notificarea privind mutarea secțiunii de inventar."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Dezactivează promoția 'Activ acum'",
                    description: "Dezactivează promovarea misiunilor pentru jocurile jucate de prieteni."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Dezactivează pictogramele de joc activ",
                    description: "Dezactivează pictogramele care arată ce jocuri se joacă activ în lista de membri."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Compatibilitate desktop pentru misiuni mobil",
                    description: "Face misiunile exclusiv de mobil compatibile cu versiunea desktop."
                },
                completeVideoQuestsInBackground: {
                    label: "Finalizează misiunile video în fundal",
                    description: "Finalizează misiunile video automat după expirarea duratei acestora."
                },
                completeGameQuestsInBackground: {
                    label: "Finalizează misiunile de joc în fundal",
                    description: "Finalizează misiunile de joc automat după expirarea duratei de joc."
                },
                completeAchievementQuestsInBackground: {
                    label: "Finalizează misiunile de tip activitate în fundal",
                    description: "Finalizează automat sarcinile din misiunile de tip activitate."
                },
                notifyOnQuestComplete: {
                    label: "Notifică la finalizarea misiunii",
                    description: "Afișează o notificare când o misiune este finalizată automat."
                },
                questButton: {
                    label: "Buton Quest",
                    description: "Afișează un buton Quest în lista de servere."
                },
                questButtonDisplay: {
                    label: "Afișare buton Quest",
                    description: "Ce tip de afișare să fie folosit pentru butonul Quest."
                },
                questRewardIncludeRewardCode: {
                    label: "Include coduri de recompensă",
                    description: "Include misiunile cu coduri de recompensă în numărătoare."
                },
                questRewardIncludeNitroCode: {
                    label: "Include coduri Nitro",
                    description: "Include misiunile cu coduri Nitro în numărătoare."
                },
                questRewardIncludeInGame: {
                    label: "Include recompense în joc",
                    description: "Include misiunile cu obiecte de joc în numărătoare."
                },
                questRewardIncludeCollectibles: {
                    label: "Include elemente de colecție",
                    description: "Include misiunile cu elemente de profil (collectibles) în numărătoare."
                },
                questRewardIncludeOrbs: {
                    label: "Include Orb-uri",
                    description: "Include misiunile cu Orb-uri în numărătoare."
                },
                questButtonUnclaimed: {
                    label: "Indicator misiuni nerevendicate",
                    description: "Tipul de afișare pentru indicatorul de misiuni nerevendicate de pe buton."
                },
                questButtonBadgeColor: {
                    label: "Culoare insignă buton Quest",
                    description: "Culoarea insignei pentru butonul Quest din lista de servere."
                },
                questButtonLeftClickAction: {
                    label: "Acțiune click stânga",
                    description: "Acțiunea executată la click stânga pe buton."
                },
                questButtonMiddleClickAction: {
                    label: "Acțiune click mijloc",
                    description: "Acțiunea executată la click mijloc pe buton."
                },
                questButtonRightClickAction: {
                    label: "Acțiune click dreapta",
                    description: "Acțiunea executată la click dreapta pe buton."
                },
                fetchingQuests: {
                    label: "Preluare misiuni",
                    description: "Preia misiunile de la Discord."
                },
                fetchingQuestsInterval: {
                    label: "Interval preluare misiuni",
                    description: "Intervalul în secunde pentru preluarea misiunilor."
                },
                fetchingQuestsAlert: {
                    label: "Alertă preluare misiuni",
                    description: "Sunetul redat la detectarea de misiuni noi."
                },
                fetchingQuestsAlertVolume: {
                    label: "Volum alertă misiuni",
                    description: "Volumul sunetului de alertă pentru misiuni noi."
                },
                restyleQuests: {
                    label: "Restilizare misiuni",
                    description: "Personalizează aspectul cardurilor de misiune."
                },
                restyleQuestsUnclaimed: {
                    label: "Restilizare nerevendicate",
                    description: "Culoarea cardurilor de misiuni nerevendicate."
                },
                restyleQuestsClaimed: {
                    label: "Restilizare revendicate",
                    description: "Culoarea cardurilor de misiuni revendicate."
                },
                restyleQuestsIgnored: {
                    label: "Restilizare ignorate",
                    description: "Culoarea cardurilor de misiuni ignorate."
                },
                restyleQuestsExpired: {
                    label: "Restilizare expirate",
                    description: "Culoarea cardurilor de misiuni expirate."
                },
                restyleQuestsGradient: {
                    label: "Degrade restilizare",
                    description: "Stilul degradeului folosit pentru cardurile de misiune."
                },
                restyleQuestsPreload: {
                    label: "Preîncărcare resurse",
                    description: "Încearcă să preîncarce resursele grafice pentru cardurile de misiune."
                },
                reorderQuests: {
                    label: "Reordonare misiuni",
                    description: "Sortează misiunile după stare. Lasă gol pentru sortarea implicită. Lista trebuie să conțină: UNCLAIMED, CLAIMED, IGNORED, EXPIRED."
                },
                unclaimedSubsort: {
                    label: "Sub-sortare nerevendicate",
                    description: "Metoda de sub-sortare pentru misiunile nerevendicate."
                },
                claimedSubsort: {
                    label: "Sub-sortare revendicate",
                    description: "Metoda de sub-sortare pentru misiunile revendicate."
                },
                ignoredSubsort: {
                    label: "Sub-sortare ignorate",
                    description: "Metoda de sub-sortare pentru misiunile ignorate."
                },
                expiredSubsort: {
                    label: "Sub-sortare expirate",
                    description: "Metoda de sub-sortare pentru misiunile expirate."
                },
                unclaimedUnignoredQuests: {
                    label: "Misiuni nerevendicate și neignorate",
                    description: "Urmărește numărul de misiuni care nu sunt nici revendicate, nici ignorate."
                },
                onQuestsPage: {
                    label: "Pe pagina misiunilor",
                    description: "Indică dacă utilizatorul se află pe pagina de misiuni."
                },
                triggerQuestsRerender: {
                    label: "Forțează rerandarea",
                    description: "Forțează o rerandare a paginii de misiuni prin comutarea acestei setări."
                },
                ignoredQuestProfile: {
                    label: "Profil misiuni ignorate",
                    description: "Profilul utilizat pentru misiunile ignorate."
                },
                rememberQuestPageSort: {
                    label: "Reține sortarea paginii",
                    description: "Reține ultima sortare folosită pe pagina de misiuni."
                },
                rememberQuestPageFilters: {
                    label: "Reține filtrele paginii",
                    description: "Reține ultimele filtre folosite pe pagina de misiuni."
                },
                lastQuestPageSort: {
                    label: "Ultima sortare pagină",
                    description: "Ultima sortare utilizată pe pagina Quest."
                },
                lastQuestPageFilters: {
                    label: "Ultimele filtre pagină",
                    description: "Ultimele filtre utilizate pe pagina Quest."
                },
                ignoredQuestIDs: {
                    label: "ID-uri misiuni ignorate",
                    description: "O listă cu ID-urile misiunilor care sunt ignorate."
                },
                resumeQuestIDs: {
                    label: "ID-uri misiuni în reluare",
                    description: "O listă cu ID-urile misiunilor care se finalizează automat în fundal."
                }
            },
            button: {
                questInProgressWithTime: "Se finalizează ({{remainTime}})",
                completing: "Se finalizează",
                resume: "Reluare (~{{remainTime}})",
                complete: "Finalizează {{remainTime}}",
                completeImmediate: "Finalizează (Imediat)",
                completed: "Finalizat"
            },
            reward: {
                orbs: "{{completingText}} pentru {{orbQuantity}} Orb-uri.",
                article: "{{completingText}} pentru {{itemName}}.",
                unrecognized: "{{completingText}} pentru un tip de recompensă necunoscut."
            },
            notification: {
                completed: {
                    title: "Misiune Finalizată",
                    body: "Misiunea {{questName}} a fost finalizată."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Înlocuiește toate semnele de întrebare cu un text ales, dacă mesajul conține doar semne de întrebare.",
            option: {
                replace: {
                    label: "Înlocuiește",
                    description: "Înlocuiește cu"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Adaugă un buton de menționare rapidă în bara de acțiuni a mesajului",
            tooltip: "Menționare rapidă"
        },
        quickReply: {
            name: "QuickReply",
            description: "Răspunde (Ctrl+Săgeată Sus/Jos) și editează (Ctrl+Shift+Săgeată Sus/Jos) mesaje prin scurtături de taste",
            option: {
                shouldMention: {
                    label: "Menționează",
                    description: "Menționează prin răspuns în mod implicit",
                    noReplyMentionPlugin: "Urmează pluginul NoReplyMention (dacă e activ)",
                    enabled: "Activat",
                    disabled: "Dezactivat"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignoră blocații și ignorații",
                    description: "Ignoră mesajele utilizatorilor blocați/ignorați la navigare"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Comută rapid între teme folosind scurtături de tastatură.",
            about: {
                title: "Scurtături",
                description: "Folosește Ctrl/Cmd+Shift+Săgeți pentru navigare (Stânga/Dreapta: ciclu teme, Sus: activare, Jos: dezactivare).",
                reload: "Apasă Ctrl/Cmd+Shift+Alt pentru a reîncărca lista de teme."
            },
            modal: {
                added: "Adăugat {{count}} teme",
                removed: "Eliminat {{count}} teme",
                reloaded: "Reîncărcat {{themeCount}} teme",
                addedLocal: "Adăugat {{count}} teme locale",
                removedLocal: "Eliminat {{count}} teme locale",
            },
            option: {
                includeLocal: {
                    label: "Include locale",
                    description: "Include temele locale"
                },
                includeOnline: {
                    label: "Include online",
                    description: "Include temele online"
                },
                sortOrder: {
                    label: "Ordine sortare",
                    description: "Metoda de sortare",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Recente"
                },
                autoRefresh: {
                    label: "Reîmprospătare automată",
                    description: "Reîmprospătează lista când se detectează schimbări"
                },
                showNotifications: {
                    label: "Arată notificări",
                    description: "Arată notificări la adăugarea/eliminarea temelor"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Adaugă posibilitatea de a crea o imagine cu un citat inspirațional dintr-un mesaj",
            context: {
                quote: "Citează în imagine"
            },
            modal: {
                title: "Prins în flagrant (4k)",
                grayscale: "Alb-negru",
                export: "Exportă",
                send: "Trimite",
                saveAsGIF: "Salvează ca GIF",
                saveDescription: "Salvează/Trimite imaginea ca GIF în loc de PNG",
                showWatermark: "Arată watermark",
                watermarkText: "Text watermark (max 32 caractere)"
            },
            option: {
                quoteFont: {
                    label: "Font citat",
                    description: "Fontul pentru textul citatului (autorul folosește mereu M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Semnătura Momo",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Watermark",
                    description: "Text personalizat watermark (max 32 caractere)"
                },
                grayscale: {
                    label: "Alb-negru",
                    description: "Activează modul alb-negru implicit"
                },
                showWatermark: {
                    label: "Arată watermark",
                    description: "Arată watermark-ul implicit"
                },
                saveAsGif: {
                    label: "Salvează ca GIF",
                    description: "Salvează ca GIF implicit"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Adaugă un buton lângă cel de Mute pentru a intra într-un apel vocal aleatoriu.",
            tooltip: "Voce aleatorie",
            context: {
                label: "Modificator stare voce",
                amountLabel: "NUMĂR UTILIZATORI",
                spacesLabel: "LOCURI LIBERE",
                voiceLabel: "LIMITĂ VOCE",
                selfLabel: "SETĂRI PROPRII",
                select: {
                    servers: "Selectează servere",
                    list: "Selectează listă",
                    filters: "Selectează filtre",
                    amount: "Număr utilizatori",
                    userAmount: "{{amount}} utilizator(i)",
                    parameters: "Parametri",
                    selectAll: "Selectează tot",
                    reset: "Resetează",
                    stateFilters: "Filtre de stare",
                    moreThan: "Mai mult de",
                    lessThan: "Mai puțin de",
                    equalTo: "Egal cu",
                    spaces: "Locuri libere",
                    voice: "Limită voce"
                },
                filter: {
                    muted: "Mute",
                    deafened: "Deafened",
                    camera: "Cameră",
                    stream: "Stream",
                    includeFilters: "Include filtrele",
                    avoidFilters: "Evită filtrele"
                },
                reset: {
                    list: "Resetează lista"
                },
                voice: {
                    label: "Opțiuni voce",
                    joinSettings: "Setări de aderare",
                    auto: {
                        mute: "Mute automat",
                        deafen: "Deafen automat",
                        camera: "Cameră automată",
                        stream: "Stream automat",
                        leaveWhenEmpty: "Părăsește dacă e gol",
                        navigate: "Navigare automată",
                        stage: "Evită Stage",
                        afk: "Evită AFK"
                    }
                },
                invalid: {
                    server: "Server invalid"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Operație număr utilizatori",
                    description: "Selectează operația pentru numărul de utilizatori"
                },
                userAmount: {
                    label: "Număr utilizatori",
                    description: "Selectează numărul de utilizatori"
                },
                spacesLeftOperation: {
                    label: "Operație locuri libere",
                    description: "Selectează operația pentru locurile libere"
                },
                spacesLeft: {
                    label: "Locuri libere",
                    description: "Selectează numărul de locuri libere"
                },
                vcLimitOperation: {
                    label: "Operație limită canal",
                    description: "Selectează operația pentru limita canalului vocal."
                },
                vcLimit: {
                    label: "Limită canal vocal",
                    description: "Selectează o limită pentru canalul vocal"
                },
                servers: {
                    label: "Servere",
                    description: "Serverele incluse"
                },
                autoNavigate: {
                    label: "Navigare automată",
                    description: "Navighează automat către canalul vocal."
                },
                autoCamera: {
                    label: "Cameră automată",
                    description: "Pornește automat camera"
                },
                autoStream: {
                    label: "Stream automat",
                    description: "Pornește automat stream-ul"
                },
                selfMute: {
                    label: "Mute automat",
                    description: "Pune microfonul pe mute la intrarea pe canal."
                },
                selfDeafen: {
                    label: "Deafen automat",
                    description: "Pune sunetul pe deafen la intrarea pe canal."
                },
                leaveEmpty: {
                    label: "Părăsește dacă e gol",
                    description: "Caută alt apel dacă cel curent este gol."
                },
                prioritizeFriends: {
                    label: "Prioritizează prietenii",
                    description: "Preferă canalele în care se află prietenii tăi, atunci când este posibil."
                },
                avoidStages: {
                    label: "Evită canalele Stage",
                    description: "Evită intrarea pe canalele de tip Stage."
                },
                avoidAfk: {
                    label: "Evită AFK",
                    description: "Evită intrarea pe canalele AFK."
                },
                video: {
                    label: "Video",
                    description: "Caută utilizatori cu camera pornită"
                },
                stream: {
                    label: "Stream",
                    description: "Caută utilizatori care fac stream"
                },
                mute: {
                    label: "Mute",
                    description: "Caută utilizatori care au mute"
                },
                deafen: {
                    label: "Deafen",
                    description: "Caută utilizatori care au deafen"
                },
                includeStates: {
                    label: "Include filtre",
                    description: "Opțiune pentru a include stări specifice"
                },
                avoidStates: {
                    label: "Evită filtre",
                    description: "Opțiune pentru a evita stări specifice"
                }
            },
            alert: {
                failed: "Nu s-a putut găsi un canal vocal!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Decodează codurile de eroare React în mesaje ușor de înțeles."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Citește toate notificările de pe servere cu un singur click!",
            button: "Citește tot"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Ctrl+Tab între cele mai recente DM-uri (Ctrl+Shift+Tab pentru invers)",
            option: {
                visualStyle: {
                    label: "Stil vizual",
                    description: "Stilul indicatorului vizual în timpul comutării",
                    overlay: "Suprapunere (stil Alt+Tab)",
                    toast: "Notificare toast (mesaj de stare)",
                    off: "Dezactivat"
                },
                overlayMode: {
                    label: "Mod suprapunere",
                    description: "Conținutul afișat în suprapunere",
                    row: "Rând cu recente",
                    current: "Doar cel curent",
                },
                amountOfUsers: {
                    label: "Număr utilizatori",
                    description: "Numărul de utilizatori afișați în suprapunere"
                },
                overlayRowLength: {
                    label: "Lungime rând",
                    description: "Câte DM-uri recente apar în rând"
                },
                overlayShowAvatars: {
                    label: "Arată avatare",
                    description: "Arată avatarele utilizatorilor în suprapunere"
                },
                toastDurationMs: {
                    label: "Durată notificare (ms)",
                    description: "Durata mesajului de stare"
                },
                clearRdms: {
                    label: "Golește lista RDMS",
                    description: "Utilitar test: Șterge lista de DM-uri recente",
                    toast: "Istoric RDMS șters",
                    button: "Șterge istoricul RDMS"
                }
            },
            modal: {
                unknown: "Necunoscut",
                dm: "DM",
                group: "Grup DM",
                channel: "Canal",
                switchingTo: "Se comută la: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Te notifică atunci când un prieten, un grup sau un server te elimină.",
            option: {
                notices: {
                    label: "Notificări bară",
                    description: "Arată și o bară de notificare în partea de sus (recomandat pentru a nu rata nimic)."
                },
                offlineRemovals: {
                    label: "Eliminări offline",
                    description: "Te notifică la pornire dacă ai fost eliminat cât timp erai offline."
                },
                friends: {
                    label: "Prieteni",
                    description: "Notifică la eliminarea din lista de prieteni"
                },
                friendRequestCancels: {
                    label: "Anulare cereri prietenie",
                    description: "Notifică la anularea unei cereri de prietenie"
                },
                servers: {
                    label: "Servere",
                    description: "Notifică la eliminarea dintr-un server"
                },
                groups: {
                    label: "Grupuri",
                    description: "Notifică la eliminarea dintr-un grup"
                }
            },
            notification: {
                removedFriend: "{{user}} te-a scos de la prieteni.",
                cancelledFriendRequest: "O cerere de prietenie de la {{user}} a fost eliminată.",
                removedFromServer: "Ai fost scos de pe serverul {{server}}.",
                removedFromGroup: "Ai fost scos din grupul {{group}}.",
                noLongerGroup: "Nu mai faci parte din grupul {{group}}.",
                noLongerServer: "Nu mai ești pe serverul {{server}}.",
                noLongerFriend: "Nu mai ești prieten cu {{user}}.",
                friendRequestRevoked: "Cererea de prietenie de la {{user}} a fost retrasă.",
                ok: "OK"
            }
        },
        remix: {
            name: "Remix",
            description: "Adaugă o opțiune 'Remix' în meniul de click-dreapta al butonului de încărcare fișiere. Deschide un editor simplu de imagini.",
            label: "Remix",
            button: {
                send: "Trimite",
                close: "Închide",
                brush: "Pensulă",
                erase: "Gumează",
                crop: "Decupează",
                shape: "Formă",
                reset: "Resetează",
                clear: "Șterge tot"
            },
            editor: {
                choose: "Alege o imagine",
                browse: "Răsfoiește",
                rectangle: "Dreptunghi",
                ellipse: "Elipsă",
                line: "Linie",
                arrow: "Săgeată",
                fill: "Umplere"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Permite repetarea rapidă a mesajelor. Dacă ții Shift apăsat când apeși Repeat, va răspunde la mesaj.",
            button: "Repetă (Click) / Repetă și Răspunde (Shift + Click)",
            context: {
                repeat: "Repetă",
                repeatAndReply: "Repetă și Răspunde"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Înlocuiește căutarea Google cu alte motoare de căutare.",
            option: {
                customEngineName: {
                    label: "Nume motor personalizat",
                    description: "Numele motorului de căutare"
                },
                customEngineURL: {
                    label: "URL motor personalizat",
                    description: "Adresa URL a motorului"
                },
                replacementEngine: {
                    label: "Motor înlocuitor",
                    description: "Înlocuiește cu un anumit motor în loc de a adăuga un meniu",
                    off: "Oprit",
                    custom: "Motor personalizat",
                }
            },
            context: {
                label: "Caută text",
                searchWith: "Caută cu {{name}}"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Controlează dacă primești mențiuni la răspunsuri, cu funcție de listă albă",
            option: {
                alwaysPingOnReply: {
                    label: "Mereu mențiune la răspuns",
                    description: "Primește mereu notificare când cineva îți răspunde"
                },
                replyPingWhitelist: {
                    label: "Listă albă mențiuni",
                    description: "ID-uri de utilizatori (separate prin virgulă) de la care să primești mereu mențiuni"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Afișează ora/data pe previzualizările mesajelor la care s-a răspuns"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Dezvăluie toate spoilerele dintr-un mesaj cu Ctrl-Click, sau din tot chatul cu Ctrl+Shift-Click"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Adaugă căutarea inversă de imagini în meniurile contextuale",
            context: {
                label: "Caută imaginea",
                all: "Caută peste tot"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Recenzii pentru utilizatori (Adaugă o secțiune nouă în profiluri)",
            notification: {
                newReview: "Ai recenzii noi pe profil!",
                auth: {
                    error: "Eroare la autorizare",
                    successfully: "Autentificare reușită!",
                    failed: "Autorizare eșuată",
                    review: "Te rugăm să autorizezi pentru a adăuga o recenzie.",
                    opening: "Se deschide fereastra de autorizare...",
                    need: "Ai nevoie de autorizare pentru a lăsa recenzii!"
                },
                error: {
                    fast: "Trimiteți cereri prea rapid. Așteptați câteva secunde.",
                    fetching: "Eroare la preluarea recenziilor.",
                    action: {
                        failed: "Eșec la {{action}} utilizator",
                        success: "Acțiunea {{action}} a reușit"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Ești sigur?",
                    description: "Sigur vrei să ștergi această recenzie?",
                    confirm: "Șterge",
                    cancel: "Anulează",
                    error: "Trebuie să fii autentificat pentru a șterge.",
                },
                report: {
                    title: "Raportezi?",
                    description: "Sigur vrei să raportezi această recenzie?",
                    confirm: "Raportează",
                    cancel: "Anulează",
                    error: "Trebuie să fii autentificat pentru a raporta.",
                },
                block: {
                    title: "Blochezi?",
                    description: "Sigur vrei să blochezi acest utilizator? Nu-i vei mai vedea recenziile.",
                    confirm: "Blochează",
                    cancel: "Anulează",
                    error: "Trebuie să fii autentificat pentru a bloca.",
                },
                blocked: {
                    title: "Utilizatori blocați",
                    auth: "Nu ești conectat la ReviewDB!",
                    noBlocked: "Niciun utilizator blocat.",
                    fetch: "Eroare la preluarea listei de blocați."
                },
                reviews: {
                    title: "Recenziile lui",
                    noUser: "Nimeni nu a lăsat o recenzie acestui utilizator încă. Fii primul!",
                    noServer: "Nimeni nu a lăsat o recenzie acestui server încă. Fii primul!"
                }
            },
            button: {
                appeal: "Contestă",
                ok: "OK",
                more: "Citește mai mult",
                reply: "Răspunde lui @{{user}}",
                update: "Actualizează recenzia pentru @{{user}}",
                review: "Lasă recenzie lui @{{user}}"
            },
            context: {
                view: "Vezi recenziile",
                blocked: "Ai blocat acest utilizator",
                delete: "Șterge recenzia",
                report: "Raportează recenzia",
                block: "Blochează utilizatorul",
                unblock: "Deblochează utilizatorul",
                reply: "Răspunde la recenzie"
            },
            option: {
                authorize: {
                    label: "Autorizează",
                    button: "Autorizează cu ReviewDB"
                },
                notifyReviews: {
                    label: "Notificări recenzii",
                    description: "Notifică despre recenziile noi la pornire"
                },
                showWarning: {
                    label: "Arată avertisment",
                    description: "Afișează un îndemn la respect în partea de sus a listei"
                },
                hideTimestamps: {
                    label: "Ascunde timestamps",
                    description: "Ascunde data/ora recenziilor"
                },
                hideBlockedUsers: {
                    label: "Ascunde blocații",
                    description: "Ascunde recenziile utilizatorilor blocați"
                },
                buttons: {
                    label: "Butoane",
                    manageBlocked: "Gestionează utilizatorii blocați",
                    support: "Susține ReviewDB",
                    website: "Site-ul ReviewDB",
                    server: "Serverul de suport ReviewDB"
                }
            },
            profile: {
                optedOut: "Utilizatorul a refuzat",
                noReviews: "Nicio recenzie încă"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Redă linkurile magnet ca pe linkurile de mesaje",
            unknown: "nume fișier necunoscut"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Adaugă culoarea celui mai înalt rol peste tot unde este posibil",
            option: {
                chatMentions: {
                    label: "Mențiuni chat",
                    description: "Arată culorile rolurilor în mențiunile din chat (inclusiv în căsuța de scris)"
                },
                memberList: {
                    label: "Lista de membri",
                    description: "Arată culorile în antetele de rol din lista de membri"
                },
                voiceUsers: {
                    label: "Utilizatori voce",
                    description: "Arată culorile rolurilor în lista utilizatorilor din canalele vocale"
                },
                reactorsList: {
                    label: "Lista reacțiilor",
                    description: "Arată culorile în lista celor care au reacționat"
                },
                pollResults: {
                    label: "Rezultate sondaj",
                    description: "Arată culorile rolurilor în rezultatele sondajelor"
                },
                colorChatMessages: {
                    label: "Colorează mesajele",
                    description: "Colorează mesajele în funcție de culoarea rolului autorului"
                },
                messageSaturation: {
                    label: "Saturație mesaje",
                    description: "Intensitatea colorării mesajelor"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Editează tipul și conținutul oricărui Rich Presence",
            option: {
                replacedAppIds: {
                    label: "ID-uri aplicații înlocuite",
                }
            },
            modal: {
                tutorial: {
                    title: "ID-urile activităților care rulează",
                    noRunning: "Nicio activitate în desfășurare",
                    available: "Variabile disponibile",
                    variableText: "În toate câmpurile (fără URL stream), poți folosi variabile care vor fi înlocuite automat:",
                    more: "Mai multe detalii",
                    details: {
                        leave: "Lasă câmpul gol pentru a rămâne neschimbat.",
                        set: "Scrie 'null' pentru a ascunde câmpul în prezență.",
                        reload: "S-ar putea să fie nevoie de reîncărcarea Discord."
                    }
                },
                settings: {
                    applyEdits: "Aplică modificările",
                    addNewApp: "Adaugă aplicație nouă",
                    appId: "ID aplicație",
                    invalidAppId: "ID aplicație invalid",
                    newActivityType: "Tip activitate nou",
                    activityTypes: {
                        playing: "Se joacă",
                        watching: "Vizionează",
                        listening: "Ascultă",
                        competing: "Concurează",
                        streaming: "Face stream"
                    },
                    streamUrl: "URL Stream (YouTube sau Twitch)",
                    invalidStreamUrl: "URL stream invalid",
                    newName: "Nume nou",
                    newDetails: "Detalii noi",
                    newState: "Stare nouă",
                    largeImage: "Imagine mare",
                    smallImage: "Imagine mică",
                    text: "Text",
                    url: "URL",
                    firstLine: "(prima linie)",
                    secondLine: "(a doua linie)",
                    thirdLine: "(a treia linie)",
                    alsoThirdLine: "(tot a treia linie)",
                    hideAssets: "Ascunde imaginile (large & small)",
                    hideTimestamps: "Ascunde timestamps"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Afișează statistici despre activitatea ta într-un Rich Presence",
            option: {
                assetURL: {
                    label: "URL Imagine",
                    description: "Imaginea RPC. Dacă e gol, se folosește poza de profil"
                },
                rpcTitle: {
                    label: "Titlu RPC",
                    description: "Titlul activității tale"
                },
                statDisplay: {
                    label: "Afișare statistici",
                    description: "Ce să afișeze RPC-ul? (Doar o singură linie)",
                    today: "Mesajele trimise azi",
                    alltime: "Mesajele trimise de la început",
                    listened: "Cel mai ascultat album al săptămânii"
                },
                lastFMApiKey: {
                    label: "Cheie API Last.fm",
                    description: "Cheia ta API Last.fm"
                },
                lastFMUsername: {
                    label: "Utilizator Last.fm",
                    description: "Numele de utilizator Last.fm"
                },
                albumCoverImage: {
                    label: "Copertă album",
                    description: "Folosește coperta albumului ca imagine RPC (necesită Last.fm)"
                },
                lastFMStatFormat: {
                    label: "Format statistici Last.fm",
                    description: "Cum să fie formatat? $album = nume album, $artist = nume artist"
                }
            },
            noInfo: "Nicio informație disponibilă :(",
            messagesToday: "Mesaje trimise azi: {{count}}",
            messagesAllTime: "Mesaje trimise total: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Exportă URL-urile GIF-urilor favorite",
            toolbox: "Salvează GIF-urile favorite",
            title: "Salvează GIF-urile favorite",
            command: {
                savegifs: {
                    description: "Salvează toate URL-urile GIF-urilor favorite într-un fișier text"
                },
                saveworkinggifs: {
                    description: "Testează GIF-urile și salvează-le doar pe cele care mai funcționează"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Arată buton în Toolbox",
                    description: "Afișează butonul în Plexcord Toolbox (Necesită reîncărcare)"
                }
            },
            toast: {
                save: "GIF-uri salvate cu succes ca {{filename}}",
                failed: "Eșec la salvarea GIF-urilor",
                no: "Nu s-au găsit GIF-uri favorite!",
                testing: "Se testează {{count}} GIF-uri, durează puțin...",
                noneWorking: "Niciunul dintre GIF-urile salvate nu pare să mai funcționeze.",
                saved: "S-au filtrat {{broken}} GIF-uri nefuncționale. S-au salvat {{saved}} GIF-uri active."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Programează mesaje pentru a fi trimise la o oră specifică sau după o întârziere.",
            toolbox: {
                toggle: "Vezi mesajele programate"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Max mesaje pe minut",
                    description: "Mesaje programate maxime per canal care se pot trimite în același minut."
                },
                checkIntervalSeconds: {
                    label: "Interval verificare (secunde)",
                    description: "Cât de des verifică pluginul dacă sunt mesaje de trimis."
                },
                showNotifications: {
                    label: "Arată notificări",
                    description: "Arată notificări toast când mesajele sunt trimise."
                },
                showPhantomMessages: {
                    label: "Arată mesaje fantomă",
                    description: "Arată mesajele programate ca mesaje fantomă în chat."
                }
            },
            channelType: {
                unknown: "Necunoscut",
                dm: "DM",
                groupDm: "Grup DM",
                channel: "Canal"
            },
            toast: {
                messageSent: "Mesaj programat trimis către {{channel}}",
                messageFailed: "Eșec la trimiterea mesajului programat",
                maxMessagesReached: "Limită de {{max}} mesaje pe minut atinsă",
                messageScheduled: "Mesaj programat!",
                messageRemoved: "Mesaj programat eliminat",
                allCleared: "Toate mesajele programate au fost șterse"
            },
            button: {
                tooltipOn: "Mod programare ACTIV (click pentru dezactivare, click-dreapta pentru listă)",
                tooltipOff: "Mod programare OPRIT (click pentru activare, click-dreapta pentru listă)"
            },
            accessory: {
                scheduledFor: "Programat pentru {date}{timeLeft}",
                remaining: {
                    days: "{{days}}z {{hours}}o rămase",
                    hours: "{{hours}}o {{minutes}}m rămase",
                    minutes: "{{minutes}}m rămase"
                }
            },
            scheduleModal: {
                title: "Programează mesaj",
                schedulingFor: "Se programează pentru: {{channel}}",
                scheduleType: "Tip programare",
                delay: "Întârziere",
                specificTime: "Oră specifică",
                delayMinutes: "Întârziere (minute)",
                dateTime: "Data și Ora",
                error: {
                    invalidDelay: "Introdu o întârziere validă (minim 1 minut)",
                    invalidDateTime: "Selectează o dată și oră din viitor"
                },
                schedule: "Programează",
                cancel: "Anulează"
            },
            viewModal: {
                title: "Mesaje programate",
                clearAll: "Șterge tot",
                noMessages: "Niciun mesaj programat",
                delete: "Șterge",
                close: "Închide"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Rezolvă eroarea enervantă 'We dropped the magnifying glass!'.",
            notPerfect: "Această soluție nu e perfectă, ar putea fi nevoie de reîncărcarea barei de căutare.",
            paragraph1: "Discord permite un decalaj (offset) maxim de 5000 (cauza erorii).",
            paragraph2: "Poți vedea precis doar 5000 mesaje în trecut și 5000 în viitor.",
            paragraph3: "Pluginul comută între metodele de sortare pentru a ocoli restricția,",
            paragraph4: "dar dacă rezultatul e prea mare și mesajul e inaccesibil prin ambele metode,",
            paragraph5: "va afișa pur și simplu poziția 0 (cel mai nou/vechi mesaj)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Redă mereu versiunea secretă a tonului de apel Discord (fără evenimente speciale)",
            option: {
                onlySnow: {
                    label: "Doar în timpul evenimentului Snow",
                    description: "Redă doar tema Snow Halation"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Activează funcția experimentală 'Summaries' pe orice server, afișând rezumate ale conversațiilor generate de AI",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Expirare rezumat (Zile)",
                    description: "Timpul până când un rezumat e eliminat. Se păstrează max 50 pe canal."
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Adaugă canalul curent în lista pop-up de redirecționare (forward)"
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Trimite timestamps ușor prin buton în chat sau scurtături. Citiți descrierea extinsă!",
            sample: {
                paragraph1: "Pentru a trimite rapid ora, scrie formatul `HH:MM` (cu backticks!) în mesaj",
                paragraph2: "Vezi exemplele de mai jos.\nDacă vrei ceva specific, folosește butonul Date!",
                examples: "Exemple:"
            },
            modal: {
                title: "Selector Timestamp",
                light: "Luminos",
                dark: "Întunecat",
                format: "Format Timestamp",
                preview: "Previzualizare",
                insert: "Inserează",
                insertTimestamp: "Inserează Timestamp"
            },
            option: {
                replaceMessageContents: {
                    label: "Înlocuiește în conținut",
                    description: "Înlocuiește timestamps direct în textul mesajului"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Permite vizualizarea informațiilor despre un server",
            context: {
                serverInfo: "Info Server"
            },
            option: {
                sorting: {
                    label: "Sortare",
                    description: "Nume utilizator sau Nume afișat",
                    username: "Nume utilizator",
                    displayname: "Nume afișat",
                    none: "Fără sortare"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Info Server",
                    friends: "Prieteni",
                    mutualUsers: "Utilizatori comuni",
                    blockedUsers: "Utilizatori blocați",
                    ignoredUsers: "Utilizatori ignorați"
                },
                owner: "Proprietar Server",
                loading: "Se încarcă...",
                createdAt: "Creat la",
                joinedAt: "Intrat la",
                vanityLink: "Link personalizat",
                preferredLocale: "Limba preferată",
                verification: {
                    level: "Nivel verificare",
                    none: "Niciunul",
                    low: "Scăzut",
                    medium: "Mediu",
                    high: "Ridicată",
                    highest: "Cea mai ridicată"
                },
                serverBoosts: "Boost-uri Server",
                channels: "Canale",
                roles: "Roluri"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Adaugă numărul de prieteni online sau numărul de servere în lista de servere",
            friends: "Prieteni",
            servers: "Servere",
            option: {
                mode: {
                    label: "Mod",
                    description: "Ce să afișeze",
                    friend: "Doar prieteni online",
                    server: "Doar număr servere",
                    both: "Ambele"
                },
                useCompact: {
                    label: "Mod compact",
                    description: "Afișează indicatorul doar ca text"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Navighează mai bine prin servere cu un buton de căutare rapidă",
            tooltip: "Caută"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Aduce blocuri de cod stil VS Code în Discord, prin Shiki",
            option: {
                theme: {
                    label: "Temă",
                    description: "Teme implicite"
                },
                customTheme: {
                    label: "Temă personalizată",
                    description: "Link către o temă VS Code (JSON)",
                    mustURL: "Trebuie să fie un URL valid",
                    mustJSON: "Trebuie să fie un fișier JSON"
                },
                tryHljs: {
                    label: "Rezervă la Hljs",
                    description: "Folosește stilul implicit Discord dacă Shiki nu e necesar.",
                    never: "Niciodată",
                    secondary: "Preferă Shiki în loc de Highlight.js",
                    primary: "Preferă Highlight.js în loc de Shiki",
                    always: "Întotdeauna"
                },
                useDevIcon: {
                    label: "Pictograme limbaj (Devicon)",
                    description: "Cum apar pictogramele limbajului de programare",
                    disabled: "Dezactivat",
                    colorless: "Fără culoare",
                    colored: "Colorat"
                },
                bgOpacity: {
                    label: "Opacitate fundal",
                    description: "Nivelul de transparență al fundalului"
                }
            },
            button: {
                copy: "Copiază",
                copied: "Copiat!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Arată mereu toate butoanele mesajului (edit, delete etc.) fără a necesita tasta Shift.",
            option: {
                noShiftDelete: {
                    label: "Ștergere fără Shift",
                    description: "Elimină necesitatea de a ține Shift pentru a șterge un mesaj."
                },
                noShiftPin: {
                    label: "Fixare fără Shift",
                    description: "Elimină necesitatea de a ține Shift pentru a fixa un mesaj."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Afișează insignele autorului mesajului lângă numele acestuia în chat.",
            option: {
                showPlexcordDonor: {
                    label: "Arată insigna de donator Plexcord",
                    description: "Activează pentru a afișa insignele de donator Plexcord în chat."
                },
                plexcordDonorPosition: {
                    label: "Poziție insignă donator Plexcord",
                    description: "Poziția insignelor de donator Plexcord."
                },
                showPlexcordContributor: {
                    label: "Arată insigna de contribuitor Plexcord",
                    description: "Activează pentru a afișa insignele de contribuitor Plexcord în chat."
                },
                plexcordContributorPosition: {
                    label: "Poziție insignă contribuitor Plexcord",
                    description: "Poziția insignelor de contribuitor Plexcord."
                },
                showDiscordProfile: {
                    label: "Arată insignele de profil Discord",
                    description: "Activează pentru a afișa insignele de profil Discord în chat."
                },
                discordProfilePosition: {
                    label: "Poziție insignă profil Discord",
                    description: "Poziția insignelor de profil Discord."
                },
                showDiscordNitro: {
                    label: "Arată insigna Discord Nitro",
                    description: "Activează pentru a afișa insignele Discord Nitro în chat."
                },
                discordNitroPosition: {
                    label: "Poziție insignă Discord Nitro",
                    description: "Poziția insignelor Discord Nitro."
                },
                badgeSettings: {
                    label: "Setări insignă",
                    description: "Configurează poziția altor insigne afișate în chat.",
                    modal: "Trage insignele pentru a le reordona; poți da click pentru a activa/dezactiva un anumit tip de insignă."
                }
            },
            badge: {
                plexcord: "Insignă donator Plexcord",
                contributor: "Insignă contribuitor Plexcord",
                discordProfile: "Insigne profil Discord (HypeSquad, Staff Discord, Dezvoltator activ, etc.)",
                nitro: "Insignă Nitro",
                staff: "Staff Discord",
                partner: "Proprietar de server partener",
                events: "Evenimente HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Discord Bug Hunter",
                earlyVerifiedBotDeveloper: "Dezvoltator timpuriu de boți verificați",
                earlySupporter: "Susținător timpuriu",
                moderatorProgram: "Alumni al programului de moderatori"
            },
            modal: {
                plexcordContributor: "Contribuitor Plexcord",
                discordNitro: "Discord Nitro",
                basic: "Basic",
                classic: "Classic"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Afișează conturile conectate în ferestrele de profil (popouts)",
            option: {
                iconSize: {
                    label: "Dimensiune pictogramă",
                    description: "Dimensiunea pictogramei (px)"
                },
                iconSpacing: {
                    label: "Spațiere pictograme",
                    description: "Marginea pictogramei",
                    compact: "Compact",
                    cozy: "Cozy (Aerisit)",
                    roomy: "Roomy (Spațios)"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Afișează canalele pe care nu ai permisiunea de a le vedea.",
            tooltip: "Canal ascuns",
            option: {
                channelStyle: {
                    label: "Stil canal",
                    description: "Stilul utilizat pentru afișarea canalelor ascunse.",
                    classic: "Clasic",
                    muted: "Muted (Silențios)",
                    showUnreads: "Arată mesajele necitite",
                    mutedWithUnreads: "Muted și arată necitite"
                },
                showMode: {
                    label: "Mod afișare",
                    description: "Modul utilizat pentru afișarea canalelor ascunse.",
                    lock: "Stil simplu cu pictogramă lacăt",
                    hidden: "Stil Muted cu pictograma ochi ascuns în dreapta",
                    lockIconRight: "Pictogramă lacăt în dreapta"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Stare implicită listă utilizatori/roluri",
                    description: "Dacă lista de utilizatori și roluri permise pe canalele ascunse ar trebui să fie deschisă implicit"
                }
            },
            channelType: {
                text: "text",
                announcement: "anunțuri",
                forum: "forum",
                voice: "voce",
                stage: "stage"
            },
            sortOrder: {
                latestActivity: "Ultima activitate",
                creationDate: "Data creării"
            },
            forumLayout: {
                default: "Nesetat",
                list: "Vizualizare listă",
                grid: "Vizualizare galerie"
            },
            videoQuality: {
                auto: "Automată",
                full: "720p"
            },
            modal: {
                hidden: "ascuns",
                locked: "blocat",
                threads: "fire de execuție (threads)",
                posts: "postări",
                messages: "mesaje",
                post: "postare",
                message: "mesaj",
                unknown: "necunoscut",
                permissionDetails: "Detalii permisiuni",
                thisIsA: "Acesta este un canal de {{channelType}} {{status}}",
                canNotSee: "Nu poți vedea {{type}} acestui canal.",
                guidelines: "Cu toate acestea, îi poți vedea regulamentul:",
                lastCreated: "Ultima {{type}} creată:",
                lastPin: "Ultimul mesaj fixat:",
                threadSlowmode: "Slowmode implicit pentru thread-uri:",
                slowmode: "Slowmode:",
                bitrate: "Bitrate:",
                region: "Regiune:",
                automatic: "Automată",
                videoQuality: "Mod calitate video:",
                inactiveArchiveDuration: "Durata implicită de inactivitate înainte de arhivarea {{type}}",
                defaultLayout: "Aspect implicit:",
                defaultSort: "Ordine de sortare implicită:",
                defaultReaction: "Emoji de reacție implicit:",
                requireTag: "Postările pe acest forum necesită setarea unei etichete.",
                availableTags: "Etichete disponibile:",
                allowedUsersAndRoles: "Utilizatori și roluri permise:",
                hideAllowedUsersAndRoles: "Ascunde utilizatorii și rolurile permise",
                viewAllowedUsersAndRoles: "Vezi utilizatorii și rolurile permise"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Afișează diverse elemente ascunse sau destinate doar moderatorilor, indiferent de permisiuni.",
            option: {
                showTimeouts: {
                    label: "Arată Timeout-urile membrilor în chat",
                    description: "Afișează pictogramele de timeout ale membrilor în chat."
                },
                showInvitesPaused: {
                    label: "Arată invitațiile suspendate",
                    description: "Afișează mesajul de invitații suspendate în lista de servere."
                },
                showModView: {
                    label: "Arată Mod View",
                    description: "Afișează opțiunea 'Mod View' în meniul contextual al membrilor pe toate serverele."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Adaugă o opțiune în meniul contextual pentru a afișa conținutul integrat (embeds) pentru link-urile care nu au unul",
            context: {
                embed: {
                    show: "Arată Embed",
                    hide: "Elimină Embed"
                }
            },
            error: {
                failed: "Eșec la obținerea embed-ului",
                noEmbed: "Nu s-au găsit embed-uri"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Afișează orice combinație de porecle personalizate, porecle de prieteni, porecle de server, nume afișate și nume de utilizator în chat.",
            option: {
                messages: {
                    label: "Mesaje",
                    description: "Afișează formatul numelui personalizat în mesaje."
                },
                replies: {
                    label: "Răspunsuri",
                    description: "Afișează formatul numelui personalizat în răspunsuri."
                },
                mentions: {
                    label: "Mențiuni",
                    description: "Afișează formatul numelui personalizat în mențiuni."
                },
                typingIndicator: {
                    label: "Indicator de scriere",
                    description: "Afișează primul nume disponibil din formatul tău personalizat în indicatorul de scriere."
                },
                memberList: {
                    label: "Lista de membri",
                    description: "Afișează primul nume disponibil din formatul tău personalizat în lista de membri."
                },
                profilePopout: {
                    label: "Fereastră de profil",
                    description: "Afișează primul nume disponibil din formatul tău personalizat în ferestrele de profil."
                },
                voiceChannels: {
                    label: "Canale vocale",
                    description: "Afișează primul nume disponibil din formatul tău personalizat în canalele vocale."
                },
                reactions: {
                    label: "Reacții",
                    description: "Afișează primul nume disponibil în mesajele de tip tooltip ale reacțiilor și numele complet în listele de reacții."
                },
                discriminators: {
                    label: "Discriminatori (#0000)",
                    description: "Adaugă discriminatorii la numele de utilizator pentru boți. Aceștia sunt încă folosiți pentru boți și ajută la diferențierea lor."
                },
                hideDefaultAtSign: {
                    label: "Ascunde simbolul @ implicit",
                    description: "Ascunde simbolul '@' din fața numelui în mențiuni și răspunsuri."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Scurtează toate numele în Mod Streamer",
                    description: "Scurtează toate numele, nu doar numele de utilizator, cât timp Modul Streamer este activ."
                },
                removeDuplicates: {
                    label: "Elimină duplicatele",
                    description: "Dacă oricare dintre nume sunt identice, elimină-le, lăsând doar numele unice."
                },
                ignoreFonts: {
                    label: "Ignoră fonturile",
                    description: "Pentru numele secundare, folosește 'gg sans' indiferent de fontul personalizat al utilizatorului."
                },
                ignoreGradients: {
                    label: "Ignoră degradeurile",
                    description: "Pentru numele ne-primare, ignoră degradeurile de rol sau efectele Nitro."
                },
                animateGradients: {
                    label: "Animează degradeurile",
                    description: "Animează degradeul rolului pentru numele secundare, dacă acesta există."
                },
                nameSeparator: {
                    label: "Separator de nume",
                    description: "Separatorul folosit între nume. Implicit este un spațiu."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Nume prieten doar în DM",
                    description: "Afișează porecla de prieten doar în mesajele directe, nu și pe servere."
                },
                customNameOnlyInDirectMessages: {
                    label: "Nume personalizat doar în DM",
                    description: "Afișează numele personalizat doar în mesajele directe, nu și pe servere."
                },
                includedNames: {
                    label: "Nume incluse",
                    description: "Ordinea de afișare a numelor. Folosește: {user}, {display}, {nick}, {friend}."
                },
                customNameColor: {
                    label: "Culoare nume personalizat",
                    description: "Culoarea pentru numele personalizat dacă nu este primul afișat."
                },
                friendNameColor: {
                    label: "Culoare nume prieten",
                    description: "Culoarea pentru porecla prietenului dacă nu este primul afișat."
                },
                nicknameColor: {
                    label: "Culoare poreclă",
                    description: "Culoarea pentru poreclă dacă nu este primul afișat."
                },
                displayNameColor: {
                    label: "Culoare nume afișat",
                    description: "Culoarea pentru numele afișat dacă nu este primul afișat."
                },
                usernameColor: {
                    label: "Culoare nume utilizator",
                    description: "Culoarea pentru numele de utilizator dacă nu este primul afișat."
                },
                triggerNameRerender: {
                    label: "Forțează rerandarea numelor",
                    description: "Forțează o actualizare a numelor prin comutarea acestei setări."
                }
            },
            modal: {
                change: {
                    title: "Schimbă porecla SMYN"
                },
                add: {
                    title: "Adaugă poreclă SMYN"
                },
                setCustom: "Setează o poreclă SMYN personalizată pentru acest utilizator.",
                nickname: "Poreclă SMYN",
                reset: "Resetează porecla SMYN",
                cancel: "Anulează"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Arată cât timp mai durează timeout-ul unui utilizator, fie în tooltip, fie lângă pictograma de timeout",
            option: {
                displayStyle: {
                    label: "Stil afișare",
                    description: "Cum se afișează durata timeout-ului",
                    tooltip: "În Tooltip",
                    inline: "Lângă pictograma de timeout"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Afișează canalele ascunse în spatele resurselor de server în lista de canale"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Afișează numele piesei în loc de artist pentru activitatea Spotify"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Deschide un alt canal sau un DM ca bară laterală sau ca fereastră separată (popout)",
            toolbox: {
                label: "Deschide chat-ul anterior"
            },
            context: {
                label: "Deschide chat în bara laterală"
            },
            modal: {
                switch: "Schimbă canalele",
                popout: "Fereastră separată chat",
                close: "Închide chat-ul lateral"
            },
            option: {
                persistSidebar: {
                    label: "Menține chat-ul lateral",
                    description: "Păstrează chat-ul lateral deschis după repornirea Discord"
                },
                patchCommunity: {
                    label: "Patch comunitate",
                    description: "Patch pentru funcții precum Channel Browser sau fila Members de pe serverele de comunitate."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Semnătură automată la finalul mesajelor",
            option: {
                name: {
                    label: "Semnătură",
                    description: "Textul care va fi adăugat la finalul mesajelor tale"
                },
                textHeader: {
                    label: "Antet text",
                    description: "Ce antet să prefațeze semnătura"
                },
                showIcon: {
                    label: "Arată pictogramă",
                    description: "Arată o pictogramă pentru comutarea pluginului în bara de chat"
                },
                contextMenu: {
                    label: "Meniu contextual",
                    description: "Adaugă opțiunea de comutare în meniul contextual al zonei de scriere"
                },
                isEnabled: {
                    label: "Este activat",
                    description: "Comută funcționalitatea"
                }
            },
            tooltip: {
                enable: "Activează semnătura",
                disable: "Dezactivează semnătura"
            },
            context: {
                enable: "Activează semnătura"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Comută semnătura ta",
                    toogle: "Comută semnătura (implicit este toggle)",
                    enabled: "Semnătură activată",
                    disabled: "Semnătură dezactivată"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Adaugă un buton în bara de chat pentru a trimite mesaje silențioase (@silent).",
            option: {
                persistState: {
                    label: "Menține starea",
                    description: "Cum să fie păstrată starea butonului de mesaj silențios",
                    none: "Nu menține (reset la schimbarea canalului)",
                    channels: "Menține între canale",
                    restarts: "Menține între canale și reporniri"
                },
                autoDisable: {
                    label: "Dezactivare automată",
                    description: "Dezactivează automat modul silențios după trimiterea unui mesaj"
                }
            },
            tooltip: {
                enable: "Activează mesajul silențios",
                disable: "Dezactivează mesajul silențios"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Ascunde indicatorul tău de scriere din chat.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Ascunde indicatorul tău de scriere din chat.",
                    toggle: {
                        name: "toggle",
                        description: "Comută funcționalitatea global, per canal sau per server.",
                        global: "Global",
                        channel: "Canal",
                        guild: "Server"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Ascunde indicatorii de scriere ai altor utilizatori de deasupra barei de chat."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Ascunde indicatorii de scriere ai altor utilizatori din lista de membri."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Arată o pictogramă în bara de chat pentru comutare rapidă."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Arată un meniu în meniul contextual al chat-ului pentru setări rapide."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "Dacă scrierea să fie ascunsă implicit în DM/canale/servere."
                    }
                }
            },
            content: {
                updated: "Setările de scriere silențioasă au fost actualizate.",
                noChanges: "Nicio modificare adusă setărilor."
            },
            tooltip: {
                hidden: "Scriere ascunsă ({{location}})",
                visible: "Scriere vizibilă ({{location}})",
                global: "Scriere vizibilă (Global)"
            },
            option: {
                enabledGlobally: {
                    label: "Activat global",
                    description: "Comută funcționalitatea indicatorului tău de scriere la nivel global."
                },
                hideChatBoxTypingIndicators: {
                    label: "Ascunde indicatorii de scriere din chat",
                    description: "Ascunde indicatorii celorlalți de deasupra barei de chat."
                },
                hideMembersListTypingIndicators: {
                    label: "Ascunde indicatorii de scriere din lista de membri",
                    description: "Ascunde indicatorii celorlalți din lista de membri."
                },
                chatIcon: {
                    label: "Pictogramă chat",
                    description: "Arată o pictogramă în bara de chat pentru modificări rapide."
                },
                chatIconLeftClickAction: {
                    label: "Acțiune click stânga pictogramă",
                    description: "Ce se întâmplă la click stânga pe pictograme.",
                    global: "Comută scrierea global",
                    channel: "Comută scrierea per canal",
                    guild: "Comută scrierea per server",
                    settings: "Deschide setările pluginului"
                },
                chatIconMiddleClickAction: {
                    label: "Acțiune click mijloc pictogramă",
                    description: "Ce se întâmplă la click mijloc pe pictograme.",
                    global: "Comută scrierea global",
                    channel: "Comută scrierea per canal",
                    guild: "Comută scrierea per server",
                    settings: "Deschide setările pluginului"
                },
                chatIconRightClickAction: {
                    label: "Acțiune click dreapta pictogramă",
                    description: "Ce se întâmplă la click dreapta pe pictograme.",
                    global: "Comută scrierea global",
                    channel: "Comută scrierea per canal",
                    guild: "Comută scrierea per server",
                    settings: "Deschide setările pluginului"
                },
                chatContextMenu: {
                    label: "Meniu contextual chat",
                    description: "Arată un meniu derulant în meniul contextual al chat-ului pentru modificări rapide."
                },
                defaultHidden: {
                    label: "Ascuns implicit",
                    description: "Dacă este activat, pluginul va ascunde scrierea ta în toate locațiile care nu sunt listate la 'Locații dezactivate'."
                },
                enabledLocations: {
                    label: "Locații activate",
                    description: "Activează funcționalitatea pentru aceste ID-uri (DM, canal, server)."
                },
                disabledLocations: {
                    label: "Locații dezactivate",
                    description: "Dezactivează funcționalitatea pentru aceste ID-uri."
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Lasă să ningă pe Discord!",
            about: {
                title: "Informații",
                paragraph: "Acest plugin adaugă un efect de ninsoare de Crăciun peste interfața Discord. Poți schimba tipul zăpezii în setările de mai jos.",
                note: "NOTĂ: Deși pe majoritatea calculatoarelor acest plugin nu va afecta performanța, poate cauza lag pe sistemele mai slabe."
            },
            option: {
                typeOfSnow: {
                    label: "Tip de zăpadă",
                    description: "Schimbă tipul zăpezii afișate (afectează performanța).",
                    solid: "Solid (Performanță maximă)",
                    text: "Text (Performanță medie)",
                    emoji: "Imagine (Performanță scăzută)"
                },
                maxSize: {
                    label: "Dimensiune maximă",
                    description: "Dimensiunea maximă a fulgilor"
                },
                speed: {
                    label: "Viteză",
                    description: "Viteza căderii (mai mare = cad mai repede)"
                },
                flakesPerSecond: {
                    label: "Fulgii pe secundă",
                    description: "Densitatea ninsorii"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Sortează cererile de prietenie după data primirii",
            tooltip: "Adăugat la &mdash; {{date}}",
            option: {
                showDates: {
                    label: "Arată datele",
                    description: "Afișează datele pe cererile de prietenie"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Înregistrează toate sunetele de Soundboard redate într-un chat vocal și îți permite să le descarci",
            tooltip: "Deschide jurnalul SoundBoard",
            option: {
                savedIds: {
                    label: "ID-uri salvate",
                    description: "Numărul de ID-uri de soundboard salvate odată (0 = infinit)",
                    notNumber: "Valoarea nu este un număr.",
                    cantDecimal: "Valoarea nu poate fi un număr zecimal.",
                    cantNegative: "Valoarea nu poate fi negativă.",
                    heading: "Numărul de ID-uri de soundboard salvate odată (0 = infinit)",
                    warning: "Atenție! Setarea unei valori mai mici va reseta jurnalul!",
                    placeholder: "Introdu un număr"
                },
                fileType: {
                    label: "Tip fișier",
                    description: "Formatul în care dorești să salvezi fișierul"
                },
                openLogs: {
                    label: "Deschide jurnalele",
                    description: "Afișează jurnalele",
                    button: "Deschide jurnalele"
                },
                soundVolume: {
                    label: "Volum sunet",
                    description: "Cât de tare este sunetul de comutare (0 pentru dezactivare)"
                },
                iconLocation: {
                    label: "Locație pictogramă",
                    description: "Unde să fie afișată pictograma SoundBoard Log (necesită restart)",
                    toolbar: "Bara de instrumente",
                    chatInput: "Zona de scriere chat"
                }
            },
            modal: {
                title: "Jurnale SoundBoard",
                loading: "Se încarcă sunetele...",
                noLogs: "Niciun sunet înregistrat încă. Intră într-un chat vocal!",
                clearLogs: "Șterge jurnalele",
                played: "Redat de {{time}} ori",
                last: "Ultima redare:",
                also: "Redat și de:",
                download: "Descarcă",
                copyId: "Copiază ID",
                copied: "ID copiat în clipboard!",
                playSound: "Redă sunetul",
                moreUsers: "Alte persoane au folosit acest sunet...",
                volume: "Volum Soundboard"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Împarte mesajele lungi în mai multe mesaje pentru a se încadra în limita Discord.",
            option: {
                maxLength: {
                    label: "Lungime maximă mesaj",
                    description: "Lungimea maximă înainte de împărțire. Setează 0 pentru detectare automată."
                },
                disableFileConversion: {
                    label: "Dezactivează conversia în fișier",
                    description: "Dacă este activat, dezactivează conversia în fișier pentru mesajele mari."
                },
                sendDelay: {
                    label: "Întârziere trimitere",
                    description: "Întârzierea între fiecare segment (în secunde)."
                },
                hardSplit: {
                    label: "Împărțire forțată",
                    description: "Dacă este activat, împarte la ultimul caracter în loc de ultimul spațiu/linie nouă."
                },
                splitInSlowmode: {
                    label: "Împarte în Slowmode",
                    description: "Dacă mesajele ar trebui împărțite pe canalele cu Slowmode activ."
                },
                slowmodeMax: {
                    label: "Maxim Slowmode",
                    description: "Timpul maxim de slowmode acceptat pentru împărțire."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Adaugă un buton de comutare pentru vizibilitatea activității Spotify.",
            tooltip: {
                enable: "Pornește activitatea Spotify",
                disable: "Oprește activitatea Spotify"
            },
            option: {
                location: {
                    label: "Locație",
                    description: "Unde să fie afișat butonul de Spotify",
                    panel: "Lângă Mute/Deafen",
                    toolbox: "Plexcord Toolbox"
                },
                activityStatus: {
                    label: "Stare activitate",
                    description: "Starea curentă a activității tale Spotify"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Ascultare împreună gratuită, fără pauză automată în chat-ul vocal și permite activității să continue când ești inactiv.",
            option: {
                noSpotifyAutoPause: {
                    label: "Fără pauză automată Spotify",
                    description: "Dezactivează pauza automată Spotify."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Păstrează activitatea Spotify când ești inactiv",
                    description: "Menține activitatea Spotify redată chiar și când ești Idle"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Partajează piesa, albumul sau artistul curent via comenzi slash (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Partajează {{type}} curent de pe Spotify în chat",
                    track: "Nu asculți nicio piesă pe Spotify.",
                    find: "Nu s-a putut găsi piesa pe Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Adaugă 'Startup Timings' (timpii de pornire) în meniul de setări",
            modal: {
                title: "Timpi de pornire",
                ended: "Trace-ul s-a terminat la:",
                start: "Start",
                interval: "Interval",
                delta: "Delta",
                event: "Eveniment",
                serverTrace: "Server Trace",
                loading: "Se încarcă..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Adaugă notificări pentru schimbările de stare ale prietenilor",
            loading: "Se încarcă...",
            option: {
                notificationsSound: {
                    label: "Sunet notificare",
                    description: "Redă un sunet pentru notificările de stare?"
                },
                usersList: {
                    label: "Lista de utilizatori",
                    description: "Lista utilizatorilor de urmărit pentru notificări",
                    empty: "Niciun utilizator urmărit. Click-dreapta pe un utilizator și selectează 'Status Notifications' pentru a-l adăuga."
                }
            },
            context: {
                label: "Notificări de stare",
                notifications: "Notificări",
                type: {
                    all: "Toate",
                    online: "Online",
                    offline: "Offline",
                    none: "Niciuna"
                }
            },
            notification: {
                unknownUser: "Utilizator",
                title: "Notificări de stare"
            },
            status: {
                online: "Online",
                idle: "Inactiv (Idle)",
                dnd: "Nu deranja (DnD)",
                offline: "Offline",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Îți permite să salvezi stări (statuses) personalizate și să le setezi mai târziu",
            button: {
                remember: "Reține starea"
            },
            context: {
                edit: "Editează presetările",
                set: "Setează stare personalizată"
            },
            notification: {
                successfully: "Starea a fost salvată cu succes"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Sincronizează-ți starea Discord cu Steam! (Online, Away, Invisible sau Offline.)",
            option: {
                onlineStatus: {
                    label: "Stare Online",
                    description: "Starea Steam când ești Online pe Discord"
                },
                idleStatus: {
                    label: "Stare Idle",
                    description: "Starea Steam când ești Idle pe Discord"
                },
                dndStatus: {
                    label: "Stare Nu deranja",
                    description: "Starea Steam când ești pe Nu deranja"
                },
                invisibleStatus: {
                    label: "Stare Invizibil",
                    description: "Starea Steam când ești Invizibil"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Fă-mă invizibil dacă activitatea este ascunsă",
                    description: "Setează starea Steam pe Invizibil când activitatea Discord este ascunsă"
                }
            },
            status: {
                online: "Online",
                away: "Plecat (Away)",
                invisible: "Invizibil",
                offline: "Offline (Deconectează Steam Chat)",
                disabled: "Dezactivat"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Îți permite să blochezi afișarea stickerelor.",
            option: {
                showGif: {
                    label: "Arată GIF",
                    description: "Dacă să se afișeze un GIF cu o pisică simpatică în locul stickerului."
                },
                showMessage: {
                    label: "Arată mesaj",
                    description: "Dacă să se afișeze un mesaj cu ID-ul care a fost blocat"
                },
                showButton: {
                    label: "Arată buton",
                    description: "Dacă să se afișeze un buton pentru deblocarea stickerului"
                },
                blockedStickers: {
                    label: "Stickere blocate",
                    description: "Lista ID-urilor de stickere blocate (nu edita manual)"
                }
            },
            modal: {
                blocked: "Sticker blocat. ID: {{id}} NUME: {{name}}",
                unblock: "Deblochează {{name}}"
            },
            context: {
                blockSticker: "Blochează sticker",
                unblockSticker: "Deblochează sticker"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Face ca alegerea unui sticker să îl insereze în caseta de chat în loc să îl trimită instantaneu"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Activează automat Modul Streamer când pornești un stream pe Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Dezactivează codecurile de streaming la alegere",
            option: {
                disableAv1Codec: {
                    label: "Dezactivează codecul AV1",
                    description: "Împiedică Discord să folosească AV1 pentru streaming."
                },
                disableH265Codec: {
                    label: "Dezactivează codecul H265",
                    description: "Împiedică Discord să folosească H265 pentru streaming."
                },
                disableH264Codec: {
                    label: "Dezactivează codecul H264",
                    description: "Împiedică Discord să folosească H264 pentru streaming."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Personalizează limita de Super Reacții redate simultan și setează Super Reacția ca implicită",
            option: {
                superReactByDefault: {
                    label: "Super Reacție implicită",
                    description: "Selectorul de reacții va fi setat implicit pe Super Reacții"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Super Reacții nelimitate",
                    description: "Elimină limita de Super Reacții care pot rula simultan"
                },
                superReactionPlayingLimit: {
                    label: "Limită Super Reacții",
                    description: "Maximul de Super Reacții redate odată. Setează 0 pentru a le dezactiva."
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Înlocuiește textul în mesajele tale. Poți găsi reguli gata făcute pe serverul Plexcord.",
            option: {
                replace: {
                    label: "Înlocuire",
                    string: "Înlocuiri simple",
                    stringDescription: "Reguli simple de căutare și înlocuire. De exemplu, găsește 'brb' și înlocuiește-l cu 'be right back'",
                    regex: "Înlocuiri Regex",
                    regexDescription: "Înlocuiri mai avansate folosind expresii regulate. Această secțiune este pentru utilizatori avansați. Dacă nu înțelegi, ignor-o pur și simplu",
                    myMessages: "Aplică mesajelor tale (vizibil pentru toți)",
                    othersMessages: "Aplică mesajelor altora (vizibil doar pentru tine)",
                    allMessages: "Aplică tuturor mesajelor"
                },
                stringRules: {
                    label: "Reguli text",
                    description: "Reguli pentru înlocuirea textului prin potrivire simplă."
                },
                regexRules: {
                    label: "Reguli Regex",
                    description: "Reguli pentru înlocuire folosind expresii regulate."
                }
            },
            modal: {
                title: "Testează regulile",
                find: "Caută",
                findRegex: "Model regex",
                findText: "Text de înlocuit",
                replace: "Înlocuiește",
                replaceDescription: "Textul care va înlocui textul găsit",
                includes: "Doar dacă include",
                includesDescription: "Această regulă va fi aplicată doar dacă mesajul include acest text. Este opțional",
                type: "Scrie un mesaj",
                applied: "Mesaj cu reguli aplicate",
                delete: "Șterge regula",
                add: "Adaugă regula",
                empty: "Regulă goală",
                rule: "Regulă",
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Adaugă atribute de date la diverse elemente pentru scopuri de personalizare tematică (theming)"
        },
        timezones: {
            name: "Timezones",
            description: "Afișează ora locală a utilizatorilor în profiluri și antetele mesajelor",
            button: {
                wantToSave: "Vrei să-ți salvezi fusul orar în baza de date? Click aici.",
                yourLocalTimezone: "(Fusul tău orar local)"
            },
            context: {
                set: "Setează fus orar local"
            },
            toast: {
                refresh: {
                    successfully: "Fusuri orare reîmprospătate!",
                    failed: "Eșec la reîmprospătarea fusurilor orare!",
                    failedTo: "Nu s-au putut actualiza fusurile orare."
                },
                update: {
                    successfully: "Fus orar actualizat!",
                    failed: "Eșec la setarea fusului orar."
                },
                delete: {
                    successfully: "Fus orar șters!",
                    failed: "Eșec la ștergerea fusului orar."
                },
                auth: {
                    failed: "Autentificare eșuată.",
                    success: "Autorizare reușită!"
                }
            },
            toolbox: {
                set: "Setează fus orar în baza de date",
                refresh: "Reîmprospătează fusurile orare"
            },
            option: {
                showOwnTimezone: {
                    label: "Arată fusul orar propriu",
                    description: "Afișează propriul fus orar în profil și mesaje"
                },
                twentyFourHourTime: {
                    label: "Format 24 ore",
                    description: "Afișează ora în format de 24 de ore"
                },
                showTimezoneInfo: {
                    label: "Arată info fus orar",
                    description: "Afișează informații despre fusul orar lângă oră"
                },
                showMessageHeaderTime: {
                    label: "Arată ora în antetul mesajului",
                    description: "Afișează ora în antetele mesajelor"
                },
                showProfileTime: {
                    label: "Arată ora în profil",
                    description: "Afișează ora în profilurile de utilizator"
                },
                useDatabase: {
                    label: "Folosește baza de date",
                    description: "Activează baza de date pentru a obține fusurile orare ale utilizatorilor"
                },
                preferDatabaseOverLocal: {
                    label: "Preferă baza de date în locul stocării locale",
                    description: "Dă prioritate bazei de date pentru fusurile orare"
                },
                databaseUrl: {
                    label: "URL Bază de date",
                    description: "URL-ul serverului bazei de date de fusuri orare"
                },
                setDatabaseTimezone: {
                    label: "Setează fus orar în baza de date",
                    description: "Setează fusul tău orar pe server",
                    setTimezone: "Setează fus orar pe baza de date"
                },
                resetDatabaseTimezone: {
                    label: "Resetează fus orar bază de date",
                    description: "Șterge fusul tău orar din baza de date",
                    failed: "Eșec la resetarea fusului orar"
                },
                askedTimezone: {
                    label: "Fus orar întrebat",
                    description: "Dacă utilizatorul a fost întrebat să-și seteze fusul orar"
                }
            },
            modal: {
                title: "Fusuri orare",
                select: "Selectează fus orar",
                selectPlaceholder: "Alege un fus orar",
                delete: "Șterge fus orar",
                save: "Salvează"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Afișează o notificare tip toast ori de câte ori primești un mesaj direct.",
            notification: {
                call: "A pornit un apel cu tine!",
                recipient: {
                    add: "{{target}} a fost adăugat în grup de către {{actor}}.",
                    remove: "{{target}} a fost eliminat din grup de către {{actor}}.",
                    left: "A părăsit grupul."
                },
                channel: {
                    change: {
                        name: "A schimbat numele canalului în {{name}}.",
                        icon: "A schimbat pictograma canalului."
                    },
                    pinned: "A fixat un mesaj."
                },
                sent: {
                    embed: "A trimis un embed.",
                    sticker: "A trimis un sticker.",
                    attachment: "Atașament:"
                },
                redacted: "Conținutul mesajului a fost cenzurat.",
                friend: {
                    accept: "{{user}} este acum prietenul tău",
                    acceptBody: "Acum poți să-i trimiți mesaje direct.",
                    request: "{{user}} ți-a trimis o cerere de prietenie.",
                    requestBody: "O poți accepta sau refuza în fila Prieteni."
                },
                example: {
                    title: "Notificare exemplu",
                    body: "Acesta este conținutul unei notificări de exemplu."
                }
            },
            modal: {
                dismiss: "Închide notificarea",
                attachments: "{{attachments}} atașament(e) {{were}} trimise."
            },
            option: {
                position: {
                    label: "Poziție",
                    description: "Poziția notificării pe ecran",
                    topRight: "Dreapta Sus",
                    topLeft: "Stânga Sus",
                    bottomRight: "Dreapta Jos",
                    bottomLeft: "Stânga Jos"
                },
                timeout: {
                    label: "Durată",
                    description: "Timpul în secunde cât vor fi afișate notificările"
                },
                opacity: {
                    label: "Opacitate",
                    description: "Nivelul de transparență al notificării"
                },
                determineServerNotifications: {
                    label: "Respectă setările serverului",
                    description: "Arată notificări doar dacă setările serverului permit acest lucru"
                },
                directMessages: {
                    label: "Mesaje directe",
                    description: "Arată notificări pentru mesaje directe"
                },
                groupMessages: {
                    label: "Mesaje de grup",
                    description: "Arată notificări pentru mesaje în grupuri"
                },
                friendServerNotifications: {
                    label: "Notificări prieteni & servere",
                    description: "Arată notificări când prietenii scriu pe serverele comune"
                },
                friendActivity: {
                    label: "Activitate prieteni",
                    description: "Arată notificări pentru cereri de prietenie noi"
                },
                notifyFor: {
                    label: "Notifică pentru",
                    description: "Listă de ID-uri de canale pentru care vrei notificări (separate prin virgulă)"
                },
                ignoreUsers: {
                    label: "Ignoră utilizatori",
                    description: "Listă de ID-uri de utilizatori pentru care NU vrei notificări"
                },
                exampleButton: {
                    label: "Buton exemplu",
                    description: "Afișează o notificare tip toast de probă.",
                    show: "Arată notificare exemplu"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Adaugă o scurtătură de taste personalizabilă pentru a comuta camera web.",
            option: {
                keyBind: {
                    label: "Scurtătură",
                    description: "Tasta pentru activarea/dezactivarea camerei."
                },
                reqCtrl: {
                    label: "Necesită Ctrl",
                    description: "Necesită apăsarea tastei Control."
                },
                reqShift: {
                    label: "Necesită Shift",
                    description: "Necesită apăsarea tastei Shift."
                },
                reqAlt: {
                    label: "Necesită Alt",
                    description: "Necesită apăsarea tastei Alt."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Tradu mesajele folosind Google Translate sau DeepL",
            tooltip: {
                label: "Tradu"
            },
            context: {
                translate: "Tradu",
                open: "Deschide fereastra de traducere",
                auto: "Traducere automată activată"
            },
            option: {
                receivedInput: {
                    label: "Limbă sursă primită",
                    description: "Limba din care mesajele primite ar trebui traduse"
                },
                receivedOutput: {
                    label: "Limbă destinație primită",
                    description: "Limba în care mesajele primite ar trebui traduse"
                },
                sentInput: {
                    label: "Limbă sursă trimisă",
                    description: "Limba din care mesajele tale ar trebui traduse"
                },
                sentOutput: {
                    label: "Limbă destinație trimisă",
                    description: "Limba în care mesajele tale ar trebui traduse"
                },
                service: {
                    label: "Serviciu de traducere",
                    description: "DeepL Pro necesită o cheie API plătită",
                    descriptionWeb: "Serviciu de traducere (Nu este suportat pe Web!)",
                    google: "Google Translate",
                    deepl: "DeepL Free",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "Cheie API DeepL",
                    description: "Cheia ta API DeepL",
                    placeholder: "Obține cheia de pe deepl.com"
                },
                autoTranslate: {
                    label: "Traducere automată",
                    description: "Tradu automat mesajele înainte de a le trimite. Poți comuta asta și cu Shift+Click pe buton."
                },
                showAutoTranslateTooltip: {
                    label: "Arată info traducere automată",
                    description: "Arată un tooltip când un mesaj este tradus automat"
                }
            },
            modal: {
                title: "Tradu",
                select: "Selectează o limbă",
                auto: "Traducere automată",
                dismiss: "Închide",
                translated: "tradus din {{from}}",
                failed: {
                    to: "Eșec la traducerea {{text}}",
                    connect: "Eșec la conectarea cu DeepL API:"
                },
                wrong: "Ceva nu a mers bine. Verifică consola sau serverul de suport.",
                deepl: {
                    api: "Cota DeepL a fost depășită. Se revine la Google Translate.",
                    apiKey: "Cheia DeepL nu este setată. Se revine la Google.",
                    auth: "Cheie API sau versiune DeepL invalidă"
                },
                autoTranslateEnabled: {
                    title: "Traducerea automată Plexcord activată",
                    body: "Tocmai ai activat traducerea automată! Orice mesaj va fi tradus înainte de trimitere.",
                    confirm: "Dezactivează",
                    cancel: "Am înțeles",
                    secondaryConfirm: "Nu-mi mai arăta asta"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Adaugă un indicator în lista de canale dacă cineva scrie pe un canal.",
            option: {
                includeCurrentChannel: {
                    label: "Include canalul curent",
                    description: "Dacă să se afișeze indicatorul pentru canalul selectat în prezent"
                },
                includeMutedChannels: {
                    label: "Include canalele 'Muted'",
                    description: "Dacă să se afișeze indicatorul pentru canalele puse pe silențios."
                },
                includeIgnoredUsers: {
                    label: "Include utilizatorii ignorați",
                    description: "Dacă să se afișeze indicatorul pentru utilizatorii ignorați."
                },
                includeBlockedUsers: {
                    label: "Include utilizatorii blocați",
                    description: "Dacă să se afișeze indicatorul pentru utilizatorii blocați."
                },
                indicatorMode: {
                    label: "Mod indicator",
                    description: "Cum ar trebui afișat indicatorul?",
                    both: "Avatare și puncte animate",
                    dots: "Puncte animate",
                    avatars: "Avatare"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Arată avatarele și culorile rolurilor în indicatorul de scriere de deasupra chat-ului",
            option: {
                showAvatars: {
                    label: "Arată mai mulți utilizatori",
                    description: "Afișează avatarele în indicatorul de scriere"
                },
                showRoleColors: {
                    label: "Arată culorile rolurilor",
                    description: "Folosește culorile rolurilor în indicatorul de scriere"
                },
                alternativeFormatting: {
                    label: "Formatare alternativă",
                    description: "Afișează un mesaj mai util când scriu mai mulți utilizatori"
                },
                amITyping: {
                    label: "Scriu și eu?",
                    description: "Îți arată dacă ceilalți te pot vedea scriind (conform setărilor tale)"
                }
            },
            others: {
                areTyping: "și alți {{count}} scriu..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Elimină indentarea (spațiile) de la începutul blocurilor de cod"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Convertește unitățile metrice în unități imperiale și invers",
            tooltip: "Convertește unitățile",
            option: {
                myUnits: {
                    label: "Unitățile mele",
                    description: "Unitățile pe care le folosești și în care vrei conversia.",
                    imperial: "Imperiale (inch, lbs, etc)",
                    metric: "Metrice (cm, kg, etc)"
                }
            },
            button: {
                dismiss: "Închide"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Mărește numărul de conturi pe care le poți adăuga în Discord.",
            option: {
                maxAccounts: {
                    label: "Maxim conturi",
                    description: "Numărul de conturi ce pot fi adăugate (0 pentru nelimitat)"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Permite un zoom mai mare la decuparea imaginii pentru avatar",
            option: {
                zoomMultiplier: {
                    label: "Multiplicator Zoom",
                    description: "Valoarea multiplicatorului pentru zoom"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Permite restabilirea embed-urilor cenzurate în mesaje",
            context: {
                unsuppress: "Restabilește Embed",
                suppress: "Cenzurează Embed"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Afișează informații aleatorii inutile în Discord (fapte diverse/curiozități).",
            recording: "Se înregistrează...",
            record: "Înregistrează",
            option: {
                delay: {
                    label: "Interval notificare",
                    description: "Intervalul de afișare în minute"
                },
                historyHotkey: {
                    label: "Scurtătură istoric",
                    description: "Tasta pentru a vedea istoricul faptelor afișate"
                },
                randomFactHotkey: {
                    label: "Scurtătură fapt aleatoriu",
                    description: "Tasta pentru afișarea unui fapt nou"
                },
                sameFact: {
                    label: "Evită repetarea",
                    description: "Evită afișarea aceluiași fapt până nu au fost arătate toate"
                },
                lastNFacts: {
                    label: "Recente de evitat",
                    description: "Numărul de fapte recente care nu trebuie repetate (0 = toate)"
                }
            },
            modal: {
                title: "UselessInfo (Info inutile)",
                history: {
                    none: "Niciun fapt încă. Folosește scurtătura sau așteaptă.",
                    source: "Sursă"
                },
                showRandom: "Arată aleatoriu",
                close: "Închide"
            },
            notification: {
                title: "Știai că?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Afișează pronumele utilizatorilor în antetele mesajelor",
            option: {
                pronounsFormat: {
                    label: "Format pronume",
                    description: "Formatul de afișare a pronumelor",
                    lowercase: "Litere mici",
                    capitalized: "Cu majusculă"
                },
                showSelf: {
                    label: "Arată-mi pronumele",
                    description: "Activează/dezactivează afișarea propriilor pronume"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Afișează un indicator când un utilizator se află pe un canal vocal",
            option: {
                showInUserProfileModal: {
                    label: "Arată în fereastra de profil",
                    description: "Afișează indicatorul lângă nume în profilul extins"
                },
                showInMemberList: {
                    label: "Arată în lista de membri",
                    description: "Afișează indicatorul în lista de membri și DM"
                },
                showInMessages: {
                    label: "Arată în mesaje",
                    description: "Afișează indicatorul în dreptul mesajelor trimise"
                }
            },
            modal: {
                inVoiceChat: "În apel vocal"
            },
            notification: {
                cannotJoin: "Nu poți intra pe canalul vocal al utilizatorului."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Afișează bannerele de utilizator din baza de date USRBG (permite bannere fără Nitro)",
            option: {
                nitroFirst: {
                    label: "Prioritate Nitro",
                    description: "Ce banner să folosească dacă ambele sunt prezente",
                    nitro: "Banner Nitro",
                    usrbg: "Banner USRBG"
                },
                voiceBackground: {
                    label: "Fundal voce",
                    description: "Folosește bannerele USRBG ca fundal în chat-ul vocal"
                }
            },
            button: "Obține propriul banner USRBG"
        },
        validReply: {
            name: "ValidReply",
            description: "Rezolvă eroarea 'Mesajul nu a putut fi încărcat' la trecerea mouse-ului peste un răspuns"
        },
        validUser: {
            name: "ValidUser",
            description: "Rezolvă mențiunile pentru utilizatori necunoscuți care apar ca '@unknown-user'.",
            badges: {
                discordBugHunter: "Discord Bug Hunter",
                moderatorProgramsAlumni: "Alumni Programe Moderatori",
                discordStaff: "Staff Discord",
                hypeSquadEvents: "Evenimente HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                partneredServerOwner: "Proprietar server partener",
                nitro: "Discord Nitro",
                earlySupporter: "Susținător timpuriu",
                earlyVerifiedBotDeveloper: "Dezvoltator timpuriu boți verificați"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Intră pe canalele vocale prin dublu-click în loc de click simplu"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Anunță vocal când utilizatorii intră, pleacă sau se mută între canalele vocale",
            option: {
                voice: {
                    label: "Voce"
                },
                volume: {
                    label: "Volum",
                    description: "Volumul naratorului"
                },
                rate: {
                    label: "Viteză",
                    description: "Viteza naratorului"
                },
                sayOwnName: {
                    label: "Spune-mi numele",
                    description: "Spune-ți propriul nume la acțiuni"
                },
                latinOnly: {
                    label: "Doar caractere latine",
                    description: "Elimină caracterele non-latine din nume înainte de pronunțare"
                },
                joinMessage: {
                    label: "Mesaj intrare",
                    description: "Mesajul rostit la intrare"
                },
                leaveMessage: {
                    label: "Mesaj ieșire",
                    description: "Mesajul rostit la ieșire"
                },
                moveMessage: {
                    label: "Mesaj mutare",
                    description: "Mesajul rostit la mutare"
                },
                muteMessage: {
                    label: "Mesaj Mute",
                    description: "Mesajul rostit la Mute (doar pentru tine momentan)"
                },
                unmuteMessage: {
                    label: "Mesaj Unmute",
                    description: "Mesajul rostit la Unmute"
                },
                deafenMessage: {
                    label: "Mesaj Deafen",
                    description: "Mesajul rostit la Deafen"
                },
                undeafenMessage: {
                    label: "Mesaj Undeafen",
                    description: "Mesajul rostit la Undeafen"
                }
            },
            modal: {
                title: "Redă sunete exemplu",
                voiceTitle: "Voce",
                voice: "Selectează o voce",
                languageTitle: "Limbă",
                language: "Selectează o limbă",
                noVoice: "Nu s-au găsit voci de narator. ",
                linuxNote: "Instalează speech-dispatcher sau espeak și pornește Discord cu flag-ul --enable-speech-dispatcher",
                someNarrator: "Încearcă să instalezi voci în setările naratorului din sistemul de operare",
                dontHaveEnglish: "Nu ai voci englezești instalate, s-ar putea să sune ciudat",
                customiseMessages: "Poți personaliza mesajele rostite mai jos. Lasă gol pentru a dezactiva un mesaj",
                placeholdersInfo: "Variabilele {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} și {{CHANNEL}} vor fi înlocuite cu numele corespunzătoare"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Face avatarele și bannerele din profiluri clicabile pentru vizualizare; adaugă opțiuni de vizualizare în meniul contextual.",
            context: {
                view: {
                    avatar: "Vezi Avatar",
                    serverAvatar: "Vezi Avatar Server",
                    icon: "Vezi Pictogramă",
                    banner: "Vezi Banner"
                }
            },
            option: {
                format: {
                    label: "Format",
                    description: "Alege formatul imaginii (imaginile animate vor fi mereu .gif)"
                },
                imgSize: {
                    label: "Dimensiune imagine",
                    description: "Dimensiunea la care să se deschidă imaginea"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Copiază și vizualizează conținutul brut (raw) sau datele oricărui mesaj, canal sau server",
            context: {
                copyLeft: "Copiază Raw (Click Stânga) / Vezi Raw (Click Dreapta)",
                copyRight: "Copiază Raw (Click Dreapta) / Vezi Raw (Click Stânga)",
                view: "Vezi Raw"
            },
            option: {
                popoverButton: {
                    label: "Buton Popover",
                    description: "Arată un buton deasupra mesajului pentru vizualizare raw."
                },
                clickMethod: {
                    label: "Metodă de click",
                    description: "Schimbă modul de acționare al butonului.",
                    left: "Click stânga pentru vizualizare.",
                    right: "Click dreapta pentru vizualizare."
                }
            },
            modal: {
                title: "Vizualizare Raw",
                content: "Conținut",
                data: "Date {{type}}",
                copied: "Datele {{type}} au fost copiate!",
                copy: "Copiază JSON {{type}}",
                copiedContent: "Conținutul a fost copiat!",
                copyContent: "Copiază conținutul brut"
            },
            types: {
                message: "Mesaj",
                channel: "Canal",
                guild: "Server",
                role: "Rol",
                user: "Utilizator"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Trimite rapid DM, pune mute sau deafen oricărui utilizator direct din panoul de apel vocal.",
            option: {
                showChatButton: {
                    label: "Arată buton chat",
                    description: "Dacă dorești afișarea butonului de chat"
                },
                showMuteButton: {
                    label: "Arată buton Mute",
                    description: "Dacă dorești afișarea butonului de mute"
                },
                showDeafenButton: {
                    label: "Arată buton Deafen",
                    description: "Dacă dorești afișarea butonului de deafen"
                },
                muteSoundboard: {
                    label: "Mute Soundboard",
                    description: "Oprește soundboard-ul lor la apăsarea butonului Deafen."
                },
                disableVideo: {
                    label: "Dezactivează video",
                    description: "Oprește fluxul lor video la apăsarea butonului Deafen."
                },
                useServer: {
                    label: "Folosește serverul",
                    description: "Folosește mute/deafen la nivel de server dacă ai permisiuni."
                },
                serverSelf: {
                    label: "Mute/Deafen server pentru tine",
                    description: "Te pune pe mute/deafen pe server la folosirea butoanelor."
                },
                showButtonsSelf: {
                    label: "Arată butoane pentru mine",
                    description: "Afișează butoanele și pentru propriul utilizator.",
                    display: "Afișează",
                    hide: "Ascunde",
                    disable: "Dezactivează"
                },
                whichNameToShow: {
                    label: "Ce nume să apară",
                    description: "Alege între poreclă sau nume de utilizator în tooltip.",
                    global: "Nume global",
                    username: "Nume utilizator",
                    both: "Ambele"
                },
                buttonPosition: {
                    label: "Poziție buton",
                    description: "Alege unde să fie afișate butoanele.",
                    left: "Stânga",
                    right: "Dreapta",
                }
            },
            tooltip: {
                navigate: "Mergi la DM",
                open: "Deschide DM cu {{username}}",
                yourself: "tine însuți",
                serverMute: "Mute pe server",
                serverDeafen: "Deafen pe server",
                mute: "Mute",
                deafen: "Deafen",
                unmute: "Unmute",
                undeafen: "Undeafen",
                serverUnmute: "Unmute pe server",
                serverUndeafen: "Undeafen pe server"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Înregistrează cine intră și cine pleacă de pe canalele vocale",
            context: {
                view: "Vezi jurnalul canalului"
            },
            modal: {
                joined: "A intrat pe <#{{channel}}>",
                left: "A părăsit <#{{channel}}>",
                movedTo: "Mutat pe <#{{channel}}>",
                movedFrom: "Mutat de pe <#{{channel}}>",
                noLogs: "Niciun jurnal de afișat.",
                logs: "Jurnale {{channel}}"
            },
            option: {
                mode: {
                    label: "Mod",
                    description: "Cum se afișează jurnalul vocal",
                    menu: "Meniu jurnal",
                    associated: "Direct în chat-ul asociat",
                    both: "Ambele"
                },
                voiceChannelChatSelf: {
                    label: "Jurnal propriu",
                    description: "Înregistrează propriile acțiuni vocale în chat"
                },
                voiceChannelChatSilent: {
                    label: "Jurnal silențios",
                    description: "Mesajele de jurnal în chat vor fi trimise fără notificare sonoră"
                },
                voiceChannelChatSilentSelf: {
                    label: "Jurnal silențios propriu",
                    description: "Mesajele despre tine vor fi silențioase dacă ești pe acel canal"
                },
                ignoreBlockedUsers: {
                    label: "Ignoră utilizatorii blocați",
                    description: "Nu înregistra acțiunile celor blocați"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Permite acțiuni multiple pe un întreg canal (mută toți, mute toți, deconectează toți etc.).",
            option: {
                waitAfter: {
                    label: "Așteaptă după acțiune",
                    description: "Numărul de acțiuni API după care se face o pauză (pentru a evita limitările)"
                },
                waitSeconds: {
                    label: "Secunde de așteptare",
                    description: "Timpul de așteptare între acțiuni (în secunde)"
                }
            },
            context: {
                voiceTools: "Instrumente voce",
                mentionAll: "Menționează toți utilizatorii",
                disconnectAll: "Deconectează-i pe toți",
                muteAll: "Pune-i pe toți pe mute",
                unmuteAll: "Scoate-i pe toți de pe mute",
                deafenAll: "Pune-i pe toți pe deafen",
                undeafenAll: "Scoate-i pe toți de pe deafen",
                moveAll: "Mută-i pe toți"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Adaugă o opțiune de descărcare la mesajele vocale. (Se deschide în browser)",
            context: {
                download: "Descarcă mesajul vocal"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Îți permite să trimiți mesaje vocale ca pe mobil. Click-dreapta pe butonul de upload.",
            option: {
                noiseSuppression: {
                    label: "Suprimarea zgomotului",
                    description: "Reduce zgomotul de fundal"
                },
                echoCancellation: {
                    label: "Anularea ecoului",
                    description: "Anulează ecoul înregistrării"
                }
            },
            notification: {
                failed: {
                    upload: "Eșec la încărcarea mesajului vocal.",
                    start: "Eșec la pornirea înregistrării.",
                    finish: "Eșec la finalizarea înregistrării."
                }
            },
            context: {
                sendVoiceMessage: "Trimite mesaj vocal",
                missingPermissions: "(Permisiuni lipsă)"
            },
            modal: {
                record: "Înregistrează mesaj vocal",
                upload: "Încarcă fișier",
                preview: "Previzualizare",
                failed: "Eșec la procesarea fișierului audio:",
                oggOpus: "Mesajele vocale trebuie să fie OggOpus pentru iOS. Fișierul este {{type}}.",
                fix: "Pentru rezolvare, convertește-l folosind {{link}}",
                sending: "Se trimite mesajul vocal... Te rugăm să aștepți.",
                stop: "Oprește înregistrarea",
                start: "Pornește înregistrarea",
                resume: "Reia înregistrarea",
                pause: "Pune pauză",
                recording: "ÎNREGISTRARE",
                send: "Trimite",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Permite setarea volumului utilizatorilor și stream-urilor peste limita maximă implicită",
            option: {
                multiplier: {
                    label: "Multiplicator",
                    description: "Multiplicatorul de volum"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Recrearea vechiului experiment Discord; Setează un fundal personalizat pentru orice canal, utilizator sau server.",
            option: {
                globalDefault: {
                    label: "Fundal global implicit",
                    description: "Setează un fundal implicit pentru toate canalele."
                },
                stylingTips: {
                    label: "Sfaturi stilizare"
                }
            },
            context: {
                setWallpaper: "Setează fundal",
                removeWallpaper: "Elimină fundal"
            },
            modal: {
                set: "Setează fundal",
                image: "URL-ul imaginii",
                cancel: "Anulează",
                apply: "Aplică",
                global: {
                    set: "Setează un fundal global",
                    remove: "Elimină fundalul global",
                    reset: "Resetează toate datele fundalurilor"
                },
                web: {
                    info: "Poți folosi fișiere locale punându-le în directorul Plexcord themes sub forma plexcord:///themes/nume.ext",
                    open: "Deschide directorul temelor",
                    quickCSS: "Deschide QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Readaugă meniurile contextuale lipsă din versiunea web: Link-uri, Imagini și zona de text (Copy, Paste, Spell Check)",
            option: {
                addBack: {
                    label: "Adaugă înapoi",
                    description: "Readaugă meniurile de sistem pentru imagini, link-uri și bara de chat"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Readaugă scurtăturile de taste lipsă pe Web (Ctrl+T, Ctrl+Tab etc.). Funcționează complet doar în Plextron/Legcord."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Elimină limita de 2500kbps pentru bitrate pe Chromium și Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Suport experimental AV1",
                    description: "Activează codecul AV1. Poate cauza probleme de încărcare a stream-ului."
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Afișează avatarele utilizatorilor care au reacționat la un mesaj",
            option: {
                avatarClick: {
                    label: "Click pe avatar",
                    description: "Permite darea de click pe avatarele din reacții"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Treci mouse-ul peste pictograma de stream pentru a vedea cine îți vizionează transmisiunea",
            modal: {
                noSpectator: "Niciun spectator"
            },
            option: {
                showPanel: {
                    label: "Arată panoul",
                    description: "Afișează spectatorii sub panoul de screenshare"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Transformă automat prima literă a fiecărei propoziții în majusculă în zona de scriere",
            option: {
                blockedWords: {
                    label: "Cuvinte blocate",
                    description: "Cuvinte care nu trebuie capitalizate (separate prin virgulă)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Redirecționează notificările Discord către XSOverlay pentru vizualizare ușoară în VR",
            notification: {
                call: {
                    title: "{{user}} te apelează.",
                    content: "Apel primit"
                },
                message: {
                    reply: " (răspuns)",
                    embed: " [embed] ",
                    onlyEmbed: "A trimis un mesaj cu embed",
                    sticker: " [sticker] ",
                    onlySticker: "A trimis un sticker",
                    image: "imagine",
                    attachment: "atașament"
                },
                test: {
                    title: "Salut de la Plexcord!",
                    content: "Aceasta este o notificare de test! *Explozie*",
                    button: "Trimite notificare de test"
                }
            },
            option: {
                webSocketPort: {
                    label: "Port WebSocket",
                    description: "Portul WebSocket"
                },
                preferUDP: {
                    label: "Preferă UDP",
                    description: "Activează dacă folosești o versiune veche de XSOverlay. Ignorat pe web."
                },
                botNotifications: {
                    label: "Notificări boți",
                    description: "Permite notificările de la boți"
                },
                serverNotifications: {
                    label: "Notificări servere",
                    description: "Permite notificările de pe servere"
                },
                dmNotifications: {
                    label: "Notificări DM",
                    description: "Permite notificările pentru mesaje directe"
                },
                groupDmNotifications: {
                    label: "Notificări grupuri DM",
                    description: "Permite notificările pentru grupuri"
                },
                callNotifications: {
                    label: "Notificări apeluri",
                    description: "Permite notificările de apel"
                },
                pingColor: {
                    label: "Culoare mențiune utilizator",
                    description: "Culoarea mențiunilor"
                },
                channelPingColor: {
                    label: "Culoare mențiune canal",
                    description: "Culoarea mențiunilor de canal"
                },
                soundPath: {
                    label: "Cale sunet",
                    description: "Sunet notificare (default/warning/error)"
                },
                timeout: {
                    label: "Durată",
                    description: "Durata notificării (secunde)"
                },
                lengthBasedTimeout: {
                    label: "Durată bazată pe lungime",
                    description: "Prelungește durata în funcție de lungimea mesajului"
                },
                opacity: {
                    label: "Opacitate",
                    description: "Opacitatea notificării"
                },
                volume: {
                    label: "Volum",
                    description: "Volum"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Blochează reclamele în embed-urile YouTube și în activitatea 'Watch Together' via AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Adaugă descrierile videoclipurilor în embed-urile YouTube"
        }
    }
} as const;

export default translations;
