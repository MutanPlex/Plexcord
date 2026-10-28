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
                description: "Yapılandırdığın QuickCSS'i uygula"
            },
            enableReactDevtools: {
                label: "React Geliştirici Araçlarını Etkinleştir",
                description: "Çoğunlukla eklenti geliştiricileri için kullanışlıdır. Ne olduğunu bilmiyorsan görmezden gel"
            },
            mainWindowFrameless: {
                label: "Ana Pencere Çerçevesini Devre Dışı Bırak",
                description: "Daha temiz bir görünüm için yerel pencere çerçevesini çıkarın. Başlık çubuğu alanını sürükleyerek pencereyi hâlâ taşıyabilirsiniz."
            },
            frameless: {
                label: "Pencere çerçevesini devre dışı bırak",
                description: "Daha temiz bir görünüm için yerel pencere çerçevesini çıkarın. Başlık çubuğu alanını sürükleyerek pencereyi hâlâ taşıyabilirsiniz."
            },
            nativeTitleBar: {
                label: "Discord'un özel başlık çubuğu yerine Windows'un yerel başlık çubuğunu kullan",
                description: "Discord'un özel başlık çubuğunu standart Windows başlık çubuğuyla değiştirin. Bu, bazı pencere yönetimi araçlarıyla uyumluluğu geliştirebilir."
            },
            transparent: {
                label: "Pencere şeffaflığını etkinleştir",
                description: "Discord penceresini şeffaf yapın. Şeffaflığı destekleyen bir tema gereklidir, aksi takdirde hiçbir şey yapmaz.",
                isWindows: "Bu, pencerenin yeniden boyutlandırılmasını durduracak ve pencereyi ekran kenarlarına yapıştırmanızı önleyecektir.",
                notWindows: "Bu, pencerenin yeniden boyutlandırılmasını engelleyecektir."
            },
            winCtrlQ: {
                label: "Discord'u kapatmak için Ctrl+Q kısayolunu kaydet (Alt+F4'e alternatif)",
                description: "Discord'u kapatmak için klavye kısayolu olarak Ctrl+Q ekleyin. Bu, uygulamayı hızlı bir şekilde kapatmak için Alt+F4'e bir alternatif sağlar."
            },
            disableMinSize: {
                label: "Minimum pencere boyutunu devre dışı bırak",
                description: "Pencereyi Discord'un minimum boyutundan bile küçük olacak şekilde istediğin boyuta getirmeni sağlar"
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
                button: "Bağış",
                invite: "Discordumuza Katıl",
                invalid: "Geçersiz veya süresi dolmuş davet bağlantısı."
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
            description: "Plexcord'un Discord ile nasıl entegre olduğunu ve davrandığını yapılandırın. Bu ayarlar Discord istemcisinin görünümünü ve davranışını etkiler.",
            hintParts: {
                prefix: "{{pluginLink}} ayarlarını yapılandırarak, bu ayarlar bölümünün Discord ayarlar menüsünde nerede görüneceğini özelleştirebilirsiniz.",
                linkText: "Ayarlar Eklentisinin"
            }
        },
        notifications: {
            title: "Bildirimler",
            description: "Plexcord'un bildirimleri nasıl işleyeceğini yapılandırın. Uyarıları ne zaman ve nasıl alacağınızı özelleştirebilir veya geçmiş bildirimlerin geçmişini görüntüleyebilirsiniz.",
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
        windowsMaterial: {
            title: "Windows Arka Plan Materyali (Yeniden Başlatma Gerekir)",
            description: "Windows şeffaf arka plan efektleri. Şeffaflığı destekleyen bir tema kullanman gerekir, aksi halde hiçbir etkisi olmaz. Bu ayarı değiştirdikten sonra yeniden başlatma gerekir.",
            material: {
                none: "Yok",
                mica: "Mica (arka planı boyamak için sistem temasını ve masaüstü duvar kâğıdını kullanır)",
                tabbed: "Tabbed (daha güçlü arka plan renklendirmesine sahip Mica çeşidi)",
                acrylic: "Acrylic (yarı saydam bir arka plan için Discord'un arkasındaki pencereyi bulanıklaştırır)"
            }
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
        },
        tabs: {
            renderFailed: "{{tab}} sekmesi görüntülenemedi. Sorun devam ederse yükleyiciyle yeniden yüklemeyi dene!"
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
            remainingCount: "ve {{count}} daha",
            resetDefault: "Varsayılan ayarlara sıfırla",
            failed: "Bağımlılıklar başlatılamadı:",
            button: {
                restart: "Yeniden Başlat",
                later: "Sonra!",
                now: "Şimdi Yeniden Başlat",
                cancel: "İptal",
                disableWarning: "Uyarıları Devre Dışı Bırak",
                disableAll: "Tümünü Devre Dışı Bırak",
                reset: "Sıfırla",
                close: "Kapat"
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
            dev: "Plexcord'un Geliştirici sürümü",
            browser: "Plexcord'un Web Tarayıcı sürümü"
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
            disablePlugins: "Eklentileri Devre Dışı Bırak",
            disableText: "Tümünü Devre Dışı Bırak",
            irreversible: "BU EYLEM GERİ ALINAMAZ!",
            enableBack: "Devam etmek istediğinizden kesinlikle emin misiniz? Daha sonra tekrardan aktifleştirebilirsiniz.",
            undone: "Bu eylem geri alınamaz. Emin misin?",
            resetDescription: "{{pluginName}} eklenti ayarlarını varsayılan değerlerine sıfırlamak üzeresiniz.",
            disable: "{{enabledPlugins}} eklentiyi devre dışı bırakmak üzeresiniz!",
            confirmReset: "Onayla ve Sıfırla",
            cancel: "İptal",
            resetSettings: "Ayarları Sıfırla",
            resetText: "Sıfırla"
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
                api: "API Eklentileri",
                type: "Türe Göre Filtrele",
                tags: "Etiketlere Göre Filtrele",
                favorites: "Favorileri Göster"
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
            source: "Kaynak kodunu görüntüle",
            favorite: "Eklentiyi favorile - eklenti listesinin en üstüne sabitler",
            unfavorite: "Eklentiyi favorilerden çıkar"
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
                    audioPlayer: "Discord'un dahili ses dosyalarını veya harici ses bağlantılarını oynatmak için API.",
                    userArea: "Kullanıcı alanı paneline düğmeler eklemek için API.",
                    profileCollections: "Discord'un oyun koleksiyonu gibi kullanıcı profil paneline koleksiyonlar eklemek için API.",
                    profileSections: "Kullanıcı profili panellerinin 'Üyelik Tarihi' alanının yakınına bölümler eklemek için API.",
                    headerBar: "Başlık çubuğuna düğme eklemek için API.",
                    surfaceClasses: "Kararlı Discord düzen yüzeylerine eklentiye ait anlamsal veri öznitelikleri ve sınırlı props eklemek için API."
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
                    vencord: "Vencord Katılımcısı",
                    userPlugin: "Kullanıcı Eklentisi Katılımcısı"
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
            },
            button: "Etkinleştirilen eklentilerin butonları burada görünecektir."
        },
        invalidInput: "Geçersiz giriş",
        loading: "Yükleniyor...",
        authorPrefix: "Yapımcı:"
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
            failedExport: "Ayarları dışa aktarma başarısız oldu, konsolu kontrol edin",
            invalid: "Geçersiz Ayarlar. Bu gerçekten bir Plexcord Ayar dosyası mı?",
            tooLarge: "DataStore çok büyük - yedeklemede hariç tutuldu. Gerekirse 'Veri Depolarını Dışa Aktar' özelliğini kullanın.",
            clearSomeDate: "DataStore çok büyük. Lütfen bazı eklenti verilerini temizleyip tekrar deneyin."
        },
        settings: {
            text: "Yedeklemede neler var?",
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
        },
        backupFileType: "Plexcord Ayar Yedeği"
    },

    cloud: {
        text: "Cloud",
        title: "Ayar Senkronizasyonu",
        override: "Bulut Senkronizasyonu",
        description: "Plexcord ayarlarınızı buluta senkronize edin. Bu, manuel içe/dışa aktarma yapmadan yapılandırmanızı birden fazla cihaz arasında tutarlı şekilde korumanızı sağlar.",
        switchDescription: "Etkinleştirildiğinde, ayarlarınız buluta senkronize edilir. Aşağıdaki eylemleri kullanarak manuel senkronizasyon yapabilirsiniz.",
        settings: "Bulut Ayarları",
        successful: "Ayarlarınız başarıyla buluta senkronize edildi.",
        updated: "Ayarlarınız güncellendi! Değişikliklerin tam olarak uygulanması için buraya tıklayarak yeniden başlatın!",
        deleted: "Ayarlar buluttan silindi!",
        integration: {
            title: "Bulut Entegrasyonu",
            description: "Plexcord'un bulut entegrasyonu, ayarlarınızı birden fazla cihaz ve Discord kurulumu arasında senkronize etmenizi sağlar. Verileriniz güvenli bir şekilde saklanır ve istenildiği zaman kolayca geri yüklenebilir.",
        },
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
                    from: "Ayarlar buluttan senkronize edilemedi (API {{status}} döndü).",
                    manifest: "Silme işlemi için manifest alınamadı (API {{status}} döndürdü)."
                }
            },
            synchronize: {
                to: "Ayarlar buluta senkronize edilemedi ({{error}}).",
                from: "Ayarlar buluttan senkronize edilemedi ({{error}})."
            }
        },
        warning: {
            enableCloudIntegration: "Ayar senkronizasyonu özelliklerini kullanmak için yukarıdan bulut entegrasyonunu etkinleştirin."
        },
        danger: {
            title: "Tehlikeli Bölge",
            description: "Buluttaki tüm verilerinizi kalıcı olarak silin. Bu işlem geri alınamaz ve senkronize edilmiş tüm ayarları ve bulut altyapısında saklanan diğer tüm verileri kaldırır.",
            delete: {
                account: {
                    title: "Bulut Hesabını Sil",
                    description: "Bulut hesabınızı ve ilişkili tüm verileri kalıcı olarak silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
                    confirm: "Hesabı Sil",
                    cancel: "İptal"
                }
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
            confirm: "Şimdi Yeniden Başlat",
            later: "Sonra!"
        },
        privacy: "gizliliğinizi korur",
        source: "kaynak kodu",
        overview: "Plexcord, cihazlar arasında ayar senkronizasyonu gibi avantajlar sağlayan bulut entegrasyonu ile birlikte gelir. Bu {{privacy}} ve {{source}}, AGPL 3.0 lisansı ile sunulduğu için kendi sunucunuzda barındırabilirsiniz.",
        authorization: "Ayarların senkronizasyonu için buluta bağlanın. Henüz bulut entegrasyonunu ayarlamadıysanız bu, yetkilendirme isteyecektir.",
        backend: {
            title: "Bulut Sağlayıcısı",
            description: "Ayarlarınızın bulutta nasıl saklanacağını seçin. Varsayılan olarak Plexcord Cloud kullanılır, ancak isterseniz kendi self-hosted bulut servisinizi de yapılandırabilirsiniz.",
            invalid: "Geçersiz URL"
        },
        sync: {
            title: "Bu Cihaz İçin Senkronizasyon Kuralları",
            description: "Bu ayar, bu cihaz ile bulut arasındaki ayarların nasıl senkronize edileceğini belirler. Değişikliklerin her iki yönde de aktarılmasına izin verebilir veya tek bir tarafı ana kaynak olarak seçebilirsiniz.",
            direction: {
                both: "Çift yönlü senkronizasyon (değişiklikler her iki yönde de aktarılır)",
                push: "Bu cihaz kaynak (yalnızca yükleme)",
                pull: "Bulut kaynak (yalnızca indirme)",
                manual: "Otomatik senkronizasyon yapma (yalnızca aşağıdaki butonlar ile manuel senkronizasyon)"
            }
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
            show: "Notları göster",
            fetch: {
                title: "Değişiklikleri Getir",
                description: "Depoda yeni commitleri, eklenti güncellemelerini ve kod değişikliklerini kontrol edin. Bu, mevcut sürümünüzü en son sürümle karşılaştıracak ve size yenilikleri gösterecektir.",
                newCommit: "Bunlar, son sürümünüzden bu yana yapılan yeni commitler ve eklenti güncellemeleridir. Hangi özelliklerin eklendiğini, hangi hataların düzeltildiğini ve hangi eklentilerin güncellendiğini görebilirsiniz.",
                confirm: "Getir",
            }
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
        more: "+{{count}} yeni eklenti",
        error: {
            retrieveRepo: "Depo bilgileri alınamadı",
            fetchRepo: "Depodan veri alınamadı",
            connectRepo: "Depoya bağlanılamadı. İnternet bağlantını kontrol et."
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
            allowAll: "Tümüne İzin Ver ({{count}} alan adı)",
            url: "Engellenen URL'ler"
        },
        imgur: {
            direct: "Imgur bağlantıları {{etc}} biçiminde doğrudan bağlantılar olmalıdır.",
            copy: "Doğrudan bir bağlantı elde etmek için, resme sağ tıklayın ve 'Resim adresini kopyala' seçeneğini belirleyin."
        },
        notice: {
            allowHost: "Sunucuya İzin Ver",
            blocked: "{{host}} adresine bağlantılar engellendi. Güveniyorsanız bu sunucuya izin verin, ardından Discord'u yeniden başlatın.",
            imagesBlocked: "{{host}} adresinden gelen görseller engellendi. Güveniyorsanız bu sunucuya izin verin, ardından Discord'u yeniden başlatın.",
            failed: "Bu alan adına izin verilemedi."
        },
        wants: {
            caller: "{{callerName}} {{domain}} alanına bağlantılara izin vermek istiyor",
            unknown: "Bilinmeyen bir kaynak {{domain}} adresine bağlantılara izin vermek istiyor",
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
        management: "Tema Yönetimi",
        description: "Discord’un görünümünü temalarla özelleştirin. Yerel .css dosyaları ekleyin veya temaları doğrudan URL’lerden yükleyin. Dişli simgesi olan temalarda, değiştirebileceğiniz özelleştirilebilir ayarlar bulunur.",
        local: "Yerel Temalar",
        new: "YENİ",
        pinned: "Sabitlenmiş",
        stylus: "Stylus uzantısı",
        bd: "BetterDiscord Temaları",
        github: "GitHub",
        download: "Tema mı arıyorsunuz? {{bd}} sitesine göz atın veya {{github}} üzerinde arama yapın. BetterDiscord’tan indirirken “Download” butonuna tıklayın ve .theme.css dosyasını tema klasörünüze yerleştirin.",
        add: "Ekle",
        reset: "Ayarları varsayılana sıfırla",
        notCSS: "CSS dosyası değil. Ham (raw) bağlantıyı kullandığınızdan emin olun!",
        okay: "Tamam!",
        checking: "Kontrol ediliyor...",
        valid: "Geçerli!",
        upload: "Tema Yükle",
        openFolder: "Tema Klasörünü Aç",
        loadMissing: "Eksik Temaları Yükle",
        editQuickCSS: "QuickCSS’i Düzenle",
        editClient: "ClientTheme’i Düzenle",
        website: "Web Sitesini Aç",
        discord: "Discord Sunucusu",
        downloadTheme: "İndir",
        refresh: "Yenile",
        delete: "Sil",
        activation: {
            title: "Tema etkinleştirme",
            always: "Her zaman açık",
            lightOnly: "Sadece açık tema",
            darkOnly: "Sadece koyu tema"
        },
        actions: {
            pin: "Sabitle",
            unpin: "Sabitlemeyi kaldır",
            editSettings: "Ayarları düzenle"
        },
        unknown: {
            title: "Bilinmiyor",
            author: "Bilinmeyen Yazar",
            theme: "Discord Teması",
            description: "Açıklama belirtilmemiş."
        },
        required: "Aşağıdaki eklentiler gereklidir ancak etkin değil: ",
        homepage: "Ana Sayfa",
        support: "Destek",
        online: {
            title: "Çevrimiçi Temalar",
            description: "Temaları yerel dosyalar yerine doğrudan URL’lerden yükleyin. Çevrimiçi temalar, kaynak değiştiğinde otomatik olarak güncellenir; böylece manuel indirme yapmadan her zaman en güncel sürümü kullanırsınız.",
            enable: "Çevrimiçi Temaları Etkinleştir",
            enableDescription: "Çevrimiçi tema yüklemeyi aç/kapat. Devre dışı bırakıldığında tüm çevrimiçi temalar kapatılır ve yeni çevrimiçi tema ekleyemezsiniz.",
            placeholder: "https://ornek.com/tema.css"
        },
        quickActions: {
            title: "Hızlı İşlemler",
            description: "Temalarınızı yönetmek için kısayollar. Yeni temalar eklemek için tema klasörünü açın, hızlı stil düzenlemeleri için QuickCSS kullanın veya değişikliklerden sonra temaları yeniden yükleyin."
        },
        error: {
            userscript: "Userscript üzerinde temalar desteklenmemektedir!",
            stylus: "Bunun yerine {{stylus}} ile temaları yükleyebilirsiniz!",
            expired: "Geçersiz veya süresi dolmuş bağlantı",
            text: "Hata:"
        },
        copy: {
            url: "URL’yi Kopyala",
            copied: "Tema URL’si kopyalandı!",
            settings: "Tema ayarlarını kopyala",
            copiedSettings: "Tema ayarları panoya kopyalandı."
        },
        paste: {
            settings: "Tema ayarlarını yapıştır",
            empty: "Panonuz boş.",
            invalid: "Panonuzda geçerli ayar verisi yok.",
            pasted: "Tema ayarları panodan yapıştırıldı."
        },
        settings: {
            for: "{{themeName}} için ayarlar",
        },
        installed: {
            title: "Yüklü Temalar",
            description: "Temalarınızı buradan yönetin. Yerel temalar tema klasörünüzden, çevrimiçi temalar URL’lerden yüklenir. Dişli simgesi olan temalarda özelleştirilebilir ayarlar bulunur.",
            count: "{{count}} tema yüklü ({{localCount}} yerel, {{onlineCount}} çevrimiçi) · {{enabledCount}} etkin",
            search: "Tema ara...",
            loading: "Temalar yükleniyor...",
            none: "Henüz yüklü tema yok. Başlamak için tema dosyalarını tema klasörünüze ekleyin veya yukarıdan bir çevrimiçi tema ekleyin.",
            noCriteria: "Arama veya filtre kriterlerinize uyan tema bulunamadı."
        },
        filter: {
            all: "Tümünü Göster",
            online: "Çevrimiçi Temalar",
            local: "Yerel Temalar",
            enabled: "Etkin",
            disabled: "Devre Dışı"
        },
        notification: {
            refresh: {
                title: "Tema Yenilendi",
                error: "Tema yenilenemedi"
            },
            failed: {
                download: "Tema indirilemedi"
            }
        },
        openInFolder: "Klasörde Aç",
        fallback: {
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
        repaired: "Plexcord onarıldı!",
        ok: "Tamam",
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
        loading: "Yükleniyor...",
        unknownAuthor: "Bilinmeyen Yazar"
    },

    components: {
        error: {
            title: "Ah hayır!",
            render: "Bu bileşen render edilirken bir hata oluştu. Daha fazla bilgiyi aşağıda ve konsolunuzda bulabilirsiniz."
        },
        componentFailed: {
            message: "Ah! Bu sayfa render edilemedi. Ancak, bunu düzeltebilecek bir güncelleme mevcut. Şimdi güncellemek ve yeniden başlatmak ister misiniz?"
        },
        quickCSS: {
            title: "QuickCSS Düzenleyicisini Açık",
            message: "QuickCSS düzenleyicisi arka planda hala açık.",
            detail: "Discord'u yine de kapatmak istiyor musunuz? Bu işlem QuickCSS düzenleyiciyi de kapatacaktır.",
            cancel: "İptal",
            close: "Yine de Kapat",
            windowTitle: "Plexcord QuickCSS Düzenleyicisi"
        },
        messagePopover: {
            scrollLeft: "Sola kaydır",
            scrollRight: "Sağa kaydır"
        },
        notices: {
            error: "Bildirim gösterilirken hata oluştu"
        },
        tray: {
            aboutPlexcord: "Plexcord Hakkında",
            updatePlexcord: "Plexcord'u Güncelle",
            noUpdateTitle: "Güncelleme Yok",
            noUpdateBody: "Zaten Plexcord'un en son sürümünü kullanıyorsun.",
            updateFailedTitle: "Güncelleme Başarısız",
            updateFailedBody: "Plexcord güncellemesi uygulanamadı.",
            updateSuccessTitle: "Güncelleme Başarılı",
            updateSuccessBody: "Güncellemeyi uygulamak için Plexcord yeniden başlatılıyor.",
            updateErrorTitle: "Güncelleme Hatası",
            updateErrorBody: "Plexcord güncellenirken bir hata oluştu.\n\n{{error}}",
            openSettingsFolder: "Ayarlar Klasörünü Aç",
            openThemesFolder: "Temalar Klasörünü Aç"
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
        },
        detectLanguage: "Dili algıla"
    },

    plugin: {
        tags: {
            accessibility: "Erişilebilirlik",
            activity: "Etkinlik",
            appearance: "Görünüm",
            chat: "Sohbet",
            commands: "Komutlar",
            console: "Konsol",
            customisation: "Özelleştirme",
            developers: "Geliştiriciler",
            emotes: "İfadeler",
            friends: "Arkadaşlar",
            fun: "Eğlence",
            media: "Medya",
            notifications: "Bildirimler",
            organisation: "Organizasyon",
            privacy: "Gizlilik",
            reactions: "Tepkiler",
            roles: "Roller",
            servers: "Sunucular",
            shortcuts: "Kısayollar",
            utility: "Araçlar",
            voice: "Ses"
        },
        concatenatedComponentExtractor: {
            name: "ConcatenatedComponentExtractor",
            description: "Paketleyici (bundler) tarafından birleştirilmiş bileşenleri ayıklar"
        },
        concatenatedModules: {
            name: "ConcatenatedModules",
            description: "Paketleyici (bundler) tarafından birleştirilmiş modülleri ayıklar"
        },
        noTrack: {
            name: "NoTrack",
            description: "Discord'un takip sistemini (analitik/'science'), metriklerini ve Sentry çökme raporlamasını devre dışı bırakır",
            option: {
                disableAnalytics: {
                    label: "Analizi Kapat",
                    description: "Discord'un izleme analizlerini engeller. Rozetlerin ilerlemeni takip etmesini istiyorsan (örn: yayın saatleri) bunu kapat."
                },
                disableStackDumping: {
                    description: "Discord çöktüğünde konsola yerel yığın izi yazdır. Tam yeniden başlatma gerektirir."
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
                },
                includePlexcordInfoWhenCopying: {
                    label: "Kopyalarken Plexcord Bilgilerini Dahil Et",
                    description: "Ayarlar sayfasının sol alt kısmındaki sürüm bilgilerine tıklandığında Plexcord bilgilerini de (Plexcord, Electron, Chromium) kopyalar"
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
                    dismiss: "Ne yaptığını biliyorsan veya güncelleyemiyorsan bu uyarıyı kapatabilirsin.",
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
                failedOpenInvite: "Davet açılamadı, lütfen konsolu kontrol edin :(",
                upload: "Eklenti listesi başarıyla yüklendi!",
                failedUpload: "Eklenti listesi dosyası yüklenemedi. Lütfen tekrar deneyin.",
                unableGenerate: "Eklenti listesi oluşturulamadı."
            },
            dm: {
                warning: "Lütfen destek için Plexcord eklenti geliştiricilerine özel mesaj göndermeyin!{{br}}Bunun yerine {{support}} sunucusuna katılarak Plexcord destek kanalını kullanabilirsiniz: {{channel}}"
            },
            alert: {
                title: "Uyarı: Çok Fazla Eklenti",
                paragraph1: "100'den fazla eklentinin etkinleştirildiğini fark ettik.",
                paragraph2: "Eklentilerin sayısı nedeniyle destek alamayabilirsiniz.",
                paragraph3: "Sorununuz büyük olasılıkla eklenti çakışmalarından kaynaklanıyor olabilir.",
                paragraph4: "Sorunu çözmek için bazı eklentileri devre dışı bırakmayı düşünün.",
                paragraph5: "Eklenti listeniz bir metin dosyası olarak gönderilecek.",
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
        alwaysExpandProfiles: {
            name: "alwaysExpandProfiles",
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
        animalese: {
            name: "Animalese",
            description: "Gönderilen her mesaj için animalese sesi çalar (çok fazla yaparlar)",
            option: {
                volume: {
                    label: "Ses Seviyesi",
                    description: "Animalese sesinin seviyesi"
                },
                speed: {
                    label: "Hız",
                    description: "Animalese sesinin hızı"
                },
                pitch: {
                    label: "Ton",
                    description: "Ton çarpanı"
                },
                messageLengthLimit: {
                    label: "Mesaj Uzunluğu Sınırı",
                    description: "İşlenecek maksimum mesaj uzunluğu"
                },
                processOwnMessages: {
                    label: "Kendi Mesajlarını İşle",
                    description: "Kendi mesajlarını da seslendirmek için etkinleştir"
                },
                soundQuality: {
                    label: "Ses Kalitesi",
                    description: "Kullanılacak ses kalitesi",
                    high: "Yüksek",
                    med: "Orta",
                    low: "Düşük",
                    lowest: "En Düşük"
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
                    timestamp: "Zaman Damgası",
                    date: "Tarih"
                },
                randomisedLength: {
                    label: "Rastgeleleştirme uzunluğu",
                    description: "Rastgele karakter uzunluğu"
                },
                consistent: {
                    label: "Tutarlı anonimleştirme",
                    description: "Tutarlı anonimleştirme için gizli anahtar"
                },
                dateFormat: {
                    description: "Tarih biçimi (YYYY, MM, DD, HH, mm, ss, SSS desteklenir)",
                    label: "Tarih Biçimi"
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
        autoZipper: {
            name: "AutoZipper",
            description: "Belirtilen dosya türlerini ve klasörleri Discord’a yüklemeden önce otomatik olarak zipler",
            option: {
                extensions: {
                    label: "Uzantılar",
                    description: "Otomatik olarak ziplenmesi istenen dosya uzantılarının virgülle ayrılmış listesi (örn. .psd,.blend,.exe,.dmg)"
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
            },
            text: {
                smallText: "Küçük Metin",
                largeText: "Büyük Metin"
            }
        },
        betterAudioPlayer: {
            name: "BetterAudioPlayer",
            description: "Ses eki oynatıcılarına spektrograf ve osiloskop görselleştiricisi ekler",
            option: {
                oscilloscope: {
                    label: "Osiloskop",
                    description: "Osiloskop görselleştiricisini etkinleştir"
                },
                spectrograph: {
                    label: "Spektrograf",
                    description: "Spektrograf görselleştiricisini etkinleştir"
                },
                oscilloscopeSolidColor: {
                    label: "Osiloskop Düz Renk",
                    description: "Osiloskop için gradyan yerine düz renk kullan"
                },
                oscilloscopeColor: {
                    label: "Osiloskop Rengi",
                    description: "Düz renk etkinleştirildiğinde osiloskobun rengi"
                },
                spectrographSolidColor: {
                    label: "Spektrograf Düz Renk",
                    description: "Spektrograf için gradyan yerine düz renk kullan"
                },
                spectrographColor: {
                    label: "Spektrograf Rengi",
                    description: "Düz renk etkinleştirildiğinde spektrografın rengi"
                }
            },
            toast: {
                invalidColorFormat: "{{settingKey}} için geçersiz renk formatı, 'R, G, B' veya '#RRGGBB' formatında olduğundan emin olun",
                invalidColorFormatFor: "{{key}} için geçersiz renk biçimi, \"R, G, B\" veya \"#RRGGBB\" kullan"
            }
        },
        betterBackreading: {
            name: "BetterBackreading",
            description: "Mesajları daha erken yükleyerek ve daha az geri sıçramayla geçmiş mesajları okumayı iyileştirir.",
            wholeNumber: "{{min}} ile {{max}} arasında bir tam sayı gir.",
            option: {
                imageScrollMargin: {
                    label: "Görsel Ön Yükleme Mesafesi",
                    description: "Görsellerin piksel cinsinden ne kadar önceden yükleneceği (300-3000)."
                },
                messageLoadBuffer: {
                    label: "Mesaj Yükleme Tamponu",
                    description: "Daha fazla mesajın piksel cinsinden ne kadar önceden getirileceği (500-3000)."
                },
                useDiscordMessageCount: {
                    label: "Discord'un Dinamik Mesaj Sayısını Kullan",
                    description: "Pencere ve sohbet ayarlarına göre kaç mesaj getirileceğini Discord seçsin."
                },
                messageCount: {
                    label: "Özel Mesaj Sayısı",
                    description: "Dinamik sayı kapalıyken her geçmiş isteğinde kaç mesaj getirileceği (30-100)."
                },
                channelOpenScrollMode: {
                    label: "Kanal Açılış Konumu",
                    description: "Okunmamış kanalları kayıtlı konumda (veya en altta) aç, her zaman en altta aç ya da varsayılan okunmamış davranışına bırak.",
                    default: "Discord Varsayılanı",
                    bottom: "Her Zaman En Alt",
                    saved: "Kayıtlı Konum"
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
            add: "Başka bir neden ekle",
            duration: {
                discordDefault: "Discord varsayılanı",
                none: "Hiçbirini silme",
                hour1: "Son 1 saat",
                hours6: "Son 6 saat",
                hours12: "Son 12 saat",
                hours24: "Son 24 saat",
                days3: "Son 3 gün",
                days7: "Son 7 gün"
            },
            text: {
                autoDeleteDuration: "Mesajları otomatik silme süresi"
            }
        },
        betterBlockedUsers: {
            name: "BetterBlockedUsers",
            description: "Engellenen kullanıcılar listesinde arama yapmanızı sağlar, ayarlarda isimleri seçilebilir yapar, engellenen profil uyarısını atlar ve engellenen / yok sayılan mesajları gruplar.",
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
                    description: "Komut girişlerinde yeni satırlara izin ver (CTRL + Shift + Enter)"
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
                enableNestedFolders: {
                    label: "İç İçe Klasörleri Etkinleştir",
                    description: "Sürükleyerek klasörleri başka klasörlerin içine yerleştirmeye izin verir"
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
            description: "GIF seçicisinin varsayılan olarak favori kategorisini açmasını sağlar",
            option: {
                keepOpen: {
                    label: "Seçici Açık Kalsın",
                    description: "GIF seçicisinin bir GIF seçtikten sonra açık kalmasını sağlar"
                }
            }
        },
        betterInvites: {
            name: "BetterInvites",
            description: "Davetlerin son kullanma tarihini gör, davet edenin profilini görüntüle ve katılmadan önce sunucuları önizle (isme tıklayarak)",
            render: {
                tip: "Bu davet {{time}} sonra sona erecek",
                header: "{{name}} seni {{server}} sunucusuna davet etti",
                headerSelf: "{{server}} sunucusuna katılmak için bir davet gönderdin",
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
        betterRoleContext: {
            name: "BetterRoleContext",
            description: "Kullanıcı profilinde veya üye listesinde rollere sağ tıkladığında rol rengini kopyalama / rolü düzenleme / rol simgesini görüntüleme seçenekleri ekler",
            option: {
                roleIconFileFormat: {
                    label: "Rol Simge Dosya Formatı",
                    description: "Rol simgelerini görüntülerken kullanılacak dosya formatı"
                }
            },
            context: {
                copyColor: "Rol Rengini Kopyala",
                editRole: "Rolü Düzenle",
                viewIcon: "Rol Simgesini Görüntüle",
                viewMembers: "Rol Üyelerini Görüntüle"
            },
            text: {
                roleActions: "Rol İşlemleri"
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
            regexHelper: {
                title: "Regex Yardımcısı",
                placeholder: "Test edilecek metin...",
                noPatterns: "Hiç kalıp ayarlanmadı"
            },
            option: {
                blockedWords: {
                    label: "Engellenen Kelimeler",
                    description: "Virgülle ayrılmış engellenecek kelimeler listesi"
                },
                useRegex: {
                    label: "Regex Kullan",
                    description: "Mesaj içeriğini kontrol ederken her değeri düzenli ifade olarak kullan (gelişmiş)"
                },
                regexHelper: {
                    label: "Regex Yardımcısı",
                    description: "Düzenli ifadelerini örnek bir metin üzerinde test et"
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
        bypassPinPrompt: {
            name: "BypassPinPrompt",
            description: "Pin işlevlerini kullanırken pin istemini atlar"
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
                respectSilentPings: {
                    label: "Sessiz Pinglere Saygı Göster",
                    description: "Sessiz pinglere saygı göster (@silent / bildirimleri bastır)"
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
            },
            text: {
                unknownUser: "Bilinmeyen Kullanıcı"
            }
        },
        callTimer: {
            name: "CallTimer",
            description: "Tüm sesli aramalarda çağrı zamanlayıcılarını gösterir",
            option: {
                format: {
                    label: "Format",
                    description: "Kompakt veya insan tarafından okunabilir format",
                    human: "30g 23s 00d 42s"
                },
                allCallTimers: {
                    label: "Tüm Çağrı Zamanlayıcıları",
                    description: "Sunuculardaki tüm kullanıcılar için çağrı zamanlayıcılarını göster"
                },
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
                selectedBorder: "Seçili Sekme Vurgu Kenarlığı",
                selectedBackground: "Seçili Sekme Arka Plan Rengi",
                tabShadows: "Sekme Gölge Efektleri",
                tabRepositioning: "Sekme Yeniden Konumlandırma (yumuşak geçiş)",
                resizeHandle: "Yeniden Boyutlandırma Tutacağı Solma",
                questActivate: "Etkin Görevler Gradyanı"
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
                searchPlaceholder: "Yer imlerinde ara",
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
                cancel: "İptal",
                reset: "Sıfırla",
                close: "Kapat"
            },
            context: {
                label: "ChannelTabs Bağlam Menüsü",
                bookmark: "ChannelTabs Yer İmi Bağlam Menüsü",
                tab: "ChannelTabs Sekme Bağlam Menüsü",
                folderMenu: "Yer İmi Klasör Menüsü",
                compact: "Kompakt",
                bookmarkBar: "Yer İmi Çubuğu",
                openAll: "Tüm Yer İmlerini Aç",
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
                },
                folderIcon: {
                    title: "Klasör İkonu Seç",
                    preview: "Önizleme",
                    iconColor: "İkon Rengi",
                    search: "Ara",
                    searchPlaceholder: "{{count}} ikon içinde ara...",
                    folderName: "Klasör Adı",
                    folderColor: "Klasör Rengi",
                    folderIcon: "Klasör İkonu",
                    chooseIcon: "İkon Seç",
                    useDefaultIcon: "Varsayılan İkonu Kullan"
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
                persistUnreadCountFallback: {
                    label: "Okunmamış Sayı Yedeğini Kalıcı Yap",
                    description: "Sekmeler ve yer imleri için okunmamış rozet yedeklerini yeniden yüklemeler arasında koru"
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
                tabHeightScale: {
                    label: "Sekme Yüksekliği Ölçeği",
                    description: "Sekme yüksekliği ölçeği (yüzde olarak)."
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
                    shortcutDisabled: "Bu kısayol şu anda devre dışı",
                    pressKey: "Herhangi bir tuşa basın...",
                    conflictError: "Bu tuş kombinasyonu zaten kullanılıyor: {{key}}",
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
            },
            text: {
                folder: "Klasör"
            }
        },
        characterCounter: {
            name: "CharacterCounter",
            description: "Sohbet girişine karakter sayacı ekler",
            option: {
                colorEffects: {
                    label: "Renk Efektleri",
                    description: "Karakter sınırına yaklaşırken renk efektlerini aç veya kapat"
                }
            }
        },
        cleanChannelGroups: {
            name: "CleanChannelGroups",
            description: "Sadece daraltılmış kategorilerdeki tüm kanalları gizler, okunmamış mesajlar olsa bile."
        },
        cleanChannelName: {
            name: "CleanChannelName",
            description: "Kanal adlarından emoji ve süslemeleri kaldırır. Kanalı düzenlerken orijinaline döner.",
            option: {
                ignoredChannels: {
                    description: "Dokunulmayacak kanal kimliklerinin virgülle ayrılmış listesi.",
                    label: "Yok Sayılan Kanallar"
                }
            },
            text: {
                keepOriginalName: "Orijinal Adı Koru"
            }
        },
        clearURLs: {
            name: "ClearURLs",
            description: "Gönderdiğiniz URL'lerden izleme öğelerini otomatik olarak kaldırır"
        },
        clickableRoles: {
            name: "ClickableRoles",
            description: "Kullanıcı profillerinde ve üye listesinde roller üzerinde tıklayarak üyelerin hangi rolleri aldığını görebilirsiniz.",
            modal: {
                loading: "Üyeler yükleniyor...",
                noMembers: "Hiç üye bulunamadı.",
                unknown: "Bilinmeyen Rol",
                andMore: "ve {{count}} kişi daha"
            }
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
            },
            text: {
                dark: "Koyu",
                light: "Açık"
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
            name: "Komut Paleti",
            description: "Discord'un her yerinde işlem çalıştırmak için Raycast tarzı komut paleti",
            action: {
                command: {
                    label: "Komutu Çalıştır",
                    description: "Başka bir palet komutunu ID ile çalıştırır. Tanımlayıcıdan emin değilseniz seçiciyi kullanın."
                },
                settings: {
                    label: "Ayarlar Sayfasını Aç",
                    description: "Doğrudan bir Discord ayar sayfasına gider. Seçiciden bir sayfa seçin."
                },
                url: {
                    label: "URL Aç",
                    description: "Bir bağlantı açar. En iyi uyumluluk için https:// bağlantılarını kullanın."
                },
                macro: {
                    label: "Makro Çalıştır",
                    description: "Bir dizi komutu sırayla çalıştırır. Seçici aracılığıyla adımlar ekleyin."
                }
            },
            category: {
                auto: "Otomatik (varsayılan yerleşimi kullan)",
                default: {
                    label: "Hızlı İşlemler",
                    description: "Yaygın Plexcord kısayolları"
                },
                plugins: {
                    label: "Eklentiler",
                    description: "Plexcord eklentilerini etkinleştirir, devre dışı bırakır ve yapılandırır",
                    enable: {
                        label: "Eklentileri Etkinleştir"
                    },
                    disable: {
                        label: "Eklentileri Devre Dışı Bırak"
                    },
                    settings: {
                        label: "Eklenti Ayarları"
                    },
                    toolbox: {
                        label: "Eklenti Eylemleri"
                    },
                    chatbar: {
                        label: "Sohbet Çubuğu Düğmeleri"
                    },
                    changes: {
                        label: "Eklenti Değişiklikleri"
                    }
                },
                context: {
                    label: "Mevcut Bağlam",
                    description: "Seçili kanal ve sunucu için işlemler"
                },
                updates: {
                    label: "Güncellemeler",
                    description: "Plexcord ile güncel kalın"
                },
                discordSettings: {
                    label: "Discord Ayarları",
                    description: "Discord yapılandırma sayfalarına git"
                },
                custom: {
                    label: "Özel Komutlar",
                    description: "Kullanıcı tanımlı komut paleti girişleri"
                },
                sessions: {
                    label: "Oturum Araçları",
                    description: "Discord oturumunuzu yönetmek için araçlar"
                },
                guilds: {
                    label: "Sunucular",
                    description: "Sunucularınıza hızlıca gidin"
                },
                friends: {
                    label: "Arkadaşlar",
                    description: "Arkadaşlarınıza hızlıca gidin"
                },
                action: {
                    label: "Eylem",
                }
            },
            builtIn: {
                open: {
                    settings: {
                        plexcord: "Plexcord Ayarlarını Aç",
                        plugin: "Eklenti Ayarlarını Aç"
                    }
                },
                reload: {
                    label: "Discord'u Yeniden Yükle",
                    description: "Mevcut Discord penceresini yeniden yükler"
                }
            },
            command: {
                enable: "{{pluginName}} Etkinleştir",
                enabled: "{{pluginName}} Etkinleştirildi",
                disable: "{{pluginName}} Devre Dışı Bırak",
                disabled: "{{pluginName}} Devre Dışı Bırakıldı",
                failed: "Komut başarısız oldu:",
                toggleFailed: "{{pluginName}} değiştirilemedi.",
                pluginSettings: "{{pluginName}} Ayarları",
                untitled: "Adsız Komut",
                new: "Yeni Komut",
                error: {
                    enter: "Bir komut ID'si girin veya aşağıdan seçin.",
                    noCommand: "Bu ID ile eşleşen komut yok."
                },
                discord: {
                    account: "Hesabımı Aç",
                    privacy: "Veri ve Gizlilik Aç",
                    notifications: "Bildirimleri Aç",
                    voice: "Ses ve Görüntü Aç",
                    text: "Metin ve Resimler Aç",
                    appearance: "Görünüm Aç",
                    accessibility: "Erişilebilirlik Aç",
                    keybinds: "Tuş Atamalarını Aç",
                    advanced: "Gelişmiş Ayarları Aç",
                },
                updates: {
                    check: {
                        label: "Güncellemeleri Kontrol Et",
                        description: "Plexcord güncellemelerini denetle",
                        one: "Bir güncelleme mevcut",
                        multiple: "{{count}} güncelleme mevcut",
                        none: "Güncelleme yok",
                        failed: "Güncellemeler kontrol edilemedi."
                    },
                    changelog: {
                        label: "Değişiklik Günlüğünü Görüntüle",
                        description: "Plexcord değişiklik günlüğünü açar"
                    }
                },
                read: {
                    mark: {
                        label: "{{channelLabel}} Okundu İşaretle"
                    }
                },
                pin: {
                    open: {
                        label: "{{channelLabel}} Sabitlemelerini Aç"
                    },
                    toggle: {
                        label: "Son Komutta Sabitlemeyi Aç/Kapat"
                    }
                },
                channel: {
                    mute: {
                        label: "{{channelLabel}} Sustur",
                        oneHour: "{{channelLabel}} kanalını 1 saatliğine sustur",
                        untilTomorrow: "{{channelLabel}} kanalını yarına kadar sustur",
                    },
                    unmute: {
                        label: "{{channelLabel}} Susturmasını Kaldır",
                    },
                    reopen: {
                        label: "Son Kapatılan DM'yi Yeniden Aç"
                    },
                    dm: {
                        open: {
                            label: "{{userLabel}} ile DM Aç"
                        }
                    }
                },
                guild: {
                    settings: {
                        label: "{{guildLabel}} Ayarlarını Aç"
                    },
                    navigate: {
                        label: "{{guildLabel}} Sunucusuna Git"
                    }
                },
                session: {
                    thirtyMinutesDnd: "30 dakika Rahatsız Etmeyin",
                    oneHourDnd: "1 saat Rahatsız Etmeyin",
                    cancelStatusReset: "Durum Zamanlayıcısını İptal Et"
                },
                status: {
                    set: {
                        online: "Durum Ayarla: Çevrimiçi",
                        idle: "Durum Ayarla: Boşta",
                        dnd: "Durum Ayarla: Rahatsız Etmeyin",
                        invisible: "Durum Ayarla: Görünmez"
                    }
                },
                toggle: {
                    streamer: "Yayıncı Modunu Aç/Kapat",
                    mute: "Kendini Susturmayı Aç/Kapat",
                    deafen: "Kendini Sağırlaştırmayı Aç/Kapat",
                },
                notification: {
                    clear: {
                        label: "Masaüstü Bildirimlerini Temizle"
                    }
                },
                palette: {
                    settings: {
                        label: "Komut Paleti Ayarlarını Aç",
                        description: "Komut Paleti eklentisini yapılandır"
                    }
                },
                recent: {
                    label: "Son Komutları Göster",
                    description: "Son yürütülen komutları görüntüler",
                    rerun: "Son Komutu Tekrar Çalıştır"
                },
                plugin: {
                    reload: {
                        label: "Tüm Eklentileri Yeniden Yükle",
                        description: "Etkin olan her eklentiyi anında yeniden yüklemeyi dener"
                    },
                    enable: {
                        label: "Tüm Eklentileri Etkinleştir"
                    },
                    disable: {
                        label: "Gerekli Olmayan Tüm Eklentileri Devre Dışı Bırak"
                    },
                    restart: {
                        label: "Plexcord'u Yeniden Başlat",
                        description: "Discord istemci penceresini yeniden yükler"
                    }
                },
                quickCSS: {
                    label: "Hızlı CSS'i Aç/Kapat"
                },
                transparentity: {
                    label: "Pencere Şeffaflığını Aç/Kapat"
                },
                theme: {
                    open: {
                        label: "İstemci Tema Ayarlarını Aç"
                    }
                }
            },
            modal: {
                searchPlaceholder: "Komut ara",
                noCommand: "Komut bulunamadı",
                add: {
                    title: "Komut Ekle"
                },
                choose: {
                    title: "Komut Seç"
                },
                command: {
                    palette: {
                        label: "Komut Paleti",
                        placeholder: "Bir komut yazın",
                        filtering: "{{tags}} ile filtreleniyor",
                        noCommand: "Komut bulunamadı",
                        pin: "Komutu sabitle",
                        unpin: "Sabitlemeyi kaldır"
                    },
                    target: {
                        label: "Hedef Komut ID'si",
                        placeholder: "Komut ID'si girin",
                        choose: "Komut Seç"
                    },
                    custom: {
                        label: "Özel Komutlar",
                        description: "1) Komutu adlandır · 2) İsteğe bağlı açıklama/anahtar kelime/etiket/kategori ekle · 3) Bir eylem seç ve detayları doldur (Takma adlar ve makrolar için ID'ler mevcut palet komutlarıyla eşleşmelidir).",
                        auto: "Otomatik (varsayılan)",
                        expand: "Genişlet",
                        collapse: "Daralt",
                        collapsed: {
                            label: "Etiket",
                            description: "Görünen Ad",
                            advanced: {
                                hide: "Gelişmiş seçenekleri gizle",
                                show: "Gelişmiş seçenekleri göster"
                            },
                            subtitle: {
                                label: "Açıklama",
                                placeholder: "İsteğe bağlı alt başlık"
                            },
                            keywords: {
                                label: "Anahtar Kelimeler",
                                placeholder: "Virgülle ayrılmış anahtar kelimeler"
                            },
                            tags: {
                                label: "Etiketler",
                                placeholder: "Virgülle ayrılmış etiketler"
                            },
                            suggestion: {
                                label: "Öneri"
                            },
                            chooseCommand: {
                                label: "Bu komutun palette nerede görüneceğini seçin."
                            },
                            danger: {
                                label: "Tehlikeli olarak göster"
                            }
                        },
                        remove: "Komutu Kaldır",
                        add: "Komut Ekle"
                    }
                },
                settings: {
                    noSelected: "Sayfa seçilmedi",
                    current: "Mevcut Sayfa",
                    choose: "Sayfa Seç..."
                },
                url: {
                    url: "URL",
                    error: "http:// veya https:// bağlantıları kullanın.",
                    valid: "Geçerli bir URL girin.",
                    open: {
                        external: "Harici olarak aç",
                    }
                },
                macro: {
                    sequence: {
                        label: "Komut Dizisi",
                        placeholder: "komut-a, komut-b"
                    },
                    addStep: "Adım Ekle",
                    unknownId: "Bilinmeyen Komut ID'leri"
                }
            },
            status: {
                online: "Çevrimiçi",
                idle: "Boşta",
                dnd: "Rahatsız Etmeyin",
                invisible: "Görünmez"
            },
            tag: {
                core: "Çekirdek",
                navigation: "Gezinme",
                utility: "Araç",
                developer: "Geliştirici",
                customization: "Özelleştirme",
                plugins: "Eklentiler",
                session: "Oturum",
                context: "Bağlam",
                custom: "Özel",
                guilds: "Sunucular",
                friends: "Arkadaşlar",
                other: "Diğer"
            },
            toast: {
                chat: {
                    button: {
                        unableToFind: "'{{label}}' sohbet butonu bulunamadı.",
                        failedToTrigger: "{{label}} tetiklenemedi.",
                        activated: "{{label}} etkinleştirildi."
                    }
                },
                channel: {
                    mute: {
                        unavailable: "Kanal susturma kontrolleri kullanılamıyor",
                        muted: "Kanal susturuldu.",
                        unmuted: "Kanalın susturması kaldırıldı.",
                        failed: "Kanal susturma durumu güncellenemedi."
                    },
                    dm: {
                        no: "Bu oturumda kaydedilen DM kapatma işlemi yok.",
                        reOpened: "Son kapatılan DM yeniden açıldı.",
                        noAvailable: "DM artık mevcut değil."
                    }
                },
                command: {
                    loop: "Makro yürütülmesinde komut döngüsü algılandı.",
                    notFound: "{{commandId}} komutu bulunamadı.",
                    unsupported: "Desteklenmeyen özel komut eylemi.",
                    failedToRun: "{{label}} çalıştırılamadı.",
                    notMetadata: "Komut Paleti eklenti meta verileri kullanılamıyor."
                },
                guild: {
                    mute: {
                        unavailable: "Sunucu susturma kontrolleri kullanılamıyor",
                        muted: "Sunucu susturuldu.",
                        unmuted: "Sunucunun susturması kaldırıldı.",
                        failed: "Sunucu susturma durumu güncellenemedi."
                    },
                    settings: {
                        unable: "Sunucu ayarları açılamıyor.",
                    }
                },
                panel: {
                    pin: {
                        unable: "Sabitleme paneli açılamıyor.",
                    }
                },
                status: {
                    reset: {
                        canceled: "Planlanan durum sıfırlaması iptal edildi.",
                        unableToChange: "Şu anda durum değiştirilemiyor.",
                        reverted: "Durum {{status}} olarak geri döndürüldü.",
                        dnd: "{{duration}} dakika boyunca Rahatsız Etmeyin."
                    },
                    change: {
                        unableToChange: "Şu anda durum değiştirilemiyor.",
                        changed: "Durum {{status}} olarak değiştirildi."
                    }
                },
                read: {
                    marked: "{{channelLabel}} okundu olarak işaretlendi.",
                    failed: "Kanal okundu olarak işaretlenemedi."
                },
                route: {
                    unable: "{{destination}} açılamıyor.",
                },
                notification: {
                    cleared: "Tüm bildirimler temizlendi.",
                    failed: "Bildirimler temizlenemedi.",
                    notSupported: "Bildirim temizleme desteklenmiyor."
                },
                streamerMode: {
                    enabled: "Yayıncı Modu etkinleştirildi.",
                    disabled: "Yayıncı Modu devre dışı bırakıldı.",
                },
                voice: {
                    micToggle: {
                        muted: "Mikrofon susturuldu.",
                        unmuted: "Mikrofon açıldı."
                    },
                    deafenToggle: {
                        deafened: "Artık sağırsınız.",
                        undeafened: "Artık sağır değilsiniz."
                    }
                },
                quickCSS: {
                    enabled: "Hızlı CSS etkinleştirildi.",
                    disabled: "Hızlı CSS devre dışı bırakıldı."
                },
                transparentity: {
                    enabled: "Pencere Şeffaflığı etkinleştirildi.",
                    disabled: "Pencere Şeffaflığı devre dışı bırakıldı."
                },
                plugin: {
                    disabled: {
                        label: "{{pluginName}} devre dışı.",
                        disable: "{{pluginName}} devre dışı. Bu eylemi kullanmak için eklentiyi etkinleştirin."
                    },
                    required: {
                        label: "{{pluginName}} yeniden yükleme için yeniden başlatma gerektiriyor."
                    },
                    stop: {
                        failed: "{{pluginName}} durdurulamadı."
                    },
                    restart: {
                        failed: "{{pluginName}} yeniden başlatılamadı."
                    },
                    reload: {
                        label: "{{pluginName}} yeniden yüklendi.",
                        noPlugin: "Hiçbir eklenti yeniden yüklenmedi.",
                        reloaded: "{{count}} eklenti yeniden yüklendi."
                    },
                    toggle: {
                        enabled: "{{changed}} eklenti etkinleştirildi.",
                        disabled: "{{changed}} eklenti devre dışı bırakıldı.",
                        noChanged: "Hiçbir eklentinin durumu değişmedi."
                    },
                    run: {
                        failed: {
                            label: "{{pluginName}} çalıştırılamadı: {{actionLabel}}."
                        }
                    }
                },
                commandDeleted: "Komut silindi.",
                statusSetToLabel: "Durum {{label}} olarak ayarlandı.",
                themeSetToLabel: "Tema {{label}} olarak ayarlandı.",
                noSettingsPageWas: "Bir ayarlar sayfası belirtilmedi.",
                unableToOpenLabel: "{{label_that_settings_page}} açılamadı.",
                failedToStartDependencies: "Bağımlılıklar başlatılamadı: {{join}}",
                messageSentToUsername: "{{username}} kullanıcısına mesaj gönderildi.",
                enabledRestart: "{{name}} etkinleştirildi. Uygulamak için yeniden başlat.",
                disabledRestart: "{{name}} devre dışı bırakıldı. Uygulamak için yeniden başlat.",
                enabled: "{{name}} etkinleştirildi.",
                disabled: "{{name}} devre dışı bırakıldı.",
                errorStarting: "{{name}} başlatılırken hata oluştu.",
                errorStopping: "{{name}} durdurulurken hata oluştu."
            },
            display: {
                channel: {
                    current: "Mevcut Kanal",
                    group: "Grup DM",
                    direct: "Direkt Mesaj"
                },
                guild: {
                    current: "Mevcut Sunucu",
                }
            },
            option: {
                hotkey: {
                    label: "Kısayol Tuşu",
                    description: "Komut paletini açmak için kullanılan kısayol tuşu",
                    recording: "Herhangi bir tuşa basın...",
                    reset: "Sıfırla"
                },
                visualStyle: {
                    label: "Görsel Stil",
                    description: "Palet görünümü",
                    classic: "Klasik",
                    polished: "Cilalı (Modern)"
                },
                showTags: {
                    label: "Etiketleri Göster",
                    description: "Komutlar için etiketleri göster"
                },
                enableTagFilter: {
                    label: "Etiket Filtresini Etkinleştir",
                    description: "Etiket filtreleme çubuğunu göster"
                },
                customCommands: {
                    label: "Özel Komutlar",
                    description: "Özel komut paleti girişlerini yönet"
                },
                closeAfterExecute: {
                    description: "Bir komut çalıştırıldıktan sonra paleti kapat.",
                    label: "Çalıştırdıktan Sonra Kapat"
                }
            },
            template: {
                alias: {
                    label: "Takma Ad Komutu",
                    description: "Mevcut bir komutu yansıtır"
                },
                settings: {
                    label: "Ayarlar",
                    description: "Discord Ayarlarını Aç"
                },
                url: {
                    label: "Bağlantı",
                    description: "Harici bir URL açar"
                },
                macro: {
                    label: "Makro",
                    description: "Bir dizi komutu çalıştırır"
                }
            },
            text: {
                insertTextInChat: "Sohbete Metin Ekle",
                name: "Name",
                commandName: "Komut adı",
                settingsPage: "Ayarlar sayfası",
                searchSettingsPages: "Ayar sayfalarında ara...",
                text: "Metin",
                textToInsertInto: "Sohbet kutusuna eklenecek metin",
                editCommand: "Komutu Düzenle",
                deleteCommand: "Komutu Sil",
                createCustomCommand: "Özel Komut Oluştur",
                light: "Açık",
                ash: "Kül",
                dark: "Koyu",
                onyx: "Oniks",
                toggleMute: "Sessizi Aç/Kapat",
                toggleDeafen: "Sağırlaştırmayı Aç/Kapat",
                setStatus: "Durum Ayarla",
                searchStatuses: "Durum ara...",
                setLabel: "{{label}} olarak ayarla",
                toggleTheme: "Temayı Değiştir",
                openServer: "Sunucuyu Aç",
                openChannel: "Kanalı Aç",
                openDm: "DM'yi Aç",
                goHome: "Ana Sayfaya Git",
                goToServer: "Sunucuya Git",
                searchServers: "Sunucu ara...",
                goToChannel: "Kanala Git",
                searchChannels: "Kanal ara...",
                searchFriends: "Arkadaş ara...",
                myAccount: "Hesabım",
                profiles: "Profiller",
                dataPrivacy: "Veriler ve Gizlilik",
                devices: "Cihazlar",
                connections: "Bağlantılar",
                appearance: "Görünüm",
                accessibility: "Erişilebilirlik",
                voiceVideo: "Ses ve Görüntü",
                chat: "Sohbet",
                textImages: "Metin ve Görseller",
                notifications: "Bildirimler",
                keybinds: "Tuş Atamaları",
                authorizedApps: "Yetkili Uygulamalar",
                familyCenter: "Aile Merkezi",
                advanced: "Gelişmiş",
                plexcord: "Plexcord",
                plexcordPlugins: "Plexcord Eklentileri",
                plexcordThemes: "Plexcord Temaları",
                plexcordUpdater: "Plexcord Güncelleyici",
                plexcordChangelog: "Plexcord Değişiklik Günlüğü",
                openQuickcss: "QuickCSS'i Aç",
                openUpdater: "Güncelleyiciyi Aç",
                openChangelog: "Değişiklik Günlüğünü Aç",
                restartDiscord: "Discord'u Yeniden Başlat",
                managePlugins: "Eklentileri Yönet",
                searchPlugins: "Eklenti ara...",
                sendDm: "DM Gönder",
                recipient: "Alıcı",
                message: "Mesaj",
                messageContent: "Mesaj içeriği",
                openPaletteHotkey: "Paleti açma kısayolu",
                actions: "İşlemler",
                preview: "Önizleme",
                openCommand: "Komutu Aç",
                copyAnswer: "Cevabı Kopyala",
                openDetails: "Ayrıntıları Aç",
                calculator: "Hesap Makinesi",
                expression: "İfade",
                result: "Sonuç",
                copyExpression: "İfadeyi Kopyala",
                pinned: "Sabitlenmiş",
                suggestions: "Öneriler",
                setAlias: "Takma Ad Belirle",
                aliasForLabel: "{{label}} için takma ad",
                leaveEmptyToRemove: "Kaldırmak için boş bırak",
                command: "Komut",
                noResults: "Sonuç yok",
                addFile: "Dosya ekle",
                saveCommand: "Komutu Kaydet",
                createCommand: "Komut Oluştur",
                nameRequired: "Ad gerekli.",
                enterValidUrl: "Geçerli bir URL gir.",
                pickSettingsPage: "Önerilerden bir ayar sayfası seç.",
                textRequired: "Metin gerekli.",
                commandSaved: "Komut kaydedildi.",
                commandCreated: "Komut oluşturuldu.",
                editCustomCommand: "Özel Komutu Düzenle",
                disablePlugin: "Eklentiyi Devre Dışı Bırak",
                enablePlugin: "Eklentiyi Etkinleştir",
                pickRecipient: "Önerilerden bir alıcı seç.",
                addMessageOrFile: "Bir mesaj veya dosya ekle.",
                pressKeys: "Tuşlara bas...",
                answerCopied: "Cevap panoya kopyalandı.",
                calculationCopied: "Hesaplama panoya kopyalandı.",
                unpinCommand: "Komutun Sabitlemesini Kaldır",
                pinCommand: "Komutu Sabitle",
                saveAlias: "Takma Adı Kaydet",
                changeHotkey: "Kısayolu Değiştir",
                recordHotkey: "Kısayol Kaydet",
                pressKeyCombo: "Bir tuş kombinasyonuna bas; temizlemek için Backspace, iptal için Esc",
                searchIn: "{{title}} içinde ara...",
                searchCommands: "Komut ara...",
                somethingWentWrong: "Bir şeyler ters gitti.",
                remove: "Kaldır",
                enabled: "Etkin",
                disabled: "Devre dışı",
                sectionNavigation: "Gezinme",
                sectionCustom: "Özel",
                sectionPlugins: "Eklentiler",
                sectionMessaging: "Mesajlaşma",
                current: "Mevcut",
                submit: "Gönder"
            },
            description2: "Discord'un her yerinde işlem çalıştırmak için Raycast tarzı komut paleti"
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
                    description: "Diğerleri gizlense bile izin verilecek logger’ların noktalı virgülle (;) ayrılmış listesi"
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
        copyProfileColors: {
            name: "CopyProfileColors",
            description: "Kullanıcıların profil gradyan renklerini panoya kopyalayan bir eklenti.",
            copy: "Sunucu Profili Renklerini Kopyala",
            toast: {
                noColor: "Profil renkleri bulunamadı!",
                copied: "Profil renkleri panoya kopyalandı!",
                error: "Profil renkleri kopyalanırken hata oluştu!"
            },
            text: {
                formatted: "Birincil renk #{{primary}}, İkincil renk #{{secondary}}"
            }
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
                copy: "Çıkartma Bağlantısını Kopyala",
                open: "Çıkartma Bağlantısını Aç"
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
                    recover: "Kurtarılmaya çalışılıyor...",
                    invalid: "Geçersiz veya süresi geçmiş davet bağlantısı."
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
        cursorBuddy: {
            name: "CursorBuddy",
            description: "İmlecinizi takip eden bir sprite ekler.",
            modal: {
                furColor: "Kürk Rengi",
                outlineColor: "Anahat Rengi"
            },
            option: {
                buddy: {
                    label: "Arkadaş",
                    description: "Bir imleç arkadaşı seçin",
                    oneko: "Oneko",
                    fathorse: "Şişman At"
                },
                speed: {
                    label: "Hız",
                    description: "Buddy'nizin hızı",
                    invalid: "Hız 0'dan büyük olmalıdır"
                },
                fps: {
                    label: "Kare Hızı (FPS)",
                    description: "Buddy'nizin kare hızı",
                    invalid: "Kare hızı 0'dan büyük olmalıdır"
                },
                onekoSection: {
                    label: "Oneko"
                },
                furColor: {
                    label: "Kürk Rengi",
                    description: "Oneko için kürk hex rengi"
                },
                outlineColor: {
                    label: "Anahat Rengi",
                    description: "Oneko için anahat hex rengi"
                },
                fathorseSection: {
                    label: "Şişman At"
                },
                size: {
                    label: "Boyut",
                    description: "Şişman atın boyutu",
                    invalid: "Boyut 0'dan büyük olmalıdır"
                },
                fade: {
                    label: "Solma",
                    description: "İmleç yaklaştığında atın solup solmayacağı"
                },
                freeroam: {
                    label: "Serbest Dolaşım",
                    description: "Boştayken atın serbestçe dolaşıp dolaşmayacağı"
                },
                shake: {
                    label: "Sallama",
                    description: "Yürürken atın pencereyi sallayıp sallamayacağı"
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
            },
            context: {
                changeIcon: "Simgeyi Değiştir"
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
                sharing: "Etkinlik Paylaşımı etkin değil, bu yüzden başkaları özel zengin durumunu göremeyecek!",
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
                },
                enablePresence: {
                    description: "Durumun gösterilip gösterilmeyeceği",
                    label: "Durumu Etkinleştir"
                }
            },
            toast: {
                savedPresetName: "{{name}} ön ayarı kaydedildi.",
                loadedPresetName: "{{name}} ön ayarı yüklendi.",
                deletedPresetSelectedpreset: "{{selectedPreset}} ön ayarı silindi."
            },
            text: {
                presetName: "Ön ayar adı",
                selectAPreset: "Bir ön ayar seç",
                streamLinkTwitchOr: "Yayın Bağlantısı (Twitch veya YouTube, yalnızca etkinlik türü Yayında ise)",
                presets: "Ön Ayarlar",
                save: "Kaydet",
                load: "Yükle",
                delete: "Sil",
                noSavedPresetsYet: "Henüz kayıtlı ön ayar yok.",
                showCustomRpc: "Özel RPC'yi Göster",
                customRpcDisabled: "Özel RPC devre dışı",
                theEnablePresenceSetting: "\"Durumu Etkinleştir\" ayarı kapalı, bu yüzden durumun gösterilmeyecek. İstemeden olduysa aşağıdan etkinleştir.",
                activitySharingDisabled: "Etkinlik paylaşımı devre dışı",
                discordDeveloperPortal: "Discord Geliştirici Portalı",
                imgur: "Imgur",
                enableActivitySharing: "Etkinlik Paylaşımını Etkinleştir"
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
                select: "Bir dosya seç...",
                overrides: {
                    label: "Geçersiz Kılmalar"
                },
                soundpack: {
                    label: "Ses Paketi",
                    description: "Discord'da ayarlı olan yerine kullanılacak ses paketi.",
                    default: "Discord Varsayılanı"
                }
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
                mention1: "Bahsetme 1 (@role)",
                mention2: "Bahsetme 2 (@everyone)",
                mention3: "Bahsetme 3 (@here)",
                message1: "Mesaj 1 (Genel)",
                message2: "Mesaj 2 (Sunucuda Yanıt)",
                message3: "Mesaj 3 (DM'ler ve Grup DM'leri)",
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
                or: "veya",
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
            },
            text: {
                toggleDearrow: "Dearrow'u Aç/Kapat"
            }
        },
        declutter: {
            name: "Declutter",
            description: "Profil efektleri, mağaza sekmeleri, güçlendirmeler ve daha fazlası gibi gerekli olmayan kullanıcı arayüzü öğelerini kaldırarak Discord'u temizler.",
            option: {
                userProfileHeader: {
                    label: "Kullanıcı Profili"
                },
                removeAvatarDecoration: {
                    label: "Profil Resmi Süslemesini Kaldır",
                    description: "Avatar süslemelerini kaldır. Decor etkinse bu devre dışıdır/devre dışı kalır.",
                    alertBody: "Decor eklentisiyle çakışmaları önlemek için profil resmi süslemesini kaldırma özelliği devre dışı bırakıldı.",
                    ok: "Tamam"
                },
                removeNameplate: {
                    label: "İsim Levhasını Kaldır",
                    description: "İsim levhalarını kaldırır."
                },
                removeProfileEffect: {
                    label: "Profil Efektini Kaldır",
                    description: "Profil açıldığında ortaya çıkan animasyon efektlerini kaldırır."
                },
                removeClanTag: {
                    label: "Klan Etiketini Kaldır",
                    description: "Klan etiketlerini kaldırır."
                },
                alwaysShowUsername: {
                    label: "Her Zaman Kullanıcı Adını Göster",
                    description: "Durum yerine her zaman kullanıcı adını gösterir."
                },
                accessibilityNotice: {
                    label: "Erişilebilirlik Uyarısı",
                    description: "Discord'un Erişilebilirlik ayarlarında zaten yerleşik bir kullanıcı adı stili seçeneği var."
                },
                friendsListHeader: {
                    label: "Arkadaş/DM Listesi Üstü"
                },
                removeShopAboveDM: {
                    label: "DM Listesi Üstündeki Mağazayı Kaldır",
                    description: "DM listesinin üzerinde bulunan mağaza butonunu kaldırır."
                },
                removeQuestsAboveDM: {
                    label: "DM Listesi Üstündeki Görevleri Kaldır",
                    description: "DM listesinin üzerinde bulunan görevler butonunu kaldırır."
                },
                miscHeader: {
                    label: "Çeşitli"
                },
                removeServerBoostInfo: {
                    label: "Sunucu Takviye Bilgisini Kaldır",
                    description: "Kanal listesinin üstündeki sunucu takviye bilgisini kaldırır."
                },
                removeBillingSettings: {
                    label: "Ödeme Ayarlarını Kaldır",
                    description: "Ödeme (fatura) ayarlarını kaldırır."
                },
                removeGiftButton: {
                    label: "Hediye Butonunu Kaldır",
                    description: "Hediye gönderme butonunu kaldırır."
                },
                removeUnavailableEmojiPicker: {
                    label: "Kullanılamayan Emoji Seçiciyi Kaldır",
                    description: "Emoji seçicideki erişilemeyen kategorileri kaldırır."
                },
                removeAudioMenus: {
                    label: "Ses Menülerini Kaldır",
                    description: "Sustur ve sağırlaştır butonlarının yanındaki ok menülerini kaldırır."
                },
                removeButtonTooltips: {
                    label: "Buton İpuçlarını Kaldır",
                    description: "Butonların üzerinde çıkan bilgi yazılarını (tooltip) kaldırır."
                },
                removeProfileFrame: {
                    description: "Profil çerçevelerini kaldırır.",
                    label: "Profil Çerçevesini Kaldır"
                },
                removeDisplayNameStyles: {
                    description: "Üye listesindeki hareketli/stilli görünen adları kaldırır.",
                    label: "Görünen Ad Stillerini Kaldır"
                },
                removeLibraryAboveDms: {
                    description: "DM listesinin üstündeki kitaplığı kaldırır.",
                    label: "DM'lerin Üstündeki Kitaplığı Kaldır"
                },
                removeFamilyCenterAboveDms: {
                    description: "DM listesinin üstündeki aile merkezini kaldırır.",
                    label: "DM'lerin Üstündeki Aile Merkezini Kaldır"
                }
            },
            text: {
                discordAlreadyHasA: "Discord'da zaten yerleşik bir kullanıcı adı stili seçeneği var:",
                accessibilitySettings: "Erişilebilirlik ayarları."
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
                nameHolder: "Arkadaş Küp",
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
            },
            toast: {
                failedToAuthorizeMessage: "Yetkilendirme başarısız: {{message}}"
            },
            text: {
                removeDecoration: "Decor süslemesini kaldır",
                decoration: "Decor süslemesi",
                none: "Yok",
                decorationFile: "Süsleme dosyası"
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
                    label: "Yama Modülünü Kullan",
                    description: "Çıkarma isteklerinde, orijinal yerine mevcut yamalı modülle (yamalıysa) yanıt verin."
                },
                reloadAfterToggle: {
                    label: "Yeniden Yükleme Sonrası",
                    description: "Disable/enable plugin komutu alındıktan sonra yeniden yükle."
                }
            },
            toast: {
                title: "Dev Companion Bağlandı",
                connected: "WebSocket'e bağlandı",
                disconnected: "Dev Companion Bağlantısı Kesildi",
                error: "Dev Companion Hatası",
                reload: "Yeniden Yükleme Gerekli",
                failed: "Bağımlılıklar başlatılamadı: {{failures}}",
                close: "Kapat",
                stopping: "{{plugin}} eklentisi durdurulurken hata oluştu",
                starting: "{{plugin}} eklentisi başlatılırken hata oluştu",
                noMessage: "Hata Mesajı Yok",
                noReason: "Sebep Sağlanmadı"
            },
            text: {
                reconnect: "Yeniden bağlan",
                loadingLazyModules: "Tembel modüller yükleniyor, yeniden başlatmak hatalara yol açabilir",
                loadedLazyModules: "Tüm tembel modüller yüklendi",
                failedLazyModules: "Tembel modüller yüklenemedi, hatalar için konsolu kontrol et",
                ok: "Tamam"
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
        discordDevBanner: {
            name: "DiscordDevBanner",
            description: "Build-ID (Yapım Numarası) bilgisini gösteren Discord geliştirici banner'ını etkinleştirir.",
            about: "Discord Geliştirici Banner'ı formatı. Aşağıdaki değişkenleri kullanabilirsiniz:",
            preview: "Önizleme:",
            empty: "Format boş olamaz.",
            variables: {
                discord: {
                    title: "Discord Değişkenleri",
                    icon: "Discord simgesi",
                    banner: "Geliştirici banner simgesi",
                    channel: "Discord yapı kanalı (örn. Stable)",
                    build: "Discord yapı numarası (örn. 123456)",
                    hash: "Discord yapı hash'i (örn. 123456)"
                },
                plexcord: {
                    title: "Plexcord Değişkenleri",
                    icon: "Plexcord simgesi",
                    name: "Plexcord adı",
                    version: "Plexcord sürümü (örn. 1.0.0)",
                    hash: "Plexcord yapı hash'i (örn. 123456)",
                    platform: "Plexcord'un çalıştığı platform (örn. Dev Build)"
                },
                plextron: {
                    title: "Plextron Özel Değişkenleri",
                    hashShort: "Plextron kısa yapı karması (örn. 123456789)",
                    platformType: "Plextron'un çalıştığı platform tipi (örn. Dev Build)"
                },
                client: {
                    title: "İstemci Değişkenleri",
                    icon: "Masaüstü simgesi",
                    name: "İstemci adı (örn. Discord Canary)",
                    version: "İstemci sürümü (örn. 1.0.0)",
                },
                electron: {
                    title: "Electron Değişkenleri",
                    icon: "Electron simgesi",
                    version: "Electron sürümü (örn. 25.0.0)"
                },
                chromium: {
                    title: "Chromium Değişkenleri",
                    icon: "Chromium simgesi",
                    version: "Chromium motor sürümü (örn. 125.0.0.0)"
                },
                misc: {
                    title: "Çeşitli Değişkenler",
                    newline: "Yeni satır karakteri"
                }
            },
            text: {
                notSupported: "Desteklenmiyor",
                devBuild: "Geliştirici Sürümü",
                standalone: "Bağımsız"
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
        downloadAllAttachments: {
            name: "DownloadAllAttachments",
            description: "Bir mesajdaki tüm ekleri tek seferde indirmek için mesaj menüsüne bir buton ekler.",
            button: "Tüm Ekleri İndir",
            toast: {
                success: "{{count}} ek indirildi.",
                partial: "{{total}} ekten {{succeeded}} tanesi indirildi. {{failed}} tanesi başarısız oldu.",
                downloadedPluralizeSucceededAttachment: "{{pluralize_succeeded_attachment}} indirildi.",
                downloadedSucceededOfLength: "{{length}} ekten {{succeeded}} tanesi indirildi. {{failed}} başarısız."
            },
            option: {
                downloadAllFileTypes: {
                    description: "Medya olmayan ekleri de indir. Yalnızca sana gönderilenlere güveniyorsan etkinleştir.",
                    label: "Tüm Dosya Türlerini İndir"
                }
            }
        },
        draftNavigator: {
            name: "DraftNavigator",
            description: "Gönderilmemiş taslakları arayın, metinlerini önizleyin ve kanala atlayın.",
            text: {
                title: "Taslak Gezgini",
                open: "Taslak Gezginini Aç",
                unknownChannel: "Bilinmeyen kanal ({{id}})",
                channelUnavailable: "Kanal kullanılamıyor",
                directMessage: "Direkt mesaj",
                groupMessage: "Grup mesajı",
                server: "Sunucu",
                jump: "Git",
                jumpTo: "{{name}} kanalına git",
                count: "{{count}} taslak",
                countOne: "{{count}} taslak",
                countFiltered: "{{total}} taslaktan {{shown}} tanesi",
                noMatches: "Eşleşen taslak yok.",
                noDrafts: "Gönderilmemiş taslak yok.",
                close: "Kapat",
                searchLabel: "Taslaklarda ara",
                searchPlaceholder: "Kanal, sunucu veya taslak metninde ara",
                listLabel: "Gönderilmemiş taslaklar"
            }
        },
        dragFavoriteEmotes: {
            name: "DragFavoriteEmotes",
            description: "Favori emojilerin sırasını değiştirmek için sürükle-bırak özelliğini ekler"
        },
        dragify: {
            name: "Dragify",
            description: "Bahsetme veya davet eklemek için kullanıcıları, kanalları veya sunucuları sohbete sürükleyip bırakın.",
            option: {
                userOutput: {
                    label: "Kullanıcı Çıktısı",
                    description: "Kullanıcı bırakma çıktısı.",
                    mention: "Bahsetme",
                    id: "Kullanıcı Kimliği (ID)"
                },
                channelOutput: {
                    label: "Kanal Çıktısı",
                    description: "Kanal bırakma çıktısı.",
                    mention: "#kanal Bahsetme",
                    link: "Kanal Bağlantısı",
                },
                inviteExpireAfter: {
                    label: "Davet Süresi",
                    description: "Davet bağlantısının geçerlilik süresi.",
                    never: "Asla",
                    thirtyMinutes: "30 Dakika",
                    oneHour: "1 Saat",
                    sixHours: "6 Saat",
                    twelveHours: "12 Saat",
                    oneDay: "1 Gün",
                    sevenDays: "7 Gün"
                },
                inviteMaxUses: {
                    label: "Maksimum Kullanım Sayısı",
                    description: "Davetin maksimum kullanılma sınırı.",
                    noLimit: "Sınır Yok",
                    one: "1 Kullanım",
                    five: "5 Kullanım",
                    ten: "10 Kullanım",
                    twentyFive: "25 Kullanım",
                    fifty: "50 Kullanım",
                    hundred: "100 Kullanım"
                },
                inviteTemporaryMembership: {
                    label: "Geçici Üyelik Sağla",
                    description: "Davet edilenlere geçici üyelik verir.",
                },
                reuseExistingInvites: {
                    label: "Mevcut Daveti Yeniden Kullan",
                    description: "Yeni bir tane oluşturmak yerine mevcut daveti kullanır."
                },
                allowChatBodyDrop: {
                    label: "Sohbet Gövdesine Bırakmaya İzin Ver",
                    description: "Metin eklemek için doğrudan sohbet alanına bırakmaya izin verir."
                }
            },
            toast: {
                failed: {
                    drop: "Dragify işlemi gerçekleştiremedi.",
                },
                invite: {
                    created: "Davet oluşturuldu.",
                    unable: "Davet oluşturulamıyor.",
                    noChannel: "Davet oluşturmak için uygun kanal yok.",
                },
                noReusableInvite: "Yeniden kullanılabilir davet yok.",
                unableToReuseInvite: "Davet yeniden kullanılamadı."
            },
            ghost: {
                user: "Kullanıcı",
                server: "Sunucu",
                dm: "Direkt Mesajlar",
                badge: {
                    channel: "kanal",
                    thread: "başlık",
                    voice: "ses",
                    forum: "forum",
                    media: "medya",
                    announcement: "duyuru",
                    dm: "dm",
                    user: "kullanıcı",
                    server: "sunucu"
                }
            }
        },
        elementHighlighter: {
            name: "ElementHighlighter",
            description: "Öğeleri kolayca vurgulayın ve denetleyin.",
            modal: {
                recording: "Kaydediliyor...",
                reset: "Sıfırla"
            },
            option: {
                keybind: {
                    label: "Tuş Ataması",
                    description: "Vurgulayıcıyı aç/kapat"
                },
                showClasses: {
                    label: "Sınıfları Göster",
                    description: "Öğenin CSS sınıf (class) isimlerini ipucunda görüntüler"
                },
                showId: {
                    label: "ID Göster",
                    description: "Öğenin ID özniteliğini ipucunda görüntüler"
                },
                showFont: {
                    label: "Yazı Tipini Göster",
                    description: "Hesaplanmış yazı tipi ailesini ve boyutunu görüntüler"
                },
                showPadding: {
                    label: "İç Boşluğu (Padding) Göster",
                    description: "Öğenin iç boşluk değerlerini görüntüler"
                },
                showMargin: {
                    label: "Dış Boşluğu (Margin) Göster",
                    description: "Öğenin dış boşluk değerlerini görüntüler"
                },
                showBorderRadius: {
                    label: "Kenar Yuvarlaklığını Göster",
                    description: "Öğenin kenar yuvarlaklığı (border radius) değerlerini görüntüler"
                },
                showPosition: {
                    label: "Konumu Göster",
                    description: "Öğenin CSS konum türünü ve z-index değerini görüntüler"
                },
                showDisplay: {
                    label: "Görünümü (Display) Göster",
                    description: "Öğenin görünüm türünü flex veya grid özellikleri ile birlikte görüntüler"
                }
            },
            toast: {
                copied: {
                    color: "Renk panoya kopyalandı!",
                }
            }
        },
        exitSounds: {
            name: "ExitSounds",
            description: "Ses kanalından ayrıldığınızda ses panelinden bir ses çalar.",
            button: "Global çıkış sesi olarak ayarla",
            toast: {
                failedToPlay: "Hay aksi! Bir şeyler ters gitti."
            },
            option: {
                soundGuildId: {
                    label: "Ses Sunucusu Kimliği (ID)",
                    description: "Sesin bulunduğu sunucuyu seçin.",
                    placeholder: "Bir sunucu seç..."
                },
                soundId: {
                    label: "Ses Kimliği (ID)",
                    description: "Çalmak istediğiniz sesin kimliğini (ID) girin.",
                    placeholder: "Ses kimliğini girin..."
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
            },
            text: {
                searchExperiments: "Deneyleri ara"
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
            },
            text: {
                unknownError: "Bilinmeyen hata"
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
                console: "Bir şeyler yanlış gitti (konsolu kontrol et!)",
                successfullyClonedNameTo: "{{name}}, {{name_your_server}} sunucusuna başarıyla kopyalandı!"
            },
            context: {
                clone: "{{type}} Klonla",
                cloneName: "{{data}} Klonla"
            },
            text: {
                yourServer: "sunucun",
                cloneTo: "{{name}} sunucusuna kopyala",
                emoji: "Emoji",
                sticker: "Çıkartma"
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
                useStickerHyperLinks: {
                    label: "Sticker Köprülerini Kullan",
                    description: "Sahte sticker gönderirken köprü kullanılıp kullanılmayacağını belirler"
                },
                useEmojiHyperLinks: {
                    label: "Emoji Köprülerini Kullan",
                    description: "Sahte emoji gönderirken köprü kullanılıp kullanılmayacağını belirler"
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
            description: "Favori emojinizi emoji otomatik tamamlama listesinin en üstüne koyar ve emoji takma adı da sağlar.",
            option: {
                aliases: {
                    label: "Takma Adlar",
                    description: "Emoji takma adlarınızı yönetin."
                },
                clearAll: {
                    label: "Tümünü Temizle",
                    description: "Tüm takma adları siler."
                }
            },
            modal: {
                clear: {
                    title: "Tüm Takma Adları Sil",
                    description: "Bu işlem, kaydettiğiniz tüm emoji takma adlarını kaldıracaktır.",
                    confirm: "Tüm takma adları sil"
                },
                set: {
                    title: "Takma Ad Ayarla",
                    description: "{{emoji}} için bir takma ad ayarla",
                    placeholder: "Takma ad, örn. 'mutlu'",
                    save: "Kaydet",
                    error: "Yinelenen takma ad"
                }
            },
            toast: {
                set: "{{emoji}} için takma ad ayarlandı",
                clearAll: "Tüm emoji takma adları silindi",
                failedDeleted: "Takma adları silme başarısız oldu",
                removed: "{{alias}} için takma ad silindi",
                failedRemove: "Takma ad kaldırma başarısız oldu",
                duplicate: "Yinelenen takma ad",
                failedSave: "Takma ad kaydedilemedi",
                removedAliasAlias: ":{{alias}}: takma adı kaldırıldı",
                aliasSetForGetemojidisplayname: "{{getEmojiDisplayName_ref}} için takma ad belirlendi."
            },
            button: {
                edit: "Takma Adı Düzenle",
                set: "Takma Ad Ayarla"
            },
            text: {
                remove: "Kaldır",
                noAliasesSetYet: "Henüz takma ad belirlenmedi.",
                aliasRequired: "Takma ad gerekli.",
                aliasInvalid: "Takma ad 2-32 karakter olmalı ve yalnızca küçük harf, rakam veya alt çizgi içermeli."
            }
        },
        favoriteAnything: {
            name: "FavoriteAnything",
            description: "Herhangi bir resmi favorile",
            noFiles: "Aramanızla eşleşen dosya yok.",
            searchPlaceholder: "Dosya ara",
            media: "Medya",
            demoText: "Bir dosyayı favorilere eklemek için yıldıza tıklayın.\nFavori dosyalarınız burada görünecek!",
            fetchError: "{filename} alınamadı",
            uploadError: "{filename} yüklenemedi",
            text: {
                clickTheStarTo: "Bir dosyayı favorilere eklemek için yıldıza tıkla.",
                favoriteFilesWillShow: "Favori dosyalar burada görünecek!"
            },
            option: {
                localThumbnails: {
                    description: "Harici bir hizmet (placeholder.nin0.dev) yerine dosya küçük resimlerini yerel olarak oluştur. Mobil ile uyumlu değil. Bu seçeneği değiştirmek mevcut favorileri etkilemez.",
                    label: "Yerel Küçük Resimler"
                }
            }
        },
        fileDownloadButton: {
            name: "FileDownloadButton",
            description: "Dosyaların sağ üst köşesine indirme düğmesi ekler"
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
                couldntFind: "Yanıt bulunamadı."
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
            description: "Orjinal kaynağın kullanılmasını zorlayarak görüntülerin kalitesini artırır",
            option: {
                originalImagesInChat: {
                    label: "Orjinal Görüntüleri Sohbette Göster",
                    description: "Orijinal görseli de Sohbette göster. UYARI: Yukarıdaki uyarıları okuyun"
                }
            },
            modal: {
                about: {
                    title: "Varsayılan davranış şu şekildedir:",
                    body: "&mdash; Sohbette, optimize edilmiş ancak tam çözünürlüklü görseller yüklenecektir.",
                    body2: "&mdash; Görsel penceresinde (image modal), orijinal görsel yüklenecektir.",
                    body3: "Sohbette orijinal görseli de etkinleştirebilirsiniz, ancak aşağıdaki uyarılara dikkat edin:",
                    warning: "&mdash; Sohbette animasyonlu görseller (GIF, WebP, vb.) her zaman animasyonlu olacaktır, uygulama odaklanmış olsa bile.",
                    warning2: "&mdash; Performans sorunlarına yol açabilir."
                }
            }
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
                },
                onlyWhenInVoice: {
                    label: "Yalnızca Sesteyken",
                    description: "Kullanıcıyı yalnızca sen bir ses kanalındayken takip et"
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
            },
            text: {
                currentFont: "Geçerli yazı tipi:",
                resetFont: "Yazı Tipini Sıfırla"
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
        friendCloud: {
            name: "FriendCloud",
            description: "En çok etkileşimde bulunduğunuz kullanıcıları görselleştirmek için bir /friendcloud komutu ekler.",
            command: {
                friendcloud: {
                    description: "Arkadaş bulutunuzu görselleştirin",
                    count: "Görüntülenecek kullanıcı sayısı",
                    mustHigher: "Sayı 1 veya daha yüksek olmalıdır!",
                    noAffinities: "Yakınlık verisi bulunamadı. [Gizlilik ayarlarınızı](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>) kontrol edin.",
                    noValid: "Yakınlıklarda geçerli kullanıcı bulunamadı. [Gizlilik ayarlarınızı](<https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord>) kontrol edin.",
                    genFailed: "Görüntü oluşturulamadı :c"
                }
            }
        },
        friendCodes: {
            name: "FriendCodes",
            description: "Kolayca arkadaş eklemek için Arkadaşlık Kodları oluşturun",
            card: {
                expires: "Süre sonu: <t:{{expiration}}:R> • {{uses}}/{{maxUses}} kullanım",
                copy: "Kopyala",
                copied: "Kopyalandı!",
                codes: "Arkadaşlık Kodların",
                count: "Arkadaşlık Kodları - {{invites}}",
                create: "Arkadaşlık Kodu Oluştur",
                revoke: "Tüm Arkadaşlık Kodlarını İptal Et",
                loading: "Yükleniyor...",
                dontHave: "Hiç arkadaşlık kodunuz yok."
            }
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
            },
            option: {
                showFriendsInChat: {
                    description: "Arkadaşlardan gelen mesajlarda arkadaş simgesi göster.",
                    label: "Sohbette Arkadaşları Göster"
                }
            },
            text: {
                friend: "Arkadaş",
                rankIcon: "Rütbe simgesi"
            }
        },
        friendTags: {
            name: "FriendTags",
            description: "Aramanıza & ile başlayarak hızlı geçiş menüsünde özel etiketlere göre filtreleme yapmanıza olanak tanır.",
            modal: {
                name: "İsim",
                users: "Kullanıcılar (Virgülle ayırın)",
                userlist: "Kullanıcı Listesi (Kaldırmak için bir kullanıcıya tıklayın)",
                remove: "Kaldır",
                add: "Ekle",
                tag: "Etiket",
                removeFrom: "Şuradan kaldır:",
                addTo: "Şuraya ekle:"
            },
            option: {
                tagConfiguration: {
                    label: "Etiket Yapılandırması",
                    description: "Etiket yapılandırma bileşeni"
                }
            }
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
            description: "Mikrofon ve sağırlaştır düğmesinin yanına oyun etkinliğini açıp kapatan bir düğme ekler. Spotify etkinliğini açıp kapatmak için sağ tıkla.",
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
            },
            text: {
                disableGameActivity: "Oyun Etkinliğini Devre Dışı Bırak",
                enableGameActivity: "Oyun Etkinliğini Etkinleştir",
                shareSpotifyActivity: "Spotify Etkinliğini Paylaş",
                shareSpotifyActivityAccount: "Spotify Etkinliğini Paylaş ({{name}})"
            }
        },
        ghosted: {
            name: "Ghosted",
            description: "DM'lerine cevap vermediğiniz kişilerin yanında sevimli bir hayalet belirir.",
            modal: {
                title: "Ghostlanan Kullanıcılar",
                no: "Ghostlanan Kullanıcı Yok",
                unghost: "hayaleti kaldır",
                unknown: "Bilinmiyor",
                unnamedGroup: "İsimsiz Grup",
                unknownUser: "Bilinmeyen Kullanıcı",
                clearAll: "Tümünü Temizle",
                noGhost: "Burada hayalet yok!",
                clear: "Temizle"
            },
            option: {
                showIndicator: {
                    label: "Göstergeyi Göster",
                    description: "Sunucu listesinin en üstünde hayalet sayacını gösterir."
                },
                showDmIcons: {
                    label: "DM Simgelerini Göster",
                    description: "Bireysel DM'lerin yanında hayalet simgelerini gösterir."
                },
                ignoreGroupDms: {
                    label: "Grup DM'lerini Yoksay",
                    description: "Tüm grup mesajlarını hayalet listesinin dışında tutar."
                },
                exemptedChannels: {
                    label: "Muaf Tutulan Kanallar",
                    description: "Hayalet listesine dahil edilmeyecek kanal kimliklerinin (ID) virgülle ayrılmış listesi (ID'yi kopyalamak için bir DM kanalına sağ tıklayın)."
                },
                ignoreBots: {
                    label: "Botları Yoksay",
                    description: "Botlardan gelen DM'leri görmezden gelir."
                },
                maxInactiveTimeMs: {
                    label: "Maksimum Etkin Olmayan Süre",
                    description: "Bu zaman dilimi içinde etkin olan sadece hayalet DM'leri",
                    no: "Sınır yok",
                    oneHour: "1 saat",
                    oneDay: "1 gün",
                    oneWeek: "1 hafta",
                    oneMonth: "1 ay"
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
                alreadyCollection: "Bu GIF zaten koleksiyonda",
                collectionsImportedSuccessfully: "Koleksiyonlar başarıyla içe aktarıldı.",
                failedToImportCollections: "Koleksiyonlar içe aktarılamadı: {{String_err}}"
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
            },
            text: {
                gifPickerCategoryOptions: "GIF Seçici Kategori Seçenekleri",
                gifCollections: "GIF Koleksiyonları",
                unknown: "Bilinmiyor"
            }
        },
        gifPaste: {
            name: "GifPaste",
            description: "GIF'leri doğrudan sohbet kutusuna yapıştırmana olanak tanır."
        },
        gifRoulette: {
            name: "GifRoulette",
            description: "Favorilerinizden rastgele bir GIF gönderen bir komut ekler; sunucu sahibini etiketleme ihtimali %10'dur!",
            command: {
                gifRoulette: {
                    description: "Şansını dene ve rastgele bir GIF gönder",
                    restricted: "Bu komut bu sunucuda kısıtlanmıştır."
                }
            },
            option: {
                pingOwnerChance: {
                    label: "Sunucu Sahibini Etiketleme Şansı",
                    description: "Sunucu sahibini etiketleme ihtimalinin 10'da 1 olması durumunu ayarlar (eyvah!)"
                }
            }
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
                title: "{{username}} kullanıcısının GitHub Depoları",
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
                embed: {
                    label: "Gömülü İçerik",
                    description: "Gönderilen bağlantının gömülü içerik olarak görüntülenip görüntülenmeyeceği"
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
        guildTagSettings: {
            name: "GuildTagSettings",
            description: "Sunucu etiketlerini gizlemek veya etiket kullanma istemini devre dışı bırakmak gibi sunucu etiketi ayarları ekler.",
            option: {
                disableAdoptTagPrompt: {
                    label: "Etiket Sahiplenme Uyarısını Kapat",
                    description: "Sunucu etiketini kullanmanız (sahiplenmeniz) için çıkan istemi devre dışı bırakır"
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
        hideMessages: {
            name: "HideMessages",
            description: "Yeniden başlatana kadar mesajları ve DM'leri geçici olarak gizler.",
            button: {
                hide: "Gizle",
                hideDm: "DM'yi Gizle",
                unhideDm: "DM'yi Göster"
            },
            toggle: {
                none: "Gizli DM Yok",
                hide: "Gizli DM'leri Gizle",
                show: "Gizli DM'leri Göster"
            },
            option: {
                hidePopoverButton: {
                    label: "Popover Butonunu Gizle",
                    description: "Mesaj popover'ında gizle butonunu gizler."
                }
            }
        },
        hideMutedVoiceIndicator: {
            name: "HideMutedVoiceIndicator",
            description: "Sunucu listesinde, aktif ses kanallarının hepsi susturulmuşsa ses göstergesini gizler"
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
                cancel: "İptal",
                noteMessage: "Mesajı Not Et",
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
                    generic: "Notların işlenirken bir hata oluştu. Detaylar için konsolu kontrol edin.",
                    easter: "Hiç not bulunamadı. Empati muzu seninle.",
                    empty: "Bu not defterinde kayıtlı not yok."
                },
                help: {
                    title: "Yardım",
                    description: "Holy Notes nasıl kullanılır öğren",
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
                    options: "Sıralama Seçenekleri",
                    label: "Sıralama Menüsü",
                    filteredOf: "{{filteredCount}}/{{noteCount}} not",
                    note: "{{noteCount}} not",
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
                    description: "Yeni not defterinin adını gir",
                    placeholder: "Not Defteri Adı"
                },
                delete: {
                    title: "{{notebookName}} Silinsin Mi?",
                    description: "{{noteCount}} not kalıcı olarak silinecek",
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
                invalid: "Notlar içe aktarılamadı.",
                invalidJson: "Geçersiz JSON"
            },
            toolbox: {
                action: "Notları Aç"
            },
            text: {
                holyNotes: "Holy Notes",
                noteTag: "NOT"
            }
        },
        homeTyping: {
            name: "HomeTyping",
            description: "DM’lerinde biri yazı yazıyorsa, ana sayfa butonunu yazıyor göstergesine dönüştürür."
        },
        iconViewer: {
            name: "IconViewer",
            description: "Tüm simgeleri önizlemek için ayarlara yeni bir sekme ekler.",
            toolbox: "Simgeler Sekmesini Aç",
            iconFinder: "Simge Bulucu",
            about: {
                title: "Özellikler",
                preview: "Simgeleri Önizle",
                list: {
                    copy: "Simge adlarını ve CSS değişkenlerini kopyalayın",
                    download: "Simgeleri farklı formatlarda indirin (SVG, PNG, GIF, vb.)",
                    premade: "Eklentileriniz için hazır simge bulgularını kopyalayın",
                    find: "Simgeleri işlev bağlamına göre bulun",
                    search: "Renk adına sağ tıklayarak renkleri arayın",
                    special: "Özel teşekkürler"
                }
            },
            context: {
                icon: {
                    options: "Simge Seçenekleri",
                    log: "Konsola Yazdır (Log)",
                    save: "Farklı kaydet...",
                    rightClick: "Değiştirmek için simgeye sağ tıklayın",
                    usage: "Kullanım",
                    click: "Kopyalamak için tıklayın",
                    copied: "Kopyalandı!",
                    actions: "Eylemler"
                }
            },
            modal: {
                label: "İşlev bağlamına göre ara",
                search: "{{count}} simge içinde ara...",
                function: "İşlev (Function)",
                iconViewer: {
                    colors: "Icon Viewer Renkleri",
                    unknown: "bilinmiyor",
                }
            }
        },
        idleAutoRestart: {
            name: "IdleAutoRestart",
            description: "Belirlenen bir süre boyunca boşta kaldığınızda uygulamayı otomatik olarak yeniden başlatır, ancak ses kanalındayken yeniden başlatmayı engeller.",
            option: {
                isEnabled: {
                    label: "Etkin",
                    description: "Boşta kaldıktan sonra otomatik yeniden başlatmayı etkinleştirir"
                },
                idleMinutes: {
                    label: "Boşta Kalma Süresi (Dakika)",
                    description: "Yeniden başlatmadan önce geçmesi gereken hareketsizlik süresi (ses kanalında değilken)"
                }
            },
            toolbox: {
                disable: "Otomatik Yeniden Başlatmayı Devre Dışı Bırak",
                enable: "Otomatik Yeniden Başlatmayı Etkinleştir"
            }
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
                    description: "Tüm dinleme etkinliklerini yok say (bunlar genellikle Spotify etkinlikleridir)"
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
            },
            text: {
                enableActivity: "Etkinliği Etkinleştir",
                disableActivity: "Etkinliği Devre Dışı Bırak"
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
            },
            text: {
                bytes: "Bayt"
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
                instantScreenshare: {
                    label: "Anında Ekran Paylaşımı",
                    description: "Otomatik ekran paylaşımı özelliğini etkinleştirir"
                },
                keybindScreenshare: {
                    label: "Kısayol Tuşu ile Ekran Paylaşımı",
                    description: "Discord kısayol tuşları ayarlarında kısayol tuşu ile ekran paylaşımı yapar"
                },
                focusDiscord: {
                    label: "Discord'a Odaklanınca",
                    description: "Ekran paylaşımını yalnızca Discord odaklandığında tuş atamasıyla başlat"
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
            },
            toast: {
                instantScreenshareDisabled: "Anında Ekran Paylaşımı {{disabled}}"
            },
            text: {
                instantScreenshare: "Instant Screenshare"
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
                owner: "Sunucu Sahibi",
                iRememberYou: "Seni Hatırlıyorum"
            },
            context: {
                user: "Kullanıcı Seçenekleri",
                copy: "Kullanıcı Kimliğini Kopyala",
                copyToast: "Kullanıcı kimliği panoya kopyalandı",
                view: "Profili Görüntüle"
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
            },
            text: {
                serverOptions: "Sunucu Seçenekleri",
                copyServerId: "Sunucu Kimliğini Kopyala",
                serverIdCopied: "Sunucu kimliği panoya kopyalandı"
            }
        },
        jumpTo: {
            name: "JumpTo",
            description: "Bir kanalın veya özel mesajın başına ya da sonuna atlamak için sağ tık menüsüne seçenekler ekler.",
            context: {
                top: "İlk Mesaja Git",
                bottom: "Son Mesaja Git",
                noMessages: "Bu kanalda bu kullanıcıdan mesaj bulunamadı.",
                searchFailed: "Mesajlar aranırken hata oluştu."
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
            },
            text: {
                keywordEntryI1: "Anahtar Kelime Girdisi {{i_1}}",
                listPriorityAdvanced: "Liste önceliği (Gelişmiş)",
                whichListToPrioritize: "Bir mesaj iki listeyi de tetiklerse hangi listenin öncelikli olacağı",
                ifYouAreNot: "Emin değilsen, çoğu yaygın senaryoda genellikle Kara Liste olarak ayarlanır"
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
                showAlbumCover: {
                    label: "Albüm Kapağını Göster",
                    description: "Albüm kapağını gösterir. Bunu devre dışı bırakmak yer tutucu bir görsel görüntüler. Müziğiniz uygunsuz kapak görseline sahipse kullanışlıdır"
                },
                useLogo: {
                    label: "Logo Kullan",
                    description: "Albüm kapağında ListenBrainz logosunu göster"
                }
            },
            button: {
                profile: "ListenBrainz Profili",
                viewSong: "Şarkıyı Görüntüle"
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
            },
            text: {
                allQuotesDisabled: "Tüm yükleme alıntılarını gerçekten devre dışı mı bıraktınız? Ne aptalca bir hareket..."
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
            orPaste: "Veya panodan bir resim yapıştır!",
            verifyLogin: "Girişi Doğrula",
            text: {
                scanQrCode: "QR Kodu Tara"
            }
        },
        markdownTables: {
            name: "MarkdownTables",
            description: "Discord mesajlarında GitHub tarzı markdown tablolarını görüntüler.",
            toolbar: {
                label: "Markdown tablo görünümü",
                table: "Tablo",
                raw: "Ham"
            },
            option: {
                hideToggle: {
                    label: "Geçişi Gizle",
                    description: "Tablo/Ham geçişini gizler ve tabloları her zaman işlenmiş olarak gösterir."
                }
            }
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
            description: "Sunucudaki çevrimiçi üye, toplam üye ve ses kanallarındaki kullanıcı sayısını üye listesinde ve araç ipucunda gösterir.",
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
            totalVoice: "{{formattedVoiceCount}} sesli kanallarda üye",
            tooltip: {
                total: "Toplam {{count}} sunucu üyesi"
            }
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
        messageBurst: {
            name: "MessageBurst",
            description: "Sizden önce başka biri mesaj göndermediği sürece, belirli bir süre içinde gönderilen mesajları önceki mesajınızla birleştirir.",
            option: {
                timePeriod: {
                    label: "Zaman Aralığı",
                    description: "Birleştirme süresi (saniye cinsinden)."
                },
                shouldMergeWithAttachment: {
                    label: "Eklerle Birleştir",
                    description: "Son mesajda bir ek (dosya/görsel) varsa mesajlar birleştirilsin mi?"
                },
                useSpace: {
                    label: "Boşluk Kullan",
                    description: "Birleştirme sırasında yeni satıra geçmek yerine mesajlar arasına boşluk eklenip eklenmeyeceği."
                }
            }
        },
        messageClickActions: {
            name: "MessageClickActions",
            description: "Backspace tuşunu basılı tutup tıklayarak silmeyi, çift tıklayarak düzenleme veya yanıtlamayı sağlar.",
            option: {
                singleClickAction: {
                    label: "Tek Tıklama Eylemi",
                    description: "Tek tıklama eylemi (kendi mesajlarınızda)"
                },
                singleClickModifier: {
                    label: "Tek Tıklama Modifikatörü",
                    description: "Tek tıklama eylemi için gereken modifikatör (kendi mesajlarınızda)"
                },
                singleClickOthersAction: {
                    label: "Tek Tıklama Eylemi (Diğerleri)",
                    description: "Tek tıklama eylemi (diğerlerinin mesajlarında)"
                },
                singleClickOthersModifier: {
                    label: "Tek Tıklama Modifikatörü (Diğerleri)",
                    description: "Tek tıklama eylemi için gereken modifikatör (diğerlerinin mesajlarında)"
                },
                doubleClickAction: {
                    label: "Çift Tıklama Eylemi",
                    description: "Kendi mesajlarınızda çift tıklama eylemi"
                },
                doubleClickOthersAction: {
                    label: "Çift Tıklama Eylemi (Diğerleri)",
                    description: "Diğerlerinin mesajlarında çift tıklama eylemi"
                },
                doubleClickModifier: {
                    label: "Çift Tıklama Modifikatörü",
                    description: "Çift tıklama eylemi için gereken modifikatör"
                },
                tripleClickAction: {
                    label: "Üç Tıklama Eylemi",
                    description: "Üç tıklama eylemi"
                },
                tripleClickModifier: {
                    label: "Üç Tıklama Modifikatörü",
                    description: "Üç tıklama eylemi için gereken modifikatör"
                },
                reactEmoji: {
                    label: "Reaksiyon Emojisi",
                    description: "Reaksiyon eylemleri için kullanılacak emoji"
                },
                addAdditionalReacts: {
                    label: "Ek Reaksiyonları Ekle",
                    description: "Ayrıca yapılandırılmış ek reaksiyon emojilerini ekle"
                },
                additionalReactEmojis: {
                    label: "Ek Reaksiyon Emojileri",
                    description: "Reaksiyon eylemi kullanılırken eklenecek ek emojiler (virgül/enter ile ayrılmış, maks {{count}})"
                },
                disableInDms: {
                    label: "DM'lerde Devre Dışı Bırak",
                    description: "Tüm tıklama eylemlerini doğrudan mesajlarda devre dışı bırak"
                },
                disableInSystemDms: {
                    label: "Sistem DM'lerinde Devre Dışı Bırak",
                    description: "Tüm tıklama eylemlerini sistem DM'lerinde devre dışı bırak"
                },
                clickTimeout: {
                    label: "Tıklama Zaman Aşımı",
                    description: "Çift/üçlü tıklamaları ayırt etmek için zaman aşımı (ms)"
                },
                doubleClickHoldThreshold: {
                    label: "Çift Tıklama Tutma Eşiği",
                    description: "Çift tıklama eylemleri için maksimum tutma süresi (ms). Daha uzun tutmak metin seçimi izin verir"
                },
                deferDoubleClickForTriple: {
                    label: "Üçlü Tıklama İçin Çift Tıklamayı Geciktir",
                    description: "Üçlü tıklama eylemlerini izin vermek için çift tıklamayı geciktir (kapalıysa üçlü tıklama devre dışı bırakılır)"
                },
                selectionHoldTimeout: {
                    label: "Seçim Tutma Zaman Aşımı",
                    description: "Metin seçimine izin vermek için zaman aşımı (ms)"
                },
                quoteWithReply: {
                    label: "Alıntı ile Yanıtla",
                    description: "Alıntı yaparken, mesaja da yanıt ver"
                },
                useSelectionForQuote: {
                    label: "Alıntı için Seçimi Kullan",
                    description: "Alıntı yaparken, seçili metni kullan (varsa)"
                }
            },
            actions: {
                none: "Yok",
                delete: "Sil",
                copyLink: "Bağlantıyı Kopyala",
                copyID: "ID'yi Kopyala",
                copyContent: "İçeriği Kopyala",
                copyUserID: "Kullanıcı ID'sini Kopyala",
                edit: "Düzenle",
                reply: "Yanıtla",
                react: "Tepki Ver",
                openThread: "Konuyu Aç",
                openTab: "Sekmede Aç",
                quote: "Alıntıla",
                pin: "Sabitle"
            },
            missingPermissions: {
                react: "Tepki verilemiyor: Eksik izinler",
                pin: "Sabitlenemiyor: Eksik izinler",
            },
            cannotQuote: "Bu mesaj türü alıntılanamaz",
            copy: {
                messageId: "Mesaj ID'si kopyalandı!",
                messageContent: "Mesaj içeriği kopyalandı!",
                userId: "Kullanıcı ID'si kopyalandı!"
            },
            linkCopied: "Bağlantı kopyalandı!",
            text: {
                shift: "Shift",
                ctrl: "Ctrl",
                alt: "Alt",
                backspace: "Geri Al",
                pickEmoji: "Emoji Seç"
            },
            emojiSetting: {
                pick: "Emoji Seç",
                selectMain: "Tepkiler İçin Emoji Seç",
                selectAdditional: "Ek Emojileri Seç",
                additionalPlaceholder: "virgül/yeni satırla ayrılmış, en fazla {{max}}"
            },
            toast: {
                cannotReact: "Tepki verilemiyor: Eksik izinler",
                linkCopied: "Bağlantı kopyalandı!"
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
            description: "Mesaj bağlantıları, yanıtlar ve iletilen mesajlar üzerine gelindiğinde bir araç ipucu ve mesaj önizlemesi ekler.",
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
            removeMessage: "Mesaj Geçmişini Temizle",
            removeMessageTemporary: "Mesajı Kaldır (Geçici)",
            clearMessageLog: "Mesaj Günlüğünü Temizle",
            showDiff: "Farkı Göster",
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
                ignoreSelfEdits: {
                    label: "Kendi Düzenlemelerini Yoksay",
                    description: "Kendi yaptığınız düzenlemelerin yoksayılıp yoksayılmayacağı"
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
                },
                logDeletedAttachments: {
                    description: "Silinen eklerin kaydedilip kaydedilmeyeceği",
                    label: "Silinen Ekleri Kaydet"
                }
            },
            text: {
                clearHistory: "Geçmişi Temizle",
                toggleDeletedHighlight: "Silinen Vurgusunu Aç/Kapat",
                enableDiffView: "Fark Görünümünü Etkinleştir",
                disableDiffView: "Fark Görünümünü Devre Dışı Bırak",
                noDeletedMessages: "Silinmiş mesaj yok",
                deletedMessageSuffix: " silinmiş mesaj",
                deletedMessagesSuffix: " silinmiş mesaj"
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
            importing: "İçe Aktarılıyor...",
            importLogs: "Günlükleri İçe Aktar",
            exporting: "Dışa Aktarılıyor...",
            exportLogs: "Günlükleri Dışa Aktar",
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
                },
                cleared: "Mesaj günlük veritabanı ve önbelleği temizlendi."
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
                permanentlyRemoveLogByDefault: {
                    label: "Varsayılan Olarak Günlüğü Kalıcı Olarak Sil",
                    description: "Ana MessageLogger bağlam menüsünde, mesaj günlüğünden kaldırma seçeneği varsayılan olarak kalıcı olarak silme olarak değiştirilir."
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
                timeBasedCleanupMinutes: {
                    label: "Zamana Dayalı Dakikalık Temizlik",
                    description: "Mesaj sınırından daha eski mesajların zaman bazlı temizliğinin yapılacağı dakika aralığı."
                },
                preserveCurrentChannel: {
                    label: "Geçerli Kanalı Koru",
                    description: "Etkinleştirildiğinde, şu anda seçili kanalınızdaki mesajlar zaman bazlı temizlikten etkilenmez."
                },
                whitelistedIds: {
                    label: "Beyaz Liste Kimlikleri",
                    description: "Mesaj kaydında her zaman gösterilecek sunucu, kanal veya kullanıcı kimlikleri."
                },
                blacklistedIds: {
                    label: "Kara Liste Kimlikleri",
                    description: "Mesaj kaydında asla gösterilmeyecek sunucu, kanal veya kullanıcı kimlikleri."
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
                clearLogsOnRestart: {
                    label: "Yeniden Başlatmada Logları Temizle",
                    description: "Discord yeniden başlatıldığında logları temizler."
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
            },
            toast: {
                clearedLogs: "Kayıtlar temizlendi",
                failedToClearLogs: "Kayıtlar temizlenemedi",
                failedToRemoveMessage: "Mesaj kaldırılamadı. Ayrıntılar için konsolu kontrol et.",
                noMessagesFoundIn: "Kayıt dosyasında mesaj bulunamadı",
                successfullyImportedCountLogs: "{{count}} kayıt başarıyla içe aktarıldı",
                successfullyExportedLogs: "Kayıtlar başarıyla dışa aktarıldı",
                successfullyExportedCountLogs: "{{count}} kayıt başarıyla dışa aktarıldı",
                errorExportingLogsCheck: "Kayıtlar dışa aktarılırken hata oluştu. Daha fazla bilgi için konsolu kontrol et"
            },
            text: {
                jsonFile: "JSON Dosyası",
                clearLogs: "Kayıtları Temizle",
                clearingLogs: "Kayıtlar temizleniyor...",
                messageLogger: "Message Logger",
                importLogs: "Kayıtları İçe Aktar",
                logs: "Kayıtlar",
                loadingTabLogs: "{{tab}} kayıtları yükleniyor..."
            }
        },
        messageNotifier: {
            name: "MessageNotifier",
            description: "Seçilen kullanıcılar mesaj gönderdiğinde bildirim al",
            dm: "özel mesaj",
            option: {
                users: {
                    label: "Kullanıcılar",
                    description: "Mesaj bildirimi alınacak kullanıcı kimliklerinin (ID) virgülle ayrılmış listesi",
                    invalidId: "{{id}} geçerli bir kullanıcı kimliği değil"
                }
            },
            notification: {
                title: "{{username}} bir mesaj gönderdi",
                body: "{{locationName}} konumuna gitmek için tıkla"
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
        micLoopbackTester: {
            name: "MicLoopbackTester",
            description: "Kullanıcı paneline mikrofon döngü test simgesi ekler",
            button: "Mikrofon Test Döngüsü"
        },
        middleClickTweaks: {
            name: "MiddleClickTweaks",
            description: "Yapıştırma ve bağlantı açma gibi çeşitli orta tık (farenin tekerleği) iyileştirmeleri.",
            option: {
                openScope: {
                    label: "Açma Kapsamı",
                    description: "Bu içerik türlerine orta tıklandığında açılmalarını engeller.",
                    links: "Bağlantılar",
                    media: "Medya",
                    linksAndMedia: "Bağlantılar ve Medya",
                    none: "Hiçbiri"
                },
                pasteScope: {
                    label: "Yapıştırma Kapsamı",
                    description: "Belirli durumlarda orta tık ile yapıştırma işlemini engeller.",
                    always: "Orta Tık ile Yapıştırmayı Her Zaman Engelle",
                    focus: "Sadece Metin Alanı Odaklanmadığında Engelle",
                },
                pasteThreshold: {
                    label: "Yapıştırma Eşiği",
                    description: "Orta tık sonrasında yapıştırmanın tekrar etkinleşmesi için gereken milisaniye."
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
        moreQuickReactions: {
            name: "MoreQuickReactions",
            description: "Mesaj bağlam menüsündeki hızlı tepki butonlarını geliştirir.",
            option: {
                reactionCount: {
                    label: "Tepki Sayısı",
                    description: "Gösterilecek tepki sayısı (0-42)"
                },
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
        moreUserTags: {
            name: "MoreUserTags",
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
                spotifySectionTitle: {
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
                tidalSectionTitle: {
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
                websocketURL: {
                    label: "WebSocket URL'si",
                    description: "Varsayılan: ws://localhost:24123"
                },
                YtmSectionTitle: {
                    label: "YouTube Music",
                    description: "{{app}} bu ayar için gerekli"
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
                showMusicNoteOnNoLyrics: {
                    label: "Şarkı Sözü Yoksa Nota Göster",
                    description: "Şarkı sözü bulunamadığında nota simgesi göster"
                },
                lyricsPosition: {
                    label: "Şarkı Sözü Konumu",
                    description: "Şarkı sözü panelinin konumu",
                    above: "Oynatıcı(lar)ın Üstünde",
                    below: "Oynatıcı(lar)ın Altında"
                },
                lyricsProvider: {
                    label: "Şarkı Sözü Sağlayıcısı",
                    description: "Şarkı sözlerinin alındığı kaynak",
                    spotify: "Spotify (Musixmatch)",
                    LRCLIB: "LRCLIB"
                },
                spotifyLyricsApiUrl: {
                    label: "Spotify Şarkı Sözü API Temel URL'si",
                    description: "Özel örnek temel URL'si (örneğin: http://localhost:8080)."
                },
                translateTo: {
                    label: "Diline Çevir",
                    description: "Şarkı sözlerini çevir — Bunu değiştirmek mevcut çevirileri temizler",
                    cleared: "Çeviriler temizlendi"
                },
                lyricsConversion: {
                    label: "Şarkı Sözü Dönüştürme",
                    description: "Şarkı sözlerini otomatik olarak çevir veya romanize et",
                    none: "Hiçbiri",
                    translate: "Çevir",
                    romanize: "Romanize Et"
                },
                fallbackProvider: {
                    label: "Yedek Sağlayıcı",
                    description: "Bir şarkı sözü sağlayıcısı başarısız olursa diğerini dene"
                },
                showFailedToasts: {
                    label: "Başarısız Bildirimlerini Göster",
                    description: "Şarkı sözleri yüklenemediğinde bildirim göster"
                },
                purgeLyricsCache: {
                    label: "Şarkı Sözü Önbelleğini Temizle",
                    description: "Tüm önbelleğe alınmış şarkı sözlerini ve çevirileri sil",
                    button: "Önbelleği Temizle",
                    cacheLyricsPurged: "Şarkı sözü önbelleği temizlendi"
                },
                lyricDelay: {
                    label: "Şarkı Sözü Gecikmesi"
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
            },
            text: {
                unknownArtist: "Bilinmeyen Sanatçı",
                unknownTitle: "Bilinmeyen Başlık"
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
        neverPausePreviews: {
            name: "NeverPausePreviews",
            description: "Uygulama odağını kaybetse bile arama içi/PiP önizlemelerinin (ekran paylaşımı, yayınlar vb.) duraklatılmasını engeller.",
            about: "Bu eklenti, Discord'un normalden daha fazla kaynak tüketmesine neden olur."
        },
        newGuildSettings: {
            name: "NewGuildSettings",
            description: "Yeni sunuculara katıldığında otomatik olarak sessize alır ve çeşitli diğer ayarları değiştirir",
            context: {
                apply: "NewGuildSettings'i Klasöre Uygula"
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
                },
                voiceChannels: {
                    label: "Sesli Kanallar",
                    description: "Sesli kanallarda isimleri otomatik olarak gizle"
                }
            }
        },
        newPluginsManager: {
            name: "NewPluginsManager",
            description: "Plexcord’a yeni eklentiler eklendiğinde sizi bilgilendiren yardımcı araç",
            modal: {
                title: "Yeni Eklentiler ve Ayarlar",
                description: "Son ziyaretinizden bu yana yeni eklentiler ve ayarlar eklenmiştir. Lütfen aşağıda yeni eklenenleri inceleyin.",
                tooltip: "Bu oturum için kapat",
                dontShowAgain: "Bir daha gösterme",
                restartRequired: "Aşağıdaki eklentiler yeniden başlatma gerektiriyor",
                restart: "Yeniden Başlat",
                continue: "Devam Et",
                supportUs: "Plexcord Açık Kaynak bir yazılımdır. Kullanmaktan keyif alıyorsan bizi desteklemeyi düşünebilirsin:",
                supportUsLink: "buradan"
            }
        },
        noAppsAllowed: {
            name: "NoAppsAllowed",
            description: "Botların Bot etiketini geri getirir"
        },
        noBlockedMessages: {
            name: "NoBlockedMessages",
            description: "Engellenmiş/yok sayılmış tüm mesajları sohbetten tamamen gizler",
            option: {
                alsoHideIgnoredUsers: {
                    label: "Yok Sayılan Kullanıcıları da Gizle",
                    description: "Yok sayılan kullanıcılardan gelen mesajları da gizle."
                },
                disableNotifications: {
                    label: "Bildirimleri Devre Dışı Bırak",
                    description: "Engellenen kullanıcılar için yeni mesaj bildirimlerini gizle. Eğer aşağıdaki 'Varsayılan Kullanıcı Gizleme' özelliği etkinse ve bildirimi tetikleyen kullanıcı 'İstisna Kullanıcılar' listesinde değilse her zaman geçerli olur."
                },
                allowAutoModMessages: {
                    label: "AutoMod Mesajlarına İzin Ver",
                    description: "AutoMod tarafından gönderilen mesajların filtrelenmeden geçmesine izin ver."
                },
                hideBlockedUserReplies: {
                    label: "Engellenen Kullanıcı Yanıtlarını Gizle",
                    description: "Daha önce katıldığınız başlıklardaki (thread) engellenmiş kullanıcılardan gelen mesajları gizle."
                },
                defaultHideUsers: {
                    label: "Varsayılan Kullanıcı Gizleme",
                    description: "Etkinleştirilirse, engellenen kullanıcılardan gelen mesajlar tamamen gizlenir ve istisna listesindeki kullanıcı kimliklerinden gelen mesajlar ise bunun yerine daraltılır (varsayılan Discord davranışı). Devre dışı bırakılırsa, engellenen kullanıcıların mesajları daraltılır ve istisna listesindeki kullanıcı kimliklerinden gelen mesajlar tamamen gizlenir."
                },
                overrideUsers: {
                    label: "İstisna Kullanıcılar",
                    description: "Yukarıda seçilen varsayılan davranış yerine, gizlenecek veya daraltılacak kullanıcı kimliklerinin (ID) virgülle ayrılmış listesi."
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
        noPushToTalk: {
            name: "NoPushToTalk",
            description: "Zorunlu kılan kanallarda ses etkinliği için bas-konuş gereksinimini atlar."
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
        noRoleHeaders: {
            name: "NoRoleHeaders",
            description: "Hepimiz eşitiz!! Üye listesindeki rol başlıklarını kaldırır."
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
            description: "Masaüstü bildirimlerini daha bilgilendirici hale getirir.",
            text: {
                threadInParent: "{{parent}} içinde {{thread}}"
            }
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
        onePingPerDM: {
            name: "OnePingPerDM",
            description: "Bir kullanıcı DM’lerde art arda okunmamış mesajlar gönderse bile yalnızca bir sesli bildirim alırsınız.",
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
                },
                vrcx: {
                    label: "VRChat",
                    description: "VRChat bağlantılarını VRChat uygulamasında aç"
                },
                telegram: {
                    label: "Telegram",
                    description: "Telegram bağlantılarını Telegram uygulamasında aç"
                }
            },
            notification: {
                open: "Bağlantı yerel uygulamada açıldı"
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
            },
            text: {
                roleOptions: "Rol Seçenekleri",
                userOptions: "Kullanıcı Seçenekleri",
                unknownRole: "Bilinmeyen Rol",
                unknownUser: "Bilinmeyen Kullanıcı"
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
                        noImage: "Resim belirtilmedi!",
                        delayTooLow: "Gecikme en az 20 olmalıdır.",
                    }
                }
            },
            error: {
                uploadNotImage: "Yüklenen dosya bir resim değil",
                fetchUserFailed: "Kullanıcı alınamadı. Daha fazla bilgi için konsolu kontrol edin.",
                fetchImageFailed: "{{url}} yüklenirken bir hata oluştu. Daha fazla bilgi için konsolu kontrol edin."
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
                    label: "DM'leri Sabitle",
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
                friendsSidebarGroupDms: {
                    label: "Arkadaşlar Kenar Çubuğunda Grup DM'leri",
                    description: "Sabitlenmiş grup DM'lerini arkadaşlar kenar çubuğunda göster."
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
                },
                defaultCategoryName: "Sabit Kategori {{number}}"
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
            embeddedTooltip: "Gömülü (Konsol veya Oyun)",
            vrTooltip: "VR",
            option: {
                list: {
                    label: "Liste",
                    description: "Kullanıcı profillerinde göstergeleri göster"
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
                },
                showBots: {
                    label: "Botları Göster",
                    description: "Botlarda platform göstergelerini gösterip göstermemeyi belirler"
                }
            }
        },
        platformSpoofer: {
            name: "PlatformSpoofer",
            description: "Hangi platformda veya cihazda olduğunuzu taklit eder",
            about: "Bu eklentinin uyarı veya yasaklama almana neden olmayacağını garanti edemeyiz. Xbox/Playstation/VR seçmek istemcini eski bir sürüme çevirebilir.",
            platform: {
                desktop: "Discord İstemcisi",
                web: "Discord Web",
                ios: "Discord iOS",
                android: "Discord Android",
                xbox: "Gömülü Discord",
                playstation: "Gömülü Discord",
                vr: "VR"
            },
            option: {
                platform: {
                    label: "Platform",
                    description: "Hangi platformdaymış gibi görüneceğin.",
                    desktop: "Masaüstü",
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
        polishWording: {
            name: "PolishWording",
            description: "Mesajlarınızın daha hoş görünmesi ve daha iyi bir dilbilgisine sahip olması için ufak düzenlemeler yapar. Ayarlara göz atın",
            option: {
                quickDisable: {
                    label: "Hızlı Devre Dışı Bırak",
                    description: "Hızlı devre dışı bırakma. Uygulamayı yeniden başlatmaya gerek kalmadan mesaj düzenlemeyi kapatır."
                },
                blockedWords: {
                    label: "Engellenen Kelimeler",
                    description: "Büyük harfe çevrilmeyecek kelimeler (virgülle ayırın)."
                },
                fixApostrophes: {
                    label: "Kesme İşaretlerini Düzelt",
                    description: "Kısaltmaların kesme işareti içerdiğinden emin olur."
                },
                expandContractions: {
                    label: "Kısaltmaları Aç",
                    description: "Kısaltılmış kelimeleri açık hallerine getirir (Don't -> Do not gibi)."
                },
                fixCapitalization: {
                    label: "Büyük Harf Düzenleme",
                    description: "Cümlelerin büyük harfle başlamasını sağlar."
                },
                fixPunctuation: {
                    label: "Noktalama İşaretlerini Düzelt",
                    description: "Noktalama işaretlerinin etrafındaki boşlukları düzenler."
                },
                fixPunctuationFrequency: {
                    label: "Noktalama İşareti Sıklığı",
                    description: "Cümle sonuna nokta koyma sıklığı yüzdesi (bu özellik bazı insanları oldukça rahatsız edebilir).",
                }
            }
        },
        previewMessage: {
            name: "PreviewMessage",
            description: "Mesajınızı göndermeden önce önizlemenizi sağlar.",
            tooltip: "Mesajı Önizle"
        },
        profileSets: {
            name: "ProfileSets",
            description: "Farklı profil ön ayarlarını kaydetmeni ve yüklemeni sağlar.",
            toast: {
                importFailed: "Ön ayarlar içe aktarılamadı. Dosya geçersiz olabilir.",
            },
            option: {
                avatarSize: {
                    label: "Avatar Boyutu",
                    description: "Profil önayarları listesinde avatar boyutu"
                },
            },
            modal: {
                override: "Üzerine Yaz",
                merge: "Birleştir",
                cancel: "İptal",
                timestamp: "{{formattedDate}}, {{formattedTime}}",
                rename: "Yeniden Adlandır",
                update: "Güncelle",
                moveUp: "Yukarı Taşı",
                moveDown: "Aşağı Taşı",
                moveTo: "1. Sayfaya Taşı",
                delete: "Sil",
                importProfiles: "Profilleri İçe Aktar",
                importText: "Bu bölümde {{existingCount}} mevcut profilin var. Bunların üzerine mi yazmak istersin, yoksa içe aktarılan profillerle birleştirmek mi?",
                heading: "Kayıtlı Profiller",
                searchProfiles: "Profillerde ara...",
                profileName: "Profil Adı",
                saving: "Kaydediliyor...",
                save: "Profili Kaydet",
                cancelSearch: "Aramayı İptal Et",
                search: "Ara",
                random: "Rastgele",
                import: "İçe Aktar",
                exportAll: "Tümünü Dışa Aktar"
            },
            text: {
                selectAServer: "Bir sunucu seç",
                profileSets: "Profil Setleri",
                youAreNotIn: "Henüz hiçbir sunucuda değilsin.",
                mainProfile: "Ana Profil",
                serverProfiles: "Sunucu Profilleri",
                openProfileSets: "Profil Setlerini Aç"
            }
        },
        questify: {
            name: "Questify",
            description: "Belirli Görev özelliklerini geliştirin, rahatsız edici öğeleri kapatın veya Görevleri tamamen kaldırın.",
            quests: "Görevler",
            context: {
                quest: {
                    label: "Görev Butonu Menüsü",
                    ignore: "Tümünü Yok Sayılan Olarak İşaretle",
                    reset: "Yok Sayılanlar Listesini Sıfırla",
                    fetch: "Görevleri Getir",
                    markAsIgnored: "Yok Sayılan Olarak İşaretle",
                    unmarkAsIgnored: "Yok Sayılan İşaretini Kaldır",
                    stopAuto: "Otomatik Tamamlamayı Durdur",
                    startAuto: "Otomatik Tamamlamayı Başlat",
                    copyQuestID: "Görev ID'sini Kopyala",
                    pauseAutoEnrollment: "Otomatik Kaydı Duraklat",
                    unpauseAutoEnrollment: "Otomatik Kaydı Sürdür",
                    pauseAutoProcessing: "Otomatik İşlemeyi Duraklat",
                    unpauseAutoProcessing: "Otomatik İşlemeyi Sürdür"
                }
            },
            button: {
                completing: "Tamamlanıyor...",
                completingWithTime: "Tamamlanıyor ({{time}})",
                completingIn: "{{time}} içinde tamamlanıyor",
                queued: "Sırada ({{position}})",
                resuming: "Devam ediliyor...",
                completeNow: "Şimdi Tamamla",
                complete: "Tamamla ({{time}})",
                resume: "Devam Et ({{time}})",
                completed: "Tamamlandı"
            },
            reward: {
                orbs: "{{status}}: {{orbQuantity}} Orb.",
                article: "{{status}}: {{itemName}}.",
                unrecognized: "{{status}}: tanınmayan bir ödül."
            },
            toast: {
                autoCompleteBroken: "Otomatik Tamamlama bozuk. Kısa süre içinde bir düzeltme yayınlanacak.",
                enrollmentFailed: "{{questName}} Görevine kayıt başarısız oldu.",
                enrollmentInNormalizequestnameQuest: "{{normalizeQuestName_quest}} görevine kayıt başarısız oldu{{rateLimitSuffix}}.",
                automationUnlocked: "Görev Otomasyonunun Kilidi Açıldı.",
                automationLocked: "Görev Otomasyonu Kilitlendi."
            },
            notification: {
                completed: {
                    title: "Görev Tamamlandı!",
                    body: "{{questName}} Görevi tamamlandı."
                },
                newQuest: {
                    title: "Yeni Görev Bulundu!",
                    body: "{{questName}} Görevi artık mevcut."
                },
                newQuests: {
                    title: "Yeni Görevler Bulundu!",
                    body: "{{count}} yeni Görev artık mevcut."
                },
                newExcludedQuest: {
                    title: "Yeni Hariç Tutulan Görev Bulundu!",
                    body: "Hariç tutulan {{questName}} Görevi bulundu. ID: {{questId}}"
                },
                newExcludedQuests: {
                    title: "Yeni Hariç Tutulan Görevler Bulundu!",
                    body: "{{count}} yeni hariç tutulan Görev bulundu. Görev ID'leri için konsolu kontrol edin."
                }
            },
            alert: {
                restart: {
                    title: "Yeniden Başlatma Gerekli",
                    body: "Questify ayarlarında yaptığınız bir değişiklik yeniden başlatma gerektiriyor.",
                    confirm: "Yeniden Başlat",
                    cancel: "Daha Sonra"
                },
                dangerous: {
                    title: "Emin misiniz?",
                    confirm: "Devam Et",
                    cancel: "İptal",
                    disableEverything: "Bu, Görev işlevselliğini tamamen devre dışı bırakacak.",
                    allowDangerous: "Bu, tehlikeli ayarların değiştirilmesine izin verecek."
                }
            },
            status: {
                unclaimed: "ALINMADI",
                claimed: "Alınmış",
                ignored: "Yok Sayılan",
                expired: "Süresi Dolmuş"
            },
            questTypes: {
                watchVideo: "Video İzle",
                watchVideoOnMobile: "Mobilde Video İzle",
                achievementInActivity: "Etkinlikte Başarım",
                achievementInGame: "Oyunda Başarım",
                playActivity: "Etkinlik Oyna",
                playOnDesktop: "Masaüstünde Oyna",
                playOnDesktopV2: "Masaüstünde Oyna V2",
                streamOnDesktop: "Masaüstünde Yayın Yap",
                playOnPlayStation: "PlayStation'da Oyna",
                playOnXbox: "Xbox'ta Oyna"
            },
            settings: {
                questButton: {
                    title: "Görev Butonu",
                    description: "Sunucu listesinde, alınmamış ve yok sayılmamış Görevler için isteğe bağlı bir göstergeyle bir Görev Butonu gösterin.",
                    behavior: "Buton Davranışı",
                    leftClick: "Sol Tık Eylemi:",
                    middleClick: "Orta Tık Eylemi:",
                    rightClick: "Sağ Tık Eylemi:",
                    visibility: "Buton Görünürlüğü:",
                    visibilityTooltip: "Her Zaman, bu özellik etkin olduğu sürece Görev Butonunu gösterir.\n\nAlınmamış, yalnızca ilgili alınmamış Görev ödülleriniz varken gösterir.\n\nAsla, Görev Butonunu gizler.",
                    unclaimedIndicator: "Alınmamış Göstergesi:",
                    unclaimedIndicatorTooltip: "Hap, Görev Butonunun yanında Discord'un okunmamış tarzı işaretini gösterir.\n\nRozet, ilgili alınmamış Görev ödüllerinin sayısını gösterir.\n\nİkisi, hap ve rozeti birlikte gösterir.\n\nHiçbiri, alınmamış göstergelerini gizler.",
                    badgeColor: "Rozet Rengi:",
                    relevancy: "Görev Uygunluğu",
                    includedRewardTypes: "Dahil Edilen Ödül Türleri:",
                    includedRewardTypesTooltip: "Buton görünürlüğü, rozet sayısı ve uyarı davranışı belirlenirken yalnızca bu ödül türlerine sahip Görevleri alınmamış olarak say.",
                    includedQuestTypes: "Dahil Edilen Görev Türleri:",
                    includedQuestTypesTooltip: "Buton görünürlüğü, rozet sayısı ve uyarı davranışı belirlenirken yalnızca bu görev türlerine sahip Görevleri alınmamış olarak say.",
                    display: {
                        always: "Her Zaman",
                        unclaimed: "Alınmamış",
                        never: "Asla"
                    },
                    indicator: {
                        pill: "Hap",
                        badge: "Rozet",
                        both: "İkisi",
                        none: "Hiçbiri"
                    },
                    action: {
                        openQuests: "Görevleri Aç",
                        contextMenu: "Bağlam Menüsü",
                        pluginSettings: "Eklenti Ayarları",
                        nothing: "Hiçbir Şey"
                    },
                    rewardTypes: {
                        orbs: "Orb'lar",
                        nitroCodes: "Nitro Kodları",
                        rewardCodes: "Ödül Kodları",
                        inGameItems: "Oyun İçi Eşyalar",
                        profileCollectibles: "Profil Koleksiyonları"
                    }
                },
                questFeatures: {
                    title: "Görev Özellikleri",
                    description: "İşlevselliği geliştirmek veya kaldırmak için Görevlerin davranışını değiştirin.",
                    disableFeatures: "Özellikleri Devre Dışı Bırak",
                    disableEverything: "Görev işlevselliğini tamamen devre dışı bırak:",
                    disableEverythingTooltip: "Bu, tüm eklenti geliştirmelerini devre dışı bırakır, Görevler sayfasını ve Discord genelindeki Görev öğelerini gizler ve Discord'un Görev verilerini getirmesini engeller. Orb'lar ikincil para birimi olarak mağazaya sıkı sıkıya bağlı olduğundan bu, mağazayı etkilemez.",
                    disableSpecific: "Belirli özellikleri devre dışı bırak:",
                    disableSpecificTooltip: "Sponsorlu Afiş, Görevler sayfasının üstündeki ücretli Görev afişidir.\n\nTaşınma Bildirimleri, Keşfet sayfasında olduğu gibi Görevlerin DM'lere taşındığını belirten göstergelerdir.\n\nArkadaş Listesi Tanıtımı, sunucu paylaştığınız bir kullanıcı aktif Görevi olan bir oyun oynarken Arkadaş Listenizin \"Şimdi Aktif\" bölümünde görünen bir karttır.\n\nÜye Listesi Tanıtımı, bir sunucunun Üye Listesinde aktif Görevi olan bir oyun oynayan üyelerin yanında görünen bir simgedir.\n\nHesap Paneli Tanıtımı, kullanıcı hesap panelinizin üstünde görünen ücretli bir Görev tanıtımıdır.\n\nHesap Paneli İlerlemesi, kullanıcı hesap panelinizin üstünde gösterilen aktif veya tamamlanmış Görev ilerlemesidir.\n\nGörev ve Orb Rozetleri, birinin en az bir Görevi tamamladığını veya Orb rozetini satın aldığını gösteren kullanıcı profillerindeki rozetlerdir.",
                    disableOptions: {
                        sponsoredBanner: "Sponsorlu Afiş",
                        relocationNotices: "Taşınma Bildirimleri",
                        friendsListPromo: "Arkadaş Listesi Tanıtımı",
                        membersListPromo: "Üye Listesi Tanıtımı",
                        accountPanelPromo: "Hesap Paneli Tanıtımı",
                        accountPanelProgress: "Hesap Paneli İlerlemesi",
                        orbsAndQuestsBadges: "Görev ve Orb Rozetleri"
                    },
                    modifyFeatures: "Özellikleri Değiştir",
                    warningTos: "Discord, Görevlerin nasıl tamamlandığını değiştiren betik veya eklenti kullanıcılarına uyarı göndermeye başladı; bu, {{tos}} ihlalidir.",
                    tos: "Hizmet Koşulları",
                    warningEscalate: "Uyarılar şimdilik Görevlere veya ödüllerine erişimin kaybedilmesi tehdidiyle sınırlı görünüyor, ancak Discord bunu her an ağırlaştırabilir.",
                    warningDetection: "Discord'un kullanıcıları izlemek için kullandığı çeşitli yöntemler nedeniyle tespitten gerçekçi bir şekilde kaçmanın yolu yoktur. Devam ederseniz, Discord'un büyük olasılıkla bir noktada bunu tespit edeceğini bilin.",
                    warningRisk: "Potansiyel olarak tehlikeli ayarlara erişmek için aşağıdaki düğmeyi riski size ait olmak üzere kullanın.",
                    allowDangerous: "Tehlikeli ayarların değiştirilmesine izin ver...",
                    disallowDangerous: "Sıfırla ve tehlikeli ayarların değiştirilmesini engelle...",
                    completeVideoQuicker: "Video Görevi otomatik tamamlamayı hızlandır:",
                    completeVideoQuickerTooltip: "Discord, Göreve kaydolduğunuzdan bu yana video süresinden 24 saniye eksik bir süre geçtiğinde Video Görevlerinin tamamlanmasına izin verir.\n\nBu, bir Video Görevi 24 saniye veya daha kısaysa ya da bir Video Görevine kaydolup tamamlamak için daha sonra geri dönerseniz, hemen tamamlanabileceği anlamına gelir.\n\nBu ayar yalnızca Video Görevlerinin otomatik tamamlanmasına uygulanır ve aşağıdaki otomatik tamamlama ayarına bağlıdır. Video Görevlerini elle tamamlamak yine tüm sürenin beklenmesini gerektirir ve kayıt zamanına bağlı değildir.",
                    mobileDesktop: "Yalnızca mobil olan bazı Video Görevlerini masaüstünde tamamlanabilir yap:",
                    mobileDesktopTooltip: "Yalnızca mobil olan bazı Video Görevlerine masaüstünden kaydolunabilir, ancak yine de mobilde tamamlanmaları gerekir. Bu ayar, bunların masaüstünde tamamlanmasına izin verir.\n\nYalnızca mobil olan bazı Video Görevlerine yalnızca mobilden kaydolunabilir. Bu ayarın bunları etkilemesi için, masaüstüne dönüp Görevlerinizi yenilemeden önce bu Görevlere mobil cihazınızdan kaydolmalısınız.\n\nBu ayar tek başına etkinleştirildiğinde yalnızca Video Görevlerinin elle tamamlanmasına uygulanır. Mobil Video Görevlerinin masaüstünden otomatik tamamlanması aşağıdaki otomatik tamamlama ayarına bağlıdır ve bu ayarı da örtük olarak etkinleştirir.",
                    simultaneous: "Görevleri sırayla değil aynı anda otomatik tamamla:",
                    simultaneousTooltip: "Varsayılan olarak, birden fazla Görevi otomatik tamamlamaya çalışmak onları sırayla tamamlanmak üzere kuyruğa alır.\n\nBu ayar bunun yerine tüm otomatik tamamlanan Görevlerin aynı anda çalışmasına izin verir.\n\nBu ayar yalnızca Görevlerin otomatik tamamlanmasına uygulanır ve aşağıdaki otomatik tamamlama ayarına bağlıdır.",
                    resumeInterrupted: "Yeniden yükleme veya yeniden başlatmadan sonra kesintiye uğrayan otomatik tamamlamaları sürdür:",
                    resumeInterruptedTooltip: "Bu ayar, yeniden yüklemeler veya yeniden başlatmalar nedeniyle kesintiye uğrayan otomatik tamamlamaları, henüz başlamamış ancak kuyruğa alınmış Görevleri yeniden kuyruğa almak dahil, otomatik olarak sürdürür.",
                    autoProcess: "Uyumlu Görevleri otomatik tamamlama için otomatik işle:",
                    autoProcessTooltip: "Discord çalışırken tespit edilen, ödül ve Görev türü filtrelerine dahil olan uygun, alınmamış, yok sayılmamış ve süresi dolmamış Görevleri tamamlar. Yalnızca aşağıda etkinleştirilen desteklenen görev türleri dahil edilir.\n\nUyumlu Görevleri otomatik tamamlama kuyruğuna almadan önce bunlara otomatik olarak kaydolur. Bilinen hız sınırı bekleme sürelerini bekler. Bilinmeyen hatalarda, yeniden deneme süresi olmayan hız sınırlarında veya tekrarlanan kayıt hatalarında durur.",
                    autoEnroll: "Uyumlu Görevlere otomatik olarak kaydol.",
                    autoEnrollTooltip: "Discord çalışırken tespit edilen, ödül ve Görev türü filtrelerine dahil olan uygun, alınmamış, yok sayılmamış ve süresi dolmamış Görevlere kaydolur.\n\nGörevleri otomatik tamamlama kuyruğuna almadan kaydolur. Bilinen hız sınırı bekleme sürelerini bekler. Bilinmeyen hatalarda, yeniden deneme süresi olmayan hız sınırlarında veya tekrarlanan kayıt hatalarında durur.",
                    autoCompleteTypes: "Belirli Görev türlerini otomatik tamamla:",
                    autoCompleteTypesTooltip: "Mobilde Video İzle Görevleri yalnızca masaüstünden kaydolunabilen mobil Görevlerde çalışır. Bir Göreve kayıt mobille sınırlıysa, masaüstüne dönüp Görevlerinizi yenilemeden önce mobil cihazınızdan ona kaydolmalısınız.\n\nVideoyla ilgili tüm Görevler genellikle ilerleme raporlarıyla birlikte bir yığın izi (stack trace) gönderir. Bu, Discord'un tam olarak hangi fonksiyonların çağrıldığını bileceği ve dolayısıyla ilerlemeyi kendi fonksiyonlarının başlattığını doğrulayabileceği anlamına gelir. Questify bu yığın izini siler, ancak yokluğu da varlığı kadar ele verici olacaktır.\n\nMasaüstünde Oyna, PlayStation'da Oyna, Xbox'ta Oyna, Etkinlik Oyna ve Etkinlikte Başarım Görevleri, Discord'un getirdiği bir kısıtlama nedeniyle yalnızca resmi masaüstü istemcilerinde kullanılabilir. Web eklentileri, Plextron ve diğerleri gibi 3. taraf istemciler bu Görev türlerinin otomatik tamamlanmasını desteklemez.\n\nOyunla ilgili tüm Görevler genellikle heartbeat raporlarıyla birlikte bir oyun parmak izi gönderir. Bu, Discord'un on binlerce kullanıcının verilerini kullanarak diğer kullanıcıların gerçek bir oyun mu kullandığını yoksa çalıştırılabilir dosyayı mı taklit ettiğini belirleyebileceği anlamına gelir. Bu değeri taklit etmenin makul bir yolu yoktur, bu yüzden Questify onu boş bırakır, ancak yokluğu da değeri kötü taklit etmek kadar ele verici olacaktır.\n\nOtomatik tamamlama, Görevler sayfasındaki Görev butonlarından veya otomatik işlemeden başlar. Yukarıdaki eşzamanlı tamamlama etkin değilse, Görevler kuyruğa alındıkları sırayla tamamlanır.\n\nGörevleri otomatik tamamlamak, mevcut en riskli tehlikeli ayardır. Riski size ait olmak üzere etkinleştirin."
                },
                questNotifications: {
                    title: "Görev Bildirimleri",
                    description: "Görev tamamlandı ve yeni Görev bulundu bildirimlerini ve uyarılarını yapılandırın.",
                    questCompleted: "Görev Tamamlandı",
                    notifyOnComplete: "Bir Görev tamamlandığında bildirim göster:",
                    soundOnComplete: "Bir Görev tamamlandığında ses çal:",
                    volume: "Ses Seviyesi:",
                    newQuests: "Yeni Görevler Bulundu",
                    notifyOnNew: "Yeni Görevler bulunduğunda bildirim göster:",
                    soundOnNew: "Yeni Görevler bulunduğunda ses çal:",
                    notifyOnNewExcluded: "Yeni hariç tutulan Görevler bulunduğunda bildirim göster:",
                    notifyOnNewExcludedTooltip: "Bazı Görevler bölge veya platform kısıtlamaları nedeniyle mevcut Görevler listenizden hariç tutulur.\n\nEtkinleştirildiğinde Questify, bunların Görev yapılandırmalarını getirir, dahil ettiğiniz Görev ve ödül türü filtrelerini uygular, çözümlenen hariç tutulan Görev verilerini konsola yazdırır ve eşleşen hariç tutulan Görevler için ayrı bir bildirim gösterir.",
                    soundOnNewExcluded: "Yeni hariç tutulan Görevler bulunduğunda ses çal:",
                    soundOnNewExcludedTooltip: "Bazı Görevler bölge veya platform kısıtlamaları nedeniyle mevcut Görevler listenizden hariç tutulur.\n\nBir ses seçildiğinde Questify, bunların Görev yapılandırmalarını getirir, dahil ettiğiniz Görev ve ödül türü filtrelerini uygular, çözümlenen hariç tutulan Görev verilerini konsola yazdırır ve eşleşen hariç tutulan Görevler için bu sesi çalar.",
                    fetchInterval: "Görev Getirme Aralığı:",
                    fetchIntervalTooltip: "Discord, Görevleri yalnızca açılışta ve Görevler sayfasını ziyaret ettiğinizde getirir.\n\nBu aralık, istemci açık kaldığı sürece Görevleri sizin için düzenli olarak getirir; böylece Görev Butonu göstergeleri ve yeni Görev uyarıları gün boyunca güncel kalabilir.\n\nBu yalnızca etkinse ve Görev Butonu veya Görev Bildirimleri ayarları düzenli getirmeyi anlamlı kılacak şekilde yapılandırılmışsa çalışır.",
                    disabled: "DEVRE DIŞI",
                    preview: "{{sound}} önizle",
                    intervals: {
                        thirtyMinutes: "30 Dakika",
                        fortyFiveMinutes: "45 Dakika",
                        oneHour: "1 Saat",
                        threeHours: "3 Saat",
                        sixHours: "6 Saat",
                        twelveHours: "12 Saat"
                    }
                },
                questTiles: {
                    title: "Görev Kartları",
                    description: "Görünürlük için Görevleri isteğe bağlı tema renkleriyle vurgulayın.",
                    behavior: "Kart Davranışı",
                    gradientStyle: "Gradyan Stili:",
                    gradientStyleTooltip: "Yoğun ve Varsayılan, varlık gradyanında seçilen kart rengini kullanır.\n\nİnce Siyah, kontrast için daha koyu ve nötr bir gradyan kullanır.\n\nGradyan Yok, varlık gradyanını kaldırır; bu, bazı Görev görsellerinin okunmasını zorlaştırabilir.",
                    assetPreload: "Varlık Ön Yükleme:",
                    assetPreloadTooltip: "Görevler sayfası açıldığında tüm varlıkları yüklemek, kaydırırken düzen kaymalarını azaltır.\n\nSayfa kaydırılırken yüklemek, Discord'un varsayılan davranışına daha yakındır ve başlangıçta daha az iş gerektirebilir.",
                    colors: "Kart Renkleri",
                    enable: "Etkinleştir",
                    disable: "Devre Dışı Bırak",
                    gradient: {
                        intense: "Yoğun Yeniden Stil Gradyanı",
                        default: "Varsayılan Yeniden Stil Gradyanı",
                        black: "İnce Siyah Gradyan",
                        hide: "Gradyan Yok"
                    },
                    preload: {
                        onLoad: "Tüm Görev Varlıklarını Sayfa Açılışında Yükle",
                        onScroll: "Görev Varlıklarını Sayfa Kaydırılırken Yükle"
                    }
                },
                reorderQuests: {
                    title: "Görevleri Yeniden Sırala",
                    description: "Görevler sayfasında Questify sıralaması seçiliyken görevleri durumlarına göre sırala. Gizli durumlar her sıralamada filtrelenir.",
                    statusOrder: "Durum Sırası",
                    statusOrderTooltip: "Her durum yalnızca bir kez görünebilir. Başka bir konumda zaten kullanılan bir durumu seçmek iki konumu yer değiştirir.",
                    positions: {
                        first: "Birinci:",
                        second: "İkinci:",
                        third: "Üçüncü:",
                        fourth: "Dördüncü:"
                    },
                    subsorts: "Alt Sıralamalar",
                    unclaimedSubsort: "Alınmamış Alt Sıralaması:",
                    unclaimedSubsortTooltip: "Tamamlanmış ancak alınmamış Görevler, tamamlanmamış alınmamış Görevlerin altında kalır; ardından bu alt sıralama o grupların içinde uygulanır.",
                    claimedSubsort: "Alınmış Alt Sıralaması:",
                    claimedSubsortTooltip: "Alınmış Görevler, alınma zamanına veya Görevin eklenme zamanına göre sıralanabilir.",
                    ignoredSubsort: "Yok Sayılan Alt Sıralaması:",
                    ignoredSubsortTooltip: "Yok sayılan Görevler yok sayılan grup konumlarını korur; ardından bu alt sıralama o grubun içindeki sıralarını belirler.",
                    expiredSubsort: "Süresi Dolmuş Alt Sıralaması:",
                    expiredSubsortTooltip: "Süresi dolmuş Görevler, sona erme zamanına veya Görevin eklenme zamanına göre sıralanabilir.",
                    subsort: {
                        addedNewest: "Eklenme (En Yeni)",
                        addedOldest: "Eklenme (En Eski)",
                        expiringSoonest: "Sona Erme (En Yakın)",
                        expiringLatest: "Sona Erme (En Uzak)",
                        expiredMostRecent: "Süresi Dolma (En Son)",
                        expiredLeastRecent: "Süresi Dolma (En Eski)",
                        claimedMostRecent: "Alınma (En Son)",
                        claimedLeastRecent: "Alınma (En Eski)"
                    },
                    memory: "Görev Sayfası Hafızası",
                    rememberSort: "Seçilen Görev sayfası sıralamasını hatırla:",
                    rememberSortTooltip: "Devre dışı bırakıldığında, Görevler sayfası her seferinde Questify sıralama seçeneğiyle açılır.",
                    rememberFilters: "Seçilen Görev sayfası filtrelerini hatırla:",
                    rememberFiltersTooltip: "Devre dışı bırakıldığında, Görevler sayfası her seferinde görev veya ödül filtresi olmadan açılır."
                }
            },
            option: {
                migrationVersion: {
                    label: "Geçiş Sürümü",
                    description: "Ayarların mevcut geçiş sürümü."
                },
                questFeatures: {
                    label: "Görev Özellikleri",
                    description: "Devre dışı bırakılacak Görev özelliklerini seçin."
                },
                disableQuestsEverything: {
                    label: "Her Şeyi Devre Dışı Bırak",
                    description: "Tüm Görev özelliklerini devre dışı bırakır."
                },
                disableRelocationNotices: {
                    label: "Taşınma Bildirimlerini Devre Dışı Bırak",
                    description: "Keşfet sayfasındaki Görev taşınma bildirimlerini devre dışı bırakır."
                },
                disableSponsoredBanner: {
                    label: "Sponsorlu Afişi Devre Dışı Bırak",
                    description: "Görev sayfasındaki sponsorlu afişi devre dışı bırakır."
                },
                disableAccountPanelPromo: {
                    label: "Hesap Paneli Tanıtımını Devre Dışı Bırak",
                    description: "Hesap panelinizin üstündeki tanıtılan Görev açılır penceresini devre dışı bırakır."
                },
                disableAccountPanelQuestProgress: {
                    label: "Hesap Paneli İlerlemesini Devre Dışı Bırak",
                    description: "Hesap panelinizin üstündeki aktif ve tamamlanmış Görev ilerlemesini devre dışı bırakır."
                },
                disableOrbsAndQuestsBadges: {
                    label: "Görev ve Orb Rozetlerini Devre Dışı Bırak",
                    description: "Kullanıcı profillerindeki Görev rozetini devre dışı bırakır."
                },
                disableFriendsListPromo: {
                    label: "Arkadaş Listesi Tanıtımını Devre Dışı Bırak",
                    description: "Arkadaşların oynadığı oyunlar için Görev tanıtımını devre dışı bırakır."
                },
                disableMembersListPromo: {
                    label: "Üye Listesi Tanıtımını Devre Dışı Bırak",
                    description: "Üye listesi öğelerindeki aktif olarak oynuyor simgesini devre dışı bırakır."
                },
                allowChangingDangerousSettings: {
                    label: "Tehlikeli Ayarların Değiştirilmesine İzin Ver",
                    description: "Tehlikeli ayarların değiştirilmesine izin verir."
                },
                resumeInterruptedQuests: {
                    label: "Kesintiye Uğrayan Görevleri Sürdür",
                    description: "Yeniden yükleme veya yeniden başlatmadan sonra Görevleri otomatik tamamlamaya devam eder."
                },
                makeMobileVideoQuestsDesktopCompatible: {
                    label: "Mobil Video Görevlerini Masaüstü Uyumlu Yap",
                    description: "Yalnızca mobil olan Video Görevlerini masaüstüyle uyumlu hale getirir."
                },
                autoCompleteQuestsSimultaneously: {
                    label: "Görevleri Aynı Anda Otomatik Tamamla",
                    description: "Görevleri sırayla değil aynı anda tamamlar."
                },
                completeVideoQuestsQuicker: {
                    label: "Video Görevlerini Daha Hızlı Tamamla",
                    description: "Video Görevi otomatik tamamlamada Discord'un ilerleme toleransını ve kayıttan bu yana geçen süreyi kullanır."
                },
                autoCompleteQuestTypes: {
                    label: "Otomatik Tamamlanacak Görev Türleri",
                    description: "Arka planda otomatik tamamlanacak Görev türleri."
                },
                questButton: {
                    label: "Görev Butonu",
                    description: "Sunucu listesindeki Görev butonunu özelleştirin."
                },
                questButtonDisplay: {
                    label: "Görev Butonu Görünümü",
                    description: "Sunucu listesindeki Görev butonu için kullanılacak görünüm türü."
                },
                questButtonIncludedTypes: {
                    label: "Görev Butonuna Dahil Edilen Türler",
                    description: "Görev butonunda Görev sayılarını gösterirken dahil edilecek ödül ve Görev türleri."
                },
                questButtonIndicator: {
                    label: "Görev Butonu Göstergesi",
                    description: "Sunucu listesindeki Görev butonunda alınmamış göstergesi için kullanılacak görünüm türü."
                },
                questButtonBadgeCount: {
                    label: "Görev Butonu Rozet Sayısı",
                    description: "İlgili alınmamış Görevlerin mevcut sayısı."
                },
                questButtonBadgeColor: {
                    label: "Görev Butonu Rozet Rengi",
                    description: "Sunucu listesindeki Görev butonu rozetinin rengi."
                },
                questButtonLeftClickAction: {
                    label: "Sol Tık Eylemi",
                    description: "Sunucu listesindeki Görev butonuna sol tıklandığında gerçekleştirilecek eylem."
                },
                questButtonMiddleClickAction: {
                    label: "Orta Tık Eylemi",
                    description: "Sunucu listesindeki Görev butonuna orta tıklandığında gerçekleştirilecek eylem."
                },
                questButtonRightClickAction: {
                    label: "Sağ Tık Eylemi",
                    description: "Sunucu listesindeki Görev butonuna sağ tıklandığında gerçekleştirilecek eylem."
                },
                questNotifications: {
                    label: "Görev Bildirimleri",
                    description: "Görev tamamlandı ve yeni Görev bulundu bildirimlerini yapılandırın."
                },
                notifyOnQuestComplete: {
                    label: "Görev Tamamlandığında Bildir",
                    description: "Bir Görev tamamlandığında bildirim gösterir."
                },
                notifyOnNewQuests: {
                    label: "Yeni Görevlerde Bildir",
                    description: "Yeni Görevler bulunduğunda bildirim gösterir."
                },
                notifyOnNewExcludedQuests: {
                    label: "Yeni Hariç Tutulan Görevlerde Bildir",
                    description: "Yeni hariç tutulan Görevler bulunduğunda bildirim gösterir."
                },
                questCompletedAlertSound: {
                    label: "Görev Tamamlandı Uyarı Sesi",
                    description: "Bir Görev tamamlandığında çalınacak ses."
                },
                questCompletedAlertVolume: {
                    label: "Görev Tamamlandı Uyarı Ses Seviyesi",
                    description: "Görev tamamlandı uyarı sesinin ses seviyesi."
                },
                questFetchInterval: {
                    label: "Görev Getirme Aralığı",
                    description: "Görevlerin Discord'dan getirilme aralığı (saniye)."
                },
                newQuestAlertSound: {
                    label: "Yeni Görev Uyarı Sesi",
                    description: "Yeni Görevler bulunduğunda çalınacak ses."
                },
                newQuestAlertVolume: {
                    label: "Yeni Görev Uyarı Ses Seviyesi",
                    description: "Yeni Görev uyarı sesinin ses seviyesi."
                },
                newExcludedQuestAlertSound: {
                    label: "Yeni Hariç Tutulan Görev Uyarı Sesi",
                    description: "Yeni hariç tutulan Görevler bulunduğunda çalınacak ses."
                },
                newExcludedQuestAlertVolume: {
                    label: "Yeni Hariç Tutulan Görev Uyarı Ses Seviyesi",
                    description: "Yeni hariç tutulan Görev uyarı sesinin ses seviyesi."
                },
                questTiles: {
                    label: "Görev Kartları",
                    description: "Görevler sayfasındaki Görev kartlarının görünümünü özelleştirin."
                },
                questTileUnclaimedColor: {
                    label: "Alınmamış Kart Rengi",
                    description: "Görevler sayfasındaki alınmamış Görev kartlarının rengi."
                },
                questTileClaimedColor: {
                    label: "Alınmış Kart Rengi",
                    description: "Görevler sayfasındaki alınmış Görev kartlarının rengi."
                },
                questTileIgnoredColor: {
                    label: "Yok Sayılan Kart Rengi",
                    description: "Görevler sayfasındaki yok sayılan Görev kartlarının rengi."
                },
                questTileExpiredColor: {
                    label: "Süresi Dolmuş Kart Rengi",
                    description: "Görevler sayfasındaki süresi dolmuş Görev kartlarının rengi."
                },
                questTileGradient: {
                    label: "Kart Gradyanı",
                    description: "Görev kartlarında kullanılan gradyanın stili."
                },
                questTilePreload: {
                    label: "Kart Varlıklarını Ön Yükle",
                    description: "Görev kartlarının varlıklarını önceden yüklemeye çalışır."
                },
                reorderQuests: {
                    label: "Görevleri Yeniden Sırala",
                    description: "Görevleri durumlarına göre sıralar."
                },
                questOrder: {
                    label: "Görev Sırası",
                    description: "Görev durum grupları için sıralama düzeni."
                },
                unclaimedSubsort: {
                    label: "Alınmamış Alt Sıralaması",
                    description: "Alınmamış Görevler için alt sıralama yöntemi."
                },
                claimedSubsort: {
                    label: "Alınmış Alt Sıralaması",
                    description: "Alınmış Görevler için alt sıralama yöntemi."
                },
                ignoredSubsort: {
                    label: "Yok Sayılan Alt Sıralaması",
                    description: "Yok sayılan Görevler için alt sıralama yöntemi."
                },
                expiredSubsort: {
                    label: "Süresi Dolmuş Alt Sıralaması",
                    description: "Süresi dolmuş Görevler için alt sıralama yöntemi."
                },
                isOnQuestsPage: {
                    label: "Görevler Sayfasında",
                    description: "Kullanıcının şu anda Görevler sayfasında olup olmadığı."
                },
                rememberQuestPageSort: {
                    label: "Görev Sayfası Sıralamasını Hatırla",
                    description: "Görevler sayfasında son kullanılan sıralamayı hatırlar."
                },
                rememberQuestPageFilters: {
                    label: "Görev Sayfası Filtrelerini Hatırla",
                    description: "Görevler sayfasında son kullanılan filtreleri hatırlar."
                },
                lastQuestPageSort: {
                    label: "Son Görev Sayfası Sıralaması",
                    description: "Görevler sayfasında son kullanılan sıralama."
                },
                lastQuestPageFilters: {
                    label: "Son Görev Sayfası Filtreleri",
                    description: "Görevler sayfasında son kullanılan filtreler."
                },
                ignoredQuestIDs: {
                    label: "Yok Sayılan Görev ID'leri",
                    description: "Yok sayılan Görev ID'lerinin listesi."
                },
                resumeQuestIDs: {
                    label: "Sürdürülecek Görev ID'leri",
                    description: "Arka planda otomatik tamamlanan veya tamamlanmak üzere kuyruğa alınan Görev ID'lerinin listesi."
                },
                acknowledgedNotices: {
                    description: "Kullanıcının onayladığı tek seferlik duyurular.",
                    label: "Onaylanan Duyurular"
                },
                settingsSearch: {
                    description: "Questify ayarlarında ara.",
                    label: "Ayar Arama"
                },
                hideNonAutoCompletableQuests: {
                    description: "Desteklenen ve etkin bir otomatik tamamlama görevi olmayan tamamlanmamış görevleri gizle.",
                    label: "Otomatik Tamamlanamayan Görevleri Gizle"
                },
                preventVideoQuestsPausing: {
                    description: "Görev penceresi odağı kaybettiğinde videonun duraklamasını engelle.",
                    label: "Video Görevlerinin Duraklamasını Engelle"
                },
                hiddenQuestStatuses: {
                    description: "Gizlenecek görev durumu grupları.",
                    label: "Gizli Görev Durumları"
                },
                autoEnrollQuests: {
                    label: "Görevlere Otomatik Kaydol",
                    description: "Discord çalışırken başarılı getirmelerde uygun mevcut Görevlere otomatik olarak kaydol."
                },
                autoCompleteQuests: {
                    label: "Görevleri Otomatik Tamamla",
                    description: "Discord çalışırken başarılı getirmelerde, desteklenen ve etkin görev türlerine sahip uygun mevcut Görevlere otomatik olarak kaydol ve onları tamamla."
                }
            },
            text: {
                clearQuestQueue: "Görev Kuyruğunu Temizle",
                hideIncompleteQuestsWith: "Bu platformda desteklenen ve Görev türleri listesinde etkin bir otomatik tamamlama görevi yoksa, alınmamış veya yok sayılmış durumdaki tamamlanmamış görevleri gizle. Alınmış, süresi dolmuş ve tamamlanmış görevler hariçtir. Bunları gizlemek için Durum Sırası Gizli seçeneklerini kullan.",
                discordForcesYouTo: "Discord, Video Görevlerinin videoyu oynatması için istemcinin önde olmasını zorunlu tutuyor.",
                hideNonAutoCompletable: "Otomatik Tamamlanamayan Görevleri Gizle:",
                preventVideoQuestsFrom: "Odak kaybolduğunda Video Görevlerinin duraklamasını engelle:",
                thePunishmentAlsoConsists: "Ceza ayrıca ihlal başına 2 yıl süren bir hesap durumu ihlalini de içerir.",
                dueToTheVarious: "Discord'un kullanıcıları izlemek için kullandığı çeşitli yöntemler nedeniyle tespit edilmekten gerçekçi olarak kaçınmanın yolu yok. Devam edersen, Discord'un kullanımını büyük olasılıkla bir noktada tespit edeceğini bil.",
                enrollInQuest: "Göreve Kaydol",
                hidden: "Gizli",
                selectingAnOccupiedPosition: "Dolu bir konumu seçmek iki durumu yer değiştirir. Gizli durumlar görev listelerinden kaldırılır.",
                searchQuestifySettings: "Questify Ayarlarında Ara",
                searchQuestifySettings2: "Questify ayarlarında ara...",
                noMatchingSettings: "Eşleşen ayar yok.",
                questifyNoticeAugust7th: "Questify Duyurusu - 7 Ağustos 2026",
                keepUsingDangerousQuestify: "Tehlikeli Questify Ayarlarını Kullanmaya Devam Et",
                disableDangerousQuestifySettings: "Tehlikeli Questify Ayarlarını Devre Dışı Bırak",
                questifyNoticeAugust26th: "Questify Duyurusu - 26 Ağustos 2026",
                areYouSure: "Emin misin?",
                thePunishmentAppearsLimited: "Ceza, görevlere ve ödüllerine erişimin kaybıyla sınırlı görünüyor, ancak Discord her an ağırlaştırabilir.",
                queueAllQuests: "Tüm Görevleri Sıraya Al",
                inProgress: "Devam Ediyor",
                rateLimited: "Hız Sınırında",
                preventsVideoPausing: "Bu ayar videonun duraklamasını engeller ve tamamlanmanın normal şekilde ilerlemesini sağlar.",
                appliesOnlyToVideoQuests: "Bu ayar yalnızca Video Görevlerini manuel olarak tamamlarken geçerlidir.",
                knownToPunish: "Discord'un, Görevlerin tamamlanmasını değiştiren betik veya eklenti kullanıcılarını cezalandırdığı bilinmektedir. Görevlerin tamamlanmasını değiştirmek Discord'un şu kurallarına aykırıdır:",
                punishmentConsists: "Ceza, Görevlere ve ödüllerine erişimin geçici ya da kalıcı olarak kaybedilmesinden oluşur.",
                questBanSystem: "Discord, Görevleri resmi olmayan yollarla tamamladığın tespit edilirse Görevleri tamamlama ve ödüllerini alma erişimini geçici ya da kalıcı olarak kısıtlayan bir Görev Yasağı sistemi uygulamaya koydu. Görevlerin tamamlanmasını değiştirmek şu kurallara aykırıdır:",
                begunPunishing: "Discord, Görevlerin tamamlanmasını değiştiren betik ve eklenti kullanıcılarını cezalandırmaya başladı. Görevlerin tamamlanmasını değiştirmek şu kurallara aykırıdır:",
                dueToRateLimits: " (hız sınırı nedeniyle)"
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
        quickThemeSwitcher: {
            name: "QuickThemeSwitcher",
            description: "Klavye kısayollarını kullanarak temalar arasında hızlıca geçiş yapın.",
            about: {
                title: "Kısayol Tuşları",
                description: "Gezinmek için Ctrl/Cmd+Shift+Ok Tuşlarını kullanın (Sol/Sağ: Temalar arası döngü, Yukarı: Etkinleştir, Aşağı: Devre dışı bırak).",
                reload: "Tema listesini yenilemek için Ctrl/Cmd+Shift+Alt tuşlarına basın."
            },
            modal: {
                added: "{{count}} yeni tema eklendi",
                removed: "{{count}} tema kaldırıldı",
                reloaded: "{{themeCount}} tema yeniden yüklendi",
                addedLocal: "{{count}} yerel tema eklendi",
                removedLocal: "{{count}} yerel tema kaldırıldı",
            },
            option: {
                includeLocal: {
                    label: "Yerel Temaları Dahil Et",
                    description: "Cihazınızdaki yerel temaları listeye dahil eder"
                },
                includeOnline: {
                    label: "Çevrimiçi Temaları Dahil Et",
                    description: "Çevrimiçi temaları listeye dahil eder"
                },
                sortOrder: {
                    label: "Sıralama Ölçütü",
                    description: "Sıralama yöntemi",
                    asc: "A'dan Z'ye",
                    desc: "Z'den A'ya",
                    recent: "En Son"
                },
                autoRefresh: {
                    label: "Otomatik Yenile",
                    description: "Değişiklik algılandığında tema listesini otomatik olarak yeniler"
                },
                showNotifications: {
                    label: "Bildirimleri Göster",
                    description: "Temalar eklendiğinde veya kaldırıldığında bildirim gösterir"
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
            },
            text: {
                quotePreview: "Alıntı önizlemesi"
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
                    selectAll: "Tümünü Seç",
                    reset: "Sıfırla",
                    stateFilters: "Durum Filtreleri",
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
                    joinSettings: "Katılım Ayarları",
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
            keybind: {
                label: "Kısayol Tuşu",
                recording: "Kaydediliyor...",
                reset: "Sıfırla"
            },
            option: {
                keybindEnabled: {
                    label: "Kısayol Tuşu Etkin",
                    description: "Rastgele ses kısayol tuşu kontrollerini göster"
                },
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
                prioritizeFriends: {
                    label: "Arkadaşlara Öncelik Ver",
                    description: "Mümkün olduğunda arkadaşlarınızın bulunduğu kanalları tercih eder."
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
            },
            toast: {
                failedToFindA: "Ses kanalı bulunamadı.",
                voiceChannelIsUnavailable: "Ses kanalı kullanılamıyor."
            },
            text: {
                userCount: "{{count}} kullanıcı",
                usersCount: "{{count}} kullanıcı"
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
        recentDMSwitcher: {
            name: "RecentDMSwitcher",
            description: "En son kullanılan DM'ler arasında Ctrl+Tab ile geçiş yapın (Ctrl+Shift+Tab tersine çevirir)",
            option: {
                visualStyle: {
                    label: "Görsel Stil",
                    description: "Geçiş yaparken görünen görsel gösterge stili",
                    overlay: "Katman (Alt+Tab stili)",
                    toast: "Bildirim (Durum mesajı)",
                    off: "Kapalı"
                },
                overlayMode: {
                    label: "Katman Modu",
                    description: "Katman içeriği",
                    row: "Son görüşmeler satırı",
                    current: "Sadece mevcut olan",
                },
                amountOfUsers: {
                    label: "Kullanıcı Sayısı",
                    description: "Katman üzerinde gösterilecek kullanıcı sayısı"
                },
                overlayRowLength: {
                    label: "Katman Satır Uzunluğu",
                    description: "Satırda gösterilecek son DM'lerin sayısı"
                },
                overlayShowAvatars: {
                    label: "Katman Profil Resimlerini Göster",
                    description: "Katman üzerinde kullanıcı profil resimlerini gösterir"
                },
                toastDurationMs: {
                    label: "Bildirim Süresi (ms)",
                    description: "Katman üzerinde profil resimlerini göster"
                },
                clearRdms: {
                    label: "RDMS Listesini Temizle",
                    description: "Test aracı: RDMs listesini temizler",
                    toast: "RDMS geçmişi temizlendi",
                    button: "RDMs Geçmişini Temizle"
                }
            },
            modal: {
                unknown: "Bilinmeyen",
                dm: "DM",
                group: "Grup DM",
                channel: "Kanal",
                switchingTo: "Şuna geçiliyor: {{name}}"
            }
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
            },
            text: {
                relationshipNotifier: "İlişki Bildirici"
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
                fill: "Doldur",
                image: "Resim"
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
                },
                replacementEngine: {
                    label: "Yedek Arama Motoru",
                    description: "Yedek arama motorunu belirli bir arama motoruyla değiştirir (menü ekleme yerine)",
                    off: "Kapalı",
                    custom: "Özel Motor",
                }
            },
            context: {
                label: "Metni Ara",
                searchWith: "{{name}} ile Ara"
            },
            text: {
                google: "Google"
            }
        },
        replyPingControl: {
            name: "ReplyPingControl",
            description: "Mesaj yanıtlarında her zaman veya hiçbir zaman etiketlenmeyeceğinizi (ping) kontrol edin; beyaz liste ve kara liste özellikleriyle birlikte",
            option: {
                replyPingBlacklist: {
                    label: "Yanıt Etiketleme Kara Listesi",
                    description: "Yanıt etiketlemesi almak istemediğiniz Kullanıcı Kimliklerinin (ID) virgülle ayrılmış listesi"
                },
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
            },
            text: {
                all: "Tümü"
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
            },
            profile: {
                optedOut: "Kullanıcı çıkış yaptı",
                noReviews: "Henüz inceleme yok"
            },
            toast: {
                youCannotVoteOn: "Kendi incelemene oy veremezsin.",
                networkErrorFailedTo: "Ağ hatası: ReviewDB'ye bağlanılamadı.",
                pleaseAuthorizeToVote: "İncelemelere oy vermek için yetkilendir.",
                requestFailed: "ReviewDB: İstek {{status}} durum koduyla başarısız oldu"
            },
            text: {
                ok: "Tamam",
                updateReviewFor: "@{{name}} için incelemeyi güncelle",
                reviewUser: "@{{name}} kullanıcısını incele",
                system: "Sistem",
                reviewCount: "({{count}} Değerlendirme)"
            }
        },
        richMagnetLinks: {
            name: "RichMagnetLinks",
            description: "Magnet bağlantılarını, mesaj bağlantıları gibi (önizlemeli) şekilde işler",
            unknown: "bilinmeyen dosya adı"
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
        rpcEditor: {
            name: "RPCEditor",
            description: "Herhangi bir Rich Presence içeriğini ve tipini düzenleyin",
            option: {
                replacedAppIds: {
                    label: "Değiştirilen Uygulama Kimlikleri (ID)",
                }
            },
            modal: {
                tutorial: {
                    title: "Şu an çalışan etkinliklerin ID'leri",
                    noRunning: "Çalışan etkinlik yok",
                    available: "Kullanılabilir değişkenler",
                    variableText: "Tüm alanlara (yayın URL'si hariç), otomatik olarak orijinal içeriğiyle değiştirilecek değişkenler koyabilirsiniz:",
                    more: "Daha fazla detay",
                    details: {
                        leave: "Bir alanı olduğu gibi bırakmak için boş bırakın.",
                        set: "Bir alanı durum göstergesinde gizlemek için 'null' yazın.",
                        reload: "Değişikliklerin uygulanması için Discord'u yeniden başlatmanız gerekebilir."
                    }
                },
                settings: {
                    applyEdits: "Düzenlemeleri uygulamaya uygula",
                    addNewApp: "Yeni uygulama ekle",
                    appId: "Uygulama ID'si",
                    invalidAppId: "Geçersiz uygulama ID'si",
                    newActivityType: "Yeni etkinlik tipi",
                    activityTypes: {
                        playing: "Oynuyor",
                        watching: "İzliyor",
                        listening: "Dinliyor",
                        competing: "Yarışıyor",
                        streaming: "Yayında"
                    },
                    streamUrl: "Yayın URL'si (YouTube veya Twitch olmalıdır)",
                    invalidStreamUrl: "Geçersiz yayın URL'si",
                    newName: "Yeni isim",
                    newDetails: "Yeni detaylar",
                    newState: "Yeni durum",
                    largeImage: "Büyük resim",
                    smallImage: "Küçük resim",
                    text: "Metin",
                    url: "URL",
                    firstLine: "(birinci satır)",
                    secondLine: "(ikinci satır)",
                    thirdLine: "(üçüncü satır)",
                    alsoThirdLine: "(ayrıca üçüncü satır)",
                    hideAssets: "Görselleri gizle (büyük ve küçük resimler)",
                    hideTimestamps: "Zaman damgalarını gizle"
                }
            },
        },
        saveFavoriteGIFs: {
            name: "SaveFavoriteGIFs",
            description: "Favoriye eklenen GIF bağlantılarını dışa aktarır",
            toolbox: "Favori GIF'leri Kaydet",
            title: "Favori GIF'leri Kaydet",
            command: {
                savegifs: {
                    description: "Tüm favori GIF bağlantılarını bir metin dosyasına kaydeder"
                },
                saveworkinggifs: {
                    description: "Tüm favori GIF'leri test eder ve sadece hala çalışanları kaydeder"
                }
            },
            option: {
                showToolboxButton: {
                    label: "Araç Kutusu Butonunu Göster",
                    description: "Plexcord Araç Kutusu'nda 'Favori GIF'leri Kaydet' butonunu gösterir (Yeniden Başlatma Gerektirir)"
                }
            },
            toast: {
                save: "GIF'ler başarıyla {{filename}} adıyla kaydedildi",
                failed: "GIF'ler kaydedilemedi",
                no: "Favori GIF bulunamadı!",
                testing: "{{count}} GIF test ediliyor, bu biraz zaman alabilir...",
                noneWorking: "Kaydedilmiş GIF'lerinizin hiçbiri çalışıyor gibi görünmüyor.",
                saved: "{{broken}} adet muhtemelen bozuk GIF filtrelendi. {{saved}} adet çalışan GIF kaydedildi."
            }
        },
        scheduledMessages: {
            name: "ScheduledMessages",
            description: "Mesajları belirli bir zamanda veya belirli bir gecikmeden sonra gönderilecek şekilde planlayın.",
            toolbox: {
                toggle: "Planlanmış Mesajları Görüntüle"
            },
            option: {
                maxMessagesPerMinute: {
                    label: "Dakika Başına Maksimum Mesaj",
                    description: "Aynı dakika içinde bir kanalda gönderilebilecek maksimum planlanmış mesaj sayısı."
                },
                checkIntervalSeconds: {
                    label: "Kontrol Aralığı (Saniye)",
                    description: "Eklentinin gönderilecek mesaj olup olmadığını ne kadar sıklıkla kontrol edeceği."
                },
                showNotifications: {
                    label: "Bildirimleri Göster",
                    description: "Mesajlar gönderildiğinde bildirim (toast) gösterir."
                },
                showPhantomMessages: {
                    label: "Hayalet Mesajları Göster",
                    description: "Planlanmış mesajları sohbette hayalet (geçici) mesaj olarak gösterir."
                }
            },
            channelType: {
                unknown: "Bilinmeyen",
                dm: "DM",
                groupDm: "Grup DM",
                channel: "Kanal"
            },
            toast: {
                messageSent: "Planlanmış mesaj {{channel}} kanalına gönderildi",
                messageFailed: "Planlanmış mesaj gönderilemedi",
                maxMessagesReached: "Kanal başına dakikada maksimum {{max}} mesaj sınırına ulaşıldı",
                messageScheduled: "Mesaj planlandı!",
                messageRemoved: "Planlanmış mesaj kaldırıldı",
                allCleared: "Tüm planlanmış mesajlar temizlendi",
                scheduledMessageSentTo: "Zamanlanmış mesaj {{name}} kullanıcısına gönderildi"
            },
            button: {
                tooltipOn: "Planlama Modu AÇIK (devre dışı bırakmak için tıklayın, liste için sağ tıklayın)",
                tooltipOff: "Planlama Modu KAPALI (etkinleştirmek için tıklayın, liste için sağ tıklayın)"
            },
            accessory: {
                scheduledFor: "{{date}} için planlandı {{timeLeft}}",
                remaining: {
                    days: "{{days}}g {{hours}}s kaldı",
                    hours: "{{hours}}s {{minutes}}dk kaldı",
                    minutes: "{{minutes}}dk kaldı"
                }
            },
            scheduleModal: {
                title: "Mesajı Planla",
                schedulingFor: "Planlanan kanal: {{channel}}",
                scheduleType: "Planlama Türü",
                delay: "Gecikme",
                specificTime: "Belirli Zaman",
                delayMinutes: "Gecikme (dakika)",
                dateTime: "Tarih ve Saat",
                error: {
                    invalidDelay: "Lütfen geçerli bir gecikme süresi girin (minimum 1 dakika)",
                    invalidDateTime: "Lütfen gelecekteki bir tarih ve saat seçin"
                },
                schedule: "Planla",
                cancel: "İptal"
            },
            viewModal: {
                title: "Planlanmış Mesajlar",
                clearAll: "Tümünü Temizle",
                noMessages: "Planlanmış mesaj yok",
                delete: "Sil",
                close: "Kapat"
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
                roles: "Roller",
                boostLevel: "{{count}} (Seviye {{level}})"
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
                tryDiscordHighlighter: {
                    label: "Discord'un Renklendiricisini Dene",
                    description: "Daha hafif olan varsayılan Discord renklendiricisini ve temasını kullan.",
                    never: "Asla",
                    secondary: "Discord'un renklendiricisi yerine Shiki'yi tercih et",
                    primary: "Shiki yerine Discord'un renklendiricisini tercih et",
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
                },
                ignoredLanguages: {
                    label: "Yok Sayılan Diller",
                    description: "Discord'un varsayılan kod bloklarına bırakılacak dillerin virgülle ayrılmış listesi"
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
                },
                noQuickReacts: {
                    description: "Hızlı tepkileri gizle. Varsayılan olarak tam menüyü göstermek hızlı tepki düğmelerini gizler.",
                    label: "Hızlı Tepki Yok"
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
                },
                showGithubOrgs: {
                    description: "Kullanıcının üyesi olduğu GitHub kuruluşlarını göster",
                    label: "GitHub Kuruluşlarını Göster"
                },
                showOnModal: {
                    description: "Bağlı hesapları tam boyutlu profil penceresinde göster",
                    label: "Pencerede Göster"
                }
            }
        },
        showHiddenChannels: {
            name: "ShowHiddenChannels",
            description: "Erişim izniniz olmayan kanalları gösterir.",
            tooltip: "Gizli Kanal",
            option: {
                channelStyle: {
                    label: "Kanal Stili",
                    description: "Gizli kanalların görüntülenmesinde kullanılan stil.",
                    classic: "Klasik",
                    muted: "Sessiz",
                    showUnreads: "Okunmamışları Göster",
                    mutedWithUnreads: "Sessiz ve Okunmamışları Göster"
                },
                showMode: {
                    label: "Gösterim Modu",
                    description: "Gizli kanalların görüntülenmesinde kullanılan mod.",
                    lock: "Kilit ikonu ile sade stil",
                    hidden: "Sağda gizli göz ikonu ile sessize alınmış stil",
                    lockIconRight: "Sağda kilit ikonu"
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
            description: "Sohbette özel takma adların, arkadaş takma adlarının, sunucu takma adlarının, görünen adların ve kullanıcı adlarının herhangi bir permütasyonunu görüntüleyin.",
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
                    description: "Özel ad biçimindeki ilk kullanılabilir adı üye listesinde, DM listesinde, arkadaş listesinde ve Şu An Aktif'te göster."
                },
                typingIndicator: {
                    label: "Yazma Göstergesi",
                    description: "Yazma göstergesinde özel ad formatınızda listelenen ilk kullanılabilir adı göster."
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
                    description: "Birincil olmayan adlar için, rolün bir degradesi varsa ve aşağıdaki renk 'Role+-#' olarak ayarlanmışsa degradenin tamamı yerine ana rengi kullanın ve nitro efekti varsa onu tamamen yok sayın."
                },
                animateGradients: {
                    label: "Gradyanları Animasyonlu Yap",
                    description: "İkinci, üçüncü ve dördüncü adlarda rol gradyanı varsa animasyonlu göster. 'Gradyanları Yoksay' etkinse veya azaltılmış hareket açıksa devre dışı kalır."
                },
                nameSeparator: {
                    label: "Ad Ayırıcı",
                    description: "Adlar arasında kullanılacak ayırıcı. Varsayılan tek boşluktur."
                },
                friendNameOnlyInDirectMessages: {
                    label: "Arkadaş Adı Sadece Özel Mesajlarda Göster",
                    description: "Sadece özel mesajlarda arkadaş adlarını göster, sunucularda değil."
                },
                customNameOnlyInDirectMessages: {
                    label: "Özel Ad Sadece Özel Mesajlarda Göster",
                    description: "Sadece özel mesajlarda özel adları göster, sunucularda değil."
                },
                alwaysShowEffects: {
                    label: "Efektleri Her Zaman Canlandır",
                    description: "İmleçle üzerine gelinmiş gibi efektleri her zaman gösterir."
                },
                includedNames: {
                    label: "Dahil Edilen Adlar",
                    description: "Kullanıcı adlarının, görünen adların, takma adların ve arkadaş adlarının görüntülenme sırası. Şu yer tutucuları kullanın: {user}, {display}, {nick}, {friend}. Bir ad mevcut değilse kullanılacak alternatifleri virgülle ayırarak yazabilirsiniz: {friend, nick, display}. Her bir ad için üç ön ek ve üç son ek ekleyebilirsiniz."
                },
                customNameColor: {
                    label: "Özel Ad Rengi",
                    description: "İlk görüntülenen değilse, kullanıcıya atadığınız özel ad için kullanılacak renk. Geçerli herhangi bir CSS girişini kabul eder. Kullanıcının üst rol renklerini, nitro efekt renklerini veya IRCColors rengini (etkinleştirilmişse) takip etmek için 'Rol'ü kullanın. Parlaklığı bu yüzdeye göre ayarlamak için 'Role+-#' kullanın (ör. 'Rol+15')"
                },
                friendNameColor: {
                    label: "Arkadaş Adı Rengi",
                    description: "Arkadaş adının ilk görüntülenen ad olmadığı durumlarda kullanılacak renk. Geçerli herhangi bir CSS girişini kabul eder. Kullanıcının üst rol renklerini, nitro efekt renklerini veya IRCColors rengini (etkinleştirilmişse) takip etmek için 'Role' kullanın. Parlaklığı bu yüzdeye göre ayarlamak için 'Role+-#' kullanın (ör: 'Role+15')"
                },
                nicknameColor: {
                    label: "Takma Ad Rengi",
                    description: "Takma adın ilk görüntülenen ad olmadığı durumlarda kullanılacak renk. Geçerli herhangi bir CSS girişini kabul eder. Kullanıcının üst rol renklerini, nitro efekt renklerini veya IRCColors rengini (etkinleştirilmişse) takip etmek için 'Role' kullanın. Parlaklığı bu yüzdeye göre ayarlamak için 'Role+-#' kullanın (ör: 'Role+15')"
                },
                displayNameColor: {
                    label: "Görünen Ad Rengi",
                    description: "Görünen adın ilk görüntülenen ad olmadığı durumlarda kullanılacak renk. Geçerli herhangi bir CSS girişini kabul eder. Kullanıcının üst rol renklerini, nitro efekt renklerini veya IRCColors rengini (etkinleştirilmişse) takip etmek için 'Role' kullanın. Parlaklığı bu yüzdeye göre ayarlamak için 'Role+-#' kullanın (ör: 'Role+15')"
                },
                usernameColor: {
                    label: "Kullanıcı Adı Rengi",
                    description: "Kullanıcı adının ilk görüntülenen ad olmadığı durumlarda kullanılacak renk. Geçerli herhangi bir CSS girişini kabul eder. Kullanıcının üst rol renklerini, nitro efekt renklerini veya IRCColors rengini (etkinleştirilmişse) takip etmek için 'Role' kullanın. Parlaklığı bu yüzdeye göre ayarlamak için 'Role+-#' kullanın (ör: 'Role+15')"
                },
                triggerNameRerender: {
                    label: "Adı Yeniden Oluşturmayı Tetikle",
                    description: "Bu ayarı değiştirerek adın yeniden oluşturulmasını tetikler."
                },
                searchAutocomplete: {
                    description: "Bahsetme ve arama otomatik tamamlamasında özel ad biçimindeki ilk kullanılabilir adı göster.",
                    label: "Arama Otomatik Tamamlama"
                },
                styleDirectMessagesList: {
                    description: "Seçili olmayan girişlerde üzerine gelmeden görünen ad efektlerini göster. Kapalıyken seçili ve üzerine gelinen girişler yine biçimlendirilir.",
                    label: "Doğrudan Mesaj Listesini Biçimlendir"
                },
                styleDirectMessagesMessages: {
                    description: "Mesaj yazarlarında üzerine gelmeden görünen ad efektlerini göster. Kapalıyken üzerine gelinen adlar yine biçimlendirilir.",
                    label: "Doğrudan Mesajlardaki Mesajları Biçimlendir"
                },
                styleFriendsList: {
                    description: "Üzerine gelmeden görünen ad efektlerini göster. Kapalıyken üzerine gelinen girişler yine biçimlendirilir.",
                    label: "Arkadaş Listesini Biçimlendir"
                },
                styleActiveNow: {
                    description: "Üzerine gelmeden görünen ad efektlerini göster. Kapalıyken üzerine gelinen girişler yine biçimlendirilir.",
                    label: "Şu An Aktif'i Biçimlendir"
                },
                ignoreEffects: {
                    description: "Birincil olmayan adlarda yalnızca birincil rol rengini kullan ve görünen ad efektlerini atla.",
                    label: "Efektleri Yok Say"
                },
                animateEffects: {
                    description: "Birincil olmayan adlarda rol gradyanlarını ve görünen ad efektlerini canlandır. \"Efektleri Yok Say\" ve azaltılmış hareket bunu devre dışı bırakır.",
                    label: "Efektleri Canlandır"
                },
                alwaysAnimateEffects: {
                    description: "Görünen ad efektlerini zaten görünür olduklarında, üzerine gelmeden bile canlanmaya zorla.",
                    label: "Efektleri Her Zaman Canlandır"
                },
                gradientGlow: {
                    description: "Animasyonlu kullanıcı gradyanlarına, sunucu rol gradyanlarındaki gibi bir parıltı ekle.",
                    label: "Gradyan Parıltısı"
                }
            },
            modal: {
                change: {
                    title: "SMYN Kullanıcı Adını Değiştir",
                },
                add: {
                    title: "SMYN Takma Adı Ekle"
                },
                setCustom: "Bu kullanıcı için özel bir SMYN takma adı ayarlayın. SMYN şablon ayarlarında {custom} belirterek kullanın.",
                nickname: "SMYN Takma Adı",
                reset: "SMYN Takma Adını Sıfırla",
                cancel: "İptal Et"
            },
            text: {
                save: "Kaydet",
                unknown: "Bilinmiyor"
            }
        },
        showResourceChannels: {
            name: "ShowResourceChannels",
            description: "Sunucu kaynakları arkasında gizlenmiş kanalları kanal listesinde gösterir"
        },
        showSongName: {
            name: "ShowSongName",
            description: "Spotify etkinliği için şarkı adını sanatçı yerine gösterir"
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
            },
            text: {
                timeoutRemaining: "susturma süresi kaldı"
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
            channelTitle: {
                chat: "Sohbet",
                dm: "DM"
            },
            modal: {
                switch: "Kanalları Değiştir",
                popout: "Sohbeti Açılır Pencere Olarak Aç",
                popoutClose: "Açılır Pencere Sohbetini Kapat",
                popoutFor: "{{channel}} için Sohbeti Açılır Pencere Olarak Aç",
                close: "Kenar Çubuğu Sohbetini Kapat"
            },
            option: {
                persistSidebar: {
                    label: "Kenar Çubuğu Sohbetini Kalıcı Yap",
                    description: "Discord yeniden başlatıldığında kenar çubuğu sohbetinin açık kalmasını sağlar"
                },
                persistPopoutWindows: {
                    label: "Açılır Pencere Sohbetlerini Kalıcı Yap",
                    description: "Discord yeniden başlatıldığında açık açılır pencere sohbetlerini geri yükler"
                },
                popoutAlwaysOnTop: {
                    label: "Açılır Pencere Sohbetlerini Üstte Tut",
                    description: "Açılır pencere sohbet pencerelerini diğer tüm pencerelerin üzerinde tutar."
                },
                patchCommunity: {
                    label: "Community Yamasını Uygula",
                    description: "Topluluk sunucularındaki Kanal Tarayıcı veya Üyeler sekmesi gibi öğeleri yamalar."
                },
                persistedPopoutWindowIds: {
                    description: "Kalıcı açılır pencere sohbet kanal ID'leri."
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
                global: "Yazıyor Görünür (Global)",
                voiceChannel: "Yazıyor Her Zaman Görünür (Bağlı Ses Kanalı Sohbeti)",
                temporary: "Yazıyor Geçici Olarak Görünür (Son Gönderilen Mesaj)"
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
                alwaysEnableInActiveVoiceChat: {
                    label: "Aktif Ses Sohbetinde Her Zaman Etkinleştir",
                    description: "Bağlı olduğun ses kanalında yazarken yazma göstergenin her zaman görünmesine izin verir."
                },
                temporaryEnableThresholdServers: {
                    label: "Geçici Etkinleştirme Süresi (Sunucular)",
                    description: "Bir sunucu kanalında mesaj gönderdikten sonra yazma göstergenin bu kadar saniye boyunca geçici olarak görünmesine izin verir. Yazma göstergesi kanalda zaten görünüyorsa bu ayarın bir etkisi olmaz."
                },
                temporaryEnableThresholdDirectMessages: {
                    label: "Geçici Etkinleştirme Süresi (Özel Mesajlar)",
                    description: "Bir DM'de veya Grup DM'de mesaj gönderdikten sonra yazma göstergenin bu kadar saniye boyunca geçici olarak görünmesine izin verir. Yazma göstergesi kanalda zaten görünüyorsa bu ayarın bir etkisi olmaz."
                },
                enabledLocations: {
                    label: "Etkin Konumlar",
                    description: "Bu ID'ler için işlevi etkinleştir. Virgülle ayrılmış DM ID'leri, kanal ID'leri ve sunucu ID'leri kabul eder. Yalnızca 'Varsayılan Gizli' devre dışı ise kullanılır."
                },
                disabledLocations: {
                    label: "Devre Dışı Konumlar",
                    description: "Bu ID'ler için işlevi devre dışı bırak. Virgülle ayrılmış DM ID'leri, kanal ID'leri ve sunucu ID'leri kabul eder. Yalnızca 'Varsayılan Gizli' etkinse kullanılır."
                }
            },
            text: {
                silentTyping: "Sessiz Yazma",
                enabled: "Etkin",
                chatBarIndicators: "Sohbet Çubuğu Göstergeleri",
                membersListIndicators: "Üye Listesi Göstergeleri",
                guild: "Sunucu",
                channel: "Kanal",
                global: "Genel"
            }
        },
        snowfall: {
            name: "Snowfall",
            description: "Discord'da kar yağsın!",
            about: {
                title: "Bilgi",
                paragraph: "Bu eklenti, Discord arayüzünün üzerine Noel temalı bir kar yağışı efekti ekler. Kar tipini aşağıdaki ayarlardan değiştirebilirsiniz.",
                note: "NOT: Bu eklenti çoğu bilgisayarda ortalama bir Plexcord eklentisinden daha fazla performans etkisi yaratmasa da, düşük segment sistemlerde bazı kasmalar/gecikmeler (lag) yapabilir."
            },
            option: {
                typeOfSnow: {
                    label: "Kar Tipi",
                    description: "Görüntülenen karın tipini değiştirir (Performansı etkiler).",
                    solid: "Düz Renk (En Yüksek Performans)",
                    text: "Metin (Orta Performans)",
                    emoji: "Görsel (En Düşük Performans)"
                },
                maxSize: {
                    label: "Maksimum Boyut",
                    description: "Maksimum kar tanesi boyutu"
                },
                speed: {
                    label: "Hız",
                    description: "Karın yağış hızı (yüksek = daha hızlı düşüş)"
                },
                flakesPerSecond: {
                    label: "Saniye Başına Kar Tanesi",
                    description: "Saniyede düşen kar tanesi miktarı (yüksek = daha yoğun yağış)"
                }
            }
        },
        sortFriendRequests: {
            name: "SortFriendRequests",
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
            description: "Çok büyük mesajları göndermeden önce Discord boyutunda parçalara böler.",
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
                    description: "Her parça arasındaki en kısa gecikme (saniye)."
                },
                hardSplit: {
                    label: "Katı Bölme",
                    description: "Etkinse, boşluk/yeni satır yerine son karakterden böler."
                },
                splitInSlowmode: {
                    label: "Yavaş Modda Böl",
                    description: "Gecikmesi yapılandırılan en yüksek değerin içindeyse yavaş modda bölmeye izin ver."
                },
                slowmodeMax: {
                    label: "Yavaş Mod Maksimumu",
                    description: "Mesajları bölerken izin verilen en uzun yavaş mod süresi."
                },
                splitMode: {
                    description: "Bir mesajı bölerken bu sınırı tercih et.",
                    label: "Bölme Modu"
                }
            },
            toast: {
                cannotSplitThisMessage: "Kanalın yavaş modu nedeniyle bu mesaj bölünemiyor.",
                onlySentLengthMessage: "Yalnızca {{sent}}/{{length}} mesaj parçası gönderildi.",
                unsentCopied: "Gönderilmeyen mesaj parçaları panoya kopyalandı."
            },
            text: {
                newlines: "Yeni Satırlar",
                spaces: "Boşluklar",
                strictCharacterLimit: "Katı Karakter Sınırı"
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
                set: "Özel Durumu Ayarla",
                delete: "Ön Ayarı Sil"
            },
            notification: {
                successfully: "Durum başarıyla kaydedildi"
            }
        },
        steamStatusSync: {
            name: "SteamStatusSync",
            description: "Durumunuzu Steam ile senkronize edin! (Çevrimiçi, Uzakta, Görünmez veya Çevrimdışı.)",
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
            },
            text: {
                failedToRender: "Görüntülenemedi :("
            }
        },
        stickerPaste: {
            name: "StickerPaste",
            description: "Çıkartma seçicide bir çıkartma seçtiğinizde, onu anında göndermek yerine sohbet kutusuna ekler"
        },
        streaks: {
            name: "Streaks",
            description: "Ardışık günlerde DM'leştiğin kullanıcıların yanında bir seri gösterir.",
            tooltip: "{{count}} günlük seri",
            tooltipExpiring: "{{count}} günlük seri — devam ettirmek için bugün mesajlaş!",
            option: {
                account: {
                    description: "Streaks API'ye giriş yap veya çıkış yap. Seriler API'de saklanır, takip edilmeleri için giriş yapman gerekir.",
                    login: "Streaks API'ye Giriş Yap",
                    logout: "Streaks API'den Çıkış Yap"
                },
                eliteColor: "Elit Seri Rengi (100+ gün)",
                diamondColor: "Elmas Seri Rengi (60+ gün)",
                platinumColor: "Platin Seri Rengi (45+ gün)",
                goldColor: "Altın Seri Rengi (30+ gün)",
                silverColor: "Gümüş Seri Rengi (14+ gün)",
                bronzeColor: "Bronz Seri Rengi (7+ gün)",
                defaultColor: "Varsayılan Seri Rengi (1+ gün)"
            },
            toast: {
                authFailed: "Yetkilendirme başarısız: {{error}}",
                failedToAuthorizeMessage: "Yetkilendirme başarısız: {{message}}",
                authorizationExpired: "Streaks yetkilendirmesinin süresi doldu. Streaks eklenti ayarlarından yeniden yetkilendir."
            }
        },
        streamerModeOnStream: {
            name: "StreamerModeOnStream",
            description: "Discord’da yayın yapmaya başladığınızda yayıncı modunu otomatik olarak etkinleştirir"
        },
        streamingCodecDisabler: {
            name: "StreamingCodecDisabler",
            description: "Yayın ve kameralar için seçtiğin video kodeklerini devre dışı bırak.",
            option: {
                disableAv1Codec: {
                    label: "AV1 Codec'ini Devre Dışı Bırak",
                    description: "Discord'un yayın ve kameralar için AV1 kullanmayı düşünmemesini sağla."
                },
                disableH265Codec: {
                    label: "H265 Codec'ini Devre Dışı Bırak",
                    description: "Discord'un yayın ve kameralar için H265 kullanmayı düşünmemesini sağla."
                },
                disableH264Codec: {
                    label: "H264 Codec'ini Devre Dışı Bırak",
                    description: "Discord'un yayın ve kameralar için H264 kullanmayı düşünmemesini sağla."
                },
                disableVP8Codec: {
                    label: "VP8 Codec'ini Devre Dışı Bırak",
                    description: "Discord'un yayın ve kameralar için VP8 kullanmayı düşünmemesini sağla."
                },
                disableVP9Codec: {
                    label: "VP9 Codec'ini Devre Dışı Bırak",
                    description: "Discord'un yayın ve kameralar için VP9 kullanmayı düşünmemesini sağla."
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
            importExport: {
                title: "İçe ve Dışa Aktar",
                description: "Kurallarınızı JSON dosyası olarak dışa aktarın veya mevcut kurallarınıza eklemek için kuralları içe aktarın.",
                export: "JSON Dışa Aktar",
                import: "JSON İçe Aktar",
                success: "Kurallar başarıyla içe aktarıldı.",
                failed: "Kurallar içe aktarılamadı. Geçerli bir TextReplace JSON dosyası seçin."
            },
            option: {
                replace: {
                    label: "Değiştir",
                    string: "Basit Değiştirmeler",
                    stringDescription: "Basit bul ve değiştir kuralları. Örneğin, 'brb'yi bul ve 'be right back' ile değiştir",
                    regex: "Regex Değiştirmeleri",
                    regexDescription: "Düzenli İfadeler (Regular Expressions) kullanarak daha güçlü değiştirmeler. Bu bölüm ileri seviye kullanıcılar içindir. Anlamıyorsanız görmezden gelebilirsiniz",
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
                name: "İsim",
                nameDescription: "Bu kuralı tanımana yardımcı olacak isteğe bağlı bir isim.",
                search: "Kural ara...",
                noResults: "Aramanla eşleşen kural yok.",
                title: "Kuralları Test Et",
                find: "Bul",
                findRegex: "Regex deseni",
                findText: "Değiştirilecek metin",
                replace: "Değiştir",
                replaceDescription: "Bulunan metnin yerine konulacak metin",
                includes: "Yalnızca içeriyorsa",
                includesDescription: "Bu kural yalnızca mesaj bu metni içeriyorsa uygulanır. Bu isteğe bağlıdır",
                type: "Bir mesaj yaz",
                applied: "Kurallar uygulanmış mesaj",
                delete: "Kuralı Sil",
                add: "Kural Ekle",
                empty: "Boş Kural",
                rule: "Kural",
            },
            text: {
                optionallyOnlyApplyThis: "İsteğe bağlı olarak bu kuralı yalnızca mesaj bu metni içeriyorsa uygula.",
                emptyRule: "Boş Kural {{number}}",
                ruleWithFind: "Kural {{number}} - {{find}}"
            }
        },
        themeAttributes: {
            name: "ThemeAttributes",
            description: "Tema oluşturma amacıyla çeşitli öğelere veri öznitelikleri ekler"
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
                    description: "Saati 24 saat biçiminde göster"
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
                },
                recipientTimezoneInDms: {
                    label: "DM'lerde Alıcının Saat Dilimi",
                    description: "DM'lerde mesajlarında alıcının saat dilimini göster"
                },
                showLocalTimezone: {
                    label: "Yerel Saat Dilimini Göster",
                    description: "Yalnızca \"yerel\" yerine yerel saat dilimini göster"
                }
            },
            modal: {
                title: "Saat Dilimleri",
                select: "Saat Dilimi Seç",
                selectPlaceholder: "Bir Saat Dilimi Seçin",
                delete: "Saat Dilimini Sil",
                save: "Kaydet"
            },
            text: {
                invalidResponseFormat: "Geçersiz yanıt biçimi"
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
                respectDoNotDisturb: {
                    label: "Rahatsız Etmeyin'e Uy",
                    description: "Durumunuz Rahatsız Etmeyin olduğunda bildirim gösterme."
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
                    deepl: "DeepL Ücretsiz - API anahtarı gerekli",
                    deeplPro: "DeepL Pro - API anahtarı gerekli",
                    kagi: "Kagi Çeviri - API anahtarı gerekli"
                },
                kagiSession: {
                    label: "Kagi Oturumu",
                    description: "Oturum belirtecinizi (token) https://kagi.com/settings?p=user_details adresinden alın"
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
            },
            button: {
                manageLanguages: "Çeviri dillerini ve otomatik çeviriyi özelleştir"
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
                },
                amITyping: {
                    label: "Ben Yazıyor Muyum?",
                    description: "Diğer insanların yazdığınızı görüp görmediğini gösterir"
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
                    nitro: "Nitro Afişi",
                    usrbg: "USRBG Afişi"
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
                voiceTitle: "Ses",
                voice: "Bir ses seçin",
                languageTitle: "Dil",
                language: "Bir dil seçin",
                noVoice: "Anlatıcı sesi bulunamadı.",
                linuxNote: "speech-dispatcher veya espeak kurun ve Discord'u --enable-speech-dispatcher parametresiyle çalıştırın",
                someNarrator: "İşletim sisteminizin Anlatıcı ayarlarından bazı sesler yüklemeyi deneyin",
                dontHaveEnglish: "Hiç İngilizce ses yüklememişsiniz, bu yüzden anlatıcı garip gelebilir",
                customiseMessages: "Aşağıdaki konuşulan mesajları özelleştirebilirsiniz. Boş bırakırsanız belirli mesajları devre dışı bırakabilirsiniz",
                placeholdersInfo: "Özel yer tutucular {{USER}}, {{DISPLAY_NAME}}, {{NICKNAME}} ve {{CHANNEL}} sırasıyla kullanıcının adı (kendinizseniz boş), görüntü adı, sunucudaki takma adı ve kanal adıyla değiştirilir"
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
            },
            text: {
                viewAvatarDecoration: "Avatar Süslemesini Görüntüle"
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
                },
                messageContextMenu: {
                    description: "Mesaj bağlam menüsünde göster",
                    label: "Mesaj Bağlam Menüsü"
                },
                sortKeys: {
                    description: "Ham verinin anahtarlarını alfabetik sırala.",
                    label: "Anahtarları Sırala"
                },
                stripSensitiveData: {
                    description: "E-posta ve telefon numarası gibi hassas verileri ham veriden kaldır.",
                    label: "Hassas Verileri Kaldır"
                }
            },
            modal: {
                title: "Ham Veri",
                content: "Mesaj İçeriği",
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
            },
            text: {
                copyTypeData: "{{type}} Verisini Kopyala",
                rawTypeData: "Ham {{type}} Verisi",
                messageData: "Mesaj Verisi"
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
                },
                buttonPosition: {
                    label: "Buton Konumu",
                    description: "Butonların nerede gösterileceğini seçin.",
                    left: "Sol",
                    right: "Sağ",
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
                mentionAll: "Tüm Kullanıcıları Etiketle",
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
                recording: "KAYIT YAPILIYOR",
                send: "Gönder"
            },
            text: {
                convertioWebConverter: "convertio web dönüştürücüsü"
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
            description: "Discord'un web sürümünde eksik olan kısayolları geri ekler. Yalnızca Plextron/Legcord'da tam çalışır, tarayıcında çalışmaz",
            option: {
                showNavigationButtons: {
                    description: "Başlık çubuğunda geri/ileri gezinme düğmelerini göster.",
                    label: "Gezinme Düğmelerini Göster"
                },
                overrideCommonKeybinds: {
                    description: "Discord'un en yaygın sekme gezinme kısayollarını (ctrl+t, ctrl+shift+t, ctrl+tab, ctrl+shift+tab, ctrl+n) geçersiz kılmasına izin verir. Yalnızca web sitesi kısayollarına öncelik veren birkaç tarayıcıda çalışır.",
                    label: "Yaygın Kısayolları Geçersiz Kıl"
                }
            }
        },
        webScreenShareFixes: {
            name: "WebScreenShareFixes",
            description: "Chromium ve Plextron istemcilerindeki 2500 kbps ekran paylaşımı bitrate sınırını kaldırır.",
            option: {
                experimentalAV1Support: {
                    label: "Deneysel AV1 Desteği",
                    description: "AV1 codec desteğini etkinleştirir. Sonsuz yüklenen akışlar gibi sorunlara neden olabilir"
                }
            }
        },
        whoReacted: {
            name: "WhoReacted",
            description: "Bir mesaja reaksiyon veren kullanıcıların avatarlarını gösterir",
            option: {
                avatarClick: {
                    label: "Avatar Tıklaması",
                    description: "Reaksiyonlardaki avatarların tıklanabilirliğini aç/kapat"
                },
                clickableAvatars: {
                    description: "Etkinken tepki veren kullanıcının avatarına tıklamak tepki eklemek yerine profilini açar",
                    label: "Tıklanabilir Avatarlar"
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
                    sticker: " [çıkartma]",
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
        },
        addAttachments: {
            name: "AddAttachments",
            description: "Mesajları düzenlerken yeni ekler eklemeni sağlar",
            toast: {
                youCannotAddMore: "Bu mesaja daha fazla ek ekleyemezsin.",
                youCanOnlyAdd: "Bu mesaja yalnızca {{count}} ek daha ekleyebilirsin.",
                uploadingThisCanTake: "Yükleniyor, bu biraz zaman alabilir...",
                addedOne: "Ek başarıyla eklendi!",
                addedMany: "Ekler başarıyla eklendi!"
            },
            text: {
                addAttachments: "Ek Ekle"
            }
        },
        advancedPermissions: {
            option: {
                simplifiedCard: {
                    description: "Discord'un basitleştirilmiş izin kartıyla ne yapılacağı",
                    label: "Basitleştirilmiş Kart",
                    hide: "Gizle",
                    collapse: "Daraltılabilir yap",
                    show: "Görünür bırak"
                },
                collapsedByDefault: {
                    description: "Basitleştirilmiş izinleri daraltılmış olarak başlat.",
                    label: "Varsayılan Olarak Daraltılmış"
                }
            },
            name: "AdvancedPermissions",
            description: "Gelişmiş izin kartını varsayılan olarak gösterir.",
            text: {
                simplifiedPermissions: "Basitleştirilmiş izinler"
            }
        },
        autoJumpToMessage: {
            option: {
                onlyWhenUnfocused: {
                    description: "Yalnızca Discord penceresi odakta değilken mesajlara otomatik olarak atla.",
                    label: "Yalnızca Odakta Değilken"
                }
            },
            name: "AutoJumpToMessage",
            description: "Yeni mesajların kanalını otomatik olarak açar."
        },
        betterForwards: {
            text: {
                serverIconForName: "{{name}} sunucu simgesi",
                messageAttachments: "Mesaj ekleri",
                messageTextWillNot: "Bu seçenek kapalıyken mesaj metni yönlendirilmez",
                forwardEverything: "Her Şeyi Yönlendir",
                viewServer: "Sunucuyu görüntüle",
                embed: "Gömülü",
                embedNumber: "Gömülü {{number}}",
                image: "Görsel",
                video: "Video",
                serverIcon: "{{name}} sunucu simgesi",
                dmIcon: "{{name}} DM simgesi",
                groupDmIcon: "{{name}} grup DM simgesi"
            },
            option: {
                resendOnFail: {
                    description: "Yönlendirme başarısız olursa yönlendirilen mesajı yeniden göndermeyi dener. İstenmeyen etiketlere veya metin spamına yol açabilir. NSFW kısıtlamalarını aşar.",
                    label: "Başarısız Olursa Yeniden Gönder"
                },
                forwardPreface: {
                    description: "Yönlendirilen mesajın neyle başlayacağı",
                    label: "Yönlendirme Öneki"
                },
                dontFollowForwards: {
                    description: "Tek bir mesajı yönlendirdikten sonra ona atlama. Bu davranışı yok saymak için Shift tuşunu basılı tut.",
                    label: "Yönlendirmeleri Takip Etme"
                },
                selfForward: {
                    description: "Yönlendirme listesi açılır penceresinde mevcut kanalı göster.",
                    label: "Kendine Yönlendir"
                }
            },
            name: "BetterForwards",
            description: "NSFW atlatma ve arayüz iyileştirmeleri dahil mesaj yönlendirme araçları."
        },
        betterImageEditor: {
            text: {
                search: "Ara",
                searchSavedPictures: "Kayıtlı resimlerde ara",
                clearTheSearch: "Aramayı temizle",
                savedPictures: "Kayıtlı resimler",
                removeName: "{{name}} öğesini kaldır",
                removeHoldShiftTo: "Kaldır. Onayı atlamak için Shift tuşunu basılı tut",
                originals: "Orijinaller",
                putBackTheLast: "Sonuncuyu geri koy",
                forgetEveryRememberedCrop: "Hatırlanan tüm kırpmalar unutulsun mu?",
                yourPicturesStayEach: "Resimlerin kalır. Bundan sonra her biri, yeniden kırpana kadar çerçevesiz açılır.",
                forget: "Unut",
                cancel: "İptal",
                clearSavedPictures: "Kayıtlı resimler temizlensin mi?",
                everyPictureYouHave: "Burada kaydettiğin her resim, her biri için hatırlanan kırpmayla birlikte silinir. Discord'un kendi arşivine ve mevcut avatar ile bannerına dokunulmaz.",
                clear: "Temizle",
                removeThisPicture: "Bu resim kaldırılsın mı?",
                remove: "Kaldır",
                keepTheCroppedCopy: "Kırpılmış kopya saklansın mı?",
                itGoesOnThe: "Orijinallerinin yanındaki {{toLowerCase}} rafına konur.",
                keep: "Sakla",
                noThanks: "Hayır, teşekkürler",
                exportToAFile: "Dosyaya dışa aktar",
                importFromAFile: "Dosyadan içe aktar",
                forgetRememberedFraming: "Hatırlanan çerçevelemeyi unut",
                clearSavedPictures2: "Kayıtlı resimleri temizle",
                croppedKind: "Kırpılmış {{kind}}",
                unpinName: "{{name}} sabitlemesini kaldır",
                pinName: "{{name}} sabitle",
                pinnedNeverDrops: "Sabitlendi, raftan asla düşmez",
                pinNeverDrops: "Raftan asla düşmemesi için sabitle",
                nothingMatches: "Burada bununla eşleşen bir şey yok",
                originalsEmpty: "Seçtiğin, yapıştırdığın veya bıraktığın resimler buraya gelir",
                croppedEmpty: "Kırptığın resimler buraya gelir",
                forgotFraming: "{{count}} resmin çerçevesi unutuldu",
                nothingFramed: "Hiçbir şey çerçevelenmemişti",
                pictureLibrary: "Resim kitaplığı",
                addedPictures: "{{count}} resim eklendi",
                nothingNew: "O dosyada yeni bir şey yok",
                shownOfTotal: "{{shown}} / {{total}}",
                keptCount: "{{count}} saklanıyor",
                youAreWearingThis: "Şu anda bunu kullanıyorsun",
                removePictureBody: "{{name}}, kendisi için hatırlanan kırpma ile birlikte kayıtlı resimlerinden kaldırılacak."
            },
            option: {
                librarySize: {
                    description: "Her rafta kaç resim tutulacağı.",
                    label: "Kitaplık Boyutu"
                },
                rememberCrop: {
                    description: "Bir resim için en son kullandığın yakınlaştırma ve konumu geri yükler.",
                    label: "Kırpmayı Hatırla"
                },
                forgetFraming: {
                    description: "Hatırlanan tüm kırpmaları sil ve her resmi Discord'un açacağı şekilde aç.",
                    label: "Çerçevelemeyi Unut"
                },
                saveCropped: {
                    description: "Kırptıktan sonra her resmin bir kopyasını sakla.",
                    label: "Kırpılanları Kaydet"
                },
                askBeforeSavingCropped: {
                    description: "Kırpılmış kopyayı otomatik saklamak yerine önce sor.",
                    label: "Kırpılanları Kaydetmeden Önce Sor"
                },
                transfer: {
                    description: "Resimlerini ve her birinin çerçevelemesini başka bir cihaza taşı.",
                    label: "Aktar"
                },
                clearLibrary: {
                    description: "Kaydettiğin tüm resimleri at.",
                    label: "Kitaplığı Temizle"
                }
            },
            name: "BetterImageEditor",
            description: "Avatar ve banner düzenleyicisinde resimlerin için bir raf tutar ve her birini nasıl kırptığını hatırlar.",
            toast: {
                couldNotExportYour: "Resimlerin dışa aktarılamadı",
                couldNotReadThat: "Bu dosya okunamadı",
                thatPictureIsMissing: "Bu resim eksik",
                thatPictureIsToo: "Bu resim Discord için çok büyük",
                couldNotUseThat: "Bu resim kullanılamadı",
                couldNotKeepThe: "Kırpılmış kopya saklanamadı"
            },
            kind: {
                avatars: "avatarlar",
                banners: "afişler",
                serverIcons: "sunucu simgeleri",
                serverBanners: "sunucu afişleri",
                eventCovers: "etkinlik kapakları",
                homeHeaders: "ana sayfa başlıkları",
                decorations: "süslemeler",
                widgetCovers: "widget kapakları",
                widgetImages: "widget görselleri"
            }
        },
        cancelFriendRequest: {
            name: "CancelFriendRequest",
            description: "Profillerden gönderilen arkadaşlık isteklerini iptal etmenin bir yolunu ekler.",
            text: {
                cancelOutgoingFriendRequest: "Gönderilen Arkadaşlık İsteğini İptal Et"
            }
        },
        clipUpload: {
            text: {
                createdAtMustBe: "Oluşturulma tarihi geçerli bir tarih olmalıdır.",
                cancel: "İptal",
                uploadClipFile: "Klip Dosyası Yükle",
                fileName: "Dosya adı",
                title: "Başlık",
                epicMoment: "Efsane An",
                message: "Mesaj",
                checkOutThisClip: "Bu klibe bir bak!",
                spoiler: "Spoiler",
                remix: "Remiks",
                thumbnail: "Küçük resim",
                file: "Dosya",
                selectFile: "Dosya Seç",
                parseClipMetadataFrom: "Klip meta verilerini dosyadan al",
                selectFriends: "Arkadaş seç",
                selectAGame: "Bir oyun seç",
                customApplicationId: "Özel uygulama kimliği",
                createdAt: "Oluşturulma",
                participants: "Katılımcılar",
                onlyTagPeopleWho: "Yalnızca orada bulunan ve bu klipte yer almayı kabul eden kişileri etiketle.",
                gameApplication: "Oyun/Uygulama",
                uploadClipFile2: "Klip dosyası yükle",
                uploading: "Yükleniyor",
                upload: "Yükle",
                noFileSelected: "Dosya seçilmedi",
                couldNotPrepare: "Seçilen dosya hazırlanamadı.",
                couldNotRead: "Seçilen dosya okunamadı.",
                couldNotUpdateMetadata: "Klip meta verileri güncellenemedi.",
                notCompatible: "Bu dosya uyumlu değil. H.264 video ve AAC ses içeren bir MP4 klip kullan.",
                uploadFailed: "Yükleme başarısız.",
                noUploadSlot: "Discord bir yükleme alanı döndürmedi.",
                uploadCanceled: "Yükleme iptal edildi.",
                failedToUpload: "Klip yüklenemedi.",
                selectClipFile: "Klip dosyası seç",
                mp4Video: "MP4 Video"
            },
            name: "ClipUpload",
            description: "Yerel bir video dosyasını Discord klibi olarak yüklemek için bir düğme ekler.",
            toast: {
                checkingClipFile: "Klip dosyası kontrol ediliyor.",
                convertingClipFile: "Klip dosyası dönüştürülüyor.",
                clipUploaded: "Klip yüklendi."
            }
        },
        collapsibleUI: {
            name: "CollapsibleUI",
            description: "Kanal, üye, sohbet düğmeleri ve kullanıcı alanı için yerleşik daraltılabilir yüzeyler.",
            text: {
                collapsibleUi: "Daraltılabilir Arayüz",
                guildBar: "Sunucu Çubuğu",
                channelList: "Kanal Listesi",
                membersList: "Üye Listesi",
                messageButtons: "Mesaj Düğmeleri",
                titleBar: "Başlık Çubuğu",
                headerBar: "Üst Çubuk",
                userArea: "Kullanıcı Alanı"
            },
            option: {
                detachUserArea: {
                    description: "Kullanıcı alanını ayırarak daraltılmamışken serbestçe taşınabilmesini sağlar.",
                    label: "Kullanıcı Alanını Ayır"
                },
                detachedUserAreaX: {
                    description: "Ayrılmış kullanıcı alanının x konumunu saklar.",
                    label: "Ayrılmış Kullanıcı Alanı X"
                },
                detachedUserAreaY: {
                    description: "Ayrılmış kullanıcı alanının y konumunu saklar.",
                    label: "Ayrılmış Kullanıcı Alanı Y"
                },
                guildBarCollapsed: {
                    description: "Sunucu çubuğunu daraltılmış olarak hatırla.",
                    label: "Sunucu Çubuğu Daraltılmış"
                },
                channelListCollapsed: {
                    description: "Kanal listesini daraltılmış olarak hatırla.",
                    label: "Kanal Listesi Daraltılmış"
                },
                membersListCollapsed: {
                    description: "Üye listesini daraltılmış olarak hatırla.",
                    label: "Üye Listesi Daraltılmış"
                },
                chatButtonsCollapsed: {
                    description: "Mesaj düğmesi satırını daraltılmış olarak hatırla.",
                    label: "Sohbet Düğmeleri Daraltılmış"
                },
                titleBarCollapsed: {
                    description: "Başlık çubuğunu daraltılmış olarak hatırla.",
                    label: "Başlık Çubuğu Daraltılmış"
                },
                headerBarCollapsed: {
                    description: "Üst çubuğu daraltılmış olarak hatırla.",
                    label: "Üst Çubuk Daraltılmış"
                },
                userAreaCollapsed: {
                    description: "Kullanıcı alanını daraltılmış olarak hatırla.",
                    label: "Kullanıcı Alanı Daraltılmış"
                }
            }
        },
        customCommands: {
            text: {
                cancel: "İptal",
                name: "Name",
                response: "Yanıt",
                detectedArguments: "Algılanan Argümanlar",
                exampleCommandResponse: "Örnek komut yanıtı:",
                exampleUsage: "Örnek kullanım:",
                exampleOutput: "Örnek çıktı:",
                viewArgumentsGuide: "Argüman Rehberini Görüntüle",
                editTag: "Etiketi Düzenle",
                deleteTag: "Etiketi Sil",
                registeredTags: "Kayıtlı Etiketler",
                createTag: "Etiket Oluştur",
                aTagWithThe: "**{{name}}** adlı bir etiket yok!",
                successfullyDeletedTheTag: "**{{name}}** etiketi başarıyla silindi!",
                ephemeralReserved: "\"ephemeral\" argüman adı ayrılmıştır ve kullanılamaz.",
                createNewTag: "Yeni Etiket Oluştur",
                editTagSubtitle: "Özel komutunu düzenle.",
                createTagSubtitle: "Eğik çizgi komutu olarak kaydedilecek yeni bir etiket oluştur.",
                save: "Kaydet",
                create: "Oluştur",
                variablesHelp: "Yanıtın, komut argümanlarına dönüşecek çift süslü parantez içindeki değişkenleri içerebilir, örneğin",
                defaultValuesHelp: "Eşittir işareti kullanarak varsayılan değerli argümanlar belirtebilirsin, örneğin",
                noTagsYet: "Hay aksi! Henüz hiç etiket yok, oluşturmak için `/tags create` kullan!",
                nameAlreadyExists: "\"{{name}}\" adında bir etiket zaten var ve üzerine yazılacak.",
                defaultValue: "(varsayılan: {{value}})"
            },
            name: "CustomCommands",
            description: "Özel eğik çizgi komutları / etiketler oluşturmanı sağlar",
            option: {
                tagsList: {
                    label: "Etiket Listesi"
                }
            },
            command: {
                ephemeral: "Yanıtın yalnızca sana görünüp görünmeyeceği",
                tags: "Tüm özel komutları yönet",
                create: "Yeni bir etiket oluştur",
                list: "Tüm etiketlerini listele",
                delete: "Bir etiketi adına göre kaldır",
                tagName: "Etiketin adı"
            }
        },
        fileUpload: {
            name: "FileUpload",
            description: "Dosyaları Zipline, Nest, S3 ve WebDAV gibi barındırma hizmetlerine yükle",
            dialog: {
                message: "FileUpload, dosyaları {{origin}} adresine yüklemek istiyor",
                detail: "{{origin}} adresini tanımıyor ve ona tamamen güvenmiyorsan bu isteği iptal etmelisin!\n\nGüven bu sunucuyu hatırlar, İzin Ver yalnızca bu isteğe izin verir.",
                trust: "Güven",
                allow: "İzin Ver",
                cancel: "İptal"
            },
            toast: {
                approvedServersReset: "Onaylı sunucular sıfırlandı",
                fileTypeNotAllowed: "Dosya türüne mevcut filtre tarafından izin verilmiyor",
                pleaseConfigureFileuploadSettings: "Önce FileUpload ayarlarını yapılandır",
                sharexConfigIsValid: "ShareX yapılandırması geçerli",
                importedSharexConfig: "ShareX yapılandırması içe aktarıldı",
                uploadSuccessfulButNo: "Yükleme başarılı, ancak kopyalanacak URL yok",
                uploadSuccessfulUrlCopied: "Yükleme başarılı, URL panoya kopyalandı",
                uploadSuccessfulButFailed: "Yükleme başarılı, ancak URL kopyalanamadı",
                uploadSuccessful: "Yükleme başarılı",
                uploadSucceededWithServicelabels: "Yedeğe geçtikten sonra {{serviceLabels_service}} ile yükleme başarılı",
                apngToGifConversion: "APNG'den GIF'e dönüştürme başarısız, APNG olarak yükleniyor",
                uploadAlreadyInProgress: "Yükleme zaten devam ediyor",
                uploadCancelled: "Yükleme iptal edildi",
                uploadFailedMessage: "Yükleme başarısız: {{message}}",
                invalidSharexConfig: "Geçersiz ShareX yapılandırması",
                failedToImportSharexConfig: "ShareX yapılandırması içe aktarılamadı"
            },
            text: {
                uploadToServicename: "{{serviceName}} hizmetine yükle",
                uploadToHost: "Barındırıcıya Yükle",
                chooseFile: "Dosya Seç...",
                zipline: "Zipline",
                eZHost: "E-Z Host",
                nest: "Nest",
                encryptingHost: "Encrypting.host",
                s3Compatible: "S3 Uyumlu",
                catboxMoe: "Catbox.moe",
                litterbox: "Litterbox",
                sharexCustomUploader: "ShareX Özel Yükleyici",
                webdavNextcloudOwncloud: "WebDAV (Nextcloud/Owncloud)",
                n1Hour: "1 saat",
                n12Hours: "12 saat",
                n24Hours: "24 saat",
                n72Hours: "72 saat",
                corsProxy: "CORS Proxy",
                query: "Sorgu",
                param: "Parametre",
                fakeLink: "Sahte Bağlantı",
                embed: "Gömme",
                n30Seconds: "30 saniye",
                n1Minute: "1 dakika",
                n2Minutes: "2 dakika",
                n5Minutes: "5 dakika",
                n10Minutes: "10 dakika",
                dragHostsToReorder: "Yedek denemelerin sırasını değiştirmek için barındırıcıları sürükle. Önce seçili barındırıcı denenir, ardından bu sıra kullanılır.",
                chooseWhereFileuploadSends: "FileUpload'un yeni dosyaları nereye göndereceğini seç.",
                connectionDetailsForYour: "Zipline örneğin için bağlantı ayrıntıları.",
                theUrlOfYour: "Zipline örneğinin URL'si",
                yourZiplineApiAuthorization: "Zipline API yetkilendirme belirtecin",
                yourZiplineApiToken: "Zipline API belirtecin",
                folderIdForUploads: "Yüklemeler için klasör kimliği (klasör istemiyorsan boş bırak)",
                leaveEmptyForNo: "Klasör istemiyorsan boş bırak",
                connectionDetailsForE: "E-Z Host yüklemeleri için bağlantı ayrıntıları.",
                yourEZHost: "E-Z Host API anahtarın",
                connectionDetailsForNest: "Nest yüklemeleri için bağlantı ayrıntıları.",
                yourNestApiAuthorization: "Nest API yetkilendirme belirtecin",
                yourNestApiToken: "Nest API belirtecin",
                connectionDetailsForEncrypting: "Encrypting.host yüklemeleri için bağlantı ayrıntıları.",
                yourEncryptingHostApi: "Encrypting.host API anahtarın",
                howEncryptingHostShould: "Encrypting.host'un döndürülen bağlantıları nasıl biçimlendireceği.",
                selectUrlStyle: "URL stili seç",
                optionalTitleForEmbed: "Gömme tarzı yanıtlar için isteğe bağlı başlık.",
                optionalTitle: "İsteğe bağlı başlık",
                optionalColorForEmbed: "Gömme tarzı yanıtlar için isteğe bağlı renk.",
                optionalColor: "İsteğe bağlı renk",
                optionalFakeLinkValue: "Fakelink tarzı yanıtlar için isteğe bağlı sahte bağlantı değeri.",
                optionalFakeLink: "İsteğe bağlı sahte bağlantı",
                connectionDetailsAndObject: "Kovan için bağlantı ayrıntıları ve nesne adlandırması.",
                s3CompatibleEndpointE: "S3 uyumlu uç nokta (ör. https://<accountid>.r2.cloudflarestorage.com)",
                bucketToUploadInto: "Yüklenecek kova",
                awsRegionOrAuto: "AWS bölgesi veya Cloudflare R2 için auto",
                s3CompatibleAccessKey: "S3 uyumlu erişim anahtarı",
                yourAccessKeyId: "Erişim anahtarı kimliğin",
                s3CompatibleSecretKey: "S3 uyumlu gizli anahtar",
                yourSecretAccessKey: "Gizli erişim anahtarın",
                optionalTemporaryCredentialToken: "İsteğe bağlı geçici kimlik belirteci",
                optionalSessionToken: "İsteğe bağlı oturum belirteci",
                optionalPublicUrlBase: "Döndürülen bağlantılar için isteğe bağlı genel temel URL",
                optionalFolderPrefixInside: "Kova içinde isteğe bağlı klasör/önek",
                useEndpointBucketKey: "Uç nokta/kova/anahtar biçimini kullan, R2 için önerilir.",
                optionalAccountBindingFor: "Catbox yüklemeleri için isteğe bağlı hesap bağlama.",
                yourCatboxUserhashFor: "Hesap bağlama için Catbox kullanıcı karman; anonim yükleme için boş bırak.",
                yourCatboxUserhash: "Catbox kullanıcı karman",
                howLongUploadsAre: "Yüklemelerin ne kadar süre saklanacağı",
                selectExpiry: "Süre sonunu seç",
                optionalAccountBindingFor2: "GoFile yüklemeleri için isteğe bağlı hesap bağlama.",
                optionalGofileTokenTo: "Hesabına yüklemek için isteğe bağlı GoFile belirteci.",
                optionalGofileToken: "İsteğe bağlı GoFile belirteci",
                connectionDetailsForPixelvault: "PixelVault yüklemeleri için bağlantı ayrıntıları.",
                yourPixelvaultAuthorizationKey: "PixelVault yetkilendirme anahtarın.",
                yourPixelvaultUploadKey: "PixelVault yükleme anahtarın",
                optionalAccountBindingFor3: "PixelDrain yüklemeleri için isteğe bağlı hesap bağlama.",
                optionalPixeldrainApiKey: "Kimliği doğrulanmış yüklemeler için isteğe bağlı PixelDrain API anahtarı. Anonim yükleme için boş bırak.",
                yourPixeldrainApiKey: "PixelDrain API anahtarın",
                pasteImportOrValidate: "Bir ShareX özel yükleyici yapılandırmasını yapıştır, içe aktar veya doğrula.",
                pasteYourSharexCustom: "ShareX özel yükleyici JSON'unu (.sxcu/.json) yapıştır. DestinationType, FileUploader veya ImageUploader içermelidir.",
                importFromFileOr: "Dosyadan içe aktar veya yapıştırılan yapılandırmayı doğrula",
                connectionDetailsForWebdav: "WebDAV sunucuları (Nextcloud, Owncloud vb.) için bağlantı ayrıntıları.",
                baseWebdavUrlE: "Temel WebDAV URL'si (ör. https://nextcloud.example.com/remote.php/dav/files/username)",
                optionalSubdirectoryOnThe: "Sunucuda yükleme yapılacak isteğe bağlı alt dizin (ör. uploads)",
                leaveEmptyForRoot: "Kök dizin için boş bırak",
                selectYourWebdavServer: "WebDAV sunucu türünü seç. Nextcloud ve ownCloud genel bir paylaşım bağlantısı oluşturur. Genel ise ham dosya URL'sini döndürür.",
                selectServerType: "Sunucu türü seç",
                howToReturnThe: "Genel paylaşım bağlantısının nasıl döndürüleceği. Paylaşım Sayfası bir web sayfasına bağlanır; Doğrudan İndirme doğrudan dosyaya bağlanır; Markdown Bağlantısı paylaşım sayfasını tıklanabilir bir dosya adıyla sarar.",
                selectShareLinkFormat: "Paylaşım bağlantısı biçimini seç",
                controlWhatFileuploadDoes: "Bir barındırıcı URL döndürdükten sonra FileUpload'un ne yapacağını kontrol et.",
                stripQueryParametersFrom: "Yüklenen dosya URL'sinden sorgu parametrelerini kaldır.",
                wrapUploadedVideoLinks: "Daha iyi Discord önizlemeleri için yüklenen video bağlantılarını bir gömme proxy'siyle sar.",
                chooseWhichEmbedProxy: "Yüklenen video bağlantıları için hangi gömme proxy hizmetinin kullanılacağını seç",
                selectAnEmbedProxy: "Bir gömme proxy hizmeti seç",
                convertApngFilesTo: "APNG dosyalarını GIF biçimine dönüştür.",
                useTheOriginalFilename: "Yüklemeleri upload.ext olarak adlandırmak yerine orijinal dosya adını kullan.",
                automaticallyCopyTheUploaded: "Yüklenen dosya URL'sini otomatik olarak panoya kopyala.",
                onlyUseTheSelected: "Yedek barındırıcıları denemeden yalnızca seçili yükleyiciyi kullan.",
                afterUploadInsertThe: "Yüklemeden sonra elde edilen URL'yi mevcut sohbet girişine ekle.",
                wrapInsertedUrlsIn: "Discord önizleme gömmesini önlemek için eklenen URL'leri açılı ayraçlarla sar.",
                chooseWhenFileuploadTakes: "FileUpload'un Discord dosya işlemlerini ne zaman devralacağını seç.",
                useFileuploadWhenUploading: "Discord'un dosya seçicisiyle yüklerken FileUpload kullan.",
                useFileuploadOnlyFor: "FileUpload'u yalnızca mevcut Discord yükleme sınırından büyük dosyalar için kullan.",
                manualDiscordFileSize: "Otomatik algılama yanlış olduğunda kullanılan, MB cinsinden manuel Discord dosya boyutu sınırı. Otomatik için boş bırak.",
                auto: "Otomatik",
                commaSeparatedListOf: "Virgülle ayrılmış uzantı listesi (ör. png,jpg,gif). Tümüne izin vermek için boş bırak.",
                configureBrowserUploadProxying: "Tarayıcı yükleme proxy'sini ve zaman aşımlarını yapılandır.",
                corsProxyUsedFor: "Masaüstü uygulaması üzerinden yapılamayan yüklemeler için isteğe bağlı CORS proxy'si. Proxy, üzerinden gönderilen her dosyayı ve token'ı görür; bu yüzden yalnızca güvendiğiniz birini kullanın. Doğrudan yüklemek için boş bırakın.",
                maximumTimeToWait: "Yedeğe geçmeden önce yükleme denemesi başına en uzun bekleme süresi",
                selectTimeout: "Zaman aşımı seç",
                drag: "Sürükle",
                importSxcuJson: ".sxcu/.json İçe Aktar",
                validate: "Doğrula",
                resetToDefault: "Varsayılana Sıfırla",
                progress: "%{{percent}} - {{transferred}} / {{total}}",
                cancel: "İptal"
            },
            option: {
                serviceType: {
                    description: "Seçili yükleme hizmeti",
                    label: "Hizmet Türü"
                },
                serviceUrl: {
                    description: "Zipline hizmet URL'si",
                    label: "Hizmet URL'si"
                },
                ziplineToken: {
                    description: "Zipline kimlik doğrulama belirteci",
                    label: "Zipline Belirteci"
                },
                folderId: {
                    description: "İsteğe bağlı Zipline klasör kimliği",
                    label: "Klasör Kimliği"
                },
                ezHostKey: {
                    description: "E-Z Host API anahtarı",
                    label: "E-Z Host Anahtarı"
                },
                nestToken: {
                    description: "Nest API belirteci",
                    label: "Nest Belirteci"
                },
                encryptingHostKey: {
                    description: "Encrypting.host API anahtarı",
                    label: "Encrypting.host Anahtarı"
                },
                encryptingHostUrlStyle: {
                    description: "Encrypting.host URL stili",
                    label: "Encrypting.host URL Stili"
                },
                encryptingHostDomains: {
                    description: "Encrypting.host alan adları JSON listesi",
                    label: "Encrypting.host Alan Adları"
                },
                encryptingHostTitle: {
                    description: "İsteğe bağlı Encrypting.host gömme başlığı",
                    label: "Encrypting.host Başlığı"
                },
                encryptingHostColor: {
                    description: "İsteğe bağlı Encrypting.host gömme rengi",
                    label: "Encrypting.host Rengi"
                },
                encryptingHostFakelink: {
                    description: "İsteğe bağlı Encrypting.host sahte bağlantısı",
                    label: "Encrypting.host Sahte Bağlantı"
                },
                s3Endpoint: {
                    description: "S3 uyumlu uç nokta URL'si",
                    label: "S3 Uç Noktası"
                },
                s3Bucket: {
                    description: "S3 kova adı",
                    label: "S3 Kovası"
                },
                s3Region: {
                    description: "S3 bölgesi (R2 için auto kullan)",
                    label: "S3 Bölgesi"
                },
                s3AccessKeyId: {
                    description: "S3 erişim anahtarı kimliği",
                    label: "S3 Erişim Anahtarı Kimliği"
                },
                s3SecretAccessKey: {
                    description: "S3 gizli erişim anahtarı",
                    label: "S3 Gizli Erişim Anahtarı"
                },
                s3SessionToken: {
                    description: "İsteğe bağlı S3 oturum belirteci",
                    label: "S3 Oturum Belirteci"
                },
                s3PublicUrl: {
                    description: "İsteğe bağlı genel temel URL",
                    label: "S3 Genel URL'si"
                },
                s3Prefix: {
                    description: "İsteğe bağlı S3 nesne anahtarı öneki",
                    label: "S3 Öneki"
                },
                s3ForcePathStyle: {
                    description: "Yol stili S3 URL'leri kullan",
                    label: "S3 Yol Stilini Zorla"
                },
                litterboxExpiry: {
                    description: "Litterbox saklama süresi",
                    label: "Litterbox Süre Sonu"
                },
                catboxUserhash: {
                    description: "Hesap bağlama için Catbox kullanıcı karması",
                    label: "Catbox Kullanıcı Karması"
                },
                sharexConfig: {
                    description: "ShareX özel yükleyici JSON'u",
                    label: "ShareX Yapılandırması"
                },
                disableFallbacks: {
                    description: "Yedek yükleme hizmetlerini devre dışı bırak",
                    label: "Yedekleri Devre Dışı Bırak"
                },
                autoSend: {
                    description: "Yüklenen URL'yi sohbet girişine ekle",
                    label: "Otomatik Gönder"
                },
                autoFormat: {
                    description: "Eklenen URL'yi açılı ayraçlarla sar",
                    label: "Otomatik Biçimlendir"
                },
                bypassDiscordUpload: {
                    description: "Discord yüklemelerini atla ve bunun yerine FileUpload kullan.",
                    label: "Discord Yüklemesini Atla"
                },
                bypassDiscordUploadOnlyOverLimit: {
                    description: "Yalnızca dosya(lar) boyut sınırını aşarsa FileUpload kullan.",
                    label: "Discord Yüklemesini Yalnızca Sınır Aşılınca Atla"
                },
                customDiscordFileSizeLimitMB: {
                    description: "MB cinsinden manuel Discord dosya boyutu sınırı. 0 otomatik algılama demektir.",
                    label: "Özel Discord Dosya Boyutu Sınırı (MB)"
                },
                gofileToken: {
                    description: "İsteğe bağlı GoFile API belirteci",
                    label: "GoFile Belirteci"
                },
                fallbackOrder: {
                    description: "Yedek yükleyici sırası",
                    label: "Yedek Sırası"
                },
                pixelVaultKey: {
                    description: "PixelVault yükleme anahtarı",
                    label: "PixelVault Anahtarı"
                },
                pixelDrainKey: {
                    description: "İsteğe bağlı PixelDrain API anahtarı",
                    label: "PixelDrain Anahtarı"
                },
                uploadTimeoutMs: {
                    description: "Milisaniye cinsinden yükleme zaman aşımı",
                    label: "Yükleme Zaman Aşımı (ms)"
                },
                stripQueryParams: {
                    description: "Yüklenen URL'lerden sorgu parametrelerini kaldır",
                    label: "Sorgu Parametrelerini Kaldır"
                },
                embedProxyEnabled: {
                    description: "Yüklenen video bağlantılarını bir gömme yardımcı hizmeti üzerinden geçir.",
                    label: "Gömme Proxy'si Etkin"
                },
                embedProxyService: {
                    description: "Yüklenen video bağlantılarını saran gömme yardımcı hizmeti.",
                    label: "Gömme Proxy Hizmeti"
                },
                corsProxyUrl: {
                    description: "Tarayıcı yüklemeleri için isteğe bağlı CORS proxy URL'si",
                    label: "CORS Proxy URL'si"
                },
                apngToGif: {
                    description: "APNG yüklemelerini GIF'e dönüştür",
                    label: "APNG'den GIF'e"
                },
                preserveOriginalFilename: {
                    description: "Yüklerken orijinal dosya adını koru.",
                    label: "Orijinal Dosya Adını Koru"
                },
                autoCopy: {
                    description: "Yükleme URL'sini otomatik kopyala",
                    label: "Otomatik Kopyala"
                },
                autoUploadPastedFiles: {
                    description: "Sohbet girişine yapıştırırken panodaki dosyaları otomatik olarak görsel barındırıcıya yükle.",
                    label: "Yapıştırılan Dosyaları Otomatik Yükle"
                },
                webdavUrl: {
                    description: "WebDAV sunucu URL'si",
                    label: "WebDAV URL'si"
                },
                webdavUsername: {
                    description: "WebDAV kullanıcı adı",
                    label: "WebDAV Kullanıcı Adı"
                },
                webdavPassword: {
                    description: "WebDAV parolası veya uygulama belirteci",
                    label: "WebDAV Parolası"
                },
                webdavDirectory: {
                    description: "WebDAV sunucusunda isteğe bağlı alt dizin",
                    label: "WebDAV Dizini"
                },
                webdavServerType: {
                    description: "WebDAV sunucu türü",
                    label: "WebDAV Sunucu Türü",
                    nextcloud: "Nextcloud",
                    owncloud: "ownCloud",
                    generic: "Genel WebDAV"
                },
                webdavShareType: {
                    description: "WebDAV paylaşım bağlantısı biçimi",
                    label: "WebDAV Paylaşım Türü",
                    sharepage: "Paylaşım Sayfası",
                    directdownload: "Doğrudan İndirme",
                    markdown: "Markdown Bağlantısı"
                },
                uploadAllowedFileTypes: {
                    description: "İzin verilen dosya uzantılarının virgülle ayrılmış listesi (ör. png,jpg,gif,mp4). Tüm dosyalara izin vermek için boş bırak.",
                    label: "Yüklemeye İzin Verilen Dosya Türleri"
                },
                settingsComponent: {
                    description: "Ayarlar",
                    label: "Ayarlar Bileşeni"
                }
            },
            panel: {
                approvedServers: "Onaylı Sunucular",
                approvedServersDescription: "FileUpload'ın yükleme yapmasına izin verdiğiniz S3 ve WebDAV sunucuları. Sıfırlarsanız bir sonraki yüklemede tekrar sorulur.",
                resetApprovedServers: "Onaylı Sunucuları Sıfırla",
                fallbackOrder: "Yedek Sırası",
                uploadService: "Yükleme Hizmeti",
                zipline: "Zipline",
                serviceUrl: "Hizmet URL'si",
                ziplineToken: "Zipline Belirteci",
                folderId: "Klasör Kimliği",
                eZHost: "E-Z Host",
                eZHostApiKey: "E-Z Host API Anahtarı",
                nest: "Nest",
                nestToken: "Nest Belirteci",
                encryptingHost: "Encrypting.host",
                encryptingHostApiKey: "Encrypting.host API Anahtarı",
                urlStyle: "URL Stili",
                domainsJson: "Alan Adları (JSON)",
                embedTitle: "Gömme Başlığı",
                embedColor: "Gömme Rengi",
                fakeLink: "Sahte Bağlantı",
                s3CompatibleStorage: "S3 Uyumlu Depolama",
                s3EndpointUrl: "S3 Uç Nokta URL'si",
                bucketName: "Kova Adı",
                region: "Bölge",
                accessKeyId: "Erişim Anahtarı Kimliği",
                secretAccessKey: "Gizli Erişim Anahtarı",
                sessionToken: "Oturum Belirteci",
                publicBaseUrl: "Genel Temel URL",
                objectKeyPrefix: "Nesne Anahtarı Öneki",
                usePathStyleEndpoint: "Yol Stili Uç Nokta Kullan",
                catbox: "Catbox",
                catboxUserhash: "Catbox Kullanıcı Karması",
                litterboxExpiry: "Litterbox Süre Sonu",
                gofile: "GoFile",
                gofileToken: "GoFile Belirteci",
                pixelvault: "PixelVault",
                pixelvaultUploadKey: "PixelVault Yükleme Anahtarı",
                pixeldrain: "PixelDrain",
                pixeldrainApiKey: "PixelDrain API Anahtarı",
                sharexCustomUploader: "ShareX Özel Yükleyici",
                sharexCustomUploaderConfig: "ShareX Özel Yükleyici Yapılandırması",
                sharexConfigActions: "ShareX Yapılandırma İşlemleri",
                webdav: "WebDAV",
                serverUrl: "Sunucu URL'si",
                username: "Kullanıcı Adı",
                passwordOrAppToken: "Parola veya Uygulama Belirteci",
                passwordOrAppToken2: "parola veya uygulama belirteci",
                uploadDirectory: "Yükleme Dizini",
                serverType: "Sunucu Türü",
                shareLinkFormat: "Paylaşım Bağlantısı Biçimi",
                uploadBehavior: "Yükleme Davranışı",
                stripQueryParameters: "Sorgu Parametrelerini Kaldır",
                useEmbedProxy: "Gömme Proxy'si Kullan",
                embedProxyService: "Gömme Proxy Hizmeti",
                convertApngToGif: "APNG'yi GIF'e Dönüştür",
                preserveOriginalFilename: "Orijinal Dosya Adını Koru",
                autoCopyUrl: "URL'yi Otomatik Kopyala",
                disableFallbackUploaders: "Yedek Yükleyicileri Devre Dışı Bırak",
                insertUrlIntoChatInput: "URL'yi Sohbet Girişine Ekle",
                formatInsertedUrl: "Eklenen URL'yi Biçimlendir",
                discordIntegration: "Discord Entegrasyonu",
                bypassDiscordUploadButton: "Discord Yükleme Düğmesini Atla",
                autoUploadPastedFiles: "Yapıştırılan Dosyaları Otomatik Yükle",
                respectDiscordFileSizeLimit: "Discord Dosya Boyutu Sınırına Uy",
                discordLimitOverrideMb: "Discord Sınırını Geçersiz Kıl (MB)",
                allowedFileTypes: "İzin Verilen Dosya Türleri",
                network: "Ağ",
                corsProxyUrl: "CORS Proxy URL'si",
                uploadTimeout: "Yükleme Zaman Aşımı",
                domainsJsonDescription: "Kullanılacak alan adlarının JSON dizisi, örneğin [\"offensive\"]."
            },
            status: {
                cancelled: "Yükleme iptal edildi.",
                uploadingVia: "{{service}} ile yükleniyor...",
                uploading: "Yükleniyor...",
                unknownError: "Bilinmeyen hata",
                startingVia: "{{service}} ile yükleme başlatılıyor...",
                retryingWith: "{{service}} ile yeniden deneniyor ({{attempt}}/{{total}})...",
                uploadedVia: "{{service}} ile başarıyla yüklendi.",
                allFailed: "Tüm yükleme servisleri başarısız oldu. Son hata: {{error}}",
                fileReady: "Dosya hazır, yükleme başlıyor...",
                preparing: "Yükleme hazırlanıyor...",
                failed: "Yükleme başarısız: {{message}}",
                timedOut: "Yükleme zaman aşımına uğradı",
                serviceFailed: "{{service}} başarısız: {{message}}",
                preparingFile: "{{name}}{{suffix}} hazırlanıyor..."
            }
        },
        gifMaker: {
            option: {
                lastWidth: {
                    label: "Son Genişlik"
                },
                lastHeight: {
                    label: "Son Yükseklik"
                },
                lastCaptionMode: {
                    label: "Son Altyazı Modu"
                },
                lastCaptionText: {
                    label: "Son Altyazı Metni"
                },
                lastCaptionSize: {
                    label: "Son Altyazı Boyutu"
                },
                lastFontFamily: {
                    label: "Son Yazı Tipi Ailesi"
                },
                lastBubbleTipBase: {
                    label: "Son Balon Ucu Tabanı"
                },
                maxWidth: {
                    description: "Otomatik sığdırma için en fazla genişlik.",
                    label: "En Fazla Genişlik"
                },
                maxHeight: {
                    description: "Otomatik sığdırma için en fazla yükseklik.",
                    label: "En Fazla Yükseklik"
                }
            },
            name: "GifMaker",
            description: "Sohbetteki veya GIF seçicideki herhangi bir medyadan GIF oluştur ve altyazı ekle.",
            text: {
                send: "Gönder",
                export: "Dışa Aktar",
                makeGif: "GIF Oluştur",
                editGif: "GIF'i Düzenle",
                selectAFont: "Bir yazı tipi seç...",
                enterCaption: "Altyazı gir...",
                width: "Genişlik",
                height: "Yükseklik",
                loadingFonts: "Yazı tipleri yükleniyor...",
                captions: "Altyazılar",
                text: "Metin",
                font: "Yazı Tipi",
                fontSize: "Yazı tipi boyutu",
                tipBase: "Uç Tabanı",
                dimensions: "Boyutlar",
                generatingGif: "GIF oluşturuluyor...",
                clickOnThePreview: "Balon ucunu konumlandırmak için önizlemeye tıkla",
                gifPreview: "GIF önizlemesi"
            },
            captionMode: {
                caption: "Altyazı",
                none: "Yok",
                speechbubble: "Baloncuk"
            }
        },
        gifProviderSwitcher: {
            name: "GifProviderSwitcher",
            description: "Klipy yerine Tenor veya Giphy GIF aramasını kullanmanı sağlar",
            text: {
                tenor: "Tenor",
                giphy: "Giphy",
                klipy: "Klipy",
                providers: "Sağlayıcılar",
                providersCount: "{{count}} sağlayıcı"
            }
        },
        keyboardNavigation: {
            toast: {
                invalidUrl: "Geçersiz URL",
                copiedResponseToClipboard: "Yanıt panoya kopyalandı!",
                issueFetchingUrl: "URL alınırken sorun oluştu",
                copiedGitInfoTo: "Git bilgisi panoya kopyalandı!",
                noUpdatesAvailable: "Güncelleme yok",
                enabledPlugin: "{{id}} başarıyla etkinleştirildi",
                disabledPlugin: "{{id}} başarıyla devre dışı bırakıldı"
            },
            text: {
                openPlexcordTab: "Plexcord Sekmesini Aç",
                openPluginTab: "Eklenti Sekmesini Aç",
                openThemesTab: "Temalar Sekmesini Aç",
                openUpdaterTab: "Güncelleyici Sekmesini Aç",
                openCloudTab: "Bulut Sekmesini Aç",
                openBackupRestoreTab: "Yedekle ve Geri Yükle Sekmesini Aç",
                restartClient: "İstemciyi Yeniden Başlat",
                openQuickCssFile: "QuickCSS Dosyasını Aç",
                openSettingsFolder: "Ayarlar Klasörünü Aç",
                openInGithub: "GitHub'da Aç",
                openInBrowser: "Tarayıcıda Aç",
                togglePlugin: "Eklentiyi Aç/Kapat",
                enable: "Etkinleştir",
                disable: "Devre Dışı Bırak",
                quickFetch: "Hızlı Getir",
                copyGitInfo: "Git Bilgisini Kopyala",
                checkForUpdates: "Güncellemeleri Denetle",
                aPlexcordUpdateIs: "Bir Plexcord güncellemesi mevcut!",
                clickHereToView: "Güncellemeyi görmek için buraya tıkla",
                navigateToServer: "Sunucuya Git",
                commandPalette: "Komut Paleti",
                searchTheCommandPalette: "Komut Paletinde Ara",
                multipleChoice: "Çoktan Seçmeli",
                textInput: "Metin Girişi",
                openDevTab: "Geliştirici Sekmesini Aç",
                enterUrlToFetch: "Getirilecek URL'yi gir (yalnızca GET)",
                typeAndPressEnter: "Yaz ve Enter'a bas",
                recording: "Kaydediliyor...",
                recordKeybind: "Kısayol kaydet",
                enterUrl: "Bir URL gir"
            },
            option: {
                hotkey: {
                    description: "Komut paletini açma kısayolu.",
                    label: "Kısayol"
                },
                allowMouseControl: {
                    description: "Farenin komut paletini kontrol etmesine izin ver.",
                    label: "Fare Kontrolüne İzin Ver"
                }
            },
            name: "KeyboardNavigation",
            description: "Arayüzde klavyeyle gezinmeni sağlar."
        },
        lastActive: {
            name: "LastActive",
            description: "Bir kanalda/sunucuda kendinin veya başka bir kullanıcının son etkin mesajına atlamak için bir eklenti.",
            toast: {
                failedToFindMessages: "Mesajlar bulunamadı. Ayrıntılar için konsolu kontrol et.",
                couldnTFindAny: "Bu kullanıcıdan son mesaj bulunamadı.",
                channelInformationNotAvailable: "Kanal bilgisi mevcut değil.",
                failedToJumpTo: "Mesaja atlanamadı. Ayrıntılar için konsolu kontrol et."
            },
            text: {
                yourLastMessage: "Son Mesajın",
                userSLastMessage: "Kullanıcının Son Mesajı"
            }
        },
        limitlessScreenshare: {
            text: {
                deleteTag: "Etiketi Sil",
                mustBeGreaterThan: ">{{value}} olmalı",
                maxResolutionTooLow: "Maksimum çözünürlük {{value}} değerinden düşük olamaz",
                maxResolutionRound: "Çözünürlüğü Yuvarla açıkken maksimum çözünürlük 0 ile bitmeli"
            },
            name: "LimitlessScreenshare",
            description: "Ekran paylaşımı çözünürlüğü ve fps için bir kaydırıcı ekler.",
            option: {
                maxFPS: {
                    description: "Kaydırıcı için en fazla FPS",
                    label: "En Fazla FPS"
                },
                maxResolution: {
                    description: "Kaydırıcı için en yüksek çözünürlük",
                    label: "En Yüksek Çözünürlük"
                },
                roundResolution: {
                    description: "Çözünürlüğü en yakın 10p'ye yuvarla",
                    label: "Çözünürlüğü Yuvarla"
                },
                resolutions: {
                    label: "Çözünürlükler"
                },
                fpss: {
                    label: "FPS Değerleri"
                }
            }
        },
        messagePeek: {
            option: {
                hideMuted: {
                    description: "Sessize alınmış DM'ler ve grup sohbetleri için mesaj önizlemelerini ve zaman damgalarını gizle.",
                    label: "Sessizdekileri Gizle"
                }
            },
            name: "MessagePeek",
            description: "Doğrudan Mesajlar listesinde son mesaj önizlemesini ve zaman damgasını gösterir.",
            text: {
                officialDiscordMessage: "Resmi Discord Mesajı",
                sentGif: "bir GIF gönderdi",
                voiceMessage: "sesli mesaj",
                membersCount: "{{count}} Üye",
                you: "Sen"
            }
        },
        messageTranslate: {
            name: "MessageTranslate",
            description: "Önbellekleme, kanal bazlı açma/kapatma ve daha fazla seçenekle mesajları otomatik olarak diline çevir.",
            option: {
                targetLanguage: {
                    description: "Çeviriler için hedef dil kodu (ör. en, es, fr, de, ja).",
                    label: "Hedef Dil"
                },
                excludedLanguages: {
                    description: "Çeviriden hariç tutulacak dil kodları (ör. en, es, fr, de, ja).",
                    label: "Hariç Tutulan Diller"
                },
                confidenceRequirement: {
                    description: "Bir çeviriyi göstermek için gereken en düşük güven (0 ile 1 arası).",
                    label: "Güven Gereksinimi"
                },
                autoTranslate: {
                    description: "Mesajları göründükçe otomatik çevir.",
                    label: "Otomatik Çevir"
                },
                skipOwnMessages: {
                    description: "Kendi mesajlarını çevirme.",
                    label: "Kendi Mesajlarını Atla"
                },
                skipBotMessages: {
                    description: "Bot mesajlarını çevirme.",
                    label: "Bot Mesajlarını Atla"
                },
                ignoredGuilds: {
                    description: "Çeviri yapılmayacak sunucu kimliklerinin virgülle ayrılmış listesi.",
                    label: "Yok Sayılan Sunucular"
                },
                ignoredChannels: {
                    description: "Çeviri yapılmayacak kanal kimliklerinin virgülle ayrılmış listesi.",
                    label: "Yok Sayılan Kanallar"
                },
                ignoredUsers: {
                    description: "Çevrilmeyecek kullanıcı kimliklerinin virgülle ayrılmış listesi.",
                    label: "Yok Sayılan Kullanıcılar"
                },
                showIndicator: {
                    description: "Çevrilen mesajlara küçük bir (çevrildi) göstergesi ekle.",
                    label: "Göstergeyi Göster"
                },
                showOriginal: {
                    description: "Orijinal ve çevrilmiş metni göster.",
                    noorig: "Orijinali gösterme."
                }
            },
            text: {
                showOriginalInSubtext: "Orijinali alt metinde göster",
                showOriginalMessageTranslation: "Orijinal mesajı göster, çeviriyi alt metinde",
                translatedFrom: "{{lang}} dilinden çevrildi"
            }
        },
        moreStickers: {
            toast: {
                stickerPackDeleted: "Çıkartma paketi silindi",
                stickerPackAdded: "Çıkartma paketi eklendi",
                stickerPacksAdded: "Çıkartma paketleri eklendi",
                stickerPacksExported: "Çıkartma paketleri dışa aktarıldı",
                newStickerPacksAlready: "Yeni çıkartma paketleri zaten var, taşıma gerekmiyor",
                oldStickerPacksNot: "Eski çıkartma paketleri bulunamadı, taşınacak bir şey yok",
                migrationFailedTitleId: "Taşıma başarısız: {{title}} ({{id}})",
                stickerPackMigrationComplete: "Çıkartma Paketi Taşıma İşlemi Tamamlandı",
                failedToUploadSticker: "Çıkartma yüklenemedi"
            },
            text: {
                stickerPackUrl: "Çıkartma Paketi URL'si",
                pasteHtmlHere: "HTML'yi buraya yapıştır",
                delete: "Sil",
                addStickerPackFrom: "URL'den Çıkartma Paketi Ekle",
                insert: "Ekle",
                addStickerPackFrom2: "HTML'den Çıkartma Paketi Ekle",
                insertFromHtml: "HTML'den Ekle",
                addStickerPackFrom3: "Dosyadan Çıkartma Paketi Ekle",
                miscTools: "Çeşitli Araçlar",
                exportStickerPacks: "Çıkartma Paketlerini Dışa Aktar",
                migrateFromV1: "v1'den Taşı",
                stickersManagement: "Çıkartma Yönetimi",
                theRegionLineRecognized: "Kullandığımız CORS proxy'si nedeniyle LINE'ın tanıdığı bölge bulunduğun bölgeden farklı olabilir.",
                openStickerPackFile: "Çıkartma Paketi Dosyasını Aç",
                stickers: "Çıkartmalar+",
                categoryTitle: "Kategori, {{title}}",
                searchStickers: "Çıkartma ara",
                ffmpegstatecontextIsUndefined: "FFmpegStateContext tanımsız",
                recentlyUsed: "Son Kullanılanlar",
                addFromUrl: "URL'den Ekle",
                addFromHtml: "HTML'den Ekle",
                addFromFile: "Dosyadan Ekle",
                misc: "Diğer",
                invalidUrl: "Geçersiz URL",
                lineOnly: "Şu anda yalnızca LINE çıkartmaları/emojileri destekleniyor.",
                getTelegramStickers: "Telegram çıkartmalarını şununla al:",
                htmlFallbackHelp: "Çıkartma paketi eklerken hatayla karşılaşırsan, paketi çıkartma paketi sayfasının HTML kaynak koduyla eklemeyi deneyebilirsin.",
                htmlFallbackApplies: "Bu, bölge kilitli / işletim sistemi kilitli vb. çıkartmalar için geçerlidir."
            },
            option: {
                promptToUpload: {
                    description: "Çıkartmayı hemen göndermek yerine sohbet çubuğuna ekler",
                    label: "Yüklemeden Önce Sor"
                },
                packs: {
                    description: "Paketler",
                    label: "Paketler"
                }
            },
            name: "MoreStickers",
            description: "Diğer sosyal medya platformlarından çıkartma paketleri ekler. (ör. LINE)"
        },
        musicRichPresence: {
            option: {
                scrobblerBackend: {
                    description: "Kullanılacak scrobbler arka ucu.",
                    label: "Scrobbler Arka Ucu"
                },
                instanceBaseURL: {
                    description: "ListenBrainz örneğinin temel URL'si.",
                    label: "Örnek Temel URL'si"
                },
                instanceAPIBaseUrl: {
                    description: "ListenBrainz API'nin temel URL'si.",
                    label: "Örnek API Temel URL'si"
                },
                apiKey: {
                    description: "Last.fm API anahtarı. Zorunlu değil ama paylaşılan anahtarımızla hız sınırına takılmamak için şiddetle önerilir",
                    label: "API Anahtarı"
                },
                username: {
                    description: "Kullanıcı adı",
                    label: "Kullanıcı Adı"
                },
                shareUsername: {
                    description: "Scrobbler profiline bağlantı göster",
                    label: "Kullanıcı Adını Paylaş"
                },
                clickableLinks: {
                    description: "Parça, sanatçı ve albüm adlarını tıklanabilir bağlantı yap",
                    label: "Tıklanabilir Bağlantılar"
                },
                hideWithSpotify: {
                    description: "Spotify çalışıyorsa durumu gizle",
                    label: "Spotify ile Gizle"
                },
                hideWithActivity: {
                    description: "Başka bir durumun varsa gizle",
                    label: "Etkinlik Varsa Gizle"
                },
                statusName: {
                    description: "Özel durum metni. Şu değişkenleri kullanabilirsin: {artist} | {album} | {title}",
                    label: "Durum Adı"
                },
                statusDisplayType: {
                    description: "Üye listesinde parça / sanatçı adını göster",
                    off: "Gösterme (genel dinleme mesajı gösterir)"
                },
                nameFormat: {
                    description: "Durum adında şarkı ve sanatçı adını göster",
                    statusName: "Özel durum adını kullan"
                },
                missingArt: {
                    description: "Albüm veya albüm kapağı eksik olduğunda",
                    logo: "Büyük scrobbler logosunu kullan"
                },
                showLogo: {
                    description: "Albüm kapağının yanında scrobbler hizmeti logosunu göster",
                    label: "Scrobbler Logosunu Göster"
                },
                showAlbumCover: {
                    description: "Albüm kapağını göster. Kapatırsan yer tutucu gösterilir. Müziğinde uygunsuz kapaklar varsa kullanışlı",
                    label: "Albüm Kapağını Göster"
                },
                useListeningStatus: {
                    description: "\"Oynuyor\" yerine \"Dinliyor\" durumunu göster"
                }
            },
            name: "MusicRichPresence",
            description: "Last.FM/Listenbrainz için Zengin Durum",
            text: {
                showArtistName: "Sanatçı adını göster",
                showTrackName: "Parça adını göster",
                useMusicServiceName: "Müzik hizmeti adını kullan (yoksa özel durum metni)",
                useFormatArtistSong: "'sanatçı - şarkı' biçimini kullan",
                useFormatSongArtist: "'şarkı - sanatçı' biçimini kullan",
                useArtistNameOnly: "Yalnızca sanatçı adını kullan",
                useSongNameOnly: "Yalnızca şarkı adını kullan",
                useAlbumNameFalls: "Albüm adını kullan (şarkının albümü yoksa özel durum metni)",
                useGenericPlaceholder: "Genel yer tutucu kullan",
                lastFm: "Last.FM",
                howToCreateAn: "API anahtarı nasıl oluşturulur",
                set: "Ayarla:",
                applicationName: "Uygulama adı",
                applicationDescription: "Uygulama açıklaması",
                toAnythingAndLeave: "alanlarına herhangi bir şey yaz ve gerisini boş bırak.",
                createApiKey: "API Anahtarı Oluştur",
                invalidInstance: "Geçersiz ListenBrainz uyumlu sunucu",
                provideBoth: "Özel ListenBrainz sunucun için hem",
                apiBaseUrl: "API Temel URL'sini",
                andThe: "hem de",
                instanceBaseUrl: "Sunucu Temel URL'sini",
                forYourCustomInstance: "gir ya da ListenBrainz/Last.FM'e geri dön",
                allowConnectTitle: "Plexcord'un ListenBrainz sunucusuna bağlanmasına izin ver",
                allowConnectBody: "Özel ListenBrainz sunucunu kullanmak için önce Plexcord'un ona bağlanmasına izin vermelisin.",
                allowInstance: "Sunucuya İzin Ver",
                listenBrainzCompatible: "ListenBrainz Uyumlu (kendi sunucunda)",
                and: "ve"
            }
        },
        noMiddleClickPaste: {
            name: "NoMiddleClickPaste",
            description: "Linux orta tık yapıştırmasını devre dışı bırak - yalnızca Linux"
        },
        orbolayBridge: {
            option: {
                port: {
                    description: "Bağlanılacak bağlantı noktası",
                    label: "Bağlantı Noktası"
                }
            },
            name: "OrbolayBridge",
            description: "Orbolay'i Discord'a bağlayan köprü eklentisi",
            toast: {
                connectedToOrbolayServer: "Orbolay sunucusuna bağlanıldı"
            }
        },
        plexcordHelper: {
            name: "PlexcordHelper",
            description: "Destek sağlamak ve Discord kaynaklı çökmeleri düzeltmek için kullanılır.",
            text: {
                restartRequired: "Yeniden Başlatma Gerekli",
                restartNow: "Şimdi Yeniden Başlat",
                later: "Daha Sonra",
                wouldYouLikeTo: "Şimdi yeniden başlatmak ister misin?",
                somePluginsRequireA: "Bazı eklentilerin tamamen devre dışı kalması için yeniden başlatma gerekir.",
                alreadyEnabled: "{{plugin}} zaten etkin",
                alreadyDisabled: "{{plugin}} zaten devre dışı",
                disablePlugin: "{{plugin}} devre dışı bırak",
                enablePlugin: "{{plugin}} etkinleştir",
                errorStopping: "{{plugin}} eklentisi durdurulurken hata oluştu",
                errorStarting: "{{plugin}} eklentisi başlatılırken hata oluştu"
            },
            toast: {
                failedToTolowercase: "{{toLowerCase}} başarısız",
                aRestartIsRequired: "Değişikliğin geçerli olması için yeniden başlatma gerekiyor!"
            },
            card: {
                notOnThisVersion: "Bu eklenti Plexcord'un bu sürümünde yok. Güncellemeyi dene!"
            }
        },
        plexcordTweaks: {
            name: "PlexcordTweaks",
            option: {
                removeActivitySection: {
                    description: "Üye listesinin üstündeki etkinlik bölümünü kaldırır",
                    label: "Etkinlik Bölümünü Kaldır"
                },
                showYourOwnActivityButtons: {
                    description: "Discord bir nedenden dolayı kendi etkinlik düğmelerini gizliyor",
                    label: "Kendi Etkinlik Düğmelerini Göster"
                },
                refreshSlashCommands: {
                    description: "Yeni eklenen komutları istemciyi yeniden başlatmadan göstermek için eğik çizgi komutlarını yeniler.",
                    label: "Eğik Çizgi Komutlarını Yenile"
                },
                forceRoleIcon: {
                    description: "Kompakt modda rol simgelerini mesajların yanında göstermeye zorlar",
                    label: "Rol Simgesini Zorla"
                },
                accountStandingButton: {
                    description: "Başlık çubuğunda hesap durumu düğmesi göster",
                    label: "Hesap Durumu Düğmesi"
                },
                jsonGateway: {
                    description: "Ağ geçidine yeniden bağlanırken JSON'u zorlar",
                    label: "JSON Ağ Geçidi"
                },
                enableAutoCorrect: {
                    description: "Sohbet kutusu bağlam menüsüne yerel otomatik düzeltme ve metin değiştirme için bir anahtar ekler",
                    label: "Otomatik Düzeltmeyi Etkinleştir"
                },
                autoCorrect: {
                    description: "Mesaj düzenleyicilerinde yerel otomatik düzeltme ve metin değiştirmeleri kullan",
                    label: "Otomatik Düzeltme"
                },
                disableHolidayNotifications: {
                    label: "Tatil Bildirimlerini Devre Dışı Bırak",
                    description: "Her zaman Discord'un varsayılan bildirim seslerini kullan"
                },
                showAllBadges: {
                    label: "Tüm Rozetleri Göster",
                    description: "Kalanları +n arkasına gizlemek yerine tüm profil rozetlerini gösterir"
                }
            },
            text: {
                allGood: "Her şey yolunda!",
                limited: "Sınırlı",
                veryLimited: "Çok sınırlı",
                atRisk: "Risk altında",
                suspended: "Askıya alındı",
                slashCommandsRefreshedSuccessfully: "Eğik çizgi komutları başarıyla yenilendi.",
                failedToRefreshCommands: "Komutlar yenilenemedi. Ayrıntılar için konsolu kontrol et.",
                enableAutocorrect: "Otomatik Düzeltmeyi Etkinleştir"
            },
            command: {
                refreshCommands: "Eğik Çizgi Komutlarını Yenile"
            },
            description: "Discord için küçük ince ayarlar ve düzeltmelerden oluşan bir koleksiyon."
        },
        plextronStreamFixes: {
            option: {
                unlockQualityOptions: {
                    description: "Nitro durumundan bağımsız olarak yayın kalitesi seçeneklerinin kilidini aç",
                    label: "Kalite Seçeneklerinin Kilidini Aç"
                },
                removeResolutionCap: {
                    description: "60 fps'de 720p üzeri çözünürlüklere izin ver",
                    label: "Çözünürlük Sınırını Kaldır"
                },
                forceEncoderSettings: {
                    description: "Kodlayıcıyı yapılandırılmış çözünürlük/fps kullanmaya zorla",
                    label: "Kodlayıcı Ayarlarını Zorla"
                },
                preventDownscale: {
                    description: "Discord'un yayın çözünürlüğünü düşürmesini engelle",
                    label: "Ölçek Düşürmeyi Engelle"
                },
                keyframeInterval: {
                    description: "Ms cinsinden anahtar kare aralığı (0 = kodlayıcı varsayılanı, 5000 = her 5 sn)",
                    label: "Anahtar Kare Aralığı"
                },
                minBitrate: {
                    description: "Kbps cinsinden en düşük kodlayıcı bit hızı",
                    label: "En Düşük Bit Hızı"
                },
                raiseBitrateCaps: {
                    description: "Masaüstü varsayılan bit hızı sınırlarını yükselt (hedef 600 kbps → 10 Mbps, en fazla 3,5 Mbps → 40 Mbps)",
                    label: "Bit Hızı Sınırlarını Yükselt"
                },
                preventFramerateReduction: {
                    description: "Konuşmadığında Discord'un yayın kare hızını düşürmesini engelle",
                    label: "Kare Hızı Düşüşünü Engelle"
                },
                bitsPerPixelPct: {
                    description: "Hedef bit hızı için piksel başına bit yüzdesi (8 = 0,08 bpp, 12 = 0,12 bpp)",
                    label: "Piksel Başına Bit (%)"
                }
            },
            name: "PlextronStreamFixes",
            description: "Discord'un kodlayıcısını ve kalite kısıtlamalarını yamalayarak Plextron'da yayın kalitesini düzeltmeye çalışır."
        },
        rPCEditor: {
            name: "RPCEditor"
        },
        reactionTimestamps: {
            name: "ReactionTimestamps",
            description: "Tepki penceresinde her tepkinin zamanını gösterir.",
            text: {
                userAtTime: "{{user}}, {{time}}"
            }
        },
        richPresence: {
            text: {
                useCustomStatusName: "Özel durum adını kullan",
                useFormatArtistSong: "'sanatçı - şarkı' biçimini kullan",
                useFormatSongArtist: "'şarkı - sanatçı' biçimini kullan",
                useArtistNameOnly: "Yalnızca sanatçı adını kullan",
                useSongNameOnly: "Yalnızca şarkı adını kullan",
                useAlbumName: "Albüm adını kullan",
                useLargeStatsFm: "Büyük Stats.fm logosunu kullan",
                useGenericPlaceholder: "Genel yer tutucu kullan",
                seriesMovieName: "Dizi/Film Adı",
                seriesEpisodeTrackMovie: "Dizi - Bölüm/Parça/Film Adı",
                custom: "Özel",
                seriesCover: "Dizi Kapağı",
                episodeCover: "Bölüm Kapağı",
                season1Episode1: "Sezon 1 Bölüm 1",
                off: "Kapalı",
                listening: "Dinliyor",
                playing: "Oynuyor",
                streaming: "Yayında",
                watching: "İzliyor",
                none: "Yok",
                navidromeInstanceExposesServer: "Navidrome Örneği (Sunucu URL'sini açığa çıkarır. Tek seferlik kimlik doğrulama gönderilir.)",
                lastFmApiSends: "Last.fm API (Meta verileri last.fm'e gönderir)",
                donTShowShows: "Gösterme (genel dinleme mesajı gösterir)",
                showStateLineContent: "Durum satırı içeriğini göster",
                showDetailsLineContent: "Ayrıntı satırı içeriğini göster",
                displayYourCurrentlyPlaying: "Şu an dinlediğin sesli kitapları Discord Zengin Durum olarak göster. AudioBookShelf sunucu URL'si, kullanıcı adı ve parola gerekir.",
                audiobookshelfServerUrl: "AudioBookShelf sunucu URL'si.",
                audiobookshelfUsername: "AudioBookShelf kullanıcı adı.",
                audiobookshelfPassword: "AudioBookShelf parolası.",
                connectsToTosuVia: "24050 bağlantı noktasında WebSocket üzerinden tosu'ya bağlanır. Yapılandırma gerekmez, yalnızca tosu'nun osu! ile birlikte çalıştığından emin ol.",
                showWhatYouRe: "stats.fm üzerinden şu an ne dinlediğini göster. Dinleme geçmişinin herkese açık olması gerekir.",
                statsFmUsername: "Stats.fm kullanıcı adı.",
                customStatusText: "Özel durum metni.",
                statsFm: "Stats.fm",
                nameFormat: "Ad biçimi.",
                fallbackWhenArtIs: "Kapak eksikse yedek.",
                showListeningStatus: "Dinleme durumunu göster.",
                showStatsFmLogo: "Albüm kapağının yanında Stats.fm logosunu göster.",
                showLinkToStats: "stats.fm profiline bağlantı göster.",
                showLinkToSong: "stats.fm'de şarkıya bağlantı göster.",
                hideStatsFmPresence: "Spotify çalışıyorsa stats.fm durumunu gizle.",
                hideStatsFmPresence2: "Harici bir RPC çalışıyorsa stats.fm durumunu gizle.",
                disableDownloadingAlbumArt: "Albüm kapağı indirmeyi devre dışı bırak.",
                showWhatYouRe2: "Jellyfin'de ne oynattığını göster. API anahtarını almak için: Jellyfin web arayüzünü aç, Geliştirici Araçları için F12'ye bas, Ağ sekmesine git, sunucuna giden istekleri bul, Authorization başlığını bul (aramak için Ctrl+F) ve Token='this' kısmına ihtiyacın var. Kullanıcı kimliğin profil sayfası URL'sinde bulunur.",
                jellyfinServerUrl: "Jellyfin sunucu URL'si.",
                jellyfinApiKey: "Jellyfin API anahtarı.",
                authorization: "Authorization",
                jellyfinUserId: "Jellyfin kullanıcı kimliği.",
                userIdFromProfile: "Profil URL'sindeki kullanıcı kimliği",
                nameDisplayFormat: "Ad görüntüleme biçimi.",
                customNameTemplate: "Özel ad şablonu.",
                nameOnJellyfin: "Jellyfin'de {name}",
                coverTypeForTv: "TV dizileri için kapak türü.",
                episodeNumberFormat: "Bölüm numarası biçimi.",
                overrideRichPresenceType: "Zengin durum türünü geçersiz kıl.",
                showEpisodeNameAfter: "Sezon/bölüm bilgisinden sonra bölüm adını göster.",
                showPresenceWhenMedia: "Medya duraklatıldığında durumu göster.",
                hideMediaDetails: "Medya ayrıntılarını gizle.",
                discordRichPresenceFor: "Gensokyo Radio için Discord Zengin Durum. Etkinleştir ve dinle!",
                refreshIntervalInSeconds: "Saniye cinsinden yenileme aralığı.",
                showWhatYouRe3: "Navidrome üzerinden şu an ne dinlediğini göster.",
                navidromeServerUrlMust: "Navidrome sunucu URL'si (genel bir alan adı olmalı, ör. https://navidrome.example.com).",
                navidromeUsername: "Navidrome kullanıcı adı.",
                navidromePassword: "Navidrome parolası.",
                optionalDiscordApplicationClient: "İsteğe bağlı Discord Uygulaması İstemci Kimliği.",
                howToFetchAlbum: "Albüm kapağının nasıl alınacağı.",
                optionalProvideYourOwn: "İsteğe bağlı: Kendi Last.fm API anahtarını gir (boşsa varsayılan kalır).",
                showNavidromeLogoIn: "Albüm kapağının sağ altında Navidrome logosunu göster.",
                showAlbumNameIn: "Durumda albüm adını göster.",
                whichTypeOfActivity: "Hangi etkinlik türünün gösterileceği.",
                showTheStateDetails: "Üye listesinde durum / ayrıntı satırı içeriğini göster",
                hideRichPresenceWhen: "Müzik duraklatıldığında Zengin Durumu gizle (kronometre göstermek yerine)",
                theListeningToText: "'Dinliyor' metni (ör. {artist})",
                navidrome: "Navidrome",
                theMainLineShowing: "Çalan şarkıyı gösteren ana satır (ör. {song})",
                song: "{song}",
                theLineBelowThe: "Şarkı adının altındaki satır (ör. {artist})",
                artist: "{artist}",
                theAlbumLineE: "Albüm satırı (ör. {album})",
                album: "{album}",
                enableTabLabelsCurrenttab: "{{TAB_LABELS_currentTab}} durumunu etkinleştir.",
                statsFmProfile: "Stats.fm Profili",
                viewSong: "Şarkıyı Görüntüle",
                showArtistName: "Sanatçı adını göster",
                showTrackName: "Parça adını göster",
                enterValue: "Bir değer gir"
            },
            name: "RichPresence",
            description: "AudioBookShelf, osu!, stats.fm, Jellyfin, Navidrome ve Gensokyo Radio için birleşik zengin durum merkezi.",
            toast: {
                audiobookshelfRpcIsNot: "AudioBookShelf RPC yapılandırılmamış.",
                jellyfinRpcIsNot: "Jellyfin RPC yapılandırılmamış.",
                jellyfinReturnedAnInvalid: "Jellyfin geçersiz bir yanıt döndürdü. API anahtarın yanlış olabilir."
            },
            option: {
                enabled: {
                    description: "Zengin durum hizmetlerini etkinleştir.",
                    label: "Etkin"
                },
                serviceSettings: {
                    description: "Hizmet yapılandırması.",
                    label: "Hizmet Ayarları"
                },
                abs_enabled: {
                    description: "AudioBookShelf durumunu etkinleştir.",
                    label: "AudioBookShelf Etkin"
                },
                tosu_enabled: {
                    description: "osu! (tosu) durumunu etkinleştir.",
                    label: "osu! (tosu) Etkin"
                },
                sfm_enabled: {
                    description: "stats.fm durumunu etkinleştir.",
                    label: "Stats.fm Etkin"
                },
                jf_enabled: {
                    description: "Jellyfin durumunu etkinleştir.",
                    label: "Jellyfin Etkin"
                },
                gr_enabled: {
                    description: "Gensokyo Radio durumunu etkinleştir.",
                    label: "Gensokyo Radio Etkin"
                },
                nd_enabled: {
                    description: "Navidrome durumunu etkinleştir.",
                    label: "Navidrome Etkin"
                },
                abs_serverUrl: {
                    description: "AudioBookShelf sunucu URL'si.",
                    label: "AudioBookShelf Sunucu URL'si"
                },
                abs_username: {
                    description: "AudioBookShelf kullanıcı adı.",
                    label: "AudioBookShelf Kullanıcı Adı"
                },
                abs_password: {
                    description: "AudioBookShelf parolası.",
                    label: "AudioBookShelf Parolası"
                },
                sfm_username: {
                    description: "Stats.fm kullanıcı adı.",
                    label: "Stats.fm Kullanıcı Adı"
                },
                sfm_shareUsername: {
                    description: "stats.fm profiline bağlantı göster.",
                    label: "Stats.fm: Kullanıcı Adını Paylaş"
                },
                sfm_shareSong: {
                    description: "stats.fm'de şarkıya bağlantı göster.",
                    label: "Stats.fm: Şarkıyı Paylaş"
                },
                sfm_hideWithSpotify: {
                    description: "Spotify çalışıyorsa stats.fm durumunu gizle.",
                    label: "Stats.fm: Spotify ile Gizle"
                },
                sfm_hideWithExternalRPC: {
                    description: "Harici bir RPC çalışıyorsa stats.fm durumunu gizle.",
                    label: "Stats.fm: Harici RPC ile Gizle"
                },
                sfm_statusName: {
                    description: "Özel durum metni.",
                    label: "Stats.fm: Durum Adı"
                },
                sfm_nameFormat: {
                    description: "Ad biçimi.",
                    label: "Stats.fm: Ad Biçimi",
                    statusName: "Özel durum adını kullan",
                    artistFirst: "'sanatçı - şarkı' biçimini kullan",
                    songFirst: "'şarkı - sanatçı' biçimini kullan",
                    artistOnly: "Yalnızca sanatçı adını kullan",
                    songOnly: "Yalnızca şarkı adını kullan",
                    albumName: "Albüm adını kullan"
                },
                sfm_useListeningStatus: {
                    description: "Dinleme durumunu göster.",
                    label: "Stats.fm: Dinleme Durumunu Kullan"
                },
                sfm_missingArt: {
                    description: "Kapak eksikse yedek.",
                    label: "Stats.fm: Eksik Kapak",
                    statsFmLogo: "Büyük Stats.fm logosunu kullan",
                    placeholder: "Genel yer tutucu kullan"
                },
                sfm_showLogo: {
                    description: "Albüm kapağının yanında Stats.fm logosunu göster.",
                    label: "Stats.fm: Logoyu Göster"
                },
                sfm_alwaysHideArt: {
                    description: "Albüm kapağı indirmeyi devre dışı bırak.",
                    label: "Stats.fm: Kapağı Her Zaman Gizle"
                },
                jf_serverUrl: {
                    description: "Jellyfin sunucu URL'si.",
                    label: "Jellyfin Sunucu URL'si"
                },
                jf_apiKey: {
                    description: "Jellyfin API anahtarı.",
                    label: "Jellyfin API Anahtarı"
                },
                jf_userId: {
                    description: "Jellyfin kullanıcı kimliği.",
                    label: "Jellyfin Kullanıcı Kimliği"
                },
                jf_nameDisplay: {
                    description: "Ad görüntüleme biçimi.",
                    label: "Jellyfin: Ad Görüntüleme",
                    default: "Dizi/Film Adı",
                    full: "Dizi - Bölüm/Parça/Film Adı",
                    custom: "Özel"
                },
                jf_customName: {
                    description: "Özel ad şablonu.",
                    label: "Jellyfin: Özel Ad"
                },
                jf_coverType: {
                    description: "TV dizileri için kapak türü.",
                    label: "Jellyfin: Kapak Türü",
                    series: "Dizi Kapağı",
                    episode: "Bölüm Kapağı"
                },
                jf_episodeFormat: {
                    description: "Bölüm numarası biçimi.",
                    label: "Jellyfin: Bölüm Biçimi",
                    long: "S01E01",
                    fulltext: "Sezon 1 Bölüm 1"
                },
                jf_showEpisodeName: {
                    description: "Sezon/bölüm bilgisinden sonra bölüm adını göster.",
                    label: "Jellyfin: Bölüm Adını Göster"
                },
                jf_overrideType: {
                    description: "Zengin durum türünü geçersiz kıl.",
                    label: "Jellyfin: Türü Geçersiz Kıl",
                    off: "Kapalı",
                    listening: "Dinliyor",
                    playing: "Oynuyor",
                    streaming: "Yayında",
                    watching: "İzliyor"
                },
                jf_showPausedState: {
                    description: "Medya duraklatıldığında durumu göster.",
                    label: "Jellyfin: Duraklatılmış Durumu Göster"
                },
                jf_privacyMode: {
                    description: "Medya ayrıntılarını gizle.",
                    label: "Jellyfin: Gizlilik Modu"
                },
                gr_refreshInterval: {
                    description: "Saniye cinsinden yenileme aralığı.",
                    label: "Gensokyo Radio: Yenileme Aralığı"
                },
                nd_serverUrl: {
                    description: "Navidrome sunucu URL'si (ör. https://navidrome.example.com)",
                    label: "Navidrome Sunucu URL'si"
                },
                nd_username: {
                    description: "Navidrome Kullanıcı Adı",
                    label: "Navidrome Kullanıcı Adı"
                },
                nd_password: {
                    description: "Navidrome Parolası",
                    label: "Navidrome Parolası"
                },
                nd_clientId: {
                    description: "İsteğe bağlı Discord Uygulaması İstemci Kimliği",
                    label: "Navidrome: İstemci Kimliği"
                },
                nd_showSmallImage: {
                    description: "Albüm kapağının sağ altında Navidrome logosunu göster.",
                    label: "Navidrome: Küçük Görseli Göster"
                },
                nd_showAlbum: {
                    description: "Durumda albüm adını göster.",
                    label: "Navidrome: Albümü Göster"
                },
                nd_albumArtMode: {
                    description: "Albüm kapağının nasıl alınacağı.",
                    label: "Navidrome: Albüm Kapağı Modu",
                    none: "Yok",
                    instance: "Navidrome Örneği (Sunucu URL'sini Discord'a açar, kimlik doğrulama gönderilmez)",
                    lastfm: "Last.fm API (Parça meta verilerini Last.fm'e gönderir)"
                },
                nd_lastfmApiKey: {
                    description: "İsteğe bağlı Last.fm API anahtarı",
                    label: "Navidrome: Last.fm API Anahtarı"
                },
                nd_refreshInterval: {
                    description: "Saniye cinsinden yenileme aralığı.",
                    label: "Navidrome: Yenileme Aralığı"
                },
                nd_activityType: {
                    description: "Hangi etkinlik türü",
                    label: "Navidrome: Etkinlik Türü",
                    listening: "Dinliyor",
                    playingFixesHiddenLines: "Oynuyor (Gizli satırları düzeltir)",
                    watching: "İzliyor"
                },
                nd_nameString: {
                    description: "Etkinlik adı biçim dizesi",
                    label: "Navidrome: Ad Dizesi"
                },
                nd_detailsString: {
                    description: "Etkinlik ayrıntıları biçim dizesi",
                    label: "Navidrome: Ayrıntı Dizesi"
                },
                nd_stateString: {
                    description: "Etkinlik durumu biçim dizesi",
                    label: "Navidrome: Durum Dizesi"
                },
                nd_largeTextString: {
                    description: "Etkinlik büyük metin biçim dizesi",
                    label: "Navidrome: Büyük Metin Dizesi"
                },
                nd_statusDisplayType: {
                    description: "Üye listesinde parça / sanatçı adını göster",
                    off: "Gösterme (genel dinleme mesajı gösterir)"
                },
                nd_hideOnPause: {
                    description: "Müzik duraklatıldığında Zengin Durumu gizle",
                    label: "Navidrome: Duraklatınca Gizle"
                }
            },
            panel: {
                password: "Şifre",
                statsFmUsername: "stats.fm kullanıcı adı",
                customStatusText: "Özel Durum Metni",
                nameFormat: "İsim Biçimi",
                missingArtFallback: "Eksik Kapak Yedeği",
                showListeningStatus: "Dinleme Durumunu Göster",
                showStatsFmLogo: "Stats.fm Logosunu Göster",
                showProfileLink: "Profil Bağlantısını Göster",
                showSongLink: "Şarkı Bağlantısını Göster",
                hideWithSpotify: "Spotify ile Gizle",
                hideWithExternalRpc: "Harici RPC ile Gizle",
                disableAlbumArt: "Albüm Kapağını Devre Dışı Bırak",
                apiKey: "API Anahtarı",
                userId: "Kullanıcı Kimliği (ID)",
                nameDisplay: "Ad Görüntüleme",
                customNameTemplate: "Özel Ad Şablonu",
                coverType: "Kapak Türü",
                episodeFormat: "Bölüm Biçimi",
                overridePresenceType: "Durum Türünü Geçersiz Kıl",
                showEpisodeName: "Bölüm Adını Göster",
                showWhenPaused: "Duraklatıldığında Göster",
                privacyMode: "Gizlilik Modu",
                refreshInterval: "Yenileme Aralığı",
                clientId: "İstemci Kimliği",
                albumArtMode: "Albüm Kapağı Modu",
                lastFmApiKey: "Last.fm API Anahtarı",
                showSmallImage: "Küçük Görseli Göster",
                showAlbum: "Albümü Göster",
                activityType: "Etkinlik Türü",
                statusDisplayType: "Durum Görüntüleme Türü",
                hideOnPause: "Duraklatınca Gizle",
                activityNameFormat: "Etkinlik Adı Biçimi",
                detailsFormat: "Ayrıntı Biçimi",
                stateFormat: "Durum Biçimi",
                largeTextFormat: "Büyük Metin Biçimi",
                enabled: "Etkin"
            }
        },
        sedEnhanced: {
            option: {
                regexByDefault: {
                    description: "`r` bayrağını tersine çevirir; `r` kullanmak regex dışı modu açar, kullanmamak regex modunu kullanır.",
                    label: "Varsayılan Olarak Regex"
                }
            },
            name: "SedEnhanced",
            description: "Discord'un temel `sed` desteğini genişletir."
        },
        showRolesInChat: {
            option: {
                showBots: {
                    description: "Botlarda en yüksek rolün gösterilip gösterilmeyeceği.",
                    label: "Botları Göster"
                },
                useRoleColor: {
                    description: "Simge için rolün rengini kullan.",
                    label: "Rol Rengini Kullan"
                }
            },
            name: "ShowRolesInChat",
            description: "Sohbet mesajlarında kullanıcının en yüksek rolünü adının yanında gösterir. Belirli rolleri bağlam menüsünden (sağ tık) gizle/göster.",
            text: {
                chatRoleActions: "Sohbet Rol İşlemleri",
                unhideRolesInChat: "Sohbetteki Rolleri Yeniden Göster",
                showRoleInChat: "Rolü Sohbette Göster",
                hideRoleInChat: "Rolü Sohbette Gizle"
            }
        },
        silenceUsers: {
            option: {
                mutedUserIds: {
                    description: "Pingleri ve sunucu rozetleri susturulacak Discord kullanıcı kimlikleri (virgülle ayrılmış).",
                    label: "Susturulan Kullanıcı Kimlikleri"
                }
            },
            name: "SilenceUsers",
            description: "Belirli kullanıcılardan gelen @bahsetme pinglerini ve sunucu rozet sayılarını susturur. Normal mesajlar ve DM'ler etkilenmez."
        },
        songLink: {
            text: {
                showIfAvailable: "Varsa göster",
                openInDesktopApp: "Masaüstü Uygulamasında Aç",
                loadingSongLink: "Şarkı bağlantısı yükleniyor...",
                pleaseProvideAMusic: "Lütfen bir müzik bağlantısı gir.",
                thisWillTakeA: "Bu biraz zaman alacak...",
                noAlternativePlatformsFound: "Bu bağlantı için alternatif platform bulunamadı.",
                failedToResolveMusic: "Müzik bağlantısı çözümlenemedi",
                logo: "{{name}} logosu"
            },
            option: {
                servicesSettings: {
                    description: "hizmet ayarları",
                    label: "Hizmet Ayarları"
                },
                userCountry: {
                    description: "Arama için kullanılan ülke (iki harfli ülke kodu)",
                    label: "Kullanıcı Ülkesi"
                },
                includeMetadata: {
                    description: "Parça adını ve sanatçı adını başlık olarak ekle.",
                    label: "Meta Verileri Ekle"
                }
            },
            name: "SongLink",
            description: "Şarkı bağlantılarının altına yayın hizmeti düğmeleri ekler",
            command: {
                musiclink: "Bir müzik bağlantısını diğer yayın platformlarına dönüştür.",
                url: "Müzik bağlantısı (Spotify, Deezer, YouTube, Tidal, Apple Music, SoundCloud)"
            }
        },
        songSpotlight: {
            name: "SongSpotlight",
            description: "Profilinde şarkılarını sergile",
            text: {
                songSpotlight: "Song Spotlight",
                explicit: "Müstehcen",
                addSong: "Şarkı ekle",
                addANewSong: "Yeni şarkı ekle",
                copyLink: "Bağlantıyı kopyala",
                removeSong: "Şarkıyı kaldır",
                failedToLoad: "Yüklenemedi!",
                areYouSure: "Emin misin?",
                thisWillOverwriteYour: "Bu, mevcut şarkılarının üzerine yazacak.",
                continue: "Devam",
                nevermind: "Boş ver",
                thisWillPermanentlyDelete: "Bu, tüm şarkılarını kalıcı olarak silecek.",
                delete: "Sil",
                signInToSong: "Song Spotlight'a giriş yap",
                songs: "Şarkılar",
                authorization: "Authorization",
                importFromClipboard: "Panodan içe aktar",
                copyToClipboard: "Panoya kopyala",
                signOut: "Çıkış yap",
                deleteSongs: "Şarkıları sil",
                more: "Daha fazla",
                editSongs: "Şarkıları düzenle",
                copyJson: "JSON'u kopyala",
                looksLikeThereS: "Görünüşe göre burada hiçbir şey yok!",
                uhOhSongSpotlight: "Hay aksi! Song Spotlight yüklenemedi. Daha fazla ayrıntı için konsolu kontrol edebilirsin.",
                stealSong: "Şarkıyı Çal",
                profileSongs: "Profil Şarkıları",
                notEnoughSpace: "Yeterli yer yok",
                alreadyAdded: "Bu şarkıyı zaten ekledin",
                invalidLink: "Geçersiz bağlantı",
                failedToParseLink: "Bağlantı ayrıştırılamadı",
                invalidUrl: "Geçersiz URL",
                goAddSongs: "Eee? Ne bekliyorsun? Song Spotlight'ına birkaç şarkı ekle!",
                tellUserToAddSongs: "{{name}} kullanıcısına Song Spotlight'ına birkaç şarkı eklemesini söyle!",
                supportedServices: "Song Spotlight şu servisleri destekler:",
                viewSongsVia: "Şarkılarını ayrıca",
                viewSongsViaSuffix: "komutuyla görüntüleyebilirsin!",
                coverTooltipOwner: "{{label}} - {{sublabel}}",
                coverTooltipBy: "{{sublabel}} - {{label}}",
                lastUpdated: "Son güncelleme",
                save: "Kaydet",
                showMore: "{{count}} tane daha göster"
            },
            toast: {
                youHaveBeenSigned: "Song Spotlight oturumun kapatıldı. Lütfen tekrar giriş yap.",
                songSpotlightError: "Song Spotlight: {{error}}",
                successfullyAuthorized: "Başarıyla yetkilendirildi!",
                failedToPlaySong: "Şarkı önizlemesi oynatılamadı!",
                addedSong: "Şarkı eklendi!",
                removedSong: "Şarkı kaldırıldı!",
                noJsonInClipboard: "Panoda JSON yok!",
                invalidSongSpotlightData: "Panodaki Song Spotlight verileri geçersiz!",
                oneOrMoreImported: "İçe aktarılan şarkılardan biri veya birkaçı geçersizdi.",
                importedSongsFromClipboard: "Şarkılar panodan içe aktarıldı!",
                successfullySavedSongs: "Şarkılar başarıyla kaydedildi!",
                successfullySignedOut: "Başarıyla çıkış yapıldı!",
                successfullyDeletedSongs: "Şarkılar başarıyla silindi!",
                youDonTHave: "Yeterli alanın yok!",
                uhOhThisSong: "Hay aksi, bu şarkı yok!",
                youAlreadyHaveThis: "Bu şarkıyı zaten eklemişsin!",
                youDonTHave2: "Bu şarkıyı... eklememişsin ki?",
                fetchError: "Song Spotlight isteği başarısız: {{path}}"
            },
            option: {
                collapseSongList: {
                    description: "Profillerdeki şarkı listesini ayrı bir menü açan bir düğmeye daraltır",
                    label: "Şarkı Listesini Daralt"
                },
                profileSongsLimit: {
                    description: "Bir kullanıcıya ilk tıklandığında kaç şarkı gösterileceği",
                    label: "Profil Şarkı Sınırı"
                },
                previewVolume: {
                    description: "Şarkı önizlemelerinin çalma sesi",
                    label: "Önizleme Ses Seviyesi"
                }
            }
        },
        stopAutoUnread: {
            name: "StopAutoUnread",
            description: "Discord'un bir kanalın bildirim ayarını otomatik olarak \"Tüm Mesajlar\"a yükseltmesini engeller"
        },
        themeLibrary: {
            text: {
                enablePlugin: "Eklentiyi Etkinleştir",
                cancel: "İptal",
                holdOn: "Bir dakika!",
                thisThemeRequiresThe: "Bu tema düzgün çalışmak için",
                pluginToWorkProperly: "eklentisine ihtiyaç duyuyor!",
                doYouWantTo: "Etkinleştirmek ister misin?",
                themeInfo: "Tema Bilgisi",
                viewSource: "Kaynağı Görüntüle",
                close: "Kapat",
                download: "İndir",
                overwrite: "Üzerine Yaz",
                keepMyFile: "Dosyamı Koru",
                copyToClipboard: "Panoya Kopyala",
                conflict: "Çakışma!",
                themeSource: "Tema Kaynağı",
                aThemeWithThe: "Aynı ada sahip bir tema",
                alreadyExists: "zaten var",
                inYourThemesDirectory: "tema klasöründe! Üzerine yazmak ister misin?",
                version: "Sürüm",
                likes: "Beğeniler",
                donate: "Bağış Yap",
                supportServer: "Destek Sunucusu",
                source: "Kaynak",
                tags: "Etiketler",
                youCanSupportThe: "Aşağıdan bağış yaparak yazarı destekleyebilirsin!",
                joinDiscordServer: "Discord Sunucusuna Katıl",
                viewThemeSource: "Tema Kaynağını Görüntüle",
                showAll: "Tümünü Göster",
                showThemes: "Temaları Göster",
                showSnippets: "Kod Parçacıklarını Göster",
                showMostLiked: "En Çok Beğenilenleri Göster",
                showDark: "Koyu Olanları Göster",
                showLight: "Açık Olanları Göster",
                showEnabled: "Etkin Olanları Göster",
                showDisabled: "Devre Dışı Olanları Göster",
                searchForATheme: "Tema ara...",
                gettingTheLatestThemes: "En yeni temalar alınıyor...",
                thisWonTTake: "Uzun sürmeyecek!",
                failedToFetchThemes: "Temalar alınamadı",
                couldNotFetchThe: "Tema listesi alınamadı. Daha sonra tekrar dene.",
                wantYourThemeRemoved: "Temanın kaldırılmasını mı istiyorsun?",
                hide: "Gizle",
                noThemeFound: "Tema bulunamadı.",
                tryNarrowingYourSearch: "Aramanı daraltmayı dene.",
                themeLibrary: "Tema Kitaplığı",
                successfullyAuthorizedWithThemelibrary: "ThemeLibrary ile başarıyla yetkilendirildi!",
                failedToAuthorizeCheck: "Yetkilendirme başarısız, konsolu kontrol et",
                successfullyDeauthorizedFromThemelibrary: "ThemeLibrary yetkisi başarıyla kaldırıldı!",
                failedToDeauthorizeCheck: "Yetki kaldırma başarısız, konsolu kontrol et",
                themelibraryAuth: "ThemeLibrary Kimlik Doğrulama",
                themeRemoval: "Tema Kaldırma",
                allThemeAuthorsAre: "Tüm tema yazarlarına tema bilgisinde yer verilir, hiçbir kaynak değiştirilmemiştir. Yine de temanın kaldırılmasını istiyorsan aşağıya tıklayarak bir Issue aç.",
                authorizeWithThemelibrary: "ThemeLibrary ile Yetkilendir",
                copyThemelibraryToken: "ThemeLibrary Belirtecini Kopyala",
                deauthorizeThemelibrary: "ThemeLibrary Yetkisini Kaldır",
                themeDetails: "{{name}} ayrıntıları",
                mostLiked: "En Çok Beğenilen",
                newestAdditions: "En Yeni Eklenenler",
                removeTheme: "Temayı Kaldır",
                addTheme: "Tema Ekle",
                authors: "Yazarlar",
                author: "Yazar",
                nobodyLikedTheme: "Bu temayı henüz kimse beğenmedi.",
                nobodyLikedSnippet: "Bu parçacığı henüz kimse beğenmedi.",
                usersLikedTheme: "{{likes}} kullanıcı bu temayı beğendi!",
                usersLikedSnippet: "{{likes}} kullanıcı bu parçacığı beğendi!",
                openThemeLibrary: "Tema Kütüphanesini Aç",
                lastUpdated: "Bu tema en son şu tarihte güncellendi:",
                removalInfo: "Tema(lar)ının kalıcı olarak kaldırılmasını istiyorsan lütfen şurada bir issue aç:",
                themes: "Temalar",
                requestRemoval: "Tema Kaldırma Talebi",
                pluginSuffix: "eklentisine ihtiyaç duyar!"
            },
            toast: {
                downloadedName: "{{name}} indirildi!",
                failedToDownloadName: "{{name}} indirilemedi! (konsolu kontrol et)",
                invalidOrExpiredInvite: "Geçersiz veya süresi dolmuş davet!",
                copiedToClipboard: "Panoya kopyalandı",
                noUniquetokenPresentTry: "uniqueToken yok, önce yetkilendirmeyi dene!",
                noTokenToCopy: "Kopyalanacak belirteç yok, önce yetkilendirmeyi dene!",
                copiedToClipboard2: "Panoya kopyalandı!"
            },
            name: "ThemeLibrary",
            description: "Plexcord için bir tema kitaplığı.",
            option: {
                hideWarningCard: {
                    description: "Tema kitaplığı sekmesinin üstündeki uyarı kartını gizle",
                    label: "Uyarı Kartını Gizle"
                },
                buttons: {
                    description: "ThemeLibrary Düğmeleri",
                    label: "Düğmeler"
                }
            }
        },
        translatePlus: {
            name: "Translate+",
            description: "Plexcord'un çeviri eklentisi, ama yapay dil desteğiyle!",
            text: {
                translate: "Çevir",
                dismiss: "Kapat",
                translationFailedDueTo: "Bir hata nedeniyle çeviri başarısız oldu.",
                translatedFrom: "{{lang}} dilinden çevrildi"
            },
            option: {
                target: {
                    description: "Hedef dil",
                    label: "Hedef"
                },
                toki: {
                    description: "Toki Pona'yı Etkinleştir",
                    label: "Toki Pona"
                },
                sitelen: {
                    description: "Sitelen Pona'yı Etkinleştir",
                    label: "Sitelen Pona"
                },
                shavian: {
                    description: "Shavian'ı Etkinleştir",
                    label: "Shavian"
                }
            }
        },
        triviaAI: {
            name: "TriviaAI",
            description: "Yapay zekâ kullanarak bilgi yarışması sorularını yanıtlamana yardım eden bir eklenti.",
            text: {
                answerWithAi: "Yapay Zekâ ile Yanıtla",
                enterApiKeyHere: "Yapay zekâ uç noktan için API anahtarını buraya gir.",
                enterSystemPrompt: "Sistem istemini gir.",
                enterYourOpenaiCompatible: "OpenAI uyumlu yapay zekâ uç noktanı buraya gir.",
                status: "Durum {{status}}"
            },
            option: {
                apiKey: {
                    description: "API anahtarı.",
                    label: "API Anahtarı"
                },
                model: {
                    description: "Kullanılacak yapay zekâ modeli.",
                    label: "Model",
                    placeholder: "ör. google/gemini-3-flash-preview, inception/mercury, openai/gpt-5.2-chat vb."
                },
                systemPrompt: {
                    description: "Yapay zekâ için sistem istemi. Yer tutucular: {current_user}, {current_time}",
                    label: "Sistem İstemi"
                },
                maxTokens: {
                    description: "Yanıttaki en fazla belirteç sayısı.",
                    label: "En Fazla Belirteç"
                },
                endpoint: {
                    description: "OpenAI uyumlu yapay zekâ uç noktası.",
                    label: "Uç Nokta"
                },
                context: {
                    description: "Bağlam olarak dahil edilecek önceki mesaj sayısı.",
                    label: "Bağlam"
                },
                passMessageAuthorName: {
                    description: "Mesaj içeriğini yapay zekâya iletirken başına yazarın adını ekle. Bu, yapay zekânın konuşmadaki farklı kullanıcıları ayırt etmesine yardımcı olabilir.",
                    label: "Mesaj Yazarının Adını İlet"
                },
                treatSelfAsAssistant: {
                    description: "Etkinleştirildiğinde kendi mesajların bağlamda asistan mesajı olarak işlenir. Bu, bazı modellerin hayran kurgusu üretmeye başlamasına neden olur.",
                    label: "Kendimi Asistan Olarak Say"
                },
                mode: {
                    description: "Yanıtlar nasıl işlenmeli?",
                    label: "Mod",
                    autoreply: "Otomatik Yanıt",
                    chatbar: "Sohbet Çubuğu Metnini Değiştir",
                    bot: "Clyde"
                },
                supportImages: {
                    description: "Görselleri bağlam için yapay zekâya ilet (varsa). Bu, tüm modellerce desteklenmez.",
                    label: "Görselleri Destekle"
                },
                sendImagesAsBase64: {
                    description: "Görselleri yapay zekâya base64 olarak gönder.",
                    label: "Görselleri Base64 Olarak Gönder"
                }
            },
            toast: {
                triviaaiApiSettingsAre: "TriviaAI: API ayarları eksik.",
                errorGettingResponseFrom: "Yapay zekâ modelinden yanıt alınırken hata oluştu"
            }
        },
        unreadCountBadge: {
            option: {
                showOnMutedChannels: {
                    description: "Sessize alınmış kanallarda okunmamış sayısını göster",
                    label: "Sessizdeki Kanallarda Göster"
                },
                notificationCountLimit: {
                    description: "Gerçek sayı yerine +99 göster",
                    label: "Bildirim Sayısı Sınırı"
                }
            },
            name: "UnreadCountBadge",
            description: "Kanal listesindeki kanallarda okunmamış mesaj sayısı rozetleri gösterir"
        },
        userPFP: {
            toast: {
                gifsWebpMustBe: "GIF/WebP dosyaları URL ile eklenmelidir. Imgur, GitHub, Tenor, Giphy ve Discord bağlantıları ek ayar gerektirmeden çalışır."
            },
            text: {
                save: "Kaydet",
                delete: "Sil",
                customAvatar: "Özel Avatar",
                original: "Orijinal",
                local: "Yerel",
                enterPngGifUrl: "PNG/GIF URL'si gir",
                setAvatar: "Avatar Belirle",
                usingTheSetAvatar: "Avatar belirleme özelliği yalnızca yereldir; değişikliği yalnızca sen görürsün.",
                joinUserpfpServer: "UserPFP Sunucusuna Katıl",
                dropHere: "Buraya bırak!",
                dragOrClick: "⬆ Bir resim sürükle veya yüklemek için tıkla (GIF veya WebP için bunun yerine URL kullan)",
                uploadedFile: "(yüklenen dosya)",
                supportHere: "UserPFP'yi buradan destekle"
            },
            option: {
                overrideServerAvatars: {
                    description: "Sunucu avatarlarını özel avatarlarla veya özel avatar yoksa varsayılan kullanıcı avatarıyla değiştir.",
                    label: "Sunucu Avatarlarını Geçersiz Kıl"
                },
                preferNitro: {
                    description: "Hem varsayılan hareketli (Nitro) profil resmi hem de UserPFP avatarı varsa hangisinin kullanılacağı",
                    label: "Nitro'yu Tercih Et",
                    false: "UserPFP",
                    true: "Nitro"
                },
                databaseSource: {
                    description: "Veritabanının yükleneceği URL",
                    label: "Veritabanı Kaynağı"
                }
            },
            name: "UserPFP",
            description: "Kendin ve diğer kullanıcılar için yerel statik veya animasyonlu avatarlar ayarlamanı sağlar"
        },
        userpluginInstaller: {
            toast: {
                restartToApplyChanges: "Değişiklikleri uygulamak için yeniden başlat!"
            },
            text: {
                installError: "Yükleme hatası",
                done: "Tamamlandı!",
                later: "Daha Sonra",
                updateError: "Güncelleme hatası",
                checkingForUpdates: "Güncellemeler denetleniyor...",
                loadingPlugins: "Eklentiler yükleniyor...",
                pluginUpdatesAvailable: "Eklenti Güncellemeleri Mevcut",
                theFollowingPluginsAre: "Aşağıdaki eklentiler güncel değil:",
                youCanUpdatePlugins: "Eklentileri aşağıdan güncelleyebilirsin.",
                installPlugin: "Eklentiyi Yükle",
                userplugininstallerNotFullyLoaded: "UserpluginInstaller tam olarak yüklenmedi",
                youNeedToRestart: "Yerel kısmın yüklenmesi için yeniden başlatman gerekiyor :)",
                restartNow: "Şimdi yeniden başlat",
                someUserpluginsAreOut: "Bazı UserPlugins güncel değil!",
                clickToOpenThe: "UserPlugin Güncelleyicisini açmak için tıkla",
                plexcordDoesNotModerate: "Plexcord kullanıcı eklentilerini denetlemez ve bunların yüklenmesinden doğabilecek hiçbir şeyden sorumlu değildir.",
                onlyInstallUserpluginsFrom: "Yalnızca güvendiğin geliştiricilerin kullanıcı eklentilerini yükle. Bunu yapmak tamamen kendi sorumluluğundadır.",
                setGitPath: "Git Yolunu Ayarla",
                installHint: "GitHub, GitLab, Codeberg, git.nin0.dev veya plugins.nin0.dev'den bir eklentiyi klonlama URL'sini buraya yapıştırarak yükleyebilirsin.",
                enableAndRestart: "Etkinleştir ve yeniden başlat",
                enableAndRefresh: "Etkinleştir ve yenile",
                tabCounts: "({{total}}, {{enabled}} etkin)",
                possiblyMore: "ve güncelleme denetimi bitmediği için muhtemelen daha fazlası. ",
                alreadyInstalled: "Eklenti zaten yüklü, aşağıdan güncelle",
                invalidUrl: "Geçersiz URL, yukarıdaki notu oku",
                install: "Yükle",
                restart: "Yeniden başlat",
                refresh: "Yenile",
                update: "Güncelle",
                source: "Kaynak",
                support: "Destek",
                managePlugins: "Eklentileri yönet",
                uninstalledRestart: "{{name}} kaldırıldı. Eklentiyi tamamen kaldırmak için yeniden başlatma gerekiyor.",
                uninstalledRefresh: "{{name}} kaldırıldı. Eklentiyi tamamen kaldırmak için yenileme gerekiyor.",
                updatedRestart: "{{name}} güncellendi. Güncellemeyi uygulamak için yeniden başlatma gerekiyor.",
                updatedRefresh: "{{name}} güncellendi. Güncellemeyi uygulamak için yenileme gerekiyor.",
                installedBody: "{{name}} başarıyla yüklendi. Şimdi ne yapmak istersin?",
                installedNativeBody: "{{name}} başarıyla yüklendi. Ancak native işlevler kullandığı için istemcinin yeniden başlatılması gerekiyor. Şimdi ne yapmak istersin?"
            },
            option: {
                allowlistedChannels: {
                    description: "Eklentiyi Yükle düğmesinin gösterileceği kanalların virgülle ayrılmış listesi. Plexcord Kullanıcı Eklentisi kanallarında her zaman gösterilir",
                    label: "İzin Verilen Kanallar"
                },
                notifyIfUpdate: {
                    description: "UserPlugins güncellenmesi gerekiyorsa Plexcord bildirimi göster",
                    label: "Güncelleme Varsa Bildir"
                },
                neverNotifyForPlugins: {
                    description: "Bu eklentiler için asla güncelleme bildirimi gösterme (yine de UserPlugins sekmesinden güncelleyebilirsin)",
                    label: "Bu Eklentiler İçin Asla Bildirme"
                }
            },
            name: "UserpluginInstaller",
            description: "Kullanıcı eklentilerini tek tıkla yükle"
        },
        vCPanelSettings: {
            option: {
                title1: {
                    label: "Başlık 1"
                },
                uncollapseSettingsByDefault: {
                    description: "Ses ayarlarını varsayılan olarak otomatik genişlet",
                    label: "Ayarları Varsayılan Olarak Genişlet"
                },
                title2: {
                    label: "Başlık 2"
                },
                outputVolume: {
                    description: "Çıkış ses seviyesi kaydırıcısı göster",
                    label: "Çıkış Ses Seviyesi"
                },
                inputVolume: {
                    description: "Giriş ses seviyesi kaydırıcısı göster",
                    label: "Giriş Ses Seviyesi"
                },
                outputDevice: {
                    description: "Çıkış aygıtı seçicisi göster",
                    label: "Çıkış Aygıtı"
                },
                inputDevice: {
                    description: "Giriş aygıtı seçicisi göster",
                    label: "Giriş Aygıtı"
                },
                camera: {
                    description: "Kamera seçicisi göster",
                    label: "Kamera"
                },
                title3: {
                    label: "Başlık 3"
                },
                showOutputVolumeHeader: {
                    description: "Çıkış ses seviyesi kaydırıcısının üstünde başlık göster",
                    label: "Çıkış Ses Seviyesi Başlığını Göster"
                },
                showInputVolumeHeader: {
                    description: "Giriş ses seviyesi kaydırıcısının üstünde başlık göster",
                    label: "Giriş Ses Seviyesi Başlığını Göster"
                },
                showOutputDeviceHeader: {
                    description: "Çıkış aygıtı seçicisinin üstünde başlık göster",
                    label: "Çıkış Aygıtı Başlığını Göster"
                },
                showInputDeviceHeader: {
                    description: "Giriş aygıtı seçicisinin üstünde başlık göster",
                    label: "Giriş Aygıtı Başlığını Göster"
                },
                showVideoDeviceHeader: {
                    description: "Kamera seçicisinin üstünde başlık göster",
                    label: "Video Aygıtı Başlığını Göster"
                }
            },
            name: "VCPanelSettings",
            description: "Ses ayarlarını doğrudan ses panelinden kontrol et",
            text: {
                appearance: "Görünüm",
                settingsToShow: "Gösterilecek ayarlar",
                headersToShow: "Gösterilecek başlıklar",
                outputVolume: "Çıkış ses seviyesi",
                inputVolume: "Giriş ses seviyesi",
                outputDevice: "Çıkış aygıtı",
                inputDevice: "Giriş aygıtı",
                settings: "Ayarlar",
                hide: "Gizle"
            }
        },
        voiceMessageTranscriber: {
            text: {
                autoDetect: "Otomatik Algıla",
                start: "Başlat",
                transcriptionOptions: "Yazıya Dökme Seçenekleri",
                audioLanguage: "Ses Dili",
                retry: "Tekrar Dene",
                transcriptionFailed: "Yazıya Dökme Başarısız",
                transcribeVoiceMessage: "Sesli Mesajı Yazıya Dök",
                close: "Kapat",
                baseRecommended: "Base (Önerilen)",
                small: "Small",
                largeV3TurboBest: "Large v3 Turbo (En iyi doğruluk, GPU önerilir)",
                transcribe: "Yazıya Dök",
                translateToEnglish: "İngilizceye Çevir",
                voiceMessageTranslation: "Sesli Mesaj Çevirisi",
                voiceMessageTranscription: "Sesli Mesaj Dökümü",
                hideTimestamps: "Zaman Damgalarını Gizle",
                showTimestamps: "Zaman Damgalarını Göster",
                copied: "Kopyalandı!",
                copyText: "Metni Kopyala",
                downloadingAudio: "Ses indiriliyor...",
                processingAudio: "Ses işleniyor...",
                loadingModel: "Model yükleniyor...",
                transcribing: "Yazıya dökülüyor...",
                transcription: "Döküm",
                transcriptionError: "Döküm Hatası",
                transcribingInProgress: "Yazıya dökme sürüyor...",
                initializing: "Başlatılıyor...",
                workerCrashed: "Döküm işleyicisi çöktü",
                workerStopped: "Döküm işleyicisi durduruldu",
                deleteCache: "Tüm önbellek dosyalarını sil ({{size}} MB)",
                action: "Eylem"
            },
            name: "VoiceMessageTranscriber",
            description: "Whisper destekli, cihaz üzerinde sesli mesaj yazıya dökme",
            option: {
                embed: {
                    description: "Yazıya dökümü pencere yerine doğrudan sesli mesaj ekinde göster.",
                    label: "Gömme"
                },
                maintainHorizontal: {
                    description: "Gömülü yazıya dökme kutusunun yatay boyutunu koru ve dikey olarak genişlet.",
                    label: "Yatayı Koru"
                },
                selectedModel: {
                    description: "Model boyutu.",
                    onnxcommunitywhispertiny: "Tiny (En hızlı, en düşük doğruluk)"
                },
                useGpu: {
                    description: "Destekleniyorsa modeli GPU'nda (WebGPU) çalıştır. Çok daha hızlıdır ve büyük modelleri kullanılabilir kılar. Kullanılamıyorsa CPU'ya geri döner.",
                    label: "GPU Kullan"
                },
                quantized: {
                    description: "CPU'da çalışırken nicemlenmiş modelleri kullan (daha küçük boyut, hafif kalite kaybı).",
                    label: "Nicemlenmiş"
                },
                deleteModalFiles: {
                    description: "Önbelleğe alınmış dosyaları depolamadan sil.",
                    label: "Model Dosyalarını Sil"
                }
            }
        },
        voiceMessagesInBackground: {
            name: "VoiceMessagesInBackground",
            description: "Senkronize bir mini oynatıcıyla sesli mesajların sohbetler arasında çalmaya devam etmesini sağlar.",
            text: {
                voiceMessagesInBackground: "Arka Plan Sesli Mesaj Oynatıcısı",
                returnToChannelname: "{{channelName}} kanalına dön",
                voiceMessagePosition: "Sesli mesaj konumu",
                changePlaybackSpeed: "Oynatma hızını değiştir",
                playbackSpeedSpeedTimes: "Oynatma hızı {{speed}} kat",
                closeVoiceMessagePlayer: "Sesli mesaj oynatıcısını kapat",
                voiceMessage: "Sesli mesaj",
                directMessage: "Özel mesaj",
                resume: "Sesli mesajı sürdür",
                pause: "Sesli mesajı duraklat"
            }
        },
        webPWA: {
            name: "WebPWA",
            description: "Discord'u uygulama (PWA) olarak yüklenebilir yapar. Bildirim rozetlerini, genel kısayolları ve Discord'un özel başlık çubuğunu etkinleştirir.",
            text: {
                activities: "Etkinlikler",
                hopIn: "Katıl",
                status: "Durum",
                emojis: "Emojiler",
                rooms: "Odalar",
                discord: "Discord",
                platforms: "Platformlar",
                keybindsInfoBefore: "Özel genel Bas-X tuş atamaları desteklenir. Değiştirmek için",
                keybindsInfoAfter: "adresine git. Basılı Tut-X tuş atamaları desteklenmez."
            }
        },
        "webRichPresence (arRPC)": {
            name: "WebRichPresence (arRPC)"
        },
        webScreenShare: {
            option: {
                resolution: {
                    description: "Çözünürlük",
                    label: "Çözünürlük"
                },
                frameRate: {
                    description: "Kare Hızı",
                    label: "Kare Hızı"
                },
                contentHint: {
                    description: "İçerik İpucu",
                    label: "İçerik İpucu"
                },
                systemAudio: {
                    description: "Sistem sesini kapat",
                    label: "Sistem Sesi"
                }
            },
            name: "WebScreenShare",
            description: "Bir ekran paylaşımı seçenekleri menüsü ekler. Çözünürlüğü, kare hızını, kodlama ipuçlarını ve sistem sesi ayarlarını değiştirmeni sağlar.",
            text: {
                stream: "Yayın",
                streamMuted: "Yayın Sessizde",
                streamMode: "Yayın Modu",
                muteStreamAudio: "Yayın Sesini Kapat",
                preventsSystemAudioFrom: "Sistem sesinin yayınına dahil edilmesini engeller.",
                showStreamPreviews: "Yayın Önizlemelerini Göster",
                allowsOthersToSee: "Başkalarının katılmadan önce yayınının önizlemesini görmesini sağlar.",
                smootherVideo: "Daha akıcı video",
                cleanerText: "Daha net metin",
                userPreset: "Kullanıcı ön ayarı",
                custom: "Özel",
                gaming: "Oyun",
                screenshare: "Ekran Paylaşımı"
            }
        },
        whitelistedEmojis: {
            option: {
                defaultEmojis: {
                    description: "Beyaz listede olmadıkça varsayılan Unicode emojilerini otomatik tamamlamadan gizle.",
                    label: "Varsayılan Emojiler"
                },
                serverEmojis: {
                    description: "Beyaz listede olmadıkça özel sunucu emojilerini otomatik tamamlamadan gizle.",
                    label: "Sunucu Emojileri"
                },
                disableToasts: {
                    description: "Emoji eklerken veya kaldırırken bildirim gösterme.",
                    label: "Bildirimleri Devre Dışı Bırak"
                },
                whiteListedEmojis: {
                    description: "Beyaz Listedeki Emojiler",
                    label: "Beyaz Listedeki Emojiler"
                },
                exportEmojis: {
                    description: "Emojileri Dışa Aktar",
                    label: "Emojileri Dışa Aktar"
                },
                importEmojis: {
                    description: "Emojileri İçe Aktar",
                    label: "Emojileri İçe Aktar"
                },
                resetEmojis: {
                    description: "Emojileri Sıfırla",
                    label: "Emojileri Sıfırla"
                }
            },
            name: "WhitelistedEmojis",
            description: "Beyaz listedeki küme dışındaki tüm mesaj emojilerini devre dışı bırakma imkânı ekler.",
            toast: {
                addedLengthEmojisTo: "Listeye {{length}} emoji eklendi, {{length}} tanesi zaten listedeydi",
                removedLengthEmojisFrom: "Listeden {{length}} emoji kaldırıldı",
                nameIsAlreadyIn: "\"{{name}}\" zaten listede",
                addedNameToThe: "\"{{name}}\" listeye eklendi",
                nameIsNotIn: "\"{{name}}\" listede değil",
                removedNameFromThe: "\"{{name}}\" listeden kaldırıldı",
                successfullyExportedEmojis: "Emojiler başarıyla dışa aktarıldı",
                successfullyImportedEmojis: "Emojiler başarıyla içe aktarıldı",
                invalidJsonData: "Geçersiz JSON verisi",
                failedToImportEmojis: "Emojiler içe aktarılamadı: {{err}}",
                resetEmojis: "Emojiler sıfırlandı"
            },
            text: {
                areYouSure: "Emin misin?",
                thisWillOverwriteYour: "Bu, mevcut beyaz listenin üzerine yazacak.",
                import: "İçe Aktar",
                cancel: "İptal",
                thisWillRemoveAll: "Bu, beyaz listendeki tüm emojileri kaldıracak.",
                reset: "Sıfırla",
                addAllGuildEmojis: "Tüm Sunucu Emojilerini Ekle",
                removeAllGuildEmojis: "Tüm Sunucu Emojilerini Kaldır",
                noEmojisInThe: "Beyaz listede emoji yok.",
                removeAll: "Tümünü Kaldır",
                removeFromWhitelist: "Beyaz Listeden Kaldır",
                addToWhitelist: "Beyaz Listeye Ekle",
                defaultEmojis: "Varsayılan Emojiler",
                guildEmojis: "{{name}} Emojileri",
                guildFallback: "Sunucu {{id}}",
                whitelistedEmojis: "Beyaz Listedeki Emojiler",
                remove: "Kaldır"
            }
        },
        wigglyText: {
            option: {
                intensity: {
                    description: "Px cinsinden animasyon yoğunluğu",
                    label: "Yoğunluk"
                }
            },
            name: "WigglyText",
            description: "Metni kıpır kıpır yapan yeni bir markdown biçimlendirmesi ekler.",
            text: {
                leftAndRight: "sağa ve sola",
                byTyping: "yazarak",
                upAndDown: "yukarı ve aşağı",
                inACircle: "daire şeklinde",
                youCanMakeTextWiggle: "Metni şu şekillerde dalgalandırabilirsin:"
            }
        },
        fixDiscordCss: {
            description: "Discord'un CSS gecikmesini düzeltir"
        },
        directFileDownload: {
            name: "DirectFileDownload",
            description: "Dosyaları tarayıcıda açmak yerine doğrudan Discord'dan indir"
        },
        githubRepos: {
            text: {
                failedToFetchRepositories: "Depolar alınamadı",
                personal: "Kişisel",
                unknown: "Bilinmiyor",
                sortedByCount: "Depo sayısına göre sıralı. A-Z sıralamak için tıkla",
                sortedAlphabetically: "A-Z sıralı. Depo sayısına göre sıralamak için tıkla",
                mostRepos: "En çok depo"
            }
        }
    }
} as const;

export default translations;
