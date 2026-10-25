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
                description: "Aplică QuickCSS-ul configurat"
            },
            enableReactDevtools: {
                label: "Activează React Developer Tools",
                description: "Util în principal pentru dezvoltatorii de pluginuri. Ignoră dacă nu știi ce este"
            },
            mainWindowFrameless: {
                label: "Dezactivează Cadrul Ferestrei Principale",
                description: "Elimină cadrul nativ al ferestrei pentru un aspect mai curat. Poți în continuare să muți fereastra trăgând de zona barei de titlu."
            },
            frameless: {
                label: "Dezactivează cadrul ferestrei",
                description: "Elimină cadrul nativ al ferestrei pentru un aspect mai curat. Poți în continuare să muți fereastra trăgând de zona barei de titlu."
            },
            nativeTitleBar: {
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
                description: "Îți permite să redimensionezi fereastra la orice mărime, chiar mai mică decât minimul Discord"
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
        windowsMaterial: {
            title: "Material de fundal Windows (necesită repornire)",
            description: "Efecte de fundal transparent Windows. Ai nevoie de o temă care acceptă transparența, altfel nu va avea niciun efect. După modificarea acestei setări este necesară o repornire.",
            material: {
                none: "Niciunul",
                mica: "Mica (folosește tema sistemului + imaginea de fundal a desktopului pentru a colora fundalul)",
                tabbed: "Tabbed (variantă Mica cu nuanțare mai puternică a fundalului)",
                acrylic: "Acrylic (estompează fereastra din spatele Discord pentru un fundal translucid)"
            }
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
                tooltip: "Indiciu",
                menu: "Meniu",
                popover: "Popover",
                fullscreenUI: "Interfață Fullscreen (Transparent dar ușor blurat)",
                hud: "HUD (Cea mai transparentă)"
            }
        },
        tabs: {
            renderFailed: "Nu s-a putut afișa fila {{tab}}. Dacă problema persistă, încearcă reinstalarea cu programul de instalare!"
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
            dev: "Versiunea de dezvoltator a Plexcord",
            browser: "Versiunea pentru browser web a Plexcord"
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
                api: "Arată Plugin-uri API",
                type: "Filtrare după tip",
                tags: "Filtrare după etichete",
                favorites: "Afișează favoritele"
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
            source: "Vezi codul sursă",
            favorite: "Adaugă la favorite - îl fixează în partea de sus a listei de pluginuri",
            unfavorite: "Elimină de la favorite"
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
                    profileCollections: "API pentru adăugarea colecțiilor în panoul de profil al utilizatorului, precum colecția de jocuri Discord.",
                    profileSections: "API pentru a adăuga secțiuni în apropierea zonei „Membru din” a panourilor de profil de utilizator.",
                    headerBar: "API pentru a adăuga butoane în bara de antet.",
                    surfaceClasses: "API pentru a adăuga atribute de date semantice ale pluginurilor și props limitate pe suprafețe stabile ale interfeței Discord."
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
        },
        invalidInput: "Date de intrare nevalide",
        loading: "Se încarcă...",
        authorPrefix: "de"
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
        },
        backupFileType: "Copie de rezervă a setărilor Plexcord"
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
        more: "+ încă {{count}} plugin-uri",
        error: {
            retrieveRepo: "Nu s-au putut obține informațiile depozitului",
            fetchRepo: "Nu s-au putut prelua datele din depozit",
            connectRepo: "Nu s-a putut conecta la depozit. Verifică-ți conexiunea la internet."
        }
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
        activation: {
            title: "Activare temă",
            always: "Mereu activ",
            lightOnly: "Doar temă deschisă",
            darkOnly: "Doar temă închisă"
        },
        actions: {
            pin: "Fixează",
            unpin: "Anulează fixarea",
            editSettings: "Editează setările"
        },
        unknown: {
            title: "Necunoscut",
            author: "Autor Necunoscut",
            theme: "O Temă Discord",
            description: "Nicio descriere furnizată."
        },
        required: "Următoarele plugin-uri sunt necesare, dar nu sunt activate: ",
        homepage: "Pagina principală",
        support: "Suport",
        online: {
            title: "Teme Online",
            description: "Încarcă teme direct din URL-uri în loc de fișiere locale. Temele online se actualizează automat când sursa se modifică.",
            enable: "Activează Temele Online",
            enableDescription: "Comută încărcarea temelor online. Când este dezactivat, toate temele online vor fi oprite.",
            placeholder: "https://exemplu.ro/tema.css"
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
        },
        openInFolder: "Deschide în dosar",
        fallback: {
            author: "Autor necunoscut",
            description: "O temă Discord."
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
            title: "Hopa!",
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
        unknownAuthor: "Autor necunoscut"
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
            close: "Închide oricum",
            windowTitle: "Editor QuickCSS Plexcord"
        },
        messagePopover: {
            scrollLeft: "Derulează la stânga",
            scrollRight: "Derulează la dreapta"
        },
        notices: {
            error: "Eroare la afișarea notificării"
        },
        tray: {
            aboutPlexcord: "Despre Plexcord",
            updatePlexcord: "Actualizează Plexcord",
            noUpdateTitle: "Nicio actualizare disponibilă",
            noUpdateBody: "Folosești deja cea mai recentă versiune Plexcord.",
            updateFailedTitle: "Actualizare eșuată",
            updateFailedBody: "Nu s-a putut aplica actualizarea Plexcord.",
            updateSuccessTitle: "Actualizare reușită",
            updateSuccessBody: "Se repornește Plexcord pentru a aplica actualizarea.",
            updateErrorTitle: "Eroare de actualizare",
            updateErrorBody: "A apărut o eroare la actualizarea Plexcord.\n\n{{error}}",
            openSettingsFolder: "Deschide folderul de setări",
            openThemesFolder: "Deschide folderul de teme"
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
        },
        detectLanguage: "Detectează limba"
    },

    plugin: {
        tags: {
            accessibility: "Accesibilitate",
            activity: "Activitate",
            appearance: "Aspect",
            chat: "Chat",
            commands: "Comenzi",
            console: "Consolă",
            customisation: "Personalizare",
            developers: "Dezvoltatori",
            emotes: "Emoții",
            friends: "Prieteni",
            fun: "Distracție",
            media: "Media",
            notifications: "Notificări",
            organisation: "Organizare",
            privacy: "Confidențialitate",
            reactions: "Reacții",
            roles: "Roluri",
            servers: "Servere",
            shortcuts: "Scurtături",
            utility: "Utilitate",
            voice: "Voce"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "Extrage componentele care au fost concatenat de bundler"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "Extrage modulele care au fost concatenate de bundler"
        },
        noTrack: {
            name: "NoTrack",
            description: "Dezactivează urmărirea Discord (analytics/'science'), metricile și raportarea erorilor Sentry",
            option: {
                disableAnalytics: {
                    label: "Dezactivează Analiticele",
                    description: "Blochează analizele de urmărire ale Discord. Dezactivează asta dacă vrei ca insignele să îți urmărească progresul (ex.: ore de streaming)."
                },
                disableStackDumping: {
                    description: "Afișează o urmă de stivă nativă în consolă când Discord se blochează. Necesită repornire completă."
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
                },
                includePlexcordInfoWhenCopying: {
                    label: "Include informațiile Plexcord la copiere",
                    description: "Copiază și informațiile Plexcord (Plexcord, Electron, Chromium) atunci când apeși pe informațiile despre versiune din colțul din stânga jos al paginii Setări"
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
                    dismiss: "Dacă știi ce faci sau nu poți actualiza, poți închide acest mesaj.",
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
                    consistent: "Consecvent",
                    timestamp: "Timestamp (Marcaj temporal)",
                    date: "Dată"
                },
                randomisedLength: {
                    label: "Lungime Aleatorie",
                    description: "Lungimea caracterelor aleatorii"
                },
                consistent: {
                    label: "Consecvent",
                    description: "Secret de anonimizare consistent"
                },
                dateFormat: {
                    description: "Formatul datei (sunt acceptate YYYY, MM, DD, HH, mm, ss, SSS)",
                    label: "Formatul datei"
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
            },
            text: {
                smallText: "Text mic",
                largeText: "Text mare"
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
                invalidColorFormat: "Format de culoare invalid pentru {{settingKey}}, asigură-te că este 'R, G, B' sau '#RRGGBB'",
                invalidColorFormatFor: "Format de culoare invalid pentru {{key}}, folosește \"R, G, B\" sau \"#RRGGBB\""
            }
        },
        betterBackreading: {
            name: "BetterBackreading",
            description: "Îmbunătățește citirea mesajelor vechi prin încărcare mai timpurie și mai puține salturi.",
            wholeNumber: "Introdu un număr întreg între {{min}} și {{max}}.",
            option: {
                imageScrollMargin: {
                    label: "Distanța de preîncărcare a imaginilor",
                    description: "Cât de departe în avans se încarcă imaginile, în pixeli (300-3000)."
                },
                messageLoadBuffer: {
                    label: "Buffer de încărcare a mesajelor",
                    description: "Cât de departe în avans se preiau mai multe mesaje, în pixeli (500-3000)."
                },
                useDiscordMessageCount: {
                    label: "Folosește numărul dinamic de mesaje al Discord",
                    description: "Lasă Discord să aleagă câte mesaje să preia în funcție de fereastră și setările de chat."
                },
                messageCount: {
                    label: "Număr personalizat de mesaje",
                    description: "Câte mesaje să se preia per cerere de istoric când numărul dinamic este dezactivat (30-100)."
                },
                channelOpenScrollMode: {
                    label: "Poziția la deschiderea canalului",
                    description: "Deschide canalele necitite la poziția salvată (sau jos), mereu jos, sau folosește comportamentul implicit pentru necitite.",
                    default: "Implicit Discord",
                    bottom: "Mereu jos",
                    saved: "Poziție salvată"
                }
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
            add: "Adaugă alt motiv",
            duration: {
                discordDefault: "Implicit Discord",
                none: "Nu șterge nimic",
                hour1: "Ultima oră",
                hours6: "Ultimele 6 ore",
                hours12: "Ultimele 12 ore",
                hours24: "Ultimele 24 de ore",
                days3: "Ultimele 3 zile",
                days7: "Ultimele 7 zile"
            },
            text: {
                autoDeleteDuration: "Durata ștergerii automate a mesajelor"
            }
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
                    label: "Bară laterală",
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
                enableNestedFolders: {
                    label: "Activează dosarele suprapuse",
                    description: "Permite plasarea dosarelor în interiorul altor dosare prin tragere"
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
                headerSelf: "Ai trimis o invitație de alăturare pe {{server}}",
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
            description: "Adaugă opțiuni pentru copierea culorii rolului / editarea rolului / vizualizarea pictogramei rolului la clic dreapta pe roluri în profilul utilizatorului sau în lista de membri",
            option: {
                roleIconFileFormat: {
                    label: "Format Fișier Pictogramă Rol",
                    description: "Formatul fișierului utilizat la vizualizarea pictogramei rolului"
                }
            },
            context: {
                copyColor: "Copiază Culoare Rol",
                editRole: "Editează Rol",
                viewIcon: "Vezi Pictogramă Rol",
                viewMembers: "Vizualizează membrii rolului"
            },
            text: {
                roleActions: "Acțiuni rol"
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
            regexHelper: {
                title: "Asistent Regex",
                placeholder: "Text de testat...",
                noPatterns: "Niciun tipar configurat"
            },
            option: {
                blockedWords: {
                    label: "Cuvinte Blocate",
                    description: "Listă de cuvinte separate prin virgulă de blocat"
                },
                useRegex: {
                    label: "Folosește Regex",
                    description: "Folosește fiecare valoare ca expresie regulată (avansat)"
                },
                regexHelper: {
                    label: "Asistent Regex",
                    description: "Testează expresiile regulate pe un text de exemplu"
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
            },
            text: {
                unknownUser: "Utilizator necunoscut"
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
                selectedBorder: "Contur de accent pentru fila selectată",
                selectedBackground: "Culoare fundal filă selectată",
                tabShadows: "Efecte umbră filă",
                tabRepositioning: "Repoziționare filă (schimbări de poziție line)",
                resizeHandle: "Estompare mâner redimensionare",
                questActivate: "Degrade misiuni active"
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
                openAll: "Deschide toate marcajele",
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
                tabHeightScale: {
                    label: "Scală înălțime file",
                    description: "Scala înălțimii filelor (procent)."
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
            },
            text: {
                folder: "Dosar"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Adaugă un contor de caractere în caseta de chat",
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
            description: "Elimină emoji-urile și decorațiunile din numele canalelor. Revine la original cât timp editezi canalul.",
            option: {
                ignoredChannels: {
                    description: "Listă separată prin virgule cu ID-uri de canale care rămân neatinse.",
                    label: "Canale ignorate"
                }
            },
            text: {
                keepOriginalName: "Păstrează numele original"
            }
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
                unknown: "Rol necunoscut",
                andMore: "și încă {{count}}"
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
            },
            text: {
                dark: "Întunecat",
                light: "Luminos"
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
            description: "Paletă de comenzi în stil Raycast pentru a rula acțiuni oriunde în Discord",
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
                        label: "Paletă de comenzi",
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
                },
                commandDeleted: "Comandă ștearsă.",
                statusSetToLabel: "Starea a fost setată la {{label}}.",
                themeSetToLabel: "Tema a fost setată la {{label}}.",
                noSettingsPageWas: "Nu a fost furnizată nicio pagină de setări.",
                unableToOpenLabel: "Nu se poate deschide {{label_that_settings_page}}.",
                failedToStartDependencies: "Nu s-au putut porni dependențele: {{join}}",
                messageSentToUsername: "Mesaj trimis către {{username}}.",
                enabledRestart: "{{name}} activat. Repornește pentru a aplica.",
                disabledRestart: "{{name}} dezactivat. Repornește pentru a aplica.",
                enabled: "{{name}} activat.",
                disabled: "{{name}} dezactivat.",
                errorStarting: "Eroare la pornirea {{name}}.",
                errorStopping: "Eroare la oprirea {{name}}."
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
                },
                closeAfterExecute: {
                    description: "Închide paleta după rularea unei comenzi.",
                    label: "Închide după executare"
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
            },
            text: {
                insertTextInChat: "Inserează text în chat",
                name: "Name",
                commandName: "Numele comenzii",
                settingsPage: "Pagina de setări",
                searchSettingsPages: "Caută pagini de setări...",
                text: "Text",
                textToInsertInto: "Text de inserat în caseta de chat",
                editCommand: "Editează comanda",
                deleteCommand: "Șterge comanda",
                createCustomCommand: "Creează o comandă personalizată",
                light: "Luminos",
                ash: "Cenușă",
                dark: "Întunecat",
                onyx: "Onix",
                toggleMute: "Comută silențierea",
                toggleDeafen: "Comută asurzirea",
                setStatus: "Setează starea",
                searchStatuses: "Caută stări...",
                setLabel: "Setează {{label}}",
                toggleTheme: "Comută tema",
                openServer: "Deschide serverul",
                openChannel: "Deschide canalul",
                openDm: "Deschide mesaj privat",
                goHome: "Mergi acasă",
                goToServer: "Mergi la server",
                searchServers: "Caută servere...",
                goToChannel: "Mergi la canal",
                searchChannels: "Caută canale...",
                searchFriends: "Caută prieteni...",
                myAccount: "Contul meu",
                profiles: "Profiluri",
                dataPrivacy: "Date și confidențialitate",
                devices: "Dispozitive",
                connections: "Conexiuni",
                appearance: "Aspect",
                accessibility: "Accesibilitate",
                voiceVideo: "Voce și video",
                chat: "Chat",
                textImages: "Text și imagini",
                notifications: "Notificări",
                keybinds: "Combinații de taste",
                authorizedApps: "Aplicații autorizate",
                familyCenter: "Centrul familiei",
                advanced: "Avansat",
                plexcord: "Plexcord",
                plexcordPlugins: "Pluginuri Plexcord",
                plexcordThemes: "Teme Plexcord",
                plexcordUpdater: "Actualizator Plexcord",
                plexcordChangelog: "Jurnal de modificări Plexcord",
                openQuickcss: "Deschide QuickCSS",
                openUpdater: "Deschide actualizatorul",
                openChangelog: "Deschide jurnalul de modificări",
                restartDiscord: "Repornește Discord",
                managePlugins: "Gestionează pluginuri",
                searchPlugins: "Caută pluginuri...",
                sendDm: "Trimite mesaj privat",
                recipient: "Destinatar",
                message: "Mesaj",
                messageContent: "Conținutul mesajului",
                openPaletteHotkey: "Tastă rapidă pentru deschiderea paletei",
                actions: "Acțiuni",
                preview: "Previzualizare",
                openCommand: "Deschide comanda",
                copyAnswer: "Copiază răspunsul",
                openDetails: "Deschide detaliile",
                calculator: "Calculator",
                expression: "Expresie",
                result: "Rezultat",
                copyExpression: "Copiază expresia",
                pinned: "Fixate",
                suggestions: "Sugestii",
                setAlias: "Setează alias",
                aliasForLabel: "Alias pentru {{label}}",
                leaveEmptyToRemove: "Lasă gol pentru a elimina",
                command: "Comandă",
                noResults: "Niciun rezultat",
                addFile: "Adaugă fișier",
                saveCommand: "Salvează comanda",
                createCommand: "Creează comanda",
                nameRequired: "Numele este obligatoriu.",
                enterValidUrl: "Introdu un URL valid.",
                pickSettingsPage: "Alege o pagină de setări din sugestii.",
                textRequired: "Textul este obligatoriu.",
                commandSaved: "Comandă salvată.",
                commandCreated: "Comandă creată.",
                editCustomCommand: "Editează comanda personalizată",
                disablePlugin: "Dezactivează pluginul",
                enablePlugin: "Activează pluginul",
                pickRecipient: "Alege un destinatar din sugestii.",
                addMessageOrFile: "Adaugă un mesaj sau un fișier.",
                pressKeys: "Apasă tastele...",
                answerCopied: "Răspuns copiat în clipboard.",
                calculationCopied: "Calcul copiat în clipboard.",
                unpinCommand: "Anulează fixarea comenzii",
                pinCommand: "Fixează comanda",
                saveAlias: "Salvează aliasul",
                changeHotkey: "Schimbă scurtătura",
                recordHotkey: "Înregistrează scurtătura",
                pressKeyCombo: "Apasă o combinație de taste, Backspace pentru a șterge, Esc pentru a anula",
                searchIn: "Caută în {{title}}...",
                searchCommands: "Caută comenzi...",
                somethingWentWrong: "Ceva nu a mers bine.",
                remove: "Elimină",
                enabled: "Activat",
                disabled: "Dezactivat",
                sectionNavigation: "Navigare",
                sectionCustom: "Personalizat",
                sectionPlugins: "Pluginuri",
                sectionMessaging: "Mesagerie",
                current: "Curent",
                submit: "Trimite"
            },
            description2: "Paletă de comenzi în stil Raycast pentru a rula acțiuni oriunde în Discord"
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
            copy: "Copiază culorile profilului de server",
            toast: {
                noColor: "Nu s-au găsit culori de profil!",
                copied: "Culorile profilului au fost copiate în clipboard!",
                error: "Eroare la copierea culorilor profilului!"
            },
            text: {
                formatted: "Culoare principală #{{primary}}, Culoare secundară #{{secondary}}"
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
                copy: "Copiază linkul stickerului",
                open: "Deschide linkul stickerului"
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
                    label: "Rată de cadre",
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
            },
            context: {
                changeIcon: "Schimbă pictograma"
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
                sharing: "Partajarea activității nu este activată, așa că ceilalți nu îți vor putea vedea Rich Presence-ul personalizat!",
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
                },
                enablePresence: {
                    description: "Dacă să se afișeze prezența",
                    label: "Activează prezența"
                }
            },
            toast: {
                savedPresetName: "Presetarea {{name}} a fost salvată.",
                loadedPresetName: "Presetarea {{name}} a fost încărcată.",
                deletedPresetSelectedpreset: "Presetarea {{selectedPreset}} a fost ștearsă."
            },
            text: {
                presetName: "Numele presetării",
                selectAPreset: "Selectează o presetare",
                streamLinkTwitchOr: "Link de stream (Twitch sau YouTube, doar dacă tipul activității este Streaming)",
                presets: "Presetări",
                save: "Salvează",
                load: "Încarcă",
                delete: "Șterge",
                noSavedPresetsYet: "Încă nu există presetări salvate.",
                showCustomRpc: "Afișează RPC personalizat",
                customRpcDisabled: "RPC personalizat dezactivat",
                theEnablePresenceSetting: "Setarea „Activează prezența” este dezactivată, așa că prezența ta nu va fi afișată. Dacă nu a fost intenționat, activeaz-o mai jos.",
                activitySharingDisabled: "Partajarea activității este dezactivată",
                discordDeveloperPortal: "Portalul pentru dezvoltatori Discord",
                imgur: "Imgur",
                enableActivitySharing: "Activează partajarea activității"
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
                stop: "Oprește",
                volume: "Volum",
                soundSource: "Sursă sunet",
                customFile: "Fișier personalizat",
                uploadNew: "Încarcă nou",
                delete: "Șterge fișierul selectat"
            },
            option: {
                default: "Implicit",
                custom: "Personalizat",
                select: "Selectează un fișier...",
                overrides: {
                    label: "Suprascrieri"
                },
                soundpack: {
                    label: "Pachet de sunete",
                    description: "Pachetul de sunete folosit în locul celui setat în Discord.",
                    default: "Implicit Discord"
                }
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
                humanMan: "Om uman",
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
                robotMan: "Om robot",
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
                or: "sau",
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
                    label: "Indiciu",
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
            },
            text: {
                toggleDearrow: "Comută Dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Curăță Discord-ul prin eliminarea elementelor neesențiale de interfață, cum ar fi efectele de profil, filele de magazin, boost-uri și altele.",
            option: {
                userProfileHeader: {
                    label: "Profil utilizator"
                },
                removeAvatarDecoration: {
                    label: "Elimină decorațiunea avatarului",
                    description: "Elimină decorațiunile avatarului. Este/va fi dezactivat dacă Decor este activat.",
                    alertBody: "Eliminarea decorațiunii avatarului a fost dezactivată pentru a preveni conflictele cu modulul Decor.",
                    ok: "OK"
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
                },
                removeProfileFrame: {
                    description: "Elimină ramele de profil.",
                    label: "Elimină rama de profil"
                },
                removeDisplayNameStyles: {
                    description: "Elimină numele afișate animate/stilizate din lista de membri.",
                    label: "Elimină stilurile numelor afișate"
                },
                removeLibraryAboveDms: {
                    description: "Elimină biblioteca de deasupra listei de mesaje private.",
                    label: "Elimină biblioteca de deasupra mesajelor private"
                },
                removeFamilyCenterAboveDms: {
                    description: "Elimină centrul familiei de deasupra listei de mesaje private.",
                    label: "Elimină centrul familiei de deasupra mesajelor private"
                }
            },
            text: {
                discordAlreadyHasA: "Discord are deja o opțiune integrată pentru stilul numelui de utilizator în",
                accessibilitySettings: "setările de accesibilitate."
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
                    label: "URL de bază",
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
            },
            toast: {
                failedToAuthorizeMessage: "Autorizarea a eșuat: {{message}}"
            },
            text: {
                removeDecoration: "Elimină decorațiunea Decor",
                decoration: "Decorațiune Decor",
                none: "Niciuna",
                decorationFile: "Fișier de decorațiune"
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
            },
            text: {
                reconnect: "Reconectează",
                loadingLazyModules: "Se încarcă modulele lazy, repornirea poate cauza erori",
                loadedLazyModules: "Toate modulele lazy au fost încărcate",
                failedLazyModules: "Încărcarea modulelor lazy a eșuat, verifică consola",
                ok: "OK"
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
            },
            text: {
                notSupported: "Neacceptat",
                devBuild: "Versiune de dezvoltare",
                standalone: "Independent"
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
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "Adaugă un buton în meniul mesajului pentru a descărca toate atașamentele deodată.",
            button: "Descarcă toate atașamentele",
            toast: {
                success: "Au fost descărcate {{count}} atașament(e).",
                partial: "Au fost descărcate {{succeeded}} din {{total}} atașamente. {{failed}} au eșuat.",
                downloadedPluralizeSucceededAttachment: "Au fost descărcate {{pluralize_succeeded_attachment}}.",
                downloadedSucceededOfLength: "Descărcate {{succeeded}} din {{length}} atașamente. {{failed}} au eșuat."
            },
            option: {
                downloadAllFileTypes: {
                    description: "Descarcă și atașamentele care nu sunt media. Activează doar dacă ai încredere în ce ți se trimite.",
                    label: "Descarcă toate tipurile de fișiere"
                }
            }
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
                },
                noReusableInvite: "Nicio invitație reutilizabilă disponibilă.",
                unableToReuseInvite: "Invitația nu poate fi reutilizată."
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
            },
            text: {
                searchExperiments: "Caută experimente"
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
            },
            text: {
                unknownError: "Eroare necunoscută"
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
                console: "Ceva n-a mers bine (verifică consola!)",
                successfullyClonedNameTo: "{{name}} a fost clonat în {{name_your_server}}!"
            },
            context: {
                clone: "Clonează {{type}}",
                cloneName: "Clonează {{data}}"
            },
            text: {
                yourServer: "serverul tău",
                cloneTo: "Clonează în {{name}}",
                emoji: "Emoji",
                sticker: "Autocolant"
            }
        },
        externalPlayer: {
            name: "ExternalPlayer",
            description: "Deschide videoclipurile și audio într-un player media extern, precum mpv.",
            option: {
                player: {
                    label: "Player",
                    description: "În ce player să se deschidă fișierele media."
                },
                openOnClick: {
                    label: "Deschide la clic",
                    description: "Deschide videoclipurile și audio în player când apeși redare, în loc să le redai în Discord."
                },
                path: {
                    label: "Calea playerului",
                    description: "Calea absolută către executabilul playerului. Lasă gol pentru a-l folosi pe cel din PATH."
                },
                args: {
                    label: "Argumentele playerului",
                    description: "Argumente suplimentare transmise playerului. Pune între ghilimele valorile cu spații."
                }
            },
            context: {
                openIn: "Deschide în {{player}}"
            },
            toast: {
                alreadyOpen: "Deja deschis în {{player}}.",
                restartRequired: "Repornește complet Discord pentru a încărca ExternalPlayer.",
                openFailed: "Nu s-a putut deschide playerul."
            },
            status: {
                paused: "Pus pe pauză în {{player}}",
                playing: "Se redă în {{player}}"
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
                accent: "Culoare de accent"
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
                accent: "Culoare de accent",
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
                failedSave: "Eșec la salvarea alias-ului.",
                removedAliasAlias: "Aliasul :{{alias}}: a fost eliminat",
                aliasSetForGetemojidisplayname: "Alias setat pentru {{getEmojiDisplayName_ref}}."
            },
            button: {
                edit: "Editează alias",
                set: "Setează alias"
            },
            text: {
                remove: "Elimină",
                noAliasesSetYet: "Încă nu sunt setate aliasuri.",
                aliasRequired: "Aliasul este obligatoriu.",
                aliasInvalid: "Aliasul trebuie să aibă 2-32 de caractere și să folosească doar litere mici, cifre sau liniuțe de subliniere."
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "Adaugă la favorite orice imagine",
            noFiles: "Niciun fișier nu corespunde căutării tale.",
            searchPlaceholder: "Caută fișiere",
            media: "Media",
            demoText: "Apasă pe stea pentru a adăuga un fișier la favorite.\nFișierele favorite vor apărea aici!",
            fetchError: "Nu s-a putut obține {filename}",
            uploadError: "Nu s-a putut încărca {filename}",
            text: {
                clickTheStarTo: "Fă clic pe stea pentru a adăuga un fișier la favorite.",
                favoriteFilesWillShow: "Fișierele favorite vor apărea aici!"
            },
            option: {
                localThumbnails: {
                    description: "Generează miniaturile fișierelor local în loc de a folosi un serviciu extern (placeholder.nin0.dev). Nu este compatibil cu mobilul. Comutarea acestei opțiuni nu afectează favoritele existente.",
                    label: "Miniaturi locale"
                }
            }
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
                couldntFind: "Nu s-a găsit niciun răspuns."
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
                },
                onlyWhenInVoice: {
                    label: "Doar în vocal",
                    description: "Urmărește utilizatorul doar când ești într-un canal vocal"
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
                    previewText: "Vulpea maro sprintenă sare peste câinele leneș",
                    authors: "De {{authors}}"
                }
            },
            text: {
                currentFont: "Font curent:",
                resetFont: "Resetează fontul"
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Forțează coroana de proprietar lângă numele de utilizator chiar dacă serverul este mare."
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
            },
            option: {
                showFriendsInChat: {
                    description: "Afișează o pictogramă de prieten la mesajele de la prieteni.",
                    label: "Afișează prietenii în chat"
                }
            },
            text: {
                friend: "Prieten",
                rankIcon: "Pictogramă rang"
            }
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
            description: "Adaugă lângă butoanele de microfon și asurzire un buton pentru comutarea activității de joc. Clic dreapta pentru activitatea Spotify.",
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
            },
            text: {
                disableGameActivity: "Dezactivează activitatea de joc",
                enableGameActivity: "Activează activitatea de joc",
                shareSpotifyActivity: "Distribuie activitatea Spotify",
                shareSpotifyActivityAccount: "Distribuie activitatea Spotify ({{name}})"
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
                alreadyCollection: "Acest GIF este deja în colecție",
                collectionsImportedSuccessfully: "Colecțiile au fost importate.",
                failedToImportCollections: "Nu s-au putut importa colecțiile: {{String_err}}"
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
            },
            text: {
                gifPickerCategoryOptions: "Opțiuni de categorie pentru selectorul GIF",
                gifCollections: "Colecții GIF",
                unknown: "Necunoscut"
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
                    description: "Invocă soarta și trimite un GIF",
                    restricted: "Această comandă este restricționată pe acest server."
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
                title: "Depozitele GitHub ale lui {{username}}",
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
                    label: "Înglobare",
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
            description: "Ascunde temporar mesajele și DM-urile până la repornire.",
            button: {
                hide: "Ascunde",
                hideDm: "Ascunde DM",
                unhideDm: "Afișează DM"
            },
            toggle: {
                none: "Niciun DM ascuns",
                hide: "Ascunde DM-urile ascunse",
                show: "Afișează DM-urile ascunse"
            },
            option: {
                hidePopoverButton: {
                    label: "Ascunde butonul din popover",
                    description: "Ascunde butonul de ascundere din meniul popover al mesajului."
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "Ascunde indicatorul vocal din lista de servere când singurele canale vocale active sunt dezactivate"
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
                invalid: "Eșec la importarea notițelor.",
                invalidJson: "JSON nevalid"
            },
            toolbox: {
                action: "Deschide notițele"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "NOTĂ"
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
                    description: "Ignoră toate activitățile de ascultare (de obicei de pe Spotify)"
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
            },
            text: {
                enableActivity: "Activează activitatea",
                disableActivity: "Dezactivează activitatea"
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
            },
            text: {
                bytes: "Octeți"
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
                    label: "Dezactivare automată a microfonului",
                    description: "Oprește automat microfonul la intrarea într-un canal vocal"
                },
                autoDeafen: {
                    label: "Asurzire automată",
                    description: "Oprește automat sunetul (deafen) la intrarea într-un canal vocal (te trece și pe mute)"
                },
                instantScreenshare: {
                    label: "Partajare instantanee a ecranului",
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
            },
            toast: {
                instantScreenshareDisabled: "Partajare instantanee a ecranului {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
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
            },
            text: {
                serverOptions: "Opțiuni server",
                copyServerId: "Copiază ID-ul serverului",
                serverIdCopied: "ID-ul serverului a fost copiat în clipboard"
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
            whiteblackLabel: "Listă albă/Listă neagră",
            tab: {
                title: "Cuvinte cheie",
                clearAll: "Șterge tot"
            },
            button: {
                addId: "Adaugă ID",
                addKeyword: "Adaugă cuvânt cheie"
            },
            listTypeSelector: {
                blacklist: "Listă neagră",
                whitelist: "Listă albă",
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
            },
            text: {
                keywordEntryI1: "Intrare cuvânt-cheie {{i_1}}",
                listPriorityAdvanced: "Prioritatea listelor (avansat)",
                whichListToPrioritize: "Ce listă să aibă prioritate dacă un mesaj declanșează ambele liste",
                ifYouAreNot: "Dacă nu ești sigur, în majoritatea cazurilor este setat de obicei pe Listă neagră"
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
                showAlbumCover: {
                    label: "Arată coperta albumului",
                    description: "Arată coperta albumului. Dezactivarea acestei opțiuni va afișa o imagine de substituent. Util dacă muzica ta are coperte inadecvate"
                },
                useLogo: {
                    label: "Folosește Logo",
                    description: "Arată logo-ul ListenBrainz pe coperta albumului"
                }
            },
            button: {
                profile: "Profil ListenBrainz",
                viewSong: "Vezi piesa"
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
            },
            text: {
                allQuotesDisabled: "Chiar ai dezactivat toate citatele de încărcare? Ce bufon ești..."
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
            orPaste: "Sau lipește o imagine din clipboard!",
            verifyLogin: "Verifică autentificarea",
            text: {
                scanQrCode: "Scanează codul QR"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "Afișează tabele markdown în stil GitHub în mesajele Discord.",
            toolbar: {
                label: "Vizualizare tabel markdown",
                table: "Tabel",
                raw: "Brut"
            },
            option: {
                hideToggle: {
                    label: "Ascunde comutatorul",
                    description: "Ascunde comutatorul Tabel/Brut și afișează mereu tabelele randate."
                }
            }
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
            description: "Afișează numărul de membri online, numărul total de membri și utilizatorii din canalele vocale ale serverului - în lista de membri și în tooltip.",
            option: {
                toolTip: {
                    label: "Indiciu",
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
            totalVoice: "{{formattedVoiceCount}} membri în apel vocal",
            tooltip: {
                total: "{{count}} membri în total pe server"
            }
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
            linkCopied: "Link copiat!",
            text: {
                shift: "Shift",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "Backspace",
                pickEmoji: "Alege emoji"
            },
            emojiSetting: {
                pick: "Alege emoji",
                selectMain: "Selectează emoji pentru reacții",
                selectAdditional: "Selectează emoji suplimentare",
                additionalPlaceholder: "separate prin virgulă/rând nou, max. {{max}}"
            },
            toast: {
                cannotReact: "Nu se poate reacționa: lipsesc permisiunile",
                linkCopied: "Link copiat!"
            }
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
                    blacklist: "Listă neagră",
                    whitelist: "Listă albă"
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
            removeMessage: "Șterge istoricul mesajului",
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
                },
                logDeletedAttachments: {
                    description: "Dacă să se înregistreze atașamentele șterse",
                    label: "Înregistrează atașamentele șterse"
                }
            },
            text: {
                clearHistory: "Șterge istoricul",
                toggleDeletedHighlight: "Comută evidențierea celor șterse",
                enableDiffView: "Activează vizualizarea diferențelor",
                disableDiffView: "Dezactivează vizualizarea diferențelor",
                noDeletedMessages: "Niciun mesaj șters",
                deletedMessageSuffix: " mesaj șters",
                deletedMessagesSuffix: " mesaje șterse"
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Îmbunătățește pluginul MessageLogger cu funcții suplimentare.",
            updateImageCacheDir: "Directorul cache pentru imagini a fost actualizat cu succes.",
            updateLogsDir: "Directorul pentru jurnale a fost actualizat cu succes.",
            failedUpdate: "Eșec la actualizarea directorului.",
            blacklist: "Listă neagră",
            whitelist: "Listă albă",
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
                ghostPing: "Ping fantomă",
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
                    description: "ID-uri de server, canal sau utilizator care vor fi afișate mereu în jurnalul de mesaje."
                },
                blacklistedIds: {
                    label: "ID-uri Blacklist",
                    description: "ID-uri de server, canal sau utilizator care nu vor fi afișate niciodată în jurnalul de mesaje."
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
                clearLogsOnRestart: {
                    label: "Șterge jurnalele la repornire",
                    description: "Șterge jurnalele când Discord repornește."
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
            },
            toast: {
                clearedLogs: "Jurnalele au fost șterse",
                failedToClearLogs: "Nu s-au putut șterge jurnalele",
                failedToRemoveMessage: "Nu s-a putut elimina mesajul. Verifică consola pentru detalii.",
                noMessagesFoundIn: "Nu s-au găsit mesaje în fișierul jurnal",
                successfullyImportedCountLogs: "Au fost importate {{count}} jurnale",
                successfullyExportedLogs: "Jurnalele au fost exportate",
                successfullyExportedCountLogs: "Au fost exportate {{count}} jurnale",
                errorExportingLogsCheck: "Eroare la exportul jurnalelor. Verifică consola pentru mai multe informații"
            },
            text: {
                jsonFile: "Fișier JSON",
                clearLogs: "Șterge jurnalele",
                clearingLogs: "Se șterg jurnalele...",
                messageLogger: "Message Logger",
                importLogs: "Importă jurnalele",
                logs: "Jurnale",
                loadingTabLogs: "Se încarcă jurnalele: {{tab}}..."
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
                    label: "Derulare",
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
                    label: "URL de bază API versuri Spotify",
                    description: "URL de bază al unei instanțe personalizate (de exemplu: http://localhost:8080)."
                },
                translateTo: {
                    label: "Tradu în",
                    description: "Tradu versurile în limba selectată - Schimbarea acestei setări va șterge traducerile existente",
                    cleared: "Traducerile au fost șterse"
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
                },
                lyricDelay: {
                    label: "Întârzierea versurilor"
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
            },
            text: {
                unknownArtist: "Artist necunoscut",
                unknownTitle: "Titlu necunoscut"
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
                apply: "Aplică NewGuildSettings dosarului"
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
                continue: "Continuă",
                supportUs: "Plexcord este software open source. Dacă îți place să îl folosești, ia în considerare să ne susții",
                supportUsLink: "aici"
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
            description: "Face notificările de desktop mai informative",
            text: {
                threadInParent: "{{thread}} în {{parent}}"
            }
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
                },
                telegram: {
                    label: "Telegram",
                    description: "Deschide linkurile Telegram în aplicația Telegram"
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
            },
            text: {
                roleOptions: "Opțiuni rol",
                userOptions: "Opțiuni utilizator",
                unknownRole: "Rol necunoscut",
                unknownUser: "Utilizator necunoscut"
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
                    label: "Fixează mesajele private",
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
                },
                defaultCategoryName: "Categorie fixată {{number}}"
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
            embeddedTooltip: "Încorporat (consolă sau joc)",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Listă",
                    description: "Afișează indicatori în profilurile utilizatorilor"
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
            about: "Nu putem garanta că acest plugin nu îți va aduce un avertisment sau o interdicție. Alegerea Xbox/Playstation/VR poate face clientul tău o versiune învechită.",
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
                    description: "Pe ce platformă să pretinzi că ești.",
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
            description: "Îți permite să salvezi și să încarci diferite presetări de profil.",
            toast: {
                importFailed: "Nu s-au putut importa presetările. Fișierul poate fi nevalid.",
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
            },
            text: {
                selectAServer: "Selectează un server",
                profileSets: "Seturi de profil",
                youAreNotIn: "Încă nu ești pe niciun server.",
                mainProfile: "Profil principal",
                serverProfiles: "Profiluri de server",
                openProfileSets: "Deschide seturile de profil"
            }
        },
        questify: {
            name: "Questify",
            description: "Îmbunătățește anumite funcții ale Quest-urilor, dezactivează elementele enervante sau elimină complet Quest-urile.",
            quests: "Quest-uri",
            context: {
                quest: {
                    label: "Meniul butonului Quest",
                    ignore: "Marchează toate ca ignorate",
                    reset: "Resetează lista de ignorate",
                    fetch: "Preia Quest-urile",
                    markAsIgnored: "Marchează ca ignorat",
                    unmarkAsIgnored: "Nu mai ignora",
                    stopAuto: "Oprește finalizarea automată",
                    startAuto: "Pornește finalizarea automată",
                    copyQuestID: "Copiază ID-ul Quest-ului",
                    pauseAutoEnrollment: "Întrerupe înscrierea automată",
                    unpauseAutoEnrollment: "Reia înscrierea automată",
                    pauseAutoProcessing: "Întrerupe procesarea automată",
                    unpauseAutoProcessing: "Reia procesarea automată"
                }
            },
            button: {
                completing: "Se finalizează...",
                completingWithTime: "Se finalizează ({{time}})",
                completingIn: "Se finalizează în {{time}}",
                queued: "În coadă ({{position}})",
                resuming: "Se reia...",
                completeNow: "Finalizează acum",
                complete: "Finalizează ({{time}})",
                resume: "Reia ({{time}})",
                completed: "Finalizat"
            },
            reward: {
                orbs: "{{status}} pentru {{orbQuantity}} Orbs.",
                article: "{{status}} pentru {{itemName}}.",
                unrecognized: "{{status}} pentru o recompensă necunoscută."
            },
            toast: {
                autoCompleteBroken: "Finalizarea automată nu funcționează. O remediere va apărea în curând.",
                enrollmentFailed: "Înscrierea în Quest-ul {{questName}} a eșuat.",
                enrollmentInNormalizequestnameQuest: "Înscrierea în misiunea {{normalizeQuestName_quest}} a eșuat{{rateLimitSuffix}}.",
                automationUnlocked: "Automatizarea Quest-urilor a fost deblocată.",
                automationLocked: "Automatizarea Quest-urilor a fost blocată."
            },
            notification: {
                completed: {
                    title: "Quest finalizat!",
                    body: "Quest-ul {{questName}} a fost finalizat."
                },
                newQuest: {
                    title: "Quest nou detectat!",
                    body: "Quest-ul {{questName}} este acum disponibil."
                },
                newQuests: {
                    title: "Quest-uri noi detectate!",
                    body: "{{count}} Quest-uri noi sunt acum disponibile."
                },
                newExcludedQuest: {
                    title: "Quest exclus nou detectat!",
                    body: "A fost detectat Quest-ul exclus {{questName}}. ID: {{questId}}"
                },
                newExcludedQuests: {
                    title: "Quest-uri excluse noi detectate!",
                    body: "Au fost detectate {{count}} Quest-uri excluse noi. Verifică consola pentru ID-urile lor."
                }
            },
            alert: {
                restart: {
                    title: "Repornire necesară",
                    body: "O modificare a setărilor Questify necesită o repornire.",
                    confirm: "Repornește",
                    cancel: "Mai târziu"
                },
                dangerous: {
                    title: "Ești sigur?",
                    confirm: "Continuă",
                    cancel: "Anulează",
                    disableEverything: "Aceasta va dezactiva complet funcționalitatea Quest-urilor.",
                    allowDangerous: "Aceasta va permite modificarea setărilor periculoase."
                }
            },
            status: {
                unclaimed: "NEREVENDICATĂ",
                claimed: "Revendicat",
                ignored: "Ignorat",
                expired: "Expirat"
            },
            questTypes: {
                watchVideo: "Urmărește video",
                watchVideoOnMobile: "Urmărește video pe mobil",
                achievementInActivity: "Realizare în activitate",
                achievementInGame: "Realizare în joc",
                playActivity: "Joacă activitate",
                playOnDesktop: "Joacă pe desktop",
                playOnDesktopV2: "Joacă pe desktop V2",
                streamOnDesktop: "Transmite pe desktop",
                playOnPlayStation: "Joacă pe PlayStation",
                playOnXbox: "Joacă pe Xbox"
            },
            settings: {
                questButton: {
                    title: "Butonul Quest",
                    description: "Afișează un buton Quest în lista de servere, cu un indicator opțional pentru Quest-urile nerevendicate și neignorate.",
                    behavior: "Comportamentul butonului",
                    leftClick: "Acțiune la clic stânga:",
                    middleClick: "Acțiune la clic de mijloc:",
                    rightClick: "Acțiune la clic dreapta:",
                    visibility: "Vizibilitatea butonului:",
                    visibilityTooltip: "Întotdeauna afișează butonul Quest cât timp această funcție este activată.\n\nNerevendicat îl afișează doar când ai recompense Quest relevante nerevendicate.\n\nNiciodată ascunde butonul Quest.",
                    unclaimedIndicator: "Indicator nerevendicate:",
                    unclaimedIndicatorTooltip: "Pastilă afișează marcajul de necitit al Discord lângă butonul Quest.\n\nInsignă afișează numărul de recompense Quest relevante nerevendicate.\n\nAmbele afișează pastila și insigna împreună.\n\nNiciunul ascunde indicatorii.",
                    badgeColor: "Culoarea insignei:",
                    relevancy: "Relevanța Quest-urilor",
                    includedRewardTypes: "Tipuri de recompense incluse:",
                    includedRewardTypesTooltip: "Consideră nerevendicate doar Quest-urile cu aceste tipuri de recompense la stabilirea vizibilității butonului, a numărului de pe insignă și a alertelor.",
                    includedQuestTypes: "Tipuri de Quest incluse:",
                    includedQuestTypesTooltip: "Consideră nerevendicate doar Quest-urile cu aceste tipuri de sarcini la stabilirea vizibilității butonului, a numărului de pe insignă și a alertelor.",
                    display: {
                        always: "Întotdeauna",
                        unclaimed: "Nerevendicat",
                        never: "Niciodată"
                    },
                    indicator: {
                        pill: "Pastilă",
                        badge: "Insignă",
                        both: "Ambele",
                        none: "Niciunul"
                    },
                    action: {
                        openQuests: "Deschide Quest-urile",
                        contextMenu: "Meniu contextual",
                        pluginSettings: "Setările pluginului",
                        nothing: "Nimic"
                    },
                    rewardTypes: {
                        orbs: "Orbs",
                        nitroCodes: "Coduri Nitro",
                        rewardCodes: "Coduri de recompensă",
                        inGameItems: "Obiecte în joc",
                        profileCollectibles: "Obiecte de colecție pentru profil"
                    }
                },
                questFeatures: {
                    title: "Funcțiile Quest-urilor",
                    description: "Modifică comportamentul Quest-urilor pentru a îmbunătăți sau elimina funcționalități.",
                    disableFeatures: "Dezactivează funcții",
                    disableEverything: "Dezactivează complet funcționalitatea Quest-urilor:",
                    disableEverythingTooltip: "Aceasta dezactivează toate îmbunătățirile pluginului, ascunde pagina Quest-urilor și elementele Quest din tot Discord-ul și împiedică Discord să preia datele Quest-urilor. Magazinul nu va fi afectat, deoarece Orbs sunt prea strâns legate de el ca monedă secundară.",
                    disableSpecific: "Dezactivează anumite funcții:",
                    disableSpecificTooltip: "Bannerul sponsorizat este un banner Quest plătit în partea de sus a paginii Quest-urilor.\n\nNotificările de mutare sunt indicatori, de exemplu pe pagina Descoperă, că Quest-urile au fost mutate în mesajele directe.\n\nPromo în lista de prieteni este un card afișat în secțiunea \"Activ acum\" a listei de prieteni când un utilizator cu care ai un server comun joacă un joc cu un Quest activ.\n\nPromo în lista de membri este o pictogramă afișată la membrii din lista unui server când joacă un joc cu un Quest activ.\n\nPromo în panoul contului este o promovare Quest plătită afișată deasupra panoului contului tău.\n\nProgresul din panoul contului este progresul Quest-ului activ sau finalizat afișat deasupra panoului contului tău.\n\nInsignele Quest și Orbs sunt insigne în profilurile celor care au finalizat cel puțin un Quest sau au cumpărat insigna Orbs.",
                    disableOptions: {
                        sponsoredBanner: "Banner sponsorizat",
                        relocationNotices: "Notificări de mutare",
                        friendsListPromo: "Promo în lista de prieteni",
                        membersListPromo: "Promo în lista de membri",
                        accountPanelPromo: "Promo în panoul contului",
                        accountPanelProgress: "Progres în panoul contului",
                        orbsAndQuestsBadges: "Insigne Quest și Orbs"
                    },
                    modifyFeatures: "Modifică funcții",
                    warningTos: "Discord a început să trimită avertismente utilizatorilor de scripturi sau pluginuri care modifică modul de finalizare a Quest-urilor, ceea ce încalcă {{tos}}.",
                    tos: "Termenii de utilizare",
                    warningEscalate: "Avertismentele par limitate la amenințarea pierderii accesului la Quest-uri sau la recompensele lor, dar Discord poate înăspri măsurile oricând.",
                    warningDetection: "Din cauza metodelor variate prin care Discord urmărește utilizatorii, nu există o modalitate realistă de a evita detectarea. Dacă continui, ia în calcul că Discord probabil o va detecta la un moment dat.",
                    warningRisk: "Folosește comutatorul următor pentru a accesa setări potențial periculoase pe propriul risc.",
                    allowDangerous: "Permite modificarea setărilor periculoase...",
                    disallowDangerous: "Resetează și interzice modificarea setărilor periculoase...",
                    completeVideoQuicker: "Accelerează finalizarea automată a Quest-urilor video:",
                    completeVideoQuickerTooltip: "Discord permite finalizarea Quest-urilor video după ce, de la înscriere, a trecut durata videoclipului minus 24 de secunde.\n\nAstfel, un Quest video de 24 de secunde sau mai scurt, ori unul la care te înscrii și revii mai târziu, poate fi finalizat imediat.\n\nAceastă setare se aplică doar finalizării automate a Quest-urilor video și depinde de setarea de finalizare automată de mai jos. Finalizarea manuală necesită în continuare așteptarea întregii durate și nu depinde de momentul înscrierii.",
                    mobileDesktop: "Permite finalizarea pe desktop a unor Quest-uri video doar pentru mobil:",
                    mobileDesktopTooltip: "La unele Quest-uri video doar pentru mobil te poți înscrie de pe desktop, dar trebuie totuși finalizate pe mobil. Această setare permite finalizarea lor pe desktop.\n\nLa unele Quest-uri video doar pentru mobil te poți înscrie doar de pe mobil. Pentru ca setarea să le afecteze, înscrie-te de pe dispozitivul mobil înainte de a reveni pe desktop și a reîmprospăta Quest-urile.\n\nActivată singură, această setare se aplică doar finalizării manuale a Quest-urilor video. Finalizarea automată a Quest-urilor video mobile de pe desktop depinde de setarea de finalizare automată de mai jos și activează implicit și această setare.",
                    simultaneous: "Finalizează automat Quest-urile simultan, nu pe rând:",
                    simultaneousTooltip: "Implicit, finalizarea automată a mai multor Quest-uri le pune într-o coadă pentru a fi finalizate în ordine.\n\nAceastă setare permite în schimb ca toate Quest-urile cu finalizare automată să ruleze în același timp.\n\nAceastă setare se aplică doar finalizării automate și depinde de setarea de finalizare automată de mai jos.",
                    resumeInterrupted: "Reia finalizările automate întrerupte după reîncărcare sau repornire:",
                    resumeInterruptedTooltip: "Această setare reia automat finalizările automate întrerupte de reîncărcări sau reporniri, inclusiv repunerea în coadă a Quest-urilor care erau în coadă dar nu începuseră încă.",
                    autoProcess: "Procesează automat Quest-urile compatibile pentru finalizare automată:",
                    autoProcessTooltip: "Finalizează Quest-urile eligibile, nerevendicate, neignorate și neexpirate incluse de filtrele tale de recompensă și tip de Quest, detectate cât timp Discord rulează. Sunt incluse doar tipurile de sarcini acceptate activate mai jos.\n\nSe înscrie automat în Quest-urile compatibile înainte de a le pune în coadă pentru finalizare automată. Așteaptă perioadele cunoscute de limitare a ratei. Se oprește la erori necunoscute, limitări fără timp de reîncercare sau eșecuri repetate de înscriere.",
                    autoEnroll: "Înscrie-te automat în Quest-urile compatibile.",
                    autoEnrollTooltip: "Se înscrie în Quest-urile eligibile, nerevendicate, neignorate și neexpirate incluse de filtrele tale de recompensă și tip de Quest, detectate cât timp Discord rulează.\n\nSe înscrie în Quest-uri fără a le pune în coadă pentru finalizare automată. Așteaptă perioadele cunoscute de limitare a ratei. Se oprește la erori necunoscute, limitări fără timp de reîncercare sau eșecuri repetate de înscriere.",
                    autoCompleteTypes: "Finalizează automat anumite tipuri de Quest:",
                    autoCompleteTypesTooltip: "Quest-urile \"Urmărește video pe mobil\" funcționează doar cu Quest-uri mobile la care te poți înscrie de pe desktop. Dacă înscrierea e limitată la mobil, înscrie-te mai întâi de pe dispozitivul mobil, apoi revino pe desktop și reîmprospătează Quest-urile.\n\nToate Quest-urile video trimit de obicei un stack trace împreună cu rapoartele de progres. Astfel Discord știe exact ce funcții au fost apelate și poate verifica dacă progresul a fost inițiat de propriile funcții. Questify șterge acest stack trace, dar absența lui este la fel de grăitoare ca prezența.\n\nQuest-urile \"Joacă pe desktop\", \"Joacă pe PlayStation\", \"Joacă pe Xbox\", \"Joacă activitate\" și \"Realizare în activitate\" sunt disponibile doar în clienții desktop oficiali, din cauza unei limitări impuse de Discord. Clienții terți precum extensiile web, Plextron și alții nu acceptă finalizarea automată a acestor tipuri.\n\nToate Quest-urile de jocuri trimit de obicei o amprentă a jocului împreună cu rapoartele heartbeat. Astfel Discord poate folosi datele a zeci de mii de utilizatori pentru a stabili dacă alții folosesc probabil un joc real sau emulează executabilul. Nu există o metodă rezonabilă de a falsifica această valoare, așa că Questify o lasă goală, dar absența ei este la fel de grăitoare ca o falsificare proastă.\n\nFinalizarea automată pornește de la butoanele Quest de pe pagina Quest-urilor sau de la procesarea automată. Quest-urile sunt finalizate în ordinea în care au fost puse în coadă, cu excepția cazului în care finalizarea simultană este activată mai sus.\n\nFinalizarea automată a Quest-urilor este cea mai riscantă setare periculoasă. Activeaz-o pe propriul risc."
                },
                questNotifications: {
                    title: "Notificări Quest",
                    description: "Configurează notificările și alertele pentru Quest-urile finalizate și cele noi detectate.",
                    questCompleted: "Quest finalizat",
                    notifyOnComplete: "Afișează o notificare când un Quest este finalizat:",
                    soundOnComplete: "Redă un sunet când un Quest este finalizat:",
                    volume: "Volum:",
                    newQuests: "Quest-uri noi detectate",
                    notifyOnNew: "Afișează o notificare când sunt detectate Quest-uri noi:",
                    soundOnNew: "Redă un sunet când sunt detectate Quest-uri noi:",
                    notifyOnNewExcluded: "Afișează o notificare când sunt detectate Quest-uri excluse noi:",
                    notifyOnNewExcludedTooltip: "Unele Quest-uri sunt excluse din lista ta de Quest-uri disponibile din cauza restricțiilor regionale sau de platformă.\n\nCând este activat, Questify va prelua configurațiile lor, va aplica filtrele tale de tipuri de Quest și recompensă, va afișa în consolă datele Quest-urilor excluse și va arăta o notificare separată pentru cele potrivite.",
                    soundOnNewExcluded: "Redă un sunet când sunt detectate Quest-uri excluse noi:",
                    soundOnNewExcludedTooltip: "Unele Quest-uri sunt excluse din lista ta de Quest-uri disponibile din cauza restricțiilor regionale sau de platformă.\n\nCând este selectat un sunet, Questify va prelua configurațiile lor, va aplica filtrele tale de tipuri de Quest și recompensă, va afișa în consolă datele Quest-urilor excluse și va reda acest sunet pentru cele potrivite.",
                    fetchInterval: "Intervalul de preluare a Quest-urilor:",
                    fetchIntervalTooltip: "Discord preia Quest-urile doar la pornire și când vizitezi pagina Quest-urilor.\n\nAcest interval preia periodic Quest-urile cât timp clientul rămâne deschis, astfel încât indicatorii butonului Quest și alertele pentru Quest-uri noi să rămână actualizate pe parcursul zilei.\n\nRulează doar dacă este activat și dacă setările butonului sau ale notificărilor Quest fac ca preluarea periodică să aibă sens.",
                    disabled: "DEZACTIVAT",
                    preview: "Ascultă {{sound}}",
                    intervals: {
                        thirtyMinutes: "30 de minute",
                        fortyFiveMinutes: "45 de minute",
                        oneHour: "1 oră",
                        threeHours: "3 ore",
                        sixHours: "6 ore",
                        twelveHours: "12 ore"
                    }
                },
                questTiles: {
                    title: "Plăcile Quest",
                    description: "Evidențiază Quest-urile cu culori de temă opționale pentru vizibilitate.",
                    behavior: "Comportamentul plăcilor",
                    gradientStyle: "Stilul gradientului:",
                    gradientStyleTooltip: "Intens și Implicit folosesc culoarea plăcii selectată în gradientul imaginii.\n\nNegru subtil păstrează un gradient neutru mai închis pentru contrast.\n\nFără gradient elimină gradientul imaginii, ceea ce poate face unele ilustrații Quest mai greu de citit.",
                    assetPreload: "Preîncărcarea resurselor:",
                    assetPreloadTooltip: "Încărcarea tuturor resurselor la deschiderea paginii Quest-urilor reduce deplasările aspectului la derulare.\n\nÎncărcarea în timpul derulării este mai apropiată de comportamentul implicit al Discord și poate necesita mai puțin efort la început.",
                    colors: "Culorile plăcilor",
                    enable: "Activează",
                    disable: "Dezactivează",
                    gradient: {
                        intense: "Gradient de restilizare intens",
                        default: "Gradient de restilizare implicit",
                        black: "Gradient negru subtil",
                        hide: "Fără gradient"
                    },
                    preload: {
                        onLoad: "Încarcă toate resursele la deschiderea paginii",
                        onScroll: "Încarcă resursele în timpul derulării"
                    }
                },
                reorderQuests: {
                    title: "Reordonează Quest-urile",
                    description: "Sortează misiunile după stare când este selectată sortarea Questify pe pagina misiunilor. Stările ascunse sunt filtrate la orice sortare.",
                    statusOrder: "Ordinea stărilor",
                    statusOrderTooltip: "Fiecare stare poate apărea o singură dată. Selectarea unei stări deja folosite în altă poziție interschimbă cele două poziții.",
                    positions: {
                        first: "Primul:",
                        second: "Al doilea:",
                        third: "Al treilea:",
                        fourth: "Al patrulea:"
                    },
                    subsorts: "Subsortări",
                    unclaimedSubsort: "Subsortare nerevendicate:",
                    unclaimedSubsortTooltip: "Quest-urile finalizate dar nerevendicate rămân sub cele nefinalizate nerevendicate, apoi această subsortare se aplică în interiorul acelor grupuri.",
                    claimedSubsort: "Subsortare revendicate:",
                    claimedSubsortTooltip: "Quest-urile revendicate pot fi sortate după momentul revendicării sau după momentul adăugării.",
                    ignoredSubsort: "Subsortare ignorate:",
                    ignoredSubsortTooltip: "Quest-urile ignorate își păstrează poziția grupului, apoi această subsortare le controlează ordinea în interiorul grupului.",
                    expiredSubsort: "Subsortare expirate:",
                    expiredSubsortTooltip: "Quest-urile expirate pot fi sortate după momentul expirării sau după momentul adăugării.",
                    subsort: {
                        addedNewest: "Adăugate (cele mai noi)",
                        addedOldest: "Adăugate (cele mai vechi)",
                        expiringSoonest: "Expiră (cel mai curând)",
                        expiringLatest: "Expiră (cel mai târziu)",
                        expiredMostRecent: "Expirate (cele mai recente)",
                        expiredLeastRecent: "Expirate (cele mai vechi)",
                        claimedMostRecent: "Revendicate (cele mai recente)",
                        claimedLeastRecent: "Revendicate (cele mai vechi)"
                    },
                    memory: "Memoria paginii Quest",
                    rememberSort: "Memorează sortarea selectată a paginii Quest:",
                    rememberSortTooltip: "Când este dezactivat, pagina Quest-urilor se deschide de fiecare dată cu sortarea Questify.",
                    rememberFilters: "Memorează filtrele selectate ale paginii Quest:",
                    rememberFiltersTooltip: "Când este dezactivat, pagina Quest-urilor se deschide de fiecare dată fără filtre de sarcini sau recompense."
                }
            },
            option: {
                migrationVersion: {
                    label: "Versiunea migrării",
                    description: "Versiunea curentă de migrare a setărilor."
                },
                questFeatures: {
                    label: "Funcțiile Quest-urilor",
                    description: "Selectează ce funcții ale Quest-urilor să fie dezactivate."
                },
                disableQuestsEverything: {
                    label: "Dezactivează tot",
                    description: "Dezactivează toate funcțiile Quest-urilor."
                },
                disableRelocationNotices: {
                    label: "Dezactivează notificările de mutare",
                    description: "Dezactivează notificările de mutare a Quest-urilor pe pagina Descoperă."
                },
                disableSponsoredBanner: {
                    label: "Dezactivează bannerul sponsorizat",
                    description: "Dezactivează bannerul sponsorizat de pe pagina Quest-urilor."
                },
                disableAccountPanelPromo: {
                    label: "Dezactivează promo din panoul contului",
                    description: "Dezactivează fereastra Quest promovată de deasupra panoului contului."
                },
                disableAccountPanelQuestProgress: {
                    label: "Dezactivează progresul din panoul contului",
                    description: "Dezactivează progresul Quest-urilor active și finalizate de deasupra panoului contului."
                },
                disableOrbsAndQuestsBadges: {
                    label: "Dezactivează insignele Quest și Orbs",
                    description: "Dezactivează insigna Quest din profiluri."
                },
                disableFriendsListPromo: {
                    label: "Dezactivează promo din lista de prieteni",
                    description: "Dezactivează promovarea Quest-urilor pentru jocurile jucate de prieteni."
                },
                disableMembersListPromo: {
                    label: "Dezactivează promo din lista de membri",
                    description: "Dezactivează pictograma de joc activ din lista de membri."
                },
                allowChangingDangerousSettings: {
                    label: "Permite setări periculoase",
                    description: "Permite modificarea setărilor periculoase."
                },
                resumeInterruptedQuests: {
                    label: "Reia Quest-urile întrerupte",
                    description: "Reia finalizarea automată a Quest-urilor după reîncărcare sau repornire."
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "Quest-uri video mobile compatibile cu desktop",
                    description: "Face Quest-urile video doar pentru mobil compatibile cu desktopul."
                },
                autoCompleteQuestsSimultaneously: {
                    label: "Finalizare automată simultană",
                    description: "Finalizează Quest-urile simultan, nu pe rând."
                },
                completeVideoQuestsQuicker: {
                    label: "Finalizează mai rapid Quest-urile video",
                    description: "Folosește toleranța de progres a Discord și timpul scurs de la înscriere pentru finalizarea automată a Quest-urilor video."
                },
                autoCompleteQuestTypes: {
                    label: "Tipuri de Quest pentru finalizare automată",
                    description: "Ce tipuri de Quest-uri să fie finalizate automat în fundal."
                },
                questButton: {
                    label: "Butonul Quest",
                    description: "Personalizează butonul Quest din lista de servere."
                },
                questButtonDisplay: {
                    label: "Afișarea butonului Quest",
                    description: "Ce tip de afișare să folosească butonul Quest din lista de servere."
                },
                questButtonIncludedTypes: {
                    label: "Tipuri incluse în butonul Quest",
                    description: "Ce tipuri de recompense și Quest-uri să fie incluse în numărul afișat pe butonul Quest."
                },
                questButtonIndicator: {
                    label: "Indicatorul butonului Quest",
                    description: "Ce tip de afișare să folosească indicatorul de nerevendicate de pe butonul Quest."
                },
                questButtonBadgeCount: {
                    label: "Numărul insignei",
                    description: "Numărul curent de Quest-uri relevante nerevendicate."
                },
                questButtonBadgeColor: {
                    label: "Culoarea insignei",
                    description: "Culoarea insignei butonului Quest din lista de servere."
                },
                questButtonLeftClickAction: {
                    label: "Acțiune la clic stânga",
                    description: "Acțiunea la clic stânga pe butonul Quest."
                },
                questButtonMiddleClickAction: {
                    label: "Acțiune la clic de mijloc",
                    description: "Acțiunea la clic de mijloc pe butonul Quest."
                },
                questButtonRightClickAction: {
                    label: "Acțiune la clic dreapta",
                    description: "Acțiunea la clic dreapta pe butonul Quest."
                },
                questNotifications: {
                    label: "Notificări Quest",
                    description: "Configurează notificările pentru Quest-urile finalizate și cele noi detectate."
                },
                notifyOnQuestComplete: {
                    label: "Notifică la finalizare",
                    description: "Afișează o notificare când un Quest este finalizat."
                },
                notifyOnNewQuests: {
                    label: "Notifică Quest-urile noi",
                    description: "Afișează o notificare când sunt detectate Quest-uri noi."
                },
                notifyOnNewExcludedQuests: {
                    label: "Notifică Quest-urile excluse noi",
                    description: "Afișează o notificare când sunt detectate Quest-uri excluse noi."
                },
                questCompletedAlertSound: {
                    label: "Sunet Quest finalizat",
                    description: "Sunetul redat când un Quest este finalizat."
                },
                questCompletedAlertVolume: {
                    label: "Volum Quest finalizat",
                    description: "Volumul sunetului pentru Quest finalizat."
                },
                questFetchInterval: {
                    label: "Interval de preluare",
                    description: "Intervalul în secunde pentru preluarea Quest-urilor de la Discord."
                },
                newQuestAlertSound: {
                    label: "Sunet Quest nou",
                    description: "Sunetul redat când sunt detectate Quest-uri noi."
                },
                newQuestAlertVolume: {
                    label: "Volum Quest nou",
                    description: "Volumul sunetului pentru Quest nou."
                },
                newExcludedQuestAlertSound: {
                    label: "Sunet Quest exclus nou",
                    description: "Sunetul redat când sunt detectate Quest-uri excluse noi."
                },
                newExcludedQuestAlertVolume: {
                    label: "Volum Quest exclus nou",
                    description: "Volumul sunetului pentru Quest exclus nou."
                },
                questTiles: {
                    label: "Plăcile Quest",
                    description: "Personalizează aspectul plăcilor Quest de pe pagina Quest-urilor."
                },
                questTileUnclaimedColor: {
                    label: "Culoarea plăcilor nerevendicate",
                    description: "Culoarea plăcilor Quest-urilor nerevendicate."
                },
                questTileClaimedColor: {
                    label: "Culoarea plăcilor revendicate",
                    description: "Culoarea plăcilor Quest-urilor revendicate."
                },
                questTileIgnoredColor: {
                    label: "Culoarea plăcilor ignorate",
                    description: "Culoarea plăcilor Quest-urilor ignorate."
                },
                questTileExpiredColor: {
                    label: "Culoarea plăcilor expirate",
                    description: "Culoarea plăcilor Quest-urilor expirate."
                },
                questTileGradient: {
                    label: "Gradientul plăcilor",
                    description: "Stilul gradientului folosit în plăcile Quest."
                },
                questTilePreload: {
                    label: "Preîncărcarea plăcilor",
                    description: "Încearcă să preîncarce resursele plăcilor Quest."
                },
                reorderQuests: {
                    label: "Reordonează Quest-urile",
                    description: "Sortează Quest-urile după stare."
                },
                questOrder: {
                    label: "Ordinea Quest-urilor",
                    description: "Ordinea de sortare a grupurilor de stare ale Quest-urilor."
                },
                unclaimedSubsort: {
                    label: "Subsortare nerevendicate",
                    description: "Metoda de subsortare pentru Quest-urile nerevendicate."
                },
                claimedSubsort: {
                    label: "Subsortare revendicate",
                    description: "Metoda de subsortare pentru Quest-urile revendicate."
                },
                ignoredSubsort: {
                    label: "Subsortare ignorate",
                    description: "Metoda de subsortare pentru Quest-urile ignorate."
                },
                expiredSubsort: {
                    label: "Subsortare expirate",
                    description: "Metoda de subsortare pentru Quest-urile expirate."
                },
                isOnQuestsPage: {
                    label: "Pe pagina Quest-urilor",
                    description: "Dacă utilizatorul se află în prezent pe pagina Quest-urilor."
                },
                rememberQuestPageSort: {
                    label: "Memorează sortarea",
                    description: "Memorează ultima sortare folosită pe pagina Quest-urilor."
                },
                rememberQuestPageFilters: {
                    label: "Memorează filtrele",
                    description: "Memorează ultimele filtre folosite pe pagina Quest-urilor."
                },
                lastQuestPageSort: {
                    label: "Ultima sortare",
                    description: "Ultima sortare folosită pe pagina Quest-urilor."
                },
                lastQuestPageFilters: {
                    label: "Ultimele filtre",
                    description: "Ultimele filtre folosite pe pagina Quest-urilor."
                },
                ignoredQuestIDs: {
                    label: "ID-urile Quest-urilor ignorate",
                    description: "O listă cu ID-urile Quest-urilor ignorate."
                },
                resumeQuestIDs: {
                    label: "ID-urile Quest-urilor de reluat",
                    description: "O listă cu ID-urile Quest-urilor care se finalizează automat sau așteaptă în coadă în fundal."
                },
                acknowledgedNotices: {
                    description: "Notificări unice confirmate de utilizator.",
                    label: "Notificări confirmate"
                },
                settingsSearch: {
                    description: "Caută în setările Questify.",
                    label: "Căutare setări"
                },
                hideNonAutoCompletableQuests: {
                    description: "Ascunde misiunile incomplete fără o sarcină de completare automată acceptată și activată.",
                    label: "Ascunde misiunile necompletabile automat"
                },
                preventVideoQuestsPausing: {
                    description: "Împiedică oprirea videoclipului când fereastra misiunii pierde focusul.",
                    label: "Împiedică oprirea misiunilor video"
                },
                hiddenQuestStatuses: {
                    description: "Grupuri de stări ale misiunilor de ascuns.",
                    label: "Stări de misiune ascunse"
                },
                autoEnrollQuests: {
                    label: "Înscriere automată în Quest-uri",
                    description: "Înscrie-te automat în Quest-urile disponibile eligibile la preluările reușite, cât timp Discord rulează."
                },
                autoCompleteQuests: {
                    label: "Finalizare automată a Quest-urilor",
                    description: "Înscrie-te automat și finalizează Quest-urile disponibile eligibile cu tipuri de sarcini acceptate și activate la preluările reușite, cât timp Discord rulează."
                }
            },
            text: {
                clearQuestQueue: "Golește coada misiunilor",
                hideIncompleteQuestsWith: "Ascunde misiunile incomplete cu stare nerevendicată sau ignorată când nicio sarcină de completare automată nu este acceptată pe această platformă și activată în lista tipurilor de misiuni. Misiunile revendicate, expirate și finalizate sunt exceptate. Folosește opțiunile de ordine a stărilor ascunse pentru a le ascunde.",
                discordForcesYouTo: "Discord te obligă să ai clientul în prim-plan pentru ca misiunile video să-și redea videoclipul.",
                hideNonAutoCompletable: "Ascunde misiunile care nu pot fi completate automat:",
                preventVideoQuestsFrom: "Împiedică misiunile video să se oprească la pierderea focusului:",
                thePunishmentAlsoConsists: "Pedeapsa include și o încălcare a stării contului care durează 2 ani pentru fiecare încălcare.",
                dueToTheVarious: "Din cauza diverselor metode prin care Discord urmărește utilizatorii, nu există o cale realistă de a evita detectarea. Dacă continui, înțelege că Discord îți va detecta probabil utilizarea la un moment dat.",
                enrollInQuest: "Înscrie-te în misiune",
                hidden: "Ascuns",
                selectingAnOccupiedPosition: "Selectarea unei poziții ocupate schimbă cele două stări. Stările ascunse sunt eliminate din listele de misiuni.",
                searchQuestifySettings: "Caută în setările Questify",
                searchQuestifySettings2: "Caută în setările Questify...",
                noMatchingSettings: "Nicio setare potrivită.",
                questifyNoticeAugust7th: "Notificare Questify - 7 august 2026",
                keepUsingDangerousQuestify: "Continuă să folosești setările periculoase Questify",
                disableDangerousQuestifySettings: "Dezactivează setările periculoase Questify",
                questifyNoticeAugust26th: "Notificare Questify - 26 august 2026",
                areYouSure: "Ești sigur?",
                thePunishmentAppearsLimited: "Pedeapsa pare limitată la pierderea accesului la misiuni și la recompensele lor, dar Discord o poate înăspri oricând.",
                queueAllQuests: "Pune toate misiunile în coadă",
                inProgress: "În curs",
                rateLimited: "Limitat",
                preventsVideoPausing: "Această setare împiedică pauza videoclipului și permite finalizarea normală.",
                appliesOnlyToVideoQuests: "Această setare se aplică doar la finalizarea manuală a misiunilor video.",
                knownToPunish: "Discord este cunoscut pentru sancționarea utilizatorilor de scripturi sau pluginuri care modifică finalizarea misiunilor. Modificarea finalizării misiunilor încalcă",
                punishmentConsists: "Sancțiunea constă în pierderea temporară sau permanentă a accesului la misiuni și la recompensele lor.",
                questBanSystem: "Discord a implementat un sistem de interdicție pentru misiuni care îți va limita temporar sau permanent accesul la finalizarea misiunilor și revendicarea recompenselor dacă se constată că le finalizezi prin mijloace neoficiale. Modificarea finalizării misiunilor încalcă",
                begunPunishing: "Discord a început să sancționeze utilizatorii de scripturi și pluginuri care modifică finalizarea misiunilor. Modificarea finalizării misiunilor încalcă",
                dueToRateLimits: " din cauza limitelor de rată"
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
                    label: "Filigran",
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
            },
            text: {
                quotePreview: "Previzualizare citat"
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
                    deafened: "Asurzit",
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
            keybind: {
                label: "Comandă rapidă",
                recording: "Se înregistrează...",
                reset: "Resetează"
            },
            option: {
                keybindEnabled: {
                    label: "Comandă rapidă activată",
                    description: "Afișează controalele comenzii rapide pentru voce aleatorie"
                },
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
                    label: "Dezactivare microfon",
                    description: "Caută utilizatori care au mute"
                },
                deafen: {
                    label: "Asurzire",
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
            },
            toast: {
                failedToFindA: "Nu s-a găsit niciun canal vocal.",
                voiceChannelIsUnavailable: "Canalul vocal nu este disponibil."
            },
            text: {
                userCount: "{{count}} utilizator",
                usersCount: "{{count}} utilizatori"
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
                    toast: "Istoricul RDMS a fost șters",
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
            },
            text: {
                relationshipNotifier: "Notificator de relații"
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
                fill: "Umplere",
                image: "Imagine"
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
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Controlează dacă să fii menționat întotdeauna sau niciodată la răspunsurile la mesaje, cu funcționalități de listă albă și listă neagră",
            option: {
                replyPingBlacklist: {
                    label: "Listă neagră mențiuni răspuns",
                    description: "Listă separată prin virgule de ID-uri de utilizator de la care să nu primești niciodată mențiuni la răspunsuri"
                },
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
            },
            text: {
                all: "Toate"
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
            },
            toast: {
                youCannotVoteOn: "Nu poți vota propria recenzie.",
                networkErrorFailedTo: "Eroare de rețea: nu s-a putut conecta la ReviewDB.",
                pleaseAuthorizeToVote: "Autorizează pentru a vota recenziile.",
                requestFailed: "ReviewDB: cererea a eșuat cu statusul {{status}}"
            },
            text: {
                ok: "OK",
                updateReviewFor: "Actualizează recenzia pentru @{{name}}",
                reviewUser: "Recenzează @{{name}}",
                system: "Sistem",
                reviewCount: "({{count}} recenzii)"
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
                allCleared: "Toate mesajele programate au fost șterse",
                scheduledMessageSentTo: "Mesaj programat trimis către {{name}}"
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
                roles: "Roluri",
                boostLevel: "{{count}} (Nivelul {{level}})"
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
                tryDiscordHighlighter: {
                    label: "Încearcă evidențiatorul Discord",
                    description: "Folosește stilul implicit Discord dacă Shiki nu e necesar.",
                    never: "Niciodată",
                    secondary: "Preferă Shiki în locul evidențiatorului Discord",
                    primary: "Preferă evidențiatorul Discord în locul Shiki",
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
                },
                ignoredLanguages: {
                    label: "Limbaje ignorate",
                    description: "Listă separată prin virgulă de limbaje lăsate blocurilor de cod implicite ale Discord"
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
                },
                noQuickReacts: {
                    description: "Ascunde reacțiile rapide. Implicit, afișarea meniului complet ascunde butoanele de reacție rapidă.",
                    label: "Fără reacții rapide"
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
                },
                showGithubOrgs: {
                    description: "Afișează organizațiile GitHub din care face parte utilizatorul",
                    label: "Afișează organizațiile GitHub"
                },
                showOnModal: {
                    description: "Afișează conturile conectate în fereastra completă a profilului",
                    label: "Afișează în fereastră"
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
                stage: "scenă"
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
                slowmode: "Mod lent:",
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
                    description: "Afișează primul nume disponibil din formatul tău personalizat în lista de membri, de mesaje private, de prieteni și în Activ acum."
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
                alwaysShowEffects: {
                    label: "Animează mereu efectele",
                    description: "Arată întotdeauna efectele ca și cum ai trece cu cursorul peste."
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
                },
                searchAutocomplete: {
                    description: "Afișează primul nume disponibil din formatul tău personalizat în completarea automată pentru mențiuni și căutare.",
                    label: "Completare automată la căutare"
                },
                styleDirectMessagesList: {
                    description: "Afișează efectele numelui afișat pe intrările neselectate fără hover. Intrările selectate și cele sub cursor rămân stilizate când e dezactivat.",
                    label: "Stilizează lista de mesaje directe"
                },
                styleDirectMessagesMessages: {
                    description: "Afișează efectele numelui afișat la autorii mesajelor fără hover. Numele sub cursor rămân stilizate când e dezactivat.",
                    label: "Stilizează mesajele private"
                },
                styleFriendsList: {
                    description: "Afișează efectele numelui afișat fără hover. Intrările sub cursor rămân stilizate când e dezactivat.",
                    label: "Stilizează lista de prieteni"
                },
                styleActiveNow: {
                    description: "Afișează efectele numelui afișat fără hover. Intrările sub cursor rămân stilizate când e dezactivat.",
                    label: "Stilizează Activ acum"
                },
                ignoreEffects: {
                    description: "Pentru numele non-principale, folosește doar culoarea rolului principal și omite efectele numelui afișat.",
                    label: "Ignoră efectele"
                },
                animateEffects: {
                    description: "Animează degradeurile rolurilor și efectele numelui afișat pe numele non-principale. Este dezactivat de „Ignoră efectele” și mișcarea redusă.",
                    label: "Animează efectele"
                },
                alwaysAnimateEffects: {
                    description: "Forțează animarea efectelor numelui afișat când ar fi deja vizibile, chiar și fără hover.",
                    label: "Animează mereu efectele"
                },
                gradientGlow: {
                    description: "Adaugă o strălucire degradeurilor animate ale utilizatorilor, la fel ca degradeurile rolurilor de server.",
                    label: "Strălucire degrade"
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
            },
            text: {
                save: "Salvează",
                unknown: "Necunoscut"
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
            },
            text: {
                timeoutRemaining: "de timeout rămas"
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
            channelTitle: {
                chat: "Chat",
                dm: "DM"
            },
            modal: {
                switch: "Schimbă canalele",
                popout: "Fereastră separată chat",
                popoutClose: "Închide fereastra popout",
                popoutFor: "Fereastră popout pentru {{channel}}",
                close: "Închide chat-ul lateral"
            },
            option: {
                persistSidebar: {
                    label: "Menține chat-ul lateral",
                    description: "Păstrează chat-ul lateral deschis după repornirea Discord"
                },
                persistPopoutWindows: {
                    label: "Păstrează ferestrele popout",
                    description: "Restaurează ferestrele popout deschise după repornirea Discord"
                },
                popoutAlwaysOnTop: {
                    label: "Popout mereu deasupra",
                    description: "Păstrează ferestrele popout de chat deasupra tuturor celorlalte."
                },
                patchCommunity: {
                    label: "Patch comunitate",
                    description: "Patch pentru funcții precum Channel Browser sau fila Members de pe serverele de comunitate."
                },
                persistedPopoutWindowIds: {
                    description: "ID-urile canalelor pentru ferestrele popout persistate."
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
                global: "Scriere vizibilă (Global)",
                voiceChannel: "Scrierea este mereu vizibilă în chatul canalului vocal conectat",
                temporary: "Scrierea este temporar vizibilă în acest canal din cauza unui mesaj recent"
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
                alwaysEnableInActiveVoiceChat: {
                    label: "Activează mereu în chatul vocal activ",
                    description: "Permite mereu afișarea indicatorului de scriere când scrii într-un canal vocal la care ești conectat."
                },
                temporaryEnableThresholdServers: {
                    label: "Prag de activare temporară (servere)",
                    description: "Permite temporar afișarea indicatorului de scriere timp de atâtea secunde după trimiterea unui mesaj într-un canal de server. Dacă indicatorul este deja vizibil în canal, această setare nu are efect."
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "Prag de activare temporară (mesaje directe)",
                    description: "Permite temporar afișarea indicatorului de scriere timp de atâtea secunde după trimiterea unui mesaj într-un DM sau DM de grup. Dacă indicatorul este deja vizibil în canal, această setare nu are efect."
                },
                enabledLocations: {
                    label: "Locații activate",
                    description: "Activează funcționalitatea pentru aceste ID-uri (DM, canal, server)."
                },
                disabledLocations: {
                    label: "Locații dezactivate",
                    description: "Dezactivează funcționalitatea pentru aceste ID-uri."
                }
            },
            text: {
                silentTyping: "Tastare silențioasă",
                enabled: "Activat",
                chatBarIndicators: "Indicatori în bara de chat",
                membersListIndicators: "Indicatori în lista de membri",
                guild: "Server",
                channel: "Canal",
                global: "Global"
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
            description: "Împarte mesajele prea mari în bucăți de dimensiunea Discord înainte de trimitere.",
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
                    description: "Întârzierea minimă dintre bucăți, în secunde."
                },
                hardSplit: {
                    label: "Împărțire forțată",
                    description: "Dacă este activat, împarte la ultimul caracter în loc de ultimul spațiu/linie nouă."
                },
                splitInSlowmode: {
                    label: "Împarte în Slowmode",
                    description: "Permite împărțirea în modul lent când întârzierea se încadrează în maximul configurat."
                },
                slowmodeMax: {
                    label: "Maxim Slowmode",
                    description: "Durata maximă a modului lent permisă la împărțirea mesajelor."
                },
                splitMode: {
                    description: "Preferă această limită la împărțirea unui mesaj.",
                    label: "Mod de împărțire"
                }
            },
            toast: {
                cannotSplitThisMessage: "Mesajul nu poate fi împărțit din cauza modului lent al canalului.",
                onlySentLengthMessage: "Au fost trimise doar {{sent}}/{{length}} părți ale mesajului.",
                unsentCopied: "Părțile netrimise ale mesajului au fost copiate în clipboard."
            },
            text: {
                newlines: "Rânduri noi",
                spaces: "Spații",
                strictCharacterLimit: "Limită strictă de caractere"
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
                start: "Început",
                interval: "Interval",
                delta: "Delta",
                event: "Eveniment",
                serverTrace: "Urmă server",
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
                set: "Setează stare personalizată",
                delete: "Șterge presetarea"
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
            },
            text: {
                failedToRender: "Afișarea a eșuat :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Face ca alegerea unui sticker să îl insereze în caseta de chat în loc să îl trimită instantaneu"
        },
        streaks: {
            name: "Streaks",
            description: "Afișează o serie lângă un utilizator când schimbați mesaje directe în zile consecutive.",
            tooltip: "Serie de {{count}} zile",
            tooltipExpiring: "Serie de {{count}} zile — scrieți-vă azi ca să o păstrați!",
            option: {
                account: {
                    description: "Autentifică-te sau deconectează-te de la API-ul Streaks. Seriile sunt stocate în API, deci trebuie să fii autentificat ca să fie numărate.",
                    login: "Autentificare în API-ul Streaks",
                    logout: "Deconectare de la API-ul Streaks"
                },
                eliteColor: "Culoare serie elită (100+ zile)",
                diamondColor: "Culoare serie diamant (60+ zile)",
                platinumColor: "Culoare serie platină (45+ zile)",
                goldColor: "Culoare serie aur (30+ zile)",
                silverColor: "Culoare serie argint (14+ zile)",
                bronzeColor: "Culoare serie bronz (7+ zile)",
                defaultColor: "Culoare implicită serie (1+ zile)"
            },
            toast: {
                authFailed: "Autorizarea a eșuat: {{error}}",
                failedToAuthorizeMessage: "Autorizarea a eșuat: {{message}}",
                authorizationExpired: "Autorizarea Streaks a expirat. Autorizează din nou în setările pluginului Streaks."
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Activează automat Modul Streamer când pornești un stream pe Discord"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Dezactivează codecurile video alese pentru streaming și camere.",
            option: {
                disableAv1Codec: {
                    label: "Dezactivează codecul AV1",
                    description: "Fă ca Discord să nu ia în considerare AV1 pentru streaming și camere."
                },
                disableH265Codec: {
                    label: "Dezactivează codecul H265",
                    description: "Fă ca Discord să nu ia în considerare H265 pentru streaming și camere."
                },
                disableH264Codec: {
                    label: "Dezactivează codecul H264",
                    description: "Fă ca Discord să nu ia în considerare H264 pentru streaming și camere."
                },
                disableVP8Codec: {
                    label: "Dezactivează codecul VP8",
                    description: "Fă ca Discord să nu ia în considerare VP8 pentru streaming și camere."
                },
                disableVP9Codec: {
                    label: "Dezactivează codecul VP9",
                    description: "Fă ca Discord să nu ia în considerare VP9 pentru streaming și camere."
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
                name: "Nume",
                nameDescription: "Un nume opțional care te ajută să identifici această regulă.",
                search: "Caută o regulă...",
                noResults: "Nicio regulă nu corespunde căutării.",
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
            },
            text: {
                optionallyOnlyApplyThis: "Opțional, aplică această regulă doar dacă mesajul conține acest text.",
                emptyRule: "Regulă goală {{number}}",
                ruleWithFind: "Regula {{number}} - {{find}}"
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
                },
                recipientTimezoneInDms: {
                    label: "Fusul orar al destinatarului în mesaje private",
                    description: "În mesajele private, afișează fusul orar al destinatarului la mesajele tale"
                },
                showLocalTimezone: {
                    label: "Afișează fusul orar local",
                    description: "Afișează fusul orar local în loc de doar „local”"
                }
            },
            modal: {
                title: "Fusuri orare",
                select: "Selectează fus orar",
                selectPlaceholder: "Alege un fus orar",
                delete: "Șterge fus orar",
                save: "Salvează"
            },
            text: {
                invalidResponseFormat: "Format de răspuns nevalid"
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
                respectDoNotDisturb: {
                    label: "Respectă Nu deranja",
                    description: "Nu afișa notificări când starea ta este Nu deranja."
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
                    deepl: "DeepL Gratuit - Cheie API necesară",
                    deeplPro: "DeepL Pro - Cheie API necesară",
                    kagi: "Kagi Traducere - Cheie API necesară"
                },
                kagiSession: {
                    label: "Sesiune Kagi",
                    description: "Obține tokenul de sesiune de la https://kagi.com/settings?p=user_details"
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
            },
            button: {
                manageLanguages: "Personalizează limbile de traducere și traducerea automată"
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
            },
            text: {
                viewAvatarDecoration: "Vezi decorațiunea avatarului"
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
                },
                messageContextMenu: {
                    description: "Afișează în meniul contextual al mesajului",
                    label: "Meniu contextual mesaj"
                },
                sortKeys: {
                    description: "Sortează alfabetic cheile datelor brute.",
                    label: "Sortează cheile"
                },
                stripSensitiveData: {
                    description: "Elimină datele sensibile din datele brute, precum e-mailul și numărul de telefon.",
                    label: "Elimină datele sensibile"
                }
            },
            modal: {
                title: "Vizualizare Raw",
                content: "Conținutul mesajului",
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
            },
            text: {
                copyTypeData: "Copiază datele {{type}}",
                rawTypeData: "Date brute {{type}}",
                messageData: "Datele mesajului"
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
                    label: "Dezactivează sunetul soundboard-ului",
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
                mute: "Dezactivează microfonul",
                deafen: "Asurzire",
                unmute: "Activează microfonul",
                undeafen: "Anulează asurzirea",
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
            },
            text: {
                convertioWebConverter: "convertorul web convertio"
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
            description: "Readaugă comenzile rapide lipsă din versiunea web Discord. Funcționează complet doar pe Plextron/Legcord, nu în browser",
            option: {
                showNavigationButtons: {
                    description: "Afișează butoanele de navigare înapoi/înainte în bara de titlu.",
                    label: "Afișează butoanele de navigare"
                },
                overrideCommonKeybinds: {
                    description: "Permite Discord să suprascrie cele mai comune comenzi rapide de navigare între file (ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+n). Funcționează doar în câteva browsere care prioritizează comenzile site-urilor.",
                    label: "Suprascrie comenzile rapide comune"
                }
            }
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
                },
                clickableAvatars: {
                    description: "Când este activat, clicul pe avatarul unui utilizator care a reacționat îi deschide profilul în loc să adauge reacția",
                    label: "Avatare clicabile"
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
        },
        addAttachments: {
            name: "AddAttachments",
            description: "Îți permite să adaugi atașamente noi în timp ce editezi mesaje",
            toast: {
                youCannotAddMore: "Nu poți adăuga mai multe atașamente la acest mesaj.",
                youCanOnlyAdd: "Mai poți adăuga doar {{count}} atașament(e) la acest mesaj.",
                uploadingThisCanTake: "Se încarcă, poate dura ceva timp...",
                addedOne: "Atașamentul a fost adăugat!",
                addedMany: "Atașamentele au fost adăugate!"
            },
            text: {
                addAttachments: "Adaugă atașamente"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "Ce să faci cu cardul simplificat de permisiuni al Discord",
                    label: "Card simplificat",
                    hide: "Ascunde-l",
                    collapse: "Fă-l pliabil",
                    show: "Lasă-l vizibil"
                },
                collapsedByDefault: {
                    description: "Pornește cu permisiunile simplificate pliate.",
                    label: "Pliat implicit"
                }
            },
            name: "AdvancedPermissions",
            description: "Afișează implicit cardul de permisiuni avansate.",
            text: {
                simplifiedPermissions: "Permisiuni simplificate"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "Sari automat la mesaje doar când fereastra Discord nu este activă.",
                    label: "Doar când nu e activ"
                }
            },
            name: "AutoJumpToMessage",
            description: "Deschide automat canalul mesajelor noi."
        },
        betterForwards: {
            text: {
                serverIconForName: "Pictograma serverului {{name}}",
                messageAttachments: "Atașamentele mesajului",
                messageTextWillNot: "Textul mesajului nu va fi redirecționat când această opțiune este dezactivată",
                forwardEverything: "Redirecționează tot",
                viewServer: "Vezi serverul",
                embed: "Încorporare",
                embedNumber: "Încorporare {{number}}",
                image: "Imagine",
                video: "Videoclip",
                serverIcon: "Pictograma serverului {{name}}",
                dmIcon: "Pictograma DM {{name}}",
                groupDmIcon: "Pictograma DM de grup {{name}}"
            },
            option: {
                resendOnFail: {
                    description: "Va încerca să retrimită un mesaj redirecționat dacă redirecționarea eșuează. Poate cauza menționări sau spam de text nedorite. Ocolește restricțiile NSFW.",
                    label: "Retrimite la eșec"
                },
                forwardPreface: {
                    description: "Cu ce să înceapă mesajul redirecționat",
                    label: "Prefix redirecționare"
                },
                dontFollowForwards: {
                    description: "După redirecționarea unui singur mesaj, nu sări la el. Ține apăsat Shift pentru a ignora acest comportament.",
                    label: "Nu urmări redirecționările"
                },
                selfForward: {
                    description: "Afișează canalul curent în fereastra listei de redirecționare.",
                    label: "Redirecționare către sine"
                }
            },
            name: "BetterForwards",
            description: "Utilitare pentru redirecționarea mesajelor, inclusiv ocolirea NSFW și îmbunătățiri ale interfeței."
        },
        betterImageEditor: {
            text: {
                search: "Caută",
                searchSavedPictures: "Caută în imaginile salvate",
                clearTheSearch: "Șterge căutarea",
                savedPictures: "Imagini salvate",
                removeName: "Elimină {{name}}",
                removeHoldShiftTo: "Elimină. Ține apăsat Shift pentru a sări peste confirmare",
                originals: "Originale",
                putBackTheLast: "Pune-l înapoi pe ultimul",
                forgetEveryRememberedCrop: "Uiți toate decupările memorate?",
                yourPicturesStayEach: "Imaginile tale rămân. De acum, fiecare se deschide fără încadrare, până când o decupezi din nou.",
                forget: "Uită",
                cancel: "Anulează",
                clearSavedPictures: "Ștergi imaginile salvate?",
                everyPictureYouHave: "Fiecare imagine salvată aici dispare, împreună cu decuparea memorată pentru ea. Arhiva Discord și avatarul și bannerul tău actual nu sunt atinse.",
                clear: "Șterge",
                removeThisPicture: "Elimini această imagine?",
                remove: "Elimină",
                keepTheCroppedCopy: "Păstrezi copia decupată?",
                itGoesOnThe: "Merge pe raftul {{toLowerCase}}, lângă originalele tale.",
                keep: "Păstrează",
                noThanks: "Nu, mulțumesc",
                exportToAFile: "Exportă într-un fișier",
                importFromAFile: "Importă dintr-un fișier",
                forgetRememberedFraming: "Uită încadrarea memorată",
                clearSavedPictures2: "Șterge imaginile salvate",
                croppedKind: "{{kind}} decupate",
                unpinName: "Anulează fixarea {{name}}",
                pinName: "Fixează {{name}}",
                pinnedNeverDrops: "Fixat, nu va cădea niciodată de pe raft",
                pinNeverDrops: "Fixează ca să nu cadă niciodată de pe raft",
                nothingMatches: "Nimic de aici nu se potrivește",
                originalsEmpty: "Imaginile pe care le alegi, lipești sau plasezi ajung aici",
                croppedEmpty: "Imaginile pe care le decupezi ajung aici",
                forgotFraming: "Încadrarea a fost uitată pentru {{count}} imagini",
                nothingFramed: "Nimic nu era încadrat",
                pictureLibrary: "Bibliotecă de imagini",
                addedPictures: "Imagini adăugate: {{count}}",
                nothingNew: "Nimic nou în acel fișier",
                shownOfTotal: "{{shown}} din {{total}}",
                keptCount: "{{count}} păstrate",
                youAreWearingThis: "Folosești asta acum",
                removePictureBody: "{{name}} va fi eliminată din imaginile salvate, împreună cu decuparea memorată."
            },
            option: {
                librarySize: {
                    description: "Câte imagini să păstrezi pe fiecare raft.",
                    label: "Dimensiunea bibliotecii"
                },
                rememberCrop: {
                    description: "Restaurează zoomul și poziția folosite ultima dată pentru o imagine.",
                    label: "Ține minte decuparea"
                },
                forgetFraming: {
                    description: "Renunță la toate decupările memorate și deschide fiecare imagine așa cum ar face Discord.",
                    label: "Uită încadrarea"
                },
                saveCropped: {
                    description: "Păstrează o copie a fiecărei imagini după ce o decupezi.",
                    label: "Salvează decupate"
                },
                askBeforeSavingCropped: {
                    description: "Întreabă mai întâi, în loc să păstrezi automat copia decupată.",
                    label: "Întreabă înainte de a salva decupate"
                },
                transfer: {
                    description: "Mută imaginile tale și încadrarea fiecăreia pe alt dispozitiv.",
                    label: "Transfer"
                },
                clearLibrary: {
                    description: "Aruncă toate imaginile pe care le-ai salvat.",
                    label: "Golește biblioteca"
                }
            },
            name: "BetterImageEditor",
            description: "Păstrează un raft cu imaginile tale în editorul de avatar și banner și ține minte cum ai decupat fiecare.",
            toast: {
                couldNotExportYour: "Nu s-au putut exporta imaginile",
                couldNotReadThat: "Nu s-a putut citi fișierul",
                thatPictureIsMissing: "Imaginea lipsește",
                thatPictureIsToo: "Imaginea este prea mare pentru Discord",
                couldNotUseThat: "Nu s-a putut folosi imaginea",
                couldNotKeepThe: "Nu s-a putut păstra copia decupată"
            },
            kind: {
                avatars: "avatare",
                banners: "bannere",
                serverIcons: "pictograme de server",
                serverBanners: "bannere de server",
                eventCovers: "coperți de evenimente",
                homeHeaders: "antete de pagină principală",
                decorations: "decorațiuni",
                widgetCovers: "coperți de widget",
                widgetImages: "imagini de widget"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "Adaugă o modalitate de a anula cererile de prietenie trimise din profiluri.",
            text: {
                cancelOutgoingFriendRequest: "Anulează cererea de prietenie trimisă"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "Data creării trebuie să fie o dată validă.",
                cancel: "Anulează",
                uploadClipFile: "Încarcă fișier clip",
                fileName: "Nume fișier",
                title: "Titlu",
                epicMoment: "Moment epic",
                message: "Mesaj",
                checkOutThisClip: "Uită-te la acest clip!",
                spoiler: "Spoiler",
                remix: "Remix",
                thumbnail: "Miniatură",
                file: "Fișier",
                selectFile: "Selectează fișierul",
                parseClipMetadataFrom: "Extrage metadatele clipului din fișier",
                selectFriends: "Selectează prieteni",
                selectAGame: "Selectează un joc",
                customApplicationId: "ID personalizat al aplicației",
                createdAt: "Creat la",
                participants: "Participanți",
                onlyTagPeopleWho: "Etichetează doar persoanele care au fost prezente și au fost de acord să apară în acest clip.",
                gameApplication: "Joc/Aplicație",
                uploadClipFile2: "Încarcă fișier clip",
                uploading: "Se încarcă",
                upload: "Încarcă",
                noFileSelected: "Niciun fișier selectat",
                couldNotPrepare: "Nu s-a putut pregăti fișierul selectat.",
                couldNotRead: "Nu s-a putut citi fișierul selectat.",
                couldNotUpdateMetadata: "Nu s-au putut actualiza metadatele clipului.",
                notCompatible: "Acest fișier nu este compatibil. Folosește un clip MP4 cu video H.264 și audio AAC.",
                uploadFailed: "Încărcarea a eșuat.",
                noUploadSlot: "Discord nu a returnat un slot de încărcare.",
                uploadCanceled: "Încărcare anulată.",
                failedToUpload: "Nu s-a putut încărca clipul.",
                selectClipFile: "Selectează fișierul clipului",
                mp4Video: "Video MP4"
            },
            name: "ClipUpload",
            description: "Adaugă un buton pentru a încărca un fișier video local ca clip Discord.",
            toast: {
                checkingClipFile: "Se verifică fișierul clip.",
                convertingClipFile: "Se convertește fișierul clip.",
                clipUploaded: "Clip încărcat."
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "Suprafețe pliabile native pentru canale, membri, butoanele chatului și zona utilizatorului.",
            text: {
                collapsibleUi: "Interfață pliabilă",
                guildBar: "Bara de servere",
                channelList: "Lista de canale",
                membersList: "Lista de membri",
                messageButtons: "Butoane mesaj",
                titleBar: "Bara de titlu",
                headerBar: "Bara de antet",
                userArea: "Zona utilizatorului"
            },
            option: {
                detachUserArea: {
                    description: "Detașează zona utilizatorului, ca să poată fi mutată liber când nu este pliată.",
                    label: "Detașează zona utilizatorului"
                },
                detachedUserAreaX: {
                    description: "Păstrează poziția x a zonei utilizatorului detașate.",
                    label: "Zonă utilizator detașată X"
                },
                detachedUserAreaY: {
                    description: "Păstrează poziția y a zonei utilizatorului detașate.",
                    label: "Zonă utilizator detașată Y"
                },
                guildBarCollapsed: {
                    description: "Păstrează bara de servere pliată.",
                    label: "Bară servere pliată"
                },
                channelListCollapsed: {
                    description: "Păstrează lista de canale pliată.",
                    label: "Listă canale pliată"
                },
                membersListCollapsed: {
                    description: "Păstrează lista de membri pliată.",
                    label: "Listă membri pliată"
                },
                chatButtonsCollapsed: {
                    description: "Păstrează rândul de butoane de mesaj pliat.",
                    label: "Butoane chat pliate"
                },
                titleBarCollapsed: {
                    description: "Păstrează bara de titlu pliată.",
                    label: "Bară de titlu pliată"
                },
                headerBarCollapsed: {
                    description: "Păstrează bara de antet pliată.",
                    label: "Bară de antet pliată"
                },
                userAreaCollapsed: {
                    description: "Păstrează zona utilizatorului pliată.",
                    label: "Zonă utilizator pliată"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "Anulează",
                name: "Name",
                response: "Răspuns",
                detectedArguments: "Argumente detectate",
                exampleCommandResponse: "Exemplu de răspuns al comenzii:",
                exampleUsage: "Exemplu de utilizare:",
                exampleOutput: "Exemplu de rezultat:",
                viewArgumentsGuide: "Vezi ghidul argumentelor",
                editTag: "Editează eticheta",
                deleteTag: "Șterge eticheta",
                registeredTags: "Etichete înregistrate",
                createTag: "Creează etichetă",
                aTagWithThe: "Nu există o etichetă cu numele **{{name}}**!",
                successfullyDeletedTheTag: "Eticheta **{{name}}** a fost ștearsă!",
                ephemeralReserved: "Numele de argument \"ephemeral\" este rezervat și nu poate fi folosit.",
                createNewTag: "Creează o etichetă nouă",
                editTagSubtitle: "Editează comanda ta personalizată.",
                createTagSubtitle: "Creează o etichetă nouă care va fi înregistrată ca comandă slash.",
                save: "Salvează",
                create: "Creează",
                variablesHelp: "Răspunsul tău poate include variabile între acolade duble, care vor deveni argumente ale comenzii, de exemplu",
                defaultValuesHelp: "Poți specifica argumente cu valori implicite folosind semnul egal, de exemplu",
                noTagsYet: "Ups! Încă nu există etichete, folosește `/tags create` pentru a crea una!",
                nameAlreadyExists: "O etichetă cu numele \"{{name}}\" există deja și va fi suprascrisă.",
                defaultValue: "(implicit: {{value}})"
            },
            name: "CustomCommands",
            description: "Îți permite să creezi comenzi slash / etichete personalizate",
            option: {
                tagsList: {
                    label: "Lista etichetelor"
                }
            },
            command: {
                ephemeral: "Dacă răspunsul trebuie să fie vizibil doar pentru tine",
                tags: "Gestionează toate comenzile personalizate",
                create: "Creează o etichetă nouă",
                list: "Listează toate etichetele tale",
                delete: "Elimină o etichetă după nume",
                tagName: "Numele etichetei"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "Încarcă fișiere pe servicii de găzduire precum Zipline, Nest, S3 și WebDAV",
            toast: {
                fileTypeNotAllowed: "Tipul de fișier nu este permis de filtrul curent",
                pleaseConfigureFileuploadSettings: "Configurează mai întâi setările FileUpload",
                sharexConfigIsValid: "Configurația ShareX este validă",
                importedSharexConfig: "Configurația ShareX a fost importată",
                uploadSuccessfulButNo: "Încărcare reușită, dar nu a fost disponibil niciun URL de copiat",
                uploadSuccessfulUrlCopied: "Încărcare reușită, URL copiat în clipboard",
                uploadSuccessfulButFailed: "Încărcare reușită, dar URL-ul nu a putut fi copiat",
                uploadSuccessful: "Încărcare reușită",
                uploadSucceededWithServicelabels: "Încărcare reușită cu {{serviceLabels_service}} după rezervă",
                apngToGifConversion: "Conversia APNG în GIF a eșuat, se încarcă ca APNG",
                uploadAlreadyInProgress: "Încărcarea este deja în curs",
                uploadCancelled: "Încărcare anulată",
                uploadFailedMessage: "Încărcarea a eșuat: {{message}}",
                invalidSharexConfig: "Configurație ShareX nevalidă",
                failedToImportSharexConfig: "Nu s-a putut importa configurația ShareX"
            },
            text: {
                uploadToServicename: "Încarcă pe {{serviceName}}",
                uploadToHost: "Încarcă pe gazdă",
                chooseFile: "Alege fișierul...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "Compatibil S3",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "Încărcător personalizat ShareX",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 oră",
                n12Hours: "12 ore",
                n24Hours: "24 de ore",
                n72Hours: "72 de ore",
                corsProxy: "Proxy CORS",
                query: "Interogare",
                param: "Parametru",
                fakeLink: "Link fals",
                embed: "Înglobare",
                n30Seconds: "30 de secunde",
                n1Minute: "1 minut",
                n2Minutes: "2 minute",
                n5Minutes: "5 minute",
                n10Minutes: "10 minute",
                dragHostsToReorder: "Trage gazdele pentru a reordona încercările de rezervă. Gazda selectată este încercată prima, apoi se folosește această ordine.",
                chooseWhereFileuploadSends: "Alege unde trimite FileUpload fișierele noi.",
                connectionDetailsForYour: "Detaliile de conectare pentru instanța ta Zipline.",
                theUrlOfYour: "URL-ul instanței tale Zipline",
                yourZiplineApiAuthorization: "Token-ul tău de autorizare API Zipline",
                yourZiplineApiToken: "Token-ul tău API Zipline",
                folderIdForUploads: "ID dosar pentru încărcări (lasă gol pentru niciun dosar)",
                leaveEmptyForNo: "Lasă gol pentru niciun dosar",
                connectionDetailsForE: "Detaliile de conectare pentru încărcările pe E-Z Host.",
                yourEZHost: "Cheia ta API E-Z Host",
                connectionDetailsForNest: "Detaliile de conectare pentru încărcările pe Nest.",
                yourNestApiAuthorization: "Token-ul tău de autorizare API Nest",
                yourNestApiToken: "Token-ul tău API Nest",
                connectionDetailsForEncrypting: "Detaliile de conectare pentru încărcările pe Encrypting.host.",
                yourEncryptingHostApi: "Cheia ta API Encrypting.host",
                howEncryptingHostShould: "Cum să formateze Encrypting.host linkurile returnate.",
                selectUrlStyle: "Selectează stilul URL",
                optionalTitleForEmbed: "Titlu opțional pentru răspunsurile în stil înglobare.",
                optionalTitle: "Titlu opțional",
                optionalColorForEmbed: "Culoare opțională pentru răspunsurile în stil înglobare.",
                optionalColor: "Culoare opțională",
                optionalFakeLinkValue: "Valoare opțională a linkului fals pentru răspunsurile în stil fakelink.",
                optionalFakeLink: "Link fals opțional",
                connectionDetailsAndObject: "Detaliile de conectare și denumirea obiectelor pentru bucket-ul tău.",
                s3CompatibleEndpointE: "Endpoint compatibil S3 (ex. https://<accountid>.r2.cloudflarestorage.com)",
                bucketToUploadInto: "Bucket-ul în care se încarcă",
                awsRegionOrAuto: "Regiune AWS sau auto pentru Cloudflare R2",
                s3CompatibleAccessKey: "Cheie de acces compatibilă S3",
                yourAccessKeyId: "ID-ul cheii tale de acces",
                s3CompatibleSecretKey: "Cheie secretă compatibilă S3",
                yourSecretAccessKey: "Cheia ta secretă de acces",
                optionalTemporaryCredentialToken: "Token opțional de acreditare temporară",
                optionalSessionToken: "Token de sesiune opțional",
                optionalPublicUrlBase: "URL de bază public opțional pentru linkurile returnate",
                optionalFolderPrefixInside: "Dosar/prefix opțional în bucket",
                useEndpointBucketKey: "Folosește formatul endpoint/bucket/cheie, recomandat pentru R2.",
                optionalAccountBindingFor: "Asociere opțională a contului pentru încărcările pe Catbox.",
                yourCatboxUserhashFor: "Userhash-ul tău Catbox pentru asocierea contului; lasă gol pentru încărcări anonime.",
                yourCatboxUserhash: "Userhash-ul tău Catbox",
                howLongUploadsAre: "Cât timp sunt păstrate încărcările",
                selectExpiry: "Selectează expirarea",
                optionalAccountBindingFor2: "Asociere opțională a contului pentru încărcările pe GoFile.",
                optionalGofileTokenTo: "Token GoFile opțional pentru a încărca în contul tău.",
                optionalGofileToken: "Token GoFile opțional",
                connectionDetailsForPixelvault: "Detaliile de conectare pentru încărcările pe PixelVault.",
                yourPixelvaultAuthorizationKey: "Cheia ta de autorizare PixelVault.",
                yourPixelvaultUploadKey: "Cheia ta de încărcare PixelVault",
                optionalAccountBindingFor3: "Asociere opțională a contului pentru încărcările pe PixelDrain.",
                optionalPixeldrainApiKey: "Cheie API PixelDrain opțională pentru încărcări autentificate. Lasă gol pentru încărcări anonime.",
                yourPixeldrainApiKey: "Cheia ta API PixelDrain",
                pasteImportOrValidate: "Lipește, importă sau validează o configurație de încărcător personalizat ShareX.",
                pasteYourSharexCustom: "Lipește JSON-ul încărcătorului tău personalizat ShareX (.sxcu/.json). DestinationType trebuie să includă FileUploader sau ImageUploader.",
                importFromFileOr: "Importă din fișier sau validează configurația lipită",
                connectionDetailsForWebdav: "Detaliile de conectare pentru servere WebDAV (Nextcloud, Owncloud etc.).",
                baseWebdavUrlE: "URL WebDAV de bază (ex. https://nextcloud.example.com/remote.php/dav/files/username)",
                optionalSubdirectoryOnThe: "Subdirector opțional pe server pentru încărcare (ex. uploads)",
                leaveEmptyForRoot: "Lasă gol pentru directorul rădăcină",
                selectYourWebdavServer: "Selectează tipul serverului WebDAV. Nextcloud și ownCloud vor crea un link public de partajare. Generic returnează URL-ul brut al fișierului.",
                selectServerType: "Selectează tipul serverului",
                howToReturnThe: "Cum se returnează linkul public de partajare. Pagina de partajare duce la o pagină web; Descărcarea directă duce direct la fișier; Linkul Markdown încadrează pagina într-un nume de fișier pe care se poate face clic.",
                selectShareLinkFormat: "Selectează formatul linkului",
                controlWhatFileuploadDoes: "Controlează ce face FileUpload după ce o gazdă returnează un URL.",
                stripQueryParametersFrom: "Elimină parametrii de interogare din URL-ul fișierului încărcat.",
                wrapUploadedVideoLinks: "Încadrează linkurile video încărcate cu un proxy de înglobare pentru previzualizări mai bune în Discord.",
                chooseWhichEmbedProxy: "Alege ce serviciu proxy de înglobare să fie folosit pentru linkurile video încărcate",
                selectAnEmbedProxy: "Selectează un serviciu proxy de înglobare",
                convertApngFilesTo: "Convertește fișierele APNG în format GIF.",
                useTheOriginalFilename: "Folosește numele original al fișierului în loc să denumești încărcările upload.ext.",
                automaticallyCopyTheUploaded: "Copiază automat URL-ul fișierului încărcat în clipboard.",
                onlyUseTheSelected: "Folosește doar încărcătorul selectat fără a încerca gazde de rezervă.",
                afterUploadInsertThe: "După încărcare, inserează URL-ul rezultat în caseta de chat curentă.",
                wrapInsertedUrlsIn: "Încadrează URL-urile inserate între paranteze unghiulare pentru a evita previzualizarea Discord.",
                chooseWhenFileuploadTakes: "Alege când preia FileUpload gestionarea fișierelor Discord.",
                useFileuploadWhenUploading: "Folosește FileUpload la încărcarea prin selectorul de fișiere Discord.",
                useFileuploadOnlyFor: "Folosește FileUpload doar pentru fișierele mai mari decât limita ta actuală de încărcare Discord.",
                manualDiscordFileSize: "Limită manuală a dimensiunii fișierelor Discord în MB, folosită când detectarea automată greșește. Lasă gol pentru automat.",
                auto: "Automat",
                commaSeparatedListOf: "Listă de extensii separate prin virgule (ex. png,jpg,gif). Lasă gol pentru a le permite pe toate.",
                configureBrowserUploadProxying: "Configurează proxy-ul și timpii limită pentru încărcările din browser.",
                corsProxyUsedFor: "Proxy CORS folosit pentru încărcările web. Lasă gol pentru proxy-ul implicit.",
                sourceCodeForThe: "Codul sursă al proxy-ului CORS implicit",
                maximumTimeToWait: "Timpul maxim de așteptare per încercare de încărcare înainte de a trece la rezervă",
                selectTimeout: "Selectează timpul limită",
                drag: "Trage",
                importSxcuJson: "Importă .sxcu/.json",
                validate: "Validează",
                resetToDefault: "Resetează la implicit",
                progress: "{{percent}}% - {{transferred}} din {{total}}",
                cancel: "Anulează"
            },
            option: {
                serviceType: {
                    description: "Serviciul de încărcare selectat",
                    label: "Tipul serviciului"
                },
                serviceUrl: {
                    description: "URL-ul serviciului Zipline",
                    label: "URL serviciu"
                },
                ziplineToken: {
                    description: "Token de autentificare Zipline",
                    label: "Token Zipline"
                },
                folderId: {
                    description: "ID opțional pentru dosarul Zipline",
                    label: "ID dosar"
                },
                ezHostKey: {
                    description: "Cheie API E-Z Host",
                    label: "Cheie E-Z Host"
                },
                nestToken: {
                    description: "Token API Nest",
                    label: "Token Nest"
                },
                encryptingHostKey: {
                    description: "Cheie API Encrypting.host",
                    label: "Cheie Encrypting.host"
                },
                encryptingHostUrlStyle: {
                    description: "Stil URL Encrypting.host",
                    label: "Stil URL Encrypting.host"
                },
                encryptingHostDomains: {
                    description: "Listă JSON de domenii Encrypting.host",
                    label: "Domenii Encrypting.host"
                },
                encryptingHostTitle: {
                    description: "Titlu opțional pentru înglobarea Encrypting.host",
                    label: "Titlu Encrypting.host"
                },
                encryptingHostColor: {
                    description: "Culoare opțională pentru înglobarea Encrypting.host",
                    label: "Culoare Encrypting.host"
                },
                encryptingHostFakelink: {
                    description: "Link fals opțional Encrypting.host",
                    label: "Link fals Encrypting.host"
                },
                s3Endpoint: {
                    description: "URL endpoint compatibil S3",
                    label: "Endpoint S3"
                },
                s3Bucket: {
                    description: "Numele bucket-ului S3",
                    label: "Bucket S3"
                },
                s3Region: {
                    description: "Regiune S3 (folosește auto pentru R2)",
                    label: "Regiune S3"
                },
                s3AccessKeyId: {
                    description: "ID cheie de acces S3",
                    label: "ID cheie acces S3"
                },
                s3SecretAccessKey: {
                    description: "Cheie de acces secretă S3",
                    label: "Cheie de acces secretă S3"
                },
                s3SessionToken: {
                    description: "Token de sesiune S3 opțional",
                    label: "Token sesiune S3"
                },
                s3PublicUrl: {
                    description: "URL de bază public opțional",
                    label: "URL public S3"
                },
                s3Prefix: {
                    description: "Prefix opțional pentru cheile obiectelor S3",
                    label: "Prefix S3"
                },
                s3ForcePathStyle: {
                    description: "Folosește URL-uri S3 în stil cale",
                    label: "Forțează stilul cale S3"
                },
                litterboxExpiry: {
                    description: "Perioada de păstrare Litterbox",
                    label: "Expirare Litterbox"
                },
                catboxUserhash: {
                    description: "Userhash Catbox pentru asocierea contului",
                    label: "Userhash Catbox"
                },
                sharexConfig: {
                    description: "JSON pentru încărcătorul personalizat ShareX",
                    label: "Configurație ShareX"
                },
                disableFallbacks: {
                    description: "Dezactivează serviciile de încărcare de rezervă",
                    label: "Dezactivează rezervele"
                },
                autoSend: {
                    description: "Inserează URL-ul încărcat în caseta de chat",
                    label: "Trimite automat"
                },
                autoFormat: {
                    description: "Încadrează URL-ul inserat între paranteze unghiulare",
                    label: "Formatare automată"
                },
                bypassDiscordUpload: {
                    description: "Ocolește încărcările Discord și folosește FileUpload în schimb.",
                    label: "Ocolește încărcarea Discord"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "Folosește FileUpload doar dacă fișierele depășesc limita de dimensiune.",
                    label: "Ocolește încărcarea Discord doar peste limită"
                },
                customDiscordFileSizeLimitMB: {
                    description: "Limită manuală a dimensiunii fișierelor Discord în MB. 0 înseamnă detectare automată.",
                    label: "Limită personalizată dimensiune Discord (MB)"
                },
                gofileToken: {
                    description: "Token API GoFile opțional",
                    label: "Token GoFile"
                },
                fallbackOrder: {
                    description: "Ordinea încărcătoarelor de rezervă",
                    label: "Ordine de rezervă"
                },
                pixelVaultKey: {
                    description: "Cheie de încărcare PixelVault",
                    label: "Cheie PixelVault"
                },
                pixelDrainKey: {
                    description: "Cheie API PixelDrain opțională",
                    label: "Cheie PixelDrain"
                },
                uploadTimeoutMs: {
                    description: "Timp limită de încărcare în milisecunde",
                    label: "Timp limită încărcare (ms)"
                },
                stripQueryParams: {
                    description: "Elimină parametrii de interogare din URL-urile încărcate",
                    label: "Elimină parametrii de interogare"
                },
                embedProxyEnabled: {
                    description: "Trimite linkurile video încărcate printr-un serviciu ajutător de înglobare.",
                    label: "Proxy de înglobare activat"
                },
                embedProxyService: {
                    description: "Serviciu ajutător de înglobare care încapsulează linkurile video încărcate.",
                    label: "Serviciu proxy de înglobare"
                },
                corsProxyUrl: {
                    description: "URL proxy CORS folosit pentru încărcările din browser",
                    label: "URL proxy CORS"
                },
                apngToGif: {
                    description: "Convertește încărcările APNG în GIF",
                    label: "APNG în GIF"
                },
                preserveOriginalFilename: {
                    description: "Păstrează numele original al fișierului la încărcare.",
                    label: "Păstrează numele original"
                },
                autoCopy: {
                    description: "Copiază automat URL-ul încărcării",
                    label: "Copiere automată"
                },
                autoUploadPastedFiles: {
                    description: "Încarcă automat fișierele din clipboard pe gazda de imagini când lipești în chat.",
                    label: "Încarcă automat fișierele lipite"
                },
                webdavUrl: {
                    description: "URL server WebDAV",
                    label: "URL WebDAV"
                },
                webdavUsername: {
                    description: "Nume utilizator WebDAV",
                    label: "Utilizator WebDAV"
                },
                webdavPassword: {
                    description: "Parolă WebDAV sau token de aplicație",
                    label: "Parolă WebDAV"
                },
                webdavDirectory: {
                    description: "Subdirector opțional pe serverul WebDAV",
                    label: "Director WebDAV"
                },
                webdavServerType: {
                    description: "Tipul serverului WebDAV",
                    label: "Tip server WebDAV",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "WebDAV generic"
                },
                webdavShareType: {
                    description: "Formatul linkului de partajare WebDAV",
                    label: "Tip partajare WebDAV",
                    sharepage: "Pagină de partajare",
                    directdownload: "Descărcare directă",
                    markdown: "Link Markdown"
                },
                uploadAllowedFileTypes: {
                    description: "Listă separată prin virgule de extensii permise (ex. png,jpg,gif,mp4). Lasă gol pentru a permite toate fișierele.",
                    label: "Tipuri de fișiere permise la încărcare"
                },
                settingsComponent: {
                    description: "Setări",
                    label: "Componentă setări"
                }
            },
            panel: {
                fallbackOrder: "Ordine de rezervă",
                uploadService: "Serviciu de încărcare",
                zipline: "Zipline",
                serviceUrl: "URL serviciu",
                ziplineToken: "Token Zipline",
                folderId: "ID dosar",
                eZHost: "E-Z Host",
                eZHostApiKey: "Cheie API E-Z Host",
                nest: "Nest",
                nestToken: "Token Nest",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Cheie API Encrypting.host",
                urlStyle: "Stil URL",
                domainsJson: "Domenii (JSON)",
                embedTitle: "Titlul înglobării",
                embedColor: "Culoarea înglobării",
                fakeLink: "Link fals",
                s3CompatibleStorage: "Stocare compatibilă S3",
                s3EndpointUrl: "URL endpoint S3",
                bucketName: "Numele bucket-ului",
                region: "Regiune",
                accessKeyId: "ID cheie de acces",
                secretAccessKey: "Cheie de acces secretă",
                sessionToken: "Token de sesiune",
                publicBaseUrl: "URL de bază public",
                objectKeyPrefix: "Prefix cheie obiect",
                usePathStyleEndpoint: "Folosește endpoint în stil cale",
                catbox: "Catbox",
                catboxUserhash: "Userhash Catbox",
                litterboxExpiry: "Expirare Litterbox",
                gofile: "GoFile",
                gofileToken: "Token GoFile",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "Cheie de încărcare PixelVault",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "Cheie API PixelDrain",
                sharexCustomUploader: "Încărcător personalizat ShareX",
                sharexCustomUploaderConfig: "Configurația încărcătorului personalizat ShareX",
                sharexConfigActions: "Acțiuni configurație ShareX",
                webdav: "WebDAV",
                serverUrl: "URL server",
                username: "Nume utilizator",
                passwordOrAppToken: "Parolă sau token de aplicație",
                passwordOrAppToken2: "parolă sau token de aplicație",
                uploadDirectory: "Director de încărcare",
                serverType: "Tip server",
                shareLinkFormat: "Formatul linkului de partajare",
                uploadBehavior: "Comportament de încărcare",
                stripQueryParameters: "Elimină parametrii de interogare",
                useEmbedProxy: "Folosește proxy de înglobare",
                embedProxyService: "Serviciu proxy de înglobare",
                convertApngToGif: "Convertește APNG în GIF",
                preserveOriginalFilename: "Păstrează numele original",
                autoCopyUrl: "Copiază URL-ul automat",
                disableFallbackUploaders: "Dezactivează încărcătoarele de rezervă",
                insertUrlIntoChatInput: "Inserează URL-ul în caseta de chat",
                formatInsertedUrl: "Formatează URL-ul inserat",
                discordIntegration: "Integrare Discord",
                bypassDiscordUploadButton: "Ocolește butonul de încărcare Discord",
                autoUploadPastedFiles: "Încarcă automat fișierele lipite",
                respectDiscordFileSizeLimit: "Respectă limita de dimensiune Discord",
                discordLimitOverrideMb: "Suprascrie limita Discord (MB)",
                allowedFileTypes: "Tipuri de fișiere permise",
                network: "Rețea",
                corsProxyUrl: "URL proxy CORS",
                defaultCorsProxySource: "Sursa proxy-ului CORS implicit",
                uploadTimeout: "Timp limită de încărcare",
                domainsJsonDescription: "Array JSON de domenii de folosit, de exemplu [\"offensive\"]."
            },
            status: {
                cancelled: "Încărcare anulată.",
                uploadingVia: "Se încarcă prin {{service}}...",
                uploading: "Se încarcă...",
                unknownError: "Eroare necunoscută",
                startingVia: "Se pornește încărcarea prin {{service}}...",
                retryingWith: "Se reîncearcă cu {{service}} ({{attempt}}/{{total}})...",
                uploadedVia: "Încărcat cu succes prin {{service}}.",
                allFailed: "Toate serviciile de încărcare au eșuat. Ultima eroare: {{error}}",
                fileReady: "Fișier pregătit, se pornește încărcarea...",
                preparing: "Se pregătește încărcarea...",
                failed: "Încărcarea a eșuat: {{message}}",
                timedOut: "Încărcarea a expirat",
                serviceFailed: "{{service}} a eșuat: {{message}}",
                preparingFile: "Se pregătește {{name}}{{suffix}}..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "Ultima lățime"
                },
                lastHeight: {
                    label: "Ultima înălțime"
                },
                lastCaptionMode: {
                    label: "Ultimul mod de legendă"
                },
                lastCaptionText: {
                    label: "Ultimul text de legendă"
                },
                lastCaptionSize: {
                    label: "Ultima dimensiune a legendei"
                },
                lastFontFamily: {
                    label: "Ultima familie de fonturi"
                },
                lastBubbleTipBase: {
                    label: "Ultima bază a vârfului bulei"
                },
                maxWidth: {
                    description: "Lățimea maximă la potrivirea automată.",
                    label: "Lățime maximă"
                },
                maxHeight: {
                    description: "Înălțimea maximă la potrivirea automată.",
                    label: "Înălțime maximă"
                }
            },
            name: "GifMaker",
            description: "Creează și adaugă legende la GIF-uri din orice media din chat sau din selectorul GIF.",
            text: {
                send: "Trimite",
                export: "Exportă",
                makeGif: "Creează GIF",
                editGif: "Editează GIF",
                selectAFont: "Selectează un font...",
                enterCaption: "Introdu legenda...",
                width: "Lățime",
                height: "Înălțime",
                loadingFonts: "Se încarcă fonturile...",
                captions: "Legende",
                text: "Text",
                font: "Font",
                fontSize: "Dimensiune font",
                tipBase: "Baza vârfului",
                dimensions: "Dimensiuni",
                generatingGif: "Se generează GIF-ul...",
                clickOnThePreview: "Fă clic pe previzualizare pentru a poziționa vârful bulei",
                gifPreview: "Previzualizare GIF"
            },
            captionMode: {
                caption: "Legendă",
                none: "Niciunul",
                speechbubble: "Balon"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "Îți permite să folosești căutarea GIF Tenor sau Giphy în loc de Klipy",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "Furnizori",
                providersCount: "{{count}} furnizori"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "URL nevalid",
                copiedResponseToClipboard: "Răspuns copiat în clipboard!",
                issueFetchingUrl: "Problemă la preluarea URL-ului",
                copiedGitInfoTo: "Informațiile Git au fost copiate în clipboard!",
                noUpdatesAvailable: "Nu sunt actualizări disponibile",
                enabledPlugin: "{{id}} a fost activat",
                disabledPlugin: "{{id}} a fost dezactivat"
            },
            text: {
                openPlexcordTab: "Deschide fila Plexcord",
                openPluginTab: "Deschide fila pluginuri",
                openThemesTab: "Deschide fila teme",
                openUpdaterTab: "Deschide fila actualizator",
                openCloudTab: "Deschide fila cloud",
                openBackupRestoreTab: "Deschide fila Backup și restaurare",
                restartClient: "Repornește clientul",
                openQuickCssFile: "Deschide fișierul QuickCSS",
                openSettingsFolder: "Deschide dosarul setărilor",
                openInGithub: "Deschide pe GitHub",
                openInBrowser: "Deschide în browser",
                togglePlugin: "Comută pluginul",
                enable: "Activează",
                disable: "Dezactivează",
                quickFetch: "Preluare rapidă",
                copyGitInfo: "Copiază informațiile Git",
                checkForUpdates: "Caută actualizări",
                aPlexcordUpdateIs: "Este disponibilă o actualizare Plexcord!",
                clickHereToView: "Fă clic aici pentru a vedea actualizarea",
                navigateToServer: "Navighează la server",
                commandPalette: "Paletă de comenzi",
                searchTheCommandPalette: "Caută în paleta de comenzi",
                multipleChoice: "Alegere multiplă",
                textInput: "Introducere text",
                openDevTab: "Deschide fila dezvoltator",
                enterUrlToFetch: "Introdu URL-ul de preluat (doar GET)",
                typeAndPressEnter: "Scrie și apasă Enter",
                recording: "Se înregistrează...",
                recordKeybind: "Înregistrează scurtătura",
                enterUrl: "Introdu un URL"
            },
            option: {
                hotkey: {
                    description: "Tasta rapidă pentru deschiderea paletei de comenzi.",
                    label: "Tastă rapidă"
                },
                allowMouseControl: {
                    description: "Permite mouse-ului să controleze paleta de comenzi.",
                    label: "Permite controlul cu mouse-ul"
                }
            },
            name: "KeyboardNavigation",
            description: "Îți permite să navighezi în interfață cu tastatura."
        },
        lastActive: {
            name: "LastActive",
            description: "Un plugin pentru a sări la ultimul mesaj activ al tău sau al altui utilizator într-un canal/server.",
            toast: {
                failedToFindMessages: "Nu s-au găsit mesaje. Verifică consola pentru detalii.",
                couldnTFindAny: "Nu s-au găsit mesaje recente de la acest utilizator.",
                channelInformationNotAvailable: "Informațiile canalului nu sunt disponibile.",
                failedToJumpTo: "Nu s-a putut sări la mesaj. Verifică consola pentru detalii."
            },
            text: {
                yourLastMessage: "Ultimul tău mesaj",
                userSLastMessage: "Ultimul mesaj al utilizatorului"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "Șterge eticheta",
                mustBeGreaterThan: "Trebuie să fie >{{value}}",
                maxResolutionTooLow: "Rezoluția maximă nu poate fi mai mică de {{value}}",
                maxResolutionRound: "Rezoluția maximă trebuie să se termine cu 0 dacă Rotunjire rezoluție este activată"
            },
            name: "LimitlessScreenshare",
            description: "Adaugă un glisor pentru rezoluția și fps-ul partajării ecranului.",
            option: {
                maxFPS: {
                    description: "FPS maxim pentru glisor",
                    label: "FPS maxim"
                },
                maxResolution: {
                    description: "Rezoluția maximă pentru glisor",
                    label: "Rezoluție maximă"
                },
                roundResolution: {
                    description: "Rotunjește rezoluția la cel mai apropiat 10p",
                    label: "Rotunjește rezoluția"
                },
                resolutions: {
                    label: "Rezoluții"
                },
                fpss: {
                    label: "Valori FPS"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "Ascunde previzualizările și marcajele temporale pentru mesajele private și grupurile dezactivate.",
                    label: "Ascunde cele dezactivate"
                }
            },
            name: "MessagePeek",
            description: "Afișează previzualizarea și marcajul temporal al ultimului mesaj în lista de mesaje directe.",
            text: {
                officialDiscordMessage: "Mesaj oficial Discord",
                sentGif: "a trimis un GIF",
                voiceMessage: "mesaj vocal",
                membersCount: "{{count}} membri",
                you: "Tu"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "Traduce automat mesajele în limba ta, cu cache, comutatoare per canal și alte opțiuni.",
            option: {
                targetLanguage: {
                    description: "Codul limbii țintă pentru traduceri (ex. en, es, fr, de, ja).",
                    label: "Limba țintă"
                },
                excludedLanguages: {
                    description: "Coduri de limbă excluse de la traducere (ex. en, es, fr, de, ja).",
                    label: "Limbi excluse"
                },
                confidenceRequirement: {
                    description: "Încrederea minimă (0–1) necesară pentru a afișa o traducere.",
                    label: "Încredere necesară"
                },
                autoTranslate: {
                    description: "Traduce automat mesajele pe măsură ce apar.",
                    label: "Traducere automată"
                },
                skipOwnMessages: {
                    description: "Nu traduce propriile mesaje.",
                    label: "Omite mesajele proprii"
                },
                skipBotMessages: {
                    description: "Nu traduce mesajele boților.",
                    label: "Omite mesajele boților"
                },
                ignoredGuilds: {
                    description: "Listă de ID-uri de server separate prin virgule în care nu se traduce.",
                    label: "Servere ignorate"
                },
                ignoredChannels: {
                    description: "Listă de ID-uri de canal separate prin virgule în care nu se traduce.",
                    label: "Canale ignorate"
                },
                ignoredUsers: {
                    description: "Listă de ID-uri de utilizator separate prin virgule care nu se traduc.",
                    label: "Utilizatori ignorați"
                },
                showIndicator: {
                    description: "Adaugă un mic indicator (tradus) la mesajele traduse.",
                    label: "Afișează indicatorul"
                },
                showOriginal: {
                    description: "Afișează textul original și cel tradus.",
                    noorig: "Nu afișa originalul."
                }
            },
            text: {
                showOriginalInSubtext: "Afișează originalul în subtext",
                showOriginalMessageTranslation: "Afișează mesajul original, traducerea în subtext",
                translatedFrom: "tradus din {{lang}}"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "Pachetul de stickere a fost șters",
                stickerPackAdded: "Pachetul de stickere a fost adăugat",
                stickerPacksAdded: "Pachetele de stickere au fost adăugate",
                stickerPacksExported: "Pachetele de stickere au fost exportate",
                newStickerPacksAlready: "Există deja pachete noi de stickere, migrarea nu este necesară",
                oldStickerPacksNot: "Nu s-au găsit pachete vechi de stickere, nimic de migrat",
                migrationFailedTitleId: "Migrarea a eșuat: {{title}} ({{id}})",
                stickerPackMigrationComplete: "Migrarea pachetelor de stickere s-a încheiat",
                failedToUploadSticker: "Nu s-a putut încărca stickerul"
            },
            text: {
                stickerPackUrl: "URL pachet de stickere",
                pasteHtmlHere: "Lipește HTML aici",
                delete: "Șterge",
                addStickerPackFrom: "Adaugă pachet de stickere din URL",
                insert: "Inserează",
                addStickerPackFrom2: "Adaugă pachet de stickere din HTML",
                insertFromHtml: "Inserează din HTML",
                addStickerPackFrom3: "Adaugă pachet de stickere din fișier",
                miscTools: "Instrumente diverse",
                exportStickerPacks: "Exportă pachetele de stickere",
                migrateFromV1: "Migrează din v1",
                stickersManagement: "Gestionarea stickerelor",
                theRegionLineRecognized: "Regiunea recunoscută de LINE poate diferi de cea în care te afli din cauza proxy-ului CORS folosit.",
                openStickerPackFile: "Deschide fișierul pachetului de stickere",
                stickers: "Stickere+",
                categoryTitle: "Categorie, {{title}}",
                searchStickers: "Caută stickere",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext nu este definit",
                recentlyUsed: "Folosite recent",
                addFromUrl: "Adaugă din URL",
                addFromHtml: "Adaugă din HTML",
                addFromFile: "Adaugă din fișier",
                misc: "Diverse",
                invalidUrl: "URL nevalid",
                lineOnly: "Momentan sunt acceptate doar stickerele/emoji-urile LINE.",
                getTelegramStickers: "Obține stickere Telegram cu",
                htmlFallbackHelp: "Dacă întâmpini erori la adăugarea unui pachet de stickere, poți încerca să îl adaugi folosind codul sursă HTML al paginii pachetului.",
                htmlFallbackApplies: "Acest lucru se aplică stickerelor blocate regional / de sistemul de operare / etc."
            },
            option: {
                promptToUpload: {
                    description: "Inserează stickerul în bara de chat în loc să-l trimită imediat",
                    label: "Întreabă înainte de încărcare"
                },
                packs: {
                    description: "Pachete",
                    label: "Pachete"
                }
            },
            name: "MoreStickers",
            description: "Adaugă pachete de stickere de pe alte platforme sociale. (ex. LINE)"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "Backend-ul de scrobbler de folosit.",
                    label: "Backend scrobbler"
                },
                instanceBaseURL: {
                    description: "URL-ul de bază al instanței tale ListenBrainz.",
                    label: "URL de bază al instanței"
                },
                instanceAPIBaseUrl: {
                    description: "URL-ul de bază al API-ului tău ListenBrainz.",
                    label: "URL de bază API al instanței"
                },
                apiKey: {
                    description: "Cheie API Last.fm. Nu este obligatorie, dar este foarte recomandată pentru a evita limitarea ratei cu cheia noastră comună",
                    label: "Cheie API"
                },
                username: {
                    description: "Nume de utilizator",
                    label: "Nume de utilizator"
                },
                shareUsername: {
                    description: "Afișează linkul către profilul scrobbler",
                    label: "Partajează numele de utilizator"
                },
                clickableLinks: {
                    description: "Transformă numele piesei, artistului și albumului în linkuri",
                    label: "Linkuri clicabile"
                },
                hideWithSpotify: {
                    description: "Ascunde prezența dacă rulează Spotify",
                    label: "Ascunde cu Spotify"
                },
                hideWithActivity: {
                    description: "Ascunde prezența dacă ai altă prezență",
                    label: "Ascunde la activitate"
                },
                statusName: {
                    description: "Text de stare personalizat. Poți folosi variabilele: {artist} | {album} | {title}",
                    label: "Numele stării"
                },
                statusDisplayType: {
                    description: "Afișează numele piesei / artistului în lista de membri",
                    off: "Nu afișa (afișează mesajul generic de ascultare)"
                },
                nameFormat: {
                    description: "Afișează numele piesei și al artistului în numele stării",
                    statusName: "Folosește nume de stare personalizat"
                },
                missingArt: {
                    description: "Când lipsește albumul sau coperta",
                    logo: "Folosește logoul mare al scrobblerului"
                },
                showLogo: {
                    description: "Afișează logoul serviciului scrobbler lângă copertă",
                    label: "Afișează logoul scrobblerului"
                },
                showAlbumCover: {
                    description: "Afișează coperta albumului. Dezactivarea va afișa un substituent. Util dacă muzica ta are coperte nepotrivite",
                    label: "Afișează coperta albumului"
                },
                useListeningStatus: {
                    description: "Afișează starea „Ascultă” în loc de „Joacă”"
                }
            },
            name: "MusicRichPresence",
            description: "Rich Presence pentru Last.FM/Listenbrainz",
            text: {
                showArtistName: "Afișează numele artistului",
                showTrackName: "Afișează numele piesei",
                useMusicServiceName: "Folosește numele serviciului de muzică (revine la textul de stare personalizat)",
                useFormatArtistSong: "Folosește formatul „artist - piesă”",
                useFormatSongArtist: "Folosește formatul „piesă - artist”",
                useArtistNameOnly: "Folosește doar numele artistului",
                useSongNameOnly: "Folosește doar numele piesei",
                useAlbumNameFalls: "Folosește numele albumului (revine la textul de stare personalizat dacă piesa nu are album)",
                useGenericPlaceholder: "Folosește un substituent generic",
                lastFm: "Last.FM",
                howToCreateAn: "Cum creezi o cheie API",
                set: "Setează",
                applicationName: "Numele aplicației",
                applicationDescription: "Descrierea aplicației",
                toAnythingAndLeave: "la orice valoare și lasă restul gol.",
                createApiKey: "Creează cheie API",
                invalidInstance: "Instanță compatibilă ListenBrainz nevalidă",
                provideBoth: "Furnizează atât",
                apiBaseUrl: "URL de bază API",
                andThe: "cât și",
                instanceBaseUrl: "URL-ul de bază al instanței",
                forYourCustomInstance: "pentru instanța ta ListenBrainz personalizată sau revino la ListenBrainz/Last.FM",
                allowConnectTitle: "Permite Plexcord să se conecteze la instanța ListenBrainz",
                allowConnectBody: "Pentru a folosi instanța ta ListenBrainz personalizată, trebuie mai întâi să permiți Plexcord să se conecteze la ea.",
                allowInstance: "Permite instanța",
                listenBrainzCompatible: "Compatibil ListenBrainz (găzduit propriu)",
                and: "și"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "Dezactivează lipirea cu clic mijlociu în Linux - doar Linux"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "Portul la care să se conecteze",
                    label: "Port"
                }
            },
            name: "OrbolayBridge",
            description: "Plugin punte pentru conectarea Orbolay la Discord",
            toast: {
                connectedToOrbolayServer: "Conectat la serverul Orbolay"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "Folosit pentru a oferi asistență și a remedia blocările cauzate de Discord.",
            text: {
                restartRequired: "Repornire necesară",
                restartNow: "Repornește acum",
                later: "Mai târziu",
                wouldYouLikeTo: "Vrei să repornești acum?",
                somePluginsRequireA: "Unele pluginuri necesită o repornire pentru a fi dezactivate complet.",
                alreadyEnabled: "{{plugin}} este deja activat",
                alreadyDisabled: "{{plugin}} este deja dezactivat",
                disablePlugin: "Dezactivează {{plugin}}",
                enablePlugin: "Activează {{plugin}}",
                errorStopping: "Eroare la oprirea pluginului {{plugin}}",
                errorStarting: "Eroare la pornirea pluginului {{plugin}}"
            },
            toast: {
                failedToTolowercase: "Nu s-a putut {{toLowerCase}}",
                aRestartIsRequired: "Este necesară o repornire pentru ca modificarea să aibă efect!"
            },
            card: {
                notOnThisVersion: "Acest plugin nu există în această versiune de Plexcord. Încearcă să actualizezi!"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "Elimină secțiunea de activitate de deasupra listei de membri",
                    label: "Elimină secțiunea de activitate"
                },
                showYourOwnActivityButtons: {
                    description: "Discord ascunde dintr-un motiv butoanele propriei activități",
                    label: "Afișează butoanele propriei activități"
                },
                refreshSlashCommands: {
                    description: "Reîmprospătează comenzile slash pentru a afișa comenzile noi fără a reporni clientul.",
                    label: "Reîmprospătează comenzile slash"
                },
                forceRoleIcon: {
                    description: "Forțează afișarea pictogramelor de rol lângă mesaje în modul compact",
                    label: "Forțează pictograma rolului"
                },
                accountStandingButton: {
                    description: "Afișează un buton pentru starea contului în bara de antet",
                    label: "Buton stare cont"
                },
                jsonGateway: {
                    description: "Forțează JSON la reconectarea la gateway",
                    label: "Gateway JSON"
                },
                enableAutoCorrect: {
                    description: "Adaugă în meniul contextual al casetei de chat un comutator pentru corectarea automată nativă și înlocuirile de text",
                    label: "Activează corectarea automată"
                },
                autoCorrect: {
                    description: "Folosește corectarea automată nativă și înlocuirile de text în editoarele de mesaje",
                    label: "Corectare automată"
                },
                disableHolidayNotifications: {
                    label: "Dezactivează notificările de sărbători",
                    description: "Folosește mereu sunetele de notificare implicite ale Discord"
                },
                showAllBadges: {
                    label: "Afișează toate insignele",
                    description: "Afișează toate insignele profilului în loc să le restrângă pe celelalte în +n"
                }
            },
            text: {
                allGood: "Totul e în regulă!",
                limited: "Limitat",
                veryLimited: "Foarte limitat",
                atRisk: "În pericol",
                suspended: "Suspendat",
                slashCommandsRefreshedSuccessfully: "Comenzile slash au fost reîmprospătate.",
                failedToRefreshCommands: "Nu s-au putut reîmprospăta comenzile. Verifică consola pentru detalii.",
                enableAutocorrect: "Activează corectarea automată"
            },
            command: {
                refreshCommands: "Reîmprospătează comenzile slash"
            },
            description: "O colecție de mici ajustări și remedieri pentru Discord."
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "Deblochează opțiunile de calitate a streamului indiferent de starea Nitro",
                    label: "Deblochează opțiunile de calitate"
                },
                removeResolutionCap: {
                    description: "Permite rezoluții peste 720p la 60 fps",
                    label: "Elimină limita de rezoluție"
                },
                forceEncoderSettings: {
                    description: "Forțează encoderul să folosească rezoluția/fps-ul configurat",
                    label: "Forțează setările encoderului"
                },
                preventDownscale: {
                    description: "Împiedică Discord să micșoreze rezoluția streamului",
                    label: "Împiedică micșorarea"
                },
                keyframeInterval: {
                    description: "Interval keyframe în ms (0 = implicit encoder, 5000 = la fiecare 5 s)",
                    label: "Interval keyframe"
                },
                minBitrate: {
                    description: "Bitrate minim al encoderului în kbps",
                    label: "Bitrate minim"
                },
                raiseBitrateCaps: {
                    description: "Crește limitele implicite de bitrate pe desktop (țintă 600 kbps → 10 Mbps, max 3,5 Mbps → 40 Mbps)",
                    label: "Crește limitele de bitrate"
                },
                preventFramerateReduction: {
                    description: "Împiedică Discord să reducă framerate-ul streamului când nu vorbești",
                    label: "Împiedică reducerea framerate-ului"
                },
                bitsPerPixelPct: {
                    description: "Procent biți pe pixel pentru bitrate-ul țintă (8 = 0,08 bpp, 12 = 0,12 bpp)",
                    label: "Biți pe pixel (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "Încearcă să repare calitatea streamului în Plextron modificând encoderul și restricțiile de calitate ale Discord."
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "Afișează ora fiecărei reacții în fereastra reacțiilor.",
            text: {
                userAtTime: "{{user}} la {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "Folosește nume de stare personalizat",
                useFormatArtistSong: "Folosește formatul „artist - piesă”",
                useFormatSongArtist: "Folosește formatul „piesă - artist”",
                useArtistNameOnly: "Folosește doar numele artistului",
                useSongNameOnly: "Folosește doar numele piesei",
                useAlbumName: "Folosește numele albumului",
                useLargeStatsFm: "Folosește logoul mare Stats.fm",
                useGenericPlaceholder: "Folosește un substituent generic",
                seriesMovieName: "Nume serial/film",
                seriesEpisodeTrackMovie: "Serial - nume episod/piesă/film",
                custom: "Personalizat",
                seriesCover: "Copertă serial",
                episodeCover: "Copertă episod",
                season1Episode1: "Sezonul 1 episodul 1",
                off: "Dezactivat",
                listening: "Ascultă",
                playing: "Joacă",
                streaming: "Transmite",
                watching: "Urmărește",
                none: "Niciunul",
                navidromeInstanceExposesServer: "Instanță Navidrome (expune URL-ul serverului. Autentificare unică trimisă.)",
                lastFmApiSends: "API Last.fm (trimite metadate către last.fm)",
                donTShowShows: "Nu afișa (afișează mesajul generic de ascultare)",
                showStateLineContent: "Afișează conținutul liniei de stare",
                showDetailsLineContent: "Afișează conținutul liniei de detalii",
                displayYourCurrentlyPlaying: "Afișează audiobook-urile pe care le asculți ca Rich Presence Discord. Necesită URL-ul, numele de utilizator și parola serverului AudioBookShelf.",
                audiobookshelfServerUrl: "URL-ul serverului AudioBookShelf.",
                audiobookshelfUsername: "Numele de utilizator AudioBookShelf.",
                audiobookshelfPassword: "Parola AudioBookShelf.",
                connectsToTosuVia: "Se conectează la tosu prin WebSocket pe portul 24050. Nu necesită configurare, asigură-te doar că tosu rulează alături de osu!.",
                showWhatYouRe: "Arată ce asculți prin stats.fm. Istoricul de ascultare trebuie să fie public.",
                statsFmUsername: "Numele de utilizator Stats.fm.",
                customStatusText: "Text de stare personalizat.",
                statsFm: "Stats.fm",
                nameFormat: "Formatul numelui.",
                fallbackWhenArtIs: "Rezervă când lipsește coperta.",
                showListeningStatus: "Afișează starea de ascultare.",
                showStatsFmLogo: "Afișează logoul Stats.fm lângă copertă.",
                showLinkToStats: "Afișează linkul către profilul stats.fm.",
                showLinkToSong: "Afișează linkul către piesă pe stats.fm.",
                hideStatsFmPresence: "Ascunde prezența stats.fm dacă rulează Spotify.",
                hideStatsFmPresence2: "Ascunde prezența stats.fm dacă rulează un RPC extern.",
                disableDownloadingAlbumArt: "Dezactivează descărcarea copertelor.",
                showWhatYouRe2: "Arată ce redai pe Jellyfin. Pentru a obține cheia API: deschide interfața web Jellyfin, apasă F12 pentru instrumentele de dezvoltare, mergi la fila Rețea, caută cererile către server, găsește antetul Authorization (Ctrl+F pentru căutare) și ai nevoie de partea din Token='this'. ID-ul tău de utilizator se află în URL-ul paginii de profil.",
                jellyfinServerUrl: "URL-ul serverului Jellyfin.",
                jellyfinApiKey: "Cheie API Jellyfin.",
                authorization: "Authorization",
                jellyfinUserId: "ID utilizator Jellyfin.",
                userIdFromProfile: "ID utilizator din URL-ul profilului",
                nameDisplayFormat: "Formatul de afișare a numelui.",
                customNameTemplate: "Șablon de nume personalizat.",
                nameOnJellyfin: "{name} pe Jellyfin",
                coverTypeForTv: "Tipul copertei pentru seriale TV.",
                episodeNumberFormat: "Formatul numărului episodului.",
                overrideRichPresenceType: "Suprascrie tipul Rich Presence.",
                showEpisodeNameAfter: "Afișează numele episodului după informațiile sezon/episod.",
                showPresenceWhenMedia: "Afișează prezența când media este pe pauză.",
                hideMediaDetails: "Ascunde detaliile media.",
                discordRichPresenceFor: "Rich Presence Discord pentru Gensokyo Radio. Activează și ascultă!",
                refreshIntervalInSeconds: "Interval de reîmprospătare în secunde.",
                showWhatYouRe3: "Arată ce asculți prin Navidrome.",
                navidromeServerUrlMust: "URL-ul serverului Navidrome (trebuie să fie un domeniu public, ex. https://navidrome.example.com).",
                navidromeUsername: "Numele de utilizator Navidrome.",
                navidromePassword: "Parola Navidrome.",
                optionalDiscordApplicationClient: "ID client opțional al aplicației Discord.",
                howToFetchAlbum: "Cum se preiau copertele albumelor.",
                optionalProvideYourOwn: "Opțional: furnizează propria cheie API Last.fm (rămâne implicită dacă e goală).",
                showNavidromeLogoIn: "Afișează logoul Navidrome în dreapta jos a copertei.",
                showAlbumNameIn: "Afișează numele albumului în prezență.",
                whichTypeOfActivity: "Ce tip de activitate să fie afișat.",
                showTheStateDetails: "Afișează conținutul liniei de stare / detalii în lista de membri",
                hideRichPresenceWhen: "Ascunde Rich Presence când muzica e pe pauză (în loc să afișeze un cronometru)",
                theListeningToText: "Textul „Ascultă” (ex. {artist})",
                navidrome: "Navidrome",
                theMainLineShowing: "Linia principală care arată piesa redată (ex. {song})",
                song: "{song}",
                theLineBelowThe: "Linia de sub numele piesei (ex. {artist})",
                artist: "{artist}",
                theAlbumLineE: "Linia albumului (ex. {album})",
                album: "{album}",
                enableTabLabelsCurrenttab: "Activează prezența {{TAB_LABELS_currentTab}}.",
                statsFmProfile: "Profil Stats.fm",
                viewSong: "Vezi piesa",
                showArtistName: "Afișează numele artistului",
                showTrackName: "Afișează numele piesei",
                enterValue: "Introdu o valoare"
            },
            name: "RichPresence",
            description: "Hub unificat de Rich Presence pentru AudioBookShelf, osu!, stats.fm, Jellyfin, Navidrome și Gensokyo Radio.",
            toast: {
                audiobookshelfRpcIsNot: "RPC AudioBookShelf nu este configurat.",
                jellyfinRpcIsNot: "RPC Jellyfin nu este configurat.",
                jellyfinReturnedAnInvalid: "Jellyfin a returnat un răspuns nevalid. Cheia API poate fi greșită."
            },
            option: {
                enabled: {
                    description: "Activează serviciile Rich Presence.",
                    label: "Activat"
                },
                serviceSettings: {
                    description: "Configurația serviciului.",
                    label: "Setările serviciului"
                },
                abs_enabled: {
                    description: "Activează prezența AudioBookShelf.",
                    label: "AudioBookShelf activat"
                },
                tosu_enabled: {
                    description: "Activează prezența osu! (tosu).",
                    label: "osu! (tosu) activat"
                },
                sfm_enabled: {
                    description: "Activează prezența stats.fm.",
                    label: "Stats.fm activat"
                },
                jf_enabled: {
                    description: "Activează prezența Jellyfin.",
                    label: "Jellyfin activat"
                },
                gr_enabled: {
                    description: "Activează prezența Gensokyo Radio.",
                    label: "Gensokyo Radio activat"
                },
                nd_enabled: {
                    description: "Activează prezența Navidrome.",
                    label: "Navidrome activat"
                },
                abs_serverUrl: {
                    description: "URL-ul serverului AudioBookShelf.",
                    label: "URL server AudioBookShelf"
                },
                abs_username: {
                    description: "Numele de utilizator AudioBookShelf.",
                    label: "Utilizator AudioBookShelf"
                },
                abs_password: {
                    description: "Parola AudioBookShelf.",
                    label: "Parolă AudioBookShelf"
                },
                sfm_username: {
                    description: "Numele de utilizator Stats.fm.",
                    label: "Utilizator Stats.fm"
                },
                sfm_shareUsername: {
                    description: "Afișează linkul către profilul stats.fm.",
                    label: "Stats.fm: partajează utilizatorul"
                },
                sfm_shareSong: {
                    description: "Afișează linkul către piesă pe stats.fm.",
                    label: "Stats.fm: partajează piesa"
                },
                sfm_hideWithSpotify: {
                    description: "Ascunde prezența stats.fm dacă rulează Spotify.",
                    label: "Stats.fm: ascunde cu Spotify"
                },
                sfm_hideWithExternalRPC: {
                    description: "Ascunde prezența stats.fm dacă rulează un RPC extern.",
                    label: "Stats.fm: ascunde la RPC extern"
                },
                sfm_statusName: {
                    description: "Text de stare personalizat.",
                    label: "Stats.fm: numele stării"
                },
                sfm_nameFormat: {
                    description: "Formatul numelui.",
                    label: "Stats.fm: formatul numelui",
                    statusName: "Folosește nume de stare personalizat",
                    artistFirst: "Folosește formatul „artist - piesă”",
                    songFirst: "Folosește formatul „piesă - artist”",
                    artistOnly: "Folosește doar numele artistului",
                    songOnly: "Folosește doar numele piesei",
                    albumName: "Folosește numele albumului"
                },
                sfm_useListeningStatus: {
                    description: "Afișează starea de ascultare.",
                    label: "Stats.fm: folosește starea de ascultare"
                },
                sfm_missingArt: {
                    description: "Rezervă când lipsește coperta.",
                    label: "Stats.fm: copertă lipsă",
                    statsFmLogo: "Folosește logoul mare Stats.fm",
                    placeholder: "Folosește un substituent generic"
                },
                sfm_showLogo: {
                    description: "Afișează logoul Stats.fm lângă copertă.",
                    label: "Stats.fm: afișează logoul"
                },
                sfm_alwaysHideArt: {
                    description: "Dezactivează descărcarea copertelor.",
                    label: "Stats.fm: ascunde mereu coperta"
                },
                jf_serverUrl: {
                    description: "URL-ul serverului Jellyfin.",
                    label: "URL server Jellyfin"
                },
                jf_apiKey: {
                    description: "Cheie API Jellyfin.",
                    label: "Cheie API Jellyfin"
                },
                jf_userId: {
                    description: "ID utilizator Jellyfin.",
                    label: "ID utilizator Jellyfin"
                },
                jf_nameDisplay: {
                    description: "Formatul de afișare a numelui.",
                    label: "Jellyfin: afișarea numelui",
                    default: "Nume serial/film",
                    full: "Serial - nume episod/piesă/film",
                    custom: "Personalizat"
                },
                jf_customName: {
                    description: "Șablon de nume personalizat.",
                    label: "Jellyfin: nume personalizat"
                },
                jf_coverType: {
                    description: "Tipul copertei pentru seriale TV.",
                    label: "Jellyfin: tipul copertei",
                    series: "Copertă serial",
                    episode: "Copertă episod"
                },
                jf_episodeFormat: {
                    description: "Formatul numărului episodului.",
                    label: "Jellyfin: formatul episodului",
                    long: "S01E01",
                    fulltext: "Sezonul 1 episodul 1"
                },
                jf_showEpisodeName: {
                    description: "Afișează numele episodului după informațiile sezon/episod.",
                    label: "Jellyfin: afișează numele episodului"
                },
                jf_overrideType: {
                    description: "Suprascrie tipul Rich Presence.",
                    label: "Jellyfin: suprascrie tipul",
                    off: "Dezactivat",
                    listening: "Ascultă",
                    playing: "Joacă",
                    streaming: "Transmite",
                    watching: "Urmărește"
                },
                jf_showPausedState: {
                    description: "Afișează prezența când media este pe pauză.",
                    label: "Jellyfin: afișează starea de pauză"
                },
                jf_privacyMode: {
                    description: "Ascunde detaliile media.",
                    label: "Jellyfin: mod confidențialitate"
                },
                gr_refreshInterval: {
                    description: "Interval de reîmprospătare în secunde.",
                    label: "Gensokyo Radio: interval de reîmprospătare"
                },
                nd_serverUrl: {
                    description: "URL-ul serverului Navidrome (ex. https://navidrome.example.com)",
                    label: "URL server Navidrome"
                },
                nd_username: {
                    description: "Numele de utilizator Navidrome",
                    label: "Utilizator Navidrome"
                },
                nd_password: {
                    description: "Parola Navidrome",
                    label: "Parolă Navidrome"
                },
                nd_clientId: {
                    description: "ID client opțional al aplicației Discord",
                    label: "Navidrome: ID client"
                },
                nd_showSmallImage: {
                    description: "Afișează logoul Navidrome în dreapta jos a copertei.",
                    label: "Navidrome: afișează imaginea mică"
                },
                nd_showAlbum: {
                    description: "Afișează numele albumului în prezență.",
                    label: "Navidrome: afișează albumul"
                },
                nd_albumArtMode: {
                    description: "Cum se preiau copertele albumelor.",
                    label: "Navidrome: modul copertei",
                    none: "Niciunul",
                    instance: "Instanță Navidrome (expune URL-ul serverului către Discord, fără autentificare)",
                    lastfm: "API Last.fm (trimite metadatele piesei către Last.fm)"
                },
                nd_lastfmApiKey: {
                    description: "Cheie API Last.fm opțională",
                    label: "Navidrome: cheie API Last.fm"
                },
                nd_refreshInterval: {
                    description: "Interval de reîmprospătare în secunde.",
                    label: "Navidrome: interval de reîmprospătare"
                },
                nd_activityType: {
                    description: "Ce tip de activitate",
                    label: "Navidrome: tipul activității",
                    listening: "Ascultă",
                    playingFixesHiddenLines: "Joacă (repară liniile ascunse)",
                    watching: "Urmărește"
                },
                nd_nameString: {
                    description: "Șir de format pentru numele activității",
                    label: "Navidrome: șirul numelui"
                },
                nd_detailsString: {
                    description: "Șir de format pentru detaliile activității",
                    label: "Navidrome: șirul detaliilor"
                },
                nd_stateString: {
                    description: "Șir de format pentru starea activității",
                    label: "Navidrome: șirul stării"
                },
                nd_largeTextString: {
                    description: "Șir de format pentru textul mare al activității",
                    label: "Navidrome: șirul textului mare"
                },
                nd_statusDisplayType: {
                    description: "Afișează numele piesei / artistului în lista de membri",
                    off: "Nu afișa (afișează mesajul generic de ascultare)"
                },
                nd_hideOnPause: {
                    description: "Ascunde Rich Presence când muzica e pe pauză",
                    label: "Navidrome: ascunde la pauză"
                }
            },
            panel: {
                password: "Parolă",
                statsFmUsername: "utilizator stats.fm",
                customStatusText: "Text de stare personalizat",
                nameFormat: "Format nume",
                missingArtFallback: "Rezervă la copertă lipsă",
                showListeningStatus: "Afișează starea de ascultare",
                showStatsFmLogo: "Afișează logoul Stats.fm",
                showProfileLink: "Afișează linkul profilului",
                showSongLink: "Afișează linkul piesei",
                hideWithSpotify: "Ascunde cu Spotify",
                hideWithExternalRpc: "Ascunde la RPC extern",
                disableAlbumArt: "Dezactivează copertele",
                apiKey: "Cheie API",
                userId: "ID Utilizator",
                nameDisplay: "Afișarea numelui",
                customNameTemplate: "Șablon de nume personalizat",
                coverType: "Tipul copertei",
                episodeFormat: "Formatul episodului",
                overridePresenceType: "Suprascrie tipul prezenței",
                showEpisodeName: "Afișează numele episodului",
                showWhenPaused: "Afișează la pauză",
                privacyMode: "Mod confidențialitate",
                refreshInterval: "Interval de reîmprospătare",
                clientId: "ID client",
                albumArtMode: "Modul copertei",
                lastFmApiKey: "Cheie API Last.fm",
                showSmallImage: "Afișează imaginea mică",
                showAlbum: "Afișează albumul",
                activityType: "Tipul activității",
                statusDisplayType: "Tip afișare stare",
                hideOnPause: "Ascunde la pauză",
                activityNameFormat: "Formatul numelui activității",
                detailsFormat: "Formatul detaliilor",
                stateFormat: "Formatul stării",
                largeTextFormat: "Formatul textului mare",
                enabled: "Activat"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "Inversează indicatorul `r`: folosirea lui activează modul fără regex, iar omiterea folosește modul regex.",
                    label: "Regex implicit"
                }
            },
            name: "SedEnhanced",
            description: "Extinde suportul rudimentar pentru `sed` al Discord."
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "Dacă să se afișeze cel mai înalt rol la boți.",
                    label: "Afișează boții"
                },
                useRoleColor: {
                    description: "Folosește culoarea rolului pentru pictogramă.",
                    label: "Folosește culoarea rolului"
                }
            },
            name: "ShowRolesInChat",
            description: "Afișează cel mai înalt rol al unui utilizator lângă numele său în mesaje. Ascunde/afișează roluri anume din meniul contextual (clic dreapta).",
            text: {
                chatRoleActions: "Acțiuni rol în chat",
                unhideRolesInChat: "Reafișează rolurile în chat",
                showRoleInChat: "Afișează rolul în chat",
                hideRoleInChat: "Ascunde rolul în chat"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "ID-uri de utilizator Discord separate prin virgule pentru a dezactiva ping-urile și insignele serverului.",
                    label: "ID-uri utilizatori dezactivați"
                }
            },
            name: "SilenceUsers",
            description: "Dezactivează ping-urile @mențiune și contoarele insignelor de server de la anumiți utilizatori. Mesajele obișnuite și cele private nu sunt afectate."
        },
        songLink: {
            text: {
                showIfAvailable: "Afișează dacă e disponibil",
                openInDesktopApp: "Deschide în aplicația desktop",
                loadingSongLink: "Se încarcă linkul piesei...",
                pleaseProvideAMusic: "Furnizează un link de muzică.",
                thisWillTakeA: "Va dura un moment...",
                noAlternativePlatformsFound: "Nu s-au găsit platforme alternative pentru acest link.",
                failedToResolveMusic: "Nu s-a putut rezolva linkul de muzică",
                logo: "Sigla {{name}}"
            },
            option: {
                servicesSettings: {
                    description: "setări pentru servicii",
                    label: "Setări servicii"
                },
                userCountry: {
                    description: "Țara folosită pentru căutare (cod de țară din două litere)",
                    label: "Țara utilizatorului"
                },
                includeMetadata: {
                    description: "Include titlul piesei și numele artistului ca antet.",
                    label: "Include metadatele"
                }
            },
            name: "SongLink",
            description: "Adaugă butoane pentru servicii de streaming sub linkurile pieselor",
            command: {
                musiclink: "Convertește un link de muzică pentru alte platforme de streaming.",
                url: "Link de muzică (Spotify, Deezer, YouTube, Tidal, Apple Music, SoundCloud)"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "Arată piese pe profilul tău",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "Explicit",
                addSong: "Adaugă piesă",
                addANewSong: "Adaugă o piesă nouă",
                copyLink: "Copiază linkul",
                removeSong: "Elimină piesa",
                failedToLoad: "Încărcarea a eșuat!",
                areYouSure: "Ești sigur?",
                thisWillOverwriteYour: "Aceasta va suprascrie piesele tale actuale.",
                continue: "Continuă",
                nevermind: "Las-o baltă",
                thisWillPermanentlyDelete: "Aceasta va șterge definitiv toate piesele tale.",
                delete: "Șterge",
                signInToSong: "Conectează-te la Song Spotlight",
                songs: "Piese",
                authorization: "Authorization",
                importFromClipboard: "Importă din clipboard",
                copyToClipboard: "Copiază în clipboard",
                signOut: "Deconectare",
                deleteSongs: "Șterge piesele",
                more: "Mai mult",
                editSongs: "Editează piesele",
                copyJson: "Copiază JSON",
                looksLikeThereS: "Se pare că aici nu e nimic!",
                uhOhSongSpotlight: "Hopa! Song Spotlight nu s-a putut încărca. Verifică consola pentru mai multe detalii.",
                stealSong: "Fură piesa",
                profileSongs: "Piesele profilului",
                notEnoughSpace: "Spațiu insuficient",
                alreadyAdded: "Ai adăugat deja această melodie",
                invalidLink: "Link nevalid",
                failedToParseLink: "Nu s-a putut analiza linkul",
                invalidUrl: "URL nevalid",
                goAddSongs: "Ei? Ce mai aștepți? Adaugă câteva melodii în Song Spotlight-ul tău!",
                tellUserToAddSongs: "Spune-i lui {{name}} să adauge câteva melodii în Song Spotlight!",
                supportedServices: "Song Spotlight acceptă aceste servicii:",
                viewSongsVia: "Îți poți vedea melodiile și prin comanda",
                viewSongsViaSuffix: "!",
                coverTooltipOwner: "{{sublabel}} - {{label}}",
                coverTooltipBy: "{{label}} de {{sublabel}}",
                lastUpdated: "Ultima actualizare",
                save: "Salvează",
                showMore: "Arată încă {{count}}"
            },
            toast: {
                youHaveBeenSigned: "Ai fost deconectat de la Song Spotlight. Conectează-te din nou.",
                songSpotlightError: "Song Spotlight: {{error}}",
                successfullyAuthorized: "Autorizare reușită!",
                failedToPlaySong: "Nu s-a putut reda previzualizarea piesei!",
                addedSong: "Piesă adăugată!",
                removedSong: "Piesă eliminată!",
                noJsonInClipboard: "Nu există JSON în clipboard!",
                invalidSongSpotlightData: "Date Song Spotlight nevalide în clipboard!",
                oneOrMoreImported: "Una sau mai multe piese importate erau nevalide.",
                importedSongsFromClipboard: "Piese importate din clipboard!",
                successfullySavedSongs: "Piesele au fost salvate!",
                successfullySignedOut: "Deconectare reușită!",
                successfullyDeletedSongs: "Piesele au fost șterse!",
                youDonTHave: "Nu ai suficient spațiu!",
                uhOhThisSong: "Hopa, această piesă nu există!",
                youAlreadyHaveThis: "Ai adăugat deja această piesă!",
                youDonTHave2: "Tu... nu ai adăugat această piesă?",
                fetchError: "Eroare Song Spotlight la preluarea {{path}}"
            },
            option: {
                collapseSongList: {
                    description: "Restrânge lista de piese din profiluri într-un buton care deschide un meniu separat",
                    label: "Restrânge lista de piese"
                },
                profileSongsLimit: {
                    description: "Câte piese se afișează la primul clic pe un utilizator",
                    label: "Limita pieselor din profil"
                },
                previewVolume: {
                    description: "Volumul previzualizărilor pieselor",
                    label: "Volum previzualizare"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "Împiedică Discord să schimbe automat setarea de notificări a unui canal la „Toate mesajele”"
        },
        themeLibrary: {
            text: {
                enablePlugin: "Activează pluginul",
                cancel: "Anulează",
                holdOn: "Stai puțin!",
                thisThemeRequiresThe: "Această temă necesită",
                pluginToWorkProperly: "pluginul pentru a funcționa corect!",
                doYouWantTo: "Vrei să-l activezi?",
                themeInfo: "Informații temă",
                viewSource: "Vezi sursa",
                close: "Închide",
                download: "Descarcă",
                overwrite: "Suprascrie",
                keepMyFile: "Păstrează fișierul meu",
                copyToClipboard: "Copiază în clipboard",
                conflict: "Conflict!",
                themeSource: "Sursa temei",
                aThemeWithThe: "O temă cu același nume",
                alreadyExists: "există deja",
                inYourThemesDirectory: "în dosarul de teme! Vrei să o suprascrii?",
                version: "Versiune",
                likes: "Aprecieri",
                donate: "Donează",
                supportServer: "Server de asistență",
                source: "Sursă",
                tags: "Etichete",
                youCanSupportThe: "Poți susține autorul donând mai jos!",
                joinDiscordServer: "Alătură-te serverului Discord",
                viewThemeSource: "Vezi sursa temei",
                showAll: "Afișează tot",
                showThemes: "Afișează temele",
                showSnippets: "Afișează fragmentele",
                showMostLiked: "Afișează cele mai apreciate",
                showDark: "Afișează cele întunecate",
                showLight: "Afișează cele luminoase",
                showEnabled: "Afișează cele activate",
                showDisabled: "Afișează cele dezactivate",
                searchForATheme: "Caută o temă...",
                gettingTheLatestThemes: "Se preiau cele mai noi teme...",
                thisWonTTake: "Nu va dura mult!",
                failedToFetchThemes: "Nu s-au putut prelua temele",
                couldNotFetchThe: "Nu s-a putut prelua lista de teme. Încearcă mai târziu.",
                wantYourThemeRemoved: "Vrei ca tema ta să fie eliminată?",
                hide: "Ascunde",
                noThemeFound: "Nu s-a găsit nicio temă.",
                tryNarrowingYourSearch: "Încearcă să restrângi căutarea.",
                themeLibrary: "Bibliotecă de teme",
                successfullyAuthorizedWithThemelibrary: "Autorizare reușită cu ThemeLibrary!",
                failedToAuthorizeCheck: "Autorizarea a eșuat, verifică consola",
                successfullyDeauthorizedFromThemelibrary: "Autorizarea ThemeLibrary a fost revocată!",
                failedToDeauthorizeCheck: "Revocarea autorizării a eșuat, verifică consola",
                themelibraryAuth: "Autentificare ThemeLibrary",
                themeRemoval: "Eliminarea temei",
                allThemeAuthorsAre: "Toți autorii temelor sunt creditați în informațiile temei și nicio sursă nu a fost modificată. Dacă tot vrei ca tema să fie eliminată, deschide un issue făcând clic mai jos.",
                authorizeWithThemelibrary: "Autorizează cu ThemeLibrary",
                copyThemelibraryToken: "Copiază token-ul ThemeLibrary",
                deauthorizeThemelibrary: "Revocă autorizarea ThemeLibrary",
                themeDetails: "Detalii {{name}}",
                mostLiked: "Cele mai apreciate",
                newestAdditions: "Cele mai noi adăugiri",
                removeTheme: "Elimină tema",
                addTheme: "Adaugă tema",
                authors: "Autori",
                author: "Autor",
                nobodyLikedTheme: "Nimeni nu a apreciat încă această temă.",
                nobodyLikedSnippet: "Nimeni nu a apreciat încă acest fragment.",
                usersLikedTheme: "{{likes}} utilizatori au apreciat această temă!",
                usersLikedSnippet: "{{likes}} utilizatori au apreciat acest fragment!",
                openThemeLibrary: "Deschide biblioteca de teme",
                lastUpdated: "Această temă a fost actualizată ultima dată la",
                removalInfo: "Dacă vrei ca temele tale să fie eliminate definitiv, deschide un issue pe",
                themes: "Teme",
                requestRemoval: "Solicită eliminarea temei",
                pluginSuffix: "plugin!"
            },
            toast: {
                downloadedName: "{{name}} a fost descărcat!",
                failedToDownloadName: "Nu s-a putut descărca {{name}}! (verifică consola)",
                invalidOrExpiredInvite: "Invitație nevalidă sau expirată!",
                copiedToClipboard: "Copiat în clipboard",
                noUniquetokenPresentTry: "Nu există uniqueToken, încearcă mai întâi autorizarea!",
                noTokenToCopy: "Nu există token de copiat, încearcă mai întâi autorizarea!",
                copiedToClipboard2: "Copiat în clipboard!"
            },
            name: "ThemeLibrary",
            description: "O bibliotecă de teme pentru Plexcord.",
            option: {
                hideWarningCard: {
                    description: "Ascunde cardul de avertizare din partea de sus a filei bibliotecii de teme",
                    label: "Ascunde cardul de avertizare"
                },
                buttons: {
                    description: "Butoane ThemeLibrary",
                    label: "Butoane"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "Pluginul de traducere Plexcord, dar cu suport pentru limbi artistice!",
            text: {
                translate: "Traduce",
                dismiss: "Închide",
                translationFailedDueTo: "Traducerea a eșuat din cauza unei erori.",
                translatedFrom: "tradus din {{lang}}"
            },
            option: {
                target: {
                    description: "Limba țintă",
                    label: "Țintă"
                },
                toki: {
                    description: "Activează Toki Pona",
                    label: "Toki Pona"
                },
                sitelen: {
                    description: "Activează Sitelen Pona",
                    label: "Sitelen Pona"
                },
                shavian: {
                    description: "Activează alfabetul Shavian",
                    label: "Shavian"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "Un plugin care te ajută să răspunzi la întrebări de trivia folosind AI.",
            text: {
                answerWithAi: "Răspunde cu AI",
                enterApiKeyHere: "Introdu aici cheia API pentru endpoint-ul AI.",
                enterSystemPrompt: "Introdu promptul de sistem.",
                enterYourOpenaiCompatible: "Introdu aici endpoint-ul AI compatibil OpenAI.",
                status: "Stare {{status}}"
            },
            option: {
                apiKey: {
                    description: "Cheie API.",
                    label: "Cheie API"
                },
                model: {
                    description: "Modelul AI de folosit.",
                    label: "Model",
                    placeholder: "ex. google/gemini-3-flash-preview, inception/mercury, openai/gpt-5.2-chat etc."
                },
                systemPrompt: {
                    description: "Prompt de sistem pentru AI. Substituenți: {current_user}, {current_time}",
                    label: "Prompt de sistem"
                },
                maxTokens: {
                    description: "Numărul maxim de tokenuri în răspuns.",
                    label: "Tokenuri maxime"
                },
                endpoint: {
                    description: "Endpoint AI compatibil OpenAI.",
                    label: "Endpoint"
                },
                context: {
                    description: "Numărul de mesaje anterioare incluse drept context.",
                    label: "Context"
                },
                passMessageAuthorName: {
                    description: "Adaugă numele autorului înaintea conținutului mesajului când este trimis către AI. Poate ajuta AI-ul să distingă utilizatorii dintr-o conversație.",
                    label: "Transmite numele autorului"
                },
                treatSelfAsAssistant: {
                    description: "Când este activat, propriile mesaje vor fi tratate ca mesaje ale asistentului în context. Unele modele încep astfel să genereze fanfiction.",
                    label: "Tratează-mă drept asistent"
                },
                mode: {
                    description: "Cum să fie gestionate răspunsurile?",
                    label: "Mod",
                    autoreply: "Răspuns automat",
                    chatbar: "Înlocuiește textul din bara de chat",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "Trimite imaginile către AI ca context (dacă există). Nu toate modelele acceptă acest lucru.",
                    label: "Acceptă imagini"
                },
                sendImagesAsBase64: {
                    description: "Trimite imaginile către AI ca base64.",
                    label: "Trimite imaginile ca base64"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI: setările API sunt incomplete.",
                errorGettingResponseFrom: "Eroare la obținerea răspunsului de la modelul AI"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "Afișează numărul de necitite pe canalele dezactivate",
                    label: "Afișează pe canalele dezactivate"
                },
                notificationCountLimit: {
                    description: "Afișează +99 în loc de numărul real",
                    label: "Limita numărului de notificări"
                }
            },
            name: "UnreadCountBadge",
            description: "Afișează insigne cu numărul de mesaje necitite pe canalele din listă"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "GIF-urile/WebP trebuie adăugate prin URL. Încarcă GIF-ul/WebP-ul pe un serviciu de găzduire a imaginilor și lipește linkul."
            },
            text: {
                save: "Salvează",
                delete: "Șterge",
                customAvatar: "Avatar personalizat",
                original: "Original",
                local: "Local",
                enterPngGifUrl: "Introdu URL-ul PNG/GIF",
                setAvatar: "Setează avatarul",
                usingTheSetAvatar: "Funcția de setare a avatarului este doar locală, deci doar tu vezi schimbarea.",
                joinUserpfpServer: "Alătură-te serverului UserPFP",
                dropHere: "Plasează aici!",
                dragOrClick: "⬆ Trage o imagine sau dă click pentru a încărca (pentru GIF sau WebP folosește un URL)",
                uploadedFile: "(fișier încărcat)",
                supportHere: "Susține UserPFP aici"
            },
            option: {
                overrideServerAvatars: {
                    description: "Înlocuiește avatarele de server cu cele personalizate sau cu avatarul implicit dacă nu este setat unul personalizat.",
                    label: "Suprascrie avatarele de server"
                },
                preferNitro: {
                    description: "Ce avatar să fie folosit dacă există atât avatarul animat implicit (Nitro), cât și cel UserPFP",
                    label: "Preferă Nitro",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "URL-ul de la care se încarcă baza de date",
                    label: "Sursa bazei de date"
                }
            },
            name: "UserPFP",
            description: "Îți permite să setezi avatare locale statice sau animate pentru tine și alți utilizatori"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "Repornește pentru a aplica modificările!"
            },
            text: {
                installError: "Eroare de instalare",
                done: "Gata!",
                later: "Mai târziu",
                updateError: "Eroare de actualizare",
                checkingForUpdates: "Se caută actualizări...",
                loadingPlugins: "Se încarcă pluginurile...",
                pluginUpdatesAvailable: "Actualizări de pluginuri disponibile",
                theFollowingPluginsAre: "Următoarele pluginuri sunt învechite:",
                youCanUpdatePlugins: "Poți actualiza pluginurile mai jos.",
                installPlugin: "Instalează pluginul",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller nu este încărcat complet",
                youNeedToRestart: "Trebuie să repornești pentru a încărca partea nativă :)",
                restartNow: "Repornește acum",
                someUserpluginsAreOut: "Unele UserPlugins sunt învechite!",
                clickToOpenThe: "Fă clic pentru a deschide actualizatorul UserPlugin",
                plexcordDoesNotModerate: "Plexcord nu moderează userplugin-urile și nu își asumă nicio responsabilitate pentru urmările instalării lor.",
                onlyInstallUserpluginsFrom: "Instalează userplugin-uri doar de la dezvoltatori de încredere. O faci complet pe propriul risc.",
                setGitPath: "Setează calea Git",
                installHint: "Poți instala un plugin de pe GitHub, GitLab, Codeberg, git.nin0.dev sau plugins.nin0.dev lipind aici URL-ul de clonare.",
                enableAndRestart: "Activează și repornește",
                enableAndRefresh: "Activează și reîmprospătează",
                tabCounts: "({{total}}, {{enabled}} activate)",
                possiblyMore: "și posibil altele, deoarece verificarea actualizărilor nu s-a terminat. ",
                alreadyInstalled: "Pluginul este deja instalat, actualizează-l mai jos",
                invalidUrl: "URL invalid, citește nota de mai sus",
                install: "Instalează",
                restart: "Repornește",
                refresh: "Reîmprospătează",
                update: "Actualizează",
                source: "Sursă",
                support: "Asistență",
                managePlugins: "Gestionează pluginurile",
                uninstalledRestart: "{{name}} a fost dezinstalat. Este necesară o repornire pentru a elimina complet pluginul.",
                uninstalledRefresh: "{{name}} a fost dezinstalat. Este necesară o reîmprospătare pentru a elimina complet pluginul.",
                updatedRestart: "{{name}} a fost actualizat. Este necesară o repornire pentru a aplica actualizarea.",
                updatedRefresh: "{{name}} a fost actualizat. Este necesară o reîmprospătare pentru a aplica actualizarea.",
                installedBody: "{{name}} a fost instalat cu succes. Și acum?",
                installedNativeBody: "{{name}} a fost instalat cu succes. Totuși, deoarece folosește funcții native, este necesară repornirea clientului. Și acum?"
            },
            option: {
                allowlistedChannels: {
                    description: "Listă de canale separate prin virgule în care să fie afișat butonul Instalează pluginul. Este afișat mereu în canalele de userplugin Plexcord",
                    label: "Canale permise"
                },
                notifyIfUpdate: {
                    description: "Afișează o notificare Plexcord dacă UserPlugins trebuie actualizate",
                    label: "Notifică la actualizare"
                },
                neverNotifyForPlugins: {
                    description: "Nu afișa niciodată notificări de actualizare pentru aceste pluginuri (le poți actualiza în continuare din fila UserPlugins)",
                    label: "Nu notifica niciodată pentru pluginuri"
                }
            },
            name: "UserpluginInstaller",
            description: "Instalează userplugin-uri cu un simplu clic"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "Titlu 1"
                },
                uncollapseSettingsByDefault: {
                    description: "Extinde automat setările vocale în mod implicit",
                    label: "Extinde setările implicit"
                },
                title2: {
                    label: "Titlu 2"
                },
                outputVolume: {
                    description: "Afișează un glisor pentru volumul de ieșire",
                    label: "Volum de ieșire"
                },
                inputVolume: {
                    description: "Afișează un glisor pentru volumul de intrare",
                    label: "Volum de intrare"
                },
                outputDevice: {
                    description: "Afișează un selector pentru dispozitivul de ieșire",
                    label: "Dispozitiv de ieșire"
                },
                inputDevice: {
                    description: "Afișează un selector pentru dispozitivul de intrare",
                    label: "Dispozitiv de intrare"
                },
                camera: {
                    description: "Afișează un selector de cameră",
                    label: "Cameră"
                },
                title3: {
                    label: "Titlu 3"
                },
                showOutputVolumeHeader: {
                    description: "Afișează antet deasupra glisorului de volum de ieșire",
                    label: "Afișează antetul volumului de ieșire"
                },
                showInputVolumeHeader: {
                    description: "Afișează antet deasupra glisorului de volum de intrare",
                    label: "Afișează antetul volumului de intrare"
                },
                showOutputDeviceHeader: {
                    description: "Afișează antet deasupra selectorului de dispozitiv de ieșire",
                    label: "Afișează antetul dispozitivului de ieșire"
                },
                showInputDeviceHeader: {
                    description: "Afișează antet deasupra selectorului de dispozitiv de intrare",
                    label: "Afișează antetul dispozitivului de intrare"
                },
                showVideoDeviceHeader: {
                    description: "Afișează antet deasupra selectorului de cameră",
                    label: "Afișează antetul dispozitivului video"
                }
            },
            name: "VCPanelSettings",
            description: "Controlează setările vocale direct din panoul vocal",
            text: {
                appearance: "Aspect",
                settingsToShow: "Setări de afișat",
                headersToShow: "Antete de afișat",
                outputVolume: "Volum de ieșire",
                inputVolume: "Volum de intrare",
                outputDevice: "Dispozitiv de ieșire",
                inputDevice: "Dispozitiv de intrare",
                settings: "Setări",
                hide: "Ascunde"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "Detectare automată",
                start: "Pornește",
                transcriptionOptions: "Opțiuni de transcriere",
                audioLanguage: "Limba audio",
                retry: "Reîncearcă",
                transcriptionFailed: "Transcrierea a eșuat",
                transcribeVoiceMessage: "Transcrie mesajul vocal",
                close: "Închide",
                baseRecommended: "Base (recomandat)",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo (cea mai bună precizie, GPU recomandat)",
                transcribe: "Transcrie",
                translateToEnglish: "Tradu în engleză",
                voiceMessageTranslation: "Traducerea mesajului vocal",
                voiceMessageTranscription: "Transcrierea mesajului vocal",
                hideTimestamps: "Ascunde marcajele de timp",
                showTimestamps: "Afișează marcajele de timp",
                copied: "Copiat!",
                copyText: "Copiază textul",
                downloadingAudio: "Se descarcă audio...",
                processingAudio: "Se procesează audio...",
                loadingModel: "Se încarcă modelul...",
                transcribing: "Se transcrie...",
                transcription: "Transcriere",
                transcriptionError: "Eroare de transcriere",
                transcribingInProgress: "Transcriere în curs...",
                initializing: "Se inițializează...",
                workerCrashed: "Procesul de transcriere s-a blocat",
                workerStopped: "Procesul de transcriere a fost oprit",
                deleteCache: "Șterge toate fișierele din cache ({{size}} MB)",
                action: "Acțiune"
            },
            name: "VoiceMessageTranscriber",
            description: "Transcrieri pe dispozitiv ale mesajelor vocale, bazate pe Whisper",
            option: {
                embed: {
                    description: "Afișează transcrierea direct în atașamentul mesajului vocal în loc de o fereastră.",
                    label: "Înglobare"
                },
                maintainHorizontal: {
                    description: "Păstrează dimensiunea orizontală a casetei de transcriere înglobate și extinde pe verticală.",
                    label: "Păstrează orizontal"
                },
                selectedModel: {
                    description: "Dimensiunea modelului.",
                    onnxcommunitywhispertiny: "Tiny (cel mai rapid, precizie minimă)"
                },
                useGpu: {
                    description: "Rulează modelul pe GPU (WebGPU) când este acceptat. Mult mai rapid și face utilizabile modelele mai mari. Revine la CPU dacă nu e disponibil.",
                    label: "Folosește GPU"
                },
                quantized: {
                    description: "Folosește modele cuantizate pe CPU (dimensiune mai mică, ușoară pierdere de calitate).",
                    label: "Cuantizat"
                },
                deleteModalFiles: {
                    description: "Șterge fișierele din cache din stocare.",
                    label: "Șterge fișierele modelului"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "Menține redarea mesajelor vocale între chaturi cu un mini player sincronizat.",
            text: {
                voiceMessagesInBackground: "Player de mesaje vocale în fundal",
                returnToChannelname: "Înapoi la {{channelName}}",
                voiceMessagePosition: "Poziția mesajului vocal",
                changePlaybackSpeed: "Schimbă viteza de redare",
                playbackSpeedSpeedTimes: "Viteză de redare de {{speed}} ori",
                closeVoiceMessagePlayer: "Închide playerul de mesaje vocale",
                voiceMessage: "Mesaj vocal",
                directMessage: "Mesaj direct",
                resume: "Reia mesajul vocal",
                pause: "Pune pe pauză mesajul vocal"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "Face Discord instalabil ca aplicație (PWA). Activează insignele de notificare, comenzile rapide globale și bara de titlu proprie Discord.",
            text: {
                activities: "Activități",
                hopIn: "Intră",
                status: "Stare",
                emojis: "Emoji",
                rooms: "Camere",
                discord: "Discord",
                platforms: "Platforme",
                keybindsInfoBefore: "Sunt acceptate combinații globale personalizate Apasă pentru X. Accesează",
                keybindsInfoAfter: "pentru a le schimba. Combinațiile Ține apăsat pentru X nu sunt acceptate."
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "Rezoluție",
                    label: "Rezoluție"
                },
                frameRate: {
                    description: "Rata de cadre",
                    label: "Rata de cadre"
                },
                contentHint: {
                    description: "Indiciu de conținut",
                    label: "Indiciu de conținut"
                },
                systemAudio: {
                    description: "Dezactivează sunetul sistemului",
                    label: "Sunetul sistemului"
                }
            },
            name: "WebScreenShare",
            description: "Adaugă un meniu de opțiuni pentru partajarea ecranului. Permite modificarea rezoluției, ratei de cadre, indiciilor de codare și sunetului sistemului.",
            text: {
                stream: "Stream",
                streamMuted: "Stream dezactivat",
                streamMode: "Mod stream",
                muteStreamAudio: "Dezactivează sunetul streamului",
                preventsSystemAudioFrom: "Împiedică includerea sunetului sistemului în stream.",
                showStreamPreviews: "Afișează previzualizările streamului",
                allowsOthersToSee: "Permite altora să vadă o previzualizare a streamului înainte de a intra.",
                smootherVideo: "Video mai fluid",
                cleanerText: "Text mai clar",
                userPreset: "Presetare utilizator",
                custom: "Personalizat",
                gaming: "Gaming",
                screenshare: "Partajare ecran"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "Ascunde emoji-urile Unicode implicite din completarea automată, dacă nu sunt pe lista albă.",
                    label: "Emoji implicite"
                },
                serverEmojis: {
                    description: "Ascunde emoji-urile personalizate ale serverului din completarea automată, dacă nu sunt pe lista albă.",
                    label: "Emoji de server"
                },
                disableToasts: {
                    description: "Nu afișa notificări la adăugarea sau eliminarea emoji-urilor.",
                    label: "Dezactivează notificările"
                },
                whiteListedEmojis: {
                    description: "Emoji pe lista albă",
                    label: "Emoji pe lista albă"
                },
                exportEmojis: {
                    description: "Exportă emoji-urile",
                    label: "Exportă emoji-urile"
                },
                importEmojis: {
                    description: "Importă emoji-uri",
                    label: "Importă emoji-uri"
                },
                resetEmojis: {
                    description: "Resetează emoji-urile",
                    label: "Resetează emoji-urile"
                }
            },
            name: "WhitelistedEmojis",
            description: "Permite dezactivarea tuturor emoji-urilor din mesaje, cu excepția unui set de pe lista albă.",
            toast: {
                addedLengthEmojisTo: "Au fost adăugate {{length}} emoji-uri în listă, {{length}} erau deja în listă",
                removedLengthEmojisFrom: "Au fost eliminate {{length}} emoji-uri din listă",
                nameIsAlreadyIn: "„{{name}}” este deja în listă",
                addedNameToThe: "„{{name}}” a fost adăugat în listă",
                nameIsNotIn: "„{{name}}” nu este în listă",
                removedNameFromThe: "„{{name}}” a fost eliminat din listă",
                successfullyExportedEmojis: "Emoji-urile au fost exportate",
                successfullyImportedEmojis: "Emoji-urile au fost importate",
                invalidJsonData: "Date JSON nevalide",
                failedToImportEmojis: "Nu s-au putut importa emoji-urile: {{err}}",
                resetEmojis: "Emoji-urile au fost resetate"
            },
            text: {
                areYouSure: "Ești sigur?",
                thisWillOverwriteYour: "Aceasta va suprascrie lista albă actuală.",
                import: "Importă",
                cancel: "Anulează",
                thisWillRemoveAll: "Aceasta va elimina toate emoji-urile din lista albă.",
                reset: "Resetează",
                addAllGuildEmojis: "Adaugă toate emoji-urile serverului",
                removeAllGuildEmojis: "Elimină toate emoji-urile serverului",
                noEmojisInThe: "Nu există emoji-uri pe lista albă.",
                removeAll: "Elimină tot",
                removeFromWhitelist: "Elimină din lista albă",
                addToWhitelist: "Adaugă în lista albă",
                defaultEmojis: "Emoji implicite",
                guildEmojis: "Emoji din {{name}}",
                guildFallback: "Server {{id}}",
                whitelistedEmojis: "Emoji din lista albă",
                remove: "Elimină"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "Intensitatea animației în px",
                    label: "Intensitate"
                }
            },
            name: "WigglyText",
            description: "Adaugă o nouă formatare markdown care face textul să se legene.",
            text: {
                leftAndRight: "stânga și dreapta",
                byTyping: "tastând",
                upAndDown: "sus și jos",
                inACircle: "în cerc",
                youCanMakeTextWiggle: "Poți face textul să se legene astfel:"
            }
        },
        fixDiscordCss: {
            description: "Remediază întârzierea CSS din Discord"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "Descarcă fișierele direct din Discord în loc să le deschidă în browser"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "Nu s-au putut obține depozitele",
                personal: "Personal",
                unknown: "Necunoscut",
                sortedByCount: "Sortat după numărul de depozite. Click pentru sortare A-Z",
                sortedAlphabetically: "Sortat A-Z. Click pentru sortare după numărul de depozite",
                mostRepos: "Cele mai multe depozite"
            }
        }
    }
} as const;

export default translations;
