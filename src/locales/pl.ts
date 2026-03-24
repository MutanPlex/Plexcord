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
        title: "Ustawienia",
        language: {
            selector: {
                label: "Język",
                description: "Wybierz preferowany język dla Plexcord.",
                placeholder: "Wybierz język"
            }
        },
        location: {
            label: "Lokalizacja ustawień",
            description: "Gdzie umieścić sekcję ustawień Plexcord",
            top: "Na samej górze",
            nitro: {
                above: "Powyżej sekcji Nitro",
                below: "Poniżej sekcji Nitro"
            },
            activity: {
                above: "Powyżej ustawień aktywności",
                below: "Poniżej ustawień aktywności"
            },
            bottom: "Na samym dole"
        },
        switches: {
            useQuickCss: {
                label: "Włącz własny CSS",
                description: "Ładuj własny arkusz CSS z edytora QuickCSS. Pozwala to na dostosowanie wyglądu Discorda za pomocą własnych stylów."
            },
            enableReactDevtools: {
                label: "Włącz React Developer Tools",
                description: "Włącz rozszerzenie React Developer Tools do debugowania komponentów React Discorda. Przydatne przy tworzeniu wtyczek."
            },
            mainWindowFrameless: {
                label: "Wyłącz ramkę głównego okna",
                description: "Usuń natywną ramkę okna, aby uzyskać czystszy wygląd. Nadal możesz przesuwać okno, przeciągając obszar paska tytułu."
            },
            frameless: {
                label: "Wyłącz ramkę okna",
                description: "Usuń natywną ramkę okna, aby uzyskać czystszy wygląd. Nadal możesz przesuwać okno, przeciągając obszar paska tytułu."
            },
            winNativeTitleBar: {
                label: "Używaj natywnego paska tytułu Windows zamiast niestandardowego Discorda",
                description: "Zastąp niestandardowy pasek tytułu Discorda standardowym paskiem tytułu Windows. Może to poprawić kompatybilność z niektórymi narzędziami do zarządzania oknami."
            },
            transparent: {
                label: "Włącz przezroczystość okna",
                description: "Spraw, aby okno Discorda było przezroczyste. Wymagany jest motyw obsługujący przezroczystość, w przeciwnym razie funkcja ta nie zadziała.",
                isWindows: "Spowoduje to wyłączenie możliwości zmiany rozmiaru okna i uniemożliwi przyciąganie okna do krawędzi ekranu.",
                notWindows: "Spowoduje to wyłączenie możliwości zmiany rozmiaru okna."
            },
            winCtrlQ: {
                label: "Zarejestruj Ctrl+Q jako skrót do zamykania Discorda (alternatywa dla Alt+F4)",
                description: "Dodaj Ctrl+Q jako skrót klawiszowy do zamykania Discorda. Stanowi to alternatywę dla Alt+F4 przy szybkim zamykaniu aplikacji."
            },
            disableMinSize: {
                label: "Wyłącz minimalny rozmiar okna",
                description: "Pozwól na zmniejszenie okna Discorda poniżej domyślnego minimalnego rozmiaru. Przydatne dla kafelkowych menedżerów okien lub małych ekranów."
            }
        },
        quickActions: {
            title: "Szybkie akcje",
            description: "Typowe działania, które możesz chcieć wykonać. Skróty te dają szybki dostęp do często używanych funkcji bez konieczności nawigowania po menu.",
            notificationLog: "Dziennik powiadomień",
            editQuickCSS: "Edytuj QuickCSS",
            relaunchDiscord: "Uruchom ponownie Discorda",
            openSettingsFolder: "Otwórz folder ustawień",
            viewSourceCode: "Zobacz kod źródłowy"
        },
        specialCards: {
            donations: {
                title: "Darowizny",
                subtitle: "Dziękujemy za darowiznę!",
                description: "Możesz zarządzać swoimi profitami w dowolnym momencie, wysyłając wiadomość do @mutanplex.",
                button: "Przekaż darowiznę",
                invite: "Dołącz do naszego Discorda",
                invalid: "Nieprawidłowy lub wygasły link do zaproszenia."
            },
            supportProject: {
                title: "Wesprzyj projekt",
                description: "Rozważ wsparcie rozwoju Plexcord poprzez darowiznę!"
            },
            contributions: {
                title: "Wkład w projekt",
                subtitle: "Dziękujemy za Twój wkład!",
                description: "Ponieważ przyczyniłeś się do rozwoju Plexcord, masz teraz nową, fajną odznakę!",
                buttonTitle: "Zobacz, w co włożyłeś swój wkład"
            }
        },
        settingsSection: {
            title: "Ustawienia",
            description: "Skonfiguruj zachowanie Plexcord i jego integrację z Discordem. Ustawienia te wpływają na wygląd i zachowanie klienta Discord.",
            hintParts: {
                prefix: "Możesz dostosować miejsce pojawienia się tej sekcji ustawień w menu Discorda, konfigurując {{pluginLink}}",
                linkText: "Wtyczkę Ustawień"
            }
        },
        notifications: {
            title: "Powiadomienia",
            description: "Skonfiguruj sposób obsługi powiadomień przez Plexcord. Możesz dostosować czas i sposób otrzymywania alertów lub wyświetlić historię powiadomień.",
            settings: "Ustawienia powiadomień",
            viewLog: "Zobacz dziennik powiadomień",
            permissions: {
                denied: {
                    title: "Odmowa uprawnień do powiadomień pulpitu",
                    label: "Odmówiłeś uprawnień do powiadomień. Powiadomienia pulpitu nie będą działać!"
                }
            },
            style: {
                label: "Styl powiadomień",
                description: "Niektóre wtyczki mogą wyświetlać powiadomienia. Występują one w dwóch stylach:",
                plexcord: "Powiadomienia Plexcord",
                plexcordDesc: "Są to powiadomienia wewnątrz aplikacji",
                desktop: "Powiadomienia pulpitu",
                desktopDesc: "Natywne powiadomienia pulpitu (np. gdy ktoś Cię oznaczy)",
                onlyWhenNotFocused: "Używaj powiadomień pulpitu tylko wtedy, gdy Discord nie jest aktywny",
                always: {
                    desktop: "Zawsze używaj powiadomień pulpitu",
                    plexcord: "Zawsze używaj powiadomień Plexcord"
                }
            },
            positions: {
                label: "Pozycja powiadomień",
                right: {
                    bottom: "Prawy dół",
                    top: "Prawa góra",
                },
                left: {
                    bottom: "Lewy dół",
                    top: "Lewa góra",
                }
            },
            missed: {
                label: "Licznik pominiętych powiadomień",
                description: "Po powrocie do Discorda pojawi się powiadomienie z liczbą pominiętych wiadomości",
                whileYou: "Podczas Twojej nieobecności",
                count: "Otrzymano {{count}} powiadomienie{{s}}",
                s: ""
            },
            timeout: {
                label: "Limit czasu powiadomienia",
                description: "Czas (w sekundach), przez jaki powiadomienia będą widoczne na ekranie przed automatycznym zniknięciem"
            },
            logLimit: {
                label: "Limit dziennika powiadomień",
                description: "Maksymalna liczba powiadomień przechowywanych w dzienniku. Ustaw {{disable}}, aby wyłączyć dziennik, lub {{unlimited}}, aby nigdy nie usuwać starych powiadomień"
            },
            opacity: {
                label: "Przezroczystość powiadomień",
                description: "Przezroczystość powiadomień wewnątrz aplikacji"
            },
            maxNotifications: {
                label: "Maksymalna liczba powiadomień",
                description: "Maksymalna liczba powiadomień wyświetlanych jednocześnie"
            },
            behavior: {
                label: "Zachowanie powiadomień",
            },
            disableInStreamerMode: {
                label: "Wyłącz w trybie streamingu",
                description: "Wyłącz powiadomienia podczas aktywnego trybu streamingu"
            },
            renderImages: {
                label: "Renderuj obrazy",
                description: "Wyświetlaj obrazy w powiadomieniach"
            },
            streamingTreatment: {
                label: "Obsługa podczas udostępniania",
                description: "Jak traktować powiadomienia podczas udostępniania ekranu",
                normal: "Normalnie - Pokazuj powiadomienia standardowo",
                noContent: "Bez treści - Ukryj treść powiadomienia",
                ignore: "Ignoruj - Nie pokazuj powiadomień w ogóle"
            },
        },
        macVibrancy: {
            title: "Styl wibracji okna (Wymaga restartu)",
            description: "Dostosuj efekt wibracji okna macOS. Kontroluje to styl rozmycia i przezroczystości okna Discord. Zmiany wymagają restartu.",
            placeholder: "Styl wibracji okna",
            style: {
                no: "Brak wibracji",
                underPage: "Pod stroną (Barwienie okna)",
                content: "Zawartość",
                window: "Okno",
                selection: "Zaznaczenie",
                titlebar: "Pasek tytułu",
                header: "Nagłówek",
                sidebar: "Pasek boczny",
                tooltip: "Podpowiedź",
                menu: "Menu",
                popover: "Popover",
                fullscreenUI: "UI pełnoekranowe (Przezroczyste, ale lekko rozmyte)",
                hud: "HUD (Najbardziej przezroczyste)"
            }
        }
    },

    plugins: {
        title: "Wtyczki",
        new: "NOWE",
        unknown: "Nieznany",
        noDescription: "Brak dostępnego opisu.",
        restart: {
            apply: "Zrestartuj, aby zastosować zmiany!",
            required: "Wymagany restart!",
            description: "Zrestartuj teraz, aby zastosować nowe wtyczki i ich ustawienia",
            following: "Następujące wtyczki wymagają restartu:",
            remainingCount: "i {{count}} więcej",
            fully: "Niektóre wtyczki wymagają restartu, aby całkowicie je wyłączyć",
            would: "Czy chcesz zrestartować teraz?",
            resetDefault: "Przywróć ustawienia domyślne",
            failed: "Nie udało się uruchomić zależności:",
            button: {
                restart: "Restartuj",
                later: "Później!",
                now: "Restartuj teraz",
                cancel: "Anuluj",
                disableWarning: "Wyłącz to ostrzeżenie na zawsze",
                disableAll: "Wyłącz wszystko",
                reset: "Resetuj",
                close: "Zamknij"
            }
        },
        contributor: {
            contributed: "wniósł wkład",
            modal: {
                contributionsInfo: "{{userName}} ma {{continuedLink}} w {{contributionCount}} wtyczce/wtyczkach.",
                noContributions: "{{userName}} nie stworzył żadnych wtyczek. Prawdopodobnie {{contributedLink}} w inny sposób!"
            }
        },
        infoModal: {
            description: "Naciśnij ikonę koła zębatego lub info, aby dowiedzieć się więcej o wtyczce",
            settingsInfo: "Wtyczki z kołem zębatym mają ustawienia, które możesz modyfikować!",
            disableAll: "Wyłącz wszystkie wtyczki"
        },
        error: {
            invalidInput: "Podano nieprawidłowe dane",
            stopping: "Błąd podczas zatrzymywania wtyczki {{plugin}}",
            starting: "Błąd podczas uruchamiania wtyczki {{plugin}}",
            startDependency: "Błąd podczas uruchamiania zależności: {{failures}}",
            infoRender: "Wystąpił błąd podczas renderowania niestandardowego komponentu informacyjnego wtyczki"
        },
        placeholder: {
            number: "Wprowadź liczbę",
            select: "Wybierz opcję",
            text: "Wprowadź wartość"
        },
        excluded: {
            desktop: "Aplikacja Discord Desktop lub Plextron",
            discordDesktop: "Aplikacja Discord Desktop",
            plextron: "Aplikacja Plextron",
            web: "Aplikacja Plextron i wersja przeglądarkowa Discorda",
            dev: "Wersja deweloperska Plexcord"
        },
        search: {
            looking: "Czy szukasz",
            onlyAvailable: "Dostępne tylko w",
            noCriteria: "Żadna wtyczka nie spełnia kryteriów wyszukiwania."
        },
        required: {
            title: "Wymagane wtyczki",
            this: "Ta wtyczka jest wymagana do poprawnego działania Plexcord.",
            by: "Ta wtyczka jest wymagana przez:"
        },
        dangerModal: {
            title: "NIEBEZPIECZNE DZIAŁANIE",
            disablePlugins: "Wyłącz wtyczki",
            disableText: "Wyłącz wszystko",
            irreversible: "TO DZIAŁANIE JEST NIEODWRACALNE!",
            enableBack: "Czy na pewno chcesz kontynuować? Zawsze możesz włączyć je później.",
            undone: "Tej akcji nie można cofnąć. Czy jesteś pewien?",
            resetDescription: "Zamierzasz zresetować wszystkie ustawienia dla {{pluginName}} do wartości domyślnych.",
            disable: "Zamierzasz wyłączyć {{enabledPlugins}} wtyczek!",
            confirmReset: "Potwierdź reset",
            cancel: "Anuluj",
            resetSettings: "Resetuj ustawienia",
            resetText: "Reset"
        },
        filters: {
            label: "Filtry",
            placeholder: "Szukaj wtyczki...",
            option: {
                all: "Pokaż wszystko",
                enabled: "Pokaż włączone",
                disabled: "Pokaż wyłączone",
                new: "Pokaż nowe",
                userplugins: "Pokaż wtyczki użytkownika",
                api: "Pokaż wtyczki API"
            }
        },
        pluginModal: {
            noSettings: "Ta wtyczka nie posiada ustawień.",
            authors: "Autorzy",
            settings: "Ustawienia",
            successfulReset: "Ustawienia dla {{plugin}} zostały zresetowane.",
            enabledStock: "Włączone wtyczki podstawowe",
            totalStock: "Wszystkie wtyczki podstawowe",
            enabledUser: "Włączone wtyczki użytkownika",
            totalUser: "Wszystkie wtyczki użytkownika",
            info: "Więcej informacji",
            source: "Zobacz kod źródłowy"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "API do dodawania dekoratorów do listy członków (zarówno na serwerach, jak i w DM)",
                    messageAccessories: "API do dodawania akcesoriów do wiadomości",
                    messageDecorations: "API do dodawania dekoracji do wiadomości",
                    chatInputButtons: "API do dodawania przycisków do paska wpisywania czatu",
                    commands: "API wymagane przez wszystko, co używa komend",
                    contextMenu: "API do dodawania/usuwania elementów z menu kontekstowych.",
                    dynamicImageModal: "Pozwala pominąć szerokość lub wysokość podczas otwierania modala obrazu",
                    menuItemDemangler: "Odplątuje moduł elementu menu Discorda",
                    messageEvents: "API wymagane przez wszystko korzystające ze zdarzeń wiadomości",
                    messagePopover: "API do dodawania przycisków do popoverów wiadomości",
                    messageUpdater: "API do aktualizacji i ponownego renderowania wiadomości",
                    nicknameIcons: "API do dodawania ikon do pseudonimu w profilach",
                    notices: "Naprawia automatyczne odrzucanie powiadomień",
                    serverList: "API wymagane dla wtyczek modyfikujących listę serwerów",
                    userSettings: "Patchuje UserSettings Discorda, aby odsłonić ich grupę i nazwę.",
                    audioPlayer: "API do odtwarzania wewnętrznych plików audio Discorda lub zewnętrznych linków audio.",
                    userArea: "API do dodawania przycisków do panelu obszaru użytkownika."
                },
                chatButtons: {
                    context: {
                        buttons: "Przyciski"
                    }
                }
            },
            badges: {
                description: "API do dodawania odznak użytkownikom",
                contributor: {
                    plexcord: "Współtwórca Plexcord",
                    vencord: "Współtwórca Vencord",
                    userPlugin: "Współtwórca wtyczek użytkownika"
                },
                context: {
                    title: "Opcje odznak",
                    copy: {
                        name: "Kopiuj nazwę odznaki",
                        link: "Kopiuj link do obrazka odznaki"
                    },
                    refetch: {
                        button: "Odśwież odznaki",
                        success: "Odznaki pomyślnie odświeżone!"
                    }
                },
                modal: {
                    title: "Darczyńca Plexcord",
                    special: "Ta odznaka jest specjalnym przywilejem dla darczyńców Plexcord",
                    description: "Rozważ wsparcie rozwoju Plexcord, zostając darczyńcą. To wiele dla nas znaczy!"
                }
            },
        },
        uiElements: {
            manage: "Zarządzaj elementami UI",
            allows: "Pozwala ukryć przyciski, których nie lubisz",
            section: {
                chatbar: {
                    title: "Przyciski paska czatu",
                    description: "Są to przyciski po prawej stronie paska wpisywania czatu"
                },
                messagePopover: {
                    title: "Przyciski popovera wiadomości",
                    description: "Są to przyciski pływające po prawej stronie po najechaniu na wiadomość"
                }
            },
            button: "Przyciski włączonych wtyczek pojawią się tutaj."
        }
    },

    patchHelper: {
        title: "Patch Helper",
        description: "Narzędzie deweloperskie ułatwiające tworzenie łatek (patchy) dla wtyczek Plexcord.",
        fullPatch: {
            label: "Pełny Patch",
            description: "Wklej tutaj swój pełny patch JSON, aby wypełnić pola"
        },
        find: "Znajdź",
        match: "Dopasowanie",
        replacement: "Zamiana",
        preview: "Podgląd",
        generatedCode: "Wygenerowany kod",
        group: "Grupa",
        diff: "Różnica (Diff)",
        module: "Moduł",
        compile: "Kompiluj",
        compiled: "Kompilacja zakończona sukcesem",
        copy: {
            clipboard: "Kopiuj do schowka",
            codeblock: "Kopiuj jako blok kodu"
        },
        error: {
            noMatch: "Nie znaleziono dopasowania. Czy ten moduł jest ładowany leniwie (lazy loaded)?",
            multipleMatch: "Znaleziono wiele dopasowań. Użyj bardziej specyficznego wzorca wyszukiwania.",
            noFind: "Pole 'Znajdź' jest puste.",
            noReplacement: "Pole 'Zamiana' jest puste.",
            invalidReplacement: "Pole 'Zamiana' jest nieprawidłowe",
            replacementMatch: "Brak pola 'replacement.match'",
            replacementReplace: "Brak pola 'replacement.replace'",
            replacementMustFunction: "'Zamiana' musi być funkcją"
        },
        cheatSheet: {
            title: "Ściąga",
            identifiers: "Specjalna sekwencja ucieczki regex dopasowująca identyfikatory (nazwy zmiennych, klas itp.)",
            dollar: "Wstaw znak $",
            entireMatch: "Wstaw całe dopasowanie",
            beforeMatch: "Wstaw podciąg przed dopasowaniem",
            afterMatch: "Wstaw podciąg po dopasowaniu",
            nthGroup: "Wstaw n-tą grupę przechwytującą ($1, $2...)",
            pluginInstance: "Wstaw instancję wtyczki"
        },
        replacementEval: {
            label: "Traktuj zamianę jako funkcję",
            description: "'Zamiana' zostanie oceniona jako funkcja, jeśli ta opcja jest włączona"
        }
    },

    sync: {
        title: "Kopia zapasowa i przywracanie",
        warning: "Ostrzeżenie",
        warningText: "Importowanie pliku ustawień nadpisze Twoje obecne ustawienia. Upewnij się, że najpierw wyeksportowałeś kopię zapasową, jeśli chcesz zachować obecną konfigurację.",
        description: "Możesz importować i eksportować swoje ustawienia Plexcord jako plik JSON. Pozwala to na łatwe przenoszenie ustawień na inne urządzenie lub ich odzyskanie po reinstalacji.",
        successful: "Ustawienia pomyślnie zaimportowane. Zrestartuj, aby zastosować zmiany!",
        error: {
            failure: "Nie udało się zaimportować ustawień: {{error}}",
            failedExport: "Nie udało się wyeksportować ustawień, sprawdź konsolę",
            invalid: "Nieprawidłowe ustawienia. Czy to na pewno plik ustawień Plexcord?",
            tooLarge: "DataStore jest zbyt duży - wykluczony z kopii zapasowej. Użyj 'Eksportuj DataStores', jeśli to konieczne.",
            clearSomeDate: "DataStore jest zbyt duży. Wyczyść dane niektórych wtyczek i spróbuj ponownie."
        },
        settings: {
            text: "Co zawiera kopia zapasowa?",
            quickcss: "Własny QuickCSS",
            theme: "Linki do motywów",
            plugins: "Ustawienia wtyczek",
            datastores: "DataStores wtyczek (np. strefy czasowe lub IRememberYou)"
        },
        import: {
            title: "Importuj ustawienia",
            description: "Wybierz wcześniej wyeksportowany plik ustawień, aby przywrócić konfigurację. Zastąpi to wszystkie obecne ustawienia.",
            all: "Importuj wszystkie ustawienia",
            plugins: "Importuj wtyczkę",
            css: "Importuj QuickCSS",
            datastore: "Importuj DataStores"
        },
        export: {
            title: "Eksportuj ustawienia",
            description: "Możesz wyeksportować swoje obecne ustawienia Plexcord do pliku w celu wykonania kopii zapasowej lub transferu na inne urządzenie.",
            all: "Eksportuj wszystkie ustawienia",
            plugins: "Eksportuj wtyczkę",
            css: "Eksportuj QuickCSS",
            datastore: "Eksportuj DataStores"
        }
    },

    cloud: {
        text: "Chmura",
        title: "Synchronizacja ustawień",
        override: "Synchronizacja w chmurze",
        description: "Synchronizuj swoje ustawienia Plexcord z chmurą. Ułatwia to zachowanie spójnej konfiguracji na wielu urządzeniach bez konieczności ręcznego importu/eksportu.",
        switchDescription: "Gdy ta opcja jest włączona, Twoje ustawienia mogą być synchronizowane z chmurą i do niej wysyłane. Użyj poniższych akcji, aby przeprowadzić ręczną synchronizację.",
        settings: "Ustawienia chmury",
        successful: "Zsynchronizowano ustawienia z chmurą!",
        updated: "Twoje ustawienia zostały zaktualizowane! Kliknij tutaj, aby zrestartować aplikację i w pełni zastosować zmiany!",
        deleted: "Ustawienia usunięte z chmury!",
        integration: {
            title: "Integracja z chmurą",
            description: "Integracja Plexcord z chmurą pozwala na synchronizację ustawień między wieloma urządzeniami i instalacjami Discorda. Twoje dane są bezpiecznie przechowywane i mogą być przywrócone w dowolnym momencie.",
        },
        reauth: "Zauważyliśmy, że masz włączoną integrację z chmurą w innym kliencie! Ze względu na ograniczenia, musisz ponownie przeprowadzić autoryzację, aby kontynuować. Kliknij tutaj, aby przejść do strony ustawień i to zrobić!",
        error: {
            setup: "Konfiguracja nie powiodła się (nie udało się pobrać konfiguracji OAuth).",
            secret: "Konfiguracja nie powiodła się (nie zwrócono klucza secret).",
            string: "Konfiguracja nie powiodła się ({{error}}).",
            connect: "Synchronizacja w chmurze została wyłączona, ponieważ to konto nie jest połączone z aplikacją Plexcord Cloud. Możesz ją włączyć ponownie, łącząc konto w Ustawieniach Chmury. (uwaga: Twoje preferencje będą przechowywane oddzielnie)",
            noSettings: "Brak ustawień w chmurze.",
            uptodate: "Twoje ustawienia są aktualne.",
            localNewer: "Twoje lokalne ustawienia są nowsze niż te w chmurze.",
            delete: "Nie udało się usunąć ustawień ({{error}}).",
            api: {
                returned: {
                    delete: "Nie udało się usunąć ustawień (API zwróciło status {{status}}).",
                    to: "Nie udało się zsynchronizować ustawień z chmurą (API zwróciło status {{status}}).",
                    from: "Nie udało się pobrać ustawień z chmury (API zwróciło status {{status}}).",
                    manifest: "Nie można pobrać manifestu do usunięcia (API zwróciło {{status}})."
                }
            },
            synchronize: {
                to: "Nie udało się zsynchronizować ustawień z chmurą ({{error}}).",
                from: "Nie udało się pobrać ustawień z chmury ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Włącz powyższą integrację z chmurą, aby korzystać z funkcji synchronizacji ustawień."
        },
        danger: {
            title: "Strefa niebezpieczeństwa",
            description: "Trwale usuń wszystkie swoje dane z chmury. Tej operacji nie można cofnąć – spowoduje ona usunięcie wszystkich zsynchronizowanych ustawień oraz innych danych przechowywanych w chmurze.",
            delete: {
                account: {
                    title: "Usuń konto w chmurze",
                    description: "Czy na pewno chcesz trwale usunąć swoje konto w chmurze wraz ze wszystkimi powiązanymi danymi? Tej akcji nie można cofnąć.",
                    confirm: "Usuń konto",
                    cancel: "Anuluj"
                }
            }
        },
        notification: {
            title: "Integracja z chmurą",
            enabled: "Integracja z chmurą włączona",
            host: "{{host}} został dodany do białej listy. Uruchom ponownie aplikację, aby zmiany weszły w życie.",
            erase: {
                successful: "Dane z chmury zostały pomyślnie usunięte",
                failed: "Nie udało się usunąć wszystkich danych (API zwróciło status {{status}}), prosimy o kontakt ze wsparciem."
            }
        },
        button: {
            to: "Synchronizuj do chmury",
            from: "Synchronizuj z chmury",
            fromDescription: "Spowoduje to nadpisanie Twoich lokalnych ustawień tymi z chmury. Używaj z rozwagą!",
            delete: "Usuń dane z chmury",
            enable: "Włącz integracje z chmurą",
            reauthorize: "Autoryzuj ponownie",
            confirm: "Restartuj teraz",
            later: "Później!"
        },
        privacy: "szanuje Twoją prywatność",
        source: "kod źródłowy",
        overview: "Plexcord posiada integrację z chmurą, która dodaje funkcje takie jak synchronizacja ustawień między urządzeniami. Usługa ta {{privacy}}, a jej {{source}} jest dostępny na licencji AGPL 3.0, więc możesz hostować go samodzielnie.",
        authorization: "Połącz się z backendem chmury w celu synchronizacji ustawień. Jeśli nie skonfigurowałeś jeszcze integracji, zostaniesz poproszony o autoryzację.",
        backend: {
            title: "Backend chmury",
            description: "Wybierz sposób przechowywania ustawień w chmurze. Domyślnie używana jest chmura Plexcord, ale możesz również połączyć własną usługę (self-hosted).",
            invalid: "Nieprawidłowy adres URL"
        },
        sync: {
            title: "Zasady synchronizacji dla tego urządzenia",
            description: "To ustawienie kontroluje sposób przesyłania danych między tym urządzeniem a chmurą. Możesz zezwolić na przepływ zmian w obie strony lub wybrać jedno źródło jako nadrzędne.",
            direction: {
                both: "Synchronizacja dwukierunkowa (zmiany płyną w obie strony)",
                push: "To urządzenie jest źródłem (tylko wysyłanie)",
                pull: "Chmura jest źródłem (tylko pobieranie)",
                manual: "Nie synchronizuj automatycznie (tylko ręcznie za pomocą przycisków poniżej)"
            }
        }
    },

    changelog: {
        text: "Lista zmian",
        title: "Dziennik zmian",
        description: "Tutaj znajdziesz najnowsze zmiany i aktualizacje Plexcord.",
        by: "autor:",
        check: "Sprawdzanie repozytorium",
        uptodate: "aktualne",
        update: "Aktualizacja",
        noMessage: "Brak wiadomości",
        unknown: "Nieznany",
        updatedPlugins: "Zaktualizowane wtyczki",
        newSettings: "Nowe ustawienia",
        newSettingTooltip: "Nowe ustawienie we wtyczce {{plugin}}",
        loading: "Ładowanie...",
        repoUptodate: "Repozytorium jest aktualne",
        fetch: "Pobierz z repozytorium",
        clear: "Wyczyść wszystkie logi",
        internet: "Upewnij się, że masz połączenie z Internetem i spróbuj ponownie.",
        recent: "Ostatnie zmiany",
        codeChanges: "Zmiany w kodzie: {{count}} now{{s}} commit{{s}}",
        updateLogs: "Logi aktualizacji ({{count}})",
        noCommit: "Brak nowych commitów względem Twojej wersji. Kliknij 'Pobierz z repozytorium', aby sprawdzić dostępność zmian.",
        previous: "Poprzednie sesje aktualizacji wraz z historią commitów i zmianami we wtyczkach.",
        modal: {
            description: "Przejrzyj najnowsze zmiany w Plexcord. Funkcja ta pobiera commity bezpośrednio z repozytorium, aby pokazać nowości.",
            repository: "Repozytorium",
            failed: "Nie udało się pobrać – sprawdź konsolę",
            current: "Aktualna:",
            hide: "Ukryj logi",
            show: "Pokaż logi",
            fetch: {
                title: "Pobierz zmiany",
                description: "Sprawdź repozytorium pod kątem nowych commitów, aktualizacji wtyczek i zmian w kodzie. System porówna Twoją wersję z najnowszą dostępną i pokaże nowości.",
                newCommit: "Oto nowe commity i aktualizacje wtyczek od Twojej ostatniej wersji. Możesz zobaczyć dodane funkcje, naprawione błędy oraz które wtyczki otrzymały poprawki.",
                confirm: "Pobierz",
            }
        },
        commit: {
            available: "dostępnych commitów",
            no: "Brak nowych commitów",
            new: "nowe wtyczki",
            updated: "zaktualizowane wtyczki",
            settings: "nowe ustawienia"
        },
        toast: {
            already: "Wersja jest już zgodna z repozytorium",
            found: "Znaleziono {{count}} now{{s}} commit{{s}} w repozytorium",
            local: "Repozytorium jest zgodne z Twoją lokalną kopią",
            failed: "Nie udało się pobrać danych z repozytorium :(",
            cleared: "Wszystkie logi zostały wyczyszczone",
            logCleared: "Log został wyczyszczony",
            yourLatest: "Zapisano commity z Twojej ostatniej aktualizacji"
        },
        alert: {
            clear: {
                title: "Wyczyść wszystkie logi",
                body: "Czy na pewno chcesz wyczyścić wszystkie logi? Tej operacji nie można cofnąć.",
                confirm: "Wyczyść wszystko",
                confirmColor: "danger",
                cancel: "Anuluj"
            },
            log: {
                title: "Wyczyść log",
                body: "Czy na pewno chcesz wyczyścić ten log? Tej operacji nie można cofnąć.",
                confirm: "Wyczyść log",
                confirmColor: "danger",
                cancel: "Anuluj"
            }
        },
        newPlugins: "{{count}} now{{s}} wtycz{{ka/ki/ek}}",
        following: "Następujące wtyczki zostały dodane w ostatnich aktualizacjach:",
        more: "+{{count}} więcej wtyczek"
    },

    csp: {
        restart: "Wymagany restart, aby zastosować tę zmianę",
        blocked: {
            resources: "Zablokowane zasoby",
            disallowed: "Niektóre obrazy, style lub czcionki zostały zablokowane, ponieważ pochodzą z niedozwolonych domen.",
            recommended: "Zaleca się przeniesienie ich na GitHub lub Imgur. Możesz jednak zezwolić na te domeny, jeśli w pełni im ufasz.",
            afterAllow: "Po zezwoleniu na domenę musisz całkowicie zamknąć (z paska zadań / menedżera zadań) i zrestartować {{platform}}, aby zastosować zmiany.",
            allow: "Zezwól",
            url: "Zablokowane adresy URL"
        },
        imgur: {
            direct: "Linki Imgur powinny być linkami bezpośrednimi w formacie {{etc}}",
            copy: "Aby uzyskać bezpośredni link, kliknij obrazek prawym przyciskiem myszy i wybierz 'Kopiuj adres obrazu'."
        },
        wants: {
            caller: "{{callerName}} chce zezwolić na połączenia z {{domain}}",
            detail: "Jeśli nie rozpoznajesz i nie ufasz w pełni domenie {{domain}}, powinieneś odrzucić tę prośbę!",
            restart: "Będziesz musiał całkowicie zamknąć i zrestartować {{appName}}, aby zmiany weszły w życie.",
            type: {
                images: "Obrazy",
                styles: "CSS i Motywy",
                fonts: "Czcionki"
            },
            content: "Następujące typy treści będą mogły być ładowane z {{domain}}:",
            understand: "W pełni ufam {{domain}} i rozumiem ryzyko związane z zezwoleniem na połączenia.",
            button: {
                cancel: "Anuluj",
                allow: "Zezwól"
            },
            title: "Uprawnienia hosta"
        }
    },

    themes: {
        title: "Motywy",
        management: "Zarządzanie motywami",
        description: "Dostosuj wygląd Discorda za pomocą motywów. Dodaj lokalne pliki .css lub ładuj motywy bezpośrednio z adresów URL. Motywy z ikoną koła zębatego posiadają ustawienia, które możesz modyfikować.",
        local: "Lokalne motywy",
        new: "NOWE",
        pinned: "Przypięte",
        stylus: "rozszerzenie Stylus",
        bd: "BetterDiscord Themes",
        github: "GitHub",
        download: "Szukasz motywów? Sprawdź {{bd}} lub szukaj na {{github}}. Pobierając z BetterDiscord, kliknij 'Download' i umieść plik .theme.css w swoim folderze motywów.",
        add: "Dodaj",
        reset: "Przywróć ustawienia domyślne",
        notCSS: "To nie jest plik CSS. Pamiętaj, aby użyć linku typu 'raw'!",
        okay: "OK!",
        checking: "Sprawdzanie...",
        valid: "Prawidłowy!",
        upload: "Prześlij motyw",
        openFolder: "Otwórz folder motywów",
        loadMissing: "Załaduj brakujące motywy",
        editQuickCSS: "Edytuj QuickCSS",
        editClient: "Edytuj ClientTheme",
        website: "Otwórz stronę",
        discord: "Serwer Discord",
        downloadTheme: "Pobierz",
        refresh: "Odśwież",
        delete: "Usuń",
        unknown: {
            title: "Nieznany",
            author: "Nieznany autor",
            theme: "Motyw Discorda"
        },
        required: "Następujące wtyczki są wymagane, ale nie są włączone: ",
        homepage: "Strona główna",
        support: "Wsparcie",
        online: {
            title: "Motywy online",
            description: "Ładuj motywy bezpośrednio z adresów URL zamiast plików lokalnych. Motywy online aktualizują się automatycznie, gdy źródło ulegnie zmianie, dzięki czemu zawsze masz najnowszą wersję bez ręcznego pobierania.",
            enable: "Włącz motywy online",
            enableDescription: "Przełącz ładowanie motywów online. Gdy ta opcja jest wyłączona, wszystkie motywy online zostaną wyłączone i nie będzie można dodać nowych."
        },
        quickActions: {
            title: "Szybkie akcje",
            description: "Skróty do zarządzania motywami. Otwórz folder motywów, aby dodać nowe pliki, użyj QuickCSS do szybkich poprawek stylu lub odśwież motywy po wprowadzeniu zmian."
        },
        error: {
            userscript: "Motywy nie są obsługiwane w wersji Userscript!",
            stylus: "Zamiast tego możesz zainstalować motywy za pomocą {{stylus}}!",
            expired: "Nieprawidłowy lub wygasły link",
            text: "Błąd:"
        },
        copy: {
            url: "Kopiuj URL",
            copied: "Skopiowano URL motywu!",
            settings: "Kopiuj ustawienia motywu",
            copiedSettings: "Skopiowano ustawienia motywu do schowka."
        },
        paste: {
            settings: "Wklej ustawienia motywu",
            empty: "Twój schowek jest pusty.",
            invalid: "Twój schowek nie zawiera prawidłowych danych ustawień.",
            pasted: "Wklejono ustawienia motywu ze schowka."
        },
        settings: {
            for: "Ustawienia dla {{themeName}}",
        },
        installed: {
            title: "Zainstalowane motywy",
            description: "Zarządzaj swoimi motywami tutaj. Motywy lokalne są ładowane z folderu, a motywy online z adresów URL. Motywy z ikoną koła zębatego mają konfigurowalne ustawienia.",
            count: "Zainstalowano {{count}} motyw{{s}} ({{localCount}} lokalnych, {{onlineCount}} online) · {{enabledCount}} włączonych",
            search: "Szukaj motywu...",
            loading: "Ładowanie motywów...",
            none: "Brak zainstalowanych motywów. Dodaj pliki do folderu motywów lub dodaj motyw online powyżej, aby zacząć.",
            noCriteria: "Żaden motyw nie spełnia kryteriów wyszukiwania lub filtrowania."
        },
        filter: {
            all: "Pokaż wszystkie",
            online: "Motywy online",
            local: "Motywy lokalne",
            enabled: "Włączone",
            disabled: "Wyłączone"
        },
        notification: {
            refresh: {
                title: "Motyw odświeżony",
                error: "Nie udało się odświeżyć motywu"
            },
            failed: {
                download: "Nie udało się pobrać motywu"
            }
        }
    },

    updater: {
        title: "Updater",
        settings: "Ustawienia aktualizacji",
        updates: "Aktualizacje",
        updated: "został zaktualizowany!",
        restart: "Kliknij tutaj, aby zrestartować",
        repaired: "Plexcord został naprawiony!",
        ok: "OK",
        preferences: {
            title: "Preferencje aktualizacji",
            description: "Kontroluj sposób, w jaki Plexcord dba o swoją aktualność. Możesz wybrać automatyczne aktualizacje w tle lub powiadomienia o dostępności nowej wersji.",
        },
        github: {
            local: "Twoja lokalna kopia posiada nowsze commity niż zdalne repozytorium. Zwykle dzieje się tak, gdy wprowadziłeś lokalne zmiany. Cofnij je lub zapisz (stash) przed aktualizacją."
        },
        error: {
            check: "Nie udało się sprawdzić aktualizacji. Sprawdź konsolę, aby uzyskać więcej informacji",
            occurred: "Wystąpił nieznany błąd",
            retrieve: "Nie udało się pobrać – sprawdź konsolę",
            title: "Ojej!",
            tryAgain: "Wystąpił nieznany błąd. Spróbuj ponownie lub sprawdź konsolę.",
            command: "Nie znaleziono polecenia {{path}}. Zainstaluj je i spróbuj ponownie.",
            code: "Kod błędu: {{code}}. Sprawdź konsolę.",
            running: "Wystąpił błąd podczas uruchamiania {{cmd}}: {{error}}",
            failed: "To również się nie udało :( Spróbuj zaktualizować lub przeinstalować program za pomocą instalatora!"
        },
        available: "Dostępna jest 1 aktualizacja",
        updateAvailable: "Aktualizacja Plexcord jest dostępna!",
        click: "Kliknij tutaj, aby zobaczyć aktualizację",
        available_plural: "Dostępnych jest {{count}} aktualizacji",
        current: "Wersja aktualna!",
        successful: {
            title: "Aktualizacja zakończona sukcesem!",
            body: "Pomyślnie zaktualizowano. Czy chcesz zrestartować teraz, aby zastosować zmiany?",
            button: {
                confirm: "Restartuj",
                cancel: "Nie teraz!",
                update: "Aktualizuj teraz",
                check: "Sprawdź aktualizacje"
            },
            noFound: "Nie znaleziono aktualizacji"
        },
        automatically: {
            label: "Aktualizuj automatycznie",
            description: "Aktualizuj Plexcord automatycznie bez prośby o potwierdzenie"
        },
        notify: {
            label: "Powiadamiaj o zakończeniu automatycznej aktualizacji",
            description: "Pokazuje powiadomienie, gdy Plexcord zaktualizuje się automatycznie"
        },
        repo: "Repozytorium",
        repoDescription: "To jest repozytorium GitHub, z którego Plexcord pobiera aktualizacje.",
        loading: "Ładowanie...",
    },

    components: {
        error: {
            title: "O nie!",
            render: "Wystąpił błąd podczas renderowania tego komponentu. Więcej informacji znajdziesz poniżej oraz w konsoli."
        },
        componentFailed: {
            message: "Ojej! Nie udało się wyrenderować tej strony. Dostępna jest jednak aktualizacja, która może to naprawić. Czy chcesz zaktualizować i zrestartować aplikację?"
        },
        quickCSS: {
            title: "Edytor QuickCSS jest otwarty",
            message: "Edytor QuickCSS nadal działa w tle.",
            detail: "Czy mimo to chcesz zamknąć Discorda? Spowoduje to również zamknięcie edytora QuickCSS.",
            cancel: "Anuluj",
            close: "Zamknij mimo to"
        }
    },

    commands: {
        error: {
            execute: "Wystąpił błąd podczas wykonywania komendy '{{command}}'"
        }
    },

    notifications: {
        dismiss: "Odrzuć powiadomienie",
        noYet: "Brak powiadomień",
        settings: "Ustawienia powiadomień",
        log: {
            title: "Dziennik powiadomień",
            clear: "Wyczyść dziennik powiadomień",
            sure: "Jesteś pewien?",
            permamently: "To spowoduje trwałe usunięcie {{count}} powiadomień. Tej akcji nie można cofnąć.",
            button: {
                confirm: "Zrób to!",
                cancel: "Nieważne"
            }
        }
    },

    memberlist: {
        error: {
            render: "Nie udało się wyrenderować dekoratora listy członków: {{key}}"
        }
    },

    message: {
        accessory: {
            error: {
                render: "Nie udało się wyrenderować akcesorium wiadomości: {{key}}"
            }
        },
        decoration: {
            error: {
                render: "Nie udało się wyrenderować dekoracji wiadomości: {{key}}"
            }
        }
    },

    utils: {
        toast: {
            copied: "Skopiowano do schowka!"
        }
    },

    common: {
        unit: {
            year: "rok",
            years: "lata",
            month: "miesiąc",
            months: "miesiące",
            week: "tydzień",
            weeks: "tygodnie",
            day: "dzień",
            days: "dni",
            hour: "godzina",
            hours: "godziny",
            minute: "minuta",
            minutes: "minuty",
            second: "sekunda",
            seconds: "sekundy",
            ago: "temu",
            s: ""
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Wyłącz śledzenie Discorda (analityka/'science'), metryki oraz raportowanie błędów Sentry",
            option: {
                disableAnalytics: {
                    label: "Wyłącz analitykę",
                    description: "Wyłącz śledzenie Discorda (analityka/'science'), metryki oraz raportowanie błędów Sentry"
                }
            }
        },
        settings: {
            name: "Settings",
            description: "Dodaje interfejs ustawień i informacje debugowania",
            option: {
                language: {
                    label: "Język",
                    description: "Wybierz preferowany język dla Plexcord."
                },
                settingsLocation: {
                    label: "Lokalizacja ustawień",
                    description: "Określa, gdzie będzie znajdować się sekcja ustawień Plexcord."
                }
            }
        },
        supportHelper: {
            name: "Support Helper",
            description: "Pomaga nam udzielać Ci wsparcia",
            commands: {
                description: {
                    debug: "Wyślij informacje debugowania Plexcord",
                    plugins: "Wyślij listę wtyczek Plexcord"
                }
            },
            modals: {
                outdated: {
                    title: "Czekaj chwilę!",
                    body: "Używasz nieaktualnej wersji Plexcord! Prawdopodobnie Twój problem został już rozwiązany.",
                    footer: "Prosimy o aktualizację przed poproszeniem o wsparcie!",
                    button: {
                        cancel: "Wyświetl aktualizacje",
                        confirm: "Aktualizuj i zrestartuj teraz",
                        secondaryConfirm: "Wiem co robię / nie mogę zaktualizować"
                    }
                },
                updater: {
                    title: "Czekaj chwilę!",
                    body: "Używasz wersji Plexcord zaktualizowanej zewnętrznie, dla której nie świadczymy wsparcia!",
                    footer: "Prosimy o przełączenie się na {{officially}} lub skontaktowanie się z opiekunem pakietu w celu uzyskania pomocy.",
                    officially: "oficjalnie wspieraną wersję Plexcord",
                    button: {
                        cancel: "Anuluj",
                        confirm: "Strona pobierania",
                        now: "Aktualizuj teraz"
                    },
                    toast: {
                        success: "Sukces! Restartowanie...",
                        already: "Wersja jest aktualna!",
                        failed: "Aktualizacja nie powiodła się :("
                    }
                },
                custom: {
                    title: "Czekaj chwilę!",
                    header: "Używasz niestandardowej kompilacji Plexcord, dla której nie świadczymy wsparcia!",
                    body: "Wspieramy wyłącznie {{officialBuild}}. Prosimy {{switch}} lub samodzielnie rozwiązać problem.",
                    footer: "Zignorowanie tej zasady spowoduje zablokowanie dostępu do wsparcia.",
                    official: "oficjalne kompilacje",
                    switch: "przełącz się na oficjalną kompilację",
                    button: {
                        confirm: "Zrozumiałem",
                        secondaryConfirm: "Nie pokazuj więcej"
                    }
                }
            },
            button: {
                debug: "Uruchom /plexcord-debug",
                plugins: "Uruchom /plexcord-plugins",
                snippet: "Uruchom snippet"
            },
            toast: {
                success: "Sukces!",
                failed: "Nie udało się uruchomić snippetu :(",
                failedOpenInvite: "Nie udało się otworzyć zaproszenia, sprawdź konsolę :(",
                upload: "Lista wtyczek została pomyślnie przesłana!",
                failedUpload: "Nie udało się przesłać listy wtyczek. Spróbuj ponownie.",
                unableGenerate: "Nie udało się wygenerować listy wtyczek."
            },
            dm: {
                warning: "Prosimy nie wysyłać prywatnych wiadomości do twórców wtyczek Plexcord w celu uzyskania wsparcia!{{br}}Zamiast tego dołącz do serwera {{support}} i skorzystaj z kanału wsparcia: {{channel}}"
            },
            alert: {
                title: "Ostrzeżenie: Duża liczba wtyczek",
                paragraph1: "Masz włączonych ponad 100 wtyczek.",
                paragraph2: "Ze względu na ogromną liczbę wtyczek, możesz nie otrzymać wsparcia.",
                paragraph3: "Twój problem jest prawdopodobnie spowodowany konfliktem wtyczek.",
                paragraph4: "Rozważ wyłączenie niektórych wtyczek w celu rozwiązania problemu.",
                paragraph5: "Twoja lista wtyczek zostanie wysłana jako plik tekstowy.",
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Kliknij prawym przyciskiem myszy na panel konta w lewym dolnym rogu, aby wyświetlić swój profil na bieżącym serwerze",
            option: {
                prioritizeServerProfile: {
                    label: "Priorytetyzuj profil serwera",
                    description: "Priorytetyzuj profil serwera podczas klikania lewym przyciskiem myszy na panel konta"
                }
            },
            context: {
                account: "Zobacz profil konta",
                server: "Zobacz profil serwera",
                prioritize: "Priorytetyzuj profil serwera"
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Sprawia, że przełącznik w oknie tłumienia szumów przełącza między 'Brak' a 'Krisp' zamiast 'Krisp' a 'Standardowy'"
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Animuje wszystko, co może być animowane",
            option: {
                icons: {
                    label: "Ikony",
                    description: "Zawsze animuj ikony serwerów, awatary, dekoracje i inne"
                },
                statusEmojis: {
                    label: "Emoji statusu",
                    description: "Zawsze animuj emoji statusu"
                },
                serverBanners: {
                    label: "Banery serwerów",
                    description: "Zawsze animuj banery serwerów"
                },
                nameplates: {
                    label: "Tabliczki z imionami (Nameplates)",
                    description: "Zawsze animuj tabliczki z imionami"
                },
                roleGradients: {
                    label: "Gradienty ról",
                    description: "Zawsze animuj gradienty ról"
                }
            }
        },
        alwaysExpandProfiles: {
            name: "AlwaysExpandProfiles",
            description: "Zawsze rozwija okienka profilu do pełnego okna modalnego"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Zawsze rozwija listy ról w okienkach profilu",
            option: {
                hideArrow: {
                    label: "Ukryj strzałkę",
                    description: "Ukryj strzałkę"
                }
            }
        },
        animalese: {
            name: "Animalese",
            description: "Odtwarza dźwięki 'Animalese' z Animal Crossing dla każdej wysłanej wiadomości (dużo paplają)",
            option: {
                volume: {
                    label: "Głośność",
                    description: "Głośność dźwięku Animalese"
                },
                speed: {
                    label: "Prędkość",
                    description: "Prędkość dźwięku Animalese"
                },
                pitch: {
                    label: "Tonacja",
                    description: "Mnożnik tonacji"
                },
                messageLengthLimit: {
                    label: "Limit długości wiadomości",
                    description: "Maksymalna długość wiadomości do przetworzenia"
                },
                processOwnMessages: {
                    label: "Przetwarzaj własne wiadomości",
                    description: "Włącz, aby Twoje wiadomości również były 'paplane'"
                },
                soundQuality: {
                    label: "Jakość dźwięku",
                    description: "Jakość używanego dźwięku",
                    high: "Wysoka",
                    med: "Średnia",
                    low: "Niska",
                    lowest: "Najniższa"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Usuwa irytujące wyskakujące okienka o niezaufanych domenach i podejrzanych plikach",
            option: {
                domain: {
                    label: "Domena",
                    description: "Usuń okienko niezaufanej domeny podczas otwierania linków"
                },
                file: {
                    label: "Plik",
                    description: "Usuń okienko 'Potencjalnie niebezpieczne pobieranie' podczas otwierania linków"
                },
                noDeleteSafety: {
                    label: "Brak zabezpieczenia usuwania",
                    description: "Usuwa wymóg wpisywania nazwy serwera podczas jego usuwania"
                },
                confirmModal: {
                    label: "Okno potwierdzenia",
                    description: "Czy powinno być wyświetlane okno 'Czy na pewno chcesz usunąć?'"
                }
            },
            alert: {
                title: "Usunąć serwer?",
                body: "To działanie jest trwałe, jeśli nie było to oczywiste.",
                confirm: "Usuń",
                cancel: "Anuluj"
            }
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Anonimizuj nazwy przesyłanych plików",
            option: {
                anonymiseByDefault: {
                    label: "Anonimizuj domyślnie",
                    description: "Anonimizuj nazwy plików domyślnie. Możesz to wyłączyć w oknie przesyłania w razie potrzeby."
                },
                spoilerMessages: {
                    label: "Wiadomości ze spoilerem",
                    description: "Anonimizuj nazwy plików oznaczonych jako spoilery."
                },
                method: {
                    label: "Metoda",
                    description: "Metoda anonimizacji",
                    random: "Losowe znaki",
                    consistent: "Spójna",
                    timestamp: "Znacznik czasu"
                },
                randomisedLength: {
                    label: "Długość losowa",
                    description: "Długość losowych znaków"
                },
                consistent: {
                    label: "Spójna",
                    description: "Spójny klucz anonimizacji"
                }
            },
            using: {
                anonymous: "Używanie anonimowej nazwy pliku",
                spoiler: "Używanie normalnej nazwy pliku"
            },
            spoiler: {
                description: "Przełącz spoiler dla swoich plików",
                toggle: "Przełącz spoiler dla plików (domyślnie włączone)",
                enabled: "Spoiler włączony!",
                disabled: "Spoiler wyłączony!"
            }
        },
        appleMusic: {
            name: "AppleMusicRichPresence",
            description: "Discord Rich Presence dla Twojego Apple Music!",
            about: "W niestandardowych ciągach formatu aktywności możesz użyć specjalnych tagów! {{name}} zostanie zastąpione nazwą utworu; {{artist}} nazwą wykonawcy; a {{album}} nazwą albumu.",
            button: {
                listen: "Słuchaj w Apple Music",
                songLink: "Zobacz w SongLink"
            },
            option: {
                activityType: {
                    label: "Typ aktywności",
                    description: "Który typ aktywności wyświetlać",
                    listening: "Słucha",
                    playing: "Gra w"
                },
                statusDisplayType: {
                    label: "Typ wyświetlania statusu",
                    description: "Pokaż nazwę utworu / wykonawcy na liście członków",
                    off: "Nie pokazuj (wyświetla ogólny komunikat)",
                    artist: "Pokaż nazwę wykonawcy",
                    track: "Pokaż nazwę utworu"
                },
                refreshInterval: {
                    label: "Częstotliwość odświeżania",
                    description: "Interwał między odświeżeniami aktywności (sekundy)"
                },
                enableTimestamps: {
                    label: "Włącz znaczniki czasu",
                    description: "Czy włączyć czas trwania utworu"
                },
                enableButtons: {
                    label: "Włącz przyciski",
                    description: "Czy włączyć przyciski interakcyjne"
                },
                nameString: {
                    label: "Ciąg nazwy",
                    description: "Format nazwy aktywności"
                },
                detailsString: {
                    label: "Ciąg szczegółów",
                    description: "Format szczegółów aktywności"
                },
                stateString: {
                    label: "Ciąg stanu",
                    description: "Format stanu aktywności"
                },
                largeImageType: {
                    label: "Typ dużego obrazu",
                    description: "Typ dużego obrazu w aktywności",
                    album: "Okładka albumu",
                    artist: "Grafika wykonawcy",
                    disabled: "Wyłączone"
                },
                largeTextString: {
                    label: "Ciąg dużego tekstu",
                    description: "Format tekstu dla dużego obrazu"
                },
                smallImageType: {
                    label: "Typ małego obrazu",
                    description: "Typ małego obrazu w aktywności",
                    album: "Logo Apple Music",
                    artist: "Grafika wykonawcy",
                    disabled: "Wyłączone"
                },
                smallTextString: {
                    label: "Ciąg małego tekstu",
                    description: "Format tekstu dla małego obrazu"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence(arRPC)",
            description: "Wtyczka kliencka dla arRPC, aby umożliwić RPC na Discord Web (eksperymentalne)",
            use: {
                title: "Jak używać arRPC",
                enable: "{{link}}, aby uruchomić serwer, a następnie włącz wtyczkę.",
                link: "Postępuj zgodnie z instrukcjami w repozytorium GitHub"
            },
            toast: {
                connected: "Połączono z arRPC",
                failed: "Nie udało się połączyć z arRPC, czy jest uruchomione?",
                retry: "Ponów"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "Dzięki @someone możesz wspomnieć losową osobę"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Automatycznie aktualizuje Twój status online (dostępny, zaraz wracam, nie przeszkadzać) podczas uruchamiania gier",
            option: {
                statusToSet: {
                    label: "Status do ustawienia",
                    description: "Status ustawiany po uruchomieniu gry",
                    online: "Dostępny",
                    dnd: "Nie przeszkadzać",
                    idle: "Zaraz wracam",
                    invisible: "Niewidoczny"
                },
                excludeInvisible: {
                    label: "Wyklucz niewidoczny",
                    description: "Zapobiegaj automatycznym zmianom statusu, gdy Twój status jest ustawiony na niewidoczny"
                }
            }
        },
        autoZipper: {
            name: "AutoZipper",
            description: "Automatycznie pakuje (ZIP) określone typy plików i foldery przed przesłaniem ich na Discord",
            option: {
                extensions: {
                    label: "Rozszerzenia",
                    description: "Lista rozszerzeń oddzielonych przecinkami do automatycznego pakowania (np. .psd,.blend,.exe,.dmg)"
                }
            }
        },
        bannersEverywhere: {
            name: "BannersEverywhere",
            description: "Wyświetla banery na liście członków",
            option: {
                animate: {
                    label: "Animuj",
                    description: "Animuj baner"
                },
                preferNameplate: {
                    label: "Preferuj tabliczkę",
                    description: "Preferuj tabliczkę (nameplate) zamiast banera"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Pokazuje ikony aktywności na liście członków i pozwala wyświetlać wszystkie aktywności",
            option: {
                memberList: {
                    label: "Lista członków",
                    description: "Pokaż ikony aktywności na liście członków"
                },
                iconSize: {
                    label: "Rozmiar ikon",
                    description: "Rozmiar ikon aktywności"
                },
                specialFirst: {
                    label: "Specjalne jako pierwsze",
                    description: "Pokazuj specjalne aktywności jako pierwsze (obecnie Spotify i Twitch)"
                },
                renderGifs: {
                    label: "Renderuj GIF-y",
                    description: "Zezwalaj na renderowanie GIF-ów"
                },
                removeGameActivityStatus: {
                    label: "Usuń status 'Aktywność w grze'",
                    description: "Usuń ikonę i status aktywności w grze"
                },
                userPopout: {
                    label: "Okienko użytkownika",
                    description: "Pokaż wszystkie aktywności w okienku profilu/pasku bocznym"
                },
                hideTooltip: {
                    label: "Ukryj podpowiedź",
                    description: "Ukrywa aktywności w różnych miejscach"
                },
                allActivitiesStyle: {
                    label: "Styl wszystkich aktywności",
                    description: "Styl wyświetlania wszystkich aktywności",
                    list: "Lista",
                    carousel: "Karuzela",
                    left: "Lewo",
                    right: "Prawo"
                }
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Dodaje wizualizację spektrografu i oscyloskopu do odtwarzaczy plików audio",
            option: {
                oscilloscope: {
                    label: "Oscyloskop",
                    description: "Włącz wizualizację oscyloskopu"
                },
                spectrograph: {
                    label: "Spektrograf",
                    description: "Włącz wizualizację spektrografu"
                },
                oscilloscopeSolidColor: {
                    label: "Jednolity kolor oscyloskopu",
                    description: "Użyj jednolitego koloru dla oscyloskopu zamiast gradientu"
                },
                oscilloscopeColor: {
                    label: "Kolor oscyloskopu",
                    description: "Kolor oscyloskopu, gdy jednolity kolor jest włączony"
                },
                spectrographSolidColor: {
                    label: "Jednolity kolor spektrografu",
                    description: "Użyj jednolitego koloru dla spektrografu zamiast gradientu"
                },
                spectrographColor: {
                    label: "Kolor spektrografu",
                    description: "Kolor spektrografu, gdy jednolity kolor jest włączony"
                },
                forceMoveBelow: {
                    label: "Wymuś przeniesienie pod spód",
                    description: "Wymuś wyświetlanie wizualizacji poniżej kontrolek audio"
                }
            },
            toast: {
                invalidColorFormat: "Nieprawidłowy format koloru dla {{settingKey}}, upewnij się, że jest w formacie 'R, G, B' lub '#RRGGBB'"
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Twórz niestandardowe powody do użycia w oknie banowania Discorda i/lub pokazuj domyślnie pole tekstowe zamiast opcji wyboru.",
            option: {
                reasons: {
                    label: "Powody",
                    description: "Twoje niestandardowe powody"
                },
                isTextInputDefault: {
                    label: "Pole tekstowe jako domyślne",
                    description: "Pokazuje pole tekstowe zamiast menu wyboru domyślnie. (Równoważne z kliknięciem opcji 'Inne')"
                }
            },
            title: "Powody",
            placeholder: "Powód",
            add: "Dodaj kolejny powód"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Umożliwia przeszukiwanie listy zablokowanych użytkowników i sprawia, że nazwy w ustawieniach można zaznaczać.",
            placeholder: "Szukaj użytkowników..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Ulepsza system komend o różne usprawnienia.",
            option: {
                autoFillArguments: {
                    label: "Automatyczne wypełnianie argumentów",
                    description: "Automatycznie wypełnia komendę wszystkimi argumentami zamiast tylko wymaganymi"
                },
                allowNewlinesInCommands: {
                    label: "Zezwalaj na nowe linie w komendach",
                    description: "Zezwalaj na nowe linie w polach wprowadzania komend (CTRL + Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Odświeża komendy aplikacji Discord lokalnie",
                    user: "konkretny użytkownik do odświeżenia",
                    refreshing: "Odświeżanie komend aplikacji...",
                    refreshed: "Komendy odświeżone pomyślnie!",
                    failed: "Nie udało się odświeżyć komend. Sprawdź konsolę, aby uzyskać szczegóły."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Pokazuje foldery serwerów na dedykowanym pasku bocznym i dodaje usprawnienia związane z folderami",
            option: {
                sidebar: {
                    label: "Pasek boczny",
                    description: "Wyświetlaj serwery z folderu na dedykowanym pasku bocznym"
                },
                sidebarAnim: {
                    label: "Animacja paska bocznego",
                    description: "Animuj otwieranie paska bocznego folderów"
                },
                closeAllFolders: {
                    label: "Zamknij wszystkie foldery",
                    description: "Zamyka wszystkie foldery po wybraniu serwera, który nie jest w folderze"
                },
                closeAllHomeButton: {
                    label: "Przycisk Home zamyka wszystko",
                    description: "Zamyka wszystkie foldery po kliknięciu przycisku głównego (Home)"
                },
                closeOthers: {
                    label: "Zamknij inne",
                    description: "Zamyka inne foldery podczas otwierania nowego folderu"
                },
                closeServerFolder: {
                    label: "Zamknij folder serwera",
                    description: "Zamyka folder po wybraniu serwera znajdującego się w tym folderie"
                },
                forceOpen: {
                    label: "Wymuś otwarcie",
                    description: "Wymusza otwarcie folderu podczas przełączania się na serwer z tego folderu"
                },
                keepIcons: {
                    label: "Zachowaj ikony",
                    description: "Zachowaj wyświetlanie ikon serwerów w głównym pasku, gdy folder jest otwarty w pasku bocznym BetterFolders"
                },
                showFolderIcon: {
                    label: "Pokaż ikonę folderu",
                    description: "Pokazuje ikonę folderu nad serwerami w pasku bocznym BetterFolders",
                    never: "Nigdy",
                    always: "Zawsze",
                    moreThanOne: "Gdy rozwinięty jest więcej niż jeden folder"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "Zmienia tekst alternatywny GIF-ów z prostego 'GIF' na taki, który zawiera tagi lub nazwę pliku"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "Sprawia, że wybieracz GIF-ów domyślnie otwiera kategorię ulubionych",
            option: {
                keepOpen: {
                    label: "Pozostaw otwarte",
                    description: "Pozostawia wybieracz GIF-ów otwarty po wybraniu GIF-a"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Zobacz datę wygaśnięcia zaproszenia, profil zapraszającego i podglądaj serwery przed dołączeniem, klikając nazwę",
            render: {
                tip: "To zaproszenie wygaśnie {{time}}",
                header: "{{name}} zaprosił Cię do {{server}}",
                never: "nigdy nie wygaśnie"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Ukryj notatki lub wyłącz sprawdzanie pisowni (Skonfiguruj w ustawieniach!!)",
            option: {
                hide: {
                    label: "Ukryj notatki",
                    description: "Ukryj pole notatek w okienkach użytkownika"
                },
                noSpellCheck: {
                    label: "Brak sprawdzania pisowni",
                    description: "Wyłącz sprawdzanie pisowni w notatkach"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: "Liczba plusów przed :emoji: określa wiadomość, do której ma zostać dodana reakcja"
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Dodaje opcje kopiowania koloru roli / edycji roli / wyświetlania ikony roli po kliknięciu prawym przyciskiem myszy na role w profilu",
            option: {
                roleIconFileFormat: {
                    label: "Format pliku ikony roli",
                    description: "Format pliku używany podczas wyświetlania ikon ról"
                }
            },
            context: {
                copyColor: "Kopiuj kolor roli",
                editRole: "Edytuj rolę",
                viewIcon: "Zobacz ikonę roli"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "Kopiuj kolor roli po kliknięciu na kropkę roli (ustawienie dostępności). Pozwala również na jednoczesne używanie kropki roli i kolorowych nazw.",
            option: {
                bothStyles: {
                    label: "Oba style",
                    description: "Pokaż zarówno kropkę roli, jak i kolorowe nazwy"
                },
                copyRoleColorInProfilePopout: {
                    label: "Kopiuj kolor roli w okienku profilu",
                    description: "Pozwala na kliknięcie kropki roli w okienku profilu, aby skopiować jej kolor"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Ulepsza menu sesji (urządzeń). Pozwala na wyświetlanie dokładnych znaczników czasu, nadawanie własnych nazw sesjom i otrzymywanie powiadomień o nowych sesjach.",
            new: "NOWE",
            newSessions: "Nowe sesje:",
            rename: "Zmień nazwę",
            newDevice: "Nowa nazwa urządzenia",
            resetName: "Resetuj nazwę",
            save: "Zapisz",
            cancel: "Anuluj",
            option: {
                backgroundCheck: {
                    label: "Sprawdzanie w tle",
                    description: "Sprawdzaj nowe sesje w tle i wyświetlaj powiadomienia po ich wykryciu"
                },
                checkInterval: {
                    label: "Interwał sprawdzania",
                    description: "Jak często sprawdzać nowe sesje w tle (jeśli włączone), w minutach"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Ulepsza Twoje doświadczenia z otwieraniem menu ustawień",
            option: {
                disableFade: {
                    label: "Wyłącz przenikanie",
                    description: "Wyłącz animację płynnego przechodzenia (crossfade)"
                },
                organizeMenu: {
                    label: "Organizuj menu",
                    description: "Organizuje menu kontekstowe zębatki ustawień w kategorie"
                },
                eagerLoad: {
                    label: "Szybkie ładowanie (Eager Load)",
                    description: "Usuwa opóźnienie ładowania podczas otwierania menu po raz pierwszy"
                }
            },
            alert: {
                title: "Wymagany restart",
                restart: "Zmieniłeś ustawienia, które wymagają restartu.",
                confirm: "Restartuj teraz",
                cancel: "Później!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Przesyłaj pliki jednym kliknięciem, otwórz menu prawym przyciskiem myszy"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Ta wtyczka pozwala na powiększenie podglądu strumienia (streamu)",
            context: {
                viewPreview: "Zobacz podgląd strumienia"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Blokuje wiadomości zawierające określone słowa kluczowe, tak jakby wysyłający je użytkownik był zablokowany.",
            option: {
                blockedWords: {
                    label: "Zablokowane słowa",
                    description: "Lista słów do zablokowania oddzielonych przecinkami"
                },
                useRegex: {
                    label: "Użyj Regex",
                    description: "Traktuj każdą wartość jako wyrażenie regularne podczas sprawdzania treści (zaawansowane)"
                },
                caseSensitive: {
                    label: "Uwzględniaj wielkość liter",
                    description: "Czy wyszukiwanie powinno uwzględniać wielkość liter"
                },
                ignoreBlockedMessages: {
                    label: "Ignoruj zablokowane wiadomości",
                    description: "Całkowicie ignoruje pasek nowych wiadomości dla zablokowanych treści"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Zapobiega ładowaniu Krisp"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "Rozmywa załączniki na kanałach NSFW do momentu najechania na nie kursorem",
            option: {
                blurAmount: {
                    label: "Stopień rozmycia",
                    description: "Stopień rozmycia (w pikselach)"
                },
                blurAllChannels: {
                    label: "Rozmywaj wszystkie kanały",
                    description: "Rozmywaj załączniki na wszystkich kanałach (nie tylko NSFW)"
                }
            }
        },
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Pomija zapytanie o potwierdzenie podczas używania funkcji przypinania"
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Nadal otrzymuj powiadomienia z określonych źródeł, gdy jesteś w trybie 'Nie przeszkadzać'. Kliknij prawym przyciskiem na użytkowników/kanały/serwery, aby ustawić ominięcie trybu DND.",
            context: {
                remove: "Usuń ominięcie statusu",
                add: "Dodaj ominięcie statusu"
            },
            option: {
                guilds: {
                    label: "Serwery",
                    description: "Serwery, które mają omijać DND (powiadomienie przy wzmiance gdziekolwiek na serwerze)",
                    placeholder: "Oddziel przecinkami"
                },
                channels: {
                    label: "Kanały",
                    description: "Kanały, które mają omijać DND (powiadomienie przy wzmiance na tym kanale)",
                    placeholder: "Oddziel przecinkami"
                },
                users: {
                    label: "Użytkownicy",
                    description: "Użytkownicy, którzy mają omijać DND (powiadomienie o wszystkich wiadomościach w DM)",
                    placeholder: "Oddziel przecinkami"
                },
                allowOutsideOfDms: {
                    label: "Zezwalaj poza DM",
                    description: "Pozwala wybranym użytkownikom omijać status również poza wiadomościami prywatnymi (działa jak ominięcie kanału/serwera dla wszystkich wiadomości wysłanych przez tych użytkowników)"
                },
                notificationSound: {
                    label: "Dźwięk powiadomienia",
                    description: "Czy dźwięk powiadomienia powinien być odtwarzany"
                },
                respectSilentPings: {
                    label: "Respektuj ciche wzmianki",
                    description: "Respektuj ciche wzmianki (@silent / wyciszone powiadomienia)"
                },
                statusToUse: {
                    label: "Status do użycia",
                    description: "Status używany dla białej listy",
                    online: "Dostępny",
                    idle: "Zaraz wracam",
                    dnd: "Nie przeszkadzać",
                    invisible: "Niewidoczny"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Śledź i wyświetlaj urodziny użytkowników za pomocą ikon tortu",
            context: {
                label: "Urodziny",
                setBirthday: "Ustaw urodziny",
                clearBirthday: "Usuń urodziny",
                current: "Obecne:"
            },
            option: {
                chat: {
                    label: "Czat",
                    description: "Pokaż ikony tortu obok nazw użytkowników na czacie"
                },
                memberList: {
                    label: "Lista członków",
                    description: "Pokaż ikony tortu na liście członków"
                },
                profileBadge: {
                    label: "Odznaka profilu",
                    description: "Pokaż odznakę tortu w profilu użytkownika"
                },
                notificationSound: {
                    label: "Dźwięk powiadomienia",
                    description: "Odtwórz dźwięk, gdy wysyłane jest powiadomienie o urodzinach"
                },
                userList: {
                    label: "Zapisane urodziny",
                    description: "Zarządzaj zapisanymi urodzinami"
                }
            },
            locations: {
                chat: {
                    label: "Czat",
                    description: "obok nazw użytkowników na czacie"
                },
                memberList: {
                    label: "Lista członków",
                    description: "na liście członków"
                }
            },
            toast: {
                success: "Pomyślnie ustawiono urodziny!",
                invalid: "Nieprawidłowy format daty! Akceptowany jest tylko DD/MM.",
                cleared: "Pomyślnie usunięto urodziny!"
            },
            notification: {
                title: "🎂 Dzisiaj są urodziny!",
                body: "Dzisiaj są urodziny użytkownika {{username}}!"
            },
            modal: {
                title: "Ustaw urodziny dla {{username}}",
                description: "Wprowadź datę urodzin w formacie DD/MM (np. 25/12)",
                placeholder: "np. 25/12",
                current: "Obecna data urodzin:",
                set: "Ustaw urodziny",
                cancel: "Anuluj",
                birthday: "Dzisiaj są moje urodziny! 🎂",
                saved: "Zapisane urodziny",
                savedDesc: "Nie zapisano jeszcze żadnych urodzin. Kliknij prawym przyciskiem myszy na użytkowników, aby dodać ich urodziny!",
                today: "Dzisiaj",
                remove: "Usuń",
                loading: "Ładowanie...",
                save: "Zapisz",
                edit: "Edytuj"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Pokazuje licznik czasu we wszystkich połączeniach głosowych",
            option: {
                format: {
                    label: "Format",
                    description: "Format kompaktowy lub czytelny dla człowieka",
                    human: "30d 23h 00m 42s"
                },
                allCallTimers: {
                    label: "Wszystkie liczniki połączeń",
                    description: "Pokaż liczniki połączeń dla wszystkich użytkowników na serwerach"
                },
                showWithoutHover: {
                    label: "Pokazuj bez najechania",
                    description: "Zawsze pokazuj licznik bez konieczności najeżdżania kursorem"
                },
                showRoleColor: {
                    label: "Pokaż kolor roli",
                    description: "Wyświetlaj w kolorze roli użytkownika (jeśli wtyczka ShowRoleColor jest włączona)"
                },
                trackSelf: {
                    label: "Śledź siebie",
                    description: "Pokazuj również własny licznik czasu"
                },
                showSeconds: {
                    label: "Pokaż sekundy",
                    description: "Wyświetlaj sekundy w liczniku"
                },
                watchLargeGuilds: {
                    label: "Obserwuj duże serwery",
                    description: "Śledź użytkowników na dużych serwerach. Może to powodować opóźnienia, jeśli należysz do wielu dużych serwerów z aktywnymi użytkownikami głosowymi."
                },
                fixUI: {
                    label: "Naprawa interfejsu",
                    description: "W niektórych przypadkach licznik może psuć interfejs. Włącz tę opcję, aby to naprawić."
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Dodaje odznaki do kanałów na podstawie ich typu",
            badge: {
                private: "Ten kanał jest zablokowany.",
                nsfw: "Ten kanał jest oznaczony jako NSFW.",
                rules: "To jest kanał z regulaminem serwera."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Jedna odznaka na kanał",
                    description: "Pokazuj tylko jedną odznakę na kanał"
                },
                showTextBadge: {
                    label: "Pokaż odznakę tekstową",
                    description: "Pokaż odznakę 'Tekstowy'"
                },
                showVoiceBadge: {
                    label: "Pokaż odznakę głosową",
                    description: "Pokaż odznakę 'Głosowy'"
                },
                showCategoryBadge: {
                    label: "Pokaż odznakę kategorii",
                    description: "Pokaż odznakę 'Kategoria'"
                },
                showDirectoryBadge: {
                    label: "Pokaż odznakę katalogu",
                    description: "Pokaż odznakę 'Katalog'"
                },
                showAnnouncementThreadBadge: {
                    label: "Pokaż odznakę wątku ogłoszeniowego",
                    description: "Pokaż odznakę wątku ogłoszeniowego"
                },
                showPublicThreadBadge: {
                    label: "Pokaż odznakę wątku publicznego",
                    description: "Pokaż odznakę wątku publicznego"
                },
                showPrivateThreadBadge: {
                    label: "Pokaż odznakę wątku prywatnego",
                    description: "Pokaż odznakę wątku prywatnego"
                },
                showStageBadge: {
                    label: "Pokaż odznakę sceny",
                    description: "Pokaż odznakę 'Scena'"
                },
                showAnnouncementBadge: {
                    label: "Pokaż odznakę ogłoszeń",
                    description: "Pokaż odznakę 'Ogłoszenia'"
                },
                showForumBadge: {
                    label: "Pokaż odznakę forum",
                    description: "Pokaż odznakę 'Forum'"
                },
                showMediaBadge: {
                    label: "Pokaż odznakę mediów",
                    description: "Pokaż odznakę 'Media'"
                },
                showNSFWBadge: {
                    label: "Pokaż odznakę NSFW",
                    description: "Pokaż odznakę 'NSFW'"
                },
                showLockedBadge: {
                    label: "Pokaż odznakę blokady",
                    description: "Pokaż odznakę 'Zablokowany'"
                },
                showRulesBadge: {
                    label: "Pokaż odznakę regulaminu",
                    description: "Pokaż odznakę 'Regulamin'"
                },
                showUnknownBadge: {
                    label: "Pokaż nieznaną odznakę",
                    description: "Pokaż odznakę nieznanego typu"
                },
                textBadgeLabel: {
                    label: "Etykieta odznaki tekstowej",
                    description: "Etykieta dla kanałów tekstowych",
                    default: "Tekst"
                },
                voiceBadgeLabel: {
                    label: "Etykieta odznaki głosowej",
                    description: "Etykieta dla kanałów głosowych",
                    default: "Głos"
                },
                categoryBadgeLabel: {
                    label: "Etykieta odznaki kategorii",
                    description: "Etykieta dla kategorii",
                    default: "Kategoria"
                },
                announcementBadgeLabel: {
                    label: "Etykieta odznaki ogłoszeń",
                    description: "Etykieta dla kanałów z newsami",
                    default: "Newsy"
                },
                announcementThreadBadgeLabel: {
                    label: "Etykieta odznaki wątku ogłoszeniowego",
                    description: "Etykieta dla wątków ogłoszeniowych",
                    default: "Wątek News"
                },
                publicThreadBadgeLabel: {
                    label: "Etykieta odznaki wątku publicznego",
                    description: "Etykieta dla wątków publicznych",
                    default: "Wątek"
                },
                privateThreadBadgeLabel: {
                    label: "Etykieta odznaki wątku prywatnego",
                    description: "Etykieta dla wątków prywatnych",
                    default: "Wątek Prywatny"
                },
                stageBadgeLabel: {
                    label: "Etykieta odznaki sceny",
                    description: "Etykieta dla kanałów sceny",
                    default: "Scena"
                },
                directoryBadgeLabel: {
                    label: "Etykieta odznaki katalogu",
                    description: "Etykieta dla katalogów",
                    default: "Katalog"
                },
                forumBadgeLabel: {
                    label: "Etykieta odznaki forum",
                    description: "Etykieta dla kanałów forum",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Etykieta odznaki mediów",
                    description: "Etykieta dla kanałów mediów",
                    default: "Media"
                },
                nsfwBadgeLabel: {
                    label: "Etykieta odznaki NSFW",
                    description: "Etykieta dla kanałów NSFW",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Etykieta odznaki blokady",
                    description: "Etykieta dla zablokowanych kanałów",
                    default: "Zablokowany"
                },
                rulesBadgeLabel: {
                    label: "Etykieta odznaki regulaminu",
                    description: "Etykieta dla kanałów z zasadami",
                    default: "Zasady"
                },
                unknownBadgeLabel: {
                    label: "Etykieta nieznanej odznaki",
                    description: "Etykieta dla nieznanych typów",
                    default: "Nieznany"
                },
                textBadgeColor: {
                    label: "Kolor odznaki tekstowej",
                    description: "Kolor odznaki tekstowej"
                },
                voiceBadgeColor: {
                    label: "Kolor odznaki głosowej",
                    description: "Kolor odznaki głosowej"
                },
                categoryBadgeColor: {
                    label: "Kolor odznaki kategorii",
                    description: "Kolor odznaki kategorii"
                },
                announcementBadgeColor: {
                    label: "Kolor odznaki ogłoszeń",
                    description: "Kolor odznaki ogłoszeń"
                },
                announcementThreadBadgeColor: {
                    label: "Kolor odznaki wątku ogłoszeniowego",
                    description: "Kolor odznaki wątku ogłoszeniowego"
                },
                publicThreadBadgeColor: {
                    label: "Kolor odznaki wątku publicznego",
                    description: "Kolor odznaki wątku publicznego"
                },
                privateThreadBadgeColor: {
                    label: "Kolor odznaki wątku prywatnego",
                    description: "Kolor odznaki wątku prywatnego"
                },
                stageBadgeColor: {
                    label: "Kolor odznaki sceny",
                    description: "Kolor odznaki sceny"
                },
                directoryBadgeColor: {
                    label: "Kolor odznaki katalogu",
                    description: "Kolor odznaki katalogu"
                },
                forumBadgeColor: {
                    label: "Kolor odznaki forum",
                    description: "Kolor odznaki forum"
                },
                mediaBadgeColor: {
                    label: "Kolor odznaki mediów",
                    description: "Kolor odznaki mediów"
                },
                nsfwBadgeColor: {
                    label: "Kolor odznaki NSFW",
                    description: "Kolor odznaki NSFW"
                },
                lockedBadgeColor: {
                    label: "Kolor odznaki blokady",
                    description: "Kolor odznaki blokady"
                },
                rulesBadgeColor: {
                    label: "Kolor odznaki regulaminu",
                    description: "Kolor odznaki regulaminu"
                },
                unknownBadgeColor: {
                    label: "Kolor nieznanej odznaki",
                    description: "Kolor nieznanej odznaki"
                }
            },
            badges: {
                text: "Tekst",
                voice: "Głos",
                category: "Kategoria",
                announcement: "Newsy",
                announcementThread: "Wątek News",
                publicThread: "Wątek",
                privateThread: "Wątek Prywatny",
                stage: "Scena",
                directory: "Katalog",
                forum: "Forum",
                media: "Media",
                nsfw: "NSFW",
                locked: "Zablokowany",
                rules: "Zasady",
                unknown: "Nieznany"
            },
            tooltip: {
                locked: "Ten kanał jest zablokowany.",
                nsfw: "Ten kanał jest oznaczony jako NSFW."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Grupuj często odwiedzane kanały w kartach, podobnie jak w przeglądarce",
            open: "Otwórz w nowej karcie",
            animation: {
                title: "Kontrola animacji",
                description: "Włącz lub wyłącz określone animacje dla kart kanałów. Każdą opcję można przełączać niezależnie.",
                placeholder: "Wybierz animacje do włączenia...",
                tabHover: "Efekty najechania (uniesienie + skala)",
                tabSelection: "Animacja uniesienia wybranej karty",
                tabDragDrop: "Przeciąganie i upuszczanie (duch + zmiana kolejności)",
                tabEnterExit: "Slajdy wejścia/wyjścia (tworzenie + zamykanie)",
                tabIconPop: "Powiększenie ikony przy wyborze",
                closeRotation: "Obrót przycisku zamykania",
                plusPulse: "Pulsowanie przycisku plus",
                mentionGlow: "Poświata plakietki wzmianki",
                compactExpand: "Rozszerzanie w trybie kompaktowym",
                selectedBorder: "Niebieska ramka wybranej karty",
                selectedBackground: "Kolor tła wybranej karty",
                tabShadows: "Efekty cienia kart",
                tabRepositioning: "Płynna zmiana pozycji kart",
                resizeHandle: "Zanikanie uchwytu zmiany rozmiaru",
                questActivate: "Gradient aktywnych zadań (Quests)"
            },
            bookmark: {
                label: "Zakładka",
                unknown: "Nieznany użytkownik",
                folder: "Folder",
                add: "Dodaj do zakładek",
                edit: "Edytuj zakładkę",
                delete: "Usuń zakładkę",
                remove: "Usuń z zakładek",
                removeFolder: "Usuń zakładkę z folderu",
                loading: "Ładowanie zakładek...",
                noBookmarks: "Nie masz zakładek. Możesz dodać otwartą kartę lub ukryć to pole klikając prawym przyciskiem",
                quests: "Zadania",
                messageRequests: "Prośby o wiadomość",
                friends: "Znajomi",
                shop: "Sklep",
                library: "Biblioteka",
                discovery: "Odkrywaj",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Aktywność",
                specialPage: "Strona specjalna",
                searchPlaceholder: "Szukaj zakładek"
            },
            button: {
                save: "Zapisz",
                delete: "Usuń",
                cancel: "Anuluj",
                reset: "Resetuj",
                close: "Zamknij"
            },
            context: {
                label: "Menu kontekstowe ChannelTabs",
                bookmark: "Menu zakładki ChannelTabs",
                tab: "Menu karty ChannelTabs",
                folderMenu: "Menu folderu zakładek",
                compact: "Kompaktowy",
                bookmarkBar: "Pasek zakładek",
                openAll: "Otwórz wszystko w zakładkach",
                openNew: "Otwórz w nowej karcie",
                close: {
                    tab: "Zamknij kartę",
                    otherTabs: "Zamknij inne karty",
                    tabsToRight: "Zamknij karty po prawej",
                    tabsToLeft: "Zamknij karty po lewej",
                    reopen: "Otwórz ponownie zamkniętą kartę",
                    allTabs: "Zamknij wszystkie karty"
                }
            },
            error: {
                noLogin: "Brak zalogowanego konta?"
            },
            modal: {
                add: {
                    title: "Dodaj zakładkę do folderu",
                    select: "Wybierz folder",
                    create: "Utwórz nowy"
                },
                edit: {
                    title: "Edytuj zakładkę",
                    name: "Nazwa zakładki",
                    folder: "Kolor folderu"
                },
                delete: {
                    title: "Czy na pewno?",
                    description: "Usunięcie folderu zakładek spowoduje również usunięcie wszystkich zakładek wewnątrz niego."
                },
                folderIcon: {
                    title: "Wybierz Ikonę Folderu",
                    preview: "Podgląd",
                    iconColor: "Kolor Ikony",
                    search: "Szukaj",
                    searchPlaceholder: "Przeszukaj {{count}} ikon...",
                    folderName: "Nazwa Folderu",
                    folderColor: "Kolor Folderu",
                    folderIcon: "Ikona Folderu",
                    chooseIcon: "Wybierz Ikonę",
                    useDefaultIcon: "Użyj Domyślnej Ikony"
                }
            },
            option: {
                onStartup: {
                    label: "Przy uruchamianiu",
                    description: "Co zrobić z kartami po uruchomieniu programu",
                    nothing: "Nic (otwórz na karcie znajomych)",
                    remember: "Zapamiętaj karty z ostatniej sesji",
                    open: "Otwórz określony zestaw kart"
                },
                tabSet: {
                    label: "Zestaw kart"
                },
                noPomeloNames: {
                    label: "Brak nazw Pomelo",
                    description: "Używaj nazw wyświetlanych zamiast nazw użytkownika w PW"
                },
                showStatusIndicators: {
                    label: "Pokaż wskaźniki statusu",
                    description: "Pokaż wskaźniki statusu w PW"
                },
                showBookmarkBar: {
                    label: "Pokaż pasek zakładek"
                },
                persistUnreadCountFallback: {
                    label: "Zachowaj zapas liczby nieprzeczytanych",
                    description: "Zachowuj zapasowe wartości odznak nieprzeczytanych między przeładowaniami dla kart i zakładek"
                },
                bookmarkNotificationDot: {
                    label: "Kropka powiadomienia zakładek",
                    description: "Pokaż kropkę powiadomienia dla zakładek"
                },
                widerTabsAndBookmarks: {
                    label: "Szersze karty i zakładki",
                    description: "Zwiększ długość kart i zakładek dla większych monitorów"
                },
                tabWidthScale: {
                    label: "Skala szerokości karty",
                    description: "Skala szerokości karty (procentowa) - regulowana przez przeciąganie krawędzi"
                },
                renderAllTabs: {
                    label: "Renderuj wszystkie karty",
                    description: "Trzymaj wszystkie karty w pamięci podręcznej dla szybszego przełączania"
                },
                switchToExistingTab: {
                    label: "Przełącz do istniejącej karty",
                    description: "Przełącz do karty, jeśli już istnieje dla kanału, do którego nawigujesz"
                },
                createNewTabIfNotExists: {
                    label: "Utwórz nową kartę, jeśli nie istnieje",
                    description: "Utwórz nową kartę, jeśli nie ma żadnej dla kanału, do którego nawigujesz"
                },
                enableRapidNavigation: {
                    label: "Włącz szybką nawigację",
                    description: "Szybkie przełączanie między kanałami zastąpi obecną kartę zamiast tworzyć nowe"
                },
                rapidNavigationThreshold: {
                    label: "Próg szybkiej nawigacji",
                    description: "Okno czasowe (w ms) dla szybkiej nawigacji."
                },
                tabBarPosition: {
                    label: "Pozycja paska kart",
                    description: "Pozycja paska kart",
                    top: "Góra",
                    bottom: "Dół"
                },
                enableNumberKeySwitching: {
                    label: "Przełączanie klawiszami numerycznymi",
                    description: "Używaj klawiszy (1-9) do przełączania kart"
                },
                numberKeySwitchCount: {
                    label: "Liczba kart dla klawiszy numerycznych",
                    description: "Liczba kart dostępnych przez klawisze 1-9"
                },
                enableCloseTabShortcut: {
                    label: "Skrót zamykania karty",
                    description: "Włącz skrót klawiszowy do zamykania karty"
                },
                enableNewTabShortcut: {
                    label: "Skrót nowej karty",
                    description: "Włącz skrót klawiszowy do otwierania nowej karty"
                },
                enableTabCycleShortcut: {
                    label: "Skrót cyklu kart",
                    description: "Włącz skrót klawiszowy do przełączania się między kartami"
                },
                closeTabKeybind: {
                    label: "Skrót zamykania karty",
                    description: "Skrót klawiszowy do zamykania obecnej karty"
                },
                newTabKeybind: {
                    label: "Skrót nowej karty",
                    description: "Skrót klawiszowy do otwierania nowej karty"
                },
                cycleTabForwardKeybind: {
                    label: "Skrót cyklu w przód",
                    description: "Skrót klawiszowy do przełączenia na następną kartę"
                },
                cycleTabBackwardKeybind: {
                    label: "Skrót cyklu w tył",
                    description: "Skrót klawiszowy do przełączenia na poprzednią kartę"
                },
                keybindsSection: {
                    label: "Skróty klawiszowe",
                    description: "Skonfiguruj niestandardowe kombinacje klawiszy.",
                    title: "Skróty klawiszowe",
                    reset: "Resetuj wszystko",
                    shortcutDisabled: "Ten skrót jest obecnie wyłączony",
                    pressKey: "Naciśnij dowolny klawisz...",
                    conflictError: "Ten skrót jest już używany przez: {{key}}",
                    closeTab: {
                        label: "Zamknij kartę",
                        description: "Zamknij aktywną kartę"
                    },
                    newTab: {
                        label: "Nowa karta",
                        description: "Otwórz nową kartę"
                    },
                    cycleTabsForward: {
                        label: "Cykl w przód",
                        description: "Następna karta"
                    },
                    cycleTabsBackward: {
                        label: "Cykl w tył",
                        description: "Poprzednia karta"
                    }
                },
                showTabNumbers: {
                    label: "Pokaż numery kart",
                    description: "Pokaż numeryczne plakietki na kartach"
                },
                tabNumberPosition: {
                    label: "Pozycja numeru karty",
                    description: "Gdzie wyświetlać numer na kartach",
                    left: "Lewa strona",
                    right: "Prawa strona"
                },
                animations: {
                    label: "Animacje"
                },
                animationHover: {
                    label: "Animacja najechania",
                    description: "Efekty po najechaniu myszą"
                },
                animationSelection: {
                    label: "Animacja wyboru",
                    description: "Efekty po wybraniu karty"
                },
                animationDragDrop: {
                    label: "Animacja przeciągania",
                    description: "Efekty przy przenoszeniu kart"
                },
                animationEnterExit: {
                    label: "Animacja wejścia/wyjścia",
                    description: "Efekty tworzenia i zamykania"
                },
                animationIconPop: {
                    label: "Animacja ikony",
                    description: "Powiększenie ikony przy wyborze"
                },
                animationCloseRotation: {
                    label: "Rotacja przycisku zamykania",
                    description: "Obrót ikony X"
                },
                animationPlusPulse: {
                    label: "Pulsowanie przycisku Plus",
                    description: "Efekt pulsowania przycisku nowej karty"
                },
                animationMentionGlow: {
                    label: "Poświata wzmianek",
                    description: "Efekt świecenia przy powiadomieniach"
                },
                animationCompactExpand: {
                    label: "Rozszerzanie kompaktowe",
                    description: "Płynne rozwijanie kart"
                },
                animationSelectedBorder: {
                    label: "Ramka wybranej karty",
                    description: "Animacja obramowania"
                },
                animationSelectedBackground: {
                    label: "Tło wybranej karty",
                    description: "Zmiana koloru tła"
                },
                animationTabShadows: {
                    label: "Cienie kart",
                    description: "Efekty cieniowania"
                },
                animationTabPositioning: {
                    label: "Pozycjonowanie kart",
                    description: "Płynne przesuwanie kart"
                },
                animationResizeHandle: {
                    label: "Uchwyt zmiany rozmiaru",
                    description: "Animacja uchwytu"
                },
                animationQuestsActive: {
                    label: "Aktywne zadania",
                    description: "Animacja dla karty zadań"
                },
                compactAutoExpandSelected: {
                    label: "Auto-rozwijanie wybranych",
                    description: "Rozwijaj kompaktowe karty po wybraniu"
                },
                compactAutoExpandOnHover: {
                    label: "Auto-rozwijanie po najechaniu",
                    description: "Rozwijaj kompaktowe karty po najechaniu myszą"
                },
                openInNewTabAutoSwitch: {
                    label: "Auto-przełączanie po otwarciu",
                    description: "Przełączaj na nowo otwarte karty"
                },
                bookmarksIndependentFromTabs: {
                    label: "Zakładki niezależne",
                    description: "Zakładki nie zmieniają aktywnych kart"
                },
                showResizeHandle: {
                    label: "Pokaż uchwyt zmiany rozmiaru",
                    description: "Pokaż uchwyt do regulacji szerokości"
                },
                openNewTabsInCompactMode: {
                    label: "Nowe karty w trybie kompaktowym",
                    description: "Otwieraj nowe karty jako kompaktowe"
                },
                newTabButtonBehavior: {
                    label: "Zachowanie przycisku (+)",
                    description: "Przycisk podąża za kartami"
                },
                oneTabPerServer: {
                    label: "Jedna karta na serwer",
                    description: "Ogranicz do jednej karty na serwer"
                },
                maxOpenTabs: {
                    label: "Limit kart",
                    description: "Maksymalna liczba kart (0 = brak)"
                }
            },
            tabs: {
                startup: "Karty startowe",
                currently: "Ustaw na obecnie otwarte karty"
            },
            toast: {
                notRestoring: "Nie przywracam kart, ponieważ KeepCurrentChannel jest włączone",
                failed: {
                    restore: "Nie udało się przywrócić kart",
                    saved: "Nie udało się załadować zapisanych kart"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Wyświetla licznik znaków w polu wiadomości",
            option: {
                colorEffects: {
                    label: "Efekty kolorystyczne",
                    description: "Włącz lub wyłącz zmiany koloru przy zbliżaniu się do limitu znaków"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Ukrywa wszystkie kanały w zwiniętych kategoriach, nawet jeśli mają nieprzeczytane wiadomości."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Usuwa wszystkie emoji i dekoracyjne znaki z nazw kanałów"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Automatycznie usuwa elementy śledzące z wysyłanych adresów URL"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Kliknij na role w profilach i na liście członków, aby zobaczyć, którzy użytkownicy je posiadają.",
            modal: {
                loading: "Ładowanie członków...",
                noMembers: "Nie znaleziono członków.",
                unknown: "Nieznana rola"
            }
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Pozwala lokalnie ukryć niemal całą zawartość od dowolnego użytkownika",
            replying: "Odpowiadanie na zablokowaną wiadomość",
            option: {
                hideVc: {
                    label: "Ukryj kanały głosowe",
                    description: "Ukryj kanały głosowe zawierające zablokowanych użytkowników."
                },
                usersToBlock: {
                    label: "Użytkownicy do zablokowania",
                    description: "ID użytkowników oddzielone przecinkiem i spacją"
                },
                hideBlockedUsers: {
                    label: "Ukryj zablokowanych użytkowników",
                    description: "Czy zablokowani użytkownicy powinni być całkowicie ukryci wszędzie"
                },
                hideBlockedMessages: {
                    label: "Ukryj zablokowane wiadomości",
                    description: "Czy wiadomości od zablokowanych użytkowników powinny być w pełni ukryte"
                },
                hideEmptyRoles: {
                    label: "Ukryj puste role",
                    description: "Czy nagłówki ról powinny być ukryte, jeśli wszyscy ich członkowie są zablokowani"
                },
                blockedReplyDisplay: {
                    label: "Wyświetlanie odpowiedzi zablokowanych",
                    description: "Co wyświetlić, gdy ktoś odpowiada osobie, którą ukryłeś",
                    displayText: "Wyświetl tekst informujący o odpowiedzi na ukrytą wiadomość",
                    hideReply: "Dosłownie nic"
                },
                guildBlackList: {
                    label: "Czarna lista serwerów",
                    description: "ID serwerów, na których funkcja ma być wyłączona"
                },
                guildWhiteList: {
                    label: "Biała lista serwerów",
                    description: "ID serwerów, na których funkcja ma być włączona"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Odtworzenie starego eksperymentu motywu klienta. Dodaj kolor do swojego motywu Discord",
            title: "Kolor motywu",
            add: "Dodaj kolor do swojego motywu Discord",
            option: {
                color: {
                    label: "Kolor"
                },
                resetColor: {
                    label: "Resetuj kolor"
                }
            },
            error: {
                modal: {
                    title: "Twój motyw nie będzie wyglądał dobrze!",
                    contrast: "Wybrany kolor nie kontrastuje dobrze z tekstem",
                    nitro: "Motywy Nitro nie są obsługiwane",
                    switch: "Przełącz na tryb {{oppositeTheme}}",
                    disable: "Wyłącz motyw Nitro",
                    reset: "Resetuj kolor motywu"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Dodaj więcej opcji FPS i czasu trwania dla klipów, plus tagowanie RPC!",
            minutes: "Minuty",
            option: {
                richPresenceTagging: {
                    label: "Tagowanie Rich Presence",
                    description: "Kiedy klipy powinny być tagowane obecnym statusem Rich Presence?",
                    always: "Zawsze",
                    only: "Tylko gdy nazwa aktywności pasuje",
                    never: "Nigdy"
                },
                enableScreenshotKeybind: {
                    label: "Skrót klawiszowy zrzutu ekranu",
                    description: "Włącz funkcję skrótu klawiszowego dla zrzutów ekranu"
                },
                enableVoiceOnlyClips: {
                    label: "Klip tylko głosowy",
                    description: "Włącz klipy zawierające tylko dźwięk (bez wideo)"
                },
                enableAdvancedSignals: {
                    label: "Zaawansowane sygnały",
                    description: "Włącz zaawansowane sygnały klipów (auto-wyzwalacze)"
                },
                ignorePlatformRestriction: {
                    label: "Ignoruj restrykcje platformy",
                    description: "Zezwalaj na nagrywanie klipów mimo restrykcji platformy (może powodować błędy zapisu)"
                },
                clipsLink: {
                    label: "Link do klipów",
                    link: "Zmień opcje FPS i czasu trwania w ustawieniach Klipów!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Usuwa ikony przyjazne dla osób ze ślepotą barw ze statusów, przywracając wygląd Discorda z lat 2015-2017"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Pozwala nawigować po interfejsie za pomocą klawiatury.",
            action: {
                command: {
                    label: "Uruchom komendę",
                    description: "Stwórz alias dla innej komendy palety przez ID."
                },
                settings: {
                    label: "Otwórz stronę ustawień",
                    description: "Przejdź bezpośrednio do wybranej strony ustawień Discorda."
                },
                url: {
                    label: "Otwórz URL",
                    description: "Otwórz link. Używaj linków https:// dla najlepszej kompatybilności."
                },
                macro: {
                    label: "Uruchom makro",
                    description: "Uruchom sekwencję komend w określonej kolejności."
                }
            },
            category: {
                auto: "Auto (użyj domyślnego rozmieszczenia)",
                default: {
                    label: "Szybkie akcje",
                    description: "Typowe skróty Plexcord"
                },
                plugins: {
                    label: "Wtyczki",
                    description: "Włączaj, wyłączaj i konfiguruj wtyczki Plexcord",
                    enable: {
                        label: "Włącz wtyczki"
                    },
                    disable: {
                        label: "Wyłącz wtyczki"
                    },
                    settings: {
                        label: "Ustawienia wtyczek"
                    },
                    toolbox: {
                        label: "Akcje wtyczek"
                    },
                    chatbar: {
                        label: "Przyciski paska czatu"
                    },
                    changes: {
                        label: "Zmiany wtyczek"
                    }
                },
                context: {
                    label: "Obecny kontekst",
                    description: "Akcje dla wybranego kanału i serwera"
                },
                updates: {
                    label: "Aktualizacje",
                    description: "Bądź na bieżąco z Plexcord"
                },
                discordSettings: {
                    label: "Ustawienia Discorda",
                    description: "Przejdź do stron konfiguracji Discorda"
                },
                custom: {
                    label: "Własne komendy",
                    description: "Wpisy palety zdefiniowane przez użytkownika"
                },
                sessions: {
                    label: "Narzędzia sesji",
                    description: "Narzędzia do zarządzania sesją Discord"
                },
                guilds: {
                    label: "Serwery",
                    description: "Szybka nawigacja do Twoich serwerów"
                },
                friends: {
                    label: "Znajomi",
                    description: "Szybka nawigacja do Twoich znajomych"
                },
                action: {
                    label: "Akcja"
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Otwórz ustawienia Plexcord",
                        plugin: "Otwórz ustawienia wtyczki"
                    }
                },
                reload: {
                    label: "Przeładuj Discorda",
                    description: "Przeładowuje obecne okno Discorda"
                }
            },
            command: {
                enable: "Włącz {{pluginName}}",
                enabled: "Włączono {{pluginName}}",
                disable: "Wyłącz {{pluginName}}",
                disabled: "Wyłączono {{pluginName}}",
                failed: "Komenda nie powiodła się:",
                toggleFailed: "Nie udało się przełączyć {{pluginName}}.",
                pluginSettings: "Ustawienia {{pluginName}}",
                untitled: "Komenda bez tytułu",
                new: "Nowa komenda",
                error: {
                    enter: "Wprowadź ID komendy lub wybierz jedną poniżej.",
                    noCommand: "Żadna komenda nie pasuje do tego ID."
                },
                discord: {
                    account: "Otwórz Moje konto",
                    privacy: "Otwórz Prywatność i bezpieczeństwo",
                    notifications: "Otwórz Powiadomienia",
                    voice: "Otwórz Głos i wideo",
                    text: "Otwórz Tekst i obrazy",
                    appearance: "Otwórz Wygląd",
                    accessibility: "Otwórz Dostępność",
                    keybinds: "Otwórz Skróty klawiszowe",
                    advanced: "Otwórz Zaawansowane",
                },
                updates: {
                    check: {
                        label: "Sprawdź aktualizacje",
                        description: "Sprawdź aktualizacje Plexcord",
                        one: "Dostępna jedna aktualizacja",
                        multiple: "Dostępne {{count}} aktualizacje",
                        none: "Brak dostępnych aktualizacji",
                        failed: "Nie udało się sprawdzić aktualizacji."
                    },
                    changelog: {
                        label: "Zobacz listę zmian",
                        description: "Otwiera listę zmian Plexcord"
                    }
                },
                read: {
                    mark: {
                        label: "Oznacz {{channelLabel}} jako przeczytane"
                    }
                },
                pin: {
                    open: {
                        label: "Otwórz przypięte dla {{channelLabel}}"
                    },
                    toggle: {
                        label: "Przełącz przypięcie ostatniej komendy"
                    }
                },
                channel: {
                    mute: {
                        label: "Wycisz {{channelLabel}}",
                        oneHour: "Wycisz {{channelLabel}} na 1 godzinę",
                        untilTomorrow: "Wycisz {{channelLabel}} do jutra",
                    },
                    unmute: {
                        label: "Wyłącz wyciszenie {{channelLabel}}",
                    },
                    reopen: {
                        label: "Otwórz ponownie ostatnio zamknięte PW"
                    },
                    dm: {
                        open: {
                            label: "Otwórz PW z {{userLabel}}"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "Otwórz ustawienia dla {{guildLabel}}"
                    },
                    navigate: {
                        label: "Przejdź do {{guildLabel}}"
                    }
                },
                session: {
                    thirtyMinutesDnd: "Ustaw 'Nie przeszkadzać' na 30 minut",
                    oneHourDnd: "Ustaw 'Nie przeszkadzać' na 1 godzinę",
                    cancelStatusReset: "Anuluj licznik statusu"
                },
                status: {
                    set: {
                        online: "Status: Dostępny",
                        idle: "Status: Zaraz wracam",
                        dnd: "Status: Nie przeszkadzać",
                        invisible: "Status: Niewidoczny"
                    }
                },
                toggle: {
                    streamer: "Przełącz tryb streamera",
                    mute: "Wycisz mikrofon",
                    deafen: "Wyłącz dźwięk",
                },
                notification: {
                    clear: {
                        label: "Wyczyść powiadomienia pulpitu"
                    }
                },
                palette: {
                    settings: {
                        label: "Ustawienia Palety Komend",
                        description: "Konfiguruj wtyczkę Paleta Komend"
                    }
                },
                recent: {
                    label: "Pokaż ostatnie komendy",
                    description: "Wyświetla ostatnio wykonane komendy",
                    rerun: "Uruchom ponownie ostatnią komendę"
                },
                plugin: {
                    reload: {
                        label: "Przeładuj wszystkie wtyczki",
                        description: "Próbuje przeładować każdą włączoną wtyczkę 'na gorąco'"
                    },
                    enable: {
                        label: "Włącz wszystkie wtyczki"
                    },
                    disable: {
                        label: "Wyłącz wszystkie niewymagane wtyczki"
                    },
                    restart: {
                        label: "Zrestartuj Plexcord",
                        description: "Przeładowuje okno klienta Discord"
                    }
                },
                quickCSS: {
                    label: "Przełącz Quick CSS"
                },
                transparentity: {
                    label: "Przełącz przezroczystość okna"
                },
                theme: {
                    open: {
                        label: "Otwórz ustawienia motywu klienta"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Szukaj komend",
                noCommand: "Nie znaleziono komend",
                add: {
                    title: "Dodaj komendę"
                },
                choose: {
                    title: "Wybierz komendę"
                },
                command: {
                    palette: {
                        label: "Paleta Komend",
                        placeholder: "Wpisz komendę",
                        filtering: "Filtrowanie przez {{tags}}",
                        noCommand: "Nie znaleziono komend",
                        pin: "Przypnij komendę",
                        unpin: "Odepnij komendę"
                    },
                    target: {
                        label: "Docelowe ID komendy",
                        placeholder: "Wprowadź ID komendy",
                        choose: "Wybierz komendę"
                    },
                    custom: {
                        label: "Własne komendy",
                        description: "1) Nazwij komendę · 2) Dodaj opcjonalny opis/słowa kluczowe/tagi/kategorię · 3) Wybierz akcję i wypełnij jej szczegóły.",
                        auto: "Auto (domyślne)",
                        expand: "Rozwiń",
                        collapse: "Zwiń",
                        collapsed: {
                            label: "Etykieta",
                            description: "Nazwa wyświetlana",
                            advanced: {
                                hide: "Ukryj opcje zaawansowane",
                                show: "Pokaż opcje zaawansowane"
                            },
                            subtitle: {
                                label: "Opis",
                                placeholder: "Opcjonalny podtytuł"
                            },
                            keywords: {
                                label: "Słowa kluczowe",
                                placeholder: "Słowa oddzielone przecinkami"
                            },
                            tags: {
                                label: "Tagi",
                                placeholder: "Tagi oddzielone przecinkami"
                            },
                            suggestion: {
                                label: "Sugestia"
                            },
                            chooseCommand: {
                                label: "Wybierz, gdzie ta komenda ma się pojawiać w palecie."
                            },
                            danger: {
                                label: "Pokazuj jako niebezpieczne"
                            }
                        },
                        remove: "Usuń komendę",
                        add: "Dodaj komendę"
                    }
                },
                settings: {
                    noSelected: "Nie wybrano strony",
                    current: "Obecna strona",
                    choose: "Wybierz stronę..."
                },
                url: {
                    url: "URL",
                    error: "Używaj linków http:// lub https://.",
                    valid: "Wprowadź poprawny adres URL.",
                    open: {
                        external: "Otwórz zewnętrznie"
                    }
                },
                macro: {
                    sequence: {
                        label: "Sekwencja komend",
                        placeholder: "komenda-a, komenda-b"
                    },
                    addStep: "Dodaj krok",
                    unknownId: "Nieznane ID komend"
                }
            },
            status: {
                online: "Dostępny",
                idle: "Zaraz wracam",
                dnd: "Nie przeszkadzać",
                invisible: "Niewidoczny"
            },
            tag: {
                core: "Rdzeń",
                navigation: "Nawigacja",
                utility: "Narzędzia",
                developer: "Programista",
                customization: "Personalizacja",
                plugins: "Wtyczki",
                session: "Sesja",
                context: "Kontekst",
                custom: "Własne",
                guilds: "Serwery",
                friends: "Znajomi",
                other: "Inne"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "Nie znaleziono przycisku czatu '{{label}}'.",
                        failedToTrigger: "Nie udało się aktywować {{label}}.",
                        activated: "Aktywowano {{label}}."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Kontrola wyciszenia kanału jest niedostępna",
                        muted: "Wyciszono kanał.",
                        unmuted: "Wyłączono wyciszenie kanału.",
                        failed: "Nie udało się zaktualizować stanu wyciszenia kanału."
                    },
                    dm: {
                        no: "Brak zapisanych zamknięć PW w tej sesji.",
                        reOpened: "Ponownie otwarto ostatnio zamknięte PW.",
                        noAvailable: "To PW nie jest już dostępne."
                    }
                },
                command: {
                    loop: "Wykryto pętlę komend w makrze.",
                    notFound: "Komenda {{commandId}} nie została znaleziona.",
                    unsupported: "Nieobsługiwana akcja własnej komendy.",
                    failedToRun: "Nie udało się uruchomić {{label}}.",
                    notMetadata: "Metadane wtyczki Paleta Komend są niedostępne."
                },
                guild: {
                    mute: {
                        unavailable: "Kontrola wyciszenia serwera jest niedostępna",
                        muted: "Wyciszono serwer.",
                        unmuted: "Wyłączono wyciszenie serwera.",
                        failed: "Nie udało się zaktualizować stanu wyciszenia serwera."
                    },
                    settings: {
                        unable: "Nie udało się otworzyć ustawień serwera."
                    }
                },
                panel: {
                    pin: {
                        unable: "Nie udało się otworzyć panelu przypiętych wiadomości."
                    }
                },
                status: {
                    reset: {
                        canceled: "Anulowano zaplanowany reset statusu.",
                        unableToChange: "Nie można teraz zmienić statusu.",
                        reverted: "Status przywrócony do {{status}}.",
                        dnd: "Nie przeszkadzać przez {{duration}} min."
                    },
                    change: {
                        unableToChange: "Nie można teraz zmienić statusu.",
                        changed: "Zmieniono status na {{status}}."
                    }
                },
                read: {
                    marked: "Oznaczono {{channelLabel}} jako przeczytane.",
                    failed: "Nie udało się oznaczyć kanału jako przeczytany."
                },
                route: {
                    unable: "Nie udało się otworzyć {{destination}}."
                },
                notification: {
                    cleared: "Wyczyszczono wszystkie powiadomienia.",
                    failed: "Nie udało się wyczyścić powiadomień.",
                    notSupported: "Czyszczenie powiadomień nie jest obsługiwane."
                },
                streamerMode: {
                    enabled: "Włączono tryb streamera.",
                    disabled: "Wyłączono tryb streamera.",
                },
                voice: {
                    micToggle: {
                        muted: "Mikrofon wyciszony.",
                        unmuted: "Mikrofon włączony."
                    },
                    deafenToggle: {
                        deafened: "Dźwięk wyłączony.",
                        undeafened: "Dźwięk włączony."
                    }
                },
                quickCSS: {
                    enabled: "Włączono Quick CSS.",
                    disabled: "Wyłączono Quick CSS."
                },
                transparentity: {
                    enabled: "Włączono przezroczystość okna.",
                    disabled: "Wyłączono przezroczystość okna."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} jest wyłączona.",
                        disable: "{{pluginName}} jest wyłączona. Włącz wtyczkę, aby użyć tej akcji."
                    },
                    required: {
                        label: "{{pluginName}} wymaga restartu, aby się przeładować."
                    },
                    stop: {
                        failed: "Nie udało się zatrzymać {{pluginName}}."
                    },
                    restart: {
                        failed: "Nie udało się zrestartować {{pluginName}}."
                    },
                    reload: {
                        label: "Przeładowano {{pluginName}}.",
                        noPlugin: "Żadna wtyczka nie została przeładowana.",
                        reloaded: "Przeładowano {{count}} wtyczkę/wtyczek."
                    },
                    toggle: {
                        enabled: "Włączono {{changed}} wtyczkę/wtyczek.",
                        disabled: "Wyłączono {{changed}} wtyczkę/wtyczek.",
                        noChanged: "Żadna wtyczka nie zmieniła stanu."
                    },
                    run: {
                        failed: {
                            label: "Nie udało się uruchomić {{pluginName}}: {{actionLabel}}."
                        }
                    }
                }
            },
            display: {
                channel: {
                    current: "Obecny kanał",
                    group: "PW grupowe",
                    direct: "Prywatna wiadomość"
                },
                guild: {
                    current: "Obecny serwer"
                }
            },
            option: {
                hotkey: {
                    label: "Klawisz skrótu",
                    description: "Skrót klawiszowy do otwierania palety komend",
                    recording: "Naciśnij dowolny klawisz...",
                    reset: "Resetuj"
                },
                visualStyle: {
                    label: "Styl wizualny",
                    description: "Wygląd palety",
                    classic: "Klasyczny",
                    polished: "Nowoczesny"
                },
                showTags: {
                    label: "Pokaż tagi",
                    description: "Wyświetlaj tagi przy komendach"
                },
                enableTagFilter: {
                    label: "Włącz filtr tagów",
                    description: "Pokaż pasek filtrowania po tagach"
                },
                customCommands: {
                    label: "Własne komendy",
                    description: "Zarządzaj własnymi wpisami palety komend"
                }
            },
            template: {
                alias: {
                    label: "Komenda alias",
                    description: "Odzwierciedla istniejącą komendę"
                },
                settings: {
                    label: "Ustawienia",
                    description: "Otwórz ustawienia Discorda"
                },
                url: {
                    label: "Link",
                    description: "Otwórz zewnętrzny URL"
                },
                macro: {
                    label: "Makro",
                    description: "Uruchom sekwencję komend"
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Wyłącza irytujące komunikaty i błędy w konsoli",
            option: {
                disableLoggers: {
                    label: "Wyłącz loggery",
                    description: "Wyłącza mechanizmy logowania Discorda"
                },
                disableSpotifyLogger: {
                    label: "Wyłącz logger Spotify",
                    description: "Wyłącz logger Spotify, który wycieka informacje o koncie i token dostępu"
                },
                whitelistedLoggers: {
                    label: "Dozwolone loggery",
                    description: "Lista loggerów oddzielona średnikami (;), które mają być widoczne"
                },
                allowLevel: {
                    label: "Zezwalaj na poziomy",
                    description: "Zawsze zezwalaj na loggery tych typów",
                    filter: "Lista filtrów"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Dodaje krótsze aliasy dla wielu rzeczy w oknie konsoli. Uruchom `shortcutList`, aby zobaczyć listę."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Pozwala określić słowa wyzwalające, które będą domyślnie rozmyte. Kliknięcie na rozmyte treści ujawni je.",
            option: {
                flagged: {
                    label: "Oznaczone",
                    flagged: "Oznaczone słowa",
                    placeholder: "Słowo"
                },
                onClick: {
                    label: "Przy kliknięciu",
                    description: "Pokazuj treść tylko po kliknięciu zamiast po najechaniu kurorem"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Pozwala kopiować emoji jako sformatowany ciąg znaków (<a:nazwa:id>)",
            option: {
                copyUnicode: {
                    label: "Kopiuj Unicode",
                    description: "Kopiuj surowy znak unicode zamiast :nazwa: dla domyślnych emoji (👽)"
                }
            },
            context: {
                copy: "Kopiuj kod Markdown emoji"
            },
            toast: {
                success: "Sukces! Skopiowano kod Markdown emoji."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Dodaje przycisk do załączników tekstowych, aby skopiować ich zawartość",
            copied: "Skopiowano!",
            large: "Plik jest zbyt duży, aby go skopiować.",
            copyFileContents: "Kopiuj zawartość pliku"
        },
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Wtyczka do kopiowania kolorów gradientu profilu do schowka.",
            copy: "Kopiuj kolory profilu",
            toast: {
                noColor: "Nie znaleziono kolorów profilu!",
                copied: "Kolory profilu skopiowane do schowka!",
                error: "Błąd podczas kopiowania kolorów profilu!"
            }
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Kopiuje adres URL statusu użytkownika po kliknięciu go prawym przyciskiem myszy",
            toast: {
                copied: "Skopiowano adres URL",
                error: "Błąd podczas kopiowania adresu URL, sprawdź konsolę"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Dodaje możliwość kopiowania i otwierania linków do naklejek",
            context: {
                copy: "Kopiuj link",
                open: "Otwórz link"
            },
            toast: {
                success: "Link skopiowany!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Dodaje przycisk do kopiowania wzmianki użytkownika w menu kontekstowym.",
            context: {
                copy: "Kopiuj wzmiankę użytkownika"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Dodaje opcję 'Kopiuj URL użytkownika' do menu kontekstowego użytkownika.",
            context: {
                copy: "Kopiuj URL użytkownika"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Narzędzie do obsługi i próby odzyskiwania sprawności po awariach bez konieczności restartu",
            option: {
                attemptToPreventCrashes: {
                    label: "Próbuj zapobiegać awariom",
                    description: "Czy próbować zapobiegać awariom Discorda."
                },
                attemptToNavigateToHome: {
                    label: "Próbuj wrócić do strony głównej",
                    description: "Czy po odzyskaniu sprawności próbować przejść do karty głównej."
                }
            },
            toast: {
                crashed: {
                    title: "Discord uległ awarii!",
                    body: "Ojej :( Discord uległ awarii dwa razy pod rząd, nie próbuję odzyskać sprawności.",
                    update: "O nie, Discord właśnie uległ awarii... ale mamy dobre wieści! Dostępna jest aktualizacja Plexcord, która może naprawić ten problem. Czy chcesz ją teraz zainstalować?",
                    recover: "Próba odzyskiwania sprawności...",
                    invalid: "Nieprawidłowy lub wygasły link do zaproszenia."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Używaj Ctrl+Enter, aby wysyłać wiadomości (możliwość personalizacji)",
            option: {
                submitRule: {
                    label: "Zasada wysyłania",
                    description: "Sposób wysyłania wiadomości",
                    ctrlEnter: "Ctrl+Enter (Enter lub Shift+Enter dla nowej linii) (cmd+enter na macOS)",
                    shiftEnter: "Shift+Enter (Enter dla nowej linii)",
                    enter: "Enter (Shift+Enter dla nowej linii; domyślne dla Discorda)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Wyślij wiadomość w środku bloku kodu",
                    description: "Czy wysyłać wiadomość, gdy kursor znajduje się w środku bloku kodu"
                }
            }
        },
        cursorBuddy: {
            name: "CursorBuddy",
            description: "Dodaje duszka (sprite), który podąża za Twoim kursorem.",
            modal: {
                furColor: "Kolor futra",
                outlineColor: "Kolor obrysu"
            },
            option: {
                buddy: {
                    label: "Towarzysz",
                    description: "Wybierz towarzysza kursora",
                    oneko: "Oneko (Kotek)",
                    fathorse: "Gruby koń"
                },
                speed: {
                    label: "Prędkość",
                    description: "Prędkość Twojego towarzysza",
                    invalid: "Prędkość musi być większa niż 0"
                },
                fps: {
                    label: "Liczba klatek (FPS)",
                    description: "Płynność animacji towarzysza",
                    invalid: "Liczba klatek musi być większa niż 0"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Kolor futra",
                    description: "Kolor futra dla Oneko (Hex)"
                },
                outlineColor: {
                    label: "Kolor obrysu",
                    description: "Kolor obrysu dla Oneko (Hex)"
                },
                fathorseSection: {
                    label: "Gruby koń"
                },
                size: {
                    label: "Rozmiar",
                    description: "Rozmiar grubego konia",
                    invalid: "Rozmiar musi być większy niż 0"
                },
                fade: {
                    label: "Zanikanie",
                    description: "Czy koń powinien zanikać, gdy kursor jest blisko"
                },
                freeroam: {
                    label: "Wolne bieganie",
                    description: "Czy koń powinien biegać swobodnie, gdy nic nie robisz"
                },
                shake: {
                    label: "Potrząsanie",
                    description: "Czy koń powinien potrząsać oknem podczas chodzenia"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Personalizuj ikony folderów za pomocą dowolnego pliku PNG",
            option: {
                solidIcon: {
                    label: "Jednolita ikona",
                    description: "Użyj jednolitego tła pod obrazkiem"
                },
                folderIcons: {
                    label: "Ikony folderów",
                    description: "Ustawienia ikon folderów"
                }
            },
            modal: {
                change: "Zmień rozmiar ikony folderu",
                save: "Zapisz",
                unset: "Usuń",
                set: "Ustaw nową ikonę",
                hover: "Możliwe, że będziesz musiał najechać kursorem na folder po ustawieniu, aby się odświeżył."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Pozwala ustawić czas, po którym Discord przechodzi w stan bezczynności (lub wyłączyć auto-idle)",
            backOnline: "Witaj z powrotem! Kliknij przycisk, aby być dostępnym. Kliknij X, aby pozostać bezczynnym do przeładowania.",
            exit: "Wyjdź ze stanu bezczynności",
            option: {
                idleTimeout: {
                    label: "Limit czasu bezczynności",
                    description: "Minuty, po których Discord przechodzi w stan bezczynności (0 aby wyłączyć)"
                },
                remainInIdle: {
                    label: "Pozostań bezczynny",
                    description: "Po powrocie do Discorda pozostań bezczynny, dopóki nie potwierdzisz chęci bycia dostępnym"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Dodaj w pełni konfigurowalny Rich Presence (status gry) do swojego profilu Discord",
            goTo: "Przejdź do {{portal}}, aby utworzyć aplikację i uzyskać ID aplikacji.",
            upload: "Prześlij obrazy w zakładce Rich Presence, aby uzyskać klucze obrazów.",
            image: "Jeśli chcesz użyć linku, prześlij obraz do {{imgur}} i skopiuj jego bezpośredni adres.",
            button: "Nie widzisz własnych przycisków w swoim profilu, ale inni widzą je bez problemu.",
            font: "Niektóre dziwne znaki unicode ('czcionki' 𝖑𝖎𝖐𝖊 𝖙𝖍𝖎𝖘) mogą sprawić, że status się nie wyświetli. Używaj normalnych liter.",
            placeholder: "Wprowadź wartość",
            select: "Wybierz opcję",
            error: {
                appIdInvalid: "ID aplikacji musi być liczbą.",
                notice: "Uwaga",
                sharing: "Udostępnianie aktywności nie jest włączone, inni nie zobaczą Twojego statusu!",
                enable: "Włącz",
                validStream: "Link do streamu musi być poprawnym adresem URL.",
                mustBeURL: "Musi być poprawnym adresem URL.",
                streamCharacters: "Link do streamu nie może przekraczać 512 znaków.",
                dontUse: "Nie używaj linku Discorda. Użyj zamiast tego linku Imgur.",
                imgur: "Link Imgur musi być bezpośrednim linkiem do obrazu (np. https://i.imgur.com/...).",
                tenor: "Link Tenor musi być bezpośrednim linkiem (np. https://media.tenor.com/...).",
                required: "To pole jest wymagane.",
                tooLong: "Nie może przekraczać {{maxLength}} znaków.",
                mustBeNumber: "Musi być liczbą.",
                mustBePositive: "Musi być liczbą dodatnią.",
                startTimeInvalid: "Czas rozpoczęcia musi być większy niż 0.",
                endTimeInvalid: "Czas zakończenia musi być większy niż 0."
            },
            option: {
                appId: {
                    label: "ID aplikacji",
                    description: "ID aplikacji (wymagane)"
                },
                appName: {
                    label: "Nazwa aplikacji",
                    description: "Nazwa aplikacji (wymagana)"
                },
                details: {
                    label: "Szczegóły",
                    description: "Szczegóły (linia 1)"
                },
                detailsURL: {
                    label: "URL szczegółów",
                    description: "Klikalny link dla szczegółów"
                },
                state: {
                    label: "Stan",
                    description: "Stan (linia 2)"
                },
                stateURL: {
                    label: "URL stanu",
                    description: "Klikalny link dla stanu"
                },
                partySize: {
                    label: "Wielkość grupy",
                    description: "Obecna liczba osób w grupie (używaj z 'Maks. wielkość grupy')"
                },
                partyMax: {
                    label: "Maks. wielkość grupy",
                    description: "Maksymalna liczba osób w grupie"
                },
                type: {
                    label: "Typ aktywności",
                    description: "Typ aktywności",
                    playing: "Gra w",
                    streaming: "Streamuje",
                    listening: "Słucha",
                    watching: "Ogląda",
                    competing: "Rywalizuje w"
                },
                streamLink: {
                    label: "Link do streamu",
                    description: "Link Twitch.tv lub YouTube.com (tylko dla typu 'Streamuje')"
                },
                timestampMode: {
                    label: "Tryb znacznika czasu",
                    description: "Co powinien pokazywać czas",
                    none: "Brak",
                    sinceDiscordOpen: "Od otwarcia Discorda",
                    sameAsCurrentTime: "Taki sam jak Twój obecny czas",
                    custom: "Własny czas"
                },
                startTime: {
                    label: "Czas rozpoczęcia (w ms)",
                    description: "Znacznik czasu rozpoczęcia w milisekundach"
                },
                endTime: {
                    label: "Czas zakończenia (w ms)",
                    description: "Znacznik czasu zakończenia w milisekundach"
                },
                imageBig: {
                    label: "Klucz dużego obrazu",
                    description: "Klucz przesłanego dużego obrazu"
                },
                imageBigTooltip: {
                    label: "Podpowiedź dużego obrazu",
                    description: "Tekst po najechaniu na duży obraz"
                },
                imageBigURL: {
                    label: "URL dużego obrazu",
                    description: "Klikalny link dużego obrazu"
                },
                imageSmall: {
                    label: "Klucz małego obrazu",
                    description: "Klucz przesłanego małego obrazu"
                },
                imageSmallTooltip: {
                    label: "Podpowiedź małego obrazu",
                    description: "Tekst po najechaniu na mały obraz"
                },
                imageSmallURL: {
                    label: "URL małego obrazu",
                    description: "Klikalny link małego obrazu"
                },
                buttonOneText: {
                    label: "Tekst przycisku 1",
                    description: "Tekst na pierwszym przycisku"
                },
                buttonOneURL: {
                    label: "URL przycisku 1",
                    description: "Link pierwszego przycisku"
                },
                buttonTwoText: {
                    label: "Tekst przycisku 2",
                    description: "Tekst na drugim przycisku"
                },
                buttonTwoURL: {
                    label: "URL przycisku 2",
                    description: "Link drugiego przycisku"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Personalizuj dźwięki Discorda.",
            search: "Szukaj dźwięków",
            placeholder: "Szukaj po nazwie lub ID",
            import: "Importuj",
            export: "Eksportuj",
            reset: "Resetuj wszystko",
            debug: "Debuguj",
            toast: {
                error: "Błąd ładowania pliku dźwiękowego",
                exported: "Wyeksportowano {{count}} ustawień (pliki audio nie są dołączone)",
                imported: "Ustawienia zaimportowane pomyślnie",
                importError: "Błąd importowania ustawień. Sprawdź konsolę.",
                reset: "Wszystkie nadpisania zostały zresetowane!",
                overrideDescription: "Nadpisanie dla {{soundName}}",
                previewSound: "Błąd odtwarzania dźwięku.",
                playing: "Błąd odtwarzania własnego dźwięku. Plik może być uszkodzony.",
                invalidFile: "Brak pliku dźwiękowego do podglądu",
                uploaded: "Plik przesłany pomyślnie: {{fileName}}",
                uploadedError: "Błąd przesyłania pliku: {{error}}",
                invalidExtension: "Nieprawidłowy typ pliku. Prześlij plik audio.",
                uploading: "Przesyłanie pliku...",
                deleted: "Plik usunięty pomyślnie",
                deleteError: "Błąd podczas usuwania pliku.",
                loadingError: "Błąd ładowania pliku dźwiękowego"
            },
            button: {
                preview: "Podgląd",
                stop: "Zatrzymaj",
                volume: "Głośność",
                soundSource: "Źródło dźwięku",
                customFile: "Własny plik",
                uploadNew: "Prześlij nowy",
                delete: "Usuń wybrany plik"
            },
            option: {
                default: "Domyślny",
                custom: "Własny",
                select: "Wybierz plik..."
            },
            type: {
                activityEnd: "Koniec aktywności",
                activityLaunch: "Uruchomienie aktywności",
                activityUserJoin: "Dołączenie użytkownika do aktywności",
                activityUserLeft: "Opuszczenie aktywności przez użytkownika",
                asmrMessage: "Wiadomość ASMR",
                bitMessage: "Wiadomość Bit",
                bopMessage: "Wiadomość Bop",
                callCalling: "Dzwonienie (wychodzące)",
                callRinging: "Dzwonienie (przychodzące)",
                clipError: "Błąd klipu",
                clipSave: "Zapisanie klipu",
                ddrDown: "DDR Dół",
                ddrLeft: "DDR Lewo",
                ddrRight: "DDR Prawo",
                ddrUp: "DDR Góra",
                deafen: "Wyłączenie dźwięku",
                discodo: "Discodo",
                disconnect: "Rozłączenie",
                duckyMessage: "Wiadomość Kaczuszki",
                hangStatusSelect: "Wybór statusu zawieszenia",
                highfiveClap: "Klasnięcie przybicia piątki",
                highfiveWhistle: "Gwizd przybicia piątki",
                humanMan: "Ludzki mężczyzna",
                lofiMessage: "Wiadomość LoFi",
                mention1: "Wzmianka 1 (@rola)",
                mention2: "Wzmianka 2 (@everyone)",
                mention3: "Wzmianka 3 (@here)",
                message1: "Wiadomość 1 (Ogólna)",
                message2: "Wiadomość 2 (Odpowiedź na serwerze)",
                message3: "Wiadomość 3 (PW i grupy)",
                mute: "Wyciszenie mikrofonu",
                overlayUnlock: "Odblokowanie nakładki",
                poggermodeAchievement: "Osiągnięcie Poggermode",
                poggermodeApplause: "Aplauz Poggermode",
                poggermodeEnabled: "Poggermode włączony",
                poggermodeMessage: "Wiadomość Poggermode",
                pttStart: "PTT Start",
                pttStop: "PTT Stop",
                reconnect: "Ponowne połączenie",
                robotMan: "Robot",
                stageWaiting: "Oczekiwanie na scenie",
                streamEnded: "Koniec streamu",
                streamStarted: "Start streamu",
                streamUserJoined: "Użytkownik dołączył do streamu",
                streamUserLeft: "Użytkownik opuścił stream",
                success: "Sukces",
                undeafen: "Włączenie dźwięku",
                unmute: "Włączenie mikrofonu",
                userJoin: "Użytkownik dołączył",
                userLeave: "Użytkownik opuścił",
                userMoved: "Użytkownik przeniesiony",
                vibingWumpus: "Wibrujący Wumpus"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Własne znaczniki czasu w wiadomościach i podpowiedziach",
            demo: {
                cozy: "Kliknij mnie, aby przełączyć na format Cozy",
                compact: "Kliknij mnie, aby przełączyć na format Compact",
                lastWeek: "Ta wiadomość została wysłana w zeszłym tygodniu",
                hover: "Najedź na czas, aby zobaczyć formaty podpowiedzi",
                edit: "Edytuj formaty poniżej, aby zobaczyć podgląd na żywo"
            },
            modal: {
                title: "Jak używać:",
                moment: "Dokumentacja formatowania Moment.js",
                hint: "Dodatkowo możesz używać tych wartości w polach:",
                calendar: "umożliwia dynamiczne daty, takie jak",
                today: "Dzisiaj",
                yesterday: "Wczoraj",
                relative: "podaje czas typu",
                relativeTime: "4 godziny temu",
                preview: "Podgląd",
                format: "Formaty kalendarza",
                howTo: "Jak formatować wartość [calendar], jeśli jest używana powyżej."
            },
            option: {
                formats: {
                    label: "Formaty",
                    description: "Personalizuj formaty znaczników czasu",
                },
                cozyFormat: {
                    label: "Tryb Cozy (Wygodny)",
                    description: "Format czasu używany w wiadomościach w trybie wygodnym"
                },
                compactFormat: {
                    label: "Tryb Compact (Zwarty)",
                    description: "Format czasu w trybie zwartym i po najechaniu na wiadomości"
                },
                tooltipFormat: {
                    label: "Podpowiedź (Tooltip)",
                    description: "Format czasu używany w podpowiedziach"
                },
                ariaLabelFormat: {
                    label: "Etykieta Aria",
                    description: "Format czasu używany w etykietach dostępności (Aria)"
                },
                sameDayFormat: {
                    label: "Ten sam dzień",
                    description: "Format [calendar] dla dzisiaj",
                    default: "[Dzisiaj o] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Wczoraj",
                    description: "Format [calendar] dla wczoraj",
                    default: "[Wczoraj o] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Zeszły tydzień",
                    description: "Format [calendar] dla zeszłego tygodnia"
                },
                sameElseFormat: {
                    label: "Starsze daty",
                    description: "Format [calendar] dla starszych dat"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Pozwala dodać własny kolor dowolnemu użytkownikowi w każdym miejscu!",
            option: {
                dmList: {
                    label: "Lista PW",
                    description: "Użytkownicy z własnymi kolorami będą mieli pokolorowane nazwy na liście PW"
                },
                colorInServers: {
                    label: "Kolor na serwerach",
                    description: "Czy kolory nazw powinny być zmieniane wewnątrz serwerów"
                }
            },
            context: {
                setColor: "Ustaw kolor"
            },
            modal: {
                custom: "Własny kolor",
                pick: "Wybierz kolor",
                delete: "Usuń wpis",
                save: "Zapisz"
            }
        },
        dearrow: {
            name: "DeArrow",
            description: "Sprawia, że tytuły i miniatury filmów YouTube w Discordzie są mniej sensacyjne, dzięki DeArrow",
            option: {
                hideButton: {
                    label: "Ukryj przycisk",
                    description: "Ukrywa przycisk DeArrow z osadzonych filmów YouTube"
                },
                replaceElements: {
                    label: "Zastąp elementy",
                    description: "Wybierz, które elementy filmu zostaną zastąpione",
                    everything: "Wszystko (Tytuły i Miniatury)",
                    title: "Tytuły",
                    thumbnail: "Miniatury"
                },
                dearrowByDefault: {
                    label: "DeArrow domyślnie",
                    description: "Automatycznie oczyszczaj filmy"
                }
            },
            tooltip: {
                dearrowed: "Ten film został oczyszczony przez DeArrow; kliknij, aby przywrócić",
                dearrow: "Kliknij, aby użyć DeArrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Oczyszcza Discorda, usuwając zbędne elementy interfejsu, takie jak efekty profilu, zakładki sklepu, boosty i inne.",
            option: {
                userProfileHeader: {
                    label: "Profil użytkownika"
                },
                removeNameplate: {
                    label: "Usuń tabliczkę (Nameplate)",
                    description: "Usuwa tabliczki z imionami."
                },
                removeProfileEffect: {
                    label: "Usuń efekt profilu",
                    description: "Usuwa animacje profilu podczas otwierania."
                },
                removeClanTag: {
                    label: "Usuń tag klanu",
                    description: "Usuwa tagi klanowe."
                },
                alwaysShowUsername: {
                    label: "Zawsze pokazuj nazwę użytkownika",
                    description: "Zawsze pokazuj nazwę użytkownika zamiast statusu."
                },
                accessibilityNotice: {
                    label: "Informacja o dostępności",
                    description: "Discord posiada już wbudowaną opcję stylu nazw użytkownika w ustawieniach Dostępności."
                },
                friendsListHeader: {
                    label: "Nad listą znajomych/PW"
                },
                removeShopAboveDM: {
                    label: "Usuń Sklep nad PW",
                    description: "Usuwa przycisk sklepu znad listy wiadomości prywatnych."
                },
                removeQuestsAboveDM: {
                    label: "Usuń Zadania nad PW",
                    description: "Usuwa przycisk zadań znad listy wiadomości prywatnych."
                },
                miscHeader: {
                    label: "Różne"
                },
                removeServerBoostInfo: {
                    label: "Usuń info o ulepszeniach serwera",
                    description: "Usuwa informację o boostach nad listą kanałów."
                },
                removeBillingSettings: {
                    label: "Usuń ustawienia płatności",
                    description: "Usuwa zakładki dotyczące płatności z ustawień."
                },
                removeGiftButton: {
                    label: "Usuń przycisk prezentu",
                    description: "Usuwa przycisk prezentu z paska wiadomości."
                },
                removeUnavailableEmojiPicker: {
                    label: "Usuń niedostępne emoji",
                    description: "Usuwa niedostępne kategorie z menu wyboru emoji."
                },
                removeAudioMenus: {
                    label: "Usuń menu audio",
                    description: "Usuwa menu obok przycisków wyciszania mikrofonu i dźwięku."
                },
                removeButtonTooltips: {
                    label: "Usuń podpowiedzi przycisków",
                    description: "Usuwa dymki z tekstem pojawiające się nad przyciskami."
                }
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Dekoduj zawartość Base64 z dowolnej wiadomości i kopiuj ją.",
            right: {
                decode: "Kopiuj zdekodowane (Lewy klik) / Dekoduj Base64 (Prawy klik)",
                copy: "Dekoduj Base64 (Lewy klik) / Kopiuj zdekodowane (Prawy klik)"
            },
            option: {
                clickMethod: {
                    label: "Metoda kliknięcia",
                    description: "Zmień sposób działania przycisku dekodowania Base64.",
                    left: "Kliknij lewym przyciskiem, aby dekodować.",
                    right: "Kliknij prawym przyciskiem, aby dekodować."
                }
            },
            modal: {
                title: "Zdekodowana zawartość Base64",
                content: "Zdekodowana treść",
                copy: "Kopiuj zdekodowaną treść {{index}}",
                copied: "Zdekodowana treść skopiowana do schowka!"
            }
        },
        decor: {
            name: "Decor",
            description: "Twórz i używaj własnych dekoracji awatara lub wybierz ulubione z gotowych zestawów.",
            presetPart: "Część zestawu {{name}}",
            createdBy: "Autor: {{author}}",
            copy: "Kopiuj ID zestawu",
            file: "Plik",
            your: {
                title: "Twoje dekoracje",
                subtitle: "Możesz usunąć własne dekoracje, klikając na nie prawym przyciskiem myszy."
            },
            option: {
                changeDecoration: {
                    label: "Zmień dekorację",
                    description: "Włącz Decor i zrestartuj klienta, aby zmienić dekorację awatara.",
                    also: "Dostęp do dekoracji Decor masz również ze strony {{profiles}}.",
                    profiles: "Profile"
                },
                baseUrl: {
                    label: "Bazowy URL",
                    description: "URL API dla wtyczki Decor"
                },
                agreedToGuidelines: {
                    label: "Zaakceptowano wytyczne",
                    description: "Czy użytkownik zaakceptował zasady społeczności"
                }
            },
            context: {
                decorationOptions: "Opcje dekoracji",
                copyHash: "Kopiuj hash dekoracji",
                deleteDecoration: "Usuń dekorację"
            },
            alert: {
                delete: {
                    title: "Usuń dekorację",
                    body: "Czy na pewno chcesz usunąć dekorację {{decoration}}?",
                    confirm: "Usuń",
                    cancel: "Anuluj"
                },
                logout: {
                    title: "Wyloguj",
                    body: "Czy na pewno chcesz się wylogować z usługi Decor?",
                    confirm: "Wyloguj",
                    cancel: "Anuluj"
                }
            },
            button: {
                change: "Zmień dekorację",
                remove: "Usuń dekorację",
                apply: "Zastosuj",
                cancel: "Anuluj",
                browse: "Przeglądaj",
                submit: "Prześlij do recenzji",
                continue: "Kontynuuj",
                back: "Wróć"
            },
            tooltip: {
                pendingReview: "Masz już dekorację oczekującą na recenzję",
                pending: "Oczekuje na recenzję"
            },
            join: {
                tooltip: "Dołącz do serwera Discord Decor, aby otrzymywać powiadomienia o recenzjach i nowych zestawach",
                button: "Serwer Discord"
            },
            create: {
                title: "Stwórz dekorację",
                notViolate: "Upewnij się, że Twoja dekoracja nie narusza {{guidelines}} przed przesłaniem.",
                guidelines: "wytycznych",
                file: "Plik powinien być w formacie APNG lub PNG.",
                fileHolder: "Wybierz plik",
                name: "Ta nazwa będzie używana do identyfikacji dekoracji.",
                nameHolder: "Kostka towarzysząca",
                nameTitle: "Nazwa"
            },
            help: {
                update: "Aby otrzymywać powiadomienia o recenzji, dołącz do {{server}} i zezwól na wiadomości prywatne.",
                server: "Serwera Discord Decor"
            },
            guidelines: {
                hold: "Czekaj chwilę",
                suspended: "Przesyłając dekorację, zgadzasz się na {{guidelines}}. Nieprzestrzeganie ich może skutkować blokadą tworzenia nowych dekoracji.",
                guidelines: "wytyczne"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Wtyczka do robienia zrzutów ekranu motywów - cenzuruje prywatne obrazy i teksty.",
            toolbox: {
                toggle: "Przełącz tryb demonstracyjny"
            },
            keycode: "Aby zmienić skrót klawiszowy, sprawdź {{keycode}}!",
            this: "to narzędzie",
            okay: "Okej!",
            option: {
                keyBind: {
                    label: "Skrót klawiszowy",
                    description: "Klawisz przełączający tryb po naciśnięciu"
                },
                soundVolume: {
                    label: "Głośność dźwięku",
                    description: "Głośność dźwięku przełączania (0 aby wyłączyć)"
                },
                showConfirmationModal: {
                    label: "Pokaż okno potwierdzenia",
                    description: "Pokazuj okno przypominające o skrócie klawiszowym"
                }
            },
            switch: {
                note: "Możesz włączyć to ustawienie później",
                disable: "Wyłączyć okno?"
            },
            shortcut: "To spowoduje ocenzurowanie całego tekstu! Aby to wyłączyć, zapamiętaj skrót:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Wtyczka towarzysząca dla programistów. Prosimy zgłaszać błędy do MutanPlex przez wzmiankę lub PW. Dzięki!",
            reconnect: "Połącz ponownie",
            option: {
                notifyOnAutoConnect: {
                    label: "Powiadom o autopołączeniu",
                    description: "Czy powiadamiać, gdy Dev Companion połączy się automatycznie."
                },
                usePatchedModule: {
                    label: "Używaj spatchowanego modułu",
                    description: "Przy prośbach o ekstrakt, odpowiadaj obecnym spatchowanym modułem zamiast oryginałem."
                },
                reloadAfterToggle: {
                    label: "Przeładuj po przełączeniu",
                    description: "Przeładuj po odebraniu komendy 'wyłącz/włącz wtyczkę'."
                }
            },
            toast: {
                title: "Dev Companion połączony",
                connected: "Połączono z WebSocket",
                disconnected: "Dev Companion rozłączony",
                error: "Błąd Dev Companion",
                reload: "Wymagane przeładowanie",
                failed: "Nie udało się uruchomić zależności: {{failures}}",
                close: "Zamknij",
                stopping: "Błąd podczas zatrzymywania wtyczki {{plugin}}",
                starting: "Błąd podczas uruchamiania wtyczki {{plugin}}",
                noMessage: "Brak komunikatu o błędzie",
                noReason: "Nie podano przyczyny"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "Wyłącza automatyczne wyrzucanie z połączenia głosowego PW po 3 minutach bezczynności oraz przenoszenie na kanały AFK."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Domyślnie wyłącza kamery podczas dołączania do połączenia"
        },
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Włącza baner programistyczny Discorda, który wyświetla ID kompilacji (Build ID)",
            about: "Format banera deweloperskiego. Możesz użyć następujących zmiennych:",
            preview: "Podgląd:",
            empty: "Format nie może być pusty.",
            variables: {
                discord: {
                    title: "Zmienne Discorda",
                    icon: "Ikona Discorda",
                    banner: "Ikona banera deweloperskiego",
                    channel: "Kanał kompilacji (np. Stable)",
                    build: "Numer kompilacji (np. 123456)",
                    hash: "Hash kompilacji"
                },
                plexcord: {
                    title: "Zmienne Plexcord",
                    icon: "Ikona Plexcord",
                    name: "Nazwa Plexcord",
                    version: "Wersja Plexcord",
                    hash: "Hash kompilacji Plexcord",
                    platform: "Platforma Plexcord (np. Dev Build)"
                },
                plextron: {
                    title: "Zmienne Plextron",
                    hashShort: "Krótki hash Plextron",
                    platformType: "Typ platformy Plextron"
                },
                client: {
                    title: "Zmienne klienta",
                    icon: "Ikona pulpitu",
                    name: "Nazwa klienta (np. Discord Canary)",
                    version: "Wersja klienta",
                },
                electron: {
                    title: "Zmienne Electron",
                    icon: "Ikona Electron",
                    version: "Wersja Electron"
                },
                chromium: {
                    title: "Zmienne Chromium",
                    icon: "Ikona Chromium",
                    version: "Wersja silnika Chromium"
                },
                misc: {
                    title: "Zmienne różne",
                    newline: "Znak nowej linii"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Ostrzega, jeśli Twoja wiadomość zawiera słowo znajdujące się na liście AutoMod",
            alert: {
                title: "Czekaj chwilę!",
                content: "Twoja wiadomość zawiera słowo z listy AutoMod (Słowo: '{{trigger}}').",
                content2: "Istnieje duże ryzyko, że Twoja wiadomość zostanie zablokowana lub zostaniesz ukarany przez moderatora.",
                confirm: "Wyślij mimo to",
                cancel: "Anuluj"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Zawsze zaokrągla względne znaczniki czasu w dół, więc 7.6r staje się 7r zamiast 8r"
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Dodaje funkcjonalność przeciągania i upuszczania dla ulubionych emotek"
        },
        dragify: {
            name: "Dragify",
            description: "Przeciągaj użytkowników, kanały lub serwery bezpośrednio do czatu, aby wstawić wzmianki lub zaproszenia.",
            option: {
                userOutput: {
                    label: "Wyjście użytkownika",
                    description: "Format po upuszczeniu użytkownika.",
                    mention: "Wzmianka",
                    id: "ID użytkownika"
                },
                channelOutput: {
                    label: "Wyjście kanału",
                    description: "Format po upuszczeniu kanału.",
                    mention: "Wzmianka #kanał",
                    link: "Link do kanału",
                },
                inviteExpireAfter: {
                    label: "Zaproszenie wygasa po",
                    description: "Kiedy zaproszenie wygaśnie",
                    never: "Nigdy",
                    thirtyMinutes: "30 minut",
                    oneHour: "1 godzina",
                    sixHours: "6 godzin",
                    twelveHours: "12 godzin",
                    oneDay: "1 dzień",
                    sevenDays: "7 dni"
                },
                inviteMaxUses: {
                    label: "Maks. liczba użyć zaproszenia",
                    description: "Limit użyć zaproszenia",
                    noLimit: "Bez limitu",
                    one: "1 użycie",
                    five: "5 użyć",
                    ten: "10 użyć",
                    twentyFive: "25 użyć",
                    fifty: "50 użyć",
                    hundred: "100 użyć"
                },
                inviteTemporaryMembership: {
                    label: "Zaproszenie z członkostwem tymczasowym",
                    description: "Nadaje członkostwo tymczasowe.",
                },
                reuseExistingInvites: {
                    label: "Użyj ponownie istniejącego zaproszenia",
                    description: "Użyj istniejącego zaproszenia zamiast tworzyć nowe."
                },
                allowChatBodyDrop: {
                    label: "Upuszczanie na treść czatu",
                    description: "Pozwala na upuszczanie elementów na główne okno czatu w celu wstawienia tekstu."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify nie zdołało obsłużyć upuszczenia."
                },
                invite: {
                    created: "Zaproszenie utworzone.",
                    unable: "Nie udało się utworzyć zaproszenia.",
                    noChannel: "Brak dostępnego kanału dla zaproszeń.",
                }
            },
            ghost: {
                user: "Użytkownik",
                server: "Serwer",
                dm: "Prywatne wiadomości",
                badge: {
                    channel: "kanał",
                    thread: "wątek",
                    voice: "głosowy",
                    forum: "forum",
                    media: "media",
                    announcement: "ogłoszenie",
                    dm: "pw",
                    user: "użytkownik",
                    server: "serwer"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Łatwo podświetlaj i inspekcjonuj elementy interfejsu.",
            modal: {
                recording: "Nagrywanie...",
                reset: "Resetuj"
            },
            option: {
                keybind: {
                    label: "Skrót klawiszowy",
                    description: "Przełącz podświetlanie"
                },
                showClasses: {
                    label: "Pokaż klasy",
                    description: "Wyświetlaj nazwy klas CSS elementu w podpowiedzi"
                },
                showId: {
                    label: "Pokaż ID",
                    description: "Wyświetlaj atrybut ID elementu w podpowiedzi"
                },
                showFont: {
                    label: "Pokaż czcionkę",
                    description: "Wyświetlaj rodzinę i rozmiar czcionki"
                },
                showPadding: {
                    label: "Pokaż dopełnienie (Padding)",
                    description: "Wyświetlaj wartości paddingu elementu"
                },
                showMargin: {
                    label: "Pokaż margines (Margin)",
                    description: "Wyświetlaj wartości marginesów elementu"
                },
                showBorderRadius: {
                    label: "Pokaż zaokrąglenie krawędzi",
                    description: "Wyświetlaj wartości border-radius elementu"
                },
                showPosition: {
                    label: "Pokaż pozycję",
                    description: "Wyświetlaj typ pozycji CSS i z-index"
                },
                showDisplay: {
                    label: "Pokaż typ wyświetlania (Display)",
                    description: "Wyświetlaj typ display wraz z właściwościami flex/grid"
                }
            },
            toast: {
                copied: {
                    color: "Skopiowano kolor do schowka!"
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Odtwarzaj dźwięki z panelu dźwiękowego (Soundboard) po rozłączeniu się z kanału głosowego.",
            button: "Ustaw jako globalny dźwięk wyjścia",
            toast: {
                failedToPlay: "Ojej! Coś poszło nie tak."
            },
            option: {
                soundGuildId: {
                    label: "ID serwera dźwięku",
                    description: "Wybierz serwer zawierający wybrany dźwięk.",
                    placeholder: "Wybierz serwer..."
                },
                soundId: {
                    label: "ID dźwięku",
                    description: "Wprowadź ID dźwięku, który chcesz odtworzyć.",
                    placeholder: "Wprowadź ID dźwięku..."
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Włącz dostęp do eksperymentów i innych funkcji programistycznych w Discordzie!",
            modal: {
                about: {
                    title: "Więcej informacji",
                    body: "Możesz otworzyć narzędzia deweloperskie Discorda za pomocą {{key}}"
                },
                warning: {
                    title: "Czekaj chwilę!!",
                    body: "Eksperymenty to niewydane funkcje Discorda. Mogą nie działać, popsuć klienta lub doprowadzić do zablokowania konta.",
                    notReponsible: "Używaj ich tylko, jeśli wiesz, co robisz. Plexcord nie odpowiada za szkody spowodowane przez eksperymenty.",
                    useAtOwnRisk: "Jeśli nie wiesz, co robi dany eksperyment, zignoruj go. Nie pytaj nas o to; sami prawdopodobnie nie wiemy.",
                    serverSideFeatures: "Nie, nie możesz używać funkcji po stronie serwera, takich jak zaznaczanie 'Wyślij do klienta'."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Menu deweloperskie na pasku narzędzi",
                    description: "Zmień przycisk Pomocy (?) na pasku narzędzi (prawy górny róg) na menu deweloperskie Discorda"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Pozwala eksportować wiadomości do plików — pojedyncze wiadomości, wszystkie wiadomości użytkownika lub całego kanału",
            option: {
                maxMessages: {
                    label: "Maks. liczba wiadomości",
                    description: "Limit wiadomości do eksportu (0 = bez limitu)"
                },
                includeAttachments: {
                    label: "Dołącz załączniki",
                    description: "Zawrzyj informacje o załącznikach w eksporcie"
                },
                includeEmbeds: {
                    label: "Dołącz osadzone treści (Embeds)",
                    description: "Zawrzyj informacje o osadzonych treściach"
                },
                includeReactions: {
                    label: "Dołącz reakcje",
                    description: "Zawrzyj informacje o reakcjach"
                },
                includeComponents: {
                    label: "Dołącz komponenty",
                    description: "Zawrzyj informacje o komponentach (przyciski itp.)"
                }
            },
            message: {
                invalid: "Nieprawidłowa wiadomość — brak autora",
                unknownUser: "Nieznany użytkownik",
                botEmbed: "Wiadomość osadzona bota",
                attachments: "Załączniki",
                unknown: "Nieznany",
                noUrl: "Brak adresu URL",
                embeds: "Treści osadzone",
                title: "Tytuł",
                description: "Opis",
                url: "URL",
                footer: "Stopka",
                author: "Autor",
                fields: "Pola",
                components: "Komponenty",
                component: "Komponent",
                interactiveElement: "Element interaktywny",
                reactions: "Reakcje",
                errorFormatting: "Błąd podczas formatowania wiadomości",
                unknownError: "Nieznany błąd",
                header: "{{titlePrefix}} {{displayName}} na kanale {{channelName}}",
                from: "Wiadomości od",
                direct: "Prywatne wiadomości",
                exported: "Wyeksportowano dnia",
                total: "Suma wiadomości"
            },
            toast: {
                export: {
                    title: "Eksportuj wiadomości",
                    body: "Nie udało się wyeksportować wiadomości"
                },
                noMessages: {
                    title: "Eksportuj wiadomości",
                    notFoundUser: "Nie znaleziono wiadomości od tego użytkownika na tym kanale",
                    notFoundChannel: "Nie znaleziono żadnych wiadomości na tym kanale"
                },
                failed: {
                    title: "Eksportuj wiadomości",
                    body: "Eksport nie powiódł się"
                },
                userNotFound: {
                    title: "Eksportuj wiadomości",
                    body: "Użytkownik nie został znaleziony"
                },
                complete: {
                    title: "Eksport zakończony",
                    saved: "Plik zapisany",
                    downloaded: "Plik pobrany",
                    messages: "wiadomości"
                }
            },
            context: {
                exportMessage: "Eksportuj tę wiadomość",
                exportAll: "Eksportuj wszystkie wiadomości od {{user}}",
                user: "Użytkownika",
                exportAllChannel: "Eksportuj wszystkie wiadomości z kanału"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Pozwala klonować emotki i naklejki do własnego serwera (kliknij na nie prawym przyciskiem)",
            modal: {
                title: "Własna nazwa",
                invalidName: "Nazwa musi mieć od 2 do 32 znaków i zawierać tylko znaki alfanumeryczne"
            },
            toast: {
                success: "Pomyślnie sklonowano {{name}} do {{guild}}!",
                yourServer: "Twojego serwera",
                failed: "Klonowanie nie powiodło się: ",
                console: "Coś poszło nie tak (sprawdź konsolę!)"
            },
            context: {
                clone: "Klonuj {{type}}",
                cloneName: "Klonuj {{data}}"
            }
        },
        f8break: {
            name: "F8Break",
            description: "Zatrzymuje klienta po naciśnięciu F8, gdy okno DevTools (+ breakpointy) jest otwarte."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Pozwala wysyłać fałszywe emoji/naklejki, używać motywów Nitro i streamować w jakości Nitro",
            option: {
                enableEmojiBypass: {
                    label: "Włącz bypass emoji",
                    description: "Pozwala na wysyłanie fałszywych emoji (omija również brak uprawnień do używania własnych emoji)"
                },
                emojiSize: {
                    label: "Rozmiar emoji",
                    description: "Rozmiar emoji podczas wysyłania"
                },
                transformEmojis: {
                    label: "Przekształcaj emoji",
                    description: "Czy przekształcać fałszywe emoji w prawdziwe"
                },
                enableStickerBypass: {
                    label: "Włącz bypass naklejek",
                    description: "Pozwala na wysyłanie fałszywych naklejek (omija również brak uprawnień do używania naklejek)"
                },
                stickerSize: {
                    label: "Rozmiar naklejek",
                    description: "Rozmiar naklejek podczas wysyłania"
                },
                transformStickers: {
                    label: "Przekształcaj naklejki",
                    description: "Czy przekształcać fałszywe naklejki w prawdziwe"
                },
                transformCompoundSentence: {
                    label: "Przekształcaj zdania złożone",
                    description: "Czy przekształcać fałszywe naklejki i emoji w zdaniach złożonych (zdania zawierające więcej treści niż tylko link do emoji lub naklejki)"
                },
                enableStreamQualityBypass: {
                    label: "Włącz bypass jakości strumienia",
                    description: "Pozwala na streamowanie w jakości Nitro"
                },
                useStickerHyperLinks: {
                    label: "Używaj hiperłączy dla naklejek",
                    description: "Czy używać hiperłączy podczas wysyłania fałszywych naklejek"
                },
                useEmojiHyperLinks: {
                    label: "Używaj hiperłączy dla emoji",
                    description: "Czy używać hiperłączy podczas wysyłania fałszywych emoji"
                },
                hyperLinkText: {
                    label: "Tekst hiperłącza",
                    description: "Jaki tekst ma być użyty w hiperłączu. {{NAME}} zostanie zastąpione nazwą emoji/naklejki."
                },
                disableEmbedPermissionCheck: {
                    label: "Wyłącz sprawdzanie uprawnień do osadzania",
                    description: "Czy wyłączyć sprawdzanie uprawnień do osadzania linków przy wysyłaniu fałszywych emoji i naklejek"
                }
            },
            modal: {
                sticker: "To jest naklejka FakeNitro i renderuje się jako prawdziwa tylko dla Ciebie. Dla innych użytkowników bez wtyczki wyświetla się jako link.",
                emoji: "To jest emoji FakeNitro i renderuje się jako prawdziwe tylko dla Ciebie. Dla innych użytkowników bez wtyczki wyświetla się jako link."
            },
            alert: {
                notice: {
                    title: "Chwileczkę!",
                    body: "Próbujesz wysłać/edytować wiadomość zawierającą emoji lub naklejkę FakeNitro, ale nie masz uprawnień do osadzania linków na tym kanale. Czy na pewno chcesz wysłać tę wiadomość? Elementy FakeNitro pojawią się tylko jako link.",
                    footer: "Możesz wyłączyć to ostrzeżenie w ustawieniach FakeNitro",
                    confirm: "Wyślij mimo to",
                    cancel: "Anuluj",
                    secondaryConfirm: "Nie pokazuj więcej"
                },
                apngSticker: {
                    title: "Chwileczkę!",
                    body: "Nie możesz wysłać tej wiadomości, ponieważ zawiera animowaną naklejkę FakeNitro, a nie masz uprawnień do załączania plików na tym kanale. Usuń naklejkę, aby kontynuować."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Umożliwia motywy profilu poprzez ukrywanie kolorów w opisie (bio) dzięki niewidocznemu kodowaniu 3y3",
            button: {
                copy: "Kopiuj 3y3"
            },
            modal: {
                usage: "Użycie",
                preview: "Podgląd",
                intro: "Po włączeniu tej wtyczki zobaczysz niestandardowe kolory w profilach innych osób korzystających z kompatybilnych wtyczek.",
                setColor: "Aby ustawić własne kolory:",
                step1: "• Użyj próbników kolorów poniżej, aby wybrać kolory",
                step2: "• Kliknij przycisk {{copy}}",
                step3: "• Wklej niewidoczny tekst w dowolnym miejscu w swoim bio",
                pickers: "Próbniki kolorów",
                primary: "Główny",
                accent: "Akcent"
            },
            option: {
                nitroFirst: {
                    label: "Nitro pierwsze",
                    description: "Domyślne źródło kolorów, jeśli oba są obecne",
                    nitro: "Kolory Nitro",
                    fake: "Fałszywe kolory"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Umożliwia motywy i efekty profilu poprzez ukrywanie kolorów i efektów w bio dzięki niewidocznemu kodowaniu 3y3",
            option: {
                prioritizeNitro: {
                    label: "Priorytetyzuj Nitro",
                    description: "Źródło, które ma mieć pierwszeństwo",
                    nitro: "Nitro",
                    aboutMe: "O mnie"
                },
                hideBuilder: {
                    label: "Ukryj kreatora",
                    description: "Ukryj Kreatora FPTE w ustawieniach profilu użytkownika i profilach serwera"
                }
            },
            modal: {
                primary: "Główny",
                accent: "Akcent",
                effect: "Efekt",
                usage: {
                    title: "Użycie",
                    intro: "Po włączeniu tej wtyczki zobaczysz niestandardowe kolory motywów i efekty w profilach innych osób korzystających z tej wtyczki.",
                    setColor: "Aby ustawić własne kolory i efekt:",
                    step1: "Przejdź do ustawień swojego profilu",
                    step2: "Użyj Kreatora FPTE, aby wybrać kolory motywu i efekt",
                    step3: "Kliknij przycisk {{copy}}",
                    step4: "Wklej niewidoczny tekst w dowolnym miejscu w swoim bio"
                }
            },
            toast: {
                copied: "Skopiowano FPTE do schowka!",
                empty: "Kreator FPTE jest pusty; nie ma czego kopiować!"
            },
            button: {
                copyFPTE: "Kopiuj FPTE",
                reset: "Resetuj",
                preview: "Podgląd Kreatora FPTE",
                buildBackwards: "Buduj wstecznie kompatybilne FPTE",
                moreCharacters: "Użyje więcej znaków"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Dodaje ikonę kosza do usuwania kanałów",
            option: {
                keyBind: {
                    label: "Skrót klawiszowy",
                    description: "Klawisz przełączający widoczność kosza."
                },
                reqCtrl: {
                    label: "Wymagaj klawisza Ctrl",
                    description: "Wymaga przytrzymania klawisza Control."
                },
                reqShift: {
                    label: "Wymagaj klawisza Shift",
                    description: "Wymaga przytrzymania klawisza Shift."
                },
                reqAlt: {
                    label: "Wymagaj klawisza Alt",
                    description: "Wymaga przytrzymania klawisza Alt."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavouriteEmojiFirst",
            description: "Umieszcza Twoje ulubione emoji na początku autouzupełniania oraz zapewnia aliasy emoji.",
            option: {
                aliases: {
                    label: "Aliasy",
                    description: "Zarządzaj aliasami emoji."
                },
                clearAll: {
                    label: "Wyczyść wszystko",
                    description: "Usuń wszystkie aliasy."
                }
            },
            modal: {
                clear: {
                    title: "Usuń wszystkie aliasy",
                    description: "Spowoduje to usunięcie każdego zapisanego aliasu emoji.",
                    confirm: "Usuń wszystkie aliasy"
                },
                set: {
                    title: "Ustaw alias",
                    description: "Ustaw alias dla {{emoji}}",
                    placeholder: "Alias, np. 'happy'",
                    save: "Zapisz",
                    error: "Zduplikowany alias"
                }
            },
            toast: {
                set: "Ustawiono alias dla {{emoji}}",
                clearAll: "Usunięto wszystkie aliasy emoji",
                failedDeleted: "Nie udało się usunąć aliasów",
                removed: "Usunięto alias: {{alias}}",
                failedRemove: "Nie udało się usunąć aliasu",
                duplicate: "Zduplikowany alias",
                failedSave: "Nie udało się zapisać aliasu."
            },
            button: {
                edit: "Edytuj alias",
                set: "Ustaw alias"
            }
        },
        favoriteGifSearch: {
            name: "FavouriteGifSearch",
            description: "Dodaje pasek wyszukiwania do ulubionych GIF-ów.",
            placeholder: "Szukaj w ulubionych GIF-ach",
            option: {
                searchOption: {
                    label: "Opcja wyszukiwania",
                    description: "Część adresu URL, którą chcesz przeszukać",
                    url: "Cały URL",
                    path: "Tylko ścieżka (/jakisgif.gif)",
                    hostandpath: "Host i ścieżka (tenor.com jakisgif.gif)"
                }
            }
        },
        favouriteAnything: {
            name: "FavouriteAnything",
            description: "Pozwala polubić dowolny obraz"
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Dodaje przycisk Pobierz w prawym górnym rogu plików"
        },
        findReply: {
            name: "FindReply",
            description: "Przeskakuje do najwcześniejszej odpowiedzi na wiadomość na kanale (ułatwia śledzenie przeszłych rozmów).",
            context: {
                jump: "Skocz do odpowiedzi"
            },
            toast: {
                navigate: "Użyj dolnego panelu do nawigacji między odpowiedziami.",
                container: "Nie można znaleźć elementu kontenera.",
                couldntFind: "Nie można znaleźć wiadomości z odpowiedzią."
            },
            option: {
                includePings: {
                    label: "Uwzględnij wzmianki",
                    description: "Będzie również szukać wiadomości bezpośrednio oznaczających autora (@)"
                },
                includeAuthor: {
                    label: "Uwzględnij autora",
                    description: "Będzie również szukać wiadomości będących odpowiedzią do autora ogólnie, nie tylko na tę konkretną wiadomość"
                },
                hideButtonIfNoReply: {
                    label: "Ukryj przycisk, jeśli brak odpowiedzi",
                    description: "Ukrywa przycisk, jeśli nie ma odpowiedzi na wiadomość"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Usuwa przerwę między blokami kodu a tekstem pod nimi"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Naprawia rozszerzenia plików, zmieniając ich nazwę na obsługiwany format, jeśli to możliwe"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Poprawia jakość obrazów, wymuszając użycie oryginalnego źródła",
            option: {
                originalImagesInChat: {
                    label: "Oryginalne obrazy na czacie",
                    description: "Ładuje oryginalne obrazy również na czacie. OSTRZEŻENIE: Przeczytaj uwagi poniżej"
                }
            },
            modal: {
                about: {
                    title: "Domyślne zachowanie jest następujące:",
                    body: "&mdash; Na czacie ładowane są obrazy zoptymalizowane, ale w pełnej rozdzielczości.",
                    body2: "&mdash; W oknie podglądu ładowany jest oryginalny obraz.",
                    body3: "Możesz również włączyć oryginalne obrazy na czacie, ale uważaj na następujące kwestie:",
                    warning: "&mdash; Animowane obrazy (GIF, WebP itp.) na czacie będą zawsze odtwarzane, niezależnie od tego, czy aplikacja jest aktywna.",
                    warning2: "&mdash; Może powodować opóźnienia (lagi).",
                }
            }
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Naprawia niezwykle głośne osadzone odtwarzacze Spotify, pozwalając na dostosowanie głośności",
            option: {
                volume: {
                    label: "Głośność",
                    description: "Procent głośności dla osadzeń Spotify. Wszystko powyżej 10% jest baaardzo głośne"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "Omija blokowanie wyświetlania filmów YouTube na Discordzie (np. przez UMG)"
        },
        followUser: {
            name: "FollowUser",
            description: "Dodaje opcję Obserwuj w menu kontekstowym użytkownika, aby zawsze być na tym samym kanale głosowym co on",
            indicatorTooltip: "Obserwujesz {{user}} (kliknij, aby wywołać ręcznie, prawy przycisk, aby przestać)",
            unknownUser: "Nieznany użytkownik",
            option: {
                executeOnFollow: {
                    label: "Wykonaj przy obserwowaniu",
                    description: "Upewnij się, że jesteś na tym samym kanale głosowym podczas rozpoczynania obserwowania"
                },
                onlyManualTrigger: {
                    label: "Tylko ręczne wywołanie",
                    description: "Uruchamiaj tylko po kliknięciu wskaźnika"
                },
                followLeave: {
                    label: "Podążaj przy wyjściu",
                    description: "Opuść kanał również wtedy, gdy obserwowany użytkownik go opuści"
                },
                autoMoveBack: {
                    label: "Automatyczny powrót",
                    description: "Automatycznie wracaj na kanał obserwowanego użytkownika, gdy zostaniesz przeniesiony"
                },
                followUserId: {
                    label: "ID obserwowanego użytkownika",
                    description: "ID użytkownika, którego obserwujesz"
                },
                channelFull: {
                    label: "Kanał pełny",
                    description: "Próbuje przenieść Cię na kanał, gdy nie będzie już pełny"
                }
            },
            toast: {
                channelFull: "Kanał jest pełny",
                newVc: "Podążono za użytkownikiem na nowy kanał głosowy",
                insufficientPermissions: "Brak uprawnień do wejścia na kanał głosowy",
                sameVc: "Jesteś już na tym samym kanale",
                disconnect: "Obserwowany użytkownik wyszedł; rozłączono",
                notFollowing: "Obserwowany użytkownik wyszedł, ale nie wybrano opcji rozłączenia",
                notVc: "Obserwowany użytkownik nie jest na kanale głosowym"
            },
            context: {
                follow: "Obserwuj użytkownika",
                unfollow: "Przestań obserwować"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Ładuje dowolną czcionkę z Google Fonts",
            option: {
                selectedFont: {
                    label: "Wybrana czcionka",
                    description: "Aktualnie wybrana czcionka"
                },
                fontSearch: {
                    label: "Wyszukiwanie czcionek",
                    description: "Szukaj i wybieraj czcionki Google Fonts"
                },
                applyOnCodeBlocks: {
                    label: "Zastosuj do bloków kodu",
                    description: "Zastosuj czcionkę do bloków kodu"
                }
            },
            toast: {
                failedLoad: "Nie udało się załadować czcionki"
            },
            modal: {
                settings: {
                    title: "Szukaj w Google Fonts",
                    description: "Wybierz czcionkę, aby ją zastosować",
                    placeholder: "Szukaj czcionek...",
                    previewText: "Zażółć gęślą jaźń",
                    authors: "Autorzy: {{authors}}"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Wymusza koronę właściciela obok nazw użytkowników, nawet na dużych serwerach."
        },
        forwardAnywhere: {
            name: "ForwardAnywhere",
            description: "Jeśli przekazanie wiadomości się nie powiedzie, wyślij ją jako zwykłą wiadomość; pozwala również na przekazywanie treści NSFW",
            option: {
                forwardPreface: {
                    label: "Przedmowa przekazania",
                    description: "Czym powinna być poprzedzona przekazywana treść"
                }
            },
            context: {
                attachments: "Załączniki",
                forwarded: "Przekazano od"
            }
        },
        freaky: {
            name: "Freaky",
            description: "Pozwala wysłać wiadomość w dziwnej czcionce za pomocą komendy /freaky.",
            command: {
                freaky: "To jest zakręcone.",
                message: "Uczyń swoją wiadomość dziwną"
            },
            option: {
                addFreakyEnding: {
                    label: "Dodaj dziwne zakończenie",
                    description: "Dodaj 👅 lub ❤️ na końcu"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Przepisuje i filtruje wyniki Szybkiego Przełącznika, aby pokazywał najczęściej używane kanały."
        },
        friendCloud: {
            name: "FriendCloud",
            description: "Dodaje komendę /friendcloud do wizualizacji użytkowników, z którymi najczęściej wchodzisz w interakcje",
            command: {
                friendcloud: {
                    description: "Wizualizuj swoją chmurę znajomych",
                    count: "Liczba użytkowników do wyświetlenia",
                    mustHigher: "Liczba musi wynosić 1 lub więcej!",
                    noAffinities: "Nie znaleziono powiązań. Sprawdź swoje [ustawienia prywatności](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    noValid: "Nie znaleziono prawidłowych użytkowników w powiązaniach. Sprawdź swoje [ustawienia prywatności](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>).",
                    genFailed: "Nie udało się wygenerować obrazu :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Generuj kody znajomych, aby łatwo dodawać znajomych",
            card: {
                expires: "Wygasa <t:{{expiration}}:R> • {{uses}}/{{maxUses}} użyć",
                copy: "Kopiuj",
                copied: "Skopiowano!",
                codes: "Twoje kody znajomych",
                count: "Kody znajomych - {{invites}}",
                create: "Utwórz kod znajomego",
                revoke: "Unieważnij wszystkie kody",
                loading: "Ładowanie...",
                dontHave: "Nie masz żadnych kodów znajomych."
            }
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Twórz i zarządzaj linkami zaproszeń do znajomych za pomocą komend slash (/create friend invite, /view friend invites, /revoke friend invites).",
            command: {
                create: {
                    description: "Generuje link zaproszenia do znajomych.",
                    message: "discord.gg/{{code}}`\n· Wygasa <t:{{expiration}}:R>\n· Maks. użyć: {{uses}}"
                },
                view: {
                    description: "Wyświetla listę wszystkich wygenerowanych zaproszeń.",
                    message: "_discord.gg/{{code}}_ \n· Wygasa: <t:{{expiration}}:R> \n· Użyto: {{uses}}/{{maxUses}}",
                    noInvites: "Nie masz aktywnych zaproszeń do znajomych."
                },
                revoke: {
                    description: "Unieważnia wszystkie wygenerowane zaproszenia.",
                    message: "Wszystkie zaproszenia do znajomych zostały unieważnione."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Dodaje odznaki pokazujące, jak długo przyjaźnisz się z danym użytkownikiem",
            badge: {
                sprout: {
                    name: "Kiełek",
                    description: "Wasza przyjaźń dopiero się zaczyna"
                },
                blooming: {
                    name: "Rozkwit",
                    description: "Wasza przyjaźń nabiera tempa! (1 miesiąc)"
                },
                burning: {
                    name: "Płomień",
                    description: "Wasza przyjaźń osiągnęła prędkość graniczną (3 miesiące)"
                },
                fighter: {
                    name: "Wojownik",
                    description: "Wasza przyjaźń jest silna (6 miesięcy)"
                },
                star: {
                    name: "Gwiazda",
                    description: "Wasza przyjaźń trwa już DŁUGO (1 rok)"
                },
                royal: {
                    name: "Rodzina Królewska",
                    description: "Wasza przyjaźń przeszła przez ogień i wodę — całe 2 lata!"
                },
                besties: {
                    name: "Najlepsi przyjaciele",
                    description: "Jak wy to w ogóle robicie??? (5 lat)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Pokazuje datę rozpoczęcia znajomości w oknie profilu użytkownika",
            section: "Znajomi od"
        },
        friendTags: {
            name: "FriendTags",
            description: "Pozwala filtrować według własnych tagów w Szybkim Przełączniku, zaczynając wyszukiwanie od &",
            modal: {
                name: "Nazwa",
                users: "Użytkownicy (oddzieleni przecinkiem)",
                userlist: "Lista użytkowników (kliknij użytkownika, aby usunąć)",
                remove: "Usuń",
                add: "Dodaj",
                tag: "Tag",
                removeFrom: "Usuń z",
                addTo: "Dodaj do"
            },
            option: {
                tagConfiguration: {
                    label: "Konfiguracja tagów",
                    description: "Komponent konfiguracji tagów"
                }
            }
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Sprawia, że menu kontekstowe wiadomości w wynikach wyszukiwania ma wszystkie oczekiwane opcje"
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Sprawia, że wzmianki o użytkownikach w polu czatu mają więcej funkcji, takich jak kliknięcie lewym/prawym przyciskiem myszy"
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Sprawia, że awatary zajmują cały kafel kanału głosowego"
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Dodaje przełącznik w oknie profilu, aby pokazać/ukryć Twoją aktywność w grach",
            tooltip: "Przełącz aktywność w grach",
            gameActivity: {
                enabled: "Aktywność w grach włączona",
                disabled: "Aktywność w grach wyłączona"
            },
            option: {
                oldIcon: {
                    label: "Stara ikona",
                    description: "Użyj starego stylu ikon sprzed redesignu Discorda"
                },
                location: {
                    label: "Lokalizacja",
                    description: "Gdzie wyświetlać przycisk przełączania aktywności",
                    panel: "Obok Wycisz/Wyłącz dźwięk",
                    toolbox: "Plexcord Toolbox"
                }
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "Słodki duch pojawi się, jeśli nie odpowiesz na czyjeś PW",
            modal: {
                title: "Zghostowani użytkownicy",
                no: "Brak zghostowanych użytkowników",
                unghost: "odghostuj",
                unknown: "Nieznany",
                unnamedGroup: "Grupa bez nazwy",
                unknownUser: "Nieznany użytkownik",
                clearAll: "Wyczyść wszystko",
                noGhost: "Tu nie ma duchów!",
                clear: "Wyczyść"
            },
            option: {
                showIndicator: {
                    label: "Pokaż wskaźnik",
                    description: "Pokaż licznik duchów na górze listy serwerów"
                },
                showDmIcons: {
                    label: "Pokaż ikony PW",
                    description: "Pokaż ikony duchów obok poszczególnych rozmów PW"
                },
                ignoreGroupDms: {
                    label: "Ignoruj grupy PW",
                    description: "Wyklucz wszystkie grupowe PW z ghostowania"
                },
                exemptedChannels: {
                    label: "Wyłączone kanały",
                    description: "Lista ID kanałów (oddzielona przecinkami), które mają być wyłączone z ghostowania"
                },
                ignoreBots: {
                    label: "Ignoruj boty",
                    description: "Ignoruj PW od botów"
                },
                maxInactiveTimeMs: {
                    label: "Maksymalny czas nieaktywności",
                    description: "Wyświetlaj tylko duchy aktywne w tym czasie",
                    no: "Brak limitu",
                    oneHour: "1 godzina",
                    oneDay: "1 dzień",
                    oneWeek: "1 tydzień",
                    oneMonth: "1 miesiąc"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "Pozwala tworzyć kolekcje GIF-ów",
            context: {
                copyImageLink: "Kopiuj link do obrazu",
                copyUrl: "Kopiuj URL",
                collection: {
                    add: "Dodaj do kolekcji",
                    gif: "Kolekcje GIF",
                    delete: "Usuń kolekcję",
                    create: "Utwórz kolekcję",
                    remove: "Usuń",
                    information: "Informacje o kolekcji",
                    name: "Nazwa",
                    gifs: "GIF-y",
                    created: "Utworzono",
                    updated: "Ostatnia aktualizacja",
                    close: "Zamknij",
                    rename: "Zmień nazwę",
                    move: "Przenieś do kolekcji",
                    select: "Wybierz kolekcję, do której chcesz przenieść element"
                },
                gif: {
                    information: "Informacje",
                    added: "Dodano",
                    width: "Szerokość",
                    height: "Wysokość",
                    close: "Zamknij"
                }
            },
            option: {
                itemPrefix: {
                    label: "Prefiks elementu",
                    description: "Prefiks dla elementów GIF"
                },
                collectionPrefix: {
                    label: "Prefiks kolekcji",
                    description: "Prefiks dla kolekcji"
                },
                onlyShowCollections: {
                    label: "Pokaż tylko kolekcje",
                    description: "Pokaż tylko kolekcje"
                },
                stopWarnings: {
                    label: "Zatrzymaj ostrzeżenia",
                    description: "Wyłącz ostrzeżenia przy usuwaniu"
                },
                showCopyImageLink: {
                    label: "Pokaż 'Kopiuj link do obrazu'",
                    description: "Pokaż opcję {{copyImageLink}} w menu kontekstowym"
                },
                preventDuplicates: {
                    label: "Zapobiegaj duplikatom",
                    description: "Zapobiegaj dodawaniu tego samego GIF-a do kolekcji wielokrotnie"
                },
                defaultEmptyCollectionImage: {
                    label: "Domyślny obraz pustej kolekcji",
                    description: "Obraz/GIF, który będzie pokazywany, gdy kolekcja jest pusta"
                },
                collectionsSortType: {
                    label: "Typ sortowania kolekcji",
                    description: "Typ sortowania dla kolekcji"
                },
                collectionsSortOrder: {
                    label: "Kolejność sortowania kolekcji",
                    description: "Kolejność sortowania dla kolekcji"
                },
                collectionsSort: {
                    label: "Sortowanie kolekcji",
                    description: "Zdecyduj, jak sortować kolekcje",
                    title: "Sortuj kolekcje",
                    sortDescription: "Wybierz kryteria sortowania swoich kolekcji",
                    sortBy: "Sortuj według",
                    name: "Nazwa",
                    creationDate: "Data utworzenia",
                    modifiedDate: "Data modyfikacji",
                    ascending: "Rosnąco",
                    descending: "Malejąco"
                },
                importGifs: {
                    label: "Importuj GIF-y",
                    description: "Importuj kolekcje",
                    button: "Importuj kolekcje"
                },
                exportGifs: {
                    label: "Eksportuj GIF-y",
                    description: "Eksportuj kolekcje",
                    button: "Eksportuj kolekcje"
                },
                resetCollections: {
                    label: "Resetuj kolekcje",
                    description: "Przywróć kolekcje do domyślnych (usuwa wszystkie Twoje kolekcje)",
                    button: "Resetuj kolekcje"
                }
            },
            toast: {
                copied: "Link do obrazu skopiowany do schowka!",
                urlCopied: "URL skopiowany do schowka!",
                already: "Taka kolekcja już istnieje",
                alreadyCollection: "Ten GIF jest już w tej kolekcji"
            },
            modal: {
                create: {
                    title: "Utwórz kolekcję",
                    name: "Nazwa kolekcji",
                    create: "Utwórz"
                },
                rename: {
                    title: "Zmień nazwę kolekcji",
                    name: "Nowa nazwa kolekcji",
                    warning: "Nazwa nie może być dłuższa niż 24 znaki",
                    rename: "Zmień nazwę"
                }
            },
            alert: {
                import: {
                    title: "Czy na pewno?",
                    body: "Importowanie kolekcji nadpisze Twoje obecne kolekcje.",
                    confirm: "Importuj",
                    cancel: "Nieważne"
                },
                reset: {
                    title: "Czy na pewno?",
                    body: "Zresetowanie kolekcji usunie wszystkie Twoje kolekcje.",
                    confirm: "Resetuj",
                    cancel: "Nieważne"
                },
                delete: {
                    title: "Czy na pewno?",
                    deleteBody: "Czy naprawdę chcesz usunąć tę kolekcję?",
                    removeBody: "Czy naprawdę chcesz usunąć ten element?",
                    confirm: "Usuń",
                    remove: "Usuń",
                    cancel: "Nieważne"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "Pozwala wklejać GIF-y bezpośrednio do pola czatu"
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Dodaje komendę do wysyłania losowego GIF-a z ulubionych, z szansą 1 na 10 na oznaczenie właściciela serwera",
            command: {
                gifRoulette: {
                    description: "Kuś los i wyślij GIF-a"
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Szansa na ping właściciela",
                    description: "Czy ma istnieć szansa 1 na 10 na oznaczenie właściciela gildii (o nie)"
                }
            }
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Wyświetla publiczne repozytoria GitHub użytkownika w jego profilu",
            loading: "Ładowanie repozytoriów...",
            option: {
                showStars: {
                    label: "Pokaż gwiazdki",
                    description: "Pokaż gwiazdki repozytorium"
                },
                showLanguage: {
                    label: "Pokaż język",
                    description: "Pokaż główny język repozytorium"
                },
                showRepositoryTab: {
                    label: "Pokaż kartę repozytoriów",
                    description: "Pokaż kartę repozytoriów w modalnym oknie profilu (ukrywa przycisk w połączeniach, gdy włączone)"
                }
            },
            error: {
                error: "Błąd",
                render: "Błąd: Nie udało się wyrenderować GitHubRepos"
            },
            button: {
                show: "Pokaż repozytoria GitHub",
                repositories: "Repozytoria GitHub",
                more: "Pokaż więcej",
                only: "Pokazywanie tylko top {{length}}/{{total}}"
            },
            modal: {
                title: "Repozytoria GitHub użytkownika {{user}}",
                repository: "Repozytorium",
                description: "Opis",
                language: "Język",
                stars: "Gwiazdki",
                viewOnGitHub: "Zobacz na GitHubie",
                close: "Zamknij"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "Dodaje komendę do wysyłania linku do wyszukiwarki internetowej",
            command: {
                googleThat: {
                    description: "Wyślij link do wyszukiwarki",
                    query: "Zapytanie"
                }
            },
            option: {
                hyperlink: {
                    label: "Hiperłącze",
                    description: "Czy wysłany link powinien być hiperłączem z zapytaniem jako etykietą"
                },
                embed: {
                    label: "Osadzenie",
                    description: "Czy wysłany link powinien renderować osadzenie (embed)"
                },
                defaultEngine: {
                    label: "Domyślna wyszukiwarka",
                    description: "Wyszukiwarka, która ma być użyta"
                },
                customEngineURL: {
                    label: "Własny URL wyszukiwarki",
                    description: "URL wyszukiwarki, której chcesz używać"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "Pozwala użyć dowolnej naklejki powitalnej zamiast losowej, poprzez kliknięcie prawym przyciskiem myszy przycisku 'Pomachaj, aby się przywitać!'",
            mode: {
                greet: "Powitanie",
                message: "Wiadomość"
            },
            option: {
                greetMode: {
                    label: "Tryb powitania",
                    description: "Wybierz tryb powitania",
                    greet: "Powitanie (możesz przywitać się tylko 3 razy)",
                    message: "Wiadomość (możesz spamować powitaniami)"
                }
            },
            context: {
                label: "Wybór naklejki powitalnej",
                mode: "Tryb powitania",
                stickers: "Naklejki powitalne",
                multi: "Piekielne Multi-Powitanie",
                send: "Wyślij powitania"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Menu kontekstowe do zrzucania i pobierania emoji oraz naklejek serwera.",
            context: {
                download: {
                    emoji: "Pobierz emoji",
                    sticker: "Pobierz naklejki"
                }
            }
        },
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Dodaje ustawienia dla tagów gildii, takie jak ich ukrywanie lub wyłączanie prośby o ich przyjęcie.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Wyłącz monit o przyjęcie tagu",
                    description: "Wyłącz prośbę o przyjęcie tagów"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Umożliwia ukrycie przycisków czatu",
            tooltip: {
                close: "Zamknij",
                open: "Otwórz"
            },
            option: {
                color: {
                    label: "Kolor",
                    description: "Zmień kolor na czerwony przy otwieraniu"
                },
                open: {
                    label: "Otwarte",
                    description: "Domyślnie otwarte"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Ukrywa załączniki i osadzenia dla poszczególnych wiadomości za pomocą przycisku po najechaniu",
            show: "Pokaż multimedia",
            hide: "Ukryj multimedia",
            hidden: "Multimedia ukryte"
        },
        hideMessages: {
            name: "HideMessages",
            description: "Wtyczka do tymczasowego ukrywania wiadomości do momentu restartu.",
            button: {
                hide: "Ukryj"
            },
            option: {
                hidePopoverButton: {
                    label: "Ukryj przycisk w popoverze",
                    description: "Ukryj przycisk ukrywania w menu podręcznym wiadomości."
                }
            }
        },
        hideServers: {
            name: "HideServers",
            description: "Ukrywa serwery z listy serwerów",
            context: {
                hide: "Ukryj serwer",
                unhide: "Pokaż serwer",
                folder: {
                    hide: "Ukryj folder",
                    unhide: "Pokaż folder"
                }
            },
            option: {
                showIndicator: {
                    label: "Pokaż wskaźnik",
                    description: "Pokaż menu do odkrywania serwerów na dole listy"
                },
                guildsList: {
                    label: "Lista gildii",
                    description: "Usuń ukryte serwery"
                },
                resetHidden: {
                    label: "Resetuj ukryte",
                    description: "Usuń wszystkie ukryte gildie z listy",
                    button: "Resetuj ukryte serwery"
                }
            },
            button: {
                hidden: "Ukryte",
                hiddenServers: "Ukryte serwery",
                remove: "Usuń",
                folder: "Folder",
                removeAll: "Usuń wszystko",
                guilds: "Gildie",
                noHiddenServers: "Brak ukrytych serwerów"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes pozwala na zapisywanie wiadomości",
            main: "Główne",
            button: {
                tooltip: "Holy Notes",
                save: "Zapisz notatkę",
                cancel: "Anuluj",
                noteMessage: "Notuj wiadomość",
                refresh: "Odśwież awatary",
                import: "Importuj notatki",
                export: "Eksportuj notatki",
                deleteAll: "Usuń wszystkie notatki",
                delete: "Usuń notatnik",
                create: "Utwórz notatnik",
                copyText: "Kopiuj tekst",
                copyAttachment: "Kopiuj URL załącznika",
                deleteNote: "Usuń notatkę",
                moveNote: "Przenieś notatkę",
                moveTo: "Przenieś do {{key}}",
                copyId: "Kopiuj ID"
            },
            modal: {
                error: {
                    generic: "Wystąpił błąd podczas analizowania notatek. Sprawdź konsolę po szczegóły.",
                    easter: "Nie znaleziono żadnych notatek. Empathy Banana jest tu dla Ciebie.",
                    empty: "W tym notatniku nie znaleziono żadnych zapisanych notatek."
                },
                help: {
                    title: "Pomoc",
                    description: "Dowiedz się, jak korzystać z Holy Notes",
                    addingNotes: "Dodawanie notatek",
                    addingNotesText: "Aby dodać notatkę, kliknij prawym przyciskiem myszy na wiadomość, najedź na 'Notuj wiadomość' i kliknij przycisk z nazwą notatnika, w którym chcesz zapisać wiadomość.",
                    prototype: "Prototyp",
                    noteMessage: "Kliknięcie samego przycisku 'Notuj wiadomość' domyślnie zapisze ją w notatniku Głównym!",
                    deletingNotes: "Usuwanie notatek",
                    deletingNotesText: "Uwaga: możesz kliknąć notatkę prawym przyciskiem i wybrać 'Usuń notatkę' lub przytrzymać klawisz 'DELETE' i kliknąć na notatkę; to jak magia!",
                    movingNotes: "Przenoszenie notatek",
                    movingNotesText: "Aby przenieść notatkę, kliknij na nią prawym przyciskiem, najedź na 'Przenieś notatkę' i wybierz docelowy notatnik.",
                    jumpToMessage: "Skocz do wiadomości",
                    jumpToMessageText: "Aby przejść do miejsca, w którym notatka została oryginalnie utworzona, kliknij na nią prawym przyciskiem i wybierz 'Skocz do wiadomości'."
                },
                notebook: {
                    title: "NOTATNIK",
                    search: "Szukaj wiadomości...",
                    options: "Opcje sortowania",
                    label: "Menu sortowania",
                    filteredOf: "{{filteredCount}} z {{noteCount}} notatek",
                    note: "{{noteCount}} notatki/notatek",
                    ada: "Rosnąco / Data dodania",
                    amd: "Rosnąco / Data wiadomości",
                    dda: "Malejąco / Data dodania",
                    dmd: "Malejąco / Data wiadomości",
                    change: "Zmień sortowanie",
                    ascending: "Rosnąco",
                    descending: "Malejąco",
                    dateAdded: "Data dodania",
                    messageDate: "Data wiadomości"
                },
                create: {
                    title: "Utwórz notatnik",
                    description: "Wprowadź nazwę dla nowego notatnika",
                    placeholder: "Nazwa notatnika"
                },
                delete: {
                    title: "Usunąć {{notebookName}}?",
                    description: "{{noteCount}} notatek zostanie trwale usuniętych",
                    button: "Usuń"
                },
                tabs: {
                    label: "Karty notatnika"
                }
            },
            toast: {
                saved: "Pomyślnie dodano wiadomość do {{notebook}}",
                deleted: "Pomyślnie usunięto notatkę z {{notebook}}",
                moved: "Pomyślnie przeniesiono notatkę z {{from}} do {{to}}.",
                exists: "Notatnik {{notebookName}} już istnieje.",
                created: "Pomyślnie utworzono {{notebookName}}.",
                deletedNotebook: "Pomyślnie usunięto {{notebookName}}.",
                refreshed: "Pomyślnie odświeżono awatary.",
                deletedAll: "Pomyślnie usunięto wszystkie notatki.",
                imported: "Pomyślnie zaimportowano notatki.",
                invalid: "Nie udało się zaimportować notatek."
            },
            toolbox: {
                action: "Otwórz notatki"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "Zmienia przycisk strony głównej we wskaźnik pisania, jeśli ktoś pisze do Ciebie na PW"
        },
        iconViewer: {
            name: "IconViewer",
            description: "Dodaje nową kartę w ustawieniach do podglądu wszystkich ikon.",
            toolbox: "Otwórz kartę ikon",
            iconFinder: "Wyszukiwarka ikon",
            about: {
                title: "Funkcje",
                preview: "Podgląd ikon",
                list: {
                    copy: "Kopiuj nazwy ikon i zmienne CSS",
                    download: "Pobieraj ikony w różnych formatach (SVG, PNG, GIF itp.)",
                    premade: "Kopiuj gotowe znaleziska ikon dla swoich wtyczek",
                    find: "Znajduj ikony według kontekstu funkcji",
                    search: "Szukaj kolorów, klikając prawym przyciskiem myszy na nazwę koloru",
                    special: "Specjalne podziękowania"
                }
            },
            context: {
                icon: {
                    options: "Opcje ikon",
                    log: "Zaloguj w konsoli",
                    save: "Zapisz jako...",
                    rightClick: "Kliknij prawym, aby zmienić",
                    usage: "Użycie",
                    click: "Kliknij, aby skopiować",
                    copied: "Skopiowano!",
                    actions: "Akcje"
                }
            },
            modal: {
                label: "Szukaj według kontekstu funkcji",
                search: "Szukaj w {{count}} ikonach...",
                function: "Funkcja",
                iconViewer: {
                    colors: "Kolory Icon Viewer",
                    unknown: "nieznany",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Automatycznie restartuje klienta po określonym czasie bezczynności, ale unika restartu, gdy jesteś na kanale głosowym.",
            option: {
                isEnabled: {
                    label: "Włączone",
                    description: "Włącz automatyczny restart po bezczynności"
                },
                idleMinutes: {
                    label: "Minuty bezczynności",
                    description: "Minuty bezczynności przed restartem (gdy nie jesteś na VC)"
                }
            },
            toolbox: {
                disable: "Wyłącz Idle Auto Restart",
                enable: "Włącz Idle Auto Restart"
            }
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Ignoruje aktywności, aby nie pojawiały się TYLKO w Twoim statusie. Możesz skonfigurować konkretne aktywności w zakładkach Zarejestrowane Gry i Aktywności lub użyć ustawień ogólnych poniżej",
            modal: {
                import: {
                    title: "Importuj ID aplikacji wtyczki CustomRPC do listy filtrów"
                },
                filter: {
                    title: "Lista filtrów",
                    description: "Lista ID aktywności oddzielona przecinkami (przydatna do filtrowania konkretnych aktywności RPC i CustomRPC)"
                }
            },
            toast: {
                id: {
                    notSet: "ID aplikacji CustomRPC nie jest ustawione.",
                    alreadyAdded: "ID aplikacji CustomRPC jest już dodane."
                }
            },
            button: {
                import: "Importuj ID CustomRPC"
            },
            option: {
                importCustomRPC: {
                    label: "Importuj CustomRPC"
                },
                listMode: {
                    label: "Tryb listy",
                    description: "Wybierz sposób stosowania listy filtrów",
                    blacklist: "Czarna lista (ignoruj tylko to, co jest na liście)",
                    whitelist: "Biała lista (ignoruj wszystko oprócz tego, co na liście)"
                },
                idList: {
                    label: "Lista ID"
                },
                ignorePlaying: {
                    label: "Ignoruj 'W grze'",
                    description: "Ignoruj wszystkie aktywności typu granie (zwykle gry i aktywności RPC)"
                },
                ignoreStreaming: {
                    label: "Ignoruj 'Streamuje'",
                    description: "Ignoruj wszystkie aktywności typu streamowanie"
                },
                ignoreListening: {
                    label: "Ignoruj 'Słucha'",
                    description: "Ignoruj wszystkie aktywności typu słuchanie (zwykle Spotify)"
                },
                ignoreWatching: {
                    label: "Ignoruj 'Ogląda'",
                    description: "Ignoruj wszystkie aktywności typu oglądanie"
                },
                ignoreCompeting: {
                    label: "Ignoruj 'Rywalizuje'",
                    description: "Ignoruj wszystkie aktywności typu rywalizacja"
                },
                ignoredActivities: {
                    label: "Ignorowane aktywności"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Pozwala ignorować połączenia od konkretnych użytkowników lub grup PW.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Trwale ignorowani użytkownicy",
                    description: "ID użytkowników (przecinek + spacja), którzy powinni być trwale ignorowani"
                }
            },
            button: {
                ignore: "Ignoruj",
                temporarilyIgnore: "Tymczasowo ignoruj połączenia",
                permanentlyIgnore: "Trwale ignoruj połączenia"
            }
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "Nie ukrywaj wiadomości od 'prawdopodobnych spamerów'"
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Wyświetla nazwę pliku obrazów i GIF-ów jako tooltip po najechaniu na nie",
            option: {
                showFullUrl: {
                    label: "Pokaż pełny URL",
                    description: "Pokaż pełny URL obrazu zamiast samej nazwy pliku. Zawsze włączone dla GIF-ów, ponieważ zwykle nie mają znaczącej nazwy pliku"
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Nigdy nie ukrywaj linków do obrazów w wiadomościach, nawet jeśli są jedyną treścią"
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Pozwala na powiększanie obrazów i GIF-ów oraz wyświetla metadane obrazu. Użyj kółka myszy, aby przybliżyć, i Shift + kółko, aby zwiększyć promień soczewki.",
            option: {
                saveZoomValues: {
                    label: "Zapisz wartości powiększenia",
                    description: "Czy zapisywać wartości powiększenia i rozmiaru soczewki"
                },
                invertScroll: {
                    label: "Odwróć przewijanie",
                    description: "Odwraca działanie kółka myszy"
                },
                nearestNeighbour: {
                    label: "Najbliższy sąsiad",
                    description: "Używaj interpolacji najbliższego sąsiada przy skalowaniu obrazów"
                },
                square: {
                    label: "Kwadrat",
                    description: "Spraw, by soczewka była kwadratowa"
                },
                zoom: {
                    label: "Powiększenie",
                    description: "Poziom powiększenia soczewki"
                },
                size: {
                    label: "Rozmiar",
                    description: "Promień / Rozmiar soczewki"
                },
                zoomSpeed: {
                    label: "Prędkość powiększania",
                    description: "Jak szybko zmienia się powiększenie / rozmiar soczewki"
                },
                showMetadata: {
                    label: "Pokaż metadane",
                    description: "Pokaż metadane obrazu po dwukrotnym kliknięciu na wybrany obraz"
                }
            },
            context: {
                square: "Kwadratowa soczewka",
                nearest: "Najbliższy sąsiad",
                zoom: "Powiększenie",
                size: "Rozmiar soczewki",
                zoomSpeed: "Prędkość powiększania",
                showImageMetadata: "Pokaż metadane obrazu",
                view: "Zobacz metadane",
                loading: "Ładowanie...",
                unknown: "Nieznany",
                sizeHTML: "Rozmiar",
                dimensions: "Wymiary",
                filename: "Nazwa pliku"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Dodaje komendę slash /imgtogif, aby utworzyć GIF-a z dowolnego obrazu",
            command: {
                imgToGif: {
                    description: "Pozwala zamienić obraz w GIF-a",
                    image: "Załącznik obrazu do użycia",
                    width: "Szerokość GIF-a",
                    height: "Wysokość GIF-a"
                }
            },
            error: {
                noImage: "Nie określono obrazu!",
                notImage: "Przesłany plik nie jest obrazem"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Pokazuje Twoje niejawne relacje w zakładce Znajomi.",
            option: {
                sortByAffinity: {
                    label: "Sortuj według powiązań",
                    description: "Czy sortować niejawne relacje według stopnia powiązania z Tobą."
                }
            },
            implicit: "Niejawne"
        },
        inRole: {
            name: "InRole",
            description: "Dowiedz się, kto posiada daną rolę, korzystając z menu kontekstowego roli lub komendy /inrole (przeczytaj info o wtyczce!)",
            command: {
                inrole: {
                    description: "Sprawdź, kto ma daną rolę",
                    role: "Rola",
                    noGuild: "Upewnij się, że jesteś na serwerze."
                }
            },
            context: {
                view: "Zobacz członków z rolą"
            },
            modal: {
                about: {
                    title: "Ograniczenia",
                    description: "Jeśli nie masz uprawnień moderatora na serwerze, a serwer jest duży (ponad 100 członków), wtyczka może mieć następujące ograniczenia:",
                    list: {
                        one: "Członkowie offline nie będą wyświetlani",
                        two: "Domyślnie wyświetlanych będzie do 100 członków. Aby zobaczyć więcej, przewiń listę członków, aby ich wczytać.",
                        three: "Znajomi będą jednak zawsze pokazywani niezależnie od ich statusu."
                    }
                },
                member: {
                    title: "Członkowie roli",
                    noMembers: "Wygląda na to, że nie znaleziono w pamięci podręcznej żadnych członków online z tą rolą. Spróbuj przewinąć listę członków, aby wczytać więcej osób!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Natychmiast udostępniaj ekran po dołączeniu do kanału głosowego, z obsługą pulpitów, okien i urządzeń wejściowych wideo (kamery, karty przechwytujące)",
            modal: {
                linux: {
                    title: "Dla Linuxa",
                    body: "W przypadku Wayland wyświetla tylko okno wyboru ekranu",
                    bodyTwo: "W przypadku X11 może, ale nie musi działać :shrug:"
                },
                videoDevices: {
                    title: "Urządzenia wejściowe wideo",
                    body: "Obsługuje kamery i karty przechwytujące (jak Elgato HD60X), gdy są włączone w ustawieniach"
                },
                regardingSound: {
                    title: "Odnośnie dźwięku i podglądu",
                    body: "Używamy ustawień Discorda, aby zdecydować, czy podgląd strumienia i dźwięk powinny być włączone"
                }
            },
            option: {
                streamMedia: {
                    label: "Źródło do streamowania",
                    description: "Przywraca główny ekran, jeśli nie znaleziono",
                    loading: "Ładowanie źródeł...",
                    none: "Nie znaleziono źródeł multimediów",
                    placeholder: "Wybierz źródło do streamowania"
                },
                includeVideoDevices: {
                    label: "Uwzględnij urządzenia wideo",
                    description: "Uwzględnij kamery i karty przechwytujące na liście źródeł"
                },
                autoMute: {
                    label: "Auto-wyciszenie",
                    description: "Automatycznie wycisz mikrofon po dołączeniu do kanału głosowego"
                },
                autoDeafen: {
                    label: "Auto-wyłączenie dźwięku",
                    description: "Automatycznie wyłącz dźwięk po dołączeniu do kanału (również Cię wycisza)"
                },
                instantScreenshare: {
                    label: "Natychmiastowe udostępnianie",
                    description: "Włącza funkcję automatycznego udostępniania ekranu"
                },
                keybindScreenshare: {
                    label: "Skrót do udostępniania",
                    description: "Udostępniaj ekran za pomocą skrótu klawiszowego z ustawień Discorda"
                },
                focusDiscord: {
                    label: "Skupienie na Discordzie",
                    description: "Uruchamiaj udostępnianie skrótem tylko wtedy, gdy Discord jest aktywnym oknem"
                },
                toolboxManagement: {
                    label: "Zarządzanie Toolboxem",
                    description: "Włącz/Wyłącz Instant Screenshare"
                }
            },
            toolbox: {
                label: "Instant Screenshare",
                toast: "Instant Screenshare {{state}}",
                enabled: "Włączone",
                disabled: "Wyłączone"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Szyfruj swoje wiadomości w sposób niebudzący podejrzeń!",
            option: {
                savedPasswords: {
                    label: "Zapisane hasła",
                    description: "Zapisane hasła (oddzielone przecinkiem)"
                }
            },
            button: {
                encrypt: "Szyfruj wiadomość",
                decrypt: "Deszyfruj wiadomość",
                hidden: "Wskaźnik ukrytej wiadomości (InvisibleChat)"
            },
            tooltip: {
                hidden: "Ta wiadomość zawiera ukrytą treść! (InvisibleChat)"
            },
            embed: {
                title: "Odszyfrowana wiadomość",
                footer: "Wysłano za pomocą InvisibleChat"
            },
            modal: {
                encrypt: {
                    title: "Szyfruj wiadomość",
                    secret: "Sekret (ukryta treść)",
                    cover: "Przykrywka (2 lub więcej słów!!)",
                    password: "Hasło",
                    dontUseCover: "Nie używaj przykrywki",
                    send: "Wyślij",
                    cancel: "Anuluj"
                },
                decrypt: {
                    title: "Deszyfruj wiadomość",
                    with: "Wiadomość z szyfrowaniem",
                    password: "Hasło",
                    decrypt: "Deszyfruj",
                    cancel: "Anuluj"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Pozwala edytować domyślne wartości przy tworzeniu zaproszeń na serwer.",
            option: {
                inviteDuration: {
                    label: "Czas trwania zaproszenia",
                    description: "Domyślny czas ważności zaproszeń",
                    thirtyMinutes: "30 minut",
                    oneHour: "1 godzina",
                    sixHours: "6 godzin",
                    twelveHours: "12 godzin",
                    oneDay: "1 dzień",
                    sevenDays: "7 dni",
                    forever: "Nigdy"
                },
                maxUses: {
                    label: "Maksymalna liczba użyć",
                    description: "Domyślny limit użyć zaproszeń",
                    unlimited: "Bez limitu",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Członkostwo tymczasowe",
                    description: "Domyślne ustawienie członkostwa tymczasowego dla zaproszeń"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Nadaje kolorom nazw użytkowników na czacie unikalny wygląd, podobnie jak w klientach IRC",
            option: {
                lightness: {
                    label: "Jasność",
                    description: "Jasność w %. Zmień, jeśli kolory są zbyt jasne lub zbyt ciemne"
                },
                memberListColors: {
                    label: "Kolory listy członków",
                    description: "Zastąp kolory ról na liście członków"
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Tylko dla użytkowników bez koloru",
                    description: "Nadawaj kolory tylko użytkownikom, którzy nie mają zdefiniowanego koloru roli"
                },
                applyColorOnlyInDms: {
                    label: "Tylko w PW",
                    description: "Nadawaj kolory tylko w wiadomościach prywatnych; nie zmieniaj kolorów na serwerach."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "Zapisuje lokalnie każdego, z kim się komunikowałeś (w tym serwery), na wypadek utraty danych",
            section: {
                description: "Zapewnia listę użytkowników, o których wspomniałeś lub którym odpowiedziałeś, właścicieli serwerów, do których należysz, lub członków Twojej gildii",
                empty: "Obecnie lista jest pusta.",
                tooltip: "{{user}}, zaktualizowano {{updatedAtContent}}",
                owner: "Właściciel serwera",
                iRememberYou: "Pamiętam Cię"
            },
            context: {
                user: "Opcje użytkownika",
                copy: "Kopiuj ID użytkownika",
                copyToast: "Skopiowano ID użytkownika do schowka",
                view: "Zobacz profil"
            },
            modal: {
                title: "Edytor",
                filter: "Filtruj przez tag, nazwę, ID",
                button: {
                    validate: "Waliduj i zapisz",
                    cancel: "Anuluj",
                    openEditor: "Otwórz edytor",
                    resetData: "Zresetuj pamięć",
                    sure: "Czy na pewno?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Dodaje opcje menu kontekstowego pozwalające skoczyć na sam początek lub koniec kanału/PW",
            context: {
                top: "Skocz do pierwszej wiadomości",
                bottom: "Skocz do ostatniej wiadomości",
                noMessages: "Nie znaleziono wiadomości od tego użytkownika na tym kanale.",
                searchFailed: "Nie udało się przeszukać wiadomości."
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Próbuje powrócić do kanału, na którym byłeś przed przełączeniem kont lub załadowaniem Discorda."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Dodaje efekty dźwiękowe z OperaGX lub osu! podczas pisania na klawiaturze.",
            option: {
                volume: {
                    label: "Głośność",
                    description: "Głośność dźwięków klawiatury"
                },
                soundPack: {
                    label: "Paczka dźwięków",
                    description: "Zestaw dźwięków używany podczas pisania",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Wysyła powiadomienie, jeśli wiadomość pasuje do określonych słów kluczowych lub wyrażeń regularnych (regex)",
            idHolder: "ID",
            keywordEntry: "Wpis słowa kluczowego",
            regexHolder: "przykład|regex",
            ignoreCase: "Ignoruj wielkość liter",
            whiteblackLabel: "Biała lista/Czarna lista",
            tab: {
                title: "Słowa kluczowe",
                clearAll: "Wyczyść wszystko"
            },
            button: {
                addId: "Dodaj ID",
                addKeyword: "Dodaj słowo kluczowe"
            },
            listTypeSelector: {
                blacklist: "Czarna lista",
                whitelist: "Biała lista",
                placeholder: "Wybierz typ listy"
            },
            option: {
                ignoreBots: {
                    label: "Ignoruj boty",
                    description: "Ignoruj wiadomości od botów"
                },
                amountToKeep: {
                    label: "Ilość do zachowania",
                    description: "Liczba wiadomości przechowywanych w logu"
                },
                keywords: {
                    label: "Słowa kluczowe",
                    description: "Zarządzaj słowami kluczowymi"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "Dodaje wskaźnik ostatniej aktywności pod nazwami użytkowników na liście PW oraz liście członków serwerów i grup",
            unit: {
                d: "dni",
                h: "godz.",
                m: "min."
            },
            online: "Online {{formattedTime}} temu"
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "Mała wtyczka do wyświetlania statusu ListenBrainz (Rich Presence)",
            about: {
                title: "O API MusicBrainz",
                description: "API MusicBrainz nie wymaga klucza API, ale wymaga {{link}}. Dla większości wystarczy adres e-mail.",
                userAgent: "sensowny ciąg user-agent"
            },
            option: {
                username: {
                    label: "Nazwa użytkownika",
                    description: "Nazwa użytkownika ListenBrainz"
                },
                mbContact: {
                    label: "Kontakt MB",
                    description: "Kontakt ListenBrainz"
                },
                shareUsername: {
                    label: "Udostępnij nazwę użytkownika",
                    description: "Pokaż link do profilu ListenBrainz (może być widoczny tylko dla innych)"
                },
                shareSong: {
                    label: "Udostępnij utwór",
                    description: "Pokaż link do aktualnego utworu na ListenBrainz (może być widoczny tylko dla innych)"
                },
                hideWithSpotify: {
                    label: "Ukryj przy Spotify",
                    description: "Ukryj status ListenBrainz, jeśli Spotify jest uruchomione"
                },
                hideWithActivity: {
                    label: "Ukryj przy innej aktywności",
                    description: "Ukryj status ListenBrainz, jeśli masz ustawiony jakikolwiek inny status aktywności"
                },
                useTimeBar: {
                    label: "Używaj paska czasu",
                    description: "Używaj czasu trwania utworu do wyświetlania paska postępu (wymaga statusu 'Słucha')"
                },
                statusName: {
                    label: "Nazwa statusu",
                    description: "Własny tekst statusu"
                },
                nameFormat: {
                    label: "Format nazwy",
                    description: "Pokaż nazwę utworu i artysty w nazwie statusu",
                    custom: "Użyj własnej nazwy statusu",
                    artistSong: "Format 'artysta - utwór'",
                    songArtist: "Format 'utwór - artysta'",
                    artistOnly: "Tylko nazwa artysty",
                    songOnly: "Tylko nazwa utworu",
                    albumName: "Użyj nazwy albumu (powróci do własnego tekstu, jeśli brak albumu)"
                },
                useListeningStatus: {
                    label: "Używaj statusu 'Słucha'",
                    description: "Pokazuj status 'Słucha' zamiast 'Gra w'"
                },
                missingArt: {
                    label: "Brak okładki",
                    description: "Gdy brakuje albumu lub okładki",
                    listenbrainzLogo: "Użyj dużego logo ListenBrainz",
                    generic: "Użyj domyślnego symbolu zastępczego"
                },
                useLogo: {
                    label: "Używaj logo",
                    description: "Pokazuj logo ListenBrainz na okładce albumu"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Zmienia cytaty wyświetlane podczas ładowania Discorda",
            option: {
                replaceEvents: {
                    label: "Zastępuj podczas wydarzeń",
                    description: "Czy wtyczka powinna działać również podczas wydarzeń specjalnych (np. Halloween)?"
                },
                enablePluginPresetQuotes: {
                    label: "Włącz cytaty wtyczki",
                    description: "Włącz cytaty predefiniowane przez tę wtyczkę"
                },
                enableDiscordPresetQuotes: {
                    label: "Włącz cytaty Discorda",
                    description: "Włącz oryginalne cytaty Discorda (w tym te z wydarzeń specjalnych)"
                },
                additionalQuotes: {
                    label: "Dodatkowe cytaty",
                    description: "Twoje własne cytaty, oddzielone poniższym separatorem"
                },
                additionalQuotesDelimiter: {
                    label: "Separator dodatkowych cytatów",
                    description: "Znak oddzielający cytaty"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Pozwala zalogować się na innym urządzeniu poprzez skanowanie kodu QR, zupełnie jak w aplikacji mobilnej!",
            option: {
                scanQr: {
                    label: "Skanuj kod QR",
                    description: "Zeskanuj kod QR logowania",
                    notEnabled: "Włącz wtyczkę i zrestartuj klienta, aby móc skanować kody QR"
                }
            },
            neverScan: "Nigdy nie skanuj kodu QR logowania od innych użytkowników lub aplikacji.",
            hold: "Przytrzymaj, aby potwierdzić logowanie",
            scanning: "Skanowanie...",
            stopScanning: "Zatrzymaj skanowanie",
            usingWebcam: "Skanuj kamerką internetową",
            dragDrop: "Przeciągnij i upuść obraz tutaj lub kliknij, aby wybrać plik",
            orPaste: "Lub wklej obraz ze schowka!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Pozwala na zmianę (domyślnej) prędkości odtwarzania osadzonych multimediów",
            playbackSpeed: "Prędkość odtwarzania",
            context: {
                label: "Kontrola prędkości odtwarzania"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Domyślna prędkość wiadomości głosowych",
                    description: "Wiadomości głosowe"
                },
                defaultVideoSpeed: {
                    label: "Domyślna prędkość wideo",
                    description: "Filmy"
                },
                defaultAudioSpeed: {
                    label: "Domyślna prędkość audio",
                    description: "Pliki dźwiękowe"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Pokazuje liczbę osób online, całkowitą liczbę członków oraz użytkowników na kanałach głosowych — na liście członków i w tooltipie.",
            option: {
                toolTip: {
                    label: "Tooltip",
                    description: "Pokazuj liczbę członków w podpowiedzi po najechaniu na serwer"
                },
                memberList: {
                    label: "Lista członków",
                    description: "Pokazuj liczbę członków w nagłówku listy"
                },
                voiceActivity: {
                    label: "Aktywność głosowa",
                    description: "Pokazuj liczbę osób na kanałach głosowych"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} online na tym kanale",
            totalMembers: "{{formattedTotalCount}} wszystkich członków serwera",
            totalVoice: "{{formattedVoiceCount}} osób na głosowym"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Wyświetla awatary użytkowników i ikony ról wewnątrz wzmianek",
            option: {
                showAtSymbol: {
                    label: "Pokaż symbol @",
                    description: "Czy symbol @ powinien być wyświetlany przy wzmiankach o użytkownikach"
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Dodaje przycisk 'miauczenia' do paska czatu",
            button: {
                meow: "Miau"
            }
        },
        messageBurst: {
            name: "MessageBurst",
            description: "Łączy wiadomości wysłane w krótkim odstępie czasu w jedną, jeśli nikt inny nie przerwał Twojej serii.",
            option: {
                timePeriod: {
                    label: "Okres czasu",
                    description: "Czas trwania serii (w sekundach)."
                },
                shouldMergeWithAttachment: {
                    label: "Łącz z załącznikami",
                    description: "Czy wiadomość powinna zostać połączona, jeśli poprzednia zawierała załącznik?"
                },
                useSpace: {
                    label: "Używaj spacji",
                    description: "Czy dodawać spację między połączonymi wiadomościami zamiast nowej linii."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Przytrzymaj Backspace i kliknij, aby usunąć; kliknij dwukrotnie, aby edytować/odpowiedzieć",
            option: {
                singleClickAction: {
                    label: "Akcja pojedynczego kliknięcia",
                    description: "Akcja po kliknięciu (Twoje wiadomości)"
                },
                singleClickModifier: {
                    label: "Modyfikator pojedynczego kliknięcia",
                    description: "Wymagany klawisz dla pojedynczego kliknięcia (Twoje wiadomości)"
                },
                singleClickOthersAction: {
                    label: "Akcja kliknięcia (Inni)",
                    description: "Akcja po kliknięciu (wiadomości innych osób)"
                },
                singleClickOthersModifier: {
                    label: "Modyfikator kliknięcia (Inni)",
                    description: "Wymagany klawisz dla kliknięcia (wiadomości innych osób)"
                },
                doubleClickAction: {
                    label: "Akcja podwójnego kliknięcia",
                    description: "Akcja po dwukrotnym kliknięciu (Twoje wiadomości)"
                },
                doubleClickOthersAction: {
                    label: "Akcja podwójnego kliknięcia (Inni)",
                    description: "Akcja po dwukrotnym kliknięciu (wiadomości innych osób)"
                },
                doubleClickModifier: {
                    label: "Modyfikator podwójnego kliknięcia",
                    description: "Wymagany klawisz dla podwójnego kliknięcia"
                },
                tripleClickAction: {
                    label: "Akcja potrójnego kliknięcia",
                    description: "Akcja po trzykrotnym kliknięciu"
                },
                tripleClickModifier: {
                    label: "Modyfikator potrójnego kliknięcia",
                    description: "Wymagany klawisz dla trzykrotnego kliknięcia"
                },
                reactEmoji: {
                    label: "Emoji reakcji",
                    description: "Emoji używane do akcji reagowania"
                },
                addAdditionalReacts: {
                    label: "Dodaj dodatkowe reakcje",
                    description: "Dodaje również skonfigurowane dodatkowe emoji reakcji"
                },
                additionalReactEmojis: {
                    label: "Dodatkowe emoji reakcji",
                    description: "Dodatkowe emoji przy akcji reagowania (oddzielone przecinkiem/nową linią, maks. {{count}})"
                },
                disableInDms: {
                    label: "Wyłącz w PW",
                    description: "Wyłącz akcje kliknięcia w wiadomościach prywatnych"
                },
                disableInSystemDms: {
                    label: "Wyłącz w PW systemowych",
                    description: "Wyłącz akcje kliknięcia w wiadomościach systemowych"
                },
                clickTimeout: {
                    label: "Czas oczekiwania na kliknięcie",
                    description: "Czas na rozróżnienie podwójnego/potrójnego kliknięcia (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Próg przytrzymania przy dwukliku",
                    description: "Maksymalny czas przytrzymania dla akcji dwukliku (ms). Dłuższe przytrzymanie pozwala na zaznaczenie tekstu"
                },
                deferDoubleClickForTriple: {
                    label: "Opóźnij dwuklik dla trójkliku",
                    description: "Opóźnia akcję dwukliku, aby umożliwić trzykrotne kliknięcie (wyłącza trójklik, gdy odznaczone)"
                },
                selectionHoldTimeout: {
                    label: "Czas przytrzymania dla zaznaczenia",
                    description: "Czas pozwalający na zaznaczenie tekstu (ms)"
                },
                quoteWithReply: {
                    label: "Cytuj z odpowiedzią",
                    description: "Podczas cytowania wykonaj również odpowiedź na wiadomość"
                },
                useSelectionForQuote: {
                    label: "Używaj zaznaczenia do cytatu",
                    description: "Używaj zaznaczonego tekstu do cytowania, jeśli jest dostępny"
                }
            },
            actions: {
                none: "Brak",
                delete: "Usuń",
                copyLink: "Kopiuj link",
                copyID: "Kopiuj ID",
                copyContent: "Kopiuj treść",
                copyUserID: "Kopiuj ID użytkownika",
                edit: "Edytuj",
                reply: "Odpowiedz",
                react: "Reaguj",
                openThread: "Otwórz wątek",
                openTab: "Otwórz kartę",
                quote: "Cytuj",
                pin: "Przypnij"
            },
            missingPermissions: {
                react: "Nie można zareagować: Brak uprawnień",
                pin: "Nie można przypiąć: Brak uprawnień",
            },
            cannotQuote: "Nie można cytować tego typu wiadomości",
            copy: {
                messageId: "Skopiowano ID wiadomości!",
                messageContent: "Skopiowano treść wiadomości!",
                userId: "Skopiowano ID użytkownika!"
            },
            linkCopied: "Skopiowano link!"
        },
        messageColors: {
            name: "MessageColors",
            description: "Wyświetla kody kolorów (np. #FF0042) bezpośrednio w wiadomościach",
            option: {
                renderType: {
                    label: "Typ renderowania",
                    description: "Jak wyświetlać kolory",
                    textColor: "Kolor tekstu",
                    block: "Blok obok",
                    backgroundColor: "Kolor tła"
                },
                enableShortHexCodes: {
                    label: "Włącz krótkie kody Hex",
                    description: "Włącz 3-znakowe kody (np. #39f)"
                },
                blockView: {
                    label: "Widok bloków",
                    description: "Gdzie wyświetlać bloki kolorów",
                    right: "Prawa strona",
                    left: "Lewa strona",
                    both: "Obie strony"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Pokazuje, jak długo trwało pobieranie wiadomości dla bieżącego kanału",
            option: {
                showIcon: {
                    label: "Pokaż ikonę",
                    description: "Pokaż ikonę czasu pobierania na pasku wiadomości"
                },
                showMs: {
                    label: "Pokaż milisekundy",
                    description: "Pokazuj milisekundy w pomiarze"
                },
                iconColor: {
                    label: "Kolor ikony",
                    description: "Kolor ikony (wartość CSS)"
                }
            },
            loaded: "Wiadomości załadowane w {{time}}ms ({{timeAgo}})",
            day: "{{s}} dni temu",
            hour: "{{s}} godz. temu",
            minute: "{{s}} min. temu",
            justNow: "przed chwilą"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Wyświetla wskaźnik dla wiadomości, których wysłanie zajęło ≥n sekund",
            day: "dzień",
            days: "dni",
            hour: "godzina",
            hours: "godziny",
            minute: "minuta",
            minutes: "minuty",
            second: "sekunda",
            seconds: "sekundy",
            millisecond: "milisekunda",
            milliseconds: "milisekundy",
            and: "i",
            oldKotlinDetected: "Podejrzenie starej wersji klienta Discord na Androida.",
            ahead: "Zegar użytkownika śpieszy się o {{delta}}.",
            delay: "Ta wiadomość została wysłana z opóźnieniem {{delta}}.",
            delayedMessage: "Opóźniona wiadomość",
            oldAndroidClient: "Stary klient Android",
            option: {
                latency: {
                    label: "Opóźnienie",
                    description: "Próg w sekundach dla wskaźnika opóźnienia"
                },
                detectDiscordKotlin: {
                    label: "Wykrywaj Discord Kotlin",
                    description: "Wykrywaj stare klienty Androida"
                },
                showMillis: {
                    label: "Pokaż milisekundy",
                    description: "Pokazuj milisekundy"
                },
                ignoreSelf: {
                    label: "Ignoruj siebie",
                    description: "Nie dodawaj wskaźnika do własnych wiadomości"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Dodaje podgląd do wiadomości zawierających link do innej wiadomości",
            option: {
                messageBackgroundColor: {
                    label: "Kolor tła wiadomości",
                    description: "Kolor tła wiadomości w podglądzie"
                },
                automodEmbeds: {
                    label: "Osadzenia Automod",
                    description: "Używaj osadzeń w stylu automoda (mniejsze, ale mniej info)",
                    always: "Zawsze używaj automoda",
                    prefer: "Preferuj automoda, ale użyj pełnego jeśli treść jest bogata",
                    never: "Nigdy nie używaj automoda"
                },
                listMode: {
                    label: "Tryb listy",
                    description: "Czy lista ID ma być czarną czy białą listą",
                    blacklist: "Czarna lista",
                    whitelist: "Biała lista"
                },
                idList: {
                    label: "Lista ID",
                    description: "ID serwerów/kanałów/użytkowników (oddzielone przecinkiem)"
                },
                clearMessageCache: {
                    label: "Wyczyść cache wiadomości",
                    description: "Wyczyść pamięć podręczną linkowanych wiadomości"
                }
            },
            noContent: {
                noAttachments: "brak treści, {{count}} osadzeń",
                noEmbeds: "brak treści, {{count}} załączników",
                both: "brak treści, {{attachments}} załączników i {{embeds}} osadzeń"
            },
            dm: "Wiadomość prywatna",
            groupDm: "Grupa PW",
            server: "Serwer"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "Dodaje podpowiedź z podglądem wiadomości po najechaniu na linki do wiadomości, odpowiedzi i przekazane treści.",
            loading: "Ładowanie...",
            option: {
                onLink: {
                    label: "Na linku",
                    description: "Pokaż podgląd po najechaniu na link do wiadomości"
                },
                onReply: {
                    label: "Na odpowiedzi",
                    description: "Pokaż podgląd po najechaniu na pasek odpowiedzi"
                },
                onForward: {
                    label: "Na przekazaniu",
                    description: "Pokaż podgląd po najechaniu na przekazaną wiadomość"
                },
                display: {
                    label: "Widok",
                    description: "Styl wyświetlania",
                    auto: "Taki sam jak wiadomość",
                    compact: "Kompaktowy",
                    cozy: "Wygodny"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Tymczasowo zapisuje usunięte i edytowane wiadomości.",
            removeMessage: "Usuń historię wiadomości",
            removeMessageTemporary: "Usuń wiadomość (tymczasowo)",
            clearMessageLog: "Wyczyść log wiadomości",
            modal: {
                edit: {
                    title: "Historia edycji wiadomości",
                    tooltip: "Ten stan edycji nie został zapisany, więc nie można go wyświetlić."
                }
            },
            option: {
                deleteStyle: {
                    label: "Styl usuwania",
                    description: "Jak oznaczać usunięte wiadomości",
                    text: "Czerwony tekst",
                    overlay: "Czerwona nakładka"
                },
                logDeletes: {
                    label: "Zapisuj usunięte",
                    description: "Czy zapisywać usunięte wiadomości"
                },
                collapseDeleted: {
                    label: "Zwijaj usunięte",
                    description: "Czy zwijać usunięte wiadomości (podobnie jak zablokowane)"
                },
                logEdits: {
                    label: "Zapisuj edycje",
                    description: "Czy zapisywać edytowane wiadomości"
                },
                inlineEdits: {
                    label: "Edycje w linii",
                    description: "Czy wyświetlać historię edycji jako część treści wiadomości"
                },
                ignoreBots: {
                    label: "Ignoruj boty",
                    description: "Czy ignorować wiadomości od botów"
                },
                ignoreSelf: {
                    label: "Ignoruj siebie",
                    description: "Czy ignorować własne wiadomości"
                },
                ignoreUsers: {
                    label: "Ignoruj użytkowników",
                    description: "Lista ID użytkowników do ignorowania (po przecinku)"
                },
                ignoreChannels: {
                    label: "Ignoruj kanały",
                    description: "Lista ID kanałów do ignorowania (po przecinku)"
                },
                ignoreGuilds: {
                    label: "Ignoruj serwery",
                    description: "Lista ID serwerów do ignorowania (po przecinku)"
                },
                showEditDiffs: {
                    label: "Pokaż różnice w edycji",
                    description: "Pokazuj wizualne różnice między wersjami wiadomości"
                },
                separatedDiffs: {
                    label: "Rozdzielone różnice",
                    description: "Rozdzielaj dodane i usunięte fragmenty dla lepszej czytelności"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "Ulepsza wtyczkę MessageLogger o dodatkowe funkcje.",
            updateImageCacheDir: "Pomyślnie zaktualizowano folder cache obrazów.",
            updateLogsDir: "Pomyślnie zaktualizowano folder logów.",
            failedUpdate: "Nie udało się zaktualizować folderu.",
            blacklist: "Czarna lista",
            whitelist: "Biała lista",
            failedToRemove: "Nie udało się usunąć wiadomości",
            successfullyImported: "Pomyślnie zaimportowano logi",
            errorImportingLogs: "Błąd podczas importowania logów. Sprawdź konsolę.",
            importing: "Importowanie...",
            importLogs: "Importuj logi",
            exporting: "Eksportowanie...",
            exportLogs: "Eksportuj logi",
            alert: {
                clearLogs: {
                    title: "Wyczyść logi",
                    body: "Czy na pewno chcesz wyczyścić wszystkie logi?",
                    confirmText: "Wyczyść",
                    cancel: "Anuluj"
                },
                clearVisibleLogs: {
                    title: "Wyczyść widoczne logi",
                    body: "Czy na pewno chcesz wyczyścić {{messages}} logów?",
                    confirmText: "Wyczyść",
                    cancel: "Anuluj"
                },
                cleared: "Baza logów i cache zostały wyczyszczone."
            },
            context: {
                title: "Logger wiadomości",
                jumpToMessage: "Skocz do wiadomości",
                openUserProfile: "Otwórz profil",
                copyContent: "Kopiuj treść",
                copyUserId: "Kopiuj ID użytkownika",
                copyMessageId: "Kopiuj ID wiadomości",
                copyChannelId: "Kopiuj ID kanału",
                copyServerId: "Kopiuj ID serwera",
                deleteLog: "Usuń log",
                fromUsernameDm: "Z PW użytkownika {{username}}",
                fromGroupDm: "Z grupy PW {{channelName}}",
                fromServerChannel: "Z kanału {{channelName}} na serwerze {{serverName}}",
                moveTypeTo: "Przenieś {{type}} do {{destination}}",
                removeTypeFrom: "Usuń {{type}} z {{list}}",
                openLogsFor: "Otwórz logi dla {{name}}",
                openLogs: "Otwórz logi",
                removeMessage: "Usuń wiadomość (Na stałe)",
                removeMessageHistory: "Usuń historię (Na stałe)",
                deleteMessageHide: "Usuń (Ukryj przed innymi loggerami)",
                addServerToBlacklist: "Dodaj serwer do czarnej listy",
                addServerToWhitelist: "Dodaj serwer do białej listy",
                removeServerFromBlacklist: "Usuń serwer z czarnej listy",
                removeServerFromWhitelist: "Usuń serwer z białej listy",
                moveServerToBlacklist: "Przenieś serwer do czarnej listy",
                moveServerToWhitelist: "Przenieś serwer do białej listy",
                addUserToBlacklist: "Dodaj użytkownika do czarnej listy",
                addUserToWhitelist: "Dodaj użytkownika do białej listy",
                removeUserFromBlacklist: "Usuń użytkownika z czarnej listy",
                removeUserFromWhitelist: "Usuń użytkownika z białej listy",
                moveUserToBlacklist: "Przenieś użytkownika do czarnej listy",
                moveUserToWhitelist: "Przenieś użytkownika do białej listy",
                addChannelToBlacklist: "Dodaj kanał do czarnej listy",
                addChannelToWhitelist: "Dodaj kanał do białej listy",
                removeChannelFromBlacklist: "Usuń kanał z czarnej listy",
                removeChannelFromWhitelist: "Usuń kanał z białej listy",
                moveChannelToBlacklist: "Przenieś kanał do czarnej listy",
                moveChannelToWhitelist: "Przenieś kanał do białej listy"
            },
            type: {
                server: "Serwer",
                user: "Użytkownik",
                channel: "Kanał"
            },
            button: {
                chooseFolder: "Wybierz folder",
                browse: "Przeglądaj",
                clearLogs: "Wyczyść wszystko",
                clearVisibleLogs: "Wyczyść widoczne",
                sortOldest: "Najpierw najstarsze",
                sortNewest: "Najpierw najnowsze",
                loadMore: "Wczytaj więcej",
                noResults: "Brak wyników w {{tab}}",
                tryOtherTabs: "Spróbuj w {{nextTab}} lub {{lastTab}}",
                importLogs: "Importuj logi"
            },
            modal: {
                title: "Filtruj wiadomości",
                deleted: "Usunięte",
                edited: "Edytowane",
                ghostPing: "Ghost Ping",
                empty: "Pusto tutaj",
                importLogs: "Wersja Enhanced przechowuje logi w indexeddb. Musisz zaimportować stare logi z folderu. Import nie nadpisze istniejących danych."
            },
            clear: {
                title: "Wyczyść logi",
                description: "Czy na pewno chcesz wyczyścić wszystkie logi?",
                confirm: "Wyczyść",
                cancel: "Anuluj"
            },
            option: {
                saveMessages: {
                    label: "Zapisuj wiadomości",
                    description: "Czy zapisywać usunięte i edytowane wiadomości."
                },
                saveImages: {
                    label: "Zapisuj obrazy",
                    description: "Zapisuj usunięte załączniki."
                },
                sortNewest: {
                    label: "Najpierw najnowsze",
                    description: "Sortuj logi od najnowszych."
                },
                cacheMessagesFromServers: {
                    label: "Cache ze wszystkich serwerów",
                    description: "Domyślnie logowane są tylko PW i białe listy. Ta opcja włączy logowanie z każdego serwera. Uwaga: Może to spowolnić działanie i szybko zapełnić pamięć."
                },
                ignoreBots: {
                    label: "Ignoruj boty",
                    description: "Czy ignorować wiadomości od botów"
                },
                ignoreWebhooks: {
                    label: "Ignoruj Webhooki",
                    description: "Czy ignorować wiadomości z webhooków"
                },
                ignoreSelf: {
                    label: "Ignoruj siebie",
                    description: "Czy ignorować własne wiadomości"
                },
                ignoreMutedGuilds: {
                    label: "Ignoruj wyciszone serwery",
                    description: "Wiadomości z wyciszonych serwerów nie będą logowane (chyba że są na białej liście)."
                },
                ignoreMutedCategories: {
                    label: "Ignoruj wyciszone kategorie",
                    description: "Wiadomości z kanałów w wyciszonych kategoriach nie będą logowane."
                },
                ignoreMutedChannels: {
                    label: "Ignoruj wyciszone kanały",
                    description: "Wiadomości z wyciszonych kanałów nie będą logowane."
                },
                alwaysLogDirectMessages: {
                    label: "Zawsze zapisuj PW",
                    description: "Zawsze loguj wiadomości prywatne"
                },
                alwaysLogCurrentChannel: {
                    label: "Zawsze zapisuj obecny kanał",
                    description: "Zawsze loguj kanał, na którym aktualnie przebywasz."
                },
                permanentlyRemoveLogByDefault: {
                    label: "Domyślnie usuwaj na stałe",
                    description: "Przycisk usuwania w bazowym MessageLoggerze będzie usuwał logi trwale"
                },
                hideMessageFromMessageLoggers: {
                    label: "Ukrywanie przed innymi loggerami",
                    description: "Dodaje opcję usuwania wiadomości tak, by inne loggery ich nie widziały. Używasz na własne ryzyko."
                },
                showLogsButton: {
                    label: "Pokaż przycisk logów",
                    description: "Przełącz widoczność przycisku w toolboxie"
                },
                showWhereMessageIsFrom: {
                    label: "Pokazuj pochodzenie wiadomości",
                    description: "Pokazuj nazwę kanału, autora i serwera w logach"
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Liczba wiadomości na stronę",
                    description: "Ile wiadomości wyświetlać naraz w oknie logów."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Treść ukrytej wiadomości",
                    description: "Tekst, który zastąpi treść po użyciu funkcji ukrywania przed loggerami."
                },
                messageLimit: {
                    label: "Limit wiadomości",
                    description: "Maksymalna liczba zapisanych wiadomości. 0 = brak limitu"
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Limit rozmiaru załącznika (MB)",
                    description: "Maksymalny rozmiar załącznika do zapisania."
                },
                attachmentFileExtensions: {
                    label: "Rozszerzenia załączników",
                    description: "Lista rozszerzeń do zapisu po przecinku. Puste = wszystkie."
                },
                cacheLimit: {
                    label: "Limit pamięci cache",
                    description: "Maksymalna liczba wiadomości trzymanych w pamięci podręcznej."
                },
                timeBasedCleanupMinutes: {
                    label: "Czas czyszczenia (minuty)",
                    description: "Interwał czasowy czyszczenia starych wiadomości."
                },
                preserveCurrentChannel: {
                    label: "Oszczędzaj obecny kanał",
                    description: "Wiadomości na obecnym kanale nie będą usuwane przez automatyczne czyszczenie."
                },
                whitelistedIds: {
                    label: "Biała lista ID",
                    description: "ID serwerów, kanałów lub osób na białej liście."
                },
                blacklistedIds: {
                    label: "Czarna lista ID",
                    description: "ID serwerów, kanałów lub osób na czarnej liście."
                },
                imageCacheDir: {
                    label: "Folder cache obrazów",
                    description: "Wybierz folder dla zapisanych obrazów"
                },
                logsDir: {
                    label: "Folder logów",
                    description: "Wybierz folder dla logów"
                },
                importLogs: {
                    label: "Importuj logi",
                    description: "Importuj logi z pliku"
                },
                exportLogs: {
                    label: "Eksportuj logi",
                    description: "Eksportuj logi z bazy IndexedDB"
                },
                openLogs: {
                    label: "Otwórz logi",
                    description: "Otwórz okno logów"
                },
                openImageCacheFolder: {
                    label: "Otwórz folder cache obrazów",
                    description: "Otwiera folder z zapisanymi obrazami"
                },
                clearLogs: {
                    label: "Wyczyść wszystko",
                    description: "Kasuje wszystkie logi",
                    title: "Czyścić logi?",
                    body: "Czy na pewno usunąć całą historię?",
                    confirmText: "Wyczyść",
                    cancel: "Anuluj"
                }
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Powiadomienia 'toast', gdy wybrani użytkownicy wyślą wiadomość",
            dm: "ich PW",
            option: {
                users: {
                    label: "Użytkownicy",
                    description: "Lista ID użytkowników oddzielona przecinkami",
                    invalidId: "{{id}} nie jest poprawnym ID"
                }
            },
            notification: {
                title: "{{username}} wysłał(a) wiadomość",
                body: "Kliknij, by skoczyć do: {{locationName}}"
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Pozwala zapisywać wiadomości i używać ich jako tagów za pomocą prostej komendy.",
            notExist: "Tag **{{tagname}}** już nie istnieje! Odśwież Discorda, by to naprawić :)",
            alreadyExist: "Tag o nazwie **{{tagname}}** już istnieje!",
            sentTag: "Tag **{{tagname}}** został wysłany!",
            successCreate: "Tag **{{tagname}}** został utworzony!",
            allTags: "Wszystkie Twoje tagi:",
            noTags: "Brak tagów. Użyj /tag create, by stworzyć pierwszy!",
            noDeleteTag: "Tag **{{tagname}}** nie istnieje, więc nie można go usunąć!",
            successDelete: "Pomyślnie usunięto tag **{{name}}**!",
            tagPreview: "Tag o nazwie **{{name}}** nie istnieje!",
            option: {
                clyde: {
                    label: "Wiadomość Clyde'a przy wysyłce",
                    description: "Jeśli włączone, Clyde wyśle Ci prywatne powiadomienie po użyciu tagu."
                },
                tagsList: {
                    label: "Lista tagów",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Zarządzaj swoimi tagami",
                    option: {
                        create: {
                            description: "Stwórz nowy tag",
                            name: "Nazwa tagu (wyzwalacz)",
                            message: "Wiadomość, która zostanie wysłana"
                        },
                        list: {
                            description: "Lista Twoich tagów"
                        },
                        delete: {
                            description: "Usuń swój tag",
                            name: "Nazwa tagu do usunięcia"
                        },
                        preview: {
                            description: "Podgląd tagu (widoczny tylko dla Ciebie)",
                            name: "Nazwa tagu do podglądu"
                        }
                    }
                }
            }
        },
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Dodaje ikonę pętli zwrotnej mikrofonu do panelu użytkownika, by słyszeć własny głos",
            button: "Test mikrofonu (Loopback)"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Różne poprawki dla środkowego kliknięcia myszy (wklejanie, otwieranie linków).",
            option: {
                openScope: {
                    label: "Zakres otwierania",
                    description: "Zablokuj otwieranie tych treści środkowym kliknięciem.",
                    links: "Linki",
                    media: "Multimedia",
                    linksAndMedia: "Linki i Multimedia",
                    none: "Brak"
                },
                pasteScope: {
                    label: "Zakres wklejania",
                    description: "Zablokuj wklejanie środkowym kliknięciem w tych sytuacjach.",
                    always: "Zawsze blokuj wklejanie środkowym kliknięciem",
                    focus: "Blokuj tylko gdy pole tekstowe nie jest aktywne",
                },
                pasteThreshold: {
                    label: "Próg wklejania",
                    description: "Czas (ms) po środkowym kliknięciu, zanim wklejanie będzie znów możliwe."
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock i wiele innych",
            command: {
                echo: {
                    description: "Wysyła wiadomość jako Clyde (lokalnie)"
                },
                lenny: {
                    description: "Wysyła twarz Lenny ( ͡° ͜ʖ ͡°)"
                },
                mock: {
                    description: "PrZePrZEDrZeźNiAnIe TeKsTu"
                },
                wordcount: {
                    description: "Liczy słowa w wiadomości",
                    response: "Wiadomość zawiera {{count}} słów."
                },
                flipcoin: {
                    description: "Rzuca monetą (orzeł czy reszka)",
                    heads: "Orzeł",
                    tails: "Reszka",
                    response: "Wypadło: {{result}}."
                },
                ask: {
                    description: "Zadaj pytanie tak/nie i otrzymaj odpowiedź",
                    yes: "Tak",
                    no: "Nie",
                    maybe: "Może",
                    askAgain: "Zapytaj później",
                    definitelyNot: "Zdecydowanie nie",
                    itIsCertain: "To pewne"
                },
                randomanimal: {
                    description: "Losowe zdjęcie zwierzaka",
                    animal: "wybierz zwierzę",
                    cat: "kot",
                    dog: "pies",
                    response: "Niestety nie udało się pobrać zdjęcia"
                },
                randomnumber: {
                    description: "Generuje losową liczbę z zakresu",
                    min: "Minimum",
                    max: "Maximum",
                    response: "Losowa liczba między {{min}} a {{max}}: {{number}}"
                },
                choose: {
                    description: "Losuje jedną z podanych opcji",
                    option: "Opcje oddzielone przecinkami",
                    response: "Wybieram: {{choice}}"
                },
                systeminfo: {
                    description: "Pokazuje informacje o systemie",
                    platform: "Platforma",
                    deviceType: "Typ urządzenia",
                    mobile: "Mobilne",
                    desktop: "Komputer",
                    browser: "Przeglądarka",
                    cpuCores: "Rdzenie CPU",
                    memory: "Pamięć RAM",
                    screen: "Ekran",
                    languages: "Języki",
                    network: "Sieć",
                    online: "Online",
                    offline: "Offline",
                    failedToFetch: "Nie udało się pobrać info",
                    unknown: "Nieznane"
                },
                getuptime: {
                    description: "Pokazuje czas działania klienta",
                    response: "**Czas działania**: {{uptime}} minut"
                },
                gettime: {
                    description: "Pokazuje aktualną godzinę",
                    response: "Aktualny czas to {{time}}"
                },
                transform: {
                    description: "Przekształca tekst według opcji",
                    transformation: {
                        description: "Typ transformacji",
                        lowercase: "Małe litery",
                        uppercase: "WIELKIE LITERY",
                        localeLowercase: "Małe litery (lokalne)",
                        localeUppercase: "WIELKIE LITERY (lokalne)",
                        same: "Bez zmian"
                    },
                    repeat: "ile razy powtórzyć",
                    reverse: "czy odwrócić tekst",
                    normalize: {
                        description: "Forma normalizacji tekstu",
                        nfc: "Forma C (NFC)",
                        nfd: "Forma D (NFD)",
                        nfkc: "Forma KC (NFKC)",
                        nfkd: "Forma KD (NFKD)"
                    },
                    text: "Tekst do przekształcenia"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Dodaje więcej Kaomoji do Discorda. ヽ(´▽`)/"
        },
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Ulepsza przyciski szybkich reakcji w menu kontekstowym wiadomości.",
            option: {
                reactionCount: {
                    label: "Liczba reakcji",
                    description: "Liczba wyświetlanych reakcji (0-42)"
                },
                frequentEmojis: {
                    label: "Często używane",
                    description: "Używaj najczęściej używanych emoji zamiast ulubionych"
                },
                rows: {
                    label: "Wiersze",
                    description: "Liczba wierszy szybkich reakcji"
                },
                columns: {
                    label: "Kolumny",
                    description: "Liczba kolumn szybkich reakcji"
                },
                compactMode: {
                    label: "Tryb kompaktowy",
                    description: "Zmniejsza przyciski do 75%, powiększając emoji wewnątrz do 125%. Zalecane przy min. 5 kolumnach."
                },
                scroll: {
                    label: "Przewijanie",
                    description: "Włącz przewijanie listy emoji"
                }
            }
        },
        moreUserTags: {
            name: "MoreUserTags",
            description: "Dodaje plakietki dla webhooków i ról moderacyjnych (właściciel, admin itp.)",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Ten użytkownik to Webhook"
                },
                owner: {
                    name: "Właściciel",
                    description: "Właściciel serwera"
                },
                admin: {
                    name: "Admin",
                    description: "Posiada uprawnienia administratora"
                },
                staff: {
                    name: "Staff",
                    description: "Może zarządzać serwerem, kanałami lub rolami"
                },
                mod: {
                    name: "Mod",
                    description: "Może zarządzać wiadomościami lub wyrzucać/banować osoby"
                },
                vcmod: {
                    name: "Mod VC",
                    description: "Może zarządzać czatami głosowymi"
                },
                chatmod: {
                    name: "Mod Czatu",
                    description: "Może zarządzać wiadomościami"
                }
            },
            modal: {
                example: "Przykład",
                tag: "Tag",
                customTextPlaceholder: "Tekst na plakietce (domyślnie: {{displayName}})",
                messages: "Pokazuj w wiadomościach",
                memberList: "Pokazuj na liście członków i profilach"
            },
            option: {
                dontShowForBots: {
                    label: "Ukryj dla botów",
                    description: "Nie pokazuj dodatkowych tagów dla botów (z wyjątkiem webhooków)"
                },
                dontShowBotTag: {
                    label: "Ukryj plakietkę BOT",
                    description: "Pokazuj tylko dodatkowe tagi / Ukryj napis [APP] lub [BOT]"
                },
                showWebhookTagFully: {
                    label: "Pełny tag webhooka",
                    description: "Pokazuj tag Webhook w obserwowanych kanałach (np. ogłoszenia)"
                },
                tagSettings: {
                    label: "Ustawienia tagów",
                    description: "Konfiguracja plakietek"
                }
            }
        },
        morse: {
            name: "Morse",
            description: "Komenda slash do tłumaczenia tekstu na alfabet Morse'a i odwrotnie.",
            command: {
                morse: {
                    description: "Tłumacz na/z alfabetu Morse'a",
                    message: "Tekst do konwersji"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Głośność",
                    description: "Głośność dźwięku 🗿🗿🗿"
                },
                quality: {
                    label: "Jakość",
                    description: "Jakość dźwięku 🗿🗿🗿",
                    normal: "Normalna",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Działaj w tle",
                    description: "Uruchamiaj 🗿 nawet gdy okno Discorda nie jest aktywne"
                },
                ignoreBots: {
                    label: "Ignoruj boty",
                    description: "Ignoruj wiadomości od botów"
                },
                ignoreBlocked: {
                    label: "Ignoruj zablokowanych",
                    description: "Ignoruj wiadomości od zablokowanych użytkowników"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Sterowanie muzyką i teksty piosenek dla wielu usług",
            option: {
                spotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Pokaż sterowanie Spotify",
                    description: "Pokaż przyciski sterowania dla Spotify"
                },
                showSpotifyLyrics: {
                    label: "Pokaż teksty Spotify",
                    description: "Pokaż teksty piosenek ze Spotify"
                },
                useSpotifyUris: {
                    label: "Używaj Spotify URI",
                    description: "Otwieraj URI zamiast linków URL. Wymaga zainstalowanej aplikacji Spotify."
                },
                previousButtonRestartsTrack: {
                    label: "Poprzedni przycisk restartuje utwór",
                    description: "Restartuj utwór zamiast cofać, jeśli upłynęło >3s"
                },
                tidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Pokaż sterowanie Tidal",
                    description: "Pokaż przyciski sterowania dla Tidal"
                },
                showTidalLyrics: {
                    label: "Pokaż teksty Tidal",
                    description: "Pokaż teksty piosenek z Tidal"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "Wymaga {{app}} dla tych ustawień"
                },
                showYoutubeMusicControls: {
                    label: "Pokaż sterowanie YouTube Music",
                    description: "Pokaż przyciski sterowania dla YouTube Music"
                },
                YoutubeMusicApiUrl: {
                    label: "URL API YouTube Music",
                    description: "Adres serwera API YouTube Music, którego używasz"
                },
                hoverControls: {
                    label: "Sterowanie po najechaniu",
                    description: "Pokazuj przyciski sterowania tylko po najechaniu myszą"
                },
                showMusicNoteOnNoLyrics: {
                    label: "Ikona nuty przy braku tekstu",
                    description: "Pokaż ikonę nuty, gdy nie znaleziono tekstu piosenki"
                },
                lyricsPosition: {
                    label: "Pozycja tekstów",
                    description: "Gdzie wyświetlać panel z tekstem",
                    above: "Nad odtwarzaczem",
                    below: "Pod odtwarzaczem"
                },
                lyricsProvider: {
                    label: "Dostawca tekstów",
                    description: "Skąd pobierać teksty piosenek",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                translateTo: {
                    label: "Tłumacz na",
                    description: "Na jaki język tłumaczyć teksty - zmiana wyczyści obecne tłumaczenia",
                    cleared: "Tłumaczenie wyczyszczone"
                },
                lyricsConversion: {
                    label: "Konwersja tekstów",
                    description: "Automatyczne tłumaczenie lub romanizacja (zapis łaciński)",
                    none: "Brak",
                    translate: "Tłumacz",
                    romanize: "Romanizuj"
                },
                fallbackProvider: {
                    label: "Dostawca zapasowy",
                    description: "Jeśli główny dostawca zawiedzie, spróbuj innych"
                },
                showFailedToasts: {
                    label: "Powiadomienia o błędach",
                    description: "Pokazuj powiadomienia, gdy nie uda się załadować tekstu"
                },
                purgeLyricsCache: {
                    label: "Wyczyść cache tekstów",
                    description: "Usuń wszystkie zapisane teksty i tłumaczenia",
                    button: "Wyczyść Cache",
                    cacheLyricsPurged: "Cache tekstów wyczyszczony"
                }
            },
            context: {
                spotify: {
                    label: "Menu tekstów Spotify",
                    type: "Menu Spotify {{type}}",
                    copy: "Kopiuj nazwę ({{type}})",
                    link: "Kopiuj link ({{type}})",
                    open: "Otwórz {{type}} w Spotify",
                    album: "Menu albumu Spotify"
                },
                tidal: {
                    label: "Menu tekstów Tidal",
                    lyrics: "Teksty Tidal",
                    type: "Menu Tidal {{name}}",
                    copy: "Kopiuj nazwę ({{name}})",
                    open: "Otwórz {{name}} w Tidal",
                    album: "Menu albumu Tidal"
                },
                ytm: {
                    type: "Menu YouTube Music {{name}}",
                    copy: "Kopiuj nazwę ({{name}})",
                    open: "Otwórz {{name}} w YouTube Music",
                    album: "Menu albumu YouTube Music",
                    muted: "Wyciszony"
                },
                lyrics: {
                    provider: "Dostawca tekstów",
                    saved: "zapisano",
                    notFound: "Nie znaleziono zsynchronizowanych tekstów"
                },
                copy: {
                    currentLyrics: "Kopiuj obecny tekst"
                }
            },
            alert: {
                lyricCopied: "Skopiowano tekst do schowka!",
                noLyrics: "Brak tekstu",
                noLyricsTo: "Brak tekstu do: {{translated}}",
                translate: "tłumaczenia",
                romanize: "romanizacji",
                lyricsFetchFailed: "Błąd pobierania tekstów",
                failedToFetchLyrics: "Nie udało się pobrać: {{translated}}",
                translation: "tłumaczenie",
                romanization: "romanizacja",
                failedToFetchTranslation: "Nie udało się pobrać tłumaczenia"
            },
            modal: {
                install: {
                    title: "Jak zainstalować",
                    install: "Zainstaluj {{link}} stąd, a potem przejdź do: TidalLuna settings → Plugin stores → Install @vmohammad/api",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Nic nie jest odtwarzane",
                    artist: "Artysta:",
                    album: "Album:",
                    noLyrics: "Tekst niedostępny :(",
                    progress: "Postęp",
                    totalDuration: "Całkowity czas"
                },
                type: {
                    song: "Utwór",
                    artist: "Artysta",
                    album: "Album"
                },
                album: {
                    open: "Otwórz album",
                    viewCover: "Zobacz okładkę",
                    volume: "Głośność",
                    image: "Obraz albumu"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Przetłumaczone",
                romanized: "Zromanizowane",
                none: "Brak"
            },
            error: {
                failed: "Nie udało się wyświetlić okna :(",
                checkConsole: "Sprawdź błędy w konsoli",
                invalidUrlCustomApi: "Nieprawidłowy format URL dla Custom API"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Pokazuje wspólne grupy PW w profilach użytkowników",
            no: "Brak wspólnych grup",
            mutualGroup: "{{count}} wspólnych grup",
            members: "Członkowie",
            noGroup: "Brak wspólnych grup PW",
            header: "Wspólne grupy"
        },
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Zapobiega wstrzymywaniu podglądu w trakcie rozmowy/PiP (udostępnianie ekranu, strumienie itp.), nawet jeśli okno klienta straci fokus",
            about: "Ta wtyczka spowoduje, że Discord będzie zużywał więcej zasobów niż zwykle"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Automatycznie wycisza nowe serwery i zmienia różne inne ustawienia natychmiast po dołączeniu",
            context: {
                apply: "Zastosuj NewGuildSettings"
            },
            option: {
                guild: {
                    label: "Wycisz serwer",
                    description: "Automatycznie wyciszaj serwer"
                },
                messages: {
                    label: "Ustawienia powiadomień serwera",
                    description: "Ustawienia powiadomień serwera",
                    all: "Wszystkie wiadomości",
                    mentions: "Tylko wzmianki (@)",
                    nothing: "Nic",
                    default: "Domyślne serwera"
                },
                everyone: {
                    label: "Tłumij @everyone i @here",
                    description: "Automatycznie tłumij wzmianki @everyone i @here"
                },
                role: {
                    label: "Tłumij wszystkie wzmianki ról",
                    description: "Automatycznie tłumij wszystkie wzmianki ról (@rola)"
                },
                highlights: {
                    label: "Tłumij wyróżnienia",
                    description: "Automatycznie tłumij wyróżnienia (Highlights)"
                },
                events: {
                    label: "Wycisz nowe wydarzenia",
                    description: "Automatycznie wyciszaj nowe wydarzenia"
                },
                showAllChannels: {
                    label: "Pokaż wszystkie kanały",
                    description: "Automatycznie pokazuj wszystkie kanały"
                },
                mobilePush: {
                    label: "Wycisz powiadomienia push na telefon",
                    description: "Automatycznie wyciszaj powiadomienia push na urządzenia mobilne"
                },
                voiceChannels: {
                    label: "Kanały głosowe",
                    description: "Automatycznie ukrywaj nazwy na kanałach głosowych"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Narzędzie powiadamiające o dodaniu nowych wtyczek do Plexcord",
            modal: {
                title: "Nowe wtyczki i ustawienia",
                description: "Od Twojej ostatniej wizyty dodano nowe wtyczki i ustawienia. Przejrzyj nowości poniżej.",
                tooltip: "Odrzuć w tej sesji",
                dontShowAgain: "Nie pokazuj tego więcej",
                restartRequired: "Wymagany restart, aby zastosować zmiany",
                restart: "Restartuj",
                continue: "Kontynuuj"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Przywraca plakietkę bota do jej oryginalnej formy"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Całkowicie ukrywa wszystkie zablokowane/ignorowane wiadomości z czatu",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Ukrywaj też ignorowanych użytkowników",
                    description: "Ukrywaj również wiadomości od ignorowanych użytkowników."
                },
                disableNotifications: {
                    label: "Wyłącz powiadomienia",
                    description: "Ukrywaj powiadomienia o nowych wiadomościach od zablokowanych użytkowników. Zawsze włączone, jeśli poniższa opcja 'Domyślnie ukrywaj użytkowników' jest aktywna, a użytkownik nie znajduje się na liście wyjątków."
                },
                allowAutoModMessages: {
                    label: "Zezwalaj na wiadomości AutoModa",
                    description: "Pozwalaj wiadomościom wysyłanym przez AutoModa omijać filtrowanie."
                },
                hideBlockedUserReplies: {
                    label: "Ukrywaj odpowiedzi zablokowanych użytkowników",
                    description: "Ukrywaj wiadomości od zablokowanych użytkowników w wątkach, w których bierzesz udział."
                },
                defaultHideUsers: {
                    label: "Domyślnie ukrywaj użytkowników",
                    description: "Jeśli włączone, wiadomości od zablokowanych osób będą całkowicie ukryte, a wiadomości od osób z listy wyjątków będą zwinięte (domyślne zachowanie Discorda). Jeśli wyłączone, wiadomości od zablokowanych będą zwinięte, a te od osób z listy wyjątków — całkowicie ukryte."
                },
                overrideUsers: {
                    label: "Lista wyjątków (Override Users)",
                    description: "Lista ID użytkowników oddzielona przecinkami, wobec których zastosowane zostanie zachowanie odwrotne do wybranego powyżej."
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Zapobiega wpisywaniu punktorów markdown (tych brzydkich)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Wyłącza zbędną funkcję 'deep linking' Discorda, która próbuje wymusić korzystanie z aplikacji desktopowej"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Usuwa wymóg wpisywania nazwy serwera podczas jego usuwania",
            option: {
                confirmModal: {
                    label: "Okno potwierdzenia",
                    description: "Czy powinno wyświetlać się okno 'Czy na pewno chcesz usunąć?'"
                }
            },
            modal: {
                title: "Usunąć serwer?",
                body: "To proces nieodwracalny, jeśli nie było to oczywiste.",
                confirm: "Usuń",
                cancel: "Anuluj"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Wyłącza baner ostrzegawczy 'STÓJ!' (HOLD UP) w konsoli. Efektem ubocznym jest zapobieganie ukrywaniu tokena przez Discorda, co zapobiega losowym wylogowaniom."
        },
        noF1: {
            name: "NoF1",
            description: "Wyłącza przypisanie klawisza F1 do pomocy."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Wklejenie linku przy zaznaczonym tekście nie spowoduje utworzenia maskowanego adresu URL (markdown link)"
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Zapobiega lustrzanemu odbiciu obrazu z kamery na Twoim ekranie"
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Usuwa 300-milisekundową animację podczas otwierania lub zamykania okien modalnych"
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Usuwa mozaikowe wyświetlanie wielu obrazów na Discordzie",
            option: {
                inlineVideo: {
                    label: "Wideo w linii",
                    description: "Odtwarzaj filmy bez otwierania karuzeli podglądu"
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "Usuwa WSZYSTKIE reklamy i zachęty do zakupu Nitro, oszukując klienta, że posiadasz subskrypcję."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Omija proces powitalny (onboarding) Discorda, umożliwiając szybsze wejście na serwer."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Pomija powolne i irytujące opóźnienie podczas onboardingu"
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Usuwa licznik powiadomień o oczekujących zaproszeniach do znajomych, prośbach o wiadomość i ofertach Nitro.",
            option: {
                hideFriendRequestsCount: {
                    label: "Ukryj licznik zaproszeń",
                    description: "Ukryj licznik przychodzących zaproszeń do znajomych"
                },
                hideMessageRequestsCount: {
                    label: "Ukryj licznik próśb o wiadomość",
                    description: "Ukryj licznik próśb o wiadomość"
                },
                hidePremiumOffersCount: {
                    label: "Ukryj licznik ofert Nitro",
                    description: "Ukryj licznik ofert Nitro"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Całkowicie usuwa motywy profilu Nitro u wszystkich użytkowników poza Tobą."
        },
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Omija wymóg korzystania z przycisku 'Naciśnij i mów' na kanałach, które go wymuszają."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Domyślnie wyłącza oznaczanie (ping) podczas odpowiadania na wiadomość",
            option: {
                userList: {
                    label: "Lista użytkowników",
                    description: "Lista użytkowników, dla których pingowanie ma być dozwolone lub wyłączone (oddzielone przecinkami lub spacjami)"
                },
                roleList: {
                    label: "Lista ról",
                    description: "Lista ról, dla których pingowanie ma być dozwolone lub wyłączone (oddzielone przecinkami lub spacjami)"
                },
                shouldPingListed: {
                    label: "Zachowanie listy",
                    description: "Wybierz sposób działania listy",
                    dontPing: "Nie pinguj wymienionych użytkowników / ról",
                    onlyPing: "Pinguj tylko wymienionych użytkowników / role"
                },
                inverseShiftReply: {
                    label: "Odwrócony Shift przy odpowiedzi",
                    description: "Odwraca domyślne zachowanie Shift podczas odpowiadania (włącz, aby Shift powodował wzmiankę)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Usuwa człony 'canary'/'ptb' z linków do wiadomości"
        },
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Wszyscy jesteśmy równi!! Usuwa nagłówki ról na liście członków."
        },
        noRPC: {
            name: "NoRPC",
            description: "Wyłącza funkcję Discord Rich Presence"
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Nie pokazuj emoji serwerowych w menu autouzupełniania.",
            option: {
                shownEmojis: {
                    label: "Pokazywane emoji",
                    description: "Wybierz, które emoji mają być widoczne w menu autouzupełniania",
                    onlyUnicode: "Tylko standardowe emoji (Unicode)",
                    currentServer: "Standardowe emoji i emoji z obecnego serwera",
                    all: "Standardowe i wszystkie serwerowe (domyślne Discorda)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Wyłącza plakietkę z licznikiem nieprzeczytanych wiadomości na pasku zadań i w zasobniku systemowym."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Sprawia, że powiadomienia na pulpicie są bardziej informacyjne"
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Ustaw własną głośność dla powiadomień Discorda",
            option: {
                notificationVolume: {
                    label: "Głośność powiadomień",
                    description: "Poziom głośności powiadomień"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Wyłącza animację pisania na czacie"
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Pozwala przeskakiwać do wiadomości zablokowanych lub ignorowanych użytkowników (oraz spamerów) bez konieczności ich odblokowywania."
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Jeśli użytkownik wyśle kilka nieprzeczytanych wiadomości na PW, otrzymasz tylko jeden sygnał dźwiękowy.",
            option: {
                channelToAffect: {
                    label: "Kanały objęte działaniem",
                    description: "Wybierz typ rozmów prywatnych, na które ma wpływać wtyczka",
                    both: "Oba",
                    user: "Prywatne (DM)",
                    group: "Grupowe (GDM)"
                },
                allowMentions: {
                    label: "Zezwalaj na wzmianki",
                    description: "Otrzymuj sygnały dźwiękowe dla @wzmianek"
                },
                allowEveryone: {
                    label: "Zezwalaj na @everyone",
                    description: "Otrzymuj sygnały dźwiękowe dla @everyone i @here w grupach PW"
                },
                ignoreUsers: {
                    label: "Ignoruj użytkowników",
                    description: "ID użytkowników (oddzielone przecinkiem + spacją), których powiadomienia NIGDY nie powinny być ograniczane"
                },
                alwaysPlaySound: {
                    label: "Zawsze odtwarzaj dźwięk",
                    description: "Odtwarzaj dźwięk powiadomienia nawet wtedy, gdy jest on wyłączony"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Otwieraj linki w dedykowanych aplikacjach zamiast w przeglądarce",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Otwieraj linki Spotify w aplikacji Spotify"
                },
                steam: {
                    label: "Steam",
                    description: "Otwieraj linki Steam w aplikacji Steam"
                },
                epic: {
                    label: "Epic Games",
                    description: "Otwieraj linki Epic Games w programie Epic Games Launcher"
                },
                tidal: {
                    label: "Tidal",
                    description: "Otwieraj linki Tidal w aplikacji Tidal"
                },
                itunes: {
                    label: "iTunes",
                    description: "Otwieraj linki Apple Music w aplikacji iTunes"
                },
                vrcx: {
                    label: "VRChat",
                    description: "Otwieraj linki VRChat w aplikacji VRCX"
                }
            },
            notification: {
                open: "Otwarto link w aplikacji natywnej"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Pozwala nadpisać domyślny układ i sortowanie na forach. Nadal możesz zmieniać to indywidualnie dla każdego kanału",
            option: {
                defaultLayout: {
                    label: "Domyślny układ",
                    description: "Który układ powinien być używany domyślnie",
                    list: "Lista",
                    gallery: "Galeria"
                },
                defaultSortOrder: {
                    label: "Domyślne sortowanie",
                    description: "Który sposób sortowania powinien być używany domyślnie",
                    recentlyActive: "Ostatnia aktywność",
                    datePosted: "Data publikacji"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Pozwala na korzystanie z trybu imprezowego, bo zabawa nigdy się nie kończy ✨",
            option: {
                superIntensePartyMode: {
                    label: "Super intensywny tryb imprezy",
                    description: "Intensywność imprezy",
                    normal: "Normalna",
                    better: "Lepsza",
                    projectX: "Projekt X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Przywraca opcję wstrzymania zaproszeń na czas nieokreślony, którą Discord niepotrzebnie usunął.",
            pauseIndefinitely: "Wstrzymaj na czas nieokreślony"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Wyłącza ograniczenia klienta podczas zarządzania uprawnieniami kanałów.",
            option: {
                lockout: {
                    label: "Blokada dostępu",
                    description: "Omiń zabezpieczenie przed odcięciem sobie dostępu ('Na pewno nie chcesz tego robić')"
                },
                onboarding: {
                    label: "Onboarding",
                    description: "Omiń wymogi powitania ('Ta zmiana sprawi, że serwer będzie niekompatybilny [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Sprawdź uprawnienia użytkownika lub kanału oraz role na serwerze",
            view: "Pokaż uprawnienia",
            option: {
                permissionsSortOrder: {
                    label: "Sortowanie uprawnień",
                    description: "Metoda sortowania używana do określenia, która rola nadaje użytkownikowi dane uprawnienie",
                    highest: "Najwyższa rola",
                    lowest: "Najniższa rola"
                }
            },
            icon: {
                denied: "Odmowa",
                allowed: "Zezwolono",
                notOverwritten: "Brak nadpisania"
            },
            context: {
                permissions: "Uprawnienia"
            },
            modal: {
                title: "Uprawnienia",
                noPermissions: "Brak uprawnień do wyświetlenia!",
                owner: "właściciel",
                grantedBy: "Przyznane przez",
                serverOwner: "Właściciel serwera",
                ownerRole: "Właściciel",
                sortingBy: "Sortowanie według: {{method}}",
                highest: "Najwyższa rola",
                lowest: "Najniższa rola",
                details: "Szczegóły roli"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Dodaje komendę /petpet do tworzenia GIF-ów z głaskaniem z dowolnego obrazka",
            command: {
                petpet: {
                    description: "Stwórz GIF-a petpet. Możesz wybrać tylko jedną z opcji obrazu",
                    delay: "Opóźnienie między klatkami. Domyślnie 20.",
                    resolution: "Rozdzielczość GIF-a. Domyślnie 120. Jeśli wpiszesz absurdalną liczbę i zawiesisz Discorda, to Twoja wina.",
                    image: "Załącznik obrazu do użycia",
                    url: "URL, z którego ma być pobrany obraz",
                    user: "Użytkownik, którego awatar ma zostać użyty",
                    noServerPfp: "Użyj zwykłego awatara zamiast serwerowego przy opcji 'user'",
                    error: {
                        noImage: "Nie wybrano obrazu!",
                        delayTooLow: "Opóźnienie musi wynosić co najmniej 20.",
                    }
                }
            },
            error: {
                uploadNotImage: "Przesłany plik nie jest obrazem",
                fetchUserFailed: "Nie udało się pobrać użytkownika. Sprawdź konsolę po więcej info.",
                fetchImageFailed: "Wystąpił błąd podczas ładowania {{url}}. Sprawdź konsolę po więcej info."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Dodaje tryb Obraz w obrazie (PiP) do filmów (obok przycisku Pobierz)",
            tooltip: "Przełącz Obraz w obrazie",
            option: {
                loop: {
                    label: "Pętla",
                    description: "Czy wideo w trybie PiP ma być zapętlone"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Pozwala przypinać kanały prywatne na górze listy PW. Aby przypiąć/odpiąć lub zmienić kolejność, kliknij prawym przyciskiem myszy na PW",
            context: {
                category: {
                    label: "Menu kategorii przypiętych PW",
                    edit: "Edytuj kategorię",
                    up: "Przenieś w górę",
                    down: "Przenieś w dół",
                    delete: "Usuń kategorię",
                    unnamed: "o nie"
                },
                pin: {
                    label: "Przypnij PW",
                    addCategory: "Dodaj kategorię"
                },
                unPin: {
                    label: "Odepnij PW",
                    move: "Przenieś do kategorii"
                }
            },
            option: {
                pinOrder: {
                    label: "Kolejność przypięć",
                    description: "W jakiej kolejności powinny być wyświetlane przypięte PW?",
                    lastMessage: "Najnowsza wiadomość",
                    custom: "Własna (kliknij prawym przyciskiem, aby zmienić kolejność)"
                },
                canCollapseDmSection: {
                    label: "Zwijana sekcja przypiętych",
                    description: "Zezwalaj na zwijanie sekcji nieskategoryzowanych PW"
                },
                dmSectionCollapsed: {
                    label: "Sekcja PW zwinięta",
                    description: "Zwiń sekcję PW"
                },
                userBasedCategoryList: {
                    label: "Lista kategorii zależna od użytkownika",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Przypnij kategorię",
                    edit: "Edytuj kategorię",
                    new: "Nowa kategoria",
                    name: "Nazwa",
                    color: "Kolor",
                    save: "Zapisz",
                    create: "Utwórz"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Konfigurowalne powiadomienia z ulepszonym formatowaniem wzmianek",
            option: {
                friends: {
                    label: "Znajomi",
                    description: "Powiadamiaj, gdy znajomi wysyłają wiadomości na serwerach"
                },
                mentions: {
                    label: "Wzmianki",
                    description: "Powiadamiaj, gdy ktoś oznacz Cię bezpośrednio (@mention)"
                },
                dms: {
                    label: "PW",
                    description: "Powiadamiaj o wiadomościach prywatnych (DM)"
                },
                showInActive: {
                    label: "Pokaż w aktywnym",
                    description: "Pokazuj powiadomienia nawet dla aktualnie otwartego kanału"
                },
                ignoreMuted: {
                    label: "Ignoruj wyciszone",
                    description: "Pomiń powiadomienia z wyciszonych serwerów, kanałów lub od użytkowników"
                }
            },
            unknown: "Nieznany",
            dm: "PW",
            groupDM: "Grupa PW",
            title: "{{username}} na {{channelName}}"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Dodaje ikonę pinezki do przypiętych wiadomości"
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Nie pokazuj małych ikon serwerów w folderach"
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Dodaje wskaźniki platformy (Komputer, Telefon, Przeglądarka...) przy użytkownikach",
            embeddedTooltip: "Konsola",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lista",
                    description: "Pokazuj wskaźniki na liście członków"
                },
                badges: {
                    label: "Odznaki",
                    description: "Pokazuj wskaźniki w profilach użytkowników jako odznaki"
                },
                messages: {
                    label: "Wiadomości",
                    description: "Pokazuj wskaźniki przy wiadomościach"
                },
                colorMobileIndicator: {
                    label: "Kolorowy wskaźnik mobilny",
                    description: "Czy kolor wskaźnika mobilnego ma odpowiadać statusowi użytkownika."
                },
                showBots: {
                    label: "Pokazuj dla botów",
                    description: "Czy wyświetlać wskaźniki platformy przy botach"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Zmienia wyświetlaną platformę lub urządzenie, na którym jesteś",
            about: "Nie gwarantujemy, że ta wtyczka nie skończy się ostrzeżeniem lub banem.",
            platform: {
                desktop: "Klient Discord",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Discord Embedded",
                playstation: "Discord Embedded",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Platforma",
                    description: "Jako jaka platforma chcesz być widoczny",
                    desktop: "Komputer",
                    web: "Przeglądarka",
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
            description: "Dodaje przycisk do paska aplikacji (AppBar) z szybkimi akcjami Plexcord",
            tooltip: "Toolbox Plexcord",
            context: {
                openLog: "Otwórz log powiadomień",
                enableQuickCSS: "Włącz QuickCSS",
                openQuickCSS: "Edytuj QuickCSS",
                openSettings: "Otwórz ustawienia",
                manageThemes: "Zarządzaj motywami"
            },
            option: {
                showPluginMenu: {
                    label: "Pokaż menu wtyczek",
                    description: "Pokazuj menu wtyczek w Toolboxie Plexcord"
                }
            }
        },
        polishWording: {
            name: "PolishWording",
            description: "Poprawia Twoje wiadomości, aby wyglądały lepiej i miały poprawniejszą gramatykę (angielską). Zobacz ustawienia.",
            option: {
                quickDisable: {
                    label: "Szybkie wyłączenie",
                    description: "Szybkie wyłączenie. Wyłącza modyfikowanie wiadomości bez konieczności przeładowania klienta."
                },
                blockedWords: {
                    label: "Zablokowane słowa",
                    description: "Słowa, które nie będą pisane wielką literą (oddzielone przecinkami)."
                },
                fixApostrophes: {
                    label: "Popraw apostrofy",
                    description: "Upewnij się, że skróty zawierają apostrofy."
                },
                expandContractions: {
                    label: "Rozwijaj skróty",
                    description: "Rozwijaj skróty (np. don't -> do not)"
                },
                fixCapitalization: {
                    label: "Popraw wielkość liter",
                    description: "Zaczynaj zdania wielką literą."
                },
                fixPunctuation: {
                    label: "Popraw interpunkcję",
                    description: "Popraw odstępy wokół znaków interpunkcyjnych."
                },
                fixPunctuationFrequency: {
                    label: "Częstotliwość poprawy interpunkcji",
                    description: "Procentowa częstotliwość stawiania kropek (to bardzo irytuje niektórych ludzi).",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Pozwala na podgląd wiadomości przed jej wysłaniem.",
            tooltip: "Podgląd wiadomości"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Pozwala zapisywać i wczytywać różne zestawy profili w sekcji Profil w ustawieniach.",
            toast: {
                importFailed: "Nie udało się zaimportować zestawów profili. Plik może być nieprawidłowy.",
            },
            option: {
                avatarSize: {
                    label: "Rozmiar awatara",
                    description: "Rozmiar awatara na liście zestawów"
                }
            },
            modal: {
                override: "Nadpisz",
                merge: "Połącz",
                cancel: "Anuluj",
                timestamp: "{{formattedDate}} o {{formattedTime}}",
                rename: "Zmień nazwę",
                update: "Aktualizuj",
                moveUp: "Przenieś w górę",
                moveDown: "Przenieś w dół",
                moveTo: "Przenieś na stronę 1",
                delete: "Usuń",
                importProfiles: "Importuj profile",
                importText: "Masz {{existingCount}} istniejących profili w tej sekcji. Czy chcesz je nadpisać czy połączyć z zaimportowanymi?",
                heading: "Zapisane profile",
                searchProfiles: "Szukaj profilu...",
                profileName: "Nazwa profilu",
                saving: "Zapisywanie...",
                save: "Zapisz profil",
                cancelSearch: "Anuluj wyszukiwanie",
                search: "Szukaj",
                random: "Losowy",
                import: "Importuj",
                exportAll: "Eksportuj wszystko"
            }
        },
        questify: {
            name: "Questify",
            description: "Ulepsza doświadczenie z Questami (zadaniami) lub pozwala całkowicie je wyłączyć, jeśli Cię nie interesują.",
            quests: "Questy",
            context: {
                quest: {
                    label: "Menu przycisku Questów",
                    ignore: "Oznacz wszystkie jako ignorowane",
                    reset: "Resetuj listę ignorowanych",
                    fetch: "Pobierz Questy",
                    markAsIgnored: "Oznacz jako ignorowany",
                    unmarkAsIgnored: "Usuń z ignorowanych",
                    stopAuto: "Zatrzymaj auto-ukończenie",
                    copyQuestID: "Kopiuj ID Questa",
                    startAuto: "Uruchom auto-ukończenie"
                }
            },
            settings: {
                questButton: {
                    title: "Przycisk Questów",
                    description: "Pokaż przycisk Questów na liście serwerów z opcjonalnym wskaźnikiem nieodebranych nagród.",
                    leftClick: "Akcja lewego kliknięcia",
                    middleClick: "Akcja środkowego kliknięcia",
                    rightClick: "Akcja prawego kliknięcia",
                    visibility: "Widoczność przycisku",
                    unclaimedIndicator: "Wskaźnik nieodebranych",
                    badgeColor: "Kolor powiadomienia",
                    rewardDisplay: "Wyświetlanie nagród",
                    includedRewardTypes: "Uwzględnione typy nagród",
                    includedRewardTypesDesc: "Tylko Questy z tymi typami nagród będą liczone jako nieodebrane przy określaniu widoczności przycisku i odznaki.",
                    selectRewardTypes: "Wybierz typy nagród do uwzględnienia...",
                    noRewardType: "Nie ma wspieranej funkcji Questów o tej nazwie.",
                    default: "Domyślne",
                    disable: "Wyłącz"
                },
                questFeatures: {
                    title: "Funkcje Questów",
                    description: "Modyfikuj specyficzne funkcje Questów.",
                    popupWarning: "Opcja {{disablePopup}} zostanie zignorowana dla ukończonych Questów oraz śledzenia postępu.",
                    videoQuestInfo: "Opcja {{completeVideo}} poczeka na czas trwania Video Questa i oznaczy go jako ukończony automatycznie.",
                    gameQuestInfo: "Podobnie opcja {{completeGame}} poczeka wymagany czas gry i oznaczy go jako ukończony. Wspierane tylko na oficjalnym kliencie desktopowym.",
                    manualStartWarning: "Nadal musisz uruchomić Quest ręcznie. Pierwsze kliknięcie uruchomi Quest w tle. W przypadku Video Questów kolejne kliknięcia otworzą okno wideo. Aby przerwać, wybierz {{stopAuto}} w menu kontekstowym.",
                    tosWarning: "Używanie tych opcji jest niezgodne z ToS (Regulaminem) Discorda. Używasz na własne ryzyko.",
                    selectFeatures: "Wybierz funkcje do zmodyfikowania.",
                    disablePopup: "Wyłącz wyskakujące okno Questa nad panelem konta",
                    completeVideo: "Ukończ Video Questy w tle",
                    completeGame: "Ukończ Questy typu 'Graj w grę' w tle",
                    stopAuto: "Zatrzymaj auto-ukończenie"
                },
                restyleQuests: {
                    title: "Zmiana stylu Questów",
                    description: "Wyróżnij Questy własnymi kolorami dla lepszej widoczności.",
                    precedenceNote: "Style dla odebranych i wygasłych Questów mają pierwszeństwo, nawet jeśli Quest jest ignorowany.",
                    gradientStyle: "Styl gradientu",
                    assetPreload: "Preload zasobów",
                    unclaimed: "Nieodebrane",
                    claimed: "Odebrane",
                    ignored: "Ignorowane",
                    expired: "Wygasłe",
                    intenseGradient: "Intensywny gradient",
                    defaultGradient: "Domyślny gradient",
                    blackGradient: "Subtelny czarny gradient",
                    noGradient: "Brak gradientu",
                    loadAllAssets: "Wczytuj wszystkie zasoby Questów przy starcie strony",
                    loadDuringScroll: "Wczytuj zasoby Questów podczas przewijania"
                },
                reorderQuests: {
                    title: "Sortowanie Questów",
                    description: "Sortuj Questy według statusu. Działa, gdy na stronie Questów wybrano opcję sortowania \"Questify\".",
                    formatNote: "Lista musi zawierać wszystkie elementy: {{items}}.",
                    placeholder: "Musisz uwzględnić: UNCLAIMED, CLAIMED, IGNORED, EXPIRED",
                    invalidFormat: "Nieprawidłowy format.",
                    unclaimedSubsort: "Podsortowanie nieodebranych",
                    claimedSubsort: "Podsortowanie odebranych",
                    ignoredSubsort: "Podsortowanie ignorowanych",
                    expiredSubsort: "Podsortowanie wygasłych",
                    addedNewest: "Dodano (Najnowsze)",
                    addedOldest: "Dodano (Najstarsze)",
                    expiredRecent: "Wygasłe (Ostatnio)",
                    expiredLeast: "Wygasłe (Najdawniej)",
                    expiringSoon: "Wygasające (Wkrótce)",
                    expiringLate: "Wygasające (Najpóźniej)",
                    claimedRecent: "Odebrane (Ostatnio)",
                    claimedLeast: "Odebrane (Najdawniej)",
                    ignoredQuestProfile: "Profil ignorowanych Questów",
                    sharedProfile: "Wspólny: Wszystkie konta na tym kliencie dzielą listę ignorowanych.",
                    privateProfile: "Prywatny: Każde konto ma oddzielną listę ignorowanych.",
                    rememberSort: "Zapamiętaj wybór sortowania",
                    rememberFilter: "Zapamiętaj wybór filtra",
                    yes: "Tak",
                    no: "Nie",
                    rememberNote: "Wybór ten dotyczy wbudowanych opcji sortowania na stronie Discorda. Własne sortowanie powyżej działa tylko przy wybranej opcji \"Questify\"."
                },
                fetchingQuests: {
                    title: "Pobieranie Questów",
                    description: "Skonfiguruj częstotliwość sprawdzania nowych Questów i alerty.",
                    defaultBehavior: "Domyślnie Discord pobiera Questy tylko przy starcie lub wejściu na stronę Questów. Bez interwału wtyczka może nie widzieć nowych zadań dodanych w ciągu dnia.",
                    requirement: "Wymaga włączonego przycisku Questów z aktywnym wskaźnikiem nieodebranych.",
                    blockWarning: "Jeśli funkcja {{fetchingQuests}} jest zablokowana w ustawieniach funkcji, to nie będzie działać.",
                    fetchInterval: "Interwał pobierania",
                    alertSound: "Dźwięk alertu",
                    intervalPlaceholder: "Wybierz lub wpisz interwał (od 30 min do 12 h).",
                    intervalFeedback: "Interwał musi wynosić od 30 minut do 12 godzin.",
                    soundPlaceholder: "Wybierz dźwięk lub podaj URL do własnego pliku.",
                    soundFeedback: "Nie znaleziono dźwięku lub URL jest nieobsługiwany.",
                    disabled: "Wyłączone",
                    minutes: "Minuty",
                    minute: "Minuta",
                    hours: "Godziny",
                    hour: "Godzina",
                    thirtyMinutes: "30 minut",
                    oneHour: "1 godzina",
                    threeHours: "3 godziny",
                    sixHours: "6 godzin",
                    twelveHours: "12 godzin",
                    customSound: "WŁASNY DŹWIĘK"
                },
                disableOptions: {
                    everything: "Wyłącz wszystko",
                    discovery: "Wyłącz zakładkę Odkrywaj",
                    dms: "Wyłącz zakładkę Questów w PW",
                    fetching: "Wyłącz pobieranie Questów",
                    popup: "Wyłącz wyskakujące okno nad panelem konta",
                    sponsored: "Wyłącz baner sponsorowany na stronie Questów",
                    badge: "Wyłącz odznakę w profilach użytkowników",
                    inventory: "Wyłącz powiadomienie o przeniesieniu ekwipunku prezentów",
                    friendsList: "Promocja Questów na liście znajomych (Active Now)",
                    membersList: "Ikony aktywnej gry na liście członków",
                    gameQuests: "Ukończ Questy typu gra/aktywność w tle",
                    videoQuests: "Ukończ Questy wideo w tle",
                    achievementQuests: "Ukończ zadania w aktywnościach w tle",
                    mobileDesktop: "Uczyń Questy mobilne kompatybilnymi z PC",
                    notifyOnComplete: "Powiadamiaj o ukończeniu Questa"
                },
                options: {
                    always: "Zawsze",
                    unclaimed: "Nieodebrane",
                    never: "Nigdy",
                    pill: "Pigułka",
                    badge: "Odznaka",
                    both: "Oba",
                    none: "Brak",
                    openQuests: "Otwórz Questy",
                    contextMenu: "Menu kontekstowe",
                    pluginSettings: "Ustawienia wtyczki",
                    nothing: "Nic",
                    orbs: "Orby",
                    nitroCodes: "Kody Nitro",
                    rewardCodes: "Kody nagród",
                    inGameItems: "Przedmioty w grze",
                    profileCollectibles: "Elementy profilu"
                }
            },
            option: {
                disableQuests: {
                    label: "Wyłącz Questy",
                    description: "Wybierz funkcje Questów do wyłączenia."
                },
                disableQuestsEverything: {
                    label: "Wyłącz wszystko",
                    description: "Wyłącz wszystkie funkcje związane z Questami."
                },
                disableQuestsFetchingQuests: {
                    label: "Wyłącz pobieranie Questów",
                    description: "Wyłącz pobieranie danych o Questach z Discorda."
                },
                disableQuestsDirectMessagesTab: {
                    label: "Wyłącz zakładkę Questów w PW",
                    description: "Ukryj zakładkę Questów na stronie wiadomości prywatnych."
                },
                disableQuestsDiscoveryTab: {
                    label: "Wyłącz zakładkę Odkrywaj",
                    description: "Ukryj zakładkę Questów na stronie Odkrywaj."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Wyłącz baner sponsorowany",
                    description: "Ukryj baner sponsorowany na stronie Questów."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Wyłącz okno nad panelem konta",
                    description: "Ukryj wyskakujące okienko Questów nad Twoim awatarem/nickiem."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Wyłącz odznakę w profilach",
                    description: "Ukryj odznakę Questa w profilach użytkowników."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Wyłącz info o przeniesieniu ekwipunku",
                    description: "Ukryj powiadomienie o zmianie lokalizacji prezentów."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Wyłącz promocję na liście znajomych",
                    description: "Wyłącz promowanie Questów gier, w które grają znajomi."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Wyłącz ikony gry na liście członków",
                    description: "Ukryj ikony aktywnej gry przy osobach na liście członków."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Questy mobilne na PC",
                    description: "Spraw, aby Questy przeznaczone tylko na telefon działały na komputerze."
                },
                completeVideoQuestsInBackground: {
                    label: "Kończ Video Questy w tle",
                    description: "Ukończ zadania wideo automatycznie po upływie czasu trwania filmu."
                },
                completeGameQuestsInBackground: {
                    label: "Kończ Questy gry w tle",
                    description: "Ukończ zadania z graniem automatycznie po upływie wymaganego czasu."
                },
                completeAchievementQuestsInBackground: {
                    label: "Kończ zadania w aktywnościach w tle",
                    description: "Ukończ zadania typu osiągnięcie w aktywnościach w tle."
                },
                notifyOnQuestComplete: {
                    label: "Powiadomienie o ukończeniu",
                    description: "Pokaż powiadomienie, gdy Quest zostanie automatycznie ukończony."
                },
                questButton: {
                    label: "Przycisk Questów",
                    description: "Pokaż przycisk Questów na liście serwerów."
                },
                questButtonDisplay: {
                    label: "Widok przycisku Questów",
                    description: "Typ wyświetlania przycisku Questów na liście serwerów."
                },
                questRewardIncludeRewardCode: {
                    label: "Uwzględniaj kody nagród",
                    description: "Wliczaj Questy z kodami nagród do licznika."
                },
                questRewardIncludeNitroCode: {
                    label: "Uwzględniaj kody Nitro",
                    description: "Wliczaj Questy z kodami Nitro do licznika."
                },
                questRewardIncludeInGame: {
                    label: "Uwzględniaj przedmioty w grze",
                    description: "Wliczaj Questy z przedmiotami do licznika."
                },
                questRewardIncludeCollectibles: {
                    label: "Uwzględniaj elementy profilu",
                    description: "Wliczaj Questy z dekoracjami profilu do licznika."
                },
                questRewardIncludeOrbs: {
                    label: "Uwzględniaj Orby",
                    description: "Wliczaj Questy z Orbami do licznika."
                },
                questButtonUnclaimed: {
                    label: "Wskaźnik nieodebranych na przycisku",
                    description: "Styl wskaźnika nieodebranych nagród na przycisku."
                },
                questButtonBadgeColor: {
                    label: "Kolor powiadomienia na przycisku",
                    description: "Kolor kropki powiadomienia na przycisku Questów."
                },
                questButtonLeftClickAction: {
                    label: "Akcja lewego kliknięcia",
                    description: "Co ma się stać po kliknięciu lewym przyciskiem myszy."
                },
                questButtonMiddleClickAction: {
                    label: "Akcja środkowego kliknięcia",
                    description: "Co ma się stać po kliknięciu kółkiem myszy."
                },
                questButtonRightClickAction: {
                    label: "Akcja prawego kliknięcia",
                    description: "Co ma się stać po kliknięciu prawym przyciskiem myszy."
                },
                fetchingQuests: {
                    label: "Pobieranie Questów",
                    description: "Pobieraj dane o Questach z serwerów Discorda."
                },
                fetchingQuestsInterval: {
                    label: "Interwał pobierania (sekundy)",
                    description: "Co ile sekund sprawdzać nowe Questy."
                },
                fetchingQuestsAlert: {
                    label: "Dźwięk alertu",
                    description: "Dźwięk odtwarzany przy wykryciu nowego Questa."
                },
                fetchingQuestsAlertVolume: {
                    label: "Głośność alertu",
                    description: "Głośność dźwięku przy wykryciu nowego Questa."
                },
                restyleQuests: {
                    label: "Zmiana stylu Questów",
                    description: "Dostosuj wygląd kafelków na stronie Questów."
                },
                restyleQuestsUnclaimed: {
                    label: "Kolor nieodebranych",
                    description: "Kolor kafelka nieodebranego Questa."
                },
                restyleQuestsClaimed: {
                    label: "Kolor odebranych",
                    description: "Kolor kafelka odebranego Questa."
                },
                restyleQuestsIgnored: {
                    label: "Kolor ignorowanych",
                    description: "Kolor kafelka ignorowanego Questa."
                },
                restyleQuestsExpired: {
                    label: "Kolor wygasłych",
                    description: "Kolor kafelka wygasłego Questa."
                },
                restyleQuestsGradient: {
                    label: "Styl gradientu",
                    description: "Typ gradientu używanego na kafelkach Questów."
                },
                restyleQuestsPreload: {
                    label: "Preload zasobów",
                    description: "Próbuj wczytywać grafiki Questów wcześniej."
                },
                reorderQuests: {
                    label: "Sortowanie Questów",
                    description: "Kolejność wyświetlania Questów według statusu (np. UNCLAIMED, CLAIMED...)."
                },
                unclaimedSubsort: {
                    label: "Podsortowanie nieodebranych",
                    description: "Metoda sortowania wewnątrz grupy nieodebranych."
                },
                claimedSubsort: {
                    label: "Podsortowanie odebranych",
                    description: "Metoda sortowania wewnątrz grupy odebranych."
                },
                ignoredSubsort: {
                    label: "Podsortowanie ignorowanych",
                    description: "Metoda sortowania wewnątrz grupy ignorowanych."
                },
                expiredSubsort: {
                    label: "Podsortowanie wygasłych",
                    description: "Metoda sortowania wewnątrz grupy wygasłych."
                },
                unclaimedUnignoredQuests: {
                    label: "Nieodebrane nieignorowane Questy",
                    description: "Licznik Questów, które nie są ani odebrane, ani zignorowane."
                },
                onQuestsPage: {
                    label: "Na stronie Questów",
                    description: "Czy użytkownik jest aktualnie na stronie Questów."
                },
                triggerQuestsRerender: {
                    label: "Odśwież stronę Questów",
                    description: "Przełączenie tego ustawienia wymusi ponowne wygenerowanie widoku strony Questów."
                },
                ignoredQuestProfile: {
                    label: "Profil ignorowanych Questów",
                    description: "Wybierz, czy lista ignorowanych ma być wspólna dla kont."
                },
                rememberQuestPageSort: {
                    label: "Zapamiętaj sortowanie",
                    description: "Zapamiętaj ostatnio wybrany sposób sortowania na stronie."
                },
                rememberQuestPageFilters: {
                    label: "Zapamiętaj filtry",
                    description: "Zapamiętaj ostatnio wybrane filtry na stronie."
                },
                lastQuestPageSort: {
                    label: "Ostatnie sortowanie",
                    description: "Ostatnio użyte sortowanie na stronie Questów."
                },
                lastQuestPageFilters: {
                    label: "Ostatnie filtry",
                    description: "Ostatnio użyte filtry na stronie Questów."
                },
                ignoredQuestIDs: {
                    label: "Zignorowane ID Questów",
                    description: "Tablica z identyfikatorami zignorowanych zadań."
                },
                resumeQuestIDs: {
                    label: "Wznawiane ID Questów",
                    description: "Tablica zadań, które są w trakcie auto-ukończenia w tle."
                }
            },
            button: {
                questInProgressWithTime: "Kończenie ({{remainTime}})",
                completing: "Kończenie",
                resume: "Wznów (~{{remainTime}})",
                complete: "Ukończ {{remainTime}}",
                completeImmediate: "Ukończ (Natychmiast)",
                completed: "Ukończono"
            },
            reward: {
                orbs: "{{completingText}} za {{orbQuantity}} Orbów.",
                article: "{{completingText}} za {{itemName}}.",
                unrecognized: "{{completingText}} za nierozpoznany typ nagrody."
            },
            notification: {
                completed: {
                    title: "Quest ukończony",
                    body: "Quest {{questName}} został ukończony."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Zastępuje znaki zapytania wybranym tekstem, jeśli wiadomość zawiera same pytajniki.",
            option: {
                replace: {
                    label: "Zamień na",
                    description: "Tekst zamienny"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Dodaje przycisk szybkiego wspomnienia do paska akcji wiadomości",
            tooltip: "Szybkie wspomnienie"
        },
        quickReply: {
            name: "QuickReply",
            description: "Odpowiadaj (Ctrl+Góra/Dół) i edytuj (Ctrl+Shift+Góra/Dół) wiadomości za pomocą skrótów klawiszowych",
            option: {
                shouldMention: {
                    label: "Oznaczaj użytkownika",
                    description: "Czy domyślnie włączać oznaczanie (ping) przy odpowiedzi",
                    noReplyMentionPlugin: "Zgodnie z wtyczką NoReplyMention (jeśli włączona)",
                    enabled: "Włączone",
                    disabled: "Wyłączone"
                },
                ignoreBlockedAndIgnored: {
                    label: "Ignoruj zablokowanych i ignorowanych",
                    description: "Pomiń wiadomości zablokowanych osób podczas nawigacji klawiszami"
                }
            }
        },
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Szybkie przełączanie motywów za pomocą skrótów klawiszowych.",
            about: {
                title: "Skróty",
                description: "Użyj Ctrl/Cmd+Shift+Strzałki do nawigacji (Lewo/Prawo: przełączanie, Góra: włącz, Dół: wyłącz).",
                reload: "Naciśnij Ctrl/Cmd+Shift+Alt, aby odświeżyć listę motywów."
            },
            modal: {
                added: "Dodano {{count}} motyw(ów)",
                removed: "Usunięto {{count}} motyw(ów)",
                reloaded: "Odświeżono {{themeCount}} motywów",
                addedLocal: "Dodano {{count}} lokalnych motyw(ów)",
                removedLocal: "Usunięto {{count}} lokalnych motyw(ów)",
            },
            option: {
                includeLocal: {
                    label: "Uwzględniaj lokalne",
                    description: "Wliczaj motywy zapisane lokalnie"
                },
                includeOnline: {
                    label: "Uwzględniaj online",
                    description: "Wliczaj motywy z sieci"
                },
                sortOrder: {
                    label: "Sortowanie",
                    description: "Metoda sortowania",
                    asc: "A-Z",
                    desc: "Z-A",
                    recent: "Ostatnie"
                },
                autoRefresh: {
                    label: "Auto-odświeżanie",
                    description: "Automatycznie odświeżaj listę po wykryciu zmian w plikach"
                },
                showNotifications: {
                    label: "Pokaż powiadomienia",
                    description: "Pokazuj powiadomienia przy dodawaniu/usuwaniu motywów"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Pozwala stworzyć grafikę z inspirującym cytatem na podstawie wiadomości",
            context: {
                quote: "Cytuj jako obraz"
            },
            modal: {
                title: "Złap ich w 4K",
                grayscale: "Czarno-białe",
                export: "Eksportuj",
                send: "Wyślij",
                saveAsGIF: "Zapisz jako GIF",
                saveDescription: "Zapisuje/wysyła obraz jako GIF zamiast PNG",
                showWatermark: "Pokaż znak wodny",
                watermarkText: "Tekst znaku wodnego (maks. 32 znaki)"
            },
            option: {
                quoteFont: {
                    label: "Czcionka cytatu",
                    description: "Czcionka dla tekstu cytatu (autor/nick zawsze używa M PLUS Rounded 1c)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Znak wodny",
                    description: "Własny tekst znaku wodnego (maks. 32 znaki)"
                },
                grayscale: {
                    label: "Czarno-białe",
                    description: "Domyślnie włączaj tryb czarno-biały"
                },
                showWatermark: {
                    label: "Pokaż znak wodny",
                    description: "Domyślnie pokazuj znak wodny"
                },
                saveAsGif: {
                    label: "Zapisz jako GIF",
                    description: "Domyślnie zapisuj jako plik GIF"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Dodaje przycisk obok przycisku Wycisz, aby dołączyć do losowego kanału głosowego.",
            tooltip: "Losowy kanał głosowy",
            context: {
                label: "Modyfikator stanu głosowego",
                amountLabel: "LICZBA UŻYTKOWNIKÓW",
                spacesLabel: "WOLNE MIEJSCA",
                voiceLabel: "LIMIT OSÓB",
                selfLabel: "WŁASNE USTAWIENIA",
                select: {
                    servers: "Wybierz serwery",
                    list: "Wybierz listę",
                    filters: "Wybierz filtry",
                    amount: "Liczba użytkowników",
                    userAmount: "{{amount}} użytkownik(ów)",
                    parameters: "Parametry",
                    moreThan: "Więcej niż",
                    lessThan: "Mniej niż",
                    equalTo: "Równe",
                    spaces: "Wolne miejsca",
                    voice: "Limit osób"
                },
                filter: {
                    muted: "Wyciszeni",
                    deafened: "Ogłuszeni",
                    camera: "Kamera",
                    stream: "Strumień",
                    includeFilters: "Uwzględnij filtry",
                    avoidFilters: "Unikaj filtrów"
                },
                reset: {
                    list: "Resetuj listę"
                },
                voice: {
                    label: "Opcje głosowe",
                    auto: {
                        mute: "Auto-wyciszenie",
                        deafen: "Auto-ogłuszenie",
                        camera: "Auto-kamera",
                        stream: "Auto-strumień",
                        leaveWhenEmpty: "Opuść gdy pusty",
                        navigate: "Auto-nawigacja",
                        stage: "Unikaj kanałów Stage",
                        afk: "Unikaj AFK"
                    }
                },
                invalid: {
                    server: "Nieprawidłowy serwer"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Operacja na liczbie użytkowników",
                    description: "Wybierz sposób porównywania liczby osób"
                },
                userAmount: {
                    label: "Liczba użytkowników",
                    description: "Wybierz liczbę osób"
                },
                spacesLeftOperation: {
                    label: "Operacja na wolnych miejscach",
                    description: "Wybierz sposób porównywania wolnych miejsc"
                },
                spacesLeft: {
                    label: "Wolne miejsca",
                    description: "Wybierz liczbę wolnych miejsc"
                },
                vcLimitOperation: {
                    label: "Operacja na limicie kanału",
                    description: "Wybierz sposób porównywania limitu osób na kanale."
                },
                vcLimit: {
                    label: "Limit kanału",
                    description: "Wybierz limit kanału głosowego"
                },
                servers: {
                    label: "Serwery",
                    description: "Serwery uwzględnione w wyszukiwaniu"
                },
                autoNavigate: {
                    label: "Auto-nawigacja",
                    description: "Automatycznie przechodzi do widoku kanału po dołączeniu."
                },
                autoCamera: {
                    label: "Auto-kamera",
                    description: "Automatycznie włącza kamerę"
                },
                autoStream: {
                    label: "Auto-strumień",
                    description: "Automatycznie włącza udostępnianie ekranu"
                },
                selfMute: {
                    label: "Auto-wyciszenie",
                    description: "Automatycznie wycisza mikrofon przy dołączaniu."
                },
                selfDeafen: {
                    label: "Auto-ogłuszenie",
                    description: "Automatycznie ogłusza dźwięk przy dołączaniu."
                },
                leaveEmpty: {
                    label: "Opuść gdy pusty",
                    description: "Szuka nowego kanału, gdy obecny stanie się pusty."
                },
                avoidStages: {
                    label: "Unikaj kanałów Stage",
                    description: "Unika dołączania do kanałów typu Scena."
                },
                avoidAfk: {
                    label: "Unikaj AFK",
                    description: "Unika dołączania do kanałów AFK."
                },
                video: {
                    label: "Wideo",
                    description: "Szuka osób z włączoną kamerą"
                },
                stream: {
                    label: "Strumień",
                    description: "Szuka osób udostępniających ekran"
                },
                mute: {
                    label: "Wyciszenie",
                    description: "Szuka osób z wyciszonym mikrofonem"
                },
                deafen: {
                    label: "Ogłuszenie",
                    description: "Szuka osób z ogłuszonym dźwiękiem"
                },
                includeStates: {
                    label: "Uwzględnij filtry",
                    description: "Filtry, które muszą być spełnione"
                },
                avoidStates: {
                    label: "Unikaj filtrów",
                    description: "Filtry, które mają być omijane"
                }
            },
            alert: {
                failed: "Nie znaleziono odpowiedniego kanału głosowego!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "Dekoduje kody błędów React na komunikaty zrozumiałe dla człowieka."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Odczytaj wszystkie powiadomienia z serwerów jednym kliknięciem!",
            button: "Odczytaj wszystkie"
        },
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "Przełączaj się między ostatnio używanymi PW za pomocą Ctrl+Tab (Ctrl+Shift+Tab w tył)",
            option: {
                visualStyle: {
                    label: "Styl wizualny",
                    description: "Styl wskaźnika podczas przełączania",
                    overlay: "Nakładka (styl Alt+Tab)",
                    toast: "Toast (komunikat statusu)",
                    off: "Wyłączone"
                },
                overlayMode: {
                    label: "Tryb nakładki",
                    description: "Zawartość nakładki",
                    row: "Rząd ostatnich",
                    current: "Tylko aktualny",
                },
                amountOfUsers: {
                    label: "Liczba użytkowników",
                    description: "Ilu użytkowników pokazywać w nakładce"
                },
                overlayRowLength: {
                    label: "Długość rzędu w nakładce",
                    description: "Liczba ostatnich PW pokazanych w rzędzie"
                },
                overlayShowAvatars: {
                    label: "Pokazuj awatary w nakładce",
                    description: "Wyświetlaj awatary użytkowników w nakładce"
                },
                toastDurationMs: {
                    label: "Czas wyświetlania komunikatu (ms)",
                    description: "Czas trwania komunikatu statusu"
                },
                clearRdms: {
                    label: "Wyczyść listę RDMS",
                    description: "Narzędzie testowe: Czyści historię ostatnich PW",
                    toast: "Wyczyszczono historię RDMS",
                    button: "Wyczyść historię RDMS"
                }
            },
            modal: {
                unknown: "Nieznany",
                dm: "PW",
                group: "Grupa PW",
                channel: "Kanał",
                switchingTo: "Przełączanie na: {{name}}"
            }
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Powiadamia, gdy znajomy, grupa lub serwer Cię usunie.",
            option: {
                notices: {
                    label: "Powiadomienia na pasku",
                    description: "Pokazuj również baner na górze ekranu po usunięciu (użyj tego, jeśli nie chcesz niczego przegapić)."
                },
                offlineRemovals: {
                    label: "Usuwanie w trybie offline",
                    description: "Powiadom po uruchomieniu Discorda, jeśli zostałeś usunięty będąc offline."
                },
                friends: {
                    label: "Znajomi",
                    description: "Powiadamiaj, gdy znajomy Cię usunie"
                },
                friendRequestCancels: {
                    label: "Anulowane zaproszenia",
                    description: "Powiadamiaj, gdy zaproszenie do znajomych zostanie anulowane"
                },
                servers: {
                    label: "Serwery",
                    description: "Powiadamiaj o usunięciu z serwera"
                },
                groups: {
                    label: "Grupy",
                    description: "Powiadamiaj o usunięciu z grupy PW"
                }
            },
            notification: {
                removedFriend: "Użytkownik {{user}} usunął Cię ze znajomych.",
                cancelledFriendRequest: "Zaproszenie do znajomych od {{user}} zostało usunięte.",
                removedFromServer: "Zostałeś usunięty z serwera {{server}}.",
                removedFromGroup: "Zostałeś usunięty z grupy {{group}}.",
                noLongerGroup: "Nie należysz już do grupy {{group}}.",
                noLongerServer: "Nie należysz już do serwera {{server}}.",
                noLongerFriend: "Nie jesteś już w znajomych z {{user}}.",
                friendRequestRevoked: "Zaproszenie od {{user}} zostało wycofane.",
                ok: "OK"
            }
        },
        remix: {
            name: "Remix",
            description: "Dodaje opcję 'Remix' pod prawym przyciskiem myszy na przycisku wysyłania plików. Otwiera obraz w prostym edytorze i pozwala wysłać go bezpośrednio na czat.",
            label: "Remix",
            button: {
                send: "Wyślij",
                close: "Zamknij",
                brush: "Pędzel",
                erase: "Gumka",
                crop: "Kadruj",
                shape: "Kształt",
                reset: "Resetuj",
                clear: "Wyczyść"
            },
            editor: {
                choose: "Wybierz obraz",
                browse: "Przeglądaj",
                rectangle: "Prostokąt",
                ellipse: "Elipsa",
                line: "Linia",
                arrow: "Strzałka",
                fill: "Wypełnienie"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Pozwala na szybkie powtarzanie wiadomości. Przytrzymanie Shift podczas klikania opcji Powtórz spowoduje odpowiedź na wiadomość.",
            button: "Powtórz (Kliknij) / Powtórz i Odpowiedz (Shift + Kliknij)",
            context: {
                repeat: "Powtórz",
                repeatAndReply: "Powtórz i odpowiedz"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Zastępuje wyszukiwarkę Google innymi silnikami wyszukiwania.",
            option: {
                customEngineName: {
                    label: "Własna nazwa wyszukiwarki",
                    description: "Nazwa Twojego silnika wyszukiwania"
                },
                customEngineURL: {
                    label: "Własny adres URL",
                    description: "Adres URL Twojej wyszukiwarki"
                },
                replacementEngine: {
                    label: "Silnik zastępczy",
                    description: "Zastąp domyślną wyszukiwarkę konkretnym silnikiem zamiast dodawania menu",
                    off: "Wyłączone",
                    custom: "Własny silnik",
                }
            },
            context: {
                label: "Szukaj tekstu",
                searchWith: "Szukaj w: {{name}}"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Kontroluj, czy chcesz być oznaczany przy odpowiedziach na wiadomości, z funkcją białej listy",
            option: {
                alwaysPingOnReply: {
                    label: "Zawsze oznaczaj przy odpowiedzi",
                    description: "Zawsze otrzymuj powiadomienie (ping), gdy ktoś odpowiada na Twoją wiadomość"
                },
                replyPingWhitelist: {
                    label: "Biała lista pingów odpowiedzi",
                    description: "Lista ID użytkowników (po przecinku), od których zawsze chcesz otrzymywać powiadomienia przy odpowiedziach"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Pokazuje znacznik czasu w podglądzie odpowiedzi"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Odkryj wszystkie spoilery w wiadomości przez Ctrl-klik na spoiler lub na czacie przez Ctrl+Shift-klik"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Dodaje wyszukiwanie obrazem do menu kontekstowego zdjęć",
            context: {
                label: "Szukaj obrazem",
                all: "Szukaj we wszystkich"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Recenzuj innych użytkowników (dodaje nową sekcję w profilach)",
            notification: {
                newReview: "Masz nowe recenzje w swoim profilu!",
                auth: {
                    error: "Wystąpił błąd podczas autoryzacji",
                    successfully: "Zalogowano pomyślnie!",
                    failed: "Autoryzacja nieudana",
                    review: "Autoryzuj, aby dodać recenzję.",
                    opening: "Otwieranie okna autoryzacji...",
                    need: "Musisz się autoryzować, aby oceniać użytkowników!"
                },
                error: {
                    fast: "Wysyłasz żądania zbyt szybko. Odczekaj kilka sekund i spróbuj ponownie.",
                    fetching: "Błąd podczas pobierania recenzji.",
                    action: {
                        failed: "Nie udało się wykonać akcji: {{action}}",
                        success: "Pomyślnie wykonano akcję: {{action}}"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Jesteś pewien?",
                    description: "Czy na pewno chcesz usunąć tę recenzję?",
                    confirm: "Usuń",
                    cancel: "Anuluj",
                    error: "Musisz być zalogowany, aby usuwać recenzje.",
                },
                report: {
                    title: "Jesteś pewien?",
                    description: "Czy na pewno chcesz zgłosić tę recenzję?",
                    confirm: "Zgłoś",
                    cancel: "Anuluj",
                    error: "Musisz być zalogowany, aby zgłaszać recenzje.",
                },
                block: {
                    title: "Jesteś pewien?",
                    description: "Czy na pewno chcesz zablokować tego użytkownika? Nie będziesz widzieć jego recenzji.",
                    confirm: "Blokuj",
                    cancel: "Anuluj",
                    error: "Musisz być zalogowany, aby blokować użytkowników.",
                },
                blocked: {
                    title: "Zablokowani użytkownicy",
                    auth: "Nie jesteś zalogowany do ReviewDB!",
                    noBlocked: "Brak zablokowanych użytkowników.",
                    fetch: "Błąd podczas pobierania listy zablokowanych."
                },
                reviews: {
                    title: " - recenzje",
                    noUser: "Wygląda na to, że nikt jeszcze nie ocenił tego użytkownika. Możesz być pierwszy!",
                    noServer: "Wygląda na to, że nikt jeszcze nie ocenił tego serwera. Możesz być pierwszy!"
                }
            },
            button: {
                appeal: "Odwołaj się",
                ok: "OK",
                more: "Czytaj więcej",
                reply: "Odpowiedz użytkownikowi @{{user}}",
                update: "Zaktualizuj recenzję dla @{{user}}",
                review: "Oceń @{{user}}"
            },
            context: {
                view: "Zobacz recenzje",
                blocked: "Zablokowałeś tego użytkownika",
                delete: "Usuń recenzję",
                report: "Zgłoś recenzję",
                block: "Blokuj użytkownika",
                unblock: "Odblokuj użytkownika",
                reply: "Odpowiedz na recenzję"
            },
            option: {
                authorize: {
                    label: "Autoryzacja",
                    button: "Autoryzuj w ReviewDB"
                },
                notifyReviews: {
                    label: "Powiadomienia o recenzjach",
                    description: "Powiadamiaj o nowych recenzjach przy starcie"
                },
                showWarning: {
                    label: "Pokaż ostrzeżenie",
                    description: "Wyświetlaj przypomnienie o szacunku na górze listy recenzji"
                },
                hideTimestamps: {
                    label: "Ukryj znaczniki czasu",
                    description: "Ukryj daty przy recenzjach"
                },
                hideBlockedUsers: {
                    label: "Ukryj zablokowanych",
                    description: "Ukryj recenzje od zablokowanych osób"
                },
                buttons: {
                    label: "Przyciski",
                    manageBlocked: "Zarządzaj zablokowanymi",
                    support: "Wesprzyj rozwój ReviewDB",
                    website: "Strona ReviewDB",
                    server: "Serwer wsparcia ReviewDB"
                }
            },
            profile: {
                optedOut: "Użytkownik zrezygnował",
                noReviews: "Brak recenzji"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Renderuje linki magnet podobnie jak linki do wiadomości",
            unknown: "nieznana nazwa pliku"
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "Dodaje kolor najwyższej roli wszędzie tam, gdzie to możliwe",
            option: {
                chatMentions: {
                    label: "Wzmianki na czacie",
                    description: "Pokazuj kolory ról we wspomnieniach (również w polu pisania)"
                },
                memberList: {
                    label: "Lista członków",
                    description: "Pokazuj kolory ról w nagłówkach ról na liście członków"
                },
                voiceUsers: {
                    label: "Użytkownicy głosowi",
                    description: "Pokazuj kolory ról na liście osób na kanale głosowym"
                },
                reactorsList: {
                    label: "Lista reagujących",
                    description: "Pokazuj kolory ról na liście osób, które dodały reakcję"
                },
                pollResults: {
                    label: "Wyniki ankiet",
                    description: "Pokazuj kolory ról w wynikach ankiet"
                },
                colorChatMessages: {
                    label: "Koloruj wiadomości",
                    description: "Koloruj całe wiadomości na podstawie koloru roli autora"
                },
                messageSaturation: {
                    label: "Nasycenie wiadomości",
                    description: "Intensywność kolorowania wiadomości"
                }
            }
        },
        rpcEditor: {
            name: "RPCEditor",
            description: "Edytuj typ i treść dowolnego statusu Rich Presence",
            option: {
                replacedAppIds: {
                    label: "Zastąpione ID aplikacji",
                }
            },
            modal: {
                tutorial: {
                    title: "ID aktualnie uruchomionych aktywności",
                    noRunning: "Brak aktywnych działań",
                    available: "Dostępne zmienne",
                    variableText: "W każdym polu (oprócz URL strumienia) możesz użyć zmiennych, które zostaną zastąpione oryginalną treścią:",
                    more: "Więcej szczegółów",
                    details: {
                        leave: "Zostaw pole puste, aby nie zmieniać oryginału.",
                        set: "Wpisz 'null', aby ukryć dane pole w statusie.",
                        reload: "Możesz potrzebować przeładować Discorda, aby zmiany weszły w życie."
                    }
                },
                settings: {
                    applyEdits: "Zastosuj zmiany do aplikacji",
                    addNewApp: "Dodaj nową aplikację",
                    appId: "ID Aplikacji",
                    invalidAppId: "Nieprawidłowe ID aplikacji",
                    newActivityType: "Nowy typ aktywności",
                    activityTypes: {
                        playing: "Gra w",
                        watching: "Ogląda",
                        listening: "Słucha",
                        competing: "Rywalizuje w",
                        streaming: "Strumieniuje"
                    },
                    streamUrl: "URL Strumienia (YouTube lub Twitch)",
                    invalidStreamUrl: "Nieprawidłowy adres URL strumienia",
                    newName: "Nowa nazwa",
                    newDetails: "Nowe szczegóły",
                    newState: "Nowy stan",
                    largeImage: "Duży obraz",
                    smallImage: "Mały obraz",
                    text: "Tekst",
                    url: "URL",
                    firstLine: "(pierwsza linia)",
                    secondLine: "(druga linia)",
                    thirdLine: "(trzecia linia)",
                    alsoThirdLine: "(również trzecia linia)",
                    hideAssets: "Ukryj grafiki (duży i mały obraz)",
                    hideTimestamps: "Ukryj czas trwania"
                }
            },
        },
        rpcStats: {
            name: "RPCStats",
            description: "Wyświetla statystyki Twojej aktywności w statusie RPC",
            option: {
                assetURL: {
                    label: "URL grafiki",
                    description: "Obraz używany w RPC. Jeśli puste, użyty zostanie Twój awatar"
                },
                rpcTitle: {
                    label: "Tytuł RPC",
                    description: "Tytuł Twojego statusu"
                },
                statDisplay: {
                    label: "Wyświetlana statystyka",
                    description: "Co ma wyświetlać RPC? (Obsługiwana tylko jedna linia)",
                    today: "Liczba wiadomości wysłanych dzisiaj",
                    alltime: "Liczba wiadomości wysłanych od początku",
                    listened: "Najczęściej słuchany album w tym tygodniu"
                },
                lastFMApiKey: {
                    label: "Klucz API Last.fm",
                    description: "Twój klucz API Last.fm"
                },
                lastFMUsername: {
                    label: "Nazwa użytkownika Last.fm",
                    description: "Twój nick na Last.fm"
                },
                albumCoverImage: {
                    label: "Okładka albumu",
                    description: "Czy używać okładki albumu jako grafiki RPC? (Wymaga wybranej statystyki Last.fm)"
                },
                lastFMStatFormat: {
                    label: "Format statystyki Last.fm",
                    description: "Jak sformatować tekst? $album zostanie zamienione na nazwę albumu, a $artist na wykonawcę"
                }
            },
            noInfo: "Brak informacji w tej chwili :(",
            messagesToday: "Wiadomości dzisiaj: {{count}}",
            messagesAllTime: "Wiadomości łącznie: {{count}}"
        },
        saveFavoriteGIFs: {
            name: "SaveFavouritedGIFs",
            description: "Eksportuj adresy URL ulubionych GIF-ów",
            toolbox: "Zapisz ulubione GIF-y",
            title: "Zapisz ulubione GIF-y",
            command: {
                savegifs: {
                    description: "Zapisz wszystkie adresy URL ulubionych GIF-ów do pliku tekstowego"
                },
                saveworkinggifs: {
                    description: "Przetestuj wszystkie ulubione GIF-y i zapisz tylko te, które nadal działają"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Pokaż przycisk w Toolboxie",
                    description: "Pokaż przycisk 'Zapisz ulubione GIF-y' w Toolboxie Plexcord (Wymaga przeładowania)"
                }
            },
            toast: {
                save: "Pomyślnie zapisano GIF-y jako {{filename}}",
                failed: "Nie udało się zapisać GIF-ów",
                no: "Nie znaleziono żadnych ulubionych GIF-ów!",
                testing: "Testowanie {{count}} GIF-ów, to może chwilę potrwać...",
                noneWorking: "Wygląda na to, że żaden z Twoich zapisanych GIF-ów nie działa.",
                saved: "Odfiltrowano {{broken}} prawdopodobnie uszkodzonych GIF-ów. Zapisano {{saved}} działających plików."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Planuj wysyłanie wiadomości o określonej godzinie lub po zadanym opóźnieniu.",
            toolbox: {
                toggle: "Zobacz zaplanowane wiadomości"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Maks. wiadomości na minutę",
                    description: "Maksymalna liczba zaplanowanych wiadomości na kanał, które mogą zostać wysłane w tej samej minucie."
                },
                checkIntervalSeconds: {
                    label: "Interwał sprawdzania (sekundy)",
                    description: "Jak często wtyczka sprawdza wiadomości do wysłania."
                },
                showNotifications: {
                    label: "Pokaż powiadomienia",
                    description: "Pokazuj powiadomienia typu 'toast' po wysłaniu wiadomości."
                },
                showPhantomMessages: {
                    label: "Pokaż wiadomości widmo",
                    description: "Pokazuj zaplanowane wiadomości jako 'wiadomości widmo' (widoczne tylko dla Ciebie) na czacie."
                }
            },
            channelType: {
                unknown: "Nieznany",
                dm: "PW",
                groupDm: "Grupa PW",
                channel: "Kanał"
            },
            toast: {
                messageSent: "Wysłano zaplanowaną wiadomość do {{channel}}",
                messageFailed: "Nie udało się wysłać zaplanowanej wiadomości",
                maxMessagesReached: "Osiągnięto limit {{max}} wiadomości na kanał na minutę",
                messageScheduled: "Wiadomość została zaplanowana!",
                messageRemoved: "Usunięto zaplanowaną wiadomość",
                allCleared: "Wszystkie zaplanowane wiadomości zostały wyczyszczone"
            },
            button: {
                tooltipOn: "Tryb planowania: WŁĄCZONY (kliknij by wyłączyć, prawy klik by zobaczyć listę)",
                tooltipOff: "Tryb planowania: WYŁĄCZONY (kliknij by włączyć, prawy klik by zobaczyć listę)"
            },
            accessory: {
                scheduledFor: "Zaplanowano na {date}{timeLeft}",
                remaining: {
                    days: "Zostało {{days}}d {{hours}}h",
                    hours: "Zostało {{hours}}h {{minutes}}m",
                    minutes: "Zostało {{minutes}}m"
                }
            },
            scheduleModal: {
                title: "Zaplanuj wiadomość",
                schedulingFor: "Planowanie dla: {{channel}}",
                scheduleType: "Typ planowania",
                delay: "Opóźnienie",
                specificTime: "Konkretny czas",
                delayMinutes: "Opóźnienie (minuty)",
                dateTime: "Data i godzina",
                error: {
                    invalidDelay: "Wprowadź poprawne opóźnienie (minimum 1 minuta)",
                    invalidDateTime: "Wybierz przyszłą datę i godzinę"
                },
                schedule: "Zaplanuj",
                cancel: "Anuluj"
            },
            viewModal: {
                title: "Zaplanowane wiadomości",
                clearAll: "Wyczyść wszystko",
                noMessages: "Brak zaplanowanych wiadomości",
                delete: "Usuń",
                close: "Zamknij"
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Naprawia irytujący błąd 'Upuściliśmy lupę!' (We dropped the magnifying glass!).",
            notPerfect: "Ta poprawka nie jest idealna, więc może być konieczne przeładowanie paska wyszukiwania, aby rozwiązać problemy.",
            paragraph1: "Discord pozwala na maksymalny offset wynoszący 5000 (to właśnie powoduje błąd lupy).",
            paragraph2: "Oznacza to, że możesz zobaczyć dokładnie 5000 wiadomości w przeszłość i 5000 w przyszłość (podczas sortowania od najstarszych).",
            paragraph3: "Ta wtyczka po prostu przeskakuje na przeciwną metodę sortowania, aby spróbować obejść to ograniczenie Discorda,",
            paragraph4: "ale jeśli wynik wyszukiwania jest ogromny i spróbujesz wyświetlić wiadomość nieosiągalną obiema metodami,",
            paragraph5: "wtyczka po prostu pokaże offset 0 (najnowszą lub najstarszą wiadomość, zależnie od metody)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Zawsze odtwarzaj rzadką, sekretną wersję dzwonka Discorda (z wyjątkiem specjalnych wydarzeń dzwonkowych)",
            option: {
                onlySnow: {
                    label: "Tylko podczas wydarzenia śnieżnego",
                    description: "Odtwarzaj tylko motyw Snow Halation"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Włącza eksperymentalną funkcję 'Podsumowania' Discorda na każdym serwerze, wyświetlając generowane przez AI streszczenia rozmów",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Próg wygaśnięcia podsumowania (dni)",
                    description: "Czas w dniach, po którym podsumowanie jest usuwane. Pamiętaj, że na kanał przechowywanych jest maksymalnie 50 podsumowań."
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Dodaje aktualny kanał do wyskakującego okienka listy przesyłania wiadomości (Forward)"
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Łatwo wysyłaj znaczniki czasu (timestamps) za pomocą przycisku na pasku czatu i skrótów tekstowych. Przeczytaj rozszerzony opis!",
            sample: {
                paragraph1: "Aby szybko wysłać samą godzinę, umieść czas w formacie `GG:MM` (koniecznie w odwrotnych apostrofach!) w swojej wiadomości",
                paragraph2: "Przykłady poniżej.\nJeśli potrzebujesz czegoś bardziej specyficznego, użyj przycisku Daty na pasku czatu!",
                examples: "Przykłady:"
            },
            modal: {
                title: "Wybór znacznika czasu",
                light: "Jasny",
                dark: "Ciemny",
                format: "Format znacznika czasu",
                preview: "Podgląd",
                insert: "Wstaw",
                insertTimestamp: "Wstaw znacznik czasu"
            },
            option: {
                replaceMessageContents: {
                    label: "Zastępuj zawartość wiadomości",
                    description: "Zastępuj tekstowe znaczniki czasu w treści wiadomości"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Pozwala przeglądać informacje o serwerze",
            context: {
                serverInfo: "Informacje o serwerze"
            },
            option: {
                sorting: {
                    label: "Sortowanie",
                    description: "Nazwa użytkownika lub, jeśli dotyczy, nazwa wyświetlana",
                    username: "Nazwa użytkownika",
                    displayname: "Nazwa wyświetlana",
                    none: "Nie sortuj"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Info o serwerze",
                    friends: "Znajomi",
                    mutualUsers: "Wspólni użytkownicy",
                    blockedUsers: "Zablokowani użytkownicy",
                    ignoredUsers: "Ignorowani użytkownicy"
                },
                owner: "Właściciel serwera",
                loading: "Ładowanie...",
                createdAt: "Utworzono",
                joinedAt: "Dołączono",
                vanityLink: "Własny link (Vanity)",
                preferredLocale: "Preferowany język",
                verification: {
                    level: "Poziom weryfikacji",
                    none: "Brak",
                    low: "Niski",
                    medium: "Średni",
                    high: "Wysoki",
                    highest: "Najwyższy"
                },
                serverBoosts: "Ulepszenia serwera (Boosty)",
                channels: "Kanały",
                roles: "Role"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Dodaje licznik znajomych online lub liczbę serwerów na liście serwerów",
            friends: "Znajomi",
            servers: "Serwery",
            option: {
                mode: {
                    label: "Tryb",
                    description: "Co wyświetlać na liście serwerów",
                    friend: "Tylko liczba znajomych online",
                    server: "Tylko liczba serwerów",
                    both: "Liczba serwerów i znajomych online"
                },
                useCompact: {
                    label: "Użyj trybu kompaktowego",
                    description: "Sprawia, że wskaźnik pojawia się w formie samego tekstu"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Lepsza nawigacja po serwerach dzięki przyciskowi szybkiego wyszukiwania",
            tooltip: "Szukaj"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Wprowadza bloki kodu w stylu VS Code do Discorda, wspierane przez silnik Shiki",
            option: {
                theme: {
                    label: "Motyw",
                    description: "Domyślne motywy"
                },
                customTheme: {
                    label: "Własny motyw",
                    description: "Link do własnego motywu VS Code",
                    mustURL: "Musi być poprawnym adresem URL",
                    mustJSON: "Musi być plikiem JSON"
                },
                tryHljs: {
                    label: "Powrót do Hljs (Fallback)",
                    description: "Użyj lżejszego, domyślnego mechanizmu wyróżniania Discorda.",
                    never: "Nigdy",
                    secondary: "Preferuj Shiki zamiast Highlight.js",
                    primary: "Preferuj Highlight.js zamiast Shiki",
                    always: "Zawsze"
                },
                useDevIcon: {
                    label: "Używaj Devicon dla ikon języków",
                    description: "Jak wyświetlać ikony języków programowania w blokach kodu",
                    disabled: "Wyłączone",
                    colorless: "Bezbarwne",
                    colored: "Kolorowe"
                },
                bgOpacity: {
                    label: "Przezroczystość tła",
                    description: "Stopień przezroczystości tła"
                }
            },
            button: {
                copy: "Kopiuj",
                copied: "Skopiowano!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Zawsze pokazuj wszystkie przyciski wiadomości, niezależnie od tego, czy trzymasz klawisz Shift.",
            option: {
                noShiftDelete: {
                    label: "Usuwanie bez Shift",
                    description: "Usuń wymóg trzymania klawisza Shift przy usuwaniu wiadomości."
                },
                noShiftPin: {
                    label: "Przypinanie bez Shift",
                    description: "Usuń wymóg trzymania klawisza Shift przy przypinaniu wiadomości."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Pokazuje odznaki autora wiadomości obok jego nazwy na czacie.",
            option: {
                showPlexcordDonor: {
                    label: "Odznaka Donatora Plexcord",
                    description: "Włącz wyświetlanie odznak Donatorów Plexcord na czacie."
                },
                plexcordDonorPosition: {
                    label: "Pozycja odznaki Donatora",
                    description: "Miejsce wyświetlania odznak Donatorów Plexcord."
                },
                showPlexcordContributor: {
                    label: "Odznaka Współtwórcy Plexcord",
                    description: "Włącz wyświetlanie odznak Współtwórców Plexcord na czacie."
                },
                plexcordContributorPosition: {
                    label: "Pozycja odznaki Współtwórcy",
                    description: "Miejsce wyświetlania odznak Współtwórców Plexcord."
                },
                showDiscordProfile: {
                    label: "Odznaki profilu Discord",
                    description: "Włącz wyświetlanie odznak profilowych Discord na czacie."
                },
                discordProfilePosition: {
                    label: "Pozycja odznak profilu",
                    description: "Miejsce wyświetlania odznak profilowych Discord."
                },
                showDiscordNitro: {
                    label: "Odznaka Discord Nitro",
                    description: "Włącz wyświetlanie odznak Discord Nitro na czacie."
                },
                discordNitroPosition: {
                    label: "Pozycja odznaki Nitro",
                    description: "Miejsce wyświetlania odznak Discord Nitro."
                },
                badgeSettings: {
                    label: "Ustawienia odznak",
                    description: "Skonfiguruj pozycję innych odznak wyświetlanych na czacie.",
                    modal: "Przeciągnij odznaki, aby zmienić ich kolejność; kliknij, aby włączyć/wyłączyć konkretny typ odznaki."
                }
            },
            badge: {
                plexcord: "Odznaka donatora Plexcord",
                contributor: "Odznaka współtwórcy Plexcord",
                discordProfile: "Odznaki profilu Discord (HypeSquad, Staff, Aktywny Deweloper itp.)",
                nitro: "Odznaka Nitro",
                staff: "Pracownik Discorda",
                partner: "Właściciel serwera partnerskiego",
                events: "Wydarzenia HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Łowca błędów Discord",
                earlyVerifiedBotDeveloper: "Wczesny zweryfikowany deweloper bota",
                earlySupporter: "Wczesny wspierający",
                moderatorProgram: "Absolwent programu moderatorów"
            },
            modal: {
                plexcordContributor: "Współtwórca Plexcord",
                discordNitro: "Discord Nitro",
                basic: "Podstawowe",
                classic: "Klasyczne"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Pokazuje połączone konta (integracje) w małych oknach profili",
            option: {
                iconSize: {
                    label: "Rozmiar ikon",
                    description: "Rozmiar ikon w pikselach (px)"
                },
                iconSpacing: {
                    label: "Odstępy między ikonami",
                    description: "Marginesy między ikonami",
                    compact: "Kompaktowe",
                    cozy: "Wygodne",
                    roomy: "Przestronne"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Pokazuje kanały, do których nie masz uprawnień przeglądania.",
            tooltip: "Ukryty kanał",
            option: {
                channelStyle: {
                    label: "Styl kanału",
                    description: "Styl używany do wyświetlania ukrytych kanałów.",
                    classic: "Klasyczny",
                    muted: "Wyciszony",
                    showUnreads: "Pokaż nieprzeczytane",
                    mutedWithUnreads: "Wyciszony i pokaż nieprzeczytane"
                },
                showMode: {
                    label: "Tryb wyświetlania",
                    description: "Sposób oznaczania ukrytych kanałów.",
                    lock: "Zwykły styl z ikoną kłódki",
                    hidden: "Wyciszony styl z ikoną przekreślonego oka po prawej",
                    lockIconRight: "Ikona kłódki po prawej stronie"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Domyślny stan listy uprawnionych",
                    description: "Czy lista użytkowników i ról z dostępem do ukrytego kanału powinna być domyślnie rozwinięta"
                }
            },
            channelType: {
                text: "tekstowy",
                announcement: "ogłoszeniowy",
                forum: "forum",
                voice: "głosowy",
                stage: "scena"
            },
            sortOrder: {
                latestActivity: "Ostatnia aktywność",
                creationDate: "Data utworzenia"
            },
            forumLayout: {
                default: "Nieustawiony",
                list: "Widok listy",
                grid: "Widok galerii"
            },
            videoQuality: {
                auto: "Automatyczna",
                full: "720p"
            },
            modal: {
                hidden: "ukryty",
                locked: "zablokowany",
                threads: "wątki",
                posts: "posty",
                messages: "wiadomości",
                post: "post",
                message: "wiadomość",
                unknown: "nieznany",
                permissionDetails: "Szczegóły uprawnień",
                thisIsA: "To jest {{status}} kanał {{channelType}}",
                canNotSee: "Nie możesz zobaczyć {{type}} tego kanału.",
                guidelines: "Możesz jednak zobaczyć jego zasady (guidelines):",
                lastCreated: "Ostatnio utworzony {{type}}:",
                lastPin: "Ostatnio przypięta wiadomość:",
                threadSlowmode: "Domyślny tryb powolny wątków:",
                slowmode: "Tryb powolny:",
                bitrate: "Bitrate:",
                region: "Region:",
                automatic: "Automatyczny",
                videoQuality: "Jakość wideo:",
                inactiveArchiveDuration: "Czas bezczynności przed archiwizacją {{type}}",
                defaultLayout: "Domyślny układ:",
                defaultSort: "Domyślne sortowanie:",
                defaultReaction: "Domyślna reakcja:",
                requireTag: "Posty na tym forum wymagają ustawienia tagu.",
                availableTags: "Dostępne tagi:",
                allowedUsersAndRoles: "Użytkownicy i role z dostępem:",
                hideAllowedUsersAndRoles: "Ukryj listę uprawnionych",
                viewAllowedUsersAndRoles: "Pokaż listę uprawnionych"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "Wyświetla różne ukryte elementy oraz funkcje tylko dla moderatorów, niezależnie od Twoich uprawnień.",
            option: {
                showTimeouts: {
                    label: "Pokazuj timeouty na czacie",
                    description: "Pokazuj ikony wyciszenia (timeout) członków na czacie."
                },
                showInvitesPaused: {
                    label: "Pokazuj wstrzymanie zaproszeń",
                    description: "Pokazuj informację o wstrzymanych zaproszeniach na liście serwerów."
                },
                showModView: {
                    label: "Pokazuj Widok Moderatora",
                    description: "Pokazuj opcję 'Widok Moderatora' w menu kontekstowym członka na wszystkich serwerach."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Dodaje opcję w menu kontekstowym, aby wymusić pokazanie podglądu (embed) dla linków, które go nie mają",
            context: {
                embed: {
                    show: "Pokaż podgląd",
                    hide: "Usuń podgląd"
                }
            },
            error: {
                failed: "Nie udało się pobrać podglądu",
                noEmbed: "Nie znaleziono podglądu"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Wyświetla dowolną kombinację pseudonimów, nazw od znajomych, nazw serwerowych oraz nazw użytkownika na czacie.",
            option: {
                messages: {
                    label: "Wiadomości",
                    description: "Wyświetlaj własny format nazw w wiadomościach."
                },
                replies: {
                    label: "Odpowiedzi",
                    description: "Wyświetlaj własny format nazw w odpowiedziach."
                },
                mentions: {
                    label: "Wzmianki",
                    description: "Wyświetlaj własny format nazw we wzmiankach."
                },
                typingIndicator: {
                    label: "Wskaźnik pisania",
                    description: "Wyświetlaj pierwszą dostępną nazwę z Twojego formatu we wskaźniku pisania."
                },
                memberList: {
                    label: "Lista członków",
                    description: "Wyświetlaj pierwszą dostępną nazwę w liście członków."
                },
                profilePopout: {
                    label: "Profil (Popout)",
                    description: "Wyświetlaj pierwszą dostępną nazwę w małych oknach profili."
                },
                voiceChannels: {
                    label: "Kanały głosowe",
                    description: "Wyświetlaj pierwszą dostępną nazwę na kanałach głosowych."
                },
                reactions: {
                    label: "Reakcje",
                    description: "Wyświetlaj pierwszą dostępną nazwę w podpowiedziach reakcji i pełną nazwę w oknie reakcji."
                },
                discriminators: {
                    label: "Diskryminatory (#0000)",
                    description: "Dodawaj diskryminatory do nazw botów. Są one nadal używane dla botów i pozwalają je odróżnić, gdy mają te same nazwy."
                },
                hideDefaultAtSign: {
                    label: "Ukryj domyślny znak @",
                    description: "Ukryj symbol '@' przed nazwą we wzmiankach i odpowiedziach."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Skracaj wszystkie nazwy w trybie streamowania",
                    description: "Skracaj wszystkie nazwy, nie tylko nazwy użytkownika, gdy tryb streamowania jest włączony."
                },
                removeDuplicates: {
                    label: "Usuń duplikaty",
                    description: "Jeśli nazwy w Twoim formacie są identyczne, zostaw tylko jedną unikalną."
                },
                ignoreFonts: {
                    label: "Ignoruj czcionki",
                    description: "Dla dodatkowych nazw używaj czcionki gg sans, ignorując własną czcionkę użytkownika."
                },
                ignoreGradients: {
                    label: "Ignoruj gradienty",
                    description: "Dla nazw nie-głównych używaj jednolitego koloru roli zamiast gradientu lub efektów Nitro."
                },
                animateGradients: {
                    label: "Animuj gradienty",
                    description: "Animuj gradienty w dodatkowych nazwach (jeśli nie wyłączono tego opcją powyżej)."
                },
                nameSeparator: {
                    label: "Separator nazw",
                    description: "Znak używany do oddzielania nazw. Domyślnie jest to spacja."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Nazwa od znajomego tylko w PW",
                    description: "Wyświetlaj pseudonimy nadane znajomym tylko w wiadomościach prywatnych."
                },
                customNameOnlyInDirectMessages: {
                    label: "Własna nazwa tylko w PW",
                    description: "Wyświetlaj własne pseudonimy SMYN tylko w wiadomościach prywatnych."
                },
                includedNames: {
                    label: "Uwzględnione nazwy",
                    description: "Kolejność wyświetlania nazw. Placeholdery: {user} (użytkownik), {display} (wyświetlana), {nick} (serwerowa), {friend} (od znajomego). Możesz tworzyć fallbacki: {friend, nick}."
                },
                customNameColor: {
                    label: "Kolor własnej nazwy",
                    description: "Kolor dla pseudonimu SMYN. Użyj 'Role' dla koloru roli lub 'Role+15' dla rozjaśnienia."
                },
                friendNameColor: {
                    label: "Kolor nazwy znajomego",
                    description: "Kolor dla pseudonimu znajomego."
                },
                nicknameColor: {
                    label: "Kolor pseudonimu",
                    description: "Kolor dla pseudonimu serwerowego."
                },
                displayNameColor: {
                    label: "Kolor nazwy wyświetlanej",
                    description: "Kolor dla nazwy wyświetlanej (Display Name)."
                },
                usernameColor: {
                    label: "Kolor nazwy użytkownika",
                    description: "Kolor dla nazwy użytkownika (handle)."
                },
                triggerNameRerender: {
                    label: "Odśwież nazwy",
                    description: "Przełącz, aby wymusić ponowne wygenerowanie nazw."
                }
            },
            modal: {
                change: {
                    title: "Zmień pseudonim SMYN"
                },
                add: {
                    title: "Dodaj pseudonim SMYN"
                },
                setCustom: "Ustaw własny pseudonim SMYN dla tego użytkownika. Użyj placeholderu {custom} w ustawieniach głównych wtyczki.",
                nickname: "Pseudonim SMYN",
                reset: "Resetuj pseudonim SMYN",
                cancel: "Anuluj"
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Pokazuje, jak długo jeszcze potrwa wyciszenie (timeout) użytkownika, w podpowiedzi ikony lub obok niej",
            option: {
                displayStyle: {
                    label: "Styl wyświetlania",
                    description: "Gdzie wyświetlać czas trwania wyciszenia",
                    tooltip: "W podpowiedzi (Tooltip)",
                    inline: "Obok ikony wyciszenia"
                }
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Pokazuje kanały ukryte za zasobami serwera na liście kanałów"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Pokazuje tytuł utworu zamiast wykonawcy w aktywności Spotify"
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Otwórz inny kanał lub PW jako pasek boczny lub w osobnym oknie",
            toolbox: {
                label: "Otwórz poprzedni czat"
            },
            context: {
                label: "Otwórz w pasku bocznym"
            },
            modal: {
                switch: "Zmień kanały",
                popout: "Otwórz w nowym oknie",
                close: "Zamknij pasek boczny"
            },
            option: {
                persistSidebar: {
                    label: "Zapamiętaj pasek boczny",
                    description: "Zachowaj otwarty pasek boczny po restarcie Discorda"
                },
                patchCommunity: {
                    label: "Poprawki społeczności",
                    description: "Naprawia funkcje takie jak Przeglądarka Kanałów na serwerach społecznościowych."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Automatyczny podpis/tekst na końcu wiadomości",
            option: {
                name: {
                    label: "Treść podpisu",
                    description: "Podpis, który będzie dodawany na końcu Twoich wiadomości"
                },
                textHeader: {
                    label: "Nagłówek",
                    description: "Czym poprzedzić tekst podpisu"
                },
                showIcon: {
                    label: "Pokaż ikonę",
                    description: "Pokaż ikonę przełączania podpisu na pasku czatu"
                },
                contextMenu: {
                    label: "Menu kontekstowe",
                    description: "Dodaj opcję włączania podpisu do menu pod prawym przyciskiem myszy w polu tekstowym"
                },
                isEnabled: {
                    label: "Włączone",
                    description: "Przełącz działanie podpisu"
                }
            },
            tooltip: {
                enable: "Włącz podpis",
                disable: "Wyłącz podpis"
            },
            context: {
                enable: "Włącz podpis"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "Przełącz swój podpis",
                    toogle: "Przełącz podpis (domyślnie zmienia stan)",
                    enabled: "Podpis włączony",
                    disabled: "Podpis wyłączony"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Dodaje przycisk do paska czatu, aby wysyłać wiadomości po cichu (bez powiadomienia u odbiorcy).",
            option: {
                persistState: {
                    label: "Zapamiętaj stan",
                    description: "Jak zachować stan przełącznika cichej wiadomości",
                    none: "Nie zapamiętuj (resetuj przy zmianie kanału)",
                    channels: "Zapamiętaj między kanałami",
                    restarts: "Zapamiętaj między kanałami i restartami"
                },
                autoDisable: {
                    label: "Automatyczne wyłączanie",
                    description: "Automatycznie wyłącz tryb cichy po wysłaniu jednej wiadomości"
                }
            },
            tooltip: {
                enable: "Włącz cichą wiadomość",
                disable: "Wyłącz cichą wiadomość"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Ukrywa Twój wskaźnik pisania przed innymi.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Ukryj swój wskaźnik pisania na czacie.",
                    toggle: {
                        name: "przełącz",
                        description: "Przełącz funkcję globalnie, dla kanału lub dla serwera.",
                        global: "Globalnie",
                        channel: "Kanał",
                        guild: "Serwer"
                    },
                    chatBarIndicator: {
                        name: "wskaźnikPaskaCzatu",
                        description: "Ukryj wskaźniki pisania innych użytkowników nad paskiem czatu."
                    },
                    membersListIndicator: {
                        name: "wskaźnikListyCzłonków",
                        description: "Ukryj wskaźniki pisania innych użytkowników na liście członków."
                    },
                    chatIcon: {
                        name: "ikonaCzatu",
                        description: "Pokaż ikonę na pasku czatu do szybkiego przełączania."
                    },
                    chatContextMenu: {
                        name: "menuKontekstoweCzatu",
                        description: "Pokaż opcje w menu kontekstowym czatu."
                    },
                    defaultHidden: {
                        name: "domyślnieUkryte",
                        description: "Czy domyślnie ukrywać pisanie wszędzie czy nie."
                    }
                }
            },
            content: {
                updated: "Ustawienia SilentTyping zostały zaktualizowane.",
                noChanges: "Nie dokonano żadnych zmian w ustawieniach SilentTyping."
            },
            tooltip: {
                hidden: "Pisanie ukryte ({{location}})",
                visible: "Pisanie widoczne ({{location}})",
                global: "Pisanie widoczne (Globalnie)"
            },
            option: {
                enabledGlobally: {
                    label: "Włączone globalnie",
                    description: "Przełącz widoczność Twojego pisania dla wszystkich."
                },
                hideChatBoxTypingIndicators: {
                    label: "Ukryj wskaźniki nad czatem",
                    description: "Ukrywaj informacje, że inni piszą (nad paskiem wpisywania)."
                },
                hideMembersListTypingIndicators: {
                    label: "Ukryj wskaźniki na liście członków",
                    description: "Ukrywaj animację pisania przy osobach na liście po prawej stronie."
                },
                chatIcon: {
                    label: "Ikona czatu",
                    description: "Pokaż ikonę na pasku czatu do zarządzania wtyczką w locie."
                },
                chatIconLeftClickAction: {
                    label: "Akcja lewego kliknięcia",
                    description: "Co zrobić po kliknięciu ikony.",
                    global: "Przełącz pisanie globalnie",
                    channel: "Przełącz dla kanału",
                    guild: "Przełącz dla serwera",
                    settings: "Otwórz ustawienia wtyczki"
                },
                chatIconMiddleClickAction: {
                    label: "Akcja środkowego kliknięcia",
                    description: "Co zrobić po kliknięciu środkowym przyciskiem myszy.",
                    global: "Przełącz pisanie globalnie",
                    channel: "Przełącz dla kanału",
                    guild: "Przełącz dla serwera",
                    settings: "Otwórz ustawienia wtyczki"
                },
                chatIconRightClickAction: {
                    label: "Akcja prawego kliknięcia",
                    description: "Co zrobić po kliknięciu prawym przyciskiem myszy.",
                    global: "Przełącz pisanie globalnie",
                    channel: "Przełącz dla kanału",
                    guild: "Przełącz dla serwera",
                    settings: "Otwórz ustawienia wtyczki"
                },
                chatContextMenu: {
                    label: "Menu kontekstowe czatu",
                    description: "Pokaż rozwijane menu w menu kontekstowym pola tekstowego."
                },
                defaultHidden: {
                    label: "Domyślnie ukryte",
                    description: "Jeśli włączone, Twoje pisanie będzie ukryte wszędzie, poza lokalizacjami z listy poniżej."
                },
                enabledLocations: {
                    label: "Włączone lokalizacje",
                    description: "Lista ID (PW, kanałów, serwerów), gdzie pisanie ma być widoczne."
                },
                disabledLocations: {
                    label: "Wyłączone lokalizacje",
                    description: "Lista ID, gdzie pisanie ma być ukryte."
                }
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Niech spadnie śnieg na Discordzie!",
            about: {
                title: "Informacja",
                paragraph: "Ta wtyczka dodaje efekt padającego śniegu na interfejs Discorda. Możesz zmienić typ śniegu w ustawieniach poniżej.",
                note: "UWAGA: Choć na większości komputerów wtyczka nie wpłynie na wydajność bardziej niż inne rozszerzenia, na słabszych systemach może powodować opóźnienia."
            },
            option: {
                typeOfSnow: {
                    label: "Typ śniegu",
                    description: "Zmień sposób wyświetlania śniegu (wpływa na wydajność).",
                    solid: "Jednolity (Najwyższa wydajność)",
                    text: "Tekstowy (Średnia wydajność)",
                    emoji: "Obrazkowy (Najniższa wydajność)"
                },
                maxSize: {
                    label: "Maksymalny rozmiar",
                    description: "Maksymalna wielkość płatka śniegu"
                },
                speed: {
                    label: "Prędkość",
                    description: "Prędkość opadania (wyższa = szybszy opad)"
                },
                flakesPerSecond: {
                    label: "Płatki na sekundę",
                    description: "Gęstość opadów (wyższa = więcej śniegu)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
            description: "Sortuje zaproszenia do znajomych według daty otrzymania",
            tooltip: "Dodano &mdash; {{date}}",
            option: {
                showDates: {
                    label: "Pokazuj daty",
                    description: "Wyświetlaj daty przy zaproszeniach do znajomych"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Rejestruje wszystkie dźwięki z tablicy dźwiękowej (Soundboard) odtwarzane na kanałach i pozwala je pobierać",
            tooltip: "Otwórz log Soundboardu",
            option: {
                savedIds: {
                    label: "Zapisane ID dźwięków",
                    description: "Ile dźwięków przechowywać w logu (0 = nieskończoność)",
                    notNumber: "Wartość nie jest liczbą.",
                    cantDecimal: "Wartość nie może być ułamkiem.",
                    cantNegative: "Wartość nie może być ujemna.",
                    heading: "Liczba przechowywanych ID dźwięków",
                    warning: "Uwaga! Zmniejszenie tej liczby zresetuje obecny log!",
                    placeholder: "Wpisz liczbę"
                },
                fileType: {
                    label: "Typ pliku",
                    description: "Format, w jakim chcesz zapisywać pliki"
                },
                openLogs: {
                    label: "Otwórz logi",
                    description: "Pokaż zarejestrowane dźwięki",
                    button: "Otwórz logi"
                },
                soundVolume: {
                    label: "Głośność dźwięku",
                    description: "Głośność dźwięku przycisku (0 aby wyłączyć)"
                },
                iconLocation: {
                    label: "Lokalizacja ikony",
                    description: "Gdzie wyświetlać ikonę logu (wymaga restartu)",
                    toolbar: "Pasek narzędzi",
                    chatInput: "Pole czatu"
                }
            },
            modal: {
                title: "Logi Soundboardu",
                loading: "Ładowanie dźwięków...",
                noLogs: "Nie zarejestrowano jeszcze żadnych dźwięków. Dołącz do kanału głosowego!",
                clearLogs: "Wyczyść logi",
                played: "Odtworzono {{time}} raz(y)",
                last: "Ostatnio odtworzono:",
                also: "Również odtwarzane przez:",
                download: "Pobierz",
                copyId: "Kopiuj ID",
                copied: "Skopiowano ID do schowka!",
                playSound: "Odtwórz dźwięk",
                moreUsers: "Inni użytkownicy użyli tego dźwięku...",
                volume: "Głośność Soundboardu"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Dzieli długie wiadomości na kilka mniejszych, aby zmieściły się w limicie znaków Discorda.",
            option: {
                maxLength: {
                    label: "Maksymalna długość wiadomości",
                    description: "Limit znaków przed podziałem. Ustaw 0 dla automatycznego wykrywania (zależnie od Nitro)."
                },
                disableFileConversion: {
                    label: "Wyłącz konwersję na plik",
                    description: "Jeśli włączone, wyłącza zamianę bardzo długich tekstów na pliki .txt."
                },
                sendDelay: {
                    label: "Opóźnienie wysyłania",
                    description: "Czas oczekiwania między wysłaniem kolejnych części (w sekundach)."
                },
                hardSplit: {
                    label: "Twardy podział",
                    description: "Jeśli włączone, dzieli dokładnie na ostatnim znaku zamiast na ostatniej spacji/nowej linii."
                },
                splitInSlowmode: {
                    label: "Dziel w trybie powolnym",
                    description: "Czy dzielić wiadomości na kanałach z aktywnym slowmode?"
                },
                slowmodeMax: {
                    label: "Maksymalny slowmode",
                    description: "Maksymalny czas trybu powolnego, przy którym wtyczka jeszcze będzie dzielić wiadomości."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Dodaje przycisk do szybkiego włączania/wyłączania widoczności aktywności Spotify.",
            tooltip: {
                enable: "Włącz aktywność Spotify",
                disable: "Wyłącz aktywność Spotify"
            },
            option: {
                location: {
                    label: "Lokalizacja",
                    description: "Gdzie wyświetlać przycisk",
                    panel: "Obok Wycisz/Ogłusz",
                    toolbox: "Plexcord Toolbox"
                },
                activityStatus: {
                    label: "Status aktywności",
                    description: "Aktualny stan widoczności Twojego Spotify"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Darmowe wspólne słuchanie (listen along), brak auto-pauzy na kanałach głosowych oraz podtrzymywanie aktywności podczas bezczynności.",
            option: {
                noSpotifyAutoPause: {
                    label: "Brak auto-pauzy Spotify",
                    description: "Wyłącz automatyczne zatrzymywanie muzyki przez Discorda."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Podtrzymuj aktywność Spotify przy bezczynności",
                    description: "Nie pozwalaj na wygaszenie statusu Spotify, gdy nic nie robisz na komputerze."
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Udostępniaj aktualnie słuchany utwór, album lub wykonawcę za pomocą komend (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Udostępnij słuchany {{type}} na czacie",
                    track: "Nie słuchasz obecnie niczego na Spotify.",
                    find: "Nie udało się znaleźć tego elementu w bazie Spotify."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Dodaje statystyki czasu uruchamiania do menu Ustawień",
            modal: {
                title: "Czasy uruchamiania",
                ended: "Ślad zakończony o:",
                start: "Start",
                interval: "Interwał",
                delta: "Delta",
                event: "Zdarzenie",
                serverTrace: "Ślad serwera",
                loading: "Ładowanie..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Dodaje powiadomienia o zmianie statusu wybranych osób",
            loading: "Ładowanie...",
            option: {
                notificationsSound: {
                    label: "Dźwięk powiadomienia",
                    description: "Czy odtwarzać dźwięk przy zmianie statusu?"
                },
                usersList: {
                    label: "Lista użytkowników",
                    description: "Osoby, których status śledzisz",
                    empty: "Brak śledzonych osób. Kliknij prawym przyciskiem na użytkownika i wybierz 'Status Notifications', aby go dodać."
                }
            },
            context: {
                label: "Powiadomienia o statusie",
                notifications: "Powiadomienia",
                type: {
                    all: "Wszystkie",
                    online: "Dostępny",
                    offline: "Niewidoczny",
                    none: "Brak"
                }
            },
            notification: {
                unknownUser: "Użytkownik",
                title: "Powiadomienia o statusie"
            },
            status: {
                online: "Dostępny",
                idle: "Zaraz wracam",
                dnd: "Nie przeszkadzać",
                offline: "Niewidoczny",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Pozwala zapamiętywać własne statusy i szybko je przywracać",
            button: {
                remember: "Zapamiętaj status"
            },
            context: {
                edit: "Edytuj własne zestawy",
                set: "Ustaw własny status"
            },
            notification: {
                successfully: "Pomyślnie zapisano status"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Synchronizuj swój status z Discorda na Steam! (Dostępny, Zaraz wracam, Niewidoczny.)",
            option: {
                onlineStatus: {
                    label: "Status Online",
                    description: "Status na Steam, gdy na Discordzie jesteś Dostępny"
                },
                idleStatus: {
                    label: "Status Idle",
                    description: "Status na Steam, gdy na Discordzie jesteś Zaraz wracam"
                },
                dndStatus: {
                    label: "Status Nie przeszkadzać",
                    description: "Status na Steam, gdy na Discordzie jesteś Nie przeszkadzać"
                },
                invisibleStatus: {
                    label: "Status Niewidoczny",
                    description: "Status na Steam, gdy na Discordzie jesteś Niewidoczny"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Niewidoczny przy ukrytej aktywności",
                    description: "Ustaw status Steam na Niewidoczny, gdy Twoja aktywność w grze na Discordzie jest ukryta"
                }
            },
            status: {
                online: "Dostępny",
                away: "Zaraz wracam",
                invisible: "Niewidoczny",
                offline: "Offline (Rozłącz czat Steam)",
                disabled: "Wyłączone"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Pozwala blokować wyświetlanie naklejek (Stickers).",
            option: {
                showGif: {
                    label: "Pokaż GIF",
                    description: "Czy zamiast naklejki pokazywać zabawnego GIF-a z kotem."
                },
                showMessage: {
                    label: "Pokaż komunikat",
                    description: "Czy pokazywać informację, które ID naklejki zostało zablokowane"
                },
                showButton: {
                    label: "Pokaż przycisk",
                    description: "Czy pokazywać przycisk do odblokowania danej naklejki"
                },
                blockedStickers: {
                    label: "Zablokowane naklejki",
                    description: "Lista ID zablokowanych naklejek (nie edytuj, jeśli nie wiesz co robisz)"
                }
            },
            modal: {
                blocked: "Zablokowana naklejka. ID: {{id}} NAZWA: {{name}}",
                unblock: "Odblokuj {{name}}"
            },
            context: {
                blockSticker: "Blokuj naklejkę",
                unblockSticker: "Odblokuj naklejkę"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Sprawia, że wybranie naklejki wstawia ją do pola tekstowego zamiast natychmiastowego wysłania"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Automatycznie włącza tryb streamowania, gdy zaczniesz udostępniać ekran na Discordzie"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Wyłącz wybrane kodeki wideo podczas streamowania",
            option: {
                disableAv1Codec: {
                    label: "Wyłącz kodek AV1",
                    description: "Zablokuj Discordowi możliwość używania AV1 do streamowania."
                },
                disableH265Codec: {
                    label: "Wyłącz kodek H265",
                    description: "Zablokuj Discordowi możliwość używania H265 do streamowania."
                },
                disableH264Codec: {
                    label: "Wyłącz kodek H264",
                    description: "Zablokuj Discordowi możliwość używania H264 do streamowania."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Dostosuj limit odtwarzanych jednocześnie Superreakcji oraz ustaw je jako domyślne",
            option: {
                superReactByDefault: {
                    label: "Superreakcje jako domyślne",
                    description: "Okno wyboru reakcji będzie domyślnie oferować Superreakcje"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Nielimitowane odtwarzanie",
                    description: "Usuń limit jednocześnie odtwarzanych animacji Superreakcji"
                },
                superReactionPlayingLimit: {
                    label: "Limit odtwarzanych Superreakcji",
                    description: "Maksymalna liczba animacji odtwarzanych naraz. Ustaw 0, aby je całkowicie wyłączyć."
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Zastępuj tekst w swoich wiadomościach. Gotowe reguły znajdziesz na kanale #textreplace-rules na serwerze Plexcord",
            option: {
                replace: {
                    label: "Zastąp",
                    string: "Proste zamiany",
                    stringDescription: "Proste zasady znajdź i zamień. Na przykład znajdź 'brb' i zamień na 'be right back'",
                    regex: "Zamiany Regex",
                    regexDescription: "Bardziej zaawansowane zamiany przy użyciu wyrażeń regularnych. Ta sekcja jest dla zaawansowanych użytkowników. Jeśli tego nie rozumiesz, po prostu to zignoruj",
                    myMessages: "Zastosuj do moich wiadomości (widoczne dla wszystkich)",
                    othersMessages: "Zastosuj do wiadomości innych (widoczne tylko dla Ciebie)",
                    allMessages: "Zastosuj do wszystkich wiadomości"
                },
                stringRules: {
                    label: "Reguły tekstowe",
                    description: "Reguły zastępowania tekstu przy użyciu dopasowania ciągów znaków."
                },
                regexRules: {
                    label: "Reguły Regex",
                    description: "Reguły zastępowania tekstu przy użyciu wyrażeń regularnych."
                }
            },
            modal: {
                title: "Testuj reguły",
                find: "Znajdź",
                findRegex: "Wzorzec regex",
                findText: "Tekst do zamiany",
                replace: "Zamień",
                replaceDescription: "Tekst, który zastąpi znaleziony tekst",
                includes: "Tylko jeśli zawiera",
                includesDescription: "Ta reguła zostanie zastosowana tylko jeśli wiadomość zawiera ten tekst. To opcjonalne",
                type: "Wpisz wiadomość",
                applied: "Wiadomość z zastosowanymi regułami",
                delete: "Usuń regułę",
                add: "Dodaj regułę",
                empty: "Pusta reguła",
                rule: "Reguła",
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Dodaje atrybuty danych do różnych elementów w celu ułatwienia tworzenia motywów"
        },
        timezones: {
            name: "Timezones",
            description: "Wyświetla czas lokalny użytkowników w profilach i nagłówkach wiadomości",
            button: {
                wantToSave: "Chcesz zapisać swoją strefę czasową w bazie danych? Kliknij tutaj, aby ją ustawić.",
                yourLocalTimezone: "(Twoja strefa czasowa)"
            },
            context: {
                set: "Ustaw lokalną strefę czasową"
            },
            toast: {
                refresh: {
                    successfully: "Pomyślnie odświeżono strefy czasowe!",
                    failed: "Błąd podczas odświeżania stref czasowych!",
                    failedTo: "Nie udało się odświeżyć stref czasowych."
                },
                update: {
                    successfully: "Pomyślnie zaktualizowano strefę czasową!",
                    failed: "Nie udało się ustawić strefy czasowej."
                },
                delete: {
                    successfully: "Pomyślnie usunięto strefę czasową!",
                    failed: "Nie udało się usunąć strefy czasowej."
                },
                auth: {
                    failed: "Autoryzacja nieudana.",
                    success: "Autoryzacja zakończona pomyślnie!"
                }
            },
            toolbox: {
                set: "Ustaw strefę w bazie danych",
                refresh: "Odśwież strefy z bazy danych"
            },
            option: {
                showOwnTimezone: {
                    label: "Pokaż własną strefę",
                    description: "Pokazuj Twoją strefę czasową w profilach i nagłówkach Twoich wiadomości"
                },
                twentyFourHourTime: {
                    label: "Format 24-godzinny",
                    description: "Wyświetlaj czas w formacie 24-godzinnym"
                },
                showTimezoneInfo: {
                    label: "Pokaż info o strefie",
                    description: "Pokazuj skrót strefy czasowej obok godziny"
                },
                showMessageHeaderTime: {
                    label: "Czas w nagłówkach wiadomości",
                    description: "Pokazuj czas lokalny nad wiadomościami"
                },
                showProfileTime: {
                    label: "Czas w profilu",
                    description: "Pokazuj czas lokalny w profilach użytkowników"
                },
                useDatabase: {
                    label: "Używaj bazy danych stref",
                    description: "Włącz pobieranie stref czasowych użytkowników z bazy danych"
                },
                preferDatabaseOverLocal: {
                    label: "Priorytet bazy danych",
                    description: "Preferuj dane z bazy nad danymi lokalnymi"
                },
                databaseUrl: {
                    label: "URL bazy danych",
                    description: "Adres URL serwera bazy danych stref czasowych"
                },
                setDatabaseTimezone: {
                    label: "Ustaw strefę w bazie",
                    description: "Zapisz swoją strefę czasową w bazie danych",
                    setTimezone: "Ustaw strefę czasową w bazie"
                },
                resetDatabaseTimezone: {
                    label: "Zresetuj strefę w bazie",
                    description: "Usuń swoją strefę czasową z bazy danych",
                    failed: "Nie udało się zresetować strefy czasowej w bazie"
                },
                askedTimezone: {
                    label: "Zapytano o strefę",
                    description: "Czy użytkownik został już zapytany o ustawienie strefy czasowej"
                }
            },
            modal: {
                title: "Strefy czasowe",
                select: "Wybierz strefę",
                selectPlaceholder: "Wybierz strefę czasową",
                delete: "Usuń strefę",
                save: "Zapisz"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Pokazuje powiadomienia typu 'toast' przy otrzymaniu wiadomości prywatnej.",
            notification: {
                call: "Rozpoczęto rozmowę z Tobą!",
                recipient: {
                    add: "{{target}} został(a) dodany(a) do grupy przez {{actor}}.",
                    remove: "{{target}} został(a) usunięty(a) z grupy przez {{actor}}.",
                    left: "Opuszczono grupę."
                },
                channel: {
                    change: {
                        name: "Zmieniono nazwę kanału na {{name}}.",
                        icon: "Zmieniono ikonę kanału."
                    },
                    pinned: "Przypięto wiadomość."
                },
                sent: {
                    embed: "Wysłano wstawkę (embed).",
                    sticker: "Wysłano naklejkę.",
                    attachment: "Załącznik:"
                },
                redacted: "Treść wiadomości została ukryta.",
                friend: {
                    accept: "{{user}} jest teraz w Twoich znajomych",
                    acceptBody: "Możesz teraz pisać do nich bezpośrednio.",
                    request: "{{user}} wysłał(a) Ci zaproszenie do znajomych.",
                    requestBody: "Możesz je zaakceptować w zakładce Znajomi."
                },
                example: {
                    title: "Przykładowe powiadomienie",
                    body: "To jest treść przykładowego powiadomienia."
                }
            },
            modal: {
                dismiss: "Zamknij powiadomienie",
                attachments: "Wysłano załączników: {{attachments}}."
            },
            option: {
                position: {
                    label: "Pozycja",
                    description: "Pozycja powiadomienia na ekranie",
                    topRight: "Góra prawo",
                    topLeft: "Góra lewo",
                    bottomRight: "Dół prawo",
                    bottomLeft: "Dół lewo"
                },
                timeout: {
                    label: "Czas wyświetlania",
                    description: "Czas w sekundach, przez który powiadomienie będzie widoczne"
                },
                opacity: {
                    label: "Przezroczystość",
                    description: "Stopień przezroczystości powiadomienia"
                },
                determineServerNotifications: {
                    label: "Uwzględniaj ustawienia serwerów",
                    description: "Decyduj o wyświetlaniu powiadomień na podstawie ustawień powiadomień serwera"
                },
                directMessages: {
                    label: "Wiadomości prywatne",
                    description: "Pokazuj powiadomienia dla wiadomości prywatnych (DM)"
                },
                groupMessages: {
                    label: "Wiadomości grupowe",
                    description: "Pokazuj powiadomienia dla wiadomości grupowych"
                },
                friendServerNotifications: {
                    label: "Powiadomienia od znajomych na serwerach",
                    description: "Pokazuj powiadomienia, gdy znajomi piszą na wspólnych serwerach"
                },
                friendActivity: {
                    label: "Aktywność znajomych",
                    description: "Pokazuj powiadomienia o dodaniu do znajomych lub zaproszeniach"
                },
                notifyFor: {
                    label: "Powiadamiaj dla",
                    description: "Lista ID kanałów, z których chcesz otrzymywać powiadomienia (oddzielone przecinkami)"
                },
                ignoreUsers: {
                    label: "Ignoruj użytkowników",
                    description: "Lista ID użytkowników, których powiadomienia chcesz ignorować (oddzielone przecinkami)"
                },
                exampleButton: {
                    label: "Przycisk testowy",
                    description: "Pokaż testowe powiadomienie.",
                    show: "Pokaż przykładowe powiadomienie"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Dodaje konfigurowalny skrót klawiszowy do przełączania kamery.",
            option: {
                keyBind: {
                    label: "Skrót klawiszowy",
                    description: "Klawisz, który przełącza kamerę po naciśnięciu."
                },
                reqCtrl: {
                    label: "Wymagaj Ctrl",
                    description: "Wymaga przytrzymania klawisza Control."
                },
                reqShift: {
                    label: "Wymagaj Shift",
                    description: "Wymaga przytrzymania klawisza Shift."
                },
                reqAlt: {
                    label: "Wymagaj Alt",
                    description: "Wymaga przytrzymania klawisza Alt."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Tłumacz wiadomości za pomocą Google Translate lub DeepL",
            tooltip: {
                label: "Tłumacz"
            },
            context: {
                translate: "Tłumacz",
                open: "Otwórz okno tłumaczenia",
                auto: "Auto-tłumaczenie włączone"
            },
            option: {
                receivedInput: {
                    label: "Język źródłowy (Otrzymane)",
                    description: "Język, z którego otrzymane wiadomości powinny być tłumaczone"
                },
                receivedOutput: {
                    label: "Język docelowy (Otrzymane)",
                    description: "Język, na który otrzymane wiadomości powinny być tłumaczone"
                },
                sentInput: {
                    label: "Język źródłowy (Wysłane)",
                    description: "Język, z którego Twoje wiadomości powinny być tłumaczone"
                },
                sentOutput: {
                    label: "Język docelowy (Wysłane)",
                    description: "Język, na który Twoje wiadomości powinny być tłumaczone"
                },
                service: {
                    label: "Usługa tłumaczeniowa",
                    description: "DeepL wymaga płatnego klucza API z DeepL Pro",
                    descriptionWeb: "Usługa tłumaczenia (Nieobsługiwana w wersji przeglądarkowej!)",
                    google: "Google Translate",
                    deepl: "DeepL Free",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "Klucz API DeepL",
                    description: "Klucz API DeepL",
                    placeholder: "Pobierz klucz z https://deepl.com/your-account"
                },
                autoTranslate: {
                    label: "Auto-tłumaczenie",
                    description: "Automatycznie tłumacz swoje wiadomości przed wysłaniem. Możesz też kliknąć przycisk tłumaczenia z Shiftem/prawym przyciskiem, by to przełączyć"
                },
                showAutoTranslateTooltip: {
                    label: "Pokaż powiadomienie auto-tłumaczenia",
                    description: "Pokazuj dymek nad paskiem czatu, gdy wiadomość zostanie automatycznie przetłumaczona"
                }
            },
            modal: {
                title: "Tłumacz",
                select: "Wybierz język",
                auto: "Auto-tłumaczenie",
                dismiss: "Zamknij",
                translated: "przetłumaczono z: {{from}}",
                failed: {
                    to: "Nie udało się przetłumaczyć: {{text}}",
                    connect: "Błąd połączenia z API DeepL:"
                },
                wrong: "Coś poszło nie tak. Jeśli problem będzie się powtarzał, sprawdź konsolę lub poproś o pomoc na serwerze wsparcia.",
                deepl: {
                    api: "Przekroczono limit API DeepL. Powrót do Google Translate.",
                    apiKey: "Klucz API DeepL nie jest ustawiony. Powrót do Google.",
                    auth: "Nieprawidłowy klucz lub wersja API DeepL"
                },
                autoTranslateEnabled: {
                    title: "Plexcord: Auto-tłumaczenie włączone",
                    body: "Właśnie włączyłeś Auto-tłumaczenie! Każda wiadomość zostanie automatycznie przetłumaczona przed wysłaniem.",
                    confirm: "Wyłącz Auto-tłumaczenie",
                    cancel: "Rozumiem",
                    secondaryConfirm: "Nie pokazuj ponownie"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Dodaje wskaźnik, jeśli ktoś pisze na danym kanale.",
            option: {
                includeCurrentChannel: {
                    label: "Uwzględniaj bieżący kanał",
                    description: "Czy pokazywać wskaźnik pisania dla aktualnie wybranego kanału"
                },
                includeMutedChannels: {
                    label: "Uwzględniaj wyciszone kanały",
                    description: "Czy pokazywać wskaźnik pisania dla wyciszonych kanałów."
                },
                includeIgnoredUsers: {
                    label: "Uwzględniaj ignorowanych użytkowników",
                    description: "Czy pokazywać wskaźnik pisania dla ignorowanych użytkowników."
                },
                includeBlockedUsers: {
                    label: "Uwzględniaj zablokowanych użytkowników",
                    description: "Czy pokazywać wskaźnik pisania dla zablokowanych użytkowników."
                },
                indicatorMode: {
                    label: "Tryb wskaźnika",
                    description: "Jak powinien być wyświetlany wskaźnik?",
                    both: "Awatary i animowane kropki",
                    dots: "Animowane kropki",
                    avatars: "Awatary"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Pokazuje awatary i kolory ról we wskaźniku pisania pod czatem",
            option: {
                showAvatars: {
                    label: "Pokaż wielu użytkowników",
                    description: "Pokazuj awatary we wskaźniku pisania"
                },
                showRoleColors: {
                    label: "Pokaż kolory ról",
                    description: "Używaj kolorów ról we wskaźniku pisania"
                },
                alternativeFormatting: {
                    label: "Alternatywne formatowanie",
                    description: "Pokazuj bardziej czytelny komunikat, gdy pisze kilka osób"
                },
                amITyping: {
                    label: "Czy ja piszę",
                    description: "Pokazuje Ci informację, czy inni widzą, że piszesz"
                }
            },
            others: {
                areTyping: "i {{count}} innych pisze..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Usuwa zbędne wcięcia z bloków kodu"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Konwertuje jednostki metryczne na imperialne i odwrotnie",
            tooltip: "Konwertuj jednostki",
            option: {
                myUnits: {
                    label: "Moje jednostki",
                    description: "Jednostki, których używasz i na które chcesz przeliczać. Domyślnie: Imperialne",
                    imperial: "Imperialne",
                    metric: "Metryczne"
                }
            },
            button: {
                dismiss: "Zamknij"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Zwiększa liczbę kont, które możesz dodać do klienta.",
            option: {
                maxAccounts: {
                    label: "Maks. liczba kont",
                    description: "Liczba kont, które można dodać (0 oznacza brak limitu)"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Pozwala na większe przybliżenie podczas przycinania awatara",
            option: {
                zoomMultiplier: {
                    label: "Mnożnik przybliżenia",
                    description: "Wartość przybliżenia"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Pozwala przywrócić ukryte podglądy (embeds) w wiadomościach",
            context: {
                unsuppress: "Przywróć podgląd",
                suppress: "Ukryj podgląd"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Wyświetla losowe, bezużyteczne informacje w Discordzie; skróty i odstępy są konfigurowalne.",
            recording: "Nagrywanie...",
            record: "Nagraj",
            option: {
                delay: {
                    label: "Interwał powiadomień",
                    description: "Co ile minut wyświetlać ciekawostkę"
                },
                historyHotkey: {
                    label: "Skrót panelu historii",
                    description: "Klawisz skrótu do wyświetlania historii pokazanych faktów"
                },
                randomFactHotkey: {
                    label: "Skrót losowego faktu",
                    description: "Klawisz skrótu do natychmiastowego pokazania faktu"
                },
                sameFact: {
                    label: "Unikaj powtórek",
                    description: "Nie pokazuj tego samego faktu, dopóki wszystkie nie zostaną wyświetlone"
                },
                lastNFacts: {
                    label: "Ile ostatnich pomijać",
                    description: "Liczba ostatnio pokazanych faktów, których nie należy powtarzać (0 = wszystkie)"
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Brak faktów. Użyj skrótu lub poczekaj.",
                    source: "Źródło"
                },
                showRandom: "Pokaż losowy",
                close: "Zamknij"
            },
            notification: {
                title: "Czy wiesz, że?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Pokazuje zaimki użytkowników w nagłówkach wiadomości",
            option: {
                pronounsFormat: {
                    label: "Format zaimków",
                    description: "Sposób wyświetlania zaimków na czacie",
                    lowercase: "Małe litery",
                    capitalized: "Wielka litera"
                },
                showSelf: {
                    label: "Pokazuj własne",
                    description: "Włącz lub wyłącz pokazywanie zaimków przy własnych wiadomościach"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Dodaje wskaźnik informujący, na jakim kanale głosowym znajduje się użytkownik",
            option: {
                showInUserProfileModal: {
                    label: "Pokaż w oknie profilu",
                    description: "Pokazuj kanał głosowy w pełnym profilu obok nazwy"
                },
                showInMemberList: {
                    label: "Pokaż na liście członków",
                    description: "Pokazuj kanał głosowy na liście osób i w rozmowach prywatnych"
                },
                showInMessages: {
                    label: "Pokaż przy wiadomościach",
                    description: "Pokazuj wskaźnik kanału głosowego przy wiadomościach na czacie"
                }
            },
            modal: {
                inVoiceChat: "Na kanale głosowym"
            },
            notification: {
                cannotJoin: "Nie możesz dołączyć do kanału głosowego tego użytkownika."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "Wyświetla banery użytkowników z bazy USRBG, pozwalając każdemu mieć baner bez Nitro",
            option: {
                nitroFirst: {
                    label: "Priorytet Nitro",
                    description: "Który baner wybrać, jeśli użytkownik ma oba (Nitro i USRBG)",
                    nitro: "Baner Nitro",
                    usrbg: "Baner USRBG"
                },
                voiceBackground: {
                    label: "Tło w rozmowie głosowej",
                    description: "Używaj banerów USRBG jako tła w rozmowach głosowych"
                }
            },
            button: "Zdobądź własny baner USRBG"
        },
        validReply: {
            name: "ValidReply",
            description: "Naprawia błąd 'Nie udało się załadować wiadomości' po najechaniu myszką na odpowiedź"
        },
        validUser: {
            name: "ValidUser",
            description: "Naprawia wzmianki dla nieznanych użytkowników (zamiast '@unknown-user' pokazuje nick po najechaniu myszką)",
            badges: {
                discordBugHunter: "Łowca błędów Discord",
                moderatorProgramsAlumni: "Absolwent programu moderatorów",
                discordStaff: "Pracownik Discorda",
                hypeSquadEvents: "Wydarzenia HypeSquad",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                partneredServerOwner: "Właściciel serwera partnerskiego",
                nitro: "Discord Nitro",
                earlySupporter: "Wczesny wspierający",
                earlyVerifiedBotDeveloper: "Wczesny zweryfikowany deweloper botów"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Dołączaj do kanałów głosowych poprzez podwójne kliknięcie zamiast pojedynczego"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Lektor ogłasza, kiedy użytkownicy dołączają, opuszczają lub zmieniają kanały głosowe",
            option: {
                voice: {
                    label: "Głos"
                },
                volume: {
                    label: "Głośność",
                    description: "Głośność lektora"
                },
                rate: {
                    label: "Prędkość",
                    description: "Prędkość mówienia lektora"
                },
                sayOwnName: {
                    label: "Czytaj własną nazwę",
                    description: "Czytaj własne imię przy akcjach"
                },
                latinOnly: {
                    label: "Tylko alfabet łaciński",
                    description: "Usuwaj znaki spoza alfabetu łacińskiego z nazw przed ich przeczytaniem"
                },
                joinMessage: {
                    label: "Wiadomość dołączenia",
                    description: "Tekst czytany przy dołączeniu"
                },
                leaveMessage: {
                    label: "Wiadomość opuszczenia",
                    description: "Tekst czytany przy opuszczeniu"
                },
                moveMessage: {
                    label: "Wiadomość zmiany kanału",
                    description: "Tekst czytany przy przejściu na inny kanał"
                },
                muteMessage: {
                    label: "Wiadomość wyciszenia",
                    description: "Wiadomość o wyciszeniu (obecnie tylko dla siebie)"
                },
                unmuteMessage: {
                    label: "Wiadomość odciszenia",
                    description: "Wiadomość o odciszeniu (obecnie tylko dla siebie)"
                },
                deafenMessage: {
                    label: "Wiadomość ogłuszenia",
                    description: "Wiadomość o ogłuszeniu (obecnie tylko dla siebie)"
                },
                undeafenMessage: {
                    label: "Wiadomość odogłuszenia",
                    description: "Wiadomość o odogłuszeniu (obecnie tylko dla siebie)"
                }
            },
            modal: {
                title: "Odtwórz dźwięki przykładowe",
                voiceTitle: "Głos",
                voice: "Wybierz głos",
                languageTitle: "Język",
                language: "Wybierz język",
                noVoice: "Nie znaleziono głosów lektora. ",
                linuxNote: "Zainstaluj speech-dispatcher lub espeak i uruchom Discorda z flagą --enable-speech-dispatcher",
                someNarrator: "Spróbuj zainstalować głosy w ustawieniach Lektora w Twoim systemie operacyjnym",
                dontHaveEnglish: "Nie masz zainstalowanych angielskich głosów, lektor może brzmieć dziwnie",
                customiseMessages: "Możesz spersonalizować czytane wiadomości poniżej. Zostaw puste pole, aby wyłączyć dany komunikat",
                placeholdersInfo: "Placeholdery {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} i {{CHANNEL}} zostaną zastąpione odpowiednio: nazwą użytkownika (puste, jeśli to Ty), nazwą wyświetlaną, pseudonimem serwerowym oraz nazwą kanału"
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Sprawia, że awatary i banery w profilach są klikalne. Dodaje opcje 'Zobacz awatar/baner' w menu serwerów, grup i użytkowników.",
            context: {
                view: {
                    avatar: "Zobacz awatar",
                    serverAvatar: "Zobacz awatar serwerowy",
                    icon: "Zobacz ikonę",
                    banner: "Zobacz baner"
                }
            },
            option: {
                format: {
                    label: "Format",
                    description: "Wybierz format dla statycznych obrazów. Animowane zawsze będą w .gif"
                },
                imgSize: {
                    label: "Rozmiar obrazu",
                    description: "Ustaw rozdzielczość wyświetlanego obrazu"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Pozwala kopiować i przeglądać surowe dane (JSON) dowolnej wiadomości, kanału, roli lub serwera",
            context: {
                copyLeft: "Kopiuj Raw (Lewy klik) / Zobacz Raw (Prawy klik)",
                copyRight: "Kopiuj Raw (Prawy klik) / Zobacz Raw (Lewy klik)",
                view: "Zobacz surowe dane (Raw)"
            },
            option: {
                popoverButton: {
                    label: "Przycisk w menu wiadomości",
                    description: "Pokaż przycisk nad wiadomością pozwalający na szybki podgląd surowych danych."
                },
                clickMethod: {
                    label: "Metoda kliknięcia",
                    description: "Zmień sposób działania przycisku podglądu danych.",
                    left: "Lewy przycisk myszy otwiera podgląd.",
                    right: "Prawy przycisk myszy otwiera podgląd."
                }
            },
            modal: {
                title: "Podgląd danych Raw",
                content: "Treść",
                data: "Dane {{type}}",
                copied: "Dane {{type}} skopiowane do schowka!",
                copy: "Kopiuj {{type}} JSON",
                copiedContent: "Treść skopiowana do schowka!",
                copyContent: "Kopiuj surową treść"
            },
            types: {
                message: "Wiadomość",
                channel: "Kanał",
                guild: "Serwer",
                role: "Rola",
                user: "Użytkownik"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Dodaje przyciski szybkiego kontaktu (DM, wyciszenie, ogłuszenie) bezpośrednio przy użytkownikach na kanale głosowym.",
            option: {
                showChatButton: {
                    label: "Pokaż przycisk czatu",
                    description: "Czy wyświetlać przycisk otwierający rozmowę prywatną"
                },
                showMuteButton: {
                    label: "Pokaż przycisk wyciszenia",
                    description: "Czy wyświetlać przycisk lokalnego wyciszenia użytkownika"
                },
                showDeafenButton: {
                    label: "Pokaż przycisk ogłuszenia",
                    description: "Czy wyświetlać przycisk lokalnego ogłuszenia"
                },
                muteSoundboard: {
                    label: "Wyciszaj Soundboard",
                    description: "Kliknięcie przycisku ogłuszenia wyciszy również tablicę dźwiękową tej osoby."
                },
                disableVideo: {
                    label: "Wyłączaj wideo",
                    description: "Kliknięcie przycisku ogłuszenia wyłączy również podgląd kamery tej osoby."
                },
                useServer: {
                    label: "Używaj wyciszenia serwerowego",
                    description: "Używaj wyciszenia/ogłuszenia serwerowego zamiast lokalnego, jeśli masz uprawnienia."
                },
                serverSelf: {
                    label: "Serwerowe wyciszenie siebie",
                    description: "Wyciszaj/ogłuszaj siebie na poziomie serwera."
                },
                showButtonsSelf: {
                    label: "Przyciski przy sobie",
                    description: "Czy wyświetlać przyciski przy własnej nazwie użytkownika.",
                    display: "Wyświetlaj",
                    hide: "Ukryj",
                    disable: "Wyłącz"
                },
                whichNameToShow: {
                    label: "Którą nazwę pokazywać",
                    description: "Wybierz nazwę wyświetlaną w dymku podpowiedzi.",
                    global: "Nazwa globalna",
                    username: "Nazwa użytkownika",
                    both: "Obie"
                },
                buttonPosition: {
                    label: "Pozycja przycisków",
                    description: "Wybierz, po której stronie nazwy użytkownika pojawią się przyciski.",
                    left: "Lewo",
                    right: "Prawo"
                }
            },
            tooltip: {
                navigate: "Przejdź do PW",
                open: "Otwórz PW z: {{username}}",
                yourself: "siebie",
                serverMute: "Wyciszenie serwerowe",
                serverDeafen: "Ogłuszenie serwerowe",
                mute: "Wycisz",
                deafen: "Ogłusz",
                unmute: "Odcisz",
                undeafen: "Odogłusz",
                serverUnmute: "Cofnij wyciszenie serwerowe",
                serverUndeafen: "Cofnij ogłuszenie serwerowe"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Rejestruje, kto dołącza do kanałów głosowych i kto je opuszcza",
            context: {
                view: "Zobacz log kanału"
            },
            modal: {
                joined: "Dołączył(a) do <#{{channel}}>",
                left: "Opuścił(a) <#{{channel}}>",
                movedTo: "Przeszedł/Przeszła do <#{{channel}}>",
                movedFrom: "Przeszedł/Przeszła z <#{{channel}}>",
                noLogs: "Brak logów do wyświetlenia.",
                logs: "Logi kanału {{channel}}"
            },
            option: {
                mode: {
                    label: "Tryb",
                    description: "Jak wyświetlać logi kanałów głosowych",
                    menu: "Menu logów",
                    associated: "Bezpośrednio na czacie tekstowym kanału",
                    both: "Na czacie i w menu logów"
                },
                voiceChannelChatSelf: {
                    label: "Loguj własne akcje",
                    description: "Loguj Twoje własne wejścia/wyjścia na kanałach tekstowych"
                },
                voiceChannelChatSilent: {
                    label: "Ciche powiadomienia na czacie",
                    description: "Wiadomości o dołączeniu/wyjściu będą wysyłane jako ciche (bez powiadomienia)"
                },
                voiceChannelChatSilentSelf: {
                    label: "Ciche powiadomienia gdy tam jesteś",
                    description: "Wiadomości będą ciche tylko jeśli Ty również jesteś na tym kanale głosowym"
                },
                ignoreBlockedUsers: {
                    label: "Ignoruj zablokowanych",
                    description: "Nie rejestruj akcji użytkowników, których zablokowałeś"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Pozwala wykonywać masowe akcje na całym kanale (przenoszenie, wyciszanie, rozłączanie wszystkich użytkowników naraz).",
            option: {
                waitAfter: {
                    label: "Liczba akcji przed przerwą",
                    description: "Liczba akcji API wykonanych przed krótkim oczekiwaniem (aby uniknąć limitów Discorda)"
                },
                waitSeconds: {
                    label: "Czas oczekiwania",
                    description: "Czas oczekiwania między akcjami (w sekundach)"
                }
            },
            context: {
                voiceTools: "Narzędzia głosowe",
                mentionAll: "Wspomnij wszystkich",
                disconnectAll: "Rozłącz wszystkich",
                muteAll: "Wycisz wszystkich",
                unmuteAll: "Odcisz wszystkich",
                deafenAll: "Ogłusz wszystkich",
                undeafenAll: "Odogłusz wszystkich",
                moveAll: "Przenieś wszystkich"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Dodaje przycisk pobierania do wiadomości głosowych. (Otwiera nową kartę w przeglądarce)",
            context: {
                download: "Pobierz wiadomość głosową"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Pozwala wysyłać wiadomości głosowe tak jak na telefonie. Kliknij prawym przyciskiem przycisk wysyłania i wybierz 'Wyślij wiadomość głosową'.",
            option: {
                noiseSuppression: {
                    label: "Tłumienie zakłóceń",
                    description: "Tłumienie zakłóceń (Noise Suppression)"
                },
                echoCancellation: {
                    label: "Usuwanie echa",
                    description: "Usuwanie echa (Echo Cancellation)"
                }
            },
            notification: {
                failed: {
                    upload: "Nie udało się wysłać wiadomości głosowej.",
                    start: "Nie udało się rozpocząć nagrywania.",
                    finish: "Nie udało się zakończyć nagrywania."
                }
            },
            context: {
                sendVoiceMessage: "Wyślij wiadomość głosową",
                missingPermissions: "(Brak uprawnień)"
            },
            modal: {
                record: "Nagraj wiadomość głosową",
                upload: "Wyślij plik",
                preview: "Podgląd",
                failed: "Nie udało się przetworzyć pliku audio:",
                oggOpus: "Wiadomości głosowe muszą być w formacie OggOpus, aby działały na iOS. Ten plik to {{type}}, więc nie będzie słyszalny na urządzeniach Apple.",
                fix: "Aby to naprawić, przekonwertuj plik na OggOpus, np. używając {{link}}",
                sending: "Wysyłanie wiadomości głosowej... Proszę o cierpliwość.",
                stop: "Zatrzymaj nagrywanie",
                start: "Rozpocznij nagrywanie",
                resume: "Wznów nagrywanie",
                pause: "Wstrzymaj nagrywanie",
                recording: "NAGRYWANIE",
                send: "Wyślij",
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Pozwala zwiększyć głośność użytkowników i transmisji powyżej domyślnego limitu 200%",
            option: {
                multiplier: {
                    label: "Mnożnik",
                    description: "Mnożnik głośności"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Odtworzenie starego eksperymentu Discorda z tapetami; Ustaw własne tło dla dowolnego kanału, użytkownika lub serwera.",
            option: {
                globalDefault: {
                    label: "Globalna tapeta",
                    description: "Ustaw domyślną tapetę dla wszystkich kanałów."
                },
                stylingTips: {
                    label: "Porady dotyczące wyglądu"
                }
            },
            context: {
                setWallpaper: "Ustaw tapetę",
                removeWallpaper: "Usuń tapetę"
            },
            modal: {
                set: "Ustaw tapetę",
                image: "URL obrazu",
                cancel: "Anuluj",
                apply: "Zastosuj",
                global: {
                    set: "Ustaw tapetę globalną",
                    remove: "Usuń globalną tapetę",
                    reset: "Resetuj dane tapet"
                },
                web: {
                    info: "Możesz używać plików lokalnych, umieszczając je w folderze motywów Plexcord i używając adresu: plexcord:///themes/nazwapliku.ext",
                    open: "Otwórz folder motywów",
                    quickCSS: "Otwórz QuickCSS"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Przywraca menu kontekstowe brakujące w przeglądarkowej wersji Discorda: Linki, Obrazy oraz pole tekstowe (Kopiuj, Wytnij, Wklej, Sprawdzanie pisowni).",
            option: {
                addBack: {
                    label: "Przywróć menu",
                    description: "Przywróć brakujące menu kontekstowe dla obrazów, linków i paska wpisywania"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Przywraca skróty klawiszowe brakujące w wersji przeglądarkowej (np. Ctrl+T, Ctrl+Tab). Działa w pełni tylko w Plextron/Legcord, nie bezpośrednio w zwykłej przeglądarce."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Usuwa limit bitrate 2500kbps w przeglądarkach Chromium oraz kliencie Plextron.",
            option: {
                experimentalAV1Support: {
                    label: "Eksperymentalne wsparcie AV1",
                    description: "Włącz obsługę kodeka AV1. Może powodować błędy, np. nieskończone ładowanie transmisji"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Wyświetla awatary użytkowników bezpośrednio pod reakcjami pod wiadomością",
            option: {
                avatarClick: {
                    label: "Klikalne awatary",
                    description: "Włącz możliwość klikania w awatary przy reakcjach"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Najedź na ikonę udostępniania ekranu, aby zobaczyć listę osób oglądających Twoją transmisję",
            modal: {
                noSpectator: "Brak widzów"
            },
            option: {
                showPanel: {
                    label: "Pokaż panel",
                    description: "Pokazuj listę widzów pod panelem udostępniania ekranu"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Automatycznie zamienia pierwszą literę każdego zdania w polu tekstowym na wielką",
            option: {
                blockedWords: {
                    label: "Zablokowane słowa",
                    description: "Słowa, które nie mają być pisane wielką literą (oddzielone przecinkami)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Przesyła powiadomienia z Discorda do XSOverlay, umożliwiając ich łatwe odczytywanie w VR",
            notification: {
                call: {
                    title: "{{user}} dzwoni do Ciebie.",
                    content: "Połączenie przychodzące"
                },
                message: {
                    reply: " (odpowiedź)",
                    embed: " [embed] ",
                    onlyEmbed: "Wysłano wstawkę (embed)",
                    sticker: " [naklejka] ",
                    onlySticker: "Wysłano naklejkę",
                    image: "obraz",
                    attachment: "załącznik"
                },
                test: {
                    title: "Wiadomość od Plexcord!",
                    content: "To jest powiadomienie testowe! *Wybuch*",
                    button: "Wyślij powiadomienie testowe"
                }
            },
            option: {
                webSocketPort: {
                    label: "Port WebSocket",
                    description: "Port dla połączenia WebSocket"
                },
                preferUDP: {
                    label: "Preferuj UDP",
                    description: "Włącz, jeśli używasz starszej wersji XSOverlay, która nie obsługuje WebSockets. To ustawienie jest ignorowane w wersji przeglądarkowej."
                },
                botNotifications: {
                    label: "Powiadomienia od botów",
                    description: "Zezwalaj na powiadomienia od botów"
                },
                serverNotifications: {
                    label: "Powiadomienia z serwerów",
                    description: "Zezwalaj na powiadomienia z kanałów serwerowych"
                },
                dmNotifications: {
                    label: "Powiadomienia PW",
                    description: "Zezwalaj na powiadomienia z wiadomości prywatnych"
                },
                groupDmNotifications: {
                    label: "Powiadomienia grupowe",
                    description: "Zezwalaj na powiadomienia z grup PW"
                },
                callNotifications: {
                    label: "Powiadomienia o rozmowach",
                    description: "Zezwalaj na powiadomienia o połączeniach głosowych"
                },
                pingColor: {
                    label: "Kolor wzmianki",
                    description: "Kolor podświetlenia wzmianki użytkownika"
                },
                channelPingColor: {
                    label: "Kolor wzmianki kanału",
                    description: "Kolor podświetlenia wzmianki kanału"
                },
                soundPath: {
                    label: "Ścieżka dźwięku",
                    description: "Dźwięk powiadomienia (default/warning/error)"
                },
                timeout: {
                    label: "Czas trwania",
                    description: "Czas widoczności powiadomienia (sekundy)"
                },
                lengthBasedTimeout: {
                    label: "Czas zależny od długości",
                    description: "Wydłuż czas wyświetlania na podstawie długości wiadomości"
                },
                opacity: {
                    label: "Przezroczystość",
                    description: "Przezroczystość powiadomienia"
                },
                volume: {
                    label: "Głośność",
                    description: "Głośność"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "Blokuje reklamy w oknach YouTube wewnątrz Discorda oraz w aktywności 'Watch Together' przy użyciu filtrów AdGuard"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "Dodaje opisy pod filmami z YouTube wstawionymi na czat"
        },
    }
} as const;

export default translations;
