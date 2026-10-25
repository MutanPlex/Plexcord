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
                description: "Zastosuj skonfigurowany QuickCSS"
            },
            enableReactDevtools: {
                label: "Włącz React Developer Tools",
                description: "Przydatne głównie dla twórców pluginów. Zignoruj, jeśli nie wiesz, co to jest"
            },
            mainWindowFrameless: {
                label: "Wyłącz ramkę głównego okna",
                description: "Usuń natywną ramkę okna, aby uzyskać czystszy wygląd. Nadal możesz przesuwać okno, przeciągając obszar paska tytułu."
            },
            frameless: {
                label: "Wyłącz ramkę okna",
                description: "Usuń natywną ramkę okna, aby uzyskać czystszy wygląd. Nadal możesz przesuwać okno, przeciągając obszar paska tytułu."
            },
            nativeTitleBar: {
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
                description: "Pozwala zmienić rozmiar okna na dowolny, nawet mniejszy niż minimalny rozmiar Discorda"
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
        windowsMaterial: {
            title: "Materiał tła systemu Windows (wymaga restartu)",
            description: "Przezroczyste efekty tła systemu Windows. Potrzebujesz motywu obsługującego przezroczystość, inaczej nie będzie to miało żadnego efektu. Po zmianie tego ustawienia wymagany jest restart.",
            material: {
                none: "Brak",
                mica: "Mica (wykorzystuje motyw systemu + tapetę pulpitu do malowania tła)",
                tabbed: "Tabbed (wariant Mica z mocniejszym zabarwieniem tła)",
                acrylic: "Acrylic (rozmywa okno za Discordem, tworząc półprzezroczyste tło)"
            }
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
        },
        tabs: {
            renderFailed: "Nie udało się wyświetlić karty {{tab}}. Jeśli problem nie ustąpi, spróbuj ponownie zainstalować za pomocą instalatora!"
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
            dev: "Wersja deweloperska Plexcord",
            browser: "Wersja Plexcord dla przeglądarki internetowej"
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
            resetText: "Resetuj"
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
                api: "Pokaż wtyczki API",
                type: "Filtruj według typu",
                tags: "Filtruj według tagów",
                favorites: "Pokaż ulubione"
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
            source: "Zobacz kod źródłowy",
            favorite: "Dodaj do ulubionych - przypina go na górze listy pluginów",
            unfavorite: "Usuń z ulubionych"
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
                    userArea: "API do dodawania przycisków do panelu obszaru użytkownika.",
                    profileCollections: "API do dodawania kolekcji do panelu profilu użytkownika, podobnie jak kolekcja gier Discord.",
                    profileSections: "API do dodawania sekcji w pobliżu obszaru „Konto od” na panelach profilu użytkownika.",
                    headerBar: "API do dodawania przycisków do paska nagłówka.",
                    surfaceClasses: "API do dodawania należących do wtyczek semantycznych atrybutów danych i ograniczonych właściwości do stabilnych powierzchni układu Discorda."
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
        },
        invalidInput: "Nieprawidłowe dane",
        loading: "Ładowanie...",
        authorPrefix: "autor:"
    },

    patchHelper: {
        title: "Pomocnik łatek",
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
        },
        backupFileType: "Kopia zapasowa ustawień Plexcord"
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
        more: "+{{count}} więcej wtyczek",
        error: {
            retrieveRepo: "Nie udało się pobrać informacji o repozytorium",
            fetchRepo: "Nie udało się pobrać danych z repozytorium",
            connectRepo: "Nie udało się połączyć z repozytorium. Sprawdź połączenie z internetem."
        }
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
        bd: "Motywy BetterDiscord",
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
        activation: {
            title: "Aktywacja motywu",
            always: "Zawsze włączone",
            lightOnly: "Tylko jasny motyw",
            darkOnly: "Tylko ciemny motyw"
        },
        actions: {
            pin: "Przypnij",
            unpin: "Odepnij",
            editSettings: "Edytuj ustawienia"
        },
        unknown: {
            title: "Nieznany",
            author: "Nieznany autor",
            theme: "Motyw Discorda",
            description: "Brak opisu."
        },
        required: "Następujące wtyczki są wymagane, ale nie są włączone: ",
        homepage: "Strona główna",
        support: "Wsparcie",
        online: {
            title: "Motywy online",
            description: "Ładuj motywy bezpośrednio z adresów URL zamiast plików lokalnych. Motywy online aktualizują się automatycznie, gdy źródło ulegnie zmianie, dzięki czemu zawsze masz najnowszą wersję bez ręcznego pobierania.",
            enable: "Włącz motywy online",
            enableDescription: "Przełącz ładowanie motywów online. Gdy ta opcja jest wyłączona, wszystkie motywy online zostaną wyłączone i nie będzie można dodać nowych.",
            placeholder: "https://przyklad.pl/motyw.css"
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
        },
        openInFolder: "Otwórz w folderze",
        fallback: {
            author: "Nieznany autor",
            description: "Motyw Discorda."
        }
    },

    updater: {
        title: "Aktualizator",
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
        unknownAuthor: "Nieznany autor"
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
            close: "Zamknij mimo to",
            windowTitle: "Edytor QuickCSS Plexcord"
        },
        messagePopover: {
            scrollLeft: "Przewiń w lewo",
            scrollRight: "Przewiń w prawo"
        },
        notices: {
            error: "Błąd podczas wyświetlania powiadomienia"
        },
        tray: {
            aboutPlexcord: "O Plexcord",
            updatePlexcord: "Zaktualizuj Plexcord",
            noUpdateTitle: "Brak dostępnych aktualizacji",
            noUpdateBody: "Używasz już najnowszej wersji Plexcord.",
            updateFailedTitle: "Aktualizacja nie powiodła się",
            updateFailedBody: "Nie udało się zastosować aktualizacji Plexcord.",
            updateSuccessTitle: "Aktualizacja zakończona",
            updateSuccessBody: "Ponowne uruchamianie Plexcord w celu zastosowania aktualizacji.",
            updateErrorTitle: "Błąd aktualizacji",
            updateErrorBody: "Wystąpił błąd podczas aktualizacji Plexcord.\n\n{{error}}",
            openSettingsFolder: "Otwórz folder ustawień",
            openThemesFolder: "Otwórz folder motywów"
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
        },
        detectLanguage: "Wykryj język"
    },

    plugin: {
        tags: {
            accessibility: "Dostępność",
            activity: "Aktywność",
            appearance: "Wygląd",
            chat: "Czat",
            commands: "Polecenia",
            console: "Konsola",
            customisation: "Dostosowanie",
            developers: "Programiści",
            emotes: "Emotikony",
            friends: "Znajomi",
            fun: "Zabawa",
            media: "Multimedia",
            notifications: "Powiadomienia",
            organisation: "Organizacja",
            privacy: "Prywatność",
            reactions: "Reakcje",
            roles: "Role",
            servers: "Serwery",
            shortcuts: "Skróty",
            utility: "Narzędzia",
            voice: "Głos"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "Wyodrębnij komponenty, które zostały połączone przez bundler"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "Wyodrębnij moduły, które zostały połączone przez bundler"
        },
        noTrack: {
            name: "NoTrack",
            description: "Wyłącz śledzenie Discorda (analityka/'science'), metryki oraz raportowanie błędów Sentry",
            option: {
                disableAnalytics: {
                    label: "Wyłącz analitykę",
                    description: "Blokuje analizy śledzące Discorda. Wyłącz to, jeśli chcesz, aby odznaki śledziły twoje postępy (np. godziny streamowania)."
                },
                disableStackDumping: {
                    description: "Wypisuj natywny ślad stosu w konsoli, gdy Discord się zawiesi. Wymaga pełnego ponownego uruchomienia."
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
                },
                includePlexcordInfoWhenCopying: {
                    label: "Dołącz informacje o Plexcord podczas kopiowania",
                    description: "Kopiuj również informacje o Plexcord (Plexcord, Electron, Chromium) po kliknięciu informacji o wersji w lewym dolnym rogu strony Ustawień"
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
                    dismiss: "Jeśli wiesz, co robisz, lub nie możesz zaktualizować, możesz zamknąć ten komunikat.",
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
                    timestamp: "Znacznik czasu",
                    date: "Data"
                },
                randomisedLength: {
                    label: "Długość losowa",
                    description: "Długość losowych znaków"
                },
                consistent: {
                    label: "Spójna",
                    description: "Spójny klucz anonimizacji"
                },
                dateFormat: {
                    description: "Format daty (obsługiwane: YYYY, MM, DD, HH, mm, ss, SSS)",
                    label: "Format daty"
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
            },
            text: {
                smallText: "Mały tekst",
                largeText: "Duży tekst"
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
                }
            },
            toast: {
                invalidColorFormat: "Nieprawidłowy format koloru dla {{settingKey}}, upewnij się, że jest w formacie 'R, G, B' lub '#RRGGBB'",
                invalidColorFormatFor: "Nieprawidłowy format koloru dla {{key}}, użyj \"R, G, B\" lub \"#RRGGBB\""
            }
        },
        betterBackreading: {
            name: "BetterBackreading",
            description: "Ułatwia czytanie starszych wiadomości dzięki wcześniejszemu ładowaniu i mniejszym skokom.",
            wholeNumber: "Wpisz liczbę całkowitą od {{min}} do {{max}}.",
            option: {
                imageScrollMargin: {
                    label: "Odległość wstępnego ładowania obrazów",
                    description: "Jak daleko z wyprzedzeniem ładować obrazy, w pikselach (300-3000)."
                },
                messageLoadBuffer: {
                    label: "Bufor ładowania wiadomości",
                    description: "Jak daleko z wyprzedzeniem pobierać kolejne wiadomości, w pikselach (500-3000)."
                },
                useDiscordMessageCount: {
                    label: "Używaj dynamicznej liczby wiadomości Discorda",
                    description: "Pozwól Discordowi wybrać, ile wiadomości pobrać, na podstawie okna i ustawień czatu."
                },
                messageCount: {
                    label: "Własna liczba wiadomości",
                    description: "Ile wiadomości pobierać na żądanie historii, gdy dynamiczna liczba jest wyłączona (30-100)."
                },
                channelOpenScrollMode: {
                    label: "Pozycja przy otwieraniu kanału",
                    description: "Otwieraj nieprzeczytane kanały w zapisanej pozycji (lub na dole), zawsze na dole albo zgodnie z domyślnym zachowaniem nieprzeczytanych.",
                    default: "Domyślne Discorda",
                    bottom: "Zawsze na dole",
                    saved: "Zapisana pozycja"
                }
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
            add: "Dodaj kolejny powód",
            duration: {
                discordDefault: "Domyślne Discorda",
                none: "Nie usuwaj niczego",
                hour1: "Ostatnia godzina",
                hours6: "Ostatnie 6 godzin",
                hours12: "Ostatnie 12 godzin",
                hours24: "Ostatnie 24 godziny",
                days3: "Ostatnie 3 dni",
                days7: "Ostatnie 7 dni"
            },
            text: {
                autoDeleteDuration: "Czas automatycznego usuwania wiadomości"
            }
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
                enableNestedFolders: {
                    label: "Włącz zagnieżdżone foldery",
                    description: "Zezwalaj na zagnieżdżanie folderów w innych folderach poprzez przeciąganie"
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
                headerSelf: "Wysłałeś zaproszenie do dołączenia do {{server}}",
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
            description: "Dodaje opcje kopiowania koloru roli / edycji roli / podglądu ikony roli po kliknięciu prawym przyciskiem roli w profilu użytkownika lub na liście członków",
            option: {
                roleIconFileFormat: {
                    label: "Format pliku ikony roli",
                    description: "Format pliku używany podczas wyświetlania ikon ról"
                }
            },
            context: {
                copyColor: "Kopiuj kolor roli",
                editRole: "Edytuj rolę",
                viewIcon: "Zobacz ikonę roli",
                viewMembers: "Wyświetl członków roli"
            },
            text: {
                roleActions: "Akcje roli"
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
            regexHelper: {
                title: "Pomocnik Regex",
                placeholder: "Tekst do przetestowania...",
                noPatterns: "Brak skonfigurowanych wzorców"
            },
            option: {
                blockedWords: {
                    label: "Zablokowane słowa",
                    description: "Lista słów do zablokowania oddzielonych przecinkami"
                },
                useRegex: {
                    label: "Użyj Regex",
                    description: "Traktuj każdą wartość jako wyrażenie regularne podczas sprawdzania treści (zaawansowane)"
                },
                regexHelper: {
                    label: "Pomocnik Regex",
                    description: "Przetestuj swoje wyrażenia regularne na przykładowym tekście"
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
            },
            text: {
                unknownUser: "Nieznany użytkownik"
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
                    default: "Multimedia"
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
                media: "Multimedia",
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
                selectedBorder: "Obramowanie akcentu wybranej karty",
                selectedBackground: "Kolor tła wybranej karty",
                tabShadows: "Efekty cienia kart",
                tabRepositioning: "Płynna zmiana pozycji kart",
                resizeHandle: "Zanikanie uchwytu zmiany rozmiaru",
                questActivate: "Gradient aktywnych misji"
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
                openAll: "Otwórz wszystkie zakładki",
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
                tabHeightScale: {
                    label: "Skala wysokości kart",
                    description: "Skala wysokości kart (procentowo)."
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
            },
            text: {
                folder: "Folder"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Dodaje licznik znaków do pola czatu",
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
            description: "Usuwa emotki i ozdobniki z nazw kanałów. Podczas edycji kanału przywraca oryginał.",
            option: {
                ignoredChannels: {
                    description: "Lista identyfikatorów kanałów oddzielonych przecinkami, których nie należy zmieniać.",
                    label: "Ignorowane kanały"
                }
            },
            text: {
                keepOriginalName: "Zachowaj oryginalną nazwę"
            }
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
                unknown: "Nieznana rola",
                andMore: "i {{count}} więcej"
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
            },
            text: {
                dark: "Ciemny",
                light: "Jasny"
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
            description: "Paleta poleceń w stylu Raycast do uruchamiania akcji w dowolnym miejscu Discorda",
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
                },
                commandDeleted: "Polecenie usunięte.",
                statusSetToLabel: "Ustawiono status na {{label}}.",
                themeSetToLabel: "Ustawiono motyw na {{label}}.",
                noSettingsPageWas: "Nie podano strony ustawień.",
                unableToOpenLabel: "Nie można otworzyć {{label_that_settings_page}}.",
                failedToStartDependencies: "Nie udało się uruchomić zależności: {{join}}",
                messageSentToUsername: "Wysłano wiadomość do {{username}}.",
                enabledRestart: "Włączono {{name}}. Uruchom ponownie, aby zastosować.",
                disabledRestart: "Wyłączono {{name}}. Uruchom ponownie, aby zastosować.",
                enabled: "Włączono {{name}}.",
                disabled: "Wyłączono {{name}}.",
                errorStarting: "Błąd podczas uruchamiania {{name}}.",
                errorStopping: "Błąd podczas zatrzymywania {{name}}."
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
                },
                closeAfterExecute: {
                    description: "Zamknij paletę po wykonaniu polecenia.",
                    label: "Zamknij po wykonaniu"
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
            },
            text: {
                insertTextInChat: "Wstaw tekst na czacie",
                name: "Name",
                commandName: "Nazwa polecenia",
                settingsPage: "Strona ustawień",
                searchSettingsPages: "Szukaj stron ustawień...",
                text: "Tekst",
                textToInsertInto: "Tekst do wstawienia w polu czatu",
                editCommand: "Edytuj polecenie",
                deleteCommand: "Usuń polecenie",
                createCustomCommand: "Utwórz niestandardowe polecenie",
                light: "Jasny",
                ash: "Popiół",
                dark: "Ciemny",
                onyx: "Onyks",
                toggleMute: "Przełącz wyciszenie",
                toggleDeafen: "Przełącz wyciszenie słuchawek",
                setStatus: "Ustaw status",
                searchStatuses: "Szukaj statusów...",
                setLabel: "Ustaw {{label}}",
                toggleTheme: "Przełącz motyw",
                openServer: "Otwórz serwer",
                openChannel: "Otwórz kanał",
                openDm: "Otwórz wiadomość prywatną",
                goHome: "Przejdź do strony głównej",
                goToServer: "Przejdź do serwera",
                searchServers: "Szukaj serwerów...",
                goToChannel: "Przejdź do kanału",
                searchChannels: "Szukaj kanałów...",
                searchFriends: "Szukaj znajomych...",
                myAccount: "Moje konto",
                profiles: "Profile",
                dataPrivacy: "Dane i prywatność",
                devices: "Urządzenia",
                connections: "Połączenia",
                appearance: "Wygląd",
                accessibility: "Dostępność",
                voiceVideo: "Głos i wideo",
                chat: "Czat",
                textImages: "Tekst i obrazy",
                notifications: "Powiadomienia",
                keybinds: "Skróty klawiszowe",
                authorizedApps: "Autoryzowane aplikacje",
                familyCenter: "Centrum rodzinne",
                advanced: "Zaawansowane",
                plexcord: "Plexcord",
                plexcordPlugins: "Wtyczki Plexcord",
                plexcordThemes: "Motywy Plexcord",
                plexcordUpdater: "Aktualizator Plexcord",
                plexcordChangelog: "Dziennik zmian Plexcord",
                openQuickcss: "Otwórz QuickCSS",
                openUpdater: "Otwórz aktualizator",
                openChangelog: "Otwórz dziennik zmian",
                restartDiscord: "Uruchom ponownie Discorda",
                managePlugins: "Zarządzaj wtyczkami",
                searchPlugins: "Szukaj wtyczek...",
                sendDm: "Wyślij wiadomość prywatną",
                recipient: "Odbiorca",
                message: "Wiadomość",
                messageContent: "Treść wiadomości",
                openPaletteHotkey: "Skrót otwierania palety",
                actions: "Akcje",
                preview: "Podgląd",
                openCommand: "Otwórz polecenie",
                copyAnswer: "Kopiuj wynik",
                openDetails: "Otwórz szczegóły",
                calculator: "Kalkulator",
                expression: "Wyrażenie",
                result: "Wynik",
                copyExpression: "Kopiuj wyrażenie",
                pinned: "Przypięte",
                suggestions: "Sugestie",
                setAlias: "Ustaw alias",
                aliasForLabel: "Alias dla {{label}}",
                leaveEmptyToRemove: "Pozostaw puste, aby usunąć",
                command: "Polecenie",
                noResults: "Brak wyników",
                addFile: "Dodaj plik",
                saveCommand: "Zapisz polecenie",
                createCommand: "Utwórz polecenie",
                nameRequired: "Nazwa jest wymagana.",
                enterValidUrl: "Wprowadź prawidłowy URL.",
                pickSettingsPage: "Wybierz stronę ustawień z podpowiedzi.",
                textRequired: "Tekst jest wymagany.",
                commandSaved: "Polecenie zapisane.",
                commandCreated: "Polecenie utworzone.",
                editCustomCommand: "Edytuj własne polecenie",
                disablePlugin: "Wyłącz wtyczkę",
                enablePlugin: "Włącz wtyczkę",
                pickRecipient: "Wybierz odbiorcę z podpowiedzi.",
                addMessageOrFile: "Dodaj wiadomość lub plik.",
                pressKeys: "Naciśnij klawisze...",
                answerCopied: "Odpowiedź skopiowana do schowka.",
                calculationCopied: "Obliczenie skopiowane do schowka.",
                unpinCommand: "Odepnij polecenie",
                pinCommand: "Przypnij polecenie",
                saveAlias: "Zapisz alias",
                changeHotkey: "Zmień skrót",
                recordHotkey: "Nagraj skrót",
                pressKeyCombo: "Naciśnij kombinację klawiszy, Backspace, aby wyczyścić, Esc, aby anulować",
                searchIn: "Szukaj w {{title}}...",
                searchCommands: "Szukaj poleceń...",
                somethingWentWrong: "Coś poszło nie tak.",
                remove: "Usuń",
                enabled: "Włączone",
                disabled: "Wyłączone",
                sectionNavigation: "Nawigacja",
                sectionCustom: "Własne",
                sectionPlugins: "Wtyczki",
                sectionMessaging: "Wiadomości",
                current: "Bieżący",
                submit: "Zatwierdź"
            },
            description2: "Paleta poleceń w stylu Raycast do uruchamiania akcji w dowolnym miejscu Discorda"
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
            copy: "Kopiuj kolory profilu serwerowego",
            toast: {
                noColor: "Nie znaleziono kolorów profilu!",
                copied: "Kolory profilu skopiowane do schowka!",
                error: "Błąd podczas kopiowania kolorów profilu!"
            },
            text: {
                formatted: "Kolor główny #{{primary}}, Kolor dodatkowy #{{secondary}}"
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
                copy: "Kopiuj link do naklejki",
                open: "Otwórz link do naklejki"
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
            },
            context: {
                changeIcon: "Zmień ikonę"
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
                sharing: "Udostępnianie aktywności nie jest włączone, więc inni nie zobaczą twojego niestandardowego Rich Presence!",
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
                },
                enablePresence: {
                    description: "Czy pokazywać aktywność",
                    label: "Włącz aktywność"
                }
            },
            toast: {
                savedPresetName: "Zapisano ustawienie {{name}}.",
                loadedPresetName: "Wczytano ustawienie {{name}}.",
                deletedPresetSelectedpreset: "Usunięto ustawienie {{selectedPreset}}."
            },
            text: {
                presetName: "Nazwa ustawienia",
                selectAPreset: "Wybierz ustawienie",
                streamLinkTwitchOr: "Link do transmisji (Twitch lub YouTube, tylko gdy typ aktywności to Transmisja)",
                presets: "Ustawienia wstępne",
                save: "Zapisz",
                load: "Wczytaj",
                delete: "Usuń",
                noSavedPresetsYet: "Brak zapisanych ustawień.",
                showCustomRpc: "Pokaż niestandardowe RPC",
                customRpcDisabled: "Niestandardowe RPC wyłączone",
                theEnablePresenceSetting: "Ustawienie „Włącz aktywność” jest wyłączone, więc twoja aktywność nie będzie widoczna. Jeśli to niezamierzone, włącz je poniżej.",
                activitySharingDisabled: "Udostępnianie aktywności wyłączone",
                discordDeveloperPortal: "Portal deweloperów Discorda",
                imgur: "Imgur",
                enableActivitySharing: "Włącz udostępnianie aktywności"
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
                select: "Wybierz plik...",
                overrides: {
                    label: "Nadpisania"
                },
                soundpack: {
                    label: "Pakiet dźwięków",
                    description: "Pakiet dźwięków używany zamiast ustawionego w Discordzie.",
                    default: "Domyślny Discorda"
                }
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
                pttStart: "Start PTT",
                pttStop: "Stop PTT",
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
                or: "lub",
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
            },
            text: {
                toggleDearrow: "Przełącz Dearrow"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Oczyszcza Discorda, usuwając zbędne elementy interfejsu, takie jak efekty profilu, zakładki sklepu, boosty i inne.",
            option: {
                userProfileHeader: {
                    label: "Profil użytkownika"
                },
                removeAvatarDecoration: {
                    label: "Usuń dekorację awatara",
                    description: "Usuń dekoracje awatarów. Jest/zostanie wyłączone, jeśli włączono Decor.",
                    alertBody: "Usuwanie dekoracji awatara zostało wyłączone, aby zapobiec konfliktom z wtyczką Decor.",
                    ok: "OK"
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
                },
                removeProfileFrame: {
                    description: "Usuń ramki profilu.",
                    label: "Usuń ramkę profilu"
                },
                removeDisplayNameStyles: {
                    description: "Usuń animowane/stylizowane nazwy wyświetlane z listy członków.",
                    label: "Usuń style nazw wyświetlanych"
                },
                removeLibraryAboveDms: {
                    description: "Usuń bibliotekę nad listą wiadomości prywatnych.",
                    label: "Usuń bibliotekę nad wiadomościami"
                },
                removeFamilyCenterAboveDms: {
                    description: "Usuń centrum rodzinne nad listą wiadomości prywatnych.",
                    label: "Usuń centrum rodzinne nad wiadomościami"
                }
            },
            text: {
                discordAlreadyHasA: "Discord ma już wbudowaną opcję stylu nazwy użytkownika w",
                accessibilitySettings: "ustawieniach dostępności."
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
            },
            toast: {
                failedToAuthorizeMessage: "Autoryzacja nie powiodła się: {{message}}"
            },
            text: {
                removeDecoration: "Usuń dekorację Decor",
                decoration: "Dekoracja Decor",
                none: "Brak",
                decorationFile: "Plik dekoracji"
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
            },
            text: {
                reconnect: "Połącz ponownie",
                loadingLazyModules: "Ładowanie modułów leniwych, ponowne uruchomienie może spowodować błędy",
                loadedLazyModules: "Załadowano wszystkie moduły leniwe",
                failedLazyModules: "Nie udało się załadować modułów leniwych, sprawdź konsolę",
                ok: "OK"
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
            },
            text: {
                notSupported: "Nieobsługiwane",
                devBuild: "Wersja deweloperska",
                standalone: "Samodzielna"
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
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "Dodaje przycisk w menu wiadomości do pobrania wszystkich załączników naraz.",
            button: "Pobierz wszystkie załączniki",
            toast: {
                success: "Pobrano załączniki: {{count}}.",
                partial: "Pobrano {{succeeded}} z {{total}} załączników. Nieudane: {{failed}}.",
                downloadedPluralizeSucceededAttachment: "Pobrano {{pluralize_succeeded_attachment}}.",
                downloadedSucceededOfLength: "Pobrano {{succeeded}} z {{length}} załączników. Nieudane: {{failed}}."
            },
            option: {
                downloadAllFileTypes: {
                    description: "Pobieraj również załączniki niebędące multimediami. Włącz to tylko, jeśli ufasz temu, co ci wysyłają.",
                    label: "Pobieraj wszystkie typy plików"
                }
            }
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
                },
                noReusableInvite: "Brak dostępnego zaproszenia wielokrotnego użytku.",
                unableToReuseInvite: "Nie można ponownie użyć zaproszenia."
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
                    media: "multimedia",
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
            },
            text: {
                searchExperiments: "Szukaj eksperymentów"
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
            },
            text: {
                unknownError: "Nieznany błąd"
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
                console: "Coś poszło nie tak (sprawdź konsolę!)",
                successfullyClonedNameTo: "Pomyślnie sklonowano {{name}} do {{name_your_server}}!"
            },
            context: {
                clone: "Klonuj {{type}}",
                cloneName: "Klonuj {{data}}"
            },
            text: {
                yourServer: "twój serwer",
                cloneTo: "Sklonuj do {{name}}",
                emoji: "Emoji",
                sticker: "Naklejka"
            }
        },
        externalPlayer: {
            name: "ExternalPlayer",
            description: "Otwieraj filmy i dźwięk w zewnętrznym odtwarzaczu, takim jak mpv.",
            option: {
                player: {
                    label: "Odtwarzacz",
                    description: "W którym odtwarzaczu otwierać multimedia."
                },
                openOnClick: {
                    label: "Otwieraj po kliknięciu",
                    description: "Otwieraj filmy i dźwięk w odtwarzaczu po naciśnięciu odtwarzania zamiast odtwarzać je w Discordzie."
                },
                path: {
                    label: "Ścieżka odtwarzacza",
                    description: "Bezwzględna ścieżka do pliku wykonywalnego odtwarzacza. Zostaw puste, aby użyć tego z PATH."
                },
                args: {
                    label: "Argumenty odtwarzacza",
                    description: "Dodatkowe argumenty przekazywane do odtwarzacza. Wartości ze spacjami ujmij w cudzysłów."
                }
            },
            context: {
                openIn: "Otwórz w {{player}}"
            },
            toast: {
                alreadyOpen: "Już otwarte w {{player}}.",
                restartRequired: "Uruchom ponownie Discorda całkowicie, aby załadować ExternalPlayer.",
                openFailed: "Nie udało się otworzyć odtwarzacza."
            },
            status: {
                paused: "Wstrzymano w {{player}}",
                playing: "Odtwarzanie w {{player}}"
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
                failedSave: "Nie udało się zapisać aliasu.",
                removedAliasAlias: "Usunięto alias :{{alias}}:",
                aliasSetForGetemojidisplayname: "Ustawiono alias dla {{getEmojiDisplayName_ref}}."
            },
            button: {
                edit: "Edytuj alias",
                set: "Ustaw alias"
            },
            text: {
                remove: "Usuń",
                noAliasesSetYet: "Nie ustawiono jeszcze aliasów.",
                aliasRequired: "Alias jest wymagany.",
                aliasInvalid: "Alias musi mieć 2-32 znaki i zawierać tylko małe litery, cyfry lub podkreślenia."
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "Pozwala polubić dowolny obraz",
            noFiles: "Brak plików pasujących do wyszukiwania.",
            searchPlaceholder: "Szukaj plików",
            media: "Multimedia",
            demoText: "Kliknij gwiazdkę, aby dodać plik do ulubionych.\nUlubione pliki pojawią się tutaj!",
            fetchError: "Nie udało się pobrać {filename}",
            uploadError: "Nie udało się przesłać {filename}",
            text: {
                clickTheStarTo: "Kliknij gwiazdkę, aby dodać plik do ulubionych.",
                favoriteFilesWillShow: "Ulubione pliki pojawią się tutaj!"
            },
            option: {
                localThumbnails: {
                    description: "Generuj miniatury plików lokalnie zamiast korzystać z zewnętrznej usługi (placeholder.nin0.dev). Niezgodne z urządzeniami mobilnymi. Przełączenie tej opcji nie wpływa na istniejące ulubione.",
                    label: "Lokalne miniatury"
                }
            }
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
                couldntFind: "Nie znaleziono odpowiedzi."
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
                },
                onlyWhenInVoice: {
                    label: "Tylko na kanale głosowym",
                    description: "Podążaj za użytkownikiem tylko wtedy, gdy jesteś na kanale głosowym"
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
            },
            text: {
                currentFont: "Bieżąca czcionka:",
                resetFont: "Resetuj czcionkę"
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Wymusza koronę właściciela obok nazw użytkowników, nawet na dużych serwerach."
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
            },
            option: {
                showFriendsInChat: {
                    description: "Pokazuj ikonę znajomego przy wiadomościach od znajomych.",
                    label: "Pokazuj znajomych na czacie"
                }
            },
            text: {
                friend: "Znajomy",
                rankIcon: "Ikona rangi"
            }
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
            description: "Dodaje obok przycisków mikrofonu i wyciszenia przycisk przełączania aktywności w grze. Kliknij prawym, aby przełączyć aktywność Spotify.",
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
            },
            text: {
                disableGameActivity: "Wyłącz aktywność w grze",
                enableGameActivity: "Włącz aktywność w grze",
                shareSpotifyActivity: "Udostępniaj aktywność Spotify",
                shareSpotifyActivityAccount: "Udostępniaj aktywność Spotify ({{name}})"
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
                alreadyCollection: "Ten GIF jest już w kolekcji",
                collectionsImportedSuccessfully: "Pomyślnie zaimportowano kolekcje.",
                failedToImportCollections: "Nie udało się zaimportować kolekcji: {{String_err}}"
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
            },
            text: {
                gifPickerCategoryOptions: "Opcje kategorii selektora GIF",
                gifCollections: "Kolekcje GIF",
                unknown: "Nieznane"
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
                    description: "Kuś los i wyślij GIF-a",
                    restricted: "To polecenie jest ograniczone na tym serwerze."
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
                title: "Repozytoria GitHub użytkownika {{username}}",
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
            description: "Tymczasowo ukrywa wiadomości i DM do ponownego uruchomienia.",
            button: {
                hide: "Ukryj",
                hideDm: "Ukryj DM",
                unhideDm: "Pokaż DM"
            },
            toggle: {
                none: "Brak ukrytych DM",
                hide: "Ukryj ukryte DM",
                show: "Pokaż ukryte DM"
            },
            option: {
                hidePopoverButton: {
                    label: "Ukryj przycisk w popoverze",
                    description: "Ukryj przycisk ukrywania w menu podręcznym wiadomości."
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "Ukrywa wskaźnik głosowy na liście serwerów, gdy jedyne aktywne kanały głosowe są wyciszone"
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
                invalid: "Nie udało się zaimportować notatek.",
                invalidJson: "Nieprawidłowy JSON"
            },
            toolbox: {
                action: "Otwórz notatki"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "NOTATKA"
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
                    description: "Ignoruj wszystkie aktywności słuchania (zwykle aktywności Spotify)"
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
            },
            text: {
                enableActivity: "Włącz aktywność",
                disableActivity: "Wyłącz aktywność"
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
            },
            text: {
                bytes: "Bajtów"
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
            },
            toast: {
                instantScreenshareDisabled: "Natychmiastowe udostępnianie ekranu {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
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
            },
            text: {
                serverOptions: "Opcje serwera",
                copyServerId: "Kopiuj ID serwera",
                serverIdCopied: "ID serwera skopiowane do schowka"
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
            },
            text: {
                keywordEntryI1: "Wpis słowa kluczowego {{i_1}}",
                listPriorityAdvanced: "Priorytet list (zaawansowane)",
                whichListToPrioritize: "Którą listę traktować priorytetowo, gdy wiadomość pasuje do obu",
                ifYouAreNot: "Jeśli nie masz pewności, w większości typowych przypadków ustawia się Czarną listę"
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
                showAlbumCover: {
                    label: "Pokaż okładkę albumu",
                    description: "Pokazuje okładkę albumu. Wyłączenie tej opcji wyświetli symbol zastępczy. Przydatne, jeśli Twoja muzyka zawiera nieodpowiednie okładki"
                },
                useLogo: {
                    label: "Używaj logo",
                    description: "Pokazuj logo ListenBrainz na okładce albumu"
                }
            },
            button: {
                profile: "Profil ListenBrainz",
                viewSong: "Zobacz utwór"
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
            },
            text: {
                allQuotesDisabled: "Naprawdę wyłączyłeś wszystkie cytaty ładowania? Ale z ciebie błazen..."
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
            orPaste: "Lub wklej obraz ze schowka!",
            verifyLogin: "Zweryfikuj logowanie",
            text: {
                scanQrCode: "Zeskanuj kod QR"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "Wyświetla tabele markdown w stylu GitHub w wiadomościach Discord.",
            toolbar: {
                label: "Widok tabeli markdown",
                table: "Tabela",
                raw: "Surowy"
            },
            option: {
                hideToggle: {
                    label: "Ukryj przełącznik",
                    description: "Ukrywa przełącznik Tabela/Surowy i zawsze pokazuje wyrenderowane tabele."
                }
            }
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
            description: "Pokazuje liczbę członków online, wszystkich członków i użytkowników na kanałach głosowych serwera - na liście członków i w podpowiedzi.",
            option: {
                toolTip: {
                    label: "Podpowiedź",
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
            totalVoice: "{{formattedVoiceCount}} osób na głosowym",
            tooltip: {
                total: "Łącznie {{count}} członków serwera"
            }
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
            linkCopied: "Skopiowano link!",
            text: {
                shift: "Shift",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "Backspace",
                pickEmoji: "Wybierz emoji"
            },
            emojiSetting: {
                pick: "Wybierz emotkę",
                selectMain: "Wybierz emotkę do reakcji",
                selectAdditional: "Wybierz dodatkowe emotki",
                additionalPlaceholder: "oddzielone przecinkiem/nową linią, maks. {{max}}"
            },
            toast: {
                cannotReact: "Nie można zareagować: brak uprawnień",
                linkCopied: "Link skopiowany!"
            }
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
            removeMessage: "Wyczyść historię wiadomości",
            removeMessageTemporary: "Usuń wiadomość (tymczasowo)",
            clearMessageLog: "Wyczyść log wiadomości",
            showDiff: "Pokaż różnice",
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
                ignoreSelfEdits: {
                    label: "Ignoruj własne edycje",
                    description: "Czy ignorować edycje dokonane przez ciebie"
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
                },
                logDeletedAttachments: {
                    description: "Czy rejestrować usunięte załączniki",
                    label: "Rejestruj usunięte załączniki"
                }
            },
            text: {
                clearHistory: "Wyczyść historię",
                toggleDeletedHighlight: "Przełącz wyróżnienie usuniętych",
                enableDiffView: "Włącz widok różnic",
                disableDiffView: "Wyłącz widok różnic",
                noDeletedMessages: "Brak usuniętych wiadomości",
                deletedMessageSuffix: " usunięta wiadomość",
                deletedMessagesSuffix: " usuniętych wiadomości"
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
                    description: "ID serwerów, kanałów lub użytkowników, które zawsze mają być pokazywane w dzienniku wiadomości."
                },
                blacklistedIds: {
                    label: "Czarna lista ID",
                    description: "ID serwerów, kanałów lub użytkowników, które nigdy nie mają być pokazywane w dzienniku wiadomości."
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
                clearLogsOnRestart: {
                    label: "Wyczyść logi przy ponownym uruchomieniu",
                    description: "Czyści logi podczas ponownego uruchomienia Discorda."
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
            },
            toast: {
                clearedLogs: "Wyczyszczono logi",
                failedToClearLogs: "Nie udało się wyczyścić logów",
                failedToRemoveMessage: "Nie udało się usunąć wiadomości. Szczegóły w konsoli.",
                noMessagesFoundIn: "Nie znaleziono wiadomości w pliku logu",
                successfullyImportedCountLogs: "Zaimportowano logi: {{count}}",
                successfullyExportedLogs: "Pomyślnie wyeksportowano logi",
                successfullyExportedCountLogs: "Wyeksportowano logi: {{count}}",
                errorExportingLogsCheck: "Błąd eksportu logów. Więcej informacji w konsoli"
            },
            text: {
                jsonFile: "Plik JSON",
                clearLogs: "Wyczyść logi",
                clearingLogs: "Czyszczenie logów...",
                messageLogger: "Message Logger",
                importLogs: "Importuj logi",
                logs: "Logi",
                loadingTabLogs: "Ładowanie dzienników: {{tab}}..."
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
                websocketURL: {
                    label: "URL Websocket",
                    description: "Domyślnie: ws://localhost:24123"
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
                spotifyLyricsApiUrl: {
                    label: "Bazowy URL API tekstów Spotify",
                    description: "Bazowy adres URL własnej instancji (na przykład: http://localhost:8080)."
                },
                translateTo: {
                    label: "Tłumacz na",
                    description: "Na jaki język tłumaczyć teksty - zmiana wyczyści obecne tłumaczenia",
                    cleared: "Wyczyszczono tłumaczenia"
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
                },
                lyricDelay: {
                    label: "Opóźnienie tekstu"
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
            },
            text: {
                unknownArtist: "Nieznany wykonawca",
                unknownTitle: "Nieznany tytuł"
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
                apply: "Zastosuj NewGuildSettings do folderu"
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
                continue: "Kontynuuj",
                supportUs: "Plexcord to oprogramowanie open source. Jeśli lubisz z niego korzystać, rozważ wsparcie nas",
                supportUsLink: "tutaj"
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
            description: "Sprawia, że powiadomienia na pulpicie są bardziej informacyjne",
            text: {
                threadInParent: "{{thread}} w {{parent}}"
            }
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
                },
                telegram: {
                    label: "Telegram",
                    description: "Otwieraj linki Telegram w aplikacji Telegram"
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
            },
            text: {
                roleOptions: "Opcje roli",
                userOptions: "Opcje użytkownika",
                unknownRole: "Nieznana rola",
                unknownUser: "Nieznany użytkownik"
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
                    label: "Przypnij wiadomości prywatne",
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
                },
                defaultCategoryName: "Przypięta kategoria {{number}}"
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
            embeddedTooltip: "Osadzone (konsola lub gra)",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Lista",
                    description: "Pokazuj wskaźniki w profilach użytkowników"
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
            about: "Nie możemy zagwarantować, że ta wtyczka nie spowoduje ostrzeżenia lub bana. Wybranie Xbox/Playstation/VR może sprawić, że Twój klient będzie nieaktualną wersją.",
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
                    description: "Na jakiej platformie udawać, że jesteś.",
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
            description: "Pozwala zapisywać i wczytywać różne ustawienia profilu.",
            toast: {
                importFailed: "Nie udało się zaimportować ustawień. Plik może być nieprawidłowy.",
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
            },
            text: {
                selectAServer: "Wybierz serwer",
                profileSets: "Zestawy profili",
                youAreNotIn: "Nie należysz jeszcze do żadnego serwera.",
                mainProfile: "Profil główny",
                serverProfiles: "Profile serwerowe",
                openProfileSets: "Otwórz zestawy profili"
            }
        },
        questify: {
            name: "Questify",
            description: "Ulepsz wybrane funkcje Questów, wyłącz irytujące elementy lub całkowicie usuń Questy.",
            quests: "Questy",
            context: {
                quest: {
                    label: "Menu przycisku Questów",
                    ignore: "Oznacz wszystkie jako ignorowane",
                    reset: "Resetuj listę ignorowanych",
                    fetch: "Pobierz Questy",
                    markAsIgnored: "Oznacz jako ignorowany",
                    unmarkAsIgnored: "Przestań ignorować",
                    stopAuto: "Zatrzymaj automatyczne ukończenie",
                    startAuto: "Rozpocznij automatyczne ukończenie",
                    copyQuestID: "Kopiuj ID Questa",
                    pauseAutoEnrollment: "Wstrzymaj automatyczny zapis",
                    unpauseAutoEnrollment: "Wznów automatyczny zapis",
                    pauseAutoProcessing: "Wstrzymaj automatyczne przetwarzanie",
                    unpauseAutoProcessing: "Wznów automatyczne przetwarzanie"
                }
            },
            button: {
                completing: "Kończenie...",
                completingWithTime: "Kończenie ({{time}})",
                completingIn: "Ukończenie za {{time}}",
                queued: "W kolejce ({{position}})",
                resuming: "Wznawianie...",
                completeNow: "Ukończ teraz",
                complete: "Ukończ ({{time}})",
                resume: "Wznów ({{time}})",
                completed: "Ukończono"
            },
            reward: {
                orbs: "{{status}} za {{orbQuantity}} Orbów.",
                article: "{{status}} za {{itemName}}.",
                unrecognized: "{{status}} za nierozpoznaną nagrodę."
            },
            toast: {
                autoCompleteBroken: "Automatyczne ukończenie nie działa. Poprawka pojawi się wkrótce.",
                enrollmentFailed: "Nie udało się zapisać do Questa {{questName}}.",
                enrollmentInNormalizequestnameQuest: "Nie udało się zapisać do misji {{normalizeQuestName_quest}}{{rateLimitSuffix}}.",
                automationUnlocked: "Automatyzacja Questów odblokowana.",
                automationLocked: "Automatyzacja Questów zablokowana."
            },
            notification: {
                completed: {
                    title: "Quest ukończony!",
                    body: "Quest {{questName}} został ukończony."
                },
                newQuest: {
                    title: "Wykryto nowy Quest!",
                    body: "Quest {{questName}} jest już dostępny."
                },
                newQuests: {
                    title: "Wykryto nowe Questy!",
                    body: "Nowe Questy są już dostępne: {{count}}."
                },
                newExcludedQuest: {
                    title: "Wykryto nowy wykluczony Quest!",
                    body: "Wykryto wykluczony Quest {{questName}}. ID: {{questId}}"
                },
                newExcludedQuests: {
                    title: "Wykryto nowe wykluczone Questy!",
                    body: "Wykryto nowe wykluczone Questy: {{count}}. Ich ID znajdziesz w konsoli."
                }
            },
            alert: {
                restart: {
                    title: "Wymagane ponowne uruchomienie",
                    body: "Zmiana w ustawieniach Questify wymaga ponownego uruchomienia.",
                    confirm: "Uruchom ponownie",
                    cancel: "Później"
                },
                dangerous: {
                    title: "Czy na pewno?",
                    confirm: "Kontynuuj",
                    cancel: "Anuluj",
                    disableEverything: "To całkowicie wyłączy funkcje Questów.",
                    allowDangerous: "To pozwoli na zmianę niebezpiecznych ustawień."
                }
            },
            status: {
                unclaimed: "NIEODEBRANE",
                claimed: "Odebrane",
                ignored: "Ignorowane",
                expired: "Wygasłe"
            },
            questTypes: {
                watchVideo: "Obejrzyj wideo",
                watchVideoOnMobile: "Obejrzyj wideo na telefonie",
                achievementInActivity: "Osiągnięcie w aktywności",
                achievementInGame: "Osiągnięcie w grze",
                playActivity: "Zagraj w aktywność",
                playOnDesktop: "Graj na komputerze",
                playOnDesktopV2: "Graj na komputerze V2",
                streamOnDesktop: "Streamuj na komputerze",
                playOnPlayStation: "Graj na PlayStation",
                playOnXbox: "Graj na Xbox"
            },
            settings: {
                questButton: {
                    title: "Przycisk Questów",
                    description: "Pokaż przycisk Questów na liście serwerów z opcjonalnym wskaźnikiem nieodebranych i nieignorowanych Questów.",
                    behavior: "Zachowanie przycisku",
                    leftClick: "Akcja lewego kliknięcia:",
                    middleClick: "Akcja środkowego kliknięcia:",
                    rightClick: "Akcja prawego kliknięcia:",
                    visibility: "Widoczność przycisku:",
                    visibilityTooltip: "Zawsze pokazuje przycisk Questów, dopóki ta funkcja jest włączona.\n\nNieodebrane pokazuje go tylko, gdy masz istotne nieodebrane nagrody z Questów.\n\nNigdy ukrywa przycisk Questów.",
                    unclaimedIndicator: "Wskaźnik nieodebranych:",
                    unclaimedIndicatorTooltip: "Pigułka pokazuje znacznik nieprzeczytanych Discorda obok przycisku Questów.\n\nOdznaka pokazuje liczbę istotnych nieodebranych nagród z Questów.\n\nOba pokazuje pigułkę i odznakę razem.\n\nBrak ukrywa wskaźniki.",
                    badgeColor: "Kolor odznaki:",
                    relevancy: "Istotność Questów",
                    includedRewardTypes: "Uwzględnione typy nagród:",
                    includedRewardTypesTooltip: "Licz jako nieodebrane tylko Questy z tymi typami nagród przy ustalaniu widoczności przycisku, liczby na odznace i zachowania powiadomień.",
                    includedQuestTypes: "Uwzględnione typy Questów:",
                    includedQuestTypesTooltip: "Licz jako nieodebrane tylko Questy z tymi typami zadań przy ustalaniu widoczności przycisku, liczby na odznace i zachowania powiadomień.",
                    display: {
                        always: "Zawsze",
                        unclaimed: "Nieodebrane",
                        never: "Nigdy"
                    },
                    indicator: {
                        pill: "Pigułka",
                        badge: "Odznaka",
                        both: "Oba",
                        none: "Brak"
                    },
                    action: {
                        openQuests: "Otwórz Questy",
                        contextMenu: "Menu kontekstowe",
                        pluginSettings: "Ustawienia wtyczki",
                        nothing: "Nic"
                    },
                    rewardTypes: {
                        orbs: "Orby",
                        nitroCodes: "Kody Nitro",
                        rewardCodes: "Kody nagród",
                        inGameItems: "Przedmioty w grze",
                        profileCollectibles: "Kolekcjonerskie dodatki profilu"
                    }
                },
                questFeatures: {
                    title: "Funkcje Questów",
                    description: "Zmień działanie Questów, aby rozszerzyć lub usunąć funkcje.",
                    disableFeatures: "Wyłącz funkcje",
                    disableEverything: "Całkowicie wyłącz funkcje Questów:",
                    disableEverythingTooltip: "To wyłączy wszystkie ulepszenia wtyczki, ukryje stronę Questów i elementy Questów w całym Discordzie oraz uniemożliwi Discordowi pobieranie danych Questów. Nie wpłynie to na sklep, ponieważ Orby jako druga waluta są z nim zbyt ściśle powiązane.",
                    disableSpecific: "Wyłącz wybrane funkcje:",
                    disableSpecificTooltip: "Sponsorowany baner to płatny baner Questa na górze strony Questów.\n\nPowiadomienia o przeniesieniu to wskaźniki, np. na stronie Odkrywaj, że Questy przeniesiono do wiadomości prywatnych.\n\nPromocja na liście znajomych to karta w sekcji \"Aktywni teraz\" listy znajomych, gdy użytkownik, z którym dzielisz serwer, gra w grę z aktywnym Questem.\n\nPromocja na liście członków to ikona przy członkach na liście serwera, gdy grają w grę z aktywnym Questem.\n\nPromocja w panelu konta to płatna promocja Questa nad panelem konta.\n\nPostęp w panelu konta to postęp aktywnego lub ukończonego Questa wyświetlany nad panelem konta.\n\nOdznaki Questów i Orbów to odznaki w profilach osób, które ukończyły co najmniej jeden Quest lub kupiły odznakę Orbów.",
                    disableOptions: {
                        sponsoredBanner: "Sponsorowany baner",
                        relocationNotices: "Powiadomienia o przeniesieniu",
                        friendsListPromo: "Promocja na liście znajomych",
                        membersListPromo: "Promocja na liście członków",
                        accountPanelPromo: "Promocja w panelu konta",
                        accountPanelProgress: "Postęp w panelu konta",
                        orbsAndQuestsBadges: "Odznaki Questów i Orbów"
                    },
                    modifyFeatures: "Modyfikuj funkcje",
                    warningTos: "Discord zaczął wysyłać ostrzeżenia użytkownikom skryptów lub wtyczek zmieniających sposób ukańczania Questów, co narusza jego {{tos}}.",
                    tos: "Warunki korzystania z usługi",
                    warningEscalate: "Ostrzeżenia wydają się ograniczać do groźby utraty dostępu do Questów lub ich nagród, ale Discord może je zaostrzyć w każdej chwili.",
                    warningDetection: "Ze względu na różne metody śledzenia użytkowników stosowane przez Discorda nie ma realnego sposobu na uniknięcie wykrycia. Jeśli kontynuujesz, licz się z tym, że Discord prawdopodobnie w pewnym momencie to wykryje.",
                    warningRisk: "Użyj poniższego przełącznika, aby na własne ryzyko uzyskać dostęp do potencjalnie niebezpiecznych ustawień.",
                    allowDangerous: "Zezwól na zmianę niebezpiecznych ustawień...",
                    disallowDangerous: "Zresetuj i zablokuj zmianę niebezpiecznych ustawień...",
                    completeVideoQuicker: "Przyspiesz automatyczne ukończenie Questów wideo:",
                    completeVideoQuickerTooltip: "Discord pozwala ukończyć Questy wideo, gdy od zapisu minie czas trwania wideo pomniejszony o 24 sekundy.\n\nOznacza to, że Quest wideo trwający 24 sekundy lub krócej, albo taki, do którego się zapiszesz i wrócisz później, może zostać ukończony od razu.\n\nTo ustawienie dotyczy tylko automatycznego ukończenia Questów wideo i zależy od poniższego ustawienia automatycznego ukończenia. Ręczne ukończenie nadal wymaga odczekania pełnego czasu i nie zależy od momentu zapisu.",
                    mobileDesktop: "Pozwól ukończyć na komputerze niektóre Questy wideo tylko na telefon:",
                    mobileDesktopTooltip: "Do niektórych Questów wideo tylko na telefon można zapisać się na komputerze, ale nadal trzeba je ukończyć na telefonie. To ustawienie pozwala ukończyć je na komputerze.\n\nDo niektórych Questów wideo tylko na telefon można zapisać się wyłącznie na telefonie. Aby to ustawienie na nie działało, zapisz się na telefonie przed powrotem na komputer i odświeżeniem Questów.\n\nWłączone samodzielnie, to ustawienie dotyczy tylko ręcznego ukończenia Questów wideo. Automatyczne ukończenie mobilnych Questów wideo z komputera zależy od poniższego ustawienia automatycznego ukończenia i domyślnie włącza również to ustawienie.",
                    simultaneous: "Automatycznie kończ Questy jednocześnie zamiast po kolei:",
                    simultaneousTooltip: "Domyślnie automatyczne ukończenie wielu Questów ustawia je w kolejce do ukończenia po kolei.\n\nTo ustawienie pozwala zamiast tego uruchomić wszystkie automatycznie kończone Questy jednocześnie.\n\nTo ustawienie dotyczy tylko automatycznego ukończenia i zależy od poniższego ustawienia automatycznego ukończenia.",
                    resumeInterrupted: "Wznów przerwane automatyczne ukończenia po przeładowaniu lub restarcie:",
                    resumeInterruptedTooltip: "To ustawienie automatycznie wznowi przerwane przez przeładowania lub restarty automatyczne ukończenia, w tym ponownie ustawi w kolejce Questy, które czekały w kolejce, ale jeszcze się nie rozpoczęły.",
                    autoProcess: "Automatycznie przetwarzaj zgodne Questy do automatycznego ukończenia:",
                    autoProcessTooltip: "Kończy kwalifikujące się, nieodebrane, niezignorowane i niewygasłe Questy objęte twoimi filtrami nagród i typów Questów, wykryte podczas działania Discorda. Uwzględniane są tylko obsługiwane typy zadań włączone poniżej.\n\nAutomatycznie zapisuje się do zgodnych Questów przed dodaniem ich do kolejki automatycznego ukończenia. Czeka na znane okresy limitów zapytań. Zatrzymuje się przy nieznanych błędach, limitach bez czasu ponowienia lub powtarzających się błędach zapisu.",
                    autoEnroll: "Automatycznie zapisuj się do zgodnych Questów.",
                    autoEnrollTooltip: "Zapisuje się do kwalifikujących się, nieodebranych, niezignorowanych i niewygasłych Questów objętych twoimi filtrami nagród i typów Questów, wykrytych podczas działania Discorda.\n\nZapisuje się do Questów bez dodawania ich do kolejki automatycznego ukończenia. Czeka na znane okresy limitów zapytań. Zatrzymuje się przy nieznanych błędach, limitach bez czasu ponowienia lub powtarzających się błędach zapisu.",
                    autoCompleteTypes: "Automatycznie kończ wybrane typy Questów:",
                    autoCompleteTypesTooltip: "Questy \"Obejrzyj wideo na telefonie\" działają tylko z mobilnymi Questami, do których można zapisać się na komputerze. Jeśli zapis jest ograniczony do telefonu, najpierw zapisz się na telefonie, a potem wróć na komputer i odśwież Questy.\n\nWszystkie Questy związane z wideo zwykle wysyłają stack trace razem z raportami postępu. Discord wie więc dokładnie, które funkcje zostały wywołane, i może sprawdzić, czy postęp zainicjowały jego własne funkcje. Questify usuwa ten stack trace, ale jego brak zdradza tyle samo co jego obecność.\n\nQuesty \"Graj na komputerze\", \"Graj na PlayStation\", \"Graj na Xbox\", \"Zagraj w aktywność\" i \"Osiągnięcie w aktywności\" są dostępne tylko w oficjalnych klientach na komputer z powodu ograniczenia nałożonego przez Discorda. Klienty firm trzecich, takie jak rozszerzenia przeglądarki, Plextron i inne, nie obsługują automatycznego ukończenia tych typów.\n\nWszystkie Questy związane z grami zwykle wysyłają odcisk gry razem z raportami heartbeat. Discord może więc na podstawie danych dziesiątek tysięcy użytkowników ustalić, czy inni prawdopodobnie używają prawdziwej gry, czy emulują plik wykonywalny. Nie ma rozsądnego sposobu na podrobienie tej wartości, więc Questify zostawia ją pustą, ale jej brak zdradza tyle samo co nieudolne podrobienie.\n\nAutomatyczne ukończenie zaczyna się od przycisków Questów na stronie Questów lub od automatycznego przetwarzania. Questy są kończone w kolejności dodania do kolejki, chyba że powyżej włączono ukończenie jednoczesne.\n\nAutomatyczne kończenie Questów to najbardziej ryzykowne z niebezpiecznych ustawień. Włączasz je na własne ryzyko."
                },
                questNotifications: {
                    title: "Powiadomienia o Questach",
                    description: "Skonfiguruj powiadomienia i alerty o ukończonych i nowo wykrytych Questach.",
                    questCompleted: "Quest ukończony",
                    notifyOnComplete: "Pokaż powiadomienie po ukończeniu Questa:",
                    soundOnComplete: "Odtwórz dźwięk po ukończeniu Questa:",
                    volume: "Głośność:",
                    newQuests: "Wykryto nowe Questy",
                    notifyOnNew: "Pokaż powiadomienie po wykryciu nowych Questów:",
                    soundOnNew: "Odtwórz dźwięk po wykryciu nowych Questów:",
                    notifyOnNewExcluded: "Pokaż powiadomienie po wykryciu nowych wykluczonych Questów:",
                    notifyOnNewExcludedTooltip: "Niektóre Questy są wykluczone z listy dostępnych Questów z powodu ograniczeń regionalnych lub platformowych.\n\nPo włączeniu Questify pobierze ich konfiguracje, zastosuje Twoje filtry typów Questów i nagród, wypisze dane wykluczonych Questów w konsoli i pokaże osobne powiadomienie dla pasujących wykluczonych Questów.",
                    soundOnNewExcluded: "Odtwórz dźwięk po wykryciu nowych wykluczonych Questów:",
                    soundOnNewExcludedTooltip: "Niektóre Questy są wykluczone z listy dostępnych Questów z powodu ograniczeń regionalnych lub platformowych.\n\nGdy wybrano dźwięk, Questify pobierze ich konfiguracje, zastosuje Twoje filtry typów Questów i nagród, wypisze dane wykluczonych Questów w konsoli i odtworzy ten dźwięk dla pasujących wykluczonych Questów.",
                    fetchInterval: "Interwał pobierania Questów:",
                    fetchIntervalTooltip: "Discord pobiera Questy tylko przy uruchomieniu i gdy odwiedzasz stronę Questów.\n\nTen interwał regularnie pobiera Questy, dopóki klient jest otwarty, dzięki czemu wskaźniki przycisku Questów i alerty o nowych Questach pozostają aktualne przez cały dzień.\n\nDziała to tylko po włączeniu i jeśli ustawienia przycisku lub powiadomień o Questach sprawiają, że okresowe pobieranie ma sens.",
                    disabled: "WYŁĄCZONE",
                    preview: "Odsłuchaj {{sound}}",
                    intervals: {
                        thirtyMinutes: "30 minut",
                        fortyFiveMinutes: "45 minut",
                        oneHour: "1 godzina",
                        threeHours: "3 godziny",
                        sixHours: "6 godzin",
                        twelveHours: "12 godzin"
                    }
                },
                questTiles: {
                    title: "Kafelki Questów",
                    description: "Wyróżnij Questy opcjonalnymi kolorami motywu dla lepszej widoczności.",
                    behavior: "Zachowanie kafelków",
                    gradientStyle: "Styl gradientu:",
                    gradientStyleTooltip: "Intensywny i Domyślny używają wybranego koloru kafelka w gradiencie grafiki.\n\nSubtelna czerń zachowuje ciemniejszy, neutralny gradient dla kontrastu.\n\nBrak gradientu usuwa gradient grafiki, co może utrudnić odczytanie niektórych grafik Questów.",
                    assetPreload: "Wstępne ładowanie zasobów:",
                    assetPreloadTooltip: "Ładowanie wszystkich zasobów po otwarciu strony Questów ogranicza przesunięcia układu podczas przewijania.\n\nŁadowanie podczas przewijania jest bliższe domyślnemu zachowaniu Discorda i może wymagać mniej pracy na początku.",
                    colors: "Kolory kafelków",
                    enable: "Włącz",
                    disable: "Wyłącz",
                    gradient: {
                        intense: "Intensywny gradient restylingu",
                        default: "Domyślny gradient restylingu",
                        black: "Subtelny czarny gradient",
                        hide: "Brak gradientu"
                    },
                    preload: {
                        onLoad: "Ładuj wszystkie zasoby po otwarciu strony",
                        onScroll: "Ładuj zasoby podczas przewijania"
                    }
                },
                reorderQuests: {
                    title: "Zmień kolejność Questów",
                    description: "Sortuj misje według statusu, gdy na stronie misji wybrano sortowanie Questify. Ukryte statusy są odfiltrowywane przy każdym sortowaniu.",
                    statusOrder: "Kolejność statusów",
                    statusOrderTooltip: "Każdy status może wystąpić tylko raz. Wybranie statusu użytego już na innej pozycji zamienia obie pozycje.",
                    positions: {
                        first: "Pierwszy:",
                        second: "Drugi:",
                        third: "Trzeci:",
                        fourth: "Czwarty:"
                    },
                    subsorts: "Podsortowania",
                    unclaimedSubsort: "Podsortowanie nieodebranych:",
                    unclaimedSubsortTooltip: "Ukończone, ale nieodebrane Questy pozostają pod nieukończonymi nieodebranymi, a następnie w tych grupach stosowane jest to podsortowanie.",
                    claimedSubsort: "Podsortowanie odebranych:",
                    claimedSubsortTooltip: "Odebrane Questy można sortować według czasu odebrania lub czasu dodania Questa.",
                    ignoredSubsort: "Podsortowanie ignorowanych:",
                    ignoredSubsortTooltip: "Ignorowane Questy zachowują pozycję swojej grupy, a to podsortowanie określa ich kolejność w tej grupie.",
                    expiredSubsort: "Podsortowanie wygasłych:",
                    expiredSubsortTooltip: "Wygasłe Questy można sortować według czasu wygaśnięcia lub czasu dodania Questa.",
                    subsort: {
                        addedNewest: "Dodane (najnowsze)",
                        addedOldest: "Dodane (najstarsze)",
                        expiringSoonest: "Wygasają (najwcześniej)",
                        expiringLatest: "Wygasają (najpóźniej)",
                        expiredMostRecent: "Wygasłe (najnowsze)",
                        expiredLeastRecent: "Wygasłe (najstarsze)",
                        claimedMostRecent: "Odebrane (najnowsze)",
                        claimedLeastRecent: "Odebrane (najstarsze)"
                    },
                    memory: "Pamięć strony Questów",
                    rememberSort: "Zapamiętaj wybrane sortowanie strony Questów:",
                    rememberSortTooltip: "Po wyłączeniu strona Questów za każdym razem otwiera się z sortowaniem Questify.",
                    rememberFilters: "Zapamiętaj wybrane filtry strony Questów:",
                    rememberFiltersTooltip: "Po wyłączeniu strona Questów za każdym razem otwiera się bez filtrów zadań i nagród."
                }
            },
            option: {
                migrationVersion: {
                    label: "Wersja migracji",
                    description: "Bieżąca wersja migracji ustawień."
                },
                questFeatures: {
                    label: "Funkcje Questów",
                    description: "Wybierz, które funkcje Questów wyłączyć."
                },
                disableQuestsEverything: {
                    label: "Wyłącz wszystko",
                    description: "Wyłącza wszystkie funkcje Questów."
                },
                disableRelocationNotices: {
                    label: "Wyłącz powiadomienia o przeniesieniu",
                    description: "Wyłącza powiadomienia o przeniesieniu Questów na stronie Odkrywaj."
                },
                disableSponsoredBanner: {
                    label: "Wyłącz sponsorowany baner",
                    description: "Wyłącza sponsorowany baner na stronie Questów."
                },
                disableAccountPanelPromo: {
                    label: "Wyłącz promocję w panelu konta",
                    description: "Wyłącza promowane okienko Questa nad panelem konta."
                },
                disableAccountPanelQuestProgress: {
                    label: "Wyłącz postęp w panelu konta",
                    description: "Wyłącza postęp aktywnych i ukończonych Questów nad panelem konta."
                },
                disableOrbsAndQuestsBadges: {
                    label: "Wyłącz odznaki Questów i Orbów",
                    description: "Wyłącza odznakę Questów w profilach."
                },
                disableFriendsListPromo: {
                    label: "Wyłącz promocję na liście znajomych",
                    description: "Wyłącza promocję Questów dla gier, w które grają znajomi."
                },
                disableMembersListPromo: {
                    label: "Wyłącz promocję na liście członków",
                    description: "Wyłącza ikonę aktywnej gry na liście członków."
                },
                allowChangingDangerousSettings: {
                    label: "Zezwól na niebezpieczne ustawienia",
                    description: "Pozwala zmieniać niebezpieczne ustawienia."
                },
                resumeInterruptedQuests: {
                    label: "Wznawiaj przerwane Questy",
                    description: "Wznawia automatyczne ukończenie Questów po przeładowaniu lub restarcie."
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "Zgodność mobilnych Questów wideo z komputerem",
                    description: "Sprawia, że Questy wideo tylko na telefon działają na komputerze."
                },
                autoCompleteQuestsSimultaneously: {
                    label: "Kończ jednocześnie",
                    description: "Kończy Questy jednocześnie zamiast po kolei."
                },
                completeVideoQuestsQuicker: {
                    label: "Szybsze kończenie Questów wideo",
                    description: "Wykorzystuje margines postępu Discorda i czas od zapisu przy automatycznym ukończeniu Questów wideo."
                },
                autoCompleteQuestTypes: {
                    label: "Typy Questów do automatycznego ukończenia",
                    description: "Które typy Questów kończyć automatycznie w tle."
                },
                questButton: {
                    label: "Przycisk Questów",
                    description: "Dostosuj przycisk Questów na liście serwerów."
                },
                questButtonDisplay: {
                    label: "Wyświetlanie przycisku Questów",
                    description: "Jakiego typu wyświetlania użyć dla przycisku Questów na liście serwerów."
                },
                questButtonIncludedTypes: {
                    label: "Uwzględnione typy przycisku Questów",
                    description: "Które typy nagród i Questów uwzględniać w liczbie na przycisku Questów."
                },
                questButtonIndicator: {
                    label: "Wskaźnik przycisku Questów",
                    description: "Jakiego typu wyświetlania użyć dla wskaźnika nieodebranych na przycisku Questów."
                },
                questButtonBadgeCount: {
                    label: "Liczba na odznace",
                    description: "Bieżąca liczba istotnych nieodebranych Questów."
                },
                questButtonBadgeColor: {
                    label: "Kolor odznaki",
                    description: "Kolor odznaki przycisku Questów na liście serwerów."
                },
                questButtonLeftClickAction: {
                    label: "Akcja lewego kliknięcia",
                    description: "Akcja wykonywana po kliknięciu lewym przyciskiem na przycisk Questów."
                },
                questButtonMiddleClickAction: {
                    label: "Akcja środkowego kliknięcia",
                    description: "Akcja wykonywana po kliknięciu środkowym przyciskiem na przycisk Questów."
                },
                questButtonRightClickAction: {
                    label: "Akcja prawego kliknięcia",
                    description: "Akcja wykonywana po kliknięciu prawym przyciskiem na przycisk Questów."
                },
                questNotifications: {
                    label: "Powiadomienia o Questach",
                    description: "Skonfiguruj powiadomienia o ukończonych i nowo wykrytych Questach."
                },
                notifyOnQuestComplete: {
                    label: "Powiadamiaj o ukończeniu",
                    description: "Pokazuje powiadomienie po ukończeniu Questa."
                },
                notifyOnNewQuests: {
                    label: "Powiadamiaj o nowych Questach",
                    description: "Pokazuje powiadomienie po wykryciu nowych Questów."
                },
                notifyOnNewExcludedQuests: {
                    label: "Powiadamiaj o nowych wykluczonych Questach",
                    description: "Pokazuje powiadomienie po wykryciu nowych wykluczonych Questów."
                },
                questCompletedAlertSound: {
                    label: "Dźwięk ukończenia Questa",
                    description: "Dźwięk odtwarzany po ukończeniu Questa."
                },
                questCompletedAlertVolume: {
                    label: "Głośność ukończenia Questa",
                    description: "Głośność dźwięku ukończenia Questa."
                },
                questFetchInterval: {
                    label: "Interwał pobierania",
                    description: "Interwał w sekundach pobierania Questów z Discorda."
                },
                newQuestAlertSound: {
                    label: "Dźwięk nowego Questa",
                    description: "Dźwięk odtwarzany po wykryciu nowych Questów."
                },
                newQuestAlertVolume: {
                    label: "Głośność nowego Questa",
                    description: "Głośność dźwięku nowego Questa."
                },
                newExcludedQuestAlertSound: {
                    label: "Dźwięk nowego wykluczonego Questa",
                    description: "Dźwięk odtwarzany po wykryciu nowych wykluczonych Questów."
                },
                newExcludedQuestAlertVolume: {
                    label: "Głośność nowego wykluczonego Questa",
                    description: "Głośność dźwięku nowego wykluczonego Questa."
                },
                questTiles: {
                    label: "Kafelki Questów",
                    description: "Dostosuj wygląd kafelków Questów na stronie Questów."
                },
                questTileUnclaimedColor: {
                    label: "Kolor kafelków nieodebranych",
                    description: "Kolor kafelków nieodebranych Questów."
                },
                questTileClaimedColor: {
                    label: "Kolor kafelków odebranych",
                    description: "Kolor kafelków odebranych Questów."
                },
                questTileIgnoredColor: {
                    label: "Kolor kafelków ignorowanych",
                    description: "Kolor kafelków ignorowanych Questów."
                },
                questTileExpiredColor: {
                    label: "Kolor kafelków wygasłych",
                    description: "Kolor kafelków wygasłych Questów."
                },
                questTileGradient: {
                    label: "Gradient kafelków",
                    description: "Styl gradientu używanego w kafelkach Questów."
                },
                questTilePreload: {
                    label: "Wstępne ładowanie kafelków",
                    description: "Próbuje wstępnie załadować zasoby kafelków Questów."
                },
                reorderQuests: {
                    label: "Zmień kolejność Questów",
                    description: "Sortuje Questy według statusu."
                },
                questOrder: {
                    label: "Kolejność Questów",
                    description: "Kolejność sortowania grup statusów Questów."
                },
                unclaimedSubsort: {
                    label: "Podsortowanie nieodebranych",
                    description: "Metoda podsortowania nieodebranych Questów."
                },
                claimedSubsort: {
                    label: "Podsortowanie odebranych",
                    description: "Metoda podsortowania odebranych Questów."
                },
                ignoredSubsort: {
                    label: "Podsortowanie ignorowanych",
                    description: "Metoda podsortowania ignorowanych Questów."
                },
                expiredSubsort: {
                    label: "Podsortowanie wygasłych",
                    description: "Metoda podsortowania wygasłych Questów."
                },
                isOnQuestsPage: {
                    label: "Na stronie Questów",
                    description: "Czy użytkownik jest obecnie na stronie Questów."
                },
                rememberQuestPageSort: {
                    label: "Zapamiętaj sortowanie",
                    description: "Zapamiętuje ostatnio użyte sortowanie na stronie Questów."
                },
                rememberQuestPageFilters: {
                    label: "Zapamiętaj filtry",
                    description: "Zapamiętuje ostatnio użyte filtry na stronie Questów."
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
                    label: "ID ignorowanych Questów",
                    description: "Lista ID ignorowanych Questów."
                },
                resumeQuestIDs: {
                    label: "ID Questów do wznowienia",
                    description: "Lista ID Questów kończonych automatycznie lub czekających w kolejce w tle."
                },
                acknowledgedNotices: {
                    description: "Jednorazowe komunikaty potwierdzone przez użytkownika.",
                    label: "Potwierdzone komunikaty"
                },
                settingsSearch: {
                    description: "Przeszukaj ustawienia Questify.",
                    label: "Wyszukiwanie ustawień"
                },
                hideNonAutoCompletableQuests: {
                    description: "Ukrywaj nieukończone misje bez obsługiwanego i włączonego zadania automatycznego ukończenia.",
                    label: "Ukryj misje bez automatycznego ukończenia"
                },
                preventVideoQuestsPausing: {
                    description: "Zapobiegaj pauzowaniu filmu, gdy okno misji traci fokus.",
                    label: "Zapobiegaj pauzowaniu misji wideo"
                },
                hiddenQuestStatuses: {
                    description: "Grupy statusów misji do ukrycia.",
                    label: "Ukryte statusy misji"
                },
                autoEnrollQuests: {
                    label: "Automatyczny zapis do Questów",
                    description: "Automatycznie zapisuj się do kwalifikujących się dostępnych Questów po udanym pobraniu, gdy Discord działa."
                },
                autoCompleteQuests: {
                    label: "Automatyczne ukończenie Questów",
                    description: "Automatycznie zapisuj się do kwalifikujących się dostępnych Questów z obsługiwanymi i włączonymi typami zadań i kończ je po udanym pobraniu, gdy Discord działa."
                }
            },
            text: {
                clearQuestQueue: "Wyczyść kolejkę misji",
                hideIncompleteQuestsWith: "Ukrywaj nieukończone misje o statusie nieodebrane lub zignorowane, gdy na tej platformie żadne zadanie automatycznego ukończenia nie jest obsługiwane i włączone w liście typów misji. Misje odebrane, wygasłe i ukończone są wyłączone. Aby je ukryć, użyj opcji ukrytej kolejności statusów.",
                discordForcesYouTo: "Discord wymusza, aby klient był aktywny, żeby misje wideo odtwarzały film.",
                hideNonAutoCompletable: "Ukryj misje bez automatycznego ukończenia:",
                preventVideoQuestsFrom: "Zapobiegaj pauzowaniu misji wideo po utracie fokusu:",
                thePunishmentAlsoConsists: "Kara obejmuje też naruszenie stanu konta trwające 2 lata za każde naruszenie.",
                dueToTheVarious: "Ze względu na różne metody śledzenia użytkowników przez Discorda realnie nie da się uniknąć wykrycia. Jeśli kontynuujesz, pamiętaj, że Discord prawdopodobnie w pewnym momencie wykryje twoje użycie.",
                enrollInQuest: "Zapisz się do misji",
                hidden: "Ukryte",
                selectingAnOccupiedPosition: "Wybranie zajętej pozycji zamienia oba statusy. Ukryte statusy są usuwane z list misji.",
                searchQuestifySettings: "Szukaj w ustawieniach Questify",
                searchQuestifySettings2: "Szukaj w ustawieniach Questify...",
                noMatchingSettings: "Brak pasujących ustawień.",
                questifyNoticeAugust7th: "Komunikat Questify – 7 sierpnia 2026",
                keepUsingDangerousQuestify: "Nadal używaj niebezpiecznych ustawień Questify",
                disableDangerousQuestifySettings: "Wyłącz niebezpieczne ustawienia Questify",
                questifyNoticeAugust26th: "Komunikat Questify – 26 sierpnia 2026",
                areYouSure: "Czy na pewno?",
                thePunishmentAppearsLimited: "Kara wydaje się ograniczać do utraty dostępu do misji i ich nagród, ale Discord może ją w każdej chwili zaostrzyć.",
                queueAllQuests: "Dodaj wszystkie zadania do kolejki",
                inProgress: "W toku",
                rateLimited: "Ograniczone",
                preventsVideoPausing: "To ustawienie zapobiega wstrzymywaniu wideo i pozwala na normalny postęp ukończenia.",
                appliesOnlyToVideoQuests: "To ustawienie dotyczy tylko ręcznego ukończania zadań wideo.",
                knownToPunish: "Discord znany jest z karania użytkowników skryptów lub wtyczek modyfikujących ukończenie zadań. Modyfikowanie ukończenia zadań narusza",
                punishmentConsists: "Kara polega na tymczasowej lub stałej utracie dostępu do zadań i ich nagród.",
                questBanSystem: "Discord wprowadził system blokad zadań, który tymczasowo lub na stałe ograniczy Twój dostęp do ukończania zadań i odbierania nagród, jeśli wykryje, że ukończasz je nieoficjalnymi sposobami. Modyfikowanie ukończenia zadań narusza ich",
                begunPunishing: "Discord zaczął karać użytkowników skryptów i wtyczek modyfikujących ukończenie zadań. Modyfikowanie ukończenia zadań narusza ich",
                dueToRateLimits: " z powodu limitów zapytań"
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
            },
            text: {
                quotePreview: "Podgląd cytatu"
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
                    selectAll: "Wybierz wszystkie",
                    reset: "Resetuj",
                    stateFilters: "Filtry stanu",
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
                    joinSettings: "Ustawienia dołączenia",
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
            keybind: {
                label: "Skrót klawiszowy",
                recording: "Nagrywanie...",
                reset: "Resetuj"
            },
            option: {
                keybindEnabled: {
                    label: "Skrót włączony",
                    description: "Pokaż ustawienia skrótu losowego kanału głosowego"
                },
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
                prioritizeFriends: {
                    label: "Priorytetyzuj znajomych",
                    description: "Jeśli bu to możliwe, preferuj kanały, na których są Twoi znajomi."
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
            },
            toast: {
                failedToFindA: "Nie znaleziono kanału głosowego.",
                voiceChannelIsUnavailable: "Kanał głosowy jest niedostępny."
            },
            text: {
                userCount: "{{count}} użytkownik",
                usersCount: "Użytkownicy: {{count}}"
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
            },
            text: {
                relationshipNotifier: "Powiadamianie o relacjach"
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
                fill: "Wypełnienie",
                image: "Obraz"
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
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Kontroluj, czy zawsze, czy nigdy nie chcesz otrzymywać wzmianek przy odpowiedziach na wiadomości, z funkcjami białej i czarnej listy",
            option: {
                replyPingBlacklist: {
                    label: "Czarna lista wzmianek w odpowiedziach",
                    description: "Rozdzielona przecinkami lista identyfikatorów użytkowników (ID), od których nigdy nie chcesz otrzymywać wzmianek w odpowiedziach"
                },
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
            },
            text: {
                all: "Wszystkie"
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
            },
            toast: {
                youCannotVoteOn: "Nie możesz głosować na własną recenzję.",
                networkErrorFailedTo: "Błąd sieci: nie udało się połączyć z ReviewDB.",
                pleaseAuthorizeToVote: "Autoryzuj się, aby głosować na recenzje.",
                requestFailed: "ReviewDB: żądanie nie powiodło się ze statusem {{status}}"
            },
            text: {
                ok: "OK",
                updateReviewFor: "Zaktualizuj recenzję dla @{{name}}",
                reviewUser: "Zrecenzuj @{{name}}",
                system: "System",
                reviewCount: "(opinie: {{count}})"
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
                allCleared: "Wszystkie zaplanowane wiadomości zostały wyczyszczone",
                scheduledMessageSentTo: "Wysłano zaplanowaną wiadomość do {{name}}"
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
                roles: "Role",
                boostLevel: "{{count}} (Poziom {{level}})"
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
                tryDiscordHighlighter: {
                    label: "Wypróbuj podświetlanie Discorda",
                    description: "Użyj lżejszego, domyślnego mechanizmu wyróżniania Discorda.",
                    never: "Nigdy",
                    secondary: "Preferuj Shiki zamiast podświetlania Discorda",
                    primary: "Preferuj podświetlanie Discorda zamiast Shiki",
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
                },
                ignoredLanguages: {
                    label: "Ignorowane języki",
                    description: "Oddzielona przecinkami lista języków pozostawionych domyślnym blokom kodu Discorda"
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
                },
                noQuickReacts: {
                    description: "Ukryj szybkie reakcje. Domyślnie pełne menu ukrywa przyciski szybkich reakcji.",
                    label: "Bez szybkich reakcji"
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
                },
                showGithubOrgs: {
                    description: "Pokaż organizacje GitHub, do których należy użytkownik",
                    label: "Pokaż organizacje GitHub"
                },
                showOnModal: {
                    description: "Pokaż połączone konta w pełnym oknie profilu",
                    label: "Pokaż w oknie"
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
                    description: "Pokazuj pierwszą dostępną nazwę z własnego formatu nazwy na liście członków, wiadomości prywatnych, znajomych i w sekcji Teraz aktywni."
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
                alwaysShowEffects: {
                    label: "Zawsze animuj efekty",
                    description: "Zawsze pokazuj efekty так, jakbyś najechał kursorem."
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
                },
                searchAutocomplete: {
                    description: "Pokazuj pierwszą dostępną nazwę z własnego formatu nazwy w autouzupełnianiu wzmianek i wyszukiwania.",
                    label: "Autouzupełnianie wyszukiwania"
                },
                styleDirectMessagesList: {
                    description: "Pokazuj efekty nazw wyświetlanych na niewybranych pozycjach bez najeżdżania. Po wyłączeniu wybrane i wskazane pozycje nadal mają styl.",
                    label: "Stylizuj listę wiadomości prywatnych"
                },
                styleDirectMessagesMessages: {
                    description: "Pokazuj efekty nazw wyświetlanych przy autorach wiadomości bez najeżdżania. Po wyłączeniu wskazane nazwy nadal mają styl.",
                    label: "Stylizuj wiadomości prywatne"
                },
                styleFriendsList: {
                    description: "Pokazuj efekty nazw wyświetlanych bez najeżdżania. Po wyłączeniu wskazane pozycje nadal mają styl.",
                    label: "Stylizuj listę znajomych"
                },
                styleActiveNow: {
                    description: "Pokazuj efekty nazw wyświetlanych bez najeżdżania. Po wyłączeniu wskazane pozycje nadal mają styl.",
                    label: "Stylizuj Teraz aktywni"
                },
                ignoreEffects: {
                    description: "Dla nazw innych niż główna używaj tylko koloru głównej roli i pomijaj efekty nazw wyświetlanych.",
                    label: "Ignoruj efekty"
                },
                animateEffects: {
                    description: "Animuj gradienty ról i efekty nazw wyświetlanych przy nazwach innych niż główna. Wyłączane przez „Ignoruj efekty” i ograniczenie ruchu.",
                    label: "Animuj efekty"
                },
                alwaysAnimateEffects: {
                    description: "Wymuś animację efektów nazw wyświetlanych, gdy byłyby już widoczne, nawet bez najeżdżania.",
                    label: "Zawsze animuj efekty"
                },
                gradientGlow: {
                    description: "Dodaj poświatę do animowanych gradientów użytkowników, tak jak w gradientach ról serwera.",
                    label: "Poświata gradientu"
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
            },
            text: {
                save: "Zapisz",
                unknown: "Nieznany"
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
            },
            text: {
                timeoutRemaining: "pozostało do końca wyciszenia"
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
            channelTitle: {
                chat: "Czat",
                dm: "PW"
            },
            modal: {
                switch: "Zmień kanały",
                popout: "Otwórz w nowym oknie",
                popoutClose: "Zamknij okno",
                popoutFor: "Otwórz w nowym oknie dla {{channel}}",
                close: "Zamknij pasek boczny"
            },
            option: {
                persistSidebar: {
                    label: "Zapamiętaj pasek boczny",
                    description: "Zachowaj otwarty pasek boczny po restarcie Discorda"
                },
                persistPopoutWindows: {
                    label: "Zapamiętaj okna",
                    description: "Przywracaj otwarte okna czatów po restarcie Discorda"
                },
                popoutAlwaysOnTop: {
                    label: "Zawsze na wierzchu",
                    description: "Utrzymuj okna czatów ponad wszystkimi innymi."
                },
                patchCommunity: {
                    label: "Poprawki społeczności",
                    description: "Naprawia funkcje takie jak Przeglądarka Kanałów na serwerach społecznościowych."
                },
                persistedPopoutWindowIds: {
                    description: "Identyfikatory kanałów zapisanych okien czatów."
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
                global: "Pisanie widoczne (Globalnie)",
                voiceChannel: "Pisanie zawsze widoczne na czacie połączonego kanału głosowego",
                temporary: "Pisanie tymczasowo widoczne na tym kanale z powodu niedawnej wiadomości"
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
                alwaysEnableInActiveVoiceChat: {
                    label: "Zawsze włączaj na aktywnym czacie głosowym",
                    description: "Zawsze pozwalaj na wyświetlanie wskaźnika pisania podczas pisania na kanale głosowym, z którym jesteś połączony."
                },
                temporaryEnableThresholdServers: {
                    label: "Próg tymczasowego włączenia (serwery)",
                    description: "Tymczasowo pozwalaj na wyświetlanie wskaźnika pisania przez tyle sekund po wysłaniu wiadomości na kanale serwera. Jeśli wskaźnik jest już widoczny na kanale, to ustawienie nie ma efektu."
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "Próg tymczasowego włączenia (wiadomości prywatne)",
                    description: "Tymczasowo pozwalaj na wyświetlanie wskaźnika pisania przez tyle sekund po wysłaniu wiadomości w DM lub grupowym DM. Jeśli wskaźnik jest już widoczny na kanale, to ustawienie nie ma efektu."
                },
                enabledLocations: {
                    label: "Włączone lokalizacje",
                    description: "Lista ID (PW, kanałów, serwerów), gdzie pisanie ma być widoczne."
                },
                disabledLocations: {
                    label: "Wyłączone lokalizacje",
                    description: "Lista ID, gdzie pisanie ma być ukryte."
                }
            },
            text: {
                silentTyping: "Ciche pisanie",
                enabled: "Włączone",
                chatBarIndicators: "Wskaźniki na pasku czatu",
                membersListIndicators: "Wskaźniki na liście członków",
                guild: "Serwer",
                channel: "Kanał",
                global: "Globalnie"
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
            description: "Dzieli zbyt długie wiadomości na części o rozmiarze Discorda przed wysłaniem.",
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
                    description: "Minimalne opóźnienie między częściami w sekundach."
                },
                hardSplit: {
                    label: "Twardy podział",
                    description: "Jeśli włączone, dzieli dokładnie na ostatnim znaku zamiast na ostatniej spacji/nowej linii."
                },
                splitInSlowmode: {
                    label: "Dziel w trybie powolnym",
                    description: "Zezwalaj na dzielenie w trybie powolnym, gdy opóźnienie mieści się w ustawionym maksimum."
                },
                slowmodeMax: {
                    label: "Maksymalny slowmode",
                    description: "Maksymalny czas trybu powolnego dozwolony przy dzieleniu wiadomości."
                },
                splitMode: {
                    description: "Preferuj tę granicę przy dzieleniu wiadomości.",
                    label: "Tryb dzielenia"
                }
            },
            toast: {
                cannotSplitThisMessage: "Nie można podzielić tej wiadomości z powodu trybu powolnego kanału.",
                onlySentLengthMessage: "Wysłano tylko {{sent}}/{{length}} części wiadomości.",
                unsentCopied: "Niewysłane części wiadomości skopiowane do schowka."
            },
            text: {
                newlines: "Nowe wiersze",
                spaces: "Spacje",
                strictCharacterLimit: "Ścisły limit znaków"
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
                start: "Początek",
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
                set: "Ustaw własny status",
                delete: "Usuń ustaawienie wstępne"
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
            },
            text: {
                failedToRender: "Nie udało się wyświetlić :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Sprawia, że wybranie naklejki wstawia ją do pola tekstowego zamiast natychmiastowego wysłania"
        },
        streaks: {
            name: "Streaks",
            description: "Pokazuje serię obok użytkownika, gdy wymieniacie się wiadomościami prywatnymi przez kolejne dni.",
            tooltip: "Seria dni: {{count}}",
            tooltipExpiring: "Seria dni: {{count}} — napiszcie dziś, aby ją utrzymać!",
            option: {
                account: {
                    description: "Zaloguj się lub wyloguj z API Streaks. Serie są przechowywane w API, więc musisz być zalogowany, aby były liczone.",
                    login: "Zaloguj się do API Streaks",
                    logout: "Wyloguj się z API Streaks"
                },
                eliteColor: "Kolor serii elitarnej (100+ dni)",
                diamondColor: "Kolor serii diamentowej (60+ dni)",
                platinumColor: "Kolor serii platynowej (45+ dni)",
                goldColor: "Kolor serii złotej (30+ dni)",
                silverColor: "Kolor serii srebrnej (14+ dni)",
                bronzeColor: "Kolor serii brązowej (7+ dni)",
                defaultColor: "Domyślny kolor serii (1+ dni)"
            },
            toast: {
                authFailed: "Autoryzacja nie powiodła się: {{error}}",
                failedToAuthorizeMessage: "Autoryzacja nie powiodła się: {{message}}",
                authorizationExpired: "Autoryzacja Streaks wygasła. Autoryzuj ponownie w ustawieniach wtyczki Streaks."
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Automatycznie włącza tryb streamowania, gdy zaczniesz udostępniać ekran na Discordzie"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Wyłącz wybrane kodeki wideo dla transmisji i kamer.",
            option: {
                disableAv1Codec: {
                    label: "Wyłącz kodek AV1",
                    description: "Spraw, aby Discord nie brał pod uwagę AV1 przy transmisji i kamerach."
                },
                disableH265Codec: {
                    label: "Wyłącz kodek H265",
                    description: "Spraw, aby Discord nie brał pod uwagę H265 przy transmisji i kamerach."
                },
                disableH264Codec: {
                    label: "Wyłącz kodek H264",
                    description: "Spraw, aby Discord nie brał pod uwagę H264 przy transmisji i kamerach."
                },
                disableVP8Codec: {
                    label: "Wyłącz kodek VP8",
                    description: "Spraw, aby Discord nie brał pod uwagę VP8 przy transmisji i kamerach."
                },
                disableVP9Codec: {
                    label: "Wyłącz kodek VP9",
                    description: "Spraw, aby Discord nie brał pod uwagę VP9 przy transmisji i kamerach."
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
                name: "Nazwa",
                nameDescription: "Opcjonalna nazwa ułatwiająca rozpoznanie tej reguły.",
                search: "Szukaj reguły...",
                noResults: "Żadna reguła nie pasuje do wyszukiwania.",
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
            },
            text: {
                optionallyOnlyApplyThis: "Opcjonalnie stosuj tę regułę tylko, gdy wiadomość zawiera ten tekst.",
                emptyRule: "Pusta reguła {{number}}",
                ruleWithFind: "Reguła {{number}} - {{find}}"
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
                    description: "Pokazuj czas w formacie 24-godzinnym"
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
                },
                recipientTimezoneInDms: {
                    label: "Strefa czasowa odbiorcy w wiadomościach prywatnych",
                    description: "W wiadomościach prywatnych pokazuj strefę czasową odbiorcy przy twoich wiadomościach"
                },
                showLocalTimezone: {
                    label: "Pokaż lokalną strefę czasową",
                    description: "Pokazuj lokalną strefę czasową zamiast samego „lokalnie”"
                }
            },
            modal: {
                title: "Strefy czasowe",
                select: "Wybierz strefę",
                selectPlaceholder: "Wybierz strefę czasową",
                delete: "Usuń strefę",
                save: "Zapisz"
            },
            text: {
                invalidResponseFormat: "Nieprawidłowy format odpowiedzi"
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
                respectDoNotDisturb: {
                    label: "Respektuj Nie przeszkadzać",
                    description: "Nie pokazuj powiadomień, gdy Twój status to Nie przeszkadzać."
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
                    deepl: "DeepL Darmowy - Wymagany klucz API",
                    deeplPro: "DeepL Pro - Wymagany klucz API",
                    kagi: "Tłumacz Kagi - Wymagany klucz API"
                },
                kagiSession: {
                    label: "Sesja Kagi",
                    description: "Pobierz swój token sesji z https://kagi.com/settings?p=user_details"
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
            },
            button: {
                manageLanguages: "Dostosuj języki tłumaczenia i automatyczne tłumaczenie"
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
            },
            text: {
                viewAvatarDecoration: "Zobacz dekorację awatara"
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
                },
                messageContextMenu: {
                    description: "Pokaż w menu kontekstowym wiadomości",
                    label: "Menu kontekstowe wiadomości"
                },
                sortKeys: {
                    description: "Sortuj alfabetycznie klucze surowych danych.",
                    label: "Sortuj klucze"
                },
                stripSensitiveData: {
                    description: "Usuń z surowych danych dane wrażliwe, takie jak e-mail i numer telefonu.",
                    label: "Usuń dane wrażliwe"
                }
            },
            modal: {
                title: "Podgląd danych Raw",
                content: "Treść wiadomości",
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
            },
            text: {
                copyTypeData: "Kopiuj dane {{type}}",
                rawTypeData: "Surowe dane {{type}}",
                messageData: "Dane wiadomości"
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
            },
            text: {
                convertioWebConverter: "konwerter internetowy convertio"
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
            description: "Przywraca skróty brakujące w wersji webowej Discorda. W pełni działa tylko w Plextron/Legcord, nie w przeglądarce",
            option: {
                showNavigationButtons: {
                    description: "Pokaż przyciski nawigacji wstecz/dalej na pasku tytułu.",
                    label: "Pokaż przyciski nawigacji"
                },
                overrideCommonKeybinds: {
                    description: "Pozwala Discordowi nadpisać najpopularniejsze skróty nawigacji kart (ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+n). Działa tylko w nielicznych przeglądarkach, które dają pierwszeństwo skrótom stron.",
                    label: "Nadpisz popularne skróty"
                }
            }
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
                },
                clickableAvatars: {
                    description: "Gdy włączone, kliknięcie awatara reagującego użytkownika otworzy jego profil zamiast dodać reakcję",
                    label: "Klikalne awatary"
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
        addAttachments: {
            name: "AddAttachments",
            description: "Pozwala dodawać nowe załączniki podczas edytowania wiadomości",
            toast: {
                youCannotAddMore: "Nie możesz dodać więcej załączników do tej wiadomości.",
                youCanOnlyAdd: "Do tej wiadomości możesz dodać jeszcze tylko {{count}} załącznik(ów).",
                uploadingThisCanTake: "Przesyłanie, to może chwilę potrwać...",
                addedOne: "Pomyślnie dodano załącznik!",
                addedMany: "Pomyślnie dodano załączniki!"
            },
            text: {
                addAttachments: "Dodaj załączniki"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "Co zrobić z uproszczoną kartą uprawnień Discorda",
                    label: "Uproszczona karta",
                    hide: "Ukryj ją",
                    collapse: "Uczyń ją zwijaną",
                    show: "Pozostaw widoczną"
                },
                collapsedByDefault: {
                    description: "Rozpoczynaj z zwiniętymi uproszczonymi uprawnieniami.",
                    label: "Domyślnie zwinięte"
                }
            },
            name: "AdvancedPermissions",
            description: "Domyślnie pokazuje kartę zaawansowanych uprawnień.",
            text: {
                simplifiedPermissions: "Uproszczone uprawnienia"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "Automatycznie przechodź do wiadomości tylko wtedy, gdy okno Discorda nie jest aktywne.",
                    label: "Tylko gdy nieaktywne"
                }
            },
            name: "AutoJumpToMessage",
            description: "Automatycznie otwiera kanał z nowymi wiadomościami."
        },
        betterForwards: {
            text: {
                serverIconForName: "Ikona serwera {{name}}",
                messageAttachments: "Załączniki wiadomości",
                messageTextWillNot: "Tekst wiadomości nie zostanie przekazany, gdy ta opcja jest wyłączona",
                forwardEverything: "Przekaż wszystko",
                viewServer: "Zobacz serwer",
                embed: "Osadzenie",
                embedNumber: "Osadzenie {{number}}",
                image: "Obraz",
                video: "Wideo",
                serverIcon: "Ikona serwera {{name}}",
                dmIcon: "Ikona DM {{name}}",
                groupDmIcon: "Ikona grupowej DM {{name}}"
            },
            option: {
                resendOnFail: {
                    description: "Spróbuje ponownie wysłać przekazaną wiadomość, jeśli przekazanie się nie powiedzie. Może powodować niezamierzone wzmianki lub spam. Omija ograniczenia NSFW.",
                    label: "Wyślij ponownie przy błędzie"
                },
                forwardPreface: {
                    description: "Czym powinna zaczynać się przekazana wiadomość",
                    label: "Prefiks przekazania"
                },
                dontFollowForwards: {
                    description: "Po przekazaniu pojedynczej wiadomości nie przechodź do niej. Przytrzymaj Shift, aby zignorować to zachowanie.",
                    label: "Nie podążaj za przekazaniami"
                },
                selfForward: {
                    description: "Pokazuj bieżący kanał w wyskakującym oknie listy przekazywania.",
                    label: "Przekazywanie do siebie"
                }
            },
            name: "BetterForwards",
            description: "Narzędzia do przekazywania wiadomości, w tym obchodzenie NSFW i ulepszenia interfejsu."
        },
        betterImageEditor: {
            text: {
                search: "Szukaj",
                searchSavedPictures: "Szukaj zapisanych obrazów",
                clearTheSearch: "Wyczyść wyszukiwanie",
                savedPictures: "Zapisane obrazy",
                removeName: "Usuń {{name}}",
                removeHoldShiftTo: "Usuń. Przytrzymaj Shift, aby pominąć potwierdzenie",
                originals: "Oryginały",
                putBackTheLast: "Przywróć ostatni",
                forgetEveryRememberedCrop: "Zapomnieć wszystkie zapamiętane kadrowania?",
                yourPicturesStayEach: "Twoje obrazy pozostaną. Od teraz każdy otworzy się bez kadrowania, dopóki go ponownie nie przytniesz.",
                forget: "Zapomnij",
                cancel: "Anuluj",
                clearSavedPictures: "Wyczyścić zapisane obrazy?",
                everyPictureYouHave: "Każdy zapisany tutaj obraz zostanie usunięty wraz z zapamiętanym kadrowaniem. Archiwum Discorda oraz twój obecny awatar i baner pozostaną nietknięte.",
                clear: "Wyczyść",
                removeThisPicture: "Usunąć ten obraz?",
                remove: "Usuń",
                keepTheCroppedCopy: "Zachować przyciętą kopię?",
                itGoesOnThe: "Trafi na półkę {{toLowerCase}}, obok twoich oryginałów.",
                keep: "Zachowaj",
                noThanks: "Nie, dziękuję",
                exportToAFile: "Eksportuj do pliku",
                importFromAFile: "Importuj z pliku",
                forgetRememberedFraming: "Zapomnij zapamiętane kadrowanie",
                clearSavedPictures2: "Wyczyść zapisane obrazy",
                croppedKind: "Przycięte: {{kind}}",
                unpinName: "Odepnij {{name}}",
                pinName: "Przypnij {{name}}",
                pinnedNeverDrops: "Przypięte, nigdy nie spadnie z półki",
                pinNeverDrops: "Przypnij, aby nigdy nie spadło z półki",
                nothingMatches: "Nic tu nie pasuje",
                originalsEmpty: "Obrazy, które wybierzesz, wkleisz lub upuścisz, trafiają tutaj",
                croppedEmpty: "Obrazy, które przytniesz, trafiają tutaj",
                forgotFraming: "Zapomniano kadrowanie {{count}} obrazów",
                nothingFramed: "Nic nie było kadrowane",
                pictureLibrary: "Biblioteka obrazów",
                addedPictures: "Dodano obrazy: {{count}}",
                nothingNew: "Nic nowego w tym pliku",
                shownOfTotal: "{{shown}} z {{total}}",
                keptCount: "Zachowane: {{count}}",
                youAreWearingThis: "Masz to na sobie",
                removePictureBody: "{{name}} zostanie usunięty z zapisanych obrazów wraz z zapamiętanym kadrowaniem."
            },
            option: {
                librarySize: {
                    description: "Ile obrazów przechowywać na każdej półce.",
                    label: "Rozmiar biblioteki"
                },
                rememberCrop: {
                    description: "Przywraca powiększenie i pozycję ostatnio użyte dla obrazu.",
                    label: "Zapamiętaj kadrowanie"
                },
                forgetFraming: {
                    description: "Usuń wszystkie zapamiętane kadrowania i otwieraj każdy obraz tak, jak zrobiłby to Discord.",
                    label: "Zapomnij kadrowanie"
                },
                saveCropped: {
                    description: "Zachowaj kopię każdego obrazu po jego przycięciu.",
                    label: "Zapisuj przycięte"
                },
                askBeforeSavingCropped: {
                    description: "Najpierw zapytaj zamiast automatycznie zachowywać przyciętą kopię.",
                    label: "Pytaj przed zapisaniem przyciętych"
                },
                transfer: {
                    description: "Przenieś swoje obrazy i sposób kadrowania każdego z nich na inne urządzenie.",
                    label: "Przenoszenie"
                },
                clearLibrary: {
                    description: "Usuń wszystkie zapisane obrazy.",
                    label: "Wyczyść bibliotekę"
                }
            },
            name: "BetterImageEditor",
            description: "Przechowuje półkę z twoimi obrazami w edytorze awatara i banera oraz zapamiętuje, jak przyciąłeś każdy z nich.",
            toast: {
                couldNotExportYour: "Nie udało się wyeksportować obrazów",
                couldNotReadThat: "Nie udało się odczytać tego pliku",
                thatPictureIsMissing: "Brakuje tego obrazu",
                thatPictureIsToo: "Ten obraz jest za duży dla Discorda",
                couldNotUseThat: "Nie udało się użyć tego obrazu",
                couldNotKeepThe: "Nie udało się zachować przyciętej kopii"
            },
            kind: {
                avatars: "awatary",
                banners: "banery",
                serverIcons: "ikony serwerów",
                serverBanners: "banery serwerów",
                eventCovers: "okładki wydarzeń",
                homeHeaders: "nagłówki strony głównej",
                decorations: "dekoracje",
                widgetCovers: "okładki widżetów",
                widgetImages: "obrazy widżetów"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "Dodaje możliwość anulowania wysłanych zaproszeń do znajomych z poziomu profili.",
            text: {
                cancelOutgoingFriendRequest: "Anuluj wysłane zaproszenie do znajomych"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "Data utworzenia musi być prawidłową datą.",
                cancel: "Anuluj",
                uploadClipFile: "Prześlij plik klipu",
                fileName: "Nazwa pliku",
                title: "Tytuł",
                epicMoment: "Epicki moment",
                message: "Wiadomość",
                checkOutThisClip: "Zobacz ten klip!",
                spoiler: "Spoiler",
                remix: "Remiks",
                thumbnail: "Miniatura",
                file: "Plik",
                selectFile: "Wybierz plik",
                parseClipMetadataFrom: "Odczytaj metadane klipu z pliku",
                selectFriends: "Wybierz znajomych",
                selectAGame: "Wybierz grę",
                customApplicationId: "Niestandardowy identyfikator aplikacji",
                createdAt: "Utworzono",
                participants: "Uczestnicy",
                onlyTagPeopleWho: "Oznaczaj tylko osoby, które były obecne i zgodziły się na udział w tym klipie.",
                gameApplication: "Gra/aplikacja",
                uploadClipFile2: "Prześlij plik klipu",
                uploading: "Przesyłanie",
                upload: "Prześlij",
                noFileSelected: "Nie wybrano pliku",
                couldNotPrepare: "Nie udało się przygotować wybranego pliku.",
                couldNotRead: "Nie udało się odczytać wybranego pliku.",
                couldNotUpdateMetadata: "Nie udało się zaktualizować metadanych klipu.",
                notCompatible: "Ten plik nie jest zgodny. Użyj klipu MP4 z wideo H.264 i dźwiękiem AAC.",
                uploadFailed: "Przesyłanie nie powiodło się.",
                noUploadSlot: "Discord nie zwrócił miejsca na przesłanie.",
                uploadCanceled: "Przesyłanie anulowane.",
                failedToUpload: "Nie udało się przesłać klipu.",
                selectClipFile: "Wybierz plik klipu",
                mp4Video: "Wideo MP4"
            },
            name: "ClipUpload",
            description: "Dodaje przycisk do przesyłania lokalnego pliku wideo jako klipu Discord.",
            toast: {
                checkingClipFile: "Sprawdzanie pliku klipu.",
                convertingClipFile: "Konwertowanie pliku klipu.",
                clipUploaded: "Klip przesłany."
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "Natywnie zwijane obszary kanałów, członków, przycisków czatu i obszaru użytkownika.",
            text: {
                collapsibleUi: "Zwijany interfejs",
                guildBar: "Pasek serwerów",
                channelList: "Lista kanałów",
                membersList: "Lista członków",
                messageButtons: "Przyciski wiadomości",
                titleBar: "Pasek tytułu",
                headerBar: "Pasek nagłówka",
                userArea: "Obszar użytkownika"
            },
            option: {
                detachUserArea: {
                    description: "Odłącz obszar użytkownika, aby można go było swobodnie przesuwać, gdy nie jest zwinięty.",
                    label: "Odłącz obszar użytkownika"
                },
                detachedUserAreaX: {
                    description: "Zapamiętuje pozycję x odłączonego obszaru użytkownika.",
                    label: "Odłączony obszar użytkownika X"
                },
                detachedUserAreaY: {
                    description: "Zapamiętuje pozycję y odłączonego obszaru użytkownika.",
                    label: "Odłączony obszar użytkownika Y"
                },
                guildBarCollapsed: {
                    description: "Zapamiętuje pasek serwerów jako zwinięty.",
                    label: "Pasek serwerów zwinięty"
                },
                channelListCollapsed: {
                    description: "Zapamiętuje listę kanałów jako zwiniętą.",
                    label: "Lista kanałów zwinięta"
                },
                membersListCollapsed: {
                    description: "Zapamiętuje listę członków jako zwiniętą.",
                    label: "Lista członków zwinięta"
                },
                chatButtonsCollapsed: {
                    description: "Zapamiętuje rząd przycisków wiadomości jako zwinięty.",
                    label: "Przyciski czatu zwinięte"
                },
                titleBarCollapsed: {
                    description: "Zapamiętuje pasek tytułu jako zwinięty.",
                    label: "Pasek tytułu zwinięty"
                },
                headerBarCollapsed: {
                    description: "Zapamiętuje pasek nagłówka jako zwinięty.",
                    label: "Pasek nagłówka zwinięty"
                },
                userAreaCollapsed: {
                    description: "Zapamiętuje obszar użytkownika jako zwinięty.",
                    label: "Obszar użytkownika zwinięty"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "Anuluj",
                name: "Name",
                response: "Odpowiedź",
                detectedArguments: "Wykryte argumenty",
                exampleCommandResponse: "Przykładowa odpowiedź polecenia:",
                exampleUsage: "Przykład użycia:",
                exampleOutput: "Przykładowy wynik:",
                viewArgumentsGuide: "Zobacz przewodnik po argumentach",
                editTag: "Edytuj tag",
                deleteTag: "Usuń tag",
                registeredTags: "Zarejestrowane tagi",
                createTag: "Utwórz tag",
                aTagWithThe: "Tag o nazwie **{{name}}** nie istnieje!",
                successfullyDeletedTheTag: "Pomyślnie usunięto tag **{{name}}**!",
                ephemeralReserved: "Nazwa argumentu \"ephemeral\" jest zarezerwowana i nie może zostać użyta.",
                createNewTag: "Utwórz nowy tag",
                editTagSubtitle: "Edytuj swoje własne polecenie.",
                createTagSubtitle: "Utwórz nowy tag, który zostanie zarejestrowany jako polecenie z ukośnikiem.",
                save: "Zapisz",
                create: "Utwórz",
                variablesHelp: "Twoja odpowiedź może zawierać zmienne w podwójnych nawiasach klamrowych, które staną się argumentami polecenia, na przykład",
                defaultValuesHelp: "Możesz określić argumenty z wartościami domyślnymi za pomocą znaku równości, na przykład",
                noTagsYet: "Ups! Nie ma jeszcze żadnych tagów, użyj `/tags create`, aby utworzyć tag!",
                nameAlreadyExists: "Tag o nazwie \"{{name}}\" już istnieje i zostanie nadpisany.",
                defaultValue: "(domyślnie: {{value}})"
            },
            name: "CustomCommands",
            description: "Pozwala tworzyć własne polecenia z ukośnikiem / tagi",
            option: {
                tagsList: {
                    label: "Lista tagów"
                }
            },
            command: {
                ephemeral: "Czy odpowiedź ma być widoczna tylko dla ciebie",
                tags: "Zarządzaj wszystkimi własnymi poleceniami",
                create: "Stwórz nowy tag",
                list: "Wyświetl wszystkie swoje tagi",
                delete: "Usuń tag według nazwy",
                tagName: "Nazwa tagu"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "Przesyłaj pliki do usług hostingowych, takich jak Zipline, Nest, S3 i WebDAV",
            toast: {
                fileTypeNotAllowed: "Typ pliku niedozwolony przez bieżący filtr",
                pleaseConfigureFileuploadSettings: "Najpierw skonfiguruj ustawienia FileUpload",
                sharexConfigIsValid: "Konfiguracja ShareX jest prawidłowa",
                importedSharexConfig: "Zaimportowano konfigurację ShareX",
                uploadSuccessfulButNo: "Przesłano, ale nie było adresu URL do skopiowania",
                uploadSuccessfulUrlCopied: "Przesłano, adres URL skopiowano do schowka",
                uploadSuccessfulButFailed: "Przesłano, ale nie udało się skopiować adresu URL",
                uploadSuccessful: "Przesłano pomyślnie",
                uploadSucceededWithServicelabels: "Przesłano przez {{serviceLabels_service}} po przełączeniu na zapasowy",
                apngToGifConversion: "Konwersja APNG na GIF nie powiodła się, przesyłanie jako APNG",
                uploadAlreadyInProgress: "Przesyłanie już trwa",
                uploadCancelled: "Anulowano przesyłanie",
                uploadFailedMessage: "Przesyłanie nie powiodło się: {{message}}",
                invalidSharexConfig: "Nieprawidłowa konfiguracja ShareX",
                failedToImportSharexConfig: "Nie udało się zaimportować konfiguracji ShareX"
            },
            text: {
                uploadToServicename: "Prześlij do {{serviceName}}",
                uploadToHost: "Prześlij na hosting",
                chooseFile: "Wybierz plik...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "Zgodny z S3",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "Niestandardowy przesyłacz ShareX",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 godzina",
                n12Hours: "12 godzin",
                n24Hours: "24 godziny",
                n72Hours: "72 godziny",
                corsProxy: "Proxy CORS",
                query: "Zapytanie",
                param: "Parametr",
                fakeLink: "Fałszywy link",
                embed: "Osadzenie",
                n30Seconds: "30 sekund",
                n1Minute: "1 minuta",
                n2Minutes: "2 minuty",
                n5Minutes: "5 minut",
                n10Minutes: "10 minut",
                dragHostsToReorder: "Przeciągnij hosty, aby zmienić kolejność prób zapasowych. Najpierw próbowany jest wybrany host, potem używana jest ta kolejność.",
                chooseWhereFileuploadSends: "Wybierz, gdzie FileUpload wysyła nowe pliki.",
                connectionDetailsForYour: "Dane połączenia z twoją instancją Zipline.",
                theUrlOfYour: "Adres URL twojej instancji Zipline",
                yourZiplineApiAuthorization: "Twój token autoryzacji API Zipline",
                yourZiplineApiToken: "Twój token API Zipline",
                folderIdForUploads: "Identyfikator folderu dla przesyłanych plików (pozostaw puste, aby nie używać folderu)",
                leaveEmptyForNo: "Pozostaw puste, aby nie używać folderu",
                connectionDetailsForE: "Dane połączenia do przesyłania na E-Z Host.",
                yourEZHost: "Twój klucz API E-Z Host",
                connectionDetailsForNest: "Dane połączenia do przesyłania na Nest.",
                yourNestApiAuthorization: "Twój token autoryzacji API Nest",
                yourNestApiToken: "Twój token API Nest",
                connectionDetailsForEncrypting: "Dane połączenia do przesyłania na Encrypting.host.",
                yourEncryptingHostApi: "Twój klucz API Encrypting.host",
                howEncryptingHostShould: "Jak Encrypting.host ma formatować zwracane linki.",
                selectUrlStyle: "Wybierz styl adresu URL",
                optionalTitleForEmbed: "Opcjonalny tytuł odpowiedzi w stylu osadzenia.",
                optionalTitle: "Opcjonalny tytuł",
                optionalColorForEmbed: "Opcjonalny kolor odpowiedzi w stylu osadzenia.",
                optionalColor: "Opcjonalny kolor",
                optionalFakeLinkValue: "Opcjonalna wartość fałszywego linku dla odpowiedzi w stylu fakelink.",
                optionalFakeLink: "Opcjonalny fałszywy link",
                connectionDetailsAndObject: "Dane połączenia i nazewnictwo obiektów dla twojego zasobnika.",
                s3CompatibleEndpointE: "Punkt końcowy zgodny z S3 (np. https://<accountid>.r2.cloudflarestorage.com)",
                bucketToUploadInto: "Zasobnik docelowy",
                awsRegionOrAuto: "Region AWS lub auto dla Cloudflare R2",
                s3CompatibleAccessKey: "Klucz dostępu zgodny z S3",
                yourAccessKeyId: "Twój identyfikator klucza dostępu",
                s3CompatibleSecretKey: "Tajny klucz zgodny z S3",
                yourSecretAccessKey: "Twój tajny klucz dostępu",
                optionalTemporaryCredentialToken: "Opcjonalny tymczasowy token poświadczeń",
                optionalSessionToken: "Opcjonalny token sesji",
                optionalPublicUrlBase: "Opcjonalny publiczny bazowy adres URL dla zwracanych linków",
                optionalFolderPrefixInside: "Opcjonalny folder/prefiks w zasobniku",
                useEndpointBucketKey: "Używaj formatu endpoint/bucket/klucz, zalecane dla R2.",
                optionalAccountBindingFor: "Opcjonalne powiązanie konta dla przesyłania na Catbox.",
                yourCatboxUserhashFor: "Twój userhash Catbox do powiązania konta; pozostaw puste dla anonimowego przesyłania.",
                yourCatboxUserhash: "Twój userhash Catbox",
                howLongUploadsAre: "Jak długo przechowywane są przesłane pliki",
                selectExpiry: "Wybierz wygaśnięcie",
                optionalAccountBindingFor2: "Opcjonalne powiązanie konta dla przesyłania na GoFile.",
                optionalGofileTokenTo: "Opcjonalny token GoFile do przesyłania na twoje konto.",
                optionalGofileToken: "Opcjonalny token GoFile",
                connectionDetailsForPixelvault: "Dane połączenia do przesyłania na PixelVault.",
                yourPixelvaultAuthorizationKey: "Twój klucz autoryzacji PixelVault.",
                yourPixelvaultUploadKey: "Twój klucz przesyłania PixelVault",
                optionalAccountBindingFor3: "Opcjonalne powiązanie konta dla przesyłania na PixelDrain.",
                optionalPixeldrainApiKey: "Opcjonalny klucz API PixelDrain do uwierzytelnionego przesyłania. Pozostaw puste dla anonimowego przesyłania.",
                yourPixeldrainApiKey: "Twój klucz API PixelDrain",
                pasteImportOrValidate: "Wklej, zaimportuj lub zweryfikuj konfigurację niestandardowego przesyłacza ShareX.",
                pasteYourSharexCustom: "Wklej JSON niestandardowego przesyłacza ShareX (.sxcu/.json). DestinationType musi zawierać FileUploader lub ImageUploader.",
                importFromFileOr: "Zaimportuj z pliku lub zweryfikuj wklejoną konfigurację",
                connectionDetailsForWebdav: "Dane połączenia z serwerami WebDAV (Nextcloud, Owncloud itp.).",
                baseWebdavUrlE: "Bazowy adres URL WebDAV (np. https://nextcloud.example.com/remote.php/dav/files/username)",
                optionalSubdirectoryOnThe: "Opcjonalny podkatalog na serwerze do przesyłania (np. uploads)",
                leaveEmptyForRoot: "Pozostaw puste dla katalogu głównego",
                selectYourWebdavServer: "Wybierz typ serwera WebDAV. Nextcloud i ownCloud utworzą publiczny link udostępniania. Ogólny zwraca bezpośredni adres URL pliku.",
                selectServerType: "Wybierz typ serwera",
                howToReturnThe: "Sposób zwracania publicznego linku. Strona udostępniania prowadzi do strony internetowej; Bezpośrednie pobieranie prowadzi prosto do pliku; Link Markdown opakowuje stronę w klikalną nazwę pliku.",
                selectShareLinkFormat: "Wybierz format linku",
                controlWhatFileuploadDoes: "Określ, co robi FileUpload, gdy host zwróci adres URL.",
                stripQueryParametersFrom: "Usuń parametry zapytania z adresu URL przesłanego pliku.",
                wrapUploadedVideoLinks: "Opakuj linki do przesłanych filmów usługą proxy osadzania, aby uzyskać lepsze podglądy w Discordzie.",
                chooseWhichEmbedProxy: "Wybierz usługę proxy osadzania dla linków do przesłanych filmów",
                selectAnEmbedProxy: "Wybierz usługę proxy osadzania",
                convertApngFilesTo: "Konwertuj pliki APNG do formatu GIF.",
                useTheOriginalFilename: "Używaj oryginalnej nazwy pliku zamiast nazywać przesyłane pliki upload.ext.",
                automaticallyCopyTheUploaded: "Automatycznie kopiuj adres URL przesłanego pliku do schowka.",
                onlyUseTheSelected: "Używaj tylko wybranego przesyłacza bez próbowania hostów zapasowych.",
                afterUploadInsertThe: "Po przesłaniu wstaw wynikowy adres URL w bieżącym polu czatu.",
                wrapInsertedUrlsIn: "Otaczaj wstawione adresy URL nawiasami ostrymi, aby uniknąć podglądu Discorda.",
                chooseWhenFileuploadTakes: "Wybierz, kiedy FileUpload przejmuje obsługę plików od Discorda.",
                useFileuploadWhenUploading: "Używaj FileUpload podczas przesyłania przez selektor plików Discorda.",
                useFileuploadOnlyFor: "Używaj FileUpload tylko dla plików większych niż twój obecny limit przesyłania Discorda.",
                manualDiscordFileSize: "Ręczny limit rozmiaru pliku Discorda w MB, używany, gdy automatyczne wykrywanie jest błędne. Pozostaw puste dla trybu automatycznego.",
                auto: "Automatycznie",
                commaSeparatedListOf: "Lista rozszerzeń oddzielonych przecinkami (np. png,jpg,gif). Pozostaw puste, aby zezwolić na wszystkie.",
                configureBrowserUploadProxying: "Skonfiguruj proxy i limity czasu przesyłania z przeglądarki.",
                corsProxyUsedFor: "Proxy CORS używane do przesyłania w przeglądarce. Pozostaw puste, aby użyć domyślnego proxy.",
                sourceCodeForThe: "Kod źródłowy domyślnego proxy CORS",
                maximumTimeToWait: "Maksymalny czas oczekiwania na próbę przesłania przed przełączeniem na zapasowy",
                selectTimeout: "Wybierz limit czasu",
                drag: "Przeciągnij",
                importSxcuJson: "Importuj .sxcu/.json",
                validate: "Zweryfikuj",
                resetToDefault: "Przywróć domyślne",
                progress: "{{percent}}% - {{transferred}} z {{total}}",
                cancel: "Anuluj"
            },
            option: {
                serviceType: {
                    description: "Wybrana usługa przesyłania",
                    label: "Typ usługi"
                },
                serviceUrl: {
                    description: "Adres URL usługi Zipline",
                    label: "Adres URL usługi"
                },
                ziplineToken: {
                    description: "Token uwierzytelniania Zipline",
                    label: "Token Zipline"
                },
                folderId: {
                    description: "Opcjonalny identyfikator folderu Zipline",
                    label: "Identyfikator folderu"
                },
                ezHostKey: {
                    description: "Klucz API E-Z Host",
                    label: "Klucz E-Z Host"
                },
                nestToken: {
                    description: "Token API Nest",
                    label: "Token Nest"
                },
                encryptingHostKey: {
                    description: "Klucz API Encrypting.host",
                    label: "Klucz Encrypting.host"
                },
                encryptingHostUrlStyle: {
                    description: "Styl adresu URL Encrypting.host",
                    label: "Styl URL Encrypting.host"
                },
                encryptingHostDomains: {
                    description: "Lista domen Encrypting.host w formacie JSON",
                    label: "Domeny Encrypting.host"
                },
                encryptingHostTitle: {
                    description: "Opcjonalny tytuł osadzenia Encrypting.host",
                    label: "Tytuł Encrypting.host"
                },
                encryptingHostColor: {
                    description: "Opcjonalny kolor osadzenia Encrypting.host",
                    label: "Kolor Encrypting.host"
                },
                encryptingHostFakelink: {
                    description: "Opcjonalny fałszywy link Encrypting.host",
                    label: "Fałszywy link Encrypting.host"
                },
                s3Endpoint: {
                    description: "Adres URL punktu końcowego zgodnego z S3",
                    label: "Punkt końcowy S3"
                },
                s3Bucket: {
                    description: "Nazwa zasobnika S3",
                    label: "Zasobnik S3"
                },
                s3Region: {
                    description: "Region S3 (użyj auto dla R2)",
                    label: "Region S3"
                },
                s3AccessKeyId: {
                    description: "Identyfikator klucza dostępu S3",
                    label: "ID klucza dostępu S3"
                },
                s3SecretAccessKey: {
                    description: "Tajny klucz dostępu S3",
                    label: "Tajny klucz dostępu S3"
                },
                s3SessionToken: {
                    description: "Opcjonalny token sesji S3",
                    label: "Token sesji S3"
                },
                s3PublicUrl: {
                    description: "Opcjonalny publiczny bazowy adres URL",
                    label: "Publiczny URL S3"
                },
                s3Prefix: {
                    description: "Opcjonalny prefiks kluczy obiektów S3",
                    label: "Prefiks S3"
                },
                s3ForcePathStyle: {
                    description: "Używaj adresów URL S3 w stylu ścieżki",
                    label: "Wymuś styl ścieżki S3"
                },
                litterboxExpiry: {
                    description: "Okres przechowywania Litterbox",
                    label: "Wygaśnięcie Litterbox"
                },
                catboxUserhash: {
                    description: "Userhash Catbox do powiązania konta",
                    label: "Userhash Catbox"
                },
                sharexConfig: {
                    description: "JSON niestandardowego przesyłacza ShareX",
                    label: "Konfiguracja ShareX"
                },
                disableFallbacks: {
                    description: "Wyłącz zapasowe usługi przesyłania",
                    label: "Wyłącz zapasowe"
                },
                autoSend: {
                    description: "Wstaw przesłany adres URL w polu czatu",
                    label: "Wysyłaj automatycznie"
                },
                autoFormat: {
                    description: "Otaczaj wstawiony adres URL nawiasami ostrymi",
                    label: "Automatyczne formatowanie"
                },
                bypassDiscordUpload: {
                    description: "Omijaj przesyłanie Discorda i używaj zamiast tego FileUpload.",
                    label: "Omijaj przesyłanie Discorda"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "Używaj FileUpload tylko wtedy, gdy pliki przekraczają limit rozmiaru.",
                    label: "Omijaj przesyłanie Discorda tylko powyżej limitu"
                },
                customDiscordFileSizeLimitMB: {
                    description: "Ręczny limit rozmiaru pliku Discorda w MB. 0 oznacza automatyczne wykrywanie.",
                    label: "Niestandardowy limit rozmiaru pliku Discorda (MB)"
                },
                gofileToken: {
                    description: "Opcjonalny token API GoFile",
                    label: "Token GoFile"
                },
                fallbackOrder: {
                    description: "Kolejność zapasowych przesyłaczy",
                    label: "Kolejność zapasowa"
                },
                pixelVaultKey: {
                    description: "Klucz przesyłania PixelVault",
                    label: "Klucz PixelVault"
                },
                pixelDrainKey: {
                    description: "Opcjonalny klucz API PixelDrain",
                    label: "Klucz PixelDrain"
                },
                uploadTimeoutMs: {
                    description: "Limit czasu przesyłania w milisekundach",
                    label: "Limit czasu przesyłania (ms)"
                },
                stripQueryParams: {
                    description: "Usuwaj parametry zapytania z przesłanych adresów URL",
                    label: "Usuń parametry zapytania"
                },
                embedProxyEnabled: {
                    description: "Przekazuj linki do przesłanych filmów przez usługę pomocniczą osadzania.",
                    label: "Proxy osadzania włączone"
                },
                embedProxyService: {
                    description: "Usługa pomocnicza osadzania opakowująca linki do przesłanych filmów.",
                    label: "Usługa proxy osadzania"
                },
                corsProxyUrl: {
                    description: "Adres URL proxy CORS używanego do przesyłania z przeglądarki",
                    label: "Adres URL proxy CORS"
                },
                apngToGif: {
                    description: "Konwertuj przesyłane APNG na GIF",
                    label: "APNG na GIF"
                },
                preserveOriginalFilename: {
                    description: "Zachowuj oryginalną nazwę pliku podczas przesyłania.",
                    label: "Zachowaj oryginalną nazwę pliku"
                },
                autoCopy: {
                    description: "Automatycznie kopiuj adres URL przesłanego pliku",
                    label: "Kopiuj automatycznie"
                },
                autoUploadPastedFiles: {
                    description: "Automatycznie przesyłaj pliki ze schowka na hosting obrazów podczas wklejania w polu czatu.",
                    label: "Automatycznie przesyłaj wklejone pliki"
                },
                webdavUrl: {
                    description: "Adres URL serwera WebDAV",
                    label: "Adres URL WebDAV"
                },
                webdavUsername: {
                    description: "Nazwa użytkownika WebDAV",
                    label: "Nazwa użytkownika WebDAV"
                },
                webdavPassword: {
                    description: "Hasło WebDAV lub token aplikacji",
                    label: "Hasło WebDAV"
                },
                webdavDirectory: {
                    description: "Opcjonalny podkatalog na serwerze WebDAV",
                    label: "Katalog WebDAV"
                },
                webdavServerType: {
                    description: "Typ serwera WebDAV",
                    label: "Typ serwera WebDAV",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "Ogólny WebDAV"
                },
                webdavShareType: {
                    description: "Format linku udostępniania WebDAV",
                    label: "Typ udostępniania WebDAV",
                    sharepage: "Strona udostępniania",
                    directdownload: "Bezpośrednie pobieranie",
                    markdown: "Link Markdown"
                },
                uploadAllowedFileTypes: {
                    description: "Lista dozwolonych rozszerzeń plików oddzielonych przecinkami (np. png,jpg,gif,mp4). Pozostaw puste, aby zezwolić na wszystkie pliki.",
                    label: "Dozwolone typy plików do przesyłania"
                },
                settingsComponent: {
                    description: "Ustawienia",
                    label: "Komponent ustawień"
                }
            },
            panel: {
                fallbackOrder: "Kolejność zapasowa",
                uploadService: "Usługa przesyłania",
                zipline: "Zipline",
                serviceUrl: "Adres URL usługi",
                ziplineToken: "Token Zipline",
                folderId: "Identyfikator folderu",
                eZHost: "E-Z Host",
                eZHostApiKey: "Klucz API E-Z Host",
                nest: "Nest",
                nestToken: "Token Nest",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Klucz API Encrypting.host",
                urlStyle: "Styl adresu URL",
                domainsJson: "Domeny (JSON)",
                embedTitle: "Tytuł osadzenia",
                embedColor: "Kolor osadzenia",
                fakeLink: "Fałszywy link",
                s3CompatibleStorage: "Magazyn zgodny z S3",
                s3EndpointUrl: "Adres URL punktu końcowego S3",
                bucketName: "Nazwa zasobnika",
                region: "Region",
                accessKeyId: "ID klucza dostępu",
                secretAccessKey: "Tajny klucz dostępu",
                sessionToken: "Token sesji",
                publicBaseUrl: "Publiczny bazowy URL",
                objectKeyPrefix: "Prefiks kluczy obiektów",
                usePathStyleEndpoint: "Używaj punktu końcowego w stylu ścieżki",
                catbox: "Catbox",
                catboxUserhash: "Userhash Catbox",
                litterboxExpiry: "Wygaśnięcie Litterbox",
                gofile: "GoFile",
                gofileToken: "Token GoFile",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "Klucz przesyłania PixelVault",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "Klucz API PixelDrain",
                sharexCustomUploader: "Niestandardowy przesyłacz ShareX",
                sharexCustomUploaderConfig: "Konfiguracja niestandardowego przesyłacza ShareX",
                sharexConfigActions: "Akcje konfiguracji ShareX",
                webdav: "WebDAV",
                serverUrl: "Adres URL serwera",
                username: "Nazwa użytkownika",
                passwordOrAppToken: "Hasło lub token aplikacji",
                passwordOrAppToken2: "hasło lub token aplikacji",
                uploadDirectory: "Katalog przesyłania",
                serverType: "Typ serwera",
                shareLinkFormat: "Format linku udostępniania",
                uploadBehavior: "Zachowanie przesyłania",
                stripQueryParameters: "Usuń parametry zapytania",
                useEmbedProxy: "Używaj proxy osadzania",
                embedProxyService: "Usługa proxy osadzania",
                convertApngToGif: "Konwertuj APNG na GIF",
                preserveOriginalFilename: "Zachowaj oryginalną nazwę pliku",
                autoCopyUrl: "Automatycznie kopiuj URL",
                disableFallbackUploaders: "Wyłącz zapasowe przesyłacze",
                insertUrlIntoChatInput: "Wstaw URL w pole czatu",
                formatInsertedUrl: "Formatuj wstawiony URL",
                discordIntegration: "Integracja z Discordem",
                bypassDiscordUploadButton: "Omijaj przycisk przesyłania Discorda",
                autoUploadPastedFiles: "Automatycznie przesyłaj wklejone pliki",
                respectDiscordFileSizeLimit: "Respektuj limit rozmiaru pliku Discorda",
                discordLimitOverrideMb: "Nadpisz limit Discorda (MB)",
                allowedFileTypes: "Dozwolone typy plików",
                network: "Sieć",
                corsProxyUrl: "Adres URL proxy CORS",
                defaultCorsProxySource: "Źródło domyślnego proxy CORS",
                uploadTimeout: "Limit czasu przesyłania",
                domainsJsonDescription: "Tablica JSON domen do użycia, na przykład [\"offensive\"]."
            },
            status: {
                cancelled: "Przesyłanie anulowane.",
                uploadingVia: "Przesyłanie przez {{service}}...",
                uploading: "Przesyłanie...",
                unknownError: "Nieznany błąd",
                startingVia: "Rozpoczynanie przesyłania przez {{service}}...",
                retryingWith: "Ponowna próba z {{service}} ({{attempt}}/{{total}})...",
                uploadedVia: "Pomyślnie przesłano przez {{service}}.",
                allFailed: "Wszystkie usługi przesyłania zawiodły. Ostatni błąd: {{error}}",
                fileReady: "Plik gotowy, rozpoczynanie przesyłania...",
                preparing: "Przygotowywanie przesyłania...",
                failed: "Przesyłanie nie powiodło się: {{message}}",
                timedOut: "Przekroczono czas przesyłania",
                serviceFailed: "{{service}} nie powiódł się: {{message}}",
                preparingFile: "Przygotowywanie {{name}}{{suffix}}..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "Ostatnia szerokość"
                },
                lastHeight: {
                    label: "Ostatnia wysokość"
                },
                lastCaptionMode: {
                    label: "Ostatni tryb podpisu"
                },
                lastCaptionText: {
                    label: "Ostatni tekst podpisu"
                },
                lastCaptionSize: {
                    label: "Ostatni rozmiar podpisu"
                },
                lastFontFamily: {
                    label: "Ostatnia rodzina czcionek"
                },
                lastBubbleTipBase: {
                    label: "Ostatnia podstawa wskaźnika dymka"
                },
                maxWidth: {
                    description: "Maksymalna szerokość automatycznego dopasowania.",
                    label: "Maks. szerokość"
                },
                maxHeight: {
                    description: "Maksymalna wysokość automatycznego dopasowania.",
                    label: "Maks. wysokość"
                }
            },
            name: "GifMaker",
            description: "Twórz GIF-y z podpisami z dowolnych multimediów na czacie lub w selektorze GIF.",
            text: {
                send: "Wyślij",
                export: "Eksportuj",
                makeGif: "Utwórz GIF",
                editGif: "Edytuj GIF",
                selectAFont: "Wybierz czcionkę...",
                enterCaption: "Wpisz podpis...",
                width: "Szerokość",
                height: "Wysokość",
                loadingFonts: "Wczytywanie czcionek...",
                captions: "Podpisy",
                text: "Tekst",
                font: "Czcionka",
                fontSize: "Rozmiar czcionki",
                tipBase: "Podstawa wskaźnika",
                dimensions: "Wymiary",
                generatingGif: "Generowanie GIF-a...",
                clickOnThePreview: "Kliknij podgląd, aby ustawić wskaźnik dymka",
                gifPreview: "Podgląd GIF"
            },
            captionMode: {
                caption: "Podpis",
                none: "Brak",
                speechbubble: "Dymek"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "Pozwala używać wyszukiwania GIF z Tenor lub Giphy zamiast Klipy",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "Dostawcy",
                providersCount: "Dostawcy: {{count}}"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "Nieprawidłowy adres URL",
                copiedResponseToClipboard: "Skopiowano odpowiedź do schowka!",
                issueFetchingUrl: "Problem z pobraniem adresu URL",
                copiedGitInfoTo: "Skopiowano informacje Git do schowka!",
                noUpdatesAvailable: "Brak dostępnych aktualizacji",
                enabledPlugin: "Pomyślnie włączono {{id}}",
                disabledPlugin: "Pomyślnie wyłączono {{id}}"
            },
            text: {
                openPlexcordTab: "Otwórz kartę Plexcord",
                openPluginTab: "Otwórz kartę wtyczek",
                openThemesTab: "Otwórz kartę motywów",
                openUpdaterTab: "Otwórz kartę aktualizatora",
                openCloudTab: "Otwórz kartę chmury",
                openBackupRestoreTab: "Otwórz kartę Kopia zapasowa i przywracanie",
                restartClient: "Uruchom ponownie klienta",
                openQuickCssFile: "Otwórz plik QuickCSS",
                openSettingsFolder: "Otwórz folder ustawień",
                openInGithub: "Otwórz w GitHubie",
                openInBrowser: "Otwórz w przeglądarce",
                togglePlugin: "Przełącz wtyczkę",
                enable: "Włącz",
                disable: "Wyłącz",
                quickFetch: "Szybkie pobieranie",
                copyGitInfo: "Kopiuj informacje Git",
                checkForUpdates: "Sprawdź aktualizacje",
                aPlexcordUpdateIs: "Dostępna jest aktualizacja Plexcord!",
                clickHereToView: "Kliknij tutaj, aby zobaczyć aktualizację",
                navigateToServer: "Przejdź do serwera",
                commandPalette: "Paleta poleceń",
                searchTheCommandPalette: "Przeszukaj paletę poleceń",
                multipleChoice: "Wielokrotny wybór",
                textInput: "Pole tekstowe",
                openDevTab: "Otwórz kartę deweloperską",
                enterUrlToFetch: "Wprowadź URL do pobrania (tylko GET)",
                typeAndPressEnter: "Wpisz i naciśnij Enter",
                recording: "Nagrywanie...",
                recordKeybind: "Nagraj skrót",
                enterUrl: "Wpisz adres URL"
            },
            option: {
                hotkey: {
                    description: "Skrót otwierający paletę poleceń.",
                    label: "Skrót"
                },
                allowMouseControl: {
                    description: "Pozwól myszy sterować paletą poleceń.",
                    label: "Zezwól na sterowanie myszą"
                }
            },
            name: "KeyboardNavigation",
            description: "Pozwala poruszać się po interfejsie za pomocą klawiatury."
        },
        lastActive: {
            name: "LastActive",
            description: "Wtyczka do przechodzenia do ostatniej aktywnej wiadomości twojej lub innego użytkownika na kanale/serwerze.",
            toast: {
                failedToFindMessages: "Nie udało się znaleźć wiadomości. Szczegóły w konsoli.",
                couldnTFindAny: "Nie znaleziono ostatnich wiadomości tego użytkownika.",
                channelInformationNotAvailable: "Informacje o kanale są niedostępne.",
                failedToJumpTo: "Nie udało się przejść do wiadomości. Szczegóły w konsoli."
            },
            text: {
                yourLastMessage: "Twoja ostatnia wiadomość",
                userSLastMessage: "Ostatnia wiadomość użytkownika"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "Usuń tag",
                mustBeGreaterThan: "Musi być >{{value}}",
                maxResolutionTooLow: "Maksymalna rozdzielczość nie może być niższa niż {{value}}",
                maxResolutionRound: "Maksymalna rozdzielczość musi kończyć się na 0, gdy włączone jest zaokrąglanie rozdzielczości"
            },
            name: "LimitlessScreenshare",
            description: "Dodaje suwak rozdzielczości i fps udostępniania ekranu.",
            option: {
                maxFPS: {
                    description: "Maks. FPS dla suwaka",
                    label: "Maks. FPS"
                },
                maxResolution: {
                    description: "Maks. rozdzielczość dla suwaka",
                    label: "Maks. rozdzielczość"
                },
                roundResolution: {
                    description: "Zaokrąglaj rozdzielczość do najbliższych 10p",
                    label: "Zaokrąglaj rozdzielczość"
                },
                resolutions: {
                    label: "Rozdzielczości"
                },
                fpss: {
                    label: "Wartości FPS"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "Ukryj podglądy wiadomości i znaczniki czasu dla wyciszonych rozmów prywatnych i grupowych.",
                    label: "Ukryj wyciszone"
                }
            },
            name: "MessagePeek",
            description: "Pokazuje podgląd i znacznik czasu ostatniej wiadomości na liście wiadomości prywatnych.",
            text: {
                officialDiscordMessage: "Oficjalna wiadomość Discorda",
                sentGif: "wysłał(a) GIF-a",
                voiceMessage: "wiadomość głosowa",
                membersCount: "Członkowie: {{count}}",
                you: "Ty"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "Automatycznie tłumacz wiadomości na swój język z buforowaniem, przełącznikami dla kanałów i innymi opcjami.",
            option: {
                targetLanguage: {
                    description: "Kod języka docelowego tłumaczeń (np. en, es, fr, de, ja).",
                    label: "Język docelowy"
                },
                excludedLanguages: {
                    description: "Kody języków wykluczonych z tłumaczenia (np. en, es, fr, de, ja).",
                    label: "Wykluczone języki"
                },
                confidenceRequirement: {
                    description: "Minimalna pewność (od 0 do 1) wymagana do pokazania tłumaczenia.",
                    label: "Wymagana pewność"
                },
                autoTranslate: {
                    description: "Automatycznie tłumacz wiadomości, gdy się pojawiają.",
                    label: "Automatyczne tłumaczenie"
                },
                skipOwnMessages: {
                    description: "Nie tłumacz własnych wiadomości.",
                    label: "Pomijaj własne wiadomości"
                },
                skipBotMessages: {
                    description: "Nie tłumacz wiadomości botów.",
                    label: "Pomijaj wiadomości botów"
                },
                ignoredGuilds: {
                    description: "Lista identyfikatorów serwerów oddzielonych przecinkami, na których nie tłumaczyć.",
                    label: "Ignorowane serwery"
                },
                ignoredChannels: {
                    description: "Lista identyfikatorów kanałów oddzielonych przecinkami, na których nie tłumaczyć.",
                    label: "Ignorowane kanały"
                },
                ignoredUsers: {
                    description: "Lista identyfikatorów użytkowników oddzielonych przecinkami, których nie tłumaczyć.",
                    label: "Ignorowani użytkownicy"
                },
                showIndicator: {
                    description: "Dodawaj mały wskaźnik (przetłumaczono) do przetłumaczonych wiadomości.",
                    label: "Pokaż wskaźnik"
                },
                showOriginal: {
                    description: "Pokaż tekst oryginalny i przetłumaczony.",
                    noorig: "Nie pokazuj oryginału."
                }
            },
            text: {
                showOriginalInSubtext: "Pokaż oryginał w tekście pomocniczym",
                showOriginalMessageTranslation: "Pokaż oryginalną wiadomość, tłumaczenie w tekście pomocniczym",
                translatedFrom: "przetłumaczono z: {{lang}}"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "Usunięto paczkę naklejek",
                stickerPackAdded: "Dodano paczkę naklejek",
                stickerPacksAdded: "Dodano paczki naklejek",
                stickerPacksExported: "Wyeksportowano paczki naklejek",
                newStickerPacksAlready: "Nowe paczki naklejek już istnieją, migracja niepotrzebna",
                oldStickerPacksNot: "Nie znaleziono starych paczek naklejek, nie ma czego migrować",
                migrationFailedTitleId: "Migracja nie powiodła się: {{title}} ({{id}})",
                stickerPackMigrationComplete: "Ukończono migrację paczek naklejek",
                failedToUploadSticker: "Nie udało się przesłać naklejki"
            },
            text: {
                stickerPackUrl: "Adres URL paczki naklejek",
                pasteHtmlHere: "Wklej tutaj HTML",
                delete: "Usuń",
                addStickerPackFrom: "Dodaj paczkę naklejek z adresu URL",
                insert: "Wstaw",
                addStickerPackFrom2: "Dodaj paczkę naklejek z HTML",
                insertFromHtml: "Wstaw z HTML",
                addStickerPackFrom3: "Dodaj paczkę naklejek z pliku",
                miscTools: "Różne narzędzia",
                exportStickerPacks: "Eksportuj paczki naklejek",
                migrateFromV1: "Migruj z v1",
                stickersManagement: "Zarządzanie naklejkami",
                theRegionLineRecognized: "Region rozpoznany przez LINE może różnić się od twojego z powodu używanego proxy CORS.",
                openStickerPackFile: "Otwórz plik paczki naklejek",
                stickers: "Naklejki+",
                categoryTitle: "Kategoria, {{title}}",
                searchStickers: "Szukaj naklejek",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext jest niezdefiniowany",
                recentlyUsed: "Ostatnio używane",
                addFromUrl: "Dodaj z URL",
                addFromHtml: "Dodaj z HTML",
                addFromFile: "Dodaj z pliku",
                misc: "Różne",
                invalidUrl: "Nieprawidłowy URL",
                lineOnly: "Obecnie obsługiwane są tylko naklejki/emoji LINE.",
                getTelegramStickers: "Pobierz naklejki z Telegrama za pomocą",
                htmlFallbackHelp: "Jeśli podczas dodawania paczki naklejek wystąpią błędy, możesz spróbować dodać ją za pomocą kodu źródłowego HTML strony paczki.",
                htmlFallbackApplies: "Dotyczy to naklejek zablokowanych regionalnie / systemowo itp."
            },
            option: {
                promptToUpload: {
                    description: "Wstawia naklejkę do paska czatu zamiast od razu ją wysyłać",
                    label: "Pytaj przed przesłaniem"
                },
                packs: {
                    description: "Paczki",
                    label: "Paczki"
                }
            },
            name: "MoreStickers",
            description: "Dodaje paczki naklejek z innych platform społecznościowych. (np. LINE)"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "Backend scrobblera do użycia.",
                    label: "Backend scrobblera"
                },
                instanceBaseURL: {
                    description: "Bazowy adres URL twojej instancji ListenBrainz.",
                    label: "Bazowy URL instancji"
                },
                instanceAPIBaseUrl: {
                    description: "Bazowy adres URL twojego API ListenBrainz.",
                    label: "Bazowy URL API instancji"
                },
                apiKey: {
                    description: "Klucz API Last.fm. Nie jest wymagany, ale zdecydowanie zalecany, aby uniknąć limitów wspólnego klucza",
                    label: "Klucz API"
                },
                username: {
                    description: "Nazwa użytkownika",
                    label: "Nazwa użytkownika"
                },
                shareUsername: {
                    description: "Pokaż link do profilu scrobblera",
                    label: "Udostępniaj nazwę użytkownika"
                },
                clickableLinks: {
                    description: "Zamień nazwy utworu, wykonawcy i albumu w klikalne linki",
                    label: "Klikalne linki"
                },
                hideWithSpotify: {
                    description: "Ukryj aktywność, gdy działa Spotify",
                    label: "Ukryj przy Spotify"
                },
                hideWithActivity: {
                    description: "Ukryj, jeśli masz inną aktywność",
                    label: "Ukryj przy aktywności"
                },
                statusName: {
                    description: "Własny tekst statusu. Możesz użyć zmiennych: {artist} | {album} | {title}",
                    label: "Nazwa statusu"
                },
                statusDisplayType: {
                    description: "Pokaż nazwę utworu / wykonawcy na liście członków",
                    off: "Nie pokazuj (pokazuje ogólny komunikat słuchania)"
                },
                nameFormat: {
                    description: "Pokaż nazwę utworu i wykonawcy w nazwie statusu",
                    statusName: "Użyj własnej nazwy statusu"
                },
                missingArt: {
                    description: "Gdy brakuje albumu lub okładki",
                    logo: "Użyj dużego logo scrobblera"
                },
                showLogo: {
                    description: "Pokaż logo usługi scrobblera przy okładce albumu",
                    label: "Pokaż logo scrobblera"
                },
                showAlbumCover: {
                    description: "Pokaż okładkę albumu. Wyłączenie wyświetli symbol zastępczy. Przydatne, jeśli twoja muzyka ma nieodpowiednie okładki",
                    label: "Pokaż okładkę albumu"
                },
                useListeningStatus: {
                    description: "Pokazuj status „Słucha” zamiast „Gra”"
                }
            },
            name: "MusicRichPresence",
            description: "Rich Presence dla Last.FM/Listenbrainz",
            text: {
                showArtistName: "Pokaż nazwę wykonawcy",
                showTrackName: "Pokaż nazwę utworu",
                useMusicServiceName: "Użyj nazwy usługi muzycznej (w razie braku własny tekst statusu)",
                useFormatArtistSong: "Użyj formatu „wykonawca - utwór”",
                useFormatSongArtist: "Użyj formatu „utwór - wykonawca”",
                useArtistNameOnly: "Użyj tylko nazwy wykonawcy",
                useSongNameOnly: "Użyj tylko nazwy utworu",
                useAlbumNameFalls: "Użyj nazwy albumu (jeśli utwór nie ma albumu, własny tekst statusu)",
                useGenericPlaceholder: "Użyj ogólnego symbolu zastępczego",
                lastFm: "Last.FM",
                howToCreateAn: "Jak utworzyć klucz API",
                set: "Ustaw",
                applicationName: "Nazwa aplikacji",
                applicationDescription: "Opis aplikacji",
                toAnythingAndLeave: "na dowolne wartości, a resztę pozostaw pustą.",
                createApiKey: "Utwórz klucz API",
                invalidInstance: "Nieprawidłowa instancja zgodna z ListenBrainz",
                provideBoth: "Podaj zarówno",
                apiBaseUrl: "Bazowy URL API",
                andThe: "jak i",
                instanceBaseUrl: "bazowy URL instancji",
                forYourCustomInstance: "Twojej własnej instancji ListenBrainz albo wróć do ListenBrainz/Last.FM",
                allowConnectTitle: "Zezwól Plexcordowi na połączenie z instancją ListenBrainz",
                allowConnectBody: "Aby używać własnej instancji ListenBrainz, musisz najpierw zezwolić Plexcordowi na połączenie z nią.",
                allowInstance: "Zezwól na instancję",
                listenBrainzCompatible: "Zgodny z ListenBrainz (własny serwer)",
                and: "i"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "Wyłącz wklejanie środkowym przyciskiem w Linuksie - tylko Linux"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "Port połączenia",
                    label: "Port"
                }
            },
            name: "OrbolayBridge",
            description: "Wtyczka pomostowa łącząca Orbolay z Discordem",
            toast: {
                connectedToOrbolayServer: "Połączono z serwerem Orbolay"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "Służy do udzielania wsparcia i naprawiania awarii powodowanych przez Discorda.",
            text: {
                restartRequired: "Wymagane ponowne uruchomienie",
                restartNow: "Uruchom ponownie teraz",
                later: "Później",
                wouldYouLikeTo: "Czy chcesz uruchomić ponownie teraz?",
                somePluginsRequireA: "Niektóre wtyczki wymagają ponownego uruchomienia, aby całkowicie je wyłączyć.",
                alreadyEnabled: "{{plugin}} jest już włączony",
                alreadyDisabled: "{{plugin}} jest już wyłączony",
                disablePlugin: "Wyłącz {{plugin}}",
                enablePlugin: "Włącz {{plugin}}",
                errorStopping: "Błąd podczas zatrzymywania wtyczki {{plugin}}",
                errorStarting: "Błąd podczas uruchamiania wtyczki {{plugin}}"
            },
            toast: {
                failedToTolowercase: "Nie udało się: {{toLowerCase}}",
                aRestartIsRequired: "Aby zmiana zadziałała, wymagane jest ponowne uruchomienie!"
            },
            card: {
                notOnThisVersion: "Tej wtyczki nie ma w tej wersji Plexcorda. Spróbuj zaktualizować!"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "Usuwa sekcję aktywności nad listą członków",
                    label: "Usuń sekcję aktywności"
                },
                showYourOwnActivityButtons: {
                    description: "Discord z jakiegoś powodu ukrywa twoje własne przyciski aktywności",
                    label: "Pokaż własne przyciski aktywności"
                },
                refreshSlashCommands: {
                    description: "Odświeża polecenia z ukośnikiem, aby pokazać nowe bez ponownego uruchamiania klienta.",
                    label: "Odśwież polecenia z ukośnikiem"
                },
                forceRoleIcon: {
                    description: "Wymusza wyświetlanie ikon ról obok wiadomości w trybie kompaktowym",
                    label: "Wymuś ikonę roli"
                },
                accountStandingButton: {
                    description: "Pokaż przycisk stanu konta na pasku nagłówka",
                    label: "Przycisk stanu konta"
                },
                jsonGateway: {
                    description: "Wymusza JSON przy ponownym łączeniu z bramą",
                    label: "Brama JSON"
                },
                enableAutoCorrect: {
                    description: "Dodaje do menu kontekstowego pola czatu przełącznik natywnej autokorekty i zamiany tekstu",
                    label: "Włącz autokorektę"
                },
                autoCorrect: {
                    description: "Używaj natywnej autokorekty i zamiany tekstu w edytorach wiadomości",
                    label: "Autokorekta"
                },
                disableHolidayNotifications: {
                    label: "Wyłącz świąteczne powiadomienia",
                    description: "Zawsze używaj domyślnych dźwięków powiadomień Discorda"
                },
                showAllBadges: {
                    label: "Pokaż wszystkie odznaki",
                    description: "Pokazuje wszystkie odznaki profilu zamiast zwijać resztę do +n"
                }
            },
            text: {
                allGood: "Wszystko w porządku!",
                limited: "Ograniczone",
                veryLimited: "Bardzo ograniczone",
                atRisk: "Zagrożone",
                suspended: "Zawieszone",
                slashCommandsRefreshedSuccessfully: "Pomyślnie odświeżono polecenia z ukośnikiem.",
                failedToRefreshCommands: "Nie udało się odświeżyć poleceń. Szczegóły w konsoli.",
                enableAutocorrect: "Włącz autokorektę"
            },
            command: {
                refreshCommands: "Odśwież polecenia z ukośnikiem"
            },
            description: "Zbiór drobnych poprawek i usprawnień dla Discorda."
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "Odblokuj opcje jakości transmisji niezależnie od statusu Nitro",
                    label: "Odblokuj opcje jakości"
                },
                removeResolutionCap: {
                    description: "Zezwól na rozdzielczości powyżej 720p przy 60 fps",
                    label: "Usuń limit rozdzielczości"
                },
                forceEncoderSettings: {
                    description: "Wymuś na koderze użycie skonfigurowanej rozdzielczości/fps",
                    label: "Wymuś ustawienia kodera"
                },
                preventDownscale: {
                    description: "Zapobiegaj obniżaniu rozdzielczości transmisji przez Discorda",
                    label: "Zapobiegaj obniżaniu"
                },
                keyframeInterval: {
                    description: "Odstęp klatek kluczowych w ms (0 = domyślny kodera, 5000 = co 5 s)",
                    label: "Odstęp klatek kluczowych"
                },
                minBitrate: {
                    description: "Minimalna przepływność kodera w kb/s",
                    label: "Min. przepływność"
                },
                raiseBitrateCaps: {
                    description: "Podnieś domyślne limity przepływności na komputerze (cel 600 kb/s → 10 Mb/s, maks. 3,5 Mb/s → 40 Mb/s)",
                    label: "Podnieś limity przepływności"
                },
                preventFramerateReduction: {
                    description: "Zapobiegaj obniżaniu liczby klatek transmisji przez Discorda, gdy nie mówisz",
                    label: "Zapobiegaj obniżaniu liczby klatek"
                },
                bitsPerPixelPct: {
                    description: "Procent bitów na piksel dla docelowej przepływności (8 = 0,08 bpp, 12 = 0,12 bpp)",
                    label: "Bity na piksel (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "Próbuje poprawić jakość transmisji w Plextron, łatając koder i ograniczenia jakości Discorda."
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "Pokazuje czas każdej reakcji w oknie reakcji.",
            text: {
                userAtTime: "{{user}} o {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "Użyj własnej nazwy statusu",
                useFormatArtistSong: "Użyj formatu „wykonawca - utwór”",
                useFormatSongArtist: "Użyj formatu „utwór - wykonawca”",
                useArtistNameOnly: "Użyj tylko nazwy wykonawcy",
                useSongNameOnly: "Użyj tylko nazwy utworu",
                useAlbumName: "Użyj nazwy albumu",
                useLargeStatsFm: "Użyj dużego logo Stats.fm",
                useGenericPlaceholder: "Użyj ogólnego symbolu zastępczego",
                seriesMovieName: "Nazwa serialu/filmu",
                seriesEpisodeTrackMovie: "Serial - nazwa odcinka/utworu/filmu",
                custom: "Niestandardowy",
                seriesCover: "Okładka serialu",
                episodeCover: "Okładka odcinka",
                season1Episode1: "Sezon 1 odcinek 1",
                off: "Wyłączone",
                listening: "Słucha",
                playing: "Gra",
                streaming: "Transmituje",
                watching: "Ogląda",
                none: "Brak",
                navidromeInstanceExposesServer: "Instancja Navidrome (ujawnia adres URL serwera. Jednorazowe uwierzytelnienie wysłane.)",
                lastFmApiSends: "API Last.fm (wysyła metadane do last.fm)",
                donTShowShows: "Nie pokazuj (pokazuje ogólny komunikat słuchania)",
                showStateLineContent: "Pokaż zawartość wiersza stanu",
                showDetailsLineContent: "Pokaż zawartość wiersza szczegółów",
                displayYourCurrentlyPlaying: "Wyświetlaj odtwarzane audiobooki jako Rich Presence na Discordzie. Wymaga adresu URL, nazwy użytkownika i hasła serwera AudioBookShelf.",
                audiobookshelfServerUrl: "Adres URL serwera AudioBookShelf.",
                audiobookshelfUsername: "Nazwa użytkownika AudioBookShelf.",
                audiobookshelfPassword: "Hasło AudioBookShelf.",
                connectsToTosuVia: "Łączy się z tosu przez WebSocket na porcie 24050. Konfiguracja nie jest potrzebna, upewnij się tylko, że tosu działa razem z osu!.",
                showWhatYouRe: "Pokazuj, czego słuchasz, przez stats.fm. Historia słuchania musi być publiczna.",
                statsFmUsername: "Nazwa użytkownika Stats.fm.",
                customStatusText: "Własny tekst statusu.",
                statsFm: "Stats.fm",
                nameFormat: "Format nazwy.",
                fallbackWhenArtIs: "Zastępstwo, gdy brakuje okładki.",
                showListeningStatus: "Pokaż status słuchania.",
                showStatsFmLogo: "Pokaż logo Stats.fm obok okładki albumu.",
                showLinkToStats: "Pokaż link do profilu stats.fm.",
                showLinkToSong: "Pokaż link do utworu na stats.fm.",
                hideStatsFmPresence: "Ukryj aktywność stats.fm, gdy działa Spotify.",
                hideStatsFmPresence2: "Ukryj aktywność stats.fm, gdy działa zewnętrzne RPC.",
                disableDownloadingAlbumArt: "Wyłącz pobieranie okładek albumów.",
                showWhatYouRe2: "Pokazuj, co odtwarzasz w Jellyfin. Aby uzyskać klucz API: otwórz interfejs webowy Jellyfin, naciśnij F12, aby otworzyć narzędzia deweloperskie, przejdź do karty Sieć, znajdź żądania do serwera, odszukaj nagłówek Authorization (Ctrl+F, aby wyszukać) — potrzebna jest część z Token='this'. Identyfikator użytkownika znajdziesz w adresie URL strony profilu.",
                jellyfinServerUrl: "Adres URL serwera Jellyfin.",
                jellyfinApiKey: "Klucz API Jellyfin.",
                authorization: "Authorization",
                jellyfinUserId: "Identyfikator użytkownika Jellyfin.",
                userIdFromProfile: "Identyfikator użytkownika z adresu URL profilu",
                nameDisplayFormat: "Format wyświetlania nazwy.",
                customNameTemplate: "Własny szablon nazwy.",
                nameOnJellyfin: "{name} w Jellyfin",
                coverTypeForTv: "Typ okładki dla seriali.",
                episodeNumberFormat: "Format numeru odcinka.",
                overrideRichPresenceType: "Nadpisz typ Rich Presence.",
                showEpisodeNameAfter: "Pokaż nazwę odcinka po informacjach o sezonie/odcinku.",
                showPresenceWhenMedia: "Pokazuj aktywność, gdy multimedia są wstrzymane.",
                hideMediaDetails: "Ukryj szczegóły multimediów.",
                discordRichPresenceFor: "Rich Presence Discorda dla Gensokyo Radio. Po prostu włącz i słuchaj!",
                refreshIntervalInSeconds: "Interwał odświeżania w sekundach.",
                showWhatYouRe3: "Pokazuj, czego słuchasz, przez Navidrome.",
                navidromeServerUrlMust: "Adres URL serwera Navidrome (musi to być domena publiczna, np. https://navidrome.example.com).",
                navidromeUsername: "Nazwa użytkownika Navidrome.",
                navidromePassword: "Hasło Navidrome.",
                optionalDiscordApplicationClient: "Opcjonalny identyfikator klienta aplikacji Discord.",
                howToFetchAlbum: "Sposób pobierania okładek albumów.",
                optionalProvideYourOwn: "Opcjonalnie: podaj własny klucz API Last.fm (pozostaje domyślny, jeśli puste).",
                showNavidromeLogoIn: "Pokaż logo Navidrome w prawym dolnym rogu okładki.",
                showAlbumNameIn: "Pokaż nazwę albumu w aktywności.",
                whichTypeOfActivity: "Jaki typ aktywności wyświetlać.",
                showTheStateDetails: "Pokaż zawartość wiersza stanu / szczegółów na liście członków",
                hideRichPresenceWhen: "Ukryj Rich Presence, gdy muzyka jest wstrzymana (zamiast pokazywać stoper)",
                theListeningToText: "Tekst „Słucha” (np. {artist})",
                navidrome: "Navidrome",
                theMainLineShowing: "Główny wiersz pokazujący odtwarzany utwór (np. {song})",
                song: "{song}",
                theLineBelowThe: "Wiersz pod nazwą utworu (np. {artist})",
                artist: "{artist}",
                theAlbumLineE: "Wiersz albumu (np. {album})",
                album: "{album}",
                enableTabLabelsCurrenttab: "Włącz aktywność {{TAB_LABELS_currentTab}}.",
                statsFmProfile: "Profil Stats.fm",
                viewSong: "Zobacz utwór",
                showArtistName: "Pokaż nazwę wykonawcy",
                showTrackName: "Pokaż nazwę utworu",
                enterValue: "Wpisz wartość"
            },
            name: "RichPresence",
            description: "Wspólne centrum Rich Presence dla AudioBookShelf, osu!, stats.fm, Jellyfin, Navidrome i Gensokyo Radio.",
            toast: {
                audiobookshelfRpcIsNot: "RPC AudioBookShelf nie jest skonfigurowane.",
                jellyfinRpcIsNot: "RPC Jellyfin nie jest skonfigurowane.",
                jellyfinReturnedAnInvalid: "Jellyfin zwrócił nieprawidłową odpowiedź. Klucz API może być błędny."
            },
            option: {
                enabled: {
                    description: "Włącz usługi Rich Presence.",
                    label: "Włączone"
                },
                serviceSettings: {
                    description: "Konfiguracja usługi.",
                    label: "Ustawienia usługi"
                },
                abs_enabled: {
                    description: "Włącz aktywność AudioBookShelf.",
                    label: "AudioBookShelf włączone"
                },
                tosu_enabled: {
                    description: "Włącz aktywność osu! (tosu).",
                    label: "osu! (tosu) włączone"
                },
                sfm_enabled: {
                    description: "Włącz aktywność stats.fm.",
                    label: "Stats.fm włączone"
                },
                jf_enabled: {
                    description: "Włącz aktywność Jellyfin.",
                    label: "Jellyfin włączone"
                },
                gr_enabled: {
                    description: "Włącz aktywność Gensokyo Radio.",
                    label: "Gensokyo Radio włączone"
                },
                nd_enabled: {
                    description: "Włącz aktywność Navidrome.",
                    label: "Navidrome włączone"
                },
                abs_serverUrl: {
                    description: "Adres URL serwera AudioBookShelf.",
                    label: "URL serwera AudioBookShelf"
                },
                abs_username: {
                    description: "Nazwa użytkownika AudioBookShelf.",
                    label: "Nazwa użytkownika AudioBookShelf"
                },
                abs_password: {
                    description: "Hasło AudioBookShelf.",
                    label: "Hasło AudioBookShelf"
                },
                sfm_username: {
                    description: "Nazwa użytkownika Stats.fm.",
                    label: "Nazwa użytkownika Stats.fm"
                },
                sfm_shareUsername: {
                    description: "Pokaż link do profilu stats.fm.",
                    label: "Stats.fm: udostępniaj nazwę użytkownika"
                },
                sfm_shareSong: {
                    description: "Pokaż link do utworu na stats.fm.",
                    label: "Stats.fm: udostępniaj utwór"
                },
                sfm_hideWithSpotify: {
                    description: "Ukryj aktywność stats.fm, gdy działa Spotify.",
                    label: "Stats.fm: ukryj przy Spotify"
                },
                sfm_hideWithExternalRPC: {
                    description: "Ukryj aktywność stats.fm, gdy działa zewnętrzne RPC.",
                    label: "Stats.fm: ukryj przy zewnętrznym RPC"
                },
                sfm_statusName: {
                    description: "Własny tekst statusu.",
                    label: "Stats.fm: nazwa statusu"
                },
                sfm_nameFormat: {
                    description: "Format nazwy.",
                    label: "Stats.fm: format nazwy",
                    statusName: "Użyj własnej nazwy statusu",
                    artistFirst: "Użyj formatu „wykonawca - utwór”",
                    songFirst: "Użyj formatu „utwór - wykonawca”",
                    artistOnly: "Użyj tylko nazwy wykonawcy",
                    songOnly: "Użyj tylko nazwy utworu",
                    albumName: "Użyj nazwy albumu"
                },
                sfm_useListeningStatus: {
                    description: "Pokaż status słuchania.",
                    label: "Stats.fm: użyj statusu słuchania"
                },
                sfm_missingArt: {
                    description: "Zastępstwo, gdy brakuje okładki.",
                    label: "Stats.fm: brak okładki",
                    statsFmLogo: "Użyj dużego logo Stats.fm",
                    placeholder: "Użyj ogólnego symbolu zastępczego"
                },
                sfm_showLogo: {
                    description: "Pokaż logo Stats.fm obok okładki albumu.",
                    label: "Stats.fm: pokaż logo"
                },
                sfm_alwaysHideArt: {
                    description: "Wyłącz pobieranie okładek albumów.",
                    label: "Stats.fm: zawsze ukrywaj okładkę"
                },
                jf_serverUrl: {
                    description: "Adres URL serwera Jellyfin.",
                    label: "URL serwera Jellyfin"
                },
                jf_apiKey: {
                    description: "Klucz API Jellyfin.",
                    label: "Klucz API Jellyfin"
                },
                jf_userId: {
                    description: "Identyfikator użytkownika Jellyfin.",
                    label: "ID użytkownika Jellyfin"
                },
                jf_nameDisplay: {
                    description: "Format wyświetlania nazwy.",
                    label: "Jellyfin: wyświetlanie nazwy",
                    default: "Nazwa serialu/filmu",
                    full: "Serial - nazwa odcinka/utworu/filmu",
                    custom: "Niestandardowy"
                },
                jf_customName: {
                    description: "Własny szablon nazwy.",
                    label: "Jellyfin: własna nazwa"
                },
                jf_coverType: {
                    description: "Typ okładki dla seriali.",
                    label: "Jellyfin: typ okładki",
                    series: "Okładka serialu",
                    episode: "Okładka odcinka"
                },
                jf_episodeFormat: {
                    description: "Format numeru odcinka.",
                    label: "Jellyfin: format odcinka",
                    long: "S01E01",
                    fulltext: "Sezon 1 odcinek 1"
                },
                jf_showEpisodeName: {
                    description: "Pokaż nazwę odcinka po informacjach o sezonie/odcinku.",
                    label: "Jellyfin: pokaż nazwę odcinka"
                },
                jf_overrideType: {
                    description: "Nadpisz typ Rich Presence.",
                    label: "Jellyfin: nadpisz typ",
                    off: "Wyłączone",
                    listening: "Słucha",
                    playing: "Gra",
                    streaming: "Transmituje",
                    watching: "Ogląda"
                },
                jf_showPausedState: {
                    description: "Pokazuj aktywność, gdy multimedia są wstrzymane.",
                    label: "Jellyfin: pokaż stan wstrzymania"
                },
                jf_privacyMode: {
                    description: "Ukryj szczegóły multimediów.",
                    label: "Jellyfin: tryb prywatności"
                },
                gr_refreshInterval: {
                    description: "Interwał odświeżania w sekundach.",
                    label: "Gensokyo Radio: interwał odświeżania"
                },
                nd_serverUrl: {
                    description: "Adres URL serwera Navidrome (np. https://navidrome.example.com)",
                    label: "URL serwera Navidrome"
                },
                nd_username: {
                    description: "Nazwa użytkownika Navidrome",
                    label: "Nazwa użytkownika Navidrome"
                },
                nd_password: {
                    description: "Hasło Navidrome",
                    label: "Hasło Navidrome"
                },
                nd_clientId: {
                    description: "Opcjonalny identyfikator klienta aplikacji Discord",
                    label: "Navidrome: identyfikator klienta"
                },
                nd_showSmallImage: {
                    description: "Pokaż logo Navidrome w prawym dolnym rogu okładki.",
                    label: "Navidrome: pokaż mały obraz"
                },
                nd_showAlbum: {
                    description: "Pokaż nazwę albumu w aktywności.",
                    label: "Navidrome: pokaż album"
                },
                nd_albumArtMode: {
                    description: "Sposób pobierania okładek albumów.",
                    label: "Navidrome: tryb okładki",
                    none: "Brak",
                    instance: "Instancja Navidrome (ujawnia adres URL serwera Discordowi, bez wysyłania uwierzytelnienia)",
                    lastfm: "API Last.fm (wysyła metadane utworu do Last.fm)"
                },
                nd_lastfmApiKey: {
                    description: "Opcjonalny klucz API Last.fm",
                    label: "Navidrome: klucz API Last.fm"
                },
                nd_refreshInterval: {
                    description: "Interwał odświeżania w sekundach.",
                    label: "Navidrome: interwał odświeżania"
                },
                nd_activityType: {
                    description: "Jaki typ aktywności",
                    label: "Navidrome: typ aktywności",
                    listening: "Słucha",
                    playingFixesHiddenLines: "Gra (naprawia ukryte wiersze)",
                    watching: "Ogląda"
                },
                nd_nameString: {
                    description: "Ciąg formatu nazwy aktywności",
                    label: "Navidrome: ciąg nazwy"
                },
                nd_detailsString: {
                    description: "Ciąg formatu szczegółów aktywności",
                    label: "Navidrome: ciąg szczegółów"
                },
                nd_stateString: {
                    description: "Ciąg formatu stanu aktywności",
                    label: "Navidrome: ciąg stanu"
                },
                nd_largeTextString: {
                    description: "Ciąg formatu dużego tekstu aktywności",
                    label: "Navidrome: ciąg dużego tekstu"
                },
                nd_statusDisplayType: {
                    description: "Pokaż nazwę utworu / wykonawcy na liście członków",
                    off: "Nie pokazuj (pokazuje ogólny komunikat słuchania)"
                },
                nd_hideOnPause: {
                    description: "Ukryj Rich Presence, gdy muzyka jest wstrzymana",
                    label: "Navidrome: ukryj po wstrzymaniu"
                }
            },
            panel: {
                password: "Hasło",
                statsFmUsername: "nazwa użytkownika stats.fm",
                customStatusText: "Własny tekst statusu",
                nameFormat: "Format nazwy",
                missingArtFallback: "Zastępstwo przy braku okładki",
                showListeningStatus: "Pokaż status słuchania",
                showStatsFmLogo: "Pokaż logo Stats.fm",
                showProfileLink: "Pokaż link do profilu",
                showSongLink: "Pokaż link do utworu",
                hideWithSpotify: "Ukryj przy Spotify",
                hideWithExternalRpc: "Ukryj przy zewnętrznym RPC",
                disableAlbumArt: "Wyłącz okładki albumów",
                apiKey: "Klucz API",
                userId: "ID użytkownika",
                nameDisplay: "Wyświetlanie nazwy",
                customNameTemplate: "Własny szablon nazwy",
                coverType: "Typ okładki",
                episodeFormat: "Format odcinka",
                overridePresenceType: "Nadpisz typ aktywności",
                showEpisodeName: "Pokaż nazwę odcinka",
                showWhenPaused: "Pokazuj po wstrzymaniu",
                privacyMode: "Tryb prywatności",
                refreshInterval: "Interwał odświeżania",
                clientId: "Identyfikator klienta",
                albumArtMode: "Tryb okładki",
                lastFmApiKey: "Klucz API Last.fm",
                showSmallImage: "Pokaż mały obraz",
                showAlbum: "Pokaż album",
                activityType: "Typ aktywności",
                statusDisplayType: "Typ wyświetlania statusu",
                hideOnPause: "Ukryj po wstrzymaniu",
                activityNameFormat: "Format nazwy aktywności",
                detailsFormat: "Format szczegółów",
                stateFormat: "Format stanu",
                largeTextFormat: "Format dużego tekstu",
                enabled: "Włączone"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "Odwraca flagę `r`: użycie `r` włącza tryb bez wyrażeń regularnych, a jej pominięcie używa trybu regex.",
                    label: "Domyślnie regex"
                }
            },
            name: "SedEnhanced",
            description: "Rozszerza podstawową obsługę `sed` w Discordzie."
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "Czy pokazywać najwyższą rolę botów.",
                    label: "Pokaż boty"
                },
                useRoleColor: {
                    description: "Używaj koloru roli dla ikony.",
                    label: "Użyj koloru roli"
                }
            },
            name: "ShowRolesInChat",
            description: "Pokazuje najwyższą rolę użytkownika obok jego nazwy w wiadomościach. Ukrywaj/pokazuj wybrane role w ich menu kontekstowym (prawy przycisk).",
            text: {
                chatRoleActions: "Akcje ról na czacie",
                unhideRolesInChat: "Pokaż ponownie role na czacie",
                showRoleInChat: "Pokaż rolę na czacie",
                hideRoleInChat: "Ukryj rolę na czacie"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "Identyfikatory użytkowników Discorda oddzielone przecinkami, których pingi i odznaki serwera mają być wyciszone.",
                    label: "Wyciszone ID użytkowników"
                }
            },
            name: "SilenceUsers",
            description: "Wycisza pingi @wzmianek i liczniki odznak serwera od wybranych użytkowników. Zwykłe wiadomości i wiadomości prywatne pozostają bez zmian."
        },
        songLink: {
            text: {
                showIfAvailable: "Pokaż, jeśli dostępne",
                openInDesktopApp: "Otwórz w aplikacji komputerowej",
                loadingSongLink: "Wczytywanie linku do utworu...",
                pleaseProvideAMusic: "Podaj link do muzyki.",
                thisWillTakeA: "To chwilę potrwa...",
                noAlternativePlatformsFound: "Nie znaleziono alternatywnych platform dla tego linku.",
                failedToResolveMusic: "Nie udało się rozpoznać linku do muzyki",
                logo: "Logo {{name}}"
            },
            option: {
                servicesSettings: {
                    description: "ustawienia usług",
                    label: "Ustawienia usług"
                },
                userCountry: {
                    description: "Kraj używany do wyszukiwania (dwuliterowy kod kraju)",
                    label: "Kraj użytkownika"
                },
                includeMetadata: {
                    description: "Dołącz tytuł utworu i nazwę wykonawcy jako nagłówek.",
                    label: "Dołącz metadane"
                }
            },
            name: "SongLink",
            description: "Dodaje przyciski serwisów streamingowych pod linkami do utworów",
            command: {
                musiclink: "Konwertuj link do muzyki na inne platformy streamingowe.",
                url: "Link do muzyki (Spotify, Deezer, YouTube, Tidal, Apple Music, SoundCloud)"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "Pochwal się utworami na swoim profilu",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "Wulgarne",
                addSong: "Dodaj utwór",
                addANewSong: "Dodaj nowy utwór",
                copyLink: "Kopiuj link",
                removeSong: "Usuń utwór",
                failedToLoad: "Nie udało się wczytać!",
                areYouSure: "Czy na pewno?",
                thisWillOverwriteYour: "To zastąpi twoje obecne utwory.",
                continue: "Kontynuuj",
                nevermind: "Nieważne",
                thisWillPermanentlyDelete: "To trwale usunie wszystkie twoje utwory.",
                delete: "Usuń",
                signInToSong: "Zaloguj się do Song Spotlight",
                songs: "Utwory",
                authorization: "Authorization",
                importFromClipboard: "Importuj ze schowka",
                copyToClipboard: "Kopiuj do schowka",
                signOut: "Wyloguj",
                deleteSongs: "Usuń utwory",
                more: "Więcej",
                editSongs: "Edytuj utwory",
                copyJson: "Kopiuj JSON",
                looksLikeThereS: "Wygląda na to, że nic tu nie ma!",
                uhOhSongSpotlight: "Ups! Nie udało się wczytać Song Spotlight. Szczegóły znajdziesz w konsoli.",
                stealSong: "Ukradnij utwór",
                profileSongs: "Utwory profilu",
                notEnoughSpace: "Za mało miejsca",
                alreadyAdded: "Ten utwór został już dodany",
                invalidLink: "Nieprawidłowy link",
                failedToParseLink: "Nie udało się przetworzyć linku",
                invalidUrl: "Nieprawidłowy URL",
                goAddSongs: "No i? Na co czekasz? Dodaj kilka utworów do swojego Song Spotlight!",
                tellUserToAddSongs: "Poproś {{name}}, aby dodał(a) kilka utworów do Song Spotlight!",
                supportedServices: "Song Spotlight obsługuje te serwisy:",
                viewSongsVia: "Swoje utwory możesz też zobaczyć poleceniem",
                viewSongsViaSuffix: "!",
                coverTooltipOwner: "{{label}}: {{sublabel}}",
                coverTooltipBy: "{{label}} — {{sublabel}}",
                lastUpdated: "Ostatnia aktualizacja",
                save: "Zapisz",
                showMore: "Pokaż jeszcze {{count}}"
            },
            toast: {
                youHaveBeenSigned: "Wylogowano cię z Song Spotlight. Zaloguj się ponownie.",
                songSpotlightError: "Song Spotlight: {{error}}",
                successfullyAuthorized: "Pomyślnie autoryzowano!",
                failedToPlaySong: "Nie udało się odtworzyć podglądu utworu!",
                addedSong: "Dodano utwór!",
                removedSong: "Usunięto utwór!",
                noJsonInClipboard: "Brak JSON w schowku!",
                invalidSongSpotlightData: "Nieprawidłowe dane Song Spotlight w schowku!",
                oneOrMoreImported: "Co najmniej jeden zaimportowany utwór był nieprawidłowy.",
                importedSongsFromClipboard: "Zaimportowano utwory ze schowka!",
                successfullySavedSongs: "Pomyślnie zapisano utwory!",
                successfullySignedOut: "Pomyślnie wylogowano!",
                successfullyDeletedSongs: "Pomyślnie usunięto utwory!",
                youDonTHave: "Nie masz wystarczająco miejsca!",
                uhOhThisSong: "Ups, ten utwór nie istnieje!",
                youAlreadyHaveThis: "Ten utwór jest już dodany!",
                youDonTHave2: "Nie... masz dodanego tego utworu?",
                fetchError: "Błąd pobierania Song Spotlight: {{path}}"
            },
            option: {
                collapseSongList: {
                    description: "Zwija listę utworów na profilach do przycisku otwierającego osobne menu",
                    label: "Zwiń listę utworów"
                },
                profileSongsLimit: {
                    description: "Ile utworów pokazać po pierwszym kliknięciu użytkownika",
                    label: "Limit utworów w profilu"
                },
                previewVolume: {
                    description: "Głośność podglądów utworów",
                    label: "Głośność podglądu"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "Zapobiega automatycznemu podnoszeniu przez Discorda ustawienia powiadomień kanału do „Wszystkie wiadomości”"
        },
        themeLibrary: {
            text: {
                enablePlugin: "Włącz wtyczkę",
                cancel: "Anuluj",
                holdOn: "Chwileczkę!",
                thisThemeRequiresThe: "Ten motyw wymaga wtyczki",
                pluginToWorkProperly: "do prawidłowego działania!",
                doYouWantTo: "Czy chcesz ją włączyć?",
                themeInfo: "Informacje o motywie",
                viewSource: "Zobacz źródło",
                close: "Zamknij",
                download: "Pobierz",
                overwrite: "Nadpisz",
                keepMyFile: "Zachowaj mój plik",
                copyToClipboard: "Kopiuj do schowka",
                conflict: "Konflikt!",
                themeSource: "Źródło motywu",
                aThemeWithThe: "Motyw o tej samej nazwie",
                alreadyExists: "już istnieje",
                inYourThemesDirectory: "w folderze motywów! Czy chcesz go nadpisać?",
                version: "Wersja",
                likes: "Polubienia",
                donate: "Wesprzyj",
                supportServer: "Serwer wsparcia",
                source: "Źródło",
                tags: "Tagi",
                youCanSupportThe: "Możesz wesprzeć autora, wpłacając darowiznę poniżej!",
                joinDiscordServer: "Dołącz do serwera Discord",
                viewThemeSource: "Zobacz źródło motywu",
                showAll: "Pokaż wszystkie",
                showThemes: "Pokaż motywy",
                showSnippets: "Pokaż fragmenty",
                showMostLiked: "Pokaż najbardziej lubiane",
                showDark: "Pokaż ciemne",
                showLight: "Pokaż jasne",
                showEnabled: "Pokaż włączone",
                showDisabled: "Pokaż wyłączone",
                searchForATheme: "Szukaj motywu...",
                gettingTheLatestThemes: "Pobieranie najnowszych motywów...",
                thisWonTTake: "To nie potrwa długo!",
                failedToFetchThemes: "Nie udało się pobrać motywów",
                couldNotFetchThe: "Nie udało się pobrać listy motywów. Spróbuj ponownie później.",
                wantYourThemeRemoved: "Chcesz, aby twój motyw został usunięty?",
                hide: "Ukryj",
                noThemeFound: "Nie znaleziono motywu.",
                tryNarrowingYourSearch: "Spróbuj zawęzić wyszukiwanie.",
                themeLibrary: "Biblioteka motywów",
                successfullyAuthorizedWithThemelibrary: "Pomyślnie autoryzowano w ThemeLibrary!",
                failedToAuthorizeCheck: "Autoryzacja nie powiodła się, sprawdź konsolę",
                successfullyDeauthorizedFromThemelibrary: "Pomyślnie cofnięto autoryzację ThemeLibrary!",
                failedToDeauthorizeCheck: "Nie udało się cofnąć autoryzacji, sprawdź konsolę",
                themelibraryAuth: "Autoryzacja ThemeLibrary",
                themeRemoval: "Usuwanie motywu",
                allThemeAuthorsAre: "Wszyscy autorzy motywów są wymienieni w informacjach o motywie, a żadne źródło nie zostało zmienione. Jeśli mimo to chcesz usunąć swój motyw, otwórz zgłoszenie, klikając poniżej.",
                authorizeWithThemelibrary: "Autoryzuj w ThemeLibrary",
                copyThemelibraryToken: "Kopiuj token ThemeLibrary",
                deauthorizeThemelibrary: "Cofnij autoryzację ThemeLibrary",
                themeDetails: "Szczegóły: {{name}}",
                mostLiked: "Najbardziej lubiane",
                newestAdditions: "Najnowsze",
                removeTheme: "Usuń motyw",
                addTheme: "Dodaj motyw",
                authors: "Autorzy",
                author: "Autor",
                nobodyLikedTheme: "Nikt jeszcze nie polubił tego motywu.",
                nobodyLikedSnippet: "Nikt jeszcze nie polubił tego fragmentu.",
                usersLikedTheme: "{{likes}} użytkowników polubiło ten motyw!",
                usersLikedSnippet: "{{likes}} użytkowników polubiło ten fragment!",
                openThemeLibrary: "Otwórz bibliotekę motywów",
                lastUpdated: "Ten motyw był ostatnio aktualizowany",
                removalInfo: "Jeśli chcesz trwale usunąć swoje motywy, otwórz zgłoszenie na",
                themes: "Motywy",
                requestRemoval: "Poproś o usunięcie motywu",
                pluginSuffix: "!"
            },
            toast: {
                downloadedName: "Pobrano {{name}}!",
                failedToDownloadName: "Nie udało się pobrać {{name}}! (sprawdź konsolę)",
                invalidOrExpiredInvite: "Nieprawidłowe lub wygasłe zaproszenie!",
                copiedToClipboard: "Skopiowano do schowka",
                noUniquetokenPresentTry: "Brak uniqueToken, najpierw się autoryzuj!",
                noTokenToCopy: "Brak tokena do skopiowania, najpierw się autoryzuj!",
                copiedToClipboard2: "Skopiowano do schowka!"
            },
            name: "ThemeLibrary",
            description: "Biblioteka motywów dla Plexcord.",
            option: {
                hideWarningCard: {
                    description: "Ukryj kartę ostrzeżenia na górze karty biblioteki motywów",
                    label: "Ukryj kartę ostrzeżenia"
                },
                buttons: {
                    description: "Przyciski ThemeLibrary",
                    label: "Przyciski"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "Wtyczka tłumaczenia Plexcord, ale z obsługą języków sztucznych!",
            text: {
                translate: "Przetłumacz",
                dismiss: "Odrzuć",
                translationFailedDueTo: "Tłumaczenie nie powiodło się z powodu błędu.",
                translatedFrom: "przetłumaczono z: {{lang}}"
            },
            option: {
                target: {
                    description: "Język docelowy",
                    label: "Cel"
                },
                toki: {
                    description: "Włącz toki pona",
                    label: "Toki pona"
                },
                sitelen: {
                    description: "Włącz sitelen pona",
                    label: "Sitelen pona"
                },
                shavian: {
                    description: "Włącz alfabet Shawa",
                    label: "Alfabet Shawa"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "Wtyczka pomagająca odpowiadać na pytania quizowe za pomocą AI.",
            text: {
                answerWithAi: "Odpowiedz z AI",
                enterApiKeyHere: "Wpisz tutaj klucz API swojego punktu końcowego AI.",
                enterSystemPrompt: "Wpisz prompt systemowy.",
                enterYourOpenaiCompatible: "Wpisz tutaj swój punkt końcowy AI zgodny z OpenAI.",
                status: "Status {{status}}"
            },
            option: {
                apiKey: {
                    description: "Klucz API.",
                    label: "Klucz API"
                },
                model: {
                    description: "Model AI do użycia.",
                    label: "Model",
                    placeholder: "np. google/gemini-3-flash-preview, inception/mercury, openai/gpt-5.2-chat itp."
                },
                systemPrompt: {
                    description: "Prompt systemowy dla AI. Symbole zastępcze: {current_user}, {current_time}",
                    label: "Prompt systemowy"
                },
                maxTokens: {
                    description: "Maksymalna liczba tokenów w odpowiedzi.",
                    label: "Maks. tokenów"
                },
                endpoint: {
                    description: "Punkt końcowy AI zgodny z OpenAI.",
                    label: "Punkt końcowy"
                },
                context: {
                    description: "Liczba poprzednich wiadomości dołączanych jako kontekst.",
                    label: "Kontekst"
                },
                passMessageAuthorName: {
                    description: "Dodawaj nazwę autora przed treścią wiadomości przekazywanej do AI. Pomaga to AI odróżniać użytkowników w rozmowie.",
                    label: "Przekazuj nazwę autora"
                },
                treatSelfAsAssistant: {
                    description: "Po włączeniu twoje wiadomości będą traktowane w kontekście jako wiadomości asystenta. Niektóre modele zaczynają wtedy pisać fanfiki.",
                    label: "Traktuj mnie jako asystenta"
                },
                mode: {
                    description: "Jak obsługiwać odpowiedzi?",
                    label: "Tryb",
                    autoreply: "Automatyczna odpowiedź",
                    chatbar: "Zastąp tekst w pasku czatu",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "Przekazuj obrazy do AI jako kontekst (jeśli są). Nie wszystkie modele to obsługują.",
                    label: "Obsługuj obrazy"
                },
                sendImagesAsBase64: {
                    description: "Wysyłaj obrazy do AI jako base64.",
                    label: "Wysyłaj obrazy jako base64"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI: ustawienia API są niekompletne.",
                errorGettingResponseFrom: "Błąd pobierania odpowiedzi z modelu AI"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "Pokazuj liczbę nieprzeczytanych na wyciszonych kanałach",
                    label: "Pokazuj na wyciszonych kanałach"
                },
                notificationCountLimit: {
                    description: "Pokazuj +99 zamiast rzeczywistej liczby",
                    label: "Limit liczby powiadomień"
                }
            },
            name: "UnreadCountBadge",
            description: "Pokazuje odznaki z liczbą nieprzeczytanych wiadomości przy kanałach na liście"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "GIF-y/WebP trzeba dodać przez adres URL. Prześlij GIF/WebP do serwisu hostingu obrazów i wklej link."
            },
            text: {
                save: "Zapisz",
                delete: "Usuń",
                customAvatar: "Niestandardowy awatar",
                original: "Oryginalny",
                local: "Lokalny",
                enterPngGifUrl: "Wpisz adres URL PNG/GIF",
                setAvatar: "Ustaw awatar",
                usingTheSetAvatar: "Funkcja ustawiania awatara działa tylko lokalnie, więc tylko ty widzisz zmianę.",
                joinUserpfpServer: "Dołącz do serwera UserPFP",
                dropHere: "Upuść tutaj!",
                dragOrClick: "⬆ Przeciągnij obraz lub kliknij, aby przesłać (dla GIF lub WebP użyj adresu URL)",
                uploadedFile: "(przesłany plik)",
                supportHere: "Wesprzyj UserPFP tutaj"
            },
            option: {
                overrideServerAvatars: {
                    description: "Zastępuj awatary serwerowe niestandardowymi lub domyślnym awatarem, jeśli nie ustawiono niestandardowego.",
                    label: "Zastąp awatary serwerowe"
                },
                preferNitro: {
                    description: "Którego awatara użyć, gdy jest zarówno domyślny animowany (Nitro), jak i awatar UserPFP",
                    label: "Preferuj Nitro",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "Adres URL, z którego wczytywana jest baza danych",
                    label: "Źródło bazy danych"
                }
            },
            name: "UserPFP",
            description: "Pozwala ustawiać lokalne statyczne lub animowane awatary dla siebie i innych użytkowników"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "Uruchom ponownie, aby zastosować zmiany!"
            },
            text: {
                installError: "Błąd instalacji",
                done: "Gotowe!",
                later: "Później",
                updateError: "Błąd aktualizacji",
                checkingForUpdates: "Sprawdzanie aktualizacji...",
                loadingPlugins: "Wczytywanie wtyczek...",
                pluginUpdatesAvailable: "Dostępne aktualizacje wtyczek",
                theFollowingPluginsAre: "Następujące wtyczki są nieaktualne:",
                youCanUpdatePlugins: "Możesz zaktualizować wtyczki poniżej.",
                installPlugin: "Zainstaluj wtyczkę",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller nie jest w pełni wczytany",
                youNeedToRestart: "Musisz uruchomić ponownie, aby wczytać część natywną :)",
                restartNow: "Uruchom ponownie teraz",
                someUserpluginsAreOut: "Niektóre UserPlugins są nieaktualne!",
                clickToOpenThe: "Kliknij, aby otworzyć aktualizator UserPlugin",
                plexcordDoesNotModerate: "Plexcord nie moderuje userpluginów i nie ponosi odpowiedzialności za skutki ich instalacji.",
                onlyInstallUserpluginsFrom: "Instaluj userpluginy tylko od zaufanych twórców. Robisz to wyłącznie na własne ryzyko.",
                setGitPath: "Ustaw ścieżkę Git",
                installHint: "Możesz zainstalować wtyczkę z GitHub, GitLab, Codeberg, git.nin0.dev lub plugins.nin0.dev, wklejając tutaj jej adres URL do klonowania.",
                enableAndRestart: "Włącz i uruchom ponownie",
                enableAndRefresh: "Włącz i odśwież",
                tabCounts: "({{total}}, włączone: {{enabled}})",
                possiblyMore: "i prawdopodobnie więcej, ponieważ sprawdzanie aktualizacji nie zostało zakończone. ",
                alreadyInstalled: "Wtyczka jest już zainstalowana, zaktualizuj ją poniżej",
                invalidUrl: "Nieprawidłowy URL, przeczytaj informację powyżej",
                install: "Zainstaluj",
                restart: "Uruchom ponownie",
                refresh: "Odśwież",
                update: "Aktualizuj",
                source: "Źródło",
                support: "Wsparcie",
                managePlugins: "Zarządzaj wtyczkami",
                uninstalledRestart: "{{name}} został odinstalowany. Aby całkowicie usunąć wtyczkę, wymagane jest ponowne uruchomienie.",
                uninstalledRefresh: "{{name}} został odinstalowany. Aby całkowicie usunąć wtyczkę, wymagane jest odświeżenie.",
                updatedRestart: "{{name}} został zaktualizowany. Aby zastosować aktualizację, wymagane jest ponowne uruchomienie.",
                updatedRefresh: "{{name}} został zaktualizowany. Aby zastosować aktualizację, wymagane jest odświeżenie.",
                installedBody: "{{name}} został pomyślnie zainstalowany. Co teraz?",
                installedNativeBody: "{{name}} został pomyślnie zainstalowany. Ponieważ używa funkcji natywnych, wymagane jest ponowne uruchomienie klienta. Co teraz?"
            },
            option: {
                allowlistedChannels: {
                    description: "Lista kanałów oddzielonych przecinkami, w których ma być wyświetlany przycisk Zainstaluj wtyczkę. Zawsze jest widoczny na kanałach userpluginów Plexcord",
                    label: "Dozwolone kanały"
                },
                notifyIfUpdate: {
                    description: "Pokaż powiadomienie Plexcord, gdy UserPlugins wymagają aktualizacji",
                    label: "Powiadamiaj o aktualizacji"
                },
                neverNotifyForPlugins: {
                    description: "Nigdy nie pokazuj powiadomień o aktualizacji tych wtyczek (nadal możesz je aktualizować w karcie UserPlugins)",
                    label: "Nigdy nie powiadamiaj dla wtyczek"
                }
            },
            name: "UserpluginInstaller",
            description: "Instaluj userpluginy jednym kliknięciem"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "Tytuł 1"
                },
                uncollapseSettingsByDefault: {
                    description: "Domyślnie automatycznie rozwijaj ustawienia głosu",
                    label: "Domyślnie rozwijaj ustawienia"
                },
                title2: {
                    label: "Tytuł 2"
                },
                outputVolume: {
                    description: "Pokaż suwak głośności wyjścia",
                    label: "Głośność wyjścia"
                },
                inputVolume: {
                    description: "Pokaż suwak głośności wejścia",
                    label: "Głośność wejścia"
                },
                outputDevice: {
                    description: "Pokaż wybór urządzenia wyjściowego",
                    label: "Urządzenie wyjściowe"
                },
                inputDevice: {
                    description: "Pokaż wybór urządzenia wejściowego",
                    label: "Urządzenie wejściowe"
                },
                camera: {
                    description: "Pokaż wybór kamery",
                    label: "Kamera"
                },
                title3: {
                    label: "Tytuł 3"
                },
                showOutputVolumeHeader: {
                    description: "Pokaż nagłówek nad suwakiem głośności wyjścia",
                    label: "Pokaż nagłówek głośności wyjścia"
                },
                showInputVolumeHeader: {
                    description: "Pokaż nagłówek nad suwakiem głośności wejścia",
                    label: "Pokaż nagłówek głośności wejścia"
                },
                showOutputDeviceHeader: {
                    description: "Pokaż nagłówek nad wyborem urządzenia wyjściowego",
                    label: "Pokaż nagłówek urządzenia wyjściowego"
                },
                showInputDeviceHeader: {
                    description: "Pokaż nagłówek nad wyborem urządzenia wejściowego",
                    label: "Pokaż nagłówek urządzenia wejściowego"
                },
                showVideoDeviceHeader: {
                    description: "Pokaż nagłówek nad wyborem kamery",
                    label: "Pokaż nagłówek urządzenia wideo"
                }
            },
            name: "VCPanelSettings",
            description: "Steruj ustawieniami głosu bezpośrednio z panelu głosowego",
            text: {
                appearance: "Wygląd",
                settingsToShow: "Ustawienia do pokazania",
                headersToShow: "Nagłówki do pokazania",
                outputVolume: "Głośność wyjścia",
                inputVolume: "Głośność wejścia",
                outputDevice: "Urządzenie wyjściowe",
                inputDevice: "Urządzenie wejściowe",
                settings: "Ustawienia",
                hide: "Ukryj"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "Wykryj automatycznie",
                start: "Rozpocznij",
                transcriptionOptions: "Opcje transkrypcji",
                audioLanguage: "Język nagrania",
                retry: "Ponów",
                transcriptionFailed: "Transkrypcja nie powiodła się",
                transcribeVoiceMessage: "Transkrybuj wiadomość głosową",
                close: "Zamknij",
                baseRecommended: "Base (zalecany)",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo (najlepsza dokładność, zalecany GPU)",
                transcribe: "Transkrybuj",
                translateToEnglish: "Przetłumacz na angielski",
                voiceMessageTranslation: "Tłumaczenie wiadomości głosowej",
                voiceMessageTranscription: "Transkrypcja wiadomości głosowej",
                hideTimestamps: "Ukryj znaczniki czasu",
                showTimestamps: "Pokaż znaczniki czasu",
                copied: "Skopiowano!",
                copyText: "Kopiuj tekst",
                downloadingAudio: "Pobieranie dźwięku...",
                processingAudio: "Przetwarzanie dźwięku...",
                loadingModel: "Ładowanie modelu...",
                transcribing: "Transkrybowanie...",
                transcription: "Transkrypcja",
                transcriptionError: "Błąd transkrypcji",
                transcribingInProgress: "Transkrypcja w toku...",
                initializing: "Inicjalizacja...",
                workerCrashed: "Proces transkrypcji uległ awarii",
                workerStopped: "Proces transkrypcji został zatrzymany",
                deleteCache: "Usuń wszystkie pliki z pamięci podręcznej ({{size}} MB)",
                action: "Akcja"
            },
            name: "VoiceMessageTranscriber",
            description: "Transkrypcje wiadomości głosowych na urządzeniu oparte na Whisper",
            option: {
                embed: {
                    description: "Wyświetlaj transkrypcję bezpośrednio w załączniku wiadomości głosowej zamiast w oknie.",
                    label: "Osadzenie"
                },
                maintainHorizontal: {
                    description: "Zachowaj poziomy rozmiar osadzonego pola transkrypcji i rozszerzaj w pionie.",
                    label: "Zachowaj poziomo"
                },
                selectedModel: {
                    description: "Rozmiar modelu.",
                    onnxcommunitywhispertiny: "Tiny (najszybszy, najniższa dokładność)"
                },
                useGpu: {
                    description: "Uruchamiaj model na GPU (WebGPU), jeśli jest obsługiwane. Znacznie szybciej i umożliwia użycie większych modeli. W razie braku używa CPU.",
                    label: "Używaj GPU"
                },
                quantized: {
                    description: "Używaj skwantyzowanych modeli na CPU (mniejszy rozmiar, niewielka utrata jakości).",
                    label: "Skwantyzowany"
                },
                deleteModalFiles: {
                    description: "Usuń pliki pamięci podręcznej z magazynu.",
                    label: "Usuń pliki modelu"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "Odtwarza wiadomości głosowe między czatami dzięki zsynchronizowanemu miniodtwarzaczowi.",
            text: {
                voiceMessagesInBackground: "Odtwarzacz wiadomości głosowych w tle",
                returnToChannelname: "Wróć do {{channelName}}",
                voiceMessagePosition: "Pozycja wiadomości głosowej",
                changePlaybackSpeed: "Zmień szybkość odtwarzania",
                playbackSpeedSpeedTimes: "Szybkość odtwarzania {{speed}} razy",
                closeVoiceMessagePlayer: "Zamknij odtwarzacz wiadomości głosowych",
                voiceMessage: "Wiadomość głosowa",
                directMessage: "Wiadomość prywatna",
                resume: "Wznów wiadomość głosową",
                pause: "Wstrzymaj wiadomość głosową"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "Pozwala zainstalować Discorda jako aplikację (PWA). Włącza odznaki powiadomień, globalne skróty i własny pasek tytułu Discorda.",
            text: {
                activities: "Aktywności",
                hopIn: "Wskakuj",
                status: "Status",
                emojis: "Emotki",
                rooms: "Pokoje",
                discord: "Discord",
                platforms: "Platformy",
                keybindsInfoBefore: "Obsługiwane są własne globalne skróty Naciśnij, aby X. Przejdź do",
                keybindsInfoAfter: "i zmień je tam. Skróty Przytrzymaj, aby X nie są obsługiwane."
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "Rozdzielczość",
                    label: "Rozdzielczość"
                },
                frameRate: {
                    description: "Liczba klatek",
                    label: "Liczba klatek"
                },
                contentHint: {
                    description: "Wskazówka treści",
                    label: "Wskazówka treści"
                },
                systemAudio: {
                    description: "Wycisz dźwięk systemowy",
                    label: "Dźwięk systemowy"
                }
            },
            name: "WebScreenShare",
            description: "Dodaje menu opcji udostępniania ekranu. Pozwala zmieniać rozdzielczość, liczbę klatek, wskazówki kodowania i dźwięk systemowy.",
            text: {
                stream: "Transmisja",
                streamMuted: "Transmisja wyciszona",
                streamMode: "Tryb transmisji",
                muteStreamAudio: "Wycisz dźwięk transmisji",
                preventsSystemAudioFrom: "Zapobiega dołączaniu dźwięku systemowego do transmisji.",
                showStreamPreviews: "Pokaż podglądy transmisji",
                allowsOthersToSee: "Pozwala innym zobaczyć podgląd transmisji przed dołączeniem.",
                smootherVideo: "Płynniejsze wideo",
                cleanerText: "Wyraźniejszy tekst",
                userPreset: "Ustawienie użytkownika",
                custom: "Własne",
                gaming: "Gry",
                screenshare: "Udostępnianie ekranu"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "Ukrywaj domyślne emotki Unicode w autouzupełnianiu, chyba że są na białej liście.",
                    label: "Domyślne emotki"
                },
                serverEmojis: {
                    description: "Ukrywaj niestandardowe emotki serwerów w autouzupełnianiu, chyba że są na białej liście.",
                    label: "Emotki serwera"
                },
                disableToasts: {
                    description: "Nie pokazuj powiadomień przy dodawaniu lub usuwaniu emotek.",
                    label: "Wyłącz powiadomienia"
                },
                whiteListedEmojis: {
                    description: "Emotki z białej listy",
                    label: "Emotki z białej listy"
                },
                exportEmojis: {
                    description: "Eksportuj emotki",
                    label: "Eksportuj emotki"
                },
                importEmojis: {
                    description: "Importuj emotki",
                    label: "Importuj emotki"
                },
                resetEmojis: {
                    description: "Resetuj emotki",
                    label: "Resetuj emotki"
                }
            },
            name: "WhitelistedEmojis",
            description: "Pozwala wyłączyć wszystkie emotki w wiadomościach poza zestawem z białej listy.",
            toast: {
                addedLengthEmojisTo: "Dodano {{length}} emotek do listy, {{length}} już na niej było",
                removedLengthEmojisFrom: "Usunięto {{length}} emotek z listy",
                nameIsAlreadyIn: "„{{name}}” jest już na liście",
                addedNameToThe: "Dodano „{{name}}” do listy",
                nameIsNotIn: "„{{name}}” nie ma na liście",
                removedNameFromThe: "Usunięto „{{name}}” z listy",
                successfullyExportedEmojis: "Pomyślnie wyeksportowano emotki",
                successfullyImportedEmojis: "Pomyślnie zaimportowano emotki",
                invalidJsonData: "Nieprawidłowe dane JSON",
                failedToImportEmojis: "Nie udało się zaimportować emotek: {{err}}",
                resetEmojis: "Zresetowano emotki"
            },
            text: {
                areYouSure: "Czy na pewno?",
                thisWillOverwriteYour: "To zastąpi twoją obecną białą listę.",
                import: "Importuj",
                cancel: "Anuluj",
                thisWillRemoveAll: "To usunie wszystkie emotki z twojej białej listy.",
                reset: "Resetuj",
                addAllGuildEmojis: "Dodaj wszystkie emotki serwera",
                removeAllGuildEmojis: "Usuń wszystkie emotki serwera",
                noEmojisInThe: "Brak emotek na białej liście.",
                removeAll: "Usuń wszystkie",
                removeFromWhitelist: "Usuń z białej listy",
                addToWhitelist: "Dodaj do białej listy",
                defaultEmojis: "Domyślne emoji",
                guildEmojis: "Emoji z {{name}}",
                guildFallback: "Serwer {{id}}",
                whitelistedEmojis: "Emoji z białej listy",
                remove: "Usuń"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "Intensywność animacji w px",
                    label: "Intensywność"
                }
            },
            name: "WigglyText",
            description: "Dodaje nowe formatowanie markdown, które sprawia, że tekst się kołysze.",
            text: {
                leftAndRight: "w lewo i w prawo",
                byTyping: "wpisując",
                upAndDown: "w górę i w dół",
                inACircle: "w kółko",
                youCanMakeTextWiggle: "Tak możesz sprawić, by tekst falował:"
            }
        },
        fixDiscordCss: {
            description: "Naprawia opóźnienia CSS w Discordzie"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "Pobieraj pliki bezpośrednio z Discorda zamiast otwierać je w przeglądarce"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "Nie udało się pobrać repozytoriów",
                personal: "Osobiste",
                unknown: "Nieznany",
                sortedByCount: "Posortowano według liczby repozytoriów. Kliknij, aby sortować A-Z",
                sortedAlphabetically: "Posortowano A-Z. Kliknij, aby sortować według liczby repozytoriów",
                mostRepos: "Najwięcej repozytoriów"
            }
        }
    }
} as const;

export default translations;
