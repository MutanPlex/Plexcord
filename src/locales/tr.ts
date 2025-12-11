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

import type enTranslations from "./en";
import type { MatchStructure } from "./types";

const translations: MatchStructure<typeof enTranslations> = {
    settings: {
        title: "Ayarları",
        language: {
            selector: {
                label: "Dil",
                description: "Plexcord için tercih ettiğiniz dili seçin.",
                placeholder: "Dil Seç"
            }
        },
        location: {
            label: "Ayarlar Konumu",
            description: "Plexcord ayarlar bölümünün nereye konulacağını belirler",
            top: "En üste",
            nitro: {
                above: "Nitro bölümünün üstüne",
                below: "Nitro bölümünün altına"
            },
            activity: {
                above: "Etkinlik Ayarlarının üstüne",
                below: "Etkinlik Ayarlarının altına"
            },
            bottom: "En alta"
        },
        switches: {
            useQuickCss: {
                label: "Özel CSS'yi Etkinleştir",
                description: "Discord'a özel CSS uygulanmasına izin vermek için QuickCSS özelliğini etkinleştirir"
            },
            enableReactDevtools: {
                label: "React Geliştirici Araçlarını Etkinleştir",
                description: "React Geliştirici Araçları uzantısının Discord ile çalışmasını sağlar"
            },
            frameless: {
                label: "Pencere çerçevesini devre dışı bırak",
                description: "Daha temiz bir görünüm için pencere çerçevesini kaldırır. Pencere kontrollerini etkileyebileceğinden dikkatli kullanın."
            },
            winNativeTitleBar: {
                label: "Discord'un özel başlık çubuğu yerine Windows'un yerel başlık çubuğunu kullan",
                description: "Discord'un özel başlık çubuğunu daha iyi OS entegrasyonu için yerel Windows başlık çubuğuyla değiştirir."
            },
            transparent: {
                label: "Pencere şeffaflığını etkinleştir",
                description: "Bu işlem için şeffaflığı destekleyen bir tema gereklidir, aksi takdirde hiçbir etkisi olmaz. Yan etki olarak pencerenin yeniden boyutlandırılmasını engeller."
            },
            winCtrlQ: {
                label: "Discord'u kapatmak için Ctrl+Q kısayolunu kaydet (Alt+F4'e alternatif)",
                description: "Ctrl+Q kullanarak Discord'u kapatmanızı sağlar, diğer Windows uygulamalarına benzer şekilde."
            },
            disableMinSize: {
                label: "Minimum pencere boyutunu devre dışı bırak",
                description: "Discord penceresini herhangi bir boyuta yeniden boyutlandırmanıza izin verir, varsayılan minimum boyut kısıtlamasını kaldırır."
            }
        },
        quickActions: {
            title: "Hızlı İşlemler",
            description: "Sık kullanmak isteyebileceğiniz yaygın işlemler. Bu kısayollar, menülerde gezinmeden sık kullanılan özelliklere hızlı erişim sağlar.",
            notificationLog: "Bildirim Günlüğü",
            editQuickCSS: "QuickCSS Düzenle",
            relaunchDiscord: "Discord'u Yeniden Başlat",
            openSettingsFolder: "Ayarlar Klasörünü Aç",
            viewSourceCode: "Kaynak Kodunu Görüntüle"
        },
        specialCards: {
            donations: {
                title: "Bağışlar",
                subtitle: "Bağışınız için teşekkürler!",
                description: "@mutanplex ile mesajlaşarak ayrıcalıklarınızı istediğiniz zaman yönetebilirsiniz.",
                button: "Bağış"
            },
            supportProject: {
                title: "Projeyi Destekle",
                description: "Lütfen bağış yaparak Plexcord'un geliştirilmesini desteklemeyi düşünün!"
            },
            contributions: {
                title: "Katkılar",
                subtitle: "Katkınız için teşekkürler!",
                description: "Plexcord'a katkıda bulunduğunuz için artık havalı bir rozetiniz var!",
                buttonTitle: "Katkıda bulunduklarınızı görün"
            }
        },
        settingsSection: {
            title: "Ayarlar",
            hintParts: {
                prefix: "İpucu: Bu ayarlar bölümünün konumunu ",
                linkText: "Ayarlar eklentisinin ayarlarından",
                suffix: " değiştirebilirsiniz!"
            }
        },
        notifications: {
            title: "Bildirimler",
            description: "Plexcord tarafından gönderilen bildirimler için ayarlar. Bu, Discord bildirimlerini (mesajlar vb.) içermez.",
            settings: "Bildirim Ayarları",
            viewLog: "Bildirim Geçmişini Görüntüle",
            permissions: {
                denied: {
                    title: "Masaüstü Bildirim İzni reddedildi",
                    label: "Bildirim İzinlerini reddettiniz. Masaüstü bildirimleri çalışmayacak!"
                }
            },
            style: {
                label: "Bildirim Stili",
                description: "Bazı eklentiler size bildirimler gösterebilir. Bunlar iki tarzda gelir:",
                plexcord: "Plexcord Bildirimleri",
                plexcordDesc: "Bunlar uygulama içi bildirimlerdir",
                desktop: "Masaüstü Bildirimleri",
                desktopDesc: "Yerel Masaüstü bildirimleri (ping aldığınızda olduğu gibi)",
                onlyWhenNotFocused: "Sadece Discord odaklanmadığında Masaüstü bildirimlerini kullan",
                always: {
                    desktop: "Her zaman Masaüstü bildirimlerini kullan",
                    plexcord: "Her zaman Plexcord bildirimlerini kullan"
                }
            },
            positions: {
                label: "Bildirim Pozisyonu",
                right: {
                    bottom: "Aşağı Sağ",
                    top: "Yukarı Sağ"
                },
                left: {
                    bottom: "Aşağı Sol",
                    top: "Yukarı Sol"
                }
            },
            missed: {
                label: "Kaçırılan Bildirim Sayısı",
                description: "Discord'a yeniden odaklandığınızda, kaçırdığınız bildirimlerle ilgili bir bildirim açılacaktır.",
                whileYou: "Sen yokken",
                count: "{{count}} bildirim{{s}} alındı",
                s: " "
            },
            timeout: {
                label: "Bildirim Zaman Aşımı",
                description: "Bildirimlerin otomatik olarak kaybolmadan önce ekranda kalma süresi (saniye cinsinden)"
            },
            logLimit: {
                label: "Bildirim Günlüğü Limiti",
                description: "Bildirim günlüğünde saklanacak maksimum bildirim sayısı. Bildirim günlüğünü devre dışı bırakmak için {{disable}} olarak ayarlayın ve eski bildirimleri otomatik olarak kaldırmamak için {{unlimited}} olarak ayarlayın"
            },
            opacity: {
                label: "Opaklık",
                description: "Uygulama içi bildirimlerin opaklığı"
            },
            maxNotifications: {
                label: "Maksimum Bildirim",
                description: "Aynı anda gösterilecek maksimum bildirim sayısı"
            },
            behavior: {
                label: "Bildirim Davranışı",
            },
            disableInStreamerMode: {
                label: "Yayıncı Modunda Devre Dışı Bırak",
                description: "Yayıncı modundayken bildirimleri devre dışı bırak"
            },
            renderImages: {
                label: "Görüntüleri İşle",
                description: "Bildirimlerde görüntüleri işle"
            },
            streamingTreatment: {
                label: "Yayıncı Modu Davranışı",
                description: "Ekranınızı paylaşırken bildirimlerin nasıl işleneceği",
                normal: "Normal - Bildirimi normal olarak göster",
                noContent: "İçerik Yok - Bildirim gövdesini gizle",
                ignore: "Yoksay - Bildirimi hiç gösterme"
            },
        },
        macVibrancy: {
            title: "Pencere Titreme Stili (Yeniden başlatma gerekli)",
            description: "macOS pencere titreme efektini özelleştirin. Bu, Discord penceresinin bulanıklık ve şeffaflık stilini kontrol eder. Değişikliklerin etkili olması için yeniden başlatma gereklidir.",
            placeholder: "Pencere titreme stili",
            style: {
                no: "Titreme yok",
                underPage: "Sayfa Altında (Pencere tonlama)",
                content: "İçerik",
                window: "Pencere",
                selection: "Seçim",
                titlebar: "Başlık çubuğu",
                header: "Başlık",
                sidebar: "Kenar çubuğu",
                tooltip: "Araç ipucu",
                menu: "Menü",
                popover: "Açılır pencere",
                fullscreenUI: "Tam ekran UI (şeffaf ama biraz mat)",
                hud: "HUD (En şeffaf)"
            }
        }
    },

    plugins: {
        title: "Eklentiler",
        new: "Yeni",
        unknown: "Bilinmeyen",
        noDescription: "Açıklama mevcut değil.",
        restart: {
            apply: "Değişiklikleri uygulamak için yeniden başlatın!",
            required: "Yeniden başlatma gerekli!",
            description: "Yeni eklentileri ve ayarları uygulamak için şimdi yeniden başlatın",
            following: "Aşağıdaki eklentiler yeniden başlatma gerektiriyor:",
            fully: "Bazı eklentilerin tamamen devre dışı bırakılması için yeniden başlatma gerekir.",
            would: "Yeniden başlatmak ister misiniz?",
            resetDefault: "Varsayılan ayarlara sıfırla",
            button: {
                restart: "Yeniden Başlat",
                later: "Sonra!",
                now: "Şimdi Yeniden Başlat",
                cancel: "İptal",
                disableWarning: "Uyarıları Devre Dışı Bırak",
                disableAll: "Tümünü Devre Dışı Bırak",
                reset: "Sıfırla"
            }
        },
        contributor: {
            contributed: "katkıda bulundu",
            modal: {
                contributionsInfo: "{{userName}} {{contributionCount}} eklenti geliştirerek {{continuedLink}}.",
                noContributions: "{{userName}} henüz eklenti geliştirmedi. Büyük olasılıkla farklı şekillerde {{contributedLink}}!"
            }
        },
        infoModal: {
            description: "Dişli çarkı veya bilgi simgesine basarak bir eklenti hakkında daha fazla bilgi edinebilirsiniz",
            settingsInfo: "Dişli çarkı olan eklentilerin değiştirebileceğiniz ayarları vardır!",
            disableAll: "Tüm Eklentileri Devre Dışı Bırak"
        },
        error: {
            invalidInput: "Geçersiz girdi sağlandı",
            stopping: "{{plugin}} eklentisi durdurulurken bir sorun oluştu",
            starting: "{{plugin}} eklentisi başlatılırken bir sorun oluştu",
            startDependency: "Bağımlılıklar başlatılırken bir sorun oluştu: {{failures}}",
            infoRender: "Bu eklentinin özel Bilgi Bileşeni render edilirken bir hata oluştu"
        },
        placeholder: {
            number: "Bir sayı girin",
            select: "Bir seçenek seçin",
            text: "Bir değer girin"
        },
        excluded: {
            desktop: "Discord Masaüstü uygulaması veya Plextron",
            discordDesktop: "Discord Masaüstü uygulaması",
            plextron: "Plextron uygulaması",
            web: "Plextron uygulaması ve Discord'un Web sürümü",
            dev: "Plexcord'un Geliştirici sürümü"
        },
        search: {
            looking: "Aradığın şey bu mu",
            onlyAvailable: "Sadece şurada mevcut ->",
            noCriteria: "Arama kriterlerine uygun eklenti bulunamadı"
        },
        required: {
            title: "Gerekli Eklentiler",
            this: "Bu eklenti Plexcord'un çalışması için gereklidir.",
            by: "Bu eklenti şunun çalışması için gerekli:"
        },
        dangerModal: {
            title: "Tehlikeli Eylem",
            disablePlugins: "DİKKAT: {{pluginCount}} eklentiyi devre dışı bırakmak üzeresiniz!",
            irreversible: "BU EYLEM GERİ ALINAMAZ!",
            enableBack: "Devam etmek istediğinizden kesinlikle emin misiniz? Daha sonra tekrardan aktifleştirebilirsiniz.",
            undone: "Bu eylem geri alınamaz. Emin misin?",
            resetDescription: "{{pluginName}} eklenti ayarlarını varsayılan değerlerine sıfırlamak üzeresiniz.",
            disable: "{{enabledPlugins}} eklentiyi devre dışı bırakmak üzeresiniz!",
            confirmReset: "Onayla ve Sıfırla",
            cancel: "İptal",
            resetText: "Eğer devam etmek istediğinizden eminseniz, {{confirmReset}} butonuna tıklayın. Aksi takdirde, {{cancel}} butonuna tıklayın."
        },
        filters: {
            label: "Filtreler",
            placeholder: "Eklenti ara...",
            option: {
                all: "Hepsi",
                enabled: "Aktif Olanlar",
                disabled: "Devre Dışı Olanlar",
                new: "Yeniler",
                userplugins: "Kullanıcı Eklentileri",
                api: "API Eklentileri"
            }
        },
        pluginModal: {
            noSettings: "Bu eklenti değiştirebileceğiniz ayarlara sahip değil.",
            authors: "Yazarlar",
            settings: "Ayarlar",
            successfulReset: "{{plugin}} eklentisinin ayarları başarıyla sıfırlandı.",
            enabledStock: "Aktif Stok Eklentiler",
            totalStock: "Toplam Stok Eklentiler",
            enabledUser: "Aktif Kullanıcı Eklentileri",
            totalUser: "Toplam Kullanıcı Eklentileri",
            info: "Daha fazla bilgi görüntüle",
            source: "Kaynak kodunu görüntüle"
        },
        metadata: {
            api: {
                description: {
                    memberListDecorators: "Üye listesine dekoratör eklemek için API (hem sunucularda hem DM’lerde)",
                    messageAccessories: "Mesajlara aksesuar eklemek için API",
                    messageDecorations: "Mesajlara dekoratör eklemek için API",
                    chatInputButtons: "Sohbet girişine buton eklemek için API",
                    commands: "Komut kullanan herhangi bir şeyin ihtiyaç duyduğu API",
                    contextMenu: "Bağlam menüsüne öğe eklemek/kaldırmak için API",
                    dynamicImageModal: "Resim modalini açarken genişlik veya yüksekliği atlamanıza olanak tanır",
                    menuItemDemangler: "Discord Menü Öğesini daha okunabilir yapar",
                    messageEvents: "Mesaj olaylarını kullanan herhangi bir şeyin ihtiyaç duyduğu API",
                    messagePopover: "Mesaj açılır penceresine buton eklemek için API",
                    messageUpdater: "Mesajları güncellemek ve yeniden işlemek için API",
                    nicknameIcons: "Profillerde kullanıcı adlarına simge eklemek için API",
                    notices: "Bildirimlerin otomatik olarak kapatılmasını düzeltir",
                    serverList: "Sunucu listesini değiştiren eklentiler için gerekli API",
                    userSettings: "Discord'un kullanıcı ayarlarını, grupları ve isimleri ortaya çıkarmak için yamalar",
                    audioPlayer: "Discord'un dahili ses dosyalarını veya harici ses bağlantılarını oynatmak için API."
                },
                chatButtons: {
                    context: {
                        buttons: "Butonlar"
                    }
                }
            },
            badges: {
                description: "Kullanıcılara rozet eklemek için API",
                contributor: {
                    plexcord: "Plexcord Katılımcısı",
                    vencord: "Vencord Katılımcısı"
                },
                context: {
                    title: "Rozet Seçenekleri",
                    copy: {
                        name: "Rozetin Adını Kopyala",
                        link: "Rozetin Resim Bağlantısını Kopyala"
                    },
                    refetch: {
                        button: "Rozetleri Yenile",
                        success: "Rozetler başarıyla yenilendi!"
                    }
                },
                modal: {
                    title: "Plexcord Destekçisi",
                    special: "Bu rozet, Plexcord bağışçıları için özel bir ayrıcalıktır.",
                    description: "Lütfen bağışçı olarak Plexcord’un geliştirilmesini desteklemeyi düşünün. Bu bizim için çok değerli olur!!"
                }
            }
        },
        uiElements: {
            manage: "UI Öğelerini Yönet",
            allows: "Beğenmediğiniz butonları gizlemenizi sağlar",
            section: {
                chatbar: {
                    title: "Sohbet Çubuğu Butonları",
                    description: "Bunlar, sohbet giriş çubuğunun sağ tarafındaki butonlardır"
                },
                messagePopover: {
                    title: "Mesaj Açılır Butonları",
                    description: "Bunlar, bir mesajın üzerine geldiğinizde sağda beliren yüzen butonlardır"
                }
            }
        }
    },

    patchHelper: {
        title: "Yama Yardımcısı",
        description: "Plexcord eklentileri için yamalar oluşturmanıza yardımcı olan bir geliştirici aracı.",
        fullPatch: {
            label: "Tam Yama",
            description: "Alanları doldurmak için tam JSON yamanızı buraya yapıştırın"
        },
        find: "Bul",
        match: "Eşleşme",
        replacement: "Değiştir",
        preview: "Önizleme",
        generatedCode: "Oluşturulan Kod",
        group: "Grup",
        diff: "Fark",
        module: "Modül",
        compile: "Derle",
        compiled: "Derleme başarılı",
        copy: {
            clipboard: "Panoya Kopyala",
            codeblock: "Kod Bloğu Olarak Kopyala"
        },
        error: {
            noMatch: "Eşleşme bulunamadı. Belki de o modül tembel (lazy) yükleniyordur.",
            multipleMatch: "Birden fazla eşleşme bulundu. Lütfen daha spesifik bir arama deseni kullanın.",
            noFind: "'Bul' alanı yok.",
            noReplacement: "'Değiştir' alanı yok.",
            invalidReplacement: "Değiştir alanı geçersiz",
            replacementMatch: "'replacement.match' alanı yok",
            replacementReplace: "'replacement.replace' alanı yok",
            replacementMustFunction: "Değiştirme bir fonksiyon olmalıdır"
        },
        cheatSheet: {
            title: "Kopya Kağıdı",
            identifiers: "Tanımlayıcılarla (değişken adları, sınıf adları vb.) eşleşen özel regex kaçış dizisi",
            dollar: "$ ekler",
            entireMatch: "Tüm eşleşmeyi ekler",
            beforeMatch: "Eşleşmeden önceki alt dizeyi ekler",
            afterMatch: "Eşleşmeden sonraki alt dizeyi ekler",
            nthGroup: "n'inci yakalama grubunu ekler ($1, $2...)",
            pluginInstance: "Eklenti örneğini ekler"
        },
        replacementEval: {
            label: "Değiştirmeyi fonksiyon olarak işle",
            description: "'Değiştirme' bu etkinleştirildiğinde bir fonksiyon olarak değerlendirilecektir."
        }
    },

    sync: {
        title: "Yedekle ve Geri Yükle",
        warning: "Uyarı",
        warningText: "Bir ayar dosyasını içe aktarmak mevcut ayarlarınızı geçersiz kılacaktır. Mevcut yapılandırmanızı korumak istiyorsanız önce bir yedeği dışa aktardığınızdan emin olun.",
        description: "Plexcord ayarlarınızı bir JSON dosyası olarak içe ve dışa aktarabilirsiniz. Bu sayede ayarlarınızı kolayca başka bir cihaza taşıyabilir veya Plexcord ya da Discord’u yeniden yükledikten sonra ayarlarınızı geri yükleyebilirsiniz.",
        successful: "Ayarlar başarıyla içeri aktarıldı. Değişikliklerin etkili olması için uygulamayı yeniden başlatın!",
        error: {
            failure: "Ayarları içe aktarma başarısız oldu: {{error}}",
            invalid: "Geçersiz Ayarlar. Bu gerçekten bir Plexcord Ayar dosyası mı?"
        },
        settings: {
            text: "Dışarı aktarma şu ayarları içerir:",
            quickcss: "Özel QuickCSS",
            theme: "Tema Bağlantıları",
            plugins: "Eklenti Ayarları",
            datastores: "Eklenti Veri Depoları (örn. Timezones veya IRememberYou)"
        },
        import: {
            title: "Ayarları İçe Aktar",
            description: "Yapılandırmanızı geri yüklemek için daha önce dışa aktarılan bir ayar dosyası seçin. Bu, mevcut tüm ayarlarınızı yedeğin içindekilerle değiştirecektir.",
            all: "Tüm Ayarları İçe Aktar",
            plugins: "Eklentiyi İçe Aktar",
            css: "QuickCSS'yi İçe Aktar",
            datastore: "Veri Depolarını İçe Aktar"
        },
        export: {
            title: "Ayarları Dışa Aktar",
            description: "Mevcut Plexcord ayarlarınızı yedekleme veya başka bir cihaza aktarma için bir dosyaya dışa aktarabilirsiniz.",
            all: "Tüm Ayarları Dışa Aktar",
            plugins: "Eklentiyi Dışa Aktar",
            css: "QuickCSS'yi Dışa Aktar",
            datastore: "Veri Depolarını Dışa Aktar"
        }
    },

    changelog: {
        text: "Değişiklik Notları",
        title: "Değişiklik Notları",
        description: "Plexcord’daki en son değişiklikleri ve güncellemeleri burada bulabilirsiniz.",
        by: "yazar",
        check: "Depoyu kontrol et",
        uptodate: "güncel",
        update: "Güncelle",
        noMessage: "Mesaj yok",
        unknown: "Bilinmiyor",
        updatedPlugins: "Güncellenen Eklentiler",
        newSettings: "Yeni Ayarlar",
        newSettingTooltip: "{{plugin}} için yeni ayar",
        loading: "Yükleniyor...",
        repoUptodate: "Depo güncel",
        fetch: "Depodan Getir",
        clear: "Tüm Notları Temizle",
        internet: "İnternet bağlantınız olduğundan emin olun ve tekrar deneyin.",
        recent: "Son Değişiklikler",
        codeChanges: "Kod Değişiklikleri {{count}} yeni commit",
        updateLogs: "{{count}} Güncelleme Notu",
        noCommit: "Mevcut sürümünüzden ileriye dönük commit bulunamadı. Yeni değişiklikleri kontrol etmek için 'Depodan Getir'e tıklayın.",
        previous: "Önceki güncelleme oturumları, commit geçmişleri ve eklenti değişiklikleriyle birlikte.",
        modal: {
            description: "Plexcord’daki en son değişiklikleri görüntüleyin. Bu işlem, depodan commitleri doğrudan getirerek yenilikleri size gösterir.",
            repository: "Depo",
            failed: "Alınamadı - konsolu kontrol edin",
            current: "Mevcut:",
            hide: "Notları gizle",
            show: "Notları göster"
        },
        commit: {
            available: "commit mevcut",
            no: "Yeni commit yok",
            new: "yeni eklentiler",
            updated: "güncellenen eklentiler",
            settings: "yeni ayarlar"
        },
        toast: {
            already: "Depo zaten güncel",
            found: "Depodan {{count}} yeni commit bulundu",
            local: "Depo, yerel kopyanızla güncel",
            failed: "Depodan getirilemedi :(",
            cleared: "Tüm notlar temizlendi",
            logCleared: "Not temizlendi",
            yourLatest: "Son güncellemenizden kaydedilen commitler"
        },
        alert: {
            clear: {
                title: "Tüm Notları Temizle",
                body: "Tüm notları temizlemek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
                confirm: "Tümünü Temizle",
                confirmColor: "danger",
                cancel: "İptal"
            },
            log: {
                title: "Günlüğü Temizle",
                body: "Bu günlüğü temizlemek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
                confirm: "Günlüğü Temizle",
                confirmColor: "danger",
                cancel: "İptal"
            }
        },
        newPlugins: "{{count}} Yeni Eklenti",
        following: "Son güncellemelerde aşağıdaki eklentiler eklendi:",
        more: "+{{count}} yeni eklenti"
    },

    cloud: {
        text: "Cloud",
        title: "Ayar Senkronizasyonu",
        override: "Bulut Senkronizasyonu",
        description: "Ayarlarınızı bulutla senkronize edin. Bu, birden fazla cihaz arasında minimum çabayla kolay senkronizasyon sağlar.",
        settings: "Bulut Ayarları",
        successful: "Ayarlarınız başarıyla buluta senkronize edildi.",
        updated: "Ayarlarınız güncellendi! Değişikliklerin tam olarak uygulanması için buraya tıklayarak yeniden başlatın!",
        deleted: "Ayarlar buluttan silindi!",
        reauth: "Başka bir istemcide bulut entegrasyonlarının etkin olduğunu fark ettik! Sınırlamalar nedeniyle, devam etmek için yeniden kimlik doğrulaması yapmanız gerekecek. Devam etmek için ayarlar sayfasına gitmek üzere buraya tıklayın!",
        error: {
            setup: "Kurulum başarısız oldu (OAuth yapılandırması alınamadı).",
            secret: "Kurulum başarısız oldu (hiçbir gizli anahtar döndürülmedi).",
            string: "Kurulum başarısız oldu ({{error}}).",
            connect: "Bulut senkronizasyonu, bu hesabın Plexcord Cloud Uygulamasına bağlı olmaması nedeniyle devre dışı bırakıldı. Bu hesabı Bulut Ayarları'nda bağlayarak tekrar etkinleştirebilirsiniz. (not: tercihlerinizi ayrı olarak saklayacaktır)",
            noSettings: "Bulutta ayar bulunamadı.",
            uptodate: "Ayarlarınız güncel.",
            localNewer: "Yerel ayarlarınız bulut ayarlarından daha yenidir.",
            delete: "Ayarlar silinemedi ({{error}}).",
            api: {
                returned: {
                    delete: "Ayarlar silinemedi (API {{status}} döndü).",
                    to: "Ayarlar buluta senkronize edilemedi (API {{status}} döndü).",
                    from: "Ayarlar buluttan senkronize edilemedi (API {{status}} döndü)."
                }
            },
            synchronize: {
                to: "Ayarlar buluta senkronize edilemedi ({{error}}).",
                from: "Ayarlar buluttan senkronize edilemedi ({{error}})."
            }
        },
        notification: {
            title: "Bulut Entegrasyonu",
            enabled: "Bulut Entegrasyonu Etkinleştirildi",
            host: "{{host}} alan adı izin listesine eklendi. Değişikliklerin etkili olması için uygulamayı yeniden başlatın.",
            erase: {
                successful: "Bulut verileri başarıyla silindi",
                failed: "Tüm veriler silinemedi (API {{status}} döndü), lütfen destek ile iletişime geçin."
            }
        },
        button: {
            to: "Buluta Senkronize Et",
            from: "Buluttan Senkronize Et",
            fromDescription: "Bu, mevcut ayarlarınızı buluttan gelenlerle üzerine yazacaktır. Akıllıca kullanın!",
            delete: "Bulut Verilerini Sil",
            enable: "Bulut Entegrasyonlarını Aktifleştir",
            reauthorize: "Yeniden Yetkilendir",
            erase: {
                title: "Emin misiniz?",
                body: "Verileriniz silindikten sonra, geri yüklenemez. Geri dönüş yok!",
                confirm: "Sil!",
                cancel: "Vazgeç",
                erase: "Tüm Verileri Sil"
            },
            confirm: "Şimdi Yeniden Başlat",
            later: "Sonra!"
        },
        privacy: "gizliliğinizi korur",
        source: "kaynak kodu",
        overview: "Plexcord, cihazlar arasında ayar senkronizasyonu gibi avantajlar sağlayan bulut entegrasyonu ile birlikte gelir. Bu {{privacy}} ve {{source}}, AGPL 3.0 lisansı ile sunulduğu için kendi sunucunuzda barındırabilirsiniz.",
        authorization: "Bu, bulut entegrasyonlarını henüz ayarlamadıysanız yetkilendirme isteyecektir.",
        backend: {
            title: "Backend URL",
            description: "Bulut entegrasyonlarını kullanırken hangi backend'i kullanacaksınız.",
            invalid: "Geçersiz URL"
        }
    },

    csp: {
        restart: "Bu değişikliği uygulamak için bir yeniden başlatma gerekiyor",
        blocked: {
            resources: "Engellenen Kaynaklar",
            disallowed: "Bazı resimler, stiller veya yazı tipleri, izin verilmeyen alanlardan geldikleri için engellendi.",
            recommended: "Bunları GitHub veya Imgur'a taşımanız şiddetle önerilir. Ancak, onlara tamamen güvendiğiniz takdirde alanları da izin verebilirsiniz.",
            afterAllow: "Bir alanı izin verdikten sonra, değişikliği uygulamak için {{platform}}'ı tamamen kapatıp (sistem tepsisinden / görev yöneticisinden) yeniden başlatmalısınız.",
            allow: "İzin Ver",
            url: "Engellenen URL'ler"
        },
        imgur: {
            direct: "Imgur bağlantıları {{etc}} biçiminde doğrudan bağlantılar olmalıdır.",
            copy: "Doğrudan bir bağlantı elde etmek için, resme sağ tıklayın ve 'Resim adresini kopyala' seçeneğini belirleyin."
        },
        wants: {
            caller: "{{callerName}} {{domain}} alanına bağlantılara izin vermek istiyor",
            detail: "{{domain}} alanını tanımıyor ve tamamen güvenmiyorsanız, bu isteği iptal etmelisiniz!",
            restart: "Değişikliklerin etkili olması için {{appName}}'ı tamamen kapatıp yeniden başlatmanız gerekir.",
            type: {
                images: "Resimler",
                styles: "CSS ve Temalar",
                fonts: "Yazı Tipleri"
            },
            content: "{{domain}} alanından aşağıdaki içerik türlerinin yüklenmesine izin verilecek:",
            understand: "{{domain}} alanına tamamen güveniyorum ve bağlantılara izin vermenin risklerini anlıyorum.",
            button: {
                cancel: "Vazgeç",
                allow: "İzin Ver"
            },
            title: "Alan Adı İzinleri"
        }
    },

    themes: {
        title: "Temalar",
        local: "Yerel Temalar",
        online: "Çevrimiçi Temalar",
        stylus: "Stylus eklentisi",
        links: "Tema linkleri giriniz...",
        error: {
            userscript: "Temalar Userscript'te desteklenmiyor!",
            stylus: "Bunun yerine {{stylus}} ile temaları yükleyebilirsiniz!",
            expired: "Geçersiz veya süresi dolmuş davet"
        },
        find: "Tema Bul",
        bd: "BetterDiscord Temaları",
        github: "Github",
        download: "BD sitesini kullanıyorsanız, ‘Download’ butonuna tıklayın ve indirilen .theme.css dosyasını themes klasörünüze yerleştirin.",
        external: {
            title: "Harici Kaynaklar",
            security: "Güvenlik nedeniyle, çoğu siteden kaynakların (stil, font, resim vb.) yüklenmesi engellenmiştir.",
            host: "Tüm kaynakların GitHub, GitLab, Codeberg, Imgur, Discord veya Google Fonts üzerinde barındırıldığından emin olun.."
        },
        upload: "Tema Yükle",
        openFolder: "Tema Klasörünü Aç",
        loadMissing: "Kayıp Temaları Yükle",
        editQuickCSS: "QuickCSS'i Düzenle",
        editClient: "ClientTheme'i Düzenle",
        advanced: {
            warning: "Bu alan gelişmiş kullanıcılar içindir. Bunu kullanmakta zorluk yaşıyorsanız, bunun yerine Yerel Temalar sekmesini kullanın.",
            paste: "CSS dosyalarının bağlantılarını buraya yapıştırın",
            line: "Her satıra bir url yerleştirin",
            prefix: "Satırların başına @light veya @dark ekleyerek, Discord temanıza göre otomatik olarak açıp kapatabilirsiniz",
            direct: "Dosyalara doğrudan bağlantılar (raw veya github.io) kullandığınızdan emin olun!"
        },
        website: "Website",
        discord: "Discord Sunucusu",
        unknown: {
            author: "Bilinmeyen Yazar",
            description: "Bir Discord Teması."
        }
    },

    updater: {
        title: "Güncelleyici",
        settings: "Güncelleyici Ayarları",
        updates: "Güncellemeler",
        updated: "güncellendi!",
        restart: "Buraya tıklayarak yeniden başlatın",
        preferences: {
            title: "Güncelleme Tercihleri",
            description: "Plexcord'un kendini nasıl güncel tuttuğunu kontrol edin. Arka planda otomatik olarak güncellemeyi seçebilir veya yeni güncellemeler mevcut olduğunda bildirim alabilirsiniz.",
        },
        github: {
            local: "Yerel kopyanız uzak depoya göre daha yeni kayıtlara sahip. Bu genellikle yerel değişiklikler yaptığınızda olur. Lütfen güncellemeden önce bunları saklayın veya sıfırlayın."
        },
        error: {
            check: "Güncelleme kontrol edilirken sorun oluştu. Daha fazla bilgi için console'a bakın.",
            occurred: "Bir hata oluştu",
            retrieve: "Güncelleme bilgileri alınırken sorun oluştu - Console'u kontrol edin",
            title: "Hayıırr!",
            tryAgain: "Bir hata oluştu. Lütfen tekrar deneyin veya daha fazla bilgi için console'a bakın.",
            command: "{{path}} komutu bulunamadı. Bunu indirin veya tekrar deneyin.",
            code: "Kod {{code}}. Daha fazla bilgi için console'a bakın.",
            running: "{{cmd}} yürütülürken bir sorun oluştu: {{error}}",
            failed: "Bu da başarısız oldu :( Lütfen güncellemeyi deneyin veya yükleyici ile yeniden yükleyin!"
        },
        available: "1 güncelleme mevcut",
        updateAvailable: "Plexcord güncellemesi mevcut!",
        click: "Güncellemeyi görüntülemek için buraya tıklayın",
        available_plural: "{{count}} güncelleme mevcut",
        current: "Güncel!",
        successful: {
            title: "Güncelleme Başarılı!",
            body: "Başarıyla güncellendi. Değişiklikleri kaydetmek için yeniden başlat!",
            button: {
                confirm: "Yeniden Başlat",
                cancel: "Şimdi Değil!",
                update: "Şimdi Güncelle",
                check: "Güncellemeleri Kontrol Et"
            },
            noFound: "Güncelleme bulunamadı"
        },
        automatically: {
            label: "Otomatik Güncelleme",
            description: "Plexcord güncellemeleri otomatik olarak onaylamadan indirir ve yükler"
        },
        notify: {
            label: "Otomatik güncelleme bildirimi göster",
            description: "Plexcord otomatik olarak güncellendiğinde bir bildirim göster"
        },
        repo: "Depo",
        repoDescription: "Plexcord'un güncellemeleri aldığı GitHub deposu burasıdır.",
    },

    components: {
        error: {
            title: "Ah hayır!",
            render: "Bu bileşen render edilirken bir hata oluştu. Daha fazla bilgiyi aşağıda ve konsolunuzda bulabilirsiniz."
        },
        componentFailed: {
            message: "Ah! Bu sayfa render edilemedi. Ancak, bunu düzeltebilecek bir güncelleme mevcut. Şimdi güncellemek ve yeniden başlatmak ister misiniz?"
        }
    },

    commands: {
        error: {
            execute: "'{{command}}' komutu yürütülürken bir hata oluştu"
        }
    },

    notifications: {
        dismiss: "Bildirimi Kapat",
        noYet: "Henüz bildirim yok",
        settings: "Bildirim Ayarları",
        log: {
            title: "Bildirim Günlüğü",
            clear: "Bildirim Günlüğünü Temizle",
            sure: "Emin misiniz?",
            permamently: "{{count}} bildirim kalıcı olarak kaldırılacak. Bu işlem geri alınamaz.",
            button: {
                confirm: "Tamam",
                cancel: "Vazgeç"
            }
        }
    },

    memberlist: {
        error: {
            render: "{{key}} Üye Listesi Dekoratörü render edilirken bir hata oluştu"
        }
    },

    message: {
        accessory: {
            error: {
                render: "{{key}} Mesaj Aksesuarı render edilirken bir hata oluştu"
            }
        },
        decoration: {
            error: {
                render: "{{key}} Mesaj Dekorasyonu render edilirken bir hata oluştu"
            }
        }
    },

    utils: {
        toast: {
            copied: "Panoya kopyalandı!"
        }
    },

    common: {
        unit: {
            year: "yıl",
            years: "yıl",
            month: "ay",
            months: "ay",
            week: "hafta",
            weeks: "hafta",
            day: "gün",
            days: "gün",
            hour: "saat",
            hours: "saat",
            minute: "dakika",
            minutes: "dakika",
            second: "saniye",
            seconds: "saniye",
            ago: "önce",
            s: " "
        }
    },

    plugin: {
        noTrack: {
            name: "NoTrack",
            description: "Discord'un takip sistemini (analitik/'science'), metriklerini ve Sentry çökme raporlamasını devre dışı bırakır",
            option: {
                disableAnalytics: {
                    label: "Analizi Kapat",
                    description: "Discord'un takip sistemini (analitik/'science') metriklerini ve Sentry çökme raporlamasını devre dışı bırak"
                }
            }
        },
        settings: {
            name: "Ayarlar",
            description: "Ayarlar arayüzünü ve hata ayıklama bilgisi ekler",
            option: {
                language: {
                    label: "Dil",
                    description: "Plexcord için tercih ettiğiniz dili seçin."
                },
                settingsLocation: {
                    label: "Ayarlar Konumu",
                    description: "Plexcord ayarlar bölümünün nereye konulacağını belirler"
                }
            }
        },
        supportHelper: {
            name: "Destek Yardımcısı",
            description: "Sana destek sağlamamıza yardımcı olur",
            commands: {
                description: {
                    debug: "Plexcord hata ayıklama bilgilerini gönder",
                    plugins: "Plexcord eklenti listesini gönder"
                }
            },
            modals: {
                outdated: {
                    title: "Bekle!",
                    body: "Eski bir Plexcord sürümü kullanıyorsun! Büyük ihtimalle sorunların zaten çözülmüştür.",
                    footer: "Lütfen destek istemeden önce güncelleme yap!",
                    button: {
                        cancel: "Güncellemeleri Gör",
                        confirm: "Şimdi Güncelle ve Yeniden Başlat",
                        secondaryConfirm: "Ne yaptığımı biliyorum veya güncelleyemem"
                    }
                },
                updater: {
                    title: "Bekle!",
                    body: "Harici olarak güncellenmiş bir Plexcord sürümü kullanıyorsun, bu sürüm için destek sağlamıyoruz!",
                    footer: "Lütfen ya {{officially}} geç ya da destek için paket sağlayıcına başvur.",
                    officially: "resmi olarak desteklenen Plexcord sürümüne",
                    button: {
                        cancel: "İptal",
                        confirm: "İndirme Sayfasını Görüntüle",
                        now: "Şimdi Güncelle"
                    },
                    toast: {
                        success: "Başarılı! Yeniden başlatılıyor...",
                        already: "Zaten güncel!",
                        failed: "Güncelleme başarısız oldu :("
                    }
                },
                custom: {
                    title: "Bekle!",
                    header: "Plexcord'un özel bir sürümünü kullanıyorsun, bu sürüm için destek sağlamıyoruz!",
                    body: "Sadece {{officialBuild}} için destek sağlıyoruz. Ya {{switch}} ya da sorununla kendin ilgilen.",
                    footer: "Bu kuralı görmezden gelirsen destek alma hakkın iptal edilecektir.",
                    official: "resmi sürümler",
                    switch: "resmi bir sürüme geç",
                    button: {
                        confirm: "Anladım",
                        secondaryConfirm: "Bir daha gösterme"
                    }
                }
            },
            button: {
                debug: "/plexcord-debug komutunu çalıştır",
                plugins: "/plexcord-plugins komutunu çalıştır",
                snippet: "Kod parçasını çalıştır"
            },
            toast: {
                success: "Başarılı!",
                failed: "Kod parçası çalıştırılamadı :(",
                failedOpenInvite: "Davet açılamadı, lütfen konsolu kontrol edin :("
            },
            dm: {
                warning: "Lütfen destek için Plexcord eklenti geliştiricilerine özel mesaj göndermeyin!{{br}}Bunun yerine {{support}} sunucusuna katılarak Plexcord destek kanalını kullanabilirsiniz: {{channel}}"
            }
        },
        accountPanelServerProfile: {
            name: "AccountPanelServerProfile",
            description: "Hesap panelinize sol tıkladığınızda sunucu profilinizi görüntülemek için sağ tıklayın",
            option: {
                prioritizeServerProfile: {
                    label: "Sunucu Profilini Önceliklendir",
                    description: "Hesap panelinize sol tıkladığınızda sunucu profilini önceliklendir"
                }
            },
            context: {
                account: "Hesap Profilini Göster",
                server: "Sunucu Profilini Göster",
                prioritize: "Sunucu Profilini Önceliklendir"
            }
        },
        allCallTimers: {
            name: "AllCallTimers",
            description: "Tüm sesli aramalarda çağrı zamanlayıcılarını gösterir",
            option: {
                showWithoutHover: {
                    label: "Üzerine Gelmeden Göster",
                    description: "Üzerine gelmeye gerek kalmadan her zaman zamanlayıcıyı göster"
                },
                showRoleColor: {
                    label: "Rol Rengini Göster",
                    description: "Kullanıcının rol renginde göster (ShowRoleColor eklentisi etkinse)"
                },
                trackSelf: {
                    label: "Kendini Takip Et",
                    description: "Kendi zamanlayıcını da göster"
                },
                showSeconds: {
                    label: "Saniyeleri Göster",
                    description: "Zamanlayıcıda saniyeleri de göster"
                },
                format: {
                    label: "Format",
                    description: "Kompakt veya insan tarafından okunabilir format",
                    human: "30g 23s 00d 42s"
                },
                watchLargeGuilds: {
                    label: "Büyük Sunucuları İzle",
                    description: "Büyük sunuculardaki kullanıcıları takip et. Çok sayıda aktif sesli kullanıcıya sahip büyük sunucularda bulunuyorsan bu gecikmeye neden olabilir. 2000’e kadar aktif sesli kullanıcıyla test edildi ve herhangi bir sorun yaşanmadı."
                },
                fixUI: {
                    label: "Kullanıcı Arayüzü Düzeltmesi",
                    description: "Bazı durumlarda zamanlayıcı kullanıcı arayüzünü bozabilir. Bu seçeneği etkinleştirerek bunu düzeltebilirsiniz."
                }
            }
        },
        altKrispSwitch: {
            name: "AltKrispSwitch",
            description: "Gürültü Önleme Açılır Penceresinin, Krisp ve Standart yerine Hiçbiri ve Krisp arasında geçiş yapmasını sağlar."
        },
        alwaysAnimate: {
            name: "AlwaysAnimate",
            description: "Animasyon yapılabilecek her şeyi canlandırır.",
            option: {
                icons: {
                    label: "İkonlar",
                    description: "Sunucu ikonlarını, avatarları, süslemeleri ve daha fazlasını her zaman canlandır."
                },
                statusEmojis: {
                    label: "Durum Emojileri",
                    description: "Durum emojilerini her zaman canlandır."
                },
                serverBanners: {
                    label: "Sunucu Afişleri",
                    description: "Sunucu afişlerini her zaman canlandır."
                },
                nameplates: {
                    label: "İsim Levhaları",
                    description: "İsim levhalarını her zaman canlandır."
                },
                roleGradients: {
                    label: "Rol Geçişleri",
                    description: "Rol renk geçişlerini her zaman canlandır."
                }
            }
        },
        alwaysExpandProfile: {
            name: "AlwaysExpandProfile",
            description: "Kullanıcı profillerini her zaman genişletilmiş olarak açar"
        },
        alwaysExpandRoles: {
            name: "AlwaysExpandRoles",
            description: "Her zaman profil açılır pencerelerinde rol listesini genişletir",
            option: {
                hideArrow: {
                    label: "Okları Gizle",
                    description: "Okları gizle"
                }
            }
        },
        alwaysTrust: {
            name: "AlwaysTrust",
            description: "Kötü niyetli alan ve şüpheli dosya açılır penceresini kaldırır",
            option: {
                domain: {
                    label: "Alan adı",
                    description: "'Kötü niyetli alan adı' açılır penceresini kaldırır"
                },
                file: {
                    label: "Dosya",
                    description: "'Potansiyel olarak tehlikeli' indirme açılır penceresini kaldırır"
                },
                noDeleteSafety: {
                    label: "Silme Güvenliği Yok",
                    description: "Sunucuyu silerken sunucu adını girme gerekliliğini kaldırır"
                },
                confirmModal: {
                    label: "Onay Açılır Penceresi",
                    description: "'Bu işlemi onaylamak istediğinizden emin misiniz?' açılır penceresini kaldırır"
                }
            },
            alert: {
                title: "Sunucuyu sil?",
                body: "Bu işlem kalıcıdır, eğer belli değilse belirtelim!",
                confirm: "Sil",
                cancel: "İptal"
            }
        },
        amITyping: {
            name: "AmITyping",
            description: "Diğer insanların yazdığınızı görüp görmediğini gösterir."
        },
        anonymiseFileNames: {
            name: "AnonymiseFileNames",
            description: "Yüklenen dosya adlarını anonimleştirir.",
            option: {
                anonymiseByDefault: {
                    label: "Varsayılan olarak anonimleştir",
                    description: "Dosya adlarını varsayılan olarak anonimleştirir. İsterseniz dosya yükleme açılır penceresinde devre dışı bırakabilirsiniz."
                },
                spoilerMessages: {
                    label: "Spoiler Mesajları",
                    description: "Spoiler olarak işaretlenmiş dosyaların adlarını anonimleştirir."
                },
                method: {
                    label: "Yöntem",
                    description: "Anonimleştirme yöntemi",
                    random: "Rastgele Karakterler",
                    consistent: "Tutarlı",
                    timestamp: "Zaman Damgası"
                },
                randomisedLength: {
                    label: "Rastgeleleştirme uzunluğu",
                    description: "Rastgele karakter uzunluğu"
                },
                consistent: {
                    label: "Tutarlı anonimleştirme",
                    description: "Tutarlı anonimleştirme için gizli anahtar"
                }
            },
            using: {
                anonymous: "Anonim dosya adı kullanılıyor",
                spoiler: "Normal dosya adı kullanılıyor"
            },
            spoiler: {
                description: "Dosyalarınız için Spoiler'ınızı açıp kapatın",
                toggle: "Dosyalarınız için Spoiler'ınızı açıp kapatın (varsayılan açık)",
                enabled: "Spoiler aktif edildi!",
                disabled: "Spoiler devre dışı bırakıldı!"
            }
        },
        appleMusic: {
            name: "Apple Music Rich Presence",
            description: "Apple Music dinleme durumunu Discord Rich Presence olarak gösterir",
            about: "Özelleştirilebilir etkinlik formatı dizeleri için, etkinliklere parça verilerini eklemek amacıyla birkaç özel dize kullanabilirsin! {{name}} parça adıyla, {{artist}} sanatçı adı(ları)yla, {{album}} ise albüm adıyla değiştirilir.",
            button: {
                listen: "Apple Music'te Dinle",
                songLink: "SongLink'te Görüntüle"
            },
            option: {
                activityType: {
                    label: "Aktivite Türü",
                    description: "Hangi tür aktivite gösterilecek",
                    listening: "Dinliyor",
                    playing: "Oynuyor"
                },
                statusDisplayType: {
                    label: "Durum Gösterim Türü",
                    description: "Üye listesinde parça / sanatçı adını göster",
                    off: "Gösterme (genel dinleme mesajını gösterir)",
                    artist: "Sanatçı adını göster",
                    track: "Parça adını göster"
                },
                refreshInterval: {
                    label: "Yenileme Aralığı",
                    description: "Etkinlik yenileme aralığı (saniye)"
                },
                enableTimestamps: {
                    label: "Zaman Damgalarını Etkinleştir",
                    description: "Zaman damgalarını etkinleştirip etkinleştirmeyeceğiniz"
                },
                enableButtons: {
                    label: "Butonları Etkinleştir",
                    description: "Butonları etkinleştirip etkinleştirmeyeceğiniz"
                },
                nameString: {
                    label: "İsim Dizesi",
                    description: "Etkinlik ismi format dizesi"
                },
                detailsString: {
                    label: "Detaylar Dizesi",
                    description: "Etkinlik detayları format dizesi"
                },
                stateString: {
                    label: "Durum Dizesi",
                    description: "Etkinlik durumu format dizesi"
                },
                largeImageType: {
                    label: "Büyük Resim Türü",
                    description: "Etkinlik varlıkları büyük resim türü",
                    album: "Albüm kapak resmi",
                    artist: "Sanatçı resmi",
                    disabled: "Devre dışı"
                },
                largeTextString: {
                    label: "Büyük Metin Dizesi",
                    description: "Etkinlik varlıkları büyük metin format dizesi"
                },
                smallImageType: {
                    label: "Küçük Resim Türü",
                    description: "Etkinlik varlıkları küçük resim türü",
                    album: "Apple Music logosu",
                    artist: "Sanatçı resmi",
                    disabled: "Devre dışı"
                },
                smallTextString: {
                    label: "Küçük Metin Dizesi",
                    description: "Etkinlik varlıkları küçük metin format dizesi"
                }
            }
        },
        arRpc: {
            name: "WebRichPresence (arRPC)",
            description: "Discord Web’de RPC’yi etkinleştirmek için arRPC istemci eklentisi (deneysel)",
            use: {
                title: "arRPC nasıl kullanılır",
                enable: "Sunucuyu çalıştırmak için {{link}} ve ardından eklentiyi etkinleştir.",
                link: "GitHub deposundaki talimatları izle"
            },
            toast: {
                connected: "arRPC'ye bağlandı",
                failed: "arRPC'ye bağlanılamadı, çalışıyor mu?",
                retry: "Tekrar Dene"
            }
        },
        atSomeone: {
            name: "AtSomeone",
            description: "@someone ile rastgele birini etiketlemeni sağlar"
        },
        autoDNDWhilePlaying: {
            name: "AutoDndWhilePlaying",
            description: "Oyun başlattığında çevrimiçi durumunu (çevrimiçi, boşta, rahatsız etmeyin) otomatik olarak günceller",
            option: {
                statusToSet: {
                    label: "Ayarlanacak Durum",
                    description: "Bir oyun başlatıldığında ayarlanacak durum",
                    online: "Çevrimiçi",
                    dnd: "Rahatsız Etmeyin",
                    idle: "Boşta",
                    invisible: "Görünmez"
                },
                excludeInvisible: {
                    label: "Görünmezi Hariç Tut",
                    description: "Durumun görünmez olarak ayarlandığında otomatik durum değişikliklerini engelle"
                }
            }
        },
        bannersEverywhere: {
            name: "Banners Everywhere",
            description: "Üye listesinde afişleri görüntüler",
            option: {
                animate: {
                    label: "Animasyon",
                    description: "Afişi animasyonlu yap"
                },
                preferNameplate: {
                    label: "İsim Plakası Tercih Et",
                    description: "Afiş yerine isim plakası tercih et"
                }
            }
        },
        betterActivities: {
            name: "BetterActivities",
            description: "Üye listesinde etkinlik simgelerini gösterir ve tüm etkinlikleri gösterme olanağı tanır",
            option: {
                memberList: {
                    label: "Üye Listesi",
                    description: "Üye listesinde etkinlik simgelerini göster"
                },
                iconSize: {
                    label: "Simge Boyutu",
                    description: "Etkinlik simgelerinin boyutu"
                },
                specialFirst: {
                    label: "Önce Özeller",
                    description: "Özel etkinlikleri önce göster (Şu anda Spotify ve Twitch)"
                },
                renderGifs: {
                    label: "GIF'leri Renderla",
                    description: "GIF'lerin renderlanmasına izin ver"
                },
                removeGameActivityStatus: {
                    label: "Oyun Durumu'nu Kaldır",
                    description: "Oyun durumu simgesini ve durumunu kaldır"
                },
                userPopout: {
                    label: "Kullanıcı Açılır Penceresi",
                    description: "Profil açılır penceresi/kenar çubuğunda tüm etkinlikleri göster"
                },
                hideTooltip: {
                    label: "Araç İpucunu Gizle",
                    description: "Etkinlikleri çeşitli yerlerde gizler"
                },
                allActivitiesStyle: {
                    label: "Tüm Etkinlikler Stili",
                    description: "Tüm etkinlikleri gösterme stili",
                    list: "Liste",
                    carousel: "Kaydırıcı",
                    left: "Sol",
                    right: "Sağ"
                }
            }
        },
        betterBanReasons: {
            name: "BetterBanReasons",
            description: "Discord yasaklama penceresinde kullanılacak özel nedenler oluştur ve/veya varsayılan olarak seçenekler yerine bir metin girişi göster.",
            option: {
                reasons: {
                    label: "Nedenler",
                    description: "Senin özel nedenlerin"
                },
                isTextInputDefault: {
                    label: "Varsayılan Metin Girişi",
                    description: "Varsayılan olarak seçim menüsü yerine bir metin girişi gösterir. (Diğer seçeneğine tıklamakla eşdeğer)"
                }
            },
            title: "Nedenler",
            placeholder: "Neden",
            add: "Başka bir neden ekle"
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Engellenen kullanıcılar listesini aramanıza ve ayarlarda isimleri seçilebilir hale getirmenize olanak tanır.",
            placeholder: "Kullanıcı ara..."
        },
        betterCommands: {
            name: "BetterCommands",
            description: "Komut sistemini çeşitli iyileştirmelerle geliştirir.",
            option: {
                autoFillArguments: {
                    label: "Argümanları Otomatik Doldur",
                    description: "Komutu yalnızca gerekli argümanlarla değil, tüm argümanlarla otomatik olarak doldurur"
                },
                allowNewlinesInCommands: {
                    label: "Komutlarda Yeni Satırları İzin Ver",
                    description: "Komut girişlerinde yeni satırlara izin ver (Shift + Enter)"
                }
            },
            command: {
                refresh: {
                    description: "Discord uygulama komutlarını yerel olarak yeniler",
                    user: "yenilemeye çalışılacak belirli kullanıcı",
                    refreshing: "Uygulama komutları yenileniyor...",
                    refreshed: "Komutlar başarıyla yenilendi!",
                    failed: "Komutları yenileme başarısız oldu. Ayrıntılar için konsolu kontrol edin."
                }
            }
        },
        betterFolders: {
            name: "BetterFolders",
            description: "Sunucu klasörlerini özel bir kenar çubuğunda gösterir ve klasörlerle ilgili geliştirmeler ekler",
            option: {
                sidebar: {
                    label: "Kenar Çubuğu",
                    description: "Klasördeki sunucuları özel kenar çubuğunda göster"
                },
                sidebarAnim: {
                    label: "Kenar Çubuğu Animasyonu",
                    description: "Klasör kenar çubuğunu açarken animasyon kullan"
                },
                closeAllFolders: {
                    label: "Tüm Klasörleri Kapat",
                    description: "Klasörde olmayan bir sunucu seçildiğinde tüm klasörleri kapat"
                },
                closeAllHomeButton: {
                    label: "Ana Sayfa Butonunda Tümünü Kapat",
                    description: "Ana sayfa butonuna tıklandığında tüm klasörleri kapat"
                },
                closeOthers: {
                    label: "Diğerlerini Kapat",
                    description: "Bir klasör açıldığında diğer klasörleri kapat"
                },
                closeServerFolder: {
                    label: "Sunucu Klasörünü Kapat",
                    description: "Klasördeki bir sunucu seçildiğinde klasörü kapat"
                },
                forceOpen: {
                    label: "Zorla Aç",
                    description: "Bir klasörün sunucusuna geçildiğinde klasörü açmaya zorla"
                },
                keepIcons: {
                    label: "Simgeleri Koru",
                    description: "Klasör BetterFolders kenar çubuğunda açıkken ana sunucu çubuğu klasöründeki sunucu simgelerini göstermeye devam et"
                },
                showFolderIcon: {
                    label: "Klasör Simgesini Göster",
                    description: "BetterFolders kenar çubuğunda klasör sunucularının üzerinde klasör simgesini göster",
                    never: "Asla",
                    always: "Her zaman",
                    moreThanOne: "Birden fazla klasör genişletildiğinde"
                }
            }
        },
        betterGifAltText: {
            name: "BetterGifAltText",
            description: "GIF alt metnini yalnızca 'GIF' olmaktan çıkarıp gif etiketlerini / dosya adını içerecek şekilde değiştirir"
        },
        betterGifPicker: {
            name: "BetterGifPicker",
            description: "GIF seçicisinin varsayılan olarak favori kategorisini açmasını sağlar"
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Davetlerin bitiş tarihini gör, davet edenin profilini görüntüle ve adına tıklayarak keşfedilebilir sunucuları katılmadan önce önizle.",
            render: {
                tip: "Bu davet {{time}} sonra sona erecek",
                header: "{{name}} seni {{server}} sunucusuna davet etti",
                never: "hiçbir zaman"
            }
        },
        betterNotesBox: {
            name: "BetterNotesBox",
            description: "Notları gizle veya yazım denetimini devre dışı bırak (Ayarlar kısmından yapılandır!!) ",
            option: {
                hide: {
                    label: "Notları Gizle",
                    description: "Kullanıcı açılır pencerelerinde not kutusunu gizle"
                },
                noSpellCheck: {
                    label: "Yazım Denetimini Kapat",
                    description: "Notlarda yazım denetimini devre dışı bırak"
                }
            }
        },
        betterPlusReacts: {
            name: "BetterPlusReacts",
            description: ":emoji: öncesindeki artı işareti sayısı, emojinin ekleneceği mesajı belirtir"
        },
        betterQuickReact: {
            name: "BetterQuickReact",
            description: "Mesaj bağlam menüsündeki hızlı tepki butonlarını geliştirir.",
            option: {
                frequentEmojis: {
                    label: "Sık Kullanılan Emojiler",
                    description: "Favori emojiler yerine sık kullanılan emojileri kullan"
                },
                rows: {
                    label: "Satırlar",
                    description: "Gösterilecek hızlı tepkilerin satır sayısı"
                },
                columns: {
                    label: "Sütunlar",
                    description: "Gösterilecek hızlı tepkilerin sütun sayısı"
                },
                compactMode: {
                    label: "Kompakt Mod",
                    description: "Butonları orijinal boyutlarının %75’ine ölçeklerken içteki emojiyi %125’e büyütür. Emojiler orijinal boyutun %93.75’i olacaktır. En az 5 sütun kullanmanız önerilir"
                },
                scroll: {
                    label: "Kaydırma",
                    description: "Emoji listesini kaydırmayı etkinleştir"
                }
            }
        },
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Kullanıcı profillerinde rollere sağ tıklandığında rol rengini kopyalama / rolü düzenleme / rol simgesini görüntüleme seçeneklerini ekler",
            option: {
                roleIconFileFormat: {
                    label: "Rol Simge Dosya Formatı",
                    description: "Rol simgelerini görüntülerken kullanılacak dosya formatı"
                }
            },
            context: {
                copyColor: "Rol Rengini Kopyala",
                editRole: "Rolü Düzenle",
                viewIcon: "Rol Simgesini Görüntüle"
            }
        },
        betterRoleDot: {
            name: "BetterRoleDot",
            description: "RoleDot (erişilebilirlik ayarı) tıklandığında rol rengini kopyalar. Ayrıca RoleDot ve renkli isimlerin aynı anda kullanılmasına izin verir.",
            option: {
                bothStyles: {
                    label: "Her İki Stil",
                    description: "Hem rol noktasını hem de renkli isimleri göster"
                },
                copyRoleColorInProfilePopout: {
                    label: "Profil Açılır Penceresinde Rol Rengini Kopyala",
                    description: "Profil açılır penceresindeki rol noktasına tıklayarak rol rengini kopyalamaya izin ver"
                }
            }
        },
        betterSessions: {
            name: "BetterSessions",
            description: "Oturumlar (cihazlar) menüsünü geliştirir. Tam zaman damgalarını görmeni, her oturuma özel bir ad vermeni ve yeni oturumlar hakkında bildirim almanı sağlar.",
            new: "YENİ",
            newSessions: "Yeni Oturum:",
            rename: "Yeniden Adlandır",
            newDevice: "Yeni Cihaz Adı",
            resetName: "İsmi Sıfırla",
            save: "Kaydet",
            cancel: "İptal",
            option: {
                backgroundCheck: {
                    label: "Arka Plan Kontrolü",
                    description: "Yeni oturumları arka planda kontrol et ve tespit edildiğinde bildirim göster"
                },
                checkInterval: {
                    label: "Kontrol Aralığı",
                    description: "Arka planda (etkinleştirildiyse) yeni oturumların ne sıklıkla kontrol edileceği, dakika cinsinden"
                }
            }
        },
        betterSettings: {
            name: "BetterSettings",
            description: "Ayarlar menüsünü açma deneyimini geliştirir",
            option: {
                disableFade: {
                    label: "Geçiş Efektini Devre Dışı Bırak",
                    description: "Crossfade animasyonunu devre dışı bırak"
                },
                organizeMenu: {
                    label: "Menüyü Düzenle",
                    description: "Ayarlar dişli simgesi menüsünü kategorilere ayırır"
                },
                eagerLoad: {
                    label: "Hızlı Yükleme",
                    description: "Menü ilk kez açıldığında yükleme gecikmesini kaldırır"
                }
            },
            alert: {
                title: "Yeniden başlatma gerekli",
                restart: "Yeniden başlatma gerektiren ayarları değiştirdiniz.",
                confirm: "Şimdi yeniden başlat",
                cancel: "Daha sonra!"
            }
        },
        betterUploadButton: {
            name: "BetterUploadButton",
            description: "Tek tıklama ile yükleme yapın, sağ tıklama ile menüyü açın"
        },
        biggerStreamPreview: {
            name: "BiggerStreamPreview",
            description: "Bu eklenti, yayın önizlemelerini büyütmenizi sağlar",
            context: {
                viewPreview: "Yayın Önizlemesini Gör"
            }
        },
        blockKeywords: {
            name: "BlockKeywords",
            description: "Belirli kullanıcı tanımlı anahtar kelimeleri içeren mesajları, gönderen kullanıcı engellenmiş gibi engeller.",
            option: {
                blockedWords: {
                    label: "Engellenen Kelimeler",
                    description: "Virgülle ayrılmış engellenecek kelimeler listesi"
                },
                useRegex: {
                    label: "Regex Kullan",
                    description: "Mesaj içeriğini kontrol ederken her değeri düzenli ifade olarak kullan (gelişmiş)"
                },
                caseSensitive: {
                    label: "Büyük/Küçük Harf Duyarlı",
                    description: "Büyük/küçük harf duyarlı arama kullanılsın mı"
                },
                ignoreBlockedMessages: {
                    label: "Engellenen Mesajları Yoksay",
                    description: "Yeni mesaj çubuğunu tamamen yoksayar (son mesajlar)"
                }
            }
        },
        blockKrisp: {
            name: "BlockKrisp",
            description: "Krisp’in yüklenmesini engeller"
        },
        blurNSFW: {
            name: "BlurNSFW",
            description: "NSFW kanallarındaki ekleri üzerine gelinene kadar bulanıklaştırır",
            option: {
                blurAmount: {
                    label: "Bulanıklık Miktarı",
                    description: "Bulanıklık miktarı (piksel cinsinden)"
                },
                blurAllChannels: {
                    label: "Tüm Kanalları Bulanıklaştır",
                    description: "Tüm kanallardaki ekleri bulanıklaştır (sadece NSFW değil)"
                }
            }
        },
        bypassStatus: {
            name: "BypassStatus",
            description: "Rahatsız Etmeyin modundayken belirli kaynaklardan bildirim almaya devam edin. Kullanıcılara/kanallara/sunuculara sağ tıklayarak Rahatsız Etmeyin modunu atlamalarını sağlayabilirsiniz.",
            context: {
                remove: "Durum Atlamayı Kaldır",
                add: "Durum Atlamayı Ekle"
            },
            option: {
                guilds: {
                    label: "Sunucular",
                    description: "Atlamaya izin verilen sunucular (sunucuda herhangi bir yerde pinglendiğinde bildirim alır)",
                    placeholder: "Virgülle ayırın"
                },
                channels: {
                    label: "Kanallar",
                    description: "Atlamaya izin verilen kanallar (o kanalda pinglendiğinde bildirim alır)",
                    placeholder: "Virgülle ayırın"
                },
                users: {
                    label: "Kullanıcılar",
                    description: "Atlamaya izin verilen kullanıcılar (DM’lerde gönderilen tüm mesajlar için bildirim alır)",
                    placeholder: "Virgülle ayırın"
                },
                allowOutsideOfDms: {
                    label: "DM Dışında İzin Ver",
                    description: "Seçilen kullanıcıların, DM dışındaki durumları da atlamasına izin ver (kanal/sunucu atlaması gibi davranır, ancak seçilen kullanıcıların gönderdiği tüm mesajlar için geçerlidir)"
                },
                notificationSound: {
                    label: "Bildirim Sesi",
                    description: "Bildirim sesinin çalınıp çalınmayacağını belirler"
                },
                statusToUse: {
                    label: "Kullanılacak Durum",
                    description: "Beyaz liste için kullanılacak durum",
                    online: "Çevrimiçi",
                    idle: "Boşta",
                    dnd: "Rahatsız Etmeyin",
                    invisible: "Görünmez"
                }
            }
        },
        cakeDay: {
            name: "CakeDay",
            description: "Kullanıcı doğum günlerini pasta ikonlarıyla takip edin ve görüntüleyin",
            context: {
                label: "Doğum Günü",
                setBirthday: "Doğum Günü Ayarla",
                clearBirthday: "Doğum Gününü Sil",
                current: "Şu anki:"
            },
            option: {
                chat: {
                    label: "Sohbet",
                    description: "Sohbette kullanıcı adlarının yanında pasta ikonlarını göster"
                },
                memberList: {
                    label: "Üye Listesi",
                    description: "Üye listesinde pasta ikonlarını göster"
                },
                profileBadge: {
                    label: "Profil Rozeti",
                    description: "Kullanıcı profilinde pasta rozetini göster"
                },
                notificationSound: {
                    label: "Bildirim Sesi",
                    description: "Doğum günü bildirimi gönderildiğinde ses çal"
                },
                userList: {
                    label: "Kaydedilen Doğum Günleri",
                    description: "Kaydedilen doğum günlerini yönet"
                }
            },
            locations: {
                chat: {
                    label: "Sohbet",
                    description: "Sohbette kullanıcı adlarının yanında"
                },
                memberList: {
                    label: "Üye Listesi",
                    description: "Üye listesinde"
                }
            },
            toast: {
                success: "Doğum günü başarıyla ayarlandı!",
                invalid: "Geçersiz doğum günü formatı! Sadece GG/AA kabul edilir.",
                cleared: "Doğum günü başarıyla silindi!"
            },
            notification: {
                title: "🎂 Bugün Doğum Günü!",
                body: "Bugün {{username}} kullanıcısının doğum günü!"
            },
            modal: {
                title: "{{username}} için Doğum Günü Ayarla",
                description: "Doğum gününü GG/AA formatında gir (örn. 25/12)",
                placeholder: "örn. 25/12",
                current: "Şu anki doğum günü:",
                set: "Doğum Günü Ayarla",
                cancel: "İptal",
                birthday: "Bugün benim doğum günüm! 🎂",
                saved: "Kaydedilen Doğum Günleri",
                savedDesc: "Henüz kaydedilmiş doğum günü yok. Doğum günlerini eklemek için kullanıcıya sağ tıklayın!",
                today: "Bugün",
                remove: "Kaldır",
                loading: "Yükleniyor...",
                save: "Kaydet",
                edit: "Düzenle"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Sesli aramalara bir sayaç ekler",
            option: {
                format: {
                    label: "Biçim",
                    description: "Zamanlayıcı biçimi. Bu, geçerli herhangi bir moment.js formatı olabilir",
                    stopwatch: "30g 23:00:42",
                    human: "30g 23s 00d 42sn"
                }
            }
        },
        channelBadges: {
            name: "ChannelBadges",
            description: "Kanallara türlerine göre rozetler ekler",
            badge: {
                private: "Bu kanal kilitli.",
                nsfw: "Bu kanal NSFW olarak işaretlenmiş.",
                rules: "Bu kanal, sunucu kuralları kanalıdır."
            },
            option: {
                oneBadgePerChannel: {
                    label: "Kanal Başına Bir Rozet",
                    description: "Her kanal için yalnızca bir rozet göster"
                },
                showTextBadge: {
                    label: "Metin Rozetini Göster",
                    description: "Metin rozetini göster"
                },
                showVoiceBadge: {
                    label: "Ses Rozetini Göster",
                    description: "Ses rozetini göster"
                },
                showCategoryBadge: {
                    label: "Kategori Rozetini Göster",
                    description: "Kategori rozetini göster"
                },
                showDirectoryBadge: {
                    label: "Dizin Rozetini Göster",
                    description: "Dizin rozetini göster"
                },
                showAnnouncementThreadBadge: {
                    label: "Duyuru Konu Rozetini Göster",
                    description: "Duyuru konu rozetini göster"
                },
                showPublicThreadBadge: {
                    label: "Genel Konu Rozetini Göster",
                    description: "Genel konu rozetini göster"
                },
                showPrivateThreadBadge: {
                    label: "Özel Konu Rozetini Göster",
                    description: "Özel konu rozetini göster"
                },
                showStageBadge: {
                    label: "Sahne Rozetini Göster",
                    description: "Sahne rozetini göster"
                },
                showAnnouncementBadge: {
                    label: "Duyuru Rozetini Göster",
                    description: "Duyuru rozetini göster"
                },
                showForumBadge: {
                    label: "Forum Rozetini Göster",
                    description: "Forum rozetini göster"
                },
                showMediaBadge: {
                    label: "Medya Rozetini Göster",
                    description: "Medya rozetini göster"
                },
                showNSFWBadge: {
                    label: "NSFW Rozetini Göster",
                    description: "NSFW rozetini göster"
                },
                showLockedBadge: {
                    label: "Kilitli Rozeti Göster",
                    description: "Kilitli rozetini göster"
                },
                showRulesBadge: {
                    label: "Kurallar Rozetini Göster",
                    description: "Kurallar rozetini göster"
                },
                showUnknownBadge: {
                    label: "Bilinmeyen Rozeti Göster",
                    description: "Bilinmeyen rozetini göster"
                },
                textBadgeLabel: {
                    label: "Metin Rozeti Etiketi",
                    description: "Metin rozeti etiketi",
                    default: "Metin"
                },
                voiceBadgeLabel: {
                    label: "Ses Rozeti Etiketi",
                    description: "Ses rozeti etiketi",
                    default: "Ses"
                },
                categoryBadgeLabel: {
                    label: "Kategori Rozeti Etiketi",
                    description: "Kategori rozeti etiketi",
                    default: "Kategori"
                },
                announcementBadgeLabel: {
                    label: "Duyuru Rozeti Etiketi",
                    description: "Duyuru rozeti etiketi",
                    default: "Haber"
                },
                announcementThreadBadgeLabel: {
                    label: "Duyuru Konu Rozeti Etiketi",
                    description: "Duyuru konu rozeti etiketi",
                    default: "Haber Konusu"
                },
                publicThreadBadgeLabel: {
                    label: "Genel Konu Rozeti Etiketi",
                    description: "Genel konu rozeti etiketi",
                    default: "Konu"
                },
                privateThreadBadgeLabel: {
                    label: "Özel Konu Rozeti Etiketi",
                    description: "Özel konu rozeti etiketi",
                    default: "Özel Konu"
                },
                stageBadgeLabel: {
                    label: "Sahne Rozeti Etiketi",
                    description: "Sahne rozeti etiketi",
                    default: "Sahne"
                },
                directoryBadgeLabel: {
                    label: "Dizin Rozeti Etiketi",
                    description: "Dizin rozeti etiketi",
                    default: "Dizin"
                },
                forumBadgeLabel: {
                    label: "Forum Rozeti Etiketi",
                    description: "Forum rozeti etiketi",
                    default: "Forum"
                },
                mediaBadgeLabel: {
                    label: "Medya Rozeti Etiketi",
                    description: "Medya rozeti etiketi",
                    default: "Medya"
                },
                nsfwBadgeLabel: {
                    label: "NSFW Rozeti Etiketi",
                    description: "NSFW rozeti etiketi",
                    default: "NSFW"
                },
                lockedBadgeLabel: {
                    label: "Kilitli Rozeti Etiketi",
                    description: "Kilitli rozeti etiketi",
                    default: "Kilitli"
                },
                rulesBadgeLabel: {
                    label: "Kurallar Rozeti Etiketi",
                    description: "Kurallar rozeti etiketi",
                    default: "Kurallar"
                },
                unknownBadgeLabel: {
                    label: "Bilinmeyen Rozeti Etiketi",
                    description: "Bilinmeyen rozeti etiketi",
                    default: "Bilinmeyen"
                },
                textBadgeColor: {
                    label: "Metin Rozeti Rengi",
                    description: "Metin rozeti rengi"
                },
                voiceBadgeColor: {
                    label: "Ses Rozeti Rengi",
                    description: "Ses rozeti rengi"
                },
                categoryBadgeColor: {
                    label: "Kategori Rozeti Rengi",
                    description: "Kategori rozeti rengi"
                },
                announcementBadgeColor: {
                    label: "Duyuru Rozeti Rengi",
                    description: "Duyuru rozeti rengi"
                },
                announcementThreadBadgeColor: {
                    label: "Duyuru Konu Rozeti Rengi",
                    description: "Duyuru konu rozeti rengi"
                },
                publicThreadBadgeColor: {
                    label: "Genel Konu Rozeti Rengi",
                    description: "Genel konu rozeti rengi"
                },
                privateThreadBadgeColor: {
                    label: "Özel Konu Rozeti Rengi",
                    description: "Özel konu rozeti rengi"
                },
                stageBadgeColor: {
                    label: "Sahne Rozeti Rengi",
                    description: "Sahne rozeti rengi"
                },
                directoryBadgeColor: {
                    label: "Dizin Rozeti Rengi",
                    description: "Dizin rozeti rengi"
                },
                forumBadgeColor: {
                    label: "Forum Rozeti Rengi",
                    description: "Forum rozeti rengi"
                },
                mediaBadgeColor: {
                    label: "Medya Rozeti Rengi",
                    description: "Medya rozeti rengi"
                },
                nsfwBadgeColor: {
                    label: "NSFW Rozeti Rengi",
                    description: "NSFW rozeti rengi"
                },
                lockedBadgeColor: {
                    label: "Kilitli Rozeti Rengi",
                    description: "Kilitli rozeti rengi"
                },
                rulesBadgeColor: {
                    label: "Kurallar Rozeti Rengi",
                    description: "Kurallar rozeti rengi"
                },
                unknownBadgeColor: {
                    label: "Bilinmeyen Rozeti Rengi",
                    description: "Bilinmeyen rozeti rengi"
                }
            },
            badges: {
                text: "Metin",
                voice: "Ses",
                category: "Kategori",
                announcement: "Haber",
                announcementThread: "Haber Konusu",
                publicThread: "Konu",
                privateThread: "Özel Konu",
                stage: "Sahne",
                directory: "Dizin",
                forum: "Forum",
                media: "Medya",
                nsfw: "NSFW",
                locked: "Kilitli",
                rules: "Kurallar",
                unknown: "Bilinmeyen"
            },
            tooltip: {
                locked: "Bu kanal kilitli.",
                nsfw: "Bu kanal NSFW olarak işaretlenmiş."
            }
        },
        channelTabs: {
            name: "ChannelTabs",
            description: "Sık ziyaret ettiğiniz kanalları bir tarayıcıdaki gibi sekmelerde gruplayın",
            open: "Yeni Sekmede Aç",
            animation: {
                title: "Animasyon Kontrolleri",
                description: "Kanal sekmeleri için belirli animasyonları etkinleştir veya devre dışı bırak. Her seçenek bağımsız olarak açılıp kapatılabilir.",
                placeholder: "Hangi animasyonların etkinleştirileceğini seçin...",
                tabHover: "Sekme Üzerine Gelme Efektleri (kaldır + ölçek)",
                tabSelection: "Seçili Sekme Kaldırma Animasyonu",
                tabDragDrop: "Sekme Sürükle & Bırak (hayalet + yeniden sıralama)",
                tabEnterExit: "Sekme Giriş/Çıkış Kaydırmaları (oluşturma + kapatma)",
                tabIconPop: "Simge Pop (seçimde büyüme)",
                closeRotation: "Kapatma Butonu Dönüşü",
                plusPulse: "Artı Butonu Nabız Efekti",
                mentionGlow: "Bahsetme Rozeti Işıltısı",
                compactExpand: "Kompakt Mod Genişleme",
                selectedBorder: "Seçili Sekme Mavi Kenarlığı",
                selectedBackground: "Seçili Sekme Arka Plan Rengi",
                tabShadows: "Sekme Gölge Efektleri",
                tabRepositioning: "Sekme Yeniden Konumlandırma (yumuşak geçiş)",
                resizeHandle: "Yeniden Boyutlandırma Tutacağı Solma",
                questActivate: "Aktif Görev Gradyanı"
            },
            bookmark: {
                label: "Yer İmi",
                unknown: "Bilinmeyen Kullanıcı",
                folder: "Klasör",
                add: "Yer İmlerine Ekle",
                edit: "Yer İmini Düzenle",
                delete: "Yer İmini Sil",
                remove: "Yer İmlerinden Kaldır",
                removeFolder: "Yer İmini Klasörden Kaldır",
                loading: "Yer imleri yükleniyor...",
                noBookmarks: "Hiç yer iminiz yok. Açık bir sekmeyi ekleyebilir ya da sağ tıklayarak bunu gizleyebilirsiniz.",
                quests: "Görevler",
                messageRequests: "Mesaj İstekleri",
                friends: "Arkadaşlar",
                shop: "Mağaza",
                library: "Kütüphane",
                discovery: "Keşif",
                nitro: "Nitro",
                icymi: "ICYMI",
                activity: "Etkinlik",
                specialPage: "Özel Sayfa"
            },
            button: {
                save: "Kaydet",
                delete: "Sil",
                cancel: "İptal"
            },
            context: {
                label: "ChannelTabs Bağlam Menüsü",
                bookmark: "ChannelTabs Yer İmi Bağlam Menüsü",
                tab: "ChannelTabs Sekme Bağlam Menüsü",
                compact: "Kompakt",
                bookmarkBar: "Yer İmi Çubuğu",
                openAll: "Tümünü Yer İmlerinde Aç",
                openNew: "Yeni Sekmede Aç",
                close: {
                    tab: "Sekmeyi Kapat",
                    otherTabs: "Diğer Sekmeleri Kapat",
                    tabsToRight: "Sağdaki Sekmeleri Kapat",
                    tabsToLeft: "Soldaki Sekmeleri Kapat",
                    reopen: "Kapatılan Sekmeyi Yeniden Aç",
                    allTabs: "Tüm Sekmeleri Kapat"
                }
            },
            error: {
                noLogin: "Giriş yapılmış bir hesap yok mu?"
            },
            modal: {
                add: {
                    title: "Yer İmini Klasöre Ekle",
                    select: "Bir klasör seç",
                    create: "Yeni oluştur"
                },
                edit: {
                    title: "Yer İmini Düzenle",
                    name: "Yer İmi Adı",
                    folder: "Klasör Rengi"
                },
                delete: {
                    title: "Emin misiniz?",
                    description: "Bir yer imi klasörünü silmek, içindeki tüm yer imlerini de siler."
                }
            },
            option: {
                onStartup: {
                    label: "Başlangıçta",
                    description: "Başlangıçta sekmelerle ne yapılacağını seçin",
                    nothing: "Hiçbir şey yapma (arkadaşlar sekmesini aç)",
                    remember: "Son oturumdaki sekmeleri hatırla",
                    open: "Belirli sekmeleri aç"
                },
                tabSet: {
                    label: "Sekme Seti"
                },
                noPomeloNames: {
                    label: "Pomelo İsimleri Yok",
                    description: "DM'ler için kullanıcı adları yerine görünen adları kullan"
                },
                showStatusIndicators: {
                    label: "Durum Göstergelerini Göster",
                    description: "DM'ler için durum göstergelerini göster"
                },
                showBookmarkBar: {
                    label: "Yer İmi Çubuğunu Göster"
                },
                bookmarkNotificationDot: {
                    label: "Yer İmi Bildirim Noktası",
                    description: "Yer imleri için bildirim noktası göster"
                },
                widerTabsAndBookmarks: {
                    label: "Geniş Sekmeler ve Yer İmleri",
                    description: "Daha büyük monitörlerde sekmeleri ve yer imlerini genişlet"
                },
                tabWidthScale: {
                    label: "Sekme Genişlik Ölçeği",
                    description: "Sekme genişliği ölçeği (yüzde) – sekme kenarlarını sürükleyerek ayarlanabilir"
                },
                renderAllTabs: {
                    label: "Tüm Sekmeleri Bellekte Tut",
                    description: "Sekmeler arasında daha hızlı geçiş için tüm sekmeleri bellekte tut (kaydırma ve durum önbelleklenir)"
                },
                switchToExistingTab: {
                    label: "Var Olan Sekmeye Geç",
                    description: "Gezindiğiniz kanal için bir sekme zaten varsa ona geç"
                },
                createNewTabIfNotExists: {
                    label: "Sekme Yoksa Oluştur",
                    description: "Bir kanal için sekme yoksa yeni bir sekme oluştur"
                },
                enableRapidNavigation: {
                    label: "Hızlı Gezinmeyi Etkinleştir",
                    description: "Kanal değişimleri hızlı yapıldığında yeni sekme yerine mevcut sekme değişsin"
                },
                rapidNavigationThreshold: {
                    label: "Hızlı Gezinme Eşiği",
                    description: "Milisaniye cinsinden zaman aralığı. Bu sürede yeni kanal açılırsa mevcut sekme değiştirilir."
                },
                tabBarPosition: {
                    label: "Sekme Çubuğu Konumu",
                    description: "Sekme çubuğunun konumu",
                    top: "Üst",
                    bottom: "Alt"
                },
                enableNumberKeySwitching: {
                    label: "Numara Tuşlarıyla Sekme Değiştirme",
                    description: "1–9 tuşlarıyla sekme değiştirmeyi etkinleştir"
                },
                numberKeySwitchCount: {
                    label: "Numara Tuşu Sekme Sayısı",
                    description: "Numara tuşlarıyla erişilebilecek sekme sayısı (1–9)"
                },
                enableCloseTabShortcut: {
                    label: "Sekme Kapatma Kısayolu",
                    description: "Sekme kapatma klavye kısayolunu etkinleştir"
                },
                enableNewTabShortcut: {
                    label: "Yeni Sekme Kısayolu",
                    description: "Yeni sekme açma kısayolunu etkinleştir"
                },
                enableTabCycleShortcut: {
                    label: "Sekme Döngüsü Kısayolu",
                    description: "Sekmeler arasında geçiş kısayolunu etkinleştir"
                },
                keybindsSection: {
                    label: "Klavye Kısayolları",
                    description: "Bir düğmeye tıklayın ve istediğiniz tuş kombinasyonunu basın. CTRL, SHIFT ve ALT gibi değiştiriciler desteklenir.",
                    title: "Klavye Kısayolları",
                    reset: "Tümünü Varsayılana Sıfırla",
                    closeTab: {
                        label: "Sekmeyi Kapat",
                        description: "Geçerli sekmeyi kapatmak için klavye kısayolu"
                    },
                    newTab: {
                        label: "Yeni Sekme",
                        description: "Geçerli kanal ile yeni bir sekme açmak için klavye kısayolu"
                    },
                    cycleTabsForward: {
                        label: "İleri Sekme Döngüsü",
                        description: "Sonraki sekmeye geçme kısayolu (ilk sekmeye doğru gider)"
                    },
                    cycleTabsBackward: {
                        label: "Geri Sekme Döngüsü",
                        description: "Önceki sekmeye geçme kısayolu (son sekmeye doğru gider)"
                    }
                },
                closeTabKeybind: {
                    label: "Sekme Kapatma Kısayolu",
                    description: "Geçerli sekmeyi kapatma kısayolu"
                },
                newTabKeybind: {
                    label: "Yeni Sekme Kısayolu",
                    description: "Yeni sekme açma kısayolu"
                },
                cycleTabForwardKeybind: {
                    label: "İleri Sekme Döngüsü",
                    description: "Sonraki sekmeye geçme kısayolu"
                },
                cycleTabBackwardKeybind: {
                    label: "Geri Sekme Döngüsü",
                    description: "Önceki sekmeye geçme kısayolu"
                },
                showTabNumbers: {
                    label: "Sekme Numaralarını Göster",
                    description: "Kısayolları göstermek için sekmelerde numara rozetlerini göster"
                },
                tabNumberPosition: {
                    label: "Sekme Numarası Konumu",
                    description: "Sekmelerde numara rozetlerinin konumu",
                    left: "Sol (simge öncesi)",
                    right: "Sağ (içerik sonrası)"
                },
                animations: {
                    label: "Animasyonlar"
                },
                animationHover: {
                    label: "Üzerine Gelme Animasyonu",
                    description: "Hover sırasında kaldırma ve büyütme efektlerini etkinleştir"
                },
                animationSelection: {
                    label: "Seçim Animasyonu",
                    description: "Seçim anında ışık/çerçeve animasyonlarını etkinleştir"
                },
                animationDragDrop: {
                    label: "Sürükle-Bırak Animasyonu",
                    description: "Sürükleme sırasında hayalet efekti etkinleştir"
                },
                animationEnterExit: {
                    label: "Giriş/Çıkış Animasyonu",
                    description: "Sekme oluşturma/kapatma sırasında kaydırma animasyonları"
                },
                animationIconPop: {
                    label: "Simge Pop Animasyonu",
                    description: "Seçim sırasında simgenin büyüme animasyonunu etkinleştir"
                },
                animationCloseRotation: {
                    label: "Kapatma Düğmesi Dönüşü",
                    description: "Kapatma ikonuna dönüş animasyonu ekle"
                },
                animationPlusPulse: {
                    label: "Artı Düğmesi Nabzı",
                    description: "Yeni sekme butonu için nabız animasyonunu etkinleştir"
                },
                animationMentionGlow: {
                    label: "Bahsetme Işıltısı",
                    description: "Bahsetme rozetinde kırmızı parlama animasyonunu etkinleştir"
                },
                animationCompactExpand: {
                    label: "Kompakt Genişleme Animasyonu",
                    description: "Kompakt sekmelerin yumuşak şekilde genişlemesini etkinleştir"
                },
                animationSelectedBorder: {
                    label: "Seçili Sekme Kenarlığı Animasyonu",
                    description: "Seçili sekme için kenarlık ve parıltı stil animasyonlarını etkinleştir"
                },
                animationSelectedBackground: {
                    label: "Seçili Sekme Arka Plan Animasyonu",
                    description: "Seçili sekmenin arka plan renginin animasyonlu değişimini etkinleştir"
                },
                animationTabShadows: {
                    label: "Sekme Gölge Animasyonu",
                    description: "Sekmelerde gölge efektlerini etkinleştir"
                },
                animationTabPositioning: {
                    label: "Sekme Konumlandırma Animasyonu",
                    description: "Sekmeler yer değiştirirken yumuşak geçiş animasyonları"
                },
                animationResizeHandle: {
                    label: "Yeniden Boyutlandırma Animasyonu",
                    description: "Boyutlandırma tutacağının solma animasyonunu etkinleştir"
                },
                animationQuestsActive: {
                    label: "Aktif Görev Animasyonu",
                    description: "Görevler aktifken sekmede gradyan animasyonlarını etkinleştir"
                },
                compactAutoExpandSelected: {
                    label: "Seçilince Otomatik Genişlet",
                    description: "Seçildiğinde kompakt sekmeleri otomatik genişlet"
                },
                compactAutoExpandOnHover: {
                    label: "Üzerine Gelince Otomatik Genişlet",
                    description: "Üzerine gelince kompakt sekmeleri otomatik genişlet"
                },
                openInNewTabAutoSwitch: {
                    label: "Yeni Sekmede Açarken Otomatik Geçiş",
                    description: "Yeni sekme açıldığında otomatik olarak o sekmeye geç"
                },
                bookmarksIndependentFromTabs: {
                    label: "Yer İmleri Bağımsız",
                    description: "Yer imleri, sekme çubuğunu etkilemeden bağımsız olarak gezinir"
                },
                showResizeHandle: {
                    label: "Boyutlandırma Tutacağını Göster",
                    description: "Sekmelerin genişliğini ayarlamak için tutacağı göster"
                },
                openNewTabsInCompactMode: {
                    label: "Yeni Sekmeleri Kompakt Aç",
                    description: "Yeni açılan sekmeler varsayılan olarak kompakt modda açılsın"
                },
                newTabButtonBehavior: {
                    label: "Yeni Sekme Butonu Davranışı",
                    description: "Yeni sekme (+) butonu sabit olarak sağda durmak yerine sekmeleri takip eder"
                },
                oneTabPerServer: {
                    label: "Sunucu Başına Tek Sekme",
                    description: "Bir sunucu için yalnızca tek sekme olsun; yeni kanal açıldığında aynı sekme kullanılsın"
                },
                maxOpenTabs: {
                    label: "Maksimum Açık Sekme",
                    description: "Aynı anda açık olabilecek maksimum sekme sayısı (0 = sınırsız)"
                }
            },
            tabs: {
                startup: "Başlangıç Sekmeleri",
                currently: "Şu an açık sekmeleri ayarla"
            },
            toast: {
                notRestoring: "KeepCurrentChannel etkin olduğu için sekmeler geri yüklenmiyor",
                failed: {
                    restore: "Sekmeler geri yüklenemedi",
                    saved: "Kaydedilen sekmeler yüklenemedi"
                }
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Mesaj kutusunda bir karakter sayacı gösterir",
            option: {
                colorEffects: {
                    label: "Renk Efektleri",
                    description: "Karakter sınırına yaklaşırken renk efektlerini aç veya kapat"
                }
            }
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Kanal adlarındaki tüm emoji ve saçma süslemeleri kaldır"
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Gönderdiğiniz URL'lerden izleme öğelerini otomatik olarak kaldırır"
        },
        clientSideBlock: {
            name: "ClientSideBlock",
            description: "Herhangi bir kullanıcıdan gelen neredeyse tüm içerikleri yerel olarak gizlemenizi sağlar",
            replying: "Engellenen mesaja yanıt veriliyor",
            option: {
                hideVc: {
                    label: "Sesli Kanallardan Gizle",
                    description: "Engellenen kullanıcıları içeren sesli kanalları gizle"
                },
                usersToBlock: {
                    label: "Engellenecek Kullanıcılar",
                    description: "Virgül ve boşluk ile ayrılmış kullanıcı ID’leri"
                },
                hideBlockedUsers: {
                    label: "Engellenen Kullanıcıları Gizle",
                    description: "Engellenen kullanıcılar her yerde tamamen gizlensin mi"
                },
                hideBlockedMessages: {
                    label: "Engellenen Mesajları Gizle",
                    description: "Engellenen kullanıcılardan gelen mesajlar tamamen gizlensin mi (eski noblockedmessages eklentisiyle aynı)"
                },
                hideEmptyRoles: {
                    label: "Boş Roller Gizlensin",
                    description: "Tüm üyeleri engellenmişse rol başlıkları gizlensin mi"
                },
                blockedReplyDisplay: {
                    label: "Engellenmiş Yanıt Görünümü",
                    description: "Gizlediğiniz birine yanıt verildiğinde mesaj yerine ne görünsün",
                    displayText: "Gizlenmiş bir mesaja yanıt verildiğini belirten metin göster",
                    hideReply: "Hiçbir şey gösterme"
                },
                guildBlackList: {
                    label: "Sunucu Kara Listesi",
                    description: "Fonksiyonelliğin devre dışı bırakılacağı sunucu ID’leri"
                },
                guildWhiteList: {
                    label: "Sunucu Beyaz Listesi",
                    description: "Fonksiyonelliğin etkinleştirileceği sunucu ID’leri"
                }
            }
        },
        clientTheme: {
            name: "ClientTheme",
            description: "Eski istemci tema deneyinin yeniden yapımı. Discord istemci temanıza bir renk ekleyin",
            title: "Tema Rengi",
            add: "Discord istemci temanıza bir renk ekleyin",
            option: {
                color: {
                    label: "Renk"
                },
                resetColor: {
                    label: "Rengi Sıfırla"
                }
            },
            error: {
                modal: {
                    title: "Temanız iyi görünmeyecek!",
                    contrast: "Seçilen renk metinle iyi bir kontrast oluşturmayacak",
                    nitro: "Nitro temaları desteklenmiyor",
                    switch: "{{oppositeTheme}} moduna geç",
                    disable: "Nitro Temasını Devre Dışı Bırak",
                    reset: "Tema Rengini Sıfırla"
                }
            }
        },
        clipsEnhancements: {
            name: "ClipsEnhancements",
            description: "Daha fazla Klip FPS ve süre seçeneği ekleyin, ayrıca RPC etiketleme!",
            minutes: "Dakika",
            option: {
                richPresenceTagging: {
                    label: "Rich Presence Etiketleme",
                    description: "Klipler mevcut Rich Presence ile ne zaman etiketlenmeli?",
                    always: "Her zaman",
                    only: "Yalnızca etkinlik adının başı veya sonu eşleştiğinde",
                    never: "Asla"
                },
                clipsLink: {
                    label: "Klipler Bağlantısı",
                    link: "Klipler ayarlarında FPS ve süre seçeneklerini değiştirin!"
                }
            }
        },
        colorSighted: {
            name: "ColorSighted",
            description: "Durumlardan renk körlerine uygun simgeleri kaldırır, tıpkı 2015-2017 Discord gibi"
        },
        commandPalette: {
            name: "CommandPalette",
            description: "Klavye ile arayüzde gezinmenizi sağlar.",
            search: "Komut Paletinde Ara",
            type: "Yazın ve Enter’a basın",
            enter: "Bir URL girin",
            fetch: "Getirilecek URL girin (yalnızca GET)",
            issue: "URL getirilirken sorun oluştu",
            enable: "Etkinleştir",
            disable: "Devre Dışı Bırak",
            open: {
                devTab: "Geliştirici Sekmesini Aç",
                plexcord: "Plexcord Sekmesini Aç",
                plugin: "Eklentiler Sekmesini Aç",
                themes: "Temalar Sekmesini Aç",
                updater: "Güncelleyici Sekmesini Aç",
                cloud: "Cloud Sekmesini Aç",
                backup: "Yedekleme & Geri Yükleme Sekmesini Aç",
                restart: "Plexcord’u Yeniden Başlat",
                quickCSS: "QuickCSS Dosyasını Aç",
                settings: "Ayarlar Klasörünü Aç",
                github: "Github’da Aç",
                browser: "Tarayıcıda Aç",
                togglePlugin: "Eklentiyi Aç/Kapat",
                quickFetch: "Hızlı Getir",
                copyGit: "Git Bilgilerini Kopyala",
                check: "Güncellemeleri Kontrol Et",
                navigate: "Sunucuya Git",
                changelog: "Değişiklik Notları Sekmesini Aç"
            },
            toast: {
                invalid: "Geçersiz URL",
                copied: "Yanıt panoya kopyalandı!",
                git: "Git bilgileri panoya kopyalandı!",
                noUpdates: "Hiç güncelleme yok",
                enabled: "{{plugin}} başarıyla etkinleştirildi",
                disabled: "{{plugin}} başarıyla devre dışı bırakıldı"
            },
            option: {
                hotkey: {
                    label: "Kısayol",
                    description: "Komut paletini açmak için kısayol tuşu",
                    recording: "Kaydediliyor...",
                    record: "Tuş kombinasyonunu kaydet"
                },
                allowMouseControl: {
                    label: "Fare Kontrolüne İzin Ver",
                    description: "Fare ile komut paletini kontrol etmeye izin ver."
                }
            }
        },
        consoleJanitor: {
            name: "ConsoleJanitor",
            description: "Can sıkıcı konsol mesajlarını/hatalarını devre dışı bırakır",
            option: {
                disableLoggers: {
                    label: "Logger’ları Devre Dışı Bırak",
                    description: "Discord’un logger’larını devre dışı bırakır"
                },
                disableSpotifyLogger: {
                    label: "Spotify Logger’ını Devre Dışı Bırak",
                    description: "Hesap bilgilerini ve erişim anahtarını sızdıran Spotify logger’ını devre dışı bırakır"
                },
                whitelistedLoggers: {
                    label: "Beyaz Listeye Alınmış Logger’lar",
                    description: "Diğerleri gizlense bile izin verilecek logger’ların noktalı virgülle ayrılmış listesi"
                },
                allowLevel: {
                    label: "İzin Verilen Seviye",
                    description: "Bu türlerdeki logger’lara her zaman izin ver",
                    filter: "Filtre Listesi"
                }
            }
        },
        consoleShortcuts: {
            name: "Console Shortcuts",
            description: "Pencere üzerinde birçok şey için daha kısa kısayollar ekler. Liste için `shortcutList` komutunu çalıştırın."
        },
        contentWarning: {
            name: "ContentWarning",
            description: "Belirli tetikleyici kelimelerin varsayılan olarak bulanık gösterilmesini sağlar. Bulanık içeriğe tıklamak onu görünür hale getirir.",
            option: {
                flagged: {
                    label: "İşaretle",
                    flagged: "İşaretlenmiş Kelimeler",
                    placeholder: "Kelime"
                },
                onClick: {
                    label: "Üzerine Tıklama",
                    description: "İçeriği yalnızca fareyle üzerine gelince değil, tıklanınca göster"
                }
            }
        },
        copyEmojiMarkdown: {
            name: "CopyEmojiMarkdown",
            description: "Emojileri biçimlendirilmiş metin olarak kopyalamanı sağlar (<a:blob_pwease:1402403381900742737>)",
            option: {
                copyUnicode: {
                    label: "Unicode Kopyala",
                    description: "Varsayılan emojiler için :isim: yerine ham unicode karakterini kopyalar (👽)"
                }
            },
            context: {
                copy: "Emoji Markdown'ını Kopyala"
            },
            toast: {
                success: "Başarılı! Emojinin markdown'ı kopyalandı."
            }
        },
        copyFileContents: {
            name: "CopyFileContents",
            description: "Metin dosyası eklerine içeriklerini kopyalamak için bir buton ekler",
            copied: "Kopyalandı!",
            large: "Dosya kopyalanamayacak kadar büyük.",
            copyFileContents: "Dosya İçeriğini Kopyala"
        },
        copyStatusUrls: {
            name: "CopyStatusUrls",
            description: "Bir kullanıcının durum URL’sini sağ tıkladığınızda kopyalayın",
            toast: {
                copied: "URL kopyalandı",
                error: "URL kopyalanırken hata oluştu, daha fazla bilgi için konsolu kontrol edin"
            }
        },
        copyStickerLinks: {
            name: "CopyStickerLinks",
            description: "Sticker bağlantılarını kopyalama ve açma özelliği ekler",
            context: {
                copy: "Bağlantıyı Kopyala",
                open: "Bağlantıyı Aç"
            },
            toast: {
                success: "Bağlantı kopyalandı!"
            }
        },
        copyUserMention: {
            name: "CopyUserMention",
            description: "Kullanıcı bağlam menüsüne, kullanıcının mention’unu kopyalamak için bir buton ekler. ValidUser ile en iyi şekilde çalışır.",
            context: {
                copy: "Kullanıcı Mention’unu Kopyala"
            }
        },
        copyUserURLs: {
            name: "CopyUserURLs",
            description: "Kullanıcı bağlam menüsüne 'Kullanıcı URL’sini Kopyala' seçeneği ekler.",
            context: {
                copy: "Kullanıcı URL’sini Kopyala"
            }
        },
        crashHandler: {
            name: "CrashHandler",
            description: "Yeniden başlatmaya gerek kalmadan çökmeleri yönetmek ve mümkünse kurtarmak için yardımcı eklenti",
            option: {
                attemptToPreventCrashes: {
                    label: "Çökmeleri Önlemeye Çalış",
                    description: "Discord çökmelerini önlemeye çalışılsın mı."
                },
                attemptToNavigateToHome: {
                    label: "Ana Sayfaya Yönlendirmeye Çalış",
                    description: "Çökme sonrası kurtarmada ana sekmeye yönlendirilmeye çalışılsın mı."
                }
            },
            toast: {
                crashed: {
                    title: "Discord çöktü!",
                    body: "Tüh :( Discord kısa sürede iki kez çöktü, kurtarma denemesi yapılmayacak.",
                    update: "Ah hayır, Discord yeni çöktü... ama güzel haber, bu sorunu düzeltebilecek bir Plexcord güncellemesi mevcut! Şimdi güncellemek ister misiniz?",
                    recover: "Kurtarılmaya çalışılıyor..."
                }
            }
        },
        ctrlEnterSend: {
            name: "CtrlEnterSend",
            description: "Mesaj göndermek için Ctrl+Enter kullanın (özelleştirilebilir)",
            option: {
                submitRule: {
                    label: "Gönderme Kuralı",
                    description: "Bir mesajın gönderilme şekli",
                    ctrlEnter: "Ctrl+Enter (Yeni satır için Enter veya Shift+Enter) (macOS’ta cmd+enter)",
                    shiftEnter: "Shift+Enter (Yeni satır için Enter)",
                    enter: "Enter (Yeni satır için Shift+Enter; Discord varsayılanı)"
                },
                sendMessageInTheMiddleOfACodeBlock: {
                    label: "Kod Bloğunun Ortasında Mesaj Gönder",
                    description: "Bir kod bloğunun ortasında mesaj gönderilsin mi"
                }
            }
        },
        customFolderIcons: {
            name: "CustomFolderIcons",
            description: "Klasör simgelerini herhangi bir png ile özelleştirin",
            option: {
                solidIcon: {
                    label: "Düz Simge",
                    description: "Resmin arka planında düz bir arka plan kullan"
                },
                folderIcons: {
                    label: "Klasör Simgeleri",
                    description: "Klasör simgesi ayarları"
                }
            },
            modal: {
                change: "Klasör simgesinin boyutunu değiştir",
                save: "Kaydet",
                unset: "Kaldır",
                set: "Yeni Bir Simge Ayarla",
                hover: "Yenilenmesi için ayarladıktan sonra klasörün üzerine gelmeniz gerekebilir."
            }
        },
        customIdle: {
            name: "CustomIdle",
            description: "Discord’un boşta moda geçmeden önceki süresini ayarlamanıza (veya otomatik boşta modunu devre dışı bırakmanıza) izin verir",
            backOnline: "Tekrar hoş geldiniz! Çevrimiçi olmak için butona tıklayın. Yeniden yüklenene kadar boşta kalmak için X’e tıklayın.",
            exit: "Boştan Çık",
            option: {
                idleTimeout: {
                    label: "Boşta Zaman Aşımı",
                    description: "Discord’un boşta moda geçmeden önceki dakika sayısı (otomatik boşta modunu devre dışı bırakmak için 0)"
                },
                remainInIdle: {
                    label: "Boşta Kal",
                    description: "Discord’a geri döndüğünüzde, çevrimiçi olmak istediğinizi onaylayana kadar boşta kal"
                }
            }
        },
        customRPC: {
            name: "CustomRPC",
            description: "Discord profilinize tamamen özelleştirilebilir bir Rich Presence (Oyun durumu) ekleyin",
            goTo: "{{portal}} adresine giderek bir uygulama oluşturun ve uygulama kimliğini (Application ID) alın.",
            upload: "Rich Presence sekmesinden görseller yükleyerek görsel anahtarlarını (image key) alın.",
            image: "Bir görsel bağlantısı kullanmak istiyorsanız, görselinizi indirin ve {{imgur}} sitesine yükleyin, ardından görselin üzerine sağ tıklayıp 'Resim adresini kopyala' seçeneğini kullanarak bağlantıyı alın.",
            button: "Profilinizde kendi butonlarınızı göremezsiniz, ancak diğer herkes onları normal şekilde görebilir.",
            font: "Bazı garip unicode yazılar ('𝖇ö𝖞𝖑𝖊 𝖞𝖆𝖟ı𝖑𝖆𝖗') Rich Presence’in görünmemesine neden olabilir, bunun yerine normal harfler kullanmayı deneyin.",
            placeholder: "Bir değer girin",
            select: "Bir seçenek seçin",
            error: {
                appIdInvalid: "Uygulama Kimliği geçerli bir sayı değil.",
                notice: "Uyarı",
                sharing: "Etkinlik Paylaşımı etkin değil, insanlar özel Rich Presence’inizi göremeyecek!",
                enable: "Etkinleştir",
                validStream: "Yayın bağlantısı geçerli bir URL olmalıdır.",
                mustBeURL: "Geçerli bir URL olmalıdır.",
                streamCharacters: "Yayın bağlantısı 512 karakterden uzun olmamalıdır.",
                dontUse: "Bir Discord bağlantısı kullanmayın. Bunun yerine bir Imgur görsel bağlantısı kullanın.",
                imgur: "Imgur bağlantısı doğrudan görsele ait olmalıdır (örneğin: https://i.imgur.com/...). Görselin üzerine sağ tıklayın ve 'Resim adresini kopyala' seçeneğini tıklayın.",
                tenor: "Tenor bağlantısı doğrudan görsele ait olmalıdır (örneğin: https://media.tenor.com/...). GIF’in üzerine sağ tıklayın ve 'Resim adresini kopyala' seçeneğini tıklayın.",
                required: "Bu alan zorunludur.",
                tooLong: "{{maxLength}} karakterden uzun olmamalıdır.",
                mustBeNumber: "Bir sayı olmalıdır.",
                mustBePositive: "Pozitif bir sayı olmalıdır.",
                startTimeInvalid: "Başlangıç zamanı 0'dan büyük olmalıdır.",
                endTimeInvalid: "Bitiş zamanı 0'dan büyük olmalıdır."
            },
            option: {
                appId: {
                    label: "Uygulama Kimliği",
                    description: "Uygulama kimliği (zorunlu)"
                },
                appName: {
                    label: "Uygulama Adı",
                    description: "Uygulama adı (zorunlu)"
                },
                details: {
                    label: "Detaylar",
                    description: "Detaylar (satır 1)"
                },
                detailsURL: {
                    label: "Detaylar URL'si",
                    description: "Detaylar için tıklanabilir URL"
                },
                state: {
                    label: "Durum",
                    description: "Durum (2. satır)"
                },
                stateURL: {
                    label: "Durum URL'si",
                    description: "Durum için tıklanabilir URL"
                },
                partySize: {
                    label: "Grup Boyutu",
                    description: "Mevcut grup boyutu (Maksimum Grup Boyutu ile birlikte kullanılmalıdır)"
                },
                partyMax: {
                    label: "Maksimum Grup Boyutu",
                    description: "Maksimum grup boyutu (Mevcut Grup Boyutu ile birlikte kullanılmalıdır)"
                },
                type: {
                    label: "Etkinlik Türü",
                    description: "Etkinlik türü",
                    playing: "Oynuyor",
                    streaming: "Yayın Yapıyor",
                    listening: "Dinliyor",
                    watching: "İzliyor",
                    competing: "Yarışıyor"
                },
                streamLink: {
                    label: "Yayın Bağlantısı",
                    description: "Twitch.tv veya Youtube.com bağlantısı (yalnızca Yayın etkinlik türü için)"
                },
                timestampMode: {
                    label: "Zaman Damgası Modu",
                    description: "Zaman damgasının neyi göstermesi gerektiği",
                    none: "Yok",
                    sinceDiscordOpen: "Discord açıldığından beri",
                    sameAsCurrentTime: "Geçerli zamanınla aynı (24 saat sonra sıfırlanmaz)",
                    custom: "Özel Zaman"
                },
                startTime: {
                    label: "Başlangıç Zamanı (milisaniye cinsinden)",
                    description: "Başlangıç zaman damgası (yalnızca özel zaman modu için)"
                },
                endTime: {
                    label: "Bitiş Zamanı (milisaniye cinsinden)",
                    description: "Bitiş zaman damgası (yalnızca özel zaman modu için)"
                },
                imageBig: {
                    label: "Büyük Görsel Anahtarı",
                    description: "Büyük görsel anahtarı (Rich Presence sekmesine yüklenmiş olmalı)"
                },
                imageBigTooltip: {
                    label: "Büyük Görsel İpucu",
                    description: "Büyük görsel üzerine gelindiğinde görünen ipucu"
                },
                imageBigURL: {
                    label: "Büyük Görsel URL'si",
                    description: "Büyük Görsel Tıklanabilir URL'si"
                },
                imageSmall: {
                    label: "Küçük Görsel Anahtarı",
                    description: "Küçük görsel anahtarı (Rich Presence sekmesine yüklenmiş olmalı)"
                },
                imageSmallTooltip: {
                    label: "Küçük Görsel İpucu",
                    description: "Küçük görsel üzerine gelindiğinde görünen ipucu"
                },
                imageSmallURL: {
                    label: "Küçük Görsel URL'si",
                    description: "Küçük Görsel Tıklanabilir URL'si"
                },
                buttonOneText: {
                    label: "Buton 1 Metni",
                    description: "Buton 1 metni"
                },
                buttonOneURL: {
                    label: "Buton 1 URL",
                    description: "Buton 1 bağlantısı"
                },
                buttonTwoText: {
                    label: "Buton 2 Metni",
                    description: "Buton 2 metni"
                },
                buttonTwoURL: {
                    label: "Buton 2 URL",
                    description: "Buton 2 bağlantısı"
                }
            }
        },
        customSounds: {
            name: "CustomSounds",
            description: "Discord’un seslerini özelleştirin.",
            search: "Sesleri ara",
            placeholder: "İsme veya ID’ye göre ara",
            import: "İçe Aktar",
            export: "Dışa Aktar",
            reset: "Tümünü Sıfırla",
            debug: "Hata Ayıklama",
            toast: {
                error: "Özel ses dosyası yüklenirken hata oluştu",
                exported: "{{count}} ayar dışa aktarıldı (ses dosyaları dahil değil)",
                imported: "Ayarlar başarıyla içe aktarıldı",
                importError: "Ayarlar içe aktarılırken hata oluştu. Detaylar için konsolu kontrol edin.",
                reset: "Tüm sesler başarıyla sıfırlandı!",
                overrideDescription: "{{soundName}} sesi değiştirildi",
                previewSound: "Ses çalınırken hata oluştu.",
                playing: "Özel ses çalınamadı. Dosya bozuk olabilir.",
                invalidFile: "Önizleme için özel ses dosyası yok",
                uploaded: "Dosya başarıyla yüklendi: {{fileName}}",
                uploadedError: "Dosya yüklenirken hata oluştu: {{error}}",
                invalidExtension: "Geçersiz dosya türü. Lütfen bir ses dosyası yükleyin.",
                uploading: "Dosya yükleniyor...",
                deleted: "Dosya başarıyla silindi",
                deleteError: "Dosya silinirken hata oluştu.",
                loadingError: "Özel ses dosyası yüklenirken hata oluştu"
            },
            button: {
                preview: "Önizle",
                stop: "Durdur",
                volume: "Ses",
                soundSource: "Ses Kaynağı",
                customFile: "Özel Dosya",
                uploadNew: "Yeni Yükle",
                delete: "Seçili Dosyayı Sil"
            },
            option: {
                default: "Varsayılan",
                custom: "Özel",
                select: "Bir dosya seç..."
            },
            type: {
                activityEnd: "Etkinlik Bitti",
                activityLaunch: "Etkinlik Başlatıldı",
                activityUserJoin: "Etkinliğe Kullanıcı Katıldı",
                activityUserLeft: "Etkinlikten Kullanıcı Ayrıldı",
                asmrMessage: "ASMR Mesajı",
                bitMessage: "Bit Mesajı",
                bopMessage: "Bop Mesajı",
                callCalling: "Arama Yapılıyor",
                callRinging: "Arama Çalıyor",
                clipError: "Klip Hatası",
                clipSave: "Klip Kaydedildi",
                ddrDown: "DDR Aşağı",
                ddrLeft: "DDR Sol",
                ddrRight: "DDR Sağ",
                ddrUp: "DDR Yukarı",
                deafen: "Sağırlaştır",
                discodo: "Discodo",
                disconnect: "Bağlantı Kesildi",
                duckyMessage: "Ducky Mesajı",
                hangStatusSelect: "Durum Seçimini Askıya Al",
                highfiveClap: "Çak Bir Beşlik Alkış",
                highfiveWhistle: "Çak Bir Beşlik Islık",
                humanMan: "İnsan Adam",
                lofiMessage: "LoFi Mesajı",
                mention1: "Bahsetme 1",
                mention2: "Bahsetme 2",
                mention3: "Bahsetme 3",
                message1: "Mesaj 1",
                message2: "Mesaj 2",
                message3: "Mesaj 3",
                mute: "Sessize Al",
                overlayUnlock: "Katman Kilidi Açıldı",
                poggermodeAchievement: "Poggermode Başarımı",
                poggermodeApplause: "Poggermode Alkış",
                poggermodeEnabled: "Poggermode Etkin",
                poggermodeMessage: "Poggermode Mesajı",
                pttStart: "PTT Başlat",
                pttStop: "PTT Durdur",
                reconnect: "Yeniden Bağlan",
                robotMan: "Robot Adam",
                stageWaiting: "Sahne Bekleniyor",
                streamEnded: "Yayın Bitti",
                streamStarted: "Yayın Başladı",
                streamUserJoined: "Yayına Kullanıcı Katıldı",
                streamUserLeft: "Yayından Kullanıcı Ayrıldı",
                success: "Başarılı",
                undeafen: "Sağırlaştırmayı Kaldır",
                unmute: "Sessizliği Kaldır",
                userJoin: "Kullanıcı Katıldı",
                userLeave: "Kullanıcı Ayrıldı",
                userMoved: "Kullanıcı Taşındı",
                vibingWumpus: "Takılan Wumpus"
            }
        },
        customTimestamps: {
            name: "CustomTimestamps",
            description: "Mesajlar ve ipuçları (tooltip) üzerinde özel zaman damgaları",
            demo: {
                cozy: "Rahat biçime geçmek için bana tıkla",
                compact: "Kompakt biçime geçmek için bana tıkla",
                lastWeek: "Bu mesaj geçen hafta gönderildi",
                hover: "Zaman damgalarının üzerine gelerek araç ipucu biçimlerini görebilirsiniz",
                edit: "Aşağıdaki biçimleri düzenleyin, burada canlı olarak güncellendiğini görün"
            },
            modal: {
                title: "Nasıl kullanılır:",
                moment: "Moment.js biçimlendirme dökümantasyonu",
                hint: "Ek olarak girişlerinizde şunları kullanabilirsiniz:",
                calendar: "dinamik tarih biçimlendirmesini etkinleştirir, örneğin",
                today: "Bugün",
                yesterday: "Dün",
                relative: "size şu tür zamanlar verir:",
                relativeTime: "4 saat önce",
                preview: "Önizleme",
                format: "Takvim biçimi",
                howTo: "Yukarıdaki zaman damgalarında kullanıldığında [calendar] değerini nasıl biçimlendireceğiniz."
            },
            option: {
                formats: {
                    label: "Biçimler",
                    description: "Zaman damgası biçimlerini özelleştirin",
                },
                cozyFormat: {
                    label: "Rahat mod",
                    description: "Mesajlarda rahat mod için kullanılacak zaman biçimi"
                },
                compactFormat: {
                    label: "Kompakt mod",
                    description: "Kompakt modda ve mesajların üzerine gelindiğinde kullanılacak zaman biçimi"
                },
                tooltipFormat: {
                    label: "Araç ipucu",
                    description: "Araç ipuçlarında kullanılacak zaman biçimi"
                },
                ariaLabelFormat: {
                    label: "Aria etiketi",
                    description: "Aria etiketlerinde kullanılacak zaman biçimi"
                },
                sameDayFormat: {
                    label: "Aynı gün",
                    description: "Bugün için [calendar] biçimi",
                    default: "[Bugün] HH:mm:ss"
                },
                lastDayFormat: {
                    label: "Dün",
                    description: "Dün için [calendar] biçimi",
                    default: "[Dün] HH:mm:ss"
                },
                lastWeekFormat: {
                    label: "Geçen hafta",
                    description: "Geçen hafta için [calendar] biçimi"
                },
                sameElseFormat: {
                    label: "Daha eski",
                    description: "Daha eski tarihler için [calendar] biçimi"
                }
            }
        },
        customUserColors: {
            name: "CustomUserColors",
            description: "Herhangi bir kullanıcıya, her yerde özel bir renk eklemenizi sağlar! typingTweaks ve roleColorEverywhere ile kullanmanız şiddetle tavsiye edilir",
            option: {
                dmList: {
                    label: "DM Listesi",
                    description: "Özel renk atanmış kullanıcıların isimleri DM listesinde renklendirilecek"
                },
                colorInServers: {
                    label: "Sunucularda Renk",
                    description: "İsim renkleri sunucularda da değiştirilsin mi"
                }
            },
            context: {
                setColor: "Renk Ayarla"
            },
            modal: {
                custom: "Özel Renk",
                pick: "Bir renk seç",
                delete: "Kaydı Sil",
                save: "Kaydet"
            }
        },
        dearrow: {
            name: "Dearrow",
            description: "YouTube embed başlıklarını ve küçük resimlerini daha az sansasyonel hale getirir, Dearrow tarafından desteklenmektedir",
            option: {
                hideButton: {
                    label: "Butonu Gizle",
                    description: "YouTube embed'lerinden Dearrow butonunu gizler"
                },
                replaceElements: {
                    label: "Öğeleri Değiştir",
                    description: "Gömünün hangi öğelerinin değiştirileceğini seçin",
                    everything: "Her şey (Başlıklar & Küçük Resimler)",
                    title: "Başlıklar",
                    thumbnail: "Küçük Resimler"
                },
                dearrowByDefault: {
                    label: "Varsayılan Olarak Dearrow",
                    description: "Videoları otomatik olarak Dearrow uygula"
                }
            },
            tooltip: {
                dearrowed: "Bu embed'e Dearrow uygulandı, geri yüklemek için tıklayın",
                dearrow: "Dearrow uygulamak için tıklayın"
            }
        },
        decodeBase64: {
            name: "DecodeBase64",
            description: "Herhangi bir mesajın base64 içeriğini çöz ve çözülen içeriği kopyala.",
            right: {
                decode: "Çözüleni Kopyala (Sol Tık) / Base64 Çöz (Sağ Tık)",
                copy: "Base64 Çöz (Sol Tık) / Çözüleni Kopyala (Sağ Tık)"
            },
            option: {
                clickMethod: {
                    label: "Tıklama Yöntemi",
                    description: "Herhangi bir mesajın base64 içeriğini çözmek için butonun davranışını değiştirin.",
                    left: "Base64 içeriğini çözmek için sol tık.",
                    right: "Base64 içeriğini çözmek için sağ tık."
                }
            },
            modal: {
                title: "Çözülen Base64 İçeriği",
                content: "Çözülen İçerik",
                copy: "Çözülen İçeriği Kopyala {{index}}",
                copied: "Çözülen içerik panoya kopyalandı!"
            }
        },
        decor: {
            name: "Decor",
            description: "Kendi özel avatar süslemelerinizi oluşturun ve kullanın veya hazır ayarlardan en sevdiğinizi seçin.",
            presetPart: "{{name}} Hazır Ayarının Bir Parçası",
            createdBy: "{{author}} tarafından oluşturuldu",
            copy: "Hazır Ayar Kimliğini Kopyala",
            file: "Dosya",
            your: {
                title: "Süslemelerin",
                subtitle: "Kendi süslemelerinizi sağ tıklayarak silebilirsiniz."
            },
            option: {
                changeDecoration: {
                    label: "Süslemeyi Değiştir",
                    description: "Avatar süslemenizi değiştirmek için Dekor'u etkinleştirin ve istemcinizi yeniden başlatın.",
                    also: "Ayrıca {{profiles}} sayfasından Dekor süslemelerine erişebilirsiniz.",
                    profiles: "Profiller"
                },
                baseUrl: {
                    label: "Temel URL",
                    description: "Dekor API URL'si"
                },
                agreedToGuidelines: {
                    label: "Kuralları Kabul Ettim",
                    description: "Kurallar kabul edildi"
                }
            },
            context: {
                decorationOptions: "Süsleme Seçenekleri",
                copyHash: "Süsleme Hash'ini Kopyala",
                deleteDecoration: "Süslemeyi Sil"
            },
            alert: {
                delete: {
                    title: "Süslemeyi Sil",
                    body: "{{decoration}} süslemesini silmek istediğinizden emin misiniz?",
                    confirm: "Sil",
                    cancel: "İptal"
                },
                logout: {
                    title: "Çıkış Yap",
                    body: "Dekor’dan çıkış yapmak istediğinizden emin misiniz?",
                    confirm: "Çıkış Yap",
                    cancel: "İptal"
                }
            },
            button: {
                change: "Süslemeyi Değiştir",
                remove: "Süslemeyi Kaldır",
                apply: "Uygula",
                cancel: "İptal",
                browse: "Göz At",
                submit: "İnceleme İçin Gönder",
                continue: "Devam Et",
                back: "Geri Dön"
            },
            tooltip: {
                pendingReview: "Halihazırda incelemede olan bir süslemeniz var",
                pending: "İnceleme Bekliyor"
            },
            join: {
                tooltip: "Süslemenizin incelemesi ve yeni hazır ayarlar yayınlandığında bildirim almak için Decor’un Discord sunucusuna katılın",
                button: "Discord Sunucusu"
            },
            create: {
                title: "Süsleme Oluştur",
                notViolate: "Göndermeden önce süslemenizin {{guidelines}} ihlal etmediğinden emin olun.",
                guidelines: "kuralları",
                file: "Dosya APNG veya PNG olmalıdır.",
                fileHolder: "Bir dosya seç",
                name: "Bu ad, bu süslemeye atıfta bulunurken kullanılacaktır.",
                nameHolder: "Companion Cube",
                nameTitle: "Ad"
            },
            help: {
                update: "Süslemenizin incelemesiyle ilgili güncellemeler almak için {{server}} sunucusuna katılın ve direkt mesajlara izin verin.",
                server: "Decor’un Discord"
            },
            guidelines: {
                hold: "Bekleyin",
                suspended: "Bir süsleme göndererek {{guidelines}} kabul etmiş olursunuz. Bu kuralları okumamak gelecekte daha fazla süsleme oluşturma hakkınızın askıya alınmasına neden olabilir.",
                guidelines: "kuralları"
            }
        },
        demonstration: {
            name: "Demonstration",
            description: "Tema ekran görüntüleri almak için eklenti - kimlik belirten resim ve metinleri sansürler.",
            toolbox: {
                toggle: "Sansürle"
            },
            keycode: "Kısayol tuşunu değiştirmek için {{keycode}} adresine göz at!",
            this: "bu aracın",
            okay: "Tamam!",
            option: {
                keyBind: {
                    label: "Kısayol Tuşu",
                    description: "Basınca temayı açıp kapatacak tuş"
                },
                soundVolume: {
                    label: "Ses Seviyesi",
                    description: "Açma/kapama sesinin yüksekliği (0 = kapalı)"
                },
                showConfirmationModal: {
                    label: "Onay Penceresini Göster",
                    description: "Kısayolu hatırlatmak için pencere göster"
                }
            },
            switch: {
                note: "Bu ayarı daha sonra yeniden etkinleştirebilirsiniz",
                disable: "Onay penceresi devre dışı bırakılsın mı?"
            },
            shortcut: "Bu tüm metinleri sansürleyecek! Bunu devre dışı bırakmak için kısayolu hatırla:"
        },
        devCompanion: {
            name: "DevCompanion",
            description: "Geliştirici Yardımcı Eklentisi. Çalışmayan veya garip davranan bir şey görürseniz (büyük ihtimalle bir hatadır) MutanPlex'e bildirin, ya etiketleyin ya da dm atın, teşekkürler!",
            reconnect: "Yeniden Bağlan",
            option: {
                notifyOnAutoConnect: {
                    label: "Otomatik Bağlantıda Bildir",
                    description: "Dev Companion otomatik olarak bağlandığında bildirim gösterilsin mi?"
                },
                usePatchedModule: {
                    label: "Yamalanmış Modülü Kullan",
                    description: "İstekler çıkarıldığında, orijinal yerine mevcut yamalanmış modül (eğer yamalıysa) ile yanıtla."
                },
                reloadAfterToggle: {
                    label: "Değiştirdikten Sonra Yeniden Yükle",
                    description: "Bir eklenti etkinleştirme/devre dışı bırakma komutu alındığında yeniden yükle."
                }
            },
            toast: {
                connected: "WebSocket'e bağlandı",
                disconnected: "Dev Companion Bağlantısı Kesildi",
                error: "Dev Companion Hatası",
                reload: "Yeniden Yükleme Gerekli",
                failed: "Bağımlılıklar başlatılamadı:",
                close: "Kapat",
                stopping: "{{plugin}} eklentisi durdurulurken hata oluştu",
                starting: "{{plugin}} eklentisi başlatılırken hata oluştu"
            }
        },
        disableCallIdle: {
            name: "DisableCallIdle",
            description: "3 dakika sonra DM sesli aramasından otomatik olarak atılmayı ve AFK ses kanalına taşınmayı devre dışı bırakır."
        },
        disableCameras: {
            name: "DisableCameras",
            description: "Varsayılan olarak aramalarda kameraları devre dışı bırakır"
        },
        disCleaner: {
            name: "DisCleaner",
            description: "Discord'dan mağazaları ve diğer gereksiz şeyleri kaldırır",
            option: {
                dms: {
                    label: "DM'ler",
                    description: "DM listesinin üstündeki mağazaları kaldır"
                },
                serverBoost: {
                    label: "Sunucu Boost",
                    description: "Sunucu boost bilgilerini kanal listesinin üstünden kaldır"
                },
                billing: {
                    label: "Faturalandırma",
                    description: "Faturalandırma ayarlarını kaldır"
                },
                gift: {
                    label: "Hediye",
                    description: "Hediye butonunu kaldır"
                },
                emojiList: {
                    label: "Emoji Listesi",
                    description: "Emoji seçicisindeki kullanılamayan kategorileri kaldır"
                }
            }
        },
        dontFilterMe: {
            name: "DontFilterMe",
            description: "Mesajınız otomatik moderasyon hazır listesinde bulunan bir terim içeriyorsa sizi uyarır",
            alert: {
                title: "Dur bir dakika!",
                content: "Mesajınız otomatik moderasyon hazır listesinde bulunan bir terim içeriyor. (Terim '{{trigger}}')",
                content2: "Mesajınızın engellenme ve bir sunucu moderatörü tarafından işlem görme olasılığı yüksek.",
                confirm: "Yine de Gönder",
                cancel: "İptal"
            }
        },
        dontRoundMyTimestamps: {
            name: "DontRoundMyTimestamps",
            description: "Göreli zaman damgalarını her zaman aşağı yuvarlar, böylece 7.6y 8y yerine 7y olur"
        },
        expandedUserTags: {
            name: "ExpandedUserTags",
            description: "Webhook'lar ve moderasyon rolleri (sahip, admin vb.) için etiketler ekler",
            tag: {
                webhook: {
                    name: "Webhook",
                    description: "Bu kullanıcı bir webhook"
                },
                owner: {
                    name: "Sahip",
                    description: "Sunucunun sahibi"
                },
                admin: {
                    name: "Admin",
                    description: "Yönetici yetkisine sahip"
                },
                staff: {
                    name: "Yetkili",
                    description: "Sunucuyu, kanalları veya rolleri yönetebilir"
                },
                mod: {
                    name: "Mod",
                    description: "Mesajları yönetebilir veya kişileri atabilir/banlayabilir"
                },
                vcmod: {
                    name: "Ses Mod",
                    description: "Sesli sohbetleri yönetebilir"
                },
                chatmod: {
                    name: "Sohbet Mod",
                    description: "Mesajları yönetebilir"
                }
            },
            modal: {
                example: "Örnek",
                tag: "Etiket",
                customTextPlaceholder: "Etiket üzerindeki metin (varsayılan: {{displayName}})",
                messages: "Mesajlarda göster",
                memberList: "Üye listesinde ve profillerde göster"
            },
            option: {
                dontShowForBots: {
                    label: "Botlar için gösterme",
                    description: "Botlar için ekstra etiketleri gösterme (webhook'lar hariç)"
                },
                dontShowBotTag: {
                    label: "Bot etiketini gösterme",
                    description: "Sadece ekstra etiketleri göster / [APP] yazısını gizle"
                },
                showWebhookTagFully: {
                    label: "Webhook etiketini tam göster",
                    description: "Webhook etiketini takip edilen kanallarda (ör. duyurular) tam göster"
                },
                tagSettings: {
                    label: "Etiket Ayarları",
                    description: "doldurulacak"
                }
            }
        },
        experiments: {
            name: "Experiments",
            description: "Discord'da Deneyler ve diğer yalnızca geliştiriciye özel özelliklere erişim sağlar!",
            modal: {
                about: {
                    title: "Daha Fazla Bilgi",
                    body: "{{key}} ile Discord'un Geliştirici Araçlarını açabilirsiniz"
                },
                warning: {
                    title: "Dikkat!!",
                    body: "Deneyler, yayınlanmamış Discord özellikleridir. Çalışmayabilirler, hatta istemcinizi bozabilir veya hesabınızın devre dışı kalmasına neden olabilirler.",
                    notReponsible: "Deneyleri yalnızca ne yaptığınızı biliyorsanız kullanın. Plexcord, deneyleri etkinleştirerek oluşabilecek hiçbir zarardan sorumlu değildir.",
                    useAtOwnRisk: "Bir deneyin ne işe yaradığını bilmiyorsanız, görmezden gelin. Bizden de ne yaptıklarını sormayın, büyük ihtimalle biz de bilmiyoruz.",
                    serverSideFeatures: "Hayır, 'Send to Client' kutusunu işaretlemek gibi sunucu tarafı özelliklerini kullanamazsınız."
                }
            },
            option: {
                toolbarDevMenu: {
                    label: "Araç Çubuğu Geliştirici Menüsü",
                    description: "Yardım (?) araç çubuğu düğmesini (sohbetin sağ üstünde) Discord'un geliştirici menüsüyle değiştirir"
                }
            }
        },
        exportMessages: {
            name: "ExportMessages",
            description: "Mesajları dosyalara aktarmanıza izin verir - tek mesaj, bir kullanıcıya ait tüm mesajlar veya bir kanalın tüm mesajları",
            option: {
                maxMessages: {
                    label: "Maksimum Mesaj",
                    description: "Aktarılacak maksimum mesaj sayısı (0 = sınırsız)"
                },
                includeAttachments: {
                    label: "Ekleri Dahil Et",
                    description: "Aktarımlara ek bilgilerini dahil et"
                },
                includeEmbeds: {
                    label: "Embedleri Dahil Et",
                    description: "Aktarımlara embed bilgilerini dahil et"
                },
                includeReactions: {
                    label: "Tepkileri Dahil Et",
                    description: "Aktarımlara tepki bilgilerini dahil et"
                },
                includeComponents: {
                    label: "Bileşenleri Dahil Et",
                    description: "Aktarımlara bileşen bilgilerini dahil et"
                }
            },
            message: {
                invalid: "Geçersiz mesaj - yazar yok",
                unknownUser: "Bilinmeyen Kullanıcı",
                botEmbed: "Bot Embed Mesajı",
                attachments: "Ekler",
                unknown: "Bilinmeyen",
                noUrl: "URL yok",
                embeds: "Embedler",
                title: "Başlık",
                description: "Açıklama",
                url: "URL",
                footer: "Altbilgi",
                author: "Yazar",
                fields: "Alanlar",
                components: "Bileşenler",
                component: "Bileşen",
                interactiveElement: "Etkileşimli Öğe",
                reactions: "Tepkiler",
                errorFormatting: "Mesaj biçimlendirilirken hata",
                unknownError: "Bilinmeyen hata",
                header: "{{titlePrefix}} {{displayName}}, {{channelName}} kanalında",
                from: "Mesajlar -",
                direct: "Doğrudan Mesajlar",
                exported: "Dışarı Aktarım Tarihi",
                total: "Toplam mesaj"
            },
            toast: {
                export: {
                    title: "Mesajları Dışarı Aktar",
                    body: "Mesaj dışarı aktarımı başarısız oldu"
                },
                noMessages: {
                    title: "Mesajları Dışarı Aktar",
                    notFoundUser: "Bu kullanıcıya ait mesaj bulunamadı",
                    notFoundChannel: "Bu kanalda mesaj bulunamadı"
                },
                failed: {
                    title: "Mesajları Dışarı Aktar",
                    body: "Mesajlar dışarı aktarılırken hata oluştu"
                },
                userNotFound: {
                    title: "Mesajları Dışarı Aktar",
                    body: "Kullanıcı bulunamadı"
                },
                complete: {
                    title: "Dışarı Aktarım Tamamlandı",
                    saved: "Dosya kaydedildi",
                    downloaded: "Dosya indirildi",
                    messages: "mesaj"
                }
            },
            context: {
                exportMessage: "Bu Mesajı Dışarı Aktar",
                exportAll: "{{user}} kullanıcısının tüm mesajlarını dışarı aktar",
                user: "Kullanıcı",
                exportAllChannel: "Kanalın Tüm Mesajlarını Dışarı Aktar"
            }
        },
        expressionCloner: {
            name: "ExpressionCloner",
            description: "Emojileri ve Stickerları kendi sunucunuza klonlamanıza izin verir (sağ tıklayın)",
            modal: {
                title: "Özel İsim",
                invalidName: "İsim 2 ile 32 karakter arasında olmalı ve yalnızca alfanümerik karakterler içermelidir"
            },
            toast: {
                success: "{{name}}, {{guild}} sunucusuna başarıyla klonlandı!",
                yourServer: "senin sunucun",
                failed: "Klonlama başarısız: ",
                console: "Bir şeyler yanlış gitti (konsolu kontrol et!)"
            },
            context: {
                clone: "{{type}} Klonla",
                cloneName: "{{data}} Klonla"
            }
        },
        f8break: {
            name: "F8Break",
            description: "DevTools (+ breakpoints) açıkken F8’e bastığınızda istemciyi duraklatır."
        },
        fakeNitro: {
            name: "FakeNitro",
            description: "Sahte emojiler/stickerlar göndermenizi, nitro temalarını kullanmanızı ve nitro kalitesinde yayın yapmanızı sağlar",
            option: {
                enableEmojiBypass: {
                    label: "Emoji Atlamayı Etkinleştir",
                    description: "Sahte emoji göndermeye izin verir (ayrıca özel emoji kullanma izni eksikliğini de atlar)"
                },
                emojiSize: {
                    label: "Emoji Boyutu",
                    description: "Emoji gönderilirken kullanılacak boyut"
                },
                transformEmojis: {
                    label: "Emojileri Dönüştür",
                    description: "Sahte emojilerin gerçek emojilere dönüştürülüp dönüştürülmeyeceğini belirler"
                },
                enableStickerBypass: {
                    label: "Sticker Atlamayı Etkinleştir",
                    description: "Sahte sticker göndermeye izin verir (ayrıca sticker kullanma izni eksikliğini de atlar)"
                },
                stickerSize: {
                    label: "Sticker Boyutu",
                    description: "Sticker gönderilirken kullanılacak boyut"
                },
                transformStickers: {
                    label: "Stickerları Dönüştür",
                    description: "Sahte stickerların gerçek stickerlara dönüştürülüp dönüştürülmeyeceğini belirler"
                },
                transformCompoundSentence: {
                    label: "Birleşik Cümleleri Dönüştür",
                    description: "Birleşik cümlelerdeki (sadece sahte emoji veya sticker bağlantısından daha fazla içerik içeren cümleler) sahte emoji ve stickerların dönüştürülüp dönüştürülmeyeceğini belirler"
                },
                enableStreamQualityBypass: {
                    label: "Yayın Kalitesi Atlamayı Etkinleştir",
                    description: "Nitro kalitesinde yayın yapmaya izin verir"
                },
                useHyperLinks: {
                    label: "Köprü Kullan",
                    description: "Sahte emoji ve sticker gönderirken köprü kullanılıp kullanılmayacağını belirler"
                },
                hyperLinkText: {
                    label: "Köprü Metni",
                    description: "Köprüde kullanılacak metin. {{NAME}} emoji/sticker ismiyle değiştirilecektir."
                },
                disableEmbedPermissionCheck: {
                    label: "Gömme İzin Kontrolünü Devre Dışı Bırak",
                    description: "Sahte emoji ve sticker gönderirken gömme izni kontrolünün devre dışı bırakılıp bırakılmayacağını belirler"
                }
            },
            modal: {
                sticker: "Bu bir FakeNitro stickerıdır ve yalnızca senin için gerçek bir sticker gibi görünür. Eklenti kullanmayanlara bağlantı olarak görünür.",
                emoji: "Bu bir FakeNitro emojidir ve yalnızca senin için gerçek bir emoji gibi görünür. Eklenti kullanmayanlara bağlantı olarak görünür."
            },
            alert: {
                notice: {
                    title: "Dikkat!",
                    body: "Bir FakeNitro emoji veya sticker içeren bir mesaj göndermeye/düzenlemeye çalışıyorsun, ancak bu kanalda bağlantı gömme iznine sahip değilsin. Bu mesajı göndermek istediğine emin misin? FakeNitro ögelerin sadece bağlantı olarak görünecektir.",
                    footer: "Bu uyarıyı FakeNitro ayarlarından devre dışı bırakabilirsin",
                    confirm: "Yine de Gönder",
                    cancel: "İptal",
                    secondaryConfirm: "Bir Daha Gösterme"
                },
                apngSticker: {
                    title: "Dikkat!",
                    body: "Bu mesajı gönderemezsin çünkü animasyonlu bir FakeNitro sticker içeriyor ve bu kanalda dosya ekleme iznin yok. Devam etmek için stickerı kaldırmalısın."
                }
            }
        },
        fakeProfileThemes: {
            name: "FakeProfileThemes",
            description: "Profil temalandırmayı sağlar; görünmez 3y3 kodlaması sayesinde biyona gizlenmiş renkler ekler.",
            button: {
                copy: "3y3 Kopyala"
            },
            modal: {
                usage: "Kullanım",
                preview: "Önizleme",
                intro: "Bu eklentiyi etkinleştirdikten sonra, uyumlu eklentileri kullanan diğer kişilerin profillerinde özel renkler göreceksin.",
                setColor: "Kendi renklerini ayarlamak için:",
                step1: "• aşağıdaki renk seçicileri kullanarak renklerini seç",
                step2: "• {{copy}} butonuna tıkla",
                step3: "• görünmez yazıyı hakkında kısmında herhangi bir yere yapıştır",
                pickers: "Renk Seçiciler",
                primary: "Birincil",
                accent: "Vurgu"
            },
            option: {
                nitroFirst: {
                    label: "Önce Nitro",
                    description: "Her ikisi de mevcutsa varsayılan renk kaynağı",
                    nitro: "Nitro renkleri",
                    fake: "Sahte renkler"
                }
            }
        },
        fakeProfileThemesAndEffects: {
            name: "FakeProfileThemesAndEffects",
            description: "Profil temaları ve profil efektleri eklemene olanak tanır; görünmez 3y3 kodlaması sayesinde biyona gizlenmiş renkler ve efektler eklenir.",
            option: {
                prioritizeNitro: {
                    label: "Nitro'yu Önceliklendir",
                    description: "Önceliklendirilecek kaynak",
                    nitro: "Nitro",
                    aboutMe: "Hakkımda"
                },
                hideBuilder: {
                    label: "Oluşturucuyu Gizle",
                    description: "Kullanıcı Profili ve Sunucu Profili ayar sayfalarında FPTE Oluşturucuyu gizle"
                }
            },
            modal: {
                primary: "Birincil",
                accent: "Vurgu",
                effect: "Efekt",
                usage: {
                    title: "Kullanım",
                    intro: "Bu eklentiyi etkinleştirdikten sonra, bu eklentiyi kullanan diğer kişilerin profillerinde özel tema renklerini ve efektlerini göreceksiniz.",
                    setColor: "Kendi renklerini ve efektini ayarlamak için:",
                    step1: "Profil ayarlarına git",
                    step2: "Profil tema renklerini ve efektini seçmek için FPTE Oluşturucuyu kullan",
                    step3: "{{copy}} butonuna tıkla",
                    step4: "Görünmez metni biyona istediğin yere yapıştır"
                }
            },
            toast: {
                copied: "FPTE panoya kopyalandı!",
                empty: "FPTE Oluşturucu boş; kopyalanacak bir şey yok!"
            },
            button: {
                copyFPTE: "FPTE Kopyala",
                reset: "Sıfırla",
                preview: "FPTE Oluşturucu Önizleme",
                buildBackwards: "Geriye dönük uyumlu FPTE oluştur",
                moreCharacters: "Daha fazla karakter kullanılacak"
            }
        },
        fastDeleteChannels: {
            name: "FastDeleteChannels",
            description: "Kanalları silmek için bir çöp kutusu simgesi ekler",
            option: {
                keyBind: {
                    label: "Kısayol Tuşu",
                    description: "Çöp kutusunu açıp kapatmak için kullanılacak tuş."
                },
                reqCtrl: {
                    label: "Ctrl Tuşu Gerekli",
                    description: "Çöp kutusunu açmak için Ctrl tuşunun basılı tutulmasını gerektirir."
                },
                reqShift: {
                    label: "Shift Tuşu Gerekli",
                    description: "Çöp kutusunu açmak için Shift tuşunun basılı tutulmasını gerektirir."
                },
                reqAlt: {
                    label: "Alt Tuşu Gerekli",
                    description: "Çöp kutusunu açmak için Alt tuşunun basılı tutulmasını gerektirir."
                }
            }
        },
        favoriteEmojiFirst: {
            name: "FavoriteEmojiFirst",
            description: "Favori emojinizi emoji otomatik tamamlama listesinin en üstüne koyar."
        },
        favoriteGifSearch: {
            name: "FavoriteGifSearch",
            description: "Favori GIF’lere bir arama çubuğu ekler.",
            placeholder: "Favori GIF’lerde ara",
            option: {
                searchOption: {
                    label: "Arama Seçeneği",
                    description: "URL’nin hangi kısmında arama yapmak istediğiniz",
                    url: "Tüm URL",
                    path: "Yalnızca Yol (/somegif.gif)",
                    hostandpath: "Host ve Yol (tenor.com somegif.gif)"
                }
            }
        },
        findReply: {
            name: "FindReply",
            description: "Bir kanaldaki bir mesaja verilen en eski yanıta atlar (geçmiş konuşmaları daha kolay takip etmenizi sağlar).",
            context: {
                jump: "Yanıta Git"
            },
            toast: {
                navigate: "Yanıtlar arasında gezinmek için alt paneli kullanın.",
                container: "Kapsayıcı öğe bulunamadı.",
                couldntFind: "Yanıt mesajı bulunamadı."
            },
            option: {
                includePings: {
                    label: "Bahsetmeleri Dahil Et",
                    description: "Yazarına direkt @ atılan mesajları da arar"
                },
                includeAuthor: {
                    label: "Yazarı Dahil Et",
                    description: "Yalnızca ilgili mesaja değil, genel olarak yazara verilen yanıtları da arar"
                },
                hideButtonIfNoReply: {
                    label: "Yanıt Yoksa Butonu Gizle",
                    description: "Mesaja yanıt yoksa butonu gizler"
                }
            }
        },
        fixCodeblockGap: {
            name: "FixCodeblockGap",
            description: "Kod blokları ile altındaki metin arasındaki boşluğu kaldırır"
        },
        fixFileExtensions: {
            name: "FixFileExtensions",
            description: "Dosya uzantılarını, mümkünse uyumlu desteklenen bir formata yeniden adlandırarak düzeltir"
        },
        fixImagesQuality: {
            name: "FixImagesQuality",
            description: "Sohbetteki görsellerin kalitesini artırmak için PNG formatını zorlar."
        },
        fixSpotifyEmbeds: {
            name: "FixSpotifyEmbeds",
            description: "Spotify embed'lerinin aşırı yüksek sesli olmasını düzeltir, ses seviyesini özelleştirmenize izin verir",
            option: {
                volume: {
                    label: "Ses Seviyesi",
                    description: "Spotify embed'leri için ayarlanacak ses yüzdesi. %10'un üzeri çok yüksek olur"
                }
            }
        },
        fixYoutubeEmbeds: {
            name: "FixYoutubeEmbeds",
            description: "YouTube videolarının Discord'da görüntülenmesinin engellenmesini atlar (ör. UMG tarafından)"
        },
        followUser: {
            name: "FollowUser",
            description: "Kullanıcı bağlam menüsüne bir takip seçeneği ekler; her zaman aynı sesli kanalda olmanı sağlar",
            indicatorTooltip: "{{user}} takip ediliyor (manuel tetiklemek için tıkla, takibi bırakmak için sağ tıkla)",
            unknownUser: "Bilinmeyen Kullanıcı",
            option: {
                executeOnFollow: {
                    label: "Takip Edince Uygula",
                    description: "Bir kullanıcıyı takip ederken aynı sesli kanalda olduğundan emin olun"
                },
                onlyManualTrigger: {
                    label: "Sadece Manuel Tetikleme",
                    description: "Sadece göstergeye tıklandığında tetikle"
                },
                followLeave: {
                    label: "Takip Edilen Ayrılınca",
                    description: "Takip edilen kullanıcı ayrıldığında siz de ayrılın"
                },
                autoMoveBack: {
                    label: "Otomatik Geri Taşı",
                    description: "Taşındığınızda otomatik olarak takip edilen kullanıcının sesli kanalına geri dönün"
                },
                followUserId: {
                    label: "Takip Edilen Kullanıcı ID",
                    description: "Takip edilen kullanıcı ID'si"
                },
                channelFull: {
                    label: "Kanal Doldu",
                    description: "Kanal artık dolu değilse sizi oraya taşımayı dene"
                }
            },
            toast: {
                channelFull: "Kanal dolu",
                newVc: "Takip edilen kullanıcı yeni bir sesli kanala geçti",
                insufficientPermissions: "Sesli kanala giriş için yetki yetersiz",
                sameVc: "Zaten aynı kanaldasınız",
                disconnect: "Takip edilen kullanıcı ayrıldı, bağlantı kesildi",
                notFollowing: "Takip edilen kullanıcı ayrıldı, ancak takipten ayrılmadınız",
                notVc: "Takip edilen kullanıcı sesli kanalda değil"
            },
            context: {
                follow: "Takip Et",
                unfollow: "Takibi Bırak"
            }
        },
        fontLoader: {
            name: "FontLoader",
            description: "Google Fonts üzerinden herhangi bir yazı tipini yükler",
            option: {
                selectedFont: {
                    label: "Seçilen Yazı Tipi",
                    description: "Şu anda seçili olan yazı tipi"
                },
                fontSearch: {
                    label: "Yazı Tipi Arama",
                    description: "Google Fonts üzerinden yazı tiplerini ara ve seç"
                },
                applyOnCodeBlocks: {
                    label: "Kod Bloklarına Uygula",
                    description: "Yazı tipini kod bloklarına uygula"
                }
            },
            toast: {
                failedLoad: "Yazı tipi yüklenemedi"
            },
            modal: {
                settings: {
                    title: "Google Fonts'ta Ara",
                    description: "Uygulamak için bir yazı tipi seç",
                    placeholder: "Yazı tiplerini ara...",
                    previewText: "Pijamalı hasta yağız şoföre çabucak güvendi",
                    authors: "{{authors}} tarafından"
                }
            }
        },
        forceOwnerCrown: {
            name: "ForceOwnerCrown",
            description: "Sunucu büyük olsa bile, kullanıcı adlarının yanında sunucu sahibi tacını zorla gösterir."
        },
        freaky: {
            name: "Freaky",
            description: "/freaky komutu ile mesajını garip bir fontla göndermene olanak tanır.",
            command: {
                freaky: "Tuhaf oldu.",
                message: "Mesajını garip bir fontla gönder"
            },
            option: {
                addFreakyEnding: {
                    label: "Tuhaf Son Ekleyin",
                    description: "Sona 👅 veya ❤️ ekleyin"
                }
            }
        },
        frequentQuickSwitcher: {
            name: "Frequent Quick Switcher",
            description: "Hızlı geçiş penceresindeki sonuçları en sık kullandığın kanallarla değiştirir ve filtreler."
        },
        friendInvites: {
            name: "FriendInvites",
            description: "Slash komutları ile arkadaş davet bağlantıları oluştur ve yönet (/create friend invite, /view friend invites, /revoke friend invites).",
            command: {
                create: {
                    description: "Bir arkadaş davet bağlantısı oluşturur.",
                    message: "discord.gg/{{code}}`\n· Süre bitişi: <t:{{expiration}}:R>\n· Maksimum Kullanım: {{uses}}"
                },
                view: {
                    description: "Oluşturulmuş tüm arkadaş davet bağlantılarını görüntüle.",
                    message: "_discord.gg/{{code}}_ \n· Süre bitişi: <t:{{expiration}}:R> \n· Kullanım sayısı: {{uses}}/{{maxUses}}",
                    noInvites: "Etkin arkadaş davet bağlantın yok."
                },
                revoke: {
                    description: "Oluşturulmuş tüm arkadaş davet bağlantılarını iptal eder.",
                    message: "Tüm arkadaş davet bağlantıları iptal edildi."
                }
            }
        },
        friendshipRanks: {
            name: "FriendshipRanks",
            description: "Bir kullanıcıyla ne kadar süredir arkadaş olduğunu gösteren rozetler ekler.",
            badge: {
                sprout: {
                    name: "Filiz",
                    description: "Arkadaşlığınız yeni filizleniyor."
                },
                blooming: {
                    name: "Çiçek Açıyor",
                    description: "Arkadaşlığınız gelişiyor! (1 Ay)"
                },
                burning: {
                    name: "Alevlenmiş",
                    description: "Arkadaşlığınız zirveye ulaştı. (3 Ay)"
                },
                fighter: {
                    name: "Savaşçı",
                    description: "Arkadaşlığınız güçlü. (6 Ay)"
                },
                star: {
                    name: "Yıldız",
                    description: "Arkadaşlığınız uzun süredir devam ediyor. (1 Yıl)"
                },
                royal: {
                    name: "Asil",
                    description: "Arkadaşlığınız her zorluğu aşmış — tam 2 yıl!"
                },
                besties: {
                    name: "En İyi Arkadaş",
                    description: "Bunu nasıl başarıyorsunuz??? (5 Yıl)"
                }
            }
        },
        friendsSince: {
            name: "FriendsSince",
            description: "Kullanıcı açılır penceresinde biriyle ne zaman arkadaş olduğunu gösterir.",
            section: "Arkadaş Olunan Tarih"
        },
        fullSearchContext: {
            name: "FullSearchContext",
            description: "Mesaj arama sonuçlarındaki mesaj bağlam menüsünü, beklediğin tüm seçeneklerle tam hale getirir."
        },
        fullUserInChatbox: {
            name: "FullUserInChatbox",
            description: "Sohbet kutusundaki kullanıcı etiketine sol/sağ tıklama gibi ek işlevler ekler."
        },
        fullVCPFP: {
            name: "FullVCPFP",
            description: "Avatarların sesli sohbet kutucuğunun tamamını kaplamasını sağlar."
        },
        gameActivityToggle: {
            name: "GameActivityToggle",
            description: "Kullanıcı açılır penceresine oyun etkinliğinizi gösterip gizlemek için bir anahtar ekler.",
            tooltip: "Oyun Etkinliğini Değiştir",
            gameActivity: {
                enabled: "Oyun Etkinliği Etkin",
                disabled: "Oyun Etkinliği Devre Dışı"
            },
            option: {
                oldIcon: {
                    label: "Eski İkon",
                    description: "Discord ikonunun yeniden tasarımından önceki eski ikon stilini kullan"
                },
                location: {
                    label: "Konum",
                    description: "Oyun etkinliği anahtarının nerede gösterileceği",
                    panel: "Sustur/Mikrofon Kapat'ın Yanında",
                    toolbox: "Plexcord Araç Kutusunda"
                }
            }
        },
        gifCollections: {
            name: "GifCollection",
            description: "GIF koleksiyonları oluşturmanı sağlar.",
            context: {
                copyImageLink: "Görsel Bağlantısını Kopyala",
                copyUrl: "URL'yi Kopyala",
                collection: {
                    add: "Koleksiyona Ekle",
                    gif: "GIF Koleksiyonları",
                    delete: "Koleksiyonu Sil",
                    create: "Koleksiyon Oluştur",
                    remove: "Kaldır",
                    information: "Koleksiyon Bilgisi",
                    name: "İsim",
                    gifs: "GIF'ler",
                    created: "Oluşturulma Tarihi",
                    updated: "Son Güncelleme",
                    close: "Kapat",
                    rename: "Yeniden Adlandır",
                    move: "Koleksiyona Taşı",
                    select: "Taşınacak koleksiyonu seç"
                },
                gif: {
                    information: "Bilgi",
                    added: "Eklendiği Tarih",
                    width: "Genişlik",
                    height: "Yükseklik",
                    close: "Kapat"
                }
            },
            option: {
                itemPrefix: {
                    label: "Öğe Öneki",
                    description: "GIF öğeleri için önek"
                },
                collectionPrefix: {
                    label: "Koleksiyon Öneki",
                    description: "Koleksiyonlar için önek"
                },
                onlyShowCollections: {
                    label: "Yalnızca Koleksiyonları Göster",
                    description: "Yalnızca koleksiyonları göster"
                },
                stopWarnings: {
                    label: "Uyarıları Durdur",
                    description: "Silme uyarılarını durdur"
                },
                showCopyImageLink: {
                    label: "Görsel Bağlantısını Kopyala Seçeneğini Göster",
                    description: "Bağlam menülerinde {{copyImageLink}} seçeneğini göster"
                },
                preventDuplicates: {
                    label: "Tekrarları Önle",
                    description: "Aynı GIF'in bir koleksiyona birden fazla kez eklenmesini önle"
                },
                defaultEmptyCollectionImage: {
                    label: "Varsayılan Boş Koleksiyon Görseli",
                    description: "Koleksiyonda hiç görsel/GIF olmadığında gösterilecek görsel/GIF"
                },
                collectionsSortType: {
                    label: "Koleksiyon Sıralama Türü",
                    description: "Koleksiyonların sıralama türü"
                },
                collectionsSortOrder: {
                    label: "Koleksiyon Sıralama Düzeni",
                    description: "Koleksiyonların sıralama düzeni"
                },
                collectionsSort: {
                    label: "Koleksiyonları Sırala",
                    description: "Koleksiyonları nasıl sıralayacağını belirle",
                    title: "Koleksiyonları Sırala",
                    sortDescription: "Koleksiyonların için bir sıralama ölçütü seç",
                    sortBy: "Sıralama Ölçütü",
                    name: "İsim",
                    creationDate: "Oluşturulma Tarihi",
                    modifiedDate: "Değiştirilme Tarihi",
                    ascending: "Artan",
                    descending: "Azalan"
                },
                importGifs: {
                    label: "GIF'leri İçe Aktar",
                    description: "Koleksiyonları içe aktar",
                    button: "Koleksiyonları İçe Aktar"
                },
                exportGifs: {
                    label: "GIF'leri Dışa Aktar",
                    description: "Koleksiyonları dışa aktar",
                    button: "Koleksiyonları Dışa Aktar"
                },
                resetCollections: {
                    label: "Koleksiyonları Sıfırla",
                    description: "Koleksiyonları varsayılanlara sıfırla (tüm koleksiyonlarını siler)",
                    button: "Koleksiyonları Sıfırla"
                }
            },
            toast: {
                copied: "Görsel bağlantısı panoya kopyalandı!",
                urlCopied: "URL panoya kopyalandı!",
                already: "Bu koleksiyon zaten mevcut",
                alreadyCollection: "Bu GIF zaten koleksiyonda mevcut"
            },
            modal: {
                create: {
                    title: "Koleksiyon Oluştur",
                    name: "Koleksiyon Adı",
                    create: "Oluştur"
                },
                rename: {
                    title: "Koleksiyonu Yeniden Adlandır",
                    name: "Yeni Koleksiyon Adı",
                    warning: "İsim 24 karakterden uzun olamaz",
                    rename: "Yeniden Adlandır"
                }
            },
            alert: {
                import: {
                    title: "Emin misin?",
                    body: "Koleksiyonları içe aktarmak mevcut koleksiyonlarını üzerine yazar.",
                    confirm: "İçe Aktar",
                    cancel: "Vazgeç"
                },
                reset: {
                    title: "Emin misin?",
                    body: "Koleksiyonları sıfırlamak tüm koleksiyonlarını kaldırır.",
                    confirm: "Sıfırla",
                    cancel: "Vazgeç"
                },
                delete: {
                    title: "Emin misin?",
                    deleteBody: "Bu koleksiyonu gerçekten silmek istiyor musun?",
                    removeBody: "Bu öğeyi gerçekten kaldırmak istiyor musun?",
                    confirm: "Sil",
                    remove: "Kaldır",
                    cancel: "Vazgeç"
                }
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "GIF'leri doğrudan sohbet kutusuna yapıştırmana olanak tanır."
        },
        gitHubRepos: {
            name: "GitHubRepos",
            description: "Kullanıcının herkese açık GitHub depolarını profilinde gösterir.",
            loading: "Depolar yükleniyor...",
            option: {
                showStars: {
                    label: "Yıldızları Göster",
                    description: "Depo yıldızlarını göster"
                },
                showLanguage: {
                    label: "Dili Göster",
                    description: "Depoların ana programlama dilini göster"
                },
                showInMiniProfile: {
                    label: "Mini Profilde Göster",
                    description: "Depoları mini profil penceresinde göster"
                }
            },
            error: {
                error: "Hata",
                render: "Hata: GithubRepos görüntülenemedi"
            },
            button: {
                show: "GitHub Depolarını Göster",
                repositories: "GitHub Depoları",
                more: "Daha Fazla Göster",
                only: "Yalnızca en iyi {{length}}/{{total}} gösteriliyor"
            },
            modal: {
                title: "{{user}} adlı kullanıcının GitHub Depoları",
                repository: "Depo",
                description: "Açıklama",
                language: "Dil",
                stars: "Yıldız",
                viewOnGitHub: "GitHub'da Görüntüle",
                close: "Kapat"
            }
        },
        googleThat: {
            name: "GoogleThat",
            description: "İnternet arama bağlantısı göndermeni sağlayan bir komut ekler.",
            command: {
                googleThat: {
                    description: "Bir arama motoru bağlantısı gönder",
                    query: "Arama sorgusu"
                }
            },
            option: {
                hyperlink: {
                    label: "Köprü",
                    description: "Gönderilen bağlantının, sorgu etiketiyle köprü olarak gönderilip gönderilmeyeceği"
                },
                defaultEngine: {
                    label: "Varsayılan Arama Motoru",
                    description: "Kullanılacak arama motoru"
                },
                customEngineURL: {
                    label: "Özel Arama Motoru URL’si",
                    description: "Kullanmak istediğin arama motorunun URL’si"
                }
            }
        },
        greetStickerPicker: {
            name: "GreetStickerPicker",
            description: "'El salla ve merhaba de!' butonuna sağ tıklayarak rastgele olan yerine istediğin karşılama çıkartmasını kullanmanı sağlar.",
            mode: {
                greet: "Selamla",
                message: "Mesaj"
            },
            option: {
                greetMode: {
                    label: "Selamlama Modu",
                    description: "Selamlama modunu seç",
                    greet: "Selamla (yalnızca 3 kez selam gönderebilirsin)",
                    message: "Mesaj (sınırsız selam gönderebilirsin)"
                }
            },
            context: {
                label: "Selamlama Çıkartması Seçici",
                mode: "Selamlama Modu",
                stickers: "Selamlama Çıkartmaları",
                multi: "Çoklu Selamlama",
                send: "Selam Gönder"
            }
        },
        guildPickerDumper: {
            name: "GuildPickerDumper",
            description: "Bir sunucunun emoji ve çıkartmalarını dışa aktarıp indirmeni sağlayan bir bağlam menüsü ekler.",
            context: {
                download: {
                    emoji: "Emojileri İndir",
                    sticker: "Çıkartmaları İndir"
                }
            }
        },
        hideChatButtons: {
            name: "HideChatButtons",
            description: "Sohbet butonlarını gizlemeni sağlar.",
            tooltip: {
                close: "Kapat",
                open: "Aç"
            },
            option: {
                color: {
                    label: "Renk",
                    description: "Açıldığında kırmızı renkle göster"
                },
                open: {
                    label: "Açık",
                    description: "Varsayılan olarak açık"
                }
            }
        },
        hideMedia: {
            name: "HideMedia",
            description: "Üzerine gelindiğinde beliren bir butonla belirli mesajlardaki ekleri ve gömülü içerikleri gizlemeni sağlar.",
            show: "Medyayı Göster",
            hide: "Medyayı Gizle",
            hidden: "Medya Gizlendi"
        },
        hideServers: {
            name: "HideServers",
            description: "Sunucuları sunucu listesinden gizler",
            context: {
                hide: "Sunucuyu Gizle",
                unhide: "Sunucuyu Göster",
                folder: {
                    hide: "Klasörü Gizle",
                    unhide: "Klasörü Göster"
                }
            },
            option: {
                showIndicator: {
                    label: "Göstergeleri Göster",
                    description: "Listede gizli sunucuları göstermek için menüyü alt kısımda göster"
                },
                guildsList: {
                    label: "Sunucu Listesi",
                    description: "Gizli sunucuları kaldır"
                },
                resetHidden: {
                    label: "Gizli Sunucuları Sıfırla",
                    description: "Listeden tüm gizli sunucuları kaldır",
                    button: "Gizli Sunucuları Sıfırla"
                }
            },
            button: {
                hidden: "Gizli",
                hiddenServers: "Gizli Sunucular",
                remove: "Kaldır",
                folder: "Klasör",
                removeAll: "Tümünü Kaldır",
                guilds: "Sunucular",
                noHiddenServers: "Gizli sunucu yok"
            }
        },
        holyNotes: {
            name: "HolyNotes",
            description: "Holy Notes mesajları kaydetmeni sağlar",
            main: "Ana",
            button: {
                tooltip: "Holy Notes",
                save: "Notu Kaydet",
                addNote: "Notlara Ekle",
                refresh: "Avatarları Yenile",
                import: "Notları İçe Aktar",
                export: "Notları Dışa Aktar",
                deleteAll: "Tüm Notları Sil",
                delete: "Not Defterini Sil",
                create: "Not Defteri Oluştur",
                copyText: "Metni Kopyala",
                copyAttachment: "Ek URL’sini Kopyala",
                deleteNote: "Notu Sil",
                moveNote: "Notu Taşı",
                moveTo: "{{key}} konumuna taşı",
                copyId: "ID’yi Kopyala"
            },
            modal: {
                error: {
                    generic: "Notların işlenirken bir hata oluştu! Hata konsoluna kaydedildi, CTRL + I tuşuna basarak erişebilirsin! Ek yardım için destek sunucusuna katıl!",
                    easter: "Hiç not bulunamadı. Empati muzu seninle.",
                    empty: "Bu not defterinde kayıtlı not yok."
                },
                help: {
                    title: "Yardım Penceresi",
                    addingNotes: "Not Ekleme",
                    addingNotesText: "Bir not eklemek için bir mesaja sağ tıkla, 'Mesajı Not Et' seçeneğinin üzerine gel ve notu eklemek istediğin defteri seç.",
                    prototype: "Prototip",
                    noteMessage: "'Mesajı Not Et' butonuna tek tıklamak, varsayılan olarak Ana deftere ekler!",
                    deletingNotes: "Not Silme",
                    deletingNotesText: "Bir notu silmek için sağ tıklayıp 'Notu Sil' seçeneğini seçebilir ya da klavyendeki 'DELETE' tuşunu basılı tutup nota tıklayabilirsin.",
                    movingNotes: "Not Taşıma",
                    movingNotesText: "Bir notu taşımak için sağ tıklayıp 'Notu Taşı' seçeneği üzerinden taşımak istediğin defteri seç.",
                    jumpToMessage: "Mesaja Git",
                    jumpToMessageText: "Bir notun ait olduğu mesaja gitmek için notun üzerine sağ tıkla ve 'Mesaja Git' seçeneğini seç."
                },
                notebook: {
                    title: "NOT DEFTERİ",
                    search: "Bir mesaj ara...",
                    label: "Sıralama Menüsü",
                    ada: "Artan / Eklenme Tarihi",
                    amd: "Artan / Mesaj Tarihi",
                    dda: "Azalan / Eklenme Tarihi",
                    dmd: "Azalan / Mesaj Tarihi",
                    change: "Sıralamayı Değiştir",
                    ascending: "Artan",
                    descending: "Azalan",
                    dateAdded: "Eklenme Tarihi",
                    messageDate: "Mesaj Tarihi"
                },
                create: {
                    title: "Not Defteri Oluştur",
                    placeholder: "Not Defteri Adı"
                },
                delete: {
                    title: "Silmeyi Onayla",
                    button: "Sil"
                },
                tabs: {
                    label: "Not Defteri Sekmeleri"
                }
            },
            toast: {
                saved: "Mesaj başarıyla {{notebook}} defterine eklendi.",
                deleted: "Not {{notebook}} defterinden başarıyla silindi.",
                moved: "Not başarıyla {{from}} defterinden {{to}} defterine taşındı.",
                exists: "{{notebookName}} adlı defter zaten mevcut.",
                created: "{{notebookName}} başarıyla oluşturuldu.",
                deletedNotebook: "{{notebookName}} başarıyla silindi.",
                refreshed: "Avatarlar başarıyla yenilendi.",
                deletedAll: "Tüm notlar başarıyla silindi.",
                imported: "Notlar başarıyla içe aktarıldı.",
                invalid: "Geçersiz JSON."
            },
            toolbox: {
                action: "Notları Aç"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "DM’lerinde biri yazı yazıyorsa, ana sayfa butonunu yazıyor göstergesine dönüştürür."
        },
        ignoreActivities: {
            name: "IgnoreActivities",
            description: "Etkinliklerin yalnızca durumunda görünmesini engeller. Kayıtlı Oyunlar ve Etkinlikler sekmelerinden hangilerinin yok sayılacağını belirleyebilir veya aşağıdaki genel ayarları kullanabilirsin.",
            modal: {
                import: {
                    title: "CustomRPC eklentisinin uygulama kimliğini filtre listesine aktar"
                },
                filter: {
                    title: "Filtre Listesi",
                    description: "Filtrelenecek etkinlik kimliklerinin virgülle ayrılmış listesi (Belirli RPC etkinliklerini ve CustomRPC’yi filtrelemek için yararlıdır)"
                }
            },
            toast: {
                id: {
                    notSet: "CustomRPC uygulama kimliği ayarlanmamış.",
                    alreadyAdded: "CustomRPC uygulama kimliği zaten eklenmiş."
                }
            },
            button: {
                import: "CustomRPC Kimliğini Aktar"
            },
            option: {
                importCustomRPC: {
                    label: "CustomRPC’yi Aktar"
                },
                listMode: {
                    label: "Liste Modu",
                    description: "Filtre listesinin nasıl uygulanacağını seç",
                    blacklist: "Kara Liste (Yalnızca listedekileri yok say)",
                    whitelist: "Beyaz Liste (Listedekiler dışındakileri yok say)"
                },
                idList: {
                    label: "Kimlik Listesi"
                },
                ignorePlaying: {
                    label: "Oynananları Yok Say",
                    description: "Tüm oynanan etkinlikleri yok say (Genellikle oyun ve RPC etkinlikleridir)"
                },
                ignoreStreaming: {
                    label: "Yayınları Yok Say",
                    description: "Tüm yayın etkinliklerini yok say"
                },
                ignoreListening: {
                    label: "Dinlenenleri Yok Say",
                    description: "Tüm dinleme etkinliklerini yok say (Genellikle Spotify etkinlikleridir)"
                },
                ignoreWatching: {
                    label: "İzlenenleri Yok Say",
                    description: "Tüm izleme etkinliklerini yok say"
                },
                ignoreCompeting: {
                    label: "Rekabet Etkinliklerini Yok Say",
                    description: "Tüm rekabet (yarışma) etkinliklerini yok say (Genellikle özel oyun etkinlikleridir)"
                },
                ignoredActivities: {
                    label: "Yok Sayılan Etkinlikler"
                }
            }
        },
        ignoreCalls: {
            name: "IgnoreCalls",
            description: "Belirli kullanıcılar veya DM gruplarından gelen aramaları yok saymanı sağlar.",
            option: {
                permanentlyIgnoredUsers: {
                    label: "Kalıcı Olarak Yok Sayılan Kullanıcılar",
                    description: "User IDs (virgül + boşluk) who should be permanently ignored"
                }
            },
            button: {
                ignore: "Yoksay",
                temporarilyIgnore: "Geçici Olarak Yoksay",
                permanentlyIgnore: "Kalıcı Olarak Yoksay"
            }
        },
        ignoreTerms: {
            name: "IgnoreTerms",
            description: "Discord'un yeni hizmet şartlarını yok say"
        },
        iLoveSpam: {
            name: "ILoveSpam",
            description: "'Muhtemel spam göndericilerinden' gelen mesajları gizleme."
        },
        imageFilename: {
            name: "ImageFilename",
            description: "Görsellere ve GIF’lere fareyle geldiğinde dosya adını ipucu olarak gösterir.",
            option: {
                showFullUrl: {
                    label: "Tam URL'yi Göster",
                    description: "Yalnızca dosya adı yerine görselin tam URL’sini gösterir. GIF’ler için her zaman etkindir çünkü genellikle anlamlı bir dosya adları yoktur."
                }
            }
        },
        imageLink: {
            name: "ImageLink",
            description: "Mesajlarda yalnızca görsel bağlantısı olsa bile görsel bağlantılarını asla gizlemez."
        },
        imageZoom: {
            name: "ImageZoom",
            description: "Görselleri ve GIF'leri yakınlaştırmanıza ve ayrıca görsel meta verilerini görüntülemenize olanak tanır. Fare tekerleğini kullanarak yakınlaştırın, Shift + fare tekerleği ile mercek yarıçapını artırın.",
            option: {
                saveZoomValues: {
                    label: "Yakınlaştırma Değerlerini Kaydet",
                    description: "Yakınlaştırma ve mercek boyutu değerlerinin kaydedilip kaydedilmeyeceğini belirler"
                },
                invertScroll: {
                    label: "Kaydırmayı Ters Çevir",
                    description: "Fare kaydırma yönünü tersine çevirir"
                },
                nearestNeighbour: {
                    label: "En Yakın Komşu",
                    description: "Görselleri ölçeklendirirken En Yakın Komşu Enterpolasyonunu kullanır"
                },
                square: {
                    label: "Kare",
                    description: "Merceği kare şekline getirir"
                },
                zoom: {
                    label: "Yakınlaştırma",
                    description: "Merceğin yakınlaştırma oranı"
                },
                size: {
                    label: "Boyut",
                    description: "Mercek yarıçapı / boyutu"
                },
                zoomSpeed: {
                    label: "Yakınlaştırma Hızı",
                    description: "Yakınlaştırma / mercek boyutunun değişim hızını belirler"
                },
                showMetadata: {
                    label: "Meta Verileri Göster",
                    description: "Seçili görsele çift tıklandığında meta verileri gösterir"
                }
            },
            context: {
                square: "Kare Mercek",
                nearest: "Pikselli Büyütme",
                zoom: "Yakınlaştırma",
                size: "Mercek Boyutu",
                zoomSpeed: "Yakınlaştırma Hızı",
                showImageMetadata: "Görsel Meta Verilerini Göster",
                view: "Meta Verileri Görüntüle",
                loading: "Yükleniyor...",
                unknown: "Bilinmiyor",
                sizeHTML: "Boyut",
                dimensions: "Boyutlar",
                filename: "Dosya Adı"
            }
        },
        imgToGif: {
            name: "ImgToGif",
            description: "Herhangi bir görseli GIF'e dönüştürmek için /imgtogif komutunu ekler",
            command: {
                imgToGif: {
                    description: "Bir görseli GIF'e dönüştürmenizi sağlar",
                    image: "Kullanılacak görsel eki",
                    width: "GIF genişliği",
                    height: "GIF yüksekliği"
                }
            },
            error: {
                noImage: "Görsel belirtilmedi!",
                notImage: "Yüklenen dosya bir görsel değil"
            }
        },
        implicitRelationships: {
            name: "ImplicitRelationships",
            description: "Arkadaşlar sekmesinde dolaylı ilişkilerinizi gösterir.",
            option: {
                sortByAffinity: {
                    label: "Yakınlığa Göre Sırala",
                    description: "Dolaylı ilişkilerin size olan yakınlığına göre sıralanıp sıralanmayacağını belirler."
                }
            },
            implicit: "Dolaylı"
        },
        inRole: {
            name: "InRole",
            description: "Rol bağlam menüsünü veya /inrole komutunu kullanarak bir rolde kimlerin olduğunu öğrenin (eklenti bilgilerini okuyun!)",
            command: {
                inrole: {
                    description: "Bir rolde kimlerin olduğunu öğren",
                    role: "Rol",
                    noGuild: "Bir sunucuda olduğunuzdan emin olun."
                }
            },
            context: {
                view: "Roldaki Üyeleri Görüntüle"
            },
            modal: {
                about: {
                    title: "Sınırlamalar",
                    description: "Sunucuda moderasyon izinlerine sahip değilseniz ve sunucu büyükse (100'den fazla üye), eklenti şu şekillerde sınırlı olabilir:",
                    list: {
                        one: "Çevrimdışı üyeler listelenmeyecektir",
                        two: "Varsayılan olarak en fazla 100 üye listelenecektir. Daha fazla üye görmek için üye listesinde aşağı kaydırın.",
                        three: "Ancak arkadaşlarınız, durumlarından bağımsız olarak her zaman gösterilecektir."
                    }
                },
                member: {
                    title: "Rolündeki Üyeler",
                    noMembers: "Bu role sahip çevrimiçi önbelleğe alınmış üye bulunamadı. Daha fazla kullanıcı önbelleğe almak için üye listenizde aşağı kaydırmayı deneyin!"
                }
            }
        },
        instantScreenshare: {
            name: "InstantScreenshare",
            description: "Bir ses kanalına katıldığında masaüstü kaynakları, pencereler ve video giriş cihazları (kameralar, yakalama kartları) desteğiyle anında ekran paylaşımı yapmanı sağlar.",
            modal: {
                linux: {
                    title: "Linux İçin",
                    body: "Wayland kullanıyorsan yalnızca ekran paylaşımı seçimini açar.",
                    bodyTwo: "X11 için çalışabilir de çalışmayabilir de :shrug:"
                },
                videoDevices: {
                    title: "Video Giriş Cihazları",
                    body: "Ayarlar etkinleştirildiğinde kameraları ve yakalama kartlarını (örneğin Elgato HD60X) destekler."
                },
                regardingSound: {
                    title: "Ses ve Önizleme Ayarları Hakkında",
                    body: "Akış önizlemesi ve sesin etkinleştirilip etkinleştirilmeyeceğine karar vermek için Discord’un kullandığı ayarları kullanıyoruz."
                }
            },
            option: {
                streamMedia: {
                    label: "Yayınlanacak Medya Kaynağı",
                    description: "Bulunamazsa ana ekrana sıfırlanır.",
                    loading: "Medya kaynakları yükleniyor...",
                    none: "Hiçbir medya kaynağı bulunamadı",
                    placeholder: "Yayınlamak için bir medya kaynağı seç"
                },
                includeVideoDevices: {
                    label: "Video Cihazlarını Dahil Et",
                    description: "Kaynak listesine video giriş cihazlarını (kameralar, yakalama kartları) dahil et"
                },
                autoMute: {
                    label: "Otomatik Sessize Al",
                    description: "Bir ses kanalına katıldığında mikrofonunu otomatik olarak sessize al"
                },
                autoDeafen: {
                    label: "Otomatik Sağırlaştır",
                    description: "Bir ses kanalına katıldığında otomatik olarak sağırlaştır (aynı zamanda seni de sessize alır)"
                },
                toolboxManagement: {
                    label: "Araç Kutusu Yönetimi",
                    description: "Anında Ekran Paylaşımını Etkinleştir/Devre Dışı Bırak"
                }
            },
            toolbox: {
                label: "Anında Ekran Paylaşımı",
                toast: "Anında Ekran Paylaşımı {{state}}",
                enabled: "Etkin",
                disabled: "Devre Dışı"
            }
        },
        invisibleChat: {
            name: "InvisibleChat",
            description: "Mesajlarını şüphe çekmeden şifrele!",
            option: {
                savedPasswords: {
                    label: "Kayıtlı Şifreler",
                    description: "Kayıtlı Şifreler (Virgülle ayrılmış şekilde)"
                }
            },
            button: {
                encrypt: "Mesajı Şifrele",
                decrypt: "Mesajı Deşifre Et",
                hidden: "Gizli Mesaj Göstergesi (InvisibleChat)"
            },
            tooltip: {
                hidden: "Bu mesajda gizli bir mesaj var! (InvisibleChat)"
            },
            embed: {
                title: "Deşifre Edilmiş Mesaj",
                footer: "InvisibleChat ile gönderildi"
            },
            modal: {
                encrypt: {
                    title: "Mesajı Şifrele",
                    secret: "Gizli Mesaj",
                    cover: "Kapak (2 veya daha fazla kelime!!)",
                    password: "Şifre",
                    dontUseCover: "Kapak Kullanma",
                    send: "Gönder",
                    cancel: "İptal"
                },
                decrypt: {
                    title: "Mesajı Deşifre Et",
                    with: "Şifreli Mesaj",
                    password: "Şifre",
                    decrypt: "Deşifre Et",
                    cancel: "İptal"
                }
            }
        },
        inviteDefaults: {
            name: "InviteDefaults",
            description: "Sunucu davetleri oluştururken varsayılan değerleri düzenlemenizi sağlar.",
            option: {
                inviteDuration: {
                    label: "Davet Süresi",
                    description: "Sunucu davetleri için varsayılan süre",
                    thirtyMinutes: "30 Dakika",
                    oneHour: "1 Saat",
                    sixHours: "6 Saat",
                    twelveHours: "12 Saat",
                    oneDay: "1 Gün",
                    sevenDays: "7 Gün",
                    forever: "Süresiz"
                },
                maxUses: {
                    label: "Maksimum Kullanım",
                    description: "Sunucu davetleri için varsayılan maksimum kullanım sayısı",
                    unlimited: "Sınırsız",
                    one: "1",
                    five: "5",
                    ten: "10",
                    twentyFive: "25",
                    fifty: "50",
                    oneHundred: "100"
                },
                temporaryMembership: {
                    label: "Geçici Üyelik",
                    description: "Sunucu davetleri için varsayılan geçici üyelik ayarı"
                }
            }
        },
        ircColors: {
            name: "IrcColors",
            description: "Sohbetteki kullanıcı adlarının renklerini IRC istemcilerindeki gibi benzersiz hale getirir.",
            option: {
                lightness: {
                    label: "Aydınlık",
                    description: "Aydınlık oranı (% cinsinden). Renkler çok açık veya koyu görünüyorsa değiştirin."
                },
                memberListColors: {
                    label: "Üye Listesi Renkleri",
                    description: "Üye listesindeki rol renklerini değiştir."
                },
                applyColorOnlyToUsersWithoutColor: {
                    label: "Sadece Rengi Olmayan Kullanıcılara Uygula",
                    description: "Rengi önceden tanımlanmamış kullanıcılara renk uygula."
                },
                applyColorOnlyInDms: {
                    label: "Sadece Özel Mesajlarda Uygula",
                    description: "Renkleri yalnızca özel mesajlarda uygula; sunucularda uygulama."
                }
            }
        },
        iRememberYou: {
            name: "IRememberYou",
            description: "İletişim kurduğun herkesi (sunucular dahil) yerel olarak kaydeder, kayıp durumuna karşı koruma sağlar.",
            section: {
                description: "Bahsettiğin, yanıtladığın, üyesi olduğun sunucuların sahipleri (sunucu sahibi*) veya bulunduğun sunuculardaki üyelerin listesini gösterir.",
                empty: "Şu anda boş.",
                tooltip: "{{user}}, {{updatedAtContent}} tarihinde güncellendi",
                owner: "Sunucu Sahibi"
            },
            modal: {
                title: "Düzenleyici",
                filter: "Etikete, kullanıcı adına veya ID’ye göre filtrele",
                button: {
                    validate: "Doğrula ve Kaydet",
                    cancel: "İptal",
                    openEditor: "Düzenleyiciyi Aç",
                    resetData: "Verileri Sıfırla",
                    sure: "Emin misin?"
                }
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Bir kanalın veya özel mesajın başına ya da sonuna atlamak için sağ tık menüsüne seçenekler ekler.",
            context: {
                top: "İlk Mesaja Git",
                bottom: "Son Mesaja Git"
            }
        },
        keepCurrentChannel: {
            name: "KeepCurrentChannel",
            description: "Hesap değiştirirken veya Discord yüklenirken bulunduğun kanala geri dönmeye çalışır."
        },
        keyboardSounds: {
            name: "KeyboardSounds",
            description: "Klavye ile yazarken OperaGX veya osu! ses efektleri ekler.",
            option: {
                volume: {
                    label: "Ses Seviyesi",
                    description: "Klavye seslerinin ses seviyesi"
                },
                soundPack: {
                    label: "Ses Paketi",
                    description: "Klavye sesleri için kullanılacak ses paketi",
                    operagx: "OperaGX",
                    osu: "osu!"
                }
            }
        },
        keywordNotify: {
            name: "KeywordNotify",
            description: "Belirli anahtar kelimeler veya regex ifadeleriyle eşleşen mesajlarda bildirim gönderir.",
            idHolder: "ID",
            keywordEntry: "Anahtar Kelime Girişi",
            regexHolder: "örnek|regex",
            ignoreCase: "Büyük/Küçük Harf Duyarsız",
            whiteblackLabel: "Beyaz Liste / Kara Liste",
            tab: {
                title: "Anahtar Kelimeler",
                clearAll: "Tümünü Temizle"
            },
            button: {
                addId: "ID Ekle",
                addKeyword: "Anahtar Kelime Girişi Ekle"
            },
            listTypeSelector: {
                blacklist: "Kara Liste",
                whitelist: "Beyaz Liste",
                placeholder: "Bir liste türü seçin"
            },
            option: {
                ignoreBots: {
                    label: "Botları Yoksay",
                    description: "Botlardan gelen mesajları yoksay"
                },
                amountToKeep: {
                    label: "Kaydedilecek Miktar",
                    description: "Günlükte tutulacak mesaj sayısı"
                },
                keywords: {
                    label: "Anahtar Kelimeler",
                    description: "Anahtar kelimeleri yönet"
                }
            }
        },
        lastOnline: {
            name: "LastOnline",
            description: "DM listende, sunucu ve grup DM üye listesinde kullanıcı adlarının altında son çevrimiçi olma göstergesi ekler.",
            unit: {
                d: "gün",
                h: "saat",
                m: "dakika"
            },
            online: "{{formattedTime}} önce çevrimiçiydi"
        },
        limitMiddleClickPaste: {
            name: "LimitMiddleClickPaste",
            description: "Orta tıklama ile otomatik kaydırma kullananlar için, istenmeyen yapıştırma işlemlerini engeller.",
            option: {
                limitTo: {
                    label: "Sınırlama",
                    description: "Orta tıklama ile yapıştırmaya izin ver:",
                    never: "Asla",
                    direct: "Sadece bir metin kutusuna tıklanırken",
                    active: "Bir metin kutusu aktifken"
                },
                reenableDelay: {
                    label: "Yeniden Etkinleştirme Gecikmesi",
                    description: "Orta tıklamadan sonra genel yapıştırma olaylarının yeniden etkinleştirilmesi için milisaniye cinsinden süre."
                }
            }
        },
        listenBrainzRPC: {
            name: "ListenBrainzRPC",
            description: "ListenBrainz rich presence için küçük bir eklenti.",
            about: {
                title: "MusicBrainz API Hakkında",
                description: "MusicBrainz API bir API anahtarı gerektirmez, ancak bir {{link}} gerektirir. Çoğu kullanıcı için bir e-posta adresi yeterlidir.",
                userAgent: "anlamlı bir kullanıcı aracısı (user-agent) dizesi"
            },
            option: {
                username: {
                    label: "Kullanıcı Adı",
                    description: "ListenBrainz kullanıcı adı"
                },
                mbContact: {
                    label: "MB İletişim",
                    description: "ListenBrainz iletişim bilgisi"
                },
                shareUsername: {
                    label: "Kullanıcı Adını Paylaş",
                    description: "ListenBrainz profil bağlantısını göster (yalnızca diğer kullanıcılar görebilir)"
                },
                shareSong: {
                    label: "Şarkıyı Paylaş",
                    description: "ListenBrainz üzerindeki mevcut şarkıya bağlantı göster (yalnızca diğer kullanıcılar görebilir)"
                },
                hideWithSpotify: {
                    label: "Spotify Aktifken Gizle",
                    description: "Spotify çalışıyorsa ListenBrainz durumunu gizle"
                },
                hideWithActivity: {
                    label: "Başka Etkinlik Varsa Gizle",
                    description: "Başka bir durumun varsa ListenBrainz durumunu gizle"
                },
                useTimeBar: {
                    label: "Zaman Çubuğu Kullan",
                    description: "Parça süresini zaman çubuğu olarak göster (Dinleme durumu kullanılmalıdır)"
                },
                statusName: {
                    label: "Durum Adı",
                    description: "Özel durum metni"
                },
                nameFormat: {
                    label: "İsim Biçimi",
                    description: "Durum adında şarkı ve sanatçı adını gösterme biçimi",
                    custom: "Özel durum metni kullan",
                    artistSong: "'sanatçı - şarkı' biçimini kullan",
                    songArtist: "'şarkı - sanatçı' biçimini kullan",
                    artistOnly: "Sadece sanatçı adını kullan",
                    songOnly: "Sadece şarkı adını kullan",
                    albumName: "Albüm adını kullan (şarkının albümü yoksa özel durum metnine geri döner)"
                },
                useListeningStatus: {
                    label: "Dinliyor Durumunu Kullan",
                    description: "'Oynatıyor' yerine 'Dinliyor' durumunu göster"
                },
                missingArt: {
                    label: "Eksik Kapak Görseli",
                    description: "Albüm veya albüm kapağı eksik olduğunda",
                    listenbrainzLogo: "Büyük ListenBrainz logosunu kullan",
                    generic: "Genel bir yer tutucu kullan"
                },
                useLogo: {
                    label: "Logo Kullan",
                    description: "Albüm kapağında ListenBrainz logosunu göster"
                }
            }
        },
        loadingQuotes: {
            name: "LoadingQuotes",
            description: "Discord'un yükleme alıntılarını değiştirir",
            option: {
                replaceEvents: {
                    label: "Etkinlikleri Değiştir",
                    description: "Bu eklenti özel etkinlik temalı alıntıları olan etkinlikler sırasında da uygulanmalı mı? (örn. Cadılar Bayramı)"
                },
                enablePluginPresetQuotes: {
                    label: "Eklenti Hazır Alıntılarını Etkinleştir",
                    description: "Bu eklenti tarafından hazırlanan alıntıları etkinleştir"
                },
                enableDiscordPresetQuotes: {
                    label: "Discord Hazır Alıntılarını Etkinleştir",
                    description: "Discord'un hazır alıntılarını etkinleştir (etkinlik alıntıları dahil, etkinlikler sırasında)"
                },
                additionalQuotes: {
                    label: "Ek Alıntılar",
                    description: "Görünebilecek ek özel alıntılar, aşağıdaki ayırıcı ile ayrılmış"
                },
                additionalQuotesDelimiter: {
                    label: "Ek Alıntılar Ayırıcısı",
                    description: "Ek alıntılar için ayırıcı"
                }
            }
        },
        loginWithQR: {
            name: "LoginWithQR",
            description: "Tıpkı mobilde olduğu gibi, giriş QR kodunu tarayarak başka bir cihaza giriş yapmanı sağlar!",
            option: {
                scanQr: {
                    label: "QR Kodunu Tara",
                    description: "Bir QR kodunu tara",
                    notEnabled: "Bir giriş QR kodunu taramak için eklentiyi etkinleştir ve istemcini yeniden başlat"
                }
            },
            neverScan: "Başka bir kullanıcıdan veya uygulamadan gelen giriş QR kodunu asla tarama.",
            hold: "Girişi onaylamak için basılı tut",
            scanning: "Taranıyor...",
            stopScanning: "Taramayı Durdur",
            usingWebcam: "Web kamerası kullanarak tara",
            dragDrop: "Bir resmi buraya sürükleyip bırak ya da bir resim seçmek için tıkla",
            orPaste: "Veya panodan bir resim yapıştır!"
        },
        mediaPlaybackSpeed: {
            name: "MediaPlaybackSpeed",
            description: "Medya gömülerinin (varsayılan) oynatma hızını değiştirmenizi sağlar.",
            playbackSpeed: "Oynatma Hızı",
            context: {
                label: "Oynatma hızı kontrolü"
            },
            option: {
                defaultVoiceMessageSpeed: {
                    label: "Varsayılan Sesli Mesaj Hızı",
                    description: "Sesli mesajlar"
                },
                defaultVideoSpeed: {
                    label: "Varsayılan Video Hızı",
                    description: "Videolar"
                },
                defaultAudioSpeed: {
                    label: "Varsayılan Ses Hızı",
                    description: "Ses dosyaları"
                }
            }
        },
        memberCount: {
            name: "MemberCount",
            description: "Sunucuda çevrimiçi üyelerin, toplam üyelerin ve sesli kanallardaki kullanıcıların sayısını — üye listesinde ve araç ipucunda gösterir.",
            option: {
                toolTip: {
                    label: "Araç İpucu",
                    description: "Sunucu araç ipucunda üye sayısını göster"
                },
                memberList: {
                    label: "Üye Listesi",
                    description: "Üye listesinin üst kısmında üye sayısını göster"
                },
                voiceActivity: {
                    label: "Sesli Aktivite",
                    description: "Sesli kanallardaki kullanıcı sayısını göster"
                }
            },
            onlineThisChannel: "{{formattedOnlineCount}} bu kanalda çevrimiçi",
            totalMembers: "{{formattedTotalCount}} sunucudaki toplam üye",
            totalVoice: "{{formattedVoiceCount}} sesli kanallarda üye"
        },
        mentionAvatars: {
            name: "MentionAvatars",
            description: "Bahsetmeler içinde kullanıcı avatarlarını ve rol simgelerini gösterir.",
            option: {
                showAtSymbol: {
                    label: "@ Simgesini Göster",
                    description: "Kullanıcı bahsetmelerinde @ simgesinin gösterilip gösterilmeyeceğini belirler."
                }
            }
        },
        meow: {
            name: "Meow",
            description: "Sohbet çubuğuna, sohbette miyavlamak için bir düğme ekler.",
            button: {
                meow: "Miyav"
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Backspace tuşunu basılı tutup tıklayarak silmeyi, çift tıklayarak düzenleme veya yanıtlamayı sağlar.",
            option: {
                enableDeleteOnClick: {
                    label: "Tıklamayla Silmeyi Etkinleştir",
                    description: "Backspace tuşunu basılı tutarken tıklamayla silmeyi etkinleştir"
                },
                enableDoubleClickToEdit: {
                    label: "Çift Tıklamayla Düzenlemeyi Etkinleştir",
                    description: "Çift tıklamayla düzenlemeyi etkinleştir"
                },
                enableDoubleClickToReply: {
                    label: "Çift Tıklamayla Yanıtlamayı Etkinleştir",
                    description: "Çift tıklamayla yanıtlamayı etkinleştir"
                },
                requireModifier: {
                    label: "Değiştirici Tuş Gerekli",
                    description: "Yalnızca shift/ctrl tuşu basılıyken çift tıklama eylemlerini gerçekleştir"
                }
            }
        },
        messageColors: {
            name: "MessageColors",
            description: "Mesajlarda #FF0042 gibi renk kodlarını gösterir.",
            option: {
                renderType: {
                    label: "Görselleştirme Türü",
                    description: "Renklerin nasıl görüntüleneceğini belirler",
                    textColor: "Metin rengi",
                    block: "Yanında blok",
                    backgroundColor: "Arka plan rengi"
                },
                enableShortHexCodes: {
                    label: "Kısa Hex Kodlarını Etkinleştir",
                    description: "#39f gibi 3 karakterli hex kodlarını etkinleştir"
                },
                blockView: {
                    label: "Blok Görünüm Türü",
                    description: "Renk bloklarının nasıl görüntüleneceğini belirler",
                    right: "Sağ taraf",
                    left: "Sol taraf",
                    both: "Her iki taraf"
                }
            }
        },
        messageFetchTimer: {
            name: "MessageFetchTimer",
            description: "Geçerli kanalın mesajlarının ne kadar sürede yüklendiğini gösterir.",
            option: {
                showIcon: {
                    label: "Simgeyi Göster",
                    description: "Mesaj çubuğunda yükleme süresi simgesini göster"
                },
                showMs: {
                    label: "Milisaniyeleri Göster",
                    description: "Zamanlamada milisaniyeleri göster"
                },
                iconColor: {
                    label: "Simge Rengi",
                    description: "Simge rengi (CSS renk değeri)"
                }
            },
            loaded: "Mesajlar {{time}}ms içinde yüklendi ({{timeAgo}})",
            day: "gün önce",
            hour: "saat önce",
            minute: "dakika önce",
            justNow: "şimdi"
        },
        messageLatency: {
            name: "MessageLatency",
            description: "Gönderilmesi ≥n saniye süren mesajlar için bir gösterge ekler.",
            day: "gün",
            days: "gün",
            hour: "saat",
            hours: "saat",
            minute: "dakika",
            minutes: "dakika",
            second: "saniye",
            seconds: "saniye",
            millisecond: "milisaniye",
            milliseconds: "milisaniye",
            and: "ve",
            oldKotlinDetected: "Kullanıcının eski bir Discord Android istemcisi kullandığından şüpheleniliyor.",
            ahead: "Bu kullanıcının saati {{delta}} ileri.",
            delay: "Bu mesaj {{delta}} gecikmeyle gönderildi.",
            delayedMessage: "Gecikmeli Mesaj",
            oldAndroidClient: "Eski Discord Android istemcisi",
            option: {
                latency: {
                    label: "Gecikme",
                    description: "Gecikme göstergesi için saniye cinsinden eşik değeri"
                },
                detectDiscordKotlin: {
                    label: "Discord Kotlin'i Algıla",
                    description: "Eski Discord Android istemcilerini algıla"
                },
                showMillis: {
                    label: "Milisaniyeleri Göster",
                    description: "Milisaniyeleri göster"
                },
                ignoreSelf: {
                    label: "Kendimi Yoksay",
                    description: "Kendi mesajlarına gösterge ekleme"
                }
            }
        },
        messageLinkEmbeds: {
            name: "MessageLinkEmbeds",
            description: "Başka bir mesaja bağlantı içeren mesajlara bir önizleme ekler.",
            option: {
                messageBackgroundColor: {
                    label: "Mesaj Arka Plan Rengi",
                    description: "Zengin yerleştirmelerdeki mesajlar için arka plan rengi"
                },
                automodEmbeds: {
                    label: "Automod Gömüleri",
                    description: "Zengin yerleştirmeler yerine automod gömülerini kullan (daha küçük ama daha az bilgi içerir)",
                    always: "Her zaman automod gömülerini kullan",
                    prefer: "Automod gömülerini tercih et, ancak bazı içerikler gösterilemiyorsa zengin yerleştirmeleri kullan",
                    never: "Asla automod gömülerini kullanma"
                },
                listMode: {
                    label: "Liste Modu",
                    description: "ID listesinin kara liste mi yoksa beyaz liste mi olarak kullanılacağını belirle",
                    blacklist: "Kara Liste",
                    whitelist: "Beyaz Liste"
                },
                idList: {
                    label: "ID Listesi",
                    description: "Kara listeye veya beyaz listeye eklenecek sunucu/kanal/kullanıcı ID’leri (virgülle ayır)"
                },
                clearMessageCache: {
                    label: "Mesaj Önbelleğini Temizle",
                    description: "Bağlantılı mesaj önbelleğini temizle"
                }
            },
            noContent: {
                noAttachments: "içerik yok {{count}} gömülü mesaj",
                noEmbeds: "içerik yok {{count}} ek",
                both: "içerik yok, {{attachments}} ek ve {{embeds}} gömülü mesaj"
            },
            dm: "Özel Mesaj",
            groupDm: "Grup Mesajı",
            server: "Sunucu"
        },
        messageLinkTooltip: {
            name: "MessageLinkTooltip",
            description: "MessageLinkEmbed gibi ama yer kaplamadan çalışır.",
            loading: "Yükleniyor...",
            option: {
                onLink: {
                    label: "Bağlantı Üzerinde",
                    description: "Mesaj bağlantılarının üzerine gelindiğinde araç ipucunu göster"
                },
                onReply: {
                    label: "Yanıt Üzerinde",
                    description: "Mesaj yanıtlarının üzerine gelindiğinde araç ipucunu göster"
                },
                onForward: {
                    label: "İletilen Mesaj Üzerinde",
                    description: "İletilen mesajların üzerine gelindiğinde araç ipucunu göster"
                },
                display: {
                    label: "Görünüm",
                    description: "Görünüm stili",
                    auto: "Mesaj ile aynı",
                    compact: "Kompakt",
                    cozy: "Rahat"
                }
            }
        },
        messageLogger: {
            name: "MessageLogger",
            description: "Silinen ve düzenlenen mesajları geçici olarak kaydeder.",
            removeMessage: "Mesaj Geçmişini Kaldır",
            removeMessageTemporary: "Mesajı Kaldır (Geçici)",
            clearMessageLog: "Mesaj Günlüğünü Temizle",
            modal: {
                edit: {
                    title: "Mesaj Düzenleme Geçmişi",
                    tooltip: "Bu düzenleme durumu kaydedilmediği için görüntülenemiyor."
                }
            },
            option: {
                deleteStyle: {
                    label: "Silme Stili",
                    description: "Silinen mesajların görünüm stili",
                    text: "Kırmızı metin",
                    overlay: "Kırmızı kaplama"
                },
                logDeletes: {
                    label: "Silinenleri Kaydet",
                    description: "Silinen mesajların kaydedilip kaydedilmeyeceğini belirler"
                },
                collapseDeleted: {
                    label: "Silinenleri Daralt",
                    description: "Silinen mesajları, engellenen mesajlara benzer şekilde daralt"
                },
                logEdits: {
                    label: "Düzenlenenleri Kaydet",
                    description: "Düzenlenen mesajların kaydedilip kaydedilmeyeceğini belirler"
                },
                inlineEdits: {
                    label: "Satır İçi Düzenlemeler",
                    description: "Düzenleme geçmişini mesaj içeriğinin bir parçası olarak göster"
                },
                ignoreBots: {
                    label: "Botları Yoksay",
                    description: "Botlar tarafından gönderilen mesajları yoksay"
                },
                ignoreSelf: {
                    label: "Kendimi Yoksay",
                    description: "Kendi mesajlarını yoksay"
                },
                ignoreUsers: {
                    label: "Kullanıcıları Yoksay",
                    description: "Yoksayılacak kullanıcı kimliklerinin virgülle ayrılmış listesi"
                },
                ignoreChannels: {
                    label: "Kanalları Yoksay",
                    description: "Yoksayılacak kanal kimliklerinin virgülle ayrılmış listesi"
                },
                ignoreGuilds: {
                    label: "Sunucuları Yoksay",
                    description: "Yoksayılacak sunucu kimliklerinin virgülle ayrılmış listesi"
                },
                showEditDiffs: {
                    label: "Düzenleme Farklarını Göster",
                    description: "Düzenlenmiş mesaj sürümleri arasındaki farkları göster"
                },
                separatedDiffs: {
                    label: "Ayrılmış Farklar",
                    description: "Farklarda eklemeleri ve silmeleri ayrı göstererek daha okunabilir bir görünüm sağlar"
                }
            }
        },
        messageLoggerEnhanced: {
            name: "MessageLoggerEnhanced",
            description: "MessageLogger eklentisini ek özelliklerle geliştirir.",
            updateImageCacheDir: "Görsel önbellek dizini başarıyla güncellendi.",
            updateLogsDir: "Günlükler dizini başarıyla güncellendi.",
            failedUpdate: "Dizin güncellenemedi.",
            blacklist: "Kara Liste",
            whitelist: "Beyaz Liste",
            failedToRemove: "Mesaj kaldırılamadı",
            successfullyImported: "Günlükler başarıyla içe aktarıldı.",
            errorImportingLogs: "Günlükler içe aktarılırken bir hata oluştu. Daha fazla bilgi için konsolu kontrol edin.",
            alert: {
                clearLogs: {
                    title: "Günlükleri Temizle",
                    body: "Tüm günlükleri temizlemek istediğinizden emin misiniz?",
                    confirmText: "Temizle",
                    cancel: "İptal"
                },
                clearVisibleLogs: {
                    title: "Görünür Günlükleri Temizle",
                    body: "{{messages}} günlükleri temizlemek istediğinizden emin misiniz?",
                    confirmText: "Temizle",
                    cancel: "İptal"
                }
            },
            context: {
                title: "Mesaj Günlüğü",
                jumpToMessage: "Mesaja Git",
                openUserProfile: "Kullanıcı Profilini Aç",
                copyContent: "İçeriği Kopyala",
                copyUserId: "Kullanıcı Kimliğini Kopyala",
                copyMessageId: "Mesaj Kimliğini Kopyala",
                copyChannelId: "Kanal Kimliğini Kopyala",
                copyServerId: "Sunucu Kimliğini Kopyala",
                deleteLog: "Günlüğü Sil",
                fromUsernameDm: "{{username}} adlı kullanıcının DM'lerinden",
                fromGroupDm: "{{channelName}} grup DM'sinden",
                fromServerChannel: "{{serverName}} sunucusundaki {{channelName}} kanalından",
                moveTypeTo: "{{type}} öğesini {{destination}}'ye taşı",
                removeTypeFrom: "{{type}} öğesini {{list}}'den kaldır",
                openLogsFor: "{{name}} için Günlükleri Aç",
                openLogs: "Günlükleri Aç",
                removeMessage: "Mesajı Kaldır (Kalıcı)",
                removeMessageHistory: "Mesaj Geçmişini Kaldır (Kalıcı)",
                deleteMessageHide: "Mesajı Sil (Mesaj Günlükçülerinden Gizle)",
                addServerToBlacklist: "Sunucuyu Kara Listeye Ekle",
                addServerToWhitelist: "Sunucuyu Beyaz Listeye Ekle",
                removeServerFromBlacklist: "Sunucuyu Kara Listeden Kaldır",
                removeServerFromWhitelist: "Sunucuyu Beyaz Listeden Kaldır",
                moveServerToBlacklist: "Sunucuyu Kara Listeye Taşı",
                moveServerToWhitelist: "Sunucuyu Beyaz Listeye Taşı",
                addUserToBlacklist: "Kullanıcıyı Kara Listeye Ekle",
                addUserToWhitelist: "Kullanıcıyı Beyaz Listeye Ekle",
                removeUserFromBlacklist: "Kullanıcıyı Kara Listeden Kaldır",
                removeUserFromWhitelist: "Kullanıcıyı Beyaz Listeden Kaldır",
                moveUserToBlacklist: "Kullanıcıyı Kara Listeye Taşı",
                moveUserToWhitelist: "Kullanıcıyı Beyaz Listeye Taşı",
                addChannelToBlacklist: "Kanalı Kara Listeye Ekle",
                addChannelToWhitelist: "Kanalı Beyaz Listeye Ekle",
                removeChannelFromBlacklist: "Kanalı Kara Listeden Kaldır",
                removeChannelFromWhitelist: "Kanalı Beyaz Listeden Kaldır",
                moveChannelToBlacklist: "Kanalı Kara Listeye Taşı",
                moveChannelToWhitelist: "Kanalı Beyaz Listeye Taşı"
            },
            type: {
                server: "Sunucu",
                user: "Kullanıcı",
                channel: "Kanal"
            },
            button: {
                chooseFolder: "Klasör Seç",
                browse: "Gözat",
                clearLogs: "Tüm Günlükleri Temizle",
                clearVisibleLogs: "Görünür Günlükleri Temizle",
                sortOldest: "Eskiden Yeniye Sırala",
                sortNewest: "Yeniden Eskiye Sırala",
                loadMore: "Daha Fazla Yükle",
                noResults: "{{tab}} sekmesinde sonuç yok",
                tryOtherTabs: "{{nextTab}} veya {{lastTab}} sekmelerini dene",
                importLogs: "Günlükleri İçe Aktar"
            },
            modal: {
                title: "Mesajları Filtrele",
                deleted: "Silinmiş",
                edited: "Düzenlenmiş",
                ghostPing: "Görünmez Ping",
                empty: "Boş, huh",
                importLogs: "ML Enhanced artık günlükleri IndexedDB'ye kaydediyor. Eski günlüklerinizi günlük dizininden içe aktarmanız gerekiyor. İçe aktarma mevcut günlükleri değiştirmez."
            },
            clear: {
                title: "Günlükleri Temizle",
                description: "Tüm günlükleri temizlemek istediğinizden emin misiniz?",
                confirm: "Temizle",
                cancel: "İptal"
            },
            option: {
                saveMessages: {
                    label: "Mesajları Kaydet",
                    description: "Silinen ve düzenlenen mesajların kaydedilip kaydedilmeyeceğini belirler."
                },
                saveImages: {
                    label: "Görselleri Kaydet",
                    description: "Silinen ekleri kaydet."
                },
                sortNewest: {
                    label: "Yeniden Eskiye Sırala",
                    description: "Günlükleri en yeniye göre sırala."
                },
                cacheMessagesFromServers: {
                    label: "Sunuculardan Mesajları Önbelleğe Al",
                    description: "Genellikle günlükleyici yalnızca beyaz listedeki kimlikleri ve DM'leri kaydeder, bu seçeneği etkinleştirmek tüm sunuculardaki mesajları da kaydeder. Ancak bu önbellek sınırını aşabilir ve bazı mesajların atlanmasına neden olabilir."
                },
                ignoreBots: {
                    label: "Botları Yoksay",
                    description: "Bot mesajlarını yoksay."
                },
                ignoreWebhooks: {
                    label: "Webhookları Yoksay",
                    description: "Webhook mesajlarını yoksay."
                },
                ignoreSelf: {
                    label: "Kendimi Yoksay",
                    description: "Kendi mesajlarını yoksay."
                },
                ignoreMutedGuilds: {
                    label: "Sessize Alınmış Sunucuları Yoksay",
                    description: "Sessize alınmış sunuculardaki mesajlar kaydedilmez. Ancak beyaz listedeki kullanıcılar/kanallar yine de kaydedilir."
                },
                ignoreMutedCategories: {
                    label: "Sessize Alınmış Kategorileri Yoksay",
                    description: "Sessize alınmış kategorilere ait kanallardaki mesajlar kaydedilmez."
                },
                ignoreMutedChannels: {
                    label: "Sessize Alınmış Kanalları Yoksay",
                    description: "Sessize alınmış kanallardaki mesajlar kaydedilmez."
                },
                alwaysLogDirectMessages: {
                    label: "DM'leri Her Zaman Kaydet",
                    description: "Doğrudan mesajları her zaman kaydet."
                },
                alwaysLogCurrentChannel: {
                    label: "Geçerli Kanalı Her Zaman Kaydet",
                    description: "Geçerli kanalı her zaman kaydeder. Kara listedeki kanallar/kullanıcılar hariç tutulur."
                },
                hideMessageFromMessageLoggers: {
                    label: "Mesajı Günlükleyicilerden Gizle",
                    description: "Etkinleştirildiğinde, mesajları diğer günlükleyicilerden gizlemek için bir bağlam menüsü seçeneği ekler. Güvenli olmayabilir, kendi sorumluluğunuzda kullanın."
                },
                showLogsButton: {
                    label: "Günlük Butonunu Göster",
                    description: "Araç çubuğunun gösterilip gösterilmeyeceğini değiştirir."
                },
                showWhereMessageIsFrom: {
                    label: "Mesajın Kaynağını Göster",
                    description: "Mesajın kanalını/yazan kişiyi ve sunucu adını göster."
                },
                messagesToDisplayAtOnceInLogs: {
                    label: "Günlüklerde Aynı Anda Gösterilecek Mesaj Sayısı",
                    description: "Günlüklerde bir seferde gösterilecek mesaj sayısını ve daha fazla mesaj yüklendiğinde eklenecek miktarı belirler."
                },
                hideMessageFromMessageLoggersDeletedMessage: {
                    label: "Mesaj Günlükleyicilerinden Gizlenen Mesaj İçeriği",
                    description: "Mesaj günlükleyicilerden gizleme özelliği kullanıldığında mesajın yerine geçecek içerik."
                },
                messageLimit: {
                    label: "Mesaj Sınırı",
                    description: "Kaydedilecek maksimum mesaj sayısı. Limit aşıldığında eski mesajlar silinir. 0 = limitsiz."
                },
                attachmentSizeLimitInMegabytes: {
                    label: "Ek Boyut Sınırı (MB)",
                    description: "Kaydedilecek eklerin maksimum boyutu (MB cinsinden). Bu değerden büyük ekler kaydedilmez."
                },
                attachmentFileExtensions: {
                    label: "Ek Dosya Uzantıları",
                    description: "Kaydedilecek dosya uzantılarının virgülle ayrılmış listesi. Boş bırakılırsa tüm ekler kaydedilir."
                },
                cacheLimit: {
                    label: "Önbellek Sınırı",
                    description: "Önbellekte tutulacak maksimum mesaj sayısı. Limit aşıldığında eski mesajlar silinir."
                },
                whitelistedIds: {
                    label: "Beyaz Liste Kimlikleri",
                    description: "Beyaz listedeki sunucu, kanal veya kullanıcı kimlikleri."
                },
                blacklistedIds: {
                    label: "Kara Liste Kimlikleri",
                    description: "Kara listedeki sunucu, kanal veya kullanıcı kimlikleri."
                },
                imageCacheDir: {
                    label: "Görsel Önbellek Dizini",
                    description: "Kaydedilen görsellerin dizinini seçin."
                },
                logsDir: {
                    label: "Günlük Dizini",
                    description: "Günlüklerin kaydedileceği dizini seçin."
                },
                importLogs: {
                    label: "Günlükleri İçe Aktar",
                    description: "Dosyadan günlükleri içe aktar."
                },
                exportLogs: {
                    label: "Günlükleri Dışa Aktar",
                    description: "Günlükleri IndexedDB'den dışa aktar."
                },
                openLogs: {
                    label: "Günlükleri Aç",
                    description: "Günlükleri aç."
                },
                openImageCacheFolder: {
                    label: "Görsel Önbellek Klasörünü Aç",
                    description: "Görsel önbellek dizinini açar."
                },
                clearLogs: {
                    label: "Günlükleri Temizle",
                    description: "Günlükleri temizle.",
                    title: "Günlükleri Temizle",
                    body: "Tüm günlükleri temizlemek istediğinizden emin misiniz?",
                    confirmText: "Temizle",
                    cancel: "İptal"
                }
            }
        },
        messageTags: {
            name: "MessageTags",
            description: "Mesajları kaydetmenizi ve basit bir komutla kullanmanızı sağlar.",
            notExist: "**{{tagname}}** etiketi artık mevcut değil! Düzeltmek için Discord’u yeniden başlatın :)",
            alreadyExist: "**{{tagname}}** adlı bir etiket zaten var!",
            sentTag: "**{{tagname}}** etiketi gönderildi!",
            successCreate: "**{{tagname}}** etiketi başarıyla oluşturuldu!",
            allTags: "Tüm etiketlerin:",
            noTags: "Ups! Henüz hiç etiket yok, oluşturmak için /tag create komutunu kullan!",
            noDeleteTag: "**{{tagname}}** adlı bir etiket bulunamadı, bu yüzden silinemiyor!",
            successDelete: "**{{name}}** etiketi başarıyla silindi!",
            tagPreview: "**{{name}}** adlı bir etiket mevcut değil!",
            option: {
                clyde: {
                    label: "Gönderimde Clyde mesajı",
                    description: "Etkinleştirildiğinde, bir etiket kullanıldığında Clyde sana geçici bir mesaj gönderir."
                },
                tagsList: {
                    label: "Etiket Listesi",
                    description: ""
                }
            },
            command: {
                tags: {
                    description: "Kendi etiketlerini yönet",
                    option: {
                        create: {
                            description: "Yeni bir etiket oluştur",
                            name: "Yanıtı tetikleyecek etiketin adı",
                            message: "Bu etiketi kullandığında gönderilecek mesaj"
                        },
                        list: {
                            description: "Tüm etiketlerini listele"
                        },
                        delete: {
                            description: "Bir etiketi sil",
                            name: "Silinecek etiketin adı"
                        },
                        preview: {
                            description: "Bir etiketi herkese açık göndermeden önizle",
                            name: "Önizlenecek etiketin adı"
                        }
                    }
                }
            }
        },
        moreCommands: {
            name: "MoreCommands",
            description: "Echo, Lenny, Mock ve daha fazlası",
            command: {
                echo: {
                    description: "Bir mesajı Clyde olarak (yerel) gönderir"
                },
                lenny: {
                    description: "Bir Lenny yüzü gönderir"
                },
                mock: {
                    description: "İnsanlarla dalga geçer (mOcK PeOpLe)"
                },
                wordcount: {
                    description: "Bir mesajdaki kelime sayısını hesaplar",
                    response: "Mesaj {{count}} kelime içeriyor."
                },
                flipcoin: {
                    description: "Yazı-tura atar ve sonucu döndürür",
                    heads: "Yazı",
                    tails: "Tura",
                    response: "Para {{result}} geldi."
                },
                ask: {
                    description: "Evet/hayır sorusu sorar ve cevap verir",
                    yes: "Evet",
                    no: "Hayır",
                    maybe: "Belki",
                    askAgain: "Daha sonra tekrar sor",
                    definitelyNot: "Kesinlikle hayır",
                    itIsCertain: "Kesinlikle evet"
                },
                randomanimal: {
                    description: "Rastgele bir hayvan resmi getirir",
                    animal: "hayvanını seç",
                    cat: "kedi",
                    dog: "köpek",
                    response: "Üzgünüm, şu anda hayvan resmi alınamadı"
                },
                randomnumber: {
                    description: "İki değer arasında rastgele bir sayı üretir",
                    min: "Minimum değer",
                    max: "Maksimum değer",
                    response: "{{min}} ile {{max}} arasında rastgele sayı: {{number}}"
                },
                choose: {
                    description: "Verilen seçenekler arasından rastgele birini seçer",
                    option: "Virgülle ayrılmış seçenek listesi",
                    response: "Seçimim: {{choice}}"
                },
                systeminfo: {
                    description: "Sistem bilgilerini gösterir",
                    platform: "Platform",
                    deviceType: "Cihaz Türü",
                    mobile: "Mobil",
                    desktop: "Masaüstü",
                    browser: "Tarayıcı",
                    cpuCores: "CPU Çekirdekleri",
                    memory: "Bellek",
                    screen: "Ekran",
                    languages: "Dil",
                    network: "Ağ",
                    online: "Çevrimiçi",
                    offline: "Çevrimdışı",
                    failedToFetch: "Sistem bilgileri alınamadı",
                    unknown: "Bilinmiyor"
                },
                getuptime: {
                    description: "İstemcinin çalışma süresini gösterir",
                    response: "**İstemci Çalışma Süresi**: {{uptime}} dakika"
                },
                gettime: {
                    description: "Geçerli zamanı gösterir",
                    response: "Şu anki saat: {{time}}"
                },
                transform: {
                    description: "Metnini belirtilen seçeneğe göre dönüştürür",
                    transformation: {
                        description: "Metne uygulanacak dönüştürme türü",
                        lowercase: "Metni küçük harfe çevir",
                        uppercase: "Metni büyük harfe çevir",
                        localeLowercase: "Metni yerel küçük harfe çevir",
                        localeUppercase: "Metni yerel büyük harfe çevir",
                        same: "Aynı bırak"
                    },
                    repeat: "Kaç kez tekrarlanacağı",
                    reverse: "Metnin ters çevrilip çevrilmeyeceği",
                    normalize: {
                        description: "Metin normalizasyon biçimi",
                        nfc: "Normalizasyon Biçimi C (NFC)",
                        nfd: "Normalizasyon Biçimi D (NFD)",
                        nfkc: "Normalizasyon Biçimi KC (NFKC)",
                        nfkd: "Normalizasyon Biçimi KD (NFKD)"
                    },
                    text: "Dönüştürülecek metin"
                }
            }
        },
        moreKaomoji: {
            name: "MoreKaomoji",
            description: "Discord'a daha fazla Kaomoji ekler. ヽ(´▽`)/"
        },
        morse: {
            name: "Morse",
            description: "Mors koduna çeviri yapmak veya mors kodundan çevirmek için bir komut.",
            command: {
                morse: {
                    description: "Mors koduna veya mors kodundan çeviri yapar",
                    message: "Dönüştürülecek metin"
                }
            }
        },
        moyai: {
            name: "Moyai",
            description: "🗿🗿🗿🗿🗿🗿🗿🗿",
            option: {
                volume: {
                    label: "Ses Düzeyi",
                    description: "🗿🗿🗿 ses düzeyi"
                },
                quality: {
                    label: "Kalite",
                    description: "🗿🗿🗿 kalitesi",
                    normal: "Normal",
                    hd: "HD"
                },
                triggerWhenUnfocused: {
                    label: "Odak Dışındayken Tetikle",
                    description: "Pencere odakta olmasa bile 🗿 tetikle"
                },
                ignoreBots: {
                    label: "Botları Yoksay",
                    description: "Botlardan gelen mesajları yoksay"
                },
                ignoreBlocked: {
                    label: "Engellenen Kullanıcıları Yoksay",
                    description: "Engellenen kullanıcılardan gelen mesajları yoksay"
                }
            }
        },
        musicControls: {
            name: "MusicControls",
            description: "Birden fazla servis için Müzik Kontrolleri ve Şarkı Sözleri",
            option: {
                SpotifySectionTitle: {
                    label: "Spotify"
                },
                showSpotifyControls: {
                    label: "Spotify Kontrollerini Göster",
                    description: "Spotify için müzik kontrollerini göster"
                },
                showSpotifyLyrics: {
                    label: "Spotify Şarkı Sözlerini Göster",
                    description: "Spotify için şarkı sözlerini göster"
                },
                useSpotifyUris: {
                    label: "Spotify URI'larını Kullan",
                    description: "Spotify URL'leri yerine URI'larını açar. Yalnızca Spotify yüklüyse çalışır ve her platformda çalışmayabilir"
                },
                previousButtonRestartsTrack: {
                    label: "Önceki Tuşu Şarkıyı Yeniden Başlatsın",
                    description: "Oynatma süresi 3 saniyeden fazlaysa önceki tuşuna basıldığında mevcut şarkıyı baştan başlatır"
                },
                TidalSectionTitle: {
                    label: "Tidal"
                },
                showTidalControls: {
                    label: "Tidal Kontrollerini Göster",
                    description: "Tidal için müzik kontrollerini göster"
                },
                showTidalLyrics: {
                    label: "Tidal Şarkı Sözlerini Göster",
                    description: "Tidal için şarkı sözlerini göster"
                },
                YtmSectionTitle: {
                    label: "YouTube Music"
                },
                showYoutubeMusicControls: {
                    label: "YouTube Music Kontrollerini Göster",
                    description: "YouTube Music için müzik kontrollerini göster"
                },
                YoutubeMusicApiUrl: {
                    label: "YouTube Music API URL'si",
                    description: "Kullandığınız YouTube Music API sunucusunun URL'si"
                },
                hoverControls: {
                    label: "Üzerine Gelince Kontroller",
                    description: "Fareyle üzerine gelince kontrolleri göster"
                },
                ShowMusicNoteOnNoLyrics: {
                    label: "Şarkı Sözü Yoksa Nota Göster",
                    description: "Şarkı sözü bulunamadığında nota simgesi göster"
                },
                LyricsPosition: {
                    label: "Şarkı Sözü Konumu",
                    description: "Şarkı sözü panelinin konumu",
                    above: "Oynatıcı(lar)ın Üstünde",
                    below: "Oynatıcı(lar)ın Altında"
                },
                LyricsProvider: {
                    label: "Şarkı Sözü Sağlayıcısı",
                    description: "Şarkı sözlerinin alındığı kaynak",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                TranslateTo: {
                    label: "Diline Çevir",
                    description: "Şarkı sözlerini çevir — Bunu değiştirmek mevcut çevirileri temizler",
                    cleared: "Çeviri Temizlendi"
                },
                LyricsConversion: {
                    label: "Şarkı Sözü Dönüştürme",
                    description: "Şarkı sözlerini otomatik olarak çevir veya romanize et",
                    none: "Hiçbiri",
                    translate: "Çevir",
                    romanize: "Romanize Et"
                },
                FallbackProvider: {
                    label: "Yedek Sağlayıcı",
                    description: "Bir şarkı sözü sağlayıcısı başarısız olursa diğerini dene"
                },
                ShowFailedToasts: {
                    label: "Başarısız Bildirimlerini Göster",
                    description: "Şarkı sözleri yüklenemediğinde bildirim göster"
                },
                PurgeLyricsCache: {
                    label: "Şarkı Sözü Önbelleğini Temizle",
                    description: "Tüm önbelleğe alınmış şarkı sözlerini ve çevirileri sil",
                    button: "Önbelleği Temizle",
                    cacheLyricsPurged: "Şarkı sözü önbelleği temizlendi"
                }
            },
            context: {
                spotify: {
                    label: "Spotify Şarkı Sözü Menüsü",
                    type: "Spotify {{type}} Menüsü",
                    copy: "{{type}} Adını Kopyala",
                    link: "{{type}} Bağlantısını Kopyala",
                    open: "{{type}}’i Spotify’da Aç",
                    album: "Spotify Albüm Menüsü"
                },
                tidal: {
                    label: "Tidal Şarkı Sözü Menüsü",
                    lyrics: "Tidal Şarkı Sözleri",
                    type: "Tidal {{name}} Menüsü",
                    copy: "{{name}} Adını Kopyala",
                    open: "{{name}}’i Tidal’da Aç",
                    album: "Tidal Albüm Menüsü"
                },
                ytm: {
                    type: "YouTube Music {{name}} Menüsü",
                    copy: "{{name}} Adını Kopyala",
                    open: "{{name}}’i YouTube Music’te Aç",
                    album: "YouTube Music Albüm Menüsü",
                    muted: "Sessize Alındı"
                },
                lyrics: {
                    provider: "Şarkı Sözü Sağlayıcısı",
                    saved: "kaydedildi",
                    notFound: "Eşzamanlı şarkı sözleri bulunamadı"
                },
                copy: {
                    currentLyrics: "Geçerli şarkı sözlerini kopyala"
                }
            },
            alert: {
                lyricCopied: "Şarkı sözü panoya kopyalandı!",
                noLyrics: "Şarkı sözü yok",
                noLyricsTo: "{{translated}} için şarkı sözü yok",
                translate: "çeviri",
                romanize: "romanize etme",
                lyricsFetchFailed: "Şarkı sözü alınamadı",
                failedToFetchLyrics: "{{translated}} alınamadı",
                translation: "çeviri",
                romanization: "romanizasyon",
                failedToFetchTranslation: "{{translated}} şarkı sözü çevirisi alınamadı"
            },
            modal: {
                install: {
                    title: "Nasıl Yüklenir",
                    install: "{{link}} buradan yükleyin, ardından TidaLuna ayarlarına gidin → Eklenti mağazaları → @vmohammad/api’yi yükleyin",
                    tidaluna: "TidaLuna"
                },
                player: {
                    noPlaying: "Çalan parça yok",
                    artist: "Sanatçı:",
                    album: "Albüm:",
                    noLyrics: "Şarkı sözü bulunamadı :(",
                    progress: "İlerleme",
                    totalDuration: "Toplam Süre"
                },
                type: {
                    song: "Şarkı",
                    artist: "Sanatçı",
                    album: "Albüm"
                },
                album: {
                    open: "Albümü Aç",
                    viewCover: "Albüm Kapağını Görüntüle",
                    volume: "Ses Düzeyi",
                    image: "Albüm Görseli"
                }
            },
            provider: {
                lrclib: "LRCLIB",
                spotify: "Spotify",
                translated: "Çevrilmiş",
                romanized: "Romanize Edilmiş",
                none: "Hiçbiri"
            },
            error: {
                failed: "Pencere oluşturulamadı :(",
                checkConsole: "Hatalar için konsolu kontrol et",
                invalidUrlCustomApi: "Geçersiz Özel API Sunucu URL biçimi"
            }
        },
        mutualGroupDMs: {
            name: "MutualGroupDMs",
            description: "Profillerde ortak grup DM'lerini gösterir",
            no: "Ortak Grup Yok",
            mutualGroup: "{{count}} Ortak Grup",
            members: "Üye",
            noGroup: "Ortak grup DM'i yok",
            header: "Ortak Gruplar"
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Yeni sunuculara katıldığında otomatik olarak sessize alır ve çeşitli diğer ayarları değiştirir",
            context: {
                apply: "Yeni Sunucu Ayarlarını Uygula"
            },
            option: {
                guild: {
                    label: "Sunucuyu Sessize Al",
                    description: "Sunucuyu otomatik olarak sessize al"
                },
                messages: {
                    label: "Sunucu Bildirim Ayarları",
                    description: "Sunucu bildirim ayarları",
                    all: "Tüm mesajlar",
                    mentions: "Yalnızca @bahsetmeler",
                    nothing: "Hiçbiri",
                    default: "Sunucu varsayılanı"
                },
                everyone: {
                    label: "@everyone ve @here'i Bastır",
                    description: "@everyone ve @here bildirimlerini bastır"
                },
                role: {
                    label: "Tüm Rol @bahsetmelerini Bastır",
                    description: "Tüm rol @bahsetmelerini bastır"
                },
                highlights: {
                    label: "Vurgulamaları Bastır",
                    description: "Vurgulamaları otomatik olarak bastır"
                },
                events: {
                    label: "Yeni Etkinlikleri Sessize Al",
                    description: "Yeni etkinlikleri otomatik olarak sessize al"
                },
                showAllChannels: {
                    label: "Tüm Kanalları Göster",
                    description: "Tüm kanalları otomatik olarak göster"
                },
                mobilePush: {
                    label: "Mobil Bildirimleri Sessize Al",
                    description: "Mobil bildirimleri otomatik olarak sessize al"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Plexcord’a yeni eklentiler eklendiğinde sizi bilgilendiren yardımcı araç",
            modal: {
                title: "Yeni Eklentiler ve Ayarlar",
                tooltip: "Bu oturum için kapat",
                dontShowAgain: "Bir daha gösterme"
            }
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Sohbetten engellenmiş/yok sayılmış tüm mesajları tamamen gizler",
            option: {
                ignoreMessages: {
                    label: "Mesajları Yoksay",
                    description: "Engellenmiş ve (etkinse) yok sayılmış kullanıcılardan gelen mesajları tamamen yok sayar"
                },
                applyToIgnoredUsers: {
                    label: "Yok Sayılmış Kullanıcılara Uygula",
                    description: "Ek olarak 'yok sayılmış' kullanıcılara da uygular"
                }
            }
        },
        noBulletPoints: {
            name: "NoBulletPoints",
            description: "Markdown madde işaretleri (•, -, *) yazmanı engeller (kötü alışkanlık)"
        },
        noDeepLinks: {
            name: "DisableDeepLinks",
            description: "Discord’un masaüstü uygulamasını zorla açmaya çalışan sinir bozucu derin bağlantı (deep link) özelliğini devre dışı bırakır"
        },
        noDeleteSafety: {
            name: "NoDeleteSafety",
            description: "Sunucuyu silerken 'sunucu adını yaz' gereksinimini kaldırır",
            option: {
                confirmModal: {
                    label: "Onay Penceresi",
                    description: "'Bu sunucuyu silmek istediğine emin misin?' onay penceresi gösterilsin mi?"
                }
            },
            modal: {
                title: "Sunucu silinsin mi?",
                body: "Kalıcı olacak, bu açık değilse bile.",
                confirm: "Sil",
                cancel: "İptal"
            }
        },
        noDevtoolsWarning: {
            name: "NoDevtoolsWarning",
            description: "Konsoldaki 'DUR BAKALIM' uyarı afişini devre dışı bırakır. Yan etkisi olarak, Discord’un token’ını gizlemesini de engeller, bu da rastgele oturum kapatmalarını önler."
        },
        noF1: {
            name: "NoF1",
            description: "F1 yardım kısayolunu devre dışı bırakır."
        },
        noMaskedUrlPaste: {
            name: "NoMaskedUrlPaste",
            description: "Seçili metin varken bir bağlantı yapıştırıldığında, bağlantının maskelenmiş URL olarak yapıştırılmasını engeller."
        },
        noMirroredCamera: {
            name: "NoMirroredCamera",
            description: "Kameranın ekranda aynalanmasını engeller."
        },
        noModalAnimation: {
            name: "NoModalAnimation",
            description: "Tüm modal pencerelerdeki açılma/kapanma animasyonlarını devre dışı bırakır."
        },
        noMosaic: {
            name: "NoMosaic",
            description: "Discord’un görsel mozaik düzenini kaldırır.",
            option: {
                inlineVideo: {
                    label: "Satır İçi Video",
                    description: "Videoları döngü modali olmadan oynat."
                }
            }
        },
        noNitroUpsell: {
            name: "NoNitroUpsell",
            description: "İstemciyi Nitro’ya sahip olduğunuzu düşünmesi için kandırarak Discord’daki TÜM Nitro satış bildirimlerini kaldırır."
        },
        noOnboarding: {
            name: "NoOnboarding",
            description: "Discord’un sunucuya katılma sürecini atlayarak daha hızlı giriş yapılmasını sağlar."
        },
        noOnboardingDelay: {
            name: "NoOnboardingDelay",
            description: "Yavaş ve sinir bozucu sunucu katılım gecikmesini atlar."
        },
        noPendingCount: {
            name: "NoPendingCount",
            description: "Gelen arkadaşlık istekleri, mesaj istekleri ve Nitro tekliflerinin bildirim sayısını kaldırır.",
            option: {
                hideFriendRequestsCount: {
                    label: "Arkadaşlık İstek Sayısını Gizle",
                    description: "Gelen arkadaşlık isteklerinin sayısını gizle"
                },
                hideMessageRequestsCount: {
                    label: "Mesaj İstek Sayısını Gizle",
                    description: "Mesaj isteklerinin sayısını gizle"
                },
                hidePremiumOffersCount: {
                    label: "Nitro Teklif Sayısını Gizle",
                    description: "Nitro tekliflerinin sayısını gizle"
                }
            }
        },
        noProfileThemes: {
            name: "NoProfileThemes",
            description: "Nitro profil temalarını, kendiniz hariç herkes için tamamen kaldırır."
        },
        noReplyMention: {
            name: "NoReplyMention",
            description: "Yanıt pinglerini varsayılan olarak devre dışı bırakır.",
            option: {
                userList: {
                    label: "Kullanıcı Listesi",
                    description: "Ping'e izin verilecek veya muaf tutulacak kullanıcıların listesi (virgül veya boşlukla ayrılmalı)"
                },
                roleList: {
                    label: "Rol Listesi",
                    description: "Ping'e izin verilecek veya muaf tutulacak rollerin listesi (virgül veya boşlukla ayrılmalı)"
                },
                shouldPingListed: {
                    label: "Listelenenleri Pingleme",
                    description: "Davranış",
                    dontPing: "Listelenen kullanıcıları / rolleri pingleme",
                    onlyPing: "Yalnızca listelenen kullanıcıları / rolleri pingle"
                },
                inverseShiftReply: {
                    label: "Shift Yanıt Davranışını Ters Çevir",
                    description: "Discord’un shift ile yanıt verme davranışını tersine çevirir (etkinleştirildiğinde shift ile yanıt verirken kullanıcıyı mention'lar)"
                }
            }
        },
        normalizeMessageLinks: {
            name: "NormalizeMessageLinks",
            description: "Mesaj bağlantılarından canary/ptb öneklerini kaldırır."
        },
        noRPC: {
            name: "NoRPC",
            description: "Discord Rich Presence'ı devre dışı bırakır."
        },
        noServerEmojis: {
            name: "NoServerEmojis",
            description: "Sunucu emojilerini otomatik tamamlama menüsünde göstermez.",
            option: {
                shownEmojis: {
                    label: "Gösterilen Emojiler",
                    description: "Otomatik tamamlama menüsünde hangi emojilerin gösterileceğini seçin",
                    onlyUnicode: "Yalnızca Unicode emojiler",
                    currentServer: "Unicode emojiler ve mevcut sunucudaki emojiler",
                    all: "Unicode emojiler ve tüm sunucu emojileri (Discord varsayılanı)"
                }
            }
        },
        noSystemBadge: {
            name: "NoSystemBadge",
            description: "Görev çubuğu ve sistem tepsisindeki okunmamış bildirim rozetini devre dışı bırakır."
        },
        notificationTitle: {
            name: "NotificationTitle",
            description: "Masaüstü bildirimlerini daha bilgilendirici hale getirir."
        },
        notificationVolume: {
            name: "NotificationVolume",
            description: "Discord bildirimleri için özel ses seviyesi ayarlayın.",
            option: {
                notificationVolume: {
                    label: "Bildirim Sesi",
                    description: "Bildirim ses seviyesi"
                }
            }
        },
        noTypingAnimation: {
            name: "NoTypingAnimation",
            description: "Sohbetlerdeki yazıyor animasyonunu devre dışı bırakır."
        },
        noUnblockToJump: {
            name: "NoUnblockToJump",
            description: "Engellenen veya yok sayılan kullanıcıların (ve muhtemelen spam göndericilerin) mesajlarına, onları engelini kaldırmadan atlamanıza izin verir."
        },
        oneko: {
            name: "Oneko",
            description: "fareyi takip eden kedi (gerçek)",
            option: {
                speed: {
                    label: "Hız",
                    description: "Kedinin hızı :3",
                    biggerThan: "Sayı 0'dan büyük olmalıdır"
                }
            }
        },
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Bir kullanıcı DM’lerde art arda okunmamış mesajlar gönderse bile yalnızca bir sesli bildirim alırsınız. Limiti sıfırlamak için mesajları okuyun.",
            option: {
                channelToAffect: {
                    label: "Etkilenecek Kanal Türü",
                    description: "Eklentinin etkileyeceği DM türünü seçin",
                    both: "Her ikisi de",
                    user: "Kullanıcı DM'leri",
                    group: "Grup DM'leri"
                },
                allowMentions: {
                    label: "@Bahsetmelere İzin Ver",
                    description: "@mention'lar için sesli bildirim al"
                },
                allowEveryone: {
                    label: "@everyone’a İzin Ver",
                    description: "Grup DM'lerinde @everyone ve @here için sesli bildirim al"
                },
                ignoreUsers: {
                    label: "Yok Sayılacak Kullanıcılar",
                    description: "Bildirimleri ASLA sınırlandırılmayacak kullanıcı kimlikleri (virgül + boşluk ile ayırın)"
                },
                alwaysPlaySound: {
                    label: "Her Zaman Ses Çal",
                    description: "Bildirim sesi devre dışı olsa bile ses çal"
                }
            }
        },
        openInApp: {
            name: "OpenInApp",
            description: "Bağlantıları tarayıcı yerine ilgili uygulamalarda açar",
            option: {
                spotify: {
                    label: "Spotify",
                    description: "Spotify bağlantılarını Spotify uygulamasında aç"
                },
                steam: {
                    label: "Steam",
                    description: "Steam bağlantılarını Steam uygulamasında aç"
                },
                epic: {
                    label: "Epic Games",
                    description: "Epic Games bağlantılarını Epic Games Launcher'da aç"
                },
                tidal: {
                    label: "Tidal",
                    description: "Tidal bağlantılarını Tidal uygulamasında aç"
                },
                itunes: {
                    label: "iTunes",
                    description: "Apple Music bağlantılarını iTunes uygulamasında aç"
                }
            },
            notification: {
                open: "Opened link in native app"
            }
        },
        overrideForumDefaults: {
            name: "OverrideForumDefaults",
            description: "Varsayılan forum düzenini/sıralama düzenini geçersiz kılmanıza olanak tanır. Yine de kanal bazında değişiklik yapabilirsiniz.",
            option: {
                defaultLayout: {
                    label: "Varsayılan Düzen",
                    description: "Varsayılan olarak hangi düzenin kullanılacağını seçin",
                    list: "Liste",
                    gallery: "Galeri"
                },
                defaultSortOrder: {
                    label: "Varsayılan Sıralama Düzeni",
                    description: "Varsayılan olarak hangi sıralama düzeninin kullanılacağını seçin",
                    recentlyActive: "Son Etkin",
                    datePosted: "Gönderilme Tarihi"
                }
            }
        },
        partyMode: {
            name: "PartyMode",
            description: "Parti modu kullanmanı sağlar çünkü parti asla bitmez ✨",
            option: {
                superIntensePartyMode: {
                    label: "Süper Yoğun Parti Modu",
                    description: "Parti yoğunluğu",
                    normal: "Normal",
                    better: "Daha İyi",
                    projectX: "Project X"
                }
            }
        },
        pauseInvitesForever: {
            name: "PauseInvitesForever",
            description: "Discord'un aptalca kaldırdığı 'davetleri süresiz olarak duraklatma' seçeneğini geri getirir.",
            pauseIndefinitely: "Süresiz Duraklat"
        },
        permissionFreeWill: {
            name: "PermissionFreeWill",
            description: "Kanal izin yönetimindeki istemci tarafı kısıtlamalarını devre dışı bırakır.",
            option: {
                lockout: {
                    label: "Kilitlenme",
                    description: "İzin kilitlenme korumasını atla ('Bunu yapmak istediğinizden emin misiniz?')"
                },
                onboarding: {
                    label: "Başlangıç Gereksinimleri",
                    description: "Sunucunun uyumsuz hale gelmesine neden olabilecek onboarding gereksinimlerini atla ('Bu değişiklik sunucunuzu uyumsuz hale getirebilir [...]')"
                }
            }
        },
        permissionsViewer: {
            name: "PermissionsViewer",
            description: "Bir kullanıcının veya kanalın sahip olduğu izinleri ve bir sunucunun rollerini görüntülemeni sağlar.",
            view: "İzinleri Görüntüle",
            option: {
                permissionsSortOrder: {
                    label: "İzin Sıralama Düzeni",
                    description: "Bir rolün bir kullanıcıya belirli bir izni nasıl verdiğini belirlemek için kullanılan sıralama yöntemi",
                    highest: "En Yüksek Rol",
                    lowest: "En Düşük Rol"
                }
            },
            icon: {
                denied: "Reddedildi",
                allowed: "İzin Verildi",
                notOverwritten: "Üzerine Yazılmadı"
            },
            context: {
                permissions: "İzinler"
            },
            modal: {
                title: "İzinler",
                noPermissions: "Gösterilecek izin yok!",
                owner: "sahip",
                grantedBy: "İzin Veren",
                serverOwner: "Sunucu Sahibi",
                ownerRole: "Sahip",
                sortingBy: "{{method}} öncelikli sıralanıyor",
                highest: "En Yüksek Rol",
                lowest: "En Düşük Rol",
                details: "Rol Detayları"
            }
        },
        petpet: {
            name: "PetPet",
            description: "Herhangi bir resimden petpet gif'i oluşturmak için /petpet komutu ekler",
            command: {
                petpet: {
                    description: "Bir petpet gif'i oluşturun. Resim seçeneklerinden yalnızca birini belirtebilirsiniz",
                    delay: "Her kare arasındaki gecikme. Varsayılan 20.",
                    resolution: "Gif için çözünürlük. Varsayılan 120. Çılgın bir sayı girerseniz ve Discord donarsa bu sizin hatanız.",
                    image: "Kullanılacak resim eki",
                    url: "Resim almak için URL",
                    user: "Avatarı resim olarak kullanılacak kullanıcı",
                    noServerPfp: "'user' seçeneğini kullanırken sunucuya özel yerine normal avatarı kullan",
                    error: {
                        noImage: "Resim belirtilmedi!"
                    }
                }
            },
            error: {
                uploadNotImage: "Yüklenen dosya bir resim değil",
                fetchUserFailed: "Kullanıcı alınamadı. Daha fazla bilgi için konsolu kontrol edin."
            }
        },
        pictureInPicture: {
            name: "PictureInPicture",
            description: "Videolara resim içinde resim özelliği ekler (İndirme düğmesinin yanında)",
            tooltip: "Resim İçinde Resim Aç/Kapat",
            option: {
                loop: {
                    label: "Döngü",
                    description: "PiP videosunun döngüye alınıp alınmayacağı"
                }
            }
        },
        pinDMs: {
            name: "PinDMs",
            description: "Özel kanalları (DM'leri) DM listenin en üstüne sabitlemeni sağlar. DM'leri sabitlemek/kaldırmak veya sırasını değiştirmek için DM'lere sağ tıklayabilirsin.",
            context: {
                category: {
                    label: "DM Kategorisi Menüsü",
                    edit: "Kategoriyi Düzenle",
                    up: "Yukarı Taşı",
                    down: "Aşağı Taşı",
                    delete: "Kategoriyi Sil",
                    unnamed: "isimsiz"
                },
                pin: {
                    label: "DM Sabitle",
                    addCategory: "Kategori Ekle"
                },
                unPin: {
                    label: "DM Sabitlemesini Kaldır",
                    move: "Kategorisine Taşı"
                }
            },
            option: {
                pinOrder: {
                    label: "Sabitleme Sırası",
                    description: "Sabitlenen DM'ler hangi sırayla görüntülensin?",
                    lastMessage: "Son mesaj tarihine göre",
                    custom: "Özel (kanallara sağ tıklayarak sırayı değiştir)"
                },
                canCollapseDmSection: {
                    label: "Daraltılabilir Sabitlenmiş Bölüm",
                    description: "Kategorize edilmemiş DM'lerin bölümünü daraltılabilir hale getir"
                },
                dmSectionCollapsed: {
                    label: "DM Bölümü Daraltıldı",
                    description: "DM bölümünü daralt"
                },
                userBasedCategoryList: {
                    label: "Kullanıcı Bazlı Kategori Listesi",
                    description: ""
                }
            },
            modal: {
                category: {
                    pin: "Kategoriyi Sabitle",
                    edit: "Kategoriyi Düzenle",
                    new: "Yeni Kategori",
                    name: "İsim",
                    color: "Renk",
                    save: "Kaydet",
                    create: "Oluştur"
                }
            }
        },
        pingNotifications: {
            name: "PingNotifications",
            description: "Kişiselleştirilebilir bildirimler ve geliştirilmiş bahsetme biçimlendirmesi",
            option: {
                friends: {
                    label: "Arkadaşlar",
                    description: "Arkadaşların sunucularda mesaj gönderdiğinde bildirim al"
                },
                mentions: {
                    label: "Bahsetmeler",
                    description: "Biri doğrudan senden @bahsettiğinde bildirim al"
                },
                dms: {
                    label: "DM'ler",
                    description: "Doğrudan mesajlar (DM) için bildirim al"
                },
                showInActive: {
                    label: "Aktif Kanallarda Göster",
                    description: "Şu anda aktif olunan kanallar için bile bildirim göster"
                },
                ignoreMuted: {
                    label: "Sessize Alınanları Yoksay",
                    description: "Sessize alınmış sunuculardan, kanallardan veya kullanıcılardan gelen bildirimleri atla"
                }
            },
            unknown: "Bilinmiyor",
            dm: "DM",
            groupDM: "Grup DM",
            title: "{{username}}, {{channelName}} kanalında"
        },
        pinIcon: {
            name: "PinIcon",
            description: "Sabitlenmiş mesajlara bir iğne simgesi ekler."
        },
        plainFolderIcon: {
            name: "PlainFolderIcon",
            description: "Klasörlerdeki küçük sunucu simgelerini göstermez."
        },
        platformIndicators: {
            name: "PlatformIndicators",
            description: "Kullanıcılara platform göstergeleri (Masaüstü, Mobil, Web...) ekler.",
            embeddedTooltip: "Konsol",
            option: {
                list: {
                    label: "Liste",
                    description: "Üye listesinde göstergeleri göster"
                },
                badges: {
                    label: "Rozetler",
                    description: "Kullanıcı profillerinde göstergeleri rozet olarak göster"
                },
                messages: {
                    label: "Mesajlar",
                    description: "Mesajların içinde göstergeleri göster"
                },
                colorMobileIndicator: {
                    label: "Mobil Göstergesini Renklendir",
                    description: "Mobil göstergenin kullanıcı durum rengini alıp almamasını belirler."
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Hangi platformda veya cihazda olduğunuzu taklit eder",
            about: "Bu eklentinin sizi uyarılmaktan veya yasaklanmaktan koruyacağını garanti edemeyiz.",
            platform: {
                desktop: "Discord İstemcisi",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Gömülü Discord",
                playstation: "Gömülü Discord"
            },
            option: {
                platform: {
                    label: "Platform",
                    description: "Hangi platform olarak görünmek istiyorsunuz",
                    desktop: "Masaüstü",
                    web: "Web",
                    android: "Android",
                    ios: "iOS",
                    xbox: "Xbox",
                    playstation: "PlayStation"
                }
            }
        },
        plexcordToolbox: {
            name: "PlexcordToolbox",
            description: "Uygulama çubuğuna Plexcord hızlı işlemlerini barındıran bir düğme ekler.",
            tooltip: "Plexcord Araç Kutusu",
            context: {
                openLog: "Bildirim Günlüğünü Aç",
                enableQuickCSS: "QuickCSS'i Etkinleştir",
                openQuickCSS: "QuickCSS'i Aç",
                openSettings: "Ayarları Aç",
                manageThemes: "Temaları Yönet"
            },
            option: {
                showPluginMenu: {
                    label: "Eklenti Menüsünü Göster",
                    description: "Plexcord Araç Kutusunda eklentiler menüsünü göster"
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Mesajınızı göndermeden önce önizlemenizi sağlar.",
            tooltip: "Mesajı Önizle"
        },
        questCompleter: {
            name: "QuestCompleter",
            description: "Oyunu yüklemeden görevleri tamamlamanı sağlayan bir eklenti.",
            tooltip: "Görevleri Tamamla",
            alert: {
                title: "Görev Tamamlayıcı",
                noQuest: "Tamamlanacak görev yok. Görevler sekmesine gitmek için tıklayın.",
                completed: "Görev tamamlandı.",
                spoofingVideo: "{{applicationName}} için video taklidi yapılıyor",
                spoofingApplication: "{{applicationName}} için uygulama taklidi yapılıyor",
                currentProgress: "Mevcut İlerleme: {{progress}}/{{goal}} saniye",
                notStreaming: "Yayın yapmıyorsun",
                startStreaming: "{{applicationName}} senin yayın yapmanı gerektiriyor. Lütfen ses kanalında herhangi bir pencereyi yayınla.",
                onePersonNeeded: "Unutma, ses kanalında en az 1 kişinin daha olması gerekiyor!",
                streamMore: "Ses kanalında herhangi bir pencereyi {{seconds}} dakika daha yayınla."
            }
        },
        questFocused: {
            name: "QuestFocused",
            description: "Görev oynatıcısının duraklamasını engeller ve mümkünse tamamen atlamanı sağlar.",
            about: "Videoyu atlamak için sol fare tuşuna birkaç kez tıklaman gerekebilir."
        },
        questify: {
            name: "Questify",
            description: "Görev deneyiminizi bir dizi özellik ile geliştirin veya istediğiniz değilse tamamen devre dışı bırakın.",
            quests: "Görevler",
            context: {
                quest: {
                    label: "Görev Düğmesi Menüsü",
                    ignore: "Tümünü Yoksay Olarak İşaretle",
                    reset: "Yoksayma Listesini Sıfırla",
                    fetch: "Görevleri Getir",
                    markAsIgnored: "Yoksay Olarak İşaretle",
                    unmarkAsIgnored: "Yoksaymayı Kaldır",
                    stopAuto: "Otomatik Tamamlamayı Durdur"
                }
            },
            settings: {
                questButton: {
                    title: "Görev Düğmesi",
                    description: "Sunucu listesinde talep edilmemiş Görevler için isteğe bağlı gösterge içeren bir Görev düğmesi gösterin.",
                    leftClick: "Sol Tıklama İşlemi",
                    middleClick: "Orta Tıklama İşlemi",
                    rightClick: "Sağ Tıklama İşlemi",
                    visibility: "Düğme Görünürlüğü",
                    unclaimedIndicator: "Talep Edilmemiş Gösterge",
                    badgeColor: "Rozet Rengi",
                    rewardDisplay: "Ödül Gösterimi",
                    includedRewardTypes: "Dahil Edilen Ödül Türleri",
                    includedRewardTypesDesc: "Düğme görünürlüğü, rozet sayısı ve uyarı sesini çalarken yalnızca bu ödül türlerine sahip Görevleri talep edilmemiş olarak say.",
                    selectRewardTypes: "Talep edilmemiş sayıma dahil edilecek ödül türlerini seçin...",
                    noRewardType: "Bu isimde desteklenen bir Görev özelliği yok.",
                    default: "Varsayılan",
                    disable: "Devre Dışı Bırak"
                },
                questFeatures: {
                    title: "Görev Özellikleri",
                    description: "Belirli Görev özelliklerini değiştirin.",
                    popupWarning: "{{disablePopup}} seçeneği, tamamlanmış Görevler ve Görev ilerleme takibi için göz ardı edilecektir.",
                    videoQuestInfo: "{{completeVideo}} seçeneği, Video Görevinin süresini bekleyecek ve otomatik olarak tamamlandı olarak işaretleyecektir.",
                    gameQuestInfo: "Benzer şekilde, {{completeGame}} seçeneği Oyun Görevinin süresini bekleyecek ve otomatik olarak tamamlandı olarak işaretleyecektir. Bu seçenek yalnızca resmi masaüstü istemcisinde desteklenir.",
                    manualStartWarning: "Görevleri manuel olarak başlatmanız gerekir. İlk tıklama, Görevleri arka planda başlatır. Video Görevleri için, sonraki tıklamalar video modalını normal şekilde açar. Görevleri iptal etmek için Görev kutucuğunda bağlam menüsünü açıp {{stopAuto}} seçeneğini seçebilirsiniz.",
                    tosWarning: "Bu seçeneklerden herhangi birini kullanmak Discord'un Hizmet Şartlarına aykırıdır. Riski kendinize ait olmak üzere kullanın.",
                    selectFeatures: "Hangi Görev özelliklerini değiştireceğinizi seçin.",
                    disablePopup: "Hesap Paneli Üzerindeki Görev Açılır Penceresini Devre Dışı Bırak",
                    completeVideo: "Video Görevlerini Arka Planda Tamamla",
                    completeGame: "Oyun Oynama Görevlerini Arka Planda Tamamla",
                    stopAuto: "Otomatik Tamamlamayı Durdur"
                },
                restyleQuests: {
                    title: "Görevleri Yeniden Biçimlendir",
                    description: "Görünürlük için isteğe bağlı tema renkleriyle Görevleri vurgulayın.",
                    precedenceNote: "Talep Edilmiş ve Süresi Dolmuş Görev stilleri, Görev yoksayılsa bile öncelikli olacaktır.",
                    gradientStyle: "Gradyan Stili",
                    assetPreload: "Varlık Ön Yükleme",
                    unclaimed: "Talep Edilmemiş",
                    claimed: "Talep Edilmiş",
                    ignored: "Yoksayılmış",
                    expired: "Süresi Dolmuş",
                    intenseGradient: "Yoğun Yeniden Biçimlendirme Gradyanı",
                    defaultGradient: "Varsayılan Yeniden Biçimlendirme Gradyanı",
                    blackGradient: "İnce Siyah Gradyan",
                    noGradient: "Gradyan Yok",
                    loadAllAssets: "Sayfa Yüklendiğinde Tüm Görev Varlıklarını Yükle",
                    loadDuringScroll: "Sayfa Kaydırma Sırasında Görev Varlıklarını Yükle"
                },
                reorderQuests: {
                    title: "Görevleri Yeniden Sırala",
                    description: "Görevleri durumlarına göre sıralayın. Görev sayfasında \"Questify\" sıralama seçeneği seçildiğinde uygulanır.",
                    formatNote: "Virgülle ayrılmış liste şunların hepsini içermelidir: {{items}}.",
                    placeholder: "UNCLAIMED, CLAIMED, IGNORED, EXPIRED hepsini eklemelisiniz",
                    invalidFormat: "Geçersiz format.",
                    unclaimedSubsort: "Talep Edilmemiş Alt Sıralama",
                    claimedSubsort: "Talep Edilmiş Alt Sıralama",
                    ignoredSubsort: "Yoksayılmış Alt Sıralama",
                    expiredSubsort: "Süresi Dolmuş Alt Sıralama",
                    addedNewest: "Eklenme (En Yeni)",
                    addedOldest: "Eklenme (En Eski)",
                    expiredRecent: "Süresi Dolmuş (En Son)",
                    expiredLeast: "Süresi Dolmuş (En Az Son)",
                    expiringSoon: "Süresi Doluyor (En Yakın)",
                    expiringLate: "Süresi Doluyor (En Geç)",
                    claimedRecent: "Talep Edilmiş (En Son)",
                    claimedLeast: "Talep Edilmiş (En Az Son)",
                    ignoredQuestProfile: "Yoksayılan Görev Profili",
                    sharedProfile: "Paylaşımlı: Bu istemcideki tüm hesaplar yoksaymaları paylaşır.",
                    privateProfile: "Özel: Bu istemcideki tüm hesapların ayrı yoksaymaları vardır.",
                    rememberSort: "Sıralama Seçimini Hatırla",
                    rememberFilter: "Filtre Seçimini Hatırla",
                    yes: "Evet",
                    no: "Hayır",
                    rememberNote: "Bu sıralama ve filtre seçimi, Görev sayfasındaki yerleşik sıralama ve filtre seçeneklerini ifade eder. Yukarıdaki özel sıralama yalnızca Görev sayfasında \"Questify\" sıralama seçeneği seçildiğinde uygulanır. Hatırlama devre dışı bırakılırsa, sıralama veya filtre seçenekleri Görev sayfasını her açtığınızda sıfırlanır."
                },
                fetchingQuests: {
                    title: "Görevleri Getirme",
                    description: "Discord'dan ne sıklıkla Görev getirileceğini yapılandırın ve yeni Görevler için uyarılar ayarlayın.",
                    defaultBehavior: "Varsayılan olarak, Discord Görevleri yalnızca yüklendiğinde ve Görevler sayfasını ziyaret ettiğinizde getirir. Bu, aşağıda tanımlanan bir getirme aralığı olmadan, bu eklentinin gün boyunca eklenen yeni Görevlerden haberdar olamayacağı anlamına gelir.",
                    requirement: "Bu, Görev Düğmesinin etkin olmasına ve {{unclaimed}} olarak ayarlanmasına veya {{always}} olarak ayarlanıp talep edilmemiş {{pill}}, {{badge}} veya {{both}} göstergelerinin etkin olmasına bağlıdır. Aksi takdirde, periyodik olarak Görev getirmeye gerek yoktur.",
                    blockWarning: "Ayrıca, {{questFeatures}} ayarında {{fetchingQuests}} engellenirse, bu çalışmayacaktır.",
                    fetchInterval: "Getirme Aralığı",
                    alertSound: "Uyarı Sesi",
                    intervalPlaceholder: "30 dakika ile 12 saat arasında bir aralık seçin veya yazın.",
                    intervalFeedback: "Aralıklar 30 dakika ile 12 saat arasında olmalıdır.",
                    soundPlaceholder: "Bir ses seçin veya özel bir ses URL'si sağlayın.",
                    soundFeedback: "Ses bulunamadı veya URL desteklenen bir alan adından değil.",
                    disabled: "Devre Dışı",
                    minutes: "Dakika",
                    minute: "Dakika",
                    hours: "Saat",
                    hour: "Saat",
                    thirtyMinutes: "30 Dakika",
                    oneHour: "1 Saat",
                    threeHours: "3 Saat",
                    sixHours: "6 Saat",
                    twelveHours: "12 Saat",
                    customSound: "ÖZEL SES"
                },
                disableOptions: {
                    everything: "Her Şeyi Devre Dışı Bırak",
                    discovery: "Keşfet Sekmesini Devre Dışı Bırak",
                    dms: "DM'lerde Görevler Sekmesini Devre Dışı Bırak",
                    fetching: "Görev Getirmeyi Devre Dışı Bırak",
                    popup: "Hesap Panelinin Üstündeki Açılır Pencereyi Devre Dışı Bırak",
                    sponsored: "Görevler Sayfasındaki Sponsorlu Banner'ı Devre Dışı Bırak",
                    badge: "Kullanıcı Profillerindeki Rozeti Devre Dışı Bırak",
                    inventory: "Hediye Envanteri Taşıma Bildirimini Devre Dışı Bırak",
                    friendsList: "Arkadaş Listesi Şu Anda Aktif Tanıtımı",
                    membersList: "Üyeler Listesi Aktif Oynuyor Simgeleri",
                    gameQuests: "Oyun Görevlerini Arka Planda Tamamla",
                    videoQuests: "Video Görevlerini Arka Planda Tamamla",
                    mobileDesktop: "Mobil Görevleri Masaüstü ile Uyumlu Hale Getir",
                    notifyOnComplete: "Görev Tamamlandığında Bildir"
                },
                options: {
                    always: "Her Zaman",
                    unclaimed: "Talep Edilmemiş",
                    never: "Asla",
                    pill: "Hap",
                    badge: "Rozet",
                    both: "İkisi de",
                    none: "Hiçbiri",
                    openQuests: "Görevleri Aç",
                    contextMenu: "Bağlam Menüsü",
                    pluginSettings: "Eklenti Ayarları",
                    nothing: "Hiçbir şey",
                    orbs: "Küreler",
                    nitroCodes: "Nitro Kodları",
                    rewardCodes: "Ödül Kodları",
                    inGameItems: "Oyun İçi Öğeler",
                    profileCollectibles: "Profil Koleksiyonları"
                }
            },
            option: {
                disableQuests: {
                    description: "Hangi Görev özelliklerini devre dışı bırakacağınızı seçin."
                },
                disableQuestsEverything: {
                    label: "Her Şeyi Devre Dışı Bırak",
                    description: "Tüm Görev özelliklerini devre dışı bırak."
                },
                disableQuestsFetchingQuests: {
                    label: "Görev Getirmeyi Devre Dışı Bırak",
                    description: "Discord'dan Görev getirmeyi devre dışı bırak."
                },
                disableQuestsDirectMessagesTab: {
                    label: "DM'lerdeki Görev Sekmesini Devre Dışı Bırak",
                    description: "Doğrudan Mesajlar sayfasındaki Görev sekmesini devre dışı bırak."
                },
                disableQuestsDiscoveryTab: {
                    label: "Keşfet Sekmesini Devre Dışı Bırak",
                    description: "Keşfet sayfasındaki Görev sekmesini devre dışı bırak."
                },
                disableQuestsPageSponsoredBanner: {
                    label: "Görevler Sayfasındaki Sponsorlu Banner'ı Devre Dışı Bırak",
                    description: "Görevler sayfasındaki sponsorlu banner'ı devre dışı bırak."
                },
                disableQuestsPopupAboveAccountPanel: {
                    label: "Hesap Paneli Üstündeki Açılır Pencereyi Devre Dışı Bırak",
                    description: "Hesap panelinizin üstündeki Görev açılır penceresini devre dışı bırak."
                },
                disableQuestsBadgeOnUserProfiles: {
                    label: "Kullanıcı Profillerindeki Rozeti Devre Dışı Bırak",
                    description: "Kullanıcı profillerindeki Görev rozetini devre dışı bırak."
                },
                disableQuestsGiftInventoryRelocationNotice: {
                    label: "Hediye Envanteri Taşınma Bildirimini Devre Dışı Bırak",
                    description: "Hediye envanteri Görev taşınma bildirimini devre dışı bırak."
                },
                disableFriendsListActiveNowPromotion: {
                    label: "Arkadaş Listesi Şu Anda Aktif Tanıtımını Devre Dışı Bırak",
                    description: "Arkadaşların oynadığı oyunlar için Görev tanıtımını devre dışı bırak."
                },
                disableMembersListActivelyPlayingIcons: {
                    label: "Üyeler Listesindeki Aktif Oynama Simgelerini Devre Dışı Bırak",
                    description: "Üyeler listesindeki aktif oynama simgelerini devre dışı bırak."
                },
                makeMobileQuestsDesktopCompatible: {
                    label: "Mobil Görevleri Masaüstü Uyumlu Yap",
                    description: "Yalnızca mobil Görevleri masaüstü ile uyumlu hale getir."
                },
                completeVideoQuestsInBackground: {
                    label: "Video Görevlerini Arka Planda Tamamla",
                    description: "Video Görevlerini, video süresi geçtikten sonra arka planda tamamla."
                },
                completeGameQuestsInBackground: {
                    label: "Oyun Görevlerini Arka Planda Tamamla",
                    description: "Oyun Görevlerini, oyun süresi geçtikten sonra arka planda tamamla."
                },
                notifyOnQuestComplete: {
                    label: "Görev Tamamlandığında Bildir",
                    description: "Bir Görev otomatik olarak tamamlandığında bildirim göster."
                },
                questButton: {
                    description: "Sunucu listesinde bir Görev düğmesi göster."
                },
                questButtonDisplay: {
                    label: "Görev Düğmesi Görünümü",
                    description: "Sunucu listesindeki Görev düğmesi için hangi görüntüleme türünün kullanılacağı."
                },
                questRewardIncludeRewardCode: {
                    label: "Ödül Kodlarını Dahil Et",
                    description: "Görev sayılarını görüntülerken Ödül Kodlu Görevleri dahil et."
                },
                questRewardIncludeNitroCode: {
                    label: "Nitro Kodlarını Dahil Et",
                    description: "Görev sayılarını görüntülerken Nitro Kodlu Görevleri dahil et."
                },
                questRewardIncludeInGame: {
                    label: "Oyun İçi Ödülleri Dahil Et",
                    description: "Görev sayılarını görüntülerken Oyun İçi ödüllü Görevleri dahil et."
                },
                questRewardIncludeCollectibles: {
                    label: "Koleksiyonları Dahil Et",
                    description: "Görev sayılarını görüntülerken Koleksiyon Öğeli Görevleri dahil et."
                },
                questRewardIncludeOrbs: {
                    label: "Küreleri Dahil Et",
                    description: "Görev sayılarını görüntülerken Küre ödüllü Görevleri dahil et."
                },
                questButtonUnclaimed: {
                    label: "Görev Düğmesi Talep Edilmemiş Göstergesi",
                    description: "Sunucu listesindeki Görev düğmesinde talep edilmemiş gösterge için hangi görüntüleme türünün kullanılacağı."
                },
                questButtonBadgeColor: {
                    label: "Görev Düğmesi Rozet Rengi",
                    description: "Sunucu listesindeki Görev düğmesi rozetinin rengi."
                },
                questButtonLeftClickAction: {
                    label: "Sol Tıklama İşlemi",
                    description: "Sunucu listesindeki Görev düğmesine sol tıklanınca yapılacak işlem."
                },
                questButtonMiddleClickAction: {
                    label: "Orta Tıklama İşlemi",
                    description: "Sunucu listesindeki Görev düğmesine orta tıklanınca yapılacak işlem."
                },
                questButtonRightClickAction: {
                    label: "Sağ Tıklama İşlemi",
                    description: "Sunucu listesindeki Görev düğmesine sağ tıklanınca yapılacak işlem."
                },
                fetchingQuests: {
                    description: "Discord'dan Görev getir."
                },
                fetchingQuestsInterval: {
                    label: "Görev Getirme Aralığı",
                    description: "Discord'dan Görevleri getirme aralığı (saniye cinsinden)."
                },
                fetchingQuestsAlert: {
                    label: "Görev Getirme Uyarısı",
                    description: "Yeni Görevler tespit edildiğinde çalınacak ses."
                },
                fetchingQuestsAlertVolume: {
                    label: "Görev Getirme Uyarısı Sesi Hacmi",
                    description: "Yeni Görevler tespit edildiğinde çalınacak sesin hacmi."
                },
                restyleQuests: {
                    description: "Görevler sayfasındaki Görev kutucuklarının görünümünü özelleştir."
                },
                restyleQuestsUnclaimed: {
                    label: "Görevleri Yeniden Biçimlendir - Talep Edilmemiş",
                    description: "Görevler sayfasındaki talep edilmemiş Görev kutucuklarının rengi."
                },
                restyleQuestsClaimed: {
                    label: "Görevleri Yeniden Biçimlendir - Talep Edilmiş",
                    description: "Görevler sayfasındaki talep edilmiş Görev kutucuklarının rengi."
                },
                restyleQuestsIgnored: {
                    label: "Görevleri Yeniden Biçimlendir - Yoksayılmış",
                    description: "Görevler sayfasındaki yoksayılmış Görev kutucuklarının rengi."
                },
                restyleQuestsExpired: {
                    label: "Görevleri Yeniden Biçimlendir - Süresi Dolmuş",
                    description: "Görevler sayfasındaki süresi dolmuş Görev kutucuklarının rengi."
                },
                restyleQuestsGradient: {
                    label: "Görevleri Yeniden Biçimlendir - Gradyan",
                    description: "Görev kutucuklarında kullanılan gradyan stili."
                },
                restyleQuestsPreload: {
                    label: "Görevleri Yeniden Biçimlendir - Ön Yükleme",
                    description: "Görev kutucukları için varlıkları önceden yüklemeyi dene."
                },
                reorderQuests: {
                    description: "Görevleri durumlarına göre sırala. Varsayılan sıralama için boş bırak. Virgülle ayrılmış liste şunların hepsini içermelidir: UNCLAIMED, CLAIMED, IGNORED, EXPIRED."
                },
                unclaimedSubsort: {
                    label: "Talep Edilmemiş Alt Sıralama",
                    description: "Talep edilmemiş Görevler için alt sıralama yöntemi."
                },
                claimedSubsort: {
                    label: "Talep Edilmiş Alt Sıralama",
                    description: "Talep edilmiş Görevler için alt sıralama yöntemi."
                },
                ignoredSubsort: {
                    label: "Yoksayılmış Alt Sıralama",
                    description: "Yoksayılmış Görevler için alt sıralama yöntemi."
                },
                expiredSubsort: {
                    label: "Süresi Dolmuş Alt Sıralama",
                    description: "Süresi dolmuş Görevler için alt sıralama yöntemi."
                },
                unclaimedUnignoredQuests: {
                    label: "Talep Edilmemiş Yoksayılmamış Görevler",
                    description: "Talep edilmemiş ve yoksayılmamış Görevlerin sayısını takip eder."
                },
                onQuestsPage: {
                    label: "Görevler Sayfasında",
                    description: "Kullanıcının şu anda Görevler sayfasında olup olmadığı."
                },
                triggerQuestsRerender: {
                    label: "Görevler Yeniden Render Tetikleme",
                    description: "Bu ayarı değiştirerek Görevler sayfasının yeniden render edilmesini tetikle."
                },
                ignoredQuestProfile: {
                    label: "Yoksayılan Görev Profili",
                    description: "Yoksayılan Görevler için kullanılan profil."
                },
                rememberQuestPageSort: {
                    label: "Görev Sayfası Sıralamasını Hatırla",
                    description: "Görevler sayfasında en son kullanılan sıralamayı hatırla."
                },
                rememberQuestPageFilters: {
                    label: "Görev Sayfası Filtrelerini Hatırla",
                    description: "Görevler sayfasında en son kullanılan filtreleri hatırla."
                },
                lastQuestPageSort: {
                    label: "Son Görev Sayfası Sıralaması",
                    description: "Görevler sayfasında en son kullanılan sıralamayı hatırla."
                },
                lastQuestPageFilters: {
                    label: "Son Görev Sayfası Filtreleri",
                    description: "Görevler sayfasında en son kullanılan filtreleri hatırla."
                },
                ignoredQuestIDs: {
                    label: "Yoksayılan Görev Kimlikleri",
                    description: "Yoksayılan Görev kimliklerinin dizisi."
                }
            },
            button: {
                questInProgressWithTime: "Tamamlanıyor ({{remainTime}})",
                completing: "Tamamlanıyor",
                resume: "Devam Et (~{{remainTime}})"
            },
            notification: {
                completed: {
                    title: "Görev Tamamlandı",
                    body: "{{questName}} görevi tamamlandı."
                }
            }
        },
        questionMarkReplacement: {
            name: "QuestionMarkReplacement",
            description: "Mesaj yalnızca soru işaretlerinden oluşuyorsa, tüm soru işaretlerini seçilen dizeyle değiştirir.",
            option: {
                replace: {
                    label: "Değiştir",
                    description: "Şununla değiştir"
                }
            }
        },
        quickMention: {
            name: "QuickMention",
            description: "Mesaj eylem çubuğuna hızlı bahsetme düğmesi ekler.",
            tooltip: "Hızlı Bahset"
        },
        quickReply: {
            name: "QuickReply",
            description: "Kısayol tuşlarıyla mesajlara yanıt ver (ctrl + yukarı/aşağı) ve düzenle (ctrl + shift + yukarı/aşağı).",
            option: {
                shouldMention: {
                    label: "Bahsetmeli mi",
                    description: "Varsayılan olarak yanıtta ping at",
                    noReplyMentionPlugin: "NoReplyMention eklentisini takip et (etkinse)",
                    enabled: "Etkin",
                    disabled: "Devre Dışı"
                },
                ignoreBlockedAndIgnored: {
                    label: "Engellenen ve Yoksayılanları Yoksay",
                    description: "Gezinirken engellenmiş/yoksayılmış kullanıcıların mesajlarını yoksay"
                }
            }
        },
        quoter: {
            name: "Quoter",
            description: "Bir mesajdan ilham verici alıntı görseli oluşturmanı sağlar",
            context: {
                quote: "Alıntı"
            },
            modal: {
                title: "4K'da Yakala",
                grayscale: "Siyah-Beyaz",
                export: "Dışa Aktar",
                send: "Gönder",
                saveAsGIF: "GIF olarak Kaydet",
                saveDescription: "Görseli PNG yerine GIF olarak kaydeder/gönderir",
                showWatermark: "Filigranı Göster",
                watermarkText: "Filigran Metni (maks. 32 karakter)"
            },
            option: {
                quoteFont: {
                    label: "Alıntı Fontu",
                    description: "Alıntı metni için font (yazar/kullanıcı adı her zaman M PLUS Rounded 1c kullanır)",
                    mPlusRounded: "M PLUS Rounded 1c",
                    openSans: "Open Sans",
                    momoSignature: "Momo Signature",
                    lora: "Lora",
                    merriWeather: "Merriweather"
                },
                watermark: {
                    label: "Filigran",
                    description: "Özel filigran metni (maks. 32 karakter)"
                },
                grayscale: {
                    label: "Siyah-Beyaz",
                    description: "Varsayılan olarak siyah-beyazı etkinleştir"
                },
                showWatermark: {
                    label: "Filigranı Göster",
                    description: "Varsayılan olarak filigranı göster"
                },
                saveAsGif: {
                    label: "GIF Olarak Kaydet",
                    description: "Varsayılan olarak GIF olarak kaydet"
                }
            }
        },
        randomVoice: {
            name: "RandomVoice",
            description: "Sessiz alma butonunun yanında rastgele bir sesli aramaya katılma butonu ekler.",
            tooltip: "Rastgele Sesli",
            context: {
                label: "Ses durumu düzenleyici",
                amountLabel: "KULLANICI SAYISI",
                spacesLabel: "BOŞ YER",
                voiceLabel: "SES LİMİTİ",
                selfLabel: "KENDİ AYARLARIN",
                select: {
                    servers: "Sunucu Seç",
                    list: "Liste Seç",
                    filters: "Filtreleri Seç",
                    amount: "Kullanıcı Sayısı",
                    userAmount: "{{amount}} kullanıcı",
                    parameters: "Parametreler",
                    moreThan: "Şundan fazla",
                    lessThan: "Şundan az",
                    equalTo: "Şuna eşit",
                    spaces: "Boş Yer",
                    voice: "Ses Limiti"
                },
                filter: {
                    muted: "Sessizde",
                    deafened: "Sağırlaştırılmış",
                    camera: "Kamera",
                    stream: "Yayın",
                    includeFilters: "Filtreleri Dahil Et",
                    avoidFilters: "Filtrelerden Kaçın"
                },
                reset: {
                    list: "Listeyi Sıfırla"
                },
                voice: {
                    label: "Ses Ayarları",
                    auto: {
                        mute: "Otomatik Sessize Al",
                        deafen: "Otomatik Sağırlaştır",
                        camera: "Otomatik Kamera",
                        stream: "Otomatik Yayın",
                        leaveWhenEmpty: "Boş Olunca Ayrıl",
                        navigate: "Otomatik Gezin",
                        stage: "Sahne Kanallarından Kaçın",
                        afk: "AFK Kanallarından Kaçın"
                    }
                },
                invalid: {
                    server: "geçersiz sunucu"
                }
            },
            option: {
                userAmountOperation: {
                    label: "Kullanıcı Sayısı İşlemi",
                    description: "Kullanıcı sayısı için bir işlem seçin"
                },
                userAmount: {
                    label: "Kullanıcı Sayısı",
                    description: "Kullanıcı sayısını seçin"
                },
                spacesLeftOperation: {
                    label: "Boş Yer İşlemi",
                    description: "Maksimum kullanıcı sayısı için bir işlem seçin"
                },
                spacesLeft: {
                    label: "Boş Yer",
                    description: "Boş yer miktarını seçin"
                },
                vcLimitOperation: {
                    label: "Ses Kanalı Limit İşlemi",
                    description: "Ses kanalı limiti için bir işlem seçin."
                },
                vcLimit: {
                    label: "Ses Kanalı Limiti",
                    description: "Bir ses kanalı limiti seçin"
                },
                servers: {
                    label: "Sunucular",
                    description: "Dahil edilecek sunucular"
                },
                autoNavigate: {
                    label: "Otomatik Gezinme",
                    description: "Ses kanalına otomatik olarak gider."
                },
                autoCamera: {
                    label: "Otomatik Kamera",
                    description: "Kamerayı otomatik olarak açar"
                },
                autoStream: {
                    label: "Otomatik Yayın",
                    description: "Yayını otomatik olarak başlatır"
                },
                selfMute: {
                    label: "Otomatik Sessize Al",
                    description: "Ses kanalına katıldığınızda mikrofonunuzu otomatik olarak sessize alır."
                },
                selfDeafen: {
                    label: "Otomatik Sağırlaştır",
                    description: "Ses kanalına katıldığınızda sizi otomatik olarak sağırlaştırır."
                },
                leaveEmpty: {
                    label: "Boş Olunca Ayrıl",
                    description: "Sesli kanal boşaldığında rastgele başka bir çağrı bulur."
                },
                avoidStages: {
                    label: "Sahne Kanallarından Kaçın",
                    description: "Sahne tipi ses kanallarına katılmaktan kaçınır."
                },
                avoidAfk: {
                    label: "AFK Kanallarından Kaçın",
                    description: "AFK ses kanallarına katılmaktan kaçınır."
                },
                video: {
                    label: "Video",
                    description: "Kamerası açık olan kullanıcıları arar"
                },
                stream: {
                    label: "Yayın",
                    description: "Yayın yapan kullanıcıları arar"
                },
                mute: {
                    label: "Sessizde",
                    description: "Sessizde olan kullanıcıları arar"
                },
                deafen: {
                    label: "Sağırlaştırılmış",
                    description: "Sağırlaştırılmış kullanıcıları arar"
                },
                includeStates: {
                    label: "Filtreleri Dahil Et",
                    description: "Belirli kullanıcı durumlarının dahil edilmesini sağlar"
                },
                avoidStates: {
                    label: "Filtrelerden Kaçın",
                    description: "Belirli kullanıcı durumlarından kaçınılmasını sağlar"
                }
            },
            alert: {
                failed: "Bir Ses Kanalı bulunamadı!"
            }
        },
        reactErrorDecoder: {
            name: "ReactErrorDecoder",
            description: "React hata kodlarını insan tarafından okunabilir mesajlara dönüştürür."
        },
        readAllNotificationsButton: {
            name: "ReadAllNotificationsButton",
            description: "Tüm bildirimleri tek bir tıklamayla okunmuş olarak işaretlemek için bildirim paneline bir düğme ekler.",
            button: "Hepsini Oku"
        },
        relationshipNotifier: {
            name: "RelationshipNotifier",
            description: "Bir arkadaş, grup sohbeti veya sunucu seni kaldırdığında bildirir.",
            option: {
                notices: {
                    label: "Bildirimler",
                    description: "Kaldırıldığında ekranın üstünde bir bildirim göster (hiçbir bildirimi kaçırmak istemiyorsan bunu kullan)."
                },
                offlineRemovals: {
                    label: "Çevrimdışı Kaldırmalar",
                    description: "Discord'u açtığında çevrimdışıyken kaldırıldıysan bildirim gönder."
                },
                friends: {
                    label: "Arkadaşlar",
                    description: "Bir arkadaş seni listeden kaldırdığında bildir"
                },
                friendRequestCancels: {
                    label: "Arkadaşlık İsteği İptalleri",
                    description: "Bir arkadaşlık isteği iptal edildiğinde bildir"
                },
                servers: {
                    label: "Sunucular",
                    description: "Bir sunucudan kaldırıldığında bildir"
                },
                groups: {
                    label: "Gruplar",
                    description: "Bir grup sohbetinden kaldırıldığında bildir"
                }
            },
            notification: {
                removedFriend: "{{user}} seni arkadaşlıktan çıkardı.",
                cancelledFriendRequest: "{{user}} tarafından gönderilen bir arkadaşlık isteği iptal edildi.",
                removedFromServer: "{{server}} sunucusundan kaldırıldın.",
                removedFromGroup: "{{group}} grubundan kaldırıldın.",
                noLongerGroup: "{{group}} grubunda artık değilsin.",
                noLongerServer: "{{server}} sunucusunda artık değilsin.",
                noLongerFriend: "{{user}} ile artık arkadaş değilsiniz.",
                friendRequestRevoked: "{{user}} tarafından gönderilen arkadaşlık isteği geri çekildi.",
                ok: "Tamam"
            }
        },
        remix: {
            name: "Remix",
            description: "Dosya gönderme butonunun sağ tık menüsüne bir 'Remix' seçeneği ekler. Bu, bir görseli basit bir görsel düzenleyicide açar ve düzenlenen görseli doğrudan sohbete gönderme seçeneği sunar.",
            label: "Remix",
            button: {
                send: "Gönder",
                close: "Kapat",
                brush: "Fırça",
                erase: "Silgi",
                crop: "Kırp",
                shape: "Şekil",
                reset: "Sıfırla",
                clear: "Temizle"
            },
            editor: {
                choose: "Bir Görsel Seç",
                browse: "Gözat",
                rectangle: "Dikdörtgen",
                ellipse: "Elips",
                line: "Çizgi",
                arrow: "Ok",
                fill: "Doldur"
            }
        },
        repeatMessages: {
            name: "RepeatMessages",
            description: "Mesajları hızlıca tekrar göndermenize olanak tanır. Tekrarla seçeneğine tıklarken Shift tuşunu basılı tutarsanız mesaja yanıt olarak gönderir.",
            button: "Tekrarla (Tıkla) / Tekrarla ve Yanıtla (Shift + Tıkla)",
            context: {
                repeat: "Tekrarla",
                repeatAndReply: "Tekrarla ve Yanıtla"
            }
        },
        replaceGoogleSearch: {
            name: "ReplaceGoogleSearch",
            description: "Google aramasını farklı arama motorlarıyla değiştirir.",
            option: {
                customEngineName: {
                    label: "Özel Motor Adı",
                    description: "Özel arama motorunun adı"
                },
                customEngineURL: {
                    label: "Özel Motor URL'si",
                    description: "Arama motorunuzun URL’si"
                }
            },
            context: {
                label: "Metni Ara"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Mesaj yanıtlarında her zaman veya asla ping almayı kontrol etmenizi sağlar, ayrıca beyaz liste özelliği içerir",
            option: {
                alwaysPingOnReply: {
                    label: "Her Zaman Yanıt Ping'i",
                    description: "Birisi mesajlarınıza yanıt verdiğinde her zaman ping alın"
                },
                replyPingWhitelist: {
                    label: "Yanıt Ping Beyaz Listesi",
                    description: "Her zaman yanıt ping'i almak istediğiniz kullanıcıların ID’lerini virgülle ayırarak girin"
                }
            }
        },
        replyTimestamp: {
            name: "ReplyTimestamp",
            description: "Yanıtlanan mesaj önizlemelerinde zaman damgası gösterir"
        },
        revealAllSpoilers: {
            name: "RevealAllSpoilers",
            description: "Bir spoilere Ctrl tıklayarak bir mesajdaki tüm spoilerları, Ctrl+Shift tıklayarak sohbetin tamamındaki tüm spoilerları göster"
        },
        reverseImageSearch: {
            name: "ReverseImageSearch",
            description: "Görsel sağ tık menülerine Ters Görsel Arama seçenekleri ekler",
            context: {
                label: "Görseli Ara",
                all: "Tümünde Ara"
            }
        },
        reviewDB: {
            name: "ReviewDB",
            description: "Diğer kullanıcıları değerlendirin (Profillere yeni bir ayar bölümü ekler)",
            notification: {
                newReview: "Profilinizde yeni değerlendirmeler var!",
                auth: {
                    error: "Yetkilendirme sırasında bir hata oluştu",
                    successfully: "Başarıyla giriş yapıldı!",
                    failed: "Yetkilendirme başarısız",
                    review: "Bir değerlendirme eklemek için lütfen yetkilendirin.",
                    opening: "Yetkilendirme penceresi açılıyor...",
                    need: "Değerlendirme yapmak için yetkilendirmeniz gerekiyor!"
                },
                error: {
                    fast: "Çok hızlı istekte bulunuyorsunuz. Birkaç saniye bekleyip tekrar deneyin.",
                    fetching: "Değerlendirmeler alınırken bir hata oluştu.",
                    action: {
                        failed: "Kullanıcı {{action}} edilemedi",
                        success: "Kullanıcı başarıyla {{action}} edildi"
                    }
                }
            },
            modal: {
                delete: {
                    title: "Emin misiniz?",
                    description: "Bu değerlendirmeyi gerçekten silmek istiyor musunuz?",
                    confirm: "Sil",
                    cancel: "Vazgeç",
                    error: "Değerlendirmeleri silmek için giriş yapmalısınız.",
                },
                report: {
                    title: "Emin misiniz?",
                    description: "Bu değerlendirmeyi gerçekten bildirmek istiyor musunuz?",
                    confirm: "Bildiri",
                    cancel: "Vazgeç",
                    error: "Değerlendirmeleri bildirmek için giriş yapmalısınız.",
                },
                block: {
                    title: "Emin misiniz?",
                    description: "Bu kullanıcıyı gerçekten engellemek istiyor musunuz? Artık değerlendirmelerini görmeyeceksiniz.",
                    confirm: "Engelle",
                    cancel: "Vazgeç",
                    error: "Kullanıcıları engellemek için giriş yapmalısınız.",
                },
                blocked: {
                    title: "Engellenmiş Kullanıcılar",
                    auth: "ReviewDB'ye giriş yapmamışsınız.",
                    noBlocked: "Hiçbir kullanıcı engellenmemiş.",
                    fetch: "Engellenmiş kullanıcılar alınırken bir hata oluştu"
                },
                reviews: {
                    title: "Kullanıcısının Değerlendirmeleri",
                    noUser: "Görünüşe göre henüz bu kullanıcı hakkında kimse değerlendirme yapmamış. İlk siz olabilirsiniz!",
                    noServer: "Görünüşe göre henüz bu sunucu hakkında kimse değerlendirme yapmamış. İlk siz olabilirsiniz!"
                }
            },
            button: {
                appeal: "İtiraz Et",
                ok: "Tamam",
                more: "Daha Fazla",
                reply: "@{{user}} kullanıcısına cevap ver",
                update: "@{{user}} için incelemeyi güncelle",
                review: "@{{user}} kullanıcısını incele"
            },
            context: {
                view: "Değerlendirmeleri Gör",
                blocked: "Bu kullanıcıyı engellediniz",
                delete: "İncelemeyi Sil",
                report: "Değerlendirmeyi Bildir",
                block: "Kullanıcıyı Engelle",
                unblock: "Kullanıcının Engellemesini Kaldır",
                reply: "Değerlendirmeyi Cevapla"
            },
            option: {
                authorize: {
                    label: "Yetkilendir",
                    button: "ReviewDB ile Yetkilendir"
                },
                notifyReviews: {
                    label: "Değerlendirme Bildirimi",
                    description: "Başlangıçta yeni değerlendirmeleri bildir"
                },
                showWarning: {
                    label: "Uyarıyı Göster",
                    description: "Değerlendirme listesinin üstünde saygılı olun uyarısını göster"
                },
                hideTimestamps: {
                    label: "Zaman Damgalarını Gizle",
                    description: "Değerlendirmelerdeki zaman damgalarını gizle"
                },
                hideBlockedUsers: {
                    label: "Engellenen Kullanıcıları Gizle",
                    description: "Engellediğiniz kullanıcıların değerlendirmelerini gizle"
                },
                buttons: {
                    label: "Butonlar",
                    manageBlocked: "Engellenmiş Kullanıcıları Yönet",
                    support: "ReviewDB geliştirmesine destek ol",
                    website: "ReviewDB websitesi",
                    server: "ReviewDB Destek Sunucusu"
                }
            }
        },
        roleColorEverywhere: {
            name: "RoleColorEverywhere",
            description: "En üst roldeki rengi mümkün olan her yerde gösterir",
            option: {
                chatMentions: {
                    label: "Sohbet Bahsetmeleri",
                    description: "Sohbet bahsetmelerinde rol renklerini göster (mesaj kutusu dahil)"
                },
                memberList: {
                    label: "Üye Listesi",
                    description: "Üye listesi rol başlıklarında rol renklerini göster"
                },
                voiceUsers: {
                    label: "Sesli Kullanıcılar",
                    description: "Sesli sohbet kullanıcı listesinde rol renklerini göster"
                },
                reactorsList: {
                    label: "Reaktörler Listesi",
                    description: "Emoji reaksiyonu veren kullanıcı listesinde rol renklerini göster"
                },
                pollResults: {
                    label: "Anket Sonuçları",
                    description: "Anket sonuçlarında rol renklerini göster"
                },
                colorChatMessages: {
                    label: "Sohbet Mesajlarını Renklendir",
                    description: "Sohbet mesajlarını yazarın rol rengine göre renklendir"
                },
                messageSaturation: {
                    label: "Mesaj Doygunluğu",
                    description: "Mesaj renklendirme yoğunluğu"
                }
            }
        },
        searchFix: {
            name: "SearchFix",
            description: "Sinir bozucu 'Büyüteci düşürdük!' hatasını düzeltir.",
            notPerfect: "Bu düzeltme mükemmel değildir, bu yüzden sorunları çözmek için arama çubuğunu yeniden yüklemeniz gerekebilir.",
            paragraph1: "Discord yalnızca maksimum 5000 ofsetine izin verir (büyüteç hatasına sebep olan şey budur).",
            paragraph2: "Bu, geçmişte tam olarak 5000 mesajı ve gelecekte (eskiye göre sıralandığında) 5000 mesajı görebileceğiniz anlamına gelir.",
            paragraph3: "Bu eklenti, Discord’un kısıtlamasını aşmak için karşıt sıralama yöntemine geçiş yapar,",
            paragraph4: "ancak büyük bir arama sonucu varsa ve her iki sıralama yöntemiyle de erişilemeyen bir mesajı görüntülemeye çalışırsanız,",
            paragraph5: "eklenti yalnızca ofset 0’ı gösterir (sıralama yöntemine bağlı olarak en yeni veya en eski mesaj)."
        },
        secretRingToneEnabler: {
            name: "SecretRingToneEnabler",
            description: "Discord zil sesinin gizli versiyonunu her zaman çalar (özel zil sesi etkinlikleri dışında)",
            option: {
                onlySnow: {
                    label: "Yalnızca Kar Zil Sesi Etkinliği Sırasında",
                    description: "Yalnızca Snow Halation Temasını çal"
                }
            }
        },
        summaries: {
            name: "Summaries",
            description: "Discord'un deneysel Özetler özelliğini tüm sunucularda etkinleştirir ve konuşmaların yapay zekâ tarafından oluşturulmuş özetlerini gösterir",
            option: {
                summaryExpiryThresholdDays: {
                    label: "Özet Silinme Eşiği (Gün)",
                    description: "Bir özetin kaldırılmadan önce geçerli olduğu gün sayısı. Kanal başına en fazla 50 özetin saklandığını unutmayın"
                }
            }
        },
        selfForward: {
            name: "SelfForward",
            description: "Geçerli kanalı iletme listesi açılır penceresine ekler"
        },
        sendTimestamps: {
            name: "SendTimestamps",
            description: "Zaman damgalarını sohbet kutusu butonu ve metin kısayolları ile kolayca gönderin. Genişletilmiş açıklamayı okuyun!",
            sample: {
                paragraph1: "Yalnızca saat içeren zaman damgalarını hızlıca göndermek için, mesajınıza `SS:DD` formatında (ters tırnaklar dahil!) zaman damgaları ekleyin",
                paragraph2: "Aşağıdaki örneklere bakın.\nDaha spesifik bir şeye ihtiyaç duyarsanız, sohbet çubuğundaki Tarih butonunu kullanın!",
                examples: "Örnekler:"
            },
            modal: {
                title: "Zaman Damgası Seçici",
                light: "Açık",
                dark: "Koyu",
                format: "Zaman Damgası Formatı",
                preview: "Önizleme",
                insert: "Ekle",
                insertTimestamp: "Zaman Damgası Ekle"
            },
            option: {
                replaceMessageContents: {
                    label: "Mesaj İçeriğini Değiştir",
                    description: "Mesaj içeriğindeki zaman damgalarını değiştir"
                }
            }
        },
        serverInfo: {
            name: "ServerInfo",
            description: "Bir sunucu hakkında bilgi görüntülemenizi sağlar",
            context: {
                serverInfo: "Sunucu Bilgisi"
            },
            option: {
                sorting: {
                    label: "Sıralama",
                    description: "Kullanıcı adı veya varsa Görünen Ad",
                    username: "Kullanıcı Adı",
                    displayname: "Görünen Ad",
                    none: "Sıralama Yapma"
                }
            },
            modal: {
                tab: {
                    serverInfo: "Sunucu Bilgisi",
                    friends: "Arkadaşlar",
                    mutualUsers: "Ortak Kullanıcılar",
                    blockedUsers: "Engellenen Kullanıcılar",
                    ignoredUsers: "Yok Sayılan Kullanıcılar"
                },
                owner: "Sunucu Sahibi",
                loading: "Yükleniyor...",
                createdAt: "Oluşturulma Tarihi",
                joinedAt: "Katılma Tarihi",
                vanityLink: "Özel Davet Bağlantısı",
                preferredLocale: "Tercih Edilen Bölge",
                verification: {
                    level: "Doğrulama Seviyesi",
                    none: "Yok",
                    low: "Düşük",
                    medium: "Orta",
                    high: "Yüksek",
                    highest: "En Yüksek"
                },
                serverBoosts: "Sunucu Boostları",
                channels: "Kanallar",
                roles: "Roller"
            }
        },
        serverListIndicators: {
            name: "ServerListIndicators",
            description: "Sunucu listesine çevrimiçi arkadaş sayısı veya sunucu sayısı ekler",
            friends: "Arkadaş",
            servers: "Sunucu",
            option: {
                mode: {
                    label: "Mod",
                    description: "Sunucu listesinde görüntülenecek mod",
                    friend: "Yalnızca çevrimiçi arkadaş sayısı",
                    server: "Yalnızca sunucu sayısı",
                    both: "Hem sunucu hem çevrimiçi arkadaş sayısı"
                },
                useCompact: {
                    label: "Kompakt Modu Kullan",
                    description: "Göstergenin yalnızca metinle görünmesini sağlar"
                }
            }
        },
        serverSearch: {
            name: "ServerSearch",
            description: "Hızlı arama butonu ile sunucularınızda daha iyi gezinin",
            tooltip: "Ara"
        },
        shikiCodeblocks: {
            name: "ShikiCodeblocks",
            description: "Shiki tarafından desteklenen, VSCode tarzı kod bloklarını Discord’a getirir",
            option: {
                theme: {
                    label: "Tema",
                    description: "Varsayılan temalar"
                },
                customTheme: {
                    label: "Özel Tema",
                    description: "Özel bir VSCode temasına bağlantı",
                    mustURL: "Geçerli bir URL olmalıdır",
                    mustJSON: "Bir JSON dosyası olmalıdır"
                },
                tryHljs: {
                    label: "Hljs'e Yedeklenme",
                    description: "Daha hafif olan varsayılan Discord renklendiricisini ve temasını kullan.",
                    never: "Asla",
                    secondary: "Highlight.js yerine Shiki'yi tercih et",
                    primary: "Shiki yerine Highlight.js'i tercih et",
                    always: "Her zaman"
                },
                useDevIcon: {
                    label: "Dil İkonları İçin Devicon Kullan",
                    description: "Kod bloklarında dil ikonlarının nasıl gösterileceği",
                    disabled: "Devre Dışı",
                    colorless: "Renksiz",
                    colored: "Renkli"
                },
                bgOpacity: {
                    label: "Arkaplan Opaklığı",
                    description: "Arkaplan opaklığı"
                }
            },
            button: {
                copy: "Kopyala",
                copied: "Kopyalandı!"
            }
        },
        showAllMessageButtons: {
            name: "ShowAllMessageButtons",
            description: "Shift tuşuna bassanız da basmasanız da tüm mesaj butonlarını her zaman gösterir.",
            option: {
                noShiftDelete: {
                    label: "Shift'siz Silme",
                    description: "Bir mesajı silmek için shift tuşuna basma gereksinimini kaldırır."
                },
                noShiftPin: {
                    label: "Shift'siz Sabitleme",
                    description: "Bir mesajı sabitlemek için shift tuşuna basma gereksinimini kaldırır."
                }
            }
        },
        showBadgesInChat: {
            name: "ShowBadgesInChat",
            description: "Sohbette, mesaj yazarının adının yanında rozetlerini gösterir.",
            option: {
                showPlexcordDonor: {
                    label: "Plexcord Bağışçı Rozetini Göster",
                    description: "Sohbette Plexcord Bağışçı rozetlerini göstermek için etkinleştirin."
                },
                plexcordDonorPosition: {
                    label: "Plexcord Bağışçı Rozeti Konumu",
                    description: "Plexcord Bağışçı rozetlerinin konumu."
                },
                showPlexcordContributor: {
                    label: "Plexcord Katkıcı Rozetini Göster",
                    description: "Sohbette Plexcord Katkıcı rozetlerini göstermek için etkinleştirin."
                },
                plexcordContributorPosition: {
                    label: "Plexcord Katkıcı Rozeti Konumu",
                    description: "Plexcord Katkıcı rozetlerinin konumu."
                },
                showDiscordProfile: {
                    label: "Discord Profil Rozetini Göster",
                    description: "Sohbette Discord Profil rozetlerini göstermek için etkinleştirin."
                },
                discordProfilePosition: {
                    label: "Discord Profil Rozeti Konumu",
                    description: "Discord Profil rozetlerinin konumu."
                },
                showDiscordNitro: {
                    label: "Discord Nitro Rozetini Göster",
                    description: "Sohbette Discord Nitro rozetlerini göstermek için etkinleştirin."
                },
                discordNitroPosition: {
                    label: "Discord Nitro Rozeti Konumu",
                    description: "Discord Nitro rozetlerinin konumu."
                },
                badgeSettings: {
                    label: "Rozet Ayarları",
                    description: "Sohbette gösterilen diğer rozetlerin konumlarını yapılandırın.",
                    modal: "Rozetleri yeniden sıralamak için sürükleyin; belirli bir rozet türünü etkinleştirmek/devre dışı bırakmak için tıklayın."
                }
            },
            badge: {
                plexcord: "Plexcord destekçi rozeti",
                contributor: "Plexcord katılımcı rozeti",
                discordProfile: "Discord profil rozetleri (HypeSquad, Discord Staff, Active Developer vb.)",
                nitro: "Nitro rozeti",
                staff: "Discord Personeli",
                partner: "Partner Sunucu Sahibi",
                events: "HypeSquad Etkinlikleri",
                bravery: "HypeSquad Bravery",
                brilliance: "HypeSquad Brilliance",
                balance: "HypeSquad Balance",
                bugHunter: "Discord Hata Avcısı",
                earlyVerifiedBotDeveloper: "Erken Doğrulanmış Bot Geliştiricisi",
                earlySupporter: "Erken Destekçi",
                moderatorProgram: "Moderatör Programı Mezunu"
            },
            modal: {
                plexcordContributor: "Plexcord Katılımcısı",
                discordNitro: "Discord Nitro",
                basic: "Basic",
                classic: "Classic"
            }
        },
        showConnections: {
            name: "ShowConnections",
            description: "Kullanıcı açılır kartlarında bağlı hesapları gösterir",
            option: {
                iconSize: {
                    label: "İkon Boyutu",
                    description: "İkon boyutu (px)"
                },
                iconSpacing: {
                    label: "İkon Boşluğu",
                    description: "İkon kenar boşluğu",
                    compact: "Kompakt",
                    cozy: "Rahat",
                    roomy: "Geniş"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Erişim izniniz olmayan kanalları gösterir.",
            tooltip: "Gizli Kanal",
            option: {
                hideUnreads: {
                    label: "Okunmamışları Gizle",
                    description: "Okunmamışları gizle"
                },
                showMode: {
                    label: "Gösterim Modu",
                    description: "Gizli kanalların görüntülenmesinde kullanılan mod.",
                    lock: "Kilit ikonu ile sade stil",
                    hidden: "Sağda gizli göz ikonu ile sessize alınmış stil"
                },
                defaultAllowedUsersAndRolesDropdownState: {
                    label: "Varsayılan İzinli Kullanıcılar ve Roller Açılır Durumu",
                    description: "Gizli kanallarda izinli kullanıcılar ve roller menüsünün varsayılan olarak açık olup olmayacağı"
                }
            },
            channelType: {
                text: "metin",
                announcement: "duyuru",
                forum: "forum",
                voice: "ses",
                stage: "sahne"
            },
            sortOrder: {
                latestActivity: "Son Etkinlik",
                creationDate: "Oluşturulma Tarihi"
            },
            forumLayout: {
                default: "Ayarlanmadı",
                list: "Liste görünümü",
                grid: "Galeri görünümü"
            },
            videoQuality: {
                auto: "Otomatik",
                full: "720p"
            },
            modal: {
                hidden: "gizli",
                locked: "kilitli",
                threads: "konular",
                posts: "gönderiler",
                messages: "mesajlar",
                post: "gönderi",
                message: "mesaj",
                unknown: "bilinmeyen",
                permissionDetails: "İzin Detayları",
                thisIsA: "Bu bir {{status}} {{channelType}} kanalıdır",
                canNotSee: "Bu kanalın {{type}} kısmını göremezsiniz.",
                guidelines: "Ancak yönergelerini görebilirsiniz:",
                lastCreated: "Son oluşturulan {{type}}:",
                lastPin: "Son mesaj sabitleme:",
                threadSlowmode: "Varsayılan konu yavaş modu:",
                slowmode: "Yavaş mod:",
                bitrate: "Bitrate:",
                region: "Bölge:",
                automatic: "Otomatik",
                videoQuality: "Video Kalitesi Modu:",
                inactiveArchiveDuration: "{{type}} arşivlenmeden önceki varsayılan etkinliksiz süre",
                defaultLayout: "Varsayılan düzen:",
                defaultSort: "Varsayılan sıralama:",
                defaultReaction: "Varsayılan tepki emojisi:",
                requireTag: "Bu forumda gönderiler için bir etiket ayarlamak zorunludur.",
                availableTags: "Kullanılabilir Etiketler:",
                allowedUsersAndRoles: "İzin verilen kullanıcılar ve roller:",
                hideAllowedUsersAndRoles: "İzinli Kullanıcılar ve Rolleri Gizle",
                viewAllowedUsersAndRoles: "İzinli Kullanıcılar ve Rolleri Görüntüle"
            }
        },
        showHiddenThings: {
            name: "ShowHiddenThings",
            description: "İzinlere bakılmaksızın çeşitli gizli ve yalnızca moderatörlere özel şeyleri gösterir.",
            option: {
                showTimeouts: {
                    label: "Sohbette Üye Zaman Aşımını Göster",
                    description: "Sohbette üye zaman aşımı ikonlarını göster."
                },
                showInvitesPaused: {
                    label: "Davetler Duraklatıldı Bilgisini Göster",
                    description: "Sunucu listesinde davetlerin duraklatıldığı bilgisini göster."
                },
                showModView: {
                    label: "Mod Görünümünü Göster",
                    description: "Tüm sunucularda üye mod görünümü bağlam menüsü seçeneğini göster."
                }
            }
        },
        showMessageEmbeds: {
            name: "ShowMessageEmbeds",
            description: "Embed'i olmayan bağlantılar için embed gösterme seçeneğini bağlam menüsüne ekler",
            context: {
                embed: {
                    show: "Embed'i Göster",
                    hide: "Embed'i Kaldır"
                }
            },
            error: {
                failed: "Embed alınamadı",
                noEmbed: "Embed bulunamadı"
            }
        },
        showMeYourName: {
            name: "ShowMeYourName",
            description: "Sohbette takma adların, görünen adların ve kullanıcı adlarının herhangi bir kombinasyonunu görüntüleyin.",
            option: {
                messages: {
                    label: "Mesajlar",
                    description: "Mesajlarda özel ad formatını görüntüle."
                },
                replies: {
                    label: "Yanıtlar",
                    description: "Yanıtlarda özel ad formatını görüntüle."
                },
                mentions: {
                    label: "Bahsetmeler",
                    description: "Bahsetmelerde özel ad formatını görüntüle."
                },
                memberList: {
                    label: "Üye Listesi",
                    description: "Üye listesinde özel ad formatınızda listelenen ilk kullanılabilir adı göster."
                },
                profilePopout: {
                    label: "Profil Açılır Kartı",
                    description: "Profil açılır kartlarında özel ad formatınızda listelenen ilk kullanılabilir adı göster."
                },
                voiceChannels: {
                    label: "Ses Kanalları",
                    description: "Ses kanallarında özel ad formatınızda listelenen ilk kullanılabilir adı göster."
                },
                reactions: {
                    label: "Tepkiler",
                    description: "Tepki araç ipuçlarında özel ad formatınızda listelenen ilk kullanılabilir adı, tepki açılır pencerelerinde ise tam adı göster."
                },
                discriminators: {
                    label: "Ayrıştırıcıları Göster",
                    description: "Bot kullanıcı adlarına ayrıştırıcı ekleyin. Ayrıştırıcılar normal kullanıcılar için kaldırıldı, ancak botlar için hâlâ kullanılıyor. Varsayılan olarak bir botun kullanıcı adı bir kullanıcının global adına eşdeğerdir ve bu nedenle birden fazla bot aynı kullanıcı adına sahip olabilir. Ayrıştırıcı eklemek onları tekrar benzersiz hale getirir."
                },
                hideDefaultAtSign: {
                    label: "Varsayılan @ İşaretini Gizle",
                    description: "Bahsetmelerde ve yanıtlarda adın başındaki varsayılan '@' simgesini gizleyin. Yalnızca ilgili özellik etkinse uygulanır."
                },
                truncateAllNamesWithStreamerMode: {
                    label: "Yayıncı Modunda Tüm İsimleri Kısalt",
                    description: "Yayıncı Modundayken yalnızca kullanıcı adlarını değil, tüm adları kısalt."
                },
                removeDuplicates: {
                    label: "Kopyaları Kaldır",
                    description: "Adlardan herhangi ikisi aynıysa tekrar edenleri kaldırarak yalnızca benzersiz olanları bırak."
                },
                ignoreFonts: {
                    label: "Yazı Tiplerini Yoksay",
                    description: "İkinci, üçüncü ve dördüncü adlar için kullanıcının özel yazı tipini yok sayarak GG SANS kullan."
                },
                ignoreGradients: {
                    label: "Gradyanları Yoksay",
                    description: "İkinci, üçüncü ve dördüncü adlar için rolün gradyanı varsa bunu yok sayıp aşağıdaki değeri kullan."
                },
                animateGradients: {
                    label: "Gradyanları Animasyonlu Yap",
                    description: "İkinci, üçüncü ve dördüncü adlarda rol gradyanı varsa animasyonlu göster. 'Gradyanları Yoksay' etkinse veya azaltılmış hareket açıksa devre dışı kalır."
                },
                nameSeparator: {
                    label: "Ad Ayırıcı",
                    description: "Adlar arasında kullanılacak ayırıcı. Varsayılan tek boşluktur."
                },
                includedNames: {
                    label: "Dahil Edilen Adlar",
                    description: "Kullanıcı adlarının, görünen adların, takma adların ve arkadaş adlarının görüntülenme sırası. Şu yer tutucuları kullanın: {user}, {display}, {nick}, {friend}. Bir ad mevcut değilse kullanılacak alternatifleri virgülle ayırarak yazabilirsiniz: {friend, nick, display}. Her bir ad için üç ön ek ve üç son ek ekleyebilirsiniz."
                },
                friendNameColor: {
                    label: "Arkadaş Adı Rengi",
                    description: "Arkadaş adının ilk görüntülenen ad olmadığı durumlarda kullanılacak renk. Boş bırakılırsa varsayılan kullanılır. Hex(a), rgb(a) veya hsl(a) kabul eder. 'Role' kullanıcının en yüksek rol rengine uyar. 'Role+-#' parlaklığı belirtilen yüzde kadar artırır/azaltır (örn: 'Role+15')."
                },
                nicknameColor: {
                    label: "Takma Ad Rengi",
                    description: "Takma ad ilk görüntülenen ad değilse kullanılacak renk. Aynı renk formatı kuralları geçerlidir."
                },
                displayNameColor: {
                    label: "Görünen Ad Rengi",
                    description: "Görünen ad ilk görüntülenen ad değilse kullanılacak renk. Aynı renk formatı kuralları geçerlidir."
                },
                usernameColor: {
                    label: "Kullanıcı Adı Rengi",
                    description: "Kullanıcı adı ilk görüntülenen ad değilse kullanılacak renk. Aynı renk formatı kuralları geçerlidir."
                },
                triggerNameRerender: {
                    label: "Adı Yeniden Oluşturmayı Tetikle",
                    description: "Bu ayarı değiştirerek adın yeniden oluşturulmasını tetikler."
                }
            }
        },
        showTimeoutDuration: {
            name: "ShowTimeoutDuration",
            description: "Bir kullanıcının zaman aşımının ne kadar daha süreceğini, zaman aşımı ikonu araç ipucunda veya yanında gösterir",
            option: {
                displayStyle: {
                    label: "Görüntüleme Stili",
                    description: "Zaman aşımı süresinin nasıl görüntüleneceği",
                    tooltip: "Araç İpucunda",
                    inline: "Zaman aşımı ikonunun yanında"
                }
            }
        },
        sidebarChat: {
            name: "SidebarChat",
            description: "Başka bir kanalı veya DM'i kenar çubuğu olarak ya da açılır pencere şeklinde açın",
            toolbox: {
                label: "Önceki Sohbeti Aç"
            },
            context: {
                label: "Kenar Çubuğu Sohbetini Aç"
            },
            modal: {
                switch: "Kanalları Değiştir",
                popout: "Sohbeti Açılır Pencere Olarak Aç",
                close: "Kenar Çubuğu Sohbetini Kapat"
            },
            option: {
                persistSidebar: {
                    label: "Kenar Çubuğu Sohbetini Kalıcı Yap",
                    description: "Discord yeniden başlatıldığında kenar çubuğu sohbetinin açık kalmasını sağlar"
                },
                patchCommunity: {
                    label: "Community Yamasını Uygula",
                    description: "Topluluk sunucularındaki Kanal Tarayıcı veya Üyeler sekmesi gibi öğeleri yamalar."
                }
            }
        },
        signature: {
            name: "Signature",
            description: "Otomatik imza/mesaj sonu metni",
            option: {
                name: {
                    label: "İmza",
                    description: "Mesajlarınızın sonuna eklenecek imza metni"
                },
                textHeader: {
                    label: "Metin Başlığı",
                    description: "Metnin başına eklenecek başlık"
                },
                showIcon: {
                    label: "İkonu Göster",
                    description: "Sohbet çubuğunda eklentiyi açıp kapatmak için bir ikon göster"
                },
                contextMenu: {
                    label: "Bağlam Menüsü",
                    description: "Sohbet giriş bağlam menüsüne işlevi açıp kapatma seçeneği ekle"
                },
                isEnabled: {
                    label: "Etkin",
                    description: "İşlevi aç/kapat"
                }
            },
            tooltip: {
                enable: "İmzayı Etkinleştir",
                disable: "İmzayı Devre Dışı Bırak"
            },
            context: {
                enable: "İmzayı Etkinleştir"
            },
            command: {
                signature: {
                    name: "Signature",
                    description: "İmzanızı açıp kapatın",
                    toogle: "İmzanızı değiştirin (varsayılan davranış: değiştir)",
                    enabled: "İmza etkinleştirildi",
                    disabled: "İmza devre dışı bırakıldı"
                }
            }
        },
        silentMessageToggle: {
            name: "SilentMessageToggle",
            description: "Sohbet çubuğuna sessiz mesaj göndermeyi açıp kapatmak için bir buton ekler.",
            option: {
                persistState: {
                    label: "Durumu Kalıcı Yap",
                    description: "Sessiz mesaj geçiş durumunun nasıl kalıcı olacağını belirleyin",
                    none: "Kalıcı olmasın (kanal değişince sıfırlansın)",
                    channels: "Kanallar arasında kalıcı olsun",
                    restarts: "Kanallar ve Discord yeniden başlatmaları arasında kalıcı olsun"
                },
                autoDisable: {
                    label: "Otomatik Devre Dışı Bırak",
                    description: "Bir sessiz mesaj gönderdikten sonra özelliği otomatik olarak tekrar devre dışı bırak"
                }
            },
            tooltip: {
                enable: "Sessiz Mesajı Etkinleştir",
                disable: "Sessiz Mesajı Devre Dışı Bırak"
            }
        },
        silentTyping: {
            name: "SilentTyping",
            description: "Yazıyor göstergenizi sohbetten gizler.",
            command: {
                silentTyping: {
                    name: "SilentTyping",
                    description: "Yazıyor göstergenizi sohbetten gizler.",
                    toggle: {
                        name: "toggle",
                        description: "İşlevi global olarak, kanal için veya sunucu için aç/kapat.",
                        global: "Global",
                        channel: "Kanal",
                        guild: "Sunucu"
                    },
                    chatBarIndicator: {
                        name: "chatBarIndicator",
                        description: "Diğer kullanıcıların yazıyor göstergelerini sohbet çubuğunun üstünden gizle."
                    },
                    membersListIndicator: {
                        name: "membersListIndicator",
                        description: "Diğer kullanıcıların yazıyor göstergelerini üye listesinden gizle."
                    },
                    chatIcon: {
                        name: "chatIcon",
                        description: "Eklentiyi hızlıca açıp kapatmak için sohbet çubuğunda bir ikon göster."
                    },
                    chatContextMenu: {
                        name: "chatContextMenu",
                        description: "Eklenti ayarlarını hızlıca değiştirmek için sohbet bağlam menüsüne bir açılır menü ekle."
                    },
                    defaultHidden: {
                        name: "defaultHidden",
                        description: "DM’lerde/kanallarda/sunucularda yazıyor bilgisinin varsayılan olarak gizlenip gizlenmeyeceğini belirler."
                    }
                }
            },
            content: {
                updated: "Sessiz yazma ayarları güncellendi.",
                noChanges: "Sessiz yazma ayarlarında değişiklik yapılmadı."
            },
            tooltip: {
                hidden: "Yazıyor Gizli ({{location}})",
                visible: "Yazıyor Görünür ({{location}})",
                global: "Yazıyor Görünür (Global)"
            },
            option: {
                enabledGlobally: {
                    label: "Global Olarak Etkin",
                    description: "Kendi yazıyor göstergenizi global olarak aç/kapat."
                },
                hideChatBoxTypingIndicators: {
                    label: "Sohbet Kutusu Yazıyor Göstergelerini Gizle",
                    description: "Diğer kullanıcıların sohbet kutusu üstündeki yazıyor göstergelerini gizle."
                },
                hideMembersListTypingIndicators: {
                    label: "Üye Listesi Yazıyor Göstergelerini Gizle",
                    description: "Diğer kullanıcıların üye listesindeki yazıyor göstergelerini gizle."
                },
                chatIcon: {
                    label: "Sohbet İkonu",
                    description: "Eklentiyi hızlıca değiştirmek için sohbet çubuğunda bir ikon göster."
                },
                chatIconLeftClickAction: {
                    label: "Sohbet İkonu Sol Tıklama Aksiyonu",
                    description: "Sohbet ikonuna sol tıklandığında ne yapılacağını belirleyin.",
                    global: "Global Yazıyor Durumunu Değiştir",
                    channel: "Kanal İçin Yazıyor Durumunu Değiştir",
                    guild: "Sunucu İçin Yazıyor Durumunu Değiştir",
                    settings: "Eklenti Ayarlarını Aç"
                },
                chatIconMiddleClickAction: {
                    label: "Sohbet İkonu Orta Tıklama Aksiyonu",
                    description: "Sohbet ikonuna orta tıklandığında ne yapılacağını belirleyin.",
                    global: "Global Yazıyor Durumunu Değiştir",
                    channel: "Kanal İçin Yazıyor Durumunu Değiştir",
                    guild: "Sunucu İçin Yazıyor Durumunu Değiştir",
                    settings: "Eklenti Ayarlarını Aç"
                },
                chatIconRightClickAction: {
                    label: "Sohbet İkonu Sağ Tıklama Aksiyonu",
                    description: "Sohbet ikonuna sağ tıklandığında ne yapılacağını belirleyin.",
                    global: "Global Yazıyor Durumunu Değiştir",
                    channel: "Kanal İçin Yazıyor Durumunu Değiştir",
                    guild: "Sunucu İçin Yazıyor Durumunu Değiştir",
                    settings: "Eklenti Ayarlarını Aç"
                },
                chatContextMenu: {
                    label: "Sohbet Bağlam Menüsü",
                    description: "Eklenti ayarlarını hızlıca değiştirmek için sohbet bağlam menüsüne bir açılır menü ekle."
                },
                defaultHidden: {
                    label: "Varsayılan Gizli",
                    description: "Etkinleştirilirse, aşağıda 'Devre Dışı Konumlar' listesinde yer almayan tüm DM/kanal/sunucularda yazıyor göstergeniz diğer kullanıcılardan gizlenecek. Devre dışı ise, 'Etkin Konumlar' listesinde yer almayan yerlerde yazıyor göstergeniz görünecek."
                },
                enabledLocations: {
                    label: "Etkin Konumlar",
                    description: "Bu ID'ler için işlevi etkinleştir. Virgülle ayrılmış DM ID'leri, kanal ID'leri ve sunucu ID'leri kabul eder. Yalnızca 'Varsayılan Gizli' devre dışı ise kullanılır."
                },
                disabledLocations: {
                    label: "Devre Dışı Konumlar",
                    description: "Bu ID'ler için işlevi devre dışı bırak. Virgülle ayrılmış DM ID'leri, kanal ID'leri ve sunucu ID'leri kabul eder. Yalnızca 'Varsayılan Gizli' etkinse kullanılır."
                }
            }
        },
        sortFriends: {
            name: "SortFriends",
            description: "Arkadaş isteklerini alınma tarihine göre sıralar",
            tooltip: "Eklendi — {{date}}",
            option: {
                showDates: {
                    label: "Tarihleri Göster",
                    description: "Arkadaş isteklerinde tarihleri göster"
                }
            }
        },
        soundBoardLogger: {
            name: "SoundBoardLogger",
            description: "Sesli sohbetlerde çalınan tüm soundboard seslerini kaydeder ve bunları indirmenize olanak tanır",
            tooltip: "SoundBoard Logunu Aç",
            option: {
                savedIds: {
                    label: "Kaydedilen Soundboard ID'leri",
                    description: "Bir seferde kaydetmek istediğiniz soundboard ID miktarı (0 sınırsız kaydetmenizi sağlar)",
                    notNumber: "Değer bir sayı değil.",
                    cantDecimal: "Değer ondalık bir sayı olamaz.",
                    cantNegative: "Değer negatif bir sayı olamaz.",
                    heading: "Bir seferde kaydetmek istediğiniz soundboard ID miktarı (0 sınırsız kaydetmenizi sağlar)",
                    warning: "Uyarı! Sayıyı daha düşük bir değere ayarlamak logları sıfırlayacaktır!",
                    placeholder: "Bir sayı girin"
                },
                fileType: {
                    label: "Dosya Türü",
                    description: "Dosyanızı kaydetmek istediğiniz format"
                },
                openLogs: {
                    label: "Logları Aç",
                    description: "Logları göster",
                    button: "Logları Aç"
                },
                soundVolume: {
                    label: "Ses Seviyesi",
                    description: "Açma/kapama sesinin yüksekliği (0 devre dışı bırakır)"
                },
                iconLocation: {
                    label: "İkon Konumu",
                    description: "SoundBoard Log ikonunun nerede görüneceğini seçin (yeniden başlatma gerektirir)",
                    toolbar: "Araç Çubuğu",
                    chatInput: "Sohbet Girişi"
                }
            },
            modal: {
                title: "SoundBoard Logları",
                loading: "Sesler yükleniyor...",
                noLogs: "Henüz hiçbir ses kaydedilmedi. Log kaydı için bir sesli sohbete katılın!",
                clearLogs: "Logları Temizle",
                played: "{{time}} kez çalındı",
                last: "Son çalınma:",
                also: "Ayrıca şunları çaldı:",
                download: "İndir",
                copyId: "ID'yi Kopyala",
                copied: "ID panoya kopyalandı!",
                playSound: "Sesi Çal",
                moreUsers: "bu sesi başka insanlar da kullandı...",
                volume: "Soundboard Ses Seviyesi"
            }
        },
        splitLargeMessages: {
            name: "SplitLargeMessages",
            description: "Büyük mesajları, Discord'un mesaj sınırına uyması için birden fazla mesaja böler.",
            option: {
                maxLength: {
                    label: "Maksimum Mesaj Uzunluğu",
                    description: "Bir mesajın bölünmeden önce sahip olabileceği maksimum uzunluk. Otomatik algılama için 0 olarak ayarlayın."
                },
                disableFileConversion: {
                    label: "Dosya Dönüştürmeyi Devre Dışı Bırak",
                    description: "Etkinse, büyük mesajlar için dosya dönüştürmeyi devre dışı bırakır."
                },
                sendDelay: {
                    label: "Gönderim Gecikmesi",
                    description: "Her parça arasında saniye cinsinden bekleme süresi."
                },
                hardSplit: {
                    label: "Katı Bölme",
                    description: "Etkinse, boşluk/yeni satır yerine son karakterden böler."
                },
                splitInSlowmode: {
                    label: "Yavaş Modda Böl",
                    description: "Kanalda yavaş mod etkinse mesajlar bölünsün mü?"
                },
                slowmodeMax: {
                    label: "Yavaş Mod Maksimumu",
                    description: "Yavaş modda bölünürken izin verilen maksimum yavaş mod süresi."
                }
            }
        },
        spotifyActivityToggle: {
            name: "SpotifyActivityToggle",
            description: "Spotify etkinliği görünürlüğü için bir aç/kapa butonu ekler.",
            tooltip: {
                enable: "Spotify etkinliğini aç",
                disable: "Spotify etkinliğini kapat"
            },
            option: {
                location: {
                    label: "Konum",
                    description: "Spotify açma/kapama düğmesinin nerede gösterileceği",
                    panel: "Sessize Al/Kapat'ın Yanında",
                    toolbox: "Plexcord Araç Kutusu"
                }
            }
        },
        spotifyCrack: {
            name: "SpotifyCrack",
            description: "Ücretsiz birlikte dinleme, sesli sohbette otomatik duraklatmayı engelleme ve boştayken Spotify etkinliğinin çalmaya devam etmesini sağlar",
            option: {
                noSpotifyAutoPause: {
                    label: "Spotify Otomatik Duraklatmayı Kapat",
                    description: "Spotify’ın otomatik duraklatmasını devre dışı bırak."
                },
                keepSpotifyActivityOnIdle: {
                    label: "Boştayken Spotify Etkinliğini Sürdür",
                    description: "Boştayken Spotify etkinliğinin çalmaya devam etmesini sağlar"
                }
            }
        },
        spotifyShareCommands: {
            name: "SpotifyShareCommands",
            description: "Geçerli Spotify şarkınızı, albümünüzü veya sanatçınızı slash komutlarıyla paylaşın (/track, /album, /artist)",
            command: {
                makeCommand: {
                    description: "Geçerli Spotify {{type}} öğenizi sohbette paylaşın",
                    track: "Spotify’da herhangi bir şarkı dinlemiyorsunuz.",
                    find: "Şarkı Spotify’da bulunamadı."
                }
            }
        },
        startupTimings: {
            name: "StartupTimings",
            description: "Ayarlar menüsüne Başlangıç Zamanlamaları ekler",
            modal: {
                title: "Başlangıç Zamanlamaları",
                ended: "İzleme bitiş zamanı:",
                start: "Başlangıç",
                interval: "Aralık",
                delta: "Delta",
                event: "Olay",
                serverTrace: "Sunucu İzlemesi",
                loading: "Yükleniyor..."
            }
        },
        statusNotifications: {
            name: "StatusNotifications",
            description: "Durum değişiklikleri için bildirim ekler",
            loading: "Yükleniyor...",
            option: {
                notificationsSound: {
                    label: "Bildirim Sesi",
                    description: "Durum bildirimleri için bildirim sesi çalınsın mı?"
                },
                usersList: {
                    label: "Kullanıcı Listesi",
                    description: "Durum değişikliğinde bildirim yapılacak kullanılar",
                    empty: "İzlenen kullanıcı yok. Bir kullanıcıya sağ tıklayıp 'Durum Bildirimleri' seçeneğini kullanarak ekleyebilirsiniz."
                }
            },
            context: {
                label: "Durum Bildirimleri",
                notifications: "Bildirimler",
                type: {
                    all: "Tümü",
                    online: "Çevrimiçi",
                    offline: "Çevrimdışı",
                    none: "Hiçbiri"
                }
            },
            notification: {
                unknownUser: "Kullanıcı",
                title: "Durum Bildirimleri",

            },
            status: {
                online: "Çevrimiçi",
                idle: "Boşta",
                dnd: "Rahatsız Etmeyin",
                offline: "Çevrimdışı",
            },
        },
        statusPresets: {
            name: "StatusPresets",
            description: "Durumlarınızı kaydedip daha sonra yeniden ayarlamanıza olanak tanır",
            button: {
                remember: "Durumu Hatırla",
            },
            context: {
                edit: "Özel Ön Ayarları Düzenle",
                set: "Özel Durumu Ayarla"
            },
            notification: {
                successfully: "Durum başarıyla kaydedildi"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Durumunuzu Steam ile senkronize edin!",
            option: {
                onlineStatus: {
                    label: "Çevrimiçi Durumu",
                    description: "Discord Çevrimiçi iken Steam durumu"
                },
                idleStatus: {
                    label: "Boşta Durumu",
                    description: "Discord Boşta iken Steam durumu"
                },
                dndStatus: {
                    label: "Rahatsız Etmeyin Durumu",
                    description: "Discord Rahatsız Etmeyin iken Steam durumu"
                },
                invisibleStatus: {
                    label: "Görünmez Durumu",
                    description: "Discord Görünmez iken Steam durumu"
                },
                goInvisibleIfActivityIsHidden: {
                    label: "Etkinlik Gizliyse Görünmez Ol",
                    description: "Discord etkinliği gizlendiğinde Steam durumunu Görünmez olarak ayarla"
                }
            },
            status: {
                online: "Çevrimiçi",
                away: "Uzakta",
                invisible: "Görünmez",
                offline: "Çevrimdışı (Steam Sohbet Bağlantısını Kes)",
                disabled: "Devre Dışı"
            }
        },
        stickerBlocker: {
            name: "StickerBlocker",
            description: "Çıkartmaların görüntülenmesini engellemenizi sağlar.",
            option: {
                showGif: {
                    label: "GIF Göster",
                    description: "Havalı bir kedi GIF'inin gösterilip gösterilmeyeceği."
                },
                showMessage: {
                    label: "Mesaj Göster",
                    description: "Hangi ID'nin engellendiğini belirten bir mesaj gösterilip gösterilmeyeceği"
                },
                showButton: {
                    label: "Butonu Göster",
                    description: "GIF'in engelini kaldırmak için bir butonun gösterilip gösterilmeyeceği"
                },
                blockedStickers: {
                    label: "Engellenen Çıkartmalar",
                    description: "Engellenmiş çıkartma ID'lerinin listesi (ne yaptığınızı bilmiyorsanız düzenlemeyin)"
                }
            },
            modal: {
                blocked: "Engellenen Çıkartma. ID: {{id}} AD: {{name}}",
                unblock: "{{name}} engelini kaldır"
            },
            context: {
                blockSticker: "Çıkartmayı Engelle",
                unblockSticker: "Çıkartmanın Engelini Kaldır"
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Çıkartma seçicide bir çıkartma seçtiğinizde, onu anında göndermek yerine sohbet kutusuna ekler"
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Discord’da yayın yapmaya başladığınızda yayıncı modunu otomatik olarak etkinleştirir"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "İstediğiniz yayın codec'lerini devre dışı bırakır",
            option: {
                disableAv1Codec: {
                    label: "AV1 Codec'ini Devre Dışı Bırak",
                    description: "Discord'un yayın için AV1 kullanmayı düşünmesini engeller."
                },
                disableH265Codec: {
                    label: "H265 Codec'ini Devre Dışı Bırak",
                    description: "Discord'un yayın için H265 kullanmayı düşünmesini engeller."
                },
                disableH264Codec: {
                    label: "H264 Codec'ini Devre Dışı Bırak",
                    description: "Discord'un yayın için H264 kullanmayı düşünmesini engeller."
                }
            }
        },
        superReactionTweaks: {
            name: "SuperReactionTweaks",
            description: "Aynı anda oynatılan Süper Tepkilerin sınırını özelleştirin ve varsayılan olarak süper tepki kullanın",
            option: {
                superReactByDefault: {
                    label: "Varsayılan Olarak Süper Tepki",
                    description: "Tepki seçici varsayılan olarak Süper Tepkileri kullanır"
                },
                unlimitedSuperReactionPlaying: {
                    label: "Sınırsız Süper Tepki Oynatma",
                    description: "Aynı anda oynatılan Süper Tepki sınırını kaldırır"
                },
                superReactionPlayingLimit: {
                    label: "Süper Tepki Oynatma Sınırı",
                    description: "Aynı anda oynatılacak maksimum Süper Tepki sayısı. 0, Süper Tepkilerin oynatılmasını devre dışı bırakır"
                }
            }
        },
        textReplace: {
            name: "TextReplace",
            description: "Mesajlarınızdaki metni değiştirin. Plexcord sunucusundaki #textreplace-rules kanalında hazır kurallar bulabilirsiniz",
            option: {
                replace: {
                    label: "Değiştir",
                    string: "Düz Metin Kullanarak",
                    regex: "Regex Kullanarak",
                    myMessages: "Kendi mesajlarınıza uygula (herkes tarafından görünür)",
                    othersMessages: "Başkalarının mesajlarına uygula (yalnızca size görünür)",
                    allMessages: "Tüm mesajlara uygula"
                },
                stringRules: {
                    label: "Düz Metin Kuralları",
                    description: "Düz metin eşleştirme kullanarak metin değiştirme kuralları."
                },
                regexRules: {
                    label: "Regex Kuralları",
                    description: "Düzenli ifadeler kullanarak metin değiştirme kuralları."
                }
            },
            modal: {
                title: "Kuralları Test Et",
                find: "Bul",
                replace: "Değiştir",
                includes: "Yalnızca içeriyorsa",
                type: "Bir mesaj yazın",
                applied: "Kurallar uygulanmış mesaj"
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Tema oluşturma amacıyla çeşitli öğelere veri öznitelikleri ekler"
        },
        timelessClips: {
            name: "TimelessClips",
            description: "Kendi klip uzunluğunuzu ekleyin",
            option: {
                clipLength: {
                    label: "Klip Uzunluğu",
                    description: "Dakika cinsinden klip uzunluğu seçeneği ekleyin"
                }
            }
        },
        timezones: {
            name: "Timezones",
            description: "Kullanıcıların yerel saatini profillerde ve mesaj başlıklarında gösterir",
            button: {
                wantToSave: "Saat diliminizi veritabanına kaydetmek ister misiniz? Ayarlamak için buraya tıklayın.",
                yourLocalTimezone: "(Yerel saat diliminiz)"
            },
            context: {
                set: "Yerel Saat Dilimini Ayarla"
            },
            toast: {
                refresh: {
                    successfully: "Saat dilimleri başarıyla yenilendi!",
                    failed: "Saat dilimleri yenilenemedi!",
                    failedTo: "Saat dilimleri yenilenemedi."
                },
                update: {
                    successfully: "Saat dilimi başarıyla güncellendi!",
                    failed: "Saat dilimi ayarlanamadı."
                },
                delete: {
                    successfully: "Saat dilimi başarıyla silindi!",
                    failed: "Saat dilimi silinemedi."
                },
                auth: {
                    failed: "Kimlik doğrulama başarısız.",
                    success: "Yetkilendirme başarılı!"
                }
            },
            toolbox: {
                set: "Veritabanı Saat Dilimini Ayarla",
                refresh: "Veritabanı Saat Dilimlerini Yenile"
            },
            option: {
                showOwnTimezone: {
                    label: "Kendi Saat Dilimini Göster",
                    description: "Profilinizde ve mesaj başlıklarında kendi saat diliminizi gösterir"
                },
                twentyFourHourTime: {
                    label: "24 Saat Biçimi",
                    description: "Saati 24 saatlik biçimde göster"
                },
                showTimezoneInfo: {
                    label: "Saat Dilimi Bilgisini Göster",
                    description: "Saate ek olarak saat dilimi bilgisini göster"
                },
                showMessageHeaderTime: {
                    label: "Mesaj Başlığı Saatini Göster",
                    description: "Mesaj başlıklarında saati göster"
                },
                showProfileTime: {
                    label: "Profil Saatini Göster",
                    description: "Kullanıcı profillerinde saati göster"
                },
                useDatabase: {
                    label: "Veritabanı Saat Dilimini Kullan",
                    description: "Kullanıcı saat dilimlerini almak için veritabanını kullan"
                },
                preferDatabaseOverLocal: {
                    label: "Yerel Yerine Veritabanını Tercih Et",
                    description: "Saat dilimlerinde yerel depolama yerine veritabanını tercih et"
                },
                databaseUrl: {
                    label: "Veritabanı URL'si",
                    description: "Saat dilimi veritabanı sunucusunun URL'si"
                },
                setDatabaseTimezone: {
                    label: "Veritabanı Saat Dilimini Ayarla",
                    description: "Saat diliminizi veritabanında ayarlayın",
                    setTimezone: "Veritabanında Saat Dilimini Ayarla"
                },
                resetDatabaseTimezone: {
                    label: "Veritabanı Saat Dilimini Sıfırla",
                    description: "Veritabanındaki saat diliminizi sıfırlayın",
                    failed: "Veritabanı saat dilimi sıfırlanamadı"
                },
                askedTimezone: {
                    label: "Saat Dilimi Soruldu",
                    description: "Kullanıcıya saat diliminin sorulup sorulmadığını belirtir"
                }
            },
            modal: {
                title: "Saat Dilimleri",
                select: "Saat Dilimi Seç",
                selectPlaceholder: "Bir Saat Dilimi Seçin",
                delete: "Saat Dilimini Sil",
                save: "Kaydet"
            }
        },
        toastNotifications: {
            name: "ToastNotifications",
            description: "Bir direkt mesaj aldığınızda bir toast bildirimi gösterir.",
            notification: {
                call: "Sizinle bir arama başlattı!",
                recipient: {
                    add: "{{target}}, {{actor}} tarafından gruba eklendi.",
                    remove: "{{target}}, {{actor}} tarafından gruptan çıkarıldı.",
                    left: "Gruptan ayrıldı."
                },
                channel: {
                    change: {
                        name: "Kanal adı {{name}} olarak değiştirildi.",
                        icon: "Kanal ikonu değiştirildi."
                    },
                    pinned: "Bir mesaj sabitledi."
                },
                sent: {
                    embed: "Bir embed gönderdi.",
                    sticker: "Bir çıkartma gönderdi.",
                    attachment: "Dosya:"
                },
                redacted: "Mesaj içeriği gizlendi.",
                friend: {
                    accept: "{{user}} artık arkadaşınız",
                    acceptBody: "Artık ona doğrudan mesaj gönderebilirsiniz.",
                    request: "{{user}} size bir arkadaşlık isteği gönderdi.",
                    requestBody: "Bunu Arkadaşlar sekmesinden kabul edebilir veya reddedebilirsiniz."
                },
                example: {
                    title: "Örnek Bildirim",
                    body: "Bu bir örnek bildirim metnidir."
                }
            },
            modal: {
                dismiss: "Bildirimi Kapat",
                attachments: "{{attachments}} dosya gönderildi."
            },
            option: {
                position: {
                    label: "Konum",
                    description: "Toast bildiriminin konumu",
                    topRight: "Sağ Üst",
                    topLeft: "Sol Üst",
                    bottomRight: "Sağ Alt",
                    bottomLeft: "Sol Alt"
                },
                timeout: {
                    label: "Kapatma Süresi",
                    description: "Bildirimlerin kaç saniye gösterileceği"
                },
                opacity: {
                    label: "Opaklık",
                    description: "Toast bildiriminin opaklığı"
                },
                determineServerNotifications: {
                    label: "Sunucu Bildirimlerini Belirle",
                    description: "Sunucu bildirim ayarlarına göre bildirim gösterilip gösterilmeyeceğini belirle"
                },
                directMessages: {
                    label: "Direkt Mesajlar",
                    description: "Direkt mesajlar için bildirim göster"
                },
                groupMessages: {
                    label: "Grup Mesajları",
                    description: "Grup mesajları için bildirim göster"
                },
                friendServerNotifications: {
                    label: "Arkadaş ve Sunucu Bildirimleri",
                    description: "Arkadaşlar ortak sunucularda mesaj gönderdiğinde bildirim göster"
                },
                friendActivity: {
                    label: "Arkadaş Etkinliği",
                    description: "Arkadaş ekleme veya arkadaşlık isteği alma durumları için bildirim göster"
                },
                notifyFor: {
                    label: "Bildirim Alınacak Kanallar",
                    description: "Bildirim alınacak kanal ID’lerini girin (virgülle ayırın)"
                },
                ignoreUsers: {
                    label: "Yoksayılacak Kullanıcılar",
                    description: "Bildirimleri yoksayılacak kullanıcı ID’lerini girin (virgülle ayırın)"
                },
                exampleButton: {
                    label: "Örnek Buton",
                    description: "Bir örnek toast bildirimi göster.",
                    show: "Örnek Bildirim Göster"
                }
            }
        },
        toggleVideoBind: {
            name: "ToggleVideoBind",
            description: "Web kameranızı açıp kapatmak için özelleştirilebilir bir kısayol tuşu ekler.",
            option: {
                keyBind: {
                    label: "Kısayol Tuşu",
                    description: "Basılınca web kamerasını açıp kapatacak tuş."
                },
                reqCtrl: {
                    label: "Ctrl Gerekli",
                    description: "Ctrl tuşuna basılmasını zorunlu kıl."
                },
                reqShift: {
                    label: "Shift Gerekli",
                    description: "Shift tuşuna basılmasını zorunlu kıl."
                },
                reqAlt: {
                    label: "Alt Gerekli",
                    description: "Alt tuşuna basılmasını zorunlu kıl."
                }
            }
        },
        translate: {
            name: "Translate",
            description: "Mesajları Google Translate veya DeepL ile çevirin",
            tooltip: {
                label: "Çevir"
            },
            context: {
                translate: "Çevir",
                open: "Çeviri Penceresini Aç",
                auto: "Otomatik Çeviri Etkin"
            },
            option: {
                receivedInput: {
                    label: "Alınan Girdi",
                    description: "Alınan mesajların hangi dilden çevrileceği"
                },
                receivedOutput: {
                    label: "Alınan Çıktı",
                    description: "Alınan mesajların hangi dile çevrileceği"
                },
                sentInput: {
                    label: "Gönderilen Girdi",
                    description: "Kendi mesajlarınızın hangi dilden çevrileceği"
                },
                sentOutput: {
                    label: "Gönderilen Çıktı",
                    description: "Kendi mesajlarınızın hangi dile çevrileceği"
                },
                service: {
                    label: "Çeviri Servisi",
                    description: "DeepL Pro, ücretli bir API anahtarı gerektirir",
                    descriptionWeb: "Çeviri servisi (Web üzerinde desteklenmez!)",
                    google: "Google Translate",
                    deepl: "DeepL Ücretsiz",
                    deeplPro: "DeepL Pro"
                },
                deeplApiKey: {
                    label: "DeepL API Anahtarı",
                    description: "DeepL API anahtarı",
                    placeholder: "API anahtarınızı https://deepl.com/your-account adresinden alın"
                },
                autoTranslate: {
                    label: "Otomatik Çeviri",
                    description: "Mesajlarınızı göndermeden önce otomatik olarak çevirir. Ayrıca bu özelliği açıp kapatmak için çeviri butonuna shift veya sağ tıklayabilirsiniz"
                },
                showAutoTranslateTooltip: {
                    label: "Otomatik Çeviri Açıklamasını Göster",
                    description: "Bir mesaj otomatik çevrildiğinde sohbet çubuğu butonunda bir açıklama göster"
                }
            },
            modal: {
                title: "Çeviri",
                select: "Bir dil seçin",
                auto: "Otomatik Çeviri",
                dismiss: "Kapat",
                translated: "{{from}} dilinden çevrildi",
                failed: {
                    to: "{{text}} çevirisi başarısız oldu",
                    connect: "DeepL API bağlantısı başarısız:"
                },
                wrong: "Bir şeyler ters gitti. Sorun devam ederse lütfen konsolu kontrol edin veya destek sunucusundan yardım isteyin.",
                deepl: {
                    api: "DeepL API kotası aşıldı. Google Translate'e geçiliyor.",
                    apiKey: "DeepL API anahtarı ayarlanmamış. Google'a dönülüyor.",
                    auth: "Geçersiz DeepL API anahtarı veya sürümü"
                },
                autoTranslateEnabled: {
                    title: "Plexcord Otomatik Çeviri Etkin",
                    body: "Otomatik Çeviriyi yeni etkinleştirdiniz! Gönderdiğiniz tüm mesajlar gönderilmeden önce otomatik olarak çevrilecek.",
                    confirm: "Otomatik Çeviriyi Devre Dışı Bırak",
                    cancel: "Anladım",
                    secondaryConfirm: "Bir daha gösterme"
                }
            }
        },
        typingIndicator: {
            name: "TypingIndicator",
            description: "Bir kanalda birisi yazıyor olduğunda bir gösterge ekler.",
            option: {
                includeCurrentChannel: {
                    label: "Geçerli Kanalı Dahil Et",
                    description: "Geçerli seçili kanal için yazıyor göstergesinin gösterilip gösterilmeyeceği"
                },
                includeMutedChannels: {
                    label: "Sessize Alınmış Kanalları Dahil Et",
                    description: "Sessize alınmış kanallar için yazıyor göstergesinin gösterilip gösterilmeyeceği."
                },
                includeIgnoredUsers: {
                    label: "Yok Sayılan Kullanıcıları Dahil Et",
                    description: "Yok sayılan kullanıcılar için yazıyor göstergesinin gösterilip gösterilmeyeceği."
                },
                includeBlockedUsers: {
                    label: "Engellenen Kullanıcıları Dahil Et",
                    description: "Engellenen kullanıcılar için yazıyor göstergesinin gösterilip gösterilmeyeceği."
                },
                indicatorMode: {
                    label: "Gösterge Modu",
                    description: "Gösterge nasıl görüntülensin?",
                    both: "Avatarlar ve animasyonlu noktalar",
                    dots: "Animasyonlu noktalar",
                    avatars: "Avatarlar"
                }
            }
        },
        typingTweaks: {
            name: "TypingTweaks",
            description: "Yazıyor göstergesinde avatarları ve rol renklerini gösterir",
            option: {
                showAvatars: {
                    label: "Birden Fazla Kullanıcıyı Göster",
                    description: "Yazıyor göstergesinde avatarları göster"
                },
                showRoleColors: {
                    label: "Rol Renklerini Göster",
                    description: "Yazıyor göstergesinde rol renklerini göster"
                },
                alternativeFormatting: {
                    label: "Alternatif Biçim",
                    description: "Birden fazla kişi yazıyor olduğunda daha kullanışlı bir mesaj göster"
                }
            },
            others: {
                areTyping: "ve {{count}} kişi daha yazıyor..."
            }
        },
        unindent: {
            name: "Unindent",
            description: "Kod bloklarındaki baştaki girintiyi kaldırır"
        },
        unitConverter: {
            name: "UnitConverter",
            description: "Metrik birimleri İmparatorluk birimlerine ve tam tersine dönüştürür",
            tooltip: "Birimleri Dönüştür",
            option: {
                myUnits: {
                    label: "Benim Birimlerim",
                    description: "Kullandığınız ve dönüştürülmesini istediğiniz birimler. Varsayılan: imperial",
                    imperial: "İmparatorluk",
                    metric: "Metrik"
                }
            },
            button: {
                dismiss: "Kapat"
            }
        },
        unlimitedAccounts: {
            name: "UnlimitedAccounts",
            description: "Ekleyebileceğiniz hesap sayısını artırır.",
            option: {
                maxAccounts: {
                    label: "Maksimum Hesap",
                    description: "Eklenebilecek hesap sayısı, sınırsız için 0 girin"
                }
            }
        },
        unlockedAvatarZoom: {
            name: "UnlockedAvatarZoom",
            description: "Avatarınızı değiştirirken görüntü kırpma aracında daha fazla yakınlaştırmanıza olanak tanır",
            option: {
                zoomMultiplier: {
                    label: "Yakınlaştırma Çarpanı",
                    description: "Yakınlaştırma çarpanı"
                }
            }
        },
        unsuppressEmbeds: {
            name: "UnsuppressEmbeds",
            description: "Mesajlardaki embed içeriklerin bastırılmasını kaldırmanıza olanak tanır",
            context: {
                unsuppress: "Embed Bastırmasını Kaldır",
                suppress: "Embed'i Bastır"
            }
        },
        uselessInfo: {
            name: "UselessInfo",
            description: "Discord içinde rastgele işe yaramaz bilgiler gösterir; kısayollar ve aralık ayarları yapılabilir.",
            recording: "Kaydediliyor...",
            record: "Kaydet",
            option: {
                delay: {
                    label: "Bildirim Aralığı",
                    description: "Bildirimlerin gösterilme aralığı (dakika cinsinden)"
                },
                historyHotkey: {
                    label: "Geçmiş Paneli Kısayolu",
                    description: "Daha önce gösterilen bilgilerin geçmişini açmak için kısayol tuşu"
                },
                randomFactHotkey: {
                    label: "Rastgele Bilgi Kısayolu",
                    description: "Rastgele bilgi panelini açmak için kısayol tuşu"
                },
                sameFact: {
                    label: "Aynı Bilgileri Tekrarlamayı Önle",
                    description: "Tüm bilgiler gösterilmeden aynı bilginin birden fazla kez gösterilmesini önler"
                },
                lastNFacts: {
                    label: "Tekrarlanmaması Gereken Son Bilgiler",
                    description: "Yeniden gösterilmemesi gereken son bilgi sayısı (0 = tüm zamanlar)"
                }
            },
            modal: {
                title: "UselessInfo",
                history: {
                    none: "Henüz bilgi yok. Kısayolu kullan veya bekle.",
                    source: "Kaynak"
                },
                showRandom: "Rastgele Göster",
                close: "Kapat"
            },
            notification: {
                title: "Biliyor muydun?"
            }
        },
        userMessagesPronouns: {
            name: "UserMessagesPronouns",
            description: "Kullanıcı zamirlerini mesaj başlıklarında gösterir",
            option: {
                pronounsFormat: {
                    label: "Zamir Biçimi",
                    description: "Sohbette zamirlerin nasıl görüneceği",
                    lowercase: "Küçük harf",
                    capitalized: "Baş harfi büyük"
                },
                showSelf: {
                    label: "Kendini Göster",
                    description: "Kendi zamirlerinizin gösterilmesini açıp kapatın"
                }
            }
        },
        userVoiceShow: {
            name: "UserVoiceShow",
            description: "Bir kullanıcı ses kanalındayken bir gösterge gösterir",
            option: {
                showInUserProfileModal: {
                    label: "Kullanıcı Profilinde Göster",
                    description: "Kullanıcı profilinde ismin yanında ses kanalı göstergesini göster"
                },
                showInMemberList: {
                    label: "Üye Listesinde Göster",
                    description: "Üye ve DM listesinde ses kanalı göstergesini göster"
                },
                showInMessages: {
                    label: "Mesajlarda Göster",
                    description: "Mesajlarda ses kanalı göstergesini göster"
                }
            },
            modal: {
                inVoiceChat: "Sesli Sohbette"
            },
            notification: {
                cannotJoin: "Kullanıcının ses kanalına katılamazsınız."
            }
        },
        uSRBG: {
            name: "USRBG",
            description: "USRBG’den kullanıcı bannerlarını görüntüler, böylece Nitro olmadan herkes banner kullanabilir",
            option: {
                nitroFirst: {
                    label: "Önce Nitro",
                    description: "Hem Nitro hem de USRBG bannerı varsa hangisinin kullanılacağını belirleyin",
                    nitro: "Nitro Banner",
                    usrbg: "USRBG Banner"
                },
                voiceBackground: {
                    label: "Ses Arka Planı",
                    description: "USRBG bannerlarını sesli sohbet arka planı olarak kullan"
                }
            },
            button: "Kendi USRBG bannerınızı alın"
        },
        validReply: {
            name: "ValidReply",
            description: "Yanıtın üzerine gelindiğinde görülen 'Mesaj yüklenemedi' hatasını düzeltir"
        },
        validUser: {
            name: "ValidUser",
            description: "Bilinmeyen kullanıcılar için '@unknown-user' olarak görünen bahsetmeleri düzeltir (düzeltmek için bahsetmenin üzerine gelin)",
            badges: {
                discordBugHunter: "Discord Hata Avcısı",
                moderatorProgramsAlumni: "Moderatör Programları Mezunu",
                discordStaff: "Discord Personeli",
                hypeSquadEvents: "HypeSquad Etkinlikleri",
                bravery: "HypeSquad Cesaret",
                brilliance: "HypeSquad Parlaklık",
                balance: "HypeSquad Denge",
                partneredServerOwner: "Ortak Sunucu Sahibi",
                nitro: "Discord Nitro",
                earlySupporter: "Erken Destekçi",
                earlyVerifiedBotDeveloper: "Erken Doğrulanmış Bot Geliştiricisi"
            }
        },
        voiceChatDoubleClick: {
            name: "VoiceChatDoubleClick",
            description: "Sesli sohbetlere tek tık yerine çift tıklayarak katılmanızı sağlar"
        },
        vcNarrator: {
            name: "VCNarrator",
            description: "Kullanıcılar ses kanallarına katıldığında, ayrıldığında veya taşındığında anlatıcı aracılığıyla duyuru yapar",
            option: {
                voice: {
                    label: "Ses"
                },
                volume: {
                    label: "Ses Seviyesi",
                    description: "Anlatıcı ses seviyesi"
                },
                rate: {
                    label: "Hız",
                    description: "Anlatıcı konuşma hızı"
                },
                sayOwnName: {
                    label: "Kendi İsmini Söyle",
                    description: "Anlatıcının sizin adınızı söyleyip söylemeyeceği"
                },
                latinOnly: {
                    label: "Sadece Latin",
                    description: "Okumadan önce isimlerdeki Latin olmayan karakterleri temizle"
                },
                joinMessage: {
                    label: "Katılma Mesajı",
                    description: "Katılma mesajı"
                },
                leaveMessage: {
                    label: "Ayrılma Mesajı",
                    description: "Ayrılma mesajı"
                },
                moveMessage: {
                    label: "Taşınma Mesajı",
                    description: "Taşınma mesajı"
                },
                muteMessage: {
                    label: "Sessize Alma Mesajı",
                    description: "Sessize alma mesajı (şimdilik sadece kendiniz)"
                },
                unmuteMessage: {
                    label: "Sessizden Çıkma Mesajı",
                    description: "Sessizden çıkma mesajı (şimdilik sadece kendiniz)"
                },
                deafenMessage: {
                    label: "Sağırlaştırma Mesajı",
                    description: "Sağırlaştırma mesajı (şimdilik sadece kendiniz)"
                },
                undeafenMessage: {
                    label: "Sağırlaştırmadan Çıkma Mesajı",
                    description: "Sağırlaştırmadan çıkma mesajı (şimdilik sadece kendiniz)"
                }
            },
            modal: {
                title: "Örnek Sesleri Oynat",
                voice: "Bir ses seçin",
                language: "Bir dil seçin",
                noVoice: "Anlatıcı sesi bulunamadı.",
                linuxNote: "speech-dispatcher veya espeak kurun ve Discord'u --enable-speech-dispatcher parametresiyle çalıştırın",
                someNarrator: "İşletim sisteminizin Anlatıcı ayarlarından bazı sesler yüklemeyi deneyin",
                dontHaveEnglish: "Hiç İngilizce ses yüklememişsiniz, bu yüzden anlatıcı garip gelebilir",
                customiseMessages: "Aşağıdaki konuşulan mesajları özelleştirebilirsiniz. Boş bırakırsanız belirli mesajları devre dışı bırakabilirsiniz",
                placeholdersInfo: "Özel yer tutucular {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} ve {{CHANNEL}} sırasıyla kullanıcının adı (kendinizseniz boş), görüntü adı, sunucudaki takma adı ve kanal adıyla değiştirilir"
            }
        },
        videoSpeed: {
            name: "VideoSpeed",
            description: "Videoların hızını değiştirmenize olanak tanır",
            option: {
                preservePitch: {
                    label: "Perdeyi Koru",
                    description: "Hız değiştirildiğinde ses perdesi korunmalı mı?"
                }
            }
        },
        viewIcons: {
            name: "ViewIcons",
            description: "Kullanıcı profillerindeki avatar ve banner görsellerini tıklanabilir hale getirir; kullanıcı, sunucu ve grup kanal bağlam menüsüne Avatar/Banner Görüntüle seçenekleri ekler.",
            context: {
                view: {
                    avatar: "Avatarı Görüntüle",
                    serverAvatar: "Sunucu Avatarını Görüntüle",
                    icon: "İkonu Görüntüle",
                    banner: "Bannerı Görüntüle"
                }
            },
            option: {
                format: {
                    label: "Format",
                    description: "Hareketli olmayan görseller için kullanılacak görüntü formatını seçin. Hareketli görseller her zaman .gif formatını kullanır"
                },
                imgSize: {
                    label: "Görsel Boyutu",
                    description: "Kullanılacak görsel boyutu"
                }
            }
        },
        viewRaw: {
            name: "ViewRaw",
            description: "Herhangi bir mesajın, kanalın veya sunucunun ham içerik/verisini kopyalayın ve görüntüleyin",
            context: {
                copyLeft: "Ham Veriyi Kopyala (Sol Tık) / Ham Veriyi Görüntüle (Sağ Tık)",
                copyRight: "Ham Veriyi Kopyala (Sağ Tık) / Ham Veriyi Görüntüle (Sol Tık)",
                view: "Ham Veriyi Görüntüle"
            },
            option: {
                popoverButton: {
                    label: "Açılır Menü Butonu",
                    description: "Mesajın ham içerik/verisini görüntülemek için mesaj popover'ında bir buton göster."
                },
                clickMethod: {
                    label: "Tıklama Yöntemi",
                    description: "Herhangi bir mesajın ham içerik/verisini görüntülemek için kullanılacak tıklama yöntemini değiştirin.",
                    left: "Ham içeriği görüntülemek için Sol Tık.",
                    right: "Ham içeriği görüntülemek için Sağ Tık."
                }
            },
            modal: {
                title: "Ham Veri",
                content: "İçerik",
                data: "{{type}} Veri",
                copied: "{{type}} verisi panoya kopyalandı!",
                copy: "{{type}} JSON'unu Kopyala",
                copiedContent: "İçerik panoya kopyalandı!",
                copyContent: "Ham İçeriği Kopyala"
            },
            types: {
                message: "Mesaj",
                channel: "Kanal",
                guild: "Sunucu",
                role: "Rol",
                user: "Kullanıcı"
            }
        },
        voiceButtons: {
            name: "VoiceButtons",
            description: "Sesli arama panelinden herhangi bir kullanıcıya hızlıca DM gönderin, sessize alın veya sağırlaştırın.",
            option: {
                showChatButton: {
                    label: "Sohbet Butonunu Göster",
                    description: "Sohbet butonunun gösterilip gösterilmeyeceği"
                },
                showMuteButton: {
                    label: "Sessize Alma Butonunu Göster",
                    description: "Sessize alma butonunun gösterilip gösterilmeyeceği"
                },
                showDeafenButton: {
                    label: "Sağırlaştırma Butonunu Göster",
                    description: "Sağırlaştırma butonunun gösterilip gösterilmeyeceği"
                },
                muteSoundboard: {
                    label: "Soundboard'u Sessize Al",
                    description: "Sağırlaştırma butonuna tıklandığında kullanıcının soundboard'unu açıp kapatır."
                },
                disableVideo: {
                    label: "Videoyu Devre Dışı Bırak",
                    description: "Sağırlaştırma butonuna tıklandığında kullanıcının videosunu açıp kapatır."
                },
                useServer: {
                    label: "Sunucuyu Kullan",
                    description: "İzniniz varsa yerel yerine sunucu sessize alma/sağırlaştırmayı kullanır."
                },
                serverSelf: {
                    label: "Sunucuda Kendini Sessize Al",
                    description: "Sessize alma/sağırlaştırma kullanıldığında kendinizi sunucuda sessize alır veya sağırlaştırır."
                },
                showButtonsSelf: {
                    label: "Kendiniz için Butonları Göster",
                    description: "Kendi kullanıcınız için butonların gösterilip gösterilmeyeceği. Aynı işleve sahiptir; DM paneli açılır ve kendinizi sessize alır/sağırlaştırır.",
                    display: "Göster",
                    hide: "Gizle",
                    disable: "Devre Dışı"
                },
                whichNameToShow: {
                    label: "Hangi İsim Görünsün",
                    description: "Araç ipuçlarında kullanıcı adı, global ad veya her ikisi gösterilsin mi?",
                    global: "Global İsim",
                    username: "Kullanıcı Adı",
                    both: "Her İkisi"
                }
            },
            tooltip: {
                navigate: "DM'lere git",
                open: "{{username}} ile DM aç",
                yourself: "kendin",
                serverMute: "Sunucuda Sessize Al",
                serverDeafen: "Sunucuda Sağırlaştır",
                mute: "Sessize Al",
                deafen: "Sağırlaştır",
                unmute: "Sessizden Çıkar",
                undeafen: "Sağırlaştırmadan Çıkar",
                serverUnmute: "Sunucuda Sessizden Çıkar",
                serverUndeafen: "Sunucuda Sağırlaştırmadan Çıkar"
            }
        },
        voiceChannelLog: {
            name: "VoiceChannelLog",
            description: "Ses kanallarına kimlerin katıldığını ve ayrıldığını kaydeder",
            context: {
                view: "Kanal Loglarını Görüntüle"
            },
            modal: {
                joined: "<#{{channel}}> kanalına katıldı",
                left: "<#{{channel}}> kanalından ayrıldı",
                movedTo: "<#{{channel}}> kanalına taşındı",
                movedFrom: "<#{{channel}}> kanalından taşındı",
                noLogs: "Gösterilecek log bulunmuyor.",
                logs: "{{channel}} logları"
            },
            option: {
                mode: {
                    label: "Mod",
                    description: "Ses kanalı logunun nasıl gösterileceği",
                    menu: "Log menüsü",
                    associated: "Doğrudan ilgili sohbet kanalına logla",
                    both: "Hem sohbet kanalına hem log menüsüne logla"
                },
                voiceChannelChatSelf: {
                    label: "Ses Kanalı Sohbeti (Kendiniz)",
                    description: "Kendi ses kanalı hareketlerinizi ses kanallarında loglayın"
                },
                voiceChannelChatSilent: {
                    label: "Sessiz Ses Kanalı Sohbeti",
                    description: "Ses kanalı sohbetlerinde katılma/ayrılma/taşınma mesajları sessiz olur"
                },
                voiceChannelChatSilentSelf: {
                    label: "Sessiz Ses Kanalı Sohbeti (Kendiniz)",
                    description: "Ses kanalındaysanız katılma/ayrılma/taşınma mesajları sessiz olur"
                },
                ignoreBlockedUsers: {
                    label: "Engellenmiş Kullanıcıları Yoksay",
                    description: "Engellediğiniz kullanıcıları loglama"
                }
            }
        },
        voiceChatUtilities: {
            name: "VoiceChatUtilities",
            description: "Bu eklenti, bir kanalın tamamında birden fazla işlem yapmanıza olanak tanır (taşıma, sessize alma, bağlantı kesme vb.) (ilk olarak dutake tarafından)",
            option: {
                waitAfter: {
                    label: "Eylemden Sonra Bekle",
                    description: "Beklemeden önce yapılacak API işlemi sayısı (rate limit'e yakalanmamak için)"
                },
                waitSeconds: {
                    label: "Bekleme Süresi",
                    description: "Her işlem arasında beklenecek süre (saniye cinsinden)"
                }
            },
            context: {
                voiceTools: "Ses Araçları",
                disconnectAll: "Herkesin Bağlantısını Kes",
                muteAll: "Herkesi Sessize Al",
                unmuteAll: "Herkesi Sessizden Çıkar",
                deafenAll: "Herkesi Sağırlaştır",
                undeafenAll: "Herkesi Sağırlaştırmadan Çıkar",
                moveAll: "Herkesi Taşı"
            }
        },
        voiceDownload: {
            name: "VoiceDownload",
            description: "Sesli mesajlara indirme seçeneği ekler. (Yeni bir tarayıcı sekmesi açar)",
            context: {
                download: "Sesli mesajı indir"
            }
        },
        voiceMessages: {
            name: "VoiceMessages",
            description: "Mobildeki gibi sesli mesaj göndermenize olanak tanır. Bunu yapmak için, yükleme butonuna sağ tıklayın ve 'Sesli Mesaj Gönder'i seçin.",
            option: {
                noiseSuppression: {
                    label: "Gürültü Engelleme",
                    description: "Gürültü Engelleme"
                },
                echoCancellation: {
                    label: "Yankı Engelleme",
                    description: "Yankı Engelleme"
                }
            },
            notification: {
                failed: {
                    upload: "Sesli mesaj yüklenemedi.",
                    start: "Kayıt başlatılamadı.",
                    finish: "Kayıt tamamlanamadı."
                }
            },
            context: {
                sendVoiceMessage: "Sesli Mesaj Gönder",
                missingPermissions: "(İzin Eksik)"
            },
            modal: {
                record: "Sesli Mesaj Kaydet",
                upload: "Dosya Yükle",
                preview: "Önizleme",
                failed: "Seçilen ses dosyası çözümlenemedi:",
                oggOpus: "Sesli mesajların iOS'ta oynatılabilmesi için OggOpus formatında olması gerekir. Bu dosya {{type}} formatında olduğu için iOS'ta oynatılamaz.",
                fix: "Bunu düzeltmek için, önce dosyayı OggOpus formatına dönüştürün. Örneğin {{link}} kullanabilirsiniz.",
                sending: "Sesli mesaj gönderiliyor... Lütfen bekleyin.",
                stop: "Kaydı durdur",
                start: "Kaydı başlat",
                resume: "Kaydı sürdür",
                pause: "Kaydı duraklat",
                recording: "KAYIT YAPILIYOR"
            }
        },
        volumeBooster: {
            name: "VolumeBooster",
            description: "Kullanıcı ve yayın ses seviyesini varsayılan maksimumun üzerine çıkarmanıza olanak tanır",
            option: {
                multiplier: {
                    label: "Çarpan",
                    description: "Ses Çarpanı"
                }
            }
        },
        wallpaperFree: {
            name: "WallpaperFree",
            description: "Eski DM duvar kâğıdı deneyinin yeniden yapımı; herhangi bir kanal, kullanıcı veya sunucu için arka plan resmi ayarlayın.",
            option: {
                globalDefault: {
                    label: "Genel Varsayılan",
                    description: "Tüm kanallar için genel bir varsayılan duvar kâğıdı ayarlayın."
                },
                stylingTips: {
                    label: "Stil İpuçları"
                }
            },
            context: {
                setWallpaper: "Duvar Kâğıdı Ayarla",
                removeWallpaper: "Duvar Kâğıdını Kaldır"
            },
            modal: {
                set: "Duvar kâğıdı ayarla",
                image: "Resim URL'si",
                cancel: "İptal",
                apply: "Uygula",
                global: {
                    set: "Genel bir duvar kâğıdı ayarla",
                    remove: "Genel varsayılan duvar kâğıdını kaldır",
                    reset: "Duvar kâğıdı verilerini sıfırla"
                },
                web: {
                    info: "Yerel dosyaları, plexcord tema dizinine koyarak ve plexcord:///themes/filename.ext url'sini kullanarak kullanabilirsiniz.",
                    open: "Tema Dizini Aç",
                    quickCSS: "QuickCSS'i Aç"
                }
            }
        },
        webContextMenus: {
            name: "WebContextMenus",
            description: "Discord’un web sürümünde eksik olan bağlam menülerini geri ekler: Bağlantılar ve Görseller (Bağlantıyı/Görseli Kopyala veya Aç), Metin Alanı (Kopyala, Kes, Yapıştır, Yazım Denetimi)",
            option: {
                addBack: {
                    label: "Geri Ekle",
                    description: "Görseller, bağlantılar ve sohbet giriş çubuğu için Discord bağlam menülerini geri ekle"
                }
            }
        },
        webKeybinds: {
            name: "WebKeybinds",
            description: "Discord’un web sürümünde eksik olan kısayol tuşlarını geri ekler: ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+1-9, ctrl+,. Tam olarak yalnızca Plextron/Legcord üzerinde çalışır, tarayıcı içinde çalışmaz."
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Chromium ve Plextron istemcilerindeki 2500 kbps ekran paylaşımı bitrate sınırını kaldırır."
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Bir mesaja reaksiyon veren kullanıcıların avatarlarını gösterir",
            option: {
                avatarClick: {
                    label: "Avatar Tıklaması",
                    description: "Reaksiyonlardaki avatarların tıklanabilirliğini aç/kapat"
                }
            }
        },
        whosWatching: {
            name: "WhosWatching",
            description: "Ekran paylaşımı simgesinin üzerine gelerek yayınızı izleyen kullanıcıları görüntüleyin",
            modal: {
                noSpectator: "İzleyici yok"
            },
            option: {
                showPanel: {
                    label: "Paneli Göster",
                    description: "İzleyicileri ekran paylaşımı panelinin altında göster"
                }
            }
        },
        writeUpperCase: {
            name: "WriteUpperCase",
            description: "Mesaj girişlerinde her cümlenin ilk harfini büyük harfe çevirir",
            option: {
                blockedWords: {
                    label: "Engellenen Kelimeler",
                    description: "Büyük harfe çevrilmemesi gereken ifadeler (virgülle ayırın)"
                }
            }
        },
        xSOverlay: {
            name: "XSOverlay",
            description: "Discord bildirimlerini VR ortamında kolay görüntüleme için XSOverlay'e iletir",
            notification: {
                call: {
                    title: "{{user}} seni arıyor.",
                    content: "Gelen arama"
                },
                message: {
                    reply: " (yanıt)",
                    embed: " [embed] ",
                    onlyEmbed: "mesaj embed(leri) gönderdi",
                    sticker: " [sticker] ",
                    onlySticker: "bir çıkartma gönderdi",
                    image: "resim",
                    attachment: "ek"
                },
                test: {
                    title: "Plexcord'dan selam!",
                    content: "Bu bir test bildirimidir! explode",
                    button: "Test bildirimi gönder"
                }
            },
            option: {
                webSocketPort: {
                    label: "WebSocket Portu",
                    description: "WebSocket portu"
                },
                preferUDP: {
                    label: "UDP Tercih Et",
                    description: "XSOverlay'in eski sürümlerini kullanıyorsanız ve WebSocket ile bağlanamıyorsanız etkinleştirin. Bu ayar web üzerinde yok sayılır."
                },
                botNotifications: {
                    label: "Bot Bildirimleri",
                    description: "Bot bildirimlerine izin ver"
                },
                serverNotifications: {
                    label: "Sunucu Bildirimleri",
                    description: "Sunucu bildirimlerine izin ver"
                },
                dmNotifications: {
                    label: "DM Bildirimleri",
                    description: "Özel mesaj bildirimlerine izin ver"
                },
                groupDmNotifications: {
                    label: "Grup DM Bildirimleri",
                    description: "Grup DM bildirimlerine izin ver"
                },
                callNotifications: {
                    label: "Arama Bildirimleri",
                    description: "Arama bildirimlerine izin ver"
                },
                pingColor: {
                    label: "Ping Rengi",
                    description: "Kullanıcı etiketleme rengi"
                },
                channelPingColor: {
                    label: "Kanal Ping Rengi",
                    description: "Kanal etiketleme rengi"
                },
                soundPath: {
                    label: "Ses Yolu",
                    description: "Bildirim sesi (default/warning/error)"
                },
                timeout: {
                    label: "Zaman Aşımı",
                    description: "Bildirim süresi (saniye)"
                },
                lengthBasedTimeout: {
                    label: "Mesaj Uzunluk Tabanlı Süre",
                    description: "Süreyi mesaj uzunluğuna göre uzat"
                },
                opacity: {
                    label: "Opaklık",
                    description: "Bildirim opaklığı"
                },
                volume: {
                    label: "Ses",
                    description: "Ses seviyesi"
                }
            }
        },
        youtubeAdblock: {
            name: "YouTubeAdblock",
            description: "YouTube yerleştirmelerindeki ve WatchTogether aktivitesindeki reklamları AdGuard ile engeller"
        },
        youtubeDescription: {
            name: "YouTubeDescription",
            description: "YouTube video yerleştirmelerine açıklamalar ekler"
        }
    }
} as const;

export default translations;
